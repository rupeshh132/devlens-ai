const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000012'; // Magnetic Effects of Electric Current
const VIDEO_ID = '5YMxdILh5II';
const TOTAL_DURATION = 5332;
const BASE = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

// 18 topics, zero-gap coverage of 0s to 5332s
const topicsData = [
  { title: 'Introduction & Chapter Roadmap',                                     start: 0,    end: 90   },
  { title: 'Magnet, Bar Magnet & Magnetic Compass',                              start: 90,   end: 290  },
  { title: 'Magnetic Field & Properties of Field Lines',                         start: 290,  end: 700  },
  { title: 'Activity: Tracing Field Lines with Iron Filings',                    start: 700,  end: 800  },
  { title: 'Board PYQs & Concepts: Bar Magnets & Field Lines',                   start: 800,  end: 1350 },
  { title: "Oersted's Experiment (Electricity & Magnetism Link)",                start: 1350, end: 1490 },
  { title: 'Field due to a Straight Conductor & Right-Hand Thumb Rule',          start: 1490, end: 1800 },
  { title: 'Straight Conductor Activity, Factors & Board PYQs',                   start: 1800, end: 2120 },
  { title: 'Magnetic Field due to a Circular Loop & Clock Face Rule',             start: 2120, end: 2510 },
  { title: 'Magnetic Field due to a Solenoid & Factors',                         start: 2510, end: 3000 },
  { title: 'Electromagnet vs Permanent Magnet & Solenoid PYQs',                  start: 3000, end: 3320 },
  { title: "Force on Current-Carrying Conductor & Ampere's Experiment",          start: 3320, end: 3490 },
  { title: "Fleming's Left-Hand Rule & Direction Practice",                      start: 3490, end: 3780 },
  { title: 'Board PYQs: Magnetic Force & Charged Particle Deflection',           start: 3780, end: 4250 },
  { title: 'Factors Affecting Magnetic Force (F = BIL sin θ)',                   start: 4250, end: 4390 },
  { title: 'Domestic Electric Circuits, 3 Types of Wires & Earthing',            start: 4390, end: 4770 },
  { title: 'Electric Fuse, Short-Circuiting, Overloading & PYQs',                 start: 4770, end: 5150 },
  { title: 'Alternating Current (AC) vs Direct Current (DC) & Outro',            start: 5150, end: TOTAL_DURATION }
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
  console.log('--- Populating Class 10 Science Chapter 12: Magnetic Effects of Electric Current ---');

  // Step 1: Delete existing placeholder topics
  console.log('Deleting old placeholder topics for Ch12...');
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

  // Step 2: Insert new topics
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
  console.log('\n✅ Ch12 (Magnetic Effects of Electric Current) population COMPLETE!');
}

run().catch(console.error);
