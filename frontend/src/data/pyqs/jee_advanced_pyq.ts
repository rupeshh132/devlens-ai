import type { PyqPaper, PyqQuestion } from '../../components/learn/PyqPaperViewerModal';

type RawAdvQ = Omit<PyqQuestion, 'id' | 'qNum' | 'examinerTip' | 'subject'> & {
  examinerTip?: string;
};

type BlockIndices = [number, number, number];

interface AdvPaperSpec {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Full Syllabus (PCM)';
  year: number;
  paperType: 'COMPETITIVE_SAMPLE' | 'JEE_ADV_PAPER';
  paperCode: string;
  difficulty: 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  blocks: BlockIndices;
}

const SECTION_ORDER: Record<PyqQuestion['section'], number> = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5
};

/**
 * 42-question Physics bank arranged in 7 blocks of 6 questions (B0..B6).
 * Every block contains 2 Sec A (SCQ +3/-1), 1 Sec B (MSQ +4/-2 partial),
 * 1 Sec C (Non-Neg Numerical +4/0), and 2 Sec D (Paragraph/Matrix +3/-1) = 20 marks.
 */
const ADV_PHY_BANK: RawAdvQ[] = [
  // ==================== BLOCK 0 ====================
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] Moving-Wall Doppler Effect',
    questionText: '[SCQ] A car approaches a stationary cliff at 20 m/s sounding a horn of frequency 620 Hz. Speed of sound in air is 330 m/s. Find the beat frequency heard by the car driver between the direct horn and cliff echo.',
    options: ['80 Hz', '40 Hz', '75 Hz', '60 Hz'],
    correctOption: '80 Hz',
    modelAnswer: 'Echo frequency heard by driver f_echo = f₀ (v + u)/(v - u) = 620 × (330 + 20)/(330 - 20) = 620 × 350/310 = 700 Hz. Direct sound heard = 620 Hz. Beats = |700 - 620| = 80 Hz.',
    stepMarking: [
      { step: 'Echo formula f₀(v + u)/(v - u) => 700 Hz', marks: '+1.5' },
      { step: 'Beat frequency |700 - 620| = 80 Hz', marks: '+1.5 (-1 if wrong)' }
    ],
    examinerTip: 'Doppler effect with a moving observer and stationary reflector gives (v + u)/(v - u) directly in one step.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Ray Optics — Prism Minimum Deviation',
    questionText: '[SCQ] An equilateral glass prism (refracting angle A = 60°) has refractive index √2 for monochromatic yellow light. What is the angle of minimum deviation δ_m?',
    options: ['30°', '45°', '15°', '60°'],
    correctOption: '30°',
    modelAnswer: 'At minimum deviation, sin((A + δ_m)/2) = μ sin(A/2) = √2 sin 30° = 1/√2 = sin 45°. Hence (60° + δ_m)/2 = 45° => δ_m = 30°.',
    stepMarking: [
      { step: 'Apply prism formula sin((60° + δ_m)/2) = √2 sin 30° => δ_m = 30°', marks: '+3 / -1' }
    ],
    examinerTip: 'At minimum deviation inside an equilateral prism, the ray travels strictly parallel to the base with i = e = 45°.'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] ICOR & Angular Momentum',
    questionText: '[MSQ — Select ALL Correct] A uniform solid sphere of mass M and radius R rolls without slipping on a horizontal plank accelerating to the right with acceleration a₀. Which statement(s) hold?',
    options: [
      'A. Acceleration of the bottommost contact point relative to the plank is zero during pure rolling',
      'B. Static friction on the sphere acts to the right and produces counter-clockwise angular acceleration',
      'C. If limiting static friction is μMg, maximum plank acceleration for pure rolling is (7/2) μg',
      'D. Linear acceleration of the sphere centre of mass in the ground frame equals (5/7) a₀'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Relative tangential acceleration at contact = 0. Friction f acts right, giving a_cm = f/M (right) and α = fR / (2MR²/5) = 5f/(2MR) (CCW). Pure rolling on the plank requires a_cm + αR = a₀ => (7/2)(f/M) = a₀ => f = (2/7)Ma₀ ≤ μMg => a₀ ≤ (7/2)μg. In ground frame, a_cm = (2/7)a₀ (so D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 for two, +1 for one if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Be careful with direction of α: rightward friction below the centre of mass spins the sphere counter-clockwise!'
  },
  {
    section: 'C',
    marks: 4,
    topic: '[ADV ONLY] Electrostatic Cavity Field',
    questionText: '[Non-Negative Numerical] A solid insulating sphere of uniform volume charge density ρ = 3ε₀ C/m³ and radius R = 4 m contains a spherical cavity whose centre is at distance d = 2 m from the sphere centre. Find the magnitude of electric field inside the cavity (in N/C).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'Superposition gives uniform E_cavity = ρ d / (3ε₀) = (3ε₀ × 2)/(3ε₀) = 2 N/C', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'The field inside an off-centre uniform spherical cavity is independent of cavity radius and strictly parallel to O_sphere → O_cavity.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Magnetic Cycloid Trajectory',
    questionText: '[Paragraph Comprehension] A particle of mass m and charge +q is released from rest at the origin at t = 0 in crossed uniform fields E = E₀ ĵ and B = B₀ k̂. What is the maximum y-coordinate reached by the particle?',
    options: ['2 m E₀ / (q B₀²)', 'm E₀ / (q B₀²)', '4 m E₀ / (q B₀²)', 'π m E₀ / (q B₀²)'],
    correctOption: '2 m E₀ / (q B₀²)',
    modelAnswer: 'In the frame drifting at v_d = (E₀/B₀) î, the electric field vanishes and the particle executes circular motion of speed E₀/B₀. At the peak, v_y = 0 and v_x = 2E₀/B₀. By work-energy, q E₀ y_max = (1/2)m(2E₀/B₀)² => y_max = 2 m E₀ / (q B₀²).',
    stepMarking: [
      { step: 'Work-energy + peak velocity 2E₀/B₀ => 2mE₀/(qB₀²)', marks: '+3 / -1' }
    ],
    examinerTip: 'Magnetic force does zero work, so kinetic energy at any point depends solely on q E₀ y.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Magnetic Cycloid Drift Distance',
    questionText: '[Paragraph Comprehension — Crossed Fields] For the same particle (mass m, charge +q) released from rest at origin in E = E₀ ĵ and B = B₀ k̂, find the net displacement along the x-axis in one complete cycloid period T = 2πm / (qB₀).',
    options: ['2π m E₀ / (q B₀²)', 'π m E₀ / (q B₀²)', '4π m E₀ / (q B₀²)', 'm E₀ / (q B₀²)'],
    correctOption: '2π m E₀ / (q B₀²)',
    modelAnswer: 'The trajectory is x(t) = (E₀/B₀)[t - (1/ω)sin(ωt)] where ω = qB₀/m. At t = T = 2π/ω, sin(ωT) = 0, so Δx = (E₀/B₀)T = 2π m E₀ / (q B₀²).',
    stepMarking: [
      { step: 'Integrate drift velocity E₀/B₀ over T = 2πm/(qB₀) => 2πmE₀/(qB₀²)', marks: '+3 / -1' }
    ],
    examinerTip: 'Think of the cycloid as a wheel rolling at drift speed E₀/B₀: in one revolution it advances by v_drift × T.'
  },

  // ==================== BLOCK 1 ====================
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] Rocket Propulsion',
    questionText: '[SCQ] A rocket of initial mass M₀ starts from rest in gravity-free space and ejects exhaust gases at constant relative speed v_rel = 2000 m/s. Find its speed when its remaining mass becomes M₀ / e².',
    options: ['4000 m/s', '2000 m/s', '2000 ln 2 m/s', '6000 m/s'],
    correctOption: '4000 m/s',
    modelAnswer: 'By Tsiolkovsky rocket equation in zero gravity, v = v_rel ln(M₀/M) = 2000 × ln(e²) = 4000 m/s.',
    stepMarking: [
      { step: 'Apply v = v_rel ln(M₀/M) with M = M₀/e² => 4000 m/s', marks: '+3 / -1' }
    ],
    examinerTip: 'Rocket thrust equals v_rel |dm/dt|, independent of whether mass loss rate is constant or variable.'
  },
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] Potentiometer Balance Length',
    questionText: '[SCQ] A potentiometer wire of length 10 m and resistance 20 Ω is connected in series with an ideal 2.5 V cell and a 5 Ω resistor. A secondary cell of EMF 1.2 V and internal resistance 2 Ω is balanced against the wire. Find the null-point length.',
    options: ['6.0 m', '4.8 m', '7.5 m', '5.0 m'],
    correctOption: '6.0 m',
    modelAnswer: 'Primary current I = 2.5 / (20 + 5) = 0.1 A. Potential drop across 10 m wire = 0.1 × 20 = 2.0 V, so gradient k = 2.0 / 10 = 0.2 V/m. At null point, no current flows through the 2 Ω internal resistance, so l = E/k = 1.2 / 0.2 = 6.0 m.',
    stepMarking: [
      { step: 'Find potential gradient k = 0.2 V/m and balance l = 1.2/0.2 = 6.0 m', marks: '+3 / -1' }
    ],
    examinerTip: 'Internal resistance of the test cell plays zero role at open-circuit null balance!'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Thin-Film Interference',
    questionText: '[MSQ — Select ALL Correct] Monochromatic light of wavelength λ = 600 nm in air is incident nearly normally on a soap film of refractive index μ = 1.5 suspended in air. Which statement(s) are true?',
    options: [
      'A. Condition for constructive interference in reflected light is 2μt = (2n - 1)λ/2 for integer n ≥ 1',
      'B. Minimum non-zero thickness of the film for maximum brightness in reflected light is 100 nm',
      'C. Constructive interference in reflected light corresponds to destructive interference in transmitted light',
      'D. If the same film rests on glass (μ_g = 1.6), constructive reflection still requires 2μt = (2n - 1)λ/2'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Air-to-soap reflection gives π phase shift while soap-to-air gives 0, so reflected bright fringe needs 2μt = (2n - 1)λ/2. For n = 1, t_min = λ/(4μ) = 600/(4×1.5) = 100 nm. Energy conservation swaps bright/dark between reflection and transmission. On glass (μ_g > μ_film), both reflections undergo π phase shift so D is false.',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Count the number of denser-boundary reflections (0 or 2 vs 1) before writing 2μt = nλ or (n - 1/2)λ.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Fluid Dynamics — Jet Thrust Force',
    questionText: '[Non-Negative Numerical] A large open tank filled with water (ρ = 1000 kg/m³) has a small orifice of cross-sectional area A = 2 cm² at depth h = 4 m below the free surface. Take g = 10 m/s². Find the horizontal thrust force (in Newtons) exerted by the issuing jet on the tank.',
    modelAnswer: '16',
    stepMarking: [
      { step: 'Torricelli v² = 2gh = 80 m²/s² => Thrust F = ρ A v² = 1000 × 2×10⁻⁴ × 80 = 16 N', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Remember F_thrust = ρ A v² = 2 ρ g A h (twice the hydrostatic force on area A at depth h).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Ideal Gas Thermodynamic Processes',
    questionText: '[Matrix Match] For 1 mole of a monatomic ideal gas (C_V = 3R/2), match Process (Column I) with Characteristic Relation (Column II):\nP. Isochoric heating | 1. ΔU = 0, Q = W\nQ. Isobaric expansion | 2. W = 0, Q = (3/2)RΔT\nR. Isothermal expansion | 3. Q = 0, ΔU = -W\nS. Adiabatic expansion | 4. Q = (5/2)RΔT',
    options: [
      'P-2, Q-4, R-1, S-3',
      'P-2, Q-1, R-4, S-3',
      'P-4, Q-2, R-1, S-3',
      'P-1, Q-4, R-2, S-3'
    ],
    correctOption: 'P-2, Q-4, R-1, S-3',
    modelAnswer: 'Isochoric: W = 0 => Q = ΔU = (3/2)RΔT (P-2). Isobaric: C_P = 5R/2 => Q = (5/2)RΔT (Q-4). Isothermal: ΔT = 0 => ΔU = 0 (R-1). Adiabatic: Q = 0 => ΔU = -W (S-3).',
    stepMarking: [
      { step: 'Correct 4-way match P-2, Q-4, R-1, S-3', marks: '+3 / -1' }
    ],
    examinerTip: 'Always verify C_P = C_V + R = 5R/2 specifically for monatomic gases.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Adiabatic Expansion Work',
    questionText: '[Paragraph Comprehension] One mole of a monatomic ideal gas at initial temperature T₀ expands reversibly and adiabatically from volume V₀ to 8V₀. What is the work done by the gas during this expansion?',
    options: ['9 R T₀ / 8', '3 R T₀ / 4', '3 R T₀ / 2', '9 R T₀ / 4'],
    correctOption: '9 R T₀ / 8',
    modelAnswer: 'For monatomic gas, γ = 5/3. Since TV^(γ-1) = const, T_f = T₀(V₀ / 8V₀)^(2/3) = T₀ / 4. Adiabatic work W = nR(T₀ - T_f)/(γ - 1) = R(3T₀/4)/(2/3) = 9RT₀/8.',
    stepMarking: [
      { step: 'T_f = T₀/4 via TV^(2/3) = const => W = 9RT₀/8', marks: '+3 / -1' }
    ],
    examinerTip: '8^(2/3) = (8^(1/3))² = 4 is a classic IIT numerical convenience.'
  },

  // ==================== BLOCK 2 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'EMI — Rotating Conducting Rod',
    questionText: '[SCQ] A conducting rod of length L = 2 m rotates in a horizontal plane with constant angular speed ω = 10 rad/s about one end in a uniform vertical magnetic field B = 0.5 T. Find the magnitude of induced EMF between the midpoint of the rod and its free tip.',
    options: ['7.5 V', '10.0 V', '5.0 V', '2.5 V'],
    correctOption: '7.5 V',
    modelAnswer: 'E = ∫_(L/2)^L B ω r dr = (1/2) B ω [L² - (L/2)²] = (1/2)(0.5)(10)(4 - 1) = 7.5 V.',
    stepMarking: [
      { step: 'Integrate B ω r dr from L/2 to L => 7.5 V', marks: '+3 / -1' }
    ],
    examinerTip: 'Do not blindly use (1/2)BωL² — notice the question asks between the midpoint and the tip, not pivot and tip!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Gravitation — Escape from Circular Orbit',
    questionText: '[SCQ] A satellite moves in a circular orbit at height h = R above Earth’s surface (R = radius of Earth). What is the minimum fractional increase in its orbital speed required for it to escape to infinity?',
    options: ['√2 - 1', '√2', '1 / 2', '√3 - 1'],
    correctOption: '√2 - 1',
    modelAnswer: 'At r = 2R, orbital speed v₀ = √(GM/2R) and local escape speed v_esc = √(2GM/2R) = √2 v₀. Fractional increase = (v_esc - v₀)/v₀ = √2 - 1.',
    stepMarking: [
      { step: 'Ratio v_esc / v₀ = √2 at any circular orbit radius => √2 - 1', marks: '+3 / -1' }
    ],
    examinerTip: 'At any radius r, local escape speed is always √2 times the circular orbital speed.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electrostatics — Isolated Capacitor & Dielectric',
    questionText: '[MSQ — Select ALL Correct] An isolated parallel-plate capacitor of capacitance C₀ is charged to potential V₀ and disconnected from the battery. A dielectric slab of constant K = 3 filling the entire space between the plates is then inserted slowly. Which statement(s) hold?',
    options: [
      'A. Free charge on the capacitor plates remains unchanged',
      'B. Magnitude of electric field inside the gap reduces to one-third of its initial value',
      'C. Electrostatic energy stored decreases to one-third of its initial value',
      'D. An external agent must perform positive work to push the slab into the gap'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Since disconnected, Q = C₀V₀ stays constant. Capacitance becomes 3C₀, so V = V₀/3, E = E₀/3, and U = Q²/(2C) = U₀/3. Because U decreases, fringing fields pull the slab inward and an external agent holding it back slowly does negative work (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Battery disconnected => Q constant (dielectric lowers U); Battery connected => V constant (dielectric raises U).'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Modern Physics — Bohr Orbit de Broglie Wavelength',
    questionText: '[Non-Negative Numerical] Find the ratio of the de Broglie wavelength of an electron in the n = 4 orbit of He⁺ (Z = 2) to that of an electron in the ground state (n = 1) of a hydrogen atom (Z = 1).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'λ = h/(mv) ∝ n/Z => Ratio = (4/2) / (1/1) = 2', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'In Bohr orbits, 2πr = nλ and r ∝ n²/Z => λ ∝ n/Z directly.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] RC Transient Charging',
    questionText: '[Paragraph Comprehension] An initially uncharged capacitor C = 4 μF is connected in series with a resistor R = 5 Ω and an ideal 10 V battery through a switch closed at t = 0. What is the charge on the capacitor at t = 20 μs?',
    options: ['40(1 - 1/e) μC', '40/e μC', '20(1 - 1/e) μC', '40 μC'],
    correctOption: '40(1 - 1/e) μC',
    modelAnswer: 'Time constant τ = RC = 5 × 4 μF = 20 μs and maximum charge Q₀ = CV = 40 μC. At t = τ, q(τ) = Q₀(1 - e⁻¹) = 40(1 - 1/e) μC.',
    stepMarking: [
      { step: 'Compute τ = 20 μs and Q₀ = 40 μC => 40(1 - 1/e) μC', marks: '+3 / -1' }
    ],
    examinerTip: 'Always verify whether t equals τ before evaluating exponentials.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Heat Dissipated in RC Charging',
    questionText: '[Paragraph Comprehension — Same RC Circuit] For the same 10 V battery, R = 5 Ω, and C = 4 μF initially uncharged, calculate the total thermal energy dissipated in the resistor from t = 0 until steady state.',
    options: ['200 μJ', '400 μJ', '100 μJ', '50 μJ'],
    correctOption: '200 μJ',
    modelAnswer: 'Battery supplies W_bat = Q₀V = CV² = 400 μJ. Stored energy U = (1/2)CV² = 200 μJ. Hence heat dissipated H = W_bat - U = (1/2)CV² = 200 μJ.',
    stepMarking: [
      { step: 'H = (1/2)CV² = 0.5 × 4 μF × 100 = 200 μJ', marks: '+3 / -1' }
    ],
    examinerTip: 'When charging an uncharged capacitor with a constant EMF battery, exactly 50% of supplied energy is lost as heat independent of R.'
  },

  // ==================== BLOCK 3 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'SHM & Inelastic Collision',
    questionText: '[SCQ] A block of mass m rests on a smooth horizontal surface attached to a spring of stiffness k. An identical block of mass m moving at speed v₀ collides head-on and sticks to it. Find the maximum compression of the spring.',
    options: ['v₀ √(m / 2k)', 'v₀ √(m / k)', 'v₀ √(2m / k)', '(v₀ / 2) √(m / k)'],
    correctOption: 'v₀ √(m / 2k)',
    modelAnswer: 'Momentum conservation during instantaneous collision gives common velocity v = v₀/2. Subsequent mechanical energy conservation: (1/2)(2m)(v₀/2)² = (1/2)kA² => A = v₀√(m / 2k).',
    stepMarking: [
      { step: 'Momentum conservation v = v₀/2, then (1/2)(2m)(v₀/2)² = (1/2)kA²', marks: '+3 / -1' }
    ],
    examinerTip: 'Never conserve mechanical energy across a sticky (inelastic) collision!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Surface Tension — Coalescing Droplets',
    questionText: '[SCQ] Eight identical spherical water droplets, each of radius r and surface tension T, coalesce isothermally into a single large spherical drop. Find the surface energy released.',
    options: ['16π r² T', '8π r² T', '4π r² T', '32π r² T'],
    correctOption: '16π r² T',
    modelAnswer: 'Volume conservation: 8 × (4/3)πr³ = (4/3)πR³ => R = 2r. Initial surface area = 8(4πr²) = 32πr². Final surface area = 4π(2r)² = 16πr². Energy released ΔU = T ΔA = 16π r² T.',
    stepMarking: [
      { step: 'R = 2r => ΔA = 32πr² - 16πr² = 16πr² => 16πr²T', marks: '+3 / -1' }
    ],
    examinerTip: 'For N droplets merging into one, ΔU = 4πR²T(N^(1/3) - 1).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Wave Optics — YDSE with Transparent Slab',
    questionText: '[MSQ — Select ALL Correct] In a standard Young’s Double Slit Experiment (slit separation d ≪ D, wavelength λ), a thin glass plate of thickness t and refractive index μ is placed in front of the upper slit S₁. Which statement(s) are true?',
    options: [
      'A. Optical path length from S₁ to the screen increases by (μ - 1)t',
      'B. The central bright fringe shifts upward toward S₁ by (μ - 1)t D / d',
      'C. The fringe width β = λD / d remains unchanged',
      'D. Intensity at the geometric centre O of the screen always increases regardless of t'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Glass plate adds optical path Δx = (μ - 1)t to S₁, shifting the zero-path-difference fringe toward S₁ by (μ - 1)tD/d without altering fringe spacing λD/d. Intensity at O depends on phase Δφ = (2π/λ)(μ - 1)t and can drop to zero (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'The entire interference pattern shifts rigidly toward the slit covered by the denser slab.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Alternating Current — LCR Resonance Power',
    questionText: '[Non-Negative Numerical] A series LCR circuit with R = 20 Ω, L = 0.4 H, and C = 10 μF is driven by an AC source of V_rms = 200 V tuned to resonant angular frequency ω₀. Find the average power dissipated in the circuit (in kW).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'At resonance X_L = X_C => Z = R = 20 Ω => P = V_rms² / R = 40000/20 = 2000 W = 2 kW', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'At series resonance, power factor cos φ = 1 and average power is purely V_rms² / R.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Nuclear & X-Ray Physics',
    questionText: '[Matrix Match] Match Column I with Column II:\nP. Moseley’s characteristic X-ray law | 1. hc / (eV)\nQ. Continuous X-ray cutoff wavelength λ_min | 2. T_(1/2) / ln 2\nR. Nuclear mass density vs mass number A | 3. √ν ∝ (Z - b)\nS. Mean radioactive lifetime τ | 4. Independent of A',
    options: [
      'P-3, Q-1, R-4, S-2',
      'P-3, Q-4, R-1, S-2',
      'P-1, Q-3, R-4, S-2',
      'P-3, Q-1, R-2, S-4'
    ],
    correctOption: 'P-3, Q-1, R-4, S-2',
    modelAnswer: 'Moseley: √ν = a(Z - b) (P-3). Cutoff λ_min = hc/(eV) (Q-1). Since R = R₀A^(1/3), nuclear volume ∝ A => density independent of A (R-4). Mean life τ = 1/λ = T_(1/2)/ln 2 (S-2).',
    stepMarking: [
      { step: 'Exact match P-3, Q-1, R-4, S-2', marks: '+3 / -1' }
    ],
    examinerTip: 'Cutoff wavelength λ_min depends ONLY on accelerating voltage V, never on target metal Z.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Photoelectric Stopping Potential',
    questionText: '[Paragraph Comprehension] Light of wavelength 310 nm (take hc = 1240 eV·nm) illuminates a metal surface of work function φ = 2.5 eV, producing photoelectrons with maximum kinetic energy 1.5 eV. If the incident wavelength is halved to 155 nm, what is the new stopping potential?',
    options: ['5.5 V', '3.0 V', '4.0 V', '6.5 V'],
    correctOption: '5.5 V',
    modelAnswer: 'At λ = 155 nm, photon energy E = 1240 / 155 = 8.0 eV. Thus K_max = 8.0 - 2.5 = 5.5 eV, giving stopping potential V_s = 5.5 V.',
    stepMarking: [
      { step: 'Compute E = 8.0 eV => eV_s = 8.0 - 2.5 = 5.5 eV => 5.5 V', marks: '+3 / -1' }
    ],
    examinerTip: 'Halving λ doubles photon energy E, NOT K_max!'
  },

  // ==================== BLOCK 4 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Rotational Dynamics — Ballistic Rod Collision',
    questionText: '[SCQ] A uniform thin rod of mass M and length L hangs vertically at rest, smoothly pivoted at its top end O. A point mass m = M/3 moving horizontally at speed v strikes the bottom end of the rod and sticks to it. Find the angular velocity of the system immediately after collision.',
    options: ['v / (2L)', 'v / L', '3v / (4L)', '2v / (3L)'],
    correctOption: 'v / (2L)',
    modelAnswer: 'Angular momentum conserved about pivot O: L_i = m v L = (M/3)vL. Total moment of inertia I_O = ML²/3 + mL² = ML²/3 + ML²/3 = (2/3)ML². Hence ω = [(M/3)vL] / [(2/3)ML²] = v / (2L).',
    stepMarking: [
      { step: 'Conserve L about pivot O: (M/3)vL = (2/3)ML² ω => v/(2L)', marks: '+3 / -1' }
    ],
    examinerTip: 'Conserve L about the pivot (not linear momentum, because the hinge delivers an impulsive reaction).'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Waves on a String — Harmonics',
    questionText: '[SCQ] A sonometer wire of length 1.0 m and linear mass density 10⁻³ kg/m is held under a tension of 40 N. Find the frequency of its third harmonic (second overtone).',
    options: ['300 Hz', '100 Hz', '200 Hz', '400 Hz'],
    correctOption: '300 Hz',
    modelAnswer: 'Transverse wave speed v = √(T/μ) = √(40 / 10⁻³) = 200 m/s. Third harmonic frequency f₃ = 3v / (2L) = (3 × 200)/(2 × 1.0) = 300 Hz.',
    stepMarking: [
      { step: 'v = 200 m/s => f₃ = 3v/(2L) = 300 Hz', marks: '+3 / -1' }
    ],
    examinerTip: 'Third harmonic on a string fixed at both ends corresponds to 3 loops (2nd overtone).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Gauss Law — Concentric Conducting Shells',
    questionText: '[MSQ — Select ALL Correct] Two thin concentric conducting spherical shells of radii R and 2R carry charges +Q (inner) and -2Q (outer) respectively. Which statement(s) are true?',
    options: [
      'A. Electrostatic potential of the outer shell is -Q / (8πε₀R)',
      'B. Electrostatic potential of the inner shell is zero',
      'C. Electric field in the region R < r < 2R is radially outward with magnitude Q / (4πε₀r²)',
      'D. If the outer shell is grounded, the outer surface of the outer shell carries charge +Q'
    ],
    modelAnswer: 'MSQ Key: A, B, C. At r = 2R, V_outer = k(Q - 2Q)/(2R) = -Q/(8πε₀R). For inner shell, V_inner = kQ/R + k(-2Q)/(2R) = 0. By Gauss law, field for R < r < 2R depends only on enclosed +Q. Grounding the outer shell sets its outer surface charge to zero (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Every shell contributes kq_i / R_i outside itself and kq_i / R_shell inside itself.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Error Analysis — Simple Pendulum Experiment',
    questionText: '[Non-Negative Numerical] In a simple pendulum experiment using T = 2π√(L/g), length L = 50.0 cm is measured with a scale of resolution 0.5 cm, and the time for 50 oscillations is recorded as 100 s using a stopwatch of least count 1 s. Find the maximum percentage error in g.',
    modelAnswer: '3',
    stepMarking: [
      { step: 'g = 4π²L/T² => %Δg = %ΔL + 2(%ΔT) = (0.5/50)×100 + 2×(1/100)×100 = 1% + 2% = 3%', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Relative error in time period T equals relative error in total time t for N oscillations: ΔT/T = Δt/t.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Magnetic Field of Square Loop',
    questionText: '[Paragraph Comprehension] A current I flows counter-clockwise around a rigid square wire loop of side length a. Find the magnitude of the magnetic field at the geometric centre of the square.',
    options: ['2√2 μ₀ I / (π a)', '√2 μ₀ I / (π a)', '4 μ₀ I / (π a)', 'μ₀ I / (2 a)'],
    correctOption: '2√2 μ₀ I / (π a)',
    modelAnswer: 'Each side at perpendicular distance d = a/2 subtends ±45° at the centre: B₁ = (μ₀I / 4π(a/2))(sin 45° + sin 45°) = μ₀I√2 / (2πa). Four sides add constructively: B_net = 4 B₁ = 2√2 μ₀ I / (π a).',
    stepMarking: [
      { step: 'Sum 4 identical straight segments at distance a/2 => 2√2 μ₀I / (πa)', marks: '+3 / -1' }
    ],
    examinerTip: 'Biot-Savart finite-wire formula B = (μ₀I / 4πd)(sin θ₁ + sin θ₂) handles any regular polygon effortlessly.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Magnetic Torque on Square Loop',
    questionText: '[Paragraph Comprehension — Same Square Loop] The same square loop of side a carrying current I is placed in a uniform magnetic field B₀ î such that the plane of the loop makes an angle of 30° with B₀. Find the magnitude of magnetic torque on the loop.',
    options: ['(√3 / 2) I a² B₀', '(1 / 2) I a² B₀', 'I a² B₀', '0'],
    correctOption: '(√3 / 2) I a² B₀',
    modelAnswer: 'If the plane makes 30° with B₀, the normal (area vector A) makes θ = 60° with B₀. Torque τ = I A B₀ sin 60° = (√3 / 2) I a² B₀.',
    stepMarking: [
      { step: 'Convert plane angle 30° to normal angle θ = 60° => (√3/2) I a² B₀', marks: '+3 / -1' }
    ],
    examinerTip: 'Classic trap: τ = M B sin θ uses the angle between magnetic moment (normal to plane) and B, NOT the plane angle!'
  },

  // ==================== BLOCK 5 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Wedge-Block Momentum & Energy',
    questionText: '[SCQ] A small block of mass m slides from rest down a smooth curved wedge of mass M = 2m and height h whose bottom tangent is horizontal. The wedge rests on a frictionless horizontal floor. Find the speed of the wedge when the block leaves it at the bottom.',
    options: ['√(gh / 3)', '√(2gh / 3)', '√(gh / 2)', '√(gh / 6)'],
    correctOption: '√(gh / 3)',
    modelAnswer: 'Horizontal momentum conservation: mv = MV => v = 2V. Mechanical energy conservation: (1/2)m(2V)² + (1/2)(2m)V² = mgh => 3mV² = mgh => V = √(gh / 3).',
    stepMarking: [
      { step: 'Horizontal momentum v = 2V + energy conservation => V = √(gh/3)', marks: '+3 / -1' }
    ],
    examinerTip: 'Check ground-frame velocities carefully in moving-wedge energy conservation!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Thermal Conduction in Series Rods',
    questionText: '[SCQ] Two cylindrical rods of equal length and cross-section with thermal conductivities K and 3K are joined end-to-end in series. The free ends are maintained at 100 °C (rod K) and 0 °C (rod 3K). Find the steady-state junction temperature.',
    options: ['25 °C', '50 °C', '75 °C', '33.3 °C'],
    correctOption: '25 °C',
    modelAnswer: 'Steady heat current H is equal: K A (100 - T)/L = 3K A (T - 0)/L => 100 - T = 3T => 4T = 100 => T = 25 °C.',
    stepMarking: [
      { step: 'Equate thermal current across both rods => T = 25 °C', marks: '+3 / -1' }
    ],
    examinerTip: 'Higher thermal conductivity means smaller thermal resistance and therefore a smaller temperature drop.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Projectile Motion on an Inclined Plane',
    questionText: '[MSQ — Select ALL Correct] A particle is projected up an inclined plane of inclination β = 30° with speed u at an angle α = 30° above the incline. Which statement(s) are correct?',
    options: [
      'A. Time of flight on the inclined plane is 2u / (√3 g)',
      'B. Maximum perpendicular distance from the inclined plane is u² / (4√3 g)',
      'C. Range along the inclined plane is 2u² / (3 g)',
      'D. The particle hits the inclined plane perpendicularly'
    ],
    modelAnswer: 'MSQ Key: A, B, C. T = 2u sin 30° / (g cos 30°) = 2u / (√3 g). H_⊥ = (u sin 30°)² / (2 g cos 30°) = u² / (4√3 g). Range R = [u² / (g cos²30°)][sin(2α + β) - sin β] = [4u²/(3g)](1 - 0.5) = 2u²/(3g). Perpendicular strike requires cot α = 2 tan β, but cot 30° = √3 ≠ 2/√3 (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Resolving axes parallel and perpendicular to the incline decouples ⊥ motion completely.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Current Electricity — Symmetric Resistor Cube',
    questionText: '[Non-Negative Numerical] Twelve identical resistors, each of resistance R = 6 Ω, are soldered along the edges of a cube. Find the equivalent resistance (in Ω) across a body diagonal of the cube.',
    modelAnswer: '5',
    stepMarking: [
      { step: 'By 3-fold symmetry: R_diag = R/3 + R/6 + R/3 = (5/6)R = (5/6)×6 = 5 Ω', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Memorize cube equivalents for R = 1 Ω: Body diagonal = 5/6, Face diagonal = 3/4, Edge = 7/12.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Inductance & Induced Electric Field',
    questionText: '[Matrix Match] Match Column I with Column II:\nP. Magnetic energy density in vacuum | 1. μ₀ n₁ n₂ π r_inner² l\nQ. Self-inductance of long solenoid | 2. B² / (2μ₀)\nR. Mutual inductance of coaxial solenoids | 3. (r/2)(dB/dt)\nS. Induced E at r < R in uniform cylinder dB/dt | 4. μ₀ n² π r² l',
    options: [
      'P-2, Q-4, R-1, S-3',
      'P-2, Q-1, R-4, S-3',
      'P-4, Q-2, R-1, S-3',
      'P-2, Q-4, R-3, S-1'
    ],
    correctOption: 'P-2, Q-4, R-1, S-3',
    modelAnswer: 'Energy density u_B = B²/(2μ₀) (P-2). Long solenoid L = μ₀ n² A l (Q-4). Coaxial mutual inductance depends on inner cross-section (R-1). Faraday integral 2πr E = πr² dB/dt => E = (r/2)dB/dt (S-3).',
    stepMarking: [
      { step: 'Exact 4-way match P-2, Q-4, R-1, S-3', marks: '+3 / -1' }
    ],
    examinerTip: 'For coaxial solenoids, flux links only through the cross-sectional area of the smaller inner solenoid.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Silvered Equiconvex Lens',
    questionText: '[Paragraph Comprehension] An equiconvex glass lens (μ = 1.5) of focal length 20 cm in air has one of its curved surfaces silvered. Find the equivalent focal length and nature of the resulting optical system.',
    options: [
      '5 cm (concave mirror)',
      '10 cm (concave mirror)',
      '20 cm (convex mirror)',
      '4 cm (concave mirror)'
    ],
    correctOption: '5 cm (concave mirror)',
    modelAnswer: '1/f_L = (1.5 - 1)(2/R) = 1/R => R = 20 cm. Silvered face acts as concave mirror of focal length f_M = R/2 = 10 cm. Light passes through lens twice: 1/F_eq = 2/f_L + 1/f_M = 2/20 + 1/10 = 1/5 => F_eq = 5 cm (converging / concave mirror).',
    stepMarking: [
      { step: 'Find R = 20 cm => f_M = 10 cm => 1/F = 2/20 + 1/10 => 5 cm concave', marks: '+3 / -1' }
    ],
    examinerTip: 'Power of a silvered lens adds up: P_eq = 2 P_lens + P_mirror.'
  },

  // ==================== BLOCK 6 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Centre of Mass — Circular Cavity',
    questionText: '[SCQ] From a uniform circular disc of radius R, a smaller circular disc of radius R/2 is removed such that its rim passes through the centre of the original disc. Find the distance of the centre of mass of the remaining lamina from the original centre.',
    options: ['R / 6', 'R / 3', 'R / 4', 'R / 8'],
    correctOption: 'R / 6',
    modelAnswer: 'Area of cut disc = (1/4) area of whole disc, centred at +R/2. Negative mass method: x_cm = [-(M/4)(R/2)] / [M - M/4] = -R / 6. Magnitude = R/6.',
    stepMarking: [
      { step: 'Negative mass formula x_cm = -(M/4)(R/2)/(3M/4) => R/6', marks: '+3 / -1' }
    ],
    examinerTip: 'Remember area scales as r² while volume of a spherical cavity scales as r³!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'KTG — Adiabatic Mixing of Ideal Gases',
    questionText: '[SCQ] Two moles of Helium (C_V = 3R/2) at 300 K and one mole of Nitrogen (C_V = 5R/2) at 520 K are mixed inside an insulated rigid container. Find the final equilibrium temperature of the mixture.',
    options: ['400 K', '380 K', '410 K', '440 K'],
    correctOption: '400 K',
    modelAnswer: 'Rigid insulated vessel => W = 0, Q = 0 => internal energy conserved: (n₁C_V1 + n₂C_V2)T = n₁C_V1 T₁ + n₂C_V2 T₂. (3R + 2.5R)T = 3R(300) + 2.5R(520) = 900R + 1300R = 2200R => T = 2200 / 5.5 = 400 K.',
    stepMarking: [
      { step: 'Conserve total internal energy U => 5.5 T = 2200 => 400 K', marks: '+3 / -1' }
    ],
    examinerTip: 'Never forget that C_V differs between monatomic (3R/2) and diatomic (5R/2) gases.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Magnetic Torque on Hinged Wire Loop',
    questionText: '[MSQ — Select ALL Correct] A rigid square wire loop PQRS of side a and mass m carrying steady current I hangs vertically from a smooth horizontal hinge along top edge PQ in a uniform vertically upward magnetic field B₀ ĵ. At equilibrium, the plane makes angle θ with the vertical. Select ALL true statements:',
    options: [
      'A. Net magnetic force on the complete closed loop in the uniform field is zero',
      'B. Side arms QR and SP experience magnetic forces parallel to hinge PQ, producing zero torque about PQ',
      'C. Equilibrium angle θ satisfies tan θ = 2 I a B₀ / (m g)',
      'D. Magnitude of magnetic force on bottom edge RS varies as I a B₀ sin θ'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Closed loop in uniform B has net force = 0. Bottom edge RS remains horizontal and perpendicular to vertical B₀ for all θ, so force on RS is constant I a B₀ horizontally (D is false). Balancing torques about PQ: (I a B₀)(a cos θ) = mg(a/2) sin θ => tan θ = 2 I a B₀ / (mg).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Check the geometry of the bottom edge: as a hinged loop swings out, the bottom edge stays parallel to the hinge!'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Hydrostatics — Buoyancy & String Tension',
    questionText: '[Non-Negative Numerical] A cubical wooden block of side 10 cm and density 600 kg/m³ is held completely submerged beneath water (density 1000 kg/m³) by a light string tied to the bottom of the beaker (g = 10 m/s²). Find the tension in the string (in Newtons).',
    modelAnswer: '4',
    stepMarking: [
      { step: 'V = 10⁻³ m³ => T = F_B - mg = (1000 - 600) × 10⁻³ × 10 = 4 N', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'T + mg = F_B when anchored to the bottom of the tank.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Hollow Cylinder Rolling on Incline',
    questionText: '[Paragraph Comprehension] A thin-walled hollow cylinder (I = MR²) rolls without slipping from rest down a fixed rough inclined plane of inclination θ = 30° (g = 10 m/s²). Find the linear acceleration of its centre of mass.',
    options: ['2.5 m/s²', '5.0 m/s²', '3.33 m/s²', '1.25 m/s²'],
    correctOption: '2.5 m/s²',
    modelAnswer: 'a = g sin θ / (1 + I/(MR²)) = (10 × 0.5) / (1 + 1) = 2.5 m/s².',
    stepMarking: [
      { step: 'Use k²/R² = 1 for hollow cylinder => a = 2.5 m/s²', marks: '+3 / -1' }
    ],
    examinerTip: 'Hollow cylinder has the same k²/R² = 1 as a ring.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Minimum Friction for Pure Rolling',
    questionText: '[Paragraph Comprehension — Same Hollow Cylinder] For the same hollow cylinder rolling without slipping down the 30° incline, what is the minimum coefficient of static friction μ_min required to sustain pure rolling?',
    options: ['1 / (2√3)', '1 / √3', '1 / (3√3)', '√3 / 2'],
    correctOption: '1 / (2√3)',
    modelAnswer: 'Static friction f = Iα/R = Ma = (1/2)Mg sin 30°. Normal force N = Mg cos 30°. Pure rolling needs f ≤ μN => μ_min = (1/2) tan 30° = 1 / (2√3).',
    stepMarking: [
      { step: 'f = (1/2)Mg sin θ ≤ μ Mg cos θ => μ_min = (1/2) tan 30° = 1/(2√3)', marks: '+3 / -1' }
    ],
    examinerTip: 'Notice μ_min = [k²/(R² + k²)] tan θ for any rolling body on an incline.'
  }
];

/**
 * 42-question Chemistry bank arranged in 7 blocks of 6 questions (B0..B6).
 */
const ADV_CHEM_BANK: RawAdvQ[] = [
  // ==================== BLOCK 0 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Coordination & Jahn-Teller Distortion',
    questionText: '[SCQ] Which paramagnetic complex ion exhibits strong tetragonal Jahn-Teller elongation due to unsymmetrical occupancy of e_g orbitals in an octahedral crystal field?',
    options: ['[Cu(H₂O)₆]²⁺ (d⁹)', '[Ni(H₂O)₆]²⁺ (d⁸)', '[Cr(NH₃)₆]³⁺ (d³)', '[Zn(H₂O)₆]²⁺ (d¹⁰)'],
    correctOption: '[Cu(H₂O)₆]²⁺ (d⁹)',
    modelAnswer: 'Cu²⁺ (d⁹: t₂g⁶ e_g³) has uneven electron population in the doubly degenerate e_g orbitals, producing strong axial elongation.',
    stepMarking: [
      { step: 'Identify d⁹ (t₂g⁶ e_g³) asymmetry => [Cu(H₂O)₆]²⁺', marks: '+3 / -1' }
    ],
    examinerTip: 'Strong Jahn-Teller distortion occurs whenever e_g is asymmetrically filled: d⁹, high-spin d⁴, and low-spin d⁷.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Organic Stereochemistry & Finkelstein SN2',
    questionText: '[SCQ] Reaction of optically pure (R)-2-bromobutane with NaI in dry acetone (Finkelstein reaction) yields predominantly:',
    options: ['(S)-2-iodobutane', '(R)-2-iodobutane', 'Racemic (±)-2-iodobutane', 'But-1-ene'],
    correctOption: '(S)-2-iodobutane',
    modelAnswer: 'NaI in acetone drives clean bimolecular SN2 displacement (NaBr precipitates out) with 100% Walden inversion of configuration from (R) to (S).',
    stepMarking: [
      { step: 'SN2 backside attack + NaBr precipitation => (S)-2-iodobutane', marks: '+3 / -1' }
    ],
    examinerTip: 'Verify CIP priority before concluding R ↔ S: here I > Br > C₂H₅ > CH₃ > H preserves priority order.'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Solid State Bravais Lattices',
    questionText: '[MSQ — Select ALL Correct] In a face-centred cubic (FCC) crystal lattice of element X with edge length a and atomic radius r, identify ALL true geometric statements:',
    options: [
      'A. Packing fraction equals π / (3√2) ≈ 0.74',
      'B. Coordination number of each atom is 12',
      'C. Distance between two nearest tetrahedral voids along a cube axis is a / 2',
      'D. Octahedral voids reside exclusively at the 12 edge centres (none at body centre)'
    ],
    modelAnswer: 'MSQ Key: A, B, C. FCC has Z = 4 and √2 a = 4r => PF = 74%, CN = 12. Tetrahedral voids sit at (a/4, a/4, a/4) along body diagonals so adjacent voids along any axis are separated by a/2. Statement D is false because 1 octahedral void sits at the body centre (total 12×1/4 + 1 = 4).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'In FCC, each corner holds 1 tetrahedral void at distance √3a/4 along its body diagonal.'
  },
  {
    section: 'C',
    marks: 4,
    topic: '[ADV ONLY] Van der Waals Critical Compressibility',
    questionText: '[Non-Negative Numerical] A real gas obeys the van der Waals equation (P + a/V_m²)(V_m - b) = RT. Compute the exact value of 80 × Z_c, where Z_c = P_c V_c / (R T_c) is its critical compressibility factor.',
    modelAnswer: '30',
    stepMarking: [
      { step: 'For every van der Waals gas, Z_c = 3/8 => 80 × (3/8) = 30', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Z_c = 3/8 is universally independent of constants a and b.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Ellingham Diagram & Blast Furnace',
    questionText: '[Matrix Match Concept] Below 983 K in an Ellingham diagram, the intersection of the C → CO₂, 2CO → 2CO₂, and 2C → 2CO lines makes which reducing agent thermodynamically more effective for Fe₂O₃ inside the upper blast furnace zone?',
    options: [
      'CO(g) is better below 983 K; Coke (C) above 983 K',
      'Coke (C) is better below 983 K; CO(g) above 983 K',
      'SO₂(g) at all temperatures',
      'H₂O(g) above 983 K'
    ],
    correctOption: 'CO(g) is better below 983 K; Coke (C) above 983 K',
    modelAnswer: '2C + O₂ → 2CO has ΔS° > 0 (downward slope on ΔG° vs T plot), whereas 2CO + O₂ → 2CO₂ has ΔS° < 0 (upward slope). They cross near 983 K: CO is lower (better reducer) below 983 K, while C dominates above 983 K.',
    stepMarking: [
      { step: 'Read Ellingham slope intersection at 983 K => CO below, C above', marks: '+3 / -1' }
    ],
    examinerTip: 'Any metal oxide line lying ABOVE a reducing agent line on the Ellingham plot can be reduced by that agent.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Diborane Banana Bonding',
    questionText: '[Paragraph Comprehension] In diborane (B₂H₆), four terminal B–H bonds are conventional 2c–2e⁻ bonds while two bridging B–H–B units are 3c–2e⁻ banana bonds. How many valence electrons in total occupy the two bridging B–H–B banana bonds combined?',
    options: ['4', '2', '6', '8'],
    correctOption: '4',
    modelAnswer: 'Each 3c–2e⁻ B–H–B bridge contains 2 electrons; hence the two bridging bonds together hold 2 × 2 = 4 valence electrons.',
    stepMarking: [
      { step: 'Two 3c-2e⁻ bridges => 4 electrons total', marks: '+3 / -1' }
    ],
    examinerTip: 'B₂H₆ has 12 valence electrons total: 8 in 4 terminal B–H bonds and 4 in 2 bridging B–H–B bonds.'
  },

  // ==================== BLOCK 1 ====================
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] Surface Chemistry — Hardy-Schulze Rule',
    questionText: '[SCQ] For coagulating a negatively charged colloidal sol of As₂S₃, which electrolyte has the lowest flocculation value (highest coagulating power)?',
    options: ['AlCl₃', 'BaCl₂', 'NaCl', 'K₂SO₄'],
    correctOption: 'AlCl₃',
    modelAnswer: 'As₂S₃ is negatively charged, so coagulation power increases sharply with cation valency (Hardy-Schulze rule): Al³⁺ > Ba²⁺ > Na⁺, K⁺. AlCl₃ requires the smallest millimolar concentration.',
    stepMarking: [
      { step: 'Identify negative sol + highest cation charge Al³⁺ => AlCl₃', marks: '+3 / -1' }
    ],
    examinerTip: 'Flocculation value is inversely proportional to coagulating power!'
  },
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] Polymers — Condensation & H-Bonding',
    questionText: '[SCQ] Which synthetic polyamide is prepared by step-growth condensation of hexamethylenediamine and adipic acid and exhibits strong interchain hydrogen bonding?',
    options: ['Nylon 6,6', 'Nylon 6', 'Buna-S', 'Bakelite'],
    correctOption: 'Nylon 6,6',
    modelAnswer: 'Condensation of 6-carbon H₂N–(CH₂)₆–NH₂ and 6-carbon HOOC–(CH₂)₄–COOH gives Nylon 6,6.',
    stepMarking: [
      { step: '6C diamine + 6C diacid => Nylon 6,6', marks: '+3 / -1' }
    ],
    examinerTip: 'Nylon 6 uses a single monomer (caprolactam), whereas Nylon 6,6 uses two 6-carbon monomers.'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Boranes, Silicates & Phosphorus Oxoacids',
    questionText: '[MSQ — Select ALL Correct] Identify ALL correct inorganic structural statements:',
    options: [
      'A. Cyclic trimetaphosphoric acid (HPO₃)₃ contains three P–O–P linkages and three P=O bonds',
      'B. In pyrosilicate ion Si₂O₇⁶⁻, two SiO₄⁴⁻ tetrahedra share one corner oxygen atom',
      'C. In diborane (B₂H₆), all six hydrogen atoms lie in the same molecular plane',
      'D. Borazine (B₃N₃H₆) is isoelectronic and isostructural with benzene (C₆H₆)'
    ],
    modelAnswer: 'MSQ Key: A, B, D. In B₂H₆, the two bridging H atoms lie in a plane perpendicular to the four terminal H atoms (so C is false). Statements A, B, and D are exact structural facts.',
    stepMarking: [
      { step: 'Full A, B, D (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Remember: B₂H₆ is NOT planar; both borons are sp³ hybridized.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Electrochemistry — Nernst Equation',
    questionText: '[Non-Negative Numerical] For the galvanic cell Zn(s) | Zn²⁺(0.01 M) || Cu²⁺(1.0 M) | Cu(s) at 298 K, given E°_cell = 1.10 V and (2.303 RT)/F = 0.06 V, calculate 100 × E_cell.',
    modelAnswer: '116',
    stepMarking: [
      { step: 'E_cell = 1.10 - (0.06/2)log(0.01/1.0) = 1.10 + 0.06 = 1.16 V => 116', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Double-check Q = [Zn²⁺]/[Cu²⁺] = 10⁻² so log Q = -2, raising E_cell above E°_cell.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Multi-Step Aromatic Synthesis',
    questionText: '[Paragraph Comprehension] Benzene reacts with CH₃COCl/anhydrous AlCl₃ to form X, which upon Wolff-Kishner reduction (NH₂NH₂, KOH/ethylene glycol, Δ) gives Y. Vigorous oxidation of Y with hot alkaline KMnO₄ followed by H₃O⁺ yields Z. Identify Z.',
    options: ['Benzoic acid', 'Phenylacetic acid', 'Terephthalic acid', 'Benzaldehyde'],
    correctOption: 'Benzoic acid',
    modelAnswer: 'X = acetophenone, Y = ethylbenzene. Hot alkaline KMnO₄ cleaves any benzylic carbon bearing at least one α-H all the way to benzoate, giving benzoic acid (Z) on acidification.',
    stepMarking: [
      { step: 'Friedel-Crafts -> Wolff-Kishner -> Side-chain oxidation => Benzoic acid', marks: '+3 / -1' }
    ],
    examinerTip: 'Whether the alkyl chain is methyl, ethyl, or isopropyl, hot KMnO₄ oxidizes it to –COOH (except tert-butyl!).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Rosenmund Reduction Step',
    questionText: '[Paragraph Comprehension — Same Sequence] Treating product Z (benzoic acid) with SOCl₂ produces W, which undergoes Rosenmund reduction (H₂, Pd–BaSO₄) to yield:',
    options: ['Benzaldehyde', 'Benzyl alcohol', 'Toluene', 'Acetophenone'],
    correctOption: 'Benzaldehyde',
    modelAnswer: 'Z + SOCl₂ → C₆H₅COCl (W). Poisoned Pd–BaSO₄ stops reduction cleanly at the aldehyde stage, giving benzaldehyde.',
    stepMarking: [
      { step: 'Acyl chloride + H₂/Pd-BaSO₄ => Benzaldehyde', marks: '+3 / -1' }
    ],
    examinerTip: 'BaSO₄ poisons Pd so the aldehyde is not over-reduced to benzyl alcohol.'
  },

  // ==================== BLOCK 2 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Chemical Bonding — Molecular Orbital Theory',
    questionText: '[SCQ] According to Molecular Orbital Theory (MOT), which diatomic species possesses a bond order of 2.0 and is diamagnetic?',
    options: ['C₂', 'O₂', 'B₂', 'NO'],
    correctOption: 'C₂',
    modelAnswer: 'C₂ (12 electrons) has configuration σ1s² σ*1s² σ2s² σ*2s² (π2p_x² = π2p_y²): both bonding π orbitals are completely filled (no unpaired e⁻, diamagnetic) with BO = (8 - 4)/2 = 2.0.',
    stepMarking: [
      { step: '12-electron MOT filling gives BO = 2.0 and zero unpaired electrons => C₂', marks: '+3 / -1' }
    ],
    examinerTip: 'C₂ bond consists purely of two π bonds (s–p mixing lifts σ2p_z above π2p)!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Ionic Equilibrium — Acidic Buffer pH',
    questionText: '[SCQ] What is the pH of a buffer obtained by mixing 100 mL of 0.2 M CH₃COOH (pK_a = 4.74) with 100 mL of 0.1 M NaOH at 298 K?',
    options: ['4.74', '5.04', '4.44', '7.00'],
    correctOption: '4.74',
    modelAnswer: 'Initial millimoles: CH₃COOH = 20, NaOH = 10. Reaction leaves 10 mmol CH₃COOH and produces 10 mmol CH₃COONa. By Henderson-Hasselbalch: pH = pK_a + log(10/10) = 4.74.',
    stepMarking: [
      { step: 'Half-neutralization => [salt] = [acid] => pH = pK_a = 4.74', marks: '+3 / -1' }
    ],
    examinerTip: 'Half-equivalence point of a weak acid titration always gives pH = pK_a.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Organic — Haloform Reaction Scope',
    questionText: '[MSQ — Select ALL Correct] Which of the following organic compounds give a positive iodoform test (yellow precipitate of CHI₃ with I₂/NaOH)?',
    options: [
      'A. CH₃CHO',
      'B. CH₃CH(OH)CH₂CH₃',
      'C. C₆H₅COCH₃',
      'D. CH₃CH₂CHO'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Acetaldehyde (CH₃CHO), butan-2-ol (CH₃CH(OH)R), and acetophenone (CH₃COR) all contain the requisite CH₃CO– or CH₃CH(OH)– motif. Propanal (D) lacks this motif and fails.',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Ethanol and ethanal are the ONLY primary alcohol and aldehyde that give a positive iodoform test.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Chemical Kinetics — First-Order Half-Life',
    questionText: '[Non-Negative Numerical] A first-order reaction reaches 75% completion in 60 minutes. How many minutes are required for the reaction to reach 87.5% completion?',
    modelAnswer: '90',
    stepMarking: [
      { step: '75% = 2 t_(1/2) = 60 min => t_(1/2) = 30 min; 87.5% = 3 t_(1/2) = 90 min', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Remaining fraction 1/4 = (1/2)² takes 2 half-lives; 1/8 = (1/2)³ takes 3 half-lives.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Qualitative Salt Analysis',
    questionText: '[Matrix Match] Match the aqueous cation/test (Column I) with its confirmatory precipitate colour (Column II):\nP. Fe³⁺ + K₄[Fe(CN)₆] | 1. Rosy red\nQ. Cu²⁺ + K₄[Fe(CN)₆] | 2. Prussian blue\nR. Ni²⁺ + DMG / NH₄OH | 3. White\nS. Zn²⁺ + H₂S / NH₄OH | 4. Chocolate brown',
    options: [
      'P-2, Q-4, R-1, S-3',
      'P-4, Q-2, R-1, S-3',
      'P-2, Q-4, R-3, S-1',
      'P-1, Q-4, R-2, S-3'
    ],
    correctOption: 'P-2, Q-4, R-1, S-3',
    modelAnswer: 'Fe³⁺ gives Prussian blue Fe₄[Fe(CN)₆]₃ (P-2); Cu²⁺ gives chocolate-brown Cu₂[Fe(CN)₆] (Q-4); Ni²⁺ with dimethylglyoxime gives rosy-red chelate (R-1); ZnS is white (S-3).',
    stepMarking: [
      { step: 'Exact match P-2, Q-4, R-1, S-3', marks: '+3 / -1' }
    ],
    examinerTip: 'ZnS is the only common white sulphide in Group IV qualitative analysis (MnS is buff/flesh-coloured).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Redox Equivalent Stoichiometry',
    questionText: '[Paragraph Comprehension] In acidic solution, permanganate ion (MnO₄⁻) reduces to Mn²⁺ while oxidizing oxalate (C₂O₄²⁻) to CO₂ and Fe²⁺ to Fe³⁺. How many moles of KMnO₄ are needed to completely oxidize 5 moles of ferrous oxalate (FeC₂O₄) in acidic medium?',
    options: ['3 moles', '2 moles', '5 moles', '1.5 moles'],
    correctOption: '3 moles',
    modelAnswer: 'One mole of FeC₂O₄ loses 1e⁻ (Fe²⁺→Fe³⁺) + 2e⁻ (C₂O₄²⁻→2CO₂) = 3 electrons (n-factor = 3). Five moles supply 15 equivalents. Since KMnO₄ accepts 5e⁻ per mole, moles required = 15 / 5 = 3 moles.',
    stepMarking: [
      { step: 'Equivalents of FeC₂O₄ = 5 × 3 = 15 => Moles of KMnO₄ = 15/5 = 3', marks: '+3 / -1' }
    ],
    examinerTip: 'Remember both Fe²⁺ AND C₂O₄²⁻ get oxidized in FeC₂O₄, giving n-factor = 1 + 2 = 3!'
  },

  // ==================== BLOCK 3 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Chemical Thermodynamics — Gibbs Spontaneity',
    questionText: '[SCQ] For an endothermic reaction, ΔH° = +40 kJ/mol and ΔS° = +100 J/(K·mol) (assumed temperature-independent). Above what minimum temperature does the reaction become spontaneous?',
    options: ['400 K', '250 K', '500 K', '300 K'],
    correctOption: '400 K',
    modelAnswer: 'Spontaneity requires ΔG° = ΔH° - TΔS° < 0 => T > ΔH°/ΔS° = 40000 / 100 = 400 K.',
    stepMarking: [
      { step: 'Convert 40 kJ to 40,000 J => T_eq = 40,000 / 100 = 400 K', marks: '+3 / -1' }
    ],
    examinerTip: 'Always convert ΔH° (kJ) and ΔS° (J/K) to matching energy units before dividing!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'd-Block — Chromate & Dichromate Equilibrium',
    questionText: '[SCQ] Acidifying an aqueous yellow solution of K₂CrO₄ turns it orange due to formation of Cr₂O₇²⁻. What are the oxidation state of Cr and local geometry around each Cr atom in both ions?',
    options: [
      '+6 in both; tetrahedral around each Cr',
      '+6 and +3; octahedral',
      '+5 in both; square planar',
      '+6 and +7; tetrahedral'
    ],
    correctOption: '+6 in both; tetrahedral around each Cr',
    modelAnswer: '2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O is a non-redox pH equilibrium: Cr remains +6 and tetrahedrally coordinated in both species (dichromate shares one bridging oxygen at 126°).',
    stepMarking: [
      { step: 'Non-redox condensation preserves +6 oxidation state and tetrahedral Cr', marks: '+3 / -1' }
    ],
    examinerTip: 'Chromate-dichromate interconversion is NOT a redox reaction.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'GOC — Hückel Aromaticity',
    questionText: '[MSQ — Select ALL Correct] According to Hückel’s (4n + 2)π-electron rule, which of the following cyclic conjugated species are AROMATIC?',
    options: [
      'A. Cyclopentadienyl anion (C₅H₅⁻)',
      'B. Tropylium cation (C₇H₇⁺)',
      'C. Cyclopropenyl cation (C₃H₃⁺)',
      'D. Cyclooctatetraene (C₈H₈)'
    ],
    modelAnswer: 'MSQ Key: A, B, C. C₅H₅⁻ (6π e⁻), C₇H₇⁺ (6π e⁻), and C₃H₃⁺ (2π e⁻) are planar, fully conjugated, and satisfy (4n + 2)π e⁻. Cyclooctatetraene has 8π e⁻ and adopts a non-planar tub conformation to avoid antiaromaticity (non-aromatic).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Cyclooctatetraene is non-aromatic (tub-shaped), not antiaromatic, at room temperature.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Solutions — Boiling Point Elevation & van’t Hoff Factor',
    questionText: '[Non-Negative Numerical] 0.1 mol of K₄[Fe(CN)₆] (80% dissociated in water) is dissolved in 1 kg of water (K_b = 0.5 K·kg/mol). Calculate 100 × ΔT_b (where ΔT_b is the boiling point elevation in Kelvin).',
    modelAnswer: '21',
    stepMarking: [
      { step: 'n = 5 ions => i = 1 + (5 - 1)(0.8) = 4.2 => ΔT_b = 4.2 × 0.5 × 0.1 = 0.21 K => 21', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'K₄[Fe(CN)₆] dissociates into 4 K⁺ + 1 [Fe(CN)₆]⁴⁻ = 5 ions (the complex anion does not break up!).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Diazonium Coupling Reaction',
    questionText: '[Paragraph Comprehension] Aniline is treated with NaNO₂ + HCl at 0–5 °C to give benzenediazonium chloride (P). Coupling of P with phenol in mildly alkaline medium (pH 9–10) yields:',
    options: [
      'p-Hydroxyazobenzene (orange dye)',
      'p-Aminoazobenzene (yellow dye)',
      'Phenyl benzoate',
      'Diphenyl ether'
    ],
    correctOption: 'p-Hydroxyazobenzene (orange dye)',
    modelAnswer: 'In weakly basic medium, phenoxide ion activates the para position for electrophilic attack by PhN₂⁺, yielding orange p-hydroxyazobenzene.',
    stepMarking: [
      { step: 'Diazonium + phenoxide coupling at para position => orange azo dye', marks: '+3 / -1' }
    ],
    examinerTip: 'Phenol couples in mildly alkaline pH (9–10), whereas aniline couples in mildly acidic pH (4–5).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Deamination of Diazonium Salt',
    questionText: '[Paragraph Comprehension — Same Diazonium Salt] When the same aqueous benzenediazonium chloride (P) is warmed with hypophosphorous acid (H₃PO₂) and water, the major organic product is:',
    options: ['Benzene', 'Phenol', 'Diphenyl', 'Aniline'],
    correctOption: 'Benzene',
    modelAnswer: 'H₃PO₂ + H₂O reduces the diazonium group cleanly to H (releasing N₂ and H₃PO₃), converting PhN₂⁺Cl⁻ into benzene.',
    stepMarking: [
      { step: 'Reductive deamination with H₃PO₂/H₂O => Benzene', marks: '+3 / -1' }
    ],
    examinerTip: 'H₃PO₂ (or CH₃CH₂OH) is the classic reagent to remove an –NH₂ group from an aromatic ring via diazotization.'
  },

  // ==================== BLOCK 4 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Atomic Structure — Radial & Angular Nodes',
    questionText: '[SCQ] What are the numbers of radial (spherical) nodes and angular (nodal planes) nodes respectively in a 4d atomic orbital?',
    options: ['1 and 2', '2 and 1', '2 and 2', '3 and 2'],
    correctOption: '1 and 2',
    modelAnswer: 'For 4d: n = 4, l = 2. Radial nodes = n - l - 1 = 4 - 2 - 1 = 1. Angular nodes = l = 2.',
    stepMarking: [
      { step: 'Radial = n - l - 1 = 1; Angular = l = 2', marks: '+3 / -1' }
    ],
    examinerTip: 'Total nodes in any orbital always equal n - 1 (here 4 - 1 = 3).'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Organic — Reductive Ozonolysis',
    questionText: '[SCQ] Reductive ozonolysis (O₃ followed by Zn/H₂O) of a symmetrical alkene C₆H₁₂ produces exclusively 2 moles of propanone per mole of alkene. Identify the alkene.',
    options: [
      '2,3-dimethylbut-2-ene',
      'hex-3-ene',
      '2-methylpent-2-ene',
      '3-methylpent-2-ene'
    ],
    correctOption: '2,3-dimethylbut-2-ene',
    modelAnswer: 'Rejoining two propanone carbonyls (CH₃)₂C=O + O=C(CH₃)₂ gives (CH₃)₂C=C(CH₃)₂, whose IUPAC name is 2,3-dimethylbut-2-ene.',
    stepMarking: [
      { step: 'Join two (CH₃)₂C= fragments => 2,3-dimethylbut-2-ene', marks: '+3 / -1' }
    ],
    examinerTip: 'Work backwards from ozonolysis by deleting the two =O atoms and fusing the carbonyl carbons with a C=C bond.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Coordination — Stereoisomerism in [Co(en)₂Cl₂]⁺',
    questionText: '[MSQ — Select ALL Correct] Consider the octahedral complex ion [Co(en)₂Cl₂]⁺ (en = ethylenediamine). Identify ALL correct stereochemical statements:',
    options: [
      'A. It exhibits geometrical isomerism (cis and trans forms)',
      'B. The cis-isomer is chiral and exists as an enantiomeric d/l pair',
      'C. The trans-isomer possesses a plane of symmetry and is optically inactive',
      'D. Total number of stereoisomers of this complex is 4'
    ],
    modelAnswer: 'MSQ Key: A, B, C. The complex has two geometrical isomers (cis and trans). Trans-[Co(en)₂Cl₂]⁺ has mirror planes and is achiral, whereas cis-[Co(en)₂Cl₂]⁺ is chiral (d and l). Total stereoisomers = 3 (not 4, so D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: '[M(AA)₂b₂] has 2 geometrical isomers and 3 total stereoisomers.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Chemical Equilibrium — Kp & Degree of Dissociation',
    questionText: '[Non-Negative Numerical] For the equilibrium PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), K_p = 3 atm at temperature T. If the total equilibrium pressure is P = 9 atm, find the percentage dissociation (100 × α) of PCl₅.',
    modelAnswer: '50',
    stepMarking: [
      { step: 'K_p = α² P / (1 - α²) => 3 = 9α² / (1 - α²) => 4α² = 1 => α = 0.50 => 50%', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Starting from 1 mole PCl₅, total equilibrium moles = 1 + α, giving partial pressure product P_PCl3 P_Cl2 / P_PCl5 = α²P / (1 - α²).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Named Organic Reactions',
    questionText: '[Matrix Match] Match the named reaction (Column I) with its signature product (Column II):\nP. Reimer-Tiemann reaction | 1. Salicylic acid\nQ. Kolbe-Schmitt reaction | 2. Primary aliphatic amine\nR. Etard oxidation of toluene | 3. Salicylaldehyde\nS. Gabriel phthalimide synthesis | 4. Benzaldehyde',
    options: [
      'P-3, Q-1, R-4, S-2',
      'P-1, Q-3, R-4, S-2',
      'P-3, Q-1, R-2, S-4',
      'P-4, Q-1, R-3, S-2'
    ],
    correctOption: 'P-3, Q-1, R-4, S-2',
    modelAnswer: 'Reimer-Tiemann (phenol + CHCl₃/KOH) → salicylaldehyde (P-3). Kolbe-Schmitt (phenoxide + CO₂) → salicylic acid (Q-1). Etard (toluene + CrO₂Cl₂) → benzaldehyde (R-4). Gabriel synthesis yields pure 1° aliphatic amines (S-2).',
    stepMarking: [
      { step: 'Exact match P-3, Q-1, R-4, S-2', marks: '+3 / -1' }
    ],
    examinerTip: 'Gabriel phthalimide synthesis cannot prepare aryl amines like aniline because Ar–X resists SN2.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Biomolecules — Reducing Sugars & Mutarotation',
    questionText: '[Paragraph Comprehension] Which of the following carbohydrates neither undergoes mutarotation in aqueous solution nor reduces Tollens’ reagent?',
    options: ['Sucrose', 'Maltose', 'Lactose', 'D-Glucose'],
    correctOption: 'Sucrose',
    modelAnswer: 'In sucrose, the glycosidic linkage connects C1 of α-D-glucose to C2 of β-D-fructose, locking both anomeric carbons so no free hemiacetal/hemiketal remains to open or reduce Tollens’ reagent.',
    stepMarking: [
      { step: 'Identify sucrose as non-reducing disaccharide lacking free hemiacetal', marks: '+3 / -1' }
    ],
    examinerTip: 'All monosaccharides, maltose, and lactose are reducing sugars; sucrose is the classic exception.'
  },

  // ==================== BLOCK 5 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'p-Block — VSEPR Geometry of XeOF₄',
    questionText: '[SCQ] Using VSEPR theory, determine the hybridization of the central Xe atom and molecular shape of XeOF₄.',
    options: [
      'sp³d², square pyramidal',
      'sp³d, trigonal bipyramidal',
      'sp³d², octahedral',
      'sp³d³, pentagonal planar'
    ],
    correctOption: 'sp³d², square pyramidal',
    modelAnswer: 'Xe has 8 valence electrons: 4 used in single bonds to F, 2 in double bond to O, leaving 1 lone pair. Steric number = 5 σ-bonds + 1 LP = 6 (sp³d²) => square pyramidal molecular geometry.',
    stepMarking: [
      { step: '5 bond pairs + 1 lone pair => sp³d², square pyramidal', marks: '+3 / -1' }
    ],
    examinerTip: 'Remember π bonds (Xe=O) do NOT add to the steric number in VSEPR.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Organic — Ortho Effect in Benzoic Acids',
    questionText: '[SCQ] Which substituted benzoic acid has the lowest pK_a (strongest acidity) in aqueous medium at 298 K?',
    options: [
      '2-nitrobenzoic acid',
      '4-nitrobenzoic acid',
      '3-nitrobenzoic acid',
      'Benzoic acid'
    ],
    correctOption: '2-nitrobenzoic acid',
    modelAnswer: 'Due to the ortho effect (steric inhibition of resonance in the neutral acid + strong -I effect + stabilization of carboxylate), 2-nitrobenzoic acid (pK_a ≈ 2.17) is stronger than both 4-nitro (3.43) and 3-nitro (3.45).',
    stepMarking: [
      { step: 'Ortho effect + strong -I make 2-nitrobenzoic acid strongest', marks: '+3 / -1' }
    ],
    examinerTip: 'Virtually any ortho-substituted benzoic acid is stronger than unsubstituted benzoic acid.'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Surface Chemistry — Adsorption & Colloids',
    questionText: '[MSQ — Select ALL Correct] Identify ALL correct statements regarding adsorption isotherms and colloidal systems:',
    options: [
      'A. Chemisorption is unimolecular, highly specific, and exhibits higher enthalpy of adsorption (80–240 kJ/mol) than physisorption',
      'B. In Freundlich isotherm x/m = k P^(1/n), at very high pressure 1/n approaches 0 so adsorption becomes pressure-independent',
      'C. Lyophobic sols are stabilized primarily by solvation and are unaffected by added electrolytes',
      'D. Micelle formation by soaps occurs only above the Kraft temperature (T_k) and above the critical micelle concentration (CMC)'
    ],
    modelAnswer: 'MSQ Key: A, B, D. Lyophobic sols owe their stability to surface electrical charge and are easily coagulated by electrolytes (so C is false). A, B, and D are standard surface chemistry facts.',
    stepMarking: [
      { step: 'Full A, B, D (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Physisorption is multilayer and reversible; chemisorption is monolayer and irreversible.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Ionic Equilibrium — Common-Ion Solubility',
    questionText: '[Non-Negative Numerical] The solubility product K_sp of AgCl at 298 K is 1.8 × 10⁻¹⁰. Its molar solubility in 0.09 M aqueous NaCl solution is x × 10⁻⁹ M. Find x.',
    modelAnswer: '2',
    stepMarking: [
      { step: 's(s + 0.09) ≈ s(0.09) = 1.8 × 10⁻¹⁰ => s = 2.0 × 10⁻⁹ M => x = 2', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Neglect s relative to the common ion concentration [Cl⁻] = 0.09 M since s ≪ 0.09.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Ester + Grignard Reaction',
    questionText: '[Paragraph Comprehension] Ethyl acetate (CH₃COOC₂H₅) is treated with excess (2 equivalents) CH₃MgBr in dry diethyl ether followed by acidic workup (H₃O⁺). The major organic product is:',
    options: [
      '2-methylpropan-2-ol',
      'propan-2-ol',
      'propanone',
      'butan-2-ol'
    ],
    correctOption: '2-methylpropan-2-ol',
    modelAnswer: '1st eq CH₃MgBr converts ethyl acetate into acetone (propanone), which is more reactive than the ester and rapidly adds a 2nd eq CH₃MgBr to form tert-butyl alcohol (2-methylpropan-2-ol).',
    stepMarking: [
      { step: 'Double Grignard addition to ester => 3° alcohol 2-methylpropan-2-ol', marks: '+3 / -1' }
    ],
    examinerTip: 'Esters react twice with Grignard reagents to produce tertiary alcohols with two identical alkyl groups.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Dehydration of 3° Alcohol',
    questionText: '[Paragraph Comprehension — Same Product] When 2-methylpropan-2-ol obtained above is passed over heated copper at 573 K (or heated with H₂SO₄ at 443 K), the major product formed is:',
    options: [
      '2-methylpropene',
      '2-methylpropanal',
      '2-methylpropanone',
      'di-tert-butyl ether'
    ],
    correctOption: '2-methylpropene',
    modelAnswer: 'Tertiary alcohols have no α-H to oxidize over Cu/573 K and instead undergo clean dehydration to yield the alkene 2-methylpropene.',
    stepMarking: [
      { step: '3° alcohol + Cu/573 K => dehydration => 2-methylpropene', marks: '+3 / -1' }
    ],
    examinerTip: 'Over Cu/573 K: 1° alcohol → aldehyde, 2° alcohol → ketone, 3° alcohol → alkene!'
  },

  // ==================== BLOCK 6 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Thermochemistry — Bond Enthalpy Calculation',
    questionText: '[SCQ] Given average bond enthalpies BE(H–H) = 436 kJ/mol, BE(Cl–Cl) = 242 kJ/mol, and BE(H–Cl) = 431 kJ/mol, calculate the enthalpy of formation Δ_f H° of HCl(g).',
    options: ['-92 kJ/mol', '-184 kJ/mol', '+92 kJ/mol', '-242 kJ/mol'],
    correctOption: '-92 kJ/mol',
    modelAnswer: 'For H₂ + Cl₂ → 2HCl: ΔH_rxn = ΣBE(reactants) - ΣBE(products) = (436 + 242) - 2(431) = 678 - 862 = -184 kJ. Thus per mole of HCl, Δ_f H° = -184/2 = -92 kJ/mol.',
    stepMarking: [
      { step: 'Compute ΔH_rxn = -184 kJ for 2 mol => -92 kJ/mol HCl', marks: '+3 / -1' }
    ],
    examinerTip: 'Δ_f H° is defined per 1 mole of product formed from standard-state elements.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Organic — SN1 Carbocation Rearrangement',
    questionText: '[SCQ] Solvolysis of 3-bromo-2,2-dimethylbutane in aqueous ethanol proceeds through an SN1 mechanism with a 1,2-methyl shift to yield predominantly:',
    options: [
      '2,3-dimethylbutan-2-ol',
      '3,3-dimethylbutan-2-ol',
      '2,2-dimethylbutan-1-ol',
      '2-methylpentan-2-ol'
    ],
    correctOption: '2,3-dimethylbutan-2-ol',
    modelAnswer: 'Loss of Br⁻ produces a 2° carbocation (CH₃)₃C–C⁺H–CH₃, which undergoes a fast 1,2-methyl shift to the more stable 3° carbocation (CH₃)₂C⁺–CH(CH₃)₂; trapping by H₂O gives 2,3-dimethylbutan-2-ol.',
    stepMarking: [
      { step: '2° carbocation -> 1,2-CH₃ shift -> 3° alcohol 2,3-dimethylbutan-2-ol', marks: '+3 / -1' }
    ],
    examinerTip: 'Always check adjacent quaternary/tertiary carbons for 1,2-hydride or 1,2-methyl shifts in SN1/E1.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electrochemistry — Kohlrausch & Faraday Laws',
    questionText: '[MSQ — Select ALL Correct] Select ALL correct statements regarding electrolytic conduction and electrolysis:',
    options: [
      'A. Molar conductivity Λ_m increases upon dilution for both strong and weak electrolytes',
      'B. Specific conductivity κ decreases upon dilution because the number of ions per unit volume decreases',
      'C. Passing 1 Faraday (96,500 C) of charge deposits 0.5 mole of copper from aqueous CuSO₄',
      'D. Limiting molar conductivity Λ_m° of CH₃COOH can be obtained directly by linear extrapolation of Λ_m vs √c to zero'
    ],
    modelAnswer: 'MSQ Key: A, B, C. On dilution κ drops (fewer ions/cm³) while Λ_m = 1000κ/M rises for both strong and weak electrolytes. Cu²⁺ takes 2e⁻, so 1 F deposits 0.5 mol Cu. For weak electrolytes like CH₃COOH, Λ_m rises steeply at low c so linear extrapolation fails and Kohlrausch’s law is required (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Kohlrausch’s law Λ_m°(CH₃COOH) = Λ_m°(CH₃COONa) + Λ_m°(HCl) - Λ_m°(NaCl) is essential for weak electrolytes.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Mole Concept — Oleum Labelling',
    questionText: '[Non-Negative Numerical] A sample of oleum (H₂SO₄ + free SO₃) is labelled "109%". Find the mass percentage of free SO₃ present in this oleum sample.',
    modelAnswer: '40',
    stepMarking: [
      { step: '9 g H₂O = 0.5 mol combines with 0.5 mol free SO₃ = 40 g in 100 g oleum => 40%', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Shortcut: % free SO₃ = (80/18) × (% label - 100) = (80/18) × 9 = 40%.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Polymer Monomers & Copolymers',
    questionText: '[Matrix Match] Match the polymer (Column I) with its monomer pair (Column II):\nP. Bakelite | 1. 1,3-Butadiene + Acrylonitrile\nQ. Glyptal | 2. Phenol + Formaldehyde\nR. Buna-N | 3. 3-Hydroxybutyric acid + 3-Hydroxyvaleric acid\nS. PHBV (biodegradable) | 4. Ethylene glycol + Phthalic acid',
    options: [
      'P-2, Q-4, R-1, S-3',
      'P-2, Q-1, R-4, S-3',
      'P-4, Q-2, R-1, S-3',
      'P-2, Q-4, R-3, S-1'
    ],
    correctOption: 'P-2, Q-4, R-1, S-3',
    modelAnswer: 'Bakelite = phenol + HCHO (P-2); Glyptal = ethylene glycol + phthalic acid (Q-4); Buna-N = butadiene + acrylonitrile (R-1); PHBV = 3-hydroxybutyric + 3-hydroxyvaleric acid (S-3).',
    stepMarking: [
      { step: 'Exact match P-2, Q-4, R-1, S-3', marks: '+3 / -1' }
    ],
    examinerTip: 'Distinguish Glyptal (phthalic acid, 1,2) from Dacron/Terylene (terephthalic acid, 1,4).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Polymer Molar Mass Averages',
    questionText: '[Paragraph Comprehension] A synthetic polymer sample contains 20 molecules each of molar mass 10,000 g/mol and 30 molecules each of molar mass 20,000 g/mol. Compute its number-average molar mass (M̄_n).',
    options: ['16,000 g/mol', '17,500 g/mol', '15,000 g/mol', '18,000 g/mol'],
    correctOption: '16,000 g/mol',
    modelAnswer: 'M̄_n = Σ(N_i M_i) / Σ N_i = [20(10,000) + 30(20,000)] / (20 + 30) = 800,000 / 50 = 16,000 g/mol.',
    stepMarking: [
      { step: 'Compute Σ(N_i M_i)/Σ N_i = 16,000 g/mol', marks: '+3 / -1' }
    ],
    examinerTip: 'For polydisperse polymers, weight-average M̄_w is always strictly greater than number-average M̄_n (PDI > 1).'
  }
];

/**
 * 42-question Mathematics bank arranged in 7 blocks of 6 questions (B0..B6).
 */
const ADV_MATH_BANK: RawAdvQ[] = [
  // ==================== BLOCK 0 ====================
  {
    section: 'A',
    marks: 3,
    topic: '[ADV ONLY] 3D Planes & Oblique Line Distance',
    questionText: '[SCQ] Find the distance of the point P(1, -2, 3) from the plane x - y + z = 5 measured PARALLEL to the line x/2 = y/3 = z/-6.',
    options: ['1 unit', '2 units', '7 units', '3 units'],
    correctOption: '1 unit',
    modelAnswer: 'Direction ratios of line are (2, 3, -6) with modulus √(4 + 9 + 36) = 7. Parametric point along ray is (1 + 2t, -2 + 3t, 3 - 6t). Substituting in the plane: (1 + 2t) - (-2 + 3t) + (3 - 6t) = 5 => 6 - 7t = 5 => t = 1/7. Distance = 7|t| = 1 unit.',
    stepMarking: [
      { step: 'Intersect ray (1+2t, -2+3t, 3-6t) with plane => t = 1/7 => 1 unit', marks: '+3 / -1' }
    ],
    examinerTip: 'Never confuse perpendicular distance to a plane with distance measured along an oblique line!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Definite Integrals — King’s Property',
    questionText: '[SCQ] Evaluate the definite integral I = ∫₀^π [x sin x / (1 + cos² x)] dx.',
    options: ['π² / 4', 'π² / 2', 'π / 2', 'π²'],
    correctOption: 'π² / 4',
    modelAnswer: 'Using King’s property f(x) → f(π - x): 2I = π ∫₀^π [sin x / (1 + cos² x)] dx. Put cos x = t => 2I = π ∫₋₁¹ dt/(1 + t²) = π (π/2) => I = π² / 4.',
    stepMarking: [
      { step: 'Eliminate x via King’s property => arctan(cos x) => π²/4', marks: '+3 / -1' }
    ],
    examinerTip: 'Whenever x multiplies a symmetric function f(sin x, cos² x) on [0, π], King’s property immediately eliminates x.'
  },
  {
    section: 'B',
    marks: 4,
    topic: '[ADV ONLY] Box & Vector Triple Product',
    questionText: '[MSQ — Select ALL Correct] For three non-coplanar unit vectors a, b, c satisfying [a b c] = V ≠ 0, select ALL valid vector identities:',
    options: [
      'A. [a × b, b × c, c × a] = V²',
      'B. [a + b, b + c, c + a] = 2V',
      'C. a × (b × c) + b × (c × a) + c × (a × b) = 0',
      'D. Volume of the tetrahedron formed by coterminous edges a, b, c is |V| / 3'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Reciprocal triad determinant equals V², cyclic sum box equals 2V, and the Jacobi identity C vanishes identically. Tetrahedron volume is |V|/6 (not |V|/3, so D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Parallelepiped volume = |[a b c]|, Tetrahedron volume = |[a b c]| / 6.'
  },
  {
    section: 'C',
    marks: 4,
    topic: '[ADV ONLY] Cayley-Hamilton & Matrix Powers',
    questionText: '[Non-Negative Numerical] Let A be a 2×2 real matrix with trace(A) = 5 and det(A) = 6. Find the value of trace(A² - 5A + 6I) + 6 × trace(A⁻¹).',
    modelAnswer: '5',
    stepMarking: [
      { step: 'By Cayley-Hamilton, A² - 5A + 6I = 0. Also 6A⁻¹ = 5I - A => trace(6A⁻¹) = 10 - 5 = 5', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'For any invertible 2×2 matrix A, trace(A⁻¹) = trace(A) / det(A) immediately.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Argand Plane Rotation (Coni’s Theorem)',
    questionText: '[Paragraph Comprehension] Complex numbers z₁, z₂, z₃ form the vertices of an equilateral triangle in anti-clockwise order on the Argand plane with z₁ = 1 + i√3 and z₂ = 0. Find z₃.',
    options: ['-1 + i√3', '-1 - i√3', '2', '√3 + i'],
    correctOption: '-1 + i√3',
    modelAnswer: 'Rotating vector (z₁ - z₂) anti-clockwise by π/3 about z₂ = 0 gives z₃ = z₁ e^(iπ/3) = (2 e^(iπ/3)) e^(iπ/3) = 2 e^(i2π/3) = -1 + i√3.',
    stepMarking: [
      { step: 'Apply Coni rotation z₃ - z₂ = (z₁ - z₂)e^(iπ/3) => -1 + i√3', marks: '+3 / -1' }
    ],
    examinerTip: 'Verify orientation carefully: anti-clockwise rotation multiplies by +e^(iπ/3).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Equilateral Triangle Complex Identity',
    questionText: '[Paragraph Comprehension — Same Triangle] For the equilateral triangle with vertices z₁ = 1 + i√3, z₂ = 0, and z₃ = -1 + i√3, evaluate z₁² + z₂² + z₃² - z₁z₂ - z₂z₃ - z₃z₁.',
    options: ['0', '4', '4√3 i', '-4'],
    correctOption: '0',
    modelAnswer: 'For any equilateral triangle on the Argand plane, (z₂ - z₁)/(z₃ - z₂) = (z₃ - z₂)/(z₁ - z₃), which rearranges identically to z₁² + z₂² + z₃² - z₁z₂ - z₂z₃ - z₃z₁ = 0.',
    stepMarking: [
      { step: 'Apply equilateral identity z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁ => 0', marks: '+3 / -1' }
    ],
    examinerTip: 'Equivalently, (z₁ + ωz₂ + ω²z₃)(z₁ + ω²z₂ + ωz₃) = 0!'
  },

  // ==================== BLOCK 1 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Probability — Bayes’ Theorem',
    questionText: '[SCQ] Bag I contains 3 red and 2 black balls, while Bag II contains 2 red and 3 black balls. One bag is chosen uniformly at random and a ball drawn is found to be red. What is the probability that it came from Bag I?',
    options: ['3 / 5', '2 / 5', '1 / 2', '3 / 10'],
    correctOption: '3 / 5',
    modelAnswer: 'By Bayes’ theorem, P(I | R) = [(1/2)(3/5)] / [(1/2)(3/5) + (1/2)(2/5)] = (3/5) / (3/5 + 2/5) = 3/5.',
    stepMarking: [
      { step: 'Compute conditional ratio (3/5)/(3/5 + 2/5) = 3/5', marks: '+3 / -1' }
    ],
    examinerTip: 'When priors are equal, Bayes’ ratio simplifies directly to likelihood_1 / sum of likelihoods.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Differential Equations — Linear First Order',
    questionText: '[SCQ] Solve the initial value problem dy/dx + y tan x = sec x, given y(0) = 0 (for |x| < π/2).',
    options: ['y = sin x', 'y = cos x', 'y = tan x', 'y = x cos x'],
    correctOption: 'y = sin x',
    modelAnswer: 'Integrating factor IF = e^(∫ tan x dx) = sec x. Multiplying through gives d(y sec x)/dx = sec² x => y sec x = tan x + C. Setting y(0) = 0 yields C = 0, so y = sin x.',
    stepMarking: [
      { step: 'IF = sec x => y sec x = tan x + C => y = sin x', marks: '+3 / -1' }
    ],
    examinerTip: 'Always verify the initial condition y(0) = 0 on the final general solution.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Continuity & Differentiability of Modulus Sums',
    questionText: '[MSQ — Select ALL Correct] Consider the real-valued function f(x) = |x - 1| + |x - 2| for x ∈ ℝ. Which statement(s) hold?',
    options: [
      'A. f(x) is continuous everywhere on ℝ',
      'B. f(x) is differentiable on the open interval (1, 2) with f′(x) = 0',
      'C. f(x) is non-differentiable at exactly two points: x = 1 and x = 2',
      'D. f(x) is strictly increasing on [1, 2]'
    ],
    modelAnswer: 'MSQ Key: A, B, C. On (1, 2), f(x) = (x - 1) + (2 - x) = 1 (constant!), so f′(x) = 0 on (1, 2) and f is NOT strictly increasing on [1, 2] (D is false). Corners occur at x = 1 and x = 2.',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Sketching piecewise-linear graphs of |x - a| + |x - b| resolves flat minima and corner points instantaneously.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Permutations & Derangements',
    questionText: '[Non-Negative Numerical] Five distinct letters are placed into five corresponding addressed envelopes at random. Find the total number of ways in which NONE of the letters goes into its correct envelope.',
    modelAnswer: '44',
    stepMarking: [
      { step: 'D₅ = 5!(1 - 1 + 1/2! - 1/3! + 1/4! - 1/5!) = 60 - 20 + 5 - 1 = 44', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Memorize small derangement counts: D₁ = 0, D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Conic Sections Properties',
    questionText: '[Matrix Match] Match Column I with Column II:\nP. Number of real normals from (3, 0) to y² = 4x | 1. 5\nQ. Eccentricity of a rectangular hyperbola | 2. 8\nR. Radius of director circle of x²/16 + y²/9 = 1 | 3. 3\nS. Length of latus rectum of y² = 8x | 4. √2',
    options: [
      'P-3, Q-4, R-1, S-2',
      'P-3, Q-1, R-4, S-2',
      'P-4, Q-3, R-1, S-2',
      'P-3, Q-4, R-2, S-1'
    ],
    correctOption: 'P-3, Q-4, R-1, S-2',
    modelAnswer: 'Normal y = m(x - 2) - m³ through (3, 0) gives m(1 - m²) = 0 => 3 normals (P-3). Rectangular hyperbola has e = √2 (Q-4). Director circle radius = √(16 + 9) = 5 (R-1). Latus rectum of y² = 4ax is 4a = 8 (S-2).',
    stepMarking: [
      { step: 'Exact match P-3, Q-4, R-1, S-2', marks: '+3 / -1' }
    ],
    examinerTip: 'On the axis of y² = 4ax, points with x > 2a admit 3 distinct real normals!'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Parabola Focal Chord Length',
    questionText: '[Paragraph Comprehension] Let P(a t₁², 2a t₁) and Q(a t₂², 2a t₂) be the endpoints of a focal chord of the parabola y² = 4ax. If t₁ = 2, find the length of the focal chord PQ.',
    options: ['25a / 4', '9a / 4', '4a', '17a / 4'],
    correctOption: '25a / 4',
    modelAnswer: 'For a focal chord, t₁ t₂ = -1 => t₂ = -1/2. Focal chord length PQ = a(t₁ + 1/t₁)² = a(2 + 1/2)² = 25a / 4.',
    stepMarking: [
      { step: 'Apply t₁ t₂ = -1 and length a(t₁ + 1/t₁)² => 25a/4', marks: '+3 / -1' }
    ],
    examinerTip: 'Every focal chord of y² = 4ax has length at least equal to the latus rectum 4a.'
  },

  // ==================== BLOCK 2 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Limits — Taylor Expansion',
    questionText: '[SCQ] Evaluate lim_{x → 0} [ (e^x - 1 - x - x²/2) / (x - sin x) ].',
    options: ['1', '1 / 2', '3', '0'],
    correctOption: '1',
    modelAnswer: 'Numerator = x³/6 + O(x⁴), Denominator = x - (x - x³/6 + O(x⁵)) = x³/6 + O(x⁵). Ratio approaches (1/6)/(1/6) = 1.',
    stepMarking: [
      { step: 'Expand both e^x and sin x to x³ order => limit = 1', marks: '+3 / -1' }
    ],
    examinerTip: 'Standard Taylor series up to x³ resolve 0/0 limits far faster than three rounds of L’Hôpital.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Circles — Orthogonal Intersection',
    questionText: '[SCQ] Find the value of k for which the circles x² + y² - 4x + 6y + 4 = 0 and x² + y² + 2x - 2y + k = 0 intersect orthogonally.',
    options: ['-14', '-10', '6', '-6'],
    correctOption: '-14',
    modelAnswer: 'Orthogonality condition 2g₁g₂ + 2f₁f₂ = c₁ + c₂ with (g₁, f₁, c₁) = (-2, 3, 4) and (g₂, f₂, c₂) = (1, -1, k): 2(-2)(1) + 2(3)(-1) = 4 + k => -10 = 4 + k => k = -14.',
    stepMarking: [
      { step: 'Substitute into 2g₁g₂ + 2f₁f₂ = c₁ + c₂ => k = -14', marks: '+3 / -1' }
    ],
    examinerTip: 'Always halve the linear coefficients (with sign) to extract g and f!'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Quadratic Equations — Location of Roots',
    questionText: '[MSQ — Select ALL Correct] If both roots of the quadratic equation x² - 2kx + (k² + k - 5) = 0 are real and strictly less than 5, identify ALL valid conditions on the real parameter k:',
    options: [
      'A. Discriminant Δ ≥ 0 implies k ≤ 5',
      'B. Vertex x-coordinate lies left of 5, giving k < 5',
      'C. Requiring f(5) > 0 restricts k to the final valid interval k < 4',
      'D. All values in the open interval (-∞, 5) satisfy the requirement'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Δ = 4k² - 4(k² + k - 5) = 4(5 - k) ≥ 0 => k ≤ 5. Vertex = k < 5. f(5) = 25 - 10k + k² + k - 5 = (k - 4)(k - 5) > 0 => k < 4 or k > 5. Intersecting all three conditions gives k < 4 (so D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Location of roots requires checking ALL THREE conditions: Δ ≥ 0, vertex position, and boundary sign f(x₀) > 0.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Binomial Theorem — Modular Remainder',
    questionText: '[Non-Negative Numerical] Find the remainder when 7¹⁰⁰ is divided by 25.',
    modelAnswer: '1',
    stepMarking: [
      { step: '7¹⁰⁰ = (49)⁵⁰ = (50 - 1)⁵⁰ ≡ (-1)⁵⁰ = 1 (mod 25)', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Group powers into 7² = 49 = 2×25 - 1 to isolate a binomial multiple of 25.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Area Bounded Between Curves',
    questionText: '[Paragraph Comprehension] Find the area of the closed region bounded between the parabola y² = 4x and the line y = 2x.',
    options: ['1 / 3', '2 / 3', '4 / 3', '1 / 6'],
    correctOption: '1 / 3',
    modelAnswer: 'Curves intersect at (0, 0) and (1, 2). Area = ∫₀¹ (2√x - 2x) dx = [(4/3)x^(3/2) - x²]₀¹ = 4/3 - 1 = 1/3 sq unit.',
    stepMarking: [
      { step: 'Integrate (2√x - 2x) from 0 to 1 => 1/3', marks: '+3 / -1' }
    ],
    examinerTip: 'Shortcut for area between y² = 4ax and y = mx: A = 8a² / (3m³) = 8(1)/(3×8) = 1/3.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Area Bounded by Latus Rectum',
    questionText: '[Paragraph Comprehension — Same Parabola] Find the area bounded by the parabola y² = 4x and its latus rectum x = 1.',
    options: ['8 / 3', '4 / 3', '16 / 3', '2 / 3'],
    correctOption: '8 / 3',
    modelAnswer: 'By symmetry about the x-axis, Area = 2 ∫₀¹ 2√x dx = 4 × [(2/3)x^(3/2)]₀¹ = 8/3 sq units.',
    stepMarking: [
      { step: 'Double the first-quadrant integral 2∫₀¹ 2√x dx => 8/3', marks: '+3 / -1' }
    ],
    examinerTip: 'Area bounded by any parabola y² = 4ax and its latus rectum is always (8/3)a².'
  },

  // ==================== BLOCK 3 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Application of Derivatives — Monotonicity',
    questionText: '[SCQ] Find the open interval on which the cubic polynomial f(x) = x³ - 3x² - 9x + 5 is strictly decreasing.',
    options: ['(-1, 3)', '(-∞, -1) ∪ (3, ∞)', '(1, 3)', '(-3, 1)'],
    correctOption: '(-1, 3)',
    modelAnswer: 'f′(x) = 3x² - 6x - 9 = 3(x - 3)(x + 1). f′(x) < 0 for x ∈ (-1, 3).',
    stepMarking: [
      { step: 'Factor f′(x) = 3(x - 3)(x + 1) < 0 => (-1, 3)', marks: '+3 / -1' }
    ],
    examinerTip: 'Verify critical points by plugging x = 0 into f′(x) = -9 < 0.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Trigonometric Equations — Solution Count',
    questionText: '[SCQ] How many distinct solutions does the equation sin x + sin 3x + sin 5x = 0 have in the closed interval [0, π]?',
    options: ['4', '5', '6', '3'],
    correctOption: '4',
    modelAnswer: 'Group sin x + sin 5x = 2 sin 3x cos 2x => sin 3x (2 cos 2x + 1) = 0. From sin 3x = 0: x ∈ {0, π/3, 2π/3, π}. From cos 2x = -1/2: 2x ∈ {2π/3, 4π/3} => x ∈ {π/3, 2π/3} (already counted). Total distinct roots = 4.',
    stepMarking: [
      { step: 'Factor sin 3x(2 cos 2x + 1) = 0 and remove duplicate roots => 4', marks: '+3 / -1' }
    ],
    examinerTip: 'Always list and de-duplicate roots across multiple trigonometric factors!'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Determinants & Adjoint Matrix Identities',
    questionText: '[MSQ — Select ALL Correct] Let A be a 3×3 invertible real matrix with det(A) = 4. Select ALL true statements:',
    options: [
      'A. det(adj(A)) = 16',
      'B. det(adj(adj(A))) = 256',
      'C. det(2 A⁻¹) = 2',
      'D. adj(Aᵀ) = -(adj(A))ᵀ'
    ],
    modelAnswer: 'MSQ Key: A, B, C. For n×n matrix: |adj(A)| = |A|^(n-1) = 4² = 16; |adj(adj(A))| = |A|^((n-1)²) = 4⁴ = 256; |2A⁻¹| = 2³/|A| = 8/4 = 2. Transpose commutes with adjoint: adj(Aᵀ) = (adj(A))ᵀ (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Remember scalar factor k pulled out of an n×n determinant becomes kⁿ.'
  },
  {
    section: 'C',
    marks: 4,
    topic: '[ADV ONLY] 3D Skew Lines Shortest Distance',
    questionText: '[Non-Negative Numerical] Find the shortest distance between the two skew lines L₁: r = (î + k̂) + λ(2î - ĵ) and L₂: r = (4î + 3ĵ + 4k̂) + μ(2î - k̂).',
    modelAnswer: '5',
    stepMarking: [
      { step: 'b₁ × b₂ = (1, 2, 2) with |b₁ × b₂| = 3; (a₂ - a₁)·(1, 2, 2) = 15 => d = 15/3 = 5', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Always check whether b₁ × b₂ = 0 first (parallel lines use a different formula).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Series & Inequalities',
    questionText: '[Matrix Match] Match each expression (Column I) with its exact value (Column II):\nP. ∑_{r=1}^n r² | 1. 4\nQ. Infinite AGP: 1 + 2/3 + 3/9 + 4/27 + ... | 2. n(n+1)(2n+1)/6\nR. Minimum value of 4^x + 4^(1-x) for x ∈ ℝ | 3. 10 / 11\nS. ∑_{r=1}^{10} 1/[r(r+1)] | 4. 9 / 4',
    options: [
      'P-2, Q-4, R-1, S-3',
      'P-2, Q-1, R-4, S-3',
      'P-4, Q-2, R-1, S-3',
      'P-2, Q-4, R-3, S-1'
    ],
    correctOption: 'P-2, Q-4, R-1, S-3',
    modelAnswer: 'Standard sum of squares (P-2). AGP S - S/3 = 1 + 1/3 + 1/9 + ... = 3/2 => S = 9/4 (Q-4). By AM-GM, 4^x + 4/4^x ≥ 2√4 = 4 (R-1). Telescoping sum 1 - 1/11 = 10/11 (S-3).',
    stepMarking: [
      { step: 'Exact match P-2, Q-4, R-1, S-3', marks: '+3 / -1' }
    ],
    examinerTip: 'AM-GM gives sharp equality when 4^x = 4^(1-x), i.e., x = 1/2.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Definite Integration e^x [f(x) + f′(x)]',
    questionText: '[Paragraph Comprehension] Evaluate ∫₀^(π/2) e^x (sin x + cos x) dx.',
    options: ['e^(π/2)', 'e^(π/2) - 1', 'e^(π/2) + 1', '2 e^(π/2)'],
    correctOption: 'e^(π/2)',
    modelAnswer: 'Using d/dx(e^x sin x) = e^x(sin x + cos x), the definite integral equals [e^x sin x]₀^(π/2) = e^(π/2)(1) - 1(0) = e^(π/2).',
    stepMarking: [
      { step: 'Recognize derivative of e^x sin x and evaluate bounds => e^(π/2)', marks: '+3 / -1' }
    ],
    examinerTip: 'Watch out for the lower limit at x = 0: sin 0 = 0 whereas cos 0 = 1!'
  },

  // ==================== BLOCK 4 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Complex Numbers — Cube Roots of Unity',
    questionText: '[SCQ] If ω is a non-real cube root of unity, find the value of (1 + ω - ω²)⁶ + (1 - ω + ω²)⁶.',
    options: ['128', '64', '-128', '0'],
    correctOption: '128',
    modelAnswer: 'Using 1 + ω + ω² = 0: 1 + ω - ω² = -2ω² and 1 - ω + ω² = -2ω. Thus (-2ω²)⁶ + (-2ω)⁶ = 64ω¹² + 64ω⁶ = 64 + 64 = 128.',
    stepMarking: [
      { step: 'Replace 1 + ω = -ω² and 1 + ω² = -ω => 64 + 64 = 128', marks: '+3 / -1' }
    ],
    examinerTip: 'Always collapse two positive terms of (1, ω, ω²) into the negative of the third before raising to high powers.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Ellipse — Eccentricity from Foci Angle',
    questionText: '[SCQ] If the angle between the lines joining the two foci of an ellipse to one extremity of its minor axis is 90°, find the eccentricity of the ellipse.',
    options: ['1 / √2', '1 / 2', '√3 / 2', '1 / √3'],
    correctOption: '1 / √2',
    modelAnswer: 'Isosceles right triangle formed by foci (±ae, 0) and minor endpoint (0, b) gives b = ae. Since b² = a²(1 - e²), e² = 1 - e² => e = 1/√2.',
    stepMarking: [
      { step: 'Right-isosceles triangle gives b = ae => e² = 1/2 => 1/√2', marks: '+3 / -1' }
    ],
    examinerTip: 'Notice that the focal distance to the minor axis vertex is always equal to the semi-major axis a!'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Newton-Leibniz Integral & Local Extrema',
    questionText: '[MSQ — Select ALL Correct] Let F(x) = ∫₀^(x²) [(t² - 1)/(t² + 1)] dt for x ∈ ℝ. Identify ALL correct properties of F(x):',
    options: [
      'A. F′(x) = 2x (x⁴ - 1) / (x⁴ + 1)',
      'B. F(x) attains local minima at x = 1 and x = -1',
      'C. F(x) is an even function on ℝ',
      'D. F(x) attains a local minimum at x = 0'
    ],
    modelAnswer: 'MSQ Key: A, B, C. By Newton-Leibniz, F′(x) = 2x(x⁴ - 1)/(x⁴ + 1). Since (-x)² = x², F(-x) = F(x) (even). Sign analysis of F′(x): (-∞, -1) < 0, (-1, 0) > 0, (0, 1) < 0, (1, ∞) > 0. Thus x = ±1 are local minima while x = 0 is a local maximum (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Never drop the chain-rule factor d(x²)/dx = 2x in Newton-Leibniz differentiation!'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Permutations — Dictionary Rank',
    questionText: '[Non-Negative Numerical] All 6-letter words formed using the letters of the word MOTHER (each letter used once) are arranged in alphabetical dictionary order. Find the rank of the word MOTHER.',
    modelAnswer: '309',
    stepMarking: [
      { step: 'Alphabetical order E, H, M, O, R, T: 2×5! + 2×4! + 3×3! + 1×2! + 0×1! + 1 = 240 + 48 + 18 + 2 + 1 = 309', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Add +1 at the very end for the target word itself after counting all lexicographically preceding words.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Rolle’s & Lagrange Mean Value Theorem',
    questionText: '[Paragraph Comprehension] A twice-differentiable function f: [0, 2] → ℝ satisfies f(0) = 1, f(1) = 4, and f(2) = 7. Applying LMVT on [0, 1] and [1, 2] followed by Rolle’s theorem on f′, there MUST exist c ∈ (0, 2) such that:',
    options: ["f''(c) = 0", "f''(c) = 3", "f'(c) = 0", "f(c) = 0"],
    correctOption: "f''(c) = 0",
    modelAnswer: 'LMVT on [0, 1] gives f′(c₁) = (4 - 1)/1 = 3; LMVT on [1, 2] gives f′(c₂) = (7 - 4)/1 = 3 with c₁ < c₂. By Rolle’s theorem applied to f′ on [c₁, c₂], ∃ c ∈ (c₁, c₂) ⊂ (0, 2) where f″(c) = 0.',
    stepMarking: [
      { step: 'f′(c₁) = f′(c₂) = 3 => Rolle on f′ yields f″(c) = 0', marks: '+3 / -1' }
    ],
    examinerTip: 'Equal average slopes over consecutive intervals always imply an inflection / zero second-derivative point inside!'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] LMVT Differential Inequality Bound',
    questionText: '[Paragraph Comprehension — Mean Value Bounds] If a differentiable function g: [1, 5] → ℝ satisfies g(1) = 3 and g′(x) ≥ 4 for all x ∈ (1, 5), what is the minimum possible value of g(5)?',
    options: ['19', '16', '15', '20'],
    correctOption: '19',
    modelAnswer: 'By LMVT on [1, 5], [g(5) - g(1)] / (5 - 1) = g′(c) ≥ 4 => g(5) - 3 ≥ 16 => g(5) ≥ 19.',
    stepMarking: [
      { step: 'g(5) = g(1) + 4 g′(c) ≥ 3 + 16 = 19', marks: '+3 / -1' }
    ],
    examinerTip: 'LMVT converts pointwise derivative bounds directly into endpoint value bounds.'
  },

  // ==================== BLOCK 5 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Properties of Triangles — Inradius',
    questionText: '[SCQ] In triangle ABC, the side lengths are a = 13, b = 14, and c = 15. Find the inradius r of triangle ABC.',
    options: ['4', '3', '5', '6'],
    correctOption: '4',
    modelAnswer: 'Semi-perimeter s = (13 + 14 + 15)/2 = 21. Area Δ = √[21(21 - 13)(21 - 14)(21 - 15)] = √(21 × 8 × 7 × 6) = 84. Inradius r = Δ / s = 84 / 21 = 4.',
    stepMarking: [
      { step: 'Compute s = 21, Δ = 84 => r = Δ/s = 4', marks: '+3 / -1' }
    ],
    examinerTip: 'The 13–14–15 triangle has altitude 12 onto base 14 and area 84 — memorize it!'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Hyperbola — Tangent & Asymptote Triangle Area',
    questionText: '[SCQ] Find the constant area of the triangle bounded by any tangent to the hyperbola x²/9 - y²/16 = 1 and its two asymptotes.',
    options: ['12 sq units', '24 sq units', '6 sq units', '48 sq units'],
    correctOption: '12 sq units',
    modelAnswer: 'For x²/a² - y²/b² = 1, the area of the triangle formed by any tangent and the two asymptotes is invariant and equals a·b = 3 × 4 = 12 sq units.',
    stepMarking: [
      { step: 'Apply invariant area = ab = 3 × 4 = 12 sq units', marks: '+3 / -1' }
    ],
    examinerTip: 'Verify quickly at the vertex tangent x = a: asymptotes y = ±(b/a)x cut x = a at ±b, giving base 2b and height a => area = ab.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Functions — Bijection, Oddness & Inverse Calculus',
    questionText: '[MSQ — Select ALL Correct] Let f: ℝ → ℝ be defined by f(x) = x³ + x + sin x. Identify ALL true statements:',
    options: [
      'A. f(x) is strictly increasing on ℝ',
      'B. f(x) is a bijection (one-one and onto ℝ)',
      'C. f(x) is an odd function',
      'D. f⁻¹(x) is not differentiable at x = 0'
    ],
    modelAnswer: 'MSQ Key: A, B, C. f′(x) = 3x² + 1 + cos x ≥ 3x² ≥ 0, and since 3x² = 0 only at x = 0 where 1 + cos 0 = 2, we have f′(x) > 0 strictly for ALL x ∈ ℝ! Thus f is strictly increasing, continuous with range ℝ (bijective), and f(-x) = -f(x) (odd). Since f′(0) = 2 ≠ 0, (f⁻¹)′(0) = 1/2 exists (D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'For an invertible differentiable function, (f⁻¹)′(f(a)) = 1 / f′(a) fails only where f′(a) = 0.'
  },
  {
    section: 'C',
    marks: 4,
    topic: '[ADV ONLY] 3D Mirror Image Distance',
    questionText: '[Non-Negative Numerical] Let Q be the mirror image of the point P(1, 3, 4) in the plane 2x - y + z + 3 = 0. Find the value of (PQ)².',
    modelAnswer: '24',
    stepMarking: [
      { step: 'Perpendicular distance d = |2(1) - 3 + 4 + 3| / √(4 + 1 + 1) = 6/√6 = √6 => PQ = 2√6 => PQ² = 24', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Distance between a point and its mirror image is simply 2d (no need to compute coordinates of Q!).'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Matrix Match] Definite Integral Shortcuts',
    questionText: '[Matrix Match] Evaluate and match each definite integral (Column I) with its value (Column II):\nP. ∫₀^(π/2) sin⁴x dx | 1. 0\nQ. ∫₀^(π/2) [sin x / (sin x + cos x)] dx | 2. 1\nR. ∫₋₁¹ x³ cos x dx | 3. 3π / 16\nS. ∫₀² |x - 1| dx | 4. π / 4',
    options: [
      'P-3, Q-4, R-1, S-2',
      'P-4, Q-3, R-1, S-2',
      'P-3, Q-4, R-2, S-1',
      'P-1, Q-4, R-3, S-2'
    ],
    correctOption: 'P-3, Q-4, R-1, S-2',
    modelAnswer: 'Walli’s formula: (3×1)/(4×2) × π/2 = 3π/16 (P-3). King’s property: π/4 (Q-4). Odd integrand on [-1, 1]: 0 (R-1). Two triangles of base 1, height 1: 1 (S-2).',
    stepMarking: [
      { step: 'Exact match P-3, Q-4, R-1, S-2', marks: '+3 / -1' }
    ],
    examinerTip: 'Always check odd/even symmetry on [-a, a] before attempting integration by parts!'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Vector Triple Product Expansion',
    questionText: '[Paragraph Comprehension] Given vectors a = î + ĵ + k̂ and b = î - ĵ + k̂, find the magnitude of the vector (a × b) × a.',
    options: ['2√6', '√6', '4√2', '2√3'],
    correctOption: '2√6',
    modelAnswer: '(a × b) × a = (a·a)b - (a·b)a. Here a·a = 3 and a·b = 1 - 1 + 1 = 1. Thus 3(î - ĵ + k̂) - (î + ĵ + k̂) = 2î - 4ĵ + 2k̂, whose magnitude is √(4 + 16 + 4) = √24 = 2√6.',
    stepMarking: [
      { step: 'Expand (a·a)b - (a·b)a = 2î - 4ĵ + 2k̂ => magnitude 2√6', marks: '+3 / -1' }
    ],
    examinerTip: 'In (a × b) × c = (a·c)b - (b·c)a, remember the outer-dot-middle minus outer-dot-first pattern!'
  },

  // ==================== BLOCK 6 ====================
  {
    section: 'A',
    marks: 3,
    topic: 'Straight Lines — Family of Concurrent Lines',
    questionText: '[SCQ] For every real parameter λ ∈ ℝ, the variable line (2 + λ)x + (1 - 2λ)y - (7 + λ) = 0 passes through a fixed point P. Find the coordinates of P.',
    options: ['(3, 1)', '(1, 3)', '(2, 3)', '(3, -1)'],
    correctOption: '(3, 1)',
    modelAnswer: 'Rewrite as (2x + y - 7) + λ(x - 2y - 1) = 0. Solving 2x + y = 7 and x - 2y = 1 simultaneously yields x = 3, y = 1.',
    stepMarking: [
      { step: 'Group L₁ + λL₂ = 0 and solve intersection => (3, 1)', marks: '+3 / -1' }
    ],
    examinerTip: 'Plug (3, 1) back into the original equation with λ = 0 and λ = 1 to verify instantly.'
  },
  {
    section: 'A',
    marks: 3,
    topic: 'Probability — Binomial Trials',
    questionText: '[SCQ] A fair six-sided die is rolled 4 times independently. What is the probability of obtaining a number strictly greater than 4 at least twice?',
    options: ['11 / 27', '16 / 27', '10 / 27', '1 / 3'],
    correctOption: '11 / 27',
    modelAnswer: 'Success (5 or 6) has p = 1/3, q = 2/3. P(X ≥ 2) = 1 - P(X = 0) - P(X = 1) = 1 - (2/3)⁴ - 4(1/3)(2/3)³ = 1 - 16/81 - 32/81 = 33/81 = 11/27.',
    stepMarking: [
      { step: 'Complement 1 - (16/81 + 32/81) = 33/81 = 11/27', marks: '+3 / -1' }
    ],
    examinerTip: '"Strictly greater than 4" means {5, 6} (p = 1/3), NOT {4, 5, 6}.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Differential Equations — Orthogonal Trajectories',
    questionText: '[MSQ — Select ALL Correct] Consider the one-parameter family of parabolas y² = 4ax (a > 0). Select ALL true statements about this family and its orthogonal trajectories:',
    options: [
      'A. The differential equation representing the given family is y = 2x (dy/dx)',
      'B. Replacing dy/dx by -dx/dy yields the orthogonal trajectory ODE y dy + 2x dx = 0',
      'C. The orthogonal trajectories are ellipses 2x² + y² = C centred at the origin',
      'D. The orthogonal trajectories are rectangular hyperbolas xy = C'
    ],
    modelAnswer: 'MSQ Key: A, B, C. Differentiating y² = 4ax gives 2y y′ = 4a = y²/x => y = 2x(dy/dx). Substituting dy/dx → -dx/dy gives y = -2x(dx/dy) => y dy + 2x dx = 0 => 2x² + y² = C, a family of ellipses (so D is false).',
    stepMarking: [
      { step: 'Full A, B, C (+4); Partial (+2 / +1 if no wrong option); Any wrong option (-2)', marks: '+4 / Partial / -2' }
    ],
    examinerTip: 'Always eliminate the parameter a BEFORE substituting dy/dx → -dx/dy.'
  },
  {
    section: 'C',
    marks: 4,
    topic: 'Matrices — Infinite Solutions of Linear System',
    questionText: '[Non-Negative Numerical] The system of linear equations x + y + z = 6, x + 2y + 3z = 14, and x + 4y + λz = μ has infinitely many solutions. Find the value of λ + μ.',
    modelAnswer: '37',
    stepMarking: [
      { step: 'Row reduction gives y + 2z = 8 and 3y + (λ - 1)z = μ - 6 => (λ - 1)/2 = 3 => λ = 7; (μ - 6)/8 = 3 => μ = 30; λ + μ = 37', marks: '+4 (0 Negative)' }
    ],
    examinerTip: 'Row-echelon elimination is faster and less error-prone than expanding four 3×3 determinants.'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Complex Apollonius Circle Locus',
    questionText: '[Paragraph Comprehension] If a complex number z ∈ ℂ satisfies |z - 2| = 2|z - 1|, the locus of z in the Argand plane is a circle. Find its centre and radius.',
    options: [
      'Centre (2/3, 0), Radius 2/3',
      'Centre (1, 0), Radius 1',
      'Centre (4/3, 0), Radius 4/3',
      'Centre (2/3, 0), Radius 4/3'
    ],
    correctOption: 'Centre (2/3, 0), Radius 2/3',
    modelAnswer: 'Squaring (x - 2)² + y² = 4[(x - 1)² + y²] simplifies to 3x² + 3y² - 4x = 0 => x² + y² - (4/3)x = 0. Thus centre = (2/3, 0) and radius = √((2/3)² - 0) = 2/3.',
    stepMarking: [
      { step: 'Expand |z - 2|² = 4|z - 1|² => circle centred at (2/3, 0), radius 2/3', marks: '+3 / -1' }
    ],
    examinerTip: 'On the real axis, z = 0 and z = 4/3 both satisfy |z - 2| = 2|z - 1| and form a diameter of the circle!'
  },
  {
    section: 'D',
    marks: 3,
    topic: '[Paragraph] Maximum Modulus on Apollonius Circle',
    questionText: '[Paragraph Comprehension — Same Locus] For z lying anywhere on the circle |z - 2| = 2|z - 1|, what is the maximum possible value of |z|?',
    options: ['4 / 3', '2 / 3', '2', '1'],
    correctOption: '4 / 3',
    modelAnswer: 'The circle has centre c = 2/3 and radius r = 2/3. By triangle inequality, |z|_max = |c| + r = 2/3 + 2/3 = 4/3 (attained at z = 4/3).',
    stepMarking: [
      { step: '|z|_max = |centre| + radius = 2/3 + 2/3 = 4/3', marks: '+3 / -1' }
    ],
    examinerTip: 'Geometrically, the circle passes through the origin z = 0, so maximum distance from origin equals its diameter 2r.'
  }
];

function sliceBlocks(bank: RawAdvQ[], blocks: BlockIndices, subjectName: 'Physics' | 'Chemistry' | 'Mathematics'): Omit<PyqQuestion, 'id' | 'qNum'>[] {
  const picked: RawAdvQ[] = [];
  for (const b of blocks) {
    const start = b * 6;
    picked.push(...bank.slice(start, start + 6));
  }
  picked.sort((a, b) => SECTION_ORDER[a.section] - SECTION_ORDER[b.section]);
  return picked.map((q) => ({
    ...q,
    subject: subjectName,
    examinerTip: q.examinerTip || `IIT Examiner Insight: Combine core principles cleanly across chapters (${q.topic}).`
  }));
}

const ADV_SPECS: AdvPaperSpec[] = [
  // Official 2026 Pattern Mock Sample Papers (Paper 1 FREE, Paper 2 PRO)
  {
    id: 'jee-adv-2026-sample-p1',
    title: 'JEE Advanced 2026 Official IIT Pattern Sample Paper 1 (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2026,
    paperType: 'COMPETITIVE_SAMPLE',
    paperCode: 'IIT-2026-SMP-P1',
    difficulty: 'CHALLENGING',
    isFree: true,
    topicFocus: '2026 IIT Pattern Morning Session (54 Qs: SCQ +3/-1, MSQ +4/-2 Partial, Numerical +4/0, Para/Matrix +3/-1)',
    blocks: [0, 1, 2]
  },
  {
    id: 'jee-adv-2026-sample-p2',
    title: 'JEE Advanced 2026 Official IIT Pattern Sample Paper 2 (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2026,
    paperType: 'COMPETITIVE_SAMPLE',
    paperCode: 'IIT-2026-SMP-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: '2026 IIT Pattern Afternoon Session (54 Non-Overlapping Qs with ADV_ONLY Stems & Matrix)',
    blocks: [3, 4, 5]
  },

  // 2025 Official Papers (FREE)
  {
    id: 'jee-adv-2025-p1',
    title: 'JEE Advanced 2025 Official IIT Paper 1 (Physics + Chem + Math)',
    subject: 'Full Syllabus (PCM)',
    year: 2025,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2025-P1',
    difficulty: 'CHALLENGING',
    isFree: true,
    topicFocus: 'IIT 2025 Morning Session (SCQ + IIT MSQ Partial Marking + Non-Neg Numericals + Para/Matrix)',
    blocks: [0, 2, 4]
  },
  {
    id: 'jee-adv-2025-p2',
    title: 'JEE Advanced 2025 Official IIT Paper 2 (Physics + Chem + Math)',
    subject: 'Full Syllabus (PCM)',
    year: 2025,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2025-P2',
    difficulty: 'CHALLENGING',
    isFree: true,
    topicFocus: 'IIT 2025 Afternoon Session (Paragraph Comprehension + Matrix + ADV_ONLY Concepts)',
    blocks: [1, 3, 5]
  },

  // 2024 IIT Madras Papers
  {
    id: 'jee-adv-2024-p1',
    title: 'JEE Advanced 2024 IIT Madras Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2024,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2024-P1',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Madras 2024 Paper 1 (Rocket + Potentiometer + Silicates + Derangements)',
    blocks: [1, 4, 6]
  },
  {
    id: 'jee-adv-2024-p2',
    title: 'JEE Advanced 2024 IIT Madras Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2024,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2024-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Madras 2024 Paper 2 (ICOR + Cavity + Ellingham + Cayley-Hamilton)',
    blocks: [0, 2, 5]
  },

  // 2023 IIT Guwahati Papers + Subject Archives
  {
    id: 'jee-adv-2023-p1',
    title: 'JEE Advanced 2023 IIT Guwahati Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2023,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2023-P1',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Guwahati 2023 Paper 1 (Doppler + YDSE Slab + Bravais + Skew Lines)',
    blocks: [0, 3, 6]
  },
  {
    id: 'jee-adv-2023-p2',
    title: 'JEE Advanced 2023 IIT Guwahati Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2023,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2023-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Guwahati 2023 Paper 2 (Thin-Film + Capacitors + Surface Chem + Leibniz)',
    blocks: [1, 2, 4]
  },
  {
    id: 'jee-adv-2023-phy',
    title: 'JEE Advanced 2023 IIT Guwahati Physics Archive (18 Qs)',
    subject: 'Physics',
    year: 2023,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2023-PHY',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Physics (ICOR, Moving-Wall Doppler, Cavity Fields, YDSE Slab & Rolling)',
    blocks: [0, 3, 6]
  },
  {
    id: 'jee-adv-2023-chem',
    title: 'JEE Advanced 2023 IIT Guwahati Chemistry Archive (18 Qs)',
    subject: 'Chemistry',
    year: 2023,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2023-CHEM',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Chemistry (Bravais Lattices, Van der Waals, Ellingham, Hückel & Polymers)',
    blocks: [0, 3, 6]
  },
  {
    id: 'jee-adv-2023-math',
    title: 'JEE Advanced 2023 IIT Guwahati Mathematics Archive (18 Qs)',
    subject: 'Mathematics',
    year: 2023,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2023-MATH',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Mathematics (Box Products, 3D Planes, Cayley-Hamilton, Argand & Matrices)',
    blocks: [0, 3, 6]
  },

  // 2022 IIT Bombay Papers
  {
    id: 'jee-adv-2022-p1',
    title: 'JEE Advanced 2022 IIT Bombay Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2022,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2022-P1',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Bombay 2022 Paper 1 (Dielectrics + LCR + Salt Analysis + Skew Lines)',
    blocks: [2, 3, 6]
  },
  {
    id: 'jee-adv-2022-p2',
    title: 'JEE Advanced 2022 IIT Bombay Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2022,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2022-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Bombay 2022 Paper 2 (Wedge-Block + Surface Chem + Argand + Vector Triple)',
    blocks: [0, 4, 5]
  },

  // 2021 IIT Kharagpur Papers
  {
    id: 'jee-adv-2021-p1',
    title: 'JEE Advanced 2021 IIT Kharagpur Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2021,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2021-P1',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'IIT KGP 2021 Paper 1 (Thin-Film + Silvered Lens + Grignard + Bijection)',
    blocks: [1, 5, 6]
  },
  {
    id: 'jee-adv-2021-p2',
    title: 'JEE Advanced 2021 IIT Kharagpur Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2021,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2021-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT KGP 2021 Paper 2 (Concentric Shells + Diazonium + Rolle/LMVT + King)',
    blocks: [0, 3, 4]
  },

  // 2020 IIT Delhi Papers
  {
    id: 'jee-adv-2020-p1',
    title: 'JEE Advanced 2020 IIT Delhi Paper 1 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2020,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2020-P1',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Delhi 2020 Paper 1 (Rotating Rod + Inclined Projectile + Ozonolysis + Conics)',
    blocks: [2, 4, 5]
  },
  {
    id: 'jee-adv-2020-p2',
    title: 'JEE Advanced 2020 IIT Delhi Paper 2 Archive (Full PCM)',
    subject: 'Full Syllabus (PCM)',
    year: 2020,
    paperType: 'JEE_ADV_PAPER',
    paperCode: 'IIT-2020-P2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'IIT Delhi 2020 Paper 2 (Potentiometer + YDSE + Boranes + Derangements)',
    blocks: [1, 3, 6]
  }
];

function buildAdvPaper(spec: AdvPaperSpec): PyqPaper {
  let rawQuestions: Omit<PyqQuestion, 'id' | 'qNum'>[];

  if (spec.subject === 'Full Syllabus (PCM)') {
    rawQuestions = [
      ...sliceBlocks(ADV_PHY_BANK, spec.blocks, 'Physics'),
      ...sliceBlocks(ADV_CHEM_BANK, spec.blocks, 'Chemistry'),
      ...sliceBlocks(ADV_MATH_BANK, spec.blocks, 'Mathematics')
    ];
  } else if (spec.subject === 'Physics') {
    rawQuestions = sliceBlocks(ADV_PHY_BANK, spec.blocks, 'Physics');
  } else if (spec.subject === 'Chemistry') {
    rawQuestions = sliceBlocks(ADV_CHEM_BANK, spec.blocks, 'Chemistry');
  } else {
    rawQuestions = sliceBlocks(ADV_MATH_BANK, spec.blocks, 'Mathematics');
  }

  const mapped: PyqQuestion[] = rawQuestions.map((q, idx) => ({
    ...q,
    id: `${spec.id}-q${idx + 1}`,
    qNum: idx + 1
  }));

  const isFullPcm = spec.subject === 'Full Syllabus (PCM)';
  const totalMarks = isFullPcm ? 180 : 60;
  const durationMins = isFullPcm ? 180 : 60;
  const totalQuestions = mapped.length;

  return {
    id: spec.id,
    title: spec.title,
    subject: spec.subject,
    year: spec.year,
    targetClass: 'JEE Advanced',
    paperType: spec.paperType,
    paperCode: spec.paperCode,
    totalMarks,
    durationMins,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions,
    generalInstructions: isFullPcm
      ? [
          `Official IIT JEE Advanced Full-Length PCM Replica (${spec.topicFocus}).`,
          '54 Questions (18 Physics + 18 Chemistry + 18 Mathematics) | 180 Marks | 180 Minutes.',
          'Per Subject Pattern: Sec A SCQ (6 Qs, +3/-1), Sec B MSQ (3 Qs, +4 full / +2,+1 partial / -2 wrong), Sec C Non-Negative Numerical (3 Qs, +4/0), Sec D Paragraph/Matrix (6 Qs, +3/-1).'
        ]
      : [
          `Official IIT JEE Advanced Subject Archive (${spec.topicFocus}).`,
          `18 ${spec.subject} Questions | 60 Marks | 60 Minutes.`,
          'Subject Pattern: Sec A SCQ (6 Qs, +3/-1), Sec B MSQ (3 Qs, +4 full / +2,+1 partial / -2 wrong), Sec C Non-Negative Numerical (3 Qs, +4/0), Sec D Paragraph/Matrix (6 Qs, +3/-1).'
        ],
    questions: mapped
  };
}

export const JEE_ADVANCED_PYQ_PAPERS: PyqPaper[] = ADV_SPECS.map(buildAdvPaper);
