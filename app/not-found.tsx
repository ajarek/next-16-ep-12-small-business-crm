import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className='max-w-5xl mx-auto px-5 min-h-screen flex items-center justify-center '>
      <div className='w-full flex flex-col items-center text-center gap-6'>
        <h1 className='text-4xl font-serif text-primary mt-4'>
         Page not found!
        </h1>

        <p className='max-w-lg text-muted-foreground text-lg'>
          It appears this page is unavailable or the address is incorrect. Try returning to the home page or verifying the URL.
        </p>

        <div className='flex gap-3'>
          <Link href='/'>
            <Button className='rounded-xl'>Return to the main page</Button>
          </Link>
        </div>

        <p className='text-xl text-muted-foreground'>Error code: 404</p>
      </div>
    </main>
  )
}
