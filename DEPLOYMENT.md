# DeFi Master Course - Deployment Guide

This guide will help you deploy the DeFi Master Course application to production.

## Prerequisites

- A Vercel account
- A Supabase account
- Node.js 18+ installed locally

## Setup Supabase

1. Create a new Supabase project
2. Run the SQL migrations in the `migrations` folder in the Supabase SQL editor
3. Configure authentication in the Supabase dashboard:
   - Enable Email/Password sign-in
   - Set up email templates for verification and password reset
   - Configure site URL to match your production domain

## Environment Variables

Set up the following environment variables in your Vercel project:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
- `SUPABASE_URL`: Same as NEXT_PUBLIC_SUPABASE_URL
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for admin operations)

## Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel
3. Configure the environment variables in the Vercel dashboard
4. Deploy the application

## Post-Deployment

After deployment, verify the following:

1. User registration and authentication work correctly
2. Module content loads properly
3. Progress tracking is functioning
4. Admin dashboard is accessible to admin users

## Troubleshooting

If you encounter issues:

1. Check the Vercel deployment logs
2. Verify Supabase connection and permissions
3. Ensure all environment variables are correctly set
4. Check browser console for client-side errors

## Regular Maintenance

1. Keep your dependencies updated
2. Monitor Supabase usage and quotas
3. Backup your database regularly
4. Update course content as needed
