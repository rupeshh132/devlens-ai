import type { PyqPaper } from '../components/learn/PyqPaperViewerModal';

export const PYQ_PAPERS_DATA: PyqPaper[] = [
  {
    id: 'cbse-sci-2024-sqp',
    title: 'CBSE Class 9 Science Official Model Sample Paper 2024',
    subject: 'Science',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'CBSE_SAMPLE',
    paperCode: '086/MS/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 15,
    generalInstructions: [
      'This question paper consists of 39 questions in 5 sections.',
      'All questions are compulsory. However, internal choices are provided in some questions.',
      'Section A consists of 20 objective questions of 1 mark each.',
      'Section B consists of 6 Very Short Answer questions of 2 marks each.',
      'Section C consists of 7 Short Answer questions of 3 marks each.',
      'Section D consists of 3 Long Answer questions of 5 marks each.',
      'Section E consists of 3 Case-Based units of assessment of 4 marks each.',
      'Wherever necessary, neat and properly labelled diagrams should be drawn.'
    ],
    questions: [
      {
        id: 'sqp24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Chemistry: Matter in Our Surroundings',
        questionText: 'Which one of the following conditions is most favorable for converting a gas into a liquid?',
        options: [
          'A) High pressure, low temperature',
          'B) Low pressure, low temperature',
          'C) Low pressure, high temperature',
          'D) High pressure, high temperature'
        ],
        correctOption: 'A',
        modelAnswer: 'A) High pressure, low temperature.\nIncreasing pressure brings the gaseous molecules closer together, while decreasing temperature lowers their kinetic energy, allowing intermolecular forces of attraction to bind them into a liquid state.',
        stepMarking: [
          { step: 'Correct option A (High pressure, low temperature)', marks: '1 Mark' }
        ],
        examinerTip: 'Remember: Liquefaction requires compression (high pressure) and cooling (low temperature).',
        commonPitfall: 'Students frequently mix up high temperature with high pressure.'
      },
      {
        id: 'sqp24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Physics: Motion & Kinematics',
        questionText: 'An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the displacement at the end of 2 minutes 20 seconds?',
        options: [
          'A) 0 m',
          'B) 200 m',
          'C) 300 m',
          'D) 2200 m'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 200 m.\nTotal time = 2 min 20 s = 140 s.\nNumber of rounds = 140 / 40 = 3.5 rounds.\nAfter 3 full rounds, displacement = 0.\nAfter 0.5 round, the athlete is at the diametrically opposite point.\nDisplacement = diameter of track = 200 m.',
        stepMarking: [
          { step: 'Identification of 3.5 rounds and opposite point', marks: '1/2 Mark' },
          { step: 'Displacement = diameter = 200 m (Option B)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Do not calculate distance when displacement is asked! Distance would be 3.5 × 2πr = 2200 m, which is a distractor option (D).',
        commonPitfall: 'Confusing distance travelled (scalar) with displacement (straight vector between initial & final points).'
      },
      {
        id: 'sqp24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Biology: The Fundamental Unit of Life',
        questionText: 'Which organelle is known as the "Powerhouse of the Cell", and why?',
        options: [
          'A) Ribosome — protein synthesis',
          'B) Mitochondria — ATP generation',
          'C) Lysosome — digestive enzymes',
          'D) Golgi Apparatus — packaging'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Mitochondria — ATP generation.\nMitochondria generate ATP (Adenosine Triphosphate) molecules through cellular respiration, which act as the energy currency of the cell.',
        stepMarking: [
          { step: 'Option B with correct reasoning (ATP generation)', marks: '1 Mark' }
        ],
        examinerTip: 'Always mention ATP when explaining Mitochondria in 1-mark questions.',
        commonPitfall: 'Writing only "provides energy" without writing "ATP" in subjective tests.'
      },
      {
        id: 'sqp24-q4',
        qNum: 4,
        section: 'B',
        marks: 2,
        topic: 'Physics: Force & Laws of Motion',
        questionText: 'A car of mass 1200 kg is moving with a velocity of 20 m/s. Brakes are applied to bring it to rest in 10 seconds. Calculate:\n(i) The retardation of the car.\n(ii) The braking force applied.',
        modelAnswer: '(i) Using first equation of motion: v = u + at\n0 = 20 + a(10) => a = -20/10 = -2 m/s²\nRetardation = 2 m/s²\n\n(ii) According to Newton\'s Second Law: F = m × a\nF = 1200 kg × (-2 m/s²) = -2400 N\nBraking Force = 2400 N (in direction opposite to motion).',
        stepMarking: [
          { step: 'Formula v = u + at and calculation of acceleration a = -2 m/s²', marks: '1 Mark' },
          { step: 'Formula F = m × a and calculation of force F = 2400 N with correct SI unit (N)', marks: '1 Mark' }
        ],
        examinerTip: 'Writing "Retardation = -2 m/s²" loses 0.5 mark because retardation itself means negative acceleration. Write "Retardation = 2 m/s²" or "Acceleration = -2 m/s²".',
        commonPitfall: 'Forgetting SI unit "N" or "m/s²" results in deduction of 0.5 marks as per CBSE marking code.'
      },
      {
        id: 'sqp24-q5',
        qNum: 5,
        section: 'B',
        marks: 2,
        topic: 'Chemistry: Atoms & Molecules',
        questionText: 'Calculate the formula unit mass of Sodium Carbonate (Na₂CO₃).\n(Given atomic masses: Na = 23 u, C = 12 u, O = 16 u).',
        modelAnswer: 'Formula unit mass of Na₂CO₃\n= (2 × Atomic mass of Na) + (1 × Atomic mass of C) + (3 × Atomic mass of O)\n= (2 × 23) + (1 × 12) + (3 × 16)\n= 46 + 12 + 48\n= 106 u.',
        stepMarking: [
          { step: 'Formula expansion: 2(23) + 1(12) + 3(16)', marks: '1 Mark' },
          { step: 'Correct final sum = 106 u (with unified mass unit "u")', marks: '1 Mark' }
        ],
        examinerTip: 'Unit "u" is mandatory. Writing "106 g" represents molar mass, not formula unit mass.',
        commonPitfall: 'Writing atomic weight of Oxygen as 32 instead of 16 × 3 = 48.'
      },
      {
        id: 'sqp24-q6',
        qNum: 6,
        section: 'C',
        marks: 3,
        topic: 'Physics: Gravitation',
        questionText: 'State Newton\'s Universal Law of Gravitation. Write its mathematical formula and mention two important natural phenomena explained by this law.',
        modelAnswer: '1. Statement: Every object in the universe attracts every other object with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.\n\n2. Mathematical Formula: F = G × (m₁ × m₂) / r²\nWhere G is the Universal Gravitational Constant (6.67 × 10⁻¹¹ N m²/kg²).\n\n3. Phenomena explained by this law:\n(a) The force that binds us to the earth.\n(b) The motion of the moon around the earth and planets around the sun.\n(c) The occurrence of oceanic tides due to the moon and the sun.',
        stepMarking: [
          { step: 'Complete and accurate law statement', marks: '1 Mark' },
          { step: 'Mathematical formula with variables defined', marks: '1 Mark' },
          { step: 'Any two correct natural phenomena (0.5 mark each)', marks: '1 Mark' }
        ],
        examinerTip: 'Be sure to mention that force is proportional to product of masses and inversely to SQUARE of distance. Mentioning only distance loses 0.5 mark.',
        commonPitfall: 'Forgetting to specify that distance "r" is measured between centers of the two bodies.'
      },
      {
        id: 'sqp24-q7',
        qNum: 7,
        section: 'C',
        marks: 3,
        topic: 'Biology: Tissues',
        questionText: 'Differentiate between Parenchyma, Collenchyma, and Sclerenchyma tissues on the basis of:\n(a) Cell wall nature\n(b) Intercellular spaces\n(c) Main physiological function.',
        modelAnswer: 'Comparison Table:\n\n1. Parenchyma:\n- Cell wall: Thin primary cell walls made of cellulose.\n- Intercellular spaces: Abundant / large intercellular spaces.\n- Function: Storage of food, photosynthesis (chlorenchyma), buoyancy (aerenchyma).\n\n2. Collenchyma:\n- Cell wall: Unevenly thickened cell walls at corners with pectin and cellulose.\n- Intercellular spaces: Little or very small intercellular spaces.\n- Function: Provides mechanical support and flexibility/elasticity to growing stems and leaves.\n\n3. Sclerenchyma:\n- Cell wall: Uniformly thickened hard walls deposited with lignin (dead cells at maturity).\n- Intercellular spaces: Absent.\n- Function: Provides immense mechanical strength, rigidity, and protection (e.g. coconut husk).',
        stepMarking: [
          { step: 'Correct differentiation of Cell wall nature for all three', marks: '1 Mark' },
          { step: 'Correct differentiation of Intercellular spaces', marks: '1 Mark' },
          { step: 'Correct physiological function for all three', marks: '1 Mark' }
        ],
        examinerTip: 'Tabular format fetches 100% marks in biology comparative questions. Always mention "lignin" for sclerenchyma and "pectin" for collenchyma.',
        commonPitfall: 'Missing out the presence of lignin which makes sclerenchyma cells dead.'
      },
      {
        id: 'sqp24-q8',
        qNum: 8,
        section: 'D',
        marks: 5,
        topic: 'Physics: Work and Energy',
        questionText: '(a) Define Kinetic Energy. Derive the expression for the kinetic energy of an object of mass m moving with a uniform velocity v.\n(b) A body of mass 10 kg is dropped from a height of 20 m. Calculate its kinetic energy just before striking the ground. (Take g = 9.8 m/s²).',
        modelAnswer: '(a) Definition: Kinetic energy is the energy possessed by an object due to its motion. Any moving object does work by virtue of its kinetic energy.\n\nDerivation:\nLet an object of mass m be initially at rest (u = 0). A constant force F acts on it and displaces it by distance s, accelerating it to velocity v.\nWork done W = F × s  --- (1)\nAccording to Newton\'s Second Law: F = m × a  --- (2)\nUsing third equation of motion: v² - u² = 2as\nSince u = 0: v² = 2as => s = v² / (2a)  --- (3)\nSubstituting (2) and (3) in (1):\nW = (m × a) × (v² / (2a)) = 1/2 × m × v²\nSince work done equals the kinetic energy imparted to the body:\nE_k = 1/2 m v²\n\n(b) Numerical Part:\nAccording to Law of Conservation of Energy, Initial Potential Energy = Final Kinetic Energy.\nInitial Potential Energy E_p = m × g × h\nE_p = 10 kg × 9.8 m/s² × 20 m = 1960 Joules.\nTherefore, just before striking the ground:\nKinetic Energy E_k = 1960 J.',
        stepMarking: [
          { step: 'Definition of Kinetic Energy with SI unit', marks: '1 Mark' },
          { step: 'Step-by-step mathematical derivation of E_k = 1/2 m v²', marks: '2 Marks' },
          { step: 'Identification of Conservation of Energy principle', marks: '1 Mark' },
          { step: 'Accurate calculation of numerical result = 1960 J with unit', marks: '1 Mark' }
        ],
        examinerTip: 'In numericals, explicitly stating the Law of Conservation of Energy saves time over recalculating velocity using v² = 2gh and then 1/2mv²!',
        commonPitfall: 'Skipping the derivation steps or leaving the final answer without "Joules / J".'
      },
      {
        id: 'sqp24-q9',
        qNum: 9,
        section: 'E',
        marks: 4,
        topic: 'Chemistry: Structure of the Atom (Case-Based Competency Question)',
        questionText: 'Read the following passage and answer the questions:\n\n"In 1911, Ernest Rutherford conducted the famous Alpha-particle Scattering Experiment by bombarding a very thin gold foil (about 1000 atoms thick) with high-energy alpha particles emitted from a radioactive source. Most alpha particles passed straight through without deflection, a small fraction were deflected by small angles, and remarkably, about 1 in 12,000 rebounded straight back."\n\n(i) What conclusion was drawn from the fact that most alpha particles passed through undeflected? [1 Mark]\n(ii) Why did a few alpha particles deflect by small and large angles? [1 Mark]\n(iii) State two major drawbacks of Rutherford\'s Nuclear Model of the atom. [2 Marks]',
        modelAnswer: '(i) Conclusion: Most of the space inside the atom is empty because alpha particles passed through without being impeded.\n\n(ii) Reason: Positive charge and most of the mass of the atom are concentrated in a very small, dense region called the nucleus. Since alpha particles are positively charged (+2e), electrostatic repulsion from the nucleus caused the deflection.\n\n(iii) Two major drawbacks:\n1. Inability to explain atomic stability: According to electromagnetic theory, an accelerating charged electron must radiate energy continuously, spiral inward, and collapse into the nucleus in ~10⁻⁸ s, making atoms unstable (which contradicts reality).\n2. It did not explain the arrangement of electrons in shells or discrete atomic spectra.',
        stepMarking: [
          { step: 'Part (i): Most space inside the atom is empty', marks: '1 Mark' },
          { step: 'Part (ii): Positive charge concentrated in dense nucleus causing electrostatic repulsion', marks: '1 Mark' },
          { step: 'Part (iii): Radiation of energy by accelerating charged particles leading to atomic collapse', marks: '1 Mark' },
          { step: 'Part (iii): Failure to explain discrete electronic distribution / spectra', marks: '1 Mark' }
        ],
        examinerTip: 'Case-study questions are 100% conceptual. Always address the exact sub-part headers (i), (ii), (iii) for clean step marks.',
        commonPitfall: 'Writing generic answers about gold foil properties rather than atomic structure conclusions.'
      }
    ]
  },
  {
    id: 'cbse-sci-2024-board',
    title: 'CBSE Board Exam 2024 Science Original Question Paper (Set 31/1/1)',
    subject: 'Science',
    targetClass: 'Class 10',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '31/1/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 12,
    generalInstructions: [
      'Original CBSE Board Examination Paper distributed in March 2024.',
      'Check that this question paper contains 39 questions in total.',
      '15-minute reading time was allotted prior to writing answers.',
      'Answers must be clear, concise, and to the point.'
    ],
    questions: [
      {
        id: 'board24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Chemistry: Chemical Reactions and Equations',
        questionText: 'When lead nitrate powder is heated in a boiling tube, brown fumes are liberated. These brown fumes are of:',
        options: [
          'A) Lead Oxide (PbO)',
          'B) Nitrogen Dioxide (NO₂)',
          'C) Oxygen gas (O₂)',
          'D) Nitrous Oxide (N₂O)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Nitrogen Dioxide (NO₂).\nReaction: 2Pb(NO₃)₂ (s) -(heat)-> 2PbO (s) + 4NO₂ (g) [Brown fumes] + O₂ (g).',
        stepMarking: [
          { step: 'Correct option B (Nitrogen Dioxide)', marks: '1 Mark' }
        ],
        examinerTip: 'Remember the hallmark colors: PbO is yellow, NO₂ is brown gas, O₂ is colorless.',
        commonPitfall: 'Confusing Lead Oxide (which is yellow solid residue) with the gaseous fumes.'
      },
      {
        id: 'board24-q2',
        qNum: 2,
        section: 'B',
        marks: 2,
        topic: 'Physics: Electricity & Ohm\'s Law',
        questionText: 'State Ohm\'s Law. A conductor has a resistance of 15 Ω when connected across a 12 V battery. Calculate the current flowing through it.',
        modelAnswer: 'Ohm\'s Law: At constant temperature, the electric current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) applied across its terminals.\nV = I × R\n\nNumerical:\nGiven: V = 12 V, R = 15 Ω\nI = V / R = 12 / 15 = 0.8 A.\nHence, current = 0.8 Amperes.',
        stepMarking: [
          { step: 'Statement of Ohm\'s law mentioning "constant temperature"', marks: '1 Mark' },
          { step: 'Calculation I = 12/15 = 0.8 A with unit (A)', marks: '1 Mark' }
        ],
        examinerTip: '"At constant temperature" is a crucial qualifying phrase in Ohm\'s law. Without it, 0.5 marks are deducted.',
        commonPitfall: 'Leaving the answer as 12/15 without decimal simplification or without the unit "A".'
      },
      {
        id: 'board24-q3',
        qNum: 3,
        section: 'C',
        marks: 3,
        topic: 'Biology: Life Processes',
        questionText: '(a) What is peristaltic movement?\n(b) Name the enzyme present in human saliva and state its function.\n(c) Why is the small intestine in herbivores longer than in carnivores?',
        modelAnswer: '(a) Peristaltic movement: Rhythmic contraction and expansion of the muscles of the lining of the alimentary canal that pushes food forward in a regulated manner.\n\n(b) Salivary Amylase (Ptyalin). Function: It breaks down complex starch molecules into simpler maltose sugars at optimum pH (~6.8).\n\n(c) Herbivores eat grass and plant matter which is rich in tough cellulose. Cellulose digestion takes a longer time, hence herbivores require a longer small intestine with specialized symbiotic bacteria. Carnivores eat meat which is easier to digest, so their small intestine is shorter.',
        stepMarking: [
          { step: 'Part (a): Accurate definition of peristalsis', marks: '1 Mark' },
          { step: 'Part (b): Name (Salivary amylase) + starch breakdown function', marks: '1 Mark' },
          { step: 'Part (c): Explanation of cellulose digestion requiring longer transit time', marks: '1 Mark' }
        ],
        examinerTip: 'Always link the intestine length directly to "cellulose" breakdown in herbivores vs "meat" in carnivores.',
        commonPitfall: 'Confusing salivary amylase with pepsin or trypsin.'
      }
    ]
  },
  {
    id: 'cbse-math-2024-sqp',
    title: 'CBSE Class 10 Mathematics Standard Official Model Paper 2024',
    subject: 'Mathematics',
    targetClass: 'Class 10',
    year: 2024,
    paperType: 'CBSE_SAMPLE',
    paperCode: '041/MS/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 14,
    generalInstructions: [
      'This question paper contains 38 questions divided into 5 sections.',
      'Section A comprises 20 MCQs of 1 mark each.',
      'Section B comprises 5 Short Answer Type-I questions of 2 marks each.',
      'Section C comprises 6 Short Answer Type-II questions of 3 marks each.',
      'Section D comprises 4 Long Answer questions of 5 marks each.',
      'Section E comprises 3 Case-Based integrated units of 4 marks each.'
    ],
    questions: [
      {
        id: 'math24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Real Numbers & Polynomials',
        questionText: 'If the HCF of 65 and 117 is expressible in the form 65m - 117, then the value of m is:',
        options: [
          'A) 4',
          'B) 2',
          'C) 1',
          'D) 3'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 2.\nPrime factorisation:\n65 = 5 × 13\n117 = 3² × 13\nHCF(65, 117) = 13.\nGiven: 65m - 117 = 13\n65m = 13 + 117 = 130\nm = 130 / 65 = 2.',
        stepMarking: [
          { step: 'Finding HCF = 13', marks: '1/2 Mark' },
          { step: 'Solving 65m - 117 = 13 => m = 2 (Option B)', marks: '1/2 Mark' }
        ],
        examinerTip: 'HCF is the product of the smallest power of each common prime factor.',
        commonPitfall: 'Calculation error when adding 13 + 117.'
      },
      {
        id: 'math24-q2',
        qNum: 2,
        section: 'B',
        marks: 2,
        topic: 'Quadratic Equations',
        questionText: 'Find the nature of the roots of the quadratic equation 2x² - 4x + 3 = 0. If real roots exist, find them.',
        modelAnswer: 'Given: 2x² - 4x + 3 = 0\nHere a = 2, b = -4, c = 3.\nDiscriminant D = b² - 4ac\nD = (-4)² - 4(2)(3)\nD = 16 - 24 = -8.\nSince D < 0 (Discriminant is negative), the given quadratic equation has NO real roots (imaginary roots).',
        stepMarking: [
          { step: 'Calculation of Discriminant D = (-4)² - 4(2)(3) = -8', marks: '1 Mark' },
          { step: 'Conclusion: D < 0, hence no real roots exist', marks: '1 Mark' }
        ],
        examinerTip: 'Always write the general standard form ax² + bx + c = 0 before calculating D.',
        commonPitfall: 'Taking (-4)² as -16 instead of +16.'
      },
      {
        id: 'math24-q3',
        qNum: 3,
        section: 'C',
        marks: 3,
        topic: 'Triangles & Geometry',
        questionText: 'State and prove Basic Proportionality Theorem (Thales Theorem).',
        modelAnswer: 'Statement: If a line is drawn parallel to one side of a triangle intersecting the other two sides in distinct points, then the other two sides are divided in the same ratio.\n\nGiven: In △ABC, DE ∥ BC intersecting AB at D and AC at E.\nTo Prove: AD/DB = AE/EC.\nConstruction: Join BE and CD. Draw DM ⊥ AC and EN ⊥ AB.\n\nProof:\nArea(△ADE) = 1/2 × AD × EN\nArea(△BDE) = 1/2 × DB × EN\n=> Area(△ADE) / Area(△BDE) = AD / DB  --- (1)\n\nSimilarly:\nArea(△ADE) = 1/2 × AE × DM\nArea(△CDE) = 1/2 × EC × DM\n=> Area(△ADE) / Area(△CDE) = AE / EC  --- (2)\n\nNow, △BDE and △CDE are on the same base DE and between the same parallels DE and BC.\nTherefore: Area(△BDE) = Area(△CDE)  --- (3)\n\nFrom (1), (2), and (3):\nAD / DB = AE / EC. (Hence Proved)',
        stepMarking: [
          { step: 'Statement and Given / To Prove / Construction with neat diagram', marks: '1 Mark' },
          { step: 'Ratio of areas equations (1) and (2)', marks: '1 Mark' },
          { step: 'Property of triangles on same base & parallels to equate denominators', marks: '1 Mark' }
        ],
        examinerTip: 'This theorem has a 95% probability of appearing in CBSE Board papers. Drawing the diagram is mandatory; proofs without diagrams receive 0 marks in CBSE.',
        commonPitfall: 'Forgetting the perpendicular construction lines DM and EN.'
      }
    ]
  },
  {
    id: 'cbse-sci-2023-board',
    title: 'CBSE Class 10 Board Exam 2023 Science Original Question Paper (Set 31/2/1)',
    subject: 'Science',
    targetClass: 'Class 10',
    year: 2023,
    paperType: 'BOARD_EXAM',
    paperCode: '31/2/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: false,
    totalQuestions: 15,
    generalInstructions: [
      'Official 2023 CBSE Board Paper with Examiner Scoring Key.',
      'Contains detailed solutions and common student mistakes highlighted by CBSE evaluators.',
      'Requires PRO membership to access complete solution vault.'
    ],
    questions: [
      {
        id: 'sci23-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Physics: Light — Reflection and Refraction',
        questionText: 'A concave mirror produces a real, inverted image three times enlarged of an object placed at 10 cm in front of it. Where is the image located?',
        options: [
          'A) -30 cm',
          'B) +30 cm',
          'C) -10 cm',
          'D) +20 cm'
        ],
        correctOption: 'A',
        modelAnswer: 'A) -30 cm.\nMagnification m = -v/u.\nFor a real and inverted image, m = -3.\nGiven: u = -10 cm.\n-3 = -v / (-10)\n=> -3 = v / 10 => v = -30 cm.\nThe image is formed 30 cm in front of the mirror (on the same side as the object).',
        stepMarking: [
          { step: 'Formula m = -v/u with m = -3 and u = -10', marks: '1/2 Mark' },
          { step: 'v = -30 cm (Option A)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Remember Cartesian Sign Convention: Real image has negative magnification; virtual image has positive magnification.',
        commonPitfall: 'Missing negative sign on magnification m = 3 instead of -3.'
      },
      {
        id: 'sci23-q2',
        qNum: 2,
        section: 'C',
        marks: 3,
        topic: 'Chemistry: Metals and Non-Metals',
        questionText: 'An ore on treatment with dilute hydrochloric acid produces brisk effervescence of a gas which turns lime water milky.\n(a) Identify the type of ore.\n(b) Name the metallurgical process used to convert this ore into oxide.\n(c) Write chemical equations for its conversion to oxide and subsequent reduction to metal with carbon.',
        modelAnswer: '(a) The gas that turns lime water milky is Carbon Dioxide (CO₂). Hence, the ore is a Carbonate Ore (e.g. Zinc Carbonate / Calamine, ZnCO₃).\n\n(b) The process used to convert a carbonate ore into metal oxide in limited/absence of air is CALCINATION.\n\n(c) Chemical Equations:\n1. Calcination:\nZnCO₃ (s) -(heat in limited air)-> ZnO (s) + CO₂ (g)\n\n2. Reduction using carbon (Coke):\nZnO (s) + C (s) -(heat)-> Zn (s) + CO (g).',
        stepMarking: [
          { step: 'Identification of Carbonate Ore', marks: '1 Mark' },
          { step: 'Naming Calcination process (not roasting)', marks: '1 Mark' },
          { step: 'Both balanced chemical equations', marks: '1 Mark' }
        ],
        examinerTip: 'Carbonate ores undergo Calcination (C with C); Sulphide ores undergo Roasting (with excess air).',
        commonPitfall: 'Writing Roasting instead of Calcination.'
      }
    ]
  },
  {
    id: 'cbse-math-2023-board',
    title: 'CBSE Class 10 Board Exam 2023 Mathematics Standard Question Paper (Set 30/1/1)',
    subject: 'Mathematics',
    targetClass: 'Class 10',
    year: 2023,
    paperType: 'BOARD_EXAM',
    paperCode: '30/1/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: false,
    totalQuestions: 15,
    generalInstructions: [
      'Official 2023 CBSE Class 10 Mathematics Standard Paper.',
      'Complete step-wise solution with examiner marks distribution criteria.'
    ],
    questions: [
      {
        id: 'math23-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Arithmetic Progressions',
        questionText: 'If the nth term of an AP is given by a_n = 5 - 3n, then the common difference (d) is:',
        options: [
          'A) 5',
          'B) -3',
          'C) 3',
          'D) 2'
        ],
        correctOption: 'B',
        modelAnswer: 'B) -3.\na_1 = 5 - 3(1) = 2\na_2 = 5 - 3(2) = -1\nCommon difference d = a_2 - a_1 = -1 - 2 = -3.\nShortcut: In a linear expression a_n = An + B, the coefficient of n is always the common difference (d = -3).',
        stepMarking: [
          { step: 'Calculation of consecutive terms or recognition of n-coefficient = -3', marks: '1 Mark' }
        ],
        examinerTip: 'Shortcut: In a_n = pn + q, common difference d is always p.',
        commonPitfall: 'Incorrect sign arithmetic when subtracting negative numbers.'
      }
    ]
  },
  {
    id: 'kvs-sci-2024-preboard',
    title: 'Kendriya Vidyalaya Sangathan (KVS) All-India Class 9 Annual Exam 2024 Science',
    subject: 'Science',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'PRE_BOARD',
    paperCode: 'KVS-HQ/PB-24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: false,
    totalQuestions: 15,
    generalInstructions: [
      'Top KVS National Model Pre-Board Paper prepared by Senior CBSE Evaluators.',
      'Features high-probability questions matching recent CBSE sample pattern.'
    ],
    questions: [
      {
        id: 'kvs24-q1',
        qNum: 1,
        section: 'B',
        marks: 2,
        topic: 'Physics: Work & Energy',
        questionText: 'State the work-energy theorem. A bullet of mass 20 g moving with 100 m/s penetrates a sandbag and comes to rest. Calculate the work done by the sand in stopping the bullet.',
        modelAnswer: 'Work-Energy Theorem: The net work done by all forces acting on an object equals the change in its kinetic energy (W = ΔK = K_f - K_i).\n\nNumerical:\nMass m = 20 g = 0.02 kg\nInitial velocity u = 100 m/s, Final velocity v = 0\nInitial K.E. = 1/2 × m × u² = 1/2 × 0.02 × (100)² = 100 J.\nFinal K.E. = 0\nWork done W = K_f - K_i = 0 - 100 = -100 Joules.\nHence, work done by the resistive force of sand is -100 J (or 100 J against motion).',
        stepMarking: [
          { step: 'Statement of Work-Energy Theorem', marks: '1 Mark' },
          { step: 'Conversion of 20g to 0.02kg and calculation W = -100 J', marks: '1 Mark' }
        ],
        examinerTip: 'Always convert grams to kilograms (SI units) first before calculating kinetic energy!',
        commonPitfall: 'Forgetting to convert 20 g into kg leads to an answer off by a factor of 1000.'
      }
    ]
  },
  // ─── CLASS 11 CBSE MODEL PAPERS & PRE-BOARDS ──────────────────────────────
  {
    id: 'cbse-c11-phy-2024-sqp',
    title: 'CBSE Class 11 Physics Model Question Paper 2024',
    subject: 'Physics',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'CBSE_SAMPLE',
    paperCode: '042/PHY/24',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    pdfUrl: '/pyq-papers/cbse-c11-physics-2024.pdf',
    generalInstructions: [
      'There are 33 questions in this question paper with internal choice.',
      'Section A: 16 simple and MCQs of 1 mark each.',
      'Section B: 5 Very Short Answer questions of 2 marks each.',
      'Section C: 7 Short Answer questions of 3 marks each.',
      'Section D: 2 Case Study based questions of 4 marks each.',
      'Section E: 3 Long Answer questions of 5 marks each.',
      'All calculations must use standard SI units.'
    ],
    questions: [
      {
        id: 'c11-phy-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Units and Measurements',
        questionText: 'The dimensions of Planck\'s constant (h) are the same as that of:',
        options: [
          'A) Linear momentum',
          'B) Angular momentum',
          'C) Energy',
          'D) Power'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Angular momentum.\nDimension of Planck constant h: E = hν => [h] = [E] / [ν] = [ML²T⁻²] / [T⁻¹] = [ML²T⁻¹].\nAngular momentum L = r × p => [L] = [L] × [MLT⁻¹] = [ML²T⁻¹].\nHence, both have identical dimensional formulas [ML²T⁻¹].',
        stepMarking: [
          { step: 'Identification of formula E = hν or dimension [ML²T⁻¹]', marks: '1/2 Mark' },
          { step: 'Correct option B (Angular momentum)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Remember Bohr\'s postulate: mvr = nh / (2π). This directly implies [mvr] = [h].',
        commonPitfall: 'Confusing angular momentum with linear momentum ([MLT⁻¹]).'
      },
      {
        id: 'c11-phy-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Motion in a Plane (Vectors)',
        questionText: 'For a projectile fired at an angle θ with the horizontal, the ratio of maximum height (H) to the horizontal range (R) is:',
        options: [
          'A) (tan θ) / 4',
          'B) (tan θ) / 2',
          'C) 4 tan θ',
          'D) 2 tan θ'
        ],
        correctOption: 'A',
        modelAnswer: 'A) (tan θ) / 4.\nH = (u² sin² θ) / (2g)\nR = (u² sin 2θ) / g = (2u² sin θ cos θ) / g\nH / R = [ (u² sin² θ) / (2g) ] / [ (2u² sin θ cos θ) / g ] = (sin θ) / (4 cos θ) = (tan θ) / 4.',
        stepMarking: [
          { step: 'Writing formulas of H and R', marks: '1/2 Mark' },
          { step: 'Dividing and simplifying to (tan θ) / 4 (Option A)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Remember the mnemonic equation: R tan θ = 4H.',
        commonPitfall: 'Forgetting the 2 factor in the denominator of H leading to tan θ / 2.'
      },
      {
        id: 'c11-phy-q3',
        qNum: 3,
        section: 'B',
        marks: 2,
        topic: 'Laws of Motion (Friction & Banking)',
        questionText: 'Derive the formula for the optimum speed (v_0) of a car on a banked frictionless curved road of radius R and banking angle θ.',
        modelAnswer: 'On a frictionless banked road, the normal reaction N resolves into:\n1. Vertical component: N cos θ = mg (balances weight)\n2. Horizontal component: N sin θ = (m v²) / R (provides necessary centripetal force)\n\nDividing equation (2) by equation (1):\n(N sin θ) / (N cos θ) = [ (m v²) / R ] / (mg)\ntan θ = v² / (R g)\n=> v = √(R g tan θ).\nHence, optimum speed v_0 = √(R g tan θ).',
        stepMarking: [
          { step: 'Resolution of Normal reaction: N cos θ = mg and N sin θ = mv²/R', marks: '1 Mark' },
          { step: 'Division and derivation of v = √(Rg tan θ)', marks: '1 Mark' }
        ],
        examinerTip: 'Draw a small free body diagram indicating N, mg and angle θ to secure full step marks.',
        commonPitfall: 'Resolving weight mg along normal instead of resolving normal reaction along vertical.'
      }
    ]
  },
  {
    id: 'cbse-c11-chem-2024-sqp',
    title: 'CBSE Class 11 Chemistry Annual Model Paper 2024',
    subject: 'Chemistry',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'CBSE_SAMPLE',
    paperCode: '043/CHE/24',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    pdfUrl: '/pyq-papers/cbse-c11-chemistry-2024.pdf',
    generalInstructions: [
      'Question paper comprises 5 sections: A, B, C, D and E.',
      'Section A: 16 Multiple Choice Questions carrying 1 mark each.',
      'Section B: 5 Short Answer Questions carrying 2 marks each.',
      'Use of log tables and calculators is not permitted.'
    ],
    questions: [
      {
        id: 'c11-chem-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Structure of Atom',
        questionText: 'What is the maximum number of electrons that can be accommodated in an orbital having n = 4, l = 2?',
        options: [
          'A) 2',
          'B) 6',
          'C) 10',
          'D) 14'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 2.\nCareful reading of the question: It asks for the number of electrons in AN ORBITAL (a single orbital), not a subshell! According to Pauli\'s Exclusion Principle, any single orbital can hold a maximum of 2 electrons with opposite spins.',
        stepMarking: [
          { step: 'Correct option A (2 electrons per individual orbital)', marks: '1 Mark' }
        ],
        examinerTip: 'Trap question: If asked "in 4d subshell", the answer is 10. If asked "in AN orbital", the answer is always 2!',
        commonPitfall: 'Selecting 10 electrons because l = 2 corresponds to d-subshell.'
      },
      {
        id: 'c11-chem-q2',
        qNum: 2,
        section: 'B',
        marks: 2,
        topic: 'Chemical Bonding & Molecular Structure',
        questionText: 'Using VSEPR theory, predict the shape and calculate the bond angle in ammonia (NH₃) molecule. Explain why its bond angle is less than 109.5°.',
        modelAnswer: '1. Shape: Trigonal Pyramidal (Geometry: Tetrahedral).\n2. Central Nitrogen atom has 3 bond pairs and 1 lone pair of electrons (Total electron pairs = 4).\n3. According to VSEPR theory, lone pair - bond pair (lp-bp) repulsion is greater than bond pair - bond pair (bp-bp) repulsion.\n4. Due to stronger repulsive forces of the lone pair, the N-H bonds are pushed closer, reducing the tetrahedral angle from 109.5° to 107°.',
        stepMarking: [
          { step: 'Shape as Trigonal Pyramidal and bond angle 107°', marks: '1 Mark' },
          { step: 'Explanation: lp-bp repulsion > bp-bp repulsion', marks: '1 Mark' }
        ],
        examinerTip: 'Always mention the hierarchy of repulsion: lp-lp > lp-bp > bp-bp.',
        commonPitfall: 'Writing geometry as pyramidal instead of tetrahedral geometry and pyramidal shape.'
      }
    ]
  },
  {
    id: 'cbse-c11-math-2024-sqp',
    title: 'CBSE Class 11 Mathematics Annual Model Paper 2024',
    subject: 'Mathematics',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'CBSE_SAMPLE',
    paperCode: '041/MAT/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'CHALLENGING',
    isFree: false,
    totalQuestions: 38,
    pdfUrl: '/pyq-papers/cbse-c11-mathematics-2024.pdf',
    generalInstructions: [
      'This question paper contains 38 questions divided into 5 sections: A, B, C, D and E.',
      'Section A comprises 20 MCQs of 1 mark each (including 2 assertion-reason questions).'
    ],
    questions: [
      {
        id: 'c11-math-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Sets & Relations',
        questionText: 'If a set A has n elements, then the number of non-empty proper subsets of A is:',
        options: [
          'A) 2ⁿ',
          'B) 2ⁿ - 1',
          'C) 2ⁿ - 2',
          'D) 2ⁿ⁻¹'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 2ⁿ - 2.\nTotal number of subsets of A = 2ⁿ.\nTotal number of proper subsets = 2ⁿ - 1 (excluding set A itself).\nTotal number of NON-EMPTY proper subsets = 2ⁿ - 2 (excluding both set A and the empty set ∅).',
        stepMarking: [
          { step: 'Deduction: Total 2ⁿ, minus set itself and minus empty set = 2ⁿ - 2 (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the words "non-empty" and "proper" simultaneously. Each subtracts 1 subset.',
        commonPitfall: 'Choosing Option B (2ⁿ - 1) by ignoring the condition "non-empty".'
      }
    ]
  },
  {
    id: 'cbse-c11-bio-2024-sqp',
    title: 'CBSE Class 11 Biology Model Question Paper 2024',
    subject: 'Biology',
    targetClass: 'Class 11',
    year: 2024,
    paperType: 'CBSE_SAMPLE',
    paperCode: '044/BIO/24',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    pdfUrl: '/pyq-papers/cbse-c11-biology-2024.pdf',
    generalInstructions: [
      'Section A has 16 questions of 1 mark each.',
      'Neat and clean labeled diagrams are required wherever applicable.'
    ],
    questions: [
      {
        id: 'c11-bio-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Cell: The Unit of Life',
        questionText: 'The Fluid Mosaic Model of cell membrane was proposed by Singer and Nicolson in:',
        options: [
          'A) 1952',
          'B) 1972',
          'C) 1982',
          'D) 1962'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 1972.\nSinger and Nicolson proposed the widely accepted Fluid Mosaic Model of cell membrane in the year 1972, describing proteins as icebergs in a sea of lipids.',
        stepMarking: [
          { step: 'Option B (1972)', marks: '1 Mark' }
        ],
        examinerTip: 'NCERT direct fact: Remember 1972 Singer & Nicolson Fluid Mosaic Model.',
        commonPitfall: 'Confusing 1972 with 1953 (Watson and Crick DNA double helix).'
      }
    ]
  }
];
