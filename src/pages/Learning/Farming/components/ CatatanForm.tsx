import { useState } from "react";
import { CatatanTernak } from "../types/catatan";

export default function CatatanForm({
  onSubmit,
}: {
  onSubmit: (data: CatatanTernak) => void;
}) {
  const [mode, setMode] = useState<"harian" | "mingguan">("harian");
  const [jenisAyam, setJenisAyam] = useState<"KUB" | "PELUNG">("KUB");
  const [jumlahAyam, setJumlahAyam] = useState(0);
  const [pakanKg, setPakanKg] = useState(0);
  const [hargaPakan, setHargaPakan] = useState(0);
  const [status, setStatus] = useState<"sehat" | "sakit">("sehat");
  const [gejala, setGejala] = useState("");
  const [tindakan, setTindakan] = useState("");
  const [biayaObat, setBiayaObat] = useState(0);

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
        gejala,
        tindakan,
        biayaObat,
      },
    });
  };

  return (
    <div className="bg-gray-900 p-4 rounded space-y-3">
      <select onChange={(e) => setMode(e.target.value as any)}>
        <option value="harian">Harian</option>
        <option value="mingguan">Mingguan</option>
      </select>

      <select onChange={(e) => setJenisAyam(e.target.value as any)}>
        <option value="KUB">Ayam KUB</option>
        <option value="PELUNG">Ayam Pelung</option>
      </select>

      <input placeholder="Jumlah ayam" type="number" onChange={(e) => setJumlahAyam(+e.target.value)} />
      <input placeholder="Pakan (kg)" type="number" onChange={(e) => setPakanKg(+e.target.value)} />
      <input placeholder="Harga pakan" type="number" onChange={(e) => setHargaPakan(+e.target.value)} />

      <select onChange={(e) => setStatus(e.target.value as any)}>
        <option value="sehat">Sehat</option>
        <option value="sakit">Sakit</option>
      </select>

      {status === "sakit" && (
        <>
          <input placeholder="Gejala" onChange={(e) => setGejala(e.target.value)} />
          <input placeholder="Tindakan" onChange={(e) => setTindakan(e.target.value)} />
          <input placeholder="Biaya obat" type="number" onChange={(e) => setBiayaObat(+e.target.value)} />
        </>
      )}

      <button onClick={handleSubmit} className="bg-green-600 px-4 py-2 rounded">
        Simpan
      </button>
    </div>
  );
}
