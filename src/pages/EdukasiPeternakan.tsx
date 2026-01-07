import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // ← Import ini wajib agar <Link> dikenali

export default function EdukasiPeternakan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 dark:text-green-400">
            Edukasi Peternakan Ayam KUB
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Berbagi pengalaman dan tips beternak ayam KUB, DOC, pakan, kandang, hingga penjualan produk.
          </p>
        </div>

        {/* Konten Grid Responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
              Tips Kandang & Lingkungan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Kandang harus bersih, ventilasi baik, dan terhindar dari predator. Gunakan alas sekam untuk menjaga kebersihan.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
              Pakan & Nutrisi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Gunakan pakan starter/prestarter berkualitas tinggi, tambah vitamin, dan pastikan air minum selalu tersedia.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
              Vaksinasi & Kesehatan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Vaksinasi rutin untuk cegah ND, IBD, dan penyakit lain. Pantau gejala seperti lesu atau diare.
            </p>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
>
  <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
    Penjualan & Pemasaran
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
    Strategi jual ayam KUB, DOC, dan produk lain via website, WA, dan marketplace lokal.
  </p>
</motion.div>

          {/* Tambah card lain sesuai pengalaman Anda */}
        </div>

        <p className="text-center mt-12 md:mt-16 text-gray-500 dark:text-gray-400 text-base md:text-lg">
          Lebih detail akan saya tambah seiring waktu. Ada pertanyaan seputar peternakan? Hubungi saya di{' '}
          <Link to="/contact" className="text-green-500 hover:underline font-medium">
            Contact
          </Link>
          !
        </p>
      </div>
    </motion.section>
  );
}