export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "Okt 2025",
    title: "Persiapan Kandang Ayam KUB",
    description:
      "Tahap awal menyiapkan kandang, tempat pakan, minum, dan pengaturan suhu.",
    image: "/images/persiapan-kandang.jpg",
  },
  {
    date: "29 Okt 2025",
    title: "Pembelian Bibit Ayam KUB",
    description:
      "Membeli 13 ekor DOC ayam KUB secara online.",
    image: "/images/pembelian-bibit-kub.jpg",
  },
  {
    date: "Des 2025",
    title: "Ayam Diumbar",
    description:
      "Ayam mulai diumbar di halaman rumah.",
    video: "/videos/diumbar.mp4",
  },
];
