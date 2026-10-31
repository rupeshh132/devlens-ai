const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000010';
const VIDEO_ID = 'VWNxgkOr55Y';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 4892;

const topicsData = [
  {
    title: 'Intro',
    start: 0,
    end: 86,
    description: 'Introduction to Chapter 10: The Human Eye and the Colourful World, chapter overview, and roadmap by Prashant Kirad.'
  },
  {
    title: 'Human Eye and Its Parts',
    start: 86,
    end: 920,
    description: 'Anatomy and structure of the human eye: Cornea, Iris, Pupil, Crystalline eye lens, Ciliary muscles, Retina, Rods and Cones, Optic nerve, Vitreous humor, Aqueous humor, Blind spot, and image formation on the retina.'
  },
  {
    title: 'Power of Accommodation',
    start: 920,
    end: 1282,
    description: 'Ability of the eye lens to adjust its focal length using ciliary muscles, focusing on near objects vs distant objects, near point of distinct vision (25 cm), and far point (infinity).'
  },
  {
    title: 'Defects of Vision and Their Correction',
    start: 1282,
    end: 2340,
    description: 'Causes, ray diagrams, and optical corrections of vision defects: Myopia (near-sightedness, corrected by concave lens), Hypermetropia (far-sightedness, corrected by convex lens), Presbyopia (old-age hypermetropia, corrected by bi-focal lenses), Cataract, and CBSE board questions.'
  },
  {
    title: 'Prism & Dispersion of Light',
    start: 2340,
    end: 3203,
    description: 'Refraction through a triangular glass prism, angle of prism (A), angle of deviation (D), dispersion of white light into spectrum (VIBGYOR), differing wavelengths/speeds of colours, and Newton’s recombination experiment using an inverted prism.'
  },
  {
    title: 'Rainbow Formation',
    start: 3203,
    end: 3544,
    description: 'Natural dispersion of sunlight by spherical raindrops in the atmosphere, conditions to observe a rainbow, refraction, dispersion, and internal reflection at raindrop interfaces.'
  },
  {
    title: 'Atmospheric Refraction and Its Effects',
    start: 3544,
    end: 3973,
    description: 'Atmospheric refraction due to varying optical density and temperature gradients of air layers: Twinkling of stars, why planets do not twinkle, advanced sunrise (by 2 minutes), and delayed sunset (by 2 minutes).'
  },
  {
    title: 'Scattering of Light & Colourful Phenomena',
    start: 3973,
    end: TOTAL_DURATION,
    description: 'Scattering of light, Tyndall effect, particle size vs wavelength dependence (Rayleigh scattering), blue colour of the clear sky, reddish appearance of the Sun at sunrise and sunset, danger signal lights in red colour, board PYQs, and chapter conclusion.'
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
  console.log('Populating Class 10 Science Chapter 10: The Human Eye and the Colourful World');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 10
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 8 topics and content items
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

  console.log('\n🎉 Chapter 10 populated successfully with 8 continuous topics and video segments!');
}

main().catch(console.error);
