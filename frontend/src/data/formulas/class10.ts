import type { FormulaItem } from './class12_stem';

export const CLASS_10_FORMULAS: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 10: SCIENCE (PHYSICS, CHEMISTRY, BIOLOGY)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c10-sci-01',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Light - Reflection & Refraction',
    title: 'Spherical Mirrors: Mirror Formula & Linear Magnification',
    formula: "Mirror Formula: 1 / f = 1 / v + 1 / u\nFocal Length & Radius: f = R / 2\nMagnification: m = h_i / h_o = -v / u\nSign Conventions (New Cartesian):\n1) Concave Mirror: f < 0 (negative), R < 0\n2) Convex Mirror: f > 0 (positive), R > 0\n3) Real & inverted image: m < 0\n4) Virtual & erect image: m > 0",
    variables: "u = object distance from pole (always negative in standard orientation), v = image distance, f = focal length, R = radius of curvature, h_o = object height, h_i = image height",
    examTip: "In mirror magnification, remember the negative sign: m = -v/u. For a convex mirror, the image is ALWAYS virtual, erect, and diminished (0 < m < 1), regardless of where the object is placed."
  },
  {
    id: 'c10-sci-02',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Light - Reflection & Refraction',
    title: "Snell's Law, Refractive Index & Apparent Depth",
    formula: "Snell's Law: (sin i) / (sin r) = n₂₁ = n₂ / n₁ = constant\nAbsolute Refractive Index: n = c / v\nRelative Refractive Index: n₂₁ = v₁ / v₂ = λ₁ / λ₂\nApparent Depth: Real Depth / Apparent Depth = n_medium\nCritical Angle for Total Internal Reflection (TIR): sin C = 1 / n (from denser to rarer medium)",
    variables: "i = angle of incidence, r = angle of refraction, c = speed of light in vacuum (3 × 10⁸ m/s), v = speed of light in medium, n = absolute refractive index",
    examTip: "When light travels from an optically denser to rarer medium, it bends away from the normal. Frequency remains completely constant across refraction; only speed and wavelength change proportionally."
  },
  {
    id: 'c10-sci-03',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Light - Reflection & Refraction',
    title: 'Thin Lenses: Lens Formula, Magnification & Optical Power',
    formula: "Lens Formula: 1 / f = 1 / v - 1 / u\nMagnification: m = h_i / h_o = +v / u\nOptical Power: P = 1 / f (in metres)\nUnit of Power: Dioptre (1 D = 1 m⁻¹)\nCombination of Thin Lenses in Contact: P_eq = P₁ + P₂ + ... => 1 / f_eq = 1 / f₁ + 1 / f₂ + ...\nOverall Magnification: m_net = m₁ × m₂ × ...",
    variables: "f = focal length, v = image distance from optical centre, u = object distance, P = lens optical power in dioptres (D)",
    examTip: "Convex lens has POSITIVE focal length and POSITIVE power (f > 0, P > 0). Concave lens has NEGATIVE focal length and NEGATIVE power (f < 0, P < 0). Always convert focal length to METRES before calculating power P = 1/f."
  },
  {
    id: 'c10-sci-04',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Human Eye & Colourful World',
    title: 'Defects of Vision, Prism Dispersion & Rayleigh Scattering',
    formula: "Myopia (Short-sightedness): Corrected by Concave Lens of focal length f = -d_far\nHypermetropia (Far-sightedness): Corrected by Convex Lens of focal length 1/f = 1/v - 1/u (with u = -25 cm)\nPrism Formula: A + δ = i + e\nRayleigh Scattering: Intensity of Scattered Light ∝ 1 / λ⁴",
    variables: "d_far = far point of myopic eye, A = angle of prism, δ = angle of deviation, i = incidence angle, e = emergence angle, λ = light wavelength",
    examTip: "Rayleigh scattering law (∝ 1/λ⁴) explains why sky is blue (blue light has shorter wavelength, scattering ~16 times more than red) and why danger signals are red (longer wavelength undergoes minimal scattering over long distances in fog/smoke)."
  },
  {
    id: 'c10-sci-05',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Electricity',
    title: "Ohm's Law, Resistivity & Temperature Dependence",
    formula: "Electric Current: I = Q / t = (n · e) / t\nElectric Potential Difference: V = W / Q\nOhm's Law: V = I · R => R = V / I\nResistance in terms of Dimensions: R = ρ · (L / A)\nResistivity Unit: ρ = (R · A) / L (unit: Ω·m)",
    variables: "I = current (Amperes, A), Q = electric charge (Coulombs, C), e = elementary charge (1.6 × 10⁻¹⁹ C), V = voltage (Volts, V), W = work done (Joules), R = resistance (Ohms, Ω), L = conductor length (m), A = cross-sectional area (m²), ρ = resistivity (Ω·m)",
    examTip: "If a wire is stretched to double its length (L' = 2L), its cross-sectional area halves (A' = A/2) because volume is conserved, causing its resistance to increase by 4 times (R' = 4R). Resistivity ρ remains constant because it depends solely on material and temperature."
  },
  {
    id: 'c10-sci-06',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Electricity',
    title: 'Series and Parallel Resistor Combinations',
    formula: "Series Combination:\n  R_s = R₁ + R₂ + R₃ + ... + R_n\n  Current is identical in each resistor: I = constant\n  Total Voltage: V = V₁ + V₂ + V₃\nParallel Combination:\n  1 / R_p = 1 / R₁ + 1 / R₂ + 1 / R₃ + ...\n  For two resistors in parallel: R_p = (R₁ · R₂) / (R₁ + R₂)\n  Voltage is identical across each branch: V = constant\n  Total Current: I = I₁ + I₂ + I₃",
    variables: "R_s = equivalent series resistance, R_p = equivalent parallel resistance",
    examTip: "Equivalent resistance in series is always greater than the largest individual resistance. Equivalent resistance in parallel is always smaller than the smallest individual resistance."
  },
  {
    id: 'c10-sci-07',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Electricity',
    title: "Joule's Law of Heating, Electric Power & Commercial Units",
    formula: "Joule's Law of Heating: H = I² · R · t = V · I · t = (V² / R) · t\nElectric Power: P = W / t = V · I = I² · R = V² / R\nCommercial Unit of Electrical Energy: 1 kWh = 1 Unit\n1 kWh Conversion: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules\nTotal Energy (Units consumed): Units = [Power (Watts) × Time (hours) × Days] / 1000",
    variables: "H = thermal heat generated (Joules, J), P = power (Watts, W), R = resistance (Ω), t = operating duration (seconds in Joules formula; hours in commercial formula)",
    examTip: "For electric appliances rated (P_rated, V_rated): Resistance of appliance is R = V_rated² / P_rated. If applied voltage drops to V_new, actual power dissipated is P_actual = V_new² / R."
  },
  {
    id: 'c10-sci-08',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Magnetic Effects of Electric Current',
    title: 'Magnetic Fields, Fleming Rules & Right Hand Thumb Rule',
    formula: "Right-Hand Thumb Rule: Thumb points along current I => curled fingers indicate concentric magnetic field lines B\nSolenoid Axial Field: B = μ₀ · n · I (inside uniform field)\nMagnetic Force on Current-Carrying Conductor: F = B · I · L · sinθ\nFleming's Left-Hand Rule (Electric Motor):\n  Thumb = Force / Motion (F)\n  Forefinger = Magnetic Field (B)\n  Middle finger = Current (I)\nFleming's Right-Hand Rule (Electric Generator / Induced Current):\n  Thumb = Motion of conductor\n  Forefinger = Magnetic Field\n  Middle finger = Induced Current",
    variables: "B = magnetic field (Tesla, T), I = current (A), L = length of wire (m), θ = angle between conductor and magnetic field direction",
    examTip: "No magnetic force acts on a current-carrying conductor placed parallel to the magnetic field lines (θ = 0° or 180°, sinθ = 0). Force is maximum when conductor is strictly perpendicular to the field (θ = 90°, F_max = BIL)."
  },
  {
    id: 'c10-sci-09',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Chemical Reactions and Equations',
    title: 'Reaction Classifications, Balanced Equations & Redox Identification',
    formula: "1) Combination: A + B -> AB (e.g., CaO(s) + H₂O(l) -> Ca(OH)₂(aq) + Heat [Quicklime to Slaked lime])\n2) Decomposition: AB -> A + B\n   - Thermal: 2 FeSO₄(s) --Δ-> Fe₂O₃(s) + SO₂(g) + SO₃(g)\n   - Electrolytic: 2 H₂O(l) --electric current-> 2 H₂(g) + O₂(g) (Volume ratio H₂:O₂ = 2:1)\n   - Photolytic: 2 AgCl(s) --sunlight-> 2 Ag(s) + Cl₂(g)\n3) Displacement: Fe(s) + CuSO₄(aq) -> FeSO₄(aq) + Cu(s)\n4) Double Displacement (Precipitation): Na₂SO₄(aq) + BaCl₂(aq) -> BaSO₄(s)↓ [white ppt] + 2 NaCl(aq)\n5) Redox: CuO + H₂ --heat-> Cu + H₂O (CuO is reduced to Cu; H₂ is oxidized to H₂O)",
    variables: "Oxidizing Agent: Gives oxygen or removes hydrogen (gets reduced). Reducing Agent: Gives hydrogen or removes oxygen (gets oxidized).",
    examTip: "Electrolysis of water produces hydrogen gas at cathode and oxygen gas at anode. Volume of hydrogen collected is double the volume of oxygen because water has two hydrogen atoms per oxygen atom (H₂O)."
  },
  {
    id: 'c10-sci-10',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Acids, Bases and Salts',
    title: 'pH Scale, Neutralisation & Essential Industrial Salts',
    formula: "pH Scale: pH = -log₁₀[H⁺]\n  pH < 7: Acidic (lower pH = stronger acid)\n  pH = 7: Neutral (pure water at 25 °C)\n  pH > 7: Basic (higher pH = stronger base)\nNeutralisation: Acid + Base -> Salt + Water + Heat\nKey Salt Chemical Formulae:\n1) Bleaching Powder: Ca(OH)₂ + Cl₂ -> CaOCl₂ + H₂O\n2) Baking Soda: NaCl + H₂O + CO₂ + NH₃ -> NH₄Cl + NaHCO₃\n3) Washing Soda: Na₂CO₃ + 10 H₂O -> Na₂CO₃·10H₂O\n4) Plaster of Paris (POP): CaSO₄·2H₂O (Gypsum) --373 K-> CaSO₄·½H₂O (POP) + 1½ H₂O",
    variables: "Water of crystallisation: Fixed number of water molecules chemically attached to one formula unit of salt (e.g., CuSO₄·5H₂O blue vitriol, FeSO₄·7H₂O green vitriol)",
    examTip: "When heating gypsum to produce Plaster of Paris, temperature must strictly not exceed 373 K (100 °C). Above 373 K, all water of crystallisation is lost, producing anhydrous CaSO₄ (dead burnt plaster), which completely loses the property of setting with water."
  },
  {
    id: 'c10-sci-11',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Metals and Non-metals',
    title: 'Reactivity Series, Roasting vs Calcination & Thermite Reaction',
    formula: "Reactivity Series (Descending Order):\n  K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au\nCalcination (Carbonate ores in absence of air):\n  ZnCO₃(s) --Δ-> ZnO(s) + CO₂(g)\nRoasting (Sulphide ores in excess air):\n  2 ZnS(s) + 3 O₂(g) --Δ-> 2 ZnO(s) + 2 SO₂(g)\nThermite Reaction (Rail welding):\n  Fe₂O₃(s) + 2 Al(s) -> 2 Fe(l) + Al₂O₃(s) + Massive Heat\nAqua Regia Composition: Concentrated HCl : Concentrated HNO₃ = 3 : 1 (by volume)",
    variables: "Al = reducing agent in thermite reaction; molten iron Fe(l) flows directly into railway track cracks to weld them solid",
    examTip: "Metals above Hydrogen in reactivity series displace H₂ gas from dilute acids (e.g., Zn + H₂SO₄ -> ZnSO₄ + H₂). Nitric acid (HNO₃) usually does not evolve H₂ with metals because it is a strong oxidizing agent (oxidizes H₂ to H₂O), EXCEPT with Magnesium (Mg) and Manganese (Mn) in very dilute HNO₃."
  },
  {
    id: 'c10-sci-12',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Carbon and its Compounds',
    title: 'Homologous Series, Esterification & Saponification',
    formula: "Alkane General Formula: C_n H_(2n+2) (Single bond, saturated)\nAlkene General Formula: C_n H_(2n) (Double bond, unsaturated)\nAlkyne General Formula: C_n H_(2n-2) (Triple bond, unsaturated)\nEsterification (Fruity aroma):\n  CH₃COOH (Ethanoic acid) + C₂H₅OH (Ethanol) --conc. H₂SO₄-> CH₃COOC₂H₅ (Ethyl ethanoate) + H₂O\nSaponification (Soap formation):\n  CH₃COOC₂H₅ + NaOH -> CH₃COONa (Sodium ethanoate / Soap) + C₂H₅OH\nCombustion: CH₄ + 2 O₂ -> CO₂ + 2 H₂O + Heat & Light",
    variables: "Conc. H₂SO₄ acts as a dehydrating catalyst in esterification; removes water to shift equilibrium forward",
    examTip: "Bromine Water Test: Unsaturated hydrocarbons (alkenes and alkynes) rapidly decolourize orange-brown bromine water via addition reaction. Saturated hydrocarbons (alkanes) do not decolourize bromine water under normal conditions."
  },
  {
    id: 'c10-sci-13',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Life Processes',
    title: 'Photosynthesis, Cellular Respiration & Kidney Excretion',
    formula: "Photosynthesis Overall Equation:\n  6 CO₂ + 12 H₂O --chlorophyll & sunlight-> C₆H₁₂O₆ + 6 O₂ + 6 H₂O\nRespiration Breakdown Pathways of Glucose (6-Carbon):\n  1) Cytoplasm (Glycolysis): Glucose -> Pyruvate (3-Carbon) + Energy\n  2) Absence of O₂ (Yeast fermentation): Pyruvate -> 2 C₂H₅OH (Ethanol) + 2 CO₂ + 2 ATP\n  3) Lack of O₂ (Human Muscle during vigorous exercise): Pyruvate -> Lactic Acid + 2 ATP (causes muscle cramps)\n  4) Presence of O₂ (Mitochondria Aerobic): Pyruvate + O₂ -> 6 CO₂ + 6 H₂O + 36-38 ATP\nExcretory Unit: Nephron (Glomerular filtration -> Tubular reabsorption -> Tubular secretion)",
    variables: "ATP = Adenosine Triphosphate (energy currency of the cell; 1 mole ATP yields ~30.5 kJ/mol energy)",
    examTip: "Aerobic respiration generates substantially more energy (~38 ATP) compared to anaerobic respiration (only 2 ATP per glucose molecule), because glucose is completely oxidized to CO₂ and H₂O in mitochondria."
  },
  {
    id: 'c10-sci-14',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Heredity & Evolution',
    title: "Mendel's Monohybrid & Dihybrid Cross Ratios",
    formula: "Monohybrid Cross (Tall T vs Dwarf t):\n  F1 Generation: All Tall (Tt)\n  F2 Phenotypic Ratio: Tall : Dwarf = 3 : 1\n  F2 Genotypic Ratio: TT : Tt : tt = 1 : 2 : 1\nDihybrid Cross (Round Yellow RRYY vs Wrinkled Green rryy):\n  F1 Generation: All Round Yellow (RrYy)\n  F2 Phenotypic Ratio: 9 : 3 : 3 : 1\n  (9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green)\nSex Determination in Humans:\n  Female = 44 + XX | Male = 44 + XY\n  Gamete probability: 50% X-bearing, 50% Y-bearing from father",
    variables: "Dominant allele: Expressed in heterozygous state (T); Recessive allele: Expressed only in homozygous state (t)",
    examTip: "The biological sex of a human child is determined entirely by the paternal sperm (whether it carries an X or Y chromosome). A mother always contributes an X chromosome via the ovum."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 10: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c10-math-01',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Real Numbers',
    title: 'Fundamental Theorem of Arithmetic & HCF-LCM Product Relation',
    formula: "Fundamental Theorem of Arithmetic: Every composite number can be uniquely expressed as a product of prime numbers, up to order of factors\nHCF-LCM Product Theorem: HCF(a, b) × LCM(a, b) = a × b\nFor three numbers: HCF(p, q, r) × LCM(p, q, r) ≠ p × q × r (does not apply to 3 numbers!)\nDecimal Expansion of Rational Number p/q (coprime):\n1) Terminating decimal if prime factors of q are strictly of form 2ⁿ · 5ᵐ (n, m ≥ 0)\n2) Non-terminating repeating decimal if q contains prime factors other than 2 and 5",
    variables: "a, b = positive integers; p, q = integers with q ≠ 0 and gcd(p, q) = 1",
    examTip: "The identity HCF(a, b) × LCM(a, b) = a × b holds exclusively for TWO numbers. Never apply this product rule to three or more numbers."
  },
  {
    id: 'c10-math-02',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Polynomials',
    title: 'Quadratic & Cubic Polynomials: Relations Between Zeroes & Coefficients',
    formula: "Quadratic Polynomial: p(x) = ax² + bx + c (a ≠ 0) with zeroes α, β:\n  Sum of Zeroes: α + β = -b / a = -(Coefficient of x) / (Coefficient of x²)\n  Product of Zeroes: α · β = c / a = (Constant term) / (Coefficient of x²)\n  Polynomial Formation: p(x) = k [x² - (α + β)x + αβ]\nCubic Polynomial: p(x) = ax³ + bx² + cx + d with zeroes α, β, γ:\n  α + β + γ = -b / a\n  αβ + βγ + γα = c / a\n  α · β · γ = -d / a",
    variables: "a, b, c, d = real coefficients; α, β, γ = roots / zeroes of polynomial",
    examTip: "If one root of a quadratic is the reciprocal of the other (β = 1/α), then α · β = 1 => c/a = 1 => c = a. If one root is the additive inverse of the other (β = -α), then α + β = 0 => -b/a = 0 => b = 0."
  },
  {
    id: 'c10-math-03',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Pair of Linear Equations in Two Variables',
    title: 'Consistency, Intersecting, Parallel & Coincident Lines Criteria',
    formula: "Given system: a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0:\n1) Intersecting Lines (Unique Solution / Consistent):\n   a₁ / a₂ ≠ b₁ / b₂\n2) Coincident Lines (Infinitely Many Solutions / Consistent & Dependent):\n   a₁ / a₂ = b₁ / b₂ = c₁ / c₂\n3) Parallel Lines (No Solution / Inconsistent):\n   a₁ / a₂ = b₁ / b₂ ≠ c₁ / c₂",
    variables: "a₁, b₁, c₁ and a₂, b₂, c₂ = real coefficients with a₁² + b₁² ≠ 0 and a₂² + b₂² ≠ 0",
    examTip: "Before evaluating ratio comparisons, always express both linear equations in the identical standard form (either both constants on LHS: ax + by + c = 0, or both on RHS: ax + by = c)."
  },
  {
    id: 'c10-math-04',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Quadratic Equations',
    title: 'Quadratic Formula, Discriminant & Nature of Roots',
    formula: "Standard Form: ax² + bx + c = 0 (a ≠ 0)\nQuadratic Formula (Sridharacharya): x = [-b ± √(b² - 4ac)] / (2a)\nDiscriminant: D = b² - 4ac\nNature of Roots:\n1) D > 0: Two distinct real roots\n2) D = 0: Two equal real roots (x = -b / 2a)\n3) D < 0: No real roots (roots are complex conjugate numbers)\nCondition for Perfect Square: D = b² - 4ac = 0",
    variables: "a, b, c = real coefficients (a ≠ 0); D = discriminant",
    examTip: "If a problem states that a quadratic equation has real roots without specifying distinctness, apply the non-strict inequality D ≥ 0 (which includes both D > 0 and D = 0)."
  },
  {
    id: 'c10-math-05',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Arithmetic Progressions',
    title: 'AP General Term, Sum of First n Terms & nth Term from End',
    formula: "Common Difference: d = a_(k+1) - a_k\nnth Term from Beginning: a_n = a + (n - 1) d\nnth Term from End: l - (n - 1) d (where l = last term)\nSum of First n Terms: S_n = (n / 2) [2a + (n - 1) d] = (n / 2) [a + l]\nnth Term from Sums: a_n = S_n - S_(n - 1)\nThree numbers in AP: Take (a - d), a, (a + d) [sum = 3a]",
    variables: "a = first term, d = common difference, n = total terms, l = last term (l = a_n), S_n = sum of first n terms",
    examTip: "To find the nth term when S_n is given as a quadratic function of n (e.g., S_n = An² + Bn), compute a_n = S_n - S_(n-1). The common difference is always d = 2A."
  },
  {
    id: 'c10-math-06',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Triangles (Similarity)',
    title: 'Basic Proportionality Theorem (Thales) & Similarity Criteria',
    formula: "Basic Proportionality Theorem (BPT / Thales):\n  If DE || BC in ΔABC, then AD / DB = AE / EC\n  Corollary: AD / AB = AE / AC = DE / BC\nConverse of BPT: If AD / DB = AE / EC, then DE || BC\nSimilarity Criteria: AAA (or AA), SSS, SAS\nRatio of Areas of Similar Triangles: Area(ΔABC) / Area(ΔPQR) = (AB / PQ)² = (BC / QR)² = (AC / PR)² = (Altitude₁ / Altitude₂)²",
    variables: "ΔABC ~ ΔPQR denotes similar triangles with corresponding angles equal and sides proportional",
    examTip: "In similar triangles, the ratio of areas is proportional to the SQUARE of the ratio of any corresponding linear dimension (sides, medians, altitudes, or angle bisectors)."
  },
  {
    id: 'c10-math-07',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Coordinate Geometry',
    title: 'Distance Formula, Section Formula & Centroid Coordinates',
    formula: "Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]\nDistance from Origin (0, 0): d = √(x² + y²)\nInternal Section Formula (ratio m₁ : m₂):\n  P(x, y) = [ (m₁ x₂ + m₂ x₁) / (m₁ + m₂), (m₁ y₂ + m₂ y₁) / (m₁ + m₂) ]\nMidpoint Formula (ratio 1 : 1): M = [ (x₁ + x₂) / 2, (y₁ + y₂) / 2 ]\nCentroid of Triangle: G = [ (x₁ + x₂ + x₃) / 3, (y₁ + y₂ + y₃) / 3 ]",
    variables: "(x₁, y₁) and (x₂, y₂) = coordinates of endpoints, m₁ : m₂ = division ratio",
    examTip: "When asked to find the ratio in which the x-axis divides a segment, set y = 0 in the section formula: (m₁ y₂ + m₂ y₁) / (m₁ + m₂) = 0 => ratio k:1 is k = -y₁ / y₂. If the y-axis divides it, set x = 0."
  },
  {
    id: 'c10-math-08',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Introduction to Trigonometry',
    title: 'T-Ratios, Specific Standard Angles & Fundamental Identities',
    formula: "Trigonometric Ratios (Right ΔABC, ∠B = 90°):\n  sinθ = P / H ; cosθ = B / H ; tanθ = P / B\n  cscθ = H / P ; secθ = H / B ; cotθ = B / P\nReciprocal: sinθ = 1/cscθ ; cosθ = 1/secθ ; tanθ = 1/cotθ = sinθ/cosθ\nStandard Values: tan45° = 1, sin30° = ½, cos30° = √3/2, sin60° = √3/2, cos60° = ½\nThree Fundamental Identities:\n1) sin²θ + cos²θ = 1 => sin²θ = 1 - cos²θ ; cos²θ = 1 - sin²θ\n2) 1 + tan²θ = sec²θ => sec²θ - tan²θ = 1 => (secθ - tanθ) = 1 / (secθ + tanθ)\n3) 1 + cot²θ = csc²θ => csc²θ - cot²θ = 1 => (cscθ - cotθ) = 1 / (cscθ + cotθ)",
    variables: "P = perpendicular (opposite to angle θ), B = base (adjacent to θ), H = hypotenuse",
    examTip: "The identity sec²θ - tan²θ = 1 factors into (secθ - tanθ)(secθ + tanθ) = 1. If secθ + tanθ = p, then secθ - tanθ = 1/p. Adding these two gives secθ = ½(p + 1/p)."
  },
  {
    id: 'c10-math-09',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Some Applications of Trigonometry',
    title: 'Heights and Distances: Elevation, Depression & Multi-Observer Geometry',
    formula: "Line of Sight: Line drawn from observer's eye to target point\nAngle of Elevation: Angle formed by line of sight with horizontal when target is ABOVE observer level\nAngle of Depression: Angle formed by line of sight with horizontal when target is BELOW observer level\nFundamental Relation: Angle of Elevation = Alternate Angle of Depression\nSingle Triangle Height: h = d · tanθ\nTwo-Observer Complementary Heights: h = √(d₁ · d₂)",
    variables: "h = height of vertical tower/building (m), d = horizontal distance to foot of tower (m), θ = angle of elevation",
    examTip: "If the angles of elevation of the top of a tower from two points on the same straight line at distances 'a' and 'b' from the base are complementary (sum = 90°), then the height of the tower is always h = √(a · b)."
  },
  {
    id: 'c10-math-10',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Circles',
    title: 'Tangent Perpendicularity, External Tangents & Cyclic Properties',
    formula: "Theorem 1: The tangent at any point of a circle is strictly perpendicular to the radius through the point of contact: OP ⊥ PT (∠OPT = 90°)\nTheorem 2: The lengths of two tangents drawn from an external point to a circle are equal: PA = PB\nSubtended Angle Property: Tangents from external point subtend equal angles at the centre (∠POA = ∠POB) and are equally inclined to the line joining point to centre (∠APO = ∠BPO)\nSupplementary Angles: ∠APB + ∠AOB = 180° (quadrilateral PAOB is cyclic)",
    variables: "P = external point, A & B = points of contact, O = centre of circle, r = radius",
    examTip: "A quadrilateral ABCD circumscribing a circle satisfies: AB + CD = AD + BC (sum of opposite sides are equal). If ABCD is a circumscribed parallelogram, it is necessarily a rhombus."
  },
  {
    id: 'c10-math-11',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Areas Related to Circles',
    title: 'Arc Length, Sector Area & Segment Area',
    formula: "Circumference: C = 2 π r = π d\nArea of Circle: A = π r²\nLength of Arc of Sector (angle θ in degrees): l = (θ / 360°) × 2 π r\nArea of Sector of Circle: A_sector = (θ / 360°) × π r² = ½ · l · r\nArea of Minor Segment: A_segment = Area of sector - Area of corresponding triangle\n  A_segment = (θ / 360°) π r² - ½ r² sinθ\nArea of Major Segment: A_major = Area of circle - Area of minor segment\nArea of Ring / Annulus: A_ring = π (R² - r²)",
    variables: "r = radius of circle, θ = central angle in degrees, l = length of arc, R = outer radius",
    examTip: "For a sector angle θ = 60°, the corresponding triangle is equilateral (area = (√3 / 4) r²). For θ = 90°, the triangle is right-angled (area = ½ r²). For θ = 120°, triangle area is ½ r² sin120° = (√3 / 4) r²."
  },
  {
    id: 'c10-math-12',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Surface Areas and Volumes',
    title: 'Cylinders, Cones, Spheres & Hemispheres Mensuration',
    formula: "Right Circular Cylinder:\n  CSA = 2 π r h | TSA = 2 π r (r + h) | Volume = π r² h\nRight Circular Cone:\n  Slant Height: l = √(r² + h²)\n  CSA = π r l | TSA = π r (l + r) | Volume = ⅓ π r² h\nSphere:\n  Total Surface Area = 4 π r² | Volume = ⁴⁄₃ π r³\nHemisphere:\n  CSA = 2 π r² | TSA = 3 π r² | Volume = ⅔ π r³\nSolid Reshaping (Recasting): Volume remains strictly constant: V_initial = V_final",
    variables: "r = radius, h = vertical height, l = slant height, CSA = curved surface area, TSA = total surface area",
    examTip: "When spheres or cones are melted and recast into a wire (cylinder), equate the TOTAL volume of the initial solids to the volume of the cylindrical wire (π r² h) to find the length or thickness."
  },
  {
    id: 'c10-math-13',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Statistics',
    title: 'Grouped Data Mean, Median, Mode & Empirical Relationship',
    formula: "Mean (Direct): x̄ = (Σ f_i x_i) / (Σ f_i)\nMean (Assumed Mean): x̄ = a + (Σ f_i d_i) / (Σ f_i) [d_i = x_i - a]\nMean (Step-Deviation): x̄ = a + [ (Σ f_i u_i) / (Σ f_i) ] × h [u_i = (x_i - a) / h]\nMode (Grouped):\n  Mode = l + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h\nMedian (Grouped):\n  Median = l + [ (N/2 - cf) / f ] × h\nEmpirical Relationship: Mode = 3 · Median - 2 · Mean",
    variables: "l = lower limit of modal/median class, h = class width, f₁ = modal class frequency, f₀ = frequency of preceding class, f₂ = frequency of succeeding class, N = total frequency, cf = cumulative frequency of class preceding median class, f = median class frequency",
    examTip: "Before computing median or mode, ensure class intervals are strictly continuous (e.g., convert 1-5, 6-10 to 0.5-5.5, 5.5-10.5). In the median formula, cf is the cumulative frequency of the PRECEDING class, while f is the simple frequency of the median class itself."
  },
  {
    id: 'c10-math-14',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Probability',
    title: 'Theoretical Probability, Complementary Events & Standard Experiments',
    formula: "Classical Probability: P(E) = Number of outcomes favourable to E / Total number of possible outcomes = n(E) / n(S)\nProbability Bounds: 0 ≤ P(E) ≤ 1\nSure / Certain Event: P(E) = 1\nImpossible Event: P(E) = 0\nComplementary Event: P(E) + P(not E) = 1 => P(Ē) = 1 - P(E)\nStandard 52-Card Deck: 26 Red (13 Hearts, 13 Diamonds) + 26 Black (13 Spades, 13 Clubs); 12 Face Cards (4 Kings, 4 Queens, 4 Jacks)",
    variables: "n(E) = favourable outcomes, n(S) = exhaustive sample space size, P(Ē) = probability of non-occurrence",
    examTip: "A standard pack of 52 playing cards has exactly 12 face cards (Kings, Queens, Jacks). Aces are NOT face cards (they are honours/number cards)."
  }
];
