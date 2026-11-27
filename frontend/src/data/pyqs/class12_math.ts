import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_12_MATH_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE CLASS 12 MATHEMATICS 2024 BOARD EXAM (COMPLETE FULL PAPER - SET 65/1/1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c12-math-2024-board',
    title: 'CBSE Class 12 Mathematics Board Exam 2024 (Complete Original Paper - Set 65/1/1)',
    subject: 'Mathematics',
    targetClass: 'Class 12',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '65/1/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: true,
    totalQuestions: 38,
    generalInstructions: [
      'This question paper contains 38 questions in 5 sections: Section A to Section E.',
      'Section A comprises 20 Multiple Choice Questions (MCQs) of 1 mark each (Q1 to Q18 are MCQs and Q19 & Q20 are Assertion-Reason).',
      'Section B comprises 5 Short Answer Type-I (SA-I) questions of 2 marks each (Q21 to Q25).',
      'Section C comprises 6 Short Answer Type-II (SA-II) questions of 3 marks each (Q26 to Q31).',
      'Section D comprises 4 Long Answer (LA) questions of 5 marks each (Q32 to Q35).',
      'Section E comprises 3 Case-Based integrated units of assessment of 4 marks each with sub-parts (Q36 to Q38).',
      'All questions are compulsory. Internal choice is provided in 2 questions of Sec B, 3 in Sec C, 2 in Sec D and 2 in Sec E.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-math-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Matrices & Determinants: Order & Elements',
        questionText: 'If A is a square matrix of order 3 such that |adj(A)| = 64, then the value of |A| is:',
        options: [
          'A) ± 8',
          'B) 8',
          'C) ± 4',
          'D) 64'
        ],
        correctOption: 'A',
        modelAnswer: 'A) ± 8.\nFor an n × n square matrix A, |adj(A)| = |A|^(n - 1).\nHere n = 3, so |adj(A)| = |A|^(3 - 1) = |A|^2.\nGiven |adj(A)| = 64 ⇒ |A|^2 = 64 ⇒ |A| = ± 8.',
        stepMarking: [
          { step: 'Using formula |adj(A)| = |A|^(n-1)', marks: '0.5 Mark' },
          { step: '|A|^2 = 64 ⇒ |A| = ±8 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Remember the ± sign when taking square roots unless A is specifically stated to be positive definite.',
        commonPitfall: 'Choosing only +8 and forgetting that (-8)^2 is also 64.'
      },
      {
        id: 'c12-math-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Inverse Trigonometric Functions: Principal Values',
        questionText: 'The principal value of cos⁻¹(cos(7π/6)) is equal to:',
        options: [
          'A) 7π/6',
          'B) 5π/6',
          'C) π/6',
          'D) -π/6'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 5π/6.\nThe principal value branch of cos⁻¹(x) is [0, π].\nSince 7π/6 > π, it does not lie in the principal value branch.\nWe rewrite:\ncos(7π/6) = cos(2π - 5π/6) = cos(5π/6).\nSince 5π/6 ∈ [0, π], cos⁻¹(cos(5π/6)) = 5π/6.',
        stepMarking: [
          { step: 'Recognizing 7π/6 ∉ [0, π] and rewriting as cos(2π - 5π/6) = cos(5π/6)', marks: '0.5 Mark' },
          { step: 'Result 5π/6 (Option B)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Always check if the angle lies in the principal range: [0, π] for cos⁻¹, [-π/2, π/2] for sin⁻¹.',
        commonPitfall: 'Directly cancelling cos⁻¹(cos θ) = θ to write 7π/6, which violates the range.'
      },
      {
        id: 'c12-math-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Matrices: Symmetric and Skew-Symmetric Matrices',
        questionText: 'If A is any square matrix, then (A - Aᵀ) is always a:',
        options: [
          'A) Symmetric matrix',
          'B) Skew-symmetric matrix',
          'C) Identity matrix',
          'D) Diagonal matrix'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Skew-symmetric matrix.\nLet P = A - Aᵀ.\nTaking transpose on both sides:\nPᵀ = (A - Aᵀ)ᵀ = Aᵀ - (Aᵀ)ᵀ = Aᵀ - A = -(A - Aᵀ) = -P.\nSince Pᵀ = -P, P is a skew-symmetric matrix.',
        stepMarking: [
          { step: 'Pᵀ = (A - Aᵀ)ᵀ = Aᵀ - A = -P ⇒ Skew-symmetric (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'A + Aᵀ is always symmetric, while A - Aᵀ is always skew-symmetric for any real square matrix A.',
        commonPitfall: 'Confusing symmetric (Pᵀ = P) with skew-symmetric (Pᵀ = -P).'
      },
      {
        id: 'c12-math-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Continuity & Differentiability: Continuity at a Point',
        questionText: 'If the function f(x) = { (k·cos x)/(π - 2x) for x ≠ π/2; 3 for x = π/2 } is continuous at x = π/2, then the value of k is:',
        options: [
          'A) 3',
          'B) 6',
          'C) -6',
          'D) 2'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 6.\nFor f(x) to be continuous at x = π/2, lim_{x→π/2} f(x) = f(π/2) = 3.\nLet x = π/2 + h. As x → π/2, h → 0.\nlim_{h→0} [ k · cos(π/2 + h) ] / [ π - 2(π/2 + h) ]\n= lim_{h→0} [ -k · sin h ] / [ -2h ]\n= (k/2) · lim_{h→0} (sin h / h) = k/2 · 1 = k/2.\nEquating to f(π/2):\nk/2 = 3 ⇒ k = 6.',
        stepMarking: [
          { step: 'Evaluating limit as x→π/2 giving k/2', marks: '0.5 Mark' },
          { step: 'Setting k/2 = 3 ⇒ k = 6 (Option B)', marks: '0.5 Mark' }
        ],
        examinerTip: 'L’Hôpital’s rule is a fast check: derivative of numerator is -k sin x, derivative of denominator is -2. At x = π/2: (-k)/(-2) = k/2 = 3 ⇒ k = 6.',
        commonPitfall: 'Minus sign error when replacing cos(π/2 + h) = -sin h.'
      },
      {
        id: 'c12-math-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Calculus: Derivative of Composite Function',
        questionText: 'If y = log(sec x + tan x), then dy/dx is equal to:',
        options: [
          'A) sec x',
          'B) tan x',
          'C) sec x + tan x',
          'D) sec² x'
        ],
        correctOption: 'A',
        modelAnswer: 'A) sec x.\nUsing Chain Rule:\ndy/dx = [ 1 / (sec x + tan x) ] · d/dx (sec x + tan x)\n= [ 1 / (sec x + tan x) ] · (sec x tan x + sec² x)\n= [ sec x (tan x + sec x) ] / (sec x + tan x) = sec x.',
        stepMarking: [
          { step: 'Chain rule: 1/(sec x + tan x) · (sec x tan x + sec² x) = sec x (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'This is a standard anti-derivative formula in reverse: ∫ sec x dx = ln|sec x + tan x| + C.',
        commonPitfall: 'Incorrect differentiation of sec x as sec² x.'
      },
      {
        id: 'c12-math-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Application of Derivatives: Increasing/Decreasing Functions',
        questionText: 'The function f(x) = 2x³ - 9x² + 12x + 5 is strictly decreasing in the interval:',
        options: [
          'A) (1, 2)',
          'B) (-∞, 1)',
          'C) (2, ∞)',
          'D) (-∞, 1) ∪ (2, ∞)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (1, 2).\nf\'(x) = 6x² - 18x + 12 = 6(x² - 3x + 2) = 6(x - 1)(x - 2).\nFor strictly decreasing, f\'(x) < 0:\n6(x - 1)(x - 2) < 0 ⇒ 1 < x < 2.\nThus, f(x) is strictly decreasing in the open interval (1, 2).',
        stepMarking: [
          { step: 'f\'(x) = 6(x - 1)(x - 2)', marks: '0.5 Mark' },
          { step: 'f\'(x) < 0 ⇒ x ∈ (1, 2) (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'For strictly decreasing, use strict inequality f\'(x) < 0 and open interval (1, 2).',
        commonPitfall: 'Selecting the intervals where f\'(x) > 0 (Option D).'
      },
      {
        id: 'c12-math-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Integrals: Definite Integral by Substitution',
        questionText: 'The value of the definite integral ∫₀¹ x·e^(x²) dx is:',
        options: [
          'A) (e - 1)/2',
          'B) e - 1',
          'C) (e + 1)/2',
          'D) 2(e - 1)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (e - 1)/2.\nLet t = x² ⇒ dt = 2x dx ⇒ x dx = dt/2.\nWhen x = 0, t = 0.\nWhen x = 1, t = 1.\n∫₀¹ x·e^(x²) dx = (1/2) ∫₀¹ e^t dt = (1/2) [ e^t ]₀¹ = (1/2) (e¹ - e⁰) = (e - 1)/2.',
        stepMarking: [
          { step: 'Substitution t = x², limits 0 to 1, integral (1/2)[e^t]', marks: '0.5 Mark' },
          { step: '(e - 1)/2 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Never forget e⁰ = 1 when evaluating lower limits of exponential integrals.',
        commonPitfall: 'Taking e⁰ = 0, which gives e/2 instead of (e - 1)/2.'
      },
      {
        id: 'c12-math-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Differential Equations: Order and Degree',
        questionText: 'The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = d²y/dx² are respectively:',
        options: [
          'A) Order = 2, Degree = 2',
          'B) Order = 2, Degree = 3',
          'C) Order = 1, Degree = 2',
          'D) Order = 2, Degree = not defined'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Order = 2, Degree = 2.\nSquaring both sides to make powers of derivatives rational integers:\n[ 1 + (dy/dx)² ]³ = (d²y/dx²)².\nThe highest order derivative present is d²y/dx², so Order = 2.\nThe power (exponent) of the highest order derivative in this polynomial form is 2, so Degree = 2.',
        stepMarking: [
          { step: 'Rationalizing equation: [1 + (dy/dx)²]³ = (d²y/dx²)²', marks: '0.5 Mark' },
          { step: 'Order = 2, Degree = 2 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Degree can only be determined after eliminating fractional powers and radicals from all derivative terms.',
        commonPitfall: 'Stating degree as 1 by looking at original equation before squaring.'
      },
      {
        id: 'c12-math-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Differential Equations: Integrating Factor',
        questionText: 'The integrating factor (I.F.) for the linear differential equation dy/dx + y·cot x = 2 cos x is:',
        options: [
          'A) sin x',
          'B) cosec x',
          'C) log(sin x)',
          'D) -sin x'
        ],
        correctOption: 'A',
        modelAnswer: 'A) sin x.\nThe equation is in standard linear form dy/dx + P(x)·y = Q(x), where P(x) = cot x.\nIntegrating Factor = e^(∫ P(x) dx) = e^(∫ cot x dx) = e^(ln|sin x|) = sin x.',
        stepMarking: [
          { step: 'I.F. = e^(∫ cot x dx) = e^(ln sin x) = sin x (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'e^(ln f(x)) = f(x). Always write the simplified function without the logarithm.',
        commonPitfall: 'Writing log(sin x) instead of evaluating the exponential.'
      },
      {
        id: 'c12-math-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Vector Algebra: Dot & Cross Product Relation',
        questionText: 'If |a⃗| = 2, |b⃗| = 5, and |a⃗ × b⃗| = 8, then the value of a⃗ · b⃗ is:',
        options: [
          'A) 6',
          'B) ± 6',
          'C) 10',
          'D) ± 4'
        ],
        correctOption: 'B',
        modelAnswer: 'B) ± 6.\nLagrange\'s Identity relates dot and cross products:\n|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|²\n8² + (a⃗ · b⃗)² = 2² · 5²\n64 + (a⃗ · b⃗)² = 4 · 25 = 100\n(a⃗ · b⃗)² = 100 - 64 = 36\na⃗ · b⃗ = ± √36 = ± 6.',
        stepMarking: [
          { step: 'Using Lagrange identity: |a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|²', marks: '0.5 Mark' },
          { step: '(a⃗ · b⃗)² = 36 ⇒ a⃗ · b⃗ = ± 6 (Option B)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Cos θ can be positive or negative depending on whether angle θ is acute or obtuse, hence ±6 is required.',
        commonPitfall: 'Forgetting the negative root and marking only +6.'
      },
      {
        id: 'c12-math-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Vector Algebra: Projection of a Vector',
        questionText: 'The projection of the vector a⃗ = 2î + 3ĵ + 2k̂ on the vector b⃗ = î + 2ĵ + k̂ is:',
        options: [
          'A) 10 / √6',
          'B) 5 / √6',
          'C) 10 / √17',
          'D) 5 / √17'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 10 / √6.\nProjection of a⃗ on b⃗ = (a⃗ · b⃗) / |b⃗|.\na⃗ · b⃗ = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10.\n|b⃗| = √(1² + 2² + 1²) = √(1 + 4 + 1) = √6.\nProjection = 10 / √6 (or 5√6 / 3).',
        stepMarking: [
          { step: 'Formula (a⃗ · b⃗) / |b⃗| with a⃗ · b⃗ = 10 and |b⃗| = √6', marks: '0.5 Mark' },
          { step: 'Projection = 10 / √6 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'The denominator is always the magnitude of the vector ON WHICH projection is taken.',
        commonPitfall: 'Dividing by |a⃗| = √17 instead of |b⃗| = √6.'
      },
      {
        id: 'c12-math-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Three Dimensional Geometry: Direction Cosines',
        questionText: 'If a line makes angles α = 90°, β = 60°, and γ = 30° with the positive x, y, and z axes respectively, then cos² α + cos² β + cos² γ is:',
        options: [
          'A) 0',
          'B) 1',
          'C) 2',
          'D) 1/2'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 1.\nFor any straight line in space with direction angles α, β, γ, the direction cosines l, m, n satisfy the fundamental identity:\nl² + m² + n² = cos² α + cos² β + cos² γ = 1.\nVerification: cos²(90°) + cos²(60°) + cos²(30°) = 0 + (1/2)² + (√3/2)² = 0 + 1/4 + 3/4 = 1.',
        stepMarking: [
          { step: 'Identity cos²α + cos²β + cos²γ = 1 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'The sum of squares of direction cosines of ANY line in 3D is ALWAYS 1.',
        commonPitfall: 'Confusing cos²α + cos²β + cos²γ = 1 with sin²α + sin²β + sin²γ = 2.'
      },
      {
        id: 'c12-math-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Three Dimensional Geometry: Distance of Point from Origin',
        questionText: 'The coordinates of the foot of perpendicular drawn from the point P(2, 3, 4) to the y-axis are:',
        options: [
          'A) (2, 0, 0)',
          'B) (0, 3, 0)',
          'C) (0, 0, 4)',
          'D) (2, 3, 0)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) (0, 3, 0).\nAny point on the y-axis has x-coordinate = 0 and z-coordinate = 0.\nTherefore, the foot of perpendicular from (x, y, z) to the y-axis is (0, y, 0), which is (0, 3, 0).',
        stepMarking: [
          { step: 'On y-axis, x = 0 and z = 0 ⇒ (0, 3, 0) (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'To drop a perpendicular to an axis, retain that axis’ coordinate and set all other coordinates to 0.',
        commonPitfall: 'Confusing projection onto y-axis (0, 3, 0) with projection onto xy-plane (2, 3, 0).'
      },
      {
        id: 'c12-math-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Linear Programming: Feasible Region & Optimal Value',
        questionText: 'In a Linear Programming Problem, the objective function Z = ax + by attains its optimal value:',
        options: [
          'A) At any interior point of the feasible region',
          'B) At corner points (vertices) of the feasible region',
          'C) Only at the origin',
          'D) Outside the feasible region'
        ],
        correctOption: 'B',
        modelAnswer: 'B) At corner points (vertices) of the feasible region.\nBy the Fundamental Theorem of Linear Programming, the optimal (maximum or minimum) value of the objective function Z = ax + by, if it exists, must occur at one of the extreme points (corner points or vertices) of the convex feasible region.',
        stepMarking: [
          { step: 'Corner Point Theorem statement (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'If two corner points give the same optimal value, every point on the line segment joining them is also an optimal solution.',
        commonPitfall: 'Believing the optimal point can be anywhere inside the feasible region.'
      },
      {
        id: 'c12-math-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Probability: Conditional Probability',
        questionText: 'If P(A) = 0.4, P(B) = 0.8, and P(B|A) = 0.6, then P(A ∪ B) is equal to:',
        options: [
          'A) 0.96',
          'B) 0.84',
          'C) 0.72',
          'D) 0.90'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 0.96.\nFrom conditional probability: P(B|A) = P(A ∩ B) / P(A)\n⇒ P(A ∩ B) = P(B|A) · P(A) = 0.6 · 0.4 = 0.24.\nUsing Addition Theorem:\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n= 0.4 + 0.8 - 0.24 = 1.20 - 0.24 = 0.96.',
        stepMarking: [
          { step: 'P(A ∩ B) = 0.6 × 0.4 = 0.24', marks: '0.5 Mark' },
          { step: 'P(A ∪ B) = 0.4 + 0.8 - 0.24 = 0.96 (Option A)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Check: Probability can never exceed 1. Since 0.96 ≤ 1, this is valid.',
        commonPitfall: 'Assuming A and B are independent and calculating P(A ∩ B) = P(A)·P(B) = 0.32, which is invalid since P(B|A) = 0.6 ≠ P(B).'
      },
      {
        id: 'c12-math-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Probability: Independent Events',
        questionText: 'Two events A and B are independent if and only if:',
        options: [
          'A) P(A ∩ B) = P(A) · P(B)',
          'B) P(A ∪ B) = P(A) + P(B)',
          'C) P(A ∩ B) = 0',
          'D) P(A) = P(B)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) P(A ∩ B) = P(A) · P(B).\nBy mathematical definition, two events A and B associated with a random experiment are independent if the occurrence or non-occurrence of one does not affect the probability of occurrence of the other, which is equivalent to P(A ∩ B) = P(A) · P(B).',
        stepMarking: [
          { step: 'Definition of independent events (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Do not confuse "independent events" (P(A ∩ B) = P(A)P(B)) with "mutually exclusive events" (P(A ∩ B) = 0).',
        commonPitfall: 'Selecting Option C (mutually exclusive).'
      },
      {
        id: 'c12-math-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Relations & Functions: Equivalence Relation',
        questionText: 'Let R be a relation in the set A = {1, 2, 3} given by R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1), (2, 3)}. Which of the following is correct?',
        options: [
          'A) R is reflexive and symmetric, but not transitive',
          'B) R is reflexive, but neither symmetric nor transitive',
          'C) R is an equivalence relation',
          'D) R is symmetric and transitive, but not reflexive'
        ],
        correctOption: 'B',
        modelAnswer: 'B) R is reflexive, but neither symmetric nor transitive.\n1. Reflexive: Since (1, 1), (2, 2), (3, 3) ∈ R, R is reflexive.\n2. Symmetric: (2, 3) ∈ R, but (3, 2) ∉ R. Hence R is NOT symmetric.\n3. Transitive: (1, 2) ∈ R and (2, 3) ∈ R, but (1, 3) ∉ R. Hence R is NOT transitive.\nTherefore, R is reflexive, but neither symmetric nor transitive.',
        stepMarking: [
          { step: 'Verification: (a,a) present (reflexive); (2,3) present but (3,2) missing (not symmetric); (1,2),(2,3) present but (1,3) missing (not transitive) (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'To disprove symmetry or transitivity, one counterexample is sufficient.',
        commonPitfall: 'Observing (1, 2) and (2, 1) and hastily concluding the relation is symmetric.'
      },
      {
        id: 'c12-math-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Determinants: Singular Matrix Condition',
        questionText: 'For what value of x is the matrix A = [[x + 1, -3], [2, x - 4]] singular?',
        options: [
          'A) x = -1, -2',
          'B) x = -1, 2',
          'C) x = 1, 2',
          'D) x = 3, -2'
        ],
        correctOption: 'C',
        modelAnswer: 'C) x = 1, 2.\nA matrix is singular if its determinant is zero: |A| = 0.\n|A| = (x + 1)(x - 4) - (-3)(2) = 0\nx² - 4x + x - 4 + 6 = 0\nx² - 3x + 2 = 0\n(x - 1)(x - 2) = 0 ⇒ x = 1, 2.',
        stepMarking: [
          { step: 'Determinant equation: x² - 3x + 2 = 0', marks: '0.5 Mark' },
          { step: 'Roots: x = 1, x = 2 (Option C)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Singular matrix means det(A) = 0. Always factorize the quadratic cleanly.',
        commonPitfall: 'Sign error when subtracting product of off-diagonal elements.'
      },
      {
        id: 'c12-math-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Vector Collinearity',
        questionText: 'Assertion (A): Two non-zero vectors a⃗ and b⃗ are collinear if and only if a⃗ × b⃗ = 0⃗.\nReason (R): The angle θ between two collinear vectors is either 0° or 180°, and sin 0° = sin 180° = 0.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nExplanation:\nBy definition, |a⃗ × b⃗| = |a⃗||b⃗| sin θ.\nIf a⃗ and b⃗ are collinear, they are parallel (θ = 0°) or anti-parallel (θ = 180°).\nIn both cases, sin θ = 0, which makes a⃗ × b⃗ = 0⃗.\nConversely, if a⃗ × b⃗ = 0⃗ for non-zero vectors, sin θ = 0 ⇒ θ = 0° or 180°, proving they are collinear.\nThus, Reason (R) correctly explains Assertion (A).',
        stepMarking: [
          { step: 'Assertion is true, Reason is true and correctly explains Assertion (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Check both conditions: truth value of individual statements and direct causal explanation.',
        commonPitfall: 'Thinking collinearity only means θ = 0° (parallel) and forgetting anti-parallel vectors (θ = 180°).'
      },
      {
        id: 'c12-math-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Continuity and Differentiability',
        questionText: 'Assertion (A): The function f(x) = |x - 2| is continuous at x = 2 but not differentiable at x = 2.\nReason (R): Every continuous function is always differentiable.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (A) is true, but (R) is false.\nExplanation:\nAssertion (A) is TRUE: f(x) = |x - 2| is continuous everywhere on R including x = 2. However, Left Hand Derivative at x = 2 is -1 and Right Hand Derivative is +1. Since LHD ≠ RHD, f is not differentiable at x = 2.\nReason (R) is FALSE: Differentiability implies continuity, but the converse is not true. A function can be continuous at a sharp point or corner without being differentiable.',
        stepMarking: [
          { step: 'Assertion is true, Reason is false (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Golden rule of calculus: Differentiability ⇒ Continuity, but Continuity ⇏ Differentiability.',
        commonPitfall: 'Marking Option A assuming continuity and differentiability are equivalent.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q21 to Q25 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-math-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Inverse Trigonometric Functions: Value Simplification',
        questionText: 'Find the exact value of tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2).',
        modelAnswer: 'Method 1 (Using Principal Values):\n1. tan⁻¹(1) = π/4 (since 1 = tan(π/4), π/4 ∈ (-π/2, π/2)).\n2. cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3.\n3. sin⁻¹(-1/2) = -sin⁻¹(1/2) = -π/6.\nSum = π/4 + 2π/3 - π/6 = π/4 + (4π - π)/6 = π/4 + 3π/6 = π/4 + π/2 = 3π/4.\n\nMethod 2 (Using Identity):\nWe know cos⁻¹(x) + sin⁻¹(x) = π/2 for all x ∈ [-1, 1].\nHere x = -1/2, so cos⁻¹(-1/2) + sin⁻¹(-1/2) = π/2.\nTherefore, tan⁻¹(1) + [cos⁻¹(-1/2) + sin⁻¹(-1/2)] = π/4 + π/2 = 3π/4.',
        stepMarking: [
          { step: 'Using identity cos⁻¹(-1/2) + sin⁻¹(-1/2) = π/2 or calculating individual principal values', marks: '1 Mark' },
          { step: 'Final exact evaluation: π/4 + π/2 = 3π/4', marks: '1 Mark' }
        ],
        examinerTip: 'Using the standard identity cos⁻¹(x) + sin⁻¹(x) = π/2 saves time and eliminates arithmetic sign errors.',
        commonPitfall: 'Writing cos⁻¹(-1/2) = -π/3 instead of π - π/3 = 2π/3.'
      },
      {
        id: 'c12-math-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Application of Derivatives: Rate of Change of Quantities',
        questionText: 'The radius of a sphere is increasing at a uniform rate of 3 cm/s. At what rate is the surface area of the sphere increasing when its radius is 5 cm?',
        modelAnswer: 'Given:\ndr/dt = 3 cm/s\nSurface area of sphere: S = 4πr²\n\nDifferentiating with respect to time t:\ndS/dt = d/dt (4πr²) = 4π · 2r · (dr/dt) = 8πr · (dr/dt)\n\nSubstituting r = 5 cm and dr/dt = 3 cm/s:\ndS/dt = 8π · (5) · (3) = 120π cm²/s.\n\nTherefore, the surface area is increasing at the rate of 120π cm²/s.',
        stepMarking: [
          { step: 'Formula S = 4πr² and differentiation dS/dt = 8πr (dr/dt)', marks: '1 Mark' },
          { step: 'Substitution and final answer 120π cm²/s with proper units', marks: '1 Mark' }
        ],
        examinerTip: 'Always write the correct units (cm²/s for surface area rate, cm³/s for volume rate).',
        commonPitfall: 'Forgetting the chain rule factor (dr/dt) during differentiation.'
      },
      {
        id: 'c12-math-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Vector Algebra: Unit Vector Perpendicular to Two Vectors',
        questionText: 'Find a unit vector perpendicular to both vectors a⃗ = 2î + ĵ + 2k̂ and b⃗ = î + 2ĵ - 2k̂.',
        modelAnswer: 'A vector perpendicular to both a⃗ and b⃗ is given by the cross product a⃗ × b⃗.\na⃗ × b⃗ = |  î   ĵ   k̂  |\n          |  2   1   2  |\n          |  1   2  -2  |\n\n= î [ (1)(-2) - (2)(2) ] - ĵ [ (2)(-2) - (1)(2) ] + k̂ [ (2)(2) - (1)(1) ]\n= î [ -2 - 4 ] - ĵ [ -4 - 2 ] + k̂ [ 4 - 1 ]\n= -6î + 6ĵ + 3k̂.\n\nMagnitude of cross product:\n|a⃗ × b⃗| = √[ (-6)² + 6² + 3² ] = √(36 + 36 + 9) = √81 = 9.\n\nRequired Unit Vector n̂:\nn̂ = ± (a⃗ × b⃗) / |a⃗ × b⃗| = ± (-6î + 6ĵ + 3k̂) / 9 = ± (-2/3 î + 2/3 ĵ + 1/3 k̂).',
        stepMarking: [
          { step: 'Calculation of cross product a⃗ × b⃗ = -6î + 6ĵ + 3k̂', marks: '1 Mark' },
          { step: 'Magnitude |a⃗ × b⃗| = 9 and unit vector ±(-2/3 î + 2/3 ĵ + 1/3 k̂)', marks: '1 Mark' }
        ],
        examinerTip: 'Both +n̂ and -n̂ are perpendicular vectors to the given plane, so writing ± is fully appreciated.',
        commonPitfall: 'Minus sign error in evaluating the determinant expansion along ĵ.'
      },
      {
        id: 'c12-math-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Differential Equations: Homogeneous Differential Equation Check',
        questionText: 'Show that the differential equation (x² - y²) dx + 2xy dy = 0 is homogeneous and write its standard form dy/dx = F(y/x).',
        modelAnswer: 'Rewriting the given equation:\n2xy dy = -(x² - y²) dx = (y² - x²) dx\ndy/dx = (y² - x²) / (2xy).\n\nLet F(x, y) = (y² - x²) / (2xy).\nReplacing x by λx and y by λy:\nF(λx, λy) = [ (λy)² - (λx)² ] / [ 2(λx)(λy) ]\n= λ² (y² - x²) / [ λ² (2xy) ]\n= λ⁰ · [ (y² - x²) / (2xy) ] = λ⁰ · F(x, y).\nSince F(λx, λy) = λ⁰ F(x, y), it is a homogeneous function of degree 0.\n\nExpressing in standard form F(y/x):\nDivide numerator and denominator by x²:\ndy/dx = [ (y/x)² - 1 ] / [ 2(y/x) ].',
        stepMarking: [
          { step: 'Expressing dy/dx and showing F(λx, λy) = λ⁰ F(x, y)', marks: '1 Mark' },
          { step: 'Dividing by x² to obtain standard form dy/dx = [(y/x)² - 1] / [2(y/x)]', marks: '1 Mark' }
        ],
        examinerTip: 'To prove a function is homogeneous, always demonstrate F(λx, λy) = λ⁰ F(x, y).',
        commonPitfall: 'Asserting homogeneity without formal λ test.'
      },
      {
        id: 'c12-math-24-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Probability: Multiplication Theorem',
        questionText: 'A die is thrown twice and the sum of the numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?',
        modelAnswer: 'Sample space S has 6 × 6 = 36 outcomes.\nLet event A: "Sum of numbers appearing is 6"\nA = {(1, 5), (2, 4), (3, 3), (4, 2), (5, 1)} ⇒ n(A) = 5.\n\nLet event B: "Number 4 appears at least once"\nB = {(4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (1, 4), (2, 4), (3, 4), (5, 4), (6, 4)} ⇒ n(B) = 11.\n\nIntersection event (A ∩ B): Sum is 6 AND 4 appears at least once:\nA ∩ B = {(2, 4), (4, 2)} ⇒ n(A ∩ B) = 2.\n\nConditional Probability P(B|A):\nP(B|A) = n(A ∩ B) / n(A) = 2 / 5.',
        stepMarking: [
          { step: 'Listing outcomes for event A (5 pairs) and A ∩ B (2 pairs)', marks: '1 Mark' },
          { step: 'Formula and calculation: P(B|A) = 2/5', marks: '1 Mark' }
        ],
        examinerTip: 'Conditional probability reduces the sample space to the given condition A.',
        commonPitfall: 'Dividing by 36 or 11 instead of n(A) = 5.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER TYPE-II (Q26 to Q31 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-math-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Integrals: Definite Integral using King\'s Property',
        questionText: 'Evaluate the definite integral: I = ∫₀^(π/2) [ √sin x / (√sin x + √cos x) ] dx.',
        modelAnswer: 'Given:\nI = ∫₀^(π/2) [ √sin x / (√sin x + √cos x) ] dx    ...(Equation 1)\n\nUsing the definite integral property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx:\nReplace x by (π/2 - x):\nI = ∫₀^(π/2) [ √sin(π/2 - x) / (√sin(π/2 - x) + √cos(π/2 - x)) ] dx\nSince sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:\nI = ∫₀^(π/2) [ √cos x / (√cos x + √sin x) ] dx    ...(Equation 2)\n\nAdding Equation (1) and Equation (2):\n2I = ∫₀^(π/2) [ (√sin x + √cos x) / (√sin x + √cos x) ] dx\n2I = ∫₀^(π/2) 1 dx\n2I = [ x ]₀^(π/2) = π/2 - 0 = π/2\nI = π/4.\n\nThus, the value of the integral is π/4.',
        stepMarking: [
          { step: 'Applying King’s property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx and writing Eq 2', marks: '1 Mark' },
          { step: 'Adding Eq 1 and Eq 2 to get 2I = ∫ 1 dx', marks: '1 Mark' },
          { step: 'Integrating [x] from 0 to π/2 and concluding I = π/4', marks: '1 Mark' }
        ],
        examinerTip: 'State the property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx clearly on the side to secure full method marks.',
        commonPitfall: 'Forgetting to divide by 2 at the very end, leaving 2I = π/2 instead of I = π/4.'
      },
      {
        id: 'c12-math-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Integrals: Integration by Partial Fractions',
        questionText: 'Evaluate the indefinite integral: ∫ [ (2x - 1) / ((x - 1)(x + 2)(x - 3)) ] dx.',
        modelAnswer: 'Let the integrand be resolved into partial fractions:\n(2x - 1) / [ (x - 1)(x + 2)(x - 3) ] = A/(x - 1) + B/(x + 2) + C/(x - 3)\n\nMultiplying both sides by (x - 1)(x + 2)(x - 3):\n2x - 1 = A(x + 2)(x - 3) + B(x - 1)(x - 3) + C(x - 1)(x + 2)\n\nTo find A: Put x = 1:\n2(1) - 1 = A(1 + 2)(1 - 3) ⇒ 1 = A(3)(-2) = -6A ⇒ A = -1/6.\n\nTo find B: Put x = -2:\n2(-2) - 1 = B(-2 - 1)(-2 - 3) ⇒ -5 = B(-3)(-5) = 15B ⇒ B = -5/15 = -1/3.\n\nTo find C: Put x = 3:\n2(3) - 1 = C(3 - 1)(3 + 2) ⇒ 5 = C(2)(5) = 10C ⇒ C = 5/10 = 1/2.\n\nNow integrate term by term:\n∫ [ (2x - 1) / ((x - 1)(x + 2)(x - 3)) ] dx\n= -1/6 ∫ dx/(x - 1) - 1/3 ∫ dx/(x + 2) + 1/2 ∫ dx/(x - 3)\n= -1/6 ln|x - 1| - 1/3 ln|x + 2| + 1/2 ln|x - 3| + C.',
        stepMarking: [
          { step: 'Setting up partial fractions identity: A/(x-1) + B/(x+2) + C/(x-3)', marks: '1 Mark' },
          { step: 'Determining constants: A = -1/6, B = -1/3, C = 1/2', marks: '1 Mark' },
          { step: 'Term-by-term integration with log terms and arbitrary constant + C', marks: '1 Mark' }
        ],
        examinerTip: 'Heaviside cover-up method is acceptable for finding linear non-repeated partial fraction coefficients.',
        commonPitfall: 'Arithmetic sign errors when calculating B at x = -2.'
      },
      {
        id: 'c12-math-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Differential Equations: Particular Solution of Linear DE',
        questionText: 'Find the particular solution of the differential equation (1 + x²) dy/dx + 2xy = 1 / (1 + x²), given that y = 0 when x = 1.',
        modelAnswer: 'Dividing the entire equation by (1 + x²):\ndy/dx + [ 2x / (1 + x²) ] y = 1 / (1 + x²)²\nThis is a first-order linear differential equation: dy/dx + P(x)·y = Q(x)\nwhere P(x) = 2x / (1 + x²) and Q(x) = 1 / (1 + x²)².\n\nStep 1: Find Integrating Factor (I.F.):\n∫ P(x) dx = ∫ [ 2x / (1 + x²) ] dx = ln(1 + x²)\nI.F. = e^(∫ P dx) = e^[ln(1 + x²)] = (1 + x²).\n\nStep 2: General Solution:\ny · (I.F.) = ∫ [ Q(x) · (I.F.) ] dx + C\ny · (1 + x²) = ∫ [ (1 / (1 + x²)²) · (1 + x²) ] dx + C\ny · (1 + x²) = ∫ [ 1 / (1 + x²) ] dx + C\ny · (1 + x²) = tan⁻¹(x) + C\n\nStep 3: Particular Solution with initial condition y(1) = 0:\n0 · (1 + 1²) = tan⁻¹(1) + C\n0 = π/4 + C ⇒ C = -π/4.\n\nSubstituting C back:\ny · (1 + x²) = tan⁻¹(x) - π/4\n⇒ y = [ tan⁻¹(x) - π/4 ] / (1 + x²).',
        stepMarking: [
          { step: 'Dividing by (1+x²) and finding I.F. = (1 + x²)', marks: '1 Mark' },
          { step: 'General solution: y(1 + x²) = tan⁻¹(x) + C', marks: '1 Mark' },
          { step: 'Using y(1) = 0 to get C = -π/4 and final particular solution', marks: '1 Mark' }
        ],
        examinerTip: 'Do not forget to substitute the boundary condition to find the numerical value of C for particular solutions.',
        commonPitfall: 'Stopping at the general solution with arbitrary constant C.'
      },
      {
        id: 'c12-math-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Three Dimensional Geometry: Shortest Distance Between Skew Lines',
        questionText: 'Find the shortest distance between the skew lines:\nr⃗₁ = (î + 2ĵ + 3k̂) + λ(î - 3ĵ + 2k̂)\nr⃗₂ = (4î + 5ĵ + 6k̂) + μ(2î + 3ĵ + k̂).',
        modelAnswer: 'The shortest distance d between two skew lines r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂ is:\nd = | (b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁) | / |b⃗₁ × b⃗₂|\n\nHere:\na⃗₁ = î + 2ĵ + 3k̂,  b⃗₁ = î - 3ĵ + 2k̂\na⃗₂ = 4î + 5ĵ + 6k̂,  b⃗₂ = 2î + 3ĵ + k̂\n\n1. (a⃗₂ - a⃗₁) = (4 - 1)î + (5 - 2)ĵ + (6 - 3)k̂ = 3î + 3ĵ + 3k̂.\n\n2. Cross product b⃗₁ × b⃗₂:\n|  î   ĵ   k̂ |\n|  1  -3   2 |\n|  2   3   1 |\n= î [ (-3)(1) - (2)(3) ] - ĵ [ (1)(1) - (2)(2) ] + k̂ [ (1)(3) - (-3)(2) ]\n= î [ -3 - 6 ] - ĵ [ 1 - 4 ] + k̂ [ 3 + 6 ]\n= -9î + 3ĵ + 9k̂.\n\n3. Magnitude |b⃗₁ × b⃗₂|:\n|b⃗₁ × b⃗₂| = √[ (-9)² + 3² + 9² ] = √(81 + 9 + 81) = √171 = 3√19.\n\n4. Dot product (b⃗₁ × b⃗₂) · (a⃗₂ - a⃗₁):\n(-9)(3) + (3)(3) + (9)(3) = -27 + 9 + 27 = 9.\n\n5. Shortest distance:\nd = | 9 | / (3√19) = 3 / √19 units = (3√19 / 19) units.',
        stepMarking: [
          { step: 'Calculating (a⃗₂ - a⃗₁) and cross product b⃗₁ × b⃗₂ = -9î + 3ĵ + 9k̂', marks: '1 Mark' },
          { step: 'Calculating |b⃗₁ × b⃗₂| = 3√19 and dot product = 9', marks: '1 Mark' },
          { step: 'Shortest distance d = 3/√19 units', marks: '1 Mark' }
        ],
        examinerTip: 'Shortest distance is a scalar distance and must always be positive (take absolute value).',
        commonPitfall: 'Writing dot product incorrectly as a vector.'
      },
      {
        id: 'c12-math-24-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Probability: Bayes\' Theorem Application',
        questionText: 'An urn contains 5 red and 5 black balls. A ball is drawn at random, its colour is noted and is returned to the urn. Moreover, 2 additional balls of the colour drawn are put in the urn and then a ball is drawn at random. What is the probability that the second ball is red?',
        modelAnswer: 'Let event E₁: First ball drawn is red.\nLet event E₂: First ball drawn is black.\nLet event A: Second ball drawn is red.\n\nInitially, Total balls = 5 red + 5 black = 10 balls.\nP(E₁) = 5/10 = 1/2.\nP(E₂) = 5/10 = 1/2.\n\nCase 1: First ball was red (Event E₁):\n2 additional red balls are added. Urn now contains 7 red and 5 black balls (Total = 12 balls).\nProbability of drawing red second: P(A|E₁) = 7/12.\n\nCase 2: First ball was black (Event E₂):\n2 additional black balls are added. Urn now contains 5 red and 7 black balls (Total = 12 balls).\nProbability of drawing red second: P(A|E₂) = 5/12.\n\nBy the Law of Total Probability:\nP(A) = P(E₁) · P(A|E₁) + P(E₂) · P(A|E₂)\n= (1/2) · (7/12) + (1/2) · (5/12)\n= 7/24 + 5/24 = 12/24 = 1/2.',
        stepMarking: [
          { step: 'Defining events E₁, E₂, A and finding P(E₁) = 1/2, P(E₂) = 1/2', marks: '1 Mark' },
          { step: 'Conditional probabilities P(A|E₁) = 7/12 and P(A|E₂) = 5/12', marks: '1 Mark' },
          { step: 'Total probability formula and final result P(A) = 1/2', marks: '1 Mark' }
        ],
        examinerTip: 'Symmetry check: Since initial red and black counts are identical, probability of drawing red second must remain 1/2.',
        commonPitfall: 'Forgetting to add the 2 extra balls to the denominator (writing /10 instead of /12).'
      },
      {
        id: 'c12-math-24-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Continuity & Differentiability: Second Order Derivative',
        questionText: 'If y = (sin⁻¹ x)², prove that (1 - x²) d²y/dx² - x dy/dx = 2.',
        modelAnswer: 'Given:\ny = (sin⁻¹ x)²\n\nDifferentiating with respect to x:\ndy/dx = 2(sin⁻¹ x) · d/dx(sin⁻¹ x) = [ 2 sin⁻¹ x ] / √(1 - x²)\n\nMultiplying both sides by √(1 - x²):\n√(1 - x²) · (dy/dx) = 2 sin⁻¹ x\n\nSquaring both sides to avoid fractional derivatives:\n(1 - x²) (dy/dx)² = 4 (sin⁻¹ x)²\nSince y = (sin⁻¹ x)²:\n(1 - x²) (dy/dx)² = 4y\n\nDifferentiating both sides with respect to x using product rule:\n(1 - x²) · [ 2(dy/dx) · (d²y/dx²) ] + (dy/dx)² · (-2x) = 4 (dy/dx)\n\nDivide the entire equation by 2 (dy/dx) [since dy/dx ≠ 0 in general]:\n(1 - x²) (d²y/dx²) - x (dy/dx) = 2.\n\nHence proved.',
        stepMarking: [
          { step: 'First derivative dy/dx = 2 sin⁻¹ x / √(1 - x²)', marks: '1 Mark' },
          { step: 'Rearranging to (1 - x²)(dy/dx)² = 4y', marks: '1 Mark' },
          { step: 'Differentiating implicitly and dividing by 2(dy/dx) to obtain target result', marks: '1 Mark' }
        ],
        examinerTip: 'Squaring before taking the second derivative avoids messy quotient rule and directly yields the required differential relation.',
        commonPitfall: 'Directly taking second derivative using quotient rule and getting stuck in complex algebraic simplification.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q32 to Q35 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-math-24-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Matrices & Determinants: Matrix Inversion Method',
        questionText: 'Solve the following system of linear equations using the matrix method:\nx - y + 2z = 7\n3x + 4y - 5z = -5\n2x - y + 3z = 12',
        modelAnswer: 'The given system can be written in matrix form AX = B, where:\nA = [[ 1, -1,  2 ],\n     [ 3,  4, -5 ],\n     [ 2, -1,  3 ]],\nX = [[ x ], [ y ], [ z ]],\nB = [[ 7 ], [ -5 ], [ 12 ]].\n\nStep 1: Compute Determinant |A|:\n|A| = 1(12 - 5) - (-1)(9 - (-10)) + 2(-3 - 8)\n= 1(7) + 1(19) + 2(-11)\n= 7 + 19 - 22 = 4.\nSince |A| = 4 ≠ 0, A⁻¹ exists and the system has a unique solution given by X = A⁻¹B.\n\nStep 2: Find Co-factors of A:\nA₁₁ = + (12 - 5) = 7\nA₁₂ = - (9 - (-10)) = -19\nA₁₃ = + (-3 - 8) = -11\nA₂₁ = - (-3 - (-2)) = -(-1) = 1\nA₂₂ = + (3 - 4) = -1\nA₂₃ = - (-1 - (-2)) = -1\nA₃₁ = + (5 - 8) = -3\nA₃₂ = - (-5 - 6) = 11\nA₃₃ = + (4 - (-3)) = 7\n\nStep 3: Adjoint and Inverse Matrix:\nadj(A) = [[ 7,  1, -3 ],\n          [ -19, -1, 11 ],\n          [ -11, -1,  7 ]]\nA⁻¹ = (1 / |A|) · adj(A) = 1/4 · [[ 7, 1, -3 ], [ -19, -1, 11 ], [ -11, -1, 7 ]].\n\nStep 4: Calculate X = A⁻¹ B:\nX = 1/4 · [[ 7, 1, -3 ], [ -19, -1, 11 ], [ -11, -1, 7 ]] · [[ 7 ], [ -5 ], [ 12 ]]\n\nx = 1/4 · [ 7(7) + 1(-5) + (-3)(12) ] = 1/4 · [ 49 - 5 - 36 ] = 1/4 · [ 8 ] = 2.\ny = 1/4 · [ -19(7) + (-1)(-5) + 11(12) ] = 1/4 · [ -133 + 5 + 132 ] = 1/4 · [ 4 ] = 1.\nz = 1/4 · [ -11(7) + (-1)(-5) + 7(12) ] = 1/4 · [ -77 + 5 + 84 ] = 1/4 · [ 12 ] = 3.\n\nThus, x = 2, y = 1, z = 3.\nVerification: 1(2) - 1(1) + 2(3) = 2 - 1 + 6 = 7 (LHS = RHS).',
        stepMarking: [
          { step: 'Writing AX = B and calculating |A| = 4 ≠ 0', marks: '1 Mark' },
          { step: 'Calculating all 9 cofactors correctly', marks: '1.5 Marks' },
          { step: 'Forming adj(A) and writing A⁻¹ = (1/|A|) adj(A)', marks: '1 Mark' },
          { step: 'Matrix multiplication X = A⁻¹B and final solution x = 2, y = 1, z = 3', marks: '1.5 Marks' }
        ],
        examinerTip: 'Always verify the calculated values of x, y, z by plugging them back into the first equation.',
        commonPitfall: 'Forgetting to transpose the cofactor matrix to obtain adj(A).'
      },
      {
        id: 'c12-math-24-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Application of Integrals: Area Bounded by Curves',
        questionText: 'Using integration, find the area of the region bounded by the parabola y² = 4x and the straight line y = 2x - 4.',
        modelAnswer: 'Given curves:\n1. Parabola: y² = 4x ⇒ x = y²/4\n2. Straight line: y = 2x - 4 ⇒ 2x = y + 4 ⇒ x = (y + 4)/2\n\nStep 1: Points of Intersection:\nEquating x values from both equations:\ny²/4 = (y + 4)/2\ny² = 2(y + 4) = 2y + 8\ny² - 2y - 8 = 0\n(y - 4)(y + 2) = 0 ⇒ y = 4 or y = -2.\n\nCorresponding x-values:\nWhen y = 4: x = 16/4 = 4 ⇒ Point (4, 4).\nWhen y = -2: x = 4/4 = 1 ⇒ Point (1, -2).\n\nStep 2: Set up Area Integral (with respect to y):\nIn the interval y ∈ [-2, 4], the line lies to the right of the parabola:\nx_line = (y + 4)/2  and  x_parabola = y²/4.\n\nArea A = ∫₋₂⁴ [ x_line - x_parabola ] dy\n= ∫₋₂⁴ [ (y + 4)/2 - y²/4 ] dy\n= [ (1/2) (y²/2 + 4y) - (1/4) (y³/3) ]₋₂⁴\n= [ y²/4 + 2y - y³/12 ]₋₂⁴\n\nStep 3: Evaluate Upper Limit (y = 4):\n= [ 4²/4 + 2(4) - 4³/12 ] = [ 4 + 8 - 64/12 ] = [ 12 - 16/3 ] = 20/3.\n\nStep 4: Evaluate Lower Limit (y = -2):\n= [ (-2)²/4 + 2(-2) - (-2)³/12 ] = [ 1 - 4 - (-8/12) ] = [ -3 + 2/3 ] = -7/3.\n\nStep 5: Compute Total Area:\nArea = Upper - Lower = (20/3) - (-7/3) = 27/3 = 9 sq. units.\n\nTherefore, the required area is 9 square units.',
        stepMarking: [
          { step: 'Sketch/Points of intersection (4, 4) and (1, -2)', marks: '1.5 Marks' },
          { step: 'Formulating integral with respect to y: ∫₋₂⁴ [ (y+4)/2 - y²/4 ] dy', marks: '1.5 Marks' },
          { step: 'Integration and evaluation at limits giving 9 sq. units', marks: '2 Marks' }
        ],
        examinerTip: 'Integrating with respect to y is far easier here because it requires a single integral instead of splitting into two parts.',
        commonPitfall: 'Integrating with respect to x without splitting at x = 1.'
      },
      {
        id: 'c12-math-24-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Three Dimensional Geometry: Foot of Perpendicular & Image',
        questionText: 'Find the coordinates of the foot of the perpendicular and the perpendicular distance from the point P(1, 2, 3) to the line (x - 6)/3 = (y - 7)/2 = (z - 7)/-2. Also, find the image of point P in this line.',
        modelAnswer: 'Let the given line be:\n(x - 6)/3 = (y - 7)/2 = (z - 7)/-2 = λ    ...(1)\n\nAny general point N on this line has coordinates:\nN(3λ + 6, 2λ + 7, -2λ + 7).\nLet N be the foot of the perpendicular from P(1, 2, 3) to the line.\n\nStep 1: Direction Ratios of PN:\nPN = (3λ + 6 - 1) î + (2λ + 7 - 2) ĵ + (-2λ + 7 - 3) k̂\n= (3λ + 5) î + (2λ + 5) ĵ + (-2λ + 4) k̂.\nDirection ratios of the given line are b⃗ = (3, 2, -2).\n\nStep 2: Perpendicularity Condition (PN · b⃗ = 0):\n3(3λ + 5) + 2(2λ + 5) + (-2)(-2λ + 4) = 0\n9λ + 15 + 4λ + 10 + 4λ - 8 = 0\n17λ + 17 = 0 ⇒ 17λ = -17 ⇒ λ = -1.\n\nStep 3: Foot of the Perpendicular N:\nSubstitute λ = -1 into coordinates of N:\nN(3(-1) + 6, 2(-1) + 7, -2(-1) + 7) = N(3, 5, 9).\n\nStep 4: Perpendicular Distance |PN|:\n|PN| = √[ (3 - 1)² + (5 - 2)² + (9 - 3)² ]\n= √[ 2² + 3² + 6² ] = √[ 4 + 9 + 36 ] = √49 = 7 units.\n\nStep 5: Image Point Q(x\', y\', z\'):\nSince N is the midpoint of the segment PQ:\n(x\' + 1)/2 = 3 ⇒ x\' + 1 = 6 ⇒ x\' = 5\n(y\' + 2)/2 = 5 ⇒ y\' + 2 = 10 ⇒ y\' = 8\n(z\' + 3)/2 = 9 ⇒ z\' + 3 = 18 ⇒ z\' = 15.\n\nThus, Image Q is (5, 8, 15).',
        stepMarking: [
          { step: 'General point N(3λ+6, 2λ+7, -2λ+7) and direction ratios of PN', marks: '1 Mark' },
          { step: 'Condition PN ⟂ line ⇒ λ = -1 and Foot of perpendicular N(3, 5, 9)', marks: '1.5 Marks' },
          { step: 'Perpendicular distance |PN| = 7 units', marks: '1 Mark' },
          { step: 'Using midpoint formula to calculate Image point Q(5, 8, 15)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Checking Pythagorean distance: 2² + 3² + 6² = 49 = 7² confirms perfect whole numbers, characteristic of CBSE board questions.',
        commonPitfall: 'Sign error when calculating z-component with direction ratio -2.'
      },
      {
        id: 'c12-math-24-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Linear Programming: Graphical Optimization',
        questionText: 'Solve the following Linear Programming Problem graphically:\nMaximize Z = 4x + y\nSubject to constraints:\nx + y ≤ 50\n3x + y ≤ 90\nx ≥ 0, y ≥ 0.',
        modelAnswer: 'Step 1: Convert Inequalities to Linear Equations and Find Intercepts:\n1. Line L₁: x + y = 50\n   When x = 0, y = 50 ⇒ (0, 50)\n   When y = 0, x = 50 ⇒ (50, 0)\n   Test (0, 0): 0 + 0 ≤ 50 (True, origin side).\n\n2. Line L₂: 3x + y = 90\n   When x = 0, y = 90 ⇒ (0, 90)\n   When y = 0, x = 30 ⇒ (30, 0)\n   Test (0, 0): 0 + 0 ≤ 90 (True, origin side).\n\n3. Non-negativity constraints: x ≥ 0, y ≥ 0 restrict the feasible region to the First Quadrant.\n\nStep 2: Point of Intersection of L₁ and L₂:\nSubtracting L₁ from L₂:\n(3x + y) - (x + y) = 90 - 50\n2x = 40 ⇒ x = 20.\nSubstitute x = 20 into L₁: 20 + y = 50 ⇒ y = 30.\nIntersection Point B = (20, 30).\n\nStep 3: Feasible Region Vertices:\nThe bounded feasible region is polygon OABC with corner points:\n- O(0, 0)\n- A(30, 0)\n- B(20, 30)\n- C(0, 50)\n\nStep 4: Evaluate Objective Function Z = 4x + y at Corner Points:\n1. At O(0, 0): Z = 4(0) + 0 = 0\n2. At A(30, 0): Z = 4(30) + 0 = 120\n3. At B(20, 30): Z = 4(20) + 30 = 80 + 30 = 110\n4. At C(0, 50): Z = 4(0) + 50 = 50\n\nConclusion:\nThe maximum value of Z is 120, which occurs at the corner point A(30, 0).',
        stepMarking: [
          { step: 'Correctly plotting lines L₁ and L₂ with intercepts', marks: '1.5 Marks' },
          { step: 'Shading the correct bounded convex feasible region and finding intersection B(20, 30)', marks: '1.5 Marks' },
          { step: 'Corner point table and concluding Maximum Z = 120 at (30, 0)', marks: '2 Marks' }
        ],
        examinerTip: 'Always construct a clear corner point table with columns: "Corner Point (x, y)" and "Value of Z = 4x + y".',
        commonPitfall: 'Assuming the intersection point is always the maximum without evaluating all corner points.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q36 to Q38 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c12-math-24-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Optimization in Engineering (Application of Derivatives)',
        questionText: 'An architect is designing an open water storage tank with a square base and vertical sides. The tank is to be constructed using sheet metal of a fixed area of 108 m².\n\nBased on this information, answer the following questions:\n(i) If x is the length of the square base and h is the height, express the volume V of the tank in terms of x only. [1 Mark]\n(ii) Find dV/dx and the critical point of the volume function. [1 Mark]\n(iii) (a) Using the second derivative test, find the dimensions (length and height) of the tank that will maximize its storage capacity and find the maximum volume. [2 Marks]\n                         OR\n(iii) (b) Show that for the tank to have maximum volume, the height of the tank must be exactly half the length of the base side. [2 Marks]',
        modelAnswer: '(i) Surface area of an OPEN tank with square base of side x and height h:\nBase area = x²; Area of 4 vertical walls = 4xh.\nTotal surface area S = x² + 4xh = 108.\n⇒ 4xh = 108 - x² ⇒ h = (108 - x²) / (4x).\nVolume V = (Base Area) × (Height) = x² · h = x² · [ (108 - x²) / (4x) ]\nV(x) = (1/4) (108x - x³) = 27x - x³/4.\n\n(ii) Differentiating with respect to x:\ndV/dx = 27 - 3x²/4.\nFor critical points, set dV/dx = 0:\n27 - 3x²/4 = 0 ⇒ 3x²/4 = 27 ⇒ x² = (27 × 4) / 3 = 36 ⇒ x = 6 m (since length > 0).\n\n(iii) (a):\nd²V/dx² = d/dx [ 27 - 3x²/4 ] = -6x/4 = -3x/2.\nAt x = 6: d²V/dx² = -3(6)/2 = -9 < 0.\nBy the second derivative test, V has a local maximum at x = 6 m.\nDimensions:\nLength of side x = 6 m\nHeight h = (108 - 6²) / (4 × 6) = (108 - 36) / 24 = 72 / 24 = 3 m.\nMaximum Volume V_max = 6 × 6 × 3 = 108 m³.\n\nOR\n(iii) (b):\nFrom part (i), 4xh = 108 - x² ⇒ 108 = x² + 4xh.\nFrom part (ii), at maximum volume, dV/dx = 0 ⇒ 27 = 3x²/4 ⇒ 108 = 3x².\nEquating the two expressions for 108:\n3x² = x² + 4xh\n2x² = 4xh\nx = 2h ⇒ h = x/2.\nThus, the height of the tank is exactly half of the length of the base side.',
        stepMarking: [
          { step: '(i) Relation h = (108 - x²)/(4x) and Volume V = 27x - x³/4', marks: '1 Mark' },
          { step: '(ii) dV/dx = 27 - 3x²/4 = 0 ⇒ x = 6 m', marks: '1 Mark' },
          { step: '(iii)(a) d²V/dx² = -9 < 0 (Maximum), h = 3 m, and V = 108 m³ OR (iii)(b) Proof h = x/2', marks: '2 Marks' }
        ],
        examinerTip: 'Notice the word "OPEN" tank in the problem statement. The surface area has only ONE base (x²), not two bases (2x²).',
        commonPitfall: 'Using S = 2x² + 4xh (closed tank) instead of x² + 4xh.'
      },
      {
        id: 'c12-math-24-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Quality Control & Bayes\' Theorem (Probability)',
        questionText: 'A manufacturing factory has three machines A, B, and C producing bolts. Machine A produces 50% of the total output, Machine B produces 30%, and Machine C produces 20%. Of their respective outputs, 2%, 3%, and 4% are defective bolts.\n\nA bolt is drawn at random from the total output.\n(i) What is the probability that the bolt is produced by Machine B? [1 Mark]\n(ii) Find the total probability that a randomly drawn bolt is defective. [1 Mark]\n(iii) (a) If the bolt drawn is found to be defective, what is the probability that it was manufactured by Machine A? [2 Marks]\n                         OR\n(iii) (b) If the bolt drawn is found to be defective, what is the probability that it was manufactured by Machine C? [2 Marks]',
        modelAnswer: 'Let events:\nE₁: Bolt manufactured by Machine A ⇒ P(E₁) = 50/100 = 0.50\nE₂: Bolt manufactured by Machine B ⇒ P(E₂) = 30/100 = 0.30\nE₃: Bolt manufactured by Machine C ⇒ P(E₃) = 20/100 = 0.20\nD: Bolt drawn is defective.\n\nGiven conditional probabilities:\nP(D|E₁) = 2% = 0.02\nP(D|E₂) = 3% = 0.03\nP(D|E₃) = 4% = 0.04\n\n(i) Probability that bolt is produced by Machine B:\nP(E₂) = 30/100 = 0.3 (or 3/10).\n\n(ii) By Law of Total Probability:\nP(D) = P(E₁)·P(D|E₁) + P(E₂)·P(D|E₂) + P(E₃)·P(D|E₃)\n= (0.50 × 0.02) + (0.30 × 0.03) + (0.20 × 0.04)\n= 0.010 + 0.009 + 0.008 = 0.027 (or 27/1000).\n\n(iii) (a) By Bayes\' Theorem:\nP(E₁|D) = [ P(E₁) · P(D|E₁) ] / P(D)\n= (0.50 × 0.02) / 0.027 = 0.010 / 0.027 = 10 / 27.\n\nOR\n(iii) (b) By Bayes\' Theorem:\nP(E₃|D) = [ P(E₃) · P(D|E₃) ] / P(D)\n= (0.20 × 0.04) / 0.027 = 0.008 / 0.027 = 8 / 27.',
        stepMarking: [
          { step: '(i) P(E₂) = 0.3', marks: '1 Mark' },
          { step: '(ii) Total probability calculation P(D) = 0.027', marks: '1 Mark' },
          { step: '(iii)(a) Bayes formula and P(E₁|D) = 10/27 OR (iii)(b) P(E₃|D) = 8/27', marks: '2 Marks' }
        ],
        examinerTip: 'The sum of probabilities P(E₁|D) + P(E₂|D) + P(E₃|D) must equal 1 (10/27 + 9/27 + 8/27 = 27/27 = 1).',
        commonPitfall: 'Multiplying percentages directly without dividing by 100.'
      },
      {
        id: 'c12-math-24-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Air Traffic Control & Vector Flight Paths (3D Geometry)',
        questionText: 'An Air Traffic Control (ATC) radar station tracks two commercial aircraft flying along straight paths.\nAircraft 1 flies along the line: r⃗₁ = (2î + 3ĵ - k̂) + t(3î - ĵ + 2k̂)\nAircraft 2 flies along the line: r⃗₂ = (5î + 3ĵ + 4k̂) + s(2î + 2ĵ - k̂)\nwhere coordinates are in kilometres and t, s are parameters representing flight progress.\n\n(i) Write the vector direction along which Aircraft 1 is flying and find its unit vector. [1 Mark]\n(ii) Find the vector connecting the initial positions of the two aircraft (at t = 0 and s = 0). [1 Mark]\n(iii) (a) Determine whether the flight paths of the two aircraft are perpendicular to each other or not, by computing the dot product of their direction vectors. [2 Marks]\n                         OR\n(iii) (b) Find the Cartesian equations of the path of Aircraft 2. [2 Marks]',
        modelAnswer: '(i) Direction vector of Aircraft 1: b⃗₁ = 3î - ĵ + 2k̂.\nMagnitude |b⃗₁| = √[ 3² + (-1)² + 2² ] = √(9 + 1 + 4) = √14.\nUnit direction vector: b̂₁ = (3î - ĵ + 2k̂) / √14.\n\n(ii) Initial position of Aircraft 1 (at t = 0): a⃗₁ = 2î + 3ĵ - k̂\nInitial position of Aircraft 2 (at s = 0): a⃗₂ = 5î + 3ĵ + 4k̂\nConnecting displacement vector (a⃗₂ - a⃗₁):\n= (5 - 2)î + (3 - 3)ĵ + (4 - (-1))k̂ = 3î + 0ĵ + 5k̂ = 3î + 5k̂.\n\n(iii) (a) Direction vectors of the two aircraft:\nb⃗₁ = 3î - ĵ + 2k̂\nb⃗₂ = 2î + 2ĵ - k̂\nDot product b⃗₁ · b⃗₂:\n= (3)(2) + (-1)(2) + (2)(-1)\n= 6 - 2 - 2 = 6 - 4 = 2 ≠ 0.\nSince b⃗₁ · b⃗₂ ≠ 0, the flight paths are NOT perpendicular to each other.\n\nOR\n(iii) (b) Cartesian Equation of Aircraft 2:\nAircraft 2 passes through the point (x₁, y₁, z₁) = (5, 3, 4) with direction ratios (a, b, c) = (2, 2, -1).\nThe standard Cartesian equation of a line is:\n(x - x₁) / a = (y - y₁) / b = (z - z₁) / c\n⇒ (x - 5) / 2 = (y - 3) / 2 = (z - 4) / -1.',
        stepMarking: [
          { step: '(i) Direction vector b⃗₁ = 3î - ĵ + 2k̂ and unit vector b̂₁ = (3î - ĵ + 2k̂)/√14', marks: '1 Mark' },
          { step: '(ii) Vector connecting initial points = 3î + 5k̂', marks: '1 Mark' },
          { step: '(iii)(a) b⃗₁ · b⃗₂ = 2 ≠ 0 ⇒ not perpendicular OR (iii)(b) Cartesian form (x-5)/2 = (y-3)/2 = (z-4)/-1', marks: '2 Marks' }
        ],
        examinerTip: 'Perpendicular lines have dot product equal to ZERO. Any non-zero dot product proves they are non-orthogonal.',
        commonPitfall: 'Confusing position vector a⃗ with velocity/direction vector b⃗.'
      }
    ]
  }
];
