"use client"


import { Input } from "./ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

interface SearchProps {
  query: string
}

const FormSearchFilter = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/contacts?${params.toString()}`)
    } catch (error) {
      console.error("Failed to replace URL parameters:", error)
    }
  }

  return (
    <div className='relative w-full flex-1 hidden sm:inline-flex'>
      <Search className='absolute top-1/2 left-2 -translate-y-1/2' />
      <Input
        placeholder='Search contacts'
        className='w-full  px-10 dark: bg-white'
        type='search'
        name='name'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
      />
    </div>
  )
}

export default FormSearchFilter