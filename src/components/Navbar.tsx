import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [openSkill, setOpenSkill] = useState(false)
  const [openEdu, setOpenEdu] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <NavLink to="/" className="text-xl font-bold">
          Sapari Farm
        </NavLink>

        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>

          {/* Skills */}
          <div
            className="relative"
            onMouseEnter={() => setOpenSkill(true)}
            onMouseLeave={() => setOpenSkill(false)}
          >
            <button className="flex items-center gap-1 nav-link">
              Skills & Portfolio <ChevronDown className="w-4 h-4" />
            </button>
            {openSkill && (
              <div className="dropdown">
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/skill-portfolio">Skill + Portfolio</NavLink>
              </div>
            )}
          </div>

          {/* Edukasi */}
          <div
            className="relative"
            onMouseEnter={() => setOpenEdu(true)}
            onMouseLeave={() => setOpenEdu(false)}
          >
            <button className="flex items-center gap-1 nav-link">
              Edukasi <ChevronDown className="w-4 h-4" />
            </button>
            {openEdu && (
              <div className="dropdown">
                <NavLink to="/edukasi-skill">Edukasi Skill</NavLink>
                <NavLink to="/edukasi-peternakan">Edukasi Peternakan</NavLink>
                <NavLink to="/perjalanan-peternakan">Perjalanan Peternakan</NavLink>
              </div>
            )}
          </div>

          {/* Produk */}
          <div
            className="relative"
            onMouseEnter={() => setOpenProduct(true)}
            onMouseLeave={() => setOpenProduct(false)}
          >
            <button className="flex items-center gap-1 nav-link">
              Produk & Tools <ChevronDown className="w-4 h-4" />
            </button>
            {openProduct && (
              <div className="dropdown">
                <NavLink to="/products">Produk</NavLink>
                <NavLink to="/cara-pesan">Cara Pesan</NavLink>
                <NavLink to="/kalkulator-pakan">Kalkulator Pakan</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="nav-link">Kontak</NavLink>
          <NavLink to="/farm" className="nav-link">Farm</NavLink>
        </div>
      </div>
    </nav>
  )
}
