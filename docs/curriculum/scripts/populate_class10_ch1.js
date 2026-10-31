const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000001';
const VIDEO_ID = 'gQ-X9wV8TXQ';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 5784;

const topicsData = [
  {
    title: 'Introduction',
    start: 0,
    end: 117,
    description: 'Chapter overview and introduction to Chemical Reactions and Equations.'
  },
  {
    title: 'Classification of Change',
    start: 117,
    end: 475,
    description: 'Physical vs chemical changes, properties, and criteria for chemical transformation.'
  },
  {
    title: 'Chemical Reaction',
    start: 475,
    end: 699,
    description: 'Definition of chemical reactions, reactants, products, and real-life examples.'
  },
  {
    title: 'Presenting Chemical Reaction',
    start: 699,
    end: 966,
    description: 'Word equations and chemical formula representation.'
  },
  {
    title: 'Balancing of Chemical Reaction',
    start: 966,
    end: 1836,
    description: 'Law of conservation of mass, hit-and-trial method for balancing chemical equations.'
  },
  {
    title: 'Types of Chemical Reaction',
    start: 1836,
    end: 1906,
    description: 'Overview of major categories of chemical reactions.'
  },
  {
    title: 'Combination Reaction',
    start: 1906,
    end: 2642,
    description: 'Synthesis reactions: Action of water on quicklime, exothermic nature, and applications.'
  },
  {
    title: 'Decomposition Reaction',
    start: 2642,
    end: 3794,
    description: 'Thermal, electrolytic, and photolytic decomposition with heating of FeSO4, Pb(NO3)2, and AgCl.'
  },
  {
    title: 'Displacement Reaction',
    start: 3794,
    end: 4305,
    description: 'Single displacement reactions, reactivity series, iron nails in copper sulphate solution.'
  },
  {
    title: 'Double Displacement Reaction',
    start: 4305,
    end: 4669,
    description: 'Precipitation reactions and ion exchange between Na2SO4 and BaCl2.'
  },
  {
    title: 'Characteristics of Chemical Reaction',
    start: 4669,
    end: 4740,
    description: 'Key signs of reaction: colour change, temperature change, gas evolution, and precipitate formation.'
  },
  {
    title: 'Oxidation and Reduction',
    start: 4740,
    end: 4829,
    description: 'Gain and loss of oxygen and hydrogen in chemical processes.'
  },
  {
    title: 'Redox Reaction',
    start: 4829,
    end: 5247,
    description: 'Simultaneous oxidation and reduction, identifying oxidizing and reducing agents.'
  },
  {
    title: 'Corrosion',
    start: 5247,
    end: 5438,
    description: 'Rusting of iron, corrosion of copper and silver, conditions and prevention.'
  },
  {
    title: 'Rancidity',
    start: 5438,
    end: TOTAL_DURATION,
    description: 'Oxidation of fats and oils in food, effects, and methods of prevention (antioxidants, packaging).'
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
  console.log('Populating Class 10 Science Chapter 1: Chemical Reactions');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing empty topics for Chapter 1
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 15 topics and content items
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

  console.log('\n🎉 Chapter 1 populated successfully with 15 topics and video segments!');
}

main().catch(console.error);
