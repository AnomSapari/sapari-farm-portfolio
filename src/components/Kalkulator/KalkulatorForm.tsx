import { JenisAyam } from "../../data/ayam"

type Props = {
  jenis: JenisAyam
  setJenis: (v: JenisAyam) => void

  usia: number
  setUsia: (v: number) => void

  jumlahAyam: number
  setJumlahAyam: (v: number) => void

  hargaPakan: number
  setHargaPakan: (v: number) => void

  hargaBibit: number
  setHargaBibit: (v: number) => void

  biayaOperasional: number
  setBiayaOperasional: (v: number) => void

  margin: number
  setMargin: (v: number) => void
}

export default function KalkulatorForm({
  jenis,
  setJenis,
  usia,
  setUsia,
  jumlahAyam,
  setJumlahAyam,
  hargaPakan,
  setHargaPakan,
  hargaBibit,
  setHargaBibit,
  biayaOperasional,
  setBiayaOperasional,
  margin,
  setMargin,
}: Props) {
  return (
    <div className="space-y-3 bg-gray-900 p-4 rounded-xl">

      <select
        className="w-full p-2 bg-gray-800 rounded"
        value={jenis}
        onChange={(e) => setJenis(e.target.value as JenisAyam)}
      >
        <option value="kub">Ayam KUB</option>
        <option value="broiler">Broiler</option>
        <option value="petelur">Petelur</option>
      </select>

      {/* USIA */}
      <input
        type="number"
        placeholder="Usia ayam (minggu)"
        className="w-full p-2 bg-gray-800 rounded"
        value={usia}
        onChange={(e) => setUsia(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Jumlah Ayam"
        className="w-full p-2 bg-gray-800 rounded"
        value={jumlahAyam}
        onChange={(e) => setJumlahAyam(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Harga Pakan / kg"
        className="w-full p-2 bg-gray-800 rounded"
        value={hargaPakan}
        onChange={(e) => setHargaPakan(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Harga Bibit / ekor"
        className="w-full p-2 bg-gray-800 rounded"
        value={hargaBibit}
        onChange={(e) => setHargaBibit(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Biaya Operasional"
        className="w-full p-2 bg-gray-800 rounded"
        value={biayaOperasional}
        onChange={(e) => setBiayaOperasional(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Margin (%)"
        className="w-full p-2 bg-gray-800 rounded"
        value={margin}
        onChange={(e) => setMargin(Number(e.target.value))}
      />
    </div>
  )
}
