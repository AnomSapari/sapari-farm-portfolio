import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  stock?: string;
  waText?: string;
  shopeeLink?: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Vaksin ND (Newcastle Disease)',
    image: '/images/vaksin.jpeg',
    price: 'Rp 20.000  / dosis',
    description: 'Vaksin ND (Newcastle Disease) untuk ayam kub, 1 dosis untuk 50 ekor.',
    stock: 'Tersedia ±5 ',
    waText: 'Halo kak, saya mau pesan Vaksin ND. Stok masih ada?',
  },
  {
    id: 2,
    name: 'Ayam PELUNG usia 1 minggu',
    image: '/images/bibit-pelung.jpg',
    price: 'Rp 80.000 / ekor',
    description: 'Ayam KUB usia 1 minggu, sudah vaksin, siap dipelihara intensif.',
    stock: 'Tersedia  8 ekor 4 pasang',
    waText: 'Halo kak, saya mau pesan Ayam Pelung usia 1 minggu. Info stok dan harga?',
  },
  {
    id: 3,
    name: 'Ayam Jago Dewasa',
    image: '/images/ayam.jpg',
    price: 'Rp 400.000 / ekor',
    description: 'Ayam jantan dewasa siap pakai untuk laga atau breeding.',
    stock: 'Tersedia ±2 ekor',
    waText: 'Halo kak, saya tertarik pesan Ayam Jago dewasa. Ada foto/stock ready?',
  },
  {
    id: 4,
    name: 'Vitamin Anti Stress',
    image: '/images/vitaStress.webp',
    price: 'Rp 5.000 / Sachet',
    description: 'Vitamin tambahan untuk meningkatkan daya tahan ayam terhadap stress dan penyakit.',
    stock: 'Tersedia ±300 Sachet',
    waText: 'Halo kak, mau pesan Vitamin Anti Stress. Berapa sachet yang ready?',
  },
  {
    id: 5,
    name: 'Oxytic Laga',
    image: '/images/oxytic-laga.jpg',
    price: 'Rp 50.000 / Botol',
    description: 'Obat luka & infeksi bakteri, mempercepat penyembuhan pada ayam laga.',
    stock: 'Tersedia ±30 Botol',
    waText: 'Halo kak, saya mau pesan Oxytic Laga. Stok botol masih ada?',
  },
  {
    id: 6,
    name: 'Mineral Feed Supplement A',
    image: '/images/Mineral-Feed-Supplement-A.webp',
    price: 'Rp 50.000 / Botol',
    description: 'Supplement mineral lengkap, mencegah lumpuh, kaki bengkok, kurang darah pada ayam.',
    stock: 'Tersedia ±30 Botol',
    waText: 'Halo kak, tertarik pesan Feed Supplement Mineral. Info stok ya?',
  },
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
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400">
            Produk Sapari Farm
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4">
            Bibit ayam KUB, DOC, pakan berkualitas, vitamin & supplement – siap kirim seluruh Indonesia
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                  console.log('Gambar gagal load:', item.image);
                }}
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="mt-1 text-green-600 font-semibold">{item.price}</p>
                {item.stock && <p className="text-gray-500 text-sm mt-1">{item.stock}</p>}
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
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 md:h-96 object-cover rounded-t-3xl mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-green-700 dark:text-green-400">
                {selectedItem.name}
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-2">
                {selectedItem.price}
              </p>
              {selectedItem.stock && (
                <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                  Stok: {selectedItem.stock}
                </p>
              )}
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                {selectedItem.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a
                  href={`https://wa.me/6283891515097?text=${encodeURIComponent(
                    selectedItem.waText || `Halo kak, saya tertarik pesan ${selectedItem.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 text-center flex-1"
                >
                  📱 WhatsApp
                </a>

                {selectedItem.shopeeLink && (
                  <a
                    href={selectedItem.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 text-center flex-1"
                  >
                    🛒 Shopee
                  </a>
                )}

                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 text-center flex-1"
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
