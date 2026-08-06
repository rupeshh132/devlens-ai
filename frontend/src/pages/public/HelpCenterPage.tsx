import { PublicLayout } from "@/layouts/PublicLayout"

export function HelpCenterPage() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground">Find answers to common questions and get support. Coming soon!</p>
      </div>
    </PublicLayout>
  )
}
