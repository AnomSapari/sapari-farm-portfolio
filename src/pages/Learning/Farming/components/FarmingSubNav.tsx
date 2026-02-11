import { NavLink } from "react-router-dom";

const links = [
  { label: "Dashboard", to: "/learning/farming" },
  { label: "Jurnal Pakan", to: "/learning/farming/jurnal-pakan" },
  { label: "Kalkulator", to: "/learning/farming/kalkulator" },
];

export default function FarmingSubNav() {
  return (
    <nav className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 border-b border-white/10">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) =>
            `
            px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
            ${
              isActive
                ? "bg-emerald-500 text-black"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }
          `
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
