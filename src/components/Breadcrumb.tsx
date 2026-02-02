import { NavLink, useLocation } from 'react-router-dom'

export default function Breadcrumb() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)

  return (
    <nav className="text-sm text-gray-400 mb-6">
      <NavLink to="/" className="hover:text-green-400">Home</NavLink>

      {paths.map((path, i) => {
        const to = '/' + paths.slice(0, i + 1).join('/')
        return (
          <span key={to}>
            {' / '}
            <NavLink to={to} className="hover:text-green-400 capitalize">
              {path}
            </NavLink>
          </span>
        )
      })}
    </nav>
  )
}
