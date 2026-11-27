import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_11_CHEM_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. KVS CENTRALIZED ANNUAL EXAM 2024: CLASS 11 CHEMISTRY (COMPLETE - 33 Qs)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kvs-c11-chem-2024-annual',
    title: 'KVS Centralized Annual Examination 2024: Class 11 Chemistry (Uniform Paper)',
    subject: 'Chemistry',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'KVS/RO/CHEM/24',
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
        id: 'c11-chem-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Basic Concepts: Molarity Definition',
        questionText: 'What is the molarity of a solution containing 4.0 g of NaOH dissolved in 250 mL of aqueous solution? (Molar mass of NaOH = 40 g/mol)',
        options: [
          'A) 0.1 M',
          'B) 0.4 M',
          'C) 0.2 M',
          'D) 1.0 M'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 0.4 M.\nNumber of moles of solute n = Mass / Molar mass = 4.0 g / 40 g/mol = 0.1 mol.\nVolume of solution V = 250 mL = 250 / 1000 L = 0.25 L.\nMolarity M = n / V = 0.1 mol / 0.25 L = 0.4 mol/L (0.4 M).',
        stepMarking: [
          { step: 'Moles = 0.1 mol, Volume = 0.25 L ⇒ Molarity = 0.4 M (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Molarity is temperature-dependent because volume changes with temperature; Molality is temperature-independent.',
        commonPitfall: 'Forgetting to convert 250 mL into litres.'
      },
      {
        id: 'c11-chem-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Structure of Atom: Quantum Numbers',
        questionText: 'The maximum number of electrons that can be accommodated in an individual orbital with quantum numbers n = 4, l = 2, m_l = -1 is:',
        options: [
          'A) 2',
          'B) 6',
          'C) 10',
          'D) 14'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 2.\nAccording to Pauli\'s Exclusion Principle, no two electrons in an atom can have identical values for all four quantum numbers. A specific set of (n, l, m_l) designates a single individual atomic orbital, which can hold a maximum of 2 electrons with opposite spins (m_s = +1/2 and -1/2).',
        stepMarking: [
          { step: 'Option A (2 electrons per individual orbital)', marks: '1 Mark' }
        ],
        examinerTip: 'Trap question: If asked "in 4d subshell", answer is 10. If asked "in AN orbital (fixed m_l)", answer is ALWAYS 2!',
        commonPitfall: 'Selecting 10 electrons because l = 2 corresponds to d-subshell.'
      },
      {
        id: 'c11-chem-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Classification of Elements: Electron Gain Enthalpy',
        questionText: 'Which element among the halogens has the most negative (highest exothermic) electron gain enthalpy (Δ_eg H)?',
        options: [
          'A) Fluorine',
          'B) Chlorine',
          'C) Bromine',
          'D) Iodine'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Chlorine.\nAlthough fluorine is more electronegative, its 2p subshell is extremely compact in size. Incoming electrons experience strong inter-electronic repulsion in F. In chlorine, the incoming electron enters the larger 3p subshell with minimal electron-electron repulsion, releasing more energy (Chlorine Δ_eg H = -349 kJ/mol vs Fluorine -328 kJ/mol).',
        stepMarking: [
          { step: 'Option B (Chlorine)', marks: '1 Mark' }
        ],
        examinerTip: 'Electron gain enthalpy order: Cl > F > Br > I.',
        commonPitfall: 'Choosing Fluorine because it has the highest electronegativity.'
      },
      {
        id: 'c11-chem-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Chemical Bonding: Hybridization of SF₆',
        questionText: 'The hybridization of the central sulphur atom and the geometry of sulphur hexafluoride (SF₆) molecule are:',
        options: [
          'A) sp³d, Trigonal bipyramidal',
          'B) sp³d², Octahedral',
          'C) sp³d³, Pentagonal bipyramidal',
          'D) d²sp³, Square planar'
        ],
        correctOption: 'B',
        modelAnswer: 'B) sp³d², Octahedral.\nIn SF₆, the central sulfur atom has 6 valence electrons and forms 6 single bonds with six fluorine atoms with 0 lone pairs. Steric number = 6 bond pairs + 0 lone pairs = 6. The hybridization is sp³d² and the molecular geometry is regular Octahedral with all bond angles 90°.',
        stepMarking: [
          { step: 'Option B (sp³d², Octahedral)', marks: '1 Mark' }
        ],
        examinerTip: 'PCl₅ is sp³d (trigonal bipyramidal); SF₆ is sp³d² (octahedral); IF₇ is sp³d³ (pentagonal bipyramidal).',
        commonPitfall: 'Confusing SF₆ (sp³d²) with SF₄ (sp³d, see-saw).'
      },
      {
        id: 'c11-chem-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Chemical Bonding: Bond Order in O₂',
        questionText: 'According to Molecular Orbital Theory (MOT), the bond order and magnetic nature of the oxygen molecule (O₂) are:',
        options: [
          'A) 2 and Paramagnetic',
          'B) 2 and Diamagnetic',
          'C) 3 and Diamagnetic',
          'D) 1.5 and Paramagnetic'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 2 and Paramagnetic.\nFor O₂ (16 electrons):\nConfiguration: σ1s² σ*1s² σ2s² σ*2s² σ2p_z² (π2p_x² = π2p_y²) (π*2p_x¹ = π*2p_y¹).\nBonding electrons N_b = 10; Antibonding electrons N_a = 6.\nBond Order = (N_b - N_a) / 2 = (10 - 6) / 2 = 2.\nBecause there are two unpaired electrons in the degenerate π*2p antibonding orbitals, O₂ is Paramagnetic.',
        stepMarking: [
          { step: 'Option A (Bond order = 2 and Paramagnetic)', marks: '1 Mark' }
        ],
        examinerTip: 'Valence Bond Theory failed to explain why liquid O₂ is paramagnetic; MOT successfully explained it through unpaired π* electrons.',
        commonPitfall: 'Marking diamagnetic because it has an even number of electrons.'
      },
      {
        id: 'c11-chem-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Thermodynamics: Spontaneity Condition',
        questionText: 'For a process to be strictly spontaneous at all temperatures, the signs of enthalpy change (ΔH) and entropy change (ΔS) must be:',
        options: [
          'A) ΔH > 0 and ΔS < 0',
          'B) ΔH < 0 and ΔS > 0',
          'C) ΔH > 0 and ΔS > 0',
          'D) ΔH < 0 and ΔS < 0'
        ],
        correctOption: 'B',
        modelAnswer: 'B) ΔH < 0 and ΔS > 0.\nFrom Gibbs-Helmholtz equation: ΔG = ΔH - T ΔS.\nFor spontaneity, ΔG must be negative.\nIf ΔH is negative (exothermic) and ΔS is positive (increasing disorder), then -T ΔS is always negative. Therefore, ΔG is always negative at ALL temperatures.',
        stepMarking: [
          { step: 'Option B (ΔH < 0 and ΔS > 0)', marks: '1 Mark' }
        ],
        examinerTip: 'ΔH < 0, ΔS > 0: Spontaneous at all temperatures. ΔH > 0, ΔS < 0: Non-spontaneous at all temperatures.',
        commonPitfall: 'Choosing Option A (which gives ΔG > 0, never spontaneous).'
      },
      {
        id: 'c11-chem-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Equilibrium: Le Chatelier\'s Principle',
        questionText: 'For the exothermic synthesis of ammonia: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92.4 kJ, the yield of ammonia is maximized by:',
        options: [
          'A) High temperature and low pressure',
          'B) Low temperature and high pressure',
          'C) Low temperature and low pressure',
          'D) High temperature and high pressure'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Low temperature and high pressure.\nAccording to Le Chatelier\'s Principle:\n1. Forward reaction is exothermic (ΔH < 0), so lowering temperature shifts equilibrium to the right.\n2. Forward reaction decreases number of moles of gas (4 moles reactants → 2 moles product), so increasing pressure shifts equilibrium towards fewer moles (forward).',
        stepMarking: [
          { step: 'Option B (Low temperature and high pressure)', marks: '1 Mark' }
        ],
        examinerTip: 'In industry (Haber process), optimum conditions are ~700 K (with iron catalyst) and 200 atm pressure.',
        commonPitfall: 'Choosing high temperature assuming it always gives more product.'
      },
      {
        id: 'c11-chem-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Redox Reactions: Oxidation Number Calculation',
        questionText: 'The oxidation state of chromium in potassium dichromate (K₂Cr₂O₇) is:',
        options: [
          'A) +3',
          'B) +6',
          'C) +7',
          'D) +5'
        ],
        correctOption: 'B',
        modelAnswer: 'B) +6.\nLet the oxidation state of Cr be x.\nK has +1, O has -2.\n2(+1) + 2(x) + 7(-2) = 0\n2 + 2x - 14 = 0\n2x - 12 = 0 ⇒ 2x = 12 ⇒ x = +6.',
        stepMarking: [
          { step: '2(1) + 2x + 7(-2) = 0 ⇒ x = +6 (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Chromium exhibits maximum oxidation state +6 corresponding to its valence shell (3d⁵ 4s¹).',
        commonPitfall: 'Confusing K₂Cr₂O₇ with KMnO₄ (where Mn is +7).'
      },
      {
        id: 'c11-chem-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Organic Chemistry: Carbocation Stability',
        questionText: 'Which of the following carbocations is the most stable?',
        options: [
          'A) (CH₃)₃C⁺ (tert-butyl cation)',
          'B) (CH₃)₂CH⁺ (isopropyl cation)',
          'C) CH₃CH₂⁺ (ethyl cation)',
          'D) CH₃⁺ (methyl cation)'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (CH₃)₃C⁺ (tert-butyl cation).\nStability order of carbocations is 3° > 2° > 1° > methyl.\nThe tert-butyl carbocation has 9 α-hydrogens providing maximum hyperconjugative stabilization (9 hyperconjugative structures) along with +I electron-donating inductive effect of three methyl groups.',
        stepMarking: [
          { step: 'Option A ((CH₃)₃C⁺)', marks: '1 Mark' }
        ],
        examinerTip: 'Number of hyperconjugative structures = number of α-hydrogens. 3° (9 α-H) > 2° (6 α-H) > 1° (3 α-H).',
        commonPitfall: 'Confusing carbocation stability (3° > 2° > 1°) with carbanion stability (1° > 2° > 3°).'
      },
      {
        id: 'c11-chem-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Hydrocarbons: Markovnikov\'s Rule Addition',
        questionText: 'Addition of hydrogen bromide (HBr) to propene in the absence of peroxides yields predominantly:',
        options: [
          'A) 1-bromopropane',
          'B) 2-bromopropane',
          'C) 1,2-dibromopropane',
          'D) Propyl alcohol'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 2-bromopropane.\nAccording to Markovnikov\'s Rule, when an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part of the addendum (Br⁻) attaches to that double-bonded carbon which has fewer hydrogen atoms. This proceeds via the more stable 2° carbocation intermediate (CH₃-CH⁺-CH₃), yielding 2-bromopropane as the major product.',
        stepMarking: [
          { step: 'Option B (2-bromopropane)', marks: '1 Mark' }
        ],
        examinerTip: 'In the PRESENCE of organic peroxides (Kharasch effect), anti-Markovnikov addition occurs, giving 1-bromopropane.',
        commonPitfall: 'Applying peroxide effect when the question explicitly states "absence of peroxides".'
      },
      {
        id: 'c11-chem-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Hydrocarbons: Aromaticity & Hückel\'s Rule',
        questionText: 'According to Hückel\'s rule, a cyclic planar conjugated ring is aromatic if it contains:',
        options: [
          'A) (4n + 2) π electrons (where n = 0, 1, 2, ...)',
          'B) 4n π electrons',
          'C) (2n + 4) π electrons',
          'D) 6n π electrons'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (4n + 2) π electrons (where n = 0, 1, 2, ...).\nHückel\'s rule states that for a molecule to be aromatic, it must be cyclic, planar, completely conjugated, and possess (4n + 2) delocalized π electrons (e.g., n = 1 gives 6 π electrons in Benzene).',
        stepMarking: [
          { step: 'Option A ((4n + 2) π electrons)', marks: '1 Mark' }
        ],
        examinerTip: 'Planar rings with 4n π electrons are anti-aromatic and highly unstable (e.g., cyclobutadiene).',
        commonPitfall: 'Confusing 4n (anti-aromatic) with (4n + 2) (aromatic).'
      },
      {
        id: 'c11-chem-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Basic Concepts: Limiting Reagent',
        questionText: 'If 1 mole of N₂ reacts with 2 moles of H₂ according to N₂ + 3H₂ → 2NH₃, the limiting reagent is:',
        options: [
          'A) N₂',
          'B) H₂',
          'C) NH₃',
          'D) Neither'
        ],
        correctOption: 'B',
        modelAnswer: 'B) H₂.\nAccording to stoichiometry: 1 mole of N₂ requires 3 moles of H₂ to react completely.\nGiven: 1 mole of N₂ and only 2 moles of H₂.\nBecause 2 moles of H₂ is less than the required 3 moles, H₂ is completely consumed first and limits the reaction. Therefore, H₂ is the limiting reagent.',
        stepMarking: [
          { step: 'Stoichiometry check: 1 mol N₂ needs 3 mol H₂ ⇒ H₂ is limiting (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'The limiting reagent dictates the maximum amount of product that can be formed.',
        commonPitfall: 'Assuming N₂ is limiting because it has fewer moles (1 < 2).'
      },
      {
        id: 'c11-chem-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Bohr Model Limitations',
        questionText: 'Assertion (A): It is impossible to determine simultaneously the exact position and exact momentum of an electron.\nReason (R): Heisenberg\'s Uncertainty Principle states that Δx · Δp ≥ h / (4π).\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nHeisenberg\'s Uncertainty Principle is a fundamental wave-particle duality consequence: attempting to measure position precisely using high-frequency photons imparts unpredictable momentum to the microscopic electron. The mathematical formulation Δx · Δp ≥ h/(4π) establishes that precision in position entails uncertainty in momentum.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Heisenberg principle ruled out Bohr\'s concept of well-defined planetary circular orbits, replacing them with orbitals.',
        commonPitfall: 'Thinking uncertainty is due to imperfect measuring instruments.'
      },
      {
        id: 'c11-chem-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Ionization Enthalpy of Nitrogen vs Oxygen',
        questionText: 'Assertion (A): The first ionization enthalpy of Nitrogen is greater than that of Oxygen.\nReason (R): Nitrogen has an exactly half-filled 2p subshell (2p³) which confers extra exchange energy stability.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nElectronic configurations:\nNitrogen (Z = 7): [He] 2s² 2p_x¹ 2p_y¹ 2p_z¹ (half-filled p subshell, highly stable).\nOxygen (Z = 8): [He] 2s² 2p_x² 2p_y¹ 2p_z¹.\nRemoving an electron from oxygen relieves inter-electronic pairing repulsion in the 2p_x orbital and yields a stable half-filled 2p³ state, requiring less energy than removing an electron from nitrogen\'s stable half-filled configuration.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Anomalies across Period 2: IE₁(Be) > IE₁(B) due to full 2s², and IE₁(N) > IE₁(O) due to half-filled 2p³.',
        commonPitfall: 'Expecting ionization enthalpy to increase strictly across a period without exceptions.'
      },
      {
        id: 'c11-chem-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Hess\'s Law of Constant Heat Summation',
        questionText: 'Assertion (A): The enthalpy change in a chemical reaction is independent of the pathway taken from reactants to products.\nReason (R): Enthalpy (H) is a state function.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nHess\'s Law states that total enthalpy change in a reaction is identical whether the reaction occurs in one step or in a series of steps. This follows directly from the fact that Enthalpy is a thermodynamic State Function whose value depends only on the initial and final states of the system and not on the pathway.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'State functions: H, U, S, G, P, V, T. Path functions: q (heat) and w (work).',
        commonPitfall: 'Confusing state functions with path functions.'
      },
      {
        id: 'c11-chem-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Acidic Nature of Alkynes',
        questionText: 'Assertion (A): Ethyne (acetylene) is more acidic than ethene and ethane.\nReason (R): The carbon atoms in ethyne are sp hybridized with 50% s-character, which makes them highly electronegative and allows easy release of terminal protons as H⁺.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nElectronegativity of carbon increases with increasing s-character: sp (50% s) > sp² (33.3% s) > sp³ (25% s). In ethyne, the sp-hybridized carbon strongly pulls the C-H sigma bonding electrons, polarizing the C-H bond and facilitating the release of hydrogen as a proton (H⁺) in the presence of strong bases like NaNH₂.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Ethyne reacts with Na metal or NaNH₂ to liberate H₂ gas, confirming its acidic character.',
        commonPitfall: 'Thinking all hydrocarbons are completely non-acidic.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: SHORT ANSWER TYPE-I (Q17 to Q21 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-chem-24-q17',
        qNum: 17,
        section: 'B',
        marks: 2,
        topic: 'Structure of Atom: de Broglie Wavelength',
        questionText: 'Calculate the de Broglie wavelength associated with an electron moving with a velocity of 2.05 × 10⁷ m/s. (Mass of electron = 9.1 × 10⁻³¹ kg, h = 6.626 × 10⁻³⁴ J s).',
        modelAnswer: 'de Broglie equation: λ = h / (m v)\nGiven:\nh = 6.626 × 10⁻³⁴ J s\nm = 9.1 × 10⁻³¹ kg\nv = 2.05 × 10⁷ m/s\n\nλ = (6.626 × 10⁻³⁴) / [ (9.1 × 10⁻³¹) × (2.05 × 10⁷) ]\n= (6.626 × 10⁻³⁴) / [ 18.655 × 10⁻²⁴ ]\n= 0.355 × 10⁻¹⁰ m = 3.55 × 10⁻¹¹ m (or 0.0355 nm / 0.355 Å).',
        stepMarking: [
          { step: 'Formula λ = h / (mv) and correct substitution', marks: '1 Mark' },
          { step: 'Calculation and final answer λ = 3.55 × 10⁻¹¹ m', marks: '1 Mark' }
        ],
        examinerTip: 'Always write appropriate units (m or Å).',
        commonPitfall: 'Power of 10 arithmetic error in the denominator.'
      },
      {
        id: 'c11-chem-24-q18',
        qNum: 18,
        section: 'B',
        marks: 2,
        topic: 'Chemical Bonding: Dipole Moment of NH₃ vs NF₃',
        questionText: 'Both NH₃ and NF₃ molecules have pyramidal shape with one lone pair of electrons on nitrogen. Explain why NH₃ has a significantly higher dipole moment (1.47 D) than NF₃ (0.24 D).',
        modelAnswer: '1. In NH₃, Nitrogen is more electronegative than Hydrogen. The three N-H bond dipoles point in the same direction as the orbital dipole of the lone pair. Hence, the bond dipoles reinforce the lone pair dipole, resulting in a large net dipole moment (μ = 1.47 D).\n\n2. In NF₃, Fluorine is more electronegative than Nitrogen. The three N-F bond dipoles point away from the nitrogen atom, directly opposing the orbital dipole of the lone pair. Hence, the bond dipoles partially cancel out the lone pair dipole, resulting in a very low net dipole moment (μ = 0.24 D).',
        stepMarking: [
          { step: 'NH₃: bond dipoles and lone pair dipole reinforce each other', marks: '1 Mark' },
          { step: 'NF₃: N-F bond dipoles oppose the lone pair dipole resulting in cancellation', marks: '1 Mark' }
        ],
        examinerTip: 'Draw simple vector arrows showing reinforcement in NH₃ and opposition in NF₃.',
        commonPitfall: 'Assuming NF₃ must have a higher dipole moment simply because Fluorine is more electronegative.'
      },
      {
        id: 'c11-chem-24-q19',
        qNum: 19,
        section: 'B',
        marks: 2,
        topic: 'Thermodynamics: First Law Calculation',
        questionText: 'In a process, 701 J of heat is absorbed by a system and 394 J of work is done by the system. What is the change in internal energy (ΔU) for the process?',
        modelAnswer: 'According to the First Law of Thermodynamics:\nΔU = q + w\nSign convention:\n- Heat absorbed by the system: q = +701 J\n- Work done BY the system (expansion): w = -394 J\n\nCalculation:\nΔU = (+701 J) + (-394 J) = 701 - 394 = +307 J.\n\nTherefore, the internal energy of the system increases by 307 J.',
        stepMarking: [
          { step: 'First law formula and correct IUPAC signs: q = +701 J, w = -394 J', marks: '1 Mark' },
          { step: 'ΔU = +307 J', marks: '1 Mark' }
        ],
        examinerTip: 'IUPAC convention: Work done ON system is positive (+w); Work done BY system is negative (-w).',
        commonPitfall: 'Adding 701 + 394 = 1095 J by ignoring the negative sign of work done by the system.'
      },
      {
        id: 'c11-chem-24-q20',
        qNum: 20,
        section: 'B',
        marks: 2,
        topic: 'Equilibrium: Common Ion Effect',
        questionText: 'What is the Common Ion Effect? How does the addition of ammonium chloride (NH₄Cl) suppress the ionization of ammonium hydroxide (NH₄OH) in qualitative group analysis?',
        modelAnswer: '1. Common Ion Effect:\nThe suppression of the degree of dissociation of a weak electrolyte by the addition of a strong electrolyte containing a common ion is called the common ion effect.\n\n2. Application with NH₄OH and NH₄Cl:\nNH₄OH is a weak base that ionizes partially:\nNH₄OH ⇌ NH₄⁺ + OH⁻\nWhen strong electrolyte NH₄Cl is added, it dissociates completely, introducing a high concentration of common NH₄⁺ ions:\nNH₄Cl → NH₄⁺ + Cl⁻\nBy Le Chatelier\'s Principle, the excess NH₄⁺ ions shift the equilibrium backwards, drastically reducing [OH⁻] concentration so that only Group III metal cations [Fe³⁺, Al³⁺, Cr³⁺] precipitate as hydroxides without precipitating Group IV cations.',
        stepMarking: [
          { step: 'Definition of common ion effect', marks: '1 Mark' },
          { step: 'Explanation using NH₄OH/NH₄Cl and Le Chatelier shift', marks: '1 Mark' }
        ],
        examinerTip: 'Essential in inorganic salt analysis: Group III reagents are NH₄OH + NH₄Cl.',
        commonPitfall: 'Describing common ion effect without mentioning Le Chatelier\'s principle.'
      },
      {
        id: 'c11-chem-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Organic Chemistry: Inductive vs Electromeric Effect',
        questionText: 'Differentiate between Inductive Effect and Electromeric Effect in organic reaction mechanisms.',
        modelAnswer: '1. Inductive Effect (I-effect):\n- Permanent effect operating in sigma (σ) bonded systems.\n- Involves partial displacement of sigma electrons along a carbon chain due to electronegativity differences between atoms.\n- Does not require the presence of an attacking reagent.\n- Diminishes rapidly with distance and becomes negligible beyond 3 carbons.\n\n2. Electromeric Effect (E-effect):\n- Temporary effect operating exclusively in multiple-bonded systems (π-bonds, C=C or C=O).\n- Involves complete transfer of a shared pair of π-electrons to one of the atoms joined by the multiple bond.\n- Operates ONLY in the presence of an attacking reagent and vanishes as soon as the reagent is removed.',
        stepMarking: [
          { step: 'Inductive effect: Permanent, sigma bonds, no reagent needed', marks: '1 Mark' },
          { step: 'Electromeric effect: Temporary, pi bonds, requires attacking reagent', marks: '1 Mark' }
        ],
        examinerTip: 'I-effect is permanent (e.g., in chloroethane); E-effect is temporary (e.g., addition of H⁺ to ethene).',
        commonPitfall: 'Calling electromeric effect a permanent effect.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER TYPE-II (Q22 to Q28 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-chem-24-q22',
        qNum: 22,
        section: 'C',
        marks: 3,
        topic: 'Basic Concepts: Empirical and Molecular Formula',
        questionText: 'A compound contains 4.07% hydrogen, 24.27% carbon, and 71.65% chlorine by mass. Its molar mass is 98.96 g/mol. Determine its empirical formula and molecular formula. (Atomic masses: H = 1, C = 12, Cl = 35.5).',
        modelAnswer: 'Step 1: Calculate Moles of each element:\n- Moles of C = 24.27 / 12 = 2.0225\n- Moles of H = 4.07 / 1 = 4.07\n- Moles of Cl = 71.65 / 35.5 = 2.018\n\nStep 2: Simplest Molar Ratio (divide by smallest value, 2.018):\n- C = 2.0225 / 2.018 ≈ 1\n- H = 4.07 / 2.018 ≈ 2\n- Cl = 2.018 / 2.018 = 1\nEmpirical Formula = CH₂Cl.\n\nStep 3: Empirical Formula Mass:\nMass = 12 + 2(1) + 35.5 = 49.5 g/mol.\n\nStep 4: Determine n factor and Molecular Formula:\nn = Molar mass / Empirical formula mass = 98.96 / 49.5 ≈ 2.\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂ (Dichloroethane).',
        stepMarking: [
          { step: 'Determining moles and simplest whole number ratio (1 : 2 : 1)', marks: '1.5 Marks' },
          { step: 'Empirical formula CH₂Cl and empirical mass 49.5 g/mol', marks: '0.75 Mark' },
          { step: 'Finding n = 2 and Molecular Formula C₂H₄Cl₂', marks: '0.75 Mark' }
        ],
        examinerTip: 'Always check that n is a whole integer (here 98.96 / 49.5 = 1.999 ≈ 2).',
        commonPitfall: 'Inverting n = Empirical mass / Molecular mass.'
      },
      {
        id: 'c11-chem-24-q23',
        qNum: 23,
        section: 'C',
        marks: 3,
        topic: 'Structure of Atom: Bohr\'s Frequency Condition & Lyman Series',
        questionText: '(a) Write Rydberg\'s formula for the spectral lines of hydrogen atom.\n(b) Calculate the wavelength of the spectral line emitted when an electron in hydrogen atom transitions from the third energy level (n = 3) to the ground state (n = 1). In which spectral region does this line lie? (R_H = 1.097 × 10⁷ m⁻¹).',
        modelAnswer: '(a) Rydberg Formula:\n1 / λ = R_H [ (1 / n₁²) - (1 / n₂²) ]\nwhere R_H is Rydberg\'s constant and n₂ > n₁.\n\n(b) Calculation for n₁ = 1, n₂ = 3 (Lyman series, second line):\n1 / λ = (1.097 × 10⁷) [ (1 / 1²) - (1 / 3²) ]\n1 / λ = (1.097 × 10⁷) [ 1 - 1/9 ]\n1 / λ = (1.097 × 10⁷) × (8 / 9) = 0.9751 × 10⁷ m⁻¹\nλ = 1 / (0.9751 × 10⁷) = 1.0256 × 10⁻⁷ m = 102.6 nm (or 1026 Å).\n\nSpectral Region: Ultraviolet (UV) region (since transitions ending at n₁ = 1 belong to the Lyman series, which lies strictly in the ultraviolet region).',
        stepMarking: [
          { step: '(a) Rydberg formula correctly stated', marks: '1 Mark' },
          { step: '(b) Calculation: 1/λ = R_H(8/9) giving λ = 102.6 nm', marks: '1.5 Marks' },
          { step: 'Identifying Ultraviolet (UV) region', marks: '0.5 Mark' }
        ],
        examinerTip: 'Lyman = UV; Balmer = Visible; Paschen/Brackett/Pfund = Infrared.',
        commonPitfall: 'Stating visible region instead of UV for Lyman series.'
      },
      {
        id: 'c11-chem-24-q24',
        qNum: 24,
        section: 'C',
        marks: 3,
        topic: 'Chemical Bonding: Molecular Orbital Diagram of N₂',
        questionText: 'Draw the molecular orbital energy level diagram for the nitrogen molecule (N₂). Write its electronic configuration, calculate its bond order, and state its magnetic behavior.',
        modelAnswer: 'Nitrogen atom has 7 electrons; N₂ molecule has 14 electrons (Z ≤ 7, so π2p orbitals are lower in energy than σ2p_z due to s-p mixing).\n\n1. Molecular Orbital Electronic Configuration:\nσ1s² σ*1s² σ2s² σ*2s² (π2p_x² = π2p_y²) σ2p_z².\n\n2. Bond Order Calculation:\nNumber of bonding electrons N_b = 10\nNumber of antibonding electrons N_a = 4\nBond Order = (N_b - N_a) / 2 = (10 - 4) / 2 = 6 / 2 = 3.\nA triple bond (one σ and two π bonds) exists between nitrogen atoms, explaining its extraordinary chemical inertness.\n\n3. Magnetic Nature:\nAll 14 electrons in the molecular orbitals are paired. Therefore, N₂ is strictly Diamagnetic.',
        stepMarking: [
          { step: 'Correct MO configuration showing (π2p_x² = π2p_y²) before σ2p_z²', marks: '1 Mark' },
          { step: 'Bond order calculation = (10 - 4)/2 = 3', marks: '1 Mark' },
          { step: 'Diamagnetic magnetic nature deduction', marks: '1 Mark' }
        ],
        examinerTip: 'For N₂ (≤14 e⁻), π2p_x/y is lower than σ2p_z. For O₂ (>14 e⁻), σ2p_z is lower than π2p_x/y.',
        commonPitfall: 'Using O₂ energy ordering for N₂.'
      },
      {
        id: 'c11-chem-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'Thermodynamics: Hess\'s Law Numerical',
        questionText: 'Calculate the standard enthalpy of formation of methanol (CH₃OH(l)) from the following data:\n(1) CH₃OH(l) + 3/2 O₂(g) → CO₂(g) + 2H₂O(l);  Δ_c H° = -726 kJ/mol\n(2) C(graphite) + O₂(g) → CO₂(g);               Δ_f H° = -393 kJ/mol\n(3) H₂(g) + 1/2 O₂(g) → H₂O(l);                 Δ_f H° = -286 kJ/mol',
        modelAnswer: 'Target Equation (Enthalpy of formation of CH₃OH):\nC(graphite) + 2H₂(g) + 1/2 O₂(g) → CH₃OH(l)    ...(Target)\n\nGiven equations:\nEq (1): CH₃OH(l) + 3/2 O₂(g) → CO₂(g) + 2H₂O(l)   [ΔH₁ = -726 kJ]\nEq (2): C(s) + O₂(g) → CO₂(g)                       [ΔH₂ = -393 kJ]\nEq (3): H₂(g) + 1/2 O₂(g) → H₂O(l)                  [ΔH₃ = -286 kJ]\n\nManipulating equations:\nWe need 1 mole C on LHS: Keep Eq (2).\nWe need 2 moles H₂ on LHS: Multiply Eq (3) by 2: 2H₂ + O₂ → 2H₂O [ΔH = 2(-286) = -572 kJ].\nWe need 1 mole CH₃OH on RHS: Reverse Eq (1): CO₂ + 2H₂O → CH₃OH + 3/2 O₂ [ΔH = +726 kJ].\n\nAdding these three manipulated equations:\nC + O₂ + 2H₂ + O₂ + CO₂ + 2H₂O → CO₂ + 2H₂O + CH₃OH + 3/2 O₂\nNet: C(s) + 2H₂(g) + 1/2 O₂(g) → CH₃OH(l).\n\nEnthalpy calculation:\nΔ_f H° = ΔH₂ + 2(ΔH₃) - ΔH₁\n= (-393) + 2(-286) - (-726)\n= -393 - 572 + 726\n= -965 + 726 = -239 kJ/mol.\n\nStandard enthalpy of formation of methanol is -239 kJ/mol.',
        stepMarking: [
          { step: 'Writing target thermochemical equation', marks: '0.5 Mark' },
          { step: 'Manipulating equations: Eq(2) + 2×Eq(3) - Eq(1)', marks: '1.5 Marks' },
          { step: 'Final calculation Δ_f H° = -239 kJ/mol', marks: '1 Mark' }
        ],
        examinerTip: 'Reversing an equation flips the sign of ΔH from negative to positive.',
        commonPitfall: 'Forgetting to multiply Eq (3) by 2 for the two hydrogen molecules.'
      },
      {
        id: 'c11-chem-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Equilibrium: pH Calculation of Strong/Weak Acid',
        questionText: 'Calculate the pH of a 0.001 M solution of barium hydroxide (Ba(OH)₂), assuming complete dissociation. (log 2 = 0.3010).',
        modelAnswer: 'Ba(OH)₂ is a strong base that dissociates completely in water:\nBa(OH)₂(aq) → Ba²⁺(aq) + 2 OH⁻(aq)\n\nConcentration of hydroxide ions [OH⁻]:\nEach mole of Ba(OH)₂ yields 2 moles of OH⁻.\n[OH⁻] = 2 × [Ba(OH)₂] = 2 × 0.001 M = 0.002 M = 2 × 10⁻³ M.\n\npOH Calculation:\npOH = - log₁₀ [OH⁻] = - log₁₀ (2 × 10⁻³)\n= - [ log 2 + log 10⁻³ ]\n= - [ 0.3010 - 3 ] = - [ -2.699 ] = 2.70.\n\npH Calculation (at 298 K, pH + pOH = 14):\npH = 14 - pOH = 14 - 2.70 = 11.30.\n\nTherefore, the pH of the solution is 11.30 (basic).',
        stepMarking: [
          { step: '[OH⁻] = 2 × 0.001 = 2 × 10⁻³ M (accounting for diacidic base)', marks: '1 Mark' },
          { step: 'pOH = -log(2 × 10⁻³) = 2.70', marks: '1 Mark' },
          { step: 'pH = 14 - 2.70 = 11.30', marks: '1 Mark' }
        ],
        examinerTip: 'Notice Ba(OH)₂ releases TWO OH⁻ ions. Ignoring the factor of 2 leads to incorrect [OH⁻] = 10⁻³ M.',
        commonPitfall: 'Taking [OH⁻] = 0.001 M instead of 0.002 M.'
      },
      {
        id: 'c11-chem-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Redox Reactions: Balancing by Ion-Electron Method',
        questionText: 'Balance the following redox reaction in acidic medium using the ion-electron (half-reaction) method:\nMnO₄⁻(aq) + Fe²⁺(aq) → Mn²⁺(aq) + Fe³⁺(aq).',
        modelAnswer: 'Step 1: Identify Oxidation and Reduction half-reactions:\n- Oxidation: Fe²⁺ → Fe³⁺\n- Reduction: MnO₄⁻ → Mn²⁺\n\nStep 2: Balance Oxidation Half-Reaction:\nFe²⁺ → Fe³⁺ + e⁻    ...(1)\n\nStep 3: Balance Reduction Half-Reaction:\n1. Balance Mn: Mn is already balanced.\n2. Balance O by adding H₂O: MnO₄⁻ → Mn²⁺ + 4H₂O\n3. Balance H by adding H⁺ (acidic medium): MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O\n4. Balance charge by adding electrons:\n   Left side charge = -1 + 8(+1) = +7.\n   Right side charge = +2.\n   Add 5e⁻ to left side:\n   MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O    ...(2)\n\nStep 4: Equalize electrons and add half-reactions:\nMultiply equation (1) by 5 and add to equation (2):\n5 Fe²⁺ → 5 Fe³⁺ + 5e⁻\nMnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O\n----------------------------------------------------\nMnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l).\n\nCheck:\nAtoms: Mn: 1=1; Fe: 5=5; O: 4=4; H: 8=8.\nCharge: Left side = -1 + 5(+2) + 8(+1) = +17. Right side = +2 + 5(+3) = +17.\nReaction is fully balanced.',
        stepMarking: [
          { step: 'Oxidation half: Fe²⁺ → Fe³⁺ + e⁻', marks: '0.5 Mark' },
          { step: 'Reduction half: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O', marks: '1.5 Marks' },
          { step: 'Multiplying by 5 and final balanced equation with charge verification', marks: '1 Mark' }
        ],
        examinerTip: 'Always balance oxygen with H₂O and hydrogen with H⁺ in acidic media.',
        commonPitfall: 'Incorrect charge balancing resulting in unequal charges on both sides.'
      },
      {
        id: 'c11-chem-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Hydrocarbons: Ozonolysis of Alkenes',
        questionText: 'An alkene \'A\' on ozonolysis followed by reductive cleavage with Zn/H₂O gives a mixture of propan-2-one (acetone) and ethanal (acetaldehyde). Identify alkene \'A\', write its IUPAC name, and write the complete chemical reactions involved.',
        modelAnswer: '1. Structure Deduction:\nProducts of ozonolysis are:\n- Propan-2-one: CH₃-C(=O)-CH₃\n- Ethanal: O=CH-CH₃\n\nTo identify the original alkene, remove the two carbonyl oxygens and join the two fragments by a carbon-carbon double bond:\nCH₃-C(CH₃) = CH-CH₃.\n\n2. IUPAC Name of Alkene \'A\':\nStructure: 2-Methylbut-2-ene.\n\n3. Chemical Reactions:\nStep 1: Ozonolysis:\n(CH₃)₂C = CH-CH₃ + O₃ → (CH₃)₂C—(O₃)—CH-CH₃ (Ozonide intermediate)\n\nStep 2: Reductive Cleavage with Zn/H₂O:\nOzonide + Zn + H₂O → CH₃-CO-CH₃ (Propan-2-one) + CH₃-CHO (Ethanal) + ZnO + H₂O.',
        stepMarking: [
          { step: 'Logical deduction: joining carbonyl fragments with double bond', marks: '1 Mark' },
          { step: 'Correct IUPAC name: 2-Methylbut-2-ene', marks: '1 Mark' },
          { step: 'Complete chemical equations showing ozonide and Zn/H₂O cleavage', marks: '1 Mark' }
        ],
        examinerTip: 'Zn dust destroys H₂O₂ formed, preventing further oxidation of aldehydes into carboxylic acids.',
        commonPitfall: 'Incorrect IUPAC numbering (naming it 3-methylbut-2-ene instead of 2-methylbut-2-ene).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: CASE STUDY QUESTIONS (Q29 & Q30 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-chem-24-q29',
        qNum: 29,
        section: 'D',
        marks: 4,
        topic: 'Case Study 1: Periodic Trends & Anomalous Properties of Second Period',
        questionText: 'The elements of the second period (Li, Be, B, C, N, O, F) exhibit anomalous properties compared to heavier congeners in their respective groups due to their small size, high electronegativity, and absence of d-orbitals.\n\n(i) Why does Lithium show diagonal relationship with Magnesium? [1 Mark]\n(ii) Why does Boron form [BF₄]⁻ but cannot form [BF₆]³⁻? [1 Mark]\n(iii) (a) Explain why the first ionization enthalpy of Boron is less than that of Beryllium, even though nuclear charge increases from Be to B. [2 Marks]\n                         OR\n(iii) (b) Arrange the following in increasing order of ionic radii and explain the reason: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺. [2 Marks]',
        modelAnswer: '(i) Diagonal Relationship between Li and Mg:\nLithium resembles Magnesium because of similar ionic size (Li⁺ ≈ 76 pm, Mg²⁺ ≈ 72 pm) and almost identical polarizing power (charge-to-size ratio).\n\n(ii) Inability of Boron to expand octet:\nBoron belongs to Period 2 (configuration 1s² 2s² 2p¹) and has only four valence orbitals (one 2s and three 2p) with no vacant d-orbitals. Therefore, its maximum covalency is restricted strictly to 4, forming [BF₄]⁻ but never [BF₆]³⁻.\n\n(iii) (a) First Ionization Enthalpy (Be vs B):\n- Beryllium (Z = 4): [He] 2s² (fully filled 2s subshell with high penetration power towards nucleus).\n- Boron (Z = 5): [He] 2s² 2p¹ (the outer electron is in 2p subshell, which is shielded by inner 2s electrons and is at higher energy).\nRemoving a 2p electron from Boron requires less energy than removing a penetrated 2s electron from Beryllium, so IE₁(B) < IE₁(Be).\n\nOR\n(iii) (b) Increasing order of ionic radii for isoelectronic species (10 electrons each):\nMg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻.\nExplanation: All these ions possess 10 electrons. As the nuclear charge (number of protons) increases (N=7, O=8, F=9, Na=11, Mg=12), the electrostatic attraction between the nucleus and electrons increases, pulling electron shells closer and decreasing ionic radius.',
        stepMarking: [
          { step: '(i) Similar polarizing power / charge-to-size ratio', marks: '1 Mark' },
          { step: '(ii) Absence of d-orbitals restricting covalency to 4', marks: '1 Mark' },
          { step: '(iii)(a) 2s² full subshell penetration vs 2p¹ shielding OR (iii)(b) Isoelectronic radius order Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻ with nuclear charge explanation', marks: '2 Marks' }
        ],
        examinerTip: 'For isoelectronic species: Higher positive charge = smaller radius; Higher negative charge = larger radius.',
        commonPitfall: 'Assuming ionic radii depend on mass rather than effective nuclear charge in isoelectronic ions.'
      },
      {
        id: 'c11-chem-24-q30',
        qNum: 30,
        section: 'D',
        marks: 4,
        topic: 'Case Study 2: Buffer Solutions & Blood pH Homeostasis (Equilibrium)',
        questionText: 'Human blood has a strictly maintained pH of 7.40 ± 0.05. This delicate pH balance is preserved primarily by the carbonic acid - bicarbonate buffer system (H₂CO₃ / HCO₃⁻).\n\n(i) What is a buffer solution? [1 Mark]\n(ii) State the Henderson-Hasselbalch equation for an acidic buffer. [1 Mark]\n(iii) (a) Explain how the H₂CO₃ / HCO₃⁻ buffer resists change in blood pH when a small amount of acid (H⁺) or base (OH⁻) enters the bloodstream. [2 Marks]\n                         OR\n(iii) (b) Calculate the solubility product (K_sp) of AgCl if its solubility in pure water at 298 K is 1.435 × 10⁻³ g/L. (Molar mass of AgCl = 143.5 g/mol). [2 Marks]',
        modelAnswer: '(i) Buffer Solution:\nA buffer solution is a solution that resists drastic changes in its hydrogen ion concentration (pH) upon the addition of small amounts of strong acid, strong base, or upon dilution.\n\n(ii) Henderson-Hasselbalch Equation for Acidic Buffer:\npH = pK_a + log₁₀ [Salt] / [Acid]  (or pH = pK_a + log₁₀ [Conjugate Base] / [Weak Acid]).\n\n(iii) (a) Action of Blood Buffer (H₂CO₃ / HCO₃⁻):\n1. When excess H⁺ enters blood: Bicarbonate ions neutralize it:\nH⁺ + HCO₃⁻ ⇌ H₂CO₃ (carbonic acid), which breaks down to CO₂ and H₂O and is exhaled by lungs.\n2. When excess OH⁻ enters blood: Carbonic acid neutralizes it:\nOH⁻ + H₂CO₃ ⇌ HCO₃⁻ + H₂O.\nThus, pH remains locked near 7.4.\n\nOR\n(iii) (b) Solubility Product Calculation for AgCl:\nSolubility s in g/L = 1.435 × 10⁻³ g/L.\nMolar solubility S = s / Molar mass = (1.435 × 10⁻³ g/L) / (143.5 g/mol) = 1.0 × 10⁻⁵ mol/L.\nDissociation: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)\nK_sp = [Ag⁺] [Cl⁻] = S × S = S²\nK_sp = (1.0 × 10⁻⁵)² = 1.0 × 10⁻¹⁰ mol² L⁻².\n\nSolubility product K_sp of AgCl is 1.0 × 10⁻¹⁰.',
        stepMarking: [
          { step: '(i) Buffer definition', marks: '1 Mark' },
          { step: '(ii) Henderson-Hasselbalch equation: pH = pK_a + log([Salt]/[Acid])', marks: '1 Mark' },
          { step: '(iii)(a) Dual neutralization mechanism OR (iii)(b) Conversion to mol/L and K_sp = S² = 1.0 × 10⁻¹⁰', marks: '2 Marks' }
        ],
        examinerTip: 'Always convert solubility from g/L to mol/L by dividing by molar mass before calculating K_sp.',
        commonPitfall: 'Squaring solubility in g/L directly.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: LONG ANSWER QUESTIONS (Q31 to Q33 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c11-chem-24-q31',
        qNum: 31,
        section: 'E',
        marks: 5,
        topic: 'Chemical Bonding: VSEPR Theory and Shapes of Molecules',
        questionText: '(a) State the basic postulates of Valence Shell Electron Pair Repulsion (VSEPR) theory.\n(b) Predict the hybridization, number of bond pairs, number of lone pairs, and actual molecular shape of:\n    (i) PCl₅\n    (ii) ClF₃\n    (iii) XeF₄.',
        modelAnswer: '(a) Postulates of VSEPR Theory:\n1. The shape of a molecule depends upon the number of valence shell electron pairs (bonded and non-bonded lone pairs) around the central atom.\n2. Pairs of electrons in the valence shell repel one another since their electron clouds are negatively charged.\n3. Electron pairs arrange themselves in space to minimize electrostatic repulsion and maximize distance between them.\n4. The repulsive interaction order between electron pairs decreases in the hierarchy:\n   Lone Pair - Lone Pair (lp - lp) > Lone Pair - Bond Pair (lp - bp) > Bond Pair - Bond Pair (bp - bp).\n\n(b) Molecular Predictions:\n\n(i) PCl₅:\n- Central atom Phosphorus (P) has 5 valence electrons.\n- Bond pairs = 5, Lone pairs = 0 (Steric number = 5).\n- Hybridization: sp³d.\n- Shape: Trigonal Bipyramidal.\n- Note: The two axial P-Cl bonds (240 pm) are longer and weaker than the three equatorial P-Cl bonds (202 pm) due to greater repulsions at 90°.\n\n(ii) ClF₃:\n- Central atom Chlorine (Cl) has 7 valence electrons.\n- Bond pairs = 3, Lone pairs = 2 (Steric number = 5).\n- Hybridization: sp³d.\n- Shape: T-shaped (the 2 lone pairs occupy equatorial positions to minimize 90° repulsions).\n\n(iii) XeF₄:\n- Central atom Xenon (Xe) has 8 valence electrons.\n- Bond pairs = 4, Lone pairs = 2 (Steric number = 6).\n- Hybridization: sp³d².\n- Shape: Square Planar (the 2 lone pairs occupy opposite trans-axial positions at 180° to cancel each other out).',
        stepMarking: [
          { step: '(a) Four core postulates of VSEPR theory with repulsion hierarchy', marks: '2 Marks' },
          { step: '(b)(i) PCl₅: sp³d, Trigonal bipyramidal with axial/equatorial explanation', marks: '1 Mark' },
          { step: '(b)(ii) ClF₃: sp³d, T-shaped', marks: '1 Mark' },
          { step: '(b)(iii) XeF₄: sp³d², Square planar', marks: '1 Mark' }
        ],
        examinerTip: 'Axial bonds in PCl₅ are longer than equatorial bonds, which is why PCl₅ readily decomposes on heating to PCl₃ + Cl₂.',
        commonPitfall: 'Calling ClF₃ trigonal planar instead of T-shaped.'
      },
      {
        id: 'c11-chem-24-q32',
        qNum: 32,
        section: 'E',
        marks: 5,
        topic: 'Chemical Thermodynamics: Gibbs Free Energy & Spontaneity',
        questionText: '(a) Define Gibbs Free Energy. Derive the Gibbs-Helmholtz relation ΔG = ΔH - T ΔS from the Second Law of Thermodynamics.\n(b) For a reaction, the enthalpy change ΔH is -110 kJ/mol and entropy change ΔS is -150 J/(K·mol). Calculate the temperature range at which this reaction becomes spontaneous.',
        modelAnswer: '(a) Gibbs Free Energy (G):\nGibbs free energy is a thermodynamic quantity defined as the maximum amount of non-expansion work that can be extracted from a closed system at constant temperature and pressure: G = H - T S.\n\nDerivation of ΔG = ΔH - T ΔS:\nFrom the Second Law of Thermodynamics, for a spontaneous process:\nΔS_total = ΔS_system + ΔS_surroundings > 0.\n\nWhen heat q_p is released by the system at constant temperature and pressure, heat absorbed by surroundings is q_surr = -q_p = -ΔH_system.\nEntropy change of surroundings:\nΔS_surroundings = q_surr / T = -ΔH_system / T.\n\nSubstitute into Second Law:\nΔS_total = ΔS_system - (ΔH_system / T) > 0.\n\nMultiply throughout by T:\nT ΔS_total = T ΔS_system - ΔH_system > 0.\nMultiply by -1 (inequality reverses):\n-T ΔS_total = ΔH_system - T ΔS_system < 0.\n\nDefining change in Gibbs free energy as ΔG = -T ΔS_total:\nΔG = ΔH - T ΔS.\nFor spontaneity at constant T and P: ΔG < 0.\n\n(b) Numerical Calculation:\nGiven:\nΔH = -110 kJ/mol = -110,000 J/mol\nΔS = -150 J/(K·mol)\n\nCondition for spontaneity: ΔG < 0\nΔH - T ΔS < 0\n-110,000 - T (-150) < 0\n-110,000 + 150 T < 0\n150 T < 110,000\nT < 110,000 / 150 = 733.3 K.\n\nConclusion:\nThe reaction is spontaneous at temperatures BELOW 733.3 K.',
        stepMarking: [
          { step: '(a) Definition of G and derivation from Second Law ΔS_total > 0', marks: '2.5 Marks' },
          { step: '(b) Unit conversion of ΔH to Joules (-110,000 J)', marks: '0.5 Mark' },
          { step: '(b) Setting ΔG = ΔH - TΔS < 0 and solving T < 733.3 K', marks: '2 Marks' }
        ],
        examinerTip: 'Crucial: ΔH is given in kJ and ΔS in J/K. Always convert both to Joules before calculating!',
        commonPitfall: 'Mixing kJ with J directly without converting.'
      },
      {
        id: 'c11-chem-24-q33',
        qNum: 33,
        section: 'E',
        marks: 5,
        topic: 'Hydrocarbons: Electrophilic Aromatic Substitution (Nitration of Benzene)',
        questionText: '(a) Explain the mechanism of nitration of benzene with a mixture of concentrated HNO₃ and concentrated H₂SO₄. Detail the three operational steps:\n    (i) Generation of electrophile\n    (ii) Attack of electrophile to form carbocation intermediate (arenium ion)\n    (iii) Loss of proton to restore aromaticity.\n(b) What is Friedel-Crafts alkylation? Write the chemical equation for the reaction of benzene with methyl chloride in the presence of anhydrous AlCl₃.',
        modelAnswer: '(a) Mechanism of Nitration of Benzene:\nBenzene reacts with a nitrating mixture (conc. HNO₃ + conc. H₂SO₄) at 323–333 K to yield nitrobenzene.\n\nStep 1: Generation of Electrophile (Nitronium ion, NO₂⁺):\nSulfuric acid is a stronger acid than nitric acid and protonates HNO₃:\nHNO₃ + 2 H₂SO₄ ⇌ NO₂⁺ (Nitronium ion) + H₃O⁺ + 2 HSO₄⁻\nThe nitronium ion (NO₂⁺) acts as the active electrophile.\n\nStep 2: Attack of Electrophile (Formation of Arenium Ion / Sigma Complex):\nThe electrophile NO₂⁺ attacks the π-electron cloud of the benzene ring to form a resonance-stabilized carbocation called arenium ion (sigma complex):\nBenzene + NO₂⁺ → [Arenium ion with sp³ hybridized carbon bearing H and NO₂].\nThe arenium ion is stabilized by delocalization of the positive charge over the remaining five carbon atoms (ortho and para positions).\n\nStep 3: Loss of Proton to Restore Aromaticity:\nThe base HSO₄⁻ abstracts a proton (H⁺) from the sp³ carbon bearing the nitro group. The electron pair of the C-H bond returns to the ring, restoring the aromatic sextet and regenerating the catalyst H₂SO₄:\nArenium ion + HSO₄⁻ → Nitrobenzene + H₂SO₄.\n\n(b) Friedel-Crafts Alkylation:\nWhen benzene is treated with an alkyl halide (e.g., CH₃Cl) in the presence of anhydrous aluminium chloride (anhydrous AlCl₃, a Lewis acid catalyst), an alkylbenzene (toluene) is formed.\nEquation:\nC₆H₆ + CH₃Cl —(Anhydrous AlCl₃)→ C₆H₅CH₃ (Toluene) + HCl.',
        stepMarking: [
          { step: '(a) Step 1: Generation of NO₂⁺ nitronium electrophile', marks: '1 Mark' },
          { step: '(a) Step 2: Arenium ion formation and resonance structures', marks: '1.5 Marks' },
          { step: '(a) Step 3: Proton removal and restoration of aromaticity', marks: '1 Mark' },
          { step: '(b) Friedel-Crafts alkylation definition and balanced equation for toluene', marks: '1.5 Marks' }
        ],
        examinerTip: 'H₂SO₄ acts as an acid, while HNO₃ acts as a base by accepting a proton to generate NO₂⁺.',
        commonPitfall: 'Stating that HNO₃ acts as an acid in the nitrating mixture.'
      }
    ]
  }
];
