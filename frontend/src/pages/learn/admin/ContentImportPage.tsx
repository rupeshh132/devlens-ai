import React, { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, CheckCircle, AlertCircle, FileSpreadsheet, 
  HelpCircle, Copy, Download, RefreshCw, Layers, ChevronRight, 
  BookOpen, Video, Check, AlertTriangle, Table, X, CheckCircle2,
  Code2, Sparkles, FileCode, Trash2, AlignLeft, ExternalLink
} from 'lucide-react';
import { learnApi } from '../../../lib/learn-api';
import { api } from '../../../lib/api';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

interface ExamType {
  id: string;
  name: string;
  fullName?: string;
  category: string;
}

interface Subject {
  id: string;
  name: string;
}

interface Chapter {
  id: string;
  title: string;
  orderIndex: number;
}

interface Topic {
  id: string;
  title: string;
  orderIndex: number;
}

export interface CsvPreviewRow {
  rowNum: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string;
  difficulty: string;
  sourceYear?: string;
  hasError?: boolean;
  errorReason?: string;
}

const SAMPLE_CSV_CONTENT = `Question Text | Option A | Option B | Option C | Option D | Correct (A/B/C/D) | Explanation | Difficulty | Source Year
A car starts from rest and accelerates uniformly at 2 m/s² for 5 seconds. What is the final velocity? | 5 m/s | 10 m/s | 15 m/s | 20 m/s | B | Using v = u + at: v = 0 + (2)(5) = 10 m/s | EASY | 2023
Which of the following is a scalar quantity? | Velocity | Acceleration | Electric Current | Force | C | Electric current has magnitude and direction but follows scalar addition laws | EASY | 2022
Two bodies of masses 1 kg and 4 kg have equal kinetic energies. The ratio of their linear momenta is: | 1:4 | 1:2 | 2:1 | 4:1 | B | p = sqrt(2mK). Since K is equal, p1/p2 = sqrt(m1/m2) = sqrt(1/4) = 1/2 | MEDIUM | 2021`;

const SAMPLE_JSON_CONTENT = `[
  {
    "questionText": "A car starts from rest and accelerates uniformly at 2 m/s² for 5 seconds. What is the final velocity?",
    "options": {
      "A": "5 m/s",
      "B": "10 m/s",
      "C": "15 m/s",
      "D": "20 m/s"
    },
    "correctAnswer": "B",
    "difficulty": "EASY",
    "explanation": "Using kinematic equation v = u + at, where u = 0, a = 2 m/s², and t = 5 s: v = 0 + (2)(5) = 10 m/s."
  },
  {
    "questionText": "Which of the following is a scalar quantity?",
    "options": {
      "A": "Velocity",
      "B": "Acceleration",
      "C": "Electric Current",
      "D": "Force"
    },
    "correctAnswer": "C",
    "difficulty": "EASY",
    "explanation": "Electric current has both magnitude and direction, but it does not obey vector addition laws (it obeys scalar algebraic addition). Therefore, it is a scalar quantity."
  },
  {
    "questionText": "Two bodies of masses 1 kg and 4 kg have equal kinetic energies. The ratio of their linear momenta is:",
    "options": {
      "A": "1:4",
      "B": "1:2",
      "C": "2:1",
      "D": "4:1"
    },
    "correctAnswer": "B",
    "difficulty": "MEDIUM",
    "explanation": "Linear momentum p = √(2mK). Since kinetic energy K is identical for both bodies, p1/p2 = √(m1/m2) = √(1/4) = 1/2."
  }
]`;

export function ContentImportPage() {
  const [searchParams] = useSearchParams();

  // Mode: Hierarchy Picker vs Manual UUID
  const [isManualUuid, setIsManualUuid] = useState(false);

  // Ingestion Mode: CSV vs AI JSON
  const [ingestMode, setIngestMode] = useState<'csv' | 'json'>('csv');

  // Hierarchy Data States
  const [exams, setExams] = useState<ExamType[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  // Selected IDs
  const [selectedExam, setSelectedExam] = useState<string>(searchParams.get('exam') || '');
  const [selectedSubject, setSelectedSubject] = useState<string>(searchParams.get('subject') || '');
  const [selectedChapter, setSelectedChapter] = useState<string>(searchParams.get('chapter') || '');
  const [selectedTopic, setSelectedTopic] = useState<string>(searchParams.get('topic') || '');
  const [manualTopicId, setManualTopicId] = useState<string>('');

  // Existing Topic Questions count
  const [existingQuestionCount, setExistingQuestionCount] = useState<number | null>(null);
  const [checkingQuestions, setCheckingQuestions] = useState(false);

  // Ingestion Result Message State with Telemetry
  interface IngestTelemetry {
    type: 'success' | 'error';
    text: string;
    count?: number;
    skipped?: number;
    total?: number;
  }
  const [message, setMessage] = useState<IngestTelemetry | null>(null);

  // Duplicate Protection Toggle
  const [skipDuplicates, setSkipDuplicates] = useState<boolean>(true);

  // Question Count Increment Animation
  const [countIncrement, setCountIncrement] = useState<number | null>(null);

  // CSV File & Upload States
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Pre-Upload Preview & Delimiter Sniffer States
  const [previewRows, setPreviewRows] = useState<CsvPreviewRow[]>([]);
  const [totalCsvRows, setTotalCsvRows] = useState<number>(0);
  const [csvColumnWarning, setCsvColumnWarning] = useState<string | null>(null);
  const [delimiterWarning, setDelimiterWarning] = useState<boolean>(false);
  const [previewLoading, setPreviewLoading] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // AI JSON Ingestion States
  const [jsonText, setJsonText] = useState<string>('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [parsedJsonQuestions, setParsedJsonQuestions] = useState<any[]>([]);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [copiedJsonTemplate, setCopiedJsonTemplate] = useState<boolean>(false);
  const jsonFileInputRef = useRef<HTMLInputElement | null>(null);

  // Loading States
  const [examsLoading, setExamsLoading] = useState(false);
  const [subjectsLoading, setSubjectsLoading] = useState(false);
  const [chaptersLoading, setChaptersLoading] = useState(false);
  const [topicsLoading, setTopicsLoading] = useState(false);

  // Effective Topic ID
  const effectiveTopicId = isManualUuid ? manualTopicId.trim() : selectedTopic;

  // ─── 1. Load Exams ─────────────────────────────────────────────────────────
  useEffect(() => {
    setExamsLoading(true);
    learnApi.get('/content/exams')
      .then(res => {
        const list = res.data || [];
        setExams(list);
        if (!searchParams.get('exam') && list.length > 0 && !selectedExam) {
          setSelectedExam(list[0].id);
        }
      })
      .catch(err => {
        console.error('Failed to load exams:', err);
        toast.error('Failed to load exams');
      })
      .finally(() => setExamsLoading(false));
  }, []);

  // ─── 2. Load Subjects when Exam changes ────────────────────────────────────
  useEffect(() => {
    if (!selectedExam) {
      setSubjects([]);
      setSelectedSubject('');
      return;
    }

    setSubjectsLoading(true);
    learnApi.get(`/content/exams/${selectedExam}/subjects`)
      .then(res => {
        const list = res.data || [];
        setSubjects(list);
        const paramSub = searchParams.get('subject');
        if (paramSub && list.some((s: Subject) => s.id === paramSub)) {
          setSelectedSubject(paramSub);
        } else if (!list.some((s: Subject) => s.id === selectedSubject)) {
          setSelectedSubject('');
        }
      })
      .catch(console.error)
      .finally(() => setSubjectsLoading(false));
  }, [selectedExam]);

  // ─── 3. Load Chapters when Subject changes ─────────────────────────────────
  useEffect(() => {
    if (!selectedSubject) {
      setChapters([]);
      setSelectedChapter('');
      return;
    }

    setChaptersLoading(true);
    learnApi.get(`/content/subjects/${selectedSubject}/chapters`)
      .then(res => {
        const list = res.data || [];
        setChapters(list);
        const paramChap = searchParams.get('chapter');
        if (paramChap && list.some((c: Chapter) => c.id === paramChap)) {
          setSelectedChapter(paramChap);
        } else if (!list.some((c: Chapter) => c.id === selectedChapter)) {
          setSelectedChapter('');
        }
      })
      .catch(console.error)
      .finally(() => setChaptersLoading(false));
  }, [selectedSubject]);

  // ─── 4. Load Topics when Chapter changes ───────────────────────────────────
  useEffect(() => {
    if (!selectedChapter) {
      setTopics([]);
      setSelectedTopic('');
      return;
    }

    setTopicsLoading(true);
    learnApi.get(`/content/chapters/${selectedChapter}/topics`)
      .then(res => {
        const list = res.data || [];
        setTopics(list);
        const paramTop = searchParams.get('topic');
        if (paramTop && list.some((t: Topic) => t.id === paramTop)) {
          setSelectedTopic(paramTop);
        } else if (!list.some((t: Topic) => t.id === selectedTopic)) {
          setSelectedTopic('');
        }
      })
      .catch(console.error)
      .finally(() => setTopicsLoading(false));
  }, [selectedChapter]);

  // ─── 5. Check Existing Questions in Topic ──────────────────────────────────
  useEffect(() => {
    if (!effectiveTopicId || effectiveTopicId.length < 10) {
      setExistingQuestionCount(null);
      return;
    }

    setCheckingQuestions(true);
    learnApi.get(`/content/topics/${effectiveTopicId}/questions`)
      .then(res => {
        setExistingQuestionCount(Array.isArray(res.data) ? res.data.length : 0);
      })
      .catch(() => {
        setExistingQuestionCount(null);
      })
      .finally(() => setCheckingQuestions(false));
  }, [effectiveTopicId]);

  // ─── File Selection & Parsing Handler ──────────────────────────────────────
  const handleFileSelect = (selectedFile: File | null) => {
    setFile(selectedFile);
    setPreviewRows([]);
    setTotalCsvRows(0);
    setCsvColumnWarning(null);
    setDelimiterWarning(false);
    setMessage(null);

    if (!selectedFile) return;

    const reader = new FileReader();
    setPreviewLoading(true);

    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        if (!text) {
          setPreviewLoading(false);
          return;
        }

        // Split lines safely
        const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(line => line.length > 0);
        if (rawLines.length === 0) {
          setPreviewLoading(false);
          return;
        }

        // Delimiter sniffer: check the first 3 lines
        const sampleLines = rawLines.slice(0, 3);
        const hasPipeInSample = sampleLines.some(l => l.includes('|'));
        const hasCommaInSample = sampleLines.some(l => l.includes(','));

        if (!hasPipeInSample && hasCommaInSample) {
          setDelimiterWarning(true);
        }

        // Check if first row is header
        const firstLineLower = rawLines[0].toLowerCase();
        const isHeader = (firstLineLower.includes('question') || firstLineLower.includes('text')) &&
                         (firstLineLower.includes('option') || firstLineLower.includes('correct'));
        const dataLines = isHeader ? rawLines.slice(1) : rawLines;
        
        setTotalCsvRows(dataLines.length);

        const parsed: CsvPreviewRow[] = [];
        const previewCount = Math.min(dataLines.length, 5);

        for (let i = 0; i < previewCount; i++) {
          const line = dataLines[i];
          const parts = line.split('|').map(p => p.trim());

          const rowNum = i + 1;
          const qText = parts[0] || '';
          const opA = parts[1] || '';
          const opB = parts[2] || '';
          const opC = parts[3] || '';
          const opD = parts[4] || '';
          const ans = (parts[5] || '').toUpperCase();
          const expl = parts[6] || '';
          const diff = (parts[7] || 'MEDIUM').toUpperCase();
          const year = parts[8] || '';

          let hasError = false;
          let errorReason = '';

          if (!qText) {
            hasError = true;
            errorReason = 'Missing question text';
          } else if (parts.length < 6) {
            hasError = true;
            errorReason = `Only ${parts.length} columns found (at least 6 required)`;
          } else if (!['A', 'B', 'C', 'D'].includes(ans)) {
            hasError = true;
            errorReason = `Invalid correct answer "${ans || 'EMPTY'}" (must be A, B, C, or D)`;
          }

          parsed.push({
            rowNum,
            questionText: qText,
            optionA: opA,
            optionB: opB,
            optionC: opC,
            optionD: opD,
            correctAnswer: ans,
            explanation: expl,
            difficulty: diff,
            sourceYear: year,
            hasError,
            errorReason
          });
        }

        setPreviewRows(parsed);

        // Column count warning check
        if (dataLines.length > 0) {
          const firstDataCols = dataLines[0].split('|').length;
          if (firstDataCols < 6) {
            setCsvColumnWarning(`Only detected ${firstDataCols} columns in data rows. Expected 9 columns separated by pipe (|).`);
          } else if (firstDataCols < 9) {
            setCsvColumnWarning(`Detected ${firstDataCols} columns. Full template has 9 columns (Question | OptA | OptB | OptC | OptD | Correct | Explanation | Difficulty | SourceYear).`);
          }
        }
      } catch (err) {
        console.error('Failed to parse CSV preview:', err);
      } finally {
        setPreviewLoading(false);
      }
    };

    reader.onerror = () => {
      setPreviewLoading(false);
      toast.error('Failed to read the selected file.');
    };

    reader.readAsText(selectedFile);
  };

  const handleClearFile = () => {
    setFile(null);
    setPreviewRows([]);
    setTotalCsvRows(0);
    setCsvColumnWarning(null);
    setDelimiterWarning(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // ─── Upload Handler ────────────────────────────────────────────────────────
  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !effectiveTopicId) {
      toast.error('Please choose a valid topic and select a CSV file.');
      setMessage({ type: 'error', text: 'Please specify the Target Topic and upload a CSV file.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Use api instance with automatic auth token handling
      const response = await api.post(
        `/learn/admin/import/questions/${effectiveTopicId}`,
        formData,
        {
          params: {
            skipDuplicates
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const count = response.data?.count ?? 0;
      const skipped = response.data?.skipped ?? 0;
      const total = response.data?.total ?? (count + skipped);

      let text = `Success! ${count} question${count !== 1 ? 's' : ''} imported and mapped to topic.`;
      if (skipped > 0) {
        text += ` (${skipped} duplicate question${skipped !== 1 ? 's' : ''} skipped)`;
      }

      toast.success(text);
      setMessage({ 
        type: 'success', 
        text,
        count,
        skipped,
        total
      });
      handleClearFile();

      if (count > 0) {
        setCountIncrement(count);
        setTimeout(() => setCountIncrement(null), 4000);
      }

      // Refresh question count
      learnApi.get(`/content/topics/${effectiveTopicId}/questions`)
        .then(res => setExistingQuestionCount(Array.isArray(res.data) ? res.data.length : count))
        .catch(console.error);
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.response?.data?.error || 'Failed to import questions. Verify CSV formatting.';
      toast.error(errMsg);
      setMessage({ type: 'error', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  // ─── Download Sample CSV ───────────────────────────────────────────────────
  const downloadSampleCsv = () => {
    const blob = new Blob([SAMPLE_CSV_CONTENT], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'preplens_questions_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Sample CSV template downloaded!');
  };

  const copyTemplateToClipboard = () => {
    navigator.clipboard.writeText(SAMPLE_CSV_CONTENT);
    setCopiedTemplate(true);
    toast.success('Template copied to clipboard');
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  // ─── AI JSON Handlers ──────────────────────────────────────────────────────
  const handleJsonChange = (val: string) => {
    setJsonText(val);
    if (!val.trim()) {
      setJsonError(null);
      setParsedJsonQuestions([]);
      return;
    }

    try {
      const parsed = JSON.parse(val);
      if (!Array.isArray(parsed)) {
        setJsonError('JSON must be an array of question objects: [ { ... }, { ... } ]');
        setParsedJsonQuestions([]);
        return;
      }

      if (parsed.length === 0) {
        setJsonError('JSON array is empty. Please provide at least 1 question object.');
        setParsedJsonQuestions([]);
        return;
      }

      const first = parsed[0];
      if (!first.questionText && !first.question) {
        setJsonError('Question objects must have a "questionText" property.');
        setParsedJsonQuestions(parsed);
        return;
      }

      setJsonError(null);
      setParsedJsonQuestions(parsed);
    } catch (err: any) {
      setJsonError(err.message || 'Invalid JSON syntax');
      setParsedJsonQuestions([]);
    }
  };

  const handlePrettifyJson = () => {
    if (!jsonText.trim()) return;
    try {
      const parsed = JSON.parse(jsonText);
      setJsonText(JSON.stringify(parsed, null, 2));
      toast.success('JSON formatted');
    } catch {
      toast.error('Cannot format invalid JSON');
    }
  };

  const handleLoadSampleJson = () => {
    handleJsonChange(SAMPLE_JSON_CONTENT);
    toast.success('Sample JSON loaded');
  };

  const handleClearJson = () => {
    setJsonText('');
    setJsonError(null);
    setParsedJsonQuestions([]);
    if (jsonFileInputRef.current) {
      jsonFileInputRef.current.value = '';
    }
  };

  const handleCopyAiPrompt = () => {
    const examLabel = currentExam?.name || 'Academic Exam';
    const subLabel = currentSubject?.name || 'Subject';
    const chapLabel = currentChapter?.title || 'Chapter';
    const topLabel = currentTopic?.title || 'Specific Topic';

    const promptText = `Act as an expert STEM educator and curriculum architect. Generate 10 high-yield multiple choice questions (MCQs) for:
- Target Exam: ${examLabel}
- Subject: ${subLabel}
- Chapter: ${chapLabel}
- Specific Topic: ${topLabel}

Format Instructions:
Output ONLY a valid, raw JSON array of objects conforming strictly to this format:
[
  {
    "questionText": "Clear, rigorous question text with proper math/scientific notation",
    "options": {
      "A": "Option A text",
      "B": "Option B text",
      "C": "Option C text",
      "D": "Option D text"
    },
    "correctAnswer": "A",
    "difficulty": "EASY",
    "explanation": "Step-by-step conceptual or mathematical solution"
  }
]

Quality Criteria:
1. Difficulty must be one of: "EASY", "MEDIUM", "HARD" (provide a balanced distribution).
2. "correctAnswer" must be strictly one letter: "A", "B", "C", or "D".
3. Provide crisp, pedagogical explanations for student learning.
4. Do NOT include markdown commentary or text outside the JSON codeblock.`;

    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    toast.success('Topic-specific AI Prompt copied to clipboard!');
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const copyJsonTemplateToClipboard = () => {
    navigator.clipboard.writeText(SAMPLE_JSON_CONTENT);
    setCopiedJsonTemplate(true);
    toast.success('JSON template copied to clipboard');
    setTimeout(() => setCopiedJsonTemplate(false), 2000);
  };

  const downloadSampleJson = () => {
    const blob = new Blob([SAMPLE_JSON_CONTENT], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'preplens_questions_template.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Sample JSON template downloaded!');
  };

  const handleJsonFileSelect = (selectedFile: File | null) => {
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        handleJsonChange(text);
        toast.success(`Loaded ${selectedFile.name}`);
      }
    };
    reader.readAsText(selectedFile);
  };

  const handleJsonImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parsedJsonQuestions.length || !effectiveTopicId) {
      toast.error('Please choose a valid topic and provide valid question JSON.');
      return;
    }

    if (jsonError) {
      toast.error('Please resolve JSON formatting errors before ingesting.');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await api.post(
        `/learn/admin/import/questions/${effectiveTopicId}/json`,
        parsedJsonQuestions,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            skipDuplicates
          }
        }
      );

      const count = response.data?.count ?? 0;
      const skipped = response.data?.skipped ?? 0;
      const total = response.data?.total ?? (count + skipped);

      let text = `Success! ${count} question${count !== 1 ? 's' : ''} ingested directly from AI JSON into ${currentTopic?.title || 'topic'}.`;
      if (skipped > 0) {
        text += ` (${skipped} duplicate question${skipped !== 1 ? 's' : ''} skipped)`;
      }

      toast.success(text);
      setMessage({ 
        type: 'success', 
        text,
        count,
        skipped,
        total
      });

      handleClearJson();

      if (count > 0) {
        setCountIncrement(count);
        setTimeout(() => setCountIncrement(null), 4000);
      }

      // Refresh question count
      learnApi.get(`/content/topics/${effectiveTopicId}/questions`)
        .then(res => setExistingQuestionCount(Array.isArray(res.data) ? res.data.length : count))
        .catch(console.error);
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.response?.data?.error || 'Failed to ingest questions from JSON.';
      toast.error(errMsg);
      setMessage({ type: 'error', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  // Current hierarchy items
  const currentExam = exams.find(e => e.id === selectedExam);
  const currentSubject = subjects.find(s => s.id === selectedSubject);
  const currentChapter = chapters.find(c => c.id === selectedChapter);
  const currentTopic = topics.find(t => t.id === selectedTopic);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* ─── Header & Top Navigation ──────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              Bulk Engine
            </span>
            <span className="text-xs text-slate-400">• PrepLens Learn</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-1">Bulk Question Ingestion</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Upload verified MCQ question banks for any curriculum topic using Pipe-Separated CSV or AI JSON.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link 
            to={`/admin/learn/questions${effectiveTopicId ? `?exam=${selectedExam}&subject=${selectedSubject}&chapter=${selectedChapter}&topic=${effectiveTopicId}` : ''}`} 
            className="px-3.5 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            Question Bank
          </Link>
          <Link 
            to="/admin/learn/upload" 
            className="px-3.5 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all flex items-center gap-1.5"
          >
            <Video className="w-3.5 h-3.5 text-slate-500" />
            Curate Videos & Notes
          </Link>
          <Link 
            to="/admin/learn/status" 
            className="px-3.5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" />
            Content Matrix
          </Link>
        </div>
      </div>

      {/* ─── Hierarchy Target Selection Card ──────────────────────────────── */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900">
                Target Topic Selection
              </h2>
              <p className="text-[11px] text-slate-400">
                Choose the exact curriculum node to attach incoming questions.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsManualUuid(!isManualUuid)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline decoration-dotted transition-colors"
          >
            {isManualUuid ? '← Back to Hierarchy Dropdowns' : 'Enter UUID Manually'}
          </button>
        </div>

        {!isManualUuid ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* 1. Exam */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>1. Exam</span>
                {examsLoading && <RefreshCw className="w-3 h-3 text-blue-500 animate-spin" />}
              </label>
              <select
                value={selectedExam}
                onChange={(e) => {
                  setSelectedExam(e.target.value);
                  setSelectedSubject('');
                  setSelectedChapter('');
                  setSelectedTopic('');
                }}
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 focus:bg-white transition-all"
              >
                <option value="">Select Exam...</option>
                {exams.map(e => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </select>
            </div>

            {/* 2. Subject */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>2. Subject</span>
                {subjectsLoading && <RefreshCw className="w-3 h-3 text-blue-500 animate-spin" />}
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedChapter('');
                  setSelectedTopic('');
                }}
                disabled={!selectedExam || subjectsLoading}
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 focus:bg-white transition-all disabled:opacity-50"
              >
                <option value="">Select Subject...</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* 3. Chapter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>3. Chapter</span>
                {chaptersLoading && <RefreshCw className="w-3 h-3 text-blue-500 animate-spin" />}
              </label>
              <select
                value={selectedChapter}
                onChange={(e) => {
                  setSelectedChapter(e.target.value);
                  setSelectedTopic('');
                }}
                disabled={!selectedSubject || chaptersLoading}
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 focus:bg-white transition-all disabled:opacity-50"
              >
                <option value="">Select Chapter...</option>
                {chapters.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.orderIndex ? `${c.orderIndex}. ` : ''}{c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Topic */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>4. Topic</span>
                {topicsLoading && <RefreshCw className="w-3 h-3 text-blue-500 animate-spin" />}
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                disabled={!selectedChapter || topicsLoading}
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 focus:bg-white transition-all disabled:opacity-50"
              >
                <option value="">Select Topic...</option>
                {topics.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.orderIndex ? `${t.orderIndex}. ` : ''}{t.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Direct Topic UUID:
            </label>
            <input
              type="text"
              placeholder="e.g. 123e4567-e89b-12d3-a456-426614174000"
              value={manualTopicId}
              onChange={(e) => setManualTopicId(e.target.value)}
              className="w-full text-xs font-mono p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>
        )}

        {/* Selected Breadcrumb & Existing Questions Badge */}
        {effectiveTopicId && (
          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 text-blue-950 font-medium">
              <span className="text-blue-600 font-bold uppercase text-[10px] tracking-wider mr-1">Target:</span>
              {!isManualUuid ? (
                <>
                  <span className="px-2 py-0.5 bg-white border border-blue-200 rounded-md font-bold">{currentExam?.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span className="px-2 py-0.5 bg-white border border-blue-200 rounded-md">{currentSubject?.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span className="px-2 py-0.5 bg-white border border-blue-200 rounded-md truncate max-w-[180px]">{currentChapter?.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span className="px-2 py-0.5 bg-blue-600 text-white font-bold rounded-md truncate max-w-[200px]">{currentTopic?.title}</span>
                </>
              ) : (
                <span className="font-mono font-bold text-blue-700">{manualTopicId}</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className={`px-2.5 py-1 bg-white border rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                countIncrement 
                  ? 'border-emerald-500 text-emerald-800 ring-2 ring-emerald-400/40 bg-emerald-50/50 scale-105' 
                  : 'border-blue-200 text-slate-700'
              }`}>
                <FileSpreadsheet className={`w-3.5 h-3.5 ${countIncrement ? 'text-emerald-600' : 'text-blue-600'}`} />
                <span>
                  {checkingQuestions 
                    ? 'Checking...' 
                    : `${existingQuestionCount ?? 0} Existing Questions`}
                </span>
                {countIncrement && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-emerald-600 text-white animate-pulse">
                    +{countIncrement} New
                  </span>
                )}
              </div>

              {effectiveTopicId && (
                <Link
                  to={`/admin/learn/questions?exam=${selectedExam}&subject=${selectedSubject}&chapter=${selectedChapter}&topic=${effectiveTopicId}`}
                  className="p-1.5 hover:bg-blue-100 text-blue-600 bg-white border border-blue-200 rounded-lg transition-colors flex items-center gap-1 text-[11px] font-bold"
                  title="Open this topic in Question Bank"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Bank</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ─── Dual Ingestion Mode Tabs ─────────────────────────────────────── */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-2xs">
        <button
          type="button"
          onClick={() => {
            setIngestMode('csv');
            setMessage(null);
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            ingestMode === 'csv'
              ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4 text-blue-600" />
          <span>Pipe-Separated CSV File</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setIngestMode('json');
            setMessage(null);
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            ingestMode === 'json'
              ? 'bg-white text-indigo-700 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          <Code2 className="w-4 h-4 text-indigo-600" />
          <span>Direct AI JSON Ingestion</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 text-indigo-700 font-extrabold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-600" /> AI Ready
          </span>
        </button>
      </div>

      {/* ─── Ingestion Card (JSON vs CSV) ─────────────────────────────────── */}
      {ingestMode === 'json' ? (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <form onSubmit={handleJsonImport} className="space-y-4">
            {message && (
              <div className={`p-4 rounded-xl text-xs space-y-1.5 shadow-2xs ${
                message.type === 'success' 
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' 
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {message.type === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                  )}
                  <span>{message.text}</span>
                </div>
                {message.type === 'success' && (message.count !== undefined || message.skipped !== undefined) && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 pl-6 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100/90 text-emerald-800 font-bold border border-emerald-200">
                      +{message.count ?? 0} Ingested
                    </span>
                    {(message.skipped ?? 0) > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-100/90 text-amber-800 font-bold border border-amber-200">
                        {message.skipped} Duplicate(s) Skipped
                      </span>
                    )}
                    <span className="text-emerald-700 font-medium">
                      Total evaluated: {message.total ?? ((message.count ?? 0) + (message.skipped ?? 0))} questions
                    </span>
                  </div>
                )}
                {message.type === 'success' && effectiveTopicId && (
                  <div className="pt-1 pl-6">
                    <Link
                      to={`/admin/learn/questions?exam=${selectedExam}&subject=${selectedSubject}&chapter=${selectedChapter}&topic=${effectiveTopicId}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-2xs transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Inspect in Question Bank</span>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Quick Actions Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 pb-2 border-b border-slate-100">
              <div>
                <h3 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-indigo-600" />
                  AI Question Bank JSON Editor
                </h3>
                <p className="text-[11px] text-slate-400">
                  Paste JSON array generated by ChatGPT, Claude, or Gemini.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleCopyAiPrompt}
                  className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                  title="Generate & copy a prompt specifically for the selected topic"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Prompt Copied!
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      Copy AI Prompt
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleLoadSampleJson}
                  className="px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all"
                >
                  <FileCode className="w-3.5 h-3.5 text-slate-500" />
                  Sample JSON
                </button>

                <button
                  type="button"
                  onClick={handlePrettifyJson}
                  disabled={!jsonText.trim() || !!jsonError}
                  className="px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all disabled:opacity-40"
                >
                  <AlignLeft className="w-3.5 h-3.5 text-slate-500" />
                  Prettify
                </button>

                {jsonText.trim() && (
                  <button
                    type="button"
                    onClick={handleClearJson}
                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Clear editor"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Validation Banner */}
            {jsonError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="font-mono text-[11px]">{jsonError}</span>
              </div>
            )}

            {parsedJsonQuestions.length > 0 && !jsonError && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold">Valid Question Bank: {parsedJsonQuestions.length} Questions parsed</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-mono">Ready to persist</span>
              </div>
            )}

            {/* Monospace Code Editor Area */}
            <div className="relative">
              <textarea
                value={jsonText}
                onChange={(e) => handleJsonChange(e.target.value)}
                placeholder={`Paste raw JSON here, or click "Copy AI Prompt" to create one in ChatGPT / Claude...\n\nExample:\n[\n  {\n    "questionText": "What is the unit of force?",\n    "options": { "A": "Joule", "B": "Newton", "C": "Watt", "D": "Pascal" },\n    "correctAnswer": "B",\n    "difficulty": "EASY",\n    "explanation": "Force is measured in Newtons (N) in SI units."\n  }\n]`}
                rows={12}
                className="w-full font-mono text-xs p-4 bg-slate-950 text-slate-100 rounded-xl border border-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 leading-relaxed"
                spellCheck={false}
              />
            </div>

            {/* Alternative file drop for JSON */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <label className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-bold underline flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5" />
                <span>Or load from .json file</span>
                <input
                  ref={jsonFileInputRef}
                  type="file"
                  accept=".json"
                  className="sr-only"
                  onChange={(e) => handleJsonFileSelect(e.target.files?.[0] || null)}
                />
              </label>

              <span className="text-[11px] text-slate-400 font-mono">
                {parsedJsonQuestions.length} item(s) detected
              </span>
            </div>

            {/* Parsed JSON Questions Preview Cards */}
            {parsedJsonQuestions.length > 0 && !jsonError && (
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Questions Preview (First {Math.min(parsedJsonQuestions.length, 3)} of {parsedJsonQuestions.length})</span>
                  <span className="text-[10px] text-slate-400 font-normal">Auto-mapped schema</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {parsedJsonQuestions.slice(0, 3).map((q: any, idx: number) => {
                    const text = q.questionText || q.question || 'No question text';
                    const ans = q.correctAnswer || q.correctOption || q.answer || '?';
                    return (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-slate-900 leading-snug">
                            {idx + 1}. {text}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">
                            Ans: {ans}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {q.explanation || 'No explanation provided'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Duplicate Protection Toggle (JSON) */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="skip-duplicates-json"
                  checked={skipDuplicates}
                  onChange={(e) => setSkipDuplicates(e.target.checked)}
                  className="mt-0.5 h-4 w-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
                />
                <div>
                  <label htmlFor="skip-duplicates-json" className="font-bold text-slate-900 cursor-pointer select-none">
                    Skip Duplicate Questions
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Ignores questions whose text is already present in this topic.
                  </p>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                skipDuplicates 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                  : 'bg-amber-100 text-amber-800 border border-amber-200'
              }`}>
                {skipDuplicates ? 'Protected' : 'Allow Duplicates'}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading || !parsedJsonQuestions.length || !!jsonError || !effectiveTopicId}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Ingesting JSON Question Bank...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Ingest {parsedJsonQuestions.length > 0 ? `${parsedJsonQuestions.length} Questions` : 'Questions'} via JSON into Selected Topic
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        /* ─── File Upload Card ─────────────────────────────────────────────── */
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <form onSubmit={handleImport} className="space-y-5">
            {message && (
              <div className={`p-4 rounded-xl text-xs space-y-1.5 shadow-2xs ${
                message.type === 'success' 
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' 
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {message.type === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                  )}
                  <span>{message.text}</span>
                </div>
                {message.type === 'success' && (message.count !== undefined || message.skipped !== undefined) && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 pl-6 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100/90 text-emerald-800 font-bold border border-emerald-200">
                      +{message.count ?? 0} Ingested
                    </span>
                    {(message.skipped ?? 0) > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-100/90 text-amber-800 font-bold border border-amber-200">
                        {message.skipped} Duplicate(s) Skipped
                      </span>
                    )}
                    <span className="text-emerald-700 font-medium">
                      Total evaluated: {message.total ?? ((message.count ?? 0) + (message.skipped ?? 0))} questions
                    </span>
                  </div>
                )}
                {message.type === 'success' && effectiveTopicId && (
                  <div className="pt-1 pl-6">
                    <Link
                      to={`/admin/learn/questions?exam=${selectedExam}&subject=${selectedSubject}&chapter=${selectedChapter}&topic=${effectiveTopicId}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-2xs transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Inspect in Question Bank</span>
                    </Link>
                  </div>
                )}
              </div>
            )}

          {/* Delimiter Sniffer Warning Banner */}
          {delimiterWarning && (
            <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-900 text-xs space-y-1.5 shadow-2xs">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                    Comma-Separated Delimiter Detected!
                  </h4>
                  <p className="text-amber-800 text-[11px] mt-1 leading-relaxed">
                    This file appears to use commas (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-amber-900">,</code>) instead of pipes (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-amber-900">|</code>). In STEM subjects, formulas, chemical equations, and math explanations often contain commas, which will break column alignments.
                  </p>
                  <p className="text-[11px] text-amber-900 font-semibold mt-1.5">
                    💡 Solution: Export or save your sheet with <code className="bg-amber-200/80 px-1.5 py-0.5 rounded font-mono font-bold">|</code> (pipe) delimiter to ensure 100% ingest fidelity.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Column count mismatch warning */}
          {csvColumnWarning && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{csvColumnWarning}</span>
            </div>
          )}

          {/* Drag & Drop File Upload Zone */}
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-7 text-center transition-all ${
              isDragging 
                ? 'border-blue-500 bg-blue-50/70 scale-[1.008]' 
                : 'border-slate-300 hover:bg-slate-50/70 hover:border-blue-400'
            }`}
          >
            <UploadCloud className={`mx-auto h-10 w-10 mb-2 transition-colors ${isDragging ? 'text-blue-600 animate-bounce' : 'text-slate-400'}`} />
            <div className="flex text-xs text-slate-600 justify-center items-center gap-1 font-semibold">
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer text-blue-600 hover:text-blue-700 font-bold underline"
              >
                Choose CSV File
                <input
                  ref={fileInputRef}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept=".csv,.txt,.tsv"
                  className="sr-only"
                  onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                />
              </label>
              <span>or drag and drop here</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Pipe-separated (|) CSV file up to 10MB</p>

            {file && (
              <div className="mt-4 p-2.5 px-3.5 bg-blue-50/80 border border-blue-200 rounded-xl inline-flex items-center gap-2.5 text-xs font-bold text-blue-900 shadow-2xs">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                <span>Selected: {file.name}</span>
                <span className="text-[10px] text-blue-600 font-normal">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
                <button
                  type="button"
                  onClick={handleClearFile}
                  className="ml-1 p-1 hover:bg-blue-200/70 rounded-md text-blue-700 transition-colors"
                  title="Remove selected file"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Loading parsing indicator */}
          {previewLoading && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
              <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
              Parsing CSV content & validating schema...
            </div>
          )}

          {/* Interactive Pre-Upload Verification Table */}
          {previewRows.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-blue-100 text-blue-700 rounded-md">
                    <Table className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-900">
                      Pre-Upload Live Preview Table
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      Previewing top {previewRows.length} questions before committing to database
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    {totalCsvRows} Total Rows
                  </span>
                  {previewRows.some(r => r.hasError) ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-rose-600" /> Validation Notice
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Columns Validated
                    </span>
                  )}
                </div>
              </div>

              {/* Table rendering */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-[10px] uppercase tracking-wider">
                      <th className="py-2.5 px-3 w-10 text-center">#</th>
                      <th className="py-2.5 px-3 min-w-[240px]">Question Text</th>
                      <th className="py-2.5 px-3 min-w-[220px]">Options (A / B / C / D)</th>
                      <th className="py-2.5 px-3 w-16 text-center">Correct</th>
                      <th className="py-2.5 px-3 w-20 text-center">Difficulty</th>
                      <th className="py-2.5 px-3 min-w-[180px]">Explanation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {previewRows.map((row) => (
                      <tr 
                        key={row.rowNum} 
                        className={row.hasError ? 'bg-rose-50/50 hover:bg-rose-50/80 transition-colors' : 'hover:bg-slate-50/70 transition-colors'}
                      >
                        <td className="py-2.5 px-3 font-mono font-bold text-slate-400 text-center align-top">
                          {row.rowNum}
                        </td>
                        <td className="py-2.5 px-3 text-slate-800 font-medium align-top">
                          <div className="leading-snug">{row.questionText}</div>
                          {row.hasError && (
                            <div className="mt-1.5 text-[10px] font-bold text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 shrink-0" />
                              {row.errorReason}
                            </div>
                          )}
                          {row.sourceYear && (
                            <span className="mt-1 inline-block text-[10px] text-slate-400 font-mono">
                              Source: {row.sourceYear}
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 space-y-1 align-top">
                          <div className={`px-2 py-0.5 rounded text-[10px] truncate max-w-[220px] ${
                            row.correctAnswer === 'A' 
                              ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                              : 'bg-slate-50 text-slate-700'
                          }`}>
                            <span className="font-bold mr-1">A:</span>{row.optionA || <span className="text-slate-300 italic">Empty</span>}
                          </div>
                          <div className={`px-2 py-0.5 rounded text-[10px] truncate max-w-[220px] ${
                            row.correctAnswer === 'B' 
                              ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                              : 'bg-slate-50 text-slate-700'
                          }`}>
                            <span className="font-bold mr-1">B:</span>{row.optionB || <span className="text-slate-300 italic">Empty</span>}
                          </div>
                          <div className={`px-2 py-0.5 rounded text-[10px] truncate max-w-[220px] ${
                            row.correctAnswer === 'C' 
                              ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                              : 'bg-slate-50 text-slate-700'
                          }`}>
                            <span className="font-bold mr-1">C:</span>{row.optionC || <span className="text-slate-300 italic">Empty</span>}
                          </div>
                          <div className={`px-2 py-0.5 rounded text-[10px] truncate max-w-[220px] ${
                            row.correctAnswer === 'D' 
                              ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                              : 'bg-slate-50 text-slate-700'
                          }`}>
                            <span className="font-bold mr-1">D:</span>{row.optionD || <span className="text-slate-300 italic">Empty</span>}
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-center align-top">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-black text-xs ${
                            ['A', 'B', 'C', 'D'].includes(row.correctAnswer)
                              ? 'bg-emerald-600 text-white shadow-2xs'
                              : 'bg-rose-100 text-rose-700 font-bold'
                          }`}>
                            {row.correctAnswer || '?'}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-center align-top">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                            row.difficulty === 'EASY'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : row.difficulty === 'HARD'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {row.difficulty}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-500 text-[10px] align-top max-w-[200px]" title={row.explanation}>
                          <div className="line-clamp-3 leading-relaxed">
                            {row.explanation || <span className="text-slate-300 italic">No explanation</span>}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Duplicate Protection Toggle (CSV) */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="skip-duplicates-csv"
                checked={skipDuplicates}
                onChange={(e) => setSkipDuplicates(e.target.checked)}
                className="mt-0.5 h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
              />
              <div>
                <label htmlFor="skip-duplicates-csv" className="font-bold text-slate-900 cursor-pointer select-none">
                  Skip Duplicate Questions
                </label>
                <p className="text-[11px] text-slate-500">
                  Ignores incoming rows whose question text already exists in this topic.
                </p>
              </div>
            </div>

            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
              skipDuplicates 
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                : 'bg-amber-100 text-amber-800 border border-amber-200'
            }`}>
              {skipDuplicates ? 'Protected' : 'Allow Duplicates'}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading || !file || !effectiveTopicId}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Parsing & Importing Questions...
              </>
            ) : (
              <>
                <UploadCloud className="w-4 h-4" />
                Ingest Questions into Selected Topic {totalCsvRows > 0 ? `(${totalCsvRows} Detected)` : ''}
              </>
            )}
          </button>
        </form>
      </div>
      )}

      {/* ─── Specification & Sample Download (Dual Mode) ──────────────────── */}
      <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 space-y-3.5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              {ingestMode === 'json' ? 'AI Question Bank JSON Schema' : 'Pipe-Separated CSV Specification'}
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {ingestMode === 'json'
                ? 'Standard JSON array schema accepted by ChatGPT/Claude and PrepLens ingestion engine.'
                : 'Strict 9-column schema required. Values must be separated by pipe (|).'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {ingestMode === 'json' ? (
              <>
                <button
                  type="button"
                  onClick={copyJsonTemplateToClipboard}
                  className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  {copiedJsonTemplate ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      Copy JSON
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={downloadSampleJson}
                  className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  Download Sample (.json)
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={copyTemplateToClipboard}
                  className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      Copy Format
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={downloadSampleCsv}
                  className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  Download Template (.csv)
                </button>
              </>
            )}
          </div>
        </div>

        {ingestMode === 'json' ? (
          <div className="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed border border-slate-800 max-h-56">
            <div className="text-indigo-400 font-bold mb-1">// Standard JSON Array Schema:</div>
            <pre className="text-emerald-400 font-mono text-[11px] leading-relaxed whitespace-pre">
              {SAMPLE_JSON_CONTENT}
            </pre>
          </div>
        ) : (
          <div className="bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-[11px] overflow-x-auto leading-relaxed border border-slate-800">
            <div className="text-indigo-400 font-bold mb-1"># Column Order (9 Columns):</div>
            <div>Question Text | Option A | Option B | Option C | Option D | Correct (A/B/C/D) | Explanation | Difficulty | Source Year</div>
            <div className="text-slate-500 mt-2"># Example:</div>
            <div className="text-emerald-400">
              A car starts from rest at 2 m/s² for 5s... | 5 m/s | 10 m/s | 15 m/s | 20 m/s | B | v=u+at | EASY | 2023
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] text-slate-600 pt-1">
          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
            <strong className="text-slate-900">Correct Option:</strong> Must be single letter `A`, `B`, `C`, or `D`.
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
            <strong className="text-slate-900">Difficulty:</strong> Use `EASY`, `MEDIUM`, or `HARD`.
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
            <strong className="text-slate-900">AI Prompt:</strong> Click "Copy AI Prompt" to generate 10 MCQs tailored to the active topic in seconds.
          </div>
        </div>
      </div>
    </div>
  );
}
