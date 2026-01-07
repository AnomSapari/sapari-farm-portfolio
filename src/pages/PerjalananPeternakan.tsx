import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const timeline = [
  {
    date: 'Jan 2023',
    title: 'Mulai Beternak Ayam KUB',
    description: 'Pembelian DOC pertama, setup kandang sederhana.',
    image: '/images/start-ternak.jpg',
  },
  {
    date: 'Mar 2023',
    title: 'Pertumbuhan Awal',
    description: 'Pakan starter, vaksinasi, dan monitoring kesehatan.',
    image: '/images/pertumbuhan-awal.jpg',
  },
  {
    date: 'Jun 2023',
    title: 'Panen Pertama',
    description: 'Ayam siap potong, penjualan lokal, dan evaluasi.',
    image: '/images/panen-pertama.jpg',
  },
  // Tambah timeline baru di sini
];

export default function PerjalananPeternakan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400">
          Perjalanan Peternakan Sapari Farm
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Kronologi dan pengalaman beternak ayam KUB dari nol.
        </p>
      </div>

      {/* Timeline Responsif */}
      <div className="max-w-4xl mx-auto mt-12 space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-center mt-12 text-gray-600 dark:text-gray-400">
        Cerita akan terus update. Mau kolaborasi ternak? <Link to="/contact" className="text-green-600 hover:underline">Hubungi saya</Link>.
      </p>
    </motion.section>
  );
}