import type { FormulaItem } from './class12_stem';

export const CLASS_11_STEM_FORMULAS: FormulaItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: PHYSICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-phy-01',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Units and Measurements',
    title: 'Dimensional Analysis, Error Propagation & Significant Figures',
    formula: "Relative Error: ΔA / A\nPercentage Error: % Error = (ΔA / A) × 100%\nSum/Difference Error: Z = A ± B => ΔZ = ΔA + ΔB (absolute errors add)\nProduct/Quotient Error: Z = A · B or A / B => ΔZ / Z = (ΔA / A) + (ΔB / B)\nPower Error: Z = A^p · B^q / C^r => ΔZ / Z = p(ΔA / A) + q(ΔB / B) + r(ΔC / C)",
    variables: "A, B, C = measured physical quantities; ΔA, ΔB, ΔC = absolute errors; p, q, r = power exponents",
    examTip: "In percentage error calculations involving powers, powers are always multiplied as positive coefficients, even if the quantity appears in the denominator. Absolute errors always add up; they never subtract."
  },
  {
    id: 'c11-phy-02',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Kinematics (Straight Line)',
    title: 'Kinematic Equations of Uniformly Accelerated Rectilinear Motion',
    formula: "1) v = u + at\n2) s = u t + ½ a t²\n3) v² = u² + 2 a s\n4) Displacement in nth second: s_nth = u + ½ a (2n - 1)\nAverage Velocity (constant acceleration): v_avg = (u + v) / 2",
    variables: "u = initial velocity (m/s), v = final velocity (m/s), a = uniform acceleration (m/s²), t = time interval (s), s = rectilinear displacement (m)",
    examTip: "Always fix a coordinate convention (e.g., upward positive, downward negative). For vertical motion under gravity, a = -g (-9.8 m/s²). At maximum vertical height, instantaneous velocity v = 0."
  },
  {
    id: 'c11-phy-03',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Kinematics (Plane & Vectors)',
    title: 'Vector Algebra: Dot Product, Cross Product & Resultant',
    formula: "Magnitude of Resultant: R = √(A² + B² + 2AB cosθ)\nDirection of Resultant: tanα = (B sinθ) / (A + B cosθ)\nScalar (Dot) Product: A · B = |A| |B| cosθ = A_x B_x + A_y B_y + A_z B_z\nVector (Cross) Product: A × B = (|A| |B| sinθ) n̂ = det([î, ĵ, k̂], [A_x, A_y, A_z], [B_x, B_y, B_z])",
    variables: "A, B = vectors; θ = angle between vectors; α = angle of resultant with vector A; n̂ = unit normal vector from right-hand rule",
    examTip: "Two non-zero vectors are perpendicular if and only if A · B = 0. Two non-zero vectors are parallel or antiparallel if and only if A × B = 0."
  },
  {
    id: 'c11-phy-04',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Kinematics (Motion in a Plane)',
    title: 'Projectile Motion on Horizontal Plane',
    formula: "Time of Flight: T = (2 u sinθ) / g\nMaximum Height: H_max = (u² sin²θ) / (2g)\nHorizontal Range: R = (u² sin2θ) / g\nEquation of Trajectory: y = x tanθ - [g / (2 u² cos²θ)] x²",
    variables: "u = initial projection velocity (m/s), θ = angle of projection with horizontal, g = acceleration due to gravity (9.8 m/s²)",
    examTip: "Maximum horizontal range occurs at θ = 45° where R_max = u² / g. Complementary angles of projection (θ and 90° - θ) yield identical horizontal ranges, but different flight times and maximum heights."
  },
  {
    id: 'c11-phy-05',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Laws of Motion',
    title: "Newton's Second Law, Impulse & Momentum Conservation",
    formula: "Net Force: F_net = dp/dt = m · a (for constant mass)\nLinear Momentum: p = m · v\nImpulse: J = ∫ F dt = F_avg · Δt = Δp = m(v - u)\nConservation of Linear Momentum: If F_ext = 0, then p_total = constant => m₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂",
    variables: "m = mass (kg), v = velocity (m/s), p = linear momentum (kg·m/s), J = impulse (N·s), F_avg = average impact force (N)",
    examTip: "Impulse equals the area under the Force-Time (F-t) graph. To reduce impact force during collision or catching a ball, increasing the interaction time Δt proportionally reduces the average force F."
  },
  {
    id: 'c11-phy-06',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Laws of Motion & Friction',
    title: 'Static Friction, Kinetic Friction & Circular Banking of Roads',
    formula: "Static Friction: f_s ≤ f_s,max = μ_s · N\nKinetic Friction: f_k = μ_k · N (μ_k < μ_s)\nLevel Curved Road Maximum Speed: v_max = √(μ_s · R · g)\nBanked Road Optimum Speed (zero friction): v₀ = √(R · g · tanθ)\nBanked Road Maximum Safe Speed: v_max = √[R · g · (μ_s + tanθ) / (1 - μ_s tanθ)]",
    variables: "μ_s = coefficient of static friction, μ_k = coefficient of kinetic friction, N = normal contact reaction (N), R = curve radius (m), θ = banking angle",
    examTip: "Static friction is self-adjusting in magnitude and direction; it exactly matches the applied tangential force up to the threshold μ_s N. Angle of friction λ satisfies tanλ = μ_s and equals the angle of repose."
  },
  {
    id: 'c11-phy-07',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Work, Energy and Power',
    title: 'Work-Energy Theorem, Conservative Forces & Elastic Potential Energy',
    formula: "Work Done: W = F · s = F s cosθ = ∫ F dx\nWork-Energy Theorem: W_net = ΔK = ½ m v² - ½ m u²\nSpring Potential Energy: U_s = ½ k x²\nInstantaneous Power: P = dW/dt = F · v = F v cosθ\nConservative Force Relation: F = -dU/dx",
    variables: "W = work (Joules, J), K = kinetic energy (J), k = spring force constant (N/m), x = elongation or compression (m), P = power (Watts, W)",
    examTip: "Work done by a conservative force along any closed path is strictly zero: ∮ F_cons · dr = 0. Work done by friction is non-conservative and always negative for sliding contact."
  },
  {
    id: 'c11-phy-08',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Work, Energy and Power',
    title: '1D Elastic and Inelastic Collisions & Coefficient of Restitution',
    formula: "Coefficient of Restitution: e = (v₂ - v₁) / (u₁ - u₂)\n1D Perfectly Elastic Collision (e = 1):\nv₁ = [(m₁ - m₂) / (m₁ + m₂)] u₁ + [2 m₂ / (m₁ + m₂)] u₂\nv₂ = [2 m₁ / (m₁ + m₂)] u₁ + [(m₂ - m₁) / (m₁ + m₂)] u₂\nLoss of Kinetic Energy in Inelastic Collision: ΔK = ½ [m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)² (1 - e²)",
    variables: "m₁, m₂ = colliding masses (kg); u₁, u₂ = initial velocities; v₁, v₂ = post-collision velocities; e = restitution coefficient (0 ≤ e ≤ 1)",
    examTip: "For two identical masses (m₁ = m₂) undergoing a 1D head-on elastic collision (e = 1), the bodies completely exchange their velocities: v₁ = u₂ and v₂ = u₁."
  },
  {
    id: 'c11-phy-09',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'System of Particles & Rotational Motion',
    title: 'Centre of Mass & Discrete/Continuous Coordinates',
    formula: "Discrete Particles: R_cm = (Σ m_i r_i) / (Σ m_i) = (m₁ r₁ + m₂ r₂ + ...) / M\nContinuous Body: R_cm = (1/M) ∫ r dm\nVelocity of CM: V_cm = (Σ m_i v_i) / M = P_total / M\nNewton's Law for System: F_ext,net = M · A_cm = dP_total / dt",
    variables: "m_i = individual particle mass, r_i = position vector of particle i, M = total mass of system, F_ext,net = net external force",
    examTip: "Internal forces cancel in pairs by Newton's Third Law and can never shift the centre of mass of an isolated system. If F_ext = 0, the velocity of the centre of mass remains constant."
  },
  {
    id: 'c11-phy-10',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'System of Particles & Rotational Motion',
    title: 'Torque, Angular Momentum & Rotational Dynamics',
    formula: "Torque: τ = r × F = I · α\nAngular Momentum: L = r × p = I · ω\nRotational Kinetic Energy: K_rot = ½ I ω²\nWork-Energy Theorem in Rotation: W = ∫ τ dθ = ΔK_rot = ½ I ω₂² - ½ I ω₁²\nConservation of Angular Momentum: If τ_ext = 0 => I₁ ω₁ = I₂ ω₂ = constant",
    variables: "τ = torque (N·m), r = position vector from rotation axis (m), I = moment of inertia (kg·m²), α = angular acceleration (rad/s²), ω = angular velocity (rad/s)",
    examTip: "When a spinning skater draws arms inward, moment of inertia I decreases, so angular velocity ω increases proportionally to conserve L = Iω. However, rotational KE (L² / 2I) increases due to internal work done by muscular contraction."
  },
  {
    id: 'c11-phy-11',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'System of Particles & Rotational Motion',
    title: 'Moments of Inertia & Parallel/Perpendicular Axes Theorems',
    formula: "Parallel Axis Theorem: I = I_cm + M d²\nPerpendicular Axis Theorem (laminar bodies in xy plane): I_z = I_x + I_y\nRing (central axis): I = M R² ; Ring (diameter): I = ½ M R²\nDisc (central axis): I = ½ M R² ; Disc (diameter): I = ¼ M R²\nSolid Cylinder (central axis): I = ½ M R²\nSolid Sphere (diameter): I = ⅖ M R²\nHollow Sphere (diameter): I = ⅔ M R²\nThin Rod (length L, perpendicular through centre): I = (1/12) M L²",
    variables: "M = mass of body (kg), R = radius (m), d = perpendicular distance between parallel axes (m), L = rod length (m)",
    examTip: "The perpendicular axis theorem applies strictly to planar (two-dimensional) laminar objects. Never apply it to three-dimensional bodies such as spheres or solid cylinders."
  },
  {
    id: 'c11-phy-12',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Gravitation',
    title: "Newton's Law of Gravitation & Acceleration Due to Gravity Variation",
    formula: "Gravitational Force: F = G · (M m) / r²\nSurface Gravity: g₀ = G M / R²\nVariation with Height: g_h = g₀ / [1 + (h / R)]² ≈ g₀ (1 - 2h / R) [for h << R]\nVariation with Depth: g_d = g₀ (1 - d / R)\nVariation with Latitude (Earth rotation): g_λ = g₀ - ω² R cos²λ",
    variables: "G = 6.674 × 10⁻¹¹ N·m²/kg², M = Earth mass (5.97 × 10²⁴ kg), R = Earth radius (6400 km), h = altitude, d = depth, λ = latitude angle",
    examTip: "At the exact centre of the Earth (d = R), acceleration due to gravity is zero (g_centre = 0). The value of g is maximum at the poles (where λ = 90°, cosλ = 0) and minimum at the equator."
  },
  {
    id: 'c11-phy-13',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Gravitation',
    title: "Gravitational Potential, Escape Velocity & Orbital Motion",
    formula: "Gravitational Potential: V(r) = -G M / r\nGravitational Potential Energy: U(r) = -G M m / r\nEscape Velocity: v_e = √(2 g R) = √(2 G M / R) ≈ 11.2 km/s (on Earth surface)\nOrbital Velocity (radius r = R + h): v_o = √(G M / r) = √(g R² / r)\nRelation on surface: v_e = √2 · v_o\nKepler's Third Law: T² = [4π² / (G M)] · r³ => T² ∝ r³",
    variables: "v_e = escape speed (m/s), v_o = circular orbital speed (m/s), T = orbital period (s), r = orbit radius measured from Earth center",
    examTip: "Escape velocity is independent of the mass of the escaping body and independent of the launch direction (provided the path does not intersect Earth)."
  },
  {
    id: 'c11-phy-14',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Mechanical Properties of Solids',
    title: "Hooke's Law, Moduli of Elasticity & Elastic Energy Density",
    formula: "Hooke's Law: Stress = Modulus × Strain\nYoung's Modulus: Y = (F / A) / (ΔL / L) = (F · L) / (A · ΔL)\nShear Modulus: G = (F / A) / θ\nBulk Modulus: B = -ΔP / (ΔV / V)\nCompressibility: K = 1 / B\nElastic Potential Energy per unit Volume: u = ½ × Stress × Strain = ½ Y (Strain)²",
    variables: "F = applied deforming force (N), A = cross-sectional area (m²), ΔL/L = longitudinal strain, ΔP = hydraulic pressure increase, θ = shear angle (rad)",
    examTip: "Steel is more elastic than rubber because for a given tensile deforming stress, steel undergoes much smaller strain, resulting in a higher Young's modulus (Y_steel > Y_rubber)."
  },
  {
    id: 'c11-phy-15',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Mechanical Properties of Fluids',
    title: "Pascal's Law, Hydrostatic Pressure & Archimedes' Principle",
    formula: "Hydrostatic Pressure: P = P₀ + ρ g h\nGauge Pressure: P_gauge = P - P₀ = ρ g h\nPascal's Hydraulic Lift: F₁ / A₁ = F₂ / A₂ => F₂ = F₁ (A₂ / A₁)\nBuoyant Force (Archimedes): F_b = V_displaced · ρ_fluid · g\nCondition of Flotation: Weight of Body = Buoyant Force => V_sub / V_total = ρ_body / ρ_fluid",
    variables: "P₀ = atmospheric pressure (1.013 × 10⁵ Pa), ρ = fluid density (kg/m³), h = fluid column depth (m), V_sub = submerged volume (m³)",
    examTip: "Hydrostatic pressure at a given depth is isotropic (same in all directions) and depends solely on vertical depth h, not on container cross-section or shape (hydrostatic paradox)."
  },
  {
    id: 'c11-phy-16',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Mechanical Properties of Fluids',
    title: "Bernoulli's Equation, Continuity & Poiseuille's / Stokes' Laws",
    formula: "Equation of Continuity: A₁ v₁ = A₂ v₂ = constant (Volume flow rate Q)\nBernoulli's Principle: P + ½ ρ v² + ρ g h = constant\nTorricelli's Efflux Velocity: v = √(2 g h)\nViscous Drag (Stokes' Law): F_v = 6 π η r v\nTerminal Velocity: v_t = [2 r² (ρ_solid - ρ_fluid) g] / (9 η)\nPoiseuille Flow Rate: Q = (π ΔP r⁴) / (8 η L)",
    variables: "η = dynamic viscosity (Pa·s), r = sphere radius (m), v_t = steady terminal descent velocity (m/s), L = tube length (m)",
    examTip: "Poiseuille's formula features radius to the 4th power: Q ∝ r⁴. Reducing vessel radius by 50% reduces volumetric flow rate by a factor of 2⁴ = 16 times at equal pressure difference."
  },
  {
    id: 'c11-phy-17',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Mechanical Properties of Fluids',
    title: 'Surface Tension, Excess Pressure & Capillary Rise',
    formula: "Surface Tension: S = F / L = Work done / ΔArea\nExcess Pressure in Liquid Drop: ΔP = 2 S / R\nExcess Pressure in Soap Bubble (2 surfaces): ΔP = 4 S / R\nAscent in Capillary Tube: h = (2 S cosθ) / (r ρ g)",
    variables: "S = surface tension (N/m or J/m²), R = radius of drop/bubble (m), r = capillary tube radius (m), θ = contact angle (rad or deg)",
    examTip: "A soap bubble has two liquid-gas interfaces (outer and inner), giving twice the excess pressure of a single-surface liquid droplet of identical radius: ΔP_bubble = 4S/R."
  },
  {
    id: 'c11-phy-18',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Thermal Properties & Thermodynamics',
    title: 'Thermal Expansion, Specific Heat & Latent Heat',
    formula: "Linear Expansion: ΔL = L₀ α ΔT\nAreal Expansion: ΔA = A₀ β ΔT (β = 2α)\nVolumetric Expansion: ΔV = V₀ γ ΔT (γ = 3α)\nHeat Transfer: Q = m c ΔT = n C ΔT\nLatent Heat Phase Transition: Q = m L_f (fusion) or m L_v (vaporization)\nMolar Specific Heats Relation (Mayer's Formula): C_p - C_v = R",
    variables: "α, β, γ = coefficients of thermal expansion (K⁻¹), c = specific heat capacity (J/(kg·K)), L = latent heat (J/kg), R = universal gas constant (8.314 J/(mol·K))",
    examTip: "Water shows anomalous expansion between 0 °C and 4 °C: density increases and peaks at 4 °C (1000 kg/m³), meaning γ is negative in the 0 °C to 4 °C window."
  },
  {
    id: 'c11-phy-19',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Thermal Properties & Heat Transfer',
    title: "Fourier Conduction, Stefan-Boltzmann Law & Newton's Law of Cooling",
    formula: "Thermal Conduction Rate: H = dQ/dt = [K A (T₁ - T₂)] / L\nStefan-Boltzmann Law: P = e σ A T⁴ (Net radiation: P_net = e σ A (T⁴ - T₀⁴))\nWien's Displacement Law: λ_max · T = b = 2.898 × 10⁻³ m·K\nNewton's Law of Cooling: dT/dt = -k (T - T₀)\nIntegrated Cooling Form: ln[(T₁ - T₀) / (T₂ - T₀)] = k t",
    variables: "K = thermal conductivity (W/(m·K)), σ = 5.670 × 10⁻⁸ W/(m²·K⁴), e = emissivity (0 ≤ e ≤ 1), b = Wien's constant, T₀ = surrounding temperature (K)",
    examTip: "Newton's law of cooling is an approximation valid exclusively for small temperature differences (T - T₀ << T₀) above ambient surroundings."
  },
  {
    id: 'c11-phy-20',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Thermodynamics',
    title: 'First Law of Thermodynamics & Thermodynamic Processes',
    formula: "First Law: ΔQ = ΔU + W\nInternal Energy (Ideal Gas): ΔU = n C_v ΔT\nWork in Isobaric (P = const): W = P ΔV = n R ΔT\nWork in Isothermal (T = const): W = n R T ln(V₂ / V₁) = 2.303 n R T log₁₀(V₂ / V₁)\nWork in Adiabatic (Q = 0): W = (P₁ V₁ - P₂ V₂) / (γ - 1) = n R (T₁ - T₂) / (γ - 1)\nWork in Isochoric (V = const): W = 0 => ΔQ = ΔU",
    variables: "ΔQ = heat added to system, ΔU = internal energy change, W = work done by system (P dV), γ = adiabatic index C_p / C_v",
    examTip: "In cyclic thermodynamic processes, initial and final internal states coincide, making net ΔU_cycle = 0, so net heat absorbed equals net work done (Q_net = W_net = area enclosed on P-V diagram)."
  },
  {
    id: 'c11-phy-21',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Kinetic Theory of Gases',
    title: 'Kinetic Pressure, Molecular Speeds & Equipartition of Energy',
    formula: "Kinetic Gas Pressure: P = ⅓ ρ v_rms² = ⅓ (M / V) v_rms²\nAverage Kinetic Energy per Mole: E_mol = 3/2 R T\nAverage Kinetic Energy per Molecule: E_molecule = 3/2 k_B T\nRoot Mean Square Speed: v_rms = √(3 R T / M_m) = √(3 k_B T / m)\nAverage Speed: v_avg = √(8 R T / (π M_m))\nMost Probable Speed: v_mp = √(2 R T / M_m)\nRelation: v_rms > v_avg > v_mp (ratio: √3 : √(8/π) : √2 ≈ 1.732 : 1.596 : 1.414)",
    variables: "k_B = Boltzmann constant (1.38 × 10⁻²³ J/K), M_m = molar mass (kg/mol), m = mass of single molecule (kg), T = absolute temperature (K)",
    examTip: "Internal energy of an ideal gas depends solely on absolute temperature T, independent of pressure or volume: U = (f/2) n R T, where f is translational plus rotational degrees of freedom."
  },
  {
    id: 'c11-phy-22',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Oscillations',
    title: 'Simple Harmonic Motion (SHM) Kinematics & Energy',
    formula: "Displacement: x(t) = A sin(ω t + φ)\nVelocity: v(t) = dx/dt = A ω cos(ω t + φ) = ± ω √(A² - x²)\nAcceleration: a(t) = d²x/dt² = -ω² x\nKinetic Energy: K = ½ m v² = ½ m ω² (A² - x²)\nPotential Energy: U = ½ k x² = ½ m ω² x²\nTotal Mechanical Energy: E_total = K + U = ½ m ω² A² = constant",
    variables: "A = amplitude (m), ω = angular frequency = 2π f = 2π / T (rad/s), φ = initial phase constant (rad), x = displacement from equilibrium (m)",
    examTip: "At mean position (x = 0): velocity is maximum (v_max = ωA), acceleration is zero, PE is zero, KE is maximum. At extreme positions (x = ±A): velocity is zero, acceleration is maximum (a_max = ω²A), PE is maximum."
  },
  {
    id: 'c11-phy-23',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Oscillations',
    title: 'Periods of Spring-Mass System & Simple Pendulum',
    formula: "Simple Pendulum: T = 2π √(L / g)\nSpring-Mass System: T = 2π √(m / k)\nSprings in Series: 1 / k_eq = 1 / k₁ + 1 / k₂ => T = 2π √[m (k₁ + k₂) / (k₁ k₂)]\nSprings in Parallel: k_eq = k₁ + k₂ => T = 2π √[m / (k₁ + k₂)]\nTorsional Pendulum: T = 2π √(I / C)",
    variables: "L = length of pendulum (m), g = local acceleration due to gravity (m/s²), k = spring constant (N/m), m = oscillating mass (kg), C = torsional rigidity",
    examTip: "The period of a simple pendulum is independent of the bob mass and amplitude (for small oscillations θ < 10°). In an artificial satellite in free fall (g_eff = 0), pendulum period becomes infinite (T = ∞, bob does not oscillate)."
  },
  {
    id: 'c11-phy-24',
    classLevel: '11',
    subjectId: 'phy',
    subjectName: 'Physics',
    domain: 'Waves & Acoustics',
    title: 'Wave Velocity, Standing Waves & Organ Pipes',
    formula: "Transverse Wave on Stretched String: v = √(T_string / μ)\nLongitudinal Wave in Fluid: v = √(B / ρ)\nNewton-Laplace Sound Speed in Gas: v = √(γ P / ρ) = √(γ R T / M_m)\nOpen Organ Pipe Harmonics: f_n = n · [v / (2 L)] (n = 1, 2, 3... all harmonics present)\nClosed Organ Pipe Harmonics: f_m = m · [v / (4 L)] (m = 1, 3, 5... only odd harmonics present)\nBeat Frequency: f_beat = |f₁ - f₂|",
    variables: "T_string = string tension (N), μ = linear mass density (kg/m), B = bulk modulus, γ = adiabatic index (1.4 for air), L = acoustic tube length (m)",
    examTip: "A closed organ pipe produces only odd harmonics, making the fundamental tone deeper (f₁ = v/4L) and its acoustic timbre distinct from an open pipe of the same length (f₁ = v/2L)."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: CHEMISTRY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-chem-01',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Some Basic Concepts of Chemistry',
    title: 'Mole Concept, Molar Mass & Stoichiometric Relations',
    formula: "Number of Moles: n = Mass (g) / Molar Mass (g/mol) = N / N_A = V_STP / 22.7 L\nAvogadro's Number: N_A = 6.022 × 10²³ mol⁻¹\nMolarity (M): M = Moles of solute / Volume of solution in Litres\nMolality (m): m = Moles of solute / Mass of solvent in Kilograms\nMole Fraction: χ_A = n_A / (n_A + n_B) [χ_A + χ_B = 1]\nMass Percentage: % (w/w) = [Mass of solute / Mass of solution] × 100%",
    variables: "n = moles, N = particle count, V_STP = gas volume at STP (Standard: 1 bar, 273.15 K => 22.7 L/mol; IUPAC standard; older convention 1 atm => 22.4 L/mol)",
    examTip: "Molality (m) and mole fraction (χ) are temperature-independent because mass does not expand with temperature. Molarity (M) decreases as temperature rises due to solution volume thermal expansion."
  },
  {
    id: 'c11-chem-02',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Structure of Atom',
    title: "Bohr Model, Rydberg Equation & de Broglie Wavelength",
    formula: "Bohr Angular Momentum: m v r = n h / (2π) (n = 1, 2, 3...)\nBohr Orbit Radius: r_n = 0.529 · (n² / Z) Å = 52.9 · (n² / Z) pm\nBohr Energy Level: E_n = -13.6 · (Z² / n²) eV = -2.18 × 10⁻¹⁸ · (Z² / n²) J\nRydberg Spectral Formula: ṽ = 1/λ = R_H · Z² · [(1 / n₁²) - (1 / n₂²)]\nde Broglie Wavelength: λ = h / p = h / (m v) = h / √(2 m K)\nHeisenberg Uncertainty: Δx · Δp ≥ h / (4π) => Δx · Δv ≥ h / (4π m)",
    variables: "R_H = 109677 cm⁻¹ = 1.097 × 10⁷ m⁻¹, h = 6.626 × 10⁻³⁴ J·s, Z = atomic number, n₁, n₂ = principal quantum levels (n₂ > n₁)",
    examTip: "Spectral Series in Hydrogen: Lyman series (n₁ = 1, ultraviolet region); Balmer series (n₁ = 2, visible region); Paschen (n₁ = 3, infrared); Brackett (n₁ = 4, IR); Pfund (n₁ = 5, IR)."
  },
  {
    id: 'c11-chem-03',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Chemical Bonding & Molecular Structure',
    title: 'Formal Charge, Dipole Moment & Bond Order',
    formula: "Formal Charge: FC = V - L - ½ S\nDipole Moment: μ = q × d (expressed in Debye: 1 D = 3.33564 × 10⁻³⁰ C·m)\nMolecular Orbital Bond Order: Bond Order = ½ (N_b - N_a)\nParamagnetism: Present if unpaired electrons exist in MO configuration",
    variables: "V = valence electrons in free atom, L = non-bonding lone pair electrons, S = shared bonding electrons, N_b = bonding electrons, N_a = antibonding electrons",
    examTip: "For species up to 14 electrons (e.g., N₂), the MO filling order is σ1s < σ*1s < σ2s < σ*2s < (π2p_x = π2p_y) < σ2p_z. For O₂ and F₂ (>14 electrons), σ2p_z fills before π2p. O₂ has bond order 2.0 with 2 unpaired electrons in π*2p, explaining its experimental paramagnetism."
  },
  {
    id: 'c11-chem-04',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Chemical Thermodynamics',
    title: 'First Law, Enthalpy & Hess’s Law of Constant Heat Summation',
    formula: "First Law: ΔU = q + w (IUPAC: w = -P_ext ΔV for expansion)\nEnthalpy Definition: H = U + P V => ΔH = ΔU + Δn_g R T\nHess's Law: ΔH_reaction = Σ Δ_f H°(products) - Σ Δ_f H°(reactants)\nBond Enthalpy Formula: Δ_r H° = Σ Bond Enthalpy(reactants) - Σ Bond Enthalpy(products)",
    variables: "ΔU = internal energy change (J), ΔH = enthalpy change (J), Δn_g = (moles of gaseous products) - (moles of gaseous reactants), R = 8.314 J/(mol·K)",
    examTip: "The standard enthalpy of formation Δ_f H° of any chemical element in its most stable reference physical state (e.g., O₂(g), C(graphite), Br₂(l), Na(s)) is defined as strictly zero."
  },
  {
    id: 'c11-chem-05',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Chemical Thermodynamics',
    title: "Entropy, Gibbs Free Energy & Reaction Spontaneity",
    formula: "Entropy Change: ΔS = q_rev / T\nGibbs-Helmholtz Equation: ΔG = ΔH - T ΔS\nStandard Free Energy and Equilibrium Constant: ΔG° = -R T ln K = -2.303 R T log₁₀ K\nSpontaneity Criteria at constant T and P:\n1) ΔG < 0: Spontaneous (exergonic)\n2) ΔG = 0: System at chemical equilibrium\n3) ΔG > 0: Non-spontaneous (endergonic, spontaneous in reverse)",
    variables: "ΔS = entropy change (J/K), ΔG = Gibbs free energy change (J), K = equilibrium constant, T = absolute temperature (K)",
    examTip: "Temperature of spontaneous transition: For reactions where ΔH > 0 and ΔS > 0 (endothermic disorder-increasing), the reaction becomes spontaneous only at temperatures above T = ΔH / ΔS."
  },
  {
    id: 'c11-chem-06',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Equilibrium (Chemical)',
    title: 'Law of Mass Action, K_p vs K_c & Le Chatelier’s Principle',
    formula: "Equilibrium Constant Relation: K_p = K_c · (R T)^(Δn_g)\nReaction Quotient Criterion:\n1) Q_c < K_c: Forward reaction proceeds to products\n2) Q_c = K_c: Dynamic equilibrium established\n3) Q_c > K_c: Reverse reaction proceeds to reactants\nvan 't Hoff Equation: ln(K₂ / K₁) = [ΔH° / R] · [(1 / T₁) - (1 / T₂)]",
    variables: "K_p = equilibrium constant in partial pressures, K_c = equilibrium constant in molar concentrations, Δn_g = gaseous stoichiometric difference",
    examTip: "Addition of an inert gas at constant volume has ZERO effect on chemical equilibrium. Addition of an inert gas at constant pressure shifts the equilibrium in the direction of greater number of gas moles (Δn_g)."
  },
  {
    id: 'c11-chem-07',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Equilibrium (Ionic)',
    title: "Ostwald's Dilution Law, pH Scale & Buffer Solutions",
    formula: "Ostwald's Dilution Law: K_a = (C α²) / (1 - α) ≈ C α² => α = √(K_a / C)\npH Definition: pH = -log₁₀[H⁺] ; pOH = -log₁₀[OH⁻] ; pH + pOH = 14 (at 25 °C)\nIonic Product of Water: K_w = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ (at 298 K)\nAcidic Buffer (Henderson-Hasselbalch): pH = pK_a + log₁₀([Salt] / [Acid])\nBasic Buffer: pOH = pK_b + log₁₀([Salt] / [Base])\nSolubility Product Precipitation Condition: Ionic Product (IP) > K_sp => Precipitation occurs",
    variables: "α = degree of ionization, C = initial molar concentration, K_a = acid dissociation constant, K_sp = solubility product",
    examTip: "K_w increases as temperature rises because water autoionization is endothermic. Thus at higher temperatures (e.g., 60 °C), K_w > 10⁻¹⁴, meaning neutral pH < 7.0, although water remains strictly neutral ([H⁺] = [OH⁻])."
  },
  {
    id: 'c11-chem-08',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Redox Reactions',
    title: 'Oxidation Number Rules & Ion-Electron Balancing Method',
    formula: "Oxidation: Increase in oxidation number (loss of electrons)\nReduction: Decrease in oxidation number (gain of electrons)\nAcidic Medium Balancing:\n1) Balance atoms other than O and H\n2) Add H₂O to balance O atoms\n3) Add H⁺ to balance H atoms\n4) Add electrons (e⁻) to balance net charges\nBasic Medium Balancing: Add equal OH⁻ to both sides for every H⁺ added to form H₂O",
    variables: "Oxidation numbers: Alkali metals = +1, Alkaline earths = +2, Fluorine = -1, Oxygen = -2 (except peroxides -1, superoxides -½, OF₂ +2)",
    examTip: "In disproportionation redox reactions, an element in an intermediate oxidation state is simultaneously oxidized and reduced (e.g., 2 H₂O₂ -> 2 H₂O + O₂, where O changes from -1 to -2 and 0)."
  },
  {
    id: 'c11-chem-09',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Organic Chemistry: Basics',
    title: 'Inductive, Resonance, Hyperconjugation & Electromeric Effects',
    formula: "Carbocation Stability: 3° > 2° > 1° > Methyl (stabilized by +I and hyperconjugation: 9 α-H in tert-butyl > 6 α-H in isopropyl > 3 α-H in ethyl)\nFree Radical Stability: 3° > 2° > 1° > Methyl (hyperconjugative resonance)\nCarbanion Stability: Methyl > 1° > 2° > 3° (destabilized by +I electron-donating alkyl groups)\nHyperconjugation Baker-Nathan Effect: Number of hyperconjugative structures = Number of α-hydrogens",
    variables: "+I groups: -C(CH₃)₃ > -CH(CH₃)₂ > -CH₂CH₃ > -CH₃ ; -I groups: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I",
    examTip: "Aromaticity (Hückel's Rule): A planar, cyclic, completely conjugated ring system is aromatic if it contains (4n + 2) π-electrons (where n = 0, 1, 2, 3... e.g., Benzene has 6 π-electrons with n = 1)."
  },
  {
    id: 'c11-chem-10',
    classLevel: '11',
    subjectId: 'chem',
    subjectName: 'Chemistry',
    domain: 'Hydrocarbons',
    title: "Wurtz Reaction, Markovnikov's Addition & Ozonolysis",
    formula: "Wurtz Synthesis: 2 R-X + 2 Na (dry ether) -> R-R + 2 NaX\nMarkovnikov's Rule: Electrophilic addition of H-X to unsymmetrical alkene puts H on the carbon with more hydrogens, and X on the carbon with fewer hydrogens (via more stable carbocation intermediate)\nAnti-Markovnikov (Kharasch / Peroxide Effect): Addition of HBr in presence of organic peroxides yields 1-bromoalkane via free radical intermediate (applies strictly to HBr; fails for HCl and HI)\nOzonolysis of Alkenes: R-CH=CH-R' + O₃ (then Zn / H₂O) -> R-CHO + R'-CHO + ZnO",
    variables: "R-X = alkyl halide, HBr = hydrogen bromide, Zn/H₂O = reductive cleavage reagent preventing oxidation of aldehydes to carboxylic acids",
    examTip: "The peroxide effect applies exclusively to HBr. For HCl, the H-Cl bond is too strong for free-radical cleavage; for HI, iodine radicals preferentially recombine into I₂ rather than adding to the double bond."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLASS 11: MATHEMATICS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'c11-math-01',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Sets and Relations',
    title: 'Set Operations, De Morgan’s Laws & Cardinality Identities',
    formula: "Union Cardinality (2 sets): n(A ∪ B) = n(A) + n(B) - n(A ∩ B)\nUnion Cardinality (3 sets): n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C)\nDe Morgan's Laws: (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'\nComplement Cardinality: n(A') = n(U) - n(A)\nDifference: n(A - B) = n(A) - n(A ∩ B)\nNumber of Subsets: For set of n elements, total subsets = 2ⁿ ; proper subsets = 2ⁿ - 1",
    variables: "n(A) = number of elements in set A, U = universal set, A' = complement of A",
    examTip: "Disjoint sets have n(A ∩ B) = 0, so n(A ∪ B) = n(A) + n(B). The empty set ∅ is a subset of every set, and every set is a subset of itself."
  },
  {
    id: 'c11-math-02',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Relations and Functions',
    title: 'Cartesian Product, Relations & Domain/Range Conditions',
    formula: "Cartesian Product Cardinality: n(A × B) = n(A) · n(B)\nTotal Relations from A to B: 2^[n(A) · n(B)]\nFunction Definition: Every element in domain has exactly one image in codomain\nDomain of Rational Function f(x) = P(x) / Q(x): x ∈ ℝ such that Q(x) ≠ 0\nDomain of Square Root f(x) = √(g(x)): x ∈ ℝ such that g(x) ≥ 0\nDomain of Logarithmic Function f(x) = log_b(g(x)): g(x) > 0 with b > 0 and b ≠ 1",
    variables: "P(x), Q(x), g(x) = polynomial functions; ℝ = set of real numbers",
    examTip: "To find the domain of √[ (x - a)(x - b) ], use the sign scheme (wavy curve method). For denominator containing a radical 1 / √(g(x)), strict inequality g(x) > 0 applies."
  },
  {
    id: 'c11-math-03',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Trigonometric Functions',
    title: 'Compound Angle Addition & Subtraction Formulas',
    formula: "sin(A ± B) = sinA cosB ± cosA sinB\ncos(A ± B) = cosA cosB ∓ sinA sinB\ntan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)\ncot(A ± B) = (cotA cotB ∓ 1) / (cotB ± cotA)",
    variables: "A, B = real angle measures; for tan(A ± B), neither A, B nor (A ± B) can be an odd multiple of π/2",
    examTip: "Be extremely alert to the sign reversal in cosine: cos(A + B) features a MINUS sign between products, whereas cos(A - B) features a PLUS sign."
  },
  {
    id: 'c11-math-04',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Trigonometric Functions',
    title: 'Double & Triple Angle Identities',
    formula: "sin(2A) = 2 sinA cosA = (2 tanA) / (1 + tan²A)\ncos(2A) = cos²A - sin²A = 2 cos²A - 1 = 1 - 2 sin²A = (1 - tan²A) / (1 + tan²A)\nPower Reduction: 1 + cos(2A) = 2 cos²A ; 1 - cos(2A) = 2 sin²A\ntan(2A) = (2 tanA) / (1 - tan²A)\nsin(3A) = 3 sinA - 4 sin³A\ncos(3A) = 4 cos³A - 3 cosA\ntan(3A) = (3 tanA - tan³A) / (1 - 3 tan²A)",
    variables: "A = angle; identities convert quadratic trigonometric terms into linear double angles for easy integration and calculus evaluation",
    examTip: "The identities 1 - cos(2θ) = 2 sin²θ and 1 + cos(2θ) = 2 cos²θ are the most frequently used substitutions in limits, derivatives, and calculus."
  },
  {
    id: 'c11-math-05',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Trigonometric Functions',
    title: 'Transformation of Products to Sums and Sums to Products (C-D Formulas)',
    formula: "Sum to Product (C-D):\nsinC + sinD = 2 sin[(C + D) / 2] cos[(C - D) / 2]\nsinC - sinD = 2 cos[(C + D) / 2] sin[(C - D) / 2]\ncosC + cosD = 2 cos[(C + D) / 2] cos[(C - D) / 2]\ncosC - cosD = -2 sin[(C + D) / 2] sin[(C - D) / 2] = 2 sin[(C + D) / 2] sin[(D - C) / 2]\nProduct to Sum:\n2 sinA cosB = sin(A + B) + sin(A - B)\n2 cosA sinB = sin(A + B) - sin(A - B)\n2 cosA cosB = cos(A + B) + cos(A - B)\n2 sinA sinB = cos(A - B) - cos(A + B)",
    variables: "C, D = angles; remember that in 2 sinA sinB, the subtraction order is cos(A - B) MINUS cos(A + B)",
    examTip: "Examiner Trap: In cosC - cosD, students frequently forget the negative sign. It is -2 sin[(C+D)/2] sin[(C-D)/2], or equivalently +2 sin[(C+D)/2] sin[(D-C)/2]."
  },
  {
    id: 'c11-math-06',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Complex Numbers & Quadratic Equations',
    title: 'Modulus, Conjugate, Polar Form & Euler Representation',
    formula: "Complex Number: z = x + i y (where i = √(-1), i² = -1, i³ = -i, i⁴ = 1)\nConjugate: z̄ = x - i y => z · z̄ = |z|² = x² + y²\nModulus: |z| = √(x² + y²)\nArgument: θ = arg(z) = tan⁻¹(|y / x|) placed in appropriate quadrant (-π < θ ≤ π)\nPolar Form: z = r (cosθ + i sinθ) = r e^(i θ) [r = |z|, θ = arg(z)]\nQuadratic Roots: x = [-b ± √(b² - 4ac)] / (2a) [for D < 0, roots are complex conjugates]",
    variables: "x = Re(z), y = Im(z), r = radial distance from origin, θ = principal argument in radians",
    examTip: "Principal argument arg(z) is strictly bounded by -π < θ ≤ π. If z lies in Quadrant 2: θ = π - α. If z lies in Quadrant 3: θ = -(π - α). If z lies in Quadrant 4: θ = -α, where α = tan⁻¹|y/x|."
  },
  {
    id: 'c11-math-07',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Linear Inequalities',
    title: 'Properties of Real Inequalities & Sign Reversal',
    formula: "Rule 1: Equal real numbers can be added to or subtracted from both sides without changing inequality sign: a < b => a ± c < b ± c\nRule 2: Multiplying or dividing both sides by a POSITIVE number preserves inequality sign: a < b and c > 0 => a c < b c\nRule 3 (Sign Inversion): Multiplying or dividing both sides by a NEGATIVE number STRICTLY REVERSES the inequality: a < b and c < 0 => a c > b c\nAbsolute Value Inequalities:\n1) |x| ≤ a => -a ≤ x ≤ a (for a > 0)\n2) |x| ≥ a => x ≤ -a or x ≥ a (for a > 0)",
    variables: "a, b, c, x = real numbers",
    examTip: "Never cross-multiply an expression containing an unknown variable across an inequality unless you know with mathematical certainty that its sign is strictly positive. Instead, bring all terms to one side, find common denominators, and use the wavy curve method."
  },
  {
    id: 'c11-math-08',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Permutations and Combinations',
    title: 'Fundamental Counting Principle, Permutations & Combinations',
    formula: "Factorial: n! = n(n - 1)(n - 2)... 3 · 2 · 1 (with 0! = 1)\nPermutation (Arrangement with order): ⁿP_r = n! / (n - r)!\nCombination (Selection without order): ⁿC_r = n! / [r! (n - r)!]\nRelation: ⁿP_r = r! · ⁿC_r\nSymmetry Identity: ⁿC_r = ⁿC_(n - r)\nPascal's Identity: ⁿC_r + ⁿC_(r - 1) = ⁿ⁺¹C_r\nCircular Permutation: (n - 1)! for distinct objects ; ½ (n - 1)! for necklace/garland (where clockwise equals anticlockwise)",
    variables: "n = total distinct items available, r = items selected or arranged (0 ≤ r ≤ n)",
    examTip: "Pascal's identity ⁿC_r + ⁿC_(r-1) = ⁿ⁺¹C_r is a favourite in board and competitive simplifications. Whenever upper indices match (n) and lower indices differ by 1, the result increments upper index to n+1 and retains the larger lower index r."
  },
  {
    id: 'c11-math-09',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Binomial Theorem',
    title: 'General Term, Middle Term & Binomial Coefficients',
    formula: "Binomial Expansion: (a + b)ⁿ = Σ [r=0 to n] ⁿC_r a^(n - r) b^r\nGeneral Term: T_(r + 1) = ⁿC_r a^(n - r) b^r\nMiddle Term (n even): Single middle term at T_[(n/2) + 1]\nMiddle Terms (n odd): Two middle terms at T_[(n + 1)/2] and T_[(n + 3)/2]\nSum of all Coefficients: (1 + 1)ⁿ = 2ⁿ = ⁿC₀ + ⁿC₁ + ⁿC₂ + ... + ⁿC_n\nAlternating Sum: ⁿC₀ - ⁿC₁ + ⁿC₂ - ... = 0",
    variables: "n = positive integer exponent, r = index from 0 to n; total number of terms in expansion of (a + b)ⁿ is exactly (n + 1)",
    examTip: "To determine the term independent of x in an expansion like (x + k/x)ⁿ, write the general term T_(r+1), collect all powers of x into x^(expression in r), equate that exponent to 0, and solve for integer r."
  },
  {
    id: 'c11-math-10',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Sequences and Series',
    title: 'Arithmetic Progression (AP) & Geometric Progression (GP)',
    formula: "AP nth Term: a_n = a + (n - 1) d\nAP Sum of n terms: S_n = (n / 2) [2a + (n - 1) d] = (n / 2) [a + l]\nArithmetic Mean: AM = (a + b) / 2\nGP nth Term: a_n = a · r^(n - 1)\nGP Sum of n terms (r ≠ 1): S_n = a(1 - rⁿ) / (1 - r) = a(rⁿ - 1) / (r - 1)\nSum of Infinite Convergent GP (|r| < 1): S_∞ = a / (1 - r)\nGeometric Mean: GM = √(a · b)\nFundamental Inequality: AM ≥ GM (equality holds if and only if a = b > 0)",
    variables: "a = first term, d = common difference, r = common ratio, l = last term, n = number of terms",
    examTip: "The infinite GP sum formula S_∞ = a / (1 - r) applies strictly if and only if the absolute common ratio satisfies |r| < 1. If |r| ≥ 1, the infinite series diverges."
  },
  {
    id: 'c11-math-11',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Straight Lines',
    title: 'Slope, Standard Forms & Perpendicular Distance',
    formula: "Slope: m = tanθ = (y₂ - y₁) / (x₂ - x₁)\nPoint-Slope Form: y - y₁ = m (x - x₁)\nSlope-Intercept Form: y = m x + c\nTwo-Point Form: y - y₁ = [(y₂ - y₁) / (x₂ - x₁)] (x - x₁)\nIntercept Form: x / a + y / b = 1\nNormal Form: x cosω + y sinω = p\nParallel Lines Condition: m₁ = m₂\nPerpendicular Lines Condition: m₁ · m₂ = -1\nPerpendicular Distance from (x₀, y₀) to Ax + By + C = 0: d = |A x₀ + B y₀ + C| / √(A² + B²)\nDistance between Parallel Lines: d = |C₁ - C₂| / √(A² + B²)",
    variables: "m = slope, c = y-intercept, a = x-intercept, b = y-intercept, p = perpendicular distance from origin, ω = angle of normal with x-axis",
    examTip: "Before computing the distance between parallel lines d = |C₁ - C₂| / √(A² + B²), verify that the coefficients of x and y in both equations are exactly identical."
  },
  {
    id: 'c11-math-12',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Conic Sections',
    title: 'Circles, Parabolas, Ellipses & Hyperbolas Standard Equations',
    formula: "Circle (centre (h, k), radius r): (x - h)² + (y - k)² = r²\nParabola (standard rightward): y² = 4ax => Focus: (a, 0), Directrix: x = -a, Latus Rectum = 4a\nEllipse (horizontal, a > b): (x² / a²) + (y² / b²) = 1\n  Eccentricity: e = √(1 - b²/a²) < 1 => b² = a²(1 - e²)\n  Foci: (±ae, 0), Vertices: (±a, 0), Latus Rectum = 2b² / a\nHyperbola (horizontal): (x² / a²) - (y² / b²) = 1\n  Eccentricity: e = √(1 + b²/a²) > 1 => b² = a²(e² - 1)\n  Foci: (±ae, 0), Vertices: (±a, 0), Latus Rectum = 2b² / a",
    variables: "a = semi-major axis, b = semi-minor axis, e = eccentricity, 4a = latus rectum of parabola",
    examTip: "Eccentricity criteria: e = 0 for circle, e = 1 for parabola, 0 < e < 1 for ellipse, and e > 1 for hyperbola. Notice the sign difference in b²: for ellipse b² = a²(1 - e²); for hyperbola b² = a²(e² - 1)."
  },
  {
    id: 'c11-math-13',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Limits and Derivatives',
    title: 'Standard Calculus Limits & First Principle Derivatives',
    formula: "Fundamental Trigonometric Limits:\n1) lim_(x->0) [sin x / x] = 1 (x in radians)\n2) lim_(x->0) [tan x / x] = 1\n3) lim_(x->0) [(1 - cos x) / x] = 0 ; lim_(x->0) [(1 - cos x) / x²] = ½\nAlgebraic Limit: lim_(x->a) [(xⁿ - aⁿ) / (x - a)] = n · aⁿ⁻¹\nExponential Limit: lim_(x->0) [(eˣ - 1) / x] = 1 ; lim_(x->0) [(aˣ - 1) / x] = ln a\nDerivative from First Principles: f'(x) = lim_(h->0) [f(x + h) - f(x)] / h\nProduct Rule: (u v)' = u' v + u v'\nQuotient Rule: (u / v)' = (u' v - u v') / v²",
    variables: "x, h = real variables, a = real constant, n = rational number, u(x), v(x) = differentiable functions",
    examTip: "The trigonometric limit lim_(x->0) (sin x / x) = 1 is valid ONLY when x is measured in radians. If x is measured in degrees, lim_(x->0) (sin x° / x) = π / 180."
  },
  {
    id: 'c11-math-14',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Statistics',
    title: 'Variance, Standard Deviation & Coefficient of Variation',
    formula: "Mean: x̄ = (Σ f_i x_i) / N (where N = Σ f_i)\nVariance (Discrete Data): σ² = (1/N) Σ [x_i - x̄]² = (1/N) Σ x_i² - (x̄)²\nVariance (Frequency Distribution): σ² = (1/N) Σ f_i (x_i - x̄)² = (1/N) Σ f_i x_i² - [ (1/N) Σ f_i x_i ]²\nStandard Deviation: σ = √(σ²)\nShortcut (Step-Deviation): σ = h · √[ (1/N) Σ f_i u_i² - ((1/N) Σ f_i u_i)² ] (u_i = (x_i - A)/h)\nCoefficient of Variation: CV = (σ / x̄) × 100% (for x̄ > 0)",
    variables: "x_i = observations, f_i = frequencies, N = total frequency, A = assumed mean, h = class interval width, σ = standard deviation",
    examTip: "Variance and standard deviation are independent of change of origin (adding or subtracting a constant to all observations leaves σ unchanged), but are dependent on change of scale (multiplying each observation by constant k multiplies σ by |k| and variance by k²)."
  },
  {
    id: 'c11-math-15',
    classLevel: '11',
    subjectId: 'math',
    subjectName: 'Mathematics',
    domain: 'Probability',
    title: 'Axiomatic Probability, Mutually Exclusive & Independent Events',
    formula: "Classical Probability: P(E) = n(E) / n(S)\nAddition Theorem (any 2 events): P(A ∪ B) = P(A) + P(B) - P(A ∩ B)\nMutually Exclusive Events: A ∩ B = ∅ => P(A ∩ B) = 0 => P(A ∪ B) = P(A) + P(B)\nComplementary Event: P(A') = 1 - P(A)\nOdds in favour of event E: n(E) : n(E')\nOdds against event E: n(E') : n(E)",
    variables: "S = sample space, E = event subset, n(S) = total exhaustive outcomes, n(E) = favorable outcomes",
    examTip: "Never confuse mutually exclusive events with independent events. Mutually exclusive means events cannot happen simultaneously (P(A ∩ B) = 0). Independent events satisfy P(A ∩ B) = P(A) · P(B)."
  }
];
