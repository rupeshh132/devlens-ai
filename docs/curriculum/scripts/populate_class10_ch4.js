const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000004';
const VIDEO_ID = '7pGHWkSRFU4';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 7158;

const topicsData = [
  {
    title: 'Intro',
    start: 0,
    end: 66,
    description: 'Chapter roadmap and introduction to Carbon and its Compounds.'
  },
  {
    title: 'What is Carbon',
    start: 66,
    end: 323,
    description: 'Atomic structure, abundance in Earth crust and atmosphere, and importance in daily life.'
  },
  {
    title: 'Covalent Bond',
    start: 323,
    end: 675,
    description: 'Why carbon cannot form C4+ or C4- ions, sharing of electrons, single, double and triple covalent bonds.'
  },
  {
    title: 'Versatile Nature of Carbon',
    start: 675,
    end: 969,
    description: 'Two characteristic properties: Catenation (self-linking) and Tetravalency.'
  },
  {
    title: 'Allotropes of Carbon',
    start: 969,
    end: 1313,
    description: 'Diamond (tetrahedral, hardest), Graphite (hexagonal layers, conductor), and Buckminsterfullerene (C-60).'
  },
  {
    title: 'Types of Carbon',
    start: 1313,
    end: 1833,
    description: 'Classification into saturated hydrocarbons (alkanes) and unsaturated hydrocarbons (alkenes & alkynes).'
  },
  {
    title: 'Carbon Chains',
    start: 1833,
    end: 2260,
    description: 'Straight chains, branched chains, and closed rings (cyclic hydrocarbons like cyclohexane and benzene).'
  },
  {
    title: 'IUPAC Nomenclature',
    start: 2260,
    end: 3630,
    description: 'Root words (meth, eth, prop...), suffixes (-ane, -ene, -yne), and naming compounds with functional groups (halo, alcohol, aldehyde, ketone, carboxylic acid).'
  },
  {
    title: 'Homologous Series',
    start: 3630,
    end: 4092,
    description: 'Definition, characteristics: gradation in physical properties, same chemical properties, -CH2- difference and 14u mass difference.'
  },
  {
    title: 'Isomers',
    start: 4092,
    end: 4422,
    description: 'Structural isomerism in hydrocarbons: butane (n-butane, isobutane) and pentane isomers.'
  },
  {
    title: 'Lewis Dot Structure',
    start: 4422,
    end: 4749,
    description: 'Step-by-step electron sharing diagrams for H2, Cl2, O2, N2, CH4, CO2, H2O, NH3, and C2H4.'
  },
  {
    title: 'Chemical Properties of Carbon Compounds',
    start: 4749,
    end: 5420,
    description: 'Combustion (clean vs sooty flame), Oxidation (alkaline KMnO4 / acidified K2Cr2O7), Addition reaction (hydrogenation with Ni), and Substitution reaction (chlorination in sunlight).'
  },
  {
    title: 'Ethanol',
    start: 5420,
    end: 5970,
    description: 'Physical properties, reaction with sodium metal, and dehydration reaction with conc. H2SO4 to form ethene.'
  },
  {
    title: 'Ethanoic Acid',
    start: 5970,
    end: 6656,
    description: 'Properties of acetic acid, Esterification reaction (sweet-smelling ester), Saponification, and reaction with carbonates/hydrogen carbonates.'
  },
  {
    title: 'Soaps & Detergents',
    start: 6656,
    end: TOTAL_DURATION,
    description: 'Structure of soap molecules (hydrophilic head & hydrophobic tail), Micelle formation, mechanism of cleansing action, and why detergents work in hard water.'
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
  console.log('Populating Class 10 Science Chapter 4: Carbon and its Compounds');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 4
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

  console.log('\n🎉 Chapter 4 populated successfully with 15 topics and video segments!');
}

main().catch(console.error);
