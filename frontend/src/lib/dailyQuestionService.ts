export interface DailyQuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface DailyQuestionItem {
  id: string;
  targetClass: string; // 'Class 11' | 'Class 12' | 'Class 10'
  title: string;
  subject: string;
  topic: string;
  marks: string;
  question: string;
  options: DailyQuestionOption[];
  correctOption: string;
  correctOptionLabel: string;
  explanation: string;
  stepMarks: string;
  commonTrap: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  paperSource: string;
  tags: string[];
}

export const CLASS_11_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c11-phy-day-1',
    targetClass: 'Class 11',
    title: "Dimensions of Planck's Constant",
    subject: 'Class 11 Physics',
    topic: 'Units and Measurements',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: "The dimensions of Planck's constant (h) are identical to the dimensional formula of which of the following physical quantities?",
    options: [
      { id: 'A', text: 'Linear momentum (p = mv)' },
      { id: 'B', text: 'Angular momentum (L = r × p)' },
      { id: 'C', text: 'Energy (E = mc²)' },
      { id: 'D', text: 'Power (P = W / t)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Angular momentum)',
    explanation: "From Planck's quantum relation: E = hν => [h] = [E] / [ν] = [ML²T⁻²] / [T⁻¹] = [ML²T⁻¹]. For angular momentum L = r × p => [L] = [L] · [MLT⁻¹] = [ML²T⁻¹]. Thus, both share the exact same dimensional formula [ML²T⁻¹].",
    stepMarks: "Step: Identification of [h] = [ML²T⁻¹] (+1/2 Mark) | Matching with Angular Momentum L (+1/2 Mark)",
    commonTrap: "Trap: Students often confuse linear momentum [MLT⁻¹] with angular momentum [ML²T⁻¹].",
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Annual Physics Examination (Set 1)',
    tags: ['Physics', 'Units & Dimensions', 'High Yield']
  },
  {
    id: 'c11-chem-day-2',
    targetClass: 'Class 11',
    title: 'Maximum Electrons in a Single Orbital',
    subject: 'Class 11 Chemistry',
    topic: 'Structure of Atom',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'What is the maximum number of electrons that can be accommodated in an orbital having quantum numbers n = 4, l = 2?',
    options: [
      { id: 'A', text: '2 electrons' },
      { id: 'B', text: '6 electrons' },
      { id: 'C', text: '10 electrons' },
      { id: 'D', text: '14 electrons' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (2 electrons)',
    explanation: "Carefully read the question phrasing: it asks for electrons in 'AN ORBITAL' (a single spatial orbital), not the entire 4d subshell! According to Pauli's Exclusion Principle, no two electrons can have the same four quantum numbers, which limits any single individual orbital to a maximum of 2 electrons of opposite spins (mₛ = +1/2, -1/2).",
    stepMarks: "Step: Pauli's Exclusion Principle recognition (+1/2 Mark) | Correct value 2 (+1/2 Mark)",
    commonTrap: "Trap: l = 2 represents the 4d subshell which holds 10 electrons in total, but any single orbital in it holds only 2 electrons!",
    difficulty: 'CHALLENGING',
    paperSource: 'CBSE Class 11 Chemistry Annual Paper',
    tags: ['Chemistry', 'Structure of Atom', 'Sure-Shot PYQ']
  },
  {
    id: 'c11-math-day-3',
    targetClass: 'Class 11',
    title: 'Number of Non-Empty Proper Subsets',
    subject: 'Class 11 Mathematics',
    topic: 'Sets & Relations',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'If a finite set A contains n distinct elements, what is the total number of non-empty proper subsets of set A?',
    options: [
      { id: 'A', text: '2ⁿ' },
      { id: 'B', text: '2ⁿ - 1' },
      { id: 'C', text: '2ⁿ - 2' },
      { id: 'D', text: '2ⁿ⁻¹' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (2ⁿ - 2)',
    explanation: 'Total number of subsets of a set with n elements is 2ⁿ. Proper subsets exclude the set itself (subtract 1). Non-empty subsets exclude the empty null set ∅ (subtract another 1). Therefore, non-empty proper subsets = 2ⁿ - 1 - 1 = 2ⁿ - 2.',
    stepMarks: 'Step: Total subsets = 2ⁿ (+1/2 Mark) | Subtracting self and empty set = 2ⁿ - 2 (+1/2 Mark)',
    commonTrap: 'Trap: Choosing 2ⁿ - 1 by forgetting that the empty set ∅ must also be excluded because the question specifies "non-empty".',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Mathematics Model Question Paper',
    tags: ['Mathematics', 'Sets', 'Formulas']
  },
  {
    id: 'c11-bio-day-4',
    targetClass: 'Class 11',
    title: 'Fluid Mosaic Model of Cell Membrane',
    subject: 'Class 11 Biology',
    topic: 'Cell: The Unit of Life',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'The universally accepted Fluid Mosaic Model of the plasma membrane was proposed by Singer and Nicolson in which year?',
    options: [
      { id: 'A', text: '1953' },
      { id: 'B', text: '1972' },
      { id: 'C', text: '1982' },
      { id: 'D', text: '1965' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (1972)',
    explanation: 'S.J. Singer and G.L. Nicolson proposed the Fluid Mosaic Model in 1972. According to this model, the quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer ("protein icebergs floating in a sea of lipids").',
    stepMarks: 'Step: Direct NCERT recall: Singer & Nicolson, 1972 (+1 Mark)',
    commonTrap: 'Trap: Confusing 1972 with 1953 (the year Watson and Crick published the DNA double helix model).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Biology Annual Paper',
    tags: ['Biology', 'Cell Biology', 'NCERT Direct']
  },
  {
    id: 'c11-phy-day-5',
    targetClass: 'Class 11',
    title: 'Ratio of Max Height to Horizontal Range',
    subject: 'Class 11 Physics',
    topic: 'Motion in a Plane (Projectile Motion)',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'For an object launched in projectile motion at an angle θ with the horizontal ground, the ratio of maximum height (H) to horizontal range (R) is given by:',
    options: [
      { id: 'A', text: '(tan θ) / 4' },
      { id: 'B', text: '(tan θ) / 2' },
      { id: 'C', text: '4 tan θ' },
      { id: 'D', text: '2 tan θ' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A ((tan θ) / 4)',
    explanation: 'Maximum height H = (u² sin² θ) / (2g) and Range R = (2u² sin θ cos θ) / g. Dividing H by R gives H / R = [u² sin² θ / (2g)] / [2u² sin θ cos θ / g] = sin θ / (4 cos θ) = (tan θ) / 4. Hence R tan θ = 4H.',
    stepMarks: 'Step: H and R formula ratio (+1/2 Mark) | Simplification to (tan θ)/4 (+1/2 Mark)',
    commonTrap: 'Trap: Forgetting the factor of 2 in the denominator of H, mistakenly arriving at tan θ / 2.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Physics Model Paper',
    tags: ['Physics', 'Kinematics', 'Formulas']
  },
  {
    id: 'c11-chem-day-6',
    targetClass: 'Class 11',
    title: 'First Ionization Enthalpy Anomaly (N vs O)',
    subject: 'Class 11 Chemistry',
    topic: 'Classification of Elements & Periodicity',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'Why is the first ionization enthalpy (ΔᵢH₁) of Nitrogen (Z=7) greater than that of Oxygen (Z=8), despite Oxygen having a higher nuclear charge?',
    options: [
      { id: 'A', text: 'Nitrogen has smaller atomic radius than Oxygen' },
      { id: 'B', text: 'Nitrogen has an extra stable half-filled 2p³ subshell' },
      { id: 'C', text: 'Oxygen has greater shielding effect' },
      { id: 'D', text: 'Nitrogen has higher electronegativity than Oxygen' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Extra stable half-filled 2p³ subshell)',
    explanation: "Electronic configuration of Nitrogen is 1s² 2s² 2p³ (half-filled p-subshell with high exchange energy and spherical symmetry). Oxygen is 1s² 2s² 2p⁴ (four electrons in 2p, where removing one electron yields the more stable half-filled configuration). Extra energy is required to disrupt Nitrogen's stable half-filled subshell.",
    stepMarks: 'Step: Electronic configuration 2p³ vs 2p⁴ (+1/2 Mark) | Half-filled stability explanation (+1/2 Mark)',
    commonTrap: 'Trap: Assuming ionization energy strictly increases monotonically from left to right without accounting for subshell stability.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Chemistry Board Question Bank',
    tags: ['Chemistry', 'Periodic Table', 'High Yield']
  },
  {
    id: 'c11-math-day-7',
    targetClass: 'Class 11',
    title: 'Perpendicular Lines Slope Condition',
    subject: 'Class 11 Mathematics',
    topic: 'Straight Lines',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'Two non-vertical lines L₁ and L₂ having slopes m₁ and m₂ are perpendicular to each other if and only if:',
    options: [
      { id: 'A', text: 'm₁ = m₂' },
      { id: 'B', text: 'm₁ + m₂ = 0' },
      { id: 'C', text: 'm₁ · m₂ = -1' },
      { id: 'D', text: 'm₁ · m₂ = 1' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (m₁ · m₂ = -1)',
    explanation: 'If angle between two lines is θ = 90°, tan 90° = ∞ => |(m₂ - m₁) / (1 + m₁m₂)| = ∞. This occurs when the denominator equals zero: 1 + m₁m₂ = 0 => m₁ · m₂ = -1.',
    stepMarks: 'Step: Derivation from tan θ formula (+1/2 Mark) | Condition m₁m₂ = -1 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing parallel lines (m₁ = m₂) with perpendicular lines (m₁m₂ = -1).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Mathematics Standard Annual Paper',
    tags: ['Mathematics', 'Coordinate Geometry', 'Sure-Shot PYQ']
  },
  {
    id: 'c11-bio-day-8',
    targetClass: 'Class 11',
    title: 'DNA Replication Stage in Cell Cycle',
    subject: 'Class 11 Biology',
    topic: 'Cell Cycle and Cell Division',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'In eukaryotic cells, semi-conservative replication of nuclear DNA and duplication of centrioles occur during which phase of the cell cycle?',
    options: [
      { id: 'A', text: 'G₁ Phase (Gap 1)' },
      { id: 'B', text: 'S Phase (Synthetic Phase)' },
      { id: 'C', text: 'G₂ Phase (Gap 2)' },
      { id: 'D', text: 'M Phase (Metaphase)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (S Phase - Synthetic Phase)',
    explanation: 'During the S phase (Synthesis phase), DNA replication takes place in the nucleus, doubling the amount of DNA per cell from 2C to 4C (chromosome number remains 2n). In animal cells, the centriole also duplicates in the cytoplasm during this phase.',
    stepMarks: 'Step: Identification of S Phase (+1 Mark)',
    commonTrap: 'Trap: Thinking chromosome number doubles in S phase (only DNA content 2C -> 4C doubles, ploidy stays 2n).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Biology Board Exam Sample',
    tags: ['Biology', 'Cell Division', 'NCERT Direct']
  },
  {
    id: 'c11-phy-day-9',
    targetClass: 'Class 11',
    title: 'Variation of Gravity with Depth',
    subject: 'Class 11 Physics',
    topic: 'Gravitation',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'The acceleration due to gravity (g_d) at a depth d below the surface of the Earth of radius R is related to the surface gravity g by:',
    options: [
      { id: 'A', text: 'g_d = g (1 - d / R)' },
      { id: 'B', text: 'g_d = g (1 - 2d / R)' },
      { id: 'C', text: 'g_d = g (1 + d / R)' },
      { id: 'D', text: 'g_d = g (R / (R + d))²' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (g_d = g (1 - d / R))',
    explanation: 'Inside the Earth at depth d, the effective mass attracting the body is only the inner sphere of radius (R - d). Thus g_d = G M_eff / (R - d)² = g (1 - d / R). At the Earth center (d = R), g_d = 0.',
    stepMarks: 'Step: Formula g_d = g(1 - d/R) (+1 Mark)',
    commonTrap: 'Trap: Confusing variation with height h (where g_h ≈ g(1 - 2h/R) for small h) with depth d (which is linear: g_d = g(1 - d/R)).',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Physics Board Question Bank',
    tags: ['Physics', 'Gravitation', 'Formulas']
  },
  {
    id: 'c11-chem-day-10',
    targetClass: 'Class 11',
    title: 'Spontaneity Criterion at Constant T and P',
    subject: 'Class 11 Chemistry',
    topic: 'Chemical Thermodynamics',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'For a chemical process occurring at constant temperature and pressure, which condition guarantees that the process is spontaneous in the forward direction?',
    options: [
      { id: 'A', text: 'ΔG > 0' },
      { id: 'B', text: 'ΔG < 0' },
      { id: 'C', text: 'ΔH = 0' },
      { id: 'D', text: 'ΔS_system < 0' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (ΔG < 0)',
    explanation: 'According to the Second Law of Thermodynamics and Gibbs-Helmholtz equation: ΔG = ΔH - TΔS. A process is spontaneous at constant T and P if and only if Gibbs free energy change is negative (ΔG < 0). At equilibrium, ΔG = 0.',
    stepMarks: 'Step: Gibbs free energy criterion ΔG < 0 (+1 Mark)',
    commonTrap: 'Trap: Assuming only exothermic reactions (ΔH < 0) are spontaneous; endothermic reactions can be spontaneous if TΔS > ΔH.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 11 Chemistry Model Paper',
    tags: ['Chemistry', 'Thermodynamics', 'High Yield']
  },
  {
    id: 'c11-math-day-11',
    targetClass: 'Class 11',
    title: 'Number of Diagonals in an n-sided Polygon',
    subject: 'Class 11 Mathematics',
    topic: 'Permutations & Combinations',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'The total number of diagonals that can be drawn in a convex polygon having n vertices (n sides) is given by:',
    options: [
      { id: 'A', text: 'ⁿC₂' },
      { id: 'B', text: 'n(n - 1) / 2' },
      { id: 'C', text: 'n(n - 3) / 2' },
      { id: 'D', text: 'ⁿP₂ - n' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (n(n - 3) / 2)',
    explanation: 'Total lines joining any 2 of the n vertices = ⁿC₂ = n(n - 1) / 2. Out of these lines, exactly n lines are the sides of the polygon. Diagonals = ⁿC₂ - n = [n(n - 1) - 2n] / 2 = n(n - 3) / 2.',
    stepMarks: 'Step: Total lines ⁿC₂ minus n sides = n(n - 3)/2 (+1 Mark)',
    commonTrap: 'Trap: Forgetting to subtract the n outer sides and selecting ⁿC₂.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Mathematics Annual Question Paper',
    tags: ['Mathematics', 'Combinatorics', 'Sure-Shot PYQ']
  },
  {
    id: 'c11-bio-day-12',
    targetClass: 'Class 11',
    title: 'Crossing Over Stage in Meiosis',
    subject: 'Class 11 Biology',
    topic: 'Cell Cycle and Cell Division',
    marks: '1 Mark (CBSE Class 11 Board PYQ)',
    question: 'During which sub-stage of Prophase I in Meiosis does crossing over (genetic recombination mediated by recombinase) take place between non-sister chromatids of homologous chromosomes?',
    options: [
      { id: 'A', text: 'Leptotene' },
      { id: 'B', text: 'Zygotene' },
      { id: 'C', text: 'Pachytene' },
      { id: 'D', text: 'Diplotene' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Pachytene)',
    explanation: 'In Pachytene, bivalent chromosomes clearly appear as tetrads. Crossing over between non-sister chromatids of homologous chromosomes occurs at recombination nodules, catalyzed by the enzyme recombinase.',
    stepMarks: 'Step: Identifying Pachytene as the stage of crossing over (+1 Mark)',
    commonTrap: 'Trap: Confusing Zygotene (synapsis/synaptonemal complex formation) and Diplotene (dissolution of synaptonemal complex and chiasmata formation) with Pachytene.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 11 Biology Model Paper',
    tags: ['Biology', 'Meiosis', 'NCERT Direct']
  }
];

export const CLASS_12_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c12-phy-day-1',
    targetClass: 'Class 12',
    title: 'Torque on an Electric Dipole in Uniform Electric Field',
    subject: 'Class 12 Physics',
    topic: 'Electric Charges and Fields',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'An electric dipole of dipole moment p is placed in a uniform electric field E at an angle θ with the direction of the field. The torque acting on the dipole is maximum when θ is:',
    options: [
      { id: 'A', text: '0°' },
      { id: 'B', text: '45°' },
      { id: 'C', text: '90°' },
      { id: 'D', text: '180°' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (90°)',
    explanation: 'The torque acting on an electric dipole in a uniform electric field is given by vector cross product: τ = p × E, whose magnitude is τ = pE sin θ. Torque is maximum when sin θ = 1, which occurs at θ = 90° (when the dipole is perpendicular to the electric field).',
    stepMarks: 'Step: Formula τ = pE sin θ (+1/2 Mark) | Maximum condition sin 90° = 1 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing torque τ = pE sin θ (maximum at 90°) with potential energy U = -pE cos θ (minimum/most stable at 0°).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Physics Board Examination',
    tags: ['Physics', 'Electrostatics', 'High Yield']
  },
  {
    id: 'c12-chem-day-2',
    targetClass: 'Class 12',
    title: "Henry's Law Constant and Gas Solubility in Liquids",
    subject: 'Class 12 Chemistry',
    topic: 'Solutions',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: "According to Henry's law, as the temperature of a liquid solvent increases, the value of Henry's law constant (K_H) and the solubility of a gas in the liquid behave as:",
    options: [
      { id: 'A', text: 'K_H increases, solubility decreases' },
      { id: 'B', text: 'K_H decreases, solubility increases' },
      { id: 'C', text: 'Both K_H and solubility increase' },
      { id: 'D', text: 'Both K_H and solubility decrease' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (K_H increases, solubility decreases)',
    explanation: "Henry's law is p = K_H · χ (where χ is mole fraction of gas in liquid). For a given partial pressure p, higher K_H means lower solubility (χ = p / K_H). The dissolution of gas in liquid is an exothermic process (ΔH_sol < 0), so increasing temperature shifts equilibrium backwards, increasing K_H and decreasing the gas solubility. This is why aquatic species are more comfortable in cold water than warm water.",
    stepMarks: "Step: Henry's law relation χ = p/K_H (+1/2 Mark) | Temperature effect on K_H and solubility (+1/2 Mark)",
    commonTrap: "Trap: Assuming K_H is proportional to solubility; in fact, higher K_H implies lower solubility at given pressure!",
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Chemistry Board Examination (Set 56/1/1)',
    tags: ['Chemistry', 'Solutions', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-math-day-3',
    targetClass: 'Class 12',
    title: 'Determinant of Adjoint of a Square Matrix',
    subject: 'Class 12 Mathematics',
    topic: 'Matrices & Determinants',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'If A is a non-singular square matrix of order 3 and |A| = 5, what is the value of |adj(A)|?',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '25' },
      { id: 'C', text: '125' },
      { id: 'D', text: '15' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (25)',
    explanation: 'For any square matrix A of order n, the determinant of its adjoint is given by the standard identity: |adj(A)| = |A|ⁿ⁻¹. Here order n = 3 and |A| = 5. Therefore, |adj(A)| = |A|³⁻¹ = |A|² = 5² = 25.',
    stepMarks: 'Step: Property |adj(A)| = |A|ⁿ⁻¹ (+1/2 Mark) | Calculation 5² = 25 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing |adj(A)| = |A|ⁿ⁻¹ with |kA| = kⁿ|A| or computing 5³ = 125.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Mathematics Board Paper (Set 65/2/1)',
    tags: ['Mathematics', 'Determinants', 'Formulas']
  },
  {
    id: 'c12-bio-day-4',
    targetClass: 'Class 12',
    title: 'Ploidy Level of Primary Endosperm Nucleus (PEN)',
    subject: 'Class 12 Biology',
    topic: 'Sexual Reproduction in Flowering Plants',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'In angiosperms, double fertilization involves syngamy and triple fusion. What is the ploidy level of the Primary Endosperm Nucleus (PEN)?',
    options: [
      { id: 'A', text: 'Haploid (n)' },
      { id: 'B', text: 'Diploid (2n)' },
      { id: 'C', text: 'Triploid (3n)' },
      { id: 'D', text: 'Tetraploid (4n)' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Triploid - 3n)',
    explanation: 'In angiosperms, one haploid male gamete (n) fuses with the two haploid polar nuclei (n + n = 2n) present in the central cell to produce the triploid (3n) Primary Endosperm Nucleus (PEN). This event is called triple fusion, giving endosperm a 3n chromosome complement.',
    stepMarks: 'Step: Triple fusion definition (n + 2n) (+1/2 Mark) | Resulting ploidy 3n (+1/2 Mark)',
    commonTrap: 'Trap: Confusing syngamy (egg cell + male gamete = 2n zygote) with triple fusion (polar nuclei + male gamete = 3n PEN).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Biology Board Paper',
    tags: ['Biology', 'Reproduction', 'NCERT Direct']
  },
  {
    id: 'c12-phy-day-5',
    targetClass: 'Class 12',
    title: 'Energy Stored and Capacitance with Dielectric Slab',
    subject: 'Class 12 Physics',
    topic: 'Electrostatic Potential and Capacitance',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'A parallel plate capacitor is charged by a battery and then disconnected from the battery. A dielectric slab of dielectric constant K is now inserted between the plates. What happens to the capacitance (C) and the electrostatic energy stored (U)?',
    options: [
      { id: 'A', text: 'C increases to KC, U increases to KU' },
      { id: 'B', text: 'C increases to KC, U decreases to U/K' },
      { id: 'C', text: 'C decreases to C/K, U decreases to U/K' },
      { id: 'D', text: 'C remains unchanged, U decreases' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (C increases to KC, U decreases to U/K)',
    explanation: 'When the battery is disconnected, the charge Q on the plates remains constant. Inserting a dielectric of constant K increases capacitance from C to C\' = KC. The stored energy is U = Q² / (2C). Since Q is constant and C increases by factor K, the new stored energy is U\' = Q² / (2KC) = U / K. Hence energy decreases by factor K.',
    stepMarks: 'Step: Charge Q remains constant (+1/2 Mark) | U\' = Q²/(2KC) = U/K (+1/2 Mark)',
    commonTrap: 'Trap: Using U = 1/2 CV² and assuming V is constant; V is only constant when the battery remains connected!',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Physics Board Paper',
    tags: ['Physics', 'Capacitors', 'High Yield']
  },
  {
    id: 'c12-chem-day-6',
    targetClass: 'Class 12',
    title: 'Unit of Rate Constant for First Order Reaction',
    subject: 'Class 12 Chemistry',
    topic: 'Chemical Kinetics',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'The SI unit of the rate constant (k) for a first-order chemical reaction is:',
    options: [
      { id: 'A', text: 'mol L⁻¹ s⁻¹' },
      { id: 'B', text: 'L mol⁻¹ s⁻¹' },
      { id: 'C', text: 's⁻¹' },
      { id: 'D', text: 'L² mol⁻² s⁻¹' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (s⁻¹)',
    explanation: 'General formula for unit of rate constant is (mol L⁻¹)¹⁻ⁿ · s⁻¹ (where n is reaction order). For a first order reaction, n = 1 => (mol L⁻¹)¹⁻¹ · s⁻¹ = (mol L⁻¹)⁰ · s⁻¹ = s⁻¹ (time⁻¹). The rate constant is independent of concentration units.',
    stepMarks: 'Step: General formula (mol/L)¹⁻ⁿ s⁻¹ (+1/2 Mark) | n=1 gives s⁻¹ (+1/2 Mark)',
    commonTrap: 'Trap: Confusing first order (s⁻¹) with zero order (mol L⁻¹ s⁻¹) or second order (L mol⁻¹ s⁻¹).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Chemistry Board Exam',
    tags: ['Chemistry', 'Kinetics', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-math-day-7',
    targetClass: 'Class 12',
    title: 'Definite Integral of an Odd Continuous Function',
    subject: 'Class 12 Mathematics',
    topic: 'Integrals (Definite Integrals)',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'The value of the definite integral ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx is equal to:',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: 'π' },
      { id: 'C', text: '2π' },
      { id: 'D', text: '1' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (π)',
    explanation: 'By the property of definite integrals: ∫_{-a}^{a} f(x) dx = 0 if f(x) is an odd function, and 2 ∫₀ᵃ f(x) dx if f(x) is even. Here x³, x cos x, and tan⁵ x are all odd functions because f(-x) = -f(x). Their integrals over [-π/2, π/2] evaluate to 0. We are left only with the constant term 1: ∫_{-π/2}^{π/2} 1 dx = [x]_{-π/2}^{π/2} = π/2 - (-π/2) = π.',
    stepMarks: 'Step: Identifying odd terms integrating to 0 (+1/2 Mark) | Integrating 1 dx = π (+1/2 Mark)',
    commonTrap: 'Trap: Answering 0 by carelessly assuming the entire integrand is odd, overlooking the +1 constant term.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Mathematics Board Paper',
    tags: ['Mathematics', 'Calculus', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-bio-day-8',
    targetClass: 'Class 12',
    title: 'Direction of Okazaki Fragment Synthesis on Lagging Strand',
    subject: 'Class 12 Biology',
    topic: 'Molecular Basis of Inheritance',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'During DNA replication, the discontinuous synthesis of Okazaki fragments on the lagging template strand takes place in which direction?',
    options: [
      { id: 'A', text: "3' to 5'" },
      { id: 'B', text: "5' to 3'" },
      { id: 'C', text: 'Both 5\' to 3\' and 3\' to 5\'' },
      { id: 'D', text: 'Independent of polarity' }
    ],
    correctOption: 'B',
    correctOptionLabel: "Option B (5' to 3')",
    explanation: "DNA-dependent DNA polymerase can only catalyze polymerization strictly in the 5' -> 3' direction. On the template strand with polarity 5' -> 3', replication is discontinuous because the replication fork opens away from the direction of polymerization, producing short Okazaki fragments in the 5' -> 3' direction which are later joined by DNA ligase.",
    stepMarks: "Step: DNA polymerase 5' to 3' catalytic direction (+1/2 Mark) | Lagging strand synthesis recognition (+1/2 Mark)",
    commonTrap: "Trap: Confusing template polarity (which is 5' -> 3' on lagging strand) with the synthesized daughter strand polarity (which is always 5' -> 3').",
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 12 Biology Board Exam',
    tags: ['Biology', 'Genetics', 'NCERT Direct']
  },
  {
    id: 'c12-phy-day-9',
    targetClass: 'Class 12',
    title: "Lenz's Law and Conservation Principle",
    subject: 'Class 12 Physics',
    topic: 'Electromagnetic Induction',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: "Lenz's law of electromagnetic induction is a direct consequence of which fundamental law of physics?",
    options: [
      { id: 'A', text: 'Law of conservation of linear momentum' },
      { id: 'B', text: 'Law of conservation of energy' },
      { id: 'C', text: 'Law of conservation of electric charge' },
      { id: 'D', text: 'Law of conservation of angular momentum' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Law of conservation of energy)',
    explanation: "Lenz's law states that the polarity of induced emf is such that it produces a current whose magnetic field opposes the change in magnetic flux that produces it. The mechanical work done in overcoming this magnetic opposing force is transformed into electrical energy, satisfying the law of conservation of energy.",
    stepMarks: "Step: Opposition to flux change (+1/2 Mark) | Conservation of energy alignment (+1/2 Mark)",
    commonTrap: "Trap: Confusing Lenz's law (energy conservation) with Kirchhoff's Current Law (conservation of charge) or Loop Law (conservation of energy).",
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Physics Annual Board Exam',
    tags: ['Physics', 'Electromagnetism', 'High Yield']
  },
  {
    id: 'c12-chem-day-10',
    targetClass: 'Class 12',
    title: 'Hybridization and Magnetic Character of Nickel Tetracarbonyl',
    subject: 'Class 12 Chemistry',
    topic: 'Coordination Compounds',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'According to Valence Bond Theory, the hybridization and magnetic nature of [Ni(CO)₄] are respectively:',
    options: [
      { id: 'A', text: 'dsp², diamagnetic' },
      { id: 'B', text: 'sp³, paramagnetic' },
      { id: 'C', text: 'sp³, diamagnetic' },
      { id: 'D', text: 'dsp², paramagnetic' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (sp³, diamagnetic)',
    explanation: 'Nickel in [Ni(CO)₄] is in zero oxidation state: Ni⁰ = 3d⁸ 4s². Carbon monoxide (CO) is a strong field ligand that forces the two 4s electrons into the 3d subshell to pair with the 3d electrons, resulting in a completely filled 3d¹⁰ configuration. The vacant 4s and three 4p orbitals hybridize to form four sp³ hybrid orbitals. Having zero unpaired electrons, it is diamagnetic with tetrahedral geometry.',
    stepMarks: 'Step: 3d¹⁰ paired configuration due to strong CO (+1/2 Mark) | sp³ tetrahedral & diamagnetic (+1/2 Mark)',
    commonTrap: 'Trap: Assuming Ni²⁺ in [Ni(CN)₄]²⁻ (which is dsp² square planar) instead of neutral Ni⁰ in [Ni(CO)₄] (sp³ tetrahedral).',
    difficulty: 'CHALLENGING',
    paperSource: 'CBSE Class 12 Chemistry Board Examination',
    tags: ['Chemistry', 'Coordination Chemistry', 'High Yield']
  },
  {
    id: 'c12-math-day-11',
    targetClass: 'Class 12',
    title: 'Condition for Perpendicular Vectors',
    subject: 'Class 12 Mathematics',
    topic: 'Vector Algebra',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'If vectors a = 2i + λj + k and b = 4i - 2j - 2k are perpendicular to each other, what is the value of scalar parameter λ?',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '-3' },
      { id: 'C', text: '6' },
      { id: 'D', text: '0' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (3)',
    explanation: 'Two non-zero vectors a and b are perpendicular if and only if their scalar (dot) product equals zero: a · b = 0 => (2)(4) + (λ)(-2) + (1)(-2) = 0 => 8 - 2λ - 2 = 0 => 6 - 2λ = 0 => 2λ = 6 => λ = 3.',
    stepMarks: 'Step: a · b = 0 condition (+1/2 Mark) | 8 - 2λ - 2 = 0 => λ = 3 (+1/2 Mark)',
    commonTrap: 'Trap: Calculation sign error in (1)(-2), yielding λ = 5 or -3.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Mathematics Model Examination',
    tags: ['Mathematics', 'Vectors', 'Sure-Shot PYQ']
  },
  {
    id: 'c12-bio-day-12',
    targetClass: 'Class 12',
    title: 'Recognition Sequence of Restriction Enzyme EcoRI',
    subject: 'Class 12 Biology',
    topic: 'Biotechnology: Principles and Processes',
    marks: '1 Mark (CBSE Class 12 Board PYQ)',
    question: 'The specific palindromic nucleotide recognition sequence recognized and cleaved by the restriction endonuclease EcoRI is:',
    options: [
      { id: 'A', text: "5'-GAATTC-3'" },
      { id: 'B', text: "5'-GGATCC-3'" },
      { id: 'C', text: "5'-AAGCTT-3'" },
      { id: 'D', text: "5'-GATATC-3'" }
    ],
    correctOption: 'A',
    correctOptionLabel: "Option A (5'-GAATTC-3')",
    explanation: "EcoRI inspects the length of a DNA sequence and binds to the specific 6 base-pair palindromic sequence 5'-GAATTC-3' (opposite strand 3'-CTTAAG-5'). It cuts each of the two strands of the double helix at a specific point between G and A, leaving single-stranded sticky ends (overhangs).",
    stepMarks: "Step: EcoRI palindromic sequence recognition (+1 Mark)",
    commonTrap: "Trap: Confusing EcoRI (5'-GAATTC-3') with BamHI (5'-GGATCC-3') or HindIII (5'-AAGCTT-3').",
    difficulty: 'EASY',
    paperSource: 'CBSE Class 12 Biology Board Exam Sample Paper',
    tags: ['Biology', 'Biotechnology', 'NCERT Direct']
  }
];

export const CLASS_9_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c9-phy-day-1',
    targetClass: 'Class 9',
    title: 'Displacement on Circular Track',
    subject: 'Class 9 Science',
    topic: 'Physics: Motion',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the magnitude of displacement at the end of 2 minutes 20 seconds?',
    options: [
      { id: 'A', text: '0 m' },
      { id: 'B', text: '200 m' },
      { id: 'C', text: '314 m' },
      { id: 'D', text: '2200 m' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (200 m)',
    explanation: 'Total time = 2 min 20 s = 140 s. Number of rounds = 140 / 40 = 3.5 rounds. After 3 complete rounds, the athlete returns to the start point (displacement = 0). After the additional 0.5 round, the athlete is at the diametrically opposite point of the circle. Thus, the shortest straight line between initial and final points is equal to the track diameter = 200 m.',
    stepMarks: 'Step: Calculating 3.5 rounds (+1/2 Mark) | Diameter opposite point = 200 m (+1/2 Mark)',
    commonTrap: 'Trap: Calculating total distance travelled (3.5 × 2πr = 2200 m) instead of straight-line displacement (200 m).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Examination',
    tags: ['Science', 'Motion', 'Physics', 'NCERT Direct']
  },
  {
    id: 'c9-chem-day-2',
    targetClass: 'Class 9',
    title: 'Conditions for Liquefaction of Gases',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Matter in Our Surroundings',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which combination of physical conditions is most effective for liquefying atmospheric gases into a liquid state?',
    options: [
      { id: 'A', text: 'High temperature and high pressure' },
      { id: 'B', text: 'Low temperature and low pressure' },
      { id: 'C', text: 'Low temperature and high pressure' },
      { id: 'D', text: 'High temperature and low pressure' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Low temperature and high pressure)',
    explanation: 'According to kinetic molecular theory, applying high pressure compresses the gas particles close together, overcoming their intermolecular distance. Simultaneously, lowering the temperature decreases their kinetic energy, allowing intermolecular forces of attraction to bind them into a liquid.',
    stepMarks: 'Step: High pressure reduces particle distance (+1/2 Mark) | Low temperature reduces kinetic energy (+1/2 Mark)',
    commonTrap: 'Trap: High temperature increases kinetic energy, making particles move faster and escape as gas, not condense!',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Paper',
    tags: ['Science', 'Chemistry', 'Matter in Our Surroundings', 'NCERT Direct']
  },
  {
    id: 'c9-bio-day-3',
    targetClass: 'Class 9',
    title: 'Powerhouse of the Cell',
    subject: 'Class 9 Science',
    topic: 'Biology: The Fundamental Unit of Life',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which cell organelle is known as the "powerhouse of the cell", and which energy currency molecule does it produce?',
    options: [
      { id: 'A', text: 'Ribosome — synthesizes proteins' },
      { id: 'B', text: 'Mitochondria — produces ATP' },
      { id: 'C', text: 'Lysosome — produces digestive enzymes' },
      { id: 'D', text: 'Golgi Apparatus — produces secretory vesicles' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Mitochondria — produces ATP)',
    explanation: 'Mitochondria are known as the powerhouses of the cell because they generate ATP (Adenosine Triphosphate) molecules through cellular respiration. ATP acts as the universal chemical energy currency for vital life processes and metabolic reactions.',
    stepMarks: 'Step: Identification of Mitochondria (+1/2 Mark) | ATP as cellular energy currency (+1/2 Mark)',
    commonTrap: 'Trap: Confusing Mitochondria with Lysosomes (which are called the "suicide bags" of the cell).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Board Sample',
    tags: ['Science', 'Biology', 'Cell Biology', 'NCERT Direct']
  },
  {
    id: 'c9-phy-day-4',
    targetClass: 'Class 9',
    title: 'Linear Momentum of a Moving Body',
    subject: 'Class 9 Science',
    topic: 'Physics: Force and Laws of Motion',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'A vehicle of mass 1200 kg travels at a constant velocity of 20 m/s. What is the magnitude of its linear momentum?',
    options: [
      { id: 'A', text: '60 kg·m/s' },
      { id: 'B', text: '12000 kg·m/s' },
      { id: 'C', text: '24000 kg·m/s' },
      { id: 'D', text: '240000 kg·m/s' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (24000 kg·m/s)',
    explanation: 'Linear momentum (p) is the product of mass (m) and velocity (v): p = m × v = 1200 kg × 20 m/s = 24000 kg·m/s (or N·s). Momentum is a vector quantity having the same direction as velocity.',
    stepMarks: 'Step: Formula p = mv (+1/2 Mark) | Calculation 1200 × 20 = 24000 kg·m/s (+1/2 Mark)',
    commonTrap: 'Trap: Missing a zero in multiplication (12000 instead of 24000) or confusing momentum with kinetic energy (1/2 mv² = 240000 J).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Paper',
    tags: ['Science', 'Physics', 'Laws of Motion', 'Formulas']
  },
  {
    id: 'c9-chem-day-5',
    targetClass: 'Class 9',
    title: 'Tyndall Effect in Colloidal Solutions',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Is Matter Around Us Pure',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which of the following mixtures exhibits the Tyndall effect when a beam of light is passed through it?',
    options: [
      { id: 'A', text: 'Common salt aqueous solution' },
      { id: 'B', text: 'Copper sulfate solution' },
      { id: 'C', text: 'Milk / Starch solution' },
      { id: 'D', text: 'Sugar aqueous solution' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Milk / Starch solution)',
    explanation: 'The Tyndall effect is the scattering of a visible light beam by colloidal particles. Salt, sugar, and copper sulfate form true solutions where solute particles are smaller than 1 nm and cannot scatter light. Milk and starch solutions are colloids where particle sizes (1–100 nm) are sufficiently large to scatter light along the beam path.',
    stepMarks: 'Step: Identification of colloid (Milk/Starch) (+1/2 Mark) | Tyndall light scattering principle (+1/2 Mark)',
    commonTrap: 'Trap: Believing copper sulfate scatters light because it has a bright blue color; colored true solutions do not scatter light.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 9 Science Periodic Assessment',
    tags: ['Science', 'Chemistry', 'Colloids', 'Sure-Shot PYQ']
  },
  {
    id: 'c9-math-day-6',
    targetClass: 'Class 9',
    title: 'Classification of Real Numbers (Rational vs Irrational)',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Number Systems',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which of the following numbers is an irrational number?',
    options: [
      { id: 'A', text: '√225' },
      { id: 'B', text: '√23' },
      { id: 'C', text: '0.3796' },
      { id: 'D', text: '7.478478...' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (√23)',
    explanation: '√225 = 15 (a rational integer). 0.3796 is a terminating decimal (hence rational). 7.478478... is non-terminating but recurring (rational, p/q form). 23 is a prime number, and the square root of any non-perfect square is a non-terminating, non-recurring decimal, making √23 an irrational number.',
    stepMarks: 'Step: Non-perfect square square root is irrational (+1/2 Mark) | Identification of √23 (+1/2 Mark)',
    commonTrap: 'Trap: Confusing √225 with an irrational number because it has a square root symbol, forgetting 15² = 225.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Model Paper',
    tags: ['Mathematics', 'Number Systems', 'NCERT Direct']
  },
  {
    id: 'c9-phy-day-7',
    targetClass: 'Class 9',
    title: 'Weight of an Object on the Moon',
    subject: 'Class 9 Science',
    topic: 'Physics: Gravitation',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'An object weighs 60 N on the surface of the Earth. What will be its weight on the surface of the Moon?',
    options: [
      { id: 'A', text: '600 N' },
      { id: 'B', text: '60 N' },
      { id: 'C', text: '10 N' },
      { id: 'D', text: '6 N' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (10 N)',
    explanation: 'The acceleration due to gravity on the Moon (g_moon) is approximately 1/6th of that on Earth (g_earth) due to the smaller mass and radius of the Moon. Therefore, Weight on Moon = (1/6) × Weight on Earth = (1/6) × 60 N = 10 N.',
    stepMarks: 'Step: W_moon = (1/6) * W_earth (+1/2 Mark) | 60 / 6 = 10 N (+1/2 Mark)',
    commonTrap: 'Trap: Confusing weight with mass. Mass remains constant everywhere, but weight is force W = mg and reduces by a factor of 6 on the Moon.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Annual Exam',
    tags: ['Science', 'Physics', 'Gravitation', 'High Yield']
  },
  {
    id: 'c9-bio-day-8',
    targetClass: 'Class 9',
    title: 'Vascular Tissues in Plants',
    subject: 'Class 9 Science',
    topic: 'Biology: Tissues',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'Which complex permanent tissue is responsible for the unidirectional conduction of water and dissolved minerals from roots to the leaves in vascular plants?',
    options: [
      { id: 'A', text: 'Phloem' },
      { id: 'B', text: 'Xylem' },
      { id: 'C', text: 'Collenchyma' },
      { id: 'D', text: 'Parenchyma' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Xylem)',
    explanation: 'Xylem consists of tracheids, vessels, xylem parenchyma, and xylem fibres. It provides unidirectional transport of water and mineral salts absorbed from the soil upward to stems and leaves. Phloem conducts prepared food (sucrose) bidirectionally from source leaves to storage organs.',
    stepMarks: 'Step: Identification of Xylem as water conducting tissue (+1 Mark)',
    commonTrap: 'Trap: Confusing Xylem (water/minerals) with Phloem (food/photosynthates).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Board Sample',
    tags: ['Science', 'Biology', 'Plant Tissues', 'NCERT Direct']
  },
  {
    id: 'c9-chem-day-9',
    targetClass: 'Class 9',
    title: 'Molecular Mass Calculation of Water',
    subject: 'Class 9 Science',
    topic: 'Chemistry: Atoms and Molecules',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the relative molecular mass of water (H₂O), given atomic masses H = 1 u and O = 16 u?',
    options: [
      { id: 'A', text: '17 u' },
      { id: 'B', text: '18 u' },
      { id: 'C', text: '34 u' },
      { id: 'D', text: '16 u' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (18 u)',
    explanation: 'Molecular mass of H₂O = 2 × (Atomic mass of Hydrogen) + 1 × (Atomic mass of Oxygen) = 2 × (1 u) + 1 × (16 u) = 2 u + 16 u = 18 u (unified mass).',
    stepMarks: 'Step: 2(1) + 16 = 18 u (+1 Mark)',
    commonTrap: 'Trap: Forgetting that water has 2 hydrogen atoms, computing 1 + 16 = 17 u.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Science Periodic Test',
    tags: ['Science', 'Chemistry', 'Atoms & Molecules', 'Formulas']
  },
  {
    id: 'c9-math-day-10',
    targetClass: 'Class 9',
    title: 'Zero of a Linear Polynomial',
    subject: 'Class 9 Mathematics',
    topic: 'Mathematics: Polynomials',
    marks: '1 Mark (CBSE Class 9 Annual Exam)',
    question: 'What is the zero of the linear polynomial p(x) = 2x + 5?',
    options: [
      { id: 'A', text: '5 / 2' },
      { id: 'B', text: '-5 / 2' },
      { id: 'C', text: '2 / 5' },
      { id: 'D', text: '-2 / 5' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (-5 / 2)',
    explanation: 'To find the zero of polynomial p(x), equate p(x) to 0: 2x + 5 = 0 => 2x = -5 => x = -5/2. Substituting x = -5/2 gives p(-5/2) = 2(-5/2) + 5 = -5 + 5 = 0.',
    stepMarks: 'Step: Equating 2x + 5 = 0 (+1/2 Mark) | x = -5/2 (+1/2 Mark)',
    commonTrap: 'Trap: Forgetting the negative sign when transposing +5 across the equals sign, arriving at +5/2.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 9 Mathematics Annual Paper',
    tags: ['Mathematics', 'Polynomials', 'NCERT Direct']
  }
];

export const CLASS_10_DAILY_QUESTIONS: DailyQuestionItem[] = [
  {
    id: 'c10-chem-day-1',
    targetClass: 'Class 10',
    title: 'Thermal Decomposition of Lead Nitrate',
    subject: 'Class 10 Science',
    topic: 'Chemistry: Chemical Reactions and Equations',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'When dry lead nitrate powder is heated in a dry boiling tube, brown fumes are liberated. These brown fumes belong to which gas?',
    options: [
      { id: 'A', text: 'Lead Oxide (PbO)' },
      { id: 'B', text: 'Nitrogen Dioxide (NO₂)' },
      { id: 'C', text: 'Oxygen (O₂)' },
      { id: 'D', text: 'Nitrous Oxide (N₂O)' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Nitrogen Dioxide - NO₂)',
    explanation: 'On heating, lead nitrate decomposes thermally: 2Pb(NO₃)₂ (s) -(heat)-> 2PbO (s) [yellow solid] + 4NO₂ (g) [characteristic brown fumes] + O₂ (g) [colorless gas]. Hence, the brown gas is Nitrogen Dioxide (NO₂).',
    stepMarks: 'Step: Decomposition equation recognition (+1/2 Mark) | Identification of NO₂ brown gas (+1/2 Mark)',
    commonTrap: 'Trap: Confusing the yellow solid residue (PbO) with the brown gaseous fumes (NO₂).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam (Set 31/1/1)',
    tags: ['Science', 'Chemistry', 'Chemical Reactions', 'Sure-Shot PYQ']
  },
  {
    id: 'c10-phy-day-2',
    targetClass: 'Class 10',
    title: "Ohm's Law and Circuit Current",
    subject: 'Class 10 Science',
    topic: 'Physics: Electricity',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'A metallic resistor of 15 Ω is connected across the terminals of a 12 V electric battery. According to Ohm’s Law, what is the electric current flowing through the circuit?',
    options: [
      { id: 'A', text: '1.25 A' },
      { id: 'B', text: '0.8 A' },
      { id: 'C', text: '180 A' },
      { id: 'D', text: '27 A' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (0.8 A)',
    explanation: "From Ohm's law: V = I × R => I = V / R = 12 V / 15 Ω = 4 / 5 = 0.8 A. Thus, the current passing through the resistor is 0.8 Amperes.",
    stepMarks: 'Step: Formula I = V / R (+1/2 Mark) | Calculation 12/15 = 0.8 A (+1/2 Mark)',
    commonTrap: 'Trap: Inverting the ratio (15/12 = 1.25 A) by incorrectly applying I = R / V.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam',
    tags: ['Science', 'Physics', 'Electricity', 'Formulas']
  },
  {
    id: 'c10-bio-day-3',
    targetClass: 'Class 10',
    title: 'Site of Complete Digestion in Humans',
    subject: 'Class 10 Science',
    topic: 'Biology: Life Processes',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'In the human alimentary canal, which organ is the site of complete digestion of carbohydrates, proteins, and fats?',
    options: [
      { id: 'A', text: 'Stomach' },
      { id: 'B', text: 'Small Intestine' },
      { id: 'C', text: 'Large Intestine' },
      { id: 'D', text: 'Buccal Cavity' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Small Intestine)',
    explanation: 'The small intestine is the site of complete digestion of carbohydrates (into glucose), proteins (into amino acids), and fats (into fatty acids and glycerol). It receives bile juice from liver, pancreatic juice from pancreas, and intestinal enzymes from its own walls.',
    stepMarks: 'Step: Direct NCERT recall: Small intestine as complete digestion site (+1 Mark)',
    commonTrap: 'Trap: Choosing stomach, where only partial protein breakdown takes place via pepsin.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam',
    tags: ['Science', 'Biology', 'Life Processes', 'NCERT Direct']
  },
  {
    id: 'c10-chem-day-4',
    targetClass: 'Class 10',
    title: 'Threshold pH for Acid Rain',
    subject: 'Class 10 Science',
    topic: 'Chemistry: Acids, Bases and Salts',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'Rainwater is classified as "Acid Rain" when its pH value drops below which critical threshold?',
    options: [
      { id: 'A', text: '7.0' },
      { id: 'B', text: '6.5' },
      { id: 'C', text: '5.6' },
      { id: 'D', text: '2.0' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (5.6)',
    explanation: 'Normal rainwater has a slightly acidic pH of about 5.6–6.0 due to dissolved atmospheric CO₂ forming carbonic acid. When pollutants like SO₂ and NO₂ dissolve in rain to form sulfuric and nitric acids, the pH drops below 5.6, and it is termed acid rain.',
    stepMarks: 'Step: NCERT threshold pH < 5.6 (+1 Mark)',
    commonTrap: 'Trap: Selecting 7.0, assuming anything below pure neutral water is acid rain.',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Exam Sample Paper',
    tags: ['Science', 'Chemistry', 'Acids and Bases', 'NCERT Direct']
  },
  {
    id: 'c10-phy-day-5',
    targetClass: 'Class 10',
    title: 'Vehicle Rear-View Wing Mirror',
    subject: 'Class 10 Science',
    topic: 'Physics: Light - Reflection and Refraction',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'Why are convex mirrors universally used as rear-view (wing) mirrors in automobiles?',
    options: [
      { id: 'A', text: 'They produce real, inverted, magnified images' },
      { id: 'B', text: 'They produce erect, diminished images and provide a much wider field of view' },
      { id: 'C', text: 'They have a focal length that adjusts automatically with speed' },
      { id: 'D', text: 'They invert distant headlights to reduce nighttime glare' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Erect, diminished images & wider field of view)',
    explanation: 'Convex mirrors always form virtual, erect, and diminished images of objects behind the vehicle regardless of distance. Because their reflecting surface curves outward, they offer a much wider field of view compared to plane or concave mirrors, enabling drivers to view traffic safely.',
    stepMarks: 'Step: Virtual, erect & diminished image (+1/2 Mark) | Wider field of view explanation (+1/2 Mark)',
    commonTrap: 'Trap: Confusing convex mirrors (rear-view) with concave mirrors (used in vehicle headlights to project parallel light beams).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Examination',
    tags: ['Science', 'Physics', 'Light', 'Sure-Shot PYQ']
  },
  {
    id: 'c10-math-day-6',
    targetClass: 'Class 10',
    title: 'Nature of Roots of Quadratic Equation',
    subject: 'Class 10 Mathematics',
    topic: 'Mathematics: Quadratic Equations',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'For a quadratic equation ax² + bx + c = 0 (a ≠ 0), if the discriminant D = b² - 4ac > 0, what is the nature of its roots?',
    options: [
      { id: 'A', text: 'Two distinct real roots' },
      { id: 'B', text: 'Two equal real roots' },
      { id: 'C', text: 'No real roots (imaginary roots)' },
      { id: 'D', text: 'Exactly one real root and one zero root' }
    ],
    correctOption: 'A',
    correctOptionLabel: 'Option A (Two distinct real roots)',
    explanation: 'The roots are given by x = (-b ± √D) / (2a). When D > 0, √D is a positive real number, yielding two distinct real solutions: (-b + √D)/(2a) and (-b - √D)/(2a). If D = 0, roots are real and equal; if D < 0, there are no real roots.',
    stepMarks: 'Step: Discriminant condition D > 0 (+1/2 Mark) | Two distinct real roots (+1/2 Mark)',
    commonTrap: 'Trap: Confusing D > 0 (two distinct real roots) with D = 0 (two equal real roots).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Mathematics Standard Official Paper',
    tags: ['Mathematics', 'Quadratic Equations', 'NCERT Direct']
  },
  {
    id: 'c10-chem-day-7',
    targetClass: 'Class 10',
    title: 'Amphoteric Oxides of Metals',
    subject: 'Class 10 Science',
    topic: 'Chemistry: Metals and Non-Metals',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'Which pair of metal oxides exhibits amphoteric behavior (reacts with both acids and bases to produce salt and water)?',
    options: [
      { id: 'A', text: 'Na₂O and K₂O' },
      { id: 'B', text: 'CaO and MgO' },
      { id: 'C', text: 'Al₂O₃ and ZnO' },
      { id: 'D', text: 'CuO and Fe₂O₃' }
    ],
    correctOption: 'C',
    correctOptionLabel: 'Option C (Al₂O₃ and ZnO)',
    explanation: 'Most metal oxides are basic oxides. However, aluminum oxide (Al₂O₃) and zinc oxide (ZnO) react with both acids (e.g., HCl) and strong bases (e.g., NaOH) to produce salts (aluminates / zincates) and water. Such metal oxides are known as amphoteric oxides.',
    stepMarks: 'Step: Definition of amphoteric oxides (+1/2 Mark) | Identification of Al₂O₃ and ZnO (+1/2 Mark)',
    commonTrap: 'Trap: Selecting Na₂O and K₂O, which are strongly basic alkali oxides that dissolve in water to form hydroxides.',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 10 Science Board Exam',
    tags: ['Science', 'Chemistry', 'Metals & Non-Metals', 'High Yield']
  },
  {
    id: 'c10-bio-day-8',
    targetClass: 'Class 10',
    title: 'Transmission of Impulses Across Synapse',
    subject: 'Class 10 Science',
    topic: 'Biology: Control and Coordination',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'The microscopic gap between the axon terminal of one neuron and the dendrite of the next neuron is called a:',
    options: [
      { id: 'A', text: 'Myelin Sheath' },
      { id: 'B', text: 'Synapse' },
      { id: 'C', text: 'Axon Hillock' },
      { id: 'D', text: 'Neuromuscular Junction' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Synapse)',
    explanation: 'A synapse is the functional microscopic gap between two adjacent neurons. When an electrical nerve impulse reaches the axon terminal, it triggers the release of chemical messengers (neurotransmitters) that cross the synapse and initiate a new electrical impulse in the dendrite of the subsequent neuron.',
    stepMarks: 'Step: Identification of synapse (+1 Mark)',
    commonTrap: 'Trap: Confusing synapse (neuron-to-neuron junction) with neuromuscular junction (neuron-to-muscle fiber junction).',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Science Board Sample',
    tags: ['Science', 'Biology', 'Nervous System', 'NCERT Direct']
  },
  {
    id: 'c10-phy-day-9',
    targetClass: 'Class 10',
    title: 'Magnetic Field Inside a Long Solenoid',
    subject: 'Class 10 Science',
    topic: 'Physics: Magnetic Effects of Electric Current',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'The magnetic field pattern inside a current-carrying long straight solenoid consists of lines that are:',
    options: [
      { id: 'A', text: 'Circular and concentric' },
      { id: 'B', text: 'Parallel straight lines, indicating a uniform magnetic field' },
      { id: 'C', text: 'Radiating outward from the center' },
      { id: 'D', text: 'Zero at all internal points' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (Parallel straight lines, uniform field)',
    explanation: 'Inside a long current-carrying solenoid, the magnetic field lines are in the form of parallel straight lines. This indicates that the magnetic field is uniform (constant strength and direction) at all points inside the core of the solenoid, resembling the uniform internal field of a bar magnet.',
    stepMarks: 'Step: Solenoid internal field lines are parallel (+1/2 Mark) | Representation of uniform magnetic field (+1/2 Mark)',
    commonTrap: 'Trap: Confusing the internal field of a solenoid (parallel uniform lines) with the field around a single straight conductor (concentric circles).',
    difficulty: 'MODERATE',
    paperSource: 'CBSE Class 10 Science Board Examination',
    tags: ['Science', 'Physics', 'Magnetism', 'Sure-Shot PYQ']
  },
  {
    id: 'c10-math-day-10',
    targetClass: 'Class 10',
    title: 'Fundamental Trigonometric Identity',
    subject: 'Class 10 Mathematics',
    topic: 'Mathematics: Introduction to Trigonometry',
    marks: '1 Mark (CBSE Class 10 Board PYQ)',
    question: 'For any acute angle θ (0° ≤ θ < 90°), which of the following equations is a true trigonometric identity?',
    options: [
      { id: 'A', text: 'tan² θ - sec² θ = 1' },
      { id: 'B', text: 'sec² θ - tan² θ = 1' },
      { id: 'C', text: 'sin² θ - cos² θ = 1' },
      { id: 'D', text: 'cosec² θ + cot² θ = 1' }
    ],
    correctOption: 'B',
    correctOptionLabel: 'Option B (sec² θ - tan² θ = 1)',
    explanation: 'From Pythagoras theorem applied to a right triangle: 1 + tan² θ = sec² θ. Transposing tan² θ gives sec² θ - tan² θ = 1. Similarly, sin² θ + cos² θ = 1 and 1 + cot² θ = cosec² θ (cosec² θ - cot² θ = 1).',
    stepMarks: 'Step: Formula sec² θ = 1 + tan² θ (+1/2 Mark) | sec² θ - tan² θ = 1 (+1/2 Mark)',
    commonTrap: 'Trap: Option A has the terms reversed: tan² θ - sec² θ = -1, not +1!',
    difficulty: 'EASY',
    paperSource: 'CBSE Class 10 Mathematics Standard Board Exam',
    tags: ['Mathematics', 'Trigonometry', 'Formulas']
  }
];

export const CLASS_10_FALLBACK_QUESTIONS: DailyQuestionItem[] = CLASS_10_DAILY_QUESTIONS;

export function normalizeTargetClass(rawGradeOrGoal?: string): string {
  if (!rawGradeOrGoal) return 'Class 11';
  const str = rawGradeOrGoal.toLowerCase().trim();
  if (/\b(9|9th|ix)\b/i.test(str) || str.includes('class 9') || str.includes('grade 9')) return 'Class 9';
  if (/\b(10|10th|x)\b/i.test(str) || str.includes('class 10') || str.includes('grade 10') || str.includes('matric')) return 'Class 10';
  if (/\b(12|12th|xii)\b/i.test(str) || str.includes('class 12') || str.includes('grade 12') || str.includes('neet') || str.includes('jee')) return 'Class 12';
  if (/\b(11|11th|xi)\b/i.test(str) || str.includes('class 11') || str.includes('grade 11')) return 'Class 11';
  return 'Class 11';
}

export function getQuestionById(id?: string): DailyQuestionItem | undefined {
  if (!id) return undefined;
  return [
    ...CLASS_12_DAILY_QUESTIONS,
    ...CLASS_11_DAILY_QUESTIONS,
    ...CLASS_10_DAILY_QUESTIONS,
    ...CLASS_9_DAILY_QUESTIONS
  ].find(q => q.id === id);
}

export function getQuestionsForClass(targetClass?: string): DailyQuestionItem[] {
  const norm = normalizeTargetClass(targetClass);
  if (norm === 'Class 9') {
    return CLASS_9_DAILY_QUESTIONS;
  }
  if (norm === 'Class 10') {
    return CLASS_10_DAILY_QUESTIONS;
  }
  if (norm === 'Class 12') {
    return CLASS_12_DAILY_QUESTIONS;
  }
  return CLASS_11_DAILY_QUESTIONS;
}

/**
 * Returns the question of the day for a specific calendar date (YYYY-MM-DD).
 * Deterministic: every student in the same class sees the exact same question on that calendar date.
 */
export function getQuestionForDate(dateStr: string, targetClass?: string): DailyQuestionItem {
  const questions = getQuestionsForClass(targetClass);
  if (!questions || questions.length === 0) {
    return CLASS_11_DAILY_QUESTIONS[0];
  }

  const [y, m, d] = dateStr.split('-').map(Number);
  if (isNaN(y) || isNaN(m) || isNaN(d)) {
    return questions[0];
  }

  // Calculate deterministic UTC day index
  const dayIndex = Math.floor(Date.UTC(y, m - 1, d) / (1000 * 60 * 60 * 24));
  const selectedIndex = Math.abs(dayIndex) % questions.length;
  return questions[selectedIndex];
}

/**
 * Returns today's active question of the day based on local clock date.
 * Shifts automatically at local midnight!
 */
export function getDailyQuestion(targetClass?: string): DailyQuestionItem {
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  return getQuestionForDate(todayStr, targetClass);
}

