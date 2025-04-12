import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

const modules = [
  {
    id: "1",
    name: "Introduction to DeFi",
    progress: 100,
    status: "completed",
    quizScore: 95,
    timeSpent: "2h 15m",
    completedDate: "Jan 15, 2023",
  },
  {
    id: "2",
    name: "Blockchain Fundamentals",
    progress: 100,
    status: "completed",
    quizScore: 88,
    timeSpent: "4h 30m",
    completedDate: "Jan 28, 2023",
  },
  {
    id: "3",
    name: "Smart Contracts",
    progress: 100,
    status: "completed",
    quizScore: 92,
    timeSpent: "5h 45m",
    completedDate: "Feb 10, 2023",
  },
  {
    id: "4",
    name: "Decentralized Exchanges",
    progress: 100,
    status: "completed",
    quizScore: 90,
    timeSpent: "6h 20m",
    completedDate: "Mar 5, 2023",
  },
  {
    id: "5",
    name: "Lending and Borrowing",
    progress: 100,
    status: "completed",
    quizScore: 94,
    timeSpent: "4h 50m",
    completedDate: "Apr 12, 2023",
  },
  {
    id: "6",
    name: "Yield Farming",
    progress: 100,
    status: "completed",
    quizScore: 85,
    timeSpent: "5h 10m",
    completedDate: "May 20, 2023",
  },
  {
    id: "7",
    name: "DeFi Risk Management",
    progress: 65,
    status: "in-progress",
    quizScore: null,
    timeSpent: "3h 25m",
    completedDate: null,
  },
  {
    id: "8",
    name: "Advanced DeFi Strategies",
    progress: 0,
    status: "not-started",
    quizScore: null,
    timeSpent: "0h 0m",
    completedDate: null,
  },
]

export function UserModuleProgress() {
  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <div key={module.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {module.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : module.status === "in-progress" ? (
                <Clock className="h-5 w-5 text-amber-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-gray-400" />
              )}
              <span className="font-medium">{module.name}</span>
            </div>
            <Badge
              variant={
                module.status === "completed" ? "default" : module.status === "in-progress" ? "outline" : "secondary"
              }
            >
              {module.status === "completed"
                ? "Completed"
                : module.status === "in-progress"
                  ? "In Progress"
                  : "Not Started"}
            </Badge>
          </div>
          <Progress value={module.progress} className="h-2" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {module.quizScore !== null && (
              <div>
                Quiz Score: <span className="font-medium">{module.quizScore}%</span>
              </div>
            )}
            <div>
              Time Spent: <span className="font-medium">{module.timeSpent}</span>
            </div>
            {module.completedDate && (
              <div>
                Completed: <span className="font-medium">{module.completedDate}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
