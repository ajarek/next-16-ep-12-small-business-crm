import FormSearchFilter from "@/components/FormSearchFilter"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Circle,
  Clock,
  Plus,
  ListTodo,
  AlertCircle,
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

const TasksPage = async ({
  searchParams,
}: {
  searchParams: { query?: string }
}) => {
  const { query = "" } = await searchParams

  // Mock data for tasks
  const tasks = [
    {
      id: "1",
      title: "Follow up with client",
      assignedTo: "John Doe",
      dueDate: "2024-01-25",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "2",
      title: "Prepare sales proposal",
      assignedTo: "Jane Smith",
      dueDate: "2024-01-24",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: "3",
      title: "Update CRM records",
      assignedTo: "Michael Brown",
      dueDate: "2024-01-26",
      priority: "Low",
      status: "Completed",
    },
    {
      id: "4",
      title: "Call potential lead",
      assignedTo: "Sarah Wilson",
      dueDate: "2024-01-23",
      priority: "High",
      status: "In Progress",
    },
  ]

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(query.toLowerCase()),
  )

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className='w-4 h-4 text-green-500' />
      case "In Progress":
        return <Clock className='w-4 h-4 text-blue-500' />
      default:
        return <Circle className='w-4 h-4 text-muted-foreground' />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge variant='destructive'>{priority}</Badge>
      case "Medium":
        return (
          <Badge className='bg-orange-500 hover:bg-orange-600'>
            {priority}
          </Badge>
        )
      default:
        return <Badge variant='secondary'>{priority}</Badge>
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-6'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <h1 className='text-4xl text-left font-bold tracking-tight'>Tasks</h1>
          <p className='text-muted-foreground text-lg '>
            Stay organized and keep track of your team&apos;s responsibilities.
          </p>
        </div>
        <Button
          asChild
          className='h-12 px-6 shadow-lg hover:shadow-xl transition-all'
        >
          <Link
            href='/tasks/new'
            className='flex items-center gap-2 font-semibold'
          >
            <Plus className='w-5 h-5' />
            Create Task
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
              All Tasks{" "}
              <span className='text-muted-foreground text-xl'>
                ({filteredTasks.length})
              </span>
            </h2>
            <p className='text-muted-foreground'>
              Manage and prioritize your daily operations.
            </p>
          </div>
          <ListTodo className='w-8 h-8 text-primary opacity-20' />
        </div>

        {filteredTasks.length === 0 ? (
          <div className='w-full flex flex-col items-center justify-center py-12 text-center'>
            <div className='bg-muted p-4 rounded-full mb-4'>
              <AlertCircle className='w-8 h-8 text-muted-foreground' />
            </div>
            <p className='text-xl font-medium'>No tasks found</p>
            <p className='text-muted-foreground mr-1'>
              Try a different search or create a new task.
            </p>
          </div>
        ) : (
          <div className='w-full overflow-hidden'>
            <Table>
              <TableCaption>
                A comprehensive list of pending and completed tasks.
              </TableCaption>
              <TableHeader>
                <TableRow className='hover:bg-transparent'>
                  <TableHead>Status</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTasks.map((task) => (
                  <TableRow key={task.id} className='group transition-colors'>
                    <TableCell>
                      <div className='flex items-center gap-2'>
                        {getStatusIcon(task.status)}
                        <span className='font-medium'>{task.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className='font-semibold text-foreground group-hover:text-primary transition-colors'>
                      {task.title}
                    </TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell className='font-mono text-sm'>
                      {task.dueDate}
                    </TableCell>
                    <TableCell>{getPriorityBadge(task.priority)}</TableCell>
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

export default TasksPage
