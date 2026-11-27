import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_11_PHY_BATCH4_PAPERS: PyqPaper[] = [
  {
    "id": "model-c11-phy-2024-dps",
    "title": "DPS R.K. Puram Class 11 Physics Annual Model Paper (2024)",
    "subject": "Physics",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "DPS/C11/PHY-01",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 Very Short Answer questions of 2 marks each.",
      "Section C: 7 Short Answer questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c11-phy-2024-dps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Dimensional Analysis",
        "questionText": "Which of the following pairs of physical quantities does NOT have identical dimensional formulas?",
        "options": [
          "A) Work and Torque",
          "B) Angular momentum and Planck's constant",
          "C) Tension and Surface Tension",
          "D) Impulse and Linear Momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Tension is a force [M L T⁻²], whereas Surface Tension is force per unit length [M T⁻²]. All other pairs share identical dimensions.",
        "stepMarking": [
          {
            "step": "Contrast Tension [MLT⁻²] vs Surface Tension [MT⁻²]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check dimensions of every pair carefully: Work/Torque = [ML²T⁻²], h/L = [ML²T⁻¹], Impulse/Momentum = [MLT⁻¹].",
        "commonPitfall": "Assuming Tension and Surface Tension both have dimensions of Force."
      },
      {
        "id": "model-c11-phy-2024-dps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Significant Figures",
        "questionText": "The number of significant figures in 0.002050 × 10⁴ is:",
        "options": [
          "A) 3",
          "B) 4",
          "C) 6",
          "D) 7"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Leading zeros to the left of the first non-zero digit (0.00) are not significant; trapped zeros and trailing zeros after decimal (2050) are significant -> 4 significant figures. Powers of 10 do not alter significant figures.",
        "stepMarking": [
          {
            "step": "Count digits 2, 0, 5, 0 -> 4 significant figures",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Trailing zero after a decimal point is ALWAYS significant.",
        "commonPitfall": "Dropping the final zero or counting leading zeros."
      },
      {
        "id": "model-c11-phy-2024-dps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Straight Line: v-t Graph Area & Slope",
        "questionText": "A particle starts from rest with uniform acceleration a. The ratio of distances travelled in the 1st, 2nd, and 3rd seconds is:",
        "options": [
          "A) 1 : 2 : 3",
          "B) 1 : 4 : 9",
          "C) 1 : 3 : 5",
          "D) 1 : 1 : 1"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Galileo's law of odd numbers, Sₙ = u + (a/2)(2n - 1). With u = 0, S₁ : S₂ : S₃ = 1 : 3 : 5.",
        "stepMarking": [
          {
            "step": "Apply Sₙ ∝ (2n - 1) for u = 0 -> 1:3:5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish distance in \"n seconds\" (∝ n²) vs distance in \"nth second\" (∝ 2n-1).",
        "commonPitfall": "Marking 1:4:9 (total distance after n seconds)."
      },
      {
        "id": "model-c11-phy-2024-dps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Plane: Projectile Range Condition",
        "questionText": "For a projectile launched at angle θ with horizontal, at what angle of projection is its maximum vertical height equal to its horizontal range?",
        "options": [
          "A) θ = tan⁻¹(1)",
          "B) θ = tan⁻¹(2)",
          "C) θ = tan⁻¹(4)",
          "D) θ = tan⁻¹(1/4)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. H = R => (u² sin²θ)/(2g) = (u² sin 2θ)/g => (sin²θ)/2 = 2 sinθ cosθ => tan θ = 4 => θ = tan⁻¹(4).",
        "stepMarking": [
          {
            "step": "Equate H = R -> sin²θ/2 = 2sinθcosθ -> tanθ = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Useful general identity: R = nH gives tan θ = 4/n. Here n = 1 => tan θ = 4.",
        "commonPitfall": "Forgetting the factor of 2 in sin 2θ = 2 sinθ cosθ."
      },
      {
        "id": "model-c11-phy-2024-dps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Apparent Weight in Elevator",
        "questionText": "A person of mass 60 kg stands on a weighing scale inside a lift accelerating downwards at 2 m/s² (take g = 10 m/s²). The reading on the scale is:",
        "options": [
          "A) 720 N",
          "B) 600 N",
          "C) 480 N",
          "D) 120 N"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Normal reaction R = m(g - a) = 60(10 - 2) = 480 N.",
        "stepMarking": [
          {
            "step": "R = m(g - a) = 60 × 8 = 480 N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Accelerating UP: m(g + a); Accelerating DOWN: m(g - a); Free fall: 0.",
        "commonPitfall": "Adding a instead of subtracting for downward acceleration."
      },
      {
        "id": "model-c11-phy-2024-dps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Work, Energy & Power: Kinetic Energy & Momentum",
        "questionText": "If the linear momentum of a body increases by 50%, its kinetic energy increases by:",
        "options": [
          "A) 50%",
          "B) 100%",
          "C) 125%",
          "D) 225%"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. K = p²/(2m). New p' = 1.5 p => K' = (1.5)² K = 2.25 K. Percentage increase = (2.25 - 1) × 100% = 125%.",
        "stepMarking": [
          {
            "step": "K' = (1.5)²K = 2.25K -> increase 125%",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never use ΔK/K = 2(Δp/p) for large changes like 50% — that formula is only for small (<5%) changes!",
        "commonPitfall": "Using linear approximation 2 × 50% = 100%."
      },
      {
        "id": "model-c11-phy-2024-dps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Moment of Inertia of Disc vs Ring",
        "questionText": "A solid sphere, a solid cylinder, and a circular ring of identical mass M and radius R roll down an inclined plane without slipping. Which reaches the bottom first?",
        "options": [
          "A) Circular ring",
          "B) Solid cylinder",
          "C) Solid sphere",
          "D) All reach simultaneously"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Rolling acceleration a = g sinθ / (1 + I/(MR²)). Solid sphere has the smallest I/(MR²) = 2/5 = 0.4 (vs cylinder 0.5, ring 1.0), giving the largest acceleration.",
        "stepMarking": [
          {
            "step": "Smallest I/(MR²) = 2/5 -> max acceleration -> Solid sphere first",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Smaller the k²/R² factor, faster the object rolls down.",
        "commonPitfall": "Assuming all masses reach together like frictionless sliding."
      },
      {
        "id": "model-c11-phy-2024-dps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Gravitation: Orbital vs Escape Velocity",
        "questionText": "The escape velocity from Earth's surface is vₑ ≈ 11.2 km/s. What would be the escape velocity from a planet having twice the mass and twice the radius of Earth?",
        "options": [
          "A) 5.6 km/s",
          "B) 11.2 km/s",
          "C) 22.4 km/s",
          "D) 11.2√2 km/s"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₑ = √(2GM/R). When both M and R double, M/R stays unchanged, so vₑ remains 11.2 km/s.",
        "stepMarking": [
          {
            "step": "vₑ ∝ √(M/R) remains unchanged = 11.2 km/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write the proportionality vₑ ∝ √(M/R) before substituting ratios.",
        "commonPitfall": "Forgetting the square root or thinking radius doubles vₑ."
      },
      {
        "id": "model-c11-phy-2024-dps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Solids: Breaking Stress",
        "questionText": "A steel wire of length L and radius r can sustain a maximum load W without breaking. If the wire is cut into two equal halves, the maximum load each half can sustain is:",
        "options": [
          "A) W / 2",
          "B) W",
          "C) 2W",
          "D) W / 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Breaking load = Breaking Stress × Cross-sectional Area (πr²). Cutting length does not change area or material breaking stress, so max load remains W.",
        "stepMarking": [
          {
            "step": "Breaking load depends on Area & Material, independent of length",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Young's modulus and breaking stress are intensive material properties.",
        "commonPitfall": "Thinking halving length doubles or halves breaking force."
      },
      {
        "id": "model-c11-phy-2024-dps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Fluids: Terminal Velocity",
        "questionText": "According to Stokes' law, the terminal velocity vₜ of a small sphere falling through a viscous fluid is proportional to its radius r as:",
        "options": [
          "A) r",
          "B) r²",
          "C) 1/r",
          "D) 1/r²"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₜ = (2r²(ρ - σ)g) / (9η) => vₜ ∝ r².",
        "stepMarking": [
          {
            "step": "State Stokes terminal velocity vₜ ∝ r²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Eight tiny droplets merging into one big drop (R = 2r) increases terminal speed 4 times.",
        "commonPitfall": "Marking proportional to r."
      },
      {
        "id": "model-c11-phy-2024-dps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Thermal Properties of Matter: Newton's Law of Cooling / Wein's Law",
        "questionText": "Wien's displacement law relates the wavelength λₘ of maximum spectral emission from a blackbody to its absolute temperature T as:",
        "options": [
          "A) λₘ / T = constant",
          "B) λₘ T = constant",
          "C) λₘ T² = constant",
          "D) λₘ T⁴ = constant"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Wien's law states λₘ T = b (Wien's constant ≈ 2.9 × 10⁻³ m·K). Hotter stars emit shorter wavelengths (blue).",
        "stepMarking": [
          {
            "step": "Identify λₘ T = constant",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Do not mix Wien's law (λₘ T = b) with Stefan-Boltzmann law (E ∝ T⁴).",
        "commonPitfall": "Selecting T⁴."
      },
      {
        "id": "model-c11-phy-2024-dps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Molar Specific Heat Ratio γ",
        "questionText": "In an adiabatic expansion of an ideal gas, which quantity remains strictly constant?",
        "options": [
          "A) Temperature T",
          "B) Pressure P",
          "C) PV^γ",
          "D) Internal energy U"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. For a quasi-static adiabatic process (δQ = 0), PV^γ = constant, where γ = Cp/Cv.",
        "stepMarking": [
          {
            "step": "Identify PV^γ = constant for adiabatic process",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal: PV = const; Adiabatic: PV^γ = const.",
        "commonPitfall": "Thinking temperature remains constant in adiabatic expansion (T actually drops!)."
      },
      {
        "id": "model-c11-phy-2024-dps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Precision vs Accuracy",
        "questionText": "Assertion (A): A physical equation that is dimensionally correct may still be physically incorrect.\nReason (R): Dimensional analysis cannot determine dimensionless numerical constants like 1/2 or 2π.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For example, K = mv² is dimensionally identical to K = ½mv² yet physically wrong because dimensions do not capture pure numerical constants.",
        "stepMarking": [
          {
            "step": "Option (A) citing dimensionless constant limitation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dimensionally inconsistent => definitely wrong; Dimensionally consistent => may or may not be right.",
        "commonPitfall": "Thinking dimensional validity proves complete correctness."
      },
      {
        "id": "model-c11-phy-2024-dps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Action-Reaction Pairs",
        "questionText": "Assertion (A): Action and reaction forces in Newton's third law never cancel each other out.\nReason (R): Action and reaction act on two different bodies simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Only forces acting on the SAME body can cancel to yield zero net force; third-law pairs act on two distinct interacting bodies.",
        "stepMarking": [
          {
            "step": "Option (A) noting action-reaction act on different bodies",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check whether force pairs act on one body or two bodies.",
        "commonPitfall": "Marking (C) by confusing normal force + weight (both on same block!) with third-law pair."
      },
      {
        "id": "model-c11-phy-2024-dps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Ballet Dancer Conservation of L",
        "questionText": "Assertion (A): An ice skater spins faster when she folds her arms close to her body.\nReason (R): Folding her arms decreases her moment of inertia I, so angular speed ω increases to conserve angular momentum L = Iω.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. With zero external torque, L = Iω = constant => reducing I automatically increases ω.",
        "stepMarking": [
          {
            "step": "Option (A) applying conservation of angular momentum",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention zero external torque explicitly when explaining L = Iω.",
        "commonPitfall": "Thinking rotational kinetic energy stays constant (it actually increases via internal muscle work!)."
      },
      {
        "id": "model-c11-phy-2024-dps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Isothermal Elasticity & Specific Heat",
        "questionText": "Assertion (A): Specific heat of a gas in an isothermal process is infinity.\nReason (R): In an isothermal process, heat supplied causes no change in temperature (ΔT = 0), so C = Q/(mΔT) → ∞.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For isothermal ΔT = 0 with finite heat exchange Q, C = Q/(mΔT) = ∞; for adiabatic Q = 0 with ΔT ≠ 0, C = 0.",
        "stepMarking": [
          {
            "step": "Option (A) using C = Q/(mΔT)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal C = ∞; Adiabatic C = 0.",
        "commonPitfall": "Mixing up isothermal (C=∞) with adiabatic (C=0)."
      },
      {
        "id": "model-c11-phy-2024-dps-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Gravitation: Variation of g with Depth",
        "questionText": "At what depth below the surface of Earth does the acceleration due to gravity become 25% of its value on the surface? (Take R = 6400 km)",
        "modelAnswer": "Variation with depth: g_d = g (1 - d/R).\nGiven g_d = 0.25 g = g/4 => 1 - d/R = 1/4 => d/R = 3/4.\nd = (3/4) × 6400 km = 4800 km.",
        "stepMarking": [
          {
            "step": "Formula g_d = g(1 - d/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute d = 4800 km",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: \"becomes 25%\" vs \"decreases by 25%\"!",
        "commonPitfall": "Using height formula g/(1 + h/R)² for depth."
      },
      {
        "id": "model-c11-phy-2024-dps-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Oscillations: Phase & Maximum Acceleration in SHM",
        "questionText": "The displacement of a particle executing SHM is given by x(t) = 0.04 sin(100t + π/3) metres. Find its amplitude, angular frequency, frequency, and maximum acceleration.",
        "modelAnswer": "Comparing with x = A sin(ωt + φ):\nAmplitude A = 0.04 m; Angular frequency ω = 100 rad/s.\nFrequency ν = ω / (2π) = 100 / (2π) = 50/π ≈ 15.92 Hz.\nMax acceleration a_max = ω² A = (100)² × 0.04 = 10000 × 0.04 = 400 m/s².",
        "stepMarking": [
          {
            "step": "A = 0.04 m, ω = 100 rad/s, ν = 50/π Hz",
            "marks": "1 Mark"
          },
          {
            "step": "a_max = ω²A = 400 m/s²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State SI units (m, rad/s, Hz, m/s²) for each quantity.",
        "commonPitfall": "Confusing ω with frequency ν = ω/2π."
      },
      {
        "id": "model-c11-phy-2024-dps-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Properties of Fluids: Excess Pressure Inside Soap Bubble",
        "questionText": "Why is the excess pressure inside a soap bubble twice that inside an air bubble of the same radius in a liquid? Write both formulas.",
        "modelAnswer": "An air bubble inside a liquid has only ONE free spherical surface interface (liquid-air), so ΔP_air = 2S / R.\nA soap bubble in air has TWO free surfaces (inner and outer air-soap interfaces), doubling surface energy change, so ΔP_soap = 4S / R.",
        "stepMarking": [
          {
            "step": "Air bubble = 1 free surface (2S/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Soap bubble = 2 free surfaces (4S/R)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Explicitly state \"two free surfaces\" for soap bubble.",
        "commonPitfall": "Saying soap has double surface tension instead of two interfaces."
      },
      {
        "id": "model-c11-phy-2024-dps-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Units & Measurements: Van der Waals Dimensions",
        "questionText": "In the van der Waals equation (P + a/V²)(V - b) = RT, find the dimensional formulas of constants \"a\" and \"b\", where P is pressure and V is volume.",
        "modelAnswer": "By principle of homogeneity of dimensions:\n1. [a / V²] = [P] => [a] = [P][V²] = [M L⁻¹ T⁻²] × [L³]² = [M L⁵ T⁻²].\n2. [b] = [V] = [L³].",
        "stepMarking": [
          {
            "step": "Apply principle of homogeneity to get [a] = [M L⁵ T⁻²]",
            "marks": "1 Mark"
          },
          {
            "step": "Find [b] = [L³]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only quantities with identical dimensions can be added or subtracted.",
        "commonPitfall": "Taking V as velocity [LT⁻¹] instead of volume [L³]."
      },
      {
        "id": "model-c11-phy-2024-dps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Motion in a Plane: Angle Between Sum & Difference of Vectors",
        "questionText": "Two vectors A and B satisfy |A + B| = |A - B|. Find the angle between A and B.",
        "modelAnswer": "Squaring both sides:\n|A + B|² = |A - B|²\nA² + B² + 2AB cosθ = A² + B² - 2AB cosθ\n4AB cosθ = 0 => cosθ = 0 (since A, B ≠ 0) => θ = 90°.",
        "stepMarking": [
          {
            "step": "Expand magnitudes squared",
            "marks": "1 Mark"
          },
          {
            "step": "Solve 4AB cosθ = 0 -> θ = 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Geometrically, diagonals of a parallelogram are equal only when it is a rectangle (θ = 90°).",
        "commonPitfall": "Forgetting to state A ≠ 0, B ≠ 0."
      },
      {
        "id": "model-c11-phy-2024-dps-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Kinetic Theory: Pressure of an Ideal Gas & RMS Speed",
        "questionText": "Write the kinetic theory formula for pressure P exerted by an ideal gas and use it to calculate the RMS speed of nitrogen molecules (M = 28 g/mol) at 27°C (R = 8.314 J/mol·K).",
        "modelAnswer": "Pressure P = (1/3) ρ v_rms² = (1/3) (nM/V) v_rms² => v_rms = √(3RT / M).\nGiven T = 27 + 273 = 300 K, M = 28 × 10⁻³ kg/mol.\nv_rms = √(3 × 8.314 × 300 / 0.028) = √(7482.6 / 0.028) = √267235.7 ≈ 517 m/s.",
        "stepMarking": [
          {
            "step": "Formula P = (1/3)ρv_rms² & v_rms = √(3RT/M)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert T = 300 K and M = 0.028 kg/mol",
            "marks": "0.5 Mark"
          },
          {
            "step": "Final RMS speed ≈ 517 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert BOTH Temperature (to Kelvin) and Molar Mass (to kg/mol)!",
        "commonPitfall": "Substituting M = 28 instead of 0.028 kg/mol."
      },
      {
        "id": "model-c11-phy-2024-dps-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Units & Measurements: Checking Period of Pendulum Dimensionally",
        "questionText": "Assuming that the time period T of a simple pendulum depends on mass of bob m, length l, and acceleration due to gravity g, derive the expression T = k √(l/g) using dimensional analysis.",
        "modelAnswer": "Let T ∝ mᵃ lᵇ gᶜ => T = k mᵃ lᵇ gᶜ.\nWriting dimensions: [M⁰ L⁰ T¹] = [M]ᵃ [L]ᵇ [L T⁻²]ᶜ = [Mᵃ L^(b+c) T^(-2c)].\nEquating exponents:\n• a = 0\n• -2c = 1 => c = -1/2\n• b + c = 0 => b = -c = +1/2.\nSubstituting back: T = k m⁰ l^(1/2) g^(-1/2) = k √(l/g).",
        "stepMarking": [
          {
            "step": "Dimensional substitution [Mᵃ L^(b+c) T^(-2c)]",
            "marks": "1 Mark"
          },
          {
            "step": "Solve a=0, b=1/2, c=-1/2",
            "marks": "1 Mark"
          },
          {
            "step": "Final formula T = k√(l/g)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep dimensionless constant k as dimensions cannot find 2π.",
        "commonPitfall": "Forgetting to write k (writing = instead of k)."
      },
      {
        "id": "model-c11-phy-2024-dps-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Motion in a Straight Line: Calculus Derivation of v² - u² = 2as",
        "questionText": "Using integration (calculus method), derive all three kinematic equations of motion for constant acceleration a:\n(i) v = u + at\n(ii) s = ut + ½at²\n(iii) v² - u² = 2as",
        "modelAnswer": "(i) a = dv/dt => dv = a dt. Integrating from u to v and 0 to t: ∫dv = a∫dt => v - u = at => v = u + at.\n(ii) v = ds/dt => ds = (u + at)dt. Integrating s from 0 to s and t from 0 to t: s = ut + ½at².\n(iii) a = (dv/ds)(ds/dt) = v dv/ds => v dv = a ds. Integrating v from u to v and s from 0 to s: [v²/2] = a[s] => v² - u² = 2as.",
        "stepMarking": [
          {
            "step": "(i) Derive v = u + at via integration",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Derive s = ut + ½at²",
            "marks": "1 Mark"
          },
          {
            "step": "(iii) Use chain rule a = v dv/ds -> v² - u² = 2as",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify lower and upper limits of integration clearly.",
        "commonPitfall": "Using indefinite integration without finding constants."
      },
      {
        "id": "model-c11-phy-2024-dps-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Work, Energy & Power: Conservation in Vertical Circle",
        "questionText": "A particle of mass m tied to a string of length L is rotated in a vertical circle. Derive expressions for the minimum velocity at:\n(a) Highest point\n(b) Lowest point\njust to complete the vertical loop.",
        "modelAnswer": "(a) At highest point H, gravity alone supplies centripetal force when T_top = 0:\nmg = m v_H² / L => v_H = √(gL).\n(b) By conservation of mechanical energy between lowest point L_0 and highest point H (height difference = 2L):\n½ m v_L² = ½ m v_H² + mg(2L) = ½ m (gL) + 2mgL = (5/2) mgL\n=> v_L = √(5gL).",
        "stepMarking": [
          {
            "step": "Set T_top = 0 to find v_H = √(gL)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Apply mechanical energy conservation over Δh = 2L -> v_L = √(5gL)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Tension difference between bottom and top is always T_L - T_H = 6mg!",
        "commonPitfall": "Taking height difference between top and bottom as L instead of 2L."
      },
      {
        "id": "model-c11-phy-2024-dps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Rotational Motion: Perpendicular & Parallel Axes / Conservation of L",
        "questionText": "Define torque and angular momentum. Derive the relation τ = dL/dt for a particle and show how angular momentum is conserved when net external torque is zero.",
        "modelAnswer": "Torque τ = r × F and Angular Momentum L = r × p.\nDifferentiating L w.r.t. time t:\ndL/dt = d/dt(r × p) = (dr/dt × p) + (r × dp/dt).\nSince dr/dt = v and p = mv, v × (mv) = 0.\nAnd by Newton's second law, dp/dt = F_ext => dL/dt = r × F_ext = τ_ext.\nIf net external torque τ_ext = 0, then dL/dt = 0 => L = constant (Law of Conservation of Angular Momentum).",
        "stepMarking": [
          {
            "step": "Definitions τ = r × F and L = r × p",
            "marks": "1 Mark"
          },
          {
            "step": "Product rule differentiation showing v × p = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "τ = 0 => L = constant",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Maintain vector cross-product order r × p (never write p × r!).",
        "commonPitfall": "Dropping vector cross-product notation."
      },
      {
        "id": "model-c11-phy-2024-dps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Work Done in Isothermal & Adiabatic Processes",
        "questionText": "Derive an expression for the work done during a quasi-static isothermal expansion of n moles of an ideal gas from volume V₁ to V₂ at constant temperature T.",
        "modelAnswer": "Small work done dW = P dV. For n moles of an ideal gas, PV = nRT => P = nRT / V.\nTotal work W = ∫_{V₁}^{V₂} (nRT / V) dV = nRT ∫_{V₁}^{V₂} (1/V) dV\n= nRT [ln V]_{V₁}^{V₂} = nRT ln(V₂ / V₁) = 2.303 nRT log₁₀(V₂ / V₁).",
        "stepMarking": [
          {
            "step": "Set up dW = P dV with P = nRT/V",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate 1/V between V₁ and V₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert ln to log₁₀: 2.303 nRT log₁₀(V₂/V₁)",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "In terms of pressures (P₁V₁ = P₂V₂), W = 2.303 nRT log₁₀(P₁/P₂).",
        "commonPitfall": "Writing log(V₁/V₂) instead of log(V₂/V₁)."
      },
      {
        "id": "model-c11-phy-2024-dps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Thermal Properties: Terminal & Capillary / Excess Pressure or Stress-Strain Curve",
        "questionText": "Draw a typical stress-strain curve for a ductile metallic wire and clearly label: (i) Proportional limit, (ii) Yield point (elastic limit), (iii) Ultimate tensile strength, and (iv) Fracture point.",
        "modelAnswer": "• O to A (Proportional Limit): Hooke's law holds strictly (stress ∝ strain; linear graph; slope = Young's modulus Y).\n• A to B (Elastic Limit / Yield Point): Body returns to original dimensions when load removed; B is yield point beyond which plastic deformation begins.\n• D (Ultimate Tensile Strength): Maximum stress the material can withstand before necking starts.\n• E (Fracture Point): Wire breaks even under slightly reduced stress beyond D.",
        "stepMarking": [
          {
            "step": "Neat stress vs strain plot with all 4 points marked",
            "marks": "1.5 Marks"
          },
          {
            "step": "Physical meaning of Proportional limit, Yield, UTS & Fracture",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Recall Stress is plotted on Y-axis and Strain on X-axis (so slope = Y).",
        "commonPitfall": "Placing Strain on Y-axis instead of X-axis."
      },
      {
        "id": "model-c11-phy-2024-dps-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Banking of Curved Roads (Laws of Motion)",
        "questionText": "Read the passage and answer:\nTo reduce wear and tear on car tyres and avoid skidding at high speeds, the outer edge of curved highways is raised slightly above the inner edge by an angle θ (banking of roads).\n\n(a) On a flat circular road of radius R and coefficient of friction μ, write the expression for maximum safe speed. (1M)\n(b) Derive or state the optimum speed on a frictionless banked road of angle θ and radius R (zero wear & tear). (1M)\n(c) A circular track of radius 300 m is banked at angle θ such that tan θ = 0.15. Find the optimum speed (g = 10 m/s²). Also state the role of centripetal force direction. (2M)",
        "modelAnswer": "(a) Flat road: v_max = √(μ R g).\n(b) Optimum speed (zero friction needed): v₀ = √(R g tan θ).\n(c) v₀ = √(300 × 10 × 0.15) = √450 ≈ 21.21 m/s. Horizontal component of Normal reaction (N sinθ) provides the inward centripetal force towards the centre of the circular track.",
        "stepMarking": [
          {
            "step": "(a) √(μRg)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) √(Rg tanθ)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) v₀ = √450 ≈ 21.21 m/s + N sinθ explanation",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Optimum speed v₀ requires ZERO friction because N sinθ alone balances mv²/R!",
        "commonPitfall": "Confusing tan θ with sin θ in v₀ formula."
      },
      {
        "id": "model-c11-phy-2024-dps-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Terminal Velocity & Bernoulli Equation (Fluids)",
        "questionText": "Read the passage and answer:\nBlood flows through an artery of cross-sectional area 8 × 10⁻⁶ m² at an average speed of 0.4 m/s. When plaque narrows a segment (stenosis) to half its cross-sectional area, pressure drops significantly inside the constriction.\n\n(a) State the Equation of Continuity for incompressible fluid flow. (1M)\n(b) Find the blood speed inside the narrowed plaque region. (1M)\n(c) Using Bernoulli's principle, explain why severe narrowing can cause temporary collapse of an artery. (2M)",
        "modelAnswer": "(a) A₁v₁ = A₂v₂ (volume flow rate Av = constant for steady incompressible streamline flow).\n(b) A₂ = A₁/2 => v₂ = 2 v₁ = 2 × 0.4 = 0.8 m/s.\n(c) By Bernoulli's theorem (P + ½ρv² + ρgh = constant), higher speed v₂ in the constriction lowers internal fluid pressure P₂ dramatically. External tissue pressure can exceed P₂ and temporarily collapse the artery.",
        "stepMarking": [
          {
            "step": "(a) A₁v₁ = A₂v₂",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v₂ = 0.8 m/s",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Bernoulli pressure drop causing external collapse",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Equation of continuity is direct conservation of mass.",
        "commonPitfall": "Saying pressure increases when area narrows."
      },
      {
        "id": "model-c11-phy-2024-dps-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Motion in a Plane: Projectile Trajectory, Time of Flight, Max Height & Range",
        "questionText": "A projectile is fired with initial velocity u at an angle θ with the horizontal.\n(a) Show that the path of the projectile is a parabola.\n(b) Derive expressions for Time of Flight (T), Maximum Height (H), and Horizontal Range (R).\n(c) Prove that there are two angles of projection for the same horizontal range with identical initial speed.",
        "modelAnswer": "(a) x = (u cosθ)t => t = x/(u cosθ). Vertical displacement y = (u sinθ)t - ½gt² = x tanθ - [g / (2u² cos²θ)] x². Since y = ax - bx² is quadratic in x, the trajectory is a parabola.\n(b) At max height v_y = 0 => 0 = u sinθ - gt_asc => T = 2t_asc = (2u sinθ)/g.\nH = (u² sin²θ)/(2g).\nR = (u cosθ) × T = (u² sin 2θ)/g.\n(c) Replacing θ by (90° - θ): R' = u² sin(180° - 2θ)/g = u² sin 2θ / g = R. Thus θ and (90° - θ) yield identical range.",
        "stepMarking": [
          {
            "step": "(a) Parabolic equation y = x tanθ - gx²/(2u²cos²θ)",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Derivations of T, H, R",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Complementary angles θ and 90°-θ proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a clean projectile arc labelling u_x = u cosθ, u_y = u sinθ, H and R.",
        "commonPitfall": "Writing sin²θ instead of sin 2θ in Range formula."
      },
      {
        "id": "model-c11-phy-2024-dps-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Laws of Motion: Banking of Roads with Friction (Maximum Safe Speed)",
        "questionText": "(a) Draw a free-body diagram of a car of mass m negotiating a circular banked road of radius R banked at angle θ with coefficient of static friction μ_s.\n(b) Derive the exact expression for maximum safe permissible speed v_max.\n(c) A cyclist speeds at 18 km/h on a level circular turn of radius 9 m with μ_s = 0.3 (g = 10 m/s²). Will the cyclist slip?",
        "modelAnswer": "(a) Forces on car: Weight mg downward, Normal N perpendicular to banked road, Static friction f_s down the incline (for max speed).\n(b) Vertical equilibrium: N cosθ - f_s sinθ = mg. Horizontal centripetal: N sinθ + f_s cosθ = mv_max²/R. Putting f_s = μ_s N and dividing:\nv_max = √[ R g (μ_s + tan θ) / (1 - μ_s tan θ) ].\n(c) v = 18 km/h = 5 m/s. Max safe speed on level road = √(μ_s R g) = √(0.3 × 9 × 10) = √27 ≈ 5.196 m/s. Since 5 m/s < 5.196 m/s, the cyclist will NOT slip.",
        "stepMarking": [
          {
            "step": "(a) FBD resolving N and f_s along vertical & horizontal",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Derivation of v_max",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 18 km/h = 5 m/s < √27 m/s -> No slip",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert km/h to m/s by multiplying by 5/18.",
        "commonPitfall": "Resolving friction parallel to horizontal instead of along the inclined road."
      },
      {
        "id": "model-c11-phy-2024-dps-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Fluids: Bernoulli's Theorem Statement, Proof & Torricelli Speed",
        "questionText": "(a) State Bernoulli's principle and derive the equation P + ½ρv² + ρgh = constant for a steady, incompressible, non-viscous flow.\n(b) Mention two practical applications.\n(c) Water flows out of a small hole at the bottom of a wide tank filled to height 5 m. Find the speed of efflux (g = 10 m/s²).",
        "modelAnswer": "(a) For streamline flow of an ideal fluid, sum of pressure energy, kinetic energy per unit volume, and gravitational potential energy per unit volume remains constant.\nDerivation via Work-Energy theorem on fluid element of mass Δm = ρΔV passing from (A₁, v₁, P₁, h₁) to (A₂, v₂, P₂, h₂): Net work (P₁ - P₂)ΔV = ΔK + ΔU = ½ρΔV(v₂² - v₁²) + ρΔVg(h₂ - h₁). Dividing by ΔV gives P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂.\n(b) Applications: Atomiser/sprayer, aerofoil lift on aircraft wings, Venturimeter.\n(c) Speed of efflux v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.",
        "stepMarking": [
          {
            "step": "(a) Statement + Work-Energy proof",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Two applications",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Torricelli speed v = 10 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the four ideal-fluid assumptions: steady, incompressible, non-viscous, irrotational.",
        "commonPitfall": "Forgetting potential energy term ρgh in derivation."
      }
    ]
  },
  {
    "id": "model-c11-phy-2024-cfpq",
    "title": "CBSE CFPQ Competency Practice Class 11 Physics Paper (2024)",
    "subject": "Physics",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "CFPQ/C11/PHY-02",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 Very Short Answer questions of 2 marks each.",
      "Section C: 7 Short Answer questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c11-phy-2024-cfpq-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Straight Line: v-t Graph Area & Slope",
        "questionText": "A particle starts from rest with uniform acceleration a. The ratio of distances travelled in the 1st, 2nd, and 3rd seconds is:",
        "options": [
          "A) 1 : 2 : 3",
          "B) 1 : 4 : 9",
          "C) 1 : 3 : 5",
          "D) 1 : 1 : 1"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Galileo's law of odd numbers, Sₙ = u + (a/2)(2n - 1). With u = 0, S₁ : S₂ : S₃ = 1 : 3 : 5.",
        "stepMarking": [
          {
            "step": "Apply Sₙ ∝ (2n - 1) for u = 0 -> 1:3:5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish distance in \"n seconds\" (∝ n²) vs distance in \"nth second\" (∝ 2n-1).",
        "commonPitfall": "Marking 1:4:9 (total distance after n seconds)."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Plane: Projectile Range Condition",
        "questionText": "For a projectile launched at angle θ with horizontal, at what angle of projection is its maximum vertical height equal to its horizontal range?",
        "options": [
          "A) θ = tan⁻¹(1)",
          "B) θ = tan⁻¹(2)",
          "C) θ = tan⁻¹(4)",
          "D) θ = tan⁻¹(1/4)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. H = R => (u² sin²θ)/(2g) = (u² sin 2θ)/g => (sin²θ)/2 = 2 sinθ cosθ => tan θ = 4 => θ = tan⁻¹(4).",
        "stepMarking": [
          {
            "step": "Equate H = R -> sin²θ/2 = 2sinθcosθ -> tanθ = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Useful general identity: R = nH gives tan θ = 4/n. Here n = 1 => tan θ = 4.",
        "commonPitfall": "Forgetting the factor of 2 in sin 2θ = 2 sinθ cosθ."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Apparent Weight in Elevator",
        "questionText": "A person of mass 60 kg stands on a weighing scale inside a lift accelerating downwards at 2 m/s² (take g = 10 m/s²). The reading on the scale is:",
        "options": [
          "A) 720 N",
          "B) 600 N",
          "C) 480 N",
          "D) 120 N"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Normal reaction R = m(g - a) = 60(10 - 2) = 480 N.",
        "stepMarking": [
          {
            "step": "R = m(g - a) = 60 × 8 = 480 N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Accelerating UP: m(g + a); Accelerating DOWN: m(g - a); Free fall: 0.",
        "commonPitfall": "Adding a instead of subtracting for downward acceleration."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Work, Energy & Power: Kinetic Energy & Momentum",
        "questionText": "If the linear momentum of a body increases by 50%, its kinetic energy increases by:",
        "options": [
          "A) 50%",
          "B) 100%",
          "C) 125%",
          "D) 225%"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. K = p²/(2m). New p' = 1.5 p => K' = (1.5)² K = 2.25 K. Percentage increase = (2.25 - 1) × 100% = 125%.",
        "stepMarking": [
          {
            "step": "K' = (1.5)²K = 2.25K -> increase 125%",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never use ΔK/K = 2(Δp/p) for large changes like 50% — that formula is only for small (<5%) changes!",
        "commonPitfall": "Using linear approximation 2 × 50% = 100%."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Moment of Inertia of Disc vs Ring",
        "questionText": "A solid sphere, a solid cylinder, and a circular ring of identical mass M and radius R roll down an inclined plane without slipping. Which reaches the bottom first?",
        "options": [
          "A) Circular ring",
          "B) Solid cylinder",
          "C) Solid sphere",
          "D) All reach simultaneously"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Rolling acceleration a = g sinθ / (1 + I/(MR²)). Solid sphere has the smallest I/(MR²) = 2/5 = 0.4 (vs cylinder 0.5, ring 1.0), giving the largest acceleration.",
        "stepMarking": [
          {
            "step": "Smallest I/(MR²) = 2/5 -> max acceleration -> Solid sphere first",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Smaller the k²/R² factor, faster the object rolls down.",
        "commonPitfall": "Assuming all masses reach together like frictionless sliding."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Gravitation: Orbital vs Escape Velocity",
        "questionText": "The escape velocity from Earth's surface is vₑ ≈ 11.2 km/s. What would be the escape velocity from a planet having twice the mass and twice the radius of Earth?",
        "options": [
          "A) 5.6 km/s",
          "B) 11.2 km/s",
          "C) 22.4 km/s",
          "D) 11.2√2 km/s"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₑ = √(2GM/R). When both M and R double, M/R stays unchanged, so vₑ remains 11.2 km/s.",
        "stepMarking": [
          {
            "step": "vₑ ∝ √(M/R) remains unchanged = 11.2 km/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write the proportionality vₑ ∝ √(M/R) before substituting ratios.",
        "commonPitfall": "Forgetting the square root or thinking radius doubles vₑ."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Solids: Breaking Stress",
        "questionText": "A steel wire of length L and radius r can sustain a maximum load W without breaking. If the wire is cut into two equal halves, the maximum load each half can sustain is:",
        "options": [
          "A) W / 2",
          "B) W",
          "C) 2W",
          "D) W / 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Breaking load = Breaking Stress × Cross-sectional Area (πr²). Cutting length does not change area or material breaking stress, so max load remains W.",
        "stepMarking": [
          {
            "step": "Breaking load depends on Area & Material, independent of length",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Young's modulus and breaking stress are intensive material properties.",
        "commonPitfall": "Thinking halving length doubles or halves breaking force."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Fluids: Terminal Velocity",
        "questionText": "According to Stokes' law, the terminal velocity vₜ of a small sphere falling through a viscous fluid is proportional to its radius r as:",
        "options": [
          "A) r",
          "B) r²",
          "C) 1/r",
          "D) 1/r²"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₜ = (2r²(ρ - σ)g) / (9η) => vₜ ∝ r².",
        "stepMarking": [
          {
            "step": "State Stokes terminal velocity vₜ ∝ r²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Eight tiny droplets merging into one big drop (R = 2r) increases terminal speed 4 times.",
        "commonPitfall": "Marking proportional to r."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Thermal Properties of Matter: Newton's Law of Cooling / Wein's Law",
        "questionText": "Wien's displacement law relates the wavelength λₘ of maximum spectral emission from a blackbody to its absolute temperature T as:",
        "options": [
          "A) λₘ / T = constant",
          "B) λₘ T = constant",
          "C) λₘ T² = constant",
          "D) λₘ T⁴ = constant"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Wien's law states λₘ T = b (Wien's constant ≈ 2.9 × 10⁻³ m·K). Hotter stars emit shorter wavelengths (blue).",
        "stepMarking": [
          {
            "step": "Identify λₘ T = constant",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Do not mix Wien's law (λₘ T = b) with Stefan-Boltzmann law (E ∝ T⁴).",
        "commonPitfall": "Selecting T⁴."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Molar Specific Heat Ratio γ",
        "questionText": "In an adiabatic expansion of an ideal gas, which quantity remains strictly constant?",
        "options": [
          "A) Temperature T",
          "B) Pressure P",
          "C) PV^γ",
          "D) Internal energy U"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. For a quasi-static adiabatic process (δQ = 0), PV^γ = constant, where γ = Cp/Cv.",
        "stepMarking": [
          {
            "step": "Identify PV^γ = constant for adiabatic process",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal: PV = const; Adiabatic: PV^γ = const.",
        "commonPitfall": "Thinking temperature remains constant in adiabatic expansion (T actually drops!)."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Kinetic Theory of Gases: Degrees of Freedom & Equipartition",
        "questionText": "At room temperature, the average translational kinetic energy per molecule of an ideal gas depends only on:",
        "options": [
          "A) Molar mass of gas",
          "B) Absolute temperature T",
          "C) Volume of container",
          "D) Pressure alone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Mean translational KE per molecule = (3/2) k_B T, which depends solely on absolute temperature T.",
        "stepMarking": [
          {
            "step": "KE = (3/2) k_B T depends only on T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "All ideal gases at the same temperature have the SAME average translational KE per molecule, regardless of mass.",
        "commonPitfall": "Thinking heavier molecules have higher kinetic energy."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Oscillations: Simple Pendulum Time Period",
        "questionText": "A simple pendulum of time period T is taken inside an artificial satellite orbiting the Earth. Its time period inside the satellite will be:",
        "options": [
          "A) T",
          "B) T / 2",
          "C) Zero",
          "D) Infinite (does not oscillate)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Inside an orbiting satellite, effective gravity g_eff = 0 (weightlessness). Since T = 2π√(L/g_eff), T → ∞.",
        "stepMarking": [
          {
            "step": "g_eff = 0 in satellite -> T = ∞",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A spring-mass system T = 2π√(m/k) is unaffected by g and oscillates normally in space!",
        "commonPitfall": "Writing T = 0 when g_eff = 0."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Action-Reaction Pairs",
        "questionText": "Assertion (A): Action and reaction forces in Newton's third law never cancel each other out.\nReason (R): Action and reaction act on two different bodies simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Only forces acting on the SAME body can cancel to yield zero net force; third-law pairs act on two distinct interacting bodies.",
        "stepMarking": [
          {
            "step": "Option (A) noting action-reaction act on different bodies",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check whether force pairs act on one body or two bodies.",
        "commonPitfall": "Marking (C) by confusing normal force + weight (both on same block!) with third-law pair."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Ballet Dancer Conservation of L",
        "questionText": "Assertion (A): An ice skater spins faster when she folds her arms close to her body.\nReason (R): Folding her arms decreases her moment of inertia I, so angular speed ω increases to conserve angular momentum L = Iω.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. With zero external torque, L = Iω = constant => reducing I automatically increases ω.",
        "stepMarking": [
          {
            "step": "Option (A) applying conservation of angular momentum",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention zero external torque explicitly when explaining L = Iω.",
        "commonPitfall": "Thinking rotational kinetic energy stays constant (it actually increases via internal muscle work!)."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Isothermal Elasticity & Specific Heat",
        "questionText": "Assertion (A): Specific heat of a gas in an isothermal process is infinity.\nReason (R): In an isothermal process, heat supplied causes no change in temperature (ΔT = 0), so C = Q/(mΔT) → ∞.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For isothermal ΔT = 0 with finite heat exchange Q, C = Q/(mΔT) = ∞; for adiabatic Q = 0 with ΔT ≠ 0, C = 0.",
        "stepMarking": [
          {
            "step": "Option (A) using C = Q/(mΔT)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal C = ∞; Adiabatic C = 0.",
        "commonPitfall": "Mixing up isothermal (C=∞) with adiabatic (C=0)."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Fluids: Bernoulli Principle & Pressure",
        "questionText": "Assertion (A): When a fast train passes a stationary person standing close to the track, the person tends to be pulled towards the train.\nReason (R): Fast-moving air between the train and person creates a region of higher pressure compared to outside.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Bernoulli's theorem, fast-moving air creates LOWER pressure (not higher pressure) between train and person, so outside higher pressure pushes the person inward.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false (higher velocity -> lower pressure)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read Reason carefully: high speed => LOW static pressure.",
        "commonPitfall": "Assuming fast air creates high static pressure."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Oscillations: Phase & Maximum Acceleration in SHM",
        "questionText": "The displacement of a particle executing SHM is given by x(t) = 0.04 sin(100t + π/3) metres. Find its amplitude, angular frequency, frequency, and maximum acceleration.",
        "modelAnswer": "Comparing with x = A sin(ωt + φ):\nAmplitude A = 0.04 m; Angular frequency ω = 100 rad/s.\nFrequency ν = ω / (2π) = 100 / (2π) = 50/π ≈ 15.92 Hz.\nMax acceleration a_max = ω² A = (100)² × 0.04 = 10000 × 0.04 = 400 m/s².",
        "stepMarking": [
          {
            "step": "A = 0.04 m, ω = 100 rad/s, ν = 50/π Hz",
            "marks": "1 Mark"
          },
          {
            "step": "a_max = ω²A = 400 m/s²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State SI units (m, rad/s, Hz, m/s²) for each quantity.",
        "commonPitfall": "Confusing ω with frequency ν = ω/2π."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Properties of Fluids: Excess Pressure Inside Soap Bubble",
        "questionText": "Why is the excess pressure inside a soap bubble twice that inside an air bubble of the same radius in a liquid? Write both formulas.",
        "modelAnswer": "An air bubble inside a liquid has only ONE free spherical surface interface (liquid-air), so ΔP_air = 2S / R.\nA soap bubble in air has TWO free surfaces (inner and outer air-soap interfaces), doubling surface energy change, so ΔP_soap = 4S / R.",
        "stepMarking": [
          {
            "step": "Air bubble = 1 free surface (2S/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Soap bubble = 2 free surfaces (4S/R)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Explicitly state \"two free surfaces\" for soap bubble.",
        "commonPitfall": "Saying soap has double surface tension instead of two interfaces."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Units & Measurements: Van der Waals Dimensions",
        "questionText": "In the van der Waals equation (P + a/V²)(V - b) = RT, find the dimensional formulas of constants \"a\" and \"b\", where P is pressure and V is volume.",
        "modelAnswer": "By principle of homogeneity of dimensions:\n1. [a / V²] = [P] => [a] = [P][V²] = [M L⁻¹ T⁻²] × [L³]² = [M L⁵ T⁻²].\n2. [b] = [V] = [L³].",
        "stepMarking": [
          {
            "step": "Apply principle of homogeneity to get [a] = [M L⁵ T⁻²]",
            "marks": "1 Mark"
          },
          {
            "step": "Find [b] = [L³]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only quantities with identical dimensions can be added or subtracted.",
        "commonPitfall": "Taking V as velocity [LT⁻¹] instead of volume [L³]."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Motion in a Plane: Angle Between Sum & Difference of Vectors",
        "questionText": "Two vectors A and B satisfy |A + B| = |A - B|. Find the angle between A and B.",
        "modelAnswer": "Squaring both sides:\n|A + B|² = |A - B|²\nA² + B² + 2AB cosθ = A² + B² - 2AB cosθ\n4AB cosθ = 0 => cosθ = 0 (since A, B ≠ 0) => θ = 90°.",
        "stepMarking": [
          {
            "step": "Expand magnitudes squared",
            "marks": "1 Mark"
          },
          {
            "step": "Solve 4AB cosθ = 0 -> θ = 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Geometrically, diagonals of a parallelogram are equal only when it is a rectangle (θ = 90°).",
        "commonPitfall": "Forgetting to state A ≠ 0, B ≠ 0."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Laws of Motion: Recoil Velocity of Gun",
        "questionText": "A bullet of mass 20 g is fired horizontally with velocity 150 m/s from a pistol of mass 2 kg. Calculate the recoil velocity of the pistol.",
        "modelAnswer": "By conservation of linear momentum (initial momentum = 0):\nm₁v₁ + m₂v₂ = 0\n(0.02 kg)(150 m/s) + (2 kg) v₂ = 0\n3 + 2v₂ = 0 => v₂ = -1.5 m/s.\nRecoil speed is 1.5 m/s opposite to bullet direction.",
        "stepMarking": [
          {
            "step": "Convert 20 g = 0.02 kg & apply m₁v₁ + m₂v₂ = 0",
            "marks": "1 Mark"
          },
          {
            "step": "v₂ = -1.5 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always convert mass into SI unit kg!",
        "commonPitfall": "Using m₁ = 20 g alongside m₂ = 2 kg without conversion."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Units & Measurements: Checking Period of Pendulum Dimensionally",
        "questionText": "Assuming that the time period T of a simple pendulum depends on mass of bob m, length l, and acceleration due to gravity g, derive the expression T = k √(l/g) using dimensional analysis.",
        "modelAnswer": "Let T ∝ mᵃ lᵇ gᶜ => T = k mᵃ lᵇ gᶜ.\nWriting dimensions: [M⁰ L⁰ T¹] = [M]ᵃ [L]ᵇ [L T⁻²]ᶜ = [Mᵃ L^(b+c) T^(-2c)].\nEquating exponents:\n• a = 0\n• -2c = 1 => c = -1/2\n• b + c = 0 => b = -c = +1/2.\nSubstituting back: T = k m⁰ l^(1/2) g^(-1/2) = k √(l/g).",
        "stepMarking": [
          {
            "step": "Dimensional substitution [Mᵃ L^(b+c) T^(-2c)]",
            "marks": "1 Mark"
          },
          {
            "step": "Solve a=0, b=1/2, c=-1/2",
            "marks": "1 Mark"
          },
          {
            "step": "Final formula T = k√(l/g)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep dimensionless constant k as dimensions cannot find 2π.",
        "commonPitfall": "Forgetting to write k (writing = instead of k)."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Motion in a Straight Line: Calculus Derivation of v² - u² = 2as",
        "questionText": "Using integration (calculus method), derive all three kinematic equations of motion for constant acceleration a:\n(i) v = u + at\n(ii) s = ut + ½at²\n(iii) v² - u² = 2as",
        "modelAnswer": "(i) a = dv/dt => dv = a dt. Integrating from u to v and 0 to t: ∫dv = a∫dt => v - u = at => v = u + at.\n(ii) v = ds/dt => ds = (u + at)dt. Integrating s from 0 to s and t from 0 to t: s = ut + ½at².\n(iii) a = (dv/ds)(ds/dt) = v dv/ds => v dv = a ds. Integrating v from u to v and s from 0 to s: [v²/2] = a[s] => v² - u² = 2as.",
        "stepMarking": [
          {
            "step": "(i) Derive v = u + at via integration",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Derive s = ut + ½at²",
            "marks": "1 Mark"
          },
          {
            "step": "(iii) Use chain rule a = v dv/ds -> v² - u² = 2as",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify lower and upper limits of integration clearly.",
        "commonPitfall": "Using indefinite integration without finding constants."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Work, Energy & Power: Conservation in Vertical Circle",
        "questionText": "A particle of mass m tied to a string of length L is rotated in a vertical circle. Derive expressions for the minimum velocity at:\n(a) Highest point\n(b) Lowest point\njust to complete the vertical loop.",
        "modelAnswer": "(a) At highest point H, gravity alone supplies centripetal force when T_top = 0:\nmg = m v_H² / L => v_H = √(gL).\n(b) By conservation of mechanical energy between lowest point L_0 and highest point H (height difference = 2L):\n½ m v_L² = ½ m v_H² + mg(2L) = ½ m (gL) + 2mgL = (5/2) mgL\n=> v_L = √(5gL).",
        "stepMarking": [
          {
            "step": "Set T_top = 0 to find v_H = √(gL)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Apply mechanical energy conservation over Δh = 2L -> v_L = √(5gL)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Tension difference between bottom and top is always T_L - T_H = 6mg!",
        "commonPitfall": "Taking height difference between top and bottom as L instead of 2L."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Rotational Motion: Perpendicular & Parallel Axes / Conservation of L",
        "questionText": "Define torque and angular momentum. Derive the relation τ = dL/dt for a particle and show how angular momentum is conserved when net external torque is zero.",
        "modelAnswer": "Torque τ = r × F and Angular Momentum L = r × p.\nDifferentiating L w.r.t. time t:\ndL/dt = d/dt(r × p) = (dr/dt × p) + (r × dp/dt).\nSince dr/dt = v and p = mv, v × (mv) = 0.\nAnd by Newton's second law, dp/dt = F_ext => dL/dt = r × F_ext = τ_ext.\nIf net external torque τ_ext = 0, then dL/dt = 0 => L = constant (Law of Conservation of Angular Momentum).",
        "stepMarking": [
          {
            "step": "Definitions τ = r × F and L = r × p",
            "marks": "1 Mark"
          },
          {
            "step": "Product rule differentiation showing v × p = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "τ = 0 => L = constant",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Maintain vector cross-product order r × p (never write p × r!).",
        "commonPitfall": "Dropping vector cross-product notation."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Work Done in Isothermal & Adiabatic Processes",
        "questionText": "Derive an expression for the work done during a quasi-static isothermal expansion of n moles of an ideal gas from volume V₁ to V₂ at constant temperature T.",
        "modelAnswer": "Small work done dW = P dV. For n moles of an ideal gas, PV = nRT => P = nRT / V.\nTotal work W = ∫_{V₁}^{V₂} (nRT / V) dV = nRT ∫_{V₁}^{V₂} (1/V) dV\n= nRT [ln V]_{V₁}^{V₂} = nRT ln(V₂ / V₁) = 2.303 nRT log₁₀(V₂ / V₁).",
        "stepMarking": [
          {
            "step": "Set up dW = P dV with P = nRT/V",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate 1/V between V₁ and V₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert ln to log₁₀: 2.303 nRT log₁₀(V₂/V₁)",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "In terms of pressures (P₁V₁ = P₂V₂), W = 2.303 nRT log₁₀(P₁/P₂).",
        "commonPitfall": "Writing log(V₁/V₂) instead of log(V₂/V₁)."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Thermal Properties: Terminal & Capillary / Excess Pressure or Stress-Strain Curve",
        "questionText": "Draw a typical stress-strain curve for a ductile metallic wire and clearly label: (i) Proportional limit, (ii) Yield point (elastic limit), (iii) Ultimate tensile strength, and (iv) Fracture point.",
        "modelAnswer": "• O to A (Proportional Limit): Hooke's law holds strictly (stress ∝ strain; linear graph; slope = Young's modulus Y).\n• A to B (Elastic Limit / Yield Point): Body returns to original dimensions when load removed; B is yield point beyond which plastic deformation begins.\n• D (Ultimate Tensile Strength): Maximum stress the material can withstand before necking starts.\n• E (Fracture Point): Wire breaks even under slightly reduced stress beyond D.",
        "stepMarking": [
          {
            "step": "Neat stress vs strain plot with all 4 points marked",
            "marks": "1.5 Marks"
          },
          {
            "step": "Physical meaning of Proportional limit, Yield, UTS & Fracture",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Recall Stress is plotted on Y-axis and Strain on X-axis (so slope = Y).",
        "commonPitfall": "Placing Strain on Y-axis instead of X-axis."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Waves: Newton Formula & Laplace Correction for Speed of Sound",
        "questionText": "Why did Newton's formula v = √(P/ρ) give an incorrect value for the speed of sound in air? Explain Laplace's correction and compute the corrected formula.",
        "modelAnswer": "Newton assumed sound propagation in air is an ISOTHERMAL process (B_iso = P), giving v ≈ 280 m/s at STP vs experimental 331 m/s (15% error).\nLaplace showed that compressions and rarefactions occur too rapidly in air (a poor conductor of heat) for heat exchange to happen, making the process ADIABATIC.\nThus adiabatic bulk modulus B_ad = γP => v = √(γP/ρ). For air (γ = 1.4), v = √(1.4) × 280 ≈ 331.3 m/s, matching experiment.",
        "stepMarking": [
          {
            "step": "Newton's isothermal assumption -> 280 m/s discrepancy",
            "marks": "1 Mark"
          },
          {
            "step": "Laplace's adiabatic reasoning (rapid + poor conductor)",
            "marks": "1 Mark"
          },
          {
            "step": "Corrected formula v = √(γP/ρ) ≈ 331.3 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight γ = Cp/Cv = 1.4 for diatomic gases like N₂/O₂ in air.",
        "commonPitfall": "Confusing isothermal vs adiabatic bulk modulus."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Terminal Velocity & Bernoulli Equation (Fluids)",
        "questionText": "Read the passage and answer:\nBlood flows through an artery of cross-sectional area 8 × 10⁻⁶ m² at an average speed of 0.4 m/s. When plaque narrows a segment (stenosis) to half its cross-sectional area, pressure drops significantly inside the constriction.\n\n(a) State the Equation of Continuity for incompressible fluid flow. (1M)\n(b) Find the blood speed inside the narrowed plaque region. (1M)\n(c) Using Bernoulli's principle, explain why severe narrowing can cause temporary collapse of an artery. (2M)",
        "modelAnswer": "(a) A₁v₁ = A₂v₂ (volume flow rate Av = constant for steady incompressible streamline flow).\n(b) A₂ = A₁/2 => v₂ = 2 v₁ = 2 × 0.4 = 0.8 m/s.\n(c) By Bernoulli's theorem (P + ½ρv² + ρgh = constant), higher speed v₂ in the constriction lowers internal fluid pressure P₂ dramatically. External tissue pressure can exceed P₂ and temporarily collapse the artery.",
        "stepMarking": [
          {
            "step": "(a) A₁v₁ = A₂v₂",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v₂ = 0.8 m/s",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Bernoulli pressure drop causing external collapse",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Equation of continuity is direct conservation of mass.",
        "commonPitfall": "Saying pressure increases when area narrows."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Satellites & Kepler Laws (Gravitation)",
        "questionText": "Read the passage and answer:\nCommunication and Earth-observation satellites orbit at fixed altitudes balanced between gravitational attraction and centripetal requirement. A satellite of mass 500 kg orbits Earth at height h = R (where Earth radius R = 6.4 × 10⁶ m, g = 10 m/s²).\n\n(a) State Kepler's Third Law (Law of Periods). (1M)\n(b) Write the formula for orbital speed of a satellite at height h above Earth's surface. (1M)\n(c) Calculate the orbital speed of the given satellite at h = R. (2M)",
        "modelAnswer": "(a) The square of the time period T of revolution of a planet/satellite is directly proportional to the cube of the semi-major axis r of its elliptical/circular orbit (T² ∝ r³).\n(b) v_o = √(GM / (R + h)) = R √(g / (R + h)).\n(c) At h = R, R + h = 2R => v_o = √(gR / 2) = √(10 × 6.4 × 10⁶ / 2) = √(3.2 × 10⁷) = 4000√2 ≈ 5.66 × 10³ m/s (5.66 km/s).",
        "stepMarking": [
          {
            "step": "(a) T² ∝ r³ statement",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v_o = √(GM/(R+h))",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Substitute r = 2R -> 5.66 km/s",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Notice orbital speed is independent of satellite mass (500 kg is extra data)!",
        "commonPitfall": "Using r = R instead of R + h = 2R."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Laws of Motion: Banking of Roads with Friction (Maximum Safe Speed)",
        "questionText": "(a) Draw a free-body diagram of a car of mass m negotiating a circular banked road of radius R banked at angle θ with coefficient of static friction μ_s.\n(b) Derive the exact expression for maximum safe permissible speed v_max.\n(c) A cyclist speeds at 18 km/h on a level circular turn of radius 9 m with μ_s = 0.3 (g = 10 m/s²). Will the cyclist slip?",
        "modelAnswer": "(a) Forces on car: Weight mg downward, Normal N perpendicular to banked road, Static friction f_s down the incline (for max speed).\n(b) Vertical equilibrium: N cosθ - f_s sinθ = mg. Horizontal centripetal: N sinθ + f_s cosθ = mv_max²/R. Putting f_s = μ_s N and dividing:\nv_max = √[ R g (μ_s + tan θ) / (1 - μ_s tan θ) ].\n(c) v = 18 km/h = 5 m/s. Max safe speed on level road = √(μ_s R g) = √(0.3 × 9 × 10) = √27 ≈ 5.196 m/s. Since 5 m/s < 5.196 m/s, the cyclist will NOT slip.",
        "stepMarking": [
          {
            "step": "(a) FBD resolving N and f_s along vertical & horizontal",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Derivation of v_max",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 18 km/h = 5 m/s < √27 m/s -> No slip",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert km/h to m/s by multiplying by 5/18.",
        "commonPitfall": "Resolving friction parallel to horizontal instead of along the inclined road."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Fluids: Bernoulli's Theorem Statement, Proof & Torricelli Speed",
        "questionText": "(a) State Bernoulli's principle and derive the equation P + ½ρv² + ρgh = constant for a steady, incompressible, non-viscous flow.\n(b) Mention two practical applications.\n(c) Water flows out of a small hole at the bottom of a wide tank filled to height 5 m. Find the speed of efflux (g = 10 m/s²).",
        "modelAnswer": "(a) For streamline flow of an ideal fluid, sum of pressure energy, kinetic energy per unit volume, and gravitational potential energy per unit volume remains constant.\nDerivation via Work-Energy theorem on fluid element of mass Δm = ρΔV passing from (A₁, v₁, P₁, h₁) to (A₂, v₂, P₂, h₂): Net work (P₁ - P₂)ΔV = ΔK + ΔU = ½ρΔV(v₂² - v₁²) + ρΔVg(h₂ - h₁). Dividing by ΔV gives P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂.\n(b) Applications: Atomiser/sprayer, aerofoil lift on aircraft wings, Venturimeter.\n(c) Speed of efflux v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.",
        "stepMarking": [
          {
            "step": "(a) Statement + Work-Energy proof",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Two applications",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Torricelli speed v = 10 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the four ideal-fluid assumptions: steady, incompressible, non-viscous, irrotational.",
        "commonPitfall": "Forgetting potential energy term ρgh in derivation."
      },
      {
        "id": "model-c11-phy-2024-cfpq-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Oscillations: Simple Harmonic Motion Energy & Simple Pendulum Proof",
        "questionText": "(a) Derive expressions for kinetic energy, potential energy, and total mechanical energy of a particle executing SHM of amplitude A and mass m. Plot them vs displacement x.\n(b) Show that oscillations of a simple pendulum for small angular displacements are simple harmonic, and derive T = 2π√(L/g).",
        "modelAnswer": "(a) Displacement x = A sin(ωt), velocity v = ω√(A² - x²).\nKE = ½ m ω² (A² - x²); PE = ½ m ω² x².\nTotal Energy E = KE + PE = ½ m ω² A² = ½ k A² (constant, independent of x). Graph: PE is upward parabola, KE is inverted parabola, Total E is horizontal line.\n(b) Restoring torque τ = -mgL sinθ ≈ -mgLθ (for small θ). Using τ = Iα = (mL²) d²θ/dt² => d²θ/dt² = -(g/L)θ = -ω²θ.\nHence motion is SHM with ω = √(g/L) => T = 2π/ω = 2π√(L/g).",
        "stepMarking": [
          {
            "step": "(a) KE, PE, Total E expressions + parabolic graph",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Restoring torque & small-angle sinθ≈θ -> T = 2π√(L/g)",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Explicitly state the small-angle approximation sin θ ≈ θ (in radians).",
        "commonPitfall": "Forgetting to write why total energy graph is a straight horizontal line."
      }
    ]
  },
  {
    "id": "model-c11-phy-2023-dav",
    "title": "DAV Schools National Class 11 Physics Uniform Paper (2023)",
    "subject": "Physics",
    "targetClass": "Class 11",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "DAV/C11/PHY-03",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 Very Short Answer questions of 2 marks each.",
      "Section C: 7 Short Answer questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c11-phy-2023-dav-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Apparent Weight in Elevator",
        "questionText": "A person of mass 60 kg stands on a weighing scale inside a lift accelerating downwards at 2 m/s² (take g = 10 m/s²). The reading on the scale is:",
        "options": [
          "A) 720 N",
          "B) 600 N",
          "C) 480 N",
          "D) 120 N"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Normal reaction R = m(g - a) = 60(10 - 2) = 480 N.",
        "stepMarking": [
          {
            "step": "R = m(g - a) = 60 × 8 = 480 N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Accelerating UP: m(g + a); Accelerating DOWN: m(g - a); Free fall: 0.",
        "commonPitfall": "Adding a instead of subtracting for downward acceleration."
      },
      {
        "id": "model-c11-phy-2023-dav-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Work, Energy & Power: Kinetic Energy & Momentum",
        "questionText": "If the linear momentum of a body increases by 50%, its kinetic energy increases by:",
        "options": [
          "A) 50%",
          "B) 100%",
          "C) 125%",
          "D) 225%"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. K = p²/(2m). New p' = 1.5 p => K' = (1.5)² K = 2.25 K. Percentage increase = (2.25 - 1) × 100% = 125%.",
        "stepMarking": [
          {
            "step": "K' = (1.5)²K = 2.25K -> increase 125%",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never use ΔK/K = 2(Δp/p) for large changes like 50% — that formula is only for small (<5%) changes!",
        "commonPitfall": "Using linear approximation 2 × 50% = 100%."
      },
      {
        "id": "model-c11-phy-2023-dav-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Moment of Inertia of Disc vs Ring",
        "questionText": "A solid sphere, a solid cylinder, and a circular ring of identical mass M and radius R roll down an inclined plane without slipping. Which reaches the bottom first?",
        "options": [
          "A) Circular ring",
          "B) Solid cylinder",
          "C) Solid sphere",
          "D) All reach simultaneously"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Rolling acceleration a = g sinθ / (1 + I/(MR²)). Solid sphere has the smallest I/(MR²) = 2/5 = 0.4 (vs cylinder 0.5, ring 1.0), giving the largest acceleration.",
        "stepMarking": [
          {
            "step": "Smallest I/(MR²) = 2/5 -> max acceleration -> Solid sphere first",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Smaller the k²/R² factor, faster the object rolls down.",
        "commonPitfall": "Assuming all masses reach together like frictionless sliding."
      },
      {
        "id": "model-c11-phy-2023-dav-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Gravitation: Orbital vs Escape Velocity",
        "questionText": "The escape velocity from Earth's surface is vₑ ≈ 11.2 km/s. What would be the escape velocity from a planet having twice the mass and twice the radius of Earth?",
        "options": [
          "A) 5.6 km/s",
          "B) 11.2 km/s",
          "C) 22.4 km/s",
          "D) 11.2√2 km/s"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₑ = √(2GM/R). When both M and R double, M/R stays unchanged, so vₑ remains 11.2 km/s.",
        "stepMarking": [
          {
            "step": "vₑ ∝ √(M/R) remains unchanged = 11.2 km/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write the proportionality vₑ ∝ √(M/R) before substituting ratios.",
        "commonPitfall": "Forgetting the square root or thinking radius doubles vₑ."
      },
      {
        "id": "model-c11-phy-2023-dav-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Solids: Breaking Stress",
        "questionText": "A steel wire of length L and radius r can sustain a maximum load W without breaking. If the wire is cut into two equal halves, the maximum load each half can sustain is:",
        "options": [
          "A) W / 2",
          "B) W",
          "C) 2W",
          "D) W / 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Breaking load = Breaking Stress × Cross-sectional Area (πr²). Cutting length does not change area or material breaking stress, so max load remains W.",
        "stepMarking": [
          {
            "step": "Breaking load depends on Area & Material, independent of length",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Young's modulus and breaking stress are intensive material properties.",
        "commonPitfall": "Thinking halving length doubles or halves breaking force."
      },
      {
        "id": "model-c11-phy-2023-dav-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Fluids: Terminal Velocity",
        "questionText": "According to Stokes' law, the terminal velocity vₜ of a small sphere falling through a viscous fluid is proportional to its radius r as:",
        "options": [
          "A) r",
          "B) r²",
          "C) 1/r",
          "D) 1/r²"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₜ = (2r²(ρ - σ)g) / (9η) => vₜ ∝ r².",
        "stepMarking": [
          {
            "step": "State Stokes terminal velocity vₜ ∝ r²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Eight tiny droplets merging into one big drop (R = 2r) increases terminal speed 4 times.",
        "commonPitfall": "Marking proportional to r."
      },
      {
        "id": "model-c11-phy-2023-dav-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Thermal Properties of Matter: Newton's Law of Cooling / Wein's Law",
        "questionText": "Wien's displacement law relates the wavelength λₘ of maximum spectral emission from a blackbody to its absolute temperature T as:",
        "options": [
          "A) λₘ / T = constant",
          "B) λₘ T = constant",
          "C) λₘ T² = constant",
          "D) λₘ T⁴ = constant"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Wien's law states λₘ T = b (Wien's constant ≈ 2.9 × 10⁻³ m·K). Hotter stars emit shorter wavelengths (blue).",
        "stepMarking": [
          {
            "step": "Identify λₘ T = constant",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Do not mix Wien's law (λₘ T = b) with Stefan-Boltzmann law (E ∝ T⁴).",
        "commonPitfall": "Selecting T⁴."
      },
      {
        "id": "model-c11-phy-2023-dav-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Molar Specific Heat Ratio γ",
        "questionText": "In an adiabatic expansion of an ideal gas, which quantity remains strictly constant?",
        "options": [
          "A) Temperature T",
          "B) Pressure P",
          "C) PV^γ",
          "D) Internal energy U"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. For a quasi-static adiabatic process (δQ = 0), PV^γ = constant, where γ = Cp/Cv.",
        "stepMarking": [
          {
            "step": "Identify PV^γ = constant for adiabatic process",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal: PV = const; Adiabatic: PV^γ = const.",
        "commonPitfall": "Thinking temperature remains constant in adiabatic expansion (T actually drops!)."
      },
      {
        "id": "model-c11-phy-2023-dav-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Kinetic Theory of Gases: Degrees of Freedom & Equipartition",
        "questionText": "At room temperature, the average translational kinetic energy per molecule of an ideal gas depends only on:",
        "options": [
          "A) Molar mass of gas",
          "B) Absolute temperature T",
          "C) Volume of container",
          "D) Pressure alone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Mean translational KE per molecule = (3/2) k_B T, which depends solely on absolute temperature T.",
        "stepMarking": [
          {
            "step": "KE = (3/2) k_B T depends only on T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "All ideal gases at the same temperature have the SAME average translational KE per molecule, regardless of mass.",
        "commonPitfall": "Thinking heavier molecules have higher kinetic energy."
      },
      {
        "id": "model-c11-phy-2023-dav-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Oscillations: Simple Pendulum Time Period",
        "questionText": "A simple pendulum of time period T is taken inside an artificial satellite orbiting the Earth. Its time period inside the satellite will be:",
        "options": [
          "A) T",
          "B) T / 2",
          "C) Zero",
          "D) Infinite (does not oscillate)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Inside an orbiting satellite, effective gravity g_eff = 0 (weightlessness). Since T = 2π√(L/g_eff), T → ∞.",
        "stepMarking": [
          {
            "step": "g_eff = 0 in satellite -> T = ∞",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A spring-mass system T = 2π√(m/k) is unaffected by g and oscillates normally in space!",
        "commonPitfall": "Writing T = 0 when g_eff = 0."
      },
      {
        "id": "model-c11-phy-2023-dav-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Waves: Doppler / Standing Waves in Organ Pipe",
        "questionText": "In a closed organ pipe (closed at one end, open at the other), which harmonics are produced?",
        "options": [
          "A) Only even harmonics",
          "B) Only odd harmonics (1st, 3rd, 5th...)",
          "C) All harmonics (even and odd)",
          "D) Only 2nd harmonic"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. With a node at the closed end and antinode at the open end, frequencies are νₙ = (2n - 1)v / (4L) -> odd harmonics only (1 : 3 : 5).",
        "stepMarking": [
          {
            "step": "Odd harmonics only (1:3:5)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Open organ pipe produces ALL harmonics (1:2:3); closed organ pipe produces ONLY ODD harmonics (1:3:5).",
        "commonPitfall": "Confusing open pipe with closed pipe."
      },
      {
        "id": "model-c11-phy-2023-dav-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Dimensional Analysis",
        "questionText": "Which of the following pairs of physical quantities does NOT have identical dimensional formulas?",
        "options": [
          "A) Work and Torque",
          "B) Angular momentum and Planck's constant",
          "C) Tension and Surface Tension",
          "D) Impulse and Linear Momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Tension is a force [M L T⁻²], whereas Surface Tension is force per unit length [M T⁻²]. All other pairs share identical dimensions.",
        "stepMarking": [
          {
            "step": "Contrast Tension [MLT⁻²] vs Surface Tension [MT⁻²]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check dimensions of every pair carefully: Work/Torque = [ML²T⁻²], h/L = [ML²T⁻¹], Impulse/Momentum = [MLT⁻¹].",
        "commonPitfall": "Assuming Tension and Surface Tension both have dimensions of Force."
      },
      {
        "id": "model-c11-phy-2023-dav-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Ballet Dancer Conservation of L",
        "questionText": "Assertion (A): An ice skater spins faster when she folds her arms close to her body.\nReason (R): Folding her arms decreases her moment of inertia I, so angular speed ω increases to conserve angular momentum L = Iω.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. With zero external torque, L = Iω = constant => reducing I automatically increases ω.",
        "stepMarking": [
          {
            "step": "Option (A) applying conservation of angular momentum",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention zero external torque explicitly when explaining L = Iω.",
        "commonPitfall": "Thinking rotational kinetic energy stays constant (it actually increases via internal muscle work!)."
      },
      {
        "id": "model-c11-phy-2023-dav-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Isothermal Elasticity & Specific Heat",
        "questionText": "Assertion (A): Specific heat of a gas in an isothermal process is infinity.\nReason (R): In an isothermal process, heat supplied causes no change in temperature (ΔT = 0), so C = Q/(mΔT) → ∞.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For isothermal ΔT = 0 with finite heat exchange Q, C = Q/(mΔT) = ∞; for adiabatic Q = 0 with ΔT ≠ 0, C = 0.",
        "stepMarking": [
          {
            "step": "Option (A) using C = Q/(mΔT)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal C = ∞; Adiabatic C = 0.",
        "commonPitfall": "Mixing up isothermal (C=∞) with adiabatic (C=0)."
      },
      {
        "id": "model-c11-phy-2023-dav-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Fluids: Bernoulli Principle & Pressure",
        "questionText": "Assertion (A): When a fast train passes a stationary person standing close to the track, the person tends to be pulled towards the train.\nReason (R): Fast-moving air between the train and person creates a region of higher pressure compared to outside.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Bernoulli's theorem, fast-moving air creates LOWER pressure (not higher pressure) between train and person, so outside higher pressure pushes the person inward.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false (higher velocity -> lower pressure)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read Reason carefully: high speed => LOW static pressure.",
        "commonPitfall": "Assuming fast air creates high static pressure."
      },
      {
        "id": "model-c11-phy-2023-dav-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Precision vs Accuracy",
        "questionText": "Assertion (A): A physical equation that is dimensionally correct may still be physically incorrect.\nReason (R): Dimensional analysis cannot determine dimensionless numerical constants like 1/2 or 2π.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For example, K = mv² is dimensionally identical to K = ½mv² yet physically wrong because dimensions do not capture pure numerical constants.",
        "stepMarking": [
          {
            "step": "Option (A) citing dimensionless constant limitation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dimensionally inconsistent => definitely wrong; Dimensionally consistent => may or may not be right.",
        "commonPitfall": "Thinking dimensional validity proves complete correctness."
      },
      {
        "id": "model-c11-phy-2023-dav-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Properties of Fluids: Excess Pressure Inside Soap Bubble",
        "questionText": "Why is the excess pressure inside a soap bubble twice that inside an air bubble of the same radius in a liquid? Write both formulas.",
        "modelAnswer": "An air bubble inside a liquid has only ONE free spherical surface interface (liquid-air), so ΔP_air = 2S / R.\nA soap bubble in air has TWO free surfaces (inner and outer air-soap interfaces), doubling surface energy change, so ΔP_soap = 4S / R.",
        "stepMarking": [
          {
            "step": "Air bubble = 1 free surface (2S/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Soap bubble = 2 free surfaces (4S/R)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Explicitly state \"two free surfaces\" for soap bubble.",
        "commonPitfall": "Saying soap has double surface tension instead of two interfaces."
      },
      {
        "id": "model-c11-phy-2023-dav-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Units & Measurements: Van der Waals Dimensions",
        "questionText": "In the van der Waals equation (P + a/V²)(V - b) = RT, find the dimensional formulas of constants \"a\" and \"b\", where P is pressure and V is volume.",
        "modelAnswer": "By principle of homogeneity of dimensions:\n1. [a / V²] = [P] => [a] = [P][V²] = [M L⁻¹ T⁻²] × [L³]² = [M L⁵ T⁻²].\n2. [b] = [V] = [L³].",
        "stepMarking": [
          {
            "step": "Apply principle of homogeneity to get [a] = [M L⁵ T⁻²]",
            "marks": "1 Mark"
          },
          {
            "step": "Find [b] = [L³]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only quantities with identical dimensions can be added or subtracted.",
        "commonPitfall": "Taking V as velocity [LT⁻¹] instead of volume [L³]."
      },
      {
        "id": "model-c11-phy-2023-dav-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Motion in a Plane: Angle Between Sum & Difference of Vectors",
        "questionText": "Two vectors A and B satisfy |A + B| = |A - B|. Find the angle between A and B.",
        "modelAnswer": "Squaring both sides:\n|A + B|² = |A - B|²\nA² + B² + 2AB cosθ = A² + B² - 2AB cosθ\n4AB cosθ = 0 => cosθ = 0 (since A, B ≠ 0) => θ = 90°.",
        "stepMarking": [
          {
            "step": "Expand magnitudes squared",
            "marks": "1 Mark"
          },
          {
            "step": "Solve 4AB cosθ = 0 -> θ = 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Geometrically, diagonals of a parallelogram are equal only when it is a rectangle (θ = 90°).",
        "commonPitfall": "Forgetting to state A ≠ 0, B ≠ 0."
      },
      {
        "id": "model-c11-phy-2023-dav-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Laws of Motion: Recoil Velocity of Gun",
        "questionText": "A bullet of mass 20 g is fired horizontally with velocity 150 m/s from a pistol of mass 2 kg. Calculate the recoil velocity of the pistol.",
        "modelAnswer": "By conservation of linear momentum (initial momentum = 0):\nm₁v₁ + m₂v₂ = 0\n(0.02 kg)(150 m/s) + (2 kg) v₂ = 0\n3 + 2v₂ = 0 => v₂ = -1.5 m/s.\nRecoil speed is 1.5 m/s opposite to bullet direction.",
        "stepMarking": [
          {
            "step": "Convert 20 g = 0.02 kg & apply m₁v₁ + m₂v₂ = 0",
            "marks": "1 Mark"
          },
          {
            "step": "v₂ = -1.5 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always convert mass into SI unit kg!",
        "commonPitfall": "Using m₁ = 20 g alongside m₂ = 2 kg without conversion."
      },
      {
        "id": "model-c11-phy-2023-dav-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Gravitation: Variation of g with Depth",
        "questionText": "At what depth below the surface of Earth does the acceleration due to gravity become 25% of its value on the surface? (Take R = 6400 km)",
        "modelAnswer": "Variation with depth: g_d = g (1 - d/R).\nGiven g_d = 0.25 g = g/4 => 1 - d/R = 1/4 => d/R = 3/4.\nd = (3/4) × 6400 km = 4800 km.",
        "stepMarking": [
          {
            "step": "Formula g_d = g(1 - d/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute d = 4800 km",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: \"becomes 25%\" vs \"decreases by 25%\"!",
        "commonPitfall": "Using height formula g/(1 + h/R)² for depth."
      },
      {
        "id": "model-c11-phy-2023-dav-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Motion in a Straight Line: Calculus Derivation of v² - u² = 2as",
        "questionText": "Using integration (calculus method), derive all three kinematic equations of motion for constant acceleration a:\n(i) v = u + at\n(ii) s = ut + ½at²\n(iii) v² - u² = 2as",
        "modelAnswer": "(i) a = dv/dt => dv = a dt. Integrating from u to v and 0 to t: ∫dv = a∫dt => v - u = at => v = u + at.\n(ii) v = ds/dt => ds = (u + at)dt. Integrating s from 0 to s and t from 0 to t: s = ut + ½at².\n(iii) a = (dv/ds)(ds/dt) = v dv/ds => v dv = a ds. Integrating v from u to v and s from 0 to s: [v²/2] = a[s] => v² - u² = 2as.",
        "stepMarking": [
          {
            "step": "(i) Derive v = u + at via integration",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Derive s = ut + ½at²",
            "marks": "1 Mark"
          },
          {
            "step": "(iii) Use chain rule a = v dv/ds -> v² - u² = 2as",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify lower and upper limits of integration clearly.",
        "commonPitfall": "Using indefinite integration without finding constants."
      },
      {
        "id": "model-c11-phy-2023-dav-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Work, Energy & Power: Conservation in Vertical Circle",
        "questionText": "A particle of mass m tied to a string of length L is rotated in a vertical circle. Derive expressions for the minimum velocity at:\n(a) Highest point\n(b) Lowest point\njust to complete the vertical loop.",
        "modelAnswer": "(a) At highest point H, gravity alone supplies centripetal force when T_top = 0:\nmg = m v_H² / L => v_H = √(gL).\n(b) By conservation of mechanical energy between lowest point L_0 and highest point H (height difference = 2L):\n½ m v_L² = ½ m v_H² + mg(2L) = ½ m (gL) + 2mgL = (5/2) mgL\n=> v_L = √(5gL).",
        "stepMarking": [
          {
            "step": "Set T_top = 0 to find v_H = √(gL)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Apply mechanical energy conservation over Δh = 2L -> v_L = √(5gL)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Tension difference between bottom and top is always T_L - T_H = 6mg!",
        "commonPitfall": "Taking height difference between top and bottom as L instead of 2L."
      },
      {
        "id": "model-c11-phy-2023-dav-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Rotational Motion: Perpendicular & Parallel Axes / Conservation of L",
        "questionText": "Define torque and angular momentum. Derive the relation τ = dL/dt for a particle and show how angular momentum is conserved when net external torque is zero.",
        "modelAnswer": "Torque τ = r × F and Angular Momentum L = r × p.\nDifferentiating L w.r.t. time t:\ndL/dt = d/dt(r × p) = (dr/dt × p) + (r × dp/dt).\nSince dr/dt = v and p = mv, v × (mv) = 0.\nAnd by Newton's second law, dp/dt = F_ext => dL/dt = r × F_ext = τ_ext.\nIf net external torque τ_ext = 0, then dL/dt = 0 => L = constant (Law of Conservation of Angular Momentum).",
        "stepMarking": [
          {
            "step": "Definitions τ = r × F and L = r × p",
            "marks": "1 Mark"
          },
          {
            "step": "Product rule differentiation showing v × p = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "τ = 0 => L = constant",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Maintain vector cross-product order r × p (never write p × r!).",
        "commonPitfall": "Dropping vector cross-product notation."
      },
      {
        "id": "model-c11-phy-2023-dav-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Work Done in Isothermal & Adiabatic Processes",
        "questionText": "Derive an expression for the work done during a quasi-static isothermal expansion of n moles of an ideal gas from volume V₁ to V₂ at constant temperature T.",
        "modelAnswer": "Small work done dW = P dV. For n moles of an ideal gas, PV = nRT => P = nRT / V.\nTotal work W = ∫_{V₁}^{V₂} (nRT / V) dV = nRT ∫_{V₁}^{V₂} (1/V) dV\n= nRT [ln V]_{V₁}^{V₂} = nRT ln(V₂ / V₁) = 2.303 nRT log₁₀(V₂ / V₁).",
        "stepMarking": [
          {
            "step": "Set up dW = P dV with P = nRT/V",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate 1/V between V₁ and V₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert ln to log₁₀: 2.303 nRT log₁₀(V₂/V₁)",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "In terms of pressures (P₁V₁ = P₂V₂), W = 2.303 nRT log₁₀(P₁/P₂).",
        "commonPitfall": "Writing log(V₁/V₂) instead of log(V₂/V₁)."
      },
      {
        "id": "model-c11-phy-2023-dav-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Thermal Properties: Terminal & Capillary / Excess Pressure or Stress-Strain Curve",
        "questionText": "Draw a typical stress-strain curve for a ductile metallic wire and clearly label: (i) Proportional limit, (ii) Yield point (elastic limit), (iii) Ultimate tensile strength, and (iv) Fracture point.",
        "modelAnswer": "• O to A (Proportional Limit): Hooke's law holds strictly (stress ∝ strain; linear graph; slope = Young's modulus Y).\n• A to B (Elastic Limit / Yield Point): Body returns to original dimensions when load removed; B is yield point beyond which plastic deformation begins.\n• D (Ultimate Tensile Strength): Maximum stress the material can withstand before necking starts.\n• E (Fracture Point): Wire breaks even under slightly reduced stress beyond D.",
        "stepMarking": [
          {
            "step": "Neat stress vs strain plot with all 4 points marked",
            "marks": "1.5 Marks"
          },
          {
            "step": "Physical meaning of Proportional limit, Yield, UTS & Fracture",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Recall Stress is plotted on Y-axis and Strain on X-axis (so slope = Y).",
        "commonPitfall": "Placing Strain on Y-axis instead of X-axis."
      },
      {
        "id": "model-c11-phy-2023-dav-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Waves: Newton Formula & Laplace Correction for Speed of Sound",
        "questionText": "Why did Newton's formula v = √(P/ρ) give an incorrect value for the speed of sound in air? Explain Laplace's correction and compute the corrected formula.",
        "modelAnswer": "Newton assumed sound propagation in air is an ISOTHERMAL process (B_iso = P), giving v ≈ 280 m/s at STP vs experimental 331 m/s (15% error).\nLaplace showed that compressions and rarefactions occur too rapidly in air (a poor conductor of heat) for heat exchange to happen, making the process ADIABATIC.\nThus adiabatic bulk modulus B_ad = γP => v = √(γP/ρ). For air (γ = 1.4), v = √(1.4) × 280 ≈ 331.3 m/s, matching experiment.",
        "stepMarking": [
          {
            "step": "Newton's isothermal assumption -> 280 m/s discrepancy",
            "marks": "1 Mark"
          },
          {
            "step": "Laplace's adiabatic reasoning (rapid + poor conductor)",
            "marks": "1 Mark"
          },
          {
            "step": "Corrected formula v = √(γP/ρ) ≈ 331.3 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight γ = Cp/Cv = 1.4 for diatomic gases like N₂/O₂ in air.",
        "commonPitfall": "Confusing isothermal vs adiabatic bulk modulus."
      },
      {
        "id": "model-c11-phy-2023-dav-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Kinetic Theory: Pressure of an Ideal Gas & RMS Speed",
        "questionText": "Write the kinetic theory formula for pressure P exerted by an ideal gas and use it to calculate the RMS speed of nitrogen molecules (M = 28 g/mol) at 27°C (R = 8.314 J/mol·K).",
        "modelAnswer": "Pressure P = (1/3) ρ v_rms² = (1/3) (nM/V) v_rms² => v_rms = √(3RT / M).\nGiven T = 27 + 273 = 300 K, M = 28 × 10⁻³ kg/mol.\nv_rms = √(3 × 8.314 × 300 / 0.028) = √(7482.6 / 0.028) = √267235.7 ≈ 517 m/s.",
        "stepMarking": [
          {
            "step": "Formula P = (1/3)ρv_rms² & v_rms = √(3RT/M)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert T = 300 K and M = 0.028 kg/mol",
            "marks": "0.5 Mark"
          },
          {
            "step": "Final RMS speed ≈ 517 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert BOTH Temperature (to Kelvin) and Molar Mass (to kg/mol)!",
        "commonPitfall": "Substituting M = 28 instead of 0.028 kg/mol."
      },
      {
        "id": "model-c11-phy-2023-dav-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Satellites & Kepler Laws (Gravitation)",
        "questionText": "Read the passage and answer:\nCommunication and Earth-observation satellites orbit at fixed altitudes balanced between gravitational attraction and centripetal requirement. A satellite of mass 500 kg orbits Earth at height h = R (where Earth radius R = 6.4 × 10⁶ m, g = 10 m/s²).\n\n(a) State Kepler's Third Law (Law of Periods). (1M)\n(b) Write the formula for orbital speed of a satellite at height h above Earth's surface. (1M)\n(c) Calculate the orbital speed of the given satellite at h = R. (2M)",
        "modelAnswer": "(a) The square of the time period T of revolution of a planet/satellite is directly proportional to the cube of the semi-major axis r of its elliptical/circular orbit (T² ∝ r³).\n(b) v_o = √(GM / (R + h)) = R √(g / (R + h)).\n(c) At h = R, R + h = 2R => v_o = √(gR / 2) = √(10 × 6.4 × 10⁶ / 2) = √(3.2 × 10⁷) = 4000√2 ≈ 5.66 × 10³ m/s (5.66 km/s).",
        "stepMarking": [
          {
            "step": "(a) T² ∝ r³ statement",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v_o = √(GM/(R+h))",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Substitute r = 2R -> 5.66 km/s",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Notice orbital speed is independent of satellite mass (500 kg is extra data)!",
        "commonPitfall": "Using r = R instead of R + h = 2R."
      },
      {
        "id": "model-c11-phy-2023-dav-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Banking of Curved Roads (Laws of Motion)",
        "questionText": "Read the passage and answer:\nTo reduce wear and tear on car tyres and avoid skidding at high speeds, the outer edge of curved highways is raised slightly above the inner edge by an angle θ (banking of roads).\n\n(a) On a flat circular road of radius R and coefficient of friction μ, write the expression for maximum safe speed. (1M)\n(b) Derive or state the optimum speed on a frictionless banked road of angle θ and radius R (zero wear & tear). (1M)\n(c) A circular track of radius 300 m is banked at angle θ such that tan θ = 0.15. Find the optimum speed (g = 10 m/s²). Also state the role of centripetal force direction. (2M)",
        "modelAnswer": "(a) Flat road: v_max = √(μ R g).\n(b) Optimum speed (zero friction needed): v₀ = √(R g tan θ).\n(c) v₀ = √(300 × 10 × 0.15) = √450 ≈ 21.21 m/s. Horizontal component of Normal reaction (N sinθ) provides the inward centripetal force towards the centre of the circular track.",
        "stepMarking": [
          {
            "step": "(a) √(μRg)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) √(Rg tanθ)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) v₀ = √450 ≈ 21.21 m/s + N sinθ explanation",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Optimum speed v₀ requires ZERO friction because N sinθ alone balances mv²/R!",
        "commonPitfall": "Confusing tan θ with sin θ in v₀ formula."
      },
      {
        "id": "model-c11-phy-2023-dav-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Fluids: Bernoulli's Theorem Statement, Proof & Torricelli Speed",
        "questionText": "(a) State Bernoulli's principle and derive the equation P + ½ρv² + ρgh = constant for a steady, incompressible, non-viscous flow.\n(b) Mention two practical applications.\n(c) Water flows out of a small hole at the bottom of a wide tank filled to height 5 m. Find the speed of efflux (g = 10 m/s²).",
        "modelAnswer": "(a) For streamline flow of an ideal fluid, sum of pressure energy, kinetic energy per unit volume, and gravitational potential energy per unit volume remains constant.\nDerivation via Work-Energy theorem on fluid element of mass Δm = ρΔV passing from (A₁, v₁, P₁, h₁) to (A₂, v₂, P₂, h₂): Net work (P₁ - P₂)ΔV = ΔK + ΔU = ½ρΔV(v₂² - v₁²) + ρΔVg(h₂ - h₁). Dividing by ΔV gives P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂.\n(b) Applications: Atomiser/sprayer, aerofoil lift on aircraft wings, Venturimeter.\n(c) Speed of efflux v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.",
        "stepMarking": [
          {
            "step": "(a) Statement + Work-Energy proof",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Two applications",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Torricelli speed v = 10 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the four ideal-fluid assumptions: steady, incompressible, non-viscous, irrotational.",
        "commonPitfall": "Forgetting potential energy term ρgh in derivation."
      },
      {
        "id": "model-c11-phy-2023-dav-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Oscillations: Simple Harmonic Motion Energy & Simple Pendulum Proof",
        "questionText": "(a) Derive expressions for kinetic energy, potential energy, and total mechanical energy of a particle executing SHM of amplitude A and mass m. Plot them vs displacement x.\n(b) Show that oscillations of a simple pendulum for small angular displacements are simple harmonic, and derive T = 2π√(L/g).",
        "modelAnswer": "(a) Displacement x = A sin(ωt), velocity v = ω√(A² - x²).\nKE = ½ m ω² (A² - x²); PE = ½ m ω² x².\nTotal Energy E = KE + PE = ½ m ω² A² = ½ k A² (constant, independent of x). Graph: PE is upward parabola, KE is inverted parabola, Total E is horizontal line.\n(b) Restoring torque τ = -mgL sinθ ≈ -mgLθ (for small θ). Using τ = Iα = (mL²) d²θ/dt² => d²θ/dt² = -(g/L)θ = -ω²θ.\nHence motion is SHM with ω = √(g/L) => T = 2π/ω = 2π√(L/g).",
        "stepMarking": [
          {
            "step": "(a) KE, PE, Total E expressions + parabolic graph",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Restoring torque & small-angle sinθ≈θ -> T = 2π√(L/g)",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Explicitly state the small-angle approximation sin θ ≈ θ (in radians).",
        "commonPitfall": "Forgetting to write why total energy graph is a straight horizontal line."
      },
      {
        "id": "model-c11-phy-2023-dav-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Work, Energy & Power: Elastic 1D Head-on Collision",
        "questionText": "(a) Derive expressions for final velocities v₁ and v₂ after an elastic one-dimensional collision between two bodies of masses m₁ and m₂ moving with initial velocities u₁ and u₂.\n(b) Discuss special cases: (i) m₁ = m₂, and (ii) a light body hitting a massive stationary wall (m₁ ≪ m₂, u₂ = 0).",
        "modelAnswer": "(a) Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ => m₁(u₁ - v₁) = m₂(v₂ - u₂) ...(1)\nConservation of KE: ½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂² => relative velocity u₁ - u₂ = v₂ - v₁ => v₂ = u₁ - u₂ + v₁ ...(2)\nSolving (1) & (2):\nv₁ = [(m₁ - m₂)/(m₁ + m₂)]u₁ + [2m₂/(m₁ + m₂)]u₂\nv₂ = [2m₁/(m₁ + m₂)]u₁ + [(m₂ - m₁)/(m₁ + m₂)]u₂.\n(b) (i) If m₁ = m₂: v₁ = u₂ and v₂ = u₁ (velocities interchange!).\n(ii) If m₁ ≪ m₂, u₂ = 0: v₁ ≈ -u₁ (rebounds at same speed), v₂ ≈ 0.",
        "stepMarking": [
          {
            "step": "Momentum + KE conservation -> relative speed reversal",
            "marks": "1.5 Marks"
          },
          {
            "step": "Expressions for v₁ and v₂",
            "marks": "2 Marks"
          },
          {
            "step": "Both special cases clearly proved",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Using u₁ - u₂ = v₂ - v₁ makes solving simultaneous equations very fast!",
        "commonPitfall": "Sign mistakes in (m₁ - m₂) vs (m₂ - m₁)."
      }
    ]
  },
  {
    "id": "model-c11-phy-2024-exemplar",
    "title": "NCERT Exemplar & JEE Foundation Class 11 Physics Mock (2024)",
    "subject": "Physics",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "EXEMPLAR/C11/PHY-04",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 Very Short Answer questions of 2 marks each.",
      "Section C: 7 Short Answer questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c11-phy-2024-exemplar-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Moment of Inertia of Disc vs Ring",
        "questionText": "A solid sphere, a solid cylinder, and a circular ring of identical mass M and radius R roll down an inclined plane without slipping. Which reaches the bottom first?",
        "options": [
          "A) Circular ring",
          "B) Solid cylinder",
          "C) Solid sphere",
          "D) All reach simultaneously"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Rolling acceleration a = g sinθ / (1 + I/(MR²)). Solid sphere has the smallest I/(MR²) = 2/5 = 0.4 (vs cylinder 0.5, ring 1.0), giving the largest acceleration.",
        "stepMarking": [
          {
            "step": "Smallest I/(MR²) = 2/5 -> max acceleration -> Solid sphere first",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Smaller the k²/R² factor, faster the object rolls down.",
        "commonPitfall": "Assuming all masses reach together like frictionless sliding."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Gravitation: Orbital vs Escape Velocity",
        "questionText": "The escape velocity from Earth's surface is vₑ ≈ 11.2 km/s. What would be the escape velocity from a planet having twice the mass and twice the radius of Earth?",
        "options": [
          "A) 5.6 km/s",
          "B) 11.2 km/s",
          "C) 22.4 km/s",
          "D) 11.2√2 km/s"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₑ = √(2GM/R). When both M and R double, M/R stays unchanged, so vₑ remains 11.2 km/s.",
        "stepMarking": [
          {
            "step": "vₑ ∝ √(M/R) remains unchanged = 11.2 km/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write the proportionality vₑ ∝ √(M/R) before substituting ratios.",
        "commonPitfall": "Forgetting the square root or thinking radius doubles vₑ."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Solids: Breaking Stress",
        "questionText": "A steel wire of length L and radius r can sustain a maximum load W without breaking. If the wire is cut into two equal halves, the maximum load each half can sustain is:",
        "options": [
          "A) W / 2",
          "B) W",
          "C) 2W",
          "D) W / 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Breaking load = Breaking Stress × Cross-sectional Area (πr²). Cutting length does not change area or material breaking stress, so max load remains W.",
        "stepMarking": [
          {
            "step": "Breaking load depends on Area & Material, independent of length",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Young's modulus and breaking stress are intensive material properties.",
        "commonPitfall": "Thinking halving length doubles or halves breaking force."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Fluids: Terminal Velocity",
        "questionText": "According to Stokes' law, the terminal velocity vₜ of a small sphere falling through a viscous fluid is proportional to its radius r as:",
        "options": [
          "A) r",
          "B) r²",
          "C) 1/r",
          "D) 1/r²"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₜ = (2r²(ρ - σ)g) / (9η) => vₜ ∝ r².",
        "stepMarking": [
          {
            "step": "State Stokes terminal velocity vₜ ∝ r²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Eight tiny droplets merging into one big drop (R = 2r) increases terminal speed 4 times.",
        "commonPitfall": "Marking proportional to r."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Thermal Properties of Matter: Newton's Law of Cooling / Wein's Law",
        "questionText": "Wien's displacement law relates the wavelength λₘ of maximum spectral emission from a blackbody to its absolute temperature T as:",
        "options": [
          "A) λₘ / T = constant",
          "B) λₘ T = constant",
          "C) λₘ T² = constant",
          "D) λₘ T⁴ = constant"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Wien's law states λₘ T = b (Wien's constant ≈ 2.9 × 10⁻³ m·K). Hotter stars emit shorter wavelengths (blue).",
        "stepMarking": [
          {
            "step": "Identify λₘ T = constant",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Do not mix Wien's law (λₘ T = b) with Stefan-Boltzmann law (E ∝ T⁴).",
        "commonPitfall": "Selecting T⁴."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Molar Specific Heat Ratio γ",
        "questionText": "In an adiabatic expansion of an ideal gas, which quantity remains strictly constant?",
        "options": [
          "A) Temperature T",
          "B) Pressure P",
          "C) PV^γ",
          "D) Internal energy U"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. For a quasi-static adiabatic process (δQ = 0), PV^γ = constant, where γ = Cp/Cv.",
        "stepMarking": [
          {
            "step": "Identify PV^γ = constant for adiabatic process",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal: PV = const; Adiabatic: PV^γ = const.",
        "commonPitfall": "Thinking temperature remains constant in adiabatic expansion (T actually drops!)."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Kinetic Theory of Gases: Degrees of Freedom & Equipartition",
        "questionText": "At room temperature, the average translational kinetic energy per molecule of an ideal gas depends only on:",
        "options": [
          "A) Molar mass of gas",
          "B) Absolute temperature T",
          "C) Volume of container",
          "D) Pressure alone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Mean translational KE per molecule = (3/2) k_B T, which depends solely on absolute temperature T.",
        "stepMarking": [
          {
            "step": "KE = (3/2) k_B T depends only on T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "All ideal gases at the same temperature have the SAME average translational KE per molecule, regardless of mass.",
        "commonPitfall": "Thinking heavier molecules have higher kinetic energy."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Oscillations: Simple Pendulum Time Period",
        "questionText": "A simple pendulum of time period T is taken inside an artificial satellite orbiting the Earth. Its time period inside the satellite will be:",
        "options": [
          "A) T",
          "B) T / 2",
          "C) Zero",
          "D) Infinite (does not oscillate)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Inside an orbiting satellite, effective gravity g_eff = 0 (weightlessness). Since T = 2π√(L/g_eff), T → ∞.",
        "stepMarking": [
          {
            "step": "g_eff = 0 in satellite -> T = ∞",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A spring-mass system T = 2π√(m/k) is unaffected by g and oscillates normally in space!",
        "commonPitfall": "Writing T = 0 when g_eff = 0."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Waves: Doppler / Standing Waves in Organ Pipe",
        "questionText": "In a closed organ pipe (closed at one end, open at the other), which harmonics are produced?",
        "options": [
          "A) Only even harmonics",
          "B) Only odd harmonics (1st, 3rd, 5th...)",
          "C) All harmonics (even and odd)",
          "D) Only 2nd harmonic"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. With a node at the closed end and antinode at the open end, frequencies are νₙ = (2n - 1)v / (4L) -> odd harmonics only (1 : 3 : 5).",
        "stepMarking": [
          {
            "step": "Odd harmonics only (1:3:5)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Open organ pipe produces ALL harmonics (1:2:3); closed organ pipe produces ONLY ODD harmonics (1:3:5).",
        "commonPitfall": "Confusing open pipe with closed pipe."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Dimensional Analysis",
        "questionText": "Which of the following pairs of physical quantities does NOT have identical dimensional formulas?",
        "options": [
          "A) Work and Torque",
          "B) Angular momentum and Planck's constant",
          "C) Tension and Surface Tension",
          "D) Impulse and Linear Momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Tension is a force [M L T⁻²], whereas Surface Tension is force per unit length [M T⁻²]. All other pairs share identical dimensions.",
        "stepMarking": [
          {
            "step": "Contrast Tension [MLT⁻²] vs Surface Tension [MT⁻²]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check dimensions of every pair carefully: Work/Torque = [ML²T⁻²], h/L = [ML²T⁻¹], Impulse/Momentum = [MLT⁻¹].",
        "commonPitfall": "Assuming Tension and Surface Tension both have dimensions of Force."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Significant Figures",
        "questionText": "The number of significant figures in 0.002050 × 10⁴ is:",
        "options": [
          "A) 3",
          "B) 4",
          "C) 6",
          "D) 7"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Leading zeros to the left of the first non-zero digit (0.00) are not significant; trapped zeros and trailing zeros after decimal (2050) are significant -> 4 significant figures. Powers of 10 do not alter significant figures.",
        "stepMarking": [
          {
            "step": "Count digits 2, 0, 5, 0 -> 4 significant figures",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Trailing zero after a decimal point is ALWAYS significant.",
        "commonPitfall": "Dropping the final zero or counting leading zeros."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Straight Line: v-t Graph Area & Slope",
        "questionText": "A particle starts from rest with uniform acceleration a. The ratio of distances travelled in the 1st, 2nd, and 3rd seconds is:",
        "options": [
          "A) 1 : 2 : 3",
          "B) 1 : 4 : 9",
          "C) 1 : 3 : 5",
          "D) 1 : 1 : 1"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Galileo's law of odd numbers, Sₙ = u + (a/2)(2n - 1). With u = 0, S₁ : S₂ : S₃ = 1 : 3 : 5.",
        "stepMarking": [
          {
            "step": "Apply Sₙ ∝ (2n - 1) for u = 0 -> 1:3:5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish distance in \"n seconds\" (∝ n²) vs distance in \"nth second\" (∝ 2n-1).",
        "commonPitfall": "Marking 1:4:9 (total distance after n seconds)."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Isothermal Elasticity & Specific Heat",
        "questionText": "Assertion (A): Specific heat of a gas in an isothermal process is infinity.\nReason (R): In an isothermal process, heat supplied causes no change in temperature (ΔT = 0), so C = Q/(mΔT) → ∞.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For isothermal ΔT = 0 with finite heat exchange Q, C = Q/(mΔT) = ∞; for adiabatic Q = 0 with ΔT ≠ 0, C = 0.",
        "stepMarking": [
          {
            "step": "Option (A) using C = Q/(mΔT)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal C = ∞; Adiabatic C = 0.",
        "commonPitfall": "Mixing up isothermal (C=∞) with adiabatic (C=0)."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Fluids: Bernoulli Principle & Pressure",
        "questionText": "Assertion (A): When a fast train passes a stationary person standing close to the track, the person tends to be pulled towards the train.\nReason (R): Fast-moving air between the train and person creates a region of higher pressure compared to outside.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Bernoulli's theorem, fast-moving air creates LOWER pressure (not higher pressure) between train and person, so outside higher pressure pushes the person inward.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false (higher velocity -> lower pressure)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read Reason carefully: high speed => LOW static pressure.",
        "commonPitfall": "Assuming fast air creates high static pressure."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Precision vs Accuracy",
        "questionText": "Assertion (A): A physical equation that is dimensionally correct may still be physically incorrect.\nReason (R): Dimensional analysis cannot determine dimensionless numerical constants like 1/2 or 2π.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For example, K = mv² is dimensionally identical to K = ½mv² yet physically wrong because dimensions do not capture pure numerical constants.",
        "stepMarking": [
          {
            "step": "Option (A) citing dimensionless constant limitation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dimensionally inconsistent => definitely wrong; Dimensionally consistent => may or may not be right.",
        "commonPitfall": "Thinking dimensional validity proves complete correctness."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Action-Reaction Pairs",
        "questionText": "Assertion (A): Action and reaction forces in Newton's third law never cancel each other out.\nReason (R): Action and reaction act on two different bodies simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Only forces acting on the SAME body can cancel to yield zero net force; third-law pairs act on two distinct interacting bodies.",
        "stepMarking": [
          {
            "step": "Option (A) noting action-reaction act on different bodies",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check whether force pairs act on one body or two bodies.",
        "commonPitfall": "Marking (C) by confusing normal force + weight (both on same block!) with third-law pair."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Units & Measurements: Van der Waals Dimensions",
        "questionText": "In the van der Waals equation (P + a/V²)(V - b) = RT, find the dimensional formulas of constants \"a\" and \"b\", where P is pressure and V is volume.",
        "modelAnswer": "By principle of homogeneity of dimensions:\n1. [a / V²] = [P] => [a] = [P][V²] = [M L⁻¹ T⁻²] × [L³]² = [M L⁵ T⁻²].\n2. [b] = [V] = [L³].",
        "stepMarking": [
          {
            "step": "Apply principle of homogeneity to get [a] = [M L⁵ T⁻²]",
            "marks": "1 Mark"
          },
          {
            "step": "Find [b] = [L³]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Only quantities with identical dimensions can be added or subtracted.",
        "commonPitfall": "Taking V as velocity [LT⁻¹] instead of volume [L³]."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Motion in a Plane: Angle Between Sum & Difference of Vectors",
        "questionText": "Two vectors A and B satisfy |A + B| = |A - B|. Find the angle between A and B.",
        "modelAnswer": "Squaring both sides:\n|A + B|² = |A - B|²\nA² + B² + 2AB cosθ = A² + B² - 2AB cosθ\n4AB cosθ = 0 => cosθ = 0 (since A, B ≠ 0) => θ = 90°.",
        "stepMarking": [
          {
            "step": "Expand magnitudes squared",
            "marks": "1 Mark"
          },
          {
            "step": "Solve 4AB cosθ = 0 -> θ = 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Geometrically, diagonals of a parallelogram are equal only when it is a rectangle (θ = 90°).",
        "commonPitfall": "Forgetting to state A ≠ 0, B ≠ 0."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Laws of Motion: Recoil Velocity of Gun",
        "questionText": "A bullet of mass 20 g is fired horizontally with velocity 150 m/s from a pistol of mass 2 kg. Calculate the recoil velocity of the pistol.",
        "modelAnswer": "By conservation of linear momentum (initial momentum = 0):\nm₁v₁ + m₂v₂ = 0\n(0.02 kg)(150 m/s) + (2 kg) v₂ = 0\n3 + 2v₂ = 0 => v₂ = -1.5 m/s.\nRecoil speed is 1.5 m/s opposite to bullet direction.",
        "stepMarking": [
          {
            "step": "Convert 20 g = 0.02 kg & apply m₁v₁ + m₂v₂ = 0",
            "marks": "1 Mark"
          },
          {
            "step": "v₂ = -1.5 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always convert mass into SI unit kg!",
        "commonPitfall": "Using m₁ = 20 g alongside m₂ = 2 kg without conversion."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Gravitation: Variation of g with Depth",
        "questionText": "At what depth below the surface of Earth does the acceleration due to gravity become 25% of its value on the surface? (Take R = 6400 km)",
        "modelAnswer": "Variation with depth: g_d = g (1 - d/R).\nGiven g_d = 0.25 g = g/4 => 1 - d/R = 1/4 => d/R = 3/4.\nd = (3/4) × 6400 km = 4800 km.",
        "stepMarking": [
          {
            "step": "Formula g_d = g(1 - d/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute d = 4800 km",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: \"becomes 25%\" vs \"decreases by 25%\"!",
        "commonPitfall": "Using height formula g/(1 + h/R)² for depth."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Oscillations: Phase & Maximum Acceleration in SHM",
        "questionText": "The displacement of a particle executing SHM is given by x(t) = 0.04 sin(100t + π/3) metres. Find its amplitude, angular frequency, frequency, and maximum acceleration.",
        "modelAnswer": "Comparing with x = A sin(ωt + φ):\nAmplitude A = 0.04 m; Angular frequency ω = 100 rad/s.\nFrequency ν = ω / (2π) = 100 / (2π) = 50/π ≈ 15.92 Hz.\nMax acceleration a_max = ω² A = (100)² × 0.04 = 10000 × 0.04 = 400 m/s².",
        "stepMarking": [
          {
            "step": "A = 0.04 m, ω = 100 rad/s, ν = 50/π Hz",
            "marks": "1 Mark"
          },
          {
            "step": "a_max = ω²A = 400 m/s²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State SI units (m, rad/s, Hz, m/s²) for each quantity.",
        "commonPitfall": "Confusing ω with frequency ν = ω/2π."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Work, Energy & Power: Conservation in Vertical Circle",
        "questionText": "A particle of mass m tied to a string of length L is rotated in a vertical circle. Derive expressions for the minimum velocity at:\n(a) Highest point\n(b) Lowest point\njust to complete the vertical loop.",
        "modelAnswer": "(a) At highest point H, gravity alone supplies centripetal force when T_top = 0:\nmg = m v_H² / L => v_H = √(gL).\n(b) By conservation of mechanical energy between lowest point L_0 and highest point H (height difference = 2L):\n½ m v_L² = ½ m v_H² + mg(2L) = ½ m (gL) + 2mgL = (5/2) mgL\n=> v_L = √(5gL).",
        "stepMarking": [
          {
            "step": "Set T_top = 0 to find v_H = √(gL)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Apply mechanical energy conservation over Δh = 2L -> v_L = √(5gL)",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Tension difference between bottom and top is always T_L - T_H = 6mg!",
        "commonPitfall": "Taking height difference between top and bottom as L instead of 2L."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Rotational Motion: Perpendicular & Parallel Axes / Conservation of L",
        "questionText": "Define torque and angular momentum. Derive the relation τ = dL/dt for a particle and show how angular momentum is conserved when net external torque is zero.",
        "modelAnswer": "Torque τ = r × F and Angular Momentum L = r × p.\nDifferentiating L w.r.t. time t:\ndL/dt = d/dt(r × p) = (dr/dt × p) + (r × dp/dt).\nSince dr/dt = v and p = mv, v × (mv) = 0.\nAnd by Newton's second law, dp/dt = F_ext => dL/dt = r × F_ext = τ_ext.\nIf net external torque τ_ext = 0, then dL/dt = 0 => L = constant (Law of Conservation of Angular Momentum).",
        "stepMarking": [
          {
            "step": "Definitions τ = r × F and L = r × p",
            "marks": "1 Mark"
          },
          {
            "step": "Product rule differentiation showing v × p = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "τ = 0 => L = constant",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Maintain vector cross-product order r × p (never write p × r!).",
        "commonPitfall": "Dropping vector cross-product notation."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Work Done in Isothermal & Adiabatic Processes",
        "questionText": "Derive an expression for the work done during a quasi-static isothermal expansion of n moles of an ideal gas from volume V₁ to V₂ at constant temperature T.",
        "modelAnswer": "Small work done dW = P dV. For n moles of an ideal gas, PV = nRT => P = nRT / V.\nTotal work W = ∫_{V₁}^{V₂} (nRT / V) dV = nRT ∫_{V₁}^{V₂} (1/V) dV\n= nRT [ln V]_{V₁}^{V₂} = nRT ln(V₂ / V₁) = 2.303 nRT log₁₀(V₂ / V₁).",
        "stepMarking": [
          {
            "step": "Set up dW = P dV with P = nRT/V",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate 1/V between V₁ and V₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert ln to log₁₀: 2.303 nRT log₁₀(V₂/V₁)",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "In terms of pressures (P₁V₁ = P₂V₂), W = 2.303 nRT log₁₀(P₁/P₂).",
        "commonPitfall": "Writing log(V₁/V₂) instead of log(V₂/V₁)."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Thermal Properties: Terminal & Capillary / Excess Pressure or Stress-Strain Curve",
        "questionText": "Draw a typical stress-strain curve for a ductile metallic wire and clearly label: (i) Proportional limit, (ii) Yield point (elastic limit), (iii) Ultimate tensile strength, and (iv) Fracture point.",
        "modelAnswer": "• O to A (Proportional Limit): Hooke's law holds strictly (stress ∝ strain; linear graph; slope = Young's modulus Y).\n• A to B (Elastic Limit / Yield Point): Body returns to original dimensions when load removed; B is yield point beyond which plastic deformation begins.\n• D (Ultimate Tensile Strength): Maximum stress the material can withstand before necking starts.\n• E (Fracture Point): Wire breaks even under slightly reduced stress beyond D.",
        "stepMarking": [
          {
            "step": "Neat stress vs strain plot with all 4 points marked",
            "marks": "1.5 Marks"
          },
          {
            "step": "Physical meaning of Proportional limit, Yield, UTS & Fracture",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Recall Stress is plotted on Y-axis and Strain on X-axis (so slope = Y).",
        "commonPitfall": "Placing Strain on Y-axis instead of X-axis."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Waves: Newton Formula & Laplace Correction for Speed of Sound",
        "questionText": "Why did Newton's formula v = √(P/ρ) give an incorrect value for the speed of sound in air? Explain Laplace's correction and compute the corrected formula.",
        "modelAnswer": "Newton assumed sound propagation in air is an ISOTHERMAL process (B_iso = P), giving v ≈ 280 m/s at STP vs experimental 331 m/s (15% error).\nLaplace showed that compressions and rarefactions occur too rapidly in air (a poor conductor of heat) for heat exchange to happen, making the process ADIABATIC.\nThus adiabatic bulk modulus B_ad = γP => v = √(γP/ρ). For air (γ = 1.4), v = √(1.4) × 280 ≈ 331.3 m/s, matching experiment.",
        "stepMarking": [
          {
            "step": "Newton's isothermal assumption -> 280 m/s discrepancy",
            "marks": "1 Mark"
          },
          {
            "step": "Laplace's adiabatic reasoning (rapid + poor conductor)",
            "marks": "1 Mark"
          },
          {
            "step": "Corrected formula v = √(γP/ρ) ≈ 331.3 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight γ = Cp/Cv = 1.4 for diatomic gases like N₂/O₂ in air.",
        "commonPitfall": "Confusing isothermal vs adiabatic bulk modulus."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Kinetic Theory: Pressure of an Ideal Gas & RMS Speed",
        "questionText": "Write the kinetic theory formula for pressure P exerted by an ideal gas and use it to calculate the RMS speed of nitrogen molecules (M = 28 g/mol) at 27°C (R = 8.314 J/mol·K).",
        "modelAnswer": "Pressure P = (1/3) ρ v_rms² = (1/3) (nM/V) v_rms² => v_rms = √(3RT / M).\nGiven T = 27 + 273 = 300 K, M = 28 × 10⁻³ kg/mol.\nv_rms = √(3 × 8.314 × 300 / 0.028) = √(7482.6 / 0.028) = √267235.7 ≈ 517 m/s.",
        "stepMarking": [
          {
            "step": "Formula P = (1/3)ρv_rms² & v_rms = √(3RT/M)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert T = 300 K and M = 0.028 kg/mol",
            "marks": "0.5 Mark"
          },
          {
            "step": "Final RMS speed ≈ 517 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert BOTH Temperature (to Kelvin) and Molar Mass (to kg/mol)!",
        "commonPitfall": "Substituting M = 28 instead of 0.028 kg/mol."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Units & Measurements: Checking Period of Pendulum Dimensionally",
        "questionText": "Assuming that the time period T of a simple pendulum depends on mass of bob m, length l, and acceleration due to gravity g, derive the expression T = k √(l/g) using dimensional analysis.",
        "modelAnswer": "Let T ∝ mᵃ lᵇ gᶜ => T = k mᵃ lᵇ gᶜ.\nWriting dimensions: [M⁰ L⁰ T¹] = [M]ᵃ [L]ᵇ [L T⁻²]ᶜ = [Mᵃ L^(b+c) T^(-2c)].\nEquating exponents:\n• a = 0\n• -2c = 1 => c = -1/2\n• b + c = 0 => b = -c = +1/2.\nSubstituting back: T = k m⁰ l^(1/2) g^(-1/2) = k √(l/g).",
        "stepMarking": [
          {
            "step": "Dimensional substitution [Mᵃ L^(b+c) T^(-2c)]",
            "marks": "1 Mark"
          },
          {
            "step": "Solve a=0, b=1/2, c=-1/2",
            "marks": "1 Mark"
          },
          {
            "step": "Final formula T = k√(l/g)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep dimensionless constant k as dimensions cannot find 2π.",
        "commonPitfall": "Forgetting to write k (writing = instead of k)."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Banking of Curved Roads (Laws of Motion)",
        "questionText": "Read the passage and answer:\nTo reduce wear and tear on car tyres and avoid skidding at high speeds, the outer edge of curved highways is raised slightly above the inner edge by an angle θ (banking of roads).\n\n(a) On a flat circular road of radius R and coefficient of friction μ, write the expression for maximum safe speed. (1M)\n(b) Derive or state the optimum speed on a frictionless banked road of angle θ and radius R (zero wear & tear). (1M)\n(c) A circular track of radius 300 m is banked at angle θ such that tan θ = 0.15. Find the optimum speed (g = 10 m/s²). Also state the role of centripetal force direction. (2M)",
        "modelAnswer": "(a) Flat road: v_max = √(μ R g).\n(b) Optimum speed (zero friction needed): v₀ = √(R g tan θ).\n(c) v₀ = √(300 × 10 × 0.15) = √450 ≈ 21.21 m/s. Horizontal component of Normal reaction (N sinθ) provides the inward centripetal force towards the centre of the circular track.",
        "stepMarking": [
          {
            "step": "(a) √(μRg)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) √(Rg tanθ)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) v₀ = √450 ≈ 21.21 m/s + N sinθ explanation",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Optimum speed v₀ requires ZERO friction because N sinθ alone balances mv²/R!",
        "commonPitfall": "Confusing tan θ with sin θ in v₀ formula."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Terminal Velocity & Bernoulli Equation (Fluids)",
        "questionText": "Read the passage and answer:\nBlood flows through an artery of cross-sectional area 8 × 10⁻⁶ m² at an average speed of 0.4 m/s. When plaque narrows a segment (stenosis) to half its cross-sectional area, pressure drops significantly inside the constriction.\n\n(a) State the Equation of Continuity for incompressible fluid flow. (1M)\n(b) Find the blood speed inside the narrowed plaque region. (1M)\n(c) Using Bernoulli's principle, explain why severe narrowing can cause temporary collapse of an artery. (2M)",
        "modelAnswer": "(a) A₁v₁ = A₂v₂ (volume flow rate Av = constant for steady incompressible streamline flow).\n(b) A₂ = A₁/2 => v₂ = 2 v₁ = 2 × 0.4 = 0.8 m/s.\n(c) By Bernoulli's theorem (P + ½ρv² + ρgh = constant), higher speed v₂ in the constriction lowers internal fluid pressure P₂ dramatically. External tissue pressure can exceed P₂ and temporarily collapse the artery.",
        "stepMarking": [
          {
            "step": "(a) A₁v₁ = A₂v₂",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v₂ = 0.8 m/s",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Bernoulli pressure drop causing external collapse",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Equation of continuity is direct conservation of mass.",
        "commonPitfall": "Saying pressure increases when area narrows."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Oscillations: Simple Harmonic Motion Energy & Simple Pendulum Proof",
        "questionText": "(a) Derive expressions for kinetic energy, potential energy, and total mechanical energy of a particle executing SHM of amplitude A and mass m. Plot them vs displacement x.\n(b) Show that oscillations of a simple pendulum for small angular displacements are simple harmonic, and derive T = 2π√(L/g).",
        "modelAnswer": "(a) Displacement x = A sin(ωt), velocity v = ω√(A² - x²).\nKE = ½ m ω² (A² - x²); PE = ½ m ω² x².\nTotal Energy E = KE + PE = ½ m ω² A² = ½ k A² (constant, independent of x). Graph: PE is upward parabola, KE is inverted parabola, Total E is horizontal line.\n(b) Restoring torque τ = -mgL sinθ ≈ -mgLθ (for small θ). Using τ = Iα = (mL²) d²θ/dt² => d²θ/dt² = -(g/L)θ = -ω²θ.\nHence motion is SHM with ω = √(g/L) => T = 2π/ω = 2π√(L/g).",
        "stepMarking": [
          {
            "step": "(a) KE, PE, Total E expressions + parabolic graph",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Restoring torque & small-angle sinθ≈θ -> T = 2π√(L/g)",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Explicitly state the small-angle approximation sin θ ≈ θ (in radians).",
        "commonPitfall": "Forgetting to write why total energy graph is a straight horizontal line."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Work, Energy & Power: Elastic 1D Head-on Collision",
        "questionText": "(a) Derive expressions for final velocities v₁ and v₂ after an elastic one-dimensional collision between two bodies of masses m₁ and m₂ moving with initial velocities u₁ and u₂.\n(b) Discuss special cases: (i) m₁ = m₂, and (ii) a light body hitting a massive stationary wall (m₁ ≪ m₂, u₂ = 0).",
        "modelAnswer": "(a) Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ => m₁(u₁ - v₁) = m₂(v₂ - u₂) ...(1)\nConservation of KE: ½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂² => relative velocity u₁ - u₂ = v₂ - v₁ => v₂ = u₁ - u₂ + v₁ ...(2)\nSolving (1) & (2):\nv₁ = [(m₁ - m₂)/(m₁ + m₂)]u₁ + [2m₂/(m₁ + m₂)]u₂\nv₂ = [2m₁/(m₁ + m₂)]u₁ + [(m₂ - m₁)/(m₁ + m₂)]u₂.\n(b) (i) If m₁ = m₂: v₁ = u₂ and v₂ = u₁ (velocities interchange!).\n(ii) If m₁ ≪ m₂, u₂ = 0: v₁ ≈ -u₁ (rebounds at same speed), v₂ ≈ 0.",
        "stepMarking": [
          {
            "step": "Momentum + KE conservation -> relative speed reversal",
            "marks": "1.5 Marks"
          },
          {
            "step": "Expressions for v₁ and v₂",
            "marks": "2 Marks"
          },
          {
            "step": "Both special cases clearly proved",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Using u₁ - u₂ = v₂ - v₁ makes solving simultaneous equations very fast!",
        "commonPitfall": "Sign mistakes in (m₁ - m₂) vs (m₂ - m₁)."
      },
      {
        "id": "model-c11-phy-2024-exemplar-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Motion in a Plane: Projectile Trajectory, Time of Flight, Max Height & Range",
        "questionText": "A projectile is fired with initial velocity u at an angle θ with the horizontal.\n(a) Show that the path of the projectile is a parabola.\n(b) Derive expressions for Time of Flight (T), Maximum Height (H), and Horizontal Range (R).\n(c) Prove that there are two angles of projection for the same horizontal range with identical initial speed.",
        "modelAnswer": "(a) x = (u cosθ)t => t = x/(u cosθ). Vertical displacement y = (u sinθ)t - ½gt² = x tanθ - [g / (2u² cos²θ)] x². Since y = ax - bx² is quadratic in x, the trajectory is a parabola.\n(b) At max height v_y = 0 => 0 = u sinθ - gt_asc => T = 2t_asc = (2u sinθ)/g.\nH = (u² sin²θ)/(2g).\nR = (u cosθ) × T = (u² sin 2θ)/g.\n(c) Replacing θ by (90° - θ): R' = u² sin(180° - 2θ)/g = u² sin 2θ / g = R. Thus θ and (90° - θ) yield identical range.",
        "stepMarking": [
          {
            "step": "(a) Parabolic equation y = x tanθ - gx²/(2u²cos²θ)",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Derivations of T, H, R",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Complementary angles θ and 90°-θ proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a clean projectile arc labelling u_x = u cosθ, u_y = u sinθ, H and R.",
        "commonPitfall": "Writing sin²θ instead of sin 2θ in Range formula."
      }
    ]
  },
  {
    "id": "model-c11-phy-2022-aps",
    "title": "Army Public Schools Combined Class 11 Physics Annual Paper (2022)",
    "subject": "Physics",
    "targetClass": "Class 11",
    "year": 2022,
    "paperType": "PRE_BOARD",
    "paperCode": "APS/C11/PHY-05",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 Very Short Answer questions of 2 marks each.",
      "Section C: 7 Short Answer questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c11-phy-2022-aps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Solids: Breaking Stress",
        "questionText": "A steel wire of length L and radius r can sustain a maximum load W without breaking. If the wire is cut into two equal halves, the maximum load each half can sustain is:",
        "options": [
          "A) W / 2",
          "B) W",
          "C) 2W",
          "D) W / 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Breaking load = Breaking Stress × Cross-sectional Area (πr²). Cutting length does not change area or material breaking stress, so max load remains W.",
        "stepMarking": [
          {
            "step": "Breaking load depends on Area & Material, independent of length",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Young's modulus and breaking stress are intensive material properties.",
        "commonPitfall": "Thinking halving length doubles or halves breaking force."
      },
      {
        "id": "model-c11-phy-2022-aps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Mechanical Properties of Fluids: Terminal Velocity",
        "questionText": "According to Stokes' law, the terminal velocity vₜ of a small sphere falling through a viscous fluid is proportional to its radius r as:",
        "options": [
          "A) r",
          "B) r²",
          "C) 1/r",
          "D) 1/r²"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. vₜ = (2r²(ρ - σ)g) / (9η) => vₜ ∝ r².",
        "stepMarking": [
          {
            "step": "State Stokes terminal velocity vₜ ∝ r²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Eight tiny droplets merging into one big drop (R = 2r) increases terminal speed 4 times.",
        "commonPitfall": "Marking proportional to r."
      },
      {
        "id": "model-c11-phy-2022-aps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Thermal Properties of Matter: Newton's Law of Cooling / Wein's Law",
        "questionText": "Wien's displacement law relates the wavelength λₘ of maximum spectral emission from a blackbody to its absolute temperature T as:",
        "options": [
          "A) λₘ / T = constant",
          "B) λₘ T = constant",
          "C) λₘ T² = constant",
          "D) λₘ T⁴ = constant"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Wien's law states λₘ T = b (Wien's constant ≈ 2.9 × 10⁻³ m·K). Hotter stars emit shorter wavelengths (blue).",
        "stepMarking": [
          {
            "step": "Identify λₘ T = constant",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Do not mix Wien's law (λₘ T = b) with Stefan-Boltzmann law (E ∝ T⁴).",
        "commonPitfall": "Selecting T⁴."
      },
      {
        "id": "model-c11-phy-2022-aps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Molar Specific Heat Ratio γ",
        "questionText": "In an adiabatic expansion of an ideal gas, which quantity remains strictly constant?",
        "options": [
          "A) Temperature T",
          "B) Pressure P",
          "C) PV^γ",
          "D) Internal energy U"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. For a quasi-static adiabatic process (δQ = 0), PV^γ = constant, where γ = Cp/Cv.",
        "stepMarking": [
          {
            "step": "Identify PV^γ = constant for adiabatic process",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Isothermal: PV = const; Adiabatic: PV^γ = const.",
        "commonPitfall": "Thinking temperature remains constant in adiabatic expansion (T actually drops!)."
      },
      {
        "id": "model-c11-phy-2022-aps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Kinetic Theory of Gases: Degrees of Freedom & Equipartition",
        "questionText": "At room temperature, the average translational kinetic energy per molecule of an ideal gas depends only on:",
        "options": [
          "A) Molar mass of gas",
          "B) Absolute temperature T",
          "C) Volume of container",
          "D) Pressure alone"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Mean translational KE per molecule = (3/2) k_B T, which depends solely on absolute temperature T.",
        "stepMarking": [
          {
            "step": "KE = (3/2) k_B T depends only on T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "All ideal gases at the same temperature have the SAME average translational KE per molecule, regardless of mass.",
        "commonPitfall": "Thinking heavier molecules have higher kinetic energy."
      },
      {
        "id": "model-c11-phy-2022-aps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Oscillations: Simple Pendulum Time Period",
        "questionText": "A simple pendulum of time period T is taken inside an artificial satellite orbiting the Earth. Its time period inside the satellite will be:",
        "options": [
          "A) T",
          "B) T / 2",
          "C) Zero",
          "D) Infinite (does not oscillate)"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Inside an orbiting satellite, effective gravity g_eff = 0 (weightlessness). Since T = 2π√(L/g_eff), T → ∞.",
        "stepMarking": [
          {
            "step": "g_eff = 0 in satellite -> T = ∞",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "A spring-mass system T = 2π√(m/k) is unaffected by g and oscillates normally in space!",
        "commonPitfall": "Writing T = 0 when g_eff = 0."
      },
      {
        "id": "model-c11-phy-2022-aps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Waves: Doppler / Standing Waves in Organ Pipe",
        "questionText": "In a closed organ pipe (closed at one end, open at the other), which harmonics are produced?",
        "options": [
          "A) Only even harmonics",
          "B) Only odd harmonics (1st, 3rd, 5th...)",
          "C) All harmonics (even and odd)",
          "D) Only 2nd harmonic"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. With a node at the closed end and antinode at the open end, frequencies are νₙ = (2n - 1)v / (4L) -> odd harmonics only (1 : 3 : 5).",
        "stepMarking": [
          {
            "step": "Odd harmonics only (1:3:5)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Open organ pipe produces ALL harmonics (1:2:3); closed organ pipe produces ONLY ODD harmonics (1:3:5).",
        "commonPitfall": "Confusing open pipe with closed pipe."
      },
      {
        "id": "model-c11-phy-2022-aps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Dimensional Analysis",
        "questionText": "Which of the following pairs of physical quantities does NOT have identical dimensional formulas?",
        "options": [
          "A) Work and Torque",
          "B) Angular momentum and Planck's constant",
          "C) Tension and Surface Tension",
          "D) Impulse and Linear Momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Tension is a force [M L T⁻²], whereas Surface Tension is force per unit length [M T⁻²]. All other pairs share identical dimensions.",
        "stepMarking": [
          {
            "step": "Contrast Tension [MLT⁻²] vs Surface Tension [MT⁻²]",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check dimensions of every pair carefully: Work/Torque = [ML²T⁻²], h/L = [ML²T⁻¹], Impulse/Momentum = [MLT⁻¹].",
        "commonPitfall": "Assuming Tension and Surface Tension both have dimensions of Force."
      },
      {
        "id": "model-c11-phy-2022-aps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Significant Figures",
        "questionText": "The number of significant figures in 0.002050 × 10⁴ is:",
        "options": [
          "A) 3",
          "B) 4",
          "C) 6",
          "D) 7"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Leading zeros to the left of the first non-zero digit (0.00) are not significant; trapped zeros and trailing zeros after decimal (2050) are significant -> 4 significant figures. Powers of 10 do not alter significant figures.",
        "stepMarking": [
          {
            "step": "Count digits 2, 0, 5, 0 -> 4 significant figures",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Trailing zero after a decimal point is ALWAYS significant.",
        "commonPitfall": "Dropping the final zero or counting leading zeros."
      },
      {
        "id": "model-c11-phy-2022-aps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Straight Line: v-t Graph Area & Slope",
        "questionText": "A particle starts from rest with uniform acceleration a. The ratio of distances travelled in the 1st, 2nd, and 3rd seconds is:",
        "options": [
          "A) 1 : 2 : 3",
          "B) 1 : 4 : 9",
          "C) 1 : 3 : 5",
          "D) 1 : 1 : 1"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Galileo's law of odd numbers, Sₙ = u + (a/2)(2n - 1). With u = 0, S₁ : S₂ : S₃ = 1 : 3 : 5.",
        "stepMarking": [
          {
            "step": "Apply Sₙ ∝ (2n - 1) for u = 0 -> 1:3:5",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish distance in \"n seconds\" (∝ n²) vs distance in \"nth second\" (∝ 2n-1).",
        "commonPitfall": "Marking 1:4:9 (total distance after n seconds)."
      },
      {
        "id": "model-c11-phy-2022-aps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Motion in a Plane: Projectile Range Condition",
        "questionText": "For a projectile launched at angle θ with horizontal, at what angle of projection is its maximum vertical height equal to its horizontal range?",
        "options": [
          "A) θ = tan⁻¹(1)",
          "B) θ = tan⁻¹(2)",
          "C) θ = tan⁻¹(4)",
          "D) θ = tan⁻¹(1/4)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. H = R => (u² sin²θ)/(2g) = (u² sin 2θ)/g => (sin²θ)/2 = 2 sinθ cosθ => tan θ = 4 => θ = tan⁻¹(4).",
        "stepMarking": [
          {
            "step": "Equate H = R -> sin²θ/2 = 2sinθcosθ -> tanθ = 4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Useful general identity: R = nH gives tan θ = 4/n. Here n = 1 => tan θ = 4.",
        "commonPitfall": "Forgetting the factor of 2 in sin 2θ = 2 sinθ cosθ."
      },
      {
        "id": "model-c11-phy-2022-aps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Apparent Weight in Elevator",
        "questionText": "A person of mass 60 kg stands on a weighing scale inside a lift accelerating downwards at 2 m/s² (take g = 10 m/s²). The reading on the scale is:",
        "options": [
          "A) 720 N",
          "B) 600 N",
          "C) 480 N",
          "D) 120 N"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Normal reaction R = m(g - a) = 60(10 - 2) = 480 N.",
        "stepMarking": [
          {
            "step": "R = m(g - a) = 60 × 8 = 480 N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Accelerating UP: m(g + a); Accelerating DOWN: m(g - a); Free fall: 0.",
        "commonPitfall": "Adding a instead of subtracting for downward acceleration."
      },
      {
        "id": "model-c11-phy-2022-aps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Fluids: Bernoulli Principle & Pressure",
        "questionText": "Assertion (A): When a fast train passes a stationary person standing close to the track, the person tends to be pulled towards the train.\nReason (R): Fast-moving air between the train and person creates a region of higher pressure compared to outside.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. By Bernoulli's theorem, fast-moving air creates LOWER pressure (not higher pressure) between train and person, so outside higher pressure pushes the person inward.",
        "stepMarking": [
          {
            "step": "Option (C): A true, R false (higher velocity -> lower pressure)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read Reason carefully: high speed => LOW static pressure.",
        "commonPitfall": "Assuming fast air creates high static pressure."
      },
      {
        "id": "model-c11-phy-2022-aps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Units & Measurements: Precision vs Accuracy",
        "questionText": "Assertion (A): A physical equation that is dimensionally correct may still be physically incorrect.\nReason (R): Dimensional analysis cannot determine dimensionless numerical constants like 1/2 or 2π.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. For example, K = mv² is dimensionally identical to K = ½mv² yet physically wrong because dimensions do not capture pure numerical constants.",
        "stepMarking": [
          {
            "step": "Option (A) citing dimensionless constant limitation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Dimensionally inconsistent => definitely wrong; Dimensionally consistent => may or may not be right.",
        "commonPitfall": "Thinking dimensional validity proves complete correctness."
      },
      {
        "id": "model-c11-phy-2022-aps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Laws of Motion: Action-Reaction Pairs",
        "questionText": "Assertion (A): Action and reaction forces in Newton's third law never cancel each other out.\nReason (R): Action and reaction act on two different bodies simultaneously.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Only forces acting on the SAME body can cancel to yield zero net force; third-law pairs act on two distinct interacting bodies.",
        "stepMarking": [
          {
            "step": "Option (A) noting action-reaction act on different bodies",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always check whether force pairs act on one body or two bodies.",
        "commonPitfall": "Marking (C) by confusing normal force + weight (both on same block!) with third-law pair."
      },
      {
        "id": "model-c11-phy-2022-aps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Rotational Motion: Ballet Dancer Conservation of L",
        "questionText": "Assertion (A): An ice skater spins faster when she folds her arms close to her body.\nReason (R): Folding her arms decreases her moment of inertia I, so angular speed ω increases to conserve angular momentum L = Iω.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. With zero external torque, L = Iω = constant => reducing I automatically increases ω.",
        "stepMarking": [
          {
            "step": "Option (A) applying conservation of angular momentum",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention zero external torque explicitly when explaining L = Iω.",
        "commonPitfall": "Thinking rotational kinetic energy stays constant (it actually increases via internal muscle work!)."
      },
      {
        "id": "model-c11-phy-2022-aps-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Motion in a Plane: Angle Between Sum & Difference of Vectors",
        "questionText": "Two vectors A and B satisfy |A + B| = |A - B|. Find the angle between A and B.",
        "modelAnswer": "Squaring both sides:\n|A + B|² = |A - B|²\nA² + B² + 2AB cosθ = A² + B² - 2AB cosθ\n4AB cosθ = 0 => cosθ = 0 (since A, B ≠ 0) => θ = 90°.",
        "stepMarking": [
          {
            "step": "Expand magnitudes squared",
            "marks": "1 Mark"
          },
          {
            "step": "Solve 4AB cosθ = 0 -> θ = 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Geometrically, diagonals of a parallelogram are equal only when it is a rectangle (θ = 90°).",
        "commonPitfall": "Forgetting to state A ≠ 0, B ≠ 0."
      },
      {
        "id": "model-c11-phy-2022-aps-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Laws of Motion: Recoil Velocity of Gun",
        "questionText": "A bullet of mass 20 g is fired horizontally with velocity 150 m/s from a pistol of mass 2 kg. Calculate the recoil velocity of the pistol.",
        "modelAnswer": "By conservation of linear momentum (initial momentum = 0):\nm₁v₁ + m₂v₂ = 0\n(0.02 kg)(150 m/s) + (2 kg) v₂ = 0\n3 + 2v₂ = 0 => v₂ = -1.5 m/s.\nRecoil speed is 1.5 m/s opposite to bullet direction.",
        "stepMarking": [
          {
            "step": "Convert 20 g = 0.02 kg & apply m₁v₁ + m₂v₂ = 0",
            "marks": "1 Mark"
          },
          {
            "step": "v₂ = -1.5 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always convert mass into SI unit kg!",
        "commonPitfall": "Using m₁ = 20 g alongside m₂ = 2 kg without conversion."
      },
      {
        "id": "model-c11-phy-2022-aps-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Gravitation: Variation of g with Depth",
        "questionText": "At what depth below the surface of Earth does the acceleration due to gravity become 25% of its value on the surface? (Take R = 6400 km)",
        "modelAnswer": "Variation with depth: g_d = g (1 - d/R).\nGiven g_d = 0.25 g = g/4 => 1 - d/R = 1/4 => d/R = 3/4.\nd = (3/4) × 6400 km = 4800 km.",
        "stepMarking": [
          {
            "step": "Formula g_d = g(1 - d/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute d = 4800 km",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Read carefully: \"becomes 25%\" vs \"decreases by 25%\"!",
        "commonPitfall": "Using height formula g/(1 + h/R)² for depth."
      },
      {
        "id": "model-c11-phy-2022-aps-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Oscillations: Phase & Maximum Acceleration in SHM",
        "questionText": "The displacement of a particle executing SHM is given by x(t) = 0.04 sin(100t + π/3) metres. Find its amplitude, angular frequency, frequency, and maximum acceleration.",
        "modelAnswer": "Comparing with x = A sin(ωt + φ):\nAmplitude A = 0.04 m; Angular frequency ω = 100 rad/s.\nFrequency ν = ω / (2π) = 100 / (2π) = 50/π ≈ 15.92 Hz.\nMax acceleration a_max = ω² A = (100)² × 0.04 = 10000 × 0.04 = 400 m/s².",
        "stepMarking": [
          {
            "step": "A = 0.04 m, ω = 100 rad/s, ν = 50/π Hz",
            "marks": "1 Mark"
          },
          {
            "step": "a_max = ω²A = 400 m/s²",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State SI units (m, rad/s, Hz, m/s²) for each quantity.",
        "commonPitfall": "Confusing ω with frequency ν = ω/2π."
      },
      {
        "id": "model-c11-phy-2022-aps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Properties of Fluids: Excess Pressure Inside Soap Bubble",
        "questionText": "Why is the excess pressure inside a soap bubble twice that inside an air bubble of the same radius in a liquid? Write both formulas.",
        "modelAnswer": "An air bubble inside a liquid has only ONE free spherical surface interface (liquid-air), so ΔP_air = 2S / R.\nA soap bubble in air has TWO free surfaces (inner and outer air-soap interfaces), doubling surface energy change, so ΔP_soap = 4S / R.",
        "stepMarking": [
          {
            "step": "Air bubble = 1 free surface (2S/R)",
            "marks": "1 Mark"
          },
          {
            "step": "Soap bubble = 2 free surfaces (4S/R)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Explicitly state \"two free surfaces\" for soap bubble.",
        "commonPitfall": "Saying soap has double surface tension instead of two interfaces."
      },
      {
        "id": "model-c11-phy-2022-aps-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Rotational Motion: Perpendicular & Parallel Axes / Conservation of L",
        "questionText": "Define torque and angular momentum. Derive the relation τ = dL/dt for a particle and show how angular momentum is conserved when net external torque is zero.",
        "modelAnswer": "Torque τ = r × F and Angular Momentum L = r × p.\nDifferentiating L w.r.t. time t:\ndL/dt = d/dt(r × p) = (dr/dt × p) + (r × dp/dt).\nSince dr/dt = v and p = mv, v × (mv) = 0.\nAnd by Newton's second law, dp/dt = F_ext => dL/dt = r × F_ext = τ_ext.\nIf net external torque τ_ext = 0, then dL/dt = 0 => L = constant (Law of Conservation of Angular Momentum).",
        "stepMarking": [
          {
            "step": "Definitions τ = r × F and L = r × p",
            "marks": "1 Mark"
          },
          {
            "step": "Product rule differentiation showing v × p = 0",
            "marks": "1.5 Marks"
          },
          {
            "step": "τ = 0 => L = constant",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Maintain vector cross-product order r × p (never write p × r!).",
        "commonPitfall": "Dropping vector cross-product notation."
      },
      {
        "id": "model-c11-phy-2022-aps-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Work Done in Isothermal & Adiabatic Processes",
        "questionText": "Derive an expression for the work done during a quasi-static isothermal expansion of n moles of an ideal gas from volume V₁ to V₂ at constant temperature T.",
        "modelAnswer": "Small work done dW = P dV. For n moles of an ideal gas, PV = nRT => P = nRT / V.\nTotal work W = ∫_{V₁}^{V₂} (nRT / V) dV = nRT ∫_{V₁}^{V₂} (1/V) dV\n= nRT [ln V]_{V₁}^{V₂} = nRT ln(V₂ / V₁) = 2.303 nRT log₁₀(V₂ / V₁).",
        "stepMarking": [
          {
            "step": "Set up dW = P dV with P = nRT/V",
            "marks": "1 Mark"
          },
          {
            "step": "Integrate 1/V between V₁ and V₂",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert ln to log₁₀: 2.303 nRT log₁₀(V₂/V₁)",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "In terms of pressures (P₁V₁ = P₂V₂), W = 2.303 nRT log₁₀(P₁/P₂).",
        "commonPitfall": "Writing log(V₁/V₂) instead of log(V₂/V₁)."
      },
      {
        "id": "model-c11-phy-2022-aps-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Thermal Properties: Terminal & Capillary / Excess Pressure or Stress-Strain Curve",
        "questionText": "Draw a typical stress-strain curve for a ductile metallic wire and clearly label: (i) Proportional limit, (ii) Yield point (elastic limit), (iii) Ultimate tensile strength, and (iv) Fracture point.",
        "modelAnswer": "• O to A (Proportional Limit): Hooke's law holds strictly (stress ∝ strain; linear graph; slope = Young's modulus Y).\n• A to B (Elastic Limit / Yield Point): Body returns to original dimensions when load removed; B is yield point beyond which plastic deformation begins.\n• D (Ultimate Tensile Strength): Maximum stress the material can withstand before necking starts.\n• E (Fracture Point): Wire breaks even under slightly reduced stress beyond D.",
        "stepMarking": [
          {
            "step": "Neat stress vs strain plot with all 4 points marked",
            "marks": "1.5 Marks"
          },
          {
            "step": "Physical meaning of Proportional limit, Yield, UTS & Fracture",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Recall Stress is plotted on Y-axis and Strain on X-axis (so slope = Y).",
        "commonPitfall": "Placing Strain on Y-axis instead of X-axis."
      },
      {
        "id": "model-c11-phy-2022-aps-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Waves: Newton Formula & Laplace Correction for Speed of Sound",
        "questionText": "Why did Newton's formula v = √(P/ρ) give an incorrect value for the speed of sound in air? Explain Laplace's correction and compute the corrected formula.",
        "modelAnswer": "Newton assumed sound propagation in air is an ISOTHERMAL process (B_iso = P), giving v ≈ 280 m/s at STP vs experimental 331 m/s (15% error).\nLaplace showed that compressions and rarefactions occur too rapidly in air (a poor conductor of heat) for heat exchange to happen, making the process ADIABATIC.\nThus adiabatic bulk modulus B_ad = γP => v = √(γP/ρ). For air (γ = 1.4), v = √(1.4) × 280 ≈ 331.3 m/s, matching experiment.",
        "stepMarking": [
          {
            "step": "Newton's isothermal assumption -> 280 m/s discrepancy",
            "marks": "1 Mark"
          },
          {
            "step": "Laplace's adiabatic reasoning (rapid + poor conductor)",
            "marks": "1 Mark"
          },
          {
            "step": "Corrected formula v = √(γP/ρ) ≈ 331.3 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Highlight γ = Cp/Cv = 1.4 for diatomic gases like N₂/O₂ in air.",
        "commonPitfall": "Confusing isothermal vs adiabatic bulk modulus."
      },
      {
        "id": "model-c11-phy-2022-aps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Kinetic Theory: Pressure of an Ideal Gas & RMS Speed",
        "questionText": "Write the kinetic theory formula for pressure P exerted by an ideal gas and use it to calculate the RMS speed of nitrogen molecules (M = 28 g/mol) at 27°C (R = 8.314 J/mol·K).",
        "modelAnswer": "Pressure P = (1/3) ρ v_rms² = (1/3) (nM/V) v_rms² => v_rms = √(3RT / M).\nGiven T = 27 + 273 = 300 K, M = 28 × 10⁻³ kg/mol.\nv_rms = √(3 × 8.314 × 300 / 0.028) = √(7482.6 / 0.028) = √267235.7 ≈ 517 m/s.",
        "stepMarking": [
          {
            "step": "Formula P = (1/3)ρv_rms² & v_rms = √(3RT/M)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Convert T = 300 K and M = 0.028 kg/mol",
            "marks": "0.5 Mark"
          },
          {
            "step": "Final RMS speed ≈ 517 m/s",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert BOTH Temperature (to Kelvin) and Molar Mass (to kg/mol)!",
        "commonPitfall": "Substituting M = 28 instead of 0.028 kg/mol."
      },
      {
        "id": "model-c11-phy-2022-aps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Units & Measurements: Checking Period of Pendulum Dimensionally",
        "questionText": "Assuming that the time period T of a simple pendulum depends on mass of bob m, length l, and acceleration due to gravity g, derive the expression T = k √(l/g) using dimensional analysis.",
        "modelAnswer": "Let T ∝ mᵃ lᵇ gᶜ => T = k mᵃ lᵇ gᶜ.\nWriting dimensions: [M⁰ L⁰ T¹] = [M]ᵃ [L]ᵇ [L T⁻²]ᶜ = [Mᵃ L^(b+c) T^(-2c)].\nEquating exponents:\n• a = 0\n• -2c = 1 => c = -1/2\n• b + c = 0 => b = -c = +1/2.\nSubstituting back: T = k m⁰ l^(1/2) g^(-1/2) = k √(l/g).",
        "stepMarking": [
          {
            "step": "Dimensional substitution [Mᵃ L^(b+c) T^(-2c)]",
            "marks": "1 Mark"
          },
          {
            "step": "Solve a=0, b=1/2, c=-1/2",
            "marks": "1 Mark"
          },
          {
            "step": "Final formula T = k√(l/g)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Keep dimensionless constant k as dimensions cannot find 2π.",
        "commonPitfall": "Forgetting to write k (writing = instead of k)."
      },
      {
        "id": "model-c11-phy-2022-aps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Motion in a Straight Line: Calculus Derivation of v² - u² = 2as",
        "questionText": "Using integration (calculus method), derive all three kinematic equations of motion for constant acceleration a:\n(i) v = u + at\n(ii) s = ut + ½at²\n(iii) v² - u² = 2as",
        "modelAnswer": "(i) a = dv/dt => dv = a dt. Integrating from u to v and 0 to t: ∫dv = a∫dt => v - u = at => v = u + at.\n(ii) v = ds/dt => ds = (u + at)dt. Integrating s from 0 to s and t from 0 to t: s = ut + ½at².\n(iii) a = (dv/ds)(ds/dt) = v dv/ds => v dv = a ds. Integrating v from u to v and s from 0 to s: [v²/2] = a[s] => v² - u² = 2as.",
        "stepMarking": [
          {
            "step": "(i) Derive v = u + at via integration",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Derive s = ut + ½at²",
            "marks": "1 Mark"
          },
          {
            "step": "(iii) Use chain rule a = v dv/ds -> v² - u² = 2as",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify lower and upper limits of integration clearly.",
        "commonPitfall": "Using indefinite integration without finding constants."
      },
      {
        "id": "model-c11-phy-2022-aps-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Terminal Velocity & Bernoulli Equation (Fluids)",
        "questionText": "Read the passage and answer:\nBlood flows through an artery of cross-sectional area 8 × 10⁻⁶ m² at an average speed of 0.4 m/s. When plaque narrows a segment (stenosis) to half its cross-sectional area, pressure drops significantly inside the constriction.\n\n(a) State the Equation of Continuity for incompressible fluid flow. (1M)\n(b) Find the blood speed inside the narrowed plaque region. (1M)\n(c) Using Bernoulli's principle, explain why severe narrowing can cause temporary collapse of an artery. (2M)",
        "modelAnswer": "(a) A₁v₁ = A₂v₂ (volume flow rate Av = constant for steady incompressible streamline flow).\n(b) A₂ = A₁/2 => v₂ = 2 v₁ = 2 × 0.4 = 0.8 m/s.\n(c) By Bernoulli's theorem (P + ½ρv² + ρgh = constant), higher speed v₂ in the constriction lowers internal fluid pressure P₂ dramatically. External tissue pressure can exceed P₂ and temporarily collapse the artery.",
        "stepMarking": [
          {
            "step": "(a) A₁v₁ = A₂v₂",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v₂ = 0.8 m/s",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Bernoulli pressure drop causing external collapse",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Equation of continuity is direct conservation of mass.",
        "commonPitfall": "Saying pressure increases when area narrows."
      },
      {
        "id": "model-c11-phy-2022-aps-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Satellites & Kepler Laws (Gravitation)",
        "questionText": "Read the passage and answer:\nCommunication and Earth-observation satellites orbit at fixed altitudes balanced between gravitational attraction and centripetal requirement. A satellite of mass 500 kg orbits Earth at height h = R (where Earth radius R = 6.4 × 10⁶ m, g = 10 m/s²).\n\n(a) State Kepler's Third Law (Law of Periods). (1M)\n(b) Write the formula for orbital speed of a satellite at height h above Earth's surface. (1M)\n(c) Calculate the orbital speed of the given satellite at h = R. (2M)",
        "modelAnswer": "(a) The square of the time period T of revolution of a planet/satellite is directly proportional to the cube of the semi-major axis r of its elliptical/circular orbit (T² ∝ r³).\n(b) v_o = √(GM / (R + h)) = R √(g / (R + h)).\n(c) At h = R, R + h = 2R => v_o = √(gR / 2) = √(10 × 6.4 × 10⁶ / 2) = √(3.2 × 10⁷) = 4000√2 ≈ 5.66 × 10³ m/s (5.66 km/s).",
        "stepMarking": [
          {
            "step": "(a) T² ∝ r³ statement",
            "marks": "1 Mark"
          },
          {
            "step": "(b) v_o = √(GM/(R+h))",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Substitute r = 2R -> 5.66 km/s",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Notice orbital speed is independent of satellite mass (500 kg is extra data)!",
        "commonPitfall": "Using r = R instead of R + h = 2R."
      },
      {
        "id": "model-c11-phy-2022-aps-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Work, Energy & Power: Elastic 1D Head-on Collision",
        "questionText": "(a) Derive expressions for final velocities v₁ and v₂ after an elastic one-dimensional collision between two bodies of masses m₁ and m₂ moving with initial velocities u₁ and u₂.\n(b) Discuss special cases: (i) m₁ = m₂, and (ii) a light body hitting a massive stationary wall (m₁ ≪ m₂, u₂ = 0).",
        "modelAnswer": "(a) Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ => m₁(u₁ - v₁) = m₂(v₂ - u₂) ...(1)\nConservation of KE: ½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂² => relative velocity u₁ - u₂ = v₂ - v₁ => v₂ = u₁ - u₂ + v₁ ...(2)\nSolving (1) & (2):\nv₁ = [(m₁ - m₂)/(m₁ + m₂)]u₁ + [2m₂/(m₁ + m₂)]u₂\nv₂ = [2m₁/(m₁ + m₂)]u₁ + [(m₂ - m₁)/(m₁ + m₂)]u₂.\n(b) (i) If m₁ = m₂: v₁ = u₂ and v₂ = u₁ (velocities interchange!).\n(ii) If m₁ ≪ m₂, u₂ = 0: v₁ ≈ -u₁ (rebounds at same speed), v₂ ≈ 0.",
        "stepMarking": [
          {
            "step": "Momentum + KE conservation -> relative speed reversal",
            "marks": "1.5 Marks"
          },
          {
            "step": "Expressions for v₁ and v₂",
            "marks": "2 Marks"
          },
          {
            "step": "Both special cases clearly proved",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Using u₁ - u₂ = v₂ - v₁ makes solving simultaneous equations very fast!",
        "commonPitfall": "Sign mistakes in (m₁ - m₂) vs (m₂ - m₁)."
      },
      {
        "id": "model-c11-phy-2022-aps-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Motion in a Plane: Projectile Trajectory, Time of Flight, Max Height & Range",
        "questionText": "A projectile is fired with initial velocity u at an angle θ with the horizontal.\n(a) Show that the path of the projectile is a parabola.\n(b) Derive expressions for Time of Flight (T), Maximum Height (H), and Horizontal Range (R).\n(c) Prove that there are two angles of projection for the same horizontal range with identical initial speed.",
        "modelAnswer": "(a) x = (u cosθ)t => t = x/(u cosθ). Vertical displacement y = (u sinθ)t - ½gt² = x tanθ - [g / (2u² cos²θ)] x². Since y = ax - bx² is quadratic in x, the trajectory is a parabola.\n(b) At max height v_y = 0 => 0 = u sinθ - gt_asc => T = 2t_asc = (2u sinθ)/g.\nH = (u² sin²θ)/(2g).\nR = (u cosθ) × T = (u² sin 2θ)/g.\n(c) Replacing θ by (90° - θ): R' = u² sin(180° - 2θ)/g = u² sin 2θ / g = R. Thus θ and (90° - θ) yield identical range.",
        "stepMarking": [
          {
            "step": "(a) Parabolic equation y = x tanθ - gx²/(2u²cos²θ)",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Derivations of T, H, R",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Complementary angles θ and 90°-θ proof",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw a clean projectile arc labelling u_x = u cosθ, u_y = u sinθ, H and R.",
        "commonPitfall": "Writing sin²θ instead of sin 2θ in Range formula."
      },
      {
        "id": "model-c11-phy-2022-aps-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Laws of Motion: Banking of Roads with Friction (Maximum Safe Speed)",
        "questionText": "(a) Draw a free-body diagram of a car of mass m negotiating a circular banked road of radius R banked at angle θ with coefficient of static friction μ_s.\n(b) Derive the exact expression for maximum safe permissible speed v_max.\n(c) A cyclist speeds at 18 km/h on a level circular turn of radius 9 m with μ_s = 0.3 (g = 10 m/s²). Will the cyclist slip?",
        "modelAnswer": "(a) Forces on car: Weight mg downward, Normal N perpendicular to banked road, Static friction f_s down the incline (for max speed).\n(b) Vertical equilibrium: N cosθ - f_s sinθ = mg. Horizontal centripetal: N sinθ + f_s cosθ = mv_max²/R. Putting f_s = μ_s N and dividing:\nv_max = √[ R g (μ_s + tan θ) / (1 - μ_s tan θ) ].\n(c) v = 18 km/h = 5 m/s. Max safe speed on level road = √(μ_s R g) = √(0.3 × 9 × 10) = √27 ≈ 5.196 m/s. Since 5 m/s < 5.196 m/s, the cyclist will NOT slip.",
        "stepMarking": [
          {
            "step": "(a) FBD resolving N and f_s along vertical & horizontal",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) Derivation of v_max",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Convert 18 km/h = 5 m/s < √27 m/s -> No slip",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always convert km/h to m/s by multiplying by 5/18.",
        "commonPitfall": "Resolving friction parallel to horizontal instead of along the inclined road."
      }
    ]
  }
];
