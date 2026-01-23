import FormSearchFilter from "@/components/FormSearchFilter"
import { Button } from "@/components/ui/button"
import {
  Activity,
  Plus,
  History,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const ActivitiesPage = async ({
  searchParams,
}: {
  searchParams: { query?: string }
}) => {
  const { query = "" } = await searchParams

  // Mock data for activities
  const activities = [
    {
      id: "1",
      type: "Call",
      contact: "John Doe",
      description: "Discussed upcoming project requirements",
      date: "2024-01-23 10:30 AM",
      status: "Completed",
    },
    {
      id: "2",
      type: "Email",
      contact: "Jane Smith",
      description: "Sent follow-up email regarding the proposal",
      date: "2024-01-23 11:45 AM",
      status: "Sent",
    },
    {
      id: "3",
      type: "Meeting",
      contact: "Michael Brown",
      description: "Quarterly review meeting",
      date: "2024-01-22 02:00 PM",
      status: "Scheduled",
    },
    {
      id: "4",
      type: "Note",
      contact: "Sarah Wilson",
      description: "Added internal note about client preferences",
      date: "2024-01-22 04:15 PM",
      status: "Added",
    },
  ]

  const filteredActivities = activities.filter(
    (activity) =>
      activity.contact.toLowerCase().includes(query.toLowerCase()) ||
      activity.description.toLowerCase().includes(query.toLowerCase()) ||
      activity.type.toLowerCase().includes(query.toLowerCase()),
  )

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "Call":
        return <Phone className='w-4 h-4' />
      case "Email":
        return <Mail className='w-4 h-4' />
      case "Meeting":
        return <MessageSquare className='w-4 h-4' />
      default:
        return <History className='w-4 h-4' />
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-6'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <h1 className='text-4xl text-left font-bold tracking-tight'>
            Activities
          </h1>
          <p className='text-muted-foreground text-lg '>
            Monitor and track all interactions with your contacts.
          </p>
        </div>
        <Button
          asChild
          className='h-12 px-6 shadow-lg hover:shadow-xl transition-all'
        >
          <Link
            href='/activities/new'
            className='flex items-center gap-2 font-semibold'
          >
            <Plus className='w-5 h-5' />
            Log Activity
          </Link>
        </Button>
      </div>

      <div className='w-full flex flex-col items-start border rounded-xl bg-card shadow-sm p-6'>
        <div className='w-full max-w-md'>
          <FormSearchFilter query='query' />
        </div>
      </div>

      <div className='w-full flex flex-col items-start border rounded-xl bg-card shadow-sm p-6 gap-6'>
        <div className='flex items-center justify-between w-full'>
          <div>
            <h2 className='text-2xl font-bold'>
              Activity Feed{" "}
              <span className='text-muted-foreground text-xl'>
                ({filteredActivities.length})
              </span>
            </h2>
            <p className='text-muted-foreground'>
              A history of your team&apos;s engagement.
            </p>
          </div>
          <Activity className='w-8 h-8 text-primary opacity-20' />
        </div>

        {filteredActivities.length === 0 ? (
          <div className='w-full flex flex-col items-center justify-center py-12 text-center'>
            <div className='bg-muted p-4 rounded-full mb-4'>
              <History className='w-8 h-8 text-muted-foreground' />
            </div>
            <p className='text-xl font-medium'>No activities found</p>
            <p className='text-muted-foreground'>
              Adjust your search or log a new activity.
            </p>
          </div>
        ) : (
          <div className='w-full overflow-hidden'>
            <Table>
              <TableCaption>
                A summary of recent business interactions.
              </TableCaption>
              <TableHeader>
                <TableRow className='hover:bg-transparent'>
                  <TableHead className='w-[100px]'>Type</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className='max-w-[300px]'>Description</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredActivities.map((activity) => (
                  <TableRow
                    key={activity.id}
                    className='group transition-colors'
                  >
                    <TableCell>
                      <div className='flex items-center gap-2 font-medium'>
                        <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                          {getActivityIcon(activity.type)}
                        </div>
                        {activity.type}
                      </div>
                    </TableCell>
                    <TableCell className='font-semibold'>
                      {activity.contact}
                    </TableCell>
                    <TableCell className='text-muted-foreground'>
                      {activity.description}
                    </TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>
                      <Badge variant='secondary' className='font-medium'>
                        {activity.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivitiesPage
