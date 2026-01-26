import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MediaBar } from './components/MediaBar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Portfolio } from './pages/Portfolio';
import SkillPortfolio from './pages/SkillPortfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import CaraPesan from './pages/CaraPesan';
import KalkulatorPakan from './pages/FarmKalkulatorPakan';
import Products from './components/Products';
import EdukasiSkill from './pages/EdukasiSkill';
import EdukasiPeternakan from './pages/EdukasiPeternakan';
import PerjalananPeternakan from './pages/PerjalananPeternakan';
import FarmDashboard from './pages/FarmDashboard';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <main className="w-screen bg-gray-950 text-gray-50 min-h-screen">
      <Header />
      <MediaBar />

      <section className="px-3 md:px-10 lg:px-20 pb-12 pt-24 min-h-screen">
        <Routes>
          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          {/* Skills & Portfolio */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill-portfolio" element={<SkillPortfolio />} />

          {/* Edukasi */}
          <Route path="/edukasi-skill" element={<EdukasiSkill />} />
          <Route path="/edukasi-peternakan" element={<EdukasiPeternakan />} />
          <Route path="/perjalanan-peternakan" element={<PerjalananPeternakan />} />

          {/* Produk & Tools */}
          <Route path="/products" element={<Products />} />
          <Route path="/cara-pesan" element={<CaraPesan />} />
          <Route path="/kalkulator-pakan" element={<KalkulatorPakan />} />

          {/* Kontak */}
          <Route path="/contact" element={<Contact />} />

          {/* Farm dashboard */}
          <Route path="/farm/*" element={<FarmDashboard />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>

      <Footer />
    </main>
  );
}

export default App;
