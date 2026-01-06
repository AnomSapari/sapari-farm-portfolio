import { IconMenu2, IconRobot, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { INavLink } from '../types/common';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLink: INavLink[] = [
    { name: 'About', path: '/about' },
    { name: 'Skills & Expertise', path: '/skills' },
    { name: 'Admin Portfolio', path: '/skill-portfolio' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-teal-500/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <IconRobot className="w-10 h-10 md:w-12 md:h-12 text-teal-400" />
            <span className="text-2xl md:text-3xl font-bold text-white">
              AnomSapari
            </span>
          </motion.div>
        </Link>

        {/* Nav Desktop */}
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
        </nav>

        {/* Hamburger Mobile */}
        <button
          onClick={toggleDrawer}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <IconMenu2 className="w-8 h-8" />
        </button>
      </div>

      {/* Drawer Mobile */}
      <AnimatePresence>
        {openDrawer && (
          <>
            {/* Overlay Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleDrawer}
            />

            {/* Drawer dari Kanan */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-teal-500/20 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Header Drawer */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <IconRobot className="w-10 h-10 text-teal-400" />
                  <span className="text-2xl font-bold text-white">AnomSapari</span>
                </div>
                <button onClick={toggleDrawer} className="text-white focus:outline-none">
                  <IconX className="w-8 h-8" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col p-6 space-y-6">
                {navLink.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleDrawer}
                    className="text-xl text-gray-300 hover:text-teal-400 font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};