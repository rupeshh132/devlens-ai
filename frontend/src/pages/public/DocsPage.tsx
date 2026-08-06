import { PublicLayout } from "@/layouts/PublicLayout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const docsContent = `
# DevLens AI Documentation

Welcome to the DevLens AI documentation. Here you'll find everything you need to get started.

## Getting Started

1. **Sign Up**: Create an account using GitHub or your email.
2. **Connect Repositories**: Link your GitHub repositories to start analyzing code.
3. **Run Analysis**: DevLens AI will automatically scan your codebase for issues and provide insights.

## Features

- **Static Analysis**: Find bugs and vulnerabilities before they reach production.
- **PR Reviews**: Get automated, intelligent code reviews on your pull requests.
- **Skill Gap Analysis**: Understand your team's strengths and areas for improvement based on code contributions.

### Supported Languages

| Language | Static Analysis | PR Reviews |
|----------|-----------------|------------|
| Java     | ✅              | ✅         |
| TypeScript| ✅              | ✅         |
| Python   | ✅              | ✅         |
| Go       | Coming Soon     | ✅         |

## API Access

Enterprise customers can access our GraphQL API to integrate DevLens AI directly into their existing CI/CD pipelines.

\`\`\`bash
curl -X POST https://api.devlens.ai/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"repo": "rupeshh132/devlens-ai"}'
\`\`\`

If you have any questions, please reach out to our support team.
`

export function DocsPage() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert prose-brand prose-headings:text-brand-navy prose-a:text-brand-coral hover:prose-a:text-brand-coral/80 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {docsContent}
          </ReactMarkdown>
        </div>
      </div>
    </PublicLayout>
  )
}
