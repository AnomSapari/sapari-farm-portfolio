import { motion } from "framer-motion";
import { createWaLink } from "@/utils/whatsapp";

const CaraPesan = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 md:pt-28 pb-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
          Cara Pesan Pakan Ayam di Sapari Farm
        </h1>
        <p className="text-gray-400 text-lg">
          Proses mudah, transparan, dan bisa konsultasi GRATIS sebelum pesan.
        </p>
      </motion.div>

      <div className="space-y-6">
        {[
          { title: "1️⃣ Hitung Kebutuhan Pakan", desc: "Gunakan kalkulator pakan ayam." },
          { title: "2️⃣ Kirim ke WhatsApp", desc: "Hasil otomatis dikirim ke WA." },
          { title: "3️⃣ Konsultasi & Konfirmasi", desc: "Kami bantu rekomendasi terbaik." },
          { title: "4️⃣ Pengiriman", desc: "Area Jawa Tengah & sekitarnya." },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900 border border-white/10 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold text-teal-300 mb-2">
              {step.title}
            </h2>
            <p className="text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-gray-900 border border-green-500/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap Pesan?</h2>
        <a
          href={createWaLink(
            "Halo Sapari Farm 👋, saya ingin konsultasi dan pesan pakan ayam."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-xl"
        >
          💬 Chat via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CaraPesan;
