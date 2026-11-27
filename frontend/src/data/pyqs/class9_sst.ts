import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_SST_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE / KVS CLASS 9 SOCIAL SCIENCE ANNUAL EXAM 2024 (COMPLETE - 37 Qs)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c9-sst-2024-annual',
    title: 'CBSE Class 9 Social Science Annual Examination 2024 (Uniform Standard Paper - Code 087)',
    subject: 'Social Science',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'CBSE/C9/SST/087/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 37,
    generalInstructions: [
      'The question paper comprises Six Sections – A, B, C, D, E and F. There are 37 questions in the question paper. All questions are compulsory.',
      'Section A – From question 1 to 20 are MCQs of 1 mark each.',
      'Section B – Question no. 21 to 24 are Very Short Answer Type Questions, carrying 2 marks each. Answer should not exceed 40 words.',
      'Section C – Question no. 25 to 29 are Short Answer Type Questions, carrying 3 marks each. Answer should not exceed 60 words.',
      'Section D – Question no. 30 to 33 are Long Answer Type Questions, carrying 5 marks each. Answer should not exceed 120 words.',
      'Section E – Question no. 34 to 36 are Case Based Questions with three sub-questions and are of 4 marks each.',
      'Section F – Question no. 37 is Map skill-based with two parts: 37a from History (2 marks) and 37b from Geography (3 marks).'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sst-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'History: The French Revolution - Social Hierarchy',
        questionText: 'Under the Old Regime in France prior to 1789, which social group paid the direct tax named "Taille"?',
        options: [
          'A) First Estate (Clergy only)',
          'B) Second Estate (Nobility only)',
          'C) Members of the Third Estate (Peasants, artisans, and bourgeoisie)',
          'D) Both First and Second Estates'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Members of the Third Estate (Peasants, artisans, and bourgeoisie).\nIn 18th-century French society, the clergy (First Estate) and nobility (Second Estate) enjoyed feudal privileges and exemptions from state taxes. The entire burden of financing state activities through taxes (including the direct tax Taille and indirect taxes on salt and tobacco) fell exclusively upon the Third Estate.',
        stepMarking: [
          { step: 'Correct Option C selected with Third Estate taxation context', marks: '1 Mark' }
        ],
        examinerTip: 'Distinguish clearly between "Tithes" (tax levied by the Church, 1/10th of agricultural produce) and "Taille" (tax paid directly to the State).',
        commonPitfall: 'Confusing Tithe with Taille.'
      },
      {
        id: 'c9-sst-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'History: The French Revolution - Political Symbols',
        questionText: 'During the French Revolution, the Phrygian cap (Red Cap) worn by sans-culottes symbolised:',
        options: [
          'A) Royal authority and absolute monarchy',
          'B) Liberty and freedom from slavery or bondage',
          'C) Knowledge and enlightenment',
          'D) Eternity and uninterrupted unity'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Liberty and freedom from slavery or bondage.\nThe red Phrygian cap was an iconic Revolutionary symbol derived from ancient Rome, worn by emancipated slaves to represent newly attained liberty and emancipation.',
        stepMarking: [
          { step: 'Option B correctly chosen', marks: '1 Mark' }
        ],
        examinerTip: 'Revise all NCERT political symbols: Broken Chain (Liberty), Bundle of rods (Strength in unity), Eye within triangle radiating light (Knowledge), Sceptre (Royal power), Snake biting tail (Eternity).',
        commonPitfall: 'Mistaking the Phrygian cap for a symbol of the Reign of Terror.'
      },
      {
        id: 'c9-sst-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'History: Socialism in Europe & Russian Revolution',
        questionText: 'Who led the Bolshevik group during the Russian Revolution and advocated the famous "April Theses"?',
        options: [
          'A) Tsar Nicholas II',
          'B) Alexander Kerensky',
          'C) Vladimir Lenin',
          'D) Leon Trotsky'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Vladimir Lenin.\nIn April 1917, Bolshevik leader Vladimir Lenin returned to Russia from exile and put forward his three radical demands known as "April Theses": (1) War be brought to a close, (2) Land be transferred to the peasants, and (3) Banks be nationalised.',
        stepMarking: [
          { step: 'Option C selected with correct Bolshevik leadership attribution', marks: '1 Mark' }
        ],
        examinerTip: 'Always remember the three specific demands of Lenin\'s April Theses for both 1-mark and 3-mark questions.',
        commonPitfall: 'Confusing Alexander Kerensky (leader of Provisional Government) with Vladimir Lenin.'
      },
      {
        id: 'c9-sst-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'History: Nazism and the Rise of Hitler',
        questionText: 'The German Parliament before the rise of totalitarian Nazi rule was officially known as:',
        options: [
          'A) Duma',
          'B) Reichstag',
          'C) National Assembly',
          'D) Estates General'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Reichstag.\nThe German parliament established during the Weimar Republic was called the Reichstag. On 28 February 1933, following the Reichstag Fire, Hitler used emergency powers to suspend civil liberties.',
        stepMarking: [
          { step: 'Option B chosen correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Note the distinct legislative assemblies: Duma (Russia), Reichstag (Germany), National Assembly (France), Estates General (Pre-Revolution France).',
        commonPitfall: 'Marking Duma (which was Russian, not German).'
      },
      {
        id: 'c9-sst-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Geography: India - Size and Location',
        questionText: 'The Standard Meridian of India passes through Mirzapur (Uttar Pradesh) and its longitude is:',
        options: [
          'A) 68°7′ E',
          'B) 97°25′ E',
          'C) 82°30′ E',
          'D) 23°30′ N'
        ],
        correctOption: 'C',
        modelAnswer: 'C) 82°30′ E.\nThe meridian 82°30′ E passing through Mirzapur in Uttar Pradesh is taken as the Standard Meridian for the whole country to avoid time confusion across India\'s 30° longitudinal span (which produces an almost 2-hour local time lag between Gujarat and Arunachal Pradesh).',
        stepMarking: [
          { step: 'Option C identified accurately', marks: '1 Mark' }
        ],
        examinerTip: 'Remember that 23°30′ N is the Tropic of Cancer, not a meridian. Longitudes designate East/West, while latitudes designate North/South.',
        commonPitfall: 'Confusing latitude of Tropic of Cancer (23°30\' N) with longitude of Standard Meridian (82°30\' E).'
      },
      {
        id: 'c9-sst-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Geography: Physical Features of India',
        questionText: 'The highest peak in peninsular South India (Western Ghats) is:',
        options: [
          'A) Mahendragiri',
          'B) Doda Betta',
          'C) Anai Mudi',
          'D) Kanchenjunga'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Anai Mudi.\nAnai Mudi (elevation 2,695 metres), located in the Anaimalai Hills in Kerala, is the highest peak of the Western Ghats and of the entire peninsular India. Doda Betta (2,637 m) is the second highest peak.',
        stepMarking: [
          { step: 'Option C correctly identified', marks: '1 Mark' }
        ],
        examinerTip: 'Mahendragiri (1,501 m) is the highest peak in the Eastern Ghats; Anai Mudi (2,695 m) belongs to the Western Ghats.',
        commonPitfall: 'Writing Mahendragiri or Doda Betta instead of Anai Mudi.'
      },
      {
        id: 'c9-sst-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Geography: Drainage',
        questionText: 'Which one of the following is a peninsular river that flows westward through a rift valley and drains into the Arabian Sea?',
        options: [
          'A) Godavari',
          'B) Mahanadi',
          'C) Narmada',
          'D) Krishna'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Narmada.\nNarmada and Tapi are the two major west-flowing peninsular rivers. The Narmada originates in the Amarkantak hills (Madhya Pradesh) and flows through a rift valley formed due to faulting before entering the Arabian Sea, forming picturesque gorges like the "Marble Rocks" near Jabalpur.',
        stepMarking: [
          { step: 'Option C selected with rift valley reasoning', marks: '1 Mark' }
        ],
        examinerTip: 'Most peninsular rivers (Mahanadi, Godavari, Krishna, Kaveri) flow eastwards into the Bay of Bengal and form deltas; only Narmada and Tapi flow westwards into the Arabian Sea and make estuaries.',
        commonPitfall: 'Selecting Godavari (which flows eastwards into the Bay of Bengal).'
      },
      {
        id: 'c9-sst-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Geography: Climate - Coriolis Force',
        questionText: 'The apparent force caused by the Earth\'s rotation that deflects winds towards the right in the Northern Hemisphere and left in the Southern Hemisphere is:',
        options: [
          'A) Gravitational Force',
          'B) Coriolis Force',
          'C) Centripetal Force',
          'D) Magnetic Force'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Coriolis Force.\nThe Coriolis force is an apparent inertial force generated by the Earth\'s rotation on its axis. It deflects moving air masses to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, a mechanism mathematically codified by Ferrel\'s Law.',
        stepMarking: [
          { step: 'Option B accurately chosen', marks: '1 Mark' }
        ],
        examinerTip: 'Coriolis force is zero at the equator and maximum at the poles.',
        commonPitfall: 'Selecting centrifugal or gravitational force.'
      },
      {
        id: 'c9-sst-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Democratic Politics: What is Democracy? Why Democracy?',
        questionText: 'In Pakistan, General Pervez Musharraf led a military coup and issued a "Legal Framework Order" in August 2002 that:',
        options: [
          'A) Declared Pakistan a secular republic',
          'B) Empowered the President to dismiss national and provincial assemblies',
          'C) Granted universal adult suffrage to all minorities',
          'D) Abolished the military courts'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Empowered the President to dismiss national and provincial assemblies.\nUnder the Legal Framework Order (August 2002), General Musharraf amended Pakistan\'s Constitution, granting the President sweeping authority to dismiss national and provincial assemblies. Even though elections were held, final decision-making power rested with military officers, violating the democratic principle that final decisions must rest with those elected by the people.',
        stepMarking: [
          { step: 'Option B correctly selected', marks: '1 Mark' }
        ],
        examinerTip: 'This case is the quintessential NCERT example demonstrating that mere holding of elections does not guarantee democracy if power does not lie with elected representatives.',
        commonPitfall: 'Confusing Musharraf\'s referendum with constitutional democracy.'
      },
      {
        id: 'c9-sst-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Democratic Politics: Constitutional Design',
        questionText: 'Nelson Mandela was imprisoned on Robben Island for 28 years by the white minority regime of South Africa for opposing:',
        options: [
          'A) Universal Adult Suffrage',
          'B) The system of Apartheid (institutional racial discrimination)',
          'C) The United Nations Charter',
          'D) Industrialisation in Johannesburg'
        ],
        correctOption: 'B',
        modelAnswer: 'B) The system of Apartheid (institutional racial discrimination).\nNelson Mandela and seven other African National Congress (ANC) leaders were sentenced to life imprisonment in 1964 for daring to oppose Apartheid—the official policy of racial segregation and white supremacy enforced by the South African government.',
        stepMarking: [
          { step: 'Option B selected', marks: '1 Mark' }
        ],
        examinerTip: 'Apartheid segregated blacks, whites, and coloureds in buses, trains, hospitals, schools, and even beaches ("segregation").',
        commonPitfall: 'Confusing the duration (28 years) or island name (Robben Island).'
      },
      {
        id: 'c9-sst-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Democratic Politics: Electoral Politics',
        questionText: 'In India, who conducts and supervises free and fair elections to the Lok Sabha and State Legislative Assemblies?',
        options: [
          'A) Supreme Court of India',
          'B) Election Commission of India (an independent constitutional body)',
          'C) Prime Minister\'s Office',
          'D) Ministry of Parliamentary Affairs'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Election Commission of India (an independent constitutional body).\nUnder Article 324 of the Constitution, the Election Commission of India (ECI) functions with high independence similar to the Judiciary, free from executive interference, controlling polling, implementation of the Model Code of Conduct, and declaration of election results.',
        stepMarking: [
          { step: 'Option B chosen correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Chief Election Commissioner (CEC) is appointed by the President, but once appointed, cannot be removed easily except through parliamentary impeachment.',
        commonPitfall: 'Thinking elections are run by the Ministry of Home Affairs.'
      },
      {
        id: 'c9-sst-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Democratic Politics: Working of Institutions',
        questionText: 'Which house of the Indian Parliament exercises greater control over financial matters and Money Bills?',
        options: [
          'A) Rajya Sabha (Council of States)',
          'B) Lok Sabha (House of the People)',
          'C) Vidhan Parishad',
          'D) Both houses hold completely equal powers over Money Bills'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Lok Sabha (House of the People).\nOnce the Lok Sabha passes the budget or any money bill, the Rajya Sabha cannot reject it; it can only delay it for a maximum of 14 days or suggest modifications, which the Lok Sabha may accept or reject.',
        stepMarking: [
          { step: 'Option B accurately identified', marks: '1 Mark' }
        ],
        examinerTip: 'Three key dimensions where Lok Sabha dominates Rajya Sabha: Joint Session voting (due to larger numbers), Financial/Money bills, and Council of Ministers\' collective responsibility (no-confidence motion).',
        commonPitfall: 'Believing both houses have identical powers over money bills.'
      },
      {
        id: 'c9-sst-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Economics: Story of Village Palampur - Factors of Production',
        questionText: 'Which of the following is considered "Working Capital" in farming activities?',
        options: [
          'A) Tractors, threshers, and tubewells',
          'B) Raw materials (seeds, fertilizers) and money in hand',
          'C) Agricultural land owned by the farmer',
          'D) Farm buildings and godowns'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Raw materials (seeds, fertilizers) and money in hand.\nWorking capital consists of variable inputs and liquid funds consumed or turned over during production (e.g. HYV seeds, fertilizers, chemical sprays, cash to pay farm labourers). Tools, machines, and buildings are "Fixed Capital" as they can be used across multiple production seasons.',
        stepMarking: [
          { step: 'Option B chosen with distinction from fixed capital', marks: '1 Mark' }
        ],
        examinerTip: 'Fixed capital survives the production cycle; working capital is exhausted during production.',
        commonPitfall: 'Classifying farm machinery as working capital.'
      },
      {
        id: 'c9-sst-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Economics: People as Resource - Types of Unemployment',
        questionText: 'When more people are engaged in an agricultural plot than actually needed, so that removing some workers does not reduce total crop output, this situation is called:',
        options: [
          'A) Seasonal Unemployment',
          'B) Disguised Unemployment (Underemployment)',
          'C) Educated Unemployment',
          'D) Frictional Unemployment'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Disguised Unemployment (Underemployment).\nDisguised unemployment is widely prevalent in India\'s agricultural sector: if an acre requires 5 workers, but all 8 family members work on it, the marginal productivity of the extra 3 workers is zero. Their contribution is redundant.',
        stepMarking: [
          { step: 'Option B selected with marginal productivity rationale', marks: '1 Mark' }
        ],
        examinerTip: 'Contrast Disguised Unemployment (rural farm family redundancy) with Seasonal Unemployment (no work during off-sowing/off-harvesting months).',
        commonPitfall: 'Confusing seasonal with disguised unemployment.'
      },
      {
        id: 'c9-sst-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Economics: Poverty as a Challenge - Poverty Line',
        questionText: 'In India, the accepted average calorie requirement per person per day for determining the poverty line in rural areas is:',
        options: [
          'A) 2100 calories',
          'B) 2400 calories',
          'C) 1800 calories',
          'D) 2700 calories'
        ],
        correctOption: 'B',
        modelAnswer: 'B) 2400 calories.\nBecause people living in rural areas engage in more strenuous physical labour, their caloric requirement is pegged higher at 2400 calories per person per day, compared to 2100 calories per person per day in urban areas.',
        stepMarking: [
          { step: 'Option B correctly chosen', marks: '1 Mark' }
        ],
        examinerTip: 'Always remember: Rural = 2400 calories/day, Urban = 2100 calories/day.',
        commonPitfall: 'Swapping rural (2400) and urban (2100) values.'
      },
      {
        id: 'c9-sst-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Economics: Food Security in India - Buffer Stock',
        questionText: 'Buffer Stock in India is created by the government through which organisation to distribute foodgrains in deficit areas?',
        options: [
          'A) NITI Aayog',
          'B) Food Corporation of India (FCI)',
          'C) Indian Council of Agricultural Research (ICAR)',
          'D) NABARD'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Food Corporation of India (FCI).\nBuffer Stock is the stock of foodgrains (wheat and rice) procured by the Government through the Food Corporation of India (FCI) from farmers at Minimum Support Price (MSP) to release during crises and through the Public Distribution System (PDS).',
        stepMarking: [
          { step: 'Option B identified accurately', marks: '1 Mark' }
        ],
        examinerTip: 'FCI buys at MSP (Minimum Support Price) and distributes via fair price shops at Issue Price (lower than market price).',
        commonPitfall: 'Choosing NABARD (which is a rural development bank).'
      },
      {
        id: 'c9-sst-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'History: The French Revolution - Assertion & Reason',
        questionText: 'Given below are two statements, one labelled as Assertion (A) and the other as Reason (R):\nAssertion (A): On 14 July 1789, the agitated crowd stormed and destroyed the fortress-prison of the Bastille in Paris.\nReason (R): The Bastille stood as the despised symbol of the despotic power of the French monarch.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nThe fortress of Bastille was hated by all French citizens because it stood for the despotic, unchecked tyranny of King Louis XVI. Its destruction on 14 July 1789 signified the assault on absolute monarchy and launched the French Revolution.',
        stepMarking: [
          { step: 'Option A selected with complete causal link verified', marks: '1 Mark' }
        ],
        examinerTip: 'When solving Assertion-Reason, place the word "BECAUSE" between A and R to check if R logically explains A.',
        commonPitfall: 'Selecting option B assuming R is merely an unrelated true statement.'
      },
      {
        id: 'c9-sst-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Geography: Physical Features - Assertion & Reason',
        questionText: 'Assertion (A): Northern Plains of India are agriculturally very productive and densely populated.\nReason (R): The plains have rich alluvial soil cover, adequate water supply, and a favorable climate.\nSelect the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true but (R) is not the correct explanation of (A).',
          'C) (A) is true but (R) is false.',
          'D) (A) is false but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nThe Northern Plains are formed by the interplay of three major river systems (Indus, Ganga, Brahmaputra). The deposition of alluvium over millions of years along with perennial river water and level topography makes it the granary of India and highly populated.',
        stepMarking: [
          { step: 'Option A correctly selected', marks: '1 Mark' }
        ],
        examinerTip: 'Connect soil fertility (alluvium) directly to high agricultural output and demographic density.',
        commonPitfall: 'Thinking industrialization alone causes the population density.'
      },
      {
        id: 'c9-sst-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Democratic Politics: Constitutional Design - Preamble',
        questionText: 'Which key constitutional term in the Preamble ensures that citizens cannot be discriminated against on grounds of caste, religion, or gender, and that government guarantees equal opportunities?',
        options: [
          'A) Sovereign',
          'B) Equality',
          'C) Fraternity',
          'D) Secular'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Equality.\n"EQUALITY of status and of opportunity" in the Preamble of the Indian Constitution means all citizens are equal before the law, traditional social inequalities must end, and the government must ensure equal opportunity for all.',
        stepMarking: [
          { step: 'Option B chosen correctly', marks: '1 Mark' }
        ],
        examinerTip: 'Fraternity = sense of brotherhood; Liberty = freedom of thought/faith; Equality = absence of special privileges and presence of adequate opportunities.',
        commonPitfall: 'Confusing Equality with Fraternity.'
      },
      {
        id: 'c9-sst-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Economics: People as Resource - Human Capital',
        questionText: 'Investment in human capital can be made through:',
        options: [
          'A) Purchasing tractors and factory machines',
          'B) Education, healthcare, and job training',
          'C) Acquiring foreign currency reserves',
          'D) Expanding physical real estate holdings'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Education, healthcare, and job training.\nWhen investments are made in human resources in the form of quality schooling, vocational training, and medical healthcare, the population transforms into "Human Capital", yielding high returns in national productivity (as seen in Japan\'s growth).',
        stepMarking: [
          { step: 'Option B correctly chosen', marks: '1 Mark' }
        ],
        examinerTip: 'Remember the classic NCERT example of Sakal (educated, healthy, IT job) versus Vilas (uneducated, arthritis, fish vendor) to illustrate human capital formation.',
        commonPitfall: 'Confusing physical capital with human capital.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: VERY SHORT ANSWER QUESTIONS (Q21 to Q24 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sst-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'History: The French Revolution - Subsistence Crisis',
        questionText: 'What is meant by a "Subsistence Crisis"? State any two factors responsible for it in France during the late 18th century.',
        modelAnswer: '1. Definition: A subsistence crisis is an extreme situation where the basic means of livelihood of the population are endangered.\n2. Factors responsible in France (1789):\n   • Rapid population explosion: Rose from 23 million in 1715 to 28 million in 1789, creating severe scarcity of foodgrains and steep inflation in bread prices.\n   • Adverse climate / crop failure: Severe droughts or hailstorms repeatedly ruined harvests, driving workers with fixed wages into starvation.',
        stepMarking: [
          { step: 'Accurate definition of subsistence crisis', marks: '1 Mark' },
          { step: 'Any two valid causes (population boom / bread price rise / drought / fixed wages)', marks: '1 Mark' }
        ],
        examinerTip: 'Always write concise points rather than long paragraphs for 2-mark questions to secure full marks.',
        commonPitfall: 'Failing to define the term and only writing causes.'
      },
      {
        id: 'c9-sst-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Geography: Physical Features - Bhabar vs Terai',
        questionText: 'Distinguish between the "Bhabar" and "Terai" regions of the Northern Plains.',
        modelAnswer: '• Bhabar:\n  - A narrow belt of 8 to 16 km width running parallel to the slopes of the Shivalik hills.\n  - Composed of pebble deposits; streams and rivers disappear underground into the pebble beds.\n\n• Terai:\n  - Lies immediately south of the Bhabar belt.\n  - Wet, swampy, and marshy tract where underground streams re-emerge; originally densely forested and rich in wildlife.',
        stepMarking: [
          { step: 'Correct characterisation of Bhabar (pebble belt, disappearing streams)', marks: '1 Mark' },
          { step: 'Correct characterisation of Terai (marshy, re-emerging streams, wildlife)', marks: '1 Mark' }
        ],
        examinerTip: 'Tabular comparison is appreciated by CBSE evaluators for geological distinctions.',
        commonPitfall: 'Swapping the order of Bhabar and Terai from north to south.'
      },
      {
        id: 'c9-sst-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Democratic Politics: What is Democracy? - Core Feature',
        questionText: 'Explain the democratic principle: "One person, one vote, one value" with an example where it was denied.',
        modelAnswer: '1. Meaning: In a true democracy, every adult citizen must have one vote and each vote must carry equal weight/value.\n2. Denial Example:\n   • In Fiji, the electoral system is designed so that the vote of an indigenous Fijian has more value than that of an Indo-Fijian.\n   • (Or: In Saudi Arabia, women were not allowed to vote until recent reforms; or in Estonia, Russian minorities faced extreme difficulty getting voting rights).',
        stepMarking: [
          { step: 'Clear definition of "one person, one vote, one value"', marks: '1 Mark' },
          { step: 'Valid real-world example of its denial (Fiji / Saudi Arabia / Estonia)', marks: '1 Mark' }
        ],
        examinerTip: 'Mentioning Fiji\'s indigenous weightage gives direct alignment with NCERT key case studies.',
        commonPitfall: 'Explaining only voting rights without addressing the "equal value" aspect.'
      },
      {
        id: 'c9-sst-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Economics: Story of Village Palampur - Multiple Cropping',
        questionText: 'What is "Multiple Cropping"? How does modern irrigation help farmers in Palampur practice it?',
        modelAnswer: '1. Multiple Cropping: To grow more than one crop on the same piece of land during a single agricultural year is called multiple cropping. It is the most common method of increasing production from fixed land.\n2. Role of Irrigation: The spread of electricity enabled farmers to operate electric tubewells that irrigate much larger areas quickly and reliably, allowing them to cultivate Kharif crops (Jowar, Bajra), Rabi crops (Wheat), and a third crop (Potato).',
        stepMarking: [
          { step: 'Clear definition of multiple cropping', marks: '1 Mark' },
          { step: 'Explanation of electric tubewells / reliable water supporting 3 crops/year', marks: '1 Mark' }
        ],
        examinerTip: 'List the crops grown in Palampur (Kharif: Jowar/Bajra; Rabi: Wheat; Intermediate: Potato) for bonus clarity.',
        commonPitfall: 'Confusing multiple cropping with crop rotation.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER QUESTIONS (Q25 to Q29 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sst-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'History: Socialism in Europe - Russian Revolution (Bloody Sunday)',
        questionText: 'Describe the incident known as "Bloody Sunday" (1905). What was its historical significance in Russia?',
        modelAnswer: '1. The Incident (22 January 1905):\n   A peaceful procession of Russian industrial workers led by Father Gapon marched towards the Winter Palace in St. Petersburg to present a petition to Tsar Nicholas II demanding better working conditions, an 8-hour workday, and higher wages.\n\n2. The Attack:\n   The procession was brutally attacked by police and Cossacks. Over 100 workers were killed and around 300 wounded.\n\n3. Significance:\n   • This massacre triggered a nationwide wave of strikes by students, lawyers, doctors, and workers demanding a constituent assembly.\n   • It forced the Tsar to concede the creation of an elected consultative parliament called the "Duma", acting as the dress rehearsal for the 1917 Revolutions.',
        stepMarking: [
          { step: 'Description of the procession led by Father Gapon to Winter Palace', marks: '1 Mark' },
          { step: 'Details of the massacre by Cossacks and casualties', marks: '1 Mark' },
          { step: 'Historical impact: Creation of Duma and 1905 Revolution trigger', marks: '1 Mark' }
        ],
        examinerTip: 'State the leader (Father Gapon), target location (Winter Palace), and political consequence (Creation of Duma).',
        commonPitfall: 'Writing that Tsar was assassinated in this incident.'
      },
      {
        id: 'c9-sst-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Geography: India - Strategic Central Location',
        questionText: 'Explain three geographic advantages India derives from its central location at the head of the Indian Ocean.',
        modelAnswer: '1. Trans-Indian Ocean Routes: The trans-Indian ocean trade routes connect industrially advanced countries of Western Europe with the rapidly growing markets of East and Southeast Asia, placing India at an eminent central junction.\n\n2. Maritime Ties via Peninsular Shape: The Deccan Peninsula protrudes into the Indian Ocean, enabling India to establish close maritime contact with West Asia, Africa, and Europe from the western coast, and with Southeast and East Asia from the eastern coast.\n\n3. Unique Dominance & Ocean Naming: No other country has as long a coastline on the Indian Ocean as India has; this justified naming an entire ocean after the country.',
        stepMarking: [
          { step: 'Trade routes connecting Europe and East Asia', marks: '1 Mark' },
          { step: 'Deccan peninsula facilitating dual-coast connectivity', marks: '1 Mark' },
          { step: 'Extensive coastline and maritime authority', marks: '1 Mark' }
        ],
        examinerTip: 'Cite the opening of the Suez Canal (1869), which reduced the travel distance to Europe by 7,000 km.',
        commonPitfall: 'Giving vague political answers instead of physical and maritime trade advantages.'
      },
      {
        id: 'c9-sst-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Geography: Climate - Characteristics of Monsoons',
        questionText: 'The monsoon is often described as a "unifying bond" for the Indian subcontinent. Justify this statement with three arguments.',
        modelAnswer: '1. Rhythmic Agricultural Cycle: The entire agricultural calendar of India and the life of millions of farmers revolve around the arrival and distribution of monsoon rains.\n\n2. Uniform Climatic Rhythm: Despite regional diversity in temperature, the monsoon winds provide a rhythmic cycle of seasons (advancing, retreating, cold, and hot weather) throughout the subcontinent.\n\n3. Cultural and Social Unity: Indian folklore, music, festivals (like Teej, Baisakhi, Onam), and literature are deeply woven around the monsoon arrival and celebration of life and crops.',
        stepMarking: [
          { step: 'Agrarian cycle dependent on monsoon rains', marks: '1 Mark' },
          { step: 'Climatic seasonal rhythm unifying diversity', marks: '1 Mark' },
          { step: 'Cultural unity, literature, and rain festival celebration', marks: '1 Mark' }
        ],
        examinerTip: 'Use keywords: "rhythmic cycle of seasons", "agricultural calendar", "unifying bond".',
        commonPitfall: 'Writing only about rainfall and omitting cultural and agricultural unity.'
      },
      {
        id: 'c9-sst-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Democratic Politics: Electoral Politics - Challenges to Free Elections',
        questionText: 'Mention three major challenges to free and fair elections in India.',
        modelAnswer: '1. Money Power: Candidates and rich political parties with immense financial muscle enjoy an unfair advantage over smaller parties and independent candidates.\n\n2. Criminal Connections: Candidates with criminal records and pending legal cases often secure party tickets by using intimidation to push genuine leaders aside.\n\n3. Dynastic Succession: Family dynasties tend to dominate party leadership, distributing nomination tickets primarily to their own relatives, denying equal opportunity to ordinary grassroot party workers.',
        stepMarking: [
          { step: 'Excessive role of money power and wealthy candidates', marks: '1 Mark' },
          { step: 'Criminalization of politics and muscular intimidation', marks: '1 Mark' },
          { step: 'Dynastic succession and lack of internal party democracy', marks: '1 Mark' }
        ],
        examinerTip: 'Can also mention: lack of meaningful choices between mainstream parties and uneven playing field for independents.',
        commonPitfall: 'Saying EVMs are rigged (ECI is an independent body; focus on real NCERT systemic challenges).'
      },
      {
        id: 'c9-sst-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Economics: Poverty as a Challenge - Anti-Poverty Programmes',
        questionText: 'State the key features of the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005.',
        modelAnswer: '1. 100 Days Guaranteed Wage Employment: Aims to guarantee 100 days of wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work.\n\n2. Women Empowerment: One-third of the proposed jobs are legally reserved for women beneficiaries.\n\n3. Unemployment Allowance: If an applicant is not provided employment within 15 days of applying, he/she is entitled to a daily unemployment allowance paid by the government.',
        stepMarking: [
          { step: '100 days of guaranteed wage employment stated', marks: '1 Mark' },
          { step: 'One-third reservation for women highlighted', marks: '1 Mark' },
          { step: '15-day unemployment allowance mechanism explained', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure you write the exact statutory figures: "100 days", "1/3rd for women", "15 days for allowance".',
        commonPitfall: 'Writing general welfare points without exact legislative figures.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q30 to Q33 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sst-24-q30',
        qNum: 30,
        section: 'D',
        marks: 5,
        topic: 'History: Nazism and the Rise of Hitler',
        questionText: 'Examine the circumstances that led to the rise of Adolf Hitler to power in Germany.',
        modelAnswer: '1. Humiliation of the Treaty of Versailles (1919):\n   The harsh and humiliating peace treaty forced Germany to accept war guilt, demilitarise the Rhineland, and cede overseas colonies along with 75% of iron and 26% of coal to France, Poland, and Denmark. The Germans felt betrayed by the democratic Weimar Republic.\n\n2. Political Fragility of the Weimar Republic:\n   The Weimar Constitution had inherent defects: proportional representation caused unstable coalitions, and Article 48 gave the President emergency powers to suspend rights, leading to frequent cabinet collapses and public disillusionment.\n\n3. The Great Economic Crisis (1929):\n   The Wall Street Crash ruined Germany\'s economy. By 1932, industrial output fell by 40%, 6 million people were unemployed, and hyperinflation wiped out savings. Men stood on street corners with placards saying "Willing to do any work".\n\n4. Charismatic Oratory and Propaganda:\n   Hitler was a powerful orator. He promised to restore national dignity, undo the injustice of Versailles, provide employment for the youth, and resist foreign conspiracies. Massive Nazi rallies with the Swastika banner created a hypnotic spectacle of power.\n\n5. Exploitation of Communist-Socialist Divisions:\n   Communists and Socialists were bitter enemies and could not unite against Hitler, allowing Hitler to be appointed Chancellor by President Hindenburg on 30 January 1933, followed by the Enabling Act of 1933 establishing dictatorship.',
        stepMarking: [
          { step: 'Treaty of Versailles humiliation & territorial losses explained', marks: '1 Mark' },
          { step: 'Weimar Republic structural instability & Article 48 abuses', marks: '1 Mark' },
          { step: '1929 Economic Depression & massive unemployment', marks: '1 Mark' },
          { step: 'Hitler\'s charismatic propaganda & rallies', marks: '1 Mark' },
          { step: 'Appointment as Chancellor (1933) and Enabling Act dictatorship', marks: '1 Mark' }
        ],
        examinerTip: 'Break the 5 marks into five clearly headed sub-points: Treaty of Versailles, Weimar Weakness, Economic Crash 1929, Propaganda, Enabling Act.',
        commonPitfall: 'Focusing exclusively on World War II instead of the pre-1933 rise to power.'
      },
      {
        id: 'c9-sst-24-q31',
        qNum: 31,
        section: 'D',
        marks: 5,
        topic: 'Geography: Physical Features - Himalayan Mountains vs Peninsular Plateau',
        questionText: 'Compare the Himalayan Mountains with the Peninsular Plateau of India across five physiographic parameters.',
        modelAnswer: 'Comparison Table:\n\n1. Geological Age & Origin:\n   • Himalayas: Geologically young, structurally fold mountains formed recently by tectonic collision between the Indo-Australian and Eurasian plates.\n   • Peninsular Plateau: Part of the ancient Gondwanaland; one of the oldest, most stable landmasses composed of igneous and metamorphic rocks.\n\n2. Relief & Elevation:\n   • Himalayas: Extremely rugged topography with soaring peaks (average height 6,000 m in Himadri), deep gorges, and fast-flowing glaciers.\n   • Peninsular Plateau: Gently undulating relief with rounded hills, shallow valleys, and broad plateaus (average height 600–900 m).\n\n3. Drainage Characteristics:\n   • Himalayas: Source of perennial river systems (Ganga, Indus, Brahmaputra) fed by both snowmelt and rainfall.\n   • Peninsular Plateau: Characterized by seasonal, rain-fed rivers (Godavari, Krishna, Narmada) that shrink significantly during dry summers.\n\n4. Economic Significance:\n   • Himalayas: Rich source of forest wealth, hydroelectricity potential, freshwater reservoirs, and major tourist destinations.\n   • Peninsular Plateau: Known as the storehouse of minerals (iron ore, coal, manganese, bauxite) and cotton-growing black soil (Deccan Trap).\n\n5. Tectonic Stability:\n   • Himalayas: Highly unstable tectonic zone prone to frequent earthquakes and landslides.\n   • Peninsular Plateau: Highly stable shield area with minimal seismic activity.',
        stepMarking: [
          { step: 'Geological origin and rock type contrast', marks: '1 Mark' },
          { step: 'Relief, altitude, and topography contrast', marks: '1 Mark' },
          { step: 'Perennial vs seasonal river drainage contrast', marks: '1 Mark' },
          { step: 'Economic resource endowment (minerals vs forests/hydro)', marks: '1 Mark' },
          { step: 'Tectonic stability and seismicity contrast', marks: '1 Mark' }
        ],
        examinerTip: 'CBSE examiners award full 5 marks when students use clear, distinct structural parameters for comparison.',
        commonPitfall: 'Writing only about height and snow without discussing geological age and mineral wealth.'
      },
      {
        id: 'c9-sst-24-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Democratic Politics: Working of Institutions - Prime Minister & Cabinet',
        questionText: 'The Prime Minister is the most important political institution in the country. Discuss the powers and responsibilities of the Prime Minister in India.',
        modelAnswer: '1. Head of the Government:\n   While the President is the nominal Head of State, the Prime Minister is the actual executive Head of the Government who wields all constitutional powers in practice.\n\n2. Formation of Council of Ministers:\n   The Prime Minister selects ministers; the President formally appoints them only on the Prime Minister\'s advice. The PM allocates and reshuffles portfolios at will and has the power to dismiss ministers.\n\n3. Chairs and Coordinates Cabinet Meetings:\n   The PM presides over Cabinet meetings, coordinates the work of different ministries, and resolves intra-departmental disputes. His/her decision is final.\n\n4. Leader of the Lok Sabha & Nation:\n   As leader of the majority party in Parliament, the Prime Minister shapes domestic policies and acts as the chief spokesperson for India in foreign affairs and international summits.\n\n5. Anchor of the Cabinet\'s Survival:\n   If the Prime Minister resigns or dies in office, the entire Council of Ministers automatically collapses. Hence, parliamentary democracy is often described as a "Prime Ministerial form of government".',
        stepMarking: [
          { step: 'De-facto Head of government status explained', marks: '1 Mark' },
          { step: 'Portfolio allocation and dismissal of ministers', marks: '1 Mark' },
          { step: 'Leadership of Cabinet meetings and coordination', marks: '1 Mark' },
          { step: 'Chief architect of national policies and foreign representation', marks: '1 Mark' },
          { step: 'Collective responsibility and resignation impact', marks: '1 Mark' }
        ],
        examinerTip: 'Mention the term "Primus inter pares" (first among equals) or British terminology "Prime Ministerial government".',
        commonPitfall: 'Confusing the powers of the President with those of the Prime Minister.'
      },
      {
        id: 'c9-sst-24-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Economics: Food Security in India - Dimensions & Public Distribution System',
        questionText: 'What is Food Security? Explain its three essential dimensions and discuss the role played by the Public Distribution System (PDS).',
        modelAnswer: '1. Definition of Food Security:\n   Food security means availability, accessibility, and affordability of food to all people at all times.\n\n2. Three Essential Dimensions:\n   • Availability: Food production within the country, food imports, and previous years\' buffer stocks stored in government granaries.\n   • Accessibility: Food is within reach of every individual without physical barrier or discriminatory restriction.\n   • Affordability: An individual has sufficient financial resources to buy balanced, nutritious, and safe food to meet dietary needs.\n\n3. Role of the Public Distribution System (PDS):\n   • Ration Shops (Fair Price Shops): Food procured by FCI is distributed through a nationwide network of around 5.5 lakh Fair Price Shops.\n   • Subsidised Pricing: Essential commodities like wheat, rice, and sugar are supplied to BPL (Below Poverty Line) families at prices substantially below the open market (Issue Price).\n   • Stabilization during Crises: PDS plays a crucial role in preventing mass starvation during natural disasters, crop failures, and droughts, ensuring national price stability.',
        stepMarking: [
          { step: 'Comprehensive definition of Food Security', marks: '1 Mark' },
          { step: 'Three dimensions (Availability, Accessibility, Affordability) detailed', marks: '2 Marks' },
          { step: 'Operational role of PDS and Fair Price Shops explained', marks: '1 Mark' },
          { step: 'Subsidised issue price and disaster buffer management', marks: '1 Mark' }
        ],
        examinerTip: 'Always link PDS with FCI buffer stock and Minimum Support Price (MSP) to show full conceptual mastery.',
        commonPitfall: 'Explaining only availability of food and ignoring accessibility and affordability.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE-BASED QUESTIONS (Q34 to Q36 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sst-24-q34',
        qNum: 34,
        section: 'E',
        marks: 4,
        topic: 'History: The French Revolution - Abolition of Slavery',
        questionText: 'Read the source given below and answer the questions that follow:\n\n"One of the most revolutionary social reforms of the Jacobin regime was the abolition of slavery in the French colonies. The colonies in the Caribbean – Martinique, Guadeloupe and San Domingo – were important suppliers of commodities such as tobacco, indigo, sugar and coffee. But the reluctance of Europeans to go and work in distant and unfamiliar lands meant a shortage of labour on the plantations. So this was met by a triangular slave trade between Europe, Africa and the Americas. The slave trade began in the seventeenth century. French merchants sailed from the ports of Bordeaux or Nantes to the African coast, where they bought slaves from local chieftains. Branded and shackled, the slaves were packed tightly into ships for the three-month-long voyage across the Atlantic to the Caribbean. There they were sold to plantation owners. The exploitation of slave labour made it possible to meet the growing demand in European markets for sugar, coffee and indigo. Throughout the eighteenth century there was little criticism of slavery in France. The National Assembly held long debates about whether the rights of man should be extended to all French subjects including those in the colonies. But it did not pass any laws, fearing opposition from businessmen whose incomes depended on the slave trade. It was finally the Convention which in 1794 legislated to free all slaves in the French overseas possessions. This, however, turned out to be a short-term measure: ten years later, Napoleon reintroduced slavery."\n\nQuestions:\n34.1 Between which three continents did the triangular slave trade take place? (1 Mark)\n34.2 Name two French port cities that owed their economic prosperity to the flourishing slave trade. (1 Mark)\n34.3 Who finally reintroduced slavery in France, and when was it ultimately abolished permanently in French colonies? (2 Marks)',
        modelAnswer: '34.1 The triangular slave trade took place between Europe, Africa, and the Americas (the Caribbean).\n\n34.2 The two prosperous French port cities were Bordeaux and Nantes.\n\n34.3 Napoleon Bonaparte reintroduced slavery in 1804. Slavery was ultimately abolished permanently in French colonies in the year 1848.',
        stepMarking: [
          { step: '34.1 Correct identification of Europe, Africa, and Americas', marks: '1 Mark' },
          { step: '34.2 Bordeaux and Nantes port cities named correctly', marks: '1 Mark' },
          { step: '34.3 Napoleon (reintroduced in 1804) + permanent abolition in 1848', marks: '2 Marks' }
        ],
        examinerTip: 'Remember the permanent abolition year: 1848 (during the Second Republic).',
        commonPitfall: 'Writing that slavery was permanently abolished in 1794 (the Jacobin decree was repealed by Napoleon).'
      },
      {
        id: 'c9-sst-24-q35',
        qNum: 35,
        section: 'E',
        marks: 4,
        topic: 'Geography: Drainage - The Lakes and River Pollution',
        questionText: 'Read the source given below and answer the questions that follow:\n\n"India has many lakes. These differ from each other in size, and other characteristics. Most lakes are permanent; some contain water only during the rainy season, like the lakes in the basins of inland drainage of semi-arid regions. There are some lakes which are the result of the action of glaciers and ice sheets, while the others have been formed by wind, river action, and human activities. A meandering river across a floodplain forms cut-offs that later develop into ox-bow lakes. Spits and bars form lagoons in the coastal areas, eg the Chilika lake, the Pulicat lake, the Kolleru lake. Lakes in the region of inland drainage are sometimes seasonal; for example, the Sambhar lake in Rajasthan, which is a salt water lake. Its water is used for producing salt. Most of the fresh water lakes are in the Himalayan region. They are of glacial origin. In other words, they formed when glaciers dug out a basin, which was later filled with snowmelt. The Wular lake in Jammu and Kashmir, in contrast, is the result of tectonic activity. It is the largest freshwater lake in India."\n\nQuestions:\n35.1 What geological process formed the Wular Lake in Jammu & Kashmir? (1 Mark)\n35.2 How is an ox-bow lake formed? (1 Mark)\n35.3 Name the largest saltwater lagoon in India and state one economic use of the Sambhar Lake in Rajasthan. (2 Marks)',
        modelAnswer: '35.1 Wular Lake is the result of tectonic activity (it is India\'s largest freshwater lake).\n\n35.2 A meandering river across a flat floodplain forms loop cut-offs over time, which get isolated from the main stream and form an ox-bow lake.\n\n35.3 Largest saltwater lagoon in India: Chilika Lake in Odisha (1 Mark). Economic use of Sambhar Lake: Its hypersaline water is evaporated and harvested for commercial salt production (1 Mark).',
        stepMarking: [
          { step: '35.1 Tectonic activity identified for Wular Lake', marks: '1 Mark' },
          { step: '35.2 Meandering cut-off explanation for ox-bow lakes', marks: '1 Mark' },
          { step: '35.3 Chilika Lake named + commercial salt production mentioned', marks: '2 Marks' }
        ],
        examinerTip: 'Do not confuse freshwater Wular Lake (tectonic) with saltwater Chilika Lake (coastal lagoon).',
        commonPitfall: 'Writing that Wular lake was formed by a glacier.'
      },
      {
        id: 'c9-sst-24-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Democratic Politics: Constitutional Design - Drafting the Constitution',
        questionText: 'Read the source given below and answer the questions that follow:\n\n"The drafting of the document called the constitution was done by an assembly of elected representatives, called the Constituent Assembly. Elections to the Constituent Assembly were held in July 1946. Its first meeting was held in December 1946. Soon after, the country was divided into India and Pakistan. The Constituent Assembly that wrote the Indian constitution had 299 members. The Assembly adopted the Constitution on 26 November 1949 but it came into effect on 26 January 1950. To mark this day we celebrate January 26 as Republic Day every year. Why should we accept the Constitution made by this Assembly more than seventy years ago? The Constitution does not reflect the views of its members alone. It expresses a broad consensus of its time. Many countries of the world have had to rewrite their constitution afresh because the basic rules were not accepted by all major social groups or political parties. In our country, no large social group or political party has ever questioned the legitimacy of the Constitution itself. This is an unusual achievement for any constitution."\n\nQuestions:\n36.1 When was the Constitution of India formally adopted by the Constituent Assembly? (1 Mark)\n36.2 Why was 26 January specifically chosen as the date for bringing the Constitution into effect? (1 Mark)\n36.3 State two reasons why the Indian Constitution has enjoyed enduring legitimacy without needing to be rewritten afresh over seven decades. (2 Marks)',
        modelAnswer: '36.1 The Constitution was formally adopted on 26 November 1949.\n\n36.2 26 January was chosen to commemorate the historic Purna Swaraj (Complete Independence) declaration of 26 January 1930 decided at the Lahore Congress session under Jawaharlal Nehru.\n\n36.3 Two reasons for enduring legitimacy:\n     1. Broad National Consensus: It did not represent private interests of members, but reflected the collective aspirations and broad consensus of all communities, regions, and social strata.\n     2. Flexible Amendment Mechanism: Provisions for orderly constitutional amendments allow it to evolve dynamically with changing social, technological, and economic realities without breaking the basic structure.',
        stepMarking: [
          { step: '36.1 26 November 1949 cited accurately', marks: '1 Mark' },
          { step: '36.2 Purna Swaraj Day 1930 historical link explained', marks: '1 Mark' },
          { step: '36.3 Two solid reasons: Broad national consensus and dynamic constitutional amendments', marks: '2 Marks' }
        ],
        examinerTip: 'Distinguish Adoption Date (26 Nov 1949) from Enforcement Date (26 Jan 1950).',
        commonPitfall: 'Writing that Constitution was adopted on 26 January 1950.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION F: MAP SKILL-BASED QUESTION (Q37 - 5 Marks Total)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-sst-24-q37',
        qNum: 37,
        section: 'F',
        marks: 5,
        topic: 'Map Skills: History & Geography of India',
        questionText: '37a. On the given outline map of France, identify the two historical features marked as A and B: (2 Marks)\n    A) The capital city of France where the Bastille fortress was stormed on 14 July 1789.\n    B) A major port city in southwest France which prospered from the triangular slave trade.\n\n37b. On the given political outline map of India, locate and label any THREE of the following with appropriate symbols: (3 Marks)\n    (i) Standard Meridian of India (82°30′ E)\n    (ii) Kanchenjunga Peak (Sikkim)\n    (iii) Chilika Lake (Odisha coastal lagoon)\n    (iv) Anai Mudi Peak (Western Ghats - Kerala)\n    (v) River Narmada (Amarkantak to Gulf of Khambhat)',
        modelAnswer: '37a. History (France Map):\n     A = Paris (Capital city, location of the Bastille).\n     B = Bordeaux (or Nantes) — thriving Atlantic slave trade port.\n\n37b. Geography (India Map - any three):\n     (i) Standard Meridian of India: Dotted vertical line passing through 82°30′ E longitude via Mirzapur (Uttar Pradesh), passing through UP, MP, Chhattisgarh, Odisha, and Andhra Pradesh.\n     (ii) Kanchenjunga: Located on the India-Nepal border in Sikkim; marked with a triangular mountain symbol ▲ at 8,586 m elevation.\n     (iii) Chilika Lake: Located on the coast of Odisha, south of the Mahanadi delta; marked with a shaded waterbody symbol.\n     (iv) Anai Mudi: Located in the Idukki district of Kerala within the Anaimalai range; marked with ▲ (2,695 m).\n     (v) River Narmada: Originates at Amarkantak plateau (MP), flowing westward between Vindhya and Satpura ranges, draining into the Gulf of Khambhat (Arabian Sea).',
        stepMarking: [
          { step: '37a: A identified as Paris (1 Mark) + B identified as Bordeaux/Nantes (1 Mark)', marks: '2 Marks' },
          { step: '37b: Any three geographic features correctly located and labeled (1 Mark each)', marks: '3 Marks' }
        ],
        examinerTip: 'In map questions, precise geographic placement and neat labeling with clean symbols ensure 100% full marks.',
        commonPitfall: 'Marking Kanchenjunga in Uttarakhand instead of Sikkim.'
      }
    ]
  }
];
