import type { FormulaItem } from './class12_stem';

export const JEE_ADVANCED_FORMULAS: FormulaItem[] = [
  {
    id: 'jee-adv-phy-01',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'IIT Mechanics (ICOR & Variable Mass — ADV ONLY)',
    title: 'Instantaneous Centre of Rotation (ICOR) & Rocket Propulsion',
    formula: "Angular Momentum about Fixed Point O: L_O = I_cm ω + M (r_cm × v_cm)\nRocket Thrust: F_thrust = v_rel (-dm/dt) | Velocity: v = v₀ - gt + v_rel ln(m₀ / m)\nPure Rolling on Accelerating Plank (a₀): v_cm - ωR = a₀ t (no-slip constraint)",
    variables: "v_rel = exhaust speed relative to rocket, I_cm = centroidal MOI, L_O = total angular momentum",
    examTip: "Conserve L about any instantaneous point of zero velocity or line of contact — friction exerts zero torque there!"
  },
  {
    id: 'jee-adv-phy-02',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Thermal Physics & Waves (Carnot & Doppler — ADV ONLY)',
    title: 'Carnot Engine, Entropy Change & Doppler Moving Wall',
    formula: "Carnot Efficiency: η = 1 - T_C / T_H | Heat Pump COP = T_H / (T_H - T_C)\nEntropy Change (Ideal Gas): ΔS = n C_V ln(T₂/T₁) + n R ln(V₂/V₁)\nDoppler Reflected from Moving Wall (v_w toward source): f'' = f₀ · (v + v_w) / (v - v_w)",
    variables: "T_H, T_C in Kelvin, v = sound speed in air, v_w = wall speed, ΔS = entropy change",
    examTip: "Both Carnot Cycle and Doppler Effect were cut from JEE Mains but remain high-yield IIT JEE Advanced Paper 1/2 staples!"
  },
  {
    id: 'jee-adv-phy-03',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electromagnetism & Cavity Fields (IIT Advanced)',
    title: 'Electrostatic Cavity Field, Pressure & Potentiometer Balance',
    formula: "Uniform Spherical Cavity (eccentricity d vector): E_cavity = (ρ d⃗) / (3ε₀) (strictly uniform!)\nElectrostatic Pressure on Conductor Surface: P = σ² / (2ε₀) = (1/2) ε₀ E²\nInternal Resistance via Potentiometer: r = R · (l₁ - l₂) / l₂",
    variables: "ρ = uniform charge density, d⃗ = centre-to-cavity vector, σ = surface charge density, l₁/l₂ = null lengths",
    examTip: "Superposition turns off-centre spherical cavity fields into one vector subtraction (ρ d⃗)/(3ε₀) — top IIT MSQ favorite!"
  },
  {
    id: 'jee-adv-chem-01',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Real Gases & Solid State (ADV ONLY)',
    title: 'Van der Waals Real Gas & Bravais Crystal Lattices',
    formula: "Van der Waals: (P + a n² / V²)(V - n b) = n R T | Boyle Temp T_B = a / (Rb)\nCritical Constants: V_c = 3b, P_c = a/(27b²), T_c = 8a/(27Rb), Z_c = 3/8\nBravais Packing Fraction: SC = 52.4% (r=a/2), BCC = 68% (√3a=4r), FCC = 74% (√2a=4r)",
    variables: "a = attraction constant, b = excluded co-volume, Z = PV/nRT, a = edge length",
    examTip: "In FCC lattice with N spheres: Tetrahedral Voids = 2N (at r = √3a/4 from corner), Octahedral Voids = N (edge centres + body centre)."
  },
  {
    id: 'jee-adv-chem-02',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Surface Chemistry, Metallurgy & Polymers (ADV ONLY)',
    title: 'Freundlich Isotherm, Ellingham Diagrams & Condensation Polymers',
    formula: "Freundlich Adsorption: x / m = k P^(1/n) (0 < 1/n ≤ 1) => log(x/m) = log k + (1/n) log P\nHardy-Schulze Coagulation Power ∝ (Valency of Flocculating Ion)⁴\nEllingham Slope ΔG° = ΔH° - T ΔS°: C → CO (slope < 0, crosses metal lines at higher T)",
    variables: "x/m = adsorbate mass per g adsorbent, P = equilibrium gas pressure, ΔG° = standard Gibbs reduction free energy",
    examTip: "Check polymer cross-links carefully: Nylon-6,6 (amide), Terylene/Dacron (ester), Bakelite (phenol + HCHO thermoset)."
  },
  {
    id: 'jee-adv-math-01',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Vector Triple Products & 3D Planes (ADV ONLY)',
    title: 'Box Product [a b c], VTP Expansion & Family of 3D Planes',
    formula: "Vector Triple Product: a × (b × c) = (a · c)b - (a · b)c\nLagrange Identity: (a × b) · (c × d) = | a·c  a·d ; b·c  b·d |\nImage / Foot of Perpendicular in Plane ax+by+cz+d=0: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c = -k (k=1 foot, k=2 image)",
    variables: "d = a·b×c = [a b c] (volume of parallelepiped); k = (ax₁+by₁+cz₁+d)/(a²+b²+c²)",
    examTip: "Always memorize [a×b  b×c  c×a] = [a b c]² and Tetrahedron Volume = (1/6) |[a b c]| — heavily tested in IIT Paper 2!"
  },
  {
    id: 'jee-adv-math-02',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Complex Rotation & Cayley-Hamilton (ADV ONLY)',
    title: 'Coni / Argand Rotation Theorem & Cayley-Hamilton Matrix Powers',
    formula: "Argand Rotation about z₀ by θ: (z₂ - z₀)/(z₁ - z₀) = (|z₂ - z₀| / |z₁ - z₀|) e^(iθ)\nnth Roots of Unity (zⁿ = 1): Σ α_k = 0, Π α_k = (-1)^(n-1), Σ 1/(z - α_k) = n z^(n-1)/(zⁿ - 1)\nCayley-Hamilton: Every square matrix satisfies its characteristic eq. det(A - λI) = 0",
    variables: "θ = counter-clockwise angle from ray z₀z₁ to ray z₀z₂, α_k = e^(i 2πk/n)",
    examTip: "For 2×2 or 3×3 JEE Advanced matrix powers (A⁵ - 4A³...), use characteristic polynomial tr(A) & det(A) via Cayley-Hamilton instead of multiplying!"
  }
];
