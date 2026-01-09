import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data konten peternakan (tinggal tambah di sini)
const peternakanContent = [
  {
    title: 'Setup Kandang Ayam KUB',
    description: ' kandang sederhana tapi fungsional 20 ekor ayam.',
    type: 'image',
    url: '/images/kandangbording.jpg',
  },
  {
    title: 'Pemberian Pakan Harian',
    description: 'Jadwal dan jenis pakan starter, grower, finisher untuk pertumbuhan optimal.',
    type: 'video',
    url: '/videos/kandang minimalis.mp4',
    thumbnail: '/images/pakan-thumbnail.jpg',
  },
  {
    title: 'Vaksinasi KUB',
    description: 'Tips vaksin ND dan IBD pada KUB agar ayam sehat dan minim kematian.',
    type: 'image',
    url: '/images/KUB.jpeg',
  },

  {
  title: 'Cek perkembangan',
  description: 'Perkembangan di usia 2 minggu.',
  type: 'video', // atau 'image'
  url: '/videos/perkembangan.mp4', // atau '/videos/video-baru.mp4'
  thumbnail: '/images/thumbnail.jpg' // Opsional untuk video
},
  // Tambah konten baru di sini
];

export default function EdukasiPeternakan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 dark:text-green-400">
            Edukasi Peternakan Ayam KUB
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Belajar beternak ayam KUB, DOC, dan pengelolaan pakan.
          </p>
        </div>

        {/* Grid Konten Responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {peternakanContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Media */}
              {content.type === 'video' ? (
                <div className="relative">
                  <video
                    src={content.url}
                    controls
                    poster={content.thumbnail}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
              ) : (
                <img
                  src={content.url}
                  alt={content.title}
                  className="w-full h-48 md:h-64 object-cover"
                />
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-600 dark:text-green-400">
                  {content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                  {content.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 md:mt-16 text-gray-500 dark:text-gray-400 text-base md:text-lg">
          Ingin sharing pengalaman atau tanya seputar peternakan? Hubungi saya di{' '}
          <Link to="/contact" className="text-green-500 hover:underline font-medium">
            Contact
          </Link>
          !
        </p>
      </div>
    </motion.section>
  );
}