import { NavLink, useLocation } from "react-router-dom";
import { menuData, MenuItem } from "./menuData";

export default function Desktop() {
  const location = useLocation();

  return (
    <nav
      className="hidden md:flex fixed top-0 left-0 right-0 z-[999]
      h-16 bg-gray-950 border-b border-white/10
      px-6 items-center justify-between"
    >
      {/* BRAND */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          [
            "nav-link nav-brand",
            isActive ? "active-side" : "",
            "absolute left-1/2 -translate-x-1/2",
            "md:static md:translate-x-0",
          ].join(" ")
        }
      >
        SapariFarm
      </NavLink>

      {/* MENU */}
      <div className="flex items-center gap-6">
        {menuData.map((item: MenuItem) => {
          const isParentActive = item.children?.some((sub) =>
            location.pathname.startsWith(sub.to)
          );

          return (
            <div key={item.label} className="relative group px-2 py-2">
              {/* MENU UTAMA */}
              {item.to ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  type="button"
                  className={`nav-link cursor-default focus:outline-none ${
                    isParentActive ? "text-emerald-400" : ""
                  }`}
                >
                  {item.label}
                </button>
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
                          isActive
                            ? "text-emerald-400 bg-white/5"
                            : ""
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

