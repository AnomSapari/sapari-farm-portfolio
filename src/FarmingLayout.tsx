import { Outlet } from 'react-router-dom'

export default function FarmingLayout() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Farming</h2>
      <Outlet />
    </div>
  )
}
