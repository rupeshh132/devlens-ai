import { useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "@/features/auth/hooks/useAuth"
import { Navbar, NavbarBrand, NavbarActions } from "@/components/ui/navbar"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"
import { ContentArea } from "@/components/layout/ContentArea"
import { Home, Settings, FolderGit2, LogOut, User, FileText, Map, Mic, GraduationCap, Trophy, Award, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Dashboard", icon: Home, url: "/dashboard" },
  { title: "Repositories", icon: FolderGit2, url: "/repositories" },
  { title: "Resume Upload", icon: FileText, url: "/resume" },
  { title: "Skill Gap", textLabel: "GAP", url: "/skill-gap" },
  { title: "Dynamic Roadmap", icon: Map, url: "/roadmap" },
  { title: "Mock Interview", icon: Mic, url: "/interview" },
  { title: "Academy", icon: GraduationCap, url: "/courses" },
  { title: "My Certificates", icon: Award, url: "/certificates" },
  { title: "Leaderboard", icon: Trophy, url: "/leaderboard" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export function DashboardLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname;
    let title = 'PrepLens';

    if (path.includes('/dashboard')) {
      title = 'Developer Dashboard | PrepLens';
    } else if (path.includes('/repositories') || path.includes('/repo/')) {
      title = 'GitHub Code Analysis & Repositories | PrepLens';
    } else if (path.includes('/resume')) {
      title = 'AI Resume Analyzer | PrepLens';
    } else if (path.includes('/skill-gap')) {
      title = 'Skill Gap & Readiness Analysis | PrepLens';
    } else if (path.includes('/roadmap')) {
      title = 'Dynamic Developer Roadmap | PrepLens';
    } else if (path.includes('/interview')) {
      title = 'AI Technical Mock Interview | PrepLens';
    } else if (path.includes('/courses')) {
      title = 'Developer Academy & Courses | PrepLens';
    } else if (path.includes('/certificates')) {
      title = 'My Certificates | PrepLens';
    } else if (path.includes('/settings')) {
      title = 'Account Settings | PrepLens';
    } else {
      title = 'PrepLens — AI Platform for Developers';
    }

    document.title = title;
  }, [location.pathname]);
  
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen w-full bg-background relative pb-48">
        
        <div className="flex flex-1 flex-col">
          <Navbar>
            <div className="flex items-center gap-2 px-4">
              <NavbarBrand>
                <Logo size="md" hideTextOnMobile={true} />
              </NavbarBrand>
            </div>
            <NavbarActions>
              <Link
                to="/dev-pricing"
                className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all mr-2"
              >
                <Crown className="w-3.5 h-3.5" />
                Dev Pro
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
                      <User className="h-4 w-4" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-bold text-brand-navy">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user?.role === 'ADMIN' && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin/courses" className="cursor-pointer w-full flex items-center py-2 text-primary">
                        <Settings className="mr-3 h-4 w-4" />
                        <span className="font-medium">Admin Panel</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer w-full flex items-center py-2">
                      <User className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()} className="py-2 text-red-600 focus:bg-red-50 focus:text-red-700">
                    <LogOut className="mr-3 h-4 w-4" />
                    <span className="font-medium">Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavbarActions>
          </Navbar>
          
          <ContentArea scrollable className="p-6 md:p-10 lg:p-16">
            <div className="max-w-6xl mx-auto w-full pb-48">
              <Outlet />
            </div>
          </ContentArea>
        </div>

        {/* Mac-Style Bottom Dock */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-end gap-3 px-4 py-3 bg-background/80 backdrop-blur-xl border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl">
            <TooltipProvider delayDuration={0}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url || location.pathname.startsWith(`${item.url}/`)
                
                return (
                  <Tooltip key={item.title}>
                    <TooltipTrigger asChild>
                      <Link to={item.url} className="relative block">
                        <motion.div
                          whileHover={{ scale: 1.25, y: -10 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className={cn(
                            "relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300",
                            isActive 
                              ? "bg-brand-coral text-white shadow-lg shadow-brand-coral/40" 
                              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:shadow-md hover:shadow-black/5"
                          )}
                        >
                          {item.icon ? (
                            <item.icon className="w-6 h-6" strokeWidth={2} />
                          ) : (
                            <span className="text-[12px] font-black tracking-widest">{item.textLabel}</span>
                          )}
                        </motion.div>
                        {isActive && (
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-coral" />
                        )}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={25} className="font-semibold px-4 py-2 rounded-xl text-sm shadow-xl border-border/50">
                      {item.title}
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </TooltipProvider>
          </div>
        </div>

      </div>
    </ErrorBoundary>
  )
}
