import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import { useFocusMode } from '../features/lms/context/FocusModeContext';
import { Play, Lock, Maximize, Minimize, CheckCircle2, AlertCircle, ArrowRight, Code, ExternalLink, FileText, Menu, X } from 'lucide-react';
import { toast } from 'sonner';

export function CoursePlayerPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isStrictMode, enterStrictMode, exitStrictMode } = useFocusMode();
  
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState<any>(null);
  const [activeModule, setActiveModule] = useState<any>(null);
  const [submitting, setSubmitting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}/play`);
        setCourseData(res.data);
        // Auto-select first IN_PROGRESS module
        const inProgress = res.data.userProgress.find((p: any) => p.status === 'IN_PROGRESS');
        if (inProgress) {
          const mod = res.data.modules.find((m: any) => m.id === inProgress.module.id);
          setActiveModule(mod);
        } else {
          setActiveModule(res.data.modules[0]);
        }
      } catch (error: any) {
        if (error?.response?.status === 403 || error?.response?.status === 409 || error?.response?.status === 500) {
          toast.error("You are not enrolled in this course.");
          navigate('/dashboard');
        }
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchCourse();
  }, [id, navigate]);

  if (loading) return <div className="p-8 text-center text-white bg-[#0f111a] h-screen w-full flex items-center justify-center">Loading strict environment...</div>;
  if (!courseData) return null;

  const isModuleUnlocked = (moduleId: string) => {
    return courseData.userProgress.some((p: any) => p.module.id === moduleId);
  };

  const getModuleStatus = (moduleId: string) => {
    const progress = courseData.userProgress.find((p: any) => p.module.id === moduleId);
    return progress ? progress.status : 'LOCKED';
  };

  return (
    <div className="flex h-screen w-full bg-[#0B0C10] overflow-hidden fixed inset-0 z-[100]">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/80 z-[110] backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Cinematic Dark Theme */}
      <div className={`fixed md:static inset-y-0 left-0 w-80 bg-[#0B0C10] border-r border-white/5 flex flex-col h-full z-[120] shadow-2xl transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-white/5 flex justify-between items-start">
          <div>
            <h2 className="font-bold text-lg text-white line-clamp-2 leading-tight">{courseData.course.title}</h2>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Strict Cohort Mode</p>
            </div>
          </div>
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {courseData.modules.map((mod: any, index: number) => {
            const unlocked = isModuleUnlocked(mod.id);
            const status = getModuleStatus(mod.id);
            const isActive = activeModule?.id === mod.id;

            return (
              <button
                key={mod.id}
                disabled={!unlocked}
                onClick={() => {
                  setActiveModule(mod);
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full text-left p-4 rounded-xl border flex items-start gap-4 transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(var(--primary),0.1)] text-white' 
                    : unlocked 
                      ? 'bg-white/5 hover:bg-white/10 border-white/5 text-zinc-300'
                      : 'bg-black/20 border-transparent text-zinc-600 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {status === 'COMPLETED' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> :
                   status === 'PENDING_REVIEW' ? <AlertCircle className="w-5 h-5 text-yellow-500" /> :
                   !unlocked ? <Lock className="w-5 h-5 text-zinc-600" /> : 
                   <Play className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-zinc-400'}`} />}
                </div>
                <div>
                  <p className={`font-semibold text-xs uppercase tracking-wider mb-1 ${isActive ? 'text-primary' : 'text-zinc-500'}`}>
                    Module {index + 1}
                  </p>
                  <p className={`text-sm font-medium leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {mod.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#0f111a] relative flex flex-col overflow-y-auto custom-scrollbar">
        {/* Focus Mode Toggle Navbar */}
        <div className="w-full p-4 md:p-6 flex flex-col md:flex-row gap-4 justify-between md:items-center sticky top-0 z-50 bg-[#0f111a]/80 backdrop-blur-sm border-b border-white/5">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold text-white line-clamp-1">{activeModule?.title || 'Course Player'}</h2>
          </div>
          <button
            onClick={isStrictMode ? exitStrictMode : enterStrictMode}
            className={`group flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border backdrop-blur-md ${
              isStrictMode 
                ? 'bg-amber-500/10 text-amber-500 border-amber-500/30 hover:bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
                : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-lg'
            }`}
          >
            {isStrictMode ? (
              <Minimize className="w-4 h-4 transition-transform group-hover:scale-110" />
            ) : (
              <Maximize className="w-4 h-4 transition-transform group-hover:scale-110" />
            )}
            <span>{isStrictMode ? 'Exit Focus Mode' : 'Enable Focus Mode'}</span>
          </button>
        </div>

        <div className="w-full p-8 max-w-6xl mx-auto">
          {/* Video Player */}
          {(activeModule?.type === 'VIDEO' || activeModule?.type === 'LESSON') && activeModule?.contentUrl && (
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl mb-8">
              <iframe 
                width="100%" 
                height="100%" 
                src={(activeModule.contentUrl.includes('watch?v=') ? activeModule.contentUrl.replace('watch?v=', 'embed/') : activeModule.contentUrl) + "?rel=0&modestbranding=1&showinfo=0"}
                title={activeModule.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Markdown Text Content */}
          {(activeModule?.type === 'LESSON' || activeModule?.type === 'VIDEO') && activeModule?.textContent && (
            <div className="w-full bg-[#151821]/80 backdrop-blur p-8 rounded-2xl border border-white/10 shadow-xl prose prose-invert max-w-none text-zinc-300 prose-headings:text-white prose-a:text-primary mb-8">
              <ReactMarkdown>{activeModule.textContent}</ReactMarkdown>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────── */}
          {/* Mark as Complete — for VIDEO / LESSON type modules       */}
          {/* ─────────────────────────────────────────────────────── */}
          {(activeModule?.type === 'VIDEO' || activeModule?.type === 'LESSON') && (
            <div className="w-full max-w-3xl mx-auto mt-4 mb-16">
              {getModuleStatus(activeModule.id) === 'COMPLETED' ? (
                <div className="flex items-center justify-center gap-3 p-5 bg-green-500/10 border border-green-500/20 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <p className="font-bold text-green-400">Module Completed!</p>
                    <p className="text-sm text-green-600/80">Select the next module from the sidebar to continue.</p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#151821]/80 backdrop-blur border border-white/10 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Done watching?</h3>
                      <p className="text-sm text-zinc-400 mt-1">
                        Click below to mark this module as complete and unlock the next one.
                      </p>
                    </div>
                  </div>
                  <button
                    disabled={submitting}
                    onClick={async () => {
                      setSubmitting(true);
                      try {
                        await api.post(`/courses/modules/${activeModule.id}/complete`);
                        toast.success('Module marked as complete! 🎉');
                        window.location.reload();
                      } catch {
                        toast.error('Failed to mark as complete. Please try again.');
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-3 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-colors disabled:opacity-60"
                  >
                    {submitting ? 'Marking...' : <>Mark as Complete & Continue <ArrowRight className="h-4 w-4" /></>}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────── */}
          {/* PROJECT Submission Module                                */}
          {/* ─────────────────────────────────────────────────────── */}
          {activeModule?.type === 'PROJECT' && (
            <div className="w-full max-w-3xl mx-auto mb-16 space-y-8">
              {/* Project Brief */}
              {activeModule?.textContent && (
                <div className="bg-[#151821]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                    <div className="p-3 bg-primary/20 rounded-xl shadow-inner shadow-primary/20">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Project Assignment</h3>
                      <p className="text-zinc-400 text-sm mt-1">Read the instructions carefully before building.</p>
                    </div>
                  </div>
                  {/* Padding added here to align the markdown with the header text */}
                  <div className="pl-[3.25rem] prose prose-invert max-w-none text-zinc-300 prose-headings:text-white prose-a:text-primary">
                    <ReactMarkdown>{activeModule.textContent}</ReactMarkdown>
                  </div>
                </div>
              )}

              {/* Submission Card */}
              <div className="bg-[#151821]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/20 rounded-xl shadow-inner shadow-primary/20">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Submit Your Project</h2>
                      <p className="text-sm text-zinc-400 mt-1">
                        Build the project, push it to GitHub, and submit the links below.
                      </p>
                    </div>
                  </div>

                  {getModuleStatus(activeModule.id) === 'PENDING_REVIEW' ? (
                    <div className="p-8 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-center backdrop-blur-sm">
                      <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-8 h-8 text-yellow-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-500 mb-2">Under Admin Review</h3>
                      <p className="text-yellow-600/80 max-w-sm mx-auto">
                        Your project has been submitted successfully. Once the admin approves it, you will earn +100 points and the next module will unlock automatically.
                      </p>
                    </div>
                  ) : getModuleStatus(activeModule.id) === 'COMPLETED' ? (
                    <div className="p-10 bg-gradient-to-br from-green-500/10 to-emerald-900/20 border border-green-500/30 rounded-2xl text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full"></div>
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                          <CheckCircle2 className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-3">Project Approved! 🎉</h3>
                        <p className="text-green-300/90 text-lg">
                          Outstanding work! You earned <span className="font-bold text-green-400">+100 points</span> and the next module is now unlocked.
                        </p>
                      </div>
                    </div>
                  ) : getModuleStatus(activeModule.id) === 'REJECTED' ? (
                    <div className="space-y-6">
                      <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <AlertCircle className="w-6 h-6 text-red-500" />
                          <p className="font-bold text-lg text-red-400">Submission Rejected</p>
                        </div>
                        <p className="text-red-300/80">The admin found issues in your previous submission. Please fix your project and submit again below.</p>
                      </div>
                      <ProjectSubmitForm moduleId={activeModule.id} submitting={submitting} setSubmitting={setSubmitting} />
                    </div>
                  ) : (
                    <ProjectSubmitForm moduleId={activeModule.id} submitting={submitting} setSubmitting={setSubmitting} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Extracted Project Submit Form ─────────────────────────────────────────
function ProjectSubmitForm({ moduleId, submitting, setSubmitting }: { moduleId: string; submitting: boolean; setSubmitting: (v: boolean) => void }) {
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const repoUrl = (e.currentTarget.elements.namedItem('repoUrl') as HTMLInputElement).value;
      const deployUrl = (e.currentTarget.elements.namedItem('deployUrl') as HTMLInputElement).value;
      setSubmitting(true);
      try {
        await import('@/lib/api').then(({ api }) =>
          api.post(`/courses/modules/${moduleId}/submit`, {
            projectRepoUrl: repoUrl,
            projectDeployUrl: deployUrl,
          })
        );
        import('sonner').then(({ toast }) => toast.success('Project submitted! Waiting for admin review. 🎉'));
        window.location.reload();
      } catch {
        import('sonner').then(({ toast }) => toast.error('Failed to submit. Please try again.'));
      } finally {
        setSubmitting(false);
      }
    }} className="space-y-5">
      <div>
        <label className="text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
          <Code className="h-4 w-4 text-zinc-400" /> GitHub Repository URL <span className="text-red-400">*</span>
        </label>
        <input
          name="repoUrl"
          type="url"
          placeholder="https://github.com/yourusername/your-project"
          required
          className="w-full p-4 rounded-xl border border-white/10 bg-black/50 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-zinc-400" /> Live Deployment URL <span className="text-zinc-500 font-normal">(optional)</span>
        </label>
        <input
          name="deployUrl"
          type="url"
          placeholder="https://your-project.vercel.app"
          className="w-full p-4 rounded-xl border border-white/10 bg-black/50 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner"
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
        >
          {submitting ? 'Submitting...' : <><Code className="h-5 w-5" /> Submit for Admin Review</>}
        </button>
      </div>
      <p className="text-xs font-medium text-zinc-500 text-center flex items-center justify-center gap-1.5 mt-4">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block"></span>
        Admin will review your GitHub code and approve within 24–48 hours. Earn +100 points.
      </p>
    </form>
  );
}

