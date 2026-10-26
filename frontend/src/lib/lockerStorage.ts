import { learnApi } from './learn-api';

export interface LockerItem {
  id: string;
  type: 'NOTE' | 'QUESTION' | 'FORMULA';
  title: string;
  subtitle?: string;
  content: string;
  tags: string[];
  savedAt: string;
  personalNote?: string;
  meta?: Record<string, any>;
}

export const LOCKER_STORAGE_KEY = 'preplens_personal_locker';
export const STREAK_KEY = 'preplens_pyq_streak_data';

/**
 * Returns dynamic user-scoped streak storage key so different students
 * on the same browser do not inherit each other's streak.
 */
export function getStreakStorageKey(): string {
  try {
    const email = localStorage.getItem('learn_user_email');
    if (email && email.trim()) {
      return `preplens_pyq_streak_${email.trim().toLowerCase()}`;
    }
  } catch (e) {}
  return 'preplens_pyq_streak_guest';
}

/**
 * Returns dynamic user-scoped locker storage key.
 */
export function getLockerStorageKey(): string {
  try {
    const email = localStorage.getItem('learn_user_email');
    if (email && email.trim()) {
      return `preplens_personal_locker_${email.trim().toLowerCase()}`;
    }
  } catch (e) {}
  return 'preplens_personal_locker_guest';
}

export function hasAuthToken(): boolean {
  return !!(
    localStorage.getItem('learn_token') ||
    localStorage.getItem('token') ||
    localStorage.getItem('preplens_access_token') ||
    sessionStorage.getItem('token')
  );
}

// Class & Exam Goal Aware Default Starter Items
export function getDefaultLockerItems(targetGoal?: string): LockerItem[] {
  const goal = (targetGoal || (typeof localStorage !== 'undefined' ? localStorage.getItem('learn_exam_goal') || 'Class 11' : 'Class 11')).toLowerCase();

  // 1. Govt / SSC CGL / UPSC CSE
  if (goal.includes('ssc') || goal.includes('upsc') || goal.includes('govt') || goal.includes('cgl') || goal.includes('civil')) {
    return [
      {
        id: 'starter-govt-1',
        type: 'NOTE',
        title: 'Fundamental Rights & Constitutional Writs (Articles 12–35)',
        subtitle: 'General Awareness — Indian Polity',
        content: '**Part III of the Constitution (Articles 12–35):**\n- **Art 14–18:** Right to Equality\n- **Art 19–22:** Right to Freedom (Art 19 guarantees 6 democratic freedoms)\n- **Art 21:** Protection of Life & Personal Liberty\n- **Art 32:** Right to Constitutional Remedies (Called the *Heart & Soul* of the Constitution by Dr. B.R. Ambedkar).\n\n**5 Constitutional Writs:** Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto.',
        tags: ['Polity', 'General Awareness', 'High Yield'],
        savedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        personalNote: 'Under Art 32 Supreme Court issues writs, while High Courts issue under Art 226 (broader territorial scope).',
        meta: { subject: 'General Awareness', exam: 'SSC/UPSC' }
      },
      {
        id: 'starter-govt-2',
        type: 'FORMULA',
        title: 'Successive Percentage & Single Equivalent Discount',
        subtitle: 'Quantitative Aptitude — Commercial Arithmetic',
        content: '**Successive % Change Formula:**\n$$\\text{Net Change} = a + b + \\frac{a \\times b}{100}\\%$$\n\n- **Two Consecutive Discounts ($d_1\\%$ & $d_2\\%$):**\n  $$\\text{Single Equivalent Discount} = \\left(d_1 + d_2 - \\frac{d_1 \\times d_2}{100}\\right)\\%$$\n- **Direct Profit Ratio:** $\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + P\\%}{100 - D\\%}$',
        tags: ['Quantitative Aptitude', 'Speed Math', 'High Yield Formula'],
        savedAt: new Date(Date.now() - 86400000).toISOString(),
        personalNote: 'The MP/CP ratio trick solves 90% of marked price questions in under 30 seconds without assuming 100!',
        meta: { subject: 'Quantitative Aptitude' }
      },
      {
        id: 'starter-govt-3',
        type: 'QUESTION',
        title: 'Syllogism: Statements & Conclusions with Venn Logic',
        subtitle: 'General Intelligence & Reasoning — Tier 1 PYQ',
        content: '**Statements:**\n1. All books are pens.\n2. Some pens are pencils.\n\n**Conclusions:**\nI. Some pencils are books.\nII. Some pens are books.\n\n**Examiner Analysis:**\n- Statement 1 "All books are pens" naturally converts to the sub-alternate: "Some pens are books". Hence Conclusion II is 100% definitely true.\n- There is no direct or forced intersection between pencils and books in the minimal Venn diagram. Conclusion I is merely a possibility, not a definite conclusion.\n\n**Correct Answer:** Only Conclusion II follows.',
        tags: ['Reasoning', 'Syllogism', 'Sure-Shot Tier 1'],
        savedAt: new Date().toISOString(),
        personalNote: 'Never assume overlap between extremes unless linked by a universal affirmative statement.',
        meta: { subject: 'Reasoning', marks: 2 }
      }
    ];
  }

  // 2. Class 12 / JEE / NEET
  if (goal.includes('12') || goal.includes('jee') || goal.includes('neet')) {
    return [
      {
        id: 'starter-12-1',
        type: 'NOTE',
        title: 'Electric Dipole Moment, Torque & Potential Energy',
        subtitle: 'Physics — Electrostatics & Gauss\'s Law',
        content: 'An electric dipole consists of equal and opposite charges $\\pm q$ separated by $2a$.\n\n- **Dipole Moment:** $\\vec{p} = q \\times 2\\vec{a}$ (directed from negative to positive charge).\n- **Torque in Uniform Field:** $\\vec{\\tau} = \\vec{p} \\times \\vec{E} = pE\\sin\\theta$.\n- **Potential Energy:** $U = -\\vec{p} \\cdot \\vec{E} = -pE\\cos\\theta$.\n\n**Equilibrium States:**\n- $\\theta = 0^\\circ$: Stable equilibrium ($U = -pE$, minimum energy).\n- $\\theta = 180^\\circ$: Unstable equilibrium ($U = +pE$, maximum energy).',
        tags: ['Physics', 'Electrostatics', 'High Yield Derivation'],
        savedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        personalNote: 'Board favorite 3-marker: derive expression for torque and potential energy in external electric field.',
        meta: { subject: 'Physics', classLevel: 'Class 12' }
      },
      {
        id: 'starter-12-2',
        type: 'FORMULA',
        title: 'Nernst Equation & Gibbs Free Energy Relation',
        subtitle: 'Chemistry — Electrochemistry',
        content: '**At $298\\text{ K}$ ($25^\\circ\\text{C}$):**\n$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q$$\n\n- **At Equilibrium ($E_{\\text{cell}} = 0$):**\n  $$E^\\circ_{\\text{cell}} = \\frac{0.0591}{n} \\log_{10} K_c$$\n- **Gibbs Free Energy & Work:**\n  $$\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} = -2.303 R T \\log_{10} K_c$$\n  *(where $F = 96,487\\text{ C/mol} \\approx 96,500\\text{ C/mol}$)*',
        tags: ['Chemistry', 'Electrochemistry', 'Core Numerical Formula'],
        savedAt: new Date(Date.now() - 86400000).toISOString(),
        personalNote: 'Always check value of n (number of moles of electrons transferred) in the balanced overall redox equation!',
        meta: { subject: 'Chemistry', classLevel: 'Class 12' }
      },
      {
        id: 'starter-12-3',
        type: 'QUESTION',
        title: 'Evaluate Definite Integral: ∫₀^π (x sin x)/(1 + cos² x) dx',
        subtitle: 'Mathematics — CBSE Board Exam [Section C - 4 Marks]',
        content: '**Evaluate:** $I = \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x}\\,dx$\n\n**Model Answer & Derivation Steps:**\n1. Apply King\'s Property $\\int_0^a f(x)\\,dx = \\int_0^a f(a-x)\\,dx$:\n   $$I = \\int_0^\\pi \\frac{(\\pi - x)\\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)}\\,dx = \\int_0^\\pi \\frac{(\\pi - x)\\sin x}{1 + \\cos^2 x}\\,dx$$\n2. Adding the original integral and modified integral:\n   $$2I = \\pi \\int_0^\\pi \\frac{\\sin x}{1 + \\cos^2 x}\\,dx$$\n3. Substitute $t = \\cos x \\implies dt = -\\sin x\\,dx$. Limits: $x=0 \\to t=1$, $x=\\pi \\to t=-1$:\n   $$2I = \\pi \\int_{-1}^{1} \\frac{dt}{1 + t^2} = \\pi \\left[ \\tan^{-1}(t) \\right]_{-1}^{1} = \\pi \\left(\\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right)\\right) = \\frac{\\pi^2}{2}$$\n4. **Final Answer:** $I = \\frac{\\pi^2}{4}$',
        tags: ['Mathematics', 'Calculus', 'Sure-Shot PYQ'],
        savedAt: new Date().toISOString(),
        personalNote: 'King\'s property eliminates the algebraic x in the numerator immediately!',
        meta: { subject: 'Mathematics', marks: 4, classLevel: 'Class 12' }
      }
    ];
  }

  // 3. Class 11
  if (goal.includes('11')) {
    return [
      {
        id: 'starter-11-1',
        type: 'NOTE',
        title: 'Projectile Motion Trajectory & Maximum Range Conditions',
        subtitle: 'Physics — Motion in a Plane',
        content: 'When an object is projected with velocity $u$ at angle $\\theta$ with horizontal:\n\n- **Trajectory Parabola:** $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$\n- **Time of Flight:** $T = \\frac{2u\\sin\\theta}{g}$\n- **Maximum Height:** $H = \\frac{u^2\\sin^2\\theta}{2g}$\n- **Horizontal Range:** $R = \\frac{u^2\\sin 2\\theta}{g}$ (Maximum range occurs at $\\theta = 45^\\circ$, where $R_{\\text{max}} = \\frac{u^2}{g} = 4H_{\\text{max}}$).',
        tags: ['Physics', 'Kinematics', 'Core Concept'],
        savedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        personalNote: 'At highest point, velocity is NOT zero! It is horizontal: v = u cos θ.',
        meta: { subject: 'Physics', classLevel: 'Class 11' }
      },
      {
        id: 'starter-11-2',
        type: 'FORMULA',
        title: 'Mole Concept, Molarity & Molality Interconversions',
        subtitle: 'Chemistry — Basic Concepts of Chemistry',
        content: '**Basic Mole Formula:**\n$$n = \\frac{m}{\\text{Molar Mass}} = \\frac{N}{N_A} = \\frac{V_{\\text{gas (STP)}}}{22.4\\text{ L}}$$\n\n- **Molarity ($M$):** $\\frac{\\text{Moles of solute}}{\\text{Volume of solution in Litres}}$ (Temperature dependent)\n- **Molality ($m$):** $\\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}}$ (Temperature independent)\n- **Mole Fraction ($X_A$):** $\\frac{n_A}{n_A + n_B}$, where $X_A + X_B = 1$',
        tags: ['Chemistry', 'Physical Chemistry', 'Fundamental Formula'],
        savedAt: new Date(Date.now() - 86400000).toISOString(),
        personalNote: 'Molality is preferred in colligative properties because it does not vary with temperature changes.',
        meta: { subject: 'Chemistry', classLevel: 'Class 11' }
      },
      {
        id: 'starter-11-3',
        type: 'QUESTION',
        title: 'Domain and Range of Real Function f(x) = √(9 - x²)',
        subtitle: 'Mathematics — Relations and Functions [Section B - 3 Marks]',
        content: '**Question:** Find the domain and range of the real function $f(x) = \\sqrt{9 - x^2}$.\n\n**Step-by-step Solution:**\n1. **Domain:** For $f(x)$ to be a well-defined real number, the quantity under square root must be non-negative:\n   $$9 - x^2 \\ge 0 \\implies x^2 \\le 9 \\implies -3 \\le x \\le 3$$\n   $$\\text{Domain } D_f = [-3, 3]$$\n2. **Range:** Since $-3 \\le x \\le 3$:\n   $$0 \\le x^2 \\le 9 \\implies 0 \\le 9 - x^2 \\le 9$$\n   Taking square root:\n   $$0 \\le \\sqrt{9 - x^2} \\le 3$$\n   $$\\text{Range } R_f = [0, 3]$$',
        tags: ['Mathematics', 'Functions', 'Sure-Shot Concept'],
        savedAt: new Date().toISOString(),
        personalNote: 'Do not forget that square root always yields non-negative principal values, so range cannot be negative!',
        meta: { subject: 'Mathematics', marks: 3, classLevel: 'Class 11' }
      }
    ];
  }

  // 4. Class 10 (Board Exam Focus)
  if (goal.includes('10') || goal.includes('matric') || goal === 'class x' || goal === 'grade x') {
    return [
      {
        id: 'starter-10-1',
        type: 'NOTE',
        title: 'Chemical Reactions: Thermal Decomposition of Lead Nitrate',
        subtitle: 'Chemistry — Chemical Reactions & Equations',
        content: 'Heating dry lead nitrate powder in a boiling tube decomposes it into lead monoxide, nitrogen dioxide, and oxygen:\n\n$$2\\text{Pb}(\\text{NO}_3)_2 (s) \\xrightarrow{\\Delta} 2\\text{PbO} (s) \\text{ [yellow residue]} + 4\\text{NO}_2 (g) \\text{ [brown fumes]} + \\text{O}_2 (g)$$\n\n- **Type of Reaction:** Thermal Decomposition Reaction.\n- **Observation:** Crackling sound, brown fumes of $\\text{NO}_2$, and yellow residue of $\\text{PbO}$.',
        tags: ['Chemistry', 'Chemical Reactions', 'CBSE Board Favorite'],
        savedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        personalNote: 'Yellow residue is PbO, brown gas fumes are NO2. O2 is colorless and rekindles a glowing splinter.',
        meta: { subject: 'Science', classLevel: 'Class 10' }
      },
      {
        id: 'starter-10-2',
        type: 'FORMULA',
        title: "Ohm's Law, Resistance & Joule's Heating Effect",
        subtitle: 'Physics — Electricity',
        content: "**Ohm's Law (at constant temperature):**\n$$V = I \\times R$$\n\n- **Factors Affecting Resistance:** $R = \\rho \\frac{l}{A}$\n- **Series Combination:** $R_s = R_1 + R_2 + R_3$\n- **Parallel Combination:** $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$\n- **Joule's Heating Law:** $H = I^2 R t = V I t = \\frac{V^2}{R} t$\n- **Electric Power:** $P = V I = I^2 R = \\frac{V^2}{R}$ (SI unit: Watt, $1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}$)",
        tags: ['Physics', 'Electricity', 'High Yield Formula'],
        savedAt: new Date(Date.now() - 86400000).toISOString(),
        personalNote: 'Always state "at constant temperature" when asked to define Ohm\'s law in 1-mark questions!',
        meta: { subject: 'Science', classLevel: 'Class 10' }
      },
      {
        id: 'starter-10-3',
        type: 'QUESTION',
        title: 'Site of Complete Digestion & Role of Digestive Enzymes',
        subtitle: 'Biology — Life Processes [Section C - 3 Marks]',
        content: '**Question:** Name the site of complete digestion in humans and explain the role of bile juice, trypsin, and lipase.\n\n**Model Answer:**\n1. **Site:** Small intestine (complete digestion of carbs, proteins, fats).\n2. **Bile Juice (from Liver):** Does not contain enzymes, but alkalinizes acidic chyme and emulsifies large fat globules into smaller micelles (increasing enzyme action surface area).\n3. **Trypsin (Pancreatic Juice):** Breaks down proteins and peptones into peptides/amino acids in alkaline medium.\n4. **Lipase:** Digests emulsified fats into fatty acids and glycerol.',
        tags: ['Biology', 'Life Processes', 'Sure-Shot PYQ'],
        savedAt: new Date().toISOString(),
        personalNote: 'Remember: Bile juice contains no enzymes, its function is mechanical emulsification and providing alkaline pH.',
        meta: { subject: 'Science', marks: 3, section: 'C', classLevel: 'Class 10' }
      }
    ];
  }

  // 5. Class 9 (Foundation Focus)
  return [
    {
      id: 'starter-9-1',
      type: 'NOTE',
      title: 'Kinetic Molecular Theory & States of Matter',
      subtitle: 'Chemistry — Matter in Our Surroundings',
      content: 'Particles have kinetic energy directly proportional to temperature. At higher temperatures, particles vibrate faster and overcome attractive intermolecular forces.\n\n- **Sublimation:** Direct conversion between solid and gas without liquid state (e.g., Camphor, Ammonium Chloride $\\text{NH}_4\\text{Cl}$).\n- **Liquefaction:** High pressure + Low temperature compresses gases into liquids.',
      tags: ['Chemistry', 'Science', 'Important Concept'],
      savedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      personalNote: 'Revise before half-yearly physics & chem exam!',
      meta: { subject: 'Science', classLevel: 'Class 9' }
    },
    {
      id: 'starter-9-2',
      type: 'FORMULA',
      title: "Newton's Second Law & Momentum",
      subtitle: 'Physics — Force & Motion',
      content: '**F = m × a = (m × v - m × u) / t**\n\n- **SI Unit:** Newton (N) = kg·m/s²\n- **Linear Momentum:** $p = m \\times v$\n- **Impulse:** $J = F \\times \\Delta t = \\Delta p$\n- **Conservation of Momentum:** $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$',
      tags: ['Physics', 'Science', 'High Yield Formula'],
      savedAt: new Date(Date.now() - 86400000).toISOString(),
      personalNote: 'Remember to always check if mass is in grams or kg.',
      meta: { subject: 'Science', classLevel: 'Class 9' }
    },
    {
      id: 'starter-9-3',
      type: 'QUESTION',
      title: 'Displacement after 2 min 20 s on Circular Track',
      subtitle: 'Physics — Motion [Section A - 1 Mark]',
      content: 'An athlete completes one round of a circular track of diameter 200m in 40s. What will be the displacement at the end of 2 minutes 20 seconds?\n\n**Model Answer:**\n- Total time = 140s. Rounds = 140/40 = 3.5 rounds.\n- After 3 full rounds, displacement = 0.\n- Remaining 0.5 round puts athlete diametrically opposite.\n- **Displacement = 200 m (straight line)**',
      tags: ['Physics', 'Science', 'Sure-Shot PYQ'],
      savedAt: new Date().toISOString(),
      personalNote: 'Distractor option was 2200m (distance). Displacement is shortest straight line!',
      meta: { subject: 'Science', marks: 1, section: 'A', classLevel: 'Class 9' }
    }
  ];
}

export const DEFAULT_LOCKER_ITEMS: LockerItem[] = getDefaultLockerItems('Class 11');

export function getLockerItems(targetClass?: string): LockerItem[] {
  try {
    const key = getLockerStorageKey();
    const raw = localStorage.getItem(key);
    const examGoal = targetClass || (typeof localStorage !== 'undefined' ? localStorage.getItem('learn_exam_goal') || 'Class 11' : 'Class 11');
    const defaults = getDefaultLockerItems(examGoal);

    if (!raw) {
      localStorage.setItem(key, JSON.stringify(defaults));
      return defaults;
    }
    const parsed: LockerItem[] = JSON.parse(raw);

    // Self-healing migration: if parsed items are strictly old generic starter items from a different class
    // upgrade their starter cards to their actual academic level so students see grade-appropriate notes.
    const isOldGenericStartersOnly = parsed.length <= 3 && parsed.every(i => 
      i.id === 'starter-1' || i.id === 'starter-2' || i.id === 'starter-3' ||
      ((i.id === 'starter-9-1' || i.id === 'starter-9-2' || i.id === 'starter-9-3') && 
       (examGoal.toLowerCase().includes('10') || examGoal.toLowerCase().includes('11') || examGoal.toLowerCase().includes('12') || examGoal.toLowerCase().includes('jee') || examGoal.toLowerCase().includes('neet')))
    );
    const goalNorm = examGoal.toLowerCase();
    const isTargetClassAppropriate = goalNorm.includes('10') || goalNorm.includes('11') || goalNorm.includes('12') || goalNorm.includes('jee') || goalNorm.includes('neet') || goalNorm.includes('ssc') || goalNorm.includes('upsc') || goalNorm.includes('govt');

    if (isOldGenericStartersOnly && isTargetClassAppropriate) {
      localStorage.setItem(key, JSON.stringify(defaults));
      return defaults;
    }

    return parsed;
  } catch (e) {
    console.error('Error reading locker items', e);
    const examGoal = targetClass || (typeof localStorage !== 'undefined' ? localStorage.getItem('learn_exam_goal') || 'Class 11' : 'Class 11');
    return getDefaultLockerItems(examGoal);
  }
}

/**
 * Cloud Sync: Fetches locker items from Supabase/Backend and synchronizes with local storage.
 */
export async function fetchCloudLockerItems(): Promise<LockerItem[]> {
  const localItems = getLockerItems();
  if (!hasAuthToken()) {
    return localItems;
  }

  try {
    const res = await learnApi.get('/locker');
    const cloudData = res.data;
    if (Array.isArray(cloudData)) {
      const cloudItems: LockerItem[] = cloudData.map((d: any) => ({
        id: String(d.id),
        type: d.type || 'NOTE',
        title: d.title,
        subtitle: d.subtitle || undefined,
        content: d.content,
        tags: d.tags || [],
        personalNote: d.personalNote || undefined,
        meta: d.meta || {},
        savedAt: d.savedAt || new Date().toISOString()
      }));

      // Detect any local custom items not yet synced to cloud
      const cloudTitles = new Set(cloudItems.map(c => c.title.toLowerCase().trim()));
      const unSyncedLocal = localItems.filter(l => 
        !cloudTitles.has(l.title.toLowerCase().trim()) && !l.id.startsWith('starter-')
      );

      if (unSyncedLocal.length > 0) {
        try {
          const syncPayload = unSyncedLocal.map(l => ({
            type: l.type,
            title: l.title,
            subtitle: l.subtitle,
            content: l.content,
            tags: l.tags,
            personalNote: l.personalNote,
            meta: l.meta
          }));
          const syncRes = await learnApi.post('/locker/sync', syncPayload);
          if (Array.isArray(syncRes.data)) {
            const syncedItems: LockerItem[] = syncRes.data.map((d: any) => ({
              id: String(d.id),
              type: d.type || 'NOTE',
              title: d.title,
              subtitle: d.subtitle || undefined,
              content: d.content,
              tags: d.tags || [],
              personalNote: d.personalNote || undefined,
              meta: d.meta || {},
              savedAt: d.savedAt || new Date().toISOString()
            }));
            localStorage.setItem(getLockerStorageKey(), JSON.stringify(syncedItems));
            return syncedItems;
          }
        } catch (syncErr) {
          console.warn('Could not sync local items to cloud', syncErr);
        }
      }

      // If cloud has items, replace local cache with authentic cloud data
      if (cloudItems.length > 0) {
        localStorage.setItem(getLockerStorageKey(), JSON.stringify(cloudItems));
        return cloudItems;
      }
    }
  } catch (err) {
    console.warn('Could not fetch cloud locker items, falling back to local storage:', err);
  }

  return localItems;
}

export function saveLockerItem(item: Omit<LockerItem, 'id' | 'savedAt'>): LockerItem {
  const items = getLockerItems();
  const existingIndex = items.findIndex(i => i.title.trim().toLowerCase() === item.title.trim().toLowerCase());
  
  if (existingIndex >= 0) {
    return items[existingIndex];
  }

  const newItem: LockerItem = {
    ...item,
    id: 'locker-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
    savedAt: new Date().toISOString()
  };

  const updated = [newItem, ...items];
  try {
    localStorage.setItem(getLockerStorageKey(), JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving to locker', e);
  }

  // Asynchronous Cloud Save
  if (hasAuthToken()) {
    learnApi.post('/locker', {
      type: item.type,
      title: item.title,
      subtitle: item.subtitle,
      content: item.content,
      tags: item.tags,
      personalNote: item.personalNote,
      meta: item.meta
    }).then(res => {
      if (res.data?.id) {
        const current = getLockerItems();
        const mapped = current.map(c => c.id === newItem.id ? { ...c, id: String(res.data.id) } : c);
        localStorage.setItem(getLockerStorageKey(), JSON.stringify(mapped));
      }
    }).catch(err => {
      console.warn('Locker cloud save error (offline mode preserved):', err);
    });
  }

  return newItem;
}

export function removeLockerItem(id: string): void {
  const items = getLockerItems();
  const targetItem = items.find(i => i.id === id);
  const filtered = items.filter(i => i.id !== id);
  try {
    localStorage.setItem(getLockerStorageKey(), JSON.stringify(filtered));
  } catch (e) {
    console.error('Error removing from locker', e);
  }

  // Cloud Delete
  if (hasAuthToken() && id && !id.startsWith('starter-') && !id.startsWith('locker-')) {
    learnApi.delete(`/locker/${id}`).catch(err => {
      console.warn('Could not delete item from cloud:', err);
    });
  } else if (hasAuthToken() && targetItem) {
    // If it had a temporary local ID, search by title on next sync
    console.log('Removed local item:', targetItem.title);
  }
}

export function removeLockerItemByTitle(title: string): void {
  const items = getLockerItems();
  const target = items.find(i => i.title.trim().toLowerCase() === title.trim().toLowerCase());
  const filtered = items.filter(i => i.title.trim().toLowerCase() !== title.trim().toLowerCase());
  try {
    localStorage.setItem(getLockerStorageKey(), JSON.stringify(filtered));
  } catch (e) {
    console.error('Error removing from locker by title', e);
  }

  if (target && hasAuthToken() && target.id && !target.id.startsWith('starter-') && !target.id.startsWith('locker-')) {
    learnApi.delete(`/locker/${target.id}`).catch(err => {
      console.warn('Could not delete item from cloud by title:', err);
    });
  }
}

export function isItemSaved(title: string): boolean {
  const items = getLockerItems();
  return items.some(i => i.title.trim().toLowerCase() === title.trim().toLowerCase());
}

export function updatePersonalNote(id: string, note: string): void {
  const items = getLockerItems();
  const updated = items.map(item => {
    if (item.id === id) {
      return { ...item, personalNote: note };
    }
    return item;
  });
  try {
    localStorage.setItem(getLockerStorageKey(), JSON.stringify(updated));
  } catch (e) {
    console.error('Error updating note in locker', e);
  }

  // Cloud Note Update
  if (hasAuthToken() && id && !id.startsWith('starter-') && !id.startsWith('locker-')) {
    learnApi.put(`/locker/${id}/note`, { personalNote: note }).catch(err => {
      console.warn('Could not update note on cloud:', err);
    });
  }
}

export function updateLockerItem(id: string, updates: Partial<LockerItem>): void {
  const items = getLockerItems();
  const updated = items.map(item => {
    if (item.id === id) {
      return { ...item, ...updates };
    }
    return item;
  });
  try {
    localStorage.setItem(getLockerStorageKey(), JSON.stringify(updated));
  } catch (e) {
    console.error('Error updating item in locker', e);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// DAILY 1-PYQ STREAK ENGINE (LEETCODE-STYLE PERSISTENT CALENDAR & REAL STREAK)
// ─────────────────────────────────────────────────────────────────────────────

export interface DailyActivityRecord {
  date: string; // YYYY-MM-DD
  questionId?: string;
  subject?: string;
  questionTitle?: string;
  completedAt: string; // ISO
  xpEarned: number;
  selectedOption?: string;
  synced?: boolean;
}

export interface StreakState {
  streak: number;
  longestStreak: number;
  lastSolvedDate: string | null;
  solvedToday: boolean;
  totalSolved: number;
  activityHistory: Record<string, DailyActivityRecord>;
}

export interface CompleteChallengePayload {
  questionId?: string;
  subject?: string;
  questionTitle?: string;
  xpEarned?: number;
  selectedOption?: string;
}

export function getTodayDateString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDaysDifference(currentDateStr: string, pastDateStr: string): number {
  if (!currentDateStr || !pastDateStr) return Infinity;
  const [currY, currM, currD] = currentDateStr.split('-').map(Number);
  const [pastY, pastM, pastD] = pastDateStr.split('-').map(Number);
  if (isNaN(currY) || isNaN(pastY)) return Infinity;
  
  const dCurr = new Date(currY, currM - 1, currD).getTime();
  const dPast = new Date(pastY, pastM - 1, pastD).getTime();
  
  return Math.round((dCurr - dPast) / (1000 * 60 * 60 * 24));
}

export function getStreakData(): StreakState {
  const today = getTodayDateString();
  const fallback: StreakState = {
    streak: 0,
    longestStreak: 0,
    lastSolvedDate: null,
    solvedToday: false,
    totalSolved: 0,
    activityHistory: {}
  };

  const streakKey = getStreakStorageKey();
  try {
    const raw = localStorage.getItem(streakKey);
    if (!raw) {
      localStorage.setItem(streakKey, JSON.stringify(fallback));
      return fallback;
    }

    const parsed = JSON.parse(raw);
    const activityHistory: Record<string, DailyActivityRecord> = 
      parsed.activityHistory && typeof parsed.activityHistory === 'object' ? parsed.activityHistory : {};

    let streak = typeof parsed.streak === 'number' ? parsed.streak : 0;
    let longestStreak = typeof parsed.longestStreak === 'number' ? parsed.longestStreak : streak;
    const lastSolvedDate: string | null = parsed.lastSolvedDate || null;
    let totalSolved = typeof parsed.totalSolved === 'number' ? parsed.totalSolved : Object.keys(activityHistory).length;
    let solvedToday = false;

    if (lastSolvedDate) {
      const diff = getDaysDifference(today, lastSolvedDate);
      if (diff === 0) {
        solvedToday = true;
      } else if (diff === 1) {
        // Solved yesterday, streak remains alive!
        solvedToday = false;
      } else if (diff > 1) {
        // Missed one or more days -> streak resets to 0
        streak = 0;
        solvedToday = false;
      }
    } else {
      // Never solved or corrupted legacy dummy state -> reset cleanly
      streak = 0;
      solvedToday = false;
    }

    // Purge legacy dummy state (e.g. old streak: 3, totalSolved: 12 with no actual solved date)
    if (!lastSolvedDate && Object.keys(activityHistory).length === 0) {
      longestStreak = 0;
      totalSolved = 0;
    } else {
      totalSolved = Math.max(Object.keys(activityHistory).length, totalSolved);
      longestStreak = Math.max(longestStreak, streak);
    }

    const state: StreakState = {
      streak,
      longestStreak,
      lastSolvedDate,
      solvedToday,
      totalSolved,
      activityHistory
    };

    // Keep localStorage updated if streak decayed or fields were missing
    if (parsed.streak !== streak || parsed.longestStreak === undefined || parsed.activityHistory === undefined) {
      localStorage.setItem(streakKey, JSON.stringify(state));
    }

    // Background self-healing reconciliation if today was solved but not synced to backend
    if (solvedToday && activityHistory[today] && !activityHistory[today].synced && hasAuthToken()) {
      setTimeout(() => {
        syncPendingDailyChallengeWithBackend();
      }, 50);
    }

    return state;
  } catch (e) {
    console.error('Error reading streak data', e);
    return fallback;
  }
}

export function recordDailyChallengeComplete(
  payload?: CompleteChallengePayload
): { newStreak: number; alreadySolved: boolean; longestStreak: number } {
  const data = getStreakData();
  const today = getTodayDateString();
  const streakKey = getStreakStorageKey();

  if (data.solvedToday || data.lastSolvedDate === today) {
    let hasUpdate = false;
    if (data.activityHistory[today]) {
      if (payload?.xpEarned && payload.xpEarned > (data.activityHistory[today].xpEarned || 0)) {
        data.activityHistory[today].xpEarned = payload.xpEarned;
        hasUpdate = true;
      }
      if (payload?.selectedOption && payload.selectedOption !== data.activityHistory[today].selectedOption) {
        data.activityHistory[today].selectedOption = payload.selectedOption;
        hasUpdate = true;
      }
    }
    if (hasUpdate) {
      try {
        localStorage.setItem(streakKey, JSON.stringify(data));
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('preplens_streak_updated', { detail: data }));
        }
      } catch (e) {}
    }
    return { newStreak: data.streak, alreadySolved: true, longestStreak: data.longestStreak };
  }

  let newStreak = 1;
  if (data.lastSolvedDate) {
    const diff = getDaysDifference(today, data.lastSolvedDate);
    if (diff === 1) {
      newStreak = data.streak + 1;
    } else {
      newStreak = 1;
    }
  } else {
    newStreak = 1;
  }

  const newLongest = Math.max(data.longestStreak, newStreak);
  const xp = payload?.xpEarned ?? 25;

  const newActivity: DailyActivityRecord = {
    date: today,
    questionId: payload?.questionId,
    subject: payload?.subject,
    questionTitle: payload?.questionTitle,
    completedAt: new Date().toISOString(),
    xpEarned: xp,
    selectedOption: payload?.selectedOption,
    synced: false
  };

  const updated: StreakState = {
    streak: newStreak,
    longestStreak: newLongest,
    lastSolvedDate: today,
    solvedToday: true,
    totalSolved: data.totalSolved + 1,
    activityHistory: {
      ...data.activityHistory,
      [today]: newActivity
    }
  };

  try {
    localStorage.setItem(streakKey, JSON.stringify(updated));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('preplens_streak_updated', { detail: updated }));
    }
    // Auto-sync with backend database immediately
    syncPendingDailyChallengeWithBackend();
  } catch (e) {
    console.error('Error saving streak', e);
  }

  return { newStreak, alreadySolved: false, longestStreak: newLongest };
}

let isSyncingDailyChallenge = false;

/**
 * Automatically reconciles uncommitted daily challenge XP with backend database.
 * Completely idempotent and safe against race conditions.
 */
export async function syncPendingDailyChallengeWithBackend(): Promise<void> {
  if (isSyncingDailyChallenge) return;
  if (!hasAuthToken()) return;
  
  isSyncingDailyChallenge = true;
  try {
    const streakKey = getStreakStorageKey();
    const raw = localStorage.getItem(streakKey);
    if (!raw) return;

    const data: StreakState = JSON.parse(raw);
    const today = getTodayDateString();
    const todayRecord = data.activityHistory?.[today];

    if (!todayRecord && !data.solvedToday) return;
    if (todayRecord && todayRecord.synced) return;

    const isCorrect = todayRecord ? (todayRecord.xpEarned ?? 50) >= 50 : true;
    const response = await learnApi.post('/leaderboard/daily-challenge', {
      questionId: todayRecord?.questionId || 'daily-pyq-' + today,
      subject: todayRecord?.subject || 'Daily Challenge',
      questionTitle: todayRecord?.questionTitle || 'Daily PYQ',
      isCorrect,
      selectedOption: todayRecord?.selectedOption
    });

    if (response.data) {
      if (todayRecord) {
        todayRecord.synced = true;
      }
      localStorage.setItem(streakKey, JSON.stringify(data));

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('preplens_streak_updated', { detail: data }));
        if (typeof response.data.totalXp === 'number') {
          window.dispatchEvent(new CustomEvent('preplens_xp_updated', {
            detail: {
              totalXp: response.data.totalXp,
              awardedXp: response.data.awardedXp,
              alreadyAwarded: response.data.alreadyAwarded
            }
          }));
        }
      }
    }
  } catch (err) {
    console.warn('Could not sync pending Daily PYQ challenge to server:', err);
  } finally {
    isSyncingDailyChallenge = false;
  }
}

/**
 * Resets memory & broadcast state on student logout.
 */
export function resetStreakStateForLogout(): void {
  const empty: StreakState = {
    streak: 0,
    longestStreak: 0,
    lastSolvedDate: null,
    solvedToday: false,
    totalSolved: 0,
    activityHistory: {}
  };
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('preplens_streak_updated', { detail: empty }));
  }
}

export function isDateSolved(dateStr: string): boolean {
  const data = getStreakData();
  return !!data.activityHistory[dateStr] || data.lastSolvedDate === dateStr;
}

export function getStreakActivityHistory(): Record<string, DailyActivityRecord> {
  return getStreakData().activityHistory;
}

export function subscribeToStreakUpdates(callback: (state: StreakState) => void): () => void {
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<StreakState>;
    if (customEvent.detail) {
      callback(customEvent.detail);
    } else {
      callback(getStreakData());
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('preplens_streak_updated', handler);
    window.addEventListener('storage', handler);
  }
  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('preplens_streak_updated', handler);
      window.removeEventListener('storage', handler);
    }
  };
}
