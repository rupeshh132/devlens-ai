export interface FormulaItem {
  id: string;
  classLevel: '9' | '10' | '11' | '12';
  subjectId: 'phy' | 'chem' | 'math' | 'sci';
  subjectName: string;
  domain: string;
  title: string;
  formula: string;
  variables: string;
  examTip: string;
}

export const FORMULAS_DATA: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: PHYSICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-p1',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Kinematics (Straight Line)',
    title: 'Kinematic Equations of Uniformly Accelerated Motion',
    formula: '1) v = u + at\n2) s = ut + ½at²\n3) v² = u² + 2as\n4) sₙₜₕ = u + ½a(2n - 1)',
    variables: 'u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement, sₙₜₕ = distance in nth second',
    examTip: 'For body dropped under gravity: u = 0, a = +g. At maximum height of a thrown body: v = 0, a = -g.'
  },
  {
    id: 'c11-p2',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Motion in a Plane (Vectors & Projectile)',
    title: 'Projectile Motion (Horizontal & Vertical Components)',
    formula: 'Time of Flight: T = (2u · sinθ) / g\nMax Height: H_max = (u² · sin²θ) / (2g)\nHorizontal Range: R = (u² · sin2θ) / g\nEquation of Trajectory: y = x·tanθ - [g / (2u²·cos²θ)] · x²',
    variables: 'u = projection speed, θ = projection angle with horizontal, g = 9.8 m/s²',
    examTip: 'Maximum range occurs at θ = 45°. Complementary angles (θ and 90° - θ) yield the exact same horizontal range!'
  },
  {
    id: 'c11-p3',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Laws of Motion & Friction',
    title: "Newton's Second Law, Momentum & Friction",
    formula: 'F = dp/dt = m · a\nImpulse J = F · Δt = Δp = m(v - u)\nStatic Friction: f_s ≤ μ_s · N\nKinetic Friction: f_k = μ_k · N\nOptimum Banking Speed: v = √(R · g · tanθ)',
    variables: 'F = Net Force (N), p = momentum, J = Impulse, N = Normal reaction (mg cosθ on incline), μ = friction coefficient',
    examTip: 'Static friction is a self-adjusting force: it equals the applied force up to the limiting value f_max = μ_s·N.'
  },
  {
    id: 'c11-p4',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Work, Energy and Power',
    title: 'Work-Energy Theorem & Power',
    formula: 'Work: W = F · s · cosθ = ∫ F dx\nWork-Energy Theorem: W_net = ΔK = ½m v² - ½m u²\nSpring Potential Energy: U = ½ k x²\nInstantaneous Power: P = F · v = dW/dt',
    variables: 'W = Work (Joules), K = Kinetic Energy, k = spring constant (N/m), x = compression/extension',
    examTip: 'Work done by a conservative force depends ONLY on initial and final positions, independent of path (e.g. Gravity, Spring force).'
  },
  {
    id: 'c11-p5',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Rotational Motion',
    title: 'Torque, Angular Momentum & Moment of Inertia',
    formula: 'Torque: τ = r × F = I · α\nAngular Momentum: L = r × p = I · ω\nRotational K.E. = ½ I ω²\nRing (axis perp.): I = M R²\nDisc/Cylinder (axis perp.): I = ½ M R²\nSolid Sphere: I = ⅖ M R²',
    variables: 'τ = Torque (N·m), I = Moment of inertia (kg·m²), α = angular acceleration (rad/s²), ω = angular velocity (rad/s)',
    examTip: 'Law of Conservation of Angular Momentum: If net external torque τ_ext = 0, then I₁ω₁ = I₂ω₂ = Constant (e.g., spinning ice-skater).'
  },
  {
    id: 'c11-p6',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Gravitation',
    title: 'Universal Gravitation & Escape Velocity',
    formula: 'Gravitational Force: F = G · (M · m) / r²\nVariation with height: g_h ≈ g(1 - 2h/R) [for h << R]\nVariation with depth: g_d = g(1 - d/R)\nEscape Velocity: v_e = √(2gR) ≈ 11.2 km/s (on Earth)\nOrbital Velocity: v_o = √(gR) = v_e / √2',
    variables: 'G = 6.674 × 10⁻¹¹ N·m²/kg², R = Radius of Earth (6400 km), g = 9.8 m/s²',
    examTip: 'At the centre of the Earth (d = R), acceleration due to gravity g_center = 0, and effective weight becomes zero.'
  },
  {
    id: 'c11-p7',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Thermodynamics',
    title: 'First Law of Thermodynamics & Heat Engines',
    formula: 'First Law: ΔQ = ΔU + ΔW\nWork in Isothermal: W = 2.303 n R T · log₁₀(V₂ / V₁)\nWork in Adiabatic: W = (P₁V₁ - P₂V₂) / (γ - 1)\nCarnot Engine Efficiency: η = 1 - (T₂ / T₁) = W / Q₁',
    variables: 'ΔQ = Heat supplied, ΔU = Change in internal energy (n C_v ΔT), W = Work done (P ΔV), γ = C_p / C_v',
    examTip: 'In a cyclic process, initial and final states are identical, so ΔU = 0 and total work done equals net heat absorbed (W = Q).'
  },
  {
    id: 'c11-p8',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Oscillations & Waves',
    title: 'Simple Harmonic Motion (SHM) & Doppler Effect',
    formula: 'Displacement: x = A · sin(ωt + φ)\nVelocity: v = ω √(A² - x²)\nAcceleration: a = -ω² x\nTime Period of Simple Pendulum: T = 2π √(L / g)\nTime Period of Spring-Mass: T = 2π √(m / k)',
    variables: 'A = amplitude, ω = angular frequency (2π/T), L = effective length, k = spring constant',
    examTip: 'In SHM, at mean position (x=0): Velocity is MAXIMUM (v = ωA) and acceleration is ZERO. At extremes (x=A): Velocity is ZERO and acceleration is maximum.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: CHEMISTRY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-c1',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Physical Chemistry (Basic Concepts)',
    title: 'Mole Concept, Molarity & Molality',
    formula: 'Moles (n) = Given Mass (w) / Molar Mass (M) = N / N_A\nMolarity (M) = Moles of Solute / Volume of Solution (in Litres)\nMolality (m) = Moles of Solute / Mass of Solvent (in kg)\nDilution Formula: M₁V₁ = M₂V₂',
    variables: 'N_A = 6.022 × 10²³ mol⁻¹, M = mol/L, m = mol/kg',
    examTip: 'Molality (m) does NOT change with temperature because mass is temperature-independent. Molarity (M) changes with temperature as volume expands.'
  },
  {
    id: 'c11-c2',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'States of Matter & Gas Laws',
    title: 'Ideal Gas Equation & Dalton’s Law',
    formula: 'Ideal Gas Equation: P · V = n · R · T\nCombined Gas Law: (P₁ V₁) / T₁ = (P₂ V₂) / T₂\nvan der Waals Equation: [P + (a n² / V²)] (V - n b) = n R T\nPartial Pressure: p_i = x_i · P_total',
    variables: 'R = 8.314 J/(mol·K) = 0.0821 L·atm/(mol·K), a = intermolecular attraction factor, b = molecular volume factor, x_i = mole fraction',
    examTip: 'Real gases behave ideally at HIGH temperature and LOW pressure where intermolecular forces and molecular volumes are negligible.'
  },
  {
    id: 'c11-c3',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Thermodynamics & Energetics',
    title: 'Enthalpy, Entropy & Gibbs Free Energy',
    formula: 'First Law: ΔU = q + w (IUPAC: w = -P_ext ΔV)\nEnthalpy Relation: ΔH = ΔU + Δn_g · R · T\nGibbs Helmholtz Equation: ΔG = ΔH - T · ΔS\nEquilibrium Relation: ΔG° = -2.303 R T · log₁₀ K',
    variables: 'Δn_g = (moles of gaseous products - moles of gaseous reactants), ΔG < 0 for spontaneous reactions',
    examTip: 'Criteria for Spontaneity: A process is spontaneous at constant T and P if ΔG is negative. If ΔG = 0, the reaction is at equilibrium.'
  },
  {
    id: 'c11-c4',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Equilibrium (Chemical & Ionic)',
    title: 'Equilibrium Constant, pH & Buffer Solutions',
    formula: 'K_p = K_c · (R · T)^(Δn_g)\npH = -log₁₀ [H⁺] ; pOH = -log₁₀ [OH⁻] ; pH + pOH = 14 (at 25°C)\nOstwald Dilution Law: K_a = C · α² (for α << 1, α = √(K_a / C))\nSolubility Product: K_sp for A_x B_y = x^x · y^y · S^(x+y)',
    variables: 'K_c = concentration equilibrium constant, α = degree of dissociation, S = solubility in mol/L',
    examTip: 'Le Chatelier’s Principle: Increasing pressure shifts equilibrium toward fewer gaseous moles. Increasing temperature favours endothermic forward reaction.'
  },
  {
    id: 'c11-c5',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Organic Chemistry Principles',
    title: 'Inductive Effect, Hyperconjugation & Markovnikov Rule',
    formula: 'Markovnikov Addition: H adds to carbon with MORE hydrogens; Electrophile/Halogen adds to carbon with LESS hydrogens.\nCarbocation Stability: 3° > 2° > 1° > Methyl (due to Hyperconjugation & +I effect)\nFree Radical Stability: 3° > 2° > 1°',
    variables: 'Anti-Markovnikov (Peroxide Effect / Kharasch): Works ONLY with HBr in presence of organic peroxides (not HCl or HI).',
    examTip: 'Rearrangement (Hydride/Methyl shift) will occur in carbocation intermediates if it forms a more stable tertiary carbocation.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-m1',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Trigonometry',
    title: 'Compound, Multiple & Submultiple Angles',
    formula: 'sin(A ± B) = sinA·cosB ± cosA·sinB\ncos(A ± B) = cosA·cosB ∓ sinA·sinB\ntan(A ± B) = (tanA ± tanB) / (1 ∓ tanA·tanB)\nsin2A = 2sinA·cosA = 2tanA / (1 + tan²A)\ncos2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A\n1 - cos2A = 2sin²A ; 1 + cos2A = 2cos²A',
    variables: 'Fundamental for high calculus evaluations: Always substitute 1 ± cos2x with 2sin²x or 2cos²x.',
    examTip: 'Remember: cos(-θ) = cosθ and sec(-θ) = secθ. All other trigonometric ratios are negative for negative angles.'
  },
  {
    id: 'c11-m2',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Sequences and Series (AP & GP)',
    title: 'Arithmetic & Geometric Progressions',
    formula: 'AP nth Term: a_n = a + (n - 1)d\nAP Sum: S_n = n/2 [2a + (n - 1)d] = n/2 (a + l)\nGP nth Term: a_n = a · r^(n - 1)\nGP Sum: S_n = a(1 - r^n) / (1 - r) [for r ≠ 1]\nSum of Infinite GP: S_∞ = a / (1 - r) [valid for |r| < 1]\nAM ≥ GM relation: (a + b)/2 ≥ √(ab)',
    variables: 'a = first term, d = common difference, r = common ratio, l = last term',
    examTip: 'For 3 numbers in AP, assume: (a - d), a, (a + d). For 3 numbers in GP, assume: a/r, a, ar.'
  },
  {
    id: 'c11-m3',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Coordinate Geometry (Straight Lines)',
    title: 'Straight Lines & Perpendicular Distance',
    formula: 'Slope m = (y₂ - y₁) / (x₂ - x₁) = tanθ\nPoint-Slope Form: y - y₁ = m(x - x₁)\nSlope-Intercept Form: y = mx + c\nPerpendicular Distance from (x₁, y₁) to Ax + By + C = 0:\nd = |A x₁ + B y₁ + C| / √(A² + B²)\nDistance between parallel lines: d = |C₁ - C₂| / √(A² + B²)',
    variables: 'Two lines are perpendicular iff m₁ · m₂ = -1. Two lines are parallel iff m₁ = m₂.',
    examTip: 'To find acute angle between two lines: tanθ = |(m₂ - m₁) / (1 + m₁ m₂)|.'
  },
  {
    id: 'c11-m4',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Calculus (Limits & Derivatives)',
    title: 'Standard Limits & Basic Derivative Rules',
    formula: 'lim (x→0) [sin x / x] = 1 (x in radians)\nlim (x→0) [tan x / x] = 1\nlim (x→a) [(xⁿ - aⁿ) / (x - a)] = n · aⁿ⁻¹\nProduct Rule: d/dx (u · v) = u v\' + v u\'\nQuotient Rule: d/dx (u / v) = (v u\' - u v\') / v²\nPower Rule: d/dx (xⁿ) = n · xⁿ⁻¹',
    variables: 'Derivative represents the instantaneous rate of change and the slope of tangent to curve at that point.',
    examTip: 'L’Hôpital’s Rule (JEE Shortcut): If limit yields indeterminate 0/0 or ∞/∞, differentiate numerator and denominator separately until determinate.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: PHYSICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-p1',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electrostatics',
    title: "Coulomb's Law, Electric Field & Gauss's Theorem",
    formula: "Coulomb's Law: F = 1/(4πε₀) · (|q₁ q₂| / r²) [k = 9 × 10⁹ N·m²/C²]\nElectric Field of Point Charge: E = 1/(4πε₀) · (q / r²)\nGauss's Law: Φ = ∮ E · dA = q_enclosed / ε₀\nElectric Potential: V = 1/(4πε₀) · (q / r)\nPotential Energy: U = 1/(4πε₀) · (q₁ q₂ / r)",
    variables: 'ε₀ = 8.854 × 10⁻¹² C²/(N·m²), E = -dV/dr (Field is negative gradient of potential)',
    examTip: 'Electric field inside a charged hollow spherical conducting shell is always ZERO. Potential inside is CONSTANT and equals the surface potential.'
  },
  {
    id: 'c12-p2',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Capacitance & Dielectrics',
    title: 'Parallel Plate Capacitor & Energy Stored',
    formula: 'Capacitance: C = Q / V\nParallel Plate Capacitor: C = (ε₀ · A) / d\nWith Dielectric (K): C = (K · ε₀ · A) / d\nEnergy Stored: U = ½ C V² = ½ (Q² / C) = ½ Q V\nSeries: 1/C_eq = 1/C₁ + 1/C₂\nParallel: C_eq = C₁ + C₂',
    variables: 'A = plate area (m²), d = plate separation (m), K = dielectric constant',
    examTip: 'If battery is disconnected and dielectric inserted: Charge Q remains constant, Potential V decreases by K, Capacitance C increases by K.'
  },
  {
    id: 'c12-p3',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Current Electricity',
    title: "Ohm's Law, Drift Velocity & Kirchhoff's Rules",
    formula: 'Drift Velocity: v_d = (e · E · τ) / m\nCurrent Relation: I = n · e · A · v_d\nResistance: R = ρ · (l / A)\nTemperature Dependence: R_t = R₀(1 + α ΔT)\nKirchhoff\'s Junction Law: Σ I_in = Σ I_out (Charge conservation)\nKirchhoff\'s Loop Law: Σ ΔV = 0 (Energy conservation)\nWheatstone Bridge (Balanced): P / Q = R / S',
    variables: 'n = free electron density, e = 1.6 × 10⁻¹⁹ C, τ = relaxation time, ρ = resistivity',
    examTip: 'When a wire is stretched to n times its initial length, its new resistance becomes n² times the original resistance (R_new = n² R_old).'
  },
  {
    id: 'c12-p4',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Magnetism & EMI',
    title: 'Biot-Savart Law, Lorentz Force & Faraday’s EMI',
    formula: 'Lorentz Force: F = q(E + v × B) = q v B sinθ\nBiot-Savart Law: dB = (μ₀ / 4π) · (I dl sinθ / r²)\nStraight Wire Field: B = (μ₀ I) / (2π r)\nFaraday\'s Induction Law: e = -dΦ/dt = -N (dΦ / dt)\nSelf Inductance EMF: e = -L (dI / dt)\nMagnetic Energy: U = ½ L I²',
    variables: 'μ₀ = 4π × 10⁻⁷ T·m/A, Φ = B · A · cosθ (Magnetic flux in Webers), L = Inductance in Henries (H)',
    examTip: 'Lenz’s Law gives the DIRECTION of induced emf/current. The induced current always opposes the change in magnetic flux that produces it (Conservation of Energy).'
  },
  {
    id: 'c12-p5',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Optics (Ray & Wave)',
    title: "Lens Maker's Formula, Snell's Law & Interference",
    formula: "Snell's Law: n₁ sin i = n₂ sin r\nMirror Formula: 1/v + 1/u = 1/f\nLens Formula: 1/v - 1/u = 1/f\nLens Maker's Formula: 1/f = (μ - 1) [1/R₁ - 1/R₂]\nYDSE Fringe Width: β = (λ · D) / d",
    variables: 'u = object distance, v = image distance, f = focal length, λ = wavelength, D = screen distance, d = slit separation',
    examTip: 'Sign Convention (Cartesian): Distances measured in direction of incident light are positive (+); opposite are negative (-). Focal length of convex lens is always positive (+), concave is negative (-).'
  },
  {
    id: 'c12-p6',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Modern Physics & Dual Nature',
    title: "Einstein's Photoelectric Equation & Bohr Atom",
    formula: 'Photon Energy: E = h · ν = (h · c) / λ\nEinstein\'s Photoelectric Equation: K_max = h ν - Φ₀ = e · V₀\nDe Broglie Wavelength: λ = h / p = h / (m v) = h / √(2m q V)\nBohr Radius: r_n = 0.529 · (n² / Z) Å\nBohr Energy: E_n = -13.6 · (Z² / n²) eV',
    variables: 'h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, Φ₀ = work function, V₀ = stopping potential, 1 eV = 1.6 × 10⁻¹⁹ J',
    examTip: 'Stopping potential depends ONLY on the FREQUENCY of incident light, completely independent of light intensity. Intensity determines number of emitted photoelectrons.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: CHEMISTRY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-c1',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Physical Chemistry (Solutions)',
    title: 'Raoult’s Law & Colligative Properties',
    formula: "Relative Lowering of Vapour Pressure: (P° - P_s) / P° = i · x_solute\nElevation in Boiling Point: ΔT_b = i · K_b · m\nDepression in Freezing Point: ΔT_f = i · K_f · m\nOsmotic Pressure: Π = i · C · R · T\nvan 't Hoff Factor: i = 1 + (n - 1)α (for dissociation)",
    variables: 'P° = pure solvent vapour pressure, K_b = ebullioscopic constant, K_f = cryoscopic constant, m = molality, i = van \'t Hoff factor',
    examTip: 'Colligative properties depend SOLELY on the number of solute particles, not on their chemical nature. High value of i yields highest boiling point (e.g., Al₂(SO₄)₃ has i = 5).'
  },
  {
    id: 'c12-c2',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Electrochemistry',
    title: 'Nernst Equation, Cell EMF & Faraday’s Laws',
    formula: 'Nernst Equation: E_cell = E°_cell - (0.0591 / n) · log₁₀ Q (at 298 K)\nStandard EMF: E°_cell = E°_cathode - E°_anode\nGibbs Energy & EMF: ΔG° = -n · F · E°_cell\nKohlrausch Law: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋\nFaraday\'s First Law: w = z · I · t = (M / n F) · I · t',
    variables: 'n = number of transferred electrons, F = 96500 C/mol, Q = reaction quotient = [Products] / [Reactants]',
    examTip: 'A redox reaction is thermodynamically feasible only if E°_cell is POSITIVE (which ensures ΔG° is negative).'
  },
  {
    id: 'c12-c3',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Chemical Kinetics',
    title: 'Integrated Rate Laws & Arrhenius Equation',
    formula: 'Zero Order: k = ([A]₀ - [A]) / t ; t_½ = [A]₀ / (2k)\nFirst Order: k = (2.303 / t) · log₁₀ ([A]₀ / [A])\nFirst Order Half-Life: t_½ = 0.693 / k (Independent of [A]₀)\nArrhenius Equation: k = A · e^(-E_a / RT)\nlog₁₀ (k₂ / k₁) = (E_a / 2.303 R) · [(T₂ - T₁) / (T₁ T₂)]',
    variables: 'k = rate constant, E_a = activation energy in J/mol, [A]₀ = initial concentration, A = frequency factor',
    examTip: 'First-order half-life is strictly INDEPENDENT of initial concentration. Radioactive decays always follow first-order kinetics.'
  },
  {
    id: 'c12-c4',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Organic Chemistry (Name Reactions)',
    title: 'High-Yield Board & JEE Named Reactions',
    formula: '1) Aldol Condensation: 2 CH₃CHO + dil. NaOH → CH₃-CH=CH-CHO (Requires α-hydrogen)\n2) Cannizzaro Reaction: 2 HCHO + conc. NaOH → CH₃OH + HCOONa (No α-hydrogen)\n3) Reimer-Tiemann: Phenol + CHCl₃ + aq. NaOH → Salicylaldehyde\n4) Sandmeyer: Ar-N₂⁺Cl⁻ + CuCl/HCl → Ar-Cl + N₂\n5) Williamson Ether Synthesis: R-X + R\'-O⁻Na⁺ → R-O-R\' + NaX',
    variables: 'Williamson Synthesis: The alkyl halide R-X MUST be primary (1°) to avoid elimination (alkene formation).',
    examTip: 'Cannizzaro is a disproportionation (redox) reaction: One molecule of aldehyde is reduced to alcohol while the other is oxidized to carboxylic acid salt.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-m1',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Algebra (Matrices & Determinants)',
    title: 'Inverse of Matrix & System of Equations',
    formula: 'Matrix Inverse: A⁻¹ = (1 / |A|) · adj(A) [valid if |A| ≠ 0]\nDeterminant of Adjoint: |adj(A)| = |A|^(n - 1)\nProduct rule: adj(AB) = adj(B) · adj(A)\nMatrix Solution: X = A⁻¹ · B\nArea of Triangle: ½ |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|',
    variables: 'n = order of matrix. If |A| = 0, A is singular and A⁻¹ does not exist.',
    examTip: 'If |A| = 0 and (adj A)·B ≠ 0, then the system of linear equations is INCONSISTENT and has NO SOLUTION.'
  },
  {
    id: 'c12-m2',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Calculus (Differentiation)',
    title: 'Chain Rule, Logarithmic & Implicit Differentiation',
    formula: 'Chain Rule: d/dx [f(g(x))] = f\'(g(x)) · g\'(x)\nLogarithmic: If y = u^v → ln y = v ln u → dy/dx = y [v\' ln u + (v/u) u\']\nParametric: dy/dx = (dy/dt) / (dx/dt)\nd/dx (sin⁻¹x) = 1 / √(1 - x²)\nd/dx (tan⁻¹x) = 1 / (1 + x²)\nd/dx (e^(ax)) = a · e^(ax)',
    variables: 'Use Logarithmic differentiation whenever a function appears in the exponent (variable raised to variable, e.g. x^sin x).',
    examTip: 'Second order parametric derivative warning: d²y/dx² = [d/dt (dy/dx)] / (dx/dt). NEVER simply divide d²y/dt² by d²x/dt²!'
  },
  {
    id: 'c12-m3',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Calculus (Integral Calculus)',
    title: 'Integration by Parts & Standard Definite Properties',
    formula: 'Integration by Parts: ∫ u · v dx = u ∫ v dx - ∫ [u\' · (∫ v dx)] dx (ILATE rule)\nKing\'s Property: ∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx\nEven/Odd Property: ∫[-a to a] f(x) dx = 2 ∫[0 to a] f(x) dx (if even), = 0 (if odd)\nSpecial Integral: ∫ e^x [f(x) + f\'(x)] dx = e^x · f(x) + C',
    variables: 'ILATE priority: Inverse trig > Logarithmic > Algebraic > Trigonometric > Exponential',
    examTip: 'King\'s Property solves 90% of Board Exam definite integral problems! Substitute x with (a + b - x) and add the two equations.'
  },
  {
    id: 'c12-m4',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Calculus (Differential Equations)',
    title: 'Linear Differential Equation (Integrating Factor)',
    formula: 'First Order Linear Form: dy/dx + P(x) · y = Q(x)\nIntegrating Factor: I.F. = e^(∫ P(x) dx)\nGeneral Solution: y · (I.F.) = ∫ [Q(x) · (I.F.)] dx + C\nSeparable form: f(y) dy = g(x) dx → ∫ f(y) dy = ∫ g(x) dx + C',
    variables: 'P(x) and Q(x) must be functions of x only or constants.',
    examTip: 'Remember logarithmic exponent rule: e^(ln f(x)) = f(x). For example, e^(∫ (2/x) dx) = e^(ln x²) = x².'
  },
  {
    id: 'c12-m5',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Vectors & 3D Geometry',
    title: 'Dot & Cross Products, Line Equations & Shortest Distance',
    formula: 'Dot Product: a · b = |a| |b| cosθ = a₁b₁ + a₂b₂ + a₃b₃\nCross Product: a × b = |a| |b| sinθ n̂\nEquation of Line: r = a + λ b  <=>  (x - x₁)/a = (y - y₁)/b = (z - z₁)/c\nShortest Distance between Skew Lines: d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|',
    variables: 'Two vectors are perpendicular iff a · b = 0. Two vectors are parallel iff a × b = 0.',
    examTip: 'If shortest distance between two lines is 0, the lines are COPLANAR and intersect at a common point.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 10: SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c10-s1',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Physics (Light - Reflection & Refraction)',
    title: 'Mirror Formula, Lens Formula & Power',
    formula: 'Mirror Formula: 1/v + 1/u = 1/f\nMirror Magnification: m = -v / u = h_i / h_o\nLens Formula: 1/v - 1/u = 1/f\nLens Magnification: m = +v / u = h_i / h_o\nPower of a Lens: P = 1 / f (in metres) [Dioptres, D]\nRefractive Index: n = c / v = sin i / sin r',
    variables: 'u = always negative (-), f = positive (+) for Convex, negative (-) for Concave',
    examTip: 'Convex lens has POSITIVE power (+D). Concave lens has NEGATIVE power (-D). Total combination power P = P₁ + P₂.'
  },
  {
    id: 'c10-s2',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Physics (Electricity & Effects)',
    title: "Ohm's Law, Resistance & Joule's Heating",
    formula: "Ohm's Law: V = I · R\nResistance: R = ρ · (l / A)\nResistors in Series: R_s = R₁ + R₂ + R₃\nResistors in Parallel: 1/R_p = 1/R₁ + 1/R₂ + 1/R₃\nJoule's Law of Heating: H = I² · R · t\nElectrical Power: P = V · I = I² · R = V² / R",
    variables: 'V = Volts, I = Amperes, R = Ohms (Ω), H = Joules, P = Watts, 1 kWh = 3.6 × 10⁶ J',
    examTip: 'In parallel connection, potential difference (V) across each resistor is SAME, and total equivalent resistance is less than the smallest individual resistor.'
  },
  {
    id: 'c10-s3',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Chemistry (Acids, Bases & Salts)',
    title: 'pH Scale & High-Yield Industrial Salts',
    formula: 'pH Definition: pH < 7 (Acidic), pH = 7 (Neutral), pH > 7 (Basic)\nBleaching Powder: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O\nBaking Soda: NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃\nWashing Soda: Na₂CO₃ · 10H₂O\nPlaster of Paris: CaSO₄ · ½H₂O (obtained by heating Gypsum at 373 K: CaSO₄ · 2H₂O)',
    variables: 'Water of crystallization: Copper sulphate is blue (CuSO₄·5H₂O); becomes white anhydrous upon heating.',
    examTip: 'Always add acid slowly to water with constant stirring, NEVER water into concentrated acid (highly exothermic reaction will splash!).'
  },
  {
    id: 'c10-s4',
    classLevel: '10',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Chemistry (Carbon & Its Compounds)',
    title: 'Homologous Series, Saponification & Esterification',
    formula: 'Alkanes (Single bond): CₙH₂ₙ₊₂\nAlkenes (Double bond): CₙH₂ₙ\nAlkynes (Triple bond): CₙH₂ₙ₋₂\nEsterification: CH₃COOH + C₂H₅OH (acid) → CH₃COOC₂H₅ (Sweet ester) + H₂O\nSaponification: CH₃COOC₂H₅ + NaOH → CH₃COONa (Soap) + C₂H₅OH',
    variables: 'n = number of carbon atoms (1=meth, 2=eth, 3=prop, 4=but, 5=pent, 6=hex)',
    examTip: 'Soaps form scum with hard water due to calcium and magnesium ions. Synthetic detergents work effectively in both soft and hard water.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 10: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c10-m1',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Algebra (Quadratic Equations)',
    title: 'Quadratic Formula & Nature of Roots',
    formula: 'Standard Form: a x² + b x + c = 0 (a ≠ 0)\nQuadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)\nDiscriminant: D = b² - 4ac\nNature of Roots:\n• If D > 0: Two distinct real roots\n• If D = 0: Two equal real roots (x = -b / 2a)\n• If D < 0: No real roots (Imaginary roots)',
    variables: 'Sum of roots (α + β) = -b/a ; Product of roots (α · β) = c/a',
    examTip: 'Sure-shot question: If roots are equal, set D = b² - 4ac = 0 and solve for the unknown parameter k.'
  },
  {
    id: 'c10-m2',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Algebra (Arithmetic Progressions)',
    title: 'Arithmetic Progression (nth Term & Sum)',
    formula: 'nth Term: a_n = a + (n - 1)d\nSum of First n Terms: S_n = n/2 [2a + (n - 1)d] = n/2 (a + l)\nRelation between a_n and S_n: a_n = S_n - S_{n-1}\nSum of first n natural numbers: Σ n = [n(n + 1)] / 2',
    variables: 'a = first term, d = common difference (a₂ - a₁), n = number of terms, l = last term',
    examTip: 'To find nth term from the END of an AP: a_n(end) = l - (n - 1)d.'
  },
  {
    id: 'c10-m3',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Coordinate Geometry',
    title: 'Distance Formula & Section Formula',
    formula: 'Distance: d = √[(x₂ - x₁)² + (y₂ - y₁)²]\nSection Formula (Internal division m:n):\nx = (m x₂ + n x₁) / (m + n) , y = (m y₂ + n y₁) / (m + n)\nMidpoint Formula: x = (x₁ + x₂) / 2 , y = (y₁ + y₂) / 2\nCentroid of Triangle: G = ((x₁ + x₂ + x₃)/3 , (y₁ + y₂ + y₃)/3)',
    variables: 'For finding dividing ratio, always assume the ratio to be k : 1 instead of m : n.',
    examTip: 'Point on x-axis is always of the form (x, 0). Point on y-axis is always of the form (0, y).'
  },
  {
    id: 'c10-m4',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Trigonometry',
    title: 'Pythagorean Trigonometric Identities & Ratios',
    formula: '1) sin²θ + cos²θ = 1 <=> sin²θ = 1 - cos²θ\n2) 1 + tan²θ = sec²θ <=> sec²θ - tan²θ = 1\n3) 1 + cot²θ = cosec²θ <=> cosec²θ - cot²θ = 1\nValues: sin 30° = ½ | sin 45° = 1/√2 | sin 60° = √3/2 | sin 90° = 1\ntan 30° = 1/√3 | tan 45° = 1 | tan 60° = √3',
    variables: 'tanθ = sinθ / cosθ ; cotθ = cosθ / sinθ ; secθ = 1 / cosθ ; cosecθ = 1 / sinθ',
    examTip: 'Whenever stuck in an identity proof, convert all expressions (tan, cot, sec, cosec) into terms of sinθ and cosθ.'
  },
  {
    id: 'c10-m5',
    classLevel: '10',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Mensuration (Areas & Volumes)',
    title: 'Surface Areas and Volumes (Combinations of Solids)',
    formula: 'Cylinder: CSA = 2πrh | TSA = 2πr(h + r) | Vol = πr²h\nCone: CSA = πrl | TSA = πr(l + r) | Vol = ⅓πr²h (l = √(r² + h²))\nSphere: Surface Area = 4πr² | Volume = ⁴⁄₃πr³\nHemisphere: CSA = 2πr² | TSA = 3πr² | Volume = ⅔πr³',
    variables: 'r = radius, h = vertical height, l = slant height',
    examTip: 'When a solid is recast/melted into another solid, the total VOLUME remains constant (Vol_initial = Vol_final).'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-s1',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Physics (Motion)',
    title: 'Three Equations of Uniformly Accelerated Motion',
    formula: '1) v = u + at\n2) s = ut + ½at²\n3) v² = u² + 2as\nSpeed = Distance / Time\nVelocity = Displacement / Time',
    variables: 'u = initial velocity (m/s), v = final velocity, a = acceleration (m/s²), t = time (s), s = distance (m)',
    examTip: 'Sure-shot numericals: If body starts from rest, u = 0. If it comes to a stop by applying brakes, v = 0.'
  },
  {
    id: 'c9-s2',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Physics (Force & Momentum)',
    title: "Newton's Second Law & Momentum Conservation",
    formula: 'Force: F = m · a = m(v - u) / t\nMomentum: p = m · v\nConservation of Momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂\nRecoil velocity of gun: v_g = - (m_b · v_b) / m_g',
    variables: 'F = Force (Newtons, N), m = mass (kg), p = momentum (kg·m/s)',
    examTip: 'Fielder pulls his hands backward while catching a ball to increase time (t), reducing the impact force (F).'
  },
  {
    id: 'c9-s3',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Physics (Gravitation & Weight)',
    title: 'Universal Gravitation & Weight on Moon',
    formula: 'Universal Gravitation: F = G · (M · m) / r²\nAcceleration due to gravity: g = (G · M) / R² ≈ 9.8 m/s²\nWeight: W = m · g\nMoon Relation: W_moon = ⅙ · W_earth (g_moon = ⅙ g_earth)',
    variables: 'G = 6.673 × 10⁻¹¹ N·m²/kg², m = mass (constant everywhere), W = Weight in Newtons',
    examTip: 'Mass remains constant throughout the universe; weight varies depending on the local acceleration due to gravity (g).'
  },
  {
    id: 'c9-s4',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Physics (Work, Energy & Power)',
    title: 'Kinetic & Potential Energy and Electrical Units',
    formula: 'Work: W = F · s\nKinetic Energy: K.E. = ½ m v²\nPotential Energy: P.E. = m · g · h\nPower: P = Work / Time = W / t\nCommercial unit: 1 kWh = 3.6 × 10⁶ Joules (3.6 MJ)',
    variables: 'W, K.E., P.E. in Joules (J); Power in Watts (W = J/s)',
    examTip: 'Work done is ZERO if force is perpendicular to displacement (cos 90° = 0), e.g. a porter carrying load on head walking horizontally.'
  },
  {
    id: 'c9-s5',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Chemistry (Matter & Solutions)',
    title: 'Temperature Scale Conversion & Concentration',
    formula: 'Kelvin Conversion: T(K) = T(°C) + 273.15\nDensity (ρ) = Mass (m) / Volume (V)\nMass % = (Mass of Solute / Total Mass of Solution) × 100\nVolume % = (Volume of Solute / Total Volume of Solution) × 100',
    variables: 'Mass of solution = Mass of solute + Mass of solvent (Water)',
    examTip: 'During phase changes (Melting/Boiling), temperature remains constant because supplied heat is absorbed as Latent Heat.'
  },
  {
    id: 'c9-s6',
    classLevel: '9',
    subjectId: 'sci',
    subjectName: 'Science',
    domain: 'Chemistry (Atoms & Molecules)',
    title: 'Mole Calculations & High-Yield Polyatomic Ions',
    formula: 'Mole Relation: n = Mass (m) / Molar Mass (M) = N / N_A\nAvogadro Constant: N_A = 6.022 × 10²³ particles/mol\nCommon Polyatomic Ions:\n• Ammonium: NH₄⁺ (Valency 1)\n• Hydroxide: OH⁻ (Valency 1)\n• Carbonate: CO₃²⁻ (Valency 2)\n• Sulphate: SO₄²⁻ (Valency 2)\n• Phosphate: PO₄³⁻ (Valency 3)',
    variables: '1 mole of any gas at STP occupies 22.4 litres.',
    examTip: 'Always use parentheses when writing multiple polyatomic ions (e.g. Aluminium Sulphate is Al₂(SO₄)₃, not Al2SO43).'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 9: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c9-m1',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Algebra (Polynomials)',
    title: 'Standard Algebraic Identities',
    formula: '1) (a + b)² = a² + 2ab + b²\n2) (a - b)² = a² - 2ab + b²\n3) a² - b² = (a + b)(a - b)\n4) (a + b + c)² = a² + b² + c² + 2(ab + bc + ca)\n5) (a + b)³ = a³ + b³ + 3ab(a + b)\n6) a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)',
    variables: 'Special Case: If (a + b + c) = 0, then a³ + b³ + c³ = 3abc.',
    examTip: 'Frequently tested 3-mark question: Evaluate (28)³ + (-15)³ + (-13)³ without actual cubing, as 28 - 15 - 13 = 0.'
  },
  {
    id: 'c9-m2',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Mensuration (Heron’s Formula)',
    title: "Heron's Formula for Area of Triangle",
    formula: 'Area = √[s(s - a)(s - b)(s - c)]\nSemi-Perimeter: s = (a + b + c) / 2\nEquilateral Triangle Area: (√3 / 4) · a²',
    variables: 'a, b, c = side lengths of triangle; s = semi-perimeter',
    examTip: 'Do not forget to take semi-perimeter s (divide perimeter by 2) before applying the square root formula!'
  },
  {
    id: 'c9-m3',
    classLevel: '9',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Statistics',
    title: 'Mean, Median & Mode of Raw Data',
    formula: 'Mean (x̄) = Σ xᵢ / n = Sum of observations / Total number of observations\nMedian (n odd): Value at [(n + 1)/2]th position\nMedian (n even): Average of (n/2)th and (n/2 + 1)th observations\nMode: Most frequently occurring observation\nEmpirical Relation: Mode ≈ 3 · Median - 2 · Mean',
    variables: 'Always arrange raw data in ASCENDING numerical order before finding the median!',
    examTip: 'If data has two values with the highest equal frequency, the distribution is bimodal.'
  }
];

export function getFormulasForClass(classLevel: string): FormulaItem[] {
  const clean = (classLevel || '').toLowerCase();
  let targetLevel: '9' | '10' | '11' | '12' = '11';

  if (clean.includes('12')) targetLevel = '12';
  else if (clean.includes('11')) targetLevel = '11';
  else if (clean.includes('10')) targetLevel = '10';
  else if (clean.includes('9')) targetLevel = '9';

  return FORMULAS_DATA.filter(f => f.classLevel === targetLevel);
}

export function getSubjectsForFormulaClass(classLevel: string): { id: string; name: string }[] {
  const clean = (classLevel || '').toLowerCase();
  if (clean.includes('11') || clean.includes('12')) {
    return [
      { id: 'ALL', name: 'All Subjects' },
      { id: 'phy', name: 'Physics' },
      { id: 'chem', name: 'Chemistry' },
      { id: 'math', name: 'Mathematics' }
    ];
  }
  return [
    { id: 'ALL', name: 'All Subjects' },
    { id: 'sci', name: 'Science' },
    { id: 'math', name: 'Mathematics' }
  ];
}
