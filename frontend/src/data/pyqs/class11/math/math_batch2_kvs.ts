import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_11_MATH_BATCH2_PAPERS: PyqPaper[] = [
  {
    "id": "kvs-c11-math-2024-del",
    "title": "KVS Delhi Region Class 11 Mathematics Pre-Annual Paper I (2024)",
    "subject": "Mathematics",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "KVS/DEL/C11/MAT-1",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This question paper contains 38 questions divided into 5 sections: A to E (Total 80 Marks).",
      "Section A comprises 18 MCQs and 2 Assertion-Reason questions of 1 mark each.",
      "Section B comprises 5 Very Short Answer (VSA) questions of 2 marks each.",
      "Section C comprises 6 Short Answer (SA) questions of 3 marks each.",
      "Section D comprises 4 Long Answer (LA) questions of 5 marks each.",
      "Section E comprises 3 Case-Based integrated questions of 4 marks each."
    ],
    "questions": [
      {
        "id": "kvs-c11-math-2024-del-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Slope of Perpendicular Lines",
        "questionText": "The equation of the line passing through (2, 3) and perpendicular to 4x - 3y = 10 is:",
        "options": [
          "A) 3x + 4y = 18",
          "B) 4x - 3y = -1",
          "C) 3x - 4y = -6",
          "D) 4x + 3y = 17"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Slope of given line m₁ = 4/3 => perpendicular slope m₂ = -3/4. Line: y - 3 = (-3/4)(x - 2) => 4y - 12 = -3x + 6 => 3x + 4y = 18.",
        "stepMarking": [
          {
            "step": "m₂ = -3/4 + point-slope equation -> 3x + 4y = 18",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: (2, 3) satisfies 3(2) + 4(3) = 6 + 12 = 18!",
        "commonPitfall": "Forgetting the negative sign in m₁m₂ = -1."
      },
      {
        "id": "kvs-c11-math-2024-del-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Conic Sections: Eccentricity of Ellipse & Hyperbola",
        "questionText": "The length of the latus rectum of the ellipse x²/25 + y²/9 = 1 is:",
        "options": [
          "A) 18/5",
          "B) 50/3",
          "C) 9/5",
          "D) 6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Here a² = 25 (a = 5), b² = 9 (b = 3). Latus rectum = 2b² / a = 2(9) / 5 = 18/5.",
        "stepMarking": [
          {
            "step": "LR = 2b²/a = 18/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always ensure a > b when identifying semi-major axis a.",
        "commonPitfall": "Computing 2b/a instead of 2b²/a."
      },
      {
        "id": "kvs-c11-math-2024-del-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Octant Identification",
        "questionText": "In which octant does the point (-3, 4, -5) lie?",
        "options": [
          "A) II",
          "B) VI",
          "C) VII",
          "D) VIII"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Signs (-, +, -) correspond to Octant VI (since (-, +, +) is II, shifting z to negative adds 4 -> VI).",
        "stepMarking": [
          {
            "step": "Identify (-, +, -) as Octant VI",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Octants I–IV have +z (same as 2D quadrants I–IV); Octants V–VIII add 4 for -z!",
        "commonPitfall": "Confusing Octant VI (-,+,-) with VII (-,-,-)."
      },
      {
        "id": "kvs-c11-math-2024-del-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Standard Trig Limit",
        "questionText": "Evaluate lim (x → 0) [ sin(5x) / tan(3x) ]:",
        "options": [
          "A) 3/5",
          "B) 5/3",
          "C) 1",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Divide numerator and denominator by x: lim [5·(sin 5x / 5x)] / [3·(tan 3x / 3x)] = (5 × 1) / (3 × 1) = 5/3.",
        "stepMarking": [
          {
            "step": "Apply sin kx / kx -> 1 and tan mx / mx -> 1 => 5/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For x → 0, sin ax / tan bx simplifies directly to a/b.",
        "commonPitfall": "Inverting ratio as 3/5."
      },
      {
        "id": "kvs-c11-math-2024-del-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Derivative of x sin x",
        "questionText": "If f(x) = x sin x, then f'(π/2) equals:",
        "options": [
          "A) 0",
          "B) 1",
          "C) π/2",
          "D) -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By product rule: f'(x) = 1·sin x + x cos x. At x = π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1.",
        "stepMarking": [
          {
            "step": "f'(x) = sin x + x cos x -> f'(π/2) = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Differentiate FIRST using product rule, THEN substitute x = π/2.",
        "commonPitfall": "Substituting x = π/2 before differentiating."
      },
      {
        "id": "kvs-c11-math-2024-del-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Variance Change Under Scaling",
        "questionText": "If the variance of 20 observations is 5, and each observation is multiplied by 2, then the new variance is:",
        "options": [
          "A) 5",
          "B) 10",
          "C) 20",
          "D) 25"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. If every observation is multiplied by k, standard deviation scales by |k| and variance scales by k². Thus new variance = 2² × 5 = 4 × 5 = 20.",
        "stepMarking": [
          {
            "step": "New Var = k² × Old Var = 4 × 5 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Adding/subtracting a constant does NOT change variance; multiplying by k multiplies variance by k².",
        "commonPitfall": "Multiplying variance by 2 instead of 2² = 4."
      },
      {
        "id": "kvs-c11-math-2024-del-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Mutually Exclusive & Independent Events",
        "questionText": "If P(A) = 0.5, P(B) = 0.4, and P(A ∪ B) = 0.7, then P(A ∩ B) is:",
        "options": [
          "A) 0.1",
          "B) 0.2",
          "C) 0.3",
          "D) 0.9"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using addition theorem: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.7 = 0.2.",
        "stepMarking": [
          {
            "step": "Apply P(A∩B) = 0.5 + 0.4 - 0.7 = 0.2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "commonPitfall": "Multiplying P(A)·P(B) assuming independence without proof."
      },
      {
        "id": "kvs-c11-math-2024-del-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Distance Between Parallel Lines",
        "questionText": "The perpendicular distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0 is:",
        "options": [
          "A) 2/5",
          "B) 12/5",
          "C) 2",
          "D) 1/5"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. d = |c₁ - c₂| / √(a² + b²) = |7 - 5| / √(3² + (-4)²) = 2 / 5.",
        "stepMarking": [
          {
            "step": "d = |7 - 5| / √(9+16) = 2/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Make sure coefficients of x and y are identical in both equations before applying |c₁ - c₂|/√(a²+b²)!",
        "commonPitfall": "Using raw c₁, c₂ when second equation is scaled (e.g. 6x - 8y + 10 = 0)."
      },
      {
        "id": "kvs-c11-math-2024-del-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Sets: Power Set Cardinality",
        "questionText": "If A = {1, 2, {3, 4}}, then how many subsets does set A have?",
        "options": [
          "A) 4",
          "B) 8",
          "C) 16",
          "D) 6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Set A has 3 elements: 1, 2, and {3, 4}. Hence n(P(A)) = 2³ = 8.",
        "stepMarking": [
          {
            "step": "n(A) = 3 => 2³ = 8 subsets",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Treat {3, 4} inside A as ONE single element.",
        "commonPitfall": "Counting 3 and 4 separately to get n(A) = 4."
      },
      {
        "id": "kvs-c11-math-2024-del-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Domain & Range of Real Function",
        "questionText": "The domain and range of the real function f(x) = √(9 - x²) are respectively:",
        "options": [
          "A) [-3, 3] and [0, 3]",
          "B) (-3, 3) and (0, 3)",
          "C) [-3, 3] and [-3, 3]",
          "D) [0, 9] and [0, 3]"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For real f(x), 9 - x² ≥ 0 => x ∈ [-3, 3]. Since √ is non-negative and reaches max √9 = 3 at x = 0, Range = [0, 3].",
        "stepMarking": [
          {
            "step": "9 - x² ≥ 0 -> [-3, 3]; principal root -> [0, 3]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal square root √ is always ≥ 0!",
        "commonPitfall": "Writing range as [-3, 3]."
      },
      {
        "id": "kvs-c11-math-2024-del-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometric Functions: Radian-Degree Conversion & Quadrant Sign",
        "questionText": "The value of cos(15°) or sin(75°) is equal to:",
        "options": [
          "A) (√3 - 1)/(2√2)",
          "B) (√3 + 1)/(2√2)",
          "C) √3 / 2",
          "D) (√3 + 1)/2"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. cos 15° = sin 75° = sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2).",
        "stepMarking": [
          {
            "step": "Expand sin(45°+30°) -> (√3+1)/(2√2)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize sin 15° = cos 75° = (√3-1)/(2√2) and cos 15° = sin 75° = (√3+1)/(2√2).",
        "commonPitfall": "Swapping signs in cos(45° - 30°)."
      },
      {
        "id": "kvs-c11-math-2024-del-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Powers of i & Modulus",
        "questionText": "The value of i⁻³⁹ is:",
        "options": [
          "A) 1",
          "B) -1",
          "C) i",
          "D) -i"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. i⁻³⁹ = 1 / i³⁹ = i⁴⁰ / i³⁹ = i (since i⁴⁰ = (i⁴)¹⁰ = 1).",
        "stepMarking": [
          {
            "step": "Multiply by i⁴⁰ = 1 -> i⁴⁰/i³⁹ = i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For negative powers of i, multiply by the next multiple of 4 (i⁴⁰ = 1).",
        "commonPitfall": "Writing -i instead of +i."
      },
      {
        "id": "kvs-c11-math-2024-del-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Multiplicative Inverse",
        "questionText": "The modulus of the complex number z = (1 + i)/(1 - i) is:",
        "options": [
          "A) 1",
          "B) √2",
          "C) 2",
          "D) 1/√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |z| = |1 + i| / |1 - i| = √2 / √2 = 1 (in fact z = i, whose modulus is 1).",
        "stepMarking": [
          {
            "step": "|z₁/z₂| = |z₁|/|z₂| = √2/√2 = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember (1+i)/(1-i) = i and (1-i)/(1+i) = -i.",
        "commonPitfall": "Adding moduli instead of dividing."
      },
      {
        "id": "kvs-c11-math-2024-del-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Linear Inequalities: Absolute Value / Interval",
        "questionText": "If |x - 2| ≤ 5, then x belongs to:",
        "options": [
          "A) (-3, 7)",
          "B) [-3, 7]",
          "C) (-∞, -3] ∪ [7, ∞)",
          "D) [-7, 3]"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -5 ≤ x - 2 ≤ 5 => Adding 2 throughout: -3 ≤ x ≤ 7 => x ∈ [-3, 7].",
        "stepMarking": [
          {
            "step": "-5 ≤ x - 2 ≤ 5 -> [-3, 7]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "≤ gives closed brackets [ ]; < gives open brackets ( ).",
        "commonPitfall": "Forgetting to add 2 to -5 on the left side."
      },
      {
        "id": "kvs-c11-math-2024-del-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Circular / Word Arrangements",
        "questionText": "If ⁿC₁₂ = ⁿC₈, then the value of n is:",
        "options": [
          "A) 4",
          "B) 12",
          "C) 20",
          "D) 96"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Using ⁿC_a = ⁿC_b (with a ≠ b) => n = a + b = 12 + 8 = 20.",
        "stepMarking": [
          {
            "step": "Apply n = 12 + 8 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "ⁿC_r = ⁿC_(n-r) is one of the fastest 1M shortcuts.",
        "commonPitfall": "Taking n = 12 - 8 = 4."
      },
      {
        "id": "kvs-c11-math-2024-del-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Number of Diagonals",
        "questionText": "How many diagonals does a convex polygon of 10 sides (decagon) have?",
        "options": [
          "A) 45",
          "B) 35",
          "C) 90",
          "D) 20"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diagonals = ¹⁰C₂ - 10 = (10 × 9)/2 - 10 = 45 - 10 = 35.",
        "stepMarking": [
          {
            "step": "¹⁰C₂ - 10 = 45 - 10 = 35",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "General formula: n(n - 3)/2.",
        "commonPitfall": "Forgetting to subtract the 10 polygon sides from ¹⁰C₂."
      },
      {
        "id": "kvs-c11-math-2024-del-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Binomial Theorem: Number of Terms & Middle Term",
        "questionText": "The total number of distinct terms in the expansion of (x + a)¹⁰⁰ + (x - a)¹⁰⁰ after simplification is:",
        "options": [
          "A) 101",
          "B) 50",
          "C) 51",
          "D) 202"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Odd powers of \"a\" cancel out while even powers double. For even n = 100, surviving terms = n/2 + 1 = 50 + 1 = 51.",
        "stepMarking": [
          {
            "step": "n/2 + 1 = 51 terms survive",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For (x+a)ⁿ + (x-a)ⁿ with even n: n/2 + 1 terms; for difference (x+a)ⁿ - (x-a)ⁿ: n/2 terms.",
        "commonPitfall": "Marking 50 instead of 51."
      },
      {
        "id": "kvs-c11-math-2024-del-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Sequences & Series: Geometric Mean & Infinite GP",
        "questionText": "If the 3rd term of a G.P. is 4, then the product of its first 5 terms is:",
        "options": [
          "A) 4³",
          "B) 4⁴",
          "C) 4⁵",
          "D) 2⁵"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. First 5 terms: a/r², a/r, a, ar, ar² (where middle term a = a₃ = 4). Product = (a)⁵ = 4⁵.",
        "stepMarking": [
          {
            "step": "Product of 5 symmetric GP terms = (a₃)⁵ = 4⁵",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For odd number n of GP terms, product = (middle term)ⁿ.",
        "commonPitfall": "Trying to solve for a and r separately."
      },
      {
        "id": "kvs-c11-math-2024-del-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Sequences: AM-GM Inequality",
        "questionText": "Assertion (A): For any two distinct positive real numbers a and b, their Arithmetic Mean (AM) is strictly greater than their Geometric Mean (GM).\nReason (R): (a + b)/2 - √(ab) = (√a - √b)² / 2 > 0 for all a ≠ b > 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Since (√a - √b)² > 0 for distinct positive reals, AM > GM strictly.",
        "stepMarking": [
          {
            "step": "Option (A) proving AM - GM = (√a - √b)²/2 > 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equality AM = GM holds iff a = b.",
        "commonPitfall": "Applying AM ≥ GM to negative numbers."
      },
      {
        "id": "kvs-c11-math-2024-del-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Sets & Relations: Equivalence vs Function",
        "questionText": "Assertion (A): Every function is a relation, but every relation is not a function.\nReason (R): In a function from set A to B, every element of A must have a unique (one and only one) image in B.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A function is a special subset of A × B where every element of A maps to exactly one element of B.",
        "stepMarking": [
          {
            "step": "Option (A) citing unique image criterion",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A single vertical line test on a graph identifies a function.",
        "commonPitfall": "Confusing one-one with function definition."
      },
      {
        "id": "kvs-c11-math-2024-del-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Binomial Theorem: Divisibility Proof",
        "questionText": "Using Binomial Theorem, show that 9^(n+1) - 8n - 9 is divisible by 64 whenever n is a positive integer.",
        "modelAnswer": "Write 9^(n+1) = (1 + 8)^(n+1) = ⁿ⁺¹C₀ + ⁿ⁺¹C₁·8 + ⁿ⁺¹C₂·8² + ⁿ⁺¹C₃·8³ + ... + ⁿ⁺¹C_(n+1)·8^(n+1)\n= 1 + 8(n + 1) + 64[ ⁿ⁺¹C₂ + ⁿ⁺¹C₃·8 + ... ]\n= 8n + 9 + 64k (where k is an integer).\nHence 9^(n+1) - 8n - 9 = 64k, which is divisible by 64.",
        "stepMarking": [
          {
            "step": "Expand (1 + 8)^(n+1) cleanly",
            "marks": "1 Mark"
          },
          {
            "step": "Factor 64 from remaining terms after 8n + 9 cancels",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Rewrite base 9 as (1 + 8) so 8² = 64 factors out from the 3rd term onward!",
        "commonPitfall": "Expanding 9ⁿ instead of 9^(n+1)."
      },
      {
        "id": "kvs-c11-math-2024-del-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometric Functions: tan(π/4 + x) Proof",
        "questionText": "Prove that: cos(π/4 - x) cos(π/4 - y) - sin(π/4 - x) sin(π/4 - y) = sin(x + y).",
        "modelAnswer": "Using cos A cos B - sin A sin B = cos(A + B) with A = (π/4 - x) and B = (π/4 - y):\nLHS = cos[ (π/4 - x) + (π/4 - y) ] = cos[ π/2 - (x + y) ] = sin(x + y) = RHS.",
        "stepMarking": [
          {
            "step": "Apply cos(A + B) compound angle formula",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify cos(π/2 - (x+y)) = sin(x + y)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Look for cosA cosB - sinA sinB pattern before expanding π/4 angles!",
        "commonPitfall": "Expanding each cos(π/4 - x) separately into 4 long terms."
      },
      {
        "id": "kvs-c11-math-2024-del-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Complex Numbers: Polar / Standard a + ib Conversion",
        "questionText": "Express [(3 + i√5)(3 - i√5)] / [(√3 + i√2) - (√3 - i√2)] in the standard form a + ib.",
        "modelAnswer": "Numerator = 3² - (i√5)² = 9 + 5 = 14.\nDenominator = √3 + i√2 - √3 + i√2 = 2i√2.\nExpression = 14 / (2i√2) = 7 / (i√2) = (7 / (i√2)) × (-i√2 / -i√2) = -7i√2 / 2 = 0 - (7√2 / 2) i.",
        "stepMarking": [
          {
            "step": "Numerator = 14 & Denominator = 2i√2",
            "marks": "1 Mark"
          },
          {
            "step": "Rationalize denominator -> 0 - (7√2/2)i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice (a+ib)(a-ib) = a² + b² cleanly.",
        "commonPitfall": "Writing i² = +1 instead of -1."
      },
      {
        "id": "kvs-c11-math-2024-del-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Permutations & Combinations: Word MISSISSIPPI",
        "questionText": "In how many ways can the letters of the word PERMUTATIONS be arranged if the words start with P and end with S?",
        "modelAnswer": "Word PERMUTATIONS has 12 letters with P(1), S(1), T(2), and 8 other distinct letters.\nFixing P at 1st place and S at 12th place leaves 10 middle letters containing two T's.\nNumber of arrangements = 10! / 2! = 3,628,800 / 2 = 1,814,400.",
        "stepMarking": [
          {
            "step": "Fix P and S -> 10! remaining arrangements",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 2! for two T's = 1,814,400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count repeated letters (here T appears twice)!",
        "commonPitfall": "Forgetting to divide by 2! for identical T's."
      },
      {
        "id": "kvs-c11-math-2024-del-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Limits & Derivatives: Exponential / Algebraic Limit",
        "questionText": "Evaluate: lim (x → 0) [ (1 + x)⁵ - 1 ] / x.",
        "modelAnswer": "Let y = 1 + x. As x → 0, y → 1, and x = y - 1.\nLimit becomes lim (y → 1) (y⁵ - 1⁵) / (y - 1).\nUsing standard formula lim (y → a) (yⁿ - aⁿ)/(y - a) = n aⁿ⁻¹:\n= 5 × (1)⁴ = 5.",
        "stepMarking": [
          {
            "step": "Substitute y = 1 + x -> (y⁵ - 1)/(y - 1)",
            "marks": "1 Mark"
          },
          {
            "step": "Apply standard limit n aⁿ⁻¹ = 5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep standard limit formula explicit rather than L'Hôpital's rule in Class 11 NCERT.",
        "commonPitfall": "Substituting x = 0 directly and getting 0/0."
      },
      {
        "id": "kvs-c11-math-2024-del-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Sequences & Series: Sum of Special Series n terms (8 + 88 + 888...)",
        "questionText": "Find the sum to n terms of the sequence: 8, 88, 888, 8888, ...",
        "modelAnswer": "Sₙ = 8 + 88 + 888 + ... n terms\n= (8/9) [ 9 + 99 + 999 + ... n terms ]\n= (8/9) [ (10 - 1) + (10² - 1) + (10³ - 1) + ... + (10ⁿ - 1) ]\n= (8/9) [ (10 + 10² + ... + 10ⁿ) - n ]\n= (8/9) [ 10(10ⁿ - 1)/(10 - 1) - n ] = (80/81)(10ⁿ - 1) - (8n/9).",
        "stepMarking": [
          {
            "step": "Factor 8/9 to convert into 9 + 99 + ...",
            "marks": "1 Mark"
          },
          {
            "step": "Split as GP (10 + 10² + ... + 10ⁿ) minus n",
            "marks": "1 Mark"
          },
          {
            "step": "GP sum -> (80/81)(10ⁿ - 1) - 8n/9",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same trick works for 5+55+555... (factor 5/9) or 0.7+0.77... (factor 7/9).",
        "commonPitfall": "Forgetting to subtract n (from 1 repeated n times)."
      },
      {
        "id": "kvs-c11-math-2024-del-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Sets: Venn Diagram / Survey Inclusion-Exclusion",
        "questionText": "In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, while 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee.",
        "modelAnswer": "Let U = total students, T = tea, C = coffee.\nn(U) = 600, n(T) = 150, n(C) = 225, n(T ∩ C) = 100.\nn(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 150 + 225 - 100 = 275.\nStudents taking neither = n(U) - n(T ∪ C) = 600 - 275 = 325 students.",
        "stepMarking": [
          {
            "step": "Identify n(T), n(C), n(T∩C)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute n(T ∪ C) = 275",
            "marks": "1 Mark"
          },
          {
            "step": "Subtract from 600 -> 325 students",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a quick two-circle Venn diagram to verify 50 + 100 + 125 + 325 = 600.",
        "commonPitfall": "Adding 150 + 225 without subtracting the 100 overlap."
      },
      {
        "id": "kvs-c11-math-2024-del-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometric Functions: Double & Triple Angle Proof",
        "questionText": "If tan x = -4/3 and x lies in the second quadrant, find the exact values of sin(x/2), cos(x/2), and tan(x/2).",
        "modelAnswer": "Since x ∈ (π/2, π), x/2 ∈ (π/4, π/2) [Quadrant I -> all positive!].\ntan x = -4/3 => sec x = -√(1 + 16/9) = -5/3 (negative in Q-II) => cos x = -3/5.\nsin(x/2) = √[(1 - cos x)/2] = √[(1 + 3/5)/2] = √(4/5) = 2/√5.\ncos(x/2) = √[(1 + cos x)/2] = √[(1 - 3/5)/2] = √(1/5) = 1/√5.\ntan(x/2) = sin(x/2) / cos(x/2) = 2.",
        "stepMarking": [
          {
            "step": "Identify x/2 in Quadrant I & cos x = -3/5",
            "marks": "1 Mark"
          },
          {
            "step": "Compute sin(x/2) = 2/√5 and cos(x/2) = 1/√5",
            "marks": "1.5 Marks"
          },
          {
            "step": "tan(x/2) = 2",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always determine the quadrant of x/2 FIRST to pick + or - signs on square roots!",
        "commonPitfall": "Giving negative cos(x/2) thinking x/2 is also in Quadrant II."
      },
      {
        "id": "kvs-c11-math-2024-del-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Linear Inequalities: System of Word Inequalities",
        "questionText": "Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 40.",
        "modelAnswer": "Let the two consecutive odd natural numbers be x and (x + 2).\nCondition 1: x > 10 (smallest odd > 10 is 11).\nCondition 2: x + (x + 2) < 40 => 2x + 2 < 40 => 2x < 38 => x < 19.\nSince x is odd with 10 < x < 19, possible values of x are 11, 13, 15, 17.\nRequired pairs: (11, 13), (13, 15), (15, 17), (17, 19).",
        "stepMarking": [
          {
            "step": "Set up inequalities x > 10 and 2x + 2 < 40",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve 10 < x < 19",
            "marks": "0.5 Mark"
          },
          {
            "step": "List all 4 pairs accurately",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice condition says \"sum is LESS than 40\" (not ≤), so x = 19 (19 + 21 = 40) is excluded.",
        "commonPitfall": "Including (19, 21) whose sum is 40."
      },
      {
        "id": "kvs-c11-math-2024-del-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Conic Sections: Circle Passing Through Two Points & Centre on Line",
        "questionText": "Find the equation of the circle passing through the points (4, 1) and (6, 5) whose centre lies on the line 4x + y = 16.",
        "modelAnswer": "Let centre be (h, k) and equation (x - h)² + (y - k)² = r².\nSince (4, 1) and (6, 5) lie on circle:\n(4 - h)² + (1 - k)² = (6 - h)² + (5 - k)²\n16 - 8h + h² + 1 - 2k + k² = 36 - 12h + h² + 25 - 10k + k²\n4h + 8k = 44 => h + 2k = 11 ...(1)\nAlso centre lies on 4h + k = 16 ...(2)\nSolving (1) and (2): 4(11 - 2k) + k = 16 => 44 - 7k = 16 => 7k = 28 => k = 4, h = 3.\nr² = (4 - 3)² + (1 - 4)² = 1 + 9 = 10.\nEquation: (x - 3)² + (y - 4)² = 10 (or x² + y² - 6x - 8y + 15 = 0).",
        "stepMarking": [
          {
            "step": "Equate radii² -> h + 2k = 11",
            "marks": "1 Mark"
          },
          {
            "step": "Solve with 4h + k = 16 -> centre (3, 4)",
            "marks": "1 Mark"
          },
          {
            "step": "Find r² = 10 & circle equation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify both points (4, 1) and (6, 5) satisfy (x-3)²+(y-4)² = 10.",
        "commonPitfall": "Arithmetic slip expanding (6-h)² + (5-k)²."
      },
      {
        "id": "kvs-c11-math-2024-del-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Limits & Derivatives: First Principles Derivative of cos x or tan x",
        "questionText": "Find the derivative of f(x) = cos x from first principles (ab initio method).",
        "modelAnswer": "f'(x) = lim (h → 0) [cos(x + h) - cos x] / h.\nUsing cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2):\n= lim (h → 0) [ -2 sin(x + h/2) sin(h/2) ] / h\n= lim (h → 0) -sin(x + h/2) × [ sin(h/2) / (h/2) ]\n= -sin(x + 0) × 1 = -sin x.",
        "stepMarking": [
          {
            "step": "Set up first principle limit",
            "marks": "0.5 Mark"
          },
          {
            "step": "Apply cos C - cos D formula",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate lim sin(h/2)/(h/2) = 1 -> -sin x",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide both numerator and denominator by 2 to match sin(h/2)/(h/2).",
        "commonPitfall": "Missing the minus sign in cos C - cos D."
      },
      {
        "id": "kvs-c11-math-2024-del-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Straight Lines: Foot of Perpendicular & Image of a Point",
        "questionText": "Find the coordinates of the foot of the perpendicular drawn from the point (-1, 3) to the line 3x - 4y - 16 = 0. Also find the length of the perpendicular.",
        "modelAnswer": "Given point P(-1, 3) and line 3x - 4y - 16 = 0. Slope of line m₁ = 3/4 => perpendicular PM has slope m₂ = -4/3.\nEquation of PM: y - 3 = (-4/3)(x + 1) => 4x + 3y - 5 = 0 ...(1)\nSolving 3x - 4y = 16 and 4x + 3y = 5:\nMultiply first by 3, second by 4 -> 9x - 12y = 48 and 16x + 12y = 20.\nAdding: 25x = 68 => x = 68/25.\nFrom 4(68/25) + 3y = 5 => 3y = (125 - 272)/25 = -147/25 => y = -49/25.\nFoot of perpendicular = (68/25, -49/25).\nLength of perpendicular d = |3(-1) - 4(3) - 16| / √(3² + 4²) = |-3 - 12 - 16| / 5 = 31/5 units.",
        "stepMarking": [
          {
            "step": "Equation of perpendicular PM: 4x + 3y = 5",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve system to obtain foot (68/25, -49/25)",
            "marks": "2 Marks"
          },
          {
            "step": "Perpendicular distance = 31/5 units",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Cross-check distance between (-1, 3) and (68/25, -49/25) equals 31/5!",
        "commonPitfall": "Sign mistakes solving simultaneous fractional equations."
      },
      {
        "id": "kvs-c11-math-2024-del-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Mean, Variance & Standard Deviation of Grouped Frequency Data",
        "questionText": "Calculate the Mean, Variance, and Standard Deviation for the following distribution:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency (fᵢ):   5   |   8   |  15   |  16   |   6",
        "modelAnswer": "Midpoints xᵢ: 5, 15, 25, 35, 45. Choose assumed mean A = 25, h = 10.\nyᵢ = (xᵢ - 25)/10: -2, -1, 0, 1, 2.\nfᵢyᵢ: -10, -8, 0, 16, 12 => Σfᵢyᵢ = 10, N = Σfᵢ = 50.\nfᵢyᵢ²: 20, 8, 0, 16, 24 => Σfᵢyᵢ² = 68.\nMean x̄ = A + (Σfᵢyᵢ / N)h = 25 + (10/50) × 10 = 25 + 2 = 27.\nVariance σ² = (h²/N²) [ N Σfᵢyᵢ² - (Σfᵢyᵢ)² ] = (100 / 2500) [ 50(68) - 10² ] = (1/25) [3400 - 100] = 3300 / 25 = 132.\nStandard Deviation σ = √132 ≈ 11.49.",
        "stepMarking": [
          {
            "step": "Clean step-deviation table (yᵢ, fᵢyᵢ, fᵢyᵢ²)",
            "marks": "2 Marks"
          },
          {
            "step": "Mean x̄ = 27",
            "marks": "1 Mark"
          },
          {
            "step": "Variance σ² = 132 & SD = 11.49",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Step-deviation method prevents huge numbers like 45² during variance calculation!",
        "commonPitfall": "Forgetting to multiply by h² = 100 in Variance formula."
      },
      {
        "id": "kvs-c11-math-2024-del-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Conic Sections: Hyperbola / Ellipse Properties Analysis",
        "questionText": "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity, and the length of the latus rectum of the ellipse: 9x² + 4y² = 36.",
        "modelAnswer": "Divide by 36: x²/4 + y²/9 = 1.\nSince 9 > 4, major axis lies along the y-axis! Here a² = 9 (a = 3), b² = 4 (b = 2).\nc = √(a² - b²) = √(9 - 4) = √5.\n• Vertices: (0, ±a) = (0, ±3)\n• Foci: (0, ±c) = (0, ±√5)\n• Major axis length = 2a = 6; Minor axis length = 2b = 4\n• Eccentricity e = c/a = √5 / 3\n• Latus rectum = 2b² / a = 2(4) / 3 = 8/3.",
        "stepMarking": [
          {
            "step": "Identify vertical ellipse x²/4 + y²/9 = 1 with a=3, b=2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Foci (0, ±√5) & Vertices (0, ±3)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Axes lengths (6, 4), e = √5/3, LR = 8/3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always check which denominator is LARGER — here y²/9 is larger, so foci lie on the y-axis!",
        "commonPitfall": "Writing foci as (±√5, 0) on the x-axis."
      },
      {
        "id": "kvs-c11-math-2024-del-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Trigonometric Functions: Proving Multi-Term Identity & Equation",
        "questionText": "Prove that: cos²x + cos²(x + π/3) + cos²(x - π/3) = 3/2.",
        "modelAnswer": "Using cos²θ = (1 + cos 2θ) / 2:\nLHS = ½[1 + cos 2x] + ½[1 + cos(2x + 2π/3)] + ½[1 + cos(2x - 2π/3)]\n= 3/2 + ½[ cos 2x + cos(2x + 2π/3) + cos(2x - 2π/3) ].\nUsing cos(A + B) + cos(A - B) = 2 cos A cos B:\ncos(2x + 2π/3) + cos(2x - 2π/3) = 2 cos 2x cos(2π/3) = 2 cos 2x (-1/2) = -cos 2x.\nTherefore LHS = 3/2 + ½[ cos 2x - cos 2x ] = 3/2 + 0 = 3/2 = RHS.",
        "stepMarking": [
          {
            "step": "Convert all three cos² terms using (1 + cos 2θ)/2",
            "marks": "2 Marks"
          },
          {
            "step": "Combine cos(2x+2π/3) + cos(2x-2π/3) = -cos 2x",
            "marks": "2 Marks"
          },
          {
            "step": "Cancel cos 2x to arrive at 3/2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Converting cos²θ to ½(1 + cos 2θ) turns squares into linear cosines cleanly!",
        "commonPitfall": "Forgetting cos(2π/3) = cos 120° = -1/2."
      },
      {
        "id": "kvs-c11-math-2024-del-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Probability (Cards & Committee)",
        "questionText": "Read the case and answer:\n4 cards are drawn simultaneously from a well-shuffled pack of 52 playing cards.\n\n(a) Write the total number of outcomes in the sample space. (1M)\n(b) Find the probability of obtaining 3 diamonds and 1 spade. (1.5M)\n(c) Find the probability that all 4 cards belong to the same suit. (1.5M)",
        "modelAnswer": "(a) Sample space n(S) = ⁵²C₄.\n(b) P(3 diamonds & 1 spade) = (¹³C₃ × ¹³C₁) / ⁵²C₄ = (286 × 13) / 270725 = 286 / 20825.\n(c) 4 suits (Spade, Heart, Diamond, Club): P(all 4 same suit) = 4 × ¹³C₄ / ⁵²C₄ = (4 × 715) / 270725 = 44 / 4165.",
        "stepMarking": [
          {
            "step": "(a) ⁵²C₄",
            "marks": "1 Mark"
          },
          {
            "step": "(b) (¹³C₃ × ¹³C₁)/⁵²C₄",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) 4 × ¹³C₄ / ⁵²C₄ = 44/4165",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Leave combinatorial factorials neatly simplified for full credit.",
        "commonPitfall": "Forgetting to multiply by 4 suits in part (c)."
      },
      {
        "id": "kvs-c11-math-2024-del-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Permutations & Combinations (Committee Formation)",
        "questionText": "Read the case and answer:\nA mathematics committee of 5 persons is to be formed from 6 boys and 4 girls in a Class 11 batch.\n\n(a) Find the number of ways of forming the committee with NO restriction. (1M)\n(b) How many committees consist of exactly 3 boys and 2 girls? (1M)\n(c) How many committees contain AT LEAST 3 girls? (2M)",
        "modelAnswer": "(a) Total people = 10 => ¹⁰C₅ = (10×9×8×7×6)/(5×4×3×2×1) = 252 ways.\n(b) ⁶C₃ × ⁴C₂ = 20 × 6 = 120 ways.\n(c) \"At least 3 girls\" => (3 girls & 2 boys) OR (4 girls & 1 boy)\n= (⁴C₃ × ⁶C₂) + (⁴C₄ × ⁶C₁) = (4 × 15) + (1 × 6) = 60 + 6 = 66 ways.",
        "stepMarking": [
          {
            "step": "(a) ¹⁰C₅ = 252",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 120 ways",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Sum both disjoint cases -> 66 ways",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "\"At least\" means break into disjoint exhaustive cases and ADD them.",
        "commonPitfall": "Using ⁴C₃ × ⁷C₂ (which double-counts 4-girl committees!)."
      },
      {
        "id": "kvs-c11-math-2024-del-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Sets & Functions (Relations Counting)",
        "questionText": "Read the case and answer:\nLet A = {1, 2, 3} and B = {a, b}.\n\n(a) Find the number of elements in the Cartesian product A × B. (1M)\n(b) How many total relations can be defined from A to B? (1M)\n(c) How many total functions can be defined from A to B, and how many from B to A? (2M)",
        "modelAnswer": "(a) n(A × B) = n(A) × n(B) = 3 × 2 = 6.\n(b) Total relations = subsets of A × B = 2⁶ = 64.\n(c) Functions from A to B = [n(B)]^n(A) = 2³ = 8; Functions from B to A = [n(A)]^n(B) = 3² = 9.",
        "stepMarking": [
          {
            "step": "(a) n(A × B) = 6",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2⁶ = 64 relations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 8 functions (A->B) and 9 functions (B->A)",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Formula: Number of functions from X to Y is n(Y)^n(X).",
        "commonPitfall": "Confusing 2³ with 3² for A -> B."
      }
    ]
  },
  {
    "id": "kvs-c11-math-2024-mum",
    "title": "KVS Mumbai Region Class 11 Mathematics Pre-Annual Paper II (2024)",
    "subject": "Mathematics",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "KVS/MUM/C11/MAT-2",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This question paper contains 38 questions divided into 5 sections: A to E (Total 80 Marks).",
      "Section A comprises 18 MCQs and 2 Assertion-Reason questions of 1 mark each.",
      "Section B comprises 5 Very Short Answer (VSA) questions of 2 marks each.",
      "Section C comprises 6 Short Answer (SA) questions of 3 marks each.",
      "Section D comprises 4 Long Answer (LA) questions of 5 marks each.",
      "Section E comprises 3 Case-Based integrated questions of 4 marks each."
    ],
    "questions": [
      {
        "id": "kvs-c11-math-2024-mum-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Octant Identification",
        "questionText": "In which octant does the point (-3, 4, -5) lie?",
        "options": [
          "A) II",
          "B) VI",
          "C) VII",
          "D) VIII"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Signs (-, +, -) correspond to Octant VI (since (-, +, +) is II, shifting z to negative adds 4 -> VI).",
        "stepMarking": [
          {
            "step": "Identify (-, +, -) as Octant VI",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Octants I–IV have +z (same as 2D quadrants I–IV); Octants V–VIII add 4 for -z!",
        "commonPitfall": "Confusing Octant VI (-,+,-) with VII (-,-,-)."
      },
      {
        "id": "kvs-c11-math-2024-mum-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Standard Trig Limit",
        "questionText": "Evaluate lim (x → 0) [ sin(5x) / tan(3x) ]:",
        "options": [
          "A) 3/5",
          "B) 5/3",
          "C) 1",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Divide numerator and denominator by x: lim [5·(sin 5x / 5x)] / [3·(tan 3x / 3x)] = (5 × 1) / (3 × 1) = 5/3.",
        "stepMarking": [
          {
            "step": "Apply sin kx / kx -> 1 and tan mx / mx -> 1 => 5/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For x → 0, sin ax / tan bx simplifies directly to a/b.",
        "commonPitfall": "Inverting ratio as 3/5."
      },
      {
        "id": "kvs-c11-math-2024-mum-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Derivative of x sin x",
        "questionText": "If f(x) = x sin x, then f'(π/2) equals:",
        "options": [
          "A) 0",
          "B) 1",
          "C) π/2",
          "D) -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By product rule: f'(x) = 1·sin x + x cos x. At x = π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1.",
        "stepMarking": [
          {
            "step": "f'(x) = sin x + x cos x -> f'(π/2) = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Differentiate FIRST using product rule, THEN substitute x = π/2.",
        "commonPitfall": "Substituting x = π/2 before differentiating."
      },
      {
        "id": "kvs-c11-math-2024-mum-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Variance Change Under Scaling",
        "questionText": "If the variance of 20 observations is 5, and each observation is multiplied by 2, then the new variance is:",
        "options": [
          "A) 5",
          "B) 10",
          "C) 20",
          "D) 25"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. If every observation is multiplied by k, standard deviation scales by |k| and variance scales by k². Thus new variance = 2² × 5 = 4 × 5 = 20.",
        "stepMarking": [
          {
            "step": "New Var = k² × Old Var = 4 × 5 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Adding/subtracting a constant does NOT change variance; multiplying by k multiplies variance by k².",
        "commonPitfall": "Multiplying variance by 2 instead of 2² = 4."
      },
      {
        "id": "kvs-c11-math-2024-mum-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Mutually Exclusive & Independent Events",
        "questionText": "If P(A) = 0.5, P(B) = 0.4, and P(A ∪ B) = 0.7, then P(A ∩ B) is:",
        "options": [
          "A) 0.1",
          "B) 0.2",
          "C) 0.3",
          "D) 0.9"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using addition theorem: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.7 = 0.2.",
        "stepMarking": [
          {
            "step": "Apply P(A∩B) = 0.5 + 0.4 - 0.7 = 0.2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "commonPitfall": "Multiplying P(A)·P(B) assuming independence without proof."
      },
      {
        "id": "kvs-c11-math-2024-mum-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Distance Between Parallel Lines",
        "questionText": "The perpendicular distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0 is:",
        "options": [
          "A) 2/5",
          "B) 12/5",
          "C) 2",
          "D) 1/5"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. d = |c₁ - c₂| / √(a² + b²) = |7 - 5| / √(3² + (-4)²) = 2 / 5.",
        "stepMarking": [
          {
            "step": "d = |7 - 5| / √(9+16) = 2/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Make sure coefficients of x and y are identical in both equations before applying |c₁ - c₂|/√(a²+b²)!",
        "commonPitfall": "Using raw c₁, c₂ when second equation is scaled (e.g. 6x - 8y + 10 = 0)."
      },
      {
        "id": "kvs-c11-math-2024-mum-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Sets: Power Set Cardinality",
        "questionText": "If A = {1, 2, {3, 4}}, then how many subsets does set A have?",
        "options": [
          "A) 4",
          "B) 8",
          "C) 16",
          "D) 6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Set A has 3 elements: 1, 2, and {3, 4}. Hence n(P(A)) = 2³ = 8.",
        "stepMarking": [
          {
            "step": "n(A) = 3 => 2³ = 8 subsets",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Treat {3, 4} inside A as ONE single element.",
        "commonPitfall": "Counting 3 and 4 separately to get n(A) = 4."
      },
      {
        "id": "kvs-c11-math-2024-mum-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Domain & Range of Real Function",
        "questionText": "The domain and range of the real function f(x) = √(9 - x²) are respectively:",
        "options": [
          "A) [-3, 3] and [0, 3]",
          "B) (-3, 3) and (0, 3)",
          "C) [-3, 3] and [-3, 3]",
          "D) [0, 9] and [0, 3]"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For real f(x), 9 - x² ≥ 0 => x ∈ [-3, 3]. Since √ is non-negative and reaches max √9 = 3 at x = 0, Range = [0, 3].",
        "stepMarking": [
          {
            "step": "9 - x² ≥ 0 -> [-3, 3]; principal root -> [0, 3]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal square root √ is always ≥ 0!",
        "commonPitfall": "Writing range as [-3, 3]."
      },
      {
        "id": "kvs-c11-math-2024-mum-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometric Functions: Radian-Degree Conversion & Quadrant Sign",
        "questionText": "The value of cos(15°) or sin(75°) is equal to:",
        "options": [
          "A) (√3 - 1)/(2√2)",
          "B) (√3 + 1)/(2√2)",
          "C) √3 / 2",
          "D) (√3 + 1)/2"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. cos 15° = sin 75° = sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2).",
        "stepMarking": [
          {
            "step": "Expand sin(45°+30°) -> (√3+1)/(2√2)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize sin 15° = cos 75° = (√3-1)/(2√2) and cos 15° = sin 75° = (√3+1)/(2√2).",
        "commonPitfall": "Swapping signs in cos(45° - 30°)."
      },
      {
        "id": "kvs-c11-math-2024-mum-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Powers of i & Modulus",
        "questionText": "The value of i⁻³⁹ is:",
        "options": [
          "A) 1",
          "B) -1",
          "C) i",
          "D) -i"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. i⁻³⁹ = 1 / i³⁹ = i⁴⁰ / i³⁹ = i (since i⁴⁰ = (i⁴)¹⁰ = 1).",
        "stepMarking": [
          {
            "step": "Multiply by i⁴⁰ = 1 -> i⁴⁰/i³⁹ = i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For negative powers of i, multiply by the next multiple of 4 (i⁴⁰ = 1).",
        "commonPitfall": "Writing -i instead of +i."
      },
      {
        "id": "kvs-c11-math-2024-mum-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Multiplicative Inverse",
        "questionText": "The modulus of the complex number z = (1 + i)/(1 - i) is:",
        "options": [
          "A) 1",
          "B) √2",
          "C) 2",
          "D) 1/√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |z| = |1 + i| / |1 - i| = √2 / √2 = 1 (in fact z = i, whose modulus is 1).",
        "stepMarking": [
          {
            "step": "|z₁/z₂| = |z₁|/|z₂| = √2/√2 = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember (1+i)/(1-i) = i and (1-i)/(1+i) = -i.",
        "commonPitfall": "Adding moduli instead of dividing."
      },
      {
        "id": "kvs-c11-math-2024-mum-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Linear Inequalities: Absolute Value / Interval",
        "questionText": "If |x - 2| ≤ 5, then x belongs to:",
        "options": [
          "A) (-3, 7)",
          "B) [-3, 7]",
          "C) (-∞, -3] ∪ [7, ∞)",
          "D) [-7, 3]"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -5 ≤ x - 2 ≤ 5 => Adding 2 throughout: -3 ≤ x ≤ 7 => x ∈ [-3, 7].",
        "stepMarking": [
          {
            "step": "-5 ≤ x - 2 ≤ 5 -> [-3, 7]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "≤ gives closed brackets [ ]; < gives open brackets ( ).",
        "commonPitfall": "Forgetting to add 2 to -5 on the left side."
      },
      {
        "id": "kvs-c11-math-2024-mum-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Circular / Word Arrangements",
        "questionText": "If ⁿC₁₂ = ⁿC₈, then the value of n is:",
        "options": [
          "A) 4",
          "B) 12",
          "C) 20",
          "D) 96"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Using ⁿC_a = ⁿC_b (with a ≠ b) => n = a + b = 12 + 8 = 20.",
        "stepMarking": [
          {
            "step": "Apply n = 12 + 8 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "ⁿC_r = ⁿC_(n-r) is one of the fastest 1M shortcuts.",
        "commonPitfall": "Taking n = 12 - 8 = 4."
      },
      {
        "id": "kvs-c11-math-2024-mum-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Number of Diagonals",
        "questionText": "How many diagonals does a convex polygon of 10 sides (decagon) have?",
        "options": [
          "A) 45",
          "B) 35",
          "C) 90",
          "D) 20"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diagonals = ¹⁰C₂ - 10 = (10 × 9)/2 - 10 = 45 - 10 = 35.",
        "stepMarking": [
          {
            "step": "¹⁰C₂ - 10 = 45 - 10 = 35",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "General formula: n(n - 3)/2.",
        "commonPitfall": "Forgetting to subtract the 10 polygon sides from ¹⁰C₂."
      },
      {
        "id": "kvs-c11-math-2024-mum-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Binomial Theorem: Number of Terms & Middle Term",
        "questionText": "The total number of distinct terms in the expansion of (x + a)¹⁰⁰ + (x - a)¹⁰⁰ after simplification is:",
        "options": [
          "A) 101",
          "B) 50",
          "C) 51",
          "D) 202"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Odd powers of \"a\" cancel out while even powers double. For even n = 100, surviving terms = n/2 + 1 = 50 + 1 = 51.",
        "stepMarking": [
          {
            "step": "n/2 + 1 = 51 terms survive",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For (x+a)ⁿ + (x-a)ⁿ with even n: n/2 + 1 terms; for difference (x+a)ⁿ - (x-a)ⁿ: n/2 terms.",
        "commonPitfall": "Marking 50 instead of 51."
      },
      {
        "id": "kvs-c11-math-2024-mum-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Sequences & Series: Geometric Mean & Infinite GP",
        "questionText": "If the 3rd term of a G.P. is 4, then the product of its first 5 terms is:",
        "options": [
          "A) 4³",
          "B) 4⁴",
          "C) 4⁵",
          "D) 2⁵"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. First 5 terms: a/r², a/r, a, ar, ar² (where middle term a = a₃ = 4). Product = (a)⁵ = 4⁵.",
        "stepMarking": [
          {
            "step": "Product of 5 symmetric GP terms = (a₃)⁵ = 4⁵",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For odd number n of GP terms, product = (middle term)ⁿ.",
        "commonPitfall": "Trying to solve for a and r separately."
      },
      {
        "id": "kvs-c11-math-2024-mum-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Slope of Perpendicular Lines",
        "questionText": "The equation of the line passing through (2, 3) and perpendicular to 4x - 3y = 10 is:",
        "options": [
          "A) 3x + 4y = 18",
          "B) 4x - 3y = -1",
          "C) 3x - 4y = -6",
          "D) 4x + 3y = 17"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Slope of given line m₁ = 4/3 => perpendicular slope m₂ = -3/4. Line: y - 3 = (-3/4)(x - 2) => 4y - 12 = -3x + 6 => 3x + 4y = 18.",
        "stepMarking": [
          {
            "step": "m₂ = -3/4 + point-slope equation -> 3x + 4y = 18",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: (2, 3) satisfies 3(2) + 4(3) = 6 + 12 = 18!",
        "commonPitfall": "Forgetting the negative sign in m₁m₂ = -1."
      },
      {
        "id": "kvs-c11-math-2024-mum-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Conic Sections: Eccentricity of Ellipse & Hyperbola",
        "questionText": "The length of the latus rectum of the ellipse x²/25 + y²/9 = 1 is:",
        "options": [
          "A) 18/5",
          "B) 50/3",
          "C) 9/5",
          "D) 6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Here a² = 25 (a = 5), b² = 9 (b = 3). Latus rectum = 2b² / a = 2(9) / 5 = 18/5.",
        "stepMarking": [
          {
            "step": "LR = 2b²/a = 18/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always ensure a > b when identifying semi-major axis a.",
        "commonPitfall": "Computing 2b/a instead of 2b²/a."
      },
      {
        "id": "kvs-c11-math-2024-mum-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Sets & Relations: Equivalence vs Function",
        "questionText": "Assertion (A): Every function is a relation, but every relation is not a function.\nReason (R): In a function from set A to B, every element of A must have a unique (one and only one) image in B.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A function is a special subset of A × B where every element of A maps to exactly one element of B.",
        "stepMarking": [
          {
            "step": "Option (A) citing unique image criterion",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A single vertical line test on a graph identifies a function.",
        "commonPitfall": "Confusing one-one with function definition."
      },
      {
        "id": "kvs-c11-math-2024-mum-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Inequality Undefined in ℂ",
        "questionText": "Assertion (A): The statement (3 + 4i) > (2 + 5i) is mathematically meaningless.\nReason (R): Complex numbers do not satisfy order relations (< or >) unless their imaginary parts are zero.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Complex numbers are 2D points on the Argand plane, so order relations (<, >) are not defined on non-real complex numbers (only moduli can be compared).",
        "stepMarking": [
          {
            "step": "Option (A) noting absence of ordering in ℂ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only real parts or moduli |z₁| > |z₂| can be compared with >.",
        "commonPitfall": "Comparing real parts alone."
      },
      {
        "id": "kvs-c11-math-2024-mum-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometric Functions: tan(π/4 + x) Proof",
        "questionText": "Prove that: cos(π/4 - x) cos(π/4 - y) - sin(π/4 - x) sin(π/4 - y) = sin(x + y).",
        "modelAnswer": "Using cos A cos B - sin A sin B = cos(A + B) with A = (π/4 - x) and B = (π/4 - y):\nLHS = cos[ (π/4 - x) + (π/4 - y) ] = cos[ π/2 - (x + y) ] = sin(x + y) = RHS.",
        "stepMarking": [
          {
            "step": "Apply cos(A + B) compound angle formula",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify cos(π/2 - (x+y)) = sin(x + y)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Look for cosA cosB - sinA sinB pattern before expanding π/4 angles!",
        "commonPitfall": "Expanding each cos(π/4 - x) separately into 4 long terms."
      },
      {
        "id": "kvs-c11-math-2024-mum-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Complex Numbers: Polar / Standard a + ib Conversion",
        "questionText": "Express [(3 + i√5)(3 - i√5)] / [(√3 + i√2) - (√3 - i√2)] in the standard form a + ib.",
        "modelAnswer": "Numerator = 3² - (i√5)² = 9 + 5 = 14.\nDenominator = √3 + i√2 - √3 + i√2 = 2i√2.\nExpression = 14 / (2i√2) = 7 / (i√2) = (7 / (i√2)) × (-i√2 / -i√2) = -7i√2 / 2 = 0 - (7√2 / 2) i.",
        "stepMarking": [
          {
            "step": "Numerator = 14 & Denominator = 2i√2",
            "marks": "1 Mark"
          },
          {
            "step": "Rationalize denominator -> 0 - (7√2/2)i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice (a+ib)(a-ib) = a² + b² cleanly.",
        "commonPitfall": "Writing i² = +1 instead of -1."
      },
      {
        "id": "kvs-c11-math-2024-mum-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Permutations & Combinations: Word MISSISSIPPI",
        "questionText": "In how many ways can the letters of the word PERMUTATIONS be arranged if the words start with P and end with S?",
        "modelAnswer": "Word PERMUTATIONS has 12 letters with P(1), S(1), T(2), and 8 other distinct letters.\nFixing P at 1st place and S at 12th place leaves 10 middle letters containing two T's.\nNumber of arrangements = 10! / 2! = 3,628,800 / 2 = 1,814,400.",
        "stepMarking": [
          {
            "step": "Fix P and S -> 10! remaining arrangements",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 2! for two T's = 1,814,400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count repeated letters (here T appears twice)!",
        "commonPitfall": "Forgetting to divide by 2! for identical T's."
      },
      {
        "id": "kvs-c11-math-2024-mum-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Limits & Derivatives: Exponential / Algebraic Limit",
        "questionText": "Evaluate: lim (x → 0) [ (1 + x)⁵ - 1 ] / x.",
        "modelAnswer": "Let y = 1 + x. As x → 0, y → 1, and x = y - 1.\nLimit becomes lim (y → 1) (y⁵ - 1⁵) / (y - 1).\nUsing standard formula lim (y → a) (yⁿ - aⁿ)/(y - a) = n aⁿ⁻¹:\n= 5 × (1)⁴ = 5.",
        "stepMarking": [
          {
            "step": "Substitute y = 1 + x -> (y⁵ - 1)/(y - 1)",
            "marks": "1 Mark"
          },
          {
            "step": "Apply standard limit n aⁿ⁻¹ = 5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep standard limit formula explicit rather than L'Hôpital's rule in Class 11 NCERT.",
        "commonPitfall": "Substituting x = 0 directly and getting 0/0."
      },
      {
        "id": "kvs-c11-math-2024-mum-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "3D Geometry: Ratio of YZ-Plane Division",
        "questionText": "Find the ratio in which the YZ-plane divides the line segment formed by joining the points (-2, 4, 7) and (3, -5, 8).",
        "modelAnswer": "Let the YZ-plane divide the segment in ratio k : 1 at P(0, y, z) (since x = 0 on YZ-plane).\nUsing section formula for x-coordinate:\n0 = (3k + 1(-2)) / (k + 1) => 3k - 2 = 0 => k = 2/3.\nRatio is 2 : 3 internally.",
        "stepMarking": [
          {
            "step": "Set x = 0 for YZ-plane",
            "marks": "1 Mark"
          },
          {
            "step": "Solve k = 2/3 -> ratio 2 : 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "YZ-plane => x = 0; XZ-plane => y = 0; XY-plane => z = 0.",
        "commonPitfall": "Setting z = 0 instead of x = 0."
      },
      {
        "id": "kvs-c11-math-2024-mum-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Sets: Venn Diagram / Survey Inclusion-Exclusion",
        "questionText": "In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, while 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee.",
        "modelAnswer": "Let U = total students, T = tea, C = coffee.\nn(U) = 600, n(T) = 150, n(C) = 225, n(T ∩ C) = 100.\nn(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 150 + 225 - 100 = 275.\nStudents taking neither = n(U) - n(T ∪ C) = 600 - 275 = 325 students.",
        "stepMarking": [
          {
            "step": "Identify n(T), n(C), n(T∩C)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute n(T ∪ C) = 275",
            "marks": "1 Mark"
          },
          {
            "step": "Subtract from 600 -> 325 students",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a quick two-circle Venn diagram to verify 50 + 100 + 125 + 325 = 600.",
        "commonPitfall": "Adding 150 + 225 without subtracting the 100 overlap."
      },
      {
        "id": "kvs-c11-math-2024-mum-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometric Functions: Double & Triple Angle Proof",
        "questionText": "If tan x = -4/3 and x lies in the second quadrant, find the exact values of sin(x/2), cos(x/2), and tan(x/2).",
        "modelAnswer": "Since x ∈ (π/2, π), x/2 ∈ (π/4, π/2) [Quadrant I -> all positive!].\ntan x = -4/3 => sec x = -√(1 + 16/9) = -5/3 (negative in Q-II) => cos x = -3/5.\nsin(x/2) = √[(1 - cos x)/2] = √[(1 + 3/5)/2] = √(4/5) = 2/√5.\ncos(x/2) = √[(1 + cos x)/2] = √[(1 - 3/5)/2] = √(1/5) = 1/√5.\ntan(x/2) = sin(x/2) / cos(x/2) = 2.",
        "stepMarking": [
          {
            "step": "Identify x/2 in Quadrant I & cos x = -3/5",
            "marks": "1 Mark"
          },
          {
            "step": "Compute sin(x/2) = 2/√5 and cos(x/2) = 1/√5",
            "marks": "1.5 Marks"
          },
          {
            "step": "tan(x/2) = 2",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always determine the quadrant of x/2 FIRST to pick + or - signs on square roots!",
        "commonPitfall": "Giving negative cos(x/2) thinking x/2 is also in Quadrant II."
      },
      {
        "id": "kvs-c11-math-2024-mum-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Linear Inequalities: System of Word Inequalities",
        "questionText": "Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 40.",
        "modelAnswer": "Let the two consecutive odd natural numbers be x and (x + 2).\nCondition 1: x > 10 (smallest odd > 10 is 11).\nCondition 2: x + (x + 2) < 40 => 2x + 2 < 40 => 2x < 38 => x < 19.\nSince x is odd with 10 < x < 19, possible values of x are 11, 13, 15, 17.\nRequired pairs: (11, 13), (13, 15), (15, 17), (17, 19).",
        "stepMarking": [
          {
            "step": "Set up inequalities x > 10 and 2x + 2 < 40",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve 10 < x < 19",
            "marks": "0.5 Mark"
          },
          {
            "step": "List all 4 pairs accurately",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice condition says \"sum is LESS than 40\" (not ≤), so x = 19 (19 + 21 = 40) is excluded.",
        "commonPitfall": "Including (19, 21) whose sum is 40."
      },
      {
        "id": "kvs-c11-math-2024-mum-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Conic Sections: Circle Passing Through Two Points & Centre on Line",
        "questionText": "Find the equation of the circle passing through the points (4, 1) and (6, 5) whose centre lies on the line 4x + y = 16.",
        "modelAnswer": "Let centre be (h, k) and equation (x - h)² + (y - k)² = r².\nSince (4, 1) and (6, 5) lie on circle:\n(4 - h)² + (1 - k)² = (6 - h)² + (5 - k)²\n16 - 8h + h² + 1 - 2k + k² = 36 - 12h + h² + 25 - 10k + k²\n4h + 8k = 44 => h + 2k = 11 ...(1)\nAlso centre lies on 4h + k = 16 ...(2)\nSolving (1) and (2): 4(11 - 2k) + k = 16 => 44 - 7k = 16 => 7k = 28 => k = 4, h = 3.\nr² = (4 - 3)² + (1 - 4)² = 1 + 9 = 10.\nEquation: (x - 3)² + (y - 4)² = 10 (or x² + y² - 6x - 8y + 15 = 0).",
        "stepMarking": [
          {
            "step": "Equate radii² -> h + 2k = 11",
            "marks": "1 Mark"
          },
          {
            "step": "Solve with 4h + k = 16 -> centre (3, 4)",
            "marks": "1 Mark"
          },
          {
            "step": "Find r² = 10 & circle equation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify both points (4, 1) and (6, 5) satisfy (x-3)²+(y-4)² = 10.",
        "commonPitfall": "Arithmetic slip expanding (6-h)² + (5-k)²."
      },
      {
        "id": "kvs-c11-math-2024-mum-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Limits & Derivatives: First Principles Derivative of cos x or tan x",
        "questionText": "Find the derivative of f(x) = cos x from first principles (ab initio method).",
        "modelAnswer": "f'(x) = lim (h → 0) [cos(x + h) - cos x] / h.\nUsing cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2):\n= lim (h → 0) [ -2 sin(x + h/2) sin(h/2) ] / h\n= lim (h → 0) -sin(x + h/2) × [ sin(h/2) / (h/2) ]\n= -sin(x + 0) × 1 = -sin x.",
        "stepMarking": [
          {
            "step": "Set up first principle limit",
            "marks": "0.5 Mark"
          },
          {
            "step": "Apply cos C - cos D formula",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate lim sin(h/2)/(h/2) = 1 -> -sin x",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide both numerator and denominator by 2 to match sin(h/2)/(h/2).",
        "commonPitfall": "Missing the minus sign in cos C - cos D."
      },
      {
        "id": "kvs-c11-math-2024-mum-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Sequences & Series: Sum of Special Series n terms (8 + 88 + 888...)",
        "questionText": "Find the sum to n terms of the sequence: 8, 88, 888, 8888, ...",
        "modelAnswer": "Sₙ = 8 + 88 + 888 + ... n terms\n= (8/9) [ 9 + 99 + 999 + ... n terms ]\n= (8/9) [ (10 - 1) + (10² - 1) + (10³ - 1) + ... + (10ⁿ - 1) ]\n= (8/9) [ (10 + 10² + ... + 10ⁿ) - n ]\n= (8/9) [ 10(10ⁿ - 1)/(10 - 1) - n ] = (80/81)(10ⁿ - 1) - (8n/9).",
        "stepMarking": [
          {
            "step": "Factor 8/9 to convert into 9 + 99 + ...",
            "marks": "1 Mark"
          },
          {
            "step": "Split as GP (10 + 10² + ... + 10ⁿ) minus n",
            "marks": "1 Mark"
          },
          {
            "step": "GP sum -> (80/81)(10ⁿ - 1) - 8n/9",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same trick works for 5+55+555... (factor 5/9) or 0.7+0.77... (factor 7/9).",
        "commonPitfall": "Forgetting to subtract n (from 1 repeated n times)."
      },
      {
        "id": "kvs-c11-math-2024-mum-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Mean, Variance & Standard Deviation of Grouped Frequency Data",
        "questionText": "Calculate the Mean, Variance, and Standard Deviation for the following distribution:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency (fᵢ):   5   |   8   |  15   |  16   |   6",
        "modelAnswer": "Midpoints xᵢ: 5, 15, 25, 35, 45. Choose assumed mean A = 25, h = 10.\nyᵢ = (xᵢ - 25)/10: -2, -1, 0, 1, 2.\nfᵢyᵢ: -10, -8, 0, 16, 12 => Σfᵢyᵢ = 10, N = Σfᵢ = 50.\nfᵢyᵢ²: 20, 8, 0, 16, 24 => Σfᵢyᵢ² = 68.\nMean x̄ = A + (Σfᵢyᵢ / N)h = 25 + (10/50) × 10 = 25 + 2 = 27.\nVariance σ² = (h²/N²) [ N Σfᵢyᵢ² - (Σfᵢyᵢ)² ] = (100 / 2500) [ 50(68) - 10² ] = (1/25) [3400 - 100] = 3300 / 25 = 132.\nStandard Deviation σ = √132 ≈ 11.49.",
        "stepMarking": [
          {
            "step": "Clean step-deviation table (yᵢ, fᵢyᵢ, fᵢyᵢ²)",
            "marks": "2 Marks"
          },
          {
            "step": "Mean x̄ = 27",
            "marks": "1 Mark"
          },
          {
            "step": "Variance σ² = 132 & SD = 11.49",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Step-deviation method prevents huge numbers like 45² during variance calculation!",
        "commonPitfall": "Forgetting to multiply by h² = 100 in Variance formula."
      },
      {
        "id": "kvs-c11-math-2024-mum-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Conic Sections: Hyperbola / Ellipse Properties Analysis",
        "questionText": "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity, and the length of the latus rectum of the ellipse: 9x² + 4y² = 36.",
        "modelAnswer": "Divide by 36: x²/4 + y²/9 = 1.\nSince 9 > 4, major axis lies along the y-axis! Here a² = 9 (a = 3), b² = 4 (b = 2).\nc = √(a² - b²) = √(9 - 4) = √5.\n• Vertices: (0, ±a) = (0, ±3)\n• Foci: (0, ±c) = (0, ±√5)\n• Major axis length = 2a = 6; Minor axis length = 2b = 4\n• Eccentricity e = c/a = √5 / 3\n• Latus rectum = 2b² / a = 2(4) / 3 = 8/3.",
        "stepMarking": [
          {
            "step": "Identify vertical ellipse x²/4 + y²/9 = 1 with a=3, b=2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Foci (0, ±√5) & Vertices (0, ±3)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Axes lengths (6, 4), e = √5/3, LR = 8/3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always check which denominator is LARGER — here y²/9 is larger, so foci lie on the y-axis!",
        "commonPitfall": "Writing foci as (±√5, 0) on the x-axis."
      },
      {
        "id": "kvs-c11-math-2024-mum-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Trigonometric Functions: Proving Multi-Term Identity & Equation",
        "questionText": "Prove that: cos²x + cos²(x + π/3) + cos²(x - π/3) = 3/2.",
        "modelAnswer": "Using cos²θ = (1 + cos 2θ) / 2:\nLHS = ½[1 + cos 2x] + ½[1 + cos(2x + 2π/3)] + ½[1 + cos(2x - 2π/3)]\n= 3/2 + ½[ cos 2x + cos(2x + 2π/3) + cos(2x - 2π/3) ].\nUsing cos(A + B) + cos(A - B) = 2 cos A cos B:\ncos(2x + 2π/3) + cos(2x - 2π/3) = 2 cos 2x cos(2π/3) = 2 cos 2x (-1/2) = -cos 2x.\nTherefore LHS = 3/2 + ½[ cos 2x - cos 2x ] = 3/2 + 0 = 3/2 = RHS.",
        "stepMarking": [
          {
            "step": "Convert all three cos² terms using (1 + cos 2θ)/2",
            "marks": "2 Marks"
          },
          {
            "step": "Combine cos(2x+2π/3) + cos(2x-2π/3) = -cos 2x",
            "marks": "2 Marks"
          },
          {
            "step": "Cancel cos 2x to arrive at 3/2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Converting cos²θ to ½(1 + cos 2θ) turns squares into linear cosines cleanly!",
        "commonPitfall": "Forgetting cos(2π/3) = cos 120° = -1/2."
      },
      {
        "id": "kvs-c11-math-2024-mum-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Straight Lines: Foot of Perpendicular & Image of a Point",
        "questionText": "Find the coordinates of the foot of the perpendicular drawn from the point (-1, 3) to the line 3x - 4y - 16 = 0. Also find the length of the perpendicular.",
        "modelAnswer": "Given point P(-1, 3) and line 3x - 4y - 16 = 0. Slope of line m₁ = 3/4 => perpendicular PM has slope m₂ = -4/3.\nEquation of PM: y - 3 = (-4/3)(x + 1) => 4x + 3y - 5 = 0 ...(1)\nSolving 3x - 4y = 16 and 4x + 3y = 5:\nMultiply first by 3, second by 4 -> 9x - 12y = 48 and 16x + 12y = 20.\nAdding: 25x = 68 => x = 68/25.\nFrom 4(68/25) + 3y = 5 => 3y = (125 - 272)/25 = -147/25 => y = -49/25.\nFoot of perpendicular = (68/25, -49/25).\nLength of perpendicular d = |3(-1) - 4(3) - 16| / √(3² + 4²) = |-3 - 12 - 16| / 5 = 31/5 units.",
        "stepMarking": [
          {
            "step": "Equation of perpendicular PM: 4x + 3y = 5",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve system to obtain foot (68/25, -49/25)",
            "marks": "2 Marks"
          },
          {
            "step": "Perpendicular distance = 31/5 units",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Cross-check distance between (-1, 3) and (68/25, -49/25) equals 31/5!",
        "commonPitfall": "Sign mistakes solving simultaneous fractional equations."
      },
      {
        "id": "kvs-c11-math-2024-mum-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Permutations & Combinations (Committee Formation)",
        "questionText": "Read the case and answer:\nA mathematics committee of 5 persons is to be formed from 6 boys and 4 girls in a Class 11 batch.\n\n(a) Find the number of ways of forming the committee with NO restriction. (1M)\n(b) How many committees consist of exactly 3 boys and 2 girls? (1M)\n(c) How many committees contain AT LEAST 3 girls? (2M)",
        "modelAnswer": "(a) Total people = 10 => ¹⁰C₅ = (10×9×8×7×6)/(5×4×3×2×1) = 252 ways.\n(b) ⁶C₃ × ⁴C₂ = 20 × 6 = 120 ways.\n(c) \"At least 3 girls\" => (3 girls & 2 boys) OR (4 girls & 1 boy)\n= (⁴C₃ × ⁶C₂) + (⁴C₄ × ⁶C₁) = (4 × 15) + (1 × 6) = 60 + 6 = 66 ways.",
        "stepMarking": [
          {
            "step": "(a) ¹⁰C₅ = 252",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 120 ways",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Sum both disjoint cases -> 66 ways",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "\"At least\" means break into disjoint exhaustive cases and ADD them.",
        "commonPitfall": "Using ⁴C₃ × ⁷C₂ (which double-counts 4-girl committees!)."
      },
      {
        "id": "kvs-c11-math-2024-mum-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Sets & Functions (Relations Counting)",
        "questionText": "Read the case and answer:\nLet A = {1, 2, 3} and B = {a, b}.\n\n(a) Find the number of elements in the Cartesian product A × B. (1M)\n(b) How many total relations can be defined from A to B? (1M)\n(c) How many total functions can be defined from A to B, and how many from B to A? (2M)",
        "modelAnswer": "(a) n(A × B) = n(A) × n(B) = 3 × 2 = 6.\n(b) Total relations = subsets of A × B = 2⁶ = 64.\n(c) Functions from A to B = [n(B)]^n(A) = 2³ = 8; Functions from B to A = [n(A)]^n(B) = 3² = 9.",
        "stepMarking": [
          {
            "step": "(a) n(A × B) = 6",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2⁶ = 64 relations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 8 functions (A->B) and 9 functions (B->A)",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Formula: Number of functions from X to Y is n(Y)^n(X).",
        "commonPitfall": "Confusing 2³ with 3² for A -> B."
      },
      {
        "id": "kvs-c11-math-2024-mum-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Probability (Cards & Committee)",
        "questionText": "Read the case and answer:\n4 cards are drawn simultaneously from a well-shuffled pack of 52 playing cards.\n\n(a) Write the total number of outcomes in the sample space. (1M)\n(b) Find the probability of obtaining 3 diamonds and 1 spade. (1.5M)\n(c) Find the probability that all 4 cards belong to the same suit. (1.5M)",
        "modelAnswer": "(a) Sample space n(S) = ⁵²C₄.\n(b) P(3 diamonds & 1 spade) = (¹³C₃ × ¹³C₁) / ⁵²C₄ = (286 × 13) / 270725 = 286 / 20825.\n(c) 4 suits (Spade, Heart, Diamond, Club): P(all 4 same suit) = 4 × ¹³C₄ / ⁵²C₄ = (4 × 715) / 270725 = 44 / 4165.",
        "stepMarking": [
          {
            "step": "(a) ⁵²C₄",
            "marks": "1 Mark"
          },
          {
            "step": "(b) (¹³C₃ × ¹³C₁)/⁵²C₄",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) 4 × ¹³C₄ / ⁵²C₄ = 44/4165",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Leave combinatorial factorials neatly simplified for full credit.",
        "commonPitfall": "Forgetting to multiply by 4 suits in part (c)."
      }
    ]
  },
  {
    "id": "nvs-c11-math-2023-pb1",
    "title": "NVS Bhopal Region Class 11 Mathematics Annual Model Test (2023)",
    "subject": "Mathematics",
    "targetClass": "Class 11",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "NVS/BPL/C11/MAT-3",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This question paper contains 38 questions divided into 5 sections: A to E (Total 80 Marks).",
      "Section A comprises 18 MCQs and 2 Assertion-Reason questions of 1 mark each.",
      "Section B comprises 5 Very Short Answer (VSA) questions of 2 marks each.",
      "Section C comprises 6 Short Answer (SA) questions of 3 marks each.",
      "Section D comprises 4 Long Answer (LA) questions of 5 marks each.",
      "Section E comprises 3 Case-Based integrated questions of 4 marks each."
    ],
    "questions": [
      {
        "id": "nvs-c11-math-2023-pb1-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Derivative of x sin x",
        "questionText": "If f(x) = x sin x, then f'(π/2) equals:",
        "options": [
          "A) 0",
          "B) 1",
          "C) π/2",
          "D) -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By product rule: f'(x) = 1·sin x + x cos x. At x = π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1.",
        "stepMarking": [
          {
            "step": "f'(x) = sin x + x cos x -> f'(π/2) = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Differentiate FIRST using product rule, THEN substitute x = π/2.",
        "commonPitfall": "Substituting x = π/2 before differentiating."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Variance Change Under Scaling",
        "questionText": "If the variance of 20 observations is 5, and each observation is multiplied by 2, then the new variance is:",
        "options": [
          "A) 5",
          "B) 10",
          "C) 20",
          "D) 25"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. If every observation is multiplied by k, standard deviation scales by |k| and variance scales by k². Thus new variance = 2² × 5 = 4 × 5 = 20.",
        "stepMarking": [
          {
            "step": "New Var = k² × Old Var = 4 × 5 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Adding/subtracting a constant does NOT change variance; multiplying by k multiplies variance by k².",
        "commonPitfall": "Multiplying variance by 2 instead of 2² = 4."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Mutually Exclusive & Independent Events",
        "questionText": "If P(A) = 0.5, P(B) = 0.4, and P(A ∪ B) = 0.7, then P(A ∩ B) is:",
        "options": [
          "A) 0.1",
          "B) 0.2",
          "C) 0.3",
          "D) 0.9"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using addition theorem: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.7 = 0.2.",
        "stepMarking": [
          {
            "step": "Apply P(A∩B) = 0.5 + 0.4 - 0.7 = 0.2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "commonPitfall": "Multiplying P(A)·P(B) assuming independence without proof."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Distance Between Parallel Lines",
        "questionText": "The perpendicular distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0 is:",
        "options": [
          "A) 2/5",
          "B) 12/5",
          "C) 2",
          "D) 1/5"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. d = |c₁ - c₂| / √(a² + b²) = |7 - 5| / √(3² + (-4)²) = 2 / 5.",
        "stepMarking": [
          {
            "step": "d = |7 - 5| / √(9+16) = 2/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Make sure coefficients of x and y are identical in both equations before applying |c₁ - c₂|/√(a²+b²)!",
        "commonPitfall": "Using raw c₁, c₂ when second equation is scaled (e.g. 6x - 8y + 10 = 0)."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Sets: Power Set Cardinality",
        "questionText": "If A = {1, 2, {3, 4}}, then how many subsets does set A have?",
        "options": [
          "A) 4",
          "B) 8",
          "C) 16",
          "D) 6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Set A has 3 elements: 1, 2, and {3, 4}. Hence n(P(A)) = 2³ = 8.",
        "stepMarking": [
          {
            "step": "n(A) = 3 => 2³ = 8 subsets",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Treat {3, 4} inside A as ONE single element.",
        "commonPitfall": "Counting 3 and 4 separately to get n(A) = 4."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Domain & Range of Real Function",
        "questionText": "The domain and range of the real function f(x) = √(9 - x²) are respectively:",
        "options": [
          "A) [-3, 3] and [0, 3]",
          "B) (-3, 3) and (0, 3)",
          "C) [-3, 3] and [-3, 3]",
          "D) [0, 9] and [0, 3]"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For real f(x), 9 - x² ≥ 0 => x ∈ [-3, 3]. Since √ is non-negative and reaches max √9 = 3 at x = 0, Range = [0, 3].",
        "stepMarking": [
          {
            "step": "9 - x² ≥ 0 -> [-3, 3]; principal root -> [0, 3]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal square root √ is always ≥ 0!",
        "commonPitfall": "Writing range as [-3, 3]."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometric Functions: Radian-Degree Conversion & Quadrant Sign",
        "questionText": "The value of cos(15°) or sin(75°) is equal to:",
        "options": [
          "A) (√3 - 1)/(2√2)",
          "B) (√3 + 1)/(2√2)",
          "C) √3 / 2",
          "D) (√3 + 1)/2"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. cos 15° = sin 75° = sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2).",
        "stepMarking": [
          {
            "step": "Expand sin(45°+30°) -> (√3+1)/(2√2)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize sin 15° = cos 75° = (√3-1)/(2√2) and cos 15° = sin 75° = (√3+1)/(2√2).",
        "commonPitfall": "Swapping signs in cos(45° - 30°)."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Powers of i & Modulus",
        "questionText": "The value of i⁻³⁹ is:",
        "options": [
          "A) 1",
          "B) -1",
          "C) i",
          "D) -i"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. i⁻³⁹ = 1 / i³⁹ = i⁴⁰ / i³⁹ = i (since i⁴⁰ = (i⁴)¹⁰ = 1).",
        "stepMarking": [
          {
            "step": "Multiply by i⁴⁰ = 1 -> i⁴⁰/i³⁹ = i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For negative powers of i, multiply by the next multiple of 4 (i⁴⁰ = 1).",
        "commonPitfall": "Writing -i instead of +i."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Multiplicative Inverse",
        "questionText": "The modulus of the complex number z = (1 + i)/(1 - i) is:",
        "options": [
          "A) 1",
          "B) √2",
          "C) 2",
          "D) 1/√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |z| = |1 + i| / |1 - i| = √2 / √2 = 1 (in fact z = i, whose modulus is 1).",
        "stepMarking": [
          {
            "step": "|z₁/z₂| = |z₁|/|z₂| = √2/√2 = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember (1+i)/(1-i) = i and (1-i)/(1+i) = -i.",
        "commonPitfall": "Adding moduli instead of dividing."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Linear Inequalities: Absolute Value / Interval",
        "questionText": "If |x - 2| ≤ 5, then x belongs to:",
        "options": [
          "A) (-3, 7)",
          "B) [-3, 7]",
          "C) (-∞, -3] ∪ [7, ∞)",
          "D) [-7, 3]"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -5 ≤ x - 2 ≤ 5 => Adding 2 throughout: -3 ≤ x ≤ 7 => x ∈ [-3, 7].",
        "stepMarking": [
          {
            "step": "-5 ≤ x - 2 ≤ 5 -> [-3, 7]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "≤ gives closed brackets [ ]; < gives open brackets ( ).",
        "commonPitfall": "Forgetting to add 2 to -5 on the left side."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Circular / Word Arrangements",
        "questionText": "If ⁿC₁₂ = ⁿC₈, then the value of n is:",
        "options": [
          "A) 4",
          "B) 12",
          "C) 20",
          "D) 96"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Using ⁿC_a = ⁿC_b (with a ≠ b) => n = a + b = 12 + 8 = 20.",
        "stepMarking": [
          {
            "step": "Apply n = 12 + 8 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "ⁿC_r = ⁿC_(n-r) is one of the fastest 1M shortcuts.",
        "commonPitfall": "Taking n = 12 - 8 = 4."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Number of Diagonals",
        "questionText": "How many diagonals does a convex polygon of 10 sides (decagon) have?",
        "options": [
          "A) 45",
          "B) 35",
          "C) 90",
          "D) 20"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diagonals = ¹⁰C₂ - 10 = (10 × 9)/2 - 10 = 45 - 10 = 35.",
        "stepMarking": [
          {
            "step": "¹⁰C₂ - 10 = 45 - 10 = 35",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "General formula: n(n - 3)/2.",
        "commonPitfall": "Forgetting to subtract the 10 polygon sides from ¹⁰C₂."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Binomial Theorem: Number of Terms & Middle Term",
        "questionText": "The total number of distinct terms in the expansion of (x + a)¹⁰⁰ + (x - a)¹⁰⁰ after simplification is:",
        "options": [
          "A) 101",
          "B) 50",
          "C) 51",
          "D) 202"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Odd powers of \"a\" cancel out while even powers double. For even n = 100, surviving terms = n/2 + 1 = 50 + 1 = 51.",
        "stepMarking": [
          {
            "step": "n/2 + 1 = 51 terms survive",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For (x+a)ⁿ + (x-a)ⁿ with even n: n/2 + 1 terms; for difference (x+a)ⁿ - (x-a)ⁿ: n/2 terms.",
        "commonPitfall": "Marking 50 instead of 51."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Sequences & Series: Geometric Mean & Infinite GP",
        "questionText": "If the 3rd term of a G.P. is 4, then the product of its first 5 terms is:",
        "options": [
          "A) 4³",
          "B) 4⁴",
          "C) 4⁵",
          "D) 2⁵"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. First 5 terms: a/r², a/r, a, ar, ar² (where middle term a = a₃ = 4). Product = (a)⁵ = 4⁵.",
        "stepMarking": [
          {
            "step": "Product of 5 symmetric GP terms = (a₃)⁵ = 4⁵",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For odd number n of GP terms, product = (middle term)ⁿ.",
        "commonPitfall": "Trying to solve for a and r separately."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Slope of Perpendicular Lines",
        "questionText": "The equation of the line passing through (2, 3) and perpendicular to 4x - 3y = 10 is:",
        "options": [
          "A) 3x + 4y = 18",
          "B) 4x - 3y = -1",
          "C) 3x - 4y = -6",
          "D) 4x + 3y = 17"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Slope of given line m₁ = 4/3 => perpendicular slope m₂ = -3/4. Line: y - 3 = (-3/4)(x - 2) => 4y - 12 = -3x + 6 => 3x + 4y = 18.",
        "stepMarking": [
          {
            "step": "m₂ = -3/4 + point-slope equation -> 3x + 4y = 18",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: (2, 3) satisfies 3(2) + 4(3) = 6 + 12 = 18!",
        "commonPitfall": "Forgetting the negative sign in m₁m₂ = -1."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Conic Sections: Eccentricity of Ellipse & Hyperbola",
        "questionText": "The length of the latus rectum of the ellipse x²/25 + y²/9 = 1 is:",
        "options": [
          "A) 18/5",
          "B) 50/3",
          "C) 9/5",
          "D) 6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Here a² = 25 (a = 5), b² = 9 (b = 3). Latus rectum = 2b² / a = 2(9) / 5 = 18/5.",
        "stepMarking": [
          {
            "step": "LR = 2b²/a = 18/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always ensure a > b when identifying semi-major axis a.",
        "commonPitfall": "Computing 2b/a instead of 2b²/a."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Octant Identification",
        "questionText": "In which octant does the point (-3, 4, -5) lie?",
        "options": [
          "A) II",
          "B) VI",
          "C) VII",
          "D) VIII"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Signs (-, +, -) correspond to Octant VI (since (-, +, +) is II, shifting z to negative adds 4 -> VI).",
        "stepMarking": [
          {
            "step": "Identify (-, +, -) as Octant VI",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Octants I–IV have +z (same as 2D quadrants I–IV); Octants V–VIII add 4 for -z!",
        "commonPitfall": "Confusing Octant VI (-,+,-) with VII (-,-,-)."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Standard Trig Limit",
        "questionText": "Evaluate lim (x → 0) [ sin(5x) / tan(3x) ]:",
        "options": [
          "A) 3/5",
          "B) 5/3",
          "C) 1",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Divide numerator and denominator by x: lim [5·(sin 5x / 5x)] / [3·(tan 3x / 3x)] = (5 × 1) / (3 × 1) = 5/3.",
        "stepMarking": [
          {
            "step": "Apply sin kx / kx -> 1 and tan mx / mx -> 1 => 5/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For x → 0, sin ax / tan bx simplifies directly to a/b.",
        "commonPitfall": "Inverting ratio as 3/5."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Inequality Undefined in ℂ",
        "questionText": "Assertion (A): The statement (3 + 4i) > (2 + 5i) is mathematically meaningless.\nReason (R): Complex numbers do not satisfy order relations (< or >) unless their imaginary parts are zero.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Complex numbers are 2D points on the Argand plane, so order relations (<, >) are not defined on non-real complex numbers (only moduli can be compared).",
        "stepMarking": [
          {
            "step": "Option (A) noting absence of ordering in ℂ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only real parts or moduli |z₁| > |z₂| can be compared with >.",
        "commonPitfall": "Comparing real parts alone."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Sequences: AM-GM Inequality",
        "questionText": "Assertion (A): For any two distinct positive real numbers a and b, their Arithmetic Mean (AM) is strictly greater than their Geometric Mean (GM).\nReason (R): (a + b)/2 - √(ab) = (√a - √b)² / 2 > 0 for all a ≠ b > 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Since (√a - √b)² > 0 for distinct positive reals, AM > GM strictly.",
        "stepMarking": [
          {
            "step": "Option (A) proving AM - GM = (√a - √b)²/2 > 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equality AM = GM holds iff a = b.",
        "commonPitfall": "Applying AM ≥ GM to negative numbers."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Complex Numbers: Polar / Standard a + ib Conversion",
        "questionText": "Express [(3 + i√5)(3 - i√5)] / [(√3 + i√2) - (√3 - i√2)] in the standard form a + ib.",
        "modelAnswer": "Numerator = 3² - (i√5)² = 9 + 5 = 14.\nDenominator = √3 + i√2 - √3 + i√2 = 2i√2.\nExpression = 14 / (2i√2) = 7 / (i√2) = (7 / (i√2)) × (-i√2 / -i√2) = -7i√2 / 2 = 0 - (7√2 / 2) i.",
        "stepMarking": [
          {
            "step": "Numerator = 14 & Denominator = 2i√2",
            "marks": "1 Mark"
          },
          {
            "step": "Rationalize denominator -> 0 - (7√2/2)i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice (a+ib)(a-ib) = a² + b² cleanly.",
        "commonPitfall": "Writing i² = +1 instead of -1."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Permutations & Combinations: Word MISSISSIPPI",
        "questionText": "In how many ways can the letters of the word PERMUTATIONS be arranged if the words start with P and end with S?",
        "modelAnswer": "Word PERMUTATIONS has 12 letters with P(1), S(1), T(2), and 8 other distinct letters.\nFixing P at 1st place and S at 12th place leaves 10 middle letters containing two T's.\nNumber of arrangements = 10! / 2! = 3,628,800 / 2 = 1,814,400.",
        "stepMarking": [
          {
            "step": "Fix P and S -> 10! remaining arrangements",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 2! for two T's = 1,814,400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count repeated letters (here T appears twice)!",
        "commonPitfall": "Forgetting to divide by 2! for identical T's."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Limits & Derivatives: Exponential / Algebraic Limit",
        "questionText": "Evaluate: lim (x → 0) [ (1 + x)⁵ - 1 ] / x.",
        "modelAnswer": "Let y = 1 + x. As x → 0, y → 1, and x = y - 1.\nLimit becomes lim (y → 1) (y⁵ - 1⁵) / (y - 1).\nUsing standard formula lim (y → a) (yⁿ - aⁿ)/(y - a) = n aⁿ⁻¹:\n= 5 × (1)⁴ = 5.",
        "stepMarking": [
          {
            "step": "Substitute y = 1 + x -> (y⁵ - 1)/(y - 1)",
            "marks": "1 Mark"
          },
          {
            "step": "Apply standard limit n aⁿ⁻¹ = 5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep standard limit formula explicit rather than L'Hôpital's rule in Class 11 NCERT.",
        "commonPitfall": "Substituting x = 0 directly and getting 0/0."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "3D Geometry: Ratio of YZ-Plane Division",
        "questionText": "Find the ratio in which the YZ-plane divides the line segment formed by joining the points (-2, 4, 7) and (3, -5, 8).",
        "modelAnswer": "Let the YZ-plane divide the segment in ratio k : 1 at P(0, y, z) (since x = 0 on YZ-plane).\nUsing section formula for x-coordinate:\n0 = (3k + 1(-2)) / (k + 1) => 3k - 2 = 0 => k = 2/3.\nRatio is 2 : 3 internally.",
        "stepMarking": [
          {
            "step": "Set x = 0 for YZ-plane",
            "marks": "1 Mark"
          },
          {
            "step": "Solve k = 2/3 -> ratio 2 : 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "YZ-plane => x = 0; XZ-plane => y = 0; XY-plane => z = 0.",
        "commonPitfall": "Setting z = 0 instead of x = 0."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Binomial Theorem: Divisibility Proof",
        "questionText": "Using Binomial Theorem, show that 9^(n+1) - 8n - 9 is divisible by 64 whenever n is a positive integer.",
        "modelAnswer": "Write 9^(n+1) = (1 + 8)^(n+1) = ⁿ⁺¹C₀ + ⁿ⁺¹C₁·8 + ⁿ⁺¹C₂·8² + ⁿ⁺¹C₃·8³ + ... + ⁿ⁺¹C_(n+1)·8^(n+1)\n= 1 + 8(n + 1) + 64[ ⁿ⁺¹C₂ + ⁿ⁺¹C₃·8 + ... ]\n= 8n + 9 + 64k (where k is an integer).\nHence 9^(n+1) - 8n - 9 = 64k, which is divisible by 64.",
        "stepMarking": [
          {
            "step": "Expand (1 + 8)^(n+1) cleanly",
            "marks": "1 Mark"
          },
          {
            "step": "Factor 64 from remaining terms after 8n + 9 cancels",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Rewrite base 9 as (1 + 8) so 8² = 64 factors out from the 3rd term onward!",
        "commonPitfall": "Expanding 9ⁿ instead of 9^(n+1)."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometric Functions: Double & Triple Angle Proof",
        "questionText": "If tan x = -4/3 and x lies in the second quadrant, find the exact values of sin(x/2), cos(x/2), and tan(x/2).",
        "modelAnswer": "Since x ∈ (π/2, π), x/2 ∈ (π/4, π/2) [Quadrant I -> all positive!].\ntan x = -4/3 => sec x = -√(1 + 16/9) = -5/3 (negative in Q-II) => cos x = -3/5.\nsin(x/2) = √[(1 - cos x)/2] = √[(1 + 3/5)/2] = √(4/5) = 2/√5.\ncos(x/2) = √[(1 + cos x)/2] = √[(1 - 3/5)/2] = √(1/5) = 1/√5.\ntan(x/2) = sin(x/2) / cos(x/2) = 2.",
        "stepMarking": [
          {
            "step": "Identify x/2 in Quadrant I & cos x = -3/5",
            "marks": "1 Mark"
          },
          {
            "step": "Compute sin(x/2) = 2/√5 and cos(x/2) = 1/√5",
            "marks": "1.5 Marks"
          },
          {
            "step": "tan(x/2) = 2",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always determine the quadrant of x/2 FIRST to pick + or - signs on square roots!",
        "commonPitfall": "Giving negative cos(x/2) thinking x/2 is also in Quadrant II."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Linear Inequalities: System of Word Inequalities",
        "questionText": "Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 40.",
        "modelAnswer": "Let the two consecutive odd natural numbers be x and (x + 2).\nCondition 1: x > 10 (smallest odd > 10 is 11).\nCondition 2: x + (x + 2) < 40 => 2x + 2 < 40 => 2x < 38 => x < 19.\nSince x is odd with 10 < x < 19, possible values of x are 11, 13, 15, 17.\nRequired pairs: (11, 13), (13, 15), (15, 17), (17, 19).",
        "stepMarking": [
          {
            "step": "Set up inequalities x > 10 and 2x + 2 < 40",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve 10 < x < 19",
            "marks": "0.5 Mark"
          },
          {
            "step": "List all 4 pairs accurately",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice condition says \"sum is LESS than 40\" (not ≤), so x = 19 (19 + 21 = 40) is excluded.",
        "commonPitfall": "Including (19, 21) whose sum is 40."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Conic Sections: Circle Passing Through Two Points & Centre on Line",
        "questionText": "Find the equation of the circle passing through the points (4, 1) and (6, 5) whose centre lies on the line 4x + y = 16.",
        "modelAnswer": "Let centre be (h, k) and equation (x - h)² + (y - k)² = r².\nSince (4, 1) and (6, 5) lie on circle:\n(4 - h)² + (1 - k)² = (6 - h)² + (5 - k)²\n16 - 8h + h² + 1 - 2k + k² = 36 - 12h + h² + 25 - 10k + k²\n4h + 8k = 44 => h + 2k = 11 ...(1)\nAlso centre lies on 4h + k = 16 ...(2)\nSolving (1) and (2): 4(11 - 2k) + k = 16 => 44 - 7k = 16 => 7k = 28 => k = 4, h = 3.\nr² = (4 - 3)² + (1 - 4)² = 1 + 9 = 10.\nEquation: (x - 3)² + (y - 4)² = 10 (or x² + y² - 6x - 8y + 15 = 0).",
        "stepMarking": [
          {
            "step": "Equate radii² -> h + 2k = 11",
            "marks": "1 Mark"
          },
          {
            "step": "Solve with 4h + k = 16 -> centre (3, 4)",
            "marks": "1 Mark"
          },
          {
            "step": "Find r² = 10 & circle equation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify both points (4, 1) and (6, 5) satisfy (x-3)²+(y-4)² = 10.",
        "commonPitfall": "Arithmetic slip expanding (6-h)² + (5-k)²."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Limits & Derivatives: First Principles Derivative of cos x or tan x",
        "questionText": "Find the derivative of f(x) = cos x from first principles (ab initio method).",
        "modelAnswer": "f'(x) = lim (h → 0) [cos(x + h) - cos x] / h.\nUsing cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2):\n= lim (h → 0) [ -2 sin(x + h/2) sin(h/2) ] / h\n= lim (h → 0) -sin(x + h/2) × [ sin(h/2) / (h/2) ]\n= -sin(x + 0) × 1 = -sin x.",
        "stepMarking": [
          {
            "step": "Set up first principle limit",
            "marks": "0.5 Mark"
          },
          {
            "step": "Apply cos C - cos D formula",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate lim sin(h/2)/(h/2) = 1 -> -sin x",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide both numerator and denominator by 2 to match sin(h/2)/(h/2).",
        "commonPitfall": "Missing the minus sign in cos C - cos D."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Sequences & Series: Sum of Special Series n terms (8 + 88 + 888...)",
        "questionText": "Find the sum to n terms of the sequence: 8, 88, 888, 8888, ...",
        "modelAnswer": "Sₙ = 8 + 88 + 888 + ... n terms\n= (8/9) [ 9 + 99 + 999 + ... n terms ]\n= (8/9) [ (10 - 1) + (10² - 1) + (10³ - 1) + ... + (10ⁿ - 1) ]\n= (8/9) [ (10 + 10² + ... + 10ⁿ) - n ]\n= (8/9) [ 10(10ⁿ - 1)/(10 - 1) - n ] = (80/81)(10ⁿ - 1) - (8n/9).",
        "stepMarking": [
          {
            "step": "Factor 8/9 to convert into 9 + 99 + ...",
            "marks": "1 Mark"
          },
          {
            "step": "Split as GP (10 + 10² + ... + 10ⁿ) minus n",
            "marks": "1 Mark"
          },
          {
            "step": "GP sum -> (80/81)(10ⁿ - 1) - 8n/9",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same trick works for 5+55+555... (factor 5/9) or 0.7+0.77... (factor 7/9).",
        "commonPitfall": "Forgetting to subtract n (from 1 repeated n times)."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Sets: Venn Diagram / Survey Inclusion-Exclusion",
        "questionText": "In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, while 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee.",
        "modelAnswer": "Let U = total students, T = tea, C = coffee.\nn(U) = 600, n(T) = 150, n(C) = 225, n(T ∩ C) = 100.\nn(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 150 + 225 - 100 = 275.\nStudents taking neither = n(U) - n(T ∪ C) = 600 - 275 = 325 students.",
        "stepMarking": [
          {
            "step": "Identify n(T), n(C), n(T∩C)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute n(T ∪ C) = 275",
            "marks": "1 Mark"
          },
          {
            "step": "Subtract from 600 -> 325 students",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a quick two-circle Venn diagram to verify 50 + 100 + 125 + 325 = 600.",
        "commonPitfall": "Adding 150 + 225 without subtracting the 100 overlap."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Conic Sections: Hyperbola / Ellipse Properties Analysis",
        "questionText": "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity, and the length of the latus rectum of the ellipse: 9x² + 4y² = 36.",
        "modelAnswer": "Divide by 36: x²/4 + y²/9 = 1.\nSince 9 > 4, major axis lies along the y-axis! Here a² = 9 (a = 3), b² = 4 (b = 2).\nc = √(a² - b²) = √(9 - 4) = √5.\n• Vertices: (0, ±a) = (0, ±3)\n• Foci: (0, ±c) = (0, ±√5)\n• Major axis length = 2a = 6; Minor axis length = 2b = 4\n• Eccentricity e = c/a = √5 / 3\n• Latus rectum = 2b² / a = 2(4) / 3 = 8/3.",
        "stepMarking": [
          {
            "step": "Identify vertical ellipse x²/4 + y²/9 = 1 with a=3, b=2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Foci (0, ±√5) & Vertices (0, ±3)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Axes lengths (6, 4), e = √5/3, LR = 8/3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always check which denominator is LARGER — here y²/9 is larger, so foci lie on the y-axis!",
        "commonPitfall": "Writing foci as (±√5, 0) on the x-axis."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Trigonometric Functions: Proving Multi-Term Identity & Equation",
        "questionText": "Prove that: cos²x + cos²(x + π/3) + cos²(x - π/3) = 3/2.",
        "modelAnswer": "Using cos²θ = (1 + cos 2θ) / 2:\nLHS = ½[1 + cos 2x] + ½[1 + cos(2x + 2π/3)] + ½[1 + cos(2x - 2π/3)]\n= 3/2 + ½[ cos 2x + cos(2x + 2π/3) + cos(2x - 2π/3) ].\nUsing cos(A + B) + cos(A - B) = 2 cos A cos B:\ncos(2x + 2π/3) + cos(2x - 2π/3) = 2 cos 2x cos(2π/3) = 2 cos 2x (-1/2) = -cos 2x.\nTherefore LHS = 3/2 + ½[ cos 2x - cos 2x ] = 3/2 + 0 = 3/2 = RHS.",
        "stepMarking": [
          {
            "step": "Convert all three cos² terms using (1 + cos 2θ)/2",
            "marks": "2 Marks"
          },
          {
            "step": "Combine cos(2x+2π/3) + cos(2x-2π/3) = -cos 2x",
            "marks": "2 Marks"
          },
          {
            "step": "Cancel cos 2x to arrive at 3/2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Converting cos²θ to ½(1 + cos 2θ) turns squares into linear cosines cleanly!",
        "commonPitfall": "Forgetting cos(2π/3) = cos 120° = -1/2."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Straight Lines: Foot of Perpendicular & Image of a Point",
        "questionText": "Find the coordinates of the foot of the perpendicular drawn from the point (-1, 3) to the line 3x - 4y - 16 = 0. Also find the length of the perpendicular.",
        "modelAnswer": "Given point P(-1, 3) and line 3x - 4y - 16 = 0. Slope of line m₁ = 3/4 => perpendicular PM has slope m₂ = -4/3.\nEquation of PM: y - 3 = (-4/3)(x + 1) => 4x + 3y - 5 = 0 ...(1)\nSolving 3x - 4y = 16 and 4x + 3y = 5:\nMultiply first by 3, second by 4 -> 9x - 12y = 48 and 16x + 12y = 20.\nAdding: 25x = 68 => x = 68/25.\nFrom 4(68/25) + 3y = 5 => 3y = (125 - 272)/25 = -147/25 => y = -49/25.\nFoot of perpendicular = (68/25, -49/25).\nLength of perpendicular d = |3(-1) - 4(3) - 16| / √(3² + 4²) = |-3 - 12 - 16| / 5 = 31/5 units.",
        "stepMarking": [
          {
            "step": "Equation of perpendicular PM: 4x + 3y = 5",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve system to obtain foot (68/25, -49/25)",
            "marks": "2 Marks"
          },
          {
            "step": "Perpendicular distance = 31/5 units",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Cross-check distance between (-1, 3) and (68/25, -49/25) equals 31/5!",
        "commonPitfall": "Sign mistakes solving simultaneous fractional equations."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Mean, Variance & Standard Deviation of Grouped Frequency Data",
        "questionText": "Calculate the Mean, Variance, and Standard Deviation for the following distribution:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency (fᵢ):   5   |   8   |  15   |  16   |   6",
        "modelAnswer": "Midpoints xᵢ: 5, 15, 25, 35, 45. Choose assumed mean A = 25, h = 10.\nyᵢ = (xᵢ - 25)/10: -2, -1, 0, 1, 2.\nfᵢyᵢ: -10, -8, 0, 16, 12 => Σfᵢyᵢ = 10, N = Σfᵢ = 50.\nfᵢyᵢ²: 20, 8, 0, 16, 24 => Σfᵢyᵢ² = 68.\nMean x̄ = A + (Σfᵢyᵢ / N)h = 25 + (10/50) × 10 = 25 + 2 = 27.\nVariance σ² = (h²/N²) [ N Σfᵢyᵢ² - (Σfᵢyᵢ)² ] = (100 / 2500) [ 50(68) - 10² ] = (1/25) [3400 - 100] = 3300 / 25 = 132.\nStandard Deviation σ = √132 ≈ 11.49.",
        "stepMarking": [
          {
            "step": "Clean step-deviation table (yᵢ, fᵢyᵢ, fᵢyᵢ²)",
            "marks": "2 Marks"
          },
          {
            "step": "Mean x̄ = 27",
            "marks": "1 Mark"
          },
          {
            "step": "Variance σ² = 132 & SD = 11.49",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Step-deviation method prevents huge numbers like 45² during variance calculation!",
        "commonPitfall": "Forgetting to multiply by h² = 100 in Variance formula."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Sets & Functions (Relations Counting)",
        "questionText": "Read the case and answer:\nLet A = {1, 2, 3} and B = {a, b}.\n\n(a) Find the number of elements in the Cartesian product A × B. (1M)\n(b) How many total relations can be defined from A to B? (1M)\n(c) How many total functions can be defined from A to B, and how many from B to A? (2M)",
        "modelAnswer": "(a) n(A × B) = n(A) × n(B) = 3 × 2 = 6.\n(b) Total relations = subsets of A × B = 2⁶ = 64.\n(c) Functions from A to B = [n(B)]^n(A) = 2³ = 8; Functions from B to A = [n(A)]^n(B) = 3² = 9.",
        "stepMarking": [
          {
            "step": "(a) n(A × B) = 6",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2⁶ = 64 relations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 8 functions (A->B) and 9 functions (B->A)",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Formula: Number of functions from X to Y is n(Y)^n(X).",
        "commonPitfall": "Confusing 2³ with 3² for A -> B."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Probability (Cards & Committee)",
        "questionText": "Read the case and answer:\n4 cards are drawn simultaneously from a well-shuffled pack of 52 playing cards.\n\n(a) Write the total number of outcomes in the sample space. (1M)\n(b) Find the probability of obtaining 3 diamonds and 1 spade. (1.5M)\n(c) Find the probability that all 4 cards belong to the same suit. (1.5M)",
        "modelAnswer": "(a) Sample space n(S) = ⁵²C₄.\n(b) P(3 diamonds & 1 spade) = (¹³C₃ × ¹³C₁) / ⁵²C₄ = (286 × 13) / 270725 = 286 / 20825.\n(c) 4 suits (Spade, Heart, Diamond, Club): P(all 4 same suit) = 4 × ¹³C₄ / ⁵²C₄ = (4 × 715) / 270725 = 44 / 4165.",
        "stepMarking": [
          {
            "step": "(a) ⁵²C₄",
            "marks": "1 Mark"
          },
          {
            "step": "(b) (¹³C₃ × ¹³C₁)/⁵²C₄",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) 4 × ¹³C₄ / ⁵²C₄ = 44/4165",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Leave combinatorial factorials neatly simplified for full credit.",
        "commonPitfall": "Forgetting to multiply by 4 suits in part (c)."
      },
      {
        "id": "nvs-c11-math-2023-pb1-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Permutations & Combinations (Committee Formation)",
        "questionText": "Read the case and answer:\nA mathematics committee of 5 persons is to be formed from 6 boys and 4 girls in a Class 11 batch.\n\n(a) Find the number of ways of forming the committee with NO restriction. (1M)\n(b) How many committees consist of exactly 3 boys and 2 girls? (1M)\n(c) How many committees contain AT LEAST 3 girls? (2M)",
        "modelAnswer": "(a) Total people = 10 => ¹⁰C₅ = (10×9×8×7×6)/(5×4×3×2×1) = 252 ways.\n(b) ⁶C₃ × ⁴C₂ = 20 × 6 = 120 ways.\n(c) \"At least 3 girls\" => (3 girls & 2 boys) OR (4 girls & 1 boy)\n= (⁴C₃ × ⁶C₂) + (⁴C₄ × ⁶C₁) = (4 × 15) + (1 × 6) = 60 + 6 = 66 ways.",
        "stepMarking": [
          {
            "step": "(a) ¹⁰C₅ = 252",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 120 ways",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Sum both disjoint cases -> 66 ways",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "\"At least\" means break into disjoint exhaustive cases and ADD them.",
        "commonPitfall": "Using ⁴C₃ × ⁷C₂ (which double-counts 4-girl committees!)."
      }
    ]
  },
  {
    "id": "kvs-c11-math-2022-chd",
    "title": "KVS Chandigarh Region Class 11 Mathematics Annual Set (2022)",
    "subject": "Mathematics",
    "targetClass": "Class 11",
    "year": 2022,
    "paperType": "BOARD_EXAM",
    "paperCode": "KVS/CHD/C11/MAT-4",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This question paper contains 38 questions divided into 5 sections: A to E (Total 80 Marks).",
      "Section A comprises 18 MCQs and 2 Assertion-Reason questions of 1 mark each.",
      "Section B comprises 5 Very Short Answer (VSA) questions of 2 marks each.",
      "Section C comprises 6 Short Answer (SA) questions of 3 marks each.",
      "Section D comprises 4 Long Answer (LA) questions of 5 marks each.",
      "Section E comprises 3 Case-Based integrated questions of 4 marks each."
    ],
    "questions": [
      {
        "id": "kvs-c11-math-2022-chd-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Mutually Exclusive & Independent Events",
        "questionText": "If P(A) = 0.5, P(B) = 0.4, and P(A ∪ B) = 0.7, then P(A ∩ B) is:",
        "options": [
          "A) 0.1",
          "B) 0.2",
          "C) 0.3",
          "D) 0.9"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using addition theorem: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.7 = 0.2.",
        "stepMarking": [
          {
            "step": "Apply P(A∩B) = 0.5 + 0.4 - 0.7 = 0.2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "commonPitfall": "Multiplying P(A)·P(B) assuming independence without proof."
      },
      {
        "id": "kvs-c11-math-2022-chd-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Distance Between Parallel Lines",
        "questionText": "The perpendicular distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0 is:",
        "options": [
          "A) 2/5",
          "B) 12/5",
          "C) 2",
          "D) 1/5"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. d = |c₁ - c₂| / √(a² + b²) = |7 - 5| / √(3² + (-4)²) = 2 / 5.",
        "stepMarking": [
          {
            "step": "d = |7 - 5| / √(9+16) = 2/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Make sure coefficients of x and y are identical in both equations before applying |c₁ - c₂|/√(a²+b²)!",
        "commonPitfall": "Using raw c₁, c₂ when second equation is scaled (e.g. 6x - 8y + 10 = 0)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Sets: Power Set Cardinality",
        "questionText": "If A = {1, 2, {3, 4}}, then how many subsets does set A have?",
        "options": [
          "A) 4",
          "B) 8",
          "C) 16",
          "D) 6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Set A has 3 elements: 1, 2, and {3, 4}. Hence n(P(A)) = 2³ = 8.",
        "stepMarking": [
          {
            "step": "n(A) = 3 => 2³ = 8 subsets",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Treat {3, 4} inside A as ONE single element.",
        "commonPitfall": "Counting 3 and 4 separately to get n(A) = 4."
      },
      {
        "id": "kvs-c11-math-2022-chd-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Domain & Range of Real Function",
        "questionText": "The domain and range of the real function f(x) = √(9 - x²) are respectively:",
        "options": [
          "A) [-3, 3] and [0, 3]",
          "B) (-3, 3) and (0, 3)",
          "C) [-3, 3] and [-3, 3]",
          "D) [0, 9] and [0, 3]"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For real f(x), 9 - x² ≥ 0 => x ∈ [-3, 3]. Since √ is non-negative and reaches max √9 = 3 at x = 0, Range = [0, 3].",
        "stepMarking": [
          {
            "step": "9 - x² ≥ 0 -> [-3, 3]; principal root -> [0, 3]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal square root √ is always ≥ 0!",
        "commonPitfall": "Writing range as [-3, 3]."
      },
      {
        "id": "kvs-c11-math-2022-chd-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometric Functions: Radian-Degree Conversion & Quadrant Sign",
        "questionText": "The value of cos(15°) or sin(75°) is equal to:",
        "options": [
          "A) (√3 - 1)/(2√2)",
          "B) (√3 + 1)/(2√2)",
          "C) √3 / 2",
          "D) (√3 + 1)/2"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. cos 15° = sin 75° = sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2).",
        "stepMarking": [
          {
            "step": "Expand sin(45°+30°) -> (√3+1)/(2√2)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize sin 15° = cos 75° = (√3-1)/(2√2) and cos 15° = sin 75° = (√3+1)/(2√2).",
        "commonPitfall": "Swapping signs in cos(45° - 30°)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Powers of i & Modulus",
        "questionText": "The value of i⁻³⁹ is:",
        "options": [
          "A) 1",
          "B) -1",
          "C) i",
          "D) -i"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. i⁻³⁹ = 1 / i³⁹ = i⁴⁰ / i³⁹ = i (since i⁴⁰ = (i⁴)¹⁰ = 1).",
        "stepMarking": [
          {
            "step": "Multiply by i⁴⁰ = 1 -> i⁴⁰/i³⁹ = i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For negative powers of i, multiply by the next multiple of 4 (i⁴⁰ = 1).",
        "commonPitfall": "Writing -i instead of +i."
      },
      {
        "id": "kvs-c11-math-2022-chd-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Multiplicative Inverse",
        "questionText": "The modulus of the complex number z = (1 + i)/(1 - i) is:",
        "options": [
          "A) 1",
          "B) √2",
          "C) 2",
          "D) 1/√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |z| = |1 + i| / |1 - i| = √2 / √2 = 1 (in fact z = i, whose modulus is 1).",
        "stepMarking": [
          {
            "step": "|z₁/z₂| = |z₁|/|z₂| = √2/√2 = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember (1+i)/(1-i) = i and (1-i)/(1+i) = -i.",
        "commonPitfall": "Adding moduli instead of dividing."
      },
      {
        "id": "kvs-c11-math-2022-chd-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Linear Inequalities: Absolute Value / Interval",
        "questionText": "If |x - 2| ≤ 5, then x belongs to:",
        "options": [
          "A) (-3, 7)",
          "B) [-3, 7]",
          "C) (-∞, -3] ∪ [7, ∞)",
          "D) [-7, 3]"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -5 ≤ x - 2 ≤ 5 => Adding 2 throughout: -3 ≤ x ≤ 7 => x ∈ [-3, 7].",
        "stepMarking": [
          {
            "step": "-5 ≤ x - 2 ≤ 5 -> [-3, 7]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "≤ gives closed brackets [ ]; < gives open brackets ( ).",
        "commonPitfall": "Forgetting to add 2 to -5 on the left side."
      },
      {
        "id": "kvs-c11-math-2022-chd-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Circular / Word Arrangements",
        "questionText": "If ⁿC₁₂ = ⁿC₈, then the value of n is:",
        "options": [
          "A) 4",
          "B) 12",
          "C) 20",
          "D) 96"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Using ⁿC_a = ⁿC_b (with a ≠ b) => n = a + b = 12 + 8 = 20.",
        "stepMarking": [
          {
            "step": "Apply n = 12 + 8 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "ⁿC_r = ⁿC_(n-r) is one of the fastest 1M shortcuts.",
        "commonPitfall": "Taking n = 12 - 8 = 4."
      },
      {
        "id": "kvs-c11-math-2022-chd-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Number of Diagonals",
        "questionText": "How many diagonals does a convex polygon of 10 sides (decagon) have?",
        "options": [
          "A) 45",
          "B) 35",
          "C) 90",
          "D) 20"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diagonals = ¹⁰C₂ - 10 = (10 × 9)/2 - 10 = 45 - 10 = 35.",
        "stepMarking": [
          {
            "step": "¹⁰C₂ - 10 = 45 - 10 = 35",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "General formula: n(n - 3)/2.",
        "commonPitfall": "Forgetting to subtract the 10 polygon sides from ¹⁰C₂."
      },
      {
        "id": "kvs-c11-math-2022-chd-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Binomial Theorem: Number of Terms & Middle Term",
        "questionText": "The total number of distinct terms in the expansion of (x + a)¹⁰⁰ + (x - a)¹⁰⁰ after simplification is:",
        "options": [
          "A) 101",
          "B) 50",
          "C) 51",
          "D) 202"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Odd powers of \"a\" cancel out while even powers double. For even n = 100, surviving terms = n/2 + 1 = 50 + 1 = 51.",
        "stepMarking": [
          {
            "step": "n/2 + 1 = 51 terms survive",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For (x+a)ⁿ + (x-a)ⁿ with even n: n/2 + 1 terms; for difference (x+a)ⁿ - (x-a)ⁿ: n/2 terms.",
        "commonPitfall": "Marking 50 instead of 51."
      },
      {
        "id": "kvs-c11-math-2022-chd-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Sequences & Series: Geometric Mean & Infinite GP",
        "questionText": "If the 3rd term of a G.P. is 4, then the product of its first 5 terms is:",
        "options": [
          "A) 4³",
          "B) 4⁴",
          "C) 4⁵",
          "D) 2⁵"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. First 5 terms: a/r², a/r, a, ar, ar² (where middle term a = a₃ = 4). Product = (a)⁵ = 4⁵.",
        "stepMarking": [
          {
            "step": "Product of 5 symmetric GP terms = (a₃)⁵ = 4⁵",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For odd number n of GP terms, product = (middle term)ⁿ.",
        "commonPitfall": "Trying to solve for a and r separately."
      },
      {
        "id": "kvs-c11-math-2022-chd-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Slope of Perpendicular Lines",
        "questionText": "The equation of the line passing through (2, 3) and perpendicular to 4x - 3y = 10 is:",
        "options": [
          "A) 3x + 4y = 18",
          "B) 4x - 3y = -1",
          "C) 3x - 4y = -6",
          "D) 4x + 3y = 17"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Slope of given line m₁ = 4/3 => perpendicular slope m₂ = -3/4. Line: y - 3 = (-3/4)(x - 2) => 4y - 12 = -3x + 6 => 3x + 4y = 18.",
        "stepMarking": [
          {
            "step": "m₂ = -3/4 + point-slope equation -> 3x + 4y = 18",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: (2, 3) satisfies 3(2) + 4(3) = 6 + 12 = 18!",
        "commonPitfall": "Forgetting the negative sign in m₁m₂ = -1."
      },
      {
        "id": "kvs-c11-math-2022-chd-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Conic Sections: Eccentricity of Ellipse & Hyperbola",
        "questionText": "The length of the latus rectum of the ellipse x²/25 + y²/9 = 1 is:",
        "options": [
          "A) 18/5",
          "B) 50/3",
          "C) 9/5",
          "D) 6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Here a² = 25 (a = 5), b² = 9 (b = 3). Latus rectum = 2b² / a = 2(9) / 5 = 18/5.",
        "stepMarking": [
          {
            "step": "LR = 2b²/a = 18/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always ensure a > b when identifying semi-major axis a.",
        "commonPitfall": "Computing 2b/a instead of 2b²/a."
      },
      {
        "id": "kvs-c11-math-2022-chd-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Octant Identification",
        "questionText": "In which octant does the point (-3, 4, -5) lie?",
        "options": [
          "A) II",
          "B) VI",
          "C) VII",
          "D) VIII"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Signs (-, +, -) correspond to Octant VI (since (-, +, +) is II, shifting z to negative adds 4 -> VI).",
        "stepMarking": [
          {
            "step": "Identify (-, +, -) as Octant VI",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Octants I–IV have +z (same as 2D quadrants I–IV); Octants V–VIII add 4 for -z!",
        "commonPitfall": "Confusing Octant VI (-,+,-) with VII (-,-,-)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Standard Trig Limit",
        "questionText": "Evaluate lim (x → 0) [ sin(5x) / tan(3x) ]:",
        "options": [
          "A) 3/5",
          "B) 5/3",
          "C) 1",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Divide numerator and denominator by x: lim [5·(sin 5x / 5x)] / [3·(tan 3x / 3x)] = (5 × 1) / (3 × 1) = 5/3.",
        "stepMarking": [
          {
            "step": "Apply sin kx / kx -> 1 and tan mx / mx -> 1 => 5/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For x → 0, sin ax / tan bx simplifies directly to a/b.",
        "commonPitfall": "Inverting ratio as 3/5."
      },
      {
        "id": "kvs-c11-math-2022-chd-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Derivative of x sin x",
        "questionText": "If f(x) = x sin x, then f'(π/2) equals:",
        "options": [
          "A) 0",
          "B) 1",
          "C) π/2",
          "D) -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By product rule: f'(x) = 1·sin x + x cos x. At x = π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1.",
        "stepMarking": [
          {
            "step": "f'(x) = sin x + x cos x -> f'(π/2) = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Differentiate FIRST using product rule, THEN substitute x = π/2.",
        "commonPitfall": "Substituting x = π/2 before differentiating."
      },
      {
        "id": "kvs-c11-math-2022-chd-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Variance Change Under Scaling",
        "questionText": "If the variance of 20 observations is 5, and each observation is multiplied by 2, then the new variance is:",
        "options": [
          "A) 5",
          "B) 10",
          "C) 20",
          "D) 25"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. If every observation is multiplied by k, standard deviation scales by |k| and variance scales by k². Thus new variance = 2² × 5 = 4 × 5 = 20.",
        "stepMarking": [
          {
            "step": "New Var = k² × Old Var = 4 × 5 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Adding/subtracting a constant does NOT change variance; multiplying by k multiplies variance by k².",
        "commonPitfall": "Multiplying variance by 2 instead of 2² = 4."
      },
      {
        "id": "kvs-c11-math-2022-chd-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Sequences: AM-GM Inequality",
        "questionText": "Assertion (A): For any two distinct positive real numbers a and b, their Arithmetic Mean (AM) is strictly greater than their Geometric Mean (GM).\nReason (R): (a + b)/2 - √(ab) = (√a - √b)² / 2 > 0 for all a ≠ b > 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Since (√a - √b)² > 0 for distinct positive reals, AM > GM strictly.",
        "stepMarking": [
          {
            "step": "Option (A) proving AM - GM = (√a - √b)²/2 > 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Equality AM = GM holds iff a = b.",
        "commonPitfall": "Applying AM ≥ GM to negative numbers."
      },
      {
        "id": "kvs-c11-math-2022-chd-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Sets & Relations: Equivalence vs Function",
        "questionText": "Assertion (A): Every function is a relation, but every relation is not a function.\nReason (R): In a function from set A to B, every element of A must have a unique (one and only one) image in B.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A function is a special subset of A × B where every element of A maps to exactly one element of B.",
        "stepMarking": [
          {
            "step": "Option (A) citing unique image criterion",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A single vertical line test on a graph identifies a function.",
        "commonPitfall": "Confusing one-one with function definition."
      },
      {
        "id": "kvs-c11-math-2022-chd-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Permutations & Combinations: Word MISSISSIPPI",
        "questionText": "In how many ways can the letters of the word PERMUTATIONS be arranged if the words start with P and end with S?",
        "modelAnswer": "Word PERMUTATIONS has 12 letters with P(1), S(1), T(2), and 8 other distinct letters.\nFixing P at 1st place and S at 12th place leaves 10 middle letters containing two T's.\nNumber of arrangements = 10! / 2! = 3,628,800 / 2 = 1,814,400.",
        "stepMarking": [
          {
            "step": "Fix P and S -> 10! remaining arrangements",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 2! for two T's = 1,814,400",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count repeated letters (here T appears twice)!",
        "commonPitfall": "Forgetting to divide by 2! for identical T's."
      },
      {
        "id": "kvs-c11-math-2022-chd-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Limits & Derivatives: Exponential / Algebraic Limit",
        "questionText": "Evaluate: lim (x → 0) [ (1 + x)⁵ - 1 ] / x.",
        "modelAnswer": "Let y = 1 + x. As x → 0, y → 1, and x = y - 1.\nLimit becomes lim (y → 1) (y⁵ - 1⁵) / (y - 1).\nUsing standard formula lim (y → a) (yⁿ - aⁿ)/(y - a) = n aⁿ⁻¹:\n= 5 × (1)⁴ = 5.",
        "stepMarking": [
          {
            "step": "Substitute y = 1 + x -> (y⁵ - 1)/(y - 1)",
            "marks": "1 Mark"
          },
          {
            "step": "Apply standard limit n aⁿ⁻¹ = 5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep standard limit formula explicit rather than L'Hôpital's rule in Class 11 NCERT.",
        "commonPitfall": "Substituting x = 0 directly and getting 0/0."
      },
      {
        "id": "kvs-c11-math-2022-chd-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "3D Geometry: Ratio of YZ-Plane Division",
        "questionText": "Find the ratio in which the YZ-plane divides the line segment formed by joining the points (-2, 4, 7) and (3, -5, 8).",
        "modelAnswer": "Let the YZ-plane divide the segment in ratio k : 1 at P(0, y, z) (since x = 0 on YZ-plane).\nUsing section formula for x-coordinate:\n0 = (3k + 1(-2)) / (k + 1) => 3k - 2 = 0 => k = 2/3.\nRatio is 2 : 3 internally.",
        "stepMarking": [
          {
            "step": "Set x = 0 for YZ-plane",
            "marks": "1 Mark"
          },
          {
            "step": "Solve k = 2/3 -> ratio 2 : 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "YZ-plane => x = 0; XZ-plane => y = 0; XY-plane => z = 0.",
        "commonPitfall": "Setting z = 0 instead of x = 0."
      },
      {
        "id": "kvs-c11-math-2022-chd-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Binomial Theorem: Divisibility Proof",
        "questionText": "Using Binomial Theorem, show that 9^(n+1) - 8n - 9 is divisible by 64 whenever n is a positive integer.",
        "modelAnswer": "Write 9^(n+1) = (1 + 8)^(n+1) = ⁿ⁺¹C₀ + ⁿ⁺¹C₁·8 + ⁿ⁺¹C₂·8² + ⁿ⁺¹C₃·8³ + ... + ⁿ⁺¹C_(n+1)·8^(n+1)\n= 1 + 8(n + 1) + 64[ ⁿ⁺¹C₂ + ⁿ⁺¹C₃·8 + ... ]\n= 8n + 9 + 64k (where k is an integer).\nHence 9^(n+1) - 8n - 9 = 64k, which is divisible by 64.",
        "stepMarking": [
          {
            "step": "Expand (1 + 8)^(n+1) cleanly",
            "marks": "1 Mark"
          },
          {
            "step": "Factor 64 from remaining terms after 8n + 9 cancels",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Rewrite base 9 as (1 + 8) so 8² = 64 factors out from the 3rd term onward!",
        "commonPitfall": "Expanding 9ⁿ instead of 9^(n+1)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometric Functions: tan(π/4 + x) Proof",
        "questionText": "Prove that: cos(π/4 - x) cos(π/4 - y) - sin(π/4 - x) sin(π/4 - y) = sin(x + y).",
        "modelAnswer": "Using cos A cos B - sin A sin B = cos(A + B) with A = (π/4 - x) and B = (π/4 - y):\nLHS = cos[ (π/4 - x) + (π/4 - y) ] = cos[ π/2 - (x + y) ] = sin(x + y) = RHS.",
        "stepMarking": [
          {
            "step": "Apply cos(A + B) compound angle formula",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify cos(π/2 - (x+y)) = sin(x + y)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Look for cosA cosB - sinA sinB pattern before expanding π/4 angles!",
        "commonPitfall": "Expanding each cos(π/4 - x) separately into 4 long terms."
      },
      {
        "id": "kvs-c11-math-2022-chd-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Linear Inequalities: System of Word Inequalities",
        "questionText": "Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 40.",
        "modelAnswer": "Let the two consecutive odd natural numbers be x and (x + 2).\nCondition 1: x > 10 (smallest odd > 10 is 11).\nCondition 2: x + (x + 2) < 40 => 2x + 2 < 40 => 2x < 38 => x < 19.\nSince x is odd with 10 < x < 19, possible values of x are 11, 13, 15, 17.\nRequired pairs: (11, 13), (13, 15), (15, 17), (17, 19).",
        "stepMarking": [
          {
            "step": "Set up inequalities x > 10 and 2x + 2 < 40",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve 10 < x < 19",
            "marks": "0.5 Mark"
          },
          {
            "step": "List all 4 pairs accurately",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice condition says \"sum is LESS than 40\" (not ≤), so x = 19 (19 + 21 = 40) is excluded.",
        "commonPitfall": "Including (19, 21) whose sum is 40."
      },
      {
        "id": "kvs-c11-math-2022-chd-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Conic Sections: Circle Passing Through Two Points & Centre on Line",
        "questionText": "Find the equation of the circle passing through the points (4, 1) and (6, 5) whose centre lies on the line 4x + y = 16.",
        "modelAnswer": "Let centre be (h, k) and equation (x - h)² + (y - k)² = r².\nSince (4, 1) and (6, 5) lie on circle:\n(4 - h)² + (1 - k)² = (6 - h)² + (5 - k)²\n16 - 8h + h² + 1 - 2k + k² = 36 - 12h + h² + 25 - 10k + k²\n4h + 8k = 44 => h + 2k = 11 ...(1)\nAlso centre lies on 4h + k = 16 ...(2)\nSolving (1) and (2): 4(11 - 2k) + k = 16 => 44 - 7k = 16 => 7k = 28 => k = 4, h = 3.\nr² = (4 - 3)² + (1 - 4)² = 1 + 9 = 10.\nEquation: (x - 3)² + (y - 4)² = 10 (or x² + y² - 6x - 8y + 15 = 0).",
        "stepMarking": [
          {
            "step": "Equate radii² -> h + 2k = 11",
            "marks": "1 Mark"
          },
          {
            "step": "Solve with 4h + k = 16 -> centre (3, 4)",
            "marks": "1 Mark"
          },
          {
            "step": "Find r² = 10 & circle equation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify both points (4, 1) and (6, 5) satisfy (x-3)²+(y-4)² = 10.",
        "commonPitfall": "Arithmetic slip expanding (6-h)² + (5-k)²."
      },
      {
        "id": "kvs-c11-math-2022-chd-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Limits & Derivatives: First Principles Derivative of cos x or tan x",
        "questionText": "Find the derivative of f(x) = cos x from first principles (ab initio method).",
        "modelAnswer": "f'(x) = lim (h → 0) [cos(x + h) - cos x] / h.\nUsing cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2):\n= lim (h → 0) [ -2 sin(x + h/2) sin(h/2) ] / h\n= lim (h → 0) -sin(x + h/2) × [ sin(h/2) / (h/2) ]\n= -sin(x + 0) × 1 = -sin x.",
        "stepMarking": [
          {
            "step": "Set up first principle limit",
            "marks": "0.5 Mark"
          },
          {
            "step": "Apply cos C - cos D formula",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate lim sin(h/2)/(h/2) = 1 -> -sin x",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide both numerator and denominator by 2 to match sin(h/2)/(h/2).",
        "commonPitfall": "Missing the minus sign in cos C - cos D."
      },
      {
        "id": "kvs-c11-math-2022-chd-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Sequences & Series: Sum of Special Series n terms (8 + 88 + 888...)",
        "questionText": "Find the sum to n terms of the sequence: 8, 88, 888, 8888, ...",
        "modelAnswer": "Sₙ = 8 + 88 + 888 + ... n terms\n= (8/9) [ 9 + 99 + 999 + ... n terms ]\n= (8/9) [ (10 - 1) + (10² - 1) + (10³ - 1) + ... + (10ⁿ - 1) ]\n= (8/9) [ (10 + 10² + ... + 10ⁿ) - n ]\n= (8/9) [ 10(10ⁿ - 1)/(10 - 1) - n ] = (80/81)(10ⁿ - 1) - (8n/9).",
        "stepMarking": [
          {
            "step": "Factor 8/9 to convert into 9 + 99 + ...",
            "marks": "1 Mark"
          },
          {
            "step": "Split as GP (10 + 10² + ... + 10ⁿ) minus n",
            "marks": "1 Mark"
          },
          {
            "step": "GP sum -> (80/81)(10ⁿ - 1) - 8n/9",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same trick works for 5+55+555... (factor 5/9) or 0.7+0.77... (factor 7/9).",
        "commonPitfall": "Forgetting to subtract n (from 1 repeated n times)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Sets: Venn Diagram / Survey Inclusion-Exclusion",
        "questionText": "In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, while 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee.",
        "modelAnswer": "Let U = total students, T = tea, C = coffee.\nn(U) = 600, n(T) = 150, n(C) = 225, n(T ∩ C) = 100.\nn(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 150 + 225 - 100 = 275.\nStudents taking neither = n(U) - n(T ∪ C) = 600 - 275 = 325 students.",
        "stepMarking": [
          {
            "step": "Identify n(T), n(C), n(T∩C)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute n(T ∪ C) = 275",
            "marks": "1 Mark"
          },
          {
            "step": "Subtract from 600 -> 325 students",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a quick two-circle Venn diagram to verify 50 + 100 + 125 + 325 = 600.",
        "commonPitfall": "Adding 150 + 225 without subtracting the 100 overlap."
      },
      {
        "id": "kvs-c11-math-2022-chd-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometric Functions: Double & Triple Angle Proof",
        "questionText": "If tan x = -4/3 and x lies in the second quadrant, find the exact values of sin(x/2), cos(x/2), and tan(x/2).",
        "modelAnswer": "Since x ∈ (π/2, π), x/2 ∈ (π/4, π/2) [Quadrant I -> all positive!].\ntan x = -4/3 => sec x = -√(1 + 16/9) = -5/3 (negative in Q-II) => cos x = -3/5.\nsin(x/2) = √[(1 - cos x)/2] = √[(1 + 3/5)/2] = √(4/5) = 2/√5.\ncos(x/2) = √[(1 + cos x)/2] = √[(1 - 3/5)/2] = √(1/5) = 1/√5.\ntan(x/2) = sin(x/2) / cos(x/2) = 2.",
        "stepMarking": [
          {
            "step": "Identify x/2 in Quadrant I & cos x = -3/5",
            "marks": "1 Mark"
          },
          {
            "step": "Compute sin(x/2) = 2/√5 and cos(x/2) = 1/√5",
            "marks": "1.5 Marks"
          },
          {
            "step": "tan(x/2) = 2",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always determine the quadrant of x/2 FIRST to pick + or - signs on square roots!",
        "commonPitfall": "Giving negative cos(x/2) thinking x/2 is also in Quadrant II."
      },
      {
        "id": "kvs-c11-math-2022-chd-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Trigonometric Functions: Proving Multi-Term Identity & Equation",
        "questionText": "Prove that: cos²x + cos²(x + π/3) + cos²(x - π/3) = 3/2.",
        "modelAnswer": "Using cos²θ = (1 + cos 2θ) / 2:\nLHS = ½[1 + cos 2x] + ½[1 + cos(2x + 2π/3)] + ½[1 + cos(2x - 2π/3)]\n= 3/2 + ½[ cos 2x + cos(2x + 2π/3) + cos(2x - 2π/3) ].\nUsing cos(A + B) + cos(A - B) = 2 cos A cos B:\ncos(2x + 2π/3) + cos(2x - 2π/3) = 2 cos 2x cos(2π/3) = 2 cos 2x (-1/2) = -cos 2x.\nTherefore LHS = 3/2 + ½[ cos 2x - cos 2x ] = 3/2 + 0 = 3/2 = RHS.",
        "stepMarking": [
          {
            "step": "Convert all three cos² terms using (1 + cos 2θ)/2",
            "marks": "2 Marks"
          },
          {
            "step": "Combine cos(2x+2π/3) + cos(2x-2π/3) = -cos 2x",
            "marks": "2 Marks"
          },
          {
            "step": "Cancel cos 2x to arrive at 3/2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Converting cos²θ to ½(1 + cos 2θ) turns squares into linear cosines cleanly!",
        "commonPitfall": "Forgetting cos(2π/3) = cos 120° = -1/2."
      },
      {
        "id": "kvs-c11-math-2022-chd-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Straight Lines: Foot of Perpendicular & Image of a Point",
        "questionText": "Find the coordinates of the foot of the perpendicular drawn from the point (-1, 3) to the line 3x - 4y - 16 = 0. Also find the length of the perpendicular.",
        "modelAnswer": "Given point P(-1, 3) and line 3x - 4y - 16 = 0. Slope of line m₁ = 3/4 => perpendicular PM has slope m₂ = -4/3.\nEquation of PM: y - 3 = (-4/3)(x + 1) => 4x + 3y - 5 = 0 ...(1)\nSolving 3x - 4y = 16 and 4x + 3y = 5:\nMultiply first by 3, second by 4 -> 9x - 12y = 48 and 16x + 12y = 20.\nAdding: 25x = 68 => x = 68/25.\nFrom 4(68/25) + 3y = 5 => 3y = (125 - 272)/25 = -147/25 => y = -49/25.\nFoot of perpendicular = (68/25, -49/25).\nLength of perpendicular d = |3(-1) - 4(3) - 16| / √(3² + 4²) = |-3 - 12 - 16| / 5 = 31/5 units.",
        "stepMarking": [
          {
            "step": "Equation of perpendicular PM: 4x + 3y = 5",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve system to obtain foot (68/25, -49/25)",
            "marks": "2 Marks"
          },
          {
            "step": "Perpendicular distance = 31/5 units",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Cross-check distance between (-1, 3) and (68/25, -49/25) equals 31/5!",
        "commonPitfall": "Sign mistakes solving simultaneous fractional equations."
      },
      {
        "id": "kvs-c11-math-2022-chd-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Mean, Variance & Standard Deviation of Grouped Frequency Data",
        "questionText": "Calculate the Mean, Variance, and Standard Deviation for the following distribution:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency (fᵢ):   5   |   8   |  15   |  16   |   6",
        "modelAnswer": "Midpoints xᵢ: 5, 15, 25, 35, 45. Choose assumed mean A = 25, h = 10.\nyᵢ = (xᵢ - 25)/10: -2, -1, 0, 1, 2.\nfᵢyᵢ: -10, -8, 0, 16, 12 => Σfᵢyᵢ = 10, N = Σfᵢ = 50.\nfᵢyᵢ²: 20, 8, 0, 16, 24 => Σfᵢyᵢ² = 68.\nMean x̄ = A + (Σfᵢyᵢ / N)h = 25 + (10/50) × 10 = 25 + 2 = 27.\nVariance σ² = (h²/N²) [ N Σfᵢyᵢ² - (Σfᵢyᵢ)² ] = (100 / 2500) [ 50(68) - 10² ] = (1/25) [3400 - 100] = 3300 / 25 = 132.\nStandard Deviation σ = √132 ≈ 11.49.",
        "stepMarking": [
          {
            "step": "Clean step-deviation table (yᵢ, fᵢyᵢ, fᵢyᵢ²)",
            "marks": "2 Marks"
          },
          {
            "step": "Mean x̄ = 27",
            "marks": "1 Mark"
          },
          {
            "step": "Variance σ² = 132 & SD = 11.49",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Step-deviation method prevents huge numbers like 45² during variance calculation!",
        "commonPitfall": "Forgetting to multiply by h² = 100 in Variance formula."
      },
      {
        "id": "kvs-c11-math-2022-chd-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Conic Sections: Hyperbola / Ellipse Properties Analysis",
        "questionText": "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity, and the length of the latus rectum of the ellipse: 9x² + 4y² = 36.",
        "modelAnswer": "Divide by 36: x²/4 + y²/9 = 1.\nSince 9 > 4, major axis lies along the y-axis! Here a² = 9 (a = 3), b² = 4 (b = 2).\nc = √(a² - b²) = √(9 - 4) = √5.\n• Vertices: (0, ±a) = (0, ±3)\n• Foci: (0, ±c) = (0, ±√5)\n• Major axis length = 2a = 6; Minor axis length = 2b = 4\n• Eccentricity e = c/a = √5 / 3\n• Latus rectum = 2b² / a = 2(4) / 3 = 8/3.",
        "stepMarking": [
          {
            "step": "Identify vertical ellipse x²/4 + y²/9 = 1 with a=3, b=2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Foci (0, ±√5) & Vertices (0, ±3)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Axes lengths (6, 4), e = √5/3, LR = 8/3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always check which denominator is LARGER — here y²/9 is larger, so foci lie on the y-axis!",
        "commonPitfall": "Writing foci as (±√5, 0) on the x-axis."
      },
      {
        "id": "kvs-c11-math-2022-chd-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Probability (Cards & Committee)",
        "questionText": "Read the case and answer:\n4 cards are drawn simultaneously from a well-shuffled pack of 52 playing cards.\n\n(a) Write the total number of outcomes in the sample space. (1M)\n(b) Find the probability of obtaining 3 diamonds and 1 spade. (1.5M)\n(c) Find the probability that all 4 cards belong to the same suit. (1.5M)",
        "modelAnswer": "(a) Sample space n(S) = ⁵²C₄.\n(b) P(3 diamonds & 1 spade) = (¹³C₃ × ¹³C₁) / ⁵²C₄ = (286 × 13) / 270725 = 286 / 20825.\n(c) 4 suits (Spade, Heart, Diamond, Club): P(all 4 same suit) = 4 × ¹³C₄ / ⁵²C₄ = (4 × 715) / 270725 = 44 / 4165.",
        "stepMarking": [
          {
            "step": "(a) ⁵²C₄",
            "marks": "1 Mark"
          },
          {
            "step": "(b) (¹³C₃ × ¹³C₁)/⁵²C₄",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) 4 × ¹³C₄ / ⁵²C₄ = 44/4165",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Leave combinatorial factorials neatly simplified for full credit.",
        "commonPitfall": "Forgetting to multiply by 4 suits in part (c)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Permutations & Combinations (Committee Formation)",
        "questionText": "Read the case and answer:\nA mathematics committee of 5 persons is to be formed from 6 boys and 4 girls in a Class 11 batch.\n\n(a) Find the number of ways of forming the committee with NO restriction. (1M)\n(b) How many committees consist of exactly 3 boys and 2 girls? (1M)\n(c) How many committees contain AT LEAST 3 girls? (2M)",
        "modelAnswer": "(a) Total people = 10 => ¹⁰C₅ = (10×9×8×7×6)/(5×4×3×2×1) = 252 ways.\n(b) ⁶C₃ × ⁴C₂ = 20 × 6 = 120 ways.\n(c) \"At least 3 girls\" => (3 girls & 2 boys) OR (4 girls & 1 boy)\n= (⁴C₃ × ⁶C₂) + (⁴C₄ × ⁶C₁) = (4 × 15) + (1 × 6) = 60 + 6 = 66 ways.",
        "stepMarking": [
          {
            "step": "(a) ¹⁰C₅ = 252",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 120 ways",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Sum both disjoint cases -> 66 ways",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "\"At least\" means break into disjoint exhaustive cases and ADD them.",
        "commonPitfall": "Using ⁴C₃ × ⁷C₂ (which double-counts 4-girl committees!)."
      },
      {
        "id": "kvs-c11-math-2022-chd-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Sets & Functions (Relations Counting)",
        "questionText": "Read the case and answer:\nLet A = {1, 2, 3} and B = {a, b}.\n\n(a) Find the number of elements in the Cartesian product A × B. (1M)\n(b) How many total relations can be defined from A to B? (1M)\n(c) How many total functions can be defined from A to B, and how many from B to A? (2M)",
        "modelAnswer": "(a) n(A × B) = n(A) × n(B) = 3 × 2 = 6.\n(b) Total relations = subsets of A × B = 2⁶ = 64.\n(c) Functions from A to B = [n(B)]^n(A) = 2³ = 8; Functions from B to A = [n(A)]^n(B) = 3² = 9.",
        "stepMarking": [
          {
            "step": "(a) n(A × B) = 6",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2⁶ = 64 relations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 8 functions (A->B) and 9 functions (B->A)",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Formula: Number of functions from X to Y is n(Y)^n(X).",
        "commonPitfall": "Confusing 2³ with 3² for A -> B."
      }
    ]
  },
  {
    "id": "nvs-c11-math-2024-lko",
    "title": "NVS Lucknow Region Class 11 Mathematics Pre-Annual Exam (2024)",
    "subject": "Mathematics",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "NVS/LKO/C11/MAT-5",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This question paper contains 38 questions divided into 5 sections: A to E (Total 80 Marks).",
      "Section A comprises 18 MCQs and 2 Assertion-Reason questions of 1 mark each.",
      "Section B comprises 5 Very Short Answer (VSA) questions of 2 marks each.",
      "Section C comprises 6 Short Answer (SA) questions of 3 marks each.",
      "Section D comprises 4 Long Answer (LA) questions of 5 marks each.",
      "Section E comprises 3 Case-Based integrated questions of 4 marks each."
    ],
    "questions": [
      {
        "id": "nvs-c11-math-2024-lko-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Sets: Power Set Cardinality",
        "questionText": "If A = {1, 2, {3, 4}}, then how many subsets does set A have?",
        "options": [
          "A) 4",
          "B) 8",
          "C) 16",
          "D) 6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Set A has 3 elements: 1, 2, and {3, 4}. Hence n(P(A)) = 2³ = 8.",
        "stepMarking": [
          {
            "step": "n(A) = 3 => 2³ = 8 subsets",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Treat {3, 4} inside A as ONE single element.",
        "commonPitfall": "Counting 3 and 4 separately to get n(A) = 4."
      },
      {
        "id": "nvs-c11-math-2024-lko-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Domain & Range of Real Function",
        "questionText": "The domain and range of the real function f(x) = √(9 - x²) are respectively:",
        "options": [
          "A) [-3, 3] and [0, 3]",
          "B) (-3, 3) and (0, 3)",
          "C) [-3, 3] and [-3, 3]",
          "D) [0, 9] and [0, 3]"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For real f(x), 9 - x² ≥ 0 => x ∈ [-3, 3]. Since √ is non-negative and reaches max √9 = 3 at x = 0, Range = [0, 3].",
        "stepMarking": [
          {
            "step": "9 - x² ≥ 0 -> [-3, 3]; principal root -> [0, 3]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal square root √ is always ≥ 0!",
        "commonPitfall": "Writing range as [-3, 3]."
      },
      {
        "id": "nvs-c11-math-2024-lko-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Trigonometric Functions: Radian-Degree Conversion & Quadrant Sign",
        "questionText": "The value of cos(15°) or sin(75°) is equal to:",
        "options": [
          "A) (√3 - 1)/(2√2)",
          "B) (√3 + 1)/(2√2)",
          "C) √3 / 2",
          "D) (√3 + 1)/2"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. cos 15° = sin 75° = sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2).",
        "stepMarking": [
          {
            "step": "Expand sin(45°+30°) -> (√3+1)/(2√2)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize sin 15° = cos 75° = (√3-1)/(2√2) and cos 15° = sin 75° = (√3+1)/(2√2).",
        "commonPitfall": "Swapping signs in cos(45° - 30°)."
      },
      {
        "id": "nvs-c11-math-2024-lko-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Powers of i & Modulus",
        "questionText": "The value of i⁻³⁹ is:",
        "options": [
          "A) 1",
          "B) -1",
          "C) i",
          "D) -i"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. i⁻³⁹ = 1 / i³⁹ = i⁴⁰ / i³⁹ = i (since i⁴⁰ = (i⁴)¹⁰ = 1).",
        "stepMarking": [
          {
            "step": "Multiply by i⁴⁰ = 1 -> i⁴⁰/i³⁹ = i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For negative powers of i, multiply by the next multiple of 4 (i⁴⁰ = 1).",
        "commonPitfall": "Writing -i instead of +i."
      },
      {
        "id": "nvs-c11-math-2024-lko-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Multiplicative Inverse",
        "questionText": "The modulus of the complex number z = (1 + i)/(1 - i) is:",
        "options": [
          "A) 1",
          "B) √2",
          "C) 2",
          "D) 1/√2"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |z| = |1 + i| / |1 - i| = √2 / √2 = 1 (in fact z = i, whose modulus is 1).",
        "stepMarking": [
          {
            "step": "|z₁/z₂| = |z₁|/|z₂| = √2/√2 = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember (1+i)/(1-i) = i and (1-i)/(1+i) = -i.",
        "commonPitfall": "Adding moduli instead of dividing."
      },
      {
        "id": "nvs-c11-math-2024-lko-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Linear Inequalities: Absolute Value / Interval",
        "questionText": "If |x - 2| ≤ 5, then x belongs to:",
        "options": [
          "A) (-3, 7)",
          "B) [-3, 7]",
          "C) (-∞, -3] ∪ [7, ∞)",
          "D) [-7, 3]"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -5 ≤ x - 2 ≤ 5 => Adding 2 throughout: -3 ≤ x ≤ 7 => x ∈ [-3, 7].",
        "stepMarking": [
          {
            "step": "-5 ≤ x - 2 ≤ 5 -> [-3, 7]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "≤ gives closed brackets [ ]; < gives open brackets ( ).",
        "commonPitfall": "Forgetting to add 2 to -5 on the left side."
      },
      {
        "id": "nvs-c11-math-2024-lko-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Circular / Word Arrangements",
        "questionText": "If ⁿC₁₂ = ⁿC₈, then the value of n is:",
        "options": [
          "A) 4",
          "B) 12",
          "C) 20",
          "D) 96"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Using ⁿC_a = ⁿC_b (with a ≠ b) => n = a + b = 12 + 8 = 20.",
        "stepMarking": [
          {
            "step": "Apply n = 12 + 8 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "ⁿC_r = ⁿC_(n-r) is one of the fastest 1M shortcuts.",
        "commonPitfall": "Taking n = 12 - 8 = 4."
      },
      {
        "id": "nvs-c11-math-2024-lko-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Permutations & Combinations: Number of Diagonals",
        "questionText": "How many diagonals does a convex polygon of 10 sides (decagon) have?",
        "options": [
          "A) 45",
          "B) 35",
          "C) 90",
          "D) 20"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diagonals = ¹⁰C₂ - 10 = (10 × 9)/2 - 10 = 45 - 10 = 35.",
        "stepMarking": [
          {
            "step": "¹⁰C₂ - 10 = 45 - 10 = 35",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "General formula: n(n - 3)/2.",
        "commonPitfall": "Forgetting to subtract the 10 polygon sides from ¹⁰C₂."
      },
      {
        "id": "nvs-c11-math-2024-lko-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Binomial Theorem: Number of Terms & Middle Term",
        "questionText": "The total number of distinct terms in the expansion of (x + a)¹⁰⁰ + (x - a)¹⁰⁰ after simplification is:",
        "options": [
          "A) 101",
          "B) 50",
          "C) 51",
          "D) 202"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Odd powers of \"a\" cancel out while even powers double. For even n = 100, surviving terms = n/2 + 1 = 50 + 1 = 51.",
        "stepMarking": [
          {
            "step": "n/2 + 1 = 51 terms survive",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For (x+a)ⁿ + (x-a)ⁿ with even n: n/2 + 1 terms; for difference (x+a)ⁿ - (x-a)ⁿ: n/2 terms.",
        "commonPitfall": "Marking 50 instead of 51."
      },
      {
        "id": "nvs-c11-math-2024-lko-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Sequences & Series: Geometric Mean & Infinite GP",
        "questionText": "If the 3rd term of a G.P. is 4, then the product of its first 5 terms is:",
        "options": [
          "A) 4³",
          "B) 4⁴",
          "C) 4⁵",
          "D) 2⁵"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. First 5 terms: a/r², a/r, a, ar, ar² (where middle term a = a₃ = 4). Product = (a)⁵ = 4⁵.",
        "stepMarking": [
          {
            "step": "Product of 5 symmetric GP terms = (a₃)⁵ = 4⁵",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For odd number n of GP terms, product = (middle term)ⁿ.",
        "commonPitfall": "Trying to solve for a and r separately."
      },
      {
        "id": "nvs-c11-math-2024-lko-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Slope of Perpendicular Lines",
        "questionText": "The equation of the line passing through (2, 3) and perpendicular to 4x - 3y = 10 is:",
        "options": [
          "A) 3x + 4y = 18",
          "B) 4x - 3y = -1",
          "C) 3x - 4y = -6",
          "D) 4x + 3y = 17"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Slope of given line m₁ = 4/3 => perpendicular slope m₂ = -3/4. Line: y - 3 = (-3/4)(x - 2) => 4y - 12 = -3x + 6 => 3x + 4y = 18.",
        "stepMarking": [
          {
            "step": "m₂ = -3/4 + point-slope equation -> 3x + 4y = 18",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check: (2, 3) satisfies 3(2) + 4(3) = 6 + 12 = 18!",
        "commonPitfall": "Forgetting the negative sign in m₁m₂ = -1."
      },
      {
        "id": "nvs-c11-math-2024-lko-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Conic Sections: Eccentricity of Ellipse & Hyperbola",
        "questionText": "The length of the latus rectum of the ellipse x²/25 + y²/9 = 1 is:",
        "options": [
          "A) 18/5",
          "B) 50/3",
          "C) 9/5",
          "D) 6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Here a² = 25 (a = 5), b² = 9 (b = 3). Latus rectum = 2b² / a = 2(9) / 5 = 18/5.",
        "stepMarking": [
          {
            "step": "LR = 2b²/a = 18/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always ensure a > b when identifying semi-major axis a.",
        "commonPitfall": "Computing 2b/a instead of 2b²/a."
      },
      {
        "id": "nvs-c11-math-2024-lko-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Octant Identification",
        "questionText": "In which octant does the point (-3, 4, -5) lie?",
        "options": [
          "A) II",
          "B) VI",
          "C) VII",
          "D) VIII"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Signs (-, +, -) correspond to Octant VI (since (-, +, +) is II, shifting z to negative adds 4 -> VI).",
        "stepMarking": [
          {
            "step": "Identify (-, +, -) as Octant VI",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Octants I–IV have +z (same as 2D quadrants I–IV); Octants V–VIII add 4 for -z!",
        "commonPitfall": "Confusing Octant VI (-,+,-) with VII (-,-,-)."
      },
      {
        "id": "nvs-c11-math-2024-lko-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Standard Trig Limit",
        "questionText": "Evaluate lim (x → 0) [ sin(5x) / tan(3x) ]:",
        "options": [
          "A) 3/5",
          "B) 5/3",
          "C) 1",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Divide numerator and denominator by x: lim [5·(sin 5x / 5x)] / [3·(tan 3x / 3x)] = (5 × 1) / (3 × 1) = 5/3.",
        "stepMarking": [
          {
            "step": "Apply sin kx / kx -> 1 and tan mx / mx -> 1 => 5/3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For x → 0, sin ax / tan bx simplifies directly to a/b.",
        "commonPitfall": "Inverting ratio as 3/5."
      },
      {
        "id": "nvs-c11-math-2024-lko-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Limits & Derivatives: Derivative of x sin x",
        "questionText": "If f(x) = x sin x, then f'(π/2) equals:",
        "options": [
          "A) 0",
          "B) 1",
          "C) π/2",
          "D) -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. By product rule: f'(x) = 1·sin x + x cos x. At x = π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1.",
        "stepMarking": [
          {
            "step": "f'(x) = sin x + x cos x -> f'(π/2) = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Differentiate FIRST using product rule, THEN substitute x = π/2.",
        "commonPitfall": "Substituting x = π/2 before differentiating."
      },
      {
        "id": "nvs-c11-math-2024-lko-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Statistics: Variance Change Under Scaling",
        "questionText": "If the variance of 20 observations is 5, and each observation is multiplied by 2, then the new variance is:",
        "options": [
          "A) 5",
          "B) 10",
          "C) 20",
          "D) 25"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. If every observation is multiplied by k, standard deviation scales by |k| and variance scales by k². Thus new variance = 2² × 5 = 4 × 5 = 20.",
        "stepMarking": [
          {
            "step": "New Var = k² × Old Var = 4 × 5 = 20",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Adding/subtracting a constant does NOT change variance; multiplying by k multiplies variance by k².",
        "commonPitfall": "Multiplying variance by 2 instead of 2² = 4."
      },
      {
        "id": "nvs-c11-math-2024-lko-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Mutually Exclusive & Independent Events",
        "questionText": "If P(A) = 0.5, P(B) = 0.4, and P(A ∪ B) = 0.7, then P(A ∩ B) is:",
        "options": [
          "A) 0.1",
          "B) 0.2",
          "C) 0.3",
          "D) 0.9"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using addition theorem: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.4 - 0.7 = 0.2.",
        "stepMarking": [
          {
            "step": "Apply P(A∩B) = 0.5 + 0.4 - 0.7 = 0.2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "commonPitfall": "Multiplying P(A)·P(B) assuming independence without proof."
      },
      {
        "id": "nvs-c11-math-2024-lko-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Straight Lines: Distance Between Parallel Lines",
        "questionText": "The perpendicular distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0 is:",
        "options": [
          "A) 2/5",
          "B) 12/5",
          "C) 2",
          "D) 1/5"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. d = |c₁ - c₂| / √(a² + b²) = |7 - 5| / √(3² + (-4)²) = 2 / 5.",
        "stepMarking": [
          {
            "step": "d = |7 - 5| / √(9+16) = 2/5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Make sure coefficients of x and y are identical in both equations before applying |c₁ - c₂|/√(a²+b²)!",
        "commonPitfall": "Using raw c₁, c₂ when second equation is scaled (e.g. 6x - 8y + 10 = 0)."
      },
      {
        "id": "nvs-c11-math-2024-lko-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Sets & Relations: Equivalence vs Function",
        "questionText": "Assertion (A): Every function is a relation, but every relation is not a function.\nReason (R): In a function from set A to B, every element of A must have a unique (one and only one) image in B.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. A function is a special subset of A × B where every element of A maps to exactly one element of B.",
        "stepMarking": [
          {
            "step": "Option (A) citing unique image criterion",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A single vertical line test on a graph identifies a function.",
        "commonPitfall": "Confusing one-one with function definition."
      },
      {
        "id": "nvs-c11-math-2024-lko-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Complex Numbers: Inequality Undefined in ℂ",
        "questionText": "Assertion (A): The statement (3 + 4i) > (2 + 5i) is mathematically meaningless.\nReason (R): Complex numbers do not satisfy order relations (< or >) unless their imaginary parts are zero.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Complex numbers are 2D points on the Argand plane, so order relations (<, >) are not defined on non-real complex numbers (only moduli can be compared).",
        "stepMarking": [
          {
            "step": "Option (A) noting absence of ordering in ℂ",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only real parts or moduli |z₁| > |z₂| can be compared with >.",
        "commonPitfall": "Comparing real parts alone."
      },
      {
        "id": "nvs-c11-math-2024-lko-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Limits & Derivatives: Exponential / Algebraic Limit",
        "questionText": "Evaluate: lim (x → 0) [ (1 + x)⁵ - 1 ] / x.",
        "modelAnswer": "Let y = 1 + x. As x → 0, y → 1, and x = y - 1.\nLimit becomes lim (y → 1) (y⁵ - 1⁵) / (y - 1).\nUsing standard formula lim (y → a) (yⁿ - aⁿ)/(y - a) = n aⁿ⁻¹:\n= 5 × (1)⁴ = 5.",
        "stepMarking": [
          {
            "step": "Substitute y = 1 + x -> (y⁵ - 1)/(y - 1)",
            "marks": "1 Mark"
          },
          {
            "step": "Apply standard limit n aⁿ⁻¹ = 5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep standard limit formula explicit rather than L'Hôpital's rule in Class 11 NCERT.",
        "commonPitfall": "Substituting x = 0 directly and getting 0/0."
      },
      {
        "id": "nvs-c11-math-2024-lko-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "3D Geometry: Ratio of YZ-Plane Division",
        "questionText": "Find the ratio in which the YZ-plane divides the line segment formed by joining the points (-2, 4, 7) and (3, -5, 8).",
        "modelAnswer": "Let the YZ-plane divide the segment in ratio k : 1 at P(0, y, z) (since x = 0 on YZ-plane).\nUsing section formula for x-coordinate:\n0 = (3k + 1(-2)) / (k + 1) => 3k - 2 = 0 => k = 2/3.\nRatio is 2 : 3 internally.",
        "stepMarking": [
          {
            "step": "Set x = 0 for YZ-plane",
            "marks": "1 Mark"
          },
          {
            "step": "Solve k = 2/3 -> ratio 2 : 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "YZ-plane => x = 0; XZ-plane => y = 0; XY-plane => z = 0.",
        "commonPitfall": "Setting z = 0 instead of x = 0."
      },
      {
        "id": "nvs-c11-math-2024-lko-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Binomial Theorem: Divisibility Proof",
        "questionText": "Using Binomial Theorem, show that 9^(n+1) - 8n - 9 is divisible by 64 whenever n is a positive integer.",
        "modelAnswer": "Write 9^(n+1) = (1 + 8)^(n+1) = ⁿ⁺¹C₀ + ⁿ⁺¹C₁·8 + ⁿ⁺¹C₂·8² + ⁿ⁺¹C₃·8³ + ... + ⁿ⁺¹C_(n+1)·8^(n+1)\n= 1 + 8(n + 1) + 64[ ⁿ⁺¹C₂ + ⁿ⁺¹C₃·8 + ... ]\n= 8n + 9 + 64k (where k is an integer).\nHence 9^(n+1) - 8n - 9 = 64k, which is divisible by 64.",
        "stepMarking": [
          {
            "step": "Expand (1 + 8)^(n+1) cleanly",
            "marks": "1 Mark"
          },
          {
            "step": "Factor 64 from remaining terms after 8n + 9 cancels",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Rewrite base 9 as (1 + 8) so 8² = 64 factors out from the 3rd term onward!",
        "commonPitfall": "Expanding 9ⁿ instead of 9^(n+1)."
      },
      {
        "id": "nvs-c11-math-2024-lko-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Trigonometric Functions: tan(π/4 + x) Proof",
        "questionText": "Prove that: cos(π/4 - x) cos(π/4 - y) - sin(π/4 - x) sin(π/4 - y) = sin(x + y).",
        "modelAnswer": "Using cos A cos B - sin A sin B = cos(A + B) with A = (π/4 - x) and B = (π/4 - y):\nLHS = cos[ (π/4 - x) + (π/4 - y) ] = cos[ π/2 - (x + y) ] = sin(x + y) = RHS.",
        "stepMarking": [
          {
            "step": "Apply cos(A + B) compound angle formula",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify cos(π/2 - (x+y)) = sin(x + y)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Look for cosA cosB - sinA sinB pattern before expanding π/4 angles!",
        "commonPitfall": "Expanding each cos(π/4 - x) separately into 4 long terms."
      },
      {
        "id": "nvs-c11-math-2024-lko-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Complex Numbers: Polar / Standard a + ib Conversion",
        "questionText": "Express [(3 + i√5)(3 - i√5)] / [(√3 + i√2) - (√3 - i√2)] in the standard form a + ib.",
        "modelAnswer": "Numerator = 3² - (i√5)² = 9 + 5 = 14.\nDenominator = √3 + i√2 - √3 + i√2 = 2i√2.\nExpression = 14 / (2i√2) = 7 / (i√2) = (7 / (i√2)) × (-i√2 / -i√2) = -7i√2 / 2 = 0 - (7√2 / 2) i.",
        "stepMarking": [
          {
            "step": "Numerator = 14 & Denominator = 2i√2",
            "marks": "1 Mark"
          },
          {
            "step": "Rationalize denominator -> 0 - (7√2/2)i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice (a+ib)(a-ib) = a² + b² cleanly.",
        "commonPitfall": "Writing i² = +1 instead of -1."
      },
      {
        "id": "nvs-c11-math-2024-lko-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Conic Sections: Circle Passing Through Two Points & Centre on Line",
        "questionText": "Find the equation of the circle passing through the points (4, 1) and (6, 5) whose centre lies on the line 4x + y = 16.",
        "modelAnswer": "Let centre be (h, k) and equation (x - h)² + (y - k)² = r².\nSince (4, 1) and (6, 5) lie on circle:\n(4 - h)² + (1 - k)² = (6 - h)² + (5 - k)²\n16 - 8h + h² + 1 - 2k + k² = 36 - 12h + h² + 25 - 10k + k²\n4h + 8k = 44 => h + 2k = 11 ...(1)\nAlso centre lies on 4h + k = 16 ...(2)\nSolving (1) and (2): 4(11 - 2k) + k = 16 => 44 - 7k = 16 => 7k = 28 => k = 4, h = 3.\nr² = (4 - 3)² + (1 - 4)² = 1 + 9 = 10.\nEquation: (x - 3)² + (y - 4)² = 10 (or x² + y² - 6x - 8y + 15 = 0).",
        "stepMarking": [
          {
            "step": "Equate radii² -> h + 2k = 11",
            "marks": "1 Mark"
          },
          {
            "step": "Solve with 4h + k = 16 -> centre (3, 4)",
            "marks": "1 Mark"
          },
          {
            "step": "Find r² = 10 & circle equation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify both points (4, 1) and (6, 5) satisfy (x-3)²+(y-4)² = 10.",
        "commonPitfall": "Arithmetic slip expanding (6-h)² + (5-k)²."
      },
      {
        "id": "nvs-c11-math-2024-lko-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Limits & Derivatives: First Principles Derivative of cos x or tan x",
        "questionText": "Find the derivative of f(x) = cos x from first principles (ab initio method).",
        "modelAnswer": "f'(x) = lim (h → 0) [cos(x + h) - cos x] / h.\nUsing cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2):\n= lim (h → 0) [ -2 sin(x + h/2) sin(h/2) ] / h\n= lim (h → 0) -sin(x + h/2) × [ sin(h/2) / (h/2) ]\n= -sin(x + 0) × 1 = -sin x.",
        "stepMarking": [
          {
            "step": "Set up first principle limit",
            "marks": "0.5 Mark"
          },
          {
            "step": "Apply cos C - cos D formula",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate lim sin(h/2)/(h/2) = 1 -> -sin x",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide both numerator and denominator by 2 to match sin(h/2)/(h/2).",
        "commonPitfall": "Missing the minus sign in cos C - cos D."
      },
      {
        "id": "nvs-c11-math-2024-lko-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Sequences & Series: Sum of Special Series n terms (8 + 88 + 888...)",
        "questionText": "Find the sum to n terms of the sequence: 8, 88, 888, 8888, ...",
        "modelAnswer": "Sₙ = 8 + 88 + 888 + ... n terms\n= (8/9) [ 9 + 99 + 999 + ... n terms ]\n= (8/9) [ (10 - 1) + (10² - 1) + (10³ - 1) + ... + (10ⁿ - 1) ]\n= (8/9) [ (10 + 10² + ... + 10ⁿ) - n ]\n= (8/9) [ 10(10ⁿ - 1)/(10 - 1) - n ] = (80/81)(10ⁿ - 1) - (8n/9).",
        "stepMarking": [
          {
            "step": "Factor 8/9 to convert into 9 + 99 + ...",
            "marks": "1 Mark"
          },
          {
            "step": "Split as GP (10 + 10² + ... + 10ⁿ) minus n",
            "marks": "1 Mark"
          },
          {
            "step": "GP sum -> (80/81)(10ⁿ - 1) - 8n/9",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same trick works for 5+55+555... (factor 5/9) or 0.7+0.77... (factor 7/9).",
        "commonPitfall": "Forgetting to subtract n (from 1 repeated n times)."
      },
      {
        "id": "nvs-c11-math-2024-lko-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Sets: Venn Diagram / Survey Inclusion-Exclusion",
        "questionText": "In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, while 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee.",
        "modelAnswer": "Let U = total students, T = tea, C = coffee.\nn(U) = 600, n(T) = 150, n(C) = 225, n(T ∩ C) = 100.\nn(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 150 + 225 - 100 = 275.\nStudents taking neither = n(U) - n(T ∪ C) = 600 - 275 = 325 students.",
        "stepMarking": [
          {
            "step": "Identify n(T), n(C), n(T∩C)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute n(T ∪ C) = 275",
            "marks": "1 Mark"
          },
          {
            "step": "Subtract from 600 -> 325 students",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a quick two-circle Venn diagram to verify 50 + 100 + 125 + 325 = 600.",
        "commonPitfall": "Adding 150 + 225 without subtracting the 100 overlap."
      },
      {
        "id": "nvs-c11-math-2024-lko-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Trigonometric Functions: Double & Triple Angle Proof",
        "questionText": "If tan x = -4/3 and x lies in the second quadrant, find the exact values of sin(x/2), cos(x/2), and tan(x/2).",
        "modelAnswer": "Since x ∈ (π/2, π), x/2 ∈ (π/4, π/2) [Quadrant I -> all positive!].\ntan x = -4/3 => sec x = -√(1 + 16/9) = -5/3 (negative in Q-II) => cos x = -3/5.\nsin(x/2) = √[(1 - cos x)/2] = √[(1 + 3/5)/2] = √(4/5) = 2/√5.\ncos(x/2) = √[(1 + cos x)/2] = √[(1 - 3/5)/2] = √(1/5) = 1/√5.\ntan(x/2) = sin(x/2) / cos(x/2) = 2.",
        "stepMarking": [
          {
            "step": "Identify x/2 in Quadrant I & cos x = -3/5",
            "marks": "1 Mark"
          },
          {
            "step": "Compute sin(x/2) = 2/√5 and cos(x/2) = 1/√5",
            "marks": "1.5 Marks"
          },
          {
            "step": "tan(x/2) = 2",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Always determine the quadrant of x/2 FIRST to pick + or - signs on square roots!",
        "commonPitfall": "Giving negative cos(x/2) thinking x/2 is also in Quadrant II."
      },
      {
        "id": "nvs-c11-math-2024-lko-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Linear Inequalities: System of Word Inequalities",
        "questionText": "Find all pairs of consecutive odd natural numbers, both of which are larger than 10, such that their sum is less than 40.",
        "modelAnswer": "Let the two consecutive odd natural numbers be x and (x + 2).\nCondition 1: x > 10 (smallest odd > 10 is 11).\nCondition 2: x + (x + 2) < 40 => 2x + 2 < 40 => 2x < 38 => x < 19.\nSince x is odd with 10 < x < 19, possible values of x are 11, 13, 15, 17.\nRequired pairs: (11, 13), (13, 15), (15, 17), (17, 19).",
        "stepMarking": [
          {
            "step": "Set up inequalities x > 10 and 2x + 2 < 40",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve 10 < x < 19",
            "marks": "0.5 Mark"
          },
          {
            "step": "List all 4 pairs accurately",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice condition says \"sum is LESS than 40\" (not ≤), so x = 19 (19 + 21 = 40) is excluded.",
        "commonPitfall": "Including (19, 21) whose sum is 40."
      },
      {
        "id": "nvs-c11-math-2024-lko-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Straight Lines: Foot of Perpendicular & Image of a Point",
        "questionText": "Find the coordinates of the foot of the perpendicular drawn from the point (-1, 3) to the line 3x - 4y - 16 = 0. Also find the length of the perpendicular.",
        "modelAnswer": "Given point P(-1, 3) and line 3x - 4y - 16 = 0. Slope of line m₁ = 3/4 => perpendicular PM has slope m₂ = -4/3.\nEquation of PM: y - 3 = (-4/3)(x + 1) => 4x + 3y - 5 = 0 ...(1)\nSolving 3x - 4y = 16 and 4x + 3y = 5:\nMultiply first by 3, second by 4 -> 9x - 12y = 48 and 16x + 12y = 20.\nAdding: 25x = 68 => x = 68/25.\nFrom 4(68/25) + 3y = 5 => 3y = (125 - 272)/25 = -147/25 => y = -49/25.\nFoot of perpendicular = (68/25, -49/25).\nLength of perpendicular d = |3(-1) - 4(3) - 16| / √(3² + 4²) = |-3 - 12 - 16| / 5 = 31/5 units.",
        "stepMarking": [
          {
            "step": "Equation of perpendicular PM: 4x + 3y = 5",
            "marks": "1.5 Marks"
          },
          {
            "step": "Solve system to obtain foot (68/25, -49/25)",
            "marks": "2 Marks"
          },
          {
            "step": "Perpendicular distance = 31/5 units",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Cross-check distance between (-1, 3) and (68/25, -49/25) equals 31/5!",
        "commonPitfall": "Sign mistakes solving simultaneous fractional equations."
      },
      {
        "id": "nvs-c11-math-2024-lko-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Statistics: Mean, Variance & Standard Deviation of Grouped Frequency Data",
        "questionText": "Calculate the Mean, Variance, and Standard Deviation for the following distribution:\nClass Interval: 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency (fᵢ):   5   |   8   |  15   |  16   |   6",
        "modelAnswer": "Midpoints xᵢ: 5, 15, 25, 35, 45. Choose assumed mean A = 25, h = 10.\nyᵢ = (xᵢ - 25)/10: -2, -1, 0, 1, 2.\nfᵢyᵢ: -10, -8, 0, 16, 12 => Σfᵢyᵢ = 10, N = Σfᵢ = 50.\nfᵢyᵢ²: 20, 8, 0, 16, 24 => Σfᵢyᵢ² = 68.\nMean x̄ = A + (Σfᵢyᵢ / N)h = 25 + (10/50) × 10 = 25 + 2 = 27.\nVariance σ² = (h²/N²) [ N Σfᵢyᵢ² - (Σfᵢyᵢ)² ] = (100 / 2500) [ 50(68) - 10² ] = (1/25) [3400 - 100] = 3300 / 25 = 132.\nStandard Deviation σ = √132 ≈ 11.49.",
        "stepMarking": [
          {
            "step": "Clean step-deviation table (yᵢ, fᵢyᵢ, fᵢyᵢ²)",
            "marks": "2 Marks"
          },
          {
            "step": "Mean x̄ = 27",
            "marks": "1 Mark"
          },
          {
            "step": "Variance σ² = 132 & SD = 11.49",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Step-deviation method prevents huge numbers like 45² during variance calculation!",
        "commonPitfall": "Forgetting to multiply by h² = 100 in Variance formula."
      },
      {
        "id": "nvs-c11-math-2024-lko-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Conic Sections: Hyperbola / Ellipse Properties Analysis",
        "questionText": "Find the coordinates of the foci, the vertices, the length of major axis, the minor axis, the eccentricity, and the length of the latus rectum of the ellipse: 9x² + 4y² = 36.",
        "modelAnswer": "Divide by 36: x²/4 + y²/9 = 1.\nSince 9 > 4, major axis lies along the y-axis! Here a² = 9 (a = 3), b² = 4 (b = 2).\nc = √(a² - b²) = √(9 - 4) = √5.\n• Vertices: (0, ±a) = (0, ±3)\n• Foci: (0, ±c) = (0, ±√5)\n• Major axis length = 2a = 6; Minor axis length = 2b = 4\n• Eccentricity e = c/a = √5 / 3\n• Latus rectum = 2b² / a = 2(4) / 3 = 8/3.",
        "stepMarking": [
          {
            "step": "Identify vertical ellipse x²/4 + y²/9 = 1 with a=3, b=2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Foci (0, ±√5) & Vertices (0, ±3)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Axes lengths (6, 4), e = √5/3, LR = 8/3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Always check which denominator is LARGER — here y²/9 is larger, so foci lie on the y-axis!",
        "commonPitfall": "Writing foci as (±√5, 0) on the x-axis."
      },
      {
        "id": "nvs-c11-math-2024-lko-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Trigonometric Functions: Proving Multi-Term Identity & Equation",
        "questionText": "Prove that: cos²x + cos²(x + π/3) + cos²(x - π/3) = 3/2.",
        "modelAnswer": "Using cos²θ = (1 + cos 2θ) / 2:\nLHS = ½[1 + cos 2x] + ½[1 + cos(2x + 2π/3)] + ½[1 + cos(2x - 2π/3)]\n= 3/2 + ½[ cos 2x + cos(2x + 2π/3) + cos(2x - 2π/3) ].\nUsing cos(A + B) + cos(A - B) = 2 cos A cos B:\ncos(2x + 2π/3) + cos(2x - 2π/3) = 2 cos 2x cos(2π/3) = 2 cos 2x (-1/2) = -cos 2x.\nTherefore LHS = 3/2 + ½[ cos 2x - cos 2x ] = 3/2 + 0 = 3/2 = RHS.",
        "stepMarking": [
          {
            "step": "Convert all three cos² terms using (1 + cos 2θ)/2",
            "marks": "2 Marks"
          },
          {
            "step": "Combine cos(2x+2π/3) + cos(2x-2π/3) = -cos 2x",
            "marks": "2 Marks"
          },
          {
            "step": "Cancel cos 2x to arrive at 3/2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Converting cos²θ to ½(1 + cos 2θ) turns squares into linear cosines cleanly!",
        "commonPitfall": "Forgetting cos(2π/3) = cos 120° = -1/2."
      },
      {
        "id": "nvs-c11-math-2024-lko-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Permutations & Combinations (Committee Formation)",
        "questionText": "Read the case and answer:\nA mathematics committee of 5 persons is to be formed from 6 boys and 4 girls in a Class 11 batch.\n\n(a) Find the number of ways of forming the committee with NO restriction. (1M)\n(b) How many committees consist of exactly 3 boys and 2 girls? (1M)\n(c) How many committees contain AT LEAST 3 girls? (2M)",
        "modelAnswer": "(a) Total people = 10 => ¹⁰C₅ = (10×9×8×7×6)/(5×4×3×2×1) = 252 ways.\n(b) ⁶C₃ × ⁴C₂ = 20 × 6 = 120 ways.\n(c) \"At least 3 girls\" => (3 girls & 2 boys) OR (4 girls & 1 boy)\n= (⁴C₃ × ⁶C₂) + (⁴C₄ × ⁶C₁) = (4 × 15) + (1 × 6) = 60 + 6 = 66 ways.",
        "stepMarking": [
          {
            "step": "(a) ¹⁰C₅ = 252",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 120 ways",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Sum both disjoint cases -> 66 ways",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "\"At least\" means break into disjoint exhaustive cases and ADD them.",
        "commonPitfall": "Using ⁴C₃ × ⁷C₂ (which double-counts 4-girl committees!)."
      },
      {
        "id": "nvs-c11-math-2024-lko-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Sets & Functions (Relations Counting)",
        "questionText": "Read the case and answer:\nLet A = {1, 2, 3} and B = {a, b}.\n\n(a) Find the number of elements in the Cartesian product A × B. (1M)\n(b) How many total relations can be defined from A to B? (1M)\n(c) How many total functions can be defined from A to B, and how many from B to A? (2M)",
        "modelAnswer": "(a) n(A × B) = n(A) × n(B) = 3 × 2 = 6.\n(b) Total relations = subsets of A × B = 2⁶ = 64.\n(c) Functions from A to B = [n(B)]^n(A) = 2³ = 8; Functions from B to A = [n(A)]^n(B) = 3² = 9.",
        "stepMarking": [
          {
            "step": "(a) n(A × B) = 6",
            "marks": "1 Mark"
          },
          {
            "step": "(b) 2⁶ = 64 relations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) 8 functions (A->B) and 9 functions (B->A)",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Formula: Number of functions from X to Y is n(Y)^n(X).",
        "commonPitfall": "Confusing 2³ with 3² for A -> B."
      },
      {
        "id": "nvs-c11-math-2024-lko-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Probability (Cards & Committee)",
        "questionText": "Read the case and answer:\n4 cards are drawn simultaneously from a well-shuffled pack of 52 playing cards.\n\n(a) Write the total number of outcomes in the sample space. (1M)\n(b) Find the probability of obtaining 3 diamonds and 1 spade. (1.5M)\n(c) Find the probability that all 4 cards belong to the same suit. (1.5M)",
        "modelAnswer": "(a) Sample space n(S) = ⁵²C₄.\n(b) P(3 diamonds & 1 spade) = (¹³C₃ × ¹³C₁) / ⁵²C₄ = (286 × 13) / 270725 = 286 / 20825.\n(c) 4 suits (Spade, Heart, Diamond, Club): P(all 4 same suit) = 4 × ¹³C₄ / ⁵²C₄ = (4 × 715) / 270725 = 44 / 4165.",
        "stepMarking": [
          {
            "step": "(a) ⁵²C₄",
            "marks": "1 Mark"
          },
          {
            "step": "(b) (¹³C₃ × ¹³C₁)/⁵²C₄",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) 4 × ¹³C₄ / ⁵²C₄ = 44/4165",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Leave combinatorial factorials neatly simplified for full credit.",
        "commonPitfall": "Forgetting to multiply by 4 suits in part (c)."
      }
    ]
  }
];
