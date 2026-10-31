const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000011';
const VIDEO_ID = 'J3DvsZfYEfs';
const TOTAL_DURATION = 8566;
const BASE = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

// 22 topics, zero-gap coverage of 0s to 8566s
const topicsData = [
  { title: 'Intro & Chapter Overview',                                      start: 0,    end: 120  },
  { title: 'Electric Charge & Quantisation of Charge',                      start: 120,  end: 650  },
  { title: 'Electric Current',                                               start: 650,  end: 1070 },
  { title: 'Potential Difference',                                           start: 1070, end: 1550 },
  { title: 'Why Current Flows & Electric Circuit',                           start: 1550, end: 1870 },
  { title: 'Electric Circuit Diagrams, Symbols, Ammeter & Voltmeter',       start: 1870, end: 2200 },
  { title: 'Resistance (R) & Ohm\'s Law',                                   start: 2200, end: 2600 },
  { title: 'Ohm\'s Law Experiment & V-I Characteristic Graph',              start: 2600, end: 2910 },
  { title: 'Factors Affecting Resistance',                                   start: 2910, end: 3300 },
  { title: 'Resistivity & Resistance vs Resistivity',                       start: 3300, end: 3640 },
  { title: 'Resistivity Board PYQs & Numericals',                           start: 3640, end: 4120 },
  { title: 'Series Combination of Resistors',                                start: 4120, end: 4570 },
  { title: 'Parallel Combination of Resistors',                              start: 4570, end: 4960 },
  { title: 'Circuit Solving – Complex Combinations',                         start: 4960, end: 5560 },
  { title: 'Advantage of Parallel over Series Combination',                 start: 5560, end: 5760 },
  { title: 'Circuit Solving – Board PYQs (Complex Circuits)',               start: 5760, end: 6490 },
  { title: 'Joule\'s Law of Heating (H = I²Rt)',                            start: 6490, end: 6760 },
  { title: 'Electric Bulb & Applications of Heating Effect',                start: 6760, end: 7030 },
  { title: 'Electrical Power (P = VI = I²R = V²/R)',                        start: 7030, end: 7490 },
  { title: 'Electrical Power Numericals & Board PYQs',                      start: 7490, end: 7820 },
  { title: 'Electric Energy & Commercial Unit (kWh)',                        start: 7820, end: 8050 },
  { title: 'Electric Energy Numericals, Board PYQs & Chapter Conclusion',   start: 8050, end: TOTAL_DURATION }
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
  // Step 1: Delete existing topics for this chapter
  console.log('Deleting old topics for Ch11 Electricity...');
  const existing = await request('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existing && existing.length > 0) {
    const ids = existing.map(t => t.id);
    // Delete content items first
    const delItems = await request('DELETE', `/rest/v1/learn_content_items?topic_id=in.(${ids.join(',')})`, null);
    console.log(`Deleted content items for ${ids.length} old topics.`);
    const delTopics = await request('DELETE', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}`, null);
    console.log('Deleted old topics.');
  } else {
    console.log('No existing topics found.');
  }

  // Step 2: Insert 22 new topics
  const topicsToInsert = topicsData.map((t, i) => ({
    chapter_id: CHAPTER_ID,
    title: t.title,
    order_index: i + 1,
    is_active: true
  }));

  console.log(`Inserting ${topicsData.length} topics...`);
  const insertedTopics = await request('POST', '/rest/v1/learn_topics', topicsToInsert);
  if (!Array.isArray(insertedTopics)) {
    console.error('ERROR inserting topics:', JSON.stringify(insertedTopics));
    return;
  }
  console.log(`✅ Inserted ${insertedTopics.length} topics.`);

  // Sort inserted topics by order_index to match topicsData order
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
  console.log(`✅ Inserted ${insertedItems.length} content items.`);

  // Verify
  console.log('\n--- Verification ---');
  for (let i = 0; i < insertedTopics.length; i++) {
    const t = topicsData[i];
    console.log(`Topic ${i+1}: ${insertedTopics[i].title} | ${t.start}s → ${t.end}s | URL: ${buildUrl(t.start, t.end)}`);
  }
  console.log('\n✅ Ch11 Electricity population COMPLETE!');
}

run().catch(console.error);
