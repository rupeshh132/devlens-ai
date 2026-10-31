const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000005';
const VIDEO_ID = '2anxgj0TUgQ';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 6899;

const topicsData = [
  {
    title: 'Intro',
    start: 0,
    end: 161,
    description: 'Chapter roadmap and introduction to Life Processes.'
  },
  {
    title: 'Nutrition & its types',
    start: 161,
    end: 714,
    description: 'Definition of nutrition, autotrophic vs heterotrophic modes (holozoic, saprophytic, parasitic).'
  },
  {
    title: 'Photosynthesis',
    start: 714,
    end: 1218,
    description: 'Site of photosynthesis (chloroplasts), 3 key events: light absorption, water photolysis, and CO2 reduction; Stomata guard cells action.'
  },
  {
    title: 'Nutrition in Amoeba & Paramecium',
    start: 1218,
    end: 1504,
    description: 'Phagocytosis using pseudopodia, food vacuole digestion in Amoeba, and cilia movement in Paramecium.'
  },
  {
    title: 'Nutrition in humans',
    start: 1504,
    end: 2415,
    description: 'Human alimentary canal: buccal cavity (salivary amylase), stomach (pepsin, HCl, mucus), small intestine (bile, pancreatic trypsin/lipase), villi absorption, and large intestine.'
  },
  {
    title: 'Respiration',
    start: 2415,
    end: 2930,
    description: 'Breakdown of glucose: Glycolysis to pyruvate in cytoplasm, anaerobic pathways (yeast ethanol, muscle lactic acid) and aerobic respiration in mitochondria.'
  },
  {
    title: 'Human Respiratory system',
    start: 2930,
    end: 3460,
    description: 'Nostrils, pharynx, larynx, trachea (cartilaginous rings), bronchi, alveoli large surface area, diaphragm movement, and haemoglobin oxygen transport.'
  },
  {
    title: 'Respiration in Plants',
    start: 3460,
    end: 3645,
    description: 'Diffusion of O2 and CO2 through stomata and lenticels, daytime vs night-time gas exchange direction.'
  },
  {
    title: 'Transportation',
    start: 3645,
    end: 3812,
    description: 'Need for a circulatory system to transport nutrients, respiratory gases, and metabolic wastes.'
  },
  {
    title: 'Blood',
    start: 3812,
    end: 4189,
    description: 'Components of blood: Plasma, RBCs (haemoglobin), WBCs, Platelets (blood clotting), and Blood vessels (arteries vs veins vs capillaries).'
  },
  {
    title: 'Human Heart',
    start: 4189,
    end: 5192,
    description: 'Internal structure of 4-chambered heart (atria & ventricles), valves preventing backflow, pulmonary and systemic double circulation, and blood pressure (systolic/diastolic).'
  },
  {
    title: 'Lymphatic system',
    start: 5192,
    end: 5462,
    description: 'Formation of lymph / tissue fluid, composition, transport of digested fats, drainage into larger veins, and immune defence.'
  },
  {
    title: 'Transportation in Plants',
    start: 5462,
    end: 5853,
    description: 'Xylem transport of water & minerals (transpiration pull, root pressure) and Phloem translocation of food/sucrose using ATP.'
  },
  {
    title: 'Excretion',
    start: 5853,
    end: 6066,
    description: 'Metabolic waste removal, overview of human excretory system: pair of kidneys, ureters, urinary bladder, and urethra.'
  },
  {
    title: 'Nephron',
    start: 6066,
    end: 6554,
    description: 'Structure of a nephron: Bowman\'s capsule, Glomerulus (ultrafiltration), tubular part (selective reabsorption of glucose, amino acids, salts, water), and collecting duct.'
  },
  {
    title: 'Hemodialysis',
    start: 6554,
    end: 6625,
    description: 'Artificial kidney principles, dialysing fluid without nitrogenous waste, semi-permeable cellophane tubes, and clinical significance.'
  },
  {
    title: 'Excretion in Plants',
    start: 6625,
    end: TOTAL_DURATION,
    description: 'Loss of excess water through transpiration, oxygen and carbon dioxide by diffusion, storage in dead cells/fallen leaves, and gums/resins in old xylem.'
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
  console.log('Populating Class 10 Science Chapter 5: Life Processes');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 5
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

  console.log('\n🎉 Chapter 5 populated successfully with 17 topics and video segments!');
}

main().catch(console.error);
