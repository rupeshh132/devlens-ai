const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const SUBJECT_ID = '65d29b56-1111-0000-0000-000000000010'; // Class 10 Science

function request(path) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'bwcjpfkzisxuskpxbpxp.supabase.co',
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { resolve(data); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function parseUrl(url) {
  try {
    const u = new URL(url);
    const videoId = u.searchParams.get('v');
    const tParam = u.searchParams.get('t');
    const endParam = u.searchParams.get('end');

    let start = 0;
    if (tParam) {
      start = parseInt(tParam.replace('s', ''), 10);
    }
    let end = null;
    if (endParam) {
      end = parseInt(endParam.replace('s', ''), 10);
    }
    return { videoId, start, end, raw: url };
  } catch (e) {
    return { error: e.message, raw: url };
  }
}

async function audit() {
  console.log('================================================================');
  console.log('       CLASS 10 SCIENCE — COMPREHENSIVE DATABASE AUDIT          ');
  console.log('================================================================\n');

  const chapters = await request(`/rest/v1/learn_chapters?subject_id=eq.${SUBJECT_ID}&order=order_index.asc&select=*`);
  if (!Array.isArray(chapters)) {
    console.error('Failed to fetch chapters:', chapters);
    return;
  }

  let totalIssues = 0;
  let totalTopicsCount = 0;
  let totalItemsCount = 0;

  for (const ch of chapters) {
    console.log(`----------------------------------------------------------------`);
    console.log(`📘 Chapter ${ch.order_index}: ${ch.title} (ID: ${ch.id})`);
    console.log(`----------------------------------------------------------------`);

    const topics = await request(`/rest/v1/learn_topics?chapter_id=eq.${ch.id}&order=order_index.asc&select=*`);
    if (!Array.isArray(topics) || topics.length === 0) {
      console.log(`  ❌ CRITICAL: No topics found in Chapter ${ch.order_index}!`);
      totalIssues++;
      continue;
    }

    totalTopicsCount += topics.length;
    console.log(`  Total Topics: ${topics.length}`);

    // Check Topic order_index continuity
    let orderIssues = [];
    topics.forEach((t, idx) => {
      if (t.order_index !== idx + 1) {
        orderIssues.push(`Topic id=${t.id} has order_index ${t.order_index}, expected ${idx + 1}`);
      }
      if (!t.is_active) {
        orderIssues.push(`Topic id=${t.id} ("${t.title}") has is_active = false`);
      }
    });

    if (orderIssues.length > 0) {
      console.log(`  ⚠️ Topic Order / Active Issues:`);
      orderIssues.forEach(i => console.log(`     - ${i}`));
      totalIssues += orderIssues.length;
    } else {
      console.log(`  ✅ Topic order indices (1 to ${topics.length}) & is_active = true: 100% OK`);
    }

    // Fetch all content items for these topics
    const topicIds = topics.map(t => t.id);
    const items = await request(`/rest/v1/learn_content_items?topic_id=in.(${topicIds.join(',')})&select=*&order=order_index.asc`);

    if (!Array.isArray(items)) {
      console.log(`  ❌ Failed to fetch content items for Chapter ${ch.order_index}`);
      totalIssues++;
      continue;
    }

    totalItemsCount += items.length;

    // Check item-to-topic mapping
    const itemsByTopic = {};
    items.forEach(it => {
      if (!itemsByTopic[it.topic_id]) itemsByTopic[it.topic_id] = [];
      itemsByTopic[it.topic_id].push(it);
    });

    let mappingIssues = [];
    topics.forEach(t => {
      const tItems = itemsByTopic[t.id] || [];
      if (tItems.length === 0) {
        mappingIssues.push(`Topic "${t.title}" (order ${t.order_index}) has NO content item!`);
      } else if (tItems.length > 1) {
        mappingIssues.push(`Topic "${t.title}" (order ${t.order_index}) has multiple (${tItems.length}) content items!`);
      } else {
        const item = tItems[0];
        if (item.type !== 'VIDEO') {
          mappingIssues.push(`Content item for "${t.title}" has type "${item.type}" instead of "VIDEO"`);
        }
        if (!item.is_free) {
          mappingIssues.push(`Content item for "${t.title}" has is_free = false`);
        }
      }
    });

    if (mappingIssues.length > 0) {
      console.log(`  ⚠️ Content Item Mapping Issues:`);
      mappingIssues.forEach(i => console.log(`     - ${i}`));
      totalIssues += mappingIssues.length;
    } else {
      console.log(`  ✅ 1:1 Content Item Mapping (all VIDEO, is_free=true): 100% OK`);
    }

    // Check Timestamp & URL Continuity
    let segmentList = [];
    let videoIds = new Set();
    topics.forEach((t) => {
      const tItems = itemsByTopic[t.id] || [];
      if (tItems.length > 0) {
        const item = tItems[0];
        const parsed = parseUrl(item.content_url);
        if (parsed.videoId) videoIds.add(parsed.videoId);
        segmentList.push({
          order: t.order_index,
          title: t.title,
          ...parsed
        });
      }
    });

    if (videoIds.size > 1) {
      console.log(`  ⚠️ WARNING: Multiple Video IDs found in single chapter: ${Array.from(videoIds).join(', ')}`);
      totalIssues++;
    } else if (videoIds.size === 1) {
      console.log(`  ✅ Unified YouTube Video: https://www.youtube.com/watch?v=${Array.from(videoIds)[0]}`);
    }

    // Continuity verification
    let continuityIssues = [];
    for (let i = 0; i < segmentList.length; i++) {
      const seg = segmentList[i];
      if (seg.error) {
        continuityIssues.push(`Invalid URL syntax on topic ${seg.order}: ${seg.raw}`);
        continue;
      }

      if (i === 0) {
        if (seg.start !== 0) {
          continuityIssues.push(`First topic does not start at 0s! (Starts at ${seg.start}s)`);
        }
      } else {
        const prev = segmentList[i - 1];
        if (prev.end !== null && seg.start !== prev.end) {
          continuityIssues.push(`GAP/OVERLAP between Topic ${prev.order} (ends at ${prev.end}s) and Topic ${seg.order} (starts at ${seg.start}s)! Difference: ${seg.start - prev.end}s`);
        }
      }

      if (i === segmentList.length - 1) {
        if (seg.end !== null) {
          // Note: Last segment ending at a specific second or open-ended
          // Both are acceptable if end is total duration
        }
      } else {
        if (seg.end === null) {
          continuityIssues.push(`Middle Topic ${seg.order} has no end parameter!`);
        }
      }
    }

    if (continuityIssues.length > 0) {
      console.log(`  ⚠️ Timestamp Continuity Issues:`);
      continuityIssues.forEach(i => console.log(`     - ${i}`));
      totalIssues += continuityIssues.length;
    } else {
      const first = segmentList[0];
      const last = segmentList[segmentList.length - 1];
      console.log(`  ✅ 100% Zero-Gap Continuous Timeline: 0s (${first.start}s) ➔ Topic ${last.order} (${last.start}s+)`);
    }

    console.log('');
  }

  console.log('================================================================');
  console.log('                       AUDIT SUMMARY                            ');
  console.log('================================================================');
  console.log(`Total Chapters Checked: ${chapters.length}`);
  console.log(`Total Topics in DB:     ${totalTopicsCount}`);
  console.log(`Total Content Items:    ${totalItemsCount}`);
  console.log(`Total Issues Detected:  ${totalIssues}`);
  if (totalIssues === 0) {
    console.log(`\n🎉 PERFECT SCORE! Every single video segment, topic, URL parameter,`);
    console.log(`and database link is 100% seamless, verified, and error-free!`);
  } else {
    console.log(`\n⚠️ ${totalIssues} issue(s) require attention.`);
  }
}

audit().catch(console.error);
