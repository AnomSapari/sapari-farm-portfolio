import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Portfolio } from './pages/Portfolio';
import  Contact from './pages/Contact';
import { MediaBar } from './components/MediaBar';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import SkillPortfolio from './pages/SkillPortfolio';
import Products from './components/Products';  // ← Pakai dari pages (hapus import dari components kalau ada)
import EdukasiSkill from './pages/EdukasiSkill';
import EdukasiPeternakan from './pages/EdukasiPeternakan';
import PerjalananPeternakan from './pages/PerjalananPeternakan'; // Asumsi nama file ini
import Resume from './pages/Resume';
import CaraPesan from './pages/CaraPesan';
import KalkulatorPakan from './pages/KalkulatorPakan';


// Farm Dashboard
import FarmDashboard from './pages/FarmDashboard';

function App() {
  return (
    <main className="w-screen py-4 bg-gray-950 text-gray-50 min-h-screen">
      <Header />
      <MediaBar />

     <section className="px-3 md:px-10 lg:px-20 pb-12 pt-24 min-h-screen">

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill-portfolio" element={<SkillPortfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* Edukasi */}
          <Route path="/edukasi-skill" element={<EdukasiSkill />} />
          <Route path="/edukasi-peternakan" element={<EdukasiPeternakan />} />
          <Route path="/perjalanan-peternakan" element={<PerjalananPeternakan />} />

          {/* Produk Seller */}
          <Route path="/products" element={<Products />} />

          {/* Farm Dashboard (wildcard untuk sub-halaman) */}
          <Route path="/farm/*" element={<FarmDashboard />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/cara-pesan" element={<CaraPesan />} />
        <Route path="/kalkulator-pakan" element={<KalkulatorPakan />} />



          {/* Not Found (harus di akhir) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>

      <Footer />
    </main>
  );
}

export default App;