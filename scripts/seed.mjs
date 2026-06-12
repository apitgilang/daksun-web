/**
 * Seed the Sanity dataset with the placeholder content so you can edit it in
 * Studio instead of starting from scratch. Idempotent (uses createOrReplace
 * with deterministic _ids).
 *
 * Usage:
 *   1. Fill .env.local with NEXT_PUBLIC_SANITY_PROJECT_ID + NEXT_PUBLIC_SANITY_DATASET
 *   2. Create a write token (Sanity → Manage → API → Tokens, "Editor")
 *   3. SANITY_API_WRITE_TOKEN=sk... node --env-file=.env.local scripts/seed.mjs
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing config. Need NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.",
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

const slug = (current) => ({ _type: "slug", current });
const ref = (id) => ({ _type: "reference", _ref: id });

const branches = [
  { id: "bandung-dago", name: "Bandung — Dago", city: "Bandung", address: "Jl. Ir. H. Juanda No. 162, Dago, Bandung, Jawa Barat 40135", hours: "10.00 – 22.00 WIB", phone: "+62 812-0000-0001", whatsapp: "6281200000001", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dago+Bandung", tone: "ayam", isPrimary: true },
  { id: "bandung-buahbatu", name: "Bandung — Buahbatu", city: "Bandung", address: "Jl. Buahbatu No. 270, Turangga, Bandung, Jawa Barat 40264", hours: "10.00 – 22.00 WIB", phone: "+62 812-0000-0002", whatsapp: "6281200000002", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Buahbatu+Bandung", tone: "ikan" },
  { id: "jakarta-kemang", name: "Jakarta — Kemang", city: "Jakarta", address: "Jl. Kemang Raya No. 8, Bangka, Jakarta Selatan 12730", hours: "10.00 – 23.00 WIB", phone: "+62 812-0000-0003", whatsapp: "6281200000003", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kemang+Jakarta", tone: "sambal" },
  { id: "bekasi-summarecon", name: "Bekasi — Summarecon", city: "Bekasi", address: "Jl. Boulevard Selatan, Marga Mulya, Bekasi, Jawa Barat 17142", hours: "10.00 – 22.00 WIB", phone: "+62 812-0000-0004", whatsapp: "6281200000004", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Summarecon+Bekasi", tone: "nasi" },
];

const categories = [
  { id: "bakakar", name: "Bakakak & Ayam", sundanese: "Hayam", description: "Ayam kampung dibakar dadakan dengan bumbu kuning meresap." },
  { id: "ikan", name: "Ikan & Laut", sundanese: "Lauk", description: "Ikan segar bakar & goreng, ditemani sambal dadakan." },
  { id: "sayur-lalapan", name: "Sayur & Lalapan", sundanese: "Sayuran", description: "Segarnya lalapan & sayur khas Sunda." },
  { id: "nasi-pelengkap", name: "Nasi & Pelengkap", sundanese: "Sangu", description: "Sangu haneut & gorengan teman makan." },
  { id: "minuman", name: "Minuman", sundanese: "Inuman", description: "Pelepas dahaga tradisional & segar." },
];

const items = [
  { id: "bakakak-ayam-kampung", cat: "bakakar", name: "Bakakak Ayam Kampung", description: "Ayam kampung utuh, dibakar dengan bumbu kuning khas, disajikan dengan sambal dadakan.", price: 98000, tags: ["favorit", "rekomendasi"], signature: true, tone: "ayam" },
  { id: "ayam-bakar-madu", cat: "bakakar", name: "Ayam Bakar Madu", description: "Ayam bakar olesan madu hutan, manis-gurih dengan aroma arang.", price: 42000, tags: ["favorit"], tone: "ayam" },
  { id: "ayam-goreng-lengkuas", cat: "bakakar", name: "Ayam Goreng Lengkuas", description: "Ayam goreng kremes lengkuas yang renyah dan wangi.", price: 38000, tags: ["halal"], tone: "nasi" },
  { id: "gurame-bakar", cat: "ikan", name: "Gurame Bakar Kecap", description: "Gurame segar dibakar dengan kecap & bumbu rempah, lembut di dalam.", price: 115000, tags: ["rekomendasi"], signature: true, tone: "ikan" },
  { id: "nila-goreng", cat: "ikan", name: "Nila Goreng Renyah", description: "Ikan nila digoreng garing, nikmat dengan sambal terasi.", price: 45000, tags: ["halal"], tone: "ikan" },
  { id: "pepes-ikan-mas", cat: "ikan", name: "Pepes Ikan Mas", description: "Ikan mas dibungkus daun pisang, dikukus dengan kemangi & rempah.", price: 52000, tags: ["baru"], tone: "sayur" },
  { id: "karedok", cat: "sayur-lalapan", name: "Karedok", description: "Sayuran mentah segar dengan bumbu kacang & kencur yang khas.", price: 25000, tags: ["rekomendasi", "halal"], signature: true, tone: "sayur" },
  { id: "sayur-asem", cat: "sayur-lalapan", name: "Sayur Asem Sunda", description: "Kuah asem segar berisi melinjo, kacang, dan labu.", price: 22000, tone: "sayur" },
  { id: "lalapan-sambal", cat: "sayur-lalapan", name: "Lalapan & Sambal Dadakan", description: "Lalapan segar dengan sambal terasi yang diulek dadakan.", price: 18000, tags: ["pedas"], tone: "sambal" },
  { id: "nasi-timbel", cat: "nasi-pelengkap", name: "Nasi Timbel Komplit", description: "Nasi hangat dibungkus daun pisang, ayam goreng, tahu, tempe, lalapan, sambal.", price: 48000, tags: ["favorit", "rekomendasi"], signature: true, tone: "nasi" },
  { id: "nasi-liwet", cat: "nasi-pelengkap", name: "Nasi Liwet Komplit (2-3 org)", description: "Nasi liwet gurih untuk berbagi, lengkap dengan lauk & lalapan.", price: 95000, tags: ["rekomendasi"], tone: "nasi" },
  { id: "tahu-tempe", cat: "nasi-pelengkap", name: "Tahu & Tempe Goreng", description: "Tahu dan tempe goreng renyah, hangat dari penggorengan.", price: 15000, tone: "nasi" },
  { id: "es-cincau", cat: "minuman", name: "Es Cincau Hijau", description: "Cincau hijau segar dengan santan & gula aren.", price: 18000, tags: ["favorit"], tone: "minuman" },
  { id: "bandrek", cat: "minuman", name: "Bandrek Haneut", description: "Wedang jahe rempah hangat khas Sunda.", price: 16000, tone: "minuman" },
  { id: "es-goyobod", cat: "minuman", name: "Es Goyobod", description: "Es tradisional Bandung dengan santan, alpukat & roti.", price: 22000, tags: ["baru"], tone: "minuman" },
];

const testimonials = [
  { id: "t1", name: "Rangga Pratama", role: "Pelanggan, Bandung", rating: 5, quote: "Bakakak ayamnya juara. Bumbunya meresap sampai dalam dan sambal dadakannya bikin nagih. Berasa makan di rumah nenek di kampung." },
  { id: "t2", name: "Siti Nuraeni", role: "Food Blogger", rating: 5, quote: "Nasi timbelnya komplit dan porsinya pas. Yang paling saya suka, semua dimasak dadakan jadi benar-benar hangat dan segar." },
  { id: "t3", name: "Bambang Sutejo", role: "Pelanggan, Jakarta", rating: 5, quote: "Reservasi lewat WhatsApp gampang banget, tinggal klik. Tempatnya nyaman buat keluarga, pelayanannya ramah pisan." },
  { id: "t4", name: "Dewi Lestari", role: "Pelanggan, Bekasi", rating: 5, quote: "Karedok dan sayur asemnya segar, gurame bakarnya lembut. Harga masuk akal untuk kualitas dan porsi sebesar ini." },
  { id: "t5", name: "Asep Sunandar", role: "Pelanggan setia", rating: 5, quote: "Sudah langganan dari cabang pertama. Rasanya konsisten, sambelna ngageugeuh, sanguna haneut. Hatur nuhun Dadakan Sunda!" },
];

const promos = [
  { id: "paket-liwet-berdua", title: "Paket Liwet Berdua", description: "Nikmati Nasi Liwet Komplit untuk berdua plus dua es cincau, hemat sampai 20%. Pas untuk makan siang bareng.", badge: "Hemat 20%", endsAt: "2026-07-31T23:59:00Z", terms: ["Berlaku setiap hari", "Dine-in & takeaway", "Tidak digabung promo lain"], tone: "nasi" },
  { id: "jumat-bakakak", title: "Jumat Berkah Bakakak", description: "Setiap Jumat, Bakakak Ayam Kampung gratis es goyobod untuk dua orang. Berkah kebersamaan keluarga.", badge: "Setiap Jumat", endsAt: "2026-08-30T23:59:00Z", terms: ["Khusus hari Jumat", "Minimal 1 bakakak", "Dine-in"], tone: "ayam" },
  { id: "ulang-tahun", title: "Traktiran Ulang Tahun", description: "Rayakan ulang tahun di Dadakan Sunda — tunjukkan KTP saat hari-H dan dapatkan diskon 25% untuk satu meja.", badge: "Diskon 25%", endsAt: "2026-12-31T23:59:00Z", terms: ["Sesuai tanggal di KTP", "Maksimal 1 meja", "Reservasi disarankan"], tone: "sambal" },
];

const news = [
  { id: "cabang-baru-bekasi", title: "Dadakan Sunda Hadir di Bekasi Summarecon", date: "2026-05-20", category: "Kabar Cabang", excerpt: "Cabang keempat kami resmi dibuka di kawasan Summarecon Bekasi. Saung yang luas dan nyaman untuk keluarga.", tone: "nasi", body: ["Dengan penuh suka cita, kami mengumumkan pembukaan cabang keempat Dadakan Sunda di kawasan Summarecon Bekasi.", "Cabang ini hadir dengan konsep saung yang lebih luas, area parkir lega, dan ruang acara untuk keluarga maupun komunitas.", "Datang dan nikmati hidangan khas Sunda yang selalu dimasak dadakan — segar, hangat, dan penuh rasa. Sampurasun!"] },
  { id: "filosofi-dadakan", title: "Kenapa Kami Memasak Dadakan?", date: "2026-04-08", category: "Cerita Dapur", excerpt: "'Dadakan' bukan sekadar nama. Ini janji kami: setiap hidangan dimasak saat dipesan, demi kesegaran dan rasa terbaik.", tone: "ayam", body: ["Dalam bahasa Sunda, 'dadakan' berarti dibuat saat itu juga — segar, mendadak, tanpa ditunda.", "Kami percaya rasa terbaik lahir dari bahan segar yang diolah saat dipesan. Sambal kami diulek dadakan, nasi kami disajikan haneut (hangat).", "Itulah sebabnya setiap kunjungan ke Dadakan Sunda terasa seperti makan masakan rumah yang baru matang dari dapur."] },
  { id: "tips-liwet-keluarga", title: "Nasi Liwet untuk Kebersamaan Keluarga", date: "2026-03-15", category: "Budaya & Tradisi", excerpt: "Tradisi makan liwet bareng di atas daun pisang adalah cara terindah merayakan kebersamaan. Begini ceritanya.", tone: "sayur", body: ["Nasi liwet disajikan di atas daun pisang dan disantap bersama — sebuah tradisi 'botram' yang mempererat keluarga.", "Di Dadakan Sunda, kami menjaga tradisi ini hidup. Paket liwet kami dirancang untuk dinikmati beramai-ramai.", "Ajak keluarga, duduk lesehan, dan rasakan hangatnya kebersamaan ala Sunda."] },
];

const events = [
  { id: "saung-keluarga", name: "Saung Keluarga", capacity: 20, suitableFor: ["Arisan", "Ulang Tahun", "Syukuran"], description: "Saung lesehan yang hangat dan privat, cocok untuk acara keluarga kecil dengan suasana akrab khas Sunda.", tone: "sayur" },
  { id: "aula-sampurasun", name: "Aula Sampurasun", capacity: 80, suitableFor: ["Gathering Kantor", "Reuni", "Seminar"], description: "Ruang serbaguna ber-AC dengan kapasitas besar, lengkap dengan sound system dan area panggung.", tone: "ayam" },
  { id: "pelataran-botram", name: "Pelataran Botram", capacity: 150, suitableFor: ["Resepsi", "Festival", "Acara Komunitas"], description: "Area terbuka semi-outdoor yang luas dengan nuansa pesawahan, ideal untuk perayaan besar dan botram bareng.", tone: "nasi" },
];

const gallery = [
  { id: "g1", caption: "Bakakak Ayam Kampung", tone: "ayam", span: "tall" },
  { id: "g2", caption: "Sambal Dadakan", tone: "sambal", span: "normal" },
  { id: "g3", caption: "Nasi Timbel Komplit", tone: "nasi", span: "wide" },
  { id: "g4", caption: "Suasana Saung", tone: "sayur", span: "normal" },
  { id: "g5", caption: "Gurame Bakar", tone: "ikan", span: "normal" },
  { id: "g6", caption: "Karedok Segar", tone: "sayur", span: "tall" },
  { id: "g7", caption: "Es Goyobod", tone: "minuman", span: "normal" },
  { id: "g8", caption: "Botram Keluarga", tone: "nasi", span: "wide" },
  { id: "g9", caption: "Bandrek Haneut", tone: "minuman", span: "normal" },
];

function toBlocks(paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: "block",
    _key: `b${i}`,
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: `s${i}`, text, marks: [] }],
  }));
}

async function run() {
  const docs = [];

  docs.push({
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Dadakan Sunda",
    tagline: "Masakan Sunda, dimasak dadakan — sangu haneut, sambel ngageugeuh.",
    description: "Restoran Sunda autentik. Setiap hidangan dimasak dadakan — segar, hangat, dan penuh rasa. Pesan & reservasi mudah lewat WhatsApp.",
    defaultWhatsApp: "6281200000000",
    email: "halo@dadakansunda.id",
    hours: "10.00 – 22.00 WIB",
    instagram: "https://instagram.com/dadakansunda",
    tiktok: "https://tiktok.com/@dadakansunda",
    facebook: "https://facebook.com/dadakansunda",
  });

  branches.forEach((b, i) =>
    docs.push({ _id: `branch-${b.id}`, _type: "branch", ...b, slug: slug(b.id), order: i, isPrimary: !!b.isPrimary }),
  );

  categories.forEach((c, i) =>
    docs.push({ _id: `cat-${c.id}`, _type: "menuCategory", name: c.name, sundanese: c.sundanese, description: c.description, slug: slug(c.id), order: i }),
  );

  items.forEach((it, i) =>
    docs.push({
      _id: `item-${it.id}`,
      _type: "menuItem",
      name: it.name,
      slug: slug(it.id),
      category: ref(`cat-${it.cat}`),
      description: it.description,
      price: it.price,
      tags: it.tags || [],
      signature: !!it.signature,
      tone: it.tone,
      order: i,
    }),
  );

  testimonials.forEach((t, i) =>
    docs.push({ _id: `testimonial-${t.id}`, _type: "testimonial", name: t.name, role: t.role, quote: t.quote, rating: t.rating, order: i }),
  );

  promos.forEach((p, i) =>
    docs.push({ _id: `promo-${p.id}`, _type: "promo", title: p.title, slug: slug(p.id), description: p.description, badge: p.badge, endsAt: p.endsAt, terms: p.terms, tone: p.tone, order: i }),
  );

  news.forEach((n) =>
    docs.push({ _id: `news-${n.id}`, _type: "newsPost", title: n.title, slug: slug(n.id), date: new Date(n.date).toISOString(), category: n.category, excerpt: n.excerpt, body: toBlocks(n.body), tone: n.tone }),
  );

  events.forEach((e, i) =>
    docs.push({ _id: `event-${e.id}`, _type: "eventSpace", name: e.name, capacity: e.capacity, suitableFor: e.suitableFor, description: e.description, tone: e.tone, order: i }),
  );

  gallery.forEach((g, i) =>
    docs.push({ _id: `gallery-${g.id}`, _type: "galleryItem", caption: g.caption, tone: g.tone, span: g.span, order: i }),
  );

  let tx = client.transaction();
  docs.forEach((d) => (tx = tx.createOrReplace(d)));
  await tx.commit();
  console.log(`Seeded ${docs.length} documents into ${projectId}/${dataset}.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
