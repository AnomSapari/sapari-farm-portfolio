import { NavLink, useLocation } from "react-router-dom";
import { menuData, MenuItem } from "./menuData";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function Mobile({ open, setOpen }: Props) {
  return (
    <>
      {/* BUTTON HAMBURGER */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 right-4 z-[1000]"
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-[999]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-6">
          <button
  onClick={() => setOpen(!open)}
  className="md:hidden fixed top-4 right-4 z-[1000] w-8 h-8 flex flex-col justify-center gap-1"
  aria-label="Toggle menu"
>
  <span
    className={`h-0.5 bg-white transition-all ${
      open ? "rotate-45 translate-y-1.5" : ""
    }`}
  />
  <span
    className={`h-0.5 bg-white transition-all ${
      open ? "opacity-0" : ""
    }`}
  />
  <span
    className={`h-0.5 bg-white transition-all ${
      open ? "-rotate-45 -translate-y-1.5" : ""
    }`}
  />
</button>
          {menuData.map((item: MenuItem) => (
            <div key={item.label}>
              {item.to ? (
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-lg"
                >
                  {item.label}
                </NavLink>
              ) : (
                <p className="text-gray-400 uppercase text-sm mt-4">
                  {item.label}
                </p>
              )}

              {item.children && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block ${
                          isActive
                            ? "text-emerald-400"
                            : "text-gray-300"
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
      </aside>
    </>
  );
}
