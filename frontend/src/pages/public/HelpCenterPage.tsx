import { PublicLayout } from "@/layouts/PublicLayout"
import { Mail, Github, Linkedin, MessageCircle, Code2, ArrowRight } from "lucide-react"
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
                    <Linkedin className="w-5 h-5" />
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
                    <Github className="w-5 h-5" />
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
