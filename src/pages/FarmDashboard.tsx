import { NavLink, Routes, Route } from 'react-router-dom';
import FarmPakan from './FarmPakan';
import FarmKalkulatorPakan from './FarmKalkulatorPakan';
import FarmCatatan from './FarmCatatan';
import FarmPerjalanan from './FarmPerjalanan';

const FarmDashboard = () => {
  return (
    <div className="min-h-screen text-white">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Sapari Farm Dashboard</h1>
        <p className="text-gray-400">
          Semua catatan & aktivitas peternakan
        </p>
      </div>

      {/* Menu */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <NavLink to="" end className="btn-farm">Pakan</NavLink>
        <NavLink to="kalkulator" className="btn-farm">Kalkulator</NavLink>
        <NavLink to="catatan" className="btn-farm">Catatan</NavLink>
        <NavLink to="perjalanan" className="btn-farm">Perjalanan</NavLink>
      </div>

      {/* Content */}
      <Routes>
        <Route index element={<FarmPakan />} />
        <Route path="kalkulator" element={<FarmKalkulatorPakan />} />
        <Route path="catatan" element={<FarmCatatan />} />
        <Route path="perjalanan" element={<FarmPerjalanan />} />
      </Routes>
    </div>
  );
};

export default FarmDashboard;
