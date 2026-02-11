import { useState } from "react"
import type { CatatanTernak } from "@/types/catatan"



type Props = {
  onSubmit: (data: CatatanTernak) => void
}

export default function CatatanForm({ onSubmit }: Props) {
  const [mode, setMode] = useState<"harian" | "mingguan">("harian")
  const [jenisAyam, setJenisAyam] = useState<"KUB" | "PELUNG">("KUB")
  const [jumlahAyam, setJumlahAyam] = useState(0)
  const [pakanKg, setPakanKg] = useState(0)
  const [hargaPakan, setHargaPakan] = useState(0)
  const [status, setStatus] = useState<"sehat" | "sakit">("sehat")
  const [gejala, setGejala] = useState("")
  const [tindakan, setTindakan] = useState("")
  const [biayaObat, setBiayaObat] = useState(0)

  const handleSubmit = () => {
    onSubmit({
      id: crypto.randomUUID(),
      tanggal: new Date().toISOString().split("T")[0],
      mode,
      umurHari: 0,
      jenisAyam,
      jumlahAyam,
      pakan: {
        jenis: "Pakan Harian",
        jumlahKg: pakanKg,
        harga: hargaPakan,
      },
      kesehatan: {
        status,
        gejala: status === "sakit" ? gejala : undefined,
        tindakan: status === "sakit" ? tindakan : undefined,
        biayaObat: status === "sakit" ? biayaObat : undefined,
      },
    })
  }

  return (
    <div className="bg-gray-900 p-4 rounded space-y-3">
      <select value={mode} onChange={(e) => setMode(e.target.value as any)}>
        <option value="harian">Harian</option>
        <option value="mingguan">Mingguan</option>
      </select>

      <select value={jenisAyam} onChange={(e) => setJenisAyam(e.target.value as any)}>
        <option value="KUB">Ayam KUB</option>
        <option value="PELUNG">Ayam Pelung</option>
      </select>

      <input type="number" placeholder="Jumlah ayam" onChange={(e) => setJumlahAyam(+e.target.value)} />
      <input type="number" placeholder="Pakan (kg)" onChange={(e) => setPakanKg(+e.target.value)} />
      <input type="number" placeholder="Harga pakan" onChange={(e) => setHargaPakan(+e.target.value)} />

      <select value={status} onChange={(e) => setStatus(e.target.value as any)}>
        <option value="sehat">Sehat</option>
        <option value="sakit">Sakit</option>
      </select>

      {status === "sakit" && (
        <>
          <input placeholder="Gejala" onChange={(e) => setGejala(e.target.value)} />
          <input placeholder="Tindakan" onChange={(e) => setTindakan(e.target.value)} />
          <input type="number" placeholder="Biaya obat" onChange={(e) => setBiayaObat(+e.target.value)} />
        </>
      )}

      <button onClick={handleSubmit} className="bg-green-600 px-4 py-2 rounded">
        Simpan
      </button>
    </div>
  )
}
