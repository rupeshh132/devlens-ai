import type { PyqPaper } from '../../components/learn/PyqPaperViewerModal';

export const CLASS_9_ENG_PAPERS: PyqPaper[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CBSE CLASS 9 ENGLISH LANGUAGE & LITERATURE ANNUAL EXAMINATION 2024
  // FULL-LENGTH PAPER: 46 DISTINCT QUESTIONS — 80 MARKS TOTAL
  // Strictly aligned with Official CBSE Code 184 Blueprint
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cbse-c9-eng-2024-annual',
    title: 'CBSE Class 9 English Language & Literature Annual Examination 2024 (Official Code 184)',
    subject: 'English',
    targetClass: 'Class 9',
    year: 2024,
    paperType: 'BOARD_EXAM',
    paperCode: 'CBSE/C9/ENG/184/24',
    totalMarks: 80,
    durationMins: 180,
    difficulty: 'MODERATE',
    isFree: true,
    totalQuestions: 46,
    generalInstructions: [
      '15-minute prior reading time allotted for reading the question paper only.',
      'The Question paper comprises 46 questions divided into three sections: Section A (Reading - Q1 to Q16: 20 Marks), Section B (Grammar & Creative Writing - Q17 to Q28: 20 Marks), and Section C (Literature - Q29 to Q46: 40 Marks). Total 80 Marks.',
      'All questions are compulsory. Internal choices are provided within writing and long answer questions.',
      'Adhere strictly to the prescribed word limits for all writing and literature questions.'
    ],
    questions: [
      // ══════════════════════════════════════════════════════════════════════════
      // SECTION A: READING SKILLS (20 MARKS)
      // PASSAGE 1: DISCURSIVE PASSAGE ON MINDFULNESS & SCREEN TIME [Q1 to Q8 - 10 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q1',
        qNum: 1,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `[Read the following excerpt from Passage 1:]
"In the hyper-connected digital landscape of the 21st century, attention has become the world's most contested currency. Adolescents today navigate a constant barrage of push notifications, algorithmically curated feeds, and instant messaging alerts. While the digital universe democratises knowledge and empowers global collaboration, excessive recreational screen exposure has begun to subtly dismantle cognitive stamina, sleep hygiene, and emotional well-being among school students."

Why does the author refer to human attention as "the world's most contested currency"?`,
        options: [
          'A) Because attention can be directly bought and traded in global financial stock markets',
          'B) Because digital platforms, social media, and advertisers compete aggressively to capture and monetize users\' time',
          'C) Because modern adolescents pay monthly subscription fees for digital attention',
          'D) Because attention is an ancient currency mentioned in classical economic history'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct. Attention is termed "the world\'s most contested currency" because tech giants, mobile apps, and advertisers relentlessly vie against each other to capture, monopolize, and monetize users\' limited conscious time and cognitive focus.',
        stepMarking: [
          { step: 'Selection of correct option (B) with accurate contextual rationale', marks: '1 Mark' }
        ],
        examinerTip: 'Notice the economic metaphor: "contested currency" signifies that user attention has commercial value to app developers.',
        commonPitfall: 'Confusing commercial competition for engagement with actual fiat currency.'
      },
      {
        id: 'c9-eng-24-q2',
        qNum: 2,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `[From Passage 1:]
"Neurological research demonstrates that habitual multi-tasking across digital devices fosters cognitive fragmentation. Rather than deeply processing complex textual narratives or engaging in sustained analytical reflection, young minds are conditioned for rapid, superficial skimming."

What adverse cognitive effect is caused by habitual multi-tasking across digital devices according to neurological research?`,
        modelAnswer: 'Habitual digital multi-tasking induces "cognitive fragmentation", conditioning young minds to engage in rapid, superficial skimming instead of sustained analytical reflection and deep textual comprehension.',
        stepMarking: [
          { step: 'Identification of "cognitive fragmentation" or superficial skimming over deep reflection', marks: '1 Mark' }
        ],
        examinerTip: 'Directly extract technical terminology such as "cognitive fragmentation" from paragraph 2.',
        commonPitfall: 'Writing generic answers like "students get distracted" without using the text\'s neurological term.'
      },
      {
        id: 'c9-eng-24-q3',
        qNum: 3,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `[From Passage 1:]
"This continuous state of partial attention diminishes memory consolidation and weakens neural pathways associated with creative contemplation."

Complete the sentence appropriately:
According to neurological research, a continuous state of partial attention weakens neural pathways linked with ________.`,
        options: [
          'A) rapid superficial skimming',
          'B) creative contemplation',
          'C) algorithmic data curation',
          'D) mechanical muscle reflexes'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: "creative contemplation". The text explicitly affirms that continuous partial attention diminishes memory consolidation and weakens neural pathways associated with creative contemplation.',
        stepMarking: [
          { step: 'Accurate text completion with option (B)', marks: '1 Mark' }
        ],
        examinerTip: 'In sentence completion items, verify exact word collocations from the provided passage.',
        commonPitfall: 'Selecting superficial skimming, which is the result rather than the weakened pathway.'
      },
      {
        id: 'c9-eng-24-q4',
        qNum: 4,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `[From Passage 1, Paragraph 3:]
"Mindfulness—the deliberate, non-judgemental awareness of the present moment—operates as a cognitive counterweight. Empirical studies across progressive school systems reveal that integrating ten minutes of daily breath awareness and conscious screen-free pauses significantly enhances concentration spans..."

Which phrase in paragraph 3 means "an opposing force that restores balance"?`,
        modelAnswer: 'The phrase is "cognitive counterweight".',
        stepMarking: [
          { step: 'Accurate vocabulary identification from paragraph 3', marks: '1 Mark' }
        ],
        examinerTip: 'A "counterweight" is literally an equivalent weight balancing another; here used metaphorically.',
        commonPitfall: 'Quoting entire long clauses rather than the exact two-word phrase.'
      },
      {
        id: 'c9-eng-24-q5',
        qNum: 5,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `[From Passage 1, Paragraph 4:]
"The objective is not technophobic retreat, but conscious technological sovereignty: empowering students to govern their tools rather than permitting algorithms to orchestrate their lives."

State whether the following assertion is True or False:
"The author advocates that students should completely reject all digital technology and retreat into isolated tech-free living."`,
        options: [
          'A) True — The author advises giving up all digital devices permanently',
          'B) False — The author explicitly states the objective is not a technophobic retreat, but conscious technological sovereignty'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: False. The author explicitly cautions that the goal is NOT a "technophobic retreat", but rather cultivating conscious self-control and mastery over digital tools.',
        stepMarking: [
          { step: 'Correct selection of False (Option B) with passage reference', marks: '1 Mark' }
        ],
        examinerTip: 'Look out for words like "not technophobic retreat" which directly contradict total rejection.',
        commonPitfall: 'Assuming the passage is purely anti-technology.'
      },
      {
        id: 'c9-eng-24-q6',
        qNum: 6,
        section: 'A',
        marks: 2,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `Explain in 30–40 words how daily mindfulness practices enhance students' academic performance as highlighted in paragraph 3 of the passage.`,
        modelAnswer: 'Daily mindfulness practices, such as ten minutes of conscious breath awareness and screen-free pauses, significantly lengthen attention spans, reduce situational exam anxiety, improve memory consolidation, and foster emotional resilience necessary for rigorous academic learning.',
        stepMarking: [
          { step: 'Mentioning 2 to 3 distinct academic/psychological benefits (attention, anxiety reduction, memory)', marks: '1.5 Marks' },
          { step: 'Grammatical clarity and adherence to the 30–40 word limit', marks: '0.5 Mark' }
        ],
        examinerTip: 'List concrete cognitive benefits cited in the text rather than giving philosophical definitions.',
        commonPitfall: 'Writing only one benefit and losing half a mark.'
      },
      {
        id: 'c9-eng-24-q7',
        qNum: 7,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `Identify the tone of the writer in the concluding paragraph of the passage:
"The objective is not technophobic retreat, but conscious technological sovereignty: empowering students to govern their tools rather than permitting algorithms to orchestrate their lives."`,
        options: [
          'A) Cynical and pessimistic',
          'B) Constructive and empowering',
          'C) Hostile and aggressive',
          'D) Indifferent and passive'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: Constructive and empowering. The author inspires students to develop proactive autonomy ("technological sovereignty") rather than surrendering helplessly to algorithms.',
        stepMarking: [
          { step: 'Correct identification of tone (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Words like "empowering" and "conscious sovereignty" point directly to an encouraging, constructive tone.',
        commonPitfall: 'Confusing serious criticism of algorithms with cynicism.'
      },
      {
        id: 'c9-eng-24-q8',
        qNum: 8,
        section: 'A',
        marks: 2,
        topic: 'Reading Comprehension: Mindfulness & Screen Time (Passage 1)',
        questionText: `What does the term "technological sovereignty" in paragraph 4 imply in the context of adolescent students? (Explain in 30–40 words)`,
        modelAnswer: '"Technological sovereignty" implies that students develop conscious self-mastery and agency over digital devices. Instead of being passive victims manipulated by algorithmic feeds and notifications, students actively decide when, why, and how to harness technology purposefully.',
        stepMarking: [
          { step: 'Explanation of user agency/self-mastery versus algorithmic manipulation', marks: '1.5 Marks' },
          { step: 'Cohesive sentence structure and conciseness', marks: '0.5 Mark' }
        ],
        examinerTip: '"Sovereignty" means self-rule or supreme authority; relate it to students governing their screen habits.',
        commonPitfall: 'Treating sovereignty as a political concept rather than personal digital independence.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PASSAGE 2: CASE-BASED FACTUAL PASSAGE ON RENEWABLE ENERGY [Q9 to Q16 - 10 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q9',
        qNum: 9,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `[Read the following factual excerpt from Passage 2:]
"India has emerged as a global frontrunner in renewable energy expansion, driven by ambitious national commitments made under the Paris Climate Agreement. According to Ministry of New and Renewable Energy (MNRE) data, India's total installed renewable capacity surpassed 180 Gigawatts (GW) by late 2023, representing over 42% of the country's cumulative power generation portfolio."

According to the MNRE data cited, what proportion of India's cumulative power generation capacity did renewable energy constitute by late 2023?`,
        options: [
          'A) Exactly 25%',
          'B) Approximately 33%',
          'C) Over 42%',
          'D) Nearly 60%'
        ],
        correctOption: 'C',
        modelAnswer: 'Option (C) is correct: Over 42%. The passage explicitly notes that installed renewable capacity reached 180 GW, representing over 42% of India\'s cumulative power generation portfolio.',
        stepMarking: [
          { step: 'Accurate factual extraction (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Always verify numerical statistics directly against the first paragraph of factual passages.',
        commonPitfall: 'Guessing 50% without referencing the official 42% metric in the text.'
      },
      {
        id: 'c9-eng-24-q10',
        qNum: 10,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `Mention two natural geographic endowments highlighted in paragraph 2 that give India a decisive competitive advantage in solar energy harvesting.`,
        modelAnswer: 'India is endowed with: (1) Approximately 300 sunny days annually, and (2) exceptionally high solar insolation across its geographical territory.',
        stepMarking: [
          { step: '0.5 Mark for 300 sunny days + 0.5 Mark for high solar insolation', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure both natural features are stated clearly.',
        commonPitfall: 'Mentioning land area instead of solar insolation and sunny days.'
      },
      {
        id: 'c9-eng-24-q11',
        qNum: 11,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `[From Passage 2:]
"Massive solar parks such as the Bhadla Solar Park in Rajasthan (occupying 14,000 acres with an installed capacity of 2,245 MW) stand as monumental engineering triumphs."

Which mega solar park is cited as a monumental engineering triumph in the passage, and where is it located?`,
        options: [
          'A) Pavagada Solar Park in Karnataka',
          'B) Bhadla Solar Park in Rajasthan',
          'C) Rewa Ultra Mega Solar in Madhya Pradesh',
          'D) Charanka Solar Park in Gujarat'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: Bhadla Solar Park in Rajasthan, which spans 14,000 acres with an installed capacity of 2,245 MW.',
        stepMarking: [
          { step: 'Accurate identification of park name and state (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Double-check spelling and state matching.',
        commonPitfall: 'Confusing Bhadla with Pavagada or Rewa.'
      },
      {
        id: 'c9-eng-24-q12',
        qNum: 12,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `Which peninsular coastal states are cited in the passage as the leading contributors to India's wind energy generation?`,
        modelAnswer: 'The peninsular coastal states leading wind energy generation are Tamil Nadu, Gujarat, and Maharashtra.',
        stepMarking: [
          { step: 'Naming Tamil Nadu, Gujarat, and Maharashtra correctly', marks: '1 Mark' }
        ],
        examinerTip: 'List all three states mentioned in paragraph 2.',
        commonPitfall: 'Writing non-coastal states like Punjab or Rajasthan.'
      },
      {
        id: 'c9-eng-24-q13',
        qNum: 13,
        section: 'A',
        marks: 2,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `Identify two major infrastructural and technical bottlenecks highlighted in paragraph 3 regarding the seamless integration of renewable energy into the national grid.`,
        modelAnswer: 'Two major bottlenecks are: (1) Integrating intermittent solar and wind generation into the transmission grid requires expensive Battery Energy Storage Systems (BESS) and smart-grid controls to prevent frequency destabilization during weather changes. (2) Expanding decentralized rooftop solar in tier-2 and tier-3 towns suffers from hurdles in consumer financing and a shortage of localized trained technicians.',
        stepMarking: [
          { step: '1 Mark for intermittency/storage challenge (BESS & smart grid)', marks: '1 Mark' },
          { step: '1 Mark for rooftop solar adoption hurdles (financing & trained manpower)', marks: '1 Mark' }
        ],
        examinerTip: 'Structure your answer with numbered points (1) and (2) for full marks.',
        commonPitfall: 'Writing only about cost without mentioning technical grid stability.'
      },
      {
        id: 'c9-eng-24-q14',
        qNum: 14,
        section: 'A',
        marks: 2,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `How does the transition toward renewable energy self-reliance safeguard India's national macro-economy according to paragraph 4? (Explain in 30–40 words)`,
        modelAnswer: 'Renewable energy self-reliance decouples GDP expansion from carbon emissions. Crucially, it buffers the domestic economy against volatile international fossil fuel price spikes and supply disruptions, conserving billions of dollars in foreign exchange reserves.',
        stepMarking: [
          { step: 'Decoupling GDP from carbon emissions', marks: '1 Mark' },
          { step: 'Shielding from import price shocks and saving foreign exchange reserves', marks: '1 Mark' }
        ],
        examinerTip: 'Mention both environmental decoupling and forex reserve preservation.',
        commonPitfall: 'Overlooking the foreign exchange savings aspect.'
      },
      {
        id: 'c9-eng-24-q15',
        qNum: 15,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `Complete the sentence:
In the context of modern renewable grid infrastructure mentioned in paragraph 3, the acronym "BESS" stands for ________.`,
        modelAnswer: 'Battery Energy Storage Systems.',
        stepMarking: [
          { step: 'Full and accurate expansion of BESS', marks: '1 Mark' }
        ],
        examinerTip: 'Be careful with exact plurals: "Systems" rather than System.',
        commonPitfall: 'Writing "Basic Energy Storage Source".'
      },
      {
        id: 'c9-eng-24-q16',
        qNum: 16,
        section: 'A',
        marks: 1,
        topic: 'Reading Comprehension: Renewable Energy in India (Passage 2)',
        questionText: `The word "decouples" in paragraph 4 ("decouples GDP growth from carbon emissions") most nearly means:`,
        options: [
          'A) Connects intimately',
          'B) Separates / dissociates',
          'C) Drastically escalates',
          'D) Substitutes entirely'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: Separates / dissociates. In economic and environmental terms, "decoupling" means breaking the link so that economic output grows while carbon emissions decline.',
        stepMarking: [
          { step: 'Correct vocabulary selection (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Prefix "de-" usually indicates undoing or separation.',
        commonPitfall: 'Assuming decouple means linking two items together.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION B: GRAMMAR & CREATIVE WRITING SKILLS (20 MARKS)
      // PART 1: INTEGRATED GRAMMAR [Q17 to Q26 - 10 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q17',
        qNum: 17,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Subject-Verb Concord',
        questionText: `Fill in the blank by choosing the correct auxiliary verb:
"Neither of the two candidates who applied for the prestigious research fellowship ________ selected by the screening committee."`,
        options: [
          'A) were',
          'B) was',
          'C) have been',
          'D) are'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: was. Rule: Distributive pronouns like "Neither of" and "Either of" refer to singular units one at a time and strictly take a singular verb.',
        stepMarking: [
          { step: 'Correct selection of singular past verb "was" (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Do not be distracted by the plural noun "candidates" following "of". The true subject is "Neither".',
        commonPitfall: 'Selecting "were" due to proximity to "candidates".'
      },
      {
        id: 'c9-eng-24-q18',
        qNum: 18,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Reported Speech',
        questionText: `Read the conversation between a doctor and a patient, and complete the reported statement:
Doctor: "Do you experience persistent headache after long study sessions?"
Patient: "Yes doctor, especially when reading in dim light."

The doctor enquired of the patient ________________________.`,
        modelAnswer: 'The doctor enquired of the patient whether (or if) he experienced persistent headache after long study sessions.',
        stepMarking: [
          { step: 'Correct conjunction (if/whether) + tense shift to simple past (experienced)', marks: '1 Mark' }
        ],
        examinerTip: 'Yes/No interrogative questions convert into indirect speech using "if" or "whether" with assertive word order.',
        commonPitfall: 'Keeping the auxiliary "did" in indirect speech (e.g., writing "if did he experience").'
      },
      {
        id: 'c9-eng-24-q19',
        qNum: 19,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Editing & Error Correction',
        questionText: `Identify the grammatical error in the following sentence and supply the correction:
"Each of the students in the chemistry laboratory have completed their titration experiment."

Format your answer as:
Error: ________ | Correction: ________`,
        modelAnswer: 'Error: have | Correction: has\n\nExplanation: The subject "Each of the students" is grammatically singular and requires the singular auxiliary verb "has", not "have".',
        stepMarking: [
          { step: '0.5 Mark for identifying error "have" + 0.5 Mark for supplying correction "has"', marks: '1 Mark' }
        ],
        examinerTip: 'Whenever "Each of" begins a clause, immediately inspect the accompanying finite verb.',
        commonPitfall: 'Changing "students" to "student" instead of fixing the verb.'
      },
      {
        id: 'c9-eng-24-q20',
        qNum: 20,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Modals of Obligation',
        questionText: `Fill in the blank with the appropriate modal verb expressing strict institutional necessity:
"You ________ submit your science investigatory project before Friday afternoon to be eligible for practical viva."`,
        options: [
          'A) might',
          'B) must',
          'C) could',
          'D) would'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: must. "Must" expresses binding obligation and non-negotiable institutional necessity.',
        stepMarking: [
          { step: 'Correct modal verb selection (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'When eligibility depends on a deadline, the compulsory modal "must" is required.',
        commonPitfall: 'Choosing "might", which conveys weak possibility rather than compulsion.'
      },
      {
        id: 'c9-eng-24-q21',
        qNum: 21,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Tenses (Future Perfect)',
        questionText: `Complete the sentence using the correct form of the verb given in brackets:
"By the time the annual sports meet begins next month, our school athletics team ________ (train) rigorously for six consecutive months."`,
        modelAnswer: 'will have been training (or: will have trained)',
        stepMarking: [
          { step: 'Correct future perfect or future perfect continuous form', marks: '1 Mark' }
        ],
        examinerTip: 'The time clause "By the time [present]... for six months" signals Future Perfect Continuous.',
        commonPitfall: 'Writing simple future "will train" or past continuous "was training".'
      },
      {
        id: 'c9-eng-24-q22',
        qNum: 22,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Reported Speech Dialogue',
        questionText: `Report the dialogue between a student and the school librarian:
Student: "Can I renew this encyclopedia for another week?"
Librarian: "I am afraid another student has already reserved it."

The student enquired if he could renew that encyclopedia for another week, to which the librarian replied that ________________________.`,
        modelAnswer: 'she/he was afraid another student had already reserved it.',
        stepMarking: [
          { step: 'Tense backshift ("am afraid" -> "was afraid", "has reserved" -> "had reserved")', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure both verbs backshift: present simple "am" -> past "was", and present perfect "has reserved" -> past perfect "had reserved".',
        commonPitfall: 'Forgetting to change "has already reserved" to "had already reserved".'
      },
      {
        id: 'c9-eng-24-q23',
        qNum: 23,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Determiners',
        questionText: `Fill in the blank with the appropriate determiner:
"There was ________ milk left in the refrigerator, so we couldn't prepare even a single cup of tea."`,
        options: [
          'A) little',
          'B) a little',
          'C) few',
          'D) a few'
        ],
        correctOption: 'A',
        modelAnswer: 'Option (A) is correct: little. "Little" indicates an almost negligible, insufficient quantity of an uncountable noun with a negative implication ("could not prepare tea").',
        stepMarking: [
          { step: 'Correct determiner selection (Option A)', marks: '1 Mark' }
        ],
        examinerTip: '"Little" has a negative sense (almost none), whereas "a little" means some (positive sense). "Few" is only for countable nouns.',
        commonPitfall: 'Selecting "few" for an uncountable noun like milk.'
      },
      {
        id: 'c9-eng-24-q24',
        qNum: 24,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Subject-Verb Agreement (Compound Noun)',
        questionText: `Select the correct option to fill in the blank:
"Bread and butter ________ his favourite breakfast for the last ten years."`,
        options: [
          'A) are',
          'B) is',
          'C) have been',
          'D) were'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: is. When two nouns joined by "and" express a single collective concept, dish, or unified idea (bread and butter as a breakfast combination), they take a singular verb.',
        stepMarking: [
          { step: 'Correct singular verb selection (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Classic compound pairs (bread and butter, slow and steady, time and tide) express a single unit.',
        commonPitfall: 'Assuming any compound joined by "and" automatically takes a plural verb.'
      },
      {
        id: 'c9-eng-24-q25',
        qNum: 25,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Error Correction (Parts of Speech)',
        questionText: `Identify the error and supply the correction for the sentence given below:
"He walked very quick to catch the morning school bus."

Format: Error: ________ | Correction: ________`,
        modelAnswer: 'Error: quick | Correction: quickly\n\nExplanation: The adjective "quick" cannot modify the action verb "walked"; an adverb of manner "quickly" is required.',
        stepMarking: [
          { step: '0.5 Mark for identifying "quick" + 0.5 Mark for correction "quickly"', marks: '1 Mark' }
        ],
        examinerTip: 'Adjectives modify nouns; adverbs modify verbs, adjectives, or other adverbs.',
        commonPitfall: 'Changing "walked" to "was walking" while leaving the adverb error untouched.'
      },
      {
        id: 'c9-eng-24-q26',
        qNum: 26,
        section: 'B',
        marks: 1,
        topic: 'Integrated Grammar: Reported Speech (Imperative)',
        questionText: `Transform the direct speech sentence into reported speech:
Mother said to Rohan, "Do not forget to switch off the computer before going to sleep."`,
        modelAnswer: 'Mother advised (or reminded / warned) Rohan not to forget to switch off the computer before going to sleep.',
        stepMarking: [
          { step: 'Appropriate reporting verb (advised/reminded/told) + infinitive "not to forget"', marks: '1 Mark' }
        ],
        examinerTip: 'Negative imperatives ("Do not...") convert into "not to + verb base".',
        commonPitfall: 'Writing "that he should not forgot" with incorrect tense structure.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 2: CREATIVE WRITING SKILLS [Q27 & Q28 - 10 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q27',
        qNum: 27,
        section: 'B',
        marks: 5,
        topic: 'Creative Writing: Descriptive Paragraph (Person / Event)',
        questionText: `Attempt ANY ONE of the following descriptive writing tasks in 100–120 words (5 Marks):

Option A (Describing a Person):
Write a descriptive paragraph about your grandmother, capturing her physical appearance, daily routine, warmth of character, and the moral values she has imparted to your family.

Option B (Describing an Event):
Write a descriptive paragraph detailing the annual "Science Exhibition & Innovation Fair" hosted at your school, describing the vibrant atmosphere, key robotic and ecological models exhibited by students, and the encouraging response from parents and judges.`,
        modelAnswer: `[OPTION A: MODEL DESCRIPTIVE PARAGRAPH - MY GRANDMOTHER]

With her silver-streaked hair neatly tucked into a simple cotton saree, my grandmother, aged seventy-two, is the quiet pillar of our home. Her face, etched with gentle wrinkles, radiates an enduring serenity that immediately puts everyone at ease. Rising before dawn, she begins her day with silent meditation, followed by tending her beloved courtyard tulsi plants. Despite her advancing years, her eyes sparkle with lively curiosity and kindness. Her hands, though weathered by decades of selfless labour, possess a comforting magic, whether she is kneading dough for our favourite parathas or gently soothing a troubled forehead. Above all, she is our moral compass: through bedtime folk tales and lived examples, she has instilled in us honesty, empathy for stray animals, and the dignity of humility. Her very presence fills our household with boundless warmth. (122 words)`,
        stepMarking: [
          { step: 'Format and Title (Appropriate single-paragraph structure with thematic cohesion)', marks: '1 Mark' },
          { step: 'Content (Sensory physical details, character traits, daily routine, moral legacy)', marks: '2 Marks' },
          { step: 'Expression (Rich evocative vocabulary, smooth transitions, grammatical accuracy)', marks: '2 Marks' }
        ],
        examinerTip: 'Incorporate vivid sensory details (silver-streaked hair, weathered hands, serene smile) rather than making bare statements.',
        commonPitfall: 'Writing in fragmented bullet points or exceeding the 120-word ceiling.'
      },
      {
        id: 'c9-eng-24-q28',
        qNum: 28,
        section: 'B',
        marks: 5,
        topic: 'Creative Writing: Diary Entry / Short Story',
        questionText: `Attempt ANY ONE of the following writing tasks in 100–120 words (5 Marks):

Option A (Diary Entry):
You recently participated in a plantation drive organized by your school's Eco-Club in a nearby municipal park. You planted five saplings with your classmates and interacted with elderly morning walkers. Make a diary entry recording your reflections, joy, and realization of environmental responsibility.

Option B (Short Story Writing):
Write a short story in 100–120 words based on the beginning prompt given below. Give a suitable title.
"It was past midnight when Aryan heard a frantic tapping on his bedroom window. Peering through the rain-lashed glass, he gasped at what he saw..."`,
        modelAnswer: `[OPTION A: MODEL DIARY ENTRY]

Date: 15 October 2024
Day: Tuesday
Time: 9:30 PM

Dear Diary,

Today was one of those rare, fulfilling days that leave your heart light and purposeful. Under our school Eco-Club's "Green Lungs Initiative", twenty of us gathered at the city's municipal park at 7:00 AM with saplings of neem, gulmohar, and peepal. Kneeling in the moist, earthy soil, my hands grew caked with mud, but planting five saplings gave me an inexplicable surge of joy. Several elderly morning walkers paused, smiled warmly, and one retired botanist showed us the precise technique to pack soil around tender roots. Watching our green saplings sway in the morning breeze felt like adopting five little lives that will outlive us, purifying the air for generations to come. I returned home determined to nurture them every weekend. Nature gives endlessly; it is our turn to give back.

Anmol (125 words)`,
        stepMarking: [
          { step: 'Format (Date, Day, Time, Salutation, Sign-off name)', marks: '1 Mark' },
          { step: 'Content (Personal emotional reflections, vivid recreation of plantation drive)', marks: '2 Marks' },
          { step: 'Expression (Intimate first-person reflective voice, correct tenses, vocabulary)', marks: '2 Marks' }
        ],
        examinerTip: 'Always include the four standard elements of format: Date, Day, Time, and Salutation.',
        commonPitfall: 'Writing a factual news report instead of an intimate, introspective diary entry.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // SECTION C: LITERATURE TEXTBOOK & SUPPLEMENTARY READER (40 MARKS)
      // PART 1: REFERENCE TO CONTEXT - PROSE [Q29 to Q33 - 5 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q29',
        qNum: 29,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Prose Extract): The Fun They Had by Isaac Asimov',
        questionText: `[Read the extract from Beehive given below:]
"Margie went into the schoolroom. It was right next to her bedroom, and the mechanical teacher was on and waiting for her. It was always on at the same time every day except Saturday and Sunday, because her mother said little girls learned better if they learned at regular hours.
The screen was lit up, and it said: 'Today’s arithmetic lesson is on the addition of proper fractions. Please insert yesterday’s homework in the proper slot.'
Margie did so with a sigh. She was thinking about the old schools they had when her grandfather’s grandfather was a little boy. All the kids from the whole neighbourhood came, laughing and shouting in the schoolyard, sitting together in the schoolroom, going home together at the end of the day."

Where was Margie's schoolroom located?`,
        options: [
          'A) In a grand community building across the street',
          'B) In a dedicated schoolhouse at the city center',
          'C) Right next to her bedroom inside her own house',
          'D) In a virtual hologram laboratory on the roof'
        ],
        correctOption: 'C',
        modelAnswer: 'Option (C) is correct: Margie\'s schoolroom was located right next to her bedroom inside her own house.',
        stepMarking: [
          { step: 'Correct textual factual location identified (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Asimov envisioned futuristic education as completely isolated home-based computer interaction.',
        commonPitfall: 'Assuming she travelled to a physical school campus.'
      },
      {
        id: 'c9-eng-24-q30',
        qNum: 30,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Prose Extract): The Fun They Had by Isaac Asimov',
        questionText: `Why was the mechanical teacher turned on at the exact same hour every day except weekends?`,
        modelAnswer: 'The mechanical teacher was programmed to turn on at regular hours because Margie\'s mother (Mrs. Jones) believed that young girls learned much better if they adhered to a fixed, regular study schedule.',
        stepMarking: [
          { step: 'Mother\'s belief in disciplined, regular learning hours stated accurately', marks: '1 Mark' }
        ],
        examinerTip: 'Directly reference the mother\'s educational philosophy stated in the text.',
        commonPitfall: 'Attributing the timing to the computer\'s automated timer without mentioning her mother.'
      },
      {
        id: 'c9-eng-24-q31',
        qNum: 31,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Prose Extract): The Fun They Had by Isaac Asimov',
        questionText: `What does Margie's action of inserting her homework into the slot "with a sigh" reveal about her attitude towards mechanical schooling?`,
        modelAnswer: 'Inserting homework "with a sigh" reveals Margie\'s deep sense of boredom, emotional fatigue, resentment, and profound lack of enthusiasm for the mechanical, impersonal computer screen.',
        stepMarking: [
          { step: 'Interpretation of sigh as boredom, discontent, or emotional exhaustion', marks: '1 Mark' }
        ],
        examinerTip: 'A "sigh" is an expressive physical gesture signaling disinterest and reluctant compliance.',
        commonPitfall: 'Merely repeating that she inserted homework without interpreting the psychological attitude.'
      },
      {
        id: 'c9-eng-24-q32',
        qNum: 32,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Prose Extract): The Fun They Had by Isaac Asimov',
        questionText: `Which social aspect of the ancient century-old school system fascinated Margie the most as she sat before the screen?`,
        modelAnswer: 'Margie was fascinated by the social camaraderie and human fellowship: children from the whole neighbourhood walking together, laughing and shouting in the schoolyard, studying the same lessons, and helping one another with homework.',
        stepMarking: [
          { step: 'Identification of collective human interaction, peer companionship, and mutual learning', marks: '1 Mark' }
        ],
        examinerTip: 'Contrast her isolation with the vibrant social life of the old school system.',
        commonPitfall: 'Focusing only on the paper books rather than the social human interaction.'
      },
      {
        id: 'c9-eng-24-q33',
        qNum: 33,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Prose Extract): The Fun They Had by Isaac Asimov',
        questionText: `Who is the author of this celebrated speculative science fiction story "The Fun They Had"?`,
        options: [
          'A) H.G. Wells',
          'B) Isaac Asimov',
          'C) Arthur C. Clarke',
          'D) Ray Bradbury'
        ],
        correctOption: 'B',
        modelAnswer: 'Option (B) is correct: Isaac Asimov.',
        stepMarking: [
          { step: 'Correct identification of author (Option B)', marks: '1 Mark' }
        ],
        examinerTip: 'Always memorize the author and poet names for all NCERT Beehive and Moments chapters.',
        commonPitfall: 'Confusing Isaac Asimov with Ray Bradbury.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 2: REFERENCE TO CONTEXT - POETRY [Q34 to Q38 - 5 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q34',
        qNum: 34,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Poetry Extract): The Road Not Taken by Robert Frost',
        questionText: `[Read the poetic extract from Beehive given below:]
"Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,"

What do the "two roads" metaphorically represent in human existence?`,
        modelAnswer: 'The two diverging roads symbolize the pivotal dilemmas, momentous choices, and alternative pathways that every human being must confront and choose between in life.',
        stepMarking: [
          { step: 'Clear metaphorical explanation: life choices/dilemmas', marks: '1 Mark' }
        ],
        examinerTip: 'Frost uses nature as an extended metaphor for moral and existential human decision-making.',
        commonPitfall: 'Interpreting the roads literally as physical asphalt or dirt paths.'
      },
      {
        id: 'c9-eng-24-q35',
        qNum: 35,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Poetry Extract): The Road Not Taken by Robert Frost',
        questionText: `What does the phrase "yellow wood" indicate regarding the season of nature and the stage of life?`,
        modelAnswer: '"Yellow wood" indicates the autumn season, when foliage turns golden-yellow and falls. Metaphorically, it suggests a mature, reflective stage of human life where crucial decisions must be made.',
        stepMarking: [
          { step: 'Identification of autumn season and/or maturity in life', marks: '1 Mark' }
        ],
        examinerTip: 'Yellow wood = autumn season (decaying leaves) + maturity of judgment.',
        commonPitfall: 'Saying yellow wood means the forest was filled with yellow flowers.'
      },
      {
        id: 'c9-eng-24-q36',
        qNum: 36,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Poetry Extract): The Road Not Taken by Robert Frost',
        questionText: `Why did the poet decide to choose the second road over the first in the second stanza?`,
        modelAnswer: 'The poet chose the second road because it appeared grassy, less frequented by the multitude, and "wanted wear" (needed someone to tread upon it), demonstrating his preference for an unconventional, independent journey.',
        stepMarking: [
          { step: 'Explanation of "grassy and wanted wear" / less travelled choice', marks: '1 Mark' }
        ],
        examinerTip: 'Quote the phrase "grassy and wanted wear" to substantiate your explanation.',
        commonPitfall: 'Stating that the second road was smoother or easier.'
      },
      {
        id: 'c9-eng-24-q37',
        qNum: 37,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Poetry Extract): The Road Not Taken by Robert Frost',
        questionText: `Identify the rhyme scheme employed across the stanzas of Robert Frost's "The Road Not Taken":
(wood - a, both - b, stood - a, could - a, undergrowth - b)`,
        options: [
          'A) AABB',
          'B) ABABC',
          'C) ABAAB',
          'D) ABBAA'
        ],
        correctOption: 'C',
        modelAnswer: 'Option (C) is correct: ABAAB (wood/stood/could rhyme as \'A\'; both/undergrowth rhyme as \'B\').',
        stepMarking: [
          { step: 'Correct identification of rhyme scheme (Option C)', marks: '1 Mark' }
        ],
        examinerTip: 'Map end-words carefully: wood (a), both (b), stood (a), could (a), undergrowth (b) = ABAAB.',
        commonPitfall: 'Mistaking the 5-line stanza for standard 4-line AABB or ABAB patterns.'
      },
      {
        id: 'c9-eng-24-q38',
        qNum: 38,
        section: 'C',
        marks: 1,
        topic: 'Beehive (Poetry Extract): The Road Not Taken by Robert Frost',
        questionText: `Mention the poetic device present in the phrase "grassy and wanted wear".`,
        modelAnswer: '1. Personification: The inanimate path is personified as having human desires ("wanted wear").\n2. Alliteration: Repetition of the consonant /w/ sound in "wanted wear". (Both are acceptable).',
        stepMarking: [
          { step: 'Accurate naming of Personification or Alliteration with brief rationale', marks: '1 Mark' }
        ],
        examinerTip: 'Either Personification or Alliteration earns full credit in CBSE evaluation.',
        commonPitfall: 'Calling it a simile when no "like" or "as" is present.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 3: BEEHIVE SHORT ANSWER QUESTIONS [Q39 to Q42 - 12 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q39',
        qNum: 39,
        section: 'C',
        marks: 3,
        topic: 'Beehive: The Sound of Music (Evelyn Glennie)',
        questionText: `How did Evelyn Glennie conquer her profound deafness to become a world-renowned solo percussionist? (Answer in 40–50 words)`,
        modelAnswer: 'Guided by percussionist Ron Forbes, Evelyn learned to perceive musical vibrations through her body rather than ears. She felt high frequencies in her upper torso and deep notes below her waist. Practicing barefoot on wooden platforms with relentless discipline, she bypassed auditory disability to achieve unprecedented international mastery.',
        stepMarking: [
          { step: 'Role of Ron Forbes and sensory perception through body vibrations', marks: '2 Marks' },
          { step: 'Clarity, word count adherence (40–50 words), grammatical precision', marks: '1 Mark' }
        ],
        examinerTip: 'Highlight the phrase "sensing music through parts of her body" and barefoot performance.',
        commonPitfall: 'Writing only that she was deaf without explaining HOW she sensed acoustic vibrations.'
      },
      {
        id: 'c9-eng-24-q40',
        qNum: 40,
        section: 'C',
        marks: 3,
        topic: 'Beehive: The Little Girl by Katherine Mansfield',
        questionText: `Why did Kezia dread her father initially, and what incident made her realize his tender, loving heart? (Answer in 40–50 words)`,
        modelAnswer: 'Kezia feared her father due to his towering physique, stern disciplinary voice, and severe punishment when she tore his speech papers for a birthday pincushion. However, when her mother was hospitalized and Kezia had a nightmare, her father lovingly cradled her in his arms, tucked her into his bed, and slept beside her, revealing his deep, weary paternal love.',
        stepMarking: [
          { step: 'Reasons for initial fear (harsh discipline, pincushion punishment)', marks: '1.5 Marks' },
          { step: 'Turning point incident (cradling her after nightmare when mother was ill)', marks: '1.5 Marks' }
        ],
        examinerTip: 'Balance both aspects: initial intimidation and the climatic emotional realization.',
        commonPitfall: 'Forgetting to explain the turning point incident.'
      },
      {
        id: 'c9-eng-24-q41',
        qNum: 41,
        section: 'C',
        marks: 3,
        topic: 'Beehive: The Sound of Music (Part II - Bismillah Khan)',
        questionText: `How did Ustad Bismillah Khan revolutionize the Shehnai from an accompaniment instrument into a classical concert powerhouse? (Answer in 40–50 words)`,
        modelAnswer: 'Bismillah Khan emancipated the Shehnai from the confines of royal naubat enclosures and wedding courtyards. Practicing solitude on the tranquil banks of the river Ganga, he invented and improvised ragas previously considered impossible on the reed instrument, ultimately greeting independent India from the historic Red Fort on 15 August 1947.',
        stepMarking: [
          { step: 'Elevation from temples/weddings to classical stage + Ganga inspiration', marks: '2 Marks' },
          { step: 'Red Fort performance & linguistic polish', marks: '1 Mark' }
        ],
        examinerTip: 'Mention the Ganga\'s influence on his improvisation of ragas.',
        commonPitfall: 'Confusing Bismillah Khan with the barber (nai) who originally improved the pungi.'
      },
      {
        id: 'c9-eng-24-q42',
        qNum: 42,
        section: 'C',
        marks: 3,
        topic: 'Beehive: Wind by Subramania Bharati',
        questionText: `What profound philosophical message does the poet Subramania Bharati convey to mankind through the poem "Wind"? (Answer in 40–50 words)`,
        modelAnswer: 'Subramania Bharati symbolizes the wind as life\'s harsh tribulations that crush weak structures and fragile spirits. He exhorts mankind to fortify their homes, build robust bodies, and nurture steadfast hearts. When we are internally resilient, adversity ceases to harm us and instead becomes a loyal ally that fans our inner strength.',
        stepMarking: [
          { step: 'Symbolism of wind as adversity destroying the weak', marks: '1.5 Marks' },
          { step: 'Exhortation to cultivate physical and mental fortitude', marks: '1.5 Marks' }
        ],
        examinerTip: 'Explain both the destructive and constructive dimensions of the wind.',
        commonPitfall: 'Describing wind only as a meteorological phenomenon rather than a life metaphor.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 4: MOMENTS SHORT ANSWER QUESTIONS [Q43 & Q44 - 6 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q43',
        qNum: 43,
        section: 'C',
        marks: 3,
        topic: 'Moments: The Lost Child by Mulk Raj Anand',
        questionText: `How did the child\'s behavior transform dramatically when he discovered he was separated from his parents at the fair? (Answer in 40–50 words)`,
        modelAnswer: 'In Mulk Raj Anand\'s story, the boy captivated by colourful toys, burfi, dragonflies, and balloons was suddenly gripped by hysterical panic upon losing his parents near the roundabout. Weeping disconsolately and rushing wildly through temple crowds, he rejected all worldly treats offered by a kindly rescuer, shrieking only: "I want my mother, I want my father!"',
        stepMarking: [
          { step: 'Contrast between earlier consumer desires and desperate longing for parents', marks: '2 Marks' },
          { step: 'Key quoted exclamation and emotional impact', marks: '1 Mark' }
        ],
        examinerTip: 'Quoting "I want my mother, I want my father!" is the hallmark of a top-scoring response.',
        commonPitfall: 'Listing the toys again without emphasizing the child\'s psychological despair.'
      },
      {
        id: 'c9-eng-24-q44',
        qNum: 44,
        section: 'C',
        marks: 3,
        topic: 'Moments: The Adventures of Toto by Ruskin Bond',
        questionText: `Why does the author describe Toto as an unaffordable and expensive pet for grandfather\'s middle-class household? (Answer in 40–50 words)`,
        modelAnswer: 'Toto was incorrigibly destructive: he shredded school blazers, tore expensive ornamental wallpaper, shattered grandmother\'s prized china dishes, ripped curtains, and nearly boiled himself alive. Grandfather\'s modest household could not absorb recurrent financial damages, compelling him to sell the monkey back to the tonga-driver at a net loss.',
        stepMarking: [
          { step: 'Examples of destruction (blazer, china, curtains, wallpaper)', marks: '2 Marks' },
          { step: 'Economic burden on middle-class budget leading to resale', marks: '1 Mark' }
        ],
        examinerTip: 'Focus on the economic incompatibility between middle-class life and Toto\'s vandalism.',
        commonPitfall: 'Simply writing "Toto was mischievous" without citing specific destructive acts.'
      },

      // ══════════════════════════════════════════════════════════════════════════
      // PART 5: LONG ANSWER QUESTIONS [Q45 & Q46 - 12 MARKS]
      // ══════════════════════════════════════════════════════════════════════════
      {
        id: 'c9-eng-24-q45',
        qNum: 45,
        section: 'C',
        marks: 6,
        topic: 'Beehive (Long Answer): Comparative Analysis of Mentorship & Schooling',
        questionText: `Answer ANY ONE of the following comparative analytical questions in 100–120 words (6 Marks):

Option A:
"A great educator does not merely teach a curriculum, but transforms the very trajectory of an atypical student's destiny."
Substantiate this statement in the context of Ron Forbes' intervention in Evelyn Glennie's musical journey (The Sound of Music) and contrast it with the Munich Headmaster's dismissive verdict on Albert Einstein's potential (A Truly Beautiful Mind).

Option B:
In the play "If I Were You", Gerrard outwits a ruthless, gun-wielding intruder without resorting to physical violence. Elucidate how nonchalance, presence of mind, and sharp wit serve as Gerrard's unassailable armor.`,
        modelAnswer: `[OPTION A: MODEL ESSAY]

Educators possess the momentous power to either liberate unconventional genius or stifle a developing intellect. When eleven-year-old Evelyn Glennie was certified profoundly deaf, conventional specialist teachers advised her mother to put her in a deaf school and fit hearing aids, writing off her musical prospects. It was master percussionist Ron Forbes who discerned her latent genius. Instead of communicating through auditory speech, he tuned two large drums to different pitches, telling her: "Don't listen through your ears; try to sense it some other way." This empathetic pedagogical insight unlocked Evelyn's physical sensory perception, liberating her to become a solo percussionist of unprecedented global stature.

Conversely, in "A Truly Beautiful Mind", young Albert Einstein's unimaginative headmaster told his father that whatever profession Albert chose, "he’ll never make a success at anything." The authoritarian German schooling stifled Albert's independent inquiries, prompting him to leave Munich. These contrasting scenarios prove that transformative educators like Ron Forbes empower unconventional minds to shatter barriers, whereas rigid schooling systems risk smothering world-changing intellects. (165 words)`,
        stepMarking: [
          { step: 'Content (In-depth comparative analysis of Ron Forbes and Einstein\'s headmaster)', marks: '3 Marks' },
          { step: 'Expression (Reflective, analytical prose, vocabulary, and smooth transitions)', marks: '2 Marks' },
          { step: 'Grammatical accuracy, structured paragraphs, and adherence to theme', marks: '1 Mark' }
        ],
        examinerTip: 'Ensure both literary texts are equally balanced in thematic comparison questions.',
        commonPitfall: 'Writing solely about Evelyn and forgetting Einstein entirely, which loses half the content marks.'
      },
      {
        id: 'c9-eng-24-q46',
        qNum: 46,
        section: 'C',
        marks: 6,
        topic: 'Moments (Long Answer): Moral Transformation & Value-Based Analysis',
        questionText: `Answer ANY ONE of the following value-based questions in 100–120 words (6 Marks):

Option A:
"Genuine compassion and quiet self-sacrifice can rehabilitate a fallen human soul where scolding and transactional charity fail."
Elucidate how Olga's selfless suffering redeemed the chronic alcoholic beggar Lushkoff in Anton Chekhov's story "The Beggar".

Option B:
In "In the Kingdom of Fools", the guru warns his greedy disciple: "They are all fools. This won't last very long, and you can't tell what they'll do to you next." How does wisdom, self-restraint, and presence of mind triumph over foolishness and blind greed?`,
        modelAnswer: `[OPTION A: MODEL ESSAY - THE BEGGAR]

Anton Chekhov's poignant masterpiece "The Beggar" illustrates that genuine moral redemption is cultivated through compassionate human sacrifice rather than pious moral lecturing. Sergei, the prosperous advocate, prided himself on setting Lushkoff on the path of honest labour by offering him wood-chopping chores. However, as Lushkoff reveals years later when working as a dignified notary earning 35 roubles a month, his true savior was Sergei's cook, Olga.

Whenever the shivering, intoxicated Lushkoff failed to raise the heavy axe, Olga would curse his wretched misery, weep bitter tears of grief for his wasted life, and quietly chop every single log of wood herself on his behalf. Watching a vulnerable woman suffer and labour for his sake shamed Lushkoff's conscience, awakening his buried dignity. Sergei provided the external opportunity, but it was Olga's selfless love and silent sacrifice that melted his hardened cynicism and brought about a profound spiritual transformation. (158 words)`,
        stepMarking: [
          { step: 'Content (Contrast between Sergei\'s transactional help and Olga\'s self-sacrificing compassion)', marks: '3 Marks' },
          { step: 'Expression (Eloquent vocabulary, insightful character analysis, emotional depth)', marks: '2 Marks' },
          { step: 'Grammatical cohesion, clarity, and structural balance', marks: '1 Mark' }
        ],
        examinerTip: 'Emphasize the climax revelation: Lushkoff explicitly acknowledges Olga chopped the wood and saved his soul.',
        commonPitfall: 'Crediting Sergei with the transformation while overlooking Olga\'s pivotal sacrifice.'
      }
    ]
  }
];
