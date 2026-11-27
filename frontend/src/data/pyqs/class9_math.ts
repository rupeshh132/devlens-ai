import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_MATH_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. KVS CENTRALIZED ANNUAL EXAM 2024: CLASS 9 MATHEMATICS (COMPLETE - 38 Qs)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kvs-c9-math-2024-annual',
    title: 'KVS Centralized Annual Examination 2024: Class 9 Mathematics (Uniform Paper)',
    subject: 'Mathematics',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'KVS/RO/C9/MAT/24',
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
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-math-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Rational Numbers',
        questionText: 'Which of the following is a rational number?',
        options: [
          'A) √23',
          'B) √225',
          'C) 0.1010010001...',
          'D) π'
        ],
        correctOption: 'B',
        modelAnswer: 'B) √225.\n√225 = 15 = 15/1, which is of the form p/q where p, q are integers and q ≠ 0. Therefore, √225 is a rational number.\n√23 is non-terminating non-repeating (irrational), 0.1010010001... is non-terminating non-repeating, and π is an irrational number.',
        stepMarking: [
          { step: '√225 = 15 = 15/1 (p/q form) ⇒ Rational (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Square roots of perfect squares (like 225 = 15²) are always rational numbers.',
        commonPitfall: 'Assuming all square root numbers are irrational.'
      },
      {
        id: 'c9-math-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Degree of Polynomial',
        questionText: 'The degree of the non-zero constant polynomial 7 is:',
        options: [
          'A) 1',
          'B) 0',
          'C) 7',
          'D) Not defined'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 0.\nAny non-zero constant number k can be written as k · x⁰ (since x⁰ = 1 for x ≠ 0). The exponent of the variable is 0, so the degree of a non-zero constant polynomial is 0.\n(Note: The degree of the zero polynomial 0 is not defined).',
        stepMarking: [
          { step: '7 = 7x⁰ ⇒ Degree is 0 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Non-zero constant polynomial has degree 0. Zero polynomial (0) has undefined degree.',
        commonPitfall: 'Writing degree 1 by confusing constant polynomial with linear polynomial.'
      },
      {
        id: 'c9-math-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Coordinate Geometry: Abscissa and Ordinate',
        questionText: 'The point whose abscissa is -3 and ordinate is 4 lies in which quadrant?',
        options: [
          'A) First quadrant (I)',
          'B) Second quadrant (II)',
          'C) Third quadrant (III)',
          'D) Fourth quadrant (IV)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Second quadrant (II).\nAbscissa is the x-coordinate (x = -3) and ordinate is the y-coordinate (y = 4).\nThe point is (-3, 4).\nIn the second quadrant, x is negative and y is positive (-, +). Hence, the point lies in Quadrant II.',
        stepMarking: [
          { step: 'Point (-3, 4) with (-, +) lies in Quadrant II (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Abscissa = x-axis coordinate; Ordinate = y-axis coordinate.',
        commonPitfall: 'Swapping abscissa and ordinate.'
      },
      {
        id: 'c9-math-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Linear Equations in Two Variables: Number of Solutions',
        questionText: 'The linear equation 2x + 3y = 6 has:',
        options: [
          'A) A unique solution',
          'B) Only two solutions',
          'C) Infinitely many solutions',
          'D) No solution'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Infinitely many solutions.\nA single linear equation in two variables ax + by + c = 0 represents a straight line on the Cartesian plane. Every point (x, y) lying on this infinite line is a solution, so it possesses infinitely many solutions.',
        stepMarking: [
          { step: 'Option C (Infinitely many solutions)', marks: '1 Mark' }
        ],
        examinerTip: 'A single linear equation in two variables has infinitely many solutions; a pair of linear equations can have a unique solution.',
        commonPitfall: 'Selecting unique solution.'
      },
      {
        id: 'c9-math-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Introduction to Euclid\'s Geometry: Axioms',
        questionText: 'According to Euclid\'s first axiom, things which are equal to the same thing are:',
        options: [
          'A) Parallel to each other',
          'B) Equal to one another',
          'C) Perpendicular to each other',
          'D) Double of one another'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Equal to one another.\nEuclid\'s Axiom 1 states: "Things which are equal to the same thing are equal to one another." (If a = c and b = c, then a = b).',
        stepMarking: [
          { step: 'Option B (Equal to one another)', marks: '1 Mark' }
        ],
        examinerTip: 'Axioms are assumptions obvious universal truths not specific to geometry; postulates are specific to geometry.',
        commonPitfall: 'Confusing axioms with theorems.'
      },
      {
        id: 'c9-math-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Lines and Angles: Complementary Angles',
        questionText: 'If an angle is equal to its complement, then the measure of the angle is:',
        options: [
          'A) 90°',
          'B) 45°',
          'C) 60°',
          'D) 30°'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 45°.\nTwo angles are complementary if their sum is 90°.\nLet the angle be x. Its complement is also x.\nx + x = 90° ⇒ 2x = 90° ⇒ x = 45°.',
        stepMarking: [
          { step: 'x + x = 90° ⇒ x = 45° (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Complementary sum = 90°; Supplementary sum = 180° (angle equal to supplement is 90°).',
        commonPitfall: 'Selecting 90° (which is the sum, not the angle).'
      },
      {
        id: 'c9-math-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Triangles: Triangle Inequality',
        questionText: 'Which of the following sets of lengths can form the three sides of a triangle?',
        options: [
          'A) 2 cm, 3 cm, 5 cm',
          'B) 3 cm, 4 cm, 8 cm',
          'C) 4 cm, 5 cm, 6 cm',
          'D) 1 cm, 2 cm, 4 cm'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 4 cm, 5 cm, 6 cm.\nBy Triangle Inequality Theorem, the sum of any two sides of a triangle must be strictly greater than the third side:\nIn (C): 4 + 5 = 9 > 6; 5 + 6 = 11 > 4; 4 + 6 = 10 > 5. (Valid triangle).\nIn (A): 2 + 3 = 5 (Not greater than 5, flat line).\nIn (B): 3 + 4 = 7 < 8 (Invalid).',
        stepMarking: [
          { step: 'Check 4 + 5 = 9 > 6 ⇒ Valid (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Sum of the two shorter sides must be strictly greater than the longest side.',
        commonPitfall: 'Choosing Option A (2 + 3 = 5 is equal, not strictly greater).'
      },
      {
        id: 'c9-math-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Quadrilaterals: Angles of a Quadrilateral',
        questionText: 'The angles of a quadrilateral are in the ratio 3 : 5 : 9 : 13. The smallest angle of the quadrilateral is:',
        options: [
          'A) 36°',
          'B) 60°',
          'C) 108°',
          'D) 24°'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 36°.\nSum of all four interior angles of a quadrilateral is 360°.\nLet the angles be 3x, 5x, 9x, and 13x.\n3x + 5x + 9x + 13x = 360°\n30x = 360° ⇒ x = 360 / 30 = 12°.\nSmallest angle = 3x = 3 × 12° = 36°.',
        stepMarking: [
          { step: '30x = 360° ⇒ x = 12°', marks: '0.5 Mark' },
          { step: 'Smallest angle = 3(12) = 36° (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Check: Largest angle = 13 × 12 = 156°. Sum = 36 + 60 + 108 + 156 = 360°.',
        commonPitfall: 'Calculating only x = 12 and forgetting to multiply by 3.'
      },
      {
        id: 'c9-math-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Circles: Angle Subtended by Arc at Center',
        questionText: 'In a circle with centre O, an arc AB subtends an angle of 100° at the centre. The angle subtended by this arc at any point on the remaining part of the circle is:',
        options: [
          'A) 100°',
          'B) 50°',
          'C) 200°',
          'D) 80°'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 50°.\nBy Theorem 10.8 (NCERT Class 9 Circles), the angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle:\n∠AOB = 2 ∠APB ⇒ ∠APB = ∠AOB / 2 = 100° / 2 = 50°.',
        stepMarking: [
          { step: 'Angle at circumference = (1/2) Angle at center = 100°/2 = 50° (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Angle at centre is TWICE angle at perimeter.',
        commonPitfall: 'Multiplying by 2 to get 200° instead of dividing.'
      },
      {
        id: 'c9-math-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Heron\'s Formula: Area of Equilateral Triangle',
        questionText: 'The area of an equilateral triangle with side length a is given by:',
        options: [
          'A) (√3 / 4) a²',
          'B) (√3 / 2) a²',
          'C) √3 a²',
          'D) (1 / 2) a²'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (√3 / 4) a².\nFor an equilateral triangle with sides a, b = a, c = a:\nSemi-perimeter s = (a + a + a)/2 = 3a/2.\nBy Heron\'s Formula:\nArea = √[ s(s - a)(s - b)(s - c) ] = √[ (3a/2) (a/2) (a/2) (a/2) ]\n= √[ (3a⁴) / 16 ] = (√3 / 4) a².',
        stepMarking: [
          { step: 'Area = (√3 / 4) a² (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Altitude of equilateral triangle is (√3 / 2)a; Area is (√3 / 4)a².',
        commonPitfall: 'Confusing altitude (√3/2 a) with area (√3/4 a²).'
      },
      {
        id: 'c9-math-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Surface Areas and Volumes: Curved Surface Area of Cone',
        questionText: 'The radius of the base of a cone is 7 cm and its slant height is 10 cm. Its curved surface area is: (Take π = 22/7)',
        options: [
          'A) 220 cm²',
          'B) 154 cm²',
          'C) 374 cm²',
          'D) 440 cm²'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 220 cm².\nCurved Surface Area (CSA) of cone = π r l\n= (22 / 7) × 7 cm × 10 cm = 22 × 10 = 220 cm².',
        stepMarking: [
          { step: 'CSA = π r l = (22/7) × 7 × 10 = 220 cm² (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Total Surface Area would be πr(l + r) = 220 + 154 = 374 cm².',
        commonPitfall: 'Calculating total surface area (374 cm²) instead of curved surface area.'
      },
      {
        id: 'c9-sci-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Surface Areas & Volumes: Volume of Hemisphere',
        questionText: 'If the radius of a solid hemisphere is 3 cm, its volume is: (Take π = 22/7)',
        options: [
          'A) 18π cm³',
          'B) 36π cm³',
          'C) 9π cm³',
          'D) 27π cm³'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 18π cm³.\nVolume of hemisphere = (2/3) π r³\n= (2/3) × π × (3)³\n= (2/3) × π × 27 = 2 × 9π = 18π cm³.',
        stepMarking: [
          { step: 'Volume = (2/3) π (3)³ = 18π cm³ (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Volume of whole sphere is (4/3)πr³; Hemisphere is exactly half: (2/3)πr³.',
        commonPitfall: 'Using full sphere formula and getting 36π cm³.'
      },
      {
        id: 'c9-math-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Number Systems: Laws of Exponents',
        questionText: 'The value of (64)^(-1/6) is:',
        options: [
          'A) 2',
          'B) 1/2',
          'C) -2',
          'D) 1/64'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 1/2.\nWe know 64 = 2⁶.\n(64)^(-1/6) = (2⁶)^(-1/6) = 2^(6 × (-1/6)) = 2^(-1) = 1/2.',
        stepMarking: [
          { step: '64 = 2⁶ ⇒ (2⁶)^(-1/6) = 2⁻¹ = 1/2 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Negative power means reciprocal: a⁻ⁿ = 1/aⁿ.',
        commonPitfall: 'Selecting -2 due to the negative exponent.'
      },
      {
        id: 'c9-math-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Polynomials: Value of Polynomial',
        questionText: 'If p(x) = 5x - 4x² + 3, then the value of p(-1) is:',
        options: [
          'A) 4',
          'B) -6',
          'C) 2',
          'D) -2'
        ],
        correctOption: 'B',
        modelAnswer: 'B) -6.\nSubstitute x = -1 into p(x):\np(-1) = 5(-1) - 4(-1)² + 3\n= -5 - 4(1) + 3\n= -5 - 4 + 3 = -9 + 3 = -6.',
        stepMarking: [
          { step: 'p(-1) = 5(-1) - 4(-1)² + 3 = -5 - 4 + 3 = -6 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Remember (-1)² = +1, so -4(-1)² = -4(1) = -4.',
        commonPitfall: 'Squaring -1 to -1 and calculating +4.'
      },
      {
        id: 'c9-math-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Linear Equations: Point on Line',
        questionText: 'If the point (3, 4) lies on the graph of the equation 3y = ax + 7, then the value of a is:',
        options: [
          'A) 5/3',
          'B) 1',
          'C) 3/5',
          'D) 5'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 5/3.\nSince the point (3, 4) lies on the line, x = 3 and y = 4 must satisfy the equation:\n3(4) = a(3) + 7\n12 = 3a + 7\n3a = 12 - 7 = 5\na = 5/3.',
        stepMarking: [
          { step: '3(4) = 3a + 7 ⇒ 3a = 5 ⇒ a = 5/3 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Substitute x = 3 and y = 4 cleanly.',
        commonPitfall: 'Swapping x and y (putting x = 4, y = 3).'
      },
      {
        id: 'c9-math-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Circles: Cyclic Quadrilateral Property',
        questionText: 'In a cyclic quadrilateral ABCD, if ∠A = 70°, then the measure of opposite angle ∠C is:',
        options: [
          'A) 70°',
          'B) 110°',
          'C) 90°',
          'D) 20°'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 110°.\nThe sum of either pair of opposite angles of a cyclic quadrilateral is always 180°:\n∠A + ∠C = 180°\n70° + ∠C = 180° ⇒ ∠C = 180° - 70° = 110°.',
        stepMarking: [
          { step: '∠A + ∠C = 180° ⇒ ∠C = 180° - 70° = 110° (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Opposite angles of a cyclic quadrilateral are supplementary (sum = 180°).',
        commonPitfall: 'Assuming opposite angles are equal (that is only true for parallelograms).'
      },
      {
        id: 'c9-math-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Lines and Angles: Vertically Opposite Angles',
        questionText: 'Two lines AB and CD intersect at O. If ∠AOC + ∠BOE = 70° and ∠BOD = 40°, then the measure of ∠AOC is:',
        options: [
          'A) 40°',
          'B) 30°',
          'C) 70°',
          'D) 110°'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 40°.\nLines AB and CD intersect at O.\n∠AOC and ∠BOD are vertically opposite angles.\nTherefore, ∠AOC = ∠BOD = 40°.',
        stepMarking: [
          { step: 'Vertically opposite angles ∠AOC = ∠BOD = 40° (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Vertically opposite angles formed by two intersecting straight lines are always equal.',
        commonPitfall: 'Subtracting 40 from 70 to get 30° (30° is ∠BOE, not ∠AOC).'
      },
      {
        id: 'c9-math-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Statistics: Width of Class Interval',
        questionText: 'In the class intervals 10-20, 20-30, 30-40, the width (size) of each class interval is:',
        options: [
          'A) 10',
          'B) 15',
          'C) 20',
          'D) 5'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 10.\nClass width (size) = Upper Class Limit - Lower Class Limit\n= 20 - 10 = 10.',
        stepMarking: [
          { step: 'Class size = 20 - 10 = 10 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Class size = Upper - Lower limit; Class mark = (Upper + Lower) / 2.',
        commonPitfall: 'Calculating class mark 15 instead of class width.'
      },
      {
        id: 'c9-math-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Factor Theorem Application',
        questionText: 'Assertion (A): (x - 1) is a factor of the polynomial p(x) = x³ - 3x² + 3x - 1.\nReason (R): If p(a) = 0, then (x - a) is a factor of the polynomial p(x).\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nBy Factor Theorem, (x - 1) is a factor of p(x) if p(1) = 0.\nEvaluating p(1):\np(1) = (1)³ - 3(1)² + 3(1) - 1 = 1 - 3 + 3 - 1 = 0.\nSince p(1) = 0, (x - 1) is indeed a factor. Reason (R) states the Factor Theorem accurately and explains Assertion (A).',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Factor Theorem is a direct consequence of the Remainder Theorem where remainder R = p(a) = 0.',
        commonPitfall: 'Checking root -1 instead of +1.'
      },
      {
        id: 'c9-math-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Angle in a Semicircle',
        questionText: 'Assertion (A): The angle subtended by a diameter of a circle at any point on the circle is a right angle (90°).\nReason (R): The angle subtended by an arc at the centre of a circle is double the angle subtended by it at any point on the remaining part of the circle.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nA diameter forms a semicircle whose arc subtends a straight angle of 180° at the centre. By the angle subtended at the centre theorem (Reason R), the angle on the semicircle is 180° / 2 = 90°. Hence, Reason (R) is the complete geometric proof of Assertion (A).',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Angle in a semicircle is ALWAYS 90°.',
        commonPitfall: 'Marking Option B without noticing R provides the exact deduction for A.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q21 to Q25 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-math-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Number Systems: Expressing Recurring Decimal as p/q',
        questionText: 'Express 0.47̄ (0.4777...) in the form p/q, where p and q are integers and q ≠ 0.',
        modelAnswer: 'Let x = 0.4777...    ...(Equation 1)\n\nMultiply equation (1) by 10 to shift non-repeating digit to left:\n10x = 4.777...    ...(Equation 2)\n\nMultiply equation (2) by 10 (since 1 digit repeats):\n100x = 47.777...    ...(Equation 3)\n\nSubtract Equation (2) from Equation (3):\n100x - 10x = 47.777... - 4.777...\n90x = 43\nx = 43 / 90.\n\nTherefore, 0.47̄ = 43/90.',
        stepMarking: [
          { step: 'Setting up 10x = 4.777... and 100x = 47.777...', marks: '1 Mark' },
          { step: 'Subtracting: 90x = 43 ⇒ x = 43/90', marks: '1 Mark' }
        ],
        examinerTip: 'Check: 43 / 90 = 0.4777... matches perfectly.',
        commonPitfall: 'Subtracting from x directly: 100x - x = 47.33 (leads to decimals in fraction).'
      },
      {
        id: 'c9-math-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Polynomials: Factorization using Identity',
        questionText: 'Factorize: 8x³ + y³ + 27z³ - 18xyz using a suitable algebraic identity.',
        modelAnswer: 'Rewrite in terms of cubes:\n(2x)³ + (y)³ + (3z)³ - 3(2x)(y)(3z)\n\nUsing identity:\na³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)\n\nHere a = 2x, b = y, c = 3z:\n= (2x + y + 3z) [ (2x)² + (y)² + (3z)² - (2x)(y) - (y)(3z) - (3z)(2x) ]\n= (2x + y + 3z)(4x² + y² + 9z² - 2xy - 3yz - 6zx).',
        stepMarking: [
          { step: 'Recognizing form a³ + b³ + c³ - 3abc with a=2x, b=y, c=3z', marks: '1 Mark' },
          { step: 'Factored form: (2x + y + 3z)(4x² + y² + 9z² - 2xy - 3yz - 6zx)', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure you square 2x as 4x² and 3z as 9z².',
        commonPitfall: 'Writing 2x² or 3z² instead of 4x² and 9z².'
      },
      {
        id: 'c9-math-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Lines and Angles: Parallel Lines Transversal Problem',
        questionText: 'In the given figure, if AB || CD, ∠APQ = 50°, and ∠PRD = 127°, find the values of x and y.',
        modelAnswer: '1. Finding x:\nSince AB || CD and transversal PQ intersects them:\n∠PQR = ∠APQ (Alternate interior angles)\nTherefore, x = 50°.\n\n2. Finding y:\nSince AB || CD and transversal PR intersects them:\n∠APR = ∠PRD (Alternate interior angles)\nFrom figure, ∠APR = ∠APQ + y\n50° + y = 127°\ny = 127° - 50° = 77°.\n\nThus, x = 50° and y = 77°.',
        stepMarking: [
          { step: 'x = 50° (alternate interior angles)', marks: '1 Mark' },
          { step: '50° + y = 127° ⇒ y = 77°', marks: '1 Mark' }
        ],
        examinerTip: 'State the geometric reason "Alternate interior angles" in parentheses.',
        commonPitfall: 'Using linear pair incorrectly.'
      },
      {
        id: 'c9-math-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Triangles: Angles Opposite to Equal Sides',
        questionText: 'In ΔABC, the bisector AD of ∠A is perpendicular to the side BC. Show that ΔABC is an isosceles triangle.',
        modelAnswer: 'In ΔABD and ΔACD:\n1. ∠BAD = ∠CAD (AD is the bisector of ∠A - Given)\n2. AD = AD (Common side)\n3. ∠ADB = ∠ADC = 90° (AD ⟂ BC - Given)\n\nTherefore, by ASA (or AAS) congruence criterion:\nΔABD ≅ ΔACD.\n\nBy CPCT (Corresponding Parts of Congruent Triangles):\nAB = AC.\n\nSince two sides of ΔABC are equal, ΔABC is an isosceles triangle.\nHence proved.',
        stepMarking: [
          { step: 'Proving ΔABD ≅ ΔACD by ASA congruence rule', marks: '1.5 Marks' },
          { step: 'AB = AC by CPCT ⇒ ΔABC is isosceles', marks: '0.5 Mark' }
        ],
        examinerTip: 'ASA requires two angles and the included side (here AD is included between the two angles).',
        commonPitfall: 'Using SSA criterion (which is invalid).'
      },
      {
        id: 'c9-math-24-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Heron\'s Formula: Triangular Park Area',
        questionText: 'Find the area of a triangular park whose sides are 40 m, 24 m, and 32 m using Heron\'s formula.',
        modelAnswer: 'Given sides:\na = 40 m, b = 24 m, c = 32 m.\n\nStep 1: Semi-perimeter s:\ns = (a + b + c) / 2 = (40 + 24 + 32) / 2 = 96 / 2 = 48 m.\n\nStep 2: Apply Heron\'s Formula:\ns - a = 48 - 40 = 8 m\ns - b = 48 - 24 = 24 m\ns - c = 48 - 32 = 16 m\n\nArea = √[ s(s - a)(s - b)(s - c) ]\n= √[ 48 × 8 × 24 × 16 ]\n= √[ (24 × 2) × 8 × 24 × 16 ]\n= √[ 24² × 16 × 16 ]\n= 24 × 16 = 384 m².\n\nTherefore, the area of the triangular park is 384 m².',
        stepMarking: [
          { step: 'Semi-perimeter s = 48 m and calculating (s-a), (s-b), (s-c)', marks: '1 Mark' },
          { step: 'Area = √[48 × 8 × 24 × 16] = 384 m²', marks: '1 Mark' }
        ],
        examinerTip: 'Check with right triangle formula: 24² + 32² = 576 + 1024 = 1600 = 40². Area = 1/2 × 24 × 32 = 384 m².',
        commonPitfall: 'Arithmetic error when multiplying large numbers under the radical.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER QUESTIONS (Q26 to Q31 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-math-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Number Systems: Rationalization of Denominator',
        questionText: 'Find the values of a and b if: (7 + √5) / (7 - √5) - (7 - √5) / (7 + √5) = a + b√5.',
        modelAnswer: 'LHS = [ (7 + √5) / (7 - √5) ] - [ (7 - √5) / (7 + √5) ]\n\nTake common denominator:\n= [ (7 + √5)² - (7 - √5)² ] / [ (7 - √5)(7 + √5) ]\n\nUsing algebraic identity (x + y)² - (x - y)² = 4xy:\nHere x = 7, y = √5:\nNumerator = 4(7)(√5) = 28√5.\n\nDenominator:\n(7 - √5)(7 + √5) = 7² - (√5)² = 49 - 5 = 44.\n\nSubstitute back:\nLHS = 28√5 / 44 = (7/11) √5 = 0 + (7/11) √5.\n\nEquating to a + b√5:\na = 0\nb = 7/11.',
        stepMarking: [
          { step: 'Common denominator: [(7+√5)² - (7-√5)²] / (49 - 5)', marks: '1.5 Marks' },
          { step: 'Simplifying numerator to 28√5 and fraction to (7/11)√5', marks: '1 Mark' },
          { step: 'Comparing coefficients: a = 0, b = 7/11', marks: '0.5 Mark' }
        ],
        examinerTip: 'Using identity (x + y)² - (x - y)² = 4xy saves massive expansion time.',
        commonPitfall: 'Leaving a undefined instead of writing a = 0.'
      },
      {
        id: 'c9-math-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Polynomials: Cubic Factorization by Factor Theorem',
        questionText: 'Factorize the cubic polynomial: p(x) = x³ - 23x² + 142x - 120.',
        modelAnswer: 'Factors of constant term -120 are ±1, ±2, ±3, ±4, ±5...\n\nStep 1: Find one zero by trial:\nPut x = 1:\np(1) = 1³ - 23(1)² + 142(1) - 120 = 1 - 23 + 142 - 120 = 143 - 143 = 0.\nBy Factor Theorem, (x - 1) is a factor of p(x).\n\nStep 2: Polynomial division of p(x) by (x - 1):\nx³ - 23x² + 142x - 120 = (x - 1)(x² - 22x + 120).\n\nStep 3: Factorize the quadratic polynomial x² - 22x + 120:\nFind two numbers whose product is 120 and sum is -22.\nThe numbers are -10 and -12 (since -10 × -12 = 120 and -10 - 12 = -22):\nx² - 22x + 120 = x² - 10x - 12x + 120 = x(x - 10) - 12(x - 10) = (x - 10)(x - 12).\n\nStep 4: Final Factored Form:\np(x) = (x - 1)(x - 10)(x - 12).',
        stepMarking: [
          { step: 'Finding p(1) = 0 and establishing (x - 1) as factor', marks: '1 Mark' },
          { step: 'Dividing p(x) to get quotient x² - 22x + 120', marks: '1 Mark' },
          { step: 'Splitting middle term to get (x - 1)(x - 10)(x - 12)', marks: '1 Mark' }
        ],
        examinerTip: 'Cubic polynomial must have three linear factors.',
        commonPitfall: 'Stopping at the quadratic quotient without factoring it.'
      },
      {
        id: 'c9-math-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Quadrilaterals: Parallelogram Diagonal Properties',
        questionText: 'Prove that the diagonals of a parallelogram bisect each other.',
        modelAnswer: '1. Given:\nA parallelogram ABCD in which diagonals AC and BD intersect at O.\n\n2. To Prove:\nOA = OC and OB = OD.\n\n3. Proof:\nIn ΔAOD and ΔCOB:\n- AD = BC (Opposite sides of a parallelogram are equal)\n- ∠OAD = ∠OCB (Alternate interior angles, since AD || BC and AC is transversal)\n- ∠ODA = ∠OBC (Alternate interior angles, since AD || BC and BD is transversal)\n\nTherefore, by ASA Congruence Criterion:\nΔAOD ≅ ΔCOB.\n\nBy CPCT (Corresponding Parts of Congruent Triangles):\nOA = OC\nOD = OB.\n\nHence, the diagonals bisect each other.\nHence proved.',
        stepMarking: [
          { step: 'Given, To Prove, and clear diagram description', marks: '1 Mark' },
          { step: 'Congruence of ΔAOD and ΔCOB via ASA rule', marks: '1.5 Marks' },
          { step: 'CPCT conclusion: OA = OC and OB = OD', marks: '0.5 Mark' }
        ],
        examinerTip: 'Theorem 8.6 of NCERT Class 9 Quadrilaterals.',
        commonPitfall: 'Assuming diagonals are perpendicular (that is true only for rhombus and square).'
      },
      {
        id: 'c9-math-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Circles: Perpendicular from Center to Chord Bisects Chord',
        questionText: 'Prove that the perpendicular drawn from the centre of a circle to a chord bisects the chord.',
        modelAnswer: '1. Given:\nA circle with centre O and a chord AB. OM is perpendicular to AB (OM ⟂ AB).\n\n2. To Prove:\nAM = MB (M is the midpoint of AB).\n\n3. Construction:\nJoin OA and OB.\n\n4. Proof:\nIn right-angled triangles ΔOMA and ΔOMB:\n- ∠OMA = ∠OMB = 90° (Given OM ⟂ AB)\n- OA = OB (Radii of the same circle - Hypotenuse)\n- OM = OM (Common side)\n\nBy RHS Congruence Criterion:\nΔOMA ≅ ΔOMB.\n\nBy CPCT:\nAM = MB.\n\nTherefore, the perpendicular from the centre bisects the chord.\nHence proved.',
        stepMarking: [
          { step: 'Given, To Prove, and Construction (Join OA, OB)', marks: '1 Mark' },
          { step: 'Proving ΔOMA ≅ ΔOMB by RHS rule', marks: '1.5 Marks' },
          { step: 'AM = MB by CPCT', marks: '0.5 Mark' }
        ],
        examinerTip: 'Theorem 10.3 of NCERT Class 9 Circles.',
        commonPitfall: 'Using SAS instead of RHS (angle 90° is opposite hypotenuse, not included).'
      },
      {
        id: 'c9-math-24-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Surface Areas & Volumes: Conical Tent Canvas Calculation',
        questionText: 'A conical tent is 10 m high and the radius of its base is 24 m. Find:\n(a) Slant height of the tent.\n(b) Cost of the canvas required to make the tent, if the cost of 1 m² canvas is ₹ 70. (Take π = 22/7).',
        modelAnswer: 'Given data:\nHeight h = 10 m\nBase radius r = 24 m\n\n(a) Slant Height (l):\nl = √(r² + h²) = √[ 24² + 10² ] = √[ 576 + 100 ] = √676 = 26 m.\n\n(b) Canvas Required & Cost:\nA tent does not have canvas on the floor base, so only Curved Surface Area (CSA) is required:\nCSA = π r l = (22 / 7) × 24 m × 26 m = (22 × 624) / 7 = 13,728 / 7 m².\n\nTotal Cost of Canvas:\nCost = Area × Rate = (13,728 / 7) m² × ₹ 70/m²\n= 13,728 × 10 = ₹ 1,37,280.\n\nTherefore:\n(a) Slant height = 26 m.\n(b) Cost of canvas = ₹ 1,37,280.',
        stepMarking: [
          { step: '(a) Slant height l = √(24² + 10²) = 26 m', marks: '1 Mark' },
          { step: '(b) CSA = (22/7) × 24 × 26 = 13,728/7 m²', marks: '1 Mark' },
          { step: 'Cost = (13,728/7) × 70 = ₹ 1,37,280', marks: '1 Mark' }
        ],
        examinerTip: 'Notice how 7 in denominator cancels neatly with ₹ 70 rate. Do not convert to decimal too early.',
        commonPitfall: 'Including base area (tents do not have canvas on the ground).'
      },
      {
        id: 'c9-math-24-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Statistics: Histogram Construction with Varying Widths',
        questionText: 'A random survey of the number of children of various age groups playing in a park was found as follows:\nAge (in years):    1-2 | 2-3 | 3-5 | 5-7 | 7-10\nNumber of Children: 5  |  3  |  6  | 12  |  9\nExplain why frequency density adjustment is necessary to draw a histogram for this data and compute the adjusted frequency (height of rectangle) for each class.',
        modelAnswer: '1. Why Adjustment is Necessary:\nIn a histogram, the area of each rectangle represents the frequency, not merely its height. When class widths are unequal (varying from 1 to 3), drawing bars with height equal to raw frequency would distort areas and misrepresent data proportion. Therefore, heights must be adjusted proportionally to minimum class width.\n\n2. Adjusted Frequency Formula:\nHeight of rectangle = (Frequency of class / Class width) × Minimum class width\nHere minimum class width = 1.\n\nComputation Table:\nAge (years) | Frequency | Class Width (w) | Length of Rectangle (Height)\n1 - 2       |     5     |        1        | (5 / 1) × 1 = 5\n2 - 3       |     3     |        1        | (3 / 1) × 1 = 3\n3 - 5       |     6     |        2        | (6 / 2) × 1 = 3\n5 - 7       |    12     |        2        | (12 / 2) × 1 = 6\n7 - 10      |     9     |        3        | (9 / 3) × 1 = 3.',
        stepMarking: [
          { step: 'Explanation that area represents frequency for unequal class widths', marks: '1 Mark' },
          { step: 'Formula: Height = (Frequency / Width) × Minimum width', marks: '0.5 Mark' },
          { step: 'Table of calculated heights: 5, 3, 3, 6, 3', marks: '1.5 Marks' }
        ],
        examinerTip: 'Minimum class width here is 1 (for 1-2 and 2-3).',
        commonPitfall: 'Drawing histogram with raw frequencies 5, 3, 6, 12, 9.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q32 to Q35 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-math-24-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Polynomials: Algebraic Identity Proof and Application',
        questionText: '(a) If x + y + z = 0, prove that x³ + y³ + z³ = 3xyz.\n(b) Without actually calculating the cubes, find the numerical value of:\n    (-12)³ + (7)³ + (5)³.',
        modelAnswer: '(a) Proof of Identity:\nWe know the algebraic identity:\nx³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)\n\nGiven condition: x + y + z = 0.\nSubstituting x + y + z = 0 into RHS:\nx³ + y³ + z³ - 3xyz = (0) · (x² + y² + z² - xy - yz - zx)\nx³ + y³ + z³ - 3xyz = 0\n⇒ x³ + y³ + z³ = 3xyz.\n\nHence proved.\n\n(b) Numerical Evaluation of (-12)³ + (7)³ + (5)³:\nLet x = -12, y = 7, z = 5.\nCheck sum x + y + z:\nx + y + z = (-12) + 7 + 5 = -12 + 12 = 0.\n\nSince x + y + z = 0, we can apply the identity x³ + y³ + z³ = 3xyz:\n(-12)³ + (7)³ + (5)³ = 3 × (-12) × (7) × (5)\n= 3 × (-12) × 35\n= -36 × 35\n= -1,260.\n\nTherefore, (-12)³ + (7)³ + (5)³ = -1,260.',
        stepMarking: [
          { step: '(a) Stating identity and substituting x + y + z = 0 to prove x³ + y³ + z³ = 3xyz', marks: '2.5 Marks' },
          { step: '(b) Showing (-12) + 7 + 5 = 0', marks: '1 Mark' },
          { step: '(b) Calculating 3(-12)(7)(5) = -1,260', marks: '1.5 Marks' }
        ],
        examinerTip: 'The question specifically states "Without actually calculating cubes". If cubes are calculated directly, zero marks are awarded.',
        commonPitfall: 'Directly cubing 12³ = 1728 instead of using the identity.'
      },
      {
        id: 'c9-math-24-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Triangles: Midpoint Theorem State & Prove',
        questionText: 'State and prove the Midpoint Theorem for a triangle.',
        modelAnswer: 'Statement:\nThe line segment joining the midpoints of two sides of a triangle is parallel to the third side and is half of it.\n\nProof:\n1. Given:\nA triangle ABC in which D and E are the midpoints of sides AB and AC respectively.\n\n2. To Prove:\nDE || BC and DE = (1/2) BC.\n\n3. Construction:\nThrough vertex C, draw a line CF parallel to BA (CF || BA) to meet DE produced at point F.\n\n4. Proof:\nIn ΔADE and ΔCFE:\n- ∠AED = ∠CEF (Vertically opposite angles)\n- AE = CE (E is the midpoint of AC - Given)\n- ∠DAE = ∠FCE (Alternate interior angles, since AB || CF and AC is transversal)\n\nTherefore, by ASA Congruence Criterion:\nΔADE ≅ ΔCFE.\n\nBy CPCT:\nAD = CF    ...(1)\nDE = EF    ...(2)\n\nSince D is the midpoint of AB:\nAD = BD    ...(3)\n\nFrom (1) and (3):\nBD = CF.\nAlso, BD || CF (by construction since BA || CF).\n\nSince one pair of opposite sides (BD and CF) of quadrilateral BCFD are equal and parallel, BCFD is a Parallelogram.\n\nTherefore, opposite sides are parallel and equal:\nDF || BC ⇒ DE || BC (since D, E, F lie on the same line).\nAnd DF = BC.\nSince DE = EF from (2), DF = 2 DE:\n2 DE = BC ⇒ DE = (1/2) BC.\n\nHence, DE || BC and DE = (1/2) BC. Proved.',
        stepMarking: [
          { step: 'Accurate statement of Midpoint Theorem', marks: '1 Mark' },
          { step: 'Given, To Prove, and Construction (CF || BA meeting DE at F)', marks: '1 Mark' },
          { step: 'Congruence ΔADE ≅ ΔCFE by ASA and proving BCFD is parallelogram', marks: '2 Marks' },
          { step: 'Conclusion: DE || BC and DE = (1/2)BC', marks: '1 Mark' }
        ],
        examinerTip: 'Theorem 8.9 of NCERT Class 9 Quadrilaterals/Triangles.',
        commonPitfall: 'Forgetting the construction line CF || BA.'
      },
      {
        id: 'c9-math-24-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Circles: Cyclic Quadrilateral Opposite Angles Sum 180° Proof',
        questionText: 'Prove that the sum of either pair of opposite angles of a cyclic quadrilateral is 180°.',
        modelAnswer: '1. Given:\nA cyclic quadrilateral ABCD inscribed in a circle with centre O.\n\n2. To Prove:\n∠A + ∠C = 180° and ∠B + ∠D = 180°.\n\n3. Construction:\nJoin OB and OD.\n\n4. Proof:\nLet arc BCD subtend angle ∠BOD at the centre O and reflex ∠BOD on the other side.\n\nBy the Angle at the Centre Theorem (the angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle):\n\n1. For minor arc BCD:\n∠BOD = 2 ∠BAD = 2 ∠A    ...(Equation 1)\n\n2. For major arc BAD:\nReflex ∠BOD = 2 ∠BCD = 2 ∠C    ...(Equation 2)\n\nAdding Equation (1) and Equation (2):\n∠BOD + Reflex ∠BOD = 2 ∠A + 2 ∠C\n\nWe know that the sum of angles around a complete point is 360°:\n∠BOD + Reflex ∠BOD = 360°.\n\nTherefore:\n2(∠A + ∠C) = 360°\n∠A + ∠C = 360° / 2 = 180°.\n\nSince the sum of all four interior angles of quadrilateral ABCD is 360°:\n(∠A + ∠C) + (∠B + ∠D) = 360°\n180° + (∠B + ∠D) = 360°\n∠B + ∠D = 360° - 180° = 180°.\n\nHence, the sum of either pair of opposite angles is 180°.\nHence proved.',
        stepMarking: [
          { step: 'Given, To Prove, and Construction (Join OB, OD)', marks: '1 Mark' },
          { step: 'Minor arc angle ∠BOD = 2∠A and Major arc Reflex ∠BOD = 2∠C', marks: '2 Marks' },
          { step: 'Summing angles: 2(∠A + ∠C) = 360° ⇒ ∠A + ∠C = 180°', marks: '1 Mark' },
          { step: 'Proving ∠B + ∠D = 180° from angle sum property', marks: '1 Mark' }
        ],
        examinerTip: 'Theorem 10.11 of NCERT Class 9 Circles.',
        commonPitfall: 'Omitting the reflex angle at the centre.'
      },
      {
        id: 'c9-math-24-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Surface Areas & Volumes: Sphere & Cylinder Volume Equality',
        questionText: 'A hemispherical dome of a building needs to be painted. If the circumference of the base of the dome is 17.6 m, find the cost of painting it, given the cost of painting is ₹ 5 per 100 cm². (Take π = 22/7).',
        modelAnswer: 'Given:\nCircumference of base of hemispherical dome = 17.6 m.\n\nStep 1: Find Radius of Dome (r):\nCircumference = 2 π r\n17.6 = 2 × (22 / 7) × r\n17.6 = (44 / 7) r\nr = (17.6 × 7) / 44 = 0.4 × 7 = 2.8 m.\n\nStep 2: Curved Surface Area (CSA) of Dome to be Painted:\nOnly the outer curved surface of the dome is painted:\nCSA = 2 π r²\n= 2 × (22 / 7) × (2.8)²\n= 2 × (22 / 7) × 2.8 × 2.8\n= 2 × 22 × 0.4 × 2.8\n= 44 × 1.12 = 49.28 m².\n\nStep 3: Unit Conversion for Cost:\nRate is ₹ 5 per 100 cm².\n1 m² = (100 cm)² = 10,000 cm².\nCost per 1 m² = (10,000 / 100) × ₹ 5 = 100 × 5 = ₹ 500 per m².\n\nStep 4: Total Cost of Painting:\nTotal Cost = Area × Rate per m²\n= 49.28 m² × ₹ 500/m²\n= ₹ 24,640.\n\nConclusion:\nThe total cost of painting the dome is ₹ 24,640.',
        stepMarking: [
          { step: 'Finding radius r = 2.8 m from circumference 2πr = 17.6 m', marks: '1.5 Marks' },
          { step: 'Curved surface area = 2πr² = 49.28 m²', marks: '1.5 Marks' },
          { step: 'Converting rate: ₹ 5 per 100 cm² = ₹ 500/m²', marks: '1 Mark' },
          { step: 'Total cost = 49.28 × 500 = ₹ 24,640', marks: '1 Mark' }
        ],
        examinerTip: 'Carefully note rate units: 100 cm² is NOT 1 m²; 1 m² = 10,000 cm².',
        commonPitfall: 'Multiplying 49.28 by 5 directly without unit conversion.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q36 to Q38 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-math-24-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Playground Landscaping & Heron\'s Formula',
        questionText: 'A residential society has a triangular piece of land with sides 50 m, 65 m, and 65 m designated for a children\'s park. A gardener is hired to plant grass across the entire park and put a boundary wire around it leaving a 3 m gate.\n\n(i) What is the total perimeter of the park? [1 Mark]\n(ii) Find the length of wire needed for fencing leaving a 3 m wide gate. [1 Mark]\n(iii) (a) Calculate the total area of the park using Heron\'s formula. [2 Marks]\n                         OR\n(iii) (b) If the cost of turfing the park with grass is ₹ 15 per m², find the total cost of turfing. [2 Marks]',
        modelAnswer: '(i) Total Perimeter:\nPerimeter = 50 + 65 + 65 = 180 m.\n\n(ii) Fencing Wire Length:\nLength = Perimeter - Gate width = 180 m - 3 m = 177 m.\n\n(iii) (a) Area by Heron\'s Formula:\na = 50 m, b = 65 m, c = 65 m.\nSemi-perimeter s = 180 / 2 = 90 m.\ns - a = 90 - 50 = 40 m\ns - b = 90 - 65 = 25 m\ns - c = 90 - 65 = 25 m\n\nArea = √[ s(s - a)(s - b)(s - c) ]\n= √[ 90 × 40 × 25 × 25 ]\n= √[ 3600 × 625 ]\n= 60 × 25 = 1,500 m².\n\nOR\n(iii) (b) Total Turfing Cost:\nArea = 1,500 m²\nCost = Area × Rate = 1,500 m² × ₹ 15/m² = ₹ 22,500.',
        stepMarking: [
          { step: '(i) Perimeter = 180 m', marks: '1 Mark' },
          { step: '(ii) Fencing wire = 177 m', marks: '1 Mark' },
          { step: '(iii)(a) Area = 1,500 m² OR (iii)(b) Cost = ₹ 22,500', marks: '2 Marks' }
        ],
        examinerTip: 'Check: Isosceles triangle with base 50 and legs 65: altitude = √(65² - 25²) = √(4225 - 625) = √3600 = 60 m. Area = 1/2 × 50 × 60 = 1500 m².',
        commonPitfall: 'Forgetting to subtract the 3 m gate from the wire length.'
      },
      {
        id: 'c9-math-24-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Auto-Rickshaw Fare Structure (Linear Equations)',
        questionText: 'In a metropolitan city, the auto-rickshaw fare is structured as follows: For the first kilometre, the fare is ₹ 15, and for subsequent distance, it is ₹ 8 per kilometre. Taking distance covered as x km and total fare as ₹ y:\n\n(i) Write a linear equation in two variables x and y expressing this relation. [1 Mark]\n(ii) What will be the total fare for a journey of 12 km? [1 Mark]\n(iii) (a) If a commuter paid ₹ 135 as total fare, how many kilometres did he travel? [2 Marks]\n                         OR\n(iii) (b) Find the coordinates of two solutions of this equation and check if the graph passes through the origin (0, 0). [2 Marks]',
        modelAnswer: '(i) Linear Equation Formulation:\nTotal distance = x km.\nDistance after first kilometre = (x - 1) km.\nFare for first km = ₹ 15.\nFare for remaining distance = 8(x - 1).\nTotal fare y = 15 + 8(x - 1)\ny = 15 + 8x - 8\ny = 8x + 7 (or 8x - y + 7 = 0).\n\n(ii) Fare for 12 km journey (x = 12):\ny = 8(12) + 7 = 96 + 7 = ₹ 103.\n\n(iii) (a) Distance for ₹ 135 fare (y = 135):\n135 = 8x + 7\n8x = 135 - 7 = 128\nx = 128 / 8 = 16 km.\nThe commuter travelled 16 km.\n\nOR\n(iii) (b) Two Solutions and Origin Check:\n- When x = 1: y = 8(1) + 7 = 15 ⇒ (1, 15)\n- When x = 2: y = 8(2) + 7 = 23 ⇒ (2, 23)\nOrigin Check (0, 0): Substitute x = 0, y = 0 into equation:\n0 = 8(0) + 7 ⇒ 0 = 7 (False).\nHence, the graph does NOT pass through the origin (due to the initial fixed charge flag fall of ₹ 7).',
        stepMarking: [
          { step: '(i) Linear equation: y = 8x + 7', marks: '1 Mark' },
          { step: '(ii) Fare for 12 km = ₹ 103', marks: '1 Mark' },
          { step: '(iii)(a) x = 16 km OR (iii)(b) Solutions (1, 15), (2, 23) and does not pass through origin', marks: '2 Marks' }
        ],
        examinerTip: 'Notice the distance for the ₹ 8 rate is (x - 1), NOT x.',
        commonPitfall: 'Writing y = 15x + 8 instead of y = 8x + 7.'
      },
      {
        id: 'c9-math-24-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Circular Garden Seating (Circles)',
        questionText: 'Three students Reshma, Salma, and Mandip are standing on a circle of radius 5 m drawn in a park. Reshma throws a ball to Salma, Salma to Mandip, and Mandip to Reshma. The distance between Reshma and Salma is 6 m and between Salma and Mandip is 6 m.\n\n(i) What is the radius of the circular boundary? [1 Mark]\n(ii) State the relation between chord length and perpendicular distance from the centre. [1 Mark]\n(iii) (a) Calculate the distance between Reshma and Mandip. [2 Marks]\n                         OR\n(iii) (b) If O is the centre of the park, find the area of triangle ORS formed by the centre, Reshma, and Salma. [2 Marks]',
        modelAnswer: '(i) Radius of the circle:\nr = 5 m (Given).\n\n(ii) Relation:\nThe perpendicular from the centre to a chord bisects the chord, and longer chords are closer to the centre than shorter chords (d = √(r² - (chord/2)²)).\n\n(iii) (a) Distance between Reshma (R) and Mandip (M):\nLet O be centre of circle.\nRS = 6 m, SM = 6 m, OR = OS = OM = 5 m.\nDraw OL ⟂ RS. Since OL bisects chord RS:\nRL = 6/2 = 3 m.\nIn right ΔOLR: OL = √(OR² - RL²) = √(5² - 3²) = √(25 - 9) = √16 = 4 m.\n\nArea of ΔORS = (1/2) × Base × Height = (1/2) × RS × OL = (1/2) × 6 × 4 = 12 m².\n\nNow, let the line segment joining R and M intersect OS at K.\nSince triangle RSM is isosceles (RS = SM = 6 m) and OR = OM, OS is the perpendicular bisector of RM (RK ⟂ OS and RM = 2 RK).\n\nAlso, Area of ΔORS can be written taking OS as base and RK as height:\nArea(ΔORS) = (1/2) × OS × RK\n12 = (1/2) × 5 × RK\n24 = 5 RK ⇒ RK = 24 / 5 = 4.8 m.\n\nDistance between Reshma and Mandip RM = 2 × RK = 2 × 4.8 = 9.6 m.\n\nOR\n(iii) (b) Area of ΔORS:\nBase RS = 6 m, Height OL = 4 m.\nArea = (1/2) × 6 × 4 = 12 m².',
        stepMarking: [
          { step: '(i) Radius = 5 m', marks: '1 Mark' },
          { step: '(ii) Perpendicular from centre bisects chord', marks: '1 Mark' },
          { step: '(iii)(a) OL = 4 m, Area = 12 m², RK = 4.8 m, RM = 9.6 m OR (iii)(b) Area = 12 m²', marks: '2 Marks' }
        ],
        examinerTip: 'Classic NCERT problem: Equating two expressions for the area of triangle ORS: (1/2) × RS × OL = (1/2) × OS × RK.',
        commonPitfall: 'Assuming RM is a diameter (it is a chord of length 9.6 m, not 10 m).'
      }
    ]
  }
];
