import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_MATH_SET2_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CBSE CLASS 9 MATHEMATICS OFFICIAL ANNUAL MODEL PAPER 2024-25 (SET 2)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c9-math-2024-model-set2',
    title: 'CBSE Class 9 Mathematics Official Annual Model Paper 2024-25 (Standard Blueprint - Set 2)',
    subject: 'Mathematics',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'CBSE/C9/MAT/SET2/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: true,
    totalQuestions: 38,
    generalInstructions: [
      'This question paper contains 38 questions divided into 5 sections: Section A, Section B, Section C, Section D, and Section E.',
      'Section A comprises 20 Multiple Choice Questions (MCQs) of 1 mark each (Q1 to Q18 are MCQs and Q19 & Q20 are Assertion-Reason questions).',
      'Section B comprises 5 Short Answer Type-I (SA-I) questions of 2 marks each (Q21 to Q25).',
      'Section C comprises 6 Short Answer Type-II (SA-II) questions of 3 marks each (Q26 to Q31).',
      'Section D comprises 4 Long Answer (LA) questions of 5 marks each (Q32 to Q35).',
      'Section E comprises 3 Case-Based integrated units of assessment of 4 marks each with sub-parts (Q36 to Q38).',
      'All Questions are compulsory. Internal choice is provided in 2 questions of Section B, 2 questions of Section C, 2 questions of Section D, and 1 question of Section E.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-m24-s2-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Real Numbers',
        questionText: 'If n is a rational number and a perfect square, then √n is:',
        options: [
          'A) Always an irrational number',
          'B) Always a rational number',
          'C) Sometimes a rational and sometimes an irrational number',
          'D) None of the above'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Always a rational number.\nBy definition, if a rational number n is a perfect square of another rational number p/q, then √n = p/q, which can be expressed in the form a/b where a, b ∈ Z and b ≠ 0. Hence √n is always a rational number.',
        stepMarking: [
          { step: 'Option B selected with definition of perfect square of rational', marks: '1 Mark' }
        ],
        examinerTip: 'Do not confuse perfect squares of rational numbers (e.g. 9/16 whose square root is 3/4) with non-square rational numbers (e.g. 2 whose square root is irrational).',
        commonPitfall: 'Marking option C assuming square root of fractions can be irrational.'
      },
      {
        id: 'c9-m24-s2-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Real Number Classification',
        questionText: 'Every rational number is: [NCERT Exemplar]',
        options: [
          'A) A natural number',
          'B) An integer',
          'C) A real number',
          'D) A whole number'
        ],
        correctOption: 'C',
        modelAnswer: 'C) A real number.\nThe collection of all real numbers (R) is composed of all rational numbers (Q) and all irrational numbers (I). Every rational number is a member of the real number system.',
        stepMarking: [
          { step: 'Option C selected correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Remember the hierarchical subset relation: Natural Numbers (N) ⊂ Whole Numbers (W) ⊂ Integers (Z) ⊂ Rational Numbers (Q) ⊂ Real Numbers (R).',
        commonPitfall: 'Selecting integers (B), forgetting fractions like 3/4 are rational but not integers.'
      },
      {
        id: 'c9-m24-s2-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Decimal Representations',
        questionText: 'The decimal representation of a rational number CANNOT be: [NCERT Exemplar]',
        options: [
          'A) Terminating',
          'B) Non-terminating',
          'C) Non-terminating recurring',
          'D) Non-terminating non-recurring'
        ],
        correctOption: 'D',
        modelAnswer: 'D) Non-terminating non-recurring.\nThe decimal expansion of a rational number is always either terminating (e.g. 1/4 = 0.25) or non-terminating recurring (e.g. 1/3 = 0.333...). A non-terminating non-recurring decimal represents an irrational number.',
        stepMarking: [
          { step: 'Option D identified accurately', marks: '1 Mark' }
        ],
        examinerTip: 'Non-terminating recurring = Rational; Non-terminating non-recurring = Irrational.',
        commonPitfall: 'Confusing recurring with non-recurring.'
      },
      {
        id: 'c9-m24-s2-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Identifying Irrational Numbers',
        questionText: 'Which of the following is an irrational number?',
        options: [
          'A) √(9/16)',
          'B) √(48/3)',
          'C) √15',
          'D) √25'
        ],
        correctOption: 'C',
        modelAnswer: 'C) √15.\nEvaluating each expression:\n• Option A: √(9/16) = 3/4 (Rational)\n• Option B: √(48/3) = √16 = 4 (Rational)\n• Option C: √15 = √(3 × 5), where 15 is not a perfect square (Irrational)\n• Option D: √25 = 5 (Rational)',
        stepMarking: [
          { step: 'Option C selected with simplifications', marks: '1 Mark' }
        ],
        examinerTip: 'Always simplify inside the radical before judging (e.g. 48/3 simplifies to 16, which is a perfect square).',
        commonPitfall: 'Mistaking √(48/3) as irrational without simplifying.'
      },
      {
        id: 'c9-m24-s2-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Recurring Decimals to p/q Form',
        questionText: 'The p/q form of the recurring decimal 0.7̄ is:',
        options: [
          'A) 7/10',
          'B) 7/9',
          'C) 7/99',
          'D) 7/100'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 7/9.\nLet x = 0.777... (Equation 1)\nMultiplying by 10:\n10x = 7.777... (Equation 2)\nSubtracting (1) from (2):\n9x = 7 ⇒ x = 7/9.',
        stepMarking: [
          { step: 'Option B selected with 9x = 7 step', marks: '1 Mark' }
        ],
        examinerTip: 'Quick shortcut: For 0.ā, denominator is 9 (7/9). For 0.ab̄, denominator is 99.',
        commonPitfall: 'Writing 7/10 by dropping the bar.'
      },
      {
        id: 'c9-m24-s2-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Laws of Exponents',
        questionText: 'The value of (256)^0.16 × (256)^0.09 is: [NCERT Exemplar]',
        options: [
          'A) 4',
          'B) 16',
          'C) 64',
          'D) 256'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 4.\nUsing the law of exponents a^p × a^q = a^(p + q):\n(256)^0.16 × (256)^0.09 = (256)^(0.16 + 0.09) = (256)^0.25\nSince 0.25 = 25/100 = 1/4:\n(256)^(1/4) = (4^4)^(1/4) = 4^(4 × 1/4) = 4.',
        stepMarking: [
          { step: 'Option A selected with exponent sum 0.25 and fourth root', marks: '1 Mark' }
        ],
        examinerTip: 'Remember that 256 = 2^8 = 4^4 = 16^2.',
        commonPitfall: 'Multiplying the bases instead of adding exponents.'
      },
      {
        id: 'c9-m24-s2-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Exponential Equations',
        questionText: 'If 10^x = 64, what is the value of 10^(x/2 + 1)?',
        options: [
          'A) 42',
          'B) 18',
          'C) 81',
          'D) 80'
        ],
        correctOption: 'D',
        modelAnswer: 'D) 80.\nWe can rewrite 10^(x/2 + 1) using exponent rules:\n10^(x/2 + 1) = 10^(x/2) × 10^1 = (10^x)^(1/2) × 10\nGiven 10^x = 64:\n(64)^(1/2) × 10 = √64 × 10 = 8 × 10 = 80.',
        stepMarking: [
          { step: 'Option D chosen with (64)^(1/2) × 10 = 80', marks: '1 Mark' }
        ],
        examinerTip: 'Remember a^(m + n) = a^m × a^n and a^(m/2) = √(a^m).',
        commonPitfall: 'Dividing 64 by 2 to get 32 × 10 = 320 or other arithmetic errors.'
      },
      {
        id: 'c9-m24-s2-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Terminating Decimals',
        questionText: 'The decimal expansion of the rational number 41 / (2^3 × 5^3) will terminate after how many places of decimals?',
        options: [
          'A) 2',
          'B) 4',
          'C) 3',
          'D) 1'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 3.\nDenominator = 2^3 × 5^3 = (2 × 5)^3 = 10^3 = 1000.\nTherefore, 41 / 1000 = 0.041, which has exactly 3 decimal places.',
        stepMarking: [
          { step: 'Option C selected with 10^3 = 1000 explanation', marks: '1 Mark' }
        ],
        examinerTip: 'The number of terminating decimal places of p/(2^m × 5^n) equals max(m, n). Here max(3, 3) = 3.',
        commonPitfall: 'Adding the powers 3 + 3 = 6.'
      },
      {
        id: 'c9-m24-s2-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Number Theory Divisibility',
        questionText: '(n² - 1) is divisible by 4, if n is:',
        options: [
          'A) Any natural number',
          'B) Any integer',
          'C) Any odd number',
          'D) Any even integer'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Any odd number.\nLet n be any odd integer: n = 2k + 1 (where k ∈ Z).\nThen n² - 1 = (2k + 1)² - 1 = 4k² + 4k + 1 - 1 = 4(k² + k).\nSince 4 is a factor, (n² - 1) is always divisible by 4 for any odd integer.',
        stepMarking: [
          { step: 'Option C selected with algebraic proof', marks: '1 Mark' }
        ],
        examinerTip: 'Test with small values: if n=3, 3²-1=8 (divisible by 4); if n=5, 5²-1=24 (divisible by 4); if n=2 (even), 2²-1=3 (not divisible by 4).',
        commonPitfall: 'Marking any natural number without checking even values.'
      },
      {
        id: 'c9-m24-s2-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Zero of Zero Polynomial',
        questionText: 'The zero of the zero polynomial is: [NCERT Exemplar]',
        options: [
          'A) 1',
          'B) 0',
          'C) Any real number',
          'D) Not defined'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Any real number.\nFor the zero polynomial p(x) = 0, p(c) = 0 for every real number c. Hence, any real number is a zero of the zero polynomial.',
        stepMarking: [
          { step: 'Option C chosen accurately', marks: '1 Mark' }
        ],
        examinerTip: 'Do not confuse the "zero of the zero polynomial" (which is any real number) with the "degree of the zero polynomial" (which is not defined).',
        commonPitfall: 'Confusing zero of zero polynomial with its degree.'
      },
      {
        id: 'c9-m24-s2-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Degree of Polynomials',
        questionText: 'The degree of the zero polynomial is: [NCERT Exemplar]',
        options: [
          'A) 0',
          'B) 1',
          'C) Not defined',
          'D) Any real number'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Not defined.\nBy algebraic definition, the degree of the zero polynomial p(x) = 0 is not defined, because 0 can be written as 0·x^0, 0·x^1, 0·x^2, etc.',
        stepMarking: [
          { step: 'Option C selected correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Degree of non-zero constant polynomial (e.g. p(x) = 7) is 0. Degree of zero polynomial p(x) = 0 is not defined.',
        commonPitfall: 'Writing 0 instead of "not defined".'
      },
      {
        id: 'c9-m24-s2-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Polynomial Evaluation',
        questionText: 'If p(x) = x + 6, then p(x) + p(-x) equals:',
        options: [
          'A) 0',
          'B) 6',
          'C) 2x',
          'D) 12'
        ],
        correctOption: 'D',
        modelAnswer: 'D) 12.\np(x) = x + 6\np(-x) = (-x) + 6 = -x + 6\np(x) + p(-x) = (x + 6) + (-x + 6) = 12.',
        stepMarking: [
          { step: 'Option D identified with x cancellation', marks: '1 Mark' }
        ],
        examinerTip: 'Linear variable terms x and -x cancel out, leaving the sum of constants.',
        commonPitfall: 'Marking 0 assuming p(-x) = -p(x).'
      },
      {
        id: 'c9-m24-s2-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Remainder Theorem',
        questionText: 'When x⁹⁹ + 99 is divided by (x + 1), the remainder is:',
        options: [
          'A) 98',
          'B) 99',
          'C) 100',
          'D) 0'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 98.\nBy the Remainder Theorem, dividing p(x) by (x + 1) gives remainder R = p(-1).\np(-1) = (-1)⁹⁹ + 99 = -1 + 99 = 98.',
        stepMarking: [
          { step: 'Option A selected with (-1)⁹⁹ = -1 evaluation', marks: '1 Mark' }
        ],
        examinerTip: 'Remember (-1)^odd = -1, and (-1)^even = +1.',
        commonPitfall: 'Assuming (-1)⁹⁹ = +1 and getting 100.'
      },
      {
        id: 'c9-m24-s2-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Factor Theorem Application',
        questionText: 'For what value of k is the polynomial x² - kx + 6 divisible by (x - 2)?',
        options: [
          'A) 5',
          'B) -5',
          'C) 6',
          'D) -6'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 5.\nIf (x - 2) is a factor, then by Factor Theorem p(2) = 0.\np(2) = (2)² - k(2) + 6 = 4 - 2k + 6 = 10 - 2k = 0 ⇒ 2k = 10 ⇒ k = 5.',
        stepMarking: [
          { step: 'Option A selected with 10 - 2k = 0', marks: '1 Mark' }
        ],
        examinerTip: 'Substitute the root x = 2 into the polynomial and equate to zero.',
        commonPitfall: 'Making a sign error and arriving at k = -5.'
      },
      {
        id: 'c9-m24-s2-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Reciprocal Sum Identities',
        questionText: 'If x + 1/x = 7, the value of x² + 1/x² is:',
        options: [
          'A) 36',
          'B) 49',
          'C) 47',
          'D) 52'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 47.\nSquaring both sides of (x + 1/x) = 7:\n(x + 1/x)² = 7²\nx² + 2(x)(1/x) + 1/x² = 49\nx² + 2 + 1/x² = 49 ⇒ x² + 1/x² = 49 - 2 = 47.',
        stepMarking: [
          { step: 'Option C selected with 49 - 2 = 47', marks: '1 Mark' }
        ],
        examinerTip: 'Always remember to subtract 2 from the square of the sum: x² + 1/x² = (x + 1/x)² - 2.',
        commonPitfall: 'Writing 49 without subtracting the 2ab term.'
      },
      {
        id: 'c9-m24-s2-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Class Mark Calculation',
        questionText: 'The class mark of the class interval 90 - 130 is:',
        options: [
          'A) 90',
          'B) 105',
          'C) 115',
          'D) 110'
        ],
        correctOption: 'D',
        modelAnswer: 'D) 110.\nClass Mark = (Upper Limit + Lower Limit) / 2 = (130 + 90) / 2 = 220 / 2 = 110.',
        stepMarking: [
          { step: 'Option D selected with (90+130)/2 calculation', marks: '1 Mark' }
        ],
        examinerTip: 'Class mark represents the central mid-point of the class interval.',
        commonPitfall: 'Subtracting to find class width (130 - 90 = 40) instead of adding.'
      },
      {
        id: 'c9-m24-s2-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Lower Limit from Mid-Value and Width',
        questionText: 'In a frequency distribution, the mid-value of a class is 10 and the width of the class is 6. The lower limit of the class is:',
        options: [
          'A) 12',
          'B) 7',
          'C) 6',
          'D) 8'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 7.\nLower Limit = Mid-value - (Class Width / 2) = 10 - (6 / 2) = 10 - 3 = 7.\n(Upper Limit = 10 + 3 = 13, class interval is 7 - 13).',
        stepMarking: [
          { step: 'Option B selected with 10 - 3 = 7 step', marks: '1 Mark' }
        ],
        examinerTip: 'Formula: Lower Limit = Mid-value - (h/2); Upper Limit = Mid-value + (h/2).',
        commonPitfall: 'Subtracting full width: 10 - 6 = 4.'
      },
      {
        id: 'c9-m24-s2-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Histogram Geometric Property',
        questionText: 'In a histogram, the area of each rectangle is proportional to:',
        options: [
          'A) Cumulative frequency of the corresponding class',
          'B) Frequency of the corresponding class interval',
          'C) The class size only',
          'D) The class mark only'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Frequency of the corresponding class interval.\nIn a histogram, continuous class intervals form the bases and frequencies (or frequency densities) form heights. Consequently, the total area of each rectangle is directly proportional to the frequency of that class interval.',
        stepMarking: [
          { step: 'Option B chosen correctly', marks: '1 Mark' }
        ],
        examinerTip: 'When class widths are unequal, height is adjusted so that Area remains strictly proportional to frequency.',
        commonPitfall: 'Selecting cumulative frequency (which applies to ogives, not histograms).'
      },
      {
        id: 'c9-m24-s2-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Degree of Constant Polynomial (Assertion-Reason)',
        questionText: 'Assertion (A): The degree of the constant polynomial 7 is 0.\nReason (R): Any non-zero constant k can be written as k · x⁰, where the highest power of the variable is 0.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nA non-zero constant polynomial 7 = 7x⁰. The highest exponent of x is 0, so its degree is 0. Reason (R) directly explains Assertion (A).',
        stepMarking: [
          { step: 'Option A selected with complete causal explanation', marks: '1 Mark' }
        ],
        examinerTip: 'Remember: Constant polynomial (non-zero) has degree 0. Zero polynomial has degree not defined.',
        commonPitfall: 'Confusing degree of constant polynomial with degree of linear polynomial.'
      },
      {
        id: 'c9-m24-s2-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Circles: Theorems on Subtended Angles (Assertion-Reason)',
        questionText: 'Assertion (A): If the chords AB and CD of a circle are equal in length, then they subtend equal angles at the centre.\nReason (R): The angle subtended by an arc at the centre is half the angle subtended by it at any point on the remaining part of the circle.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (A) is true but (R) is false.\nAssertion (A) is a standard true theorem (Equal chords subtend equal angles at the centre, proven by SSS congruency). Reason (R) states the angle at the centre is half, which is FALSE (The angle at the centre is DOUBLE the angle at the circumference: ∠AOB = 2∠APB). Hence (A) is true but (R) is false.',
        stepMarking: [
          { step: 'Option C selected with correct assessment that R is mathematically false', marks: '1 Mark' }
        ],
        examinerTip: 'Carefully verify the mathematical statement of Reason: Centre angle is DOUBLE, not half!',
        commonPitfall: 'Selecting option A without noticing the inverted word "half".'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q21 to Q25 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-m24-s2-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Number Systems: Surds & Conjugate Rationalisation',
        questionText: 'If x = 2 + √3, then find the value of x + 1/x.',
        modelAnswer: 'Given: x = 2 + √3\n1/x = 1 / (2 + √3)\nMultiplying numerator and denominator by conjugate (2 - √3):\n1/x = (2 - √3) / [(2 + √3)(2 - √3)]\n1/x = (2 - √3) / (2² - (√3)²)\n1/x = (2 - √3) / (4 - 3) = 2 - √3\n\nTherefore:\nx + 1/x = (2 + √3) + (2 - √3) = 4.',
        stepMarking: [
          { step: 'Rationalising 1/x to obtain 2 - √3', marks: '1 Mark' },
          { step: 'Adding x + 1/x to obtain final answer 4', marks: '1 Mark' }
        ],
        examinerTip: 'When x = a + √b with a² - b = 1, 1/x is always a - √b.',
        commonPitfall: 'Arithmetic mistakes in squaring (√3)² = 3.'
      },
      {
        id: 'c9-m24-s2-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Polynomials: Splitting Middle Term with Radicals',
        questionText: 'Factorise: x² + 3√3 x + 6.',
        modelAnswer: 'We need two numbers whose product is 6 and sum is 3√3.\nNotice that 2√3 × √3 = 2 × 3 = 6, and 2√3 + √3 = 3√3.\n\nSplitting the middle term:\nx² + 2√3 x + √3 x + 6\n= x(x + 2√3) + √3 x + (√3 × 2√3)\n= x(x + 2√3) + √3(x + 2√3)\n= (x + √3)(x + 2√3).',
        stepMarking: [
          { step: 'Splitting middle term into 2√3x and √3x', marks: '1 Mark' },
          { step: 'Factoring by grouping to get (x + √3)(x + 2√3)', marks: '1 Mark' }
        ],
        examinerTip: 'Write 6 as 2√3 × √3 to easily factor out √3 from the second pair.',
        commonPitfall: 'Incorrectly attempting standard rational integer factor pairs.'
      },
      {
        id: 'c9-m24-s2-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Polynomials: Geometric Application of (a + b)²',
        questionText: 'If the area of a square is 4x² + 12x + 9, then find the length of its side.',
        modelAnswer: 'Area of square = (Side)²\nGiven: Area = 4x² + 12x + 9\nNotice this is a perfect square trinomial:\n4x² + 12x + 9 = (2x)² + 2(2x)(3) + (3)²\n= (2x + 3)²\n\nTherefore:\n(Side)² = (2x + 3)²\n⇒ Side of the square = (2x + 3) units.',
        stepMarking: [
          { step: 'Recognizing (2x)² + 2(2x)(3) + 3² expansion', marks: '1 Mark' },
          { step: 'Concurring side length = (2x + 3) units', marks: '1 Mark' }
        ],
        examinerTip: 'Always write the units ("units") at the end of geometric dimension answers.',
        commonPitfall: 'Forgetting to take square root and stating area as side.'
      },
      {
        id: 'c9-m24-s2-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Polynomials: Numerical Evaluation using (a+b)(a-b)',
        questionText: 'Evaluate without direct multiplication: 207 × 193.',
        modelAnswer: 'Express 207 and 193 around the central base 200:\n207 = 200 + 7\n193 = 200 - 7\n\nUsing identity (a + b)(a - b) = a² - b²:\n207 × 193 = (200 + 7)(200 - 7)\n= (200)² - (7)²\n= 40,000 - 49\n= 39,951.',
        stepMarking: [
          { step: 'Representing as (200 + 7)(200 - 7)', marks: '1 Mark' },
          { step: 'Applying 40000 - 49 to get 39951', marks: '1 Mark' }
        ],
        examinerTip: 'Direct standard multiplication will yield 0 marks if the question specifies "without direct multiplication".',
        commonPitfall: 'Carrying out direct vertical multiplication.'
      },
      {
        id: 'c9-m24-s2-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Statistics: Class Range and Class Size Properties',
        questionText: 'A dataset has maximum value 75 and range 20. Find its minimum value. Also find the class size of the interval 15 - 20.',
        modelAnswer: '1. Range Calculation:\n   Range = Maximum Value - Minimum Value\n   20 = 75 - Minimum Value\n   Minimum Value = 75 - 20 = 55.\n\n2. Class Size:\n   Class Size = Upper Class Limit - Lower Class Limit\n   = 20 - 15 = 5.',
        stepMarking: [
          { step: 'Minimum value = 55 computed correctly', marks: '1 Mark' },
          { step: 'Class size = 5 calculated correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Range is a measure of dispersion; Class Size is the width of an individual bin.',
        commonPitfall: 'Adding instead of subtracting: 75 + 20 = 95.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER TYPE-II (Q26 to Q31 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-m24-s2-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Polynomials: Conditional Identity x³ + y³ + z³ = 3xyz',
        questionText: 'Find the value of (13)³ + (15)³ - (28)³ without actually calculating the cubes. [NCERT]',
        modelAnswer: 'Rewrite the expression as a sum of three cubes:\n(13)³ + (15)³ + (-28)³\n\nLet a = 13, b = 15, and c = -28.\nCompute the sum (a + b + c):\na + b + c = 13 + 15 + (-28) = 28 - 28 = 0.\n\nIdentity: If a + b + c = 0, then a³ + b³ + c³ = 3abc.\nTherefore:\n(13)³ + (15)³ + (-28)³ = 3 × (13) × (15) × (-28)\n= 3 × 13 × (-420)\n= 39 × (-420)\n= -16,380.',
        stepMarking: [
          { step: 'Stating a + b + c = 13 + 15 - 28 = 0', marks: '1 Mark' },
          { step: 'Quoting identity: if a + b + c = 0 then a³ + b³ + c³ = 3abc', marks: '1 Mark' },
          { step: 'Computing 3 × 13 × 15 × (-28) = -16380', marks: '1 Mark' }
        ],
        examinerTip: 'Do not forget the negative sign of (-28); the final product must be negative.',
        commonPitfall: 'Forgetting the negative sign and giving +16380.'
      },
      {
        id: 'c9-m24-s2-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Polynomials: Symmetric Cyclic Factorisation',
        questionText: 'Factorise: (a - b)³ + (b - c)³ + (c - a)³.',
        modelAnswer: 'Let x = a - b, y = b - c, and z = c - a.\n\nExamine the sum (x + y + z):\nx + y + z = (a - b) + (b - c) + (c - a)\n= a - a + b - b + c - c = 0.\n\nWe know algebraic identity:\nIf x + y + z = 0, then x³ + y³ + z³ = 3xyz.\n\nSubstituting back x, y, and z:\n(a - b)³ + (b - c)³ + (c - a)³ = 3(a - b)(b - c)(c - a).',
        stepMarking: [
          { step: 'Substituting x, y, z and showing x + y + z = 0', marks: '1 Mark' },
          { step: 'Applying conditional identity x³ + y³ + z³ = 3xyz', marks: '1 Mark' },
          { step: 'Final factored form: 3(a - b)(b - c)(c - a)', marks: '1 Mark' }
        ],
        examinerTip: 'This is one of the most frequently asked 3-mark questions in CBSE Class 9 examinations.',
        commonPitfall: 'Expanding all terms into long polynomials instead of using the conditional identity.'
      },
      {
        id: 'c9-m24-s2-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Polynomials: Factor Theorem on Quartic Polynomial',
        questionText: 'If (x² - 1) is a factor of ax⁴ + bx³ + cx² + dx + e, then prove that a + c + e = b + d.',
        modelAnswer: 'Let p(x) = ax⁴ + bx³ + cx² + dx + e.\nGiven that (x² - 1) is a factor of p(x).\nSince x² - 1 = (x - 1)(x + 1), both (x - 1) and (x + 1) are factors of p(x).\n\nBy Factor Theorem:\n1) p(1) = 0\n   a(1)⁴ + b(1)³ + c(1)² + d(1) + e = 0\n   ⇒ a + b + c + d + e = 0  (Equation 1)\n\n2) p(-1) = 0\n   a(-1)⁴ + b(-1)³ + c(-1)² + d(-1) + e = 0\n   a(1) + b(-1) + c(1) + d(-1) + e = 0\n   ⇒ a - b + c - d + e = 0  (Equation 2)\n\nRearranging Equation 2:\na + c + e = b + d.\nHence Proved.',
        stepMarking: [
          { step: 'Factoring x² - 1 into (x - 1)(x + 1)', marks: '1 Mark' },
          { step: 'Setting p(-1) = a - b + c - d + e = 0', marks: '1 Mark' },
          { step: 'Rearranging to obtain a + c + e = b + d', marks: '1 Mark' }
        ],
        examinerTip: 'Equation 2 alone proves the result immediately; Equation 1 confirms consistency.',
        commonPitfall: 'Only evaluating p(1) and getting stuck.'
      },
      {
        id: 'c9-m24-s2-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Number Systems: Exponential Simplification',
        questionText: 'Simplify: (5^(n+2) - 6 · 5^(n+1)) / (13 · 5^n - 2 · 5^(n+1)).',
        modelAnswer: 'Factor out the common power 5^n or 5^(n+1) from numerator and denominator:\n\nNumerator:\n5^(n+2) - 6 · 5^(n+1) = 5^(n+1) · [5¹ - 6] = 5^(n+1) · [-1] = -5^(n+1)\nOr factoring 5^n: 5^n · [5² - 6 · 5] = 5^n · [25 - 30] = 5^n · [-5] = -5^(n+1)\n\nDenominator:\n13 · 5^n - 2 · 5^(n+1) = 13 · 5^n - 2 · 5 · 5^n\n= 5^n · [13 - 10] = 5^n · [3] = 3 · 5^n\n\nDividing Numerator by Denominator:\n= [-5 · 5^n] / [3 · 5^n]\nCanceling non-zero 5^n:\n= -5 / 3.',
        stepMarking: [
          { step: 'Numerator factored to 5^n · (25 - 30) = -5 · 5^n', marks: '1 Mark' },
          { step: 'Denominator factored to 5^n · (13 - 10) = 3 · 5^n', marks: '1 Mark' },
          { step: 'Canceling 5^n to obtain final fraction -5/3', marks: '1 Mark' }
        ],
        examinerTip: 'Never substitute random numbers for n unless checking; perform formal algebraic factoring of 5^n.',
        commonPitfall: 'Incorrect exponent subtraction like 5^(n+2) - 5^(n+1) = 5¹.'
      },
      {
        id: 'c9-m24-s2-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Number Systems: Reciprocal Radical Sums',
        questionText: 'If x = 7 + 4√3 and xy = 1, then find the value of 1/x² + 1/y².',
        modelAnswer: 'Given: xy = 1 ⇒ y = 1/x and x = 1/y.\nTherefore: 1/x² + 1/y² = y² + x² = x² + y².\n\nNow find y:\ny = 1 / (7 + 4√3)\nMultiplying by conjugate (7 - 4√3):\ny = (7 - 4√3) / [7² - (4√3)²] = (7 - 4√3) / (49 - 48) = 7 - 4√3.\n\nCompute (x + y):\nx + y = (7 + 4√3) + (7 - 4√3) = 14.\n\nUsing identity x² + y² = (x + y)² - 2xy:\nx² + y² = (14)² - 2(1)\n= 196 - 2 = 194.\n\nThus, 1/x² + 1/y² = 194.',
        stepMarking: [
          { step: 'Recognizing 1/x² + 1/y² = x² + y² since xy = 1', marks: '1 Mark' },
          { step: 'Finding y = 7 - 4√3 and x + y = 14', marks: '1 Mark' },
          { step: 'Evaluating (14)² - 2 = 194', marks: '1 Mark' }
        ],
        examinerTip: 'Using (x + y)² - 2xy is much faster and less prone to calculation errors than computing individual squares (7+4√3)² + (7-4√3)², though both methods are valid.',
        commonPitfall: 'Leaving the answer as x² + y² without numerical evaluation.'
      },
      {
        id: 'c9-m24-s2-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Polynomials: Statement & Proof of Factor Theorem',
        questionText: 'State the Factor Theorem and use it to show that (x - 2) is a factor of p(x) = x³ - 2x² - 9x + 18.',
        modelAnswer: '1. Statement of Factor Theorem:\n   If p(x) is a polynomial of degree n ≥ 1 and a is any real number, then:\n   (i) (x - a) is a factor of p(x), if p(a) = 0.\n   (ii) Conversely, if (x - a) is a factor of p(x), then p(a) = 0.\n\n2. Verification for p(x) = x³ - 2x² - 9x + 18:\n   To verify if (x - 2) is a factor, evaluate p(2):\n   p(2) = (2)³ - 2(2)² - 9(2) + 18\n   = 8 - 2(4) - 18 + 18\n   = 8 - 8 - 18 + 18\n   = 0.\n\nSince p(2) = 0, by the Factor Theorem, (x - 2) is strictly a factor of p(x).',
        stepMarking: [
          { step: 'Formal statement of Factor Theorem (both parts)', marks: '1 Mark' },
          { step: 'Substituting x = 2 into p(x)', marks: '1 Mark' },
          { step: 'Arriving at p(2) = 0 and writing conclusion', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure both condition and converse are stated in the theorem.',
        commonPitfall: 'Using long division instead of evaluating p(2) when Factor Theorem is explicitly requested.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q32 to Q35 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-m24-s2-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Polynomials: Higher Degree Reciprocal Powers',
        questionText: '(a) If x + 1/x = 2, then find the value of x⁶ + 1/x⁶. (2.5 Marks)\n(b) If x⁴ + 1/x⁴ = 194, find the value of x³ + 1/x³. (2.5 Marks)',
        modelAnswer: 'Part (a):\nGiven: x + 1/x = 2\nSquaring both sides:\n(x + 1/x)² = 2²\nx² + 2 + 1/x² = 4 ⇒ x² + 1/x² = 2\n\nNow cubing (x² + 1/x²):\n(x² + 1/x²)³ = 2³\n(x²)³ + (1/x²)³ + 3(x²)(1/x²)(x² + 1/x²) = 8\nx⁶ + 1/x⁶ + 3(1)(2) = 8\nx⁶ + 1/x⁶ + 6 = 8 ⇒ x⁶ + 1/x⁶ = 2.\n\nPart (b):\nGiven: x⁴ + 1/x⁴ = 194\nAdd 2 to both sides:\nx⁴ + 2 + 1/x⁴ = 194 + 2 = 196\n(x² + 1/x²)² = 196 = (14)²\nTaking positive square root (since x² + 1/x² > 0):\nx² + 1/x² = 14\n\nNow add 2 again:\nx² + 2 + 1/x² = 14 + 2 = 16\n(x + 1/x)² = 16 = 4² ⇒ x + 1/x = 4  (for x > 0)\n\nNow evaluate x³ + 1/x³:\n(x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x)\n4³ = x³ + 1/x³ + 3(4)\n64 = x³ + 1/x³ + 12\n⇒ x³ + 1/x³ = 64 - 12 = 52.',
        stepMarking: [
          { step: 'Part (a): Squaring to get x² + 1/x² = 2 and cubing to get x⁶ + 1/x⁶ = 2', marks: '2.5 Marks' },
          { step: 'Part (b): Step 1: x² + 1/x² = 14', marks: '1 Mark' },
          { step: 'Part (b): Step 2: x + 1/x = 4', marks: '0.5 Mark' },
          { step: 'Part (b): Step 3: x³ + 1/x³ = 52', marks: '1 Mark' }
        ],
        examinerTip: 'For Part (a), notice that x + 1/x = 2 implies (x - 1)² = 0 ⇒ x = 1, so 1⁶ + 1/1⁶ = 2. But showing algebraic steps is essential for full marks.',
        commonPitfall: 'Taking negative square root -14 for x² + 1/x² (sum of two squares cannot be negative).'
      },
      {
        id: 'c9-m24-s2-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Polynomials: Algebraic Identity Proof',
        questionText: 'Prove that: (a + b + c)³ - a³ - b³ - c³ = 3(a + b)(b + c)(c + a). [NCERT Exemplar]',
        modelAnswer: 'LHS = (a + b + c)³ - a³ - b³ - c³\nGroup terms:\n= [(a + b + c)³ - a³] - (b³ + c³)\n\nApply identity x³ - y³ = (x - y)(x² + xy + y²) on the first bracket:\nHere x = (a + b + c) and y = a.\n(x - y) = (a + b + c - a) = (b + c)\nx² + xy + y² = (a + b + c)² + a(a + b + c) + a²\n= (a² + b² + c² + 2ab + 2bc + 2ca) + (a² + ab + ca) + a²\n= 3a² + b² + c² + 3ab + 2bc + 3ca\n\nSo first term = (b + c)(3a² + b² + c² + 3ab + 2bc + 3ca)\n\nNow apply identity b³ + c³ = (b + c)(b² - bc + c²) on the second term.\n\nFactor out common (b + c):\nLHS = (b + c) [ (3a² + b² + c² + 3ab + 2bc + 3ca) - (b² - bc + c²) ]\n= (b + c) [ 3a² + b² - b² + c² - c² + 3ab + 2bc + bc + 3ca ]\n= (b + c) [ 3a² + 3ab + 3bc + 3ca ]\n= 3(b + c) [ a² + ab + bc + ca ]\n= 3(b + c) [ a(a + b) + c(a + b) ]\n= 3(b + c)(a + b)(a + c)\n= 3(a + b)(b + c)(c + a) = RHS.\nHence Proved.',
        stepMarking: [
          { step: 'Grouping [(a + b + c)³ - a³] - (b³ + c³)', marks: '1 Mark' },
          { step: 'Applying x³ - y³ identity correctly on first group', marks: '1.5 Marks' },
          { step: 'Factoring out (b + c) from both groups', marks: '1 Mark' },
          { step: 'Factoring remaining bracket 3(a² + ab + bc + ca) = 3(a+b)(c+a)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Carefully expand (a + b + c)² and avoid sign errors when subtracting (b² - bc + c²).',
        commonPitfall: 'Expanding (a + b + c)³ directly without grouping, leading to a tangled mess of 27 terms.'
      },
      {
        id: 'c9-m24-s2-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Polynomials: Polynomial Long Division & Remainder',
        questionText: 'What must be subtracted from x⁴ + 2x³ - 2x² + 4x + 6 so that the result is exactly divisible by x² + 2x - 3?',
        modelAnswer: 'Let p(x) = x⁴ + 2x³ - 2x² + 4x + 6 and divisor d(x) = x² + 2x - 3.\n\nPerform polynomial long division:\n           x² + 1\n          ────────────────────────────\nx² + 2x - 3 ) x⁴ + 2x³ - 2x² + 4x + 6\n           -(x⁴ + 2x³ - 3x²)\n          ────────────────────────────\n                       x² + 4x + 6\n                     -(x² + 2x - 3)\n          ────────────────────────────\n                            2x + 9\n\nDivision Algorithm:\np(x) = (x² + 2x - 3)(x² + 1) + (2x + 9)\n\nTo make p(x) exactly divisible by d(x), the remainder must be eliminated.\nTherefore, the polynomial that must be subtracted is the remainder itself:\nRemainder = 2x + 9.',
        stepMarking: [
          { step: 'First division step giving x² in quotient and bringing down x² + 4x + 6', marks: '2 Marks' },
          { step: 'Second division step giving +1 in quotient and remainder 2x + 9', marks: '2 Marks' },
          { step: 'Conclusion stating (2x + 9) must be subtracted', marks: '1 Mark' }
        ],
        examinerTip: 'If the question asked "what must be ADDED", the answer would be -(2x + 9) = -2x - 9. But for "SUBTRACTED", the answer is + (2x + 9).',
        commonPitfall: 'Changing the sign to -2x - 9 when the question asks what must be subtracted.'
      },
      {
        id: 'c9-m24-s2-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Statistics: Double Frequency Polygon Construction',
        questionText: 'The following table gives the distribution of marks scored by students of Section A and Section B:\n\nMarks Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nSection A Freq:   3  |   9   |  17   |  12   |   9\nSection B Freq:   5  |  19   |  15   |  10   |   1\n\n(i) Compute the class marks (mid-values) for all class intervals. (1 Mark)\n(ii) List the plotting coordinate points (Class Mark, Frequency) for both Section A and Section B. (2 Marks)\n(iii) From the graphical data, compare the overall performance of Section A versus Section B. (2 Marks)',
        modelAnswer: '(i) Class Marks (Mid-values x_i = (Upper + Lower)/2):\n    • 0 - 10   : (0 + 10)/2 = 5\n    • 10 - 20  : (10 + 20)/2 = 15\n    • 20 - 30  : (20 + 30)/2 = 25\n    • 30 - 40  : (30 + 40)/2 = 35\n    • 40 - 50  : (40 + 50)/2 = 45\n\n(ii) Plotting Coordinate Points (x_i, f_i):\n     • Section A: (5, 3), (15, 9), (25, 17), (35, 12), (45, 9)\n       (Extended to base zero-frequency at (-5, 0) and (55, 0))\n     • Section B: (5, 5), (15, 19), (25, 15), (30, 10), (45, 1)\n       (Extended to base zero-frequency at (-5, 0) and (55, 0))\n\n(iii) Performance Comparison Analysis:\n      • Section B has a higher concentration of students in lower mark brackets: 24 students (5 + 19) scored between 0 and 20 marks, compared to only 12 students (3 + 9) in Section A.\n      • Section A has significantly superior performance in higher mark brackets: 21 students (12 + 9) scored 30 or above, whereas only 11 students (10 + 1) in Section B did so.\n      • Conclusion: Section A demonstrated substantially better overall academic performance than Section B.',
        stepMarking: [
          { step: 'Table of class marks 5, 15, 25, 35, 45 computed correctly', marks: '1 Mark' },
          { step: 'Correct coordinates listed for both Section A and B', marks: '2 Marks' },
          { step: 'Analytical performance comparison highlighting higher mark bracket dominance of Section A', marks: '2 Marks' }
        ],
        examinerTip: 'Frequency polygons must always be closed by joining to the class mark of the preceding and succeeding imaginary classes with frequency 0.',
        commonPitfall: 'Comparing only highest peak rather than total distribution across 30+ marks.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE-BASED QUESTIONS (Q36 to Q38 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-m24-s2-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Real Number Systems in Irrigation Engineering',
        questionText: 'Read the context and answer the questions that follow:\n\nIn an agricultural project at Village Palampur, an engineer is designing a solar-powered drip irrigation pipeline. The intake pipe diameter in meters is given by the radical expression d = 1 / (√5 - 2). During test runs, water pressure is monitored over two sections: Section A has flow coefficient (20)^0.5 × (5)^0.5, while Section B has flow coefficient √18 / √2.\n\nQuestions:\n36.1 Rationalise the denominator of d = 1 / (√5 - 2) to express diameter in simple radical form. (1 Mark)\n36.2 Evaluate the exact numerical value of Section A\'s flow coefficient: (20)^0.5 × (5)^0.5. (1 Mark)\n36.3 Find Section B\'s flow coefficient: √18 / √2 and state whether it is a rational or irrational number. (2 Marks)',
        modelAnswer: '36.1 Rationalisation:\n     d = 1 / (√5 - 2) = (√5 + 2) / [(√5 - 2)(√5 + 2)] = (√5 + 2) / [(√5)² - 2²]\n     = (√5 + 2) / (5 - 4) = √5 + 2 meters.\n\n36.2 Section A:\n     (20)^0.5 × (5)^0.5 = √20 × √5 = √(20 × 5) = √100 = 10.\n\n36.3 Section B:\n     √18 / √2 = √(18 / 2) = √9 = 3.\n     Since 3 can be expressed as 3/1 (where 3, 1 ∈ Z and 1 ≠ 0), it is a RATIONAL number.',
        stepMarking: [
          { step: '36.1: d = √5 + 2 correctly rationalised', marks: '1 Mark' },
          { step: '36.2: √100 = 10 computed accurately', marks: '1 Mark' },
          { step: '36.3: √9 = 3 evaluated (1 Mark) + classified as Rational (1 Mark)', marks: '2 Marks' }
        ],
        examinerTip: 'Whenever radicals can be combined under a single root: √a × √b = √(ab) and √a / √b = √(a/b).',
        commonPitfall: 'Writing √18 / √2 = √16.'
      },
      {
        id: 'c9-m24-s2-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Mensuration & Heron\'s Formula in Eco-Park Architecture',
        questionText: 'Read the context and answer the questions that follow:\n\nA town municipal corporation allocates a triangular plot of land inside an Eco-Park for a botanical herbarium. The three boundary sides of this triangular herbarium measure a = 50 m, b = 65 m, and c = 65 m. A perimeter hedge is planted around it, leaving a 5 m wide gate opening for visitor entrance.\n\nQuestions:\n37.1 What is the semi-perimeter (s) of the triangular plot? (1 Mark)\n37.2 Calculate the total cost of fencing the plot with barbed wire at the rate of ₹25 per meter, leaving a 5 m space for the entrance gate. (1 Mark)\n37.3 Using Heron\'s formula, calculate the exact area of the triangular herbarium. (2 Marks)',
        modelAnswer: '37.1 Semi-perimeter:\n     s = (a + b + c) / 2 = (50 + 65 + 65) / 2 = 180 / 2 = 90 m.\n\n37.2 Fencing Length and Cost:\n     Perimeter = 50 + 65 + 65 = 180 m.\n     Length to be fenced = Total Perimeter - Gate width = 180 - 5 = 175 m.\n     Cost of fencing = 175 m × ₹25/m = ₹4,375.\n\n37.3 Area by Heron\'s Formula:\n     s = 90 m\n     s - a = 90 - 50 = 40 m\n     s - b = 90 - 65 = 25 m\n     s - c = 90 - 65 = 25 m\n     Area = √[s(s - a)(s - b)(s - c)]\n     = √[90 × 40 × 25 × 25]\n     = √[(9 × 10) × (4 × 10) × (25)²]\n     = √[9 × 4 × 100 × 625]\n     = 3 × 2 × 10 × 25 = 60 × 25 = 1,500 m².',
        stepMarking: [
          { step: '37.1: s = 90 m computed correctly', marks: '1 Mark' },
          { step: '37.2: Fencing length 175 m and cost ₹4375', marks: '1 Mark' },
          { step: '37.3: Heron formula substitution and evaluation to get 1500 m²', marks: '2 Marks' }
        ],
        examinerTip: 'Do not multiply large numbers directly inside square root; pair common factors: √(25 × 25) = 25, √(9 × 4) = 6, √(10 × 10) = 10.',
        commonPitfall: 'Failing to subtract the 5 m gate opening from the perimeter.'
      },
      {
        id: 'c9-m24-s2-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Statistics & Histogram Analysis of Factory Wages',
        questionText: 'Read the context and answer the questions that follow:\n\nA manufacturing factory conducts an internal wage audit of 145 daily-wage technical workers. The recorded weekly wage distribution is represented as:\n\nWage Range (₹) | Number of Workers\n150 - 200      | 50\n200 - 250      | 30\n250 - 300      | 35\n300 - 350      | 20\n350 - 400      | 10\n\nQuestions:\n38.1 What is the class size of the wage intervals? (1 Mark)\n38.2 Which wage interval contains the maximum frequency (modal class)? (1 Mark)\n38.3 How many workers earn ₹250 or more per day, and what percentage of the total workforce does this group represent? (2 Marks)',
        modelAnswer: '38.1 Class Size:\n     Class Size = Upper Limit - Lower Limit = 200 - 150 = ₹50.\n\n38.2 Modal Class:\n     The wage interval with the maximum frequency (50 workers) is 150 - 200.\n\n38.3 Workers earning ₹250 or more:\n     Include classes 250 - 300, 300 - 350, and 350 - 400:\n     Number of workers = 35 + 20 + 10 = 65 workers.\n\n     Total workers = 50 + 30 + 35 + 20 + 10 = 145 workers.\n     Percentage = (65 / 145) × 100% = (13 / 29) × 100% ≈ 44.83%.',
        stepMarking: [
          { step: '38.1: Class size = 50 identified', marks: '1 Mark' },
          { step: '38.2: Interval 150 - 200 identified', marks: '1 Mark' },
          { step: '38.3: 65 workers identified (1 Mark) + 44.83% calculated (1 Mark)', marks: '2 Marks' }
        ],
        examinerTip: 'In continuous class intervals a - b and b - c, the boundary value b is included in the next interval b - c (i.e. ₹250 is counted in 250 - 300).',
        commonPitfall: 'Omitting workers in 350 - 400.'
      }
    ]
  }
];
