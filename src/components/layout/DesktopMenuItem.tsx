import { NavLink, useLocation } from "react-router-dom";
import type { MenuItem } from "./menuData";

export function DesktopMenuItem({ item }: { item: MenuItem }) {
  const location = useLocation();

  const isParentActive =
    item.children?.some(
      (sub) =>
        location.pathname === sub.to ||
        location.pathname.startsWith(`${sub.to}/`)
    );

  return (
    <div className="relative group px-2 py-2">
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
          className={`nav-link bg-transparent border-0 cursor-default ${
            isParentActive ? "active" : ""
          }`}
        >
          {item.label}
        </button>
      )}

      {item.children?.length ? (
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
      ) : null}
    </div>
  );
}
