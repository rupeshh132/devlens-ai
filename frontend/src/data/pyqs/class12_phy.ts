import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_12_PHY_PAPERS: PyqPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 1. CBSE CLASS 12 PHYSICS 2024 BOARD EXAM (COMPLETE FULL PAPER - SET 55/1/1)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cbse-c12-phy-2024-board',
    title: 'CBSE Class 12 Physics Board Exam 2024 (Complete Original Paper - Set 55/1/1)',
    subject: 'Physics',
    targetClass: 'Class 12',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '55/1/1',
    totalMarks: 70,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 33,
    generalInstructions: [
      'This question paper contains 33 questions in 5 sections: Section A to Section E.',
      'Section A contains 16 questions: 12 MCQs and 4 Assertion-Reason questions of 1 mark each.',
      'Section B contains 5 questions of 2 marks each (Q17 to Q21).',
      'Section C contains 7 questions of 3 marks each (Q22 to Q28).',
      'Section D contains 2 case study-based questions of 4 marks each (Q29 and Q30).',
      'Section E contains 3 long answer questions of 5 marks each (Q31 to Q33).',
      'All questions are compulsory. Internal choice is provided in some questions.'
    ],
    questions: [
      {
        id: 'c12-phy-24-q01',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Electrostatics: Electric Charges and Fields',
        questionText: 'An electric dipole of dipole moment p is placed in a uniform electric field E. The torque τ acting on it and its potential energy U are respectively maximum and minimum when the angle between p and E is:',
        options: [
          'A) 90° and 0°',
          'B) 0° and 90°',
          'C) 90° and 180°',
          'D) 180° and 90°'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 90° and 0°.\nTorque on dipole: τ = p × E = p E sinθ. For maximum torque, sinθ = 1 => θ = 90° (τ_max = pE).\nPotential energy: U = -p · E = -p E cosθ. For minimum energy (stable equilibrium), cosθ = 1 => θ = 0° (U_min = -pE).',
        stepMarking: [
          { step: 'Torque formula τ = pE sinθ => max at θ = 90°', marks: '1/2 Mark' },
          { step: 'Potential energy U = -pE cosθ => min at θ = 0° (Option A)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Do not confuse minimum potential energy with zero potential energy! U = -pE is the lowest energy state (stable equilibrium at θ = 0°). At θ = 90°, U = 0, which is higher than -pE.',
        commonPitfall: 'Selecting 180° for minimum energy, which gives maximum positive potential energy U = +pE (unstable equilibrium).'
      },
      {
        id: 'c12-phy-24-q02',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Current Electricity: Drift Velocity',
        questionText: 'A potential difference V is applied across a copper wire of diameter d and length L. If the diameter of the wire is halved while keeping V and L constant, the drift velocity of free electrons in the wire will:',
        options: [
          'A) Be halved',
          'B) Double',
          'C) Increase by 4 times',
          'D) Remain unchanged'
        ],
        correctOption: 'D',
        modelAnswer: 'D) Remain unchanged.\nDrift velocity is given by v_d = e E τ / m = e V τ / (m L).\nSince applied potential V, length L, relaxation time τ, and electron mass m are constant, electric field E = V/L is unchanged.\nTherefore, drift velocity v_d is independent of the wire diameter d and remains unchanged.',
        stepMarking: [
          { step: 'Deduction that v_d = eVτ / (mL) depends only on V and L, independent of diameter d', marks: '1/2 Mark' },
          { step: 'Correct Option D (Remain unchanged)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Current I drops 4-fold (I ∝ d²), but drift velocity v_d remains unchanged because electric field E = V/L is constant.',
        commonPitfall: 'Using I = n e A v_d without realizing that current I also decreases proportionally with area A.'
      },
      {
        id: 'c12-phy-24-q03',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Electromagnetic Induction: Mutual Inductance',
        questionText: 'Two concentric coplanar circular coils of radii r₁ and r₂ (r₁ << r₂) carry currents. The mutual inductance M between them is directly proportional to:',
        options: [
          'A) r₁ / r₂',
          'B) r₁² / r₂',
          'C) r₂² / r₁',
          'D) r₁ · r₂'
        ],
        correctOption: 'B',
        modelAnswer: 'B) r₁² / r₂.\nLet current I₂ flow in outer coil r₂. Magnetic field at centre is B₂ = μ₀ I₂ / (2 r₂).\nMagnetic flux linked with smaller inner coil is Φ₁ = B₂ A₁ = [μ₀ I₂ / (2 r₂)] · (π r₁²).\nBy definition Φ₁ = M I₂ => M = (μ₀ π r₁²) / (2 r₂).\nHence, M ∝ r₁² / r₂.',
        stepMarking: [
          { step: 'Flux linked Φ₁ = B₂ · (π r₁²) = [μ₀ I₂ / (2r₂)] · (π r₁²)', marks: '1/2 Mark' },
          { step: 'Mutual inductance proportionality M ∝ r₁² / r₂ (Option B)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Always calculate flux through the smaller coil due to the larger coil, never the reverse.',
        commonPitfall: 'Writing r₂² / r₁ by assuming the outer coil receives flux from inner coil.'
      },
      {
        id: 'c12-phy-24-q04',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Moving Charges and Magnetism: Bohr Magneton',
        questionText: 'The magnetic dipole moment of an electron revolving in the nth Bohr orbit of a hydrogen atom is proportional to:',
        options: [
          'A) 1 / n',
          'B) 1 / n²',
          'C) n',
          'D) n²'
        ],
        correctOption: 'C',
        modelAnswer: 'C) n.\nMagnetic moment of a revolving electron is μ_L = (e / 2m) · L.\nAccording to Bohr\'s postulate, orbital angular momentum L = n h / (2π).\nTherefore, μ_L = (e / 2m) · (n h / 2π) = n · [ (e h) / (4π m) ] = n · μ_B.\nHence, orbital magnetic moment μ_L is directly proportional to n (principal quantum number).',
        stepMarking: [
          { step: 'Relation μ_L = (e / 2m) · L and L = nh / 2π', marks: '1/2 Mark' },
          { step: 'Deduction μ_L = n · μ_B => μ_L ∝ n (Option C)', marks: '1/2 Mark' }
        ],
        examinerTip: 'The fundamental constant μ_B = eh / (4πm) = 9.27 × 10⁻²⁴ A·m² is known as the Bohr Magneton.',
        commonPitfall: 'Confusing magnetic moment (∝ n) with orbital radius (∝ n²).'
      },
      {
        id: 'c12-phy-24-q05',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Electrostatic Potential and Capacitance',
        questionText: 'The work done in moving a test charge q₀ over an equipotential surface of potential V by a distance d is:',
        options: [
          'A) q₀ · V',
          'B) q₀ · V · d',
          'C) Zero',
          'D) q₀ / (4πε₀ d)'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Zero.\nWork done in moving a charge between two points A and B is W = q₀ (V_B - V_A).\nOn an equipotential surface, potential is constant everywhere (V_A = V_B = V).\nTherefore, potential difference ΔV = 0 => W = q₀ × 0 = 0.\nAlso, electric field E is perpendicular to equipotential surfaces at every point (E · dr = 0).',
        stepMarking: [
          { step: 'W = q₀ · ΔV with ΔV = 0 on equipotential surface => W = 0 (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Electric field lines are always perpendicular to equipotential surfaces, so F · dr = q(E · dr) = 0.',
        commonPitfall: 'Selecting q₀·V by confusing potential energy with work done on an equipotential surface.'
      },
      {
        id: 'c12-phy-24-q06',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Alternating Current: Pure Capacitive Circuit',
        questionText: 'In an AC circuit containing an ideal capacitor only, the phase difference between the alternating current and the applied voltage is:',
        options: [
          'A) Current leads voltage by π/2',
          'B) Voltage leads current by π/2',
          'C) Current and voltage are in phase',
          'D) Current lags voltage by π'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Current leads voltage by π/2.\nFor an ideal capacitor of capacitance C connected to v = V₀ sin(ωt):\nq = C v = C V₀ sin(ωt)\ni = dq/dt = ω C V₀ cos(ωt) = I₀ sin(ωt + π/2).\nHence, current leads voltage by a phase angle of π/2 radians (90°).',
        stepMarking: [
          { step: 'Expression i = I₀ sin(ωt + π/2) showing current leads voltage by π/2 (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Memory acronym "CIVIL": In a Capacitor (C), Current (I) leads Voltage (V); in an Inductor (L), Voltage (V) leads Current (I).',
        commonPitfall: 'Selecting Option B, which is true for pure inductive circuits, not capacitive circuits.'
      },
      {
        id: 'c12-phy-24-q07',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Ray Optics: Lens Maker’s Formula',
        questionText: 'A convex lens of glass (μ_g = 1.5) has a focal length f in air. When immersed in water (μ_w = 4/3), its new focal length f_w will be:',
        options: [
          'A) f / 4',
          'B) 2 f',
          'C) 4 f',
          'D) f'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 4 f.\nBy Lens Maker\'s Formula: 1/f = (μ_rel - 1) (1/R₁ - 1/R₂).\nIn air: 1/f = (1.5 - 1) · K = 0.5 K => K = 2 / f.\nIn water: 1/f_w = (μ_g / μ_w - 1) · K = [ (1.5 / (4/3)) - 1 ] · K = [ (9/8) - 1 ] · K = (1/8) K.\nSubstitute K = 2/f:\n1/f_w = (1/8) × (2/f) = 1 / (4f) => f_w = 4 f.',
        stepMarking: [
          { step: 'Lens maker ratio in air and water: f_w / f = (μ_g - 1) / (μ_g/μ_w - 1)', marks: '1/2 Mark' },
          { step: 'Evaluation: (0.5) / (1/8) = 4 => f_w = 4f (Option C)', marks: '1/2 Mark' }
        ],
        examinerTip: 'Focal length of a glass lens in water always increases 4-fold: f_water = 4 · f_air.',
        commonPitfall: 'Using (μ_g - μ_w) directly instead of relative refractive index (μ_g / μ_w - 1).'
      },
      {
        id: 'c12-phy-24-q08',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Dual Nature of Radiation and Matter: de Broglie Wavelength',
        questionText: 'An electron is accelerated through a potential difference of V volts. Its de Broglie wavelength is given by:',
        options: [
          'A) 12.27 / √V Å',
          'B) 1.227 / √V Å',
          'C) 0.1227 / √V Å',
          'D) 122.7 / √V Å'
        ],
        correctOption: 'A',
        modelAnswer: 'A) 12.27 / √V Å.\nde Broglie wavelength of an electron: λ = h / √(2 m e V).\nSubstituting standard constants: h = 6.63 × 10⁻³⁴ J·s, m = 9.11 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C:\nλ = (1.227 / √V) nm = (12.27 / √V) Å.\n(Note: 1 nm = 10 Å, so 1.227 nm = 12.27 Å).',
        stepMarking: [
          { step: 'Formula λ = h / √(2meV) and correct numerical constant in Angstroms: 12.27 / √V Å', marks: '1 Mark' }
        ],
        examinerTip: 'Be very vigilant of units: in nanometres it is 1.227 / √V nm; in Angstroms it is 12.27 / √V Å.',
        commonPitfall: 'Choosing Option B because the student remembers 1.227 but misses that the options are in Ångstroms (Å).'
      },
      {
        id: 'c12-phy-24-q09',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Nuclei: Nuclear Density',
        questionText: 'Two nuclei have mass numbers in the ratio 1 : 8. The ratio of their nuclear densities is:',
        options: [
          'A) 1 : 2',
          'B) 1 : 8',
          'C) 1 : 1',
          'D) 2 : 1'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 1 : 1.\nNuclear radius varies as R = R₀ · A^(1/3).\nNuclear volume V = ⁴⁄₃ π R³ = ⁴⁄₃ π R₀³ A ∝ A.\nMass of nucleus M ≈ A · m (where m is average nucleon mass).\nNuclear density ρ = Mass / Volume = (A · m) / [ ⁴⁄₃ π R₀³ A ] = m / [ ⁴⁄₃ π R₀³ ].\nSince mass number A cancels out, nuclear density ρ is constant for all nuclei (~2.3 × 10¹⁷ kg/m³).\nRatio of densities is 1 : 1.',
        stepMarking: [
          { step: 'Showing density ρ = M/V is independent of mass number A => ratio 1 : 1 (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Nuclear density is universally constant across the entire periodic table (~2.3 × 10¹⁷ kg/m³). Ratio of nuclear radii is R₁/R₂ = (1/8)^(1/3) = 1:2, but density ratio is strictly 1:1.',
        commonPitfall: 'Writing 1:2 (radius ratio) or 1:8 (mass ratio) instead of 1:1.'
      },
      {
        id: 'c12-phy-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Semiconductor Electronics: Energy Band Gap',
        questionText: 'The forbidden energy band gaps of Carbon (diamond), Silicon, and Germanium are E_g(C), E_g(Si), and E_g(Ge) respectively. The correct relation between them is:',
        options: [
          'A) E_g(C) < E_g(Si) < E_g(Ge)',
          'B) E_g(C) > E_g(Si) > E_g(Ge)',
          'C) E_g(C) = E_g(Si) = E_g(Ge)',
          'D) E_g(Si) > E_g(C) > E_g(Ge)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) E_g(C) > E_g(Si) > E_g(Ge).\nBand gap values at room temperature:\n- Carbon (diamond, insulator): E_g(C) ≈ 5.4 eV\n- Silicon (semiconductor): E_g(Si) ≈ 1.1 eV\n- Germanium (semiconductor): E_g(Ge) ≈ 0.7 eV\nTherefore, E_g(C) > E_g(Si) > E_g(Ge).',
        stepMarking: [
          { step: 'Comparing band gaps: Diamond (~5.4 eV) > Si (1.1 eV) > Ge (0.7 eV) (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'As atomic size increases down Group 14 (C -> Si -> Ge), valence electrons are farther from the nucleus, lowering the energy band gap.',
        commonPitfall: 'Thinking Silicon has a larger band gap than Carbon because Carbon is widely used in organic conductors.'
      },
      {
        id: 'c12-phy-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Magnetism and Matter: Magnetic Susceptibility',
        questionText: 'The magnetic susceptibility χ of a diamagnetic substance is:',
        options: [
          'A) Small and positive',
          'B) Large and positive',
          'C) Small and negative',
          'D) Inversely proportional to absolute temperature'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Small and negative.\nFor diamagnetic substances, magnetic susceptibility is negative (-1 ≤ χ < 0) and small in magnitude (e.g., copper, bismuth, water).\nFurthermore, diamagnetic susceptibility is temperature-independent (Curie\'s law does not apply to diamagnets).',
        stepMarking: [
          { step: 'Correct Option C (Small and negative)', marks: '1 Mark' }
        ],
        examinerTip: 'Paramagnetic: χ is small and positive (χ ∝ 1/T). Ferromagnetic: χ is very large and positive. Diamagnetic: χ is small and negative (temperature independent).',
        commonPitfall: 'Selecting Option D (susceptibility of diamagnets does NOT follow Curie\'s law).'
      },
      {
        id: 'c12-phy-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Alternating Current: Commercial Frequency',
        questionText: 'An AC source in India operates at a standard frequency of 50 Hz. How many times does the alternating current reach zero value in one second?',
        options: [
          'A) 50 times',
          'B) 100 times',
          'C) 200 times',
          'D) 25 times'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 100 times.\nIn one complete AC cycle (sine wave), the current becomes zero twice (at t = T/2 and t = T).\nSince the frequency f = 50 Hz, there are 50 complete cycles in one second.\nTotal zero crossings = 50 cycles × 2 times/cycle = 100 times per second.',
        stepMarking: [
          { step: '2 zero crossings per cycle × 50 Hz = 100 times (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Current reaches peak magnitude twice per cycle (once positive, once negative), and crosses zero twice per cycle.',
        commonPitfall: 'Selecting 50 times by simply stating the frequency number.'
      },
      {
        id: 'c12-phy-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Electrostatics: Electric Field Lines (Assertion-Reason)',
        questionText: 'Assertion (A): Two electric field lines never cross each other.\nReason (R): If two electric field lines intersect at a point, there would be two tangent lines at that point, indicating two directions of electric field at the same point, which is impossible.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nThe tangent to an electric field line at any point gives the unique direction of the net electric field at that point. If two field lines crossed, there would be two tangents, implying two different directions for the net electric field at a single point in space, which violates the vector uniqueness of net electric field.',
        stepMarking: [
          { step: 'Correct Option A with justification of uniqueness of net field vector', marks: '1 Mark' }
        ],
        examinerTip: 'This is a classical board question. Both electric field lines and magnetic field lines follow the exact same non-intersection property.',
        commonPitfall: 'Confusing tangent direction with normal direction.'
      },
      {
        id: 'c12-phy-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Electromagnetic Induction: Inertia (Assertion-Reason)',
        questionText: 'Assertion (A): Self-inductance of a coil is also referred to as electrical inertia.\nReason (R): Self-inductance opposes both the growth and decay of electric current in the coil.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nAccording to Lenz\'s law, an induced EMF (e = -L di/dt) always opposes any change in current. When current grows, induced EMF opposes growth; when current decays, induced EMF opposes decay. Because inertia in mechanics opposes changes in velocity, self-inductance L plays an identical role in electrical circuits and is termed electrical inertia.',
        stepMarking: [
          { step: 'Correct Option A with reference to Lenz\'s law opposition to current change', marks: '1 Mark' }
        ],
        examinerTip: 'In mechanical-electrical analogies: Mass m ↔ Inductance L; Velocity v ↔ Current I; Force F ↔ Voltage V.',
        commonPitfall: 'Believing self-inductance only opposes growth of current.'
      },
      {
        id: 'c12-phy-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Dual Nature: Photoelectric Effect (Assertion-Reason)',
        questionText: 'Assertion (A): Photoelectric emission from a metallic surface is an instantaneous process (time lag < 10⁻⁹ s).\nReason (R): Light incident on the metal transfers its energy continuously over the entire wave front to all electrons simultaneously.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (A) is true but (R) is false.\nAssertion (A) is true: Photoelectric emission is practically instantaneous (time lag ~10⁻⁹ seconds or less).\nReason (R) is false: In wave theory, continuous energy spread over wavefront would predict a measurable time lag (several hours). In reality, quantum particle theory explains that a single photon collides elastically with a single electron, transferring its entire quantum of energy hν instantaneously in a one-to-one collision.',
        stepMarking: [
          { step: 'Assertion is True (instantaneous emission)', marks: '1/2 Mark' },
          { step: 'Reason is False (continuous energy transfer is the classical wave theory failure) => Option C', marks: '1/2 Mark' }
        ],
        examinerTip: 'The failure of wave theory to explain the instantaneous nature of photoelectric emission was one of the strongest experimental proofs for Einstein\'s photon quantum theory.',
        commonPitfall: 'Assuming the Reason is true because it describes wave theory.'
      },
      {
        id: 'c12-phy-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Semiconductors: Temperature Effect (Assertion-Reason)',
        questionText: 'Assertion (A): The electrical conductivity of an intrinsic semiconductor increases with an increase in temperature.\nReason (R): With increasing temperature, more covalent bonds break, generating more electron-hole pairs as charge carriers.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nConductivity is σ = e (n_e μ_e + n_h μ_h). In intrinsic semiconductors, as temperature rises, thermal energy ruptures covalent bonds, causing an exponential increase in intrinsic carrier concentration n_i (both free electrons and holes). The massive increase in carrier density far outweighs the slight decrease in mobility, causing electrical conductivity to rise (negative temperature coefficient of resistance).',
        stepMarking: [
          { step: 'Correct Option A with reference to thermal generation of electron-hole pairs', marks: '1 Mark' }
        ],
        examinerTip: 'Metals have a positive temperature coefficient of resistance (resistance increases with T). Semiconductors have a NEGATIVE temperature coefficient of resistance (resistance decreases with T).',
        commonPitfall: 'Treating semiconductors like metals and predicting resistance increase.'
      },

      // ─── SECTION B: SHORT ANSWER QUESTIONS (Q17 to Q21 - 2 Marks Each) ───
      {
        id: 'c12-phy-24-q17',
        qNum: 17,
        section: 'B',
        marks: 2,
        topic: 'Wave Optics: Young’s Double Slit Experiment',
        questionText: 'In a Young\'s double slit experiment using monochromatic light of wavelength λ = 600 nm, the slit separation is d = 0.5 mm and the screen distance is D = 1.0 m. Determine:\n(a) The fringe width β.\n(b) The distance of the 3rd dark fringe from the central bright maximum.',
        modelAnswer: '(a) Fringe width β:\nβ = (λ · D) / d\nGiven: λ = 600 × 10⁻⁹ m, D = 1.0 m, d = 0.5 × 10⁻³ m\nβ = (600 × 10⁻⁹ × 1.0) / (0.5 × 10⁻³) = 1.2 × 10⁻³ m = 1.2 mm\n\n(b) Distance of nth dark fringe from central maximum:\nx_n = (2n - 1) · (λ D) / (2 d) = (2n - 1) · (β / 2)\nFor 3rd dark fringe (n = 3):\nx₃ = (2 × 3 - 1) · (1.2 mm / 2) = 5 × 0.6 mm = 3.0 mm (or 3.0 × 10⁻³ m).',
        stepMarking: [
          { step: 'Formula β = λD/d and correct substitution yielding β = 1.2 mm', marks: '1 Mark' },
          { step: 'Position of 3rd dark fringe formula x = 5/2 β and result 3.0 mm', marks: '1 Mark' }
        ],
        examinerTip: 'Always show explicit unit conversions (nm -> 10⁻⁹ m, mm -> 10⁻³ m) before substituting.',
        commonPitfall: 'Using x = 3β instead of 2.5β for the 3rd dark fringe.'
      },
      {
        id: 'c12-phy-24-q18',
        qNum: 18,
        section: 'B',
        marks: 2,
        topic: 'Moving Charges and Magnetism: Biot-Savart Law',
        questionText: 'State Biot-Savart law in vector form. Use it to write the expression for the magnetic field at the centre of a circular coil of radius R carrying current I with N turns.',
        modelAnswer: '1) Vector form of Biot-Savart Law:\ndB = (μ₀ / 4π) · [ (I dl × r̂) / r² ] = (μ₀ / 4π) · [ (I dl × r) / r³ ]\nwhere dB is the magnetic field produced by current element I dl at position vector r.\n\n2) Magnetic field at centre of circular coil of N turns:\nAt the centre, angle between dl and r̂ is 90° (dl ⊥ r̂).\ndB = (μ₀ / 4π) · (I dl sin90° / R²) = (μ₀ / 4π) · (I dl / R²)\nIntegrating over the circumference: ∮ dl = 2π R\nB = (μ₀ / 4π) · (I / R²) · 2π R = (μ₀ I) / (2 R)\nFor a coil having N turns: B_centre = (μ₀ N I) / (2 R).',
        stepMarking: [
          { step: 'Vector form dB = (μ₀/4π) · [I dl × r̂ / r²] with explanation of symbols', marks: '1 Mark' },
          { step: 'Integration over circumference giving B = μ₀NI / (2R)', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the denominator: with unit vector r̂ it is r²; with full position vector r it is r³.',
        commonPitfall: 'Writing scalar dB = μ₀ I dl sinθ / 4πr² when the question explicitly demands vector form.'
      },
      {
        id: 'c12-phy-24-q19',
        qNum: 19,
        section: 'B',
        marks: 2,
        topic: 'Nuclei: Mass Defect & Binding Energy',
        questionText: 'Calculate the binding energy per nucleon of a Helium nucleus ⁴₂He.\nGiven: Mass of ⁴₂He nucleus = 4.001506 u, Mass of proton m_p = 1.007276 u, Mass of neutron m_n = 1.008665 u. [Take 1 u = 931.5 MeV].',
        modelAnswer: 'A Helium nucleus ⁴₂He contains Z = 2 protons and (A - Z) = 2 neutrons.\n1) Total mass of constituents:\nMass = 2 m_p + 2 m_n = 2(1.007276 u) + 2(1.008665 u) = 2.014552 u + 2.017330 u = 4.031882 u\n\n2) Mass defect (Δm):\nΔm = (Mass of constituents) - (Actual nuclear mass)\nΔm = 4.031882 u - 4.001506 u = 0.030376 u\n\n3) Total Binding Energy:\nBE = Δm × 931.5 MeV = 0.030376 × 931.5 MeV ≈ 28.295 MeV\n\n4) Binding Energy per nucleon (BE / A):\nBE / A = 28.295 MeV / 4 = 7.074 MeV/nucleon.',
        stepMarking: [
          { step: 'Mass defect calculation: Δm = 0.030376 u', marks: '1 Mark' },
          { step: 'Binding energy per nucleon: BE/4 = 7.07 MeV/nucleon', marks: '1 Mark' }
        ],
        examinerTip: 'Keep all decimal places during subtraction of masses. Rounding off early causes large percentage errors in nuclear energy calculations.',
        commonPitfall: 'Reporting total binding energy (28.3 MeV) instead of dividing by A = 4 for BE per nucleon.'
      },
      {
        id: 'c12-phy-24-q20',
        qNum: 20,
        section: 'B',
        marks: 2,
        topic: 'Semiconductor Electronics: Full Wave Rectifier',
        questionText: 'Draw the circuit diagram of a centre-tapped full-wave rectifier using two p-n junction diodes. Briefly explain how it achieves rectification during both halves of the AC cycle.',
        modelAnswer: '1) Circuit Working:\nA centre-tapped secondary transformer winding is connected to two diodes D₁ and D₂. The load resistor R_L is connected between the centre tap and the common cathode junction of the diodes.\n\n2) Operation:\n- During Positive Half Cycle: Terminal A is positive relative to centre tap; terminal B is negative. Diode D₁ is forward biased (conducts) and D₂ is reverse biased (does not conduct). Current flows through load R_L from X to Y.\n- During Negative Half Cycle: Terminal A becomes negative; terminal B becomes positive. Diode D₁ is reverse biased and D₂ is forward biased (conducts). Current again flows through load R_L in the EXACT SAME direction from X to Y.\nHence, unidirectional pulsating DC is obtained across R_L across both halves of the AC cycle.',
        stepMarking: [
          { step: 'Proper circuit diagram showing centre tap, two diodes, and load resistor R_L', marks: '1 Mark' },
          { step: 'Explanation of conduction by D₁ and D₂ in alternate half cycles maintaining unidirectional load current', marks: '1 Mark' }
        ],
        examinerTip: 'Output ripple frequency of a full-wave rectifier is 2f (100 Hz for 50 Hz input), whereas for a half-wave rectifier it is f (50 Hz).',
        commonPitfall: 'Omitting the centre-tap connection in the transformer secondary.'
      },
      {
        id: 'c12-phy-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'Alternating Current: Transformer Losses',
        questionText: 'Mention any two major energy losses in a commercial transformer and describe how each loss is minimized in practical transformer construction.',
        modelAnswer: '1) Eddy Current Loss:\n- Cause: The alternating magnetic flux induces circulating currents (eddy currents) in the solid iron core, dissipating energy as heat.\n- Minimization: The core is made of thin laminated sheets of soft iron insulated from each other by lacquer/varnish to break the eddy current paths.\n\n2) Hysteresis Loss:\n- Cause: Repeated magnetization and demagnetization of the core by alternating current consumes energy corresponding to the area of the B-H hysteresis loop.\n- Minimization: The core is made of a magnetic material having a narrow hysteresis loop, such as soft iron or silicon steel.',
        stepMarking: [
          { step: 'Eddy current loss cause and minimization using laminated core', marks: '1 Mark' },
          { step: 'Hysteresis loss cause and minimization using soft iron/silicon steel', marks: '1 Mark' }
        ],
        examinerTip: 'Other valid losses include Copper Loss (I²R, minimized by thick copper wires) and Flux Leakage (minimized by winding primary and secondary coils over each other).',
        commonPitfall: 'Stating "use plastic core" to stop eddy currents, which would destroy transformer magnetic induction.'
      },

      // ─── SECTION C: SHORT ANSWER QUESTIONS (Q22 to Q28 - 3 Marks Each) ───
      {
        id: 'c12-phy-24-q22',
        qNum: 22,
        section: 'C',
        marks: 3,
        topic: 'Alternating Current: Series LCR Resonance',
        questionText: 'A series LCR circuit with L = 2.0 H, C = 32 μF and R = 10 Ω is connected to a variable frequency 220 V AC source.\n(a) Determine the resonant angular frequency ω₀ of the circuit.\n(b) Calculate the impedance of the circuit and current amplitude at resonance.\n(c) What is the Q-factor (quality factor) of the circuit?',
        modelAnswer: '(a) Resonant angular frequency:\nω₀ = 1 / √(L C)\nω₀ = 1 / √[ 2.0 × (32 × 10⁻⁶) ] = 1 / √(64 × 10⁻⁶) = 1 / (8 × 10⁻³) = 125 rad/s\n\n(b) At resonance, X_L = X_C, so impedance Z = R = 10 Ω.\nRMS current: I_rms = V_rms / Z = 220 V / 10 Ω = 22 A.\nCurrent Amplitude (Peak current): I₀ = I_rms × √2 = 22 × 1.414 ≈ 31.11 A.\n\n(c) Quality factor Q:\nQ = (ω₀ L) / R = (125 × 2.0) / 10 = 250 / 10 = 25\n(Alternatively: Q = (1 / R) √(L / C) = (1 / 10) √(2 / (32 × 10⁻⁶)) = (1 / 10) × 250 = 25).',
        stepMarking: [
          { step: 'Resonant angular frequency ω₀ = 125 rad/s with correct units', marks: '1 Mark' },
          { step: 'Resonance impedance Z = 10 Ω and peak current amplitude I₀ = 31.1 A', marks: '1 Mark' },
          { step: 'Q-factor evaluation yielding Q = 25 (dimensionless)', marks: '1 Mark' }
        ],
        examinerTip: 'Be very careful with current amplitude! The question asks for current amplitude (I₀), not RMS current. I₀ = √2 · I_rms.',
        commonPitfall: 'Students report I_rms = 22 A as the final answer and forget to multiply by √2 to find the peak current amplitude.'
      },
      {
        id: 'c12-phy-24-q23',
        qNum: 23,
        section: 'C',
        marks: 3,
        topic: 'Electrostatics: Gauss’s Law Plane Sheet Derivation',
        questionText: 'State Gauss\'s Law in electrostatics. Apply it to derive an expression for the electric field intensity at a distance r from an infinitely large, thin, uniformly charged plane sheet with surface charge density +σ.',
        modelAnswer: '1) Statement of Gauss\'s Law:\nThe total electric flux through any closed Gaussian surface in free space is equal to 1/ε₀ times the net charge enclosed by the surface: Φ = ∮ E · dA = q_enclosed / ε₀.\n\n2) Derivation for Infinite Plane Sheet:\nConsider a thin, non-conducting infinite plane sheet having uniform surface charge density σ.\nBy symmetry, the electric field E is directed perpendicularly outwards from both sides of the sheet.\nChoose a cylindrical Gaussian surface of cross-sectional area A and length 2r, with its axis perpendicular to the sheet.\n- For curved surface: E is perpendicular to normal dA, so E · dA = 0 (flux is zero).\n- For two circular end caps (each of area A): E is parallel to dA, so flux through each end face is E · A.\nTotal electric flux Φ = E A + E A = 2 E A.\nTotal charge enclosed by Gaussian cylinder: q_enclosed = σ · A.\nApplying Gauss\'s Law:\n2 E A = (σ · A) / ε₀\nE = σ / (2 ε₀).\nIn vector form: E = [σ / (2 ε₀)] n̂ (directed away from sheet for σ > 0).',
        stepMarking: [
          { step: 'Clear statement of Gauss\'s Law Φ = q_enclosed / ε₀', marks: '1/2 Mark' },
          { step: 'Diagram with cylindrical Gaussian surface piercing the sheet of area A', marks: '1 Mark' },
          { step: 'Flux calculation 2EA and enclosed charge σA', marks: '1 Mark' },
          { step: 'Final formula E = σ / (2ε₀) showing independence from distance r', marks: '1/2 Mark' }
        ],
        examinerTip: 'Notice that electric field due to an infinite thin sheet is INDEPENDENT of distance r. For a thick conducting plate, E = σ / ε₀ (twice as large).',
        commonPitfall: 'Using E = σ / ε₀ (which applies to conducting plates, not thin non-conducting sheets).'
      },
      {
        id: 'c12-phy-24-q24',
        qNum: 24,
        section: 'C',
        marks: 3,
        topic: 'Current Electricity: Wheatstone Bridge Balanced Condition',
        questionText: 'State Kirchhoff’s rules for electrical networks. Use these rules to obtain the balanced condition for a Wheatstone bridge network consisting of resistors P, Q, R, and S.',
        modelAnswer: '1) Kirchhoff\'s Rules:\n- Junction Rule (KCL): The algebraic sum of all electric currents meeting at any junction in a network is zero: Σ I = 0 (based on conservation of charge).\n- Loop Rule (KVL): The algebraic sum of changes in potential around any closed circuit loop is zero: Σ ΔV = Σ E - Σ (I R) = 0 (based on conservation of energy).\n\n2) Balanced Condition of Wheatstone Bridge:\nConsider four resistors P, Q, R, S connected in four arms AB, BC, AD, DC with a galvanometer G between B and D.\nAt balance point, galvanometer shows zero deflection (current I_g = 0), so potential at B equals potential at D (V_B = V_D).\nApplying Junction Rule at B: I₁ = I₂ (current through P equals current through Q).\nApplying Junction Rule at D: I₃ = I₄ (current through R equals current through S).\n\nApplying Loop Rule to closed mesh ABDA (with I_g = 0):\n-I₁ P + I₃ R = 0 => I₁ P = I₃ R  --- (1)\n\nApplying Loop Rule to closed mesh BCDB (with I_g = 0):\n-I₁ Q + I₃ S = 0 => I₁ Q = I₃ S  --- (2)\n\nDividing equation (1) by equation (2):\n(I₁ P) / (I₁ Q) = (I₃ R) / (I₃ S)\nP / Q = R / S.\nThis is the balanced condition for the Wheatstone bridge.',
        stepMarking: [
          { step: 'Accurate statements of Kirchhoff\'s First and Second Rules with conservation principles', marks: '1 Mark' },
          { step: 'Wheatstone bridge circuit diagram with labelled currents and I_g = 0 condition', marks: '1 Mark' },
          { step: 'Application of KVL to both loops and deduction of P/Q = R/S', marks: '1 Mark' }
        ],
        examinerTip: 'Always mention that KCL represents Conservation of Charge and KVL represents Conservation of Energy.',
        commonPitfall: 'Forgetting the condition I_g = 0 before writing the loop equations.'
      },
      {
        id: 'c12-phy-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'Ray Optics: Lens Maker’s Formula Derivation',
        questionText: 'Derive the Lens Maker’s formula 1/f = (μ - 1) (1/R₁ - 1/R₂) for a thin convex lens placed in air, assuming refraction at two spherical surfaces.',
        modelAnswer: 'Consider a thin double convex lens of refractive index μ₂ placed in medium of refractive index μ₁ = 1 (air).\nLet R₁ and R₂ be the radii of curvature of the first and second refracting surfaces.\n\n1) Refraction at First Surface (radius R₁):\nA point object O is placed at distance u in front of the first surface, forming virtual image I₁ at distance v₁.\nFormula for refraction at spherical surface: (μ₂ / v₁) - (μ₁ / u) = (μ₂ - μ₁) / R₁\nWith μ₁ = 1 and μ₂ = μ:\n(μ / v₁) - (1 / u) = (μ - 1) / R₁  --- (1)\n\n2) Refraction at Second Surface (radius R₂):\nThe image I₁ acts as a virtual object for the second surface (object distance = v₁), forming final real image at distance v in air.\nHere, light travels from denser medium (μ₂ = μ) to rarer medium (μ₁ = 1):\n(1 / v) - (μ / v₁) = (1 - μ) / R₂ = - (μ - 1) / R₂  --- (2)\n\n3) Adding equations (1) and (2):\n[ (μ / v₁) - (1 / u) ] + [ (1 / v) - (μ / v₁) ] = (μ - 1) [ 1/R₁ - 1/R₂ ]\n(1 / v) - (1 / u) = (μ - 1) [ 1/R₁ - 1/R₂ ]\n\nWhen object is at infinity (u = ∞), image forms at principal focus (v = f):\n1/f - 1/∞ = (μ - 1) [ 1/R₁ - 1/R₂ ]\n1 / f = (μ - 1) [ (1 / R₁) - (1 / R₂) ].',
        stepMarking: [
          { step: 'Refraction equation at first spherical surface: (μ/v₁) - (1/u) = (μ - 1)/R₁', marks: '1 Mark' },
          { step: 'Refraction equation at second spherical surface: (1/v) - (μ/v₁) = -(μ - 1)/R₂', marks: '1 Mark' },
          { step: 'Summing equations and applying u = ∞, v = f to arrive at Lens Maker\'s formula', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the sign reversal in the second surface equation: (1 - μ)/R₂ = - (μ - 1)/R₂. Adding the two equations cancels the intermediate v₁ term cleanly.',
        commonPitfall: 'Incorrect sign of the second surface equation causing (1/R₁ + 1/R₂) instead of (1/R₁ - 1/R₂).'
      },
      {
        id: 'c12-phy-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Ray Optics: Total Internal Reflection & Optical Fibre',
        questionText: 'Define Total Internal Reflection (TIR) and critical angle. State the two essential conditions for TIR to occur. Explain the structure and working principle of an optical communication fibre.',
        modelAnswer: '1) Definitions:\n- Critical Angle (i_c): The angle of incidence in the denser medium for which the angle of refraction in the rarer medium becomes exactly 90°: sin i_c = n₂ / n₁ = 1 / n.\n- Total Internal Reflection: When light travelling from a denser to a rarer medium is incident at an angle greater than the critical angle (i > i_c), the light is completely reflected back into the denser medium.\n\n2) Two Essential Conditions for TIR:\n(i) Light must travel from an optically denser medium to an optically rarer medium.\n(ii) Angle of incidence in the denser medium must be strictly greater than the critical angle (i > i_c).\n\n3) Optical Fibre Structure & Working:\n- Structure: Consists of an inner core (refractive index n₁) surrounded by an outer cladding (refractive index n₂) such that n₁ > n₂ (core is optically denser than cladding).\n- Working: When light signals are injected into the core at a suitable angle, light strikes the core-cladding boundary at an angle greater than critical angle. Repeated total internal reflections guide the optical signal over vast distances with practically zero transmission loss.',
        stepMarking: [
          { step: 'Definitions of critical angle (sin i_c = 1/n) and total internal reflection', marks: '1 Mark' },
          { step: 'Two mandatory conditions for TIR', marks: '1 Mark' },
          { step: 'Optical fibre construction (core n₁ > cladding n₂) and propagation by repeated TIR', marks: '1 Mark' }
        ],
        examinerTip: 'Always specify that the core must have a HIGHER refractive index than the cladding (n_core > n_cladding).',
        commonPitfall: 'Forgetting to state that light must travel from denser to rarer medium.'
      },
      {
        id: 'c12-phy-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Dual Nature: Einstein’s Photoelectric Equation',
        questionText: 'State Einstein’s photoelectric equation. Explain using this equation:\n(a) Why there exists a threshold frequency below which no emission occurs.\n(b) Why maximum kinetic energy of emitted photoelectrons is independent of light intensity.\n(c) Why photoelectric emission is instantaneous.',
        modelAnswer: '1) Einstein\'s Photoelectric Equation:\nK_max = h ν - Φ₀ = h ν - h ν₀ = h (ν - ν₀)\nwhere hν is photon energy, Φ₀ = hν₀ is work function, ν is incident frequency, and ν₀ is threshold frequency.\n\n2) Explanations:\n(a) Threshold Frequency: If incident frequency ν < ν₀, then K_max < 0 (kinetic energy would be negative, which is physically impossible). Thus, no photoelectrons can be emitted if ν < ν₀, regardless of intensity.\n\n(b) Independence from Intensity: In photon theory, light intensity corresponds to the number of photons striking per unit area per second. Each individual electron absorbs energy from only ONE photon. Increasing intensity increases photon count (and thus photocurrent), but individual photon energy hν remains constant. Hence, K_max = hν - Φ₀ depends only on frequency, not intensity.\n\n(c) Instantaneous Emission: Energy absorption is a discrete, single-step collision between one photon and one electron. The photon imparts its entire energy instantaneously (within 10⁻⁹ s) without any progressive wavefront energy accumulation.',
        stepMarking: [
          { step: 'Statement of Einstein\'s equation K_max = h(ν - ν₀)', marks: '1 Mark' },
          { step: 'Explanation of threshold frequency (a) and intensity independence (b)', marks: '1 Mark' },
          { step: 'Explanation of instantaneous one-to-one photon collision (c)', marks: '1 Mark' }
        ],
        examinerTip: 'Intensity controls the number of emitted photoelectrons (photocurrent); frequency controls the kinetic energy of emitted photoelectrons.',
        commonPitfall: 'Confusing light intensity with light frequency.'
      },
      {
        id: 'c12-phy-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Atoms: Bohr Model Orbit Radius Derivation',
        questionText: 'State the basic postulates of Bohr\'s model of the hydrogen atom. Derive the expression for the radius of the nth permitted circular orbit of an electron revolving around a nucleus of charge Ze.',
        modelAnswer: '1) Bohr\'s Postulates:\n- Postulate 1: Centripetal force for circular electron orbit is provided by Coulomb electrostatic attraction: (m v² / r) = [ 1 / (4πε₀) ] · (Z e² / r²).\n- Postulate 2: Quantization of Angular Momentum: Electrons revolve only in non-radiating stationary orbits where orbital angular momentum is an integral multiple of h / (2π): m v r = n h / (2π) (n = 1, 2, 3...).\n- Postulate 3: Frequency Condition: Radiation of frequency ν is emitted or absorbed only when electron transitions between orbits: E₂ - E₁ = h ν.\n\n2) Derivation of Orbit Radius (r_n):\nFrom Postulate 2: v = (n h) / (2π m r)\nSubstitute v into Postulate 1: m [ (n h) / (2π m r) ]² / r = (1 / 4πε₀) · (Z e² / r²)\n[ m n² h² ] / [ 4π² m² r² · r ] = [ 1 / (4πε₀) ] · (Z e² / r²)\n[ n² h² ] / [ 4π² m r³ ] = [ Z e² ] / [ 4πε₀ r² ]\nCancel r² on both sides:\n[ n² h² ] / [ π m r ] = [ Z e² ] / ε₀\nr_n = (ε₀ n² h²) / (π m Z e²).\nFor hydrogen (Z = 1) and first orbit (n = 1): r₁ = 0.529 Å (Bohr radius a₀).',
        stepMarking: [
          { step: 'Statement of Bohr\'s three postulates with mathematical formulas', marks: '1 Mark' },
          { step: 'Combining centripetal force and angular momentum quantization equations', marks: '1 Mark' },
          { step: 'Deduction of radius expression r_n = ε₀ n² h² / (π m Z e²)', marks: '1 Mark' }
        ],
        examinerTip: 'Radius is proportional to n² / Z: r_n ∝ n². Orbit velocity is proportional to Z / n: v_n ∝ 1/n.',
        commonPitfall: 'Algebraic errors in squaring velocity terms when substituting into the centripetal equation.'
      },

      // ─── SECTION D: CASE STUDY-BASED QUESTIONS (Q29 to Q30 - 4 Marks Each) ───
      {
        id: 'c12-phy-24-q29',
        qNum: 29,
        section: 'D',
        marks: 4,
        topic: 'Moving Charges and Magnetism: Moving Coil Galvanometer Case Study',
        questionText: 'Read the following passage and answer the questions:\nA Moving Coil Galvanometer (MCG) is a highly sensitive instrument used to detect and measure small electric currents. It works on the principle that a current-carrying coil placed in a uniform magnetic field experiences a deflecting torque τ = N I A B sinθ. To make the torque independent of orientation, a radial magnetic field is produced using concave cylindrical pole pieces and a soft iron cylinder. When current flows, the deflecting torque is counterbalanced by a restoring torque τ_restoring = k φ provided by a phosphor bronze suspension strip.\n\n(i) Why is a radial magnetic field necessary in a moving coil galvanometer? (1 Mark)\n(ii) State two ways to increase the current sensitivity of a galvanometer. (1 Mark)\n(iii) A galvanometer has a resistance of G = 50 Ω and gives full-scale deflection for a current of I_g = 2 mA. Calculate the shunt resistance required to convert it into an ammeter of range 0 to 5 A. (2 Marks)',
        modelAnswer: '(i) A radial magnetic field ensures that the magnetic field lines are always parallel to the plane of the coil (θ = 90°) for all angular positions. This makes deflecting torque strictly constant at its maximum value: τ = N I A B, ensuring a linear scale where deflection is directly proportional to current (φ ∝ I).\n\n(ii) Current sensitivity is I_s = φ / I = (N A B) / k. It can be increased by:\n1. Increasing the number of turns N or coil area A.\n2. Using a strong permanent magnet (increasing B).\n3. Decreasing the torsional spring constant k (using phosphor-bronze suspension).\n\n(iii) Conversion to Ammeter:\nShunt resistance formula: S = (I_g · G) / (I - I_g)\nGiven: G = 50 Ω, I_g = 2 mA = 0.002 A, I = 5 A\nI - I_g = 5 - 0.002 = 4.998 A\nS = (0.002 A × 50 Ω) / 4.998 A = 0.1 / 4.998 ≈ 0.0200 Ω (or S ≈ 0.02 Ω).\nA low shunt resistance of 0.02 Ω must be connected in PARALLEL with the galvanometer.',
        stepMarking: [
          { step: '(i) Radial field keeps plane parallel to B (sin 90° = 1), yielding linear scale φ ∝ I', marks: '1 Mark' },
          { step: '(ii) Mentioning any two valid factors: increasing N, B, A or decreasing k', marks: '1 Mark' },
          { step: '(iii) Shunt formula S = I_g G / (I - I_g) and numerical result S = 0.02 Ω in parallel', marks: '2 Marks' }
        ],
        examinerTip: 'An ammeter is made by connecting a LOW resistance in PARALLEL (Shunt). A voltmeter is made by connecting a HIGH resistance in SERIES.',
        commonPitfall: 'Connecting the shunt in series or using 2 A instead of 2 mA (0.002 A).'
      },
      {
        id: 'c12-phy-24-q30',
        qNum: 30,
        section: 'D',
        marks: 4,
        topic: 'Wave Optics: Single Slit Diffraction Case Study',
        questionText: 'Read the following passage and answer the questions:\nWhen parallel rays of monochromatic light of wavelength λ pass through a single narrow slit of width \'a\', diffraction occurs. On a screen placed at distance D, an alternating pattern of bright and dark fringes is observed. Unlike interference fringes which have equal width and intensity, the diffraction pattern features a central maximum of double width and maximum intensity, flanked by secondary maxima whose intensities rapidly diminish with order.\n\n(i) State the condition for the nth minimum in a single slit diffraction pattern. (1 Mark)\n(ii) What is the angular width and linear width of the central maximum? (1 Mark)\n(iii) Light of wavelength 500 nm falls perpendicularly on a slit of width 0.2 mm. Find the linear width of the central maximum on a screen placed 1.6 m away. (2 Marks)',
        modelAnswer: '(i) Condition for nth minimum:\na sinθ_n = n λ (n = 1, 2, 3...)\nFor small angles: θ_n ≈ n λ / a.\n\n(ii) Widths of Central Maximum:\n- Angular Width: 2 θ₁ = 2 λ / a\n- Linear Width: β₀ = 2 · (λ D / a) = (2 λ D) / a (which is exactly twice the width of secondary fringes).\n\n(iii) Calculation:\nGiven: λ = 500 nm = 500 × 10⁻⁹ m, a = 0.2 mm = 0.2 × 10⁻³ m, D = 1.6 m\nLinear width of central maximum:\nβ₀ = (2 · λ · D) / a\nβ₀ = (2 × 500 × 10⁻⁹ × 1.6) / (0.2 × 10⁻³)\nβ₀ = (1.6 × 10⁻⁶) / (0.2 × 10⁻³) = 8 × 10⁻³ m = 8.0 mm.',
        stepMarking: [
          { step: '(i) Condition for nth minimum: a sinθ = nλ', marks: '1 Mark' },
          { step: '(ii) Angular width = 2λ/a and linear width = 2λD/a', marks: '1 Mark' },
          { step: '(iii) Correct numerical evaluation yielding linear width = 8.0 mm', marks: '2 Marks' }
        ],
        examinerTip: 'Examiner Trap: In interference, nλ corresponds to bright fringes. In diffraction, a sinθ = nλ corresponds to DARK fringes (minima)!',
        commonPitfall: 'Forgetting the factor of 2 for the CENTRAL maximum width (calculating λD/a = 4 mm instead of 2λD/a = 8 mm).'
      },

      // ─── SECTION E: LONG ANSWER QUESTIONS (Q31 to Q33 - 5 Marks Each) ───
      {
        id: 'c12-phy-24-q31',
        qNum: 31,
        section: 'E',
        marks: 5,
        topic: 'Electrostatics: Electric Dipole Potential & Torque',
        questionText: '(a) Derive an expression for the electric potential at any point (r, θ) due to an electric dipole of moment p, where r >> a.\n(b) Hence, deduce the electric potential at:\n    (i) An axial point\n    (ii) An equatorial point\n(c) An electric dipole of length 4 cm is placed with its axis making an angle of 60° with a uniform electric field of 4 × 10⁴ N/C. If it experiences a torque of 4 √3 N·m, calculate the magnitude of charge on the dipole.',
        modelAnswer: '(a) Potential due to Short Dipole:\nConsider a dipole of charges -q and +q separated by distance 2a. Dipole moment p = q(2a).\nLet P be a point at distance r from dipole centre O, making angle θ with dipole axis.\nDistance from +q is r₁ ≈ r - a cosθ; Distance from -q is r₂ ≈ r + a cosθ.\nNet potential V = V₁ + V₂ = [ 1 / (4πε₀) ] · [ q / r₁ - q / r₂ ]\nV = [ q / (4πε₀) ] · [ 1 / (r - a cosθ) - 1 / (r + a cosθ) ]\nV = [ q / (4πε₀) ] · [ (2 a cosθ) / (r² - a² cos²θ) ]\nSince r >> a, neglect a² cos²θ compared to r²:\nV = [ 1 / (4πε₀) ] · [ (p cosθ) / r² ].\n\n(b) Special Cases:\n(i) Axial Point (θ = 0° or 180°): V_axial = ± [ 1 / (4πε₀) ] · (p / r²).\n(ii) Equatorial Point (θ = 90°, cos90° = 0): V_equatorial = 0.\n\n(c) Numerical Calculation:\nTorque τ = p E sinθ = (q · 2a) · E sinθ\nGiven: τ = 4 √3 N·m, 2a = 4 cm = 0.04 m, E = 4 × 10⁴ N/C, θ = 60° (sin 60° = √3 / 2)\n4 √3 = q × (0.04) × (4 × 10⁴) × (√3 / 2)\n4 √3 = q × (1600) × (√3 / 2) = q × 800 √3\nDivide both sides by √3:\n4 = 800 q => q = 4 / 800 = 1 / 200 = 0.005 C = 5 mC.\nThe magnitude of charge on the dipole is 5 mC (5 × 10⁻³ C).',
        stepMarking: [
          { step: '(a) Geometric setup and derivation of general potential V = [1/(4πε₀)] · [p cosθ / r²]', marks: '2.5 Marks' },
          { step: '(b) Correct axial (±p/4πε₀r²) and equatorial (0) expressions', marks: '1 Mark' },
          { step: '(c) Numerical substitution in τ = q(2a)E sinθ and result q = 5 × 10⁻³ C', marks: '1.5 Marks' }
        ],
        examinerTip: 'Dipole potential drops as 1/r² (V ∝ 1/r²), whereas point charge potential drops as 1/r.',
        commonPitfall: 'Using dipole half-length a = 4 cm instead of 2a = 4 cm (the problem says "dipole of length 4 cm", meaning 2a = 4 cm).'
      },
      {
        id: 'c12-phy-24-q32',
        qNum: 32,
        section: 'E',
        marks: 5,
        topic: 'Ray Optics: Astronomical Telescope & Optical Instruments',
        questionText: '(a) Draw a neat, labelled ray diagram showing image formation by an astronomical refracting telescope in normal adjustment.\n(b) Define its magnifying power and derive the expression for magnifying power m and tube length L in normal adjustment.\n(c) State two significant advantages of a reflecting telescope (Cassegrain) over a refracting telescope.',
        modelAnswer: '(a) Ray Diagram:\nParallel rays from an astronomical object at infinity enter the objective lens (large aperture, long focal length f_o) and converge at its second principal focus F_o to form a real, inverted, diminished image A\'B\'.\nIn normal adjustment, image A\'B\' lies at the first principal focus F_e of the eyepiece (small aperture, short focal length f_e).\nThe eyepiece acts as a simple magnifier, producing a final virtual, inverted image at infinity (parallel emerging rays).\n\n(b) Derivation of Magnifying Power & Tube Length:\nMagnifying power m is the ratio of angle subtended by final image at the eye (β) to angle subtended by object at unaided eye (α): m = β / α.\nFor small angles: α ≈ tanα = A\'B\' / f_o ; β ≈ tanβ = -A\'B\' / f_e\nm = β / α = [ -A\'B\' / f_e ] / [ A\'B\' / f_o ] = - f_o / f_e.\nTube Length in normal adjustment:\nDistance between objective and eyepiece: L = f_o + f_e.\n\n(c) Two Advantages of Reflecting Telescope:\n1. Free from Chromatic Aberration: Mirrors reflect all wavelengths identically, completely eliminating chromatic distortion present in glass lenses.\n2. Minimal Spherical Aberration & High Aperture: Parabolic primary mirrors eliminate spherical aberration and can be made very large (several metres diameter) with mechanical support from the back, achieving high light-gathering power.',
        stepMarking: [
          { step: '(a) Ray diagram showing parallel incident rays, intermediate focus F_o/F_e, and parallel exit rays', marks: '2 Marks' },
          { step: '(b) Derivation of magnifying power m = -f_o / f_e and tube length L = f_o + f_e', marks: '1.5 Marks' },
          { step: '(c) Stating two distinct advantages (no chromatic aberration, mechanical support/large aperture)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Normal adjustment means final image is at INFINITY (relaxed eye). Least distance of distinct vision adjustment means final image is at D = 25 cm (m = -f_o/f_e [1 + f_e/D]).',
        commonPitfall: 'Confusing normal adjustment (image at infinity) with image at D = 25 cm.'
      },
      {
        id: 'c12-phy-24-q33',
        qNum: 33,
        section: 'E',
        marks: 5,
        topic: 'Electromagnetic Induction: AC Generator Derivation',
        questionText: '(a) State the working principle of an AC Generator. Draw a neat, labelled schematic diagram of an AC generator showing armature coil, magnetic poles, slip rings, and carbon brushes.\n(b) Derive an expression for the instantaneous induced electromotive force (EMF) and induced current in a rectangular coil of N turns and area A rotating with uniform angular frequency ω in a uniform magnetic field B.\n(c) An AC generator coil has 100 turns of cross-sectional area 0.1 m² and is rotated at 600 rpm in a uniform magnetic field of 0.2 T. Calculate the maximum induced EMF generated.',
        modelAnswer: '(a) Working Principle:\nAn AC generator operates on the principle of Faraday\'s Law of Electromagnetic Induction: When a closed conducting coil is rotated in a uniform magnetic field, the magnetic flux linked with the coil changes continuously, inducing an alternating electromotive force and alternating current.\n\n(b) Derivation of Instantaneous EMF:\nLet a coil of N turns and area A rotate with uniform angular velocity ω in magnetic field B.\nAt time t, angle between area vector A and magnetic field B is θ = ω t.\nMagnetic flux linked with the coil at time t:\nΦ = N (B · A) = N B A cos(ω t)\n\nAccording to Faraday\'s Law of Induction, instantaneous induced EMF is:\ne = - dΦ/dt = - d/dt [ N B A cos(ω t) ]\ne = - N B A · [ -ω sin(ω t) ]\ne = N B A ω · sin(ω t)\nLet peak EMF be e₀ = N B A ω:\ne = e₀ · sin(ω t).\n\nIf the circuit has total resistance R, instantaneous induced current is:\ni = e / R = (e₀ / R) · sin(ω t) = i₀ · sin(ω t).\n\n(c) Numerical Calculation of Peak EMF:\nGiven: N = 100 turns, A = 0.1 m², B = 0.2 T\nRotational speed ν = 600 rpm = 600 / 60 rps = 10 rev/s\nAngular frequency ω = 2π ν = 2π × 10 = 20π rad/s ≈ 62.83 rad/s.\nPeak Induced EMF:\ne₀ = N · B · A · ω\ne₀ = 100 × 0.2 T × 0.1 m² × (20π rad/s)\ne₀ = 2 × 20π = 40π Volts ≈ 40 × 3.1416 = 125.66 Volts.\nThe maximum (peak) induced EMF is 40π V ≈ 125.7 V.',
        stepMarking: [
          { step: '(a) Principle and labelled schematic diagram (armature, slip rings, brushes, poles)', marks: '1.5 Marks' },
          { step: '(b) Derivation of flux Φ = NBA cos(ωt) and induced EMF e = NBAω sin(ωt)', marks: '2 Marks' },
          { step: '(c) Angular frequency ω = 20π rad/s and peak EMF calculation e₀ = 125.7 V', marks: '1.5 Marks' }
        ],
        examinerTip: 'Slip rings preserve the alternating polarity producing AC. Commutator split rings would convert it into pulsating DC.',
        commonPitfall: 'Using rotational speed in rpm (600) directly in the formula without dividing by 60 to convert to rev/sec and multiplying by 2π to get rad/s.'
      }
    ]
  }
];
