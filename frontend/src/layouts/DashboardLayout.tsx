
import { Outlet } from "react-router-dom"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Navbar, NavbarBrand, NavbarActions } from "@/components/ui/navbar"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"
import { ContentArea } from "@/components/layout/ContentArea"
import { Home, Settings, Users } from "lucide-react"

// Dummy navigation data for the layout structure
const navItems = [
  { title: "Dashboard", icon: Home, url: "#" },
  { title: "Users", icon: Users, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
]

export function DashboardLayout() {
  return (
    <ErrorBoundary>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          
          <div className="flex flex-1 flex-col overflow-hidden">
            <Navbar>
              <div className="flex items-center gap-2">
                <SidebarTrigger className="md:hidden" />
                <NavbarBrand>
                  <span className="font-bold">DevLens AI</span>
                </NavbarBrand>
              </div>
              <NavbarActions>
                {/* Theme toggle, user menu, etc. would go here */}
                <div className="h-8 w-8 rounded-full bg-muted" />
              </NavbarActions>
            </Navbar>
            
            <ContentArea scrollable className="p-4 md:p-6 lg:p-8">
              <Outlet />
            </ContentArea>
          </div>
        </div>
      </SidebarProvider>
    </ErrorBoundary>
  )
}
