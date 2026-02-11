import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { menuData, MenuItem, SubMenu } from './menuData'

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <NavLink to="/" className="text-xl font-bold">
          Sapari Farm
        </NavLink>

        <div className="flex items-center gap-6 text-sm font-medium">
          {menuData.map((menu: MenuItem, index: number) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {/* Menu utama */}
              {menu.to ? (
                <NavLink
  to={menu.to}
  end
  className={({ isActive }) =>
    `nav-link ${isActive ? "text-emerald-500" : ""}`
  }
>
  {menu.label}
</NavLink>
              ) : (
                <button className="flex items-center gap-1 nav-link">
                  {menu.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}

              {/* Dropdown */}
              {menu.children && openIndex === index && (
                <div className="dropdown">
                  {menu.children.map((child: SubMenu) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
