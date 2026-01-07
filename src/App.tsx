import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { MediaBar } from './components/MediaBar';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import SkillPortfolio from './pages/SkillPortfolio';
import Products from './components/Products';
import EdukasiSkill from './pages/EdukasiSkill';
import EdukasiPeternakan from './pages/EdukasiPeternakan';


// ✅ Halaman Farm Dashboard
import FarmDashboard from './pages/FarmDashboard';

function App() {
  return (
    <main className="w-screen py-4 bg-gray-950 text-gray-50 min-h-screen">
      <Header />
      <MediaBar />

      <section className="px-3 md:px-10 lg:px-20 pb-12 min-h-screen">
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
          <Route path="/products" element={<Products />} />
          <Route path="/edukasi-skill" element={<EdukasiSkill />} />
          <Route path="/edukasi-peternakan" element={<EdukasiPeternakan />} />

          {/* Farm Routes */}
          <Route path="/farm/*" element={<FarmDashboard />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>

      <Footer />
    </main>
  );
}

export default App;
