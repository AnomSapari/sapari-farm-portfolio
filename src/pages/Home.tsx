import { motion } from 'framer-motion';
import { LeaveCard } from '../components/LeaveCard';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;

  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      {/* LEFT CONTENT */}
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        {/* Eyebrow */}
        <div className="flex gap-2 text-md lg:text-xl font-medium font-sora text-teal-400">
          <span>Kalkulator Pakan Ayam</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Hitung Kebutuhan Pakan Ayam Anda
        </h1>

        {/* SUBHEADLINE */}
        <div>
          <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
            Akurat • Praktis • Sesuai Umur Ayam
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mt-1">
            Untuk peternak broiler & petelur skala kecil hingga menengah
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-center md:text-start text-sm md:text-base max-w-xl text-gray-300">
          Website ini membantu peternak menghitung kebutuhan pakan ayam
          berdasarkan jumlah dan umur ayam, sekaligus memudahkan pemesanan
          pakan langsung ke supplier terpercaya tanpa ribet.
        </p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={resume.initial}
          animate={resume.animated}
          transition={resume.transition}
          className="flex gap-4 flex-wrap justify-center md:justify-start"
        >
          {/* Kalkulator */}
          <Link to="/kalkulator-pakan">
            <div className="rounded-3xl border px-6 py-3 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black font-semibold">
              Hitung Pakan Sekarang
            </div>
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6283891515097"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-3xl border px-6 py-3 border-white text-white hover:bg-white hover:text-black font-semibold">
              Pesan via WhatsApp
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden rounded-xl"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="images/KUB.jpeg"
          alt="Peternakan Ayam"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* BADGE */}
      <LeaveCard label="Sapari Farm" />
    </section>
  );
};
