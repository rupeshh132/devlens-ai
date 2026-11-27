import type { PyqPaper } from '../../../../components/learn/PyqPaperViewerModal';

export const CLASS_12_PHY_BATCH1_PAPERS: PyqPaper[] = [
  {
    "id": "cbse-c12-phy-2024-sqp",
    "title": "CBSE Class 12 Physics Official Sample Question Paper (2024-25)",
    "subject": "Physics",
    "targetClass": "Class 12",
    "year": 2024,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "SQP-2024-25/042",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": true,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-phy-2024-sqp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Electric Charges & Fields: Gauss Law Flux",
        "questionText": "A point charge +q is placed at a distance d/2 directly above the centre of a square of side d. What is the total electric flux passing through the square?",
        "options": [
          "A) q / ε₀",
          "B) q / (2ε₀)",
          "C) q / (6ε₀)",
          "D) q / (4ε₀)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Imagine constructing a symmetric cube of side d enclosing +q at its exact centre; the given square forms one of the 6 identical faces. By Gauss's law, flux through 1 face = q / (6ε₀).",
        "stepMarking": [
          {
            "step": "Construct symmetric enclosing cube -> 1/6 of total flux q/ε₀",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetry to close open surfaces into cubes, spheres, or cylinders for Gauss's law MCQs.",
        "commonPitfall": "Writing q/ε₀ for a single face."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Electrostatic Potential & Capacitance: Dielectric Insertion",
        "questionText": "A parallel-plate capacitor is charged by a battery and then disconnected. A dielectric slab of dielectric constant K is now inserted to fill the gap completely. Which statement is TRUE?",
        "options": [
          "A) Charge decreases K times",
          "B) Potential difference and Energy stored both decrease K times",
          "C) Capacitance decreases K times",
          "D) Electric field increases K times"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Once disconnected, charge Q stays constant. Capacitance increases K times (C' = KC), so V' = Q/C' = V/K and energy U' = Q²/(2C') = U/K both decrease K times.",
        "stepMarking": [
          {
            "step": "Disconnected => Q const, C'=KC => V'=V/K and U'=U/K",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish \"Battery Disconnected\" (Q constant) from \"Battery Connected\" (V constant, U increases K times)!",
        "commonPitfall": "Confusing Q-constant vs V-constant capacitor cases."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Mobility & Drift Velocity",
        "questionText": "Two wires of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. Connected in series to a battery, the ratio of drift velocities of electrons in them is:",
        "options": [
          "A) 1 : 4",
          "B) 4 : 1",
          "C) 1 : 2",
          "D) 2 : 1"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In series, current I is same. I = n e A v_d => v_d ∝ 1/A ∝ 1/r². Thus v_d1 / v_d2 = (r₂ / r₁)² = (1 / 2)² = 1 : 4.",
        "stepMarking": [
          {
            "step": "Series same I => v_d ∝ 1/r² => (1/2)² = 1:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, drift speed depends ONLY on cross-sectional area (independent of wire length!).",
        "commonPitfall": "Including length ratio in v_d comparison."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Moving Charges & Magnetism: Lorentz Force Trajectory",
        "questionText": "A proton and an alpha-particle (both accelerated through the same potential difference V) enter a uniform perpendicular magnetic field B. The ratio of radii of their circular paths (r_p : r_α) is:",
        "options": [
          "A) 1 : 2",
          "B) 1 : √2",
          "C) √2 : 1",
          "D) 2 : 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radius r = mv/(qB) = √(2mK)/(qB) = √(2mqV)/(qB) = (1/B)√(2mV/q). Since m_α = 4m_p and q_α = 2q_p, r_p / r_α = √[(m_p/q_p)/(4m_p/2q_p)] = √(1/2) = 1 : √2.",
        "stepMarking": [
          {
            "step": "Use r ∝ √(m/q) for same V -> 1 : √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Same speed -> r ∝ m/q; Same momentum -> r ∝ 1/q; Same V -> r ∝ √(m/q)!",
        "commonPitfall": "Using r ∝ m/q (which holds for equal velocity, not equal accelerating potential)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Magnetism & Matter: Diamagnetic vs Ferromagnetic Susceptibility",
        "questionText": "For a diamagnetic material, the magnetic susceptibility χ and relative permeability μ_r satisfy:",
        "options": [
          "A) χ > 0, μ_r > 1",
          "B) -1 ≤ χ < 0, 0 ≤ μ_r < 1",
          "C) χ ≫ 1, μ_r ≫ 1",
          "D) χ = 0, μ_r = 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diamagnetic substances are feebly repelled by magnets: -1 ≤ χ < 0 and 0 ≤ μ_r = 1 + χ < 1 (for superconductors, χ = -1 and μ_r = 0).",
        "stepMarking": [
          {
            "step": "Small negative χ (-1 ≤ χ < 0) and 0 ≤ μ_r < 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Diamagnetic susceptibility is independent of temperature (except Bi/superconductors).",
        "commonPitfall": "Saying χ is positive for diamagnets."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Induction: Lenz Law & Mutual Inductance",
        "questionText": "Lenz's law is a direct consequence of the law of conservation of:",
        "options": [
          "A) Charge",
          "B) Linear momentum",
          "C) Energy",
          "D) Angular momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Induced current always opposes the cause producing it, so mechanical work must be done against this opposition to produce electrical energy, conserving total energy.",
        "stepMarking": [
          {
            "step": "Identify Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State mechanical work converted into Joule/electrical energy if asked in 2M.",
        "commonPitfall": "Marking conservation of charge."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Alternating Current: Power Factor at LCR Resonance",
        "questionText": "In a series LCR circuit at resonance (X_L = X_C), the phase difference between applied voltage and current, and the power factor cos φ are respectively:",
        "options": [
          "A) π/2 and 0",
          "B) 0 and 1",
          "C) π/4 and 1/√2",
          "D) π and -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At resonance X_L = X_C, so impedance Z = R (purely resistive), phase angle φ = 0°, and power factor cos φ = R/Z = 1.",
        "stepMarking": [
          {
            "step": "At resonance Z = R -> φ = 0, cos φ = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "At resonance, current is MAXIMUM (I = V/R) and power dissipated is maximum.",
        "commonPitfall": "Confusing resonant power factor (1) with wattless current circuit (cos φ = 0)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Waves: Displacement Current & Wave Vector",
        "questionText": "In a plane electromagnetic wave, the electric field oscillates along the +y axis and the wave propagates along the +x axis. The direction of the magnetic field oscillation is along:",
        "options": [
          "A) +x axis",
          "B) +y axis",
          "C) +z axis",
          "D) -y axis"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Propagation direction is along E × B. Since E is along +j and propagation is along +i, (+j) × (+k) = +i, so B must be along +k (+z axis).",
        "stepMarking": [
          {
            "step": "Check right-hand cross product E × B = +j × (+k) = +i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always test right-hand rule E × B = propagation vector c.",
        "commonPitfall": "Picking -z axis without verifying j × k = +i."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Ray Optics: Total Internal Reflection & Critical Angle",
        "questionText": "For total internal reflection to occur when light travels from glass (n = 1.5) to air, the angle of incidence in glass must be:",
        "options": [
          "A) Equal to 90°",
          "B) Greater than the critical angle (~41.8°)",
          "C) Less than the critical angle",
          "D) Equal to 0°"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Light must travel from denser (glass) to rarer (air) medium at i > i_c, where sin i_c = 1/1.5 = 2/3 => i_c ≈ 41.8°.",
        "stepMarking": [
          {
            "step": "Denser to rarer + i > i_c ≈ 41.8°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note BOTH necessary conditions for TIR: (1) Denser -> Rarer, (2) i > i_c.",
        "commonPitfall": "Forgetting denser-to-rarer medium requirement."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: YDSE Fringe Width Scaling",
        "questionText": "In Young's double slit experiment, if slit separation d is halved and distance to screen D is doubled, the fringe width β becomes:",
        "options": [
          "A) Unchanged",
          "B) Doubled",
          "C) 4 times",
          "D) 1/4 times"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. β = λD / d. With D' = 2D and d' = d/2, β' = λ(2D)/(d/2) = 4 (λD/d) = 4β.",
        "stepMarking": [
          {
            "step": "β = λD/d -> (2) / (1/2) = 4 times",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember: immersing entire YDSE in water (refractive index n) shrinks β to β/n.",
        "commonPitfall": "Dividing by 2 instead of multiplying by 2 when d is halved."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Dual Nature of Radiation: Stopping Potential & Frequency",
        "questionText": "In photoelectric effect, if the intensity of incident light (above threshold frequency) is doubled while keeping frequency constant, the stopping potential V₀:",
        "options": [
          "A) Doubles",
          "B) Halves",
          "C) Increases fourfold",
          "D) Remains unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Maximum KE and stopping potential (eV₀ = hν - φ₀) depend ONLY on frequency ν and work function φ₀, independent of intensity (which doubles photocurrent instead).",
        "stepMarking": [
          {
            "step": "Stopping potential depends on frequency, NOT intensity -> unchanged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Intensity -> Photocurrent; Frequency -> Stopping Potential / K_max.",
        "commonPitfall": "Thinking higher intensity gives higher K_max."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductor Electronics: Intrinsic vs p-n Junction Barrier",
        "questionText": "When a p-n junction diode is forward biased, the width of the depletion layer and the barrier height:",
        "options": [
          "A) Both increase",
          "B) Both decrease",
          "C) Width increases, height decreases",
          "D) Remain unaffected"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Applied forward voltage V opposes the built-in potential V₀, reducing effective barrier height to (V₀ - V) and shrinking depletion layer width.",
        "stepMarking": [
          {
            "step": "Forward bias opposes built-in field -> both width & barrier decrease",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reverse bias does the exact opposite (increases both depletion width and barrier height).",
        "commonPitfall": "Thinking forward bias widens the depletion region."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Internal Resistance & Terminal Voltage",
        "questionText": "Assertion (A): During charging of a secondary cell, the terminal potential difference across it exceeds its EMF (V > E).\nReason (R): While charging, current enters the positive terminal of the cell, so V = E + Ir.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. While discharging V = E - Ir (< E), whereas while charging current flows against EMF so V = E + Ir (> E).",
        "stepMarking": [
          {
            "step": "Option (A) citing V = E + Ir during charging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Discharging: V = E - Ir; Open circuit: V = E; Charging: V = E + Ir.",
        "commonPitfall": "Assuming V is always less than E."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: Coherent Sources Necessity",
        "questionText": "Assertion (A): Two independent identical sodium lamps cannot produce a sustained interference pattern.\nReason (R): Independent light sources emit wave trains with rapidly and randomly varying phase differences, making them incoherent.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Sustained interference requires a constant phase difference (coherence), achievable only when both interfering waves originate from the same parent source.",
        "stepMarking": [
          {
            "step": "Option (A) citing random phase variation of independent sources",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Key term: \"constant phase difference over time\".",
        "commonPitfall": "Thinking matching frequency alone ensures coherence."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Atoms: Bohr Radius & Energy Proportionality",
        "questionText": "Assertion (A): The total energy of an electron in the nth stationary orbit of hydrogen atom is negative.\nReason (R): Negative total energy indicates that the electron is bound to the nucleus by electrostatic attraction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Eₙ = -13.6/n² eV; negative sign signifies the bound state (positive work must be supplied to free the electron to E = 0).",
        "stepMarking": [
          {
            "step": "Option (A) explaining bound system energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice KE = -E = +13.6/n² eV (positive!) and PE = 2E = -27.2/n² eV.",
        "commonPitfall": "Thinking negative energy violates conservation."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductors: Temperature Effect on Resistivity",
        "questionText": "Assertion (A): Electrical conductivity of an intrinsic semiconductor increases rapidly with rise in temperature.\nReason (R): Rising temperature breaks covalent bonds, increasing charge-carrier concentration (n_e and n_h) exponentially, which outweighs decrease in relaxation time.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In semiconductors, exponential growth in carrier density n dominates over τ decrease, giving negative temperature coefficient of resistivity (α < 0).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting carrier surge vs τ drop",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Metals have α > 0 (ρ rises with T); Semiconductors have α < 0 (ρ drops with T).",
        "commonPitfall": "Applying metallic resistance reasoning to semiconductors."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Electrostatic Potential: Equipotential Surfaces Properties",
        "questionText": "Draw equipotential surfaces for (i) an isolated positive point charge and (ii) a uniform electric field along the +x axis. Why can two equipotential surfaces never intersect?",
        "modelAnswer": "(i) Concentric spherical shells centred on +q (spacing increases outward since E decreases).\n(ii) Parallel planes perpendicular to x-axis (parallel to YZ-plane) equally spaced.\nNon-intersection: If two equipotential surfaces intersected, there would be two different values of electric potential (and two normal field directions) at the point of intersection, which is impossible.",
        "stepMarking": [
          {
            "step": "Spherical & parallel planar equipotentials described",
            "marks": "1 Mark"
          },
          {
            "step": "Contradiction of two potentials/directions at intersection",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember spacing between equipotentials Δr ∝ 1/E: closer surfaces mean stronger electric field!",
        "commonPitfall": "Drawing equally spaced circles for a point charge."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Current Electricity: Kirchhoff Rules & Wheatstone Bridge",
        "questionText": "State Kirchhoff's Junction Rule and Loop Rule along with the physical conservation laws they represent.",
        "modelAnswer": "1. Junction Rule (KCL): At any circuit junction, algebraic sum of currents meeting is zero (ΣI = 0). Based on Conservation of Charge.\n2. Loop Rule (KVL): Around any closed circuit loop, algebraic sum of potential changes across resistors and EMFs is zero (ΣΔV = 0). Based on Conservation of Energy.",
        "stepMarking": [
          {
            "step": "Junction rule + Conservation of Charge",
            "marks": "1 Mark"
          },
          {
            "step": "Loop rule + Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state the underlying conservation principle cleanly.",
        "commonPitfall": "Mixing up charge conservation and energy conservation."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Magnetism: Moving Coil Galvanometer to Ammeter Conversion",
        "questionText": "A galvanometer of coil resistance 15 Ω shows full-scale deflection for a current of 4 mA. How will you convert it into an ammeter of range 0 to 6 A?",
        "modelAnswer": "Connect a low-resistance shunt S in PARALLEL with the galvanometer.\nS = (I_g · G) / (I - I_g) = (0.004 × 15) / (6 - 0.004) = 0.06 / 5.996 ≈ 0.01 Ω (or 10 mΩ).",
        "stepMarking": [
          {
            "step": "Parallel shunt formula S = Ig·G/(I - Ig)",
            "marks": "1 Mark"
          },
          {
            "step": "Correct value S = 0.01 Ω in parallel",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ammeter = low shunt in PARALLEL; Voltmeter = high resistor in SERIES.",
        "commonPitfall": "Connecting shunt in series or ignoring mA to A conversion."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Dual Nature: De Broglie Wavelength of Accelerated Electron",
        "questionText": "Find the ratio of de Broglie wavelengths associated with an electron and an alpha-particle when both are accelerated from rest through the same potential difference V.",
        "modelAnswer": "λ = h / √(2 m q V).\nFor same V: λ_e / λ_α = √[(m_α · q_α) / (m_e · q_e)].\nSince m_α ≈ 4 × 1836 m_e and q_α = 2 e, λ_e / λ_α = √(8 × 1836) ≈ 121.2 : 1 (much larger for electron due to tiny mass).",
        "stepMarking": [
          {
            "step": "Formula λ = h/√(2mqV)",
            "marks": "1 Mark"
          },
          {
            "step": "Ratio expression √(m_α q_α / m_e q_e)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For electron only: λ (in Å) ≈ 12.27 / √V.",
        "commonPitfall": "Using λ ∝ √(q/m) instead of 1/√(mq)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Semiconductors: Half-Wave vs Full-Wave Rectifier",
        "questionText": "Draw the output waveform of a full-wave rectifier for a sinusoidal AC input of 50 Hz, and state the fundamental ripple frequency of its pulsating DC output.",
        "modelAnswer": "Full-wave rectifier converts both positive and negative half cycles of AC input into unidirectional positive pulses.\nSince two output pulses occur per input AC cycle, output ripple frequency = 2 × 50 Hz = 100 Hz.",
        "stepMarking": [
          {
            "step": "Both half-cycles rectified positive waveform",
            "marks": "1 Mark"
          },
          {
            "step": "Output frequency = 2 × 50 = 100 Hz",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Half-wave output frequency = f (50 Hz); Full-wave output frequency = 2f (100 Hz).",
        "commonPitfall": "Writing 50 Hz for full-wave rectifier."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Electrostatics: Electric Field on Equatorial Line of a Dipole",
        "questionText": "Derive an expression for the electric field intensity at a point on the equatorial plane (perpendicular bisector) of an electric dipole of dipole moment p = 2aq. What is the angle between E and p?",
        "modelAnswer": "Consider point P at distance r from centre O on equatorial line. Distance to +q and -q is √(r² + a²).\nMagnitudes: E₊ = E₋ = kq / (r² + a²).\nVertical components E₊sinθ and E₋sinθ are equal and opposite -> cancel out.\nHorizontal components add opposite to p: E_eq = 2 E₊ cosθ = [2kq / (r² + a²)] × [a / √(r² + a²)] = kp / (r² + a²)^(3/2).\nFor short dipole (r ≫ a): E_eq = p / (4πε₀ r³) directed OPPOSITE to p (angle = 180°).",
        "stepMarking": [
          {
            "step": "Vertical components cancel, horizontal add -> 2E₊cosθ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact & short-dipole result p/(4πε₀r³)",
            "marks": "1 Mark"
          },
          {
            "step": "Angle between E_eq and p = 180°",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Ratio check: E_axial / E_equatorial = 2 : 1 for short dipole at equal distance r!",
        "commonPitfall": "Writing angle 0° (axial) instead of 180° (equatorial)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Current Electricity: Cells in Parallel Equivalent EMF & Internal Resistance",
        "questionText": "Two cells of EMFs E₁, E₂ and internal resistances r₁, r₂ are connected in parallel. Derive expressions for equivalent EMF (E_eq) and equivalent internal resistance (r_eq).",
        "modelAnswer": "Total current I = I₁ + I₂, with terminal voltage V identical across both cells:\nI₁ = (E₁ - V)/r₁ and I₂ = (E₂ - V)/r₂.\nI = (E₁/r₁ + E₂/r₂) - V(1/r₁ + 1/r₂).\nRearranging for V = E_eq - I r_eq:\n1/r_eq = 1/r₁ + 1/r₂ => r_eq = (r₁r₂)/(r₁ + r₂),\nE_eq / r_eq = E₁/r₁ + E₂/r₂ => E_eq = (E₁r₂ + E₂r₁) / (r₁ + r₂).",
        "stepMarking": [
          {
            "step": "Set I = I₁ + I₂ with shared V",
            "marks": "1 Mark"
          },
          {
            "step": "Derive 1/r_eq = 1/r₁ + 1/r₂",
            "marks": "1 Mark"
          },
          {
            "step": "Derive E_eq = (E₁r₂ + E₂r₁)/(r₁ + r₂)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Symmetrical form E_eq/r_eq = E₁/r₁ + E₂/r₂ is easiest to verify!",
        "commonPitfall": "Adding internal resistances in series inside E_eq denominator incorrectly."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Moving Charges & Magnetism: Biot-Savart Magnetic Field on Loop Axis",
        "questionText": "Using Biot-Savart law, derive the expression for magnetic field at an axial point x from the centre of a circular loop of radius R carrying current I.",
        "modelAnswer": "Consider current element dl at top of loop; distance to axial point P is r = √(R² + x²), with dl ⊥ r.\ndB = (μ₀ I dl) / (4π (R² + x²)).\nSymmetry: perpendicular components dB cosθ cancel; axial components dB sinθ (where sinθ = R / √(R² + x²)) sum over circumference 2πR:\nB = ∫ dB sinθ = [μ₀ I R / (4π (R² + x²)^(3/2))] × (2πR) = μ₀ I R² / [2 (R² + x²)^(3/2)] directed along loop axis.",
        "stepMarking": [
          {
            "step": "Biot-Savart dB element + perpendicular components cancel",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate axial component dB sinθ over 2πR -> final formula",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check special case x = 0: reduces cleanly to B_centre = μ₀I / (2R)!",
        "commonPitfall": "Using cosθ instead of sinθ for axial component without matching angle θ definition."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Electromagnetic Induction: Motional EMF & Faraday's Laws",
        "questionText": "Derive the expression for motional EMF induced across the ends of a straight conductor of length l moving with uniform velocity v perpendicular to a uniform magnetic field B. Hence find power dissipated if connected to resistance R.",
        "modelAnswer": "Consider rectangular loop PQRS with movable arm PQ of length l moving outward at speed v. Area increases at dA/dt = l dx/dt = l v.\nMagnetic flux Φ_B = B · A = B l x.\nBy Faraday's law, magnitude of induced EMF: e = |dΦ_B/dt| = B l (dx/dt) = B l v.\n(Alternative via Lorentz force: qvB = qE = q(e/l) => e = B l v.)\nCurrent I = B l v / R; Mechanical Force needed F = I l B = B²l²v / R; Power = F v = I² R = B²l²v² / R.",
        "stepMarking": [
          {
            "step": "Derive e = B l v via flux or Lorentz force",
            "marks": "2 Marks"
          },
          {
            "step": "Current I = Blv/R and Power P = B²l²v²/R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both Faraday flux method and Lorentz force method earn full marks.",
        "commonPitfall": "Forgetting B, l, v must be mutually perpendicular for full Blv."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Ray Optics: Lens Maker's Formula Derivation",
        "questionText": "Derive the Lens Maker's formula 1/f = (n - 1)(1/R₁ - 1/R₂) for a thin convex lens of refractive index n placed in air.",
        "modelAnswer": "First spherical surface (radius R₁, air -> glass): n/v₁ - 1/u = (n - 1)/R₁ ...(1)\nSecond spherical surface (radius R₂, glass -> air, virtual object v₁): 1/v - n/v₁ = (1 - n)/R₂ ...(2)\nAdding (1) and (2) cancels n/v₁:\n1/v - 1/u = (n - 1)(1/R₁ - 1/R₂).\nFor u = ∞, v = f => 1/f = (n - 1)(1/R₁ - 1/R₂).",
        "stepMarking": [
          {
            "step": "Refraction equation at first surface",
            "marks": "1 Mark"
          },
          {
            "step": "Refraction at second surface (n₁=n, n₂=1)",
            "marks": "1 Mark"
          },
          {
            "step": "Add equations & set u=∞, v=f",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the thin-lens assumption (negligible thickness) before using v₁ directly in Eq(2)!",
        "commonPitfall": "Forgetting sign reversal (1 - n)/R₂ at the second interface."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Atoms: Bohr Radius & Hydrogen Energy Levels",
        "questionText": "Using Bohr's postulates, derive the expression for the radius of the nth stationary orbit and total energy of the electron in a hydrogen atom.",
        "modelAnswer": "1. Electrostatic centripetal balance: m v² / r = k e² / r² => m v² r = k e² ...(1)\n2. Bohr quantisation: m v r = n h / (2π) => v = nh / (2πmr) ...(2)\nSubstituting (2) into (1): rₙ = (n² h²) / (4π² m k e²) = (ε₀ n² h²) / (π m e²) ≈ 0.529 n² Å.\nTotal Energy Eₙ = KE + PE = k e²/(2rₙ) - k e²/rₙ = -k e² / (2rₙ) = - (m e⁴) / (8 ε₀² h² n²) = -13.6 / n² eV.",
        "stepMarking": [
          {
            "step": "Centripetal + Bohr angular momentum equations",
            "marks": "1 Mark"
          },
          {
            "step": "Derive rₙ ∝ n²",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Eₙ = -13.6/n² eV",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show KE = +ke²/(2r) and PE = -ke²/r explicitly so E = -ke²/(2r) is clear.",
        "commonPitfall": "Writing KE = -PE instead of KE = -PE/2."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Nuclei: Mass Defect, Binding Energy & Fission vs Fusion",
        "questionText": "Define mass defect and nuclear binding energy. Explain why heavy nuclei undergo nuclear fission while very light nuclei undergo nuclear fusion, referring to the Binding Energy per nucleon curve.",
        "modelAnswer": "Mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus.\nBinding Energy BE = Δm · c² (energy required to break nucleus into free nucleons).\n• Heavy nuclei (A > 170, e.g. U-235) have lower BE/nucleon (~7.6 MeV) than medium-mass nuclei (A ~ 56-120, ~8.5 MeV), so splitting into two lighter nuclei increases BE/nucleon and releases ~200 MeV energy.\n• Very light nuclei (A < 20, e.g. ²H) have very low BE/nucleon (~1–2 MeV); fusing into ⁴He (~7.1 MeV/nucleon) moves up the curve steeply, releasing huge energy.",
        "stepMarking": [
          {
            "step": "Mass defect & BE definitions",
            "marks": "1 Mark"
          },
          {
            "step": "Fission explanation via BE/A increase (7.6 -> 8.5 MeV)",
            "marks": "1 Mark"
          },
          {
            "step": "Fusion explanation via BE/A jump (H -> He)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Cite Iron-56 (Fe) peak at ~8.75 MeV/nucleon.",
        "commonPitfall": "Saying binding energy decreases after fission/fusion (total binding energy INCREASES!)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Total Internal Reflection & Optical Fibres (Ray Optics)",
        "questionText": "Read the passage and answer:\nOptical fibres transmit high-bandwidth internet signals over thousands of kilometres via repeated Total Internal Reflection (TIR). Each fibre has a high-refractive-index glass core (n₁ = 1.68) surrounded by cladding of slightly lower refractive index (n₂ = 1.44).\n\n(a) State the two essential conditions for TIR to take place at the core-cladding boundary. (1M)\n(b) Calculate the critical angle (or sin i_c) at the core-cladding interface. (1M)\n(c) Why is cladding essential even though air outside has an even lower refractive index n = 1.0? Give two reasons. (2M)",
        "modelAnswer": "(a) 1. Light must travel from optically denser core (n₁) to optically rarer cladding (n₂).\n2. Angle of incidence at interface must exceed critical angle i_c.\n(b) sin i_c = n₂ / n₁ = 1.44 / 1.68 = 6/7 ≈ 0.857 => i_c = sin⁻¹(6/7) ≈ 59°.\n(c) 1. Cladding protects the delicate core surface from scratches, dust, and moisture that would ruin TIR.\n2. It prevents signal cross-talk between adjacent bundled fibres and restricts steep high-order modes so pulse dispersion is minimised.",
        "stepMarking": [
          {
            "step": "(a) Two TIR conditions",
            "marks": "1 Mark"
          },
          {
            "step": "(b) sin i_c = 1.44/1.68 = 6/7",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Physical protection + cross-talk/dispersion prevention",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never write sin i_c = 1/n₁ when cladding n₂ ≠ 1; always use n₂/n₁!",
        "commonPitfall": "Using air n = 1 instead of cladding n₂ = 1.44 in critical angle calculation."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Photoelectric Effect & Einstein's Equation",
        "questionText": "Read the passage and answer:\nWhen monochromatic light of wavelength 331 nm falls on a clean metal surface with work function φ₀ = 2.0 eV, photoelectrons are emitted (take h = 6.62 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J).\n\n(a) Calculate the energy of each incident photon in electron-volts (eV). (1.5M)\n(b) Find the maximum kinetic energy (in eV) of emitted photoelectrons and the stopping potential V₀. (1.5M)\n(c) Draw the variation of stopping potential V₀ vs incident frequency ν for two metals A and B (φ_A > φ_B). (1M)",
        "modelAnswer": "(a) E = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸) / (331 × 10⁻⁹) = 6 × 10⁻¹⁹ J.\nIn eV: E = 6 × 10⁻¹⁹ / (1.6 × 10⁻¹⁹) = 3.75 eV.\n(b) K_max = E - φ₀ = 3.75 - 2.0 = 1.75 eV. Hence stopping potential V₀ = 1.75 V.\n(c) Two parallel straight lines with identical slope h/e and higher x-intercept (threshold frequency ν₀) for metal A.",
        "stepMarking": [
          {
            "step": "(a) E = 3.75 eV",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) K_max = 1.75 eV & V₀ = 1.75 V",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Parallel lines of equal slope h/e",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Shortcut check: hc ≈ 1240 eV·nm => 1240 / 331 ≈ 3.75 eV!",
        "commonPitfall": "Drawing diverging lines for metals A and B (slope h/e is universal!)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Current Electricity: Wheatstone Bridge Balance Condition & Numerical",
        "questionText": "(a) Draw a circuit diagram of a balanced Wheatstone bridge and use Kirchhoff's rules to derive its balance condition P/Q = R/S.\n(b) Why is a Wheatstone bridge NOT suitable for measuring very high or very low resistances accurately?\n(c) Calculate the current drawn from a 6 V battery connected across a balanced bridge with P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω, and galvanometer G = 50 Ω.",
        "modelAnswer": "(a) At balance, I_g = 0 (V_B = V_D), so I₁ = I₃ and I₂ = I₄.\nLoop ABDA: -I₁P + I₂R = 0 => I₁P = I₂R ...(1)\nLoop BCDB: -I₁Q + I₂S = 0 => I₁Q = I₂S ...(2)\nDividing (1) by (2): P / Q = R / S.\n(b) For very low R, connecting lead/contact resistances become significant errors; for very high R, galvanometer current becomes too tiny for sensitive null detection.\n(c) Since 10/20 = 15/30, bridge is balanced -> ignore G = 50 Ω! Upper branch = 10 + 20 = 30 Ω; Lower branch = 15 + 30 = 45 Ω.\nR_eq = (30 × 45)/(30 + 45) = 1350/75 = 18 Ω. Current I = V/R_eq = 6/18 = 1/3 ≈ 0.33 A.",
        "stepMarking": [
          {
            "step": "(a) Circuit + KVL loop derivation of P/Q = R/S",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Contact resistance & sensitivity limitations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Balanced removal of G -> R_eq = 18 Ω, I = 0.33 A",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check P/Q = R/S FIRST in bridge resistor problems before computing I!",
        "commonPitfall": "Including G = 50 Ω in equivalent resistance when bridge is balanced."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "AC Circuits & Transformers: Phasor Diagram, Impedance & Transformer Losses",
        "questionText": "(a) Using a phasor diagram, derive the expression for impedance Z and phase angle φ of a series LCR circuit connected to AC voltage V = V₀ sin ωt.\n(b) Draw a labelled schematic of a step-up transformer and explain four main sources of energy loss in real transformers.",
        "modelAnswer": "(a) In series, current I is same across L, C, R. V_R is in phase with I, V_L leads I by 90°, V_C lags I by 90°.\nResultant voltage V = √[ V_R² + (V_L - V_C)² ] = I √[ R² + (X_L - X_C)² ].\nThus Z = V / I = √[ R² + (X_L - X_C)² ], and tan φ = (X_L - X_C) / R.\n(b) Step-up transformer has N_s > N_p on a laminated soft iron core.\nFour energy losses: (1) Flux leakage (minimize by winding coils over each other), (2) Copper I²R winding heating (use thick copper wire), (3) Eddy currents (use laminated iron sheets), (4) Hysteresis loss (use soft iron core with narrow hysteresis loop).",
        "stepMarking": [
          {
            "step": "(a) Phasor diagram + Z and tan φ derivations",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Step-up schematic + 4 losses & remedies",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Pair each transformer loss with how it is minimised (laminated core -> eddy currents; soft iron -> hysteresis).",
        "commonPitfall": "Confusing eddy current loss (laminated core) with hysteresis loss (soft iron material)."
      },
      {
        "id": "cbse-c12-phy-2024-sqp-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Wave Optics: Huygens Reflection/Refraction & Diffraction Single Slit",
        "questionText": "(a) Using Huygens' wave theory, verify Snell's law of refraction for a plane wavefront moving from rarer (speed v₁) to denser medium (speed v₂).\n(b) Why are diffraction minima formed at a sin θ = nλ in a single slit, whereas YDSE maxima occur at d sin θ = nλ? State one distinction between interference and diffraction fringes.",
        "modelAnswer": "(a) Plane wavefront AB hits boundary XY at A (angle i); wavelets from B reach C at time τ = BC/v₁, while secondary wavelet from A covers AD = v₂τ in denser medium.\nsin i = BC/AC = v₁τ/AC; sin r = AD/AC = v₂τ/AC.\nRatio sin i / sin r = v₁ / v₂ = n₂ / n₁ = constant (Snell's Law).\n(b) For single slit of width a, at a sin θ = λ, the slit splits into two halves differing in path by λ/2, cancelling pairwise destructively (similarly 2n halves for nλ) -> MINIMA! In YDSE, two point sources differing by nλ interfere constructively -> MAXIMA.\nDistinction: Interference fringes are of equal width & equal bright peak intensity; diffraction central maximum is twice as wide with rapidly falling secondary peak intensities.",
        "stepMarking": [
          {
            "step": "(a) Huygens wavefront geometry proving sin i/sin r = v₁/v₂",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Pairwise cancellation in diffraction vs YDSE + fringe contrast",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Remember: Central maximum width in single slit = 2λD/a (double the secondary fringe width λD/a!).",
        "commonPitfall": "Writing a sin θ = nλ as maxima for single slit."
      }
    ]
  },
  {
    "id": "cbse-c12-phy-2023-board",
    "title": "CBSE Class 12 Physics Board Examination 2023 (Set 55/2/1)",
    "subject": "Physics",
    "targetClass": "Class 12",
    "year": 2023,
    "paperType": "BOARD_EXAM",
    "paperCode": "55/2/1",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "CHALLENGING",
    "isFree": true,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-phy-2023-board-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Mobility & Drift Velocity",
        "questionText": "Two wires of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. Connected in series to a battery, the ratio of drift velocities of electrons in them is:",
        "options": [
          "A) 1 : 4",
          "B) 4 : 1",
          "C) 1 : 2",
          "D) 2 : 1"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In series, current I is same. I = n e A v_d => v_d ∝ 1/A ∝ 1/r². Thus v_d1 / v_d2 = (r₂ / r₁)² = (1 / 2)² = 1 : 4.",
        "stepMarking": [
          {
            "step": "Series same I => v_d ∝ 1/r² => (1/2)² = 1:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, drift speed depends ONLY on cross-sectional area (independent of wire length!).",
        "commonPitfall": "Including length ratio in v_d comparison."
      },
      {
        "id": "cbse-c12-phy-2023-board-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Moving Charges & Magnetism: Lorentz Force Trajectory",
        "questionText": "A proton and an alpha-particle (both accelerated through the same potential difference V) enter a uniform perpendicular magnetic field B. The ratio of radii of their circular paths (r_p : r_α) is:",
        "options": [
          "A) 1 : 2",
          "B) 1 : √2",
          "C) √2 : 1",
          "D) 2 : 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radius r = mv/(qB) = √(2mK)/(qB) = √(2mqV)/(qB) = (1/B)√(2mV/q). Since m_α = 4m_p and q_α = 2q_p, r_p / r_α = √[(m_p/q_p)/(4m_p/2q_p)] = √(1/2) = 1 : √2.",
        "stepMarking": [
          {
            "step": "Use r ∝ √(m/q) for same V -> 1 : √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Same speed -> r ∝ m/q; Same momentum -> r ∝ 1/q; Same V -> r ∝ √(m/q)!",
        "commonPitfall": "Using r ∝ m/q (which holds for equal velocity, not equal accelerating potential)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Magnetism & Matter: Diamagnetic vs Ferromagnetic Susceptibility",
        "questionText": "For a diamagnetic material, the magnetic susceptibility χ and relative permeability μ_r satisfy:",
        "options": [
          "A) χ > 0, μ_r > 1",
          "B) -1 ≤ χ < 0, 0 ≤ μ_r < 1",
          "C) χ ≫ 1, μ_r ≫ 1",
          "D) χ = 0, μ_r = 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diamagnetic substances are feebly repelled by magnets: -1 ≤ χ < 0 and 0 ≤ μ_r = 1 + χ < 1 (for superconductors, χ = -1 and μ_r = 0).",
        "stepMarking": [
          {
            "step": "Small negative χ (-1 ≤ χ < 0) and 0 ≤ μ_r < 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Diamagnetic susceptibility is independent of temperature (except Bi/superconductors).",
        "commonPitfall": "Saying χ is positive for diamagnets."
      },
      {
        "id": "cbse-c12-phy-2023-board-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Induction: Lenz Law & Mutual Inductance",
        "questionText": "Lenz's law is a direct consequence of the law of conservation of:",
        "options": [
          "A) Charge",
          "B) Linear momentum",
          "C) Energy",
          "D) Angular momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Induced current always opposes the cause producing it, so mechanical work must be done against this opposition to produce electrical energy, conserving total energy.",
        "stepMarking": [
          {
            "step": "Identify Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State mechanical work converted into Joule/electrical energy if asked in 2M.",
        "commonPitfall": "Marking conservation of charge."
      },
      {
        "id": "cbse-c12-phy-2023-board-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Alternating Current: Power Factor at LCR Resonance",
        "questionText": "In a series LCR circuit at resonance (X_L = X_C), the phase difference between applied voltage and current, and the power factor cos φ are respectively:",
        "options": [
          "A) π/2 and 0",
          "B) 0 and 1",
          "C) π/4 and 1/√2",
          "D) π and -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At resonance X_L = X_C, so impedance Z = R (purely resistive), phase angle φ = 0°, and power factor cos φ = R/Z = 1.",
        "stepMarking": [
          {
            "step": "At resonance Z = R -> φ = 0, cos φ = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "At resonance, current is MAXIMUM (I = V/R) and power dissipated is maximum.",
        "commonPitfall": "Confusing resonant power factor (1) with wattless current circuit (cos φ = 0)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Waves: Displacement Current & Wave Vector",
        "questionText": "In a plane electromagnetic wave, the electric field oscillates along the +y axis and the wave propagates along the +x axis. The direction of the magnetic field oscillation is along:",
        "options": [
          "A) +x axis",
          "B) +y axis",
          "C) +z axis",
          "D) -y axis"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Propagation direction is along E × B. Since E is along +j and propagation is along +i, (+j) × (+k) = +i, so B must be along +k (+z axis).",
        "stepMarking": [
          {
            "step": "Check right-hand cross product E × B = +j × (+k) = +i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always test right-hand rule E × B = propagation vector c.",
        "commonPitfall": "Picking -z axis without verifying j × k = +i."
      },
      {
        "id": "cbse-c12-phy-2023-board-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Ray Optics: Total Internal Reflection & Critical Angle",
        "questionText": "For total internal reflection to occur when light travels from glass (n = 1.5) to air, the angle of incidence in glass must be:",
        "options": [
          "A) Equal to 90°",
          "B) Greater than the critical angle (~41.8°)",
          "C) Less than the critical angle",
          "D) Equal to 0°"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Light must travel from denser (glass) to rarer (air) medium at i > i_c, where sin i_c = 1/1.5 = 2/3 => i_c ≈ 41.8°.",
        "stepMarking": [
          {
            "step": "Denser to rarer + i > i_c ≈ 41.8°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note BOTH necessary conditions for TIR: (1) Denser -> Rarer, (2) i > i_c.",
        "commonPitfall": "Forgetting denser-to-rarer medium requirement."
      },
      {
        "id": "cbse-c12-phy-2023-board-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: YDSE Fringe Width Scaling",
        "questionText": "In Young's double slit experiment, if slit separation d is halved and distance to screen D is doubled, the fringe width β becomes:",
        "options": [
          "A) Unchanged",
          "B) Doubled",
          "C) 4 times",
          "D) 1/4 times"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. β = λD / d. With D' = 2D and d' = d/2, β' = λ(2D)/(d/2) = 4 (λD/d) = 4β.",
        "stepMarking": [
          {
            "step": "β = λD/d -> (2) / (1/2) = 4 times",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember: immersing entire YDSE in water (refractive index n) shrinks β to β/n.",
        "commonPitfall": "Dividing by 2 instead of multiplying by 2 when d is halved."
      },
      {
        "id": "cbse-c12-phy-2023-board-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Dual Nature of Radiation: Stopping Potential & Frequency",
        "questionText": "In photoelectric effect, if the intensity of incident light (above threshold frequency) is doubled while keeping frequency constant, the stopping potential V₀:",
        "options": [
          "A) Doubles",
          "B) Halves",
          "C) Increases fourfold",
          "D) Remains unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Maximum KE and stopping potential (eV₀ = hν - φ₀) depend ONLY on frequency ν and work function φ₀, independent of intensity (which doubles photocurrent instead).",
        "stepMarking": [
          {
            "step": "Stopping potential depends on frequency, NOT intensity -> unchanged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Intensity -> Photocurrent; Frequency -> Stopping Potential / K_max.",
        "commonPitfall": "Thinking higher intensity gives higher K_max."
      },
      {
        "id": "cbse-c12-phy-2023-board-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductor Electronics: Intrinsic vs p-n Junction Barrier",
        "questionText": "When a p-n junction diode is forward biased, the width of the depletion layer and the barrier height:",
        "options": [
          "A) Both increase",
          "B) Both decrease",
          "C) Width increases, height decreases",
          "D) Remain unaffected"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Applied forward voltage V opposes the built-in potential V₀, reducing effective barrier height to (V₀ - V) and shrinking depletion layer width.",
        "stepMarking": [
          {
            "step": "Forward bias opposes built-in field -> both width & barrier decrease",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reverse bias does the exact opposite (increases both depletion width and barrier height).",
        "commonPitfall": "Thinking forward bias widens the depletion region."
      },
      {
        "id": "cbse-c12-phy-2023-board-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Nuclei: Binding Energy Curve & Nuclear Density",
        "questionText": "The ratio of nuclear radii of two nuclei having mass numbers 27 and 64 is:",
        "options": [
          "A) 27 : 64",
          "B) 9 : 16",
          "C) 3 : 4",
          "D) 4 : 3"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. R = R₀ A^(1/3). Thus R₁ / R₂ = (27/64)^(1/3) = 3 : 4.",
        "stepMarking": [
          {
            "step": "R ∝ A^(1/3) -> (27/64)^(1/3) = 3:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Nuclear density is completely INDEPENDENT of mass number A (~2.3 × 10¹⁷ kg/m³)!",
        "commonPitfall": "Taking square root instead of cube root."
      },
      {
        "id": "cbse-c12-phy-2023-board-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Electric Charges & Fields: Gauss Law Flux",
        "questionText": "A point charge +q is placed at a distance d/2 directly above the centre of a square of side d. What is the total electric flux passing through the square?",
        "options": [
          "A) q / ε₀",
          "B) q / (2ε₀)",
          "C) q / (6ε₀)",
          "D) q / (4ε₀)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Imagine constructing a symmetric cube of side d enclosing +q at its exact centre; the given square forms one of the 6 identical faces. By Gauss's law, flux through 1 face = q / (6ε₀).",
        "stepMarking": [
          {
            "step": "Construct symmetric enclosing cube -> 1/6 of total flux q/ε₀",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetry to close open surfaces into cubes, spheres, or cylinders for Gauss's law MCQs.",
        "commonPitfall": "Writing q/ε₀ for a single face."
      },
      {
        "id": "cbse-c12-phy-2023-board-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: Coherent Sources Necessity",
        "questionText": "Assertion (A): Two independent identical sodium lamps cannot produce a sustained interference pattern.\nReason (R): Independent light sources emit wave trains with rapidly and randomly varying phase differences, making them incoherent.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Sustained interference requires a constant phase difference (coherence), achievable only when both interfering waves originate from the same parent source.",
        "stepMarking": [
          {
            "step": "Option (A) citing random phase variation of independent sources",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Key term: \"constant phase difference over time\".",
        "commonPitfall": "Thinking matching frequency alone ensures coherence."
      },
      {
        "id": "cbse-c12-phy-2023-board-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Atoms: Bohr Radius & Energy Proportionality",
        "questionText": "Assertion (A): The total energy of an electron in the nth stationary orbit of hydrogen atom is negative.\nReason (R): Negative total energy indicates that the electron is bound to the nucleus by electrostatic attraction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Eₙ = -13.6/n² eV; negative sign signifies the bound state (positive work must be supplied to free the electron to E = 0).",
        "stepMarking": [
          {
            "step": "Option (A) explaining bound system energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice KE = -E = +13.6/n² eV (positive!) and PE = 2E = -27.2/n² eV.",
        "commonPitfall": "Thinking negative energy violates conservation."
      },
      {
        "id": "cbse-c12-phy-2023-board-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductors: Temperature Effect on Resistivity",
        "questionText": "Assertion (A): Electrical conductivity of an intrinsic semiconductor increases rapidly with rise in temperature.\nReason (R): Rising temperature breaks covalent bonds, increasing charge-carrier concentration (n_e and n_h) exponentially, which outweighs decrease in relaxation time.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In semiconductors, exponential growth in carrier density n dominates over τ decrease, giving negative temperature coefficient of resistivity (α < 0).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting carrier surge vs τ drop",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Metals have α > 0 (ρ rises with T); Semiconductors have α < 0 (ρ drops with T).",
        "commonPitfall": "Applying metallic resistance reasoning to semiconductors."
      },
      {
        "id": "cbse-c12-phy-2023-board-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Internal Resistance & Terminal Voltage",
        "questionText": "Assertion (A): During charging of a secondary cell, the terminal potential difference across it exceeds its EMF (V > E).\nReason (R): While charging, current enters the positive terminal of the cell, so V = E + Ir.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. While discharging V = E - Ir (< E), whereas while charging current flows against EMF so V = E + Ir (> E).",
        "stepMarking": [
          {
            "step": "Option (A) citing V = E + Ir during charging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Discharging: V = E - Ir; Open circuit: V = E; Charging: V = E + Ir.",
        "commonPitfall": "Assuming V is always less than E."
      },
      {
        "id": "cbse-c12-phy-2023-board-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Current Electricity: Kirchhoff Rules & Wheatstone Bridge",
        "questionText": "State Kirchhoff's Junction Rule and Loop Rule along with the physical conservation laws they represent.",
        "modelAnswer": "1. Junction Rule (KCL): At any circuit junction, algebraic sum of currents meeting is zero (ΣI = 0). Based on Conservation of Charge.\n2. Loop Rule (KVL): Around any closed circuit loop, algebraic sum of potential changes across resistors and EMFs is zero (ΣΔV = 0). Based on Conservation of Energy.",
        "stepMarking": [
          {
            "step": "Junction rule + Conservation of Charge",
            "marks": "1 Mark"
          },
          {
            "step": "Loop rule + Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state the underlying conservation principle cleanly.",
        "commonPitfall": "Mixing up charge conservation and energy conservation."
      },
      {
        "id": "cbse-c12-phy-2023-board-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Magnetism: Moving Coil Galvanometer to Ammeter Conversion",
        "questionText": "A galvanometer of coil resistance 15 Ω shows full-scale deflection for a current of 4 mA. How will you convert it into an ammeter of range 0 to 6 A?",
        "modelAnswer": "Connect a low-resistance shunt S in PARALLEL with the galvanometer.\nS = (I_g · G) / (I - I_g) = (0.004 × 15) / (6 - 0.004) = 0.06 / 5.996 ≈ 0.01 Ω (or 10 mΩ).",
        "stepMarking": [
          {
            "step": "Parallel shunt formula S = Ig·G/(I - Ig)",
            "marks": "1 Mark"
          },
          {
            "step": "Correct value S = 0.01 Ω in parallel",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ammeter = low shunt in PARALLEL; Voltmeter = high resistor in SERIES.",
        "commonPitfall": "Connecting shunt in series or ignoring mA to A conversion."
      },
      {
        "id": "cbse-c12-phy-2023-board-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Dual Nature: De Broglie Wavelength of Accelerated Electron",
        "questionText": "Find the ratio of de Broglie wavelengths associated with an electron and an alpha-particle when both are accelerated from rest through the same potential difference V.",
        "modelAnswer": "λ = h / √(2 m q V).\nFor same V: λ_e / λ_α = √[(m_α · q_α) / (m_e · q_e)].\nSince m_α ≈ 4 × 1836 m_e and q_α = 2 e, λ_e / λ_α = √(8 × 1836) ≈ 121.2 : 1 (much larger for electron due to tiny mass).",
        "stepMarking": [
          {
            "step": "Formula λ = h/√(2mqV)",
            "marks": "1 Mark"
          },
          {
            "step": "Ratio expression √(m_α q_α / m_e q_e)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For electron only: λ (in Å) ≈ 12.27 / √V.",
        "commonPitfall": "Using λ ∝ √(q/m) instead of 1/√(mq)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Semiconductors: Half-Wave vs Full-Wave Rectifier",
        "questionText": "Draw the output waveform of a full-wave rectifier for a sinusoidal AC input of 50 Hz, and state the fundamental ripple frequency of its pulsating DC output.",
        "modelAnswer": "Full-wave rectifier converts both positive and negative half cycles of AC input into unidirectional positive pulses.\nSince two output pulses occur per input AC cycle, output ripple frequency = 2 × 50 Hz = 100 Hz.",
        "stepMarking": [
          {
            "step": "Both half-cycles rectified positive waveform",
            "marks": "1 Mark"
          },
          {
            "step": "Output frequency = 2 × 50 = 100 Hz",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Half-wave output frequency = f (50 Hz); Full-wave output frequency = 2f (100 Hz).",
        "commonPitfall": "Writing 50 Hz for full-wave rectifier."
      },
      {
        "id": "cbse-c12-phy-2023-board-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Electrostatic Potential: Equipotential Surfaces Properties",
        "questionText": "Draw equipotential surfaces for (i) an isolated positive point charge and (ii) a uniform electric field along the +x axis. Why can two equipotential surfaces never intersect?",
        "modelAnswer": "(i) Concentric spherical shells centred on +q (spacing increases outward since E decreases).\n(ii) Parallel planes perpendicular to x-axis (parallel to YZ-plane) equally spaced.\nNon-intersection: If two equipotential surfaces intersected, there would be two different values of electric potential (and two normal field directions) at the point of intersection, which is impossible.",
        "stepMarking": [
          {
            "step": "Spherical & parallel planar equipotentials described",
            "marks": "1 Mark"
          },
          {
            "step": "Contradiction of two potentials/directions at intersection",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember spacing between equipotentials Δr ∝ 1/E: closer surfaces mean stronger electric field!",
        "commonPitfall": "Drawing equally spaced circles for a point charge."
      },
      {
        "id": "cbse-c12-phy-2023-board-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Current Electricity: Cells in Parallel Equivalent EMF & Internal Resistance",
        "questionText": "Two cells of EMFs E₁, E₂ and internal resistances r₁, r₂ are connected in parallel. Derive expressions for equivalent EMF (E_eq) and equivalent internal resistance (r_eq).",
        "modelAnswer": "Total current I = I₁ + I₂, with terminal voltage V identical across both cells:\nI₁ = (E₁ - V)/r₁ and I₂ = (E₂ - V)/r₂.\nI = (E₁/r₁ + E₂/r₂) - V(1/r₁ + 1/r₂).\nRearranging for V = E_eq - I r_eq:\n1/r_eq = 1/r₁ + 1/r₂ => r_eq = (r₁r₂)/(r₁ + r₂),\nE_eq / r_eq = E₁/r₁ + E₂/r₂ => E_eq = (E₁r₂ + E₂r₁) / (r₁ + r₂).",
        "stepMarking": [
          {
            "step": "Set I = I₁ + I₂ with shared V",
            "marks": "1 Mark"
          },
          {
            "step": "Derive 1/r_eq = 1/r₁ + 1/r₂",
            "marks": "1 Mark"
          },
          {
            "step": "Derive E_eq = (E₁r₂ + E₂r₁)/(r₁ + r₂)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Symmetrical form E_eq/r_eq = E₁/r₁ + E₂/r₂ is easiest to verify!",
        "commonPitfall": "Adding internal resistances in series inside E_eq denominator incorrectly."
      },
      {
        "id": "cbse-c12-phy-2023-board-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Moving Charges & Magnetism: Biot-Savart Magnetic Field on Loop Axis",
        "questionText": "Using Biot-Savart law, derive the expression for magnetic field at an axial point x from the centre of a circular loop of radius R carrying current I.",
        "modelAnswer": "Consider current element dl at top of loop; distance to axial point P is r = √(R² + x²), with dl ⊥ r.\ndB = (μ₀ I dl) / (4π (R² + x²)).\nSymmetry: perpendicular components dB cosθ cancel; axial components dB sinθ (where sinθ = R / √(R² + x²)) sum over circumference 2πR:\nB = ∫ dB sinθ = [μ₀ I R / (4π (R² + x²)^(3/2))] × (2πR) = μ₀ I R² / [2 (R² + x²)^(3/2)] directed along loop axis.",
        "stepMarking": [
          {
            "step": "Biot-Savart dB element + perpendicular components cancel",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate axial component dB sinθ over 2πR -> final formula",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check special case x = 0: reduces cleanly to B_centre = μ₀I / (2R)!",
        "commonPitfall": "Using cosθ instead of sinθ for axial component without matching angle θ definition."
      },
      {
        "id": "cbse-c12-phy-2023-board-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Electromagnetic Induction: Motional EMF & Faraday's Laws",
        "questionText": "Derive the expression for motional EMF induced across the ends of a straight conductor of length l moving with uniform velocity v perpendicular to a uniform magnetic field B. Hence find power dissipated if connected to resistance R.",
        "modelAnswer": "Consider rectangular loop PQRS with movable arm PQ of length l moving outward at speed v. Area increases at dA/dt = l dx/dt = l v.\nMagnetic flux Φ_B = B · A = B l x.\nBy Faraday's law, magnitude of induced EMF: e = |dΦ_B/dt| = B l (dx/dt) = B l v.\n(Alternative via Lorentz force: qvB = qE = q(e/l) => e = B l v.)\nCurrent I = B l v / R; Mechanical Force needed F = I l B = B²l²v / R; Power = F v = I² R = B²l²v² / R.",
        "stepMarking": [
          {
            "step": "Derive e = B l v via flux or Lorentz force",
            "marks": "2 Marks"
          },
          {
            "step": "Current I = Blv/R and Power P = B²l²v²/R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both Faraday flux method and Lorentz force method earn full marks.",
        "commonPitfall": "Forgetting B, l, v must be mutually perpendicular for full Blv."
      },
      {
        "id": "cbse-c12-phy-2023-board-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Ray Optics: Lens Maker's Formula Derivation",
        "questionText": "Derive the Lens Maker's formula 1/f = (n - 1)(1/R₁ - 1/R₂) for a thin convex lens of refractive index n placed in air.",
        "modelAnswer": "First spherical surface (radius R₁, air -> glass): n/v₁ - 1/u = (n - 1)/R₁ ...(1)\nSecond spherical surface (radius R₂, glass -> air, virtual object v₁): 1/v - n/v₁ = (1 - n)/R₂ ...(2)\nAdding (1) and (2) cancels n/v₁:\n1/v - 1/u = (n - 1)(1/R₁ - 1/R₂).\nFor u = ∞, v = f => 1/f = (n - 1)(1/R₁ - 1/R₂).",
        "stepMarking": [
          {
            "step": "Refraction equation at first surface",
            "marks": "1 Mark"
          },
          {
            "step": "Refraction at second surface (n₁=n, n₂=1)",
            "marks": "1 Mark"
          },
          {
            "step": "Add equations & set u=∞, v=f",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the thin-lens assumption (negligible thickness) before using v₁ directly in Eq(2)!",
        "commonPitfall": "Forgetting sign reversal (1 - n)/R₂ at the second interface."
      },
      {
        "id": "cbse-c12-phy-2023-board-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Atoms: Bohr Radius & Hydrogen Energy Levels",
        "questionText": "Using Bohr's postulates, derive the expression for the radius of the nth stationary orbit and total energy of the electron in a hydrogen atom.",
        "modelAnswer": "1. Electrostatic centripetal balance: m v² / r = k e² / r² => m v² r = k e² ...(1)\n2. Bohr quantisation: m v r = n h / (2π) => v = nh / (2πmr) ...(2)\nSubstituting (2) into (1): rₙ = (n² h²) / (4π² m k e²) = (ε₀ n² h²) / (π m e²) ≈ 0.529 n² Å.\nTotal Energy Eₙ = KE + PE = k e²/(2rₙ) - k e²/rₙ = -k e² / (2rₙ) = - (m e⁴) / (8 ε₀² h² n²) = -13.6 / n² eV.",
        "stepMarking": [
          {
            "step": "Centripetal + Bohr angular momentum equations",
            "marks": "1 Mark"
          },
          {
            "step": "Derive rₙ ∝ n²",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Eₙ = -13.6/n² eV",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show KE = +ke²/(2r) and PE = -ke²/r explicitly so E = -ke²/(2r) is clear.",
        "commonPitfall": "Writing KE = -PE instead of KE = -PE/2."
      },
      {
        "id": "cbse-c12-phy-2023-board-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Nuclei: Mass Defect, Binding Energy & Fission vs Fusion",
        "questionText": "Define mass defect and nuclear binding energy. Explain why heavy nuclei undergo nuclear fission while very light nuclei undergo nuclear fusion, referring to the Binding Energy per nucleon curve.",
        "modelAnswer": "Mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus.\nBinding Energy BE = Δm · c² (energy required to break nucleus into free nucleons).\n• Heavy nuclei (A > 170, e.g. U-235) have lower BE/nucleon (~7.6 MeV) than medium-mass nuclei (A ~ 56-120, ~8.5 MeV), so splitting into two lighter nuclei increases BE/nucleon and releases ~200 MeV energy.\n• Very light nuclei (A < 20, e.g. ²H) have very low BE/nucleon (~1–2 MeV); fusing into ⁴He (~7.1 MeV/nucleon) moves up the curve steeply, releasing huge energy.",
        "stepMarking": [
          {
            "step": "Mass defect & BE definitions",
            "marks": "1 Mark"
          },
          {
            "step": "Fission explanation via BE/A increase (7.6 -> 8.5 MeV)",
            "marks": "1 Mark"
          },
          {
            "step": "Fusion explanation via BE/A jump (H -> He)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Cite Iron-56 (Fe) peak at ~8.75 MeV/nucleon.",
        "commonPitfall": "Saying binding energy decreases after fission/fusion (total binding energy INCREASES!)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Electrostatics: Electric Field on Equatorial Line of a Dipole",
        "questionText": "Derive an expression for the electric field intensity at a point on the equatorial plane (perpendicular bisector) of an electric dipole of dipole moment p = 2aq. What is the angle between E and p?",
        "modelAnswer": "Consider point P at distance r from centre O on equatorial line. Distance to +q and -q is √(r² + a²).\nMagnitudes: E₊ = E₋ = kq / (r² + a²).\nVertical components E₊sinθ and E₋sinθ are equal and opposite -> cancel out.\nHorizontal components add opposite to p: E_eq = 2 E₊ cosθ = [2kq / (r² + a²)] × [a / √(r² + a²)] = kp / (r² + a²)^(3/2).\nFor short dipole (r ≫ a): E_eq = p / (4πε₀ r³) directed OPPOSITE to p (angle = 180°).",
        "stepMarking": [
          {
            "step": "Vertical components cancel, horizontal add -> 2E₊cosθ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact & short-dipole result p/(4πε₀r³)",
            "marks": "1 Mark"
          },
          {
            "step": "Angle between E_eq and p = 180°",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Ratio check: E_axial / E_equatorial = 2 : 1 for short dipole at equal distance r!",
        "commonPitfall": "Writing angle 0° (axial) instead of 180° (equatorial)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Photoelectric Effect & Einstein's Equation",
        "questionText": "Read the passage and answer:\nWhen monochromatic light of wavelength 331 nm falls on a clean metal surface with work function φ₀ = 2.0 eV, photoelectrons are emitted (take h = 6.62 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J).\n\n(a) Calculate the energy of each incident photon in electron-volts (eV). (1.5M)\n(b) Find the maximum kinetic energy (in eV) of emitted photoelectrons and the stopping potential V₀. (1.5M)\n(c) Draw the variation of stopping potential V₀ vs incident frequency ν for two metals A and B (φ_A > φ_B). (1M)",
        "modelAnswer": "(a) E = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸) / (331 × 10⁻⁹) = 6 × 10⁻¹⁹ J.\nIn eV: E = 6 × 10⁻¹⁹ / (1.6 × 10⁻¹⁹) = 3.75 eV.\n(b) K_max = E - φ₀ = 3.75 - 2.0 = 1.75 eV. Hence stopping potential V₀ = 1.75 V.\n(c) Two parallel straight lines with identical slope h/e and higher x-intercept (threshold frequency ν₀) for metal A.",
        "stepMarking": [
          {
            "step": "(a) E = 3.75 eV",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) K_max = 1.75 eV & V₀ = 1.75 V",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Parallel lines of equal slope h/e",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Shortcut check: hc ≈ 1240 eV·nm => 1240 / 331 ≈ 3.75 eV!",
        "commonPitfall": "Drawing diverging lines for metals A and B (slope h/e is universal!)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Total Internal Reflection & Optical Fibres (Ray Optics)",
        "questionText": "Read the passage and answer:\nOptical fibres transmit high-bandwidth internet signals over thousands of kilometres via repeated Total Internal Reflection (TIR). Each fibre has a high-refractive-index glass core (n₁ = 1.68) surrounded by cladding of slightly lower refractive index (n₂ = 1.44).\n\n(a) State the two essential conditions for TIR to take place at the core-cladding boundary. (1M)\n(b) Calculate the critical angle (or sin i_c) at the core-cladding interface. (1M)\n(c) Why is cladding essential even though air outside has an even lower refractive index n = 1.0? Give two reasons. (2M)",
        "modelAnswer": "(a) 1. Light must travel from optically denser core (n₁) to optically rarer cladding (n₂).\n2. Angle of incidence at interface must exceed critical angle i_c.\n(b) sin i_c = n₂ / n₁ = 1.44 / 1.68 = 6/7 ≈ 0.857 => i_c = sin⁻¹(6/7) ≈ 59°.\n(c) 1. Cladding protects the delicate core surface from scratches, dust, and moisture that would ruin TIR.\n2. It prevents signal cross-talk between adjacent bundled fibres and restricts steep high-order modes so pulse dispersion is minimised.",
        "stepMarking": [
          {
            "step": "(a) Two TIR conditions",
            "marks": "1 Mark"
          },
          {
            "step": "(b) sin i_c = 1.44/1.68 = 6/7",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Physical protection + cross-talk/dispersion prevention",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never write sin i_c = 1/n₁ when cladding n₂ ≠ 1; always use n₂/n₁!",
        "commonPitfall": "Using air n = 1 instead of cladding n₂ = 1.44 in critical angle calculation."
      },
      {
        "id": "cbse-c12-phy-2023-board-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "AC Circuits & Transformers: Phasor Diagram, Impedance & Transformer Losses",
        "questionText": "(a) Using a phasor diagram, derive the expression for impedance Z and phase angle φ of a series LCR circuit connected to AC voltage V = V₀ sin ωt.\n(b) Draw a labelled schematic of a step-up transformer and explain four main sources of energy loss in real transformers.",
        "modelAnswer": "(a) In series, current I is same across L, C, R. V_R is in phase with I, V_L leads I by 90°, V_C lags I by 90°.\nResultant voltage V = √[ V_R² + (V_L - V_C)² ] = I √[ R² + (X_L - X_C)² ].\nThus Z = V / I = √[ R² + (X_L - X_C)² ], and tan φ = (X_L - X_C) / R.\n(b) Step-up transformer has N_s > N_p on a laminated soft iron core.\nFour energy losses: (1) Flux leakage (minimize by winding coils over each other), (2) Copper I²R winding heating (use thick copper wire), (3) Eddy currents (use laminated iron sheets), (4) Hysteresis loss (use soft iron core with narrow hysteresis loop).",
        "stepMarking": [
          {
            "step": "(a) Phasor diagram + Z and tan φ derivations",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Step-up schematic + 4 losses & remedies",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Pair each transformer loss with how it is minimised (laminated core -> eddy currents; soft iron -> hysteresis).",
        "commonPitfall": "Confusing eddy current loss (laminated core) with hysteresis loss (soft iron material)."
      },
      {
        "id": "cbse-c12-phy-2023-board-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Wave Optics: Huygens Reflection/Refraction & Diffraction Single Slit",
        "questionText": "(a) Using Huygens' wave theory, verify Snell's law of refraction for a plane wavefront moving from rarer (speed v₁) to denser medium (speed v₂).\n(b) Why are diffraction minima formed at a sin θ = nλ in a single slit, whereas YDSE maxima occur at d sin θ = nλ? State one distinction between interference and diffraction fringes.",
        "modelAnswer": "(a) Plane wavefront AB hits boundary XY at A (angle i); wavelets from B reach C at time τ = BC/v₁, while secondary wavelet from A covers AD = v₂τ in denser medium.\nsin i = BC/AC = v₁τ/AC; sin r = AD/AC = v₂τ/AC.\nRatio sin i / sin r = v₁ / v₂ = n₂ / n₁ = constant (Snell's Law).\n(b) For single slit of width a, at a sin θ = λ, the slit splits into two halves differing in path by λ/2, cancelling pairwise destructively (similarly 2n halves for nλ) -> MINIMA! In YDSE, two point sources differing by nλ interfere constructively -> MAXIMA.\nDistinction: Interference fringes are of equal width & equal bright peak intensity; diffraction central maximum is twice as wide with rapidly falling secondary peak intensities.",
        "stepMarking": [
          {
            "step": "(a) Huygens wavefront geometry proving sin i/sin r = v₁/v₂",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Pairwise cancellation in diffraction vs YDSE + fringe contrast",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Remember: Central maximum width in single slit = 2λD/a (double the secondary fringe width λD/a!).",
        "commonPitfall": "Writing a sin θ = nλ as maxima for single slit."
      },
      {
        "id": "cbse-c12-phy-2023-board-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Current Electricity: Wheatstone Bridge Balance Condition & Numerical",
        "questionText": "(a) Draw a circuit diagram of a balanced Wheatstone bridge and use Kirchhoff's rules to derive its balance condition P/Q = R/S.\n(b) Why is a Wheatstone bridge NOT suitable for measuring very high or very low resistances accurately?\n(c) Calculate the current drawn from a 6 V battery connected across a balanced bridge with P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω, and galvanometer G = 50 Ω.",
        "modelAnswer": "(a) At balance, I_g = 0 (V_B = V_D), so I₁ = I₃ and I₂ = I₄.\nLoop ABDA: -I₁P + I₂R = 0 => I₁P = I₂R ...(1)\nLoop BCDB: -I₁Q + I₂S = 0 => I₁Q = I₂S ...(2)\nDividing (1) by (2): P / Q = R / S.\n(b) For very low R, connecting lead/contact resistances become significant errors; for very high R, galvanometer current becomes too tiny for sensitive null detection.\n(c) Since 10/20 = 15/30, bridge is balanced -> ignore G = 50 Ω! Upper branch = 10 + 20 = 30 Ω; Lower branch = 15 + 30 = 45 Ω.\nR_eq = (30 × 45)/(30 + 45) = 1350/75 = 18 Ω. Current I = V/R_eq = 6/18 = 1/3 ≈ 0.33 A.",
        "stepMarking": [
          {
            "step": "(a) Circuit + KVL loop derivation of P/Q = R/S",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Contact resistance & sensitivity limitations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Balanced removal of G -> R_eq = 18 Ω, I = 0.33 A",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check P/Q = R/S FIRST in bridge resistor problems before computing I!",
        "commonPitfall": "Including G = 50 Ω in equivalent resistance when bridge is balanced."
      }
    ]
  },
  {
    "id": "cbse-c12-phy-2023-set2",
    "title": "CBSE Class 12 Physics Board Examination 2023 (Set 55/4/2)",
    "subject": "Physics",
    "targetClass": "Class 12",
    "year": 2023,
    "paperType": "BOARD_EXAM",
    "paperCode": "55/4/2",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": true,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-phy-2023-set2-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Magnetism & Matter: Diamagnetic vs Ferromagnetic Susceptibility",
        "questionText": "For a diamagnetic material, the magnetic susceptibility χ and relative permeability μ_r satisfy:",
        "options": [
          "A) χ > 0, μ_r > 1",
          "B) -1 ≤ χ < 0, 0 ≤ μ_r < 1",
          "C) χ ≫ 1, μ_r ≫ 1",
          "D) χ = 0, μ_r = 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diamagnetic substances are feebly repelled by magnets: -1 ≤ χ < 0 and 0 ≤ μ_r = 1 + χ < 1 (for superconductors, χ = -1 and μ_r = 0).",
        "stepMarking": [
          {
            "step": "Small negative χ (-1 ≤ χ < 0) and 0 ≤ μ_r < 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Diamagnetic susceptibility is independent of temperature (except Bi/superconductors).",
        "commonPitfall": "Saying χ is positive for diamagnets."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Induction: Lenz Law & Mutual Inductance",
        "questionText": "Lenz's law is a direct consequence of the law of conservation of:",
        "options": [
          "A) Charge",
          "B) Linear momentum",
          "C) Energy",
          "D) Angular momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Induced current always opposes the cause producing it, so mechanical work must be done against this opposition to produce electrical energy, conserving total energy.",
        "stepMarking": [
          {
            "step": "Identify Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State mechanical work converted into Joule/electrical energy if asked in 2M.",
        "commonPitfall": "Marking conservation of charge."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Alternating Current: Power Factor at LCR Resonance",
        "questionText": "In a series LCR circuit at resonance (X_L = X_C), the phase difference between applied voltage and current, and the power factor cos φ are respectively:",
        "options": [
          "A) π/2 and 0",
          "B) 0 and 1",
          "C) π/4 and 1/√2",
          "D) π and -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At resonance X_L = X_C, so impedance Z = R (purely resistive), phase angle φ = 0°, and power factor cos φ = R/Z = 1.",
        "stepMarking": [
          {
            "step": "At resonance Z = R -> φ = 0, cos φ = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "At resonance, current is MAXIMUM (I = V/R) and power dissipated is maximum.",
        "commonPitfall": "Confusing resonant power factor (1) with wattless current circuit (cos φ = 0)."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Waves: Displacement Current & Wave Vector",
        "questionText": "In a plane electromagnetic wave, the electric field oscillates along the +y axis and the wave propagates along the +x axis. The direction of the magnetic field oscillation is along:",
        "options": [
          "A) +x axis",
          "B) +y axis",
          "C) +z axis",
          "D) -y axis"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Propagation direction is along E × B. Since E is along +j and propagation is along +i, (+j) × (+k) = +i, so B must be along +k (+z axis).",
        "stepMarking": [
          {
            "step": "Check right-hand cross product E × B = +j × (+k) = +i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always test right-hand rule E × B = propagation vector c.",
        "commonPitfall": "Picking -z axis without verifying j × k = +i."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Ray Optics: Total Internal Reflection & Critical Angle",
        "questionText": "For total internal reflection to occur when light travels from glass (n = 1.5) to air, the angle of incidence in glass must be:",
        "options": [
          "A) Equal to 90°",
          "B) Greater than the critical angle (~41.8°)",
          "C) Less than the critical angle",
          "D) Equal to 0°"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Light must travel from denser (glass) to rarer (air) medium at i > i_c, where sin i_c = 1/1.5 = 2/3 => i_c ≈ 41.8°.",
        "stepMarking": [
          {
            "step": "Denser to rarer + i > i_c ≈ 41.8°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note BOTH necessary conditions for TIR: (1) Denser -> Rarer, (2) i > i_c.",
        "commonPitfall": "Forgetting denser-to-rarer medium requirement."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: YDSE Fringe Width Scaling",
        "questionText": "In Young's double slit experiment, if slit separation d is halved and distance to screen D is doubled, the fringe width β becomes:",
        "options": [
          "A) Unchanged",
          "B) Doubled",
          "C) 4 times",
          "D) 1/4 times"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. β = λD / d. With D' = 2D and d' = d/2, β' = λ(2D)/(d/2) = 4 (λD/d) = 4β.",
        "stepMarking": [
          {
            "step": "β = λD/d -> (2) / (1/2) = 4 times",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember: immersing entire YDSE in water (refractive index n) shrinks β to β/n.",
        "commonPitfall": "Dividing by 2 instead of multiplying by 2 when d is halved."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Dual Nature of Radiation: Stopping Potential & Frequency",
        "questionText": "In photoelectric effect, if the intensity of incident light (above threshold frequency) is doubled while keeping frequency constant, the stopping potential V₀:",
        "options": [
          "A) Doubles",
          "B) Halves",
          "C) Increases fourfold",
          "D) Remains unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Maximum KE and stopping potential (eV₀ = hν - φ₀) depend ONLY on frequency ν and work function φ₀, independent of intensity (which doubles photocurrent instead).",
        "stepMarking": [
          {
            "step": "Stopping potential depends on frequency, NOT intensity -> unchanged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Intensity -> Photocurrent; Frequency -> Stopping Potential / K_max.",
        "commonPitfall": "Thinking higher intensity gives higher K_max."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductor Electronics: Intrinsic vs p-n Junction Barrier",
        "questionText": "When a p-n junction diode is forward biased, the width of the depletion layer and the barrier height:",
        "options": [
          "A) Both increase",
          "B) Both decrease",
          "C) Width increases, height decreases",
          "D) Remain unaffected"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Applied forward voltage V opposes the built-in potential V₀, reducing effective barrier height to (V₀ - V) and shrinking depletion layer width.",
        "stepMarking": [
          {
            "step": "Forward bias opposes built-in field -> both width & barrier decrease",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reverse bias does the exact opposite (increases both depletion width and barrier height).",
        "commonPitfall": "Thinking forward bias widens the depletion region."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Nuclei: Binding Energy Curve & Nuclear Density",
        "questionText": "The ratio of nuclear radii of two nuclei having mass numbers 27 and 64 is:",
        "options": [
          "A) 27 : 64",
          "B) 9 : 16",
          "C) 3 : 4",
          "D) 4 : 3"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. R = R₀ A^(1/3). Thus R₁ / R₂ = (27/64)^(1/3) = 3 : 4.",
        "stepMarking": [
          {
            "step": "R ∝ A^(1/3) -> (27/64)^(1/3) = 3:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Nuclear density is completely INDEPENDENT of mass number A (~2.3 × 10¹⁷ kg/m³)!",
        "commonPitfall": "Taking square root instead of cube root."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Electric Charges & Fields: Gauss Law Flux",
        "questionText": "A point charge +q is placed at a distance d/2 directly above the centre of a square of side d. What is the total electric flux passing through the square?",
        "options": [
          "A) q / ε₀",
          "B) q / (2ε₀)",
          "C) q / (6ε₀)",
          "D) q / (4ε₀)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Imagine constructing a symmetric cube of side d enclosing +q at its exact centre; the given square forms one of the 6 identical faces. By Gauss's law, flux through 1 face = q / (6ε₀).",
        "stepMarking": [
          {
            "step": "Construct symmetric enclosing cube -> 1/6 of total flux q/ε₀",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetry to close open surfaces into cubes, spheres, or cylinders for Gauss's law MCQs.",
        "commonPitfall": "Writing q/ε₀ for a single face."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Electrostatic Potential & Capacitance: Dielectric Insertion",
        "questionText": "A parallel-plate capacitor is charged by a battery and then disconnected. A dielectric slab of dielectric constant K is now inserted to fill the gap completely. Which statement is TRUE?",
        "options": [
          "A) Charge decreases K times",
          "B) Potential difference and Energy stored both decrease K times",
          "C) Capacitance decreases K times",
          "D) Electric field increases K times"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Once disconnected, charge Q stays constant. Capacitance increases K times (C' = KC), so V' = Q/C' = V/K and energy U' = Q²/(2C') = U/K both decrease K times.",
        "stepMarking": [
          {
            "step": "Disconnected => Q const, C'=KC => V'=V/K and U'=U/K",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish \"Battery Disconnected\" (Q constant) from \"Battery Connected\" (V constant, U increases K times)!",
        "commonPitfall": "Confusing Q-constant vs V-constant capacitor cases."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Mobility & Drift Velocity",
        "questionText": "Two wires of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. Connected in series to a battery, the ratio of drift velocities of electrons in them is:",
        "options": [
          "A) 1 : 4",
          "B) 4 : 1",
          "C) 1 : 2",
          "D) 2 : 1"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In series, current I is same. I = n e A v_d => v_d ∝ 1/A ∝ 1/r². Thus v_d1 / v_d2 = (r₂ / r₁)² = (1 / 2)² = 1 : 4.",
        "stepMarking": [
          {
            "step": "Series same I => v_d ∝ 1/r² => (1/2)² = 1:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, drift speed depends ONLY on cross-sectional area (independent of wire length!).",
        "commonPitfall": "Including length ratio in v_d comparison."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Atoms: Bohr Radius & Energy Proportionality",
        "questionText": "Assertion (A): The total energy of an electron in the nth stationary orbit of hydrogen atom is negative.\nReason (R): Negative total energy indicates that the electron is bound to the nucleus by electrostatic attraction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Eₙ = -13.6/n² eV; negative sign signifies the bound state (positive work must be supplied to free the electron to E = 0).",
        "stepMarking": [
          {
            "step": "Option (A) explaining bound system energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice KE = -E = +13.6/n² eV (positive!) and PE = 2E = -27.2/n² eV.",
        "commonPitfall": "Thinking negative energy violates conservation."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductors: Temperature Effect on Resistivity",
        "questionText": "Assertion (A): Electrical conductivity of an intrinsic semiconductor increases rapidly with rise in temperature.\nReason (R): Rising temperature breaks covalent bonds, increasing charge-carrier concentration (n_e and n_h) exponentially, which outweighs decrease in relaxation time.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In semiconductors, exponential growth in carrier density n dominates over τ decrease, giving negative temperature coefficient of resistivity (α < 0).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting carrier surge vs τ drop",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Metals have α > 0 (ρ rises with T); Semiconductors have α < 0 (ρ drops with T).",
        "commonPitfall": "Applying metallic resistance reasoning to semiconductors."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Internal Resistance & Terminal Voltage",
        "questionText": "Assertion (A): During charging of a secondary cell, the terminal potential difference across it exceeds its EMF (V > E).\nReason (R): While charging, current enters the positive terminal of the cell, so V = E + Ir.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. While discharging V = E - Ir (< E), whereas while charging current flows against EMF so V = E + Ir (> E).",
        "stepMarking": [
          {
            "step": "Option (A) citing V = E + Ir during charging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Discharging: V = E - Ir; Open circuit: V = E; Charging: V = E + Ir.",
        "commonPitfall": "Assuming V is always less than E."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: Coherent Sources Necessity",
        "questionText": "Assertion (A): Two independent identical sodium lamps cannot produce a sustained interference pattern.\nReason (R): Independent light sources emit wave trains with rapidly and randomly varying phase differences, making them incoherent.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Sustained interference requires a constant phase difference (coherence), achievable only when both interfering waves originate from the same parent source.",
        "stepMarking": [
          {
            "step": "Option (A) citing random phase variation of independent sources",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Key term: \"constant phase difference over time\".",
        "commonPitfall": "Thinking matching frequency alone ensures coherence."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Magnetism: Moving Coil Galvanometer to Ammeter Conversion",
        "questionText": "A galvanometer of coil resistance 15 Ω shows full-scale deflection for a current of 4 mA. How will you convert it into an ammeter of range 0 to 6 A?",
        "modelAnswer": "Connect a low-resistance shunt S in PARALLEL with the galvanometer.\nS = (I_g · G) / (I - I_g) = (0.004 × 15) / (6 - 0.004) = 0.06 / 5.996 ≈ 0.01 Ω (or 10 mΩ).",
        "stepMarking": [
          {
            "step": "Parallel shunt formula S = Ig·G/(I - Ig)",
            "marks": "1 Mark"
          },
          {
            "step": "Correct value S = 0.01 Ω in parallel",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ammeter = low shunt in PARALLEL; Voltmeter = high resistor in SERIES.",
        "commonPitfall": "Connecting shunt in series or ignoring mA to A conversion."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Dual Nature: De Broglie Wavelength of Accelerated Electron",
        "questionText": "Find the ratio of de Broglie wavelengths associated with an electron and an alpha-particle when both are accelerated from rest through the same potential difference V.",
        "modelAnswer": "λ = h / √(2 m q V).\nFor same V: λ_e / λ_α = √[(m_α · q_α) / (m_e · q_e)].\nSince m_α ≈ 4 × 1836 m_e and q_α = 2 e, λ_e / λ_α = √(8 × 1836) ≈ 121.2 : 1 (much larger for electron due to tiny mass).",
        "stepMarking": [
          {
            "step": "Formula λ = h/√(2mqV)",
            "marks": "1 Mark"
          },
          {
            "step": "Ratio expression √(m_α q_α / m_e q_e)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For electron only: λ (in Å) ≈ 12.27 / √V.",
        "commonPitfall": "Using λ ∝ √(q/m) instead of 1/√(mq)."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Semiconductors: Half-Wave vs Full-Wave Rectifier",
        "questionText": "Draw the output waveform of a full-wave rectifier for a sinusoidal AC input of 50 Hz, and state the fundamental ripple frequency of its pulsating DC output.",
        "modelAnswer": "Full-wave rectifier converts both positive and negative half cycles of AC input into unidirectional positive pulses.\nSince two output pulses occur per input AC cycle, output ripple frequency = 2 × 50 Hz = 100 Hz.",
        "stepMarking": [
          {
            "step": "Both half-cycles rectified positive waveform",
            "marks": "1 Mark"
          },
          {
            "step": "Output frequency = 2 × 50 = 100 Hz",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Half-wave output frequency = f (50 Hz); Full-wave output frequency = 2f (100 Hz).",
        "commonPitfall": "Writing 50 Hz for full-wave rectifier."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Electrostatic Potential: Equipotential Surfaces Properties",
        "questionText": "Draw equipotential surfaces for (i) an isolated positive point charge and (ii) a uniform electric field along the +x axis. Why can two equipotential surfaces never intersect?",
        "modelAnswer": "(i) Concentric spherical shells centred on +q (spacing increases outward since E decreases).\n(ii) Parallel planes perpendicular to x-axis (parallel to YZ-plane) equally spaced.\nNon-intersection: If two equipotential surfaces intersected, there would be two different values of electric potential (and two normal field directions) at the point of intersection, which is impossible.",
        "stepMarking": [
          {
            "step": "Spherical & parallel planar equipotentials described",
            "marks": "1 Mark"
          },
          {
            "step": "Contradiction of two potentials/directions at intersection",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember spacing between equipotentials Δr ∝ 1/E: closer surfaces mean stronger electric field!",
        "commonPitfall": "Drawing equally spaced circles for a point charge."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Current Electricity: Kirchhoff Rules & Wheatstone Bridge",
        "questionText": "State Kirchhoff's Junction Rule and Loop Rule along with the physical conservation laws they represent.",
        "modelAnswer": "1. Junction Rule (KCL): At any circuit junction, algebraic sum of currents meeting is zero (ΣI = 0). Based on Conservation of Charge.\n2. Loop Rule (KVL): Around any closed circuit loop, algebraic sum of potential changes across resistors and EMFs is zero (ΣΔV = 0). Based on Conservation of Energy.",
        "stepMarking": [
          {
            "step": "Junction rule + Conservation of Charge",
            "marks": "1 Mark"
          },
          {
            "step": "Loop rule + Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state the underlying conservation principle cleanly.",
        "commonPitfall": "Mixing up charge conservation and energy conservation."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Moving Charges & Magnetism: Biot-Savart Magnetic Field on Loop Axis",
        "questionText": "Using Biot-Savart law, derive the expression for magnetic field at an axial point x from the centre of a circular loop of radius R carrying current I.",
        "modelAnswer": "Consider current element dl at top of loop; distance to axial point P is r = √(R² + x²), with dl ⊥ r.\ndB = (μ₀ I dl) / (4π (R² + x²)).\nSymmetry: perpendicular components dB cosθ cancel; axial components dB sinθ (where sinθ = R / √(R² + x²)) sum over circumference 2πR:\nB = ∫ dB sinθ = [μ₀ I R / (4π (R² + x²)^(3/2))] × (2πR) = μ₀ I R² / [2 (R² + x²)^(3/2)] directed along loop axis.",
        "stepMarking": [
          {
            "step": "Biot-Savart dB element + perpendicular components cancel",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate axial component dB sinθ over 2πR -> final formula",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check special case x = 0: reduces cleanly to B_centre = μ₀I / (2R)!",
        "commonPitfall": "Using cosθ instead of sinθ for axial component without matching angle θ definition."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Electromagnetic Induction: Motional EMF & Faraday's Laws",
        "questionText": "Derive the expression for motional EMF induced across the ends of a straight conductor of length l moving with uniform velocity v perpendicular to a uniform magnetic field B. Hence find power dissipated if connected to resistance R.",
        "modelAnswer": "Consider rectangular loop PQRS with movable arm PQ of length l moving outward at speed v. Area increases at dA/dt = l dx/dt = l v.\nMagnetic flux Φ_B = B · A = B l x.\nBy Faraday's law, magnitude of induced EMF: e = |dΦ_B/dt| = B l (dx/dt) = B l v.\n(Alternative via Lorentz force: qvB = qE = q(e/l) => e = B l v.)\nCurrent I = B l v / R; Mechanical Force needed F = I l B = B²l²v / R; Power = F v = I² R = B²l²v² / R.",
        "stepMarking": [
          {
            "step": "Derive e = B l v via flux or Lorentz force",
            "marks": "2 Marks"
          },
          {
            "step": "Current I = Blv/R and Power P = B²l²v²/R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both Faraday flux method and Lorentz force method earn full marks.",
        "commonPitfall": "Forgetting B, l, v must be mutually perpendicular for full Blv."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Ray Optics: Lens Maker's Formula Derivation",
        "questionText": "Derive the Lens Maker's formula 1/f = (n - 1)(1/R₁ - 1/R₂) for a thin convex lens of refractive index n placed in air.",
        "modelAnswer": "First spherical surface (radius R₁, air -> glass): n/v₁ - 1/u = (n - 1)/R₁ ...(1)\nSecond spherical surface (radius R₂, glass -> air, virtual object v₁): 1/v - n/v₁ = (1 - n)/R₂ ...(2)\nAdding (1) and (2) cancels n/v₁:\n1/v - 1/u = (n - 1)(1/R₁ - 1/R₂).\nFor u = ∞, v = f => 1/f = (n - 1)(1/R₁ - 1/R₂).",
        "stepMarking": [
          {
            "step": "Refraction equation at first surface",
            "marks": "1 Mark"
          },
          {
            "step": "Refraction at second surface (n₁=n, n₂=1)",
            "marks": "1 Mark"
          },
          {
            "step": "Add equations & set u=∞, v=f",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the thin-lens assumption (negligible thickness) before using v₁ directly in Eq(2)!",
        "commonPitfall": "Forgetting sign reversal (1 - n)/R₂ at the second interface."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Atoms: Bohr Radius & Hydrogen Energy Levels",
        "questionText": "Using Bohr's postulates, derive the expression for the radius of the nth stationary orbit and total energy of the electron in a hydrogen atom.",
        "modelAnswer": "1. Electrostatic centripetal balance: m v² / r = k e² / r² => m v² r = k e² ...(1)\n2. Bohr quantisation: m v r = n h / (2π) => v = nh / (2πmr) ...(2)\nSubstituting (2) into (1): rₙ = (n² h²) / (4π² m k e²) = (ε₀ n² h²) / (π m e²) ≈ 0.529 n² Å.\nTotal Energy Eₙ = KE + PE = k e²/(2rₙ) - k e²/rₙ = -k e² / (2rₙ) = - (m e⁴) / (8 ε₀² h² n²) = -13.6 / n² eV.",
        "stepMarking": [
          {
            "step": "Centripetal + Bohr angular momentum equations",
            "marks": "1 Mark"
          },
          {
            "step": "Derive rₙ ∝ n²",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Eₙ = -13.6/n² eV",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show KE = +ke²/(2r) and PE = -ke²/r explicitly so E = -ke²/(2r) is clear.",
        "commonPitfall": "Writing KE = -PE instead of KE = -PE/2."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Nuclei: Mass Defect, Binding Energy & Fission vs Fusion",
        "questionText": "Define mass defect and nuclear binding energy. Explain why heavy nuclei undergo nuclear fission while very light nuclei undergo nuclear fusion, referring to the Binding Energy per nucleon curve.",
        "modelAnswer": "Mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus.\nBinding Energy BE = Δm · c² (energy required to break nucleus into free nucleons).\n• Heavy nuclei (A > 170, e.g. U-235) have lower BE/nucleon (~7.6 MeV) than medium-mass nuclei (A ~ 56-120, ~8.5 MeV), so splitting into two lighter nuclei increases BE/nucleon and releases ~200 MeV energy.\n• Very light nuclei (A < 20, e.g. ²H) have very low BE/nucleon (~1–2 MeV); fusing into ⁴He (~7.1 MeV/nucleon) moves up the curve steeply, releasing huge energy.",
        "stepMarking": [
          {
            "step": "Mass defect & BE definitions",
            "marks": "1 Mark"
          },
          {
            "step": "Fission explanation via BE/A increase (7.6 -> 8.5 MeV)",
            "marks": "1 Mark"
          },
          {
            "step": "Fusion explanation via BE/A jump (H -> He)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Cite Iron-56 (Fe) peak at ~8.75 MeV/nucleon.",
        "commonPitfall": "Saying binding energy decreases after fission/fusion (total binding energy INCREASES!)."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Electrostatics: Electric Field on Equatorial Line of a Dipole",
        "questionText": "Derive an expression for the electric field intensity at a point on the equatorial plane (perpendicular bisector) of an electric dipole of dipole moment p = 2aq. What is the angle between E and p?",
        "modelAnswer": "Consider point P at distance r from centre O on equatorial line. Distance to +q and -q is √(r² + a²).\nMagnitudes: E₊ = E₋ = kq / (r² + a²).\nVertical components E₊sinθ and E₋sinθ are equal and opposite -> cancel out.\nHorizontal components add opposite to p: E_eq = 2 E₊ cosθ = [2kq / (r² + a²)] × [a / √(r² + a²)] = kp / (r² + a²)^(3/2).\nFor short dipole (r ≫ a): E_eq = p / (4πε₀ r³) directed OPPOSITE to p (angle = 180°).",
        "stepMarking": [
          {
            "step": "Vertical components cancel, horizontal add -> 2E₊cosθ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact & short-dipole result p/(4πε₀r³)",
            "marks": "1 Mark"
          },
          {
            "step": "Angle between E_eq and p = 180°",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Ratio check: E_axial / E_equatorial = 2 : 1 for short dipole at equal distance r!",
        "commonPitfall": "Writing angle 0° (axial) instead of 180° (equatorial)."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Current Electricity: Cells in Parallel Equivalent EMF & Internal Resistance",
        "questionText": "Two cells of EMFs E₁, E₂ and internal resistances r₁, r₂ are connected in parallel. Derive expressions for equivalent EMF (E_eq) and equivalent internal resistance (r_eq).",
        "modelAnswer": "Total current I = I₁ + I₂, with terminal voltage V identical across both cells:\nI₁ = (E₁ - V)/r₁ and I₂ = (E₂ - V)/r₂.\nI = (E₁/r₁ + E₂/r₂) - V(1/r₁ + 1/r₂).\nRearranging for V = E_eq - I r_eq:\n1/r_eq = 1/r₁ + 1/r₂ => r_eq = (r₁r₂)/(r₁ + r₂),\nE_eq / r_eq = E₁/r₁ + E₂/r₂ => E_eq = (E₁r₂ + E₂r₁) / (r₁ + r₂).",
        "stepMarking": [
          {
            "step": "Set I = I₁ + I₂ with shared V",
            "marks": "1 Mark"
          },
          {
            "step": "Derive 1/r_eq = 1/r₁ + 1/r₂",
            "marks": "1 Mark"
          },
          {
            "step": "Derive E_eq = (E₁r₂ + E₂r₁)/(r₁ + r₂)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Symmetrical form E_eq/r_eq = E₁/r₁ + E₂/r₂ is easiest to verify!",
        "commonPitfall": "Adding internal resistances in series inside E_eq denominator incorrectly."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Total Internal Reflection & Optical Fibres (Ray Optics)",
        "questionText": "Read the passage and answer:\nOptical fibres transmit high-bandwidth internet signals over thousands of kilometres via repeated Total Internal Reflection (TIR). Each fibre has a high-refractive-index glass core (n₁ = 1.68) surrounded by cladding of slightly lower refractive index (n₂ = 1.44).\n\n(a) State the two essential conditions for TIR to take place at the core-cladding boundary. (1M)\n(b) Calculate the critical angle (or sin i_c) at the core-cladding interface. (1M)\n(c) Why is cladding essential even though air outside has an even lower refractive index n = 1.0? Give two reasons. (2M)",
        "modelAnswer": "(a) 1. Light must travel from optically denser core (n₁) to optically rarer cladding (n₂).\n2. Angle of incidence at interface must exceed critical angle i_c.\n(b) sin i_c = n₂ / n₁ = 1.44 / 1.68 = 6/7 ≈ 0.857 => i_c = sin⁻¹(6/7) ≈ 59°.\n(c) 1. Cladding protects the delicate core surface from scratches, dust, and moisture that would ruin TIR.\n2. It prevents signal cross-talk between adjacent bundled fibres and restricts steep high-order modes so pulse dispersion is minimised.",
        "stepMarking": [
          {
            "step": "(a) Two TIR conditions",
            "marks": "1 Mark"
          },
          {
            "step": "(b) sin i_c = 1.44/1.68 = 6/7",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Physical protection + cross-talk/dispersion prevention",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never write sin i_c = 1/n₁ when cladding n₂ ≠ 1; always use n₂/n₁!",
        "commonPitfall": "Using air n = 1 instead of cladding n₂ = 1.44 in critical angle calculation."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Photoelectric Effect & Einstein's Equation",
        "questionText": "Read the passage and answer:\nWhen monochromatic light of wavelength 331 nm falls on a clean metal surface with work function φ₀ = 2.0 eV, photoelectrons are emitted (take h = 6.62 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J).\n\n(a) Calculate the energy of each incident photon in electron-volts (eV). (1.5M)\n(b) Find the maximum kinetic energy (in eV) of emitted photoelectrons and the stopping potential V₀. (1.5M)\n(c) Draw the variation of stopping potential V₀ vs incident frequency ν for two metals A and B (φ_A > φ_B). (1M)",
        "modelAnswer": "(a) E = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸) / (331 × 10⁻⁹) = 6 × 10⁻¹⁹ J.\nIn eV: E = 6 × 10⁻¹⁹ / (1.6 × 10⁻¹⁹) = 3.75 eV.\n(b) K_max = E - φ₀ = 3.75 - 2.0 = 1.75 eV. Hence stopping potential V₀ = 1.75 V.\n(c) Two parallel straight lines with identical slope h/e and higher x-intercept (threshold frequency ν₀) for metal A.",
        "stepMarking": [
          {
            "step": "(a) E = 3.75 eV",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) K_max = 1.75 eV & V₀ = 1.75 V",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Parallel lines of equal slope h/e",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Shortcut check: hc ≈ 1240 eV·nm => 1240 / 331 ≈ 3.75 eV!",
        "commonPitfall": "Drawing diverging lines for metals A and B (slope h/e is universal!)."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Wave Optics: Huygens Reflection/Refraction & Diffraction Single Slit",
        "questionText": "(a) Using Huygens' wave theory, verify Snell's law of refraction for a plane wavefront moving from rarer (speed v₁) to denser medium (speed v₂).\n(b) Why are diffraction minima formed at a sin θ = nλ in a single slit, whereas YDSE maxima occur at d sin θ = nλ? State one distinction between interference and diffraction fringes.",
        "modelAnswer": "(a) Plane wavefront AB hits boundary XY at A (angle i); wavelets from B reach C at time τ = BC/v₁, while secondary wavelet from A covers AD = v₂τ in denser medium.\nsin i = BC/AC = v₁τ/AC; sin r = AD/AC = v₂τ/AC.\nRatio sin i / sin r = v₁ / v₂ = n₂ / n₁ = constant (Snell's Law).\n(b) For single slit of width a, at a sin θ = λ, the slit splits into two halves differing in path by λ/2, cancelling pairwise destructively (similarly 2n halves for nλ) -> MINIMA! In YDSE, two point sources differing by nλ interfere constructively -> MAXIMA.\nDistinction: Interference fringes are of equal width & equal bright peak intensity; diffraction central maximum is twice as wide with rapidly falling secondary peak intensities.",
        "stepMarking": [
          {
            "step": "(a) Huygens wavefront geometry proving sin i/sin r = v₁/v₂",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Pairwise cancellation in diffraction vs YDSE + fringe contrast",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Remember: Central maximum width in single slit = 2λD/a (double the secondary fringe width λD/a!).",
        "commonPitfall": "Writing a sin θ = nλ as maxima for single slit."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Current Electricity: Wheatstone Bridge Balance Condition & Numerical",
        "questionText": "(a) Draw a circuit diagram of a balanced Wheatstone bridge and use Kirchhoff's rules to derive its balance condition P/Q = R/S.\n(b) Why is a Wheatstone bridge NOT suitable for measuring very high or very low resistances accurately?\n(c) Calculate the current drawn from a 6 V battery connected across a balanced bridge with P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω, and galvanometer G = 50 Ω.",
        "modelAnswer": "(a) At balance, I_g = 0 (V_B = V_D), so I₁ = I₃ and I₂ = I₄.\nLoop ABDA: -I₁P + I₂R = 0 => I₁P = I₂R ...(1)\nLoop BCDB: -I₁Q + I₂S = 0 => I₁Q = I₂S ...(2)\nDividing (1) by (2): P / Q = R / S.\n(b) For very low R, connecting lead/contact resistances become significant errors; for very high R, galvanometer current becomes too tiny for sensitive null detection.\n(c) Since 10/20 = 15/30, bridge is balanced -> ignore G = 50 Ω! Upper branch = 10 + 20 = 30 Ω; Lower branch = 15 + 30 = 45 Ω.\nR_eq = (30 × 45)/(30 + 45) = 1350/75 = 18 Ω. Current I = V/R_eq = 6/18 = 1/3 ≈ 0.33 A.",
        "stepMarking": [
          {
            "step": "(a) Circuit + KVL loop derivation of P/Q = R/S",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Contact resistance & sensitivity limitations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Balanced removal of G -> R_eq = 18 Ω, I = 0.33 A",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check P/Q = R/S FIRST in bridge resistor problems before computing I!",
        "commonPitfall": "Including G = 50 Ω in equivalent resistance when bridge is balanced."
      },
      {
        "id": "cbse-c12-phy-2023-set2-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "AC Circuits & Transformers: Phasor Diagram, Impedance & Transformer Losses",
        "questionText": "(a) Using a phasor diagram, derive the expression for impedance Z and phase angle φ of a series LCR circuit connected to AC voltage V = V₀ sin ωt.\n(b) Draw a labelled schematic of a step-up transformer and explain four main sources of energy loss in real transformers.",
        "modelAnswer": "(a) In series, current I is same across L, C, R. V_R is in phase with I, V_L leads I by 90°, V_C lags I by 90°.\nResultant voltage V = √[ V_R² + (V_L - V_C)² ] = I √[ R² + (X_L - X_C)² ].\nThus Z = V / I = √[ R² + (X_L - X_C)² ], and tan φ = (X_L - X_C) / R.\n(b) Step-up transformer has N_s > N_p on a laminated soft iron core.\nFour energy losses: (1) Flux leakage (minimize by winding coils over each other), (2) Copper I²R winding heating (use thick copper wire), (3) Eddy currents (use laminated iron sheets), (4) Hysteresis loss (use soft iron core with narrow hysteresis loop).",
        "stepMarking": [
          {
            "step": "(a) Phasor diagram + Z and tan φ derivations",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Step-up schematic + 4 losses & remedies",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Pair each transformer loss with how it is minimised (laminated core -> eddy currents; soft iron -> hysteresis).",
        "commonPitfall": "Confusing eddy current loss (laminated core) with hysteresis loss (soft iron material)."
      }
    ]
  },
  {
    "id": "cbse-c12-phy-2022-board",
    "title": "CBSE Class 12 Physics Board Examination 2022 (Full 70M)",
    "subject": "Physics",
    "targetClass": "Class 12",
    "year": 2022,
    "paperType": "BOARD_EXAM",
    "paperCode": "55/1/2",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-phy-2022-board-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Alternating Current: Power Factor at LCR Resonance",
        "questionText": "In a series LCR circuit at resonance (X_L = X_C), the phase difference between applied voltage and current, and the power factor cos φ are respectively:",
        "options": [
          "A) π/2 and 0",
          "B) 0 and 1",
          "C) π/4 and 1/√2",
          "D) π and -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At resonance X_L = X_C, so impedance Z = R (purely resistive), phase angle φ = 0°, and power factor cos φ = R/Z = 1.",
        "stepMarking": [
          {
            "step": "At resonance Z = R -> φ = 0, cos φ = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "At resonance, current is MAXIMUM (I = V/R) and power dissipated is maximum.",
        "commonPitfall": "Confusing resonant power factor (1) with wattless current circuit (cos φ = 0)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Waves: Displacement Current & Wave Vector",
        "questionText": "In a plane electromagnetic wave, the electric field oscillates along the +y axis and the wave propagates along the +x axis. The direction of the magnetic field oscillation is along:",
        "options": [
          "A) +x axis",
          "B) +y axis",
          "C) +z axis",
          "D) -y axis"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Propagation direction is along E × B. Since E is along +j and propagation is along +i, (+j) × (+k) = +i, so B must be along +k (+z axis).",
        "stepMarking": [
          {
            "step": "Check right-hand cross product E × B = +j × (+k) = +i",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always test right-hand rule E × B = propagation vector c.",
        "commonPitfall": "Picking -z axis without verifying j × k = +i."
      },
      {
        "id": "cbse-c12-phy-2022-board-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Ray Optics: Total Internal Reflection & Critical Angle",
        "questionText": "For total internal reflection to occur when light travels from glass (n = 1.5) to air, the angle of incidence in glass must be:",
        "options": [
          "A) Equal to 90°",
          "B) Greater than the critical angle (~41.8°)",
          "C) Less than the critical angle",
          "D) Equal to 0°"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Light must travel from denser (glass) to rarer (air) medium at i > i_c, where sin i_c = 1/1.5 = 2/3 => i_c ≈ 41.8°.",
        "stepMarking": [
          {
            "step": "Denser to rarer + i > i_c ≈ 41.8°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note BOTH necessary conditions for TIR: (1) Denser -> Rarer, (2) i > i_c.",
        "commonPitfall": "Forgetting denser-to-rarer medium requirement."
      },
      {
        "id": "cbse-c12-phy-2022-board-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: YDSE Fringe Width Scaling",
        "questionText": "In Young's double slit experiment, if slit separation d is halved and distance to screen D is doubled, the fringe width β becomes:",
        "options": [
          "A) Unchanged",
          "B) Doubled",
          "C) 4 times",
          "D) 1/4 times"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. β = λD / d. With D' = 2D and d' = d/2, β' = λ(2D)/(d/2) = 4 (λD/d) = 4β.",
        "stepMarking": [
          {
            "step": "β = λD/d -> (2) / (1/2) = 4 times",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember: immersing entire YDSE in water (refractive index n) shrinks β to β/n.",
        "commonPitfall": "Dividing by 2 instead of multiplying by 2 when d is halved."
      },
      {
        "id": "cbse-c12-phy-2022-board-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Dual Nature of Radiation: Stopping Potential & Frequency",
        "questionText": "In photoelectric effect, if the intensity of incident light (above threshold frequency) is doubled while keeping frequency constant, the stopping potential V₀:",
        "options": [
          "A) Doubles",
          "B) Halves",
          "C) Increases fourfold",
          "D) Remains unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Maximum KE and stopping potential (eV₀ = hν - φ₀) depend ONLY on frequency ν and work function φ₀, independent of intensity (which doubles photocurrent instead).",
        "stepMarking": [
          {
            "step": "Stopping potential depends on frequency, NOT intensity -> unchanged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Intensity -> Photocurrent; Frequency -> Stopping Potential / K_max.",
        "commonPitfall": "Thinking higher intensity gives higher K_max."
      },
      {
        "id": "cbse-c12-phy-2022-board-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductor Electronics: Intrinsic vs p-n Junction Barrier",
        "questionText": "When a p-n junction diode is forward biased, the width of the depletion layer and the barrier height:",
        "options": [
          "A) Both increase",
          "B) Both decrease",
          "C) Width increases, height decreases",
          "D) Remain unaffected"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Applied forward voltage V opposes the built-in potential V₀, reducing effective barrier height to (V₀ - V) and shrinking depletion layer width.",
        "stepMarking": [
          {
            "step": "Forward bias opposes built-in field -> both width & barrier decrease",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reverse bias does the exact opposite (increases both depletion width and barrier height).",
        "commonPitfall": "Thinking forward bias widens the depletion region."
      },
      {
        "id": "cbse-c12-phy-2022-board-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Nuclei: Binding Energy Curve & Nuclear Density",
        "questionText": "The ratio of nuclear radii of two nuclei having mass numbers 27 and 64 is:",
        "options": [
          "A) 27 : 64",
          "B) 9 : 16",
          "C) 3 : 4",
          "D) 4 : 3"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. R = R₀ A^(1/3). Thus R₁ / R₂ = (27/64)^(1/3) = 3 : 4.",
        "stepMarking": [
          {
            "step": "R ∝ A^(1/3) -> (27/64)^(1/3) = 3:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Nuclear density is completely INDEPENDENT of mass number A (~2.3 × 10¹⁷ kg/m³)!",
        "commonPitfall": "Taking square root instead of cube root."
      },
      {
        "id": "cbse-c12-phy-2022-board-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Electric Charges & Fields: Gauss Law Flux",
        "questionText": "A point charge +q is placed at a distance d/2 directly above the centre of a square of side d. What is the total electric flux passing through the square?",
        "options": [
          "A) q / ε₀",
          "B) q / (2ε₀)",
          "C) q / (6ε₀)",
          "D) q / (4ε₀)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Imagine constructing a symmetric cube of side d enclosing +q at its exact centre; the given square forms one of the 6 identical faces. By Gauss's law, flux through 1 face = q / (6ε₀).",
        "stepMarking": [
          {
            "step": "Construct symmetric enclosing cube -> 1/6 of total flux q/ε₀",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetry to close open surfaces into cubes, spheres, or cylinders for Gauss's law MCQs.",
        "commonPitfall": "Writing q/ε₀ for a single face."
      },
      {
        "id": "cbse-c12-phy-2022-board-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Electrostatic Potential & Capacitance: Dielectric Insertion",
        "questionText": "A parallel-plate capacitor is charged by a battery and then disconnected. A dielectric slab of dielectric constant K is now inserted to fill the gap completely. Which statement is TRUE?",
        "options": [
          "A) Charge decreases K times",
          "B) Potential difference and Energy stored both decrease K times",
          "C) Capacitance decreases K times",
          "D) Electric field increases K times"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Once disconnected, charge Q stays constant. Capacitance increases K times (C' = KC), so V' = Q/C' = V/K and energy U' = Q²/(2C') = U/K both decrease K times.",
        "stepMarking": [
          {
            "step": "Disconnected => Q const, C'=KC => V'=V/K and U'=U/K",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish \"Battery Disconnected\" (Q constant) from \"Battery Connected\" (V constant, U increases K times)!",
        "commonPitfall": "Confusing Q-constant vs V-constant capacitor cases."
      },
      {
        "id": "cbse-c12-phy-2022-board-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Mobility & Drift Velocity",
        "questionText": "Two wires of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. Connected in series to a battery, the ratio of drift velocities of electrons in them is:",
        "options": [
          "A) 1 : 4",
          "B) 4 : 1",
          "C) 1 : 2",
          "D) 2 : 1"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In series, current I is same. I = n e A v_d => v_d ∝ 1/A ∝ 1/r². Thus v_d1 / v_d2 = (r₂ / r₁)² = (1 / 2)² = 1 : 4.",
        "stepMarking": [
          {
            "step": "Series same I => v_d ∝ 1/r² => (1/2)² = 1:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, drift speed depends ONLY on cross-sectional area (independent of wire length!).",
        "commonPitfall": "Including length ratio in v_d comparison."
      },
      {
        "id": "cbse-c12-phy-2022-board-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Moving Charges & Magnetism: Lorentz Force Trajectory",
        "questionText": "A proton and an alpha-particle (both accelerated through the same potential difference V) enter a uniform perpendicular magnetic field B. The ratio of radii of their circular paths (r_p : r_α) is:",
        "options": [
          "A) 1 : 2",
          "B) 1 : √2",
          "C) √2 : 1",
          "D) 2 : 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radius r = mv/(qB) = √(2mK)/(qB) = √(2mqV)/(qB) = (1/B)√(2mV/q). Since m_α = 4m_p and q_α = 2q_p, r_p / r_α = √[(m_p/q_p)/(4m_p/2q_p)] = √(1/2) = 1 : √2.",
        "stepMarking": [
          {
            "step": "Use r ∝ √(m/q) for same V -> 1 : √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Same speed -> r ∝ m/q; Same momentum -> r ∝ 1/q; Same V -> r ∝ √(m/q)!",
        "commonPitfall": "Using r ∝ m/q (which holds for equal velocity, not equal accelerating potential)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Magnetism & Matter: Diamagnetic vs Ferromagnetic Susceptibility",
        "questionText": "For a diamagnetic material, the magnetic susceptibility χ and relative permeability μ_r satisfy:",
        "options": [
          "A) χ > 0, μ_r > 1",
          "B) -1 ≤ χ < 0, 0 ≤ μ_r < 1",
          "C) χ ≫ 1, μ_r ≫ 1",
          "D) χ = 0, μ_r = 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diamagnetic substances are feebly repelled by magnets: -1 ≤ χ < 0 and 0 ≤ μ_r = 1 + χ < 1 (for superconductors, χ = -1 and μ_r = 0).",
        "stepMarking": [
          {
            "step": "Small negative χ (-1 ≤ χ < 0) and 0 ≤ μ_r < 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Diamagnetic susceptibility is independent of temperature (except Bi/superconductors).",
        "commonPitfall": "Saying χ is positive for diamagnets."
      },
      {
        "id": "cbse-c12-phy-2022-board-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductors: Temperature Effect on Resistivity",
        "questionText": "Assertion (A): Electrical conductivity of an intrinsic semiconductor increases rapidly with rise in temperature.\nReason (R): Rising temperature breaks covalent bonds, increasing charge-carrier concentration (n_e and n_h) exponentially, which outweighs decrease in relaxation time.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In semiconductors, exponential growth in carrier density n dominates over τ decrease, giving negative temperature coefficient of resistivity (α < 0).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting carrier surge vs τ drop",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Metals have α > 0 (ρ rises with T); Semiconductors have α < 0 (ρ drops with T).",
        "commonPitfall": "Applying metallic resistance reasoning to semiconductors."
      },
      {
        "id": "cbse-c12-phy-2022-board-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Internal Resistance & Terminal Voltage",
        "questionText": "Assertion (A): During charging of a secondary cell, the terminal potential difference across it exceeds its EMF (V > E).\nReason (R): While charging, current enters the positive terminal of the cell, so V = E + Ir.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. While discharging V = E - Ir (< E), whereas while charging current flows against EMF so V = E + Ir (> E).",
        "stepMarking": [
          {
            "step": "Option (A) citing V = E + Ir during charging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Discharging: V = E - Ir; Open circuit: V = E; Charging: V = E + Ir.",
        "commonPitfall": "Assuming V is always less than E."
      },
      {
        "id": "cbse-c12-phy-2022-board-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: Coherent Sources Necessity",
        "questionText": "Assertion (A): Two independent identical sodium lamps cannot produce a sustained interference pattern.\nReason (R): Independent light sources emit wave trains with rapidly and randomly varying phase differences, making them incoherent.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Sustained interference requires a constant phase difference (coherence), achievable only when both interfering waves originate from the same parent source.",
        "stepMarking": [
          {
            "step": "Option (A) citing random phase variation of independent sources",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Key term: \"constant phase difference over time\".",
        "commonPitfall": "Thinking matching frequency alone ensures coherence."
      },
      {
        "id": "cbse-c12-phy-2022-board-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Atoms: Bohr Radius & Energy Proportionality",
        "questionText": "Assertion (A): The total energy of an electron in the nth stationary orbit of hydrogen atom is negative.\nReason (R): Negative total energy indicates that the electron is bound to the nucleus by electrostatic attraction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Eₙ = -13.6/n² eV; negative sign signifies the bound state (positive work must be supplied to free the electron to E = 0).",
        "stepMarking": [
          {
            "step": "Option (A) explaining bound system energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice KE = -E = +13.6/n² eV (positive!) and PE = 2E = -27.2/n² eV.",
        "commonPitfall": "Thinking negative energy violates conservation."
      },
      {
        "id": "cbse-c12-phy-2022-board-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Dual Nature: De Broglie Wavelength of Accelerated Electron",
        "questionText": "Find the ratio of de Broglie wavelengths associated with an electron and an alpha-particle when both are accelerated from rest through the same potential difference V.",
        "modelAnswer": "λ = h / √(2 m q V).\nFor same V: λ_e / λ_α = √[(m_α · q_α) / (m_e · q_e)].\nSince m_α ≈ 4 × 1836 m_e and q_α = 2 e, λ_e / λ_α = √(8 × 1836) ≈ 121.2 : 1 (much larger for electron due to tiny mass).",
        "stepMarking": [
          {
            "step": "Formula λ = h/√(2mqV)",
            "marks": "1 Mark"
          },
          {
            "step": "Ratio expression √(m_α q_α / m_e q_e)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For electron only: λ (in Å) ≈ 12.27 / √V.",
        "commonPitfall": "Using λ ∝ √(q/m) instead of 1/√(mq)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Semiconductors: Half-Wave vs Full-Wave Rectifier",
        "questionText": "Draw the output waveform of a full-wave rectifier for a sinusoidal AC input of 50 Hz, and state the fundamental ripple frequency of its pulsating DC output.",
        "modelAnswer": "Full-wave rectifier converts both positive and negative half cycles of AC input into unidirectional positive pulses.\nSince two output pulses occur per input AC cycle, output ripple frequency = 2 × 50 Hz = 100 Hz.",
        "stepMarking": [
          {
            "step": "Both half-cycles rectified positive waveform",
            "marks": "1 Mark"
          },
          {
            "step": "Output frequency = 2 × 50 = 100 Hz",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Half-wave output frequency = f (50 Hz); Full-wave output frequency = 2f (100 Hz).",
        "commonPitfall": "Writing 50 Hz for full-wave rectifier."
      },
      {
        "id": "cbse-c12-phy-2022-board-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Electrostatic Potential: Equipotential Surfaces Properties",
        "questionText": "Draw equipotential surfaces for (i) an isolated positive point charge and (ii) a uniform electric field along the +x axis. Why can two equipotential surfaces never intersect?",
        "modelAnswer": "(i) Concentric spherical shells centred on +q (spacing increases outward since E decreases).\n(ii) Parallel planes perpendicular to x-axis (parallel to YZ-plane) equally spaced.\nNon-intersection: If two equipotential surfaces intersected, there would be two different values of electric potential (and two normal field directions) at the point of intersection, which is impossible.",
        "stepMarking": [
          {
            "step": "Spherical & parallel planar equipotentials described",
            "marks": "1 Mark"
          },
          {
            "step": "Contradiction of two potentials/directions at intersection",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember spacing between equipotentials Δr ∝ 1/E: closer surfaces mean stronger electric field!",
        "commonPitfall": "Drawing equally spaced circles for a point charge."
      },
      {
        "id": "cbse-c12-phy-2022-board-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Current Electricity: Kirchhoff Rules & Wheatstone Bridge",
        "questionText": "State Kirchhoff's Junction Rule and Loop Rule along with the physical conservation laws they represent.",
        "modelAnswer": "1. Junction Rule (KCL): At any circuit junction, algebraic sum of currents meeting is zero (ΣI = 0). Based on Conservation of Charge.\n2. Loop Rule (KVL): Around any closed circuit loop, algebraic sum of potential changes across resistors and EMFs is zero (ΣΔV = 0). Based on Conservation of Energy.",
        "stepMarking": [
          {
            "step": "Junction rule + Conservation of Charge",
            "marks": "1 Mark"
          },
          {
            "step": "Loop rule + Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state the underlying conservation principle cleanly.",
        "commonPitfall": "Mixing up charge conservation and energy conservation."
      },
      {
        "id": "cbse-c12-phy-2022-board-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Magnetism: Moving Coil Galvanometer to Ammeter Conversion",
        "questionText": "A galvanometer of coil resistance 15 Ω shows full-scale deflection for a current of 4 mA. How will you convert it into an ammeter of range 0 to 6 A?",
        "modelAnswer": "Connect a low-resistance shunt S in PARALLEL with the galvanometer.\nS = (I_g · G) / (I - I_g) = (0.004 × 15) / (6 - 0.004) = 0.06 / 5.996 ≈ 0.01 Ω (or 10 mΩ).",
        "stepMarking": [
          {
            "step": "Parallel shunt formula S = Ig·G/(I - Ig)",
            "marks": "1 Mark"
          },
          {
            "step": "Correct value S = 0.01 Ω in parallel",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ammeter = low shunt in PARALLEL; Voltmeter = high resistor in SERIES.",
        "commonPitfall": "Connecting shunt in series or ignoring mA to A conversion."
      },
      {
        "id": "cbse-c12-phy-2022-board-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Electromagnetic Induction: Motional EMF & Faraday's Laws",
        "questionText": "Derive the expression for motional EMF induced across the ends of a straight conductor of length l moving with uniform velocity v perpendicular to a uniform magnetic field B. Hence find power dissipated if connected to resistance R.",
        "modelAnswer": "Consider rectangular loop PQRS with movable arm PQ of length l moving outward at speed v. Area increases at dA/dt = l dx/dt = l v.\nMagnetic flux Φ_B = B · A = B l x.\nBy Faraday's law, magnitude of induced EMF: e = |dΦ_B/dt| = B l (dx/dt) = B l v.\n(Alternative via Lorentz force: qvB = qE = q(e/l) => e = B l v.)\nCurrent I = B l v / R; Mechanical Force needed F = I l B = B²l²v / R; Power = F v = I² R = B²l²v² / R.",
        "stepMarking": [
          {
            "step": "Derive e = B l v via flux or Lorentz force",
            "marks": "2 Marks"
          },
          {
            "step": "Current I = Blv/R and Power P = B²l²v²/R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both Faraday flux method and Lorentz force method earn full marks.",
        "commonPitfall": "Forgetting B, l, v must be mutually perpendicular for full Blv."
      },
      {
        "id": "cbse-c12-phy-2022-board-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Ray Optics: Lens Maker's Formula Derivation",
        "questionText": "Derive the Lens Maker's formula 1/f = (n - 1)(1/R₁ - 1/R₂) for a thin convex lens of refractive index n placed in air.",
        "modelAnswer": "First spherical surface (radius R₁, air -> glass): n/v₁ - 1/u = (n - 1)/R₁ ...(1)\nSecond spherical surface (radius R₂, glass -> air, virtual object v₁): 1/v - n/v₁ = (1 - n)/R₂ ...(2)\nAdding (1) and (2) cancels n/v₁:\n1/v - 1/u = (n - 1)(1/R₁ - 1/R₂).\nFor u = ∞, v = f => 1/f = (n - 1)(1/R₁ - 1/R₂).",
        "stepMarking": [
          {
            "step": "Refraction equation at first surface",
            "marks": "1 Mark"
          },
          {
            "step": "Refraction at second surface (n₁=n, n₂=1)",
            "marks": "1 Mark"
          },
          {
            "step": "Add equations & set u=∞, v=f",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the thin-lens assumption (negligible thickness) before using v₁ directly in Eq(2)!",
        "commonPitfall": "Forgetting sign reversal (1 - n)/R₂ at the second interface."
      },
      {
        "id": "cbse-c12-phy-2022-board-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Atoms: Bohr Radius & Hydrogen Energy Levels",
        "questionText": "Using Bohr's postulates, derive the expression for the radius of the nth stationary orbit and total energy of the electron in a hydrogen atom.",
        "modelAnswer": "1. Electrostatic centripetal balance: m v² / r = k e² / r² => m v² r = k e² ...(1)\n2. Bohr quantisation: m v r = n h / (2π) => v = nh / (2πmr) ...(2)\nSubstituting (2) into (1): rₙ = (n² h²) / (4π² m k e²) = (ε₀ n² h²) / (π m e²) ≈ 0.529 n² Å.\nTotal Energy Eₙ = KE + PE = k e²/(2rₙ) - k e²/rₙ = -k e² / (2rₙ) = - (m e⁴) / (8 ε₀² h² n²) = -13.6 / n² eV.",
        "stepMarking": [
          {
            "step": "Centripetal + Bohr angular momentum equations",
            "marks": "1 Mark"
          },
          {
            "step": "Derive rₙ ∝ n²",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Eₙ = -13.6/n² eV",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show KE = +ke²/(2r) and PE = -ke²/r explicitly so E = -ke²/(2r) is clear.",
        "commonPitfall": "Writing KE = -PE instead of KE = -PE/2."
      },
      {
        "id": "cbse-c12-phy-2022-board-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Nuclei: Mass Defect, Binding Energy & Fission vs Fusion",
        "questionText": "Define mass defect and nuclear binding energy. Explain why heavy nuclei undergo nuclear fission while very light nuclei undergo nuclear fusion, referring to the Binding Energy per nucleon curve.",
        "modelAnswer": "Mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus.\nBinding Energy BE = Δm · c² (energy required to break nucleus into free nucleons).\n• Heavy nuclei (A > 170, e.g. U-235) have lower BE/nucleon (~7.6 MeV) than medium-mass nuclei (A ~ 56-120, ~8.5 MeV), so splitting into two lighter nuclei increases BE/nucleon and releases ~200 MeV energy.\n• Very light nuclei (A < 20, e.g. ²H) have very low BE/nucleon (~1–2 MeV); fusing into ⁴He (~7.1 MeV/nucleon) moves up the curve steeply, releasing huge energy.",
        "stepMarking": [
          {
            "step": "Mass defect & BE definitions",
            "marks": "1 Mark"
          },
          {
            "step": "Fission explanation via BE/A increase (7.6 -> 8.5 MeV)",
            "marks": "1 Mark"
          },
          {
            "step": "Fusion explanation via BE/A jump (H -> He)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Cite Iron-56 (Fe) peak at ~8.75 MeV/nucleon.",
        "commonPitfall": "Saying binding energy decreases after fission/fusion (total binding energy INCREASES!)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Electrostatics: Electric Field on Equatorial Line of a Dipole",
        "questionText": "Derive an expression for the electric field intensity at a point on the equatorial plane (perpendicular bisector) of an electric dipole of dipole moment p = 2aq. What is the angle between E and p?",
        "modelAnswer": "Consider point P at distance r from centre O on equatorial line. Distance to +q and -q is √(r² + a²).\nMagnitudes: E₊ = E₋ = kq / (r² + a²).\nVertical components E₊sinθ and E₋sinθ are equal and opposite -> cancel out.\nHorizontal components add opposite to p: E_eq = 2 E₊ cosθ = [2kq / (r² + a²)] × [a / √(r² + a²)] = kp / (r² + a²)^(3/2).\nFor short dipole (r ≫ a): E_eq = p / (4πε₀ r³) directed OPPOSITE to p (angle = 180°).",
        "stepMarking": [
          {
            "step": "Vertical components cancel, horizontal add -> 2E₊cosθ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact & short-dipole result p/(4πε₀r³)",
            "marks": "1 Mark"
          },
          {
            "step": "Angle between E_eq and p = 180°",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Ratio check: E_axial / E_equatorial = 2 : 1 for short dipole at equal distance r!",
        "commonPitfall": "Writing angle 0° (axial) instead of 180° (equatorial)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Current Electricity: Cells in Parallel Equivalent EMF & Internal Resistance",
        "questionText": "Two cells of EMFs E₁, E₂ and internal resistances r₁, r₂ are connected in parallel. Derive expressions for equivalent EMF (E_eq) and equivalent internal resistance (r_eq).",
        "modelAnswer": "Total current I = I₁ + I₂, with terminal voltage V identical across both cells:\nI₁ = (E₁ - V)/r₁ and I₂ = (E₂ - V)/r₂.\nI = (E₁/r₁ + E₂/r₂) - V(1/r₁ + 1/r₂).\nRearranging for V = E_eq - I r_eq:\n1/r_eq = 1/r₁ + 1/r₂ => r_eq = (r₁r₂)/(r₁ + r₂),\nE_eq / r_eq = E₁/r₁ + E₂/r₂ => E_eq = (E₁r₂ + E₂r₁) / (r₁ + r₂).",
        "stepMarking": [
          {
            "step": "Set I = I₁ + I₂ with shared V",
            "marks": "1 Mark"
          },
          {
            "step": "Derive 1/r_eq = 1/r₁ + 1/r₂",
            "marks": "1 Mark"
          },
          {
            "step": "Derive E_eq = (E₁r₂ + E₂r₁)/(r₁ + r₂)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Symmetrical form E_eq/r_eq = E₁/r₁ + E₂/r₂ is easiest to verify!",
        "commonPitfall": "Adding internal resistances in series inside E_eq denominator incorrectly."
      },
      {
        "id": "cbse-c12-phy-2022-board-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Moving Charges & Magnetism: Biot-Savart Magnetic Field on Loop Axis",
        "questionText": "Using Biot-Savart law, derive the expression for magnetic field at an axial point x from the centre of a circular loop of radius R carrying current I.",
        "modelAnswer": "Consider current element dl at top of loop; distance to axial point P is r = √(R² + x²), with dl ⊥ r.\ndB = (μ₀ I dl) / (4π (R² + x²)).\nSymmetry: perpendicular components dB cosθ cancel; axial components dB sinθ (where sinθ = R / √(R² + x²)) sum over circumference 2πR:\nB = ∫ dB sinθ = [μ₀ I R / (4π (R² + x²)^(3/2))] × (2πR) = μ₀ I R² / [2 (R² + x²)^(3/2)] directed along loop axis.",
        "stepMarking": [
          {
            "step": "Biot-Savart dB element + perpendicular components cancel",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate axial component dB sinθ over 2πR -> final formula",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check special case x = 0: reduces cleanly to B_centre = μ₀I / (2R)!",
        "commonPitfall": "Using cosθ instead of sinθ for axial component without matching angle θ definition."
      },
      {
        "id": "cbse-c12-phy-2022-board-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Photoelectric Effect & Einstein's Equation",
        "questionText": "Read the passage and answer:\nWhen monochromatic light of wavelength 331 nm falls on a clean metal surface with work function φ₀ = 2.0 eV, photoelectrons are emitted (take h = 6.62 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J).\n\n(a) Calculate the energy of each incident photon in electron-volts (eV). (1.5M)\n(b) Find the maximum kinetic energy (in eV) of emitted photoelectrons and the stopping potential V₀. (1.5M)\n(c) Draw the variation of stopping potential V₀ vs incident frequency ν for two metals A and B (φ_A > φ_B). (1M)",
        "modelAnswer": "(a) E = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸) / (331 × 10⁻⁹) = 6 × 10⁻¹⁹ J.\nIn eV: E = 6 × 10⁻¹⁹ / (1.6 × 10⁻¹⁹) = 3.75 eV.\n(b) K_max = E - φ₀ = 3.75 - 2.0 = 1.75 eV. Hence stopping potential V₀ = 1.75 V.\n(c) Two parallel straight lines with identical slope h/e and higher x-intercept (threshold frequency ν₀) for metal A.",
        "stepMarking": [
          {
            "step": "(a) E = 3.75 eV",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) K_max = 1.75 eV & V₀ = 1.75 V",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Parallel lines of equal slope h/e",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Shortcut check: hc ≈ 1240 eV·nm => 1240 / 331 ≈ 3.75 eV!",
        "commonPitfall": "Drawing diverging lines for metals A and B (slope h/e is universal!)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Total Internal Reflection & Optical Fibres (Ray Optics)",
        "questionText": "Read the passage and answer:\nOptical fibres transmit high-bandwidth internet signals over thousands of kilometres via repeated Total Internal Reflection (TIR). Each fibre has a high-refractive-index glass core (n₁ = 1.68) surrounded by cladding of slightly lower refractive index (n₂ = 1.44).\n\n(a) State the two essential conditions for TIR to take place at the core-cladding boundary. (1M)\n(b) Calculate the critical angle (or sin i_c) at the core-cladding interface. (1M)\n(c) Why is cladding essential even though air outside has an even lower refractive index n = 1.0? Give two reasons. (2M)",
        "modelAnswer": "(a) 1. Light must travel from optically denser core (n₁) to optically rarer cladding (n₂).\n2. Angle of incidence at interface must exceed critical angle i_c.\n(b) sin i_c = n₂ / n₁ = 1.44 / 1.68 = 6/7 ≈ 0.857 => i_c = sin⁻¹(6/7) ≈ 59°.\n(c) 1. Cladding protects the delicate core surface from scratches, dust, and moisture that would ruin TIR.\n2. It prevents signal cross-talk between adjacent bundled fibres and restricts steep high-order modes so pulse dispersion is minimised.",
        "stepMarking": [
          {
            "step": "(a) Two TIR conditions",
            "marks": "1 Mark"
          },
          {
            "step": "(b) sin i_c = 1.44/1.68 = 6/7",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Physical protection + cross-talk/dispersion prevention",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never write sin i_c = 1/n₁ when cladding n₂ ≠ 1; always use n₂/n₁!",
        "commonPitfall": "Using air n = 1 instead of cladding n₂ = 1.44 in critical angle calculation."
      },
      {
        "id": "cbse-c12-phy-2022-board-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "Current Electricity: Wheatstone Bridge Balance Condition & Numerical",
        "questionText": "(a) Draw a circuit diagram of a balanced Wheatstone bridge and use Kirchhoff's rules to derive its balance condition P/Q = R/S.\n(b) Why is a Wheatstone bridge NOT suitable for measuring very high or very low resistances accurately?\n(c) Calculate the current drawn from a 6 V battery connected across a balanced bridge with P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω, and galvanometer G = 50 Ω.",
        "modelAnswer": "(a) At balance, I_g = 0 (V_B = V_D), so I₁ = I₃ and I₂ = I₄.\nLoop ABDA: -I₁P + I₂R = 0 => I₁P = I₂R ...(1)\nLoop BCDB: -I₁Q + I₂S = 0 => I₁Q = I₂S ...(2)\nDividing (1) by (2): P / Q = R / S.\n(b) For very low R, connecting lead/contact resistances become significant errors; for very high R, galvanometer current becomes too tiny for sensitive null detection.\n(c) Since 10/20 = 15/30, bridge is balanced -> ignore G = 50 Ω! Upper branch = 10 + 20 = 30 Ω; Lower branch = 15 + 30 = 45 Ω.\nR_eq = (30 × 45)/(30 + 45) = 1350/75 = 18 Ω. Current I = V/R_eq = 6/18 = 1/3 ≈ 0.33 A.",
        "stepMarking": [
          {
            "step": "(a) Circuit + KVL loop derivation of P/Q = R/S",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Contact resistance & sensitivity limitations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Balanced removal of G -> R_eq = 18 Ω, I = 0.33 A",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check P/Q = R/S FIRST in bridge resistor problems before computing I!",
        "commonPitfall": "Including G = 50 Ω in equivalent resistance when bridge is balanced."
      },
      {
        "id": "cbse-c12-phy-2022-board-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "AC Circuits & Transformers: Phasor Diagram, Impedance & Transformer Losses",
        "questionText": "(a) Using a phasor diagram, derive the expression for impedance Z and phase angle φ of a series LCR circuit connected to AC voltage V = V₀ sin ωt.\n(b) Draw a labelled schematic of a step-up transformer and explain four main sources of energy loss in real transformers.",
        "modelAnswer": "(a) In series, current I is same across L, C, R. V_R is in phase with I, V_L leads I by 90°, V_C lags I by 90°.\nResultant voltage V = √[ V_R² + (V_L - V_C)² ] = I √[ R² + (X_L - X_C)² ].\nThus Z = V / I = √[ R² + (X_L - X_C)² ], and tan φ = (X_L - X_C) / R.\n(b) Step-up transformer has N_s > N_p on a laminated soft iron core.\nFour energy losses: (1) Flux leakage (minimize by winding coils over each other), (2) Copper I²R winding heating (use thick copper wire), (3) Eddy currents (use laminated iron sheets), (4) Hysteresis loss (use soft iron core with narrow hysteresis loop).",
        "stepMarking": [
          {
            "step": "(a) Phasor diagram + Z and tan φ derivations",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Step-up schematic + 4 losses & remedies",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Pair each transformer loss with how it is minimised (laminated core -> eddy currents; soft iron -> hysteresis).",
        "commonPitfall": "Confusing eddy current loss (laminated core) with hysteresis loss (soft iron material)."
      },
      {
        "id": "cbse-c12-phy-2022-board-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Wave Optics: Huygens Reflection/Refraction & Diffraction Single Slit",
        "questionText": "(a) Using Huygens' wave theory, verify Snell's law of refraction for a plane wavefront moving from rarer (speed v₁) to denser medium (speed v₂).\n(b) Why are diffraction minima formed at a sin θ = nλ in a single slit, whereas YDSE maxima occur at d sin θ = nλ? State one distinction between interference and diffraction fringes.",
        "modelAnswer": "(a) Plane wavefront AB hits boundary XY at A (angle i); wavelets from B reach C at time τ = BC/v₁, while secondary wavelet from A covers AD = v₂τ in denser medium.\nsin i = BC/AC = v₁τ/AC; sin r = AD/AC = v₂τ/AC.\nRatio sin i / sin r = v₁ / v₂ = n₂ / n₁ = constant (Snell's Law).\n(b) For single slit of width a, at a sin θ = λ, the slit splits into two halves differing in path by λ/2, cancelling pairwise destructively (similarly 2n halves for nλ) -> MINIMA! In YDSE, two point sources differing by nλ interfere constructively -> MAXIMA.\nDistinction: Interference fringes are of equal width & equal bright peak intensity; diffraction central maximum is twice as wide with rapidly falling secondary peak intensities.",
        "stepMarking": [
          {
            "step": "(a) Huygens wavefront geometry proving sin i/sin r = v₁/v₂",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Pairwise cancellation in diffraction vs YDSE + fringe contrast",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Remember: Central maximum width in single slit = 2λD/a (double the secondary fringe width λD/a!).",
        "commonPitfall": "Writing a sin θ = nλ as maxima for single slit."
      }
    ]
  },
  {
    "id": "cbse-c12-phy-2023-sqp",
    "title": "CBSE Class 12 Physics Official Sample Paper (2023-24 Blueprint)",
    "subject": "Physics",
    "targetClass": "Class 12",
    "year": 2023,
    "paperType": "CBSE_SAMPLE",
    "paperCode": "SQP-2023-24/042",
    "totalMarks": 70,
    "durationMins": 180,
    "difficulty": "MODERATE",
    "isFree": false,
    "totalQuestions": 33,
    "generalInstructions": [
      "This question paper contains 33 questions in 5 sections: Section A to Section E (Total 70 Marks).",
      "Section A: 16 questions (12 MCQs + 4 Assertion-Reason) of 1 mark each.",
      "Section B: 5 questions of 2 marks each.",
      "Section C: 7 questions of 3 marks each.",
      "Section D: 2 Case Study-based questions of 4 marks each.",
      "Section E: 3 Long Answer questions of 5 marks each."
    ],
    "questions": [
      {
        "id": "cbse-c12-phy-2023-sqp-q1",
        "qNum": 1,
        "section": "A",
        "marks": 1,
        "topic": "Ray Optics: Total Internal Reflection & Critical Angle",
        "questionText": "For total internal reflection to occur when light travels from glass (n = 1.5) to air, the angle of incidence in glass must be:",
        "options": [
          "A) Equal to 90°",
          "B) Greater than the critical angle (~41.8°)",
          "C) Less than the critical angle",
          "D) Equal to 0°"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Light must travel from denser (glass) to rarer (air) medium at i > i_c, where sin i_c = 1/1.5 = 2/3 => i_c ≈ 41.8°.",
        "stepMarking": [
          {
            "step": "Denser to rarer + i > i_c ≈ 41.8°",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Note BOTH necessary conditions for TIR: (1) Denser -> Rarer, (2) i > i_c.",
        "commonPitfall": "Forgetting denser-to-rarer medium requirement."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q2",
        "qNum": 2,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: YDSE Fringe Width Scaling",
        "questionText": "In Young's double slit experiment, if slit separation d is halved and distance to screen D is doubled, the fringe width β becomes:",
        "options": [
          "A) Unchanged",
          "B) Doubled",
          "C) 4 times",
          "D) 1/4 times"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. β = λD / d. With D' = 2D and d' = d/2, β' = λ(2D)/(d/2) = 4 (λD/d) = 4β.",
        "stepMarking": [
          {
            "step": "β = λD/d -> (2) / (1/2) = 4 times",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Also remember: immersing entire YDSE in water (refractive index n) shrinks β to β/n.",
        "commonPitfall": "Dividing by 2 instead of multiplying by 2 when d is halved."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q3",
        "qNum": 3,
        "section": "A",
        "marks": 1,
        "topic": "Dual Nature of Radiation: Stopping Potential & Frequency",
        "questionText": "In photoelectric effect, if the intensity of incident light (above threshold frequency) is doubled while keeping frequency constant, the stopping potential V₀:",
        "options": [
          "A) Doubles",
          "B) Halves",
          "C) Increases fourfold",
          "D) Remains unchanged"
        ],
        "correctOption": "D",
        "modelAnswer": "Option (D) is correct. Maximum KE and stopping potential (eV₀ = hν - φ₀) depend ONLY on frequency ν and work function φ₀, independent of intensity (which doubles photocurrent instead).",
        "stepMarking": [
          {
            "step": "Stopping potential depends on frequency, NOT intensity -> unchanged",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Intensity -> Photocurrent; Frequency -> Stopping Potential / K_max.",
        "commonPitfall": "Thinking higher intensity gives higher K_max."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q4",
        "qNum": 4,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductor Electronics: Intrinsic vs p-n Junction Barrier",
        "questionText": "When a p-n junction diode is forward biased, the width of the depletion layer and the barrier height:",
        "options": [
          "A) Both increase",
          "B) Both decrease",
          "C) Width increases, height decreases",
          "D) Remain unaffected"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Applied forward voltage V opposes the built-in potential V₀, reducing effective barrier height to (V₀ - V) and shrinking depletion layer width.",
        "stepMarking": [
          {
            "step": "Forward bias opposes built-in field -> both width & barrier decrease",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Reverse bias does the exact opposite (increases both depletion width and barrier height).",
        "commonPitfall": "Thinking forward bias widens the depletion region."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q5",
        "qNum": 5,
        "section": "A",
        "marks": 1,
        "topic": "Nuclei: Binding Energy Curve & Nuclear Density",
        "questionText": "The ratio of nuclear radii of two nuclei having mass numbers 27 and 64 is:",
        "options": [
          "A) 27 : 64",
          "B) 9 : 16",
          "C) 3 : 4",
          "D) 4 : 3"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. R = R₀ A^(1/3). Thus R₁ / R₂ = (27/64)^(1/3) = 3 : 4.",
        "stepMarking": [
          {
            "step": "R ∝ A^(1/3) -> (27/64)^(1/3) = 3:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Nuclear density is completely INDEPENDENT of mass number A (~2.3 × 10¹⁷ kg/m³)!",
        "commonPitfall": "Taking square root instead of cube root."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q6",
        "qNum": 6,
        "section": "A",
        "marks": 1,
        "topic": "Electric Charges & Fields: Gauss Law Flux",
        "questionText": "A point charge +q is placed at a distance d/2 directly above the centre of a square of side d. What is the total electric flux passing through the square?",
        "options": [
          "A) q / ε₀",
          "B) q / (2ε₀)",
          "C) q / (6ε₀)",
          "D) q / (4ε₀)"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Imagine constructing a symmetric cube of side d enclosing +q at its exact centre; the given square forms one of the 6 identical faces. By Gauss's law, flux through 1 face = q / (6ε₀).",
        "stepMarking": [
          {
            "step": "Construct symmetric enclosing cube -> 1/6 of total flux q/ε₀",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Use symmetry to close open surfaces into cubes, spheres, or cylinders for Gauss's law MCQs.",
        "commonPitfall": "Writing q/ε₀ for a single face."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q7",
        "qNum": 7,
        "section": "A",
        "marks": 1,
        "topic": "Electrostatic Potential & Capacitance: Dielectric Insertion",
        "questionText": "A parallel-plate capacitor is charged by a battery and then disconnected. A dielectric slab of dielectric constant K is now inserted to fill the gap completely. Which statement is TRUE?",
        "options": [
          "A) Charge decreases K times",
          "B) Potential difference and Energy stored both decrease K times",
          "C) Capacitance decreases K times",
          "D) Electric field increases K times"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Once disconnected, charge Q stays constant. Capacitance increases K times (C' = KC), so V' = Q/C' = V/K and energy U' = Q²/(2C') = U/K both decrease K times.",
        "stepMarking": [
          {
            "step": "Disconnected => Q const, C'=KC => V'=V/K and U'=U/K",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Distinguish \"Battery Disconnected\" (Q constant) from \"Battery Connected\" (V constant, U increases K times)!",
        "commonPitfall": "Confusing Q-constant vs V-constant capacitor cases."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q8",
        "qNum": 8,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Mobility & Drift Velocity",
        "questionText": "Two wires of the same material have lengths in the ratio 1 : 2 and radii in the ratio 2 : 1. Connected in series to a battery, the ratio of drift velocities of electrons in them is:",
        "options": [
          "A) 1 : 4",
          "B) 4 : 1",
          "C) 1 : 2",
          "D) 2 : 1"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In series, current I is same. I = n e A v_d => v_d ∝ 1/A ∝ 1/r². Thus v_d1 / v_d2 = (r₂ / r₁)² = (1 / 2)² = 1 : 4.",
        "stepMarking": [
          {
            "step": "Series same I => v_d ∝ 1/r² => (1/2)² = 1:4",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "In series, drift speed depends ONLY on cross-sectional area (independent of wire length!).",
        "commonPitfall": "Including length ratio in v_d comparison."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q9",
        "qNum": 9,
        "section": "A",
        "marks": 1,
        "topic": "Moving Charges & Magnetism: Lorentz Force Trajectory",
        "questionText": "A proton and an alpha-particle (both accelerated through the same potential difference V) enter a uniform perpendicular magnetic field B. The ratio of radii of their circular paths (r_p : r_α) is:",
        "options": [
          "A) 1 : 2",
          "B) 1 : √2",
          "C) √2 : 1",
          "D) 2 : 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Radius r = mv/(qB) = √(2mK)/(qB) = √(2mqV)/(qB) = (1/B)√(2mV/q). Since m_α = 4m_p and q_α = 2q_p, r_p / r_α = √[(m_p/q_p)/(4m_p/2q_p)] = √(1/2) = 1 : √2.",
        "stepMarking": [
          {
            "step": "Use r ∝ √(m/q) for same V -> 1 : √2",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember: Same speed -> r ∝ m/q; Same momentum -> r ∝ 1/q; Same V -> r ∝ √(m/q)!",
        "commonPitfall": "Using r ∝ m/q (which holds for equal velocity, not equal accelerating potential)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q10",
        "qNum": 10,
        "section": "A",
        "marks": 1,
        "topic": "Magnetism & Matter: Diamagnetic vs Ferromagnetic Susceptibility",
        "questionText": "For a diamagnetic material, the magnetic susceptibility χ and relative permeability μ_r satisfy:",
        "options": [
          "A) χ > 0, μ_r > 1",
          "B) -1 ≤ χ < 0, 0 ≤ μ_r < 1",
          "C) χ ≫ 1, μ_r ≫ 1",
          "D) χ = 0, μ_r = 1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. Diamagnetic substances are feebly repelled by magnets: -1 ≤ χ < 0 and 0 ≤ μ_r = 1 + χ < 1 (for superconductors, χ = -1 and μ_r = 0).",
        "stepMarking": [
          {
            "step": "Small negative χ (-1 ≤ χ < 0) and 0 ≤ μ_r < 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Diamagnetic susceptibility is independent of temperature (except Bi/superconductors).",
        "commonPitfall": "Saying χ is positive for diamagnets."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q11",
        "qNum": 11,
        "section": "A",
        "marks": 1,
        "topic": "Electromagnetic Induction: Lenz Law & Mutual Inductance",
        "questionText": "Lenz's law is a direct consequence of the law of conservation of:",
        "options": [
          "A) Charge",
          "B) Linear momentum",
          "C) Energy",
          "D) Angular momentum"
        ],
        "correctOption": "C",
        "modelAnswer": "Option (C) is correct. Induced current always opposes the cause producing it, so mechanical work must be done against this opposition to produce electrical energy, conserving total energy.",
        "stepMarking": [
          {
            "step": "Identify Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State mechanical work converted into Joule/electrical energy if asked in 2M.",
        "commonPitfall": "Marking conservation of charge."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q12",
        "qNum": 12,
        "section": "A",
        "marks": 1,
        "topic": "Alternating Current: Power Factor at LCR Resonance",
        "questionText": "In a series LCR circuit at resonance (X_L = X_C), the phase difference between applied voltage and current, and the power factor cos φ are respectively:",
        "options": [
          "A) π/2 and 0",
          "B) 0 and 1",
          "C) π/4 and 1/√2",
          "D) π and -1"
        ],
        "correctOption": "B",
        "modelAnswer": "Option (B) is correct. At resonance X_L = X_C, so impedance Z = R (purely resistive), phase angle φ = 0°, and power factor cos φ = R/Z = 1.",
        "stepMarking": [
          {
            "step": "At resonance Z = R -> φ = 0, cos φ = 1",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "At resonance, current is MAXIMUM (I = V/R) and power dissipated is maximum.",
        "commonPitfall": "Confusing resonant power factor (1) with wattless current circuit (cos φ = 0)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q13",
        "qNum": 13,
        "section": "A",
        "marks": 1,
        "topic": "Current Electricity: Internal Resistance & Terminal Voltage",
        "questionText": "Assertion (A): During charging of a secondary cell, the terminal potential difference across it exceeds its EMF (V > E).\nReason (R): While charging, current enters the positive terminal of the cell, so V = E + Ir.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. While discharging V = E - Ir (< E), whereas while charging current flows against EMF so V = E + Ir (> E).",
        "stepMarking": [
          {
            "step": "Option (A) citing V = E + Ir during charging",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Discharging: V = E - Ir; Open circuit: V = E; Charging: V = E + Ir.",
        "commonPitfall": "Assuming V is always less than E."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q14",
        "qNum": 14,
        "section": "A",
        "marks": 1,
        "topic": "Wave Optics: Coherent Sources Necessity",
        "questionText": "Assertion (A): Two independent identical sodium lamps cannot produce a sustained interference pattern.\nReason (R): Independent light sources emit wave trains with rapidly and randomly varying phase differences, making them incoherent.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Sustained interference requires a constant phase difference (coherence), achievable only when both interfering waves originate from the same parent source.",
        "stepMarking": [
          {
            "step": "Option (A) citing random phase variation of independent sources",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Key term: \"constant phase difference over time\".",
        "commonPitfall": "Thinking matching frequency alone ensures coherence."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q15",
        "qNum": 15,
        "section": "A",
        "marks": 1,
        "topic": "Atoms: Bohr Radius & Energy Proportionality",
        "questionText": "Assertion (A): The total energy of an electron in the nth stationary orbit of hydrogen atom is negative.\nReason (R): Negative total energy indicates that the electron is bound to the nucleus by electrostatic attraction.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. Eₙ = -13.6/n² eV; negative sign signifies the bound state (positive work must be supplied to free the electron to E = 0).",
        "stepMarking": [
          {
            "step": "Option (A) explaining bound system energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Notice KE = -E = +13.6/n² eV (positive!) and PE = 2E = -27.2/n² eV.",
        "commonPitfall": "Thinking negative energy violates conservation."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q16",
        "qNum": 16,
        "section": "A",
        "marks": 1,
        "topic": "Semiconductors: Temperature Effect on Resistivity",
        "questionText": "Assertion (A): Electrical conductivity of an intrinsic semiconductor increases rapidly with rise in temperature.\nReason (R): Rising temperature breaks covalent bonds, increasing charge-carrier concentration (n_e and n_h) exponentially, which outweighs decrease in relaxation time.",
        "options": [
          "A) Both A and R are true, and R is the correct explanation of A",
          "B) Both A and R are true, but R is not the correct explanation of A",
          "C) A is true, but R is false",
          "D) A is false, but R is true"
        ],
        "correctOption": "A",
        "modelAnswer": "Option (A) is correct. In semiconductors, exponential growth in carrier density n dominates over τ decrease, giving negative temperature coefficient of resistivity (α < 0).",
        "stepMarking": [
          {
            "step": "Option (A) contrasting carrier surge vs τ drop",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Metals have α > 0 (ρ rises with T); Semiconductors have α < 0 (ρ drops with T).",
        "commonPitfall": "Applying metallic resistance reasoning to semiconductors."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q17",
        "qNum": 17,
        "section": "B",
        "marks": 2,
        "topic": "Semiconductors: Half-Wave vs Full-Wave Rectifier",
        "questionText": "Draw the output waveform of a full-wave rectifier for a sinusoidal AC input of 50 Hz, and state the fundamental ripple frequency of its pulsating DC output.",
        "modelAnswer": "Full-wave rectifier converts both positive and negative half cycles of AC input into unidirectional positive pulses.\nSince two output pulses occur per input AC cycle, output ripple frequency = 2 × 50 Hz = 100 Hz.",
        "stepMarking": [
          {
            "step": "Both half-cycles rectified positive waveform",
            "marks": "1 Mark"
          },
          {
            "step": "Output frequency = 2 × 50 = 100 Hz",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Half-wave output frequency = f (50 Hz); Full-wave output frequency = 2f (100 Hz).",
        "commonPitfall": "Writing 50 Hz for full-wave rectifier."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q18",
        "qNum": 18,
        "section": "B",
        "marks": 2,
        "topic": "Electrostatic Potential: Equipotential Surfaces Properties",
        "questionText": "Draw equipotential surfaces for (i) an isolated positive point charge and (ii) a uniform electric field along the +x axis. Why can two equipotential surfaces never intersect?",
        "modelAnswer": "(i) Concentric spherical shells centred on +q (spacing increases outward since E decreases).\n(ii) Parallel planes perpendicular to x-axis (parallel to YZ-plane) equally spaced.\nNon-intersection: If two equipotential surfaces intersected, there would be two different values of electric potential (and two normal field directions) at the point of intersection, which is impossible.",
        "stepMarking": [
          {
            "step": "Spherical & parallel planar equipotentials described",
            "marks": "1 Mark"
          },
          {
            "step": "Contradiction of two potentials/directions at intersection",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Remember spacing between equipotentials Δr ∝ 1/E: closer surfaces mean stronger electric field!",
        "commonPitfall": "Drawing equally spaced circles for a point charge."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q19",
        "qNum": 19,
        "section": "B",
        "marks": 2,
        "topic": "Current Electricity: Kirchhoff Rules & Wheatstone Bridge",
        "questionText": "State Kirchhoff's Junction Rule and Loop Rule along with the physical conservation laws they represent.",
        "modelAnswer": "1. Junction Rule (KCL): At any circuit junction, algebraic sum of currents meeting is zero (ΣI = 0). Based on Conservation of Charge.\n2. Loop Rule (KVL): Around any closed circuit loop, algebraic sum of potential changes across resistors and EMFs is zero (ΣΔV = 0). Based on Conservation of Energy.",
        "stepMarking": [
          {
            "step": "Junction rule + Conservation of Charge",
            "marks": "1 Mark"
          },
          {
            "step": "Loop rule + Conservation of Energy",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Always state the underlying conservation principle cleanly.",
        "commonPitfall": "Mixing up charge conservation and energy conservation."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q20",
        "qNum": 20,
        "section": "B",
        "marks": 2,
        "topic": "Magnetism: Moving Coil Galvanometer to Ammeter Conversion",
        "questionText": "A galvanometer of coil resistance 15 Ω shows full-scale deflection for a current of 4 mA. How will you convert it into an ammeter of range 0 to 6 A?",
        "modelAnswer": "Connect a low-resistance shunt S in PARALLEL with the galvanometer.\nS = (I_g · G) / (I - I_g) = (0.004 × 15) / (6 - 0.004) = 0.06 / 5.996 ≈ 0.01 Ω (or 10 mΩ).",
        "stepMarking": [
          {
            "step": "Parallel shunt formula S = Ig·G/(I - Ig)",
            "marks": "1 Mark"
          },
          {
            "step": "Correct value S = 0.01 Ω in parallel",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Ammeter = low shunt in PARALLEL; Voltmeter = high resistor in SERIES.",
        "commonPitfall": "Connecting shunt in series or ignoring mA to A conversion."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q21",
        "qNum": 21,
        "section": "B",
        "marks": 2,
        "topic": "Dual Nature: De Broglie Wavelength of Accelerated Electron",
        "questionText": "Find the ratio of de Broglie wavelengths associated with an electron and an alpha-particle when both are accelerated from rest through the same potential difference V.",
        "modelAnswer": "λ = h / √(2 m q V).\nFor same V: λ_e / λ_α = √[(m_α · q_α) / (m_e · q_e)].\nSince m_α ≈ 4 × 1836 m_e and q_α = 2 e, λ_e / λ_α = √(8 × 1836) ≈ 121.2 : 1 (much larger for electron due to tiny mass).",
        "stepMarking": [
          {
            "step": "Formula λ = h/√(2mqV)",
            "marks": "1 Mark"
          },
          {
            "step": "Ratio expression √(m_α q_α / m_e q_e)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "For electron only: λ (in Å) ≈ 12.27 / √V.",
        "commonPitfall": "Using λ ∝ √(q/m) instead of 1/√(mq)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q22",
        "qNum": 22,
        "section": "C",
        "marks": 3,
        "topic": "Ray Optics: Lens Maker's Formula Derivation",
        "questionText": "Derive the Lens Maker's formula 1/f = (n - 1)(1/R₁ - 1/R₂) for a thin convex lens of refractive index n placed in air.",
        "modelAnswer": "First spherical surface (radius R₁, air -> glass): n/v₁ - 1/u = (n - 1)/R₁ ...(1)\nSecond spherical surface (radius R₂, glass -> air, virtual object v₁): 1/v - n/v₁ = (1 - n)/R₂ ...(2)\nAdding (1) and (2) cancels n/v₁:\n1/v - 1/u = (n - 1)(1/R₁ - 1/R₂).\nFor u = ∞, v = f => 1/f = (n - 1)(1/R₁ - 1/R₂).",
        "stepMarking": [
          {
            "step": "Refraction equation at first surface",
            "marks": "1 Mark"
          },
          {
            "step": "Refraction at second surface (n₁=n, n₂=1)",
            "marks": "1 Mark"
          },
          {
            "step": "Add equations & set u=∞, v=f",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "State the thin-lens assumption (negligible thickness) before using v₁ directly in Eq(2)!",
        "commonPitfall": "Forgetting sign reversal (1 - n)/R₂ at the second interface."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q23",
        "qNum": 23,
        "section": "C",
        "marks": 3,
        "topic": "Atoms: Bohr Radius & Hydrogen Energy Levels",
        "questionText": "Using Bohr's postulates, derive the expression for the radius of the nth stationary orbit and total energy of the electron in a hydrogen atom.",
        "modelAnswer": "1. Electrostatic centripetal balance: m v² / r = k e² / r² => m v² r = k e² ...(1)\n2. Bohr quantisation: m v r = n h / (2π) => v = nh / (2πmr) ...(2)\nSubstituting (2) into (1): rₙ = (n² h²) / (4π² m k e²) = (ε₀ n² h²) / (π m e²) ≈ 0.529 n² Å.\nTotal Energy Eₙ = KE + PE = k e²/(2rₙ) - k e²/rₙ = -k e² / (2rₙ) = - (m e⁴) / (8 ε₀² h² n²) = -13.6 / n² eV.",
        "stepMarking": [
          {
            "step": "Centripetal + Bohr angular momentum equations",
            "marks": "1 Mark"
          },
          {
            "step": "Derive rₙ ∝ n²",
            "marks": "1 Mark"
          },
          {
            "step": "Derive Eₙ = -13.6/n² eV",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Show KE = +ke²/(2r) and PE = -ke²/r explicitly so E = -ke²/(2r) is clear.",
        "commonPitfall": "Writing KE = -PE instead of KE = -PE/2."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q24",
        "qNum": 24,
        "section": "C",
        "marks": 3,
        "topic": "Nuclei: Mass Defect, Binding Energy & Fission vs Fusion",
        "questionText": "Define mass defect and nuclear binding energy. Explain why heavy nuclei undergo nuclear fission while very light nuclei undergo nuclear fusion, referring to the Binding Energy per nucleon curve.",
        "modelAnswer": "Mass defect Δm = [Z m_p + (A - Z) m_n] - M_nucleus.\nBinding Energy BE = Δm · c² (energy required to break nucleus into free nucleons).\n• Heavy nuclei (A > 170, e.g. U-235) have lower BE/nucleon (~7.6 MeV) than medium-mass nuclei (A ~ 56-120, ~8.5 MeV), so splitting into two lighter nuclei increases BE/nucleon and releases ~200 MeV energy.\n• Very light nuclei (A < 20, e.g. ²H) have very low BE/nucleon (~1–2 MeV); fusing into ⁴He (~7.1 MeV/nucleon) moves up the curve steeply, releasing huge energy.",
        "stepMarking": [
          {
            "step": "Mass defect & BE definitions",
            "marks": "1 Mark"
          },
          {
            "step": "Fission explanation via BE/A increase (7.6 -> 8.5 MeV)",
            "marks": "1 Mark"
          },
          {
            "step": "Fusion explanation via BE/A jump (H -> He)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Cite Iron-56 (Fe) peak at ~8.75 MeV/nucleon.",
        "commonPitfall": "Saying binding energy decreases after fission/fusion (total binding energy INCREASES!)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q25",
        "qNum": 25,
        "section": "C",
        "marks": 3,
        "topic": "Electrostatics: Electric Field on Equatorial Line of a Dipole",
        "questionText": "Derive an expression for the electric field intensity at a point on the equatorial plane (perpendicular bisector) of an electric dipole of dipole moment p = 2aq. What is the angle between E and p?",
        "modelAnswer": "Consider point P at distance r from centre O on equatorial line. Distance to +q and -q is √(r² + a²).\nMagnitudes: E₊ = E₋ = kq / (r² + a²).\nVertical components E₊sinθ and E₋sinθ are equal and opposite -> cancel out.\nHorizontal components add opposite to p: E_eq = 2 E₊ cosθ = [2kq / (r² + a²)] × [a / √(r² + a²)] = kp / (r² + a²)^(3/2).\nFor short dipole (r ≫ a): E_eq = p / (4πε₀ r³) directed OPPOSITE to p (angle = 180°).",
        "stepMarking": [
          {
            "step": "Vertical components cancel, horizontal add -> 2E₊cosθ",
            "marks": "1.5 Marks"
          },
          {
            "step": "Exact & short-dipole result p/(4πε₀r³)",
            "marks": "1 Mark"
          },
          {
            "step": "Angle between E_eq and p = 180°",
            "marks": "0.5 Mark"
          }
        ],
        "examinerTip": "Ratio check: E_axial / E_equatorial = 2 : 1 for short dipole at equal distance r!",
        "commonPitfall": "Writing angle 0° (axial) instead of 180° (equatorial)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q26",
        "qNum": 26,
        "section": "C",
        "marks": 3,
        "topic": "Current Electricity: Cells in Parallel Equivalent EMF & Internal Resistance",
        "questionText": "Two cells of EMFs E₁, E₂ and internal resistances r₁, r₂ are connected in parallel. Derive expressions for equivalent EMF (E_eq) and equivalent internal resistance (r_eq).",
        "modelAnswer": "Total current I = I₁ + I₂, with terminal voltage V identical across both cells:\nI₁ = (E₁ - V)/r₁ and I₂ = (E₂ - V)/r₂.\nI = (E₁/r₁ + E₂/r₂) - V(1/r₁ + 1/r₂).\nRearranging for V = E_eq - I r_eq:\n1/r_eq = 1/r₁ + 1/r₂ => r_eq = (r₁r₂)/(r₁ + r₂),\nE_eq / r_eq = E₁/r₁ + E₂/r₂ => E_eq = (E₁r₂ + E₂r₁) / (r₁ + r₂).",
        "stepMarking": [
          {
            "step": "Set I = I₁ + I₂ with shared V",
            "marks": "1 Mark"
          },
          {
            "step": "Derive 1/r_eq = 1/r₁ + 1/r₂",
            "marks": "1 Mark"
          },
          {
            "step": "Derive E_eq = (E₁r₂ + E₂r₁)/(r₁ + r₂)",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Symmetrical form E_eq/r_eq = E₁/r₁ + E₂/r₂ is easiest to verify!",
        "commonPitfall": "Adding internal resistances in series inside E_eq denominator incorrectly."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q27",
        "qNum": 27,
        "section": "C",
        "marks": 3,
        "topic": "Moving Charges & Magnetism: Biot-Savart Magnetic Field on Loop Axis",
        "questionText": "Using Biot-Savart law, derive the expression for magnetic field at an axial point x from the centre of a circular loop of radius R carrying current I.",
        "modelAnswer": "Consider current element dl at top of loop; distance to axial point P is r = √(R² + x²), with dl ⊥ r.\ndB = (μ₀ I dl) / (4π (R² + x²)).\nSymmetry: perpendicular components dB cosθ cancel; axial components dB sinθ (where sinθ = R / √(R² + x²)) sum over circumference 2πR:\nB = ∫ dB sinθ = [μ₀ I R / (4π (R² + x²)^(3/2))] × (2πR) = μ₀ I R² / [2 (R² + x²)^(3/2)] directed along loop axis.",
        "stepMarking": [
          {
            "step": "Biot-Savart dB element + perpendicular components cancel",
            "marks": "1.5 Marks"
          },
          {
            "step": "Integrate axial component dB sinθ over 2πR -> final formula",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Check special case x = 0: reduces cleanly to B_centre = μ₀I / (2R)!",
        "commonPitfall": "Using cosθ instead of sinθ for axial component without matching angle θ definition."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q28",
        "qNum": 28,
        "section": "C",
        "marks": 3,
        "topic": "Electromagnetic Induction: Motional EMF & Faraday's Laws",
        "questionText": "Derive the expression for motional EMF induced across the ends of a straight conductor of length l moving with uniform velocity v perpendicular to a uniform magnetic field B. Hence find power dissipated if connected to resistance R.",
        "modelAnswer": "Consider rectangular loop PQRS with movable arm PQ of length l moving outward at speed v. Area increases at dA/dt = l dx/dt = l v.\nMagnetic flux Φ_B = B · A = B l x.\nBy Faraday's law, magnitude of induced EMF: e = |dΦ_B/dt| = B l (dx/dt) = B l v.\n(Alternative via Lorentz force: qvB = qE = q(e/l) => e = B l v.)\nCurrent I = B l v / R; Mechanical Force needed F = I l B = B²l²v / R; Power = F v = I² R = B²l²v² / R.",
        "stepMarking": [
          {
            "step": "Derive e = B l v via flux or Lorentz force",
            "marks": "2 Marks"
          },
          {
            "step": "Current I = Blv/R and Power P = B²l²v²/R",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Both Faraday flux method and Lorentz force method earn full marks.",
        "commonPitfall": "Forgetting B, l, v must be mutually perpendicular for full Blv."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q29",
        "qNum": 29,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Total Internal Reflection & Optical Fibres (Ray Optics)",
        "questionText": "Read the passage and answer:\nOptical fibres transmit high-bandwidth internet signals over thousands of kilometres via repeated Total Internal Reflection (TIR). Each fibre has a high-refractive-index glass core (n₁ = 1.68) surrounded by cladding of slightly lower refractive index (n₂ = 1.44).\n\n(a) State the two essential conditions for TIR to take place at the core-cladding boundary. (1M)\n(b) Calculate the critical angle (or sin i_c) at the core-cladding interface. (1M)\n(c) Why is cladding essential even though air outside has an even lower refractive index n = 1.0? Give two reasons. (2M)",
        "modelAnswer": "(a) 1. Light must travel from optically denser core (n₁) to optically rarer cladding (n₂).\n2. Angle of incidence at interface must exceed critical angle i_c.\n(b) sin i_c = n₂ / n₁ = 1.44 / 1.68 = 6/7 ≈ 0.857 => i_c = sin⁻¹(6/7) ≈ 59°.\n(c) 1. Cladding protects the delicate core surface from scratches, dust, and moisture that would ruin TIR.\n2. It prevents signal cross-talk between adjacent bundled fibres and restricts steep high-order modes so pulse dispersion is minimised.",
        "stepMarking": [
          {
            "step": "(a) Two TIR conditions",
            "marks": "1 Mark"
          },
          {
            "step": "(b) sin i_c = 1.44/1.68 = 6/7",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Physical protection + cross-talk/dispersion prevention",
            "marks": "2 Marks"
          }
        ],
        "examinerTip": "Never write sin i_c = 1/n₁ when cladding n₂ ≠ 1; always use n₂/n₁!",
        "commonPitfall": "Using air n = 1 instead of cladding n₂ = 1.44 in critical angle calculation."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q30",
        "qNum": 30,
        "section": "D",
        "marks": 4,
        "topic": "Case Study: Photoelectric Effect & Einstein's Equation",
        "questionText": "Read the passage and answer:\nWhen monochromatic light of wavelength 331 nm falls on a clean metal surface with work function φ₀ = 2.0 eV, photoelectrons are emitted (take h = 6.62 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J).\n\n(a) Calculate the energy of each incident photon in electron-volts (eV). (1.5M)\n(b) Find the maximum kinetic energy (in eV) of emitted photoelectrons and the stopping potential V₀. (1.5M)\n(c) Draw the variation of stopping potential V₀ vs incident frequency ν for two metals A and B (φ_A > φ_B). (1M)",
        "modelAnswer": "(a) E = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸) / (331 × 10⁻⁹) = 6 × 10⁻¹⁹ J.\nIn eV: E = 6 × 10⁻¹⁹ / (1.6 × 10⁻¹⁹) = 3.75 eV.\n(b) K_max = E - φ₀ = 3.75 - 2.0 = 1.75 eV. Hence stopping potential V₀ = 1.75 V.\n(c) Two parallel straight lines with identical slope h/e and higher x-intercept (threshold frequency ν₀) for metal A.",
        "stepMarking": [
          {
            "step": "(a) E = 3.75 eV",
            "marks": "1.5 Marks"
          },
          {
            "step": "(b) K_max = 1.75 eV & V₀ = 1.75 V",
            "marks": "1.5 Marks"
          },
          {
            "step": "(c) Parallel lines of equal slope h/e",
            "marks": "1 Mark"
          }
        ],
        "examinerTip": "Shortcut check: hc ≈ 1240 eV·nm => 1240 / 331 ≈ 3.75 eV!",
        "commonPitfall": "Drawing diverging lines for metals A and B (slope h/e is universal!)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q31",
        "qNum": 31,
        "section": "E",
        "marks": 5,
        "topic": "AC Circuits & Transformers: Phasor Diagram, Impedance & Transformer Losses",
        "questionText": "(a) Using a phasor diagram, derive the expression for impedance Z and phase angle φ of a series LCR circuit connected to AC voltage V = V₀ sin ωt.\n(b) Draw a labelled schematic of a step-up transformer and explain four main sources of energy loss in real transformers.",
        "modelAnswer": "(a) In series, current I is same across L, C, R. V_R is in phase with I, V_L leads I by 90°, V_C lags I by 90°.\nResultant voltage V = √[ V_R² + (V_L - V_C)² ] = I √[ R² + (X_L - X_C)² ].\nThus Z = V / I = √[ R² + (X_L - X_C)² ], and tan φ = (X_L - X_C) / R.\n(b) Step-up transformer has N_s > N_p on a laminated soft iron core.\nFour energy losses: (1) Flux leakage (minimize by winding coils over each other), (2) Copper I²R winding heating (use thick copper wire), (3) Eddy currents (use laminated iron sheets), (4) Hysteresis loss (use soft iron core with narrow hysteresis loop).",
        "stepMarking": [
          {
            "step": "(a) Phasor diagram + Z and tan φ derivations",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Step-up schematic + 4 losses & remedies",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Pair each transformer loss with how it is minimised (laminated core -> eddy currents; soft iron -> hysteresis).",
        "commonPitfall": "Confusing eddy current loss (laminated core) with hysteresis loss (soft iron material)."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q32",
        "qNum": 32,
        "section": "E",
        "marks": 5,
        "topic": "Wave Optics: Huygens Reflection/Refraction & Diffraction Single Slit",
        "questionText": "(a) Using Huygens' wave theory, verify Snell's law of refraction for a plane wavefront moving from rarer (speed v₁) to denser medium (speed v₂).\n(b) Why are diffraction minima formed at a sin θ = nλ in a single slit, whereas YDSE maxima occur at d sin θ = nλ? State one distinction between interference and diffraction fringes.",
        "modelAnswer": "(a) Plane wavefront AB hits boundary XY at A (angle i); wavelets from B reach C at time τ = BC/v₁, while secondary wavelet from A covers AD = v₂τ in denser medium.\nsin i = BC/AC = v₁τ/AC; sin r = AD/AC = v₂τ/AC.\nRatio sin i / sin r = v₁ / v₂ = n₂ / n₁ = constant (Snell's Law).\n(b) For single slit of width a, at a sin θ = λ, the slit splits into two halves differing in path by λ/2, cancelling pairwise destructively (similarly 2n halves for nλ) -> MINIMA! In YDSE, two point sources differing by nλ interfere constructively -> MAXIMA.\nDistinction: Interference fringes are of equal width & equal bright peak intensity; diffraction central maximum is twice as wide with rapidly falling secondary peak intensities.",
        "stepMarking": [
          {
            "step": "(a) Huygens wavefront geometry proving sin i/sin r = v₁/v₂",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Pairwise cancellation in diffraction vs YDSE + fringe contrast",
            "marks": "2.5 Marks"
          }
        ],
        "examinerTip": "Remember: Central maximum width in single slit = 2λD/a (double the secondary fringe width λD/a!).",
        "commonPitfall": "Writing a sin θ = nλ as maxima for single slit."
      },
      {
        "id": "cbse-c12-phy-2023-sqp-q33",
        "qNum": 33,
        "section": "E",
        "marks": 5,
        "topic": "Current Electricity: Wheatstone Bridge Balance Condition & Numerical",
        "questionText": "(a) Draw a circuit diagram of a balanced Wheatstone bridge and use Kirchhoff's rules to derive its balance condition P/Q = R/S.\n(b) Why is a Wheatstone bridge NOT suitable for measuring very high or very low resistances accurately?\n(c) Calculate the current drawn from a 6 V battery connected across a balanced bridge with P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω, and galvanometer G = 50 Ω.",
        "modelAnswer": "(a) At balance, I_g = 0 (V_B = V_D), so I₁ = I₃ and I₂ = I₄.\nLoop ABDA: -I₁P + I₂R = 0 => I₁P = I₂R ...(1)\nLoop BCDB: -I₁Q + I₂S = 0 => I₁Q = I₂S ...(2)\nDividing (1) by (2): P / Q = R / S.\n(b) For very low R, connecting lead/contact resistances become significant errors; for very high R, galvanometer current becomes too tiny for sensitive null detection.\n(c) Since 10/20 = 15/30, bridge is balanced -> ignore G = 50 Ω! Upper branch = 10 + 20 = 30 Ω; Lower branch = 15 + 30 = 45 Ω.\nR_eq = (30 × 45)/(30 + 45) = 1350/75 = 18 Ω. Current I = V/R_eq = 6/18 = 1/3 ≈ 0.33 A.",
        "stepMarking": [
          {
            "step": "(a) Circuit + KVL loop derivation of P/Q = R/S",
            "marks": "2.5 Marks"
          },
          {
            "step": "(b) Contact resistance & sensitivity limitations",
            "marks": "1 Mark"
          },
          {
            "step": "(c) Balanced removal of G -> R_eq = 18 Ω, I = 0.33 A",
            "marks": "1.5 Marks"
          }
        ],
        "examinerTip": "Always check P/Q = R/S FIRST in bridge resistor problems before computing I!",
        "commonPitfall": "Including G = 50 Ω in equivalent resistance when bridge is balanced."
      }
    ]
  }
];
