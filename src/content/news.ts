import type { NewsPost } from "@/types/content";

// NOTE: placeholder news — replace via Sanity (body will be Portable Text).
export const news: NewsPost[] = [
  {
    id: "cabang-baru-bekasi",
    title: "Dadakan Sunda Hadir di Bekasi Summarecon",
    date: "2026-05-20",
    excerpt:
      "Cabang keempat kami resmi dibuka di kawasan Summarecon Bekasi. Saung yang luas dan nyaman untuk keluarga.",
    category: "Kabar Cabang",
    tone: "nasi",
    body: [
      "Dengan penuh suka cita, kami mengumumkan pembukaan cabang keempat Dadakan Sunda di kawasan Summarecon Bekasi.",
      "Cabang ini hadir dengan konsep saung yang lebih luas, area parkir lega, dan ruang acara untuk keluarga maupun komunitas.",
      "Datang dan nikmati hidangan khas Sunda yang selalu dimasak dadakan — segar, hangat, dan penuh rasa. Sampurasun!",
    ],
  },
  {
    id: "filosofi-dadakan",
    title: "Kenapa Kami Memasak Dadakan?",
    date: "2026-04-08",
    excerpt:
      "'Dadakan' bukan sekadar nama. Ini janji kami: setiap hidangan dimasak saat dipesan, demi kesegaran dan rasa terbaik.",
    category: "Cerita Dapur",
    tone: "ayam",
    body: [
      "Dalam bahasa Sunda, 'dadakan' berarti dibuat saat itu juga — segar, mendadak, tanpa ditunda.",
      "Kami percaya rasa terbaik lahir dari bahan segar yang diolah saat dipesan. Sambal kami diulek dadakan, nasi kami disajikan haneut (hangat).",
      "Itulah sebabnya setiap kunjungan ke Dadakan Sunda terasa seperti makan masakan rumah yang baru matang dari dapur.",
    ],
  },
  {
    id: "tips-liwet-keluarga",
    title: "Nasi Liwet untuk Kebersamaan Keluarga",
    date: "2026-03-15",
    excerpt:
      "Tradisi makan liwet bareng di atas daun pisang adalah cara terindah merayakan kebersamaan. Begini ceritanya.",
    category: "Budaya & Tradisi",
    tone: "sayur",
    body: [
      "Nasi liwet disajikan di atas daun pisang dan disantap bersama — sebuah tradisi 'botram' yang mempererat keluarga.",
      "Di Dadakan Sunda, kami menjaga tradisi ini hidup. Paket liwet kami dirancang untuk dinikmati beramai-ramai.",
      "Ajak keluarga, duduk lesehan, dan rasakan hangatnya kebersamaan ala Sunda.",
    ],
  },
];

export function getPost(id: string): NewsPost | undefined {
  return news.find((p) => p.id === id);
}
