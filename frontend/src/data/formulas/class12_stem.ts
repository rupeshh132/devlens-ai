export interface FormulaItem {
  id: string;
  classLevel: '9' | '10' | '11' | '12';
  subjectId: string;
  subjectName: string;
  domain: string;
  title: string;
  formula: string;
  variables: string;
  examTip: string;
}

export const CLASS_12_STEM_FORMULAS: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: PHYSICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-phy-01',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electrostatics',
    title: "Coulomb's Law, Force in Medium & Dielectric Constant",
    formula: "In Vacuum: F₀ = [1 / (4πε₀)] · (|q₁ q₂| / r²) [1/(4πε₀) = 9 × 10⁹ N·m²/C²]\nIn Medium: F_m = F₀ / K = [1 / (4πε)] · (|q₁ q₂| / r²)\nDielectric Constant: K = ε_r = ε / ε₀ = F₀ / F_m",
    variables: "q₁, q₂ = point charges (Coulombs, C), r = separation distance (m), ε₀ = 8.854 × 10⁻¹² C²/(N·m²), K = dielectric constant (K ≥ 1)",
    examTip: "Force between two charges decreases by a factor of K when placed in a medium. For vacuum K = 1, for water K ≈ 80, and for a metallic conductor K = ∞ (net electrostatic force inside a metal is zero)."
  },
  {
    id: 'c12-phy-02',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electrostatics',
    title: 'Electric Dipole: Axial, Equatorial Field & Torque',
    formula: "Dipole Moment: p = q · (2a) [directed from -q to +q]\nAxial Field (r >> a): E_axial = [1 / (4πε₀)] · (2p / r³)\nEquatorial Field (r >> a): E_equatorial = [1 / (4πε₀)] · (p / r³)\nRelation: E_axial = 2 · E_equatorial\nTorque on Dipole: τ = p × E = p E sinθ\nPotential Energy: U = -p · E = -p E cosθ",
    variables: "p = dipole moment (C·m), 2a = dipole length, r = distance from dipole center (m), θ = angle between p and external uniform field E",
    examTip: "Stable equilibrium occurs at θ = 0° (U = -pE, minimum energy). Unstable equilibrium occurs at θ = 180° (U = +pE, maximum energy). Work done to rotate dipole from θ₁ to θ₂ is W = pE(cosθ₁ - cosθ₂)."
  },
  {
    id: 'c12-phy-03',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electrostatics',
    title: "Gauss's Law and Continuous Charge Distributions",
    formula: "Gauss's Law: Φ = ∮ E · dA = q_enclosed / ε₀\nInfinitely Long Wire: E = λ / (2πε₀ r)\nInfinite Thin Sheet: E = σ / (2ε₀) [independent of distance r]\nConducting Plate (Surface): E = σ / ε₀\nThin Spherical Shell: E_in = 0 (r < R) ; E_out = [1 / (4πε₀)] · (q / r²) (r ≥ R)",
    variables: "Φ = electric flux (N·m²/C), λ = linear charge density (C/m), σ = surface charge density (C/m²), R = radius of shell (m)",
    examTip: "Electric field inside any hollow charged conducting shell is strictly ZERO. Electric potential inside is CONSTANT and equals the surface potential: V_in = V_surface = q / (4πε₀ R)."
  },
  {
    id: 'c12-phy-04',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Capacitance & Dielectrics',
    title: 'Parallel Plate Capacitor, Energy Density & Combinations',
    formula: "Capacitance in Air: C₀ = (ε₀ A) / d\nWith Dielectric Slab of thickness t: C = ε₀ A / [d - t + (t / K)]\nFully Filled Dielectric: C = K · C₀\nEnergy Stored: U = ½ C V² = Q² / (2C) = ½ Q V\nEnergy Density: u_E = ½ ε₀ E²\nSeries: 1/C_s = 1/C₁ + 1/C₂ | Parallel: C_p = C₁ + C₂",
    variables: "A = plate area (m²), d = plate separation (m), K = dielectric constant, V = potential difference (Volts), Q = charge (C)",
    examTip: "Battery Disconnected case: Inserting dielectric keeps Q constant, C increases by K, V decreases by K, and stored energy U decreases by K. Battery Connected case: V remains constant, C increases by K, Q increases by K, and U increases by K."
  },
  {
    id: 'c12-phy-05',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Current Electricity',
    title: 'Drift Velocity, Current Density & Resistance Variation',
    formula: "Drift Velocity: v_d = - (e E τ) / m\nCurrent Relation: I = n e A v_d\nCurrent Density: j = I / A = n e v_d = σ E\nResistance: R = ρ (l / A) = [m / (n e² τ)] · (l / A)\nTemperature Variation: R_T = R₀ (1 + α ΔT)\nConductivity: σ = 1 / ρ = (n e² τ) / m",
    variables: "e = 1.6 × 10⁻¹⁹ C, m = 9.1 × 10⁻³¹ kg (electron mass), τ = relaxation time (s), n = free electron number density (m⁻³), α = temperature coefficient (K⁻¹)",
    examTip: "When a metallic wire of initial resistance R is uniformly stretched to n times its original length (l' = n·l), its volume remains constant (A' = A/n), and the new resistance becomes R' = n² · R."
  },
  {
    id: 'c12-phy-06',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Current Electricity',
    title: "Kirchhoff's Laws, Cell Combinations & Wheatstone Bridge",
    formula: "Junction Rule (KCL): Σ I = 0 (Conservation of Electric Charge)\nLoop Rule (KVL): Σ ΔV = Σ E - Σ I R = 0 (Conservation of Energy)\nCells in Series: E_eq = E₁ + E₂ ; r_eq = r₁ + r₂\nCells in Parallel: E_eq = (E₁/r₁ + E₂/r₂) / (1/r₁ + 1/r₂) ; 1/r_eq = 1/r₁ + 1/r₂\nBalanced Wheatstone Bridge: P / Q = R / S (Galvanometer current I_g = 0)",
    variables: "E = electromotive force (EMF in Volts), r = internal resistance (Ω), I_g = current through central galvanometer arm",
    examTip: "In a balanced Wheatstone bridge, no current flows through the central branch containing the galvanometer. The balance condition remains unaffected if the positions of the battery and galvanometer are interchanged."
  },
  {
    id: 'c12-phy-07',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Moving Charges & Magnetism',
    title: 'Biot-Savart Law, Circular Loop & Straight Conductor Field',
    formula: "Biot-Savart Law: dB = (μ₀ / 4π) · [I (dl × r̂) / r²] [μ₀ / 4π = 10⁻⁷ T·m/A]\nStraight Wire of Infinite Length: B = (μ₀ I) / (2π r)\nAxis of Circular Coil (N turns): B_axis = [μ₀ N I R²] / [2(R² + x²)^(3/2)]\nCenter of Circular Coil: B_center = (μ₀ N I) / (2R)\nAmpere's Circuital Law: ∮ B · dl = μ₀ I_enclosed\nSolenoid Field: B = μ₀ n I (where n = N / L)",
    variables: "B = magnetic field (Tesla, T), μ₀ = 4π × 10⁻⁷ T·m/A, I = current (A), R = radius of coil (m), x = distance along axis (m), n = turns per unit length",
    examTip: "At the center of a circular coil, x = 0, giving B_center = μ₀NI / (2R). At a distance x = R on the axis, B = B_center / 2^(3/2) = B_center / (2√2)."
  },
  {
    id: 'c12-phy-08',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Moving Charges & Magnetism',
    title: 'Lorentz Force, Helical Path & Moving Coil Galvanometer',
    formula: "Lorentz Force: F = q(E + v × B)\nMagnetic Force: F_m = q (v × B) = q v B sinθ\nRadius of Circular Path: r = (m v) / (q B) = p / (q B) = √(2m K) / (q B)\nTime Period: T = (2π m) / (q B) [Independent of speed v and radius r]\nPitch of Helix: p_pitch = v_parallel · T = (2π m v cosθ) / (q B)\nGalvanometer Deflection: I = (C / N A B) · θ = K_g · θ\nCurrent Sensitivity: I_s = θ / I = (N A B) / C\nVoltage Sensitivity: V_s = θ / V = (N A B) / (C · R)",
    variables: "q = particle charge (C), m = mass (kg), K = kinetic energy, C = torsional restoring couple per unit twist, N = turns, A = coil area",
    examTip: "Increasing current sensitivity by doubling N also doubles the resistance R of the coil, so voltage sensitivity V_s = I_s / R often remains unchanged!"
  },
  {
    id: 'c12-phy-09',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Moving Charges & Magnetism',
    title: 'Conversion of Galvanometer into Ammeter and Voltmeter',
    formula: "Galvanometer to Ammeter (Parallel Low Shunt S):\nS = [I_g / (I - I_g)] · G\nEquivalent Resistance of Ammeter: R_A = (G · S) / (G + S) ≈ S (very low)\n\nGalvanometer to Voltmeter (Series High Resistance R):\nR = (V / I_g) - G\nEquivalent Resistance of Voltmeter: R_V = G + R (very high)",
    variables: "G = galvanometer resistance (Ω), I_g = full scale deflection current (A), I = range of ammeter (A), V = range of voltmeter (V), S = shunt resistance (Ω)",
    examTip: "An ideal ammeter has ZERO internal resistance and is always connected in series. An ideal voltmeter has INFINITE internal resistance and is always connected in parallel across the component."
  },
  {
    id: 'c12-phy-10',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Magnetism and Matter',
    title: "Magnetic Dipole, Earth's Magnetism & Susceptibility",
    formula: "Magnetic Dipole Moment of Loop: M = N I A (A·m² or J/T)\nTorque on Magnetic Dipole: τ = M × B = M B sinθ\nPotential Energy: U = -M · B = -M B cosθ\nEarth's Magnetic Field: B_H = B_e cosδ ; B_V = B_e sinδ ; tanδ = B_V / B_H\nMagnetic Permeability: μ_r = 1 + χ_m (where χ_m = M_z / H)\nCurie's Law (Paramagnetics): χ_m = C / T (T in Kelvin)",
    variables: "M = magnetic dipole moment, δ = angle of dip (inclination), B_H = horizontal component of Earth's magnetic field, χ_m = magnetic susceptibility",
    examTip: "At the magnetic equator: angle of dip δ = 0° (vertical component B_V = 0). At the magnetic poles: angle of dip δ = 90° (horizontal component B_H = 0). For diamagnetic materials, χ_m is negative and temperature-independent."
  },
  {
    id: 'c12-phy-11',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electromagnetic Induction',
    title: "Faraday's Laws, Lenz's Law & Self / Mutual Inductance",
    formula: "Magnetic Flux: Φ_B = B · A = B A cosθ (Webers, Wb)\nFaraday's Induced EMF: e = -dΦ_B / dt = -N (dΦ_B / dt)\nMotional EMF (Rod length l in uniform B): e = B · v · l\nRotating Rod EMF: e = ½ B ω l²\nSelf Inductance: Φ = L I  =>  e = -L (dI / dt)\nSelf Inductance of Solenoid: L = μ₀ n² A l = (μ₀ N² A) / l\nMagnetic Energy Stored: U_B = ½ L I²\nMutual Inductance of Two Coaxial Solenoids: M = μ₀ n₁ n₂ π r₁² l",
    variables: "L = self inductance (Henries, H), M = mutual inductance (H), v = velocity (m/s), ω = angular speed (rad/s), N = total turns, n = turns per unit length",
    examTip: "Lenz's Law (indicated by the negative sign) states that the direction of the induced current always opposes the change in magnetic flux that creates it, which is a direct consequence of the Law of Conservation of Energy."
  },
  {
    id: 'c12-phy-12',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Alternating Current',
    title: 'AC Voltage, RMS Values & Series LCR Resonance',
    formula: "RMS and Peak Relations: I_rms = I₀ / √2 ≈ 0.707 I₀ ; V_rms = V₀ / √2 ≈ 0.707 V₀\nInductive Reactance: X_L = ω L = 2π f L\nCapacitive Reactance: X_C = 1 / (ω C) = 1 / (2π f C)\nLCR Series Impedance: Z = √[R² + (X_L - X_C)²]\nPhase Angle: tanφ = (X_L - X_C) / R\nResonant Frequency: ω₀ = 1 / √(L C)  =>  f₀ = 1 / [2π √(L C)]\nPower Factor: cosφ = R / Z\nAverage Power: P_avg = V_rms · I_rms · cosφ\nQuality Factor: Q = (ω₀ L) / R = 1 / [R √(C / L)]",
    variables: "Z = impedance (Ω), X_L, X_C = reactances (Ω), f = frequency (Hz), cosφ = power factor, Q = sharpness of resonance",
    examTip: "At series resonance: X_L = X_C, impedance is MINIMUM (Z = R), current is MAXIMUM (I_max = V/R), phase angle φ = 0, and power factor cosφ = 1. In a purely inductive or purely capacitive circuit, cosφ = 0, and average power consumed is ZERO (Wattless current)."
  },
  {
    id: 'c12-phy-13',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Alternating Current & Transformers',
    title: 'AC Generator and Transformer Equations',
    formula: "AC Generator Instantaneous EMF: e = N B A ω sin(ωt) = e₀ sin(ωt)\nPeak EMF: e₀ = N B A ω\nTransformer Turns Ratio: V_s / V_p = N_s / N_p = I_p / I_s = k\nStep-Up Transformer: k > 1 (N_s > N_p, V_s > V_p, but I_s < I_p)\nStep-Down Transformer: k < 1 (N_s < N_p, V_s < V_p, but I_s > I_p)\nEfficiency: η = (Output Power / Input Power) × 100 = (V_s I_s) / (V_p I_p) × 100",
    variables: "V_p, V_s = primary & secondary voltages, N_p, N_s = primary & secondary turns, I_p, I_s = primary & secondary currents, k = turns ratio",
    examTip: "A transformer works ONLY on Alternating Current (AC) based on mutual induction. If direct current (DC) is applied to the primary coil of a transformer, the magnetic flux is constant (dΦ/dt = 0), and output secondary voltage is ZERO (the primary may burn due to low resistance)."
  },
  {
    id: 'c12-phy-14',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Electromagnetic Waves',
    title: 'Maxwell Equations, Displacement Current & Wave Speed',
    formula: "Displacement Current: I_d = ε₀ · (dΦ_E / dt)\nAmpere-Maxwell Law: ∮ B · dl = μ₀ (I_c + I_d) = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt)\nSpeed of Light in Vacuum: c = 1 / √(μ₀ ε₀) ≈ 3 × 10⁸ m/s\nSpeed in Medium: v = 1 / √(μ ε) = c / √(μ_r ε_r) = c / n\nField Amplitude Relation: c = E₀ / B₀\nTotal Energy Density: u = ½ ε₀ E² + B² / (2μ₀) = ε₀ E_rms² = B_rms² / μ₀",
    variables: "I_d = displacement current (A), Φ_E = electric flux, E₀, B₀ = peak amplitudes of electric and magnetic vectors, n = refractive index",
    examTip: "Electromagnetic waves are transverse in nature. E and B vectors oscillate in mutually perpendicular directions, and both are perpendicular to the direction of wave propagation (Wave vector k || E × B)."
  },
  {
    id: 'c12-phy-15',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Ray Optics',
    title: "Mirror Equation, Snell's Law & Critical Angle",
    formula: "Mirror Formula: 1/v + 1/u = 1/f = 2/R\nLinear Magnification (Mirror): m = -v / u = h_i / h_o = (f - v) / f = f / (f - u)\nSnell's Law: n₁ sin i = n₂ sin r  =>  ₁n₂ = n₂ / n₁ = v₁ / v₂ = λ₁ / λ₂\nCritical Angle for Total Internal Reflection (TIR): sin i_c = 1 / n = n_rarer / n_denser\nApparent Depth: d_apparent = d_real / n",
    variables: "u = object distance, v = image distance, f = focal length, R = radius of curvature, n = refractive index, i_c = critical angle",
    examTip: "Two mandatory conditions for Total Internal Reflection (TIR): (1) Light must travel from an optically denser medium to an optically rarer medium. (2) The angle of incidence i must be strictly greater than the critical angle i_c."
  },
  {
    id: 'c12-phy-16',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Ray Optics',
    title: "Refraction at Spherical Surfaces & Lens Maker's Formula",
    formula: "Single Spherical Refracting Surface: (n₂ / v) - (n₁ / u) = (n₂ - n₁) / R\nLens Maker's Formula: 1/f = (n₂/n₁ - 1) · [1/R₁ - 1/R₂]\nThin Lens Formula: 1/v - 1/u = 1/f\nMagnification of Lens: m = +v / u = h_i / h_o = f / (f + u)\nPower of Lens: P = 1 / f (in metres) = 100 / f (in cm) [Dioptres, D]\nCombination of Lenses in Contact: 1/F = 1/f₁ + 1/f₂  =>  P = P₁ + P₂",
    variables: "n₂ = lens refractive index, n₁ = surrounding medium index, R₁, R₂ = radii of curvature (with Cartesian sign convention), P = power (D)",
    examTip: "When a convex glass lens (n_g = 1.5) is immersed in water (n_w = 1.33), its focal length increases by roughly 4 times (f_w ≈ 4·f_air), and its power decreases. If immersed in a liquid having n_liquid > n_glass, a convex lens behaves as a DIVERGING (concave) lens!"
  },
  {
    id: 'c12-phy-17',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Ray Optics',
    title: 'Prism Formula & Optical Instruments (Microscope & Telescope)',
    formula: "Prism Refraction: A + δ = i + e\nPrism Formula at Minimum Deviation: n = sin[(A + D_m)/2] / sin(A/2)\nThin Prism: δ = (n - 1) A\nCompound Microscope Magnification:\n• Image at Near Point D: M = - (v₀ / u₀) · (1 + D / f_e)\n• Image at Infinity (Normal): M = - (v₀ / u₀) · (D / f_e) ≈ - (L / f₀) · (D / f_e)\nAstronomical Telescope Magnification (Normal adjustment):\nM = -f₀ / f_e  ;  Length of Tube: L = f₀ + f_e\n• Image at Near Point D: M = - (f₀ / f_e) · (1 + f_e / D)",
    variables: "A = prism angle, D_m = angle of minimum deviation, f₀ = objective focal length, f_e = eyepiece focal length, D = least distance of distinct vision (25 cm)",
    examTip: "For an Astronomical Telescope, the objective lens must have a LARGE focal length (f₀ >> f_e) and a LARGE aperture to maximize light-gathering power and resolution. For a Compound Microscope, the objective must have a SHORT focal length and SMALL aperture."
  },
  {
    id: 'c12-phy-18',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Wave Optics',
    title: "Huygens' Principle, YDSE Interference & Fringe Width",
    formula: "Interference Conditions: I = I₁ + I₂ + 2√(I₁ I₂) cosφ\nConstructive (Bright): Path Diff Δx = n λ  =>  φ = 2nπ\nDestructive (Dark): Path Diff Δx = (2n - 1) · (λ / 2)  =>  φ = (2n - 1)π\nIntensity Ratio: I_max / I_min = [(√I₁ + √I₂)/(√I₁ - √I₂)]² = [(a₁ + a₂)/(a₁ - a₂)]²\nYoung's Double Slit Fringe Width: β = (λ · D) / d\nPosition of nth Bright Fringe: y_n = (n λ D) / d\nPosition of nth Dark Fringe: y_n' = (2n - 1) · (λ D) / (2d)",
    variables: "λ = wavelength of light (m), D = distance to screen (m), d = distance between two slits (m), β = fringe width (m), a₁, a₂ = wave amplitudes",
    examTip: "Fringe width β is directly proportional to wavelength λ. Since λ_red > λ_violet, red fringes are wider than violet fringes. If the entire YDSE apparatus is immersed in water (index n), the new fringe width shrinks to β' = β / n."
  },
  {
    id: 'c12-phy-19',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Wave Optics',
    title: "Single Slit Diffraction & Brewster's Law of Polarization",
    formula: "Diffraction Minima Condition: a sinθ = n λ (for n = 1, 2, 3...)\nDiffraction Secondary Maxima: a sinθ = (2n + 1) · (λ / 2)\nAngular Width of Central Maximum: 2θ₀ = 2λ / a\nLinear Width of Central Maximum: β₀ = (2λ D) / a = 2β\nBrewster's Law (Polarizing Angle i_p): n = tan i_p\nReflected and Refracted Rays Relation: i_p + r = 90° (Mutually perpendicular)\nMalus's Law: I = I₀ cos²θ",
    variables: "a = slit width (m), θ = diffraction angle, i_p = Brewster's polarizing angle, I₀ = intensity of polarized light incident on analyzer, θ = angle between transmission axes",
    examTip: "The width of the central diffraction maximum is TWICE the width of secondary maxima (β₀ = 2β). At Brewster's angle, the reflected light is 100% plane-polarized, and the reflected and refracted rays are perpendicular to each other."
  },
  {
    id: 'c12-phy-20',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Dual Nature of Radiation and Matter',
    title: "Photoelectric Effect, Stopping Potential & De Broglie Waves",
    formula: "Photon Energy & Momentum: E = h ν = h c / λ  ;  p = h / λ = E / c\nEinstein's Photoelectric Equation: K_max = h ν - Φ₀ = h (ν - ν₀) = e V₀\nThreshold Wavelength: Φ₀ = h ν₀ = h c / λ₀\nDe Broglie Wavelength: λ = h / p = h / (m v) = h / √(2m K)\nElectron Accelerated by Voltage V: λ_e = h / √(2m e V) = 1.227 / √V nm = 12.27 / √V Å",
    variables: "h = 6.626 × 10⁻³⁴ J·s, Φ₀ = work function of metal (eV or J), V₀ = stopping potential (V), ν₀ = threshold frequency (Hz), V = accelerating potential (Volts)",
    examTip: "Stopping potential V₀ depends ONLY on the frequency (or wavelength) of incident light, completely independent of light intensity! Light intensity determines the NUMBER of incident photons, and thus the saturation photoelectric current."
  },
  {
    id: 'c12-phy-21',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Atoms',
    title: 'Bohr Model of Hydrogen Atom: Radius, Velocity & Energy',
    formula: "Angular Momentum Quantization: L = m v r = (n h) / (2π)\nRadius of nth Orbit: r_n = [ε₀ h² / (π m e²)] · (n² / Z) = 0.529 · (n² / Z) Å\nVelocity in nth Orbit: v_n = [e² / (2ε₀ h)] · (Z / n) = c / 137 · (Z / n)\nTotal Energy in nth Orbit: E_n = - [m e⁴ / (8ε₀² h²)] · (Z² / n²) = -13.6 · (Z² / n²) eV\nEnergy Relations: Kinetic Energy K = -E ; Potential Energy U = 2E\nRydberg Formula: 1 / λ = R_H · Z² · [1/n₁² - 1/n₂²] [R_H = 1.097 × 10⁷ m⁻¹]",
    variables: "n = principal quantum number (1, 2, 3...), Z = atomic number, R_H = Rydberg constant, 1 eV = 1.6 × 10⁻¹⁹ J",
    examTip: "Spectral Series in Hydrogen: Lyman Series (n₁ = 1, ultraviolet region); Balmer Series (n₁ = 2, visible light region); Paschen Series (n₁ = 3, infrared); Brackett (n₁ = 4, infrared); Pfund (n₁ = 5, far-infrared)."
  },
  {
    id: 'c12-phy-22',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Nuclei',
    title: 'Nuclear Radius, Mass Defect & Binding Energy',
    formula: "Nuclear Radius: R = R₀ · A^(1/3) [where R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm]\nNuclear Density: ρ = Mass / Volume ≈ 2.3 × 10¹⁷ kg/m³ (Independent of mass number A)\nMass Defect: Δm = [Z · m_p + (A - Z) · m_n] - M_nucleus\nBinding Energy: E_b = Δm · c² = Δm (in amu) × 931.5 MeV\nBinding Energy Per Nucleon: E_bn = E_b / A",
    variables: "A = mass number, Z = atomic number, m_p = proton mass, m_n = neutron mass, 1 amu (u) = 1.6605 × 10⁻²⁷ kg ≈ 931.5 MeV",
    examTip: "Nuclear density is CONSTANT across all atomic nuclei, regardless of whether it is Hydrogen or Uranium (ρ ≈ 2.3 × 10¹⁷ kg/m³). The peak of the binding energy curve occurs at Iron-56 (E_bn ≈ 8.75 MeV/nucleon), making Fe-56 the most stable nucleus."
  },
  {
    id: 'c12-phy-23',
    classLevel: '12',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Semiconductor Electronics',
    title: 'Intrinsic / Extrinsic Carriers & p-n Junction Diode',
    formula: "Mass Action Law: n_i² = n_e · n_h\nElectrical Conductivity: σ = e (n_e μ_e + n_h μ_h)\nn-type Semiconductor: n_e ≈ N_d >> n_h (Electrons are majority)\np-type Semiconductor: n_h ≈ N_a >> n_e (Holes are majority)\nDynamic Resistance of Diode: r_d = ΔV / ΔI\nHalf-Wave Rectifier Efficiency: η_max = 40.6% ; Ripple Frequency = f_in\nFull-Wave Rectifier Efficiency: η_max = 81.2% ; Ripple Frequency = 2 · f_in",
    variables: "n_i = intrinsic carrier density, n_e = electron density, n_h = hole density, μ_e, μ_h = carrier mobilities (m²/V·s), N_d = donor atoms, N_a = acceptor atoms",
    examTip: "Forward Bias: p-side connected to positive terminal, depletion layer width DECREASES, barrier potential decreases. Reverse Bias: p-side connected to negative terminal, depletion layer width INCREASES, current is negligible (micro-amperes due to minority carriers)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: CHEMISTRY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-chem-01',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Solutions',
    title: "Henry's Law, Raoult's Law & Liquid Mixtures",
    formula: "Henry's Law: p = K_H · x\nRaoult's Law (Volatile Components): p_A = p_A° · x_A  ;  p_B = p_B° · x_B\nTotal Vapour Pressure: P_total = p_A + p_B = p_A° + (p_B° - p_A°) · x_B\nVapour Phase Mole Fraction: y_A = p_A / P_total = (p_A° · x_A) / P_total",
    variables: "p = partial pressure of gas, K_H = Henry's law constant, x = liquid mole fraction, p_A°, p_B° = pure component vapour pressures, y_A = mole fraction in vapour",
    examTip: "Henry's constant K_H INCREASES with increasing temperature; hence the solubility of gases in liquids DECREASES with rising temperature (which is why aquatic species feel more comfortable in cold water than warm water)."
  },
  {
    id: 'c12-chem-02',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Solutions',
    title: "Colligative Properties & van 't Hoff Factor",
    formula: "1) Relative Lowering of Vapour Pressure: (P° - P_s) / P° = i · x_solute ≈ i · (n₂ / n₁)\n2) Elevation in Boiling Point: ΔT_b = i · K_b · m  (where m = 1000·w₂ / [M₂·w₁])\n3) Depression in Freezing Point: ΔT_f = i · K_f · m\n4) Osmotic Pressure: Π = i · C · R · T = i · (n₂ / V) · R · T\nvan 't Hoff Factor (Dissociation): i = 1 + (n - 1) α\nvan 't Hoff Factor (Association): i = 1 + (1/n - 1) α",
    variables: "i = van 't Hoff factor, K_b = molal elevation constant (ebullioscopic), K_f = molal depression constant (cryoscopic), m = molality (mol/kg), α = degree of dissociation/association",
    examTip: "Colligative properties depend SOLELY on the number of solute particles in solution, independent of their chemical nature. When comparing boiling points or freezing points of equimolar solutions, evaluate effective concentration i·M (e.g. 0.1 M Al₂(SO₄)₃ has i = 5, giving highest boiling point and lowest freezing point)."
  },
  {
    id: 'c12-chem-03',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Electrochemistry',
    title: 'Specific & Molar Conductivity, Kohlrausch Law',
    formula: "Resistance & Conductance: R = ρ (l / A)  ;  G = 1 / R = κ (A / l)\nCell Constant: G* = l / A = R · κ (cm⁻¹ or m⁻¹)\nSpecific Conductivity: κ = (l / A) / R\nMolar Conductivity: Λ_m = (1000 · κ) / Molarity (in S·cm²/mol) = κ / (1000 · C) (in S·m²/mol)\nKohlrausch Law of Independent Migration: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋\nDegree of Dissociation (Weak Electrolyte): α = Λ_m / Λ°_m\nDissociation Constant: K_a = [C · α²] / (1 - α) = [C · (Λ_m / Λ°_m)²] / [1 - (Λ_m / Λ°_m)]",
    variables: "κ = conductivity (S/cm or S/m), G* = cell constant, Λ_m = molar conductivity, Λ°_m = limiting molar conductivity at infinite dilution",
    examTip: "Upon dilution: Specific conductivity κ always DECREASES because the number of current-carrying ions per unit volume decreases. However, Molar conductivity Λ_m always INCREASES upon dilution due to increase in total volume and higher ionic mobility."
  },
  {
    id: 'c12-chem-04',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Electrochemistry',
    title: "Nernst Equation, Cell EMF & Faraday's Laws",
    formula: "Standard Cell Potential: E°_cell = E°_cathode (reduction) - E°_anode (reduction)\nNernst Equation at 298 K: E_cell = E°_cell - (0.0591 / n) · log₁₀ Q\nEquilibrium Constant Relation: E°_cell = (0.0591 / n) · log₁₀ K_c\nGibbs Free Energy & EMF: ΔG° = -n · F · E°_cell  ;  ΔG = -n · F · E_cell\nFaraday's First Law: w = Z · I · t = [M / (n · F)] · I · t\nFaraday's Second Law: w₁ / E₁ = w₂ / E₂ (for same charge Q)",
    variables: "n = number of electrons exchanged in balanced redox reaction, F = 96500 C/mol, Q = reaction quotient = [Anodic ions]^a / [Cathodic ions]^c",
    examTip: "A redox cell reaction is spontaneous in the forward direction if and only if E_cell > 0, which guarantees that ΔG < 0. Under standard conditions, higher (more positive) reduction potential E° indicates a stronger oxidizing agent (greater tendency to get reduced)."
  },
  {
    id: 'c12-chem-05',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Chemical Kinetics',
    title: 'Differential & Integrated Rate Laws (Zero & First Order)',
    formula: "General Rate: Rate = -(1/a) d[A]/dt = +(1/c) d[C]/dt = k [A]^x [B]^y (Order n = x + y)\nZero Order Reaction:\n• Integrated Law: [A] = [A]₀ - k · t\n• Rate Constant: k = ([A]₀ - [A]) / t  (Units: mol·L⁻¹·s⁻¹)\n• Half Life: t_½ = [A]₀ / (2k) [Directly proportional to initial concentration]\nFirst Order Reaction:\n• Integrated Law: k = (2.303 / t) · log₁₀ ([A]₀ / [A])\n• Exponential Form: [A] = [A]₀ · e^(-kt)\n• Rate Constant Units: s⁻¹ or min⁻¹ (Independent of concentration units)\n• Half Life: t_½ = 0.693 / k [Strictly INDEPENDENT of initial concentration]",
    variables: "[A]₀ = initial concentration at t = 0, [A] = unreacted concentration at time t, k = rate constant, t_½ = half-life period",
    examTip: "To prove a reaction is first order: Show that time required for 75% completion is exactly double the half life: t_75% = 2 · t_50%. Radioactive decay processes always follow first order kinetics."
  },
  {
    id: 'c12-chem-06',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Chemical Kinetics',
    title: 'Arrhenius Equation & Temperature Dependence of Rates',
    formula: "Arrhenius Equation: k = A · e^(-E_a / RT)\nLogarithmic Form: ln k = ln A - (E_a / R) · (1 / T)\nBase-10 Form: log₁₀ k = log₁₀ A - [E_a / (2.303 R T)]\nRatio at Two Temperatures: log₁₀ (k₂ / k₁) = [E_a / (2.303 R)] · [(T₂ - T₁) / (T₁ T₂)]\nSlope of Plot (log₁₀ k vs 1/T): Slope = - E_a / (2.303 R)\nIntercept = log₁₀ A",
    variables: "k = rate constant, A = Arrhenius pre-exponential frequency factor, E_a = activation energy (J/mol), R = 8.314 J/(mol·K), T = temperature in Kelvin",
    examTip: "A catalyst provides an alternative reaction pathway with LOWER activation energy E_a. A catalyst increases the rates of BOTH forward and backward reactions equally, thus it does NOT alter the equilibrium constant K_c or the Gibbs energy ΔG."
  },
  {
    id: 'c12-chem-07',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'd- and f-Block Elements',
    title: 'Magnetic Moment, Lanthanoid Contraction & Standard Potentials',
    formula: "Spin-Only Magnetic Moment: μ_s = √[n(n + 2)] Bohr Magnetons (BM)\nwhere n = number of unpaired d-electrons\nLanthanoid Contraction: Regular decrease in atomic and ionic radii from La³⁺ to Lu³⁺ due to poor shielding by 4f electrons.\nConsequences of Lanthanoid Contraction:\n1) Zr (4d) and Hf (5d) have almost identical covalent radii (160 pm and 159 pm).\n2) Basic strength of hydroxides decreases: La(OH)₃ is most basic, Lu(OH)₃ is least basic.",
    variables: "n = number of unpaired electrons (BM = eh / [4πmc] = 9.27 × 10⁻²⁴ J/T)",
    examTip: "Sc³⁺, Ti⁴⁺ (d⁰) and Zn²+, Cu⁺ (d¹⁰) are diamagnetic and COLOURLESS because they lack unpaired electrons for d-d transitions. Mn²⁺ (3d⁵) has 5 unpaired electrons, giving maximum spin magnetic moment μ = √(5×7) = √35 ≈ 5.92 BM."
  },
  {
    id: 'c12-chem-08',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Coordination Compounds',
    title: 'Valence Bond Theory, Crystal Field Splitting & IUPAC Rules',
    formula: "Octahedral Crystal Field Splitting (Δ_o):\nt_2g orbital energy = -0.4 Δ_o (-⅖ Δ_o) ; e_g orbital energy = +0.6 Δ_o (+⅗ Δ_o)\nTetrahedral Splitting: Δ_t = (4/9) Δ_o\nSpectrochemical Series (Ligand Field Strength):\nI⁻ < Br⁻ < S²⁻ < Cl⁻ < NO₃⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < NO₂⁻ < CN⁻ < CO\nCFSE Formula (Octahedral): CFSE = [-0.4 n(t_2g) + 0.6 n(e_g)] · Δ_o + m·P",
    variables: "Δ_o = octahedral crystal field splitting energy, P = pairing energy. If Δ_o > P: Strong field ligand, pairing occurs (low-spin complex). If Δ_o < P: Weak field ligand, pairing does not occur (high-spin complex).",
    examTip: "[Fe(CN)₆]³⁻: CN⁻ is strong field ligand, causes pairing, forms inner orbital d²sp³ complex (paramagnetic, 1 unpaired electron). [FeF₆]³⁻: F⁻ is weak field ligand, no pairing, forms outer orbital sp³d² complex (paramagnetic, 5 unpaired electrons)."
  },
  {
    id: 'c12-chem-09',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Haloalkanes and Haloarenes',
    title: 'SN1 vs SN2 Mechanisms, Stereochemistry & Name Reactions',
    formula: "SN2 Mechanism (Bimolecular Nucleophilic Substitution):\n• Single-step concerted mechanism via pentacoordinate transition state\n• Rate = k [R-X] [Nu⁻] (2nd order kinetics)\n• Stereochemistry: 100% Walden Inversion of configuration\n• Reactivity Order: Methyl > 1° > 2° > 3° (Steric hindrance dominates)\n\nSN1 Mechanism (Unimolecular Nucleophilic Substitution):\n• Two-step mechanism via carbocation intermediate\n• Rate = k [R-X] (1st order kinetics)\n• Stereochemistry: Racemization (retention + inversion)\n• Reactivity Order: 3° > 2° > 1° > Methyl (Carbocation stability dominates)\n\nFinkelstein Reaction: R-Cl/Br + NaI (in dry acetone) → R-I + NaCl/NaBr↓\nSwarts Reaction: R-Cl/Br + AgF (or SbF₃, CoF₂, Hg₂F₂) → R-F + AgCl/AgBr↓",
    variables: "R-X = alkyl halide, Nu⁻ = nucleophile (e.g. OH⁻, CN⁻, I⁻). Dry acetone precipitates NaCl/NaBr driving Finkelstein forward (Le Chatelier).",
    examTip: "Aryl halides and vinyl halides are extremely unreactive towards nucleophilic substitution due to: (1) Resonance stabilization imparting partial double-bond character to C-X bond, (2) sp² hybridized carbon with higher electronegativity, (3) Instability of phenyl cation."
  },
  {
    id: 'c12-chem-10',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Alcohols, Phenols and Ethers',
    title: 'Lucas Test, Kolbe Reaction, Reimer-Tiemann & Williamson Synthesis',
    formula: "Lucas Test (conc. HCl + anh. ZnCl₂):\n• 3° Alcohol: Immediate turbidity/cloudiness (within seconds)\n• 2° Alcohol: Turbidity appears in 5 minutes\n• 1° Alcohol: No turbidity at room temperature (appears only upon heating)\n\nKolbe's Reaction: Phenol + NaOH → Sodium Phenoxide --(1. CO₂, 400K, 4-7 atm / 2. H⁺)--> 2-Hydroxybenzoic Acid (Salicylic Acid)\nReimer-Tiemann Reaction: Phenol + CHCl₃ + aq. NaOH → Salicylaldehyde (Electrophile is :CCl₂ Dichlorocarbene)\nWilliamson Ether Synthesis: R-X + R'-O⁻Na⁺ → R-O-R' + NaX",
    variables: "In Williamson Synthesis: The alkyl halide R-X MUST BE PRIMARY (1°). If 3° alkyl halide is used, elimination dominates to give alkene as major product!",
    examTip: "Phenol is more acidic than aliphatic alcohols because the phenoxide ion is stabilized by resonance delocalizing the negative charge over the benzene ring. Electron-withdrawing groups (-NO₂) at ortho/para positions increase the acidity of phenol significantly (Picric acid is 2,4,6-trinitrophenol)."
  },
  {
    id: 'c12-chem-11',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Aldehydes, Ketones & Carboxylic Acids',
    title: 'Named Carbonyl Reactions & Classical Diagnostic Tests',
    formula: "Aldol Condensation: 2 CH₃CHO + dil. NaOH → CH₃-CH(OH)-CH₂-CHO --(Δ, -H₂O)--> CH₃-CH=CH-CHO (But-2-enal) [Requires α-H]\nCannizzaro Reaction: 2 HCHO + conc. NaOH (50%) → CH₃OH + HCOONa [Disproportionation; No α-H]\nClemmensen Reduction: C=O + Zn-Hg / conc. HCl → CH₂ + H₂O\nWolff-Kishner Reduction: C=O + NH₂NH₂ --(KOH / ethylene glycol, Δ)--> CH₂ + N₂\nTollens' Test (Silver Mirror): R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ → R-COO⁻ + 2 Ag↓ (Silver mirror) + 4 NH₃ + 2 H₂O\nFehling's Test: R-CHO + 2 Cu²⁺ + 5 OH⁻ → R-COO⁻ + Cu₂O↓ (Red precipitate) + 3 H₂O\nIodoform Test: Carbonyl with CH₃-C=O or CH₃-CH(OH)- + I₂ + NaOH → CHI₃↓ (Yellow precipitate) + R-COONa\nHell-Volhard-Zelinsky (HVZ): R-CH₂-COOH + X₂ / Red P --(H₂O)--> R-CH(X)-COOH (α-halocarboxylic acid)",
    variables: "Aldol requires α-hydrogens. Cannizzaro occurs ONLY in aldehydes lacking α-hydrogen (e.g. Formaldehyde HCHO, Benzaldehyde C₆H₅CHO).",
    examTip: "Carboxylic acids are stronger acids than phenols because the conjugate carboxylate anion (R-COO⁻) is stabilized by two equivalent resonance structures where the negative charge resides on highly electronegative oxygen atoms."
  },
  {
    id: 'c12-chem-12',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Amines',
    title: "Basicity of Amines, Carbylamine & Hinsberg Test",
    formula: "Hoffmann Bromamide Degradation: R-CONH₂ + Br₂ + 4 NaOH → R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O [Degrades carbon chain by 1 C]\nCarbylamine Test (Isocyanide test): R-NH₂ + CHCl₃ + 3 alc. KOH --(Δ)--> R-NC (Extremely foul smell) + 3 KCl + 3 H₂O [Only 1° amines]\nHinsberg Test (Benzenesulphonyl chloride C₆H₅SO₂Cl):\n• 1° Amine: Forms N-alkylbenzenesulphonamide, SOLUBLE in alkali (due to acidic N-H)\n• 2° Amine: Forms N,N-dialkylbenzenesulphonamide, INSOLUBLE in alkali\n• 3° Amine: Does NOT react with Hinsberg reagent\nBasicity Order in Aqueous Solution:\n• With Methyl group: (CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃  [2° > 1° > 3° > NH₃ (Order 213)]\n• With Ethyl group: (C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃  [2° > 3° > 1° > NH₃ (Order 231)]",
    variables: "Basicity in gas phase follows inductive effect strictly: 3° > 2° > 1° > NH₃. In aqueous phase, steric hindrance and hydration energies alter the sequence.",
    examTip: "Aniline is less basic than aliphatic amines and ammonia because the lone pair of electrons on nitrogen is delocalized into the benzene ring through resonance, making it less available for protonation."
  },
  {
    id: 'c12-chem-13',
    classLevel: '12',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Biomolecules',
    title: 'Carbohydrates, Amino Acids & Nucleic Acids Structure',
    formula: "Carbohydrates: Reducing sugars reduce Tollens' and Fehling's reagents (All monosaccharides: Glucose, Fructose; Disaccharides: Maltose, Lactose. Sucrose is NON-REDUCING).\nAmino Acids (Zwitterion Form): ⁺H₃N-CH(R)-COO⁻ (Amphoteric behaviour)\nIsoelectric Point (pI): pH at which amino acid carries no net electrical charge and does not migrate in an electric field.\nNucleic Acids Composition:\n• Nucleoside = Pentose Sugar + Nitrogenous Base\n• Nucleotide = Pentose Sugar + Nitrogenous Base + Phosphoric Acid (Phosphate)\n• DNA Bases: Adenine (A), Guanine (G), Cytosine (C), Thymine (T) [A = T with 2 H-bonds; G ≡ C with 3 H-bonds]\n• RNA Bases: A, G, C, Uracil (U) [Thymine is replaced by Uracil]",
    variables: "Peptide linkage: -CO-NH- formed between -COOH of one amino acid and -NH₂ of adjacent amino acid with loss of H₂O.",
    examTip: "Denaturation of proteins: Upon heating or pH change, secondary and tertiary structures of proteins are destroyed, but the PRIMARY structure (peptide covalent bonds) remains completely intact. Coagulation of egg white on boiling is irreversible denaturation."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 12: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c12-math-01',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Relations and Functions',
    title: 'Equivalence Relations & Bijective Invertibility',
    formula: "Relations on Set A:\n• Reflexive: (a, a) ∈ R for all a ∈ A\n• Symmetric: If (a, b) ∈ R, then (b, a) ∈ R\n• Transitive: If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R\n• Equivalence Relation: Relation is Reflexive, Symmetric, and Transitive simultaneously.\nFunction Properties:\n• One-One (Injective): f(x₁) = f(x₂)  =>  x₁ = x₂\n• Onto (Surjective): Range of f = Co-domain of f (For every y ∈ Y, there exists x ∈ X such that f(x) = y)\n• Bijective: Function is both One-One and Onto  <=>  f is Invertible (f⁻¹ exists)",
    variables: "Number of relations on set with n elements = 2^(n²). Number of one-one functions from set of n elements to itself = n!.",
    examTip: "To prove a function is NOT one-one, find a counter-example where two different inputs yield the same output (e.g. f(-1) = f(1) = 1 for f(x) = x²). To prove onto, express x in terms of y and verify that x belongs to the domain for all values in co-domain."
  },
  {
    id: 'c12-math-02',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Inverse Trigonometric Functions',
    title: 'Principal Value Branches, Domains & Standard Identities',
    formula: "Principal Value Branches (Ranges):\n• y = sin⁻¹x : Domain [-1, 1] , Range [-π/2, π/2]\n• y = cos⁻¹x : Domain [-1, 1] , Range [0, π]\n• y = tan⁻¹x : Domain R , Range (-π/2, π/2)\n• y = cosec⁻¹x : Domain R - (-1, 1) , Range [-π/2, π/2] - {0}\n• y = sec⁻¹x : Domain R - (-1, 1) , Range [0, π] - {π/2}\n• y = cot⁻¹x : Domain R , Range (0, π)\n\nNegative Angle Identities:\nsin⁻¹(-x) = -sin⁻¹x  ;  tan⁻¹(-x) = -tan⁻¹x  ;  cosec⁻¹(-x) = -cosec⁻¹x\ncos⁻¹(-x) = π - cos⁻¹x  ;  sec⁻¹(-x) = π - sec⁻¹x  ;  cot⁻¹(-x) = π - cot⁻¹x\nComplementary Angle Sums:\nsin⁻¹x + cos⁻¹x = π/2  ;  tan⁻¹x + cot⁻¹x = π/2  ;  sec⁻¹x + cosec⁻¹x = π/2",
    variables: "x must lie within the specified domain for each function. cos⁻¹, sec⁻¹, cot⁻¹ produce outputs in [0, π].",
    examTip: "Common Board trap: sin⁻¹(sin 2π/3) is NOT 2π/3 because 2π/3 falls outside [-π/2, π/2]! Write as sin⁻¹(sin(π - π/3)) = sin⁻¹(sin π/3) = π/3. Similarly, cos⁻¹(cos 7π/6) = cos⁻¹(cos(2π - 5π/6)) = 5π/6."
  },
  {
    id: 'c12-math-03',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Matrices',
    title: 'Symmetric Decomposition, Transpose & Matrix Multiplication',
    formula: "Transpose Properties:\n• (A')' = A  ;  (A + B)' = A' + B'  ;  (kA)' = k A'\n• Reversal Rule: (A B)' = B' · A'\nSymmetric Matrix: A' = A  ;  Skew-Symmetric Matrix: A' = -A\nSymmetric Decomposition of any Square Matrix:\nA = ½ (A + A') [Symmetric] + ½ (A - A') [Skew-Symmetric]\nDiagonal Elements of Skew-Symmetric Matrix: All a_ii = 0",
    variables: "Matrix multiplication AB is defined if and only if number of columns of A equals number of rows of B. In general, AB ≠ BA (Non-commutative).",
    examTip: "All main diagonal elements of a skew-symmetric matrix are always ZERO, because a_ii = -a_ii => 2 a_ii = 0 => a_ii = 0. The determinant of an odd-order skew-symmetric matrix is always zero."
  },
  {
    id: 'c12-math-04',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Determinants',
    title: 'Adjoint Properties, Matrix Inverse & System of Equations',
    formula: "Adjoint Properties (for n × n matrix):\n• A · adj(A) = adj(A) · A = |A| · I_n\n• |adj(A)| = |A|^(n - 1)\n• adj(A B) = adj(B) · adj(A)\n• |adj(adj A)| = |A|^((n - 1)²)\nMatrix Inverse: A⁻¹ = (1 / |A|) · adj(A) [Exists iff |A| ≠ 0, i.e. A is Non-Singular]\nInverse Reversal Rule: (A B)⁻¹ = B⁻¹ · A⁻¹\nSystem of Linear Equations (A X = B):\n• If |A| ≠ 0: Consistent and Unique Solution X = A⁻¹ · B\n• If |A| = 0 and (adj A) · B ≠ 0: Inconsistent, NO SOLUTION\n• If |A| = 0 and (adj A) · B = 0: Dependent, INFINITELY MANY SOLUTIONS or no solution",
    variables: "n = order of matrix (usually n = 3 in Board Exams), I_n = identity matrix of order n, |A| = determinant of matrix A",
    examTip: "Frequent 1-mark question: If A is a 3 × 3 matrix with |A| = 5, then |adj A| = |A|^(3 - 1) = 5² = 25. And |3A| = 3³ · |A| = 27 × 5 = 135 (scalar multiple pulls out as kⁿ |A|)."
  },
  {
    id: 'c12-math-05',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Continuity & Differentiability',
    title: 'Continuity, Differentiability & Mean Value Theorems',
    formula: "Continuity at x = c: lim (x→c⁻) f(x) = lim (x→c⁺) f(x) = f(c)  (LHL = RHL = f(c))\nDifferentiability at x = c: Left Hand Derivative = Right Hand Derivative\nL f'(c) = lim (h→0) [f(c - h) - f(c)] / (-h)  =  R f'(c) = lim (h→0) [f(c + h) - f(c)] / h\nRolle's Theorem: If f(x) is (1) Continuous on [a, b], (2) Differentiable on (a, b), and (3) f(a) = f(b),\nthen there exists at least one c ∈ (a, b) such that f'(c) = 0.\nLagrange's Mean Value Theorem (LMVT): If (1) Continuous on [a, b] and (2) Differentiable on (a, b),\nthen there exists c ∈ (a, b) such that f'(c) = [f(b) - f(a)] / (b - a)",
    variables: "Every differentiable function is continuous, but the converse is NOT necessarily true (e.g. f(x) = |x| is continuous everywhere, but not differentiable at x = 0).",
    examTip: "To check continuity of modulus functions like f(x) = |x - 2|: Split into piecewise function f(x) = -(x - 2) for x < 2 and +(x - 2) for x ≥ 2, then compute LHL and RHL at the junction x = 2."
  },
  {
    id: 'c12-math-06',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Calculus (Differentiation)',
    title: 'Chain Rule, Implicit, Parametric & Logarithmic Derivatives',
    formula: "Chain Rule: d/dx [f(g(x))] = f'(g(x)) · g'(x)\nParametric Derivative: dy/dx = (dy/dt) / (dx/dt)\nSecond Parametric Derivative: d²y/dx² = [d/dt (dy/dx)] / (dx/dt)\nLogarithmic Differentiation: For y = [u(x)]^[v(x)]:\nln y = v(x) · ln[u(x)]  =>  (1/y) dy/dx = v'(x) ln u(x) + [v(x) u'(x)] / u(x)\nStandard Derivatives:\n• d/dx (sin⁻¹x) = 1 / √(1 - x²)  ;  d/dx (cos⁻¹x) = -1 / √(1 - x²)\n• d/dx (tan⁻¹x) = 1 / (1 + x²)  ;  d/dx (cot⁻¹x) = -1 / (1 + x²)\n• d/dx (sec⁻¹x) = 1 / [|x| √(x² - 1)]  ;  d/dx (a^x) = a^x · ln a",
    variables: "u(x), v(x) are differentiable functions. Always take natural logarithms when a variable occurs in the exponent (function raised to function).",
    examTip: "Critical error alert in second-order parametric derivatives: d²y/dx² is NOT equal to (d²y/dt²) / (d²x/dt²)! You must first find dy/dx in terms of t, differentiate with respect to t, and then DIVIDE by dx/dt."
  },
  {
    id: 'c12-math-07',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Applications of Derivatives',
    title: 'Increasing/Decreasing Functions & Maxima/Minima Tests',
    formula: "Increasing / Decreasing on interval I:\n• Strictly Increasing: f'(x) > 0 for all x ∈ I\n• Strictly Decreasing: f'(x) < 0 for all x ∈ I\nCritical Points: Points where f'(x) = 0 or f'(x) does not exist.\nFirst Derivative Test for Maxima / Minima at c:\n• Local Maximum: f'(x) changes sign from POSITIVE to NEGATIVE as x passes through c\n• Local Minimum: f'(x) changes sign from NEGATIVE to POSITIVE as x passes through c\nSecond Derivative Test:\n• If f'(c) = 0 and f''(c) < 0  =>  Local Maximum at x = c\n• If f'(c) = 0 and f''(c) > 0  =>  Local Minimum at x = c\n• If f''(c) = 0: Test fails, revert to First Derivative Test",
    variables: "f''(x) = d²f/dx² (second derivative). For Absolute Maxima/Minima on closed interval [a, b], evaluate f(x) at critical points AND at endpoints a and b.",
    examTip: "In optimization word problems (e.g. cylinder inscribed in cone or sphere): Express the quantity to be maximized/minimized as a function of ONE single variable, find critical point by setting dV/dr = 0, and MANDATORILY calculate d²V/dr² < 0 to prove maximum."
  },
  {
    id: 'c12-math-08',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Integrals',
    title: 'Standard Indefinite Integrals & Integration by Parts',
    formula: "Integration by Parts: ∫ u · v dx = u ∫ v dx - ∫ [u' · (∫ v dx)] dx\nILATE Priority: Inverse Trig > Logarithmic > Algebraic > Trigonometric > Exponential\nSpecial Integral: ∫ e^x [f(x) + f'(x)] dx = e^x · f(x) + C\nNine Fundamental Special Integrals:\n1) ∫ dx / (x² - a²) = [1 / (2a)] · ln |(x - a) / (x + a)| + C\n2) ∫ dx / (a² - x²) = [1 / (2a)] · ln |(a + x) / (a - x)| + C\n3) ∫ dx / (x² + a²) = (1 / a) · tan⁻¹(x / a) + C\n4) ∫ dx / √(x² - a²) = ln |x + √(x² - a²)| + C\n5) ∫ dx / √(x² + a²) = ln |x + √(x² + a²)| + C\n6) ∫ dx / √(a² - x²) = sin⁻¹(x / a) + C\n7) ∫ √(a² - x²) dx = (x/2) √(a² - x²) + (a²/2) · sin⁻¹(x/a) + C\n8) ∫ √(x² + a²) dx = (x/2) √(x² + a²) + (a²/2) · ln |x + √(x² + a²)| + C\n9) ∫ √(x² - a²) dx = (x/2) √(x² - a²) - (a²/2) · ln |x + √(x² - a²)| + C",
    variables: "C = constant of integration. For expressions of type ∫ dx / (a x² + b x + c), complete the square in denominator.",
    examTip: "Always check for the e^x [f(x) + f'(x)] pattern! For example: ∫ e^x [(1 + sin x) / (1 + cos x)] dx = ∫ e^x [½ sec²(x/2) + tan(x/2)] dx = e^x · tan(x/2) + C directly in 1 step."
  },
  {
    id: 'c12-math-09',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Definite Integrals',
    title: "King's Property & Fundamental Definite Properties",
    formula: "Property 1: ∫[a to b] f(x) dx = ∫[a to b] f(t) dt (Change of dummy variable)\nProperty 2: ∫[a to b] f(x) dx = - ∫[b to a] f(x) dx\nProperty 3: ∫[a to b] f(x) dx = ∫[a to c] f(x) dx + ∫[c to b] f(x) dx\nProperty 4 (King's Property): ∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx\nSpecial Case of King's: ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx\nProperty 5 (Even / Odd): ∫[-a to a] f(x) dx = 2 ∫[0 to a] f(x) dx (if f(-x) = f(x), even) ; = 0 (if f(-x) = -f(x), odd)\nProperty 6: ∫[0 to 2a] f(x) dx = 2 ∫[0 to a] f(x) dx (if f(2a - x) = f(x)) ; = 0 (if f(2a - x) = -f(x))",
    variables: "a, b = integration limits. King's Property is designated as P4 in standard NCERT textbook numbering.",
    examTip: "King's Property solves nearly all definite integral questions in Board Exams! Set I = ∫[0 to π/2] [√sin x / (√sin x + √cos x)] dx. Apply P4 to get I = ∫[0 to π/2] [√cos x / (√cos x + √sin x)] dx. Add the two equations: 2I = ∫[0 to π/2] 1 dx = π/2 => I = π/4."
  },
  {
    id: 'c12-math-10',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Applications of Integrals',
    title: 'Area Bounded by Curves, Parabolas and Lines',
    formula: "Area under Curve y = f(x) between x = a and x = b: Area = ∫[a to b] |y| dx = ∫[a to b] |f(x)| dx\nArea along y-axis between y = c and y = d: Area = ∫[c to d] |x| dy = ∫[c to d] |g(y)| dy\nArea between Two Curves y = f(x) and y = g(x):\nArea = ∫[a to b] [f(x) - g(x)] dx  (where f(x) ≥ g(x))\nStandard Enclosed Areas:\n• Area of Circle x² + y² = a² : Area = π a² = 4 ∫[0 to a] √(a² - x²) dx\n• Area of Ellipse x²/a² + y²/b² = 1 : Area = π a b\n• Area between Parabola y² = 4ax and Line y = mx : Area = (8/3) · (a² / m³)\n• Area between Two Parabolas y² = 4ax and x² = 4by : Area = (16 / 3) · a b",
    variables: "a, b = x-coordinates of points of intersection found by solving equations simultaneously. Area is always positive (+).",
    examTip: "Always draw a rough sketch showing intersection points and shade the required region clearly. If the curve crosses the x-axis, integrate parts above and below the axis separately to prevent areas with opposite signs cancelling each other out!"
  },
  {
    id: 'c12-math-11',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Differential Equations',
    title: 'Order, Degree, Homogeneous & Linear Equations',
    formula: "Order: Highest derivative occurring in the equation.\nDegree: Highest exponent of highest-order derivative (after making it polynomial in derivatives).\nVariable Separable: f(x) dx + g(y) dy = 0  =>  ∫ f(x) dx + ∫ g(y) dy = C\nHomogeneous Equation: dy/dx = F(y / x)\n• Substitution: Put y = v · x  =>  dy/dx = v + x (dv/dx)\nLinear Differential Equation (Type 1):\ndy/dx + P(x) · y = Q(x)\n• Integrating Factor: I.F. = e^(∫ P(x) dx)\n• General Solution: y · (I.F.) = ∫ [Q(x) · (I.F.)] dx + C\nLinear Differential Equation (Type 2):\ndx/dy + P(y) · x = Q(y)  =>  I.F. = e^(∫ P(y) dy)  =>  x · (I.F.) = ∫ [Q(y) · (I.F.)] dy + C",
    variables: "P(x), Q(x) must be functions of x only or constants. Degree is NOT defined if derivatives occur within transcendental functions like sin(dy/dx) or e^(dy/dx).",
    examTip: "Remember the logarithmic exponential simplification: e^(ln f(x)) = f(x). For instance, e^(∫ 3/x dx) = e^(3 ln x) = e^(ln x³) = x³. Do not omit the integration constant C on the RHS."
  },
  {
    id: 'c12-math-12',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Vectors',
    title: 'Dot Product, Cross Product & Projection of Vectors',
    formula: "Magnitude: |a| = √(a₁² + a₂² + a₃²)\nUnit Vector: â = a / |a|\nDot (Scalar) Product: a · b = |a| |b| cosθ = a₁b₁ + a₂b₂ + a₃b₃\n• Perpendicular Condition: a · b = 0 (for non-zero vectors)\n• Projection of a on b: Proj = (a · b) / |b|\n• Projection Vector of a along b: Proj_vec = [(a · b) / |b|²] · b\nCross (Vector) Product: a × b = |a| |b| sinθ n̂\n• Matrix Form: a × b = | i    j    k   |\n                       | a₁   a₂   a₃  |\n                       | b₁   b₂   b₃  |\n• Parallel Condition: a × b = 0  <=>  a₁/b₁ = a₂/b₂ = a₃/b₃\n• Area of Triangle: ½ |a × b|\n• Area of Parallelogram with sides a, b: |a × b|\n• Area of Parallelogram with diagonals d₁, d₂: ½ |d₁ × d₂|",
    variables: "θ = angle between vectors (0 ≤ θ ≤ π). Dot product is commutative (a·b = b·a); cross product is anti-commutative (a×b = -b×a).",
    examTip: "To find angle θ between two vectors: cosθ = (a · b) / (|a| |b|). For unit vectors: i·i = j·j = k·k = 1, and i·j = j·k = k·i = 0. Cross product: i × j = k, j × k = i, k × i = j."
  },
  {
    id: 'c12-math-13',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Three-Dimensional Geometry',
    title: 'Direction Cosines, Lines & Shortest Distance between Skew Lines',
    formula: "Direction Cosines (l, m, n): l = cosα , m = cosβ , n = cosγ  =>  l² + m² + n² = 1\nRelation with Direction Ratios (a, b, c): l = a / √(a² + b² + c²)\nVector Equation of Line passing through a with direction b: r = a + λ b\nCartesian Form: (x - x₁) / a = (y - y₁) / b = (z - z₁) / c\nLine through Two Points a and b: r = a + λ (b - a)\nAngle between Two Lines: cosθ = |a₁a₂ + b₁b₂ + c₁c₂| / [√(a₁²+b₁²+c₁²) · √(a₂²+b₂²+c₂²)]\nShortest Distance between Two Skew Lines (r = a₁ + λ b₁ and r = a₂ + μ b₂):\nd = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|\nDistance between Two Parallel Lines (r = a₁ + λ b and r = a₂ + μ b):\nd = |b × (a₂ - a₁)| / |b|",
    variables: "Skew lines are non-parallel, non-intersecting lines in three-dimensional space. If shortest distance d = 0, the two lines are COPLANAR and intersect.",
    examTip: "Before extracting direction ratios (a, b, c) from a Cartesian line, verify the coefficients of x, y, and z are strictly +1! If given (2 - x)/3 = (2y + 1)/4, convert to: (x - 2)/(-3) = (y + ½)/2."
  },
  {
    id: 'c12-math-14',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Linear Programming',
    title: 'Corner Point Method, Feasible Region & Bounded Solutions',
    formula: "Objective Function: Maximize or Minimize Z = a x + b y\nConstraints: Linear inequalities in x and y (e.g. a₁x + b₁y ≤ c₁, x ≥ 0, y ≥ 0)\nCorner Point Method:\n1) Determine the mathematical Feasible Region (solution set satisfying all constraints).\n2) Determine coordinates of all Corner Points (Vertices) of the feasible region.\n3) Evaluate objective function Z at each corner point.\n4) Let M and m be the maximum and minimum values.\n• If Feasible Region is BOUNDED: M and m are guaranteed optimal solutions.\n• If Feasible Region is UNBOUNDED:\n  - M is max iff open half-plane a x + b y > M has NO POINT in common with feasible region.\n  - m is min iff open half-plane a x + b y < m has NO POINT in common with feasible region.",
    variables: "x ≥ 0, y ≥ 0 are non-negative constraints restricting the feasible region to the First Quadrant.",
    examTip: "If two corner points produce the exact same optimal maximum value of Z, then EVERY point on the line segment joining those two corner points also yields the same optimal maximum value (Infinitely many optimal solutions)."
  },
  {
    id: 'c12-math-15',
    classLevel: '12',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Probability',
    title: "Conditional Probability, Bayes' Theorem & Random Variables",
    formula: "Conditional Probability: P(A | B) = P(A ∩ B) / P(B) [for P(B) ≠ 0]\nMultiplication Theorem: P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)\nIndependent Events Condition: P(A ∩ B) = P(A) · P(B)  <=>  P(A | B) = P(A)\nTheorem of Total Probability: P(A) = Σ [P(E_i) · P(A | E_i)]\nBayes' Theorem: P(E_i | A) = [P(E_i) · P(A | E_i)] / [Σ P(E_j) · P(A | E_j)]\nProbability Distribution of Random Variable X:\n• Σ P(X = x_i) = 1 (Sum of all probabilities equals 1)\n• Mean (Expected Value): μ = E(X) = Σ x_i · P(x_i)\n• Variance: Var(X) = σ² = E(X²) - [E(X)]² = Σ x_i² P(x_i) - (Σ x_i P(x_i))²",
    variables: "E₁, E₂... E_n form a partition of the sample space S (mutually exclusive and exhaustive events, Σ P(E_i) = 1). P(A) is an observed event that has already occurred.",
    examTip: "Bayes' Theorem is tested as a mandatory 5-mark question in Section D. Identify: (1) Hypothesis events E₁, E₂ (e.g. choosing Bag I or Bag II), (2) The observed event A that has already occurred (e.g. ball drawn is red), and write out Bayes' formula explicitly before substituting numerical probabilities."
  }
];
