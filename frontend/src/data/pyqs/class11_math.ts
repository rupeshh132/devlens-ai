import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_11_MATH_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. KVS CENTRALIZED ANNUAL EXAM 2024: CLASS 11 MATHEMATICS (COMPLETE - 38 Qs)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kvs-c11-math-2024-annual',
    title: 'KVS Centralized Annual Examination 2024: Class 11 Mathematics (Uniform Paper)',
    subject: 'Mathematics',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'KVS/RO/MAT/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: true,
    totalQuestions: 38,
    generalInstructions: [
      'This question paper contains 38 questions divided into 5 sections: Section A to Section E.',
      'Section A comprises 20 Multiple Choice Questions (MCQs) of 1 mark each (Q1 to Q18 are MCQs and Q19 & Q20 are Assertion-Reason).',
      'Section B comprises 5 Short Answer Type-I (SA-I) questions of 2 marks each (Q21 to Q25).',
      'Section C comprises 6 Short Answer Type-II (SA-II) questions of 3 marks each (Q26 to Q31).',
      'Section D comprises 4 Long Answer (LA) questions of 5 marks each (Q32 to Q35).',
      'Section E comprises 3 Case-Based integrated units of assessment of 4 marks each with sub-parts (Q36 to Q38).',
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-math-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Sets: Subsets and Power Set',
        questionText: 'If a set A has n elements, then the number of non-empty proper subsets of A is:',
        options: [
          'A) 2ⁿ',
          'B) 2ⁿ - 1',
          'C) 2ⁿ - 2',
          'D) 2ⁿ⁻¹'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 2ⁿ - 2.\nTotal number of subsets of a set with n elements is 2ⁿ.\nTotal number of proper subsets = 2ⁿ - 1 (excluding the set itself).\nTotal number of non-empty proper subsets = 2ⁿ - 2 (excluding both the set itself and the empty set ∅).',
        stepMarking: [
          { step: 'Deduction: Total 2ⁿ, minus set itself and minus empty set = 2ⁿ - 2 (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Both "non-empty" (excludes ∅) and "proper" (excludes set A) subtract 1 each from 2ⁿ.',
        commonPitfall: 'Choosing 2ⁿ - 1 by forgetting the non-empty condition.'
      },
      {
        id: 'c11-math-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Relations and Functions: Domain of Real Function',
        questionText: 'The domain of the real-valued function f(x) = √(9 - x²) is:',
        options: [
          'A) (-3, 3)',
          'B) [-3, 3]',
          'C) (-∞, -3] ∪ [3, ∞)',
          'D) [0, 3]'
        ],
        correctOption: 'B',
        modelAnswer: 'B) [-3, 3].\nFor f(x) to be real-valued, the expression under the square root must be non-negative:\n9 - x² ≥ 0\nx² ≤ 9 ⇒ -3 ≤ x ≤ 3.\nTherefore, the domain is the closed interval [-3, 3].',
        stepMarking: [
          { step: 'Condition 9 - x² ≥ 0 ⇒ x² ≤ 9 ⇒ x ∈ [-3, 3] (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Include the boundary values -3 and 3 (closed interval) because √0 = 0 is a valid real number.',
        commonPitfall: 'Selecting the open interval (-3, 3).'
      },
      {
        id: 'c11-math-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Trigonometric Functions: Value of sin 75°',
        questionText: 'The exact value of sin 75° is:',
        options: [
          'A) (√6 + √2) / 4',
          'B) (√6 - √2) / 4',
          'C) (√3 + 1) / (2√2)',
          'D) Both A and C'
        ],
        correctOption: 'D',
        modelAnswer: 'D) Both A and C.\nsin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°\n= (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1) / (2√2).\nMultiplying numerator and denominator by √2:\n= (√6 + √2) / 4.\nBoth expressions (A) and (C) are mathematically identical.',
        stepMarking: [
          { step: 'Using sin(A+B) formula and showing (√6 + √2)/4 = (√3 + 1)/(2√2) (Option D)', marks: '1 Mark' }
        ],
        examinerTip: 'sin 75° = cos 15° = (√6 + √2)/4. cos 75° = sin 15° = (√6 - √2)/4.',
        commonPitfall: 'Choosing A or C alone without noticing both are equivalent.'
      },
      {
        id: 'c11-math-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Complex Numbers: Modulus of Complex Number',
        questionText: 'The modulus of the complex number z = (1 + i) / (1 - i) is:',
        options: [
          'A) 1',
          'B) 2',
          'C) √2',
          'D) 1/2'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 1.\nMethod 1: Using property |z₁ / z₂| = |z₁| / |z₂|:\n|1 + i| = √(1² + 1²) = √2.\n|1 - i| = √(1² + (-1)²) = √2.\n|z| = √2 / √2 = 1.\n\nMethod 2: Rationalizing:\n(1 + i)/(1 - i) = (1 + i)² / (1² - i²) = (1 + 2i - 1) / (1 + 1) = 2i / 2 = i.\n|i| = 1.',
        stepMarking: [
          { step: '|z₁/z₂| = |z₁|/|z₂| = √2/√2 = 1 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Modulus of a quotient is always the quotient of the moduli.',
        commonPitfall: 'Complex simplification arithmetic error.'
      },
      {
        id: 'c11-math-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Linear Inequalities: Solution in Integers',
        questionText: 'The solution set of the linear inequality 3x + 8 > 2 when x is an integer is:',
        options: [
          'A) {-1, 0, 1, 2, ...}',
          'B) {-2, -1, 0, 1, ...}',
          'C) {..., -4, -3, -2}',
          'D) (-2, ∞)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) {-1, 0, 1, 2, ...}.\nGiven inequality:\n3x + 8 > 2\n3x > 2 - 8\n3x > -6\nx > -6 / 3 ⇒ x > -2.\nSince x must be an integer, the integers strictly greater than -2 are {-1, 0, 1, 2, 3, ...}.',
        stepMarking: [
          { step: '3x > -6 ⇒ x > -2 and taking integers {-1, 0, 1, 2, ...} (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the strict inequality (x > -2). It does NOT include -2.',
        commonPitfall: 'Including -2 in the integer set (Option B).'
      },
      {
        id: 'c11-math-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Permutations & Combinations: nCr Equality',
        questionText: 'If ⁿC₉ = ⁿC₈, then the value of ⁿC₁₇ is:',
        options: [
          'A) 17',
          'B) 1',
          'C) 0',
          'D) ⁿC₁'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 1.\nProperty: If ⁿC_x = ⁿC_y, then either x = y or x + y = n.\nHere x = 9, y = 8 (x ≠ y), so:\nn = 9 + 8 = 17.\nNow, ⁿC₁₇ = ¹⁷C₁₇ = 1.',
        stepMarking: [
          { step: 'n = 9 + 8 = 17 and ¹⁷C₁₇ = 1 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'ⁿCₙ = ⁿC₀ = 1 always.',
        commonPitfall: 'Choosing 17 instead of 1.'
      },
      {
        id: 'c11-math-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Binomial Theorem: Total Number of Terms',
        questionText: 'The total number of terms in the expansion of (x + a)¹⁰ + (x - a)¹⁰ after simplification is:',
        options: [
          'A) 11',
          'B) 10',
          'C) 6',
          'D) 5'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 6.\nFor (x + a)ⁿ + (x - a)ⁿ, when n is even (n = 10):\nThe odd-powered terms cancel out, leaving only the even terms.\nTotal terms remaining = (n / 2) + 1 = (10 / 2) + 1 = 5 + 1 = 6 terms.',
        stepMarking: [
          { step: 'Formula for even n: (n/2) + 1 = 5 + 1 = 6 terms (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'If it were (x + a)ⁿ - (x - a)ⁿ with n even, the number of terms would be n/2 = 5.',
        commonPitfall: 'Writing 11 (the number of terms in a single expansion).'
      },
      {
        id: 'c11-math-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Sequences & Series: Geometric Progression Sum to Infinity',
        questionText: 'The sum to infinity of the GP: 1, 1/3, 1/9, 1/27, ... is:',
        options: [
          'A) 3/2',
          'B) 2/3',
          'C) 3',
          'D) 4/3'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 3/2.\nFirst term a = 1.\nCommon ratio r = (1/3) / 1 = 1/3.\nSince |r| = 1/3 < 1, the sum to infinity exists:\nS_∞ = a / (1 - r) = 1 / (1 - 1/3) = 1 / (2/3) = 3/2.',
        stepMarking: [
          { step: 'S_∞ = a / (1 - r) = 1 / (2/3) = 3/2 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Sum to infinity is valid only when |r| < 1.',
        commonPitfall: 'Inverting to 2/3.'
      },
      {
        id: 'c11-math-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Straight Lines: Distance Between Parallel Lines',
        questionText: 'The distance between the parallel lines 3x + 4y - 9 = 0 and 6x + 8y + 15 = 0 is:',
        options: [
          'A) 33 / 10',
          'B) 24 / 5',
          'C) 33 / 5',
          'D) 6 / 5'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 33 / 10.\nFirst, make coefficients of x and y identical.\nDivide second equation by 2: 3x + 4y + 15/2 = 0.\nHere A = 3, B = 4, C₁ = -9, C₂ = 15/2.\nDistance d = | C₁ - C₂ | / √(A² + B²)\n= | -9 - 15/2 | / √(3² + 4²)\n= | -33/2 | / √25 = (33/2) / 5 = 33 / 10.',
        stepMarking: [
          { step: 'Aligning equations to 3x + 4y + 15/2 = 0', marks: '0.5 Mark' },
          { step: 'Distance = | -9 - 7.5 | / 5 = 16.5 / 5 = 33 / 10 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Always ensure A and B are identical in both equations before applying |C₁ - C₂| / √(A² + B²).',
        commonPitfall: 'Applying the formula directly with C₁ = -9 and C₂ = 15 without equating coefficients.'
      },
      {
        id: 'c11-math-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Conic Sections: Eccentricity of Parabola',
        questionText: 'The eccentricity (e) of a parabola is always equal to:',
        options: [
          'A) 0',
          'B) 1',
          'C) Less than 1 (e < 1)',
          'D) Greater than 1 (e > 1)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 1.\nBy geometric definition of a conic section, eccentricity e = SP / PM (ratio of distance from focus S to distance from directrix PM).\n- Circle: e = 0\n- Ellipse: 0 < e < 1\n- Parabola: e = 1\n- Hyperbola: e > 1.',
        stepMarking: [
          { step: 'Parabola has e = 1 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Remember: Circle (0), Ellipse (<1), Parabola (1), Hyperbola (>1).',
        commonPitfall: 'Confusing parabola (e = 1) with ellipse (e < 1).'
      },
      {
        id: 'c11-math-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Introduction to 3D Geometry: Octant Identification',
        questionText: 'The point P(-3, 1, -2) lies in which octant?',
        options: [
          'A) Second octant (II)',
          'B) Third octant (III)',
          'C) Sixth octant (VI)',
          'D) Fifth octant (V)'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Sixth octant (VI).\nSign convention of octants (x, y, z):\n- I: (+, +, +)\n- II: (-, +, +)\n- III: (-, -, +)\n- IV: (+, -, +)\n- V: (+, +, -)\n- VI: (-, +, -)\n- VII: (-, -, -)\n- VIII: (+, -, -)\nSince the coordinates are (-, +, -), the point lies in the VI (Sixth) octant.',
        stepMarking: [
          { step: 'Sign pattern (-, +, -) corresponds to Octant VI (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Octants I to IV have z positive; Octants V to VIII have z negative.',
        commonPitfall: 'Confusing Octant II (-, +, +) with Octant VI (-, +, -).'
      },
      {
        id: 'c11-math-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Limits & Derivatives: Standard Trigonometric Limit',
        questionText: 'The value of lim_{x→0} [ sin(5x) / sin(3x) ] is:',
        options: [
          'A) 1',
          'B) 5/3',
          'C) 3/5',
          'D) 0'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 5/3.\nRewrite the limit:\nlim_{x→0} [ (sin 5x / 5x) · 5x ] / [ (sin 3x / 3x) · 3x ]\n= (5/3) · [ lim_{x→0} (sin 5x / 5x) ] / [ lim_{x→0} (sin 3x / 3x) ]\nSince lim_{θ→0} (sin θ / θ) = 1:\n= (5/3) · (1 / 1) = 5/3.',
        stepMarking: [
          { step: 'Dividing by 5x and 3x using lim (sin θ/θ) = 1 to get 5/3 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Direct rule: lim_{x→0} [ sin(ax) / sin(bx) ] = a/b.',
        commonPitfall: 'Inverting the answer to 3/5.'
      },
      {
        id: 'c11-math-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Variance and Standard Deviation',
        questionText: 'If the variance of a set of 20 observations is 16, what is its standard deviation?',
        options: [
          'A) 4',
          'B) 256',
          'C) 8',
          'D) 320'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 4.\nStandard deviation (σ) is defined as the positive square root of variance:\nσ = √(Variance) = √16 = 4.',
        stepMarking: [
          { step: 'σ = √16 = 4 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Standard deviation is always non-negative.',
        commonPitfall: 'Squaring variance to get 256.'
      },
      {
        id: 'c11-math-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Probability: Mutually Exclusive Events',
        questionText: 'If A and B are mutually exclusive events such that P(A) = 0.35 and P(B) = 0.45, then P(A ∪ B) is:',
        options: [
          'A) 0.80',
          'B) 0.1575',
          'C) 0.10',
          'D) 0.70'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 0.80.\nFor mutually exclusive events, they cannot happen simultaneously, so P(A ∩ B) = 0.\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.35 + 0.45 - 0 = 0.80.',
        stepMarking: [
          { step: 'P(A ∩ B) = 0 ⇒ P(A ∪ B) = 0.35 + 0.45 = 0.80 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Do not subtract P(A)P(B) unless the events are independent!',
        commonPitfall: 'Multiplying 0.35 × 0.45 and subtracting it.'
      },
      {
        id: 'c11-math-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Relations & Functions: Range of Signum Function',
        questionText: 'The range of the signum function f(x) = { 1 if x > 0; 0 if x = 0; -1 if x < 0 } is:',
        options: [
          'A) R (All real numbers)',
          'B) [-1, 1]',
          'C) {-1, 0, 1}',
          'D) [0, 1]'
        ],
        correctOption: 'C',
        modelAnswer: 'C) {-1, 0, 1}.\nThe signum function assumes only three discrete outputs: -1, 0, and +1 depending on the sign of the input. Thus, the range is the finite set {-1, 0, 1}.',
        stepMarking: [
          { step: 'Range is the set {-1, 0, 1} (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Curly braces {-1, 0, 1} represent a discrete set, whereas square brackets [-1, 1] represent a continuous interval.',
        commonPitfall: 'Selecting the continuous interval [-1, 1].'
      },
      {
        id: 'c11-math-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Conic Sections: Length of Latus Rectum of Parabola',
        questionText: 'The length of the latus rectum of the parabola y² = -12x is:',
        options: [
          'A) 12 units',
          'B) -12 units',
          'C) 3 units',
          'D) 6 units'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 12 units.\nStandard form: y² = -4ax.\nComparing with y² = -12x:\n4a = 12 ⇒ a = 3.\nThe length of the latus rectum is 4a = 12 units (length is always a positive geometric distance).',
        stepMarking: [
          { step: 'Length of latus rectum = 4a = 12 units (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Length is a distance and can never be negative.',
        commonPitfall: 'Selecting -12 units.'
      },
      {
        id: 'c11-math-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Trigonometric Functions: Range of Cosine',
        questionText: 'The maximum and minimum values of 3 sin x + 4 cos x are:',
        options: [
          'A) 7 and -7',
          'B) 5 and -5',
          'C) 1 and -1',
          'D) 25 and -25'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 5 and -5.\nFor an expression of the form a sin x + b cos x, the range is:\n[ -√(a² + b²) , +√(a² + b²) ].\nHere a = 3, b = 4:\n√(3² + 4²) = √(9 + 16) = √25 = 5.\nMaximum value = +5, Minimum value = -5.',
        stepMarking: [
          { step: 'Range is ±√(3² + 4²) = ±5 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Pythagorean triplet (3, 4, 5).',
        commonPitfall: 'Adding coefficients directly as 3 + 4 = 7.'
      },
      {
        id: 'c11-math-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Sequences and Series: AM and GM Inequality',
        questionText: 'For two distinct positive real numbers a and b, the relationship between their Arithmetic Mean (AM) and Geometric Mean (GM) is:',
        options: [
          'A) AM > GM',
          'B) AM < GM',
          'C) AM = GM',
          'D) AM · GM = 1'
        ],
        correctOption: 'A',
        modelAnswer: 'A) AM > GM.\nAM = (a + b)/2 and GM = √(ab).\nAM - GM = (a + b)/2 - √(ab) = (a + b - 2√(ab))/2 = (√a - √b)² / 2.\nSince a and b are distinct positive numbers (a ≠ b), (√a - √b)² > 0.\nTherefore, AM - GM > 0 ⇒ AM > GM.',
        stepMarking: [
          { step: 'AM - GM = (√a - √b)² / 2 > 0 ⇒ AM > GM (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'AM = GM only when the two numbers are identical (a = b). For distinct numbers, AM > GM strictly.',
        commonPitfall: 'Selecting AM ≥ GM when the question specifies "distinct" numbers.'
      },
      {
        id: 'c11-math-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Factorial Values',
        questionText: 'Assertion (A): The value of 0! is equal to 1.\nReason (R): By definition of permutation, ⁿPₙ = n! / (n - n)! = n! / 0! = n!, which requires 0! = 1.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nBy definition, arranging n distinct objects in n positions is ⁿPₙ = n!. Using the formula ⁿP_r = n! / (n - r)! with r = n gives ⁿPₙ = n! / (n - n)! = n! / 0!. For this formula to remain mathematically consistent with ⁿPₙ = n!, we must define 0! = 1. Reason R is the correct mathematical justification.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Also, n! = n × (n - 1)!. For n = 1: 1! = 1 × 0! ⇒ 0! = 1.',
        commonPitfall: 'Assuming 0! = 0.'
      },
      {
        id: 'c11-math-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Slope of Perpendicular Lines',
        questionText: 'Assertion (A): Two non-vertical lines with slopes m₁ and m₂ are perpendicular if and only if m₁ · m₂ = -1.\nReason (R): If two lines are perpendicular, the angle between them is θ = 90° and tan 90° is undefined.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nFrom the angle between two lines formula: tan θ = | (m₂ - m₁) / (1 + m₁ m₂) |.\nWhen lines are perpendicular, θ = 90° (tan 90° → ∞), which requires the denominator to be zero: 1 + m₁ m₂ = 0 ⇒ m₁ m₂ = -1. Hence Reason (R) correctly explains Assertion (A).',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Condition holds for non-vertical lines (where slopes exist).',
        commonPitfall: 'Marking Option B without connecting the denominator zero condition with tan 90°.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q21 to Q25 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-math-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Sets: De Morgan\'s Law Verification',
        questionText: 'Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {2, 4, 6, 8}, and B = {2, 3, 5, 7}. Verify De Morgan\'s Law: (A ∪ B)\' = A\' ∩ B\'.',
        modelAnswer: '1. LHS Calculation:\nA ∪ B = {2, 3, 4, 5, 6, 7, 8}\n(A ∪ B)\' = U - (A ∪ B) = {1, 9}.\n\n2. RHS Calculation:\nA\' = U - A = {1, 3, 5, 7, 9}\nB\' = U - B = {1, 4, 6, 8, 9}\nA\' ∩ B\' = {1, 9}.\n\nSince LHS = RHS = {1, 9}, De Morgan\'s Law is verified.',
        stepMarking: [
          { step: 'Finding A ∪ B and (A ∪ B)\' = {1, 9}', marks: '1 Mark' },
          { step: 'Finding A\', B\' and their intersection A\' ∩ B\' = {1, 9}', marks: '1 Mark' }
        ],
        examinerTip: 'Show both complements explicitly to earn full step credit.',
        commonPitfall: 'Missing 1 or 9 in universal set complement.'
      },
      {
        id: 'c11-math-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Trigonometric Functions: Proof of Identity',
        questionText: 'Prove that: (cos 4x + cos 3x + cos 2x) / (sin 4x + sin 3x + sin 2x) = cot 3x.',
        modelAnswer: 'Group terms to apply cos C + cos D and sin C + sin D:\nLHS = [ (cos 4x + cos 2x) + cos 3x ] / [ (sin 4x + sin 2x) + sin 3x ]\n\nUsing identities:\ncos C + cos D = 2 cos((C + D)/2) cos((C - D)/2)\nsin C + sin D = 2 sin((C + D)/2) cos((C - D)/2)\n\nNumerator:\n(cos 4x + cos 2x) = 2 cos(3x) cos(x)\nTotal Numerator = 2 cos 3x cos x + cos 3x = cos 3x (2 cos x + 1).\n\nDenominator:\n(sin 4x + sin 2x) = 2 sin(3x) cos(x)\nTotal Denominator = 2 sin 3x cos x + sin 3x = sin 3x (2 cos x + 1).\n\nDividing Numerator by Denominator:\n= [ cos 3x (2 cos x + 1) ] / [ sin 3x (2 cos x + 1) ]\n= cos 3x / sin 3x = cot 3x = RHS.\n\nHence proved.',
        stepMarking: [
          { step: 'Grouping 4x and 2x terms and applying C-D formulas', marks: '1 Mark' },
          { step: 'Factoring (2 cos x + 1) and arriving at cot 3x', marks: '1 Mark' }
        ],
        examinerTip: 'Group terms with angles whose average equals the middle angle: (4x + 2x)/2 = 3x.',
        commonPitfall: 'Trying to group 4x with 3x (produces fractional angles 7x/2).'
      },
      {
        id: 'c11-math-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Complex Numbers: Multiplicative Inverse',
        questionText: 'Find the multiplicative inverse of the complex number z = 4 - 3i.',
        modelAnswer: 'The multiplicative inverse of z is z⁻¹ = 1 / z.\nFormula: z⁻¹ = z̄ / |z|².\n\nHere z = 4 - 3i:\n- Conjugate z̄ = 4 + 3i\n- |z|² = 4² + (-3)² = 16 + 9 = 25.\n\nz⁻¹ = (4 + 3i) / 25 = 4/25 + (3/25) i.',
        stepMarking: [
          { step: 'Formula z⁻¹ = z̄ / |z|² and finding z̄ = 4 + 3i, |z|² = 25', marks: '1 Mark' },
          { step: 'Answer: 4/25 + (3/25)i', marks: '1 Mark' }
        ],
        examinerTip: 'Always express complex answers in standard a + ib form.',
        commonPitfall: 'Sign error: writing 4 - 3i in the numerator.'
      },
      {
        id: 'c11-math-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Straight Lines: Equation of Perpendicular Bisector',
        questionText: 'Find the equation of the line passing through the point (-3, 5) and perpendicular to the line joining the points A(2, 5) and B(-3, 6).',
        modelAnswer: '1. Slope of line AB (m₁):\nm₁ = (y₂ - y₁) / (x₂ - x₁) = (6 - 5) / (-3 - 2) = 1 / (-5) = -1/5.\n\n2. Slope of perpendicular line (m₂):\nSince lines are perpendicular: m₁ · m₂ = -1\n(-1/5) · m₂ = -1 ⇒ m₂ = 5.\n\n3. Equation of required line passing through (-3, 5) with slope m = 5:\nUsing point-slope form: y - y₁ = m (x - x₁)\ny - 5 = 5 (x - (-3))\ny - 5 = 5 (x + 3) = 5x + 15\n5x - y + 20 = 0.',
        stepMarking: [
          { step: 'Slope of AB = -1/5 and perpendicular slope m = 5', marks: '1 Mark' },
          { step: 'Equation y - 5 = 5(x + 3) ⇒ 5x - y + 20 = 0', marks: '1 Mark' }
        ],
        examinerTip: 'Perpendicular slope is the negative reciprocal of the original slope.',
        commonPitfall: 'Using slope -1/5 directly instead of perpendicular slope 5.'
      },
      {
        id: 'c11-math-24-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Introduction to 3D Geometry: Ratio of Division',
        questionText: 'Find the ratio in which the YZ-plane divides the line segment joining the points A(-2, 4, 7) and B(3, -5, 8).',
        modelAnswer: 'Let the YZ-plane divide the line segment AB in the ratio k : 1 at point P.\nAny point on the YZ-plane has its x-coordinate equal to zero: x = 0.\n\nUsing section formula for x-coordinate:\nx = (k · x₂ + 1 · x₁) / (k + 1)\n0 = [ k(3) + 1(-2) ] / (k + 1)\n0 = 3k - 2\n3k = 2 ⇒ k = 2/3.\n\nTherefore, the YZ-plane divides the segment AB internally in the ratio 2 : 3.',
        stepMarking: [
          { step: 'On YZ-plane, x = 0 and section formula setup', marks: '1 Mark' },
          { step: '3k - 2 = 0 ⇒ ratio is 2 : 3 internally', marks: '1 Mark' }
        ],
        examinerTip: 'On YZ-plane: x = 0; on XZ-plane: y = 0; on XY-plane: z = 0.',
        commonPitfall: 'Setting y = 0 or z = 0 instead of x = 0.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER TYPE-II (Q26 to Q31 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-math-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Trigonometric Functions: General Identity Proof',
        questionText: 'Prove that: cos 20° cos 40° cos 60° cos 80° = 1/16.',
        modelAnswer: 'We know cos 60° = 1/2.\nLHS = (1/2) [ cos 20° cos 40° cos 80° ]\n\nMultiply and divide by 2:\n= (1/4) [ (2 cos 40° cos 20°) cos 80° ]\n\nUsing 2 cos A cos B = cos(A + B) + cos(A - B):\n= (1/4) [ (cos 60° + cos 20°) cos 80° ]\nSubstitute cos 60° = 1/2:\n= (1/4) [ (1/2 + cos 20°) cos 80° ]\n= (1/4) [ (1/2) cos 80° + cos 20° cos 80° ]\n\nMultiply and divide by 2 again:\n= (1/8) [ cos 80° + 2 cos 80° cos 20° ]\nUsing 2 cos 80° cos 20° = cos 100° + cos 60°:\n= (1/8) [ cos 80° + cos 100° + 1/2 ]\n\nSince cos 100° = cos(180° - 80°) = -cos 80°:\ncos 80° + cos 100° = cos 80° - cos 80° = 0.\n\nTherefore:\n= (1/8) [ 0 + 1/2 ] = 1/16 = RHS.\n\nHence proved.',
        stepMarking: [
          { step: 'Substituting cos 60° = 1/2 and applying 2 cos A cos B identity', marks: '1 Mark' },
          { step: 'Expanding and obtaining cos 80° + cos 100° + 1/2', marks: '1 Mark' },
          { step: 'Using cos 100° = -cos 80° to arrive at 1/16', marks: '1 Mark' }
        ],
        examinerTip: 'cos(180° - θ) = -cos θ is the crucial cancellation step.',
        commonPitfall: 'Sign error when converting cos 100° to cos 80°.'
      },
      {
        id: 'c11-math-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Permutations & Combinations: Word Formation Restrictions',
        questionText: 'Find the number of different 8-letter permutations that can be formed from the letters of the word "DAUGHTER" such that:\n(a) All vowels occur together\n(b) Vowels never occur together.',
        modelAnswer: 'Word: DAUGHTER\nTotal letters = 8 (all distinct: D, A, U, G, H, T, E, R)\nVowels = 3 (A, U, E)\nConsonants = 5 (D, G, H, T, R)\n\n(a) All vowels occur together:\nTie the 3 vowels (A, U, E) together as a single block: [AUE].\nNow we have 5 consonants + 1 block = 6 units.\nThese 6 units can be arranged in 6! ways.\nThe 3 vowels within their block can be arranged among themselves in 3! ways.\nTotal permutations = 6! × 3! = 720 × 6 = 4,320.\n\n(b) Vowels never occur together:\nTotal permutations of the 8 letters without any restriction = 8! = 40,320.\nPermutations where vowels never occur together:\n= Total permutations - Permutations where all vowels occur together\n= 40,320 - 4,320 = 36,000.',
        stepMarking: [
          { step: '(a) Block method: 6! × 3! = 4,320', marks: '1.5 Marks' },
          { step: '(b) Total - Vowels together = 8! - 4,320 = 40,320 - 4,320 = 36,000', marks: '1.5 Marks' }
        ],
        examinerTip: '8! = 40,320; 6! = 720; 3! = 6.',
        commonPitfall: 'Forgetting to arrange vowels inside the block (omitting 3!).'
      },
      {
        id: 'c11-math-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Binomial Theorem: Middle Term in Expansion',
        questionText: 'Find the middle term in the expansion of (x/3 + 9y)¹⁰.',
        modelAnswer: 'Here n = 10 (an even number).\nTotal number of terms = n + 1 = 11 terms.\nSince total terms is odd, there is exactly ONE middle term:\nMiddle term is the (n/2 + 1)th term = (10/2 + 1)th = 6th term (T₆).\n\nFormula for general term: T_(r+1) = ⁿC_r · aⁿ⁻ʳ · bʳ.\nFor T₆, put r = 5, n = 10, a = x/3, b = 9y:\nT₆ = ¹⁰C₅ · (x/3)¹⁰⁻⁵ · (9y)⁵\n= ¹⁰C₅ · (x/3)⁵ · (9y)⁵\n= ¹⁰C₅ · (x⁵ / 3⁵) · (9⁵ y⁵)\nNotice that 9⁵ = (3²)⁵ = 3¹⁰.\nSo (9⁵ / 3⁵) = 3¹⁰ / 3⁵ = 3⁵ = 243.\n\nCalculation of ¹⁰C₅:\n¹⁰C₅ = (10 × 9 × 8 × 7 × 6) / (5 × 4 × 3 × 2 × 1) = 252.\n\nT₆ = 252 × 243 × x⁵ y⁵ = 61,236 x⁵ y⁵.\n\nTherefore, the middle term is 61,236 x⁵ y⁵.',
        stepMarking: [
          { step: 'Identifying middle term as T₆ (r = 5)', marks: '1 Mark' },
          { step: 'Formula T₆ = ¹⁰C₅ (x/3)⁵ (9y)⁵', marks: '1 Mark' },
          { step: 'Evaluation: 252 × 243 x⁵ y⁵ = 61,236 x⁵ y⁵', marks: '1 Mark' }
        ],
        examinerTip: 'When n is even, there is 1 middle term at (n/2 + 1). When n is odd, there are 2 middle terms.',
        commonPitfall: 'Taking r = 6 instead of r = 5 for the 6th term.'
      },
      {
        id: 'c11-math-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Sequences and Series: Sum of n terms of AP',
        questionText: 'If the sum of n terms of two arithmetic progressions are in the ratio (7n + 1) : (4n + 27), find the ratio of their 11th terms.',
        modelAnswer: 'Let the first AP have first term a₁, common difference d₁, and sum S_n.\nLet the second AP have first term a₂, common difference d₂, and sum S_n\'.\n\nGiven:\nS_n / S_n\' = [ (n/2) [ 2a₁ + (n - 1)d₁ ] ] / [ (n/2) [ 2a₂ + (n - 1)d₂ ] ] = (7n + 1) / (4n + 27)\n[ 2a₁ + (n - 1)d₁ ] / [ 2a₂ + (n - 1)d₂ ] = (7n + 1) / (4n + 27)\nDivide numerator and denominator of LHS by 2:\n[ a₁ + ((n - 1)/2) d₁ ] / [ a₂ + ((n - 1)/2) d₂ ] = (7n + 1) / (4n + 27)    ...(Equation 1)\n\nWe need the ratio of their 11th terms:\nT₁₁ / T₁₁\' = (a₁ + 10 d₁) / (a₂ + 10 d₂).\n\nComparing with LHS of Equation (1):\n(n - 1) / 2 = 10\nn - 1 = 20 ⇒ n = 21.\n\nSubstitute n = 21 into RHS of Equation (1):\nT₁₁ / T₁₁\' = [ 7(21) + 1 ] / [ 4(21) + 27 ]\n= [ 147 + 1 ] / [ 84 + 27 ]\n= 148 / 111.\nDividing numerator and denominator by 37:\n148 / 37 = 4\n111 / 37 = 3.\n\nRatio of their 11th terms = 4 : 3.',
        stepMarking: [
          { step: 'Setting up sum ratio: [a₁ + ((n-1)/2)d₁] / [a₂ + ((n-1)/2)d₂] = (7n+1)/(4n+27)', marks: '1 Mark' },
          { step: 'Equating (n - 1)/2 = 10 ⇒ n = 21', marks: '1 Mark' },
          { step: 'Substitution: 148/111 = 4/3 (Ratio 4 : 3)', marks: '1 Mark' }
        ],
        examinerTip: 'To find the ratio of mth terms, substitute n = 2m - 1 (here 2(11) - 1 = 21).',
        commonPitfall: 'Substituting n = 11 directly instead of n = 21.'
      },
      {
        id: 'c11-math-24-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Conic Sections: Ellipse Standard Form & Properties',
        questionText: 'Find the coordinates of the foci, the vertices, the length of major axis, the length of minor axis, the eccentricity, and the length of latus rectum of the ellipse: 4x² + 9y² = 36.',
        modelAnswer: 'Dividing the equation throughout by 36:\n4x²/36 + 9y²/36 = 1\nx² / 9 + y² / 4 = 1\nx² / 3² + y² / 2² = 1.\nThis is in standard form x²/a² + y²/b² = 1 with a = 3 and b = 2 (a > b, major axis along x-axis).\n\n1. Eccentricity (e):\nc² = a² - b² = 9 - 4 = 5 ⇒ c = √5.\ne = c / a = √5 / 3.\n\n2. Vertices: (±a, 0) = (±3, 0).\n\n3. Foci: (±c, 0) = (±√5, 0).\n\n4. Length of Major Axis = 2a = 2(3) = 6 units.\n\n5. Length of Minor Axis = 2b = 2(2) = 4 units.\n\n6. Length of Latus Rectum = 2b² / a = 2(4) / 3 = 8/3 units.',
        stepMarking: [
          { step: 'Standard form x²/9 + y²/4 = 1 (a = 3, b = 2)', marks: '0.5 Mark' },
          { step: 'Eccentricity e = √5 / 3 and Foci (±√5, 0)', marks: '1 Mark' },
          { step: 'Vertices (±3, 0), Major axis = 6, Minor axis = 4', marks: '1 Mark' },
          { step: 'Length of latus rectum = 8/3 units', marks: '0.5 Mark' }
        ],
        examinerTip: 'c² = a² - b² for ellipse; c² = a² + b² for hyperbola.',
        commonPitfall: 'Confusing 2b²/a with 2a²/b.'
      },
      {
        id: 'c11-math-24-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Limits & Derivatives: Derivative by First Principles',
        questionText: 'Find the derivative of f(x) = sin x from first principles.',
        modelAnswer: 'By definition of derivative from first principles:\nf\'(x) = lim_{h→0} [ f(x + h) - f(x) ] / h\nHere f(x) = sin x, so f(x + h) = sin(x + h).\n\nf\'(x) = lim_{h→0} [ sin(x + h) - sin x ] / h\n\nUsing identity sin C - sin D = 2 cos((C + D)/2) sin((C - D)/2):\nsin(x + h) - sin x = 2 cos( (2x + h)/2 ) sin(h/2)\n= 2 cos(x + h/2) sin(h/2).\n\nSubstitute back into limit:\nf\'(x) = lim_{h→0} [ 2 cos(x + h/2) sin(h/2) ] / h\n= lim_{h→0} [ cos(x + h/2) ] · lim_{h→0} [ sin(h/2) / (h/2) ]\n\nAs h → 0, (h/2) → 0:\nlim_{h→0} cos(x + h/2) = cos x\nlim_{h→0} [ sin(h/2) / (h/2) ] = 1.\n\nTherefore:\nf\'(x) = cos x · 1 = cos x.\n\nHence, d/dx(sin x) = cos x.',
        stepMarking: [
          { step: 'Definition of first principle limit', marks: '1 Mark' },
          { step: 'Applying sin C - sin D formula and splitting limit', marks: '1 Mark' },
          { step: 'Evaluating limits to obtain cos x', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure you write lim (sin(h/2) / (h/2)) = 1 clearly.',
        commonPitfall: 'Missing the factor of 2 in (h/2).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q32 to Q35 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-math-24-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Trigonometric Functions: Product to Sum Identity Proof',
        questionText: 'Prove that: cos² x + cos²(x + π/3) + cos²(x - π/3) = 3/2.',
        modelAnswer: 'We know the identity cos² θ = (1 + cos 2θ) / 2.\n\nApplying this to each term on the LHS:\n1. cos² x = (1 + cos 2x) / 2\n2. cos²(x + π/3) = [ 1 + cos(2x + 2π/3) ] / 2\n3. cos²(x - π/3) = [ 1 + cos(2x - 2π/3) ] / 2\n\nAdding all three terms:\nLHS = 1/2 [ (1 + 1 + 1) + cos 2x + cos(2x + 2π/3) + cos(2x - 2π/3) ]\n= 1/2 [ 3 + cos 2x + { cos(2x + 2π/3) + cos(2x - 2π/3) } ]\n\nUsing identity cos(A + B) + cos(A - B) = 2 cos A cos B:\nHere A = 2x and B = 2π/3:\ncos(2x + 2π/3) + cos(2x - 2π/3) = 2 cos(2x) cos(2π/3).\n\nWe know cos(2π/3) = cos(π - π/3) = -cos(π/3) = -1/2.\nSo:\n2 cos(2x) (-1/2) = -cos 2x.\n\nNow substitute this back:\nLHS = 1/2 [ 3 + cos 2x + (-cos 2x) ]\n= 1/2 [ 3 + 0 ]\n= 3/2 = RHS.\n\nHence proved.',
        stepMarking: [
          { step: 'Converting each cos² θ term into (1 + cos 2θ)/2', marks: '1.5 Marks' },
          { step: 'Grouping cos(2x + 2π/3) + cos(2x - 2π/3) and applying 2 cos A cos B', marks: '1.5 Marks' },
          { step: 'Evaluating cos(2π/3) = -1/2 to cancel cos 2x and get 3/2', marks: '2 Marks' }
        ],
        examinerTip: 'This identity is completely independent of x, always yielding the constant 3/2.',
        commonPitfall: 'Expanding with compound angle cos(x + π/3) algebraically, which becomes extremely lengthy.'
      },
      {
        id: 'c11-math-24-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Linear Inequalities: Graphical Solution of System of Inequalities',
        questionText: 'Solve the following system of linear inequalities graphically:\n2x + y ≥ 4\nx + y ≤ 3\n2x - 3y ≤ 6\nx ≥ 0, y ≥ 0.',
        modelAnswer: 'Step 1: Convert inequalities to boundary lines and find intercepts:\n1. Line L₁: 2x + y = 4\n   x = 0 ⇒ y = 4 (0, 4); y = 0 ⇒ x = 2 (2, 0).\n   Test (0, 0): 0 + 0 ≥ 4 (False ⇒ region does not contain origin, shade away from origin).\n\n2. Line L₂: x + y = 3\n   x = 0 ⇒ y = 3 (0, 3); y = 0 ⇒ x = 3 (3, 0).\n   Test (0, 0): 0 + 0 ≤ 3 (True ⇒ region contains origin, shade towards origin).\n\n3. Line L₃: 2x - 3y = 6\n   x = 0 ⇒ y = -2 (0, -2); y = 0 ⇒ x = 3 (3, 0).\n   Test (0, 0): 0 - 0 ≤ 6 (True ⇒ region contains origin).\n\n4. x ≥ 0, y ≥ 0 restricts the solution strictly to the First Quadrant.\n\nStep 2: Find Corner Points of the Feasible Region:\nIntersection of L₁ and L₂:\n(2x + y) - (x + y) = 4 - 3 ⇒ x = 1.\nSubstitute into L₂: 1 + y = 3 ⇒ y = 2.\nIntersection Point P = (1, 2).\n\nOn y-axis (x = 0):\n- From L₁: y ≥ 4.\n- From L₂: y ≤ 3.\nNotice that on the y-axis, y cannot be simultaneously ≥ 4 and ≤ 3.\n\nLet us check points in the first quadrant:\n- At x = 2, y = 0: L₁ is 4 ≥ 4 (satisfied); L₂ is 2 ≤ 3 (satisfied); L₃ is 4 ≤ 6 (satisfied).\n- At x = 3, y = 0: L₁ is 6 ≥ 4 (satisfied); L₂ is 3 ≤ 3 (satisfied); L₃ is 6 ≤ 6 (satisfied).\n- Segment between (2, 0) and (3, 0) on x-axis.\n- Intersection point P(1, 2): L₁ is 2(1) + 2 = 4 (satisfied); L₂ is 1 + 2 = 3 (satisfied); L₃ is 2 - 6 = -4 ≤ 6 (satisfied).\n\nThe feasible region is the closed triangle bounded by vertices:\nA(2, 0), B(3, 0), and P(1, 2).\nEvery point within and on the perimeter of triangle ABP satisfies the system of inequalities.',
        stepMarking: [
          { step: 'Correct table of intercepts and testing (0, 0) for all three lines', marks: '1.5 Marks' },
          { step: 'Plotting lines L₁, L₂, L₃ accurately on Cartesian plane', marks: '1.5 Marks' },
          { step: 'Determining intersection point (1, 2) and shading triangular feasible region ABP', marks: '2 Marks' }
        ],
        examinerTip: 'Always state whether lines are solid (≤, ≥) or dashed (<, >). Here all are solid lines.',
        commonPitfall: 'Incorrect shading of 2x + y ≥ 4 (must be away from origin).'
      },
      {
        id: 'c11-math-24-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Conic Sections: Hyperbola Equation Derivation & Properties',
        questionText: 'Find the equation of the hyperbola whose foci are (0, ±12) and the length of the latus rectum is 36.',
        modelAnswer: '1. Orientation and Standard Equation:\nThe foci are on the y-axis at (0, ±c) = (0, ±12).\nTherefore, the transverse axis is along the y-axis.\nThe standard equation of the hyperbola is:\ny² / a² - x² / b² = 1.\n\n2. Given parameters:\nc = 12.\nLength of latus rectum = 2b² / a = 36 ⇒ b² / a = 18 ⇒ b² = 18a.\n\n3. Fundamental Relation for Hyperbola:\nc² = a² + b²\nSubstitute c = 12 and b² = 18a:\n12² = a² + 18a\n144 = a² + 18a\na² + 18a - 144 = 0.\n\n4. Factorizing the quadratic:\nFactors of -144 adding to 18 are 24 and -6 (24 × (-6) = -144 and 24 - 6 = 18):\n(a + 24)(a - 6) = 0.\nSince semi-transverse axis a must be positive, a = 6 (a = -24 rejected).\n\n5. Finding b²:\nb² = 18a = 18(6) = 108.\na² = 6² = 36.\n\n6. Equation of the Hyperbola:\ny² / 36 - x² / 108 = 1\nMultiply throughout by 108:\n3y² - x² = 108.',
        stepMarking: [
          { step: 'Identifying transverse axis along y-axis: y²/a² - x²/b² = 1 and c = 12', marks: '1.5 Marks' },
          { step: 'Using 2b²/a = 36 ⇒ b² = 18a and c² = a² + b²', marks: '1.5 Marks' },
          { step: 'Solving a² + 18a - 144 = 0 ⇒ a = 6 and b² = 108', marks: '1 Mark' },
          { step: 'Final equation: y²/36 - x²/108 = 1 (or 3y² - x² = 108)', marks: '1 Mark' }
        ],
        examinerTip: 'Foci on y-axis means positive term is y²/a².',
        commonPitfall: 'Using c² = a² - b² (which is for ellipse) instead of c² = a² + b².'
      },
      {
        id: 'c11-math-24-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Statistics: Mean and Variance of Grouped Data',
        questionText: 'Calculate the mean, variance, and standard deviation for the following frequency distribution:\nClass:      0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency:    5  |   8   |   15  |   16  |   6',
        modelAnswer: 'Step 1: Construct Computation Table (Class size h = 10, Assumed mean A = 25):\nClass  | fᵢ | xᵢ | dᵢ = (xᵢ - 25)/10 | fᵢ·dᵢ | dᵢ² | fᵢ·dᵢ²\n0 - 10 |  5 |  5 |        -2         |  -10  |  4  |   20\n10 - 20|  8 | 15 |        -1         |   -8  |  1  |    8\n20 - 30| 15 | 25 |         0         |    0  |  0  |    0\n30 - 40| 16 | 35 |        +1         |  +16  |  1  |   16\n40 - 50|  6 | 45 |        +2         |  +12  |  4  |   24\n--------------------------------------------------------------\nTotal  | N=50|   |                   | Σfᵢdᵢ=10 | | Σfᵢdᵢ²=68\n\nStep 2: Calculate Mean (x̄):\nx̄ = A + [ (Σfᵢ dᵢ) / N ] × h\n= 25 + [ 10 / 50 ] × 10\n= 25 + [ 0.2 ] × 10 = 25 + 2 = 27.\n\nStep 3: Calculate Variance (σ²):\nσ² = (h² / N²) [ N Σfᵢ dᵢ² - (Σfᵢ dᵢ)² ]\n= (10² / 50²) [ 50(68) - (10)² ]\n= (100 / 2500) [ 3400 - 100 ]\n= (1 / 25) [ 3300 ] = 132.\n\nStep 4: Calculate Standard Deviation (σ):\nσ = √(Variance) = √132 ≈ 11.49.\n\nConclusion:\n- Mean = 27\n- Variance = 132\n- Standard Deviation = 11.49.',
        stepMarking: [
          { step: 'Correct table with midpoints, step deviations, fᵢdᵢ, and fᵢdᵢ²', marks: '2 Marks' },
          { step: 'Calculation of Mean x̄ = 27', marks: '1 Mark' },
          { step: 'Calculation of Variance σ² = 132', marks: '1 Mark' },
          { step: 'Calculation of Standard Deviation σ = 11.49', marks: '1 Mark' }
        ],
        examinerTip: 'Step deviation method with dᵢ = (xᵢ - A)/h drastically simplifies arithmetic.',
        commonPitfall: 'Forgetting to multiply by h² in the variance formula.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q36 to Q38 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-math-24-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Architectural Parabolic Arch Design (Conic Sections)',
        questionText: 'An engineer designs a railway tunnel with a cross-section in the form of a parabolic arch. The arch is 10 m high at the center and 5 m wide at the base.\n\n(i) Taking the vertex of the parabola at the origin (0, 0) and opening downwards, write the standard Cartesian equation of the parabola. [1 Mark]\n(ii) Determine the coordinates of the base endpoints of the arch on the grid. [1 Mark]\n(iii) (a) Calculate how wide the arch is at a height of 2 m from the ground. [2 Marks]\n                         OR\n(iii) (b) If a heavy cargo truck 4 m wide needs to pass through, find the maximum clearance height of the arch at the edges of the truck. [2 Marks]',
        modelAnswer: '(i) Equation of Parabola:\nWith vertex at origin (0, 0) and axis along y-axis opening downwards, the equation is:\nx² = -4ay.\n\n(ii) Base Coordinates:\nThe base is 10 m below the vertex (y = -10 m) and has total width 5 m.\nBy symmetry, the base endpoints are situated at x = ± 2.5 m (± 5/2 m).\nPoints: (2.5, -10) and (-2.5, -10).\n\n(iii) (a) Width at height 2 m from the ground:\nFirst, find parameter a using base point (5/2, -10):\n(5/2)² = -4a (-10)\n25/4 = 40a ⇒ a = 25 / 160 = 5 / 32.\nSo equation is: x² = -4(5/32) y = -5y/8.\n\nA height of 2 m from the ground corresponds to a depth of 10 - 2 = 8 m below vertex (y = -8 m):\nx² = -5(-8) / 8 = 5\nx = √5 ≈ 2.236 m.\nTotal width = 2x = 2√5 m ≈ 4.47 m.\n\nOR\n(iii) (b) Maximum clearance height for 4 m wide truck:\nWidth of truck is 4 m ⇒ half-width x = 4/2 = 2 m.\nSubstitute x = 2 into x² = -5y/8:\n2² = -5y / 8\n4 = -5y / 8 ⇒ -5y = 32 ⇒ y = -32 / 5 = -6.4 m.\nThis means the arch ceiling is 6.4 m below the top vertex.\nClearance height from ground = Total height - Depth = 10 - 6.4 = 3.6 m.',
        stepMarking: [
          { step: '(i) Parabola equation x² = -4ay', marks: '1 Mark' },
          { step: '(ii) Base points (±2.5, -10)', marks: '1 Mark' },
          { step: '(iii)(a) Width = 2√5 m ≈ 4.47 m OR (iii)(b) Clearance height = 3.6 m', marks: '2 Marks' }
        ],
        examinerTip: 'Carefully measure height from the ground (10 - depth from vertex).',
        commonPitfall: 'Setting y = -2 instead of y = -8 for height 2 m from ground.'
      },
      {
        id: 'c11-math-24-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Viral Social Media Trend (Sequences and Series)',
        questionText: 'A viral video campaign on social media starts with 4 people sharing the video on Day 1. Each person shares it with 3 new unique people each subsequent day, forming a geometric progression: 4, 12, 36, 108, ...\n\n(i) What is the common ratio (r) of this GP? [1 Mark]\n(ii) How many new people receive the video on the 6th day? [1 Mark]\n(iii) (a) Find the total cumulative number of people who have received the video at the end of 8 days. [2 Marks]\n                         OR\n(iii) (b) On which day will the number of new recipients on that single day first exceed 10,000 people? [2 Marks]',
        modelAnswer: '(i) Common Ratio (r):\nr = 12 / 4 = 3.\n\n(ii) Number of people on 6th day (T₆):\nT_n = a · rⁿ⁻¹\nT₆ = 4 · (3)⁶⁻¹ = 4 · (3⁵) = 4 · 243 = 972 people.\n\n(iii) (a) Cumulative people after 8 days (S₈):\nS_n = a (rⁿ - 1) / (r - 1)\nS₈ = 4 (3⁸ - 1) / (3 - 1) = 4 (6561 - 1) / 2 = 2 × 6560 = 13,120 people.\n\nOR\n(iii) (b) Day when T_n > 10,000:\n4 · 3ⁿ⁻¹ > 10,000\n3ⁿ⁻¹ > 2500.\nEvaluating powers of 3:\n3⁵ = 243\n3⁶ = 729\n3⁷ = 2187\n3⁸ = 6561 (which is > 2500).\nTherefore: n - 1 = 8 ⇒ n = 9.\nOn the 9th day, the new recipients (4 × 3⁸ = 26,244) will first exceed 10,000.',
        stepMarking: [
          { step: '(i) Common ratio r = 3', marks: '1 Mark' },
          { step: '(ii) T₆ = 972 people', marks: '1 Mark' },
          { step: '(iii)(a) S₈ = 13,120 people OR (iii)(b) n = 9th day', marks: '2 Marks' }
        ],
        examinerTip: '3⁸ = 6561; 3⁷ = 2187 < 2500, so n - 1 must be 8.',
        commonPitfall: 'Confusing T_n (daily count) with S_n (cumulative sum).'
      },
      {
        id: 'c11-math-24-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Quality Testing & Probability',
        questionText: 'A quality inspector inspects electronic microchips. In a shipment, 80% are non-defective (Good) and 20% are defective. Two chips are drawn at random without replacement from a sample batch.\n\n(i) What is the probability that the first chip drawn is defective? [1 Mark]\n(ii) State the complement of the event "at least one chip is defective". [1 Mark]\n(iii) (a) If two chips are selected at random with replacement, find the probability that exactly one of the two chips is defective. [2 Marks]\n                         OR\n(iii) (b) From a box containing 10 good chips and 2 defective chips, two chips are drawn without replacement. What is the probability that both are good? [2 Marks]',
        modelAnswer: '(i) Probability that first chip is defective:\nP(D) = 20% = 20 / 100 = 0.2 (or 1/5).\n\n(ii) Complement Event:\nThe complement of "at least one chip is defective" is "neither chip is defective" (i.e., both chips drawn are good/non-defective).\n\n(iii) (a) With Replacement (P(G) = 0.8, P(D) = 0.2):\nExactly one chip is defective = (First Good and Second Defective) OR (First Defective and Second Good):\nP = P(G) · P(D) + P(D) · P(G)\n= (0.8 × 0.2) + (0.2 × 0.8) = 0.16 + 0.16 = 0.32.\n\nOR\n(iii) (b) Box with 10 Good and 2 Defective (Total = 12 chips, without replacement):\nProbability that first chip is good = 10 / 12.\nProbability that second chip is good = 9 / 11.\nProbability that both are good = (10 / 12) × (9 / 11) = (5 / 6) × (9 / 11) = 45 / 66 = 15 / 22.',
        stepMarking: [
          { step: '(i) P(D) = 0.2 (1/5)', marks: '1 Mark' },
          { step: '(ii) Complement: Both chips are good (none defective)', marks: '1 Mark' },
          { step: '(iii)(a) P = 0.32 OR (iii)(b) P = 15/22', marks: '2 Marks' }
        ],
        examinerTip: 'Notice the factor of 2 in (iii)(a) for GD and DG orderings.',
        commonPitfall: 'Calculating only 0.8 × 0.2 = 0.16 and forgetting the second ordering.'
      }
    ]
  }
];
