"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, CheckCircle, Clock, Award, BookOpen, Play } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  
  // Mock course progress data - would come from database in real app
  const courseProgress = [
    { id: 1, name: "Introduction to DeFi", progress: 100 },
    { id: 2, name: "Blockchain Basics: Getting Started", progress: 100 },
    { id: 3, name: "Blockchain Fundamentals", progress: 100 },
    { id: 4, name: "DeFi Lending Protocols", progress: 0 },
    { id: 5, name: "DeFi as a Business", progress: 0 },
  ]
  
  // Continue learning courses
  const continueLearning = [
    {
      id: 1, 
      title: "DeFi Lending Protocols",
      description: "Explore how lending and borrowing works in decentralized finance"
    },
    {
      id: 2, 
      title: "DeFi as a Business",
      description: "Explore business models, opportunities, and strategies in the DeFi ecosystem"
    }
  ]

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const supabase = createClientComponentClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          setUsername(session.user.email || null)
          
          // Check if already admin
          const { data } = await supabase
            .from("admin_users")
            .select("*")
            .eq("user_id", session.user.id)
            .single()
            
          setIsAdmin(!!data)
        } else {
          setIsAdmin(false)
        }
      } catch (error) {
        console.error("Error checking admin status:", error)
        setIsAdmin(false)
      }
    }
    
    checkAdminStatus()
  }, [])

  // Calculate overall progress
  const overallProgress = 38 // This would be calculated from actual data

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="bg-[#1f1f23] border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-[#8a70d6]" />
              <h3 className="font-medium text-muted-foreground">Modules Completed</h3>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-2xl font-bold">3/12</p>
              <p className="text-sm text-muted-foreground">25% of course completed</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1f1f23] border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[#8a70d6]" />
              <h3 className="font-medium text-muted-foreground">Hours Spent</h3>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-2xl font-bold">14.5</p>
              <p className="text-sm text-muted-foreground">Total learning time</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1f1f23] border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-[#8a70d6]" />
              <h3 className="font-medium text-muted-foreground">Quizzes Passed</h3>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-2xl font-bold">8/15</p>
              <p className="text-sm text-muted-foreground">53% success rate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1f1f23] border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-[#8a70d6]" />
              <h3 className="font-medium text-muted-foreground">Lessons Viewed</h3>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-2xl font-bold">24/48</p>
              <p className="text-sm text-muted-foreground">50% of lessons viewed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Course Progress</h2>
          <Card className="bg-[#1f1f23] border-0 p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Overall Progress</span>
                  <span className="text-sm">{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-2 bg-gray-800" />
              </div>
              
              {courseProgress.map((course) => (
                <div key={course.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{course.name}</span>
                    <span className="text-sm">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2 bg-gray-800" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Continue Learning Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
          <div className="space-y-4">
            {continueLearning.map((course) => (
              <Card key={course.id} className="bg-[#1f1f23] border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <Button className="w-full bg-[#8a70d6] hover:bg-[#7a60c6]">
                    <Play className="h-4 w-4 mr-2" /> Continue
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Admin Link - if user is admin */}
      {isAdmin && (
        <div className="mt-8">
          <Link 
            href="/admin" 
            className="inline-flex items-center gap-2 text-[#8a70d6] hover:text-[#7a60c6]"
          >
            <Shield className="h-5 w-5" />
            <span>Go to Admin Dashboard</span>
          </Link>
        </div>
      )}
    </div>
  )
} 