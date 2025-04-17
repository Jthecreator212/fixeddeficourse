import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Get session and verify its validity
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Add additional session validation
  const isValidSession = session && new Date(session.expires_at!) > new Date()

  // Check if the request is for a protected route
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard")

  // Check if the request is for an auth route
  const isAuthRoute =
    req.nextUrl.pathname.startsWith("/auth/sign-in") ||
    req.nextUrl.pathname.startsWith("/auth/sign-up") ||
    req.nextUrl.pathname.startsWith("/auth/reset-password") ||
    req.nextUrl.pathname.startsWith("/auth/sign-out")

  // If accessing a protected route without a valid session, redirect to sign in
  if (isProtectedRoute && !isValidSession) {
    const response = NextResponse.redirect(new URL('/auth/sign-in', req.url))
    // Don't try to delete cookies here as it's handled by Supabase client
    return response
  }

  // If accessing an auth route with a valid session, redirect to dashboard
  if (isAuthRoute && isValidSession) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // Check if the request is for an admin route
  if (req.nextUrl.pathname.startsWith('/dashboard/admin')) {
    try {
      // If no valid session, redirect to login with admin redirect
      if (!isValidSession) {
        return NextResponse.redirect(new URL('/auth/sign-in?redirect=%2Fdashboard%2Fadmin', req.url))
      }
      
      // Check if user exists in users table and is admin
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', session!.user.id)
        .single()
      
      // Log the error details for debugging
      if (userError) {
        console.error('Error checking admin status:', {
          error: userError,
          userId: session!.user.id,
          email: session!.user.email,
          path: req.nextUrl.pathname
        })
      }
      
      // If user doesn't exist in users table or not an admin, redirect to home
      if (userError || !userData || !userData.is_admin) {
        console.error('Admin check failed:', { 
          userError, 
          userData,
          userId: session!.user.id,
          email: session!.user.email,
          path: req.nextUrl.pathname
        })
        return NextResponse.redirect(new URL('/?access=denied', req.url))
      }
      
      // Add admin info to request headers
      const requestHeaders = new Headers(req.headers)
      requestHeaders.set('x-admin-user-id', session!.user.id)
      
      // Return the response with modified headers
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    } catch (error) {
      console.error('Error in admin route middleware:', error)
      return NextResponse.redirect(new URL('/?error=admin_check_failed', req.url))
    }
  }

  return res
}

export const config = {
  matcher: [
    // Protected routes
    "/dashboard/:path*",
    // Auth routes
    "/auth/sign-in",
    "/auth/sign-up",
    "/auth/reset-password",
    "/auth/sign-out",
    // Admin routes temporarily for transition
    "/admin/:path*",
  ],
}
