import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_SCI_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. KVS CENTRALIZED ANNUAL EXAM 2024: CLASS 9 SCIENCE (COMPLETE - 39 Qs)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kvs-c9-sci-2024-annual',
    title: 'KVS Centralized Annual Examination 2024: Class 9 Science (Uniform Paper)',
    subject: 'Science',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'KVS/RO/C9/SCI/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 39,
    generalInstructions: [
      'This question paper consists of 39 questions in 5 sections: Section A to Section E.',
      'Section A: 20 objective type questions of 1 mark each (Q1 to Q16 are MCQs and Q17 to Q20 are Assertion-Reason).',
      'Section B: 6 Very Short Answer type questions of 2 marks each (Q21 to Q26).',
      'Section C: 7 Short Answer type questions of 3 marks each (Q27 to Q33).',
      'Section D: 3 Long Answer type questions of 5 marks each (Q34 to Q36).',
      'Section E: 3 Case-Based units of assessment of 4 marks each with sub-parts (Q37 to Q39).',
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs & ASSERTION-REASON (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sci-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Motion: Graphical Interpretation',
        questionText: 'The physical quantity represented by the area under the velocity-time (v-t) graph of a moving object is:',
        options: [
          'A) Acceleration',
          'B) Displacement (or distance travelled)',
          'C) Speed',
          'D) Momentum'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Displacement (or distance travelled).\nArea under velocity-time graph = Velocity × Time = (m/s) × s = metres (m), which represents the displacement of the moving body over the given time interval.',
        stepMarking: [
          { step: 'Option B (Displacement / distance travelled)', marks: '1 Mark' }
        ],
        examinerTip: 'Slope of v-t graph = acceleration; Area under v-t graph = displacement. Slope of s-t graph = velocity.',
        commonPitfall: 'Confusing slope (acceleration) with area (displacement).'
      },
      {
        id: 'c9-sci-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Matter in Our Surroundings: Evaporation Cooling',
        questionText: 'Why does water kept in an earthen pot (matka) become cool during hot summer days?',
        options: [
          'A) Because earthen pot absorbs heat from water',
          'B) Water evaporates through tiny pores of the pot, taking latent heat of vaporization from the remaining water',
          'C) Earthen pot acts as an electrical insulator',
          'D) Due to high convection currents inside the pot'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Water evaporates through tiny pores of the pot, taking latent heat of vaporization from the remaining water.\nAn earthen pot has numerous microscopic pores. Water seeps out through these pores and continuously evaporates into the dry summer air. For evaporation, the escaping water molecules absorb the latent heat of vaporization from the pot and the water inside, causing its temperature to drop.',
        stepMarking: [
          { step: 'Option B (Evaporation through pores absorbing latent heat)', marks: '1 Mark' }
        ],
        examinerTip: 'Evaporation always causes cooling because evaporating particles take latent heat away.',
        commonPitfall: 'Attributing cooling to the soil minerals of the pot.'
      },
      {
        id: 'c9-sci-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Is Matter Around Us Pure?: Tyndall Effect',
        questionText: 'Which of the following mixtures will exhibit the Tyndall effect (scattering of light beam)?',
        options: [
          'A) Salt solution in water',
          'B) Milk (or starch solution)',
          'C) Copper sulphate solution',
          'D) Sugar solution in water'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Milk (or starch solution).\nTyndall effect is exhibited by colloidal solutions where particle diameter is between 1 nm and 1000 nm, large enough to scatter visible light rays. Milk and starch solutions are colloids, while salt, sugar, and copper sulphate solutions are true solutions.',
        stepMarking: [
          { step: 'Option B (Milk / starch solution)', marks: '1 Mark' }
        ],
        examinerTip: 'True solutions do NOT show Tyndall effect because solute particles (<1 nm) are too small to scatter light.',
        commonPitfall: 'Selecting copper sulphate solution because of its blue color.'
      },
      {
        id: 'c9-sci-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Atoms and Molecules: Polyatomic Ion',
        questionText: 'The chemical formula of aluminium sulphate is:',
        options: [
          'A) AlSO₄',
          'B) Al₂(SO₄)₃',
          'C) Al₃(SO₄)₂',
          'D) Al₂(SO₄)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Al₂(SO₄)₃.\nAluminium ion has valency +3 (Al³⁺); Sulphate polyatomic ion has valency -2 (SO₄²⁻).\nBy the criss-cross method of chemical formula writing:\nAl³⁺   SO₄²⁻\n 2       3\nFormula is Al₂(SO₄)₃.',
        stepMarking: [
          { step: 'Option B (Al₂(SO₄)₃)', marks: '1 Mark' }
        ],
        examinerTip: 'Always place polyatomic groups (like SO₄) in parentheses when the subscript is greater than 1.',
        commonPitfall: 'Writing Al₃(SO₄)₂ by swapping charges.'
      },
      {
        id: 'c9-sci-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Structure of the Atom: Rutherford\'s Model',
        questionText: 'Rutherford\'s alpha-particle scattering experiment led to the discovery of:',
        options: [
          'A) Electron',
          'B) Proton',
          'C) Atomic Nucleus',
          'D) Neutron'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Atomic Nucleus.\nIn 1911, Rutherford bombarded a thin gold foil with high-energy alpha particles. A tiny fraction (1 in 12,000) rebounded at 180°, demonstrating that all positive charge and nearly all atomic mass is concentrated in an extremely tiny central core called the Atomic Nucleus.',
        stepMarking: [
          { step: 'Option C (Atomic Nucleus)', marks: '1 Mark' }
        ],
        examinerTip: 'J.J. Thomson discovered electron (1897); Chadwick discovered neutron (1932); Rutherford discovered atomic nucleus (1911).',
        commonPitfall: 'Choosing proton or neutron.'
      },
      {
        id: 'c9-sci-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Fundamental Unit of Life: Suicide Bags',
        questionText: 'Which cell organelle is known as the "suicide bag" of the cell?',
        options: [
          'A) Ribosome',
          'B) Lysosome',
          'C) Mitochondria',
          'D) Centrosome'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Lysosome.\nLysosomes contain powerful hydrolytic digestive enzymes synthesized by the rough endoplasmic reticulum. When a cell gets damaged or undergoes apoptosis, lysosomes burst and their enzymes digest their own damaged cellular components, earning them the name "suicide bags".',
        stepMarking: [
          { step: 'Option B (Lysosome)', marks: '1 Mark' }
        ],
        examinerTip: 'Lysosomes operate at acidic pH and digest cellular waste, foreign bacteria, and worn-out organelles.',
        commonPitfall: 'Confusing ribosomes (protein factories) with lysosomes.'
      },
      {
        id: 'c9-sci-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Tissues: Sclerenchyma Tissue',
        questionText: 'The husk of a coconut is made of which plant tissue, whose cell walls are heavily thickened with lignin?',
        options: [
          'A) Parenchyma',
          'B) Collenchyma',
          'C) Sclerenchyma',
          'D) Aerenchyma'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Sclerenchyma.\nSclerenchyma consists of dead, elongated, narrow cells with heavily lignified cell walls and no intercellular spaces. The husk of a coconut (coir) is made of sclerenchymatous fibers, providing mechanical strength and rigidity.',
        stepMarking: [
          { step: 'Option C (Sclerenchyma)', marks: '1 Mark' }
        ],
        examinerTip: 'Parenchyma = living, thin-walled, storage; Collenchyma = living, corner thickening, flexible; Sclerenchyma = dead, lignified, mechanical stiffness.',
        commonPitfall: 'Selecting collenchyma.'
      },
      {
        id: 'c9-sci-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Motion: Uniform Circular Motion',
        questionText: 'When an object moves in a circular path with constant speed, its motion is:',
        options: [
          'A) Uniform non-accelerated motion',
          'B) Accelerated motion due to continuous change in direction of velocity',
          'C) Motion with constant velocity',
          'D) Motion with zero acceleration'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Accelerated motion due to continuous change in direction of velocity.\nVelocity is a vector quantity having both magnitude (speed) and direction. In circular motion, even if the speed is uniform, the direction of motion changes continuously at every point tangential to the circle. Hence, velocity changes continuously, making it an accelerated motion (centripetal acceleration a = v²/r directed towards the center).',
        stepMarking: [
          { step: 'Option B (Accelerated motion due to continuous direction change)', marks: '1 Mark' }
        ],
        examinerTip: 'Speed is constant, but velocity is variable; acceleration is always directed towards the center.',
        commonPitfall: 'Assuming constant speed implies zero acceleration.'
      },
      {
        id: 'c9-sci-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Force & Laws of Motion: Inertia and Mass',
        questionText: 'Inertia of an object depends directly on its:',
        options: [
          'A) Speed',
          'B) Volume',
          'C) Mass',
          'D) Shape'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Mass.\nMass is the quantitative measure of the inertia of a body. A heavier body has greater inertia (offers greater resistance to any change in its state of rest or uniform motion) than a lighter body.',
        stepMarking: [
          { step: 'Option C (Mass)', marks: '1 Mark' }
        ],
        examinerTip: 'Newton\'s First Law of Motion is also known as the Law of Inertia.',
        commonPitfall: 'Thinking inertia depends on velocity.'
      },
      {
        id: 'c9-sci-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Gravitation: Mass vs Weight on the Moon',
        questionText: 'An object has a mass of 60 kg on the Earth. Its mass and weight on the Moon will be respectively: (g_moon = (1/6) g_earth, g_earth = 10 m/s²)',
        options: [
          'A) 10 kg and 100 N',
          'B) 60 kg and 100 N',
          'C) 60 kg and 600 N',
          'D) 10 kg and 60 N'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 60 kg and 100 N.\n- Mass is a fundamental scalar property representing the quantity of matter in an object and remains constant everywhere in the universe. Mass on Moon = 60 kg.\n- Weight is the gravitational force acting on the object: W_moon = m · g_moon = 60 kg × (10 / 6 m/s²) = 100 N.',
        stepMarking: [
          { step: 'Mass remains 60 kg, Weight = 60 × (10/6) = 100 N (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Mass never changes with location; Weight varies directly with local gravitational acceleration g.',
        commonPitfall: 'Dividing mass by 6 to get 10 kg.'
      },
      {
        id: 'c11-sci-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Work and Energy: Kinetic Energy Formula',
        questionText: 'If the velocity of a moving object is doubled, its kinetic energy becomes:',
        options: [
          'A) Doubled (2 times)',
          'B) Halved (1/2 times)',
          'C) Four times (4 times)',
          'D) Unchanged'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Four times (4 times).\nKinetic energy KE = (1/2) m v².\nWhen velocity is doubled (v\' = 2v):\nKE\' = (1/2) m (2v)² = (1/2) m (4v²) = 4 × [ (1/2) m v² ] = 4 KE.',
        stepMarking: [
          { step: 'KE ∝ v² ⇒ (2)² = 4 times (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Kinetic energy depends on the SQUARE of velocity.',
        commonPitfall: 'Choosing 2 times.'
      },
      {
        id: 'c9-sci-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Sound: Ultrasound Frequency Range',
        questionText: 'Ultrasound waves are sound waves that have frequencies:',
        options: [
          'A) Below 20 Hz',
          'B) Between 20 Hz and 20,000 Hz',
          'C) Above 20,000 Hz (20 kHz)',
          'D) Above 100,000 Hz'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Above 20,000 Hz (20 kHz).\nThe human audible range is 20 Hz to 20,000 Hz. Infrasound frequencies are below 20 Hz (produced by elephants, earthquakes, whales). Ultrasound frequencies are higher than 20 kHz (inaudible to human ears, used by bats, dolphins, and in medical sonography).',
        stepMarking: [
          { step: 'Option C (Above 20,000 Hz / 20 kHz)', marks: '1 Mark' }
        ],
        examinerTip: 'Infrasound < 20 Hz; Audible = 20 Hz to 20 kHz; Ultrasound > 20 kHz.',
        commonPitfall: 'Confusing infrasound with ultrasound.'
      },
      {
        id: 'c9-sci-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Improvement in Food Resources: Macronutrients',
        questionText: 'Which of the following essential plant nutrients is supplied to crops by air and water rather than soil?',
        options: [
          'A) Nitrogen and Phosphorus',
          'B) Carbon, Hydrogen, and Oxygen',
          'C) Potassium and Calcium',
          'D) Iron and Zinc'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Carbon, Hydrogen, and Oxygen.\nPlants obtain Carbon and Oxygen from atmospheric carbon dioxide (air) and Hydrogen from water absorbed by roots. The remaining 13 mineral nutrients (macronutrients and micronutrients) are absorbed from the soil.',
        stepMarking: [
          { step: 'Option B (Carbon, Hydrogen, and Oxygen)', marks: '1 Mark' }
        ],
        examinerTip: '16 essential nutrients: 3 from air/water (C, H, O), 6 macronutrients from soil (N, P, K, Ca, Mg, S), 7 micronutrients from soil.',
        commonPitfall: 'Choosing Nitrogen (absorbed from soil as nitrates/ammonium).'
      },
      {
        id: 'c9-sci-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Matter in Our Surroundings: Sublimation Substance',
        questionText: 'Which of the following substances undergoes sublimation (direct change from solid to gas without entering liquid state) upon heating?',
        options: [
          'A) Sodium chloride',
          'B) Ammonium chloride (and Camphor)',
          'C) Calcium chloride',
          'D) Sugar'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Ammonium chloride (and Camphor).\nSubstances like ammonium chloride (NH₄Cl), camphor, naphthalene, anthracene, and solid carbon dioxide (dry ice) undergo sublimation, converting directly from solid to gaseous vapour upon heating.',
        stepMarking: [
          { step: 'Option B (Ammonium chloride and Camphor)', marks: '1 Mark' }
        ],
        examinerTip: 'Sublimation is used to separate ammonium chloride from a mixture with common salt.',
        commonPitfall: 'Selecting sodium chloride.'
      },
      {
        id: 'c9-sci-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Tissues: Cardiac Muscle Features',
        questionText: 'Cardiac muscle tissue found exclusively in the human heart consists of cells that are:',
        options: [
          'A) Striated, voluntary, and unbranched',
          'B) Cylindrical, branched, and uninucleated (involuntary)',
          'C) Spindle-shaped, involuntary, and unbranched',
          'D) Multinucleated, voluntary, and branched'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Cylindrical, branched, and uninucleated (involuntary).\nCardiac muscle cells are cylindrical, branched, uninucleated, and show faint striations with intercalated discs. They rhythmically contract and relax involuntarily without fatigue throughout life.',
        stepMarking: [
          { step: 'Option B (Cylindrical, branched, and uninucleated involuntary)', marks: '1 Mark' }
        ],
        examinerTip: 'Skeletal: cylindrical, unbranched, multinucleated, voluntary. Smooth: spindle-shaped, unbranched, uninucleated, involuntary. Cardiac: cylindrical, branched, uninucleated, involuntary.',
        commonPitfall: 'Marking cardiac muscle as voluntary.'
      },
      {
        id: 'c9-sci-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Gravitation: Archimedes\' Principle',
        questionText: 'According to Archimedes\' Principle, when an object is fully or partially immersed in a fluid, it experiences an upward buoyant force equal to:',
        options: [
          'A) The volume of the immersed object',
          'B) The weight of the fluid displaced by the object',
          'C) The weight of the immersed object',
          'D) The density of the fluid'
        ],
        correctOption: 'B',
        modelAnswer: 'B) The weight of the fluid displaced by the object.\nArchimedes\' Principle states that when a body is immersed fully or partially in a fluid, it experiences an upward buoyant force equal to the weight of the fluid displaced by the body (F_B = V_displaced · ρ_fluid · g).',
        stepMarking: [
          { step: 'Option B (Weight of fluid displaced by the object)', marks: '1 Mark' }
        ],
        examinerTip: 'This principle explains why steel ships float (they displace an enormous weight of water equal to their own weight).',
        commonPitfall: 'Confusing weight of fluid displaced with weight of the body.'
      },
      {
        id: 'c9-sci-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Temperature During Phase Change',
        questionText: 'Assertion (A): During the boiling of water, temperature remains constant at 100°C even though heat is continuously supplied.\nReason (R): The supplied thermal energy is absorbed as latent heat of vaporization to overcome intermolecular forces of attraction between liquid water molecules.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nDuring a phase transition (like boiling at 100°C), kinetic energy of molecules does not increase; all supplied heat energy is utilized as "latent heat of vaporization" to break the hydrogen bonds and intermolecular forces binding liquid water molecules, resulting in zero temperature rise until all liquid is vaporized.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Latent heat means "hidden heat" because it does not show up as a rise on the thermometer.',
        commonPitfall: 'Assuming heat supply must always increase temperature.'
      },
      {
        id: 'c9-sci-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Action and Reaction Pairs',
        questionText: 'Assertion (A): When a swimmer pushes water backwards, he moves forward.\nReason (R): To every action, there is an equal and opposite reaction acting on different bodies simultaneously.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nAccording to Newton\'s Third Law of Motion, forces always occur in matched action-reaction pairs: the swimmer exerts a backward force (action) on the water, and the water simultaneously exerts an equal and opposite forward force (reaction) on the swimmer, propelling him forward.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Action and reaction NEVER cancel each other out because they act on TWO DIFFERENT objects.',
        commonPitfall: 'Thinking action and reaction act on the same body.'
      },
      {
        id: 'c9-sci-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Plant Epidermis and Cuticle',
        questionText: 'Assertion (A): The aerial parts of desert plants (xerophytes) have a thick waxy coating of cutin on their epidermis.\nReason (R): Cutin is a water-impermeable chemical substance that minimizes water loss through transpiration.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nIn desert plants like cactus, conserving water is vital for survival. The epidermis is coated with a thick waterproof waxy layer of cutin which creates a barrier against excessive evaporation and desiccation.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Suberin performs a similar water- and gas-impermeable role in cork cells of bark.',
        commonPitfall: 'Confusing cutin with suberin or lignin.'
      },
      {
        id: 'c9-sci-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Work Done in Circular Motion',
        questionText: 'Assertion (A): The work done by the gravitational force on the Earth moving in a circular orbit around the Sun is zero.\nReason (R): The centripetal gravitational force is always perpendicular to the instantaneous displacement vector of the Earth.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nWork done is given by W = F · s · cos θ. In a circular orbit, the gravitational pull acts radially towards the Sun while the instantaneous displacement is along the tangent. The angle between force and displacement is θ = 90°. Since cos 90° = 0, work done is identically zero.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Whenever force is perpendicular to displacement (θ = 90°), work done is ZERO.',
        commonPitfall: 'Thinking work must be done because the planet covers huge distances.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: VERY SHORT ANSWER QUESTIONS (Q21 to Q26 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sci-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Matter in Our Surroundings: States of Matter Properties',
        questionText: 'Give two scientific reasons why a wooden chair should be called a solid at room temperature.',
        modelAnswer: 'A wooden chair is categorized as a solid because:\n1. Definite Shape and Definite Volume: It possesses a distinct boundary, rigid shape, and fixed volume that does not conform to the shape of any container.\n2. Incompressibility & High Rigidity: Intermolecular forces of attraction between wood particles are extremely strong and intermolecular spaces are negligible, making it practically incompressible under ordinary applied force.',
        stepMarking: [
          { step: 'Definite shape, fixed volume, and distinct boundaries', marks: '1 Mark' },
          { step: 'High rigidity and negligible compressibility', marks: '1 Mark' }
        ],
        examinerTip: 'Highlight: Fixed shape + Incompressibility + Rigidity.',
        commonPitfall: 'Describing what a chair is used for instead of scientific properties of the solid state.'
      },
      {
        id: 'c9-sci-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Is Matter Around Us Pure?: Physical vs Chemical Changes',
        questionText: 'Classify the following as physical change or chemical change:\n(a) Rusting of an almirah\n(b) Melting of ice into water\n(c) Burning of a candle (wax and wick)\n(d) Dissolving common salt in water.',
        modelAnswer: '(a) Rusting of an almirah: Chemical change (iron reacts chemically with oxygen and moisture to form new substance, hydrated iron oxide).\n(b) Melting of ice into water: Physical change (reversible change of state from solid to liquid without altering chemical composition H₂O).\n(c) Burning of a candle: Both physical and chemical change (melting of wax is a physical change; combustion of candle wick and wax vapour into CO₂ and water vapour is a chemical change).\n(d) Dissolving common salt in water: Physical change (salt can be completely recovered unchanged by evaporation).',
        stepMarking: [
          { step: '(a) Chemical change and (b) Physical change', marks: '1 Mark' },
          { step: '(c) Both physical & chemical and (d) Physical change', marks: '1 Mark' }
        ],
        examinerTip: 'Candle burning is unique: wax melting = physical; wax combustion = chemical.',
        commonPitfall: 'Classifying burning of a candle as purely physical.'
      },
      {
        id: 'c9-sci-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Atoms and Molecules: Molecular Mass Calculation',
        questionText: 'Calculate the molecular mass of:\n(a) Nitric acid (HNO₃)\n(b) Glucose (C₆H₁₂O₆)\n(Atomic masses: H = 1 u, N = 14 u, O = 16 u, C = 12 u).',
        modelAnswer: '(a) Nitric Acid (HNO₃):\nMolecular mass = (1 × H) + (1 × N) + (3 × O)\n= (1 × 1) + (1 × 14) + (3 × 16)\n= 1 + 14 + 48 = 63 u.\n\n(b) Glucose (C₆H₁₂O₆):\nMolecular mass = (6 × C) + (12 × H) + (6 × O)\n= (6 × 12) + (12 × 1) + (6 × 16)\n= 72 + 12 + 96 = 180 u.',
        stepMarking: [
          { step: '(a) HNO₃ = 1 + 14 + 48 = 63 u', marks: '1 Mark' },
          { step: '(b) C₆H₁₂O₆ = 72 + 12 + 96 = 180 u', marks: '1 Mark' }
        ],
        examinerTip: 'SI unit of molecular mass is the unified atomic mass unit (u).',
        commonPitfall: 'Writing units in grams (g) instead of unified mass (u).'
      },
      {
        id: 'c9-sci-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Fundamental Unit of Life: Osmosis in Plant Cells',
        questionText: 'What will happen to a living plant cell when placed in:\n(a) A hypotonic solution (dilute solution with high water concentration)?\n(b) A hypertonic solution (concentrated salt/sugar solution)?',
        modelAnswer: '(a) In a Hypotonic Solution:\nWater enters the cell by endosmosis because the external medium has higher water concentration than cell sap. The cell swells and becomes turgid. The rigid plant cell wall exerts counter wall pressure, preventing the cell from bursting.\n\n(b) In a Hypertonic Solution:\nWater leaves the cell by exosmosis because the cell sap has higher water concentration than external medium. The cytoplasm shrinks away from the cell wall, a phenomenon known as Plasmolysis.',
        stepMarking: [
          { step: '(a) Endosmosis, cell swells and becomes turgid without bursting', marks: '1 Mark' },
          { step: '(b) Exosmosis, cytoplasm shrinks away from wall (plasmolysis)', marks: '1 Mark' }
        ],
        examinerTip: 'Keyword: "Plasmolysis" for hypertonic plant cell shrinkage.',
        commonPitfall: 'Claiming that plant cells burst in hypotonic solutions (cell wall prevents bursting).'
      },
      {
        id: 'c9-sci-24-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Force and Laws of Motion: Newton\'s Second Law Numerical',
        questionText: 'A constant force acts on an object of mass 5 kg for a duration of 2 seconds. It increases the object\'s velocity from 3 m/s to 7 m/s. Find the magnitude of the applied force.',
        modelAnswer: 'Given data:\nMass of object m = 5 kg\nInitial velocity u = 3 m/s\nFinal velocity v = 7 m/s\nTime interval t = 2 s\n\n1. Acceleration (a):\na = (v - u) / t = (7 - 3) / 2 = 4 / 2 = 2 m/s².\n\n2. Force (F):\nAccording to Newton\'s Second Law:\nF = m × a = 5 kg × 2 m/s² = 10 N.\n\nThe magnitude of the applied force is 10 Newtons.',
        stepMarking: [
          { step: 'Acceleration a = (7 - 3)/2 = 2 m/s²', marks: '1 Mark' },
          { step: 'Force F = m × a = 5 × 2 = 10 N', marks: '1 Mark' }
        ],
        examinerTip: 'Write the unit (N or kg m/s²) clearly.',
        commonPitfall: 'Using F = m(v + u)/t.'
      },
      {
        id: 'c9-sci-24-q26',
        qNum: 26,
        section: 'B',
        marks: 2,
        topic: 'Sound: Echo Calculation',
        questionText: 'A person claps his hands near a high cliff and hears the reflected echo after 5 seconds. What is the distance of the cliff from the person if the speed of sound in air is 340 m/s?',
        modelAnswer: 'Given:\nSpeed of sound v = 340 m/s\nTotal round-trip time t = 5 s\n\nEcho travel path:\nSound travels to the cliff and reflects back to the person, covering twice the distance (2d).\n2d = v × t\nd = (v × t) / 2\nd = (340 m/s × 5 s) / 2 = 1700 / 2 = 850 m.\n\nTherefore, the cliff is at a distance of 850 metres.',
        stepMarking: [
          { step: 'Formula 2d = v × t or d = vt/2', marks: '1 Mark' },
          { step: 'Calculation: d = (340 × 5) / 2 = 850 m', marks: '1 Mark' }
        ],
        examinerTip: 'Remember to divide by 2 because the 5 seconds includes both going and returning paths.',
        commonPitfall: 'Multiplying 340 × 5 = 1700 m without dividing by 2.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER QUESTIONS (Q27 to Q33 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sci-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Is Matter Around Us Pure?: Solution, Suspension & Colloid Comparison',
        questionText: 'Differentiate between True Solution, Colloid, and Suspension on the basis of:\n(a) Particle size\n(b) Stability\n(c) Tyndall effect.',
        modelAnswer: 'Comparison Table:\n\n1. True Solution:\n- Particle Size: Extremely small, less than 1 nm (< 10⁻⁹ m).\n- Stability: Completely stable (particles never settle down upon standing).\n- Tyndall Effect: Does NOT scatter light (Tyndall effect absent).\n\n2. Colloid (Colloidal Solution):\n- Particle Size: Intermediate between 1 nm and 1000 nm (10⁻⁹ m to 10⁻⁶ m).\n- Stability: Quite stable (particles do not settle under gravity; require centrifugation).\n- Tyndall Effect: Scatters beam of visible light clearly (Tyndall effect present).\n\n3. Suspension:\n- Particle Size: Large, greater than 1000 nm (> 10⁻⁶ m), visible to naked eye.\n- Stability: Unstable (particles settle down at the bottom upon standing under gravity).\n- Tyndall Effect: Scatters light initially, but effect disappears once suspended particles settle.',
        stepMarking: [
          { step: '(a) Particle size comparison across all three', marks: '1 Mark' },
          { step: '(b) Stability comparison across all three', marks: '1 Mark' },
          { step: '(c) Tyndall effect presence/absence across all three', marks: '1 Mark' }
        ],
        examinerTip: 'Examples: True solution = Salt in water; Colloid = Milk/Ink; Suspension = Chalk powder in water.',
        commonPitfall: 'Listing suspension as stable.'
      },
      {
        id: 'c9-sci-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Structure of the Atom: Bohr-Bury Scheme & Electronic Configuration',
        questionText: 'State the rules proposed by Bohr and Bury for writing the distribution of electrons in different energy levels (shells). Write the electronic configuration and valency of an element with atomic number Z = 17 (Chlorine).',
        modelAnswer: 'Bohr-Bury Scheme Rules:\n1. Maximum capacity of a shell is given by 2n² (where n is the shell number):\n   - K shell (n = 1): 2(1)² = 2 electrons\n   - L shell (n = 2): 2(2)² = 8 electrons\n   - M shell (n = 3): 2(3)² = 18 electrons\n2. Octet Rule: The outermost shell (valence shell) cannot accommodate more than 8 electrons, even if it has capacity for more.\n3. Stepwise Filling: Electrons are not accommodated in a higher shell unless the inner shells are completely filled.\n\nElectronic Configuration of Chlorine (Z = 17):\nTotal electrons = 17.\n- K shell = 2\n- L shell = 8\n- M shell = 7\nConfiguration: 2, 8, 7.\n\nValency of Chlorine:\nSince it has 7 valence electrons, it gains 1 electron to achieve a stable octet (8 - 7 = 1).\nValency = 1.',
        stepMarking: [
          { step: 'Statement of 2n² rule and octet capacity rule', marks: '1.5 Marks' },
          { step: 'Electronic configuration of Cl: 2, 8, 7', marks: '1 Mark' },
          { step: 'Valency = 8 - 7 = 1', marks: '0.5 Mark' }
        ],
        examinerTip: 'Valence electrons = 7, but Valency = 1 (combining capacity). Do not confuse the two!',
        commonPitfall: 'Writing valency as 7.'
      },
      {
        id: 'c9-sci-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Tissues: Meristematic Tissue Types',
        questionText: 'Name the three types of meristematic tissues found in plants on the basis of their location. State the specific function of each.',
        modelAnswer: 'The three types of meristematic tissues are:\n\n1. Apical Meristem:\n- Location: Present at the growing tips of stems and roots.\n- Function: Responsible for primary growth and increases the linear length of stems and roots.\n\n2. Lateral Meristem (Cambium):\n- Location: Present along the lateral sides/margins of the stem and root.\n- Function: Responsible for secondary growth, increasing the girth (diameter/thickness) of the stem and root.\n\n3. Intercalary Meristem:\n- Location: Located at the base of leaves or internodes (e.g., in grasses and bamboo).\n- Function: Facilitates rapid elongation of internodes and regrowth of branches after grazing by herbivores.',
        stepMarking: [
          { step: 'Apical meristem: root/shoot tip, increases length', marks: '1 Mark' },
          { step: 'Lateral meristem: cambium, increases girth/thickness', marks: '1 Mark' },
          { step: 'Intercalary meristem: base of nodes/leaves, internode growth', marks: '1 Mark' }
        ],
        examinerTip: 'Draw a simple diagram of a plant shoot indicating apical at tip, intercalary at node, and lateral on sides.',
        commonPitfall: 'Confusing lateral meristem (thickness) with apical meristem (length).'
      },
      {
        id: 'c9-sci-24-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Motion: Derivation of Kinematic Equation v² - u² = 2as',
        questionText: 'Derive the third equation of motion: v² - u² = 2as graphically using a velocity-time graph for uniformly accelerated motion.',
        modelAnswer: 'Let an object start with initial velocity u at time t = 0 and accelerate uniformly at rate a to reach final velocity v at time t.\n\nOn the velocity-time graph:\n- Initial velocity OA = u\n- Final velocity BC = v\n- Time interval OC = t\n\nThe distance s travelled by the object is represented by the area of the trapezium OABC:\nArea of trapezium = (1/2) × (Sum of parallel sides) × (Perpendicular distance between them)\ns = (1/2) × (OA + BC) × OC\ns = (1/2) × (u + v) × t    ...(Equation 1)\n\nFrom the first equation of motion:\nv = u + a t ⇒ a t = v - u ⇒ t = (v - u) / a    ...(Equation 2)\n\nSubstituting equation (2) into equation (1):\ns = (1/2) × (v + u) × [ (v - u) / a ]\ns = [ (v + u)(v - u) ] / (2a)\ns = (v² - u²) / (2a)\n2 a s = v² - u²\n⇒ v² - u² = 2 a s.\n\nHence proved.',
        stepMarking: [
          { step: 'Area of trapezium formula: s = (1/2)(u + v)t', marks: '1 Mark' },
          { step: 'Expressing t = (v - u)/a from first equation', marks: '1 Mark' },
          { step: 'Algebraic substitution s = (v² - u²)/(2a) ⇒ v² - u² = 2as', marks: '1 Mark' }
        ],
        examinerTip: 'Clearly state: "Area under velocity-time graph equals distance travelled".',
        commonPitfall: 'Arithmetic sign error in (v + u)(v - u).'
      },
      {
        id: 'c9-sci-24-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Gravitation: Universal Law Derivation & Gravitational Force Numerical',
        questionText: 'State Newton\'s Universal Law of Gravitation. Calculate the gravitational force of attraction between the Earth (mass M = 6 × 10²⁴ kg) and an object of mass m = 1 kg on its surface. (Radius of Earth R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²).',
        modelAnswer: '1. Universal Law of Gravitation:\nEvery particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres:\nF = G (m₁ m₂) / r².\n\n2. Numerical Calculation:\nF = (G · M · m) / R²\nSubstitute:\nG = 6.67 × 10⁻¹¹ N m² kg⁻²\nM = 6 × 10²⁴ kg\nm = 1 kg\nR = 6.4 × 10⁶ m\n\nF = [ (6.67 × 10⁻¹¹) × (6 × 10²⁴) × 1 ] / (6.4 × 10⁶)²\n= [ 40.02 × 10¹³ ] / [ 40.96 × 10¹² ]\n= [ 400.2 × 10¹² ] / [ 40.96 × 10¹² ]\n= 400.2 / 40.96 ≈ 9.77 N ≈ 9.8 N.\n\nThe gravitational force of attraction is 9.8 Newtons (which equals the weight of a 1 kg mass).',
        stepMarking: [
          { step: 'Accurate statement and mathematical expression of Universal Law of Gravitation', marks: '1 Mark' },
          { step: 'Substitution of M, m, R, and G', marks: '1 Mark' },
          { step: 'Calculation and final answer F ≈ 9.8 N', marks: '1 Mark' }
        ],
        examinerTip: 'Notice F = 9.8 N is the exact value of mg = 1 kg × 9.8 m/s².',
        commonPitfall: 'Forgetting to square the radius R in the denominator.'
      },
      {
        id: 'c9-sci-24-q32',
        qNum: 32,
        section: 'C',
        marks: 3,
        topic: 'Work and Energy: Law of Conservation of Energy Proof',
        questionText: 'Prove that the total mechanical energy (sum of kinetic energy and potential energy) of a freely falling body of mass m remains constant at all points during its descent from height h.',
        modelAnswer: 'Consider a body of mass m at height h above the ground.\n\nPoint A (At height h, released from rest u = 0):\n- Potential energy: PE_A = m g h\n- Kinetic energy: KE_A = (1/2) m (0)² = 0\n- Total Energy E_A = PE_A + KE_A = m g h + 0 = m g h    ...(1)\n\nPoint B (After falling distance x, height = h - x):\nVelocity v_B: v_B² = 0² + 2gx = 2gx.\n- Potential energy: PE_B = m g (h - x) = m g h - m g x\n- Kinetic energy: KE_B = (1/2) m v_B² = (1/2) m (2gx) = m g x\n- Total Energy E_B = PE_B + KE_B = (m g h - m g x) + m g x = m g h    ...(2)\n\nPoint C (Just striking the ground, height = 0, distance fallen = h):\nVelocity v_C: v_C² = 0² + 2gh = 2gh.\n- Potential energy: PE_C = m g (0) = 0\n- Kinetic energy: KE_C = (1/2) m v_C² = (1/2) m (2gh) = m g h\n- Total Energy E_C = PE_C + KE_C = 0 + m g h = m g h    ...(3)\n\nFrom (1), (2), and (3): E_A = E_B = E_C = m g h.\nThus, the total mechanical energy is conserved throughout free fall.',
        stepMarking: [
          { step: 'Energy at point A: E_A = mgh', marks: '1 Mark' },
          { step: 'Energy at intermediate point B: E_B = mgh', marks: '1 Mark' },
          { step: 'Energy at ground point C: E_C = mgh and conclusion', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure you evaluate all three distinct points: Top (A), Intermediate (B), and Ground (C).',
        commonPitfall: 'Taking height at point B as x instead of (h - x).'
      },
      {
        id: 'c9-sci-24-q33',
        qNum: 33,
        section: 'C',
        marks: 3,
        topic: 'Improvement in Food Resources: Manure vs Fertilizers',
        questionText: 'Differentiate between manure and chemical fertilizers on the basis of:\n(a) Composition\n(b) Effect on soil texture and humus content\n(c) Environmental and water pollution impact.',
        modelAnswer: '1. Composition:\n- Manure: Natural organic substance prepared by the decomposition of plant residues and animal excreta (cow dung, farm waste).\n- Fertilizers: Inorganic commercial chemical salts manufactured in factories containing concentrated plant nutrients (like Urea, NPK).\n\n2. Soil Texture & Humus Content:\n- Manure: Adds abundant organic matter (humus) to the soil, improving soil porosity, aeration, water-holding capacity, and beneficial microbial activity.\n- Fertilizers: Do not provide any humus; continuous long-term excessive use degrades soil structure, disrupts microbial life, and turns soil alkaline or overly acidic.\n\n3. Environmental & Water Pollution:\n- Manure: Completely eco-friendly and biodegradable; causes zero environmental pollution.\n- Fertilizers: Highly soluble; excess chemicals wash away into rivers and lakes via runoff, causing water pollution and eutrophication (killing aquatic life).',
        stepMarking: [
          { step: '(a) Composition: Natural organic vs factory chemical salts', marks: '1 Mark' },
          { step: '(b) Humus and soil texture enhancement vs degradation', marks: '1 Mark' },
          { step: '(c) Eco-friendly vs runoff pollution and eutrophication', marks: '1 Mark' }
        ],
        examinerTip: 'Emphasize that fertilizers give quick short-term yields but degrade soil long-term.',
        commonPitfall: 'Claiming fertilizers are completely bad (they provide precise high-dose nutrients).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q34 to Q36 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sci-24-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Matter in Our Surroundings: Interconversion of States of Matter',
        questionText: '(a) Draw a neat labeled flowchart showing the interconversion of the three states of matter (Solid, Liquid, Gas) including melting, vaporization, condensation, solidification, sublimation, and deposition.\n(b) Define:\n    (i) Latent heat of fusion\n    (ii) Latent heat of vaporization.\n(c) Why does ice at 273 K (0°C) cause more effective cooling than water at the same temperature?',
        modelAnswer: '(a) Flowchart of Interconversion of States of Matter:\n- Solid to Liquid: Melting (Fusion)\n- Liquid to Solid: Solidification (Freezing)\n- Liquid to Gas: Vaporization (Boiling)\n- Gas to Liquid: Condensation\n- Solid to Gas: Sublimation\n- Gas to Solid: Deposition.\n\n(b) Definitions:\n(i) Latent Heat of Fusion:\nThe amount of heat energy required to change 1 kg of a solid into liquid at atmospheric pressure at its melting point without any rise in temperature. (For ice = 3.34 × 10⁵ J/kg).\n\n(ii) Latent Heat of Vaporization:\nThe amount of heat energy required to change 1 kg of a liquid into vapour at atmospheric pressure at its boiling point without any change in temperature. (For water = 22.6 × 10⁵ J/kg).\n\n(c) Why Ice at 273 K Cools More Effectively than Water at 273 K:\nWater at 273 K already contains an extra 3.34 × 10⁵ Joules of latent heat of fusion per kilogram. When ice at 273 K comes in contact with a warm substance, it absorbs not only heat to warm up, but also takes in 3.34 × 10⁵ J/kg of latent heat from the surroundings solely to melt into water. Thus, ice absorbs significantly more heat energy, providing far superior cooling.',
        stepMarking: [
          { step: '(a) Flowchart showing all 6 phase changes with correct terminology', marks: '2 Marks' },
          { step: '(b) Precise definitions of latent heat of fusion and vaporization', marks: '1.5 Marks' },
          { step: '(c) Explanation of extra latent heat absorption by ice', marks: '1.5 Marks' }
        ],
        examinerTip: 'Similarly, steam at 373 K causes more severe burns than boiling water at 373 K due to latent heat of vaporization.',
        commonPitfall: 'Saying ice is colder than 0°C water (both are at the same temperature, 273 K).'
      },
      {
        id: 'c9-sci-24-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Fundamental Unit of Life: Plant Cell vs Animal Cell & Organelles',
        questionText: '(a) Draw a neat labelled diagram of a plant cell and label: Cell wall, Chloroplast, Vacuole, Nucleus, and Mitochondria.\n(b) State three major structural differences between a plant cell and an animal cell.\n(c) Why are mitochondria called the "powerhouses of the cell"? Write the full form of ATP.',
        modelAnswer: '(a) Plant Cell Schematic Labels:\n- Cell Wall: Rigid outer cellulose protective layer.\n- Chloroplast: Double-membraned organelle containing green chlorophyll for photosynthesis.\n- Large Central Vacuole: Prominent sac maintaining turgidity and storing cell sap.\n- Nucleus: Double-membraned control center containing genetic chromatin material.\n- Mitochondria: Sausage-shaped organelle with folded inner cristae for cellular respiration.\n\n(b) Differences Between Plant and Animal Cells:\n1. Cell Wall: Plant cells possess an outer rigid cellulose cell wall; animal cells lack a cell wall (have only plasma membrane).\n2. Plastids: Plant cells contain plastids (chloroplasts, chromoplasts, leucoplasts); animal cells have no plastids.\n3. Vacuoles: Plant cells have a single large central permanent vacuole occupying 50–90% cell volume; animal cells have small, temporary vacuoles.\n4. Centrioles: Plant cells lack centrosomes/centrioles; animal cells have centrioles for spindle formation.\n\n(c) Mitochondria and ATP:\n- Mitochondria are called the "Powerhouses of the Cell" because they carry out aerobic respiration, oxidizing glucose to synthesize energy in the form of ATP molecules, which power all cellular biochemical processes.\n- Full form of ATP: Adenosine Triphosphate.',
        stepMarking: [
          { step: '(a) Plant cell diagram/labels (Cell wall, Chloroplast, Vacuole, Nucleus, Mitochondria)', marks: '2 Marks' },
          { step: '(b) Three valid structural differences between plant and animal cells', marks: '1.5 Marks' },
          { step: '(c) Powerhouse explanation (cellular respiration) and Adenosine Triphosphate', marks: '1.5 Marks' }
        ],
        examinerTip: 'Mitochondria and chloroplasts are semi-autonomous organelles because they possess their own circular DNA and 70S ribosomes.',
        commonPitfall: 'Incorrect expansion of ATP (writing Adenine instead of Adenosine).'
      },
      {
        id: 'c9-sci-24-q36',
        qNum: 36,
        section: 'D',
        marks: 5,
        topic: 'Force and Laws of Motion: Law of Conservation of Momentum',
        questionText: '(a) State the Law of Conservation of Momentum. Derive it using Newton\'s Third Law of Motion for two colliding bodies.\n(b) A bullet of mass 20 g moving with a horizontal velocity of 150 m/s strikes a stationary wooden block of mass 2 kg and remains embedded in it. What is the common velocity of the combined system immediately after impact?',
        modelAnswer: '(a) Law of Conservation of Momentum:\nIn an isolated system where no external unbalanced force acts, the total linear momentum of the system remains strictly constant:\nTotal momentum before collision = Total momentum after collision.\n\nDerivation from Newton\'s Third Law:\nConsider two spheres A and B of masses m₁ and m₂ moving in a straight line with initial velocities u₁ and u₂ (u₁ > u₂). They collide for a time duration t.\nDuring collision:\n- Force exerted by A on B = F_AB = m₂ a₂ = m₂ (v₂ - u₂) / t\n- Force exerted by B on A = F_BA = m₁ a₁ = m₁ (v₁ - u₁) / t\n\nBy Newton\'s Third Law (Action = - Reaction):\nF_AB = - F_BA\nm₂ (v₂ - u₂) / t = - [ m₁ (v₁ - u₁) / t ]\nCancel t on both sides:\nm₂ v₂ - m₂ u₂ = - m₁ v₁ + m₁ u₁\nm₁ v₁ + m₂ v₂ = m₁ u₁ + m₂ u₁\n⇒ m₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂.\nTotal momentum before collision = Total momentum after collision. Proved.\n\n(b) Numerical Calculation:\nGiven:\nMass of bullet m₁ = 20 g = 0.02 kg\nInitial velocity of bullet u₁ = 150 m/s\nMass of wooden block m₂ = 2 kg\nInitial velocity of block u₂ = 0 (stationary)\nLet common velocity of embedded system be v.\n\nTotal momentum before collision:\np_initial = m₁ u₁ + m₂ u₂ = (0.02 × 150) + (2 × 0) = 3.0 + 0 = 3 kg m/s.\n\nTotal mass after impact = m₁ + m₂ = 0.02 + 2 = 2.02 kg.\nTotal momentum after collision:\np_final = (m₁ + m₂) v = 2.02 v.\n\nEquating initial and final momentum:\n2.02 v = 3.0\nv = 3.0 / 2.02 ≈ 1.485 m/s ≈ 1.49 m/s.\n\nThe velocity of the combined system is approximately 1.49 m/s.',
        stepMarking: [
          { step: '(a) Statement of conservation of momentum', marks: '1 Mark' },
          { step: '(a) Derivation using Newton’s Third Law F_AB = -F_BA', marks: '2 Marks' },
          { step: '(b) Conversion of bullet mass to kg (0.02 kg) and momentum equation', marks: '1 Mark' },
          { step: '(b) Common velocity v = 3 / 2.02 ≈ 1.49 m/s', marks: '1 Mark' }
        ],
        examinerTip: 'Embedded collision is a perfectly inelastic collision where the combined mass is (m₁ + m₂).',
        commonPitfall: 'Using 20 g without converting to 0.02 kg.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q37 to Q39 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sci-24-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Rutherford\'s Gold Foil Experiment & Atomic Structure',
        questionText: 'In 1911, Ernest Rutherford directed a beam of fast-moving alpha (α) particles at a thin gold foil of about 1000 atoms thickness.\n\n(i) What are alpha particles? [1 Mark]\n(ii) State two major observations made by Rutherford during this experiment. [1 Mark]\n(iii) (a) What conclusions did Rutherford draw from these observations regarding the structure of the atom? [2 Marks]\n                         OR\n(iii) (b) State the major drawback of Rutherford\'s nuclear model of the atom based on Maxwell\'s electromagnetic theory. [2 Marks]',
        modelAnswer: '(i) Alpha (α) Particles:\nAlpha particles are doubly charged helium ions (He²⁺) having a mass of 4 u and carrying two units of positive charge.\n\n(ii) Two Major Observations:\n1. Most of the fast-moving α-particles passed straight through the gold foil without any deflection.\n2. A small fraction of α-particles were deflected by small and large angles, and approximately 1 in 12,000 rebounded straight back along its path (deflected by 180°).\n\n(iii) (a) Rutherford\'s Conclusions:\n1. Most of the space inside the atom is empty because most α-particles passed through undeflected.\n2. The positive charge and almost the entire mass of the atom is concentrated in an extremely dense, compact central volume called the Nucleus, which exerted strong electrostatic repulsion on the few rebounding α-particles.\n\nOR\n(iii) (b) Major Drawback of Rutherford\'s Model:\nAccording to classical electrodynamics (Maxwell\'s theory), any charged particle (like an electron) revolving in a circular orbit accelerates continuously. An accelerating charged particle must continuously radiate electromagnetic energy. As it radiates energy, its orbital radius would shrink, and the electron would spiral inward and collapse into the nucleus within 10⁻⁸ seconds. If this were true, matter would be highly unstable, which contradicts the known stability of atoms.',
        stepMarking: [
          { step: '(i) Doubly charged helium ions He²⁺', marks: '1 Mark' },
          { step: '(ii) Two observations (straight passage and 180° rebound)', marks: '1 Mark' },
          { step: '(iii)(a) Conclusions: mostly empty space and concentrated nucleus OR (iii)(b) Inability to explain atomic stability via orbital electromagnetic radiation', marks: '2 Marks' }
        ],
        examinerTip: 'Neils Bohr later resolved this drawback by proposing discrete, non-radiating stationary orbits.',
        commonPitfall: 'Stating alpha particles are electrons.'
      },
      {
        id: 'c9-sci-24-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Complex Plant Tissues - Xylem & Phloem',
        questionText: 'Complex permanent tissues in plants are made of more than one type of cell working together as a single unit to transport water, minerals, and organic food.\n\n(i) Name the two complex conducting vascular tissues found in higher plants. [1 Mark]\n(ii) Which component of xylem is living? [1 Mark]\n(iii) (a) Differentiate between xylem and phloem on the basis of materials transported, direction of conduction, and presence of living vs dead cells. [2 Marks]\n                         OR\n(iii) (b) Name the four constituent elements of phloem tissue and state the function of companion cells. [2 Marks]',
        modelAnswer: '(i) The two vascular conducting tissues are:\n1. Xylem\n2. Phloem.\n\n(ii) Living Xylem Element:\nXylem parenchyma is the only living cell component in xylem (tracheids, vessels, and xylem fibers are dead lignified cells).\n\n(iii) (a) Difference between Xylem and Phloem:\n1. Transported Material: Xylem conducts water and dissolved mineral nutrients absorbed by roots; Phloem translocates synthesized organic food (sucrose) from green leaves to storage organs and growing tips.\n2. Direction: Xylem transport is strictly unidirectional (upward from roots to leaves); Phloem translocation is bidirectional (both upward and downward depending on source-sink requirements).\n3. Cell Viability: Most xylem cells are dead (tracheids, vessels, fibers are dead); Most phloem cells are living (sieve tubes, companion cells, phloem parenchyma are living; only phloem fibers are dead).\n\nOR\n(iii) (b) Four Elements of Phloem:\n1. Sieve tubes\n2. Companion cells\n3. Phloem parenchyma\n4. Phloem fibers (bast fibers).\nFunction of Companion Cells: Mature sieve tube elements lack a nucleus; specialized nucleated companion cells maintain pressure gradients in sieve tubes and regulate the loading and unloading of sugars through plasmodesmata connections.',
        stepMarking: [
          { step: '(i) Xylem and Phloem', marks: '1 Mark' },
          { step: '(ii) Xylem parenchyma', marks: '1 Mark' },
          { step: '(iii)(a) Three clear points of comparison (materials, direction, viability) OR (iii)(b) Four elements and companion cell function', marks: '2 Marks' }
        ],
        examinerTip: 'Remember: Xylem conduction is UNIDIRECTIONAL; Phloem translocation is BIDIRECTIONAL.',
        commonPitfall: 'Claiming that xylem transport is bidirectional.'
      },
      {
        id: 'c9-sci-24-q39',
        qNum: 39,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Sonar and Ultrasound Applications',
        questionText: 'SONAR (Sound Navigation and Ranging) is an acoustic technique that uses high-frequency ultrasonic waves to measure the distance, direction, and speed of underwater submerged objects.\n\n(i) Write the full form of SONAR. [1 Mark]\n(ii) What type of sound waves does a SONAR transmitter emit? [1 Mark]\n(iii) (a) A research submarine sends out a sonar pulse to the ocean floor. The reflected echo is received by the detector after 3.2 seconds. If the speed of sound in seawater is 1530 m/s, calculate the depth of the ocean floor at that location. [2 Marks]\n                         OR\n(iii) (b) Mention any two industrial or medical applications of ultrasound other than SONAR. [2 Marks]',
        modelAnswer: '(i) Full Form of SONAR:\nSound Navigation and Ranging.\n\n(ii) Wave Type:\nUltrasonic sound waves (ultrasound with frequency > 20,000 Hz).\n\n(iii) (a) Depth Calculation:\nGiven:\nSpeed of sound in seawater v = 1530 m/s\nRound-trip transit time t = 3.2 s\nDistance covered by pulse = 2d (to bottom and back):\n2d = v × t\nd = (v × t) / 2\nd = (1530 m/s × 3.2 s) / 2 = 4896 / 2 = 2448 m.\n\nThe depth of the ocean bed is 2448 metres (approx 2.45 km).\n\nOR\n(iii) (b) Applications of Ultrasound:\n1. Medical Ultrasonography / Echocardiography: Used to obtain images of internal organs (liver, kidneys, uterus, developing fetus) and heart valve movement non-invasively.\n2. Industrial Flaw Detection & Cleaning: Ultrasound is passed through metal blocks to detect hidden internal cracks/cavities without cutting metal, and used in ultrasonic cleaning baths to clean spiral pipes and electronic components.',
        stepMarking: [
          { step: '(i) Sound Navigation and Ranging', marks: '1 Mark' },
          { step: '(ii) Ultrasonic sound waves / Ultrasound', marks: '1 Mark' },
          { step: '(iii)(a) Depth d = (1530 × 3.2)/2 = 2448 m OR (iii)(b) Two applications (Medical sonography and Industrial flaw detection)', marks: '2 Marks' }
        ],
        examinerTip: 'Depth formula for SONAR is always d = (v × t) / 2.',
        commonPitfall: 'Forgetting to divide by 2.'
      }
    ]
  }
];
