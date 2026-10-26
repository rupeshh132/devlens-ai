import { useRef, useState } from 'react';
import { useResumeTailor, type TailoredResume } from '../hooks/useResumeTailor';
import { Button } from '../../../components/ui/button';
import { Textarea } from '../../../components/ui/textarea';
import { Badge } from '../../../components/ui/badge';
import {
  Loader2, Upload, FileText, Sparkles, Download, Copy, Check,
  Target, AlertTriangle, BookOpen, Briefcase, GraduationCap, X
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Option A: ATS PDF Template Generator
// ─────────────────────────────────────────────────────────────────────────────
function generatePdfHtml(data: TailoredResume, userName: string): string {
  const experienceHtml = data.experiences.map(exp => `
    <div class="section-item">
      <div class="item-header">
        <span class="item-title">${exp.role}</span>
        <span class="item-date">${exp.duration}</span>
      </div>
      <div class="item-subtitle">${exp.company}</div>
      <ul>
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const educationHtml = data.educations.map(edu => `
    <div class="section-item">
      <div class="item-header">
        <span class="item-title">${edu.degree}</span>
        <span class="item-date">${edu.year}</span>
      </div>
      <div class="item-subtitle">${edu.institution}</div>
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Times New Roman', Times, serif; font-size: 11pt; color: #1a1a1a; padding: 0.75in; }
  h1 { font-size: 22pt; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #1a1a1a; padding-bottom: 6px; margin-bottom: 4px; }
  .contact { font-size: 10pt; color: #444; margin-bottom: 18px; }
  h2 { font-size: 12pt; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #aaa; padding-bottom: 3px; margin-top: 16px; margin-bottom: 10px; }
  .section-item { margin-bottom: 12px; }
  .item-header { display: flex; justify-content: space-between; }
  .item-title { font-weight: bold; }
  .item-date { font-style: italic; color: #555; }
  .item-subtitle { font-style: italic; color: #333; margin-bottom: 4px; }
  ul { padding-left: 18px; }
  li { margin-bottom: 3px; line-height: 1.5; }
  .skills { display: flex; flex-wrap: wrap; gap: 6px; }
  .skill { background: #f0f0f0; padding: 2px 10px; border-radius: 3px; font-size: 10pt; }
  p { line-height: 1.6; }
</style>
</head>
<body>
  <h1>${userName}</h1>
  <div class="contact">Tailored for: ${data.jobTitle}</div>
  <h2>Professional Summary</h2>
  <p>${data.tailoredSummary}</p>
  <h2>Key Skills</h2>
  <div class="skills">${data.keySkills.map(s => `<span class="skill">${s}</span>`).join('')}</div>
  <h2>Experience</h2>
  ${experienceHtml}
  <h2>Education</h2>
  ${educationHtml}
</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Option B: Plain text content for copy-paste
// ─────────────────────────────────────────────────────────────────────────────
function generatePlainText(data: TailoredResume): string {
  const exp = data.experiences.map(e =>
    `${e.role} | ${e.company} | ${e.duration}\n${e.bullets.map(b => `• ${b}`).join('\n')}`
  ).join('\n\n');
  const edu = data.educations.map(e => `${e.degree} — ${e.institution} (${e.year})`).join('\n');
  return `PROFESSIONAL SUMMARY\n${'─'.repeat(40)}\n${data.tailoredSummary}\n\nKEY SKILLS\n${'─'.repeat(40)}\n${data.keySkills.join(' • ')}\n\nEXPERIENCE\n${'─'.repeat(40)}\n${exp}\n\nEDUCATION\n${'─'.repeat(40)}\n${edu}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
interface Props {
  hasStoredResume: boolean;
  userName?: string;
}

export function ResumeTailorTab({ hasStoredResume, userName = 'Your Name' }: Props) {
  const [jd, setJd] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { tailor, loading, error, tailored } = useResumeTailor();

  const handleSubmit = () => {
    if (!jd.trim()) return;
    tailor(jd, file);
  };

  const handleDownloadPdf = () => {
    if (!tailored) return;
    const html = generatePdfHtml(tailored, userName);
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(html);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 500);
    }
  };

  const handleCopy = () => {
    if (!tailored) return;
    navigator.clipboard.writeText(generatePlainText(tailored));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Input Panel */}
      {!tailored && (
        <div className="space-y-6">
          {/* Resume Source */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Step 1: Select Your Resume
            </h3>
            {hasStoredResume && !file && (
              <div className="flex items-center gap-3 bg-primary/10 text-primary rounded-xl px-4 py-3 text-sm font-medium">
                <Check className="h-4 w-4 shrink-0" />
                Using your previously uploaded resume. Or upload a different one below.
              </div>
            )}
            <div
              className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {file ? (
                <div className="flex items-center justify-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{file.name}</span>
                  <button onClick={(e) => { e.stopPropagation(); setFile(null); }} className="text-muted-foreground hover:text-destructive">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    {hasStoredResume ? 'Optional: Upload a different PDF resume' : 'Upload your resume (PDF or DOCX)'}
                  </p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={e => setFile(e.target.files?.[0] || null)}
              />
            </div>
            {!hasStoredResume && !file && (
              <p className="text-xs text-amber-600 flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" /> No resume found. Please upload a PDF to continue.
              </p>
            )}
          </div>

          {/* JD Input */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" /> Step 2: Paste the Job Description
            </h3>
            <Textarea
              placeholder="Paste the full job description here from LinkedIn, Naukri, etc..."
              value={jd}
              onChange={e => setJd(e.target.value)}
              rows={10}
              className="resize-none text-sm"
            />
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive rounded-xl px-4 py-3 text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 shrink-0" /> {error}
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={loading || (!file && !hasStoredResume) || !jd.trim()}
            className="w-full h-12 rounded-xl font-bold text-sm uppercase tracking-widest"
          >
            {loading ? (
              <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> AI is tailoring your resume...</>
            ) : (
              <><Sparkles className="h-4 w-4 mr-2" /> Generate Tailored Resume</>
            )}
          </Button>
        </div>
      )}

      {/* Results Panel */}
      {tailored && (
        <div className="space-y-6 animate-in fade-in">
          {/* Match Score Banner */}
          <div className={`rounded-2xl p-6 flex items-center justify-between ${tailored.matchScore >= 70 ? 'bg-green-50 border border-green-200' : tailored.matchScore >= 40 ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Match Score for</p>
              <h3 className="text-xl font-bold text-foreground mt-1">{tailored.jobTitle}</h3>
            </div>
            <div className={`text-5xl font-black ${tailored.matchScore >= 70 ? 'text-green-600' : tailored.matchScore >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
              {tailored.matchScore}%
            </div>
          </div>

          {/* Download Options */}
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={handleDownloadPdf}
              className="flex flex-col items-center gap-3 p-6 border-2 border-primary rounded-2xl hover:bg-primary/5 transition-colors group text-left"
            >
              <Download className="h-8 w-8 text-primary" />
              <div>
                <p className="font-bold text-foreground group-hover:text-primary">Option A: Download PDF</p>
                <p className="text-sm text-muted-foreground mt-1">ATS-friendly Harvard format. Directly send to recruiters.</p>
              </div>
            </button>
            <button
              onClick={handleCopy}
              className="flex flex-col items-center gap-3 p-6 border-2 border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-colors group text-left"
            >
              {copied ? <Check className="h-8 w-8 text-green-500" /> : <Copy className="h-8 w-8 text-muted-foreground group-hover:text-primary" />}
              <div>
                <p className="font-bold text-foreground">{copied ? 'Copied!' : 'Option B: Copy Content'}</p>
                <p className="text-sm text-muted-foreground mt-1">Copy all sections to paste into your own Word/Canva template.</p>
              </div>
            </button>
          </div>

          {/* Summary */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-foreground"><BookOpen className="h-4 w-4 text-primary" /> Tailored Summary</h4>
            <p className="text-muted-foreground leading-relaxed text-sm">{tailored.tailoredSummary}</p>
          </div>

          {/* Skills */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-foreground"><Target className="h-4 w-4 text-primary" /> Key Skills (Reordered for JD)</h4>
            <div className="flex flex-wrap gap-2">
              {tailored.keySkills.map((s, i) => (
                <Badge key={i} variant="secondary" className="text-sm px-3 py-1">{s}</Badge>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h4 className="font-semibold flex items-center gap-2 text-foreground"><Briefcase className="h-4 w-4 text-primary" /> Tailored Experience Bullets</h4>
            {tailored.experiences.map((exp, i) => (
              <div key={i} className="space-y-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className="font-medium text-foreground">{exp.role} · {exp.company}</span>
                  <span className="text-xs text-muted-foreground">{exp.duration}</span>
                </div>
                <ul className="space-y-1 pl-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground list-disc">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          {tailored.educations.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-foreground"><GraduationCap className="h-4 w-4 text-primary" /> Education</h4>
              {tailored.educations.map((edu, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{edu.degree} · {edu.institution}</span>
                  <span className="text-muted-foreground">{edu.year}</span>
                </div>
              ))}
            </div>
          )}

          {/* Missing Keywords */}
          {tailored.missingKeywords.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-amber-800"><AlertTriangle className="h-4 w-4" /> Missing Keywords (Consider Adding)</h4>
              <div className="flex flex-wrap gap-2">
                {tailored.missingKeywords.map((k, i) => (
                  <Badge key={i} className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none text-sm px-3 py-1">{k}</Badge>
                ))}
              </div>
              <p className="text-xs text-amber-700">These keywords appear in the JD but could not be found in your resume. Genuinely add them if they apply to you.</p>
            </div>
          )}

          <Button variant="outline" onClick={() => window.location.reload()} className="w-full rounded-xl">
            Tailor for Another Job
          </Button>
        </div>
      )}
    </div>
  );
}
