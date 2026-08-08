import { PublicLayout } from "@/layouts/PublicLayout"
import { Mail, MessageCircle, Code2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HelpCenterPage() {
  return (
    <PublicLayout>
      <div className="bg-brand-cream py-16 md:py-24 min-h-[calc(100vh-14rem)] flex items-center">
        <div className="container mx-auto px-4 max-w-screen-lg">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-navy tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-brand-navy/70 leading-relaxed font-normal max-w-2xl mx-auto">
              Have a question about DevLens AI or want to collaborate? I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-border shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left Side - Profile/Brand */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-md transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Code2 className="w-12 h-12 text-brand-coral" />
              </div>
              <h2 className="text-3xl font-serif text-brand-navy mb-2">Rupesh Vishwakarma</h2>
              <p className="text-brand-coral font-semibold tracking-wide uppercase text-sm mb-6">
                Creator & Full Stack Developer
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Building tools that empower developers to write better code and master their careers. Let's connect and build something amazing together.
              </p>
              
              <a href="mailto:vrupesh132@gmail.com" className="w-full md:w-auto">
                <Button className="w-full md:w-auto h-12 px-8 rounded-xl font-bold bg-brand-navy hover:bg-brand-navy/90 text-white shadow-none uppercase tracking-widest text-sm group">
                  Send an Email
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Right Side - Contact Links */}
            <div className="flex-1 w-full bg-brand-cream/50 rounded-3xl p-6 md:p-8 border border-border/50">
              <div className="space-y-4">
                
                {/* Email */}
                <a 
                  href="mailto:vrupesh132@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-border transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">Email</p>
                    <p className="text-muted-foreground text-sm">vrupesh132@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/918090683207" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-border transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">+91 80906 83207</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/rupesh-vishwakarma-10a904225/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-border transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">LinkedIn</p>
                    <p className="text-muted-foreground text-sm">Let's connect</p>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/rupeshh132" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-border transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-800/10 flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">GitHub</p>
                    <p className="text-muted-foreground text-sm">@rupeshh132</p>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
