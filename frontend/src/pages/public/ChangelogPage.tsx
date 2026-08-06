import { PublicLayout } from "@/layouts/PublicLayout"

export function ChangelogPage() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Changelog</h1>
        <p className="text-xl text-muted-foreground">See what's new in DevLens AI. Coming soon!</p>
      </div>
    </PublicLayout>
  )
}
