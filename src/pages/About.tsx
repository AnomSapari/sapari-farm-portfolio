import { motion } from "framer-motion";

// Animasi masuk section
const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const About = () => {
  const sectionDescription = 'A short story of me';

  return (
    <motion.section
      initial={sectionVariants.initial}
      whileInView={sectionVariants.animate}
      transition={sectionVariants.transition}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8 py-16 px-4"
    >
      {/* Header Section: Label + Deskripsi + Icon Daun */}
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center gap-3 text-green-600 dark:text-green-400">
          <span className="text-4xl">🌿</span>
          <h2 className="text-3xl lg:text-4xl font-bold">About</h2>
          <span className="text-4xl">🌿</span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic">
          {sectionDescription}
        </p>
      </div>

      {/* Greeting */}
      <div className="text-center">
        <h3 className="flex items-center justify-center gap-4 text-2xl lg:text-4xl font-medium">
          <span>Hello, saya Anom Sapari</span>
          <span className="animate-waving-hand text-4xl">👋</span>
        </h3>
      </div>

      {/* Foto Profil */}
      <div className="flex justify-center my-12">
        <div className="relative">
          <img
            src="/images/profil-saya.jpg"  // Pastikan foto sudah di public/images/
            alt="Anom Sapari - Sapari Farm"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-8 border-green-600"
          />
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Deskripsi Utama */}
      <div className="max-w-4xl mx-auto space-y-5 text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <p>
          Website ini merupakan platform yang dikelola oleh web developer
          profesional sekaligus peternak ayam KUB (Kampung Unggul Balitbangtan)
          dan DOC berkualitas. Kami menggabungkan teknologi digital dan
          pengalaman di bidang peternakan untuk memberikan solusi terbaik bagi
          pelaku usaha, peternak, dan masyarakat umum.
        </p>
        <p>
          Di bidang pengembangan web, kami menyediakan layanan pembuatan website
          modern, responsif, dan fungsional untuk kebutuhan bisnis, UMKM, maupun
          personal branding. Setiap website dirancang dengan fokus pada
          performa, tampilan profesional, dan kemudahan pengguna.
        </p>
        <p>
          Di bidang peternakan, kami bergerak dalam budidaya dan penjualan ayam
          KUB serta DOC unggulan yang sehat, berkualitas, dan sesuai standar
          pemeliharaan. Kami berkomitmen memberikan edukasi, informasi, dan
          produk terbaik guna mendukung keberhasilan peternak lokal.
        </p>
        <p>
          Dengan mengusung konsep digitalisasi dan kemandirian peternak, website
          ini hadir sebagai pusat informasi, layanan, dan solusi terpercaya.
        </p>
      </div>

      {/* Box Sapari Farm */}
      <div className="mt-16 max-w-4xl mx-auto p-10 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 rounded-3xl border-4 border-green-300 dark:border-green-700 shadow-2xl">
        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-green-800 dark:text-green-300">
          Tentang Sapari Farm
        </h3>
        <div className="space-y-5 text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Sapari Farm adalah usaha yang bergerak di bidang peternakan ayam KUB
            (Kampung Unggul Balitbangtan) dan DOC berkualitas, sekaligus didukung
            oleh keahlian pengembangan website untuk mendukung digitalisasi usaha dan peternakan.
          </p>
          <p>
            Kami berkomitmen menyediakan DOC ayam KUB yang sehat, unggul, dan
            berkualitas, dengan manajemen pemeliharaan yang baik serta perhatian
            penuh pada kesehatan ternak.
          </p>
          <p>
            Selain peternakan, kami juga melayani pembuatan website modern untuk UMKM dan peternak guna meningkatkan visibilitas bisnis di era digital.
          </p>
          <p>
            Dengan pengalaman lapangan dan teknologi, Sapari Farm hadir sebagai mitra terpercaya di bidang peternakan dan solusi digital.
          </p>
        </div>
      </div>
    </motion.section>
  );
};