import { useState } from "react";
import { useJurnalStore } from "@/store/useJurnalStore";

export default function FarmJurnal() {
  const { tambahJurnal } = useJurnalStore();

  const [tanggal, setTanggal] = useState("");
  const [jenisAyam, setJenisAyam] = useState("KUB");
  const [jumlahAyam, setJumlahAyam] = useState<number | "">("");
  const [catatan, setCatatan] = useState("");
  const [media, setMedia] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!tanggal || !jumlahAyam) return;

    tambahJurnal({
      id: Date.now().toString(),
      tanggal,
      jenisAyam,
      jumlahAyam: Number(jumlahAyam),
      catatan,
      media: media
        ? {
            type: media.type.startsWith("video") ? "video" : "image",
            src: URL.createObjectURL(media),
          }
        : undefined,
    });

    // reset form
    setTanggal("");
    setJumlahAyam("");
    setCatatan("");
    setMedia(null);
  };

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Tambah Jurnal Ternak</h1>

      <input
        type="date"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
      />

      <select
        value={jenisAyam}
        onChange={(e) => setJenisAyam(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
      >
        <option value="KUB">KUB</option>
        <option value="PELUNG">PELUNG</option>
      </select>

      <input
        type="number"
        value={jumlahAyam}
        onChange={(e) => setJumlahAyam(e.target.valueAsNumber || "")}
        className="w-full p-2 rounded bg-gray-800"
        placeholder="Jumlah ayam"
      />

      <textarea
        value={catatan}
        onChange={(e) => setCatatan(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
        placeholder="Catatan harian"
      />

      {/* Upload foto / video */}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setMedia(e.target.files?.[0] || null)}
        className="w-full text-sm"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded font-semibold"
      >
        Simpan Jurnal
      </button>
    </div>
  );
}
