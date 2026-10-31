const https = require('https');

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y2pwZmt6aXN4dXNrcHhicHhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTc1NzYxMywiZXhwIjoyMTA1MzMzNjEzfQ.BNLhuhVaURE5Gqnk2SjYsOdvgLnMtwFUW27cVVL4eIc';
const CHAPTER_ID = '65d29b56-1111-1000-0000-000000000008';
const VIDEO_ID = 'LE3PUf5ueS4';
const BASE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const TOTAL_DURATION = 5542;

const topicsData = [
  {
    title: 'Intro & Chapter Overview',
    start: 0,
    end: 80,
    description: 'Introduction to Heredity and chapter roadmap by Prashant Kirad.'
  },
  {
    title: 'Heredity: Definition & Basic Concepts',
    start: 80,
    end: 170,
    description: 'Definition of heredity, transmission of traits from parents to offspring, and biological basis of genetic inheritance.'
  },
  {
    title: 'Variations & Importance of Variations',
    start: 170,
    end: 250,
    description: 'Definition of variations, phenotypic differences among individuals of a species, and their importance in environmental adaptation and survival.'
  },
  {
    title: 'Important Genetic Terms: DNA, Chromatin & Chromosomes',
    start: 250,
    end: 470,
    description: 'Deoxyribonucleic acid (DNA), chromatin fibres, chromosome structure, genes, and board question on how variations promote survival.'
  },
  {
    title: 'Haploid vs Diploid Cells & Gamete Formation',
    start: 470,
    end: 600,
    description: 'Comparison between haploid cells (n=23) and diploid cells (2n=46), mitosis vs meiosis, and gamete fusion to form diploid zygote.'
  },
  {
    title: 'Variations in Asexual vs Sexual Reproduction',
    start: 600,
    end: 670,
    description: 'Comparison of variations generated in asexual reproduction (DNA copying errors) vs sexual reproduction (recombination of maternal and paternal genes).'
  },
  {
    title: 'Acquired Traits vs Inherited Traits & Practice Questions',
    start: 670,
    end: 1040,
    description: 'Difference between somatic changes (acquired traits) and germ cell changes (inherited traits), earlobes, eye color, tattoos, and board questions.'
  },
  {
    title: 'Genes and Alleles',
    start: 1040,
    end: 1260,
    description: 'Definition of gene as functional unit of DNA, alleles as alternative forms of a gene, homologous chromosomes, and gene representation.'
  },
  {
    title: 'Dominant vs Recessive Alleles & Homozygous vs Heterozygous',
    start: 1260,
    end: 1490,
    description: 'Dominant alleles vs recessive alleles (TT, Tt, tt), uppercase and lowercase notations, and homozygous vs heterozygous conditions.'
  },
  {
    title: 'Genotype and Phenotype',
    start: 1490,
    end: 1610,
    description: 'Distinction between genotype (genetic constitution) and phenotype (observable physical appearance) with pea plant examples.'
  },
  {
    title: 'Gregor Mendel (Father of Genetics) & 7 Contrasting Traits of Pea Plant',
    start: 1610,
    end: 1890,
    description: 'William Bateson and Gregor Johann Mendel, pea plant (Pisum sativum), and the 7 pairs of contrasting visible traits studied by Mendel.'
  },
  {
    title: 'Why Mendel Chose Pea Plant (Pisum sativum)?',
    start: 1890,
    end: 2000,
    description: 'Key advantages of garden pea: distinct contrasting characters, short life cycle, self and cross-pollination feasibility, and high seed yield.'
  },
  {
    title: "Mendel's Monohybrid Cross (Inheritance of One Trait)",
    start: 2000,
    end: 2460,
    description: 'Crossing pure tall (TT) and pure dwarf (tt) plants, F1 generation all tall (Tt), self-pollination, F2 generation, phenotypic ratio 3:1, genotypic ratio 1:2:1.'
  },
  {
    title: 'Monohybrid Cross Practice & Board PYQs',
    start: 2460,
    end: 3130,
    description: 'Solving board PYQs on monohybrid cross, purple vs white flower cross (WW x ww), seed shape cross, test cross (50% tall, 50% dwarf), and F1 uniformity.'
  },
  {
    title: 'Case-Based Questions: Earlobes & Tongue Rolling Inheritance',
    start: 3130,
    end: 3540,
    description: 'Human genetics case study: Free vs attached earlobes inheritance, and roller vs non-roller tongue inheritance with genotype derivation.'
  },
  {
    title: "Mendel's Dihybrid Cross (Inheritance of Two Traits)",
    start: 3540,
    end: 4170,
    description: 'Crossing Round Yellow seeds (RRYY) with Wrinkled Green seeds (rryy), F1 hybrid (RrYy), 4x4 Punnett square, 16 offspring, and phenotypic ratio 9:3:3:1.'
  },
  {
    title: 'Dihybrid Cross Practice & Board PYQs',
    start: 4170,
    end: 4340,
    description: 'Solving CBSE board questions on dihybrid cross combinations, recombinant phenotypes, and calculating proportions.'
  },
  {
    title: "Mendel's Laws of Inheritance",
    start: 4340,
    end: 4870,
    description: 'Detailed explanation of the three fundamental laws: Law of Dominance, Law of Segregation (Purity of Gametes), and Law of Independent Assortment, with board questions.'
  },
  {
    title: 'Sex Determination: Environmental vs Genetic Factors',
    start: 4870,
    end: 4960,
    description: 'Factors influencing sex determination: environmental triggers in reptiles (temperature-dependent) and snails, contrasted with genetic mechanisms.'
  },
  {
    title: 'Autosomes and Allosomes (Sex Chromosomes)',
    start: 4960,
    end: 5060,
    description: 'Human chromosome complement: 22 pairs of autosomes (44) and 1 pair of allosomes / sex chromosomes (XX in females, XY in males).'
  },
  {
    title: 'Sex Determination in Humans (XX-XY Mechanism)',
    start: 5060,
    end: 5240,
    description: "Genetic mechanism of human sex determination: Ovum carries only X chromosome, sperm carries X or Y chromosome (50% chance each), proving the father determines child's sex."
  },
  {
    title: 'Sex Determination Board Questions & Chapter Conclusion',
    start: 5240,
    end: TOTAL_DURATION,
    description: "Board PYQs on sex determination, chromosome number restoration during fertilisation, X-linked inheritance, and Prashant Kirad's final chapter conclusion."
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
  console.log('Populating Class 10 Science Chapter 8: Heredity');
  console.log(`Video: ${BASE_URL} (${TOTAL_DURATION}s)`);
  console.log('===============================================================\n');

  // 1. Delete existing placeholder topics for Chapter 8
  const existingTopics = await supabaseRequest('GET', `/rest/v1/learn_topics?chapter_id=eq.${CHAPTER_ID}&select=id`);
  if (existingTopics.body && existingTopics.body.length > 0) {
    console.log(`Cleaning up ${existingTopics.body.length} placeholder topics...`);
    for (const t of existingTopics.body) {
      await supabaseRequest('DELETE', `/rest/v1/learn_content_items?topic_id=eq.${t.id}`);
      await supabaseRequest('DELETE', `/rest/v1/learn_topics?id=eq.${t.id}`);
    }
  }

  // 2. Insert the 22 topics and content items
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

  console.log('\n🎉 Chapter 8 populated successfully with 22 continuous topics and video segments!');
}

main().catch(console.error);
