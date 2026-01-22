import FormSearchFilter from "@/components/FormSearchFilter"
import { Button } from "@/components/ui/button"
import { getContactsAll } from "@/lib/action"
import { Plus, User, X } from "lucide-react"
import Link from "next/link"
import type { Contact } from "@/types/typeContact"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ButtonDeleteContact from "@/components/ButtonDeleteContact"

const Contacts = async ({
  searchParams,
}: {
  searchParams: { name?: string }
}) => {
  const { name = "" } = await searchParams
  const contacts = await getContactsAll()
  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-4'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <h1 className='text-4xl text-left font-bold '>Contacts</h1>
          <p className='text-lg '>
            Manage your customer relationships and contact information.
          </p>
        </div>
        <Button asChild className='h-12 px-4 cursor-pointer'>
          <Link href='/contacts/new' className='flex items-center gap-2'>
            <Plus />
            Add Contact
          </Link>
        </Button>
      </div>

      <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4'>
        <FormSearchFilter query='name' />
      </div>
      <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4 gap-2'>
        <h2 className='text-xl font-semibold'>
          Contacts <span className='text-2xl'>({contacts.length})</span>
        </h2>
        <p className=''>
          Manage your contact database and customer information.
        </p>
        <span className='w-full flex justify-center items-center gap-2'>
          <User className='w-12 h-12 text-muted-foreground' />
        </span>
        {contacts.length === 0 ? (
          <span className='w-full flex justify-center items-center gap-2'>
            <p>No contacts yet. Create your first contact!</p>
          </span>
        ) : (
          <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4 gap-2'>
            <Table>
              <TableCaption>Your client list.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts
                  .filter((contact: Contact) =>
                    contact.name.toLowerCase().includes(name.toLowerCase()),
                  )
                  .map((contact: Contact) => (
                    <TableRow key={contact._id}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>{contact.company}</TableCell>
                      <TableCell>{contact.notes}</TableCell>
                      <TableCell>
                        <ButtonDeleteContact id={contact._id || ""} />
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

export default Contacts
