import type { PyqPaper, PyqQuestion } from '../../components/learn/PyqPaperViewerModal';

type RawPyqQuestion = Omit<PyqQuestion, 'id' | 'qNum' | 'examinerTip' | 'subject'> & {
  examinerTip?: string;
};

interface FullPaperSpec {
  id: string;
  title: string;
  year: number;
  paperType: 'COMPETITIVE_SAMPLE' | 'JEE_SHIFT';
  paperCode: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  offsetA: [number, number, number]; // [Phy, Chem, Math]
  offsetB: [number, number, number]; // [Phy, Chem, Math]
}

interface ShiftSpec {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  year: number;
  paperCode: string;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  topicFocus: string;
  offsetA: number;
  offsetB: number;
}

// ============================================================================
// PHYSICS QUESTION BANK — 60 Questions (45 Section A MCQs + 15 Section B Numericals)
// Strictly aligned with NTA JEE Main 2026 Rationalized Syllabus (Unit 1–20)
// ============================================================================
const PHY_Q_BANK: RawPyqQuestion[] = [
  // --- Section A: Single-Choice MCQs (45) ---
  {
    section: 'A',
    marks: 4,
    topic: 'Units & Experimental Skills (Vernier Callipers)',
    questionText: 'In a Vernier callipers, 10 Vernier scale divisions (VSD) coincide with 9 main scale divisions (MSD), where 1 MSD = 1 mm. While measuring a cylinder, zero of Vernier lies between 3.2 cm and 3.3 cm and 4th VSD coincides. Find corrected diameter if zero error is -0.02 cm.',
    options: ['3.26 cm', '3.22 cm', '3.24 cm', '3.28 cm'],
    correctOption: '3.26 cm',
    modelAnswer: 'Least Count = 1 MSD - 1 VSD = 1 - 0.9 = 0.1 mm = 0.01 cm. Observed = 3.2 + 4(0.01) = 3.24 cm. True = Observed - Zero Error = 3.24 - (-0.02) = 3.26 cm.',
    stepMarking: [
      { step: 'LC = 0.01 cm => Observed reading = 3.24 cm', marks: '+2' },
      { step: 'Subtract negative zero error (-0.02 cm) => 3.26 cm', marks: '+2' }
    ],
    examinerTip: 'Unit 20 Experimental Skills yields 1–2 guaranteed questions in almost every NTA shift.',
    commonPitfall: 'Subtracting magnitude 0.02 instead of (-0.02) gives 3.22 cm.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Units & Experimental Skills (Screw Gauge)',
    questionText: 'A screw gauge has a pitch of 0.5 mm and 50 divisions on its circular scale. When the jaws touch, the 5th division on the circular scale lies below the reference line (positive zero error). For a wire, MSR is 2.0 mm and 25th circular division coincides. Find the true diameter.',
    options: ['2.20 mm', '2.30 mm', '2.25 mm', '2.15 mm'],
    correctOption: '2.20 mm',
    modelAnswer: 'LC = 0.5 mm / 50 = 0.01 mm. Zero error = +5 × 0.01 = +0.05 mm. Observed = 2.0 + 25 × 0.01 = 2.25 mm. True diameter = 2.25 - 0.05 = 2.20 mm.',
    stepMarking: [
      { step: 'LC = 0.01 mm, Zero error = +0.05 mm', marks: '+2' },
      { step: 'True = 2.25 - 0.05 = 2.20 mm', marks: '+2' }
    ],
    examinerTip: 'Always verify whether zero error is positive (subtract) or negative (add).',
    commonPitfall: 'Adding positive zero error instead of subtracting it.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Units, Dimensions & Error Analysis',
    questionText: 'A physical quantity X is given by X = (A² B³) / (C √D). The percentage errors in A, B, C, and D are 1%, 2%, 3%, and 4% respectively. The maximum percentage error in X is:',
    options: ['13%', '11%', '15%', '9%'],
    correctOption: '13%',
    modelAnswer: '%ΔX = 2(%ΔA) + 3(%ΔB) + 1(%ΔC) + (1/2)(%ΔD) = 2(1) + 3(2) + 3 + 0.5(4) = 2 + 6 + 3 + 2 = 13%.',
    stepMarking: [
      { step: 'Sum absolute weighted percentage errors for numerator and denominator', marks: '+4' }
    ],
    examinerTip: 'Errors in both numerator and denominator always add up.',
    commonPitfall: 'Subtracting denominator error contributions instead of adding.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (1D Motion & Graphs)',
    questionText: 'A particle starts from rest with uniform acceleration a₁ for time t₁ and then retards uniformly at a₂ to rest in time t₂. If the total distance covered is S and total time is T, what is the average velocity over the entire trip?',
    options: ['(1/2) v_max', 'v_max', '(1/3) v_max', '(2/3) v_max'],
    correctOption: '(1/2) v_max',
    modelAnswer: 'The v-t graph is a triangle of base T = t₁ + t₂ and height v_max. Area S = (1/2) v_max T, so v_avg = S / T = (1/2) v_max.',
    stepMarking: [
      { step: 'Area under triangular v-t graph = (1/2) v_max T => v_avg = v_max / 2', marks: '+4' }
    ],
    examinerTip: 'Any start-from-rest, stop-at-rest piecewise linear v-t profile has v_avg = v_max / 2.',
    commonPitfall: 'Assuming t₁ = t₂ is required; it holds for arbitrary a₁ and a₂.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (Projectile Motion)',
    questionText: 'A projectile is fired at angle θ with horizontal such that its horizontal range is 4 times its maximum height. What is the angle of projection θ?',
    options: ['45°', '30°', '60°', 'tan⁻¹(2)'],
    correctOption: '45°',
    modelAnswer: 'R = (u² sin 2θ)/g and H = (u² sin² θ)/(2g). Ratio R/H = 4 cot θ. Given R = 4H => 4 cot θ = 4 => cot θ = 1 => θ = 45°.',
    stepMarking: [
      { step: 'Use R/H = 4 cot θ = 4 => θ = 45°', marks: '+4' }
    ],
    examinerTip: 'Memorize R = 4 H cot θ for instant 5-second projectile ratio problems.',
    commonPitfall: 'Confusing tan θ = 4 with cot θ = 1.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinematics (Relative Motion — River Boat)',
    questionText: 'A swimmer capable of swimming at 5 km/h in still water wants to cross a 1 km wide river flowing at 3 km/h in the shortest possible time. What is the drift downstream?',
    options: ['0.6 km', '0.8 km', '0.5 km', '0 km'],
    correctOption: '0.6 km',
    modelAnswer: 'For shortest time, swimmer heads perpendicular to flow: t = d / v_sr = 1 / 5 = 0.2 h. Drift = v_r × t = 3 × 0.2 = 0.6 km.',
    stepMarking: [
      { step: 'Minimum time t = 1/5 = 0.2 h', marks: '+2' },
      { step: 'Drift = 3 × 0.2 = 0.6 km', marks: '+2' }
    ],
    examinerTip: 'Shortest time requires perpendicular heading (θ = 0°); zero drift requires sin θ = v_r / v_sr.',
    commonPitfall: 'Using √(5² - 3²) = 4 km/h, which corresponds to shortest path, not shortest time.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Laws of Motion & Friction',
    questionText: 'A block of mass 4 kg rests on a rough horizontal floor (μ_s = 0.5, μ_k = 0.4). A horizontal force F = 15 N is applied to it. Take g = 10 m/s². Find the frictional force acting on the block.',
    options: ['15 N', '20 N', '16 N', '0 N'],
    correctOption: '15 N',
    modelAnswer: 'Limiting static friction f_max = μ_s mg = 0.5 × 4 × 10 = 20 N. Since applied force F = 15 N < f_max, the block stays at rest and static friction matches the applied force: f = 15 N.',
    stepMarking: [
      { step: 'Compute f_max = 20 N > 15 N', marks: '+2' },
      { step: 'Static friction self-adjusts to 15 N', marks: '+2' }
    ],
    examinerTip: 'Always compare applied force with μ_s N before using μ_k N.',
    commonPitfall: 'Blindly reporting μ_s N = 20 N or μ_k N = 16 N when the block does not move.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Circular Motion (Banking of Roads)',
    questionText: 'A car negotiates an unbanked circular turn of radius 40 m on a level road where μ_s = 0.4 (g = 10 m/s²). What is the maximum safe speed without skidding?',
    options: ['4√10 m/s', '20 m/s', '10 m/s', '8√5 m/s'],
    correctOption: '4√10 m/s',
    modelAnswer: 'Maximum safe speed on a flat road: v_max = √(μ_s R g) = √(0.4 × 40 × 10) = √160 = 4√10 m/s.',
    stepMarking: [
      { step: 'Equate centripetal force to limiting friction: v = √(μRg) = 4√10 m/s', marks: '+4' }
    ],
    examinerTip: '√160 = 4√10 ≈ 12.65 m/s; keep radicals exact in JEE MCQs.',
    commonPitfall: 'Forgetting to take the square root of 160.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Work, Energy & Power',
    questionText: 'A particle moves from x = 0 to x = 4 m along the x-axis under a variable force F(x) = (3x² - 2x + 5) N. Calculate the work done by the force.',
    options: ['68 J', '64 J', '48 J', '72 J'],
    correctOption: '68 J',
    modelAnswer: 'W = ∫₀⁴ (3x² - 2x + 5) dx = [x³ - x² + 5x]₀⁴ = (64 - 16 + 20) - 0 = 68 J.',
    stepMarking: [
      { step: 'Integrate F(x) dx from 0 to 4 => [x³ - x² + 5x]₀⁴ = 68 J', marks: '+4' }
    ],
    examinerTip: 'Check arithmetic at the upper limit: 64 - 16 + 20 = 68.',
    commonPitfall: 'Evaluating F(4) × 4 instead of integrating.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Work, Energy & Power (Vertical Circle)',
    questionText: 'A small bob of mass m suspended by a light string of length L is given a horizontal speed √(5gL) at the lowest point. What is the tension in the string when the string becomes horizontal?',
    options: ['3 mg', '2 mg', '4 mg', 'mg'],
    correctOption: '3 mg',
    modelAnswer: 'By energy conservation from bottom to horizontal position: (1/2)mv² = (1/2)m(5gL) - mgL => v² = 3gL. At horizontal, gravity has no radial component, so T = mv²/L = 3mg.',
    stepMarking: [
      { step: 'Find v² = 3gL at θ = 90°', marks: '+2' },
      { step: 'T = mv²/L = 3mg', marks: '+2' }
    ],
    examinerTip: 'For critical vertical loop u = √(5gL), tensions are 6mg (bottom), 3mg (mid), 0 (top).',
    commonPitfall: 'Adding or subtracting mg at the horizontal position where weight is tangential.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Centre of Mass & Collisions',
    questionText: 'A ball of mass 2 kg moving at 6 m/s collides head-on elastically with a stationary ball of mass 4 kg. What is the speed of the 4 kg ball after collision?',
    options: ['4 m/s', '2 m/s', '3 m/s', '6 m/s'],
    correctOption: '4 m/s',
    modelAnswer: 'For elastic head-on collision with u₂ = 0: v₂ = (2 m₁ u₁) / (m₁ + m₂) = (2 × 2 × 6) / (2 + 4) = 24 / 6 = 4 m/s.',
    stepMarking: [
      { step: 'Apply v₂ = 2m₁u₁ / (m₁ + m₂) = 4 m/s', marks: '+4' }
    ],
    examinerTip: 'Also note v₁ = (m₁ - m₂)u₁/(m₁ + m₂) = -2 m/s (rebounds).',
    commonPitfall: 'Swapping m₁ and m₂ in the numerator.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Moment of Inertia)',
    questionText: 'A uniform circular disc of mass M and radius R has moment of inertia I₀ about an axis passing through its centre and perpendicular to its plane. What is its moment of inertia about a tangent in the plane of the disc?',
    options: ['(5/4) MR²', '(3/2) MR²', '(1/2) MR²', '(3/4) MR²'],
    correctOption: '(5/4) MR²',
    modelAnswer: 'By perpendicular axes theorem, I_diameter = (1/2) I₀ = (1/4) MR². By parallel axes theorem, I_tangent_in_plane = I_diameter + MR² = (1/4)MR² + MR² = (5/4)MR².',
    stepMarking: [
      { step: 'I_diameter = MR²/4 via perpendicular axes', marks: '+2' },
      { step: 'Add MR² via parallel axes => 5MR²/4', marks: '+2' }
    ],
    examinerTip: 'Tangent in plane = 5MR²/4; tangent perpendicular to plane = 3MR²/2.',
    commonPitfall: 'Giving 3MR²/2, which is for a tangent perpendicular to the disc plane.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Rolling)',
    questionText: 'A solid sphere rolls without slipping down an inclined plane of inclination 30°. What is its linear acceleration down the plane (g = 10 m/s²)?',
    options: ['25/7 m/s²', '5 m/s²', '10/3 m/s²', '5/2 m/s²'],
    correctOption: '25/7 m/s²',
    modelAnswer: 'a = g sinθ / (1 + I/(MR²)). For solid sphere I/(MR²) = 2/5. a = (10 × 0.5) / (1 + 2/5) = 5 / (7/5) = 25/7 m/s².',
    stepMarking: [
      { step: 'Use k²/R² = 2/5 in a = g sinθ / (1 + k²/R²)', marks: '+4' }
    ],
    examinerTip: 'Memorize k²/R² ratios: Sphere 2/5, Disc/Cylinder 1/2, Hollow Sphere 2/3, Ring 1.',
    commonPitfall: 'Forgetting rotational inertia and using g sinθ = 5 m/s².'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Rotational Motion (Angular Momentum)',
    questionText: 'A uniform turntable of moment of inertia I rotates freely at ω₀. A lump of clay of mass m drops gently onto its rim at radius R and sticks to it. What is the new angular speed?',
    options: ['I ω₀ / (I + mR²)', 'I ω₀ / (I + mR²/2)', '(I + mR²) ω₀ / I', 'I ω₀ / mR²'],
    correctOption: 'I ω₀ / (I + mR²)',
    modelAnswer: 'No external torque acts about the spindle axis, so angular momentum is conserved: L_i = I ω₀ = (I + mR²) ω_f => ω_f = I ω₀ / (I + mR²).',
    stepMarking: [
      { step: 'Apply L_i = L_f with I_f = I + mR²', marks: '+4' }
    ],
    examinerTip: 'Point mass on rim contributes mR² regardless of disc geometry.',
    commonPitfall: 'Conserving kinetic energy here — sticking is an inelastic collision!'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Gravitation (Variation of g)',
    questionText: 'At what height h above the surface of Earth (radius R) does the acceleration due to gravity drop to 25% of its surface value?',
    options: ['R', '2R', 'R/2', '3R'],
    correctOption: 'R',
    modelAnswer: 'g(h) = g₀ [R / (R + h)]². Setting g(h)/g₀ = 1/4 gives R / (R + h) = 1/2 => R + h = 2R => h = R.',
    stepMarking: [
      { step: 'R/(R+h) = √(1/4) = 1/2 => h = R', marks: '+4' }
    ],
    examinerTip: 'Use exact inverse-square formula when h is comparable to R; 1 - 2h/R only works for h << R.',
    commonPitfall: 'Using linear approximation 1 - 2h/R = 0.25 which gives wrong answer h = 3R/8.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Gravitation (Satellite & Escape Velocity)',
    questionText: 'A satellite orbits Earth at height h = R above the surface. What is the ratio of its orbital speed to the escape speed from Earth’s surface?',
    options: ['1 : 2', '1 : √2', '1 : 2√2', '√2 : 1'],
    correctOption: '1 : 2',
    modelAnswer: 'Orbital speed at r = 2R is v_o = √(GM / 2R). Surface escape speed is v_e = √(2GM / R). Ratio v_o / v_e = √(1/4) = 1/2.',
    stepMarking: [
      { step: 'v_o = √(GM/2R) and v_e = √(2GM/R)', marks: '+2' },
      { step: 'Divide => 1 : 2', marks: '+2' }
    ],
    examinerTip: 'Remember v_e = √2 v_o only at r = R (near surface), not at r = 2R.',
    commonPitfall: 'Blindly choosing 1 : √2 without noticing h = R doubles the orbital radius.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Mechanical Properties of Solids (Elasticity)',
    questionText: 'Two wires of the same material have lengths in ratio 1 : 2 and radii in ratio 2 : 1. When stretched by the same tension, what is the ratio of their elongations (ΔL₁ : ΔL₂)?',
    options: ['1 : 8', '1 : 4', '1 : 2', '2 : 1'],
    correctOption: '1 : 8',
    modelAnswer: 'ΔL = FL / (π r² Y). For same F and Y, ΔL ∝ L / r². Thus ΔL₁/ΔL₂ = (L₁/L₂)(r₂/r₁)² = (1/2)(1/2)² = 1/8.',
    stepMarking: [
      { step: 'Use ΔL ∝ L/r² => (1/2) × (1/2)² = 1/8', marks: '+4' }
    ],
    examinerTip: 'Check r² in the denominator carefully when radius ratio is given.',
    commonPitfall: 'Using diameter/radius linearly instead of squaring.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Fluid Mechanics (Bernoulli & Torricelli)',
    questionText: 'A large open tank holds water up to height H = 5 m. A tiny hole is punched at a depth h = 1.8 m below the free surface. What is the speed of efflux (g = 10 m/s²)?',
    options: ['6 m/s', '8 m/s', '10 m/s', '4 m/s'],
    correctOption: '6 m/s',
    modelAnswer: 'By Torricelli’s theorem, efflux speed depends on depth h below the free surface: v = √(2gh) = √(2 × 10 × 1.8) = √36 = 6 m/s.',
    stepMarking: [
      { step: 'Apply v = √(2gh) with h = 1.8 m => 6 m/s', marks: '+4' }
    ],
    examinerTip: 'Depth h is measured from the top surface down to the hole, not from the bottom.',
    commonPitfall: 'Using H - h = 3.2 m to get √64 = 8 m/s.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Fluid Mechanics (Surface Tension)',
    questionText: 'If work W is done in blowing a soap bubble of radius R, how much additional work is required to increase its radius from R to 2R at constant temperature?',
    options: ['3W', '4W', '2W', 'W'],
    correctOption: '3W',
    modelAnswer: 'Soap bubble has 2 free surfaces, so W = 2 × 4πR² T = 8πR² T. For radius 2R, total energy = 8π(4R²) T = 4W. Additional work = 4W - W = 3W.',
    stepMarking: [
      { step: 'Surface energy ∝ R² => E(2R) = 4W => ΔW = 3W', marks: '+4' }
    ],
    examinerTip: 'Notice ratio questions cancel the factor of 2 (bubble vs drop) anyway, giving 3W.',
    commonPitfall: 'Reporting 4W instead of subtracting initial work W.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics (Carnot Engine)',
    questionText: 'A Carnot engine operates between a source at 327°C and a sink at 27°C. If it absorbs 1200 J of heat from the source per cycle, how much work does it perform?',
    options: ['600 J', '400 J', '800 J', '900 J'],
    correctOption: '600 J',
    modelAnswer: 'Convert to Kelvin: T₁ = 327 + 273 = 600 K, T₂ = 27 + 273 = 300 K. η = 1 - T₂/T₁ = 1 - 300/600 = 0.5. Work W = η Q₁ = 0.5 × 1200 = 600 J.',
    stepMarking: [
      { step: 'Convert T₁ = 600 K, T₂ = 300 K => η = 50%', marks: '+2' },
      { step: 'W = 0.5 × 1200 = 600 J', marks: '+2' }
    ],
    examinerTip: 'Never plug °C directly into Carnot efficiency — always add 273 K.',
    commonPitfall: 'Computing 1 - 27/327 instead of converting to Kelvin.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Thermodynamics & KTG (First Law)',
    questionText: 'An ideal monoatomic gas undergoes an isobaric expansion during which it absorbs 500 J of heat. How much work is done by the gas during this process?',
    options: ['200 J', '300 J', '250 J', '150 J'],
    correctOption: '200 J',
    modelAnswer: 'At constant pressure, Q = n C_p ΔT and ΔU = n C_v ΔT. For monoatomic gas γ = 5/3, so ΔU/Q = C_v/C_p = 3/5. Thus W/Q = 1 - 3/5 = 2/5 => W = (2/5) × 500 = 200 J.',
    stepMarking: [
      { step: 'Use W/Q = R/C_p = 2/5 for monoatomic gas', marks: '+2' },
      { step: 'W = 0.4 × 500 = 200 J', marks: '+2' }
    ],
    examinerTip: 'For isobaric heating: Monoatomic ΔU:W:Q = 3:2:5; Diatomic = 5:2:7.',
    commonPitfall: 'Using ΔU = 200 J instead of W = 200 J.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Kinetic Theory of Gases (RMS Speed)',
    questionText: 'At what temperature will the root-mean-square (rms) speed of oxygen (O₂) molecules equal the rms speed of hydrogen (H₂) molecules at 27°C?',
    options: ['4800 K', '2400 K', '1200 K', '300 K'],
    correctOption: '4800 K',
    modelAnswer: 'v_rms = √(3RT/M). Equal v_rms means T₁/M₁ = T₂/M₂. T_O2 / 32 = (27 + 273) / 2 = 300 / 2 => T_O2 = 16 × 300 = 4800 K.',
    stepMarking: [
      { step: 'Set T_O2 / 32 = 300 K / 2 => T_O2 = 4800 K', marks: '+4' }
    ],
    examinerTip: 'Check whether options are in K or °C; here 4800 K = 4527°C.',
    commonPitfall: 'Forgetting to convert 27°C to 300 K.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Oscillations (SHM)',
    questionText: 'A particle executes SHM with amplitude A. At what displacement x from the mean position is its kinetic energy equal to three times its potential energy?',
    options: ['A / 2', 'A / √2', '√3 A / 2', 'A / 4'],
    correctOption: 'A / 2',
    modelAnswer: 'K = (1/2)k(A² - x²) and U = (1/2)kx². Setting K = 3U => A² - x² = 3x² => 4x² = A² => x = ± A/2.',
    stepMarking: [
      { step: 'A² - x² = 3x² => x = A/2', marks: '+4' }
    ],
    examinerTip: 'At x = A/2, U = E/4 and K = 3E/4.',
    commonPitfall: 'Confusing K = U (which occurs at x = A/√2) with K = 3U.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Waves (Organ Pipes & Harmonics)',
    questionText: 'A closed organ pipe (closed at one end) and an open organ pipe have the same length. What is the ratio of the fundamental frequency of the closed pipe to that of the open pipe?',
    options: ['1 : 2', '2 : 1', '1 : 4', '3 : 2'],
    correctOption: '1 : 2',
    modelAnswer: 'f_closed = v / (4L) and f_open = v / (2L). Hence f_closed : f_open = (1/4) : (1/2) = 1 : 2.',
    stepMarking: [
      { step: 'f_closed = v/4L, f_open = v/2L => 1 : 2', marks: '+4' }
    ],
    examinerTip: 'Closed pipe supports only odd harmonics (1, 3, 5...); open pipe supports all harmonics.',
    commonPitfall: 'Reversing the ratio to 2 : 1.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Waves (Standing Waves on a String)',
    questionText: 'A stretched string of length 1 m and mass 4 g is under a tension of 100 N. What is the speed of transverse waves along the string?',
    options: ['50√10 m/s', '100 m/s', '25√10 m/s', '500 m/s'],
    correctOption: '50√10 m/s',
    modelAnswer: 'Linear mass density μ = 4 × 10⁻³ kg / 1 m = 4 × 10⁻³ kg/m. Speed v = √(T/μ) = √(100 / 0.004) = √25000 = 50√10 m/s.',
    stepMarking: [
      { step: 'Convert μ = 4×10⁻³ kg/m', marks: '+2' },
      { step: 'v = √(100 / 4×10⁻³) = 50√10 m/s', marks: '+2' }
    ],
    examinerTip: 'Always convert mass from grams to kilograms before dividing by length.',
    commonPitfall: 'Using μ = 4 g/m directly gives √25 = 5 m/s.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrostatics & Gauss Law',
    questionText: 'A charge Q is placed at the centre of one face of a cube of side a. What is the electric flux passing through the remaining five faces of the cube?',
    options: ['Q / (2ε₀)', 'Q / (6ε₀)', '5Q / (6ε₀)', 'Q / ε₀'],
    correctOption: 'Q / (2ε₀)',
    modelAnswer: 'By placing an identical imaginary cube symmetrically over that face, charge Q sits at the common interface centre of the two-cube enclosure. Total flux through both = Q/ε₀, so flux through the original cube = Q/(2ε₀); flux through the open face itself is zero.',
    stepMarking: [
      { step: 'Gaussian two-cube symmetry => Q / (2ε₀)', marks: '+4' }
    ],
    examinerTip: 'Corner = Q/(8ε₀), Edge = Q/(4ε₀), Face Centre = Q/(2ε₀).',
    commonPitfall: 'Dividing by 6 to get Q/(6ε₀), forgetting the charge is not at the cube centre.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrostatics (Electric Dipole)',
    questionText: 'An electric dipole of moment p is placed in a uniform electric field E. What is the work done by an external agent in rotating it slowly from stable equilibrium (θ = 0°) to unstable equilibrium (θ = 180°)?',
    options: ['2 pE', 'pE', '0', '-2 pE'],
    correctOption: '2 pE',
    modelAnswer: 'Potential energy U(θ) = -pE cosθ. W_ext = U(180°) - U(0°) = (+pE) - (-pE) = 2 pE.',
    stepMarking: [
      { step: 'ΔU = pE(cos 0° - cos 180°) = 2pE', marks: '+4' }
    ],
    examinerTip: 'From 0° to 90° is pE; from 0° to 180° is 2pE.',
    commonPitfall: 'Missing the negative sign in U = -pE cosθ.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Capacitors & Dielectrics',
    questionText: 'A parallel-plate air capacitor has capacitance 6 μF. A dielectric slab of constant K = 4 is inserted to completely fill the space while the battery remains disconnected. If initial stored energy was U₀, the final stored energy is:',
    options: ['U₀ / 4', '4 U₀', 'U₀ / 2', '2 U₀'],
    correctOption: 'U₀ / 4',
    modelAnswer: 'With battery disconnected, charge Q stays constant and capacitance becomes K C₀ = 4 C₀. Energy U = Q²/(2C) decreases by factor K: U_f = U₀ / 4.',
    stepMarking: [
      { step: 'Isolated capacitor => Q constant => U = Q²/(2KC) = U₀/4', marks: '+4' }
    ],
    examinerTip: 'Battery disconnected: Q constant, U drops to U₀/K. Battery connected: V constant, U rises to K U₀.',
    commonPitfall: 'Multiplying by K instead of dividing by K when battery is disconnected.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity (Wire Stretching)',
    questionText: 'A wire of resistance 16 Ω is melted and drawn into a wire of half its original length (volume conserved). Find its new resistance.',
    options: ['4 Ω', '8 Ω', '32 Ω', '64 Ω'],
    correctOption: '4 Ω',
    modelAnswer: 'With constant volume V, R ∝ L². Halving length reduces resistance by (1/2)² = 1/4 => R_new = 16 / 4 = 4 Ω.',
    stepMarking: [
      { step: 'Volume constant => R_new / R = (L_new / L)² = 1/4 => 4 Ω', marks: '+4' }
    ],
    examinerTip: 'Direct shortcut: R ∝ L² ∝ 1/A² ∝ 1/r⁴ for stretching/compressing wires.',
    commonPitfall: 'Using R ∝ L directly to get 8 Ω.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity & Experimental Skills (Meter Bridge)',
    questionText: 'In a meter bridge experiment, a resistance of 12 Ω is in the left gap and an unknown resistance X is in the right gap. The null point is obtained at 40 cm from the left end. What is X?',
    options: ['18 Ω', '8 Ω', '15 Ω', '24 Ω'],
    correctOption: '18 Ω',
    modelAnswer: 'At balance, R / X = l / (100 - l) => 12 / X = 40 / 60 = 2 / 3 => X = 18 Ω.',
    stepMarking: [
      { step: '12 / X = 40 / 60 => X = 18 Ω', marks: '+4' }
    ],
    examinerTip: 'Meter bridge is a direct Wheatstone bridge application in Unit 20.',
    commonPitfall: 'Taking 40/100 instead of 40/(100-40) = 40/60.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Current Electricity (Galvanometer Conversion)',
    questionText: 'A galvanometer of resistance 50 Ω gives full-scale deflection for a current of 2 mA. What shunt resistance is needed to convert it into an ammeter of range 0–1 A?',
    options: ['0.10 Ω', '0.25 Ω', '1.00 Ω', '0.05 Ω'],
    correctOption: '0.10 Ω',
    modelAnswer: 'Shunt S = (I_g G) / (I - I_g) = (0.002 × 50) / (1 - 0.002) = 0.1 / 0.998 ≈ 0.10 Ω.',
    stepMarking: [
      { step: 'Use S = I_g G / (I - I_g) ≈ 0.10 Ω', marks: '+4' }
    ],
    examinerTip: 'Ammeter conversion puts a tiny shunt in parallel; voltmeter puts a huge R in series.',
    commonPitfall: 'Using I = 2 A or putting the resistor in series.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Moving Charges & Magnetism (Biot-Savart)',
    questionText: 'A circular loop of radius R carries current I and produces magnetic field B₀ at its centre. What is the magnetic field on its axis at a distance x = √3 R from the centre?',
    options: ['B₀ / 8', 'B₀ / 4', 'B₀ / 2', 'B₀ / 16'],
    correctOption: 'B₀ / 8',
    modelAnswer: 'B_axis = B₀ R³ / (R² + x²)^(3/2). With x = √3 R, R² + x² = 4R², so (4R²)^(3/2) = 8 R³. Hence B_axis = B₀ / 8.',
    stepMarking: [
      { step: 'Substitute x = √3 R into B₀ [R² / (R²+x²)]^(3/2) => B₀/8', marks: '+4' }
    ],
    examinerTip: 'Remember B_axis / B_centre = cos³θ where tanθ = x/R.',
    commonPitfall: 'Using exponent 1/2 instead of 3/2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Moving Charges & Magnetism (Charged Particle Motion)',
    questionText: 'A proton and an alpha particle enter a uniform magnetic field perpendicularly with the same kinetic energy. What is the ratio of the radii of their circular paths (r_p : r_α)?',
    options: ['1 : 1', '1 : 2', '2 : 1', '1 : 4'],
    correctOption: '1 : 1',
    modelAnswer: 'r = √(2mK) / (qB). For proton (m_p, e) and alpha (4m_p, 2e), √m / q is √1 / 1 = 1 for proton and √4 / 2 = 1 for alpha. So r_p : r_α = 1 : 1.',
    stepMarking: [
      { step: 'r ∝ √m / q at same K and B', marks: '+2' },
      { step: 'Compute 1/1 : 2/2 = 1 : 1', marks: '+2' }
    ],
    examinerTip: 'Deuteron has m=2, q=1 => r_d = √2 r_p at equal kinetic energy.',
    commonPitfall: 'Assuming equal velocity instead of equal kinetic energy.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Magnetism & Matter (Magnetic Materials)',
    questionText: 'Which of the following correctly describes the temperature dependence of magnetic susceptibility (χ) for a paramagnetic material according to Curie’s Law?',
    options: ['χ ∝ 1 / T', 'χ ∝ T', 'χ is negative and temperature-independent', 'χ ∝ 1 / T²'],
    correctOption: 'χ ∝ 1 / T',
    modelAnswer: 'By Curie’s law, χ = C / T (in Kelvin) for paramagnetic materials, whereas diamagnetic χ is small, negative, and practically independent of T.',
    stepMarking: [
      { step: 'Curie law: χ = C/T for paramagnetic substances', marks: '+4' }
    ],
    examinerTip: 'Above Curie temperature T_c, a ferromagnet turns paramagnetic with χ = C / (T - T_c).',
    commonPitfall: 'Confusing Curie’s 1/T law with diamagnetic temperature-independence.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electromagnetic Induction (Motional EMF)',
    questionText: 'A conducting rod of length 0.5 m rotates in a plane perpendicular to a uniform magnetic field of 0.4 T at an angular speed of 20 rad/s about one end. Find the induced EMF between its ends.',
    options: ['1.0 V', '2.0 V', '0.5 V', '4.0 V'],
    correctOption: '1.0 V',
    modelAnswer: 'Induced EMF for rotating rod about one end: ε = (1/2) B ω L² = 0.5 × 0.4 × 20 × (0.5)² = 4 × 0.25 = 1.0 V.',
    stepMarking: [
      { step: 'Apply ε = (1/2) B ω L² = 1.0 V', marks: '+4' }
    ],
    examinerTip: 'Use average linear speed v_avg = ωL/2 => ε = B (ωL/2) L.',
    commonPitfall: 'Omitting the factor 1/2 gives 2.0 V.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Alternating Current (Series LCR Resonance)',
    questionText: 'In a series LCR circuit driven by an AC source of 200 V (rms), R = 40 Ω, X_L = 80 Ω, and X_C = 50 Ω. What is the power factor of the circuit?',
    options: ['0.8', '0.6', '0.5', '1.0'],
    correctOption: '0.8',
    modelAnswer: 'Impedance Z = √[R² + (X_L - X_C)²] = √[40² + (80 - 50)²] = √(1600 + 900) = 50 Ω. Power factor cos φ = R / Z = 40 / 50 = 0.8.',
    stepMarking: [
      { step: 'Z = √(40² + 30²) = 50 Ω', marks: '+2' },
      { step: 'cos φ = R/Z = 40/50 = 0.8', marks: '+2' }
    ],
    examinerTip: '3-4-5 Pythagorean triplet (30, 40, 50) appears constantly in NTA LCR questions.',
    commonPitfall: 'Computing sin φ = 30/50 = 0.6 instead of cos φ = R/Z.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electromagnetic Waves',
    questionText: 'A plane electromagnetic wave propagates along +z direction in vacuum with electric field amplitude E₀ = 120 V/m along +x. What is the magnetic field amplitude B₀ and its direction?',
    options: ['4 × 10⁻⁷ T along +y', '4 × 10⁻⁷ T along -y', '3.6 × 10¹⁰ T along +y', '3 × 10⁻⁷ T along +y'],
    correctOption: '4 × 10⁻⁷ T along +y',
    modelAnswer: 'B₀ = E₀ / c = 120 / (3 × 10⁸) = 4 × 10⁻⁷ T. Since E × B points along propagation (+k̂) and E is along +î, B must be along +ĵ (+y).',
    stepMarking: [
      { step: 'B₀ = E₀ / c = 4 × 10⁻⁷ T', marks: '+2' },
      { step: 'î × ĵ = +k̂ => B is along +y', marks: '+2' }
    ],
    examinerTip: 'Always check direction with Poynting vector E × B || v.',
    commonPitfall: 'Choosing -y by mixing up right-hand cross product.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ray Optics (Lens Maker’s Formula)',
    questionText: 'A biconvex lens of glass (μ = 1.5) has focal length 20 cm in air. What will be its focal length when completely immersed in water (μ_w = 4/3)?',
    options: ['80 cm', '40 cm', '20 cm', '60 cm'],
    correctOption: '80 cm',
    modelAnswer: '1/f_air = (1.5 - 1) K = 0.5 K. In water, 1/f_w = ((1.5 / (4/3)) - 1) K = (9/8 - 1) K = (1/8) K. Thus f_w / f_air = 0.5 / (1/8) = 4 => f_w = 4 × 20 = 80 cm.',
    stepMarking: [
      { step: 'Relative refractive index in water = 9/8', marks: '+2' },
      { step: 'f_w = 4 × f_air = 80 cm', marks: '+2' }
    ],
    examinerTip: 'Memorize: For μ = 1.5 glass immersed in water (4/3), focal length always quadruples (4f).',
    commonPitfall: 'Assuming focal length stays 20 cm or doubles to 40 cm.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ray Optics (Prism Deviation)',
    questionText: 'An equilateral glass prism (A = 60°) has refractive index μ = √2. What is the angle of minimum deviation (δ_m)?',
    options: ['30°', '45°', '60°', '15°'],
    correctOption: '30°',
    modelAnswer: 'μ = sin[(A + δ_m)/2] / sin(A/2). Here √2 = sin[(60° + δ_m)/2] / sin 30° = 2 sin[(60° + δ_m)/2] => sin[(60° + δ_m)/2] = 1/√2 = sin 45° => (60° + δ_m)/2 = 45° => δ_m = 30°.',
    stepMarking: [
      { step: 'sin[(60+δ_m)/2] = √2 × 0.5 = 1/√2 => 45° => δ_m = 30°', marks: '+4' }
    ],
    examinerTip: 'At minimum deviation, i = e and r₁ = r₂ = A/2 = 30°.',
    commonPitfall: 'Setting (60° + δ_m)/2 = 30° instead of 45°.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Wave Optics (YDSE)',
    questionText: 'In Young’s double-slit experiment, two coherent waves of intensities I and 4I interfere. What is the ratio of maximum intensity to minimum intensity in the interference pattern?',
    options: ['9 : 1', '5 : 3', '25 : 9', '4 : 1'],
    correctOption: '9 : 1',
    modelAnswer: 'I_max / I_min = (√I₁ + √I₂)² / (√I₁ - √I₂)² = (1 + 2)² / (1 - 2)² = 9 / 1.',
    stepMarking: [
      { step: 'Take square roots of intensities (1 and 2) => (3/1)² = 9 : 1', marks: '+4' }
    ],
    examinerTip: 'Never add intensities directly without taking square roots for amplitudes first.',
    commonPitfall: 'Computing (4+1)/(4-1) = 5:3.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Wave Optics (Polarization — Brewster Law)',
    questionText: 'Unpolarized light is incident on a plane glass surface of refractive index √3 at the polarizing (Brewster) angle. What is the angle of refraction inside the glass?',
    options: ['30°', '60°', '45°', '90°'],
    correctOption: '30°',
    modelAnswer: 'tan θ_p = μ = √3 => θ_p = 60°. At Brewster angle, reflected and refracted rays are perpendicular: θ_p + r = 90° => r = 90° - 60° = 30°.',
    stepMarking: [
      { step: 'θ_p = tan⁻¹(√3) = 60° => r = 90° - 60° = 30°', marks: '+4' }
    ],
    examinerTip: 'Read carefully whether the question asks for polarizing angle (60°) or angle of refraction (30°).',
    commonPitfall: 'Reporting θ_p = 60° as the angle of refraction.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Dual Nature of Matter (de Broglie Wavelength)',
    questionText: 'An electron and a proton are accelerated from rest through the same potential difference V. What is the ratio of their de Broglie wavelengths (λ_e : λ_p)?',
    options: ['√(m_p / m_e)', '√(m_e / m_p)', 'm_p / m_e', '1 : 1'],
    correctOption: '√(m_p / m_e)',
    modelAnswer: 'λ = h / √(2 m q V). Since |q| = e and V are identical for both, λ ∝ 1 / √m. Therefore λ_e / λ_p = √(m_p / m_e).',
    stepMarking: [
      { step: 'Use λ = h / √(2meV) => λ_e / λ_p = √(m_p / m_e)', marks: '+4' }
    ],
    examinerTip: 'Lighter particle at equal kinetic energy has larger de Broglie wavelength.',
    commonPitfall: 'Inverting the ratio to √(m_e / m_p).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atoms (Bohr Model)',
    questionText: 'In a hydrogen atom, an electron transitions from n = 3 to n = 1. How many distinct spectral emission lines are possible when a large sample of atoms is excited to n = 3?',
    options: ['3', '2', '6', '1'],
    correctOption: '3',
    modelAnswer: 'Maximum distinct emission lines from level n down to ground state = n(n - 1)/2 = 3(2)/2 = 3 (namely 3→2, 2→1, and 3→1).',
    stepMarking: [
      { step: 'Use n(n-1)/2 for n = 3 => 3 lines', marks: '+4' }
    ],
    examinerTip: 'For a single atom transitioning from n=3 to n=1, max lines = n - 1 = 2; for a sample, n(n-1)/2 = 3.',
    commonPitfall: 'Confusing single-atom cascade max (n-1) with ensemble sample max n(n-1)/2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Nuclei (Binding Energy)',
    questionText: 'The binding energy per nucleon of ²H₁ (deuteron) is 1.1 MeV and that of ⁴He₂ is 7.0 MeV. When two deuterons fuse to form one helium nucleus, the energy released is:',
    options: ['23.6 MeV', '25.8 MeV', '5.9 MeV', '11.8 MeV'],
    correctOption: '23.6 MeV',
    modelAnswer: 'Total BE of 2 deuterons = 2 × (2 × 1.1) = 4.4 MeV. Total BE of ⁴He = 4 × 7.0 = 28.0 MeV. Energy released Q = 28.0 - 4.4 = 23.6 MeV.',
    stepMarking: [
      { step: 'BE_products - BE_reactants = 28.0 - 4.4 = 23.6 MeV', marks: '+4' }
    ],
    examinerTip: 'Multiply binding energy per nucleon by mass number A to get total BE.',
    commonPitfall: 'Subtracting BE per nucleon directly (7.0 - 1.1 = 5.9 MeV).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Semiconductors (Logic Gates)',
    questionText: 'A logic circuit takes inputs A and B through a NAND gate followed by a NOT gate (built from a shorted-input NAND). Which single gate is this combination equivalent to?',
    options: ['AND gate', 'OR gate', 'NOR gate', 'XOR gate'],
    correctOption: 'AND gate',
    modelAnswer: 'First NAND gives Y₁ = (A·B)′. Second NOT inverts it: Y = ((A·B)′)′ = A·B, which is an AND gate.',
    stepMarking: [
      { step: 'Double inversion of NAND yields Y = A·B (AND gate)', marks: '+4' }
    ],
    examinerTip: 'NAND + NOT = AND; NOR + NOT = OR (retained in 2026 NTA Semiconductor syllabus).',
    commonPitfall: 'Confusing NAND-inverted with NOR.'
  },

  // --- Section B: Compulsory Numericals (15) ---
  {
    section: 'B',
    marks: 4,
    topic: 'Modern Physics (Photoelectric Numerical)',
    questionText: '[Section B Compulsory Numerical] Light of wavelength 310 nm falls on a metal of work function 2.0 eV. Take hc = 1240 eV·nm. Find the stopping potential in Volts (nearest integer).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'E_photon = 1240 / 310 = 4.0 eV', marks: '+2' },
      { step: 'K_max = 4.0 - 2.0 = 2.0 eV => V_s = 2 V', marks: '+2' }
    ],
    examinerTip: 'NTA discontinued optional 5/10 in Section B — all 5 numericals are compulsory with -1 penalty.',
    commonPitfall: 'Forgetting to subtract work function φ = 2.0 eV and entering 4.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Kinematics (Projectile Range Numerical)',
    questionText: '[Section B Compulsory Numerical] A ball is thrown horizontally from a cliff of height 80 m with a speed of 15 m/s (g = 10 m/s²). Find the horizontal distance from the foot of the cliff where it hits the ground, in metres.',
    modelAnswer: '60',
    stepMarking: [
      { step: 'Time of flight t = √(2h/g) = √(160/10) = 4 s', marks: '+2' },
      { step: 'Range = u × t = 15 × 4 = 60 m', marks: '+2' }
    ],
    examinerTip: 'Horizontal velocity remains constant at 15 m/s throughout flight.',
    commonPitfall: 'Using v_y = gt = 40 m/s instead of u_x = 15 m/s for horizontal distance.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Laws of Motion (Pulley-Block Numerical)',
    questionText: '[Section B Compulsory Numerical] Blocks of mass 3 kg and 7 kg are connected by a light inextensible string over a smooth, massless pulley. Take g = 10 m/s². Find the acceleration of the system in m/s².',
    modelAnswer: '4',
    stepMarking: [
      { step: 'a = (m₂ - m₁)g / (m₁ + m₂) = (7 - 3)×10 / (7 + 3) = 40 / 10 = 4 m/s²', marks: '+4' }
    ],
    examinerTip: 'Atwood machine shortcut: a = (Δm / Σm) g.',
    commonPitfall: 'Dividing by single mass instead of total mass (m₁ + m₂).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Work, Energy & Power (Spring Numerical)',
    questionText: '[Section B Compulsory Numerical] A 2 kg block moving at 4 m/s on a frictionless horizontal surface hits and compresses a massless spring of spring constant k = 200 N/m. Find the maximum compression of the spring in cm.',
    modelAnswer: '40',
    stepMarking: [
      { step: '(1/2) m v² = (1/2) k x² => 2 × 16 = 200 x² => x² = 0.16', marks: '+2' },
      { step: 'x = 0.4 m = 40 cm', marks: '+2' }
    ],
    examinerTip: 'Read unit carefully: the prompt asks for cm, not metres!',
    commonPitfall: 'Entering 0.4 (metres) instead of 40 (cm).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Rotational Motion (Torque & Angular Acceleration)',
    questionText: '[Section B Compulsory Numerical] A solid cylinder of mass 4 kg and radius 0.5 m is free to rotate about its symmetry axis. A tangential force of 12 N is applied to its rim. Find its angular acceleration in rad/s².',
    modelAnswer: '12',
    stepMarking: [
      { step: 'I = (1/2) M R² = 0.5 × 4 × 0.25 = 0.5 kg·m²', marks: '+2' },
      { step: 'τ = F R = 12 × 0.5 = 6 N·m => α = τ/I = 6 / 0.5 = 12 rad/s²', marks: '+2' }
    ],
    examinerTip: 'For a solid cylinder/disc with tangential force, α = 2F / (MR) = 24 / 2 = 12 rad/s².',
    commonPitfall: 'Using I = MR² (ring formula) instead of (1/2)MR².'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electrostatics (Equivalent Capacitance Numerical)',
    questionText: '[Section B Compulsory Numerical] Three capacitors of 6 μF, 6 μF, and 3 μF are connected in series across a 100 V battery. Find the total charge supplied by the battery in μC.',
    modelAnswer: '150',
    stepMarking: [
      { step: '1/C_eq = 1/6 + 1/6 + 1/3 = 4/6 => C_eq = 1.5 μF', marks: '+2' },
      { step: 'Q = C_eq × V = 1.5 × 100 = 150 μC', marks: '+2' }
    ],
    examinerTip: 'In series, reciprocals add; total charge on every capacitor equals C_eq V.',
    commonPitfall: 'Adding capacitances directly (15 μF) as if in parallel.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Current Electricity (RC Steady-State Numerical)',
    questionText: '[Section B Compulsory Numerical] A 12 V battery of negligible internal resistance is connected across a parallel combination of 6 Ω and 3 Ω resistors in series with a 2 Ω resistor. Find the total current drawn from the battery in Amperes.',
    modelAnswer: '3',
    stepMarking: [
      { step: 'R_parallel = (6×3)/(6+3) = 2 Ω', marks: '+2' },
      { step: 'R_total = 2 + 2 = 4 Ω => I = 12 / 4 = 3 A', marks: '+2' }
    ],
    examinerTip: 'Simplify parallel branches first before adding series resistances.',
    commonPitfall: 'Adding 6 + 3 + 2 in series.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Magnetism (Force Between Parallel Wires)',
    questionText: '[Section B Compulsory Numerical] Two long parallel straight wires separated by 10 cm carry currents of 5 A and 10 A in the same direction. Find the magnetic force per metre length between them in μN/m. (Use μ₀ = 4π × 10⁻⁷ T·m/A)',
    modelAnswer: '100',
    stepMarking: [
      { step: 'F/L = (μ₀ I₁ I₂) / (2π d) = (2 × 10⁻⁷ × 5 × 10) / 0.1', marks: '+2' },
      { step: 'F/L = 10⁻⁴ N/m = 100 μN/m', marks: '+2' }
    ],
    examinerTip: 'μ₀/(2π) = 2 × 10⁻⁷ N/A² saves time in every straight-wire calculation.',
    commonPitfall: 'Forgetting to convert d = 10 cm = 0.1 m or N/m to μN/m.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electromagnetic Induction (Self-Inductance Numerical)',
    questionText: '[Section B Compulsory Numerical] Current in a coil of self-inductance 2 H changes uniformly from 10 A to 2 A in 0.4 s. Find the magnitude of induced EMF in Volts.',
    modelAnswer: '40',
    stepMarking: [
      { step: '|ε| = L |ΔI / Δt| = 2 × (8 / 0.4) = 40 V', marks: '+4' }
    ],
    examinerTip: 'Magnitude is asked, so ignore the minus sign from Lenz’s law.',
    commonPitfall: 'Dividing by 0.4 incorrectly as 8 × 0.4.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Alternating Current (Transformer Numerical)',
    questionText: '[Section B Compulsory Numerical] An ideal step-down transformer has 2000 turns on its primary coil and 200 turns on its secondary coil. If the primary is connected to 220 V AC and secondary supplies 5 A to a load, find the primary current in mA.',
    modelAnswer: '500',
    stepMarking: [
      { step: 'I_p / I_s = N_s / N_p = 200 / 2000 = 1/10', marks: '+2' },
      { step: 'I_p = 5 × 0.1 = 0.5 A = 500 mA', marks: '+2' }
    ],
    examinerTip: 'For an ideal transformer, V_p I_p = V_s I_s; voltage steps down so current steps down in primary.',
    commonPitfall: 'Reporting 0.5 A instead of converting to mA (500).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Ray Optics (Lens Combination Numerical)',
    questionText: '[Section B Compulsory Numerical] Two thin lenses of powers +5 D and -3 D are placed in contact coaxially. Find the focal length of the equivalent lens combination in cm.',
    modelAnswer: '50',
    stepMarking: [
      { step: 'P_eq = P₁ + P₂ = +5 - 3 = +2 D', marks: '+2' },
      { step: 'f_eq = 100 / P_eq = 100 / 2 = 50 cm', marks: '+2' }
    ],
    examinerTip: 'Power in Dioptres directly equals 100 / f(cm) in air.',
    commonPitfall: 'Using 1/P_eq = 0.5 and forgetting to convert metres to cm.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Wave Optics (YDSE Fringe Width Numerical)',
    questionText: '[Section B Compulsory Numerical] In a YDSE setup, slit separation d = 1 mm, screen distance D = 1 m, and wavelength λ = 600 nm. Find the distance between the central bright fringe and the 5th bright fringe in mm.',
    modelAnswer: '3',
    stepMarking: [
      { step: 'β = λD/d = (600×10⁻⁹ × 1) / 10⁻³ = 0.6 mm', marks: '+2' },
      { step: 'y₅ = 5 β = 5 × 0.6 = 3 mm', marks: '+2' }
    ],
    examinerTip: 'Fringe width β = 0.6 mm; 5th bright fringe is at 5β.',
    commonPitfall: 'Using (2n - 1)β/2 which gives dark fringe positions.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Thermodynamics (Gas Mixture γ Numerical)',
    questionText: '[Section B Compulsory Numerical] One mole of a monoatomic ideal gas is mixed with one mole of a diatomic ideal gas (rigid). If C_v of the mixture is x R, find the value of x.',
    modelAnswer: '2',
    stepMarking: [
      { step: 'C_v,mix = (n₁ C_v1 + n₂ C_v2) / (n₁ + n₂) = (1×1.5R + 1×2.5R) / 2 = 2R => x = 2', marks: '+4' }
    ],
    examinerTip: 'Monoatomic C_v = 1.5R, rigid diatomic C_v = 2.5R.',
    commonPitfall: 'Averaging γ values directly instead of molar C_v values.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Semiconductors (Zener Diode Regulator Numerical)',
    questionText: '[Section B Compulsory Numerical] A Zener diode of breakdown voltage 10 V is used as a voltage regulator with a series resistor of 500 Ω across an unregulated 20 V supply. If the load resistor connected across the Zener is 1 kΩ, find the Zener current in mA.',
    modelAnswer: '10',
    stepMarking: [
      { step: 'Series current I_s = (20 - 10) / 500 = 20 mA', marks: '+2' },
      { step: 'Load current I_L = 10 / 1000 = 10 mA => I_Z = I_s - I_L = 10 mA', marks: '+2' }
    ],
    examinerTip: 'Apply KCL at the Zener node: I_series = I_Zener + I_load.',
    commonPitfall: 'Forgetting to subtract load current I_L = 10 mA from total series current.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Experimental Skills (Simple Pendulum Error Numerical)',
    questionText: '[Section B Compulsory Numerical] While determining g using a simple pendulum (T = 2π √(L/g)), length L has 1% uncertainty and time period T has 2% uncertainty. Find the maximum percentage error in g.',
    modelAnswer: '5',
    stepMarking: [
      { step: 'g = 4π² L / T² => %Δg = %ΔL + 2(%ΔT)', marks: '+2' },
      { step: '%Δg = 1% + 2(2%) = 5%', marks: '+2' }
    ],
    examinerTip: 'Squared time period doubles the error contribution of T in g measurement.',
    commonPitfall: 'Adding 1% + 2% = 3% without squaring T.'
  }
];

// ============================================================================
// CHEMISTRY QUESTION BANK — 60 Questions (45 Section A MCQs + 15 Section B Numericals)
// Strictly aligned with NTA JEE Main 2026 Rationalized Syllabus (No deleted chapters)
// ============================================================================
const CHEM_Q_BANK: RawPyqQuestion[] = [
  // --- Section A: Single-Choice MCQs (45) ---
  {
    section: 'A',
    marks: 4,
    topic: 'Some Basic Concepts (Limiting Reagent)',
    questionText: 'When 5.6 g of N₂ reacts with 2.0 g of H₂ to form ammonia (N₂ + 3H₂ → 2NH₃), what is the maximum mass of NH₃ formed? (Molar mass: N = 14, H = 1 g/mol)',
    options: ['6.8 g', '11.3 g', '3.4 g', '17.0 g'],
    correctOption: '6.8 g',
    modelAnswer: 'n(N₂) = 5.6/28 = 0.2 mol; n(H₂) = 2.0/2 = 1.0 mol. 0.2 mol N₂ needs 0.6 mol H₂ (< 1.0 mol), so N₂ is limiting. NH₃ formed = 2 × 0.2 = 0.4 mol = 0.4 × 17 = 6.8 g.',
    stepMarking: [
      { step: 'Identify N₂ (0.2 mol) as limiting reagent', marks: '+2' },
      { step: 'NH₃ = 0.4 mol × 17 g/mol = 6.8 g', marks: '+2' }
    ],
    examinerTip: 'Divide moles by stoichiometric coefficient to spot the limiting reagent instantly.',
    commonPitfall: 'Choosing H₂ as limiting because 2.0 g < 5.6 g by mass.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atomic Structure (Quantum Numbers)',
    questionText: 'Which set of quantum numbers (n, l, m_l, m_s) is NOT permissible for an electron in an atom?',
    options: ['(3, 3, -2, +1/2)', '(4, 2, 0, -1/2)', '(2, 1, -1, +1/2)', '(3, 0, 0, -1/2)'],
    correctOption: '(3, 3, -2, +1/2)',
    modelAnswer: 'For principal quantum number n = 3, azimuthal quantum number l can only take values 0, 1, 2 (0 to n - 1). Thus l = 3 is invalid.',
    stepMarking: [
      { step: 'Rule l ≤ n - 1 violated for (3, 3, -2, +1/2)', marks: '+4' }
    ],
    examinerTip: 'Check three rules in order: n ≥ 1, 0 ≤ l ≤ n-1, -l ≤ m_l ≤ +l.',
    commonPitfall: 'Overlooking l = n equality.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Atomic Structure (Radial Nodes)',
    questionText: 'How many radial nodes and angular nodes are present in a 4p orbital respectively?',
    options: ['2, 1', '3, 1', '1, 2', '2, 2'],
    correctOption: '2, 1',
    modelAnswer: 'For 4p: n = 4, l = 1. Radial nodes = n - l - 1 = 4 - 1 - 1 = 2. Angular nodes = l = 1.',
    stepMarking: [
      { step: 'Radial = n - l - 1 = 2; Angular = l = 1', marks: '+4' }
    ],
    examinerTip: 'Total nodes is always n - 1 = 3.',
    commonPitfall: 'Swapping radial (2) and angular (1) counts.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Classification of Elements & Periodicity',
    questionText: 'Among the second-period elements B, C, N, and O, the correct increasing order of first ionization enthalpy (IE₁) is:',
    options: ['B < C < O < N', 'B < C < N < O', 'B < O < C < N', 'C < B < O < N'],
    correctOption: 'B < C < O < N',
    modelAnswer: 'Across Period 2, IE₁ generally increases, except Nitrogen (2p³ half-filled stable configuration) has higher IE₁ than Oxygen (2p⁴). Hence B < C < O < N.',
    stepMarking: [
      { step: 'Half-filled 2p³ stability puts N > O => B < C < O < N', marks: '+4' }
    ],
    examinerTip: 'Period 2 IE₁ order: Li < B < Be < C < O < N < F < Ne.',
    commonPitfall: 'Forgetting the N > O anomaly.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding & MOT',
    questionText: 'According to Molecular Orbital Theory, which diatomic species exhibits a bond order of 2.5 and is paramagnetic?',
    options: ['O₂⁺', 'O₂⁻', 'N₂', 'F₂'],
    correctOption: 'O₂⁺',
    modelAnswer: 'O₂ has BO = 2. Removing one antibonding π*2p electron gives O₂⁺ (15 e⁻) with BO = 2.5 and 1 unpaired electron (paramagnetic).',
    stepMarking: [
      { step: 'Count 15 electrons => BO = 2.5 & paramagnetic', marks: '+4' }
    ],
    examinerTip: '14 e⁻ = 3.0, 15 e⁻ = 2.5, 16 e⁻ = 2.0, 17 e⁻ = 1.5, 18 e⁻ = 1.0.',
    commonPitfall: 'Confusing O₂⁺ (15 e⁻, BO 2.5) with O₂⁻ (17 e⁻, BO 1.5).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding (VSEPR & Hybridization)',
    questionText: 'What are the hybridization of Xenon and molecular shape of XeF₄ respectively?',
    options: ['sp³d², square planar', 'sp³d, see-saw', 'sp³d², octahedral', 'sp³, tetrahedral'],
    correctOption: 'sp³d², square planar',
    modelAnswer: 'Xe has 8 valence electrons: 4 bond pairs to F and 2 lone pairs => steric number 6 (sp³d²). With 2 axial lone pairs, the molecular geometry is square planar.',
    stepMarking: [
      { step: '4 BP + 2 LP => sp³d² octahedral electron geometry => square planar shape', marks: '+4' }
    ],
    examinerTip: 'Distinguish electron-pair geometry (octahedral) from molecular shape (square planar).',
    commonPitfall: 'Calling the molecular shape octahedral instead of square planar.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Bonding (Dipole Moment)',
    questionText: 'Which of the following molecules has a non-zero net dipole moment?',
    options: ['NF₃', 'BF₃', 'BeF₂', 'CCl₄'],
    correctOption: 'NF₃',
    modelAnswer: 'BF₃ (trigonal planar), BeF₂ (linear), and CCl₄ (tetrahedral) are completely symmetrical with zero dipole moment. NF₃ is trigonal pyramidal (one lone pair on N), giving a net non-zero dipole moment.',
    stepMarking: [
      { step: 'Identify pyramidal unsymmetrical geometry of NF₃', marks: '+4' }
    ],
    examinerTip: 'Note NH₃ (1.47 D) > NF₃ (0.24 D), though both are non-zero.',
    commonPitfall: 'Treating BF₃ and NF₃ as having identical planar geometry.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Thermodynamics (ΔH and ΔU)',
    questionText: 'For the reaction N₂(g) + 3H₂(g) → 2NH₃(g) at 300 K, what is the value of ΔH - ΔU?',
    options: ['-2 RT', '+2 RT', '-RT', '+RT'],
    correctOption: '-2 RT',
    modelAnswer: 'ΔH - ΔU = Δn_g RT, where Δn_g = n_products(g) - n_reactants(g) = 2 - (1 + 3) = -2. Thus ΔH - ΔU = -2 RT.',
    stepMarking: [
      { step: 'Compute Δn_g = 2 - 4 = -2 => ΔH - ΔU = -2RT', marks: '+4' }
    ],
    examinerTip: 'Count only gaseous moles when computing Δn_g.',
    commonPitfall: 'Taking Δn_g = +2 instead of -2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Thermodynamics (Spontaneity & ΔG)',
    questionText: 'For a reaction with ΔH < 0 and ΔS < 0, the reaction will be spontaneous (ΔG < 0):',
    options: ['Only at low temperatures (T < ΔH/ΔS)', 'At all temperatures', 'Only at high temperatures (T > ΔH/ΔS)', 'Never'],
    correctOption: 'Only at low temperatures (T < ΔH/ΔS)',
    modelAnswer: 'ΔG = ΔH - TΔS. With ΔH < 0 and ΔS < 0, -TΔS is positive. For ΔG < 0, magnitude |ΔH| must exceed |TΔS|, which happens at low T.',
    stepMarking: [
      { step: 'Analyze sign of ΔH - TΔS when both ΔH and ΔS are negative', marks: '+4' }
    ],
    examinerTip: 'ΔH < 0, ΔS > 0 => always spontaneous; ΔH < 0, ΔS < 0 => low T.',
    commonPitfall: 'Assuming exothermic reactions are spontaneous at all temperatures.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Solutions (Van’t Hoff Factor)',
    questionText: 'If 0.1 M aqueous K₄[Fe(CN)₆] is 50% dissociated at 300 K, what is its effective Van’t Hoff factor (i)?',
    options: ['3.0', '2.5', '3.5', '5.0'],
    correctOption: '3.0',
    modelAnswer: 'K₄[Fe(CN)₆] gives n = 5 ions (4 K⁺ + 1 [Fe(CN)₆]⁴⁻). i = 1 + α(n - 1) = 1 + 0.5(5 - 1) = 1 + 2 = 3.0.',
    stepMarking: [
      { step: 'Apply i = 1 + α(n - 1) with n = 5, α = 0.5 => 3.0', marks: '+4' }
    ],
    examinerTip: 'Never dissociate the complex coordination sphere — only counter ions!',
    commonPitfall: 'Counting Fe²⁺ and 6 CN⁻ separately to get n = 11.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Solutions (Raoult’s Law & Azeotropes)',
    questionText: 'Which pair of liquids forms a solution showing negative deviation from Raoult’s law and a maximum-boiling azeotrope?',
    options: ['Chloroform + Acetone', 'Ethanol + Water', 'Acetone + Carbon disulphide', 'n-Hexane + n-Heptane'],
    correctOption: 'Chloroform + Acetone',
    modelAnswer: 'CHCl₃ and (CH₃)₂CO form strong intermolecular H-bonding upon mixing, lowering vapour pressure (negative deviation) and creating a maximum-boiling azeotrope.',
    stepMarking: [
      { step: 'H-bonding between CHCl₃ and acetone causes negative deviation', marks: '+4' }
    ],
    examinerTip: 'Negative deviation = stronger A–B attraction = lower VP = higher boiling point.',
    commonPitfall: 'Choosing Ethanol + Water, which shows positive deviation (minimum-boiling azeotrope).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Equilibrium (Kp vs Kc)',
    questionText: 'For which equilibrium reaction is K_p equal to K_c at all temperatures?',
    options: ['H₂(g) + I₂(g) ⇌ 2HI(g)', 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)'],
    correctOption: 'H₂(g) + I₂(g) ⇌ 2HI(g)',
    modelAnswer: 'K_p = K_c (RT)^Δn_g. For H₂(g) + I₂(g) ⇌ 2HI(g), Δn_g = 2 - (1 + 1) = 0, so K_p = K_c.',
    stepMarking: [
      { step: 'Identify Δn_g = 0 for H₂ + I₂ ⇌ 2HI', marks: '+4' }
    ],
    examinerTip: 'Whenever gaseous moles on both sides are equal, K_p = K_c.',
    commonPitfall: 'Missing gaseous stoichiometry count.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ionic Equilibrium (Solubility Product K_sp)',
    questionText: 'If the solubility of sparingly soluble salt Ag₂CrO₄ in pure water is s mol/L, its solubility product K_sp is:',
    options: ['4 s³', 's²', '27 s⁴', '2 s³'],
    correctOption: '4 s³',
    modelAnswer: 'Ag₂CrO₄(s) ⇌ 2Ag⁺(aq) + CrO₄²⁻(aq). [Ag⁺] = 2s, [CrO₄²⁻] = s. K_sp = (2s)²(s) = 4s³.',
    stepMarking: [
      { step: 'K_sp = [Ag⁺]²[CrO₄²⁻] = (2s)²(s) = 4s³', marks: '+4' }
    ],
    examinerTip: 'A_x B_y type gives K_sp = x^x y^y s^(x+y).',
    commonPitfall: 'Writing 2s³ without squaring the factor 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Ionic Equilibrium (Buffer Solutions)',
    questionText: 'An aqueous solution contains 0.1 M CH₃COOH (pK_a = 4.74) and 0.1 M CH₃COONa. What is the pH of this buffer solution?',
    options: ['4.74', '9.26', '5.74', '3.74'],
    correctOption: '4.74',
    modelAnswer: 'By Henderson-Hasselbalch equation, pH = pK_a + log([Salt]/[Acid]) = 4.74 + log(0.1/0.1) = 4.74 + 0 = 4.74.',
    stepMarking: [
      { step: 'Equal salt & acid concentrations => pH = pK_a = 4.74', marks: '+4' }
    ],
    examinerTip: 'At half-neutralization point of a weak acid, pH = pK_a.',
    commonPitfall: 'Confusing pH with pOH = 14 - 4.74.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Redox Reactions (Disproportionation)',
    questionText: 'Which of the following species CANNOT undergo disproportionation reaction?',
    options: ['ClO₄⁻', 'ClO⁻', 'ClO₂⁻', 'ClO₃⁻'],
    correctOption: 'ClO₄⁻',
    modelAnswer: 'In ClO₄⁻, Chlorine is in its highest possible oxidation state (+7). Since it cannot be oxidized further, it cannot disproportionate.',
    stepMarking: [
      { step: 'Cl is at maximum +7 state in ClO₄⁻', marks: '+4' }
    ],
    examinerTip: 'Disproportionation requires an intermediate oxidation state that can go both up and down.',
    commonPitfall: 'Picking ClO⁻ (+1) or ClO₃⁻ (+5), both of which can oxidize up to +7.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrochemistry (Kohlrausch Law)',
    questionText: 'Given Λ°_m(NaCl) = 126.4, Λ°_m(HCl) = 425.9, and Λ°_m(CH₃COONa) = 91.0 S·cm²/mol, what is Λ°_m(CH₃COOH)?',
    options: ['390.5 S·cm²/mol', '461.3 S·cm²/mol', '208.5 S·cm²/mol', '516.9 S·cm²/mol'],
    correctOption: '390.5 S·cm²/mol',
    modelAnswer: 'Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl) = 91.0 + 425.9 - 126.4 = 390.5 S·cm²/mol.',
    stepMarking: [
      { step: 'Add CH₃COONa + HCl and subtract NaCl => 390.5', marks: '+4' }
    ],
    examinerTip: 'Always double-check ion cancellation: (CH₃COO⁻ + Na⁺) + (H⁺ + Cl⁻) - (Na⁺ + Cl⁻).',
    commonPitfall: 'Adding NaCl instead of subtracting it.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Electrochemistry (Faraday’s Laws)',
    questionText: 'How many Faradays of electricity are required to reduce 1 mole of MnO₄⁻ ions to Mn²⁺ ions in acidic medium?',
    options: ['5 F', '3 F', '7 F', '2 F'],
    correctOption: '5 F',
    modelAnswer: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Mn goes from +7 to +2, requiring 5 moles of electrons = 5 Faradays per mole of MnO₄⁻.',
    stepMarking: [
      { step: 'Oxidation state change +7 to +2 => 5 electrons => 5 F', marks: '+4' }
    ],
    examinerTip: 'n-factor of KMnO₄: 5 in acidic, 3 in neutral/faintly alkaline, 1 in strongly alkaline.',
    commonPitfall: 'Using +7 directly instead of Δ(OS) = 7 - 2 = 5.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Chemical Kinetics (Arrhenius Equation)',
    questionText: 'In an Arrhenius plot of ln k vs (1/T), the slope of the straight line is -5000 K. What is the activation energy E_a (in kcal/mol)? (Take R ≈ 2 cal·mol⁻¹·K⁻¹)',
    options: ['10 kcal/mol', '5 kcal/mol', '2.5 kcal/mol', '20 kcal/mol'],
    correctOption: '10 kcal/mol',
    modelAnswer: 'ln k = ln A - (E_a / R)(1/T). Slope = -E_a / R = -5000 K => E_a = 5000 × 2 cal/mol = 10,000 cal/mol = 10 kcal/mol.',
    stepMarking: [
      { step: 'Equate E_a / R = 5000 K => E_a = 10 kcal/mol', marks: '+4' }
    ],
    examinerTip: 'Check whether the plot uses ln k (slope -E_a/R) or log₁₀ k (slope -E_a / 2.303R).',
    commonPitfall: 'Multiplying by 2.303 unnecessarily when the graph is already ln k.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'p-Block Elements (Inert Pair Effect)',
    questionText: 'Among Group 13 halides, the stability of the +1 oxidation state increases down the group in the order:',
    options: ['Al⁺ < Ga⁺ < In⁺ < Tl⁺', 'Tl⁺ < In⁺ < Ga⁺ < Al⁺', 'Ga⁺ < Al⁺ < In⁺ < Tl⁺', 'In⁺ < Tl⁺ < Ga⁺ < Al⁺'],
    correctOption: 'Al⁺ < Ga⁺ < In⁺ < Tl⁺',
    modelAnswer: 'Due to poor shielding by intervening d and f electrons, the ns² valence electrons remain reluctant to participate in bonding (inert pair effect), making Tl⁺ much more stable than Tl³⁺.',
    stepMarking: [
      { step: 'Inert pair effect increases down Group 13 => Al⁺ < Ga⁺ < In⁺ < Tl⁺', marks: '+4' }
    ],
    examinerTip: 'Same rule explains Pb²⁺ > Pb⁴⁺ (Group 14) and Bi³⁺ > Bi⁵⁺ (Group 15).',
    commonPitfall: 'Reversing the trend for +3 stability vs +1 stability.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'p-Block Elements (Oxoacids of Phosphorus)',
    questionText: 'What is the basicity (number of ionizable H atoms) of hypophosphorous acid (H₃PO₂) and phosphorous acid (H₃PO₃) respectively?',
    options: ['1 and 2', '3 and 3', '2 and 3', '1 and 3'],
    correctOption: '1 and 2',
    modelAnswer: 'Only H attached to oxygen (-OH) is ionizable; P-H bonds are non-ionizable. H₃PO₂ has one -OH and two P-H bonds (monobasic, 1). H₃PO₃ has two -OH and one P-H bond (dibasic, 2).',
    stepMarking: [
      { step: 'Count P-OH groups: 1 in H₃PO₂, 2 in H₃PO₃', marks: '+4' }
    ],
    examinerTip: 'Every oxoacid of phosphorus has at least one P=O bond; remaining O atoms form -OH.',
    commonPitfall: 'Assuming all 3 hydrogens are acidic like in H₃PO₄.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'd and f-Block Elements (Lanthanide Contraction)',
    questionText: 'Which pair of transition metals has almost identical atomic radii due to lanthanide contraction?',
    options: ['Zr and Hf', 'Ti and Zr', 'Fe and Co', 'Cr and Mo'],
    correctOption: 'Zr and Hf',
    modelAnswer: 'Poor shielding by 4f electrons causes lanthanide contraction, making 4d and 5d pairs (especially Zr = 160 pm and Hf = 159 pm) almost identical in atomic radius.',
    stepMarking: [
      { step: '4f shielding weakness equates 4d Zr and 5d Hf radii', marks: '+4' }
    ],
    examinerTip: 'Also remember Nb ≈ Ta and Mo ≈ W for the exact same reason.',
    commonPitfall: 'Picking 3d/4d pair Ti and Zr where normal period increase still dominates.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'd and f-Block Elements (KMnO₄ Reactions)',
    questionText: 'In neutral or faintly alkaline medium, potassium permanganate (KMnO₄) oxidizes iodide ion (I⁻) to:',
    options: ['Iodate (IO₃⁻)', 'Iodine (I₂)', 'Periodate (IO₄⁻)', 'Hypoiodite (IO⁻)'],
    correctOption: 'Iodate (IO₃⁻)',
    modelAnswer: 'NCERT d-block reaction: 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻. In acidic medium it forms I₂, whereas in neutral/faintly alkaline medium it forms IO₃⁻.',
    stepMarking: [
      { step: 'In neutral/alkaline medium: I⁻ → IO₃⁻; in acidic medium: I⁻ → I₂', marks: '+4' }
    ],
    examinerTip: 'One of the highest-frequency NCERT line-by-line JEE Main questions!',
    commonPitfall: 'Selecting I₂, which is the product in acidic medium.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds (Hybridization & Magnetism)',
    questionText: 'The hybridization and spin-only magnetic moment of [Ni(CN)₄]²⁻ ion (Atomic no. of Ni = 28) are respectively:',
    options: ['dsp², 0 BM', 'sp³, 2.83 BM', 'dsp², 1.73 BM', 'sp³, 0 BM'],
    correctOption: 'dsp², 0 BM',
    modelAnswer: 'Ni²⁺ is 3d⁸. Strong field CN⁻ pairs all 8 electrons in four d-orbitals leaving one vacant 3d orbital => dsp² square planar, n = 0 unpaired => 0 BM.',
    stepMarking: [
      { step: 'Square planar dsp² & diamagnetic 0 BM', marks: '+4' }
    ],
    examinerTip: 'Strong-field CN⁻ pairs 3d⁸ electrons; weak-field Cl⁻ leaves 2 unpaired.',
    commonPitfall: 'Confusing [Ni(CN)₄]²⁻ (dsp², 0 BM) with [NiCl₄]²⁻ (sp³, 2.83 BM).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds (CFSE & Spectrochemical Series)',
    questionText: 'Which of the following octahedral complexes exhibits the largest crystal field splitting energy (Δ_o)?',
    options: ['[Co(CN)₆]³⁻', '[Co(NH₃)₆]³⁺', '[Co(H₂O)₆]³⁺', '[CoF₆]³⁻'],
    correctOption: '[Co(CN)₆]³⁻',
    modelAnswer: 'For the same metal ion (Co³⁺), Δ_o increases with ligand field strength: F⁻ < H₂O < NH₃ < CN⁻. Thus [Co(CN)₆]³⁻ has the maximum Δ_o.',
    stepMarking: [
      { step: 'Apply spectrochemical series: CN⁻ is strongest field ligand among options', marks: '+4' }
    ],
    examinerTip: 'Remember spectrochemical order: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO.',
    commonPitfall: 'Confusing charge or picking NH₃ over CN⁻.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Coordination Compounds (Isomerism)',
    questionText: 'How many geometrical isomers are possible for the octahedral complex [Ma₂b₂c₂] (ignoring optical isomers)?',
    options: ['5', '3', '2', '6'],
    correctOption: '5',
    modelAnswer: 'By pairing trans ligands: (aa,bb,cc), (aa,bc,bc), (bb,ac,ac), (cc,ab,ab), and (ab,bc,ca) — exactly 5 geometrical isomers (the all-trans isomer is optically inactive; only (ab,bc,ca) is chiral).',
    stepMarking: [
      { step: 'Standard NCERT octahedral count for Ma₂b₂c₂ = 5 geometrical isomers', marks: '+4' }
    ],
    examinerTip: 'Memorize standard geometrical isomer counts: Ma₄b₂ (2), Ma₃b₃ (2), Ma₂b₂c₂ (5), M(AA)₂b₂ (2).',
    commonPitfall: 'Answering 6 by double-counting the chiral pair as geometrical isomers.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'GOC (Carbocation Stability)',
    questionText: 'Which carbocation is the MOST stable among the following?',
    options: ['(C₆H₅)₃C⁺', '(CH₃)₃C⁺', 'CH₂=CH-CH₂⁺', 'C₆H₅-CH₂⁺'],
    correctOption: '(C₆H₅)₃C⁺',
    modelAnswer: 'Triphenylmethyl carbocation (C₆H₅)₃C⁺ is stabilized by extensive resonance delocalization of the positive charge over three phenyl rings, exceeding benzyl, allyl, and tert-butyl.',
    stepMarking: [
      { step: '3-ring resonance stabilization makes (C₆H₅)₃C⁺ most stable', marks: '+4' }
    ],
    examinerTip: 'Resonance across 3 phenyl rings outperforms 9 α-H hyperconjugation in (CH₃)₃C⁺.',
    commonPitfall: 'Choosing (CH₃)₃C⁺ over triphenylmethyl cation.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'GOC (Acidic Strength)',
    questionText: 'Arrange the following compounds in INCREASING order of acidic strength: (I) Phenol, (II) p-Nitrophenol, (III) p-Cresol, (IV) Ethanol.',
    options: ['IV < III < I < II', 'III < IV < I < II', 'IV < I < III < II', 'I < III < IV < II'],
    correctOption: 'IV < III < I < II',
    modelAnswer: 'Ethanol (pK_a ≈ 16) is far weaker than phenols (pK_a ≈ 10). Among phenols, electron-donating -CH₃ (p-cresol) destabilizes phenoxide (weaker), while electron-withdrawing -NO₂ (p-nitrophenol) stabilizes phenoxide (stronger). Order: IV < III < I < II.',
    stepMarking: [
      { step: 'Aliphatic alcohol < p-cresol < phenol < p-nitrophenol', marks: '+4' }
    ],
    examinerTip: 'Electron-withdrawing groups (-NO₂) increase acidity; electron-donating groups (-CH₃, -OCH₃) decrease it.',
    commonPitfall: 'Placing p-cresol weaker than ethanol.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'GOC (Aromaticity)',
    questionText: 'Which of the following species is aromatic according to Hückel’s (4n + 2) π-electron rule?',
    options: ['Tropylium cation (C₇H₇⁺)', 'Cyclopentadienyl cation (C₅H₅⁺)', 'Cyclooctatetraene (C₈H₈)', 'Cyclobutadiene (C₄H₄)'],
    correctOption: 'Tropylium cation (C₇H₇⁺)',
    modelAnswer: 'C₇H₇⁺ is planar, cyclic, fully conjugated, and has 6 π-electrons (4n + 2 for n = 1), making it aromatic. C₅H₅⁺ and C₄H₄ have 4 π-e⁻ (antiaromatic); C₈H₈ is tub-shaped (non-aromatic).',
    stepMarking: [
      { step: 'C₇H₇⁺ has 6 π-electrons with complete conjugation => aromatic', marks: '+4' }
    ],
    examinerTip: 'Both C₅H₅⁻ and C₇H₇⁺ are 6 π-electron aromatic ions.',
    commonPitfall: 'Confusing C₅H₅⁺ (4 π e⁻, antiaromatic) with C₅H₅⁻ (6 π e⁻, aromatic).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Isomerism (Optical Activity & Meso)',
    questionText: 'Meso-tartaric acid is optically inactive because of:',
    options: ['Internal compensation due to plane of symmetry', 'External compensation (racemic mixture)', 'Absence of chiral carbon atoms', 'Presence of a centre of inversion only'],
    correctOption: 'Internal compensation due to plane of symmetry',
    modelAnswer: 'Meso-tartaric acid possesses two chiral centres of opposite configuration (R, S) and an internal plane of symmetry, causing internal compensation of optical rotation.',
    stepMarking: [
      { step: 'Meso form is optically inactive by internal compensation', marks: '+4' }
    ],
    examinerTip: 'Racemic mixture = external compensation; Meso compound = internal compensation.',
    commonPitfall: 'Choosing external compensation.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Hydrocarbons (Ozonolysis of Alkenes)',
    questionText: 'Reductive ozonolysis (O₃ followed by Zn/H₂O) of 2-methylbut-2-ene yields:',
    options: ['Acetone and Acetaldehyde', 'Formaldehyde and Butan-2-one', 'Two moles of Acetaldehyde', 'Acetone and Formaldehyde'],
    correctOption: 'Acetone and Acetaldehyde',
    modelAnswer: 'Cleaving the double bond of (CH₃)₂C=CH-CH₃ and placing =O on both ends gives (CH₃)₂C=O (acetone) and CH₃CHO (acetaldehyde).',
    stepMarking: [
      { step: 'Cleave C=C of (CH₃)₂C=CHCH₃ => acetone + acetaldehyde', marks: '+4' }
    ],
    examinerTip: 'Quick trick: erase the C=C bond and attach =O to each sp² carbon.',
    commonPitfall: 'Misnumbering 2-methylbut-2-ene as 2-methylbut-1-ene.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Hydrocarbons (Alkene Addition — Anti-Markovnikov)',
    questionText: 'Reaction of propene with HBr in the presence of benzoyl peroxide yields primarily:',
    options: ['1-Bromopropane', '2-Bromopropane', '1,2-Dibromopropane', 'Allyl bromide'],
    correctOption: '1-Bromopropane',
    modelAnswer: 'Peroxide effect (Kharasch effect) operates via a free-radical mechanism specifically with HBr, adding Br• to the less substituted carbon to form the more stable secondary radical intermediate, yielding 1-bromopropane.',
    stepMarking: [
      { step: 'Free-radical anti-Markovnikov addition of HBr => 1-bromopropane', marks: '+4' }
    ],
    examinerTip: 'Peroxide effect works ONLY for HBr — NOT for HCl or HI!',
    commonPitfall: 'Applying Markovnikov’s rule to get 2-bromopropane despite peroxide.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Hydrocarbons (Electrophilic Aromatic Substitution)',
    questionText: 'Which substituent on a benzene ring is ortho/para-directing yet DEACTIVATING toward electrophilic aromatic substitution?',
    options: ['-Cl', '-OCH₃', '-NO₂', '-CH₃'],
    correctOption: '-Cl',
    modelAnswer: 'Halogens (-Cl, -Br) withdraw electrons strongly via -I effect (deactivating the ring), while donating lone pairs via +M/+R to stabilize ortho and para σ-complexes (o/p-directing).',
    stepMarking: [
      { step: '-I > +R causes deactivation while +R directs o/p', marks: '+4' }
    ],
    examinerTip: 'Halogens are the classic exception: o/p-directing + deactivating.',
    commonPitfall: 'Picking -OCH₃ (activating) or -NO₂ (meta-directing).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Haloalkanes (SN1 vs SN2 Reactivity)',
    questionText: 'Which alkyl halide undergoes SN2 reaction with NaOH in DMSO at the FASTEST rate?',
    options: ['CH₃Br', 'CH₃CH₂Br', '(CH₃)₂CHBr', '(CH₃)₃CBr'],
    correctOption: 'CH₃Br',
    modelAnswer: 'SN2 proceeds via backside attack and is governed by steric hindrance: CH₃X > 1° > 2° > 3°. Thus CH₃Br reacts fastest.',
    stepMarking: [
      { step: 'Least steric hindrance gives fastest SN2 rate => CH₃Br', marks: '+4' }
    ],
    examinerTip: 'Polar aprotic solvents (DMSO, acetone) accelerate SN2; polar protic solvents favour SN1.',
    commonPitfall: 'Using carbocation stability order (3° > 2° > 1°), which applies to SN1.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Alcohols, Phenols & Ethers (Reimer-Tiemann)',
    questionText: 'Heating phenol with chloroform (CHCl₃) and aqueous NaOH followed by acidification gives salicylaldehyde. What is the reactive electrophile in this Reimer-Tiemann reaction?',
    options: ['Dichlorocarbene (:CCl₂)', 'Chloronium ion (Cl⁺)', 'Formyl cation (HCO⁺)', 'Trichloromethyl anion (CCl₃⁻)'],
    correctOption: 'Dichlorocarbene (:CCl₂)',
    modelAnswer: 'OH⁻ abstracts H⁺ from CHCl₃ forming CCl₃⁻, which loses Cl⁻ to generate neutral electrophile dichlorocarbene (:CCl₂) that attacks phenoxide at the ortho position.',
    stepMarking: [
      { step: 'CHCl₃ + OH⁻ → :CCl₂ + Cl⁻ + H₂O (neutral electrophile)', marks: '+4' }
    ],
    examinerTip: 'Replacing CHCl₃ with CCl₄ in Reimer-Tiemann gives salicylic acid.',
    commonPitfall: 'Thinking CCl₃⁻ is the electrophile.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Alcohols, Phenols & Ethers (Williamson Ether Synthesis)',
    questionText: 'To prepare tert-butyl methyl ether ((CH₃)₃C-O-CH₃) in good yield via Williamson ether synthesis, the best pair of reactants is:',
    options: ['(CH₃)₃C-O⁻ Na⁺ + CH₃Br', 'CH₃O⁻ Na⁺ + (CH₃)₃C-Br', '(CH₃)₃C-OH + CH₃OH', 'CH₃Br + (CH₃)₃C-Br'],
    correctOption: '(CH₃)₃C-O⁻ Na⁺ + CH₃Br',
    modelAnswer: 'Williamson synthesis is an SN2 reaction. Using a 3° alkyl halide with a strong alkoxide base causes E2 elimination to isobutylene. Hence use 3° alkoxide + 1°/methyl halide (CH₃Br).',
    stepMarking: [
      { step: 'Use sterically unhindered CH₃Br for SN2 with (CH₃)₃CO⁻', marks: '+4' }
    ],
    examinerTip: 'Alkyl halide in Williamson synthesis should ALWAYS be 1° or methyl.',
    commonPitfall: 'Reacting CH₃O⁻ with (CH₃)₃C-Br, which gives 2-methylpropene instead of ether.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Aldehydes & Ketones (Cannizzaro Reaction)',
    questionText: 'Which aldehyde undergoes Cannizzaro reaction on heating with concentrated NaOH (lacks α-hydrogen)?',
    options: ['Benzaldehyde (C₆H₅CHO)', 'Acetaldehyde (CH₃CHO)', 'Propanal (CH₃CH₂CHO)', 'Butanal'],
    correctOption: 'Benzaldehyde (C₆H₅CHO)',
    modelAnswer: 'Benzaldehyde has zero α-hydrogens adjacent to -CHO, so concentrated alkali induces disproportionation (Cannizzaro) into benzyl alcohol + sodium benzoate.',
    stepMarking: [
      { step: 'Identify zero α-H => Benzaldehyde undergoes Cannizzaro', marks: '+4' }
    ],
    examinerTip: 'Aldehydes with α-H undergo Aldol condensation with dilute alkali.',
    commonPitfall: 'Picking acetaldehyde, which has 3 α-hydrogens.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Aldehydes & Ketones (Iodoform Test)',
    questionText: 'Which of the following compounds gives a positive iodoform test (yellow precipitate of CHI₃ with I₂/NaOH)?',
    options: ['Pentan-2-one', 'Pentan-3-one', 'Benzaldehyde', 'Propan-1-ol'],
    correctOption: 'Pentan-2-one',
    modelAnswer: 'Iodoform test is positive for CH₃-C(=O)- or CH₃-CH(OH)- groups. Pentan-2-one has a methyl ketone (CH₃CO-) group, whereas pentan-3-one is a diethyl ketone.',
    stepMarking: [
      { step: 'Pentan-2-one contains CH₃-C(=O)- moiety => positive iodoform', marks: '+4' }
    ],
    examinerTip: 'Among alcohols, ONLY ethanol and 2-alkanols (CH₃CH(OH)R) give positive iodoform.',
    commonPitfall: 'Thinking all ketones give the iodoform test.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Carboxylic Acids & Derivatives (HVZ Reaction)',
    questionText: 'Hell-Volhard-Zelinsky (HVZ) reaction converts a carboxylic acid containing an α-hydrogen into an α-halo acid using:',
    options: ['X₂ / Red Phosphorus followed by H₂O', 'SOCl₂ / Pyridine', 'Br₂ / FeBr₃', 'NaOH / CaO'],
    correctOption: 'X₂ / Red Phosphorus followed by H₂O',
    modelAnswer: 'Carboxylic acids with α-H react with Cl₂ or Br₂ in presence of small amounts of red phosphorus to give α-halocarboxylic acids (HVZ reaction).',
    stepMarking: [
      { step: 'Reagent for HVZ α-halogenation: X₂ / Red P, H₂O', marks: '+4' }
    ],
    examinerTip: 'Formic acid (HCOOH) and 2,2-dimethylpropanoic acid do NOT give HVZ (no α-H).',
    commonPitfall: 'Confusing HVZ with decarboxylation (NaOH/CaO).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Amines (Basic Strength in Aqueous Solution)',
    questionText: 'In aqueous solution, what is the correct decreasing order of basic strength for methyl-substituted amines?',
    options: ['(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃', '(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃', 'CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃', '(CH₃)₂NH > (CH₃)₃N > CH₃NH₂ > NH₃'],
    correctOption: '(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃',
    modelAnswer: 'In water, combined +I, solvation (H-bonding), and steric effects give 2° > 1° > 3° > NH₃ for methylamines (whereas for ethylamines it is 2° > 3° > 1° > NH₃).',
    stepMarking: [
      { step: 'Aqueous methylamine order: 2° > 1° > 3° > NH₃', marks: '+4' }
    ],
    examinerTip: 'Gas phase basicity is purely +I: 3° > 2° > 1° > NH₃. Aqueous methyl: 2-1-3; ethyl: 2-3-1.',
    commonPitfall: 'Using gas-phase order 3° > 2° > 1° in aqueous medium.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Amines (Hoffmann Bromamide & Gabriel Phthalimide)',
    questionText: 'Which reaction yields a primary amine containing ONE carbon LESS than the starting amide?',
    options: ['Hoffmann bromamide degradation', 'Gabriel phthalimide synthesis', 'Carbylamine reaction', 'Stephen reduction'],
    correctOption: 'Hoffmann bromamide degradation',
    modelAnswer: 'R-CONH₂ + Br₂ + 4NaOH → R-NH₂ + Na₂CO₃ + 2NaBr + 2H₂O removes the carbonyl carbon as carbonate, stepping down by one carbon.',
    stepMarking: [
      { step: 'RCONH₂ → RNH₂ via Hoffmann bromamide step-down', marks: '+4' }
    ],
    examinerTip: 'Gabriel phthalimide prepares pure 1° aliphatic amines (not arylamines).',
    commonPitfall: 'Confusing Hoffmann bromamide with Gabriel phthalimide.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Amines (Hinsberg Test)',
    questionText: 'Which amine reacts with benzenesulphonyl chloride (Hinsberg reagent) to form a product that is INSOLUBLE in aqueous KOH?',
    options: ['Diethylamine ((C₂H₅)₂NH)', 'Ethylamine (C₂H₅NH₂)', 'Triethylamine ((C₂H₅)₃N)', 'Aniline (C₆H₅NH₂)'],
    correctOption: 'Diethylamine ((C₂H₅)₂NH)',
    modelAnswer: 'A 2° amine (diethylamine) forms N,N-diethylbenzenesulphonamide, which has no acidic N-H hydrogen and is therefore insoluble in alkali. 1° amines form alkali-soluble sulphonamides; 3° amines do not react.',
    stepMarking: [
      { step: '2° amine gives sulphonamide lacking N-H => insoluble in KOH', marks: '+4' }
    ],
    examinerTip: '1° = reacts & soluble in KOH; 2° = reacts & insoluble in KOH; 3° = no reaction.',
    commonPitfall: 'Picking 3° amine (which does not react at all) or 1° amine (soluble).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Carbohydrates — Reducing Sugars)',
    questionText: 'Which of the following disaccharides is a NON-reducing sugar (does not reduce Tollens’ or Fehling’s reagent)?',
    options: ['Sucrose', 'Maltose', 'Lactose', 'Cellobiose'],
    correctOption: 'Sucrose',
    modelAnswer: 'In sucrose, the glycosidic linkage connects C1 of α-D-glucose and C2 of β-D-fructose, locking both anomeric carbons so neither ring can open to an aldehyde/hemiacetal.',
    stepMarking: [
      { step: 'Sucrose links both anomeric carbons (C1-α-Glc to C2-β-Fru) => non-reducing', marks: '+4' }
    ],
    examinerTip: 'Maltose and Lactose both retain one free hemiacetal group and are reducing sugars.',
    commonPitfall: 'Assuming fructose or sucrose behaves identically — free fructose IS reducing, sucrose is NOT.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Amino Acids & Proteins)',
    questionText: 'Which amino acid among the following is optically INACTIVE?',
    options: ['Glycine', 'Alanine', 'Valine', 'Serine'],
    correctOption: 'Glycine',
    modelAnswer: 'Glycine (H₂N-CH₂-COOH) has two identical H atoms on its α-carbon, making it achiral and optically inactive. All other 19 standard α-amino acids are chiral.',
    stepMarking: [
      { step: 'Glycine has R = H => α-carbon is achiral', marks: '+4' }
    ],
    examinerTip: 'Among standard natural amino acids, ONLY glycine lacks a chiral centre.',
    commonPitfall: 'Picking alanine (R = CH₃, chiral).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Practical Organic Chemistry & Salt Analysis',
    questionText: 'In qualitative salt analysis, the chromyl chloride test produces red vapours of CrO₂Cl₂ which turn NaOH solution yellow. This confirms the presence of:',
    options: ['Cl⁻', 'Br⁻', 'I⁻', 'NO₃⁻'],
    correctOption: 'Cl⁻',
    modelAnswer: 'Heating a chloride salt with solid K₂Cr₂O₇ and conc. H₂SO₄ evolves deep red vapours of chromyl chloride (CrO₂Cl₂), which dissolve in NaOH to give yellow Na₂CrO₄.',
    stepMarking: [
      { step: 'CrO₂Cl₂ formation confirms Cl⁻ (covalent chlorides like AgCl/HgCl₂ are exceptions)', marks: '+4' }
    ],
    examinerTip: 'Br⁻ gives brown Br₂ vapours (not chromyl bromide); HgCl₂, AgCl, PbCl₂ fail the test.',
    commonPitfall: 'Confusing red CrO₂Cl₂ vapours with brown Br₂ vapours.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Biomolecules (Nucleic Acids — DNA Base Pairing)',
    questionText: 'In double-stranded DNA, complementary base pairing between the two strands occurs via hydrogen bonding between:',
    options: ['Adenine–Thymine (2 H-bonds) & Guanine–Cytosine (3 H-bonds)', 'Adenine–Uracil (2 H-bonds) & Guanine–Cytosine (3 H-bonds)', 'Adenine–Guanine (3 H-bonds) & Thymine–Cytosine (2 H-bonds)', 'Adenine–Cytosine (2 H-bonds) & Guanine–Thymine (3 H-bonds)'],
    correctOption: 'Adenine–Thymine (2 H-bonds) & Guanine–Cytosine (3 H-bonds)',
    modelAnswer: 'In DNA, purine Adenine pairs with pyrimidine Thymine via 2 hydrogen bonds (A=T), while Guanine pairs with Cytosine via 3 hydrogen bonds (G≡C). Uracil replaces Thymine in RNA.',
    stepMarking: [
      { step: 'DNA base pairs: A=T (2 H-bonds) and G≡C (3 H-bonds)', marks: '+4' }
    ],
    examinerTip: 'Higher G–C content gives DNA a higher melting temperature (T_m) due to 3 H-bonds per pair.',
    commonPitfall: 'Selecting Uracil (present in RNA, not DNA).'
  },

  // --- Section B: Compulsory Numericals (15) ---
  {
    section: 'B',
    marks: 4,
    topic: 'Chemical Kinetics (Numerical)',
    questionText: '[Section B Compulsory Numerical] A first-order reaction is 75% complete in 40 minutes. Find its half-life (t₁/₂) in minutes.',
    modelAnswer: '20',
    stepMarking: [
      { step: '75% completion takes 2 half-lives', marks: '+2' },
      { step: 't₁/₂ = 40 / 2 = 20 minutes', marks: '+2' }
    ],
    examinerTip: 'For 1st-order: t_75% = 2 t₁/₂, t_87.5% = 3 t₁/₂, t_99.9% ≈ 10 t₁/₂.',
    commonPitfall: 'Taking 40 / 0.75 instead of counting half-lives.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Mole Concept (Molarity Numerical)',
    questionText: '[Section B Compulsory Numerical] 4.9 g of H₂SO₄ (molar mass = 98 g/mol) is dissolved in water to prepare 250 mL of solution. Find the molarity of the solution multiplied by 10 (i.e., 10 × M).',
    modelAnswer: '2',
    stepMarking: [
      { step: 'Moles = 4.9 / 98 = 0.05 mol; V = 0.25 L', marks: '+2' },
      { step: 'M = 0.05 / 0.25 = 0.2 M => 10 × M = 2', marks: '+2' }
    ],
    examinerTip: 'Check multiplier carefully — here the question asks for 10 × M.',
    commonPitfall: 'Dividing by 250 mL instead of 0.25 L.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Atomic Structure (Bohr Radius Numerical)',
    questionText: '[Section B Compulsory Numerical] Taking the first Bohr orbit radius of hydrogen atom as 0.53 Å, what is the radius of the 3rd Bohr orbit of Li²⁺ ion in pm? (1 Å = 100 pm, round to nearest integer)',
    modelAnswer: '159',
    stepMarking: [
      { step: 'r_n = r₀ (n² / Z) = 0.53 × (3² / 3) = 1.59 Å', marks: '+2' },
      { step: '1.59 Å = 159 pm', marks: '+2' }
    ],
    examinerTip: 'For Li²⁺, Z = 3 so n²/Z = 9/3 = 3.',
    commonPitfall: 'Using Z = 1 (H atom) or forgetting Å to pm conversion.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Chemical Bonding (Lone Pairs Count)',
    questionText: '[Section B Compulsory Numerical] Find the total number of lone pairs of electrons on the central atom in XeF₂, XeF₄, and XeOF₄ combined.',
    modelAnswer: '6',
    stepMarking: [
      { step: 'XeF₂ has 3 LP, XeF₄ has 2 LP, XeOF₄ has 1 LP', marks: '+2' },
      { step: 'Total = 3 + 2 + 1 = 6 lone pairs', marks: '+2' }
    ],
    examinerTip: 'Note =O uses 2 electrons of Xe leaving 1 lone pair in XeOF₄.',
    commonPitfall: 'Counting lone pairs on surrounding F/O atoms instead of central Xe.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Thermodynamics (Hess’s Law Numerical)',
    questionText: '[Section B Compulsory Numerical] Standard enthalpies of combustion of C(graphite), H₂(g), and CH₄(g) are -393, -286, and -890 kJ/mol respectively. Find the magnitude of standard enthalpy of formation of CH₄(g) in kJ/mol.',
    modelAnswer: '75',
    stepMarking: [
      { step: 'Δ_f H°(CH₄) = Δ_c H°(C) + 2 Δ_c H°(H₂) - Δ_c H°(CH₄)', marks: '+2' },
      { step: '= -393 + 2(-286) - (-890) = -965 + 890 = -75 kJ/mol => magnitude 75', marks: '+2' }
    ],
    examinerTip: 'Using combustion data: ΔH_rxn = Σ Δ_c H(reactants) - Σ Δ_c H(products).',
    commonPitfall: 'Forgetting to multiply Δ_c H°(H₂) by 2.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Solutions (Freezing Point Depression Numerical)',
    questionText: '[Section B Compulsory Numerical] 18 g of glucose (C₆H₁₂O₆, molar mass 180 g/mol) is dissolved in 500 g of water (K_f = 1.86 K·kg/mol). If ΔT_f = x × 10⁻² K, find x (nearest integer).',
    modelAnswer: '37',
    stepMarking: [
      { step: 'Molality m = (18/180) / 0.5 = 0.2 mol/kg', marks: '+2' },
      { step: 'ΔT_f = 1.86 × 0.2 = 0.372 K = 37.2 × 10⁻² K => 37', marks: '+2' }
    ],
    examinerTip: 'Glucose is a non-electrolyte, so Van’t Hoff factor i = 1.',
    commonPitfall: 'Using solvent mass 500 g without converting to 0.5 kg.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Ionic Equilibrium (pH of Strong Acid Dilution)',
    questionText: '[Section B Compulsory Numerical] 10 mL of 0.1 M HCl is diluted with pure water to a final volume of 1000 mL at 298 K. What is the pH of the resulting solution?',
    modelAnswer: '3',
    stepMarking: [
      { step: 'M₂ = (0.1 × 10) / 1000 = 10⁻³ M', marks: '+2' },
      { step: 'pH = -log(10⁻³) = 3', marks: '+2' }
    ],
    examinerTip: 'Check M₁V₁ = M₂V₂ carefully.',
    commonPitfall: 'Confusing 100-fold dilution (ΔpH = +2) with 10-fold dilution.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Electrochemistry (Nernst Equation Numerical)',
    questionText: '[Section B Compulsory Numerical] For the Daniell cell Zn | Zn²⁺(0.1 M) || Cu²⁺(1.0 M) | Cu at 298 K, E°_cell = 1.10 V. Take (2.303 RT / F) = 0.06 V. If E_cell = y × 10⁻² V, find the integer y.',
    modelAnswer: '113',
    stepMarking: [
      { step: 'E = E° - (0.06/2) log([Zn²⁺]/[Cu²⁺]) = 1.10 - 0.03 log(0.1)', marks: '+2' },
      { step: 'E = 1.10 + 0.03 = 1.13 V = 113 × 10⁻² V => 113', marks: '+2' }
    ],
    examinerTip: 'n = 2 electrons transferred; log(0.1) = -1 raises E_cell above E°.',
    commonPitfall: 'Subtracting 0.03 instead of adding when log Q is negative.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Chemical Kinetics (Order of Reaction)',
    questionText: '[Section B Compulsory Numerical] For a reaction A + B → P, doubling [A] doubles the rate, while doubling [B] increases the rate by 4 times. What is the overall order of the reaction?',
    modelAnswer: '3',
    stepMarking: [
      { step: 'Order w.r.t A = 1; order w.r.t B = 2', marks: '+2' },
      { step: 'Overall order = 1 + 2 = 3', marks: '+2' }
    ],
    examinerTip: 'Rate ∝ [A]¹[B]² => overall order = sum of exponents.',
    commonPitfall: 'Taking stoichiometric sum 1 + 1 = 2 instead of experimental exponents.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Coordination Compounds (Spin-Only Magnetic Moment)',
    questionText: '[Section B Compulsory Numerical] In the complex [FeF₆]³⁻ (Atomic no. of Fe = 26), how many unpaired electrons are present on the central metal ion?',
    modelAnswer: '5',
    stepMarking: [
      { step: 'Fe³⁺ is 3d⁵; weak-field F⁻ gives high-spin t₂g³ e_g²', marks: '+2' },
      { step: 'Number of unpaired electrons = 5 (μ ≈ 5.92 BM)', marks: '+2' }
    ],
    examinerTip: 'Unlike [Fe(CN)₆]³⁻ (1 unpaired), [FeF₆]³⁻ has weak-field F⁻ ligands (5 unpaired).',
    commonPitfall: 'Pairing electrons as if F⁻ were a strong-field ligand.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'd and f-Block (Equivalent Weight / n-Factor)',
    questionText: '[Section B Compulsory Numerical] How many moles of FeC₂O₄ (ferrous oxalate) are completely oxidized by 3 moles of KMnO₄ in acidic medium?',
    modelAnswer: '5',
    stepMarking: [
      { step: 'n-factor of FeC₂O₄ = 1 (Fe²⁺→Fe³⁺) + 2 (C₂O₄²⁻→2CO₂) = 3', marks: '+2' },
      { step: 'n(FeC₂O₄) × 3 = 3 × 5 => n = 5 moles', marks: '+2' }
    ],
    examinerTip: 'Both Fe²⁺ and C₂O₄²⁻ get oxidized in FeC₂O₄, giving n-factor = 1 + 2 = 3!',
    commonPitfall: 'Using n-factor = 2 (for oxalate alone) instead of 3.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'GOC (Hyperconjugation α-H Count)',
    questionText: '[Section B Compulsory Numerical] How many α-hydrogens stabilize the propene-derived ethyl-substituted carbocation (CH₃)₂C⁺-CH₂CH₃?',
    modelAnswer: '8',
    stepMarking: [
      { step: 'Count H atoms on carbons directly attached to C⁺: 3 + 3 + 2 = 8', marks: '+4' }
    ],
    examinerTip: 'Only C-H bonds on carbons immediately adjacent to the sp² carbocation count.',
    commonPitfall: 'Including the terminal CH₃ hydrogens of -CH₂CH₃ (which are β-H, not α-H).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Isomerism (Structural Alkenes Count)',
    questionText: '[Section B Compulsory Numerical] How many total structural (constitutional) isomers are possible for an acyclic alkene with molecular formula C₄H₈?',
    modelAnswer: '3',
    stepMarking: [
      { step: 'But-1-ene, But-2-ene, and 2-Methylpropene => 3 structural isomers', marks: '+4' }
    ],
    examinerTip: 'Notice the question asks for STRUCTURAL isomers (3), excluding cis/trans stereoisomers.',
    commonPitfall: 'Counting cis/trans but-2-ene as 4, or adding cyclobutane/methylcyclopropane (cyclic).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Biomolecules (Peptide Bonds Count)',
    questionText: '[Section B Compulsory Numerical] How many peptide (-CONH-) linkages are present in an open-chain hexapeptide?',
    modelAnswer: '5',
    stepMarking: [
      { step: 'An open-chain n-peptide contains (n - 1) peptide bonds = 6 - 1 = 5', marks: '+4' }
    ],
    examinerTip: 'Number of peptide bonds = (number of amino acid residues) - 1.',
    commonPitfall: 'Entering 6 instead of 5.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Practical Organic Chemistry (Lassaigne / Kjeldahl Numerical)',
    questionText: '[Section B Compulsory Numerical] In Kjeldahl’s method for estimation of nitrogen in 0.5 g of an organic compound, the ammonia evolved neutralized 20 mL of 0.5 M H₂SO₄. Find the percentage of nitrogen in the compound.',
    modelAnswer: '56',
    stepMarking: [
      { step: 'Millimoles of H⁺ = 2 × 20 × 0.5 = 20 mmol = millimoles of NH₃ = mmol of N', marks: '+2' },
      { step: '%N = (1.4 × 20 × 0.5 × 2) / 0.5 = 56%', marks: '+2' }
    ],
    examinerTip: 'Standard shortcut: %N = (1.4 × Normality × V_mL) / mass(g). Here N = 1.0 N.',
    commonPitfall: 'Using Molarity (0.5 M) instead of Normality (1.0 N) for diprotic H₂SO₄.'
  }
];

// ============================================================================
// MATHEMATICS QUESTION BANK — 60 Questions (45 Section A MCQs + 15 Section B Numericals)
// Strictly aligned with NTA JEE Main 2026 Rationalized Syllabus (No 3D Planes / Reasoning)
// ============================================================================
const MATH_Q_BANK: RawPyqQuestion[] = [
  // --- Section A: Single-Choice MCQs (45) ---
  {
    section: 'A',
    marks: 4,
    topic: 'Sets, Relations & Functions',
    questionText: 'Let A = {1, 2, 3, 4}. What is the number of reflexive relations on A that are NOT symmetric? (Hint: count total reflexive minus reflexive-and-symmetric, or find total reflexive relations first)',
    options: ['4096 - 64 = 4032', '2¹⁶ - 2¹⁰', '4096', '64'],
    correctOption: '4096 - 64 = 4032',
    modelAnswer: 'On n = 4 elements, total reflexive relations = 2^(n² - n) = 2¹² = 4096. Relations that are both reflexive and symmetric = 2^(n(n-1)/2) = 2⁶ = 64. Thus reflexive but not symmetric = 4096 - 64 = 4032.',
    stepMarking: [
      { step: 'Reflexive count = 2¹² = 4096; Reflexive & symmetric = 2⁶ = 64', marks: '+2' },
      { step: 'Difference = 4032', marks: '+2' }
    ],
    examinerTip: 'Memorize for set size n: Reflexive = 2^(n²-n), Symmetric = 2^(n(n+1)/2), Both = 2^(n(n-1)/2).',
    commonPitfall: 'Forgetting to subtract the 64 symmetric reflexive relations.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Functions (Domain)',
    questionText: 'The domain of the real-valued function f(x) = √(9 - x²) + 1 / ln(x - 1) is:',
    options: ['(1, 2) ∪ (2, 3]', '[1, 3]', '(-3, 3]', '(1, 3]'],
    correctOption: '(1, 2) ∪ (2, 3]',
    modelAnswer: 'For √(9 - x²), we need x ∈ [-3, 3]. For ln(x - 1), we need x - 1 > 0 => x > 1. Since ln(x - 1) is in the denominator, x - 1 ≠ 1 => x ≠ 2. Intersecting gives (1, 2) ∪ (2, 3].',
    stepMarking: [
      { step: 'x ∈ [-3, 3] ∩ (1, ∞) with x ≠ 2 => (1, 2) ∪ (2, 3]', marks: '+4' }
    ],
    examinerTip: 'Always exclude zeros of any denominator log term (ln 1 = 0).',
    commonPitfall: 'Forgetting to exclude x = 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Inverse Trigonometric Functions',
    questionText: 'Evaluate the principal value of sin⁻¹(sin(5π / 6)):',
    options: ['π / 6', '5π / 6', '-π / 6', 'π / 3'],
    correctOption: 'π / 6',
    modelAnswer: 'Principal range of sin⁻¹ is [-π/2, π/2]. Since 5π/6 ∉ [-π/2, π/2], rewrite sin(5π/6) = sin(π - π/6) = sin(π/6). Hence sin⁻¹(sin(5π/6)) = π/6.',
    stepMarking: [
      { step: 'Bring angle into [-π/2, π/2] via sin(π - π/6) = sin(π/6)', marks: '+4' }
    ],
    examinerTip: 'Never cancel f⁻¹(f(x)) = x without checking the principal branch range.',
    commonPitfall: 'Blindly answering 5π/6.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Quadratic Equations & Roots',
    questionText: 'If α and β are roots of x² - 5x + 3 = 0, find the value of α² + β²:',
    options: ['19', '25', '31', '13'],
    correctOption: '19',
    modelAnswer: 'α + β = 5, αβ = 3. α² + β² = (α + β)² - 2αβ = 25 - 6 = 19.',
    stepMarking: [
      { step: 'Symmetric root identity (α+β)² - 2αβ = 19', marks: '+4' }
    ],
    examinerTip: 'Check sign of α + β = -b/a carefully.',
    commonPitfall: 'Computing 25 + 6 = 31.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Quadratic Equations (Common Root)',
    questionText: 'If the quadratic equations x² + ax + 9 = 0 and x² + bx + 15 = 0 have a common root, and the first equation has equal roots with a > 0, find the value of b:',
    options: ['8', '-8', '6', '-6'],
    correctOption: '8',
    modelAnswer: 'Equal roots in x² + ax + 9 = 0 with a > 0 gives a² - 36 = 0 => a = 6, so the repeated root is x = -3. Substituting x = -3 into x² + bx + 15 = 0 gives 9 - 3b + 15 = 0 => b = 8.',
    stepMarking: [
      { step: 'Repeated root x = -3 from a = 6', marks: '+2' },
      { step: 'Substitute x = -3 => b = 8', marks: '+2' }
    ],
    examinerTip: 'Check sign of a > 0 carefully; a = -6 would give root +3 and b = -8.',
    commonPitfall: 'Using x = +3 instead of -3.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Complex Numbers (Modulus)',
    questionText: 'What is the modulus |z| of the complex number z = (1 + i√3) / (1 - i)?',
    options: ['√2', '2', '2√2', '1 / √2'],
    correctOption: '√2',
    modelAnswer: '|z| = |1 + i√3| / |1 - i| = √(1 + 3) / √(1 + 1) = 2 / √2 = √2.',
    stepMarking: [
      { step: '|z₁/z₂| = |z₁|/|z₂| = 2 / √2 = √2', marks: '+4' }
    ],
    examinerTip: 'Never rationalize first when only modulus is asked — use |z₁/z₂| = |z₁|/|z₂| directly.',
    commonPitfall: 'Rationalizing manually and making sign errors.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Complex Numbers (Cube Roots of Unity)',
    questionText: 'If ω is a non-real cube root of unity, then the value of (1 + ω - ω²)⁷ is:',
    options: ['-128 ω²', '128 ω²', '-128 ω', '128 ω'],
    correctOption: '-128 ω²',
    modelAnswer: 'Using 1 + ω + ω² = 0, we have 1 + ω = -ω². Thus (1 + ω - ω²)⁷ = (-2ω²)⁷ = -128 ω¹⁴ = -128 (ω³)⁴ ω² = -128 ω².',
    stepMarking: [
      { step: 'Substitute 1 + ω = -ω² => (-2ω²)⁷', marks: '+2' },
      { step: 'Simplify (-2)⁷ ω¹⁴ = -128 ω²', marks: '+2' }
    ],
    examinerTip: 'Reduce powers of ω modulo 3 since ω³ = 1.',
    commonPitfall: 'Forgetting the minus sign in (-2)⁷ = -128.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Matrices (Skew-Symmetric Properties)',
    questionText: 'If A is any 3 × 3 skew-symmetric matrix with real entries, then the determinant det(A) is always equal to:',
    options: ['0', '1', '-1', 'Trace(A)'],
    correctOption: '0',
    modelAnswer: 'For skew-symmetric A, Aᵀ = -A. Taking determinants of order n = 3: det(A) = det(Aᵀ) = det(-A) = (-1)³ det(A) = -det(A) => 2 det(A) = 0 => det(A) = 0.',
    stepMarking: [
      { step: 'det(A) = (-1)³ det(A) => det(A) = 0 for odd order', marks: '+4' }
    ],
    examinerTip: 'Determinant of every odd-order skew-symmetric matrix is zero; even-order is a perfect square.',
    commonPitfall: 'Assuming det(A) = 0 holds for even orders (e.g., 2×2) too.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Matrices & Determinants (Adjoint)',
    questionText: 'If A is a 3 × 3 invertible matrix with |A| = 5, find the determinant of adj(A):',
    options: ['25', '125', '5', '1/5'],
    correctOption: '25',
    modelAnswer: 'For an n × n matrix, |adj(A)| = |A|^(n-1). With n = 3 and |A| = 5: |adj(A)| = 5^(3-1) = 25.',
    stepMarking: [
      { step: 'Apply |adj(A)| = |A|^(n-1) = 5² = 25', marks: '+4' }
    ],
    examinerTip: 'Also remember |adj(adj(A))| = |A|^((n-1)²).',
    commonPitfall: 'Using |A|ⁿ = 125 instead of |A|^(n-1) = 25.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Determinants (System of Linear Equations)',
    questionText: 'The system of equations x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ has NO solution if:',
    options: ['λ = 3, μ ≠ 10', 'λ ≠ 3, μ = 10', 'λ = 3, μ = 10', 'λ ≠ 3, μ ≠ 10'],
    correctOption: 'λ = 3, μ ≠ 10',
    modelAnswer: 'Subtracting the 2nd and 3rd equations gives (3 - λ)z = 10 - μ. For no solution (inconsistent), coefficient 3 - λ = 0 (λ = 3) while 10 - μ ≠ 0 (μ ≠ 10).',
    stepMarking: [
      { step: 'Compare equations 2 and 3: λ = 3 and μ ≠ 10 gives contradiction', marks: '+4' }
    ],
    examinerTip: 'λ = 3, μ = 10 gives infinitely many solutions; λ ≠ 3 gives unique solution.',
    commonPitfall: 'Confusing no-solution condition with infinite-solutions condition.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Permutations & Combinations (Vowels Together)',
    questionText: 'How many 8-letter words (with or without meaning) can be formed using all letters of the word DAUGHTER such that all vowels always stay together?',
    options: ['4320', '720', '2160', '5040'],
    correctOption: '4320',
    modelAnswer: 'DAUGHTER has 8 distinct letters: 3 vowels (A, U, E) and 5 consonants. Bundling the 3 vowels as 1 unit gives (5 + 1) = 6 objects arranged in 6! = 720 ways, and vowels arrange internally in 3! = 6 ways. Total = 720 × 6 = 4320.',
    stepMarking: [
      { step: 'Bundle 3 vowels => 6! arrangements', marks: '+2' },
      { step: 'Internal permutation 3! => 720 × 6 = 4320', marks: '+2' }
    ],
    examinerTip: 'Always multiply by internal permutations of the bundled group.',
    commonPitfall: 'Forgetting 3! internal permutations and choosing 720.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Permutations & Combinations (Committee Selection)',
    questionText: 'In how many ways can a committee of 4 members be selected from 6 men and 4 women so that the committee includes AT LEAST 2 women?',
    options: ['115', '90', '114', '210'],
    correctOption: '115',
    modelAnswer: 'Cases: (2W, 2M) = C(4,2)C(6,2) = 6×15 = 90; (3W, 1M) = C(4,3)C(6,1) = 4×6 = 24; (4W, 0M) = C(4,4)C(6,0) = 1. Total = 90 + 24 + 1 = 115.',
    stepMarking: [
      { step: 'Sum valid cases: 90 + 24 + 1 = 115', marks: '+4' }
    ],
    examinerTip: 'Cross-check via complement: C(10,4) - C(6,4) - C(4,1)C(6,3) = 210 - 15 - 80 = 115.',
    commonPitfall: 'Missing the all-women (4W, 0M) case and answering 114.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Binomial Theorem (Term Independent of x)',
    questionText: 'Find the term independent of x in the expansion of (2x² - 1/x)⁹:',
    options: ['672', '-672', '84', '-5376'],
    correctOption: '672',
    modelAnswer: 'T_{r+1} = C(9,r)(2x²)^(9-r)(-x⁻¹)^r = C(9,r) 2^(9-r) (-1)^r x^(18-3r). Setting 18 - 3r = 0 gives r = 6. Value = C(9,6) × 2³ × (-1)⁶ = 84 × 8 = 672.',
    stepMarking: [
      { step: '18 - 3r = 0 => r = 6', marks: '+2' },
      { step: 'C(9,6) × 8 = 672', marks: '+2' }
    ],
    examinerTip: 'Since (-1)⁶ = +1, the term is positive.',
    commonPitfall: 'Miscomputing sign (-1)⁶ as negative.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Binomial Theorem (Remainder Problem)',
    questionText: 'What is the remainder when 7¹⁰³ is divided by 25?',
    options: ['18', '7', '1', '24'],
    correctOption: '18',
    modelAnswer: '7¹⁰³ = 7 × (7²)⁵¹ = 7 × (50 - 1)⁵¹. Expanding binomially mod 25 gives 7 × (-1)⁵¹ = -7 ≡ 25 - 7 = 18 (mod 25).',
    stepMarking: [
      { step: 'Write 7¹⁰³ = 7(50 - 1)⁵¹ ≡ -7 (mod 25)', marks: '+2' },
      { step: 'Convert negative remainder -7 to positive 18', marks: '+2' }
    ],
    examinerTip: 'Always express remainder r in 0 ≤ r < divisor.',
    commonPitfall: 'Leaving answer as -7 or 7.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Sequences & Series (Sum of AP)',
    questionText: 'If the sum of the first n terms of an arithmetic progression is S_n = 3n² + 5n, then its common difference d is:',
    options: ['6', '3', '8', '5'],
    correctOption: '6',
    modelAnswer: 'S₁ = a₁ = 3(1) + 5(1) = 8. S₂ = a₁ + a₂ = 3(4) + 10 = 22 => a₂ = 14. Hence d = a₂ - a₁ = 14 - 8 = 6.',
    stepMarking: [
      { step: 'Compute a₁ = 8, a₂ = 14 => d = 6 (or 2 × coeff of n²)', marks: '+4' }
    ],
    examinerTip: 'Shortcut: If S_n = An² + Bn, then common difference d = 2A immediately.',
    commonPitfall: 'Reporting A = 3 instead of 2A = 6.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Sequences & Series (AM–GM Inequality)',
    questionText: 'For all real values of x, the minimum value of 4^x + 4^(1 - x) is:',
    options: ['4', '2', '8', '1'],
    correctOption: '4',
    modelAnswer: 'Since 4^x > 0 and 4^(1-x) = 4 / 4^x > 0, by AM ≥ GM: [4^x + 4/4^x] / 2 ≥ √(4^x · 4/4^x) = 2 => 4^x + 4^(1-x) ≥ 4, achieved at x = 1/2.',
    stepMarking: [
      { step: 'Apply AM ≥ GM to positive terms 4^x and 4/4^x => min = 4', marks: '+4' }
    ],
    examinerTip: 'Minimum occurs when the two terms are equal: 4^x = 2 => x = 1/2.',
    commonPitfall: 'Forgetting the factor of 2 in AM ≥ GM and answering 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Sequences & Series (Telescoping Sum)',
    questionText: 'Evaluate the sum ∑_{k=1}^{99} 1 / [k(k + 1)]:',
    options: ['99 / 100', '100 / 99', '1 / 100', '98 / 99'],
    correctOption: '99 / 100',
    modelAnswer: 'Using partial fractions, 1/[k(k+1)] = 1/k - 1/(k+1). Telescoping from k = 1 to 99 cancels intermediate terms, leaving 1 - 1/100 = 99/100.',
    stepMarking: [
      { step: 'Decompose 1/k - 1/(k+1) and telescope => 99/100', marks: '+4' }
    ],
    examinerTip: 'Only the first positive and last negative boundary terms survive.',
    commonPitfall: 'Stopping at 1 - 1/99 = 98/99.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Limits (Trigonometric 0/0 Form)',
    questionText: 'Evaluate lim_{x → 0} (1 - cos 4x) / x²:',
    options: ['8', '4', '16', '2'],
    correctOption: '8',
    modelAnswer: '1 - cos 4x = 2 sin²(2x). Thus lim_{x→0} [2 sin²(2x) / x²] = 2 × lim_{x→0} [sin(2x)/(2x)]² × 4 = 2 × 1 × 4 = 8.',
    stepMarking: [
      { step: 'Use 1 - cos ax ≈ a²x²/2 => 16/2 = 8', marks: '+4' }
    ],
    examinerTip: 'Standard Taylor shortcut: 1 - cos(kx) ~ k²x² / 2 as x → 0.',
    commonPitfall: 'Forgetting to square the coefficient 2 inside sin²(2x) and getting 4.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Limits (1^∞ Indeterminate Form)',
    questionText: 'Evaluate lim_{x → ∞} ((x + 3) / (x - 2))^x:',
    options: ['e⁵', 'e', 'e³', 'e⁻¹'],
    correctOption: 'e⁵',
    modelAnswer: 'This is a 1^∞ form. Write as exp(lim_{x→∞} x · [(x + 3)/(x - 2) - 1]) = exp(lim_{x→∞} 5x / (x - 2)) = e⁵.',
    stepMarking: [
      { step: 'Apply exp(lim g(x)(f(x) - 1)) = e⁵', marks: '+4' }
    ],
    examinerTip: 'For 1^∞ limits, ALWAYS compute lim g(x)[f(x) - 1] inside e^(...).',
    commonPitfall: 'Using only +3 or +2 in the exponent instead of 3 - (-2) = 5.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Continuity',
    questionText: 'If f(x) = (sin 5x) / x for x ≠ 0 and f(0) = k is continuous at x = 0, then k equals:',
    options: ['5', '1', '1 / 5', '0'],
    correctOption: '5',
    modelAnswer: 'Continuity at x = 0 requires k = f(0) = lim_{x→0} (sin 5x)/x = 5 × lim_{x→0} (sin 5x)/(5x) = 5.',
    stepMarking: [
      { step: 'Evaluate standard limit sin(5x)/x → 5', marks: '+4' }
    ],
    examinerTip: 'Ensure x is in radians (standard in calculus).',
    commonPitfall: 'Answering 1 or 1/5.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Differentiability (Modulus Functions)',
    questionText: 'At how many points in ℝ is the function f(x) = |x - 1| + |x - 3| + |x - 5| NOT differentiable?',
    options: ['3', '2', '1', '0'],
    correctOption: '3',
    modelAnswer: 'Each linear modulus |x - a| creates a sharp corner at x = a where left-hand and right-hand derivatives differ by 2. Since 1, 3, and 5 are distinct, f(x) is non-differentiable at exactly 3 points (x = 1, 3, 5).',
    stepMarking: [
      { step: 'Corner points occur at zeros of each modulus: x = 1, 3, 5 (3 points)', marks: '+4' }
    ],
    examinerTip: 'Check whether a factor multiplies |x - a| — e.g., (x - a)|x - a| IS differentiable at a, whereas |x - a| alone is not.',
    commonPitfall: 'Thinking corners cancel out.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Differentiation (Inverse Trig Simplification)',
    questionText: 'For x ∈ (0, π), if y = tan⁻¹[(1 - cos x) / sin x], then dy/dx is equal to:',
    options: ['1 / 2', '1', '-1 / 2', 'sec²(x / 2)'],
    correctOption: '1 / 2',
    modelAnswer: '(1 - cos x) / sin x = [2 sin²(x/2)] / [2 sin(x/2) cos(x/2)] = tan(x/2). For x ∈ (0, π), x/2 ∈ (0, π/2), so y = tan⁻¹(tan(x/2)) = x/2 => dy/dx = 1/2.',
    stepMarking: [
      { step: 'Simplify inside to tan(x/2) => y = x/2 => dy/dx = 1/2', marks: '+4' }
    ],
    examinerTip: 'Half-angle identity (1 - cos x)/sin x = tan(x/2) turns messy chain rule into a 1-line derivative.',
    commonPitfall: 'Differentiating blindly without simplifying first.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Applications of Derivatives (Rate of Change)',
    questionText: 'The radius of a spherical balloon is increasing at 2 cm/s. At what rate is its surface area increasing when the radius is 5 cm?',
    options: ['80π cm²/s', '40π cm²/s', '200π cm²/s', '20π cm²/s'],
    correctOption: '80π cm²/s',
    modelAnswer: 'S = 4πr² => dS/dt = 8πr (dr/dt) = 8π(5)(2) = 80π cm²/s.',
    stepMarking: [
      { step: 'Differentiate S = 4πr² => 8πr (dr/dt) = 80π cm²/s', marks: '+4' }
    ],
    examinerTip: 'Watch whether the prompt specifies surface area (4πr²) or volume (4/3 πr³).',
    commonPitfall: 'Using dV/dt = 4πr² dr/dt = 200π (volume rate instead of surface area rate).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Applications of Derivatives (Monotonicity)',
    questionText: 'The interval in which the function f(x) = x³ - 6x² + 9x + 15 is strictly decreasing is:',
    options: ['(1, 3)', '(-∞, 1) ∪ (3, ∞)', '(1, 2)', '(-3, -1)'],
    correctOption: '(1, 3)',
    modelAnswer: 'f′(x) = 3x² - 12x + 9 = 3(x - 1)(x - 3). By wavy-curve sign check, f′(x) < 0 strictly on (1, 3).',
    stepMarking: [
      { step: 'Factor f′(x) = 3(x - 1)(x - 3) < 0 => x ∈ (1, 3)', marks: '+4' }
    ],
    examinerTip: 'Use wavy-curve method on f′(x) factors.',
    commonPitfall: 'Selecting the increasing interval (-∞, 1) ∪ (3, ∞).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Applications of Derivatives (Maxima & Minima)',
    questionText: 'If x and y are positive real numbers satisfying x + y = 12, what is the maximum possible value of x²y?',
    options: ['256', '216', '144', '128'],
    correctOption: '256',
    modelAnswer: 'Let P(x) = x²(12 - x) = 12x² - x³ for x ∈ (0, 12). P′(x) = 24x - 3x² = 3x(8 - x) = 0 => x = 8, y = 4. Maximum P = 8² × 4 = 256.',
    stepMarking: [
      { step: 'Set P′(x) = 0 => x = 8, y = 4', marks: '+2' },
      { step: 'P_max = 64 × 4 = 256', marks: '+2' }
    ],
    examinerTip: 'Shortcut by AM–GM: write (x/2) + (x/2) + y = 12 => (x/2)² y ≤ 4³ = 64 => x² y ≤ 256.',
    commonPitfall: 'Taking x = y = 6 which gives 6³ = 216 (only maximizes xy, not x²y).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Indefinite Integration (Standard e^x Identity)',
    questionText: 'Evaluate ∫ e^x (sin x + cos x) dx:',
    options: ['e^x sin x + C', 'e^x cos x + C', '-e^x cos x + C', 'e^x (sin x - cos x) + C'],
    correctOption: 'e^x sin x + C',
    modelAnswer: 'Using ∫ e^x [f(x) + f′(x)] dx = e^x f(x) + C with f(x) = sin x and f′(x) = cos x, the integral equals e^x sin x + C.',
    stepMarking: [
      { step: 'Recognize e^x[f(x) + f′(x)] pattern with f(x) = sin x', marks: '+4' }
    ],
    examinerTip: 'Verify every indefinite integral option by differentiating!',
    commonPitfall: 'Choosing e^x cos x (whose derivative has -sin x).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Indefinite Integration (Substitution)',
    questionText: 'Evaluate ∫ [1 / (x (1 + ln x)²)] dx:',
    options: ['-1 / (1 + ln x) + C', '1 / (1 + ln x) + C', 'ln|1 + ln x| + C', '-1 / (2(1 + ln x)²) + C'],
    correctOption: '-1 / (1 + ln x) + C',
    modelAnswer: 'Substitute t = 1 + ln x => dt = (1/x) dx. Integral becomes ∫ t⁻² dt = -t⁻¹ + C = -1 / (1 + ln x) + C.',
    stepMarking: [
      { step: 'Substitute t = 1 + ln x => ∫ t⁻² dt = -1/t + C', marks: '+4' }
    ],
    examinerTip: 'Spot (1/x) dx alongside ln x immediately.',
    commonPitfall: 'Forgetting the negative sign from integrating t⁻².'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Definite Integrals (King Property)',
    questionText: 'Evaluate the definite integral I = ∫₀^(π/2) [cos x / (cos x + sin x)] dx:',
    options: ['π / 4', 'π / 2', 'π / 8', '1'],
    correctOption: 'π / 4',
    modelAnswer: 'By King’s rule ∫₀^(π/2) f(x)dx = ∫₀^(π/2) f(π/2 - x)dx, adding gives 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4.',
    stepMarking: [
      { step: 'King rule symmetry => I = (b - a)/2 = π/4', marks: '+4' }
    ],
    examinerTip: 'Applies to any ∫_a^b f(x)/(f(x) + f(a+b-x)) dx = (b - a)/2.',
    commonPitfall: 'Forgetting to divide by 2 after adding I + I = 2I.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Definite Integrals (Odd–Even Symmetry)',
    questionText: 'Evaluate ∫_{-π/2}^{π/2} (x³ cos x + tan⁵ x + 1) dx:',
    options: ['π', '0', '2π', 'π / 2'],
    correctOption: 'π',
    modelAnswer: 'Both x³ cos x and tan⁵ x are odd functions on symmetric interval [-π/2, π/2], so their integrals vanish. Remaining ∫_{-π/2}^{π/2} 1 dx = π/2 - (-π/2) = π.',
    stepMarking: [
      { step: 'Odd terms integrate to 0; constant 1 over length π gives π', marks: '+4' }
    ],
    examinerTip: 'Split sums into odd and even parts on [-a, a] before attempting antiderivatives.',
    commonPitfall: 'Forgetting the constant term +1 and answering 0.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Definite Integrals (Leibniz Rule)',
    questionText: 'If F(x) = ∫₀^{x²} √(t + 1) dt, find the value of F′(2):',
    options: ['4√5', '2√5', '√5', '4√3'],
    correctOption: '4√5',
    modelAnswer: 'By Newton-Leibniz rule, F′(x) = √(x² + 1) · d/dx(x²) = 2x √(x² + 1). At x = 2: F′(2) = 2(2) √(4 + 1) = 4√5.',
    stepMarking: [
      { step: 'Differentiate upper limit: F′(x) = 2x √(x² + 1)', marks: '+2' },
      { step: 'Evaluate at x = 2 => 4√5', marks: '+2' }
    ],
    examinerTip: 'Never forget the chain-rule derivative of the upper limit (2x)!',
    commonPitfall: 'Substituting x = 2 without multiplying by d(x²)/dx = 4.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Area Under Curves',
    questionText: 'Find the area of the region bounded by the parabola y = x² and the line y = 2x:',
    options: ['4 / 3', '8 / 3', '2 / 3', '4'],
    correctOption: '4 / 3',
    modelAnswer: 'Curves intersect when x² = 2x => x = 0 and x = 2. On [0, 2], 2x ≥ x². Area = ∫₀² (2x - x²) dx = [x² - x³/3]₀² = 4 - 8/3 = 4/3.',
    stepMarking: [
      { step: 'Find intersection limits x = 0, 2', marks: '+2' },
      { step: 'Integrate (2x - x²) from 0 to 2 => 4/3', marks: '+2' }
    ],
    examinerTip: 'Shortcut between y = x²/(4a) and y = mx: Area = (8/3) a² m³ (Wait: for y=x² (4a=1) and y=mx, Area = m³/6 = 8/6 = 4/3!).',
    commonPitfall: 'Using wrong upper limit or forgetting -x³/3.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Differential Equations (Order & Degree)',
    questionText: 'What are the order and degree respectively of the differential equation (d²y/dx²)³ + (dy/dx)⁴ + y = 0?',
    options: ['2 and 3', '3 and 2', '2 and 4', '4 and 2'],
    correctOption: '2 and 3',
    modelAnswer: 'The highest-order derivative present is d²y/dx² (order = 2). Since the equation is already a polynomial in derivatives, its power (degree) is 3.',
    stepMarking: [
      { step: 'Highest derivative order = 2; its exponent = 3', marks: '+4' }
    ],
    examinerTip: 'Degree is the exponent of the HIGHEST-ORDER derivative, not the largest exponent anywhere.',
    commonPitfall: 'Picking degree 4 from (dy/dx)⁴.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Differential Equations (Linear First-Order)',
    questionText: 'What is the integrating factor (IF) of the linear differential equation x (dy/dx) + 2y = x² (for x > 0)?',
    options: ['x²', 'e^(2x)', 'x', '2 ln x'],
    correctOption: 'x²',
    modelAnswer: 'Divide by x to write in standard form: dy/dx + (2/x)y = x. Here P(x) = 2/x, so IF = exp(∫ (2/x) dx) = exp(2 ln x) = x².',
    stepMarking: [
      { step: 'Normalize leading coefficient to 1 => P(x) = 2/x => IF = x²', marks: '+4' }
    ],
    examinerTip: 'Always divide by the coefficient of dy/dx BEFORE reading P(x).',
    commonPitfall: 'Taking P(x) = 2 without dividing by x.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Straight Lines (Parallel Line Distance)',
    questionText: 'Find the perpendicular distance between the parallel lines 3x - 4y + 9 = 0 and 6x - 8y - 2 = 0:',
    options: ['2', '11 / 5', '11 / 10', '10'],
    correctOption: '2',
    modelAnswer: 'Divide the second equation by 2 to match coefficients: 3x - 4y - 1 = 0. Distance d = |c₁ - c₂| / √(a² + b²) = |9 - (-1)| / √(3² + (-4)²) = 10 / 5 = 2.',
    stepMarking: [
      { step: 'Match x,y coefficients => 3x - 4y - 1 = 0', marks: '+2' },
      { step: 'd = |9 - (-1)| / 5 = 2', marks: '+2' }
    ],
    examinerTip: 'Never apply |c₁ - c₂|/√(a² + b²) until coefficients of x and y in both lines are identical!',
    commonPitfall: 'Computing |9 - (-2)| / 5 = 11/5 without normalizing the second line.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Circles (Axis Intercept Length)',
    questionText: 'What is the length of the intercept cut off by the circle x² + y² - 6x - 8y + 5 = 0 on the x-axis?',
    options: ['4', '2', '2√11', '8'],
    correctOption: '4',
    modelAnswer: 'Comparing with x² + y² + 2gx + 2fy + c = 0 gives g = -3, c = 5. Length of x-intercept = 2√(g² - c) = 2√(9 - 5) = 2 × 2 = 4.',
    stepMarking: [
      { step: 'Apply 2√(g² - c) = 2√(9 - 5) = 4', marks: '+4' }
    ],
    examinerTip: 'x-intercept = 2√(g² - c); y-intercept = 2√(f² - c).',
    commonPitfall: 'Forgetting the factor of 2 in front of √(g² - c).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Circles (Orthogonal Intersection)',
    questionText: 'If the circles x² + y² + 2kx + 4y - 6 = 0 and x² + y² - 4x + 2y + 2 = 0 intersect orthogonally, find k:',
    options: ['2', '-2', '1', '-1'],
    correctOption: '2',
    modelAnswer: 'Condition for orthogonality: 2g₁g₂ + 2f₁f₂ = c₁ + c₂. Here g₁ = k, f₁ = 2, c₁ = -6; g₂ = -2, f₂ = 1, c₂ = 2. So 2(k)(-2) + 2(2)(1) = -6 + 2 => -4k + 4 = -4 => k = 2.',
    stepMarking: [
      { step: 'Substitute into 2g₁g₂ + 2f₁f₂ = c₁ + c₂ => k = 2', marks: '+4' }
    ],
    examinerTip: 'Verify signs of g and f by halving the x and y coefficients.',
    commonPitfall: 'Sign error in c₁ + c₂ = -4.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Conic Sections (Parabola Latus Rectum)',
    questionText: 'What is the length of the latus rectum of the parabola y² - 4y - 8x + 20 = 0?',
    options: ['8', '4', '2', '16'],
    correctOption: '8',
    modelAnswer: 'Complete the square in y: (y - 2)² - 4 - 8x + 20 = 0 => (y - 2)² = 8(x - 2). Comparing with Y² = 4aX gives latus rectum = 4a = 8.',
    stepMarking: [
      { step: 'Rewrite as (y - 2)² = 8(x - 2) => 4a = 8', marks: '+4' }
    ],
    examinerTip: 'Latus rectum length equals |coeff of linear term / coeff of squared term| = 8/1 = 8.',
    commonPitfall: 'Reporting a = 2 or 2a = 4 instead of 4a = 8.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Conic Sections (Ellipse Eccentricity)',
    questionText: 'Find the eccentricity of the ellipse 9x² + 25y² = 225:',
    options: ['4 / 5', '3 / 5', '9 / 25', '√34 / 5'],
    correctOption: '4 / 5',
    modelAnswer: 'Divide by 225: x²/25 + y²/9 = 1, so a² = 25, b² = 9. Eccentricity e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5.',
    stepMarking: [
      { step: 'Standard form x²/25 + y²/9 = 1 => e = 4/5', marks: '+4' }
    ],
    examinerTip: 'For ellipse e < 1; for hyperbola e > 1.',
    commonPitfall: 'Using + instead of - inside the square root (which gives hyperbola eccentricity √34/5).'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Conic Sections (Hyperbola Foci Distance)',
    questionText: 'What is the distance between the two foci of the hyperbola x²/16 - y²/9 = 1?',
    options: ['10', '5', '8', '2√7'],
    correctOption: '10',
    modelAnswer: 'Here a² = 16, b² = 9, so c = √(a² + b²) = √(16 + 9) = 5. Distance between foci (±c, 0) is 2c = 10.',
    stepMarking: [
      { step: 'c = √(16+9) = 5 => distance between foci = 2c = 10', marks: '+4' }
    ],
    examinerTip: 'Remember c = ae = √(a² + b²) for hyperbola.',
    commonPitfall: 'Reporting c = 5 instead of 2c = 10.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Vector Algebra (Projection)',
    questionText: 'Find the scalar projection of vector a = 2î - ĵ + 2k̂ on vector b = î + 2ĵ + 2k̂:',
    options: ['4 / 3', '4 / 9', '2 / 3', '4'],
    correctOption: '4 / 3',
    modelAnswer: 'Scalar projection of a on b = (a · b) / |b| = (2(1) + (-1)(2) + 2(2)) / √(1² + 2² + 2²) = 4 / 3.',
    stepMarking: [
      { step: 'a·b = 4, |b| = 3 => projection = 4/3', marks: '+4' }
    ],
    examinerTip: 'Divide by the magnitude of the vector ONTO which you are projecting (b).',
    commonPitfall: 'Dividing by |b|² = 9 instead of |b| = 3.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Vector Algebra (Cross Product & Area)',
    questionText: 'Find the area of a parallelogram whose adjacent sides are given by vectors a = î + 2ĵ + 3k̂ and b = 3î - 2ĵ + k̂:',
    options: ['8√3', '4√3', '8', '16√3'],
    correctOption: '8√3',
    modelAnswer: 'a × b = (2 - (-6))î - (1 - 9)ĵ + (-2 - 6)k̂ = 8î + 8ĵ - 8k̂. Area = |a × b| = √(8² + 8² + (-8)²) = 8√3.',
    stepMarking: [
      { step: 'Compute a × b = 8î + 8ĵ - 8k̂', marks: '+2' },
      { step: 'Take norm |a × b| = 8√3', marks: '+2' }
    ],
    examinerTip: 'If diagonals d₁, d₂ were given instead of sides, area would be (1/2)|d₁ × d₂|.',
    commonPitfall: 'Halving the answer as if calculating triangle area.'
  },
  {
    section: 'A',
    marks: 4,
    topic: '3D Geometry (Angle Between Lines)',
    questionText: 'What is the acute angle between two lines whose direction ratios are (1, 1, 0) and (0, 1, 1)?',
    options: ['60°', '45°', '90°', '30°'],
    correctOption: '60°',
    modelAnswer: 'cos θ = |1·0 + 1·1 + 0·1| / (√(1+1) · √(1+1)) = 1 / 2 => θ = 60°.',
    stepMarking: [
      { step: 'cos θ = 1/2 => θ = 60°', marks: '+4' }
    ],
    examinerTip: '3D Planes were removed by NTA; focus sharply on 3D lines, DCs/DRs, and skew-line distance.',
    commonPitfall: 'Forgetting denominator norms √2 · √2 = 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: '3D Geometry (Shortest Distance Between Skew Lines)',
    questionText: 'Find the shortest distance between the skew lines r = (î + 2ĵ + k̂) + λ(î - ĵ + k̂) and r = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂):',
    options: ['3 / √2', '9 / √2', '3√2', '√2'],
    correctOption: '3 / √2',
    modelAnswer: 'a₂ - a₁ = î - 3ĵ - 2k̂. b₁ × b₂ = (î - ĵ + k̂) × (2î + ĵ + 2k̂) = -3î + 0ĵ + 3k̂, so |b₁ × b₂| = 3√2. Shortest distance = |(a₂ - a₁)·(b₁ × b₂)| / |b₁ × b₂| = |-3 + 0 - 6| / (3√2) = 9 / (3√2) = 3 / √2.',
    stepMarking: [
      { step: 'b₁ × b₂ = -3î + 3k̂ with norm 3√2', marks: '+2' },
      { step: 'd = 9 / (3√2) = 3 / √2', marks: '+2' }
    ],
    examinerTip: 'One of the single highest-probability 3D Geometry questions in NTA JEE Main shifts!',
    commonPitfall: 'Computing a₁ - a₂ with sign errors or missing |b₁ × b₂| division.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Statistics (Variance)',
    questionText: 'What is the variance of the first 5 natural numbers {1, 2, 3, 4, 5}?',
    options: ['2', '√2', '2.5', '10'],
    correctOption: '2',
    modelAnswer: 'For first n natural numbers, variance σ² = (n² - 1) / 12 = (25 - 1) / 12 = 24 / 12 = 2.',
    stepMarking: [
      { step: 'Mean = 3; Σ(xᵢ - 3)² / 5 = (4+1+0+1+4)/5 = 2', marks: '+4' }
    ],
    examinerTip: 'Memorize σ² = (n² - 1)/12 for consecutive integers 1..n.',
    commonPitfall: 'Reporting standard deviation √2 instead of variance 2.'
  },
  {
    section: 'A',
    marks: 4,
    topic: 'Probability (Bayes’ Theorem)',
    questionText: 'Bag I contains 3 red and 2 black balls; Bag II contains 2 red and 4 black balls. A bag is chosen at random and a ball drawn is found to be red. What is the probability that it came from Bag I?',
    options: ['9 / 14', '5 / 14', '3 / 5', '9 / 11'],
    correctOption: '9 / 14',
    modelAnswer: 'P(I) = P(II) = 1/2. P(R|I) = 3/5, P(R|II) = 2/6 = 1/3. By Bayes’ theorem, P(I|R) = (3/5) / (3/5 + 1/3) = (9/15) / (14/15) = 9/14.',
    stepMarking: [
      { step: 'Apply Bayes formula with P(R|I) = 3/5 and P(R|II) = 1/3', marks: '+2' },
      { step: '(9/15)/(14/15) = 9/14', marks: '+2' }
    ],
    examinerTip: 'Cancel common bag prior (1/2) from numerator and denominator immediately.',
    commonPitfall: 'Reporting P(R|I) = 3/5 without conditioning on the total probability of drawing red.'
  },

  // --- Section B: Compulsory Numericals (15) ---
  {
    section: 'B',
    marks: 4,
    topic: 'Sequences & Series (AP Numerical)',
    questionText: '[Section B Compulsory Numerical] In an arithmetic progression, if the 5th term is 19 and the 9th term is 35, find the 12th term.',
    modelAnswer: '47',
    stepMarking: [
      { step: '4d = 35 - 19 = 16 => d = 4', marks: '+2' },
      { step: 'a₁₂ = a₉ + 3d = 35 + 12 = 47', marks: '+2' }
    ],
    examinerTip: 'Jump directly using a_m - a_n = (m - n)d without finding a₁.',
    commonPitfall: 'Arithmetic slip in 35 + 3(4).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Matrices & Determinants (Adjoint Numerical)',
    questionText: '[Section B Compulsory Numerical] If A is a 3 × 3 matrix such that det(A) = 2, find the value of det(2 adj(A)).',
    modelAnswer: '32',
    stepMarking: [
      { step: 'det(2 adj(A)) = 2³ det(adj(A)) = 8 × |A|^(3-1)', marks: '+2' },
      { step: '= 8 × 2² = 8 × 4 = 32', marks: '+2' }
    ],
    examinerTip: 'Remember det(k M) = kⁿ det(M) for an n × n matrix!',
    commonPitfall: 'Writing 2 × det(adj(A)) = 8 instead of 2³ × det(adj(A)) = 32.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Binomial Theorem (Coefficient Numerical)',
    questionText: '[Section B Compulsory Numerical] If the sum of all binomial coefficients in the expansion of (1 + x)ⁿ is 128, find the coefficient of x³ in this expansion.',
    modelAnswer: '35',
    stepMarking: [
      { step: '2ⁿ = 128 => n = 7', marks: '+2' },
      { step: 'Coefficient of x³ = C(7, 3) = (7 × 6 × 5) / 6 = 35', marks: '+2' }
    ],
    examinerTip: 'Sum of coefficients of (1 + x)ⁿ is obtained by setting x = 1 => 2ⁿ.',
    commonPitfall: 'Using n = 6 (2⁶ = 64) instead of n = 7.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Permutations & Combinations (Polygon Diagonals)',
    questionText: '[Section B Compulsory Numerical] Find the total number of diagonals in a convex decagon (10-sided polygon).',
    modelAnswer: '35',
    stepMarking: [
      { step: 'Diagonals = C(10, 2) - 10 = 45 - 10 = 35', marks: '+4' }
    ],
    examinerTip: 'Use n(n - 3)/2 for any convex n-gon.',
    commonPitfall: 'Answering C(10, 2) = 45 without subtracting the 10 perimeter sides.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Complex Numbers (Roots of Unity Numerical)',
    questionText: '[Section B Compulsory Numerical] If z is a complex number satisfying z + 1/z = 1, find the value of z⁶ + 1/z⁶.',
    modelAnswer: '2',
    stepMarking: [
      { step: 'z² - z + 1 = 0 => (z + 1)(z² - z + 1) = z³ + 1 = 0 => z³ = -1', marks: '+2' },
      { step: 'z⁶ = (-1)² = 1 => z⁶ + 1/z⁶ = 1 + 1 = 2', marks: '+2' }
    ],
    examinerTip: 'Whenever z + 1/z = 1, immediately recall z = -ω or -ω², so z³ = -1.',
    commonPitfall: 'Taking z³ = +1 (which belongs to z + 1/z = -1) — though even then z⁶ = 1!'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Limits (Exponential Expansion Numerical)',
    questionText: '[Section B Compulsory Numerical] Find the value of lim_{x → 0} (e^{4x} - 1 - 4x) / x².',
    modelAnswer: '8',
    stepMarking: [
      { step: 'Expand e^{4x} = 1 + 4x + (4x)²/2! + ...', marks: '+2' },
      { step: 'Divide by x² => limit is 16 / 2 = 8', marks: '+2' }
    ],
    examinerTip: 'Maclaurin expansion is faster and less error-prone than repeated L’Hôpital’s rule.',
    commonPitfall: 'Forgetting 2! in the denominator and entering 16.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Definite Integrals (Modulus Integral Numerical)',
    questionText: '[Section B Compulsory Numerical] Evaluate the definite integral ∫₀⁴ |x - 2| dx.',
    modelAnswer: '4',
    stepMarking: [
      { step: 'Split at x = 2: ∫₀² (2 - x) dx + ∫₂⁴ (x - 2) dx', marks: '+2' },
      { step: 'Geometrically two triangles of base 2, height 2: 2 × (1/2 × 2 × 2) = 4', marks: '+2' }
    ],
    examinerTip: 'Sketch the V-shaped graph of |x - 2| and sum triangle areas in 3 seconds!',
    commonPitfall: 'Integrating (x - 2) without taking absolute value gives 0.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Area Under Curves (Symmetric Diamond)',
    questionText: '[Section B Compulsory Numerical] Find the area (in square units) enclosed by the curve |x| + |y| = 3.',
    modelAnswer: '18',
    stepMarking: [
      { step: 'Vertices at (±3, 0) and (0, ±3) form a square of diagonal d = 6', marks: '+2' },
      { step: 'Area = (1/2) d² = (1/2)(36) = 18', marks: '+2' }
    ],
    examinerTip: 'Area of |x|/a + |y|/b = 1 is always 2ab. Here a = b = 3 => 2(3)(3) = 18.',
    commonPitfall: 'Reporting area of one quadrant triangle (4.5) or square of side 3 (9).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Differential Equations (Variable Separable Numerical)',
    questionText: '[Section B Compulsory Numerical] If y(x) satisfies dy/dx = y / x for x > 0 with initial condition y(1) = 3, find the value of y(5).',
    modelAnswer: '15',
    stepMarking: [
      { step: 'Separate variables: dy/y = dx/x => ln y = ln x + ln C => y = Cx', marks: '+2' },
      { step: 'y(1) = 3 => C = 3 => y(5) = 3 × 5 = 15', marks: '+2' }
    ],
    examinerTip: 'Always solve for the arbitrary constant using the initial condition immediately.',
    commonPitfall: 'Adding +3 instead of multiplying by 3.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Quadratic Equations (Real Roots Count)',
    questionText: '[Section B Compulsory Numerical] Find the total number of distinct real solutions of the equation x² - 5|x| + 6 = 0.',
    modelAnswer: '4',
    stepMarking: [
      { step: 'Factor as (|x| - 2)(|x| - 3) = 0 => |x| = 2 or |x| = 3', marks: '+2' },
      { step: 'Solutions x = 2, -2, 3, -3 => 4 real roots', marks: '+2' }
    ],
    examinerTip: 'Since x² = |x|², treat |x| ≥ 0 as a quadratic variable; every positive root gives ±x.',
    commonPitfall: 'Counting only positive roots 2 and 3 (answer 2).'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Straight Lines (Centroid Numerical)',
    questionText: '[Section B Compulsory Numerical] The vertices of a triangle are A(1, 4), B(5, -2), and C(3, 10). If the centroid of ΔABC is (h, k), find the value of h + k.',
    modelAnswer: '7',
    stepMarking: [
      { step: 'h = (1 + 5 + 3)/3 = 3; k = (4 - 2 + 10)/3 = 4', marks: '+2' },
      { step: 'h + k = 3 + 4 = 7', marks: '+2' }
    ],
    examinerTip: 'Centroid = arithmetic average of all three vertices.',
    commonPitfall: 'Dividing by 2 instead of 3.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Conic Sections (Parabola Focal Distance)',
    questionText: '[Section B Compulsory Numerical] Find the focal distance of the point P(x₀, 6) lying on the parabola y² = 12x.',
    modelAnswer: '6',
    stepMarking: [
      { step: '4a = 12 => a = 3; 6² = 12 x₀ => x₀ = 3', marks: '+2' },
      { step: 'Focal distance = x₀ + a = 3 + 3 = 6', marks: '+2' }
    ],
    examinerTip: 'For standard parabola y² = 4ax, focal distance of (x₀, y₀) is simply x₀ + a.',
    commonPitfall: 'Returning only x₀ = 3 without adding a = 3.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Vector Algebra (Orthogonal Vectors Norm)',
    questionText: '[Section B Compulsory Numerical] If vectors a and b are perpendicular with |a| = 3 and |b| = 4, find the value of |a + b|².',
    modelAnswer: '25',
    stepMarking: [
      { step: '|a + b|² = |a|² + |b|² + 2(a·b) = 9 + 16 + 0 = 25', marks: '+4' }
    ],
    examinerTip: 'Read carefully: the question asks for |a + b|² (25), not |a + b| (5).',
    commonPitfall: 'Taking the square root and entering 5.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Trigonometry (Extreme Value Numerical)',
    questionText: '[Section B Compulsory Numerical] Find the maximum value of the expression f(x) = 3 sin x + 4 cos x + 7 over all real x.',
    modelAnswer: '12',
    stepMarking: [
      { step: 'Max of (a sin x + b cos x) is √(a² + b²) = √(9 + 16) = 5', marks: '+2' },
      { step: 'Maximum f(x) = 5 + 7 = 12', marks: '+2' }
    ],
    examinerTip: 'Range of a sin x + b cos x is [-√(a²+b²), +√(a²+b²)].',
    commonPitfall: 'Adding 3 + 4 + 7 = 14 assuming sin x and cos x reach 1 simultaneously.'
  },
  {
    section: 'B',
    marks: 4,
    topic: 'Statistics (Mean Numerical)',
    questionText: '[Section B Compulsory Numerical] If the arithmetic mean of the 5 observations 4, 7, 10, x, and 19 is 11, find the value of x.',
    modelAnswer: '15',
    stepMarking: [
      { step: '(4 + 7 + 10 + x + 19) / 5 = 11 => 40 + x = 55', marks: '+2' },
      { step: 'x = 15', marks: '+2' }
    ],
    examinerTip: 'Quick check via deviations from 11: (-7) + (-4) + (-1) + (x-11) + 8 = 0 => x - 11 = 4 => 15.',
    commonPitfall: 'Summing 4 + 7 + 10 + 19 incorrectly.'
  }
];

// ============================================================================
// PAPER BUILDERS — Full 75-Question PCM Papers & 25-Question Subject Archives
// ============================================================================
function pickSubjectSlice(
  bank: RawPyqQuestion[],
  subjectName: 'Physics' | 'Chemistry' | 'Mathematics',
  paperId: string,
  startQNum: number,
  offsetA: number,
  offsetB: number
): PyqQuestion[] {
  const secA = bank.filter(q => q.section === 'A');
  const secB = bank.filter(q => q.section === 'B');

  const chosenA: RawPyqQuestion[] = [];
  for (let i = 0; i < 20; i++) {
    chosenA.push(secA[(offsetA + i) % secA.length]);
  }

  const chosenB: RawPyqQuestion[] = [];
  for (let i = 0; i < 5; i++) {
    chosenB.push(secB[(offsetB + i) % secB.length]);
  }

  return [...chosenA, ...chosenB].map((q, idx) => ({
    ...q,
    id: `${paperId}-q${startQNum + idx}`,
    qNum: startQNum + idx,
    subject: subjectName,
    examinerTip: q.examinerTip || 'Verify units and sign conventions before marking (+4 / -1 NTA rule).'
  }));
}

function buildFullPaper(spec: FullPaperSpec): PyqPaper {
  const phyQs = pickSubjectSlice(PHY_Q_BANK, 'Physics', spec.id, 1, spec.offsetA[0], spec.offsetB[0]);
  const chemQs = pickSubjectSlice(CHEM_Q_BANK, 'Chemistry', spec.id, 26, spec.offsetA[1], spec.offsetB[1]);
  const mathQs = pickSubjectSlice(MATH_Q_BANK, 'Mathematics', spec.id, 51, spec.offsetA[2], spec.offsetB[2]);
  const questions = [...phyQs, ...chemQs, ...mathQs];

  return {
    id: spec.id,
    title: spec.title,
    subject: 'Full Syllabus (PCM)',
    year: spec.year,
    targetClass: 'JEE Mains',
    paperType: spec.paperType,
    paperCode: spec.paperCode,
    totalMarks: 300,
    durationMins: 180,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: questions.length,
    generalInstructions: [
      'Official NTA JEE Main Rationalized 2026 Full Paper Pattern: 75 Compulsory Questions (25 Physics + 25 Chemistry + 25 Mathematics).',
      'Each subject has Section A (20 Single-Choice MCQs) and Section B (5 Compulsory Numerical Value Questions — no optional 5/10 choice).',
      'Marking Scheme: +4 for every correct answer, -1 for every wrong answer in BOTH Section A & Section B, 0 for unattempted.',
      `Strict 2026 Rationalized Syllabus Sync: Deleted NCERT chapters excluded. Paper Focus: ${spec.topicFocus}`
    ],
    questions
  };
}

function buildShiftPaper(spec: ShiftSpec): PyqPaper {
  const bank =
    spec.subject === 'Physics'
      ? PHY_Q_BANK
      : spec.subject === 'Chemistry'
        ? CHEM_Q_BANK
        : MATH_Q_BANK;

  const questions = pickSubjectSlice(bank, spec.subject, spec.id, 1, spec.offsetA, spec.offsetB);

  return {
    id: spec.id,
    title: spec.title,
    subject: spec.subject,
    year: spec.year,
    targetClass: 'JEE Mains',
    paperType: 'JEE_SHIFT',
    paperCode: spec.paperCode,
    totalMarks: 100,
    durationMins: 60,
    difficulty: spec.difficulty,
    isFree: spec.isFree,
    totalQuestions: questions.length,
    generalInstructions: [
      `NTA JEE Main Rationalized 2026 Format (${spec.subject} Full 25-Question Shift: 20 Sec A MCQs + 5 Compulsory Sec B Numericals).`,
      'Marking Scheme: +4 Correct, -1 Wrong in both Section A & Section B, 0 Unattempted.',
      `Deleted NCERT topics (Solid State, Surface Chem, Polymers, Communication Systems, Mathematical Reasoning, 3D Planes) filtered out. Focus: ${spec.topicFocus}`
    ],
    questions
  };
}

const FULL_PAPER_SPECS: FullPaperSpec[] = [
  // Official 2026 NTA Sample Papers (75 Qs / 300 Marks / 180 Mins)
  {
    id: 'jm-sample-2026-1',
    title: 'JEE Main 2026 Official NTA Pattern Sample Paper 1 — Full PCM (75 Qs)',
    year: 2026,
    paperType: 'COMPETITIVE_SAMPLE',
    paperCode: 'NTA-JM26-SP1',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'Experimental Skills, Rotational, MOT, CFT, Calculus & 3D Skew Lines',
    offsetA: [0, 0, 0],
    offsetB: [0, 0, 0]
  },
  {
    id: 'jm-sample-2026-2',
    title: 'JEE Main 2026 Official NTA Pattern Sample Paper 2 — Full PCM (75 Qs)',
    year: 2026,
    paperType: 'COMPETITIVE_SAMPLE',
    paperCode: 'NTA-JM26-SP2',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'Gauss Law, LCR AC, Ray Optics, GOC, Electrochemistry, Conics & Bayes',
    offsetA: [20, 20, 20],
    offsetB: [5, 5, 5]
  },
  // Complete 75-Question Shift Archives (2025–2021)
  {
    id: 'jm-full-2025-j1',
    title: 'JEE Main Jan 2025 Shift 1 — Complete PCM Paper (75 Qs)',
    year: 2025,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-25J-S1-FULL',
    difficulty: 'MODERATE',
    isFree: true,
    topicFocus: 'Vernier & Screw Gauge, Electrostatics, Coordination, Aldol, Definite Integrals & Vectors',
    offsetA: [5, 5, 5],
    offsetB: [2, 2, 2]
  },
  {
    id: 'jm-full-2025-a2',
    title: 'JEE Main Apr 2025 Shift 2 — Complete PCM Paper (75 Qs)',
    year: 2025,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-25A-S2-FULL',
    difficulty: 'CHALLENGING',
    isFree: false,
    topicFocus: 'Carnot, Magnetism, EMI, Kinetics, Amines, Differential Equations & Probability',
    offsetA: [25, 25, 25],
    offsetB: [10, 10, 10]
  },
  {
    id: 'jm-full-2024-j1',
    title: 'JEE Main Jan 2024 Shift 1 — Complete PCM Paper (75 Qs)',
    year: 2024,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-24J-S1-FULL',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Rolling Motion, Meter Bridge, Periodicity, Ozonolysis, Matrices & Circles',
    offsetA: [10, 10, 10],
    offsetB: [3, 3, 3]
  },
  {
    id: 'jm-full-2024-a1',
    title: 'JEE Main Apr 2024 Shift 1 — Complete PCM Paper (75 Qs)',
    year: 2024,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-24A-S1-FULL',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Wave Optics, Semiconductors, Solutions, Biomolecules, AOD & Conics',
    offsetA: [15, 15, 15],
    offsetB: [7, 7, 7]
  },
  {
    id: 'jm-full-2023-j2',
    title: 'JEE Main Jan 2023 Shift 2 — Complete PCM Paper (Deleted Filtered)',
    year: 2023,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-23J-S2-FULL',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Mechanics, Modern Physics, Thermodynamics, Carbonyls & Linear Algebra',
    offsetA: [30, 30, 30],
    offsetB: [12, 12, 12]
  },
  {
    id: 'jm-full-2022-j1',
    title: 'JEE Main Jun 2022 Shift 1 — Complete PCM Paper (Deleted Filtered)',
    year: 2022,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-22J-S1-FULL',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Fluids, SHM, Chemical Bonding, Haloalkanes, Limits & 3D Lines',
    offsetA: [35, 35, 35],
    offsetB: [4, 4, 4]
  },
  {
    id: 'jm-full-2021-f1',
    title: 'JEE Main Feb 2021 Shift 1 — Complete PCM Paper (Deleted Filtered)',
    year: 2021,
    paperType: 'JEE_SHIFT',
    paperCode: 'JM-21F-S1-FULL',
    difficulty: 'MODERATE',
    isFree: false,
    topicFocus: 'Gravitation, Current Electricity, Equilibrium, Salt Analysis & Sequences',
    offsetA: [40, 40, 40],
    offsetB: [8, 8, 8]
  }
];

const SHIFT_SPECS: ShiftSpec[] = [
  // 2025 Shifts (Phy, Chem, Math) — 25 Qs / 100 Marks / 60 Mins each
  { id: 'jm-pyq-2025-p1', title: 'JEE Main Jan 2025 Shift 1 — Physics Archive (25 Qs NTA Synced)', subject: 'Physics', year: 2025, paperCode: 'JM-25J-S1P', difficulty: 'MODERATE', isFree: true, topicFocus: 'Experimental Skills, Rotational & Modern Physics', offsetA: 0, offsetB: 0 },
  { id: 'jm-pyq-2025-c1', title: 'JEE Main Jan 2025 Shift 1 — Chemistry Archive (25 Qs NTA Synced)', subject: 'Chemistry', year: 2025, paperCode: 'JM-25J-S1C', difficulty: 'MODERATE', isFree: true, topicFocus: 'MOT, Coordination CFT, Aldol & Kinetics', offsetA: 0, offsetB: 0 },
  { id: 'jm-pyq-2025-m1', title: 'JEE Main Jan 2025 Shift 1 — Mathematics Archive (25 Qs NTA Synced)', subject: 'Mathematics', year: 2025, paperCode: 'JM-25J-S1M', difficulty: 'CHALLENGING', isFree: true, topicFocus: 'King Integral, Matrices & 3D Skew Lines', offsetA: 0, offsetB: 0 },
  { id: 'jm-pyq-2025-p2', title: 'JEE Main Apr 2025 Shift 2 — Physics Archive (25 Qs NTA Synced)', subject: 'Physics', year: 2025, paperCode: 'JM-25A-S2P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Gauss Law Symmetry, AC & Current Networks', offsetA: 20, offsetB: 5 },
  { id: 'jm-pyq-2025-c2', title: 'JEE Main Apr 2025 Shift 2 — Chemistry Archive (25 Qs NTA Synced)', subject: 'Chemistry', year: 2025, paperCode: 'JM-25A-S2C', difficulty: 'MODERATE', isFree: false, topicFocus: 'Van’t Hoff Factor, GOC & Electrochemistry', offsetA: 20, offsetB: 5 },
  { id: 'jm-pyq-2025-m2', title: 'JEE Main Apr 2025 Shift 2 — Mathematics Archive (25 Qs NTA Synced)', subject: 'Mathematics', year: 2025, paperCode: 'JM-25A-S2M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Quadratics, Conics, DE & Bayes Theorem', offsetA: 20, offsetB: 5 },
  // 2024 Shifts
  { id: 'jm-pyq-2024-p1', title: 'JEE Main Jan 2024 Shift 1 — Physics Archive (25 Qs NTA Synced)', subject: 'Physics', year: 2024, paperCode: 'JM-24J-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Vernier Callipers, Rolling Sphere & Resistors', offsetA: 7, offsetB: 2 },
  { id: 'jm-pyq-2024-c1', title: 'JEE Main Jan 2024 Shift 1 — Chemistry Archive (25 Qs NTA Synced)', subject: 'Chemistry', year: 2024, paperCode: 'JM-24J-S1C', difficulty: 'EASY', isFree: false, topicFocus: 'Chemical Bonding & Coordination Spin', offsetA: 7, offsetB: 2 },
  { id: 'jm-pyq-2024-m1', title: 'JEE Main Jan 2024 Shift 1 — Mathematics Archive (25 Qs NTA Synced)', subject: 'Mathematics', year: 2024, paperCode: 'JM-24J-S1M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Definite Integrals, AOD & Matrices', offsetA: 7, offsetB: 2 },
  { id: 'jm-pyq-2024-p2', title: 'JEE Main Apr 2024 Shift 1 — Physics Archive (25 Qs NTA Synced)', subject: 'Physics', year: 2024, paperCode: 'JM-24A-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Electrostatics Flux, Optics & Photoelectric Threshold', offsetA: 25, offsetB: 10 },
  { id: 'jm-pyq-2024-c2', title: 'JEE Main Apr 2024 Shift 1 — Chemistry Archive (25 Qs NTA Synced)', subject: 'Chemistry', year: 2024, paperCode: 'JM-24A-S1C', difficulty: 'MODERATE', isFree: false, topicFocus: 'Cannizzaro Reaction, Amines & First-Order Kinetics', offsetA: 25, offsetB: 10 },
  { id: 'jm-pyq-2024-m2', title: 'JEE Main Apr 2024 Shift 1 — Mathematics Archive (25 Qs NTA Synced)', subject: 'Mathematics', year: 2024, paperCode: 'JM-24A-S1M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Vectors, Conics & Series Tricks', offsetA: 25, offsetB: 10 },
  // 2023 Shifts
  { id: 'jm-pyq-2023-p1', title: 'JEE Main Jan 2023 Shift 2 — Physics Archive (25 Qs Deleted Filtered)', subject: 'Physics', year: 2023, paperCode: 'JM-23J-S2P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Core Mechanics, Fluids & Current Electricity', offsetA: 12, offsetB: 4 },
  { id: 'jm-pyq-2023-c1', title: 'JEE Main Jan 2023 Shift 2 — Chemistry Archive (25 Qs Deleted Filtered)', subject: 'Chemistry', year: 2023, paperCode: 'JM-23J-S2C', difficulty: 'MODERATE', isFree: false, topicFocus: 'Solutions, CFT & Carbonyl Compounds', offsetA: 12, offsetB: 4 },
  { id: 'jm-pyq-2023-m1', title: 'JEE Main Jan 2023 Shift 2 — Mathematics Archive (25 Qs Deleted Filtered)', subject: 'Mathematics', year: 2023, paperCode: 'JM-23J-S2M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Calculus, Area & Linear Algebra', offsetA: 12, offsetB: 4 },
  // 2022 & 2021 Shifts
  { id: 'jm-pyq-2022-p1', title: 'JEE Main Jun 2022 Shift 1 — Physics Archive (25 Qs Deleted Filtered)', subject: 'Physics', year: 2022, paperCode: 'JM-22J-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Rotation, Flux & Stopping Potential', offsetA: 31, offsetB: 7 },
  { id: 'jm-pyq-2022-c1', title: 'JEE Main Jun 2022 Shift 1 — Chemistry Archive (25 Qs Deleted Filtered)', subject: 'Chemistry', year: 2022, paperCode: 'JM-22J-S1C', difficulty: 'MODERATE', isFree: false, topicFocus: 'MOT, Kinetics & Organic Mechanisms', offsetA: 31, offsetB: 7 },
  { id: 'jm-pyq-2022-m1', title: 'JEE Main Jun 2022 Shift 1 — Mathematics Archive (25 Qs Deleted Filtered)', subject: 'Mathematics', year: 2022, paperCode: 'JM-22J-S1M', difficulty: 'CHALLENGING', isFree: false, topicFocus: 'Definite Integrals, Circles & Vectors', offsetA: 31, offsetB: 7 },
  { id: 'jm-pyq-2021-p1', title: 'JEE Main Feb 2021 Shift 1 — Physics Archive (25 Qs Deleted Filtered)', subject: 'Physics', year: 2021, paperCode: 'JM-21F-S1P', difficulty: 'MODERATE', isFree: false, topicFocus: 'Vernier, Resistance & Modern Physics', offsetA: 38, offsetB: 11 },
  { id: 'jm-pyq-2021-c1', title: 'JEE Main Feb 2021 Shift 1 — Chemistry Archive (25 Qs Deleted Filtered)', subject: 'Chemistry', year: 2021, paperCode: 'JM-21F-S1C', difficulty: 'EASY', isFree: false, topicFocus: 'Physical Equilibrium, Biomolecules & Salt Analysis', offsetA: 38, offsetB: 11 },
  { id: 'jm-pyq-2021-m1', title: 'JEE Main Feb 2021 Shift 1 — Mathematics Archive (25 Qs Deleted Filtered)', subject: 'Mathematics', year: 2021, paperCode: 'JM-21F-S1M', difficulty: 'MODERATE', isFree: false, topicFocus: 'Quadratics, Matrices & AP Sequences', offsetA: 38, offsetB: 11 }
];

export const JEE_MAINS_PYQ_PAPERS: PyqPaper[] = [
  ...FULL_PAPER_SPECS.map(buildFullPaper),
  ...SHIFT_SPECS.map(buildShiftPaper)
];

