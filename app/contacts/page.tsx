import { FormSearchFilter } from "@/components/FormSearchFilter"
import { Button } from "@/components/ui/button"
import {  Plus } from "lucide-react"
import Link from "next/link"
import React from "react"

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
        <Button asChild className='h-12 rounded-full px-4 cursor-pointer'>
            <Link href='/contacts/new' className='flex items-center gap-2'>
            <Plus />
            Add Contact
          </Link>
        </Button>
      </div>
     
      <div className='w-full flex flex-col items-start  border-2 border-primary p-4'>
        <h2 className='text-xl font-semibold'>Search & Filter</h2>
        <FormSearchFilter />
      </div>
    </div>
  )
}

export default Contacts
