import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconLeaf
} from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Kalkulator Pakan', path: '/kalkulator-pakan' },
  { name: 'Produk Pakan', path: '/products' },
  { name: 'Cara Pesan', path: '/cara-pesan' },
  { name: 'Kontak', path: '/contact' },
] as { name: string; path: string }[];


  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-emerald-500/20"
      >
        <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <IconLeaf className="w-9 h-9 text-emerald-400" />
            <span className="text-2xl md:text-3xl font-bold text-white">
              Sapari Farm
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-400 font-semibold'
                    : 'text-gray-300 hover:text-emerald-400 transition'
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* DROPDOWN EDUKASI */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                aria-haspopup="true"
                aria-expanded={openDropdown}
                className="flex items-center gap-1 text-gray-300 hover:text-emerald-400"
              >
                Edukasi
                <IconChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-3 w-56 rounded-xl bg-gray-900 border border-emerald-500/20 shadow-xl p-4 space-y-3"
                  >
                    <NavLink
                      to="/edukasi-peternakan"
                      onClick={() => setOpenDropdown(false)}
                      className="block hover:text-emerald-400"
                    >
                      Edukasi Peternakan
                    </NavLink>
                    <NavLink
                      to="/edukasi-skill"
                      onClick={() => setOpenDropdown(false)}
                      className="block hover:text-emerald-400"
                    >
                      Edukasi Skill
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpenDrawer(true)}
            className="lg:hidden text-white"
          >
            <IconMenu2 className="w-8 h-8" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {openDrawer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenDrawer(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 w-80 h-full bg-gray-900 z-50 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-white">
                  Sapari Farm
                </span>
                <button onClick={() => setOpenDrawer(false)}>
                  <IconX className="w-7 h-7 text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpenDrawer(false)}
                    className="text-gray-300 hover:text-emerald-400"
                  >
                    {item.name}
                  </NavLink>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <p className="mb-3 font-semibold text-gray-400">Edukasi</p>
                  <NavLink
                    to="/edukasi-peternakan"
                    onClick={() => setOpenDrawer(false)}
                    className="block mb-2 hover:text-emerald-400"
                  >
                    Edukasi Peternakan
                  </NavLink>
                  <NavLink
                    to="/edukasi-skill"
                    onClick={() => setOpenDrawer(false)}
                    className="block hover:text-emerald-400"
                  >
                    Edukasi Skill
                  </NavLink>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
