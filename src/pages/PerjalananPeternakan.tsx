import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =====================
   TYPE DEFINISI (WAJIB)
===================== */
type TimelineItem = {
  date: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
};

/* =====================
   DATA TIMELINE
===================== */
const timeline: TimelineItem[] = [
  {
    date: 'Okt 2025',
    title: 'Persiapan Kandang Ayam KUB',
    description:
      'Tahap awal dimulai dengan menyiapkan kandang khusus untuk bibit ayam KUB, meliputi pembersihan area, pemasangan tempat pakan dan minum, serta pengaturan suhu agar DOC nyaman.',
    image: '/images/persiapan-kandang.jpg',
  },
  {
    date: '29 Okt 2025',
    title: 'Pembelian Bibit Ayam KUB',
    description:
      'Melakukan pembelian bibit ayam KUB secara online dengan harga Rp100.000 dan mendapatkan 13 ekor DOC.',
    image: '/images/pembelian-bibit-kub.jpg',
  },
  {
    date: 'Okt 2025',
    title: 'KUB Usia 1–7 Hari',
    description:
      'Fokus pada pemberian pakan starter, vaksinasi awal, serta pemantauan kesehatan ayam setiap hari.',
    image: '/images/bibit-ayam-kub.jpg',
  },
  {
    date: 'Nov 2025',
    title: 'Perawatan KUB Usia 8–21 Hari',
    description:
      'Pemantauan kesehatan dan pemberian pakan dilakukan secara rutin setiap hari.',
    image: '/images/usia-6-minggu.jpg',
  },
  {
    date: 'Des 2025',
    title: 'Ayam Diumbar di Halaman Rumah',
    description:
      'Ayam KUB mulai diumbar di halaman belakang rumah. Lahan semakin sempit sehingga perlu pengaturan ruang yang efisien.',
    video: '/videos/diumbar.mp4',
  },
];

/* =====================
   COMPONENT
===================== */
export default function PerjalananPeternakan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400">
          Perjalanan Peternakan Sapari Farm
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Kronologi dan pengalaman beternak ayam KUB dari nol.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto mt-12 space-y-12">
        {timeline.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                isReverse ? 'md:flex-row-reverse' : ''
              } gap-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl`}
            >
              {/* TEXT */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>

              {/* MEDIA */}
              <div className="w-full md:w-1/2">
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FOOTER */}
      <p className="text-center mt-12 text-gray-600 dark:text-gray-400">
        Cerita akan terus diperbarui. Mau kolaborasi ternak?{' '}
        <Link to="/contact" className="text-green-600 hover:underline">
          Hubungi saya
        </Link>
        .
      </p>
    </motion.section>
  );
}
