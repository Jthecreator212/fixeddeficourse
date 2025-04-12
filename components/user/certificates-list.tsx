import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Download, Eye } from "lucide-react"

export function CertificatesList() {
  // Mock data - in a real app, this would come from a database
  const certificates = [
    {
      id: 1,
      title: "DeFi Fundamentals",
      issueDate: "March 10, 2023",
      status: "completed",
    },
    {
      id: 2,
      title: "Advanced DeFi Strategies",
      issueDate: null,
      status: "in-progress",
      progress: 65,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <Card key={certificate.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-blue-500" />
                {certificate.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {certificate.status === "completed" ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Issued on</p>
                  <p className="font-medium">{certificate.issueDate}</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <div className="flex items-center">
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className="h-2 rounded-full bg-blue-500" style={{ width: `${certificate.progress}%` }}></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">{certificate.progress}%</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {certificate.status === "completed" ? (
                <>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </>
              ) : (
                <Button variant="outline" size="sm" className="w-full">
                  Continue Course
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
