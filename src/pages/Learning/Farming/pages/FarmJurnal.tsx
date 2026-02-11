import type { JurnalHarian } from "../../../../types/jurnal";




export default function FarmJurnal() {
  const jurnal: JurnalHarian = {
    judul: "Awal Belajar Ternak Ayam KUB",
    items: [
      { deskripsi: "Pejantan dan betina", biaya: 300_000 },
      { deskripsi: "Kawat ayam", biaya: 96_000 },
      { deskripsi: "Tempat air", biaya: 20_000 },
      { deskripsi: "Bambu", biaya: 50_000 },
      { deskripsi: "Sekam", biaya: 96_000 },
      { deskripsi: "Pasir", biaya: 49_000 },
      { deskripsi: "Lampu", biaya: 15_000 },
      { deskripsi: "Pakan minggu awal", biaya: 80_000 },

      { deskripsi: "Bibit ayam KUB 13 ekor (usia 7 hari)" },
      { deskripsi: "Tambah lampu penerangan", biaya: 50_000 },

      { deskripsi: "Pakan minggu 1", biaya: 36_000 },
      { deskripsi: "Pakan minggu 2", biaya: 36_000 },
      { deskripsi: "Pakan minggu 3", biaya: 48_000 },
      { deskripsi: "Pakan minggu 4", biaya: 48_000 },
      { deskripsi: "Pakan minggu 5", biaya: 48_000 },
      { deskripsi: "Pakan minggu 6", biaya: 48_000 },
      { deskripsi: "Pakan minggu 7", biaya: 60_000 },
      { deskripsi: "Pakan minggu 8", biaya: 60_000 },
      { deskripsi: "Pakan minggu 9", biaya: 84_000 },
      { deskripsi: "Pakan minggu 10", biaya: 96_000 },
      { deskripsi: "Pakan minggu 11", biaya: 96_000 },
      { deskripsi: "Pakan minggu 12", biaya: 108_000 },
      { deskripsi: "Pakan minggu 13", biaya: 108_000 },

      { deskripsi: "Vitamin", biaya: 25_000 },
      { deskripsi: "Obat flu", biaya: 30_000 },
      { deskripsi: "Atap kandang plastik", biaya: 44_000 },

      { deskripsi: "Minggu ke-14: 1 ekor mati karena sakit" },
      { deskripsi: "Sisa ayam KUB: 14 ekor" },
    ],
  };

  const totalBiaya = jurnal.items.reduce(
    (sum, item) => sum + (item.biaya ?? 0),
    0
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-emerald-400">
        {jurnal.judul}
      </h1>

      <table className="w-full text-sm border border-white/10">
        <thead className="bg-white/5">
          <tr>
            <th className="p-2 text-left">Keterangan</th>
            <th className="p-2 text-right">Biaya</th>
          </tr>
        </thead>

        <tbody>
          {jurnal.items.map((item, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="p-2">{item.deskripsi}</td>
              <td className="p-2 text-right">
                {item.biaya
                  ? `Rp ${item.biaya.toLocaleString("id-ID")}`
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right font-bold text-lg text-yellow-400">
        Total Biaya: Rp {totalBiaya.toLocaleString("id-ID")}
      </div>
    </div>
  );
}
