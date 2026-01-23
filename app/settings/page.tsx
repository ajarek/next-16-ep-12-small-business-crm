import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Bell, Shield, Palette, Save, AppWindow } from "lucide-react"

const SettingsPage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start p-4 min-h-screen gap-8'>
      <div className='w-full flex flex-col items-start'>
        <h1 className='text-4xl font-bold tracking-tight'>Settings</h1>
        <p className='text-muted-foreground text-lg '>
          Manage your account preferences and application settings.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-8 w-full'>
        {/* Navigation Sidebar for Settings */}
        <aside className='w-full lg:w-64 flex flex-col gap-2'>
          <Button
            variant='ghost'
            className='justify-start gap-2 bg-secondary/50 font-semibold px-4'
          >
            <User className='w-4 h-4' />
            Profile
          </Button>
          <Button
            variant='ghost'
            className='justify-start gap-2 px-4 opacity-70 hover:opacity-100'
          >
            <Bell className='w-4 h-4' />
            Notifications
          </Button>
          <Button
            variant='ghost'
            className='justify-start gap-2 px-4 opacity-70 hover:opacity-100'
          >
            <Shield className='w-4 h-4' />
            Security
          </Button>
          <Button
            variant='ghost'
            className='justify-start gap-2 px-4 opacity-70 hover:opacity-100'
          >
            <Palette className='w-4 h-4' />
            Appearance
          </Button>
          <Button
            variant='ghost'
            className='justify-start gap-2 px-4 opacity-70 hover:opacity-100'
          >
            <AppWindow className='w-4 h-4' />
            Integrations
          </Button>
        </aside>

        {/* Settings Content */}
        <div className='flex-1 flex flex-col gap-6'>
          <Card className='border shadow-md'>
            <CardHeader>
              <CardTitle className='text-2xl'>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details and how others see you.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    id='firstName'
                    placeholder='John'
                    defaultValue='John'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input id='lastName' placeholder='Doe' defaultValue='Doe' />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john.doe@example.com'
                  defaultValue='john.doe@example.com'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='company'>Company Name</Label>
                <Input
                  id='company'
                  placeholder='Acme Inc.'
                  defaultValue='Acme CRM Solutions'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='bio'>Bio</Label>
                <textarea
                  id='bio'
                  className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  placeholder='Tell us a little about yourself...'
                  defaultValue='Sales Manager at Acme CRM, focused on building lasting customer relationships.'
                />
              </div>
            </CardContent>
            <CardFooter className='flex justify-end border-t p-6'>
              <Button className='gap-2'>
                <Save className='w-4 h-4' />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card className='border shadow-md border-destructive/20 bg-destructive/5'>
            <CardHeader>
              <CardTitle className='text-xl text-destructive'>
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible actions for your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='font-semibold'>Delete Account</p>
                  <p className='text-sm text-muted-foreground'>
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                </div>
                <Button variant='destructive'>Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
