import { JurnalItem } from "@/store/useJurnalStore";

export function jurnalToTimeline(jurnal: JurnalItem[]) {
  return jurnal.map((j) => ({
    date: j.tanggal,
    title: `${j.jenisAyam} (${j.jumlahAyam} ekor)`,
    description: j.catatan || "Catatan harian",
    media: j.media,
  }));
}
