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
          <span>Hello,</span>
          <span className="animate-waving-hand text-4xl">👋</span>
        </h3>
      </div>

      {/* Foto Profil */}
      <div className="flex justify-center my-12">
        <div className="relative">
          <img
            src="/images/profile.jpg"  // Pastikan foto sudah di public/images/
            alt="Anom Sapari - Sapari Farm"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-8 border-green-600"
          />
          <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-75"></div>
        </div>
      </div>

 {/* Deskripsi Utama */}
<div
  className="
    max-w-4xl mx-auto
    border-l-4 border-emerald-400 dark:border-emerald-600
    bg-white/80 dark:bg-emerald-950/40
    rounded-xl
    p-5 sm:p-6 lg:p-8
    space-y-4
    text-sm sm:text-base lg:text-lg
    leading-relaxed
    text-gray-700 dark:text-gray-300
    shadow-sm
  "
>
  <p>
    Website ini dikelola oleh seorang web developer mandiri yang juga aktif
    sebagai peternak ayam KUB (Kampung Unggul Balitbangtan). Kami menggabungkan
    teknologi digital dengan pengalaman nyata di lapangan.
  </p>

  <p className="font-medium text-gray-800 dark:text-gray-200">
    Platform ini menjadi penghubung antara dunia digital dan peternakan,
    menghadirkan solusi praktis, edukatif, dan terpercaya bagi masyarakat
    dan pelaku usaha.
  </p>
</div>


      {/* Box Sapari Farm */}
<div
  className="
    mt-14 max-w-3xl mx-auto
    bg-gradient-to-br from-emerald-50 to-green-100
    dark:from-emerald-950 dark:to-green-900
    rounded-2xl
    border border-emerald-300 dark:border-emerald-700
    shadow-xl
    p-6 sm:p-8 lg:p-10
  "
>
  <h3
    className="
      text-xl sm:text-2xl lg:text-3xl
      font-bold
      mb-6
      text-center
      text-emerald-800 dark:text-emerald-300
    "
  >
    Tentang Sapari Farm
  </h3>

  <div
    className="
      space-y-4
      text-sm sm:text-base lg:text-lg
      leading-relaxed
      text-gray-700 dark:text-gray-300
    "
  >
    <p>
      Sapari Farm bergerak di bidang peternakan ayam KUB (Kampung Unggul
      Balitbangtan) dan penyediaan DOC berkualitas, dengan dukungan teknologi
      digital untuk pengembangan usaha.
    </p>

    <p>
      Kami berfokus pada penyediaan DOC ayam KUB yang sehat, unggul, dan
      dikelola dengan manajemen pemeliharaan yang baik.
    </p>

    <p>
      Selain peternakan, Sapari Farm juga melayani pembuatan website modern
      untuk UMKM dan peternak agar bisnis lebih dikenal secara online.
    </p>

    <p className="font-medium text-emerald-800 dark:text-emerald-400">
      Sapari Farm hadir sebagai mitra terpercaya di bidang peternakan dan
      solusi digital.
    </p>
  </div>
</div>


    </motion.section>
  );
};