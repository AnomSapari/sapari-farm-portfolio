import { useState } from "react";
import type { CatatanTernak, ModeCatatan, JenisAyam } from "@/types/catatan";

type Props = {
  onSubmit: (data: CatatanTernak) => void;
};

export default function CatatanForm({ onSubmit }: Props) {
  const [mode, setMode] = useState<ModeCatatan>("harian");
  const [jenisAyam, setJenisAyam] = useState<JenisAyam>("KUB");
  const [jumlahAyam, setJumlahAyam] = useState<number>(0);

  const handleSubmit = () => {
    const data: CatatanTernak = {
      id: crypto.randomUUID(),
      tanggal: new Date().toISOString(),
      mode,
      jenisAyam,
      jumlahAyam,
      biaya: 0,
    };

    onSubmit(data);
  };

  return (
    <div className="space-y-2">
      <select value={mode} onChange={(e) => setMode(e.target.value as ModeCatatan)}>
        <option value="harian">Harian</option>
        <option value="mingguan">Mingguan</option>
      </select>

      <select value={jenisAyam} onChange={(e) => setJenisAyam(e.target.value as JenisAyam)}>
        <option value="KUB">Ayam KUB</option>
        <option value="PELUNG">Ayam Pelung</option>
      </select>

      <input
        type="number"
        placeholder="Jumlah Ayam"
        value={jumlahAyam}
        onChange={(e) => setJumlahAyam(Number(e.target.value))}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 px-4 py-2 rounded text-white"
      >
        Simpan
      </button>
    </div>
  );
}
