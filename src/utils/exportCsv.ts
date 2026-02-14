import type { JurnalPakan } from "@/types/jurnal";

export function exportCSV(data: JurnalPakan[]) {
  if (data.length === 0) return;

  const header = ["Tanggal", "Jumlah Ayam", "Pakan (Kg)"];
  const rows = data.map((d) => [
    d.tanggal,
    d.jumlahAyam,
    d.pakanKg,
  ]);

  const csv =
    [header, ...rows].map((r) => r.join(",")).join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "jurnal-pakan.csv";
  a.click();

  URL.revokeObjectURL(url);
}
