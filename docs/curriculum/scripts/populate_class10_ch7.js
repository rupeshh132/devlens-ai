const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000007';
const VIDEO_ID = 'RxXsUm8pwaA';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 6995;

const topicsData = [
  {
    title: 'Intro',
    start: 0,
    end: 79,
    description: 'Chapter roadmap and introduction to How do Organisms Reproduce.'
  },
  {
    title: 'What is Reproduction?',
    start: 79,
    end: 414,
    description: 'Definition of reproduction, biological significance in species continuity, and creation of body design blueprints.'
  },
  {
    title: 'DNA Copying and Variation',
    start: 414,
    end: 753,
    description: 'Cell division, DNA replication mechanism, cellular apparatus building, and inaccuracies causing genetic variations.'
  },
  {
    title: 'Importance of Variation',
    start: 753,
    end: 1000,
    description: 'Role of variations in niche adaptation, survival of species during drastic environmental changes, and natural selection.'
  },
  {
    title: 'Types of Reproduction: Asexual vs. Sexual',
    start: 1000,
    end: 1175,
    description: 'Comparison table: Single parent vs two parents, gamete involvement, variation levels, and rate of reproduction.'
  },
  {
    title: 'Asexual Reproduction Methods',
    start: 1175,
    end: 3341,
    description: 'Fission (binary in Amoeba, multiple in Plasmodium), Budding (Hydra & Yeast), Fragmentation (Spirogyra), Regeneration (Planaria), Spore formation (Rhizopus), and Vegetative Propagation (Bryophyllum, cutting, grafting, layering, tissue culture).'
  },
  {
    title: 'Sexual Reproduction',
    start: 3341,
    end: 3509,
    description: 'Need for sexual mode: Combining variations from two individuals, specialized germ-cells, and chromosome number maintenance.'
  },
  {
    title: 'Sexual Reproduction in Plants (Flowers)',
    start: 3509,
    end: 4728,
    description: 'Flower anatomy: Sepals, petals, stamen (anther + filament), pistil/carpel (stigma, style, ovary), self vs cross-pollination, pollen tube growth, and double fertilisation forming zygote and seed.'
  },
  {
    title: 'Human Reproduction & Puberty',
    start: 4728,
    end: 4978,
    description: 'Onset of adolescence and puberty, hormonal triggers, male secondary sexual traits, and female secondary sexual traits.'
  },
  {
    title: 'Male Reproductive System',
    start: 4978,
    end: 5430,
    description: 'Testes and scrotum (temperature regulation for sperm formation), vas deferens, prostate gland, seminal vesicles (semen nutrition and motility), urethra, and penis.'
  },
  {
    title: 'Female Reproductive System',
    start: 5430,
    end: 6174,
    description: 'Ovaries (egg release and estrogen/progesterone), fallopian tubes / oviducts (site of fertilisation), uterus, implantation of zygote, placenta structure and function, and gestation.'
  },
  {
    title: 'The Menstrual Cycle',
    start: 6174,
    end: 6428,
    description: 'What happens when the egg is not fertilised: Uterine lining breakdown, bleeding, cycle duration (28 days), and hormonal control.'
  },
  {
    title: 'Reproductive Health',
    start: 6428,
    end: TOTAL_DURATION,
    description: 'Family planning, contraceptive methods (barrier, hormonal pills, copper-T IUD, vasectomy & tubectomy surgical methods), STDs (bacterial: gonorrhea/syphilis, viral: warts/HIV-AIDS), and female foeticide.'
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
  console.log('Populating Class 10 Science Chapter 7: How do Organisms Reproduce?');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 7
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 13 topics and content items
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

  console.log('\n🎉 Chapter 7 populated successfully with 13 topics and video segments!');
}

main().catch(console.error);
