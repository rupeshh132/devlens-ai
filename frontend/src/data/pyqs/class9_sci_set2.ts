import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_SCI_SET2_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CBSE CLASS 9 SCIENCE OFFICIAL ANNUAL MODEL PAPER 2024-25 (SET 2)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c9-sci-2024-model-set2',
    title: 'CBSE Class 9 Science Official Annual Model Paper 2024-25 (Standard Blueprint - Set 2)',
    subject: 'Science',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'CBSE/C9/SCI/SET2/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
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
      // SECTION A: MCQs (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-s24-s2-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Matter in Our Surroundings: Physical States of Water',
        questionText: 'What is the physical state of water at 250 °C at standard atmospheric pressure?',
        options: [
          'A) Liquid',
          'B) Solid',
          'C) Gaseous (Steam)',
          'D) Supercooled liquid'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Gaseous (Steam).\nThe boiling point of water is 100 °C (373.15 K) at atmospheric pressure. At temperatures exceeding 100 °C (such as 250 °C), all water particles possess kinetic energy far exceeding intermolecular attractive forces, existing completely in the gaseous (vapour/steam) state.',
        stepMarking: [
          { step: 'Option C selected with boiling point exceeding 100 °C rationale', marks: '1 Mark' }
        ],
        examinerTip: 'At 0 °C: water exists as both solid and liquid. At 100 °C: water exists as both liquid and gas. At 250 °C: strictly gaseous state.',
        commonPitfall: 'Confusing 250 °C with room temperature 25 °C.'
      },
      {
        id: 'c9-s24-s2-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Matter in Our Surroundings: Kinetic Theory & Diffusion',
        questionText: 'The rate of diffusion is highest in gases because:',
        options: [
          'A) Gas particles have low speed and very small interparticle spaces',
          'B) Gas particles possess high kinetic energy and large interparticle spaces',
          'C) Gas particles have strong electrostatic attraction',
          'D) Gases have high density compared to liquids and solids'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Gas particles possess high kinetic energy and large interparticle spaces.\nDue to negligible intermolecular forces of attraction, gas particles move at very high velocities in all directions and have extensive interparticle voids, allowing them to rapidly intermingle (diffuse) with other gases.',
        stepMarking: [
          { step: 'Option B selected with kinetic energy and interparticle space reasoning', marks: '1 Mark' }
        ],
        examinerTip: 'Order of diffusion rate: Gases > Liquids > Solids.',
        commonPitfall: 'Selecting option A due to misreading "low speed".'
      },
      {
        id: 'c9-s24-s2-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Matter in Our Surroundings: SI Units of Measurement',
        questionText: 'The official SI unit of temperature is:',
        options: [
          'A) Degree Celsius (°C)',
          'B) Degree Fahrenheit (°F)',
          'C) Kelvin (K)',
          'D) Calorie (cal)'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Kelvin (K).\nKelvin (symbol K) is the base SI unit of thermodynamic temperature. The conversion formula is: T(K) = T(°C) + 273.15.',
        stepMarking: [
          { step: 'Option C selected correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Note that the degree sign (°) is NEVER written with Kelvin: write 300 K, not 300 °K.',
        commonPitfall: 'Selecting Degree Celsius as SI unit.'
      },
      {
        id: 'c9-s24-s2-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Is Matter Around Us Pure: Tyndall Effect in Colloids',
        questionText: 'Which of the following mixtures exhibits the Tyndall effect when a light beam is shone through it?',
        options: [
          'A) Salt solution in water',
          'B) Copper sulphate solution in water',
          'C) Starch solution or Milk',
          'D) Dilute sugar solution'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Starch solution or Milk.\nThe Tyndall effect is the scattering of light by colloidal particles whose diameter ranges between 1 nm and 1000 nm. Starch solution and milk are colloidal solutions, whereas salt, copper sulphate, and sugar form true solutions where particles (< 1 nm) are too tiny to scatter light.',
        stepMarking: [
          { step: 'Option C selected with colloid scattering explanation', marks: '1 Mark' }
        ],
        examinerTip: 'True solutions do NOT show Tyndall effect; Colloids and Suspensions DO scatter light.',
        commonPitfall: 'Selecting copper sulphate solution because of its blue color.'
      },
      {
        id: 'c9-s24-s2-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Atoms and Molecules: Chemical Formula Writing',
        questionText: 'The correct chemical formula of Aluminium Sulphate is:',
        options: [
          'A) AlSO₄',
          'B) Al₂(SO₄)₃',
          'C) Al₃(SO₄)₂',
          'D) Al₂(SO₄)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Al₂(SO₄)₃.\nAluminium ion has valency +3 (Al³⁺) and Sulphate polyatomic ion has valency -2 (SO₄²⁻). Applying the criss-cross method: Al³⁺ SO₄²⁻ ⇒ Al₂(SO₄)₃.',
        stepMarking: [
          { step: 'Option B selected with valency criss-cross proof', marks: '1 Mark' }
        ],
        examinerTip: 'Always put polyatomic ions in parentheses before writing a subscript greater than 1: (SO₄)₃.',
        commonPitfall: 'Writing AlSO₄ or Al₃(SO₄)₂.'
      },
      {
        id: 'c9-s24-s2-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Structure of the Atom: Electronic Configuration & Valency',
        questionText: 'The number of valence electrons in a neutral Chlorine atom (Atomic number Z = 17) is:',
        options: [
          'A) 1',
          'B) 7',
          'C) 8',
          'D) 17'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 7.\nChlorine has atomic number Z = 17. Its Bohr-Bury electronic distribution across shells is: K = 2, L = 8, M = 7. The outermost shell (M shell) has 7 valence electrons. (Note: Its valency is 8 - 7 = 1, but the number of valence electrons is 7).',
        stepMarking: [
          { step: 'Option B selected with 2, 8, 7 electronic configuration', marks: '1 Mark' }
        ],
        examinerTip: 'Do not confuse "valence electrons" (electrons in the outermost shell = 7) with "valency" (combining capacity = 8 - 7 = 1).',
        commonPitfall: 'Writing 1 (which is valency, not number of valence electrons).'
      },
      {
        id: 'c9-s24-s2-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'The Fundamental Unit of Life: Semi-Autonomous Organelles',
        questionText: 'Which of the following cell organelles contains its own DNA and ribosomes, enabling it to synthesize some of its own proteins?',
        options: [
          'A) Golgi Apparatus',
          'B) Lysosome',
          'C) Mitochondria',
          'D) Vacuole'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Mitochondria.\nMitochondria (along with plastids in plant cells) are semi-autonomous organelles because they possess their own circular DNA and 70S ribosomes, allowing them to self-replicate and synthesize protein molecules independently.',
        stepMarking: [
          { step: 'Option C selected with semi-autonomous organelle description', marks: '1 Mark' }
        ],
        examinerTip: 'Mitochondria and Plastids are the ONLY two organelles with their own genetic material in NCERT Class 9.',
        commonPitfall: 'Selecting Golgi apparatus.'
      },
      {
        id: 'c9-s24-s2-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Tissues: Simple Permanent Plant Tissues',
        questionText: 'The plant tissue that provides mechanical support and flexibility, allowing easy bending of tendrils and plant stems without breaking, is:',
        options: [
          'A) Parenchyma',
          'B) Sclerenchyma',
          'C) Collenchyma',
          'D) Aerenchyma'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Collenchyma.\nCollenchyma tissue is composed of living, elongated cells with irregular pectin-cellulose thickenings at the corners and very little intercellular space. It imparts tensile flexibility and mechanical strength to young stems, petioles, and climbing tendrils without breaking.',
        stepMarking: [
          { step: 'Option C selected with living flexible tissue characteristic', marks: '1 Mark' }
        ],
        examinerTip: 'Sclerenchyma = Dead cells, lignified, rigid/hard (e.g. coconut husk). Collenchyma = Living cells, flexible/elastic.',
        commonPitfall: 'Selecting Sclerenchyma (which provides rigidity, not flexible bending).'
      },
      {
        id: 'c9-s24-s2-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Tissues: Complex Vascular Plant Tissues',
        questionText: 'Sieve tubes and companion cells are vital functional components of:',
        options: [
          'A) Xylem',
          'B) Phloem',
          'C) Cambium',
          'D) Cork'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Phloem.\nPhloem consists of four primary elements: sieve tubes, companion cells, phloem parenchyma, and phloem fibres. Sieve tubes work closely with companion cells to conduct food (sucrose) bidirectionally from leaves to all parts of the plant.',
        stepMarking: [
          { step: 'Option B selected correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Xylem components: Tracheids, Vessels, Xylem Parenchyma, Xylem Fibres. Phloem: Sieve tubes, Companion cells, Phloem Parenchyma, Phloem Fibres.',
        commonPitfall: 'Confusing xylem vessels with sieve tubes.'
      },
      {
        id: 'c9-s24-s2-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Motion: Distance and Displacement on Semicircular Path',
        questionText: 'An athlete runs along a semicircular track of radius r from point A to point B. The ratio of distance travelled to the magnitude of displacement is:',
        options: [
          'A) π : 1',
          'B) π : 2',
          'C) 2 : π',
          'D) 1 : 1'
        ],
        correctOption: 'B',
        modelAnswer: 'B) π : 2.\nDistance travelled = length of semicircular arc = π · r.\nDisplacement = shortest straight line from A to B across the diameter = 2r.\nRatio = Distance / Displacement = (π · r) / (2r) = π / 2 (or π : 2).',
        stepMarking: [
          { step: 'Option B selected with (πr) / (2r) = π : 2 derivation', marks: '1 Mark' }
        ],
        examinerTip: 'Distance is the actual curved path length (πr); Displacement is straight diameter length (2r).',
        commonPitfall: 'Writing 2 : π by inverting the ratio.'
      },
      {
        id: 'c9-s24-s2-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Force and Laws of Motion: Linear Momentum',
        questionText: 'The linear momentum of an object of mass m moving with a velocity v is given by:',
        options: [
          'A) (m v)²',
          'B) m v²',
          'C) ½ m v²',
          'D) m v'
        ],
        correctOption: 'D',
        modelAnswer: 'D) m v.\nLinear momentum (p) is defined as the product of mass (m) and velocity (v) of an object: p = m · v. It is a vector quantity having the SI unit kg·m/s.',
        stepMarking: [
          { step: 'Option D selected with p = mv', marks: '1 Mark' }
        ],
        examinerTip: '½ mv² is Kinetic Energy (scalar, Joules), while mv is Linear Momentum (vector, kg·m/s).',
        commonPitfall: 'Selecting ½ mv² (Kinetic Energy).'
      },
      {
        id: 'c9-s24-s2-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Gravitation: Variation of g on Earth Surface',
        questionText: 'The value of acceleration due to gravity (g) on the surface of the Earth:',
        options: [
          'A) Is constant everywhere across the globe',
          'B) Is maximum at the equator and minimum at the poles',
          'C) Is maximum at the poles and minimum at the equator',
          'D) Increases continuously towards the centre of the Earth'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Is maximum at the poles and minimum at the equator.\nSince the Earth is an oblate spheroid flattened at the poles, the equatorial radius (R_e) is about 21 km greater than the polar radius (R_p). From g = GM / R², g is inversely proportional to R². As R_p < R_e, g_poles > g_equator.',
        stepMarking: [
          { step: 'Option C selected with g = GM / R² and polar flattening justification', marks: '1 Mark' }
        ],
        examinerTip: 'At the centre of the Earth, g = 0.',
        commonPitfall: 'Selecting option B assuming equatorial bulge increases gravity.'
      },
      {
        id: 'c9-s24-s2-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Work and Energy: Conservation of Mechanical Energy',
        questionText: 'When a stone of mass m falls freely from a height h towards the ground, its total mechanical energy (Potential Energy + Kinetic Energy) at any point during the fall:',
        options: [
          'A) Continuously increases',
          'B) Continuously decreases',
          'C) Remains strictly constant',
          'D) First increases and then decreases'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Remains strictly constant.\nAccording to the Law of Conservation of Energy, in the absence of air resistance, potential energy lost during free fall is precisely converted into kinetic energy: Total Energy = E_p + E_k = mgh = constant at all instants.',
        stepMarking: [
          { step: 'Option C selected with E_p + E_k = constant explanation', marks: '1 Mark' }
        ],
        examinerTip: 'As the object drops, PE decreases while KE increases by the exact same amount.',
        commonPitfall: 'Thinking total energy increases because velocity increases.'
      },
      {
        id: 'c9-s24-s2-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Sound: Audible Hearing Range in Humans',
        questionText: 'The audible frequency range for normal human hearing is approximately:',
        options: [
          'A) 20 Hz to 20,000 Hz',
          'B) 2 Hz to 2,000 Hz',
          'C) 200 Hz to 200,000 Hz',
          'D) 0 Hz to 20 Hz'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 20 Hz to 20,000 Hz.\nFrequencies below 20 Hz are infrasonic (heard by whales, elephants, rhinoceroses), and frequencies above 20,000 Hz (20 kHz) are ultrasonic (heard by bats, dolphins, dogs). Humans can hear sound strictly between 20 Hz and 20,000 Hz.',
        stepMarking: [
          { step: 'Option A selected with audible limits', marks: '1 Mark' }
        ],
        examinerTip: '20,000 Hz is often written as 20 kHz.',
        commonPitfall: 'Selecting 200 Hz to 20,000 Hz.'
      },
      {
        id: 'c9-s24-s2-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Sound: Ultrasound Technology (SONAR)',
        questionText: 'SONAR (Sound Navigation and Ranging) is an apparatus that utilizes which wave phenomenon to determine underwater depth?',
        options: [
          'A) Infrasonic wave dispersion',
          'B) Reflection of ultrasonic waves',
          'C) Refraction of electromagnetic radio waves',
          'D) Gravitational wave resonance'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Reflection of ultrasonic waves.\nSONAR consists of a transmitter and a detector installed in a ship. High-frequency ultrasonic sound pulses travel to the ocean bottom, reflect from the seabed or underwater reefs, and are captured by the detector to calculate depth via 2d = v · t.',
        stepMarking: [
          { step: 'Option B selected with ultrasound reflection principle', marks: '1 Mark' }
        ],
        examinerTip: 'Ultrasound is used because its high frequency enables it to penetrate deep water without dispersing.',
        commonPitfall: 'Selecting radio waves (which belong to RADAR, not SONAR).'
      },
      {
        id: 'c9-s24-s2-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Improvement in Food Resources: Plant Nutrients',
        questionText: 'Which major macro-nutrient provided by chemical fertilizers promotes vigorous green vegetative leaf growth in crops?',
        options: [
          'A) Potassium',
          'B) Phosphorus',
          'C) Nitrogen',
          'D) Iron'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Nitrogen.\nNitrogen (supplied via urea and ammonium sulphate) is an essential macro-nutrient required for the synthesis of proteins, nucleic acids, and chlorophyll, directly fostering lush, green vegetative shoot and leaf growth.',
        stepMarking: [
          { step: 'Option C selected with macro-nutrient nitrogen role', marks: '1 Mark' }
        ],
        examinerTip: 'NPK: N = Nitrogen (vegetative growth), P = Phosphorus (root and flower development), K = Potassium (disease resistance and stomata regulation).',
        commonPitfall: 'Confusing nitrogen with phosphorus.'
      },
      {
        id: 'c9-s24-s2-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Matter in Our Surroundings: Latent Heat of Vaporisation (Assertion-Reason)',
        questionText: 'Assertion (A): Steam at 100 °C causes much more severe burns to human skin than boiling water at 100 °C.\nReason (R): Steam particles possess extra latent heat of vaporisation (2.26 × 10⁶ J/kg) absorbed during phase change.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nAlthough both are at 100 °C, when 1 kg of steam condenses on skin, it releases 2.26 × 10⁶ J of latent heat before cooling down as hot water, delivering dramatically more thermal energy and causing deeper tissue burns. Reason (R) correctly explains Assertion (A).',
        stepMarking: [
          { step: 'Option A selected with latent heat energy release verified', marks: '1 Mark' }
        ],
        examinerTip: 'Latent heat of vaporisation of water = 2.26 × 10⁶ J/kg (approx 540 cal/g).',
        commonPitfall: 'Assuming both have the same thermal burn effect because both are at 100 °C.'
      },
      {
        id: 'c9-s24-s2-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'The Fundamental Unit of Life: Lysosome Function (Assertion-Reason)',
        questionText: 'Assertion (A): Lysosomes are commonly known as the "suicide bags" of a cell.\nReason (R): Lysosomes are the primary site of aerobic cellular respiration and ATP generation.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (A) is true but (R) is false.\nAssertion (A) is true: when a cell gets damaged or dies, lysosomes burst and their powerful hydrolytic enzymes digest their own damaged cellular components. Reason (R) is false: Mitochondria, NOT lysosomes, are the site of cellular respiration and ATP generation.',
        stepMarking: [
          { step: 'Option C selected with true assertion and false reason', marks: '1 Mark' }
        ],
        examinerTip: 'Lysosomes = digestive/suicide bags; Mitochondria = ATP powerhouses.',
        commonPitfall: 'Believing both statements are true without checking organelle functions.'
      },
      {
        id: 'c9-s24-s2-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Motion: Uniform Circular Motion (Assertion-Reason)',
        questionText: 'Assertion (A): An object undergoing uniform circular motion moves with an accelerated motion directed radially inwards.\nReason (R): In uniform circular motion, the speed remains constant but the direction of velocity changes continuously at every instant.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nVelocity is a vector having both magnitude (speed) and direction. Because direction changes at every tangent point along the circle, velocity changes continuously. Rate of change of velocity produces centripetal acceleration directed towards the centre. Reason (R) directly explains Assertion (A).',
        stepMarking: [
          { step: 'Option A selected with vector velocity direction change verified', marks: '1 Mark' }
        ],
        examinerTip: 'Uniform circular motion has constant speed, but variable velocity and non-zero acceleration.',
        commonPitfall: 'Assuming acceleration is zero because speed is constant.'
      },
      {
        id: 'c9-s24-s2-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Improvement in Food Resources: Organic Farming (Assertion-Reason)',
        questionText: 'Assertion (A): Organic farming is an eco-friendly agricultural system that minimizes environmental contamination.\nReason (R): Organic farming avoids synthetic chemical fertilizers and pesticides, utilizing organic manures, biofertilizers, and bio-pesticides like neem extracts.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nOrganic farming eliminates synthetic chemical inputs that leach into groundwater or cause biomagnification, replacing them with farm waste, compost, neem leaf sprays, and Rhizobium biofertilizers, ensuring ecological safety. Reason (R) correctly explains Assertion (A).',
        stepMarking: [
          { step: 'Option A selected with organic farming definition verified', marks: '1 Mark' }
        ],
        examinerTip: 'Key features of organic farming: organic manures, bio-fertilizers, biological pest control, crop rotation.',
        commonPitfall: 'Selecting option B assuming R is an independent fact.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: VERY SHORT ANSWER (Q21 to Q26 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-s24-s2-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Matter in Our Surroundings: Evaporation in Daily Life',
        questionText: 'Give scientific reasons for the following observations:\n(a) A desert room cooler cools significantly better on a hot, dry day. (1 Mark)\n(b) We are able to sip hot tea or milk faster from a saucer than from a cup. (1 Mark)',
        modelAnswer: '(a) On a hot, dry day, the atmospheric temperature is high and humidity (moisture content of air) is very low. Low humidity and high temperature dramatically increase the rate of water evaporation from the cooler\'s wet pads. Because evaporation absorbs latent heat of vaporisation from the surroundings, it produces an enhanced cooling effect.\n\n(b) A saucer provides a much larger surface area than a cup. Since evaporation is a surface phenomenon, increasing surface area increases the rate of evaporation, thereby cooling the hot tea much faster.',
        stepMarking: [
          { step: '(a) Linking low humidity and high temperature to enhanced latent heat absorption', marks: '1 Mark' },
          { step: '(b) Explaining larger surface area increases evaporation rate and cooling', marks: '1 Mark' }
        ],
        examinerTip: 'Always cite "evaporation causes cooling by absorbing latent heat" in reasoning questions.',
        commonPitfall: 'Giving vague answers without mentioning humidity or surface area.'
      },
      {
        id: 'c9-s24-s2-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Is Matter Around Us Pure: True Solution vs Colloidal Solution',
        questionText: 'Differentiate between a True Solution and a Colloidal Solution on the basis of:\n(i) Solute particle size (1 Mark)\n(ii) Tyndall Effect behaviour (1 Mark)',
        modelAnswer: 'Comparison Table:\n\n1. Solute Particle Size:\n   • True Solution: Particle diameter is less than 1 nanometer (< 10⁻⁹ m or < 1 nm); cannot be seen even under an electron microscope.\n   • Colloidal Solution: Particle diameter lies intermediate between 1 nm and 1000 nm (10⁻⁹ m to 10⁻⁶ m).\n\n2. Tyndall Effect:\n   • True Solution: Solute particles are too small to scatter light; hence it does NOT exhibit Tyndall effect.\n   • Colloidal Solution: Colloidal particles are sufficiently large to scatter a light beam, rendering its path clearly visible (shows Tyndall effect).',
        stepMarking: [
          { step: '(i) Particle size distinction (< 1 nm vs 1–1000 nm)', marks: '1 Mark' },
          { step: '(ii) Scattering of light / Tyndall effect comparison', marks: '1 Mark' }
        ],
        examinerTip: 'Cite 1 nm (10⁻⁹ m) as the critical threshold dimension in your answer.',
        commonPitfall: 'Saying colloids settle down (that is suspensions; colloids are stable).'
      },
      {
        id: 'c9-s24-s2-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Atoms and Molecules: Molecular Mass Calculation',
        questionText: 'Calculate the molecular mass of:\n(a) Nitric acid (HNO₃) [Atomic masses: H = 1 u, N = 14 u, O = 16 u] (1 Mark)\n(b) Carbon dioxide (CO₂) [Atomic masses: C = 12 u, O = 16 u] (1 Mark)',
        modelAnswer: '(a) Molecular mass of HNO₃:\n    = (1 × Atomic mass of H) + (1 × Atomic mass of N) + (3 × Atomic mass of O)\n    = (1 × 1) + (1 × 14) + (3 × 16)\n    = 1 + 14 + 48\n    = 63 u.\n\n(b) Molecular mass of CO₂:\n    = (1 × Atomic mass of C) + (2 × Atomic mass of O)\n    = (1 × 12) + (2 × 16)\n    = 12 + 32\n    = 44 u.',
        stepMarking: [
          { step: '(a) HNO₃ molecular mass calculated as 63 u', marks: '1 Mark' },
          { step: '(b) CO₂ molecular mass calculated as 44 u', marks: '1 Mark' }
        ],
        examinerTip: 'Do not forget the unit \'u\' (unified mass). Writing numbers without units loses half a mark.',
        commonPitfall: 'Calculation error: 3 × 16 = 48.'
      },
      {
        id: 'c9-s24-s2-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'The Fundamental Unit of Life: Plant Cell Wall & Osmotic Turgidity',
        questionText: 'What is the structural composition of the plant cell wall? Why can plant cells withstand much greater changes in the surrounding hypotonic medium than animal cells?',
        modelAnswer: '1. Composition: The plant cell wall is a rigid, non-living outer covering composed primarily of complex cellulose.\n\n2. Turgidity in Hypotonic Medium:\n   When placed in a dilute (hypotonic) medium, plant cells absorb water via endosmosis and swell up. The swelling cytoplasm exerts pressure against the rigid cell wall (turgor pressure). The tough, non-expandable cellulose wall exerts an equal opposing counter-pressure against the swollen contents. Because of this wall counter-pressure, plant cells become turgid rather than bursting, whereas animal cells (which lack a cell wall) easily lyse and burst.',
        stepMarking: [
          { step: 'Cellulose composition stated', marks: '1 Mark' },
          { step: 'Explanation of wall counter-pressure preventing cell lysis', marks: '1 Mark' }
        ],
        examinerTip: 'Keywords: "Cellulose", "Turgor pressure", "Equal and opposite wall pressure".',
        commonPitfall: 'Saying animal cells shrink in hypotonic medium (they burst, not shrink).'
      },
      {
        id: 'c9-s24-s2-q25',
        qNum: 25,
        section: 'B',
        marks: 2,
        topic: 'Motion: Uniform Acceleration & Kinematics Equations',
        questionText: 'A car accelerates uniformly from 18 km/h to 36 km/h in 5 seconds. Calculate:\n(a) The acceleration of the car. (1 Mark)\n(b) The distance covered by the car in this time interval. (1 Mark)',
        modelAnswer: 'Given data:\nInitial velocity u = 18 km/h = 18 × (5 / 18) m/s = 5 m/s\nFinal velocity v = 36 km/h = 36 × (5 / 18) m/s = 10 m/s\nTime taken t = 5 s\n\n(a) Acceleration:\n    a = (v - u) / t = (10 - 5) / 5 = 5 / 5 = 1 m/s².\n\n(b) Distance covered:\n    Using s = u t + ½ a t²:\n    s = (5 × 5) + ½ (1 × 5²)\n    s = 25 + ½ (25) = 25 + 12.5 = 37.5 m.\n    (Or using v² - u² = 2as: 10² - 5² = 2(1)s => 100 - 25 = 2s => s = 75/2 = 37.5 m).',
        stepMarking: [
          { step: '(a) Converting km/h to m/s and finding a = 1 m/s²', marks: '1 Mark' },
          { step: '(b) Correctly computing distance s = 37.5 m', marks: '1 Mark' }
        ],
        examinerTip: 'Always convert speeds from km/h to m/s by multiplying by 5/18 before applying equations of motion.',
        commonPitfall: 'Using speeds directly as 18 and 36 without converting to m/s.'
      },
      {
        id: 'c9-s24-s2-q26',
        qNum: 26,
        section: 'B',
        marks: 2,
        topic: 'Gravitation & Floatation: Archimedes\' Principle & Relative Density',
        questionText: 'State Archimedes\' Principle. A solid cube of density 1.2 g/cm³ is placed in a beaker containing water of density 1.0 g/cm³. Will it sink or float? Justify your answer.',
        modelAnswer: '1. Archimedes\' Principle:\n   When a body is immersed fully or partially in a fluid, it experiences an upward buoyant force (upthrust) equal to the weight of the fluid displaced by it.\n\n2. Sinking/Floating Decision:\n   The solid cube will SINK to the bottom.\n   Justification: The density of the cube (1.2 g/cm³) is greater than the density of water (1.0 g/cm³). Therefore, the downward gravitational weight of the solid cube exceeds the maximum upward buoyant force that can be exerted by the displaced water.',
        stepMarking: [
          { step: 'Statement of Archimedes\' principle', marks: '1 Mark' },
          { step: 'Stating it will sink with density comparison justification (1.2 > 1.0)', marks: '1 Mark' }
        ],
        examinerTip: 'Condition of floatation: ρ_body ≤ ρ_liquid (floats); ρ_body > ρ_liquid (sinks).',
        commonPitfall: 'Writing it will float because of Archimedes force.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER (Q27 to Q33 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-s24-s2-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Matter in Our Surroundings: Sublimation & Gas Liquefaction',
        questionText: '(a) Define Sublimation. Name two common substances that sublime upon heating. (1.5 Marks)\n(b) Explain the two thermodynamic conditions required to liquefy atmospheric gases into liquids. (1.5 Marks)',
        modelAnswer: '(a) Sublimation: The change of state directly from a solid into a gas upon heating without passing through the intermediate liquid state (and vice versa) is called sublimation.\n    Two sublimable substances: Ammonium Chloride (NH₄Cl), Camphor (or Naphthalene, Dry Ice / Solid CO₂).\n\n(b) Liquefaction of Gases:\n    To liquefy gases, two conditions must be applied simultaneously:\n    1. High Pressure: Compresses the widely separated gas molecules close together, reducing the intermolecular space.\n    2. Low Temperature: Lowers the average kinetic energy of the molecules, allowing intermolecular attractive forces to bind the particles together into the liquid state.',
        stepMarking: [
          { step: '(a) Definition of sublimation + two valid examples named', marks: '1.5 Marks' },
          { step: '(b) Explanation of high pressure (brings particles close) + low temperature (reduces KE)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Mention "Solid Carbon Dioxide (Dry Ice)" stored under high pressure which sublimes directly at 1 atm without melting.',
        commonPitfall: 'Saying high temperature liquefies gases (high temperature actually vaporises liquids).'
      },
      {
        id: 'c9-s24-s2-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Atoms and Molecules: Chemical Formulae by Criss-Cross Method',
        questionText: 'Using the criss-cross valency method, write the chemical formulae of:\n(a) Calcium Chloride (1 Mark)\n(b) Magnesium Hydroxide (1 Mark)\n(c) Sodium Carbonate (1 Mark)',
        modelAnswer: '(a) Calcium Chloride:\n    Symbol/Ion : Ca²⁺    Cl⁻\n    Valency    :  2       1\n    Criss-cross: Ca₁ Cl₂ ⇒ Formula = CaCl₂.\n\n(b) Magnesium Hydroxide:\n    Symbol/Ion : Mg²⁺   OH⁻\n    Valency    :  2       1\n    Criss-cross: Mg₁ (OH)₂ ⇒ Formula = Mg(OH)₂.\n\n(c) Sodium Carbonate:\n    Symbol/Ion : Na⁺    CO₃²⁻\n    Valency    :  1       2\n    Criss-cross: Na₂ (CO₃)₁ ⇒ Formula = Na₂CO₃.',
        stepMarking: [
          { step: '(a) Calcium Chloride: CaCl₂ derived correctly', marks: '1 Mark' },
          { step: '(b) Magnesium Hydroxide: Mg(OH)₂ derived with parentheses', marks: '1 Mark' },
          { step: '(c) Sodium Carbonate: Na₂CO₃ derived correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Omitting brackets in polyatomic ions (writing MgOH₂ instead of Mg(OH)₂) loses full credit.',
        commonPitfall: 'Writing MgOH₂ instead of Mg(OH)₂.'
      },
      {
        id: 'c9-s24-s2-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'The Fundamental Unit of Life: Endomembrane Organelles',
        questionText: 'State the primary structure and functional role of the following cell organelles:\n(a) Endoplasmic Reticulum (Rough ER and Smooth ER) (1.5 Marks)\n(b) Golgi Apparatus (1.5 Marks)',
        modelAnswer: '(a) Endoplasmic Reticulum (ER):\n    • Rough ER (RER): Has ribosomes attached to its outer membrane surface; acts as the primary site of protein synthesis and folding.\n    • Smooth ER (SER): Lacks ribosomes; synthesizes lipids, phospholipids, and steroid hormones. In liver cells of vertebrates, SER detoxifies drugs and metabolic poisons.\n    • Membrane Biogenesis: Proteins and lipids manufactured by RER and SER help in building the cell membrane.\n\n(b) Golgi Apparatus:\n    • Consists of a system of membrane-bound, flattened parallel sacs called "cisternae".\n    • Functions: Packages, modifies, and sorts proteins and lipids synthesized in the ER for delivery to intracellular targets or secretion outside the cell. It is also involved in the formation of lysosomes and complex sugars.',
        stepMarking: [
          { step: '(a) RER protein synthesis + SER lipid synthesis & detoxification described', marks: '1.5 Marks' },
          { step: '(b) Golgi apparatus structure (cisternae) + packaging/secretion & lysosome formation', marks: '1.5 Marks' }
        ],
        examinerTip: 'Highlight the term "Membrane Biogenesis" when discussing the joint function of RER and SER.',
        commonPitfall: 'Confusing the role of RER (proteins) with SER (lipids).'
      },
      {
        id: 'c9-s24-s2-q30',
        qNum: 30,
        section: 'C',
        marks: 3,
        topic: 'Tissues: Animal Muscular Tissues Comparison',
        questionText: 'Compare Striated, Smooth (Unstriated), and Cardiac muscles on the basis of:\n(i) Cell shape and striations (1 Mark)\n(ii) Number and position of nuclei (1 Mark)\n(iii) Voluntary or Involuntary action and location in body (1 Mark)',
        modelAnswer: 'Comparison Table:\n\n1. Striated (Skeletal) Muscle:\n   • Shape: Long, cylindrical, unbranched with alternate light and dark bands (striations).\n   • Nuclei: Multinucleate (many nuclei), located peripherally.\n   • Action & Location: Voluntary (under conscious will); attached to skeletal bones (limbs, neck).\n\n2. Smooth (Unstriated) Muscle:\n   • Shape: Spindle-shaped (tapering at ends), unbranched, without striations.\n   • Nuclei: Uninucleate (single nucleus), located centrally.\n   • Action & Location: Involuntary; found in walls of stomach, intestine, blood vessels, iris of eye.\n\n3. Cardiac Muscle:\n   • Shape: Cylindrical, branched with faint striations.\n   • Nuclei: Uninucleate (single nucleus), located centrally.\n   • Action & Location: Involuntary (rhythmic contraction and relaxation throughout life without fatigue); found exclusively in the heart wall.',
        stepMarking: [
          { step: '(i) Shape and presence/absence of striations across all 3 muscles', marks: '1 Mark' },
          { step: '(ii) Nuclear count and position (multinucleate peripheral vs uninucleate central)', marks: '1 Mark' },
          { step: '(iii) Voluntary/involuntary control and specific body anatomical locations', marks: '1 Mark' }
        ],
        examinerTip: 'Key keyword for cardiac muscle: "cylindrical, branched, uninucleate, rhythmic non-fatiguing".',
        commonPitfall: 'Writing that cardiac muscle is unstriated (it is striated and branched).'
      },
      {
        id: 'c9-s24-s2-q31',
        qNum: 31,
        section: 'C',
        marks: 3,
        topic: 'Force and Laws of Motion: Newton\'s Second Law Derivation',
        questionText: 'State Newton\'s Second Law of Motion. Deriving mathematically, show that force is directly proportional to mass and acceleration (F = ma).',
        modelAnswer: '1. Statement of Second Law:\n   The rate of change of momentum of an object is directly proportional to the applied unbalanced force and takes place in the direction in which the force acts.\n\n2. Mathematical Derivation:\n   Let an object of mass m be moving in a straight line with initial velocity u.\n   When an external unbalanced force F acts for time t, its velocity changes to v.\n   Initial momentum p₁ = m · u\n   Final momentum p₂ = m · v\n   Change in momentum Δp = p₂ - p₁ = m(v - u)\n\n   Rate of change of momentum = Δp / t = m(v - u) / t\n   By Newton\'s Second Law: F ∝ m(v - u) / t\n   Since acceleration a = (v - u) / t:\n   F ∝ m · a\n   F = k · m · a  (where k is a constant of proportionality)\n\n   By defining 1 Unit of Force as the force that produces an acceleration of 1 m/s² on a mass of 1 kg, k = 1.\n   Therefore:\n   F = m · a (Unit: kg·m/s² or Newton, N).',
        stepMarking: [
          { step: 'Formal statement of Second Law', marks: '1 Mark' },
          { step: 'Formulating change in momentum Δp = m(v - u)', marks: '1 Mark' },
          { step: 'Substituting a = (v - u)/t and establishing F = ma with k = 1', marks: '1 Mark' }
        ],
        examinerTip: 'Do not omit the definition of unit force setting k = 1; it is worth half a mark.',
        commonPitfall: 'Writing F = ma directly without the momentum derivation step.'
      },
      {
        id: 'c9-s24-s2-q32',
        qNum: 32,
        section: 'C',
        marks: 3,
        topic: 'Sound: Echo Formation & Minimum Distance Calculation',
        questionText: '(a) What is an Echo? (1 Mark)\n(b) What is the minimum time interval required by the human ear to distinguish an echo from original sound? (0.5 Mark)\n(c) Calculate the minimum distance required from a sound source to a reflecting wall to hear a distinct echo in air at 22 °C (Speed of sound = 344 m/s). (1.5 Marks)',
        modelAnswer: '(a) Echo: The phenomenon of repetition of sound caused by the reflection of sound waves from a distant, hard obstacle (such as a cliff, high wall, or mountain) is called an echo.\n\n(b) Persistence of Hearing: The sensation of sound persists in the human brain for about 0.1 second (1/10th of a second). Hence, the reflected sound must reach the ear after at least 0.1 s to be heard as a distinct echo.\n\n(c) Minimum Distance Calculation:\n    Speed of sound in air at 22 °C (v) = 344 m/s\n    Minimum time gap (t) = 0.1 s\n    Total distance travelled by sound back and forth = 2d = v · t\n    2d = 344 × 0.1\n    2d = 34.4 m\n    d = 34.4 / 2 = 17.2 metres.\n\n    Therefore, the reflecting obstacle must be situated at a minimum distance of 17.2 m.',
        stepMarking: [
          { step: '(a) Definition of echo as reflection of sound', marks: '1 Mark' },
          { step: '(b) Persistence of hearing stated as 0.1 s', marks: '0.5 Mark' },
          { step: '(c) Applying 2d = v · t and calculating d = 17.2 m', marks: '1.5 Marks' }
        ],
        examinerTip: 'Always write the equation 2d = v · t, accounting for the round-trip distance.',
        commonPitfall: 'Forgetting to divide by 2, writing 34.4 m as the minimum distance.'
      },
      {
        id: 'c9-s24-s2-q33',
        qNum: 33,
        section: 'C',
        marks: 3,
        topic: 'Improvement in Food Resources: Manure vs Chemical Fertilizers',
        questionText: 'Compare Manure and Chemical Fertilizers across three distinct parameters:\n(i) Origin and composition\n(ii) Effect on soil texture and humus content\n(iii) Long-term environmental impact',
        modelAnswer: 'Comparison Table:\n\n1. Origin and Composition:\n   • Manure: A natural substance prepared by the biological decomposition of animal excreta (cow dung) and plant vegetable wastes; rich in organic matter.\n   • Fertilizer: Commercially manufactured inorganic chemical salts (e.g. Urea, NPK, Superphosphate) synthesised in industrial factories.\n\n2. Soil Texture & Humus Content:\n   • Manure: Adds massive quantities of organic humus to the soil, improving soil crumb structure, porosity, and water-retention capacity.\n   • Fertilizer: Does NOT supply any organic humus to the soil; prolonged excessive use degrades soil microflora and structure.\n\n3. Environmental & Soil Health Impact:\n   • Manure: 100% eco-friendly and sustainable; maintains natural soil fertility without runoff pollution.\n   • Fertilizer: Readily soluble in water; over-application causes soil acidification or salinization, and wash-off leads to eutrophication of water bodies.',
        stepMarking: [
          { step: '(i) Natural organic decomposition vs synthetic inorganic chemical salts', marks: '1 Mark' },
          { step: '(ii) Rich in humus and soil conditioning vs zero humus', marks: '1 Mark' },
          { step: '(iii) Eco-friendly sustainability vs water eutrophication & soil degradation', marks: '1 Mark' }
        ],
        examinerTip: 'Fertilizers supply high-concentration NPK rapidly, but manures ensure long-term soil texture sustainability.',
        commonPitfall: 'Writing that fertilizers are always bad (they provide high nutrient density, but must be balanced).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q34 to Q36 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-s24-s2-q34',
        qNum: 34,
        section: 'D',
        marks: 5,
        topic: 'Structure of the Atom: Rutherford\'s α-Particle Scattering Experiment',
        questionText: '(a) Describe the experimental setup of Rutherford\'s alpha (α) particle scattering experiment. (1 Mark)\n(b) State the three key observations made by Rutherford during this experiment. (1.5 Marks)\n(c) What conclusions regarding atomic structure were drawn from these observations? (1.5 Marks)\n(d) Mention the primary structural drawback of Rutherford\'s nuclear model of the atom. (1 Mark)',
        modelAnswer: '(a) Experimental Setup:\n    Fast-moving positively charged alpha particles (helium nuclei, He²⁺) emitted from a radioactive source were directed at an extremely thin sheet of gold foil (approx. 1000 atoms thick). The scattered particles struck a circular fluorescent zinc sulphide screen, producing tiny flashes of light.\n\n(b) Three Key Observations:\n    1. Most α-particles (approx. 99%) passed straight through the gold foil undeflected.\n    2. A small fraction of α-particles was deflected by small and moderate angles.\n    3. Surprisingly, about 1 in every 12,000 particles rebounded completely backwards along its original path (deflection > 90°).\n\n(c) Key Conclusions:\n    1. Most of the space inside an atom is empty because most α-particles passed straight through.\n    2. The positive charge of the atom occupies very little space because very few particles were deflected.\n    3. All the positive charge and almost the entire mass of the atom are concentrated in an extremely dense, compact central volume called the Nucleus.\n\n(d) Major Drawback:\n    According to classical electromagnetic theory, an accelerating charged particle (like an electron revolving in an orbit) must continuously radiate energy. As it loses energy, the electron should spiral inwards and crash into the nucleus within 10⁻⁸ seconds, making the atom completely unstable. However, we know atoms are exceptionally stable. Rutherford could not explain this stability.',
        stepMarking: [
          { step: '(a) Gold foil & alpha-particle source setup described', marks: '1 Mark' },
          { step: '(b) 3 observations: most passed straight, few deflected, 1/12000 rebounded', marks: '1.5 Marks' },
          { step: '(c) 3 conclusions: empty space, concentrated positive mass, discovery of nucleus', marks: '1.5 Marks' },
          { step: '(d) Drawback: orbital radiation and atomic collapse failure explained', marks: '1 Mark' }
        ],
        examinerTip: 'Remember Bohr resolved this drawback by proposing discrete, non-radiating stationary energy shells.',
        commonPitfall: 'Writing that neutrons were discovered in this experiment (neutrons were discovered later by Chadwick in 1932).'
      },
      {
        id: 'c9-s24-s2-q35',
        qNum: 35,
        section: 'D',
        marks: 5,
        topic: 'Work and Energy: Conservation of Mechanical Energy Proof & Power Calculation',
        questionText: '(a) State the Law of Conservation of Energy. (1 Mark)\n(b) Prove analytically that the total mechanical energy of a ball of mass m falling freely under gravity from a height h above the ground remains conserved at all points of its path: (i) at top height h, (ii) at intermediate point after falling distance x, and (iii) just before striking the ground. (2.5 Marks)\n(c) An electric motor pump lifts 1200 kg of water to an overhead water tank situated at a height of 20 m in 60 seconds. Calculate the useful power delivered by the pump (Take g = 10 m/s²). (1.5 Marks)',
        modelAnswer: '(a) Law of Conservation of Energy:\n    Energy can neither be created nor destroyed; it can only be transformed from one form into another. The total energy of an isolated system remains constant.\n\n(b) Analytical Proof for Free Fall (Mass m from height h):\n\n    • At Point A (Top height h, initial velocity u = 0):\n      Kinetic Energy K_A = ½ m u² = 0\n      Potential Energy U_A = m · g · h\n      Total Energy E_A = K_A + U_A = 0 + mgh = mgh  --- (Equation 1)\n\n    • At Point B (Intermediate point, fallen distance x, height = h - x):\n      Using v_B² - u² = 2gx => v_B² = 2gx (since u = 0)\n      Kinetic Energy K_B = ½ m v_B² = ½ m (2gx) = mgx\n      Potential Energy U_B = mg(h - x) = mgh - mgx\n      Total Energy E_B = K_B + U_B = mgx + (mgh - mgx) = mgh  --- (Equation 2)\n\n    • At Point C (Just before striking ground, fallen full height h, height = 0):\n      Using v_C² - u² = 2gh => v_C² = 2gh\n      Kinetic Energy K_C = ½ m v_C² = ½ m (2gh) = mgh\n      Potential Energy U_C = mg(0) = 0\n      Total Energy E_C = K_C + U_C = mgh + 0 = mgh  --- (Equation 3)\n\n    From Equations 1, 2, and 3: E_A = E_B = E_C = mgh.\n    Hence, total mechanical energy is conserved throughout free fall.\n\n(c) Power Calculation:\n    Mass of water m = 1200 kg\n    Height h = 20 m\n    Time t = 60 s, g = 10 m/s²\n    Work done = Potential energy gained = m · g · h\n    W = 1200 × 10 × 20 = 240,000 Joules\n    Power P = Work / Time = 240,000 / 60 = 4,000 Watts (or 4 kW).',
        stepMarking: [
          { step: '(a) Law of conservation of energy stated', marks: '1 Mark' },
          { step: '(b) Deriving E = mgh at Point A, Point B, and Point C', marks: '2.5 Marks' },
          { step: '(c) Work = 240,000 J and Power = 4,000 W (4 kW)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Drawing a simple vertical line diagram showing points A, B, C with distances x and (h - x) makes the derivation foolproof.',
        commonPitfall: 'Taking height at point B as x instead of (h - x).'
      },
      {
        id: 'c9-s24-s2-q36',
        qNum: 36,
        section: 'D',
        marks: 5,
        topic: 'Tissues: Meristematic Tissues & Vascular Adaptations',
        questionText: '(a) What are Meristematic Tissues? Differentiate between Apical, Lateral, and Intercalary meristems on the basis of their location and functional contribution to plant growth. (3 Marks)\n(b) Differentiate between Xylem and Phloem tissues on the basis of: (i) Nature of cells (living/dead), (ii) Substance transported, and (iii) Direction of conduction. (2 Marks)',
        modelAnswer: '(a) Meristematic Tissues:\n    Tissues composed of actively dividing, undifferentiated cells with thin cellulose walls, dense cytoplasm, prominent nuclei, and no vacuoles.\n\n    Classification by Location and Function:\n    1. Apical Meristem:\n       • Location: Present at the growing tips of stems and roots.\n       • Function: Increases the longitudinal length of the plant (primary growth).\n    2. Lateral Meristem (Cambium):\n       • Location: Present on the lateral sides of stems and roots.\n       • Function: Increases the girth (thickness/diameter) of the stem and root (secondary growth).\n    3. Intercalary Meristem:\n       • Location: Located at the base of leaves or internodes (e.g. in grasses, bamboo, mint).\n       • Function: Promotes internodal elongation and regrowth after grazing.\n\n(b) Xylem vs Phloem Comparison:\n    • Nature of Cells: In Xylem, mature conducting cells (tracheids, vessels, sclerenchyma fibres) are dead with thick lignified walls; only xylem parenchyma is living. In Phloem, conducting sieve tubes, companion cells, and phloem parenchyma are living; only phloem fibres are dead.\n    • Substance Transported: Xylem transports water and dissolved mineral salts absorbed by roots. Phloem translocates synthesized organic food (sucrose and amino acids) from leaves.\n    • Direction of Conduction: Xylem flow is strictly unidirectional (upward from roots to foliage). Phloem translocation is bidirectional (both upward and downward depending on plant metabolic needs).',
        stepMarking: [
          { step: '(a) Definition + Apical (length), Lateral (girth), Intercalary (internodes)', marks: '3 Marks' },
          { step: '(b) Living/dead contrast + water vs food + unidirectional vs bidirectional', marks: '2 Marks' }
        ],
        examinerTip: 'Key phrase for Lateral Meristem: "responsible for increase in girth of stem/root".',
        commonPitfall: 'Writing that phloem transport is only downward (it is bidirectional).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE-BASED QUESTIONS (Q37 to Q39 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-s24-s2-q37',
        qNum: 37,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Evaporation Phenomena & Latent Heat in Daily Life',
        questionText: 'Read the following passage and answer the questions that follow:\n\nDuring hot summer days, people employ various traditional and scientific practices to maintain thermal comfort. Water kept in porous earthen pots (matkas) remains remarkably cool even when ambient temperatures cross 42 °C. Similarly, athletes pouring acetone or perfume on their palms feel an instant icy sensation. Furthermore, wearing loose cotton clothes during summer is strongly recommended by dermatologists because cotton efficiently absorbs sweat.\n\nQuestions:\n37.1 Explain the scientific principle behind water staying cool inside an earthen pot (matka). (1 Mark)\n37.2 Why does pouring nail polish remover (acetone) on our palm make it feel cold? (1 Mark)\n37.3 Why are cotton clothes preferred over synthetic fabrics during hot humid summer days? Explain the cooling mechanism involved. (2 Marks)',
        modelAnswer: '37.1 Earthen pots have millions of microscopic pores through which water continuously seeps to the outer surface. This outer moisture evaporates into the atmosphere, absorbing the necessary latent heat of vaporisation from the remaining water inside the pot, thereby cooling the stored water.\n\n37.2 Acetone has a very low boiling point (56 °C) and is highly volatile. When poured on the palm, its molecules evaporate rapidly by absorbing latent heat of vaporisation directly from the skin of our palm, creating an immediate cooling sensation.\n\n37.3 Cotton is an excellent absorber of water. During summer, our body secretes perspiration (sweat) as a physiological cooling mechanism. Cotton absorbs this sweat and exposes it to the surrounding atmosphere, facilitating its rapid evaporation. As the sweat evaporates, it absorbs latent heat of vaporisation from our body surface, keeping us comfortably cool. Synthetic fabrics (polyester, nylon) do not absorb sweat, trapping heat against the skin.',
        stepMarking: [
          { step: '37.1 Earthen pot pores and seepage evaporation cooling explained', marks: '1 Mark' },
          { step: '37.2 Volatility of acetone absorbing latent heat from palm explained', marks: '1 Mark' },
          { step: '37.3 Cotton absorption of sweat leading to surface evaporation and body cooling', marks: '2 Marks' }
        ],
        examinerTip: 'Always link evaporation with the absorption of "latent heat of vaporisation".',
        commonPitfall: 'Saying cotton clothes produce cold air (they merely absorb sweat to facilitate evaporation).'
      },
      {
        id: 'c9-s24-s2-q38',
        qNum: 38,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Gravitation, Free Fall & Mass vs Weight on the Moon',
        questionText: 'Read the following passage and answer the questions that follow:\n\nAn astronaut on Earth has a mass of 60 kg. When equipped with a spacesuit and life support equipment of 30 kg, the total mass becomes 90 kg. During a lunar exploration mission, the astronaut lands on the surface of the Moon. The acceleration due to gravity on the Moon (g_moon) is approximately 1/6th of that on the Earth (g_earth = 9.8 m/s²).\n\nQuestions:\n38.1 What will be the total mass of the equipped astronaut on the Moon? (1 Mark)\n38.2 Calculate the weight of the equipped astronaut on the surface of the Earth. (Take g = 9.8 m/s²). (1 Mark)\n38.3 Calculate the weight of the equipped astronaut on the surface of the Moon. How does this difference affect the astronaut\'s ability to jump on the Moon? (2 Marks)',
        modelAnswer: '38.1 Mass on the Moon:\n     Mass is an intrinsic property representing the quantity of matter and remains strictly constant everywhere in the universe.\n     Total mass on the Moon = 90 kg.\n\n38.2 Weight on the Earth:\n     Weight W_earth = m · g_earth = 90 kg × 9.8 m/s² = 882 Newtons (N).\n\n38.3 Weight on the Moon:\n     Weight W_moon = m · g_moon = W_earth / 6 = 882 / 6 = 147 Newtons (N).\n     Effect on jumping: Because the downward gravitational pull on the astronaut is reduced by a factor of 6, the muscular force exerted by the astronaut\'s legs can propel him/her roughly six times higher into the air before gravity pulls them back down.',
        stepMarking: [
          { step: '38.1 Mass remains unchanged at 90 kg', marks: '1 Mark' },
          { step: '38.2 Weight on Earth = 882 N computed correctly', marks: '1 Mark' },
          { step: '38.3 Weight on Moon = 147 N + jumping 6 times higher explanation', marks: '2 Marks' }
        ],
        examinerTip: 'Mass is in kilograms (kg); Weight is in Newtons (N). Do not mix up the units.',
        commonPitfall: 'Writing mass on the moon as 90/6 = 15 kg (mass never changes; only weight changes).'
      },
      {
        id: 'c9-s24-s2-q39',
        qNum: 39,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Composite Fish Culture & Aquaculture Optimization',
        questionText: 'Read the following passage and answer the questions that follow:\n\nA progressive aquaculture farmer in Punjab adopts a "Composite Fish Culture System" in a single freshwater pond to achieve maximum production without ecological conflict. The farmer stocks five compatible fish species having distinct feeding zones: Catla, Silver Carp, Rohu, Grass Carp, and Mrigal.\n\nQuestions:\n39.1 What is the primary biological advantage of using a Composite Fish Culture system over mono-culture in a single pond? (1 Mark)\n39.2 Match each of the following fish species with their respective feeding zone inside the pond:\n     (i) Catla\n     (ii) Rohu\n     (iii) Mrigal (1.5 Marks)\n39.3 Mention one major problem faced in composite fish culture and explain how modern induced breeding techniques using hormone injections solve it. (1.5 Marks)',
        modelAnswer: '39.1 Primary Advantage:\n     In composite fish culture, fish species are selected such that they occupy different ecological niches and have distinct food habits. Because they do not compete for food with one another, all available food resources in different vertical zones of the pond are efficiently utilized, resulting in extraordinarily high fish yield.\n\n39.2 Feeding Zones:\n     (i) Catla : Surface feeder (feeds on surface plankton)\n     (ii) Rohu  : Column feeder (feeds in the middle depth of the pond)\n     (iii) Mrigal: Bottom feeder (feeds on decaying organic matter on pond floor)\n\n39.3 Major Problem and Solution:\n     • Problem: Lack of availability of good quality seed (fish spawn/eggs). Many of these species breed only during monsoons in natural rivers, and seed collected from rivers is often mixed with predator fish spawn.\n     • Solution: Induced breeding using pituitary hormone injections in hatcheries. This ensures pure, high-quality, disease-free seed of selected fish species in desired quantities throughout the year.',
        stepMarking: [
          { step: '39.1 No food competition across distinct ecological niches explained', marks: '1 Mark' },
          { step: '39.2 Surface (Catla), Column (Rohu), Bottom (Mrigal) matched correctly', marks: '1.5 Marks' },
          { step: '39.3 Problem (monsoon river seed mixing) + Solution (induced hormone breeding)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Remember the classic feeding trio: Catla (Surface), Rohu (Middle Column), Mrigal/Common Carp (Bottom).',
        commonPitfall: 'Confusing Rohu (middle) with Catla (surface).'
      }
    ]
  }
];
