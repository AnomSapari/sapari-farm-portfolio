import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EdukasiSkill() {
  const skills = [
    {
      title: 'React & Vite',
      description: 'Membangun aplikasi web modern, cepat, dan responsif dengan React + Vite. Saya gunakan untuk portfolio ini.',
      icon: '⚛️',
    },
    {
      title: 'Tailwind CSS',
      description: 'Desain UI cepat dan konsisten dengan utility-first CSS. Dark mode & mobile-first selalu jadi prioritas.',
      icon: '🎨',
    },
    {
      title: 'Framer Motion',
      description: 'Animasi halus untuk meningkatkan UX. Contoh: modal, hover scale, dan transisi halaman.',
      icon: '✨',
    },
    {
      title: 'Admin Dashboard',
      description: 'Membuat dashboard untuk pencatatan data (contoh: pakan ayam, catatan harian) dengan localStorage & React.',
      icon: '📊',
    },
    {
      title: 'Git & Vercel',
      description: 'Workflow deployment otomatis dengan GitHub + Vercel untuk update live tanpa ribet.',
      icon: '🚀',
    },
  ];

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
            Berbagi pengetahuan dan pengalaman saya dalam dunia pengembangan web dan teknologi.
          </p>
        </div>

        {/* Grid Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="text-4xl md:text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 md:mt-16 text-gray-500 dark:text-gray-400 text-base md:text-lg">
          Ingin tutorial lebih detail atau kolaborasi project? Hubungi saya di{' '}
          <Link to="/contact" className="text-teal-500 hover:underline font-medium">
            Contact
          </Link>
          !
        </p>
      </div>
    </motion.section>
  );
}