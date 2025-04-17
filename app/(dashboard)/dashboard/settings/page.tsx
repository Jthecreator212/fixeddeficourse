"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Bell, Mail, Lock, Globe, Moon, Sun, Palette } from "lucide-react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList className="bg-[#1f1f23] border-gray-800">
          <TabsTrigger value="account" className="data-[state=active]:bg-[#8a70d6] data-[state=active]:text-white">Account</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-[#8a70d6] data-[state=active]:text-white">Notifications</TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-[#8a70d6] data-[state=active]:text-white">Appearance</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#8a70d6] data-[state=active]:text-white">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card className="bg-[#1f1f23] border-0">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" className="bg-[#18181b] border-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-[#18181b] border-gray-800" />
              </div>
              <Button className="bg-[#8a70d6] hover:bg-[#7a60c6]">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="bg-[#1f1f23] border-0">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-[#8a70d6]" />
              </div>
              <Separator className="bg-gray-800" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Course Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new course content
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-[#8a70d6]" />
              </div>
              <Separator className="bg-gray-800" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Certificate Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about your certificates
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-[#8a70d6]" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card className="bg-[#1f1f23] border-0">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how the application looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Palette className="h-5 w-5 text-[#8a70d6]" />
                  <div className="space-y-0.5">
                    <Label>Theme</Label>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred theme
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`w-9 h-9 border-gray-700 ${theme === 'light' ? 'bg-[#8a70d6] text-white' : 'bg-[#18181b]'}`}
                    onClick={() => setTheme('light')}
                    disabled={!mounted}
                  >
                    <Sun className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`w-9 h-9 border-gray-700 ${theme === 'dark' ? 'bg-[#8a70d6] text-white' : 'bg-[#18181b]'}`}
                    onClick={() => setTheme('dark')}
                    disabled={!mounted}
                  >
                    <Moon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <Separator className="bg-gray-800" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Globe className="h-5 w-5 text-[#8a70d6]" />
                  <div className="space-y-0.5">
                    <Label>Language</Label>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred language
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="bg-[#18181b] border-gray-700">
                  English
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card className="bg-[#1f1f23] border-0">
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="bg-[#18181b] border-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="bg-[#18181b] border-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" className="bg-[#18181b] border-gray-800" />
              </div>
              <Button className="bg-[#8a70d6] hover:bg-[#7a60c6]">Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 