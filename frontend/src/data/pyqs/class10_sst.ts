import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_10_SST_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE CLASS 10 SOCIAL SCIENCE 2024 BOARD EXAM (COMPLETE FULL PAPER - SET 32/1/1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c10-sst-2024-board',
    title: 'CBSE Class 10 Social Science Board Exam 2024 (Complete Original Paper - Set 32/1/1)',
    subject: 'Social Science',
    targetClass: 'Class 10',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: '32/1/1',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 37,
    generalInstructions: [
      'The question paper comprises Six Sections – A, B, C, D, E and F. There are 37 questions in the question paper. All questions are compulsory.',
      'Section A – From question 1 to 20 are MCQs of 1 mark each.',
      'Section B – Question no. 21 to 24 are Very Short Answer Type Questions, carrying 2 marks each.',
      'Section C – Question no. 25 to 29 are Short Answer Type Questions, carrying 3 marks each.',
      'Section D – Question no. 30 to 33 are Long Answer Type Questions, carrying 5 marks each.',
      'Section E – Question no. 34 to 36 are Case Based Questions with three sub-questions and are of 4 marks each.',
      'Section F – Question no. 37 is Map skill-based with two parts: 37a from History (2 marks) and 37b from Geography (3 marks).'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: MCQs (Q1 to Q20 - 1 Mark Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sst-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'History: The Rise of Nationalism in Europe',
        questionText: 'Which French artist visualised a world made up of democratic and social republics in a series of four prints in 1848?',
        options: [
          'A) Frédéric Sorrieu',
          'B) Eugène Delacroix',
          'C) Giuseppe Mazzini',
          'D) Ernst Renan'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Frédéric Sorrieu.\nIn 1848, the French artist Frédéric Sorrieu prepared a famous suite of four utopian prints depicting peoples of Europe and America marching past the Statue of Liberty, visualizing a world of democratic and social republics.',
        stepMarking: [
          { step: 'Option A (Frédéric Sorrieu)', marks: '1 Mark' }
        ],
        examinerTip: 'Frédéric Sorrieu\'s vision is described as "utopian" because it depicted an ideal society unlikely to exist in reality at that time.',
        commonPitfall: 'Confusing Frédéric Sorrieu with Italian revolutionary Giuseppe Mazzini.'
      },
      {
        id: 'c10-sst-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'History: Nationalism in Europe - Zollverein',
        questionText: 'The customs union formed at the initiative of Prussia in 1834 to abolish tariff barriers was called:',
        options: [
          'A) Carbonari',
          'B) Zollverein',
          'C) Young Italy',
          'D) Jacobin Club'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Zollverein.\nIn 1834, a customs union or Zollverein was formed at the initiative of Prussia and joined by most German states. It abolished internal tariff barriers and reduced the number of regional currencies from over thirty to two.',
        stepMarking: [
          { step: 'Option B (Zollverein)', marks: '1 Mark' }
        ],
        examinerTip: 'Zollverein created economic nationalism which fostered wider political unification of Germany.',
        commonPitfall: 'Choosing Carbonari (secret Italian revolutionary society).'
      },
      {
        id: 'c10-sst-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'History: Nationalism in India - Simon Commission',
        questionText: 'Why was the Simon Commission greeted with black flags and the slogan "Go Back Simon" upon its arrival in India in 1928?',
        options: [
          'A) It did not have a single Indian member',
          'B) It banned the Indian National Congress',
          'C) It supported separate electorates for Muslims',
          'D) It imposed salt tax across the country'
        ],
        correctOption: 'A',
        modelAnswer: 'A) It did not have a single Indian member.\nThe British Tory government constituted the Indian Statutory Commission under Sir John Simon to review the functioning of the constitutional system in India. However, all its seven members were British politicians, with no Indian representation.',
        stepMarking: [
          { step: 'Option A (No Indian member in the commission)', marks: '1 Mark' }
        ],
        examinerTip: 'Lala Lajpat Rai led the peaceful protest at Lahore where he was mortally lathi-charged.',
        commonPitfall: 'Assuming the boycott was solely because of salt tax.'
      },
      {
        id: 'c10-sst-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'History: Print Culture - Printing Press Inventor',
        questionText: 'Who developed the first known printing press in Strasbourg, Germany, in the 1430s?',
        options: [
          'A) Marco Polo',
          'B) Johann Gutenberg',
          'C) Martin Luther',
          'D) Erasmus'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Johann Gutenberg.\nJohann Gutenberg developed the first mechanical movable type printing press in Strasbourg, Germany, around 1448. The first major book printed by him was the Bible.',
        stepMarking: [
          { step: 'Option B (Johann Gutenberg)', marks: '1 Mark' }
        ],
        examinerTip: 'Gutenberg adapted the screw press technology used in wine and olive oil presses.',
        commonPitfall: 'Choosing Marco Polo (who brought woodblock printing knowledge from China to Italy in 1295).'
      },
      {
        id: 'c10-sst-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Geography: Resources - Black Soil',
        questionText: 'Black soil, also known as Regur soil, is ideal for the cultivation of which major cash crop?',
        options: [
          'A) Tea',
          'B) Cotton',
          'C) Rubber',
          'D) Jute'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Cotton.\nBlack soil is also called "black cotton soil" or Regur soil. It is rich in soil nutrients like calcium carbonate, magnesium, potash, and lime, and has high moisture retention capacity, making it exceptionally ideal for growing cotton.',
        stepMarking: [
          { step: 'Option B (Cotton)', marks: '1 Mark' }
        ],
        examinerTip: 'Black soil covers the Deccan trap (basalt) region across Maharashtra, Saurashtra, Malwa, and Madhya Pradesh.',
        commonPitfall: 'Choosing jute (which grows best on well-drained fertile alluvial soils of flood plains).'
      },
      {
        id: 'c10-sst-24-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Geography: Forest Conservation - Chipko Movement',
        questionText: 'The famous "Chipko Movement" was launched in the Himalayas primarily to:',
        options: [
          'A) Promote terrace farming',
          'B) Resist deforestation and protect native forests by hugging trees',
          'C) Introduce commercial monoculture plantation',
          'D) Protect tigers in Jim Corbett'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Resist deforestation and protect native forests by hugging trees.\nThe Chipko Movement originated in the Chamoli district of Uttarakhand in the 1970s. Local villagers, led by community leaders like Sunderlal Bahuguna, hugged trees to prevent commercial loggers from felling them.',
        stepMarking: [
          { step: 'Option B (Resist deforestation by hugging trees)', marks: '1 Mark' }
        ],
        examinerTip: 'Chipko proved that community participation is the most effective conservation tool.',
        commonPitfall: 'Confusing Chipko with the Narmada Bachao Andolan.'
      },
      {
        id: 'c10-sst-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Geography: Agriculture - Kharif Crop',
        questionText: 'Which of the following is a major Kharif crop grown with the onset of monsoon and harvested in September-October?',
        options: [
          'A) Wheat',
          'B) Mustard',
          'C) Paddy (Rice)',
          'D) Gram'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Paddy (Rice).\nPaddy (Rice), maize, jowar, bajra, and cotton are Kharif crops sown with the onset of the summer monsoon (June–July) and harvested in September–October. Wheat, gram, and mustard are Rabi crops sown in winter.',
        stepMarking: [
          { step: 'Option C (Paddy / Rice)', marks: '1 Mark' }
        ],
        examinerTip: 'Kharif = Monsoon/Rainy season crop (Rice); Rabi = Winter crop (Wheat).',
        commonPitfall: 'Selecting wheat as Kharif.'
      },
      {
        id: 'c10-sst-24-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Geography: Minerals - Non-Metallic Mineral',
        questionText: 'Which non-metallic mineral is made up of a series of plates or leaves that can be easily split into thin sheets, widely used in electrical and electronic industries?',
        options: [
          'A) Bauxite',
          'B) Mica',
          'C) Copper',
          'D) Iron Ore'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Mica.\nMica has excellent dielectric strength, low power loss factor, insulating properties, and resistance to high voltage, making it an indispensable non-metallic mineral for electrical and electronic industries.',
        stepMarking: [
          { step: 'Option B (Mica)', marks: '1 Mark' }
        ],
        examinerTip: 'Koderma-Gaya-Hazaribagh belt of Jharkhand is the leading producer of mica in India.',
        commonPitfall: 'Selecting bauxite (which is the metallic ore of aluminium).'
      },
      {
        id: 'c10-sst-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Political Science: Power Sharing - Belgium Model',
        questionText: 'In Belgium, the constitution prescribes that the number of Dutch and French-speaking ministers in the central government shall be:',
        options: [
          'A) In proportion to their total population',
          'B) Equal in number',
          'C) Decided by the European Union',
          'D) French majority always'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Equal in number.\nTo accommodate cultural diversity and prevent civil strife, the Belgian constitution specifically mandated that Dutch and French-speaking ministers shall be equal in number in the central government, ensuring no single linguistic community can make unilateral decisions.',
        stepMarking: [
          { step: 'Option B (Equal in number)', marks: '1 Mark' }
        ],
        examinerTip: 'Contrast with Sri Lanka\'s majoritarianism which led to decades of brutal civil war.',
        commonPitfall: 'Choosing proportional to population (Dutch were 59% and French 40%).'
      },
      {
        id: 'c10-sst-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Political Science: Federalism - Union List Subjects',
        questionText: 'Which of the following subjects is included in the Union List of the Seventh Schedule of the Indian Constitution?',
        options: [
          'A) Police',
          'B) Agriculture',
          'C) Defense of the country',
          'D) Trade and commerce'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Defense of the country.\nThe Union List includes subjects of national importance that require a uniform policy nationwide, such as Defense, Foreign Affairs, Banking, Communications, and Currency. Police and Agriculture belong to the State List.',
        stepMarking: [
          { step: 'Option C (Defense of the country)', marks: '1 Mark' }
        ],
        examinerTip: 'Union List = Defense, Banking, Foreign Affairs. State List = Police, Trade, Agriculture. Concurrent List = Education, Forests.',
        commonPitfall: 'Selecting Police (which is a State List subject).'
      },
      {
        id: 'c10-sst-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Political Science: Gender - Women Reservation',
        questionText: 'In India, one-third of the total seats are legally reserved for women in:',
        options: [
          'A) Lok Sabha',
          'B) Rajya Sabha',
          'C) Panchayati Raj Institutions (Local Bodies)',
          'D) State Legislative Councils'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Panchayati Raj Institutions (Local Bodies).\nThrough the 73rd and 74th Constitutional Amendment Acts of 1992, at least one-third (33%) of all seats in local rural Panchayats and urban Municipalities are legally reserved for women, bringing over 10 lakh elected women into grassroots governance.',
        stepMarking: [
          { step: 'Option C (Panchayati Raj Institutions)', marks: '1 Mark' }
        ],
        examinerTip: 'Grassroots democracy was transformed by this 33% mandatory reservation.',
        commonPitfall: 'Assuming reservation already existed in Lok Sabha in 1992.'
      },
      {
        id: 'c10-sst-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Political Science: Political Parties - Recognised National Party',
        questionText: 'A political party that secures at least 6% of total votes in Lok Sabha elections or Assembly elections in four states and wins at least 4 seats in the Lok Sabha is recognized as a:',
        options: [
          'A) State Party',
          'B) National Party',
          'C) Regional Coalition',
          'D) Registered Unrecognised Party'
        ],
        correctOption: 'B',
        modelAnswer: 'B) National Party.\nAccording to Election Commission criteria, a party that secures at least 6% of the total votes in Lok Sabha elections or Assembly elections in 4 states, and wins at least 4 seats in the Lok Sabha, is officially recognized as a National Party.',
        stepMarking: [
          { step: 'Option B (National Party)', marks: '1 Mark' }
        ],
        examinerTip: 'State Party requires 6% of votes in State Legislative Assembly + at least 2 seats.',
        commonPitfall: 'Confusing National Party criteria with State Party criteria.'
      },
      {
        id: 'c10-sst-24-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Economics: Development - Human Development Report Publisher',
        questionText: 'Which international organization publishes the annual Human Development Report comparing countries based on educational levels, health status, and per capita income?',
        options: [
          'A) World Bank (IBRD)',
          'B) United Nations Development Programme (UNDP)',
          'C) International Monetary Fund (IMF)',
          'D) World Health Organization (WHO)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) United Nations Development Programme (UNDP).\nWhile the World Bank compares nations purely using Per Capita Income (World Development Report), the UNDP publishes the Human Development Report (HDR) which evaluates multi-dimensional development combining education, life expectancy, and gross national income per capita.',
        stepMarking: [
          { step: 'Option B (UNDP)', marks: '1 Mark' }
        ],
        examinerTip: 'World Bank uses only Per Capita Income; UNDP uses HDI (Income + Health + Education).',
        commonPitfall: 'Selecting World Bank instead of UNDP.'
      },
      {
        id: 'c10-sst-24-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Economics: Sectors of the Indian Economy - Disguised Unemployment',
        questionText: 'In which economic sector of India is disguised (hidden) unemployment most prevalent?',
        options: [
          'A) Information Technology',
          'B) Agriculture (Primary Sector)',
          'C) Banking and Finance',
          'D) Heavy Manufacturing'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Agriculture (Primary Sector).\nDisguised unemployment is a situation where more people are engaged in work than required. In Indian agriculture, small family farms employ all family members even though moving two or three workers elsewhere leaves total crop production unaffected (marginal productivity = zero).',
        stepMarking: [
          { step: 'Option B (Agriculture / Primary Sector)', marks: '1 Mark' }
        ],
        examinerTip: 'Disguised unemployment means marginal productivity of additional labour is zero.',
        commonPitfall: 'Confusing disguised unemployment with seasonal unemployment.'
      },
      {
        id: 'c10-sst-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Economics: Money and Credit - Formal Credit Supervision',
        questionText: 'Which apex financial institution supervises the functioning of formal sources of loans and monitors banks in India?',
        options: [
          'A) State Bank of India (SBI)',
          'B) Reserve Bank of India (RBI)',
          'C) Ministry of Finance',
          'D) NITI Aayog'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Reserve Bank of India (RBI).\nThe Reserve Bank of India (RBI) is the central bank of India. It supervises commercial banks, ensures they maintain minimum cash reserves (CRR/SLR), regulates interest rates, and mandates lending to priority sectors like agriculture and small-scale industries.',
        stepMarking: [
          { step: 'Option B (Reserve Bank of India)', marks: '1 Mark' }
        ],
        examinerTip: 'Informal sources (moneylenders, traders) have NO regulatory supervisor, leading to exploitation.',
        commonPitfall: 'Choosing SBI (which is a commercial bank, not the central regulator).'
      },
      {
        id: 'c10-sst-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Economics: Globalization - WTO Headquarters',
        questionText: 'The World Trade Organization (WTO), whose aim is to liberalise international trade, is headquartered in:',
        options: [
          'A) New York, USA',
          'B) Geneva, Switzerland',
          'C) Paris, France',
          'D) London, UK'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Geneva, Switzerland.\nThe World Trade Organization (WTO) was established in 1995 (succeeding GATT) and has its permanent headquarters in Geneva, Switzerland.',
        stepMarking: [
          { step: 'Option B (Geneva, Switzerland)', marks: '1 Mark' }
        ],
        examinerTip: 'WTO sets rules for international trade and has over 160 member countries.',
        commonPitfall: 'Choosing New York (which is the headquarters of the UN, not WTO).'
      },
      {
        id: 'c10-sst-24-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Power Sharing in Democracy',
        questionText: 'Assertion (A): Power sharing is good for democracy.\nReason (R): It helps to reduce the possibility of conflict between social groups and ensures the stability of political order.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nPower sharing is the very spirit of democracy. Prudentially, sharing power among different ethnic, religious, and linguistic groups minimizes resentment, prevents violent civil conflicts, and guarantees lasting political stability.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Prudential reason = prevents social conflict; Moral reason = power sharing is the essence of democracy.',
        commonPitfall: 'Thinking power sharing weakens central authority.'
      },
      {
        id: 'c10-sst-24-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Sustainable Development',
        questionText: 'Assertion (A): Groundwater is an example of renewable resources, yet it is facing severe over-use in several parts of India.\nReason (R): Groundwater is being used faster than it is replenished by rainfall, particularly in Punjab, Western UP, and hard-rock plateau areas.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nGroundwater is naturally recharged by rainwater infiltration. However, over-extraction via electric tubewells for water-intensive cash crops has depleted water tables by over 4 metres across one-third of the country, causing an acute sustainability crisis.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) correctly explains (A) (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'Renewable does not mean inexhaustible; over-extraction beyond recharge rate causes depletion.',
        commonPitfall: 'Assuming renewable resources can never be depleted.'
      },
      {
        id: 'c10-sst-24-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Currency and Money',
        questionText: 'Assertion (A): Modern forms of currency like paper notes and coins have no value of their own like gold or silver coins.\nReason (R): Modern currency is accepted as a medium of exchange because it is authorized by the government of the country.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Both (A) and (R) are true and (R) is the correct explanation of (A).\nUnlike historical gold or silver coins, paper notes have virtually zero intrinsic commodity value. They function as fiat legal tender solely because the sovereign government legally guarantees and authorizes them for the discharge of debts.',
        stepMarking: [
          { step: 'Both (A) and (R) are true and (R) is correct explanation (Option A)', marks: '1 Mark' }
        ],
        examinerTip: 'In India, the Reserve Bank of India issues currency notes on behalf of the Central Government.',
        commonPitfall: 'Thinking currency has intrinsic value equivalent to its face value.'
      },
      {
        id: 'c10-sst-24-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Assertion-Reason: Liberalization of Foreign Trade',
        questionText: 'Assertion (A): Removing barriers or restrictions set by the government is what is known as liberalisation.\nReason (R): Around 1991, the Government of India decided that Indian producers must compete with producers around the globe to improve productivity and quality.\n\nChoose the correct option:',
        options: [
          'A) Both (A) and (R) are true and (R) is the correct explanation of (A).',
          'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).',
          'C) (A) is true, but (R) is false.',
          'D) (A) is false, but (R) is true.'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).\nBoth statements are historically and economically true: Liberalisation is indeed the removal of regulatory trade barriers and quotas, and India initiated sweeping New Economic Policies in 1991 to boost competitiveness. However, Reason (R) explains WHY India adopted liberalisation in 1991, not WHAT liberalisation fundamentally means.',
        stepMarking: [
          { step: 'Both (A) and (R) are true, but (R) is not the direct explanation (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Distinguish between definitions (what is it) and historical motivations (why was it done).',
        commonPitfall: 'Selecting Option A without checking if R explains the definition in A.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: VERY SHORT ANSWER QUESTIONS (Q21 to Q24 - 2 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sst-24-q21',
        qNum: 21,
        section: 'B',
        marks: 2,
        topic: 'History: The Civil Disobedience Movement - Dandi March',
        questionText: 'Why did Mahatma Gandhi choose "salt" as the central symbol of protest to launch the Civil Disobedience Movement in 1930?',
        modelAnswer: 'Mahatma Gandhi chose salt for two powerful reasons:\n1. Universal Commodity: Salt was consumed equally by rich and poor alike, making it an essential everyday dietary item across all religious and caste divides.\n2. Injustice of Salt Monopoly: The British government imposed an exorbitant tax on salt and exercised a strict state monopoly over its manufacture, exposing the most oppressive face of British colonial rule.',
        stepMarking: [
          { step: 'Universal consumption unifying all Indians across class and religion', marks: '1 Mark' },
          { step: 'Tax and British monopoly highlighted colonial oppression', marks: '1 Mark' }
        ],
        examinerTip: 'Dandi March began on 12 March 1930 from Sabarmati to Dandi (240 miles with 78 volunteers).',
        commonPitfall: 'Writing only that salt was cheap without explaining its unifying symbolic power.'
      },
      {
        id: 'c10-sst-24-q22',
        qNum: 22,
        section: 'B',
        marks: 2,
        topic: 'Geography: Water Resources - Multipurpose River Valley Projects',
        questionText: 'Why did Jawaharlal Nehru proudly proclaim multi-purpose dams as the "Temples of Modern India"? Give two reasons.',
        modelAnswer: 'Jawaharlal Nehru called multipurpose dams the "Temples of Modern India" because:\n1. Integration of Agriculture and Industry: Dams would supply canal irrigation to modernize rural agriculture while generating hydroelectric power to propel rapid industrialization and urban growth.\n2. Economic Self-Reliance: They were viewed as the catalyst for national development, economic prosperity, and elimination of post-independence poverty and famine.',
        stepMarking: [
          { step: 'Integration of agriculture with industrial development and hydroelectricity', marks: '1 Mark' },
          { step: 'Pathway to national self-reliance and modernization', marks: '1 Mark' }
        ],
        examinerTip: 'Multipurpose projects: Bhakra Nangal (Satluj-Beas), Hirakud (Mahanadi), Damodar Valley.',
        commonPitfall: 'Focusing exclusively on electricity and ignoring agricultural irrigation.'
      },
      {
        id: 'c10-sst-24-q23',
        qNum: 23,
        section: 'B',
        marks: 2,
        topic: 'Political Science: Decentralization in India',
        questionText: 'What is meant by decentralization of power? Mention any two significant constitutional steps taken in India in 1992 towards decentralization.',
        modelAnswer: 'Decentralization of power refers to the taking away of power from central and state governments and vesting it in local governments (Panchayats and Municipalities).\n\nTwo steps taken under the 73rd and 74th Amendments (1992):\n1. Mandatory Regular Elections: It became constitutionally mandatory to hold regular elections to local government bodies every five years.\n2. State Election Commission & Resource Sharing: An independent State Election Commission was created in each state to conduct local body elections, and state governments were mandated to share revenues and powers with local bodies.',
        stepMarking: [
          { step: 'Definition of decentralization', marks: '1 Mark' },
          { step: 'Two constitutional features of 1992 Amendments', marks: '1 Mark' }
        ],
        examinerTip: 'Also valid: 33% reservation for women and mandatory SC/ST/OBC seat reservations.',
        commonPitfall: 'Confusing federalism with local self-government decentralization.'
      },
      {
        id: 'c10-sst-24-q24',
        qNum: 24,
        section: 'B',
        marks: 2,
        topic: 'Economics: Primary, Secondary, and Tertiary Sectors',
        questionText: 'How is the Tertiary Sector fundamentally different from the Primary and Secondary sectors? Explain with an example.',
        modelAnswer: 'Difference:\n- Primary and Secondary sectors produce tangible physical goods (e.g., harvesting wheat, manufacturing cotton cloth).\n- The Tertiary Sector does not produce goods by itself; instead, it generates essential services that support and facilitate the production and distribution of goods in the primary and secondary sectors.\n\nExample: Transport (trucks, trains) and Banking do not grow crops or make steel, but without them, farmers cannot sell grain in wholesale markets and factories cannot purchase raw materials.',
        stepMarking: [
          { step: 'Tertiary produces services supporting production rather than physical goods', marks: '1 Mark' },
          { step: 'Concrete illustrative example (transport, banking, warehousing)', marks: '1 Mark' }
        ],
        examinerTip: 'Tertiary sector is also called the "Service Sector".',
        commonPitfall: 'Stating that tertiary sector is less important than manufacturing.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: SHORT ANSWER QUESTIONS (Q25 to Q29 - 3 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sst-24-q25',
        qNum: 25,
        section: 'C',
        marks: 3,
        topic: 'History: The Napoleonic Code of 1804',
        questionText: 'Explain any three progressive administrative reforms introduced by Napoleon Bonaparte through the Civil Code of 1804 (Napoleonic Code) in France and conquered territories.',
        modelAnswer: 'The Civil Code of 1804 (Napoleonic Code) revolutionized European administration through the following reforms:\n\n1. Abolition of Feudal Privileges & Equality Before Law:\nIt abolished all privileges based on birth, established equality of all citizens before the law, and secured the fundamental right to private property.\n\n2. Feudal & Manorial Emancipation of Peasants:\nIn territories under French control (Dutch Republic, Switzerland, Germany, Italy), Napoleon simplified administrative divisions, abolished the feudal system, and freed peasants from serfdom and manorial dues.\n\n3. Economic Modernization & Guild Removal:\nIn towns, medieval guild restrictions were removed. Transport and communication systems were modernized, and uniform systems of weights, measures, and a common national currency were introduced to facilitate the free movement of goods and capital.',
        stepMarking: [
          { step: 'Equality before law and abolition of birth privileges', marks: '1 Mark' },
          { step: 'Abolition of feudal system and serfdom for peasants', marks: '1 Mark' },
          { step: 'Standardized weights, measures, common currency, and guild removal', marks: '1 Mark' }
        ],
        examinerTip: 'Remember: Napoleon destroyed democracy in France, but in administration he incorporated revolutionary principles.',
        commonPitfall: 'Claiming Napoleon granted universal political voting rights (he actually reduced women to minor status).'
      },
      {
        id: 'c10-sst-24-q26',
        qNum: 26,
        section: 'C',
        marks: 3,
        topic: 'Geography: Agriculture - Commercial Plantation Agriculture',
        questionText: 'Explain the main characteristics of commercial plantation agriculture in India with suitable crop examples.',
        modelAnswer: 'Characteristics of Plantation Agriculture:\n1. Single Crop on Vast Landholdings: A single agricultural cash crop is cultivated over extensive large estates/tracts of land (e.g., Tea in Assam, Coffee in Karnataka, Rubber in Kerala).\n2. Capital-Intensive with Migrant Labour: It requires massive capital investment, sophisticated processing machinery, and a large workforce of cheap migrant agricultural labourers.\n3. Interface of Agriculture and Industry: The entire produce is used as an industrial raw material. Processing often takes place directly on the plantation estate itself or in nearby factories.\n4. Export Orientation: Production is primarily oriented towards domestic and global commercial export markets, demanding a well-developed network of transport and communication.',
        stepMarking: [
          { step: 'Single crop over large estates with tea/coffee/rubber examples', marks: '1 Mark' },
          { step: 'Capital intensive, advanced technology, and migrant labour', marks: '1 Mark' },
          { step: 'Interface of agriculture and industry, oriented towards markets', marks: '1 Mark' }
        ],
        examinerTip: 'Major examples: Tea (Assam, North Bengal), Coffee (Karnataka), Rubber (Kerala).',
        commonPitfall: 'Confusing plantation agriculture with subsistence slash-and-burn farming.'
      },
      {
        id: 'c10-sst-24-q27',
        qNum: 27,
        section: 'C',
        marks: 3,
        topic: 'Political Science: Power Sharing - Majoritarianism in Sri Lanka',
        questionText: 'How did the majoritarian policies adopted by the Sri Lankan government after independence in 1948 lead to the alienation of Sri Lankan Tamils and trigger a civil war?',
        modelAnswer: 'After gaining independence in 1948, the democratically elected Sinhala majority government enacted a series of majoritarian measures:\n\n1. Sinhala Supremacy Act of 1956:\nIn 1956, an Act was passed recognizing Sinhala as the sole official language, completely disregarding the Tamil language.\n\n2. Preferential Policies in Education and Government Jobs:\nState institutions followed preferential policies favoring Sinhala applicants for university admissions and government employment.\n\n3. State Religion Patronage:\nThe new constitution stipulated that the state shall foster and protect Buddhism, sidelining Hindu, Christian, and Muslim Tamil minorities.\n\nImpact:\nThese measures created an acute sense of alienation among Sri Lankan Tamils, convincing them that constitution and government denied them equal political rights. Tamils demanded an independent state (Tamil Eelam), culminating in a catastrophic multi-decade civil war.',
        stepMarking: [
          { step: '1956 Act making Sinhala sole official language', marks: '1 Mark' },
          { step: 'Preferential policies in university admissions and government employment', marks: '1 Mark' },
          { step: 'Buddhism as state religion and alienation leading to civil war', marks: '1 Mark' }
        ],
        examinerTip: 'Sri Lanka shows that majoritarian rule undermines national unity, whereas accommodation (Belgium) preserves it.',
        commonPitfall: 'Confusing Tamil demands with Indian Tamils vs Sri Lankan Tamils.'
      },
      {
        id: 'c10-sst-24-q28',
        qNum: 28,
        section: 'C',
        marks: 3,
        topic: 'Economics: Money and Credit - Formal vs Informal Credit',
        questionText: 'Differentiate between formal and informal sources of credit in India. Why is it necessary to expand formal credit sources in rural areas?',
        modelAnswer: 'Difference:\n1. Formal Sources:\n- Comprise Commercial Banks and Cooperative Societies.\n- Supervised strictly by the Reserve Bank of India (RBI).\n- Charge low, reasonable rates of interest with transparent written terms.\n\n2. Informal Sources:\n- Comprise local moneylenders, traders, employers, relatives, and landlords.\n- No regulatory body exists to oversee their lending practices.\n- Charge exorbitantly high interest rates (often 36% to 60% per annum) and use unfair means to recover money, trapping borrowers in a perpetual "debt-trap".\n\nWhy Expand Formal Credit in Rural Areas:\n1. Eliminate Exploitation: Prevents poor farmers and agricultural labourers from falling prey to predatory moneylenders.\n2. Affordable Investment: Low interest loans enable small farmers to buy seeds, fertilizers, irrigation tubewells, and start small rural enterprises, fostering inclusive economic growth.',
        stepMarking: [
          { step: 'Comparison between formal (banks/cooperatives) and informal (moneylenders)', marks: '1.5 Marks' },
          { step: 'Two reasons to expand formal rural credit (debt-trap prevention & affordable investment)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Cheap and affordable credit is crucial for the country’s economic development.',
        commonPitfall: 'Assuming informal moneylenders are cheaper because they don’t demand collateral paperwork.'
      },
      {
        id: 'c10-sst-24-q29',
        qNum: 29,
        section: 'C',
        marks: 3,
        topic: 'Economics: Globalization - Multinational Corporations (MNCs)',
        questionText: 'What is a Multinational Corporation (MNC)? Explain any two ways in which MNCs set up or control production in other countries.',
        modelAnswer: 'A Multinational Corporation (MNC) is an enterprise that owns or controls production of goods and services in more than one nation.\n\nWays MNCs Control Production:\n1. Joint Ventures / Partnerships with Local Companies:\nMNCs enter into joint partnerships with established domestic firms. This benefits local companies through access to advanced technology and foreign capital investment (e.g., Ford Motors entered India in partnership with Mahindra & Mahindra).\n\n2. Buyouts and Acquisitions of Local Companies:\nThe most common route: large MNCs with vast financial reserves buy out existing domestic companies to expand production rapidly (e.g., American retail giant Cargill Foods bought out Parakh Foods, India\'s large edible oil producer).\n\n3. Placing Orders with Small Local Producers:\nLarge apparel, footwear, and sports goods MNCs (like Nike, Adidas) place production orders with thousands of small garment producers worldwide, sell goods under their brand name, and dictate price, quality, delivery, and labor conditions.',
        stepMarking: [
          { step: 'Definition of Multinational Corporation', marks: '1 Mark' },
          { step: 'Two methods explained (Joint ventures, Buyouts, or Sub-contracting)', marks: '2 Marks' }
        ],
        examinerTip: 'MNCs set up production where production costs are low and close to consumer markets.',
        commonPitfall: 'Confusing international trade (export/import) with direct production control by MNCs.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LONG ANSWER QUESTIONS (Q30 to Q33 - 5 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sst-24-q30',
        qNum: 30,
        section: 'D',
        marks: 5,
        topic: 'History: The Non-Cooperation Movement (1920-1922)',
        questionText: '(a) How did the Non-Cooperation Movement unfold in Indian towns and cities?\n(b) Why did the movement gradually slow down in urban centers?',
        modelAnswer: '(a) Unfolding of Non-Cooperation in Towns and Cities:\n1. Middle-Class Participation: Thousands of students left government-controlled schools and colleges; headmasters and teachers resigned; lawyers gave up legal practice in courts.\n2. Boycott of Elections: Council elections were boycotted in most provinces except Madras, where the Justice Party (non-Brahmins) participated.\n3. Economic Boycott of Foreign Goods: Foreign cloth was boycotted and burnt in huge public bonfires; liquor shops were picketed.\n4. Economic Impact: Import of foreign cloth halved between 1920 and 1921, dropping in value from ₹ 102 crore to ₹ 57 crore. Indian merchants and traders refused to finance foreign trade, giving a massive boost to indigenous Indian textile mills and handlooms.\n\n(b) Reasons for Gradual Slowdown in Cities:\n1. Expensive Khadi: Hand-spun Khadi cloth was significantly more expensive than mass-produced British mill cloth. The urban poor could not afford to buy Khadi for sustained periods.\n2. Lack of Alternative Indian Institutions: Boycott of British institutions (schools, colleges, courts) required viable Indian national institutions as substitutes. Because alternative schools and courts were very slow to come up, frustrated students and teachers began trickling back to government schools, and lawyers rejoined work in government courts.\n3. Withdrawal: Following the violent Chauri Chaura incident in February 1922 where 22 policemen were burnt alive, Gandhiji withdrew the movement entirely.',
        stepMarking: [
          { step: '(a) Educational, administrative, and economic boycott details in towns', marks: '3 Marks' },
          { step: '(b) Slowdown causes: high cost of Khadi and absence of alternative Indian institutions', marks: '2 Marks' }
        ],
        examinerTip: 'Structure into two distinct sub-headings: "Course of the Movement" and "Causes of Slowdown".',
        commonPitfall: 'Mixing up Non-Cooperation (1920) with Civil Disobedience (1930).'
      },
      {
        id: 'c10-sst-24-q31',
        qNum: 31,
        section: 'D',
        marks: 5,
        topic: 'Geography: Energy Resources - Non-Conventional Sources',
        questionText: 'Energy is a basic requirement for economic development. Why is there a pressing need to use non-conventional sources of energy in India? Explain the potential and development of Solar Energy and Wind Energy in India.',
        modelAnswer: 'Need for Non-Conventional Energy in India:\n1. Depletion of Fossil Fuels: Rising consumption of coal, petroleum, and natural gas threatens early exhaustion of non-renewable fossil reserves.\n2. Environmental Pollution: Burning fossil fuels emits greenhouse gases and causes acid rain, urban smog, and climate change.\n3. Import Burden & Energy Security: India imports over 80% of its crude oil, draining foreign exchange reserves and making the economy vulnerable to global price shocks.\n\nDevelopment of Solar and Wind Energy:\n\n1. Solar Energy:\n- Potential: India is a tropical country endowed with enormous solar irradiation, receiving nearly 300 clear sunny days and ~5,000 trillion kWh energy annually.\n- Technology: Photovoltaic (PV) technology directly converts sunlight into electricity.\n- Application: Solar power plants are being set up in arid regions of Rajasthan, Gujarat, and Ladakh. Rural solar rooftop setups are replacing wood and dung cakes, minimizing deforestation and reducing health hazards for rural women.\n\n2. Wind Energy:\n- Potential: India has a long coastline of over 7,500 km with immense wind energy potential.\n- Key Clusters: The largest wind farm cluster is located in Tamil Nadu from Nagarcoil to Madurai. Gujarat, Maharashtra, Kerala, and Rajasthan have substantial wind energy parks generating clean, sustainable power without emissions.',
        stepMarking: [
          { step: 'Three compelling reasons for shift to non-conventional energy (fossil depletion, emissions, energy security)', marks: '2 Marks' },
          { step: 'Solar energy potential, technology, and rural impact', marks: '1.5 Marks' },
          { step: 'Wind energy potential and geographical clusters (Tamil Nadu Nagarcoil-Madurai)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Tamil Nadu (Nagarcoil to Madurai) is the premier wind farm cluster in India.',
        commonPitfall: 'Describing thermal coal plants under non-conventional energy.'
      },
      {
        id: 'c10-sst-24-q32',
        qNum: 32,
        section: 'D',
        marks: 5,
        topic: 'Political Science: Political Parties - Functions and Challenges',
        questionText: '(a) What is a political party? Explain any three major functions performed by political parties in a democracy.\n(b) Discuss any two major challenges faced by political parties in India today.',
        modelAnswer: '(a) Definition & Functions of Political Parties:\nA political party is an organized group of citizens who come together to contest elections and hold power in the government, agreeing on policies and programs for the collective societal good.\n\nKey Functions:\n1. Contest Elections: Parties put forward candidates chosen by party leaders or members to compete in democratic elections.\n2. Formulate Policies & Programs: Parties aggregate diverse public opinions into a coherent set of policies and manifestos for voters to select.\n3. Form and Run Governments: Parties recruit ministers, train leaders, and run the government executive according to their policy directions.\n4. Role of Opposition: Parties that lose elections act as the vigilant Opposition, voicing different viewpoints and criticizing government failures and wrongful policies.\n\n(b) Challenges Faced by Political Parties:\n1. Lack of Internal Democracy: Power tends to concentrate in the hands of one or a few top leaders. Parties rarely hold regular internal organizational elections, maintain membership registers, or consult grassroots workers.\n2. Dynastic Succession: Top leadership positions are monopolized by members of a single family or close relatives, preventing honest, hardworking, and competent party workers from rising to the top.\n3. Role of Money and Muscle Power: Escalating election expenses cause parties to nominate candidates with deep financial resources or criminal backgrounds who can intimidate opponents and finance campaigns.',
        stepMarking: [
          { step: '(a) Definition of political party and three key functions', marks: '3 Marks' },
          { step: '(b) Two challenges explained (Internal democracy, Dynastic succession, Money/Muscle power)', marks: '2 Marks' }
        ],
        examinerTip: 'Cover at least three components of a party: Leaders, Active Members, and Followers.',
        commonPitfall: 'Writing general political complaints rather than the four specific NCERT challenges.'
      },
      {
        id: 'c10-sst-24-q33',
        qNum: 33,
        section: 'D',
        marks: 5,
        topic: 'Economics: Self-Help Groups (SHGs) for the Poor',
        questionText: 'Explain the composition, functioning, and significance of Self-Help Groups (SHGs) in empowering rural women and overcoming the problem of lack of collateral in credit.',
        modelAnswer: 'Composition and Functioning of SHGs:\n1. Membership: A typical Self-Help Group (SHG) consists of 15 to 20 members, usually belonging to one rural neighborhood, predominantly women, who meet and save regularly.\n2. Small Regular Savings: Saving per member varies from ₹ 25 to ₹ 100 or more, depending on the ability of the people to save.\n3. Internal Lending: Members take small loans from the group\'s collective fund to meet emergency needs (e.g., purchasing seeds, wedding expenses, releasing mortgaged land) at very modest interest rates.\n4. Bank Linkage: After a group is regular in savings for a year or two, it becomes eligible for collateral-free bank loans sanctioned in the group\'s name to create micro-enterprises (sewing machines, handlooms, cattle rearing).\n\nSignificance of SHGs:\n1. Overcoming Lack of Collateral: Banks lend to SHGs based on collective mutual trust and group responsibility; if any individual member defaults, the group follows up, eliminating the barrier of individual collateral.\n2. Financial and Economic Self-Reliance: Helps poor women build independent assets and income streams.\n3. Social Empowerment: Regular group meetings serve as a democratic platform to discuss and act on pressing social issues such as health, nutrition, sanitation, and domestic violence.',
        stepMarking: [
          { step: 'Composition and savings structure of SHGs (15-20 members)', marks: '1.5 Marks' },
          { step: 'Mechanism of internal lending and bank loan linkage', marks: '1.5 Marks' },
          { step: 'Overcoming collateral and driving women empowerment socially and economically', marks: '2 Marks' }
        ],
        examinerTip: 'Highlight how group responsibility replaces individual physical collateral.',
        commonPitfall: 'Confusing SHGs with government banks.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION E: CASE STUDY QUESTIONS (Q34 to Q36 - 4 Marks Each)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sst-24-q34',
        qNum: 34,
        section: 'E',
        marks: 4,
        topic: 'Case Study 1: Print Revolution and Public Debate (History)',
        questionText: 'Read the source below and answer the questions:\n"Print created the possibility of wide circulation of ideas and introduced a new world of debate and discussion. Even those who disagreed with established authorities could now print and circulate their ideas. Through the printed message, they could persuade people to think differently and move them to action. In 1517, the religious reformer Martin Luther wrote Ninety-Five Theses criticizing many practices of the Roman Catholic Church. A printed copy of this was posted on a church door in Wittenberg. Luther\'s writings were immediately reproduced in vast numbers and read widely. This led to a division within the Church and to the beginning of the Protestant Reformation."\n\n(i) What was the Protestant Reformation? [1 Mark]\n(ii) How did print culture facilitate the spread of Martin Luther\'s religious ideas? [1 Mark]\n(iii) (a) "Print was the ultimate gift of God and the greatest one." Explain Martin Luther\'s deep appreciation of print in the light of this statement. [2 Marks]\n                         OR\n(iii) (b) Why were religious authorities and monarchs fearful of the printed book? [2 Marks]',
        modelAnswer: '(i) The Protestant Reformation was a 16th-century religious movement to reform the Catholic Church dominated by Rome. It challenged papal corruption and led to the establishment of Protestant Christian churches.\n\n(ii) Print culture enabled rapid mass reproduction: Martin Luther\'s Ninety-Five Theses and German translation of the New Testament sold 5,000 copies in just a few weeks, circulating ideas rapidly across Europe beyond the physical reach of church authorities.\n\n(iii) (a) Luther deeply appreciated print because movable type printing democratized spiritual knowledge: for centuries, Latin bibles were monopolized by the Catholic clergy. The printed vernacular Bible allowed ordinary citizens to read, interpret scripture for themselves, and question corrupt church dogmas (like sale of indulgences), sparking the Protestant Reformation.\n\nOR\n(iii) (b) Religious authorities and monarchs were deeply anxious because uncensored print eliminated state and church monopoly over knowledge. They feared that if there was no control over what was printed, rebellious, heretical, and anti-monarchical ideas would spread among masses, undermining clerical authority and royal sovereignty.',
        stepMarking: [
          { step: '(i) Definition of Protestant Reformation', marks: '1 Mark' },
          { step: '(ii) Mass printing and swift circulation of 95 Theses', marks: '1 Mark' },
          { step: '(iii)(a) Democratic access to vernacular scriptures OR (iii)(b) Fear of loss of religious/royal monopoly over public minds', marks: '2 Marks' }
        ],
        examinerTip: 'Martin Luther\'s translation of the New Testament sold 5,000 copies in a few days.',
        commonPitfall: 'Confusing Martin Luther with American civil rights activist Martin Luther King Jr.'
      },
      {
        id: 'c10-sst-24-q35',
        qNum: 35,
        section: 'E',
        marks: 4,
        topic: 'Case Study 2: Soil Conservation and Terrace Farming (Geography)',
        questionText: 'Read the source below and answer the questions:\n"Soil erosion is the denudation of the soil cover and subsequent washing down. The processes of soil formation and erosion go on simultaneously and generally there is a balance between the two. However, this balance is disturbed by human activities such as deforestation, over-grazing, construction, and mining, while natural forces like wind, glacier, and water lead to soil erosion. Running water cuts through clayey soils and makes deep channels known as gullies, rendering land unfit for cultivation, known as badlands. In the Chambal basin, such lands are called ravines."\n\n(i) What are gullies and ravines? [1 Mark]\n(ii) Mention any two human activities that accelerate soil erosion. [1 Mark]\n(iii) (a) Explain two effective agricultural techniques practiced to prevent soil erosion in hilly and mountainous regions. [2 Marks]\n                         OR\n(iii) (b) Explain how shelter belts and strip cropping prevent soil erosion in dry and coastal regions. [2 Marks]',
        modelAnswer: '(i) Gullies are deep channels cut into clayey soil by fast-moving rainwater runoff, rendering the land unusable for farming. In the Chambal river basin of Central India, such intensely gullied badlands are called ravines.\n\n(ii) Two human activities: Deforestation (removal of vegetative root cover) and Overgrazing by livestock (stripping grass cover).\n\n(iii) (a) Two Mountain Techniques:\n1. Contour Ploughing: Ploughing along contour lines across the slope decelerates the velocity of descending water runoff.\n2. Terrace Farming: Step-like flat terraces cut into steep slopes create horizontal platforms for farming, checking water velocity and retaining soil (extensively used in Western and Central Himalayas).\n\nOR\n(iii) (b) Techniques for Dry/Coastal Areas:\n1. Strip Cropping: Large agricultural fields are divided into strips; narrow strips of grass are left to grow between crops to break the physical momentum of prevailing winds.\n2. Shelter Belts: Planting long continuous rows of trees along field boundaries breaks wind velocity, stabilizing sand dunes and preventing desertification in Western Rajasthan and coastal zones.',
        stepMarking: [
          { step: '(i) Gullies and Chambal ravines defined', marks: '1 Mark' },
          { step: '(ii) Deforestation and overgrazing', marks: '1 Mark' },
          { step: '(iii)(a) Contour ploughing and terrace farming OR (iii)(b) Strip cropping and shelter belts', marks: '2 Marks' }
        ],
        examinerTip: 'Contour ploughing = along contour lines; Terrace cultivation = cutting steps into slopes.',
        commonPitfall: 'Confusing sheet erosion (uniform surface wash) with gully erosion (deep canyons).'
      },
      {
        id: 'c10-sst-24-q36',
        qNum: 36,
        section: 'E',
        marks: 4,
        topic: 'Case Study 3: Federalism - Coalition Governments (Political Science)',
        questionText: 'Read the source below and answer the questions:\n"The period after 1990 saw the rise of regional political parties in many states of the country. This was also the beginning of the era of Coalition Governments at the Centre. Since no single party got a clear majority in the Lok Sabha, the major national parties had to enter into an alliance with many parties, including several regional parties, to form a government at the Centre. This led to a new culture of power sharing and respect for the autonomy of State Governments. This trend was supported by a major judgment of the Supreme Court that made it difficult for the Central Government to dismiss state governments in an arbitrary manner."\n\n(i) What is a coalition government? [1 Mark]\n(ii) How did the post-1990 coalition era strengthen federalism in India? [1 Mark]\n(iii) (a) Explain how the landmark Supreme Court judgement (S.R. Bommai case) protected state governments from arbitrary dismissal under Article 356 (President\'s Rule). [2 Marks]\n                         OR\n(iii) (b) Differentiate between "Coming Together" and "Holding Together" federations with country examples. [2 Marks]',
        modelAnswer: '(i) A coalition government is an alliance government formed by two or more political parties coming together when no single party secures a clear legislative majority.\n\n(ii) Because central ruling coalitions depended directly on regional party support for survival, national parties were forced to respect regional aspirations and state autonomy, strengthening cooperative federalism.\n\n(iii) (a) Prior to the 1990s, the ruling party at the Centre frequently misused Article 356 (President\'s Rule) to dismiss rival state governments on flimsy pretexts. In the S.R. Bommai case (1994), the Supreme Court ruled that state assemblies could not be arbitrarily dissolved and made the proclamation of President\'s Rule subject to judicial review, safeguarding the constitutional rights of state governments.\n\nOR\n(iii) (b) Federation Types:\n1. Coming Together Federations: Independent sovereign states pool their sovereignty together to increase security while retaining individual identity (e.g., USA, Switzerland, Australia). Constituent units generally have equal powers.\n2. Holding Together Federations: A large country decides to divide its governing powers between the national central government and constituent state governments (e.g., India, Spain, Belgium). The central government tends to be more powerful than states.',
        stepMarking: [
          { step: '(i) Definition of coalition government', marks: '1 Mark' },
          { step: '(ii) Respect for regional aspirations and state autonomy', marks: '1 Mark' },
          { step: '(iii)(a) Judicial check on misuse of Article 356 President’s Rule OR (iii)(b) Coming Together (USA) vs Holding Together (India)', marks: '2 Marks' }
        ],
        examinerTip: 'India, Spain, and Belgium are "Holding Together" federations; USA, Switzerland, Australia are "Coming Together".',
        commonPitfall: 'Classifying India as a "Coming Together" federation.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION F: MAP SKILL-BASED QUESTION (Q37 - 5 Marks Total)
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c10-sst-24-q37',
        qNum: 37,
        section: 'F',
        marks: 5,
        topic: 'Map Skill: History (2 Marks) & Geography (3 Marks)',
        questionText: '37 (a) Two features A and B are marked on the outline political map of India. Identify them and write their correct names on the lines drawn near them:\n    A: The place where the Indian National Congress session was held in September 1920. [1 Mark]\n    B: The place where Mahatma Gandhi called off the Non-Cooperation Movement due to police station burning. [1 Mark]\n\n37 (b) On the same outline map of India, locate and label any THREE of the following with suitable symbols:\n    (i) Salal Dam [1 Mark]\n    (ii) Tarapur Nuclear Power Plant [1 Mark]\n    (iii) Bhilai Iron and Steel Plant [1 Mark]\n    (iv) Tuticorin Major Sea Port [1 Mark]',
        modelAnswer: '37 (a) History Identification:\nA: Calcutta (Kolkata) - Indian National Congress session of September 1920 (where Mahatma Gandhi convinced leaders to start Non-Cooperation in support of Khilafat and Swaraj).\nB: Chauri Chaura (Gorakhpur district, Uttar Pradesh) - where peaceful demonstrators turned violent, burnt a police station killing 22 policemen in February 1922, prompting Gandhiji to call off Non-Cooperation.\n\n37 (b) Geography Map Locations:\n(i) Salal Dam: Located on River Chenab in the Reasi district of Jammu and Kashmir.\n(ii) Tarapur Nuclear Power Plant: Located on the western coastline in Palghar district of Maharashtra (India\'s oldest atomic power station).\n(iii) Bhilai Iron and Steel Plant: Located in Durg district of Chhattisgarh.\n(iv) Tuticorin (V.O. Chidambaranar) Sea Port: Located in the Gulf of Mannar, southern Tamil Nadu (major deep-water artificial harbour).',
        stepMarking: [
          { step: '37(a) A: Calcutta (Kolkata) [1 Mark]', marks: '1 Mark' },
          { step: '37(a) B: Chauri Chaura (Uttar Pradesh) [1 Mark]', marks: '1 Mark' },
          { step: '37(b) Three locations correctly pinpointed and labelled on India map [3 Marks]', marks: '3 Marks' }
        ],
        examinerTip: 'September 1920 session was in Calcutta; December 1920 session was in Nagpur. Do not mix them up!',
        commonPitfall: 'Confusing Chauri Chaura (UP) with Champaran (Bihar).'
      }
    ]
  }
];
