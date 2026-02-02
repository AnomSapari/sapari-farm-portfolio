import { Outlet } from 'react-router-dom'
import Breadcrumb from '@/components/Breadcrumb'

export default function LearningLayout() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Learning</h1>
      <Breadcrumb />
      <Outlet />
    </div>
  )
}
