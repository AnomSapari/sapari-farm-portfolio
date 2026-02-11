import { NavLink } from "react-router-dom";
import { menuData, MenuItem } from "./menuData";

export default function Desktop() {
  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-[999]
      h-16 bg-gray-950 border-b border-white/10
      px-6 items-center justify-between"
    >
      {/* BRAND */}
      <NavLink
        to="/"
        end
        className="nav-link nav-brand"
      >
        SapariFarm
      </NavLink>

      {/* MENU */}
      <div className="flex items-center gap-6">
        {menuData.map((item: MenuItem) => (
          <div key={item.label} className="relative group px-2 py-2">
            {/* MENU UTAMA */}
            {item.to ? (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-emerald-400" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <span className="nav-link cursor-default">
                {item.label}
              </span>
            )}

            {/* DROPDOWN */}
            {item.children && (
              <div className="dropdown">
                {item.children.map((sub) => (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    className={({ isActive }) =>
                      `dropdown-item ${
                        isActive ? "text-emerald-400 bg-white/5" : ""
                      }`
                    }
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
