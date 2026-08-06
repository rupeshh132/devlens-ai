import { PublicLayout } from "@/layouts/PublicLayout"

export function LegalPage({ title }: { title: string }) {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-slate dark:prose-invert">
          <p>
            This is a placeholder page for the {title}. 
            The actual legal content will be populated here shortly.
          </p>
          <p>
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </PublicLayout>
  )
}
