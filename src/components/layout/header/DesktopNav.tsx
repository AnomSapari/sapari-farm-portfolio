import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import { mainLinks, productMenu, educationMenu, contactLink } from './menuData';

export default function DesktopNav() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);

  return (
    <nav className="flex items-center gap-7 text-sm font-medium">
      {mainLinks.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
          }
        >
          {item.name}
        </NavLink>
      ))}

      {/* PRODUK DROPDOWN */}
      <div
        className="relative"
        onMouseEnter={() => setOpenProduct(true)}
        onMouseLeave={() => setOpenProduct(false)}
      >
        <button className="flex items-center gap-1.5 text-gray-300 hover:text-emerald-400">
          {productMenu.name} <IconChevronDown className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {openProduct && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute top-full mt-3 w-64 rounded-xl bg-gray-900 border border-emerald-500/20 p-4 space-y-2 shadow-xl"
            >
              {productMenu.links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* EDUKASI DROPDOWN */}
      <div
        className="relative"
        onMouseEnter={() => setOpenEdu(true)}
        onMouseLeave={() => setOpenEdu(false)}
      >
        <button className="flex items-center gap-1.5 text-gray-300 hover:text-emerald-400">
          {educationMenu.name} <IconChevronDown className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {openEdu && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute top-full mt-3 w-64 rounded-xl bg-gray-900 border border-emerald-500/20 p-4 space-y-2 shadow-xl"
            >
              {educationMenu.links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* KONTAK */}
      <NavLink
        to={contactLink.path}
        className="text-gray-300 hover:text-emerald-400"
      >
        {contactLink.name}
      </NavLink>
    </nav>
  );
}
