import { PublicLayout } from "@/layouts/PublicLayout"
import ReactMarkdown from "react-markdown"

const privacyContent = `
# Privacy Policy

**Effective Date: ${new Date().toISOString().split('T')[0]}**

Your privacy is important to us. It is DevLens AI's policy to respect your privacy regarding any information we may collect from you across our website, [https://devlens.ai](https://devlens.ai), and other sites we own and operate.

## 1. Information We Collect

### Log Data
When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.

### Personal Information
We may ask for personal information, such as your:
- Name
- Email
- GitHub Profile Data (when connecting via OAuth)

## 2. Security

We take security seriously and use industry-standard practices to protect your data. However, be aware that no method of transmission over the internet, or method of electronic storage is 100% secure.

## 3. Contact Us
If you have any questions about how we handle user data and personal information, feel free to contact us at support@devlens.ai.
`

const termsContent = `
# Terms of Service

**Effective Date: ${new Date().toISOString().split('T')[0]}**

## 1. Terms

By accessing the website at [https://devlens.ai](https://devlens.ai), you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.

## 2. Use License

Permission is granted to temporarily download one copy of the materials (information or software) on DevLens AI's website for personal, non-commercial transitory viewing only.

## 3. Disclaimer

The materials on DevLens AI's website are provided on an 'as is' basis. DevLens AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## 4. Limitations

In no event shall DevLens AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevLens AI's website.
`

const cookieContent = `
# Cookie Policy

**Effective Date: ${new Date().toISOString().split('T')[0]}**

We use cookies to help improve your experience of [https://devlens.ai](https://devlens.ai). This cookie policy is part of DevLens AI's privacy policy, and covers the use of cookies between your device and our site.

## What is a cookie?
A cookie is a small piece of data that a website stores on your device when you visit, typically containing information about the website itself, a unique identifier that allows the site to recognize your web browser when you return, additional data that serves the purpose of the cookie, and the lifespan of the cookie itself.

## How we use cookies
We use cookies for the following purposes:
- **Authentication**: To keep you logged in across sessions.
- **Preferences**: To remember your dark mode or light mode settings.

If you do not wish to accept cookies from us, you should instruct your browser to refuse cookies from [https://devlens.ai](https://devlens.ai).
`

export function LegalPage({ title }: { title: string }) {
  let content = ""
  if (title === "Privacy Policy") content = privacyContent
  else if (title === "Terms of Service") content = termsContent
  else if (title === "Cookie Policy") content = cookieContent
  else content = `# ${title}\n\nContent coming soon.`

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert prose-brand prose-headings:text-brand-navy prose-a:text-brand-coral hover:prose-a:text-brand-coral/80 max-w-none">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </PublicLayout>
  )
}
