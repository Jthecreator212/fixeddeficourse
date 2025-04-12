import { Zap, Shield, Clock, Award, BookOpen, Users } from "lucide-react"

export function Features() {
  const courseFeatures = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Beginner-Friendly Approach",
      description:
        "Complex DeFi concepts explained with simple analogies, fun examples, and everyday language anyone can understand.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-400" />,
      title: "Practical Step-by-Step Guides",
      description:
        "Follow along with detailed instructions to swap tokens, provide liquidity, stake, and lend - starting with as little as $1.",
    },
    {
      icon: <Shield className="h-10 w-10 text-pink-400" />,
      title: "Security-First Mindset",
      description:
        "Learn essential wallet security, risk management, and how to protect your assets from common DeFi pitfalls and scams.",
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400" />,
      title: "Proven Strategies",
      description:
        "Study real-world case studies of successful DeFi users who've built sustainable income streams through smart DeFi tactics.",
    },
    {
      icon: <Clock className="h-10 w-10 text-green-400" />,
      title: "Latest 2025 Trends",
      description:
        "Stay ahead with coverage of Bitcoin staking, Real World Assets (RWA), and other emerging opportunities in the DeFi space.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-400" />,
      title: "Community Support",
      description:
        "Connect with fellow learners through recommended Discord channels, Telegram groups, and other DeFi communities.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-10">
          {/* Heading and description centered */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Learn DeFi With Us?</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our course combines simple explanations, practical guidance, and proven strategies to help complete
              beginners master DeFi with confidence.
            </p>
          </div>

          {/* Feature cards in a grid below */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-lg bg-secondary/50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
