import { type FormulaItem, CLASS_12_STEM_FORMULAS } from './formulas/class12_stem';
import { CLASS_12_HUMANITIES_COMMERCE_FORMULAS } from './formulas/class12_humanities_commerce';
import { CLASS_11_STEM_FORMULAS } from './formulas/class11_stem';
import { CLASS_11_HUMANITIES_COMMERCE_FORMULAS } from './formulas/class11_humanities_commerce';
import { JEE_COMPETITIVE_FORMULAS } from './formulas/jee_competitive';
import { JEE_ADVANCED_FORMULAS } from './formulas/jee_advanced_competitive';
import { NEET_COMPETITIVE_FORMULAS } from './formulas/neet_competitive';
import { CLASS_10_FORMULAS } from './formulas/class10';
import { CLASS_9_FORMULAS } from './formulas/class9';

export type { FormulaItem };

export const FORMULAS_DATA: FormulaItem[] = [
  ...JEE_ADVANCED_FORMULAS,
  ...JEE_COMPETITIVE_FORMULAS,
  ...NEET_COMPETITIVE_FORMULAS,
  ...CLASS_12_STEM_FORMULAS,
  ...CLASS_12_HUMANITIES_COMMERCE_FORMULAS,
  ...CLASS_11_STEM_FORMULAS,
  ...CLASS_11_HUMANITIES_COMMERCE_FORMULAS,
  ...CLASS_10_FORMULAS,
  ...CLASS_9_FORMULAS,
];

export function getFormulasForClass(classLevel: string): FormulaItem[] {
  const clean = (classLevel || '').toLowerCase();
  if (clean.includes('jee')) {
    return FORMULAS_DATA.filter(f =>
      (f.classLevel === '11' || f.classLevel === '12') &&
      (f.subjectId === 'phy' || f.subjectId === 'chem' || f.subjectId === 'math')
    );
  }
  if (clean.includes('neet')) {
    return FORMULAS_DATA.filter(f =>
      (f.classLevel === '11' || f.classLevel === '12') &&
      (f.subjectId === 'phy' || f.subjectId === 'chem' || f.subjectId === 'bio')
    );
  }

  let targetLevel: '9' | '10' | '11' | '12' = '11';

  if (clean.includes('12')) targetLevel = '12';
  else if (clean.includes('11')) targetLevel = '11';
  else if (clean.includes('10')) targetLevel = '10';
  else if (clean.includes('9')) targetLevel = '9';

  return FORMULAS_DATA.filter(f => f.classLevel === targetLevel);
}

export function getSubjectsForFormulaClass(classLevel: string): { id: string; name: string }[] {
  const clean = (classLevel || '').toLowerCase();
  if (clean.includes('jee')) {
    return [
      { id: 'ALL', name: 'All JEE Subjects' },
      { id: 'phy', name: 'Physics' },
      { id: 'chem', name: 'Chemistry' },
      { id: 'math', name: 'Mathematics' }
    ];
  }
  if (clean.includes('neet')) {
    return [
      { id: 'ALL', name: 'All NEET Subjects' },
      { id: 'bio', name: 'Biology (Botany + Zoology)' },
      { id: 'chem', name: 'Chemistry' },
      { id: 'phy', name: 'Physics' }
    ];
  }
  if (clean.includes('11') || clean.includes('12')) {
    return [
      { id: 'ALL', name: 'All Subjects' },
      { id: 'phy', name: 'Physics' },
      { id: 'chem', name: 'Chemistry' },
      { id: 'math', name: 'Mathematics' },
      { id: 'bio', name: 'Biology' },
      { id: 'eco', name: 'Economics' },
      { id: 'cs', name: 'Computer Science' },
      { id: 'hist', name: 'History' },
      { id: 'pol', name: 'Political Science' }
    ];
  }
  return [
    { id: 'ALL', name: 'All Subjects' },
    { id: 'sci', name: 'Science' },
    { id: 'math', name: 'Mathematics' },
    { id: 'sst', name: 'Social Science' },
    { id: 'eng', name: 'English' }
  ];
}
