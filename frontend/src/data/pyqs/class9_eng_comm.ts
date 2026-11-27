import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_ENG_COMM_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // CBSE CLASS 9 COMMUNICATIVE ENGLISH ANNUAL EXAMINATION 2025 (CODE 101)
  // FULL-LENGTH PAPER: 49 DISTINCT QUESTIONS — 80 MARKS TOTAL
  // Aligned with Oswal Most Likely CBSE Question Bank & Acad-29/2024 Blueprint
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c9-eng-comm-2025-annual',
    title: 'CBSE Class 9 Communicative English Annual Examination 2025 (Official Code 101 - Oswal Aligned)',
    subject: 'English',
    targetClass: 'Class 9',
    year: 2025,
    paperType: 'BOARD_EXAM',
    paperCode: 'CBSE/C9/ENG-COMM/101/25',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 49,
    generalInstructions: [
      '15-minute prior reading time allotted for reading the question paper only.',
      'The Question paper comprises 49 questions across four sections: Section A (Reading - Q1 to Q20: 20 Marks), Section B (Writing - Q21 to Q24: 24 Marks), Section C (Grammar - Q25 to Q34: 10 Marks), and Section D (Literature - Q35 to Q49: 26 Marks). Total 80 Marks.',
      'All questions are compulsory. Internal choices are provided within writing and long answer questions.',
      'Adhere strictly to the prescribed word limits.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: READING SKILLS (20 MARKS)
      // PASSAGE 1: DISCURSIVE PASSAGE ON SLEEP HYGIENE [Q1 to Q10]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: `[Read the passage on Sleep Hygiene:]
"Think about all the factors that can interfere with a good night’s sleep — from work stress and family responsibilities to unexpected challenges, such as illnesses. It is no wonder that quality sleep is sometimes elusive..."

According to the author, which of the following is a major obstacle to a good night’s sleep?`,
        options: [
          'A) Regular physical activity in morning',
          'B) Stress and anxiety',
          'C) Absence of light in the bedroom',
          'D) A quiet bedroom environment'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Stress and anxiety.\nParagraph 1 lists work stress, family responsibilities, and unexpected challenges as primary obstacles to quality sleep.',
        stepMarking: [{ step: 'Correct option B selected based on paragraph 1', marks: '1 Mark' }],
        examinerTip: 'Locate direct causes listed in paragraph 1.',
        commonPitfall: 'Selecting quiet bedroom.'
      },
      {
        id: 'c9-eng-comm-25-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: `Complete the dialogue with reference to paragraph 2:
Zaid: "Waking up late on weekends is my favourite thing to do, but I always have trouble sleeping early on Sunday night!"
Sid: "That’s because you are not consistent! We should ________."`,
        options: [
          'A) limit the difference in our sleep schedule to three hours',
          'B) be habitual of sleeping anytime irrespective of routine',
          'C) limit the difference in our daily sleep schedule between weekdays and weekends to no more than an hour',
          'D) sleep late every night to develop a uniform schedule'
        ],
        correctOption: 'C',
        modelAnswer: 'C) limit the difference in our daily sleep schedule between weekdays and weekends to no more than an hour.\nParagraph 2 advises: "Try to limit the difference in your sleep schedule on weeknights and weekends to no more than one hour."',
        stepMarking: [{ step: 'Correct option C selected matching paragraph 2 advice', marks: '1 Mark' }],
        examinerTip: 'Check the exact duration: no more than one hour.',
        commonPitfall: 'Selecting 3 hours.'
      },
      {
        id: 'c9-eng-comm-25-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'Choose the option that best conveys the message in: "you might not be able to control the factors":',
        options: [
          'A) Family responsibilities and stress are human created problems',
          'B) Humans cannot control their biological sleep-wake cycles',
          'C) Factors like illness and external emergencies are sometimes inevitable',
          'D) Good sleep habits are futile against work pressure'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Factors like illness and external emergencies are sometimes inevitable.\nRecognizes that while external crises cannot always be prevented, one can still cultivate healthy bedtime habits.',
        stepMarking: [{ step: 'Correct inference of inevitable external factors identified', marks: '1 Mark' }],
        examinerTip: 'The phrase addresses unexpected circumstances like sudden illnesses.',
        commonPitfall: 'Assuming good habits are useless.'
      },
      {
        id: 'c9-eng-comm-25-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'What positive habit do people with a healthy sleep routine display as noted in paragraph 3?',
        options: [
          'A) Doing calming activities like reading or a warm bath before bedtime',
          'B) Prolonged exposure to light-emitting screens just before sleeping',
          'C) Consuming heavy meals and caffeinated drinks late at night',
          'D) Taking long two-hour afternoon naps'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Doing calming activities like reading or a warm bath before bedtime.\nParagraph 3 explicitly advocates calming rituals to promote deep sleep.',
        stepMarking: [{ step: 'Correct habit identified from paragraph 3', marks: '1 Mark' }],
        examinerTip: 'Look at recommendations in paragraph 3.',
        commonPitfall: 'Selecting evening naps.'
      },
      {
        id: 'c9-eng-comm-25-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'Which word can suitably replace "elusive" as used in paragraph 1 ("quality sleep is sometimes elusive")?',
        options: [
          'A) Plentiful and easy',
          'B) Difficult to catch or achieve',
          'C) Delusional and imaginary',
          'D) Highly expensive'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Difficult to catch or achieve.\n"Elusive" means difficult to grasp, catch, or achieve.',
        stepMarking: [{ step: 'Correct contextual synonym identified', marks: '1 Mark' }],
        examinerTip: 'Elusive = hard to pin down or attain.',
        commonPitfall: 'Confusing elusive with illusive/delusional.'
      },
      {
        id: 'c9-eng-comm-25-q6',
        qNum: 6,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'Identify the idiom appearing in paragraph 2 that means "to cause widespread destruction or disruption":',
        options: [
          'A) Sleep-wake cycle',
          'B) Soothing music',
          'C) Wreak havoc',
          'D) Dark and quiet'
        ],
        correctOption: 'C',
        modelAnswer: 'C) Wreak havoc.\nParagraph 2 uses the idiom: "caffeine... can wreak havoc on quality sleep".',
        stepMarking: [{ step: 'Idiom "wreak havoc" identified', marks: '1 Mark' }],
        examinerTip: 'An idiom is a figurative phrase.',
        commonPitfall: 'Selecting non-idiomatic phrases like "sleep-wake cycle".'
      },
      {
        id: 'c9-eng-comm-25-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: `Which set of practices does the author advocate in paragraph 3 to foster sound sleep?
(1) Being relaxed (2) Hyperactivity (3) Using laptops in bed (4) Spending time outdoors (5) Using earplugs`,
        options: [
          'A) (1), (2) and (5)',
          'B) (1), (3) and (4)',
          'C) (1), (4) and (5)',
          'D) (2), (3) and (5)'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (1), (4) and (5).\nParagraph 3 advises relaxation techniques (1), spending time outside (4), and creating a quiet bedroom with earplugs/shades (5).',
        stepMarking: [{ step: 'Correct triplet of practices selected', marks: '1 Mark' }],
        examinerTip: 'Using laptops and hyperactivity hinder sleep.',
        commonPitfall: 'Including (3).'
      },
      {
        id: 'c9-eng-comm-25-q8',
        qNum: 8,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'What effect does exposure to blue light or light-emitting screens have just before bedtime?',
        options: [
          'A) It accelerates the onset of deep sleep',
          'B) It makes it significantly more challenging to fall asleep',
          'C) It replaces the biological need for sleep',
          'D) It induces physical muscle relaxation'
        ],
        correctOption: 'B',
        modelAnswer: 'B) It makes it significantly more challenging to fall asleep.\nParagraph 3 explicitly warns that light exposure before bed suppresses melatonin and disrupts sleep onset.',
        stepMarking: [{ step: 'Textual fact on light exposure identified', marks: '1 Mark' }],
        examinerTip: 'Refer to the first line of paragraph 3.',
        commonPitfall: 'Assuming screens relax the eyes.'
      },
      {
        id: 'c9-eng-comm-25-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'What practical advice does the writer give in paragraph 2 if you cannot fall asleep within 20 minutes?',
        modelAnswer: 'The author advises leaving the bedroom to engage in a quiet, calming activity (such as reading a book or listening to soothing music), and returning to bed only when you genuinely feel tired.',
        stepMarking: [{ step: 'Advice to leave bedroom and do relaxing activity stated', marks: '1 Mark' }],
        examinerTip: 'Quote the 20-minute rule from paragraph 2.',
        commonPitfall: 'Suggesting scrolling on mobile phones.'
      },
      {
        id: 'c9-eng-comm-25-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Reading: Sleep Hygiene (Discursive)',
        questionText: 'Which famous quotation best captures the central idea of this passage on sleep hygiene?',
        options: [
          'A) "My life has a tendency to fall apart when I\'m awake." — Ernest Hemingway',
          'B) "Sleep, those little slices of death — how I loathe them." — Edgar Allan Poe',
          'C) "How sleep the brave, who sink to rest." — William Collins',
          'D) "Sleep is that golden chain that ties health and our bodies together." — Thomas Dekker'
        ],
        correctOption: 'D',
        modelAnswer: 'D) "Sleep is that golden chain that ties health and our bodies together." — Thomas Dekker.\nReflects how sound sleep is the biological anchor for physical and mental health.',
        stepMarking: [{ step: 'Philosophical quote matching central theme selected', marks: '1 Mark' }],
        examinerTip: 'Dekker’s quote highlights the bond between sleep and overall health.',
        commonPitfall: 'Selecting quote B (Edgar Allan Poe).'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PASSAGE 2: CASE-BASED FACTUAL PASSAGE ON TINY INDIAN HAMLETS [Q11 to Q20]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: `[Read the passage on Tiny Indian Hamlets:]
"There are innumerable villages in India that have fewer than 500 residents. Many people from crowded cities head to these remote sanctuaries to wash away the stress and hardships of an ultra-modern life..."

What is the central purpose of this passage?`,
        options: [
          'A) To discuss economic trade policies across Indian states',
          'B) To highlight tiny, picturesque villages and secluded hamlets across India',
          'C) To promote urban industrialization in remote regions',
          'D) To analyze beach tourism in coastal Goa'
        ],
        correctOption: 'B',
        modelAnswer: 'B) To highlight tiny, picturesque villages and secluded hamlets across India.\nThe passage highlights remote settlements with fewer than 500 residents across Arunachal, Himachal, Goa, Uttarakhand, and Nagaland.',
        stepMarking: [{ step: 'Core informative purpose identified', marks: '1 Mark' }],
        examinerTip: 'The passage explores miniature rural settlements.',
        commonPitfall: 'Selecting Goa beach tourism.'
      },
      {
        id: 'c9-eng-comm-25-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: `Select the option that correctly describes the relation between the two statements:
Statement (1): Shansha has a population of 320 people in 72 houses.
Statement (2): The hamlet of Shansha is home to a greenhouse at 10,000 ft.`,
        options: [
          'A) (1) contradicts (2)',
          'B) (2) is the cause of (1)',
          'C) (1) is an independent factual observation from (2)',
          'D) (2) is the consequence of (1)'
        ],
        correctOption: 'C',
        modelAnswer: 'C) (1) is an independent factual observation from (2).\nBoth are distinct factual attributes of Shansha that do not cause or contradict each other.',
        stepMarking: [{ step: 'Independent factual relationship recognized', marks: '1 Mark' }],
        examinerTip: 'Population data and greenhouse existence are independent facts.',
        commonPitfall: 'Assuming the greenhouse caused the population.'
      },
      {
        id: 'c9-eng-comm-25-q13',
        qNum: 13,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'What does the sentence "Most families welcome the trekkers to stay at their homes" reveal about the people of Sankri?',
        options: [
          'A) They run commercial luxury hotels',
          'B) They display warm, hospitable homestay culture towards visitors',
          'C) They are hesitant to allow outsiders into the valley',
          'D) They depend entirely on government subsidies'
        ],
        correctOption: 'B',
        modelAnswer: 'B) They display warm, hospitable homestay culture towards visitors.\nReflects traditional mountain hospitality where local families open their doors to mountaineers.',
        stepMarking: [{ step: 'Hospitable homestay culture identified', marks: '1 Mark' }],
        examinerTip: 'Notice the phrase "welcome the trekkers".',
        commonPitfall: 'Thinking they are luxury commercial resorts.'
      },
      {
        id: 'c9-eng-comm-25-q14',
        qNum: 14,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'Why is the high-altitude greenhouse in Shansha indispensable to the locals?',
        options: [
          'A) It is a popular tourist viewpoint',
          'B) It provides crucial agricultural sustenance at an inhospitable altitude of 10,000 ft',
          'C) It is used to generate hydroelectric power',
          'D) It acts as a transit camp for international mountaineers'
        ],
        correctOption: 'B',
        modelAnswer: 'B) It provides crucial agricultural sustenance at an inhospitable altitude of 10,000 ft.\nParagraph 3 specifies that it aids local agriculture and survival in severe cold and rugged mountain terrain.',
        stepMarking: [{ step: 'Agricultural aid function at 10,000 ft altitude identified', marks: '1 Mark' }],
        examinerTip: 'Look at paragraph 3 details on the greenhouse.',
        commonPitfall: 'Selecting hydroelectric power.'
      },
      {
        id: 'c9-eng-comm-25-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: `Which of the following statements correctly align with the description of Nitoi village in Nagaland?
(1) Nitoi has a population of 402 individuals.
(2) Exactly 80% of its population is illiterate.
(3) It exhibits a high 80% literacy rate despite its isolation.
(4) It is situated in coastal Goa.`,
        options: [
          'A) (1) and (2)',
          'B) (1) and (3)',
          'C) (2) and (4)',
          'D) (3) and (4)'
        ],
        correctOption: 'B',
        modelAnswer: 'B) (1) and (3).\nParagraph 6 notes Nitoi has 402 residents (1) and boasts an 80% literacy rate (3).',
        stepMarking: [{ step: 'Statements (1) and (3) verified from text', marks: '1 Mark' }],
        examinerTip: 'Nitoi is 80% literate, NOT illiterate.',
        commonPitfall: 'Confusing 80% literacy with illiteracy.'
      },
      {
        id: 'c9-eng-comm-25-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'The Menga caves located near Ha village in Arunachal Pradesh are dedicated to which Hindu deity?',
        options: [
          'A) Lord Shiva',
          'B) Lord Vishnu',
          'C) Lord Krishna',
          'D) Lord Ganesha'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Lord Shiva.\nParagraph 2 states: "the Menga caves which are dedicated to Lord Shiva."',
        stepMarking: [{ step: 'Deity Lord Shiva identified from paragraph 2', marks: '1 Mark' }],
        examinerTip: 'Check paragraph 2 under Ha village.',
        commonPitfall: 'Selecting Lord Vishnu.'
      },
      {
        id: 'c9-eng-comm-25-q17',
        qNum: 17,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'Why do city dwellers frequently travel to these secluded hamlets as described in paragraph 1?',
        options: [
          'A) To explore commercial shopping malls',
          'B) To escape the stress, pollution, and hardships of ultra-modern urban life',
          'C) To invest in real estate developments',
          'D) To search for industrial employment'
        ],
        correctOption: 'B',
        modelAnswer: 'B) To escape the stress, pollution, and hardships of ultra-modern urban life.\nParagraph 1 states: "Many people from the other cities in India head to one of these sanctuaries to wash away all the hardships of an ultra-modern life."',
        stepMarking: [{ step: 'Urban escapism motive identified', marks: '1 Mark' }],
        examinerTip: 'Look at the last sentence of paragraph 1.',
        commonPitfall: 'Choosing business or employment.'
      },
      {
        id: 'c9-eng-comm-25-q18',
        qNum: 18,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'What popular misconception about the state of Goa does the passage refute in paragraph 4?',
        modelAnswer: 'It refutes the misconception that Goa consists exclusively of crowded beaches and party shacks, demonstrating that it also harbours tranquil, isolated riverine villages like Xelpem with just 255 residents.',
        stepMarking: [{ step: 'Refutation of beach stereotype and presentation of quiet inland villages explained', marks: '1 Mark' }],
        examinerTip: 'Refer to paragraph 4 opening sentence.',
        commonPitfall: 'Writing that Goa has no beaches.'
      },
      {
        id: 'c9-eng-comm-25-q19',
        qNum: 19,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'State the exact altitude of Ha village, the smallest named settlement in India.',
        modelAnswer: 'Ha village is situated at an altitude of 4,780 feet in the Kurung Kumey district of Arunachal Pradesh.',
        stepMarking: [{ step: 'Exact altitude (4,780 ft) stated', marks: '1 Mark' }],
        examinerTip: 'Check paragraph 2.',
        commonPitfall: 'Writing 10,000 ft (which is Shansha\'s altitude).'
      },
      {
        id: 'c9-eng-comm-25-q20',
        qNum: 20,
        section: 'A',
        marks: 1,
        topic: 'Reading: Tiny Indian Hamlets (Factual)',
        questionText: 'Find a word from paragraph 1 that means "places of safety, quiet refuge, or peaceful shelter".',
        modelAnswer: '"Sanctuaries".',
        stepMarking: [{ step: 'Word "sanctuaries" identified', marks: '1 Mark' }],
        examinerTip: 'Quote directly from paragraph 1.',
        commonPitfall: 'Writing "villages".'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: WRITING SKILLS (24 MARKS) [Q21 to Q24]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q21',
        qNum: 21,
        section: 'B',
        marks: 4,
        topic: 'Writing Skills: Notice Writing (Word Limit: 50 Words)',
        questionText: `Attempt ANY ONE of the following notice writing tasks in about 50 words (4 Marks):

OPTION A:
You are Mahender, Sports Captain of St. John's School, Lucknow. Write a notice for your school notice board informing students about an Inter-School Football Match to be played on your school grounds. Invite them to attend and cheer for their school team.

OR

OPTION B:
You are Rohan, NSS In-Charge of XYZ Public School, Madurai. Write a notice informing students about a Book Donation Drive organized for the underprivileged children of a neighbouring slum. Specify collection venue, dates, and timings.`,
        modelAnswer: `OPTION A:
ST. JOHN’S SCHOOL, LUCKNOW
NOTICE

23rd April 2025

INTER-SCHOOL FOOTBALL MATCH

All students are hereby informed that an exciting Inter-School Football Match will be played between our school team and St. Xavier's High School as per the following schedule:

• Date: 25th April 2025
• Time: 10:00 AM onwards
• Venue: School Main Football Ground

All students are invited to assemble in the stands to cheer and motivate our team to victory.

Mahender
Sports Captain

─────────────────────────────────────────────────────────────
OR
OPTION B:
XYZ PUBLIC SCHOOL, MADURAI
NOTICE

14th March 2025

BOOK DONATION DRIVE

The NSS Unit of our school is organizing a two-day Book Donation Drive to support the education of children in the neighbouring slum community. Students are requested to generously donate gently used textbooks, storybooks, and stationery.

• Dates: 16th and 17th March 2025
• Timings: 10:00 AM – 3:00 PM
• Collection Points: Drop boxes outside School Library and Canteen

Let us share the gift of knowledge!

Rohan
NSS In-Charge`,
        stepMarking: [
          { step: 'Format (Institution Name, NOTICE, Date, Heading, Sign & Designation in a box)', marks: '1 Mark' },
          { step: 'Content (Target group, event, date, time, venue, call to action)', marks: '2 Marks' },
          { step: 'Expression (Grammatical accuracy, formal register, within 50 words)', marks: '1 Mark' }
        ],
        examinerTip: 'Enclose the notice in a neat box.',
        commonPitfall: 'Exceeding 50 words or omitting designation.'
      },
      {
        id: 'c9-eng-comm-25-q22',
        qNum: 22,
        section: 'B',
        marks: 5,
        topic: 'Writing Skills: Dialogue Writing (Word Limit: 100 Words)',
        questionText: `Attempt ANY ONE of the following dialogue writing tasks in about 100 words (5 Marks):

OPTION A:
Chetan witnessed a brazen car abduction at a city bus stop. Write a realistic dialogue between Chetan and the investigating Police Officer as Chetan provides crucial eyewitness details about the suspects and vehicle.

OR

OPTION B:
Ravi is feeling demotivated because his corporate boss is authoritative, unsupportive, and refuses leave even in genuine emergencies. Write a dialogue between Ravi and his friend Amit discussing desirable qualities of an exemplary leader versus toxic management.`,
        modelAnswer: `OPTION A: Eyewitness Account
Police Officer: Chetan, where exactly were you standing when the incident took place?
Chetan: Officer, I was standing right across the road when a white van screeched to a halt beside the bus shelter. Two masked men hopped out, grabbed a schoolgirl, and sped away instantly.
Police Officer: Could you identify their facial features or physical build?
Chetan: Both wore balaclavas, Sir, but the taller one was at least six feet two inches. Fortunately, I noted down the registration number—DL 1C AB 4592. It had a local laundry logo stamped on the rear door.
Police Officer: Excellent alertness, Chetan! Your quick observation will help us intercept them immediately. Please record your contact details with my sub-inspector.

─────────────────────────────────────────────────────────────
OR
OPTION B: The Hallmarks of True Leadership
Ravi: Amit, I feel completely drained. My manager demands sixteen-hour shifts, ridicules my inputs, and denied me leave even when my mother was ill.
Amit: That is textbook toxic micromanagement, Ravi. A real boss inspires through empathy, not fear.
Ravi: Exactly! Leadership isn't about imposing authority; it’s about solving problems and empowering the team.
Amit: True. Remember how Dr. Kalam led ISRO? When a scientist forgot his promise to take his children to an exhibition due to work pressure, Dr. Kalam took them himself!
Ravi: What a contrast! A great leader protects his team's dignity while driving excellence. I need to request a department transfer.`,
        stepMarking: [
          { step: 'Dialogue Flow & Context (Natural turn-taking, dramatic coherence)', marks: '2 Marks' },
          { step: 'Content & Vocabulary (Directly addressing prompt cues, depth of thought)', marks: '2 Marks' },
          { step: 'Grammatical Accuracy & Format (Colons without quotes, within 100 words)', marks: '1 Mark' }
        ],
        examinerTip: 'Write in script format (Speaker: Dialogue) without quotation marks.',
        commonPitfall: 'Writing one-sided monologues.'
      },
      {
        id: 'c9-eng-comm-25-q23',
        qNum: 23,
        section: 'B',
        marks: 7,
        topic: 'Writing Skills: Informal Letter Writing (Word Limit: 120 Words)',
        questionText: `Attempt ANY ONE of the following informal letter writing tasks in about 120 words (7 Marks):

OPTION A:
You recently participated in an Inter-School Science & Elocution Competition where your team clinched the first prize under the guidance of an inspiring Team Captain. Write a letter to your mentor/former teacher sharing your experience, the teamwork dynamics, and how an exemplary leader contributed to your collective success.

OR

OPTION B:
Inspired by Sudha Murthy's story "How I Taught My Grandmother to Read", you took up the challenge of teaching your own illiterate house-help or elderly relative the basics of the alphabet. Write a letter to your best friend describing the challenges, dedication, and the emotional joy of seeing them sign their own name.`,
        modelAnswer: `OPTION A:
42-B, Rosewood Enclave
Lucknow, Uttar Pradesh
24th October 2025

Respected Ma’am,

I hope this letter finds you in radiant health and cheerful spirits. I am ecstatic to share that our senior school delegation secured the First Prize at the State Inter-School Elocution and Innovation Conclave yesterday!

Competing against thirty top-tier teams on "Globalisation and Environmental Sustainability" was daunting. However, our captain, Aryan, proved to be an exemplary leader. Instead of imposing rigid directives, he welcomed diverse viewpoints, patiently rehearsed our speeches, and boosted our morale whenever situational anxiety kicked in. His calm problem-solving and inclusive approach transformed our individual efforts into a cohesive powerhouse.

This competition taught me that true leadership is rooted in active listening and mutual trust. Thank you for always instilling these values in me.

Yours obediently,
Divya Agarwal

─────────────────────────────────────────────────────────────
OR
OPTION B:
15, Civil Lines
Agra, Uttar Pradesh
18th September 2025

Dear Sneha,

You won’t believe the heartwarming milestone I achieved this weekend! After reading Sudha Murthy’s inspiring story, I decided to teach our elderly house-help, Shanti Didi, how to read and write Hindi.

At sixty, she was initially hesitant, believing education was only meant for children. But her determination soon surpassed mine. Every evening after her chores, she practiced the Devanagari script with childlike diligence. Whenever she struggled with vowel combinations, she would repeat them ten times until she mastered them. 

Yesterday, on Dussehra, she proudly wrote her full name on her bank passbook instead of putting an ink thumb impression. Tears rolled down her eyes as she hugged me. It was the most gratifying moment of my life!

Do write back soon with your news.

Yours affectionately,
Ananya`,
        stepMarking: [
          { step: 'Format (Sender\'s address, date, salutation, subscription, signature)', marks: '1 Mark' },
          { step: 'Content (Engaging opening, thorough description of event/feelings, warm closure)', marks: '3 Marks' },
          { step: 'Expression (Informal warmth, rich vocabulary, grammatical coherence, within 120 words)', marks: '3 Marks' }
        ],
        examinerTip: 'Ensure proper informal format with sender\'s address and date.',
        commonPitfall: 'Writing formal words like "Subject" in an informal letter.'
      },
      {
        id: 'c9-eng-comm-25-q24',
        qNum: 24,
        section: 'B',
        marks: 8,
        topic: 'Writing Skills: Thematic Paragraph on Main Course Book (Word Limit: 150 Words)',
        questionText: `Attempt ANY ONE of the following paragraph writing tasks in about 150 words based on themes from the Main Course Book (8 Marks):

OPTION A (Theme: People - An Exemplary Leader):
Write a paragraph on "The Hallmarks of an Exemplary Leader" reflecting upon how authentic leaders lead through empathy, humility, and moral responsibility rather than authoritarian commands. You may draw inspiration from Dr. APJ Abdul Kalam’s leadership during the Thumba rocket research programme.

OR

OPTION B (Theme: National Building - Role of Youth):
Using the CODER framework (Collect, Organise, Draft, Edit, Revise), write a paragraph on "The Role of Youth in Realising Dr. Kalam's Vision for India". Address issues like eradicating corruption, promoting national integration, fostering gender equality, and driving scientific innovation.`,
        modelAnswer: `OPTION A: The Hallmarks of an Exemplary Leader
True leadership is not an exercise in commanding obedience; it is the art of inspiring commitment through personal empathy, moral integrity, and quiet humility. An exemplary leader does not merely point the way from an ivory tower—they walk the path alongside their team. History demonstrates that authoritarian bosses breed burnout and resentment, whereas compassionate leaders cultivate "eustress"—a constructive, positive pressure that fuels excellence and loyalty. A legendary embodiment of this philosophy was Dr. APJ Abdul Kalam during the early days of ISRO at Thumba. When a dedicated scientist became so engrossed in rocket calculations that he forgot his personal promise to take his children to an exhibition, Dr. Kalam quietly stepped in and escorted the children himself. By valuing human relationships alongside professional duty, exemplary leaders foster deep institutional allegiance, prove that empathy is the highest strength, and leave behind an enduring legacy of collective triumph.

─────────────────────────────────────────────────────────────
OR
OPTION B: The Role of Youth in Realising Dr. Kalam's Vision for India
India’s greatest demographic asset is its vibrant, aspirational youth, who hold the key to transforming Dr. APJ Abdul Kalam’s dream of a developed nation into reality. Dr. Kalam envisioned an India liberated from the shackles of poverty, corruption, and social inequities—a nation excelling in scientific self-reliance and global innovation. To realize this grand vision, young citizens must transcend passive armchair criticism and embrace active civic engagement. The youth must champion gender equality, dismantle caste biases, and foster unwavering national integration across linguistic and regional divides. Furthermore, instead of pursuing brain drain, young technocrats and entrepreneurs must harness indigenous technological solutions to empower rural communities, revolutionize agriculture, and establish sustainable green enterprises. By cultivating ethical courage, scientific temper, and relentless dedication to public service, the youth can ignite their minds and propel India to the vanguard of global progress.`,
        stepMarking: [
          { step: 'Title & Thematic Focus (Appropriate heading, compelling thesis statement)', marks: '1 Mark' },
          { step: 'Content & Argumentation (Deep exploration of leadership/youth role, coherent development)', marks: '4 Marks' },
          { step: 'Expression & Structure (Sophisticated vocabulary, transitions, grammatical precision, ~150 words)', marks: '3 Marks' }
        ],
        examinerTip: 'Ensure a smooth logical flow from premise to illustrative real-world examples and inspiring conclusion.',
        commonPitfall: 'Writing bullet points instead of a cohesive paragraph.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: GRAMMAR (10 MARKS) [Q25 to Q34]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q25',
        qNum: 25,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Gap Filling - Past Perfect',
        questionText: 'Fill in blank (a) with the correct verb form: "Brer Rabbit (a) __________ (decides / had decided / was deciding / has decided) that gardening was too demanding for him."',
        options: [
          'A) decides',
          'B) had decided',
          'C) was deciding',
          'D) has decided'
        ],
        correctOption: 'B',
        modelAnswer: 'B) had decided.\nPast Perfect Tense is used to show a decision that had already been taken before the subsequent story actions unfolded.',
        stepMarking: [{ step: 'Past Perfect form "had decided" chosen', marks: '1 Mark' }],
        examinerTip: 'Prior completed decision = had decided.',
        commonPitfall: 'Selecting Present Simple "decides".'
      },
      {
        id: 'c9-eng-comm-25-q26',
        qNum: 26,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Gap Filling - Simple Past',
        questionText: 'Fill in blank (b) with the correct verb form: "So, he (b) __________ (went / had gone / was going / has gone) back to his old ways."',
        options: [
          'A) went',
          'B) had gone',
          'C) was going',
          'D) has gone'
        ],
        correctOption: 'A',
        modelAnswer: 'A) went.\nSimple Past Tense ("went") indicates the immediate chronological action in the story.',
        stepMarking: [{ step: 'Simple Past form "went" chosen', marks: '1 Mark' }],
        examinerTip: 'Follow chronological narrative order with Simple Past.',
        commonPitfall: 'Using continuous tense.'
      },
      {
        id: 'c9-eng-comm-25-q27',
        qNum: 27,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Gap Filling - Past Perfect',
        questionText: 'Fill in blank (c) with the correct verb form: "Earlier, he (c) __________ (made / has made / had made / was making) a tour through the community to see what everybody was planting."',
        options: [
          'A) made',
          'B) has made',
          'C) had made',
          'D) was making'
        ],
        correctOption: 'C',
        modelAnswer: 'C) had made.\nThe adverb "Earlier" signifies an event occurring prior to his departure, mandating Past Perfect Tense ("had made").',
        stepMarking: [{ step: 'Past Perfect form "had made" chosen', marks: '1 Mark' }],
        examinerTip: '"Earlier" is a strong marker for Past Perfect.',
        commonPitfall: 'Selecting Simple Past "made".'
      },
      {
        id: 'c9-eng-comm-25-q28',
        qNum: 28,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Editing / Error Correction Line 1',
        questionText: 'Identify the error and correction in: "The Primary Section is line up to leave for a trip."',
        options: [
          'A) Error: line | Correction: lining',
          'B) Error: is | Correction: are',
          'C) Error: leave | Correction: left',
          'D) Error: for | Correction: to'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Error: line | Correction: lining.\nPresent Continuous structure "is + V1-ing" requires "is lining up".',
        stepMarking: [{ step: 'Error: line, Correction: lining identified', marks: '1 Mark' }],
        examinerTip: 'Look at the auxiliary verb "is".',
        commonPitfall: 'Changing "is" to "are".'
      },
      {
        id: 'c9-eng-comm-25-q29',
        qNum: 29,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Editing / Error Correction Line 2',
        questionText: 'Identify the error and correction in: "The middle wing are practicing for the Annual Day."',
        options: [
          'A) Error: practicing | Correction: practice',
          'B) Error: are | Correction: is',
          'C) Error: for | Correction: in',
          'D) Error: Day | Correction: Days'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Error: are | Correction: is.\n"The middle wing" is a single collective section of the school and requires the singular verb "is".',
        stepMarking: [{ step: 'Error: are, Correction: is identified', marks: '1 Mark' }],
        examinerTip: 'Collective units take singular verbs.',
        commonPitfall: 'Leaving "are" unchanged.'
      },
      {
        id: 'c9-eng-comm-25-q30',
        qNum: 30,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Editing / Error Correction Line 3',
        questionText: 'Identify the error and correction in: "The Principal take rounds of the campus diligently."',
        options: [
          'A) Error: take | Correction: takes',
          'B) Error: of | Correction: on',
          'C) Error: diligently | Correction: diligent',
          'D) Error: campus | Correction: campuses'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Error: take | Correction: takes.\nThird-person singular subject "The Principal" requires "takes" in Simple Present Tense.',
        stepMarking: [{ step: 'Error: take, Correction: takes identified', marks: '1 Mark' }],
        examinerTip: 'Subject-verb agreement: singular subject needs singular verb with -s.',
        commonPitfall: 'Changing adverb "diligently".'
      },
      {
        id: 'c9-eng-comm-25-q31',
        qNum: 31,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Editing / Error Correction Line 4',
        questionText: 'Identify the error and correction in: "The Art teacher getting the auditorium ready now."',
        options: [
          'A) Error: getting | Correction: is getting',
          'B) Error: ready | Correction: readily',
          'C) Error: now | Correction: then',
          'D) Error: auditorium | Correction: auditoriums'
        ],
        correctOption: 'A',
        modelAnswer: 'A) Error: getting | Correction: is getting.\nPresent Continuous action indicated by "now" requires the auxiliary verb "is" ("is getting").',
        stepMarking: [{ step: 'Error: getting, Correction: is getting identified', marks: '1 Mark' }],
        examinerTip: '"now" signifies Present Continuous tense.',
        commonPitfall: 'Writing simple present "gets".'
      },
      {
        id: 'c9-eng-comm-25-q32',
        qNum: 32,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Sentence Reordering (Biodiversity)',
        questionText: 'Rearrange into a coherent sentence: "interact / that / balance / Biodiversity / the / support / is / of / to / life forms / variety / and sustain / of nature"',
        modelAnswer: 'Biodiversity is the variety of life forms that interact to support and sustain the balance of nature.',
        stepMarking: [{ step: 'Syntactically accurate and meaningful sentence formed', marks: '1 Mark' }],
        examinerTip: 'Subject: Biodiversity, Copula: is, Complement: the variety of life forms...',
        commonPitfall: 'Misplacing relative clause "that interact".'
      },
      {
        id: 'c9-eng-comm-25-q33',
        qNum: 33,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Sentence Reordering (Human Population)',
        questionText: 'Rearrange into a coherent sentence: "consumed / the earth’s / resources / As / more and more / the human population / of / grows / are"',
        modelAnswer: 'As the human population grows, more and more of the earth’s resources are consumed.',
        stepMarking: [{ step: 'Subordinate clause "As the human population grows" followed by main clause', marks: '1 Mark' }],
        examinerTip: 'Notice the causal conjunction "As".',
        commonPitfall: 'Leaving out "are consumed".'
      },
      {
        id: 'c9-eng-comm-25-q34',
        qNum: 34,
        section: 'C',
        marks: 1,
        topic: 'Grammar: Sentence Reordering (Extinction Crisis)',
        questionText: 'Rearrange into a coherent sentence: "led / growth / to / an extinction crisis / Explosive / and consumption / have"',
        modelAnswer: 'Explosive growth and consumption have led to an extinction crisis.',
        stepMarking: [{ step: 'Compound subject "Explosive growth and consumption" with verb "have led"', marks: '1 Mark' }],
        examinerTip: 'Compound subject takes plural auxiliary "have".',
        commonPitfall: 'Writing "consumption and growth explosive".'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION D: LITERATURE TEXTBOOK (26 MARKS)
      // PART 1: EXTRACTS (8 MARKS) [Q35 to Q42]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q35',
        qNum: 35,
        section: 'D',
        marks: 1,
        topic: 'Literature: How I Taught My Grandmother to Read (Extract)',
        questionText: `[Read the extract from Sudha Murthy's "How I Taught My Grandmother to Read":]
"At that time, Triveni was a very popular writer in the Kannada language. She was a wonderful writer. Her style was easy to read and very convincing. Her stories usually dealt with complex psychological problems in the lives of ordinary people and were always very interesting..."

What made Triveni’s writing style exceptionally popular among ordinary Kannada readers?`,
        modelAnswer: 'Triveni\'s style was easy to read, deeply convincing, and dealt with complex psychological dilemmas in the everyday lives of ordinary people, making her characters intimately relatable.',
        stepMarking: [{ step: 'Relatable style and psychological problems of ordinary people cited', marks: '1 Mark' }],
        examinerTip: 'Locate sentence 3 and 4 in the extract.',
        commonPitfall: 'Writing that she wrote comedy jokes.'
      },
      {
        id: 'c9-eng-comm-25-q36',
        qNum: 36,
        section: 'D',
        marks: 1,
        topic: 'Literature: How I Taught My Grandmother to Read (Extract)',
        questionText: 'Name the novel serialized in the weekly magazine "Karmaveera" that Krishtakka followed with passionate devotion.',
        modelAnswer: '"Kashi Yatre".',
        stepMarking: [{ step: 'Novel title "Kashi Yatre" correctly stated', marks: '1 Mark' }],
        examinerTip: 'Spelling: Kashi Yatre.',
        commonPitfall: 'Writing Karmaveera (which is the magazine title).'
      },
      {
        id: 'c9-eng-comm-25-q37',
        qNum: 37,
        section: 'D',
        marks: 1,
        topic: 'Literature: How I Taught My Grandmother to Read (Extract)',
        questionText: 'Why was grandmother Krishtakka completely dependent on her young granddaughter to know the story?',
        modelAnswer: 'Krishtakka was illiterate because in her childhood orthodox village, female education was neglected and she was married off early; thus, she could not read Kannada script on her own.',
        stepMarking: [{ step: 'Illiteracy due to lack of childhood schooling explained', marks: '1 Mark' }],
        examinerTip: 'Mention the social context: girls were not sent to school.',
        commonPitfall: 'Assuming she had poor eyesight.'
      },
      {
        id: 'c9-eng-comm-25-q38',
        qNum: 38,
        section: 'D',
        marks: 1,
        topic: 'Literature: How I Taught My Grandmother to Read (Extract)',
        questionText: 'Which noble moral virtue did the protagonist in Triveni\'s "Kashi Yatre" embody?',
        modelAnswer: 'Selfless benevolence and compassion: the old protagonist gave away all her lifelong savings for a pilgrimage to Kashi to finance the marriage of a poor, destitute orphan girl.',
        stepMarking: [{ step: 'Sacrificing Kashi pilgrimage savings for orphan girl\'s wedding stated', marks: '1 Mark' }],
        examinerTip: 'The theme is: serving needy fellow beings is greater than ritual pilgrimage.',
        commonPitfall: 'Saying she went to Kashi.'
      },
      {
        id: 'c9-eng-comm-25-q39',
        qNum: 39,
        section: 'D',
        marks: 1,
        topic: 'Literature: The Brook (Poetry Extract)',
        questionText: `[Read the extract from Tennyson's "The Brook":]
"I chatter over stony ways,
In little sharps and trebles,
I bubble into eddying bays,
I babble on the pebbles..."

Which poetic sound device is predominantly used in the words "chatter", "bubble", and "babble"?`,
        options: [
          'A) Simile',
          'B) Onomatopoeia',
          'C) Hyperbole',
          'D) Oxymoron'
        ],
        correctOption: 'B',
        modelAnswer: 'B) Onomatopoeia.\nOnomatopoeia is the use of words whose sound echoes their meaning (chatter, bubble, babble).',
        stepMarking: [{ step: 'Onomatopoeia correctly identified', marks: '1 Mark' }],
        examinerTip: 'Words that mimic sounds = Onomatopoeia.',
        commonPitfall: 'Selecting simile.'
      },
      {
        id: 'c9-eng-comm-25-q40',
        qNum: 40,
        section: 'D',
        marks: 1,
        topic: 'Literature: The Brook (Poetry Extract)',
        questionText: 'What musical terms does Tennyson employ in the extract to capture the acoustic pitch of the brook\'s rapid flow?',
        modelAnswer: '"Sharps and trebles" (musical terms denoting high-pitched musical notes and chromatic pitch variations).',
        stepMarking: [{ step: '"Sharps and trebles" identified as musical acoustic terms', marks: '1 Mark' }],
        examinerTip: 'Quote "sharps and trebles" from line 2.',
        commonPitfall: 'Writing stony ways.'
      },
      {
        id: 'c9-eng-comm-25-q41',
        qNum: 41,
        section: 'D',
        marks: 1,
        topic: 'Literature: The Brook (Poetry Extract)',
        questionText: 'What does the "brimming river" signify in the journey of the brook?',
        modelAnswer: 'The "brimming river" represents the ultimate destination where the energetic brook completes its course and merges into the vast body of water, symbolising human life fulfilling its cycle in eternity.',
        stepMarking: [{ step: 'Merging into the river as final destination / eternity explained', marks: '1 Mark' }],
        examinerTip: 'The river represents the end of the journey.',
        commonPitfall: 'Saying the brook dries up.'
      },
      {
        id: 'c9-eng-comm-25-q42',
        qNum: 42,
        section: 'D',
        marks: 1,
        topic: 'Literature: The Brook (Poetry Extract)',
        questionText: 'Explain the profound philosophical contrast highlighted in the poem\'s concluding refrain: "For men may come and men may go, But I go on for ever."',
        modelAnswer: 'The refrain contrasts the fleeting, mortal existence of human beings (who are born, grow old, and die) with the perennial, immortal permanence of Nature\'s water cycle.',
        stepMarking: [{ step: 'Contrast between human mortality and nature\'s eternity explained', marks: '1 Mark' }],
        examinerTip: 'Human transience vs nature\'s perpetuity.',
        commonPitfall: 'Taking it as a literal comment on men walking along the bank.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 2: SHORT ANSWER QUESTIONS (12 MARKS) [Q43 to Q48]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q43',
        qNum: 43,
        section: 'D',
        marks: 2,
        topic: 'Literature: How I Taught My Grandmother to Read',
        questionText: 'In "How I Taught My Grandmother to Read", why was Krishtakka in tears when the narrator returned from the wedding? (Answer in 30–40 words)',
        modelAnswer: 'In her granddaughter’s absence, the weekly magazine arrived containing Kashi Yatre. Krishtakka desperately opened the pages and rubbed her fingers over the print, but could not decipher a single word. Feeling completely helpless, dependent, and ashamed of her illiteracy, she wept bitterly.',
        stepMarking: [{ step: 'Helplessness and shame at not being able to read Kashi Yatre explained', marks: '2 Marks' }],
        examinerTip: 'Emphasize her acute realization of dependency.',
        commonPitfall: 'Thinking she was weeping because she missed her granddaughter.'
      },
      {
        id: 'c9-eng-comm-25-q44',
        qNum: 44,
        section: 'D',
        marks: 2,
        topic: 'Literature: How I Taught My Grandmother to Read',
        questionText: 'Why did the sixty-two-year-old grandmother touch the feet of her twelve-year-old granddaughter on Saraswati Pooja Day? (Answer in 30–40 words)',
        modelAnswer: 'Krishtakka touched her granddaughter’s feet according to sacred tradition, which commands reverence for a teacher (Guru) regardless of age or gender. She bowed not to her grandchild, but to the patient Guru who had liberated her from the darkness of illiteracy.',
        stepMarking: [{ step: 'Reverence for Guru regardless of age explained', marks: '2 Marks' }],
        examinerTip: 'Quote grandmother\'s words: "I am touching the feet of a teacher, not my granddaughter".',
        commonPitfall: 'Viewing it as an ordinary grandparent blessing.'
      },
      {
        id: 'c9-eng-comm-25-q45',
        qNum: 45,
        section: 'D',
        marks: 2,
        topic: 'Literature: The Brook (Alfred Lord Tennyson)',
        questionText: 'In Tennyson’s poem "The Brook", how does the brook’s early journey from the hills mirror human childhood? (Answer in 30–40 words)',
        modelAnswer: 'The brook emerges suddenly from haunts of coots and herons, sparkling amidst ferns and bickering excitedly down hillsides. Its restless speed, chatter over stones, and spontaneous playful turns perfectly embody the joyful innocence, energy, and curiosity of childhood.',
        stepMarking: [{ step: 'Early energetic flow linked to childhood innocence and vigour', marks: '2 Marks' }],
        examinerTip: 'Mention words: "sally", "sparkle", "bicker".',
        commonPitfall: 'Describing adult stages of the brook.'
      },
      {
        id: 'c9-eng-comm-25-q46',
        qNum: 46,
        section: 'D',
        marks: 2,
        topic: 'Literature: The Brook (Alfred Lord Tennyson)',
        questionText: 'What is the significance of the repeating refrain in "The Brook"? (Answer in 30–40 words)',
        modelAnswer: 'The refrain "For men may come and men may go, But I go on for ever" emphasizes the fleeting, transient nature of mortal humans compared to the timeless perpetuity of the natural world, serving as the central philosophical thread of the poem.',
        stepMarking: [{ step: 'Philosophical significance of mortality vs eternity explained', marks: '2 Marks' }],
        examinerTip: 'Use keywords: transient mortality, eternal perpetuity.',
        commonPitfall: 'Writing only literal repetition.'
      },
      {
        id: 'c9-eng-comm-25-q47',
        qNum: 47,
        section: 'D',
        marks: 2,
        topic: 'Literature: Villa for Sale (Sacha Guitry)',
        questionText: 'In Sacha Guitry’s drama "Villa for Sale", why was Juliette so desperate to sell her villa, and why had it remained unsold for a month? (Answer in 30–40 words)',
        modelAnswer: 'Juliette was facing acute financial distress and was desperate for hard cash. Despite being located near the French film studios, the villa was small, costly to maintain, and lacked serious offers, leaving the "For Sale" signboard ignored for an entire month.',
        stepMarking: [{ step: 'Financial distress and lack of buyers for a month explained', marks: '2 Marks' }],
        examinerTip: 'Mention the French Hollywood setting and high upkeep.',
        commonPitfall: 'Claiming the villa was haunted.'
      },
      {
        id: 'c9-eng-comm-25-q48',
        qNum: 48,
        section: 'D',
        marks: 2,
        topic: 'Literature: Villa for Sale (Sacha Guitry)',
        questionText: 'How did Gaston manage to earn a net profit of one hundred thousand francs without spending a single centime of his own? (Answer in 30–40 words)',
        modelAnswer: 'Gaston took advantage of Mrs. Al Smith mistaking him for the owner and sold Juliette\'s villa to her for three hundred thousand francs. When Juliette returned, he bought it for two hundred thousand francs, pocketing one hundred thousand francs profit without investing his own capital.',
        stepMarking: [{ step: 'Selling to Mrs. Al Smith for 300,000 and buying from Juliette for 200,000 explained', marks: '2 Marks' }],
        examinerTip: 'Show calculation: 300,000 - 200,000 = 100,000 francs profit.',
        commonPitfall: 'Confusing 300,000 with net profit.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 3: LONG ANSWER QUESTION (6 MARKS) [Q49]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-comm-25-q49',
        qNum: 49,
        section: 'D',
        marks: 6,
        topic: 'Literature: Long Answer Question from Literature Reader (Word Limit: 120 Words)',
        questionText: `Answer ANY ONE of the following long answer questions from the LITERATURE READER in about 120 words (6 Marks):

OPTION A (How I Taught My Grandmother to Read):
"For learning there is no age bar." Elucidate how Krishtakka’s single-minded devotion, humility, and determination prove that age, domestic responsibilities, and past deprivation can never deter a willing student from achieving literacy.

OR

OPTION B (Villa for Sale):
Draw a character sketch of Gaston in Sacha Guitry’s satirical play "Villa for Sale". Analyze how his initial apathy transforms into razor-sharp opportunism, illustrating his cynical wit and superior business acumen.`,
        modelAnswer: `OPTION A: Willpower Transcends Age in Education
Sudha Murthy’s "How I Taught My Grandmother to Read" is an inspiring testament to the truth that education is bounded by willpower, not chronology. At sixty-two, burdened with domestic duties and grandchildren, Krishtakka could have passively accepted her illiteracy as an unalterable fate. However, the acute realization of her helplessness when she could not read 'Kashi Yatre' ignited an unquenchable desire for self-reliance. Setting the auspicious deadline of Saraswati Pooja Day, she approached learning with solemn dedication. She repeated the Kannada alphabet tirelessly, completed homework diligently, and showed no hesitation in being instructed by her twelve-year-old granddaughter. When she bowed to touch her young tutor’s feet, declaring that she revered the teacher within the child, she exemplified sublime humility. Krishtakka proves that genuine desire, discipline, and humility can dismantle any barrier in the quest for knowledge.

─────────────────────────────────────────────────────────────
OR
OPTION B: Gaston: The Quintessential Opportunist
In Sacha Guitry’s sparkling satire "Villa for Sale", Gaston emerges as an unabashedly cynical, shrewd, and razor-sharp businessman. Initially, he accompanies his wife Jeanne with visible contempt, bluntly refusing to invest in a villa for her extended family and ridiculing Juliette’s overpriced property. However, the moment the wealthy American filmmaker Mrs. Al Smith mistakes him for the proprietor, Gaston’s financial instincts ignite. With astonishing presence of mind and theatrical flair, he effortlessly assumes the persona of a sentimental homeowner, extracts three hundred thousand francs from Mrs. Al Smith, and immediately secures the deed from Juliette for two hundred thousand francs. Without putting up a single sou of his own capital, he nets a staggering profit of one hundred thousand francs and walks away with a signed Carot painting. Gaston’s quick wit, manipulative charm, and merciless opportunism make him the ultimate comic victor of the play.`,
        stepMarking: [
          { step: 'Thematic Depth & Character Mastery (Comprehensive evaluation of prompts)', marks: '3 Marks' },
          { step: 'Structure & Coherence (Compelling intro, structured argument, insightful conclusion)', marks: '1.5 Marks' },
          { step: 'Expression & Vocabulary (Literary fluency, grammatical precision, ~120 words)', marks: '1.5 Marks' }
        ],
        examinerTip: 'In Option A, highlight Krishtakka’s dual virtues of determination and humility. In Option B, balance Gaston’s greed with his undeniable wit and presence of mind.',
        commonPitfall: 'Failing to mention the core philosophical conclusion or exceeding the 120-word limit.'
      }
    ]
  }
];
