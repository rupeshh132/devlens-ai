import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_12_MATH_BATCH3_PAPERS: PyqPaper[] = [
  {
    "id": "cbse-c12-math-2024-outside",
    "title": "CBSE Class 12 Mathematics Outside Delhi Set 65/5/1 (2024)",
    "subject": "Mathematics",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "BOARD_EXAM",
    "paperCode": "65/5/1",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper contains 38 questions divided into 5 sections A, B, C, D, and E (Total 80 Marks).",
      "Section A: Q1 to Q18 MCQs and Q19–Q20 Assertion-Reason carrying 1 mark each.",
      "Section B: Q21 to Q25 Very Short Answer questions carrying 2 marks each.",
      "Section C: Q26 to Q31 Short Answer questions carrying 3 marks each.",
      "Section D: Q32 to Q35 Long Answer questions carrying 5 marks each.",
      "Section E: Q36 to Q38 Case-Based integrated questions carrying 4 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-math-2024-outside-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: e^x [f(x) + f'(x)] Identity",
        "questionText": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "A) e^x cos x + C",
          "B) e^x sin x + C",
          "C) -e^x sin x + C",
          "D) e^x (sin x - cos x) + C"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x and f'(x) = cos x -> e^x sin x + C.",
        "stepMarking": [
          {
            "step": "Identify f(x) = sin x, f'(x) = cos x -> e^x sin x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify by differentiating e^x sin x = e^x(sin x + cos x).",
        "commonPitfall": "Choosing e^x cos x (whose derivative has -sin x)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Differential Equations: Order and Degree",
        "questionText": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²) are respectively:",
        "options": [
          "A) 2 and 3",
          "B) 2 and 2",
          "C) 1 and 3",
          "D) 2 and not defined"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Squaring both sides removes fractional exponent 3/2: [1 + (dy/dx)²]³ = k² (d²y/dx²)². Highest derivative is d²y/dx² (order = 2) with highest power = 2 (degree = 2).",
        "stepMarking": [
          {
            "step": "Square both sides -> order 2, degree 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always clear fractional powers/radicals of derivatives before reading the degree!",
        "commonPitfall": "Reading power 3 on (dy/dx)² instead of highest-order derivative d²y/dx²."
      },
      {
        "id": "cbse-c12-math-2024-outside-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2024-outside-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2024-outside-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2024-outside-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2024-outside-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2024-outside-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2024-outside-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2024-outside-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Derivatives: Increasing / Decreasing Intervals",
        "questionText": "The function f(x) = x² - 4x + 6 is strictly increasing in the interval:",
        "options": [
          "A) (-∞, 2)",
          "B) (2, ∞)",
          "C) (-∞, ∞)",
          "D) (0, 2)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. f'(x) = 2x - 4 > 0 => x > 2 => strictly increasing on (2, ∞).",
        "stepMarking": [
          {
            "step": "f'(x) = 2x - 4 > 0 -> (2, ∞)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strictly increasing requires f'(x) > 0 (open interval).",
        "commonPitfall": "Choosing (-∞, 2) where f'(x) < 0."
      },
      {
        "id": "cbse-c12-math-2024-outside-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: Symmetric Odd Function Property",
        "questionText": "Evaluate the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx:",
        "options": [
          "A) 0",
          "B) π/2",
          "C) π",
          "D) 2π"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. x³, x cos x, and tan⁵ x are ALL odd functions (f(-x) = -f(x)), so their integrals over [-π/2, π/2] vanish! Remaining integral = ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.",
        "stepMarking": [
          {
            "step": "Odd terms vanish -> ∫ 1 dx = π",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check parity of EACH term separately instead of assuming the whole integrand is odd.",
        "commonPitfall": "Missing the constant \"+1\" (which is EVEN) and marking 0!"
      },
      {
        "id": "cbse-c12-math-2024-outside-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: e^x [f(x) + f'(x)] Identity",
        "questionText": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "A) e^x cos x + C",
          "B) e^x sin x + C",
          "C) -e^x sin x + C",
          "D) e^x (sin x - cos x) + C"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x and f'(x) = cos x -> e^x sin x + C.",
        "stepMarking": [
          {
            "step": "Identify f(x) = sin x, f'(x) = cos x -> e^x sin x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify by differentiating e^x sin x = e^x(sin x + cos x).",
        "commonPitfall": "Choosing e^x cos x (whose derivative has -sin x)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Differential Equations: Order and Degree",
        "questionText": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²) are respectively:",
        "options": [
          "A) 2 and 3",
          "B) 2 and 2",
          "C) 1 and 3",
          "D) 2 and not defined"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Squaring both sides removes fractional exponent 3/2: [1 + (dy/dx)²]³ = k² (d²y/dx²)². Highest derivative is d²y/dx² (order = 2) with highest power = 2 (degree = 2).",
        "stepMarking": [
          {
            "step": "Square both sides -> order 2, degree 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always clear fractional powers/radicals of derivatives before reading the degree!",
        "commonPitfall": "Reading power 3 on (dy/dx)² instead of highest-order derivative d²y/dx²."
      },
      {
        "id": "cbse-c12-math-2024-outside-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2024-outside-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2024-outside-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Continuity: Differentiability Implies Continuity",
        "questionText": "Assertion (A): Every differentiable function is continuous, but every continuous function is not necessarily differentiable.\nReason (R): f(x) = |x| is continuous at x = 0 yet not differentiable at x = 0 (LHD = -1 ≠ RHD = +1).",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Differentiability guarantees continuity, while |x| has a sharp corner at x = 0 (LHD = -1 ≠ RHD = +1), proving continuity alone does not guarantee differentiability.",
        "stepMarking": [
          {
            "step": "Option (A) with |x| counterexample",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Corner points on continuous curves lack unique tangents -> non-differentiable.",
        "commonPitfall": "Saying |x| is discontinuous at x = 0."
      },
      {
        "id": "cbse-c12-math-2024-outside-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Perpendicular Vectors Condition",
        "questionText": "Assertion (A): If |a + b| = |a - b| for non-zero vectors a and b, then vectors a and b are perpendicular.\nReason (R): Squaring gives 4 (a · b) = 0 => a · b = 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |a + b|² = |a - b|² => 4(a·b) = 0 => a ⊥ b.",
        "stepMarking": [
          {
            "step": "Option (A) proving a · b = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use a · a = |a|² cleanly in vector magnitude proofs.",
        "commonPitfall": "Confusing perpendicular condition (a·b = 0) with parallel condition (a×b = 0)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Inverse Trigonometry: Simplifying tan⁻¹ Formula",
        "questionText": "Express tan⁻¹[ cos x / (1 - sin x) ], where -3π/2 < x < π/2, in its simplest form.",
        "modelAnswer": "Write cos x = sin(π/2 - x) and sin x = cos(π/2 - x) (or use half angles cos²(x/2)-sin²(x/2) over (cos x/2 - sin x/2)²):\n[cos²(x/2) - sin²(x/2)] / [cos(x/2) - sin(x/2)]² = [cos(x/2) + sin(x/2)] / [cos(x/2) - sin(x/2)]\nDivide top and bottom by cos(x/2):\n= [1 + tan(x/2)] / [1 - tan(x/2)] = tan(π/4 + x/2).\nHence tan⁻¹(tan(π/4 + x/2)) = π/4 + x/2 (since -π/2 < π/4 + x/2 < π/2).",
        "stepMarking": [
          {
            "step": "Half-angle factorisation to [1 + tan(x/2)]/[1 - tan(x/2)]",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify to π/4 + x/2 within principal domain",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Replacing 1 = cos²(x/2) + sin²(x/2) converts 1 ± sin x directly into perfect squares!",
        "commonPitfall": "Using cos(π/2 + x) improperly without verifying principal domain (-π/2, π/2)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Applications of Derivatives: Rate of Change (Sphere/Circle)",
        "questionText": "The volume of a cube is increasing at the rate of 8 cm³/s. How fast is the surface area increasing when the length of an edge is 12 cm?",
        "modelAnswer": "Let edge = x. V = x³ => dV/dt = 3x² (dx/dt) = 8 => dx/dt = 8 / (3x²).\nSurface area S = 6x² => dS/dt = 12x (dx/dt) = 12x × [8 / (3x²)] = 32 / x.\nAt x = 12 cm: dS/dt = 32 / 12 = 8/3 cm²/s ≈ 2.67 cm²/s.",
        "stepMarking": [
          {
            "step": "Differentiate V=x³ -> dx/dt = 8/(3x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dS/dt = 32/x = 8/3 cm²/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Substitute x = 12 ONLY AFTER differentiating!",
        "commonPitfall": "Writing unit cm/s instead of cm²/s."
      },
      {
        "id": "cbse-c12-math-2024-outside-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Integrals: Integration by Substitution",
        "questionText": "Evaluate: ∫ [ 1 / (x - √x) ] dx.",
        "modelAnswer": "Factor √x in denominator: ∫ [ 1 / (√x (√x - 1)) ] dx.\nSubstitute t = √x - 1 => dt = (1 / (2√x)) dx => dx / √x = 2 dt.\nIntegral = ∫ (2 / t) dt = 2 log |t| + C = 2 log |√x - 1| + C.",
        "stepMarking": [
          {
            "step": "Factor √x & substitute t = √x - 1",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> 2 log|√x - 1| + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute back to original variable x and include +C!",
        "commonPitfall": "Forgetting the factor of 2 from d(√x) = dx/(2√x)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Vectors: Unit Vector Perpendicular to Two Vectors",
        "questionText": "Find a unit vector perpendicular to both vectors a = 3î + ĵ + 2k̂ and b = 2î - 2ĵ + 4k̂.",
        "modelAnswer": "a × b = | î  ĵ  k̂ ; 3 1 2 ; 2 -2 4 | = î(4 + 4) - ĵ(12 - 4) + k̂(-6 - 2) = 8î - 8ĵ - 8k̂.\n|a × b| = √(8² + (-8)² + (-8)²) = 8√3.\nUnit vector n̂ = ± (a × b) / |a × b| = ± (1/√3)(î - ĵ - k̂).",
        "stepMarking": [
          {
            "step": "Cross product a × b = 8î - 8ĵ - 8k̂",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 8√3 -> ±(î - ĵ - k̂)/√3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include ± when question asks \"a unit vector perpendicular to both\", since both +n̂ and -n̂ are valid.",
        "commonPitfall": "Sign error on the ĵ cofactor in 3×3 determinant."
      },
      {
        "id": "cbse-c12-math-2024-outside-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Differential Equations: General Solution via Variable Separable",
        "questionText": "Find the general solution of the differential equation: dy/dx = (1 + y²) / (1 + x²).",
        "modelAnswer": "Separating variables:\ndy / (1 + y²) = dx / (1 + x²).\nIntegrating both sides:\ntan⁻¹ y = tan⁻¹ x + C (or tan⁻¹( (y - x)/(1 + xy) ) = C => y - x = k(1 + xy)).",
        "stepMarking": [
          {
            "step": "Separate variables dy/(1+y²) = dx/(1+x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> tan⁻¹ y = tan⁻¹ x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify constant C is added immediately upon integrating.",
        "commonPitfall": "Leaving without integrating or omitting +C."
      },
      {
        "id": "cbse-c12-math-2024-outside-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Differential Equations: Linear DE dy/dx + Py = Q",
        "questionText": "Solve the linear differential equation: (1 + x²) dy/dx + 2xy = 4x².",
        "modelAnswer": "Divide by (1 + x²): dy/dx + [2x / (1 + x²)] y = 4x² / (1 + x²).\nHere P = 2x/(1 + x²), Q = 4x²/(1 + x²).\nIntegrating Factor IF = e^(∫ 2x/(1+x²) dx) = e^(ln(1+x²)) = 1 + x².\nSolution: y · (1 + x²) = ∫ [4x² / (1 + x²)] (1 + x²) dx = ∫ 4x² dx = (4/3)x³ + C.\nHence y = [ (4/3)x³ + C ] / (1 + x²).",
        "stepMarking": [
          {
            "step": "Standard form dy/dx + Py = Q",
            "marks": "0.5 Mark"
          },
          {
            "step": "Integrating Factor IF = 1 + x²",
            "marks": "1 Mark"
          },
          {
            "step": "Final solution y(1+x²) = 4x³/3 + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check whether leading dy/dx coefficient is 1 before writing P and Q!",
        "commonPitfall": "Forgetting to divide Q (4x²) by (1 + x²) as well."
      },
      {
        "id": "cbse-c12-math-2024-outside-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Linear Programming: Graphical Corner Point Maximization",
        "questionText": "Solve the following LPP graphically: Maximize Z = 4x + y subject to constraints x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
        "modelAnswer": "Boundary lines:\n• L₁: x + y = 50 passes through (50, 0) & (0, 50).\n• L₂: 3x + y = 90 passes through (30, 0) & (0, 90).\nIntersection of L₁ and L₂: Subtracting -> 2x = 40 => x = 20, y = 30.\nBounded feasible region corner points & Z = 4x + y:\n• O(0, 0) -> Z = 0\n• A(30, 0) -> Z = 120 (MAXIMUM)\n• B(20, 30) -> Z = 80 + 30 = 110\n• C(0, 50) -> Z = 50.\nMaximum value of Z is 120 at (30, 0).",
        "stepMarking": [
          {
            "step": "Intersection (20, 30) & 4 feasible vertices",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate Z at all corner points -> Max Z = 120 at (30, 0)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Shade the feasible region clearly and show corner table.",
        "commonPitfall": "Using wrong x-intercept (50, 0) instead of (30, 0) in feasible region."
      },
      {
        "id": "cbse-c12-math-2024-outside-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Continuity: Finding Unknowns k for Continuity at Boundary",
        "questionText": "Find the values of a and b such that the function f(x) defined below is continuous everywhere:\nf(x) = 5 if x ≤ 2;  ax + b if 2 < x < 10;  21 if x ≥ 10.",
        "modelAnswer": "For continuity at x = 2: LHL = f(2) = 5 = RHL = lim(x→2⁺)(ax + b) = 2a + b => 2a + b = 5 ...(1)\nFor continuity at x = 10: LHL = lim(x→10⁻)(ax + b) = 10a + b = f(10) = 21 => 10a + b = 21 ...(2)\nSubtracting (1) from (2): 8a = 16 => a = 2.\nFrom (1): 2(2) + b = 5 => b = 1.\nHence a = 2, b = 1.",
        "stepMarking": [
          {
            "step": "Continuity at x=2 -> 2a + b = 5",
            "marks": "1 Mark"
          },
          {
            "step": "Continuity at x=10 -> 10a + b = 21",
            "marks": "1 Mark"
          },
          {
            "step": "Solve simultaneously -> a = 2, b = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write LHL = RHL = f(c) notation explicitly for full board marks.",
        "commonPitfall": "Solving only one boundary point."
      },
      {
        "id": "cbse-c12-math-2024-outside-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Differentiation: Logarithmic Differentiation (x^cos x + (cos x)^x)",
        "questionText": "Differentiate y = x^(sin x) + (sin x)^x with respect to x.",
        "modelAnswer": "Let u = x^(sin x) and v = (sin x)^x => y = u + v => dy/dx = du/dx + dv/dx.\nFor u: ln u = sin x ln x => (1/u) du/dx = (sin x)/x + cos x ln x => du/dx = x^(sin x)[ (sin x)/x + cos x ln x ].\nFor v: ln v = x ln(sin x) => (1/v) dv/dx = ln(sin x) + x cot x => dv/dx = (sin x)^x[ ln(sin x) + x cot x ].\nHence dy/dx = x^(sin x)[(sin x)/x + cos x ln x] + (sin x)^x[ln(sin x) + x cot x].",
        "stepMarking": [
          {
            "step": "Split y = u + v (DO NOT take log directly on sum!)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute du/dx via logarithmic differentiation",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dv/dx & combine",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "CRITICAL: log(u + v) ≠ log u + log v! Always differentiate u and v separately!",
        "commonPitfall": "Taking log(y) = log(x^sinx) + log((sinx)^x) directly!"
      },
      {
        "id": "cbse-c12-math-2024-outside-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: King's Property ∫₀^a f(x)dx",
        "questionText": "Evaluate: ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx.",
        "modelAnswer": "Let I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx ...(1)\nUsing P₄: ∫₀^a f(x)dx = ∫₀^a f(a - x)dx with a = π/2:\nI = ∫₀^(π/2) [ √(cos x) / (√(cos x) + √(sin x)) ] dx ...(2)\nAdding (1) and (2): 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.",
        "stepMarking": [
          {
            "step": "Apply King's property f(π/2 - x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Add (1) + (2) -> 2I = π/2 -> I = π/4",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "State the property used explicitly (∫₀^a f(x)dx = ∫₀^a f(a-x)dx).",
        "commonPitfall": "Forgetting the factor 2 in 2I = π/2 and writing π/2."
      },
      {
        "id": "cbse-c12-math-2024-outside-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: Integration by Parts & Partial Fractions",
        "questionText": "Evaluate: ∫ [ x / ((x - 1)(x - 2)) ] dx.",
        "modelAnswer": "Using partial fractions: x / [(x - 1)(x - 2)] = A/(x - 1) + B/(x - 2) => x = A(x - 2) + B(x - 1).\nPut x = 1: 1 = -A => A = -1.\nPut x = 2: 2 = B => B = 2.\nIntegral = ∫ [ -1/(x - 1) + 2/(x - 2) ] dx = 2 log|x - 2| - log|x - 1| + C = log|(x - 2)² / (x - 1)| + C.",
        "stepMarking": [
          {
            "step": "Partial fractions A = -1, B = 2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate -> log|(x-2)²/(x-1)| + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check A + B = 1 and -2A - B = 0 before integrating.",
        "commonPitfall": "Sign mistake in A = -1."
      },
      {
        "id": "cbse-c12-math-2024-outside-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "3D Geometry: Shortest Distance Between Skew Lines",
        "questionText": "Find the shortest distance between the skew lines:\nr = (î + 2ĵ + k̂) + λ(î - ĵ + k̂)\nr = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).",
        "modelAnswer": "Here a₁ = î + 2ĵ + k̂, b₁ = î - ĵ + k̂;\na₂ = 2î - ĵ - k̂, b₂ = 2î + ĵ + 2k̂.\na₂ - a₁ = î - 3ĵ - 2k̂.\nb₁ × b₂ = | î ĵ k̂ ; 1 -1 1 ; 2 1 2 | = î(-2 - 1) - ĵ(2 - 2) + k̂(1 + 2) = -3î + 0ĵ + 3k̂.\n|b₁ × b₂| = √((-3)² + 0 + 3²) = 3√2.\nDot product: (b₁ × b₂) · (a₂ - a₁) = (-3)(1) + 0(-3) + 3(-2) = -3 - 6 = -9.\nShortest distance d = | -9 | / (3√2) = 3 / √2 = (3√2)/2 units.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ and b₁ × b₂",
            "marks": "2 Marks"
          },
          {
            "step": "Magnitude |b₁ × b₂| = 3√2",
            "marks": "1 Mark"
          },
          {
            "step": "Formula |(b₁×b₂)·(a₂-a₁)| / |b₁×b₂| -> 3/√2 units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "If b₁ and b₂ are parallel (b₁ × b₂ = 0), use parallel lines distance |(a₂ - a₁) × b| / |b|!",
        "commonPitfall": "Omitting absolute value around dot product and reporting negative distance."
      },
      {
        "id": "cbse-c12-math-2024-outside-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Derivatives: Maxima/Minima Cylinder/Cone Inscribed Word Problem",
        "questionText": "Show that the right circular cylinder of given surface area and maximum volume is such that its height is equal to the diameter of its base.",
        "modelAnswer": "Let radius = r, height = h, fixed total surface area S = 2πr² + 2πrh => h = (S - 2πr²) / (2πr).\nVolume V = πr² h = πr² [ (S - 2πr²) / (2πr) ] = (Sr)/2 - πr³.\nDifferentiate w.r.t. r:\ndV/dr = S/2 - 3πr² = 0 => S = 6πr².\nd²V/dr² = -6πr < 0 => Volume is MAXIMUM.\nSubstitute S = 6πr² back into S = 2πr² + 2πrh:\n6πr² = 2πr² + 2πrh => 4πr² = 2πrh => h = 2r (diameter of base).",
        "stepMarking": [
          {
            "step": "Express h in terms of S & r -> V(r) = Sr/2 - πr³",
            "marks": "1.5 Marks"
          },
          {
            "step": "dV/dr = 0 -> S = 6πr²",
            "marks": "1.5 Marks"
          },
          {
            "step": "Second derivative < 0 & deduce h = 2r",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never skip the second-derivative check d²V/dr² < 0 — CBSE awards a full mark for proving maximum!",
        "commonPitfall": "Using CSA = 2πrh instead of Total Surface Area 2πr² + 2πrh."
      },
      {
        "id": "cbse-c12-math-2024-outside-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Matrices: System of Linear Equations Using Inverse Matrix A⁻¹",
        "questionText": "If A = [[2, -3, 5], [3, 2, -4], [1, 1, -2]], find A⁻¹. Using A⁻¹, solve the system of linear equations:\n2x - 3y + 5z = 11\n3x + 2y - 4z = -5\nx + y - 2z = -3",
        "modelAnswer": "|A| = 2(-4 + 4) - (-3)(-6 + 4) + 5(3 - 2) = 0 + 3(-2) + 5(1) = -6 + 5 = -1 ≠ 0 (non-singular, A⁻¹ exists).\nCofactors of A:\nC₁₁=0, C₁₂=2, C₁₃=1\nC₂₁=-1, C₂₂=-9, C₂₃=-5\nC₃₁=2, C₃₂=23, C₃₃=13.\nadj A = Transpose of cofactor matrix = [[0, -1, 2], [2, -9, 23], [1, -5, 13]].\nA⁻¹ = (1/-1) adj A = [[0, 1, -2], [-2, 9, -23], [-1, 5, -13]].\nSolution X = A⁻¹ B where B = [11, -5, -3]^T:\nx = 0(11) + 1(-5) - 2(-3) = 1\ny = -2(11) + 9(-5) - 23(-3) = -22 - 45 + 69 = 2\nz = -1(11) + 5(-5) - 13(-3) = -11 - 25 + 39 = 3.\nHence x = 1, y = 2, z = 3.",
        "stepMarking": [
          {
            "step": "|A| = -1 ≠ 0",
            "marks": "1 Mark"
          },
          {
            "step": "All 9 cofactors & adj A",
            "marks": "2 Marks"
          },
          {
            "step": "A⁻¹ and X = A⁻¹ B -> x=1, y=2, z=3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Plug (1, 2, 3) back into ALL 3 equations right away to verify 100% accuracy!",
        "commonPitfall": "Forgetting to take Transpose of the cofactor matrix for adj A."
      },
      {
        "id": "cbse-c12-math-2024-outside-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Integrals: Area Bounded by Circle & Line / Parabola",
        "questionText": "Using integration, find the area of the region in the first quadrant enclosed by the x-axis, the line y = x, and the circle x² + y² = 32.",
        "modelAnswer": "Intersection of y = x and x² + y² = 32: 2x² = 32 => x² = 16 => x = 4 (in first quadrant) -> point (4, 4).\nCircle radius r = √32 = 4√2 -> meets x-axis at (4√2, 0).\nSplit area at x = 4:\nA = ∫₀⁴ x dx + ∫₄^(4√2) √(32 - x²) dx\n= [x²/2]₀⁴ + [ (x/2)√(32 - x²) + (32/2) sin⁻¹(x / (4√2)) ]₄^(4√2)\n= 8 + [ (0 + 16 · π/2) - (2√16 + 16 sin⁻¹(1/√2)) ]\n= 8 + [ 8π - (8 + 16 · π/4) ] = 8 + 8π - 8 - 4π = 4π sq. units.",
        "stepMarking": [
          {
            "step": "Sketch figure & find intersection (4, 4) and (4√2, 0)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Split integral ∫₀⁴ x dx + ∫₄^(4√2) √(32-x²) dx",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate standard √(a²-x²) integral -> 4π sq. units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Quick geometric sanity check: θ = 45° (1/8 of full circle area πr² = 32π) => 32π / 8 = 4π!",
        "commonPitfall": "Integrating √(32 - x²) from 0 to 4√2 without splitting at x = 4."
      },
      {
        "id": "cbse-c12-math-2024-outside-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Relations & Bijections (One-One & Onto)",
        "questionText": "Read the case and answer:\nConsider a function f : ℝ - {3} → ℝ - {1} defined by f(x) = (x - 2) / (x - 3).\n\n(a) Show that f is one-one (injective). (1.5M)\n(b) Show that f is onto (surjective). (1.5M)\n(c) Find the inverse function f⁻¹(y). (1M)",
        "modelAnswer": "(a) Let f(x₁) = f(x₂) => (x₁ - 2)/(x₁ - 3) = (x₂ - 2)/(x₂ - 3).\nCross-multiplying: x₁x₂ - 3x₁ - 2x₂ + 6 = x₁x₂ - 2x₁ - 3x₂ + 6 => -x₁ = -x₂ => x₁ = x₂. Hence f is one-one.\n(b) Let y ∈ ℝ - {1}. Set y = (x - 2)/(x - 3) => xy - 3y = x - 2 => x(y - 1) = 3y - 2 => x = (3y - 2)/(y - 1), which is well-defined and ≠ 3 (since (3y-2)/(y-1) = 3 gives -2 = -3, impossible!). Thus every y has preimage -> onto.\n(c) f⁻¹(y) = (3y - 2) / (y - 1).",
        "stepMarking": [
          {
            "step": "(a) Algebraic proof x₁ = x₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Express x = (3y-2)/(y-1) and check domain",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Inverse expression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify x ≠ 3 when proving onto for fractional rational functions!",
        "commonPitfall": "Claiming onto without checking pre-image belongs to domain ℝ - {3}."
      },
      {
        "id": "cbse-c12-math-2024-outside-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Maxima / Minima Applied Geometry (Open Box)",
        "questionText": "Read the case and answer:\nA square piece of tin of side 18 cm is to be made into a box without top by cutting a square of side x cm from each corner and folding up the flaps.\n\n(a) Write the dimensions and Volume V(x) of the open box in terms of x. (1M)\n(b) Find the value of x that maximises the volume using derivatives. (2M)\n(c) Calculate the maximum possible volume of the box. (1M)",
        "modelAnswer": "(a) Base side = (18 - 2x) cm, height = x cm (0 < x < 9). Volume V(x) = x(18 - 2x)².\n(b) V'(x) = (18 - 2x)² + x · 2(18 - 2x)(-2) = (18 - 2x)(18 - 2x - 4x) = (18 - 2x)(18 - 6x) = 0 => x = 9 (rejected) or x = 3 cm.\nV''(x) at x = 3 is -6(18 - 12) + ... = -72 < 0 => maximum at x = 3 cm.\n(c) V_max = 3 × (18 - 6)² = 3 × 144 = 432 cm³.",
        "stepMarking": [
          {
            "step": "(a) V(x) = x(18 - 2x)²",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Derivative check -> x = 3 cm",
            "marks": "2 Marks"
          },
          {
            "step": "(c) V_max = 432 cm³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Side cut from EACH corner removes 2x from total length 18 cm!",
        "commonPitfall": "Writing base side as (18 - x) instead of (18 - 2x)."
      },
      {
        "id": "cbse-c12-math-2024-outside-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Bayes' Theorem (Diagnostic Test / Factory Defect)",
        "questionText": "Read the case and answer:\nIn a bolt factory, Machines A, B, and C manufacture respectively 25%, 35%, and 40% of total output. Of their outputs, 5%, 4%, and 2% respectively are defective bolts. A bolt is drawn at random from the product and is found to be defective.\n\n(a) Write the prior probabilities P(A), P(B), P(C) and conditional defect probabilities. (1M)\n(b) Find the total probability P(D) that a randomly selected bolt is defective. (1.5M)\n(c) Using Bayes' theorem, find the probability that the defective bolt was manufactured by Machine B. (1.5M)",
        "modelAnswer": "(a) P(A) = 0.25, P(B) = 0.35, P(C) = 0.40; P(D|A) = 0.05, P(D|B) = 0.04, P(D|C) = 0.02.\n(b) P(D) = 0.25(0.05) + 0.35(0.04) + 0.40(0.02) = 0.0125 + 0.0140 + 0.0080 = 0.0345.\n(c) P(B|D) = [0.35 × 0.04] / 0.0345 = 0.0140 / 0.0345 = 140 / 345 = 28 / 69.",
        "stepMarking": [
          {
            "step": "(a) Prior & conditional probabilities",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total probability P(D) = 0.0345",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Bayes formula -> 28/69",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Simplify numerator and denominator fractions cleanly (divide by 5 -> 28/69).",
        "commonPitfall": "Leaving out P(A), P(B), P(C) weights in total probability."
      }
    ]
  },
  {
    "id": "cbse-c12-math-2024-comp",
    "title": "CBSE Class 12 Mathematics Compartment Exam Paper (2024)",
    "subject": "Mathematics",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "BOARD_EXAM",
    "paperCode": "65/C/1",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper contains 38 questions divided into 5 sections A, B, C, D, and E (Total 80 Marks).",
      "Section A: Q1 to Q18 MCQs and Q19–Q20 Assertion-Reason carrying 1 mark each.",
      "Section B: Q21 to Q25 Very Short Answer questions carrying 2 marks each.",
      "Section C: Q26 to Q31 Short Answer questions carrying 3 marks each.",
      "Section D: Q32 to Q35 Long Answer questions carrying 5 marks each.",
      "Section E: Q36 to Q38 Case-Based integrated questions carrying 4 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-math-2024-comp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2024-comp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2024-comp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2024-comp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2024-comp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2024-comp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2024-comp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2024-comp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Derivatives: Increasing / Decreasing Intervals",
        "questionText": "The function f(x) = x² - 4x + 6 is strictly increasing in the interval:",
        "options": [
          "A) (-∞, 2)",
          "B) (2, ∞)",
          "C) (-∞, ∞)",
          "D) (0, 2)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. f'(x) = 2x - 4 > 0 => x > 2 => strictly increasing on (2, ∞).",
        "stepMarking": [
          {
            "step": "f'(x) = 2x - 4 > 0 -> (2, ∞)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strictly increasing requires f'(x) > 0 (open interval).",
        "commonPitfall": "Choosing (-∞, 2) where f'(x) < 0."
      },
      {
        "id": "cbse-c12-math-2024-comp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: Symmetric Odd Function Property",
        "questionText": "Evaluate the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx:",
        "options": [
          "A) 0",
          "B) π/2",
          "C) π",
          "D) 2π"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. x³, x cos x, and tan⁵ x are ALL odd functions (f(-x) = -f(x)), so their integrals over [-π/2, π/2] vanish! Remaining integral = ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.",
        "stepMarking": [
          {
            "step": "Odd terms vanish -> ∫ 1 dx = π",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check parity of EACH term separately instead of assuming the whole integrand is odd.",
        "commonPitfall": "Missing the constant \"+1\" (which is EVEN) and marking 0!"
      },
      {
        "id": "cbse-c12-math-2024-comp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: e^x [f(x) + f'(x)] Identity",
        "questionText": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "A) e^x cos x + C",
          "B) e^x sin x + C",
          "C) -e^x sin x + C",
          "D) e^x (sin x - cos x) + C"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x and f'(x) = cos x -> e^x sin x + C.",
        "stepMarking": [
          {
            "step": "Identify f(x) = sin x, f'(x) = cos x -> e^x sin x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify by differentiating e^x sin x = e^x(sin x + cos x).",
        "commonPitfall": "Choosing e^x cos x (whose derivative has -sin x)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Differential Equations: Order and Degree",
        "questionText": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²) are respectively:",
        "options": [
          "A) 2 and 3",
          "B) 2 and 2",
          "C) 1 and 3",
          "D) 2 and not defined"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Squaring both sides removes fractional exponent 3/2: [1 + (dy/dx)²]³ = k² (d²y/dx²)². Highest derivative is d²y/dx² (order = 2) with highest power = 2 (degree = 2).",
        "stepMarking": [
          {
            "step": "Square both sides -> order 2, degree 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always clear fractional powers/radicals of derivatives before reading the degree!",
        "commonPitfall": "Reading power 3 on (dy/dx)² instead of highest-order derivative d²y/dx²."
      },
      {
        "id": "cbse-c12-math-2024-comp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2024-comp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2024-comp-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2024-comp-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Perpendicular Vectors Condition",
        "questionText": "Assertion (A): If |a + b| = |a - b| for non-zero vectors a and b, then vectors a and b are perpendicular.\nReason (R): Squaring gives 4 (a · b) = 0 => a · b = 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |a + b|² = |a - b|² => 4(a·b) = 0 => a ⊥ b.",
        "stepMarking": [
          {
            "step": "Option (A) proving a · b = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use a · a = |a|² cleanly in vector magnitude proofs.",
        "commonPitfall": "Confusing perpendicular condition (a·b = 0) with parallel condition (a×b = 0)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Continuity: Differentiability Implies Continuity",
        "questionText": "Assertion (A): Every differentiable function is continuous, but every continuous function is not necessarily differentiable.\nReason (R): f(x) = |x| is continuous at x = 0 yet not differentiable at x = 0 (LHD = -1 ≠ RHD = +1).",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Differentiability guarantees continuity, while |x| has a sharp corner at x = 0 (LHD = -1 ≠ RHD = +1), proving continuity alone does not guarantee differentiability.",
        "stepMarking": [
          {
            "step": "Option (A) with |x| counterexample",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Corner points on continuous curves lack unique tangents -> non-differentiable.",
        "commonPitfall": "Saying |x| is discontinuous at x = 0."
      },
      {
        "id": "cbse-c12-math-2024-comp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Applications of Derivatives: Rate of Change (Sphere/Circle)",
        "questionText": "The volume of a cube is increasing at the rate of 8 cm³/s. How fast is the surface area increasing when the length of an edge is 12 cm?",
        "modelAnswer": "Let edge = x. V = x³ => dV/dt = 3x² (dx/dt) = 8 => dx/dt = 8 / (3x²).\nSurface area S = 6x² => dS/dt = 12x (dx/dt) = 12x × [8 / (3x²)] = 32 / x.\nAt x = 12 cm: dS/dt = 32 / 12 = 8/3 cm²/s ≈ 2.67 cm²/s.",
        "stepMarking": [
          {
            "step": "Differentiate V=x³ -> dx/dt = 8/(3x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dS/dt = 32/x = 8/3 cm²/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Substitute x = 12 ONLY AFTER differentiating!",
        "commonPitfall": "Writing unit cm/s instead of cm²/s."
      },
      {
        "id": "cbse-c12-math-2024-comp-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Integrals: Integration by Substitution",
        "questionText": "Evaluate: ∫ [ 1 / (x - √x) ] dx.",
        "modelAnswer": "Factor √x in denominator: ∫ [ 1 / (√x (√x - 1)) ] dx.\nSubstitute t = √x - 1 => dt = (1 / (2√x)) dx => dx / √x = 2 dt.\nIntegral = ∫ (2 / t) dt = 2 log |t| + C = 2 log |√x - 1| + C.",
        "stepMarking": [
          {
            "step": "Factor √x & substitute t = √x - 1",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> 2 log|√x - 1| + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute back to original variable x and include +C!",
        "commonPitfall": "Forgetting the factor of 2 from d(√x) = dx/(2√x)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Vectors: Unit Vector Perpendicular to Two Vectors",
        "questionText": "Find a unit vector perpendicular to both vectors a = 3î + ĵ + 2k̂ and b = 2î - 2ĵ + 4k̂.",
        "modelAnswer": "a × b = | î  ĵ  k̂ ; 3 1 2 ; 2 -2 4 | = î(4 + 4) - ĵ(12 - 4) + k̂(-6 - 2) = 8î - 8ĵ - 8k̂.\n|a × b| = √(8² + (-8)² + (-8)²) = 8√3.\nUnit vector n̂ = ± (a × b) / |a × b| = ± (1/√3)(î - ĵ - k̂).",
        "stepMarking": [
          {
            "step": "Cross product a × b = 8î - 8ĵ - 8k̂",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 8√3 -> ±(î - ĵ - k̂)/√3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include ± when question asks \"a unit vector perpendicular to both\", since both +n̂ and -n̂ are valid.",
        "commonPitfall": "Sign error on the ĵ cofactor in 3×3 determinant."
      },
      {
        "id": "cbse-c12-math-2024-comp-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Differential Equations: General Solution via Variable Separable",
        "questionText": "Find the general solution of the differential equation: dy/dx = (1 + y²) / (1 + x²).",
        "modelAnswer": "Separating variables:\ndy / (1 + y²) = dx / (1 + x²).\nIntegrating both sides:\ntan⁻¹ y = tan⁻¹ x + C (or tan⁻¹( (y - x)/(1 + xy) ) = C => y - x = k(1 + xy)).",
        "stepMarking": [
          {
            "step": "Separate variables dy/(1+y²) = dx/(1+x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> tan⁻¹ y = tan⁻¹ x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify constant C is added immediately upon integrating.",
        "commonPitfall": "Leaving without integrating or omitting +C."
      },
      {
        "id": "cbse-c12-math-2024-comp-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Inverse Trigonometry: Simplifying tan⁻¹ Formula",
        "questionText": "Express tan⁻¹[ cos x / (1 - sin x) ], where -3π/2 < x < π/2, in its simplest form.",
        "modelAnswer": "Write cos x = sin(π/2 - x) and sin x = cos(π/2 - x) (or use half angles cos²(x/2)-sin²(x/2) over (cos x/2 - sin x/2)²):\n[cos²(x/2) - sin²(x/2)] / [cos(x/2) - sin(x/2)]² = [cos(x/2) + sin(x/2)] / [cos(x/2) - sin(x/2)]\nDivide top and bottom by cos(x/2):\n= [1 + tan(x/2)] / [1 - tan(x/2)] = tan(π/4 + x/2).\nHence tan⁻¹(tan(π/4 + x/2)) = π/4 + x/2 (since -π/2 < π/4 + x/2 < π/2).",
        "stepMarking": [
          {
            "step": "Half-angle factorisation to [1 + tan(x/2)]/[1 - tan(x/2)]",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify to π/4 + x/2 within principal domain",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Replacing 1 = cos²(x/2) + sin²(x/2) converts 1 ± sin x directly into perfect squares!",
        "commonPitfall": "Using cos(π/2 + x) improperly without verifying principal domain (-π/2, π/2)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Linear Programming: Graphical Corner Point Maximization",
        "questionText": "Solve the following LPP graphically: Maximize Z = 4x + y subject to constraints x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
        "modelAnswer": "Boundary lines:\n• L₁: x + y = 50 passes through (50, 0) & (0, 50).\n• L₂: 3x + y = 90 passes through (30, 0) & (0, 90).\nIntersection of L₁ and L₂: Subtracting -> 2x = 40 => x = 20, y = 30.\nBounded feasible region corner points & Z = 4x + y:\n• O(0, 0) -> Z = 0\n• A(30, 0) -> Z = 120 (MAXIMUM)\n• B(20, 30) -> Z = 80 + 30 = 110\n• C(0, 50) -> Z = 50.\nMaximum value of Z is 120 at (30, 0).",
        "stepMarking": [
          {
            "step": "Intersection (20, 30) & 4 feasible vertices",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate Z at all corner points -> Max Z = 120 at (30, 0)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Shade the feasible region clearly and show corner table.",
        "commonPitfall": "Using wrong x-intercept (50, 0) instead of (30, 0) in feasible region."
      },
      {
        "id": "cbse-c12-math-2024-comp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Continuity: Finding Unknowns k for Continuity at Boundary",
        "questionText": "Find the values of a and b such that the function f(x) defined below is continuous everywhere:\nf(x) = 5 if x ≤ 2;  ax + b if 2 < x < 10;  21 if x ≥ 10.",
        "modelAnswer": "For continuity at x = 2: LHL = f(2) = 5 = RHL = lim(x→2⁺)(ax + b) = 2a + b => 2a + b = 5 ...(1)\nFor continuity at x = 10: LHL = lim(x→10⁻)(ax + b) = 10a + b = f(10) = 21 => 10a + b = 21 ...(2)\nSubtracting (1) from (2): 8a = 16 => a = 2.\nFrom (1): 2(2) + b = 5 => b = 1.\nHence a = 2, b = 1.",
        "stepMarking": [
          {
            "step": "Continuity at x=2 -> 2a + b = 5",
            "marks": "1 Mark"
          },
          {
            "step": "Continuity at x=10 -> 10a + b = 21",
            "marks": "1 Mark"
          },
          {
            "step": "Solve simultaneously -> a = 2, b = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write LHL = RHL = f(c) notation explicitly for full board marks.",
        "commonPitfall": "Solving only one boundary point."
      },
      {
        "id": "cbse-c12-math-2024-comp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Differentiation: Logarithmic Differentiation (x^cos x + (cos x)^x)",
        "questionText": "Differentiate y = x^(sin x) + (sin x)^x with respect to x.",
        "modelAnswer": "Let u = x^(sin x) and v = (sin x)^x => y = u + v => dy/dx = du/dx + dv/dx.\nFor u: ln u = sin x ln x => (1/u) du/dx = (sin x)/x + cos x ln x => du/dx = x^(sin x)[ (sin x)/x + cos x ln x ].\nFor v: ln v = x ln(sin x) => (1/v) dv/dx = ln(sin x) + x cot x => dv/dx = (sin x)^x[ ln(sin x) + x cot x ].\nHence dy/dx = x^(sin x)[(sin x)/x + cos x ln x] + (sin x)^x[ln(sin x) + x cot x].",
        "stepMarking": [
          {
            "step": "Split y = u + v (DO NOT take log directly on sum!)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute du/dx via logarithmic differentiation",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dv/dx & combine",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "CRITICAL: log(u + v) ≠ log u + log v! Always differentiate u and v separately!",
        "commonPitfall": "Taking log(y) = log(x^sinx) + log((sinx)^x) directly!"
      },
      {
        "id": "cbse-c12-math-2024-comp-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: King's Property ∫₀^a f(x)dx",
        "questionText": "Evaluate: ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx.",
        "modelAnswer": "Let I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx ...(1)\nUsing P₄: ∫₀^a f(x)dx = ∫₀^a f(a - x)dx with a = π/2:\nI = ∫₀^(π/2) [ √(cos x) / (√(cos x) + √(sin x)) ] dx ...(2)\nAdding (1) and (2): 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.",
        "stepMarking": [
          {
            "step": "Apply King's property f(π/2 - x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Add (1) + (2) -> 2I = π/2 -> I = π/4",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "State the property used explicitly (∫₀^a f(x)dx = ∫₀^a f(a-x)dx).",
        "commonPitfall": "Forgetting the factor 2 in 2I = π/2 and writing π/2."
      },
      {
        "id": "cbse-c12-math-2024-comp-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: Integration by Parts & Partial Fractions",
        "questionText": "Evaluate: ∫ [ x / ((x - 1)(x - 2)) ] dx.",
        "modelAnswer": "Using partial fractions: x / [(x - 1)(x - 2)] = A/(x - 1) + B/(x - 2) => x = A(x - 2) + B(x - 1).\nPut x = 1: 1 = -A => A = -1.\nPut x = 2: 2 = B => B = 2.\nIntegral = ∫ [ -1/(x - 1) + 2/(x - 2) ] dx = 2 log|x - 2| - log|x - 1| + C = log|(x - 2)² / (x - 1)| + C.",
        "stepMarking": [
          {
            "step": "Partial fractions A = -1, B = 2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate -> log|(x-2)²/(x-1)| + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check A + B = 1 and -2A - B = 0 before integrating.",
        "commonPitfall": "Sign mistake in A = -1."
      },
      {
        "id": "cbse-c12-math-2024-comp-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Differential Equations: Linear DE dy/dx + Py = Q",
        "questionText": "Solve the linear differential equation: (1 + x²) dy/dx + 2xy = 4x².",
        "modelAnswer": "Divide by (1 + x²): dy/dx + [2x / (1 + x²)] y = 4x² / (1 + x²).\nHere P = 2x/(1 + x²), Q = 4x²/(1 + x²).\nIntegrating Factor IF = e^(∫ 2x/(1+x²) dx) = e^(ln(1+x²)) = 1 + x².\nSolution: y · (1 + x²) = ∫ [4x² / (1 + x²)] (1 + x²) dx = ∫ 4x² dx = (4/3)x³ + C.\nHence y = [ (4/3)x³ + C ] / (1 + x²).",
        "stepMarking": [
          {
            "step": "Standard form dy/dx + Py = Q",
            "marks": "0.5 Mark"
          },
          {
            "step": "Integrating Factor IF = 1 + x²",
            "marks": "1 Mark"
          },
          {
            "step": "Final solution y(1+x²) = 4x³/3 + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check whether leading dy/dx coefficient is 1 before writing P and Q!",
        "commonPitfall": "Forgetting to divide Q (4x²) by (1 + x²) as well."
      },
      {
        "id": "cbse-c12-math-2024-comp-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Derivatives: Maxima/Minima Cylinder/Cone Inscribed Word Problem",
        "questionText": "Show that the right circular cylinder of given surface area and maximum volume is such that its height is equal to the diameter of its base.",
        "modelAnswer": "Let radius = r, height = h, fixed total surface area S = 2πr² + 2πrh => h = (S - 2πr²) / (2πr).\nVolume V = πr² h = πr² [ (S - 2πr²) / (2πr) ] = (Sr)/2 - πr³.\nDifferentiate w.r.t. r:\ndV/dr = S/2 - 3πr² = 0 => S = 6πr².\nd²V/dr² = -6πr < 0 => Volume is MAXIMUM.\nSubstitute S = 6πr² back into S = 2πr² + 2πrh:\n6πr² = 2πr² + 2πrh => 4πr² = 2πrh => h = 2r (diameter of base).",
        "stepMarking": [
          {
            "step": "Express h in terms of S & r -> V(r) = Sr/2 - πr³",
            "marks": "1.5 Marks"
          },
          {
            "step": "dV/dr = 0 -> S = 6πr²",
            "marks": "1.5 Marks"
          },
          {
            "step": "Second derivative < 0 & deduce h = 2r",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never skip the second-derivative check d²V/dr² < 0 — CBSE awards a full mark for proving maximum!",
        "commonPitfall": "Using CSA = 2πrh instead of Total Surface Area 2πr² + 2πrh."
      },
      {
        "id": "cbse-c12-math-2024-comp-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Matrices: System of Linear Equations Using Inverse Matrix A⁻¹",
        "questionText": "If A = [[2, -3, 5], [3, 2, -4], [1, 1, -2]], find A⁻¹. Using A⁻¹, solve the system of linear equations:\n2x - 3y + 5z = 11\n3x + 2y - 4z = -5\nx + y - 2z = -3",
        "modelAnswer": "|A| = 2(-4 + 4) - (-3)(-6 + 4) + 5(3 - 2) = 0 + 3(-2) + 5(1) = -6 + 5 = -1 ≠ 0 (non-singular, A⁻¹ exists).\nCofactors of A:\nC₁₁=0, C₁₂=2, C₁₃=1\nC₂₁=-1, C₂₂=-9, C₂₃=-5\nC₃₁=2, C₃₂=23, C₃₃=13.\nadj A = Transpose of cofactor matrix = [[0, -1, 2], [2, -9, 23], [1, -5, 13]].\nA⁻¹ = (1/-1) adj A = [[0, 1, -2], [-2, 9, -23], [-1, 5, -13]].\nSolution X = A⁻¹ B where B = [11, -5, -3]^T:\nx = 0(11) + 1(-5) - 2(-3) = 1\ny = -2(11) + 9(-5) - 23(-3) = -22 - 45 + 69 = 2\nz = -1(11) + 5(-5) - 13(-3) = -11 - 25 + 39 = 3.\nHence x = 1, y = 2, z = 3.",
        "stepMarking": [
          {
            "step": "|A| = -1 ≠ 0",
            "marks": "1 Mark"
          },
          {
            "step": "All 9 cofactors & adj A",
            "marks": "2 Marks"
          },
          {
            "step": "A⁻¹ and X = A⁻¹ B -> x=1, y=2, z=3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Plug (1, 2, 3) back into ALL 3 equations right away to verify 100% accuracy!",
        "commonPitfall": "Forgetting to take Transpose of the cofactor matrix for adj A."
      },
      {
        "id": "cbse-c12-math-2024-comp-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Integrals: Area Bounded by Circle & Line / Parabola",
        "questionText": "Using integration, find the area of the region in the first quadrant enclosed by the x-axis, the line y = x, and the circle x² + y² = 32.",
        "modelAnswer": "Intersection of y = x and x² + y² = 32: 2x² = 32 => x² = 16 => x = 4 (in first quadrant) -> point (4, 4).\nCircle radius r = √32 = 4√2 -> meets x-axis at (4√2, 0).\nSplit area at x = 4:\nA = ∫₀⁴ x dx + ∫₄^(4√2) √(32 - x²) dx\n= [x²/2]₀⁴ + [ (x/2)√(32 - x²) + (32/2) sin⁻¹(x / (4√2)) ]₄^(4√2)\n= 8 + [ (0 + 16 · π/2) - (2√16 + 16 sin⁻¹(1/√2)) ]\n= 8 + [ 8π - (8 + 16 · π/4) ] = 8 + 8π - 8 - 4π = 4π sq. units.",
        "stepMarking": [
          {
            "step": "Sketch figure & find intersection (4, 4) and (4√2, 0)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Split integral ∫₀⁴ x dx + ∫₄^(4√2) √(32-x²) dx",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate standard √(a²-x²) integral -> 4π sq. units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Quick geometric sanity check: θ = 45° (1/8 of full circle area πr² = 32π) => 32π / 8 = 4π!",
        "commonPitfall": "Integrating √(32 - x²) from 0 to 4√2 without splitting at x = 4."
      },
      {
        "id": "cbse-c12-math-2024-comp-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "3D Geometry: Shortest Distance Between Skew Lines",
        "questionText": "Find the shortest distance between the skew lines:\nr = (î + 2ĵ + k̂) + λ(î - ĵ + k̂)\nr = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).",
        "modelAnswer": "Here a₁ = î + 2ĵ + k̂, b₁ = î - ĵ + k̂;\na₂ = 2î - ĵ - k̂, b₂ = 2î + ĵ + 2k̂.\na₂ - a₁ = î - 3ĵ - 2k̂.\nb₁ × b₂ = | î ĵ k̂ ; 1 -1 1 ; 2 1 2 | = î(-2 - 1) - ĵ(2 - 2) + k̂(1 + 2) = -3î + 0ĵ + 3k̂.\n|b₁ × b₂| = √((-3)² + 0 + 3²) = 3√2.\nDot product: (b₁ × b₂) · (a₂ - a₁) = (-3)(1) + 0(-3) + 3(-2) = -3 - 6 = -9.\nShortest distance d = | -9 | / (3√2) = 3 / √2 = (3√2)/2 units.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ and b₁ × b₂",
            "marks": "2 Marks"
          },
          {
            "step": "Magnitude |b₁ × b₂| = 3√2",
            "marks": "1 Mark"
          },
          {
            "step": "Formula |(b₁×b₂)·(a₂-a₁)| / |b₁×b₂| -> 3/√2 units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "If b₁ and b₂ are parallel (b₁ × b₂ = 0), use parallel lines distance |(a₂ - a₁) × b| / |b|!",
        "commonPitfall": "Omitting absolute value around dot product and reporting negative distance."
      },
      {
        "id": "cbse-c12-math-2024-comp-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Maxima / Minima Applied Geometry (Open Box)",
        "questionText": "Read the case and answer:\nA square piece of tin of side 18 cm is to be made into a box without top by cutting a square of side x cm from each corner and folding up the flaps.\n\n(a) Write the dimensions and Volume V(x) of the open box in terms of x. (1M)\n(b) Find the value of x that maximises the volume using derivatives. (2M)\n(c) Calculate the maximum possible volume of the box. (1M)",
        "modelAnswer": "(a) Base side = (18 - 2x) cm, height = x cm (0 < x < 9). Volume V(x) = x(18 - 2x)².\n(b) V'(x) = (18 - 2x)² + x · 2(18 - 2x)(-2) = (18 - 2x)(18 - 2x - 4x) = (18 - 2x)(18 - 6x) = 0 => x = 9 (rejected) or x = 3 cm.\nV''(x) at x = 3 is -6(18 - 12) + ... = -72 < 0 => maximum at x = 3 cm.\n(c) V_max = 3 × (18 - 6)² = 3 × 144 = 432 cm³.",
        "stepMarking": [
          {
            "step": "(a) V(x) = x(18 - 2x)²",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Derivative check -> x = 3 cm",
            "marks": "2 Marks"
          },
          {
            "step": "(c) V_max = 432 cm³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Side cut from EACH corner removes 2x from total length 18 cm!",
        "commonPitfall": "Writing base side as (18 - x) instead of (18 - 2x)."
      },
      {
        "id": "cbse-c12-math-2024-comp-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Bayes' Theorem (Diagnostic Test / Factory Defect)",
        "questionText": "Read the case and answer:\nIn a bolt factory, Machines A, B, and C manufacture respectively 25%, 35%, and 40% of total output. Of their outputs, 5%, 4%, and 2% respectively are defective bolts. A bolt is drawn at random from the product and is found to be defective.\n\n(a) Write the prior probabilities P(A), P(B), P(C) and conditional defect probabilities. (1M)\n(b) Find the total probability P(D) that a randomly selected bolt is defective. (1.5M)\n(c) Using Bayes' theorem, find the probability that the defective bolt was manufactured by Machine B. (1.5M)",
        "modelAnswer": "(a) P(A) = 0.25, P(B) = 0.35, P(C) = 0.40; P(D|A) = 0.05, P(D|B) = 0.04, P(D|C) = 0.02.\n(b) P(D) = 0.25(0.05) + 0.35(0.04) + 0.40(0.02) = 0.0125 + 0.0140 + 0.0080 = 0.0345.\n(c) P(B|D) = [0.35 × 0.04] / 0.0345 = 0.0140 / 0.0345 = 140 / 345 = 28 / 69.",
        "stepMarking": [
          {
            "step": "(a) Prior & conditional probabilities",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total probability P(D) = 0.0345",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Bayes formula -> 28/69",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Simplify numerator and denominator fractions cleanly (divide by 5 -> 28/69).",
        "commonPitfall": "Leaving out P(A), P(B), P(C) weights in total probability."
      },
      {
        "id": "cbse-c12-math-2024-comp-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Relations & Bijections (One-One & Onto)",
        "questionText": "Read the case and answer:\nConsider a function f : ℝ - {3} → ℝ - {1} defined by f(x) = (x - 2) / (x - 3).\n\n(a) Show that f is one-one (injective). (1.5M)\n(b) Show that f is onto (surjective). (1.5M)\n(c) Find the inverse function f⁻¹(y). (1M)",
        "modelAnswer": "(a) Let f(x₁) = f(x₂) => (x₁ - 2)/(x₁ - 3) = (x₂ - 2)/(x₂ - 3).\nCross-multiplying: x₁x₂ - 3x₁ - 2x₂ + 6 = x₁x₂ - 2x₁ - 3x₂ + 6 => -x₁ = -x₂ => x₁ = x₂. Hence f is one-one.\n(b) Let y ∈ ℝ - {1}. Set y = (x - 2)/(x - 3) => xy - 3y = x - 2 => x(y - 1) = 3y - 2 => x = (3y - 2)/(y - 1), which is well-defined and ≠ 3 (since (3y-2)/(y-1) = 3 gives -2 = -3, impossible!). Thus every y has preimage -> onto.\n(c) f⁻¹(y) = (3y - 2) / (y - 1).",
        "stepMarking": [
          {
            "step": "(a) Algebraic proof x₁ = x₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Express x = (3y-2)/(y-1) and check domain",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Inverse expression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify x ≠ 3 when proving onto for fractional rational functions!",
        "commonPitfall": "Claiming onto without checking pre-image belongs to domain ℝ - {3}."
      }
    ]
  },
  {
    "id": "cbse-c12-math-2022-sqp",
    "title": "CBSE Class 12 Mathematics Official Sample Paper (2022-23)",
    "subject": "Mathematics",
    "targetClass": "Class 12",
    "year": 2022,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "SQP-2022-23/041",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper contains 38 questions divided into 5 sections A, B, C, D, and E (Total 80 Marks).",
      "Section A: Q1 to Q18 MCQs and Q19–Q20 Assertion-Reason carrying 1 mark each.",
      "Section B: Q21 to Q25 Very Short Answer questions carrying 2 marks each.",
      "Section C: Q26 to Q31 Short Answer questions carrying 3 marks each.",
      "Section D: Q32 to Q35 Long Answer questions carrying 5 marks each.",
      "Section E: Q36 to Q38 Case-Based integrated questions carrying 4 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-math-2022-sqp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Derivatives: Increasing / Decreasing Intervals",
        "questionText": "The function f(x) = x² - 4x + 6 is strictly increasing in the interval:",
        "options": [
          "A) (-∞, 2)",
          "B) (2, ∞)",
          "C) (-∞, ∞)",
          "D) (0, 2)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. f'(x) = 2x - 4 > 0 => x > 2 => strictly increasing on (2, ∞).",
        "stepMarking": [
          {
            "step": "f'(x) = 2x - 4 > 0 -> (2, ∞)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strictly increasing requires f'(x) > 0 (open interval).",
        "commonPitfall": "Choosing (-∞, 2) where f'(x) < 0."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: Symmetric Odd Function Property",
        "questionText": "Evaluate the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx:",
        "options": [
          "A) 0",
          "B) π/2",
          "C) π",
          "D) 2π"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. x³, x cos x, and tan⁵ x are ALL odd functions (f(-x) = -f(x)), so their integrals over [-π/2, π/2] vanish! Remaining integral = ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.",
        "stepMarking": [
          {
            "step": "Odd terms vanish -> ∫ 1 dx = π",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check parity of EACH term separately instead of assuming the whole integrand is odd.",
        "commonPitfall": "Missing the constant \"+1\" (which is EVEN) and marking 0!"
      },
      {
        "id": "cbse-c12-math-2022-sqp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: e^x [f(x) + f'(x)] Identity",
        "questionText": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "A) e^x cos x + C",
          "B) e^x sin x + C",
          "C) -e^x sin x + C",
          "D) e^x (sin x - cos x) + C"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x and f'(x) = cos x -> e^x sin x + C.",
        "stepMarking": [
          {
            "step": "Identify f(x) = sin x, f'(x) = cos x -> e^x sin x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify by differentiating e^x sin x = e^x(sin x + cos x).",
        "commonPitfall": "Choosing e^x cos x (whose derivative has -sin x)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Differential Equations: Order and Degree",
        "questionText": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²) are respectively:",
        "options": [
          "A) 2 and 3",
          "B) 2 and 2",
          "C) 1 and 3",
          "D) 2 and not defined"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Squaring both sides removes fractional exponent 3/2: [1 + (dy/dx)²]³ = k² (d²y/dx²)². Highest derivative is d²y/dx² (order = 2) with highest power = 2 (degree = 2).",
        "stepMarking": [
          {
            "step": "Square both sides -> order 2, degree 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always clear fractional powers/radicals of derivatives before reading the degree!",
        "commonPitfall": "Reading power 3 on (dy/dx)² instead of highest-order derivative d²y/dx²."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Continuity: Differentiability Implies Continuity",
        "questionText": "Assertion (A): Every differentiable function is continuous, but every continuous function is not necessarily differentiable.\nReason (R): f(x) = |x| is continuous at x = 0 yet not differentiable at x = 0 (LHD = -1 ≠ RHD = +1).",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Differentiability guarantees continuity, while |x| has a sharp corner at x = 0 (LHD = -1 ≠ RHD = +1), proving continuity alone does not guarantee differentiability.",
        "stepMarking": [
          {
            "step": "Option (A) with |x| counterexample",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Corner points on continuous curves lack unique tangents -> non-differentiable.",
        "commonPitfall": "Saying |x| is discontinuous at x = 0."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Perpendicular Vectors Condition",
        "questionText": "Assertion (A): If |a + b| = |a - b| for non-zero vectors a and b, then vectors a and b are perpendicular.\nReason (R): Squaring gives 4 (a · b) = 0 => a · b = 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |a + b|² = |a - b|² => 4(a·b) = 0 => a ⊥ b.",
        "stepMarking": [
          {
            "step": "Option (A) proving a · b = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use a · a = |a|² cleanly in vector magnitude proofs.",
        "commonPitfall": "Confusing perpendicular condition (a·b = 0) with parallel condition (a×b = 0)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Integrals: Integration by Substitution",
        "questionText": "Evaluate: ∫ [ 1 / (x - √x) ] dx.",
        "modelAnswer": "Factor √x in denominator: ∫ [ 1 / (√x (√x - 1)) ] dx.\nSubstitute t = √x - 1 => dt = (1 / (2√x)) dx => dx / √x = 2 dt.\nIntegral = ∫ (2 / t) dt = 2 log |t| + C = 2 log |√x - 1| + C.",
        "stepMarking": [
          {
            "step": "Factor √x & substitute t = √x - 1",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> 2 log|√x - 1| + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute back to original variable x and include +C!",
        "commonPitfall": "Forgetting the factor of 2 from d(√x) = dx/(2√x)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Vectors: Unit Vector Perpendicular to Two Vectors",
        "questionText": "Find a unit vector perpendicular to both vectors a = 3î + ĵ + 2k̂ and b = 2î - 2ĵ + 4k̂.",
        "modelAnswer": "a × b = | î  ĵ  k̂ ; 3 1 2 ; 2 -2 4 | = î(4 + 4) - ĵ(12 - 4) + k̂(-6 - 2) = 8î - 8ĵ - 8k̂.\n|a × b| = √(8² + (-8)² + (-8)²) = 8√3.\nUnit vector n̂ = ± (a × b) / |a × b| = ± (1/√3)(î - ĵ - k̂).",
        "stepMarking": [
          {
            "step": "Cross product a × b = 8î - 8ĵ - 8k̂",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 8√3 -> ±(î - ĵ - k̂)/√3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include ± when question asks \"a unit vector perpendicular to both\", since both +n̂ and -n̂ are valid.",
        "commonPitfall": "Sign error on the ĵ cofactor in 3×3 determinant."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Differential Equations: General Solution via Variable Separable",
        "questionText": "Find the general solution of the differential equation: dy/dx = (1 + y²) / (1 + x²).",
        "modelAnswer": "Separating variables:\ndy / (1 + y²) = dx / (1 + x²).\nIntegrating both sides:\ntan⁻¹ y = tan⁻¹ x + C (or tan⁻¹( (y - x)/(1 + xy) ) = C => y - x = k(1 + xy)).",
        "stepMarking": [
          {
            "step": "Separate variables dy/(1+y²) = dx/(1+x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> tan⁻¹ y = tan⁻¹ x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify constant C is added immediately upon integrating.",
        "commonPitfall": "Leaving without integrating or omitting +C."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Inverse Trigonometry: Simplifying tan⁻¹ Formula",
        "questionText": "Express tan⁻¹[ cos x / (1 - sin x) ], where -3π/2 < x < π/2, in its simplest form.",
        "modelAnswer": "Write cos x = sin(π/2 - x) and sin x = cos(π/2 - x) (or use half angles cos²(x/2)-sin²(x/2) over (cos x/2 - sin x/2)²):\n[cos²(x/2) - sin²(x/2)] / [cos(x/2) - sin(x/2)]² = [cos(x/2) + sin(x/2)] / [cos(x/2) - sin(x/2)]\nDivide top and bottom by cos(x/2):\n= [1 + tan(x/2)] / [1 - tan(x/2)] = tan(π/4 + x/2).\nHence tan⁻¹(tan(π/4 + x/2)) = π/4 + x/2 (since -π/2 < π/4 + x/2 < π/2).",
        "stepMarking": [
          {
            "step": "Half-angle factorisation to [1 + tan(x/2)]/[1 - tan(x/2)]",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify to π/4 + x/2 within principal domain",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Replacing 1 = cos²(x/2) + sin²(x/2) converts 1 ± sin x directly into perfect squares!",
        "commonPitfall": "Using cos(π/2 + x) improperly without verifying principal domain (-π/2, π/2)."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Applications of Derivatives: Rate of Change (Sphere/Circle)",
        "questionText": "The volume of a cube is increasing at the rate of 8 cm³/s. How fast is the surface area increasing when the length of an edge is 12 cm?",
        "modelAnswer": "Let edge = x. V = x³ => dV/dt = 3x² (dx/dt) = 8 => dx/dt = 8 / (3x²).\nSurface area S = 6x² => dS/dt = 12x (dx/dt) = 12x × [8 / (3x²)] = 32 / x.\nAt x = 12 cm: dS/dt = 32 / 12 = 8/3 cm²/s ≈ 2.67 cm²/s.",
        "stepMarking": [
          {
            "step": "Differentiate V=x³ -> dx/dt = 8/(3x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dS/dt = 32/x = 8/3 cm²/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Substitute x = 12 ONLY AFTER differentiating!",
        "commonPitfall": "Writing unit cm/s instead of cm²/s."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Continuity: Finding Unknowns k for Continuity at Boundary",
        "questionText": "Find the values of a and b such that the function f(x) defined below is continuous everywhere:\nf(x) = 5 if x ≤ 2;  ax + b if 2 < x < 10;  21 if x ≥ 10.",
        "modelAnswer": "For continuity at x = 2: LHL = f(2) = 5 = RHL = lim(x→2⁺)(ax + b) = 2a + b => 2a + b = 5 ...(1)\nFor continuity at x = 10: LHL = lim(x→10⁻)(ax + b) = 10a + b = f(10) = 21 => 10a + b = 21 ...(2)\nSubtracting (1) from (2): 8a = 16 => a = 2.\nFrom (1): 2(2) + b = 5 => b = 1.\nHence a = 2, b = 1.",
        "stepMarking": [
          {
            "step": "Continuity at x=2 -> 2a + b = 5",
            "marks": "1 Mark"
          },
          {
            "step": "Continuity at x=10 -> 10a + b = 21",
            "marks": "1 Mark"
          },
          {
            "step": "Solve simultaneously -> a = 2, b = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write LHL = RHL = f(c) notation explicitly for full board marks.",
        "commonPitfall": "Solving only one boundary point."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Differentiation: Logarithmic Differentiation (x^cos x + (cos x)^x)",
        "questionText": "Differentiate y = x^(sin x) + (sin x)^x with respect to x.",
        "modelAnswer": "Let u = x^(sin x) and v = (sin x)^x => y = u + v => dy/dx = du/dx + dv/dx.\nFor u: ln u = sin x ln x => (1/u) du/dx = (sin x)/x + cos x ln x => du/dx = x^(sin x)[ (sin x)/x + cos x ln x ].\nFor v: ln v = x ln(sin x) => (1/v) dv/dx = ln(sin x) + x cot x => dv/dx = (sin x)^x[ ln(sin x) + x cot x ].\nHence dy/dx = x^(sin x)[(sin x)/x + cos x ln x] + (sin x)^x[ln(sin x) + x cot x].",
        "stepMarking": [
          {
            "step": "Split y = u + v (DO NOT take log directly on sum!)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute du/dx via logarithmic differentiation",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dv/dx & combine",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "CRITICAL: log(u + v) ≠ log u + log v! Always differentiate u and v separately!",
        "commonPitfall": "Taking log(y) = log(x^sinx) + log((sinx)^x) directly!"
      },
      {
        "id": "cbse-c12-math-2022-sqp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: King's Property ∫₀^a f(x)dx",
        "questionText": "Evaluate: ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx.",
        "modelAnswer": "Let I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx ...(1)\nUsing P₄: ∫₀^a f(x)dx = ∫₀^a f(a - x)dx with a = π/2:\nI = ∫₀^(π/2) [ √(cos x) / (√(cos x) + √(sin x)) ] dx ...(2)\nAdding (1) and (2): 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.",
        "stepMarking": [
          {
            "step": "Apply King's property f(π/2 - x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Add (1) + (2) -> 2I = π/2 -> I = π/4",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "State the property used explicitly (∫₀^a f(x)dx = ∫₀^a f(a-x)dx).",
        "commonPitfall": "Forgetting the factor 2 in 2I = π/2 and writing π/2."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: Integration by Parts & Partial Fractions",
        "questionText": "Evaluate: ∫ [ x / ((x - 1)(x - 2)) ] dx.",
        "modelAnswer": "Using partial fractions: x / [(x - 1)(x - 2)] = A/(x - 1) + B/(x - 2) => x = A(x - 2) + B(x - 1).\nPut x = 1: 1 = -A => A = -1.\nPut x = 2: 2 = B => B = 2.\nIntegral = ∫ [ -1/(x - 1) + 2/(x - 2) ] dx = 2 log|x - 2| - log|x - 1| + C = log|(x - 2)² / (x - 1)| + C.",
        "stepMarking": [
          {
            "step": "Partial fractions A = -1, B = 2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate -> log|(x-2)²/(x-1)| + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check A + B = 1 and -2A - B = 0 before integrating.",
        "commonPitfall": "Sign mistake in A = -1."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Differential Equations: Linear DE dy/dx + Py = Q",
        "questionText": "Solve the linear differential equation: (1 + x²) dy/dx + 2xy = 4x².",
        "modelAnswer": "Divide by (1 + x²): dy/dx + [2x / (1 + x²)] y = 4x² / (1 + x²).\nHere P = 2x/(1 + x²), Q = 4x²/(1 + x²).\nIntegrating Factor IF = e^(∫ 2x/(1+x²) dx) = e^(ln(1+x²)) = 1 + x².\nSolution: y · (1 + x²) = ∫ [4x² / (1 + x²)] (1 + x²) dx = ∫ 4x² dx = (4/3)x³ + C.\nHence y = [ (4/3)x³ + C ] / (1 + x²).",
        "stepMarking": [
          {
            "step": "Standard form dy/dx + Py = Q",
            "marks": "0.5 Mark"
          },
          {
            "step": "Integrating Factor IF = 1 + x²",
            "marks": "1 Mark"
          },
          {
            "step": "Final solution y(1+x²) = 4x³/3 + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check whether leading dy/dx coefficient is 1 before writing P and Q!",
        "commonPitfall": "Forgetting to divide Q (4x²) by (1 + x²) as well."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Linear Programming: Graphical Corner Point Maximization",
        "questionText": "Solve the following LPP graphically: Maximize Z = 4x + y subject to constraints x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
        "modelAnswer": "Boundary lines:\n• L₁: x + y = 50 passes through (50, 0) & (0, 50).\n• L₂: 3x + y = 90 passes through (30, 0) & (0, 90).\nIntersection of L₁ and L₂: Subtracting -> 2x = 40 => x = 20, y = 30.\nBounded feasible region corner points & Z = 4x + y:\n• O(0, 0) -> Z = 0\n• A(30, 0) -> Z = 120 (MAXIMUM)\n• B(20, 30) -> Z = 80 + 30 = 110\n• C(0, 50) -> Z = 50.\nMaximum value of Z is 120 at (30, 0).",
        "stepMarking": [
          {
            "step": "Intersection (20, 30) & 4 feasible vertices",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate Z at all corner points -> Max Z = 120 at (30, 0)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Shade the feasible region clearly and show corner table.",
        "commonPitfall": "Using wrong x-intercept (50, 0) instead of (30, 0) in feasible region."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Matrices: System of Linear Equations Using Inverse Matrix A⁻¹",
        "questionText": "If A = [[2, -3, 5], [3, 2, -4], [1, 1, -2]], find A⁻¹. Using A⁻¹, solve the system of linear equations:\n2x - 3y + 5z = 11\n3x + 2y - 4z = -5\nx + y - 2z = -3",
        "modelAnswer": "|A| = 2(-4 + 4) - (-3)(-6 + 4) + 5(3 - 2) = 0 + 3(-2) + 5(1) = -6 + 5 = -1 ≠ 0 (non-singular, A⁻¹ exists).\nCofactors of A:\nC₁₁=0, C₁₂=2, C₁₃=1\nC₂₁=-1, C₂₂=-9, C₂₃=-5\nC₃₁=2, C₃₂=23, C₃₃=13.\nadj A = Transpose of cofactor matrix = [[0, -1, 2], [2, -9, 23], [1, -5, 13]].\nA⁻¹ = (1/-1) adj A = [[0, 1, -2], [-2, 9, -23], [-1, 5, -13]].\nSolution X = A⁻¹ B where B = [11, -5, -3]^T:\nx = 0(11) + 1(-5) - 2(-3) = 1\ny = -2(11) + 9(-5) - 23(-3) = -22 - 45 + 69 = 2\nz = -1(11) + 5(-5) - 13(-3) = -11 - 25 + 39 = 3.\nHence x = 1, y = 2, z = 3.",
        "stepMarking": [
          {
            "step": "|A| = -1 ≠ 0",
            "marks": "1 Mark"
          },
          {
            "step": "All 9 cofactors & adj A",
            "marks": "2 Marks"
          },
          {
            "step": "A⁻¹ and X = A⁻¹ B -> x=1, y=2, z=3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Plug (1, 2, 3) back into ALL 3 equations right away to verify 100% accuracy!",
        "commonPitfall": "Forgetting to take Transpose of the cofactor matrix for adj A."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Integrals: Area Bounded by Circle & Line / Parabola",
        "questionText": "Using integration, find the area of the region in the first quadrant enclosed by the x-axis, the line y = x, and the circle x² + y² = 32.",
        "modelAnswer": "Intersection of y = x and x² + y² = 32: 2x² = 32 => x² = 16 => x = 4 (in first quadrant) -> point (4, 4).\nCircle radius r = √32 = 4√2 -> meets x-axis at (4√2, 0).\nSplit area at x = 4:\nA = ∫₀⁴ x dx + ∫₄^(4√2) √(32 - x²) dx\n= [x²/2]₀⁴ + [ (x/2)√(32 - x²) + (32/2) sin⁻¹(x / (4√2)) ]₄^(4√2)\n= 8 + [ (0 + 16 · π/2) - (2√16 + 16 sin⁻¹(1/√2)) ]\n= 8 + [ 8π - (8 + 16 · π/4) ] = 8 + 8π - 8 - 4π = 4π sq. units.",
        "stepMarking": [
          {
            "step": "Sketch figure & find intersection (4, 4) and (4√2, 0)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Split integral ∫₀⁴ x dx + ∫₄^(4√2) √(32-x²) dx",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate standard √(a²-x²) integral -> 4π sq. units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Quick geometric sanity check: θ = 45° (1/8 of full circle area πr² = 32π) => 32π / 8 = 4π!",
        "commonPitfall": "Integrating √(32 - x²) from 0 to 4√2 without splitting at x = 4."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "3D Geometry: Shortest Distance Between Skew Lines",
        "questionText": "Find the shortest distance between the skew lines:\nr = (î + 2ĵ + k̂) + λ(î - ĵ + k̂)\nr = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).",
        "modelAnswer": "Here a₁ = î + 2ĵ + k̂, b₁ = î - ĵ + k̂;\na₂ = 2î - ĵ - k̂, b₂ = 2î + ĵ + 2k̂.\na₂ - a₁ = î - 3ĵ - 2k̂.\nb₁ × b₂ = | î ĵ k̂ ; 1 -1 1 ; 2 1 2 | = î(-2 - 1) - ĵ(2 - 2) + k̂(1 + 2) = -3î + 0ĵ + 3k̂.\n|b₁ × b₂| = √((-3)² + 0 + 3²) = 3√2.\nDot product: (b₁ × b₂) · (a₂ - a₁) = (-3)(1) + 0(-3) + 3(-2) = -3 - 6 = -9.\nShortest distance d = | -9 | / (3√2) = 3 / √2 = (3√2)/2 units.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ and b₁ × b₂",
            "marks": "2 Marks"
          },
          {
            "step": "Magnitude |b₁ × b₂| = 3√2",
            "marks": "1 Mark"
          },
          {
            "step": "Formula |(b₁×b₂)·(a₂-a₁)| / |b₁×b₂| -> 3/√2 units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "If b₁ and b₂ are parallel (b₁ × b₂ = 0), use parallel lines distance |(a₂ - a₁) × b| / |b|!",
        "commonPitfall": "Omitting absolute value around dot product and reporting negative distance."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Derivatives: Maxima/Minima Cylinder/Cone Inscribed Word Problem",
        "questionText": "Show that the right circular cylinder of given surface area and maximum volume is such that its height is equal to the diameter of its base.",
        "modelAnswer": "Let radius = r, height = h, fixed total surface area S = 2πr² + 2πrh => h = (S - 2πr²) / (2πr).\nVolume V = πr² h = πr² [ (S - 2πr²) / (2πr) ] = (Sr)/2 - πr³.\nDifferentiate w.r.t. r:\ndV/dr = S/2 - 3πr² = 0 => S = 6πr².\nd²V/dr² = -6πr < 0 => Volume is MAXIMUM.\nSubstitute S = 6πr² back into S = 2πr² + 2πrh:\n6πr² = 2πr² + 2πrh => 4πr² = 2πrh => h = 2r (diameter of base).",
        "stepMarking": [
          {
            "step": "Express h in terms of S & r -> V(r) = Sr/2 - πr³",
            "marks": "1.5 Marks"
          },
          {
            "step": "dV/dr = 0 -> S = 6πr²",
            "marks": "1.5 Marks"
          },
          {
            "step": "Second derivative < 0 & deduce h = 2r",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never skip the second-derivative check d²V/dr² < 0 — CBSE awards a full mark for proving maximum!",
        "commonPitfall": "Using CSA = 2πrh instead of Total Surface Area 2πr² + 2πrh."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Bayes' Theorem (Diagnostic Test / Factory Defect)",
        "questionText": "Read the case and answer:\nIn a bolt factory, Machines A, B, and C manufacture respectively 25%, 35%, and 40% of total output. Of their outputs, 5%, 4%, and 2% respectively are defective bolts. A bolt is drawn at random from the product and is found to be defective.\n\n(a) Write the prior probabilities P(A), P(B), P(C) and conditional defect probabilities. (1M)\n(b) Find the total probability P(D) that a randomly selected bolt is defective. (1.5M)\n(c) Using Bayes' theorem, find the probability that the defective bolt was manufactured by Machine B. (1.5M)",
        "modelAnswer": "(a) P(A) = 0.25, P(B) = 0.35, P(C) = 0.40; P(D|A) = 0.05, P(D|B) = 0.04, P(D|C) = 0.02.\n(b) P(D) = 0.25(0.05) + 0.35(0.04) + 0.40(0.02) = 0.0125 + 0.0140 + 0.0080 = 0.0345.\n(c) P(B|D) = [0.35 × 0.04] / 0.0345 = 0.0140 / 0.0345 = 140 / 345 = 28 / 69.",
        "stepMarking": [
          {
            "step": "(a) Prior & conditional probabilities",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total probability P(D) = 0.0345",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Bayes formula -> 28/69",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Simplify numerator and denominator fractions cleanly (divide by 5 -> 28/69).",
        "commonPitfall": "Leaving out P(A), P(B), P(C) weights in total probability."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Relations & Bijections (One-One & Onto)",
        "questionText": "Read the case and answer:\nConsider a function f : ℝ - {3} → ℝ - {1} defined by f(x) = (x - 2) / (x - 3).\n\n(a) Show that f is one-one (injective). (1.5M)\n(b) Show that f is onto (surjective). (1.5M)\n(c) Find the inverse function f⁻¹(y). (1M)",
        "modelAnswer": "(a) Let f(x₁) = f(x₂) => (x₁ - 2)/(x₁ - 3) = (x₂ - 2)/(x₂ - 3).\nCross-multiplying: x₁x₂ - 3x₁ - 2x₂ + 6 = x₁x₂ - 2x₁ - 3x₂ + 6 => -x₁ = -x₂ => x₁ = x₂. Hence f is one-one.\n(b) Let y ∈ ℝ - {1}. Set y = (x - 2)/(x - 3) => xy - 3y = x - 2 => x(y - 1) = 3y - 2 => x = (3y - 2)/(y - 1), which is well-defined and ≠ 3 (since (3y-2)/(y-1) = 3 gives -2 = -3, impossible!). Thus every y has preimage -> onto.\n(c) f⁻¹(y) = (3y - 2) / (y - 1).",
        "stepMarking": [
          {
            "step": "(a) Algebraic proof x₁ = x₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Express x = (3y-2)/(y-1) and check domain",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Inverse expression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify x ≠ 3 when proving onto for fractional rational functions!",
        "commonPitfall": "Claiming onto without checking pre-image belongs to domain ℝ - {3}."
      },
      {
        "id": "cbse-c12-math-2022-sqp-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Maxima / Minima Applied Geometry (Open Box)",
        "questionText": "Read the case and answer:\nA square piece of tin of side 18 cm is to be made into a box without top by cutting a square of side x cm from each corner and folding up the flaps.\n\n(a) Write the dimensions and Volume V(x) of the open box in terms of x. (1M)\n(b) Find the value of x that maximises the volume using derivatives. (2M)\n(c) Calculate the maximum possible volume of the box. (1M)",
        "modelAnswer": "(a) Base side = (18 - 2x) cm, height = x cm (0 < x < 9). Volume V(x) = x(18 - 2x)².\n(b) V'(x) = (18 - 2x)² + x · 2(18 - 2x)(-2) = (18 - 2x)(18 - 2x - 4x) = (18 - 2x)(18 - 6x) = 0 => x = 9 (rejected) or x = 3 cm.\nV''(x) at x = 3 is -6(18 - 12) + ... = -72 < 0 => maximum at x = 3 cm.\n(c) V_max = 3 × (18 - 6)² = 3 × 144 = 432 cm³.",
        "stepMarking": [
          {
            "step": "(a) V(x) = x(18 - 2x)²",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Derivative check -> x = 3 cm",
            "marks": "2 Marks"
          },
          {
            "step": "(c) V_max = 432 cm³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Side cut from EACH corner removes 2x from total length 18 cm!",
        "commonPitfall": "Writing base side as (18 - x) instead of (18 - 2x)."
      }
    ]
  },
  {
    "id": "cbse-c12-math-2022-outside",
    "title": "CBSE Class 12 Mathematics Outside Delhi Board Paper (2022)",
    "subject": "Mathematics",
    "targetClass": "Class 12",
    "year": 2022,
    "paperType": "BOARD_EXAM",
    "paperCode": "65/3/1",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper contains 38 questions divided into 5 sections A, B, C, D, and E (Total 80 Marks).",
      "Section A: Q1 to Q18 MCQs and Q19–Q20 Assertion-Reason carrying 1 mark each.",
      "Section B: Q21 to Q25 Very Short Answer questions carrying 2 marks each.",
      "Section C: Q26 to Q31 Short Answer questions carrying 3 marks each.",
      "Section D: Q32 to Q35 Long Answer questions carrying 5 marks each.",
      "Section E: Q36 to Q38 Case-Based integrated questions carrying 4 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-math-2022-outside-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2022-outside-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2022-outside-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2022-outside-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2022-outside-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Derivatives: Increasing / Decreasing Intervals",
        "questionText": "The function f(x) = x² - 4x + 6 is strictly increasing in the interval:",
        "options": [
          "A) (-∞, 2)",
          "B) (2, ∞)",
          "C) (-∞, ∞)",
          "D) (0, 2)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. f'(x) = 2x - 4 > 0 => x > 2 => strictly increasing on (2, ∞).",
        "stepMarking": [
          {
            "step": "f'(x) = 2x - 4 > 0 -> (2, ∞)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strictly increasing requires f'(x) > 0 (open interval).",
        "commonPitfall": "Choosing (-∞, 2) where f'(x) < 0."
      },
      {
        "id": "cbse-c12-math-2022-outside-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: Symmetric Odd Function Property",
        "questionText": "Evaluate the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx:",
        "options": [
          "A) 0",
          "B) π/2",
          "C) π",
          "D) 2π"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. x³, x cos x, and tan⁵ x are ALL odd functions (f(-x) = -f(x)), so their integrals over [-π/2, π/2] vanish! Remaining integral = ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.",
        "stepMarking": [
          {
            "step": "Odd terms vanish -> ∫ 1 dx = π",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check parity of EACH term separately instead of assuming the whole integrand is odd.",
        "commonPitfall": "Missing the constant \"+1\" (which is EVEN) and marking 0!"
      },
      {
        "id": "cbse-c12-math-2022-outside-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: e^x [f(x) + f'(x)] Identity",
        "questionText": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "A) e^x cos x + C",
          "B) e^x sin x + C",
          "C) -e^x sin x + C",
          "D) e^x (sin x - cos x) + C"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x and f'(x) = cos x -> e^x sin x + C.",
        "stepMarking": [
          {
            "step": "Identify f(x) = sin x, f'(x) = cos x -> e^x sin x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify by differentiating e^x sin x = e^x(sin x + cos x).",
        "commonPitfall": "Choosing e^x cos x (whose derivative has -sin x)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Differential Equations: Order and Degree",
        "questionText": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²) are respectively:",
        "options": [
          "A) 2 and 3",
          "B) 2 and 2",
          "C) 1 and 3",
          "D) 2 and not defined"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Squaring both sides removes fractional exponent 3/2: [1 + (dy/dx)²]³ = k² (d²y/dx²)². Highest derivative is d²y/dx² (order = 2) with highest power = 2 (degree = 2).",
        "stepMarking": [
          {
            "step": "Square both sides -> order 2, degree 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always clear fractional powers/radicals of derivatives before reading the degree!",
        "commonPitfall": "Reading power 3 on (dy/dx)² instead of highest-order derivative d²y/dx²."
      },
      {
        "id": "cbse-c12-math-2022-outside-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2022-outside-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2022-outside-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2022-outside-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2022-outside-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2022-outside-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2022-outside-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2022-outside-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Perpendicular Vectors Condition",
        "questionText": "Assertion (A): If |a + b| = |a - b| for non-zero vectors a and b, then vectors a and b are perpendicular.\nReason (R): Squaring gives 4 (a · b) = 0 => a · b = 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |a + b|² = |a - b|² => 4(a·b) = 0 => a ⊥ b.",
        "stepMarking": [
          {
            "step": "Option (A) proving a · b = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use a · a = |a|² cleanly in vector magnitude proofs.",
        "commonPitfall": "Confusing perpendicular condition (a·b = 0) with parallel condition (a×b = 0)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Continuity: Differentiability Implies Continuity",
        "questionText": "Assertion (A): Every differentiable function is continuous, but every continuous function is not necessarily differentiable.\nReason (R): f(x) = |x| is continuous at x = 0 yet not differentiable at x = 0 (LHD = -1 ≠ RHD = +1).",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Differentiability guarantees continuity, while |x| has a sharp corner at x = 0 (LHD = -1 ≠ RHD = +1), proving continuity alone does not guarantee differentiability.",
        "stepMarking": [
          {
            "step": "Option (A) with |x| counterexample",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Corner points on continuous curves lack unique tangents -> non-differentiable.",
        "commonPitfall": "Saying |x| is discontinuous at x = 0."
      },
      {
        "id": "cbse-c12-math-2022-outside-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Vectors: Unit Vector Perpendicular to Two Vectors",
        "questionText": "Find a unit vector perpendicular to both vectors a = 3î + ĵ + 2k̂ and b = 2î - 2ĵ + 4k̂.",
        "modelAnswer": "a × b = | î  ĵ  k̂ ; 3 1 2 ; 2 -2 4 | = î(4 + 4) - ĵ(12 - 4) + k̂(-6 - 2) = 8î - 8ĵ - 8k̂.\n|a × b| = √(8² + (-8)² + (-8)²) = 8√3.\nUnit vector n̂ = ± (a × b) / |a × b| = ± (1/√3)(î - ĵ - k̂).",
        "stepMarking": [
          {
            "step": "Cross product a × b = 8î - 8ĵ - 8k̂",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 8√3 -> ±(î - ĵ - k̂)/√3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include ± when question asks \"a unit vector perpendicular to both\", since both +n̂ and -n̂ are valid.",
        "commonPitfall": "Sign error on the ĵ cofactor in 3×3 determinant."
      },
      {
        "id": "cbse-c12-math-2022-outside-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Differential Equations: General Solution via Variable Separable",
        "questionText": "Find the general solution of the differential equation: dy/dx = (1 + y²) / (1 + x²).",
        "modelAnswer": "Separating variables:\ndy / (1 + y²) = dx / (1 + x²).\nIntegrating both sides:\ntan⁻¹ y = tan⁻¹ x + C (or tan⁻¹( (y - x)/(1 + xy) ) = C => y - x = k(1 + xy)).",
        "stepMarking": [
          {
            "step": "Separate variables dy/(1+y²) = dx/(1+x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> tan⁻¹ y = tan⁻¹ x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify constant C is added immediately upon integrating.",
        "commonPitfall": "Leaving without integrating or omitting +C."
      },
      {
        "id": "cbse-c12-math-2022-outside-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Inverse Trigonometry: Simplifying tan⁻¹ Formula",
        "questionText": "Express tan⁻¹[ cos x / (1 - sin x) ], where -3π/2 < x < π/2, in its simplest form.",
        "modelAnswer": "Write cos x = sin(π/2 - x) and sin x = cos(π/2 - x) (or use half angles cos²(x/2)-sin²(x/2) over (cos x/2 - sin x/2)²):\n[cos²(x/2) - sin²(x/2)] / [cos(x/2) - sin(x/2)]² = [cos(x/2) + sin(x/2)] / [cos(x/2) - sin(x/2)]\nDivide top and bottom by cos(x/2):\n= [1 + tan(x/2)] / [1 - tan(x/2)] = tan(π/4 + x/2).\nHence tan⁻¹(tan(π/4 + x/2)) = π/4 + x/2 (since -π/2 < π/4 + x/2 < π/2).",
        "stepMarking": [
          {
            "step": "Half-angle factorisation to [1 + tan(x/2)]/[1 - tan(x/2)]",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify to π/4 + x/2 within principal domain",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Replacing 1 = cos²(x/2) + sin²(x/2) converts 1 ± sin x directly into perfect squares!",
        "commonPitfall": "Using cos(π/2 + x) improperly without verifying principal domain (-π/2, π/2)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Applications of Derivatives: Rate of Change (Sphere/Circle)",
        "questionText": "The volume of a cube is increasing at the rate of 8 cm³/s. How fast is the surface area increasing when the length of an edge is 12 cm?",
        "modelAnswer": "Let edge = x. V = x³ => dV/dt = 3x² (dx/dt) = 8 => dx/dt = 8 / (3x²).\nSurface area S = 6x² => dS/dt = 12x (dx/dt) = 12x × [8 / (3x²)] = 32 / x.\nAt x = 12 cm: dS/dt = 32 / 12 = 8/3 cm²/s ≈ 2.67 cm²/s.",
        "stepMarking": [
          {
            "step": "Differentiate V=x³ -> dx/dt = 8/(3x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dS/dt = 32/x = 8/3 cm²/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Substitute x = 12 ONLY AFTER differentiating!",
        "commonPitfall": "Writing unit cm/s instead of cm²/s."
      },
      {
        "id": "cbse-c12-math-2022-outside-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Integrals: Integration by Substitution",
        "questionText": "Evaluate: ∫ [ 1 / (x - √x) ] dx.",
        "modelAnswer": "Factor √x in denominator: ∫ [ 1 / (√x (√x - 1)) ] dx.\nSubstitute t = √x - 1 => dt = (1 / (2√x)) dx => dx / √x = 2 dt.\nIntegral = ∫ (2 / t) dt = 2 log |t| + C = 2 log |√x - 1| + C.",
        "stepMarking": [
          {
            "step": "Factor √x & substitute t = √x - 1",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> 2 log|√x - 1| + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute back to original variable x and include +C!",
        "commonPitfall": "Forgetting the factor of 2 from d(√x) = dx/(2√x)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Differentiation: Logarithmic Differentiation (x^cos x + (cos x)^x)",
        "questionText": "Differentiate y = x^(sin x) + (sin x)^x with respect to x.",
        "modelAnswer": "Let u = x^(sin x) and v = (sin x)^x => y = u + v => dy/dx = du/dx + dv/dx.\nFor u: ln u = sin x ln x => (1/u) du/dx = (sin x)/x + cos x ln x => du/dx = x^(sin x)[ (sin x)/x + cos x ln x ].\nFor v: ln v = x ln(sin x) => (1/v) dv/dx = ln(sin x) + x cot x => dv/dx = (sin x)^x[ ln(sin x) + x cot x ].\nHence dy/dx = x^(sin x)[(sin x)/x + cos x ln x] + (sin x)^x[ln(sin x) + x cot x].",
        "stepMarking": [
          {
            "step": "Split y = u + v (DO NOT take log directly on sum!)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute du/dx via logarithmic differentiation",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dv/dx & combine",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "CRITICAL: log(u + v) ≠ log u + log v! Always differentiate u and v separately!",
        "commonPitfall": "Taking log(y) = log(x^sinx) + log((sinx)^x) directly!"
      },
      {
        "id": "cbse-c12-math-2022-outside-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: King's Property ∫₀^a f(x)dx",
        "questionText": "Evaluate: ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx.",
        "modelAnswer": "Let I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx ...(1)\nUsing P₄: ∫₀^a f(x)dx = ∫₀^a f(a - x)dx with a = π/2:\nI = ∫₀^(π/2) [ √(cos x) / (√(cos x) + √(sin x)) ] dx ...(2)\nAdding (1) and (2): 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.",
        "stepMarking": [
          {
            "step": "Apply King's property f(π/2 - x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Add (1) + (2) -> 2I = π/2 -> I = π/4",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "State the property used explicitly (∫₀^a f(x)dx = ∫₀^a f(a-x)dx).",
        "commonPitfall": "Forgetting the factor 2 in 2I = π/2 and writing π/2."
      },
      {
        "id": "cbse-c12-math-2022-outside-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: Integration by Parts & Partial Fractions",
        "questionText": "Evaluate: ∫ [ x / ((x - 1)(x - 2)) ] dx.",
        "modelAnswer": "Using partial fractions: x / [(x - 1)(x - 2)] = A/(x - 1) + B/(x - 2) => x = A(x - 2) + B(x - 1).\nPut x = 1: 1 = -A => A = -1.\nPut x = 2: 2 = B => B = 2.\nIntegral = ∫ [ -1/(x - 1) + 2/(x - 2) ] dx = 2 log|x - 2| - log|x - 1| + C = log|(x - 2)² / (x - 1)| + C.",
        "stepMarking": [
          {
            "step": "Partial fractions A = -1, B = 2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate -> log|(x-2)²/(x-1)| + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check A + B = 1 and -2A - B = 0 before integrating.",
        "commonPitfall": "Sign mistake in A = -1."
      },
      {
        "id": "cbse-c12-math-2022-outside-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Differential Equations: Linear DE dy/dx + Py = Q",
        "questionText": "Solve the linear differential equation: (1 + x²) dy/dx + 2xy = 4x².",
        "modelAnswer": "Divide by (1 + x²): dy/dx + [2x / (1 + x²)] y = 4x² / (1 + x²).\nHere P = 2x/(1 + x²), Q = 4x²/(1 + x²).\nIntegrating Factor IF = e^(∫ 2x/(1+x²) dx) = e^(ln(1+x²)) = 1 + x².\nSolution: y · (1 + x²) = ∫ [4x² / (1 + x²)] (1 + x²) dx = ∫ 4x² dx = (4/3)x³ + C.\nHence y = [ (4/3)x³ + C ] / (1 + x²).",
        "stepMarking": [
          {
            "step": "Standard form dy/dx + Py = Q",
            "marks": "0.5 Mark"
          },
          {
            "step": "Integrating Factor IF = 1 + x²",
            "marks": "1 Mark"
          },
          {
            "step": "Final solution y(1+x²) = 4x³/3 + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check whether leading dy/dx coefficient is 1 before writing P and Q!",
        "commonPitfall": "Forgetting to divide Q (4x²) by (1 + x²) as well."
      },
      {
        "id": "cbse-c12-math-2022-outside-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Linear Programming: Graphical Corner Point Maximization",
        "questionText": "Solve the following LPP graphically: Maximize Z = 4x + y subject to constraints x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
        "modelAnswer": "Boundary lines:\n• L₁: x + y = 50 passes through (50, 0) & (0, 50).\n• L₂: 3x + y = 90 passes through (30, 0) & (0, 90).\nIntersection of L₁ and L₂: Subtracting -> 2x = 40 => x = 20, y = 30.\nBounded feasible region corner points & Z = 4x + y:\n• O(0, 0) -> Z = 0\n• A(30, 0) -> Z = 120 (MAXIMUM)\n• B(20, 30) -> Z = 80 + 30 = 110\n• C(0, 50) -> Z = 50.\nMaximum value of Z is 120 at (30, 0).",
        "stepMarking": [
          {
            "step": "Intersection (20, 30) & 4 feasible vertices",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate Z at all corner points -> Max Z = 120 at (30, 0)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Shade the feasible region clearly and show corner table.",
        "commonPitfall": "Using wrong x-intercept (50, 0) instead of (30, 0) in feasible region."
      },
      {
        "id": "cbse-c12-math-2022-outside-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Continuity: Finding Unknowns k for Continuity at Boundary",
        "questionText": "Find the values of a and b such that the function f(x) defined below is continuous everywhere:\nf(x) = 5 if x ≤ 2;  ax + b if 2 < x < 10;  21 if x ≥ 10.",
        "modelAnswer": "For continuity at x = 2: LHL = f(2) = 5 = RHL = lim(x→2⁺)(ax + b) = 2a + b => 2a + b = 5 ...(1)\nFor continuity at x = 10: LHL = lim(x→10⁻)(ax + b) = 10a + b = f(10) = 21 => 10a + b = 21 ...(2)\nSubtracting (1) from (2): 8a = 16 => a = 2.\nFrom (1): 2(2) + b = 5 => b = 1.\nHence a = 2, b = 1.",
        "stepMarking": [
          {
            "step": "Continuity at x=2 -> 2a + b = 5",
            "marks": "1 Mark"
          },
          {
            "step": "Continuity at x=10 -> 10a + b = 21",
            "marks": "1 Mark"
          },
          {
            "step": "Solve simultaneously -> a = 2, b = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write LHL = RHL = f(c) notation explicitly for full board marks.",
        "commonPitfall": "Solving only one boundary point."
      },
      {
        "id": "cbse-c12-math-2022-outside-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Integrals: Area Bounded by Circle & Line / Parabola",
        "questionText": "Using integration, find the area of the region in the first quadrant enclosed by the x-axis, the line y = x, and the circle x² + y² = 32.",
        "modelAnswer": "Intersection of y = x and x² + y² = 32: 2x² = 32 => x² = 16 => x = 4 (in first quadrant) -> point (4, 4).\nCircle radius r = √32 = 4√2 -> meets x-axis at (4√2, 0).\nSplit area at x = 4:\nA = ∫₀⁴ x dx + ∫₄^(4√2) √(32 - x²) dx\n= [x²/2]₀⁴ + [ (x/2)√(32 - x²) + (32/2) sin⁻¹(x / (4√2)) ]₄^(4√2)\n= 8 + [ (0 + 16 · π/2) - (2√16 + 16 sin⁻¹(1/√2)) ]\n= 8 + [ 8π - (8 + 16 · π/4) ] = 8 + 8π - 8 - 4π = 4π sq. units.",
        "stepMarking": [
          {
            "step": "Sketch figure & find intersection (4, 4) and (4√2, 0)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Split integral ∫₀⁴ x dx + ∫₄^(4√2) √(32-x²) dx",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate standard √(a²-x²) integral -> 4π sq. units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Quick geometric sanity check: θ = 45° (1/8 of full circle area πr² = 32π) => 32π / 8 = 4π!",
        "commonPitfall": "Integrating √(32 - x²) from 0 to 4√2 without splitting at x = 4."
      },
      {
        "id": "cbse-c12-math-2022-outside-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "3D Geometry: Shortest Distance Between Skew Lines",
        "questionText": "Find the shortest distance between the skew lines:\nr = (î + 2ĵ + k̂) + λ(î - ĵ + k̂)\nr = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).",
        "modelAnswer": "Here a₁ = î + 2ĵ + k̂, b₁ = î - ĵ + k̂;\na₂ = 2î - ĵ - k̂, b₂ = 2î + ĵ + 2k̂.\na₂ - a₁ = î - 3ĵ - 2k̂.\nb₁ × b₂ = | î ĵ k̂ ; 1 -1 1 ; 2 1 2 | = î(-2 - 1) - ĵ(2 - 2) + k̂(1 + 2) = -3î + 0ĵ + 3k̂.\n|b₁ × b₂| = √((-3)² + 0 + 3²) = 3√2.\nDot product: (b₁ × b₂) · (a₂ - a₁) = (-3)(1) + 0(-3) + 3(-2) = -3 - 6 = -9.\nShortest distance d = | -9 | / (3√2) = 3 / √2 = (3√2)/2 units.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ and b₁ × b₂",
            "marks": "2 Marks"
          },
          {
            "step": "Magnitude |b₁ × b₂| = 3√2",
            "marks": "1 Mark"
          },
          {
            "step": "Formula |(b₁×b₂)·(a₂-a₁)| / |b₁×b₂| -> 3/√2 units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "If b₁ and b₂ are parallel (b₁ × b₂ = 0), use parallel lines distance |(a₂ - a₁) × b| / |b|!",
        "commonPitfall": "Omitting absolute value around dot product and reporting negative distance."
      },
      {
        "id": "cbse-c12-math-2022-outside-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Derivatives: Maxima/Minima Cylinder/Cone Inscribed Word Problem",
        "questionText": "Show that the right circular cylinder of given surface area and maximum volume is such that its height is equal to the diameter of its base.",
        "modelAnswer": "Let radius = r, height = h, fixed total surface area S = 2πr² + 2πrh => h = (S - 2πr²) / (2πr).\nVolume V = πr² h = πr² [ (S - 2πr²) / (2πr) ] = (Sr)/2 - πr³.\nDifferentiate w.r.t. r:\ndV/dr = S/2 - 3πr² = 0 => S = 6πr².\nd²V/dr² = -6πr < 0 => Volume is MAXIMUM.\nSubstitute S = 6πr² back into S = 2πr² + 2πrh:\n6πr² = 2πr² + 2πrh => 4πr² = 2πrh => h = 2r (diameter of base).",
        "stepMarking": [
          {
            "step": "Express h in terms of S & r -> V(r) = Sr/2 - πr³",
            "marks": "1.5 Marks"
          },
          {
            "step": "dV/dr = 0 -> S = 6πr²",
            "marks": "1.5 Marks"
          },
          {
            "step": "Second derivative < 0 & deduce h = 2r",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never skip the second-derivative check d²V/dr² < 0 — CBSE awards a full mark for proving maximum!",
        "commonPitfall": "Using CSA = 2πrh instead of Total Surface Area 2πr² + 2πrh."
      },
      {
        "id": "cbse-c12-math-2022-outside-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Matrices: System of Linear Equations Using Inverse Matrix A⁻¹",
        "questionText": "If A = [[2, -3, 5], [3, 2, -4], [1, 1, -2]], find A⁻¹. Using A⁻¹, solve the system of linear equations:\n2x - 3y + 5z = 11\n3x + 2y - 4z = -5\nx + y - 2z = -3",
        "modelAnswer": "|A| = 2(-4 + 4) - (-3)(-6 + 4) + 5(3 - 2) = 0 + 3(-2) + 5(1) = -6 + 5 = -1 ≠ 0 (non-singular, A⁻¹ exists).\nCofactors of A:\nC₁₁=0, C₁₂=2, C₁₃=1\nC₂₁=-1, C₂₂=-9, C₂₃=-5\nC₃₁=2, C₃₂=23, C₃₃=13.\nadj A = Transpose of cofactor matrix = [[0, -1, 2], [2, -9, 23], [1, -5, 13]].\nA⁻¹ = (1/-1) adj A = [[0, 1, -2], [-2, 9, -23], [-1, 5, -13]].\nSolution X = A⁻¹ B where B = [11, -5, -3]^T:\nx = 0(11) + 1(-5) - 2(-3) = 1\ny = -2(11) + 9(-5) - 23(-3) = -22 - 45 + 69 = 2\nz = -1(11) + 5(-5) - 13(-3) = -11 - 25 + 39 = 3.\nHence x = 1, y = 2, z = 3.",
        "stepMarking": [
          {
            "step": "|A| = -1 ≠ 0",
            "marks": "1 Mark"
          },
          {
            "step": "All 9 cofactors & adj A",
            "marks": "2 Marks"
          },
          {
            "step": "A⁻¹ and X = A⁻¹ B -> x=1, y=2, z=3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Plug (1, 2, 3) back into ALL 3 equations right away to verify 100% accuracy!",
        "commonPitfall": "Forgetting to take Transpose of the cofactor matrix for adj A."
      },
      {
        "id": "cbse-c12-math-2022-outside-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Relations & Bijections (One-One & Onto)",
        "questionText": "Read the case and answer:\nConsider a function f : ℝ - {3} → ℝ - {1} defined by f(x) = (x - 2) / (x - 3).\n\n(a) Show that f is one-one (injective). (1.5M)\n(b) Show that f is onto (surjective). (1.5M)\n(c) Find the inverse function f⁻¹(y). (1M)",
        "modelAnswer": "(a) Let f(x₁) = f(x₂) => (x₁ - 2)/(x₁ - 3) = (x₂ - 2)/(x₂ - 3).\nCross-multiplying: x₁x₂ - 3x₁ - 2x₂ + 6 = x₁x₂ - 2x₁ - 3x₂ + 6 => -x₁ = -x₂ => x₁ = x₂. Hence f is one-one.\n(b) Let y ∈ ℝ - {1}. Set y = (x - 2)/(x - 3) => xy - 3y = x - 2 => x(y - 1) = 3y - 2 => x = (3y - 2)/(y - 1), which is well-defined and ≠ 3 (since (3y-2)/(y-1) = 3 gives -2 = -3, impossible!). Thus every y has preimage -> onto.\n(c) f⁻¹(y) = (3y - 2) / (y - 1).",
        "stepMarking": [
          {
            "step": "(a) Algebraic proof x₁ = x₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Express x = (3y-2)/(y-1) and check domain",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Inverse expression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify x ≠ 3 when proving onto for fractional rational functions!",
        "commonPitfall": "Claiming onto without checking pre-image belongs to domain ℝ - {3}."
      },
      {
        "id": "cbse-c12-math-2022-outside-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Maxima / Minima Applied Geometry (Open Box)",
        "questionText": "Read the case and answer:\nA square piece of tin of side 18 cm is to be made into a box without top by cutting a square of side x cm from each corner and folding up the flaps.\n\n(a) Write the dimensions and Volume V(x) of the open box in terms of x. (1M)\n(b) Find the value of x that maximises the volume using derivatives. (2M)\n(c) Calculate the maximum possible volume of the box. (1M)",
        "modelAnswer": "(a) Base side = (18 - 2x) cm, height = x cm (0 < x < 9). Volume V(x) = x(18 - 2x)².\n(b) V'(x) = (18 - 2x)² + x · 2(18 - 2x)(-2) = (18 - 2x)(18 - 2x - 4x) = (18 - 2x)(18 - 6x) = 0 => x = 9 (rejected) or x = 3 cm.\nV''(x) at x = 3 is -6(18 - 12) + ... = -72 < 0 => maximum at x = 3 cm.\n(c) V_max = 3 × (18 - 6)² = 3 × 144 = 432 cm³.",
        "stepMarking": [
          {
            "step": "(a) V(x) = x(18 - 2x)²",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Derivative check -> x = 3 cm",
            "marks": "2 Marks"
          },
          {
            "step": "(c) V_max = 432 cm³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Side cut from EACH corner removes 2x from total length 18 cm!",
        "commonPitfall": "Writing base side as (18 - x) instead of (18 - 2x)."
      },
      {
        "id": "cbse-c12-math-2022-outside-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Bayes' Theorem (Diagnostic Test / Factory Defect)",
        "questionText": "Read the case and answer:\nIn a bolt factory, Machines A, B, and C manufacture respectively 25%, 35%, and 40% of total output. Of their outputs, 5%, 4%, and 2% respectively are defective bolts. A bolt is drawn at random from the product and is found to be defective.\n\n(a) Write the prior probabilities P(A), P(B), P(C) and conditional defect probabilities. (1M)\n(b) Find the total probability P(D) that a randomly selected bolt is defective. (1.5M)\n(c) Using Bayes' theorem, find the probability that the defective bolt was manufactured by Machine B. (1.5M)",
        "modelAnswer": "(a) P(A) = 0.25, P(B) = 0.35, P(C) = 0.40; P(D|A) = 0.05, P(D|B) = 0.04, P(D|C) = 0.02.\n(b) P(D) = 0.25(0.05) + 0.35(0.04) + 0.40(0.02) = 0.0125 + 0.0140 + 0.0080 = 0.0345.\n(c) P(B|D) = [0.35 × 0.04] / 0.0345 = 0.0140 / 0.0345 = 140 / 345 = 28 / 69.",
        "stepMarking": [
          {
            "step": "(a) Prior & conditional probabilities",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total probability P(D) = 0.0345",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Bayes formula -> 28/69",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Simplify numerator and denominator fractions cleanly (divide by 5 -> 28/69).",
        "commonPitfall": "Leaving out P(A), P(B), P(C) weights in total probability."
      }
    ]
  },
  {
    "id": "cbse-c12-math-2023-comp",
    "title": "CBSE Class 12 Mathematics Supplementary Paper (2023)",
    "subject": "Mathematics",
    "targetClass": "Class 12",
    "year": 2023,
    "paperType": "BOARD_EXAM",
    "paperCode": "65/C/2",
    "totalMarks": 80,
    "durationMins": 180,
    "difficulty": "EASY",
    "isFree": false,
    "totalQuestions": 38,
    "generalInstructions": [
      "This Question Paper contains 38 questions divided into 5 sections A, B, C, D, and E (Total 80 Marks).",
      "Section A: Q1 to Q18 MCQs and Q19–Q20 Assertion-Reason carrying 1 mark each.",
      "Section B: Q21 to Q25 Very Short Answer questions carrying 2 marks each.",
      "Section C: Q26 to Q31 Short Answer questions carrying 3 marks each.",
      "Section D: Q32 to Q35 Long Answer questions carrying 5 marks each.",
      "Section E: Q36 to Q38 Case-Based integrated questions carrying 4 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-math-2023-comp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2023-comp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2023-comp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2023-comp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Derivatives: Increasing / Decreasing Intervals",
        "questionText": "The function f(x) = x² - 4x + 6 is strictly increasing in the interval:",
        "options": [
          "A) (-∞, 2)",
          "B) (2, ∞)",
          "C) (-∞, ∞)",
          "D) (0, 2)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. f'(x) = 2x - 4 > 0 => x > 2 => strictly increasing on (2, ∞).",
        "stepMarking": [
          {
            "step": "f'(x) = 2x - 4 > 0 -> (2, ∞)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strictly increasing requires f'(x) > 0 (open interval).",
        "commonPitfall": "Choosing (-∞, 2) where f'(x) < 0."
      },
      {
        "id": "cbse-c12-math-2023-comp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: Symmetric Odd Function Property",
        "questionText": "Evaluate the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx:",
        "options": [
          "A) 0",
          "B) π/2",
          "C) π",
          "D) 2π"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. x³, x cos x, and tan⁵ x are ALL odd functions (f(-x) = -f(x)), so their integrals over [-π/2, π/2] vanish! Remaining integral = ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.",
        "stepMarking": [
          {
            "step": "Odd terms vanish -> ∫ 1 dx = π",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check parity of EACH term separately instead of assuming the whole integrand is odd.",
        "commonPitfall": "Missing the constant \"+1\" (which is EVEN) and marking 0!"
      },
      {
        "id": "cbse-c12-math-2023-comp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: e^x [f(x) + f'(x)] Identity",
        "questionText": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "A) e^x cos x + C",
          "B) e^x sin x + C",
          "C) -e^x sin x + C",
          "D) e^x (sin x - cos x) + C"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x and f'(x) = cos x -> e^x sin x + C.",
        "stepMarking": [
          {
            "step": "Identify f(x) = sin x, f'(x) = cos x -> e^x sin x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify by differentiating e^x sin x = e^x(sin x + cos x).",
        "commonPitfall": "Choosing e^x cos x (whose derivative has -sin x)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Differential Equations: Order and Degree",
        "questionText": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = k (d²y/dx²) are respectively:",
        "options": [
          "A) 2 and 3",
          "B) 2 and 2",
          "C) 1 and 3",
          "D) 2 and not defined"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Squaring both sides removes fractional exponent 3/2: [1 + (dy/dx)²]³ = k² (d²y/dx²)². Highest derivative is d²y/dx² (order = 2) with highest power = 2 (degree = 2).",
        "stepMarking": [
          {
            "step": "Square both sides -> order 2, degree 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always clear fractional powers/radicals of derivatives before reading the degree!",
        "commonPitfall": "Reading power 3 on (dy/dx)² instead of highest-order derivative d²y/dx²."
      },
      {
        "id": "cbse-c12-math-2023-comp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Projection of Vector a on Vector b",
        "questionText": "Find the scalar projection of vector a = 2î + 3ĵ + 2k̂ on vector b = î + 2ĵ + k̂:",
        "options": [
          "A) 10 / √6",
          "B) 10 / √17",
          "C) 5 / √6",
          "D) √6"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Projection of a on b = (a · b) / |b| = (2(1) + 3(2) + 2(1)) / √(1² + 2² + 1²) = (2 + 6 + 2) / √6 = 10 / √6.",
        "stepMarking": [
          {
            "step": "(a · b) / |b| = 10 / √6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Divide by magnitude of the vector ONTO WHICH we project (|b|)!",
        "commonPitfall": "Dividing by |a| = √17 instead of |b| = √6."
      },
      {
        "id": "cbse-c12-math-2023-comp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "3D Geometry: Direction Cosines Angle Sum",
        "questionText": "If a line makes angles α, β, γ with the positive directions of x, y, and z axes respectively, then sin²α + sin²β + sin²γ equals:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using cos²α + cos²β + cos²γ = 1: (1 - sin²α) + (1 - sin²β) + (1 - sin²γ) = 1 => 3 - (sin²α + sin²β + sin²γ) = 1 => sin²α + sin²β + sin²γ = 2.",
        "stepMarking": [
          {
            "step": "Substitute cos²θ = 1 - sin²θ -> sum = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Sum of cos² = 1; Sum of sin² = 2; Sum of cos(2θ) = -1.",
        "commonPitfall": "Writing 1 (forgetting it's sin², not cos²)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Linear Programming: Corner Point Method",
        "questionText": "In a Linear Programming Problem (LPP), the optimal value (maximum or minimum) of the objective function Z = ax + by over a bounded feasible region always occurs at:",
        "options": [
          "A) Interior points of the feasible region",
          "B) Origin (0, 0) always",
          "C) One or more corner points (vertices) of the feasible region",
          "D) Midpoints of constraints"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By the Fundamental Theorem of Linear Programming, if Z attains an optimal value on a bounded feasible polygon, it occurs at a corner point (vertex).",
        "stepMarking": [
          {
            "step": "Identify corner points (vertices)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "If two adjacent vertices give the same optimal Z, every point on the line segment joining them is also optimal!",
        "commonPitfall": "Testing interior points."
      },
      {
        "id": "cbse-c12-math-2023-comp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Probability: Conditional Probability & Bayes Check",
        "questionText": "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A | B) and P(A ∪ B) are respectively:",
        "options": [
          "A) 0.12 and 0.70",
          "B) 0.30 and 0.58",
          "C) 0.40 and 0.58",
          "D) 0.30 and 0.70"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For independent events, P(A | B) = P(A) = 0.30. Also P(A ∩ B) = 0.3 × 0.4 = 0.12 => P(A ∪ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        "stepMarking": [
          {
            "step": "P(A|B) = P(A) = 0.30; P(A∪B) = 0.58",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Independent does NOT mean mutually exclusive (mutually exclusive have P(A∩B)=0)!",
        "commonPitfall": "Adding 0.3 + 0.4 = 0.70 without subtracting 0.12."
      },
      {
        "id": "cbse-c12-math-2023-comp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Relations & Functions: Equivalence Relations Count",
        "questionText": "Let A = {1, 2, 3}. How many equivalence relations containing (1, 2) can be defined on set A?",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Smallest equivalence relation containing (1, 2) is {(1,1), (2,2), (3,3), (1,2), (2,1)}. The only larger equivalence relation containing (1, 2) is the universal relation A × A -> 2 equivalence relations.",
        "stepMarking": [
          {
            "step": "Minimal equivalence + Universal relation A×A -> 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NCERT Exemplar / CBSE Board favourite MCQ: remember answer is 2.",
        "commonPitfall": "Thinking {(1,2), (2,1)} alone is reflexive without (3,3)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Inverse Trigonometry: Principal Value Branch",
        "questionText": "The principal value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "A) 7π/6",
          "B) 5π/6",
          "C) π/6",
          "D) -π/6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Principal range of cos⁻¹ is [0, π]. Since 7π/6 ∉ [0, π], write cos(7π/6) = cos(2π - 5π/6) = cos(5π/6), and 5π/6 ∈ [0, π].",
        "stepMarking": [
          {
            "step": "Map 7π/6 into [0, π] via 2π - 5π/6 -> 5π/6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Principal ranges: sin⁻¹ [-π/2, π/2]; cos⁻¹ [0, π]; tan⁻¹ (-π/2, π/2).",
        "commonPitfall": "Cancelling cos⁻¹(cos θ) = θ directly when θ > π."
      },
      {
        "id": "cbse-c12-math-2023-comp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Matrices & Determinants: Adjoint Determinant Formula",
        "questionText": "If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| and |3A| are respectively:",
        "options": [
          "A) 25 and 15",
          "B) 25 and 135",
          "C) 125 and 45",
          "D) 5 and 135"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. For order n = 3: |adj A| = |A|^(n-1) = 5² = 25; |kA| = kⁿ|A| = 3³ × 5 = 27 × 5 = 135.",
        "stepMarking": [
          {
            "step": "|adj A| = |A|² = 25; |3A| = 3³|A| = 135",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Watch out for both identities: |adj A| = |A|^(n-1) and |kA| = kⁿ|A|.",
        "commonPitfall": "Computing |3A| = 3|A| = 15."
      },
      {
        "id": "cbse-c12-math-2023-comp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Matrices: Skew-Symmetric Matrix Diagonal",
        "questionText": "If A is a 3 × 3 skew-symmetric matrix, then the sum of its principal diagonal elements (Trace) and |A| are respectively:",
        "options": [
          "A) 1 and 1",
          "B) 0 and 0",
          "C) 3 and 0",
          "D) 0 and 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. All diagonal entries of a skew-symmetric matrix satisfy a_ii = -a_ii => a_ii = 0 (Trace = 0). Also |A| = |A'| = |-A| = (-1)³|A| = -|A| => |A| = 0 for odd order!",
        "stepMarking": [
          {
            "step": "Diagonal entries 0 -> Trace = 0; odd-order skew-symmetric |A| = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Determinant of ANY odd-order skew-symmetric matrix is ALWAYS 0!",
        "commonPitfall": "Assuming even-order skew-symmetric matrices also have |A| = 0."
      },
      {
        "id": "cbse-c12-math-2023-comp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Continuity & Differentiability: Parametric Differentiation",
        "questionText": "If x = at² and y = 2at, then d²y/dx² at t = 1 is:",
        "options": [
          "A) 1/t",
          "B) -1/(2a)",
          "C) -1/(2at³)",
          "D) 1/(2a)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. dy/dx = (2a)/(2at) = 1/t. Differentiating again w.r.t. x: d²y/dx² = d/dt(1/t) · (dt/dx) = (-1/t²) · (1/(2at)) = -1/(2at³). At t = 1, value = -1/(2a).",
        "stepMarking": [
          {
            "step": "dy/dx = 1/t -> d²y/dx² = (-1/t²)(dt/dx) = -1/(2a)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "NEVER forget to multiply by (dt/dx) when computing d²y/dx² parametrically!",
        "commonPitfall": "Stopping at d/dt(1/t) = -1/t² = -1 without dividing by dx/dt."
      },
      {
        "id": "cbse-c12-math-2023-comp-q17",
        "qNum": 17,
        "section": "A",
        "marks": 1,
        "topic": "Applications of Derivatives: Increasing / Decreasing Intervals",
        "questionText": "The function f(x) = x² - 4x + 6 is strictly increasing in the interval:",
        "options": [
          "A) (-∞, 2)",
          "B) (2, ∞)",
          "C) (-∞, ∞)",
          "D) (0, 2)"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. f'(x) = 2x - 4 > 0 => x > 2 => strictly increasing on (2, ∞).",
        "stepMarking": [
          {
            "step": "f'(x) = 2x - 4 > 0 -> (2, ∞)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strictly increasing requires f'(x) > 0 (open interval).",
        "commonPitfall": "Choosing (-∞, 2) where f'(x) < 0."
      },
      {
        "id": "cbse-c12-math-2023-comp-q18",
        "qNum": 18,
        "section": "A",
        "marks": 1,
        "topic": "Integrals: Symmetric Odd Function Property",
        "questionText": "Evaluate the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx:",
        "options": [
          "A) 0",
          "B) π/2",
          "C) π",
          "D) 2π"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. x³, x cos x, and tan⁵ x are ALL odd functions (f(-x) = -f(x)), so their integrals over [-π/2, π/2] vanish! Remaining integral = ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.",
        "stepMarking": [
          {
            "step": "Odd terms vanish -> ∫ 1 dx = π",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check parity of EACH term separately instead of assuming the whole integrand is odd.",
        "commonPitfall": "Missing the constant \"+1\" (which is EVEN) and marking 0!"
      },
      {
        "id": "cbse-c12-math-2023-comp-q19",
        "qNum": 19,
        "section": "A",
        "marks": 1,
        "topic": "Continuity: Differentiability Implies Continuity",
        "questionText": "Assertion (A): Every differentiable function is continuous, but every continuous function is not necessarily differentiable.\nReason (R): f(x) = |x| is continuous at x = 0 yet not differentiable at x = 0 (LHD = -1 ≠ RHD = +1).",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Differentiability guarantees continuity, while |x| has a sharp corner at x = 0 (LHD = -1 ≠ RHD = +1), proving continuity alone does not guarantee differentiability.",
        "stepMarking": [
          {
            "step": "Option (A) with |x| counterexample",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Corner points on continuous curves lack unique tangents -> non-differentiable.",
        "commonPitfall": "Saying |x| is discontinuous at x = 0."
      },
      {
        "id": "cbse-c12-math-2023-comp-q20",
        "qNum": 20,
        "section": "A",
        "marks": 1,
        "topic": "Vectors: Perpendicular Vectors Condition",
        "questionText": "Assertion (A): If |a + b| = |a - b| for non-zero vectors a and b, then vectors a and b are perpendicular.\nReason (R): Squaring gives 4 (a · b) = 0 => a · b = 0.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. |a + b|² = |a - b|² => 4(a·b) = 0 => a ⊥ b.",
        "stepMarking": [
          {
            "step": "Option (A) proving a · b = 0",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use a · a = |a|² cleanly in vector magnitude proofs.",
        "commonPitfall": "Confusing perpendicular condition (a·b = 0) with parallel condition (a×b = 0)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Differential Equations: General Solution via Variable Separable",
        "questionText": "Find the general solution of the differential equation: dy/dx = (1 + y²) / (1 + x²).",
        "modelAnswer": "Separating variables:\ndy / (1 + y²) = dx / (1 + x²).\nIntegrating both sides:\ntan⁻¹ y = tan⁻¹ x + C (or tan⁻¹( (y - x)/(1 + xy) ) = C => y - x = k(1 + xy)).",
        "stepMarking": [
          {
            "step": "Separate variables dy/(1+y²) = dx/(1+x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> tan⁻¹ y = tan⁻¹ x + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify constant C is added immediately upon integrating.",
        "commonPitfall": "Leaving without integrating or omitting +C."
      },
      {
        "id": "cbse-c12-math-2023-comp-q22",
        "qNum": 22,
        "section": "B",
        "marks": 2,
        "topic": "Inverse Trigonometry: Simplifying tan⁻¹ Formula",
        "questionText": "Express tan⁻¹[ cos x / (1 - sin x) ], where -3π/2 < x < π/2, in its simplest form.",
        "modelAnswer": "Write cos x = sin(π/2 - x) and sin x = cos(π/2 - x) (or use half angles cos²(x/2)-sin²(x/2) over (cos x/2 - sin x/2)²):\n[cos²(x/2) - sin²(x/2)] / [cos(x/2) - sin(x/2)]² = [cos(x/2) + sin(x/2)] / [cos(x/2) - sin(x/2)]\nDivide top and bottom by cos(x/2):\n= [1 + tan(x/2)] / [1 - tan(x/2)] = tan(π/4 + x/2).\nHence tan⁻¹(tan(π/4 + x/2)) = π/4 + x/2 (since -π/2 < π/4 + x/2 < π/2).",
        "stepMarking": [
          {
            "step": "Half-angle factorisation to [1 + tan(x/2)]/[1 - tan(x/2)]",
            "marks": "1 Mark"
          },
          {
            "step": "Simplify to π/4 + x/2 within principal domain",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Replacing 1 = cos²(x/2) + sin²(x/2) converts 1 ± sin x directly into perfect squares!",
        "commonPitfall": "Using cos(π/2 + x) improperly without verifying principal domain (-π/2, π/2)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q23",
        "qNum": 23,
        "section": "B",
        "marks": 2,
        "topic": "Applications of Derivatives: Rate of Change (Sphere/Circle)",
        "questionText": "The volume of a cube is increasing at the rate of 8 cm³/s. How fast is the surface area increasing when the length of an edge is 12 cm?",
        "modelAnswer": "Let edge = x. V = x³ => dV/dt = 3x² (dx/dt) = 8 => dx/dt = 8 / (3x²).\nSurface area S = 6x² => dS/dt = 12x (dx/dt) = 12x × [8 / (3x²)] = 32 / x.\nAt x = 12 cm: dS/dt = 32 / 12 = 8/3 cm²/s ≈ 2.67 cm²/s.",
        "stepMarking": [
          {
            "step": "Differentiate V=x³ -> dx/dt = 8/(3x²)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dS/dt = 32/x = 8/3 cm²/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Substitute x = 12 ONLY AFTER differentiating!",
        "commonPitfall": "Writing unit cm/s instead of cm²/s."
      },
      {
        "id": "cbse-c12-math-2023-comp-q24",
        "qNum": 24,
        "section": "B",
        "marks": 2,
        "topic": "Integrals: Integration by Substitution",
        "questionText": "Evaluate: ∫ [ 1 / (x - √x) ] dx.",
        "modelAnswer": "Factor √x in denominator: ∫ [ 1 / (√x (√x - 1)) ] dx.\nSubstitute t = √x - 1 => dt = (1 / (2√x)) dx => dx / √x = 2 dt.\nIntegral = ∫ (2 / t) dt = 2 log |t| + C = 2 log |√x - 1| + C.",
        "stepMarking": [
          {
            "step": "Factor √x & substitute t = √x - 1",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate -> 2 log|√x - 1| + C",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always substitute back to original variable x and include +C!",
        "commonPitfall": "Forgetting the factor of 2 from d(√x) = dx/(2√x)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q25",
        "qNum": 25,
        "section": "B",
        "marks": 2,
        "topic": "Vectors: Unit Vector Perpendicular to Two Vectors",
        "questionText": "Find a unit vector perpendicular to both vectors a = 3î + ĵ + 2k̂ and b = 2î - 2ĵ + 4k̂.",
        "modelAnswer": "a × b = | î  ĵ  k̂ ; 3 1 2 ; 2 -2 4 | = î(4 + 4) - ĵ(12 - 4) + k̂(-6 - 2) = 8î - 8ĵ - 8k̂.\n|a × b| = √(8² + (-8)² + (-8)²) = 8√3.\nUnit vector n̂ = ± (a × b) / |a × b| = ± (1/√3)(î - ĵ - k̂).",
        "stepMarking": [
          {
            "step": "Cross product a × b = 8î - 8ĵ - 8k̂",
            "marks": "1 Mark"
          },
          {
            "step": "Divide by 8√3 -> ±(î - ĵ - k̂)/√3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include ± when question asks \"a unit vector perpendicular to both\", since both +n̂ and -n̂ are valid.",
        "commonPitfall": "Sign error on the ĵ cofactor in 3×3 determinant."
      },
      {
        "id": "cbse-c12-math-2023-comp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: King's Property ∫₀^a f(x)dx",
        "questionText": "Evaluate: ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx.",
        "modelAnswer": "Let I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx ...(1)\nUsing P₄: ∫₀^a f(x)dx = ∫₀^a f(a - x)dx with a = π/2:\nI = ∫₀^(π/2) [ √(cos x) / (√(cos x) + √(sin x)) ] dx ...(2)\nAdding (1) and (2): 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.",
        "stepMarking": [
          {
            "step": "Apply King's property f(π/2 - x)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Add (1) + (2) -> 2I = π/2 -> I = π/4",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "State the property used explicitly (∫₀^a f(x)dx = ∫₀^a f(a-x)dx).",
        "commonPitfall": "Forgetting the factor 2 in 2I = π/2 and writing π/2."
      },
      {
        "id": "cbse-c12-math-2023-comp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Integrals: Integration by Parts & Partial Fractions",
        "questionText": "Evaluate: ∫ [ x / ((x - 1)(x - 2)) ] dx.",
        "modelAnswer": "Using partial fractions: x / [(x - 1)(x - 2)] = A/(x - 1) + B/(x - 2) => x = A(x - 2) + B(x - 1).\nPut x = 1: 1 = -A => A = -1.\nPut x = 2: 2 = B => B = 2.\nIntegral = ∫ [ -1/(x - 1) + 2/(x - 2) ] dx = 2 log|x - 2| - log|x - 1| + C = log|(x - 2)² / (x - 1)| + C.",
        "stepMarking": [
          {
            "step": "Partial fractions A = -1, B = 2",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate -> log|(x-2)²/(x-1)| + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check A + B = 1 and -2A - B = 0 before integrating.",
        "commonPitfall": "Sign mistake in A = -1."
      },
      {
        "id": "cbse-c12-math-2023-comp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Differential Equations: Linear DE dy/dx + Py = Q",
        "questionText": "Solve the linear differential equation: (1 + x²) dy/dx + 2xy = 4x².",
        "modelAnswer": "Divide by (1 + x²): dy/dx + [2x / (1 + x²)] y = 4x² / (1 + x²).\nHere P = 2x/(1 + x²), Q = 4x²/(1 + x²).\nIntegrating Factor IF = e^(∫ 2x/(1+x²) dx) = e^(ln(1+x²)) = 1 + x².\nSolution: y · (1 + x²) = ∫ [4x² / (1 + x²)] (1 + x²) dx = ∫ 4x² dx = (4/3)x³ + C.\nHence y = [ (4/3)x³ + C ] / (1 + x²).",
        "stepMarking": [
          {
            "step": "Standard form dy/dx + Py = Q",
            "marks": "0.5 Mark"
          },
          {
            "step": "Integrating Factor IF = 1 + x²",
            "marks": "1 Mark"
          },
          {
            "step": "Final solution y(1+x²) = 4x³/3 + C",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check whether leading dy/dx coefficient is 1 before writing P and Q!",
        "commonPitfall": "Forgetting to divide Q (4x²) by (1 + x²) as well."
      },
      {
        "id": "cbse-c12-math-2023-comp-q29",
        "qNum": 29,
        "section": "C",
        "marks": 3,
        "topic": "Linear Programming: Graphical Corner Point Maximization",
        "questionText": "Solve the following LPP graphically: Maximize Z = 4x + y subject to constraints x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
        "modelAnswer": "Boundary lines:\n• L₁: x + y = 50 passes through (50, 0) & (0, 50).\n• L₂: 3x + y = 90 passes through (30, 0) & (0, 90).\nIntersection of L₁ and L₂: Subtracting -> 2x = 40 => x = 20, y = 30.\nBounded feasible region corner points & Z = 4x + y:\n• O(0, 0) -> Z = 0\n• A(30, 0) -> Z = 120 (MAXIMUM)\n• B(20, 30) -> Z = 80 + 30 = 110\n• C(0, 50) -> Z = 50.\nMaximum value of Z is 120 at (30, 0).",
        "stepMarking": [
          {
            "step": "Intersection (20, 30) & 4 feasible vertices",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate Z at all corner points -> Max Z = 120 at (30, 0)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Shade the feasible region clearly and show corner table.",
        "commonPitfall": "Using wrong x-intercept (50, 0) instead of (30, 0) in feasible region."
      },
      {
        "id": "cbse-c12-math-2023-comp-q30",
        "qNum": 30,
        "section": "C",
        "marks": 3,
        "topic": "Continuity: Finding Unknowns k for Continuity at Boundary",
        "questionText": "Find the values of a and b such that the function f(x) defined below is continuous everywhere:\nf(x) = 5 if x ≤ 2;  ax + b if 2 < x < 10;  21 if x ≥ 10.",
        "modelAnswer": "For continuity at x = 2: LHL = f(2) = 5 = RHL = lim(x→2⁺)(ax + b) = 2a + b => 2a + b = 5 ...(1)\nFor continuity at x = 10: LHL = lim(x→10⁻)(ax + b) = 10a + b = f(10) = 21 => 10a + b = 21 ...(2)\nSubtracting (1) from (2): 8a = 16 => a = 2.\nFrom (1): 2(2) + b = 5 => b = 1.\nHence a = 2, b = 1.",
        "stepMarking": [
          {
            "step": "Continuity at x=2 -> 2a + b = 5",
            "marks": "1 Mark"
          },
          {
            "step": "Continuity at x=10 -> 10a + b = 21",
            "marks": "1 Mark"
          },
          {
            "step": "Solve simultaneously -> a = 2, b = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write LHL = RHL = f(c) notation explicitly for full board marks.",
        "commonPitfall": "Solving only one boundary point."
      },
      {
        "id": "cbse-c12-math-2023-comp-q31",
        "qNum": 31,
        "section": "C",
        "marks": 3,
        "topic": "Differentiation: Logarithmic Differentiation (x^cos x + (cos x)^x)",
        "questionText": "Differentiate y = x^(sin x) + (sin x)^x with respect to x.",
        "modelAnswer": "Let u = x^(sin x) and v = (sin x)^x => y = u + v => dy/dx = du/dx + dv/dx.\nFor u: ln u = sin x ln x => (1/u) du/dx = (sin x)/x + cos x ln x => du/dx = x^(sin x)[ (sin x)/x + cos x ln x ].\nFor v: ln v = x ln(sin x) => (1/v) dv/dx = ln(sin x) + x cot x => dv/dx = (sin x)^x[ ln(sin x) + x cot x ].\nHence dy/dx = x^(sin x)[(sin x)/x + cos x ln x] + (sin x)^x[ln(sin x) + x cot x].",
        "stepMarking": [
          {
            "step": "Split y = u + v (DO NOT take log directly on sum!)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute du/dx via logarithmic differentiation",
            "marks": "1 Mark"
          },
          {
            "step": "Compute dv/dx & combine",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "CRITICAL: log(u + v) ≠ log u + log v! Always differentiate u and v separately!",
        "commonPitfall": "Taking log(y) = log(x^sinx) + log((sinx)^x) directly!"
      },
      {
        "id": "cbse-c12-math-2023-comp-q32",
        "qNum": 32,
        "section": "D",
        "marks": 5,
        "topic": "3D Geometry: Shortest Distance Between Skew Lines",
        "questionText": "Find the shortest distance between the skew lines:\nr = (î + 2ĵ + k̂) + λ(î - ĵ + k̂)\nr = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).",
        "modelAnswer": "Here a₁ = î + 2ĵ + k̂, b₁ = î - ĵ + k̂;\na₂ = 2î - ĵ - k̂, b₂ = 2î + ĵ + 2k̂.\na₂ - a₁ = î - 3ĵ - 2k̂.\nb₁ × b₂ = | î ĵ k̂ ; 1 -1 1 ; 2 1 2 | = î(-2 - 1) - ĵ(2 - 2) + k̂(1 + 2) = -3î + 0ĵ + 3k̂.\n|b₁ × b₂| = √((-3)² + 0 + 3²) = 3√2.\nDot product: (b₁ × b₂) · (a₂ - a₁) = (-3)(1) + 0(-3) + 3(-2) = -3 - 6 = -9.\nShortest distance d = | -9 | / (3√2) = 3 / √2 = (3√2)/2 units.",
        "stepMarking": [
          {
            "step": "Compute a₂ - a₁ and b₁ × b₂",
            "marks": "2 Marks"
          },
          {
            "step": "Magnitude |b₁ × b₂| = 3√2",
            "marks": "1 Mark"
          },
          {
            "step": "Formula |(b₁×b₂)·(a₂-a₁)| / |b₁×b₂| -> 3/√2 units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "If b₁ and b₂ are parallel (b₁ × b₂ = 0), use parallel lines distance |(a₂ - a₁) × b| / |b|!",
        "commonPitfall": "Omitting absolute value around dot product and reporting negative distance."
      },
      {
        "id": "cbse-c12-math-2023-comp-q33",
        "qNum": 33,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Derivatives: Maxima/Minima Cylinder/Cone Inscribed Word Problem",
        "questionText": "Show that the right circular cylinder of given surface area and maximum volume is such that its height is equal to the diameter of its base.",
        "modelAnswer": "Let radius = r, height = h, fixed total surface area S = 2πr² + 2πrh => h = (S - 2πr²) / (2πr).\nVolume V = πr² h = πr² [ (S - 2πr²) / (2πr) ] = (Sr)/2 - πr³.\nDifferentiate w.r.t. r:\ndV/dr = S/2 - 3πr² = 0 => S = 6πr².\nd²V/dr² = -6πr < 0 => Volume is MAXIMUM.\nSubstitute S = 6πr² back into S = 2πr² + 2πrh:\n6πr² = 2πr² + 2πrh => 4πr² = 2πrh => h = 2r (diameter of base).",
        "stepMarking": [
          {
            "step": "Express h in terms of S & r -> V(r) = Sr/2 - πr³",
            "marks": "1.5 Marks"
          },
          {
            "step": "dV/dr = 0 -> S = 6πr²",
            "marks": "1.5 Marks"
          },
          {
            "step": "Second derivative < 0 & deduce h = 2r",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never skip the second-derivative check d²V/dr² < 0 — CBSE awards a full mark for proving maximum!",
        "commonPitfall": "Using CSA = 2πrh instead of Total Surface Area 2πr² + 2πrh."
      },
      {
        "id": "cbse-c12-math-2023-comp-q34",
        "qNum": 34,
        "section": "D",
        "marks": 5,
        "topic": "Matrices: System of Linear Equations Using Inverse Matrix A⁻¹",
        "questionText": "If A = [[2, -3, 5], [3, 2, -4], [1, 1, -2]], find A⁻¹. Using A⁻¹, solve the system of linear equations:\n2x - 3y + 5z = 11\n3x + 2y - 4z = -5\nx + y - 2z = -3",
        "modelAnswer": "|A| = 2(-4 + 4) - (-3)(-6 + 4) + 5(3 - 2) = 0 + 3(-2) + 5(1) = -6 + 5 = -1 ≠ 0 (non-singular, A⁻¹ exists).\nCofactors of A:\nC₁₁=0, C₁₂=2, C₁₃=1\nC₂₁=-1, C₂₂=-9, C₂₃=-5\nC₃₁=2, C₃₂=23, C₃₃=13.\nadj A = Transpose of cofactor matrix = [[0, -1, 2], [2, -9, 23], [1, -5, 13]].\nA⁻¹ = (1/-1) adj A = [[0, 1, -2], [-2, 9, -23], [-1, 5, -13]].\nSolution X = A⁻¹ B where B = [11, -5, -3]^T:\nx = 0(11) + 1(-5) - 2(-3) = 1\ny = -2(11) + 9(-5) - 23(-3) = -22 - 45 + 69 = 2\nz = -1(11) + 5(-5) - 13(-3) = -11 - 25 + 39 = 3.\nHence x = 1, y = 2, z = 3.",
        "stepMarking": [
          {
            "step": "|A| = -1 ≠ 0",
            "marks": "1 Mark"
          },
          {
            "step": "All 9 cofactors & adj A",
            "marks": "2 Marks"
          },
          {
            "step": "A⁻¹ and X = A⁻¹ B -> x=1, y=2, z=3",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Plug (1, 2, 3) back into ALL 3 equations right away to verify 100% accuracy!",
        "commonPitfall": "Forgetting to take Transpose of the cofactor matrix for adj A."
      },
      {
        "id": "cbse-c12-math-2023-comp-q35",
        "qNum": 35,
        "section": "D",
        "marks": 5,
        "topic": "Applications of Integrals: Area Bounded by Circle & Line / Parabola",
        "questionText": "Using integration, find the area of the region in the first quadrant enclosed by the x-axis, the line y = x, and the circle x² + y² = 32.",
        "modelAnswer": "Intersection of y = x and x² + y² = 32: 2x² = 32 => x² = 16 => x = 4 (in first quadrant) -> point (4, 4).\nCircle radius r = √32 = 4√2 -> meets x-axis at (4√2, 0).\nSplit area at x = 4:\nA = ∫₀⁴ x dx + ∫₄^(4√2) √(32 - x²) dx\n= [x²/2]₀⁴ + [ (x/2)√(32 - x²) + (32/2) sin⁻¹(x / (4√2)) ]₄^(4√2)\n= 8 + [ (0 + 16 · π/2) - (2√16 + 16 sin⁻¹(1/√2)) ]\n= 8 + [ 8π - (8 + 16 · π/4) ] = 8 + 8π - 8 - 4π = 4π sq. units.",
        "stepMarking": [
          {
            "step": "Sketch figure & find intersection (4, 4) and (4√2, 0)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Split integral ∫₀⁴ x dx + ∫₄^(4√2) √(32-x²) dx",
            "marks": "1.5 Marks"
          },
          {
            "step": "Evaluate standard √(a²-x²) integral -> 4π sq. units",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Quick geometric sanity check: θ = 45° (1/8 of full circle area πr² = 32π) => 32π / 8 = 4π!",
        "commonPitfall": "Integrating √(32 - x²) from 0 to 4√2 without splitting at x = 4."
      },
      {
        "id": "cbse-c12-math-2023-comp-q36",
        "qNum": 36,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Maxima / Minima Applied Geometry (Open Box)",
        "questionText": "Read the case and answer:\nA square piece of tin of side 18 cm is to be made into a box without top by cutting a square of side x cm from each corner and folding up the flaps.\n\n(a) Write the dimensions and Volume V(x) of the open box in terms of x. (1M)\n(b) Find the value of x that maximises the volume using derivatives. (2M)\n(c) Calculate the maximum possible volume of the box. (1M)",
        "modelAnswer": "(a) Base side = (18 - 2x) cm, height = x cm (0 < x < 9). Volume V(x) = x(18 - 2x)².\n(b) V'(x) = (18 - 2x)² + x · 2(18 - 2x)(-2) = (18 - 2x)(18 - 2x - 4x) = (18 - 2x)(18 - 6x) = 0 => x = 9 (rejected) or x = 3 cm.\nV''(x) at x = 3 is -6(18 - 12) + ... = -72 < 0 => maximum at x = 3 cm.\n(c) V_max = 3 × (18 - 6)² = 3 × 144 = 432 cm³.",
        "stepMarking": [
          {
            "step": "(a) V(x) = x(18 - 2x)²",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Derivative check -> x = 3 cm",
            "marks": "2 Marks"
          },
          {
            "step": "(c) V_max = 432 cm³",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Side cut from EACH corner removes 2x from total length 18 cm!",
        "commonPitfall": "Writing base side as (18 - x) instead of (18 - 2x)."
      },
      {
        "id": "cbse-c12-math-2023-comp-q37",
        "qNum": 37,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Bayes' Theorem (Diagnostic Test / Factory Defect)",
        "questionText": "Read the case and answer:\nIn a bolt factory, Machines A, B, and C manufacture respectively 25%, 35%, and 40% of total output. Of their outputs, 5%, 4%, and 2% respectively are defective bolts. A bolt is drawn at random from the product and is found to be defective.\n\n(a) Write the prior probabilities P(A), P(B), P(C) and conditional defect probabilities. (1M)\n(b) Find the total probability P(D) that a randomly selected bolt is defective. (1.5M)\n(c) Using Bayes' theorem, find the probability that the defective bolt was manufactured by Machine B. (1.5M)",
        "modelAnswer": "(a) P(A) = 0.25, P(B) = 0.35, P(C) = 0.40; P(D|A) = 0.05, P(D|B) = 0.04, P(D|C) = 0.02.\n(b) P(D) = 0.25(0.05) + 0.35(0.04) + 0.40(0.02) = 0.0125 + 0.0140 + 0.0080 = 0.0345.\n(c) P(B|D) = [0.35 × 0.04] / 0.0345 = 0.0140 / 0.0345 = 140 / 345 = 28 / 69.",
        "stepMarking": [
          {
            "step": "(a) Prior & conditional probabilities",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Total probability P(D) = 0.0345",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Bayes formula -> 28/69",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Simplify numerator and denominator fractions cleanly (divide by 5 -> 28/69).",
        "commonPitfall": "Leaving out P(A), P(B), P(C) weights in total probability."
      },
      {
        "id": "cbse-c12-math-2023-comp-q38",
        "qNum": 38,
        "section": "E",
        "marks": 4,
        "topic": "Case Study: Relations & Bijections (One-One & Onto)",
        "questionText": "Read the case and answer:\nConsider a function f : ℝ - {3} → ℝ - {1} defined by f(x) = (x - 2) / (x - 3).\n\n(a) Show that f is one-one (injective). (1.5M)\n(b) Show that f is onto (surjective). (1.5M)\n(c) Find the inverse function f⁻¹(y). (1M)",
        "modelAnswer": "(a) Let f(x₁) = f(x₂) => (x₁ - 2)/(x₁ - 3) = (x₂ - 2)/(x₂ - 3).\nCross-multiplying: x₁x₂ - 3x₁ - 2x₂ + 6 = x₁x₂ - 2x₁ - 3x₂ + 6 => -x₁ = -x₂ => x₁ = x₂. Hence f is one-one.\n(b) Let y ∈ ℝ - {1}. Set y = (x - 2)/(x - 3) => xy - 3y = x - 2 => x(y - 1) = 3y - 2 => x = (3y - 2)/(y - 1), which is well-defined and ≠ 3 (since (3y-2)/(y-1) = 3 gives -2 = -3, impossible!). Thus every y has preimage -> onto.\n(c) f⁻¹(y) = (3y - 2) / (y - 1).",
        "stepMarking": [
          {
            "step": "(a) Algebraic proof x₁ = x₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Express x = (3y-2)/(y-1) and check domain",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Inverse expression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Verify x ≠ 3 when proving onto for fractional rational functions!",
        "commonPitfall": "Claiming onto without checking pre-image belongs to domain ℝ - {3}."
      }
    ]
  }
];
