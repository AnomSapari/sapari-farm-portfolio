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
import { NotFound } from "./pages/NotFound";

import LearningLayout from "./pages/Learning/LearningLayout";
import Coding from "./pages/Learning/coding";
import Resources from "./pages/Learning/resources";

import FarmingLayout from "./pages/Learning/Farming/FarmingLayout";
import FarmDashboard from "./pages/Learning/Farming/pages/FarmDashboard";
import FarmPerjalanan from "./pages/Learning/Farming/pages/FarmPerjalanan";
import FarmJurnal from "./pages/Learning/Farming/pages/FarmJurnal";
import FarmKalkulator from "./pages/Learning/Farming/pages/FarmKalkulator";

import CaraPesan from "@/pages/CaraPesan";
import OrderPage from "@/pages/Order";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="w-screen min-h-screen bg-gray-950 text-gray-50">
      <Desktop />
      <Mobile open={mobileOpen} setOpen={setMobileOpen} />

      <section className="px-3 md:px-10 lg:px-20 pb-12 pt-24 min-h-screen">
        <Routes>
          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill-portfolio" element={<SkillPortfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* CARA PESAN & ORDER */}
          <Route path="/cara-pesan" element={<CaraPesan />} />
          <Route path="/order" element={<OrderPage />} />

          {/* LEARNING */}
          <Route path="/learning" element={<LearningLayout />}>
            <Route path="coding" element={<Coding />} />
            <Route path="resources" element={<Resources />} />

            {/* FARMING */}
            <Route path="farming" element={<FarmingLayout />}>
              <Route index element={<FarmDashboard />} />
              <Route path="perjalanan" element={<FarmPerjalanan />} />
              <Route path="jurnal" element={<FarmJurnal />} />
              <Route path="kalkulator" element={<FarmKalkulator />} />
            </Route>
          </Route>

          {/* FALLBACK */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  );
}
