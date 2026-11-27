import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_10_MATH_BATCH4_PAPERS: PyqPaper[] = [
  {
    "id": "model-c10-math-2024-dps",
    "title": "DPS Noida Class 10 Mathematics (Standard) Pre-Board Model Paper",
    "subject": "Mathematics",
    "targetClass": "Class 10",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "DPS/C10/MAT-01",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper has 5 Sections A, B, C, D, and E comprising 38 compulsory questions.",
      "Section A has 20 MCQs (Q1–Q18) and Assertion-Reason (Q19–Q20) carrying 1 mark each.",
      "Section B has 5 Very Short Answer questions carrying 2 marks each.",
      "Section C has 6 Short Answer questions carrying 3 marks each.",
      "Section D has 4 Long Answer questions carrying 5 marks each.",
      "Section E has 3 case-based integrated units of assessment (4 marks each) with sub-parts."
    ],
    "questions": [
      {
        "id": "model-c10-math-2024-dps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "AP: Sum of First n Odd Natural Numbers",
        "questionText": "The sum of the first 20 odd natural numbers (1 + 3 + 5 + ... up to 20 terms) is:",
        "options": [
          "A) 200",
          "B) 400",
          "C) 420",
          "D) 380"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. a = 1, d = 2, n = 20. S₂₀ = 20/2 [2(1) + 19(2)] = 10 × 40 = 400 (also formula n² = 20² = 400).",
        "stepMarking": [
          {
            "step": "S₂₀ = 400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of first n odd natural numbers is always n².",
        "commonPitfall": "Stopping at the 20th term (39) instead of sum."
      },
      {
        "id": "model-c10-math-2024-dps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: HCF and LCM Relation",
        "questionText": "If two positive integers p and q can be expressed as p = a²b³ and q = a³b where a, b are prime numbers, then LCM(p, q) is:",
        "options": [
          "A) ab",
          "B) a²b",
          "C) a³b³",
          "D) a⁵b⁴"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. LCM takes the highest power of each prime factor involved: max power of a is 3 (a³) and max power of b is 3 (b³), so LCM(p, q) = a³b³.",
        "stepMarking": [
          {
            "step": "Select highest exponents a³ and b³ -> a³b³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "HCF = smallest power of common primes; LCM = greatest power of each prime.",
        "commonPitfall": "Marking HCF (a²b) instead of LCM (a³b³)."
      },
      {
        "id": "model-c10-math-2024-dps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: Composite & Prime Factorisation",
        "questionText": "The exponent of 2 in the prime factorisation of 144 is:",
        "options": [
          "A) 2",
          "B) 3",
          "C) 4",
          "D) 6"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 144 = 16 × 9 = 2⁴ × 3². Therefore, the exponent of 2 is 4.",
        "stepMarking": [
          {
            "step": "144 = 2⁴ × 3² -> exponent 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: question asks the exponent of 2, not 2⁴ itself.",
        "commonPitfall": "Confusing 2⁴ with 2 or 16."
      },
      {
        "id": "model-c10-math-2024-dps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Sum and Product of Zeroes",
        "questionText": "If α and β are the zeroes of the quadratic polynomial p(x) = x² - 5x + 6, then the value of α² + β² is:",
        "options": [
          "A) 13",
          "B) 25",
          "C) 19",
          "D) 37"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. α + β = 5, αβ = 6. Using α² + β² = (α + β)² - 2αβ = 25 - 12 = 13.",
        "stepMarking": [
          {
            "step": "Apply (α+β)² - 2αβ = 25 - 12 = 13",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetric identities (α+β)² - 2αβ instead of solving roots every time.",
        "commonPitfall": "Computing (α + β)² = 25 and forgetting -2αβ."
      },
      {
        "id": "model-c10-math-2024-dps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Graph Zeroes Count",
        "questionText": "A quadratic polynomial whose zeroes are -3 and 4 is:",
        "options": [
          "A) x² - x - 12",
          "B) x² + x + 12",
          "C) x²/2 - x/2 - 6",
          "D) Both (A) and (C)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Sum of zeroes S = -3 + 4 = 1, Product P = -12. Polynomial is k(x² - Sx + P) = k(x² - x - 12). For k = 1 we get (A) and for k = 1/2 we get (C).",
        "stepMarking": [
          {
            "step": "Recognize arbitrary non-zero constant k(x² - x - 12)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check if scaled multiple k·p(x) appears in the options!",
        "commonPitfall": "Stopping at (A) without checking (C) = 1/2(A)."
      },
      {
        "id": "model-c10-math-2024-dps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Linear Equations: Infinitely Many Solutions Condition",
        "questionText": "For what value of k do the pair of linear equations kx + 3y = k - 3 and 12x + ky = k have infinitely many solutions?",
        "options": [
          "A) 6",
          "B) -6",
          "C) ±6",
          "D) 12"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => k/12 = 3/k = (k-3)/k. From k/12 = 3/k => k² = 36 => k = ±6. Testing k = -6 gives 3/(-6) = -1/2 ≠ (-6-3)/(-6) = 3/2. Only k = 6 satisfies all ratios (6/12 = 3/6 = 3/6 = 1/2).",
        "stepMarking": [
          {
            "step": "Verify k = 6 satisfies all three equal ratios",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute both roots back into c₁/c₂ to reject extraneous values.",
        "commonPitfall": "Marking ±6 without checking c₁/c₂ equality."
      },
      {
        "id": "model-c10-math-2024-dps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Nature of Roots",
        "questionText": "If the quadratic equation 2x² - kx + 2 = 0 has two equal real roots, then the values of k are:",
        "options": [
          "A) ±2",
          "B) ±4",
          "C) 4 only",
          "D) ±8"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For equal roots, discriminant D = b² - 4ac = 0 => (-k)² - 4(2)(2) = 0 => k² = 16 => k = ±4.",
        "stepMarking": [
          {
            "step": "D = k² - 16 = 0 => k = ±4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write ± when taking square root of k².",
        "commonPitfall": "Writing only k = +4."
      },
      {
        "id": "model-c10-math-2024-dps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Arithmetic Progressions: Common Difference",
        "questionText": "The common difference of the AP: 1/p, (1-p)/p, (1-2p)/p, ... is:",
        "options": [
          "A) 1",
          "B) 1/p",
          "C) -1",
          "D) -1/p"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. d = a₂ - a₁ = (1 - p)/p - 1/p = -p/p = -1.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ = -p/p = -1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Simplify fraction numerators carefully.",
        "commonPitfall": "Leaving answer as -p or -1/p."
      },
      {
        "id": "model-c10-math-2024-dps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Triangles: Basic Proportionality Theorem Application",
        "questionText": "In ΔABC, DE ∥ BC with D on AB and E on AC. If AD = 3 cm, DB = 6 cm, and AE = 4.5 cm, then AC equals:",
        "options": [
          "A) 9 cm",
          "B) 13.5 cm",
          "C) 10.5 cm",
          "D) 12 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By BPT, AD/DB = AE/EC => 3/6 = 4.5/EC => EC = 9 cm. Therefore AC = AE + EC = 4.5 + 9 = 13.5 cm.",
        "stepMarking": [
          {
            "step": "EC = 9 cm via BPT, then AC = 4.5 + 9 = 13.5 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read whether question asks EC or full side AC!",
        "commonPitfall": "Marking EC = 9 cm instead of AC = 13.5 cm."
      },
      {
        "id": "model-c10-math-2024-dps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Distance from Origin & Axes",
        "questionText": "The distance of the point P(-6, 8) from the x-axis and from the origin respectively are:",
        "options": [
          "A) 6, 10",
          "B) 8, 10",
          "C) -6, 10",
          "D) 8, 14"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Distance from x-axis = |y-coordinate| = |8| = 8 units. Distance from origin = √((-6)² + 8²) = √(36 + 64) = √100 = 10 units.",
        "stepMarking": [
          {
            "step": "Distance from x-axis = |y| = 8; from origin = 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distance from x-axis is |y|; distance from y-axis is |x|.",
        "commonPitfall": "Mixing up x-axis distance with |x| = 6."
      },
      {
        "id": "model-c10-math-2024-dps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Midpoint & Parallelogram Vertex",
        "questionText": "If the midpoint of the line segment joining A(3, 4) and B(k, 6) is P(x, y) and x + y - 10 = 0, then the value of k is:",
        "options": [
          "A) 4",
          "B) 5",
          "C) 7",
          "D) 10"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Midpoint P = ((3+k)/2, (4+6)/2) = ((3+k)/2, 5). Substituting into x + y - 10 = 0: (3+k)/2 + 5 - 10 = 0 => (3+k)/2 = 5 => 3 + k = 10 => k = 7.",
        "stepMarking": [
          {
            "step": "Midpoint y=5 => x=5 => (3+k)/2 = 5 => k=7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Compute y-coordinate first cleanly: (4+6)/2 = 5.",
        "commonPitfall": "Arithmetic error subtracting 10."
      },
      {
        "id": "model-c10-math-2024-dps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Fundamental Identities",
        "questionText": "The value of 9 sec²A - 9 tan²A is equal to:",
        "options": [
          "A) 1",
          "B) 9",
          "C) 8",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. 9(sec²A - tan²A) = 9(1) = 9, using the identity 1 + tan²A = sec²A.",
        "stepMarking": [
          {
            "step": "Factor 9 and apply sec²A - tan²A = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for sign reversal: tan²A - sec²A = -1.",
        "commonPitfall": "Marking 1 directly without multiplying by 9."
      },
      {
        "id": "model-c10-math-2024-dps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Exact Angles Evaluation",
        "questionText": "If sin θ + cos θ = √2 cos θ (θ ≠ 90°), then the value of tan θ is:",
        "options": [
          "A) √2 - 1",
          "B) √2 + 1",
          "C) √2",
          "D) -√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Dividing both sides by cos θ: tan θ + 1 = √2 => tan θ = √2 - 1.",
        "stepMarking": [
          {
            "step": "Divide by cos θ to get tan θ + 1 = √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dividing equation in sin and cos by cos θ immediately converts it to tan θ.",
        "commonPitfall": "Squaring both sides unnecessarily and complicating algebra."
      },
      {
        "id": "model-c10-math-2024-dps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Trigonometry: Shadow Length Angle",
        "questionText": "If the length of the shadow of a vertical pole is √3 times the height of the pole, then the angle of elevation of the Sun is:",
        "options": [
          "A) 30°",
          "B) 45°",
          "C) 60°",
          "D) 90°"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. tan θ = height / shadow = h / (√3 h) = 1/√3 = tan 30° => θ = 30°.",
        "stepMarking": [
          {
            "step": "tan θ = 1/√3 => θ = 30°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Longer shadow means lower Sun angle (30°); shorter shadow means steeper Sun angle (60°).",
        "commonPitfall": "Writing tan θ = √3 and marking 60°."
      },
      {
        "id": "model-c10-math-2024-dps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Tangent Perpendicularity & Pythagoras",
        "questionText": "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
        "options": [
          "A) 7 cm",
          "B) 12 cm",
          "C) 15 cm",
          "D) 24.5 cm"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent is perpendicular to radius at point of contact (∠OTQ = 90°). By Pythagoras: r = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.",
        "stepMarking": [
          {
            "step": "Right triangle OTQ => r = √(25² - 24²) = 7 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember Pythagorean triplet (7, 24, 25).",
        "commonPitfall": "Taking 25 as the tangent and 24 as hypotenuse."
      },
      {
        "id": "model-c10-math-2024-dps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Quadrilateral Circumscribing a Circle",
        "questionText": "A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 12 cm, BC = 15 cm, and CD = 14 cm, then the length of AD is:",
        "options": [
          "A) 10 cm",
          "B) 11 cm",
          "C) 12 cm",
          "D) 13 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Opposite sides of a quadrilateral circumscribing a circle have equal sums: AB + CD = BC + AD => 12 + 14 = 15 + AD => AD = 26 - 15 = 11 cm.",
        "stepMarking": [
          {
            "step": "Apply AB + CD = BC + AD => AD = 11 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of opposite pairs is always equal because tangents from an external vertex are equal.",
        "commonPitfall": "Equating AB + BC = CD + AD (adjacent sides)."
      },
      {
        "id": "model-c10-math-2024-dps-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Areas Related to Circles: Sector Area & Arc Length",
        "questionText": "The area of a quadrant of a circle whose circumference is 22 cm (use π = 22/7) is:",
        "options": [
          "A) 77/2 cm²",
          "B) 77/4 cm²",
          "C) 77/8 cm²",
          "D) 77/16 cm²"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 2πr = 22 => 2 × (22/7) × r = 22 => r = 7/2 cm. Area of quadrant = (1/4)πr² = (1/4) × (22/7) × (7/2) × (7/2) = 77/8 cm².",
        "stepMarking": [
          {
            "step": "r = 7/2 cm, quadrant area = (1/4)πr² = 77/8 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quadrant means central angle 90° = 1/4 of full circle.",
        "commonPitfall": "Computing full circle area 77/2 or semicircle 77/4."
      },
      {
        "id": "model-c10-math-2024-dps-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Surface Areas & Volumes: Ratio of Sphere & Cube",
        "questionText": "If the volume and surface area of a solid sphere are numerically equal, then its radius is:",
        "options": [
          "A) 2 units",
          "B) 3 units",
          "C) 4 units",
          "D) 6 units"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. (4/3)πr³ = 4πr² => r/3 = 1 => r = 3 units.",
        "stepMarking": [
          {
            "step": "Equate (4/3)πr³ = 4πr² => r = 3 units",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check if diameter is asked (6) vs radius (3). Here radius is asked.",
        "commonPitfall": "Writing r = 6 (diameter)."
      },
      {
        "id": "model-c10-math-2024-dps-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Sure & Impossible Events",
        "questionText": "Assertion (A): The probability of getting a number greater than 6 on throwing a fair cubic die is 0.\nReason (R): The probability of an impossible event is always 0, while that of a sure event is 1.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A standard die only has faces 1 to 6, so getting > 6 is impossible (P = 0).",
        "stepMarking": [
          {
            "step": "Option (A) identifying impossible event",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always 0 ≤ P(E) ≤ 1.",
        "commonPitfall": "Marking (B) when R directly justifies why P = 0."
      },
      {
        "id": "model-c10-math-2024-dps-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: HCF & LCM Divisibility",
        "questionText": "Assertion (A): If HCF(306, 657) = 9, then LCM(306, 657) = 22338.\nReason (R): For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. LCM = (306 × 657) / 9 = 34 × 657 = 22338, directly derived from HCF × LCM = a × b.",
        "stepMarking": [
          {
            "step": "Verify 34 × 657 = 22338 and identity R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice this property holds ONLY for two numbers, not three!",
        "commonPitfall": "Calculation slip dividing 306 by 9."
      },
      {
        "id": "model-c10-math-2024-dps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Triangles: Similarity & Parallel Segments",
        "questionText": "In ΔABC, ∠ADE = ∠B, AD = 3.8 cm, AE = 3.6 cm, BE = 2.1 cm, and BC = 4.2 cm (with D on AB and E on AC? Wait: let D on AB, E on AC? Correction: if D is on AC and E is on BC, or standard NCERT: In ΔADE and ΔABC, ∠A = ∠A, ∠ADE = ∠ABC). Given AD = 4 cm, DB = 5 cm, and DE = 3.6 cm where DE ∥ BC, find BC.",
        "modelAnswer": "Since DE ∥ BC, ∠ADE = ∠ABC and ∠AED = ∠ACB (corresponding angles).\nBy AA similarity criterion, ΔADE ~ ΔABC.\nHence AD / AB = DE / BC.\nAB = AD + DB = 4 + 5 = 9 cm.\nSo 4 / 9 = 3.6 / BC => BC = (3.6 × 9) / 4 = 0.9 × 9 = 8.1 cm.",
        "stepMarking": [
          {
            "step": "Prove ΔADE ~ ΔABC (AA similarity)",
            "marks": "1 Mark"
          },
          {
            "step": "Use AD/AB = DE/BC to get BC = 8.1 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use AD/AB (not AD/DB!) when comparing parallel segments DE and BC!",
        "commonPitfall": "Writing AD/DB = DE/BC and getting wrong value."
      },
      {
        "id": "model-c10-math-2024-dps-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometry: Sin(A-B) & Cos(A+B)",
        "questionText": "If sin(A - B) = 1/2 and cos(A + B) = 1/2, where 0° < A + B ≤ 90° and A > B, find the angles A and B.",
        "modelAnswer": "sin(A - B) = 1/2 = sin 30° => A - B = 30° ...(1)\ncos(A + B) = 1/2 = cos 60° => A + B = 60° ...(2)\nAdding (1) and (2): 2A = 90° => A = 45°.\nSubstituting in (2): 45° + B = 60° => B = 15°.",
        "stepMarking": [
          {
            "step": "Form A - B = 30° and A + B = 60°",
            "marks": "1 Mark"
          },
          {
            "step": "Solve to obtain A = 45°, B = 15°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify 0° < 45+15 ≤ 90° and 45 > 15.",
        "commonPitfall": "Confusing cos 60° = 1/2 with cos 30°."
      },
      {
        "id": "model-c10-math-2024-dps-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Circles: Angle Between Tangents & Central Angle",
        "questionText": "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
        "modelAnswer": "Let ∠PTQ = θ. Since tangents from an external point are equal, TP = TQ, so ΔTPQ is isosceles.\nHence ∠TPQ = ∠TQP = (180° - θ)/2 = 90° - θ/2.\nAlso radius OP is perpendicular to tangent TP => ∠OPT = 90°.\nTherefore ∠OPQ = ∠OPT - ∠TPQ = 90° - (90° - θ/2) = θ/2 = (1/2)∠PTQ.\nHence ∠PTQ = 2 ∠OPQ.",
        "stepMarking": [
          {
            "step": "TP = TQ => ∠TPQ = 90° - θ/2",
            "marks": "1 Mark"
          },
          {
            "step": "∠OPT = 90° => ∠OPQ = θ/2 => ∠PTQ = 2∠OPQ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a neat labelled circle diagram showing O, P, Q, T.",
        "commonPitfall": "Trying to prove using cyclic quadrilateral angle sum without finding ∠TPQ."
      },
      {
        "id": "model-c10-math-2024-dps-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Areas Related to Circles: Minute Hand Area Swept",
        "questionText": "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes (use π = 22/7).",
        "modelAnswer": "In 60 minutes, minute hand rotates 360°.\nIn 5 minutes, angle θ = (360° / 60) × 5 = 30°.\nArea of sector = (θ / 360°) × πr² = (30 / 360) × (22 / 7) × 14 × 14 = (1/12) × 22 × 2 × 14 = 154/3 cm² ≈ 51.33 cm².",
        "stepMarking": [
          {
            "step": "Angle in 5 minutes = 30°",
            "marks": "1 Mark"
          },
          {
            "step": "Sector area = 154/3 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Leave exact fraction 154/3 cm² alongside decimal 51.33 cm².",
        "commonPitfall": "Taking angle as 5° instead of 30°."
      },
      {
        "id": "model-c10-math-2024-dps-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Coordinate Geometry: Equidistant Point on X-Axis",
        "questionText": "Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).",
        "modelAnswer": "Let the point on x-axis be P(x, 0). Given PA = PB => PA² = PB².\n(x - 2)² + (0 + 5)² = (x + 2)² + (0 - 9)²\nx² - 4x + 4 + 25 = x² + 4x + 4 + 81\n-8x = 85 - 29 = 56 => x = -7.\nRequired point is (-7, 0).",
        "stepMarking": [
          {
            "step": "Set P(x, 0) and PA² = PB²",
            "marks": "1 Mark"
          },
          {
            "step": "Solve -8x = 56 => (-7, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Squaring PA = PB avoids messy square roots.",
        "commonPitfall": "Writing point as (-7) instead of ordered pair (-7, 0)."
      },
      {
        "id": "model-c10-math-2024-dps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Coordinate Geometry: Ratio Division by Line / Axis",
        "questionText": "Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.",
        "modelAnswer": "Let the x-axis divide AB at P(x, 0) in the ratio k : 1.\nBy section formula for y-coordinate:\n0 = (5k + 1(-5)) / (k + 1) => 5k - 5 = 0 => k = 1.\nRatio is 1 : 1.\nNow x = (-4(1) + 1(1)) / (1 + 1) = -3/2.\nPoint of division is (-3/2, 0).",
        "stepMarking": [
          {
            "step": "Assume ratio k:1 and point P(x, 0)",
            "marks": "1 Mark"
          },
          {
            "step": "Find k = 1 -> ratio 1:1",
            "marks": "1 Mark"
          },
          {
            "step": "Coordinates (-3/2, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Using ratio k:1 reduces two unknowns (m₁, m₂) to one unknown k.",
        "commonPitfall": "Setting x = 0 instead of y = 0 for the x-axis."
      },
      {
        "id": "model-c10-math-2024-dps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Probability: Standard Deck of 52 Playing Cards",
        "questionText": "From a well-shuffled pack of 52 playing cards, all face cards of spades and black queens are removed. One card is drawn at random from the remaining pack. Find the probability of getting:\n(a) a black face card\n(b) a red king\n(c) neither a king nor a jack.",
        "modelAnswer": "Cards removed: 3 spade face cards (J♠, Q♠, K♠) + remaining black queen (Q♣) = 4 cards removed.\nRemaining cards = 52 - 4 = 48.\n(a) Black face cards remaining: J♣ and K♣ (since J♠, Q♠, K♠, Q♣ removed) = 2 cards. P = 2/48 = 1/24.\n(b) Red kings (K♥, K♦) = 2 cards. P = 2/48 = 1/24.\n(c) Remaining Kings = 3 (K♥, K♦, K♣); Remaining Jacks = 3 (J♥, J♦, J♣) -> 6 cards. Neither = 48 - 6 = 42. P = 42/48 = 7/8.",
        "stepMarking": [
          {
            "step": "Remaining total = 48",
            "marks": "0.5 Mark"
          },
          {
            "step": "(a) 2/48 = 1/24",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2/48 = 1/24",
            "marks": "0.5 Mark"
          },
          {
            "step": "(c) 42/48 = 7/8",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never double-count Q♠ when removing both \"face cards of spades\" AND \"black queens\"!",
        "commonPitfall": "Subtracting 3 + 2 = 5 cards instead of 4 (double-counting Queen of Spades)."
      },
      {
        "id": "model-c10-math-2024-dps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Real Numbers: Proof of Irrationality",
        "questionText": "Prove that √5 is an irrational number. Hence show that 3 + 2√5 is also irrational.",
        "modelAnswer": "Let us assume to the contrary that √5 is rational, so √5 = a/b where a, b are coprime integers (b ≠ 0).\nSquaring: 5b² = a² => 5 divides a², hence 5 divides a. Let a = 5c.\nThen 5b² = 25c² => b² = 5c² => 5 divides b², hence 5 divides b.\nThus a and b have common factor 5, contradicting that they are coprime. So √5 is irrational.\nNow suppose 3 + 2√5 = r is rational => √5 = (r - 3)/2, which is rational (since r, 3, 2 are integers/rational). Contradiction! Hence 3 + 2√5 is irrational.",
        "stepMarking": [
          {
            "step": "Assumption a/b coprime & showing 5 divides a",
            "marks": "1 Mark"
          },
          {
            "step": "Showing 5 divides b -> contradiction -> √5 irrational",
            "marks": "1 Mark"
          },
          {
            "step": "Extending contradiction to 3 + 2√5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state \"a and b are coprime integers, b ≠ 0\" explicitly.",
        "commonPitfall": "Skipping the step stating \"if prime p divides a², then p divides a\"."
      },
      {
        "id": "model-c10-math-2024-dps-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Linear Equations: Two-Digit Number Word Problem",
        "questionText": "The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.",
        "modelAnswer": "Let tens digit = x and units digit = y. Original number = 10x + y; reversed number = 10y + x.\nCondition 1: x + y = 9 ...(1)\nCondition 2: 9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x - 11y = 0 => y = 8x ...(2)\nSubstituting (2) into (1): x + 8x = 9 => 9x = 9 => x = 1, and y = 8.\nTherefore, the number is 18.",
        "stepMarking": [
          {
            "step": "Form x + y = 9 and 9(10x+y) = 2(10y+x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Simplify to y = 8x and solve x = 1, y = 8",
            "marks": "1 Mark"
          },
          {
            "step": "Final answer: 18",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Verify: 9 × 18 = 162, and 2 × 81 = 162!",
        "commonPitfall": "Writing number as xy instead of 10x + y."
      },
      {
        "id": "model-c10-math-2024-dps-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Quadratic Equations: Train Speed Word Problem",
        "questionText": "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.",
        "modelAnswer": "Let uniform speed = x km/h.\nTime taken at x km/h = 360/x hours.\nTime taken at (x + 5) km/h = 360/(x + 5) hours.\nGiven: 360/x - 360/(x + 5) = 1\n360[ (x + 5 - x) / (x(x + 5)) ] = 1 => 1800 = x² + 5x => x² + 5x - 1800 = 0\n(x + 45)(x - 40) = 0 => x = 40 or x = -45 (rejected as speed > 0).\nSpeed of train = 40 km/h.",
        "stepMarking": [
          {
            "step": "Equation 360/x - 360/(x+5) = 1",
            "marks": "1 Mark"
          },
          {
            "step": "Quadratic x² + 5x - 1800 = 0",
            "marks": "1 Mark"
          },
          {
            "step": "Solve x = 40 km/h",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note that original speed is slower -> takes MORE time, so 360/x comes first!",
        "commonPitfall": "Subtracting in reverse order getting -1 on RHS."
      },
      {
        "id": "model-c10-math-2024-dps-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "AP: Finding Sum When Two Terms Are Given",
        "questionText": "If the sum of the first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of its first n terms.",
        "modelAnswer": "S₇ = (7/2)[2a + 6d] = 49 => 7(a + 3d) = 49 => a + 3d = 7 ...(1)\nS₁₇ = (17/2)[2a + 16d] = 289 => 17(a + 8d) = 289 => a + 8d = 17 ...(2)\nSubtracting (1) from (2): 5d = 10 => d = 2.\nFrom (1): a + 6 = 7 => a = 1.\nSum of n terms Sₙ = (n/2)[2(1) + (n - 1)(2)] = (n/2)[2n] = n².",
        "stepMarking": [
          {
            "step": "Equations a + 3d = 7 and a + 8d = 17",
            "marks": "1 Mark"
          },
          {
            "step": "Find a = 1, d = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Sₙ = n²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: S₇ = 7² = 49, S₁₇ = 17² = 289!",
        "commonPitfall": "Arithmetic error dividing 289 by 17."
      },
      {
        "id": "model-c10-math-2024-dps-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Triangles: Basic Proportionality Theorem (Thales Theorem Proof)",
        "questionText": "State and prove the Basic Proportionality Theorem (Thales Theorem). Using this theorem, prove that a line drawn through the mid-point of one side of a triangle parallel to another side bisects the third side.",
        "modelAnswer": "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof: In ΔABC, DE ∥ BC. Join BE, CD and draw EN ⊥ AB, DM ⊥ AC.\nar(ΔADE)/ar(ΔBDE) = (½·AD·EN)/(½·DB·EN) = AD/DB.\nar(ΔADE)/ar(ΔDEC) = (½·AE·DM)/(½·EC·DM) = AE/EC.\nSince ΔBDE and ΔDEC lie on same base DE and between same parallels DE ∥ BC, ar(ΔBDE) = ar(ΔDEC).\nTherefore AD/DB = AE/EC.\nApplication: If D is midpoint of AB, AD/DB = 1 => AE/EC = 1 => AE = EC (E is midpoint of AC).",
        "stepMarking": [
          {
            "step": "Statement + Given + Construction",
            "marks": "1 Mark"
          },
          {
            "step": "Area ratios AD/DB and AE/EC",
            "marks": "2 Marks"
          },
          {
            "step": "Equal base/parallels -> AD/DB = AE/EC",
            "marks": "1 Mark"
          },
          {
            "step": "Midpoint corollary proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Thales theorem is the most frequently tested 5-mark geometry proof in CBSE Class 10.",
        "commonPitfall": "Forgetting to draw altitudes EN and DM in construction."
      },
      {
        "id": "model-c10-math-2024-dps-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Trigonometry: Two Angles of Depression / Pole & Building",
        "questionText": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower. (Use √3 = 1.732)",
        "modelAnswer": "Let building AB = 7 m and tower CD = h m, horizontal distance BD = x m, AE ⊥ CD so CE = 7 m and ED = h - 7.\nIn right ΔABD: tan 45° = AB / BD => 1 = 7 / x => x = 7 m (so AE = 7 m).\nIn right ΔACE (or ΔAED): tan 60° = DE / AE => √3 = (h - 7) / 7 => h - 7 = 7√3.\nh = 7(√3 + 1) = 7(1.732 + 1) = 7 × 2.732 = 19.124 m.",
        "stepMarking": [
          {
            "step": "Neat labelled figure with angles 60° & 45°",
            "marks": "1 Mark"
          },
          {
            "step": "Find horizontal distance x = 7 m using tan 45°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Find DE = 7√3 m using tan 60°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Total height 7(√3 + 1) = 19.124 m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mark horizontal dotted line at eye level so angle of depression equals alternate interior angle.",
        "commonPitfall": "Taking full tower height h instead of h - 7 in the upper right triangle."
      },
      {
        "id": "model-c10-math-2024-dps-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Surface Areas & Volumes: Hollow Cylindrical / Conical Rocket or Tent",
        "questionText": "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent. Also, find the cost of the canvas of the tent at the rate of ₹500 per m². (Use π = 22/7)",
        "modelAnswer": "Radius r = 4/2 = 2 m, cylinder height h = 2.1 m, slant height of cone l = 2.8 m.\nCanvas area = CSA of cylinder + CSA of cone = 2πrh + πrl = πr(2h + l)\n= (22/7) × 2 × (2 × 2.1 + 2.8) = (44/7) × (4.2 + 2.8) = (44/7) × 7 = 44 m².\n(Note: Base of tent is NOT covered with canvas).\nCost = 44 × ₹500 = ₹22,000.",
        "stepMarking": [
          {
            "step": "Identify r = 2 m and formula 2πrh + πrl",
            "marks": "1.5 Marks"
          },
          {
            "step": "Calculate canvas area = 44 m²",
            "marks": "2.5 Marks"
          },
          {
            "step": "Total cost = ₹22,000",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Factor out πr before substituting numbers to simplify arithmetic!",
        "commonPitfall": "Adding circular floor area πr² to canvas area."
      },
      {
        "id": "model-c10-math-2024-dps-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Missing Frequencies with Given Median",
        "questionText": "If the median of the following distribution is 28.5 and total frequency N = 60, find the values of x and y:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60\nFrequency:       5   |   x   |  20   |  15   |   y   |   5",
        "modelAnswer": "Total frequency N = 5 + x + 20 + 15 + y + 5 = 45 + x + y = 60 => x + y = 15 ...(1)\nMedian = 28.5 lies in modal/median class 20-30.\nHere l = 20, h = 10, f = 20, cf (preceding) = 5 + x, N/2 = 30.\nMedian = l + [(N/2 - cf)/f] × h => 28.5 = 20 + [(30 - (5 + x))/20] × 10\n8.5 = (25 - x)/2 => 17 = 25 - x => x = 8.\nFrom (1): y = 15 - 8 = 7.\nHence x = 8, y = 7.",
        "stepMarking": [
          {
            "step": "Equation x + y = 15 & cumulative frequency table",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify median class 20-30 (l=20, f=20, cf=5+x)",
            "marks": "1 Mark"
          },
          {
            "step": "Solve Median formula for x = 8",
            "marks": "1.5 Marks"
          },
          {
            "step": "Obtain y = 7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use median value (28.5) — NOT N/2 — to locate the median class when frequencies have unknowns!",
        "commonPitfall": "Sign error: forgetting brackets in 30 - (5 + x) and writing 30 - 5 + x."
      },
      {
        "id": "model-c10-math-2024-dps-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Surface Area & Volume (Gulab Jamun / Cylindrical Capsule)",
        "questionText": "Read the case and answer:\nA medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The total length of the entire capsule is 14 mm and its diameter is 5 mm. (Use π = 22/7)\n\n(a) Find the radius and the length of the cylindrical middle portion. (1M)\n(b) Calculate the total surface area of the capsule. (2M)\n(c) If a box contains 100 capsules, find the total surface area in cm². (1M)",
        "modelAnswer": "(a) Radius r = 5/2 = 2.5 mm. Length of cylinder h = 14 - 2(2.5) = 14 - 5 = 9 mm.\n(b) TSA = CSA of cylinder + 2 × CSA of hemisphere = 2πrh + 4πr² = 2πr(h + 2r)\n= 2 × (22/7) × 2.5 × (9 + 5) = 2 × (22/7) × 2.5 × 14 = 220 mm².\n(c) For 100 capsules: 100 × 220 = 22,000 mm² = 22,000 / 100 cm² = 220 cm².",
        "stepMarking": [
          {
            "step": "(a) r = 2.5 mm, h = 9 mm",
            "marks": "1 Mark"
          },
          {
            "step": "(b) TSA = 220 mm²",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 22,000 mm² to 220 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "1 cm² = 100 mm² (NOT 10 mm²)!",
        "commonPitfall": "Forgetting to subtract 2r from total length 14 mm to get cylinder length."
      },
      {
        "id": "model-c10-math-2024-dps-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Arithmetic Progressions (Seating / Salary Increment)",
        "questionText": "Read the case and answer:\nA stadium has rows of seats arranged such that the first row has 20 seats, the second row has 24 seats, the third row has 28 seats, and so on.\n\n(a) Find the number of seats in the 15th row. (1M)\n(b) Which row has exactly 100 seats? (1M)\n(c) Calculate the total number of seats in the first 20 rows of the stadium. (2M)",
        "modelAnswer": "(a) a = 20, d = 4. a₁₅ = 20 + 14(4) = 20 + 56 = 76 seats.\n(b) aₙ = 20 + (n - 1)4 = 100 => 4(n - 1) = 80 => n - 1 = 20 => n = 21st row.\n(c) S₂₀ = (20/2)[2(20) + 19(4)] = 10 × (40 + 76) = 10 × 116 = 1160 seats.",
        "stepMarking": [
          {
            "step": "(a) a₁₅ = 76",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 21st row",
            "marks": "1 Mark"
          },
          {
            "step": "(c) S₂₀ = 1160 seats",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check: a₂₁ = 20 + 20×4 = 100.",
        "commonPitfall": "Using n instead of n-1 in aₙ = a + (n-1)d."
      },
      {
        "id": "model-c10-math-2024-dps-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Coordinate Geometry (School Sports Ground Map)",
        "questionText": "Read the case and answer:\nOn a coordinate grid of a school ground, flag posts are placed at A(2, 3), B(6, 7), and C(10, 3).\n\n(a) Find the distance between flag posts A and C. (1M)\n(b) Find the lengths AB and BC to determine what type of triangle ABC is. (2M)\n(c) Find the coordinates of the midpoint D of AC, and distance BD. (1M)",
        "modelAnswer": "(a) AC = √((10 - 2)² + (3 - 3)²) = √64 = 8 units.\n(b) AB = √((6 - 2)² + (7 - 3)²) = √(16 + 16) = 4√2 units. BC = √((10 - 6)² + (3 - 7)²) = √(16 + 16) = 4√2 units. Since AB = BC AND AB² + BC² = 32 + 32 = 64 = AC², ΔABC is a right-angled isosceles triangle (∠B = 90°).\n(c) Midpoint D of AC = ((2+10)/2, (3+3)/2) = (6, 3). Distance BD = 7 - 3 = 4 units.",
        "stepMarking": [
          {
            "step": "(a) AC = 8 units",
            "marks": "1 Mark"
          },
          {
            "step": "(b) AB = BC = 4√2 & right isosceles check",
            "marks": "2 Marks"
          },
          {
            "step": "(c) D(6,3) & BD = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check Pythagoras AB² + BC² = AC² in triangle classification!",
        "commonPitfall": "Stopping at \"isosceles\" without checking the 90° angle."
      }
    ]
  },
  {
    "id": "model-c10-math-2024-cfpq",
    "title": "CBSE CFPQ Competency Practice Mathematics Paper (2024-25)",
    "subject": "Mathematics",
    "targetClass": "Class 10",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "CFPQ/C10/MAT-02",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper has 5 Sections A, B, C, D, and E comprising 38 compulsory questions.",
      "Section A has 20 MCQs (Q1–Q18) and Assertion-Reason (Q19–Q20) carrying 1 mark each.",
      "Section B has 5 Very Short Answer questions carrying 2 marks each.",
      "Section C has 6 Short Answer questions carrying 3 marks each.",
      "Section D has 4 Long Answer questions carrying 5 marks each.",
      "Section E has 3 case-based integrated units of assessment (4 marks each) with sub-parts."
    ],
    "questions": [
      {
        "id": "model-c10-math-2024-cfpq-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Sum and Product of Zeroes",
        "questionText": "If α and β are the zeroes of the quadratic polynomial p(x) = x² - 5x + 6, then the value of α² + β² is:",
        "options": [
          "A) 13",
          "B) 25",
          "C) 19",
          "D) 37"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. α + β = 5, αβ = 6. Using α² + β² = (α + β)² - 2αβ = 25 - 12 = 13.",
        "stepMarking": [
          {
            "step": "Apply (α+β)² - 2αβ = 25 - 12 = 13",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetric identities (α+β)² - 2αβ instead of solving roots every time.",
        "commonPitfall": "Computing (α + β)² = 25 and forgetting -2αβ."
      },
      {
        "id": "model-c10-math-2024-cfpq-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Graph Zeroes Count",
        "questionText": "A quadratic polynomial whose zeroes are -3 and 4 is:",
        "options": [
          "A) x² - x - 12",
          "B) x² + x + 12",
          "C) x²/2 - x/2 - 6",
          "D) Both (A) and (C)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Sum of zeroes S = -3 + 4 = 1, Product P = -12. Polynomial is k(x² - Sx + P) = k(x² - x - 12). For k = 1 we get (A) and for k = 1/2 we get (C).",
        "stepMarking": [
          {
            "step": "Recognize arbitrary non-zero constant k(x² - x - 12)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check if scaled multiple k·p(x) appears in the options!",
        "commonPitfall": "Stopping at (A) without checking (C) = 1/2(A)."
      },
      {
        "id": "model-c10-math-2024-cfpq-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Linear Equations: Infinitely Many Solutions Condition",
        "questionText": "For what value of k do the pair of linear equations kx + 3y = k - 3 and 12x + ky = k have infinitely many solutions?",
        "options": [
          "A) 6",
          "B) -6",
          "C) ±6",
          "D) 12"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => k/12 = 3/k = (k-3)/k. From k/12 = 3/k => k² = 36 => k = ±6. Testing k = -6 gives 3/(-6) = -1/2 ≠ (-6-3)/(-6) = 3/2. Only k = 6 satisfies all ratios (6/12 = 3/6 = 3/6 = 1/2).",
        "stepMarking": [
          {
            "step": "Verify k = 6 satisfies all three equal ratios",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute both roots back into c₁/c₂ to reject extraneous values.",
        "commonPitfall": "Marking ±6 without checking c₁/c₂ equality."
      },
      {
        "id": "model-c10-math-2024-cfpq-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Nature of Roots",
        "questionText": "If the quadratic equation 2x² - kx + 2 = 0 has two equal real roots, then the values of k are:",
        "options": [
          "A) ±2",
          "B) ±4",
          "C) 4 only",
          "D) ±8"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For equal roots, discriminant D = b² - 4ac = 0 => (-k)² - 4(2)(2) = 0 => k² = 16 => k = ±4.",
        "stepMarking": [
          {
            "step": "D = k² - 16 = 0 => k = ±4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write ± when taking square root of k².",
        "commonPitfall": "Writing only k = +4."
      },
      {
        "id": "model-c10-math-2024-cfpq-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Arithmetic Progressions: Common Difference",
        "questionText": "The common difference of the AP: 1/p, (1-p)/p, (1-2p)/p, ... is:",
        "options": [
          "A) 1",
          "B) 1/p",
          "C) -1",
          "D) -1/p"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. d = a₂ - a₁ = (1 - p)/p - 1/p = -p/p = -1.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ = -p/p = -1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Simplify fraction numerators carefully.",
        "commonPitfall": "Leaving answer as -p or -1/p."
      },
      {
        "id": "model-c10-math-2024-cfpq-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Triangles: Basic Proportionality Theorem Application",
        "questionText": "In ΔABC, DE ∥ BC with D on AB and E on AC. If AD = 3 cm, DB = 6 cm, and AE = 4.5 cm, then AC equals:",
        "options": [
          "A) 9 cm",
          "B) 13.5 cm",
          "C) 10.5 cm",
          "D) 12 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By BPT, AD/DB = AE/EC => 3/6 = 4.5/EC => EC = 9 cm. Therefore AC = AE + EC = 4.5 + 9 = 13.5 cm.",
        "stepMarking": [
          {
            "step": "EC = 9 cm via BPT, then AC = 4.5 + 9 = 13.5 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read whether question asks EC or full side AC!",
        "commonPitfall": "Marking EC = 9 cm instead of AC = 13.5 cm."
      },
      {
        "id": "model-c10-math-2024-cfpq-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Distance from Origin & Axes",
        "questionText": "The distance of the point P(-6, 8) from the x-axis and from the origin respectively are:",
        "options": [
          "A) 6, 10",
          "B) 8, 10",
          "C) -6, 10",
          "D) 8, 14"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Distance from x-axis = |y-coordinate| = |8| = 8 units. Distance from origin = √((-6)² + 8²) = √(36 + 64) = √100 = 10 units.",
        "stepMarking": [
          {
            "step": "Distance from x-axis = |y| = 8; from origin = 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distance from x-axis is |y|; distance from y-axis is |x|.",
        "commonPitfall": "Mixing up x-axis distance with |x| = 6."
      },
      {
        "id": "model-c10-math-2024-cfpq-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Midpoint & Parallelogram Vertex",
        "questionText": "If the midpoint of the line segment joining A(3, 4) and B(k, 6) is P(x, y) and x + y - 10 = 0, then the value of k is:",
        "options": [
          "A) 4",
          "B) 5",
          "C) 7",
          "D) 10"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Midpoint P = ((3+k)/2, (4+6)/2) = ((3+k)/2, 5). Substituting into x + y - 10 = 0: (3+k)/2 + 5 - 10 = 0 => (3+k)/2 = 5 => 3 + k = 10 => k = 7.",
        "stepMarking": [
          {
            "step": "Midpoint y=5 => x=5 => (3+k)/2 = 5 => k=7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Compute y-coordinate first cleanly: (4+6)/2 = 5.",
        "commonPitfall": "Arithmetic error subtracting 10."
      },
      {
        "id": "model-c10-math-2024-cfpq-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Fundamental Identities",
        "questionText": "The value of 9 sec²A - 9 tan²A is equal to:",
        "options": [
          "A) 1",
          "B) 9",
          "C) 8",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. 9(sec²A - tan²A) = 9(1) = 9, using the identity 1 + tan²A = sec²A.",
        "stepMarking": [
          {
            "step": "Factor 9 and apply sec²A - tan²A = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for sign reversal: tan²A - sec²A = -1.",
        "commonPitfall": "Marking 1 directly without multiplying by 9."
      },
      {
        "id": "model-c10-math-2024-cfpq-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Exact Angles Evaluation",
        "questionText": "If sin θ + cos θ = √2 cos θ (θ ≠ 90°), then the value of tan θ is:",
        "options": [
          "A) √2 - 1",
          "B) √2 + 1",
          "C) √2",
          "D) -√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Dividing both sides by cos θ: tan θ + 1 = √2 => tan θ = √2 - 1.",
        "stepMarking": [
          {
            "step": "Divide by cos θ to get tan θ + 1 = √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dividing equation in sin and cos by cos θ immediately converts it to tan θ.",
        "commonPitfall": "Squaring both sides unnecessarily and complicating algebra."
      },
      {
        "id": "model-c10-math-2024-cfpq-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Trigonometry: Shadow Length Angle",
        "questionText": "If the length of the shadow of a vertical pole is √3 times the height of the pole, then the angle of elevation of the Sun is:",
        "options": [
          "A) 30°",
          "B) 45°",
          "C) 60°",
          "D) 90°"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. tan θ = height / shadow = h / (√3 h) = 1/√3 = tan 30° => θ = 30°.",
        "stepMarking": [
          {
            "step": "tan θ = 1/√3 => θ = 30°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Longer shadow means lower Sun angle (30°); shorter shadow means steeper Sun angle (60°).",
        "commonPitfall": "Writing tan θ = √3 and marking 60°."
      },
      {
        "id": "model-c10-math-2024-cfpq-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Tangent Perpendicularity & Pythagoras",
        "questionText": "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
        "options": [
          "A) 7 cm",
          "B) 12 cm",
          "C) 15 cm",
          "D) 24.5 cm"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent is perpendicular to radius at point of contact (∠OTQ = 90°). By Pythagoras: r = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.",
        "stepMarking": [
          {
            "step": "Right triangle OTQ => r = √(25² - 24²) = 7 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember Pythagorean triplet (7, 24, 25).",
        "commonPitfall": "Taking 25 as the tangent and 24 as hypotenuse."
      },
      {
        "id": "model-c10-math-2024-cfpq-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Quadrilateral Circumscribing a Circle",
        "questionText": "A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 12 cm, BC = 15 cm, and CD = 14 cm, then the length of AD is:",
        "options": [
          "A) 10 cm",
          "B) 11 cm",
          "C) 12 cm",
          "D) 13 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Opposite sides of a quadrilateral circumscribing a circle have equal sums: AB + CD = BC + AD => 12 + 14 = 15 + AD => AD = 26 - 15 = 11 cm.",
        "stepMarking": [
          {
            "step": "Apply AB + CD = BC + AD => AD = 11 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of opposite pairs is always equal because tangents from an external vertex are equal.",
        "commonPitfall": "Equating AB + BC = CD + AD (adjacent sides)."
      },
      {
        "id": "model-c10-math-2024-cfpq-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Areas Related to Circles: Sector Area & Arc Length",
        "questionText": "The area of a quadrant of a circle whose circumference is 22 cm (use π = 22/7) is:",
        "options": [
          "A) 77/2 cm²",
          "B) 77/4 cm²",
          "C) 77/8 cm²",
          "D) 77/16 cm²"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 2πr = 22 => 2 × (22/7) × r = 22 => r = 7/2 cm. Area of quadrant = (1/4)πr² = (1/4) × (22/7) × (7/2) × (7/2) = 77/8 cm².",
        "stepMarking": [
          {
            "step": "r = 7/2 cm, quadrant area = (1/4)πr² = 77/8 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quadrant means central angle 90° = 1/4 of full circle.",
        "commonPitfall": "Computing full circle area 77/2 or semicircle 77/4."
      },
      {
        "id": "model-c10-math-2024-cfpq-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Surface Areas & Volumes: Ratio of Sphere & Cube",
        "questionText": "If the volume and surface area of a solid sphere are numerically equal, then its radius is:",
        "options": [
          "A) 2 units",
          "B) 3 units",
          "C) 4 units",
          "D) 6 units"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. (4/3)πr³ = 4πr² => r/3 = 1 => r = 3 units.",
        "stepMarking": [
          {
            "step": "Equate (4/3)πr³ = 4πr² => r = 3 units",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check if diameter is asked (6) vs radius (3). Here radius is asked.",
        "commonPitfall": "Writing r = 6 (diameter)."
      },
      {
        "id": "model-c10-math-2024-cfpq-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Empirical Formula (Mean, Median, Mode)",
        "questionText": "If the mean and median of a moderately skewed distribution are 24 and 26 respectively, then its mode is:",
        "options": [
          "A) 28",
          "B) 30",
          "C) 22",
          "D) 25"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Empirical relation: 3 Median = Mode + 2 Mean => Mode = 3(26) - 2(24) = 78 - 48 = 30.",
        "stepMarking": [
          {
            "step": "Apply Mode = 3 Median - 2 Mean = 78 - 48 = 30",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize exact coefficients: 3 Median = Mode + 2 Mean.",
        "commonPitfall": "Swapping coefficients of Mean and Median."
      },
      {
        "id": "model-c10-math-2024-cfpq-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Dice & Coin Outcomes",
        "questionText": "Two unbiased dice are thrown simultaneously. What is the probability of getting a doublet of prime numbers?",
        "options": [
          "A) 1/6",
          "B) 1/12",
          "C) 1/9",
          "D) 1/4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Total outcomes = 36. Prime numbers on a die are {2, 3, 5}. Prime doublets are (2,2), (3,3), (5,5) -> 3 outcomes. P = 3/36 = 1/12.",
        "stepMarking": [
          {
            "step": "3 prime doublets out of 36 outcomes => 1/12",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 1 is NEITHER prime NOR composite — exclude (1,1)!",
        "commonPitfall": "Including (1,1) and getting 4/36 = 1/9."
      },
      {
        "id": "model-c10-math-2024-cfpq-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Non-Leap Year 53 Sundays",
        "questionText": "What is the probability that a non-leap year selected at random will contain 53 Sundays?",
        "options": [
          "A) 1/7",
          "B) 2/7",
          "C) 5/7",
          "D) 53/365"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A non-leap year has 365 days = 52 weeks + 1 extra day. That 1 extra day can be any of the 7 days of the week. Hence P(53 Sundays) = 1/7.",
        "stepMarking": [
          {
            "step": "365 = 52 weeks + 1 odd day => P = 1/7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For a leap year (366 days = 52 weeks + 2 odd days), probability is 2/7.",
        "commonPitfall": "Marking 2/7 for a non-leap year."
      },
      {
        "id": "model-c10-math-2024-cfpq-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: HCF & LCM Divisibility",
        "questionText": "Assertion (A): If HCF(306, 657) = 9, then LCM(306, 657) = 22338.\nReason (R): For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. LCM = (306 × 657) / 9 = 34 × 657 = 22338, directly derived from HCF × LCM = a × b.",
        "stepMarking": [
          {
            "step": "Verify 34 × 657 = 22338 and identity R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice this property holds ONLY for two numbers, not three!",
        "commonPitfall": "Calculation slip dividing 306 by 9."
      },
      {
        "id": "model-c10-math-2024-cfpq-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Collinear Points",
        "questionText": "Assertion (A): The point (0, 4) lies on the y-axis.\nReason (R): The x-coordinate (abscissa) of every point lying on the y-axis is zero.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Since abscissa x = 0 in (0, 4), the point lies on the y-axis.",
        "stepMarking": [
          {
            "step": "Option (A) with y-axis condition x = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Point on x-axis has form (x, 0); point on y-axis has form (0, y).",
        "commonPitfall": "Confusing x-axis and y-axis."
      },
      {
        "id": "model-c10-math-2024-cfpq-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Circles: Angle Between Tangents & Central Angle",
        "questionText": "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
        "modelAnswer": "Let ∠PTQ = θ. Since tangents from an external point are equal, TP = TQ, so ΔTPQ is isosceles.\nHence ∠TPQ = ∠TQP = (180° - θ)/2 = 90° - θ/2.\nAlso radius OP is perpendicular to tangent TP => ∠OPT = 90°.\nTherefore ∠OPQ = ∠OPT - ∠TPQ = 90° - (90° - θ/2) = θ/2 = (1/2)∠PTQ.\nHence ∠PTQ = 2 ∠OPQ.",
        "stepMarking": [
          {
            "step": "TP = TQ => ∠TPQ = 90° - θ/2",
            "marks": "1 Mark"
          },
          {
            "step": "∠OPT = 90° => ∠OPQ = θ/2 => ∠PTQ = 2∠OPQ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a neat labelled circle diagram showing O, P, Q, T.",
        "commonPitfall": "Trying to prove using cyclic quadrilateral angle sum without finding ∠TPQ."
      },
      {
        "id": "model-c10-math-2024-cfpq-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Areas Related to Circles: Minute Hand Area Swept",
        "questionText": "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes (use π = 22/7).",
        "modelAnswer": "In 60 minutes, minute hand rotates 360°.\nIn 5 minutes, angle θ = (360° / 60) × 5 = 30°.\nArea of sector = (θ / 360°) × πr² = (30 / 360) × (22 / 7) × 14 × 14 = (1/12) × 22 × 2 × 14 = 154/3 cm² ≈ 51.33 cm².",
        "stepMarking": [
          {
            "step": "Angle in 5 minutes = 30°",
            "marks": "1 Mark"
          },
          {
            "step": "Sector area = 154/3 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Leave exact fraction 154/3 cm² alongside decimal 51.33 cm².",
        "commonPitfall": "Taking angle as 5° instead of 30°."
      },
      {
        "id": "model-c10-math-2024-cfpq-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Coordinate Geometry: Equidistant Point on X-Axis",
        "questionText": "Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).",
        "modelAnswer": "Let the point on x-axis be P(x, 0). Given PA = PB => PA² = PB².\n(x - 2)² + (0 + 5)² = (x + 2)² + (0 - 9)²\nx² - 4x + 4 + 25 = x² + 4x + 4 + 81\n-8x = 85 - 29 = 56 => x = -7.\nRequired point is (-7, 0).",
        "stepMarking": [
          {
            "step": "Set P(x, 0) and PA² = PB²",
            "marks": "1 Mark"
          },
          {
            "step": "Solve -8x = 56 => (-7, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Squaring PA = PB avoids messy square roots.",
        "commonPitfall": "Writing point as (-7) instead of ordered pair (-7, 0)."
      },
      {
        "id": "model-c10-math-2024-cfpq-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Real Numbers: End with Digit 0 Check",
        "questionText": "Check whether 6ⁿ can end with the digit 0 for any natural number n. Give mathematical justification.",
        "modelAnswer": "For any number 6ⁿ to end with the digit 0, it must be divisible by 10, meaning its prime factorisation must contain both 2 and 5.\nHowever, 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ.\nBy the Fundamental Theorem of Arithmetic (uniqueness of prime factorisation), 5 is NOT a prime factor of 6ⁿ. Hence 6ⁿ can NEVER end with digit 0 for any natural number n.",
        "stepMarking": [
          {
            "step": "Condition: prime factors must include 2 and 5",
            "marks": "1 Mark"
          },
          {
            "step": "6ⁿ = 2ⁿ×3ⁿ lacks factor 5 (Fundamental Theorem of Arithmetic)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always invoke \"Uniqueness of Fundamental Theorem of Arithmetic\".",
        "commonPitfall": "Giving only examples n=1, 2, 3 instead of general proof."
      },
      {
        "id": "model-c10-math-2024-cfpq-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Polynomials: Constructing Polynomial from Zeroes",
        "questionText": "Find the zeroes of the quadratic polynomial x² - 2x - 8 and verify the relationship between its zeroes and coefficients.",
        "modelAnswer": "x² - 2x - 8 = x² - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2).\nZeroes are α = 4 and β = -2.\nVerification:\nSum of zeroes: α + β = 4 + (-2) = 2 = -(-2)/1 = -b/a.\nProduct of zeroes: αβ = 4 × (-2) = -8 = (-8)/1 = c/a.",
        "stepMarking": [
          {
            "step": "Find zeroes 4 and -2",
            "marks": "1 Mark"
          },
          {
            "step": "Verify both sum (-b/a) and product (c/a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show LHS and RHS explicitly in verification.",
        "commonPitfall": "Sign mistake in -b/a = -(-2)/1."
      },
      {
        "id": "model-c10-math-2024-cfpq-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Real Numbers: Proof of Irrationality",
        "questionText": "Prove that √5 is an irrational number. Hence show that 3 + 2√5 is also irrational.",
        "modelAnswer": "Let us assume to the contrary that √5 is rational, so √5 = a/b where a, b are coprime integers (b ≠ 0).\nSquaring: 5b² = a² => 5 divides a², hence 5 divides a. Let a = 5c.\nThen 5b² = 25c² => b² = 5c² => 5 divides b², hence 5 divides b.\nThus a and b have common factor 5, contradicting that they are coprime. So √5 is irrational.\nNow suppose 3 + 2√5 = r is rational => √5 = (r - 3)/2, which is rational (since r, 3, 2 are integers/rational). Contradiction! Hence 3 + 2√5 is irrational.",
        "stepMarking": [
          {
            "step": "Assumption a/b coprime & showing 5 divides a",
            "marks": "1 Mark"
          },
          {
            "step": "Showing 5 divides b -> contradiction -> √5 irrational",
            "marks": "1 Mark"
          },
          {
            "step": "Extending contradiction to 3 + 2√5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state \"a and b are coprime integers, b ≠ 0\" explicitly.",
        "commonPitfall": "Skipping the step stating \"if prime p divides a², then p divides a\"."
      },
      {
        "id": "model-c10-math-2024-cfpq-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Linear Equations: Two-Digit Number Word Problem",
        "questionText": "The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.",
        "modelAnswer": "Let tens digit = x and units digit = y. Original number = 10x + y; reversed number = 10y + x.\nCondition 1: x + y = 9 ...(1)\nCondition 2: 9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x - 11y = 0 => y = 8x ...(2)\nSubstituting (2) into (1): x + 8x = 9 => 9x = 9 => x = 1, and y = 8.\nTherefore, the number is 18.",
        "stepMarking": [
          {
            "step": "Form x + y = 9 and 9(10x+y) = 2(10y+x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Simplify to y = 8x and solve x = 1, y = 8",
            "marks": "1 Mark"
          },
          {
            "step": "Final answer: 18",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Verify: 9 × 18 = 162, and 2 × 81 = 162!",
        "commonPitfall": "Writing number as xy instead of 10x + y."
      },
      {
        "id": "model-c10-math-2024-cfpq-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Quadratic Equations: Train Speed Word Problem",
        "questionText": "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.",
        "modelAnswer": "Let uniform speed = x km/h.\nTime taken at x km/h = 360/x hours.\nTime taken at (x + 5) km/h = 360/(x + 5) hours.\nGiven: 360/x - 360/(x + 5) = 1\n360[ (x + 5 - x) / (x(x + 5)) ] = 1 => 1800 = x² + 5x => x² + 5x - 1800 = 0\n(x + 45)(x - 40) = 0 => x = 40 or x = -45 (rejected as speed > 0).\nSpeed of train = 40 km/h.",
        "stepMarking": [
          {
            "step": "Equation 360/x - 360/(x+5) = 1",
            "marks": "1 Mark"
          },
          {
            "step": "Quadratic x² + 5x - 1800 = 0",
            "marks": "1 Mark"
          },
          {
            "step": "Solve x = 40 km/h",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note that original speed is slower -> takes MORE time, so 360/x comes first!",
        "commonPitfall": "Subtracting in reverse order getting -1 on RHS."
      },
      {
        "id": "model-c10-math-2024-cfpq-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "AP: Finding Sum When Two Terms Are Given",
        "questionText": "If the sum of the first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of its first n terms.",
        "modelAnswer": "S₇ = (7/2)[2a + 6d] = 49 => 7(a + 3d) = 49 => a + 3d = 7 ...(1)\nS₁₇ = (17/2)[2a + 16d] = 289 => 17(a + 8d) = 289 => a + 8d = 17 ...(2)\nSubtracting (1) from (2): 5d = 10 => d = 2.\nFrom (1): a + 6 = 7 => a = 1.\nSum of n terms Sₙ = (n/2)[2(1) + (n - 1)(2)] = (n/2)[2n] = n².",
        "stepMarking": [
          {
            "step": "Equations a + 3d = 7 and a + 8d = 17",
            "marks": "1 Mark"
          },
          {
            "step": "Find a = 1, d = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Sₙ = n²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: S₇ = 7² = 49, S₁₇ = 17² = 289!",
        "commonPitfall": "Arithmetic error dividing 289 by 17."
      },
      {
        "id": "model-c10-math-2024-cfpq-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometry: Standard Proving Identity",
        "questionText": "Prove that: (sin θ - 2 sin³θ) / (2 cos³θ - cos θ) = tan θ.",
        "modelAnswer": "LHS = [sin θ (1 - 2 sin²θ)] / [cos θ (2 cos²θ - 1)]\nSubstitute 1 = sin²θ + cos²θ OR cos²θ = 1 - sin²θ in denominator:\n2 cos²θ - 1 = 2(1 - sin²θ) - 1 = 2 - 2 sin²θ - 1 = 1 - 2 sin²θ.\nTherefore LHS = [sin θ (1 - 2 sin²θ)] / [cos θ (1 - 2 sin²θ)] = sin θ / cos θ = tan θ = RHS.",
        "stepMarking": [
          {
            "step": "Factor sin θ and cos θ from numerator & denominator",
            "marks": "1 Mark"
          },
          {
            "step": "Convert 2cos²θ - 1 to 1 - 2sin²θ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Cancel common factor to get tan θ",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Convert EITHER numerator to cos OR denominator to sin — never both at once.",
        "commonPitfall": "Expanding without factoring sin θ and cos θ."
      },
      {
        "id": "model-c10-math-2024-cfpq-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Circles: Equal Opposite Angles Subtended by Cyclic Quadrilateral",
        "questionText": "Prove that the lengths of tangents drawn from an external point to a circle are equal. Use this to prove that in two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.",
        "modelAnswer": "Part 1: In ΔOAP and ΔOBP, OA = OB (radii), OP = OP (common), ∠OAP = ∠OBP = 90° (radius ⊥ tangent). By RHS congruence, ΔOAP ≅ ΔOBP => PA = PB.\nPart 2: Let AB be chord of larger circle touching smaller circle at P, with common centre O. Join OP. Since AB is tangent to smaller circle, OP ⊥ AB. In larger circle, perpendicular from centre O to chord AB bisects the chord. Hence AP = BP.",
        "stepMarking": [
          {
            "step": "RHS proof of PA = PB",
            "marks": "1.5 Marks"
          },
          {
            "step": "Concentric circle proof using OP ⊥ AB bisection theorem",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Both proofs are NCERT Class 10 Chapter 10 core theorems.",
        "commonPitfall": "Forgetting to cite \"perpendicular from centre bisects the chord\"."
      },
      {
        "id": "model-c10-math-2024-cfpq-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Trigonometry: Two Angles of Depression / Pole & Building",
        "questionText": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower. (Use √3 = 1.732)",
        "modelAnswer": "Let building AB = 7 m and tower CD = h m, horizontal distance BD = x m, AE ⊥ CD so CE = 7 m and ED = h - 7.\nIn right ΔABD: tan 45° = AB / BD => 1 = 7 / x => x = 7 m (so AE = 7 m).\nIn right ΔACE (or ΔAED): tan 60° = DE / AE => √3 = (h - 7) / 7 => h - 7 = 7√3.\nh = 7(√3 + 1) = 7(1.732 + 1) = 7 × 2.732 = 19.124 m.",
        "stepMarking": [
          {
            "step": "Neat labelled figure with angles 60° & 45°",
            "marks": "1 Mark"
          },
          {
            "step": "Find horizontal distance x = 7 m using tan 45°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Find DE = 7√3 m using tan 60°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Total height 7(√3 + 1) = 19.124 m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mark horizontal dotted line at eye level so angle of depression equals alternate interior angle.",
        "commonPitfall": "Taking full tower height h instead of h - 7 in the upper right triangle."
      },
      {
        "id": "model-c10-math-2024-cfpq-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Surface Areas & Volumes: Hollow Cylindrical / Conical Rocket or Tent",
        "questionText": "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent. Also, find the cost of the canvas of the tent at the rate of ₹500 per m². (Use π = 22/7)",
        "modelAnswer": "Radius r = 4/2 = 2 m, cylinder height h = 2.1 m, slant height of cone l = 2.8 m.\nCanvas area = CSA of cylinder + CSA of cone = 2πrh + πrl = πr(2h + l)\n= (22/7) × 2 × (2 × 2.1 + 2.8) = (44/7) × (4.2 + 2.8) = (44/7) × 7 = 44 m².\n(Note: Base of tent is NOT covered with canvas).\nCost = 44 × ₹500 = ₹22,000.",
        "stepMarking": [
          {
            "step": "Identify r = 2 m and formula 2πrh + πrl",
            "marks": "1.5 Marks"
          },
          {
            "step": "Calculate canvas area = 44 m²",
            "marks": "2.5 Marks"
          },
          {
            "step": "Total cost = ₹22,000",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Factor out πr before substituting numbers to simplify arithmetic!",
        "commonPitfall": "Adding circular floor area πr² to canvas area."
      },
      {
        "id": "model-c10-math-2024-cfpq-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Missing Frequencies with Given Median",
        "questionText": "If the median of the following distribution is 28.5 and total frequency N = 60, find the values of x and y:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60\nFrequency:       5   |   x   |  20   |  15   |   y   |   5",
        "modelAnswer": "Total frequency N = 5 + x + 20 + 15 + y + 5 = 45 + x + y = 60 => x + y = 15 ...(1)\nMedian = 28.5 lies in modal/median class 20-30.\nHere l = 20, h = 10, f = 20, cf (preceding) = 5 + x, N/2 = 30.\nMedian = l + [(N/2 - cf)/f] × h => 28.5 = 20 + [(30 - (5 + x))/20] × 10\n8.5 = (25 - x)/2 => 17 = 25 - x => x = 8.\nFrom (1): y = 15 - 8 = 7.\nHence x = 8, y = 7.",
        "stepMarking": [
          {
            "step": "Equation x + y = 15 & cumulative frequency table",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify median class 20-30 (l=20, f=20, cf=5+x)",
            "marks": "1 Mark"
          },
          {
            "step": "Solve Median formula for x = 8",
            "marks": "1.5 Marks"
          },
          {
            "step": "Obtain y = 7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use median value (28.5) — NOT N/2 — to locate the median class when frequencies have unknowns!",
        "commonPitfall": "Sign error: forgetting brackets in 30 - (5 + x) and writing 30 - 5 + x."
      },
      {
        "id": "model-c10-math-2024-cfpq-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Linear Equations / Quadratic: Upstream & Downstream Boat Problem / Pipe Filling",
        "questionText": "Two water taps together can fill a tank in 9⅜ hours. The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.",
        "modelAnswer": "Let smaller tap take x hours alone, so larger tap takes (x - 10) hours alone.\nIn 1 hour, combined portion filled = 1/x + 1/(x - 10) = 8/75 (since 9⅜ = 75/8 h).\n(2x - 10) / [x(x - 10)] = 8/75 => 150x - 750 = 8x² - 80x => 8x² - 230x + 750 = 0 => 4x² - 115x + 375 = 0\n4x² - 100x - 15x + 375 = 0 => (x - 25)(4x - 15) = 0.\nx = 25 or x = 15/4 = 3.75 (rejected as x - 10 = -6.25 < 0).\nHence smaller tap = 25 hours, larger tap = 15 hours.",
        "stepMarking": [
          {
            "step": "1-hour work rates 1/x + 1/(x-10) = 8/75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Form 4x² - 115x + 375 = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "Factorize and reject x = 3.75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Times: 25 hrs and 15 hrs",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always check whether x - 10 > 0 when rejecting the smaller root!",
        "commonPitfall": "Adding times directly: x + (x - 10) = 75/8 (wrong!)."
      },
      {
        "id": "model-c10-math-2024-cfpq-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Arithmetic Progressions (Seating / Salary Increment)",
        "questionText": "Read the case and answer:\nA stadium has rows of seats arranged such that the first row has 20 seats, the second row has 24 seats, the third row has 28 seats, and so on.\n\n(a) Find the number of seats in the 15th row. (1M)\n(b) Which row has exactly 100 seats? (1M)\n(c) Calculate the total number of seats in the first 20 rows of the stadium. (2M)",
        "modelAnswer": "(a) a = 20, d = 4. a₁₅ = 20 + 14(4) = 20 + 56 = 76 seats.\n(b) aₙ = 20 + (n - 1)4 = 100 => 4(n - 1) = 80 => n - 1 = 20 => n = 21st row.\n(c) S₂₀ = (20/2)[2(20) + 19(4)] = 10 × (40 + 76) = 10 × 116 = 1160 seats.",
        "stepMarking": [
          {
            "step": "(a) a₁₅ = 76",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 21st row",
            "marks": "1 Mark"
          },
          {
            "step": "(c) S₂₀ = 1160 seats",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check: a₂₁ = 20 + 20×4 = 100.",
        "commonPitfall": "Using n instead of n-1 in aₙ = a + (n-1)d."
      },
      {
        "id": "model-c10-math-2024-cfpq-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Coordinate Geometry (School Sports Ground Map)",
        "questionText": "Read the case and answer:\nOn a coordinate grid of a school ground, flag posts are placed at A(2, 3), B(6, 7), and C(10, 3).\n\n(a) Find the distance between flag posts A and C. (1M)\n(b) Find the lengths AB and BC to determine what type of triangle ABC is. (2M)\n(c) Find the coordinates of the midpoint D of AC, and distance BD. (1M)",
        "modelAnswer": "(a) AC = √((10 - 2)² + (3 - 3)²) = √64 = 8 units.\n(b) AB = √((6 - 2)² + (7 - 3)²) = √(16 + 16) = 4√2 units. BC = √((10 - 6)² + (3 - 7)²) = √(16 + 16) = 4√2 units. Since AB = BC AND AB² + BC² = 32 + 32 = 64 = AC², ΔABC is a right-angled isosceles triangle (∠B = 90°).\n(c) Midpoint D of AC = ((2+10)/2, (3+3)/2) = (6, 3). Distance BD = 7 - 3 = 4 units.",
        "stepMarking": [
          {
            "step": "(a) AC = 8 units",
            "marks": "1 Mark"
          },
          {
            "step": "(b) AB = BC = 4√2 & right isosceles check",
            "marks": "2 Marks"
          },
          {
            "step": "(c) D(6,3) & BD = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check Pythagoras AB² + BC² = AC² in triangle classification!",
        "commonPitfall": "Stopping at \"isosceles\" without checking the 90° angle."
      },
      {
        "id": "model-c10-math-2024-cfpq-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Applications of Trigonometry (Lighthouse & Two Ships)",
        "questionText": "Read the case and answer:\nFrom the top of a 75 m high lighthouse above sea level, a coast guard observes two ships on the same side of the lighthouse approaching directly towards it, at angles of depression 30° and 45°.\n\n(a) Find the distance of the closer ship from the base of the lighthouse. (1M)\n(b) Find the distance of the farther ship from the base of the lighthouse. (1M)\n(c) Calculate the exact distance between the two ships (use √3 = 1.73). (2M)",
        "modelAnswer": "(a) Closer ship has larger angle 45°: d₁ = 75 / tan 45° = 75 m.\n(b) Farther ship has smaller angle 30°: d₂ = 75 / tan 30° = 75√3 m.\n(c) Distance between ships = d₂ - d₁ = 75(√3 - 1) = 75(1.73 - 1) = 75 × 0.73 = 54.75 m.",
        "stepMarking": [
          {
            "step": "(a) 75 m",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 75√3 m",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 75(√3 - 1) = 54.75 m",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Closer object ALWAYS has the larger angle of depression (45° > 30°).",
        "commonPitfall": "Placing 30° closer to the lighthouse than 45°."
      }
    ]
  },
  {
    "id": "model-c10-math-2023-dav",
    "title": "DAV Schools National Class 10 Mathematics Pre-Board (2023)",
    "subject": "Mathematics",
    "targetClass": "Class 10",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "DAV/C10/MAT-03",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper has 5 Sections A, B, C, D, and E comprising 38 compulsory questions.",
      "Section A has 20 MCQs (Q1–Q18) and Assertion-Reason (Q19–Q20) carrying 1 mark each.",
      "Section B has 5 Very Short Answer questions carrying 2 marks each.",
      "Section C has 6 Short Answer questions carrying 3 marks each.",
      "Section D has 4 Long Answer questions carrying 5 marks each.",
      "Section E has 3 case-based integrated units of assessment (4 marks each) with sub-parts."
    ],
    "questions": [
      {
        "id": "model-c10-math-2023-dav-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Nature of Roots",
        "questionText": "If the quadratic equation 2x² - kx + 2 = 0 has two equal real roots, then the values of k are:",
        "options": [
          "A) ±2",
          "B) ±4",
          "C) 4 only",
          "D) ±8"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For equal roots, discriminant D = b² - 4ac = 0 => (-k)² - 4(2)(2) = 0 => k² = 16 => k = ±4.",
        "stepMarking": [
          {
            "step": "D = k² - 16 = 0 => k = ±4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write ± when taking square root of k².",
        "commonPitfall": "Writing only k = +4."
      },
      {
        "id": "model-c10-math-2023-dav-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Arithmetic Progressions: Common Difference",
        "questionText": "The common difference of the AP: 1/p, (1-p)/p, (1-2p)/p, ... is:",
        "options": [
          "A) 1",
          "B) 1/p",
          "C) -1",
          "D) -1/p"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. d = a₂ - a₁ = (1 - p)/p - 1/p = -p/p = -1.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ = -p/p = -1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Simplify fraction numerators carefully.",
        "commonPitfall": "Leaving answer as -p or -1/p."
      },
      {
        "id": "model-c10-math-2023-dav-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Triangles: Basic Proportionality Theorem Application",
        "questionText": "In ΔABC, DE ∥ BC with D on AB and E on AC. If AD = 3 cm, DB = 6 cm, and AE = 4.5 cm, then AC equals:",
        "options": [
          "A) 9 cm",
          "B) 13.5 cm",
          "C) 10.5 cm",
          "D) 12 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By BPT, AD/DB = AE/EC => 3/6 = 4.5/EC => EC = 9 cm. Therefore AC = AE + EC = 4.5 + 9 = 13.5 cm.",
        "stepMarking": [
          {
            "step": "EC = 9 cm via BPT, then AC = 4.5 + 9 = 13.5 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read whether question asks EC or full side AC!",
        "commonPitfall": "Marking EC = 9 cm instead of AC = 13.5 cm."
      },
      {
        "id": "model-c10-math-2023-dav-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Distance from Origin & Axes",
        "questionText": "The distance of the point P(-6, 8) from the x-axis and from the origin respectively are:",
        "options": [
          "A) 6, 10",
          "B) 8, 10",
          "C) -6, 10",
          "D) 8, 14"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Distance from x-axis = |y-coordinate| = |8| = 8 units. Distance from origin = √((-6)² + 8²) = √(36 + 64) = √100 = 10 units.",
        "stepMarking": [
          {
            "step": "Distance from x-axis = |y| = 8; from origin = 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distance from x-axis is |y|; distance from y-axis is |x|.",
        "commonPitfall": "Mixing up x-axis distance with |x| = 6."
      },
      {
        "id": "model-c10-math-2023-dav-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Midpoint & Parallelogram Vertex",
        "questionText": "If the midpoint of the line segment joining A(3, 4) and B(k, 6) is P(x, y) and x + y - 10 = 0, then the value of k is:",
        "options": [
          "A) 4",
          "B) 5",
          "C) 7",
          "D) 10"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Midpoint P = ((3+k)/2, (4+6)/2) = ((3+k)/2, 5). Substituting into x + y - 10 = 0: (3+k)/2 + 5 - 10 = 0 => (3+k)/2 = 5 => 3 + k = 10 => k = 7.",
        "stepMarking": [
          {
            "step": "Midpoint y=5 => x=5 => (3+k)/2 = 5 => k=7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Compute y-coordinate first cleanly: (4+6)/2 = 5.",
        "commonPitfall": "Arithmetic error subtracting 10."
      },
      {
        "id": "model-c10-math-2023-dav-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Fundamental Identities",
        "questionText": "The value of 9 sec²A - 9 tan²A is equal to:",
        "options": [
          "A) 1",
          "B) 9",
          "C) 8",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. 9(sec²A - tan²A) = 9(1) = 9, using the identity 1 + tan²A = sec²A.",
        "stepMarking": [
          {
            "step": "Factor 9 and apply sec²A - tan²A = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for sign reversal: tan²A - sec²A = -1.",
        "commonPitfall": "Marking 1 directly without multiplying by 9."
      },
      {
        "id": "model-c10-math-2023-dav-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Exact Angles Evaluation",
        "questionText": "If sin θ + cos θ = √2 cos θ (θ ≠ 90°), then the value of tan θ is:",
        "options": [
          "A) √2 - 1",
          "B) √2 + 1",
          "C) √2",
          "D) -√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Dividing both sides by cos θ: tan θ + 1 = √2 => tan θ = √2 - 1.",
        "stepMarking": [
          {
            "step": "Divide by cos θ to get tan θ + 1 = √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dividing equation in sin and cos by cos θ immediately converts it to tan θ.",
        "commonPitfall": "Squaring both sides unnecessarily and complicating algebra."
      },
      {
        "id": "model-c10-math-2023-dav-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Trigonometry: Shadow Length Angle",
        "questionText": "If the length of the shadow of a vertical pole is √3 times the height of the pole, then the angle of elevation of the Sun is:",
        "options": [
          "A) 30°",
          "B) 45°",
          "C) 60°",
          "D) 90°"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. tan θ = height / shadow = h / (√3 h) = 1/√3 = tan 30° => θ = 30°.",
        "stepMarking": [
          {
            "step": "tan θ = 1/√3 => θ = 30°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Longer shadow means lower Sun angle (30°); shorter shadow means steeper Sun angle (60°).",
        "commonPitfall": "Writing tan θ = √3 and marking 60°."
      },
      {
        "id": "model-c10-math-2023-dav-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Tangent Perpendicularity & Pythagoras",
        "questionText": "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
        "options": [
          "A) 7 cm",
          "B) 12 cm",
          "C) 15 cm",
          "D) 24.5 cm"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent is perpendicular to radius at point of contact (∠OTQ = 90°). By Pythagoras: r = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.",
        "stepMarking": [
          {
            "step": "Right triangle OTQ => r = √(25² - 24²) = 7 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember Pythagorean triplet (7, 24, 25).",
        "commonPitfall": "Taking 25 as the tangent and 24 as hypotenuse."
      },
      {
        "id": "model-c10-math-2023-dav-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Quadrilateral Circumscribing a Circle",
        "questionText": "A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 12 cm, BC = 15 cm, and CD = 14 cm, then the length of AD is:",
        "options": [
          "A) 10 cm",
          "B) 11 cm",
          "C) 12 cm",
          "D) 13 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Opposite sides of a quadrilateral circumscribing a circle have equal sums: AB + CD = BC + AD => 12 + 14 = 15 + AD => AD = 26 - 15 = 11 cm.",
        "stepMarking": [
          {
            "step": "Apply AB + CD = BC + AD => AD = 11 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of opposite pairs is always equal because tangents from an external vertex are equal.",
        "commonPitfall": "Equating AB + BC = CD + AD (adjacent sides)."
      },
      {
        "id": "model-c10-math-2023-dav-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Areas Related to Circles: Sector Area & Arc Length",
        "questionText": "The area of a quadrant of a circle whose circumference is 22 cm (use π = 22/7) is:",
        "options": [
          "A) 77/2 cm²",
          "B) 77/4 cm²",
          "C) 77/8 cm²",
          "D) 77/16 cm²"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 2πr = 22 => 2 × (22/7) × r = 22 => r = 7/2 cm. Area of quadrant = (1/4)πr² = (1/4) × (22/7) × (7/2) × (7/2) = 77/8 cm².",
        "stepMarking": [
          {
            "step": "r = 7/2 cm, quadrant area = (1/4)πr² = 77/8 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quadrant means central angle 90° = 1/4 of full circle.",
        "commonPitfall": "Computing full circle area 77/2 or semicircle 77/4."
      },
      {
        "id": "model-c10-math-2023-dav-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Surface Areas & Volumes: Ratio of Sphere & Cube",
        "questionText": "If the volume and surface area of a solid sphere are numerically equal, then its radius is:",
        "options": [
          "A) 2 units",
          "B) 3 units",
          "C) 4 units",
          "D) 6 units"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. (4/3)πr³ = 4πr² => r/3 = 1 => r = 3 units.",
        "stepMarking": [
          {
            "step": "Equate (4/3)πr³ = 4πr² => r = 3 units",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check if diameter is asked (6) vs radius (3). Here radius is asked.",
        "commonPitfall": "Writing r = 6 (diameter)."
      },
      {
        "id": "model-c10-math-2023-dav-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Empirical Formula (Mean, Median, Mode)",
        "questionText": "If the mean and median of a moderately skewed distribution are 24 and 26 respectively, then its mode is:",
        "options": [
          "A) 28",
          "B) 30",
          "C) 22",
          "D) 25"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Empirical relation: 3 Median = Mode + 2 Mean => Mode = 3(26) - 2(24) = 78 - 48 = 30.",
        "stepMarking": [
          {
            "step": "Apply Mode = 3 Median - 2 Mean = 78 - 48 = 30",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize exact coefficients: 3 Median = Mode + 2 Mean.",
        "commonPitfall": "Swapping coefficients of Mean and Median."
      },
      {
        "id": "model-c10-math-2023-dav-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Dice & Coin Outcomes",
        "questionText": "Two unbiased dice are thrown simultaneously. What is the probability of getting a doublet of prime numbers?",
        "options": [
          "A) 1/6",
          "B) 1/12",
          "C) 1/9",
          "D) 1/4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Total outcomes = 36. Prime numbers on a die are {2, 3, 5}. Prime doublets are (2,2), (3,3), (5,5) -> 3 outcomes. P = 3/36 = 1/12.",
        "stepMarking": [
          {
            "step": "3 prime doublets out of 36 outcomes => 1/12",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 1 is NEITHER prime NOR composite — exclude (1,1)!",
        "commonPitfall": "Including (1,1) and getting 4/36 = 1/9."
      },
      {
        "id": "model-c10-math-2023-dav-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Non-Leap Year 53 Sundays",
        "questionText": "What is the probability that a non-leap year selected at random will contain 53 Sundays?",
        "options": [
          "A) 1/7",
          "B) 2/7",
          "C) 5/7",
          "D) 53/365"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A non-leap year has 365 days = 52 weeks + 1 extra day. That 1 extra day can be any of the 7 days of the week. Hence P(53 Sundays) = 1/7.",
        "stepMarking": [
          {
            "step": "365 = 52 weeks + 1 odd day => P = 1/7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For a leap year (366 days = 52 weeks + 2 odd days), probability is 2/7.",
        "commonPitfall": "Marking 2/7 for a non-leap year."
      },
      {
        "id": "model-c10-math-2023-dav-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Linear Equations: Parallel Lines Geometry",
        "questionText": "Graphically, the pair of equations 6x - 3y + 10 = 0 and 2x - y + 9 = 0 represents two lines which are:",
        "options": [
          "A) Intersecting at one point",
          "B) Coincident",
          "C) Parallel",
          "D) Perpendicular"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. a₁/a₂ = 6/2 = 3, b₁/b₂ = -3/(-1) = 3, c₁/c₂ = 10/9. Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel (inconsistent).",
        "stepMarking": [
          {
            "step": "Compare ratios 3 = 3 ≠ 10/9 => parallel lines",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check signs of negative coefficients carefully (-3/-1 = +3).",
        "commonPitfall": "Misreading -y coefficient as +1."
      },
      {
        "id": "model-c10-math-2023-dav-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Sum of Roots",
        "questionText": "If one root of the quadratic equation 3x² - 10x + k = 0 is the reciprocal of the other, then the value of k is:",
        "options": [
          "A) -3",
          "B) 3",
          "C) 1/3",
          "D) 10"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Let roots be α and 1/α. Product of roots = α · (1/α) = 1 = c/a = k/3 => k = 3.",
        "stepMarking": [
          {
            "step": "Product of roots = k/3 = 1 => k = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reciprocal roots => product = 1 => c = a immediately!",
        "commonPitfall": "Using sum of roots instead of product."
      },
      {
        "id": "model-c10-math-2023-dav-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "AP: Sum of First n Odd Natural Numbers",
        "questionText": "The sum of the first 20 odd natural numbers (1 + 3 + 5 + ... up to 20 terms) is:",
        "options": [
          "A) 200",
          "B) 400",
          "C) 420",
          "D) 380"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. a = 1, d = 2, n = 20. S₂₀ = 20/2 [2(1) + 19(2)] = 10 × 40 = 400 (also formula n² = 20² = 400).",
        "stepMarking": [
          {
            "step": "S₂₀ = 400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of first n odd natural numbers is always n².",
        "commonPitfall": "Stopping at the 20th term (39) instead of sum."
      },
      {
        "id": "model-c10-math-2023-dav-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Collinear Points",
        "questionText": "Assertion (A): The point (0, 4) lies on the y-axis.\nReason (R): The x-coordinate (abscissa) of every point lying on the y-axis is zero.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Since abscissa x = 0 in (0, 4), the point lies on the y-axis.",
        "stepMarking": [
          {
            "step": "Option (A) with y-axis condition x = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Point on x-axis has form (x, 0); point on y-axis has form (0, y).",
        "commonPitfall": "Confusing x-axis and y-axis."
      },
      {
        "id": "model-c10-math-2023-dav-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Number of Tangents",
        "questionText": "Assertion (A): From a point lying inside a circle, only two tangents can be drawn to the circle.\nReason (R): A tangent touches the circle at exactly one point.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. ZERO tangents can be drawn from a point INSIDE a circle (every line through an interior point is a secant intersecting at 2 points). Thus A is false, while R is true.",
        "stepMarking": [
          {
            "step": "Option (D): A false (0 tangents from interior), R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Interior point = 0 tangents; Point on circle = 1 tangent; Exterior point = 2 tangents.",
        "commonPitfall": "Assuming 2 tangents can be drawn from any point."
      },
      {
        "id": "model-c10-math-2023-dav-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Coordinate Geometry: Equidistant Point on X-Axis",
        "questionText": "Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).",
        "modelAnswer": "Let the point on x-axis be P(x, 0). Given PA = PB => PA² = PB².\n(x - 2)² + (0 + 5)² = (x + 2)² + (0 - 9)²\nx² - 4x + 4 + 25 = x² + 4x + 4 + 81\n-8x = 85 - 29 = 56 => x = -7.\nRequired point is (-7, 0).",
        "stepMarking": [
          {
            "step": "Set P(x, 0) and PA² = PB²",
            "marks": "1 Mark"
          },
          {
            "step": "Solve -8x = 56 => (-7, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Squaring PA = PB avoids messy square roots.",
        "commonPitfall": "Writing point as (-7) instead of ordered pair (-7, 0)."
      },
      {
        "id": "model-c10-math-2023-dav-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Real Numbers: End with Digit 0 Check",
        "questionText": "Check whether 6ⁿ can end with the digit 0 for any natural number n. Give mathematical justification.",
        "modelAnswer": "For any number 6ⁿ to end with the digit 0, it must be divisible by 10, meaning its prime factorisation must contain both 2 and 5.\nHowever, 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ.\nBy the Fundamental Theorem of Arithmetic (uniqueness of prime factorisation), 5 is NOT a prime factor of 6ⁿ. Hence 6ⁿ can NEVER end with digit 0 for any natural number n.",
        "stepMarking": [
          {
            "step": "Condition: prime factors must include 2 and 5",
            "marks": "1 Mark"
          },
          {
            "step": "6ⁿ = 2ⁿ×3ⁿ lacks factor 5 (Fundamental Theorem of Arithmetic)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always invoke \"Uniqueness of Fundamental Theorem of Arithmetic\".",
        "commonPitfall": "Giving only examples n=1, 2, 3 instead of general proof."
      },
      {
        "id": "model-c10-math-2023-dav-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Polynomials: Constructing Polynomial from Zeroes",
        "questionText": "Find the zeroes of the quadratic polynomial x² - 2x - 8 and verify the relationship between its zeroes and coefficients.",
        "modelAnswer": "x² - 2x - 8 = x² - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2).\nZeroes are α = 4 and β = -2.\nVerification:\nSum of zeroes: α + β = 4 + (-2) = 2 = -(-2)/1 = -b/a.\nProduct of zeroes: αβ = 4 × (-2) = -8 = (-8)/1 = c/a.",
        "stepMarking": [
          {
            "step": "Find zeroes 4 and -2",
            "marks": "1 Mark"
          },
          {
            "step": "Verify both sum (-b/a) and product (c/a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show LHS and RHS explicitly in verification.",
        "commonPitfall": "Sign mistake in -b/a = -(-2)/1."
      },
      {
        "id": "model-c10-math-2023-dav-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Triangles: Similarity & Parallel Segments",
        "questionText": "In ΔABC, ∠ADE = ∠B, AD = 3.8 cm, AE = 3.6 cm, BE = 2.1 cm, and BC = 4.2 cm (with D on AB and E on AC? Wait: let D on AB, E on AC? Correction: if D is on AC and E is on BC, or standard NCERT: In ΔADE and ΔABC, ∠A = ∠A, ∠ADE = ∠ABC). Given AD = 4 cm, DB = 5 cm, and DE = 3.6 cm where DE ∥ BC, find BC.",
        "modelAnswer": "Since DE ∥ BC, ∠ADE = ∠ABC and ∠AED = ∠ACB (corresponding angles).\nBy AA similarity criterion, ΔADE ~ ΔABC.\nHence AD / AB = DE / BC.\nAB = AD + DB = 4 + 5 = 9 cm.\nSo 4 / 9 = 3.6 / BC => BC = (3.6 × 9) / 4 = 0.9 × 9 = 8.1 cm.",
        "stepMarking": [
          {
            "step": "Prove ΔADE ~ ΔABC (AA similarity)",
            "marks": "1 Mark"
          },
          {
            "step": "Use AD/AB = DE/BC to get BC = 8.1 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use AD/AB (not AD/DB!) when comparing parallel segments DE and BC!",
        "commonPitfall": "Writing AD/DB = DE/BC and getting wrong value."
      },
      {
        "id": "model-c10-math-2023-dav-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometry: Sin(A-B) & Cos(A+B)",
        "questionText": "If sin(A - B) = 1/2 and cos(A + B) = 1/2, where 0° < A + B ≤ 90° and A > B, find the angles A and B.",
        "modelAnswer": "sin(A - B) = 1/2 = sin 30° => A - B = 30° ...(1)\ncos(A + B) = 1/2 = cos 60° => A + B = 60° ...(2)\nAdding (1) and (2): 2A = 90° => A = 45°.\nSubstituting in (2): 45° + B = 60° => B = 15°.",
        "stepMarking": [
          {
            "step": "Form A - B = 30° and A + B = 60°",
            "marks": "1 Mark"
          },
          {
            "step": "Solve to obtain A = 45°, B = 15°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify 0° < 45+15 ≤ 90° and 45 > 15.",
        "commonPitfall": "Confusing cos 60° = 1/2 with cos 30°."
      },
      {
        "id": "model-c10-math-2023-dav-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Quadratic Equations: Train Speed Word Problem",
        "questionText": "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.",
        "modelAnswer": "Let uniform speed = x km/h.\nTime taken at x km/h = 360/x hours.\nTime taken at (x + 5) km/h = 360/(x + 5) hours.\nGiven: 360/x - 360/(x + 5) = 1\n360[ (x + 5 - x) / (x(x + 5)) ] = 1 => 1800 = x² + 5x => x² + 5x - 1800 = 0\n(x + 45)(x - 40) = 0 => x = 40 or x = -45 (rejected as speed > 0).\nSpeed of train = 40 km/h.",
        "stepMarking": [
          {
            "step": "Equation 360/x - 360/(x+5) = 1",
            "marks": "1 Mark"
          },
          {
            "step": "Quadratic x² + 5x - 1800 = 0",
            "marks": "1 Mark"
          },
          {
            "step": "Solve x = 40 km/h",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note that original speed is slower -> takes MORE time, so 360/x comes first!",
        "commonPitfall": "Subtracting in reverse order getting -1 on RHS."
      },
      {
        "id": "model-c10-math-2023-dav-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "AP: Finding Sum When Two Terms Are Given",
        "questionText": "If the sum of the first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of its first n terms.",
        "modelAnswer": "S₇ = (7/2)[2a + 6d] = 49 => 7(a + 3d) = 49 => a + 3d = 7 ...(1)\nS₁₇ = (17/2)[2a + 16d] = 289 => 17(a + 8d) = 289 => a + 8d = 17 ...(2)\nSubtracting (1) from (2): 5d = 10 => d = 2.\nFrom (1): a + 6 = 7 => a = 1.\nSum of n terms Sₙ = (n/2)[2(1) + (n - 1)(2)] = (n/2)[2n] = n².",
        "stepMarking": [
          {
            "step": "Equations a + 3d = 7 and a + 8d = 17",
            "marks": "1 Mark"
          },
          {
            "step": "Find a = 1, d = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Sₙ = n²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: S₇ = 7² = 49, S₁₇ = 17² = 289!",
        "commonPitfall": "Arithmetic error dividing 289 by 17."
      },
      {
        "id": "model-c10-math-2023-dav-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometry: Standard Proving Identity",
        "questionText": "Prove that: (sin θ - 2 sin³θ) / (2 cos³θ - cos θ) = tan θ.",
        "modelAnswer": "LHS = [sin θ (1 - 2 sin²θ)] / [cos θ (2 cos²θ - 1)]\nSubstitute 1 = sin²θ + cos²θ OR cos²θ = 1 - sin²θ in denominator:\n2 cos²θ - 1 = 2(1 - sin²θ) - 1 = 2 - 2 sin²θ - 1 = 1 - 2 sin²θ.\nTherefore LHS = [sin θ (1 - 2 sin²θ)] / [cos θ (1 - 2 sin²θ)] = sin θ / cos θ = tan θ = RHS.",
        "stepMarking": [
          {
            "step": "Factor sin θ and cos θ from numerator & denominator",
            "marks": "1 Mark"
          },
          {
            "step": "Convert 2cos²θ - 1 to 1 - 2sin²θ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Cancel common factor to get tan θ",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Convert EITHER numerator to cos OR denominator to sin — never both at once.",
        "commonPitfall": "Expanding without factoring sin θ and cos θ."
      },
      {
        "id": "model-c10-math-2023-dav-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Circles: Equal Opposite Angles Subtended by Cyclic Quadrilateral",
        "questionText": "Prove that the lengths of tangents drawn from an external point to a circle are equal. Use this to prove that in two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.",
        "modelAnswer": "Part 1: In ΔOAP and ΔOBP, OA = OB (radii), OP = OP (common), ∠OAP = ∠OBP = 90° (radius ⊥ tangent). By RHS congruence, ΔOAP ≅ ΔOBP => PA = PB.\nPart 2: Let AB be chord of larger circle touching smaller circle at P, with common centre O. Join OP. Since AB is tangent to smaller circle, OP ⊥ AB. In larger circle, perpendicular from centre O to chord AB bisects the chord. Hence AP = BP.",
        "stepMarking": [
          {
            "step": "RHS proof of PA = PB",
            "marks": "1.5 Marks"
          },
          {
            "step": "Concentric circle proof using OP ⊥ AB bisection theorem",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Both proofs are NCERT Class 10 Chapter 10 core theorems.",
        "commonPitfall": "Forgetting to cite \"perpendicular from centre bisects the chord\"."
      },
      {
        "id": "model-c10-math-2023-dav-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Coordinate Geometry: Ratio Division by Line / Axis",
        "questionText": "Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.",
        "modelAnswer": "Let the x-axis divide AB at P(x, 0) in the ratio k : 1.\nBy section formula for y-coordinate:\n0 = (5k + 1(-5)) / (k + 1) => 5k - 5 = 0 => k = 1.\nRatio is 1 : 1.\nNow x = (-4(1) + 1(1)) / (1 + 1) = -3/2.\nPoint of division is (-3/2, 0).",
        "stepMarking": [
          {
            "step": "Assume ratio k:1 and point P(x, 0)",
            "marks": "1 Mark"
          },
          {
            "step": "Find k = 1 -> ratio 1:1",
            "marks": "1 Mark"
          },
          {
            "step": "Coordinates (-3/2, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Using ratio k:1 reduces two unknowns (m₁, m₂) to one unknown k.",
        "commonPitfall": "Setting x = 0 instead of y = 0 for the x-axis."
      },
      {
        "id": "model-c10-math-2023-dav-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Probability: Standard Deck of 52 Playing Cards",
        "questionText": "From a well-shuffled pack of 52 playing cards, all face cards of spades and black queens are removed. One card is drawn at random from the remaining pack. Find the probability of getting:\n(a) a black face card\n(b) a red king\n(c) neither a king nor a jack.",
        "modelAnswer": "Cards removed: 3 spade face cards (J♠, Q♠, K♠) + remaining black queen (Q♣) = 4 cards removed.\nRemaining cards = 52 - 4 = 48.\n(a) Black face cards remaining: J♣ and K♣ (since J♠, Q♠, K♠, Q♣ removed) = 2 cards. P = 2/48 = 1/24.\n(b) Red kings (K♥, K♦) = 2 cards. P = 2/48 = 1/24.\n(c) Remaining Kings = 3 (K♥, K♦, K♣); Remaining Jacks = 3 (J♥, J♦, J♣) -> 6 cards. Neither = 48 - 6 = 42. P = 42/48 = 7/8.",
        "stepMarking": [
          {
            "step": "Remaining total = 48",
            "marks": "0.5 Mark"
          },
          {
            "step": "(a) 2/48 = 1/24",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2/48 = 1/24",
            "marks": "0.5 Mark"
          },
          {
            "step": "(c) 42/48 = 7/8",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never double-count Q♠ when removing both \"face cards of spades\" AND \"black queens\"!",
        "commonPitfall": "Subtracting 3 + 2 = 5 cards instead of 4 (double-counting Queen of Spades)."
      },
      {
        "id": "model-c10-math-2023-dav-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Surface Areas & Volumes: Hollow Cylindrical / Conical Rocket or Tent",
        "questionText": "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent. Also, find the cost of the canvas of the tent at the rate of ₹500 per m². (Use π = 22/7)",
        "modelAnswer": "Radius r = 4/2 = 2 m, cylinder height h = 2.1 m, slant height of cone l = 2.8 m.\nCanvas area = CSA of cylinder + CSA of cone = 2πrh + πrl = πr(2h + l)\n= (22/7) × 2 × (2 × 2.1 + 2.8) = (44/7) × (4.2 + 2.8) = (44/7) × 7 = 44 m².\n(Note: Base of tent is NOT covered with canvas).\nCost = 44 × ₹500 = ₹22,000.",
        "stepMarking": [
          {
            "step": "Identify r = 2 m and formula 2πrh + πrl",
            "marks": "1.5 Marks"
          },
          {
            "step": "Calculate canvas area = 44 m²",
            "marks": "2.5 Marks"
          },
          {
            "step": "Total cost = ₹22,000",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Factor out πr before substituting numbers to simplify arithmetic!",
        "commonPitfall": "Adding circular floor area πr² to canvas area."
      },
      {
        "id": "model-c10-math-2023-dav-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Missing Frequencies with Given Median",
        "questionText": "If the median of the following distribution is 28.5 and total frequency N = 60, find the values of x and y:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60\nFrequency:       5   |   x   |  20   |  15   |   y   |   5",
        "modelAnswer": "Total frequency N = 5 + x + 20 + 15 + y + 5 = 45 + x + y = 60 => x + y = 15 ...(1)\nMedian = 28.5 lies in modal/median class 20-30.\nHere l = 20, h = 10, f = 20, cf (preceding) = 5 + x, N/2 = 30.\nMedian = l + [(N/2 - cf)/f] × h => 28.5 = 20 + [(30 - (5 + x))/20] × 10\n8.5 = (25 - x)/2 => 17 = 25 - x => x = 8.\nFrom (1): y = 15 - 8 = 7.\nHence x = 8, y = 7.",
        "stepMarking": [
          {
            "step": "Equation x + y = 15 & cumulative frequency table",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify median class 20-30 (l=20, f=20, cf=5+x)",
            "marks": "1 Mark"
          },
          {
            "step": "Solve Median formula for x = 8",
            "marks": "1.5 Marks"
          },
          {
            "step": "Obtain y = 7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use median value (28.5) — NOT N/2 — to locate the median class when frequencies have unknowns!",
        "commonPitfall": "Sign error: forgetting brackets in 30 - (5 + x) and writing 30 - 5 + x."
      },
      {
        "id": "model-c10-math-2023-dav-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Linear Equations / Quadratic: Upstream & Downstream Boat Problem / Pipe Filling",
        "questionText": "Two water taps together can fill a tank in 9⅜ hours. The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.",
        "modelAnswer": "Let smaller tap take x hours alone, so larger tap takes (x - 10) hours alone.\nIn 1 hour, combined portion filled = 1/x + 1/(x - 10) = 8/75 (since 9⅜ = 75/8 h).\n(2x - 10) / [x(x - 10)] = 8/75 => 150x - 750 = 8x² - 80x => 8x² - 230x + 750 = 0 => 4x² - 115x + 375 = 0\n4x² - 100x - 15x + 375 = 0 => (x - 25)(4x - 15) = 0.\nx = 25 or x = 15/4 = 3.75 (rejected as x - 10 = -6.25 < 0).\nHence smaller tap = 25 hours, larger tap = 15 hours.",
        "stepMarking": [
          {
            "step": "1-hour work rates 1/x + 1/(x-10) = 8/75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Form 4x² - 115x + 375 = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "Factorize and reject x = 3.75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Times: 25 hrs and 15 hrs",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always check whether x - 10 > 0 when rejecting the smaller root!",
        "commonPitfall": "Adding times directly: x + (x - 10) = 75/8 (wrong!)."
      },
      {
        "id": "model-c10-math-2023-dav-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Triangles: Basic Proportionality Theorem (Thales Theorem Proof)",
        "questionText": "State and prove the Basic Proportionality Theorem (Thales Theorem). Using this theorem, prove that a line drawn through the mid-point of one side of a triangle parallel to another side bisects the third side.",
        "modelAnswer": "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof: In ΔABC, DE ∥ BC. Join BE, CD and draw EN ⊥ AB, DM ⊥ AC.\nar(ΔADE)/ar(ΔBDE) = (½·AD·EN)/(½·DB·EN) = AD/DB.\nar(ΔADE)/ar(ΔDEC) = (½·AE·DM)/(½·EC·DM) = AE/EC.\nSince ΔBDE and ΔDEC lie on same base DE and between same parallels DE ∥ BC, ar(ΔBDE) = ar(ΔDEC).\nTherefore AD/DB = AE/EC.\nApplication: If D is midpoint of AB, AD/DB = 1 => AE/EC = 1 => AE = EC (E is midpoint of AC).",
        "stepMarking": [
          {
            "step": "Statement + Given + Construction",
            "marks": "1 Mark"
          },
          {
            "step": "Area ratios AD/DB and AE/EC",
            "marks": "2 Marks"
          },
          {
            "step": "Equal base/parallels -> AD/DB = AE/EC",
            "marks": "1 Mark"
          },
          {
            "step": "Midpoint corollary proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Thales theorem is the most frequently tested 5-mark geometry proof in CBSE Class 10.",
        "commonPitfall": "Forgetting to draw altitudes EN and DM in construction."
      },
      {
        "id": "model-c10-math-2023-dav-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Coordinate Geometry (School Sports Ground Map)",
        "questionText": "Read the case and answer:\nOn a coordinate grid of a school ground, flag posts are placed at A(2, 3), B(6, 7), and C(10, 3).\n\n(a) Find the distance between flag posts A and C. (1M)\n(b) Find the lengths AB and BC to determine what type of triangle ABC is. (2M)\n(c) Find the coordinates of the midpoint D of AC, and distance BD. (1M)",
        "modelAnswer": "(a) AC = √((10 - 2)² + (3 - 3)²) = √64 = 8 units.\n(b) AB = √((6 - 2)² + (7 - 3)²) = √(16 + 16) = 4√2 units. BC = √((10 - 6)² + (3 - 7)²) = √(16 + 16) = 4√2 units. Since AB = BC AND AB² + BC² = 32 + 32 = 64 = AC², ΔABC is a right-angled isosceles triangle (∠B = 90°).\n(c) Midpoint D of AC = ((2+10)/2, (3+3)/2) = (6, 3). Distance BD = 7 - 3 = 4 units.",
        "stepMarking": [
          {
            "step": "(a) AC = 8 units",
            "marks": "1 Mark"
          },
          {
            "step": "(b) AB = BC = 4√2 & right isosceles check",
            "marks": "2 Marks"
          },
          {
            "step": "(c) D(6,3) & BD = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check Pythagoras AB² + BC² = AC² in triangle classification!",
        "commonPitfall": "Stopping at \"isosceles\" without checking the 90° angle."
      },
      {
        "id": "model-c10-math-2023-dav-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Applications of Trigonometry (Lighthouse & Two Ships)",
        "questionText": "Read the case and answer:\nFrom the top of a 75 m high lighthouse above sea level, a coast guard observes two ships on the same side of the lighthouse approaching directly towards it, at angles of depression 30° and 45°.\n\n(a) Find the distance of the closer ship from the base of the lighthouse. (1M)\n(b) Find the distance of the farther ship from the base of the lighthouse. (1M)\n(c) Calculate the exact distance between the two ships (use √3 = 1.73). (2M)",
        "modelAnswer": "(a) Closer ship has larger angle 45°: d₁ = 75 / tan 45° = 75 m.\n(b) Farther ship has smaller angle 30°: d₂ = 75 / tan 30° = 75√3 m.\n(c) Distance between ships = d₂ - d₁ = 75(√3 - 1) = 75(1.73 - 1) = 75 × 0.73 = 54.75 m.",
        "stepMarking": [
          {
            "step": "(a) 75 m",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 75√3 m",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 75(√3 - 1) = 54.75 m",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Closer object ALWAYS has the larger angle of depression (45° > 30°).",
        "commonPitfall": "Placing 30° closer to the lighthouse than 45°."
      },
      {
        "id": "model-c10-math-2023-dav-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Surface Area & Volume (Gulab Jamun / Cylindrical Capsule)",
        "questionText": "Read the case and answer:\nA medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The total length of the entire capsule is 14 mm and its diameter is 5 mm. (Use π = 22/7)\n\n(a) Find the radius and the length of the cylindrical middle portion. (1M)\n(b) Calculate the total surface area of the capsule. (2M)\n(c) If a box contains 100 capsules, find the total surface area in cm². (1M)",
        "modelAnswer": "(a) Radius r = 5/2 = 2.5 mm. Length of cylinder h = 14 - 2(2.5) = 14 - 5 = 9 mm.\n(b) TSA = CSA of cylinder + 2 × CSA of hemisphere = 2πrh + 4πr² = 2πr(h + 2r)\n= 2 × (22/7) × 2.5 × (9 + 5) = 2 × (22/7) × 2.5 × 14 = 220 mm².\n(c) For 100 capsules: 100 × 220 = 22,000 mm² = 22,000 / 100 cm² = 220 cm².",
        "stepMarking": [
          {
            "step": "(a) r = 2.5 mm, h = 9 mm",
            "marks": "1 Mark"
          },
          {
            "step": "(b) TSA = 220 mm²",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 22,000 mm² to 220 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "1 cm² = 100 mm² (NOT 10 mm²)!",
        "commonPitfall": "Forgetting to subtract 2r from total length 14 mm to get cylinder length."
      }
    ]
  },
  {
    "id": "model-c10-math-2024-exemplar",
    "title": "NCERT Exemplar High-Yield Class 10 Mathematics Mock Paper (2024)",
    "subject": "Mathematics",
    "targetClass": "Class 10",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "EXEMPLAR/C10/MAT-04",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper has 5 Sections A, B, C, D, and E comprising 38 compulsory questions.",
      "Section A has 20 MCQs (Q1–Q18) and Assertion-Reason (Q19–Q20) carrying 1 mark each.",
      "Section B has 5 Very Short Answer questions carrying 2 marks each.",
      "Section C has 6 Short Answer questions carrying 3 marks each.",
      "Section D has 4 Long Answer questions carrying 5 marks each.",
      "Section E has 3 case-based integrated units of assessment (4 marks each) with sub-parts."
    ],
    "questions": [
      {
        "id": "model-c10-math-2024-exemplar-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Distance from Origin & Axes",
        "questionText": "The distance of the point P(-6, 8) from the x-axis and from the origin respectively are:",
        "options": [
          "A) 6, 10",
          "B) 8, 10",
          "C) -6, 10",
          "D) 8, 14"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Distance from x-axis = |y-coordinate| = |8| = 8 units. Distance from origin = √((-6)² + 8²) = √(36 + 64) = √100 = 10 units.",
        "stepMarking": [
          {
            "step": "Distance from x-axis = |y| = 8; from origin = 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distance from x-axis is |y|; distance from y-axis is |x|.",
        "commonPitfall": "Mixing up x-axis distance with |x| = 6."
      },
      {
        "id": "model-c10-math-2024-exemplar-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Coordinate Geometry: Midpoint & Parallelogram Vertex",
        "questionText": "If the midpoint of the line segment joining A(3, 4) and B(k, 6) is P(x, y) and x + y - 10 = 0, then the value of k is:",
        "options": [
          "A) 4",
          "B) 5",
          "C) 7",
          "D) 10"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Midpoint P = ((3+k)/2, (4+6)/2) = ((3+k)/2, 5). Substituting into x + y - 10 = 0: (3+k)/2 + 5 - 10 = 0 => (3+k)/2 = 5 => 3 + k = 10 => k = 7.",
        "stepMarking": [
          {
            "step": "Midpoint y=5 => x=5 => (3+k)/2 = 5 => k=7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Compute y-coordinate first cleanly: (4+6)/2 = 5.",
        "commonPitfall": "Arithmetic error subtracting 10."
      },
      {
        "id": "model-c10-math-2024-exemplar-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Fundamental Identities",
        "questionText": "The value of 9 sec²A - 9 tan²A is equal to:",
        "options": [
          "A) 1",
          "B) 9",
          "C) 8",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. 9(sec²A - tan²A) = 9(1) = 9, using the identity 1 + tan²A = sec²A.",
        "stepMarking": [
          {
            "step": "Factor 9 and apply sec²A - tan²A = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for sign reversal: tan²A - sec²A = -1.",
        "commonPitfall": "Marking 1 directly without multiplying by 9."
      },
      {
        "id": "model-c10-math-2024-exemplar-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Exact Angles Evaluation",
        "questionText": "If sin θ + cos θ = √2 cos θ (θ ≠ 90°), then the value of tan θ is:",
        "options": [
          "A) √2 - 1",
          "B) √2 + 1",
          "C) √2",
          "D) -√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Dividing both sides by cos θ: tan θ + 1 = √2 => tan θ = √2 - 1.",
        "stepMarking": [
          {
            "step": "Divide by cos θ to get tan θ + 1 = √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dividing equation in sin and cos by cos θ immediately converts it to tan θ.",
        "commonPitfall": "Squaring both sides unnecessarily and complicating algebra."
      },
      {
        "id": "model-c10-math-2024-exemplar-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Trigonometry: Shadow Length Angle",
        "questionText": "If the length of the shadow of a vertical pole is √3 times the height of the pole, then the angle of elevation of the Sun is:",
        "options": [
          "A) 30°",
          "B) 45°",
          "C) 60°",
          "D) 90°"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. tan θ = height / shadow = h / (√3 h) = 1/√3 = tan 30° => θ = 30°.",
        "stepMarking": [
          {
            "step": "tan θ = 1/√3 => θ = 30°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Longer shadow means lower Sun angle (30°); shorter shadow means steeper Sun angle (60°).",
        "commonPitfall": "Writing tan θ = √3 and marking 60°."
      },
      {
        "id": "model-c10-math-2024-exemplar-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Tangent Perpendicularity & Pythagoras",
        "questionText": "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
        "options": [
          "A) 7 cm",
          "B) 12 cm",
          "C) 15 cm",
          "D) 24.5 cm"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent is perpendicular to radius at point of contact (∠OTQ = 90°). By Pythagoras: r = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.",
        "stepMarking": [
          {
            "step": "Right triangle OTQ => r = √(25² - 24²) = 7 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember Pythagorean triplet (7, 24, 25).",
        "commonPitfall": "Taking 25 as the tangent and 24 as hypotenuse."
      },
      {
        "id": "model-c10-math-2024-exemplar-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Quadrilateral Circumscribing a Circle",
        "questionText": "A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 12 cm, BC = 15 cm, and CD = 14 cm, then the length of AD is:",
        "options": [
          "A) 10 cm",
          "B) 11 cm",
          "C) 12 cm",
          "D) 13 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Opposite sides of a quadrilateral circumscribing a circle have equal sums: AB + CD = BC + AD => 12 + 14 = 15 + AD => AD = 26 - 15 = 11 cm.",
        "stepMarking": [
          {
            "step": "Apply AB + CD = BC + AD => AD = 11 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of opposite pairs is always equal because tangents from an external vertex are equal.",
        "commonPitfall": "Equating AB + BC = CD + AD (adjacent sides)."
      },
      {
        "id": "model-c10-math-2024-exemplar-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Areas Related to Circles: Sector Area & Arc Length",
        "questionText": "The area of a quadrant of a circle whose circumference is 22 cm (use π = 22/7) is:",
        "options": [
          "A) 77/2 cm²",
          "B) 77/4 cm²",
          "C) 77/8 cm²",
          "D) 77/16 cm²"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 2πr = 22 => 2 × (22/7) × r = 22 => r = 7/2 cm. Area of quadrant = (1/4)πr² = (1/4) × (22/7) × (7/2) × (7/2) = 77/8 cm².",
        "stepMarking": [
          {
            "step": "r = 7/2 cm, quadrant area = (1/4)πr² = 77/8 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quadrant means central angle 90° = 1/4 of full circle.",
        "commonPitfall": "Computing full circle area 77/2 or semicircle 77/4."
      },
      {
        "id": "model-c10-math-2024-exemplar-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Surface Areas & Volumes: Ratio of Sphere & Cube",
        "questionText": "If the volume and surface area of a solid sphere are numerically equal, then its radius is:",
        "options": [
          "A) 2 units",
          "B) 3 units",
          "C) 4 units",
          "D) 6 units"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. (4/3)πr³ = 4πr² => r/3 = 1 => r = 3 units.",
        "stepMarking": [
          {
            "step": "Equate (4/3)πr³ = 4πr² => r = 3 units",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check if diameter is asked (6) vs radius (3). Here radius is asked.",
        "commonPitfall": "Writing r = 6 (diameter)."
      },
      {
        "id": "model-c10-math-2024-exemplar-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Empirical Formula (Mean, Median, Mode)",
        "questionText": "If the mean and median of a moderately skewed distribution are 24 and 26 respectively, then its mode is:",
        "options": [
          "A) 28",
          "B) 30",
          "C) 22",
          "D) 25"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Empirical relation: 3 Median = Mode + 2 Mean => Mode = 3(26) - 2(24) = 78 - 48 = 30.",
        "stepMarking": [
          {
            "step": "Apply Mode = 3 Median - 2 Mean = 78 - 48 = 30",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize exact coefficients: 3 Median = Mode + 2 Mean.",
        "commonPitfall": "Swapping coefficients of Mean and Median."
      },
      {
        "id": "model-c10-math-2024-exemplar-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Dice & Coin Outcomes",
        "questionText": "Two unbiased dice are thrown simultaneously. What is the probability of getting a doublet of prime numbers?",
        "options": [
          "A) 1/6",
          "B) 1/12",
          "C) 1/9",
          "D) 1/4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Total outcomes = 36. Prime numbers on a die are {2, 3, 5}. Prime doublets are (2,2), (3,3), (5,5) -> 3 outcomes. P = 3/36 = 1/12.",
        "stepMarking": [
          {
            "step": "3 prime doublets out of 36 outcomes => 1/12",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 1 is NEITHER prime NOR composite — exclude (1,1)!",
        "commonPitfall": "Including (1,1) and getting 4/36 = 1/9."
      },
      {
        "id": "model-c10-math-2024-exemplar-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Non-Leap Year 53 Sundays",
        "questionText": "What is the probability that a non-leap year selected at random will contain 53 Sundays?",
        "options": [
          "A) 1/7",
          "B) 2/7",
          "C) 5/7",
          "D) 53/365"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A non-leap year has 365 days = 52 weeks + 1 extra day. That 1 extra day can be any of the 7 days of the week. Hence P(53 Sundays) = 1/7.",
        "stepMarking": [
          {
            "step": "365 = 52 weeks + 1 odd day => P = 1/7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For a leap year (366 days = 52 weeks + 2 odd days), probability is 2/7.",
        "commonPitfall": "Marking 2/7 for a non-leap year."
      },
      {
        "id": "model-c10-math-2024-exemplar-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Linear Equations: Parallel Lines Geometry",
        "questionText": "Graphically, the pair of equations 6x - 3y + 10 = 0 and 2x - y + 9 = 0 represents two lines which are:",
        "options": [
          "A) Intersecting at one point",
          "B) Coincident",
          "C) Parallel",
          "D) Perpendicular"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. a₁/a₂ = 6/2 = 3, b₁/b₂ = -3/(-1) = 3, c₁/c₂ = 10/9. Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel (inconsistent).",
        "stepMarking": [
          {
            "step": "Compare ratios 3 = 3 ≠ 10/9 => parallel lines",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check signs of negative coefficients carefully (-3/-1 = +3).",
        "commonPitfall": "Misreading -y coefficient as +1."
      },
      {
        "id": "model-c10-math-2024-exemplar-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Sum of Roots",
        "questionText": "If one root of the quadratic equation 3x² - 10x + k = 0 is the reciprocal of the other, then the value of k is:",
        "options": [
          "A) -3",
          "B) 3",
          "C) 1/3",
          "D) 10"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Let roots be α and 1/α. Product of roots = α · (1/α) = 1 = c/a = k/3 => k = 3.",
        "stepMarking": [
          {
            "step": "Product of roots = k/3 = 1 => k = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reciprocal roots => product = 1 => c = a immediately!",
        "commonPitfall": "Using sum of roots instead of product."
      },
      {
        "id": "model-c10-math-2024-exemplar-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "AP: Sum of First n Odd Natural Numbers",
        "questionText": "The sum of the first 20 odd natural numbers (1 + 3 + 5 + ... up to 20 terms) is:",
        "options": [
          "A) 200",
          "B) 400",
          "C) 420",
          "D) 380"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. a = 1, d = 2, n = 20. S₂₀ = 20/2 [2(1) + 19(2)] = 10 × 40 = 400 (also formula n² = 20² = 400).",
        "stepMarking": [
          {
            "step": "S₂₀ = 400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of first n odd natural numbers is always n².",
        "commonPitfall": "Stopping at the 20th term (39) instead of sum."
      },
      {
        "id": "model-c10-math-2024-exemplar-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: HCF and LCM Relation",
        "questionText": "If two positive integers p and q can be expressed as p = a²b³ and q = a³b where a, b are prime numbers, then LCM(p, q) is:",
        "options": [
          "A) ab",
          "B) a²b",
          "C) a³b³",
          "D) a⁵b⁴"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. LCM takes the highest power of each prime factor involved: max power of a is 3 (a³) and max power of b is 3 (b³), so LCM(p, q) = a³b³.",
        "stepMarking": [
          {
            "step": "Select highest exponents a³ and b³ -> a³b³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "HCF = smallest power of common primes; LCM = greatest power of each prime.",
        "commonPitfall": "Marking HCF (a²b) instead of LCM (a³b³)."
      },
      {
        "id": "model-c10-math-2024-exemplar-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: Composite & Prime Factorisation",
        "questionText": "The exponent of 2 in the prime factorisation of 144 is:",
        "options": [
          "A) 2",
          "B) 3",
          "C) 4",
          "D) 6"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 144 = 16 × 9 = 2⁴ × 3². Therefore, the exponent of 2 is 4.",
        "stepMarking": [
          {
            "step": "144 = 2⁴ × 3² -> exponent 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: question asks the exponent of 2, not 2⁴ itself.",
        "commonPitfall": "Confusing 2⁴ with 2 or 16."
      },
      {
        "id": "model-c10-math-2024-exemplar-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Sum and Product of Zeroes",
        "questionText": "If α and β are the zeroes of the quadratic polynomial p(x) = x² - 5x + 6, then the value of α² + β² is:",
        "options": [
          "A) 13",
          "B) 25",
          "C) 19",
          "D) 37"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. α + β = 5, αβ = 6. Using α² + β² = (α + β)² - 2αβ = 25 - 12 = 13.",
        "stepMarking": [
          {
            "step": "Apply (α+β)² - 2αβ = 25 - 12 = 13",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetric identities (α+β)² - 2αβ instead of solving roots every time.",
        "commonPitfall": "Computing (α + β)² = 25 and forgetting -2αβ."
      },
      {
        "id": "model-c10-math-2024-exemplar-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Number of Tangents",
        "questionText": "Assertion (A): From a point lying inside a circle, only two tangents can be drawn to the circle.\nReason (R): A tangent touches the circle at exactly one point.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. ZERO tangents can be drawn from a point INSIDE a circle (every line through an interior point is a secant intersecting at 2 points). Thus A is false, while R is true.",
        "stepMarking": [
          {
            "step": "Option (D): A false (0 tangents from interior), R true",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Interior point = 0 tangents; Point on circle = 1 tangent; Exterior point = 2 tangents.",
        "commonPitfall": "Assuming 2 tangents can be drawn from any point."
      },
      {
        "id": "model-c10-math-2024-exemplar-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Sure & Impossible Events",
        "questionText": "Assertion (A): The probability of getting a number greater than 6 on throwing a fair cubic die is 0.\nReason (R): The probability of an impossible event is always 0, while that of a sure event is 1.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A standard die only has faces 1 to 6, so getting > 6 is impossible (P = 0).",
        "stepMarking": [
          {
            "step": "Option (A) identifying impossible event",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always 0 ≤ P(E) ≤ 1.",
        "commonPitfall": "Marking (B) when R directly justifies why P = 0."
      },
      {
        "id": "model-c10-math-2024-exemplar-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Polynomials: Constructing Polynomial from Zeroes",
        "questionText": "Find the zeroes of the quadratic polynomial x² - 2x - 8 and verify the relationship between its zeroes and coefficients.",
        "modelAnswer": "x² - 2x - 8 = x² - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2).\nZeroes are α = 4 and β = -2.\nVerification:\nSum of zeroes: α + β = 4 + (-2) = 2 = -(-2)/1 = -b/a.\nProduct of zeroes: αβ = 4 × (-2) = -8 = (-8)/1 = c/a.",
        "stepMarking": [
          {
            "step": "Find zeroes 4 and -2",
            "marks": "1 Mark"
          },
          {
            "step": "Verify both sum (-b/a) and product (c/a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show LHS and RHS explicitly in verification.",
        "commonPitfall": "Sign mistake in -b/a = -(-2)/1."
      },
      {
        "id": "model-c10-math-2024-exemplar-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Triangles: Similarity & Parallel Segments",
        "questionText": "In ΔABC, ∠ADE = ∠B, AD = 3.8 cm, AE = 3.6 cm, BE = 2.1 cm, and BC = 4.2 cm (with D on AB and E on AC? Wait: let D on AB, E on AC? Correction: if D is on AC and E is on BC, or standard NCERT: In ΔADE and ΔABC, ∠A = ∠A, ∠ADE = ∠ABC). Given AD = 4 cm, DB = 5 cm, and DE = 3.6 cm where DE ∥ BC, find BC.",
        "modelAnswer": "Since DE ∥ BC, ∠ADE = ∠ABC and ∠AED = ∠ACB (corresponding angles).\nBy AA similarity criterion, ΔADE ~ ΔABC.\nHence AD / AB = DE / BC.\nAB = AD + DB = 4 + 5 = 9 cm.\nSo 4 / 9 = 3.6 / BC => BC = (3.6 × 9) / 4 = 0.9 × 9 = 8.1 cm.",
        "stepMarking": [
          {
            "step": "Prove ΔADE ~ ΔABC (AA similarity)",
            "marks": "1 Mark"
          },
          {
            "step": "Use AD/AB = DE/BC to get BC = 8.1 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use AD/AB (not AD/DB!) when comparing parallel segments DE and BC!",
        "commonPitfall": "Writing AD/DB = DE/BC and getting wrong value."
      },
      {
        "id": "model-c10-math-2024-exemplar-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometry: Sin(A-B) & Cos(A+B)",
        "questionText": "If sin(A - B) = 1/2 and cos(A + B) = 1/2, where 0° < A + B ≤ 90° and A > B, find the angles A and B.",
        "modelAnswer": "sin(A - B) = 1/2 = sin 30° => A - B = 30° ...(1)\ncos(A + B) = 1/2 = cos 60° => A + B = 60° ...(2)\nAdding (1) and (2): 2A = 90° => A = 45°.\nSubstituting in (2): 45° + B = 60° => B = 15°.",
        "stepMarking": [
          {
            "step": "Form A - B = 30° and A + B = 60°",
            "marks": "1 Mark"
          },
          {
            "step": "Solve to obtain A = 45°, B = 15°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify 0° < 45+15 ≤ 90° and 45 > 15.",
        "commonPitfall": "Confusing cos 60° = 1/2 with cos 30°."
      },
      {
        "id": "model-c10-math-2024-exemplar-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Circles: Angle Between Tangents & Central Angle",
        "questionText": "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
        "modelAnswer": "Let ∠PTQ = θ. Since tangents from an external point are equal, TP = TQ, so ΔTPQ is isosceles.\nHence ∠TPQ = ∠TQP = (180° - θ)/2 = 90° - θ/2.\nAlso radius OP is perpendicular to tangent TP => ∠OPT = 90°.\nTherefore ∠OPQ = ∠OPT - ∠TPQ = 90° - (90° - θ/2) = θ/2 = (1/2)∠PTQ.\nHence ∠PTQ = 2 ∠OPQ.",
        "stepMarking": [
          {
            "step": "TP = TQ => ∠TPQ = 90° - θ/2",
            "marks": "1 Mark"
          },
          {
            "step": "∠OPT = 90° => ∠OPQ = θ/2 => ∠PTQ = 2∠OPQ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a neat labelled circle diagram showing O, P, Q, T.",
        "commonPitfall": "Trying to prove using cyclic quadrilateral angle sum without finding ∠TPQ."
      },
      {
        "id": "model-c10-math-2024-exemplar-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Areas Related to Circles: Minute Hand Area Swept",
        "questionText": "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes (use π = 22/7).",
        "modelAnswer": "In 60 minutes, minute hand rotates 360°.\nIn 5 minutes, angle θ = (360° / 60) × 5 = 30°.\nArea of sector = (θ / 360°) × πr² = (30 / 360) × (22 / 7) × 14 × 14 = (1/12) × 22 × 2 × 14 = 154/3 cm² ≈ 51.33 cm².",
        "stepMarking": [
          {
            "step": "Angle in 5 minutes = 30°",
            "marks": "1 Mark"
          },
          {
            "step": "Sector area = 154/3 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Leave exact fraction 154/3 cm² alongside decimal 51.33 cm².",
        "commonPitfall": "Taking angle as 5° instead of 30°."
      },
      {
        "id": "model-c10-math-2024-exemplar-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometry: Standard Proving Identity",
        "questionText": "Prove that: (sin θ - 2 sin³θ) / (2 cos³θ - cos θ) = tan θ.",
        "modelAnswer": "LHS = [sin θ (1 - 2 sin²θ)] / [cos θ (2 cos²θ - 1)]\nSubstitute 1 = sin²θ + cos²θ OR cos²θ = 1 - sin²θ in denominator:\n2 cos²θ - 1 = 2(1 - sin²θ) - 1 = 2 - 2 sin²θ - 1 = 1 - 2 sin²θ.\nTherefore LHS = [sin θ (1 - 2 sin²θ)] / [cos θ (1 - 2 sin²θ)] = sin θ / cos θ = tan θ = RHS.",
        "stepMarking": [
          {
            "step": "Factor sin θ and cos θ from numerator & denominator",
            "marks": "1 Mark"
          },
          {
            "step": "Convert 2cos²θ - 1 to 1 - 2sin²θ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Cancel common factor to get tan θ",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Convert EITHER numerator to cos OR denominator to sin — never both at once.",
        "commonPitfall": "Expanding without factoring sin θ and cos θ."
      },
      {
        "id": "model-c10-math-2024-exemplar-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Circles: Equal Opposite Angles Subtended by Cyclic Quadrilateral",
        "questionText": "Prove that the lengths of tangents drawn from an external point to a circle are equal. Use this to prove that in two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.",
        "modelAnswer": "Part 1: In ΔOAP and ΔOBP, OA = OB (radii), OP = OP (common), ∠OAP = ∠OBP = 90° (radius ⊥ tangent). By RHS congruence, ΔOAP ≅ ΔOBP => PA = PB.\nPart 2: Let AB be chord of larger circle touching smaller circle at P, with common centre O. Join OP. Since AB is tangent to smaller circle, OP ⊥ AB. In larger circle, perpendicular from centre O to chord AB bisects the chord. Hence AP = BP.",
        "stepMarking": [
          {
            "step": "RHS proof of PA = PB",
            "marks": "1.5 Marks"
          },
          {
            "step": "Concentric circle proof using OP ⊥ AB bisection theorem",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Both proofs are NCERT Class 10 Chapter 10 core theorems.",
        "commonPitfall": "Forgetting to cite \"perpendicular from centre bisects the chord\"."
      },
      {
        "id": "model-c10-math-2024-exemplar-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Coordinate Geometry: Ratio Division by Line / Axis",
        "questionText": "Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.",
        "modelAnswer": "Let the x-axis divide AB at P(x, 0) in the ratio k : 1.\nBy section formula for y-coordinate:\n0 = (5k + 1(-5)) / (k + 1) => 5k - 5 = 0 => k = 1.\nRatio is 1 : 1.\nNow x = (-4(1) + 1(1)) / (1 + 1) = -3/2.\nPoint of division is (-3/2, 0).",
        "stepMarking": [
          {
            "step": "Assume ratio k:1 and point P(x, 0)",
            "marks": "1 Mark"
          },
          {
            "step": "Find k = 1 -> ratio 1:1",
            "marks": "1 Mark"
          },
          {
            "step": "Coordinates (-3/2, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Using ratio k:1 reduces two unknowns (m₁, m₂) to one unknown k.",
        "commonPitfall": "Setting x = 0 instead of y = 0 for the x-axis."
      },
      {
        "id": "model-c10-math-2024-exemplar-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Probability: Standard Deck of 52 Playing Cards",
        "questionText": "From a well-shuffled pack of 52 playing cards, all face cards of spades and black queens are removed. One card is drawn at random from the remaining pack. Find the probability of getting:\n(a) a black face card\n(b) a red king\n(c) neither a king nor a jack.",
        "modelAnswer": "Cards removed: 3 spade face cards (J♠, Q♠, K♠) + remaining black queen (Q♣) = 4 cards removed.\nRemaining cards = 52 - 4 = 48.\n(a) Black face cards remaining: J♣ and K♣ (since J♠, Q♠, K♠, Q♣ removed) = 2 cards. P = 2/48 = 1/24.\n(b) Red kings (K♥, K♦) = 2 cards. P = 2/48 = 1/24.\n(c) Remaining Kings = 3 (K♥, K♦, K♣); Remaining Jacks = 3 (J♥, J♦, J♣) -> 6 cards. Neither = 48 - 6 = 42. P = 42/48 = 7/8.",
        "stepMarking": [
          {
            "step": "Remaining total = 48",
            "marks": "0.5 Mark"
          },
          {
            "step": "(a) 2/48 = 1/24",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2/48 = 1/24",
            "marks": "0.5 Mark"
          },
          {
            "step": "(c) 42/48 = 7/8",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never double-count Q♠ when removing both \"face cards of spades\" AND \"black queens\"!",
        "commonPitfall": "Subtracting 3 + 2 = 5 cards instead of 4 (double-counting Queen of Spades)."
      },
      {
        "id": "model-c10-math-2024-exemplar-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Real Numbers: Proof of Irrationality",
        "questionText": "Prove that √5 is an irrational number. Hence show that 3 + 2√5 is also irrational.",
        "modelAnswer": "Let us assume to the contrary that √5 is rational, so √5 = a/b where a, b are coprime integers (b ≠ 0).\nSquaring: 5b² = a² => 5 divides a², hence 5 divides a. Let a = 5c.\nThen 5b² = 25c² => b² = 5c² => 5 divides b², hence 5 divides b.\nThus a and b have common factor 5, contradicting that they are coprime. So √5 is irrational.\nNow suppose 3 + 2√5 = r is rational => √5 = (r - 3)/2, which is rational (since r, 3, 2 are integers/rational). Contradiction! Hence 3 + 2√5 is irrational.",
        "stepMarking": [
          {
            "step": "Assumption a/b coprime & showing 5 divides a",
            "marks": "1 Mark"
          },
          {
            "step": "Showing 5 divides b -> contradiction -> √5 irrational",
            "marks": "1 Mark"
          },
          {
            "step": "Extending contradiction to 3 + 2√5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state \"a and b are coprime integers, b ≠ 0\" explicitly.",
        "commonPitfall": "Skipping the step stating \"if prime p divides a², then p divides a\"."
      },
      {
        "id": "model-c10-math-2024-exemplar-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Linear Equations: Two-Digit Number Word Problem",
        "questionText": "The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.",
        "modelAnswer": "Let tens digit = x and units digit = y. Original number = 10x + y; reversed number = 10y + x.\nCondition 1: x + y = 9 ...(1)\nCondition 2: 9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x - 11y = 0 => y = 8x ...(2)\nSubstituting (2) into (1): x + 8x = 9 => 9x = 9 => x = 1, and y = 8.\nTherefore, the number is 18.",
        "stepMarking": [
          {
            "step": "Form x + y = 9 and 9(10x+y) = 2(10y+x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Simplify to y = 8x and solve x = 1, y = 8",
            "marks": "1 Mark"
          },
          {
            "step": "Final answer: 18",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Verify: 9 × 18 = 162, and 2 × 81 = 162!",
        "commonPitfall": "Writing number as xy instead of 10x + y."
      },
      {
        "id": "model-c10-math-2024-exemplar-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Missing Frequencies with Given Median",
        "questionText": "If the median of the following distribution is 28.5 and total frequency N = 60, find the values of x and y:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60\nFrequency:       5   |   x   |  20   |  15   |   y   |   5",
        "modelAnswer": "Total frequency N = 5 + x + 20 + 15 + y + 5 = 45 + x + y = 60 => x + y = 15 ...(1)\nMedian = 28.5 lies in modal/median class 20-30.\nHere l = 20, h = 10, f = 20, cf (preceding) = 5 + x, N/2 = 30.\nMedian = l + [(N/2 - cf)/f] × h => 28.5 = 20 + [(30 - (5 + x))/20] × 10\n8.5 = (25 - x)/2 => 17 = 25 - x => x = 8.\nFrom (1): y = 15 - 8 = 7.\nHence x = 8, y = 7.",
        "stepMarking": [
          {
            "step": "Equation x + y = 15 & cumulative frequency table",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify median class 20-30 (l=20, f=20, cf=5+x)",
            "marks": "1 Mark"
          },
          {
            "step": "Solve Median formula for x = 8",
            "marks": "1.5 Marks"
          },
          {
            "step": "Obtain y = 7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use median value (28.5) — NOT N/2 — to locate the median class when frequencies have unknowns!",
        "commonPitfall": "Sign error: forgetting brackets in 30 - (5 + x) and writing 30 - 5 + x."
      },
      {
        "id": "model-c10-math-2024-exemplar-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Linear Equations / Quadratic: Upstream & Downstream Boat Problem / Pipe Filling",
        "questionText": "Two water taps together can fill a tank in 9⅜ hours. The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.",
        "modelAnswer": "Let smaller tap take x hours alone, so larger tap takes (x - 10) hours alone.\nIn 1 hour, combined portion filled = 1/x + 1/(x - 10) = 8/75 (since 9⅜ = 75/8 h).\n(2x - 10) / [x(x - 10)] = 8/75 => 150x - 750 = 8x² - 80x => 8x² - 230x + 750 = 0 => 4x² - 115x + 375 = 0\n4x² - 100x - 15x + 375 = 0 => (x - 25)(4x - 15) = 0.\nx = 25 or x = 15/4 = 3.75 (rejected as x - 10 = -6.25 < 0).\nHence smaller tap = 25 hours, larger tap = 15 hours.",
        "stepMarking": [
          {
            "step": "1-hour work rates 1/x + 1/(x-10) = 8/75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Form 4x² - 115x + 375 = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "Factorize and reject x = 3.75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Times: 25 hrs and 15 hrs",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always check whether x - 10 > 0 when rejecting the smaller root!",
        "commonPitfall": "Adding times directly: x + (x - 10) = 75/8 (wrong!)."
      },
      {
        "id": "model-c10-math-2024-exemplar-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Triangles: Basic Proportionality Theorem (Thales Theorem Proof)",
        "questionText": "State and prove the Basic Proportionality Theorem (Thales Theorem). Using this theorem, prove that a line drawn through the mid-point of one side of a triangle parallel to another side bisects the third side.",
        "modelAnswer": "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof: In ΔABC, DE ∥ BC. Join BE, CD and draw EN ⊥ AB, DM ⊥ AC.\nar(ΔADE)/ar(ΔBDE) = (½·AD·EN)/(½·DB·EN) = AD/DB.\nar(ΔADE)/ar(ΔDEC) = (½·AE·DM)/(½·EC·DM) = AE/EC.\nSince ΔBDE and ΔDEC lie on same base DE and between same parallels DE ∥ BC, ar(ΔBDE) = ar(ΔDEC).\nTherefore AD/DB = AE/EC.\nApplication: If D is midpoint of AB, AD/DB = 1 => AE/EC = 1 => AE = EC (E is midpoint of AC).",
        "stepMarking": [
          {
            "step": "Statement + Given + Construction",
            "marks": "1 Mark"
          },
          {
            "step": "Area ratios AD/DB and AE/EC",
            "marks": "2 Marks"
          },
          {
            "step": "Equal base/parallels -> AD/DB = AE/EC",
            "marks": "1 Mark"
          },
          {
            "step": "Midpoint corollary proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Thales theorem is the most frequently tested 5-mark geometry proof in CBSE Class 10.",
        "commonPitfall": "Forgetting to draw altitudes EN and DM in construction."
      },
      {
        "id": "model-c10-math-2024-exemplar-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Trigonometry: Two Angles of Depression / Pole & Building",
        "questionText": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower. (Use √3 = 1.732)",
        "modelAnswer": "Let building AB = 7 m and tower CD = h m, horizontal distance BD = x m, AE ⊥ CD so CE = 7 m and ED = h - 7.\nIn right ΔABD: tan 45° = AB / BD => 1 = 7 / x => x = 7 m (so AE = 7 m).\nIn right ΔACE (or ΔAED): tan 60° = DE / AE => √3 = (h - 7) / 7 => h - 7 = 7√3.\nh = 7(√3 + 1) = 7(1.732 + 1) = 7 × 2.732 = 19.124 m.",
        "stepMarking": [
          {
            "step": "Neat labelled figure with angles 60° & 45°",
            "marks": "1 Mark"
          },
          {
            "step": "Find horizontal distance x = 7 m using tan 45°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Find DE = 7√3 m using tan 60°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Total height 7(√3 + 1) = 19.124 m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mark horizontal dotted line at eye level so angle of depression equals alternate interior angle.",
        "commonPitfall": "Taking full tower height h instead of h - 7 in the upper right triangle."
      },
      {
        "id": "model-c10-math-2024-exemplar-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Applications of Trigonometry (Lighthouse & Two Ships)",
        "questionText": "Read the case and answer:\nFrom the top of a 75 m high lighthouse above sea level, a coast guard observes two ships on the same side of the lighthouse approaching directly towards it, at angles of depression 30° and 45°.\n\n(a) Find the distance of the closer ship from the base of the lighthouse. (1M)\n(b) Find the distance of the farther ship from the base of the lighthouse. (1M)\n(c) Calculate the exact distance between the two ships (use √3 = 1.73). (2M)",
        "modelAnswer": "(a) Closer ship has larger angle 45°: d₁ = 75 / tan 45° = 75 m.\n(b) Farther ship has smaller angle 30°: d₂ = 75 / tan 30° = 75√3 m.\n(c) Distance between ships = d₂ - d₁ = 75(√3 - 1) = 75(1.73 - 1) = 75 × 0.73 = 54.75 m.",
        "stepMarking": [
          {
            "step": "(a) 75 m",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 75√3 m",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 75(√3 - 1) = 54.75 m",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Closer object ALWAYS has the larger angle of depression (45° > 30°).",
        "commonPitfall": "Placing 30° closer to the lighthouse than 45°."
      },
      {
        "id": "model-c10-math-2024-exemplar-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Surface Area & Volume (Gulab Jamun / Cylindrical Capsule)",
        "questionText": "Read the case and answer:\nA medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The total length of the entire capsule is 14 mm and its diameter is 5 mm. (Use π = 22/7)\n\n(a) Find the radius and the length of the cylindrical middle portion. (1M)\n(b) Calculate the total surface area of the capsule. (2M)\n(c) If a box contains 100 capsules, find the total surface area in cm². (1M)",
        "modelAnswer": "(a) Radius r = 5/2 = 2.5 mm. Length of cylinder h = 14 - 2(2.5) = 14 - 5 = 9 mm.\n(b) TSA = CSA of cylinder + 2 × CSA of hemisphere = 2πrh + 4πr² = 2πr(h + 2r)\n= 2 × (22/7) × 2.5 × (9 + 5) = 2 × (22/7) × 2.5 × 14 = 220 mm².\n(c) For 100 capsules: 100 × 220 = 22,000 mm² = 22,000 / 100 cm² = 220 cm².",
        "stepMarking": [
          {
            "step": "(a) r = 2.5 mm, h = 9 mm",
            "marks": "1 Mark"
          },
          {
            "step": "(b) TSA = 220 mm²",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 22,000 mm² to 220 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "1 cm² = 100 mm² (NOT 10 mm²)!",
        "commonPitfall": "Forgetting to subtract 2r from total length 14 mm to get cylinder length."
      },
      {
        "id": "model-c10-math-2024-exemplar-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Arithmetic Progressions (Seating / Salary Increment)",
        "questionText": "Read the case and answer:\nA stadium has rows of seats arranged such that the first row has 20 seats, the second row has 24 seats, the third row has 28 seats, and so on.\n\n(a) Find the number of seats in the 15th row. (1M)\n(b) Which row has exactly 100 seats? (1M)\n(c) Calculate the total number of seats in the first 20 rows of the stadium. (2M)",
        "modelAnswer": "(a) a = 20, d = 4. a₁₅ = 20 + 14(4) = 20 + 56 = 76 seats.\n(b) aₙ = 20 + (n - 1)4 = 100 => 4(n - 1) = 80 => n - 1 = 20 => n = 21st row.\n(c) S₂₀ = (20/2)[2(20) + 19(4)] = 10 × (40 + 76) = 10 × 116 = 1160 seats.",
        "stepMarking": [
          {
            "step": "(a) a₁₅ = 76",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 21st row",
            "marks": "1 Mark"
          },
          {
            "step": "(c) S₂₀ = 1160 seats",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check: a₂₁ = 20 + 20×4 = 100.",
        "commonPitfall": "Using n instead of n-1 in aₙ = a + (n-1)d."
      }
    ]
  },
  {
    "id": "model-c10-math-2022-aps",
    "title": "Army Public Schools Combined Class 10 Mathematics Pre-Board (2022)",
    "subject": "Mathematics",
    "targetClass": "Class 10",
    "year": 2022,
    "paperType": "PRE_BOARD",
    "paperCode": "APS/C10/MAT-05",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper has 5 Sections A, B, C, D, and E comprising 38 compulsory questions.",
      "Section A has 20 MCQs (Q1–Q18) and Assertion-Reason (Q19–Q20) carrying 1 mark each.",
      "Section B has 5 Very Short Answer questions carrying 2 marks each.",
      "Section C has 6 Short Answer questions carrying 3 marks each.",
      "Section D has 4 Long Answer questions carrying 5 marks each.",
      "Section E has 3 case-based integrated units of assessment (4 marks each) with sub-parts."
    ],
    "questions": [
      {
        "id": "model-c10-math-2022-aps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometry: Exact Angles Evaluation",
        "questionText": "If sin θ + cos θ = √2 cos θ (θ ≠ 90°), then the value of tan θ is:",
        "options": [
          "A) √2 - 1",
          "B) √2 + 1",
          "C) √2",
          "D) -√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Dividing both sides by cos θ: tan θ + 1 = √2 => tan θ = √2 - 1.",
        "stepMarking": [
          {
            "step": "Divide by cos θ to get tan θ + 1 = √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dividing equation in sin and cos by cos θ immediately converts it to tan θ.",
        "commonPitfall": "Squaring both sides unnecessarily and complicating algebra."
      },
      {
        "id": "model-c10-math-2022-aps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Trigonometry: Shadow Length Angle",
        "questionText": "If the length of the shadow of a vertical pole is √3 times the height of the pole, then the angle of elevation of the Sun is:",
        "options": [
          "A) 30°",
          "B) 45°",
          "C) 60°",
          "D) 90°"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. tan θ = height / shadow = h / (√3 h) = 1/√3 = tan 30° => θ = 30°.",
        "stepMarking": [
          {
            "step": "tan θ = 1/√3 => θ = 30°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Longer shadow means lower Sun angle (30°); shorter shadow means steeper Sun angle (60°).",
        "commonPitfall": "Writing tan θ = √3 and marking 60°."
      },
      {
        "id": "model-c10-math-2022-aps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Tangent Perpendicularity & Pythagoras",
        "questionText": "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
        "options": [
          "A) 7 cm",
          "B) 12 cm",
          "C) 15 cm",
          "D) 24.5 cm"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Tangent is perpendicular to radius at point of contact (∠OTQ = 90°). By Pythagoras: r = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.",
        "stepMarking": [
          {
            "step": "Right triangle OTQ => r = √(25² - 24²) = 7 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember Pythagorean triplet (7, 24, 25).",
        "commonPitfall": "Taking 25 as the tangent and 24 as hypotenuse."
      },
      {
        "id": "model-c10-math-2022-aps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Circles: Quadrilateral Circumscribing a Circle",
        "questionText": "A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 12 cm, BC = 15 cm, and CD = 14 cm, then the length of AD is:",
        "options": [
          "A) 10 cm",
          "B) 11 cm",
          "C) 12 cm",
          "D) 13 cm"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Opposite sides of a quadrilateral circumscribing a circle have equal sums: AB + CD = BC + AD => 12 + 14 = 15 + AD => AD = 26 - 15 = 11 cm.",
        "stepMarking": [
          {
            "step": "Apply AB + CD = BC + AD => AD = 11 cm",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of opposite pairs is always equal because tangents from an external vertex are equal.",
        "commonPitfall": "Equating AB + BC = CD + AD (adjacent sides)."
      },
      {
        "id": "model-c10-math-2022-aps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Areas Related to Circles: Sector Area & Arc Length",
        "questionText": "The area of a quadrant of a circle whose circumference is 22 cm (use π = 22/7) is:",
        "options": [
          "A) 77/2 cm²",
          "B) 77/4 cm²",
          "C) 77/8 cm²",
          "D) 77/16 cm²"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 2πr = 22 => 2 × (22/7) × r = 22 => r = 7/2 cm. Area of quadrant = (1/4)πr² = (1/4) × (22/7) × (7/2) × (7/2) = 77/8 cm².",
        "stepMarking": [
          {
            "step": "r = 7/2 cm, quadrant area = (1/4)πr² = 77/8 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Quadrant means central angle 90° = 1/4 of full circle.",
        "commonPitfall": "Computing full circle area 77/2 or semicircle 77/4."
      },
      {
        "id": "model-c10-math-2022-aps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Surface Areas & Volumes: Ratio of Sphere & Cube",
        "questionText": "If the volume and surface area of a solid sphere are numerically equal, then its radius is:",
        "options": [
          "A) 2 units",
          "B) 3 units",
          "C) 4 units",
          "D) 6 units"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. (4/3)πr³ = 4πr² => r/3 = 1 => r = 3 units.",
        "stepMarking": [
          {
            "step": "Equate (4/3)πr³ = 4πr² => r = 3 units",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check if diameter is asked (6) vs radius (3). Here radius is asked.",
        "commonPitfall": "Writing r = 6 (diameter)."
      },
      {
        "id": "model-c10-math-2022-aps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Empirical Formula (Mean, Median, Mode)",
        "questionText": "If the mean and median of a moderately skewed distribution are 24 and 26 respectively, then its mode is:",
        "options": [
          "A) 28",
          "B) 30",
          "C) 22",
          "D) 25"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Empirical relation: 3 Median = Mode + 2 Mean => Mode = 3(26) - 2(24) = 78 - 48 = 30.",
        "stepMarking": [
          {
            "step": "Apply Mode = 3 Median - 2 Mean = 78 - 48 = 30",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize exact coefficients: 3 Median = Mode + 2 Mean.",
        "commonPitfall": "Swapping coefficients of Mean and Median."
      },
      {
        "id": "model-c10-math-2022-aps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Dice & Coin Outcomes",
        "questionText": "Two unbiased dice are thrown simultaneously. What is the probability of getting a doublet of prime numbers?",
        "options": [
          "A) 1/6",
          "B) 1/12",
          "C) 1/9",
          "D) 1/4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Total outcomes = 36. Prime numbers on a die are {2, 3, 5}. Prime doublets are (2,2), (3,3), (5,5) -> 3 outcomes. P = 3/36 = 1/12.",
        "stepMarking": [
          {
            "step": "3 prime doublets out of 36 outcomes => 1/12",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 1 is NEITHER prime NOR composite — exclude (1,1)!",
        "commonPitfall": "Including (1,1) and getting 4/36 = 1/9."
      },
      {
        "id": "model-c10-math-2022-aps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Non-Leap Year 53 Sundays",
        "questionText": "What is the probability that a non-leap year selected at random will contain 53 Sundays?",
        "options": [
          "A) 1/7",
          "B) 2/7",
          "C) 5/7",
          "D) 53/365"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A non-leap year has 365 days = 52 weeks + 1 extra day. That 1 extra day can be any of the 7 days of the week. Hence P(53 Sundays) = 1/7.",
        "stepMarking": [
          {
            "step": "365 = 52 weeks + 1 odd day => P = 1/7",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For a leap year (366 days = 52 weeks + 2 odd days), probability is 2/7.",
        "commonPitfall": "Marking 2/7 for a non-leap year."
      },
      {
        "id": "model-c10-math-2022-aps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Linear Equations: Parallel Lines Geometry",
        "questionText": "Graphically, the pair of equations 6x - 3y + 10 = 0 and 2x - y + 9 = 0 represents two lines which are:",
        "options": [
          "A) Intersecting at one point",
          "B) Coincident",
          "C) Parallel",
          "D) Perpendicular"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. a₁/a₂ = 6/2 = 3, b₁/b₂ = -3/(-1) = 3, c₁/c₂ = 10/9. Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel (inconsistent).",
        "stepMarking": [
          {
            "step": "Compare ratios 3 = 3 ≠ 10/9 => parallel lines",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check signs of negative coefficients carefully (-3/-1 = +3).",
        "commonPitfall": "Misreading -y coefficient as +1."
      },
      {
        "id": "model-c10-math-2022-aps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Sum of Roots",
        "questionText": "If one root of the quadratic equation 3x² - 10x + k = 0 is the reciprocal of the other, then the value of k is:",
        "options": [
          "A) -3",
          "B) 3",
          "C) 1/3",
          "D) 10"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Let roots be α and 1/α. Product of roots = α · (1/α) = 1 = c/a = k/3 => k = 3.",
        "stepMarking": [
          {
            "step": "Product of roots = k/3 = 1 => k = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reciprocal roots => product = 1 => c = a immediately!",
        "commonPitfall": "Using sum of roots instead of product."
      },
      {
        "id": "model-c10-math-2022-aps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "AP: Sum of First n Odd Natural Numbers",
        "questionText": "The sum of the first 20 odd natural numbers (1 + 3 + 5 + ... up to 20 terms) is:",
        "options": [
          "A) 200",
          "B) 400",
          "C) 420",
          "D) 380"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. a = 1, d = 2, n = 20. S₂₀ = 20/2 [2(1) + 19(2)] = 10 × 40 = 400 (also formula n² = 20² = 400).",
        "stepMarking": [
          {
            "step": "S₂₀ = 400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of first n odd natural numbers is always n².",
        "commonPitfall": "Stopping at the 20th term (39) instead of sum."
      },
      {
        "id": "model-c10-math-2022-aps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: HCF and LCM Relation",
        "questionText": "If two positive integers p and q can be expressed as p = a²b³ and q = a³b where a, b are prime numbers, then LCM(p, q) is:",
        "options": [
          "A) ab",
          "B) a²b",
          "C) a³b³",
          "D) a⁵b⁴"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. LCM takes the highest power of each prime factor involved: max power of a is 3 (a³) and max power of b is 3 (b³), so LCM(p, q) = a³b³.",
        "stepMarking": [
          {
            "step": "Select highest exponents a³ and b³ -> a³b³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "HCF = smallest power of common primes; LCM = greatest power of each prime.",
        "commonPitfall": "Marking HCF (a²b) instead of LCM (a³b³)."
      },
      {
        "id": "model-c10-math-2022-aps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: Composite & Prime Factorisation",
        "questionText": "The exponent of 2 in the prime factorisation of 144 is:",
        "options": [
          "A) 2",
          "B) 3",
          "C) 4",
          "D) 6"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. 144 = 16 × 9 = 2⁴ × 3². Therefore, the exponent of 2 is 4.",
        "stepMarking": [
          {
            "step": "144 = 2⁴ × 3² -> exponent 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: question asks the exponent of 2, not 2⁴ itself.",
        "commonPitfall": "Confusing 2⁴ with 2 or 16."
      },
      {
        "id": "model-c10-math-2022-aps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Sum and Product of Zeroes",
        "questionText": "If α and β are the zeroes of the quadratic polynomial p(x) = x² - 5x + 6, then the value of α² + β² is:",
        "options": [
          "A) 13",
          "B) 25",
          "C) 19",
          "D) 37"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. α + β = 5, αβ = 6. Using α² + β² = (α + β)² - 2αβ = 25 - 12 = 13.",
        "stepMarking": [
          {
            "step": "Apply (α+β)² - 2αβ = 25 - 12 = 13",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetric identities (α+β)² - 2αβ instead of solving roots every time.",
        "commonPitfall": "Computing (α + β)² = 25 and forgetting -2αβ."
      },
      {
        "id": "model-c10-math-2022-aps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Polynomials: Graph Zeroes Count",
        "questionText": "A quadratic polynomial whose zeroes are -3 and 4 is:",
        "options": [
          "A) x² - x - 12",
          "B) x² + x + 12",
          "C) x²/2 - x/2 - 6",
          "D) Both (A) and (C)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Sum of zeroes S = -3 + 4 = 1, Product P = -12. Polynomial is k(x² - Sx + P) = k(x² - x - 12). For k = 1 we get (A) and for k = 1/2 we get (C).",
        "stepMarking": [
          {
            "step": "Recognize arbitrary non-zero constant k(x² - x - 12)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check if scaled multiple k·p(x) appears in the options!",
        "commonPitfall": "Stopping at (A) without checking (C) = 1/2(A)."
      },
      {
        "id": "model-c10-math-2022-aps-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Linear Equations: Infinitely Many Solutions Condition",
        "questionText": "For what value of k do the pair of linear equations kx + 3y = k - 3 and 12x + ky = k have infinitely many solutions?",
        "options": [
          "A) 6",
          "B) -6",
          "C) ±6",
          "D) 12"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For infinite solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ => k/12 = 3/k = (k-3)/k. From k/12 = 3/k => k² = 36 => k = ±6. Testing k = -6 gives 3/(-6) = -1/2 ≠ (-6-3)/(-6) = 3/2. Only k = 6 satisfies all ratios (6/12 = 3/6 = 3/6 = 1/2).",
        "stepMarking": [
          {
            "step": "Verify k = 6 satisfies all three equal ratios",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute both roots back into c₁/c₂ to reject extraneous values.",
        "commonPitfall": "Marking ±6 without checking c₁/c₂ equality."
      },
      {
        "id": "model-c10-math-2022-aps-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Quadratic Equations: Nature of Roots",
        "questionText": "If the quadratic equation 2x² - kx + 2 = 0 has two equal real roots, then the values of k are:",
        "options": [
          "A) ±2",
          "B) ±4",
          "C) 4 only",
          "D) ±8"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For equal roots, discriminant D = b² - 4ac = 0 => (-k)² - 4(2)(2) = 0 => k² = 16 => k = ±4.",
        "stepMarking": [
          {
            "step": "D = k² - 16 = 0 => k = ±4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write ± when taking square root of k².",
        "commonPitfall": "Writing only k = +4."
      },
      {
        "id": "model-c10-math-2022-aps-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Sure & Impossible Events",
        "questionText": "Assertion (A): The probability of getting a number greater than 6 on throwing a fair cubic die is 0.\nReason (R): The probability of an impossible event is always 0, while that of a sure event is 1.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A standard die only has faces 1 to 6, so getting > 6 is impossible (P = 0).",
        "stepMarking": [
          {
            "step": "Option (A) identifying impossible event",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always 0 ≤ P(E) ≤ 1.",
        "commonPitfall": "Marking (B) when R directly justifies why P = 0."
      },
      {
        "id": "model-c10-math-2022-aps-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Real Numbers: HCF & LCM Divisibility",
        "questionText": "Assertion (A): If HCF(306, 657) = 9, then LCM(306, 657) = 22338.\nReason (R): For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. LCM = (306 × 657) / 9 = 34 × 657 = 22338, directly derived from HCF × LCM = a × b.",
        "stepMarking": [
          {
            "step": "Verify 34 × 657 = 22338 and identity R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice this property holds ONLY for two numbers, not three!",
        "commonPitfall": "Calculation slip dividing 306 by 9."
      },
      {
        "id": "model-c10-math-2022-aps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometry: Sin(A-B) & Cos(A+B)",
        "questionText": "If sin(A - B) = 1/2 and cos(A + B) = 1/2, where 0° < A + B ≤ 90° and A > B, find the angles A and B.",
        "modelAnswer": "sin(A - B) = 1/2 = sin 30° => A - B = 30° ...(1)\ncos(A + B) = 1/2 = cos 60° => A + B = 60° ...(2)\nAdding (1) and (2): 2A = 90° => A = 45°.\nSubstituting in (2): 45° + B = 60° => B = 15°.",
        "stepMarking": [
          {
            "step": "Form A - B = 30° and A + B = 60°",
            "marks": "1 Mark"
          },
          {
            "step": "Solve to obtain A = 45°, B = 15°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify 0° < 45+15 ≤ 90° and 45 > 15.",
        "commonPitfall": "Confusing cos 60° = 1/2 with cos 30°."
      },
      {
        "id": "model-c10-math-2022-aps-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Circles: Angle Between Tangents & Central Angle",
        "questionText": "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
        "modelAnswer": "Let ∠PTQ = θ. Since tangents from an external point are equal, TP = TQ, so ΔTPQ is isosceles.\nHence ∠TPQ = ∠TQP = (180° - θ)/2 = 90° - θ/2.\nAlso radius OP is perpendicular to tangent TP => ∠OPT = 90°.\nTherefore ∠OPQ = ∠OPT - ∠TPQ = 90° - (90° - θ/2) = θ/2 = (1/2)∠PTQ.\nHence ∠PTQ = 2 ∠OPQ.",
        "stepMarking": [
          {
            "step": "TP = TQ => ∠TPQ = 90° - θ/2",
            "marks": "1 Mark"
          },
          {
            "step": "∠OPT = 90° => ∠OPQ = θ/2 => ∠PTQ = 2∠OPQ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a neat labelled circle diagram showing O, P, Q, T.",
        "commonPitfall": "Trying to prove using cyclic quadrilateral angle sum without finding ∠TPQ."
      },
      {
        "id": "model-c10-math-2022-aps-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Areas Related to Circles: Minute Hand Area Swept",
        "questionText": "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes (use π = 22/7).",
        "modelAnswer": "In 60 minutes, minute hand rotates 360°.\nIn 5 minutes, angle θ = (360° / 60) × 5 = 30°.\nArea of sector = (θ / 360°) × πr² = (30 / 360) × (22 / 7) × 14 × 14 = (1/12) × 22 × 2 × 14 = 154/3 cm² ≈ 51.33 cm².",
        "stepMarking": [
          {
            "step": "Angle in 5 minutes = 30°",
            "marks": "1 Mark"
          },
          {
            "step": "Sector area = 154/3 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Leave exact fraction 154/3 cm² alongside decimal 51.33 cm².",
        "commonPitfall": "Taking angle as 5° instead of 30°."
      },
      {
        "id": "model-c10-math-2022-aps-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Coordinate Geometry: Equidistant Point on X-Axis",
        "questionText": "Find the point on the x-axis which is equidistant from (2, -5) and (-2, 9).",
        "modelAnswer": "Let the point on x-axis be P(x, 0). Given PA = PB => PA² = PB².\n(x - 2)² + (0 + 5)² = (x + 2)² + (0 - 9)²\nx² - 4x + 4 + 25 = x² + 4x + 4 + 81\n-8x = 85 - 29 = 56 => x = -7.\nRequired point is (-7, 0).",
        "stepMarking": [
          {
            "step": "Set P(x, 0) and PA² = PB²",
            "marks": "1 Mark"
          },
          {
            "step": "Solve -8x = 56 => (-7, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Squaring PA = PB avoids messy square roots.",
        "commonPitfall": "Writing point as (-7) instead of ordered pair (-7, 0)."
      },
      {
        "id": "model-c10-math-2022-aps-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Real Numbers: End with Digit 0 Check",
        "questionText": "Check whether 6ⁿ can end with the digit 0 for any natural number n. Give mathematical justification.",
        "modelAnswer": "For any number 6ⁿ to end with the digit 0, it must be divisible by 10, meaning its prime factorisation must contain both 2 and 5.\nHowever, 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ.\nBy the Fundamental Theorem of Arithmetic (uniqueness of prime factorisation), 5 is NOT a prime factor of 6ⁿ. Hence 6ⁿ can NEVER end with digit 0 for any natural number n.",
        "stepMarking": [
          {
            "step": "Condition: prime factors must include 2 and 5",
            "marks": "1 Mark"
          },
          {
            "step": "6ⁿ = 2ⁿ×3ⁿ lacks factor 5 (Fundamental Theorem of Arithmetic)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always invoke \"Uniqueness of Fundamental Theorem of Arithmetic\".",
        "commonPitfall": "Giving only examples n=1, 2, 3 instead of general proof."
      },
      {
        "id": "model-c10-math-2022-aps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Coordinate Geometry: Ratio Division by Line / Axis",
        "questionText": "Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.",
        "modelAnswer": "Let the x-axis divide AB at P(x, 0) in the ratio k : 1.\nBy section formula for y-coordinate:\n0 = (5k + 1(-5)) / (k + 1) => 5k - 5 = 0 => k = 1.\nRatio is 1 : 1.\nNow x = (-4(1) + 1(1)) / (1 + 1) = -3/2.\nPoint of division is (-3/2, 0).",
        "stepMarking": [
          {
            "step": "Assume ratio k:1 and point P(x, 0)",
            "marks": "1 Mark"
          },
          {
            "step": "Find k = 1 -> ratio 1:1",
            "marks": "1 Mark"
          },
          {
            "step": "Coordinates (-3/2, 0)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Using ratio k:1 reduces two unknowns (m₁, m₂) to one unknown k.",
        "commonPitfall": "Setting x = 0 instead of y = 0 for the x-axis."
      },
      {
        "id": "model-c10-math-2022-aps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Probability: Standard Deck of 52 Playing Cards",
        "questionText": "From a well-shuffled pack of 52 playing cards, all face cards of spades and black queens are removed. One card is drawn at random from the remaining pack. Find the probability of getting:\n(a) a black face card\n(b) a red king\n(c) neither a king nor a jack.",
        "modelAnswer": "Cards removed: 3 spade face cards (J♠, Q♠, K♠) + remaining black queen (Q♣) = 4 cards removed.\nRemaining cards = 52 - 4 = 48.\n(a) Black face cards remaining: J♣ and K♣ (since J♠, Q♠, K♠, Q♣ removed) = 2 cards. P = 2/48 = 1/24.\n(b) Red kings (K♥, K♦) = 2 cards. P = 2/48 = 1/24.\n(c) Remaining Kings = 3 (K♥, K♦, K♣); Remaining Jacks = 3 (J♥, J♦, J♣) -> 6 cards. Neither = 48 - 6 = 42. P = 42/48 = 7/8.",
        "stepMarking": [
          {
            "step": "Remaining total = 48",
            "marks": "0.5 Mark"
          },
          {
            "step": "(a) 2/48 = 1/24",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2/48 = 1/24",
            "marks": "0.5 Mark"
          },
          {
            "step": "(c) 42/48 = 7/8",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never double-count Q♠ when removing both \"face cards of spades\" AND \"black queens\"!",
        "commonPitfall": "Subtracting 3 + 2 = 5 cards instead of 4 (double-counting Queen of Spades)."
      },
      {
        "id": "model-c10-math-2022-aps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Real Numbers: Proof of Irrationality",
        "questionText": "Prove that √5 is an irrational number. Hence show that 3 + 2√5 is also irrational.",
        "modelAnswer": "Let us assume to the contrary that √5 is rational, so √5 = a/b where a, b are coprime integers (b ≠ 0).\nSquaring: 5b² = a² => 5 divides a², hence 5 divides a. Let a = 5c.\nThen 5b² = 25c² => b² = 5c² => 5 divides b², hence 5 divides b.\nThus a and b have common factor 5, contradicting that they are coprime. So √5 is irrational.\nNow suppose 3 + 2√5 = r is rational => √5 = (r - 3)/2, which is rational (since r, 3, 2 are integers/rational). Contradiction! Hence 3 + 2√5 is irrational.",
        "stepMarking": [
          {
            "step": "Assumption a/b coprime & showing 5 divides a",
            "marks": "1 Mark"
          },
          {
            "step": "Showing 5 divides b -> contradiction -> √5 irrational",
            "marks": "1 Mark"
          },
          {
            "step": "Extending contradiction to 3 + 2√5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state \"a and b are coprime integers, b ≠ 0\" explicitly.",
        "commonPitfall": "Skipping the step stating \"if prime p divides a², then p divides a\"."
      },
      {
        "id": "model-c10-math-2022-aps-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Linear Equations: Two-Digit Number Word Problem",
        "questionText": "The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number.",
        "modelAnswer": "Let tens digit = x and units digit = y. Original number = 10x + y; reversed number = 10y + x.\nCondition 1: x + y = 9 ...(1)\nCondition 2: 9(10x + y) = 2(10y + x) => 90x + 9y = 20y + 2x => 88x - 11y = 0 => y = 8x ...(2)\nSubstituting (2) into (1): x + 8x = 9 => 9x = 9 => x = 1, and y = 8.\nTherefore, the number is 18.",
        "stepMarking": [
          {
            "step": "Form x + y = 9 and 9(10x+y) = 2(10y+x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Simplify to y = 8x and solve x = 1, y = 8",
            "marks": "1 Mark"
          },
          {
            "step": "Final answer: 18",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Verify: 9 × 18 = 162, and 2 × 81 = 162!",
        "commonPitfall": "Writing number as xy instead of 10x + y."
      },
      {
        "id": "model-c10-math-2022-aps-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Quadratic Equations: Train Speed Word Problem",
        "questionText": "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.",
        "modelAnswer": "Let uniform speed = x km/h.\nTime taken at x km/h = 360/x hours.\nTime taken at (x + 5) km/h = 360/(x + 5) hours.\nGiven: 360/x - 360/(x + 5) = 1\n360[ (x + 5 - x) / (x(x + 5)) ] = 1 => 1800 = x² + 5x => x² + 5x - 1800 = 0\n(x + 45)(x - 40) = 0 => x = 40 or x = -45 (rejected as speed > 0).\nSpeed of train = 40 km/h.",
        "stepMarking": [
          {
            "step": "Equation 360/x - 360/(x+5) = 1",
            "marks": "1 Mark"
          },
          {
            "step": "Quadratic x² + 5x - 1800 = 0",
            "marks": "1 Mark"
          },
          {
            "step": "Solve x = 40 km/h",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note that original speed is slower -> takes MORE time, so 360/x comes first!",
        "commonPitfall": "Subtracting in reverse order getting -1 on RHS."
      },
      {
        "id": "model-c10-math-2022-aps-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "AP: Finding Sum When Two Terms Are Given",
        "questionText": "If the sum of the first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of its first n terms.",
        "modelAnswer": "S₇ = (7/2)[2a + 6d] = 49 => 7(a + 3d) = 49 => a + 3d = 7 ...(1)\nS₁₇ = (17/2)[2a + 16d] = 289 => 17(a + 8d) = 289 => a + 8d = 17 ...(2)\nSubtracting (1) from (2): 5d = 10 => d = 2.\nFrom (1): a + 6 = 7 => a = 1.\nSum of n terms Sₙ = (n/2)[2(1) + (n - 1)(2)] = (n/2)[2n] = n².",
        "stepMarking": [
          {
            "step": "Equations a + 3d = 7 and a + 8d = 17",
            "marks": "1 Mark"
          },
          {
            "step": "Find a = 1, d = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Sₙ = n²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: S₇ = 7² = 49, S₁₇ = 17² = 289!",
        "commonPitfall": "Arithmetic error dividing 289 by 17."
      },
      {
        "id": "model-c10-math-2022-aps-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Linear Equations / Quadratic: Upstream & Downstream Boat Problem / Pipe Filling",
        "questionText": "Two water taps together can fill a tank in 9⅜ hours. The tap of larger diameter takes 10 hours less than the smaller one to fill the tank separately. Find the time in which each tap can separately fill the tank.",
        "modelAnswer": "Let smaller tap take x hours alone, so larger tap takes (x - 10) hours alone.\nIn 1 hour, combined portion filled = 1/x + 1/(x - 10) = 8/75 (since 9⅜ = 75/8 h).\n(2x - 10) / [x(x - 10)] = 8/75 => 150x - 750 = 8x² - 80x => 8x² - 230x + 750 = 0 => 4x² - 115x + 375 = 0\n4x² - 100x - 15x + 375 = 0 => (x - 25)(4x - 15) = 0.\nx = 25 or x = 15/4 = 3.75 (rejected as x - 10 = -6.25 < 0).\nHence smaller tap = 25 hours, larger tap = 15 hours.",
        "stepMarking": [
          {
            "step": "1-hour work rates 1/x + 1/(x-10) = 8/75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Form 4x² - 115x + 375 = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "Factorize and reject x = 3.75",
            "marks": "1.5 Marks"
          },
          {
            "step": "Times: 25 hrs and 15 hrs",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always check whether x - 10 > 0 when rejecting the smaller root!",
        "commonPitfall": "Adding times directly: x + (x - 10) = 75/8 (wrong!)."
      },
      {
        "id": "model-c10-math-2022-aps-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Triangles: Basic Proportionality Theorem (Thales Theorem Proof)",
        "questionText": "State and prove the Basic Proportionality Theorem (Thales Theorem). Using this theorem, prove that a line drawn through the mid-point of one side of a triangle parallel to another side bisects the third side.",
        "modelAnswer": "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof: In ΔABC, DE ∥ BC. Join BE, CD and draw EN ⊥ AB, DM ⊥ AC.\nar(ΔADE)/ar(ΔBDE) = (½·AD·EN)/(½·DB·EN) = AD/DB.\nar(ΔADE)/ar(ΔDEC) = (½·AE·DM)/(½·EC·DM) = AE/EC.\nSince ΔBDE and ΔDEC lie on same base DE and between same parallels DE ∥ BC, ar(ΔBDE) = ar(ΔDEC).\nTherefore AD/DB = AE/EC.\nApplication: If D is midpoint of AB, AD/DB = 1 => AE/EC = 1 => AE = EC (E is midpoint of AC).",
        "stepMarking": [
          {
            "step": "Statement + Given + Construction",
            "marks": "1 Mark"
          },
          {
            "step": "Area ratios AD/DB and AE/EC",
            "marks": "2 Marks"
          },
          {
            "step": "Equal base/parallels -> AD/DB = AE/EC",
            "marks": "1 Mark"
          },
          {
            "step": "Midpoint corollary proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Thales theorem is the most frequently tested 5-mark geometry proof in CBSE Class 10.",
        "commonPitfall": "Forgetting to draw altitudes EN and DM in construction."
      },
      {
        "id": "model-c10-math-2022-aps-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Trigonometry: Two Angles of Depression / Pole & Building",
        "questionText": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower. (Use √3 = 1.732)",
        "modelAnswer": "Let building AB = 7 m and tower CD = h m, horizontal distance BD = x m, AE ⊥ CD so CE = 7 m and ED = h - 7.\nIn right ΔABD: tan 45° = AB / BD => 1 = 7 / x => x = 7 m (so AE = 7 m).\nIn right ΔACE (or ΔAED): tan 60° = DE / AE => √3 = (h - 7) / 7 => h - 7 = 7√3.\nh = 7(√3 + 1) = 7(1.732 + 1) = 7 × 2.732 = 19.124 m.",
        "stepMarking": [
          {
            "step": "Neat labelled figure with angles 60° & 45°",
            "marks": "1 Mark"
          },
          {
            "step": "Find horizontal distance x = 7 m using tan 45°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Find DE = 7√3 m using tan 60°",
            "marks": "1.5 Marks"
          },
          {
            "step": "Total height 7(√3 + 1) = 19.124 m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mark horizontal dotted line at eye level so angle of depression equals alternate interior angle.",
        "commonPitfall": "Taking full tower height h instead of h - 7 in the upper right triangle."
      },
      {
        "id": "model-c10-math-2022-aps-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Surface Areas & Volumes: Hollow Cylindrical / Conical Rocket or Tent",
        "questionText": "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent. Also, find the cost of the canvas of the tent at the rate of ₹500 per m². (Use π = 22/7)",
        "modelAnswer": "Radius r = 4/2 = 2 m, cylinder height h = 2.1 m, slant height of cone l = 2.8 m.\nCanvas area = CSA of cylinder + CSA of cone = 2πrh + πrl = πr(2h + l)\n= (22/7) × 2 × (2 × 2.1 + 2.8) = (44/7) × (4.2 + 2.8) = (44/7) × 7 = 44 m².\n(Note: Base of tent is NOT covered with canvas).\nCost = 44 × ₹500 = ₹22,000.",
        "stepMarking": [
          {
            "step": "Identify r = 2 m and formula 2πrh + πrl",
            "marks": "1.5 Marks"
          },
          {
            "step": "Calculate canvas area = 44 m²",
            "marks": "2.5 Marks"
          },
          {
            "step": "Total cost = ₹22,000",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Factor out πr before substituting numbers to simplify arithmetic!",
        "commonPitfall": "Adding circular floor area πr² to canvas area."
      },
      {
        "id": "model-c10-math-2022-aps-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Surface Area & Volume (Gulab Jamun / Cylindrical Capsule)",
        "questionText": "Read the case and answer:\nA medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The total length of the entire capsule is 14 mm and its diameter is 5 mm. (Use π = 22/7)\n\n(a) Find the radius and the length of the cylindrical middle portion. (1M)\n(b) Calculate the total surface area of the capsule. (2M)\n(c) If a box contains 100 capsules, find the total surface area in cm². (1M)",
        "modelAnswer": "(a) Radius r = 5/2 = 2.5 mm. Length of cylinder h = 14 - 2(2.5) = 14 - 5 = 9 mm.\n(b) TSA = CSA of cylinder + 2 × CSA of hemisphere = 2πrh + 4πr² = 2πr(h + 2r)\n= 2 × (22/7) × 2.5 × (9 + 5) = 2 × (22/7) × 2.5 × 14 = 220 mm².\n(c) For 100 capsules: 100 × 220 = 22,000 mm² = 22,000 / 100 cm² = 220 cm².",
        "stepMarking": [
          {
            "step": "(a) r = 2.5 mm, h = 9 mm",
            "marks": "1 Mark"
          },
          {
            "step": "(b) TSA = 220 mm²",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 22,000 mm² to 220 cm²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "1 cm² = 100 mm² (NOT 10 mm²)!",
        "commonPitfall": "Forgetting to subtract 2r from total length 14 mm to get cylinder length."
      },
      {
        "id": "model-c10-math-2022-aps-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Arithmetic Progressions (Seating / Salary Increment)",
        "questionText": "Read the case and answer:\nA stadium has rows of seats arranged such that the first row has 20 seats, the second row has 24 seats, the third row has 28 seats, and so on.\n\n(a) Find the number of seats in the 15th row. (1M)\n(b) Which row has exactly 100 seats? (1M)\n(c) Calculate the total number of seats in the first 20 rows of the stadium. (2M)",
        "modelAnswer": "(a) a = 20, d = 4. a₁₅ = 20 + 14(4) = 20 + 56 = 76 seats.\n(b) aₙ = 20 + (n - 1)4 = 100 => 4(n - 1) = 80 => n - 1 = 20 => n = 21st row.\n(c) S₂₀ = (20/2)[2(20) + 19(4)] = 10 × (40 + 76) = 10 × 116 = 1160 seats.",
        "stepMarking": [
          {
            "step": "(a) a₁₅ = 76",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 21st row",
            "marks": "1 Mark"
          },
          {
            "step": "(c) S₂₀ = 1160 seats",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Check: a₂₁ = 20 + 20×4 = 100.",
        "commonPitfall": "Using n instead of n-1 in aₙ = a + (n-1)d."
      },
      {
        "id": "model-c10-math-2022-aps-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Coordinate Geometry (School Sports Ground Map)",
        "questionText": "Read the case and answer:\nOn a coordinate grid of a school ground, flag posts are placed at A(2, 3), B(6, 7), and C(10, 3).\n\n(a) Find the distance between flag posts A and C. (1M)\n(b) Find the lengths AB and BC to determine what type of triangle ABC is. (2M)\n(c) Find the coordinates of the midpoint D of AC, and distance BD. (1M)",
        "modelAnswer": "(a) AC = √((10 - 2)² + (3 - 3)²) = √64 = 8 units.\n(b) AB = √((6 - 2)² + (7 - 3)²) = √(16 + 16) = 4√2 units. BC = √((10 - 6)² + (3 - 7)²) = √(16 + 16) = 4√2 units. Since AB = BC AND AB² + BC² = 32 + 32 = 64 = AC², ΔABC is a right-angled isosceles triangle (∠B = 90°).\n(c) Midpoint D of AC = ((2+10)/2, (3+3)/2) = (6, 3). Distance BD = 7 - 3 = 4 units.",
        "stepMarking": [
          {
            "step": "(a) AC = 8 units",
            "marks": "1 Mark"
          },
          {
            "step": "(b) AB = BC = 4√2 & right isosceles check",
            "marks": "2 Marks"
          },
          {
            "step": "(c) D(6,3) & BD = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check Pythagoras AB² + BC² = AC² in triangle classification!",
        "commonPitfall": "Stopping at \"isosceles\" without checking the 90° angle."
      }
    ]
  }
];
