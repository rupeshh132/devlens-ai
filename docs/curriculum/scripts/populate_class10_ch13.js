const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000013'; // Our Environment
const VIDEO_ID = 'fKZDHRTbu8Q';
const TOTAL_DURATION = 3595;
const BASE = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

// 16 zero-gap topics verified from visual storyboard frame analysis
const topicsData = [
  { title: "Introduction & Topics We'll Cover (Marks Weightage)",                                   start: 0,    end: 170  },
  { title: "Environment v/s Ecosystem",                                                             start: 170,  end: 420  },
  { title: "Types of Ecosystems: Natural v/s Artificial Ecosystems",                                start: 420,  end: 620  },
  { title: "Components of Ecosystem: Abiotic & Biotic Components",                                  start: 620,  end: 910  },
  { title: "Biotic Components: Categories of Consumers & Decomposers",                              start: 910,  end: 1100 },
  { title: "Food Chain & Trophic Levels Explained",                                                 start: 1100, end: 1370 },
  { title: "Limitation of Trophic Levels (Grass -> Deer -> Lion)",                                  start: 1370, end: 1510 },
  { title: "Loss of Energy in an Ecosystem: The 10% Law & Numericals",                             start: 1510, end: 1810 },
  { title: "Food Web & Food Chain v/s Food Web",                                                    start: 1810, end: 2120 },
  { title: "Food Pyramid & Key Characteristics of Energy Flow",                                     start: 2120, end: 2200 },
  { title: "Biomagnification (Biological Magnification) & Board Question",                          start: 2200, end: 2520 },
  { title: "Ozone Layer & Formation of Ozone (O3)",                                                 start: 2520, end: 2680 },
  { title: "Depletion of Ozone Layer (CFCs & UNEP Montreal Protocol)",                              start: 2680, end: 2800 },
  { title: "Managing the Garbage We Produce: Biodegradable vs Non-Biodegradable",                   start: 2800, end: 2950 },
  { title: "Methods of Waste Disposal (Recycling, Landfill, Composting, Incineration, STP, Biogas)", start: 2950, end: 3310 },
  { title: "Important Board Questions Discussion & Chapter Outro",                                  start: 3310, end: TOTAL_DURATION }
];

function buildUrl(start, end) {
  if (start === 0 && end < TOTAL_DURATION) return `${BASE}&end=${end}s`;
  if (start > 0 && end < TOTAL_DURATION) return `${BASE}&t=${start}s&end=${end}s`;
  return `${BASE}&t=${start}s`; // last segment
}

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const postData = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'bwcjpfkzisxuskpxbpxp.supabase.co',
      port: 443,
      path: path,
      method: method,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...(postData ? { 'Content-Length': Buffer.byteLength(postData) } : {})
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(data ? JSON.parse(data) : null); }
        catch (e) { resolve(data); }
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function run() {
  console.log('--- Updating Chapter 13: Our Environment with Official Video fKZDHRTbu8Q ---');

  // Step 1: Delete existing topics
  console.log('Deleting existing topics for Ch13...');
  const existing = await request('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existing && existing.length > 0) {
    const ids = existing.map(t => t.id);
    const delItems = await request('DELETE', `/rest/v1/learn_content_items?topic_id=in.(${ids.join(',')})`, null);
    console.log(`Deleted content items for ${ids.length} old topics.`);
    const delTopics = await request('DELETE', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}`, null);
    console.log(`Deleted ${existing.length} old topics.`);
  } else {
    console.log('No old topics found.');
  }

  // Step 2: Insert 16 new topics
  const topicsToInsert = topicsData.map((t, i) => ({
    chapter_id: CHAPTER_ID,
    title: t.title,
    order_index: i + 1,
    is_active: true
  }));

  console.log(`Inserting ${topicsData.length} new topics...`);
  const insertedTopics = await request('POST', '/rest/v1/learn_topics', topicsToInsert);
  if (!Array.isArray(insertedTopics)) {
    console.error('ERROR inserting topics:', JSON.stringify(insertedTopics));
    return;
  }
  console.log(`✅ Successfully inserted ${insertedTopics.length} topics.`);

  // Sort inserted topics by order_index
  insertedTopics.sort((a, b) => a.order_index - b.order_index);

  // Step 3: Insert content items
  const contentItems = insertedTopics.map((topic, i) => ({
    topic_id: topic.id,
    type: 'VIDEO',
    title: topic.title,
    content_url: buildUrl(topicsData[i].start, topicsData[i].end),
    is_free: true,
    order_index: 1
  }));

  console.log(`Inserting ${contentItems.length} content items...`);
  const insertedItems = await request('POST', '/rest/v1/learn_content_items', contentItems);
  if (!Array.isArray(insertedItems)) {
    console.error('ERROR inserting items:', JSON.stringify(insertedItems));
    return;
  }
  console.log(`✅ Successfully inserted ${insertedItems.length} content items.`);

  // Step 4: Verification
  console.log('\n--- Verification ---');
  for (let i = 0; i < insertedTopics.length; i++) {
    const t = topicsData[i];
    console.log(`${i+1}. ${insertedTopics[i].title} | ${t.start}s → ${t.end}s | URL: ${buildUrl(t.start, t.end)}`);
  }
  console.log('\n✅ Ch13 (Our Environment - Official Lecture) update COMPLETE!');
}

run().catch(console.error);
