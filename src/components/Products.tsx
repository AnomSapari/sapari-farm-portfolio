import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  stock?: string;
  waText?: string; // Teks default untuk WA
  shopeeLink?: string; // Link langsung ke produk Shopee (opsional)
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Bibit Ayam KUB Unggul',
    image: '/images/bibit-kub.jpg',
    price: 'Rp 50.000 / ekor',
    description: 'Bibit ayam KUB berkualitas tinggi, sehat, pertumbuhan cepat. Vaksin lengkap.',
    stock: 'Tersedia 500 ekor',
    waText: 'Halo, saya mau pesan Bibit Ayam KUB Unggul. Stok ada?',
    shopeeLink: 'https://shopee.co.id/product-link-bibit-kub', // Ganti dengan link asli kamu
  },
  {
    id: 2,
    name: 'DOC Ayam Kampung',
    image: '/images/doc-ayam.jpg',
    price: 'Rp 8.000 / ekor',
    description: 'Day Old Chick ayam kampung unggul, produksi telur tinggi.',
    stock: 'Tersedia 1000 ekor',
    waText: 'Halo, saya mau pesan DOC Ayam Kampung. Info stok dan pengiriman?',
    shopeeLink: 'https://shopee.co.id/product-link-doc-ayam',
  },
  // Tambah produk lain di sini
];

export default function Products() {
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 dark:text-green-400">
            Produk Seller Sapari Farm
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
            Bibit ayam KUB, DOC, pakan berkualitas – siap dikirim ke seluruh Indonesia
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="mt-2 text-lg font-semibold text-green-600">{item.price}</p>
                {item.stock && <p className="mt-1 text-sm text-gray-500">{item.stock}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail */}
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
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 md:h-96 object-cover rounded-t-3xl mb-6" />
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
                {/* Pesan via WA */}
                <a
                  href={`https://wa.me/6283891515097?text=${encodeURIComponent(selectedItem.waText || 'Halo, saya tertarik pesan ' + selectedItem.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-green-600 text-white text-xl font-bold rounded-2xl hover:bg-green-700 transition shadow-lg flex-1 text-center"
                >
                  📱 Pesan via WhatsApp
                </a>

                {/* Link ke Shopee/Tokopedia (opsional) */}
                {selectedItem.shopeeLink && (
                  <a
                    href={selectedItem.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-orange-500 text-white text-xl font-bold rounded-2xl hover:bg-orange-600 transition shadow-lg flex-1 text-center"
                  >
                    🛒 Beli di Shopee
                  </a>
                )}

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