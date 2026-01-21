import { FormSearchFilter } from "@/components/FormSearchFilter"
import { Button } from "@/components/ui/button"
import { Plus, User } from "lucide-react"
import Link from "next/link"


const Contacts = () => {
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
        <FormSearchFilter />
      </div>
      <div className='w-full flex flex-col items-start  border rounded-md border-primary p-4 gap-2'>
       <h2 className='text-xl font-semibold'>Contacts <span className="text-2xl">(0)</span></h2>
       <p className=''>Manage your contact database and customer information.</p>
       <span className="w-full flex justify-center items-center gap-2"><User className="w-12 h-12 text-muted-foreground" /></span>
       <span className="w-full flex justify-center items-center gap-2"><p>No contacts yet. Create your first contact!</p></span>
      </div>
    </div>
  )
}

export default Contacts
