import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  Wheat,
  Calculator,
} from "lucide-react";

const links = [
  {
    label: "Dashboard",
    to: "/learning/farming",
    icon: LayoutDashboard,
  },
  {
    label: "Perjalanan",
    to: "/learning/farming/perjalanan",
    icon: Map,
  },
  {
    label: "Jurnal",
    to: "/learning/farming/jurnal",
    icon: BookOpen,
  },
  {
    label: "Pakan",
    to: "/learning/farming/jurnal-pakan",
    icon: Wheat,
  },
  {
    label: "Kalkulator",
    to: "/learning/farming/kalkulator",
    icon: Calculator,
  },
];

export default function FarmingSubNav() {
  return (
    <div className="sticky top-0 z-40 bg-black border-b border-white/10">
      <div className="w-full overflow-x-auto">
        <nav className="flex gap-2 min-w-max px-3 py-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/learning/farming"}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition
                  ${
                    isActive
                      ? "bg-emerald-500 text-black"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`
                }
              >
                <Icon size={16} />
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}