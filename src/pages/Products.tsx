import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  stock?: string; // Opsional: stok tersedia
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Bibit Ayam KUB Unggul',
    image: '/images/bibit-kub.jpg',
    price: 'Rp 50.000 / ekor',
    description: 'Bibit ayam KUB berkualitas tinggi, sehat, pertumbuhan cepat, cocok untuk peternak mandiri. Tersedia usia 1-4 minggu. Vaksin lengkap.',
    stock: 'Tersedia 500 ekor',
  },
  {
    id: 2,
    name: 'DOC Ayam Kampung',
    image: '/images/doc-ayam.jpg',
    price: 'Rp 8.000 / ekor',
    description: 'Day Old Chick ayam kampung unggul, produksi telur tinggi, tahan penyakit. Pengiriman aman ke seluruh Indonesia.',
    stock: 'Tersedia 1000 ekor',
  },
  {
    id: 3,
    name: 'Pakan Starter Ayam KUB',
    image: '/images/pakan-starter.jpg',
    price: 'Rp 350.000 / sak (50kg)',
    description: 'Pakan starter berkualitas tinggi, tinggi protein, tanpa hormon. Cocok untuk DOC dan ayam muda.',
    stock: 'Tersedia 200 sak',
  },
  {
    id: 4,
    name: 'Paket Starter Peternakan (100 DOC + Pakan)',
    image: '/images/paket-starter.jpg',
    price: 'Rp 5.000.000 / paket',
    description: 'Paket lengkap untuk pemula: 100 ekor DOC KUB + pakan starter 1 bulan + konsultasi gratis.',
    stock: 'Tersedia 10 paket',
  },
  {
  id: 5,
  name: 'Vitamin Ayam KUB',
  image: '/images/vitamin-ayam.jpg',
  price: 'Rp 75.000 / botol',
  description: 'Vitamin tambahan untuk meningkatkan daya tahan ayam KUB terhadap penyakit.',
  stock: 'Tersedia 300 botol',
},
  // Tambah produk baru di sini
];

export default function Products() {
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 dark:text-green-400">
            Produk Seller Sapari Farm
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
            Bibit ayam KUB, DOC, pakan berkualitas – siap dikirim ke seluruh Indonesia
          </p>
        </div>

        {/* Grid Produk Responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="mt-2 text-lg font-semibold text-green-600">{item.price}</p>
                {item.stock && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.stock}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail Produk */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 md:h-96 object-cover rounded-t-3xl mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-700 dark:text-green-400">
                {selectedItem.name}
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-6">
                {selectedItem.price}
              </p>
              {selectedItem.stock && (
                <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Stok: {selectedItem.stock}
                </p>
              )}
              <p className="text-lg text-center mb-8 text-gray-700 dark:text-gray-300">
                {selectedItem.description}
              </p>

              {/* Cara Pembayaran */}
              <div className="bg-yellow-100 dark:bg-yellow-900/70 p-6 rounded-2xl mb-8">
                <p className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                  💳 Cara Pembayaran
                </p>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>GOPAY: 083891515097 a/n ANOM SAPARI</li>
                  <li>Mandiri: 129 0010032031 a/n ANOM SAPARI</li>
                  <li>DANA: 083891515097 a/n ANOM SAPARI</li>
                </ul>
                <p className="mt-4 text-sm italic text-gray-700 dark:text-gray-300">
                  Kirim bukti transfer ke WA untuk konfirmasi
                </p>
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href={`https://wa.me/6283891515097?text=Halo%20Sapari%20Farm,%20saya%20tertarik%20pesan%20${encodeURIComponent(selectedItem.name)}%20harga%20${encodeURIComponent(selectedItem.price)}.%20Stok%20ada?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-green-600 text-white text-xl font-bold rounded-2xl hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-3"
                >
                  <span>📱</span> Pesan via WhatsApp
                </a>

                <a
                  href="https://checkout.xendit.co/web/LINK_PAYMENT_ANDA" // Ganti dengan link Xendit/Midtrans
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-indigo-600 text-white text-xl font-bold rounded-2xl hover:bg-indigo-700 transition shadow-lg flex items-center justify-center gap-3"
                >
                  <span>💳</span> Bayar Otomatis
                </a>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-10 py-5 bg-red-600 text-white text-xl font-bold rounded-2xl hover:bg-red-700 transition shadow-lg"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}