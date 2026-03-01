import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FarmPakan: React.FC = () => {
  return (
    <section className="min-h-screen p-6 md:p-12 text-white">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Manajemen Pakan Ayam KUB
        </h1>

        <p className="text-gray-400 md:text-lg">
          Catatan kebutuhan pakan ayam KUB berdasarkan usia,
          disusun dari praktik lapangan di Sapari Farm.
        </p>
      </motion.div>

      {/* Info Ringkas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl mx-auto mt-10 bg-white/5 border border-white/10 rounded-2xl p-6"
      >
        <p className="text-sm md:text-base text-gray-300">
          Sistem pakan dibagi berdasarkan fase umur ayam:
          <strong> Starter, Grower, dan Layer</strong>.
          Halaman ini fokus pada fase grower karena ayam KUB
          di Sapari Farm berada pada usia <strong>8–16 minggu</strong>.
        </p>
      </motion.div>

      {/* Tabel Pakan */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto mt-12 overflow-x-auto"
      >
        <table className="w-full border border-white/10 text-sm md:text-base">
          <thead className="bg-white/10">
            <tr>
              <th className="p-3 border border-white/10 text-left">Usia Ayam</th>
              <th className="p-3 border border-white/10 text-left">Fase</th>
              <th className="p-3 border border-white/10 text-left">
                Konsumsi / Ekor / Hari
              </th>
              <th className="p-3 border border-white/10 text-left">
                Total 15 Ekor / Hari
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-white/5">
              <td className="p-3 border border-white/10">0–4 minggu</td>
              <td className="p-3 border border-white/10">Starter</td>
              <td className="p-3 border border-white/10">20–35 g</td>
              <td className="p-3 border border-white/10">300–525 g</td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 border border-white/10">5–8 minggu</td>
              <td className="p-3 border border-white/10">Grower awal</td>
              <td className="p-3 border border-white/10">35–45 g</td>
              <td className="p-3 border border-white/10">525–675 g</td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 border border-white/10">9–12 minggu</td>
              <td className="p-3 border border-white/10">Grower</td>
              <td className="p-3 border border-white/10">55–65 g</td>
              <td className="p-3 border border-white/10 font-semibold">
                825–975 g
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 border border-white/10">13–16 minggu</td>
              <td className="p-3 border border-white/10">Grower akhir</td>
              <td className="p-3 border border-white/10">65–75 g</td>
              <td className="p-3 border border-white/10">975–1.125 g</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Catatan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-10 text-sm text-gray-400 space-y-3"
      >
        <p>
          📌 Contoh kasus Sapari Farm:  
          <strong> 15 ekor ayam KUB usia 12 minggu ≈ ±1 kg pakan / hari</strong>,
          dibagi pagi dan sore.
        </p>

        <p>
          Catatan ini bersifat dinamis dan dapat disesuaikan
          dengan kondisi ayam, sistem kandang, dan aktivitas harian.
        </p>

        <div className="flex gap-4 flex-wrap pt-4">
          <Link
            to="/farm"
            className="text-teal-500 hover:underline"
          >
            ← Kembali ke Sapari Farm
          </Link>

          <Link
            to="/farm/kalkulator"
            className="rounded-xl border border-teal-500 px-4 py-2
                       text-teal-500 hover:bg-teal-500 hover:text-black
                       transition"
          >
            Hitung & Export ke Excel
          </Link>
        </div>
      </motion.div>

    </section>
  );
};

export default FarmPakan;