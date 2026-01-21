import { ChartBarDefault } from "@/components/Chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Calendar,
  CircleEllipsis,
  DollarSign,
  Handshake,
  SquareCheck,
  TriangleAlert,
  Users,
} from "lucide-react"

import { Progress } from "@/components/ui/progress"

const cardsData1 = [
  {
    title: "Total Contacts",
    value: "1,200",
    description: "Active customer relationships",
    icon: Users,
  },
  {
    title: "Active Deals",
    value: "500",
    description: "$500 total value",
    icon: Handshake,
  },
  {
    title: "Revenue Won",
    value: "$0",
    description: "From 0 closed deals",
    icon: DollarSign,
  },
  {
    title: "Task Completion",
    value: "20%",
    description: <Progress value={20} />,
    icon: CircleEllipsis,
  },
]
const cardsData2 = [
  {
    title: "Deal Pipeline",
    description: "Distribution of deals by stage",
    content: <ChartBarDefault />,
  },
  {
    title: "Completed Tasks",

    description: "Breakdown of recent activities",
  },
]

const cardsData3 = [
  {
    title: "Overdue Tasks",
    description: "No overdue tasks",
    icon: TriangleAlert,
    color: "red",
  },

  {
    title: "Upcoming Tasks",
    description: "No upcoming tasks",
    icon: SquareCheck,
    color: "blue",
  },
  {
    title: "Recent Activities",
    description: "No recent activities",
    icon: Calendar,
    color: "green",
  },
]
export default function Dashboard() {
  return (
    <main className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-4'>
      <div className='w-full'>
        <h1 className='text-4xl text-left font-bold '>Dashboard</h1>
        <p className='text-lg '>
          Welcome to your CRM dashboard. Here&apos;s an overview of your
          business.
        </p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  border rounded-md border-primary p-4'>
        {cardsData1.map((card) => (
          <Card key={card.title} className='mx-auto w-full '>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>{card.title}</CardTitle>
              <span>
                <card.icon className='h-4 w-4' />
              </span>
            </CardHeader>
            <CardContent>
              <span className="text-xl">{card.value}</span>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-4  border rounded-md border-primary p-4'>
        {cardsData2.map((card) => (
          <Card key={card.title} className='mx-auto w-full '>
            <CardHeader className='flex flex-col items-start gap-2'>
              <CardTitle className='text-xl'>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>{card.content}</CardContent>
          </Card>
        ))}
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  border rounded-md border-primary p-4'>
        {cardsData3.map((card) => (
          <Card key={card.title} className='mx-auto w-full '>
            <CardHeader className='flex items-center gap-2'>
              <span>
                <card.icon className='h-4 w-4' color={card.color} />
              </span>
              <CardTitle className='text-xl'>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
