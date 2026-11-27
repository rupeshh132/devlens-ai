import { saveLockerItem } from './lockerStorage';

export interface PredictedCompetitiveOutcome {
  isCompetitive: boolean;
  examTrack: string;
  scaledScore: number;
  officialMaxMarks: number;
  predictedPercentile: string;
  predictedRankBand: string;
  targetZone: string;
}

/**
 * Calibrated NTA JEE Mains / IIT JEE Advanced / NMC NEET UG score-to-percentile & rank band predictor.
 */
export function predictCompetitiveOutcome(
  examGoalOrTitle: string,
  score: number,
  totalMarks: number
): PredictedCompetitiveOutcome {
  const s = (examGoalOrTitle || '').toLowerCase();
  const max = totalMarks > 0 ? totalMarks : 100;
  const pct = Math.max(-25, Math.min(100, (score / max) * 100));

  if (s.includes('neet')) {
    const scaled = Math.round(Math.max(0, Math.min(720, (pct / 100) * 720)));
    let predictedPercentile = '';
    let predictedRankBand = '';
    let targetZone = '';

    if (scaled >= 680) {
      predictedPercentile = '99.95+ %ile';
      predictedRankBand = 'AIR 1 – 1,200';
      targetZone = 'AIIMS Delhi / Top Central Govt Medical';
    } else if (scaled >= 645) {
      predictedPercentile = '99.40 – 99.94 %ile';
      predictedRankBand = 'AIR 1,200 – 12,000';
      targetZone = 'Top State Govt MBBS Guarantee';
    } else if (scaled >= 605) {
      predictedPercentile = '98.00 – 99.39 %ile';
      predictedRankBand = 'AIR 12,000 – 45,000';
      targetZone = 'All India Quota (AIQ) MBBS Cutoff Zone';
    } else if (scaled >= 540) {
      predictedPercentile = '94.00 – 97.99 %ile';
      predictedRankBand = 'AIR 45,000 – 1,35,000';
      targetZone = 'State Quota Borderline / BDS';
    } else if (scaled >= 420) {
      predictedPercentile = '82.00 – 93.99 %ile';
      predictedRankBand = 'AIR 1.35L – 4.0L';
      targetZone = 'Qualifying Cutoff Cleared — NCERT Boost Needed';
    } else {
      const est = Math.max(10, Math.min(81.9, (scaled / 420) * 81.5));
      predictedPercentile = `${est.toFixed(1)} %ile`;
      predictedRankBand = 'AIR > 4.0 Lakh';
      targetZone = 'Focus on NCERT Line Recall & Zero Negatives';
    }

    return {
      isCompetitive: true,
      examTrack: 'NEET UG',
      scaledScore: scaled,
      officialMaxMarks: 720,
      predictedPercentile,
      predictedRankBand,
      targetZone,
    };
  }

  if (s.includes('jee') && (s.includes('adv') || s.includes('iit'))) {
    const scaled = Math.round(Math.max(0, Math.min(396, (pct / 100) * 396)));
    let predictedPercentile = '';
    let predictedRankBand = '';
    let targetZone = '';

    if (pct >= 68) {
      predictedPercentile = 'Top 0.3% IIT Elite';
      predictedRankBand = 'AIR 1 – 500';
      targetZone = 'Old IIT CSE / Electrical Zone';
    } else if (pct >= 55) {
      predictedPercentile = 'Top 1.5% IIT';
      predictedRankBand = 'AIR 500 – 2,500';
      targetZone = 'Top-7 IIT Circuital Branches';
    } else if (pct >= 42) {
      predictedPercentile = 'Top 4.5% IIT';
      predictedRankBand = 'AIR 2,500 – 7,500';
      targetZone = 'IIT B.Tech Confirmed Band';
    } else if (pct >= 32) {
      predictedPercentile = 'CRL Qualified';
      predictedRankBand = 'AIR 7,500 – 16,000';
      targetZone = 'IIT CRL Safe Merit Cutoff';
    } else {
      predictedPercentile = 'Below CRL Cutoff';
      predictedRankBand = 'Not Qualified Yet';
      targetZone = 'Eliminate -2 MSQ Traps & Target 35%+';
    }

    return {
      isCompetitive: true,
      examTrack: 'JEE Advanced',
      scaledScore: scaled,
      officialMaxMarks: 396,
      predictedPercentile,
      predictedRankBand,
      targetZone,
    };
  }

  if (s.includes('jee')) {
    const scaled = Math.round(Math.max(0, Math.min(300, (pct / 100) * 300)));
    let predictedPercentile = '';
    let predictedRankBand = '';
    let targetZone = '';

    if (scaled >= 260) {
      predictedPercentile = '99.92+ %ile';
      predictedRankBand = 'AIR 1 – 1,200';
      targetZone = 'Top NIT CSE / IIIT-H Tier';
    } else if (scaled >= 220) {
      predictedPercentile = '99.50 – 99.91 %ile';
      predictedRankBand = 'AIR 1,200 – 7,500';
      targetZone = 'NIT Trichy / Surathkal / Warangal CSE';
    } else if (scaled >= 185) {
      predictedPercentile = '98.80 – 99.49 %ile';
      predictedRankBand = 'AIR 7,500 – 18,000';
      targetZone = 'Core NIT + JEE Advanced Safe';
    } else if (scaled >= 150) {
      predictedPercentile = '96.50 – 98.79 %ile';
      predictedRankBand = 'AIR 18,000 – 52,000';
      targetZone = 'NIT / IIIT Seat + Advanced Qualifier';
    } else if (scaled >= 115) {
      predictedPercentile = '92.00 – 96.49 %ile';
      predictedRankBand = 'AIR 52,000 – 1,20,000';
      targetZone = 'General JEE Adv Cutoff Zone (~93%ile)';
    } else {
      const est = Math.max(10, Math.min(91.9, (scaled / 115) * 91.5));
      predictedPercentile = `${est.toFixed(2)} %ile`;
      predictedRankBand = 'AIR > 1.2 Lakh';
      targetZone = 'Push Physics + Chem Easy Qs to Cross 120/300';
    }

    return {
      isCompetitive: true,
      examTrack: 'JEE Mains',
      scaledScore: scaled,
      officialMaxMarks: 300,
      predictedPercentile,
      predictedRankBand,
      targetZone,
    };
  }

  return {
    isCompetitive: false,
    examTrack: examGoalOrTitle || 'Board Exam',
    scaledScore: Math.round(Math.max(0, pct)),
    officialMaxMarks: 100,
    predictedPercentile: `${Math.max(0, pct).toFixed(1)}%`,
    predictedRankBand: pct >= 90 ? 'Distinction Band' : pct >= 75 ? 'Merit Band' : 'Building Concept Clarity',
    targetZone: pct >= 90 ? 'Board Topper Zone' : 'Revise Marking Scheme Rubrics',
  };
}

export interface MistakeQuestionInput {
  questionId?: string;
  subject?: string;
  chapter?: string;
  questionText?: string;
  text?: string;
  userAnswer?: string;
  correctAnswer?: string;
  modelAnswer?: string;
  explanation?: string;
}

export function saveMistakeToLocker(q: MistakeQuestionInput, sourceTitle?: string) {
  const rawText = (q.questionText || q.text || '').trim();
  const shortTitle = `[Mistake] ${(q.subject || 'General')} — ${rawText.slice(0, 68)}${rawText.length > 68 ? '...' : ''}`;
  const contentLines = [
    `**Question:**\n${rawText}`,
    q.userAnswer ? `**Your Wrong Answer:** \`${q.userAnswer}\`` : null,
    q.correctAnswer ? `**Correct Answer:** \`${q.correctAnswer}\`` : null,
    q.modelAnswer ? `**Model Solution:**\n${q.modelAnswer}` : null,
    q.explanation ? `**Concept & Fix Note:**\n${q.explanation}` : null,
  ].filter(Boolean);

  return saveLockerItem({
    type: 'QUESTION',
    title: shortTitle,
    subtitle: `${q.subject || 'General'}${q.chapter ? ` • ${q.chapter}` : ''}${sourceTitle ? ` • ${sourceTitle}` : ''}`,
    content: contentLines.join('\n\n'),
    tags: ['Mistake Notebook', q.subject || 'General', q.chapter || 'Concept Drill', 'Auto-Heal'],
    personalNote: 'Flagged for Auto-Heal revision. Re-solve this problem cleanly without looking at the solution.',
    meta: {
      subject: q.subject || 'General',
      chapter: q.chapter,
      mistake: true,
      questionId: q.questionId,
      examTitle: sourceTitle,
    },
  });
}
