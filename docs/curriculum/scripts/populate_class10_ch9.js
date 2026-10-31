const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000009';
const VIDEO_ID = '8Rwv2hvdZFo';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 7121;

const topicsData = [
  {
    title: 'Intro & What is Light?',
    start: 0,
    end: 163,
    description: 'Introduction to Chapter 9 Light - Reflection and Refraction, chapter roadmap, definition of light as electromagnetic radiation, rectilinear propagation, and rays vs beams.'
  },
  {
    title: 'Reflection of Light & Laws of Reflection',
    start: 163,
    end: 481,
    description: 'Phenomenon of reflection of light, incident ray, reflected ray, normal, angle of incidence equals angle of reflection, coplanar rays, and regular vs diffuse reflection.'
  },
  {
    title: 'Characteristics of Plane Mirror & Lateral Inversion',
    start: 481,
    end: 655,
    description: 'Image formation by plane mirror: virtual, erect, same size, image distance equals object distance, lateral inversion, ambulance lettering concept, and infinite focal length.'
  },
  {
    title: 'Spherical Mirror: Concave & Convex Mirrors Terminology',
    start: 655,
    end: 1080,
    description: 'Concave (converging) vs convex (diverging) mirrors, pole (P), centre of curvature (C), radius of curvature (R), principal axis, principal focus (F), focal length (f), aperture, and R = 2f derivation.'
  },
  {
    title: 'Rules for Image Formation by Spherical Mirrors',
    start: 1080,
    end: 1350,
    description: 'Four fundamental ray rules for spherical mirrors: ray parallel to principal axis, ray through principal focus, ray through centre of curvature, and ray incident obliquely at the pole.'
  },
  {
    title: 'Image Formation by Concave Mirror',
    start: 1350,
    end: 2440,
    description: 'Ray diagrams for all six object positions: at infinity, beyond C, at C, between C and F, at F, and between P and F (virtual and magnified image), summary table, uses in torches, headlights, solar furnaces, shaving mirrors, and dentist mirrors.'
  },
  {
    title: 'Image Formation by Convex Mirror',
    start: 2440,
    end: 2616,
    description: 'Ray diagrams for object at infinity and finite distance in front of convex mirror (virtual, erect, diminished image), rear-view mirror in vehicles (wide field of view), and security mirrors.'
  },
  {
    title: 'Sign Convention for Spherical Mirrors',
    start: 2616,
    end: 2694,
    description: 'New Cartesian Sign Convention: origin at pole, incident light direction positive (+x), opposite negative (-x), heights above principal axis (+y), and heights below principal axis (-y).'
  },
  {
    title: 'Mirror Formula & Magnification',
    start: 2694,
    end: 3474,
    description: 'Mirror formula (1/v + 1/u = 1/f), linear magnification formula (m = h\'/h = -v/u), significance of sign and value of m, and solving CBSE board numericals on concave and convex mirrors.'
  },
  {
    title: 'Refraction of Light & Laws of Refraction',
    start: 3474,
    end: 3887,
    description: "Refraction of light due to change in speed of light across media, optically rarer vs denser medium, bending towards/away from normal, and Snell's law of refraction (sin i / sin r = constant)."
  },
  {
    title: 'Refraction through Glass Slab',
    start: 3887,
    end: 4104,
    description: 'Ray diagram of refraction through a rectangular glass slab, angle of incidence equals angle of emergence (i = e), emergent ray parallel to incident ray, and lateral displacement.'
  },
  {
    title: 'Refractive Index',
    start: 4104,
    end: 4765,
    description: 'Relative refractive index (n21 = v1/v2), absolute refractive index (n = c/v), optical density vs mass density, relationship with speed and bending of light, and board questions.'
  },
  {
    title: 'Spherical Lens: Types & Terminology',
    start: 4765,
    end: 5019,
    description: 'Convex (converging) lens vs concave (diverging) lens, optical centre (O), centres of curvature (C1, C2), radii of curvature, principal axis, principal foci (F1, F2), focal length, and aperture.'
  },
  {
    title: 'Rules for Image Formation by Lens',
    start: 5019,
    end: 5226,
    description: 'Three fundamental ray tracing rules for convex and concave lenses: ray parallel to principal axis, ray through principal focus, and ray passing through optical centre without deviation.'
  },
  {
    title: 'Image Formation by Convex Lens',
    start: 5226,
    end: 5681,
    description: 'Ray diagrams for all six object positions for convex lens: at infinity, beyond 2F1, at 2F1, between F1 and 2F1, at F1, and between F1 and O (magnifying glass effect), and application in spectacles and cameras.'
  },
  {
    title: 'Image Formation by Concave Lens',
    start: 5681,
    end: 6166,
    description: 'Ray diagrams for object at infinity and between infinity and optical centre for concave lens (always virtual, erect, diminished image), uses in myopia correction spectacles and peepholes.'
  },
  {
    title: 'Sign Convention for Spherical Lenses',
    start: 6166,
    end: 6187,
    description: 'New Cartesian Sign Convention applied to lenses: optical centre as origin, focal length of convex lens always positive (+f), and focal length of concave lens always negative (-f).'
  },
  {
    title: 'Lens Formula & Magnification',
    start: 6187,
    end: 6293,
    description: "Lens formula (1/v - 1/u = 1/f) and magnification produced by lenses (m = h'/h = +v/u), comparing mirror formula with lens formula signs."
  },
  {
    title: 'Power of Lens, Numericals & Chapter Conclusion',
    start: 6293,
    end: TOTAL_DURATION,
    description: 'Optical power of a lens (P = 1/f in metres), SI unit Dioptre (D), power of combination of lenses (P = P1 + P2), solving CBSE board numericals on lens formula and power, palmist case-study question, and chapter motivational summary.'
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
  console.log('Populating Class 10 Science Chapter 9: Light - Reflection and Refraction');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 9
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 19 topics and content items
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

  console.log('\n🎉 Chapter 9 populated successfully with 19 continuous topics and video segments!');
}

main().catch(console.error);
