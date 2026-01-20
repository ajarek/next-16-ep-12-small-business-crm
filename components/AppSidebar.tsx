import { Calendar, ChartColumn, Handshake, Home, Inbox, LayoutDashboard, Search, Settings, SquareCheck, Users } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
 
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: Users,
  },
  {
    title: "Deals",
    url: "/deals",
    icon:Handshake ,
  },
  {
    title: "Activities",
    url: "/activities",
    icon: Calendar,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: SquareCheck,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: ChartColumn,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]
 
export function AppSidebar() {
  return (
     <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
       <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row items-center justify-between p-4">
            <span>Theme</span>
            <SidebarMenuButton asChild>
              <ModeToggle />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
       </SidebarFooter>
    </Sidebar>
  )
}