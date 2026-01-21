import { NewContactForm } from "@/components/FormNewContact"

const NewContact = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-4'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <h1 className='text-4xl text-left font-bold '>New Contact</h1>
          <p className='text-lg '>
            Create a new contact and manage your customer relationships.
          </p>
        </div>
      </div>
      <NewContactForm />
    </div>
  )
}

export default NewContact
