import { useState } from "react";
import { hitungKebutuhanPakan } from "@/utils/hitungPakan";
import type { JenisAyam } from "@/data/ayam";

export default function HomeKalkulatorPakan() {
  const [jenis, setJenis] = useState<JenisAyam>("KUB");
  const [jumlahAyam, setJumlahAyam] = useState(100);
  const [umur, setUmur] = useState(30);

  const hasil = hitungKebutuhanPakan(jenis, jumlahAyam, umur);

  return (
    <div className="bg-gray-900 rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-white">
        Kalkulator Kebutuhan Pakan
      </h2>

      {/* INPUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <select
          value={jenis}
          onChange={(e) => setJenis(e.target.value as JenisAyam)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="KUB">Ayam KUB</option>
          <option value="PELUNG">Ayam Pelung</option>
        </select>

        <input
          type="number"
          value={jumlahAyam}
          onChange={(e) => setJumlahAyam(+e.target.value)}
          placeholder="Jumlah Ayam"
          className="p-2 rounded bg-gray-800 text-white"
        />

        <input
          type="number"
          value={umur}
          onChange={(e) => setUmur(+e.target.value)}
          placeholder="Umur (hari)"
          className="p-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* TABEL */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-white/10 rounded">
          <thead className="bg-white/5">
            <tr>
              <th className="p-2 text-left">Keterangan</th>
              <th className="p-2 text-right">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Pakan / Hari</td>
              <td className="p-2 text-right">
                {hasil.perHari.toFixed(2)} kg
              </td>
            </tr>
            <tr>
              <td className="p-2">Total Pakan ({umur} hari)</td>
              <td className="p-2 text-right font-semibold">
                {hasil.totalKg.toFixed(2)} kg
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
