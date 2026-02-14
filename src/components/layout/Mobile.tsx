import { NavLink } from "react-router-dom";
import { menuData, type MenuItem, type Role } from "./menuData";
import { filterMenuByRole } from "./filterMenuByRole";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function Mobile({ open, setOpen }: Props) {
  const role: Role = "user";
  const menu = filterMenuByRole(menuData, role);

  return (
    <>
      {/* ☰ BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 right-4 z-[1000] text-2xl"
        >
          ☰
        </button>
      )}

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DRAWER */}
      <aside
        className={`fixed top-0 right-0 z-[999] w-72 bg-gray-900
        h-dvh transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* FLEX CONTAINER */}
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-end px-6 py-4 border-b border-gray-800">
            <button
              onClick={() => setOpen(false)}
              className="text-xl text-gray-300"
            >
              ✕
            </button>
          </div>

          {/* SCROLLABLE MENU */}
          <nav
            className="flex-1 overflow-y-auto px-6 pt-4 pb-32
            overscroll-contain"
          >
            {menu.map((item: MenuItem) => (
              <div key={item.label} className="mb-6">
                {item.to ? (
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-lg transition
                      ${
                        isActive
                          ? "bg-gray-800 text-emerald-400"
                          : "text-gray-300 hover:text-emerald-400"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <span className="block mt-6 mb-2 text-xs uppercase tracking-wide text-gray-500">
                    {item.label}
                  </span>
                )}

                {item.children && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-md px-3 py-2 transition
                          ${
                            isActive
                              ? "bg-gray-800 text-emerald-400"
                              : "text-gray-300 hover:text-emerald-400"
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
          </nav>
        </div>
      </aside>
    </>
  );
}
