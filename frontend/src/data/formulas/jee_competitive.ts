import type { FormulaItem } from './class12_stem';

export const JEE_COMPETITIVE_FORMULAS: FormulaItem[] = [
  {
    id: 'jee-phy-01',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Experimental Skills (NTA Unit 20)',
    title: 'Vernier Callipers, Screw Gauge & Zero Error',
    formula: "Vernier LC = 1 MSD - 1 VSD (if n VSD = (n-1) MSD, LC = 1 MSD / n)\nTrue Reading = Observed Reading - Zero Error (with sign)\nScrew Gauge Pitch = Distance moved / No. of rotations\nScrew Gauge LC = Pitch / Circular Scale Divisions",
    variables: "MSD = Main Scale Division, VSD = Vernier Scale Division, LC = Least Count",
    examTip: "NTA JEE Main Shift favorite! Positive zero error is subtracted; negative zero error increases True Reading."
  },
  {
    id: 'jee-phy-02',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Kinematics & Projectile (JEE Shortcuts)',
    title: 'Inclined Plane Projectile & Relative River-Boat',
    formula: "Time of flight up incline (angle β, launch α to horizontal): T = 2u sin(α - β) / (g cosβ)\nMax Range up incline: R_max = u² / [g(1 + sinβ)]\nShortest time across river of width d: t_min = d / v_b (steer perpendicular to flow)",
    variables: "u = launch speed, α = angle with horizontal, β = incline angle, v_b = boat speed in still water",
    examTip: "To minimize time crossing a river, swim strictly perpendicular to the bank regardless of river velocity u."
  },
  {
    id: 'jee-phy-03',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Rotational Dynamics (ICOR)',
    title: 'Pure Rolling on Incline & Theorem of Parallel Axes',
    formula: "Parallel Axis: I = I_cm + M d² | Perpendicular Axis (planar): I_z = I_x + I_y\nRolling Acceleration down incline: a = (g sinθ) / (1 + I_cm / MR²)\nMinimum friction coeff for pure rolling: μ_min = (tanθ) / (1 + MR² / I_cm)",
    variables: "I_cm = centroidal moment of inertia, R = radius, θ = incline angle, k = radius of gyration",
    examTip: "Remember k²/R² factor: Solid Sphere = 2/5, Solid Cylinder/Disc = 1/2, Hollow Sphere = 2/3, Ring = 1."
  },
  {
    id: 'jee-phy-04',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Capacitors & Nodal RC Analysis',
    title: 'RC Charging/Discharging & Dielectric Work',
    formula: "Charging: q(t) = Cε(1 - e^(-t/RC)) ; τ = R_eq C\nCurrent: I(t) = (ε/R) e^(-t/RC)\nAt t = 0 uncharged capacitor = short wire; at t = ∞ = open circuit",
    variables: "τ = time constant (s), ε = Thevenin EMF across capacitor terminals, R_eq = Thevenin resistance",
    examTip: "Always find τ = R_thevenin · C across capacitor terminals after shorting ideal batteries!"
  },
  {
    id: 'jee-phy-05',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Wave Optics (YDSE Shift)',
    title: 'YDSE Optical Path Shift & Fringe Width',
    formula: "Fringe Width: β = λ D / d\nSlab Insertion (thickness t, refractive index μ): Shift Δy = (μ - 1)t · D / d = (μ - 1)t · (β / λ)\nResultant Intensity: I = I₁ + I₂ + 2√(I₁I₂) cosφ = 4 I₀ cos²(φ/2) if I₁=I₂",
    variables: "λ = wavelength, D = screen distance, d = slit separation, μ = slab refractive index",
    examTip: "Central maxima always shifts toward the slit in front of which the transparent slab is inserted."
  },
  {
    id: 'jee-phy-06',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Modern Physics (Numericals)',
    title: 'Photoelectric Stopping Potential, X-Rays & Nuclear Q-Value',
    formula: "K_max = e V_s = hc/λ - Φ = hν - hν₀ (take hc ≈ 12400 eV·Å or 1242 eV·nm)\nShortest X-Ray λ_min(Å) = 12400 / V(volts)\nQ-Value of Nuclear Reaction = (BE_products - BE_reactants) = (m_r - m_p) × 931.5 MeV",
    variables: "V_s = stopping potential, Φ = work function, BE = total binding energy, Δm = mass defect",
    examTip: "Stopping potential V_s depends ONLY on frequency/wavelength of incident light and metal Φ — never intensity!"
  },
  {
    id: 'jee-chem-01',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Ionic Equilibrium (JEE Numerics)',
    title: 'Buffer pH, Henderson Equation & Solubility Product (Ksp)',
    formula: "Acidic Buffer: pH = pKa + log₁₀([Salt] / [Acid])\nBasic Buffer: pOH = pKb + log₁₀([Salt] / [Base])\nAB type salt: Ksp = S² ; A₂B / AB₂ type: Ksp = 4S³ ; A₃B / AB₃ type: Ksp = 27S⁴",
    variables: "S = molar solubility (mol/L), Ka/Kb = dissociation constants, pH + pOH = 14 (at 298 K)",
    examTip: "Precipitation occurs ONLY when ionic product Qsp > Ksp; common ion effect always suppresses solubility S."
  },
  {
    id: 'jee-chem-02',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Electrochemistry & Chemical Kinetics',
    title: 'Nernst Equation, Gibbs Work & Arrhenius Kinetics',
    formula: "E_cell = E°_cell - (0.0591 / n) log₁₀ Q (at 298 K)\nΔG° = -n F E°_cell = -2.303 R T log₁₀ K_eq\nFirst Order Rate: k = (2.303 / t) log₁₀([A]₀ / [A]t) ; t_1/2 = 0.693 / k\nArrhenius: log(k₂/k₁) = (Ea / 2.303 R) · (1/T₁ - 1/T₂)",
    variables: "n = moles of electrons, F = 96500 C/mol, Q = reaction quotient, Ea = activation energy",
    examTip: "Remember t_99.9% = 10 × t_1/2 and t_75% = 2 × t_1/2 for a 1st-order reaction — saves minutes in JEE!"
  },
  {
    id: 'jee-chem-03',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Coordination Compounds (CFT & Magnetism)',
    title: 'Octahedral CFSE, Spin-Only Magnetic Moment & Spectrochemical',
    formula: "CFSE (Octahedral) = (-0.4 t₂g + 0.6 eg) Δ₀ + (extra pairing energy)\nTetrahedral splitting: Δ_t = (4/9) Δ₀ (almost always high spin)\nSpin-Only Magnetic Moment: μ = √[n(n + 2)] BM",
    variables: "n = number of unpaired electrons, Δ₀ = octahedral crystal field splitting energy",
    examTip: "Spectrochemical order: CO, CN⁻ > en > NH₃ > NCS⁻ > H₂O > OH⁻ > F⁻ > Cl⁻ > Br⁻ > I⁻. Co³⁺ acts strong-field even with H₂O!"
  },
  {
    id: 'jee-math-01',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Permutations & Binomial Theorem',
    title: 'Derangements, Beggar’s Coin Method & Binomial Remainder',
    formula: "Identical Objects into Distinct Boxes: ⁿ⁺ʳ⁻¹Cᵣ₋₁\nDerangement of n items: Dₙ = n! [1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!]\nCoefficient of xʳ in (axᵖ + b/xᵠ)ⁿ: set p(n - k) - qk = r",
    variables: "n = total objects, r = distinct boxes/recipients; D₂=1, D₃=2, D₄=9, D₅=44",
    examTip: "Memorize D₁=0, D₂=1, D₃=2, D₄=9, D₅=44 — skips factorial expansion in exam!"
  },
  {
    id: 'jee-math-02',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Definite Integrals (King/Queen & Leibniz)',
    title: 'King Property, Walli’s Formula & Newton-Leibniz Rule',
    formula: "King: ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b - x) dx\nNewton-Leibniz: d/dx ∫_(g(x))^(h(x)) f(t) dt = f(h(x))·h'(x) - f(g(x))·g'(x)\nWalli's (0 to π/2): ∫ sinⁿx cosᵐx dx = [(n-1)(n-3)...(m-1)(m-3)...] / [(m+n)(m+n-2)...] × K (K = π/2 if both even, else 1)",
    variables: "f integrable function, g(x)/h(x) differentiable limits",
    examTip: "Over 35% of JEE Main Definite Integral questions solve cleanly with King’s Property or Leibniz differentiation!"
  },
  {
    id: 'jee-math-03',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Vectors & 3D Lines (NTA 2026 — Planes Deleted)',
    title: 'Shortest Distance Between Skew Lines & Foot of Perpendicular',
    formula: "Skew Lines r = a₁ + λb₁ & r = a₂ + μb₂:\nShortest Distance d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|\nParallel Lines: d = |(a₂ - a₁) × b| / |b|\nProjection of a on b: (a · b) / |b|",
    variables: "a₁, a₂ = position vectors of points on lines; b₁, b₂ = direction vectors",
    examTip: "Since 3D Planes & Triple Products are removed from NTA JEE Mains, Skew-Line Shortest Distance and Foot of Perpendicular from point to line are guaranteed 4–8 Marks!"
  }
];
