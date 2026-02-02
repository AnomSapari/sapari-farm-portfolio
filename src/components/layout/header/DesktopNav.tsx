import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

import { menuData, type MenuItem, type SubMenu, type Role } from "../menuData";
import { filterMenuByRole } from "../filterMenuByRole";

export default function DesktopNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const role: Role = "user"; // 🔁 ganti ke "admin" bila perlu

  const menu = filterMenuByRole(menuData, role);

  return (
    <nav className="flex items-center gap-7 text-sm font-medium">
      {menu.map((item: MenuItem, index: number) =>
        item.to ? (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-emerald-400"
                : "text-gray-300 hover:text-emerald-400"
            }
          >
            {item.label}
          </NavLink>
        ) : (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button className="flex items-center gap-1.5 text-gray-300 hover:text-emerald-400">
              {item.label}
              <IconChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {openIndex === index && item.children && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full mt-3 w-64 rounded-xl bg-gray-900 border border-emerald-500/20 p-4 space-y-2 shadow-xl"
                >
                  {item.children.map((child: SubMenu) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      )}
    </nav>
  );
}
