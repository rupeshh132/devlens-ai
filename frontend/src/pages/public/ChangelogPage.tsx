import { PublicLayout } from "@/layouts/PublicLayout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const changelogContent = `
# Changelog

All notable changes to DevLens AI will be documented in this file.

## [1.1.0] - ${new Date().toISOString().split('T')[0]}
### Added
- **Premium UI Overhaul**: Introduced glassmorphism, coral accents, and smooth micro-animations across the authentication flow and marketing footer.
- **Public Routing**: Added dedicated pages for Docs, Changelog, Legal, Integrations, Blog, and Help Center.
- **Markdown Support**: Public pages now render content dynamically using Markdown and Tailwind Typography.

### Fixed
- **OAuth Stability**: Resolved a critical 500 Internal Server Error during GitHub OAuth login by optimizing transaction boundaries and sanitizing long User-Agent strings.
- **Session Handling**: Enhanced JWT token generation to use UUID subjects instead of email for robust tracking.

## [1.0.0] - 2024-05-15
### Added
- Initial release of DevLens AI.
- GitHub repository integration.
- Automated static code analysis dashboard.
- JWT-based authentication system.
`

export function ChangelogPage() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert prose-brand prose-headings:text-brand-navy prose-a:text-brand-coral hover:prose-a:text-brand-coral/80 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {changelogContent}
          </ReactMarkdown>
        </div>
      </div>
    </PublicLayout>
  )
}
