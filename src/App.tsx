import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConstitucionSociedades from './pages/ConstitucionSociedades';
import Digitalizacion from './pages/Digitalizacion';
import GestionLaboral from './pages/GestionLaboral';
import GestionFiscal from './pages/GestionFiscal';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/constitucion-sociedades" element={<ConstitucionSociedades />} />
            <Route path="/digitalizacion" element={<Digitalizacion />} />
            <Route path="/gestion-laboral" element={<GestionLaboral />} />
            <Route path="/gestion-fiscal" element={<GestionFiscal />} />
          </Routes>
        </main>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;