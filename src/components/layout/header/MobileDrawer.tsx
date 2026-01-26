import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconLeaf } from '@tabler/icons-react';
import { mainLinks, productMenu, educationMenu, contactLink } from './menuData';

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 w-80 -screen bg-gray-900 z-[9999]"
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-emerald-500/20">
              <div className="flex items-center gap-3">
                <IconLeaf className="w-8 h-8 text-emerald-400" />
                <span className="text-xl font-bold text-white">Sapari Farm</span>
              </div>
              <button onClick={onClose} className="p-1">
                <IconX className="w-7 h-7 text-gray-300" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2 text-base">
              {mainLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-emerald-400 font-medium block py-2'
                      : 'text-gray-300 hover:text-emerald-400 block py-2'
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-emerald-500/20">
                <p className="mb-2 text-gray-400 font-medium">{productMenu.name}</p>
                {productMenu.links.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 mb-1"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-emerald-500/20">
                <p className="mb-2 text-gray-400 font-medium">{educationMenu.name}</p>
                {educationMenu.links.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="block py-2.5 px-3 rounded-lg text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 mb-1"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-emerald-500/20 pb-6">
                <NavLink
                  to={contactLink.path}
                  onClick={onClose}
                  className="block py-2.5 px-3 text-gray-300 hover:text-emerald-400"
                >
                  {contactLink.name}
                </NavLink>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
