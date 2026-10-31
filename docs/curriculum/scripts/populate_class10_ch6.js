const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000006';
const VIDEO_ID = '2SvKmS99xhM';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 6418;

const topicsData = [
  {
    title: 'Intro & Concept of Coordination',
    start: 0,
    end: 187,
    description: 'Chapter roadmap, teacher intro, and the definition of coordination in living organisms.'
  },
  {
    title: 'Coordination in Animals: Stimulus, Receptors & Effectors',
    start: 187,
    end: 808,
    description: 'Nervous vs Endocrine systems, Stimulus definition, Sense receptors (photoreceptors, phonoreceptors, olfactory, gustatory, thermoreceptors), and Effectors (muscles and glands).'
  },
  {
    title: 'Structure & Parts of a Neuron (Dendrite, Cyton, Axon)',
    start: 808,
    end: 1265,
    description: 'Neuron morphology: Cyton / Cell body, Dendrites (receiving signals), Axon (impulse transmission), and Myelin sheath insulation.'
  },
  {
    title: 'Synapse Mechanism & Neuromuscular Junction',
    start: 1265,
    end: 1565,
    description: 'Conversion of electrical impulse to chemical neurotransmitters across the synaptic cleft, and Neuromuscular junction mechanism.'
  },
  {
    title: 'Types of Neurons & Practice Questions',
    start: 1565,
    end: 2015,
    description: 'Sensory, motor, and relay neurons, and Board exam PYQs on neuron transmission and diagrams.'
  },
  {
    title: 'Types of Actions: Voluntary vs Involuntary Actions',
    start: 2015,
    end: 2190,
    description: 'Comparison table: Voluntary vs Involuntary vs Reflex actions with biological examples.'
  },
  {
    title: 'Reflex Action & Reflex Arc (Components & Mechanism)',
    start: 2190,
    end: 2632,
    description: 'Definition of reflex action, Reflex Arc (Receptor -> Sensory neuron -> Spinal cord -> Motor neuron -> Effector), hot pan experiment, and evolutionary importance.'
  },
  {
    title: 'Human Brain: Forebrain, Midbrain & Hindbrain',
    start: 2632,
    end: 3136,
    description: 'Forebrain (Cerebrum, Thalamus, Hypothalamus), Midbrain (sensory reflex relays), and Hindbrain (Cerebellum balance/posture, Pons, Medulla Oblongata vital involuntary controls).'
  },
  {
    title: 'Protection of Brain (Cranium, Meninges, CSF) & Spinal Cord',
    start: 3136,
    end: 3485,
    description: 'Protective bony cranium, three meninges layers, shock-absorbing Cerebrospinal Fluid (CSF), vertebral column protecting spinal cord, and Brain practice questions.'
  },
  {
    title: 'Endocrine Glands: Pituitary, Thyroid & Parathyroid',
    start: 3485,
    end: 4040,
    description: 'Exocrine vs Endocrine glands, Hormones as chemical messengers, Pituitary gland (Growth hormone, dwarfism, gigantism), Thyroid gland (Thyroxine, iodine, Goitre), and Parathyroid.'
  },
  {
    title: 'Pancreas (Insulin), Adrenal Gland (Adrenaline) & Gonads',
    start: 4040,
    end: 4465,
    description: 'Pancreas (Insulin regulation of blood glucose, Diabetes), Adrenal glands (Adrenaline emergency / fight-or-flight hormone), Testes (Testosterone), and Ovaries (Estrogen & Progesterone).'
  },
  {
    title: 'Feedback Mechanism & Need for Chemical Coordination',
    start: 4465,
    end: 4919,
    description: 'Negative feedback mechanism of insulin secretion, Limitations of electrical impulses, and why hormones are required for whole-body coordination.'
  },
  {
    title: 'Coordination in Plants: Nastic Movements (Touch-me-not)',
    start: 4919,
    end: 5107,
    description: 'How plant coordination differs from animals: lack of nervous system, turgor pressure changes in pulvini cells, and Thigmonasty in Mimosa pudica.'
  },
  {
    title: 'Tropic Movements in Plants (Phototropism, Geotropism, Chemotropism, Hydrotropism)',
    start: 5107,
    end: 5690,
    description: 'Growth-dependent directional movements: Phototropism (+ve shoot, -ve root), Geotropism (+ve root, -ve shoot), Chemotropism (pollen tube growth towards ovule), and Hydrotropism.'
  },
  {
    title: 'Tropisms vs Nastic Movements & Practice Questions',
    start: 5690,
    end: 5863,
    description: 'Comparison table (Directional vs Non-directional, Growth-dependent vs Independent) and Board examination case-study practice questions.'
  },
  {
    title: 'Plant Hormones (Auxins, Gibberellins, Cytokinins, ABA & Ethylene)',
    start: 5863,
    end: 6270,
    description: 'Auxin role in phototropism (shaded side cell elongation), Gibberellins (stem elongation), Cytokinins (cell division), Abscisic Acid (stress hormone, wilting), and Ethylene (fruit ripening).'
  },
  {
    title: 'Chapter Summary, Motivation & Outro',
    start: 6270,
    end: TOTAL_DURATION,
    description: 'Complete plant hormones summary table, Board exam revision tips, motivational conclusion, and chapter wrap-up.'
  }
];

function buildContentUrl(start, end, isLast) {
  if (start === 0) return `${BASE_URL}&end=${end}s`;
  if (isLast) return `${BASE_URL}&t=${start}s`;
  return `${BASE_URL}&t=${start}s&end=${end}s`;
}

function supabaseRequest(method, path, body, retries = 3) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'bwcjpfkzisxuskpxbpxp.supabase.co',
      path,
      method,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
      },
    };
    const req = https.request(options, (res) => {
      let chunks = '';
      res.on('data', d => chunks += d);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(chunks) }); }
        catch (e) { resolve({ status: res.statusCode, body: chunks }); }
      });
    });
    req.on('error', async (err) => {
      if (retries > 0) {
        console.log(`⚠️ Network error: ${err.message}. Retrying... (${retries} left)`);
        await new Promise(r => setTimeout(r, 1000));
        resolve(await supabaseRequest(method, path, body, retries - 1));
      } else {
        reject(err);
      }
    });
    if (data) req.write(data);
    req.end();
  });
}

async function main() {
  console.log('===============================================================');
  console.log('Populating Class 10 Science Chapter 6: Control and Coordination');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 6
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 17 topics and content items
  for (let i = 0; i < topicsData.length; i++) {
    const item = topicsData[i];
    const isLast = (i === topicsData.length - 1);
    const contentUrl = buildContentUrl(item.start, item.end, isLast);

    const topicRes = await supabaseRequest('POST', '/rest/v1/learn_topics', {
      chapter_id: CHAPTER_ID,
      title: item.title,
      description: item.description,
      order_index: i + 1,
      is_active: true,
    });

    if (topicRes.status !== 201 || !topicRes.body || !topicRes.body[0]) {
      console.error(`❌ Failed inserting topic "${item.title}":`, topicRes.body);
      process.exit(1);
    }

    const topicId = topicRes.body[0].id;

    const contentRes = await supabaseRequest('POST', '/rest/v1/learn_content_items', {
      topic_id: topicId,
      type: 'VIDEO',
      title: item.title,
      content_url: contentUrl,
      is_free: true,
      order_index: 1,
    });

    if (contentRes.status !== 201) {
      console.error(`❌ Failed inserting content item for "${item.title}":`, contentRes.body);
      process.exit(1);
    }

    console.log(`✅ [${i + 1}/${topicsData.length}] "${item.title}" (${item.start}s - ${item.end}s) -> ${contentUrl}`);
  }

  console.log('\n🎉 Chapter 6 populated successfully with 17 topics and video segments!');
}

main().catch(console.error);
