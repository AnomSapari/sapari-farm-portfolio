import { NavLink } from "react-router-dom";
import { menuData, type MenuItem, type Role } from "./menuData";
import { filterMenuByRole } from "./filterMenuByRole";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function Mobile({ open, setOpen }: Props) {
  const role: Role = "user"; // 🔁 admin / user
  const menu = filterMenuByRole(menuData, role);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 right-4 z-[1000]"
        >
          ☰
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-[999]
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-6">
          <button onClick={() => setOpen(false)} className="mb-4">
            ✕
          </button>

          {menu.map((item: MenuItem) => (
            <div key={item.label}>
              {item.to ? (
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-lg text-gray-300 hover:text-emerald-400"
                >
                  {item.label}
                </NavLink>
              ) : (
                <span className="block text-gray-400 uppercase text-sm mt-4">
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
                        isActive
                          ? "block text-emerald-400"
                          : "block text-gray-300"
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
