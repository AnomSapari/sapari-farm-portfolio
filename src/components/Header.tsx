import { IconMenu2, IconRobot, IconX, IconChevronDown } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { INavLink } from '../types/common';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false); // Tambah state untuk dropdown

  const navLink: INavLink[] = [
    { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },  // Baru: Halaman upload/view CV
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Produk Seller', path: '/products' },  // Baru: Katalog seller
  { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <>
      {/* Header Utama */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-teal-500/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <IconRobot className="w-10 h-10 md:w-12 md:h-12 text-teal-400" />
              <span className="text-2xl md:text-3xl font-bold text-white">AnomSapari</span>
            </motion.div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLink.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-teal-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Dropdown Edukasi */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:text-teal-400 font-medium transition-colors duration-300 flex items-center gap-1"
              >
                Edukasi
                <IconChevronDown className="w-5 h-5" />
              </button>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 bg-gray-900 border border-teal-500/20 rounded-xl shadow-2xl p-4 space-y-3"
                >
                  <Link to="/edukasi-skill" className="block hover:text-teal-400">Edukasi Skill</Link>
                  <Link to="/edukasi-peternakan" className="block hover:text-teal-400">Edukasi Peternakan</Link>
                  <Link to="/perjalanan-peternakan" className="block hover:text-teal-400">Perjalanan Peternakan</Link>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Hamburger Mobile */}
          <button onClick={toggleDrawer} className="lg:hidden text-white" aria-label="Toggle menu">
            <IconMenu2 className="w-8 h-8" />
          </button>
        </div>
      </motion.header>

      {/* Drawer Mobile */}
      <AnimatePresence>
        {openDrawer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={toggleDrawer}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-teal-500/20 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <IconRobot className="w-10 h-10 text-teal-400" />
                  <span className="text-2xl font-bold text-white">AnomSapari</span>
                </div>
                <button onClick={toggleDrawer}>
                  <IconX className="w-8 h-8 text-white" />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-6">
                {navLink.map((item) => (
                  <Link key={item.path} to={item.path} onClick={toggleDrawer} className="text-xl text-gray-300 hover:text-teal-400">
                    {item.name}
                  </Link>
                ))}
                {/* Edukasi in Mobile Drawer */}
                <div className="space-y-4">
                  <p className="text-xl text-gray-300 font-bold">Edukasi</p>
                  <Link to="/edukasi-skill" onClick={toggleDrawer} className="block text-xl text-gray-300 hover:text-teal-400">
                    Edukasi Skill
                  </Link>
                  <Link to="/edukasi-peternakan" onClick={toggleDrawer} className="block text-xl text-gray-300 hover:text-teal-400">
                    Edukasi Peternakan
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};