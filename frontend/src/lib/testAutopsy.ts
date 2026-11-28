export interface AutopsyQuestionInput {
  questionId: string;
  subject?: string;
  isCorrect?: boolean;
  isPartial?: boolean;
  negativeMarks?: number;
  earnedMarks?: number;
  userAnswer?: string;
  timeSpentSeconds?: number;
}

export interface ScoreAutopsyResult {
  fastWrongCount: number;
  slowWrongCount: number;
  slowCorrectCount: number;
  totalNegativeLost: number;
  fastWrongRecoverable: number;
  whatIfSkipFastWrongScore: number;
  whatIfZeroNegativeScore: number;
}

export function formatShortDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds || 0));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const rem = s % 60;
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m`;
  if (m > 0) return `${m}m ${String(rem).padStart(2, '0')}s`;
  return `${rem}s`;
}

export function getSubjectBudgetMinutes(examGoalOrTitle: string, subjectName: string): number {
  const g = (examGoalOrTitle || '').toLowerCase();
  const s = (subjectName || '').toLowerCase();
  if (g.includes('neet')) {
    if (s.includes('bot') || s.includes('zoo')) return 25;
    if (s.includes('bio')) return 50;
    if (s.includes('chem')) return 50;
    if (s.includes('phy')) return 80;
  }
  if (g.includes('jee')) {
    if (s.includes('chem')) return 45;
    if (s.includes('phy')) return 65;
    if (s.includes('math')) return 70;
  }
  return 60;
}

export function computeMockAutopsy(
  questions: AutopsyQuestionInput[],
  currentScore: number,
  defaultNegative: number,
  liveQuestionTimes?: Record<string, number>
): ScoreAutopsyResult {
  let fastWrongCount = 0;
  let slowWrongCount = 0;
  let slowCorrectCount = 0;
  let totalNegativeLost = 0;
  let fastWrongRecoverable = 0;

  for (const q of questions) {
    const secs = q.timeSpentSeconds ?? liveQuestionTimes?.[q.questionId] ?? 0;
    const negPenalty = q.earnedMarks != null && q.earnedMarks < 0
      ? Math.abs(q.earnedMarks)
      : (q.negativeMarks ?? defaultNegative ?? 0);

    const attempted = Boolean(q.userAnswer && String(q.userAnswer).trim().length > 0);
    if (!attempted && q.isCorrect === undefined) continue;

    if (q.isCorrect === false && !q.isPartial) {
      totalNegativeLost += negPenalty;
      if (secs > 0 && secs < 25) {
        fastWrongCount++;
        fastWrongRecoverable += negPenalty;
      } else if (secs >= 120) {
        slowWrongCount++;
      }
    } else if (q.isCorrect === true && secs >= 150) {
      slowCorrectCount++;
    }
  }

  return {
    fastWrongCount,
    slowWrongCount,
    slowCorrectCount,
    totalNegativeLost: Number(totalNegativeLost.toFixed(1)),
    fastWrongRecoverable: Number(fastWrongRecoverable.toFixed(1)),
    whatIfSkipFastWrongScore: Number((currentScore + fastWrongRecoverable).toFixed(1)),
    whatIfZeroNegativeScore: Number((currentScore + totalNegativeLost).toFixed(1)),
  };
}
