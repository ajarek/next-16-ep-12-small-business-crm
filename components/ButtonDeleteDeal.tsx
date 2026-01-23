"use client"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import { removeDeal } from "@/lib/action"
import { toast } from "sonner"

const ButtonDeleteDeal = ({ id }: { id: string }) => {
  const handleRemoveDeal = async () => {
    await removeDeal(id)
    toast("Deal removed")
  }
  return (
    <Button
      variant='outline'
      size='icon'
      className={`cursor-pointer  hover:text-red-500  transition-colors duration-200`}
      onClick={handleRemoveDeal}
    >
      <Trash2 className='h-4 w-4' />
    </Button>
  )
}

export default ButtonDeleteDeal
