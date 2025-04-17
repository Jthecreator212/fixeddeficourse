"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface SecureActionProps {
  onAction: () => Promise<void>
  requiresMFA?: boolean
  highRisk?: boolean
  actionName: string
  description?: string
}

export function SecureActionButton({ 
  onAction, 
  requiresMFA = true,
  highRisk = false,
  actionName,
  description
}: SecureActionProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [verified, setVerified] = useState(false)
  const [mfaCode, setMfaCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSecureAction = async () => {
    if (requiresMFA && !verified) {
      setIsVerifying(true)
      return
    }
    
    try {
      setIsLoading(true)
      await onAction()
      toast.success("Action completed successfully")
    } catch (error) {
      toast.error("Failed to complete action")
      console.error("Action failed:", error)
    } finally {
      setIsLoading(false)
      setVerified(false)
      setMfaCode("")
    }
  }

  const verifyMFA = async () => {
    try {
      // In a real implementation, you would verify the MFA code with your backend
      const response = await fetch('/api/admin/verify-mfa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: mfaCode }),
      })

      if (!response.ok) {
        throw new Error('Invalid MFA code')
      }

      setVerified(true)
      setIsVerifying(false)
      toast.success("Identity verified")
    } catch (error) {
      toast.error("Invalid verification code")
    }
  }

  return (
    <>
      <Button 
        onClick={handleSecureAction}
        className={highRisk ? 'bg-red-600 hover:bg-red-700' : ''}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : actionName}
      </Button>

      <Dialog open={isVerifying} onOpenChange={setIsVerifying}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify Your Identity</DialogTitle>
            <DialogDescription>
              {description || "Please enter your verification code to proceed with this action."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="mfa-code">Verification Code</Label>
              <Input
                id="mfa-code"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                placeholder="Enter 6-digit code"
                maxLength={6}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsVerifying(false)}>
              Cancel
            </Button>
            <Button onClick={verifyMFA}>
              Verify
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 