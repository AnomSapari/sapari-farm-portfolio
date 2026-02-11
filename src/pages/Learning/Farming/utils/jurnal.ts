export type JurnalItem = {
  id: string; // ✅ WAJIB ADA
  tanggal: string;
  kategori: "KUB" | "Pelung" | "Operasional";
  keterangan: string;
  jumlah: number;
};
