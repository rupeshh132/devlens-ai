import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_10_SCI_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE CLASS 10 SCIENCE 2024 BOARD EXAM (COMPLETE FULL PAPER - SET 31/1/1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c10-sci-2024-board',
    title: 'CBSE Class 10 Science Board Exam 2024 (Complete Original Paper - Set 31/1/1)',
    subject: 'Science',
    targetClass: 'Class 10',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '31/1/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 39,
    generalInstructions: [
      'This question paper consists of 39 questions in 5 sections: Section A to Section E.',
      'Section A consists of 20 objective type questions of 1 mark each (Q1 to Q16 are MCQs, Q17 to Q20 are Assertion-Reason).',
      'Section B consists of 6 Very Short Answer type questions of 2 marks each (Q21 to Q26).',
      'Section C consists of 7 Short Answer type questions of 3 marks each (Q27 to Q33).',
      'Section D consists of 3 Long Answer type questions of 5 marks each (Q34 to Q36).',
      'Section E consists of 3 source-based/case-based units of assessment of 4 marks each with sub-parts (Q37 to Q39).',
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sci-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Chemical Reactions: Decomposition Reaction',
        questionText: 'When lead nitrate powder is heated in a dry test tube, a brown gas is evolved. The brown gas is:',
        options: [
          'A) Nitrous oxide (N₂O)',
          'B) Nitrogen dioxide (NO₂)',
          'C) Nitrogen pentoxide (N₂O₅)',
          'D) Nitric oxide (NO)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Nitrogen dioxide (NO₂).\nWhen solid lead nitrate is heated, thermal decomposition occurs:\n2Pb(NO₃)₂(s) —Δ→ 2PbO(s) + 4NO₂(g) + O₂(g).\nLead monoxide (PbO) is a yellow residue, oxygen is a colourless gas, and nitrogen dioxide (NO₂) is the characteristic brown-coloured pungent gas.',
        stepMarking: [
          { step: 'Correct option B (Nitrogen dioxide NO₂)', marks: '1 Mark' }
        ],
        examinerTip: 'Thermal decomposition of lead nitrate: Brown fumes = NO₂, Yellow solid residue = PbO.',
        commonPitfall: 'Choosing oxygen or nitrous oxide instead of nitrogen dioxide.'
      },
      {
        id: 'c10-sci-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Acids, Bases & Salts: Universal Indicator & pH',
        questionText: 'A solution turns red litmus blue. Its pH is likely to be:',
        options: [
          'A) 1',
          'B) 4',
          'C) 5',
          'D) 10'
        ],
        correctOption: 'D',
        modelAnswer: 'D) 10.\nSubstances that turn red litmus paper blue are basic (alkaline) in nature. On the pH scale, neutral is 7, acidic is < 7, and basic is > 7. Among the given options, only pH = 10 represents a basic solution.',
        stepMarking: [
          { step: 'Basic solution turns red litmus blue ⇒ pH > 7 ⇒ 10 (Option D)', marks: '1 Mark' }
        ],
        examinerTip: 'Mnemonic: B-B (Base turns red litmus Blue).',
        commonPitfall: 'Confusing acidic and basic pH values.'
      },
      {
        id: 'c10-sci-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Metals and Non-metals: Amphoteric Oxides',
        questionText: 'Which of the following pairs of oxides are amphoteric in nature?',
        options: [
          'A) Na₂O and K₂O',
          'B) Al₂O₃ and ZnO',
          'C) CaO and MgO',
          'D) SO₂ and CO₂'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Al₂O₃ and ZnO.\nAmphoteric oxides are metal oxides that react with both acids and bases to produce salt and water. Aluminium oxide (Al₂O₃) and Zinc oxide (ZnO) are classic examples of amphoteric oxides.',
        stepMarking: [
          { step: 'Option B (Al₂O₃ and ZnO)', marks: '1 Mark' }
        ],
        examinerTip: 'Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O; Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O.',
        commonPitfall: 'Assuming all metal oxides are basic.'
      },
      {
        id: 'c10-sci-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Carbon & Its Compounds: Saturated vs Unsaturated Hydrocarbons',
        questionText: 'The molecular formula of an alkyne with 4 carbon atoms is:',
        options: [
          'A) C₄H₁₀',
          'B) C₄H₈',
          'C) C₄H₆',
          'D) C₄H₄'
        ],
        correctOption: 'C',
        modelAnswer: 'C) C₄H₆.\nAlkynes possess at least one carbon-carbon triple bond and follow the general homologous formula CₙH₂ₙ₋₂.\nFor n = 4 carbons:\nHydrogen atoms = 2(4) - 2 = 8 - 2 = 6.\nTherefore, the formula is C₄H₆ (butyne).',
        stepMarking: [
          { step: 'Formula CₙH₂ₙ₋₂ for n = 4 gives C₄H₆ (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'General formulas: Alkane = CₙH₂ₙ₊₂, Alkene = CₙH₂ₙ, Alkyne = CₙH₂ₙ₋₂.',
        commonPitfall: 'Mixing up alkene formula (C₄H₈) with alkyne formula (C₄H₆).'
      },
      {
        id: 'c10-sci-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Life Processes: Site of Photosynthesis',
        questionText: 'In plant leaves, the site of photosynthesis and the green pigment responsible for trapping solar energy are respectively:',
        options: [
          'A) Mitochondria and Chlorophyll',
          'B) Chloroplasts and Chlorophyll',
          'C) Leucoplasts and Carotenoid',
          'D) Ribosomes and Anthocyanin'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Chloroplasts and Chlorophyll.\nPhotosynthesis occurs in specialized green cellular organelles called chloroplasts (specifically within the thylakoid membranes containing chlorophyll pigments that absorb blue and red light).',
        stepMarking: [
          { step: 'Option B (Chloroplasts and Chlorophyll)', marks: '1 Mark' }
        ],
        examinerTip: 'Organelle is chloroplast; pigment is chlorophyll.',
        commonPitfall: 'Confusing chloroplast (organelle) with chlorophyll (pigment molecule).'
      },
      {
        id: 'c10-sci-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Life Processes: Excretion in Humans',
        questionText: 'The functional filtration units of the human kidney are called:',
        options: [
          'A) Neurons',
          'B) Nephrons',
          'C) Alveoli',
          'D) Glomeruli'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Nephrons.\nNephrons are the microscopic structural and functional filtering units of kidneys. Each kidney contains approximately 1 million nephrons composed of Bowman\'s capsule, glomerulus, and renal tubules.',
        stepMarking: [
          { step: 'Option B (Nephrons)', marks: '1 Mark' }
        ],
        examinerTip: 'Neuron = nerve cell (nervous system); Nephron = renal filtration unit (excretory system).',
        commonPitfall: 'Confusing neurons (brain cells) with nephrons (kidney units).'
      },
      {
        id: 'c10-sci-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Control and Coordination: Plant Hormones',
        questionText: 'Which plant hormone is synthesized at the shoot tip and promotes cellular elongation towards light (phototropism)?',
        options: [
          'A) Gibberellin',
          'B) Cytokinin',
          'C) Auxin',
          'D) Abscisic acid'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Auxin.\nAuxin is synthesized at shoot tips. When light shines on one side of a plant, auxin diffuses to the shaded side, stimulating cells on the darker side to elongate faster, causing the shoot to bend towards light (positive phototropism).',
        stepMarking: [
          { step: 'Option C (Auxin)', marks: '1 Mark' }
        ],
        examinerTip: 'Auxin = apical elongation/phototropism; Cytokinin = cell division; Gibberellin = stem elongation; ABA = growth inhibitor/wilting.',
        commonPitfall: 'Selecting cytokinin or gibberellin for phototropic bending.'
      },
      {
        id: 'c10-sci-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'How do Organisms Reproduce?: Vegetative Propagation',
        questionText: 'Vegetative propagation by leaves occurs naturally in:',
        options: [
          'A) Rose',
          'B) Bryophyllum',
          'C) Potato',
          'D) Ginger'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Bryophyllum.\nBryophyllum leaves bear adventitious buds in the notches along the leaf margins. When leaves fall on moist soil, these foliar buds germinate into new independent plantlets.',
        stepMarking: [
          { step: 'Option B (Bryophyllum)', marks: '1 Mark' }
        ],
        examinerTip: 'Potato propagates by stem tubers ("eyes"); Ginger by underground rhizome; Bryophyllum by leaf buds.',
        commonPitfall: 'Choosing potato (propagates through stem, not leaves).'
      },
      {
        id: 'c10-sci-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Heredity: Human Sex Determination',
        questionText: 'In humans, the sex of a child is determined by:',
        options: [
          'A) The size of the ovum',
          'B) The X or Y chromosome contributed by the sperm of the father',
          'C) The age of the mother',
          'D) The nutritional status during pregnancy'
        ],
        correctOption: 'B',
        modelAnswer: 'B) The X or Y chromosome contributed by the sperm of the father.\nHuman females are homogametic (44 + XX) and produce eggs with only X chromosomes. Human males are heterogametic (44 + XY) producing 50% X-bearing and 50% Y-bearing sperms. Fertilization by an X-sperm yields a female (XX), while fertilization by a Y-sperm yields a male (XY).',
        stepMarking: [
          { step: 'Option B (Chromosome contributed by paternal sperm)', marks: '1 Mark' }
        ],
        examinerTip: 'Biologically, the father determines the sex of the child because men produce heterogametic sperms (X or Y).',
        commonPitfall: 'Believing the mother determines the child\'s sex.'
      },
      {
        id: 'c10-sci-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Light: Spherical Mirrors - Concave Mirror',
        questionText: 'To obtain an erect, magnified and virtual image using a concave mirror, where should the object be placed?',
        options: [
          'A) At the focus F',
          'B) Between pole P and focus F',
          'C) At center of curvature C',
          'D) Beyond C'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Between pole P and focus F.\nA concave mirror forms a real and inverted image for all positions beyond F. Only when an object is placed between the Pole (P) and Principal Focus (F) does it form a virtual, erect, and magnified image behind the mirror.',
        stepMarking: [
          { step: 'Option B (Between pole P and focus F)', marks: '1 Mark' }
        ],
        examinerTip: 'This unique property of concave mirrors is utilized in shaving mirrors and dental examination mirrors.',
        commonPitfall: 'Selecting "At F" where the image is formed at infinity.'
      },
      {
        id: 'c10-sci-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Light: Refraction and Optical Density',
        questionText: 'When a ray of light travels from water (n = 1.33) into crown glass (n = 1.52), it bends:',
        options: [
          'A) Away from the normal and speeds up',
          'B) Towards the normal and slows down',
          'C) Towards the normal and speeds up',
          'D) Away from the normal and slows down'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Towards the normal and slows down.\nWater is optically rarer (n = 1.33) than crown glass (n = 1.52). When light enters an optically denser medium, its speed decreases (v = c/n) and it bends towards the normal.',
        stepMarking: [
          { step: 'Option B (Towards the normal and slows down)', marks: '1 Mark' }
        ],
        examinerTip: 'Rarer to Denser: slows down, bends TOWARDS normal. Denser to Rarer: speeds up, bends AWAY from normal.',
        commonPitfall: 'Confusing mass density with optical refractive index.'
      },
      {
        id: 'c10-sci-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Human Eye: Dispersion of Light',
        questionText: 'The splitting of white light into its component colors when passing through a triangular glass prism is called:',
        options: [
          'A) Reflection',
          'B) Total Internal Reflection',
          'C) Dispersion',
          'D) Scattering'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Dispersion.\nDispersion is the phenomenon of splitting of white light into its constituent band of seven colors (VIBGYOR) due to differing speeds and refractive indices for different wavelengths in glass.',
        stepMarking: [
          { step: 'Option C (Dispersion)', marks: '1 Mark' }
        ],
        examinerTip: 'Red light bends the least (longest wavelength, highest speed in glass); Violet light bends the most.',
        commonPitfall: 'Confusing dispersion (prism rainbow) with scattering (blue sky).'
      },
      {
        id: 'c10-sci-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Electricity: Resistance and Length of Conductor',
        questionText: 'A cylindrical wire of length L and cross-sectional area A has resistance R. If its length is doubled to 2L while keeping its volume constant, its new resistance becomes:',
        options: [
          'A) 2R',
          'B) 4R',
          'C) R/2',
          'D) R/4'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 4R.\nSince volume is constant (V = A · L = A\' · L\'):\nWhen length is doubled (L\' = 2L), area becomes half (A\' = A/2).\nOriginal resistance R = ρL/A.\nNew resistance R\' = ρ(2L)/(A/2) = 4 (ρL/A) = 4R.',
        stepMarking: [
          { step: 'Recognizing A halved when L doubled and R\' = 4R (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'When a wire is STRETCHED to n times its length, resistance becomes n²R (here 2² = 4).',
        commonPitfall: 'Assuming area remains unchanged and answering 2R.'
      },
      {
        id: 'c10-sci-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Magnetic Effects of Electric Current: Solenoid',
        questionText: 'The magnetic field inside a long straight current-carrying solenoid is:',
        options: [
          'A) Zero',
          'B) Decreases as we move towards its ends',
          'C) Increases as we move towards its ends',
          'D) Uniform at all points'
        ],
        correctOption: 'D',
        modelAnswer: 'D) Uniform at all points.\nThe magnetic field lines inside a long current-carrying solenoid are in the form of parallel, straight, and equally spaced lines, indicating that the magnetic field is uniform at all internal points.',
        stepMarking: [
          { step: 'Option D (Uniform at all points)', marks: '1 Mark' }
        ],
        examinerTip: 'Inside a solenoid, field lines are parallel and uniform. Outside, the field mimics a bar magnet.',
        commonPitfall: 'Thinking the field is zero inside.'
      },
      {
        id: 'c10-sci-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Our Environment: 10% Law of Energy Transfer',
        questionText: 'According to Lindeman\'s 10% Law, if 10,000 J of solar energy falls on green plants, how much energy is transferred to the primary consumers (herbivores)?',
        options: [
          'A) 1,000 J',
          'B) 100 J',
          'C) 10 J',
          'D) 1 J'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 10 J.\n1. Green plants capture only about 1% of total incident solar energy: 1% of 10,000 J = 100 J trapped by producers (plants).\n2. According to Lindeman\'s 10% law, only 10% of energy stored in plants is transferred to primary consumers: 10% of 100 J = 10 J.',
        stepMarking: [
          { step: 'Step 1: Plants capture 1% of solar energy = 100 J', marks: '0.5 Mark' },
          { step: 'Step 2: Herbivores receive 10% of 100 J = 10 J (Option C)', marks: '0.5 Mark' }
        ],
        examinerTip: 'Trap alert: Plants trap only 1% of INCIDENT sunlight. Between trophic levels, transfer is 10%.',
        commonPitfall: 'Taking 10% of 10,000 J directly to get 1,000 J.'
      },
      {
        id: 'c10-sci-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Our Environment: Biomagnification',
        questionText: 'The progressive accumulation of non-biodegradable toxic pesticides (like DDT) at each successive trophic level of a food chain is known as:',
        options: [
          'A) Eutrophication',
          'B) Biological Magnification',
          'C) Biodegradation',
          'D) Bioprospecting'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Biological Magnification.\nBiological magnification (or biomagnification) refers to the phenomenon where concentration of harmful non-biodegradable chemicals increases progressively at each higher trophic level because these chemicals cannot be metabolized or excreted.',
        stepMarking: [
          { step: 'Option B (Biological Magnification)', marks: '1 Mark' }
        ],
        examinerTip: 'Top carnivores (including humans) accumulate the highest concentration of toxic pesticides in a food chain.',
        commonPitfall: 'Confusing biomagnification with eutrophication (nutrient enrichment of water bodies).'
      },
      {
        id: 'c10-sci-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Rusting of Iron',
        questionText: 'Assertion (A): Rusting of iron is a chemical redox reaction.\nReason (R): During rusting, iron reacts with atmospheric oxygen and moisture to form hydrated ferric oxide (Fe₂O₃·xH₂O).\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nRusting is a redox reaction where iron is oxidized (Fe → Fe³⁺ + 3e⁻) and oxygen is reduced in the presence of water to form hydrated iron(III) oxide (rust, Fe₂O₃·xH₂O). Reason R correctly describes the chemical formation.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Both oxygen AND moisture are mandatory conditions for rusting.',
        commonPitfall: 'Thinking rusting is only a physical change.'
      },
      {
        id: 'c10-sci-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Respiration as Exothermic Reaction',
        questionText: 'Assertion (A): Respiration is an exothermic reaction in living organisms.\nReason (R): In cellular respiration, glucose combines with oxygen to release carbon dioxide, water, and ATP energy.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nDuring cellular respiration, glucose is broken down oxidatively:\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP).\nBecause heat/energy is released in this biochemical reaction, it is categorized as an exothermic reaction.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Photosynthesis is endothermic (absorbs solar energy); Respiration is exothermic (releases energy).',
        commonPitfall: 'Confusing respiration with photosynthesis.'
      },
      {
        id: 'c10-sci-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Domestic Electric Wiring',
        questionText: 'Assertion (A): Appliances with metallic bodies (like electric press, toaster, geyser) are connected to the earth wire.\nReason (R): Earth wire provides a low-resistance conducting path for leakage current to the ground, preventing electric shocks to users.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nEarthing connects metallic appliance casings to a metal plate buried deep in the ground. If any insulation fails and live wire touches the metal body, current flows instantly through the low-resistance earth wire to ground, blowing the fuse or tripping the circuit without giving a fatal shock to the user.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'The green/yellow insulated wire is the earth wire.',
        commonPitfall: 'Assuming the earth wire conducts regular operating current.'
      },
      {
        id: 'c10-sci-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Sky Appears Blue',
        questionText: 'Assertion (A): The sky appears blue to an observer on the Earth\'s surface on a clear sunny day.\nReason (R): Fine atmospheric particles have a size smaller than the wavelength of visible light and scatter shorter blue wavelengths more strongly than red wavelengths.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nAccording to Rayleigh scattering (Scattering intensity ∝ 1/λ⁴), shorter blue wavelengths (around 400 nm) are scattered about 16 times more effectively by air molecules than longer red wavelengths (around 700 nm). The scattered blue light enters our eyes from all directions in the atmosphere.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'In space or on the Moon (no atmosphere), there is no scattering, so the sky appears completely black.',
        commonPitfall: 'Attributing the blue sky to reflection from the ocean.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: VERY SHORT ANSWER QUESTIONS (Q21 to Q26 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sci-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Chemical Reactions: Balancing Chemical Equations',
        questionText: 'Write balanced chemical equations for the following reactions:\n(a) Dilute hydrochloric acid reacts with calcium carbonate.\n(b) Zinc metal reacts with sodium hydroxide solution with liberation of gas.',
        modelAnswer: '(a) Dilute hydrochloric acid reacts with calcium carbonate to form calcium chloride, water, and carbon dioxide gas:\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g) ↑\n\n(b) Zinc reacts with sodium hydroxide to form sodium zincate and hydrogen gas:\nZn(s) + 2NaOH(aq) —Δ→ Na₂ZnO₂(aq) + H₂(g) ↑',
        stepMarking: [
          { step: '(a) Balanced equation: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂', marks: '1 Mark' },
          { step: '(b) Balanced equation: Zn + 2NaOH → Na₂ZnO₂ + H₂', marks: '1 Mark' }
        ],
        examinerTip: 'Sodium zincate formula is Na₂ZnO₂. Do not forget to balance the 2 on NaOH.',
        commonPitfall: 'Writing incorrect formula for sodium zincate like NaZnO₂.'
      },
      {
        id: 'c10-sci-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Acids, Bases & Salts: Plaster of Paris',
        questionText: 'What is Plaster of Paris? Write its chemical formula and chemical equation for its preparation from gypsum.',
        modelAnswer: 'Plaster of Paris (POP) is chemically known as Calcium Sulphate Hemihydrate.\n- Chemical Formula: CaSO₄ · 1/2 H₂O (or (CaSO₄)₂ · H₂O).\n\nPreparation:\nIt is prepared by heating gypsum (CaSO₄ · 2H₂O) carefully to 373 K (100°C):\nCaSO₄ · 2H₂O —(373 K)→ CaSO₄ · 1/2 H₂O + 1 1/2 H₂O\n(Gypsum)                    (Plaster of Paris)   (Water vapour)\n\nPrecaution: If heated above 373 K, all water of crystallization is lost, forming anhydrous calcium sulphate (dead burnt plaster), which loses its setting property.',
        stepMarking: [
          { step: 'Chemical name and formula CaSO₄ · 1/2 H₂O', marks: '1 Mark' },
          { step: 'Balanced preparation equation at 373 K', marks: '1 Mark' }
        ],
        examinerTip: 'Specify temperature 373 K (100°C). Heating above this produces dead burnt plaster.',
        commonPitfall: 'Writing 2H₂O for POP instead of 1/2 H₂O.'
      },
      {
        id: 'c10-sci-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Life Processes: Bile Juice Functions',
        questionText: 'Bile does not contain any digestive enzymes, yet it is essential for the digestion of food. Justify this statement with two reasons.',
        modelAnswer: 'Although bile juice secreted by the liver contains no digestive enzymes, it plays two indispensable roles in digestion:\n\n1. Neutralization of Gastric Acidity:\nFood coming from the acidic stomach is acidic. Bile is alkaline and contains sodium bicarbonate, which neutralizes HCl and makes the medium alkaline for pancreatic enzymes (trypsin and lipase) to act efficiently.\n\n2. Emulsification of Fats:\nFats are present in the duodenum as large insoluble globules. Bile salts break down large fat globules into tiny droplets (micelles), vastly increasing the surface area for pancreatic lipase to digest fats into fatty acids and glycerol.',
        stepMarking: [
          { step: 'Reason 1: Makes acidic food alkaline for pancreatic enzymes', marks: '1 Mark' },
          { step: 'Reason 2: Emulsifies large fat globules into smaller droplets', marks: '1 Mark' }
        ],
        examinerTip: 'Keywords: "alkaline medium" and "emulsification of fats".',
        commonPitfall: 'Stating that bile digests proteins or carbohydrates.'
      },
      {
        id: 'c10-sci-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Control and Coordination: Reflex Arc Components',
        questionText: 'What is a reflex arc? Trace the sequence of events when a person accidentally touches a hot object.',
        modelAnswer: 'A reflex arc is the dedicated neural pathway that controls an involuntary, rapid, and automatic response (reflex action) to an external stimulus without conscious brain processing.\n\nPathway sequence upon touching a hot object:\n1. Receptor: Thermoreceptors / pain receptors in skin of finger detect heat.\n2. Sensory Neuron: Conducts electrical nerve impulse to the spinal cord.\n3. Relay Neuron (Interneuron): Located in the grey matter of the spinal cord, processes impulse and bridges to motor neuron.\n4. Motor Neuron: Transmits the response impulse from spinal cord to effector muscle.\n5. Effector: Biceps muscle contracts instantly, pulling the hand away from the hot object.',
        stepMarking: [
          { step: 'Definition of reflex arc', marks: '0.5 Mark' },
          { step: 'Sequence: Receptor → Sensory neuron → Spinal cord/Relay neuron → Motor neuron → Effector muscle', marks: '1.5 Marks' }
        ],
        examinerTip: 'Draw a simple linear flow: Stimulus → Receptor → Sensory → Relay (Spinal Cord) → Motor → Effector → Response.',
        commonPitfall: 'Stating that the impulse must go to the brain before the hand is pulled away.'
      },
      {
        id: 'c10-sci-24-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Light: Lens Power Calculation',
        questionText: 'A doctor prescribes a corrective lens of power -2.5 D to a student. What is the focal length of the lens? Identify the type of lens and the vision defect.',
        modelAnswer: '1. Calculation of Focal Length (f):\nPower P = 1 / f (in metres)\n⇒ f = 1 / P = 1 / (-2.5 D) = -0.4 m = -40 cm.\n\n2. Lens Type & Eye Defect:\n- Since the power and focal length are negative (-), the corrective lens is a Concave Lens (Diverging lens).\n- A concave lens is used to correct Myopia (Short-sightedness / Near-sightedness).',
        stepMarking: [
          { step: 'Focal length calculation: f = -0.4 m or -40 cm', marks: '1 Mark' },
          { step: 'Identifying concave lens and myopia defect', marks: '1 Mark' }
        ],
        examinerTip: 'Negative power = Concave lens = Myopia; Positive power = Convex lens = Hypermetropia.',
        commonPitfall: 'Forgetting the minus sign in focal length.'
      },
      {
        id: 'c10-sci-24-q26',
        qNum: 26,
        section: 'B',
        marks: 2,
        topic: 'Our Environment: Ozone Depletion',
        questionText: 'How is the ozone layer formed in the upper atmosphere? Name the synthetic chemicals responsible for ozone hole depletion.',
        modelAnswer: 'Formation of Ozone (O₃):\nIn the stratosphere, high-energy UV radiation splits molecular oxygen (O₂) into free nascent oxygen atoms (O):\nO₂ —(UV)→ O + O\nThese reactive nascent oxygen atoms combine with molecular oxygen to form ozone:\nO + O₂ → O₃ (Ozone).\n\nChemicals Responsible for Depletion:\nChlorofluorocarbons (CFCs), halons, and carbon tetrachloride used in refrigerants, air conditioners, and fire extinguishers release active chlorine free radicals that catalytically destroy ozone molecules.',
        stepMarking: [
          { step: 'Formation reactions: O₂ → O + O and O + O₂ → O₃', marks: '1 Mark' },
          { step: 'Naming Chlorofluorocarbons (CFCs)', marks: '1 Mark' }
        ],
        examinerTip: 'Mention the UNEP agreement of 1987 (Montreal Protocol) that froze CFC production.',
        commonPitfall: 'Confusing ozone layer depletion with global warming.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER QUESTIONS (Q27 to Q33 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sci-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Metals & Non-metals: Extraction of Metals (Roasting & Calcination)',
        questionText: 'Differentiate between roasting and calcination with balanced chemical equations using zinc ores as examples. How is zinc extracted from the resulting oxide?',
        modelAnswer: '1. Roasting:\n- Definition: Heating sulphide ores strongly in the presence of excess air below their melting point to convert them into metal oxides.\n- Example: Zinc blende ore (ZnS):\n  2ZnS(s) + 3O₂(g) —Δ→ 2ZnO(s) + 2SO₂(g) ↑\n\n2. Calcination:\n- Definition: Heating carbonate ores strongly in limited or no air to expel CO₂ and convert them into metal oxides.\n- Example: Calamine ore (ZnCO₃):\n  ZnCO₃(s) —Δ→ ZnO(s) + CO₂(g) ↑\n\n3. Extraction of Zinc from Zinc Oxide:\nThe zinc oxide obtained is reduced to metallic zinc by heating with carbon (coke) as a reducing agent:\nZnO(s) + C(s) —Δ→ Zn(s) + CO(g) ↑.',
        stepMarking: [
          { step: 'Roasting definition and balanced equation with ZnS', marks: '1 Mark' },
          { step: 'Calcination definition and balanced equation with ZnCO₃', marks: '1 Mark' },
          { step: 'Reduction equation of ZnO using carbon: ZnO + C → Zn + CO', marks: '1 Mark' }
        ],
        examinerTip: 'Mnemonic: Roasting requires excess air (Roast over open flame); Calcination is for Carbonate ores in limited air.',
        commonPitfall: 'Swapping sulphide ore for calcination and carbonate for roasting.'
      },
      {
        id: 'c10-sci-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Carbon & Its Compounds: Cleansing Action of Soap',
        questionText: 'Explain the cleansing action of soap with the help of a neat labelled diagram of a micelle. Why do soaps fail to cleanse effectively in hard water?',
        modelAnswer: 'Cleansing Action of Soap:\n1. Structure: A soap molecule (e.g., sodium stearate, C₁₇H₃₅COO⁻Na⁺) has two distinct ends:\n   - Hydrophobic Tail: Long hydrocarbon chain that repels water and dissolves in oily/greasy dirt.\n   - Hydrophilic Head: Ionic carboxylate group (-COO⁻Na⁺) that attracts water.\n2. Micelle Formation: In water, soap molecules arrange themselves radially into spherical clusters called micelles. The oily dirt is trapped in the hydrophobic center, while the ionic heads face outward towards water.\n3. Emulsion & Rinsing: Agitation pulls the micelle-entrapped oil globules into the water as an emulsion, which is easily washed away during rinsing.\n\nWhy Soap Fails in Hard Water:\nHard water contains dissolved Ca²⁺ and Mg²⁺ salts. Soap reacts with these ions to form an insoluble white curd-like precipitate called "scum":\n2C₁₇H₃₅COONa + Ca²⁺ → (C₁₇H₃₅COO)₂Ca ↓ (Scum) + 2Na⁺\nThis wastes soap and prevents foaming until all calcium/magnesium ions are precipitated.',
        stepMarking: [
          { step: 'Dual nature of soap (hydrophobic tail + hydrophilic head)', marks: '1 Mark' },
          { step: 'Micelle structure and mechanism of trapping dirt into emulsion', marks: '1 Mark' },
          { step: 'Reaction with Ca²⁺/Mg²⁺ in hard water forming scum', marks: '1 Mark' }
        ],
        examinerTip: 'Synthetic detergents overcome this limitation because their sulphonate salts do not form insoluble precipitates with Ca²⁺/Mg²⁺.',
        commonPitfall: 'Drawing micelle with hydrophilic heads inside and hydrophobic tails outside.'
      },
      {
        id: 'c10-sci-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Life Processes: Double Circulation in Humans',
        questionText: 'What is double circulation? Name the two distinct circulatory pathways in humans and state why double circulation is necessary for mammals and birds.',
        modelAnswer: 'Double circulation is a circulatory mechanism in which blood passes through the heart twice during one complete cycle through the body.\n\nThe Two Pathways:\n1. Pulmonary Circulation:\nDeoxygenated blood from right ventricle → Pulmonary artery → Lungs (oxygenated) → Pulmonary veins → Left atrium.\n\n2. Systemic Circulation:\nOxygenated blood from left ventricle → Aorta → Body tissues (deoxygenated) → Vena cava → Right atrium.\n\nNecessity for Birds and Mammals:\nBirds and mammals are endothermic (warm-blooded) animals that require constant high energy to maintain a constant internal body temperature regardless of ambient environment. Complete anatomical separation of oxygenated and deoxygenated blood by the 4-chambered heart prevents mixing, ensuring highly efficient oxygen delivery to body tissues for maximum ATP generation.',
        stepMarking: [
          { step: 'Definition of double circulation', marks: '0.5 Mark' },
          { step: 'Pulmonary and systemic circuits explained', marks: '1.5 Marks' },
          { step: 'Importance: Prevents mixing, provides high oxygen efficiency for endothermy/body temperature regulation', marks: '1 Mark' }
        ],
        examinerTip: 'Trace the flow clearly: Right heart = Deoxygenated to lungs; Left heart = Oxygenated to body.',
        commonPitfall: 'Writing that pulmonary artery carries oxygenated blood.'
      },
      {
        id: 'c10-sci-24-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Heredity: Mendel\'s Dihybrid Cross',
        questionText: 'In a dihybrid cross between a pea plant with round yellow seeds (RRYY) and a pea plant with wrinkled green seeds (rryy):\n(a) What phenotype and genotype will appear in the F1 generation?\n(b) Write the phenotypic ratio of the F2 generation obtained by selfing F1 plants.\n(c) State the Mendelian law demonstrated by this cross.',
        modelAnswer: '(a) F1 Generation:\n- Parental cross: RRYY (Round Yellow) × rryy (Wrinkled Green)\n- Gametes: RY and ry\n- F1 Genotype: RrYy (All heterozygous)\n- F1 Phenotype: All pea plants produce Round Yellow seeds.\n\n(b) F2 Phenotypic Ratio (Selfing RrYy × RrYy):\nPhenotypic ratio is 9 : 3 : 3 : 1:\n- Round Yellow: 9/16\n- Round Green: 3/16\n- Wrinkled Yellow: 3/16\n- Wrinkled Green: 1/16\n\n(c) Mendelian Law Demonstrated:\nLaw of Independent Assortment: When two pairs of traits are combined in a hybrid, segregation of one pair of characters is completely independent of the other pair during gamete formation.',
        stepMarking: [
          { step: '(a) F1 genotype RrYy and phenotype Round Yellow', marks: '1 Mark' },
          { step: '(b) F2 phenotypic ratio 9 : 3 : 3 : 1 with phenotypes listed', marks: '1 Mark' },
          { step: '(c) Stating Law of Independent Assortment', marks: '1 Mark' }
        ],
        examinerTip: 'Always mention recombinant phenotypes: Round Green (3) and Wrinkled Yellow (3) confirm independent assortment.',
        commonPitfall: 'Writing the monohybrid 3:1 ratio instead of 9:3:3:1.'
      },
      {
        id: 'c10-sci-24-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Light: Convex Lens Numerical',
        questionText: 'An object 5 cm high is placed at a distance of 20 cm in front of a convex lens of focal length 10 cm. Find the position, nature, and size of the image formed.',
        modelAnswer: 'Given data:\nHeight of object h₁ = +5 cm\nObject distance u = -20 cm (by sign convention)\nFocal length of convex lens f = +10 cm\n\nStep 1: Lens Formula:\n1/f = 1/v - 1/u\n1/v = 1/f + 1/u\n1/v = 1/10 + 1/(-20) = 1/10 - 1/20 = (2 - 1)/20 = 1/20\n⇒ v = +20 cm.\nThe image is formed at a distance of 20 cm on the other side of the lens.\n\nStep 2: Magnification and Image Height:\nMagnification m = v / u = (+20) / (-20) = -1.\nAlso m = h₂ / h₁\n-1 = h₂ / 5 ⇒ h₂ = -5 cm.\n\nStep 3: Nature of Image:\n- Since v is positive, the image is Real.\n- Since h₂ and m are negative, the image is Inverted.\n- Size: Same size as the object (5 cm) because the object is placed at 2F₁ (20 cm) and the image is formed at 2F₂ (20 cm).',
        stepMarking: [
          { step: 'Lens formula substitution and calculation of v = +20 cm', marks: '1 Mark' },
          { step: 'Magnification m = -1 and image height h₂ = -5 cm', marks: '1 Mark' },
          { step: 'Nature: Real, inverted, and same size as object', marks: '1 Mark' }
        ],
        examinerTip: 'Object at 2F always forms an inverted image at 2F on the other side with m = -1.',
        commonPitfall: 'Using mirror formula (1/f = 1/v + 1/u) instead of lens formula (1/f = 1/v - 1/u).'
      },
      {
        id: 'c10-sci-24-q32',
        qNum: 32,
        section: 'C',
        marks: 3,
        topic: 'Electricity: Series and Parallel Combination Numerical',
        questionText: 'In the circuit shown, three resistors R₁ = 5 Ω, R₂ = 10 Ω, and R₃ = 30 Ω are connected in parallel across a 12 V battery.\nCalculate:\n(a) Total equivalent resistance of the circuit.\n(b) Total current flowing in the circuit.\n(c) Current flowing through each individual resistor.',
        modelAnswer: '(a) Equivalent Resistance (R_p):\nFor resistors connected in parallel:\n1/R_p = 1/R₁ + 1/R₂ + 1/R₃\n1/R_p = 1/5 + 1/10 + 1/30\nTaking LCM of 5, 10, 30 = 30:\n1/R_p = (6 + 3 + 1) / 30 = 10 / 30 = 1/3\n⇒ R_p = 3 Ω.\n\n(b) Total Current (I_total):\nUsing Ohm\'s law:\nI_total = V / R_p = 12 V / 3 Ω = 4 A.\n\n(c) Current through individual resistors:\nIn parallel, potential difference V across each resistor is the same (12 V):\nI₁ = V / R₁ = 12 / 5 = 2.4 A\nI₂ = V / R₂ = 12 / 10 = 1.2 A\nI₃ = V / R₃ = 12 / 30 = 0.4 A\nCheck: I₁ + I₂ + I₃ = 2.4 + 1.2 + 0.4 = 4.0 A (matches total current).',
        stepMarking: [
          { step: '(a) Equivalent resistance R_p = 3 Ω', marks: '1 Mark' },
          { step: '(b) Total current I = 4 A', marks: '1 Mark' },
          { step: '(c) Individual currents: I₁ = 2.4 A, I₂ = 1.2 A, I₃ = 0.4 A', marks: '1 Mark' }
        ],
        examinerTip: 'In parallel circuits, Voltage remains constant; in series circuits, Current remains constant.',
        commonPitfall: 'Adding resistors directly as 5 + 10 + 30 = 45 Ω.'
      },
      {
        id: 'c10-sci-24-q33',
        qNum: 33,
        section: 'C',
        marks: 3,
        topic: 'Magnetic Effects: Right-Hand Thumb Rule & Fleming\'s Left-Hand Rule',
        questionText: 'State:\n(a) Maxwell\'s Right-Hand Thumb Rule.\n(b) Fleming\'s Left-Hand Rule and mention its application in electrical machines.',
        modelAnswer: '(a) Maxwell\'s Right-Hand Thumb Rule:\nImagine holding a straight current-carrying conductor in your right hand such that the stretched thumb points in the direction of electric current. Then, the fingers curled around the conductor point in the direction of the magnetic field lines (concentric circular loops).\n\n(b) Fleming\'s Left-Hand Rule:\nStretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular to each other:\n- Forefinger points in the direction of the Magnetic Field (B).\n- Middle finger points in the direction of the electric Current (I).\n- Thumb points in the direction of the mechanical Force / Motion (F) experienced by the conductor.\nApplication: Used to determine the direction of mechanical force and rotation of the armature coil in an Electric Motor.',
        stepMarking: [
          { step: '(a) Maxwell’s right-hand thumb rule clearly stated', marks: '1 Mark' },
          { step: '(b) Fleming’s left-hand rule fingers alignment (FBI)', marks: '1.5 Marks' },
          { step: 'Application in electric motor', marks: '0.5 Mark' }
        ],
        examinerTip: 'Mnemonic for Fleming\'s Left-Hand Rule: FBI (Father = Force/Thumb, Brother = Field/Forefinger, Mother/Current = Middle finger).',
        commonPitfall: 'Confusing Left-Hand rule (motor) with Right-Hand rule (generator/induction).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q34 to Q36 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sci-24-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Chemical Substances: Chlor-Alkali Process & Compounds',
        questionText: '(a) What is the chlor-alkali process? Write the balanced chemical equation for the reaction that takes place.\n(b) Name the gases produced at the anode and cathode during this electrolysis.\n(c) Give one important industrial application of:\n    (i) Chlorine gas\n    (ii) Hydrogen gas\n    (iii) Sodium hydroxide\n(d) How is bleaching powder prepared from one of the products of the chlor-alkali process? Write the balanced equation.',
        modelAnswer: '(a) Chlor-Alkali Process:\nWhen electricity is passed through an aqueous solution of sodium chloride (brine), it decomposes to form sodium hydroxide, chlorine gas, and hydrogen gas. It is called "chlor-alkali" because the products are chlorine ("chlor") and sodium hydroxide ("alkali").\nEquation:\n2NaCl(aq) + 2H₂O(l) —(Electrolysis)→ 2NaOH(aq) + Cl₂(g) ↑ + H₂(g) ↑\n\n(b) Electrode Products:\n- At Anode (+ve electrode): Chlorine gas (Cl₂)\n- At Cathode (-ve electrode): Hydrogen gas (H₂)\n(Sodium hydroxide solution forms near the cathode).\n\n(c) Industrial Applications:\n(i) Chlorine gas: Water purification/disinfectant for drinking water and manufacture of PVC, CFCs, and bleaching powder.\n(ii) Hydrogen gas: Fuel for rockets, manufacture of ammonia for fertilizers, and hydrogenation of vegetable oils into margarines.\n(iii) Sodium hydroxide: De-greasing metals, soap and detergent manufacturing, and paper making.\n\n(d) Preparation of Bleaching Powder:\nBleaching powder (calcium oxychloride, CaOCl₂) is prepared by the action of chlorine gas on dry slaked lime [Ca(OH)₂]:\nCa(OH)₂(s) + Cl₂(g) → CaOCl₂(s) + H₂O(l).',
        stepMarking: [
          { step: '(a) Definition and balanced chemical equation', marks: '1.5 Marks' },
          { step: '(b) Anode (Cl₂) and Cathode (H₂)', marks: '0.5 Mark' },
          { step: '(c) Uses of Cl₂, H₂, and NaOH', marks: '1.5 Marks' },
          { step: '(d) Preparation of bleaching powder with balanced equation', marks: '1.5 Marks' }
        ],
        examinerTip: 'Anode attracts anions (Cl⁻ → Cl₂); Cathode attracts cations (H⁺ → H₂).',
        commonPitfall: 'Swapping products at anode and cathode.'
      },
      {
        id: 'c10-sci-24-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Life Processes: Human Alimentary Canal & Digestion',
        questionText: '(a) Draw a neat labelled diagram of the human alimentary canal and label: Stomach, Pancreas, Liver, and Small Intestine.\n(b) Describe the digestion of carbohydrates, proteins, and fats in the small intestine, mentioning the specific enzymes involved.',
        modelAnswer: '(a) Human Alimentary Canal Schematic Labels:\n- Stomach: J-shaped muscular sac that secretes gastric juice (HCl, pepsin, mucus).\n- Liver: Largest gland that secretes bile juice stored in the gall bladder.\n- Pancreas: Leaf-like gland beneath stomach secreting pancreatic juice (trypsin, lipase, amylase).\n- Small Intestine: Longest coiled tube, primary site of complete digestion and nutrient absorption.\n\n(b) Complete Digestion in Small Intestine:\nThe small intestine receives secretions from liver (bile) and pancreas (pancreatic juice), along with its own intestinal juice (succus entericus):\n\n1. Carbohydrate Digestion:\n- Pancreatic amylase breaks down remaining starch and complex polysaccharides into maltose.\n- Intestinal enzymes (maltase, sucrase, lactase) finally convert disaccharides into simple monosaccharides (Glucose).\n\n2. Protein Digestion:\n- Trypsin (activated from trypsinogen by enterokinase) digests proteins and peptones into small peptides.\n- Intestinal peptidases break down peptides into individual Amino Acids.\n\n3. Fat Digestion:\n- Bile salts emulsify large lipid droplets into smaller micelles.\n- Pancreatic lipase hydrolyzes emulsified fats into diglycerides and monoglycerides.\n- Intestinal lipases ultimately convert them into Fatty Acids and Glycerol.\n\nEnd Products: Carbohydrates → Glucose; Proteins → Amino acids; Fats → Fatty acids and Glycerol.',
        stepMarking: [
          { step: '(a) Diagram/clear description of 4 key organs', marks: '2 Marks' },
          { step: '(b) Carbohydrate digestion with amylase/maltase into glucose', marks: '1 Mark' },
          { step: '(b) Protein digestion with trypsin/peptidases into amino acids', marks: '1 Mark' },
          { step: '(b) Fat digestion with bile salts & lipase into fatty acids + glycerol', marks: '1 Mark' }
        ],
        examinerTip: 'Emphasize that the small intestine is the site of COMPLETE digestion of all three macronutrients.',
        commonPitfall: 'Claiming that protein digestion starts in the mouth (saliva only digests starch).'
      },
      {
        id: 'c10-sci-24-q36',
        qNum: 36,
        section: 'D',
        marks: 5,
        topic: 'Electricity: Heating Effect of Current & Joule\'s Law',
        questionText: '(a) State Joule\'s Law of Heating. Write the mathematical expression for the heat produced in a resistor.\n(b) An electric heater rated 1000 W operates on 220 V supply.\n    Calculate:\n    (i) The current drawn by the heater.\n    (ii) The resistance of the heating element.\n    (iii) The heat energy produced in joules if the heater is used for 2 hours.\n    (iv) The commercial cost of energy consumed in 30 days if 1 unit costs ₹ 6.00.',
        modelAnswer: '(a) Joule\'s Law of Heating:\nThe heat H generated in a conductor carrying electric current is:\n1. Directly proportional to the square of current (I²).\n2. Directly proportional to the resistance of the conductor (R).\n3. Directly proportional to the time (t) for which current flows.\nFormula: H = I² R t = V I t = (V² / R) t.\n\n(b) Numerical Solutions (Given: P = 1000 W = 1 kW, V = 220 V):\n\n(i) Current drawn:\nP = V · I ⇒ I = P / V = 1000 / 220 = 4.55 A.\n\n(ii) Resistance of element:\nP = V² / R ⇒ R = V² / P = (220)² / 1000 = 48,400 / 1000 = 48.4 Ω.\n\n(iii) Heat energy in 2 hours:\nTime t = 2 hours = 2 × 3600 = 7200 s.\nHeat H = P × t = 1000 W × 7200 s = 7.2 × 10⁶ Joules (or 7.2 MJ).\n\n(iv) Commercial energy cost in 30 days:\nDaily energy consumption = Power (kW) × Time (h) = 1 kW × 2 h = 2 kWh (2 units/day).\nTotal energy in 30 days = 2 × 30 = 60 kWh (60 units).\nCost = 60 units × ₹ 6.00/unit = ₹ 360.00.',
        stepMarking: [
          { step: '(a) Statement and formula of Joule\'s Law of Heating (H = I²Rt)', marks: '1.5 Marks' },
          { step: '(b)(i) & (ii) Current I = 4.55 A and Resistance R = 48.4 Ω', marks: '1.5 Marks' },
          { step: '(b)(iii) Heat in Joules = 7.2 × 10⁶ J', marks: '1 Mark' },
          { step: '(b)(iv) Total cost calculation = ₹ 360', marks: '1 Mark' }
        ],
        examinerTip: '1 kWh = 1 unit = 3.6 × 10⁶ J. When calculating electricity bills, convert power to kW and time to hours.',
        commonPitfall: 'Using minutes or hours directly in the H = I²Rt formula without converting to SI seconds.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q37 to Q39 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sci-24-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: pH in Everyday Life',
        questionText: 'The pH scale measures hydronium ion concentration. Living organisms function best within a narrow pH range (7.0 to 7.8). Changes in pH cause tooth decay, acid rain, and soil infertility.\n\nAnswer the following questions based on the above information:\n(i) At what pH does tooth decay start in human mouth? Name the enamel material that gets corroded. [1 Mark]\n(ii) What is acid rain, and how does it endanger aquatic life? [1 Mark]\n(iii) (a) A farmer finds that the soil of his agricultural field has a pH of 5.2. Which substances can he add to the soil to neutralize the acidity and restore fertility? Explain why. [2 Marks]\n                         OR\n(iii) (b) Explain how an antacid provides immediate relief from acidity in the stomach. Give one example of a mild antacid. [2 Marks]',
        modelAnswer: '(i) Tooth decay starts when the pH in the mouth falls below 5.5. Tooth enamel is made of calcium hydroxyapatite (a crystalline form of calcium phosphate), which is the hardest substance in the human body but corrodes when oral bacteria ferment food sugars into acids.\n\n(ii) When the pH of rainwater drops below 5.6, it is called acid rain. When acid rain flows into rivers and lakes, it lowers the water pH, inhibiting aquatic fish egg hatching and suffocating aquatic fauna.\n\n(iii) (a) The soil pH is 5.2 (acidic). To neutralize soil acidity, the farmer should add basic materials such as:\n- Quicklime (Calcium oxide, CaO)\n- Slaked lime (Calcium hydroxide, Ca(OH)₂)\n- Chalk / Agricultural limestone (Calcium carbonate, CaCO₃)\nThese bases react with and neutralize excess H⁺ ions in soil, restoring optimal near-neutral pH (6.5 - 7.5).\n\nOR\n(iii) (b) The stomach produces hydrochloric acid (HCl) to activate pepsin. Excess acid causes hyperacidity and burning pain. Antacids are mild, non-toxic basic compounds that neutralize excess hydrochloric acid in a classic neutralization reaction:\nHCl + Base → Salt + Water.\nExample: Milk of magnesia [Magnesium hydroxide, Mg(OH)₂] or Baking soda (Sodium hydrogen carbonate, NaHCO₃).',
        stepMarking: [
          { step: '(i) Mouth pH < 5.5 and calcium hydroxyapatite / calcium phosphate', marks: '1 Mark' },
          { step: '(ii) Rainwater pH < 5.6 and impact on aquatic life', marks: '1 Mark' },
          { step: '(iii)(a) Adding quicklime/slaked lime/chalk with explanation OR (iii)(b) Neutralization by milk of magnesia/baking soda', marks: '2 Marks' }
        ],
        examinerTip: 'Remember the numbers: Acid rain < 5.6; Tooth decay < 5.5; Human body 7.0 - 7.8.',
        commonPitfall: 'Suggesting strong bases like NaOH for agriculture (strong bases would chemically burn crops).'
      },
      {
        id: 'c10-sci-24-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Human Eye Defects & Rainbow Formation',
        questionText: 'A student sitting on the last bench of a classroom finds it difficult to read words written on the blackboard, though he can easily read his textbook.\n\n(i) Name the vision defect the student is suffering from. [1 Mark]\n(ii) State two anatomical causes that lead to this defect. [1 Mark]\n(iii) (a) Name the corrective lens used to rectify this defect and explain how it restores clear distant vision. Draw a ray diagram showing correction. [2 Marks]\n                         OR\n(iii) (b) Explain the atmospheric optical phenomena involved in the formation of a rainbow in the sky after a rain shower. [2 Marks]',
        modelAnswer: '(i) The student is suffering from Myopia (Short-sightedness / Near-sightedness).\n\n(ii) Two anatomical causes of Myopia:\n1. Excessive curvature of the eye cornea/lens (high converging power).\n2. Elongation of the eyeball along the anteroposterior axis, causing parallel light rays from infinity to converge in front of the retina instead of on it.\n\n(iii) (a) Corrective Lens:\nA Concave Lens (Diverging lens) of appropriate focal length is used.\nA concave lens diverges parallel incoming rays from distant objects slightly before they enter the eye, shifting the virtual image to the person\'s far point, allowing the eye lens to focus the rays sharply on the retina.\n\nOR\n(iii) (b) Rainbow Formation:\nA rainbow is a natural optical spectrum formed by tiny suspended spherical raindrops acting as microscopic glass prisms.\nThree successive optical phenomena occur:\n1. Refraction and Dispersion: Sunlight enters a raindrop, refractorily bending and splitting into its seven constituent colors (VIBGYOR).\n2. Total Internal Reflection: Dispersed light strikes the inner back surface of the water droplet and is internally reflected.\n3. Refraction: Light rays undergo second refraction as they emerge out of the droplet into air, reaching the observer’s eye with red at top (~42°) and violet at bottom (~40°).',
        stepMarking: [
          { step: '(i) Myopia / Short-sightedness', marks: '1 Mark' },
          { step: '(ii) Two causes: excessive curvature of lens and elongation of eyeball', marks: '1 Mark' },
          { step: '(iii)(a) Concave lens action OR (iii)(b) Three phenomena: Refraction, Dispersion, and Internal Reflection', marks: '2 Marks' }
        ],
        examinerTip: 'Ensure internal reflection inside the raindrop is highlighted alongside dispersion.',
        commonPitfall: 'Confusing myopia (cannot see far) with hypermetropia (cannot see near).'
      },
      {
        id: 'c10-sci-24-q39',
        qNum: 39,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Domestic Electric Circuits & Safety Devices',
        questionText: 'In our homes, electricity is supplied through underground cables or overhead electric poles at 220 V AC with a frequency of 50 Hz. To protect appliances and occupants, multiple safety features are integrated.\n\n(i) Name the two main wires in a domestic circuit carrying electric potential and write their potential difference. [1 Mark]\n(ii) What causes an electric short circuit in a household circuit? [1 Mark]\n(iii) (a) Explain how an electric fuse prevents damage to costly household appliances during overloading or short circuit. Why must an electric fuse always be placed in the LIVE wire? [2 Marks]\n                         OR\n(iii) (b) State two main advantages of connecting household electrical appliances in parallel rather than in series. [2 Marks]',
        modelAnswer: '(i) The two main wires are:\n1. Live wire (positive, with red/brown insulation) at 220 V.\n2. Neutral wire (negative, with black/blue insulation) at 0 V.\nThe potential difference between them is 220 V.\n\n(ii) Cause of Short Circuit:\nA short circuit occurs when the live wire and neutral wire come in direct physical contact with each other (due to faulty insulation wear-and-tear or appliance damage). The circuit resistance drops almost to zero, causing an enormous surge of electric current that generates intense heat, sparking, and fire hazards.\n\n(iii) (a) Working of Electric Fuse:\nAn electric fuse contains a short piece of wire made of an alloy with low melting point and high resistance (e.g., lead-tin alloy). When excess current flows due to short-circuiting or overloading, Joule heating (H = I²Rt) melts the fuse wire, breaking the circuit instantly and stopping current flow.\nWhy in LIVE wire: If placed in the neutral wire, melting the fuse would break the circuit, but the appliance would remain connected to high potential (220 V) through the live wire. Anyone touching the appliance would still receive a fatal shock. Placing the fuse in the live wire ensures the appliance is completely isolated from high voltage.\n\nOR\n(iii) (b) Two Advantages of Parallel Combination:\n1. Independent Operation: Each appliance has its own dedicated switch. If one appliance is switched off or fails, other appliances continue to operate unaffected (in series, failure of one disconnects all).\n2. Uniform Voltage: Every appliance receives the full rated line voltage (220 V) required for its optimum performance, whereas in series, voltage is divided among appliances.',
        stepMarking: [
          { step: '(i) Live wire (220 V) and Neutral wire (0 V)', marks: '1 Mark' },
          { step: '(ii) Direct contact of live and neutral wires dropping resistance to near zero', marks: '1 Mark' },
          { step: '(iii)(a) Fuse working via Joule heating + explanation of placing in live wire OR (iii)(b) Two parallel advantages (independent switches and constant voltage)', marks: '2 Marks' }
        ],
        examinerTip: 'Always emphasize why fuse is placed in LIVE wire: Safety isolation from 220 V potential.',
        commonPitfall: 'Thinking parallel connection is used to save electricity bills.'
      }
    ]
  }
];
