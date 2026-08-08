import { PublicLayout } from "@/layouts/PublicLayout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export function FAQPage() {
  const faqs = [
    {
      question: "How does DevLens AI analyze my GitHub?",
      answer: "We use advanced static analysis and Large Language Models to read your public repositories. We evaluate code quality, architecture patterns, technology stack, and complexity to build a comprehensive profile of your engineering capabilities. We do NOT store your source code."
    },
    {
      question: "Will the AI Mock Interviews feel realistic?",
      answer: "Yes. Our AI is trained on thousands of real technical interviews from top-tier tech companies. It adapts to your answers in real-time, asks follow-up questions based on your specific responses, and evaluates both your technical accuracy and communication style."
    },
    {
      question: "Can I use DevLens AI if I'm a beginner?",
      answer: "Absolutely. DevLens AI is designed for developers at all stages. If you're a junior developer, the platform will identify your foundational gaps and provide a clear roadmap to reach a mid-level standard."
    },
    {
      question: "How is my ATS resume score calculated?",
      answer: "Your ATS score is calculated by comparing your uploaded resume against industry-standard job descriptions for your target role, while also verifying your claimed skills against the actual code found in your connected GitHub repositories."
    },
    {
      question: "Is there a limit to how many mock interviews I can do?",
      answer: "Our Free plan does not include mock interviews. The Pro plan includes 10 full AI mock interviews per month, and the Teams plan includes unlimited mock interviews."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your Account Settings page. You will retain access to your Pro features until the end of your current billing cycle."
    }
  ]

  return (
    <PublicLayout>
      <div className="bg-brand-cream py-16 md:py-24 min-h-[calc(100vh-14rem)]">
        <div className="container mx-auto px-4 max-w-screen-md">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-navy/5 text-brand-navy mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-navy tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-brand-navy/70 leading-relaxed font-normal">
              Everything you need to know about DevLens AI. Can't find the answer you're looking for? Feel free to <Link to="/contact" className="text-brand-coral hover:underline">contact our support team</Link>.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 last:border-0 py-2">
                  <AccordionTrigger className="text-left font-serif text-lg text-brand-navy hover:text-brand-coral hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-navy/70 leading-relaxed text-base pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif text-brand-navy mb-4">Still have questions?</h3>
            <p className="text-brand-navy/70 mb-6">Our team is ready to help you get the most out of DevLens AI.</p>
            <Link to="/register">
              <Button className="h-12 px-8 rounded-xl font-bold bg-brand-coral hover:bg-brand-coral/90 text-white shadow-none uppercase tracking-widest text-sm">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
