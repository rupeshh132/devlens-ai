import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_11_CHEM_BATCH3_PAPERS: PyqPaper[] = [
  {
    "id": "cbse-c11-chem-2024-set2",
    "title": "CBSE Class 11 Chemistry Delhi Directorate Exam Paper (2024 Set 2)",
    "subject": "Chemistry",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "BOARD_EXAM",
    "paperCode": "DOE/DEL/C11/CHE-24",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 are multiple choice / assertion-reason questions carrying 1 mark each.",
      "Section B: Q17 to Q21 are short answer questions carrying 2 marks each.",
      "Section C: Q22 to Q28 are short answer questions carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c11-chem-2024-set2-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Spontaneity Criterion ΔG",
        "questionText": "For a chemical process to be spontaneous at ALL temperatures, the signs of ΔH and ΔS must be respectively:",
        "options": [
          "A) ΔH > 0, ΔS < 0",
          "B) ΔH < 0, ΔS > 0",
          "C) ΔH < 0, ΔS < 0",
          "D) ΔH > 0, ΔS > 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. ΔG = ΔH - TΔS. When ΔH < 0 (exothermic) and ΔS > 0 (entropy increases), ΔG is negative at every positive temperature T.",
        "stepMarking": [
          {
            "step": "ΔH < 0 and ΔS > 0 guarantees ΔG < 0 for all T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Spontaneous criterion: ΔG < 0 at constant T & P.",
        "commonPitfall": "Confusing signs of ΔH and ΔS."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Conjugate Acid-Base Pairs",
        "questionText": "The conjugate acid and conjugate base of HSO₄⁻ are respectively:",
        "options": [
          "A) SO₄²⁻ and H₂SO₄",
          "B) H₂SO₄ and SO₄²⁻",
          "C) H₂SO₃ and SO₃²⁻",
          "D) H₃O⁺ and OH⁻"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Adding H⁺ gives conjugate acid H₂SO₄; removing H⁺ gives conjugate base SO₄²⁻.",
        "stepMarking": [
          {
            "step": "Gain H⁺ -> H₂SO₄ (acid); Lose H⁺ -> SO₄²⁻ (base)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Conjugate Acid = species + H⁺; Conjugate Base = species - H⁺.",
        "commonPitfall": "Reversing conjugate acid and conjugate base order."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Le Chatelier Principle (Haber Process)",
        "questionText": "In the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.4 kJ/mol, forward yield of ammonia is favoured by:",
        "options": [
          "A) High temperature and low pressure",
          "B) Low temperature and high pressure",
          "C) Low temperature and low pressure",
          "D) Addition of inert gas at constant volume"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The reaction is exothermic (ΔH < 0 -> favoured by low T) and proceeds with decrease in gaseous moles (4 -> 2 -> favoured by high P).",
        "stepMarking": [
          {
            "step": "Exothermic -> low T; fewer product moles -> high P",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count Δn_g = moles_products - moles_reactants for gaseous pressure effect.",
        "commonPitfall": "Choosing high temperature thinking it boosts rate (rate ≠ equilibrium yield)."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Redox Reactions: Oxidation State Calculation",
        "questionText": "The oxidation numbers of Cr in CrO₅ and S in H₂SO₅ (Caro's acid) are respectively:",
        "options": [
          "A) +10 and +8",
          "B) +6 and +6",
          "C) +6 and +8",
          "D) +5 and +6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Both contain peroxide linkages (-O-O- where O is -1): CrO₅ has butterfly structure with 2 peroxide linkages (4 O at -1, 1 O at -2) => Cr = +6. H₂SO₅ has 1 peroxide linkage => S = +6.",
        "stepMarking": [
          {
            "step": "Account for peroxide (-1) oxygen linkages -> +6 and +6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Maximum oxidation state of an element cannot exceed its group valence electrons (Cr = 6, S = 6)!",
        "commonPitfall": "Naively assigning -2 to every oxygen and writing +10 or +8."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: IUPAC Naming",
        "questionText": "The IUPAC name of CH₃–CH(OH)–CH₂–COOH is:",
        "options": [
          "A) 2-Hydroxybutanoic acid",
          "B) 3-Hydroxybutanoic acid",
          "C) 3-Carboxybutan-2-ol",
          "D) 1-Carboxypropan-2-ol"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -COOH is the principal functional group (gets C-1): C1(COOH)-C2(CH₂)-C3(CH-OH)-C4(CH₃) -> 3-Hydroxybutanoic acid.",
        "stepMarking": [
          {
            "step": "Number from -COOH -> -OH at C3 -> 3-Hydroxybutanoic acid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Carboxylic acid (-COOH) always gets priority over -OH, becoming suffix \"-oic acid\" and prefix \"hydroxy-\".",
        "commonPitfall": "Numbering from the CH₃ end."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: Carbocation Stability",
        "questionText": "Which of the following carbocations is the MOST stable due to hyperconjugation and inductive effect?",
        "options": [
          "A) CH₃⁺",
          "B) CH₃CH₂⁺",
          "C) (CH₃)₂CH⁺",
          "D) (CH₃)₃C⁺"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tertiary butyl carbocation (CH₃)₃C⁺ has 9 α-hydrogens participating in hyperconjugation plus +I effect from 3 methyl groups, giving highest stability (3° > 2° > 1° > CH₃⁺).",
        "stepMarking": [
          {
            "step": "Identify 3° carbocation (9 α-H hyperconjugation)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Count α-hydrogens adjacent to C⁺: 9 > 6 > 3 > 0.",
        "commonPitfall": "Choosing primary carbocation."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Markovnikov Addition & Ozonolysis",
        "questionText": "Reaction of propene (CH₃–CH=CH₂) with HBr in the presence of benzoyl peroxide yields:",
        "options": [
          "A) 2-Bromopropane",
          "B) 1-Bromopropane",
          "C) 1,2-Dibromopropane",
          "D) Propyne"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. In presence of organic peroxide (Kharasch / anti-Markovnikov free-radical mechanism), HBr adds to propene giving 1-bromopropane as the major product.",
        "stepMarking": [
          {
            "step": "Anti-Markovnikov peroxide effect (HBr only) -> 1-bromopropane",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Peroxide effect works ONLY with HBr, NOT with HCl or HI!",
        "commonPitfall": "Applying Markovnikov rule and selecting 2-bromopropane."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Acidic Character of Alkynes",
        "questionText": "Which of the following hydrocarbons reacts with ammoniacal AgNO₃ (Tollens' reagent) to form a white precipitate?",
        "options": [
          "A) But-2-yne",
          "B) But-1-yne",
          "C) Ethene",
          "D) Ethane"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Terminal alkynes (like But-1-yne, CH₃CH₂C≡CH) possess an acidic sp-hybridized C–H hydrogen that reacts with Tollens' reagent.",
        "stepMarking": [
          {
            "step": "Identify terminal alkyne But-1-yne with acidic ≡C-H",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Internal alkynes (like But-2-yne) have no acidic terminal hydrogen and do not react.",
        "commonPitfall": "Selecting But-2-yne."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Some Basic Concepts: Molarity & Dilution",
        "questionText": "What volume of 2 M HCl solution is required to prepare 500 mL of 0.5 M HCl solution?",
        "options": [
          "A) 100 mL",
          "B) 125 mL",
          "C) 250 mL",
          "D) 50 mL"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using dilution law M₁V₁ = M₂V₂: 2 × V₁ = 0.5 × 500 => V₁ = 250/2 = 125 mL.",
        "stepMarking": [
          {
            "step": "Apply M₁V₁ = M₂V₂ -> V₁ = 125 mL",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Volume units can stay in mL on both sides as long as they match.",
        "commonPitfall": "Computing 250 mL without dividing by M₁ = 2."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Quantum Numbers Set Validity",
        "questionText": "Which of the following sets of quantum numbers (n, l, m, s) is NOT permissible for an electron?",
        "options": [
          "A) n = 3, l = 2, m = -2, s = +1/2",
          "B) n = 2, l = 1, m = 0, s = -1/2",
          "C) n = 3, l = 3, m = 0, s = +1/2",
          "D) n = 4, l = 0, m = 0, s = -1/2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Azimuthal quantum number l can only take integer values from 0 to (n - 1). For n = 3, maximum l is 2, so l = 3 is invalid.",
        "stepMarking": [
          {
            "step": "Identify l must satisfy 0 ≤ l ≤ n - 1 -> l = 3 invalid for n = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check 3 rules: 0 ≤ l ≤ n-1, -l ≤ m ≤ +l, s = ±1/2.",
        "commonPitfall": "Allowing l = n."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Number of Radial Nodes",
        "questionText": "The total number of radial (spherical) nodes present in a 4p orbital is:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radial nodes = n - l - 1 = 4 - 1 - 1 = 2 (for 4p: n=4, l=1).",
        "stepMarking": [
          {
            "step": "Radial nodes = n - l - 1 = 4 - 1 - 1 = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.",
        "commonPitfall": "Giving total nodes (n - 1 = 3) when radial nodes are asked."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: First Ionisation Enthalpy Anomaly",
        "questionText": "Among B, C, N, O, the correct increasing order of first ionisation enthalpy (IE₁) is:",
        "options": [
          "A) B < C < N < O",
          "B) B < C < O < N",
          "C) B < O < C < N",
          "D) C < B < O < N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Generally IE₁ increases across Period 2, EXCEPT Nitrogen (2s² 2p³) has a stable half-filled p-subshell, making IE₁(N) > IE₁(O). Order: B < C < O < N.",
        "stepMarking": [
          {
            "step": "Account for half-filled 2p³ stability of Nitrogen -> B < C < O < N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Two classic Period 2 exceptions: IE₁(Be) > IE₁(B) and IE₁(N) > IE₁(O).",
        "commonPitfall": "Following monotonic trend B < C < N < O."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: Dipole Moment of NH₃ vs NF₃",
        "questionText": "Assertion (A): The dipole moment of NH₃ (1.47 D) is greater than that of NF₃ (0.23 D).\nReason (R): In NH₃, the orbital dipole of the lone pair points in the same direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Both molecules are pyramidal, but in NH₃ bond dipoles point towards N (reinforcing lone pair dipole), while in NF₃ electronegative F pulls dipoles away from N (opposing lone pair dipole).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting vector directions of N-H vs N-F dipoles",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw small dipole arrows on pyramidal NH₃ and NF₃ for 2M/3M questions.",
        "commonPitfall": "Assuming higher electronegativity of F automatically gives NF₃ a larger dipole moment."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Common Ion Effect",
        "questionText": "Assertion (A): Addition of CH₃COONa to an aqueous solution of CH₃COOH suppresses the ionisation of acetic acid.\nReason (R): CH₃COONa is a strong electrolyte supplying common CH₃COO⁻ ions that shift the equilibrium backward by Le Chatelier's principle.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Common ion effect suppresses dissociation of weak acid CH₃COOH when common acetate ions increase.",
        "stepMarking": [
          {
            "step": "Option (A) identifying Common Ion Effect",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "This mixture (CH₃COOH + CH₃COONa) also forms an Acidic Buffer!",
        "commonPitfall": "Thinking pH decreases instead of increasing when CH₃COONa is added."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Atomic Structure: Heisenberg Uncertainty Principle",
        "questionText": "Assertion (A): Heisenberg's uncertainty principle is insignificant in the motion of macroscopic objects like a cricket ball.\nReason (R): The value of Planck's constant h (6.626 × 10⁻³⁴ J·s) is extremely small compared to macroscopic mass values.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Δx·Δv ≥ h/(4πm). For macroscopic mass m ~ 0.1 kg, Δx·Δv ~ 10⁻³³ m²/s, which is negligible.",
        "stepMarking": [
          {
            "step": "Option (A) with h/4πm scaling explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show numerical order ~10⁻³³ for macroscopic objects if asked in 2M.",
        "commonPitfall": "Saying macroscopic balls have zero uncertainty theoretically (it is non-zero, just negligible)."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: Electron Gain Enthalpy of Cl vs F",
        "questionText": "Assertion (A): Chlorine has a more negative electron gain enthalpy than Fluorine.\nReason (R): Fluorine has a very small compact 2p-orbital where incoming electrons suffer strong inter-electronic repulsion.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Adding an electron to compact n=2 shell of F causes strong electron-electron repulsion compared to larger n=3 shell of Cl.",
        "stepMarking": [
          {
            "step": "Option (A) citing compact 2p inter-electronic repulsion in F",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reasoning applies to Oxygen vs Sulphur (Δ_eg H of S is more negative than O).",
        "commonPitfall": "Thinking F has higher negative electron gain enthalpy because it is more electronegative."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Organic Chemistry: Inductive vs Resonance Effect",
        "questionText": "Give two differences between Inductive effect (I-effect) and Resonance / Mesomeric effect (R/M-effect).",
        "modelAnswer": "1. Inductive effect involves partial displacement of sigma (σ) electrons along a saturated chain and weakens rapidly after 3 carbons; Resonance effect involves complete delocalisation of pi (π) or lone-pair electrons through conjugated systems.\n2. Resonance effect operates uniformly across the entire conjugated system without fading significantly with distance.",
        "stepMarking": [
          {
            "step": "σ vs π/lone pair electron involvement",
            "marks": "1 Mark"
          },
          {
            "step": "Distance decay vs full conjugation propagation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"permanent effects\" for both I and R effects.",
        "commonPitfall": "Confusing permanent Resonance effect with temporary Electromeric effect."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Hydrocarbons: Wurtz Reaction Limitation",
        "questionText": "Write the chemical equation for Wurtz reaction using bromoethane. Why is Wurtz reaction NOT suitable for preparing alkanes with an odd number of carbon atoms?",
        "modelAnswer": "Equation: 2 CH₃CH₂Br + 2Na --(Dry Ether)--> CH₃–CH₂–CH₂–CH₃ (n-Butane) + 2NaBr.\nLimitation: Preparing an odd-carbon alkane requires two different alkyl halides (R-X and R'-X), producing a mixture of three alkanes (R-R, R'-R', and R-R') with close boiling points that are difficult to separate.",
        "stepMarking": [
          {
            "step": "Balanced Wurtz equation in Dry Ether -> Butane",
            "marks": "1 Mark"
          },
          {
            "step": "Mixture of 3 alkanes problem explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify \"Dry Ether\" over arrow in Wurtz reaction.",
        "commonPitfall": "Forgetting Na reacts violently with moisture if dry ether is absent."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Some Basic Concepts: Limiting Reagent",
        "questionText": "50.0 kg of N₂(g) and 10.0 kg of H₂(g) are mixed to produce NH₃(g). Identify the limiting reagent and calculate the mass of NH₃(g) formed.",
        "modelAnswer": "N₂ + 3H₂ → 2NH₃.\nMoles of N₂ = 50,000 / 28 = 1785.7 mol.\nMoles of H₂ = 10,000 / 2.0 = 5000 mol.\n1785.7 mol N₂ requires 3 × 1785.7 = 5357.1 mol H₂, which exceeds available 5000 mol H₂. Thus H₂ is the limiting reagent.\nFrom 3 mol H₂ -> 2 mol NH₃ => 5000 mol H₂ produces (2/3) × 5000 = 3333.3 mol NH₃.\nMass of NH₃ = 3333.3 × 17 g ≈ 56,667 g = 56.67 kg.",
        "stepMarking": [
          {
            "step": "Identify H₂ as limiting reagent using mole ratio",
            "marks": "1 Mark"
          },
          {
            "step": "Calculate 56.67 kg NH₃ formed",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert kg to grams cleanly when dividing by molar mass in g/mol.",
        "commonPitfall": "Assuming N₂ is limiting without comparing 1:3 stoichiometric ratio."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Structure of Atom: de Broglie Wavelength Numerical",
        "questionText": "Calculate the de Broglie wavelength of a ball of mass 0.1 kg moving with a velocity of 10 m/s (h = 6.626 × 10⁻³⁴ J·s).",
        "modelAnswer": "λ = h / (mv) = (6.626 × 10⁻³⁴) / (0.1 × 10) = 6.626 × 10⁻³⁴ m.",
        "stepMarking": [
          {
            "step": "State λ = h/(mv)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute 6.626 × 10⁻³⁴ m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Add 1-line note why wave nature is unobservable at 10⁻³⁴ m scale.",
        "commonPitfall": "Calculation slip with 0.1 × 10 = 1."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Thermodynamics: ΔH and ΔU Relation",
        "questionText": "If water vapour is assumed to be a perfect gas, molar enthalpy change for vaporisation of 1 mol of water at 1 bar and 100°C is 41 kJ/mol. Calculate the internal energy change ΔU when 1 mol of water is vaporised at 1 bar and 100°C (R = 8.314 J/mol·K).",
        "modelAnswer": "H₂O(l) → H₂O(g). Δn_g = 1 - 0 = 1 mol.\nUsing ΔH = ΔU + Δn_g R T => ΔU = ΔH - Δn_g R T.\nT = 100 + 273 = 373 K.\nΔn_g R T = 1 × 8.314 × 373 = 3101.1 J = 3.10 kJ.\nΔU = 41 - 3.10 = 37.90 kJ/mol.",
        "stepMarking": [
          {
            "step": "Identify Δn_g = 1 & formula ΔU = ΔH - Δn_gRT",
            "marks": "1 Mark"
          },
          {
            "step": "Convert J to kJ -> ΔU = 37.90 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert R·T from Joules to kilojoules before subtracting from kJ!",
        "commonPitfall": "Subtracting 3101 directly from 41 without unit matching."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Hess's Law Enthalpy Calculation",
        "questionText": "State Hess's Law of Constant Heat Summation. Calculate the standard enthalpy of formation of CH₄(g) from:\n(i) C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ/mol\n(ii) H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ/mol\n(iii) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH° = -890.3 kJ/mol",
        "modelAnswer": "Hess's Law: Total enthalpy change of a reaction is identical whether carried out in one step or multiple steps.\nTarget: C(s) + 2H₂(g) → CH₄(g).\nOperate: Eq(i) + 2×Eq(ii) - Eq(iii):\nΔ_f H°(CH₄) = (-393.5) + 2(-285.8) - (-890.3)\n= -393.5 - 571.6 + 890.3 = -965.1 + 890.3 = -74.8 kJ/mol.",
        "stepMarking": [
          {
            "step": "Statement of Hess's Law",
            "marks": "1 Mark"
          },
          {
            "step": "Target eq + algebraic combination (i) + 2(ii) - (iii)",
            "marks": "1 Mark"
          },
          {
            "step": "Result Δ_f H° = -74.8 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double Eq(ii) because 2 moles of H₂ are needed to form CH₄.",
        "commonPitfall": "Forgetting to multiply -285.8 by 2 or flipping sign of Eq(iii)."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Redox Reactions: Balancing by Ion-Electron Method (Acidic Medium)",
        "questionText": "Balance the following redox reaction in acidic medium by half-reaction (ion-electron) method:\nCr₂O₇²⁻(aq) + Fe²⁺(aq) → Cr³⁺(aq) + Fe³⁺(aq)",
        "modelAnswer": "Reduction half: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nOxidation half: Fe²⁺ → Fe³⁺ + e⁻ (multiply by 6 -> 6Fe²⁺ → 6Fe³⁺ + 6e⁻)\nAdding both halves to cancel 6e⁻:\nCr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) → 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l).",
        "stepMarking": [
          {
            "step": "Balanced reduction half with 14H⁺ & 6e⁻",
            "marks": "1.5 Marks"
          },
          {
            "step": "Multiply oxidation half by 6 & add",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Verify BOTH atoms AND net charge on LHS (-2 + 12 + 14 = +24) and RHS (6 + 18 = +24)!",
        "commonPitfall": "Forgetting to multiply Cr³⁺ by 2 when balancing Cr atoms."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Organic Chemistry: Electrophilic vs Nucleophilic Attack & Isomerism",
        "questionText": "Draw all possible structural isomers of Pentane (C₅H₁₂) and give their IUPAC names. State why chain isomerism arises here.",
        "modelAnswer": "Chain isomerism arises when compounds share the same molecular formula but differ in the carbon skeleton.\n1. CH₃–CH₂–CH₂–CH₂–CH₃ -> Pentane (n-pentane)\n2. CH₃–CH(CH₃)–CH₂–CH₃ -> 2-Methylbutane (isopentane)\n3. C(CH₃)₄ -> 2,2-Dimethylpropane (neopentane).",
        "stepMarking": [
          {
            "step": "3 correct structural formulas",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact IUPAC names of all 3 isomers",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Note C(CH₃)₄ IUPAC name is 2,2-dimethylpropane (longest chain is 3 carbons).",
        "commonPitfall": "Drawing 2-ethylpropane (actually identical to 2-methylbutane!)."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Equilibrium: Solubility Product (K_sp) Calculation",
        "questionText": "Define solubility product (K_sp). Calculate the molar solubility of AgCl in water at 298 K if its K_sp = 1.6 × 10⁻¹⁰.",
        "modelAnswer": "K_sp is the product of equilibrium molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, each raised to its stoichiometric coefficient.\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let solubility = s mol/L.\nK_sp = [Ag⁺][Cl⁻] = s × s = s² = 1.6 × 10⁻¹⁰ = 16 × 10⁻¹¹? Better: 1.6 × 10⁻¹⁰ = 160 × 10⁻¹² => s = √(1.6 × 10⁻¹⁰) ≈ 1.265 × 10⁻⁵ mol/L.",
        "stepMarking": [
          {
            "step": "Definition of K_sp",
            "marks": "1 Mark"
          },
          {
            "step": "Set K_sp = s² and solve s = 1.265 × 10⁻⁵ M",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Adjust even power of 10 before taking square root: √(1.6 × 10⁻¹⁰) = √1.6 × 10⁻⁵.",
        "commonPitfall": "Writing K_sp = 4s² instead of s² for 1:1 AB salt."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Some Basic Concepts: Empirical and Molecular Formula",
        "questionText": "An organic compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine by mass. Its molar mass is 98.96 g/mol. Determine its empirical and molecular formulas. (Atomic masses: C = 12, H = 1, Cl = 35.5)",
        "modelAnswer": "Moles per 100 g:\n• C: 24.27 / 12 = 2.02 mol\n• H: 4.07 / 1 = 4.07 mol\n• Cl: 71.65 / 35.5 = 2.02 mol\nSimplest molar ratio (divide by 2.02): C : H : Cl = 1 : 2 : 1.\nEmpirical formula = CH₂Cl.\nEmpirical formula mass = 12 + 2 + 35.5 = 49.5 g/mol.\nn = Molar mass / Empirical mass = 98.96 / 49.5 ≈ 2.\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂.",
        "stepMarking": [
          {
            "step": "Mole calculation & dividing by smallest mole (2.02)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Empirical formula CH₂Cl & mass 49.5",
            "marks": "1 Mark"
          },
          {
            "step": "n = 2 -> Molecular formula C₂H₄Cl₂",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "NCERT textbook solved example — show the tabular mole/ratio calculation cleanly.",
        "commonPitfall": "Rounding 4.07/2.02 = 2.01 incorrectly."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Structure of Atom: Bohr Hydrogen Emission Lines",
        "questionText": "Calculate the wavelength and frequency of light emitted when an electron in a hydrogen atom transitions from n = 4 to n = 2 energy level (R_H = 1.097 × 10⁷ m⁻¹, c = 3 × 10⁸ m/s). Name the spectral series.",
        "modelAnswer": "1/λ = R_H (1/n₁² - 1/n₂²) = 1.097 × 10⁷ (1/2² - 1/4²) = 1.097 × 10⁷ × (3/16)\n= 2.057 × 10⁶ m⁻¹.\nλ = 1 / (2.057 × 10⁶) ≈ 4.86 × 10⁻⁷ m = 486 nm (blue-green visible light).\nFrequency ν = c / λ = 3 × 10⁸ / (4.86 × 10⁻⁷) ≈ 6.17 × 10¹⁴ Hz.\nSpectral series: Balmer series (since n₁ = 2).",
        "stepMarking": [
          {
            "step": "Rydberg formula 1/λ with n₁=2, n₂=4",
            "marks": "1 Mark"
          },
          {
            "step": "λ = 486 nm & ν = 6.17 × 10¹⁴ Hz",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify Balmer series",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Balmer series (n₁ = 2) lies in the visible region!",
        "commonPitfall": "Forgetting to take reciprocal of 1/λ."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Bonding: Hybridisation of SF₆, PCl₅ & Ethyne",
        "questionText": "Using valence bond hybridisation theory, explain the hybridisation state, geometry, and bond angles of:\n(a) CH₄\n(b) PCl₅\n(c) SF₆.",
        "modelAnswer": "(a) CH₄: sp³ hybridisation of C -> Tetrahedral geometry, all bond angles = 109.5°.\n(b) PCl₅: sp³d hybridisation of P -> Trigonal bipyramidal geometry; 3 equatorial bonds at 120° and 2 longer axial bonds at 90° to equatorial plane.\n(c) SF₆: sp³d² hybridisation of S -> Regular Octahedral geometry, all bond angles = 90°.",
        "stepMarking": [
          {
            "step": "(a) CH₄ sp³, tetrahedral, 109.5°",
            "marks": "1 Mark"
          },
          {
            "step": "(b) PCl₅ sp³d, TBP, 120° & 90° (longer axial)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) SF₆ sp³d², octahedral, 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note why axial bonds in PCl₅ are longer/weaker: 3 bond-pair repulsions at 90° vs 2 for equatorial.",
        "commonPitfall": "Writing all angles in PCl₅ as 109.5° or 90°."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Periodic Trends Across Period 2 & 3",
        "questionText": "Read the passage and answer:\nElements show systematic periodicity in atomic radii, ionisation enthalpy, and electronegativity across periods and down groups. Across a period left to right, effective nuclear charge increases while valence shell remains fixed.\n\n(a) Why are cations smaller and anions larger than their parent neutral atoms? (1M)\n(b) Arrange the isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ in increasing order of ionic radii. (1M)\n(c) Why is the second ionisation enthalpy (IE₂) of Sodium far higher than that of Magnesium? (2M)",
        "modelAnswer": "(a) Cations have higher Z_eff per electron (often losing a shell), shrinking radius; anions have extra electron repulsion and lower Z_eff per electron, expanding radius.\n(b) Increasing ionic radius (all have 10 e⁻): Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.\n(c) After losing 1 e⁻, Na⁺ attains a stable noble-gas octet (2s² 2p⁶), requiring massive energy for IE₂, whereas Mg⁺ (3s¹) loses its 2nd electron easily to reach the noble-gas configuration.",
        "stepMarking": [
          {
            "step": "(a) Z_eff / repulsion explanation",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Noble-gas core of Na⁺ vs 3s¹ of Mg⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "For isoelectronic species, higher positive nuclear charge Z -> smaller radius.",
        "commonPitfall": "Reversing ionic radius order of isoelectronic ions."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Molecular Orbital Energy Diagram & Bond Order",
        "questionText": "Read the passage and answer:\nMolecular Orbital Theory predicts bond order, magnetic character, and relative stability of diatomic species. Up to N₂ (14 electrons), σ2pz lies ABOVE π2px, π2py due to 2s-2p mixing; from O₂ onwards, σ2pz lies BELOW π2px, π2py.\n\n(a) Write the formula for Bond Order in MOT. (1M)\n(b) Compute the bond orders of O₂, O₂⁺, and O₂⁻. (1.5M)\n(c) Arrange O₂, O₂⁺, and O₂⁻ in increasing order of bond length and bond stability. (1.5M)",
        "modelAnswer": "(a) Bond Order = ½ (N_b - N_a), where N_b = bonding e⁻, N_a = antibonding e⁻.\n(b) O₂: BO = 2.0; O₂⁺ (one e⁻ removed from π*): BO = 2.5; O₂⁻ (one e⁻ added to π*): BO = 1.5.\n(c) Higher bond order => shorter bond & higher stability:\nStability order: O₂⁻ < O₂ < O₂⁺; Bond length order: O₂⁺ < O₂ < O₂⁻.",
        "stepMarking": [
          {
            "step": "(a) Formula ½(Nb - Na)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) BOs 2.0, 2.5, 1.5",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Stability & length orders",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Stability ∝ Bond Order, while Bond Length ∝ 1 / Bond Order!",
        "commonPitfall": "Making bond length order identical to stability order."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Chemical Equilibrium: Le Chatelier Principle, pH & Ostwald Dilution",
        "questionText": "(a) Calculate the pH of a 0.02 M acetic acid (CH₃COOH) solution if its ionisation constant K_a = 1.8 × 10⁻⁵ (given √3.6 ≈ 1.9).\n(b) State Le Chatelier's Principle and predict the effect of (i) adding inert gas at constant pressure, and (ii) increasing temperature on PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH = +92.5 kJ/mol.",
        "modelAnswer": "(a) [H⁺] = √(K_a × C) = √(1.8 × 10⁻⁵ × 0.02) = √(3.6 × 10⁻⁷) = √(0.36 × 10⁻⁶) = 0.6 × 10⁻³ = 6 × 10⁻⁴ M.\npH = -log₁₀(6 × 10⁻⁴) = 4 - log 6 = 4 - 0.778 = 3.22.\n(b) Le Chatelier: Any change in T, P or concentration shifts equilibrium to counteract the imposed stress.\n(i) Inert gas at constant P increases total volume -> shifts toward MORE moles (forward, 1 -> 2 moles).\n(ii) Endothermic ΔH > 0 -> increasing T shifts equilibrium FORWARD.",
        "stepMarking": [
          {
            "step": "(a) [H⁺] = √(Ka·C) = 6×10⁻⁴ M -> pH = 3.22",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Le Chatelier + both predictions justified",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Distinguish inert gas at constant VOLUME (no shift) vs constant PRESSURE (shifts toward more moles)!",
        "commonPitfall": "Saying inert gas at constant pressure has no effect."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Hydrocarbons: Benzene Electrophilic Substitution & Arenes",
        "questionText": "(a) Explain why benzene undergoes electrophilic substitution rather than addition reactions despite having three double bonds.\n(b) Write balanced chemical equations for:\n  (i) Nitration of benzene\n  (ii) Friedel-Crafts alkylation with CH₃Cl\n  (iii) Ozonolysis of But-2-ene followed by Zn/H₂O.\n(c) Arrange Ethane, Ethene, and Ethyne in increasing order of C–C bond length.",
        "modelAnswer": "(a) Benzene has 6 delocalised π-electrons forming an exceptionally stable aromatic sextet (resonance energy ~150 kJ/mol). Addition destroys aromaticity, whereas electrophilic substitution preserves the aromatic ring.\n(b) (i) C₆H₆ + conc. HNO₃ --(conc. H₂SO₄, 323-333K)--> C₆H₅NO₂ + H₂O.\n(ii) C₆H₆ + CH₃Cl --(Anhyd. AlCl₃)--> C₆H₅CH₃ (Toluene) + HCl.\n(iii) CH₃–CH=CH–CH₃ + O₃ --(Zn/H₂O)--> 2 CH₃CHO (Ethanal).\n(c) Bond length order: Ethyne (120 pm) < Ethene (134 pm) < Ethane (154 pm).",
        "stepMarking": [
          {
            "step": "(a) Aromaticity & resonance stability preservation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) All 3 organic reactions with reagents/conditions",
            "marks": "2.5 Marks"
          },
          {
            "step": "(c) C≡C < C=C < C-C bond length order",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write \"Anhydrous AlCl₃\" for Friedel-Crafts and \"conc. H₂SO₄\" for nitration.",
        "commonPitfall": "Missing Zn/H₂O reductive cleavage in ozonolysis."
      },
      {
        "id": "cbse-c11-chem-2024-set2-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Structure of Atom: Quantum Numbers, Electronic Configuration & Pauli/Hund Rules",
        "questionText": "(a) State (i) Aufbau Principle, (ii) Pauli Exclusion Principle, and (iii) Hund's Rule of Maximum Multiplicity.\n(b) Explain why Chromium (Z = 24) and Copper (Z = 29) have anomalous ground-state electronic configurations ([Ar]3d⁵4s¹ and [Ar]3d¹⁰4s¹).\n(c) List all four quantum numbers for the valence 3d electron of Scandium (Z = 21).",
        "modelAnswer": "(a) (i) Aufbau: Orbitals are filled in increasing order of energy (n + l rule).\n(ii) Pauli: No two electrons in an atom can have the exact same set of all four quantum numbers (max 2 e⁻ per orbital with opposite spins).\n(iii) Hund: Pairing of electrons in degenerate orbitals does not occur until each orbital is singly occupied with parallel spins.\n(b) Half-filled (d⁵) and fully-filled (d¹⁰) subshells acquire extra stability due to symmetrical electron distribution and maximum exchange energy.\n(c) 3d¹ in Sc: n = 3, l = 2, m = -2 (any from -2 to +2), s = +1/2.",
        "stepMarking": [
          {
            "step": "(a) All 3 electronic rules stated accurately",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Symmetrical distribution + exchange energy for Cr & Cu",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Quantum numbers for 3d¹",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include BOTH \"symmetry\" and \"exchange energy\" for Cr and Cu stability.",
        "commonPitfall": "Writing 3d⁴ 4s² for Cr."
      }
    ]
  },
  {
    "id": "cbse-c11-chem-2023-set2",
    "title": "CBSE Class 11 Chemistry Delhi Directorate Exam Paper (2023 Set 2)",
    "subject": "Chemistry",
    "targetClass": "Class 11",
    "year": 2023,
    "paperType": "BOARD_EXAM",
    "paperCode": "DOE/DEL/C11/CHE-23",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 are multiple choice / assertion-reason questions carrying 1 mark each.",
      "Section B: Q17 to Q21 are short answer questions carrying 2 marks each.",
      "Section C: Q22 to Q28 are short answer questions carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c11-chem-2023-set2-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Le Chatelier Principle (Haber Process)",
        "questionText": "In the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.4 kJ/mol, forward yield of ammonia is favoured by:",
        "options": [
          "A) High temperature and low pressure",
          "B) Low temperature and high pressure",
          "C) Low temperature and low pressure",
          "D) Addition of inert gas at constant volume"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The reaction is exothermic (ΔH < 0 -> favoured by low T) and proceeds with decrease in gaseous moles (4 -> 2 -> favoured by high P).",
        "stepMarking": [
          {
            "step": "Exothermic -> low T; fewer product moles -> high P",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count Δn_g = moles_products - moles_reactants for gaseous pressure effect.",
        "commonPitfall": "Choosing high temperature thinking it boosts rate (rate ≠ equilibrium yield)."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Redox Reactions: Oxidation State Calculation",
        "questionText": "The oxidation numbers of Cr in CrO₅ and S in H₂SO₅ (Caro's acid) are respectively:",
        "options": [
          "A) +10 and +8",
          "B) +6 and +6",
          "C) +6 and +8",
          "D) +5 and +6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Both contain peroxide linkages (-O-O- where O is -1): CrO₅ has butterfly structure with 2 peroxide linkages (4 O at -1, 1 O at -2) => Cr = +6. H₂SO₅ has 1 peroxide linkage => S = +6.",
        "stepMarking": [
          {
            "step": "Account for peroxide (-1) oxygen linkages -> +6 and +6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Maximum oxidation state of an element cannot exceed its group valence electrons (Cr = 6, S = 6)!",
        "commonPitfall": "Naively assigning -2 to every oxygen and writing +10 or +8."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: IUPAC Naming",
        "questionText": "The IUPAC name of CH₃–CH(OH)–CH₂–COOH is:",
        "options": [
          "A) 2-Hydroxybutanoic acid",
          "B) 3-Hydroxybutanoic acid",
          "C) 3-Carboxybutan-2-ol",
          "D) 1-Carboxypropan-2-ol"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -COOH is the principal functional group (gets C-1): C1(COOH)-C2(CH₂)-C3(CH-OH)-C4(CH₃) -> 3-Hydroxybutanoic acid.",
        "stepMarking": [
          {
            "step": "Number from -COOH -> -OH at C3 -> 3-Hydroxybutanoic acid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Carboxylic acid (-COOH) always gets priority over -OH, becoming suffix \"-oic acid\" and prefix \"hydroxy-\".",
        "commonPitfall": "Numbering from the CH₃ end."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: Carbocation Stability",
        "questionText": "Which of the following carbocations is the MOST stable due to hyperconjugation and inductive effect?",
        "options": [
          "A) CH₃⁺",
          "B) CH₃CH₂⁺",
          "C) (CH₃)₂CH⁺",
          "D) (CH₃)₃C⁺"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tertiary butyl carbocation (CH₃)₃C⁺ has 9 α-hydrogens participating in hyperconjugation plus +I effect from 3 methyl groups, giving highest stability (3° > 2° > 1° > CH₃⁺).",
        "stepMarking": [
          {
            "step": "Identify 3° carbocation (9 α-H hyperconjugation)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Count α-hydrogens adjacent to C⁺: 9 > 6 > 3 > 0.",
        "commonPitfall": "Choosing primary carbocation."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Markovnikov Addition & Ozonolysis",
        "questionText": "Reaction of propene (CH₃–CH=CH₂) with HBr in the presence of benzoyl peroxide yields:",
        "options": [
          "A) 2-Bromopropane",
          "B) 1-Bromopropane",
          "C) 1,2-Dibromopropane",
          "D) Propyne"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. In presence of organic peroxide (Kharasch / anti-Markovnikov free-radical mechanism), HBr adds to propene giving 1-bromopropane as the major product.",
        "stepMarking": [
          {
            "step": "Anti-Markovnikov peroxide effect (HBr only) -> 1-bromopropane",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Peroxide effect works ONLY with HBr, NOT with HCl or HI!",
        "commonPitfall": "Applying Markovnikov rule and selecting 2-bromopropane."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Acidic Character of Alkynes",
        "questionText": "Which of the following hydrocarbons reacts with ammoniacal AgNO₃ (Tollens' reagent) to form a white precipitate?",
        "options": [
          "A) But-2-yne",
          "B) But-1-yne",
          "C) Ethene",
          "D) Ethane"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Terminal alkynes (like But-1-yne, CH₃CH₂C≡CH) possess an acidic sp-hybridized C–H hydrogen that reacts with Tollens' reagent.",
        "stepMarking": [
          {
            "step": "Identify terminal alkyne But-1-yne with acidic ≡C-H",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Internal alkynes (like But-2-yne) have no acidic terminal hydrogen and do not react.",
        "commonPitfall": "Selecting But-2-yne."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Some Basic Concepts: Molarity & Dilution",
        "questionText": "What volume of 2 M HCl solution is required to prepare 500 mL of 0.5 M HCl solution?",
        "options": [
          "A) 100 mL",
          "B) 125 mL",
          "C) 250 mL",
          "D) 50 mL"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using dilution law M₁V₁ = M₂V₂: 2 × V₁ = 0.5 × 500 => V₁ = 250/2 = 125 mL.",
        "stepMarking": [
          {
            "step": "Apply M₁V₁ = M₂V₂ -> V₁ = 125 mL",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Volume units can stay in mL on both sides as long as they match.",
        "commonPitfall": "Computing 250 mL without dividing by M₁ = 2."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Quantum Numbers Set Validity",
        "questionText": "Which of the following sets of quantum numbers (n, l, m, s) is NOT permissible for an electron?",
        "options": [
          "A) n = 3, l = 2, m = -2, s = +1/2",
          "B) n = 2, l = 1, m = 0, s = -1/2",
          "C) n = 3, l = 3, m = 0, s = +1/2",
          "D) n = 4, l = 0, m = 0, s = -1/2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Azimuthal quantum number l can only take integer values from 0 to (n - 1). For n = 3, maximum l is 2, so l = 3 is invalid.",
        "stepMarking": [
          {
            "step": "Identify l must satisfy 0 ≤ l ≤ n - 1 -> l = 3 invalid for n = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check 3 rules: 0 ≤ l ≤ n-1, -l ≤ m ≤ +l, s = ±1/2.",
        "commonPitfall": "Allowing l = n."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Number of Radial Nodes",
        "questionText": "The total number of radial (spherical) nodes present in a 4p orbital is:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radial nodes = n - l - 1 = 4 - 1 - 1 = 2 (for 4p: n=4, l=1).",
        "stepMarking": [
          {
            "step": "Radial nodes = n - l - 1 = 4 - 1 - 1 = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.",
        "commonPitfall": "Giving total nodes (n - 1 = 3) when radial nodes are asked."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: First Ionisation Enthalpy Anomaly",
        "questionText": "Among B, C, N, O, the correct increasing order of first ionisation enthalpy (IE₁) is:",
        "options": [
          "A) B < C < N < O",
          "B) B < C < O < N",
          "C) B < O < C < N",
          "D) C < B < O < N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Generally IE₁ increases across Period 2, EXCEPT Nitrogen (2s² 2p³) has a stable half-filled p-subshell, making IE₁(N) > IE₁(O). Order: B < C < O < N.",
        "stepMarking": [
          {
            "step": "Account for half-filled 2p³ stability of Nitrogen -> B < C < O < N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Two classic Period 2 exceptions: IE₁(Be) > IE₁(B) and IE₁(N) > IE₁(O).",
        "commonPitfall": "Following monotonic trend B < C < N < O."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: VSEPR Geometry of ClF₃ / SF₄",
        "questionText": "According to VSEPR theory, the shape of ClF₃ molecule (with 3 bond pairs and 2 lone pairs on central Cl) is:",
        "options": [
          "A) Trigonal planar",
          "B) Pyramidal",
          "C) Bent T-shaped",
          "D) Tetrahedral"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Central Cl has sp³d hybridisation (5 electron pairs -> trigonal bipyramidal geometry) with 2 lone pairs at equatorial positions, giving a bent T-shaped molecular shape.",
        "stepMarking": [
          {
            "step": "Identify 3 bp + 2 lp -> T-shaped geometry",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Lone pairs ALWAYS occupy equatorial positions in sp³d trigonal bipyramidal geometry to minimize lp-bp repulsions at 90°.",
        "commonPitfall": "Placing lone pairs at axial positions giving trigonal planar."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: MOT Bond Order of O₂⁺ and N₂",
        "questionText": "Which of the following species is paramagnetic according to Molecular Orbital Theory (MOT)?",
        "options": [
          "A) N₂",
          "B) O₂²⁻",
          "C) O₂",
          "D) F₂"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. O₂ has 16 electrons with two unpaired electrons in degenerate π*2px¹ π*2py¹ antibonding orbitals, making it paramagnetic (bond order = 2). N₂, O₂²⁻, and F₂ have all electrons paired.",
        "stepMarking": [
          {
            "step": "Identify O₂ due to 2 unpaired electrons in π*2p orbitals",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both O₂ (16 e⁻) and B₂ (10 e⁻) are famously paramagnetic in MOT.",
        "commonPitfall": "Assuming O₂²⁻ (18 e⁻) is paramagnetic."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Common Ion Effect",
        "questionText": "Assertion (A): Addition of CH₃COONa to an aqueous solution of CH₃COOH suppresses the ionisation of acetic acid.\nReason (R): CH₃COONa is a strong electrolyte supplying common CH₃COO⁻ ions that shift the equilibrium backward by Le Chatelier's principle.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Common ion effect suppresses dissociation of weak acid CH₃COOH when common acetate ions increase.",
        "stepMarking": [
          {
            "step": "Option (A) identifying Common Ion Effect",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "This mixture (CH₃COOH + CH₃COONa) also forms an Acidic Buffer!",
        "commonPitfall": "Thinking pH decreases instead of increasing when CH₃COONa is added."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Atomic Structure: Heisenberg Uncertainty Principle",
        "questionText": "Assertion (A): Heisenberg's uncertainty principle is insignificant in the motion of macroscopic objects like a cricket ball.\nReason (R): The value of Planck's constant h (6.626 × 10⁻³⁴ J·s) is extremely small compared to macroscopic mass values.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Δx·Δv ≥ h/(4πm). For macroscopic mass m ~ 0.1 kg, Δx·Δv ~ 10⁻³³ m²/s, which is negligible.",
        "stepMarking": [
          {
            "step": "Option (A) with h/4πm scaling explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show numerical order ~10⁻³³ for macroscopic objects if asked in 2M.",
        "commonPitfall": "Saying macroscopic balls have zero uncertainty theoretically (it is non-zero, just negligible)."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: Electron Gain Enthalpy of Cl vs F",
        "questionText": "Assertion (A): Chlorine has a more negative electron gain enthalpy than Fluorine.\nReason (R): Fluorine has a very small compact 2p-orbital where incoming electrons suffer strong inter-electronic repulsion.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Adding an electron to compact n=2 shell of F causes strong electron-electron repulsion compared to larger n=3 shell of Cl.",
        "stepMarking": [
          {
            "step": "Option (A) citing compact 2p inter-electronic repulsion in F",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reasoning applies to Oxygen vs Sulphur (Δ_eg H of S is more negative than O).",
        "commonPitfall": "Thinking F has higher negative electron gain enthalpy because it is more electronegative."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: Dipole Moment of NH₃ vs NF₃",
        "questionText": "Assertion (A): The dipole moment of NH₃ (1.47 D) is greater than that of NF₃ (0.23 D).\nReason (R): In NH₃, the orbital dipole of the lone pair points in the same direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Both molecules are pyramidal, but in NH₃ bond dipoles point towards N (reinforcing lone pair dipole), while in NF₃ electronegative F pulls dipoles away from N (opposing lone pair dipole).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting vector directions of N-H vs N-F dipoles",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw small dipole arrows on pyramidal NH₃ and NF₃ for 2M/3M questions.",
        "commonPitfall": "Assuming higher electronegativity of F automatically gives NF₃ a larger dipole moment."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Hydrocarbons: Wurtz Reaction Limitation",
        "questionText": "Write the chemical equation for Wurtz reaction using bromoethane. Why is Wurtz reaction NOT suitable for preparing alkanes with an odd number of carbon atoms?",
        "modelAnswer": "Equation: 2 CH₃CH₂Br + 2Na --(Dry Ether)--> CH₃–CH₂–CH₂–CH₃ (n-Butane) + 2NaBr.\nLimitation: Preparing an odd-carbon alkane requires two different alkyl halides (R-X and R'-X), producing a mixture of three alkanes (R-R, R'-R', and R-R') with close boiling points that are difficult to separate.",
        "stepMarking": [
          {
            "step": "Balanced Wurtz equation in Dry Ether -> Butane",
            "marks": "1 Mark"
          },
          {
            "step": "Mixture of 3 alkanes problem explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify \"Dry Ether\" over arrow in Wurtz reaction.",
        "commonPitfall": "Forgetting Na reacts violently with moisture if dry ether is absent."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Some Basic Concepts: Limiting Reagent",
        "questionText": "50.0 kg of N₂(g) and 10.0 kg of H₂(g) are mixed to produce NH₃(g). Identify the limiting reagent and calculate the mass of NH₃(g) formed.",
        "modelAnswer": "N₂ + 3H₂ → 2NH₃.\nMoles of N₂ = 50,000 / 28 = 1785.7 mol.\nMoles of H₂ = 10,000 / 2.0 = 5000 mol.\n1785.7 mol N₂ requires 3 × 1785.7 = 5357.1 mol H₂, which exceeds available 5000 mol H₂. Thus H₂ is the limiting reagent.\nFrom 3 mol H₂ -> 2 mol NH₃ => 5000 mol H₂ produces (2/3) × 5000 = 3333.3 mol NH₃.\nMass of NH₃ = 3333.3 × 17 g ≈ 56,667 g = 56.67 kg.",
        "stepMarking": [
          {
            "step": "Identify H₂ as limiting reagent using mole ratio",
            "marks": "1 Mark"
          },
          {
            "step": "Calculate 56.67 kg NH₃ formed",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert kg to grams cleanly when dividing by molar mass in g/mol.",
        "commonPitfall": "Assuming N₂ is limiting without comparing 1:3 stoichiometric ratio."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Structure of Atom: de Broglie Wavelength Numerical",
        "questionText": "Calculate the de Broglie wavelength of a ball of mass 0.1 kg moving with a velocity of 10 m/s (h = 6.626 × 10⁻³⁴ J·s).",
        "modelAnswer": "λ = h / (mv) = (6.626 × 10⁻³⁴) / (0.1 × 10) = 6.626 × 10⁻³⁴ m.",
        "stepMarking": [
          {
            "step": "State λ = h/(mv)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute 6.626 × 10⁻³⁴ m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Add 1-line note why wave nature is unobservable at 10⁻³⁴ m scale.",
        "commonPitfall": "Calculation slip with 0.1 × 10 = 1."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Thermodynamics: ΔH and ΔU Relation",
        "questionText": "If water vapour is assumed to be a perfect gas, molar enthalpy change for vaporisation of 1 mol of water at 1 bar and 100°C is 41 kJ/mol. Calculate the internal energy change ΔU when 1 mol of water is vaporised at 1 bar and 100°C (R = 8.314 J/mol·K).",
        "modelAnswer": "H₂O(l) → H₂O(g). Δn_g = 1 - 0 = 1 mol.\nUsing ΔH = ΔU + Δn_g R T => ΔU = ΔH - Δn_g R T.\nT = 100 + 273 = 373 K.\nΔn_g R T = 1 × 8.314 × 373 = 3101.1 J = 3.10 kJ.\nΔU = 41 - 3.10 = 37.90 kJ/mol.",
        "stepMarking": [
          {
            "step": "Identify Δn_g = 1 & formula ΔU = ΔH - Δn_gRT",
            "marks": "1 Mark"
          },
          {
            "step": "Convert J to kJ -> ΔU = 37.90 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert R·T from Joules to kilojoules before subtracting from kJ!",
        "commonPitfall": "Subtracting 3101 directly from 41 without unit matching."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Equilibrium: Buffer Solution & pH Calculation",
        "questionText": "What is a buffer solution? Calculate the pH of a 0.001 M aqueous NaOH solution at 298 K (Kw = 10⁻¹⁴).",
        "modelAnswer": "Buffer solution: A solution that resists change in pH upon dilution or addition of small amounts of acid or alkali.\nFor 0.001 M NaOH: [OH⁻] = 10⁻³ M.\npOH = -log₁₀(10⁻³) = 3.\npH = 14 - pOH = 14 - 3 = 11.",
        "stepMarking": [
          {
            "step": "Definition of buffer solution",
            "marks": "1 Mark"
          },
          {
            "step": "Compute pOH = 3 -> pH = 11",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always double check that a base gives pH > 7!",
        "commonPitfall": "Reporting pOH = 3 as pH = 3 for NaOH."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Redox Reactions: Balancing by Ion-Electron Method (Acidic Medium)",
        "questionText": "Balance the following redox reaction in acidic medium by half-reaction (ion-electron) method:\nCr₂O₇²⁻(aq) + Fe²⁺(aq) → Cr³⁺(aq) + Fe³⁺(aq)",
        "modelAnswer": "Reduction half: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nOxidation half: Fe²⁺ → Fe³⁺ + e⁻ (multiply by 6 -> 6Fe²⁺ → 6Fe³⁺ + 6e⁻)\nAdding both halves to cancel 6e⁻:\nCr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) → 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l).",
        "stepMarking": [
          {
            "step": "Balanced reduction half with 14H⁺ & 6e⁻",
            "marks": "1.5 Marks"
          },
          {
            "step": "Multiply oxidation half by 6 & add",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Verify BOTH atoms AND net charge on LHS (-2 + 12 + 14 = +24) and RHS (6 + 18 = +24)!",
        "commonPitfall": "Forgetting to multiply Cr³⁺ by 2 when balancing Cr atoms."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Organic Chemistry: Electrophilic vs Nucleophilic Attack & Isomerism",
        "questionText": "Draw all possible structural isomers of Pentane (C₅H₁₂) and give their IUPAC names. State why chain isomerism arises here.",
        "modelAnswer": "Chain isomerism arises when compounds share the same molecular formula but differ in the carbon skeleton.\n1. CH₃–CH₂–CH₂–CH₂–CH₃ -> Pentane (n-pentane)\n2. CH₃–CH(CH₃)–CH₂–CH₃ -> 2-Methylbutane (isopentane)\n3. C(CH₃)₄ -> 2,2-Dimethylpropane (neopentane).",
        "stepMarking": [
          {
            "step": "3 correct structural formulas",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact IUPAC names of all 3 isomers",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Note C(CH₃)₄ IUPAC name is 2,2-dimethylpropane (longest chain is 3 carbons).",
        "commonPitfall": "Drawing 2-ethylpropane (actually identical to 2-methylbutane!)."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Equilibrium: Solubility Product (K_sp) Calculation",
        "questionText": "Define solubility product (K_sp). Calculate the molar solubility of AgCl in water at 298 K if its K_sp = 1.6 × 10⁻¹⁰.",
        "modelAnswer": "K_sp is the product of equilibrium molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, each raised to its stoichiometric coefficient.\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let solubility = s mol/L.\nK_sp = [Ag⁺][Cl⁻] = s × s = s² = 1.6 × 10⁻¹⁰ = 16 × 10⁻¹¹? Better: 1.6 × 10⁻¹⁰ = 160 × 10⁻¹² => s = √(1.6 × 10⁻¹⁰) ≈ 1.265 × 10⁻⁵ mol/L.",
        "stepMarking": [
          {
            "step": "Definition of K_sp",
            "marks": "1 Mark"
          },
          {
            "step": "Set K_sp = s² and solve s = 1.265 × 10⁻⁵ M",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Adjust even power of 10 before taking square root: √(1.6 × 10⁻¹⁰) = √1.6 × 10⁻⁵.",
        "commonPitfall": "Writing K_sp = 4s² instead of s² for 1:1 AB salt."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Some Basic Concepts: Empirical and Molecular Formula",
        "questionText": "An organic compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine by mass. Its molar mass is 98.96 g/mol. Determine its empirical and molecular formulas. (Atomic masses: C = 12, H = 1, Cl = 35.5)",
        "modelAnswer": "Moles per 100 g:\n• C: 24.27 / 12 = 2.02 mol\n• H: 4.07 / 1 = 4.07 mol\n• Cl: 71.65 / 35.5 = 2.02 mol\nSimplest molar ratio (divide by 2.02): C : H : Cl = 1 : 2 : 1.\nEmpirical formula = CH₂Cl.\nEmpirical formula mass = 12 + 2 + 35.5 = 49.5 g/mol.\nn = Molar mass / Empirical mass = 98.96 / 49.5 ≈ 2.\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂.",
        "stepMarking": [
          {
            "step": "Mole calculation & dividing by smallest mole (2.02)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Empirical formula CH₂Cl & mass 49.5",
            "marks": "1 Mark"
          },
          {
            "step": "n = 2 -> Molecular formula C₂H₄Cl₂",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "NCERT textbook solved example — show the tabular mole/ratio calculation cleanly.",
        "commonPitfall": "Rounding 4.07/2.02 = 2.01 incorrectly."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Structure of Atom: Bohr Hydrogen Emission Lines",
        "questionText": "Calculate the wavelength and frequency of light emitted when an electron in a hydrogen atom transitions from n = 4 to n = 2 energy level (R_H = 1.097 × 10⁷ m⁻¹, c = 3 × 10⁸ m/s). Name the spectral series.",
        "modelAnswer": "1/λ = R_H (1/n₁² - 1/n₂²) = 1.097 × 10⁷ (1/2² - 1/4²) = 1.097 × 10⁷ × (3/16)\n= 2.057 × 10⁶ m⁻¹.\nλ = 1 / (2.057 × 10⁶) ≈ 4.86 × 10⁻⁷ m = 486 nm (blue-green visible light).\nFrequency ν = c / λ = 3 × 10⁸ / (4.86 × 10⁻⁷) ≈ 6.17 × 10¹⁴ Hz.\nSpectral series: Balmer series (since n₁ = 2).",
        "stepMarking": [
          {
            "step": "Rydberg formula 1/λ with n₁=2, n₂=4",
            "marks": "1 Mark"
          },
          {
            "step": "λ = 486 nm & ν = 6.17 × 10¹⁴ Hz",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify Balmer series",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Balmer series (n₁ = 2) lies in the visible region!",
        "commonPitfall": "Forgetting to take reciprocal of 1/λ."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Bonding: Hybridisation of SF₆, PCl₅ & Ethyne",
        "questionText": "Using valence bond hybridisation theory, explain the hybridisation state, geometry, and bond angles of:\n(a) CH₄\n(b) PCl₅\n(c) SF₆.",
        "modelAnswer": "(a) CH₄: sp³ hybridisation of C -> Tetrahedral geometry, all bond angles = 109.5°.\n(b) PCl₅: sp³d hybridisation of P -> Trigonal bipyramidal geometry; 3 equatorial bonds at 120° and 2 longer axial bonds at 90° to equatorial plane.\n(c) SF₆: sp³d² hybridisation of S -> Regular Octahedral geometry, all bond angles = 90°.",
        "stepMarking": [
          {
            "step": "(a) CH₄ sp³, tetrahedral, 109.5°",
            "marks": "1 Mark"
          },
          {
            "step": "(b) PCl₅ sp³d, TBP, 120° & 90° (longer axial)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) SF₆ sp³d², octahedral, 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note why axial bonds in PCl₅ are longer/weaker: 3 bond-pair repulsions at 90° vs 2 for equatorial.",
        "commonPitfall": "Writing all angles in PCl₅ as 109.5° or 90°."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Hess's Law Enthalpy Calculation",
        "questionText": "State Hess's Law of Constant Heat Summation. Calculate the standard enthalpy of formation of CH₄(g) from:\n(i) C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ/mol\n(ii) H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ/mol\n(iii) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH° = -890.3 kJ/mol",
        "modelAnswer": "Hess's Law: Total enthalpy change of a reaction is identical whether carried out in one step or multiple steps.\nTarget: C(s) + 2H₂(g) → CH₄(g).\nOperate: Eq(i) + 2×Eq(ii) - Eq(iii):\nΔ_f H°(CH₄) = (-393.5) + 2(-285.8) - (-890.3)\n= -393.5 - 571.6 + 890.3 = -965.1 + 890.3 = -74.8 kJ/mol.",
        "stepMarking": [
          {
            "step": "Statement of Hess's Law",
            "marks": "1 Mark"
          },
          {
            "step": "Target eq + algebraic combination (i) + 2(ii) - (iii)",
            "marks": "1 Mark"
          },
          {
            "step": "Result Δ_f H° = -74.8 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double Eq(ii) because 2 moles of H₂ are needed to form CH₄.",
        "commonPitfall": "Forgetting to multiply -285.8 by 2 or flipping sign of Eq(iii)."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Molecular Orbital Energy Diagram & Bond Order",
        "questionText": "Read the passage and answer:\nMolecular Orbital Theory predicts bond order, magnetic character, and relative stability of diatomic species. Up to N₂ (14 electrons), σ2pz lies ABOVE π2px, π2py due to 2s-2p mixing; from O₂ onwards, σ2pz lies BELOW π2px, π2py.\n\n(a) Write the formula for Bond Order in MOT. (1M)\n(b) Compute the bond orders of O₂, O₂⁺, and O₂⁻. (1.5M)\n(c) Arrange O₂, O₂⁺, and O₂⁻ in increasing order of bond length and bond stability. (1.5M)",
        "modelAnswer": "(a) Bond Order = ½ (N_b - N_a), where N_b = bonding e⁻, N_a = antibonding e⁻.\n(b) O₂: BO = 2.0; O₂⁺ (one e⁻ removed from π*): BO = 2.5; O₂⁻ (one e⁻ added to π*): BO = 1.5.\n(c) Higher bond order => shorter bond & higher stability:\nStability order: O₂⁻ < O₂ < O₂⁺; Bond length order: O₂⁺ < O₂ < O₂⁻.",
        "stepMarking": [
          {
            "step": "(a) Formula ½(Nb - Na)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) BOs 2.0, 2.5, 1.5",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Stability & length orders",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Stability ∝ Bond Order, while Bond Length ∝ 1 / Bond Order!",
        "commonPitfall": "Making bond length order identical to stability order."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Periodic Trends Across Period 2 & 3",
        "questionText": "Read the passage and answer:\nElements show systematic periodicity in atomic radii, ionisation enthalpy, and electronegativity across periods and down groups. Across a period left to right, effective nuclear charge increases while valence shell remains fixed.\n\n(a) Why are cations smaller and anions larger than their parent neutral atoms? (1M)\n(b) Arrange the isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ in increasing order of ionic radii. (1M)\n(c) Why is the second ionisation enthalpy (IE₂) of Sodium far higher than that of Magnesium? (2M)",
        "modelAnswer": "(a) Cations have higher Z_eff per electron (often losing a shell), shrinking radius; anions have extra electron repulsion and lower Z_eff per electron, expanding radius.\n(b) Increasing ionic radius (all have 10 e⁻): Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.\n(c) After losing 1 e⁻, Na⁺ attains a stable noble-gas octet (2s² 2p⁶), requiring massive energy for IE₂, whereas Mg⁺ (3s¹) loses its 2nd electron easily to reach the noble-gas configuration.",
        "stepMarking": [
          {
            "step": "(a) Z_eff / repulsion explanation",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Noble-gas core of Na⁺ vs 3s¹ of Mg⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "For isoelectronic species, higher positive nuclear charge Z -> smaller radius.",
        "commonPitfall": "Reversing ionic radius order of isoelectronic ions."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Hydrocarbons: Benzene Electrophilic Substitution & Arenes",
        "questionText": "(a) Explain why benzene undergoes electrophilic substitution rather than addition reactions despite having three double bonds.\n(b) Write balanced chemical equations for:\n  (i) Nitration of benzene\n  (ii) Friedel-Crafts alkylation with CH₃Cl\n  (iii) Ozonolysis of But-2-ene followed by Zn/H₂O.\n(c) Arrange Ethane, Ethene, and Ethyne in increasing order of C–C bond length.",
        "modelAnswer": "(a) Benzene has 6 delocalised π-electrons forming an exceptionally stable aromatic sextet (resonance energy ~150 kJ/mol). Addition destroys aromaticity, whereas electrophilic substitution preserves the aromatic ring.\n(b) (i) C₆H₆ + conc. HNO₃ --(conc. H₂SO₄, 323-333K)--> C₆H₅NO₂ + H₂O.\n(ii) C₆H₆ + CH₃Cl --(Anhyd. AlCl₃)--> C₆H₅CH₃ (Toluene) + HCl.\n(iii) CH₃–CH=CH–CH₃ + O₃ --(Zn/H₂O)--> 2 CH₃CHO (Ethanal).\n(c) Bond length order: Ethyne (120 pm) < Ethene (134 pm) < Ethane (154 pm).",
        "stepMarking": [
          {
            "step": "(a) Aromaticity & resonance stability preservation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) All 3 organic reactions with reagents/conditions",
            "marks": "2.5 Marks"
          },
          {
            "step": "(c) C≡C < C=C < C-C bond length order",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write \"Anhydrous AlCl₃\" for Friedel-Crafts and \"conc. H₂SO₄\" for nitration.",
        "commonPitfall": "Missing Zn/H₂O reductive cleavage in ozonolysis."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Structure of Atom: Quantum Numbers, Electronic Configuration & Pauli/Hund Rules",
        "questionText": "(a) State (i) Aufbau Principle, (ii) Pauli Exclusion Principle, and (iii) Hund's Rule of Maximum Multiplicity.\n(b) Explain why Chromium (Z = 24) and Copper (Z = 29) have anomalous ground-state electronic configurations ([Ar]3d⁵4s¹ and [Ar]3d¹⁰4s¹).\n(c) List all four quantum numbers for the valence 3d electron of Scandium (Z = 21).",
        "modelAnswer": "(a) (i) Aufbau: Orbitals are filled in increasing order of energy (n + l rule).\n(ii) Pauli: No two electrons in an atom can have the exact same set of all four quantum numbers (max 2 e⁻ per orbital with opposite spins).\n(iii) Hund: Pairing of electrons in degenerate orbitals does not occur until each orbital is singly occupied with parallel spins.\n(b) Half-filled (d⁵) and fully-filled (d¹⁰) subshells acquire extra stability due to symmetrical electron distribution and maximum exchange energy.\n(c) 3d¹ in Sc: n = 3, l = 2, m = -2 (any from -2 to +2), s = +1/2.",
        "stepMarking": [
          {
            "step": "(a) All 3 electronic rules stated accurately",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Symmetrical distribution + exchange energy for Cr & Cu",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Quantum numbers for 3d¹",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include BOTH \"symmetry\" and \"exchange energy\" for Cr and Cu stability.",
        "commonPitfall": "Writing 3d⁴ 4s² for Cr."
      },
      {
        "id": "cbse-c11-chem-2023-set2-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Chemical Equilibrium: Le Chatelier Principle, pH & Ostwald Dilution",
        "questionText": "(a) Calculate the pH of a 0.02 M acetic acid (CH₃COOH) solution if its ionisation constant K_a = 1.8 × 10⁻⁵ (given √3.6 ≈ 1.9).\n(b) State Le Chatelier's Principle and predict the effect of (i) adding inert gas at constant pressure, and (ii) increasing temperature on PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH = +92.5 kJ/mol.",
        "modelAnswer": "(a) [H⁺] = √(K_a × C) = √(1.8 × 10⁻⁵ × 0.02) = √(3.6 × 10⁻⁷) = √(0.36 × 10⁻⁶) = 0.6 × 10⁻³ = 6 × 10⁻⁴ M.\npH = -log₁₀(6 × 10⁻⁴) = 4 - log 6 = 4 - 0.778 = 3.22.\n(b) Le Chatelier: Any change in T, P or concentration shifts equilibrium to counteract the imposed stress.\n(i) Inert gas at constant P increases total volume -> shifts toward MORE moles (forward, 1 -> 2 moles).\n(ii) Endothermic ΔH > 0 -> increasing T shifts equilibrium FORWARD.",
        "stepMarking": [
          {
            "step": "(a) [H⁺] = √(Ka·C) = 6×10⁻⁴ M -> pH = 3.22",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Le Chatelier + both predictions justified",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Distinguish inert gas at constant VOLUME (no shift) vs constant PRESSURE (shifts toward more moles)!",
        "commonPitfall": "Saying inert gas at constant pressure has no effect."
      }
    ]
  },
  {
    "id": "cbse-c11-chem-2022-sqp",
    "title": "CBSE Class 11 Chemistry Official Sample Blueprint (2022-23)",
    "subject": "Chemistry",
    "targetClass": "Class 11",
    "year": 2022,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "SQP-2022-23/043",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 are multiple choice / assertion-reason questions carrying 1 mark each.",
      "Section B: Q17 to Q21 are short answer questions carrying 2 marks each.",
      "Section C: Q22 to Q28 are short answer questions carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c11-chem-2022-sqp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: IUPAC Naming",
        "questionText": "The IUPAC name of CH₃–CH(OH)–CH₂–COOH is:",
        "options": [
          "A) 2-Hydroxybutanoic acid",
          "B) 3-Hydroxybutanoic acid",
          "C) 3-Carboxybutan-2-ol",
          "D) 1-Carboxypropan-2-ol"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -COOH is the principal functional group (gets C-1): C1(COOH)-C2(CH₂)-C3(CH-OH)-C4(CH₃) -> 3-Hydroxybutanoic acid.",
        "stepMarking": [
          {
            "step": "Number from -COOH -> -OH at C3 -> 3-Hydroxybutanoic acid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Carboxylic acid (-COOH) always gets priority over -OH, becoming suffix \"-oic acid\" and prefix \"hydroxy-\".",
        "commonPitfall": "Numbering from the CH₃ end."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: Carbocation Stability",
        "questionText": "Which of the following carbocations is the MOST stable due to hyperconjugation and inductive effect?",
        "options": [
          "A) CH₃⁺",
          "B) CH₃CH₂⁺",
          "C) (CH₃)₂CH⁺",
          "D) (CH₃)₃C⁺"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tertiary butyl carbocation (CH₃)₃C⁺ has 9 α-hydrogens participating in hyperconjugation plus +I effect from 3 methyl groups, giving highest stability (3° > 2° > 1° > CH₃⁺).",
        "stepMarking": [
          {
            "step": "Identify 3° carbocation (9 α-H hyperconjugation)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Count α-hydrogens adjacent to C⁺: 9 > 6 > 3 > 0.",
        "commonPitfall": "Choosing primary carbocation."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Markovnikov Addition & Ozonolysis",
        "questionText": "Reaction of propene (CH₃–CH=CH₂) with HBr in the presence of benzoyl peroxide yields:",
        "options": [
          "A) 2-Bromopropane",
          "B) 1-Bromopropane",
          "C) 1,2-Dibromopropane",
          "D) Propyne"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. In presence of organic peroxide (Kharasch / anti-Markovnikov free-radical mechanism), HBr adds to propene giving 1-bromopropane as the major product.",
        "stepMarking": [
          {
            "step": "Anti-Markovnikov peroxide effect (HBr only) -> 1-bromopropane",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Peroxide effect works ONLY with HBr, NOT with HCl or HI!",
        "commonPitfall": "Applying Markovnikov rule and selecting 2-bromopropane."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Acidic Character of Alkynes",
        "questionText": "Which of the following hydrocarbons reacts with ammoniacal AgNO₃ (Tollens' reagent) to form a white precipitate?",
        "options": [
          "A) But-2-yne",
          "B) But-1-yne",
          "C) Ethene",
          "D) Ethane"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Terminal alkynes (like But-1-yne, CH₃CH₂C≡CH) possess an acidic sp-hybridized C–H hydrogen that reacts with Tollens' reagent.",
        "stepMarking": [
          {
            "step": "Identify terminal alkyne But-1-yne with acidic ≡C-H",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Internal alkynes (like But-2-yne) have no acidic terminal hydrogen and do not react.",
        "commonPitfall": "Selecting But-2-yne."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Some Basic Concepts: Molarity & Dilution",
        "questionText": "What volume of 2 M HCl solution is required to prepare 500 mL of 0.5 M HCl solution?",
        "options": [
          "A) 100 mL",
          "B) 125 mL",
          "C) 250 mL",
          "D) 50 mL"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using dilution law M₁V₁ = M₂V₂: 2 × V₁ = 0.5 × 500 => V₁ = 250/2 = 125 mL.",
        "stepMarking": [
          {
            "step": "Apply M₁V₁ = M₂V₂ -> V₁ = 125 mL",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Volume units can stay in mL on both sides as long as they match.",
        "commonPitfall": "Computing 250 mL without dividing by M₁ = 2."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Quantum Numbers Set Validity",
        "questionText": "Which of the following sets of quantum numbers (n, l, m, s) is NOT permissible for an electron?",
        "options": [
          "A) n = 3, l = 2, m = -2, s = +1/2",
          "B) n = 2, l = 1, m = 0, s = -1/2",
          "C) n = 3, l = 3, m = 0, s = +1/2",
          "D) n = 4, l = 0, m = 0, s = -1/2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Azimuthal quantum number l can only take integer values from 0 to (n - 1). For n = 3, maximum l is 2, so l = 3 is invalid.",
        "stepMarking": [
          {
            "step": "Identify l must satisfy 0 ≤ l ≤ n - 1 -> l = 3 invalid for n = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check 3 rules: 0 ≤ l ≤ n-1, -l ≤ m ≤ +l, s = ±1/2.",
        "commonPitfall": "Allowing l = n."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Number of Radial Nodes",
        "questionText": "The total number of radial (spherical) nodes present in a 4p orbital is:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radial nodes = n - l - 1 = 4 - 1 - 1 = 2 (for 4p: n=4, l=1).",
        "stepMarking": [
          {
            "step": "Radial nodes = n - l - 1 = 4 - 1 - 1 = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.",
        "commonPitfall": "Giving total nodes (n - 1 = 3) when radial nodes are asked."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: First Ionisation Enthalpy Anomaly",
        "questionText": "Among B, C, N, O, the correct increasing order of first ionisation enthalpy (IE₁) is:",
        "options": [
          "A) B < C < N < O",
          "B) B < C < O < N",
          "C) B < O < C < N",
          "D) C < B < O < N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Generally IE₁ increases across Period 2, EXCEPT Nitrogen (2s² 2p³) has a stable half-filled p-subshell, making IE₁(N) > IE₁(O). Order: B < C < O < N.",
        "stepMarking": [
          {
            "step": "Account for half-filled 2p³ stability of Nitrogen -> B < C < O < N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Two classic Period 2 exceptions: IE₁(Be) > IE₁(B) and IE₁(N) > IE₁(O).",
        "commonPitfall": "Following monotonic trend B < C < N < O."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: VSEPR Geometry of ClF₃ / SF₄",
        "questionText": "According to VSEPR theory, the shape of ClF₃ molecule (with 3 bond pairs and 2 lone pairs on central Cl) is:",
        "options": [
          "A) Trigonal planar",
          "B) Pyramidal",
          "C) Bent T-shaped",
          "D) Tetrahedral"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Central Cl has sp³d hybridisation (5 electron pairs -> trigonal bipyramidal geometry) with 2 lone pairs at equatorial positions, giving a bent T-shaped molecular shape.",
        "stepMarking": [
          {
            "step": "Identify 3 bp + 2 lp -> T-shaped geometry",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Lone pairs ALWAYS occupy equatorial positions in sp³d trigonal bipyramidal geometry to minimize lp-bp repulsions at 90°.",
        "commonPitfall": "Placing lone pairs at axial positions giving trigonal planar."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: MOT Bond Order of O₂⁺ and N₂",
        "questionText": "Which of the following species is paramagnetic according to Molecular Orbital Theory (MOT)?",
        "options": [
          "A) N₂",
          "B) O₂²⁻",
          "C) O₂",
          "D) F₂"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. O₂ has 16 electrons with two unpaired electrons in degenerate π*2px¹ π*2py¹ antibonding orbitals, making it paramagnetic (bond order = 2). N₂, O₂²⁻, and F₂ have all electrons paired.",
        "stepMarking": [
          {
            "step": "Identify O₂ due to 2 unpaired electrons in π*2p orbitals",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both O₂ (16 e⁻) and B₂ (10 e⁻) are famously paramagnetic in MOT.",
        "commonPitfall": "Assuming O₂²⁻ (18 e⁻) is paramagnetic."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Spontaneity Criterion ΔG",
        "questionText": "For a chemical process to be spontaneous at ALL temperatures, the signs of ΔH and ΔS must be respectively:",
        "options": [
          "A) ΔH > 0, ΔS < 0",
          "B) ΔH < 0, ΔS > 0",
          "C) ΔH < 0, ΔS < 0",
          "D) ΔH > 0, ΔS > 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. ΔG = ΔH - TΔS. When ΔH < 0 (exothermic) and ΔS > 0 (entropy increases), ΔG is negative at every positive temperature T.",
        "stepMarking": [
          {
            "step": "ΔH < 0 and ΔS > 0 guarantees ΔG < 0 for all T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Spontaneous criterion: ΔG < 0 at constant T & P.",
        "commonPitfall": "Confusing signs of ΔH and ΔS."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Conjugate Acid-Base Pairs",
        "questionText": "The conjugate acid and conjugate base of HSO₄⁻ are respectively:",
        "options": [
          "A) SO₄²⁻ and H₂SO₄",
          "B) H₂SO₄ and SO₄²⁻",
          "C) H₂SO₃ and SO₃²⁻",
          "D) H₃O⁺ and OH⁻"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Adding H⁺ gives conjugate acid H₂SO₄; removing H⁺ gives conjugate base SO₄²⁻.",
        "stepMarking": [
          {
            "step": "Gain H⁺ -> H₂SO₄ (acid); Lose H⁺ -> SO₄²⁻ (base)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Conjugate Acid = species + H⁺; Conjugate Base = species - H⁺.",
        "commonPitfall": "Reversing conjugate acid and conjugate base order."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Atomic Structure: Heisenberg Uncertainty Principle",
        "questionText": "Assertion (A): Heisenberg's uncertainty principle is insignificant in the motion of macroscopic objects like a cricket ball.\nReason (R): The value of Planck's constant h (6.626 × 10⁻³⁴ J·s) is extremely small compared to macroscopic mass values.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Δx·Δv ≥ h/(4πm). For macroscopic mass m ~ 0.1 kg, Δx·Δv ~ 10⁻³³ m²/s, which is negligible.",
        "stepMarking": [
          {
            "step": "Option (A) with h/4πm scaling explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show numerical order ~10⁻³³ for macroscopic objects if asked in 2M.",
        "commonPitfall": "Saying macroscopic balls have zero uncertainty theoretically (it is non-zero, just negligible)."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: Electron Gain Enthalpy of Cl vs F",
        "questionText": "Assertion (A): Chlorine has a more negative electron gain enthalpy than Fluorine.\nReason (R): Fluorine has a very small compact 2p-orbital where incoming electrons suffer strong inter-electronic repulsion.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Adding an electron to compact n=2 shell of F causes strong electron-electron repulsion compared to larger n=3 shell of Cl.",
        "stepMarking": [
          {
            "step": "Option (A) citing compact 2p inter-electronic repulsion in F",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reasoning applies to Oxygen vs Sulphur (Δ_eg H of S is more negative than O).",
        "commonPitfall": "Thinking F has higher negative electron gain enthalpy because it is more electronegative."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: Dipole Moment of NH₃ vs NF₃",
        "questionText": "Assertion (A): The dipole moment of NH₃ (1.47 D) is greater than that of NF₃ (0.23 D).\nReason (R): In NH₃, the orbital dipole of the lone pair points in the same direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Both molecules are pyramidal, but in NH₃ bond dipoles point towards N (reinforcing lone pair dipole), while in NF₃ electronegative F pulls dipoles away from N (opposing lone pair dipole).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting vector directions of N-H vs N-F dipoles",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw small dipole arrows on pyramidal NH₃ and NF₃ for 2M/3M questions.",
        "commonPitfall": "Assuming higher electronegativity of F automatically gives NF₃ a larger dipole moment."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Common Ion Effect",
        "questionText": "Assertion (A): Addition of CH₃COONa to an aqueous solution of CH₃COOH suppresses the ionisation of acetic acid.\nReason (R): CH₃COONa is a strong electrolyte supplying common CH₃COO⁻ ions that shift the equilibrium backward by Le Chatelier's principle.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Common ion effect suppresses dissociation of weak acid CH₃COOH when common acetate ions increase.",
        "stepMarking": [
          {
            "step": "Option (A) identifying Common Ion Effect",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "This mixture (CH₃COOH + CH₃COONa) also forms an Acidic Buffer!",
        "commonPitfall": "Thinking pH decreases instead of increasing when CH₃COONa is added."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Some Basic Concepts: Limiting Reagent",
        "questionText": "50.0 kg of N₂(g) and 10.0 kg of H₂(g) are mixed to produce NH₃(g). Identify the limiting reagent and calculate the mass of NH₃(g) formed.",
        "modelAnswer": "N₂ + 3H₂ → 2NH₃.\nMoles of N₂ = 50,000 / 28 = 1785.7 mol.\nMoles of H₂ = 10,000 / 2.0 = 5000 mol.\n1785.7 mol N₂ requires 3 × 1785.7 = 5357.1 mol H₂, which exceeds available 5000 mol H₂. Thus H₂ is the limiting reagent.\nFrom 3 mol H₂ -> 2 mol NH₃ => 5000 mol H₂ produces (2/3) × 5000 = 3333.3 mol NH₃.\nMass of NH₃ = 3333.3 × 17 g ≈ 56,667 g = 56.67 kg.",
        "stepMarking": [
          {
            "step": "Identify H₂ as limiting reagent using mole ratio",
            "marks": "1 Mark"
          },
          {
            "step": "Calculate 56.67 kg NH₃ formed",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert kg to grams cleanly when dividing by molar mass in g/mol.",
        "commonPitfall": "Assuming N₂ is limiting without comparing 1:3 stoichiometric ratio."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Structure of Atom: de Broglie Wavelength Numerical",
        "questionText": "Calculate the de Broglie wavelength of a ball of mass 0.1 kg moving with a velocity of 10 m/s (h = 6.626 × 10⁻³⁴ J·s).",
        "modelAnswer": "λ = h / (mv) = (6.626 × 10⁻³⁴) / (0.1 × 10) = 6.626 × 10⁻³⁴ m.",
        "stepMarking": [
          {
            "step": "State λ = h/(mv)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute 6.626 × 10⁻³⁴ m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Add 1-line note why wave nature is unobservable at 10⁻³⁴ m scale.",
        "commonPitfall": "Calculation slip with 0.1 × 10 = 1."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Thermodynamics: ΔH and ΔU Relation",
        "questionText": "If water vapour is assumed to be a perfect gas, molar enthalpy change for vaporisation of 1 mol of water at 1 bar and 100°C is 41 kJ/mol. Calculate the internal energy change ΔU when 1 mol of water is vaporised at 1 bar and 100°C (R = 8.314 J/mol·K).",
        "modelAnswer": "H₂O(l) → H₂O(g). Δn_g = 1 - 0 = 1 mol.\nUsing ΔH = ΔU + Δn_g R T => ΔU = ΔH - Δn_g R T.\nT = 100 + 273 = 373 K.\nΔn_g R T = 1 × 8.314 × 373 = 3101.1 J = 3.10 kJ.\nΔU = 41 - 3.10 = 37.90 kJ/mol.",
        "stepMarking": [
          {
            "step": "Identify Δn_g = 1 & formula ΔU = ΔH - Δn_gRT",
            "marks": "1 Mark"
          },
          {
            "step": "Convert J to kJ -> ΔU = 37.90 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert R·T from Joules to kilojoules before subtracting from kJ!",
        "commonPitfall": "Subtracting 3101 directly from 41 without unit matching."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Equilibrium: Buffer Solution & pH Calculation",
        "questionText": "What is a buffer solution? Calculate the pH of a 0.001 M aqueous NaOH solution at 298 K (Kw = 10⁻¹⁴).",
        "modelAnswer": "Buffer solution: A solution that resists change in pH upon dilution or addition of small amounts of acid or alkali.\nFor 0.001 M NaOH: [OH⁻] = 10⁻³ M.\npOH = -log₁₀(10⁻³) = 3.\npH = 14 - pOH = 14 - 3 = 11.",
        "stepMarking": [
          {
            "step": "Definition of buffer solution",
            "marks": "1 Mark"
          },
          {
            "step": "Compute pOH = 3 -> pH = 11",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always double check that a base gives pH > 7!",
        "commonPitfall": "Reporting pOH = 3 as pH = 3 for NaOH."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Organic Chemistry: Inductive vs Resonance Effect",
        "questionText": "Give two differences between Inductive effect (I-effect) and Resonance / Mesomeric effect (R/M-effect).",
        "modelAnswer": "1. Inductive effect involves partial displacement of sigma (σ) electrons along a saturated chain and weakens rapidly after 3 carbons; Resonance effect involves complete delocalisation of pi (π) or lone-pair electrons through conjugated systems.\n2. Resonance effect operates uniformly across the entire conjugated system without fading significantly with distance.",
        "stepMarking": [
          {
            "step": "σ vs π/lone pair electron involvement",
            "marks": "1 Mark"
          },
          {
            "step": "Distance decay vs full conjugation propagation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"permanent effects\" for both I and R effects.",
        "commonPitfall": "Confusing permanent Resonance effect with temporary Electromeric effect."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Organic Chemistry: Electrophilic vs Nucleophilic Attack & Isomerism",
        "questionText": "Draw all possible structural isomers of Pentane (C₅H₁₂) and give their IUPAC names. State why chain isomerism arises here.",
        "modelAnswer": "Chain isomerism arises when compounds share the same molecular formula but differ in the carbon skeleton.\n1. CH₃–CH₂–CH₂–CH₂–CH₃ -> Pentane (n-pentane)\n2. CH₃–CH(CH₃)–CH₂–CH₃ -> 2-Methylbutane (isopentane)\n3. C(CH₃)₄ -> 2,2-Dimethylpropane (neopentane).",
        "stepMarking": [
          {
            "step": "3 correct structural formulas",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact IUPAC names of all 3 isomers",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Note C(CH₃)₄ IUPAC name is 2,2-dimethylpropane (longest chain is 3 carbons).",
        "commonPitfall": "Drawing 2-ethylpropane (actually identical to 2-methylbutane!)."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Equilibrium: Solubility Product (K_sp) Calculation",
        "questionText": "Define solubility product (K_sp). Calculate the molar solubility of AgCl in water at 298 K if its K_sp = 1.6 × 10⁻¹⁰.",
        "modelAnswer": "K_sp is the product of equilibrium molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, each raised to its stoichiometric coefficient.\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let solubility = s mol/L.\nK_sp = [Ag⁺][Cl⁻] = s × s = s² = 1.6 × 10⁻¹⁰ = 16 × 10⁻¹¹? Better: 1.6 × 10⁻¹⁰ = 160 × 10⁻¹² => s = √(1.6 × 10⁻¹⁰) ≈ 1.265 × 10⁻⁵ mol/L.",
        "stepMarking": [
          {
            "step": "Definition of K_sp",
            "marks": "1 Mark"
          },
          {
            "step": "Set K_sp = s² and solve s = 1.265 × 10⁻⁵ M",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Adjust even power of 10 before taking square root: √(1.6 × 10⁻¹⁰) = √1.6 × 10⁻⁵.",
        "commonPitfall": "Writing K_sp = 4s² instead of s² for 1:1 AB salt."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Some Basic Concepts: Empirical and Molecular Formula",
        "questionText": "An organic compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine by mass. Its molar mass is 98.96 g/mol. Determine its empirical and molecular formulas. (Atomic masses: C = 12, H = 1, Cl = 35.5)",
        "modelAnswer": "Moles per 100 g:\n• C: 24.27 / 12 = 2.02 mol\n• H: 4.07 / 1 = 4.07 mol\n• Cl: 71.65 / 35.5 = 2.02 mol\nSimplest molar ratio (divide by 2.02): C : H : Cl = 1 : 2 : 1.\nEmpirical formula = CH₂Cl.\nEmpirical formula mass = 12 + 2 + 35.5 = 49.5 g/mol.\nn = Molar mass / Empirical mass = 98.96 / 49.5 ≈ 2.\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂.",
        "stepMarking": [
          {
            "step": "Mole calculation & dividing by smallest mole (2.02)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Empirical formula CH₂Cl & mass 49.5",
            "marks": "1 Mark"
          },
          {
            "step": "n = 2 -> Molecular formula C₂H₄Cl₂",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "NCERT textbook solved example — show the tabular mole/ratio calculation cleanly.",
        "commonPitfall": "Rounding 4.07/2.02 = 2.01 incorrectly."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Structure of Atom: Bohr Hydrogen Emission Lines",
        "questionText": "Calculate the wavelength and frequency of light emitted when an electron in a hydrogen atom transitions from n = 4 to n = 2 energy level (R_H = 1.097 × 10⁷ m⁻¹, c = 3 × 10⁸ m/s). Name the spectral series.",
        "modelAnswer": "1/λ = R_H (1/n₁² - 1/n₂²) = 1.097 × 10⁷ (1/2² - 1/4²) = 1.097 × 10⁷ × (3/16)\n= 2.057 × 10⁶ m⁻¹.\nλ = 1 / (2.057 × 10⁶) ≈ 4.86 × 10⁻⁷ m = 486 nm (blue-green visible light).\nFrequency ν = c / λ = 3 × 10⁸ / (4.86 × 10⁻⁷) ≈ 6.17 × 10¹⁴ Hz.\nSpectral series: Balmer series (since n₁ = 2).",
        "stepMarking": [
          {
            "step": "Rydberg formula 1/λ with n₁=2, n₂=4",
            "marks": "1 Mark"
          },
          {
            "step": "λ = 486 nm & ν = 6.17 × 10¹⁴ Hz",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify Balmer series",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Balmer series (n₁ = 2) lies in the visible region!",
        "commonPitfall": "Forgetting to take reciprocal of 1/λ."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Bonding: Hybridisation of SF₆, PCl₅ & Ethyne",
        "questionText": "Using valence bond hybridisation theory, explain the hybridisation state, geometry, and bond angles of:\n(a) CH₄\n(b) PCl₅\n(c) SF₆.",
        "modelAnswer": "(a) CH₄: sp³ hybridisation of C -> Tetrahedral geometry, all bond angles = 109.5°.\n(b) PCl₅: sp³d hybridisation of P -> Trigonal bipyramidal geometry; 3 equatorial bonds at 120° and 2 longer axial bonds at 90° to equatorial plane.\n(c) SF₆: sp³d² hybridisation of S -> Regular Octahedral geometry, all bond angles = 90°.",
        "stepMarking": [
          {
            "step": "(a) CH₄ sp³, tetrahedral, 109.5°",
            "marks": "1 Mark"
          },
          {
            "step": "(b) PCl₅ sp³d, TBP, 120° & 90° (longer axial)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) SF₆ sp³d², octahedral, 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note why axial bonds in PCl₅ are longer/weaker: 3 bond-pair repulsions at 90° vs 2 for equatorial.",
        "commonPitfall": "Writing all angles in PCl₅ as 109.5° or 90°."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Hess's Law Enthalpy Calculation",
        "questionText": "State Hess's Law of Constant Heat Summation. Calculate the standard enthalpy of formation of CH₄(g) from:\n(i) C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ/mol\n(ii) H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ/mol\n(iii) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH° = -890.3 kJ/mol",
        "modelAnswer": "Hess's Law: Total enthalpy change of a reaction is identical whether carried out in one step or multiple steps.\nTarget: C(s) + 2H₂(g) → CH₄(g).\nOperate: Eq(i) + 2×Eq(ii) - Eq(iii):\nΔ_f H°(CH₄) = (-393.5) + 2(-285.8) - (-890.3)\n= -393.5 - 571.6 + 890.3 = -965.1 + 890.3 = -74.8 kJ/mol.",
        "stepMarking": [
          {
            "step": "Statement of Hess's Law",
            "marks": "1 Mark"
          },
          {
            "step": "Target eq + algebraic combination (i) + 2(ii) - (iii)",
            "marks": "1 Mark"
          },
          {
            "step": "Result Δ_f H° = -74.8 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double Eq(ii) because 2 moles of H₂ are needed to form CH₄.",
        "commonPitfall": "Forgetting to multiply -285.8 by 2 or flipping sign of Eq(iii)."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Redox Reactions: Balancing by Ion-Electron Method (Acidic Medium)",
        "questionText": "Balance the following redox reaction in acidic medium by half-reaction (ion-electron) method:\nCr₂O₇²⁻(aq) + Fe²⁺(aq) → Cr³⁺(aq) + Fe³⁺(aq)",
        "modelAnswer": "Reduction half: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nOxidation half: Fe²⁺ → Fe³⁺ + e⁻ (multiply by 6 -> 6Fe²⁺ → 6Fe³⁺ + 6e⁻)\nAdding both halves to cancel 6e⁻:\nCr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) → 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l).",
        "stepMarking": [
          {
            "step": "Balanced reduction half with 14H⁺ & 6e⁻",
            "marks": "1.5 Marks"
          },
          {
            "step": "Multiply oxidation half by 6 & add",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Verify BOTH atoms AND net charge on LHS (-2 + 12 + 14 = +24) and RHS (6 + 18 = +24)!",
        "commonPitfall": "Forgetting to multiply Cr³⁺ by 2 when balancing Cr atoms."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Periodic Trends Across Period 2 & 3",
        "questionText": "Read the passage and answer:\nElements show systematic periodicity in atomic radii, ionisation enthalpy, and electronegativity across periods and down groups. Across a period left to right, effective nuclear charge increases while valence shell remains fixed.\n\n(a) Why are cations smaller and anions larger than their parent neutral atoms? (1M)\n(b) Arrange the isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ in increasing order of ionic radii. (1M)\n(c) Why is the second ionisation enthalpy (IE₂) of Sodium far higher than that of Magnesium? (2M)",
        "modelAnswer": "(a) Cations have higher Z_eff per electron (often losing a shell), shrinking radius; anions have extra electron repulsion and lower Z_eff per electron, expanding radius.\n(b) Increasing ionic radius (all have 10 e⁻): Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.\n(c) After losing 1 e⁻, Na⁺ attains a stable noble-gas octet (2s² 2p⁶), requiring massive energy for IE₂, whereas Mg⁺ (3s¹) loses its 2nd electron easily to reach the noble-gas configuration.",
        "stepMarking": [
          {
            "step": "(a) Z_eff / repulsion explanation",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Noble-gas core of Na⁺ vs 3s¹ of Mg⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "For isoelectronic species, higher positive nuclear charge Z -> smaller radius.",
        "commonPitfall": "Reversing ionic radius order of isoelectronic ions."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Molecular Orbital Energy Diagram & Bond Order",
        "questionText": "Read the passage and answer:\nMolecular Orbital Theory predicts bond order, magnetic character, and relative stability of diatomic species. Up to N₂ (14 electrons), σ2pz lies ABOVE π2px, π2py due to 2s-2p mixing; from O₂ onwards, σ2pz lies BELOW π2px, π2py.\n\n(a) Write the formula for Bond Order in MOT. (1M)\n(b) Compute the bond orders of O₂, O₂⁺, and O₂⁻. (1.5M)\n(c) Arrange O₂, O₂⁺, and O₂⁻ in increasing order of bond length and bond stability. (1.5M)",
        "modelAnswer": "(a) Bond Order = ½ (N_b - N_a), where N_b = bonding e⁻, N_a = antibonding e⁻.\n(b) O₂: BO = 2.0; O₂⁺ (one e⁻ removed from π*): BO = 2.5; O₂⁻ (one e⁻ added to π*): BO = 1.5.\n(c) Higher bond order => shorter bond & higher stability:\nStability order: O₂⁻ < O₂ < O₂⁺; Bond length order: O₂⁺ < O₂ < O₂⁻.",
        "stepMarking": [
          {
            "step": "(a) Formula ½(Nb - Na)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) BOs 2.0, 2.5, 1.5",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Stability & length orders",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Stability ∝ Bond Order, while Bond Length ∝ 1 / Bond Order!",
        "commonPitfall": "Making bond length order identical to stability order."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Structure of Atom: Quantum Numbers, Electronic Configuration & Pauli/Hund Rules",
        "questionText": "(a) State (i) Aufbau Principle, (ii) Pauli Exclusion Principle, and (iii) Hund's Rule of Maximum Multiplicity.\n(b) Explain why Chromium (Z = 24) and Copper (Z = 29) have anomalous ground-state electronic configurations ([Ar]3d⁵4s¹ and [Ar]3d¹⁰4s¹).\n(c) List all four quantum numbers for the valence 3d electron of Scandium (Z = 21).",
        "modelAnswer": "(a) (i) Aufbau: Orbitals are filled in increasing order of energy (n + l rule).\n(ii) Pauli: No two electrons in an atom can have the exact same set of all four quantum numbers (max 2 e⁻ per orbital with opposite spins).\n(iii) Hund: Pairing of electrons in degenerate orbitals does not occur until each orbital is singly occupied with parallel spins.\n(b) Half-filled (d⁵) and fully-filled (d¹⁰) subshells acquire extra stability due to symmetrical electron distribution and maximum exchange energy.\n(c) 3d¹ in Sc: n = 3, l = 2, m = -2 (any from -2 to +2), s = +1/2.",
        "stepMarking": [
          {
            "step": "(a) All 3 electronic rules stated accurately",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Symmetrical distribution + exchange energy for Cr & Cu",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Quantum numbers for 3d¹",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include BOTH \"symmetry\" and \"exchange energy\" for Cr and Cu stability.",
        "commonPitfall": "Writing 3d⁴ 4s² for Cr."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Chemical Equilibrium: Le Chatelier Principle, pH & Ostwald Dilution",
        "questionText": "(a) Calculate the pH of a 0.02 M acetic acid (CH₃COOH) solution if its ionisation constant K_a = 1.8 × 10⁻⁵ (given √3.6 ≈ 1.9).\n(b) State Le Chatelier's Principle and predict the effect of (i) adding inert gas at constant pressure, and (ii) increasing temperature on PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH = +92.5 kJ/mol.",
        "modelAnswer": "(a) [H⁺] = √(K_a × C) = √(1.8 × 10⁻⁵ × 0.02) = √(3.6 × 10⁻⁷) = √(0.36 × 10⁻⁶) = 0.6 × 10⁻³ = 6 × 10⁻⁴ M.\npH = -log₁₀(6 × 10⁻⁴) = 4 - log 6 = 4 - 0.778 = 3.22.\n(b) Le Chatelier: Any change in T, P or concentration shifts equilibrium to counteract the imposed stress.\n(i) Inert gas at constant P increases total volume -> shifts toward MORE moles (forward, 1 -> 2 moles).\n(ii) Endothermic ΔH > 0 -> increasing T shifts equilibrium FORWARD.",
        "stepMarking": [
          {
            "step": "(a) [H⁺] = √(Ka·C) = 6×10⁻⁴ M -> pH = 3.22",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Le Chatelier + both predictions justified",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Distinguish inert gas at constant VOLUME (no shift) vs constant PRESSURE (shifts toward more moles)!",
        "commonPitfall": "Saying inert gas at constant pressure has no effect."
      },
      {
        "id": "cbse-c11-chem-2022-sqp-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Hydrocarbons: Benzene Electrophilic Substitution & Arenes",
        "questionText": "(a) Explain why benzene undergoes electrophilic substitution rather than addition reactions despite having three double bonds.\n(b) Write balanced chemical equations for:\n  (i) Nitration of benzene\n  (ii) Friedel-Crafts alkylation with CH₃Cl\n  (iii) Ozonolysis of But-2-ene followed by Zn/H₂O.\n(c) Arrange Ethane, Ethene, and Ethyne in increasing order of C–C bond length.",
        "modelAnswer": "(a) Benzene has 6 delocalised π-electrons forming an exceptionally stable aromatic sextet (resonance energy ~150 kJ/mol). Addition destroys aromaticity, whereas electrophilic substitution preserves the aromatic ring.\n(b) (i) C₆H₆ + conc. HNO₃ --(conc. H₂SO₄, 323-333K)--> C₆H₅NO₂ + H₂O.\n(ii) C₆H₆ + CH₃Cl --(Anhyd. AlCl₃)--> C₆H₅CH₃ (Toluene) + HCl.\n(iii) CH₃–CH=CH–CH₃ + O₃ --(Zn/H₂O)--> 2 CH₃CHO (Ethanal).\n(c) Bond length order: Ethyne (120 pm) < Ethene (134 pm) < Ethane (154 pm).",
        "stepMarking": [
          {
            "step": "(a) Aromaticity & resonance stability preservation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) All 3 organic reactions with reagents/conditions",
            "marks": "2.5 Marks"
          },
          {
            "step": "(c) C≡C < C=C < C-C bond length order",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write \"Anhydrous AlCl₃\" for Friedel-Crafts and \"conc. H₂SO₄\" for nitration.",
        "commonPitfall": "Missing Zn/H₂O reductive cleavage in ozonolysis."
      }
    ]
  },
  {
    "id": "cbse-c11-chem-2024-comp",
    "title": "CBSE Class 11 Chemistry Re-Exam / Supplementary Paper (2024)",
    "subject": "Chemistry",
    "targetClass": "Class 11",
    "year": 2024,
    "paperType": "BOARD_EXAM",
    "paperCode": "CBSE/C11/CHE/COMP24",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "EASY",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 are multiple choice / assertion-reason questions carrying 1 mark each.",
      "Section B: Q17 to Q21 are short answer questions carrying 2 marks each.",
      "Section C: Q22 to Q28 are short answer questions carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c11-chem-2024-comp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Markovnikov Addition & Ozonolysis",
        "questionText": "Reaction of propene (CH₃–CH=CH₂) with HBr in the presence of benzoyl peroxide yields:",
        "options": [
          "A) 2-Bromopropane",
          "B) 1-Bromopropane",
          "C) 1,2-Dibromopropane",
          "D) Propyne"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. In presence of organic peroxide (Kharasch / anti-Markovnikov free-radical mechanism), HBr adds to propene giving 1-bromopropane as the major product.",
        "stepMarking": [
          {
            "step": "Anti-Markovnikov peroxide effect (HBr only) -> 1-bromopropane",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Peroxide effect works ONLY with HBr, NOT with HCl or HI!",
        "commonPitfall": "Applying Markovnikov rule and selecting 2-bromopropane."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Hydrocarbons: Acidic Character of Alkynes",
        "questionText": "Which of the following hydrocarbons reacts with ammoniacal AgNO₃ (Tollens' reagent) to form a white precipitate?",
        "options": [
          "A) But-2-yne",
          "B) But-1-yne",
          "C) Ethene",
          "D) Ethane"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Terminal alkynes (like But-1-yne, CH₃CH₂C≡CH) possess an acidic sp-hybridized C–H hydrogen that reacts with Tollens' reagent.",
        "stepMarking": [
          {
            "step": "Identify terminal alkyne But-1-yne with acidic ≡C-H",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Internal alkynes (like But-2-yne) have no acidic terminal hydrogen and do not react.",
        "commonPitfall": "Selecting But-2-yne."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Some Basic Concepts: Molarity & Dilution",
        "questionText": "What volume of 2 M HCl solution is required to prepare 500 mL of 0.5 M HCl solution?",
        "options": [
          "A) 100 mL",
          "B) 125 mL",
          "C) 250 mL",
          "D) 50 mL"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using dilution law M₁V₁ = M₂V₂: 2 × V₁ = 0.5 × 500 => V₁ = 250/2 = 125 mL.",
        "stepMarking": [
          {
            "step": "Apply M₁V₁ = M₂V₂ -> V₁ = 125 mL",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Volume units can stay in mL on both sides as long as they match.",
        "commonPitfall": "Computing 250 mL without dividing by M₁ = 2."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Quantum Numbers Set Validity",
        "questionText": "Which of the following sets of quantum numbers (n, l, m, s) is NOT permissible for an electron?",
        "options": [
          "A) n = 3, l = 2, m = -2, s = +1/2",
          "B) n = 2, l = 1, m = 0, s = -1/2",
          "C) n = 3, l = 3, m = 0, s = +1/2",
          "D) n = 4, l = 0, m = 0, s = -1/2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Azimuthal quantum number l can only take integer values from 0 to (n - 1). For n = 3, maximum l is 2, so l = 3 is invalid.",
        "stepMarking": [
          {
            "step": "Identify l must satisfy 0 ≤ l ≤ n - 1 -> l = 3 invalid for n = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check 3 rules: 0 ≤ l ≤ n-1, -l ≤ m ≤ +l, s = ±1/2.",
        "commonPitfall": "Allowing l = n."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Number of Radial Nodes",
        "questionText": "The total number of radial (spherical) nodes present in a 4p orbital is:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radial nodes = n - l - 1 = 4 - 1 - 1 = 2 (for 4p: n=4, l=1).",
        "stepMarking": [
          {
            "step": "Radial nodes = n - l - 1 = 4 - 1 - 1 = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.",
        "commonPitfall": "Giving total nodes (n - 1 = 3) when radial nodes are asked."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: First Ionisation Enthalpy Anomaly",
        "questionText": "Among B, C, N, O, the correct increasing order of first ionisation enthalpy (IE₁) is:",
        "options": [
          "A) B < C < N < O",
          "B) B < C < O < N",
          "C) B < O < C < N",
          "D) C < B < O < N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Generally IE₁ increases across Period 2, EXCEPT Nitrogen (2s² 2p³) has a stable half-filled p-subshell, making IE₁(N) > IE₁(O). Order: B < C < O < N.",
        "stepMarking": [
          {
            "step": "Account for half-filled 2p³ stability of Nitrogen -> B < C < O < N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Two classic Period 2 exceptions: IE₁(Be) > IE₁(B) and IE₁(N) > IE₁(O).",
        "commonPitfall": "Following monotonic trend B < C < N < O."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: VSEPR Geometry of ClF₃ / SF₄",
        "questionText": "According to VSEPR theory, the shape of ClF₃ molecule (with 3 bond pairs and 2 lone pairs on central Cl) is:",
        "options": [
          "A) Trigonal planar",
          "B) Pyramidal",
          "C) Bent T-shaped",
          "D) Tetrahedral"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Central Cl has sp³d hybridisation (5 electron pairs -> trigonal bipyramidal geometry) with 2 lone pairs at equatorial positions, giving a bent T-shaped molecular shape.",
        "stepMarking": [
          {
            "step": "Identify 3 bp + 2 lp -> T-shaped geometry",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Lone pairs ALWAYS occupy equatorial positions in sp³d trigonal bipyramidal geometry to minimize lp-bp repulsions at 90°.",
        "commonPitfall": "Placing lone pairs at axial positions giving trigonal planar."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: MOT Bond Order of O₂⁺ and N₂",
        "questionText": "Which of the following species is paramagnetic according to Molecular Orbital Theory (MOT)?",
        "options": [
          "A) N₂",
          "B) O₂²⁻",
          "C) O₂",
          "D) F₂"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. O₂ has 16 electrons with two unpaired electrons in degenerate π*2px¹ π*2py¹ antibonding orbitals, making it paramagnetic (bond order = 2). N₂, O₂²⁻, and F₂ have all electrons paired.",
        "stepMarking": [
          {
            "step": "Identify O₂ due to 2 unpaired electrons in π*2p orbitals",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both O₂ (16 e⁻) and B₂ (10 e⁻) are famously paramagnetic in MOT.",
        "commonPitfall": "Assuming O₂²⁻ (18 e⁻) is paramagnetic."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Spontaneity Criterion ΔG",
        "questionText": "For a chemical process to be spontaneous at ALL temperatures, the signs of ΔH and ΔS must be respectively:",
        "options": [
          "A) ΔH > 0, ΔS < 0",
          "B) ΔH < 0, ΔS > 0",
          "C) ΔH < 0, ΔS < 0",
          "D) ΔH > 0, ΔS > 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. ΔG = ΔH - TΔS. When ΔH < 0 (exothermic) and ΔS > 0 (entropy increases), ΔG is negative at every positive temperature T.",
        "stepMarking": [
          {
            "step": "ΔH < 0 and ΔS > 0 guarantees ΔG < 0 for all T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Spontaneous criterion: ΔG < 0 at constant T & P.",
        "commonPitfall": "Confusing signs of ΔH and ΔS."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Conjugate Acid-Base Pairs",
        "questionText": "The conjugate acid and conjugate base of HSO₄⁻ are respectively:",
        "options": [
          "A) SO₄²⁻ and H₂SO₄",
          "B) H₂SO₄ and SO₄²⁻",
          "C) H₂SO₃ and SO₃²⁻",
          "D) H₃O⁺ and OH⁻"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Adding H⁺ gives conjugate acid H₂SO₄; removing H⁺ gives conjugate base SO₄²⁻.",
        "stepMarking": [
          {
            "step": "Gain H⁺ -> H₂SO₄ (acid); Lose H⁺ -> SO₄²⁻ (base)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Conjugate Acid = species + H⁺; Conjugate Base = species - H⁺.",
        "commonPitfall": "Reversing conjugate acid and conjugate base order."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Le Chatelier Principle (Haber Process)",
        "questionText": "In the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.4 kJ/mol, forward yield of ammonia is favoured by:",
        "options": [
          "A) High temperature and low pressure",
          "B) Low temperature and high pressure",
          "C) Low temperature and low pressure",
          "D) Addition of inert gas at constant volume"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The reaction is exothermic (ΔH < 0 -> favoured by low T) and proceeds with decrease in gaseous moles (4 -> 2 -> favoured by high P).",
        "stepMarking": [
          {
            "step": "Exothermic -> low T; fewer product moles -> high P",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count Δn_g = moles_products - moles_reactants for gaseous pressure effect.",
        "commonPitfall": "Choosing high temperature thinking it boosts rate (rate ≠ equilibrium yield)."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Redox Reactions: Oxidation State Calculation",
        "questionText": "The oxidation numbers of Cr in CrO₅ and S in H₂SO₅ (Caro's acid) are respectively:",
        "options": [
          "A) +10 and +8",
          "B) +6 and +6",
          "C) +6 and +8",
          "D) +5 and +6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Both contain peroxide linkages (-O-O- where O is -1): CrO₅ has butterfly structure with 2 peroxide linkages (4 O at -1, 1 O at -2) => Cr = +6. H₂SO₅ has 1 peroxide linkage => S = +6.",
        "stepMarking": [
          {
            "step": "Account for peroxide (-1) oxygen linkages -> +6 and +6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Maximum oxidation state of an element cannot exceed its group valence electrons (Cr = 6, S = 6)!",
        "commonPitfall": "Naively assigning -2 to every oxygen and writing +10 or +8."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: Electron Gain Enthalpy of Cl vs F",
        "questionText": "Assertion (A): Chlorine has a more negative electron gain enthalpy than Fluorine.\nReason (R): Fluorine has a very small compact 2p-orbital where incoming electrons suffer strong inter-electronic repulsion.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Adding an electron to compact n=2 shell of F causes strong electron-electron repulsion compared to larger n=3 shell of Cl.",
        "stepMarking": [
          {
            "step": "Option (A) citing compact 2p inter-electronic repulsion in F",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reasoning applies to Oxygen vs Sulphur (Δ_eg H of S is more negative than O).",
        "commonPitfall": "Thinking F has higher negative electron gain enthalpy because it is more electronegative."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: Dipole Moment of NH₃ vs NF₃",
        "questionText": "Assertion (A): The dipole moment of NH₃ (1.47 D) is greater than that of NF₃ (0.23 D).\nReason (R): In NH₃, the orbital dipole of the lone pair points in the same direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Both molecules are pyramidal, but in NH₃ bond dipoles point towards N (reinforcing lone pair dipole), while in NF₃ electronegative F pulls dipoles away from N (opposing lone pair dipole).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting vector directions of N-H vs N-F dipoles",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw small dipole arrows on pyramidal NH₃ and NF₃ for 2M/3M questions.",
        "commonPitfall": "Assuming higher electronegativity of F automatically gives NF₃ a larger dipole moment."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Common Ion Effect",
        "questionText": "Assertion (A): Addition of CH₃COONa to an aqueous solution of CH₃COOH suppresses the ionisation of acetic acid.\nReason (R): CH₃COONa is a strong electrolyte supplying common CH₃COO⁻ ions that shift the equilibrium backward by Le Chatelier's principle.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Common ion effect suppresses dissociation of weak acid CH₃COOH when common acetate ions increase.",
        "stepMarking": [
          {
            "step": "Option (A) identifying Common Ion Effect",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "This mixture (CH₃COOH + CH₃COONa) also forms an Acidic Buffer!",
        "commonPitfall": "Thinking pH decreases instead of increasing when CH₃COONa is added."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Atomic Structure: Heisenberg Uncertainty Principle",
        "questionText": "Assertion (A): Heisenberg's uncertainty principle is insignificant in the motion of macroscopic objects like a cricket ball.\nReason (R): The value of Planck's constant h (6.626 × 10⁻³⁴ J·s) is extremely small compared to macroscopic mass values.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Δx·Δv ≥ h/(4πm). For macroscopic mass m ~ 0.1 kg, Δx·Δv ~ 10⁻³³ m²/s, which is negligible.",
        "stepMarking": [
          {
            "step": "Option (A) with h/4πm scaling explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show numerical order ~10⁻³³ for macroscopic objects if asked in 2M.",
        "commonPitfall": "Saying macroscopic balls have zero uncertainty theoretically (it is non-zero, just negligible)."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Structure of Atom: de Broglie Wavelength Numerical",
        "questionText": "Calculate the de Broglie wavelength of a ball of mass 0.1 kg moving with a velocity of 10 m/s (h = 6.626 × 10⁻³⁴ J·s).",
        "modelAnswer": "λ = h / (mv) = (6.626 × 10⁻³⁴) / (0.1 × 10) = 6.626 × 10⁻³⁴ m.",
        "stepMarking": [
          {
            "step": "State λ = h/(mv)",
            "marks": "1 Mark"
          },
          {
            "step": "Compute 6.626 × 10⁻³⁴ m",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Add 1-line note why wave nature is unobservable at 10⁻³⁴ m scale.",
        "commonPitfall": "Calculation slip with 0.1 × 10 = 1."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Thermodynamics: ΔH and ΔU Relation",
        "questionText": "If water vapour is assumed to be a perfect gas, molar enthalpy change for vaporisation of 1 mol of water at 1 bar and 100°C is 41 kJ/mol. Calculate the internal energy change ΔU when 1 mol of water is vaporised at 1 bar and 100°C (R = 8.314 J/mol·K).",
        "modelAnswer": "H₂O(l) → H₂O(g). Δn_g = 1 - 0 = 1 mol.\nUsing ΔH = ΔU + Δn_g R T => ΔU = ΔH - Δn_g R T.\nT = 100 + 273 = 373 K.\nΔn_g R T = 1 × 8.314 × 373 = 3101.1 J = 3.10 kJ.\nΔU = 41 - 3.10 = 37.90 kJ/mol.",
        "stepMarking": [
          {
            "step": "Identify Δn_g = 1 & formula ΔU = ΔH - Δn_gRT",
            "marks": "1 Mark"
          },
          {
            "step": "Convert J to kJ -> ΔU = 37.90 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert R·T from Joules to kilojoules before subtracting from kJ!",
        "commonPitfall": "Subtracting 3101 directly from 41 without unit matching."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Equilibrium: Buffer Solution & pH Calculation",
        "questionText": "What is a buffer solution? Calculate the pH of a 0.001 M aqueous NaOH solution at 298 K (Kw = 10⁻¹⁴).",
        "modelAnswer": "Buffer solution: A solution that resists change in pH upon dilution or addition of small amounts of acid or alkali.\nFor 0.001 M NaOH: [OH⁻] = 10⁻³ M.\npOH = -log₁₀(10⁻³) = 3.\npH = 14 - pOH = 14 - 3 = 11.",
        "stepMarking": [
          {
            "step": "Definition of buffer solution",
            "marks": "1 Mark"
          },
          {
            "step": "Compute pOH = 3 -> pH = 11",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always double check that a base gives pH > 7!",
        "commonPitfall": "Reporting pOH = 3 as pH = 3 for NaOH."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Organic Chemistry: Inductive vs Resonance Effect",
        "questionText": "Give two differences between Inductive effect (I-effect) and Resonance / Mesomeric effect (R/M-effect).",
        "modelAnswer": "1. Inductive effect involves partial displacement of sigma (σ) electrons along a saturated chain and weakens rapidly after 3 carbons; Resonance effect involves complete delocalisation of pi (π) or lone-pair electrons through conjugated systems.\n2. Resonance effect operates uniformly across the entire conjugated system without fading significantly with distance.",
        "stepMarking": [
          {
            "step": "σ vs π/lone pair electron involvement",
            "marks": "1 Mark"
          },
          {
            "step": "Distance decay vs full conjugation propagation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"permanent effects\" for both I and R effects.",
        "commonPitfall": "Confusing permanent Resonance effect with temporary Electromeric effect."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Hydrocarbons: Wurtz Reaction Limitation",
        "questionText": "Write the chemical equation for Wurtz reaction using bromoethane. Why is Wurtz reaction NOT suitable for preparing alkanes with an odd number of carbon atoms?",
        "modelAnswer": "Equation: 2 CH₃CH₂Br + 2Na --(Dry Ether)--> CH₃–CH₂–CH₂–CH₃ (n-Butane) + 2NaBr.\nLimitation: Preparing an odd-carbon alkane requires two different alkyl halides (R-X and R'-X), producing a mixture of three alkanes (R-R, R'-R', and R-R') with close boiling points that are difficult to separate.",
        "stepMarking": [
          {
            "step": "Balanced Wurtz equation in Dry Ether -> Butane",
            "marks": "1 Mark"
          },
          {
            "step": "Mixture of 3 alkanes problem explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify \"Dry Ether\" over arrow in Wurtz reaction.",
        "commonPitfall": "Forgetting Na reacts violently with moisture if dry ether is absent."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Equilibrium: Solubility Product (K_sp) Calculation",
        "questionText": "Define solubility product (K_sp). Calculate the molar solubility of AgCl in water at 298 K if its K_sp = 1.6 × 10⁻¹⁰.",
        "modelAnswer": "K_sp is the product of equilibrium molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, each raised to its stoichiometric coefficient.\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let solubility = s mol/L.\nK_sp = [Ag⁺][Cl⁻] = s × s = s² = 1.6 × 10⁻¹⁰ = 16 × 10⁻¹¹? Better: 1.6 × 10⁻¹⁰ = 160 × 10⁻¹² => s = √(1.6 × 10⁻¹⁰) ≈ 1.265 × 10⁻⁵ mol/L.",
        "stepMarking": [
          {
            "step": "Definition of K_sp",
            "marks": "1 Mark"
          },
          {
            "step": "Set K_sp = s² and solve s = 1.265 × 10⁻⁵ M",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Adjust even power of 10 before taking square root: √(1.6 × 10⁻¹⁰) = √1.6 × 10⁻⁵.",
        "commonPitfall": "Writing K_sp = 4s² instead of s² for 1:1 AB salt."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Some Basic Concepts: Empirical and Molecular Formula",
        "questionText": "An organic compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine by mass. Its molar mass is 98.96 g/mol. Determine its empirical and molecular formulas. (Atomic masses: C = 12, H = 1, Cl = 35.5)",
        "modelAnswer": "Moles per 100 g:\n• C: 24.27 / 12 = 2.02 mol\n• H: 4.07 / 1 = 4.07 mol\n• Cl: 71.65 / 35.5 = 2.02 mol\nSimplest molar ratio (divide by 2.02): C : H : Cl = 1 : 2 : 1.\nEmpirical formula = CH₂Cl.\nEmpirical formula mass = 12 + 2 + 35.5 = 49.5 g/mol.\nn = Molar mass / Empirical mass = 98.96 / 49.5 ≈ 2.\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂.",
        "stepMarking": [
          {
            "step": "Mole calculation & dividing by smallest mole (2.02)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Empirical formula CH₂Cl & mass 49.5",
            "marks": "1 Mark"
          },
          {
            "step": "n = 2 -> Molecular formula C₂H₄Cl₂",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "NCERT textbook solved example — show the tabular mole/ratio calculation cleanly.",
        "commonPitfall": "Rounding 4.07/2.02 = 2.01 incorrectly."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Structure of Atom: Bohr Hydrogen Emission Lines",
        "questionText": "Calculate the wavelength and frequency of light emitted when an electron in a hydrogen atom transitions from n = 4 to n = 2 energy level (R_H = 1.097 × 10⁷ m⁻¹, c = 3 × 10⁸ m/s). Name the spectral series.",
        "modelAnswer": "1/λ = R_H (1/n₁² - 1/n₂²) = 1.097 × 10⁷ (1/2² - 1/4²) = 1.097 × 10⁷ × (3/16)\n= 2.057 × 10⁶ m⁻¹.\nλ = 1 / (2.057 × 10⁶) ≈ 4.86 × 10⁻⁷ m = 486 nm (blue-green visible light).\nFrequency ν = c / λ = 3 × 10⁸ / (4.86 × 10⁻⁷) ≈ 6.17 × 10¹⁴ Hz.\nSpectral series: Balmer series (since n₁ = 2).",
        "stepMarking": [
          {
            "step": "Rydberg formula 1/λ with n₁=2, n₂=4",
            "marks": "1 Mark"
          },
          {
            "step": "λ = 486 nm & ν = 6.17 × 10¹⁴ Hz",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify Balmer series",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Balmer series (n₁ = 2) lies in the visible region!",
        "commonPitfall": "Forgetting to take reciprocal of 1/λ."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Bonding: Hybridisation of SF₆, PCl₅ & Ethyne",
        "questionText": "Using valence bond hybridisation theory, explain the hybridisation state, geometry, and bond angles of:\n(a) CH₄\n(b) PCl₅\n(c) SF₆.",
        "modelAnswer": "(a) CH₄: sp³ hybridisation of C -> Tetrahedral geometry, all bond angles = 109.5°.\n(b) PCl₅: sp³d hybridisation of P -> Trigonal bipyramidal geometry; 3 equatorial bonds at 120° and 2 longer axial bonds at 90° to equatorial plane.\n(c) SF₆: sp³d² hybridisation of S -> Regular Octahedral geometry, all bond angles = 90°.",
        "stepMarking": [
          {
            "step": "(a) CH₄ sp³, tetrahedral, 109.5°",
            "marks": "1 Mark"
          },
          {
            "step": "(b) PCl₅ sp³d, TBP, 120° & 90° (longer axial)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) SF₆ sp³d², octahedral, 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note why axial bonds in PCl₅ are longer/weaker: 3 bond-pair repulsions at 90° vs 2 for equatorial.",
        "commonPitfall": "Writing all angles in PCl₅ as 109.5° or 90°."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Hess's Law Enthalpy Calculation",
        "questionText": "State Hess's Law of Constant Heat Summation. Calculate the standard enthalpy of formation of CH₄(g) from:\n(i) C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ/mol\n(ii) H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ/mol\n(iii) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH° = -890.3 kJ/mol",
        "modelAnswer": "Hess's Law: Total enthalpy change of a reaction is identical whether carried out in one step or multiple steps.\nTarget: C(s) + 2H₂(g) → CH₄(g).\nOperate: Eq(i) + 2×Eq(ii) - Eq(iii):\nΔ_f H°(CH₄) = (-393.5) + 2(-285.8) - (-890.3)\n= -393.5 - 571.6 + 890.3 = -965.1 + 890.3 = -74.8 kJ/mol.",
        "stepMarking": [
          {
            "step": "Statement of Hess's Law",
            "marks": "1 Mark"
          },
          {
            "step": "Target eq + algebraic combination (i) + 2(ii) - (iii)",
            "marks": "1 Mark"
          },
          {
            "step": "Result Δ_f H° = -74.8 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double Eq(ii) because 2 moles of H₂ are needed to form CH₄.",
        "commonPitfall": "Forgetting to multiply -285.8 by 2 or flipping sign of Eq(iii)."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Redox Reactions: Balancing by Ion-Electron Method (Acidic Medium)",
        "questionText": "Balance the following redox reaction in acidic medium by half-reaction (ion-electron) method:\nCr₂O₇²⁻(aq) + Fe²⁺(aq) → Cr³⁺(aq) + Fe³⁺(aq)",
        "modelAnswer": "Reduction half: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nOxidation half: Fe²⁺ → Fe³⁺ + e⁻ (multiply by 6 -> 6Fe²⁺ → 6Fe³⁺ + 6e⁻)\nAdding both halves to cancel 6e⁻:\nCr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) → 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l).",
        "stepMarking": [
          {
            "step": "Balanced reduction half with 14H⁺ & 6e⁻",
            "marks": "1.5 Marks"
          },
          {
            "step": "Multiply oxidation half by 6 & add",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Verify BOTH atoms AND net charge on LHS (-2 + 12 + 14 = +24) and RHS (6 + 18 = +24)!",
        "commonPitfall": "Forgetting to multiply Cr³⁺ by 2 when balancing Cr atoms."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Organic Chemistry: Electrophilic vs Nucleophilic Attack & Isomerism",
        "questionText": "Draw all possible structural isomers of Pentane (C₅H₁₂) and give their IUPAC names. State why chain isomerism arises here.",
        "modelAnswer": "Chain isomerism arises when compounds share the same molecular formula but differ in the carbon skeleton.\n1. CH₃–CH₂–CH₂–CH₂–CH₃ -> Pentane (n-pentane)\n2. CH₃–CH(CH₃)–CH₂–CH₃ -> 2-Methylbutane (isopentane)\n3. C(CH₃)₄ -> 2,2-Dimethylpropane (neopentane).",
        "stepMarking": [
          {
            "step": "3 correct structural formulas",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact IUPAC names of all 3 isomers",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Note C(CH₃)₄ IUPAC name is 2,2-dimethylpropane (longest chain is 3 carbons).",
        "commonPitfall": "Drawing 2-ethylpropane (actually identical to 2-methylbutane!)."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Molecular Orbital Energy Diagram & Bond Order",
        "questionText": "Read the passage and answer:\nMolecular Orbital Theory predicts bond order, magnetic character, and relative stability of diatomic species. Up to N₂ (14 electrons), σ2pz lies ABOVE π2px, π2py due to 2s-2p mixing; from O₂ onwards, σ2pz lies BELOW π2px, π2py.\n\n(a) Write the formula for Bond Order in MOT. (1M)\n(b) Compute the bond orders of O₂, O₂⁺, and O₂⁻. (1.5M)\n(c) Arrange O₂, O₂⁺, and O₂⁻ in increasing order of bond length and bond stability. (1.5M)",
        "modelAnswer": "(a) Bond Order = ½ (N_b - N_a), where N_b = bonding e⁻, N_a = antibonding e⁻.\n(b) O₂: BO = 2.0; O₂⁺ (one e⁻ removed from π*): BO = 2.5; O₂⁻ (one e⁻ added to π*): BO = 1.5.\n(c) Higher bond order => shorter bond & higher stability:\nStability order: O₂⁻ < O₂ < O₂⁺; Bond length order: O₂⁺ < O₂ < O₂⁻.",
        "stepMarking": [
          {
            "step": "(a) Formula ½(Nb - Na)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) BOs 2.0, 2.5, 1.5",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Stability & length orders",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Stability ∝ Bond Order, while Bond Length ∝ 1 / Bond Order!",
        "commonPitfall": "Making bond length order identical to stability order."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Periodic Trends Across Period 2 & 3",
        "questionText": "Read the passage and answer:\nElements show systematic periodicity in atomic radii, ionisation enthalpy, and electronegativity across periods and down groups. Across a period left to right, effective nuclear charge increases while valence shell remains fixed.\n\n(a) Why are cations smaller and anions larger than their parent neutral atoms? (1M)\n(b) Arrange the isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ in increasing order of ionic radii. (1M)\n(c) Why is the second ionisation enthalpy (IE₂) of Sodium far higher than that of Magnesium? (2M)",
        "modelAnswer": "(a) Cations have higher Z_eff per electron (often losing a shell), shrinking radius; anions have extra electron repulsion and lower Z_eff per electron, expanding radius.\n(b) Increasing ionic radius (all have 10 e⁻): Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.\n(c) After losing 1 e⁻, Na⁺ attains a stable noble-gas octet (2s² 2p⁶), requiring massive energy for IE₂, whereas Mg⁺ (3s¹) loses its 2nd electron easily to reach the noble-gas configuration.",
        "stepMarking": [
          {
            "step": "(a) Z_eff / repulsion explanation",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Noble-gas core of Na⁺ vs 3s¹ of Mg⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "For isoelectronic species, higher positive nuclear charge Z -> smaller radius.",
        "commonPitfall": "Reversing ionic radius order of isoelectronic ions."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Chemical Equilibrium: Le Chatelier Principle, pH & Ostwald Dilution",
        "questionText": "(a) Calculate the pH of a 0.02 M acetic acid (CH₃COOH) solution if its ionisation constant K_a = 1.8 × 10⁻⁵ (given √3.6 ≈ 1.9).\n(b) State Le Chatelier's Principle and predict the effect of (i) adding inert gas at constant pressure, and (ii) increasing temperature on PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH = +92.5 kJ/mol.",
        "modelAnswer": "(a) [H⁺] = √(K_a × C) = √(1.8 × 10⁻⁵ × 0.02) = √(3.6 × 10⁻⁷) = √(0.36 × 10⁻⁶) = 0.6 × 10⁻³ = 6 × 10⁻⁴ M.\npH = -log₁₀(6 × 10⁻⁴) = 4 - log 6 = 4 - 0.778 = 3.22.\n(b) Le Chatelier: Any change in T, P or concentration shifts equilibrium to counteract the imposed stress.\n(i) Inert gas at constant P increases total volume -> shifts toward MORE moles (forward, 1 -> 2 moles).\n(ii) Endothermic ΔH > 0 -> increasing T shifts equilibrium FORWARD.",
        "stepMarking": [
          {
            "step": "(a) [H⁺] = √(Ka·C) = 6×10⁻⁴ M -> pH = 3.22",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Le Chatelier + both predictions justified",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Distinguish inert gas at constant VOLUME (no shift) vs constant PRESSURE (shifts toward more moles)!",
        "commonPitfall": "Saying inert gas at constant pressure has no effect."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Hydrocarbons: Benzene Electrophilic Substitution & Arenes",
        "questionText": "(a) Explain why benzene undergoes electrophilic substitution rather than addition reactions despite having three double bonds.\n(b) Write balanced chemical equations for:\n  (i) Nitration of benzene\n  (ii) Friedel-Crafts alkylation with CH₃Cl\n  (iii) Ozonolysis of But-2-ene followed by Zn/H₂O.\n(c) Arrange Ethane, Ethene, and Ethyne in increasing order of C–C bond length.",
        "modelAnswer": "(a) Benzene has 6 delocalised π-electrons forming an exceptionally stable aromatic sextet (resonance energy ~150 kJ/mol). Addition destroys aromaticity, whereas electrophilic substitution preserves the aromatic ring.\n(b) (i) C₆H₆ + conc. HNO₃ --(conc. H₂SO₄, 323-333K)--> C₆H₅NO₂ + H₂O.\n(ii) C₆H₆ + CH₃Cl --(Anhyd. AlCl₃)--> C₆H₅CH₃ (Toluene) + HCl.\n(iii) CH₃–CH=CH–CH₃ + O₃ --(Zn/H₂O)--> 2 CH₃CHO (Ethanal).\n(c) Bond length order: Ethyne (120 pm) < Ethene (134 pm) < Ethane (154 pm).",
        "stepMarking": [
          {
            "step": "(a) Aromaticity & resonance stability preservation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) All 3 organic reactions with reagents/conditions",
            "marks": "2.5 Marks"
          },
          {
            "step": "(c) C≡C < C=C < C-C bond length order",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write \"Anhydrous AlCl₃\" for Friedel-Crafts and \"conc. H₂SO₄\" for nitration.",
        "commonPitfall": "Missing Zn/H₂O reductive cleavage in ozonolysis."
      },
      {
        "id": "cbse-c11-chem-2024-comp-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Structure of Atom: Quantum Numbers, Electronic Configuration & Pauli/Hund Rules",
        "questionText": "(a) State (i) Aufbau Principle, (ii) Pauli Exclusion Principle, and (iii) Hund's Rule of Maximum Multiplicity.\n(b) Explain why Chromium (Z = 24) and Copper (Z = 29) have anomalous ground-state electronic configurations ([Ar]3d⁵4s¹ and [Ar]3d¹⁰4s¹).\n(c) List all four quantum numbers for the valence 3d electron of Scandium (Z = 21).",
        "modelAnswer": "(a) (i) Aufbau: Orbitals are filled in increasing order of energy (n + l rule).\n(ii) Pauli: No two electrons in an atom can have the exact same set of all four quantum numbers (max 2 e⁻ per orbital with opposite spins).\n(iii) Hund: Pairing of electrons in degenerate orbitals does not occur until each orbital is singly occupied with parallel spins.\n(b) Half-filled (d⁵) and fully-filled (d¹⁰) subshells acquire extra stability due to symmetrical electron distribution and maximum exchange energy.\n(c) 3d¹ in Sc: n = 3, l = 2, m = -2 (any from -2 to +2), s = +1/2.",
        "stepMarking": [
          {
            "step": "(a) All 3 electronic rules stated accurately",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Symmetrical distribution + exchange energy for Cr & Cu",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Quantum numbers for 3d¹",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include BOTH \"symmetry\" and \"exchange energy\" for Cr and Cu stability.",
        "commonPitfall": "Writing 3d⁴ 4s² for Cr."
      }
    ]
  },
  {
    "id": "cbse-c11-chem-2023-comp",
    "title": "CBSE Class 11 Chemistry Supplementary Annual Paper (2023)",
    "subject": "Chemistry",
    "targetClass": "Class 11",
    "year": 2023,
    "paperType": "BOARD_EXAM",
    "paperCode": "CBSE/C11/CHE/COMP23",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "EASY",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 are multiple choice / assertion-reason questions carrying 1 mark each.",
      "Section B: Q17 to Q21 are short answer questions carrying 2 marks each.",
      "Section C: Q22 to Q28 are short answer questions carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c11-chem-2023-comp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Some Basic Concepts: Molarity & Dilution",
        "questionText": "What volume of 2 M HCl solution is required to prepare 500 mL of 0.5 M HCl solution?",
        "options": [
          "A) 100 mL",
          "B) 125 mL",
          "C) 250 mL",
          "D) 50 mL"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Using dilution law M₁V₁ = M₂V₂: 2 × V₁ = 0.5 × 500 => V₁ = 250/2 = 125 mL.",
        "stepMarking": [
          {
            "step": "Apply M₁V₁ = M₂V₂ -> V₁ = 125 mL",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Volume units can stay in mL on both sides as long as they match.",
        "commonPitfall": "Computing 250 mL without dividing by M₁ = 2."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Quantum Numbers Set Validity",
        "questionText": "Which of the following sets of quantum numbers (n, l, m, s) is NOT permissible for an electron?",
        "options": [
          "A) n = 3, l = 2, m = -2, s = +1/2",
          "B) n = 2, l = 1, m = 0, s = -1/2",
          "C) n = 3, l = 3, m = 0, s = +1/2",
          "D) n = 4, l = 0, m = 0, s = -1/2"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Azimuthal quantum number l can only take integer values from 0 to (n - 1). For n = 3, maximum l is 2, so l = 3 is invalid.",
        "stepMarking": [
          {
            "step": "Identify l must satisfy 0 ≤ l ≤ n - 1 -> l = 3 invalid for n = 3",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Check 3 rules: 0 ≤ l ≤ n-1, -l ≤ m ≤ +l, s = ±1/2.",
        "commonPitfall": "Allowing l = n."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Structure of Atom: Number of Radial Nodes",
        "questionText": "The total number of radial (spherical) nodes present in a 4p orbital is:",
        "options": [
          "A) 1",
          "B) 2",
          "C) 3",
          "D) 4"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radial nodes = n - l - 1 = 4 - 1 - 1 = 2 (for 4p: n=4, l=1).",
        "stepMarking": [
          {
            "step": "Radial nodes = n - l - 1 = 4 - 1 - 1 = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.",
        "commonPitfall": "Giving total nodes (n - 1 = 3) when radial nodes are asked."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: First Ionisation Enthalpy Anomaly",
        "questionText": "Among B, C, N, O, the correct increasing order of first ionisation enthalpy (IE₁) is:",
        "options": [
          "A) B < C < N < O",
          "B) B < C < O < N",
          "C) B < O < C < N",
          "D) C < B < O < N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Generally IE₁ increases across Period 2, EXCEPT Nitrogen (2s² 2p³) has a stable half-filled p-subshell, making IE₁(N) > IE₁(O). Order: B < C < O < N.",
        "stepMarking": [
          {
            "step": "Account for half-filled 2p³ stability of Nitrogen -> B < C < O < N",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Two classic Period 2 exceptions: IE₁(Be) > IE₁(B) and IE₁(N) > IE₁(O).",
        "commonPitfall": "Following monotonic trend B < C < N < O."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: VSEPR Geometry of ClF₃ / SF₄",
        "questionText": "According to VSEPR theory, the shape of ClF₃ molecule (with 3 bond pairs and 2 lone pairs on central Cl) is:",
        "options": [
          "A) Trigonal planar",
          "B) Pyramidal",
          "C) Bent T-shaped",
          "D) Tetrahedral"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Central Cl has sp³d hybridisation (5 electron pairs -> trigonal bipyramidal geometry) with 2 lone pairs at equatorial positions, giving a bent T-shaped molecular shape.",
        "stepMarking": [
          {
            "step": "Identify 3 bp + 2 lp -> T-shaped geometry",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Lone pairs ALWAYS occupy equatorial positions in sp³d trigonal bipyramidal geometry to minimize lp-bp repulsions at 90°.",
        "commonPitfall": "Placing lone pairs at axial positions giving trigonal planar."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: MOT Bond Order of O₂⁺ and N₂",
        "questionText": "Which of the following species is paramagnetic according to Molecular Orbital Theory (MOT)?",
        "options": [
          "A) N₂",
          "B) O₂²⁻",
          "C) O₂",
          "D) F₂"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. O₂ has 16 electrons with two unpaired electrons in degenerate π*2px¹ π*2py¹ antibonding orbitals, making it paramagnetic (bond order = 2). N₂, O₂²⁻, and F₂ have all electrons paired.",
        "stepMarking": [
          {
            "step": "Identify O₂ due to 2 unpaired electrons in π*2p orbitals",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both O₂ (16 e⁻) and B₂ (10 e⁻) are famously paramagnetic in MOT.",
        "commonPitfall": "Assuming O₂²⁻ (18 e⁻) is paramagnetic."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Thermodynamics: Spontaneity Criterion ΔG",
        "questionText": "For a chemical process to be spontaneous at ALL temperatures, the signs of ΔH and ΔS must be respectively:",
        "options": [
          "A) ΔH > 0, ΔS < 0",
          "B) ΔH < 0, ΔS > 0",
          "C) ΔH < 0, ΔS < 0",
          "D) ΔH > 0, ΔS > 0"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. ΔG = ΔH - TΔS. When ΔH < 0 (exothermic) and ΔS > 0 (entropy increases), ΔG is negative at every positive temperature T.",
        "stepMarking": [
          {
            "step": "ΔH < 0 and ΔS > 0 guarantees ΔG < 0 for all T",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Spontaneous criterion: ΔG < 0 at constant T & P.",
        "commonPitfall": "Confusing signs of ΔH and ΔS."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Conjugate Acid-Base Pairs",
        "questionText": "The conjugate acid and conjugate base of HSO₄⁻ are respectively:",
        "options": [
          "A) SO₄²⁻ and H₂SO₄",
          "B) H₂SO₄ and SO₄²⁻",
          "C) H₂SO₃ and SO₃²⁻",
          "D) H₃O⁺ and OH⁻"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Adding H⁺ gives conjugate acid H₂SO₄; removing H⁺ gives conjugate base SO₄²⁻.",
        "stepMarking": [
          {
            "step": "Gain H⁺ -> H₂SO₄ (acid); Lose H⁺ -> SO₄²⁻ (base)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Conjugate Acid = species + H⁺; Conjugate Base = species - H⁺.",
        "commonPitfall": "Reversing conjugate acid and conjugate base order."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Le Chatelier Principle (Haber Process)",
        "questionText": "In the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92.4 kJ/mol, forward yield of ammonia is favoured by:",
        "options": [
          "A) High temperature and low pressure",
          "B) Low temperature and high pressure",
          "C) Low temperature and low pressure",
          "D) Addition of inert gas at constant volume"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. The reaction is exothermic (ΔH < 0 -> favoured by low T) and proceeds with decrease in gaseous moles (4 -> 2 -> favoured by high P).",
        "stepMarking": [
          {
            "step": "Exothermic -> low T; fewer product moles -> high P",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always count Δn_g = moles_products - moles_reactants for gaseous pressure effect.",
        "commonPitfall": "Choosing high temperature thinking it boosts rate (rate ≠ equilibrium yield)."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Redox Reactions: Oxidation State Calculation",
        "questionText": "The oxidation numbers of Cr in CrO₅ and S in H₂SO₅ (Caro's acid) are respectively:",
        "options": [
          "A) +10 and +8",
          "B) +6 and +6",
          "C) +6 and +8",
          "D) +5 and +6"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Both contain peroxide linkages (-O-O- where O is -1): CrO₅ has butterfly structure with 2 peroxide linkages (4 O at -1, 1 O at -2) => Cr = +6. H₂SO₅ has 1 peroxide linkage => S = +6.",
        "stepMarking": [
          {
            "step": "Account for peroxide (-1) oxygen linkages -> +6 and +6",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Maximum oxidation state of an element cannot exceed its group valence electrons (Cr = 6, S = 6)!",
        "commonPitfall": "Naively assigning -2 to every oxygen and writing +10 or +8."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: IUPAC Naming",
        "questionText": "The IUPAC name of CH₃–CH(OH)–CH₂–COOH is:",
        "options": [
          "A) 2-Hydroxybutanoic acid",
          "B) 3-Hydroxybutanoic acid",
          "C) 3-Carboxybutan-2-ol",
          "D) 1-Carboxypropan-2-ol"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. -COOH is the principal functional group (gets C-1): C1(COOH)-C2(CH₂)-C3(CH-OH)-C4(CH₃) -> 3-Hydroxybutanoic acid.",
        "stepMarking": [
          {
            "step": "Number from -COOH -> -OH at C3 -> 3-Hydroxybutanoic acid",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Carboxylic acid (-COOH) always gets priority over -OH, becoming suffix \"-oic acid\" and prefix \"hydroxy-\".",
        "commonPitfall": "Numbering from the CH₃ end."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Organic Chemistry: Carbocation Stability",
        "questionText": "Which of the following carbocations is the MOST stable due to hyperconjugation and inductive effect?",
        "options": [
          "A) CH₃⁺",
          "B) CH₃CH₂⁺",
          "C) (CH₃)₂CH⁺",
          "D) (CH₃)₃C⁺"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Tertiary butyl carbocation (CH₃)₃C⁺ has 9 α-hydrogens participating in hyperconjugation plus +I effect from 3 methyl groups, giving highest stability (3° > 2° > 1° > CH₃⁺).",
        "stepMarking": [
          {
            "step": "Identify 3° carbocation (9 α-H hyperconjugation)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Count α-hydrogens adjacent to C⁺: 9 > 6 > 3 > 0.",
        "commonPitfall": "Choosing primary carbocation."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Bonding: Dipole Moment of NH₃ vs NF₃",
        "questionText": "Assertion (A): The dipole moment of NH₃ (1.47 D) is greater than that of NF₃ (0.23 D).\nReason (R): In NH₃, the orbital dipole of the lone pair points in the same direction as the resultant N–H bond dipoles, whereas in NF₃ it opposes the resultant N–F bond dipoles.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Both molecules are pyramidal, but in NH₃ bond dipoles point towards N (reinforcing lone pair dipole), while in NF₃ electronegative F pulls dipoles away from N (opposing lone pair dipole).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting vector directions of N-H vs N-F dipoles",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Draw small dipole arrows on pyramidal NH₃ and NF₃ for 2M/3M questions.",
        "commonPitfall": "Assuming higher electronegativity of F automatically gives NF₃ a larger dipole moment."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Equilibrium: Common Ion Effect",
        "questionText": "Assertion (A): Addition of CH₃COONa to an aqueous solution of CH₃COOH suppresses the ionisation of acetic acid.\nReason (R): CH₃COONa is a strong electrolyte supplying common CH₃COO⁻ ions that shift the equilibrium backward by Le Chatelier's principle.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Common ion effect suppresses dissociation of weak acid CH₃COOH when common acetate ions increase.",
        "stepMarking": [
          {
            "step": "Option (A) identifying Common Ion Effect",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "This mixture (CH₃COOH + CH₃COONa) also forms an Acidic Buffer!",
        "commonPitfall": "Thinking pH decreases instead of increasing when CH₃COONa is added."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Atomic Structure: Heisenberg Uncertainty Principle",
        "questionText": "Assertion (A): Heisenberg's uncertainty principle is insignificant in the motion of macroscopic objects like a cricket ball.\nReason (R): The value of Planck's constant h (6.626 × 10⁻³⁴ J·s) is extremely small compared to macroscopic mass values.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Δx·Δv ≥ h/(4πm). For macroscopic mass m ~ 0.1 kg, Δx·Δv ~ 10⁻³³ m²/s, which is negligible.",
        "stepMarking": [
          {
            "step": "Option (A) with h/4πm scaling explanation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show numerical order ~10⁻³³ for macroscopic objects if asked in 2M.",
        "commonPitfall": "Saying macroscopic balls have zero uncertainty theoretically (it is non-zero, just negligible)."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Periodicity: Electron Gain Enthalpy of Cl vs F",
        "questionText": "Assertion (A): Chlorine has a more negative electron gain enthalpy than Fluorine.\nReason (R): Fluorine has a very small compact 2p-orbital where incoming electrons suffer strong inter-electronic repulsion.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Adding an electron to compact n=2 shell of F causes strong electron-electron repulsion compared to larger n=3 shell of Cl.",
        "stepMarking": [
          {
            "step": "Option (A) citing compact 2p inter-electronic repulsion in F",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reasoning applies to Oxygen vs Sulphur (Δ_eg H of S is more negative than O).",
        "commonPitfall": "Thinking F has higher negative electron gain enthalpy because it is more electronegative."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Thermodynamics: ΔH and ΔU Relation",
        "questionText": "If water vapour is assumed to be a perfect gas, molar enthalpy change for vaporisation of 1 mol of water at 1 bar and 100°C is 41 kJ/mol. Calculate the internal energy change ΔU when 1 mol of water is vaporised at 1 bar and 100°C (R = 8.314 J/mol·K).",
        "modelAnswer": "H₂O(l) → H₂O(g). Δn_g = 1 - 0 = 1 mol.\nUsing ΔH = ΔU + Δn_g R T => ΔU = ΔH - Δn_g R T.\nT = 100 + 273 = 373 K.\nΔn_g R T = 1 × 8.314 × 373 = 3101.1 J = 3.10 kJ.\nΔU = 41 - 3.10 = 37.90 kJ/mol.",
        "stepMarking": [
          {
            "step": "Identify Δn_g = 1 & formula ΔU = ΔH - Δn_gRT",
            "marks": "1 Mark"
          },
          {
            "step": "Convert J to kJ -> ΔU = 37.90 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert R·T from Joules to kilojoules before subtracting from kJ!",
        "commonPitfall": "Subtracting 3101 directly from 41 without unit matching."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Equilibrium: Buffer Solution & pH Calculation",
        "questionText": "What is a buffer solution? Calculate the pH of a 0.001 M aqueous NaOH solution at 298 K (Kw = 10⁻¹⁴).",
        "modelAnswer": "Buffer solution: A solution that resists change in pH upon dilution or addition of small amounts of acid or alkali.\nFor 0.001 M NaOH: [OH⁻] = 10⁻³ M.\npOH = -log₁₀(10⁻³) = 3.\npH = 14 - pOH = 14 - 3 = 11.",
        "stepMarking": [
          {
            "step": "Definition of buffer solution",
            "marks": "1 Mark"
          },
          {
            "step": "Compute pOH = 3 -> pH = 11",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always double check that a base gives pH > 7!",
        "commonPitfall": "Reporting pOH = 3 as pH = 3 for NaOH."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Organic Chemistry: Inductive vs Resonance Effect",
        "questionText": "Give two differences between Inductive effect (I-effect) and Resonance / Mesomeric effect (R/M-effect).",
        "modelAnswer": "1. Inductive effect involves partial displacement of sigma (σ) electrons along a saturated chain and weakens rapidly after 3 carbons; Resonance effect involves complete delocalisation of pi (π) or lone-pair electrons through conjugated systems.\n2. Resonance effect operates uniformly across the entire conjugated system without fading significantly with distance.",
        "stepMarking": [
          {
            "step": "σ vs π/lone pair electron involvement",
            "marks": "1 Mark"
          },
          {
            "step": "Distance decay vs full conjugation propagation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Mention \"permanent effects\" for both I and R effects.",
        "commonPitfall": "Confusing permanent Resonance effect with temporary Electromeric effect."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Hydrocarbons: Wurtz Reaction Limitation",
        "questionText": "Write the chemical equation for Wurtz reaction using bromoethane. Why is Wurtz reaction NOT suitable for preparing alkanes with an odd number of carbon atoms?",
        "modelAnswer": "Equation: 2 CH₃CH₂Br + 2Na --(Dry Ether)--> CH₃–CH₂–CH₂–CH₃ (n-Butane) + 2NaBr.\nLimitation: Preparing an odd-carbon alkane requires two different alkyl halides (R-X and R'-X), producing a mixture of three alkanes (R-R, R'-R', and R-R') with close boiling points that are difficult to separate.",
        "stepMarking": [
          {
            "step": "Balanced Wurtz equation in Dry Ether -> Butane",
            "marks": "1 Mark"
          },
          {
            "step": "Mixture of 3 alkanes problem explained",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always specify \"Dry Ether\" over arrow in Wurtz reaction.",
        "commonPitfall": "Forgetting Na reacts violently with moisture if dry ether is absent."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Some Basic Concepts: Limiting Reagent",
        "questionText": "50.0 kg of N₂(g) and 10.0 kg of H₂(g) are mixed to produce NH₃(g). Identify the limiting reagent and calculate the mass of NH₃(g) formed.",
        "modelAnswer": "N₂ + 3H₂ → 2NH₃.\nMoles of N₂ = 50,000 / 28 = 1785.7 mol.\nMoles of H₂ = 10,000 / 2.0 = 5000 mol.\n1785.7 mol N₂ requires 3 × 1785.7 = 5357.1 mol H₂, which exceeds available 5000 mol H₂. Thus H₂ is the limiting reagent.\nFrom 3 mol H₂ -> 2 mol NH₃ => 5000 mol H₂ produces (2/3) × 5000 = 3333.3 mol NH₃.\nMass of NH₃ = 3333.3 × 17 g ≈ 56,667 g = 56.67 kg.",
        "stepMarking": [
          {
            "step": "Identify H₂ as limiting reagent using mole ratio",
            "marks": "1 Mark"
          },
          {
            "step": "Calculate 56.67 kg NH₃ formed",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Convert kg to grams cleanly when dividing by molar mass in g/mol.",
        "commonPitfall": "Assuming N₂ is limiting without comparing 1:3 stoichiometric ratio."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Some Basic Concepts: Empirical and Molecular Formula",
        "questionText": "An organic compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine by mass. Its molar mass is 98.96 g/mol. Determine its empirical and molecular formulas. (Atomic masses: C = 12, H = 1, Cl = 35.5)",
        "modelAnswer": "Moles per 100 g:\n• C: 24.27 / 12 = 2.02 mol\n• H: 4.07 / 1 = 4.07 mol\n• Cl: 71.65 / 35.5 = 2.02 mol\nSimplest molar ratio (divide by 2.02): C : H : Cl = 1 : 2 : 1.\nEmpirical formula = CH₂Cl.\nEmpirical formula mass = 12 + 2 + 35.5 = 49.5 g/mol.\nn = Molar mass / Empirical mass = 98.96 / 49.5 ≈ 2.\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂.",
        "stepMarking": [
          {
            "step": "Mole calculation & dividing by smallest mole (2.02)",
            "marks": "1.5 Marks"
          },
          {
            "step": "Empirical formula CH₂Cl & mass 49.5",
            "marks": "1 Mark"
          },
          {
            "step": "n = 2 -> Molecular formula C₂H₄Cl₂",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "NCERT textbook solved example — show the tabular mole/ratio calculation cleanly.",
        "commonPitfall": "Rounding 4.07/2.02 = 2.01 incorrectly."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Structure of Atom: Bohr Hydrogen Emission Lines",
        "questionText": "Calculate the wavelength and frequency of light emitted when an electron in a hydrogen atom transitions from n = 4 to n = 2 energy level (R_H = 1.097 × 10⁷ m⁻¹, c = 3 × 10⁸ m/s). Name the spectral series.",
        "modelAnswer": "1/λ = R_H (1/n₁² - 1/n₂²) = 1.097 × 10⁷ (1/2² - 1/4²) = 1.097 × 10⁷ × (3/16)\n= 2.057 × 10⁶ m⁻¹.\nλ = 1 / (2.057 × 10⁶) ≈ 4.86 × 10⁻⁷ m = 486 nm (blue-green visible light).\nFrequency ν = c / λ = 3 × 10⁸ / (4.86 × 10⁻⁷) ≈ 6.17 × 10¹⁴ Hz.\nSpectral series: Balmer series (since n₁ = 2).",
        "stepMarking": [
          {
            "step": "Rydberg formula 1/λ with n₁=2, n₂=4",
            "marks": "1 Mark"
          },
          {
            "step": "λ = 486 nm & ν = 6.17 × 10¹⁴ Hz",
            "marks": "1.5 Marks"
          },
          {
            "step": "Identify Balmer series",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Balmer series (n₁ = 2) lies in the visible region!",
        "commonPitfall": "Forgetting to take reciprocal of 1/λ."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Bonding: Hybridisation of SF₆, PCl₅ & Ethyne",
        "questionText": "Using valence bond hybridisation theory, explain the hybridisation state, geometry, and bond angles of:\n(a) CH₄\n(b) PCl₅\n(c) SF₆.",
        "modelAnswer": "(a) CH₄: sp³ hybridisation of C -> Tetrahedral geometry, all bond angles = 109.5°.\n(b) PCl₅: sp³d hybridisation of P -> Trigonal bipyramidal geometry; 3 equatorial bonds at 120° and 2 longer axial bonds at 90° to equatorial plane.\n(c) SF₆: sp³d² hybridisation of S -> Regular Octahedral geometry, all bond angles = 90°.",
        "stepMarking": [
          {
            "step": "(a) CH₄ sp³, tetrahedral, 109.5°",
            "marks": "1 Mark"
          },
          {
            "step": "(b) PCl₅ sp³d, TBP, 120° & 90° (longer axial)",
            "marks": "1 Mark"
          },
          {
            "step": "(c) SF₆ sp³d², octahedral, 90°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note why axial bonds in PCl₅ are longer/weaker: 3 bond-pair repulsions at 90° vs 2 for equatorial.",
        "commonPitfall": "Writing all angles in PCl₅ as 109.5° or 90°."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Thermodynamics: Hess's Law Enthalpy Calculation",
        "questionText": "State Hess's Law of Constant Heat Summation. Calculate the standard enthalpy of formation of CH₄(g) from:\n(i) C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ/mol\n(ii) H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ/mol\n(iii) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH° = -890.3 kJ/mol",
        "modelAnswer": "Hess's Law: Total enthalpy change of a reaction is identical whether carried out in one step or multiple steps.\nTarget: C(s) + 2H₂(g) → CH₄(g).\nOperate: Eq(i) + 2×Eq(ii) - Eq(iii):\nΔ_f H°(CH₄) = (-393.5) + 2(-285.8) - (-890.3)\n= -393.5 - 571.6 + 890.3 = -965.1 + 890.3 = -74.8 kJ/mol.",
        "stepMarking": [
          {
            "step": "Statement of Hess's Law",
            "marks": "1 Mark"
          },
          {
            "step": "Target eq + algebraic combination (i) + 2(ii) - (iii)",
            "marks": "1 Mark"
          },
          {
            "step": "Result Δ_f H° = -74.8 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Double Eq(ii) because 2 moles of H₂ are needed to form CH₄.",
        "commonPitfall": "Forgetting to multiply -285.8 by 2 or flipping sign of Eq(iii)."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Redox Reactions: Balancing by Ion-Electron Method (Acidic Medium)",
        "questionText": "Balance the following redox reaction in acidic medium by half-reaction (ion-electron) method:\nCr₂O₇²⁻(aq) + Fe²⁺(aq) → Cr³⁺(aq) + Fe³⁺(aq)",
        "modelAnswer": "Reduction half: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nOxidation half: Fe²⁺ → Fe³⁺ + e⁻ (multiply by 6 -> 6Fe²⁺ → 6Fe³⁺ + 6e⁻)\nAdding both halves to cancel 6e⁻:\nCr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) → 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l).",
        "stepMarking": [
          {
            "step": "Balanced reduction half with 14H⁺ & 6e⁻",
            "marks": "1.5 Marks"
          },
          {
            "step": "Multiply oxidation half by 6 & add",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Verify BOTH atoms AND net charge on LHS (-2 + 12 + 14 = +24) and RHS (6 + 18 = +24)!",
        "commonPitfall": "Forgetting to multiply Cr³⁺ by 2 when balancing Cr atoms."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Organic Chemistry: Electrophilic vs Nucleophilic Attack & Isomerism",
        "questionText": "Draw all possible structural isomers of Pentane (C₅H₁₂) and give their IUPAC names. State why chain isomerism arises here.",
        "modelAnswer": "Chain isomerism arises when compounds share the same molecular formula but differ in the carbon skeleton.\n1. CH₃–CH₂–CH₂–CH₂–CH₃ -> Pentane (n-pentane)\n2. CH₃–CH(CH₃)–CH₂–CH₃ -> 2-Methylbutane (isopentane)\n3. C(CH₃)₄ -> 2,2-Dimethylpropane (neopentane).",
        "stepMarking": [
          {
            "step": "3 correct structural formulas",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact IUPAC names of all 3 isomers",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Note C(CH₃)₄ IUPAC name is 2,2-dimethylpropane (longest chain is 3 carbons).",
        "commonPitfall": "Drawing 2-ethylpropane (actually identical to 2-methylbutane!)."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Equilibrium: Solubility Product (K_sp) Calculation",
        "questionText": "Define solubility product (K_sp). Calculate the molar solubility of AgCl in water at 298 K if its K_sp = 1.6 × 10⁻¹⁰.",
        "modelAnswer": "K_sp is the product of equilibrium molar concentrations of constituent ions in a saturated solution of a sparingly soluble salt, each raised to its stoichiometric coefficient.\nAgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let solubility = s mol/L.\nK_sp = [Ag⁺][Cl⁻] = s × s = s² = 1.6 × 10⁻¹⁰ = 16 × 10⁻¹¹? Better: 1.6 × 10⁻¹⁰ = 160 × 10⁻¹² => s = √(1.6 × 10⁻¹⁰) ≈ 1.265 × 10⁻⁵ mol/L.",
        "stepMarking": [
          {
            "step": "Definition of K_sp",
            "marks": "1 Mark"
          },
          {
            "step": "Set K_sp = s² and solve s = 1.265 × 10⁻⁵ M",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Adjust even power of 10 before taking square root: √(1.6 × 10⁻¹⁰) = √1.6 × 10⁻⁵.",
        "commonPitfall": "Writing K_sp = 4s² instead of s² for 1:1 AB salt."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Periodic Trends Across Period 2 & 3",
        "questionText": "Read the passage and answer:\nElements show systematic periodicity in atomic radii, ionisation enthalpy, and electronegativity across periods and down groups. Across a period left to right, effective nuclear charge increases while valence shell remains fixed.\n\n(a) Why are cations smaller and anions larger than their parent neutral atoms? (1M)\n(b) Arrange the isoelectronic ions N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ in increasing order of ionic radii. (1M)\n(c) Why is the second ionisation enthalpy (IE₂) of Sodium far higher than that of Magnesium? (2M)",
        "modelAnswer": "(a) Cations have higher Z_eff per electron (often losing a shell), shrinking radius; anions have extra electron repulsion and lower Z_eff per electron, expanding radius.\n(b) Increasing ionic radius (all have 10 e⁻): Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.\n(c) After losing 1 e⁻, Na⁺ attains a stable noble-gas octet (2s² 2p⁶), requiring massive energy for IE₂, whereas Mg⁺ (3s¹) loses its 2nd electron easily to reach the noble-gas configuration.",
        "stepMarking": [
          {
            "step": "(a) Z_eff / repulsion explanation",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Noble-gas core of Na⁺ vs 3s¹ of Mg⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "For isoelectronic species, higher positive nuclear charge Z -> smaller radius.",
        "commonPitfall": "Reversing ionic radius order of isoelectronic ions."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Molecular Orbital Energy Diagram & Bond Order",
        "questionText": "Read the passage and answer:\nMolecular Orbital Theory predicts bond order, magnetic character, and relative stability of diatomic species. Up to N₂ (14 electrons), σ2pz lies ABOVE π2px, π2py due to 2s-2p mixing; from O₂ onwards, σ2pz lies BELOW π2px, π2py.\n\n(a) Write the formula for Bond Order in MOT. (1M)\n(b) Compute the bond orders of O₂, O₂⁺, and O₂⁻. (1.5M)\n(c) Arrange O₂, O₂⁺, and O₂⁻ in increasing order of bond length and bond stability. (1.5M)",
        "modelAnswer": "(a) Bond Order = ½ (N_b - N_a), where N_b = bonding e⁻, N_a = antibonding e⁻.\n(b) O₂: BO = 2.0; O₂⁺ (one e⁻ removed from π*): BO = 2.5; O₂⁻ (one e⁻ added to π*): BO = 1.5.\n(c) Higher bond order => shorter bond & higher stability:\nStability order: O₂⁻ < O₂ < O₂⁺; Bond length order: O₂⁺ < O₂ < O₂⁻.",
        "stepMarking": [
          {
            "step": "(a) Formula ½(Nb - Na)",
            "marks": "1 Mark"
          },
          {
            "step": "(b) BOs 2.0, 2.5, 1.5",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Stability & length orders",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Remember: Stability ∝ Bond Order, while Bond Length ∝ 1 / Bond Order!",
        "commonPitfall": "Making bond length order identical to stability order."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Hydrocarbons: Benzene Electrophilic Substitution & Arenes",
        "questionText": "(a) Explain why benzene undergoes electrophilic substitution rather than addition reactions despite having three double bonds.\n(b) Write balanced chemical equations for:\n  (i) Nitration of benzene\n  (ii) Friedel-Crafts alkylation with CH₃Cl\n  (iii) Ozonolysis of But-2-ene followed by Zn/H₂O.\n(c) Arrange Ethane, Ethene, and Ethyne in increasing order of C–C bond length.",
        "modelAnswer": "(a) Benzene has 6 delocalised π-electrons forming an exceptionally stable aromatic sextet (resonance energy ~150 kJ/mol). Addition destroys aromaticity, whereas electrophilic substitution preserves the aromatic ring.\n(b) (i) C₆H₆ + conc. HNO₃ --(conc. H₂SO₄, 323-333K)--> C₆H₅NO₂ + H₂O.\n(ii) C₆H₆ + CH₃Cl --(Anhyd. AlCl₃)--> C₆H₅CH₃ (Toluene) + HCl.\n(iii) CH₃–CH=CH–CH₃ + O₃ --(Zn/H₂O)--> 2 CH₃CHO (Ethanal).\n(c) Bond length order: Ethyne (120 pm) < Ethene (134 pm) < Ethane (154 pm).",
        "stepMarking": [
          {
            "step": "(a) Aromaticity & resonance stability preservation",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) All 3 organic reactions with reagents/conditions",
            "marks": "2.5 Marks"
          },
          {
            "step": "(c) C≡C < C=C < C-C bond length order",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always write \"Anhydrous AlCl₃\" for Friedel-Crafts and \"conc. H₂SO₄\" for nitration.",
        "commonPitfall": "Missing Zn/H₂O reductive cleavage in ozonolysis."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Structure of Atom: Quantum Numbers, Electronic Configuration & Pauli/Hund Rules",
        "questionText": "(a) State (i) Aufbau Principle, (ii) Pauli Exclusion Principle, and (iii) Hund's Rule of Maximum Multiplicity.\n(b) Explain why Chromium (Z = 24) and Copper (Z = 29) have anomalous ground-state electronic configurations ([Ar]3d⁵4s¹ and [Ar]3d¹⁰4s¹).\n(c) List all four quantum numbers for the valence 3d electron of Scandium (Z = 21).",
        "modelAnswer": "(a) (i) Aufbau: Orbitals are filled in increasing order of energy (n + l rule).\n(ii) Pauli: No two electrons in an atom can have the exact same set of all four quantum numbers (max 2 e⁻ per orbital with opposite spins).\n(iii) Hund: Pairing of electrons in degenerate orbitals does not occur until each orbital is singly occupied with parallel spins.\n(b) Half-filled (d⁵) and fully-filled (d¹⁰) subshells acquire extra stability due to symmetrical electron distribution and maximum exchange energy.\n(c) 3d¹ in Sc: n = 3, l = 2, m = -2 (any from -2 to +2), s = +1/2.",
        "stepMarking": [
          {
            "step": "(a) All 3 electronic rules stated accurately",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Symmetrical distribution + exchange energy for Cr & Cu",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Quantum numbers for 3d¹",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Include BOTH \"symmetry\" and \"exchange energy\" for Cr and Cu stability.",
        "commonPitfall": "Writing 3d⁴ 4s² for Cr."
      },
      {
        "id": "cbse-c11-chem-2023-comp-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Chemical Equilibrium: Le Chatelier Principle, pH & Ostwald Dilution",
        "questionText": "(a) Calculate the pH of a 0.02 M acetic acid (CH₃COOH) solution if its ionisation constant K_a = 1.8 × 10⁻⁵ (given √3.6 ≈ 1.9).\n(b) State Le Chatelier's Principle and predict the effect of (i) adding inert gas at constant pressure, and (ii) increasing temperature on PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH = +92.5 kJ/mol.",
        "modelAnswer": "(a) [H⁺] = √(K_a × C) = √(1.8 × 10⁻⁵ × 0.02) = √(3.6 × 10⁻⁷) = √(0.36 × 10⁻⁶) = 0.6 × 10⁻³ = 6 × 10⁻⁴ M.\npH = -log₁₀(6 × 10⁻⁴) = 4 - log 6 = 4 - 0.778 = 3.22.\n(b) Le Chatelier: Any change in T, P or concentration shifts equilibrium to counteract the imposed stress.\n(i) Inert gas at constant P increases total volume -> shifts toward MORE moles (forward, 1 -> 2 moles).\n(ii) Endothermic ΔH > 0 -> increasing T shifts equilibrium FORWARD.",
        "stepMarking": [
          {
            "step": "(a) [H⁺] = √(Ka·C) = 6×10⁻⁴ M -> pH = 3.22",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Le Chatelier + both predictions justified",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Distinguish inert gas at constant VOLUME (no shift) vs constant PRESSURE (shifts toward more moles)!",
        "commonPitfall": "Saying inert gas at constant pressure has no effect."
      }
    ]
  }
];
