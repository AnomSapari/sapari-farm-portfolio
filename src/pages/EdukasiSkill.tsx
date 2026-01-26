import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data konten edukasi (kamu tinggal tambah di sini)
type SkillItem = {
  title: string;
  description: string;
  image: string;
};

const skills: SkillItem[] = [
  {
    title: 'Belajar Manajemen Pakan',
    description:
      'Mempelajari jenis pakan starter dan grower serta jadwal pemberian yang tepat.',
    image: '/images/belajar-pakan.jpg',
  },
  {
    title: 'Belajar Perawatan & Kesehatan',
    description:
      'Belajar mengenali ciri ayam sehat, vaksinasi, dan penanganan awal penyakit.',
    image: '/images/belajar-kesehatan.jpg',
  },
  {
    title: 'Belajar Manajemen Kandang',
    description:
      'Mengatur kebersihan kandang, sirkulasi udara, dan kepadatan ayam.',
    image: '/images/belajar-kandang.jpg',
  },
];

const skillContent = [
  {
    title: 'React & Vite Dasar',
    description: 'Cara setup project React cepat dengan Vite, struktur folder, dan komponen pertama.',
    type: 'video', // atau 'image'
    url: '/videos/web.webm', // Upload video ke public/videos/
    thumbnail: '/images/react-thumbnail.jpg', // Opsional thumbnail untuk video
  },
  {
    title: 'Tailwind CSS Tips',
    description: 'Cara membuat dark mode, responsive grid, dan custom theme dengan Tailwind.',
    type: 'video',
    url: '/videos/darktaliwin.mp4', // Upload gambar ke public/images/
  },
  {
    title: 'Coding Android',
    description: 'Belajar Coding di android.',
    type: 'video',
    url: '/videos/codingandroid.mp4',
    thumbnail: '/images/framer-thumbnail.jpg',
  },
  {
  title: 'BI/BOSA',
  description: 'Belom ada Project.',
  type: 'image', // atau 'video'
  url: '/images/card.jpg', // atau '/videos/video-baru.mp4'
  thumbnail: '/images/thumbnail.jpg' // Opsional untuk video
},
  // Tambah konten baru di sini, contoh:
  // {
  //   title: 'Git Workflow Saya',
  //   description: 'Cara commit, branch, push, dan deploy ke Vercel.',
  //   type: 'image',
  //   url: '/images/git-workflow-diagram.png',
  // },
];

export default function EdukasiSkill() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-600 dark:text-teal-400">
            Edukasi Skill & Expertise
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Tutorial dan tips pengembangan web yang saya pakai sehari-hari.
          </p>
        </div>

        {/* Grid Konten Responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Media (Gambar atau Video) */}
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

              {/* Konten Text */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-teal-600 dark:text-teal-400">
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
          Ingin tutorial lebih detail atau kolaborasi? Hubungi saya di{' '}
          <Link to="/contact" className="text-teal-500 hover:underline font-medium">
            Contact
          </Link>
          !
        </p>
      </div>
      {/* HASIL BELAJAR & SKILL */}
<div className="max-w-6xl mx-auto mt-20">
  <div className="text-center mb-12 space-y-4">
    <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400">
      Hasil Belajar & Pengembangan Skill
    </h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Berikut adalah dokumentasi proses belajar dan peningkatan kemampuan saya
      dalam beternak ayam KUB.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={skill.image}
          alt={skill.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {skill.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </motion.section>
  );
}