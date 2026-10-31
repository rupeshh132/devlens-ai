const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000002';
const VIDEO_ID = 'qKl4mieovu0';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 5302;

const topicsData = [
  {
    title: 'Intro',
    start: 0,
    end: 77,
    description: 'Chapter overview and roadmap for Acids, Bases and Salts.'
  },
  {
    title: 'Basics of Acids and Bases',
    start: 77,
    end: 468,
    description: 'General physical and taste properties, taste, touch, and furnishing of H+ and OH- ions.'
  },
  {
    title: 'Indicators',
    start: 468,
    end: 1279,
    description: 'Natural indicators (litmus, turmeric), synthetic indicators (phenolphthalein, methyl orange), and olfactory indicators.'
  },
  {
    title: 'Chemical Properties of Acids',
    start: 1279,
    end: 1521,
    description: 'Reaction of acids with active metals (H2 gas evolution and pop sound test), metal carbonates, and hydrogen carbonates.'
  },
  {
    title: 'Neutralisation Reaction',
    start: 1521,
    end: 1777,
    description: 'Reaction between an acid and a base forming salt and water, with mechanism and examples.'
  },
  {
    title: 'Chemical Properties of Bases',
    start: 1777,
    end: 2522,
    description: 'Reaction of bases with metals (zinc forming sodium zincate) and reaction with non-metallic oxides.'
  },
  {
    title: 'Strength of an Acid and Bases',
    start: 2522,
    end: 2687,
    description: 'Strong vs weak acids, degree of dissociation, and concentration of H+ vs OH- ions.'
  },
  {
    title: 'Universal Indicator & pH',
    start: 2687,
    end: 3463,
    description: 'Concept of pH scale (0 to 14), universal indicator colour chart, and importance of pH in daily life (digestive system, tooth decay, soil, self-defence by animals).'
  },
  {
    title: 'Salts Overview & Family of Salts',
    start: 3463,
    end: 3738,
    description: 'Classification of salts (acidic, basic, neutral salts), parent acid and base, and pH of salt solutions.'
  },
  {
    title: 'Common Salt (Sodium Chloride)',
    start: 3738,
    end: 3813,
    description: 'NaCl as a raw material for chemicals, sources, and fundamental role in chemical manufacturing.'
  },
  {
    title: 'Sodium Hydroxide (Chlor-Alkali Process)',
    start: 3813,
    end: 4247,
    description: 'Electrolysis of brine (Chlor-Alkali process), products at anode (Cl2), cathode (H2), and solution (NaOH), and their industrial uses.'
  },
  {
    title: 'Calcium Oxychloride (Bleaching Powder)',
    start: 4247,
    end: 4348,
    description: 'Preparation of CaOCl2 by action of Cl2 on dry slaked lime Ca(OH)2, properties, and bleaching/disinfecting uses.'
  },
  {
    title: 'Sodium Hydrogen Carbonate (Baking Soda)',
    start: 4348,
    end: 4728,
    description: 'Preparation of NaHCO3 (Solvay process intermediate), action of heat, baking powder composition, antacid and fire extinguisher uses.'
  },
  {
    title: 'Sodium Carbonate (Washing Soda)',
    start: 4728,
    end: 4867,
    description: 'Recrystallization of sodium carbonate Na2CO3·10H2O, water of crystallization, cleaning and permanent water softening uses.'
  },
  {
    title: 'Calcium Sulfate Hemihydrate (Plaster of Paris)',
    start: 4867,
    end: TOTAL_DURATION,
    description: 'Heating gypsum at 373K to obtain CaSO4·½H2O, setting mechanism with water back to gypsum, orthopedic and decorative uses.'
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
  console.log('Populating Class 10 Science Chapter 2: Acids, Bases and Salts');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 2
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

  console.log('\n🎉 Chapter 2 populated successfully with 15 topics and video segments!');
}

main().catch(console.error);
