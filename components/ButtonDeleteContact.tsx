'use client'
import { Button } from "./ui/button"
import { Trash2, X } from "lucide-react"
import { removeContact } from "@/lib/action"
import { toast } from "sonner"

const ButtonDeleteContact = ({ id }: { id: string }) => {
    const handleRemoveContact = async () => {
        await removeContact(id)
        toast("Contact removed")
    }
  return (
     <Button
      variant='outline'
      size='icon'
      className={`cursor-pointer  hover:text-red-500  transition-colors duration-200`}
      onClick={handleRemoveContact}
    >
      <Trash2 className='h-4 w-4' />
    </Button>
  )
}

export default ButtonDeleteContact
