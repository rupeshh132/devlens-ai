import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_11_PHY_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. KVS CENTRALIZED ANNUAL EXAM 2024: CLASS 11 PHYSICS (COMPLETE - 33 Qs)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kvs-c11-phy-2024-annual',
    title: 'KVS Centralized Annual Examination 2024: Class 11 Physics (Uniform Paper)',
    subject: 'Physics',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'KVS/RO/PHY/24',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    generalInstructions: [
      'This question paper contains 33 questions in 5 sections: Section A to Section E.',
      'Section A: 16 questions (12 MCQs and 4 Assertion-Reason questions of 1 mark each).',
      'Section B: 5 questions of 2 marks each (Q17 to Q21).',
      'Section C: 7 questions of 3 marks each (Q22 to Q28).',
      'Section D: 2 Case Study-based questions of 4 marks each (Q29 and Q30).',
      'Section E: 3 Long Answer questions of 5 marks each (Q31 to Q33).',
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q16 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-phy-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Units & Measurements: Dimensional Formula',
        questionText: 'The dimensional formula of Universal Gravitational Constant (G) is:',
        options: [
          'A) [M⁻¹ L³ T⁻²]',
          'B) [M¹ L² T⁻²]',
          'C) [M⁻¹ L² T⁻¹]',
          'D) [M¹ L³ T⁻²]'
        ],
        correctOption: 'A',
        modelAnswer: 'A) [M⁻¹ L³ T⁻²].\nFrom Newton\'s Law of Gravitation: F = G (m₁ m₂) / r²\n⇒ G = (F · r²) / (m₁ · m₂)\nDimensions of Force F = [M L T⁻²]\nDimensions of r² = [L²]\nDimensions of m₁ m₂ = [M²]\n[G] = [M L T⁻²] [L²] / [M²] = [M⁻¹ L³ T⁻²].',
        stepMarking: [
          { step: 'Formula G = Fr²/(m₁m₂) and substitution of dimensions: [M⁻¹ L³ T⁻²] (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Value of G is 6.67 × 10⁻¹¹ N m² kg⁻².',
        commonPitfall: 'Writing M¹ instead of M⁻¹.'
      },
      {
        id: 'c11-phy-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Kinematics: Projectile Motion at Peak',
        questionText: 'A projectile is fired at an angle θ with the horizontal with initial speed u. At the highest point of its parabolic trajectory, its velocity and acceleration are:',
        options: [
          'A) u cos θ (horizontal) and g (downward)',
          'B) 0 and g (downward)',
          'C) u sin θ (vertical) and 0',
          'D) u and 0'
        ],
        correctOption: 'A',
        modelAnswer: 'A) u cos θ (horizontal) and g (downward).\nAt the peak, vertical velocity component v_y = 0, but horizontal velocity v_x = u cos θ remains constant throughout flight (air resistance neglected). The acceleration is solely the gravitational acceleration g acting vertically downward.',
        stepMarking: [
          { step: 'Option A (u cos θ horizontal and g downward)', marks: '1 Mark' }
        ],
        examinerTip: 'Velocity and acceleration vectors are mutually perpendicular at the highest point (dot product is zero).',
        commonPitfall: 'Believing total velocity is zero at the peak.'
      },
      {
        id: 'c11-phy-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Laws of Motion: Static vs Kinetic Friction',
        questionText: 'The coefficient of static friction (μ_s) and coefficient of kinetic friction (μ_k) for a given pair of surfaces satisfy:',
        options: [
          'A) μ_s < μ_k',
          'B) μ_s > μ_k',
          'C) μ_s = μ_k',
          'D) μ_s = 0'
        ],
        correctOption: 'B',
        modelAnswer: 'B) μ_s > μ_k.\nIt requires greater force to break the microscopic cold welds and interlockings between two surfaces at rest (static state) than to keep them sliding over each other once in motion (kinetic state). Therefore, μ_s > μ_k.',
        stepMarking: [
          { step: 'Option B (μ_s > μ_k)', marks: '1 Mark' }
        ],
        examinerTip: 'Limiting static friction is the maximum opposing force before motion begins.',
        commonPitfall: 'Assuming static friction is always equal to kinetic friction.'
      },
      {
        id: 'c11-phy-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Work, Energy & Power: Conservative Force Property',
        questionText: 'Which of the following forces is a non-conservative force?',
        options: [
          'A) Gravitational force',
          'B) Electrostatic force',
          'C) Spring force',
          'D) Frictional force'
        ],
        correctOption: 'D',
        modelAnswer: 'D) Frictional force.\nA force is non-conservative if work done by or against it depends on the path taken and work done over a closed loop is non-zero (dissipates energy as heat). Friction and viscous drag are non-conservative forces.',
        stepMarking: [
          { step: 'Option D (Frictional force)', marks: '1 Mark' }
        ],
        examinerTip: 'Work done by a conservative force in any closed round trip is strictly zero: ∮ F·dr = 0.',
        commonPitfall: 'Selecting spring force as non-conservative.'
      },
      {
        id: 'c11-phy-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Rotational Motion: Moment of Inertia of Ring',
        questionText: 'The moment of inertia of a uniform circular ring of mass M and radius R about its tangent in its plane is:',
        options: [
          'A) (1/2) M R²',
          'B) M R²',
          'C) (3/2) M R²',
          'D) 2 M R²'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (3/2) M R².\n1. Moment of inertia about diameter in the plane: I_dia = (1/2) M R² (by perpendicular axes theorem).\n2. By parallel axes theorem, moment of inertia about tangent in the plane (parallel to diameter at distance R):\nI_tan = I_dia + M R² = (1/2) M R² + M R² = (3/2) M R².',
        stepMarking: [
          { step: 'I_tan = (1/2)MR² + MR² = (3/2)MR² (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Tangent IN the plane is (3/2)MR²; tangent PERPENDICULAR to the plane is 2MR².',
        commonPitfall: 'Confusing tangent in plane (3/2 MR²) with tangent perpendicular to plane (2 MR²).'
      },
      {
        id: 'c11-phy-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Gravitation: Acceleration Due to Gravity with Depth',
        questionText: 'At what depth d below the surface of the Earth does the acceleration due to gravity become half of its value at the surface? (Radius of Earth = R)',
        options: [
          'A) d = R/4',
          'B) d = R/2',
          'C) d = R',
          'D) d = 2R'
        ],
        correctOption: 'B',
        modelAnswer: 'B) d = R/2.\nVariation of g with depth: g_d = g (1 - d/R).\nGiven g_d = g/2:\ng/2 = g (1 - d/R)\n1/2 = 1 - d/R ⇒ d/R = 1 - 1/2 = 1/2 ⇒ d = R/2.',
        stepMarking: [
          { step: 'Using g_d = g(1 - d/R) = g/2 ⇒ d = R/2 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'At the centre of the Earth (d = R), g becomes exactly zero.',
        commonPitfall: 'Using altitude formula instead of depth formula.'
      },
      {
        id: 'c11-phy-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Mechanical Properties of Solids: Young\'s Modulus Material Dependency',
        questionText: 'If a wire of length L and cross-sectional area A is cut into two equal halves, the Young\'s modulus of each half becomes:',
        options: [
          'A) Half (Y/2)',
          'B) Doubled (2Y)',
          'C) Remains unchanged (Y)',
          'D) Four times (4Y)'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Remains unchanged (Y).\nYoung\'s modulus (Y) is an intensive elastic property of the material of the wire and does not depend on its length, cross-sectional area, or geometry. It remains constant for a given material.',
        stepMarking: [
          { step: 'Option C (Remains unchanged Y)', marks: '1 Mark' }
        ],
        examinerTip: 'Young\'s modulus depends only on the nature of the material and temperature.',
        commonPitfall: 'Confusing Young\'s modulus Y with force constant k (cutting a spring doubles k).'
      },
      {
        id: 'c11-phy-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Mechanical Properties of Fluids: Terminal Velocity',
        questionText: 'A spherical raindrop of radius r falls through air. According to Stokes\' law, its terminal velocity v_t is proportional to:',
        options: [
          'A) r',
          'B) r²',
          'C) 1/r',
          'D) r³'
        ],
        correctOption: 'B',
        modelAnswer: 'B) r².\nTerminal velocity is given by Stokes\' formula:\nv_t = (2/9) · [ (ρ - σ) g r² ] / η\nwhere ρ is density of drop, σ is density of medium, and η is viscosity.\nHence, terminal velocity is directly proportional to r².',
        stepMarking: [
          { step: 'Terminal velocity formula v_t ∝ r² (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Larger raindrops fall significantly faster because v_t ∝ r².',
        commonPitfall: 'Confusing viscous force F = 6πηrv (proportional to r) with terminal velocity (proportional to r²).'
      },
      {
        id: 'c11-phy-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Thermodynamics: First Law of Thermodynamics',
        questionText: 'In an isothermal expansion of an ideal gas, the change in internal energy (ΔU) is:',
        options: [
          'A) Positive (ΔU > 0)',
          'B) Negative (ΔU < 0)',
          'C) Zero (ΔU = 0)',
          'D) Equal to work done'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Zero (ΔU = 0).\nFor an ideal gas, internal energy depends solely on temperature: U = n C_v T.\nIn an isothermal process, temperature T is constant (ΔT = 0), so ΔU = 0.\nBy First Law of Thermodynamics: Q = ΔU + W ⇒ Q = W.',
        stepMarking: [
          { step: 'In isothermal process ΔT = 0 ⇒ ΔU = 0 (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'In adiabatic process: Q = 0 ⇒ W = -ΔU. In isothermal: ΔU = 0 ⇒ Q = W.',
        commonPitfall: 'Confusing adiabatic with isothermal conditions.'
      },
      {
        id: 'c11-phy-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Kinetic Theory of Gases: RMS Speed vs Temperature',
        questionText: 'If the absolute temperature of a gas is quadrupled from T to 4T, the root-mean-square speed (v_rms) of its molecules becomes:',
        options: [
          'A) Doubled (2 v_rms)',
          'B) Quadrupled (4 v_rms)',
          'C) 16 times',
          'D) Unchanged'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Doubled (2 v_rms).\nv_rms = √(3RT / M).\nSince v_rms is directly proportional to the square root of absolute temperature (v_rms ∝ √T):\nWhen T becomes 4T, v_rms becomes √(4) = 2 times its original value.',
        stepMarking: [
          { step: 'v_rms ∝ √T ⇒ √(4) = 2 times (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Temperature must always be measured in Kelvin.',
        commonPitfall: 'Forgetting the square root and marking 4 times.'
      },
      {
        id: 'c11-phy-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Oscillations: Simple Harmonic Motion Acceleration',
        questionText: 'In simple harmonic motion (SHM), when the displacement of the particle from the mean position is maximum (amplitude A), its velocity and acceleration are:',
        options: [
          'A) Velocity = 0, Acceleration = maximum',
          'B) Velocity = maximum, Acceleration = 0',
          'C) Both velocity and acceleration are maximum',
          'D) Both velocity and acceleration are 0'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Velocity = 0, Acceleration = maximum.\nIn SHM: v = ω √(A² - x²) and a = -ω² x.\nAt extreme positions (x = ±A):\nVelocity v = ω √(A² - A²) = 0.\nAcceleration magnitude |a| = ω² A (maximum).',
        stepMarking: [
          { step: 'Option A (Velocity = 0, Acceleration = maximum)', marks: '1 Mark' }
        ],
        examinerTip: 'Mean position: v is maximum, a is zero. Extreme position: v is zero, a is maximum.',
        commonPitfall: 'Thinking acceleration is zero where velocity is zero.'
      },
      {
        id: 'c11-phy-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Waves: Speed of Sound in Gases (Laplace Correction)',
        questionText: 'Laplace corrected Newton\'s formula for the speed of sound in air by assuming that sound propagation is an:',
        options: [
          'A) Isothermal process',
          'B) Adiabatic process',
          'C) Isobaric process',
          'D) Isochoric process'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Adiabatic process.\nNewton assumed sound waves propagate isothermally (yielding v = √(P/ρ) ≈ 280 m/s, 16% error). Laplace pointed out that sound compressions and rarefactions occur so rapidly that heat does not have time to exchange with the surroundings, making it an adiabatic process (v = √(γP/ρ) ≈ 331 m/s).',
        stepMarking: [
          { step: 'Option B (Adiabatic process)', marks: '1 Mark' }
        ],
        examinerTip: 'Bulk modulus for isothermal is P; for adiabatic it is γP.',
        commonPitfall: 'Selecting isothermal (which was Newton\'s incorrect assumption).'
      },
      {
        id: 'c11-phy-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Banking of Curved Roads',
        questionText: 'Assertion (A): Curved roads are banked on highways so that vehicles do not rely solely on friction to turn safely.\nReason (R): Banking provides a horizontal component of normal reaction force towards the center to supply required centripetal force.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nWhen a road is banked at angle θ, the normal reaction N tilts: N sin θ acts horizontally towards the center of curvature supplying the centripetal force (m v² / r = N sin θ), allowing vehicles to turn safely even on icy, frictionless roads.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Optimum banking angle formula without friction: tan θ = v² / (rg).',
        commonPitfall: 'Assuming banking increases friction.'
      },
      {
        id: 'c11-phy-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Conservation of Angular Momentum',
        questionText: 'Assertion (A): A ballet dancer increases her angular speed by folding her arms close to her body while spinning.\nReason (R): In the absence of external torque, total angular momentum is conserved (I ω = constant).\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nBy pulling her arms inward, the dancer reduces her distribution of mass from the axis of rotation, drastically decreasing her moment of inertia (I). Since net external torque is zero, angular momentum L = I ω must remain constant. As I decreases, angular speed ω increases proportionally.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Kinetic energy of rotation (E = L² / 2I) actually increases because the dancer performs internal muscular work.',
        commonPitfall: 'Thinking rotational kinetic energy stays constant.'
      },
      {
        id: 'c11-phy-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Hydraulic Lift and Pascal\'s Law',
        questionText: 'Assertion (A): In a hydraulic lift, a small input force applied on a narrow piston can lift a massive automobile placed on a wide piston.\nReason (R): Pressure exerted on an enclosed incompressible fluid is transmitted undiminished in all directions to all portions of the fluid and container walls.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nBy Pascal\'s principle, pressure P is transmitted equally throughout: P = F₁/A₁ = F₂/A₂ ⇒ F₂ = F₁ (A₂/A₁). Since area of the output piston A₂ ≫ A₁, output lifting force F₂ is multiplied tremendously.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Hydraulic lift is a force multiplier, but energy is conserved (work input = work output).',
        commonPitfall: 'Believing hydraulic machines multiply work or energy.'
      },
      {
        id: 'c11-phy-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Escape Speed Mass Independence',
        questionText: 'Assertion (A): The escape speed of a body from the surface of the Earth is independent of the mass of the projectile.\nReason (R): Escape velocity depends only on the mass and radius of the celestial planet from which the body is launched.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nEscape velocity is derived from energy conservation: (1/2) m v_e² = G M m / R ⇒ v_e = √(2GM / R). The mass of the body m cancels out completely, proving v_e is independent of the object\'s mass and dependent only on planet mass M and radius R.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Escape speed for Earth is 11.2 km/s regardless of whether an electron or a spaceship is launched.',
        commonPitfall: 'Assuming heavier objects need higher escape speeds.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q17 to Q21 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-phy-24-q17',
        qNum: 17,
        section: 'B',
        marks: 2,
        topic: 'Units and Measurements: Percentage Error',
        questionText: 'A physical quantity P is related to four observables a, b, c, and d as P = (a³ b²) / (√c · d). The percentage errors in measurements of a, b, c, and d are 1%, 3%, 4%, and 2% respectively. Find the percentage error in P.',
        modelAnswer: 'Given formula:\nP = a³ b² c^(-1/2) d^(-1)\n\nMaximum fractional error:\n(ΔP / P) = 3 (Δa / a) + 2 (Δb / b) + (1/2) (Δc / c) + (Δd / d)\n\nPercentage error:\n(ΔP / P) × 100% = 3(1%) + 2(3%) + (1/2)(4%) + 1(2%)\n= 3% + 6% + 2% + 2% = 13%.\n\nTherefore, the percentage error in P is 13%.',
        stepMarking: [
          { step: 'Formula: ΔP/P = 3(Δa/a) + 2(Δb/b) + 1/2(Δc/c) + (Δd/d)', marks: '1 Mark' },
          { step: 'Substituting percentage errors: 3(1) + 2(3) + 2 + 2 = 13%', marks: '1 Mark' }
        ],
        examinerTip: 'Powers are always multiplied as positive coefficients because errors always add up to find the maximum possible error.',
        commonPitfall: 'Subtracting powers for quantities in the denominator.'
      },
      {
        id: 'c11-phy-24-q18',
        qNum: 18,
        section: 'B',
        marks: 2,
        topic: 'Laws of Motion: Recoil of Gun',
        questionText: 'A bullet of mass 40 g is fired with an initial muzzle velocity of 150 m/s from a rifle of mass 4 kg. Calculate the initial recoil velocity of the rifle.',
        modelAnswer: 'Given data:\nMass of bullet m = 40 g = 40 / 1000 kg = 0.04 kg\nVelocity of bullet v = 150 m/s\nMass of rifle M = 4 kg\nLet recoil velocity of rifle be V.\n\nBy Law of Conservation of Linear Momentum:\nTotal initial momentum (before firing) = 0.\nTotal final momentum (after firing) = m v + M V = 0\nM V = -m v\nV = - (m v) / M\nV = - (0.04 kg × 150 m/s) / 4 kg = - 6 / 4 = -1.5 m/s.\n\nThe initial recoil velocity of the rifle is 1.5 m/s in the direction opposite to that of the bullet.',
        stepMarking: [
          { step: 'Conversion of bullet mass to kg (0.04 kg) and momentum equation', marks: '1 Mark' },
          { step: 'Calculation V = -1.5 m/s with opposite direction specified', marks: '1 Mark' }
        ],
        examinerTip: 'Negative sign signifies recoil in the backward direction.',
        commonPitfall: 'Using bullet mass in grams (40) directly without converting to SI kilograms.'
      },
      {
        id: 'c11-phy-24-q19',
        qNum: 19,
        section: 'B',
        marks: 2,
        topic: 'Rotational Motion: Angular Momentum Definition',
        questionText: 'Define angular momentum of a rotating body. State the principle of conservation of angular momentum and give one real-life application.',
        modelAnswer: '1. Angular Momentum (L⃗):\nAngular momentum of a rigid body about an axis is the product of its moment of inertia (I) and angular velocity (ω⃗): L⃗ = I ω⃗ (or L⃗ = r⃗ × p⃗).\n\n2. Principle of Conservation of Angular Momentum:\nIf the net external torque acting on a rotating system is zero (τ_ext = 0), the total angular momentum of the system remains constant in magnitude and direction: L = I ω = constant.\n\n3. Application:\nA diver curling his body into a tuck while performing acrobatics off a high diving board reduces his moment of inertia, dramatically increasing his spinning speed before opening his arms to enter water smoothly.',
        stepMarking: [
          { step: 'Definition of angular momentum L = Iω and formula', marks: '0.5 Mark' },
          { step: 'Law of conservation statement: τ_ext = 0 ⇒ L = constant', marks: '0.75 Mark' },
          { step: 'Real-life application (diver or figure skater)', marks: '0.75 Mark' }
        ],
        examinerTip: 'Relation between torque and angular momentum: τ = dL/dt.',
        commonPitfall: 'Confusing linear momentum (p = mv) with angular momentum (L = Iω).'
      },
      {
        id: 'c11-phy-24-q20',
        qNum: 20,
        section: 'B',
        marks: 2,
        topic: 'Oscillations: Time Period of Simple Pendulum',
        questionText: 'Derive the expression for the time period of a simple pendulum of length L executing simple harmonic motion of small angular amplitude.',
        modelAnswer: 'Consider a simple pendulum of bob mass m and string length L displaced by a small angle θ from equilibrium.\n\nRestoring force acting tangential to the arc:\nF = - m g sin θ\nFor small angular displacement θ, sin θ ≈ θ = x / L (where x is arc displacement):\nF = - m g (x / L) = - (mg / L) x.\n\nAccording to Newton\'s second law: F = m a\nm a = - (mg / L) x ⇒ a = - (g / L) x.\n\nThis is the standard equation of SHM: a = - ω² x, where ω = √(g / L).\nTime period T = 2π / ω = 2π √(L / g).\n\nThus, T = 2π √(L / g).',
        stepMarking: [
          { step: 'Restoring force F = -mg sin θ ≈ -mg(x/L)', marks: '1 Mark' },
          { step: 'Comparing a = -(g/L)x with a = -ω²x and deriving T = 2π√(L/g)', marks: '1 Mark' }
        ],
        examinerTip: 'Small angle approximation (sin θ ≈ θ) is necessary for pure Simple Harmonic Motion.',
        commonPitfall: 'Omitting the small angle approximation.'
      },
      {
        id: 'c11-phy-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Thermal Properties: Newton\'s Law of Cooling',
        questionText: 'State Newton\'s Law of Cooling. A body cools from 80°C to 50°C in 5 minutes. The room temperature is 20°C. How much time will it take to cool from 60°C to 30°C?',
        modelAnswer: 'Newton\'s Law of Cooling:\nThe rate of loss of heat by radiation from a body is directly proportional to the temperature difference between the body and its surroundings, provided the difference is not too large:\n- dT/dt = k (T_avg - T₀).\n\nCase 1 (80°C to 50°C in 5 min, T₀ = 20°C):\nRate of cooling = (80 - 50) / 5 = 30 / 5 = 6°C/min.\nAverage temperature T_avg = (80 + 50)/2 = 65°C.\n6 = k (65 - 20) = 45 k ⇒ k = 6 / 45 = 2 / 15 min⁻¹.\n\nCase 2 (60°C to 30°C in time t):\nRate of cooling = (60 - 30) / t = 30 / t.\nAverage temperature T_avg\' = (60 + 30)/2 = 45°C.\n30 / t = k (45 - 20) = (2 / 15) × 25 = 50 / 15 = 10 / 3.\n30 / t = 10 / 3 ⇒ 10 t = 90 ⇒ t = 9 minutes.',
        stepMarking: [
          { step: 'Statement and Case 1 calculation to find k = 2/15 min⁻¹', marks: '1 Mark' },
          { step: 'Case 2 setup and finding time t = 9 minutes', marks: '1 Mark' }
        ],
        examinerTip: 'Notice cooling takes longer (9 mins vs 5 mins) as the body approaches room temperature.',
        commonPitfall: 'Assuming cooling rate is constant over time.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER TYPE-II (Q22 to Q28 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-phy-24-q22',
        qNum: 22,
        section: 'C',
        marks: 3,
        topic: 'Kinematics: Horizontal Range & Maximum Height of Projectile',
        questionText: 'A projectile is launched from ground level with speed u at an angle θ with the horizontal. Derive expressions for:\n(a) Maximum height attained (H)\n(b) Horizontal Range (R)\n(c) At what angle is the range maximum for a given speed?',
        modelAnswer: '(a) Maximum Height (H):\nAt peak, vertical velocity v_y = 0.\nUsing third kinematic equation: v_y² = u_y² - 2g H\n0 = (u sin θ)² - 2g H ⇒ 2g H = u² sin² θ\n⇒ H = (u² sin² θ) / (2g).\n\n(b) Horizontal Range (R):\nTime of flight T = (2 u sin θ) / g.\nHorizontal displacement R = u_x × T = (u cos θ) × (2 u sin θ / g)\nR = u² (2 sin θ cos θ) / g\n⇒ R = (u² sin 2θ) / g.\n\n(c) Condition for Maximum Range:\nFor a given speed u, Range R is maximum when sin 2θ is maximum (sin 2θ = 1):\n2θ = 90° ⇒ θ = 45°.\nR_max = u² / g.',
        stepMarking: [
          { step: '(a) Derivation of H = u² sin² θ / (2g)', marks: '1 Mark' },
          { step: '(b) Derivation of R = u² sin 2θ / g', marks: '1 Mark' },
          { step: '(c) Proof that range is maximum at θ = 45° with R_max = u²/g', marks: '1 Mark' }
        ],
        examinerTip: 'Range is the same for complementary angles of projection: θ and (90° - θ).',
        commonPitfall: 'Confusing 2θ in range formula with θ in height formula.'
      },
      {
        id: 'c11-phy-24-q23',
        qNum: 23,
        section: 'C',
        marks: 3,
        topic: 'Work, Energy & Power: Work-Energy Theorem',
        questionText: 'State the Work-Energy Theorem for a variable force and prove it using calculus.',
        modelAnswer: 'Statement:\nThe work done by the net force acting on a body is equal to the change in its kinetic energy:\nW = ΔK = K_f - K_i.\n\nProof using Calculus:\nKinetic energy of a body of mass m moving with velocity v:\nK = (1/2) m v².\n\nDifferentiating with respect to time t:\ndK/dt = d/dt [ (1/2) m v² ] = (1/2) m · 2v · (dv/dt) = m v (dv/dt).\nSince acceleration a = dv/dt and force F = m a:\ndK/dt = (m a) · v = F · v = F · (dx/dt).\n\nMultiplying both sides by dt:\ndK = F dx.\n\nIntegrating from initial position x_i (velocity v_i) to final position x_f (velocity v_f):\n∫_(K_i)^(K_f) dK = ∫_(x_i)^(x_f) F dx\n[ K ]_(K_i)^(K_f) = W\nK_f - K_i = W.\n\nHence, W = ΔK. Proved.',
        stepMarking: [
          { step: 'Accurate statement of Work-Energy Theorem', marks: '1 Mark' },
          { step: 'Differentiation dK/dt = m v (dv/dt) = F(dx/dt)', marks: '1 Mark' },
          { step: 'Integration ∫ dK = ∫ F dx to establish W = K_f - K_i', marks: '1 Mark' }
        ],
        examinerTip: 'The theorem holds true for all types of forces (conservative and non-conservative).',
        commonPitfall: 'Using constant acceleration equations instead of calculus for variable force.'
      },
      {
        id: 'c11-phy-24-q24',
        qNum: 24,
        section: 'C',
        marks: 3,
        topic: 'Mechanical Properties of Fluids: Bernoulli\'s Principle',
        questionText: 'State Bernoulli\'s Principle for streamline flow of an ideal fluid. Write its mathematical equation and explain how dynamic lift is generated on an aircraft wing.',
        modelAnswer: '1. Bernoulli\'s Principle:\nFor an incompressible, non-viscous fluid undergoing steady streamline flow, the total mechanical energy per unit volume (sum of pressure energy, kinetic energy, and gravitational potential energy) remains constant along a streamline.\n\n2. Equation:\nP + (1/2) ρ v² + ρ g h = constant.\n\n3. Dynamic Lift on Airplane Wing (Aerofoil):\n- The upper surface of an aerofoil is curved while the bottom surface is relatively flat.\n- Air flowing over the curved top surface travels a longer path, speeding up (v_top > v_bottom).\n- According to Bernoulli\'s principle, where speed is higher, pressure is lower (P_top < P_bottom).\n- The pressure difference creates a net upward force (dynamic lift) that elevates the aircraft.',
        stepMarking: [
          { step: 'Accurate statement of Bernoulli’s Principle', marks: '1 Mark' },
          { step: 'Mathematical equation P + (1/2)ρv² + ρgh = constant', marks: '1 Mark' },
          { step: 'Explanation of dynamic lift via aerofoil pressure differential', marks: '1 Mark' }
        ],
        examinerTip: 'Magnus effect on a spinning cricket/tennis ball is another classic demonstration of Bernoulli\'s theorem.',
        commonPitfall: 'Claiming that Bernoulli\'s principle applies to turbulent fluids.'
      },
      {
        id: 'c11-phy-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'Mechanical Properties of Solids: Stress-Strain Curve',
        questionText: 'Draw a typical stress-strain curve for a metallic wire stretched until fracture and clearly identify:\n(a) Proportional limit\n(b) Yield point / Elastic limit\n(c) Ultimate tensile strength\n(d) Fracture / Breaking point.',
        modelAnswer: 'Stress-Strain Curve Features:\n1. Origin to Proportional Limit (Point A):\nStress is directly proportional to strain (Hooke\'s Law holds: Stress = Y × Strain). The graph is a straight line OA.\n\n2. Elastic Limit / Yield Point (Point B):\nBeyond A up to B, stress and strain are not proportional, but upon removal of load, the material returns to its original dimensions (elastic behavior). The stress at B is yield strength S_y.\n\n3. Plastic Region (Beyond Point B up to D):\nBeyond B, even a small increase in stress causes permanent deformation (plastic deformation). When load is removed at C, the wire retains a permanent strain called permanent set.\n\n4. Ultimate Tensile Strength (Point D):\nThe maximum nominal stress the wire can withstand before necking.\n\n5. Fracture / Breaking Point (Point E):\nThe wire thins locally (necking) and ruptures at point E.\n- If D and E are far apart, material is DUCTILE (e.g., copper).\n- If D and E are close, material is BRITTLE (e.g., cast iron, glass).',
        stepMarking: [
          { step: 'Diagram with labeled axes (Stress vs Strain)', marks: '1 Mark' },
          { step: 'Points A (Proportional limit) and B (Elastic limit/yield point) identified', marks: '1 Mark' },
          { step: 'Points D (Tensile strength) and E (Fracture) with ductile/brittle distinction', marks: '1 Mark' }
        ],
        examinerTip: 'Ductile materials have wide plastic regions; brittle materials break immediately after the elastic limit.',
        commonPitfall: 'Putting strain on the y-axis (stress must be on the y-axis, strain on the x-axis).'
      },
      {
        id: 'c11-phy-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Thermodynamics: Work Done in Isothermal Process',
        questionText: 'Derive an expression for the work done during the isothermal expansion of n moles of an ideal gas from volume V₁ to volume V₂ at constant temperature T.',
        modelAnswer: 'For an ideal gas undergoing isothermal expansion at constant absolute temperature T:\nEquation of state: P V = n R T ⇒ P = (n R T) / V.\n\nWork done during an infinitesimal expansion dV:\ndW = P dV.\n\nTotal work done as volume increases from V₁ to V₂:\nW = ∫_(V₁)^(V₂) P dV\nW = ∫_(V₁)^(V₂) [ (n R T) / V ] dV\nSince n, R, and T are constant, factor them out of the integral:\nW = n R T ∫_(V₁)^(V₂) (1 / V) dV\nW = n R T [ ln V ]_(V₁)^(V₂)\nW = n R T (ln V₂ - ln V₁)\nW = n R T ln(V₂ / V₁) = 2.303 n R T log₁₀(V₂ / V₁).\n\nIn terms of initial and final pressures (since P₁V₁ = P₂V₂ ⇒ V₂/V₁ = P₁/P₂):\nW = 2.303 n R T log₁₀(P₁ / P₂).',
        stepMarking: [
          { step: 'dW = P dV and substitution P = nRT/V', marks: '1 Mark' },
          { step: 'Integration steps ∫ (1/V) dV = ln(V₂/V₁)', marks: '1 Mark' },
          { step: 'Final formula W = 2.303 n R T log₁₀(V₂/V₁) or in terms of pressures', marks: '1 Mark' }
        ],
        examinerTip: 'If V₂ > V₁, W > 0 (work done BY the gas). If V₂ < V₁, W < 0 (work done ON the gas).',
        commonPitfall: 'Forgetting the 2.303 multiplier when converting natural log (ln) to base 10 log.'
      },
      {
        id: 'c11-phy-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Kinetic Theory: Degrees of Freedom & Specific Heat Ratio',
        questionText: 'State the Law of Equipartition of Energy. Calculate the ratio of specific heats γ = C_p / C_v for a rigid diatomic gas molecule.',
        modelAnswer: '1. Law of Equipartition of Energy:\nIn any thermal dynamical system in equilibrium, the total energy of the system is equally distributed among its various degrees of freedom, and the average energy associated with each degree of freedom per molecule is (1/2) k_B T (where k_B is Boltzmann\'s constant).\n\n2. Degrees of Freedom for Rigid Diatomic Gas (e.g., O₂, N₂):\nA rigid diatomic molecule has:\n- 3 translational degrees of freedom\n- 2 rotational degrees of freedom\nTotal degrees of freedom f = 3 + 2 = 5.\n\n3. Calculation of γ = C_p / C_v:\nTotal internal energy per mole: U = f × (1/2 R T) = (5/2) R T.\nMolar heat capacity at constant volume: C_v = dU/dT = (5/2) R.\nMolar heat capacity at constant pressure: C_p = C_v + R = (5/2) R + R = (7/2) R.\nRatio of specific heats:\nγ = C_p / C_v = [ (7/2) R ] / [ (5/2) R ] = 7 / 5 = 1.40.',
        stepMarking: [
          { step: 'Law of Equipartition of Energy: (1/2) k_B T per degree of freedom', marks: '1 Mark' },
          { step: 'Degrees of freedom f = 5 for rigid diatomic gas', marks: '1 Mark' },
          { step: 'C_v = 5/2 R, C_p = 7/2 R, and γ = 7/5 = 1.40', marks: '1 Mark' }
        ],
        examinerTip: 'If vibrational modes are active (at high temperatures), f = 7 and γ = 9/7 ≈ 1.29.',
        commonPitfall: 'Including vibrational degrees of freedom for a "rigid" molecule.'
      },
      {
        id: 'c11-phy-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Waves: Standing Waves in Stretched Strings',
        questionText: 'Explain the formation of stationary (standing) waves in a stretched string fixed at both ends. Write expressions for the frequencies of the fundamental mode, second harmonic, and third harmonic.',
        modelAnswer: 'Formation of Stationary Waves:\nWhen a transverse wave travelling along a stretched string of length L is reflected from fixed boundaries, the incident and reflected waves have identical amplitude, frequency, and speed but travel in opposite directions. By the principle of superposition, they interfere constructively and destructively, forming a standing wave pattern with permanent nodes (points of zero amplitude) and antinodes (points of maximum amplitude).\n\nBoundary Conditions:\nBoth ends are fixed, so x = 0 and x = L are nodes. Thus, L = n (λ / 2) ⇒ λ_n = 2L / n (for n = 1, 2, 3...).\nWave speed on string v = √(T / μ).\n\nHarmonics Frequencies:\n1. Fundamental Mode / 1st Harmonic (n = 1):\n   L = λ₁ / 2 ⇒ ν₁ = v / (2L) = (1 / 2L) √(T / μ).\n2. Second Harmonic / 1st Overtone (n = 2):\n   L = λ₂ ⇒ ν₂ = 2 ν₁ = (2 / 2L) √(T / μ) = (1 / L) √(T / μ).\n3. Third Harmonic / 2nd Overtone (n = 3):\n   L = 3λ₃ / 2 ⇒ ν₃ = 3 ν₁ = (3 / 2L) √(T / μ).\nRatio of frequencies: ν₁ : ν₂ : ν₃ = 1 : 2 : 3 (all integer harmonics are present).',
        stepMarking: [
          { step: 'Superposition explanation of incident and reflected waves forming nodes/antinodes', marks: '1 Mark' },
          { step: 'Condition L = n(λ/2) and fundamental frequency ν₁ = (1/2L)√(T/μ)', marks: '1 Mark' },
          { step: 'Second and third harmonics frequencies showing ν₁ : ν₂ : ν₃ = 1 : 2 : 3', marks: '1 Mark' }
        ],
        examinerTip: 'In strings fixed at both ends, both odd and even harmonics exist (1, 2, 3, 4...).',
        commonPitfall: 'Confusing 1st overtone (which is the 2nd harmonic) with 1st harmonic.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: CASE STUDY QUESTIONS (Q29 & Q30 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-phy-24-q29',
        qNum: 29,
        section: 'D',
        marks: 4,
        topic: 'Case Study 1: Orbital Motion and Geostationary Satellites (Gravitation)',
        questionText: 'Artificial satellites are launched into circular orbits around the Earth. A geostationary satellite appears stationary relative to an observer on the Earth\'s equator.\n\n(i) What is the time period of revolution of a geostationary satellite? [1 Mark]\n(ii) In which plane and direction must a geostationary satellite orbit? [1 Mark]\n(iii) (a) Calculate the orbital height h of a geostationary satellite above the Earth\'s surface. (Take M_e = 6 × 10²⁴ kg, R_e = 6400 km, G = 6.67 × 10⁻¹¹ N m² kg⁻²). [2 Marks]\n                         OR\n(iii) (b) Derive the expression for the orbital velocity v_o of a satellite orbiting close to the surface of the Earth and calculate its numerical value. [2 Marks]',
        modelAnswer: '(i) Time Period:\nThe time period of revolution of a geostationary satellite is exactly equal to the Earth\'s rotational period: T = 24 hours (86,400 seconds).\n\n(ii) Plane and Direction:\nIt must orbit in the equatorial plane of the Earth from West to East (in the same direction as Earth\'s rotation).\n\n(iii) (a) Orbital Height h:\nFor circular orbit: G M m / r² = m ω² r ⇒ r³ = G M / ω² = (G M T²) / (4π²).\nSubstitute T = 86,400 s, G = 6.67 × 10⁻¹¹, M = 6 × 10²⁴ kg:\nr³ = [ (6.67 × 10⁻¹¹)(6 × 10²⁴)(86,400)² ] / [ 4 × (3.1416)² ]\nr³ ≈ 7.54 × 10²² m³ ⇒ r ≈ 4.22 × 10⁷ m = 42,200 km.\nHeight above surface h = r - R_e = 42,200 km - 6,400 km ≈ 35,800 km (approx 36,000 km).\n\nOR\n(iii) (b) Orbital Velocity near Earth\'s surface:\nGravitational force provides centripetal force:\nG M m / R² = m v_o² / R ⇒ v_o² = G M / R = g R\nv_o = √(g R).\nSubstitute g = 9.8 m/s² and R = 6.4 × 10⁶ m:\nv_o = √(9.8 × 6.4 × 10⁶) = √(6.272 × 10⁷) ≈ 7,920 m/s ≈ 7.92 km/s (approx 8 km/s).',
        stepMarking: [
          { step: '(i) T = 24 hours', marks: '1 Mark' },
          { step: '(ii) Equatorial plane orbiting West to East', marks: '1 Mark' },
          { step: '(iii)(a) Derivation and height h ≈ 35,800 km OR (iii)(b) v_o = √(gR) ≈ 7.92 km/s', marks: '2 Marks' }
        ],
        examinerTip: 'Remember the numbers: Geostationary height ≈ 36,000 km; Orbital speed near Earth ≈ 8 km/s; Escape speed = 11.2 km/s.',
        commonPitfall: 'Using polar orbit for geostationary satellite.'
      },
      {
        id: 'c11-phy-24-q30',
        qNum: 30,
        section: 'D',
        marks: 4,
        topic: 'Case Study 2: Surface Tension and Capillary Rise',
        questionText: 'Surface tension arises due to cohesive forces between liquid molecules at the surface. When a narrow glass capillary tube of radius r is dipped in water of density ρ and surface tension T, water rises to a height h.\n\n(i) Define surface tension and write its SI unit. [1 Mark]\n(ii) Why does water rise in a glass capillary tube while mercury is depressed? [1 Mark]\n(iii) (a) Derive the ascent formula for the height h of liquid rise in a capillary tube of radius r (contact angle θ). [2 Marks]\n                         OR\n(iii) (b) Calculate the excess pressure inside a spherical soap bubble of radius 5 mm if the surface tension of soap solution is 0.03 N/m. [2 Marks]',
        modelAnswer: '(i) Surface Tension:\nSurface tension is the property of liquid surfaces to contract into the minimum possible surface area. It is defined as the force per unit length acting perpendicular to an imaginary line drawn on the liquid surface: T = F / L. SI Unit: N/m (or J/m²).\n\n(ii) Reason for Rise/Depression:\n- Water wets glass because adhesive forces between water and glass are stronger than cohesive forces between water molecules (acute angle of contact θ < 90°), forming a concave meniscus and causing capillary rise.\n- Mercury does not wet glass because cohesive forces between mercury atoms are much stronger than adhesive forces with glass (obtuse angle of contact θ > 90°), forming a convex meniscus and causing capillary depression.\n\n(iii) (a) Ascent Formula Derivation:\nThe vertical component of surface tension force acts upward along the circumference (2πr) of contact:\nF_up = (T cos θ) × (2πr) = 2πr T cos θ.\nThis upward force balances the weight of the liquid column of height h:\nW = Mass × g = (Volume × ρ) g = (π r² h) ρ g.\nEquating forces:\n2πr T cos θ = π r² h ρ g\n⇒ h = (2 T cos θ) / (r ρ g).\n\nOR\n(iii) (b) Excess Pressure inside Soap Bubble:\nA soap bubble has TWO free surfaces (inner and outer):\nExcess pressure ΔP = 4T / R.\nGiven: T = 0.03 N/m, R = 5 mm = 5 × 10⁻³ m:\nΔP = 4(0.03) / (5 × 10⁻³) = 0.12 / 0.005 = 24 N/m² (or 24 Pa).',
        stepMarking: [
          { step: '(i) Definition of surface tension and SI unit N/m', marks: '1 Mark' },
          { step: '(ii) Adhesion vs cohesion and contact angle comparison (acute vs obtuse)', marks: '1 Mark' },
          { step: '(iii)(a) Derivation of ascent formula h = 2T cos θ / (r ρ g) OR (iii)(b) ΔP = 4T/R = 24 Pa', marks: '2 Marks' }
        ],
        examinerTip: 'A liquid drop has ONE surface (ΔP = 2T/R); a soap bubble has TWO surfaces (ΔP = 4T/R).',
        commonPitfall: 'Using 2T/R for a soap bubble.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: LONG ANSWER QUESTIONS (Q31 to Q33 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-phy-24-q31',
        qNum: 31,
        section: 'E',
        marks: 5,
        topic: 'Laws of Motion: Friction & Banking of Curved Road Derivation',
        questionText: '(a) What is banking of circular tracks? Draw a neat free-body diagram of a car of mass m negotiating a curved banked road of radius r at angle θ with coefficient of friction μ_s.\n(b) Derive the expression for the maximum permissible safe speed (v_max) of the car without skidding.\n(c) What happens to this expression if friction is negligible (μ_s = 0)?',
        modelAnswer: '(a) Banking of Roads:\nRaising the outer edge of a curved road above the inner edge is called banking of roads. It prevents slipping and skidding by utilizing the horizontal component of normal reaction to supply centripetal force.\n\nFree-Body Diagram Forces on the car:\n1. Weight mg vertically downward.\n2. Normal reaction N perpendicular to the inclined road surface.\n3. Friction force f_s acting downward along the incline (preventing outward skidding at maximum speed).\n\n(b) Derivation of Maximum Speed v_max:\nResolving forces along vertical and horizontal directions:\n\n1. Vertical Equilibrium:\nN cos θ = mg + f_s sin θ\nmg = N cos θ - f_s sin θ    ...(1)\n\n2. Horizontal Direction (Supplying Centripetal Force):\nN sin θ + f_s cos θ = m v² / r    ...(2)\n\nAt maximum speed v_max, static friction reaches its limiting value: f_s = μ_s N.\nSubstitute f_s into (1) and (2):\nmg = N (cos θ - μ_s sin θ)    ...(3)\nm v_max² / r = N (sin θ + μ_s cos θ)    ...(4)\n\nDividing equation (4) by equation (3):\n[ m v_max² / r ] / [ mg ] = [ N (sin θ + μ_s cos θ) ] / [ N (cos θ - μ_s sin θ) ]\nv_max² / (r g) = (sin θ + μ_s cos θ) / (cos θ - μ_s sin θ)\n\nDivide numerator and denominator of RHS by cos θ:\nv_max² / (r g) = (tan θ + μ_s) / (1 - μ_s tan θ)\n⇒ v_max = √[ r g (μ_s + tan θ) / (1 - μ_s tan θ) ].\n\n(c) When Friction is Negligible (μ_s = 0):\nSubstitute μ_s = 0 into the expression:\nv_o = √(r g tan θ).\nThis is the optimum rated speed where no tyre wear occurs.',
        stepMarking: [
          { step: '(a) Banking definition and Free-Body Diagram resolving N and f_s', marks: '1.5 Marks' },
          { step: '(b) Setting up vertical and centripetal equations and deriving v_max', marks: '2.5 Marks' },
          { step: '(c) Optimum frictionless speed v_o = √(rg tan θ)', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure you resolve friction along the incline: f_s cos θ horizontally and f_s sin θ vertically downward.',
        commonPitfall: 'Incorrect sign for friction components when car is at maximum speed.'
      },
      {
        id: 'c11-phy-24-q32',
        qNum: 32,
        section: 'E',
        marks: 5,
        topic: 'Work, Energy & Power: Elastic Collision in One Dimension',
        questionText: '(a) Define an elastic collision. State the two physical conservation laws that hold in an elastic collision.\n(b) Two spherical bodies of masses m₁ and m₂ moving along a straight line with initial velocities u₁ and u₂ (u₁ > u₂) undergo a head-on perfectly elastic collision. Derive the expressions for their final velocities v₁ and v₂ after collision.\n(c) Discuss the special case when two bodies have identical masses (m₁ = m₂).',
        modelAnswer: '(a) Elastic Collision:\nA collision in which both total linear momentum and total kinetic energy of the system are strictly conserved is called an elastic collision.\nTwo Conservation Laws:\n1. Conservation of Linear Momentum: m₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂\n2. Conservation of Kinetic Energy: (1/2) m₁ u₁² + (1/2) m₂ u₂² = (1/2) m₁ v₁² + (1/2) m₂ v₂².\n\n(b) Derivation of Final Velocities:\nFrom conservation of momentum:\nm₁ (u₁ - v₁) = m₂ (v₂ - u₂)    ...(1)\n\nFrom conservation of kinetic energy:\nm₁ (u₁² - v₁²) = m₂ (v₂² - u₂²)\nm₁ (u₁ - v₁)(u₁ + v₁) = m₂ (v₂ - u₂)(v₂ + u₂)    ...(2)\n\nDividing equation (2) by equation (1):\nu₁ + v₁ = v₂ + u₂\n⇒ u₁ - u₂ = v₂ - v₁    ...(3)\n(Relative speed of approach equals relative speed of separation; coefficient of restitution e = 1).\n\nFrom (3): v₂ = u₁ - u₂ + v₁.\nSubstitute v₂ into momentum equation (1):\nm₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ (u₁ - u₂ + v₁)\nm₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ u₁ - m₂ u₂ + m₂ v₁\n(m₁ - m₂) u₁ + 2 m₂ u₂ = (m₁ + m₂) v₁\n⇒ v₁ = [ (m₁ - m₂) / (m₁ + m₂) ] u₁ + [ (2 m₂) / (m₁ + m₂) ] u₂.\n\nSimilarly, solving for v₂:\n⇒ v₂ = [ (2 m₁) / (m₁ + m₂) ] u₁ + [ (m₂ - m₁) / (m₁ + m₂) ] u₂.\n\n(c) Special Case (m₁ = m₂ = m):\nSubstitute m₁ = m₂ into the equations:\nv₁ = [ 0 ] u₁ + [ 2m / 2m ] u₂ = u₂\nv₂ = [ 2m / 2m ] u₁ + [ 0 ] u₂ = u₁.\nConclusion: When two bodies of equal masses undergo a head-on elastic collision, they completely interchange their velocities.',
        stepMarking: [
          { step: '(a) Definition and state conservation of momentum and kinetic energy', marks: '1 Mark' },
          { step: '(b) Proving u₁ - u₂ = v₂ - v₁ (relative speeds equality)', marks: '1.5 Marks' },
          { step: '(b) Deriving final velocity expressions for v₁ and v₂', marks: '1.5 Marks' },
          { step: '(c) Velocity interchange proof for equal masses m₁ = m₂', marks: '1 Mark' }
        ],
        examinerTip: 'For equal masses, v₁ = u₂ and v₂ = u₁. This is frequently utilized in nuclear reactors to slow down neutrons with moderators.',
        commonPitfall: 'Assuming kinetic energy is conserved in all collisions (it is not conserved in inelastic collisions).'
      },
      {
        id: 'c11-phy-24-q33',
        qNum: 33,
        section: 'E',
        marks: 5,
        topic: 'Oscillations: Energy in Simple Harmonic Motion',
        questionText: '(a) Derive expressions for the kinetic energy (K), potential energy (U), and total mechanical energy (E) of a particle of mass m executing simple harmonic motion of amplitude A and angular frequency ω.\n(b) Prove that the total mechanical energy is conserved and constant at all points.\n(c) Draw a graph showing the variation of kinetic energy, potential energy, and total energy as a function of displacement x from -A to +A.',
        modelAnswer: '(a) Derivation of Energies:\nLet displacement of particle in SHM be x = A sin(ω t).\nVelocity v = dx/dt = A ω cos(ω t) = ω √(A² - x²).\n\n1. Kinetic Energy (K):\nK = (1/2) m v²\nK = (1/2) m [ ω √(A² - x²) ]²\nK = (1/2) m ω² (A² - x²).\nSince force constant k = m ω²:\nK = (1/2) k (A² - x²).\n\n2. Potential Energy (U):\nRestoring force F = - k x.\nWork done against restoring force for displacement dx: dU = - F dx = k x dx.\nIntegrating from mean position (x = 0, U = 0) to displacement x:\nU = ∫₀ˣ k x dx = (1/2) k x² = (1/2) m ω² x².\n\n(b) Total Mechanical Energy (E):\nE = K + U\nE = (1/2) m ω² (A² - x²) + (1/2) m ω² x²\nE = (1/2) m ω² A² - (1/2) m ω² x² + (1/2) m ω² x²\nE = (1/2) m ω² A² = (1/2) k A².\n\nSince m, ω, and A are constants, the total mechanical energy E is completely independent of displacement x and time t. It remains strictly conserved at all points of the trajectory.\n\n(c) Energy vs Displacement Graph Description:\n- Total Energy (E): A horizontal straight line at constant height (1/2) k A².\n- Potential Energy (U): A parabola opening upward with minimum (U = 0) at x = 0 (mean position) and maximum (U = (1/2) k A²) at x = ±A.\n- Kinetic Energy (K): An inverted parabola with maximum (K = (1/2) k A²) at x = 0 and minimum (K = 0) at x = ±A.\n- At x = ± A / √2: K = U = E / 2.',
        stepMarking: [
          { step: '(a) Kinetic energy K = (1/2)mω²(A² - x²) derived', marks: '1.5 Marks' },
          { step: '(a) Potential energy U = (1/2)mω²x² derived', marks: '1.5 Marks' },
          { step: '(b) Total energy E = (1/2)mω²A² showing conservation', marks: '1 Mark' },
          { step: '(c) Energy vs displacement parabolic curve description', marks: '1 Mark' }
        ],
        examinerTip: 'Kinetic energy and potential energy each oscillate at frequency 2ν (double the frequency of displacement oscillation).',
        commonPitfall: 'Writing potential energy as mgx instead of (1/2)kx².'
      }
    ]
  }
];
