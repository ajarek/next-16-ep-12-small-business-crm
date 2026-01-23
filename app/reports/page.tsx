import { ChartBarDefault } from "@/components/Chart"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

const ReportsPage = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,500",
      description: "+12.5% from last month",
      icon: <DollarSign className='w-5 h-5 text-emerald-500' />,
      trend: "up",
    },
    {
      title: "New Contacts",
      value: "+142",
      description: "+4.2% from last month",
      icon: <Users className='w-5 h-5 text-blue-500' />,
      trend: "up",
    },
    {
      title: "Deals Closed",
      value: "28",
      description: "-2.1% from last month",
      icon: <Target className='w-5 h-5 text-indigo-500' />,
      trend: "down",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      description: "+1.1% from last month",
      icon: <TrendingUp className='w-5 h-5 text-purple-500' />,
      trend: "up",
    },
  ]

  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-8'>
      <div className='w-full flex flex-col items-start justify-start'>
        <h1 className='text-4xl font-bold tracking-tight'>
          Reports & Analytics
        </h1>
        <p className='text-muted-foreground text-lg '>
          In-depth insights into your business performance and growth.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        {stats.map((stat, index) => (
          <Card
            key={index}
            className='overflow-hidden border-primary/20 hover:border-primary transition-colors'
          >
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                {stat.title}
              </CardTitle>
              <div className='p-2 bg-secondary rounded-lg'>{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>{stat.value}</div>
              <div className='flex items-center gap-1 mt-1'>
                {stat.trend === "up" ? (
                  <ArrowUpRight className='w-4 h-4 text-emerald-500' />
                ) : (
                  <ArrowDownRight className='w-4 h-4 text-red-500' />
                )}
                <p
                  className={`text-xs ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                >
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full'>
        <div className='h-full'>
          <ChartBarDefault />
        </div>

        <Card className='flex flex-col'>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>
              Key takeaways from this month&apos;s activity.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/50 border'>
              <div className='p-2 bg-emerald-500/10 text-emerald-500 rounded-full'>
                <TrendingUp className='w-4 h-4' />
              </div>
              <div>
                <p className='font-semibold'>Revenue Growth</p>
                <p className='text-sm text-muted-foreground'>
                  Your revenue has increased by 12.5% compared to last month,
                  primarily driven by high-value deals in the
                  &quot;Negotiation&quot; stage.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/50 border'>
              <div className='p-2 bg-blue-500/10 text-blue-500 rounded-full'>
                <Users className='w-4 h-4' />
              </div>
              <div>
                <p className='font-semibold'>Lead Generation</p>
                <p className='text-sm text-muted-foreground'>
                  Lead acquisition is up 4.2%. Consider focusing on social media
                  marketing to further boost this metric.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/50 border'>
              <div className='p-2 bg-indigo-500/10 text-indigo-500 rounded-full'>
                <Target className='w-4 h-4' />
              </div>
              <div>
                <p className='font-semibold'>Efficiency Alert</p>
                <p className='text-sm text-muted-foreground'>
                  The average time to close a deal has increased by 3 days.
                  Review your sales pipeline for potential bottlenecks.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ReportsPage
