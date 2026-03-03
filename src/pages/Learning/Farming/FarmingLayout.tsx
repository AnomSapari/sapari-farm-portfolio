// src/pages/Learning/farming/FarmingLayout.tsx
import { Outlet } from "react-router-dom";
import FarmingSubNav from "./components/FarmingSubNav";

export default function FarmingLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-gray-100 rounded-xl border border-white/10 p-4 md:p-6 lg:p-8">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-400">
          🐔 Farm Dashboard
        </h1>
        <p className="text-gray-400 text-sm">
          Monitoring peternakan ayam & manajemen pakan
        </p>
      </div>

      {/* SUB NAV */}
      <FarmingSubNav />

      {/* CONTENT */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}