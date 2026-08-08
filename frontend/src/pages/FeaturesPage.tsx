import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PublicLayout } from "@/layouts/PublicLayout";

export function FeaturesPage() {
  const features = [
    {
      title: "AI Resume Analysis",
      description: "Our proprietary ATS-matching engine analyzes your resume against thousands of job descriptions. We don't just find missing keywords; we suggest contextual rephrasing to maximize your match score.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    },
    {
      title: "Interactive Mock Interviews",
      description: "Practice technical and behavioral rounds with an AI interviewer tailored to your specific role. Get real-time feedback on your delivery, technical accuracy, and confidence markers.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    },
    {
      title: "Skill Gap Intelligence",
      description: "Visualize exactly what's standing between you and your dream role. We map your current skills against industry requirements and highlight the high-ROI topics you need to learn next.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Dynamic Learning Roadmaps",
      description: "Stop guessing what to learn. DevLens AI generates step-by-step personalized roadmaps complete with curated resources, practical projects, and milestone checks based on your skill gaps.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    },
    {
      title: "Automated Code Reviews",
      description: "Connect your GitHub repositories and get instant feedback on your code quality, architecture patterns, and potential bugs before you even open a PR. It's like having a senior engineer reviewing every commit.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      title: "Continuous GitHub Sync",
      description: "Your dashboard stays up-to-date automatically as you push code. We analyze your active repositories to continuously update your skill profile and prove your expertise to employers.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <PublicLayout>
      <div className="bg-brand-cream text-foreground selection:bg-brand-coral/30">
        <main className="pb-24 pt-16 md:pt-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-brand-navy mb-6 leading-[1.1]">
                Everything You Need to <span className="text-brand-coral">Ship Yourself</span>
              </h1>
              <p className="text-xl text-brand-navy/70 font-normal leading-relaxed">
                DevLens AI is a unified platform combining deep code analysis, intelligent resume optimization, and dynamic interview prep. We turn your raw potential into an undeniable engineering profile.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group flex h-full">
                  <div className="flex flex-col w-full h-full bg-white border border-black/[0.04] rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                    {/* Image Header */}
                    <div className="h-56 w-full overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      />
                    </div>
                    {/* Content Body */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-serif text-brand-navy mb-4 tracking-tight">{feature.title}</h3>
                      <p className="text-brand-navy/70 leading-relaxed font-normal text-[15px] flex-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-32 text-center"
            >
              <div className="bg-brand-navy text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Stop applying blindly.</h2>
                  <p className="text-xl opacity-80 mb-10 font-normal leading-relaxed">Get the insights and tools you need to secure your next role with confidence.</p>
                  <Link to="/register">
                    <Button size="lg" className="h-14 px-10 text-sm rounded-full font-bold bg-brand-coral hover:bg-brand-coral/90 text-white shadow-none uppercase tracking-widest">
                      Create Your Profile <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </PublicLayout>
  );
}
