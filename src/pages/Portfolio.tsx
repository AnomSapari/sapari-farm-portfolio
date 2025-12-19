import { motion } from 'framer-motion';
import { useState } from 'react';
import { IconBrandCodepen } from '@tabler/icons-react';

// Type untuk item produk
interface PortfolioItem {
  id: number;
  name: string;
  image: string;
  price?: string;
  description: string;
}

// Animasi section
const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const sectionDescription = 'Produk & Proyek Sapari Farm';

  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      name: 'Ayam KUB (Kampung Unggul Balitbangtan)',
      image: '/images/kub.jpeg',
      price: 'Rp 50.000 - Rp 100.000 / ekor (tergantung umur)',
      description: 'Ayam KUB unggul, sehat bebas hormon, pertumbuhan cepat, cocok untuk peternakan mandiri. Tersedia DOC dan ayam dewasa.',
    },
    {
      id: 2,
      name: 'DOC Ayam Petelur',
      image: '/images/petelur.png',
      price: 'Rp 8.000 - Rp 12.000 / ekor',
      description: 'Day Old Chick petelur berkualitas tinggi, produksi telur stabil hingga 300 butir/tahun.',
    },
    {
      id: 12,
      name: 'Ayam Kampung Siap Potong',
      image: '/images/ayam.jpg',
      price: 'Rp 80.000 / kg',
      description: 'Ayam kampung segar, daging empuk dan gurih, dipelihara alami tanpa antibiotik berlebih.',
    },
    {
      id: 13,
      name: 'ID Card Kulit Custom',
      image: '/images/card.jpg',
      price: 'Mulai Rp 100.000 / pcs (desain custom gratis)',
      description: 'ID card dari kulit sapi asli, tahan lama, elegan untuk karyawan, perusahaan, atau event. Bisa emboss logo dan nama.',
    },
    {
      id: 15,
      name: 'Paket Starter Peternakan',
      image: '/images/5.jpg',
      price: 'Rp 5.000.000 (100 ekor DOC + pakan awal)',
      description: 'Paket lengkap untuk pemula: 100 ekor DOC KUB + pakan starter + konsultasi gratis pemeliharaan.',
    },
  ];

  return (
    <motion.section
      initial={sectionVariants.initial}
      whileInView={sectionVariants.animate}
      transition={sectionVariants.transition}
      viewport={{ once: true }}
      className="space-y-12 py-16 bg-gray-50 dark:bg-gray-900"
    >
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-4 text-green-600 dark:text-green-400">
          <IconBrandCodepen size={40} />
          <h2 className="text-4xl lg:text-5xl font-bold">Produk & Portfolio</h2>
          <IconBrandCodepen size={40} />
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400">{sectionDescription}</p>
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {portfolios.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition hover:-translate-y-2"
            onClick={() => setSelectedItem(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
              {item.price && (
                <p className="mt-3 text-xl font-semibold text-green-600">{item.price}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail - Diperbesar & Responsif */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gambar Besar */}
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-80 md:h-96 lg:h-screen max-h-96 object-cover rounded-t-3xl"
              />
            </div>

                         {/* Detail Produk */}
              <div className="p-8 md:p-12 space-y-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 dark:text-green-400">
                  {selectedItem.name}
                </h2>

                {selectedItem.price && (
                  <p className="text-3xl md:text-4xl font-bold text-center text-green-600">
                    Harga: {selectedItem.price}
                  </p>
                )}

                {/* Deskripsi */}
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
                  {selectedItem.description}
                </p>

                {/* Box Kuning Cara Pembayaran - Pasti Muncul & Mencolok */}
                <div className="bg-yellow-100 dark:bg-yellow-900/70 p-8 md:p-10 rounded-3xl border-4 border-yellow-400 dark:border-yellow-500 text-center space-y-6 shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-yellow-800 dark:text-yellow-200">
                    💳 Cara Pembayaran
                  </p>
                  <div className="space-y-5 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                    <p>
                      <span className="text-yellow-700 dark:text-yellow-300">GOPAY:</span> 083891515097 a/n ANOM SAPARI
                    </p>
                    <p>
                      <span className="text-yellow-700 dark:text-yellow-300">Mandiri:</span> 129 0010032031 a/n ANOM SAPARI
                    </p>
                    <p>
                      <span className="text-yellow-700 dark:text-yellow-300">DANA:</span> 083891515097 a/n ANOM SAPARI
                    </p>
                  </div>
                  <p className="text-base md:text-lg italic text-gray-700 dark:text-gray-300 pt-6 border-t-2 border-yellow-300 dark:border-yellow-600">
                    📤 Kirim bukti transfer ke WhatsApp untuk konfirmasi pesanan secepatnya
                  </p>
                </div>

                {/* Tombol WhatsApp & Tutup */}
                <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
                  <a
                    href={`https://wa.me/6283891515097?text=Halo%20Sapari%20Farm,%20saya%20tertarik%20dengan%20${encodeURIComponent(selectedItem.name)}.%20Info%20harga%20%26%20ketersediaan%20dong!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-12 py-6 bg-green-600 text-white text-2xl md:text-3xl font-bold rounded-2xl hover:bg-green-700 transition shadow-2xl text-center flex items-center justify-center gap-3"
                  >
                    <span>📱</span> Pesan Sekarang via WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full md:w-auto px-12 py-6 bg-red-600 text-white text-2xl font-bold rounded-2xl hover:bg-red-700 transition shadow-lg"
                  >
                    Tutup
                  </button>
                </div>
              </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};