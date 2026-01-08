import { Link } from "react-router-dom";

export const CaraPesan = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Cara Pesan Pakan Ayam di Sapari Farm
      </h1>

      <p className="text-gray-400 mb-8">
        Proses pemesanan dibuat sederhana agar peternak bisa langsung
        mendapatkan pakan sesuai kebutuhan kandangnya.
      </p>

      {/* Langkah */}
      <div className="space-y-6">
        <div className="bg-gray-900 p-5 rounded-xl">
          <h2 className="font-semibold text-lg text-teal-400">
            1️⃣ Hitung Kebutuhan Pakan
          </h2>
          <p className="text-gray-300 mt-2">
            Gunakan kalkulator pakan untuk mengetahui estimasi kebutuhan
            harian dan bulanan ayam Anda.
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h2 className="font-semibold text-lg text-teal-400">
            2️⃣ Pilih Jenis Pakan
          </h2>
          <p className="text-gray-300 mt-2">
            Tentukan jenis pakan sesuai umur ayam: starter, grower, atau
            layer.
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h2 className="font-semibold text-lg text-teal-400">
            3️⃣ Hubungi Kami via WhatsApp
          </h2>
          <p className="text-gray-300 mt-2">
            Klik tombol WhatsApp, pesan akan terisi otomatis berdasarkan
            hasil perhitungan Anda.
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h2 className="font-semibold text-lg text-teal-400">
            4️⃣ Konfirmasi & Pengiriman
          </h2>
          <p className="text-gray-300 mt-2">
            Tim kami akan mengonfirmasi stok, harga, dan jadwal pengiriman.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/farm"
          className="rounded-full border border-teal-500 px-6 py-3 text-teal-400 hover:bg-teal-500 hover:text-black"
        >
          Hitung Pakan Sekarang
        </Link>

        <a
          href="https://wa.me/62XXXXXXXXXX"
          target="_blank"
          className="rounded-full bg-teal-500 px-6 py-3 text-black font-semibold"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
};
