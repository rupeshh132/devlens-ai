
import { Link, Outlet } from "react-router-dom"
import { useAuth } from "@/features/auth/hooks/useAuth"
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
import { Home, Settings, FolderGit2, LogOut, User, FileText, BrainCircuit, Map, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { title: "Dashboard", icon: Home, url: "/dashboard" },
  { title: "Profile", icon: User, url: "/profile" },
  { title: "Repositories", icon: FolderGit2, url: "/repositories" },
  { title: "Resume Upload", icon: FileText, url: "/resume" },
  { title: "Skill Gap Analysis", icon: BrainCircuit, url: "/skill-gap" },
  { title: "Dynamic Roadmap", icon: Map, url: "/roadmap" },
  { title: "Mock Interview", icon: Mic, url: "/interview" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export function DashboardLayout() {
  const { logout } = useAuth()
  
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
                          <Link to={item.url}>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="h-4 w-4" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer w-full flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => logout()}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavbarActions>
            </Navbar>
            
            <ContentArea scrollable className="p-6 md:p-10 lg:p-16">
              <div className="max-w-6xl mx-auto w-full">
                <Outlet />
              </div>
            </ContentArea>
          </div>
        </div>
      </SidebarProvider>
    </ErrorBoundary>
  )
}
