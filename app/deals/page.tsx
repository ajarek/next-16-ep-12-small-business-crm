import FormSearchFilter from "@/components/FormSearchFilter"
import { Button } from "@/components/ui/button"
import { getDealsAll } from "@/lib/action"
import { DollarSign, Plus } from "lucide-react"
import Link from "next/link"
import type { Deal } from "@/types/typeDeal"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ButtonDeleteDeal from "@/components/ButtonDeleteDeal"

const Deals = async ({ searchParams }: { searchParams: { name?: string } }) => {
  const { name = "" } = await searchParams
  const deals = (await getDealsAll()) || []
  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-4'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <h1 className='text-4xl text-left font-bold '>Deals</h1>
          <p className='text-lg '>
            Track your sales opportunities and manage your pipeline.
          </p>
        </div>
        <Button asChild className='h-12 px-4 cursor-pointer'>
          <Link href='/deals/new' className='flex items-center gap-2'>
            <Plus />
            Add Deal
          </Link>
        </Button>
      </div>

      <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4'>
        <FormSearchFilter query='name' />
      </div>
      <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4 gap-2'>
        <h2 className='text-xl font-semibold'>
          Deals <span className='text-2xl'>({deals.length})</span>
        </h2>
        <p className=''>Manage your sales pipeline and track deal progress.</p>
        <span className='w-full flex justify-center items-center gap-2'>
          <DollarSign className='w-12 h-12 text-muted-foreground' />
        </span>
        {deals.length === 0 ? (
          <span className='w-full flex justify-center items-center gap-2'>
            <p>No deals yet. Create your first deal!</p>
          </span>
        ) : (
          <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4 gap-2'>
            <Table>
              <TableCaption>Your current deals.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Expected Close Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deals
                  .filter((deal: Deal) =>
                    deal.title.toLowerCase().includes(name.toLowerCase()),
                  )
                  .map((deal: Deal) => (
                    <TableRow key={deal._id}>
                      <TableCell>{deal.title}</TableCell>
                      <TableCell>{deal.contact}</TableCell>
                      <TableCell>${deal.value}</TableCell>
                      <TableCell>{deal.stage}</TableCell>
                      <TableCell>{deal.expectedCloseDate}</TableCell>
                      <TableCell>{deal.description}</TableCell>
                      <TableCell>
                        <ButtonDeleteDeal id={deal._id || ""} />
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

export default Deals
