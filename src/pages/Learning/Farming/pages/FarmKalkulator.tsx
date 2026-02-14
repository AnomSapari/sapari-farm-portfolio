import { useMemo, useState } from "react";
import { hitungKebutuhanPakan } from "@/utils/hitungPakan";
import type { JenisAyam } from "@/data/ayam";

export default function FarmKalkulator() {
  const [jenis, setJenis] = useState<JenisAyam>("KUB");
  const [jumlahAyam, setJumlahAyam] = useState(0);
  const [umurHari, setUmurHari] = useState(1);

  const hasil = useMemo(
    () =>
      hitungKebutuhanPakan(jenis, jumlahAyam, umurHari),
    [jenis, jumlahAyam, umurHari]
  );

 
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Kalkulator Kebutuhan Pakan</h1>

      {/* TABLE INPUT */}
      <div className="overflow-x-auto">
        <table className="w-full border border-white/10 rounded-lg">
          <thead className="bg-white/5">
            <tr>
              <th className="p-3 text-left">Parameter</th>
              <th className="p-3 text-left">Input</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-white/10">
              <td className="p-3">Jenis Ayam</td>
              <td className="p-3">
                <select
                  value={jenis}
                  onChange={(e) =>
                    setJenis(e.target.value as JenisAyam)
                  }
                  className="bg-gray-900 border border-white/10 rounded px-3 py-2"
                >
                  <option value="KUB">KUB</option>
                  <option value="PETELUR">PETELUR</option>
                  <option value="PELUNG">PELUNG</option>
                </select>
              </td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3">Jumlah Ayam (ekor)</td>
              <td className="p-3">
                <input
                  type="number"
                  value={jumlahAyam}
                  onChange={(e) =>
                    setJumlahAyam(Number(e.target.value))
                  }
                  className="bg-gray-900 border border-white/10 rounded px-3 py-2 w-full"
                />
              </td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3">Umur Ayam (hari)</td>
              <td className="p-3">
                <input
                  type="number"
                  value={umurHari}
                  onChange={(e) =>
                    setUmurHari(Number(e.target.value))
                  }
                  className="bg-gray-900 border border-white/10 rounded px-3 py-2 w-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* HASIL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ResultCard
          label="Kebutuhan Pakan / Hari"
          value={`${hasil.perHari.toFixed(2)} kg`}
        />
        <ResultCard
          label="Total Kebutuhan Pakan"
          value={`${hasil.totalKg.toFixed(2)} kg`}
        />
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
