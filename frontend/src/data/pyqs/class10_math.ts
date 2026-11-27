import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_10_MATH_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE CLASS 10 MATHEMATICS STANDARD 2024 BOARD EXAM (COMPLETE PAPER - SET 30/1/1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c10-math-2024-board',
    title: 'CBSE Class 10 Mathematics Standard Board Exam 2024 (Complete Original Paper - Set 30/1/1)',
    subject: 'Mathematics',
    targetClass: 'Class 10',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '30/1/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 38,
    generalInstructions: [
      'This question paper contains 38 questions divided into 5 sections: Section A to Section E.',
      'Section A comprises 20 Multiple Choice Questions (MCQs) of 1 mark each (Q1 to Q18 are MCQs and Q19 & Q20 are Assertion-Reason).',
      'Section B comprises 5 Short Answer Type-I (SA-I) questions of 2 marks each (Q21 to Q25).',
      'Section C comprises 6 Short Answer Type-II (SA-II) questions of 3 marks each (Q26 to Q31).',
      'Section D comprises 4 Long Answer (LA) questions of 5 marks each (Q32 to Q35).',
      'Section E comprises 3 Case-Based integrated units of assessment of 4 marks each with sub-parts (Q36 to Q38).',
      'All questions are compulsory. Internal choice is provided in 2 questions of Sec B, 2 in Sec C, 2 in Sec D and 2 in Sec E.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-math-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Real Numbers: Fundamental Theorem of Arithmetic',
        questionText: 'If two positive integers a and b are written as a = x³y² and b = xy³, where x and y are prime numbers, then HCF(a, b) is:',
        options: [
          'A) xy',
          'B) xy²',
          'C) x³y³',
          'D) x²y²'
        ],
        correctOption: 'B',
        modelAnswer: 'B) xy².\nHCF of numbers expressed in prime factorisation is the product of the smallest power of each common prime factor involved.\nFor prime x: powers are 3 and 1 ⇒ minimum power = 1 (x¹).\nFor prime y: powers are 2 and 3 ⇒ minimum power = 2 (y²).\nTherefore, HCF(a, b) = x¹ · y² = xy².',
        stepMarking: [
          { step: 'Identifying minimum common powers of x and y as x¹ and y²', marks: '0.5 Mark' },
          { step: 'HCF = xy² (Option B)', marks: '0.5 Mark' }
        ],
        examinerTip: 'HCF takes the MINIMUM powers of common factors; LCM takes the MAXIMUM powers of all factors.',
        commonPitfall: 'Calculating LCM (x³y³) instead of HCF.'
      },
      {
        id: 'c10-math-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Zeros and Coefficients',
        questionText: 'If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:',
        options: [
          'A) 10',
          'B) -10',
          'C) -7',
          'D) -2'
        ],
        correctOption: 'B',
        modelAnswer: 'B) -10.\nIf x = 2 is a zero of p(x) = x² + 3x + k, then p(2) = 0.\n(2)² + 3(2) + k = 0\n4 + 6 + k = 0\n10 + k = 0 ⇒ k = -10.',
        stepMarking: [
          { step: 'Substituting x = 2 into p(x) = 0: 4 + 6 + k = 0', marks: '0.5 Mark' },
          { step: 'k = -10 (Option B)', marks: '0.5 Mark' }
        ],
        examinerTip: 'A number α is a zero of polynomial p(x) if and only if p(α) = 0.',
        commonPitfall: 'Transposing 10 to the other side without changing sign (+10 instead of -10).'
      },
      {
        id: 'c10-math-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Linear Equations: Consistency of Linear System',
        questionText: 'The pair of linear equations 2x - 3y = 7 and 4x - 6y = 15 has:',
        options: [
          'A) Exactly one unique solution',
          'B) Exactly two solutions',
          'C) Infinitely many solutions',
          'D) No solution (inconsistent)'
        ],
        correctOption: 'D',
        modelAnswer: 'D) No solution (inconsistent).\nGiven equations:\na₁ = 2, b₁ = -3, c₁ = -7\na₂ = 4, b₂ = -6, c₂ = -15\n\nComparing ratios:\na₁/a₂ = 2/4 = 1/2\nb₁/b₂ = -3/(-6) = 1/2\nc₁/c₂ = -7/(-15) = 7/15\n\nSince a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the two lines are parallel and never intersect. Therefore, the system has NO solution.',
        stepMarking: [
          { step: 'Ratios: a₁/a₂ = 1/2, b₁/b₂ = 1/2, c₁/c₂ = 7/15', marks: '0.5 Mark' },
          { step: 'Condition a₁/a₂ = b₁/b₂ ≠ c₁/c₂ ⇒ No solution (Option D)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Parallel lines = No solution (Inconsistent); Coincident lines = Infinitely many solutions; Intersecting lines = Unique solution.',
        commonPitfall: 'Confusing no solution with infinitely many solutions.'
      },
      {
        id: 'c10-math-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Quadratic Equations: Nature of Roots',
        questionText: 'The quadratic equation 2x² - 4x + 3 = 0 has:',
        options: [
          'A) Two distinct real roots',
          'B) Two equal real roots',
          'C) No real roots',
          'D) More than two roots'
        ],
        correctOption: 'C',
        modelAnswer: 'C) No real roots.\nFor ax² + bx + c = 0, Discriminant D = b² - 4ac.\nHere a = 2, b = -4, c = 3.\nD = (-4)² - 4(2)(3) = 16 - 24 = -8.\nSince D < 0, the equation has NO real roots.',
        stepMarking: [
          { step: 'Discriminant D = (-4)² - 4(2)(3) = -8', marks: '0.5 Mark' },
          { step: 'Since D < 0 ⇒ No real roots (Option C)', marks: '0.5 Mark' }
        ],
        examinerTip: 'D > 0: Two distinct real roots; D = 0: Two equal real roots; D < 0: No real roots.',
        commonPitfall: 'Squaring -4 as -16 instead of +16.'
      },
      {
        id: 'c10-math-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Arithmetic Progressions: Common Difference',
        questionText: 'In an AP, if common difference d = -4, number of terms n = 7, and the 7th term a₇ = 4, then the first term a is:',
        options: [
          'A) 6',
          'B) 7',
          'C) 20',
          'D) 28'
        ],
        correctOption: 'D',
        modelAnswer: 'D) 28.\nFormula for nth term of an AP: aₙ = a + (n - 1)d.\nGiven a₇ = 4, n = 7, d = -4:\n4 = a + (7 - 1)(-4)\n4 = a + 6(-4)\n4 = a - 24\na = 4 + 24 = 28.',
        stepMarking: [
          { step: 'Formula aₙ = a + (n-1)d substituted: 4 = a - 24', marks: '0.5 Mark' },
          { step: 'a = 28 (Option D)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Check: a = 28, decreasing by 4 each term: 28, 24, 20, 16, 12, 8, 4 (7th term is indeed 4).',
        commonPitfall: 'Arithmetic sign error: writing 4 - 24 = -20.'
      },
      {
        id: 'c10-math-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Coordinate Geometry: Distance from Origin',
        questionText: 'The distance of the point P(-6, 8) from the origin O(0, 0) is:',
        options: [
          'A) 8',
          'B) 2√7',
          'C) 10',
          'D) 6'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 10.\nDistance from origin to point (x, y) is given by:\nOP = √(x² + y²)\nOP = √[ (-6)² + 8² ] = √(36 + 64) = √100 = 10 units.',
        stepMarking: [
          { step: 'OP = √[(-6)² + 8²] = √100 = 10 units (Option C)', marks: '1 Mark' }
        ],
        examinerTip: '(6, 8, 10) is a standard Pythagorean triplet.',
        commonPitfall: 'Taking distance as -6 + 8 = 2.'
      },
      {
        id: 'c10-math-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Triangles: Basic Proportionality Theorem (Thales)',
        questionText: 'In ΔABC, DE || BC. If AD = 3 cm, DB = 4 cm, and AE = 6 cm, then the length of EC is:',
        options: [
          'A) 8 cm',
          'B) 7 cm',
          'C) 4.5 cm',
          'D) 5 cm'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 8 cm.\nBy Basic Proportionality Theorem (BPT), since DE || BC:\nAD / DB = AE / EC\n3 / 4 = 6 / EC\n3 · EC = 4 × 6 = 24\nEC = 24 / 3 = 8 cm.',
        stepMarking: [
          { step: 'Applying Thales theorem AD/DB = AE/EC', marks: '0.5 Mark' },
          { step: 'EC = 8 cm (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'BPT ratio applies to side segments: AD/DB = AE/EC.',
        commonPitfall: 'Confusing EC with total side AC = 6 + 8 = 14 cm.'
      },
      {
        id: 'c10-math-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Introduction to Trigonometry: Basic Identity',
        questionText: 'If sin θ = 1/2, then the value of 3 cos θ - 4 cos³ θ is:',
        options: [
          'A) 0',
          'B) 1',
          'C) 1/2',
          'D) √3/2'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 0.\nIf sin θ = 1/2, then for acute angle θ, θ = 30°.\ncos 30° = √3/2.\nNow substitute into 3 cos θ - 4 cos³ θ:\n= 3(√3/2) - 4(√3/2)³\n= (3√3)/2 - 4(3√3 / 8)\n= (3√3)/2 - (3√3)/2 = 0.',
        stepMarking: [
          { step: 'θ = 30° and cos 30° = √3/2', marks: '0.5 Mark' },
          { step: 'Evaluation: 3(√3/2) - 4(3√3/8) = 0 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Direct identity check: 3 cos θ - 4 cos³ θ = -cos(3θ). For θ = 30°, -cos(90°) = 0.',
        commonPitfall: 'Incorrect cubing of (√3/2)³.'
      },
      {
        id: 'c10-math-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Applications of Trigonometry: Angle of Elevation',
        questionText: 'If the length of the shadow of a vertical tower is equal to its height, then the angle of elevation of the sun is:',
        options: [
          'A) 30°',
          'B) 45°',
          'C) 60°',
          'D) 90°'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 45°.\nLet height of the tower be h and length of shadow be s.\nGiven h = s.\nIn the right triangle formed:\ntan θ = Height / Shadow = h / s = h / h = 1.\nSince tan θ = 1, θ = 45°.',
        stepMarking: [
          { step: 'tan θ = h / s = 1 ⇒ θ = 45° (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Whenever vertical height = horizontal base, angle is ALWAYS 45°.',
        commonPitfall: 'Guessing 30° or 60°.'
      },
      {
        id: 'c10-math-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Circles: Tangent to a Circle Properties',
        questionText: 'From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:',
        options: [
          'A) 7 cm',
          'B) 12 cm',
          'C) 15 cm',
          'D) 24.5 cm'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 7 cm.\nLet the point of contact be P, centre be O, and external point be Q.\nThe tangent at any point of a circle is perpendicular to the radius through the point of contact (∠OPQ = 90°).\nIn right triangle OPQ:\nOQ² = OP² + PQ²\n25² = r² + 24²\n625 = r² + 576\nr² = 625 - 576 = 49\nr = √49 = 7 cm.',
        stepMarking: [
          { step: 'In right ΔOPQ, r² = 25² - 24² = 49', marks: '0.5 Mark' },
          { step: 'r = 7 cm (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: '(7, 24, 25) is a standard Pythagorean triplet.',
        commonPitfall: 'Adding 25² + 24² instead of subtracting.'
      },
      {
        id: 'c10-math-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Areas Related to Circles: Perimeter and Area Equality',
        questionText: 'If the perimeter and the area of a circle are numerically equal, then the radius of the circle is:',
        options: [
          'A) 2 units',
          'B) π units',
          'C) 4 units',
          'D) 7 units'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 2 units.\nPerimeter (Circumference) of circle = 2πr.\nArea of circle = πr².\nGiven: 2πr = πr².\nDividing both sides by πr (since r ≠ 0):\n2 = r ⇒ r = 2 units.',
        stepMarking: [
          { step: 'Setting 2πr = πr² ⇒ r = 2 units (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the word "numerically equal" since units of perimeter and area are different.',
        commonPitfall: 'Choosing 4 units by confusing diameter with radius.'
      },
      {
        id: 'c10-math-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Surface Areas & Volumes: Sphere to Cone Conversion',
        questionText: 'A metallic solid sphere of radius 3 cm is melted and recast into the shape of a solid cone of radius 3 cm. The height of the cone is:',
        options: [
          'A) 3 cm',
          'B) 6 cm',
          'C) 12 cm',
          'D) 24 cm'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 12 cm.\nDuring recasting, volume remains conserved:\nVolume of cone = Volume of sphere\n(1/3) π r_cone² h = (4/3) π r_sphere³\nSince r_cone = r_sphere = 3 cm:\n(1/3) π (3)² h = (4/3) π (3)³\n3 h = 4 × 27 / 3 = 36\nh = 36 / 3 = 12 cm.',
        stepMarking: [
          { step: 'Volume conservation: (1/3)πr²h = (4/3)πr³', marks: '0.5 Mark' },
          { step: 'h = 4r = 4(3) = 12 cm (Option C)', marks: '0.5 Mark' }
        ],
        examinerTip: 'When radii are equal: h = 4r.',
        commonPitfall: 'Forgetting the 1/3 factor in the cone volume formula.'
      },
      {
        id: 'c10-math-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Empirical Relationship',
        questionText: 'For a given frequency distribution, if Mode = 24 and Mean = 60, then the Median is:',
        options: [
          'A) 48',
          'B) 36',
          'C) 42',
          'D) 54'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 48.\nEmpirical relationship among the three measures of central tendency:\nMode = 3 Median - 2 Mean\n24 = 3 Median - 2(60)\n24 = 3 Median - 120\n3 Median = 24 + 120 = 144\nMedian = 144 / 3 = 48.',
        stepMarking: [
          { step: 'Using formula Mode = 3 Median - 2 Mean', marks: '0.5 Mark' },
          { step: 'Median = 144 / 3 = 48 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Mnemonic: 3 Median = Mode + 2 Mean (Three is greatest, multiplies Median).',
        commonPitfall: 'Mixing up coefficients as 2 Median - 3 Mean.'
      },
      {
        id: 'c10-math-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Probability: Complementary Events',
        questionText: 'If the probability of winning a game is 0.07, what is the probability of losing it?',
        options: [
          'A) 0.93',
          'B) 0.03',
          'C) 0.70',
          'D) 0.97'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 0.93.\nWinning and losing are complementary events:\nP(E) + P(not E) = 1\nP(losing) = 1 - P(winning) = 1 - 0.07 = 0.93.',
        stepMarking: [
          { step: 'P(not E) = 1 - 0.07 = 0.93 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Sum of probabilities of an event and its complement is always 1.',
        commonPitfall: 'Subtracting 0.07 from 10 or calculating 0.3.'
      },
      {
        id: 'c10-math-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Coordinate Geometry: Midpoint Formula',
        questionText: 'The midpoint of the line segment joining points A(-2, 8) and B(-6, -4) is:',
        options: [
          'A) (-4, 2)',
          'B) (2, -4)',
          'C) (-4, -2)',
          'D) (4, 2)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (-4, 2).\nMidpoint M = ( (x₁ + x₂)/2 , (y₁ + y₂)/2 )\nM = ( (-2 + (-6))/2 , (8 + (-4))/2 )\nM = ( -8/2 , 4/2 ) = (-4, 2).',
        stepMarking: [
          { step: 'Midpoint = ((-2 - 6)/2, (8 - 4)/2) = (-4, 2) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Midpoint coordinates are the simple arithmetic averages of x and y coordinates.',
        commonPitfall: 'Subtracting coordinates instead of adding them.'
      },
      {
        id: 'c10-math-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Probability: Card Deck Calculation',
        questionText: 'A card is drawn from a well-shuffled deck of 52 playing cards. The probability of getting a black face card is:',
        options: [
          'A) 3/13',
          'B) 3/26',
          'C) 1/26',
          'D) 3/52'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 3/26.\nTotal cards in deck = 52.\nFace cards are King, Queen, and Jack (3 per suit).\nThere are 2 black suits (Spades and Clubs), so total black face cards = 2 × 3 = 6.\nProbability = 6 / 52 = 3 / 26.',
        stepMarking: [
          { step: 'Favourable black face cards = 6, Total cards = 52', marks: '0.5 Mark' },
          { step: 'P = 6/52 = 3/26 (Option B)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Total face cards = 12 (6 red, 6 black).',
        commonPitfall: 'Counting 12 face cards and getting 12/52 = 3/13 (ignoring the "black" condition).'
      },
      {
        id: 'c10-math-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Triangles: Ratio of Areas of Similar Triangles',
        questionText: 'If ΔABC ~ ΔPQR with BC / QR = 1/3, then area(ΔPQR) / area(ΔABC) is equal to:',
        options: [
          'A) 9',
          'B) 3',
          'C) 1/3',
          'D) 1/9'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 9.\nThe ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides:\narea(ΔPQR) / area(ΔABC) = (QR / BC)² = (3 / 1)² = 9.',
        stepMarking: [
          { step: 'area(ΔPQR)/area(ΔABC) = (QR/BC)² = (3/1)² = 9 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Carefully note the order: area(ΔPQR) is in the numerator, so (3/1)² = 9.',
        commonPitfall: 'Inverting the ratio and selecting 1/9.'
      },
      {
        id: 'c10-math-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Class Mark',
        questionText: 'The class mark of the class interval 15 - 35 is:',
        options: [
          'A) 20',
          'B) 25',
          'C) 30',
          'D) 50'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 25.\nClass Mark = (Upper Class Limit + Lower Class Limit) / 2\n= (35 + 15) / 2 = 50 / 2 = 25.',
        stepMarking: [
          { step: 'Class mark = (15 + 35)/2 = 25 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Class mark is the midpoint of the interval; class size is upper limit minus lower limit (35 - 15 = 20).',
        commonPitfall: 'Subtracting to get class size 20 instead of class mark.'
      },
      {
        id: 'c10-math-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Quadratic Equation Roots',
        questionText: 'Assertion (A): The equation x² + 3x + 1 = (x - 2)² is a quadratic equation.\nReason (R): Any equation of the form ax² + bx + c = 0 with a ≠ 0 is called a quadratic equation.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'D',
        modelAnswer: 'D) (A) is false, but (R) is true.\nExpanding the RHS of the given equation:\nx² + 3x + 1 = x² - 4x + 4\nSubtracting x² from both sides:\n3x + 1 = -4x + 4\n7x - 3 = 0.\nThis is a LINEAR equation (degree 1), NOT a quadratic equation (degree 2) because the x² terms cancel out completely (a = 0).\nTherefore, Assertion (A) is FALSE.\nReason (R) correctly defines a quadratic equation and is TRUE.',
        stepMarking: [
          { step: '(A) is false, but (R) is true (Option D)', marks: '1 Mark' }
        ],
        examinerTip: 'Always simplify and expand algebraic equations completely before determining their degree.',
        commonPitfall: 'Looking at x² on both sides and assuming it must be quadratic without expanding.'
      },
      {
        id: 'c10-math-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Circle Tangents from External Point',
        questionText: 'Assertion (A): The lengths of tangents drawn from an external point to a circle are equal.\nReason (R): In two right triangles formed by radius, tangent and line from external point to center, triangles are congruent by RHS congruence criterion.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nLet P be an external point and PA, PB tangents to circle with centre O.\nIn ΔOAP and ΔOBP:\n- ∠OAP = ∠OBP = 90° (Radius is perpendicular to tangent)\n- OP = OP (Common hypotenuse)\n- OA = OB (Radii of same circle)\nBy RHS congruence criterion, ΔOAP ≅ ΔOBP.\nTherefore, PA = PB (by CPCT). Hence Reason (R) is the exact mathematical proof and explanation of Assertion (A).',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'This is Theorem 10.2 of NCERT Class 10 Circles.',
        commonPitfall: 'Marking Option B without recognizing that R provides the complete proof of A.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: VERY SHORT ANSWER QUESTIONS (Q21 to Q25 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-math-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Real Numbers: Proof of Irrationality',
        questionText: 'Prove that √5 is an irrational number.',
        modelAnswer: 'Let us assume to the contrary that √5 is rational.\nThen there exist coprime positive integers a and b (b ≠ 0, having no common factors other than 1) such that:\n√5 = a / b ⇒ a = b√5.\n\nSquaring both sides:\na² = 5b²    ...(Equation 1)\nThis shows that 5 divides a². Therefore, by fundamental theorem of arithmetic, 5 divides a.\n\nLet a = 5c for some integer c.\nSubstituting into Equation (1):\n(5c)² = 5b² ⇒ 25c² = 5b² ⇒ b² = 5c².\nThis implies that 5 divides b², so 5 also divides b.\n\nThus, 5 is a common factor of both a and b.\nThis contradicts our initial assumption that a and b are coprime.\nThis contradiction arose due to our incorrect assumption that √5 is rational.\nHence, √5 is an irrational number.',
        stepMarking: [
          { step: 'Assumption of rationality and deriving a² = 5b² (5 divides a)', marks: '1 Mark' },
          { step: 'Substituting a = 5c to get b² = 5c² (5 divides b) and establishing contradiction', marks: '1 Mark' }
        ],
        examinerTip: 'Mention clearly that a and b are coprime integers.',
        commonPitfall: 'Omitting the statement that "5 divides a² ⇒ 5 divides a".'
      },
      {
        id: 'c10-math-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Triangles: Proving Parallel Lines',
        questionText: 'In ΔPQR, S and T are points on sides PQ and PR respectively such that PS/SQ = PT/TR and ∠PST = ∠PRQ. Prove that ΔPQR is an isosceles triangle.',
        modelAnswer: '1. Given: In ΔPQR, PS/SQ = PT/TR.\nBy the Converse of Basic Proportionality Theorem (BPT):\nST || QR.\n\n2. Since ST || QR and PQ is a transversal:\n∠PST = ∠PQR (Corresponding angles)    ...(Equation 1)\n\n3. But we are given:\n∠PST = ∠PRQ    ...(Equation 2)\n\n4. From Equation (1) and Equation (2):\n∠PQR = ∠PRQ.\n\n5. In ΔPQR, since angles opposite to sides are equal:\nPR = PQ (Sides opposite to equal angles are equal).\nTherefore, ΔPQR is an isosceles triangle.\nHence proved.',
        stepMarking: [
          { step: 'Applying converse of BPT to show ST || QR', marks: '1 Mark' },
          { step: 'Showing ∠PQR = ∠PRQ and concluding PQ = PR (isosceles)', marks: '1 Mark' }
        ],
        examinerTip: 'Converse of BPT: If a line divides any two sides in the same ratio, it is parallel to the third side.',
        commonPitfall: 'Using similarity theorem without showing parallel lines first.'
      },
      {
        id: 'c10-math-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Introduction to Trigonometry: Trigonometric Identity Evaluation',
        questionText: 'Evaluate without using trigonometric tables: (sin 30° + tan 45° - cosec 60°) / (sec 30° + cos 60° + cot 45°).',
        modelAnswer: 'Substituting standard trigonometric values:\n- sin 30° = 1/2,  tan 45° = 1,  cosec 60° = 2/√3\n- sec 30° = 2/√3, cos 60° = 1/2, cot 45° = 1\n\nNumerator:\n1/2 + 1 - 2/√3 = 3/2 - 2/√3 = (3√3 - 4) / (2√3)\n\nDenominator:\n2/√3 + 1/2 + 1 = 2/√3 + 3/2 = (4 + 3√3) / (2√3) = (3√3 + 4) / (2√3)\n\nDividing Numerator by Denominator:\n= [ (3√3 - 4) / (2√3) ] / [ (3√3 + 4) / (2√3) ]\n= (3√3 - 4) / (3√3 + 4)\n\nRationalizing the denominator (multiply numerator and denominator by 3√3 - 4):\n= (3√3 - 4)² / [ (3√3)² - 4² ]\n= [ (3√3)² - 2(3√3)(4) + 16 ] / [ 27 - 16 ]\n= [ 27 - 24√3 + 16 ] / 11\n= (43 - 24√3) / 11.',
        stepMarking: [
          { step: 'Correct substitution of all six trigonometric values', marks: '1 Mark' },
          { step: 'Simplification and rationalization to (43 - 24√3)/11', marks: '1 Mark' }
        ],
        examinerTip: 'Always rationalize irrational denominators in the final answer.',
        commonPitfall: 'Incorrect value for cosec 60° (using √3/2 instead of 2/√3).'
      },
      {
        id: 'c10-math-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Circles: Quadrilateral Circumscribing a Circle',
        questionText: 'A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.',
        modelAnswer: 'Let the circle touch sides AB, BC, CD, and DA of quadrilateral ABCD at points P, Q, R, and S respectively.\n\nWe know that the lengths of tangents drawn from an external point to a circle are equal:\n1. From point A: AP = AS    ...(1)\n2. From point B: BP = BQ    ...(2)\n3. From point C: CR = CQ    ...(3)\n4. From point D: DR = DS    ...(4)\n\nAdding equations (1), (2), (3), and (4):\n(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)\n\nSince AP + BP = AB, CR + DR = CD, AS + DS = AD, and BQ + CQ = BC:\nAB + CD = AD + BC.\n\nHence proved.',
        stepMarking: [
          { step: 'Setting up tangent equality equations AP=AS, BP=BQ, CR=CQ, DR=DS', marks: '1 Mark' },
          { step: 'Adding equations to prove AB + CD = AD + BC', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure you group the matching sides on the same side of the equations before adding.',
        commonPitfall: 'Adding terms incorrectly such that AP and BP are separated.'
      },
      {
        id: 'c10-math-24-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Areas Related to Circles: Sector Area Calculation',
        questionText: 'Find the area of a sector of a circle of radius 6 cm if the angle of the sector is 60°. (Use π = 22/7).',
        modelAnswer: 'Given:\nRadius r = 6 cm\nSector angle θ = 60°\n\nArea of sector of a circle:\nArea = (θ / 360°) × π r²\n= (60° / 360°) × (22 / 7) × (6)²\n= (1 / 6) × (22 / 7) × 36\n= (22 / 7) × 6\n= 132 / 7 cm² (or 18.86 cm²).',
        stepMarking: [
          { step: 'Formula Area = (θ/360) × πr²', marks: '1 Mark' },
          { step: 'Substitution and answer: 132/7 cm² or 18.86 cm²', marks: '1 Mark' }
        ],
        examinerTip: 'Writing 132/7 cm² is completely acceptable and avoids rounding errors.',
        commonPitfall: 'Using 2πr (arc length) instead of πr² (sector area).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER QUESTIONS (Q26 to Q31 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-math-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Polynomials: Finding Quadratic Polynomial from Zeros',
        questionText: 'If α and β are the zeros of the quadratic polynomial f(x) = x² - p(x + 1) - c, prove that (α + 1)(β + 1) = 1 - c.',
        modelAnswer: 'Given polynomial:\nf(x) = x² - px - p - c = x² - px - (p + c)\nComparing with standard form ax² + bx + c\' = 0:\na = 1, b = -p, constant term = -(p + c).\n\nUsing relations between zeros and coefficients:\n1. Sum of zeros: α + β = -b/a = -(-p)/1 = p\n2. Product of zeros: αβ = constant/a = -(p + c) = -p - c.\n\nNow expand the LHS:\nLHS = (α + 1)(β + 1)\n= αβ + α + β + 1\n= αβ + (α + β) + 1.\n\nSubstitute values of αβ and (α + β):\n= (-p - c) + p + 1\n= -p - c + p + 1\n= 1 - c = RHS.\n\nHence proved.',
        stepMarking: [
          { step: 'Rewriting polynomial in standard form x² - px - (p + c)', marks: '1 Mark' },
          { step: 'Finding α + β = p and αβ = -p - c', marks: '1 Mark' },
          { step: 'Expanding (α + 1)(β + 1) and substituting to obtain 1 - c', marks: '1 Mark' }
        ],
        examinerTip: 'Always write the polynomial in standard form ax² + bx + c before identifying coefficients.',
        commonPitfall: 'Taking constant term as -c instead of -(p + c).'
      },
      {
        id: 'c10-math-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Linear Equations: Cross-Multiplication / Elimination Word Problem',
        questionText: 'The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits of the number differ by 2, find the number. How many such numbers are there?',
        modelAnswer: 'Let the tens digit be x and units digit be y.\nOriginal number = 10x + y.\nReversed number = 10y + x.\n\nCondition 1: Sum of original and reversed numbers is 66:\n(10x + y) + (10y + x) = 66\n11x + 11y = 66\nDivide by 11: x + y = 6    ...(Equation 1)\n\nCondition 2: The digits differ by 2:\nCase A: x - y = 2    ...(Equation 2A)\nAdding (1) and (2A):\n2x = 8 ⇒ x = 4.\nFrom (1): 4 + y = 6 ⇒ y = 2.\nNumber = 10(4) + 2 = 42.\n\nCase B: y - x = 2    ...(Equation 2B)\nAdding (1) and (2B):\n2y = 8 ⇒ y = 4.\nFrom (1): x + 4 = 6 ⇒ x = 2.\nNumber = 10(2) + 4 = 24.\n\nConclusion:\nThere are two such numbers: 42 and 24.',
        stepMarking: [
          { step: 'Formulating x + y = 6', marks: '1 Mark' },
          { step: 'Considering Case A (x - y = 2) to get 42', marks: '1 Mark' },
          { step: 'Considering Case B (y - x = 2) to get 24 and stating both numbers', marks: '1 Mark' }
        ],
        examinerTip: 'Because "differ by 2" does not specify which digit is larger, both cases (x - y = 2 and y - x = 2) must be considered.',
        commonPitfall: 'Finding only 42 and missing 24.'
      },
      {
        id: 'c10-math-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Arithmetic Progressions: Sum of n Terms Word Problem',
        questionText: 'How many terms of the AP: 9, 17, 25, ... must be taken to give a sum of 636?',
        modelAnswer: 'Given AP: 9, 17, 25, ...\nFirst term a = 9\nCommon difference d = 17 - 9 = 8\nSum Sₙ = 636\n\nFormula for sum of n terms:\nSₙ = (n/2) [ 2a + (n - 1)d ]\n636 = (n/2) [ 2(9) + (n - 1)(8) ]\n636 = (n/2) [ 18 + 8n - 8 ]\n636 = (n/2) [ 8n + 10 ] = n(4n + 5)\n4n² + 5n - 636 = 0\n\nSolving quadratic equation by middle-term splitting:\nProduct = 4 × (-636) = -2544; Sum = +5.\nFactors: 53 and -48 (since 53 × (-48) = -2544 and 53 - 48 = 5).\n4n² + 53n - 48n - 636 = 0\nn(4n + 53) - 12(4n + 53) = 0\n(4n + 53)(n - 12) = 0\n\nEither n - 12 = 0 ⇒ n = 12\nOr 4n + 53 = 0 ⇒ n = -53/4 (Rejected, since number of terms must be a positive integer).\n\nTherefore, 12 terms must be taken.',
        stepMarking: [
          { step: 'Formulating quadratic equation: 4n² + 5n - 636 = 0', marks: '1.5 Marks' },
          { step: 'Factoring (4n + 53)(n - 12) = 0', marks: '1 Mark' },
          { step: 'Rejecting negative fraction and concluding n = 12', marks: '0.5 Mark' }
        ],
        examinerTip: 'Always write the reason why the negative/fractional root is discarded (n ∈ N).',
        commonPitfall: 'Incorrect factoring of 4n² + 5n - 636.'
      },
      {
        id: 'c10-math-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Coordinate Geometry: Section Formula',
        questionText: 'Find the ratio in which the y-axis divides the line segment joining the points A(5, -6) and B(-1, -4). Also, find the point of intersection.',
        modelAnswer: 'Let the y-axis divide the segment AB in the ratio k : 1 at point P.\nAny point on the y-axis has x-coordinate = 0. So P = (0, y).\n\nBy Section Formula:\nx = (k·x₂ + 1·x₁) / (k + 1)\n0 = [ k(-1) + 1(5) ] / (k + 1)\n0 = -k + 5 ⇒ k = 5.\nTherefore, the required ratio is 5 : 1.\n\nFinding the y-coordinate of P:\ny = (k·y₂ + 1·y₁) / (k + 1)\nSubstitute k = 5, y₁ = -6, y₂ = -4:\ny = [ 5(-4) + 1(-6) ] / (5 + 1)\ny = [ -20 - 6 ] / 6 = -26 / 6 = -13 / 3.\n\nThus, the point of intersection is P(0, -13/3).',
        stepMarking: [
          { step: 'Equating x-coordinate to 0: (-k + 5)/(k + 1) = 0 ⇒ ratio 5 : 1', marks: '1.5 Marks' },
          { step: 'Finding y-coordinate = -13/3 and Point P(0, -13/3)', marks: '1.5 Marks' }
        ],
        examinerTip: 'On y-axis, x = 0; on x-axis, y = 0.',
        commonPitfall: 'Setting y = 0 instead of x = 0 for division by y-axis.'
      },
      {
        id: 'c10-math-24-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Introduction to Trigonometry: Proving Identity',
        questionText: 'Prove that (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ.',
        modelAnswer: 'LHS = (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ)\n\nTaking sin θ common from numerator and cos θ common from denominator:\n= [ sin θ (1 - 2 sin² θ) ] / [ cos θ (2 cos² θ - 1) ]\n= (sin θ / cos θ) · [ (1 - 2 sin² θ) / (2 cos² θ - 1) ]\n= tan θ · [ (1 - 2 sin² θ) / (2 cos² θ - 1) ]\n\nUsing the fundamental identity sin² θ + cos² θ = 1:\nReplace 1 in the numerator with (sin² θ + cos² θ):\nNumerator = 1 - 2 sin² θ = (sin² θ + cos² θ) - 2 sin² θ = cos² θ - sin² θ.\n\nDenominator:\nDenominator = 2 cos² θ - 1 = 2 cos² θ - (sin² θ + cos² θ) = cos² θ - sin² θ.\n\nNow substitute back:\nLHS = tan θ · [ (cos² θ - sin² θ) / (cos² θ - sin² θ) ]\n= tan θ · 1 = tan θ = RHS.\n\nHence proved.',
        stepMarking: [
          { step: 'Factoring sin θ and cos θ to get tan θ [(1 - 2sin²θ)/(2cos²θ - 1)]', marks: '1 Mark' },
          { step: 'Converting 1 into sin²θ + cos²θ in both numerator and denominator', marks: '1 Mark' },
          { step: 'Cancelling (cos²θ - sin²θ) to arrive at tan θ = RHS', marks: '1 Mark' }
        ],
        examinerTip: 'Both (1 - 2 sin² θ) and (2 cos² θ - 1) are expansions of cos(2θ).',
        commonPitfall: 'Sign error when substituting 1 = sin²θ + cos²θ in the denominator.'
      },
      {
        id: 'c10-math-24-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Probability: Two Dice Outcomes',
        questionText: 'Two dice are thrown simultaneously. What is the probability that:\n(a) The sum of the two numbers appearing is 8?\n(b) 5 will not come up on either die?\n(c) The product of the two numbers is a prime number?',
        modelAnswer: 'Total outcomes when two dice are rolled = 6 × 6 = 36.\n\n(a) Event A: Sum is 8:\nA = {(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)} ⇒ n(A) = 5.\nP(Sum = 8) = 5 / 36.\n\n(b) Event B: 5 will not come up on either die:\nOutcomes where 5 appears at least once:\n{(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (1, 5), (2, 5), (3, 5), (4, 5), (6, 5)} ⇒ 11 outcomes.\nOutcomes where 5 does NOT come up = 36 - 11 = 25.\nP(5 not on either die) = 25 / 36.\n\n(c) Event C: Product of numbers is a prime number:\nA product of two positive integers is prime only if one factor is 1 and the other is a prime number (2, 3, or 5):\nFavourable pairs: (1, 2), (2, 1), (1, 3), (3, 1), (1, 5), (5, 1) ⇒ n(C) = 6.\nP(Product is prime) = 6 / 36 = 1 / 6.',
        stepMarking: [
          { step: '(a) Sum is 8: Favourable outcomes = 5 ⇒ P = 5/36', marks: '1 Mark' },
          { step: '(b) 5 not on either: Favourable = 25 ⇒ P = 25/36', marks: '1 Mark' },
          { step: '(c) Product is prime: Favourable = 6 ⇒ P = 6/36 = 1/6', marks: '1 Mark' }
        ],
        examinerTip: 'Prime numbers up to 6 are 2, 3, 5. The only prime products on two dice are 2, 3, 5.',
        commonPitfall: 'Including (1, 1) as prime (1 is neither prime nor composite).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q32 to Q35 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-math-24-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Quadratic Equations: Speed, Distance and Time Word Problem',
        questionText: 'A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.',
        modelAnswer: 'Let the speed of the stream be x km/h.\nGiven: Speed of boat in still water = 18 km/h.\n(Condition: x < 18 km/h, since boat moves upstream).\n\n1. Speeds:\n- Upstream speed = (18 - x) km/h\n- Downstream speed = (18 + x) km/h\n\n2. Distance = 24 km.\n- Time taken upstream: t₁ = 24 / (18 - x) hours\n- Time taken downstream: t₂ = 24 / (18 + x) hours\n\n3. According to the question, t₁ - t₂ = 1 hour:\n24 / (18 - x) - 24 / (18 + x) = 1\n24 [ (18 + x) - (18 - x) ] / [ (18 - x)(18 + x) ] = 1\n24 [ 18 + x - 18 + x ] / [ 18² - x² ] = 1\n24 [ 2x ] / [ 324 - x² ] = 1\n48x = 324 - x²\nx² + 48x - 324 = 0.\n\n4. Factorizing the quadratic equation:\nProduct = -324, Sum = 48.\nFactors are 54 and -6 (since 54 × (-6) = -324 and 54 - 6 = 48):\nx² + 54x - 6x - 324 = 0\nx(x + 54) - 6(x + 54) = 0\n(x + 54)(x - 6) = 0.\n\nEither x - 6 = 0 ⇒ x = 6\nOr x + 54 = 0 ⇒ x = -54 (Speed cannot be negative, hence rejected).\n\nConclusion:\nThe speed of the stream is 6 km/h.',
        stepMarking: [
          { step: 'Setting up upstream/downstream speeds and times', marks: '1.5 Marks' },
          { step: 'Equation 24/(18-x) - 24/(18+x) = 1 simplified to x² + 48x - 324 = 0', marks: '1.5 Marks' },
          { step: 'Factoring (x + 54)(x - 6) = 0', marks: '1 Mark' },
          { step: 'Rejecting negative value and concluding stream speed = 6 km/h', marks: '1 Mark' }
        ],
        examinerTip: 'Upstream speed is ALWAYS (boat speed - stream speed). It is slower because water pushes against the boat.',
        commonPitfall: 'Writing upstream speed as (x - 18) instead of (18 - x).'
      },
      {
        id: 'c10-math-24-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Triangles: Basic Proportionality Theorem State & Prove',
        questionText: 'State and prove the Basic Proportionality Theorem (Thales Theorem).',
        modelAnswer: 'Statement:\nIf a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\n\nProof:\n1. Given:\nA triangle ABC in which a line DE parallel to side BC intersects side AB at D and side AC at E (DE || BC).\n\n2. To Prove:\nAD / DB = AE / EC.\n\n3. Construction:\nJoin BE and CD. Draw DM ⟂ AC and EN ⟂ AB.\n\n4. Proof:\nArea of a triangle = (1/2) × base × height.\n\nIn ΔADE:\narea(ΔADE) = (1/2) × AD × EN    ...(1)\nIn ΔBDE:\narea(ΔBDE) = (1/2) × DB × EN    ...(2)\n\nDividing (1) by (2):\narea(ΔADE) / area(ΔBDE) = [ (1/2) × AD × EN ] / [ (1/2) × DB × EN ] = AD / DB    ...(Equation A)\n\nSimilarly, taking AE and EC as bases with altitude DM:\narea(ΔADE) = (1/2) × AE × DM    ...(3)\narea(ΔDEC) = (1/2) × EC × DM    ...(4)\n\nDividing (3) by (4):\narea(ΔADE) / area(ΔDEC) = [ (1/2) × AE × DM ] / [ (1/2) × EC × DM ] = AE / EC    ...(Equation B)\n\nNow, ΔBDE and ΔDEC are on the same base DE and between the same parallel lines DE and BC.\nTherefore, their areas are equal:\narea(ΔBDE) = area(ΔDEC)    ...(Equation C)\n\nFrom Equations (A), (B), and (C), the LHS of both ratios are equal:\nAD / DB = AE / EC.\n\nHence proved.',
        stepMarking: [
          { step: 'Accurate statement of theorem', marks: '1 Mark' },
          { step: 'Given, To Prove, and Construction clearly written with diagram description', marks: '1 Mark' },
          { step: 'Deriving area ratios AD/DB and AE/EC using common altitudes EN and DM', marks: '2 Marks' },
          { step: 'Stating equal areas on same base between parallels and concluding proof', marks: '1 Mark' }
        ],
        examinerTip: 'Highlight the reason: "Triangles on the same base and between the same parallels have equal areas".',
        commonPitfall: 'Forgetting to draw the perpendicular altitudes EN and DM.'
      },
      {
        id: 'c10-math-24-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Applications of Trigonometry: Double Angle Heights & Distances',
        questionText: 'From a point on the ground, the angles of elevation of the bottom and the top of a transmission tower fixed at the top of a 20 m high building are 45° and 60° respectively. Find the height of the tower. (Take √3 = 1.732).',
        modelAnswer: 'Let AB be the building of height 20 m.\nLet BC be the transmission tower of height h fixed on top of the building.\nLet D be the point on the ground at distance x from the base of the building A.\nGiven:\n- Angle of elevation of bottom of tower (point B): ∠BDA = 45°\n- Angle of elevation of top of tower (point C): ∠CDA = 60°\n\nStep 1: In right ΔDAB:\ntan 45° = AB / AD\n1 = 20 / x ⇒ x = 20 m.\nDistance of observer from building base is 20 m.\n\nStep 2: In right ΔDAC:\ntan 60° = AC / AD = (AB + BC) / AD\n√3 = (20 + h) / 20\n20√3 = 20 + h\nh = 20√3 - 20 = 20(√3 - 1).\n\nStep 3: Numerical Value:\nSubstitute √3 = 1.732:\nh = 20(1.732 - 1) = 20(0.732) = 14.64 m.\n\nConclusion:\nThe height of the transmission tower is 20(√3 - 1) m ≈ 14.64 m.',
        stepMarking: [
          { step: 'Diagram description and setting up right ΔDAB with tan 45° = 20/x ⇒ x = 20 m', marks: '1.5 Marks' },
          { step: 'In right ΔDAC: tan 60° = (20 + h)/20', marks: '1.5 Marks' },
          { step: 'Solving for h = 20(√3 - 1)', marks: '1 Mark' },
          { step: 'Evaluating final answer: h = 14.64 m', marks: '1 Mark' }
        ],
        examinerTip: 'Always calculate up to two decimal places when the value of √3 is explicitly given.',
        commonPitfall: 'Taking total height AC = h instead of (20 + h).'
      },
      {
        id: 'c10-math-24-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Surface Areas & Volumes: Solid Combination (Cylinder + Cones)',
        questionText: 'A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is 2 cm and the diameter of the base is 4 cm. Determine the volume of the toy. If a right circular cylinder circumscribes the toy, find the difference of the volumes of the cylinder and the toy. (Take π = 3.14).',
        modelAnswer: 'Given data:\n- Base diameter of cone and hemisphere = 4 cm ⇒ Radius r = 4/2 = 2 cm\n- Height of cone h = 2 cm\n- Radius of hemisphere r = 2 cm\n\nStep 1: Volume of the Toy:\nVolume of toy = Volume of cone + Volume of hemisphere\n= (1/3) π r² h + (2/3) π r³\n= (1/3) π r² [ h + 2r ]\nSubstitute r = 2 cm, h = 2 cm:\n= (1/3) × 3.14 × (2)² × [ 2 + 2(2) ]\n= (1/3) × 3.14 × 4 × [ 2 + 4 ]\n= (1/3) × 3.14 × 4 × 6\n= 3.14 × 8 = 25.12 cm³.\n\nStep 2: Dimensions and Volume of Circumscribing Cylinder:\n- Base radius of cylinder R = r = 2 cm\n- Height of cylinder H = Height of cone + Radius of hemisphere = 2 + 2 = 4 cm\nVolume of cylinder = π R² H = 3.14 × (2)² × 4 = 3.14 × 16 = 50.24 cm³.\n\nStep 3: Difference of Volumes:\nDifference = Volume of cylinder - Volume of toy\n= 50.24 - 25.12 = 25.12 cm³.\n\nConclusion:\n- Volume of toy = 25.12 cm³.\n- Difference in volume = 25.12 cm³.',
        stepMarking: [
          { step: 'Formulating volume of toy = (1/3)πr²h + (2/3)πr³', marks: '1.5 Marks' },
          { step: 'Calculating Volume of toy = 25.12 cm³', marks: '1 Mark' },
          { step: 'Cylinder height H = 4 cm and Volume = 50.24 cm³', marks: '1.5 Marks' },
          { step: 'Difference = 50.24 - 25.12 = 25.12 cm³', marks: '1 Mark' }
        ],
        examinerTip: 'Notice that total cylinder height is height of cone PLUS radius of hemisphere (2 + 2 = 4 cm).',
        commonPitfall: 'Taking cylinder height as 2 cm (forgetting the hemisphere depth).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q36 to Q38 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-math-24-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Sports Day AP Sprint (Arithmetic Progression)',
        questionText: 'During an annual sports day celebration, a school organized a relay competition. In a training module, an athlete runs 500 m on the first day and increases his daily running distance by 50 m each successive day.\n\n(i) Write the distance covered by the athlete on the 6th day. [1 Mark]\n(ii) On which day will the athlete run a distance of 1000 m? [1 Mark]\n(iii) (a) Find the total cumulative distance run by the athlete in the first 15 days. [2 Marks]\n                         OR\n(iii) (b) If the athlete runs for 20 days, what is the ratio of distance run on the 10th day to distance run on the 20th day? [2 Marks]',
        modelAnswer: 'Given:\nFirst term a = 500 m\nCommon difference d = 50 m\n\n(i) Distance on 6th day (a₆):\na₆ = a + (6 - 1)d = 500 + 5(50) = 500 + 250 = 750 m.\n\n(ii) Day on which distance is 1000 m (aₙ = 1000):\naₙ = a + (n - 1)d\n1000 = 500 + (n - 1)(50)\n500 = (n - 1)(50)\nn - 1 = 500 / 50 = 10 ⇒ n = 11.\nThus, on the 11th day, he will run 1000 m.\n\n(iii) (a) Cumulative distance in 15 days (S₁₅):\nSₙ = (n/2) [ 2a + (n - 1)d ]\nS₁₅ = (15/2) [ 2(500) + (15 - 1)(50) ]\n= (15/2) [ 1000 + 14(50) ]\n= (15/2) [ 1000 + 700 ]\n= (15/2) [ 1700 ] = 15 × 850 = 12,750 m (or 12.75 km).\n\nOR\n(iii) (b) Ratio of a₁₀ to a₂₀:\na₁₀ = a + 9d = 500 + 9(50) = 500 + 450 = 950 m.\na₂₀ = a + 19d = 500 + 19(50) = 500 + 950 = 1450 m.\nRatio = a₁₀ / a₂₀ = 950 / 1450 = 95 / 145 = 19 / 29.',
        stepMarking: [
          { step: '(i) a₆ = 750 m', marks: '1 Mark' },
          { step: '(ii) n = 11th day', marks: '1 Mark' },
          { step: '(iii)(a) S₁₅ = 12,750 m OR (iii)(b) Ratio = 19 : 29', marks: '2 Marks' }
        ],
        examinerTip: 'Units matter: write m or km explicitly.',
        commonPitfall: 'Using S₁₅ formula without dividing by 2.'
      },
      {
        id: 'c10-math-24-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: GPS Mapping & City Planning (Coordinate Geometry)',
        questionText: 'To set up a smart city transit system, the municipal corporation mapped key city centers on a Cartesian grid:\n- Bus Terminal A(2, 3)\n- Metro Station B(6, 7)\n- Central Hospital C(8, 3)\n\n(i) Find the distance between Bus Terminal A and Central Hospital C. [1 Mark]\n(ii) Find the coordinates of the midpoint of the direct corridor connecting A and B. [1 Mark]\n(iii) (a) A new ambulance station M is to be constructed on the segment AC such that it divides AC in the ratio 1 : 2. Find the coordinates of M. [2 Marks]\n                         OR\n(iii) (b) Check whether triangle ABC formed by the three transit hubs is an isosceles triangle or not by calculating lengths AB and BC. [2 Marks]',
        modelAnswer: '(i) Distance between A(2, 3) and C(8, 3):\nSince both points have the same y-coordinate (y = 3), the segment is horizontal:\nAC = | 8 - 2 | = 6 units (or √[(8 - 2)² + (3 - 3)²] = √36 = 6 units).\n\n(ii) Midpoint of corridor AB:\nMidpoint = ( (x_A + x_B)/2 , (y_A + y_B)/2 )\n= ( (2 + 6)/2 , (3 + 7)/2 ) = ( 8/2 , 10/2 ) = (4, 5).\n\n(iii) (a) Coordinates of M dividing AC in ratio 1 : 2:\nHere (x₁, y₁) = (2, 3), (x₂, y₂) = (8, 3), m₁ = 1, m₂ = 2.\nx = (m₁ x₂ + m₂ x₁) / (m₁ + m₂) = [ 1(8) + 2(2) ] / (1 + 2) = (8 + 4) / 3 = 12 / 3 = 4.\ny = (m₁ y₂ + m₂ y₁) / (m₁ + m₂) = [ 1(3) + 2(3) ] / (1 + 2) = (3 + 6) / 3 = 9 / 3 = 3.\nThus, Station M is at (4, 3).\n\nOR\n(iii) (b) Calculating lengths AB and BC:\nAB = √[ (6 - 2)² + (7 - 3)² ] = √[ 4² + 4² ] = √(16 + 16) = √32 = 4√2 units.\nBC = √[ (8 - 6)² + (3 - 7)² ] = √[ 2² + (-4)² ] = √(4 + 16) = √20 = 2√5 units.\nSince AB = √32, BC = √20, and AC = 6 (√36), no two sides are equal.\nTherefore, ΔABC is NOT an isosceles triangle (it is a scalene triangle).',
        stepMarking: [
          { step: '(i) Distance AC = 6 units', marks: '1 Mark' },
          { step: '(ii) Midpoint of AB = (4, 5)', marks: '1 Mark' },
          { step: '(iii)(a) Section formula coordinates M(4, 3) OR (iii)(b) AB = √32, BC = √20, not isosceles', marks: '2 Marks' }
        ],
        examinerTip: 'When y-coordinates are equal, distance is simply |x₂ - x₁|.',
        commonPitfall: 'Swapping m₁ and m₂ in section formula.'
      },
      {
        id: 'c10-math-24-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Health Survey & Blood Pressure (Statistics)',
        questionText: 'A health camp recorded the systolic blood pressure (in mm Hg) of 50 adult patients:\nBlood Pressure (mm Hg):  100-110 | 110-120 | 120-130 | 130-140 | 140-150\nNumber of Patients:        4     |    8    |   20    |   12    |    6\n\n(i) What is the modal class of the given distribution? [1 Mark]\n(ii) Find the class size and the lower limit of the median class (given N = 50). [1 Mark]\n(iii) (a) Calculate the mode of the given distribution. [2 Marks]\n                         OR\n(iii) (b) Calculate the mean blood pressure using the direct method. [2 Marks]',
        modelAnswer: '(i) Modal Class:\nThe class with the maximum frequency (f = 20) is 120 - 130.\n\n(ii) Class size h = 110 - 100 = 10.\nCumulative Frequencies:\n100-110: 4\n110-120: 12\n120-130: 32\n130-140: 44\n140-150: 50\nHere N/2 = 50/2 = 25. The cumulative frequency just greater than 25 is 32, which belongs to class 120 - 130.\nLower limit of median class (l) = 120.\n\n(iii) (a) Calculation of Mode:\nModal class = 120 - 130\nLower limit l = 120, h = 10\nFrequency of modal class f₁ = 20\nFrequency of preceding class f₀ = 8\nFrequency of succeeding class f₂ = 12\n\nMode = l + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h\n= 120 + [ (20 - 8) / (2(20) - 8 - 12) ] × 10\n= 120 + [ 12 / (40 - 20) ] × 10\n= 120 + [ 12 / 20 ] × 10\n= 120 + 6 = 126 mm Hg.\n\nOR\n(iii) (b) Calculation of Mean (Direct Method):\nClass Interval | xᵢ | fᵢ | fᵢ·xᵢ\n100 - 110      | 105|  4 | 420\n110 - 120      | 115|  8 | 920\n120 - 130      | 125| 20 | 2500\n130 - 140      | 135| 12 | 1620\n140 - 150      | 145|  6 | 870\nTotal Σfᵢ = 50; Σ(fᵢ·xᵢ) = 420 + 920 + 2500 + 1620 + 870 = 6330.\nMean x̄ = Σ(fᵢ·xᵢ) / Σfᵢ = 6330 / 50 = 126.6 mm Hg.',
        stepMarking: [
          { step: '(i) Modal class: 120 - 130', marks: '1 Mark' },
          { step: '(ii) Class size h = 10, Lower limit of median class = 120', marks: '1 Mark' },
          { step: '(iii)(a) Mode = 126 mm Hg OR (iii)(b) Mean = 126.6 mm Hg', marks: '2 Marks' }
        ],
        examinerTip: 'Always check that the calculated Mode (126) falls strictly inside the modal class interval [120, 130].',
        commonPitfall: 'Incorrect formula for 2f₁ - f₀ - f₂ in mode.'
      }
    ]
  }
];
