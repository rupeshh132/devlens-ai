import type { PyqPaper, PyqQuestion } from '../components/learn/PyqPaperViewerModal';

export interface PyqQuestionGrade {
  questionId: string;
  attempted: boolean;
  correct: boolean;
  wrong: boolean;
  deltaMarks: number;
}

export interface PyqPaperGradeSummary {
  netScore: number;
  maxMarks: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  accuracy: number;
  gradesById: Record<string, PyqQuestionGrade>;
  wrongQuestions: { question: PyqQuestion; userAnswer: string }[];
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export function matchesPyqOption(optText: string, optIdx: number, correctOption?: string): boolean {
  if (!correctOption) return false;
  const optClean = optText.trim().toLowerCase();
  const corrClean = correctOption.trim().toLowerCase();
  if (optClean === corrClean) return true;

  const letter = (OPTION_LETTERS[optIdx] || '').toLowerCase();
  if (!letter) return false;

  // Handles CBSE single-letter keys like 'B' when option starts with 'B) ...' or 'B. ...'
  if (/^[a-f]$/.test(corrClean)) {
    return (
      letter === corrClean ||
      optClean.startsWith(`${corrClean})`) ||
      optClean.startsWith(`${corrClean}.`)
    );
  }

  // Handles multi-letter MSQ keys like 'A, C' or 'AC'
  const letterTokens = corrClean
    .split(/[^a-f]+/)
    .filter(Boolean);
  if (letterTokens.length > 1 && letterTokens.includes(letter)) {
    return true;
  }

  return false;
}

export function isPyqMsqQuestion(paper: PyqPaper, q: PyqQuestion): boolean {
  if (q.questionText.trim().toUpperCase().startsWith('[MSQ]')) return true;
  if (
    (paper.targetClass === 'JEE Advanced' || paper.paperType === 'JEE_ADV_PAPER') &&
    q.section === 'B' &&
    Array.isArray(q.options) &&
    q.options.length > 0
  ) {
    return true;
  }
  return Boolean(q.correctOption && /^[A-F](\s*,\s*[A-F])+$/i.test(q.correctOption.trim()));
}

export function isPyqNumericalCorrect(rawInput: string, correctOption?: string): boolean {
  if (!correctOption) return false;
  const u = rawInput.trim().toLowerCase();
  const c = correctOption.trim().toLowerCase();
  if (!u) return false;
  if (u === c) return true;

  const uNum = Number(u);
  const cNum = Number(c);
  if (!Number.isNaN(uNum) && !Number.isNaN(cNum) && Number.isFinite(uNum) && Number.isFinite(cNum)) {
    return Math.abs(uNum - cNum) <= 0.01;
  }
  return false;
}

export function getPyqNegativePenalty(paper: PyqPaper, q: PyqQuestion): number {
  const cls = (paper.targetClass || '').toLowerCase();
  if (cls.includes('neet') || paper.paperType === 'NEET_PAPER') {
    return 1;
  }
  if (cls.includes('jee adv') || paper.paperType === 'JEE_ADV_PAPER') {
    if (q.section === 'C') return 0;
    if (q.section === 'B') return 2;
    return 1;
  }
  if (cls.includes('jee') || paper.paperType === 'JEE_SHIFT' || paper.paperType === 'COMPETITIVE_SAMPLE') {
    return 1;
  }
  return 0;
}

export function getPyqQuestionMode(paper: PyqPaper, q: PyqQuestion): 'MCQ' | 'MSQ' | 'NUMERICAL' | 'SUBJECTIVE' {
  if (Array.isArray(q.options) && q.options.length > 0) {
    return isPyqMsqQuestion(paper, q) ? 'MSQ' : 'MCQ';
  }
  if (q.correctOption && q.correctOption.trim().length > 0) {
    return 'NUMERICAL';
  }
  return 'SUBJECTIVE';
}

export function gradePyqPaper(
  paper: PyqPaper,
  userAnswers: Record<string, string>,
  subjectiveSelfGrades: Record<string, 'RIGHT' | 'WRONG' | undefined>
): PyqPaperGradeSummary {
  const questions = paper.questions || [];
  let netScore = 0;
  let maxMarks = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;
  const gradesById: Record<string, PyqQuestionGrade> = {};
  const wrongQuestions: { question: PyqQuestion; userAnswer: string }[] = [];

  for (const q of questions) {
    const qMarks = q.marks || 1;
    maxMarks += qMarks;
    const mode = getPyqQuestionMode(paper, q);
    const penalty = getPyqNegativePenalty(paper, q);

    if (mode === 'SUBJECTIVE') {
      const sg = subjectiveSelfGrades[q.id];
      if (!sg) {
        skippedCount++;
        gradesById[q.id] = { questionId: q.id, attempted: false, correct: false, wrong: false, deltaMarks: 0 };
      } else if (sg === 'RIGHT') {
        correctCount++;
        netScore += qMarks;
        gradesById[q.id] = { questionId: q.id, attempted: true, correct: true, wrong: false, deltaMarks: qMarks };
      } else {
        wrongCount++;
        gradesById[q.id] = { questionId: q.id, attempted: true, correct: false, wrong: true, deltaMarks: 0 };
        wrongQuestions.push({ question: q, userAnswer: 'Self-marked needs revision' });
      }
      continue;
    }

    const rawAns = (userAnswers[q.id] || '').trim();
    if (!rawAns) {
      skippedCount++;
      gradesById[q.id] = { questionId: q.id, attempted: false, correct: false, wrong: false, deltaMarks: 0 };
      continue;
    }

    let isCorrect = false;
    if (mode === 'NUMERICAL') {
      isCorrect = isPyqNumericalCorrect(rawAns, q.correctOption);
    } else if (mode === 'MCQ') {
      const idx = (q.options || []).findIndex(o => o === rawAns);
      isCorrect = matchesPyqOption(rawAns, idx, q.correctOption);
    } else {
      // MSQ: selected options joined by '||' or letters
      const selectedOpts = rawAns.split('||').filter(Boolean);
      const corrLetters = new Set<string>();
      (q.options || []).forEach((opt, idx) => {
        if (matchesPyqOption(opt, idx, q.correctOption)) {
          corrLetters.add(opt);
        }
      });
      isCorrect =
        corrLetters.size > 0 &&
        selectedOpts.length === corrLetters.size &&
        selectedOpts.every(s => corrLetters.has(s));
    }

    if (isCorrect) {
      correctCount++;
      netScore += qMarks;
      gradesById[q.id] = { questionId: q.id, attempted: true, correct: true, wrong: false, deltaMarks: qMarks };
    } else {
      wrongCount++;
      netScore -= penalty;
      gradesById[q.id] = { questionId: q.id, attempted: true, correct: false, wrong: true, deltaMarks: -penalty };
      wrongQuestions.push({ question: q, userAnswer: rawAns.replace(/\|\|/g, ', ') });
    }
  }

  const attempted = correctCount + wrongCount;
  const accuracy = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0;

  return {
    netScore,
    maxMarks: paper.totalMarks || maxMarks,
    correctCount,
    wrongCount,
    skippedCount,
    accuracy,
    gradesById,
    wrongQuestions,
  };
}
