import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Bibit Ayam KUB Unggul',
    image: '/images/bibit-kub.jpg',  // Upload gambar ke public/images
    price: 'Rp 50.000 / ekor',
    description: 'Bibit ayam KUB berkualitas tinggi, sehat, pertumbuhan cepat, cocok untuk peternak mandiri. Tersedia usia 1-4 minggu.',
  },
  {
    id: 2,
    name: 'DOC Ayam Kampung',
    image: '/images/doc-ayam.jpg',
    price: 'Rp 8.000 / ekor',
    description: 'Day Old Chick ayam kampung unggul, vaksin lengkap, produksi telur tinggi. Pengiriman aman ke seluruh Indonesia.',
  },
  {
    id: 3,
    name: 'Pakan Ayam Berkualitas',
    image: '/images/pakan-ayam.jpg',
    price: 'Rp 350.000 / sak (50kg)',
    description: 'Pakan starter/prestarter untuk ayam KUB, tinggi protein, tanpa hormon. Cocok untuk pertumbuhan optimal.',
  },
  // Tambah produk lain kalau perlu
];

export default function Products() {
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">Produk Sapari Farm</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Bibit ayam KUB, DOC, pakan berkualitas – siap dikirim ke seluruh Indonesia</p>
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
              <p className="mt-3 text-xl font-semibold text-green-600">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 object-cover rounded-t-3xl mb-6" />
            <h2 className="text-3xl font-bold text-center mb-4">{selectedItem.name}</h2>
            <p className="text-xl font-semibold text-center text-green-600 mb-6">{selectedItem.price}</p>
            <p className="text-lg text-center mb-8">{selectedItem.description}</p>
            <div className="flex justify-center gap-6">
              <a
                href={`https://wa.me/6283891515097?text=Halo, saya tertarik pesan ${selectedItem.name} seharga ${selectedItem.price}. Stok ada?`}
                target="_blank"
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700"
              >
                Pesan via WA
              </a>
              <button onClick={() => setSelectedItem(null)} className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700">
                Tutup
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};