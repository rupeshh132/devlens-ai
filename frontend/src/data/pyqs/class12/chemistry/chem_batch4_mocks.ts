import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_12_CHEM_BATCH4_PAPERS: PyqPaper[] = [
  {
    "id": "model-c12-chem-2024-dps",
    "title": "DPS R.K. Puram Class 12 Chemistry Pre-Board Model Paper (2024)",
    "subject": "Chemistry",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "PRE_BOARD",
    "paperCode": "DPS/C12/CHE-01",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 (12 MCQs + 4 Assertion-Reason) carrying 1 mark each.",
      "Section B: Q17 to Q21 carrying 2 marks each.",
      "Section C: Q22 to Q28 carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-chem-2024-dps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: Crystal Field Splitting Δ₀",
        "questionText": "Which complex ion is low-spin (inner orbital, d²sp³ hybridised) and diamagnetic?",
        "options": [
          "A) [CoF₆]³⁻",
          "B) [FeF₆]³⁻",
          "C) [Co(NH₃)₆]³⁺",
          "D) [NiCl₄]²⁻"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Co³⁺ is 3d⁶. NH₃ is a strong-field ligand (Δ₀ > P), forcing all 6 electrons to pair in t₂g⁶ e_g⁰ (0 unpaired e⁻, diamagnetic, d²sp³). F⁻ is weak-field leaving [CoF₆]³⁻ high-spin paramagnetic (sp³d²).",
        "stepMarking": [
          {
            "step": "Strong-field NH₃ pairs Co³⁺ 3d⁶ -> d²sp³ diamagnetic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strong-field ligands in NCERT: CO, CN⁻, en, NH₃ (for Co³⁺).",
        "commonPitfall": "Thinking [CoF₆]³⁻ is diamagnetic."
      },
      {
        "id": "model-c12-chem-2024-dps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Haloalkanes & Haloarenes: SN1 vs SN2 Reactivity",
        "questionText": "Which alkyl halide undergoes S_N2 nucleophilic substitution reaction at the FASTEST rate?",
        "options": [
          "A) (CH₃)₃C–Br",
          "B) (CH₃)₂CH–Br",
          "C) CH₃CH₂–Br",
          "D) CH₃–Br"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. S_N2 proceeds via backside attack with a pentavalent transition state; least steric hindrance gives fastest rate: CH₃X > 1° > 2° > 3°.",
        "stepMarking": [
          {
            "step": "Least steric hindrance -> CH₃–Br fastest in SN2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "SN2 order: 0° (methyl) > 1° > 2° > 3°; SN1 order: 3° > 2° > 1°.",
        "commonPitfall": "Selecting 3° butyl bromide (which is fastest for SN1, slowest for SN2)."
      },
      {
        "id": "model-c12-chem-2024-dps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Alcohols, Phenols & Ethers: Lucas Test & Acidity",
        "questionText": "Lucas reagent (conc. HCl + anhydrous ZnCl₂) produces immediate turbidity at room temperature with:",
        "options": [
          "A) Propan-1-ol",
          "B) Propan-2-ol",
          "C) 2-Methylpropan-2-ol (tert-butyl alcohol)",
          "D) Phenol"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Lucas test proceeds via carbocation intermediate: 3° alcohols form very stable 3° carbocation and turn turbid IMMEDIATELY; 2° takes ~5 minutes; 1° shows no turbidity at room temp.",
        "stepMarking": [
          {
            "step": "3° alcohol (2-methylpropan-2-ol) -> immediate turbidity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 3° immediate, 2° in 5 min, 1° only on heating.",
        "commonPitfall": "Choosing Phenol (which does not undergo C–O cleavage with Lucas)."
      },
      {
        "id": "model-c12-chem-2024-dps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Aldol vs Cannizzaro",
        "questionText": "Which of the following aldehydes undergoes Cannizzaro reaction (self-oxidation-reduction) when heated with concentrated NaOH?",
        "options": [
          "A) Ethanal (CH₃CHO)",
          "B) Propanal (CH₃CH₂CHO)",
          "C) Benzaldehyde (C₆H₅CHO)",
          "D) Butanal"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aldehydes lacking α-hydrogen atoms (like HCHO and C₆H₅CHO) undergo Cannizzaro disproportionation in conc. alkali to yield an alcohol and a carboxylate salt.",
        "stepMarking": [
          {
            "step": "No α-hydrogen in Benzaldehyde -> Cannizzaro reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "α-H present => Aldol condensation; No α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO) => Cannizzaro!",
        "commonPitfall": "Choosing Ethanal (which has 3 α-hydrogens and gives Aldol)."
      },
      {
        "id": "model-c12-chem-2024-dps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Basicity in Aqueous Solution (Ethyl Amines)",
        "questionText": "The correct decreasing order of basic strength of ethylamines in AQUEOUS solution is:",
        "options": [
          "A) (C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃",
          "B) (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
          "C) C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃",
          "D) NH₃ > C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Combining +I effect, solvation (hydration) stability, and steric hindrance in water: Ethyl series is 2° > 3° > 1° > NH₃ (whereas Methyl series is 2° > 1° > 3° > NH₃!).",
        "stepMarking": [
          {
            "step": "Aqueous Ethyl order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize NCERT aqueous code: Ethyl = 231, Methyl = 213! Gas phase is always 3 > 2 > 1.",
        "commonPitfall": "Mixing up Methyl (213) and Ethyl (231) aqueous orders."
      },
      {
        "id": "model-c12-chem-2024-dps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Biomolecules: DNA Base Pairing & Vitamins",
        "questionText": "Deficiency of Vitamin C (ascorbic acid) causes which disease, and which base is present in RNA but absent in DNA?",
        "options": [
          "A) Beri-beri; Thymine",
          "B) Scurvy; Uracil",
          "C) Rickets; Cytosine",
          "D) Night blindness; Guanine"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vitamin C deficiency causes Scurvy (bleeding gums). RNA contains Uracil (U) in place of Thymine (T) found in DNA.",
        "stepMarking": [
          {
            "step": "Scurvy + Uracil in RNA",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Water-soluble vitamins: B-complex and C (cannot be stored long in body except B₁₂).",
        "commonPitfall": "Swapping Uracil and Thymine."
      },
      {
        "id": "model-c12-chem-2024-dps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Azeotropes & Raoult Law Deviations",
        "questionText": "A mixture of ethanol and acetone shows positive deviation from Raoult's law because:",
        "options": [
          "A) Ethanol-acetone hydrogen bonding is stronger than pure ethanol H-bonds",
          "B) Acetone molecules break existing hydrogen bonds between ethanol molecules, weakening intermolecular attraction",
          "C) Vapour pressure of mixture is lower than ideal",
          "D) Δ_mix H is negative"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pure ethanol molecules are strongly H-bonded; adding acetone separates ethanol molecules and breaks some H-bonds, resulting in weaker A–B interactions, higher vapour pressure, Δ_mix H > 0 and Δ_mix V > 0.",
        "stepMarking": [
          {
            "step": "Weaker A-B interactions -> positive deviation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Positive deviation forms MINIMUM-boiling azeotropes; negative deviation (CHCl₃ + acetone, HNO₃ + H₂O) forms MAXIMUM-boiling azeotropes.",
        "commonPitfall": "Confusing positive deviation with maximum-boiling azeotrope."
      },
      {
        "id": "model-c12-chem-2024-dps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Van't Hoff Factor (i)",
        "questionText": "Which of the following 0.1 M aqueous solutions will exhibit the HIGHEST boiling point (assume 100% dissociation)?",
        "options": [
          "A) Glucose",
          "B) NaCl",
          "C) CaCl₂",
          "D) Al₂(SO₄)₃"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Elevation in boiling point ΔT_b = i·K_b·m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ -> van't Hoff factor i = 5 (highest among glucose=1, NaCl=2, CaCl₂=3).",
        "stepMarking": [
          {
            "step": "Al₂(SO₄)₃ gives i = 5 -> max ΔT_b",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For highest freezing point (lowest ΔT_f), choose SMALLEST i (Glucose)! For highest boiling point / osmotic pressure, choose LARGEST i!",
        "commonPitfall": "Selecting Glucose when highest boiling point is asked."
      },
      {
        "id": "model-c12-chem-2024-dps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Electrochemistry: Kohlrausch Law & Conductance",
        "questionText": "On dilution of both a strong electrolyte (KCl) and a weak electrolyte (CH₃COOH), which statement holds true?",
        "options": [
          "A) Molar conductivity Λ_m increases for both, while conductivity κ decreases for both",
          "B) Both κ and Λ_m increase",
          "C) Λ_m decreases for weak electrolyte",
          "D) Conductivity κ increases on dilution"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Conductivity (κ) decreases on dilution because number of ions per unit volume decreases. Molar conductivity (Λ_m = κ × 1000 / M) increases due to rise in volume V (strong) and surge in degree of dissociation α (weak).",
        "stepMarking": [
          {
            "step": "κ decreases (fewer ions/mL), Λ_m increases on dilution",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize contrast: κ ALWAYS decreases with dilution; Λ_m ALWAYS increases with dilution.",
        "commonPitfall": "Saying conductivity κ increases with dilution."
      },
      {
        "id": "model-c12-chem-2024-dps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Kinetics: Units of Rate Constant",
        "questionText": "The rate constant of a chemical reaction has units mol⁻¹ L s⁻¹. What is the overall order of this reaction?",
        "options": [
          "A) Zero order",
          "B) First order",
          "C) Second order",
          "D) Third order"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. General unit of k is (mol L⁻¹)^(1-n) s⁻¹. Setting 1 - n = -1 => n = 2 (Second order).",
        "stepMarking": [
          {
            "step": "Apply (mol/L)^(1-n) s⁻¹ -> n = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Zero order = mol L⁻¹ s⁻¹; First order = s⁻¹; Second order = mol⁻¹ L s⁻¹.",
        "commonPitfall": "Mixing up zero-order and second-order signs."
      },
      {
        "id": "model-c12-chem-2024-dps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "d- and f-Block Elements: Paramagnetism & Spin-Only Moment",
        "questionText": "Which of the following 3d transition metal ions has the highest magnetic moment (spin-only)?",
        "options": [
          "A) Ti³⁺ (Z = 22)",
          "B) V²⁺ (Z = 23)",
          "C) Mn²⁺ (Z = 25)",
          "D) Cu²⁺ (Z = 29)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mn²⁺ has [Ar] 3d⁵ configuration with 5 unpaired electrons, giving μ = √(5(5+2)) = √35 ≈ 5.92 BM (maximum among all 3d ions).",
        "stepMarking": [
          {
            "step": "Mn²⁺ (3d⁵ -> 5 unpaired e⁻) => μ = 5.92 BM",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall μ = √(n(n+2)) BM; maximum unpaired electrons in d-orbitals is 5.",
        "commonPitfall": "Confusing Mn²⁺ (3d⁵) with Fe²⁺ (3d⁶, only 4 unpaired e⁻)."
      },
      {
        "id": "model-c12-chem-2024-dps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: IUPAC Nomenclature & Linkage Isomerism",
        "questionText": "The IUPAC name of the coordination complex [Pt(NH₃)₂Cl(NO₂)] is:",
        "options": [
          "A) Diamminechloridonitrito-N-platinum(II)",
          "B) Diamminechloronitritoplatinum(IV)",
          "C) Platinum(II) diamminechloronitrite",
          "D) Nitrito-N-diamminechloroplatinum(0)"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Alphabetical ligand order: ammine, chlorido, nitrito-N (or nitro). Oxidation state of Pt: x + 0 - 1 - 1 = 0 => +2 (II). Name: Diamminechloridonitrito-N-platinum(II).",
        "stepMarking": [
          {
            "step": "Alphabetical ligands + Pt(II) oxidation state",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ignore \"di/tri\" prefixes when alphabetizing ligands (ammine -> chlorido -> nitrito).",
        "commonPitfall": "Miscomputing Pt oxidation state as IV instead of II."
      },
      {
        "id": "model-c12-chem-2024-dps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Aniline Fails Friedel-Crafts Reaction",
        "questionText": "Assertion (A): Aniline does not undergo Friedel-Crafts alkylation or acylation.\nReason (R): Aniline acts as a Lewis base and reacts with the Lewis acid catalyst Anhydrous AlCl₃ to form a salt, turning nitrogen positively charged and strongly deactivating the ring.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. C₆H₅NH₂ + AlCl₃ → C₆H₅NH₂⁺ AlCl₃⁻; the positively charged N strongly withdraws electrons (-I), deactivating the benzene ring toward electrophilic substitution.",
        "stepMarking": [
          {
            "step": "Option (A) explaining AlCl₃ salt formation & deactivation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reason applies why nitration of aniline gives unexpected 47% meta-nitroaniline (anilinium ion formation in strong acid)!",
        "commonPitfall": "Saying -NH₂ itself is a deactivating group (it is actually strongly activating when free!)."
      },
      {
        "id": "model-c12-chem-2024-dps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Osmotic Pressure for Polymers",
        "questionText": "Assertion (A): Osmotic pressure method is preferred over boiling point elevation for determining molar masses of proteins and polymers.\nReason (R): Osmotic pressure is measured at room temperature and has appreciable magnitude even for very dilute solutions.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Biomolecules decompose on heating (unlike boiling point) and show tiny ΔT_b at low molarity, whereas π is large enough to read accurately at room temperature.",
        "stepMarking": [
          {
            "step": "Option (A) citing room temp & measurable magnitude",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also note molarity (M) is used in π = CRT instead of molality.",
        "commonPitfall": "Saying polymers are insoluble in water."
      },
      {
        "id": "model-c12-chem-2024-dps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Haloarenes: Lower Reactivity Toward Nucleophilic Substitution",
        "questionText": "Assertion (A): Chlorobenzene is much less reactive towards nucleophilic substitution than chloroethane.\nReason (R): In chlorobenzene, the C–Cl bond acquires partial double-bond character due to resonance, and carbon is sp²-hybridised.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Resonance structures give C–Cl partial double-bond strength (shorter, harder to cleave), plus sp² C holds electrons tightly and phenyl cation is unstable.",
        "stepMarking": [
          {
            "step": "Option (A) citing resonance partial double-bond & sp² carbon",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember all 4 NCERT reasons for haloarene inertness in S_N.",
        "commonPitfall": "Marking (B)."
      },
      {
        "id": "model-c12-chem-2024-dps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes & Ketones: Acidic Strength of Haloacetic Acids",
        "questionText": "Assertion (A): Trichloroacetic acid (CCl₃COOH) is a stronger acid than acetic acid (CH₃COOH).\nReason (R): Three strongly electron-withdrawing -Cl atoms exert a strong -I effect, dispersing the negative charge of the conjugate carboxylate ion and stabilising it.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Electron-withdrawing groups (-I) stabilise RCOO⁻ and increase K_a (decrease pK_a), whereas +I groups like -CH₃ decrease acidity.",
        "stepMarking": [
          {
            "step": "Option (A) citing -I stabilisation of conjugate base",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher K_a = Lower pK_a = Stronger Acid!",
        "commonPitfall": "Confusing +I vs -I effects."
      },
      {
        "id": "model-c12-chem-2024-dps-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Electrochemistry: Faraday's First Law & Fuel Cell",
        "questionText": "How many Coulombs of electricity are required to reduce 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium? Also write the overall reaction of an H₂–O₂ fuel cell.",
        "modelAnswer": "Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.\n5 moles of electrons are required per mole MnO₄⁻ => Charge Q = 5 F = 5 × 96500 C = 482,500 C.\nH₂–O₂ Fuel Cell overall reaction: 2H₂(g) + O₂(g) → 2H₂O(l).",
        "stepMarking": [
          {
            "step": "5 F = 482,500 C calculation",
            "marks": "1 Mark"
          },
          {
            "step": "Fuel cell reaction 2H₂ + O₂ -> 2H₂O",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Oxidation state change of Mn: +7 -> +2 => n = 5 electrons.",
        "commonPitfall": "Using n = 3 (MnO₂ neutral product) instead of n = 5."
      },
      {
        "id": "model-c12-chem-2024-dps-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Kinetics: Pseudo-First Order & Half-Life",
        "questionText": "Show that for a first-order reaction, the time required for completion of 99.9% of the reaction is approximately 10 times its half-life (t₁/₂). (Given log 2 = 0.3010)",
        "modelAnswer": "t₁/₂ = 0.693 / k.\nFor 99.9% completion: [R]₀ = 100, remaining [R] = 100 - 99.9 = 0.1.\nt_99.9% = (2.303 / k) log₁₀(100 / 0.1) = (2.303 / k) log₁₀(10³) = (2.303 × 3) / k = 6.909 / k.\nRatio t_99.9% / t₁/₂ = (6.909 / k) / (0.693 / k) = 6.909 / 0.693 ≈ 9.97 ≈ 10.",
        "stepMarking": [
          {
            "step": "Compute t_99.9% = 6.909/k using remaining [R] = 0.1",
            "marks": "1 Mark"
          },
          {
            "step": "Take ratio 6.909 / 0.693 ≈ 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Remaining concentration [R] = [R]₀ - 99.9% = 0.1% of [R]₀!",
        "commonPitfall": "Plugging 99.9 in the denominator instead of remaining 0.1."
      },
      {
        "id": "model-c12-chem-2024-dps-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "d- and f-Block: Lanthanoid Contraction Causes & Consequences",
        "questionText": "What is Lanthanoid contraction? Mention two important consequences of lanthanoid contraction.",
        "modelAnswer": "Lanthanoid contraction: Steady decrease in atomic and ionic radii from La³⁺ to Lu³⁺ across the 4f series due to poor shielding effect of inner 4f electrons against increasing nuclear charge.\nConsequences:\n1. Zr (4d) and Hf (5d) have almost identical atomic radii (160 pm vs 159 pm) and very similar chemical properties.\n2. Basicity of lanthanoid hydroxides decreases steadily from La(OH)₃ to Lu(OH)₃.",
        "stepMarking": [
          {
            "step": "Definition + poor 4f shielding",
            "marks": "1 Mark"
          },
          {
            "step": "Two consequences (Zr/Hf pair & hydroxide basicity)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Poor shielding order: s > p > d > f (4f shields very poorly!).",
        "commonPitfall": "Saying nuclear charge decreases across lanthanoids."
      },
      {
        "id": "model-c12-chem-2024-dps-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Alcohols, Phenols & Ethers: Reimer-Tiemann & Kolbe Reactions",
        "questionText": "Write the balanced chemical equations for:\n(i) Reimer-Tiemann reaction of phenol\n(ii) Williamson synthesis of tert-butyl ethyl ether (CH₃)₃C–O–C₂H₅ using proper reactants.",
        "modelAnswer": "(i) Reimer-Tiemann: Phenol + CHCl₃ + 3NaOH --(340K)--> Sodium salicylate intermediate --(H⁺)--> Salicylaldehyde (2-hydroxybenzaldehyde) + 3NaCl + 2H₂O.\n(ii) Williamson Synthesis: Must use 3° alkoxide + 1° alkyl halide (NOT 3° halide, which gives alkene elimination!):\n(CH₃)₃C–O⁻Na⁺ + CH₃CH₂–Br → (CH₃)₃C–O–C₂H₅ + NaBr.",
        "stepMarking": [
          {
            "step": "(i) Phenol + CHCl₃ + aq. NaOH -> Salicylaldehyde",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Sodium tert-butoxide + ethyl bromide -> ether",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In Williamson synthesis of tert-butyl ethers, NEVER choose (CH₃)₃C-Br + C₂H₅ONa — it produces 2-methylpropene instead of ether!",
        "commonPitfall": "Using tert-butyl bromide in Williamson synthesis."
      },
      {
        "id": "model-c12-chem-2024-dps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Biomolecules: Anomers vs Epimers / Zwitterion / Protein Denaturation",
        "questionText": "What is meant by denaturation of a protein? Give one example, and state which levels of protein structure are destroyed vs retained.",
        "modelAnswer": "Denaturation: Disruption of native 3D biological structure of a protein due to physical change (heat) or chemical change (pH alteration), disrupting hydrogen bonds so globules unfold and protein loses biological activity.\nExample: Coagulation of egg white on boiling, or curdling of milk.\nEffect on structure: Secondary and Tertiary structures are destroyed, while the Primary structure (peptide sequence) remains intact.",
        "stepMarking": [
          {
            "step": "Definition + example (boiled egg white / curdling)",
            "marks": "1 Mark"
          },
          {
            "step": "2° & 3° destroyed; 1° structure remains intact",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Primary peptide bonds are NOT broken during denaturation.",
        "commonPitfall": "Saying primary amino acid sequence is broken."
      },
      {
        "id": "model-c12-chem-2024-dps-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Electrochemistry: Nernst Equation Cell EMF Numerical at 298 K",
        "questionText": "Calculate the EMF of the cell at 298 K:\nMg(s) | Mg²⁺ (0.001 M) || Cu²⁺ (0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.36 V, E°(Cu²⁺/Cu) = +0.34 V. (Use 0.059/2 ≈ 0.0295)",
        "modelAnswer": "Cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) (n = 2 electrons).\nE°_cell = E°_cathode - E°_anode = 0.34 - (-2.36) = +2.70 V.\nNernst Equation at 298 K:\nE_cell = E°_cell - (0.059 / 2) log₁₀([Mg²⁺] / [Cu²⁺])\n= 2.70 - 0.0295 log₁₀(10⁻³ / 10⁻⁴) = 2.70 - 0.0295 log₁₀(10)\n= 2.70 - 0.0295 = 2.6705 V.",
        "stepMarking": [
          {
            "step": "E°_cell = 2.70 V & n = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Nernst setup [Mg²⁺]/[Cu²⁺] = 10",
            "marks": "1 Mark"
          },
          {
            "step": "E_cell = 2.67 V",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Put Anode product concentration [Mg²⁺] in numerator and Cathode reactant [Cu²⁺] in denominator!",
        "commonPitfall": "Inverting ratio as [Cu²⁺]/[Mg²⁺] or taking n = 1."
      },
      {
        "id": "model-c12-chem-2024-dps-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Kinetics: Arrhenius Activation Energy Numerical",
        "questionText": "The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy E_a of the reaction. (R = 8.314 J/mol·K, log 2 = 0.3010)",
        "modelAnswer": "Using Arrhenius two-temperature equation:\nlog₁₀(k₂ / k₁) = [E_a / (2.303 R)] × [ (T₂ - T₁) / (T₁ T₂) ]\nlog₁₀(2) = [E_a / (2.303 × 8.314)] × [ 10 / (298 × 308) ]\n0.3010 = (E_a / 19.147) × (10 / 91784)\nE_a = (0.3010 × 19.147 × 91784) / 10 ≈ 52,898 J/mol = 52.9 kJ/mol.",
        "stepMarking": [
          {
            "step": "Arrhenius formula with k₂/k₁ = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Substitute T₁=298 K, T₂=308 K",
            "marks": "1 Mark"
          },
          {
            "step": "E_a ≈ 52.9 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write E_a in both J/mol and kJ/mol cleanly.",
        "commonPitfall": "Using Celsius 25 and 35 instead of Kelvin 298 and 308."
      },
      {
        "id": "model-c12-chem-2024-dps-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Coordination Compounds: CFT Splitting & Geometry of [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻",
        "questionText": "Using Valence Bond Theory, explain why [Ni(CN)₄]²⁻ is square planar and diamagnetic whereas [NiCl₄]²⁻ is tetrahedral and paramagnetic (Atomic number of Ni = 28).",
        "modelAnswer": "Ni²⁺ has 3d⁸ configuration (two unpaired e⁻ in 3d).\n1. In [Ni(CN)₄]²⁻, CN⁻ is a strong-field ligand causing pairing of the two unpaired 3d electrons, vacating one 3d orbital. Hybridisation is dsp² -> Square Planar geometry and diamagnetic (0 unpaired e⁻).\n2. In [NiCl₄]²⁻, Cl⁻ is a weak-field ligand unable to pair 3d electrons -> outer 4s and 4p orbitals hybridise (sp³) -> Tetrahedral geometry with 2 unpaired electrons (paramagnetic, μ ≈ 2.83 BM).",
        "stepMarking": [
          {
            "step": "Ni²⁺ 3d⁸ ground state",
            "marks": "0.5 Mark"
          },
          {
            "step": "[Ni(CN)₄]²⁻ pairing -> dsp², square planar, diamagnetic",
            "marks": "1.25 Marks"
          },
          {
            "step": "[NiCl₄]²⁻ no pairing -> sp³, tetrahedral, paramagnetic (2 unpaired e⁻)",
            "marks": "1.25 Marks"
          }
        ],
        "examinerTip": "Both have coordination number 4, making it the classic CN=4 VBT comparison!",
        "commonPitfall": "Assigning sp³d² instead of dsp² / sp³."
      },
      {
        "id": "model-c12-chem-2024-dps-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Haloalkanes: Conversions & Ambident Nucleophiles",
        "questionText": "(a) Explain why haloalkanes react with KCN to form alkyl cyanides as major products, whereas with AgCN they yield isocyanides.\n(b) Convert Propene to Propan-1-ol.",
        "modelAnswer": "(a) CN⁻ is an ambident nucleophile (can attack through C or N). KCN is predominantly ionic, leaving C-end free to form stronger C–C bond (alkyl cyanide R–CN). AgCN is largely covalent, so the lone pair on Nitrogen attacks R–X forming isocyanide (R–NC).\n(b) Propene + HBr (with peroxide) → 1-Bromopropane --(aq. KOH)--> Propan-1-ol (or Hydroboration-Oxidation directly with B₂H₆ followed by H₂O₂/OH⁻).",
        "stepMarking": [
          {
            "step": "(a) Ionic KCN (R-CN) vs covalent AgCN (R-NC) ambident logic",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Hydroboration-oxidation or peroxide-HBr + aq. KOH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same ambident distinction applies to KNO₂ (R-ONO) vs AgNO₂ (R-NO₂)!",
        "commonPitfall": "Saying KCN is covalent and AgCN is ionic."
      },
      {
        "id": "model-c12-chem-2024-dps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Amines: Gabriel Phthalimide Synthesis & Hinsberg Test",
        "questionText": "(a) Why cannot aromatic primary amines (like Aniline) be prepared by Gabriel phthalimide synthesis?\n(b) How does Hinsberg's reagent (benzenesulphonyl chloride, C₆H₅SO₂Cl) distinguish between primary, secondary, and tertiary amines?",
        "modelAnswer": "(a) Gabriel phthalimide synthesis involves S_N2 nucleophilic attack of phthalimide anion on an alkyl halide. Aryl halides (like chlorobenzene) do NOT undergo nucleophilic substitution easily due to partial double-bond character of C–X bond, so aniline cannot be prepared.\n(b) With C₆H₅SO₂Cl:\n• 1° Amine forms N-alkylbenzenesulphonamide which dissolves in aq. KOH (has acidic N–H proton).\n• 2° Amine forms N,N-dialkylbenzenesulphonamide which is INSOLUBLE in aq. KOH (no acidic N–H).\n• 3° Amine does NOT react at all.",
        "stepMarking": [
          {
            "step": "(a) Aryl halides resist SN2 attack by phthalimide ion",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Hinsberg observations for 1°, 2°, 3° amines",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Note: Hinsberg reagent distinguishes amines by presence of acidic H on sulphonamide nitrogen!",
        "commonPitfall": "Thinking 2° amine product dissolves in KOH."
      },
      {
        "id": "model-c12-chem-2024-dps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Alcohols, Phenols & Ethers: Acid-Catalysed Hydration & Phenol Acidity",
        "questionText": "Arrange the following in increasing order of acidic strength and justify: Propan-1-ol, Phenol, 4-Nitrophenol, 4-Methylphenol (p-cresol).",
        "modelAnswer": "Increasing acidic strength: Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol.\nJustification:\n• Phenols are vastly more acidic than aliphatic alcohols because phenoxide ion is resonance-stabilised.\n• In 4-nitrophenol, the strongly electron-withdrawing -NO₂ group (-R and -I) disperses negative charge on phenoxide oxygen, increasing acidity.\n• In 4-methylphenol, electron-donating -CH₃ (+I and hyperconjugation) intensifies negative charge, destabilising phenoxide ion and decreasing acidity.",
        "stepMarking": [
          {
            "step": "Correct sequence Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol",
            "marks": "1 Mark"
          },
          {
            "step": "Resonance stabilisation of phenoxide + -NO₂ vs -CH₃ effects",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: EWG (-NO₂) increases phenol acidity; EDG (-CH₃, -OCH₃) decreases phenol acidity.",
        "commonPitfall": "Placing 4-methylphenol above phenol."
      },
      {
        "id": "model-c12-chem-2024-dps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Solutions: Freezing Point Depression Numerical (with Van't Hoff Factor)",
        "questionText": "Calculate the freezing point of a solution containing 60 g of glucose (Molar mass = 180 g/mol) in 250 g of water (K_f for water = 1.86 K kg mol⁻¹). How would the result change if 0.33 mol of NaCl were used instead?",
        "modelAnswer": "Moles of glucose = 60 / 180 = 1/3 mol.\nMass of solvent = 250 g = 0.25 kg.\nMolality m = (1/3) / 0.25 = 4/3 ≈ 1.333 mol/kg.\nΔT_f = K_f · m = 1.86 × (4/3) = 2.48 K.\nFreezing point = 273.15 - 2.48 = 270.67 K (or -2.48°C).\nWith 0.33 mol NaCl (i ≈ 2), moles of ions double => ΔT_f ≈ 4.96 K -> freezing point drops twice as much (-4.96°C).",
        "stepMarking": [
          {
            "step": "Molality m = 1.333 mol/kg",
            "marks": "1 Mark"
          },
          {
            "step": "ΔT_f = 2.48 K -> T_f = -2.48°C (270.67 K)",
            "marks": "1 Mark"
          },
          {
            "step": "NaCl i=2 doubles depression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert solvent mass from grams to kg in molality!",
        "commonPitfall": "Taking 2.48°C instead of -2.48°C as final freezing point!"
      },
      {
        "id": "model-c12-chem-2024-dps-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Biomolecules – Carbohydrates & Glucose Structure",
        "questionText": "Read the case and answer:\nGlucose is an aldohexose that exists primarily in two cyclic hemiacetal forms (α-D-glucose and β-D-glucose) differing only in configuration around C-1 carbon. Despite having an aldehyde group, glucose does not give Schiff's test or react with NaHSO₃.\n\n(a) What name is given to the cyclic pair α-D-glucose and β-D-glucose? (1M)\n(b) Name the reaction and product when glucose is treated with (i) Bromine water, and (ii) Conc. HNO₃. (2M)\n(c) Why are sucrose and starch classified differently with respect to Fehling's reducing test? (1M)",
        "modelAnswer": "(a) Anomers (differing only at C-1 anomeric carbon).\n(b) (i) Bromine water (mild oxidant) oxidises -CHO group only -> Gluconic acid.\n(ii) Conc. HNO₃ oxidises both -CHO and primary -CH₂OH -> Saccharic acid (dicarboxylic acid).\n(c) Sucrose has both glucose C-1 and fructose C-2 anomeric carbons locked in glycosidic linkage -> NON-reducing sugar (no free hemiacetal), whereas maltose/lactose are reducing sugars.",
        "stepMarking": [
          {
            "step": "(a) Anomers",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Gluconic acid & Saccharic acid",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Glycosidic bond locks reducing groups in sucrose",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Br₂ water -> Gluconic acid; Conc. HNO₃ -> Saccharic acid; HI + Δ -> n-Hexane.",
        "commonPitfall": "Confusing Gluconic acid with Saccharic acid."
      },
      {
        "id": "model-c12-chem-2024-dps-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Integrated Rate Law & Half-Life in Chemical Kinetics",
        "questionText": "Read the case and answer:\nFor a first-order decomposition reaction R → Products, the concentration of reactant drops from 0.8 M to 0.2 M in 40 minutes at 300 K. (Given log 2 = 0.3010)\n\n(a) Determine the half-life (t₁/₂) of this reaction. (1M)\n(b) Calculate the first-order rate constant k in min⁻¹. (1.5M)\n(c) What fraction of initial reactant will remain after 60 minutes from the start? (1.5M)",
        "modelAnswer": "(a) Concentration dropped from 0.8 M -> 0.4 M -> 0.2 M (2 half-lives in 40 minutes) => t₁/₂ = 40 / 2 = 20 minutes.\n(b) k = 0.693 / t₁/₂ = 0.693 / 20 = 0.03465 min⁻¹.\n(c) 60 minutes = 3 half-lives (60/20 = 3) => Remaining fraction = (1/2)³ = 1/8 = 0.125 (12.5%).",
        "stepMarking": [
          {
            "step": "(a) 2 half-lives = 40 min -> t₁/₂ = 20 min",
            "marks": "1 Mark"
          },
          {
            "step": "(b) k = 0.03465 min⁻¹",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) (1/2)³ = 1/8 = 12.5%",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "First-order half-life is strictly INDEPENDENT of initial concentration!",
        "commonPitfall": "Using zero-order t₁/₂ formula [R]₀/(2k)."
      },
      {
        "id": "model-c12-chem-2024-dps-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "d- and f-Block Elements: KMnO₄ / K₂Cr₂O₇ Oxidising Reactions & Transition Trends",
        "questionText": "(a) Write balanced ionic equations for the oxidising action of acidified potassium permanganate (MnO₄⁻) on:\n  (i) Oxalate ion (C₂O₄²⁻)\n  (ii) Ferrous ion (Fe²⁺)\n  (iii) Iodide ion (I⁻) in neutral/faintly alkaline medium.\n(b) Account for the following:\n  (i) Transition metals form a large number of complex compounds and act as good catalysts.\n  (ii) Cu⁺ ion is unstable in aqueous solution and disproportionates.",
        "modelAnswer": "(a) (i) 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.\n(ii) MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.\n(iii) 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻ (iodate!).\n(b) (i) Complexes: small ionic size, high ionic charge, availability of vacant d-orbitals. Catalysis: ability to adopt variable oxidation states and provide surface area for adsorption.\n(ii) 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s). Although Cu⁺ has stable 3d¹⁰, the much higher negative hydration enthalpy (Δ_hyd H) of tiny doubly-charged Cu²⁺ more than compensates for the high second ionisation enthalpy of Cu.",
        "stepMarking": [
          {
            "step": "(a) All 3 balanced redox ionic equations (note IO₃⁻ in neutral/alkaline!)",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Complex/catalyst reasons + high hydration enthalpy of Cu²⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Watch out: MnO₄⁻ oxidises I⁻ to I₂ in ACIDIC medium, but to IO₃⁻ in NEUTRAL/FAINTLY ALKALINE medium!",
        "commonPitfall": "Writing I₂ instead of IO₃⁻ in neutral/alkaline medium."
      },
      {
        "id": "model-c12-chem-2024-dps-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Named Reactions & Distinguishing Tests",
        "questionText": "(a) Write chemical equations for:\n  (i) Cross-Aldol or Self-Aldol condensation of Ethanal\n  (ii) HVZ (Hell-Volhard-Zelinsky) reaction of Propanoic acid\n  (iii) Rosenmund reduction of Benzoyl chloride.\n(b) Give simple chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Phenol and Benzoic acid.",
        "modelAnswer": "(a) (i) 2 CH₃CHO --(dil. NaOH)--> CH₃CH(OH)CH₂CHO (3-Hydroxybutanal) --(Heat)--> CH₃CH=CHCHO (But-2-enal) + H₂O.\n(ii) CH₃CH₂COOH --(Cl₂/Red P, H₂O)--> CH₃CH(Cl)COOH (2-Chloropropanoic acid).\n(iii) C₆H₅COCl + H₂ --(Pd-BaSO₄)--> C₆H₅CHO + HCl.\n(b) (i) Propanal gives silver mirror with Tollens' reagent (or red Cu₂O ppt with Fehling's); Propanone does NOT (conversely, Propanone gives yellow iodoform ppt with I₂/NaOH).\n(ii) Benzoic acid gives brisk effervescence of CO₂ with NaHCO₃ solution; Phenol does not (or Phenol gives violet colour with neutral FeCl₃).",
        "stepMarking": [
          {
            "step": "(a) Aldol, HVZ & Rosenmund equations",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Tollens/Fehling & NaHCO₃/FeCl₃ tests",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Both Tollens' and Fehling's distinguish aldehydes from ketones (Note: aromatic aldehydes like Benzaldehyde do NOT respond to Fehling's test!).",
        "commonPitfall": "Using Fehling's test to detect Benzaldehyde."
      },
      {
        "id": "model-c12-chem-2024-dps-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Electrochemistry: Kohlrausch Law Numerical & Corrosion / Batteries",
        "questionText": "(a) State Kohlrausch's law of independent migration of ions. Calculate Λ°_m for acetic acid (CH₃COOH) given:\n  Λ°_m(HCl) = 425.9 S cm² mol⁻¹, Λ°_m(NaCl) = 126.4 S cm² mol⁻¹, Λ°_m(CH₃COONa) = 91.0 S cm² mol⁻¹.\n(b) If conductivity of 0.00241 M acetic acid is 7.896 × 10⁻⁵ S cm⁻¹, calculate its molar conductivity Λ_m and degree of dissociation α (using Λ°_m = 390.5 S cm² mol⁻¹).",
        "modelAnswer": "(a) Kohlrausch Law: Limiting molar conductivity of an electrolyte equals the sum of individual limiting ionic conductivities of its cation and anion.\nΛ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 390.5 S cm² mol⁻¹.\n(b) Λ_m = (κ × 1000) / M = (7.896 × 10⁻⁵ × 1000) / 0.00241 = 0.07896 / 0.00241 = 32.76 S cm² mol⁻¹.\nDegree of dissociation α = Λ_m / Λ°_m = 32.76 / 390.5 ≈ 0.084 (8.4%).",
        "stepMarking": [
          {
            "step": "(a) Statement + 390.5 S cm² mol⁻¹ calculation",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Λ_m = 32.76 & α = 0.084",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Check units carefully: κ in S/cm uses factor 1000 in (κ × 1000)/M.",
        "commonPitfall": "Subtracting NaCl twice or omitting factor 1000."
      }
    ]
  },
  {
    "id": "model-c12-chem-2024-cfpq",
    "title": "CBSE CFPQ Competency Practice Class 12 Chemistry Paper (2024-25)",
    "subject": "Chemistry",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "CFPQ/C12/CHE-02",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 (12 MCQs + 4 Assertion-Reason) carrying 1 mark each.",
      "Section B: Q17 to Q21 carrying 2 marks each.",
      "Section C: Q22 to Q28 carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-chem-2024-cfpq-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Alcohols, Phenols & Ethers: Lucas Test & Acidity",
        "questionText": "Lucas reagent (conc. HCl + anhydrous ZnCl₂) produces immediate turbidity at room temperature with:",
        "options": [
          "A) Propan-1-ol",
          "B) Propan-2-ol",
          "C) 2-Methylpropan-2-ol (tert-butyl alcohol)",
          "D) Phenol"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Lucas test proceeds via carbocation intermediate: 3° alcohols form very stable 3° carbocation and turn turbid IMMEDIATELY; 2° takes ~5 minutes; 1° shows no turbidity at room temp.",
        "stepMarking": [
          {
            "step": "3° alcohol (2-methylpropan-2-ol) -> immediate turbidity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 3° immediate, 2° in 5 min, 1° only on heating.",
        "commonPitfall": "Choosing Phenol (which does not undergo C–O cleavage with Lucas)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Aldol vs Cannizzaro",
        "questionText": "Which of the following aldehydes undergoes Cannizzaro reaction (self-oxidation-reduction) when heated with concentrated NaOH?",
        "options": [
          "A) Ethanal (CH₃CHO)",
          "B) Propanal (CH₃CH₂CHO)",
          "C) Benzaldehyde (C₆H₅CHO)",
          "D) Butanal"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aldehydes lacking α-hydrogen atoms (like HCHO and C₆H₅CHO) undergo Cannizzaro disproportionation in conc. alkali to yield an alcohol and a carboxylate salt.",
        "stepMarking": [
          {
            "step": "No α-hydrogen in Benzaldehyde -> Cannizzaro reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "α-H present => Aldol condensation; No α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO) => Cannizzaro!",
        "commonPitfall": "Choosing Ethanal (which has 3 α-hydrogens and gives Aldol)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Basicity in Aqueous Solution (Ethyl Amines)",
        "questionText": "The correct decreasing order of basic strength of ethylamines in AQUEOUS solution is:",
        "options": [
          "A) (C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃",
          "B) (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
          "C) C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃",
          "D) NH₃ > C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Combining +I effect, solvation (hydration) stability, and steric hindrance in water: Ethyl series is 2° > 3° > 1° > NH₃ (whereas Methyl series is 2° > 1° > 3° > NH₃!).",
        "stepMarking": [
          {
            "step": "Aqueous Ethyl order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize NCERT aqueous code: Ethyl = 231, Methyl = 213! Gas phase is always 3 > 2 > 1.",
        "commonPitfall": "Mixing up Methyl (213) and Ethyl (231) aqueous orders."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Biomolecules: DNA Base Pairing & Vitamins",
        "questionText": "Deficiency of Vitamin C (ascorbic acid) causes which disease, and which base is present in RNA but absent in DNA?",
        "options": [
          "A) Beri-beri; Thymine",
          "B) Scurvy; Uracil",
          "C) Rickets; Cytosine",
          "D) Night blindness; Guanine"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vitamin C deficiency causes Scurvy (bleeding gums). RNA contains Uracil (U) in place of Thymine (T) found in DNA.",
        "stepMarking": [
          {
            "step": "Scurvy + Uracil in RNA",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Water-soluble vitamins: B-complex and C (cannot be stored long in body except B₁₂).",
        "commonPitfall": "Swapping Uracil and Thymine."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Azeotropes & Raoult Law Deviations",
        "questionText": "A mixture of ethanol and acetone shows positive deviation from Raoult's law because:",
        "options": [
          "A) Ethanol-acetone hydrogen bonding is stronger than pure ethanol H-bonds",
          "B) Acetone molecules break existing hydrogen bonds between ethanol molecules, weakening intermolecular attraction",
          "C) Vapour pressure of mixture is lower than ideal",
          "D) Δ_mix H is negative"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pure ethanol molecules are strongly H-bonded; adding acetone separates ethanol molecules and breaks some H-bonds, resulting in weaker A–B interactions, higher vapour pressure, Δ_mix H > 0 and Δ_mix V > 0.",
        "stepMarking": [
          {
            "step": "Weaker A-B interactions -> positive deviation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Positive deviation forms MINIMUM-boiling azeotropes; negative deviation (CHCl₃ + acetone, HNO₃ + H₂O) forms MAXIMUM-boiling azeotropes.",
        "commonPitfall": "Confusing positive deviation with maximum-boiling azeotrope."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Van't Hoff Factor (i)",
        "questionText": "Which of the following 0.1 M aqueous solutions will exhibit the HIGHEST boiling point (assume 100% dissociation)?",
        "options": [
          "A) Glucose",
          "B) NaCl",
          "C) CaCl₂",
          "D) Al₂(SO₄)₃"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Elevation in boiling point ΔT_b = i·K_b·m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ -> van't Hoff factor i = 5 (highest among glucose=1, NaCl=2, CaCl₂=3).",
        "stepMarking": [
          {
            "step": "Al₂(SO₄)₃ gives i = 5 -> max ΔT_b",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For highest freezing point (lowest ΔT_f), choose SMALLEST i (Glucose)! For highest boiling point / osmotic pressure, choose LARGEST i!",
        "commonPitfall": "Selecting Glucose when highest boiling point is asked."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Electrochemistry: Kohlrausch Law & Conductance",
        "questionText": "On dilution of both a strong electrolyte (KCl) and a weak electrolyte (CH₃COOH), which statement holds true?",
        "options": [
          "A) Molar conductivity Λ_m increases for both, while conductivity κ decreases for both",
          "B) Both κ and Λ_m increase",
          "C) Λ_m decreases for weak electrolyte",
          "D) Conductivity κ increases on dilution"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Conductivity (κ) decreases on dilution because number of ions per unit volume decreases. Molar conductivity (Λ_m = κ × 1000 / M) increases due to rise in volume V (strong) and surge in degree of dissociation α (weak).",
        "stepMarking": [
          {
            "step": "κ decreases (fewer ions/mL), Λ_m increases on dilution",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize contrast: κ ALWAYS decreases with dilution; Λ_m ALWAYS increases with dilution.",
        "commonPitfall": "Saying conductivity κ increases with dilution."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Kinetics: Units of Rate Constant",
        "questionText": "The rate constant of a chemical reaction has units mol⁻¹ L s⁻¹. What is the overall order of this reaction?",
        "options": [
          "A) Zero order",
          "B) First order",
          "C) Second order",
          "D) Third order"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. General unit of k is (mol L⁻¹)^(1-n) s⁻¹. Setting 1 - n = -1 => n = 2 (Second order).",
        "stepMarking": [
          {
            "step": "Apply (mol/L)^(1-n) s⁻¹ -> n = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Zero order = mol L⁻¹ s⁻¹; First order = s⁻¹; Second order = mol⁻¹ L s⁻¹.",
        "commonPitfall": "Mixing up zero-order and second-order signs."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "d- and f-Block Elements: Paramagnetism & Spin-Only Moment",
        "questionText": "Which of the following 3d transition metal ions has the highest magnetic moment (spin-only)?",
        "options": [
          "A) Ti³⁺ (Z = 22)",
          "B) V²⁺ (Z = 23)",
          "C) Mn²⁺ (Z = 25)",
          "D) Cu²⁺ (Z = 29)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mn²⁺ has [Ar] 3d⁵ configuration with 5 unpaired electrons, giving μ = √(5(5+2)) = √35 ≈ 5.92 BM (maximum among all 3d ions).",
        "stepMarking": [
          {
            "step": "Mn²⁺ (3d⁵ -> 5 unpaired e⁻) => μ = 5.92 BM",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall μ = √(n(n+2)) BM; maximum unpaired electrons in d-orbitals is 5.",
        "commonPitfall": "Confusing Mn²⁺ (3d⁵) with Fe²⁺ (3d⁶, only 4 unpaired e⁻)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: IUPAC Nomenclature & Linkage Isomerism",
        "questionText": "The IUPAC name of the coordination complex [Pt(NH₃)₂Cl(NO₂)] is:",
        "options": [
          "A) Diamminechloridonitrito-N-platinum(II)",
          "B) Diamminechloronitritoplatinum(IV)",
          "C) Platinum(II) diamminechloronitrite",
          "D) Nitrito-N-diamminechloroplatinum(0)"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Alphabetical ligand order: ammine, chlorido, nitrito-N (or nitro). Oxidation state of Pt: x + 0 - 1 - 1 = 0 => +2 (II). Name: Diamminechloridonitrito-N-platinum(II).",
        "stepMarking": [
          {
            "step": "Alphabetical ligands + Pt(II) oxidation state",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ignore \"di/tri\" prefixes when alphabetizing ligands (ammine -> chlorido -> nitrito).",
        "commonPitfall": "Miscomputing Pt oxidation state as IV instead of II."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: Crystal Field Splitting Δ₀",
        "questionText": "Which complex ion is low-spin (inner orbital, d²sp³ hybridised) and diamagnetic?",
        "options": [
          "A) [CoF₆]³⁻",
          "B) [FeF₆]³⁻",
          "C) [Co(NH₃)₆]³⁺",
          "D) [NiCl₄]²⁻"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Co³⁺ is 3d⁶. NH₃ is a strong-field ligand (Δ₀ > P), forcing all 6 electrons to pair in t₂g⁶ e_g⁰ (0 unpaired e⁻, diamagnetic, d²sp³). F⁻ is weak-field leaving [CoF₆]³⁻ high-spin paramagnetic (sp³d²).",
        "stepMarking": [
          {
            "step": "Strong-field NH₃ pairs Co³⁺ 3d⁶ -> d²sp³ diamagnetic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strong-field ligands in NCERT: CO, CN⁻, en, NH₃ (for Co³⁺).",
        "commonPitfall": "Thinking [CoF₆]³⁻ is diamagnetic."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Haloalkanes & Haloarenes: SN1 vs SN2 Reactivity",
        "questionText": "Which alkyl halide undergoes S_N2 nucleophilic substitution reaction at the FASTEST rate?",
        "options": [
          "A) (CH₃)₃C–Br",
          "B) (CH₃)₂CH–Br",
          "C) CH₃CH₂–Br",
          "D) CH₃–Br"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. S_N2 proceeds via backside attack with a pentavalent transition state; least steric hindrance gives fastest rate: CH₃X > 1° > 2° > 3°.",
        "stepMarking": [
          {
            "step": "Least steric hindrance -> CH₃–Br fastest in SN2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "SN2 order: 0° (methyl) > 1° > 2° > 3°; SN1 order: 3° > 2° > 1°.",
        "commonPitfall": "Selecting 3° butyl bromide (which is fastest for SN1, slowest for SN2)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Osmotic Pressure for Polymers",
        "questionText": "Assertion (A): Osmotic pressure method is preferred over boiling point elevation for determining molar masses of proteins and polymers.\nReason (R): Osmotic pressure is measured at room temperature and has appreciable magnitude even for very dilute solutions.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Biomolecules decompose on heating (unlike boiling point) and show tiny ΔT_b at low molarity, whereas π is large enough to read accurately at room temperature.",
        "stepMarking": [
          {
            "step": "Option (A) citing room temp & measurable magnitude",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also note molarity (M) is used in π = CRT instead of molality.",
        "commonPitfall": "Saying polymers are insoluble in water."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Haloarenes: Lower Reactivity Toward Nucleophilic Substitution",
        "questionText": "Assertion (A): Chlorobenzene is much less reactive towards nucleophilic substitution than chloroethane.\nReason (R): In chlorobenzene, the C–Cl bond acquires partial double-bond character due to resonance, and carbon is sp²-hybridised.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Resonance structures give C–Cl partial double-bond strength (shorter, harder to cleave), plus sp² C holds electrons tightly and phenyl cation is unstable.",
        "stepMarking": [
          {
            "step": "Option (A) citing resonance partial double-bond & sp² carbon",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember all 4 NCERT reasons for haloarene inertness in S_N.",
        "commonPitfall": "Marking (B)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes & Ketones: Acidic Strength of Haloacetic Acids",
        "questionText": "Assertion (A): Trichloroacetic acid (CCl₃COOH) is a stronger acid than acetic acid (CH₃COOH).\nReason (R): Three strongly electron-withdrawing -Cl atoms exert a strong -I effect, dispersing the negative charge of the conjugate carboxylate ion and stabilising it.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Electron-withdrawing groups (-I) stabilise RCOO⁻ and increase K_a (decrease pK_a), whereas +I groups like -CH₃ decrease acidity.",
        "stepMarking": [
          {
            "step": "Option (A) citing -I stabilisation of conjugate base",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher K_a = Lower pK_a = Stronger Acid!",
        "commonPitfall": "Confusing +I vs -I effects."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Aniline Fails Friedel-Crafts Reaction",
        "questionText": "Assertion (A): Aniline does not undergo Friedel-Crafts alkylation or acylation.\nReason (R): Aniline acts as a Lewis base and reacts with the Lewis acid catalyst Anhydrous AlCl₃ to form a salt, turning nitrogen positively charged and strongly deactivating the ring.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. C₆H₅NH₂ + AlCl₃ → C₆H₅NH₂⁺ AlCl₃⁻; the positively charged N strongly withdraws electrons (-I), deactivating the benzene ring toward electrophilic substitution.",
        "stepMarking": [
          {
            "step": "Option (A) explaining AlCl₃ salt formation & deactivation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reason applies why nitration of aniline gives unexpected 47% meta-nitroaniline (anilinium ion formation in strong acid)!",
        "commonPitfall": "Saying -NH₂ itself is a deactivating group (it is actually strongly activating when free!)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Kinetics: Pseudo-First Order & Half-Life",
        "questionText": "Show that for a first-order reaction, the time required for completion of 99.9% of the reaction is approximately 10 times its half-life (t₁/₂). (Given log 2 = 0.3010)",
        "modelAnswer": "t₁/₂ = 0.693 / k.\nFor 99.9% completion: [R]₀ = 100, remaining [R] = 100 - 99.9 = 0.1.\nt_99.9% = (2.303 / k) log₁₀(100 / 0.1) = (2.303 / k) log₁₀(10³) = (2.303 × 3) / k = 6.909 / k.\nRatio t_99.9% / t₁/₂ = (6.909 / k) / (0.693 / k) = 6.909 / 0.693 ≈ 9.97 ≈ 10.",
        "stepMarking": [
          {
            "step": "Compute t_99.9% = 6.909/k using remaining [R] = 0.1",
            "marks": "1 Mark"
          },
          {
            "step": "Take ratio 6.909 / 0.693 ≈ 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Remaining concentration [R] = [R]₀ - 99.9% = 0.1% of [R]₀!",
        "commonPitfall": "Plugging 99.9 in the denominator instead of remaining 0.1."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "d- and f-Block: Lanthanoid Contraction Causes & Consequences",
        "questionText": "What is Lanthanoid contraction? Mention two important consequences of lanthanoid contraction.",
        "modelAnswer": "Lanthanoid contraction: Steady decrease in atomic and ionic radii from La³⁺ to Lu³⁺ across the 4f series due to poor shielding effect of inner 4f electrons against increasing nuclear charge.\nConsequences:\n1. Zr (4d) and Hf (5d) have almost identical atomic radii (160 pm vs 159 pm) and very similar chemical properties.\n2. Basicity of lanthanoid hydroxides decreases steadily from La(OH)₃ to Lu(OH)₃.",
        "stepMarking": [
          {
            "step": "Definition + poor 4f shielding",
            "marks": "1 Mark"
          },
          {
            "step": "Two consequences (Zr/Hf pair & hydroxide basicity)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Poor shielding order: s > p > d > f (4f shields very poorly!).",
        "commonPitfall": "Saying nuclear charge decreases across lanthanoids."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Alcohols, Phenols & Ethers: Reimer-Tiemann & Kolbe Reactions",
        "questionText": "Write the balanced chemical equations for:\n(i) Reimer-Tiemann reaction of phenol\n(ii) Williamson synthesis of tert-butyl ethyl ether (CH₃)₃C–O–C₂H₅ using proper reactants.",
        "modelAnswer": "(i) Reimer-Tiemann: Phenol + CHCl₃ + 3NaOH --(340K)--> Sodium salicylate intermediate --(H⁺)--> Salicylaldehyde (2-hydroxybenzaldehyde) + 3NaCl + 2H₂O.\n(ii) Williamson Synthesis: Must use 3° alkoxide + 1° alkyl halide (NOT 3° halide, which gives alkene elimination!):\n(CH₃)₃C–O⁻Na⁺ + CH₃CH₂–Br → (CH₃)₃C–O–C₂H₅ + NaBr.",
        "stepMarking": [
          {
            "step": "(i) Phenol + CHCl₃ + aq. NaOH -> Salicylaldehyde",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Sodium tert-butoxide + ethyl bromide -> ether",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In Williamson synthesis of tert-butyl ethers, NEVER choose (CH₃)₃C-Br + C₂H₅ONa — it produces 2-methylpropene instead of ether!",
        "commonPitfall": "Using tert-butyl bromide in Williamson synthesis."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Biomolecules: Anomers vs Epimers / Zwitterion / Protein Denaturation",
        "questionText": "What is meant by denaturation of a protein? Give one example, and state which levels of protein structure are destroyed vs retained.",
        "modelAnswer": "Denaturation: Disruption of native 3D biological structure of a protein due to physical change (heat) or chemical change (pH alteration), disrupting hydrogen bonds so globules unfold and protein loses biological activity.\nExample: Coagulation of egg white on boiling, or curdling of milk.\nEffect on structure: Secondary and Tertiary structures are destroyed, while the Primary structure (peptide sequence) remains intact.",
        "stepMarking": [
          {
            "step": "Definition + example (boiled egg white / curdling)",
            "marks": "1 Mark"
          },
          {
            "step": "2° & 3° destroyed; 1° structure remains intact",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Primary peptide bonds are NOT broken during denaturation.",
        "commonPitfall": "Saying primary amino acid sequence is broken."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Electrochemistry: Faraday's First Law & Fuel Cell",
        "questionText": "How many Coulombs of electricity are required to reduce 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium? Also write the overall reaction of an H₂–O₂ fuel cell.",
        "modelAnswer": "Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.\n5 moles of electrons are required per mole MnO₄⁻ => Charge Q = 5 F = 5 × 96500 C = 482,500 C.\nH₂–O₂ Fuel Cell overall reaction: 2H₂(g) + O₂(g) → 2H₂O(l).",
        "stepMarking": [
          {
            "step": "5 F = 482,500 C calculation",
            "marks": "1 Mark"
          },
          {
            "step": "Fuel cell reaction 2H₂ + O₂ -> 2H₂O",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Oxidation state change of Mn: +7 -> +2 => n = 5 electrons.",
        "commonPitfall": "Using n = 3 (MnO₂ neutral product) instead of n = 5."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Kinetics: Arrhenius Activation Energy Numerical",
        "questionText": "The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy E_a of the reaction. (R = 8.314 J/mol·K, log 2 = 0.3010)",
        "modelAnswer": "Using Arrhenius two-temperature equation:\nlog₁₀(k₂ / k₁) = [E_a / (2.303 R)] × [ (T₂ - T₁) / (T₁ T₂) ]\nlog₁₀(2) = [E_a / (2.303 × 8.314)] × [ 10 / (298 × 308) ]\n0.3010 = (E_a / 19.147) × (10 / 91784)\nE_a = (0.3010 × 19.147 × 91784) / 10 ≈ 52,898 J/mol = 52.9 kJ/mol.",
        "stepMarking": [
          {
            "step": "Arrhenius formula with k₂/k₁ = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Substitute T₁=298 K, T₂=308 K",
            "marks": "1 Mark"
          },
          {
            "step": "E_a ≈ 52.9 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write E_a in both J/mol and kJ/mol cleanly.",
        "commonPitfall": "Using Celsius 25 and 35 instead of Kelvin 298 and 308."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Coordination Compounds: CFT Splitting & Geometry of [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻",
        "questionText": "Using Valence Bond Theory, explain why [Ni(CN)₄]²⁻ is square planar and diamagnetic whereas [NiCl₄]²⁻ is tetrahedral and paramagnetic (Atomic number of Ni = 28).",
        "modelAnswer": "Ni²⁺ has 3d⁸ configuration (two unpaired e⁻ in 3d).\n1. In [Ni(CN)₄]²⁻, CN⁻ is a strong-field ligand causing pairing of the two unpaired 3d electrons, vacating one 3d orbital. Hybridisation is dsp² -> Square Planar geometry and diamagnetic (0 unpaired e⁻).\n2. In [NiCl₄]²⁻, Cl⁻ is a weak-field ligand unable to pair 3d electrons -> outer 4s and 4p orbitals hybridise (sp³) -> Tetrahedral geometry with 2 unpaired electrons (paramagnetic, μ ≈ 2.83 BM).",
        "stepMarking": [
          {
            "step": "Ni²⁺ 3d⁸ ground state",
            "marks": "0.5 Mark"
          },
          {
            "step": "[Ni(CN)₄]²⁻ pairing -> dsp², square planar, diamagnetic",
            "marks": "1.25 Marks"
          },
          {
            "step": "[NiCl₄]²⁻ no pairing -> sp³, tetrahedral, paramagnetic (2 unpaired e⁻)",
            "marks": "1.25 Marks"
          }
        ],
        "examinerTip": "Both have coordination number 4, making it the classic CN=4 VBT comparison!",
        "commonPitfall": "Assigning sp³d² instead of dsp² / sp³."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Haloalkanes: Conversions & Ambident Nucleophiles",
        "questionText": "(a) Explain why haloalkanes react with KCN to form alkyl cyanides as major products, whereas with AgCN they yield isocyanides.\n(b) Convert Propene to Propan-1-ol.",
        "modelAnswer": "(a) CN⁻ is an ambident nucleophile (can attack through C or N). KCN is predominantly ionic, leaving C-end free to form stronger C–C bond (alkyl cyanide R–CN). AgCN is largely covalent, so the lone pair on Nitrogen attacks R–X forming isocyanide (R–NC).\n(b) Propene + HBr (with peroxide) → 1-Bromopropane --(aq. KOH)--> Propan-1-ol (or Hydroboration-Oxidation directly with B₂H₆ followed by H₂O₂/OH⁻).",
        "stepMarking": [
          {
            "step": "(a) Ionic KCN (R-CN) vs covalent AgCN (R-NC) ambident logic",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Hydroboration-oxidation or peroxide-HBr + aq. KOH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same ambident distinction applies to KNO₂ (R-ONO) vs AgNO₂ (R-NO₂)!",
        "commonPitfall": "Saying KCN is covalent and AgCN is ionic."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Amines: Gabriel Phthalimide Synthesis & Hinsberg Test",
        "questionText": "(a) Why cannot aromatic primary amines (like Aniline) be prepared by Gabriel phthalimide synthesis?\n(b) How does Hinsberg's reagent (benzenesulphonyl chloride, C₆H₅SO₂Cl) distinguish between primary, secondary, and tertiary amines?",
        "modelAnswer": "(a) Gabriel phthalimide synthesis involves S_N2 nucleophilic attack of phthalimide anion on an alkyl halide. Aryl halides (like chlorobenzene) do NOT undergo nucleophilic substitution easily due to partial double-bond character of C–X bond, so aniline cannot be prepared.\n(b) With C₆H₅SO₂Cl:\n• 1° Amine forms N-alkylbenzenesulphonamide which dissolves in aq. KOH (has acidic N–H proton).\n• 2° Amine forms N,N-dialkylbenzenesulphonamide which is INSOLUBLE in aq. KOH (no acidic N–H).\n• 3° Amine does NOT react at all.",
        "stepMarking": [
          {
            "step": "(a) Aryl halides resist SN2 attack by phthalimide ion",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Hinsberg observations for 1°, 2°, 3° amines",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Note: Hinsberg reagent distinguishes amines by presence of acidic H on sulphonamide nitrogen!",
        "commonPitfall": "Thinking 2° amine product dissolves in KOH."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Alcohols, Phenols & Ethers: Acid-Catalysed Hydration & Phenol Acidity",
        "questionText": "Arrange the following in increasing order of acidic strength and justify: Propan-1-ol, Phenol, 4-Nitrophenol, 4-Methylphenol (p-cresol).",
        "modelAnswer": "Increasing acidic strength: Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol.\nJustification:\n• Phenols are vastly more acidic than aliphatic alcohols because phenoxide ion is resonance-stabilised.\n• In 4-nitrophenol, the strongly electron-withdrawing -NO₂ group (-R and -I) disperses negative charge on phenoxide oxygen, increasing acidity.\n• In 4-methylphenol, electron-donating -CH₃ (+I and hyperconjugation) intensifies negative charge, destabilising phenoxide ion and decreasing acidity.",
        "stepMarking": [
          {
            "step": "Correct sequence Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol",
            "marks": "1 Mark"
          },
          {
            "step": "Resonance stabilisation of phenoxide + -NO₂ vs -CH₃ effects",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: EWG (-NO₂) increases phenol acidity; EDG (-CH₃, -OCH₃) decreases phenol acidity.",
        "commonPitfall": "Placing 4-methylphenol above phenol."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Solutions: Freezing Point Depression Numerical (with Van't Hoff Factor)",
        "questionText": "Calculate the freezing point of a solution containing 60 g of glucose (Molar mass = 180 g/mol) in 250 g of water (K_f for water = 1.86 K kg mol⁻¹). How would the result change if 0.33 mol of NaCl were used instead?",
        "modelAnswer": "Moles of glucose = 60 / 180 = 1/3 mol.\nMass of solvent = 250 g = 0.25 kg.\nMolality m = (1/3) / 0.25 = 4/3 ≈ 1.333 mol/kg.\nΔT_f = K_f · m = 1.86 × (4/3) = 2.48 K.\nFreezing point = 273.15 - 2.48 = 270.67 K (or -2.48°C).\nWith 0.33 mol NaCl (i ≈ 2), moles of ions double => ΔT_f ≈ 4.96 K -> freezing point drops twice as much (-4.96°C).",
        "stepMarking": [
          {
            "step": "Molality m = 1.333 mol/kg",
            "marks": "1 Mark"
          },
          {
            "step": "ΔT_f = 2.48 K -> T_f = -2.48°C (270.67 K)",
            "marks": "1 Mark"
          },
          {
            "step": "NaCl i=2 doubles depression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert solvent mass from grams to kg in molality!",
        "commonPitfall": "Taking 2.48°C instead of -2.48°C as final freezing point!"
      },
      {
        "id": "model-c12-chem-2024-cfpq-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Electrochemistry: Nernst Equation Cell EMF Numerical at 298 K",
        "questionText": "Calculate the EMF of the cell at 298 K:\nMg(s) | Mg²⁺ (0.001 M) || Cu²⁺ (0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.36 V, E°(Cu²⁺/Cu) = +0.34 V. (Use 0.059/2 ≈ 0.0295)",
        "modelAnswer": "Cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) (n = 2 electrons).\nE°_cell = E°_cathode - E°_anode = 0.34 - (-2.36) = +2.70 V.\nNernst Equation at 298 K:\nE_cell = E°_cell - (0.059 / 2) log₁₀([Mg²⁺] / [Cu²⁺])\n= 2.70 - 0.0295 log₁₀(10⁻³ / 10⁻⁴) = 2.70 - 0.0295 log₁₀(10)\n= 2.70 - 0.0295 = 2.6705 V.",
        "stepMarking": [
          {
            "step": "E°_cell = 2.70 V & n = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Nernst setup [Mg²⁺]/[Cu²⁺] = 10",
            "marks": "1 Mark"
          },
          {
            "step": "E_cell = 2.67 V",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Put Anode product concentration [Mg²⁺] in numerator and Cathode reactant [Cu²⁺] in denominator!",
        "commonPitfall": "Inverting ratio as [Cu²⁺]/[Mg²⁺] or taking n = 1."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Integrated Rate Law & Half-Life in Chemical Kinetics",
        "questionText": "Read the case and answer:\nFor a first-order decomposition reaction R → Products, the concentration of reactant drops from 0.8 M to 0.2 M in 40 minutes at 300 K. (Given log 2 = 0.3010)\n\n(a) Determine the half-life (t₁/₂) of this reaction. (1M)\n(b) Calculate the first-order rate constant k in min⁻¹. (1.5M)\n(c) What fraction of initial reactant will remain after 60 minutes from the start? (1.5M)",
        "modelAnswer": "(a) Concentration dropped from 0.8 M -> 0.4 M -> 0.2 M (2 half-lives in 40 minutes) => t₁/₂ = 40 / 2 = 20 minutes.\n(b) k = 0.693 / t₁/₂ = 0.693 / 20 = 0.03465 min⁻¹.\n(c) 60 minutes = 3 half-lives (60/20 = 3) => Remaining fraction = (1/2)³ = 1/8 = 0.125 (12.5%).",
        "stepMarking": [
          {
            "step": "(a) 2 half-lives = 40 min -> t₁/₂ = 20 min",
            "marks": "1 Mark"
          },
          {
            "step": "(b) k = 0.03465 min⁻¹",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) (1/2)³ = 1/8 = 12.5%",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "First-order half-life is strictly INDEPENDENT of initial concentration!",
        "commonPitfall": "Using zero-order t₁/₂ formula [R]₀/(2k)."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Biomolecules – Carbohydrates & Glucose Structure",
        "questionText": "Read the case and answer:\nGlucose is an aldohexose that exists primarily in two cyclic hemiacetal forms (α-D-glucose and β-D-glucose) differing only in configuration around C-1 carbon. Despite having an aldehyde group, glucose does not give Schiff's test or react with NaHSO₃.\n\n(a) What name is given to the cyclic pair α-D-glucose and β-D-glucose? (1M)\n(b) Name the reaction and product when glucose is treated with (i) Bromine water, and (ii) Conc. HNO₃. (2M)\n(c) Why are sucrose and starch classified differently with respect to Fehling's reducing test? (1M)",
        "modelAnswer": "(a) Anomers (differing only at C-1 anomeric carbon).\n(b) (i) Bromine water (mild oxidant) oxidises -CHO group only -> Gluconic acid.\n(ii) Conc. HNO₃ oxidises both -CHO and primary -CH₂OH -> Saccharic acid (dicarboxylic acid).\n(c) Sucrose has both glucose C-1 and fructose C-2 anomeric carbons locked in glycosidic linkage -> NON-reducing sugar (no free hemiacetal), whereas maltose/lactose are reducing sugars.",
        "stepMarking": [
          {
            "step": "(a) Anomers",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Gluconic acid & Saccharic acid",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Glycosidic bond locks reducing groups in sucrose",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Br₂ water -> Gluconic acid; Conc. HNO₃ -> Saccharic acid; HI + Δ -> n-Hexane.",
        "commonPitfall": "Confusing Gluconic acid with Saccharic acid."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Named Reactions & Distinguishing Tests",
        "questionText": "(a) Write chemical equations for:\n  (i) Cross-Aldol or Self-Aldol condensation of Ethanal\n  (ii) HVZ (Hell-Volhard-Zelinsky) reaction of Propanoic acid\n  (iii) Rosenmund reduction of Benzoyl chloride.\n(b) Give simple chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Phenol and Benzoic acid.",
        "modelAnswer": "(a) (i) 2 CH₃CHO --(dil. NaOH)--> CH₃CH(OH)CH₂CHO (3-Hydroxybutanal) --(Heat)--> CH₃CH=CHCHO (But-2-enal) + H₂O.\n(ii) CH₃CH₂COOH --(Cl₂/Red P, H₂O)--> CH₃CH(Cl)COOH (2-Chloropropanoic acid).\n(iii) C₆H₅COCl + H₂ --(Pd-BaSO₄)--> C₆H₅CHO + HCl.\n(b) (i) Propanal gives silver mirror with Tollens' reagent (or red Cu₂O ppt with Fehling's); Propanone does NOT (conversely, Propanone gives yellow iodoform ppt with I₂/NaOH).\n(ii) Benzoic acid gives brisk effervescence of CO₂ with NaHCO₃ solution; Phenol does not (or Phenol gives violet colour with neutral FeCl₃).",
        "stepMarking": [
          {
            "step": "(a) Aldol, HVZ & Rosenmund equations",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Tollens/Fehling & NaHCO₃/FeCl₃ tests",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Both Tollens' and Fehling's distinguish aldehydes from ketones (Note: aromatic aldehydes like Benzaldehyde do NOT respond to Fehling's test!).",
        "commonPitfall": "Using Fehling's test to detect Benzaldehyde."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Electrochemistry: Kohlrausch Law Numerical & Corrosion / Batteries",
        "questionText": "(a) State Kohlrausch's law of independent migration of ions. Calculate Λ°_m for acetic acid (CH₃COOH) given:\n  Λ°_m(HCl) = 425.9 S cm² mol⁻¹, Λ°_m(NaCl) = 126.4 S cm² mol⁻¹, Λ°_m(CH₃COONa) = 91.0 S cm² mol⁻¹.\n(b) If conductivity of 0.00241 M acetic acid is 7.896 × 10⁻⁵ S cm⁻¹, calculate its molar conductivity Λ_m and degree of dissociation α (using Λ°_m = 390.5 S cm² mol⁻¹).",
        "modelAnswer": "(a) Kohlrausch Law: Limiting molar conductivity of an electrolyte equals the sum of individual limiting ionic conductivities of its cation and anion.\nΛ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 390.5 S cm² mol⁻¹.\n(b) Λ_m = (κ × 1000) / M = (7.896 × 10⁻⁵ × 1000) / 0.00241 = 0.07896 / 0.00241 = 32.76 S cm² mol⁻¹.\nDegree of dissociation α = Λ_m / Λ°_m = 32.76 / 390.5 ≈ 0.084 (8.4%).",
        "stepMarking": [
          {
            "step": "(a) Statement + 390.5 S cm² mol⁻¹ calculation",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Λ_m = 32.76 & α = 0.084",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Check units carefully: κ in S/cm uses factor 1000 in (κ × 1000)/M.",
        "commonPitfall": "Subtracting NaCl twice or omitting factor 1000."
      },
      {
        "id": "model-c12-chem-2024-cfpq-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "d- and f-Block Elements: KMnO₄ / K₂Cr₂O₇ Oxidising Reactions & Transition Trends",
        "questionText": "(a) Write balanced ionic equations for the oxidising action of acidified potassium permanganate (MnO₄⁻) on:\n  (i) Oxalate ion (C₂O₄²⁻)\n  (ii) Ferrous ion (Fe²⁺)\n  (iii) Iodide ion (I⁻) in neutral/faintly alkaline medium.\n(b) Account for the following:\n  (i) Transition metals form a large number of complex compounds and act as good catalysts.\n  (ii) Cu⁺ ion is unstable in aqueous solution and disproportionates.",
        "modelAnswer": "(a) (i) 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.\n(ii) MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.\n(iii) 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻ (iodate!).\n(b) (i) Complexes: small ionic size, high ionic charge, availability of vacant d-orbitals. Catalysis: ability to adopt variable oxidation states and provide surface area for adsorption.\n(ii) 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s). Although Cu⁺ has stable 3d¹⁰, the much higher negative hydration enthalpy (Δ_hyd H) of tiny doubly-charged Cu²⁺ more than compensates for the high second ionisation enthalpy of Cu.",
        "stepMarking": [
          {
            "step": "(a) All 3 balanced redox ionic equations (note IO₃⁻ in neutral/alkaline!)",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Complex/catalyst reasons + high hydration enthalpy of Cu²⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Watch out: MnO₄⁻ oxidises I⁻ to I₂ in ACIDIC medium, but to IO₃⁻ in NEUTRAL/FAINTLY ALKALINE medium!",
        "commonPitfall": "Writing I₂ instead of IO₃⁻ in neutral/alkaline medium."
      }
    ]
  },
  {
    "id": "model-c12-chem-2023-dav",
    "title": "DAV Schools National Class 12 Chemistry Pre-Board (2023)",
    "subject": "Chemistry",
    "targetClass": "Class 12",
    "year": 2023,
    "paperType": "PRE_BOARD",
    "paperCode": "DAV/C12/CHE-03",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 (12 MCQs + 4 Assertion-Reason) carrying 1 mark each.",
      "Section B: Q17 to Q21 carrying 2 marks each.",
      "Section C: Q22 to Q28 carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-chem-2023-dav-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Basicity in Aqueous Solution (Ethyl Amines)",
        "questionText": "The correct decreasing order of basic strength of ethylamines in AQUEOUS solution is:",
        "options": [
          "A) (C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃",
          "B) (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
          "C) C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃",
          "D) NH₃ > C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Combining +I effect, solvation (hydration) stability, and steric hindrance in water: Ethyl series is 2° > 3° > 1° > NH₃ (whereas Methyl series is 2° > 1° > 3° > NH₃!).",
        "stepMarking": [
          {
            "step": "Aqueous Ethyl order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize NCERT aqueous code: Ethyl = 231, Methyl = 213! Gas phase is always 3 > 2 > 1.",
        "commonPitfall": "Mixing up Methyl (213) and Ethyl (231) aqueous orders."
      },
      {
        "id": "model-c12-chem-2023-dav-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Biomolecules: DNA Base Pairing & Vitamins",
        "questionText": "Deficiency of Vitamin C (ascorbic acid) causes which disease, and which base is present in RNA but absent in DNA?",
        "options": [
          "A) Beri-beri; Thymine",
          "B) Scurvy; Uracil",
          "C) Rickets; Cytosine",
          "D) Night blindness; Guanine"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vitamin C deficiency causes Scurvy (bleeding gums). RNA contains Uracil (U) in place of Thymine (T) found in DNA.",
        "stepMarking": [
          {
            "step": "Scurvy + Uracil in RNA",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Water-soluble vitamins: B-complex and C (cannot be stored long in body except B₁₂).",
        "commonPitfall": "Swapping Uracil and Thymine."
      },
      {
        "id": "model-c12-chem-2023-dav-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Azeotropes & Raoult Law Deviations",
        "questionText": "A mixture of ethanol and acetone shows positive deviation from Raoult's law because:",
        "options": [
          "A) Ethanol-acetone hydrogen bonding is stronger than pure ethanol H-bonds",
          "B) Acetone molecules break existing hydrogen bonds between ethanol molecules, weakening intermolecular attraction",
          "C) Vapour pressure of mixture is lower than ideal",
          "D) Δ_mix H is negative"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pure ethanol molecules are strongly H-bonded; adding acetone separates ethanol molecules and breaks some H-bonds, resulting in weaker A–B interactions, higher vapour pressure, Δ_mix H > 0 and Δ_mix V > 0.",
        "stepMarking": [
          {
            "step": "Weaker A-B interactions -> positive deviation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Positive deviation forms MINIMUM-boiling azeotropes; negative deviation (CHCl₃ + acetone, HNO₃ + H₂O) forms MAXIMUM-boiling azeotropes.",
        "commonPitfall": "Confusing positive deviation with maximum-boiling azeotrope."
      },
      {
        "id": "model-c12-chem-2023-dav-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Van't Hoff Factor (i)",
        "questionText": "Which of the following 0.1 M aqueous solutions will exhibit the HIGHEST boiling point (assume 100% dissociation)?",
        "options": [
          "A) Glucose",
          "B) NaCl",
          "C) CaCl₂",
          "D) Al₂(SO₄)₃"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Elevation in boiling point ΔT_b = i·K_b·m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ -> van't Hoff factor i = 5 (highest among glucose=1, NaCl=2, CaCl₂=3).",
        "stepMarking": [
          {
            "step": "Al₂(SO₄)₃ gives i = 5 -> max ΔT_b",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For highest freezing point (lowest ΔT_f), choose SMALLEST i (Glucose)! For highest boiling point / osmotic pressure, choose LARGEST i!",
        "commonPitfall": "Selecting Glucose when highest boiling point is asked."
      },
      {
        "id": "model-c12-chem-2023-dav-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Electrochemistry: Kohlrausch Law & Conductance",
        "questionText": "On dilution of both a strong electrolyte (KCl) and a weak electrolyte (CH₃COOH), which statement holds true?",
        "options": [
          "A) Molar conductivity Λ_m increases for both, while conductivity κ decreases for both",
          "B) Both κ and Λ_m increase",
          "C) Λ_m decreases for weak electrolyte",
          "D) Conductivity κ increases on dilution"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Conductivity (κ) decreases on dilution because number of ions per unit volume decreases. Molar conductivity (Λ_m = κ × 1000 / M) increases due to rise in volume V (strong) and surge in degree of dissociation α (weak).",
        "stepMarking": [
          {
            "step": "κ decreases (fewer ions/mL), Λ_m increases on dilution",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize contrast: κ ALWAYS decreases with dilution; Λ_m ALWAYS increases with dilution.",
        "commonPitfall": "Saying conductivity κ increases with dilution."
      },
      {
        "id": "model-c12-chem-2023-dav-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Kinetics: Units of Rate Constant",
        "questionText": "The rate constant of a chemical reaction has units mol⁻¹ L s⁻¹. What is the overall order of this reaction?",
        "options": [
          "A) Zero order",
          "B) First order",
          "C) Second order",
          "D) Third order"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. General unit of k is (mol L⁻¹)^(1-n) s⁻¹. Setting 1 - n = -1 => n = 2 (Second order).",
        "stepMarking": [
          {
            "step": "Apply (mol/L)^(1-n) s⁻¹ -> n = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Zero order = mol L⁻¹ s⁻¹; First order = s⁻¹; Second order = mol⁻¹ L s⁻¹.",
        "commonPitfall": "Mixing up zero-order and second-order signs."
      },
      {
        "id": "model-c12-chem-2023-dav-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "d- and f-Block Elements: Paramagnetism & Spin-Only Moment",
        "questionText": "Which of the following 3d transition metal ions has the highest magnetic moment (spin-only)?",
        "options": [
          "A) Ti³⁺ (Z = 22)",
          "B) V²⁺ (Z = 23)",
          "C) Mn²⁺ (Z = 25)",
          "D) Cu²⁺ (Z = 29)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mn²⁺ has [Ar] 3d⁵ configuration with 5 unpaired electrons, giving μ = √(5(5+2)) = √35 ≈ 5.92 BM (maximum among all 3d ions).",
        "stepMarking": [
          {
            "step": "Mn²⁺ (3d⁵ -> 5 unpaired e⁻) => μ = 5.92 BM",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall μ = √(n(n+2)) BM; maximum unpaired electrons in d-orbitals is 5.",
        "commonPitfall": "Confusing Mn²⁺ (3d⁵) with Fe²⁺ (3d⁶, only 4 unpaired e⁻)."
      },
      {
        "id": "model-c12-chem-2023-dav-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: IUPAC Nomenclature & Linkage Isomerism",
        "questionText": "The IUPAC name of the coordination complex [Pt(NH₃)₂Cl(NO₂)] is:",
        "options": [
          "A) Diamminechloridonitrito-N-platinum(II)",
          "B) Diamminechloronitritoplatinum(IV)",
          "C) Platinum(II) diamminechloronitrite",
          "D) Nitrito-N-diamminechloroplatinum(0)"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Alphabetical ligand order: ammine, chlorido, nitrito-N (or nitro). Oxidation state of Pt: x + 0 - 1 - 1 = 0 => +2 (II). Name: Diamminechloridonitrito-N-platinum(II).",
        "stepMarking": [
          {
            "step": "Alphabetical ligands + Pt(II) oxidation state",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ignore \"di/tri\" prefixes when alphabetizing ligands (ammine -> chlorido -> nitrito).",
        "commonPitfall": "Miscomputing Pt oxidation state as IV instead of II."
      },
      {
        "id": "model-c12-chem-2023-dav-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: Crystal Field Splitting Δ₀",
        "questionText": "Which complex ion is low-spin (inner orbital, d²sp³ hybridised) and diamagnetic?",
        "options": [
          "A) [CoF₆]³⁻",
          "B) [FeF₆]³⁻",
          "C) [Co(NH₃)₆]³⁺",
          "D) [NiCl₄]²⁻"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Co³⁺ is 3d⁶. NH₃ is a strong-field ligand (Δ₀ > P), forcing all 6 electrons to pair in t₂g⁶ e_g⁰ (0 unpaired e⁻, diamagnetic, d²sp³). F⁻ is weak-field leaving [CoF₆]³⁻ high-spin paramagnetic (sp³d²).",
        "stepMarking": [
          {
            "step": "Strong-field NH₃ pairs Co³⁺ 3d⁶ -> d²sp³ diamagnetic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strong-field ligands in NCERT: CO, CN⁻, en, NH₃ (for Co³⁺).",
        "commonPitfall": "Thinking [CoF₆]³⁻ is diamagnetic."
      },
      {
        "id": "model-c12-chem-2023-dav-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Haloalkanes & Haloarenes: SN1 vs SN2 Reactivity",
        "questionText": "Which alkyl halide undergoes S_N2 nucleophilic substitution reaction at the FASTEST rate?",
        "options": [
          "A) (CH₃)₃C–Br",
          "B) (CH₃)₂CH–Br",
          "C) CH₃CH₂–Br",
          "D) CH₃–Br"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. S_N2 proceeds via backside attack with a pentavalent transition state; least steric hindrance gives fastest rate: CH₃X > 1° > 2° > 3°.",
        "stepMarking": [
          {
            "step": "Least steric hindrance -> CH₃–Br fastest in SN2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "SN2 order: 0° (methyl) > 1° > 2° > 3°; SN1 order: 3° > 2° > 1°.",
        "commonPitfall": "Selecting 3° butyl bromide (which is fastest for SN1, slowest for SN2)."
      },
      {
        "id": "model-c12-chem-2023-dav-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Alcohols, Phenols & Ethers: Lucas Test & Acidity",
        "questionText": "Lucas reagent (conc. HCl + anhydrous ZnCl₂) produces immediate turbidity at room temperature with:",
        "options": [
          "A) Propan-1-ol",
          "B) Propan-2-ol",
          "C) 2-Methylpropan-2-ol (tert-butyl alcohol)",
          "D) Phenol"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Lucas test proceeds via carbocation intermediate: 3° alcohols form very stable 3° carbocation and turn turbid IMMEDIATELY; 2° takes ~5 minutes; 1° shows no turbidity at room temp.",
        "stepMarking": [
          {
            "step": "3° alcohol (2-methylpropan-2-ol) -> immediate turbidity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 3° immediate, 2° in 5 min, 1° only on heating.",
        "commonPitfall": "Choosing Phenol (which does not undergo C–O cleavage with Lucas)."
      },
      {
        "id": "model-c12-chem-2023-dav-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Aldol vs Cannizzaro",
        "questionText": "Which of the following aldehydes undergoes Cannizzaro reaction (self-oxidation-reduction) when heated with concentrated NaOH?",
        "options": [
          "A) Ethanal (CH₃CHO)",
          "B) Propanal (CH₃CH₂CHO)",
          "C) Benzaldehyde (C₆H₅CHO)",
          "D) Butanal"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aldehydes lacking α-hydrogen atoms (like HCHO and C₆H₅CHO) undergo Cannizzaro disproportionation in conc. alkali to yield an alcohol and a carboxylate salt.",
        "stepMarking": [
          {
            "step": "No α-hydrogen in Benzaldehyde -> Cannizzaro reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "α-H present => Aldol condensation; No α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO) => Cannizzaro!",
        "commonPitfall": "Choosing Ethanal (which has 3 α-hydrogens and gives Aldol)."
      },
      {
        "id": "model-c12-chem-2023-dav-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Haloarenes: Lower Reactivity Toward Nucleophilic Substitution",
        "questionText": "Assertion (A): Chlorobenzene is much less reactive towards nucleophilic substitution than chloroethane.\nReason (R): In chlorobenzene, the C–Cl bond acquires partial double-bond character due to resonance, and carbon is sp²-hybridised.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Resonance structures give C–Cl partial double-bond strength (shorter, harder to cleave), plus sp² C holds electrons tightly and phenyl cation is unstable.",
        "stepMarking": [
          {
            "step": "Option (A) citing resonance partial double-bond & sp² carbon",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember all 4 NCERT reasons for haloarene inertness in S_N.",
        "commonPitfall": "Marking (B)."
      },
      {
        "id": "model-c12-chem-2023-dav-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes & Ketones: Acidic Strength of Haloacetic Acids",
        "questionText": "Assertion (A): Trichloroacetic acid (CCl₃COOH) is a stronger acid than acetic acid (CH₃COOH).\nReason (R): Three strongly electron-withdrawing -Cl atoms exert a strong -I effect, dispersing the negative charge of the conjugate carboxylate ion and stabilising it.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Electron-withdrawing groups (-I) stabilise RCOO⁻ and increase K_a (decrease pK_a), whereas +I groups like -CH₃ decrease acidity.",
        "stepMarking": [
          {
            "step": "Option (A) citing -I stabilisation of conjugate base",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher K_a = Lower pK_a = Stronger Acid!",
        "commonPitfall": "Confusing +I vs -I effects."
      },
      {
        "id": "model-c12-chem-2023-dav-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Aniline Fails Friedel-Crafts Reaction",
        "questionText": "Assertion (A): Aniline does not undergo Friedel-Crafts alkylation or acylation.\nReason (R): Aniline acts as a Lewis base and reacts with the Lewis acid catalyst Anhydrous AlCl₃ to form a salt, turning nitrogen positively charged and strongly deactivating the ring.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. C₆H₅NH₂ + AlCl₃ → C₆H₅NH₂⁺ AlCl₃⁻; the positively charged N strongly withdraws electrons (-I), deactivating the benzene ring toward electrophilic substitution.",
        "stepMarking": [
          {
            "step": "Option (A) explaining AlCl₃ salt formation & deactivation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reason applies why nitration of aniline gives unexpected 47% meta-nitroaniline (anilinium ion formation in strong acid)!",
        "commonPitfall": "Saying -NH₂ itself is a deactivating group (it is actually strongly activating when free!)."
      },
      {
        "id": "model-c12-chem-2023-dav-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Osmotic Pressure for Polymers",
        "questionText": "Assertion (A): Osmotic pressure method is preferred over boiling point elevation for determining molar masses of proteins and polymers.\nReason (R): Osmotic pressure is measured at room temperature and has appreciable magnitude even for very dilute solutions.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Biomolecules decompose on heating (unlike boiling point) and show tiny ΔT_b at low molarity, whereas π is large enough to read accurately at room temperature.",
        "stepMarking": [
          {
            "step": "Option (A) citing room temp & measurable magnitude",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also note molarity (M) is used in π = CRT instead of molality.",
        "commonPitfall": "Saying polymers are insoluble in water."
      },
      {
        "id": "model-c12-chem-2023-dav-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "d- and f-Block: Lanthanoid Contraction Causes & Consequences",
        "questionText": "What is Lanthanoid contraction? Mention two important consequences of lanthanoid contraction.",
        "modelAnswer": "Lanthanoid contraction: Steady decrease in atomic and ionic radii from La³⁺ to Lu³⁺ across the 4f series due to poor shielding effect of inner 4f electrons against increasing nuclear charge.\nConsequences:\n1. Zr (4d) and Hf (5d) have almost identical atomic radii (160 pm vs 159 pm) and very similar chemical properties.\n2. Basicity of lanthanoid hydroxides decreases steadily from La(OH)₃ to Lu(OH)₃.",
        "stepMarking": [
          {
            "step": "Definition + poor 4f shielding",
            "marks": "1 Mark"
          },
          {
            "step": "Two consequences (Zr/Hf pair & hydroxide basicity)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Poor shielding order: s > p > d > f (4f shields very poorly!).",
        "commonPitfall": "Saying nuclear charge decreases across lanthanoids."
      },
      {
        "id": "model-c12-chem-2023-dav-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Alcohols, Phenols & Ethers: Reimer-Tiemann & Kolbe Reactions",
        "questionText": "Write the balanced chemical equations for:\n(i) Reimer-Tiemann reaction of phenol\n(ii) Williamson synthesis of tert-butyl ethyl ether (CH₃)₃C–O–C₂H₅ using proper reactants.",
        "modelAnswer": "(i) Reimer-Tiemann: Phenol + CHCl₃ + 3NaOH --(340K)--> Sodium salicylate intermediate --(H⁺)--> Salicylaldehyde (2-hydroxybenzaldehyde) + 3NaCl + 2H₂O.\n(ii) Williamson Synthesis: Must use 3° alkoxide + 1° alkyl halide (NOT 3° halide, which gives alkene elimination!):\n(CH₃)₃C–O⁻Na⁺ + CH₃CH₂–Br → (CH₃)₃C–O–C₂H₅ + NaBr.",
        "stepMarking": [
          {
            "step": "(i) Phenol + CHCl₃ + aq. NaOH -> Salicylaldehyde",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Sodium tert-butoxide + ethyl bromide -> ether",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In Williamson synthesis of tert-butyl ethers, NEVER choose (CH₃)₃C-Br + C₂H₅ONa — it produces 2-methylpropene instead of ether!",
        "commonPitfall": "Using tert-butyl bromide in Williamson synthesis."
      },
      {
        "id": "model-c12-chem-2023-dav-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Biomolecules: Anomers vs Epimers / Zwitterion / Protein Denaturation",
        "questionText": "What is meant by denaturation of a protein? Give one example, and state which levels of protein structure are destroyed vs retained.",
        "modelAnswer": "Denaturation: Disruption of native 3D biological structure of a protein due to physical change (heat) or chemical change (pH alteration), disrupting hydrogen bonds so globules unfold and protein loses biological activity.\nExample: Coagulation of egg white on boiling, or curdling of milk.\nEffect on structure: Secondary and Tertiary structures are destroyed, while the Primary structure (peptide sequence) remains intact.",
        "stepMarking": [
          {
            "step": "Definition + example (boiled egg white / curdling)",
            "marks": "1 Mark"
          },
          {
            "step": "2° & 3° destroyed; 1° structure remains intact",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Primary peptide bonds are NOT broken during denaturation.",
        "commonPitfall": "Saying primary amino acid sequence is broken."
      },
      {
        "id": "model-c12-chem-2023-dav-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Electrochemistry: Faraday's First Law & Fuel Cell",
        "questionText": "How many Coulombs of electricity are required to reduce 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium? Also write the overall reaction of an H₂–O₂ fuel cell.",
        "modelAnswer": "Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.\n5 moles of electrons are required per mole MnO₄⁻ => Charge Q = 5 F = 5 × 96500 C = 482,500 C.\nH₂–O₂ Fuel Cell overall reaction: 2H₂(g) + O₂(g) → 2H₂O(l).",
        "stepMarking": [
          {
            "step": "5 F = 482,500 C calculation",
            "marks": "1 Mark"
          },
          {
            "step": "Fuel cell reaction 2H₂ + O₂ -> 2H₂O",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Oxidation state change of Mn: +7 -> +2 => n = 5 electrons.",
        "commonPitfall": "Using n = 3 (MnO₂ neutral product) instead of n = 5."
      },
      {
        "id": "model-c12-chem-2023-dav-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Kinetics: Pseudo-First Order & Half-Life",
        "questionText": "Show that for a first-order reaction, the time required for completion of 99.9% of the reaction is approximately 10 times its half-life (t₁/₂). (Given log 2 = 0.3010)",
        "modelAnswer": "t₁/₂ = 0.693 / k.\nFor 99.9% completion: [R]₀ = 100, remaining [R] = 100 - 99.9 = 0.1.\nt_99.9% = (2.303 / k) log₁₀(100 / 0.1) = (2.303 / k) log₁₀(10³) = (2.303 × 3) / k = 6.909 / k.\nRatio t_99.9% / t₁/₂ = (6.909 / k) / (0.693 / k) = 6.909 / 0.693 ≈ 9.97 ≈ 10.",
        "stepMarking": [
          {
            "step": "Compute t_99.9% = 6.909/k using remaining [R] = 0.1",
            "marks": "1 Mark"
          },
          {
            "step": "Take ratio 6.909 / 0.693 ≈ 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Remaining concentration [R] = [R]₀ - 99.9% = 0.1% of [R]₀!",
        "commonPitfall": "Plugging 99.9 in the denominator instead of remaining 0.1."
      },
      {
        "id": "model-c12-chem-2023-dav-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Coordination Compounds: CFT Splitting & Geometry of [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻",
        "questionText": "Using Valence Bond Theory, explain why [Ni(CN)₄]²⁻ is square planar and diamagnetic whereas [NiCl₄]²⁻ is tetrahedral and paramagnetic (Atomic number of Ni = 28).",
        "modelAnswer": "Ni²⁺ has 3d⁸ configuration (two unpaired e⁻ in 3d).\n1. In [Ni(CN)₄]²⁻, CN⁻ is a strong-field ligand causing pairing of the two unpaired 3d electrons, vacating one 3d orbital. Hybridisation is dsp² -> Square Planar geometry and diamagnetic (0 unpaired e⁻).\n2. In [NiCl₄]²⁻, Cl⁻ is a weak-field ligand unable to pair 3d electrons -> outer 4s and 4p orbitals hybridise (sp³) -> Tetrahedral geometry with 2 unpaired electrons (paramagnetic, μ ≈ 2.83 BM).",
        "stepMarking": [
          {
            "step": "Ni²⁺ 3d⁸ ground state",
            "marks": "0.5 Mark"
          },
          {
            "step": "[Ni(CN)₄]²⁻ pairing -> dsp², square planar, diamagnetic",
            "marks": "1.25 Marks"
          },
          {
            "step": "[NiCl₄]²⁻ no pairing -> sp³, tetrahedral, paramagnetic (2 unpaired e⁻)",
            "marks": "1.25 Marks"
          }
        ],
        "examinerTip": "Both have coordination number 4, making it the classic CN=4 VBT comparison!",
        "commonPitfall": "Assigning sp³d² instead of dsp² / sp³."
      },
      {
        "id": "model-c12-chem-2023-dav-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Haloalkanes: Conversions & Ambident Nucleophiles",
        "questionText": "(a) Explain why haloalkanes react with KCN to form alkyl cyanides as major products, whereas with AgCN they yield isocyanides.\n(b) Convert Propene to Propan-1-ol.",
        "modelAnswer": "(a) CN⁻ is an ambident nucleophile (can attack through C or N). KCN is predominantly ionic, leaving C-end free to form stronger C–C bond (alkyl cyanide R–CN). AgCN is largely covalent, so the lone pair on Nitrogen attacks R–X forming isocyanide (R–NC).\n(b) Propene + HBr (with peroxide) → 1-Bromopropane --(aq. KOH)--> Propan-1-ol (or Hydroboration-Oxidation directly with B₂H₆ followed by H₂O₂/OH⁻).",
        "stepMarking": [
          {
            "step": "(a) Ionic KCN (R-CN) vs covalent AgCN (R-NC) ambident logic",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Hydroboration-oxidation or peroxide-HBr + aq. KOH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same ambident distinction applies to KNO₂ (R-ONO) vs AgNO₂ (R-NO₂)!",
        "commonPitfall": "Saying KCN is covalent and AgCN is ionic."
      },
      {
        "id": "model-c12-chem-2023-dav-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Amines: Gabriel Phthalimide Synthesis & Hinsberg Test",
        "questionText": "(a) Why cannot aromatic primary amines (like Aniline) be prepared by Gabriel phthalimide synthesis?\n(b) How does Hinsberg's reagent (benzenesulphonyl chloride, C₆H₅SO₂Cl) distinguish between primary, secondary, and tertiary amines?",
        "modelAnswer": "(a) Gabriel phthalimide synthesis involves S_N2 nucleophilic attack of phthalimide anion on an alkyl halide. Aryl halides (like chlorobenzene) do NOT undergo nucleophilic substitution easily due to partial double-bond character of C–X bond, so aniline cannot be prepared.\n(b) With C₆H₅SO₂Cl:\n• 1° Amine forms N-alkylbenzenesulphonamide which dissolves in aq. KOH (has acidic N–H proton).\n• 2° Amine forms N,N-dialkylbenzenesulphonamide which is INSOLUBLE in aq. KOH (no acidic N–H).\n• 3° Amine does NOT react at all.",
        "stepMarking": [
          {
            "step": "(a) Aryl halides resist SN2 attack by phthalimide ion",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Hinsberg observations for 1°, 2°, 3° amines",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Note: Hinsberg reagent distinguishes amines by presence of acidic H on sulphonamide nitrogen!",
        "commonPitfall": "Thinking 2° amine product dissolves in KOH."
      },
      {
        "id": "model-c12-chem-2023-dav-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Alcohols, Phenols & Ethers: Acid-Catalysed Hydration & Phenol Acidity",
        "questionText": "Arrange the following in increasing order of acidic strength and justify: Propan-1-ol, Phenol, 4-Nitrophenol, 4-Methylphenol (p-cresol).",
        "modelAnswer": "Increasing acidic strength: Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol.\nJustification:\n• Phenols are vastly more acidic than aliphatic alcohols because phenoxide ion is resonance-stabilised.\n• In 4-nitrophenol, the strongly electron-withdrawing -NO₂ group (-R and -I) disperses negative charge on phenoxide oxygen, increasing acidity.\n• In 4-methylphenol, electron-donating -CH₃ (+I and hyperconjugation) intensifies negative charge, destabilising phenoxide ion and decreasing acidity.",
        "stepMarking": [
          {
            "step": "Correct sequence Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol",
            "marks": "1 Mark"
          },
          {
            "step": "Resonance stabilisation of phenoxide + -NO₂ vs -CH₃ effects",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: EWG (-NO₂) increases phenol acidity; EDG (-CH₃, -OCH₃) decreases phenol acidity.",
        "commonPitfall": "Placing 4-methylphenol above phenol."
      },
      {
        "id": "model-c12-chem-2023-dav-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Solutions: Freezing Point Depression Numerical (with Van't Hoff Factor)",
        "questionText": "Calculate the freezing point of a solution containing 60 g of glucose (Molar mass = 180 g/mol) in 250 g of water (K_f for water = 1.86 K kg mol⁻¹). How would the result change if 0.33 mol of NaCl were used instead?",
        "modelAnswer": "Moles of glucose = 60 / 180 = 1/3 mol.\nMass of solvent = 250 g = 0.25 kg.\nMolality m = (1/3) / 0.25 = 4/3 ≈ 1.333 mol/kg.\nΔT_f = K_f · m = 1.86 × (4/3) = 2.48 K.\nFreezing point = 273.15 - 2.48 = 270.67 K (or -2.48°C).\nWith 0.33 mol NaCl (i ≈ 2), moles of ions double => ΔT_f ≈ 4.96 K -> freezing point drops twice as much (-4.96°C).",
        "stepMarking": [
          {
            "step": "Molality m = 1.333 mol/kg",
            "marks": "1 Mark"
          },
          {
            "step": "ΔT_f = 2.48 K -> T_f = -2.48°C (270.67 K)",
            "marks": "1 Mark"
          },
          {
            "step": "NaCl i=2 doubles depression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert solvent mass from grams to kg in molality!",
        "commonPitfall": "Taking 2.48°C instead of -2.48°C as final freezing point!"
      },
      {
        "id": "model-c12-chem-2023-dav-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Electrochemistry: Nernst Equation Cell EMF Numerical at 298 K",
        "questionText": "Calculate the EMF of the cell at 298 K:\nMg(s) | Mg²⁺ (0.001 M) || Cu²⁺ (0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.36 V, E°(Cu²⁺/Cu) = +0.34 V. (Use 0.059/2 ≈ 0.0295)",
        "modelAnswer": "Cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) (n = 2 electrons).\nE°_cell = E°_cathode - E°_anode = 0.34 - (-2.36) = +2.70 V.\nNernst Equation at 298 K:\nE_cell = E°_cell - (0.059 / 2) log₁₀([Mg²⁺] / [Cu²⁺])\n= 2.70 - 0.0295 log₁₀(10⁻³ / 10⁻⁴) = 2.70 - 0.0295 log₁₀(10)\n= 2.70 - 0.0295 = 2.6705 V.",
        "stepMarking": [
          {
            "step": "E°_cell = 2.70 V & n = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Nernst setup [Mg²⁺]/[Cu²⁺] = 10",
            "marks": "1 Mark"
          },
          {
            "step": "E_cell = 2.67 V",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Put Anode product concentration [Mg²⁺] in numerator and Cathode reactant [Cu²⁺] in denominator!",
        "commonPitfall": "Inverting ratio as [Cu²⁺]/[Mg²⁺] or taking n = 1."
      },
      {
        "id": "model-c12-chem-2023-dav-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Kinetics: Arrhenius Activation Energy Numerical",
        "questionText": "The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy E_a of the reaction. (R = 8.314 J/mol·K, log 2 = 0.3010)",
        "modelAnswer": "Using Arrhenius two-temperature equation:\nlog₁₀(k₂ / k₁) = [E_a / (2.303 R)] × [ (T₂ - T₁) / (T₁ T₂) ]\nlog₁₀(2) = [E_a / (2.303 × 8.314)] × [ 10 / (298 × 308) ]\n0.3010 = (E_a / 19.147) × (10 / 91784)\nE_a = (0.3010 × 19.147 × 91784) / 10 ≈ 52,898 J/mol = 52.9 kJ/mol.",
        "stepMarking": [
          {
            "step": "Arrhenius formula with k₂/k₁ = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Substitute T₁=298 K, T₂=308 K",
            "marks": "1 Mark"
          },
          {
            "step": "E_a ≈ 52.9 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write E_a in both J/mol and kJ/mol cleanly.",
        "commonPitfall": "Using Celsius 25 and 35 instead of Kelvin 298 and 308."
      },
      {
        "id": "model-c12-chem-2023-dav-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Biomolecules – Carbohydrates & Glucose Structure",
        "questionText": "Read the case and answer:\nGlucose is an aldohexose that exists primarily in two cyclic hemiacetal forms (α-D-glucose and β-D-glucose) differing only in configuration around C-1 carbon. Despite having an aldehyde group, glucose does not give Schiff's test or react with NaHSO₃.\n\n(a) What name is given to the cyclic pair α-D-glucose and β-D-glucose? (1M)\n(b) Name the reaction and product when glucose is treated with (i) Bromine water, and (ii) Conc. HNO₃. (2M)\n(c) Why are sucrose and starch classified differently with respect to Fehling's reducing test? (1M)",
        "modelAnswer": "(a) Anomers (differing only at C-1 anomeric carbon).\n(b) (i) Bromine water (mild oxidant) oxidises -CHO group only -> Gluconic acid.\n(ii) Conc. HNO₃ oxidises both -CHO and primary -CH₂OH -> Saccharic acid (dicarboxylic acid).\n(c) Sucrose has both glucose C-1 and fructose C-2 anomeric carbons locked in glycosidic linkage -> NON-reducing sugar (no free hemiacetal), whereas maltose/lactose are reducing sugars.",
        "stepMarking": [
          {
            "step": "(a) Anomers",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Gluconic acid & Saccharic acid",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Glycosidic bond locks reducing groups in sucrose",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Br₂ water -> Gluconic acid; Conc. HNO₃ -> Saccharic acid; HI + Δ -> n-Hexane.",
        "commonPitfall": "Confusing Gluconic acid with Saccharic acid."
      },
      {
        "id": "model-c12-chem-2023-dav-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Integrated Rate Law & Half-Life in Chemical Kinetics",
        "questionText": "Read the case and answer:\nFor a first-order decomposition reaction R → Products, the concentration of reactant drops from 0.8 M to 0.2 M in 40 minutes at 300 K. (Given log 2 = 0.3010)\n\n(a) Determine the half-life (t₁/₂) of this reaction. (1M)\n(b) Calculate the first-order rate constant k in min⁻¹. (1.5M)\n(c) What fraction of initial reactant will remain after 60 minutes from the start? (1.5M)",
        "modelAnswer": "(a) Concentration dropped from 0.8 M -> 0.4 M -> 0.2 M (2 half-lives in 40 minutes) => t₁/₂ = 40 / 2 = 20 minutes.\n(b) k = 0.693 / t₁/₂ = 0.693 / 20 = 0.03465 min⁻¹.\n(c) 60 minutes = 3 half-lives (60/20 = 3) => Remaining fraction = (1/2)³ = 1/8 = 0.125 (12.5%).",
        "stepMarking": [
          {
            "step": "(a) 2 half-lives = 40 min -> t₁/₂ = 20 min",
            "marks": "1 Mark"
          },
          {
            "step": "(b) k = 0.03465 min⁻¹",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) (1/2)³ = 1/8 = 12.5%",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "First-order half-life is strictly INDEPENDENT of initial concentration!",
        "commonPitfall": "Using zero-order t₁/₂ formula [R]₀/(2k)."
      },
      {
        "id": "model-c12-chem-2023-dav-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Electrochemistry: Kohlrausch Law Numerical & Corrosion / Batteries",
        "questionText": "(a) State Kohlrausch's law of independent migration of ions. Calculate Λ°_m for acetic acid (CH₃COOH) given:\n  Λ°_m(HCl) = 425.9 S cm² mol⁻¹, Λ°_m(NaCl) = 126.4 S cm² mol⁻¹, Λ°_m(CH₃COONa) = 91.0 S cm² mol⁻¹.\n(b) If conductivity of 0.00241 M acetic acid is 7.896 × 10⁻⁵ S cm⁻¹, calculate its molar conductivity Λ_m and degree of dissociation α (using Λ°_m = 390.5 S cm² mol⁻¹).",
        "modelAnswer": "(a) Kohlrausch Law: Limiting molar conductivity of an electrolyte equals the sum of individual limiting ionic conductivities of its cation and anion.\nΛ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 390.5 S cm² mol⁻¹.\n(b) Λ_m = (κ × 1000) / M = (7.896 × 10⁻⁵ × 1000) / 0.00241 = 0.07896 / 0.00241 = 32.76 S cm² mol⁻¹.\nDegree of dissociation α = Λ_m / Λ°_m = 32.76 / 390.5 ≈ 0.084 (8.4%).",
        "stepMarking": [
          {
            "step": "(a) Statement + 390.5 S cm² mol⁻¹ calculation",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Λ_m = 32.76 & α = 0.084",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Check units carefully: κ in S/cm uses factor 1000 in (κ × 1000)/M.",
        "commonPitfall": "Subtracting NaCl twice or omitting factor 1000."
      },
      {
        "id": "model-c12-chem-2023-dav-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "d- and f-Block Elements: KMnO₄ / K₂Cr₂O₇ Oxidising Reactions & Transition Trends",
        "questionText": "(a) Write balanced ionic equations for the oxidising action of acidified potassium permanganate (MnO₄⁻) on:\n  (i) Oxalate ion (C₂O₄²⁻)\n  (ii) Ferrous ion (Fe²⁺)\n  (iii) Iodide ion (I⁻) in neutral/faintly alkaline medium.\n(b) Account for the following:\n  (i) Transition metals form a large number of complex compounds and act as good catalysts.\n  (ii) Cu⁺ ion is unstable in aqueous solution and disproportionates.",
        "modelAnswer": "(a) (i) 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.\n(ii) MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.\n(iii) 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻ (iodate!).\n(b) (i) Complexes: small ionic size, high ionic charge, availability of vacant d-orbitals. Catalysis: ability to adopt variable oxidation states and provide surface area for adsorption.\n(ii) 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s). Although Cu⁺ has stable 3d¹⁰, the much higher negative hydration enthalpy (Δ_hyd H) of tiny doubly-charged Cu²⁺ more than compensates for the high second ionisation enthalpy of Cu.",
        "stepMarking": [
          {
            "step": "(a) All 3 balanced redox ionic equations (note IO₃⁻ in neutral/alkaline!)",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Complex/catalyst reasons + high hydration enthalpy of Cu²⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Watch out: MnO₄⁻ oxidises I⁻ to I₂ in ACIDIC medium, but to IO₃⁻ in NEUTRAL/FAINTLY ALKALINE medium!",
        "commonPitfall": "Writing I₂ instead of IO₃⁻ in neutral/alkaline medium."
      },
      {
        "id": "model-c12-chem-2023-dav-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Named Reactions & Distinguishing Tests",
        "questionText": "(a) Write chemical equations for:\n  (i) Cross-Aldol or Self-Aldol condensation of Ethanal\n  (ii) HVZ (Hell-Volhard-Zelinsky) reaction of Propanoic acid\n  (iii) Rosenmund reduction of Benzoyl chloride.\n(b) Give simple chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Phenol and Benzoic acid.",
        "modelAnswer": "(a) (i) 2 CH₃CHO --(dil. NaOH)--> CH₃CH(OH)CH₂CHO (3-Hydroxybutanal) --(Heat)--> CH₃CH=CHCHO (But-2-enal) + H₂O.\n(ii) CH₃CH₂COOH --(Cl₂/Red P, H₂O)--> CH₃CH(Cl)COOH (2-Chloropropanoic acid).\n(iii) C₆H₅COCl + H₂ --(Pd-BaSO₄)--> C₆H₅CHO + HCl.\n(b) (i) Propanal gives silver mirror with Tollens' reagent (or red Cu₂O ppt with Fehling's); Propanone does NOT (conversely, Propanone gives yellow iodoform ppt with I₂/NaOH).\n(ii) Benzoic acid gives brisk effervescence of CO₂ with NaHCO₃ solution; Phenol does not (or Phenol gives violet colour with neutral FeCl₃).",
        "stepMarking": [
          {
            "step": "(a) Aldol, HVZ & Rosenmund equations",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Tollens/Fehling & NaHCO₃/FeCl₃ tests",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Both Tollens' and Fehling's distinguish aldehydes from ketones (Note: aromatic aldehydes like Benzaldehyde do NOT respond to Fehling's test!).",
        "commonPitfall": "Using Fehling's test to detect Benzaldehyde."
      }
    ]
  },
  {
    "id": "model-c12-chem-2024-organic",
    "title": "Organic Conversions & Physical Numericals Class 12 Chemistry (2024)",
    "subject": "Chemistry",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "EXEMPLAR/C12/CHE-04",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 (12 MCQs + 4 Assertion-Reason) carrying 1 mark each.",
      "Section B: Q17 to Q21 carrying 2 marks each.",
      "Section C: Q22 to Q28 carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-chem-2024-organic-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Azeotropes & Raoult Law Deviations",
        "questionText": "A mixture of ethanol and acetone shows positive deviation from Raoult's law because:",
        "options": [
          "A) Ethanol-acetone hydrogen bonding is stronger than pure ethanol H-bonds",
          "B) Acetone molecules break existing hydrogen bonds between ethanol molecules, weakening intermolecular attraction",
          "C) Vapour pressure of mixture is lower than ideal",
          "D) Δ_mix H is negative"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pure ethanol molecules are strongly H-bonded; adding acetone separates ethanol molecules and breaks some H-bonds, resulting in weaker A–B interactions, higher vapour pressure, Δ_mix H > 0 and Δ_mix V > 0.",
        "stepMarking": [
          {
            "step": "Weaker A-B interactions -> positive deviation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Positive deviation forms MINIMUM-boiling azeotropes; negative deviation (CHCl₃ + acetone, HNO₃ + H₂O) forms MAXIMUM-boiling azeotropes.",
        "commonPitfall": "Confusing positive deviation with maximum-boiling azeotrope."
      },
      {
        "id": "model-c12-chem-2024-organic-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Van't Hoff Factor (i)",
        "questionText": "Which of the following 0.1 M aqueous solutions will exhibit the HIGHEST boiling point (assume 100% dissociation)?",
        "options": [
          "A) Glucose",
          "B) NaCl",
          "C) CaCl₂",
          "D) Al₂(SO₄)₃"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Elevation in boiling point ΔT_b = i·K_b·m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ -> van't Hoff factor i = 5 (highest among glucose=1, NaCl=2, CaCl₂=3).",
        "stepMarking": [
          {
            "step": "Al₂(SO₄)₃ gives i = 5 -> max ΔT_b",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For highest freezing point (lowest ΔT_f), choose SMALLEST i (Glucose)! For highest boiling point / osmotic pressure, choose LARGEST i!",
        "commonPitfall": "Selecting Glucose when highest boiling point is asked."
      },
      {
        "id": "model-c12-chem-2024-organic-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Electrochemistry: Kohlrausch Law & Conductance",
        "questionText": "On dilution of both a strong electrolyte (KCl) and a weak electrolyte (CH₃COOH), which statement holds true?",
        "options": [
          "A) Molar conductivity Λ_m increases for both, while conductivity κ decreases for both",
          "B) Both κ and Λ_m increase",
          "C) Λ_m decreases for weak electrolyte",
          "D) Conductivity κ increases on dilution"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Conductivity (κ) decreases on dilution because number of ions per unit volume decreases. Molar conductivity (Λ_m = κ × 1000 / M) increases due to rise in volume V (strong) and surge in degree of dissociation α (weak).",
        "stepMarking": [
          {
            "step": "κ decreases (fewer ions/mL), Λ_m increases on dilution",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize contrast: κ ALWAYS decreases with dilution; Λ_m ALWAYS increases with dilution.",
        "commonPitfall": "Saying conductivity κ increases with dilution."
      },
      {
        "id": "model-c12-chem-2024-organic-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Kinetics: Units of Rate Constant",
        "questionText": "The rate constant of a chemical reaction has units mol⁻¹ L s⁻¹. What is the overall order of this reaction?",
        "options": [
          "A) Zero order",
          "B) First order",
          "C) Second order",
          "D) Third order"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. General unit of k is (mol L⁻¹)^(1-n) s⁻¹. Setting 1 - n = -1 => n = 2 (Second order).",
        "stepMarking": [
          {
            "step": "Apply (mol/L)^(1-n) s⁻¹ -> n = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Zero order = mol L⁻¹ s⁻¹; First order = s⁻¹; Second order = mol⁻¹ L s⁻¹.",
        "commonPitfall": "Mixing up zero-order and second-order signs."
      },
      {
        "id": "model-c12-chem-2024-organic-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "d- and f-Block Elements: Paramagnetism & Spin-Only Moment",
        "questionText": "Which of the following 3d transition metal ions has the highest magnetic moment (spin-only)?",
        "options": [
          "A) Ti³⁺ (Z = 22)",
          "B) V²⁺ (Z = 23)",
          "C) Mn²⁺ (Z = 25)",
          "D) Cu²⁺ (Z = 29)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mn²⁺ has [Ar] 3d⁵ configuration with 5 unpaired electrons, giving μ = √(5(5+2)) = √35 ≈ 5.92 BM (maximum among all 3d ions).",
        "stepMarking": [
          {
            "step": "Mn²⁺ (3d⁵ -> 5 unpaired e⁻) => μ = 5.92 BM",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall μ = √(n(n+2)) BM; maximum unpaired electrons in d-orbitals is 5.",
        "commonPitfall": "Confusing Mn²⁺ (3d⁵) with Fe²⁺ (3d⁶, only 4 unpaired e⁻)."
      },
      {
        "id": "model-c12-chem-2024-organic-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: IUPAC Nomenclature & Linkage Isomerism",
        "questionText": "The IUPAC name of the coordination complex [Pt(NH₃)₂Cl(NO₂)] is:",
        "options": [
          "A) Diamminechloridonitrito-N-platinum(II)",
          "B) Diamminechloronitritoplatinum(IV)",
          "C) Platinum(II) diamminechloronitrite",
          "D) Nitrito-N-diamminechloroplatinum(0)"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Alphabetical ligand order: ammine, chlorido, nitrito-N (or nitro). Oxidation state of Pt: x + 0 - 1 - 1 = 0 => +2 (II). Name: Diamminechloridonitrito-N-platinum(II).",
        "stepMarking": [
          {
            "step": "Alphabetical ligands + Pt(II) oxidation state",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ignore \"di/tri\" prefixes when alphabetizing ligands (ammine -> chlorido -> nitrito).",
        "commonPitfall": "Miscomputing Pt oxidation state as IV instead of II."
      },
      {
        "id": "model-c12-chem-2024-organic-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: Crystal Field Splitting Δ₀",
        "questionText": "Which complex ion is low-spin (inner orbital, d²sp³ hybridised) and diamagnetic?",
        "options": [
          "A) [CoF₆]³⁻",
          "B) [FeF₆]³⁻",
          "C) [Co(NH₃)₆]³⁺",
          "D) [NiCl₄]²⁻"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Co³⁺ is 3d⁶. NH₃ is a strong-field ligand (Δ₀ > P), forcing all 6 electrons to pair in t₂g⁶ e_g⁰ (0 unpaired e⁻, diamagnetic, d²sp³). F⁻ is weak-field leaving [CoF₆]³⁻ high-spin paramagnetic (sp³d²).",
        "stepMarking": [
          {
            "step": "Strong-field NH₃ pairs Co³⁺ 3d⁶ -> d²sp³ diamagnetic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strong-field ligands in NCERT: CO, CN⁻, en, NH₃ (for Co³⁺).",
        "commonPitfall": "Thinking [CoF₆]³⁻ is diamagnetic."
      },
      {
        "id": "model-c12-chem-2024-organic-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Haloalkanes & Haloarenes: SN1 vs SN2 Reactivity",
        "questionText": "Which alkyl halide undergoes S_N2 nucleophilic substitution reaction at the FASTEST rate?",
        "options": [
          "A) (CH₃)₃C–Br",
          "B) (CH₃)₂CH–Br",
          "C) CH₃CH₂–Br",
          "D) CH₃–Br"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. S_N2 proceeds via backside attack with a pentavalent transition state; least steric hindrance gives fastest rate: CH₃X > 1° > 2° > 3°.",
        "stepMarking": [
          {
            "step": "Least steric hindrance -> CH₃–Br fastest in SN2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "SN2 order: 0° (methyl) > 1° > 2° > 3°; SN1 order: 3° > 2° > 1°.",
        "commonPitfall": "Selecting 3° butyl bromide (which is fastest for SN1, slowest for SN2)."
      },
      {
        "id": "model-c12-chem-2024-organic-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Alcohols, Phenols & Ethers: Lucas Test & Acidity",
        "questionText": "Lucas reagent (conc. HCl + anhydrous ZnCl₂) produces immediate turbidity at room temperature with:",
        "options": [
          "A) Propan-1-ol",
          "B) Propan-2-ol",
          "C) 2-Methylpropan-2-ol (tert-butyl alcohol)",
          "D) Phenol"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Lucas test proceeds via carbocation intermediate: 3° alcohols form very stable 3° carbocation and turn turbid IMMEDIATELY; 2° takes ~5 minutes; 1° shows no turbidity at room temp.",
        "stepMarking": [
          {
            "step": "3° alcohol (2-methylpropan-2-ol) -> immediate turbidity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 3° immediate, 2° in 5 min, 1° only on heating.",
        "commonPitfall": "Choosing Phenol (which does not undergo C–O cleavage with Lucas)."
      },
      {
        "id": "model-c12-chem-2024-organic-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Aldol vs Cannizzaro",
        "questionText": "Which of the following aldehydes undergoes Cannizzaro reaction (self-oxidation-reduction) when heated with concentrated NaOH?",
        "options": [
          "A) Ethanal (CH₃CHO)",
          "B) Propanal (CH₃CH₂CHO)",
          "C) Benzaldehyde (C₆H₅CHO)",
          "D) Butanal"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aldehydes lacking α-hydrogen atoms (like HCHO and C₆H₅CHO) undergo Cannizzaro disproportionation in conc. alkali to yield an alcohol and a carboxylate salt.",
        "stepMarking": [
          {
            "step": "No α-hydrogen in Benzaldehyde -> Cannizzaro reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "α-H present => Aldol condensation; No α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO) => Cannizzaro!",
        "commonPitfall": "Choosing Ethanal (which has 3 α-hydrogens and gives Aldol)."
      },
      {
        "id": "model-c12-chem-2024-organic-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Basicity in Aqueous Solution (Ethyl Amines)",
        "questionText": "The correct decreasing order of basic strength of ethylamines in AQUEOUS solution is:",
        "options": [
          "A) (C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃",
          "B) (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
          "C) C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃",
          "D) NH₃ > C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Combining +I effect, solvation (hydration) stability, and steric hindrance in water: Ethyl series is 2° > 3° > 1° > NH₃ (whereas Methyl series is 2° > 1° > 3° > NH₃!).",
        "stepMarking": [
          {
            "step": "Aqueous Ethyl order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize NCERT aqueous code: Ethyl = 231, Methyl = 213! Gas phase is always 3 > 2 > 1.",
        "commonPitfall": "Mixing up Methyl (213) and Ethyl (231) aqueous orders."
      },
      {
        "id": "model-c12-chem-2024-organic-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Biomolecules: DNA Base Pairing & Vitamins",
        "questionText": "Deficiency of Vitamin C (ascorbic acid) causes which disease, and which base is present in RNA but absent in DNA?",
        "options": [
          "A) Beri-beri; Thymine",
          "B) Scurvy; Uracil",
          "C) Rickets; Cytosine",
          "D) Night blindness; Guanine"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vitamin C deficiency causes Scurvy (bleeding gums). RNA contains Uracil (U) in place of Thymine (T) found in DNA.",
        "stepMarking": [
          {
            "step": "Scurvy + Uracil in RNA",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Water-soluble vitamins: B-complex and C (cannot be stored long in body except B₁₂).",
        "commonPitfall": "Swapping Uracil and Thymine."
      },
      {
        "id": "model-c12-chem-2024-organic-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes & Ketones: Acidic Strength of Haloacetic Acids",
        "questionText": "Assertion (A): Trichloroacetic acid (CCl₃COOH) is a stronger acid than acetic acid (CH₃COOH).\nReason (R): Three strongly electron-withdrawing -Cl atoms exert a strong -I effect, dispersing the negative charge of the conjugate carboxylate ion and stabilising it.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Electron-withdrawing groups (-I) stabilise RCOO⁻ and increase K_a (decrease pK_a), whereas +I groups like -CH₃ decrease acidity.",
        "stepMarking": [
          {
            "step": "Option (A) citing -I stabilisation of conjugate base",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher K_a = Lower pK_a = Stronger Acid!",
        "commonPitfall": "Confusing +I vs -I effects."
      },
      {
        "id": "model-c12-chem-2024-organic-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Aniline Fails Friedel-Crafts Reaction",
        "questionText": "Assertion (A): Aniline does not undergo Friedel-Crafts alkylation or acylation.\nReason (R): Aniline acts as a Lewis base and reacts with the Lewis acid catalyst Anhydrous AlCl₃ to form a salt, turning nitrogen positively charged and strongly deactivating the ring.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. C₆H₅NH₂ + AlCl₃ → C₆H₅NH₂⁺ AlCl₃⁻; the positively charged N strongly withdraws electrons (-I), deactivating the benzene ring toward electrophilic substitution.",
        "stepMarking": [
          {
            "step": "Option (A) explaining AlCl₃ salt formation & deactivation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reason applies why nitration of aniline gives unexpected 47% meta-nitroaniline (anilinium ion formation in strong acid)!",
        "commonPitfall": "Saying -NH₂ itself is a deactivating group (it is actually strongly activating when free!)."
      },
      {
        "id": "model-c12-chem-2024-organic-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Osmotic Pressure for Polymers",
        "questionText": "Assertion (A): Osmotic pressure method is preferred over boiling point elevation for determining molar masses of proteins and polymers.\nReason (R): Osmotic pressure is measured at room temperature and has appreciable magnitude even for very dilute solutions.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Biomolecules decompose on heating (unlike boiling point) and show tiny ΔT_b at low molarity, whereas π is large enough to read accurately at room temperature.",
        "stepMarking": [
          {
            "step": "Option (A) citing room temp & measurable magnitude",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also note molarity (M) is used in π = CRT instead of molality.",
        "commonPitfall": "Saying polymers are insoluble in water."
      },
      {
        "id": "model-c12-chem-2024-organic-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Haloarenes: Lower Reactivity Toward Nucleophilic Substitution",
        "questionText": "Assertion (A): Chlorobenzene is much less reactive towards nucleophilic substitution than chloroethane.\nReason (R): In chlorobenzene, the C–Cl bond acquires partial double-bond character due to resonance, and carbon is sp²-hybridised.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Resonance structures give C–Cl partial double-bond strength (shorter, harder to cleave), plus sp² C holds electrons tightly and phenyl cation is unstable.",
        "stepMarking": [
          {
            "step": "Option (A) citing resonance partial double-bond & sp² carbon",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember all 4 NCERT reasons for haloarene inertness in S_N.",
        "commonPitfall": "Marking (B)."
      },
      {
        "id": "model-c12-chem-2024-organic-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Alcohols, Phenols & Ethers: Reimer-Tiemann & Kolbe Reactions",
        "questionText": "Write the balanced chemical equations for:\n(i) Reimer-Tiemann reaction of phenol\n(ii) Williamson synthesis of tert-butyl ethyl ether (CH₃)₃C–O–C₂H₅ using proper reactants.",
        "modelAnswer": "(i) Reimer-Tiemann: Phenol + CHCl₃ + 3NaOH --(340K)--> Sodium salicylate intermediate --(H⁺)--> Salicylaldehyde (2-hydroxybenzaldehyde) + 3NaCl + 2H₂O.\n(ii) Williamson Synthesis: Must use 3° alkoxide + 1° alkyl halide (NOT 3° halide, which gives alkene elimination!):\n(CH₃)₃C–O⁻Na⁺ + CH₃CH₂–Br → (CH₃)₃C–O–C₂H₅ + NaBr.",
        "stepMarking": [
          {
            "step": "(i) Phenol + CHCl₃ + aq. NaOH -> Salicylaldehyde",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Sodium tert-butoxide + ethyl bromide -> ether",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In Williamson synthesis of tert-butyl ethers, NEVER choose (CH₃)₃C-Br + C₂H₅ONa — it produces 2-methylpropene instead of ether!",
        "commonPitfall": "Using tert-butyl bromide in Williamson synthesis."
      },
      {
        "id": "model-c12-chem-2024-organic-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Biomolecules: Anomers vs Epimers / Zwitterion / Protein Denaturation",
        "questionText": "What is meant by denaturation of a protein? Give one example, and state which levels of protein structure are destroyed vs retained.",
        "modelAnswer": "Denaturation: Disruption of native 3D biological structure of a protein due to physical change (heat) or chemical change (pH alteration), disrupting hydrogen bonds so globules unfold and protein loses biological activity.\nExample: Coagulation of egg white on boiling, or curdling of milk.\nEffect on structure: Secondary and Tertiary structures are destroyed, while the Primary structure (peptide sequence) remains intact.",
        "stepMarking": [
          {
            "step": "Definition + example (boiled egg white / curdling)",
            "marks": "1 Mark"
          },
          {
            "step": "2° & 3° destroyed; 1° structure remains intact",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Primary peptide bonds are NOT broken during denaturation.",
        "commonPitfall": "Saying primary amino acid sequence is broken."
      },
      {
        "id": "model-c12-chem-2024-organic-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Electrochemistry: Faraday's First Law & Fuel Cell",
        "questionText": "How many Coulombs of electricity are required to reduce 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium? Also write the overall reaction of an H₂–O₂ fuel cell.",
        "modelAnswer": "Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.\n5 moles of electrons are required per mole MnO₄⁻ => Charge Q = 5 F = 5 × 96500 C = 482,500 C.\nH₂–O₂ Fuel Cell overall reaction: 2H₂(g) + O₂(g) → 2H₂O(l).",
        "stepMarking": [
          {
            "step": "5 F = 482,500 C calculation",
            "marks": "1 Mark"
          },
          {
            "step": "Fuel cell reaction 2H₂ + O₂ -> 2H₂O",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Oxidation state change of Mn: +7 -> +2 => n = 5 electrons.",
        "commonPitfall": "Using n = 3 (MnO₂ neutral product) instead of n = 5."
      },
      {
        "id": "model-c12-chem-2024-organic-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Kinetics: Pseudo-First Order & Half-Life",
        "questionText": "Show that for a first-order reaction, the time required for completion of 99.9% of the reaction is approximately 10 times its half-life (t₁/₂). (Given log 2 = 0.3010)",
        "modelAnswer": "t₁/₂ = 0.693 / k.\nFor 99.9% completion: [R]₀ = 100, remaining [R] = 100 - 99.9 = 0.1.\nt_99.9% = (2.303 / k) log₁₀(100 / 0.1) = (2.303 / k) log₁₀(10³) = (2.303 × 3) / k = 6.909 / k.\nRatio t_99.9% / t₁/₂ = (6.909 / k) / (0.693 / k) = 6.909 / 0.693 ≈ 9.97 ≈ 10.",
        "stepMarking": [
          {
            "step": "Compute t_99.9% = 6.909/k using remaining [R] = 0.1",
            "marks": "1 Mark"
          },
          {
            "step": "Take ratio 6.909 / 0.693 ≈ 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Remaining concentration [R] = [R]₀ - 99.9% = 0.1% of [R]₀!",
        "commonPitfall": "Plugging 99.9 in the denominator instead of remaining 0.1."
      },
      {
        "id": "model-c12-chem-2024-organic-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "d- and f-Block: Lanthanoid Contraction Causes & Consequences",
        "questionText": "What is Lanthanoid contraction? Mention two important consequences of lanthanoid contraction.",
        "modelAnswer": "Lanthanoid contraction: Steady decrease in atomic and ionic radii from La³⁺ to Lu³⁺ across the 4f series due to poor shielding effect of inner 4f electrons against increasing nuclear charge.\nConsequences:\n1. Zr (4d) and Hf (5d) have almost identical atomic radii (160 pm vs 159 pm) and very similar chemical properties.\n2. Basicity of lanthanoid hydroxides decreases steadily from La(OH)₃ to Lu(OH)₃.",
        "stepMarking": [
          {
            "step": "Definition + poor 4f shielding",
            "marks": "1 Mark"
          },
          {
            "step": "Two consequences (Zr/Hf pair & hydroxide basicity)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Poor shielding order: s > p > d > f (4f shields very poorly!).",
        "commonPitfall": "Saying nuclear charge decreases across lanthanoids."
      },
      {
        "id": "model-c12-chem-2024-organic-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Haloalkanes: Conversions & Ambident Nucleophiles",
        "questionText": "(a) Explain why haloalkanes react with KCN to form alkyl cyanides as major products, whereas with AgCN they yield isocyanides.\n(b) Convert Propene to Propan-1-ol.",
        "modelAnswer": "(a) CN⁻ is an ambident nucleophile (can attack through C or N). KCN is predominantly ionic, leaving C-end free to form stronger C–C bond (alkyl cyanide R–CN). AgCN is largely covalent, so the lone pair on Nitrogen attacks R–X forming isocyanide (R–NC).\n(b) Propene + HBr (with peroxide) → 1-Bromopropane --(aq. KOH)--> Propan-1-ol (or Hydroboration-Oxidation directly with B₂H₆ followed by H₂O₂/OH⁻).",
        "stepMarking": [
          {
            "step": "(a) Ionic KCN (R-CN) vs covalent AgCN (R-NC) ambident logic",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Hydroboration-oxidation or peroxide-HBr + aq. KOH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same ambident distinction applies to KNO₂ (R-ONO) vs AgNO₂ (R-NO₂)!",
        "commonPitfall": "Saying KCN is covalent and AgCN is ionic."
      },
      {
        "id": "model-c12-chem-2024-organic-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Amines: Gabriel Phthalimide Synthesis & Hinsberg Test",
        "questionText": "(a) Why cannot aromatic primary amines (like Aniline) be prepared by Gabriel phthalimide synthesis?\n(b) How does Hinsberg's reagent (benzenesulphonyl chloride, C₆H₅SO₂Cl) distinguish between primary, secondary, and tertiary amines?",
        "modelAnswer": "(a) Gabriel phthalimide synthesis involves S_N2 nucleophilic attack of phthalimide anion on an alkyl halide. Aryl halides (like chlorobenzene) do NOT undergo nucleophilic substitution easily due to partial double-bond character of C–X bond, so aniline cannot be prepared.\n(b) With C₆H₅SO₂Cl:\n• 1° Amine forms N-alkylbenzenesulphonamide which dissolves in aq. KOH (has acidic N–H proton).\n• 2° Amine forms N,N-dialkylbenzenesulphonamide which is INSOLUBLE in aq. KOH (no acidic N–H).\n• 3° Amine does NOT react at all.",
        "stepMarking": [
          {
            "step": "(a) Aryl halides resist SN2 attack by phthalimide ion",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Hinsberg observations for 1°, 2°, 3° amines",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Note: Hinsberg reagent distinguishes amines by presence of acidic H on sulphonamide nitrogen!",
        "commonPitfall": "Thinking 2° amine product dissolves in KOH."
      },
      {
        "id": "model-c12-chem-2024-organic-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Alcohols, Phenols & Ethers: Acid-Catalysed Hydration & Phenol Acidity",
        "questionText": "Arrange the following in increasing order of acidic strength and justify: Propan-1-ol, Phenol, 4-Nitrophenol, 4-Methylphenol (p-cresol).",
        "modelAnswer": "Increasing acidic strength: Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol.\nJustification:\n• Phenols are vastly more acidic than aliphatic alcohols because phenoxide ion is resonance-stabilised.\n• In 4-nitrophenol, the strongly electron-withdrawing -NO₂ group (-R and -I) disperses negative charge on phenoxide oxygen, increasing acidity.\n• In 4-methylphenol, electron-donating -CH₃ (+I and hyperconjugation) intensifies negative charge, destabilising phenoxide ion and decreasing acidity.",
        "stepMarking": [
          {
            "step": "Correct sequence Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol",
            "marks": "1 Mark"
          },
          {
            "step": "Resonance stabilisation of phenoxide + -NO₂ vs -CH₃ effects",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: EWG (-NO₂) increases phenol acidity; EDG (-CH₃, -OCH₃) decreases phenol acidity.",
        "commonPitfall": "Placing 4-methylphenol above phenol."
      },
      {
        "id": "model-c12-chem-2024-organic-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Solutions: Freezing Point Depression Numerical (with Van't Hoff Factor)",
        "questionText": "Calculate the freezing point of a solution containing 60 g of glucose (Molar mass = 180 g/mol) in 250 g of water (K_f for water = 1.86 K kg mol⁻¹). How would the result change if 0.33 mol of NaCl were used instead?",
        "modelAnswer": "Moles of glucose = 60 / 180 = 1/3 mol.\nMass of solvent = 250 g = 0.25 kg.\nMolality m = (1/3) / 0.25 = 4/3 ≈ 1.333 mol/kg.\nΔT_f = K_f · m = 1.86 × (4/3) = 2.48 K.\nFreezing point = 273.15 - 2.48 = 270.67 K (or -2.48°C).\nWith 0.33 mol NaCl (i ≈ 2), moles of ions double => ΔT_f ≈ 4.96 K -> freezing point drops twice as much (-4.96°C).",
        "stepMarking": [
          {
            "step": "Molality m = 1.333 mol/kg",
            "marks": "1 Mark"
          },
          {
            "step": "ΔT_f = 2.48 K -> T_f = -2.48°C (270.67 K)",
            "marks": "1 Mark"
          },
          {
            "step": "NaCl i=2 doubles depression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert solvent mass from grams to kg in molality!",
        "commonPitfall": "Taking 2.48°C instead of -2.48°C as final freezing point!"
      },
      {
        "id": "model-c12-chem-2024-organic-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Electrochemistry: Nernst Equation Cell EMF Numerical at 298 K",
        "questionText": "Calculate the EMF of the cell at 298 K:\nMg(s) | Mg²⁺ (0.001 M) || Cu²⁺ (0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.36 V, E°(Cu²⁺/Cu) = +0.34 V. (Use 0.059/2 ≈ 0.0295)",
        "modelAnswer": "Cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) (n = 2 electrons).\nE°_cell = E°_cathode - E°_anode = 0.34 - (-2.36) = +2.70 V.\nNernst Equation at 298 K:\nE_cell = E°_cell - (0.059 / 2) log₁₀([Mg²⁺] / [Cu²⁺])\n= 2.70 - 0.0295 log₁₀(10⁻³ / 10⁻⁴) = 2.70 - 0.0295 log₁₀(10)\n= 2.70 - 0.0295 = 2.6705 V.",
        "stepMarking": [
          {
            "step": "E°_cell = 2.70 V & n = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Nernst setup [Mg²⁺]/[Cu²⁺] = 10",
            "marks": "1 Mark"
          },
          {
            "step": "E_cell = 2.67 V",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Put Anode product concentration [Mg²⁺] in numerator and Cathode reactant [Cu²⁺] in denominator!",
        "commonPitfall": "Inverting ratio as [Cu²⁺]/[Mg²⁺] or taking n = 1."
      },
      {
        "id": "model-c12-chem-2024-organic-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Kinetics: Arrhenius Activation Energy Numerical",
        "questionText": "The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy E_a of the reaction. (R = 8.314 J/mol·K, log 2 = 0.3010)",
        "modelAnswer": "Using Arrhenius two-temperature equation:\nlog₁₀(k₂ / k₁) = [E_a / (2.303 R)] × [ (T₂ - T₁) / (T₁ T₂) ]\nlog₁₀(2) = [E_a / (2.303 × 8.314)] × [ 10 / (298 × 308) ]\n0.3010 = (E_a / 19.147) × (10 / 91784)\nE_a = (0.3010 × 19.147 × 91784) / 10 ≈ 52,898 J/mol = 52.9 kJ/mol.",
        "stepMarking": [
          {
            "step": "Arrhenius formula with k₂/k₁ = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Substitute T₁=298 K, T₂=308 K",
            "marks": "1 Mark"
          },
          {
            "step": "E_a ≈ 52.9 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write E_a in both J/mol and kJ/mol cleanly.",
        "commonPitfall": "Using Celsius 25 and 35 instead of Kelvin 298 and 308."
      },
      {
        "id": "model-c12-chem-2024-organic-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Coordination Compounds: CFT Splitting & Geometry of [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻",
        "questionText": "Using Valence Bond Theory, explain why [Ni(CN)₄]²⁻ is square planar and diamagnetic whereas [NiCl₄]²⁻ is tetrahedral and paramagnetic (Atomic number of Ni = 28).",
        "modelAnswer": "Ni²⁺ has 3d⁸ configuration (two unpaired e⁻ in 3d).\n1. In [Ni(CN)₄]²⁻, CN⁻ is a strong-field ligand causing pairing of the two unpaired 3d electrons, vacating one 3d orbital. Hybridisation is dsp² -> Square Planar geometry and diamagnetic (0 unpaired e⁻).\n2. In [NiCl₄]²⁻, Cl⁻ is a weak-field ligand unable to pair 3d electrons -> outer 4s and 4p orbitals hybridise (sp³) -> Tetrahedral geometry with 2 unpaired electrons (paramagnetic, μ ≈ 2.83 BM).",
        "stepMarking": [
          {
            "step": "Ni²⁺ 3d⁸ ground state",
            "marks": "0.5 Mark"
          },
          {
            "step": "[Ni(CN)₄]²⁻ pairing -> dsp², square planar, diamagnetic",
            "marks": "1.25 Marks"
          },
          {
            "step": "[NiCl₄]²⁻ no pairing -> sp³, tetrahedral, paramagnetic (2 unpaired e⁻)",
            "marks": "1.25 Marks"
          }
        ],
        "examinerTip": "Both have coordination number 4, making it the classic CN=4 VBT comparison!",
        "commonPitfall": "Assigning sp³d² instead of dsp² / sp³."
      },
      {
        "id": "model-c12-chem-2024-organic-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Integrated Rate Law & Half-Life in Chemical Kinetics",
        "questionText": "Read the case and answer:\nFor a first-order decomposition reaction R → Products, the concentration of reactant drops from 0.8 M to 0.2 M in 40 minutes at 300 K. (Given log 2 = 0.3010)\n\n(a) Determine the half-life (t₁/₂) of this reaction. (1M)\n(b) Calculate the first-order rate constant k in min⁻¹. (1.5M)\n(c) What fraction of initial reactant will remain after 60 minutes from the start? (1.5M)",
        "modelAnswer": "(a) Concentration dropped from 0.8 M -> 0.4 M -> 0.2 M (2 half-lives in 40 minutes) => t₁/₂ = 40 / 2 = 20 minutes.\n(b) k = 0.693 / t₁/₂ = 0.693 / 20 = 0.03465 min⁻¹.\n(c) 60 minutes = 3 half-lives (60/20 = 3) => Remaining fraction = (1/2)³ = 1/8 = 0.125 (12.5%).",
        "stepMarking": [
          {
            "step": "(a) 2 half-lives = 40 min -> t₁/₂ = 20 min",
            "marks": "1 Mark"
          },
          {
            "step": "(b) k = 0.03465 min⁻¹",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) (1/2)³ = 1/8 = 12.5%",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "First-order half-life is strictly INDEPENDENT of initial concentration!",
        "commonPitfall": "Using zero-order t₁/₂ formula [R]₀/(2k)."
      },
      {
        "id": "model-c12-chem-2024-organic-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Biomolecules – Carbohydrates & Glucose Structure",
        "questionText": "Read the case and answer:\nGlucose is an aldohexose that exists primarily in two cyclic hemiacetal forms (α-D-glucose and β-D-glucose) differing only in configuration around C-1 carbon. Despite having an aldehyde group, glucose does not give Schiff's test or react with NaHSO₃.\n\n(a) What name is given to the cyclic pair α-D-glucose and β-D-glucose? (1M)\n(b) Name the reaction and product when glucose is treated with (i) Bromine water, and (ii) Conc. HNO₃. (2M)\n(c) Why are sucrose and starch classified differently with respect to Fehling's reducing test? (1M)",
        "modelAnswer": "(a) Anomers (differing only at C-1 anomeric carbon).\n(b) (i) Bromine water (mild oxidant) oxidises -CHO group only -> Gluconic acid.\n(ii) Conc. HNO₃ oxidises both -CHO and primary -CH₂OH -> Saccharic acid (dicarboxylic acid).\n(c) Sucrose has both glucose C-1 and fructose C-2 anomeric carbons locked in glycosidic linkage -> NON-reducing sugar (no free hemiacetal), whereas maltose/lactose are reducing sugars.",
        "stepMarking": [
          {
            "step": "(a) Anomers",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Gluconic acid & Saccharic acid",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Glycosidic bond locks reducing groups in sucrose",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Br₂ water -> Gluconic acid; Conc. HNO₃ -> Saccharic acid; HI + Δ -> n-Hexane.",
        "commonPitfall": "Confusing Gluconic acid with Saccharic acid."
      },
      {
        "id": "model-c12-chem-2024-organic-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "d- and f-Block Elements: KMnO₄ / K₂Cr₂O₇ Oxidising Reactions & Transition Trends",
        "questionText": "(a) Write balanced ionic equations for the oxidising action of acidified potassium permanganate (MnO₄⁻) on:\n  (i) Oxalate ion (C₂O₄²⁻)\n  (ii) Ferrous ion (Fe²⁺)\n  (iii) Iodide ion (I⁻) in neutral/faintly alkaline medium.\n(b) Account for the following:\n  (i) Transition metals form a large number of complex compounds and act as good catalysts.\n  (ii) Cu⁺ ion is unstable in aqueous solution and disproportionates.",
        "modelAnswer": "(a) (i) 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.\n(ii) MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.\n(iii) 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻ (iodate!).\n(b) (i) Complexes: small ionic size, high ionic charge, availability of vacant d-orbitals. Catalysis: ability to adopt variable oxidation states and provide surface area for adsorption.\n(ii) 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s). Although Cu⁺ has stable 3d¹⁰, the much higher negative hydration enthalpy (Δ_hyd H) of tiny doubly-charged Cu²⁺ more than compensates for the high second ionisation enthalpy of Cu.",
        "stepMarking": [
          {
            "step": "(a) All 3 balanced redox ionic equations (note IO₃⁻ in neutral/alkaline!)",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Complex/catalyst reasons + high hydration enthalpy of Cu²⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Watch out: MnO₄⁻ oxidises I⁻ to I₂ in ACIDIC medium, but to IO₃⁻ in NEUTRAL/FAINTLY ALKALINE medium!",
        "commonPitfall": "Writing I₂ instead of IO₃⁻ in neutral/alkaline medium."
      },
      {
        "id": "model-c12-chem-2024-organic-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Named Reactions & Distinguishing Tests",
        "questionText": "(a) Write chemical equations for:\n  (i) Cross-Aldol or Self-Aldol condensation of Ethanal\n  (ii) HVZ (Hell-Volhard-Zelinsky) reaction of Propanoic acid\n  (iii) Rosenmund reduction of Benzoyl chloride.\n(b) Give simple chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Phenol and Benzoic acid.",
        "modelAnswer": "(a) (i) 2 CH₃CHO --(dil. NaOH)--> CH₃CH(OH)CH₂CHO (3-Hydroxybutanal) --(Heat)--> CH₃CH=CHCHO (But-2-enal) + H₂O.\n(ii) CH₃CH₂COOH --(Cl₂/Red P, H₂O)--> CH₃CH(Cl)COOH (2-Chloropropanoic acid).\n(iii) C₆H₅COCl + H₂ --(Pd-BaSO₄)--> C₆H₅CHO + HCl.\n(b) (i) Propanal gives silver mirror with Tollens' reagent (or red Cu₂O ppt with Fehling's); Propanone does NOT (conversely, Propanone gives yellow iodoform ppt with I₂/NaOH).\n(ii) Benzoic acid gives brisk effervescence of CO₂ with NaHCO₃ solution; Phenol does not (or Phenol gives violet colour with neutral FeCl₃).",
        "stepMarking": [
          {
            "step": "(a) Aldol, HVZ & Rosenmund equations",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Tollens/Fehling & NaHCO₃/FeCl₃ tests",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Both Tollens' and Fehling's distinguish aldehydes from ketones (Note: aromatic aldehydes like Benzaldehyde do NOT respond to Fehling's test!).",
        "commonPitfall": "Using Fehling's test to detect Benzaldehyde."
      },
      {
        "id": "model-c12-chem-2024-organic-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Electrochemistry: Kohlrausch Law Numerical & Corrosion / Batteries",
        "questionText": "(a) State Kohlrausch's law of independent migration of ions. Calculate Λ°_m for acetic acid (CH₃COOH) given:\n  Λ°_m(HCl) = 425.9 S cm² mol⁻¹, Λ°_m(NaCl) = 126.4 S cm² mol⁻¹, Λ°_m(CH₃COONa) = 91.0 S cm² mol⁻¹.\n(b) If conductivity of 0.00241 M acetic acid is 7.896 × 10⁻⁵ S cm⁻¹, calculate its molar conductivity Λ_m and degree of dissociation α (using Λ°_m = 390.5 S cm² mol⁻¹).",
        "modelAnswer": "(a) Kohlrausch Law: Limiting molar conductivity of an electrolyte equals the sum of individual limiting ionic conductivities of its cation and anion.\nΛ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 390.5 S cm² mol⁻¹.\n(b) Λ_m = (κ × 1000) / M = (7.896 × 10⁻⁵ × 1000) / 0.00241 = 0.07896 / 0.00241 = 32.76 S cm² mol⁻¹.\nDegree of dissociation α = Λ_m / Λ°_m = 32.76 / 390.5 ≈ 0.084 (8.4%).",
        "stepMarking": [
          {
            "step": "(a) Statement + 390.5 S cm² mol⁻¹ calculation",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Λ_m = 32.76 & α = 0.084",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Check units carefully: κ in S/cm uses factor 1000 in (κ × 1000)/M.",
        "commonPitfall": "Subtracting NaCl twice or omitting factor 1000."
      }
    ]
  },
  {
    "id": "model-c12-chem-2022-aps",
    "title": "Army Public Schools Combined Class 12 Chemistry Pre-Board (2022)",
    "subject": "Chemistry",
    "targetClass": "Class 12",
    "year": 2022,
    "paperType": "PRE_BOARD",
    "paperCode": "APS/C12/CHE-05",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "There are 33 questions in this question paper with internal choice (Total 70 Marks).",
      "Section A: Q1 to Q16 (12 MCQs + 4 Assertion-Reason) carrying 1 mark each.",
      "Section B: Q17 to Q21 carrying 2 marks each.",
      "Section C: Q22 to Q28 carrying 3 marks each.",
      "Section D: Q29 to Q30 are case-based questions carrying 4 marks each.",
      "Section E: Q31 to Q33 are long answer questions carrying 5 marks each."
    ],
    "questions": [
      {
        "id": "model-c12-chem-2022-aps-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Electrochemistry: Kohlrausch Law & Conductance",
        "questionText": "On dilution of both a strong electrolyte (KCl) and a weak electrolyte (CH₃COOH), which statement holds true?",
        "options": [
          "A) Molar conductivity Λ_m increases for both, while conductivity κ decreases for both",
          "B) Both κ and Λ_m increase",
          "C) Λ_m decreases for weak electrolyte",
          "D) Conductivity κ increases on dilution"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Conductivity (κ) decreases on dilution because number of ions per unit volume decreases. Molar conductivity (Λ_m = κ × 1000 / M) increases due to rise in volume V (strong) and surge in degree of dissociation α (weak).",
        "stepMarking": [
          {
            "step": "κ decreases (fewer ions/mL), Λ_m increases on dilution",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize contrast: κ ALWAYS decreases with dilution; Λ_m ALWAYS increases with dilution.",
        "commonPitfall": "Saying conductivity κ increases with dilution."
      },
      {
        "id": "model-c12-chem-2022-aps-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Chemical Kinetics: Units of Rate Constant",
        "questionText": "The rate constant of a chemical reaction has units mol⁻¹ L s⁻¹. What is the overall order of this reaction?",
        "options": [
          "A) Zero order",
          "B) First order",
          "C) Second order",
          "D) Third order"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. General unit of k is (mol L⁻¹)^(1-n) s⁻¹. Setting 1 - n = -1 => n = 2 (Second order).",
        "stepMarking": [
          {
            "step": "Apply (mol/L)^(1-n) s⁻¹ -> n = 2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Zero order = mol L⁻¹ s⁻¹; First order = s⁻¹; Second order = mol⁻¹ L s⁻¹.",
        "commonPitfall": "Mixing up zero-order and second-order signs."
      },
      {
        "id": "model-c12-chem-2022-aps-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "d- and f-Block Elements: Paramagnetism & Spin-Only Moment",
        "questionText": "Which of the following 3d transition metal ions has the highest magnetic moment (spin-only)?",
        "options": [
          "A) Ti³⁺ (Z = 22)",
          "B) V²⁺ (Z = 23)",
          "C) Mn²⁺ (Z = 25)",
          "D) Cu²⁺ (Z = 29)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Mn²⁺ has [Ar] 3d⁵ configuration with 5 unpaired electrons, giving μ = √(5(5+2)) = √35 ≈ 5.92 BM (maximum among all 3d ions).",
        "stepMarking": [
          {
            "step": "Mn²⁺ (3d⁵ -> 5 unpaired e⁻) => μ = 5.92 BM",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Recall μ = √(n(n+2)) BM; maximum unpaired electrons in d-orbitals is 5.",
        "commonPitfall": "Confusing Mn²⁺ (3d⁵) with Fe²⁺ (3d⁶, only 4 unpaired e⁻)."
      },
      {
        "id": "model-c12-chem-2022-aps-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: IUPAC Nomenclature & Linkage Isomerism",
        "questionText": "The IUPAC name of the coordination complex [Pt(NH₃)₂Cl(NO₂)] is:",
        "options": [
          "A) Diamminechloridonitrito-N-platinum(II)",
          "B) Diamminechloronitritoplatinum(IV)",
          "C) Platinum(II) diamminechloronitrite",
          "D) Nitrito-N-diamminechloroplatinum(0)"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Alphabetical ligand order: ammine, chlorido, nitrito-N (or nitro). Oxidation state of Pt: x + 0 - 1 - 1 = 0 => +2 (II). Name: Diamminechloridonitrito-N-platinum(II).",
        "stepMarking": [
          {
            "step": "Alphabetical ligands + Pt(II) oxidation state",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ignore \"di/tri\" prefixes when alphabetizing ligands (ammine -> chlorido -> nitrito).",
        "commonPitfall": "Miscomputing Pt oxidation state as IV instead of II."
      },
      {
        "id": "model-c12-chem-2022-aps-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Coordination Compounds: Crystal Field Splitting Δ₀",
        "questionText": "Which complex ion is low-spin (inner orbital, d²sp³ hybridised) and diamagnetic?",
        "options": [
          "A) [CoF₆]³⁻",
          "B) [FeF₆]³⁻",
          "C) [Co(NH₃)₆]³⁺",
          "D) [NiCl₄]²⁻"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Co³⁺ is 3d⁶. NH₃ is a strong-field ligand (Δ₀ > P), forcing all 6 electrons to pair in t₂g⁶ e_g⁰ (0 unpaired e⁻, diamagnetic, d²sp³). F⁻ is weak-field leaving [CoF₆]³⁻ high-spin paramagnetic (sp³d²).",
        "stepMarking": [
          {
            "step": "Strong-field NH₃ pairs Co³⁺ 3d⁶ -> d²sp³ diamagnetic",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Strong-field ligands in NCERT: CO, CN⁻, en, NH₃ (for Co³⁺).",
        "commonPitfall": "Thinking [CoF₆]³⁻ is diamagnetic."
      },
      {
        "id": "model-c12-chem-2022-aps-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Haloalkanes & Haloarenes: SN1 vs SN2 Reactivity",
        "questionText": "Which alkyl halide undergoes S_N2 nucleophilic substitution reaction at the FASTEST rate?",
        "options": [
          "A) (CH₃)₃C–Br",
          "B) (CH₃)₂CH–Br",
          "C) CH₃CH₂–Br",
          "D) CH₃–Br"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. S_N2 proceeds via backside attack with a pentavalent transition state; least steric hindrance gives fastest rate: CH₃X > 1° > 2° > 3°.",
        "stepMarking": [
          {
            "step": "Least steric hindrance -> CH₃–Br fastest in SN2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "SN2 order: 0° (methyl) > 1° > 2° > 3°; SN1 order: 3° > 2° > 1°.",
        "commonPitfall": "Selecting 3° butyl bromide (which is fastest for SN1, slowest for SN2)."
      },
      {
        "id": "model-c12-chem-2022-aps-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Alcohols, Phenols & Ethers: Lucas Test & Acidity",
        "questionText": "Lucas reagent (conc. HCl + anhydrous ZnCl₂) produces immediate turbidity at room temperature with:",
        "options": [
          "A) Propan-1-ol",
          "B) Propan-2-ol",
          "C) 2-Methylpropan-2-ol (tert-butyl alcohol)",
          "D) Phenol"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Lucas test proceeds via carbocation intermediate: 3° alcohols form very stable 3° carbocation and turn turbid IMMEDIATELY; 2° takes ~5 minutes; 1° shows no turbidity at room temp.",
        "stepMarking": [
          {
            "step": "3° alcohol (2-methylpropan-2-ol) -> immediate turbidity",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember 3° immediate, 2° in 5 min, 1° only on heating.",
        "commonPitfall": "Choosing Phenol (which does not undergo C–O cleavage with Lucas)."
      },
      {
        "id": "model-c12-chem-2022-aps-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Aldol vs Cannizzaro",
        "questionText": "Which of the following aldehydes undergoes Cannizzaro reaction (self-oxidation-reduction) when heated with concentrated NaOH?",
        "options": [
          "A) Ethanal (CH₃CHO)",
          "B) Propanal (CH₃CH₂CHO)",
          "C) Benzaldehyde (C₆H₅CHO)",
          "D) Butanal"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Aldehydes lacking α-hydrogen atoms (like HCHO and C₆H₅CHO) undergo Cannizzaro disproportionation in conc. alkali to yield an alcohol and a carboxylate salt.",
        "stepMarking": [
          {
            "step": "No α-hydrogen in Benzaldehyde -> Cannizzaro reaction",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "α-H present => Aldol condensation; No α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO) => Cannizzaro!",
        "commonPitfall": "Choosing Ethanal (which has 3 α-hydrogens and gives Aldol)."
      },
      {
        "id": "model-c12-chem-2022-aps-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Basicity in Aqueous Solution (Ethyl Amines)",
        "questionText": "The correct decreasing order of basic strength of ethylamines in AQUEOUS solution is:",
        "options": [
          "A) (C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃",
          "B) (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
          "C) C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃",
          "D) NH₃ > C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Combining +I effect, solvation (hydration) stability, and steric hindrance in water: Ethyl series is 2° > 3° > 1° > NH₃ (whereas Methyl series is 2° > 1° > 3° > NH₃!).",
        "stepMarking": [
          {
            "step": "Aqueous Ethyl order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Memorize NCERT aqueous code: Ethyl = 231, Methyl = 213! Gas phase is always 3 > 2 > 1.",
        "commonPitfall": "Mixing up Methyl (213) and Ethyl (231) aqueous orders."
      },
      {
        "id": "model-c12-chem-2022-aps-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Biomolecules: DNA Base Pairing & Vitamins",
        "questionText": "Deficiency of Vitamin C (ascorbic acid) causes which disease, and which base is present in RNA but absent in DNA?",
        "options": [
          "A) Beri-beri; Thymine",
          "B) Scurvy; Uracil",
          "C) Rickets; Cytosine",
          "D) Night blindness; Guanine"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Vitamin C deficiency causes Scurvy (bleeding gums). RNA contains Uracil (U) in place of Thymine (T) found in DNA.",
        "stepMarking": [
          {
            "step": "Scurvy + Uracil in RNA",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Water-soluble vitamins: B-complex and C (cannot be stored long in body except B₁₂).",
        "commonPitfall": "Swapping Uracil and Thymine."
      },
      {
        "id": "model-c12-chem-2022-aps-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Azeotropes & Raoult Law Deviations",
        "questionText": "A mixture of ethanol and acetone shows positive deviation from Raoult's law because:",
        "options": [
          "A) Ethanol-acetone hydrogen bonding is stronger than pure ethanol H-bonds",
          "B) Acetone molecules break existing hydrogen bonds between ethanol molecules, weakening intermolecular attraction",
          "C) Vapour pressure of mixture is lower than ideal",
          "D) Δ_mix H is negative"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Pure ethanol molecules are strongly H-bonded; adding acetone separates ethanol molecules and breaks some H-bonds, resulting in weaker A–B interactions, higher vapour pressure, Δ_mix H > 0 and Δ_mix V > 0.",
        "stepMarking": [
          {
            "step": "Weaker A-B interactions -> positive deviation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Positive deviation forms MINIMUM-boiling azeotropes; negative deviation (CHCl₃ + acetone, HNO₃ + H₂O) forms MAXIMUM-boiling azeotropes.",
        "commonPitfall": "Confusing positive deviation with maximum-boiling azeotrope."
      },
      {
        "id": "model-c12-chem-2022-aps-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Van't Hoff Factor (i)",
        "questionText": "Which of the following 0.1 M aqueous solutions will exhibit the HIGHEST boiling point (assume 100% dissociation)?",
        "options": [
          "A) Glucose",
          "B) NaCl",
          "C) CaCl₂",
          "D) Al₂(SO₄)₃"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Elevation in boiling point ΔT_b = i·K_b·m. Al₂(SO₄)₃ dissociates into 2 Al³⁺ + 3 SO₄²⁻ -> van't Hoff factor i = 5 (highest among glucose=1, NaCl=2, CaCl₂=3).",
        "stepMarking": [
          {
            "step": "Al₂(SO₄)₃ gives i = 5 -> max ΔT_b",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For highest freezing point (lowest ΔT_f), choose SMALLEST i (Glucose)! For highest boiling point / osmotic pressure, choose LARGEST i!",
        "commonPitfall": "Selecting Glucose when highest boiling point is asked."
      },
      {
        "id": "model-c12-chem-2022-aps-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Amines: Aniline Fails Friedel-Crafts Reaction",
        "questionText": "Assertion (A): Aniline does not undergo Friedel-Crafts alkylation or acylation.\nReason (R): Aniline acts as a Lewis base and reacts with the Lewis acid catalyst Anhydrous AlCl₃ to form a salt, turning nitrogen positively charged and strongly deactivating the ring.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. C₆H₅NH₂ + AlCl₃ → C₆H₅NH₂⁺ AlCl₃⁻; the positively charged N strongly withdraws electrons (-I), deactivating the benzene ring toward electrophilic substitution.",
        "stepMarking": [
          {
            "step": "Option (A) explaining AlCl₃ salt formation & deactivation",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same reason applies why nitration of aniline gives unexpected 47% meta-nitroaniline (anilinium ion formation in strong acid)!",
        "commonPitfall": "Saying -NH₂ itself is a deactivating group (it is actually strongly activating when free!)."
      },
      {
        "id": "model-c12-chem-2022-aps-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Solutions: Osmotic Pressure for Polymers",
        "questionText": "Assertion (A): Osmotic pressure method is preferred over boiling point elevation for determining molar masses of proteins and polymers.\nReason (R): Osmotic pressure is measured at room temperature and has appreciable magnitude even for very dilute solutions.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Biomolecules decompose on heating (unlike boiling point) and show tiny ΔT_b at low molarity, whereas π is large enough to read accurately at room temperature.",
        "stepMarking": [
          {
            "step": "Option (A) citing room temp & measurable magnitude",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also note molarity (M) is used in π = CRT instead of molality.",
        "commonPitfall": "Saying polymers are insoluble in water."
      },
      {
        "id": "model-c12-chem-2022-aps-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Haloarenes: Lower Reactivity Toward Nucleophilic Substitution",
        "questionText": "Assertion (A): Chlorobenzene is much less reactive towards nucleophilic substitution than chloroethane.\nReason (R): In chlorobenzene, the C–Cl bond acquires partial double-bond character due to resonance, and carbon is sp²-hybridised.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Resonance structures give C–Cl partial double-bond strength (shorter, harder to cleave), plus sp² C holds electrons tightly and phenyl cation is unstable.",
        "stepMarking": [
          {
            "step": "Option (A) citing resonance partial double-bond & sp² carbon",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember all 4 NCERT reasons for haloarene inertness in S_N.",
        "commonPitfall": "Marking (B)."
      },
      {
        "id": "model-c12-chem-2022-aps-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Aldehydes & Ketones: Acidic Strength of Haloacetic Acids",
        "questionText": "Assertion (A): Trichloroacetic acid (CCl₃COOH) is a stronger acid than acetic acid (CH₃COOH).\nReason (R): Three strongly electron-withdrawing -Cl atoms exert a strong -I effect, dispersing the negative charge of the conjugate carboxylate ion and stabilising it.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Electron-withdrawing groups (-I) stabilise RCOO⁻ and increase K_a (decrease pK_a), whereas +I groups like -CH₃ decrease acidity.",
        "stepMarking": [
          {
            "step": "Option (A) citing -I stabilisation of conjugate base",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Higher K_a = Lower pK_a = Stronger Acid!",
        "commonPitfall": "Confusing +I vs -I effects."
      },
      {
        "id": "model-c12-chem-2022-aps-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Biomolecules: Anomers vs Epimers / Zwitterion / Protein Denaturation",
        "questionText": "What is meant by denaturation of a protein? Give one example, and state which levels of protein structure are destroyed vs retained.",
        "modelAnswer": "Denaturation: Disruption of native 3D biological structure of a protein due to physical change (heat) or chemical change (pH alteration), disrupting hydrogen bonds so globules unfold and protein loses biological activity.\nExample: Coagulation of egg white on boiling, or curdling of milk.\nEffect on structure: Secondary and Tertiary structures are destroyed, while the Primary structure (peptide sequence) remains intact.",
        "stepMarking": [
          {
            "step": "Definition + example (boiled egg white / curdling)",
            "marks": "1 Mark"
          },
          {
            "step": "2° & 3° destroyed; 1° structure remains intact",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Primary peptide bonds are NOT broken during denaturation.",
        "commonPitfall": "Saying primary amino acid sequence is broken."
      },
      {
        "id": "model-c12-chem-2022-aps-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Electrochemistry: Faraday's First Law & Fuel Cell",
        "questionText": "How many Coulombs of electricity are required to reduce 1 mole of MnO₄⁻ to Mn²⁺ in acidic medium? Also write the overall reaction of an H₂–O₂ fuel cell.",
        "modelAnswer": "Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.\n5 moles of electrons are required per mole MnO₄⁻ => Charge Q = 5 F = 5 × 96500 C = 482,500 C.\nH₂–O₂ Fuel Cell overall reaction: 2H₂(g) + O₂(g) → 2H₂O(l).",
        "stepMarking": [
          {
            "step": "5 F = 482,500 C calculation",
            "marks": "1 Mark"
          },
          {
            "step": "Fuel cell reaction 2H₂ + O₂ -> 2H₂O",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Oxidation state change of Mn: +7 -> +2 => n = 5 electrons.",
        "commonPitfall": "Using n = 3 (MnO₂ neutral product) instead of n = 5."
      },
      {
        "id": "model-c12-chem-2022-aps-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Chemical Kinetics: Pseudo-First Order & Half-Life",
        "questionText": "Show that for a first-order reaction, the time required for completion of 99.9% of the reaction is approximately 10 times its half-life (t₁/₂). (Given log 2 = 0.3010)",
        "modelAnswer": "t₁/₂ = 0.693 / k.\nFor 99.9% completion: [R]₀ = 100, remaining [R] = 100 - 99.9 = 0.1.\nt_99.9% = (2.303 / k) log₁₀(100 / 0.1) = (2.303 / k) log₁₀(10³) = (2.303 × 3) / k = 6.909 / k.\nRatio t_99.9% / t₁/₂ = (6.909 / k) / (0.693 / k) = 6.909 / 0.693 ≈ 9.97 ≈ 10.",
        "stepMarking": [
          {
            "step": "Compute t_99.9% = 6.909/k using remaining [R] = 0.1",
            "marks": "1 Mark"
          },
          {
            "step": "Take ratio 6.909 / 0.693 ≈ 10",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Remaining concentration [R] = [R]₀ - 99.9% = 0.1% of [R]₀!",
        "commonPitfall": "Plugging 99.9 in the denominator instead of remaining 0.1."
      },
      {
        "id": "model-c12-chem-2022-aps-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "d- and f-Block: Lanthanoid Contraction Causes & Consequences",
        "questionText": "What is Lanthanoid contraction? Mention two important consequences of lanthanoid contraction.",
        "modelAnswer": "Lanthanoid contraction: Steady decrease in atomic and ionic radii from La³⁺ to Lu³⁺ across the 4f series due to poor shielding effect of inner 4f electrons against increasing nuclear charge.\nConsequences:\n1. Zr (4d) and Hf (5d) have almost identical atomic radii (160 pm vs 159 pm) and very similar chemical properties.\n2. Basicity of lanthanoid hydroxides decreases steadily from La(OH)₃ to Lu(OH)₃.",
        "stepMarking": [
          {
            "step": "Definition + poor 4f shielding",
            "marks": "1 Mark"
          },
          {
            "step": "Two consequences (Zr/Hf pair & hydroxide basicity)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Poor shielding order: s > p > d > f (4f shields very poorly!).",
        "commonPitfall": "Saying nuclear charge decreases across lanthanoids."
      },
      {
        "id": "model-c12-chem-2022-aps-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Alcohols, Phenols & Ethers: Reimer-Tiemann & Kolbe Reactions",
        "questionText": "Write the balanced chemical equations for:\n(i) Reimer-Tiemann reaction of phenol\n(ii) Williamson synthesis of tert-butyl ethyl ether (CH₃)₃C–O–C₂H₅ using proper reactants.",
        "modelAnswer": "(i) Reimer-Tiemann: Phenol + CHCl₃ + 3NaOH --(340K)--> Sodium salicylate intermediate --(H⁺)--> Salicylaldehyde (2-hydroxybenzaldehyde) + 3NaCl + 2H₂O.\n(ii) Williamson Synthesis: Must use 3° alkoxide + 1° alkyl halide (NOT 3° halide, which gives alkene elimination!):\n(CH₃)₃C–O⁻Na⁺ + CH₃CH₂–Br → (CH₃)₃C–O–C₂H₅ + NaBr.",
        "stepMarking": [
          {
            "step": "(i) Phenol + CHCl₃ + aq. NaOH -> Salicylaldehyde",
            "marks": "1 Mark"
          },
          {
            "step": "(ii) Sodium tert-butoxide + ethyl bromide -> ether",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In Williamson synthesis of tert-butyl ethers, NEVER choose (CH₃)₃C-Br + C₂H₅ONa — it produces 2-methylpropene instead of ether!",
        "commonPitfall": "Using tert-butyl bromide in Williamson synthesis."
      },
      {
        "id": "model-c12-chem-2022-aps-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Amines: Gabriel Phthalimide Synthesis & Hinsberg Test",
        "questionText": "(a) Why cannot aromatic primary amines (like Aniline) be prepared by Gabriel phthalimide synthesis?\n(b) How does Hinsberg's reagent (benzenesulphonyl chloride, C₆H₅SO₂Cl) distinguish between primary, secondary, and tertiary amines?",
        "modelAnswer": "(a) Gabriel phthalimide synthesis involves S_N2 nucleophilic attack of phthalimide anion on an alkyl halide. Aryl halides (like chlorobenzene) do NOT undergo nucleophilic substitution easily due to partial double-bond character of C–X bond, so aniline cannot be prepared.\n(b) With C₆H₅SO₂Cl:\n• 1° Amine forms N-alkylbenzenesulphonamide which dissolves in aq. KOH (has acidic N–H proton).\n• 2° Amine forms N,N-dialkylbenzenesulphonamide which is INSOLUBLE in aq. KOH (no acidic N–H).\n• 3° Amine does NOT react at all.",
        "stepMarking": [
          {
            "step": "(a) Aryl halides resist SN2 attack by phthalimide ion",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Hinsberg observations for 1°, 2°, 3° amines",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Note: Hinsberg reagent distinguishes amines by presence of acidic H on sulphonamide nitrogen!",
        "commonPitfall": "Thinking 2° amine product dissolves in KOH."
      },
      {
        "id": "model-c12-chem-2022-aps-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Alcohols, Phenols & Ethers: Acid-Catalysed Hydration & Phenol Acidity",
        "questionText": "Arrange the following in increasing order of acidic strength and justify: Propan-1-ol, Phenol, 4-Nitrophenol, 4-Methylphenol (p-cresol).",
        "modelAnswer": "Increasing acidic strength: Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol.\nJustification:\n• Phenols are vastly more acidic than aliphatic alcohols because phenoxide ion is resonance-stabilised.\n• In 4-nitrophenol, the strongly electron-withdrawing -NO₂ group (-R and -I) disperses negative charge on phenoxide oxygen, increasing acidity.\n• In 4-methylphenol, electron-donating -CH₃ (+I and hyperconjugation) intensifies negative charge, destabilising phenoxide ion and decreasing acidity.",
        "stepMarking": [
          {
            "step": "Correct sequence Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol",
            "marks": "1 Mark"
          },
          {
            "step": "Resonance stabilisation of phenoxide + -NO₂ vs -CH₃ effects",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Remember: EWG (-NO₂) increases phenol acidity; EDG (-CH₃, -OCH₃) decreases phenol acidity.",
        "commonPitfall": "Placing 4-methylphenol above phenol."
      },
      {
        "id": "model-c12-chem-2022-aps-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Solutions: Freezing Point Depression Numerical (with Van't Hoff Factor)",
        "questionText": "Calculate the freezing point of a solution containing 60 g of glucose (Molar mass = 180 g/mol) in 250 g of water (K_f for water = 1.86 K kg mol⁻¹). How would the result change if 0.33 mol of NaCl were used instead?",
        "modelAnswer": "Moles of glucose = 60 / 180 = 1/3 mol.\nMass of solvent = 250 g = 0.25 kg.\nMolality m = (1/3) / 0.25 = 4/3 ≈ 1.333 mol/kg.\nΔT_f = K_f · m = 1.86 × (4/3) = 2.48 K.\nFreezing point = 273.15 - 2.48 = 270.67 K (or -2.48°C).\nWith 0.33 mol NaCl (i ≈ 2), moles of ions double => ΔT_f ≈ 4.96 K -> freezing point drops twice as much (-4.96°C).",
        "stepMarking": [
          {
            "step": "Molality m = 1.333 mol/kg",
            "marks": "1 Mark"
          },
          {
            "step": "ΔT_f = 2.48 K -> T_f = -2.48°C (270.67 K)",
            "marks": "1 Mark"
          },
          {
            "step": "NaCl i=2 doubles depression",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Never forget to convert solvent mass from grams to kg in molality!",
        "commonPitfall": "Taking 2.48°C instead of -2.48°C as final freezing point!"
      },
      {
        "id": "model-c12-chem-2022-aps-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Electrochemistry: Nernst Equation Cell EMF Numerical at 298 K",
        "questionText": "Calculate the EMF of the cell at 298 K:\nMg(s) | Mg²⁺ (0.001 M) || Cu²⁺ (0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.36 V, E°(Cu²⁺/Cu) = +0.34 V. (Use 0.059/2 ≈ 0.0295)",
        "modelAnswer": "Cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s) (n = 2 electrons).\nE°_cell = E°_cathode - E°_anode = 0.34 - (-2.36) = +2.70 V.\nNernst Equation at 298 K:\nE_cell = E°_cell - (0.059 / 2) log₁₀([Mg²⁺] / [Cu²⁺])\n= 2.70 - 0.0295 log₁₀(10⁻³ / 10⁻⁴) = 2.70 - 0.0295 log₁₀(10)\n= 2.70 - 0.0295 = 2.6705 V.",
        "stepMarking": [
          {
            "step": "E°_cell = 2.70 V & n = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Nernst setup [Mg²⁺]/[Cu²⁺] = 10",
            "marks": "1 Mark"
          },
          {
            "step": "E_cell = 2.67 V",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Put Anode product concentration [Mg²⁺] in numerator and Cathode reactant [Cu²⁺] in denominator!",
        "commonPitfall": "Inverting ratio as [Cu²⁺]/[Mg²⁺] or taking n = 1."
      },
      {
        "id": "model-c12-chem-2022-aps-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Chemical Kinetics: Arrhenius Activation Energy Numerical",
        "questionText": "The rate of a reaction doubles when the temperature increases from 298 K to 308 K. Calculate the activation energy E_a of the reaction. (R = 8.314 J/mol·K, log 2 = 0.3010)",
        "modelAnswer": "Using Arrhenius two-temperature equation:\nlog₁₀(k₂ / k₁) = [E_a / (2.303 R)] × [ (T₂ - T₁) / (T₁ T₂) ]\nlog₁₀(2) = [E_a / (2.303 × 8.314)] × [ 10 / (298 × 308) ]\n0.3010 = (E_a / 19.147) × (10 / 91784)\nE_a = (0.3010 × 19.147 × 91784) / 10 ≈ 52,898 J/mol = 52.9 kJ/mol.",
        "stepMarking": [
          {
            "step": "Arrhenius formula with k₂/k₁ = 2",
            "marks": "1 Mark"
          },
          {
            "step": "Substitute T₁=298 K, T₂=308 K",
            "marks": "1 Mark"
          },
          {
            "step": "E_a ≈ 52.9 kJ/mol",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Write E_a in both J/mol and kJ/mol cleanly.",
        "commonPitfall": "Using Celsius 25 and 35 instead of Kelvin 298 and 308."
      },
      {
        "id": "model-c12-chem-2022-aps-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Coordination Compounds: CFT Splitting & Geometry of [Ni(CN)₄]²⁻ vs [NiCl₄]²⁻",
        "questionText": "Using Valence Bond Theory, explain why [Ni(CN)₄]²⁻ is square planar and diamagnetic whereas [NiCl₄]²⁻ is tetrahedral and paramagnetic (Atomic number of Ni = 28).",
        "modelAnswer": "Ni²⁺ has 3d⁸ configuration (two unpaired e⁻ in 3d).\n1. In [Ni(CN)₄]²⁻, CN⁻ is a strong-field ligand causing pairing of the two unpaired 3d electrons, vacating one 3d orbital. Hybridisation is dsp² -> Square Planar geometry and diamagnetic (0 unpaired e⁻).\n2. In [NiCl₄]²⁻, Cl⁻ is a weak-field ligand unable to pair 3d electrons -> outer 4s and 4p orbitals hybridise (sp³) -> Tetrahedral geometry with 2 unpaired electrons (paramagnetic, μ ≈ 2.83 BM).",
        "stepMarking": [
          {
            "step": "Ni²⁺ 3d⁸ ground state",
            "marks": "0.5 Mark"
          },
          {
            "step": "[Ni(CN)₄]²⁻ pairing -> dsp², square planar, diamagnetic",
            "marks": "1.25 Marks"
          },
          {
            "step": "[NiCl₄]²⁻ no pairing -> sp³, tetrahedral, paramagnetic (2 unpaired e⁻)",
            "marks": "1.25 Marks"
          }
        ],
        "examinerTip": "Both have coordination number 4, making it the classic CN=4 VBT comparison!",
        "commonPitfall": "Assigning sp³d² instead of dsp² / sp³."
      },
      {
        "id": "model-c12-chem-2022-aps-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Haloalkanes: Conversions & Ambident Nucleophiles",
        "questionText": "(a) Explain why haloalkanes react with KCN to form alkyl cyanides as major products, whereas with AgCN they yield isocyanides.\n(b) Convert Propene to Propan-1-ol.",
        "modelAnswer": "(a) CN⁻ is an ambident nucleophile (can attack through C or N). KCN is predominantly ionic, leaving C-end free to form stronger C–C bond (alkyl cyanide R–CN). AgCN is largely covalent, so the lone pair on Nitrogen attacks R–X forming isocyanide (R–NC).\n(b) Propene + HBr (with peroxide) → 1-Bromopropane --(aq. KOH)--> Propan-1-ol (or Hydroboration-Oxidation directly with B₂H₆ followed by H₂O₂/OH⁻).",
        "stepMarking": [
          {
            "step": "(a) Ionic KCN (R-CN) vs covalent AgCN (R-NC) ambident logic",
            "marks": "2 Marks"
          },
          {
            "step": "(b) Hydroboration-oxidation or peroxide-HBr + aq. KOH",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Same ambident distinction applies to KNO₂ (R-ONO) vs AgNO₂ (R-NO₂)!",
        "commonPitfall": "Saying KCN is covalent and AgCN is ionic."
      },
      {
        "id": "model-c12-chem-2022-aps-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Biomolecules – Carbohydrates & Glucose Structure",
        "questionText": "Read the case and answer:\nGlucose is an aldohexose that exists primarily in two cyclic hemiacetal forms (α-D-glucose and β-D-glucose) differing only in configuration around C-1 carbon. Despite having an aldehyde group, glucose does not give Schiff's test or react with NaHSO₃.\n\n(a) What name is given to the cyclic pair α-D-glucose and β-D-glucose? (1M)\n(b) Name the reaction and product when glucose is treated with (i) Bromine water, and (ii) Conc. HNO₃. (2M)\n(c) Why are sucrose and starch classified differently with respect to Fehling's reducing test? (1M)",
        "modelAnswer": "(a) Anomers (differing only at C-1 anomeric carbon).\n(b) (i) Bromine water (mild oxidant) oxidises -CHO group only -> Gluconic acid.\n(ii) Conc. HNO₃ oxidises both -CHO and primary -CH₂OH -> Saccharic acid (dicarboxylic acid).\n(c) Sucrose has both glucose C-1 and fructose C-2 anomeric carbons locked in glycosidic linkage -> NON-reducing sugar (no free hemiacetal), whereas maltose/lactose are reducing sugars.",
        "stepMarking": [
          {
            "step": "(a) Anomers",
            "marks": "1 Mark"
          },
          {
            "step": "(b) Gluconic acid & Saccharic acid",
            "marks": "2 Marks"
          },
          {
            "step": "(c) Glycosidic bond locks reducing groups in sucrose",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Br₂ water -> Gluconic acid; Conc. HNO₃ -> Saccharic acid; HI + Δ -> n-Hexane.",
        "commonPitfall": "Confusing Gluconic acid with Saccharic acid."
      },
      {
        "id": "model-c12-chem-2022-aps-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Integrated Rate Law & Half-Life in Chemical Kinetics",
        "questionText": "Read the case and answer:\nFor a first-order decomposition reaction R → Products, the concentration of reactant drops from 0.8 M to 0.2 M in 40 minutes at 300 K. (Given log 2 = 0.3010)\n\n(a) Determine the half-life (t₁/₂) of this reaction. (1M)\n(b) Calculate the first-order rate constant k in min⁻¹. (1.5M)\n(c) What fraction of initial reactant will remain after 60 minutes from the start? (1.5M)",
        "modelAnswer": "(a) Concentration dropped from 0.8 M -> 0.4 M -> 0.2 M (2 half-lives in 40 minutes) => t₁/₂ = 40 / 2 = 20 minutes.\n(b) k = 0.693 / t₁/₂ = 0.693 / 20 = 0.03465 min⁻¹.\n(c) 60 minutes = 3 half-lives (60/20 = 3) => Remaining fraction = (1/2)³ = 1/8 = 0.125 (12.5%).",
        "stepMarking": [
          {
            "step": "(a) 2 half-lives = 40 min -> t₁/₂ = 20 min",
            "marks": "1 Mark"
          },
          {
            "step": "(b) k = 0.03465 min⁻¹",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) (1/2)³ = 1/8 = 12.5%",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "First-order half-life is strictly INDEPENDENT of initial concentration!",
        "commonPitfall": "Using zero-order t₁/₂ formula [R]₀/(2k)."
      },
      {
        "id": "model-c12-chem-2022-aps-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Aldehydes, Ketones & Carboxylic Acids: Named Reactions & Distinguishing Tests",
        "questionText": "(a) Write chemical equations for:\n  (i) Cross-Aldol or Self-Aldol condensation of Ethanal\n  (ii) HVZ (Hell-Volhard-Zelinsky) reaction of Propanoic acid\n  (iii) Rosenmund reduction of Benzoyl chloride.\n(b) Give simple chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Phenol and Benzoic acid.",
        "modelAnswer": "(a) (i) 2 CH₃CHO --(dil. NaOH)--> CH₃CH(OH)CH₂CHO (3-Hydroxybutanal) --(Heat)--> CH₃CH=CHCHO (But-2-enal) + H₂O.\n(ii) CH₃CH₂COOH --(Cl₂/Red P, H₂O)--> CH₃CH(Cl)COOH (2-Chloropropanoic acid).\n(iii) C₆H₅COCl + H₂ --(Pd-BaSO₄)--> C₆H₅CHO + HCl.\n(b) (i) Propanal gives silver mirror with Tollens' reagent (or red Cu₂O ppt with Fehling's); Propanone does NOT (conversely, Propanone gives yellow iodoform ppt with I₂/NaOH).\n(ii) Benzoic acid gives brisk effervescence of CO₂ with NaHCO₃ solution; Phenol does not (or Phenol gives violet colour with neutral FeCl₃).",
        "stepMarking": [
          {
            "step": "(a) Aldol, HVZ & Rosenmund equations",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Tollens/Fehling & NaHCO₃/FeCl₃ tests",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Both Tollens' and Fehling's distinguish aldehydes from ketones (Note: aromatic aldehydes like Benzaldehyde do NOT respond to Fehling's test!).",
        "commonPitfall": "Using Fehling's test to detect Benzaldehyde."
      },
      {
        "id": "model-c12-chem-2022-aps-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Electrochemistry: Kohlrausch Law Numerical & Corrosion / Batteries",
        "questionText": "(a) State Kohlrausch's law of independent migration of ions. Calculate Λ°_m for acetic acid (CH₃COOH) given:\n  Λ°_m(HCl) = 425.9 S cm² mol⁻¹, Λ°_m(NaCl) = 126.4 S cm² mol⁻¹, Λ°_m(CH₃COONa) = 91.0 S cm² mol⁻¹.\n(b) If conductivity of 0.00241 M acetic acid is 7.896 × 10⁻⁵ S cm⁻¹, calculate its molar conductivity Λ_m and degree of dissociation α (using Λ°_m = 390.5 S cm² mol⁻¹).",
        "modelAnswer": "(a) Kohlrausch Law: Limiting molar conductivity of an electrolyte equals the sum of individual limiting ionic conductivities of its cation and anion.\nΛ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 390.5 S cm² mol⁻¹.\n(b) Λ_m = (κ × 1000) / M = (7.896 × 10⁻⁵ × 1000) / 0.00241 = 0.07896 / 0.00241 = 32.76 S cm² mol⁻¹.\nDegree of dissociation α = Λ_m / Λ°_m = 32.76 / 390.5 ≈ 0.084 (8.4%).",
        "stepMarking": [
          {
            "step": "(a) Statement + 390.5 S cm² mol⁻¹ calculation",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Λ_m = 32.76 & α = 0.084",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Check units carefully: κ in S/cm uses factor 1000 in (κ × 1000)/M.",
        "commonPitfall": "Subtracting NaCl twice or omitting factor 1000."
      },
      {
        "id": "model-c12-chem-2022-aps-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "d- and f-Block Elements: KMnO₄ / K₂Cr₂O₇ Oxidising Reactions & Transition Trends",
        "questionText": "(a) Write balanced ionic equations for the oxidising action of acidified potassium permanganate (MnO₄⁻) on:\n  (i) Oxalate ion (C₂O₄²⁻)\n  (ii) Ferrous ion (Fe²⁺)\n  (iii) Iodide ion (I⁻) in neutral/faintly alkaline medium.\n(b) Account for the following:\n  (i) Transition metals form a large number of complex compounds and act as good catalysts.\n  (ii) Cu⁺ ion is unstable in aqueous solution and disproportionates.",
        "modelAnswer": "(a) (i) 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.\n(ii) MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.\n(iii) 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻ (iodate!).\n(b) (i) Complexes: small ionic size, high ionic charge, availability of vacant d-orbitals. Catalysis: ability to adopt variable oxidation states and provide surface area for adsorption.\n(ii) 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s). Although Cu⁺ has stable 3d¹⁰, the much higher negative hydration enthalpy (Δ_hyd H) of tiny doubly-charged Cu²⁺ more than compensates for the high second ionisation enthalpy of Cu.",
        "stepMarking": [
          {
            "step": "(a) All 3 balanced redox ionic equations (note IO₃⁻ in neutral/alkaline!)",
            "marks": "3 Marks"
          },
          {
            "step": "(b) Complex/catalyst reasons + high hydration enthalpy of Cu²⁺",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Watch out: MnO₄⁻ oxidises I⁻ to I₂ in ACIDIC medium, but to IO₃⁻ in NEUTRAL/FAINTLY ALKALINE medium!",
        "commonPitfall": "Writing I₂ instead of IO₃⁻ in neutral/alkaline medium."
      }
    ]
  }
];
