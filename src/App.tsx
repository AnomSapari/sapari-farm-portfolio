import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Desktop from "./components/layout/Desktop";
import Mobile from "./components/layout/Mobile";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Portfolio } from "./pages/Portfolio";
import SkillPortfolio from "./pages/SkillPortfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import Products from "./components/layout/Products";
import CaraPesan from "./pages/CaraPesan";

import FarmKalkulatorPakan from "./pages/Learning/farming/FarmKalkulatorPakan";

import LearningLayout from "./pages/Learning/LearningLayout";
import LearningHome from "./pages/Learning/farming";
import Coding from "./pages/Learning/coding";
import Resources from "./pages/Learning/resources";
import FarmDashboard from "./pages/Learning/farming/FarmDashboard";
import FarmJurnalPakan from './pages/Learning/farming/FarmJurnalPakan';
// import FarmingLayout from "./pages/Learning/farming/FarmingLayout";

import { NotFound } from "./pages/NotFound";

function App() {
  // ✅ SATU STATE SAJA
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="w-screen min-h-screen bg-gray-950 text-gray-50">
      {/* NAVBAR */}
      <Desktop />
      <Mobile open={mobileOpen} setOpen={setMobileOpen} />

      {/* CONTENT */}
      <section className="px-3 md:px-10 lg:px-20 pb-12 pt-24 min-h-screen">
        <Routes>
          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          {/* SKILLS */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill-portfolio" element={<SkillPortfolio />} />

          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />
          <Route path="/cara-pesan" element={<CaraPesan />} />
          <Route path="/contact" element={<Contact />} />

          {/* LEARNING */}
          <Route path="/learning" element={<LearningLayout />}>
            <Route index element={<LearningHome />} />
            <Route path="coding" element={<Coding />} />
            <Route path="resources" element={<Resources />} />
            <Route path="farming">
              <Route index element={<FarmDashboard />} />
              <Route path="jurnal-pakan" element={<FarmJurnalPakan />} /> 
              <Route
                path="kalkulator"
                element={<FarmKalkulatorPakan />}
              />
              
            </Route>
            
          </Route>
        
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
