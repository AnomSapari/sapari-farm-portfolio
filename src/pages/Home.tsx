import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { LeaveCard } from '../components/LeaveCard'
import { HomeMotion } from '../common/motion/Home'

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion

  return (
    <section className="flex flex-col lg:flex-row min-h-[70vh] p-6 items-center">
      
      {/* LEFT CONTENT */}
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="text-teal-400 font-medium text-lg">
          Kalkulator Pakan Ayam
        </div>

        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Hitung Kebutuhan Pakan Ayam Anda
        </h1>

        <div>
          <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
            Akurat • Praktis • Sesuai Umur Ayam
          </h2>
          <p className="text-gray-400 mt-1">
            Untuk peternak broiler & petelur
          </p>
        </div>

        <p className="text-gray-300 max-w-xl text-center md:text-left">
          Website ini membantu peternak menghitung kebutuhan pakan ayam
          berdasarkan jumlah dan umur ayam.
        </p>

        {/* CTA */}
        <motion.div
          initial={resume.initial}
          animate={resume.animated}
          transition={resume.transition}
          className="flex gap-4 flex-wrap"
        >
          <NavLink
            to="/learning/farming/kalkulator"
            className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition"
          >
            Hitung Pakan Sekarang
          </NavLink>

          <a
            href="https://wa.me/6283891515097"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Pesan via WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center mt-10 lg:mt-0"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/images/KUB.jpeg"
          alt="Peternakan Ayam"
          className="max-w-full object-contain"
        />
      </motion.div>

      <LeaveCard label="Sapari Farm" />
    </section>
  )
}

export default Home
