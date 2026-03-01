import { useEffect, useState } from "react";
import { createWaLink } from "@/utils/whatsapp";


export default function OrderPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const journey = JSON.parse(
      localStorage.getItem("farm_journey") || "[]"
    );

    if (journey.length > 0) {
      setData(journey[0]); // data TERBARU
    }
  }, []);

  if (!data) {
    return (
      <p className="text-gray-400 pt-24 text-center">
        ❌ Belum ada data ternak.  
        Silakan hitung pakan terlebih dahulu.
      </p>
    );
  }

  // ======================
  // SAFETY DEFAULT
  // ======================
  const {
    jumlahAyam = 0,
    umur = 0,
    totalPakan = 0,
    totalBiaya = 0,
  } = data;

  return (
    <div className="max-w-xl mx-auto pt-24 text-white space-y-6">
      <h1 className="text-2xl font-bold">
        🧾 Konfirmasi Pesanan Pakan
      </h1>

      {/* RINGKASAN */}
      <div className="bg-gray-900 p-4 rounded-xl space-y-2 border border-white/10">
        <p>🐔 Jumlah Ayam: <b>{jumlahAyam}</b></p>
        <p>📅 Umur Ayam: <b>{umur} hari</b></p>
        <p>🌽 Kebutuhan Pakan: <b>{totalPakan} kg</b></p>

        {totalBiaya > 0 ? (
          <p>
            💰 Estimasi Biaya:{" "}
            <b className="text-emerald-400">
              Rp {totalBiaya.toLocaleString("id-ID")}
            </b>
          </p>
        ) : (
          <p className="text-yellow-400">
            ⚠️ Estimasi biaya belum dihitung
          </p>
        )}
      </div>

      {/* CTA WHATSAPP */}
      <a
        href={createWaLink(
`Halo Sapari Farm 👋
Saya ingin pesan pakan ayam dengan detail berikut:

🐔 Jumlah ayam: ${jumlahAyam}
📅 Umur ayam: ${umur} hari
🌽 Kebutuhan pakan: ${totalPakan} kg
💰 Estimasi biaya: Rp ${totalBiaya}

Mohon dibantu ya 🙏`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-500 hover:bg-green-600 text-black text-center py-4 rounded-xl font-bold transition"
      >
        💬 Kirim ke WhatsApp
      </a>
    </div>
  );
}
