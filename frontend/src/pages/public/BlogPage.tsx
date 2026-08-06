import { PublicLayout } from "@/layouts/PublicLayout"

export function BlogPage() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">DevLens AI Blog</h1>
        <p className="text-xl text-muted-foreground">Read our latest articles on AI and software engineering. Coming soon!</p>
      </div>
    </PublicLayout>
  )
}
