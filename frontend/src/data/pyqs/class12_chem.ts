import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_12_CHEM_PAPERS: PyqPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. CBSE CLASS 12 CHEMISTRY 2024 BOARD EXAM (COMPLETE FULL PAPER - SET 56/1/1)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cbse-c12-chem-2024-board',
    title: 'CBSE Class 12 Chemistry Board Exam 2024 (Complete Original Paper - Set 56/1/1)',
    subject: 'Chemistry',
    targetClass: 'Class 12',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '56/1/1',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    generalInstructions: [
      'This question paper contains 33 questions divided into 5 sections: Section A to Section E.',
      'Section A comprises 16 questions: 12 multiple choice and 4 assertion-reason type carrying 1 mark each.',
      'Section B comprises 5 short answer questions carrying 2 marks each (Q17 to Q21).',
      'Section C comprises 7 short answer questions carrying 3 marks each (Q22 to Q28).',
      'Section D comprises 2 case-based questions carrying 4 marks each (Q29 and Q30).',
      'Section E comprises 3 long answer questions carrying 5 marks each (Q31 to Q33).',
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      // ─── SECTION A: MCQS & ASSERTION-REASON (Q1 to Q16 - 1 Mark Each) ───
      {
        id: 'c12-chem-24-q01',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Solutions: Colligative Properties',
        questionText: 'Equimolar aqueous solutions of 0.1 M glucose, 0.1 M BaCl₂, and 0.1 M NaCl are prepared. The order of their boiling points is:',
        options: [
          'A) Glucose < NaCl < BaCl₂',
          'B) BaCl₂ < NaCl < Glucose',
          'C) NaCl < BaCl₂ < Glucose',
          'D) Glucose < BaCl₂ < NaCl'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Glucose < NaCl < BaCl₂.\nBoiling point elevation is given by ΔT_b = i · K_b · m.\nSince solvent and molality are identical, boiling point elevation depends directly on van \'t Hoff factor i:\n1) Glucose (non-electrolyte): i = 1 => effective concentration = 0.1 M\n2) NaCl (dissociates into Na⁺ + Cl⁻): i = 2 => effective concentration = 0.2 M\n3) BaCl₂ (dissociates into Ba²⁺ + 2Cl⁻): i = 3 => effective concentration = 0.3 M\nHigher boiling point elevation means higher boiling point (T_b = T_b° + ΔT_b).\nOrder: Glucose < NaCl < BaCl₂.',
        stepMarking: [
          { step: 'Identification of van \'t Hoff factors: i=1 (glucose), i=2 (NaCl), i=3 (BaCl₂)', marks: '1/2 Mark' },
          { step: 'Deduction of boiling point order: Glucose < NaCl < BaCl₂ (Option A)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Boiling point elevation INCREASES boiling point. For freezing point, depression causes the exact opposite order: BaCl₂ has the lowest freezing point!',
        commonPitfall: 'Confusing boiling point elevation with freezing point depression.'
      },
      {
        id: 'c12-chem-24-q02',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Electrochemistry: Kohlrausch’s Law',
        questionText: 'According to Kohlrausch\'s law of independent migration of ions, the limiting molar conductivity of acetic acid (CH₃COOH) can be obtained from:',
        options: [
          'A) Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl)',
          'B) Λ°_m(CH₃COONa) + Λ°_m(NaCl) - Λ°_m(HCl)',
          'C) Λ°_m(HCl) + Λ°_m(NaCl) - Λ°_m(CH₃COONa)',
          'D) Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) - Λ°_m(HCl)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl).\nBy Kohlrausch\'s Law:\nΛ°_m(CH₃COOH) = λ°(CH₃COO⁻) + λ°(H⁺)\n= [ λ°(CH₃COO⁻) + λ°(Na⁺) ] + [ λ°(H⁺) + λ°(Cl⁻) ] - [ λ°(Na⁺) + λ°(Cl⁻) ]\n= Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl).',
        stepMarking: [
          { step: 'Application of Kohlrausch\'s Law showing cancellation of Na⁺ and Cl⁻ ions (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Weak electrolytes like acetic acid do not dissociate completely at finite dilution, so Λ°_m cannot be obtained by direct extrapolation; it must be calculated using Kohlrausch\'s law.',
        commonPitfall: 'Adding NaCl and subtracting HCl in Option B.'
      },
      {
        id: 'c12-chem-24-q03',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Chemical Kinetics: Order of Reaction',
        questionText: 'For a chemical reaction, the half-life period t_(1/2) is found to be independent of the initial concentration of the reactant. The order of the reaction is:',
        options: [
          'A) Zero order',
          'B) First order',
          'C) Second order',
          'D) Fractional order'
        ],
        correctOption: 'B',
        modelAnswer: 'B) First order.\nGeneral formula for half-life: t_(1/2) ∝ 1 / [A]₀^(n - 1).\n- For zero order (n = 0): t_(1/2) = [A]₀ / (2k) ∝ [A]₀ (directly proportional)\n- For first order (n = 1): t_(1/2) = 0.693 / k (independent of [A]₀)\n- For second order (n = 2): t_(1/2) = 1 / (k [A]₀) ∝ 1/[A]₀\nTherefore, the reaction is of First Order.',
        stepMarking: [
          { step: 'Relation t_(1/2) = 0.693 / k showing independence from [A]₀ => First order (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'If doubling initial concentration doubles the half-life, it is Zero order. If doubling initial concentration has no effect on half-life, it is First order.',
        commonPitfall: 'Confusing zero order (rate independent of concentration) with first order (half-life independent of concentration).'
      },
      {
        id: 'c12-chem-24-q04',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'd and f Block Elements: Electronic Configuration',
        questionText: 'The ground state electronic configuration of Chromium (Z = 24) is [Ar] 3d⁵ 4s¹ instead of [Ar] 3d⁴ 4s². This anomalous stability is due to:',
        options: [
          'A) Higher exchange energy and symmetrical distribution of half-filled d-orbitals',
          'B) Smaller size of Chromium atom',
          'C) Lower shielding effect of 4s electrons',
          'D) High electropositivity of Chromium'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Higher exchange energy and symmetrical distribution of half-filled d-orbitals.\nThe half-filled 3d⁵ configuration possesses maximum exchange energy among parallel spin electrons and a symmetrical spatial distribution of electron charge density, leading to extra thermodynamic stability.',
        stepMarking: [
          { step: 'Correct Option A citing half-filled symmetry and high exchange energy', marks: '1 Mark' }
        ],
        examinerTip: 'Both Chromium (3d⁵ 4s¹) and Copper (3d¹⁰ 4s¹) exhibit anomalous configurations due to extra stability of exactly half-filled and completely filled d-subshells.',
        commonPitfall: 'Attributing the stability to atomic size or electronegativity.'
      },
      {
        id: 'c12-chem-24-q05',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Coordination Compounds: Colour Origin',
        questionText: 'Which of the following coordination complex ions is colourless in aqueous solution?',
        options: [
          'A) [Ti(H₂O)₆]³⁺',
          'B) [Cu(H₂O)₆]²⁺',
          'C) [Sc(H₂O)₆]³⁺',
          'D) [Fe(H₂O)₆]³⁺'
        ],
        correctOption: 'C',
        modelAnswer: 'C) [Sc(H₂O)₆]³⁺.\nColour in transition metal complexes arises from d-d electron transitions.\nIn [Sc(H₂O)₆]³⁺, Scandium is in the +3 oxidation state: Sc³⁺ has electronic configuration [Ar] 3d⁰.\nSince there are NO electrons in the 3d subshell (d⁰), d-d transitions cannot take place. Hence, [Sc(H₂O)₆]³⁺ is completely colourless.',
        stepMarking: [
          { step: 'Electronic configuration of Sc³⁺ is [Ar] 3d⁰ (empty d-subshell)', marks: '1/2 Mark' },
          { step: 'Absence of d-d transition renders complex colourless (Option C)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Both d⁰ (e.g., Sc³⁺, Ti⁴⁺) and d¹⁰ (e.g., Zn²⁺, Cu⁺) transition metal ions are colourless and diamagnetic because d-d transitions are impossible.',
        commonPitfall: 'Choosing Ti³⁺ (which has 3d¹ and is purple/violet in colour).'
      },
      {
        id: 'c12-chem-24-q06',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Haloalkanes and Haloarenes: Chirality',
        questionText: 'Which of the following compounds exhibits optical isomerism (chirality)?',
        options: [
          'A) 1-Chlorobutane',
          'B) 2-Chlorobutane',
          'C) 2-Chloropropane',
          'D) 1-Chloropropane'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 2-Chlorobutane.\nAn optically active compound must contain an asymmetric (chiral) carbon atom bonded to four different groups.\nIn 2-Chlorobutane: CH₃-C*H(Cl)-CH₂-CH₃\nThe C-2 carbon is bonded to:\n1) -H\n2) -Cl\n3) -CH₃ (methyl)\n4) -CH₂CH₃ (ethyl)\nAll four substituents are different, so C-2 is chiral, making 2-chlorobutane optically active.',
        stepMarking: [
          { step: 'Identification of 4 distinct groups on C-2 of 2-chlorobutane => Chiral (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'In 2-chloropropane (CH₃-CH(Cl)-CH₃), the central carbon is attached to TWO identical methyl groups, so it is achiral.',
        commonPitfall: 'Selecting 2-chloropropane without checking for duplicate methyl groups.'
      },
      {
        id: 'c12-chem-24-q07',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Alcohols, Phenols and Ethers: Lucas Test',
        questionText: 'When treated with Lucas reagent (anhydrous ZnCl₂ + concentrated HCl), an alcohol gives immediate turbidity at room temperature. The alcohol is:',
        options: [
          'A) 1° Alcohol',
          'B) 2° Alcohol',
          'C) 3° Alcohol',
          'D) Methanol'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 3° Alcohol.\nLucas test distinguishes between primary, secondary, and tertiary alcohols based on carbocation stability:\n- 3° Alcohols form highly stable 3° carbocations and react instantaneously, giving immediate turbidity.\n- 2° Alcohols produce turbidity in about 5 minutes.\n- 1° Alcohols produce no turbidity at room temperature (only upon prolonged heating).',
        stepMarking: [
          { step: 'Correct Option C (3° Alcohol) due to rapid formation of stable 3° carbocation', marks: '1 Mark' }
        ],
        examinerTip: 'Order of reactivity of alcohols with Lucas reagent: 3° > 2° > 1° > Methanol (follows carbocation stability).',
        commonPitfall: 'Writing 1° alcohol by confusing alcohol reactivity with acid strength.'
      },
      {
        id: 'c12-chem-24-q08',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Aldehydes and Ketones: Cannizzaro Reaction',
        questionText: 'Which of the following compounds undergoes the Cannizzaro reaction upon heating with concentrated NaOH solution?',
        options: [
          'A) Acetaldehyde (CH₃CHO)',
          'B) Benzaldehyde (C₆H₅CHO)',
          'C) Acetone (CH₃COCH₃)',
          'D) Propionaldehyde (CH₃CH₂CHO)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Benzaldehyde (C₆H₅CHO).\nCannizzaro reaction is a disproportionation reaction undergone exclusively by aldehydes that DO NOT possess any α-hydrogen atoms.\nBenzaldehyde (C₆H₅CHO) has no α-hydrogens on the carbonyl carbon.\nWhen treated with 50% NaOH, one molecule is reduced to benzyl alcohol and another is oxidized to sodium benzoate:\n2 C₆H₅CHO + NaOH -> C₆H₅CH₂OH + C₆H₅COONa.\nAcetaldehyde and propionaldehyde have α-hydrogens and undergo Aldol condensation instead.',
        stepMarking: [
          { step: 'Criterion of absence of α-hydrogen and identification of Benzaldehyde (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Formaldehyde (HCHO) and Benzaldehyde (C₆H₅CHO) are the classic textbook examples of aldehydes undergoing Cannizzaro reaction.',
        commonPitfall: 'Selecting acetaldehyde, which has 3 α-hydrogens and gives aldol.'
      },
      {
        id: 'c12-chem-24-q09',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Amines: Carbylamine Test',
        questionText: 'The carbylamine test is used to detect the presence of:',
        options: [
          'A) Primary amines only (aliphatic and aromatic)',
          'B) Secondary amines only',
          'C) Tertiary amines only',
          'D) Both primary and secondary amines'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Primary amines only (aliphatic and aromatic).\nWhen heated with chloroform (CHCl₃) and alcoholic KOH, only 1° aliphatic and aromatic amines form foul-smelling isocyanides (carbylamines):\nR-NH₂ + CHCl₃ + 3 KOH (alc.) --Δ-> R-NC (carbylamine) + 3 KCl + 3 H₂O.\nSecondary and tertiary amines do not show this reaction.',
        stepMarking: [
          { step: 'Correct Option A (Primary amines only) with reaction equation forming isocyanide', marks: '1 Mark' }
        ],
        examinerTip: 'The foul smell of isocyanides (R-NC) serves as a diagnostic confirmation test for primary amines in laboratory qualitative analysis.',
        commonPitfall: 'Thinking that secondary amines also respond to carbylamine test.'
      },
      {
        id: 'c12-chem-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Biomolecules: Vitamins',
        questionText: 'Deficiency of Vitamin C (Ascorbic Acid) in human diet leads to the disease known as:',
        options: [
          'A) Night blindness',
          'B) Beri-beri',
          'C) Rickets',
          'D) Scurvy'
        ],
        correctOption: 'D',
        modelAnswer: 'D) Scurvy.\n- Vitamin C (Ascorbic acid) deficiency causes Scurvy (bleeding gums).\n- Vitamin A deficiency causes Night blindness.\n- Vitamin B₁ (Thiamine) deficiency causes Beri-beri.\n- Vitamin D deficiency causes Rickets.',
        stepMarking: [
          { step: 'Correct Option D (Scurvy)', marks: '1 Mark' }
        ],
        examinerTip: 'Vitamin C is water-soluble and easily excreted in urine, so it cannot be stored in the body and must be regularly supplied in citrus diet.',
        commonPitfall: 'Confusing Scurvy with Rickets.'
      },
      {
        id: 'c12-chem-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Coordination Compounds: Spin-Only Magnetic Moment',
        questionText: 'The spin-only magnetic moment of [Fe(H₂O)₆]²⁺ complex ion is approximately:',
        options: [
          'A) 1.73 BM',
          'B) 2.83 BM',
          'C) 4.90 BM',
          'D) 5.92 BM'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 4.90 BM.\nIn [Fe(H₂O)₆]²⁺, Iron is in +2 oxidation state: Fe²⁺ has electronic configuration [Ar] 3d⁶.\nH₂O is a weak field ligand, so pairing does not occur in octahedral field (high spin complex):\nConfiguration: t_2g⁴ e_g².\nNumber of unpaired electrons n = 4.\nSpin-only magnetic moment formula: μ = √[ n (n + 2) ] BM\nμ = √[ 4 × (4 + 2) ] = √24 ≈ 4.90 BM.',
        stepMarking: [
          { step: 'Fe²⁺ (3d⁶) with weak field ligand H₂O has n = 4 unpaired electrons', marks: '1/2 Mark' },
          { step: 'Evaluation: μ = √24 = 4.90 BM (Option C)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Shortcut: A complex with n unpaired electrons always has a magnetic moment of n.xx BM (e.g., 4 unpaired electrons => 4.90 BM, 5 unpaired => 5.92 BM).',
        commonPitfall: 'Treating H₂O as a strong field ligand and pairing electrons to n = 0.'
      },
      {
        id: 'c12-chem-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Biomolecules: Denaturation of Proteins',
        questionText: 'During the denaturation of proteins upon heating or chemical treatment, which of the following structures remains intact and unaffected?',
        options: [
          'A) Primary structure',
          'B) Secondary structure',
          'C) Tertiary structure',
          'D) Quaternary structure'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Primary structure.\nDenaturation disrupts the weak non-covalent interactions (hydrogen bonds, disulfide linkages, van der Waals forces, ionic interactions), causing secondary, tertiary, and quaternary structures to unfold and coagulate.\nHowever, covalent peptide bonds (-CO-NH-) linking the amino acid sequence remain intact. Thus, the PRIMARY structure is completely unaffected.',
        stepMarking: [
          { step: 'Correct Option A (Primary structure remains intact because peptide bonds are not broken)', marks: '1 Mark' }
        ],
        examinerTip: 'A common textbook example of protein denaturation is the coagulation of egg white (albumin) on boiling.',
        commonPitfall: 'Assuming all levels of protein structure are destroyed.'
      },
      {
        id: 'c12-chem-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Solutions: Azeotropes (Assertion-Reason)',
        questionText: 'Assertion (A): Non-ideal solutions showing large positive deviations from Raoult\'s law form minimum boiling azeotropes at a specific composition.\nReason (R): For solutions with positive deviation, the intermolecular forces between solute-solvent molecules are stronger than those between pure components.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (A) is true but (R) is false.\nAssertion (A) is true: Solutions showing positive deviation (higher vapour pressure) boil at a lower temperature than either component, forming minimum boiling azeotropes (e.g., 95% ethanol in water).\nReason (R) is false: For positive deviations, A-B interactions are WEAKER than A-A and B-B interactions, allowing molecules to escape more easily into the vapour phase, which raises total vapour pressure.',
        stepMarking: [
          { step: 'Assertion is True (minimum boiling azeotrope formed)', marks: '1/2 Mark' },
          { step: 'Reason is False (A-B interactions are weaker, not stronger) => Option C', marks: '1/2 Mark' }
        ],
        examinerTip: 'Positive deviation: A-B is weaker -> higher vapour pressure -> lower boiling point -> minimum boiling azeotrope. Negative deviation: A-B is stronger -> lower vapour pressure -> higher boiling point -> maximum boiling azeotrope.',
        commonPitfall: 'Confusing positive deviation intermolecular strength with negative deviation.'
      },
      {
        id: 'c12-chem-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Chemical Kinetics: Order vs Molecularity (Assertion-Reason)',
        questionText: 'Assertion (A): The order of a chemical reaction can be zero or a fraction.\nReason (R): Molecularity of an elementary reaction cannot be zero or fractional; it must be an integer.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).\nAssertion (A) is true: Order is an experimentally determined quantity and can be zero, fractional, or negative.\nReason (R) is true: Molecularity represents the actual count of reactant molecules colliding simultaneously in an elementary reaction step, so it can only be a positive whole number (1, 2, or 3). However, (R) is a statement about collision count, not the direct cause of why order can be fractional (order depends on rate-determining mechanism).',
        stepMarking: [
          { step: 'Both statements are scientifically correct, but (R) does not explain (A) => Option B', marks: '1 Mark' }
        ],
        examinerTip: 'Molecularity greater than 3 is extremely rare because the probability of more than three molecules colliding simultaneously in proper orientation is practically negligible.',
        commonPitfall: 'Selecting Option A without testing whether R provides the causal derivation for A.'
      },
      {
        id: 'c12-chem-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Alcohols and Phenols: Acidity (Assertion-Reason)',
        questionText: 'Assertion (A): Phenol is significantly more acidic than ethanol.\nReason (R): The phenoxide ion formed by loss of a proton is stabilized by resonance over the benzene ring, whereas the ethoxide ion has no resonance stabilization.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nWhen phenol donates H⁺, the phenoxide ion (C₆H₅O⁻) delocalizes its negative charge into the aromatic ring across ortho and para positions through 5 resonating structures, stabilizing the conjugate base.\nIn contrast, the ethoxide ion (CH₃CH₂O⁻) cannot delocalize its negative charge, and the +I electron-donating effect of the ethyl group further destabilizes the anion. Hence, phenol is much more acidic (pK_a ≈ 10) than ethanol (pK_a ≈ 16).',
        stepMarking: [
          { step: 'Correct Option A with reference to resonance stabilization of phenoxide ion', marks: '1 Mark' }
        ],
        examinerTip: 'Electron-withdrawing groups (e.g., -NO₂) at ortho and para positions increase the acidity of phenol even further (e.g., 2,4,6-trinitrophenol / Picric acid).',
        commonPitfall: 'Stating that phenol itself has resonance without mentioning phenoxide ion stability.'
      },
      {
        id: 'c12-chem-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Amines: Friedel-Crafts Reaction (Assertion-Reason)',
        questionText: 'Assertion (A): Aniline does not undergo Friedel-Crafts alkylation or acylation reactions.\nReason (R): Aniline forms an acid-base adduct/salt with the anhydrous AlCl₃ catalyst (Lewis acid), which imparts a strong deactivating positive charge to the nitrogen atom.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nAniline is a Lewis base due to the lone pair of electrons on its nitrogen atom. In the presence of anhydrous AlCl₃ (a Lewis acid catalyst used in Friedel-Crafts reactions), aniline coordinates with AlCl₃ to form a complex salt: C₆H₅-NH₂⁺-AlCl₃⁻.\nThe positive charge on nitrogen exerts a strong -I electron-withdrawing effect, intensely deactivating the benzene ring toward electrophilic aromatic substitution, completely preventing Friedel-Crafts reaction.',
        stepMarking: [
          { step: 'Correct Option A citing Lewis base-acid salt formation with AlCl₃ catalyst', marks: '1 Mark' }
        ],
        examinerTip: 'To perform acylation/alkylation on aniline, the amino group must first be protected by acetylation with acetic anhydride to form acetanilide.',
        commonPitfall: 'Believing that -NH₂ is an activating group so it must undergo Friedel-Crafts readily.'
      },

      // ─── SECTION B: SHORT ANSWER QUESTIONS (Q17 to Q21 - 2 Marks Each) ───
      {
        id: 'c12-chem-24-q17',
        qNum: 17,
        section: 'B',
        marks: 2,
        topic: 'Electrochemistry: Nernst Equation EMF Calculation',
        questionText: 'Calculate the EMF of the following galvanic cell at 298 K:\nMg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s)\nGiven: E°(Mg²⁺/Mg) = -2.36 V, E°(Cu²⁺/Cu) = +0.34 V.',
        modelAnswer: '1) Cell Reaction:\nMg(s) + Cu²⁺(aq) -> Mg²⁺(aq) + Cu(s) [Electrons transferred n = 2]\n\n2) Standard Cell Potential:\nE°_cell = E°_cathode - E°_anode = E°(Cu²⁺/Cu) - E°(Mg²⁺/Mg)\nE°_cell = +0.34 V - (-2.36 V) = +2.70 V\n\n3) Nernst Equation at 298 K:\nE_cell = E°_cell - (0.0591 / n) · log₁₀([Mg²⁺] / [Cu²⁺])\nE_cell = 2.70 - (0.0591 / 2) · log₁₀(10⁻³ / 10⁻⁴)\nE_cell = 2.70 - 0.02955 · log₁₀(10) = 2.70 - 0.02955 = +2.670 V (or 2.67 V).',
        stepMarking: [
          { step: 'Standard cell potential E°_cell = 0.34 - (-2.36) = 2.70 V', marks: '1/2 Mark' },
          { step: 'Nernst equation formula with n = 2 and log ratio log(10) = 1', marks: '1 Mark' },
          { step: 'Final cell EMF = 2.67 V', marks: '1/2 Mark' }
        ],
        examinerTip: 'Always verify standard EMF: E°_cell must be POSITIVE for a spontaneous galvanic cell.',
        commonPitfall: 'Using 0.0591 without dividing by n = 2.'
      },
      {
        id: 'c12-chem-24-q18',
        qNum: 18,
        section: 'B',
        marks: 2,
        topic: 'Coordination Compounds: VBT Geometry and Magnetism',
        questionText: 'Using Valence Bond Theory (VBT), predict the hybridization, geometry, and magnetic nature of [Ni(CN)₄]²⁻ and [NiCl₄]²⁻. [Atomic number of Ni = 28].',
        modelAnswer: 'Ni has configuration [Ar] 3d⁸ 4s². In +2 oxidation state: Ni²⁺ = [Ar] 3d⁸ 4s⁰ 4p⁰.\n\n1) [Ni(CN)₄]²⁻:\n- CN⁻ is a strong field ligand, forcing pairing of two unpaired 3d electrons, leaving one empty 3d orbital.\n- Hybridization: dsp² (inner orbital complex)\n- Geometry: Square planar\n- Magnetic Behaviour: Diamagnetic (0 unpaired electrons).\n\n2) [NiCl₄]²⁻:\n- Cl⁻ is a weak field ligand, so no electron pairing occurs (3d⁸ retains 2 unpaired electrons).\n- Hybridization: sp³ (outer orbital complex)\n- Geometry: Tetrahedral\n- Magnetic Behaviour: Paramagnetic (2 unpaired electrons).',
        stepMarking: [
          { step: '[Ni(CN)₄]²⁻: dsp², Square planar, Diamagnetic', marks: '1 Mark' },
          { step: '[NiCl₄]²⁻: sp³, Tetrahedral, Paramagnetic', marks: '1 Mark' }
        ],
        examinerTip: 'Remember: CN⁻ is a strong field ligand that forces pairing; Cl⁻ is a weak field ligand that cannot force pairing.',
        commonPitfall: 'Assigning sp³ tetrahedral geometry to [Ni(CN)₄]²⁻.'
      },
      {
        id: 'c12-chem-24-q19',
        qNum: 19,
        section: 'B',
        marks: 2,
        topic: 'Aldehydes and Ketones: Carbonyl Reductions',
        questionText: 'Write the chemical equations for the following reduction reactions:\n(a) Clemmensen reduction of Propanone.\n(b) Wolff-Kishner reduction of Acetophenone.',
        modelAnswer: '(a) Clemmensen Reduction (uses Zinc amalgam and concentrated HCl):\nCH₃-CO-CH₃ + 4 [H] --Zn-Hg / conc. HCl, Δ-> CH₃-CH₂-CH₃ (Propane) + H₂O\nCarbonyl group (>C=O) is directly reduced to methylene group (>CH₂).\n\n(b) Wolff-Kishner Reduction (uses Hydrazine and KOH in ethylene glycol):\nC₆H₅-CO-CH₃ + NH₂-NH₂ -- -H₂O -> C₆H₅-C(=N-NH₂)-CH₃ (Hydrazone)\nC₆H₅-C(=N-NH₂)-CH₃ --KOH / ethylene glycol, Δ-> C₆H₅-CH₂-CH₃ (Ethylbenzene) + N₂↑.',
        stepMarking: [
          { step: 'Clemmensen equation: Propanone + Zn-Hg/HCl -> Propane', marks: '1 Mark' },
          { step: 'Wolff-Kishner equation: Acetophenone + NH₂NH₂ / KOH / glycol -> Ethylbenzene + N₂', marks: '1 Mark' }
        ],
        examinerTip: 'Clemmensen reduction is suitable for acid-stable compounds; Wolff-Kishner reduction is used for base-stable compounds.',
        commonPitfall: 'Writing alcohol instead of alkane. Both reactions reduce carbonyls directly to alkanes.'
      },
      {
        id: 'c12-chem-24-q20',
        qNum: 20,
        section: 'B',
        marks: 2,
        topic: 'Amines: Hofmann Bromamide Degradation',
        questionText: 'Write the chemical equation for the Hofmann bromamide degradation reaction. What is the key advantage of this reaction in organic synthesis?',
        modelAnswer: '1) Chemical Equation:\nWhen an acid amide is treated with bromine in an aqueous or ethanolic solution of sodium hydroxide, a primary amine containing ONE CARBON LESS is obtained:\nR-CO-NH₂ + Br₂ + 4 NaOH -> R-NH₂ (1° Amine) + Na₂CO₃ + 2 NaBr + 2 H₂O\nExample (Ethanamide to Methanamine):\nCH₃-CO-NH₂ + Br₂ + 4 NaOH -> CH₃-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O.\n\n2) Synthetic Advantage:\nIt is an essential "step-down" (descent of homologous series) reaction used to step down the carbon chain length by exactly one carbon atom in organic conversions.',
        stepMarking: [
          { step: 'Balanced chemical equation with Br₂ and 4 NaOH', marks: '1 Mark' },
          { step: 'Synthetic significance as a descent-of-series / step-down method', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the stoichiometry: exactly 4 moles of NaOH and 1 mole of Br₂ react per mole of amide.',
        commonPitfall: 'Omitting the byproduct Na₂CO₃ or writing an equal carbon amine.'
      },
      {
        id: 'c12-chem-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Biomolecules: DNA vs RNA',
        questionText: 'State any two structural and functional differences between DNA (Deoxyribonucleic Acid) and RNA (Ribonucleic Acid).',
        modelAnswer: '1) Structural Differences:\n- Sugar: DNA contains β-D-2-deoxyribose sugar (lacks oxygen at C-2), whereas RNA contains β-D-ribose sugar (has -OH at C-2).\n- Nitrogenous Bases: DNA contains Adenine, Guanine, Cytosine, and THYMINE; RNA contains Adenine, Guanine, Cytosine, and URACIL.\n- Conformation: DNA is double-stranded with complementary helical strands; RNA is typically single-stranded.\n\n2) Functional Difference:\n- DNA is the permanent repository of genetic information, highly chemically stable.\n- RNA acts primarily in protein synthesis and translation of genetic code, and is more reactive due to the 2\'-OH group.',
        stepMarking: [
          { step: 'Sugar and nitrogenous base differences (Deoxyribose vs Ribose; Thymine vs Uracil)', marks: '1 Mark' },
          { step: 'Strand architecture and functional difference (Double vs single strand; heredity vs translation)', marks: '1 Mark' }
        ],
        examinerTip: 'The absence of 2\'-OH in 2-deoxyribose makes DNA chemically far more resistant to alkaline hydrolysis, making it an ideal long-term genetic storage material.',
        commonPitfall: 'Swapping Thymine and Uracil.'
      },

      // ─── SECTION C: SHORT ANSWER QUESTIONS (Q22 to Q28 - 3 Marks Each) ───
      {
        id: 'c12-chem-24-q22',
        qNum: 22,
        section: 'C',
        marks: 3,
        topic: 'Chemical Kinetics: Arrhenius Equation Calculation',
        questionText: 'The rate constant of a chemical reaction doubles when the temperature increases from 300 K to 310 K. Calculate the activation energy (E_a) of the reaction. [Given: R = 8.314 J/(mol·K), log 2 = 0.3010].',
        modelAnswer: 'Arrhenius Equation in logarithmic form:\nlog₁₀(k₂ / k₁) = [ E_a / (2.303 · R) ] · [ (T₂ - T₁) / (T₁ · T₂) ]\nGiven: k₂ / k₁ = 2, T₁ = 300 K, T₂ = 310 K, R = 8.314 J/(mol·K)\n\nSubstitute the values:\nlog₁₀(2) = [ E_a / (2.303 × 8.314) ] · [ (310 - 300) / (300 × 310) ]\n0.3010 = [ E_a / 19.147 ] · [ 10 / 93000 ]\n0.3010 = [ E_a / 19.147 ] · (1 / 9300)\nE_a = 0.3010 × 19.147 × 9300\nE_a = 5.7632 × 9300 ≈ 53,598 J/mol = 53.60 kJ/mol.\nThe activation energy of the reaction is 53.6 kJ/mol.',
        stepMarking: [
          { step: 'Statement of Arrhenius equation log(k₂/k₁) = [E_a / 2.303R] · [(T₂ - T₁)/(T₁T₂)]', marks: '1 Mark' },
          { step: 'Correct substitution with log(2) = 0.3010 and temperatures 300 K and 310 K', marks: '1 Mark' },
          { step: 'Accurate computation yielding E_a = 53.6 kJ/mol', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure E_a is reported with proper units (kJ/mol). If writing in Joules, clearly specify J/mol.',
        commonPitfall: 'Temperature inversion: writing (300 - 310) leading to a negative activation energy, which is impossible.'
      },
      {
        id: 'c12-chem-24-q23',
        qNum: 23,
        section: 'C',
        marks: 3,
        topic: 'Solutions: Relative Lowering of Vapour Pressure',
        questionText: 'The vapour pressure of pure water at 298 K is 23.8 mm Hg. 50 g of urea (NH₂CONH₂) is dissolved in 850 g of water. Calculate the vapour pressure of water in this solution and its relative lowering.',
        modelAnswer: '1) Molar masses:\nMolar mass of Urea (NH₂CONH₂) = 14 + 2 + 12 + 16 + 14 + 2 = 60 g/mol\nMolar mass of Water (H₂O) = 18 g/mol\n\n2) Moles calculation:\nMoles of urea (solute, n₂): n₂ = 50 g / 60 g/mol = 0.833 mol\nMoles of water (solvent, n₁): n₁ = 850 g / 18 g/mol = 47.22 mol\nTotal moles = n₁ + n₂ = 47.22 + 0.833 = 48.05 mol\nMole fraction of urea: χ₂ = n₂ / (n₁ + n₂) = 0.833 / 48.05 = 0.0173\n\n3) Relative lowering of vapour pressure:\n(P₁° - P₁) / P₁° = χ₂ = 0.0173\n\n4) Vapour pressure of solution (P₁):\nP₁ = P₁° (1 - χ₂) = 23.8 mm Hg × (1 - 0.0173) = 23.8 × 0.9827 = 23.39 mm Hg.\nRelative Lowering = 0.0173 ; Vapour Pressure of solution = 23.39 mm Hg.',
        stepMarking: [
          { step: 'Calculation of moles: n_urea = 0.833 mol and n_water = 47.22 mol', marks: '1 Mark' },
          { step: 'Evaluation of relative lowering = mole fraction of solute = 0.0173', marks: '1 Mark' },
          { step: 'Calculation of vapour pressure of solution P₁ = 23.39 mm Hg', marks: '1 Mark' }
        ],
        examinerTip: 'Do not neglect n₂ in (n₁ + n₂) unless the solution is extremely dilute (<5%). Here n₂/n₁ ≈ 1.7%, so using n₁ + n₂ gives high precision.',
        commonPitfall: 'Dividing 50 g by 18 and 850 g by 60 (swapping solute and solvent molar masses).'
      },
      {
        id: 'c12-chem-24-q24',
        qNum: 24,
        section: 'C',
        marks: 3,
        topic: 'Electrochemistry: Lead Storage Battery Reactions',
        questionText: 'Write the chemical reactions taking place at the cathode and anode of a lead storage battery during discharging. What happens to the density of the sulphuric acid electrolyte during discharge?',
        modelAnswer: 'In a lead storage battery:\n- Anode: Lead (Pb) sponge plates\n- Cathode: Lead dioxide (PbO₂) grids\n- Electrolyte: 38% aqueous H₂SO₄ solution (density ~1.30 g/mL)\n\n1) Discharging Electrode Reactions:\n- At Anode (Oxidation):\n  Pb(s) + SO₄²⁻(aq) -> PbSO₄(s) + 2 e⁻\n- At Cathode (Reduction):\n  PbO₂(s) + SO₄²⁻(aq) + 4 H⁺(aq) + 2 e⁻ -> PbSO₄(s) + 2 H₂O(l)\n\n2) Overall Cell Reaction during Discharging:\nPb(s) + PbO₂(s) + 2 H₂SO₄(aq) -> 2 PbSO₄(s) + 2 H₂O(l)\n\n3) Effect on Electrolyte Density:\nDuring discharging, H₂SO₄ is consumed to form water (H₂O) and insoluble PbSO₄. Consequently, the concentration and density of H₂SO₄ decreases continuously from 1.30 g/mL to below 1.20 g/mL (indicating that the battery needs recharging).',
        stepMarking: [
          { step: 'Anode oxidation reaction: Pb + SO₄²⁻ -> PbSO₄ + 2e⁻', marks: '1 Mark' },
          { step: 'Cathode reduction reaction: PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ -> PbSO₄ + 2H₂O', marks: '1 Mark' },
          { step: 'Overall reaction and explanation that H₂SO₄ density decreases during discharge', marks: '1 Mark' }
        ],
        examinerTip: 'During charging, the reactions are reversed: PbSO₄ is converted back to Pb at cathode and PbO₂ at anode, restoring H₂SO₄ density.',
        commonPitfall: 'Confusing discharging reactions with charging reactions.'
      },
      {
        id: 'c12-chem-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'd and f Block Elements: Characteristics of Transition Metals',
        questionText: 'Account for the following characteristics of transition elements:\n(a) They exhibit variable oxidation states.\n(b) They act as effective catalysts in many chemical processes.\n(c) They form interstitial compounds.',
        modelAnswer: '(a) Variable Oxidation States:\nDue to the small energy difference between (n - 1)d and ns subshell electrons. Both 4s and 3d electrons can participate in bond formation, allowing transition elements to exhibit a wide range of oxidation states (e.g., Manganese from +2 to +7).\n\n(b) Catalytic Activity:\nAttributed to:\n1. Their ability to adopt multiple oxidation states to form unstable intermediate complexes with reactants.\n2. Availability of vacant d-orbitals to provide an active surface area for adsorption, weakening the bonds in reactant molecules and lowering activation energy.\n\n(c) Formation of Interstitial Compounds:\nTransition metals possess rigid crystal lattices with vacant interstitial voids. Small non-metal atoms (H, B, C, N) fit into these voids without changing the host lattice structure, resulting in compounds that are hard, have high melting points, and retain metallic conductivity.',
        stepMarking: [
          { step: '(a) Comparable energies of (n-1)d and ns electrons', marks: '1 Mark' },
          { step: '(b) Variable oxidation states and surface adsorption via vacant d-orbitals', marks: '1 Mark' },
          { step: '(c) Small atoms (H, C, N) trapping into interstitial crystal voids', marks: '1 Mark' }
        ],
        examinerTip: 'Interstitial compounds are non-stoichiometric (e.g., TiH₁.₇, Fe₀.₉₄O) and are neither purely ionic nor covalent.',
        commonPitfall: 'Writing generic answers like "they are metals" without mentioning d-orbital energy levels.'
      },
      {
        id: 'c12-chem-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Haloalkanes and Haloarenes: SN1 vs SN2 Mechanisms',
        questionText: 'Differentiate between S_N1 and S_N2 nucleophilic substitution mechanisms with respect to:\n(a) Kinetics / Order of reaction\n(b) Intermediate / Transition state formed\n(c) Stereochemical outcome of the product',
        modelAnswer: '(a) Kinetics & Order:\n- S_N1: Unimolecular (First order): Rate = k [R-X]. Rate depends solely on alkyl halide concentration.\n- S_N2: Bimolecular (Second order): Rate = k [R-X] [Nu⁻]. Rate depends on concentrations of both substrate and nucleophile.\n\n(b) Intermediate / Transition State:\n- S_N1: Proceeds via a two-step mechanism with formation of a planar carbocation intermediate (R⁺). Reactivity order: 3° > 2° > 1°.\n- S_N2: Proceeds via a single-step concerted mechanism involving a pentacoordinate transition state with simultaneous bond making and breaking. Reactivity order: 1° > 2° > 3° (steric hindrance).\n\n(c) Stereochemical Outcome:\n- S_N1: Nucleophile can attack the planar carbocation equally from front or back, producing Racemisation (50% retention, 50% inversion).\n- S_N2: Nucleophile attacks exclusively from the backside opposite to the leaving group, producing complete Inversion of Configuration (Walden Inversion).',
        stepMarking: [
          { step: '(a) First order vs second order rate laws', marks: '1 Mark' },
          { step: '(b) Carbocation intermediate vs pentacoordinated transition state', marks: '1 Mark' },
          { step: '(c) Racemisation vs complete Walden inversion', marks: '1 Mark' }
        ],
        examinerTip: 'Tertiary alkyl halides prefer S_N1 due to high carbocation stability; primary alkyl halides prefer S_N2 due to minimal steric hindrance.',
        commonPitfall: 'Saying S_N1 causes retention only; S_N1 results in racemisation.'
      },
      {
        id: 'c12-chem-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Alcohols, Phenols and Ethers: Named Reactions of Phenol',
        questionText: 'Write the chemical equations and conditions for the following named reactions of phenol:\n(a) Reimer-Tiemann reaction\n(b) Kolbe\'s reaction\n(c) Reaction with neutral FeCl₃ solution',
        modelAnswer: '(a) Reimer-Tiemann Reaction:\nWhen phenol is treated with chloroform (CHCl₃) in presence of aqueous NaOH at 340 K, followed by acid hydrolysis, Salicylaldehyde (2-hydroxybenzaldehyde) is formed:\nC₆H₅OH + CHCl₃ + 3 NaOH --340 K-> C₆H₄(OH)(CHO) [Salicylaldehyde] + 3 NaCl + 2 H₂O\nElectrophile involved: Dichlorocarbene (:CCl₂).\n\n(b) Kolbe\'s Reaction:\nWhen sodium phenoxide is heated with carbon dioxide (CO₂) at 400 K and 4-7 atm pressure, followed by acidification, Salicylic acid (2-hydroxybenzoic acid) is formed:\nC₆H₅ONa + CO₂ --400 K, 4-7 atm-> C₆H₄(OH)(COONa) --H⁺-> C₆H₄(OH)(COOH) [Salicylic Acid].\n\n(c) Reaction with Neutral FeCl₃:\nPhenol reacts with neutral ferric chloride solution to give a characteristic violet-coloured complex ion:\n6 C₆H₅OH + FeCl₃ -> [Fe(OC₆H₅)₆]³⁻ (Violet complex) + 3 H⁺ + 3 HCl.',
        stepMarking: [
          { step: 'Reimer-Tiemann equation forming salicylaldehyde with :CCl₂ electrophile', marks: '1 Mark' },
          { step: 'Kolbe reaction equation forming salicylic acid with CO₂', marks: '1 Mark' },
          { step: 'Neutral FeCl₃ test forming characteristic violet complex', marks: '1 Mark' }
        ],
        examinerTip: 'Salicylic acid from Kolbe\'s reaction is the starting raw material for synthesizing Aspirin (acetylsalicylic acid).',
        commonPitfall: 'Confusing Reimer-Tiemann (yields -CHO aldehyde) with Kolbe\'s (yields -COOH carboxylic acid).'
      },
      {
        id: 'c12-chem-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Aldehydes and Ketones: Aldol Condensation',
        questionText: 'Explain the mechanism of Aldol Condensation of ethanal (acetaldehyde) in the presence of dilute NaOH. Write the structures of the aldol and the final condensation product upon heating.',
        modelAnswer: '1) Step 1: Deprotonation by Base (Enolate Formation):\nThe base (OH⁻) removes an acidic α-hydrogen from one molecule of ethanal to form a resonance-stabilized enolate carbanion:\nCH₃-CHO + OH⁻ <=> [ :CH₂-CHO <-> CH₂=CH-O⁻ ] + H₂O\n\n2) Step 2: Nucleophilic Attack:\nThe carbanion attacks the electrophilic carbonyl carbon of a second ethanal molecule to form an alkoxide ion:\nCH₃-C(=O)H + :CH₂-CHO -> CH₃-CH(O⁻)-CH₂-CHO\n\n3) Step 3: Protonation (Aldol Formation):\nThe alkoxide abstracts a proton from water to yield 3-Hydroxybutanal (Aldol):\nCH₃-CH(O⁻)-CH₂-CHO + H₂O -> CH₃-CH(OH)-CH₂-CHO (Aldol) + OH⁻\n\n4) Step 4: Dehydration upon heating:\nOn heating with dilute acid or base, the aldol easily loses a molecule of water to yield an α,β-unsaturated aldehyde, But-2-enal (Crotonaldehyde):\nCH₃-CH(OH)-CH₂-CHO --Δ, -H₂O-> CH₃-CH=CH-CHO (But-2-enal).',
        stepMarking: [
          { step: 'Enolate carbanion formation by α-hydrogen deprotonation', marks: '1 Mark' },
          { step: 'Nucleophilic attack forming 3-hydroxybutanal (aldol)', marks: '1 Mark' },
          { step: 'Dehydration upon heating yielding but-2-enal', marks: '1 Mark' }
        ],
        examinerTip: 'Aldol condensation requires at least ONE α-hydrogen. If no α-hydrogens are present (e.g., benzaldehyde, formaldehyde), Cannizzaro reaction occurs instead.',
        commonPitfall: 'Drawing dehydration between wrong carbons; the double bond must be conjugated with the carbonyl group (α,β-unsaturated).'
      },

      // ─── SECTION D: CASE STUDY-BASED QUESTIONS (Q29 to Q30 - 4 Marks Each) ───
      {
        id: 'c12-chem-24-q29',
        qNum: 29,
        section: 'D',
        marks: 4,
        topic: 'Electrochemistry: Hydrogen-Oxygen Fuel Cell Case Study',
        questionText: 'Read the following passage and answer the questions:\nFuel cells are galvanic cells designed to convert the chemical energy of combustion of fuels like hydrogen, methane, and methanol directly into electrical energy. The most successful commercial fuel cell is the Hydrogen-Oxygen (H₂-O₂) fuel cell used in the Apollo space programme. In this cell, hydrogen and oxygen gases are bubbled through porous carbon electrodes impregnated with catalysts into a concentrated aqueous sodium hydroxide electrolyte.\n\n(i) Write the chemical reactions occurring at the anode and cathode of the H₂-O₂ fuel cell. (2 Marks)\n(ii) What is the overall cell reaction and standard EMF of this cell? (1 Mark)\n(iii) State two significant advantages of fuel cells over conventional thermal power generation plants. (1 Mark)',
        modelAnswer: '(i) Electrode Reactions:\n- Anode (Oxidation):\n  2 H₂(g) + 4 OH⁻(aq) -> 4 H₂O(l) + 4 e⁻\n- Cathode (Reduction):\n  O₂(g) + 2 H₂O(l) + 4 e⁻ -> 4 OH⁻(aq)\n\n(ii) Overall Reaction & EMF:\n2 H₂(g) + O₂(g) -> 2 H₂O(l)\nStandard cell potential: E°_cell = +1.23 V.\n\n(iii) Two Advantages of Fuel Cells:\n1. High Thermodynamic Efficiency: Fuel cells achieve 70-75% efficiency compared to thermal plants which operate at only ~40% Carnot cycle efficiency.\n2. Eco-Friendly / Zero Pollution: The only chemical byproduct is pure water (H₂O), which was condensed and used as drinking water by astronauts in the Apollo mission.',
        stepMarking: [
          { step: '(i) Anode reaction (2H₂ + 4OH⁻ -> 4H₂O + 4e⁻) and Cathode reaction (O₂ + 2H₂O + 4e⁻ -> 4OH⁻)', marks: '2 Marks' },
          { step: '(ii) Overall cell reaction 2H₂ + O₂ -> 2H₂O with E° = 1.23 V', marks: '1 Mark' },
          { step: '(iii) Two advantages: high efficiency (~70%) and zero pollution (pure water byproduct)', marks: '1 Mark' }
        ],
        examinerTip: 'Fuel cells run continuously as long as the reactants (H₂ and O₂) are continuously fed to the electrodes. They do not store charge like secondary batteries.',
        commonPitfall: 'Writing unbalanced electrode reactions without OH⁻ ions in basic medium.'
      },
      {
        id: 'c12-chem-24-q30',
        qNum: 30,
        section: 'D',
        marks: 4,
        topic: 'Coordination Compounds: Crystal Field Theory (CFT) Case Study',
        questionText: 'Read the following passage and answer the questions:\nAccording to Crystal Field Theory (CFT), the five degenerate d-orbitals of a free transition metal ion split into two sets in the presence of an electrostatic ligand field. In an octahedral crystal field, the d_x²-y² and d_z² orbitals point directly along the axes toward the approaching ligands and experience greater repulsion, rising in energy to form the e_g doublet (+0.6 Δ_o). The d_xy, d_yz, and d_zx orbitals point in between the axes and experience less repulsion, falling in energy to form the t_2g triplet (-0.4 Δ_o).\n\n(i) On the basis of CFT, write the electronic configuration of a d⁴ metal ion in an octahedral field when:\n    (a) Δ_o > P (Strong field ligand)\n    (b) Δ_o < P (Weak field ligand) (2 Marks)\n(ii) How is crystal field splitting energy in a tetrahedral complex (Δ_t) related to that in an octahedral complex (Δ_o)? Why do tetrahedral complexes rarely form low-spin configurations? (2 Marks)',
        modelAnswer: '(i) Electronic Configuration of d⁴ ion:\n(a) When Δ_o > P (Strong field ligand, low-spin complex):\nThe pairing energy P is smaller than crystal field splitting Δ_o. The fourth electron pairs up in the lower t_2g set rather than promoting to e_g:\nConfiguration: t_2g⁴ e_g⁰.\n\n(b) When Δ_o < P (Weak field ligand, high-spin complex):\nSplitting Δ_o is small, so pairing is energetically unfavourable. Electrons occupy all orbitals singly according to Hund\'s rule before pairing:\nConfiguration: t_2g³ e_g¹.\n\n(ii) Relation between Δ_t and Δ_o:\nΔ_t = ⁴⁄₉ Δ_o ≈ 0.44 Δ_o.\nTetrahedral complexes rarely form low spin because there are only 4 ligands (instead of 6) and none of the d-orbitals point directly at the ligands. Consequently, crystal field splitting Δ_t is always smaller than pairing energy (Δ_t < P). Thus, orbital pairing never occurs in tetrahedral geometry, making tetrahedral complexes almost exclusively high-spin.',
        stepMarking: [
          { step: '(i) Correct configurations: (a) t_2g⁴ e_g⁰ and (b) t_2g³ e_g¹', marks: '2 Marks' },
          { step: '(ii) Formula Δ_t = 4/9 Δ_o and explanation that Δ_t is too small to overcome pairing energy P', marks: '2 Marks' }
        ],
        examinerTip: 'Memory rule: Δ_o > P => Pair up (Low spin). Δ_o < P => Spread out (High spin).',
        commonPitfall: 'Writing Δ_t = 9/4 Δ_o instead of 4/9 Δ_o.'
      },

      // ─── SECTION E: LONG ANSWER QUESTIONS (Q31 to Q33 - 5 Marks Each) ───
      {
        id: 'c12-chem-24-q31',
        qNum: 31,
        section: 'E',
        marks: 5,
        topic: 'Chemical Kinetics: Integrated Rate Laws & Derivations',
        questionText: '(a) Derive the integrated rate expression for a first-order reaction R -> P. Show that the half-life period t_(1/2) is independent of initial concentration.\n(b) A first order reaction takes 30 minutes for 50% decomposition. Calculate the time required for 90% completion of this reaction. [Take log 10 = 1, log 2 = 0.3010].',
        modelAnswer: '(a) Derivation for First Order Reaction:\nFor reaction R -> Products:\nDifferential rate equation: - d[R]/dt = k [R]¹\nd[R] / [R] = - k dt\nIntegrating both sides:\n∫ d[R] / [R] = - k ∫ dt\nln [R] = - k t + I  --- (1)\n\nAt time t = 0, [R] = [R]₀ (initial concentration):\nln [R]₀ = - k(0) + I => I = ln [R]₀\nSubstitute I into equation (1):\nln [R] = - k t + ln [R]₀\nk t = ln [R]₀ - ln [R] = ln( [R]₀ / [R] )\nk = (1 / t) · ln( [R]₀ / [R] ) = (2.303 / t) · log₁₀( [R]₀ / [R] ).\n\nHalf-Life Period Derivation:\nAt t = t_(1/2), [R] = [R]₀ / 2\nk = (2.303 / t_(1/2)) · log₁₀( [R]₀ / ([R]₀ / 2) ) = (2.303 / t_(1/2)) · log₁₀(2)\nt_(1/2) = (2.303 × 0.3010) / k = 0.693 / k.\nSince [R]₀ does not appear in this equation, t_(1/2) is strictly independent of initial concentration.\n\n(b) Numerical Calculation for 90% Completion:\n1) Find k from t_(1/2) = 30 min:\nk = 0.693 / 30 min = 0.0231 min⁻¹ (or k = 2.303 log 2 / 30)\n2) For 90% completion:\nRemaining concentration [R] = [R]₀ - 0.90 [R]₀ = 0.10 [R]₀\nt_90% = (2.303 / k) · log₁₀( [R]₀ / 0.10 [R]₀ ) = (2.303 / k) · log₁₀(10) = 2.303 / k\nSubstitute k = (2.303 × log 2) / 30:\nt_90% = [ 2.303 × 30 ] / [ 2.303 × 0.3010 ] = 30 / 0.3010 ≈ 99.67 minutes.\nThe time required for 90% completion is approximately 99.67 minutes (or ~100 min).',
        stepMarking: [
          { step: '(a) Integration derivation leading to k = (2.303/t) log([R]₀/[R])', marks: '2 Marks' },
          { step: 'Deduction of t_(1/2) = 0.693/k showing concentration independence', marks: '1 Mark' },
          { step: '(b) Calculation of time for 90% completion yielding 99.67 min', marks: '2 Marks' }
        ],
        examinerTip: 'Shortcut: For a first order reaction, t_99.9% = 10 × t_(1/2), and t_90% = (1 / 0.3010) × t_(1/2) ≈ 3.32 × t_(1/2) = 3.32 × 30 = 99.6 min.',
        commonPitfall: 'Using remaining concentration [R] as 0.90 [R]₀ instead of 0.10 [R]₀ (90% completed means 10% remaining).'
      },
      {
        id: 'c12-chem-24-q32',
        qNum: 32,
        section: 'E',
        marks: 5,
        topic: 'Solutions: Raoult’s Law & Osmotic Pressure',
        questionText: '(a) State Raoult’s law for a solution containing non-volatile solute. Derive the relationship between relative lowering of vapour pressure and molar mass of the solute.\n(b) Define osmotic pressure. Why is osmotic pressure measurement preferred over other colligative properties for determining the molar mass of biomolecules and polymers?\n(c) Calculate the osmotic pressure of an aqueous solution containing 1.75 g of sucrose (C₁₂H₂₂O₁₁, molar mass = 342 g/mol) in 150 mL of solution at 293 K. [Take R = 0.0821 L·atm/(mol·K)].',
        modelAnswer: '(a) Raoult\'s Law:\nFor a solution containing a non-volatile solute, the relative lowering of vapour pressure is equal to the mole fraction of the solute:\n(P₁° - P₁) / P₁° = χ₂ = n₂ / (n₁ + n₂)\nFor a dilute solution (n₂ << n₁):\n(P₁° - P₁) / P₁° ≈ n₂ / n₁ = (w₂ / M₂) / (w₁ / M₁) = (w₂ · M₁) / (M₂ · w₁)\nM₂ = [ w₂ · M₁ · P₁° ] / [ w₁ · (P₁° - P₁) ].\n\n(b) Osmotic Pressure & Advantages:\n- Definition: The excess hydrostatic pressure that must be applied to the solution side across a semipermeable membrane to prevent the inward osmotic flow of pure solvent.\n- Advantages for Biomolecules & Polymers:\n1. Osmotic pressure values are measurable at room temperature, avoiding thermal degradation of delicate biomolecules like proteins.\n2. The magnitude of osmotic pressure is significantly larger than freezing point depression or boiling point elevation even for highly dilute solutions.\n3. It uses molarity rather than molality.\n\n(c) Osmotic Pressure Calculation:\nFormula: π = C R T = (n / V) R T = (w₂ / M₂) · (R T / V_litres)\nGiven: w₂ = 1.75 g, M₂ = 342 g/mol, V = 150 mL = 0.150 L, T = 293 K, R = 0.0821 L·atm/(mol·K)\nMoles of sucrose: n = 1.75 / 342 = 0.005117 mol\nπ = [ 0.005117 mol × 0.0821 L·atm/(mol·K) × 293 K ] / 0.150 L\nπ = (0.1231) / 0.150 = 0.8207 atm (or 0.82 atm = 8.31 × 10⁴ Pa).',
        stepMarking: [
          { step: '(a) Statement and mathematical derivation of M₂ = (w₂ · M₁ · P₁°) / (w₁ · ΔP)', marks: '2 Marks' },
          { step: '(b) Definition of osmotic pressure and two reasons for biomolecule suitability', marks: '1.5 Marks' },
          { step: '(c) Numerical substitution in π = (w₂RT)/(M₂V) and result π = 0.82 atm', marks: '1.5 Marks' }
        ],
        examinerTip: 'Ensure volume V is converted to litres (150 mL = 0.15 L). Using mL will result in an answer 1000 times too small.',
        commonPitfall: 'Using temperature in Celsius instead of Kelvin (must use T = 293 K).'
      },
      {
        id: 'c12-chem-24-q33',
        qNum: 33,
        section: 'E',
        marks: 5,
        topic: 'Organic Chemistry: Conversions & Named Mechanisms',
        questionText: 'Give chemical equations for the following organic conversions and mechanisms:\n(a) Williamson ether synthesis of Anisole (Methoxybenzene) from Phenol.\n(b) Gabriel Phthalimide synthesis of Ethanamine from Phthalimide.\n(c) Diazotization of Aniline followed by azo coupling with Phenol in alkaline medium.',
        modelAnswer: '(a) Williamson Ether Synthesis of Anisole:\n1) Convert Phenol to Sodium Phenoxide:\nC₆H₅OH + NaOH -> C₆H₅O⁻Na⁺ (Sodium phenoxide) + H₂O\n2) Nucleophilic substitution with Methyl halide:\nC₆H₅O⁻Na⁺ + CH₃-I --Δ-> C₆H₅-O-CH₃ (Anisole) + NaI.\n(Note: Anisole cannot be made from bromobenzene and sodium methoxide because aryl halides do not undergo nucleophilic substitution due to partial double bond character of C-X bond).\n\n(b) Gabriel Phthalimide Synthesis of Ethanamine:\n1) Phthalimide is reacted with ethanolic KOH to form Potassium phthalimide:\nC₆H₄(CO)₂NH + KOH -> C₆H₄(CO)₂N⁻K⁺ + H₂O\n2) Heating with Ethyl bromide (CH₃CH₂Br) gives N-Ethylphthalimide via S_N2:\nC₆H₄(CO)₂N⁻K⁺ + C₂H₅Br -> C₆H₄(CO)₂N-C₂H₅ + KBr\n3) Alkaline hydrolysis with aqueous NaOH yields pure primary amine:\nC₆H₄(CO)₂N-C₂H₅ + 2 NaOH -> C₆H₄(COONa)₂ (Sodium phthalate) + C₂H₅-NH₂ (Ethanamine).\n\n(c) Diazotization & Azo Coupling:\n1) Diazotization of Aniline:\nC₆H₅-NH₂ + NaNO₂ + 2 HCl --273-278 K (0-5 °C)-> C₆H₅-N₂⁺Cl⁻ (Benzene diazonium chloride) + NaCl + 2 H₂O\n2) Azo Coupling with Phenol:\nC₆H₅-N₂⁺Cl⁻ + C₆H₅-OH --pH 9-10 (mild alkaline)-> C₆H₅-N=N-C₆H₄-OH (p-Hydroxyazobenzene, Orange Dye) + HCl.',
        stepMarking: [
          { step: '(a) Conversion of phenol -> sodium phenoxide -> anisole with CH₃I', marks: '1.5 Marks' },
          { step: '(b) Three steps of Gabriel phthalimide synthesis yielding pure ethanamine', marks: '2 Marks' },
          { step: '(c) Diazotization (0-5 °C) and alkaline coupling forming p-hydroxyazobenzene orange dye', marks: '1.5 Marks' }
        ],
        examinerTip: 'Aromatic primary amines cannot be prepared by Gabriel Phthalimide synthesis because aryl halides do not undergo nucleophilic substitution with phthalimide anion.',
        commonPitfall: 'Performing diazotization above 5 °C; above 5 °C, benzenediazonium chloride decomposes into phenol and nitrogen gas.'
      }
    ]
  }
];
