
import { Outlet, Link } from "react-router-dom"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"
import { PageContainer } from "@/components/layout/PageContainer"
import { PageHeader } from "@/components/layout/PageHeader"
import { ContentArea } from "@/components/layout/ContentArea"
import { cn } from "@/lib/utils"

const sidebarNavItems = [
  { title: "Profile", href: "#" },
  { title: "Account", href: "#" },
  { title: "Appearance", href: "#" },
  { title: "Notifications", href: "#" },
  { title: "Display", href: "#" },
]

export function SettingsLayout() {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-background">
        <header className="border-b">
          <div className="container flex h-14 items-center px-4 md:px-6">
            <Link to="/" className="font-semibold tracking-tight">
              &larr; Back to Dashboard
            </Link>
          </div>
        </header>
        
        <ContentArea scrollable>
          <PageContainer maxWidth="lg" className="py-10">
            <PageHeader 
              title="Settings" 
              description="Manage your account settings and set e-mail preferences." 
            />
            
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 px-4 lg:px-0 overflow-x-auto pb-2 lg:pb-0">
                  {sidebarNavItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
                        item.title === "Profile" ? "bg-muted" : "transparent"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </aside>
              <div className="flex-1 lg:max-w-2xl">
                <Outlet />
              </div>
            </div>
          </PageContainer>
        </ContentArea>
      </div>
    </ErrorBoundary>
  )
}
