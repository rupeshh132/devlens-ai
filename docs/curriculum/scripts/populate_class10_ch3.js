const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000003';
const VIDEO_ID = 'YV1BFWi-AWY';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 6255;

const topicsData = [
  {
    title: 'Introduction & Chapter Road Map',
    start: 0,
    end: 60,
    description: 'Teacher introduction, chapter overview, weightage, and learning goals.'
  },
  {
    title: 'Classification of Elements: Metals vs Non-Metals Overview',
    start: 60,
    end: 140,
    description: 'Basic definition, electropositive vs electronegative nature, flowchart of elements.'
  },
  {
    title: 'Physical Properties of Metals & Notable Exceptions',
    start: 140,
    end: 390,
    description: 'Metallic lustre, hardness, malleability, ductility, conductivity, sonorous nature. Exceptions: Na, K, Li, Hg, Ga, Cs, Pb.'
  },
  {
    title: 'Physical Properties of Non-Metals & Notable Exceptions',
    start: 390,
    end: 500,
    description: 'Physical states, lustre, conductivity. Exceptions: Bromine (liquid), Iodine (lustrous), Diamond, Graphite.'
  },
  {
    title: 'Applications & Board Questions on Physical Properties',
    start: 500,
    end: 700,
    description: 'Reasoning questions: School bells, Al foil, PVC wire insulation, gold/silver jewellery, and Board MCQs.'
  },
  {
    title: 'The Reactivity Series of Metals',
    start: 700,
    end: 790,
    description: 'Decreasing reactivity order (K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au) and mnemonics.'
  },
  {
    title: 'Chemical Properties of Metals: Reaction with Oxygen',
    start: 790,
    end: 990,
    description: 'Formation of basic metal oxides, reaction vigour (Na/K in kerosene, Mg ribbon, Al protective oxide, Cu black coating).'
  },
  {
    title: 'Amphoteric Oxides & Board Practice Questions',
    start: 990,
    end: 1240,
    description: 'Definition, reactions of Al2O3 and ZnO with both acids (HCl) and bases (NaOH forming aluminate/zincate salts).'
  },
  {
    title: 'Chemical Properties of Metals: Reaction with Water & Steam',
    start: 1240,
    end: 1720,
    description: 'Cold water (Na, K, Ca), hot water (Mg), steam (Al, Fe, Zn), unreactive metals, and NCERT steam apparatus experiment.'
  },
  {
    title: 'Chemical Properties of Metals: Reaction with Dilute Acids & Nitric Acid',
    start: 1720,
    end: 2000,
    description: 'Reaction with dilute HCl/H2SO4, HNO3 oxidising exception, and dilute HNO3 reaction with Mg and Mn.'
  },
  {
    title: 'Aqua Regia & Board Practice Questions on Acids',
    start: 2000,
    end: 2190,
    description: 'Composition (3:1 conc. HCl : HNO3), noble metal solvent (Au, Pt), and board reasoning questions.'
  },
  {
    title: 'Displacement Reactions with Metal Salt Solutions & Board Questions',
    start: 2190,
    end: 2590,
    description: 'Fe in CuSO4 displacement, color transitions, and solving 4-metal reactivity matrix table problems.'
  },
  {
    title: 'Chemical Properties of Non-Metals (Oxides & Acid/Water Reactions)',
    start: 2590,
    end: 2670,
    description: 'Acidic oxides (CO2, SO2), neutral oxides (CO, H2O, N2O), and why non-metals cannot displace hydrogen.'
  },
  {
    title: 'Electronic Configuration & Octet Rule (Cause of Reactivity)',
    start: 2670,
    end: 2860,
    description: 'K, L, M, N shell configurations of noble gases, metals, non-metals, and the octet stability drive.'
  },
  {
    title: 'How Do Metals and Non-Metals React: Ionic / Electrovalent Bond',
    start: 2860,
    end: 2980,
    description: 'Cation formation by electron loss, anion formation by electron gain, and electrostatic ionic bonding.'
  },
  {
    title: 'Electron Dot Structures & Formation of Ionic Compounds',
    start: 2980,
    end: 3270,
    description: 'Lewis dot structures and step-by-step electron transfer for NaCl, MgCl2, and Na2O.'
  },
  {
    title: 'Board Practice Questions on Ionic Bonds & Lewis Structures',
    start: 3270,
    end: 3450,
    description: 'Formation of MgO, identifying ionic vs covalent compounds, electron transfer in CaCl2, and formula derivation.'
  },
  {
    title: 'Properties of Ionic Compounds & Board Questions',
    start: 3450,
    end: 3720,
    description: 'Physical nature, high MP/BP, solubility in water vs organic solvents, and electrical conductivity.'
  },
  {
    title: 'Occurrence of Metals: Minerals, Ores, Gangue & Metallurgy Steps',
    start: 3720,
    end: 4150,
    description: 'Definitions of mineral, ore, gangue, metallurgy overview, and reactivity-based extraction roadmap.'
  },
  {
    title: 'Extraction of Low Reactivity Metals (Mercury & Copper)',
    start: 4150,
    end: 4450,
    description: 'Thermal reduction of Cinnabar (HgS) and auto-reduction of Copper Glance (Cu2S).'
  },
  {
    title: 'Extraction of Medium Reactivity Metals: Roasting vs Calcination',
    start: 4450,
    end: 4620,
    description: 'Roasting of sulphide ores (ZnS) vs Calcination of carbonate ores (ZnCO3) and comparative chemical equations.'
  },
  {
    title: 'Reduction of Metal Oxides & Thermite Reaction',
    start: 4620,
    end: 4940,
    description: 'Carbon reduction, metal displacement reduction, and highly exothermic Thermite reaction for railway welding.'
  },
  {
    title: 'Extraction of High Reactivity Metals: Electrolytic Reduction',
    start: 4940,
    end: 5220,
    description: 'Why carbon reduction fails, electrolysis of molten NaCl (cathode and anode reactions).'
  },
  {
    title: 'Refining of Metals: Electrolytic Refining of Copper & Anode Mud',
    start: 5220,
    end: 5540,
    description: 'Electrolytic refining tank setup: impure copper anode, pure copper cathode, electrolyte, and anode mud (Ag, Au).'
  },
  {
    title: 'Corrosion of Metals & Rusting Conditions (Activity 3.14)',
    start: 5540,
    end: 5730,
    description: 'Formula of rust, 3-test-tube experiment (air + moisture requirement), tarnishing of silver and green patina on copper.'
  },
  {
    title: 'Methods of Rust Prevention & Galvanisation',
    start: 5730,
    end: 5900,
    description: 'Barrier methods (painting, oiling), Galvanisation (zinc sacrificial protection), and chrome plating.'
  },
  {
    title: 'Alloying: Properties & Important Alloys',
    start: 5900,
    end: 6160,
    description: 'Definition, modified properties, Brass, Bronze, Steel, Stainless Steel, Solder, Amalgams, and 22-carat gold.'
  },
  {
    title: 'Chapter Summary, Motivational Quote & Outro',
    start: 6160,
    end: TOTAL_DURATION,
    description: 'Concluding motivational message, chapter review, examination tips, and sign-off.'
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
  console.log('Populating Class 10 Science Chapter 3: Metals and Non-Metals');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 3
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 28 topics and content items
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

  console.log('\n🎉 Chapter 3 populated successfully with 28 topics and video segments!');
}

main().catch(console.error);
