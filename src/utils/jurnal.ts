import type { JurnalItem } from "@/store/useJurnalStore";

/* ===== Harian ===== */
export function jurnalToTimeline(data: JurnalItem[]) {
  return data.map(item => ({
    date: item.tanggal,
    title: `${item.jenisAyam} (${item.jumlahAyam} ekor)`,
    description: item.catatan ?? "-",
    image: item.media,
  }));
}

/* ===== Mingguan ===== */
export function groupByWeek(data: JurnalItem[]) {
  const grouped: Record<string, JurnalItem[]> = {};

  data.forEach(item => {
    const date = new Date(item.tanggal);
    const weekKey = `${date.getFullYear()}-W${getWeekNumber(date)}`;

    if (!grouped[weekKey]) grouped[weekKey] = [];
    grouped[weekKey].push(item);
  });

  return grouped;
}

/* ===== Helper ===== */
function getWeekNumber(date: Date) {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const diff =
    (date.getTime() - firstDay.getTime()) / 86400000 +
    firstDay.getDay();

  return Math.ceil(diff / 7);
}
