import { motion } from 'framer-motion';
import { LeaveCard } from '../components/LeaveCard';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Hi there!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          AnomSapari
        </h1>
        <div>
  <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
    Code by Day, Farm by Passion
  </h2>
  <p className="text-gray-600 text-sm md:text-lg mt-1">
    Web Development & Poultry Farming Solutions
  </p>
</div>

        <p className="text-center md:text-start text-xs md:text-base max-w-xl">
  Saya adalah seorang Frontend Developer mandiri yang membangun website modern dan fungsional.
  Di luar dunia teknologi, saya mendokumentasikan perjalanan membangun 
  <strong> Sapari Farm</strong> — peternakan ayam KUB skala kecil,
  mulai dari pembuatan kandang, manajemen pakan, hingga evaluasi harian
  sebagai proses pembelajaran berkelanjutan.
</p>

       <motion.div
  initial={resume.initial}
  animate={resume.animated}
  transition={resume.transition}
  className="flex gap-4 flex-wrap justify-center md:justify-start"
>
  <Link to="./Anomsapari-Frontend-Developer-CV.pdf" target="_blank">
    <div className="rounded-3xl border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black">
      Download Resume
    </div>
  </Link>

  <Link to="/farm">
    <div className="rounded-3xl border px-4 py-2 border-white text-white hover:bg-white hover:text-black">
      Sapari Farm Journey
    </div>
  </Link>
</motion.div>



      </motion.div>
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="images/KUB.jpeg"
          alt="profile"
          width="100%"
          height="100%"
        />
      </motion.div>

      <LeaveCard label="Frontend Dev" />
    </section>
  );
};
