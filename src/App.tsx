import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import StackSection from './components/StackSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('proyectos');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-[#3CB396] selection:text-black">

      {/* --- FONDO TÉCNICO --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3CB396 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Componente Header */}
        <Header />

        {/* Componente Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Contenido Dinámico */}
        <div className="min-h-[400px] animate-in fade-in zoom-in-95 duration-500">
          {activeTab === 'proyectos' && <ProjectsSection />}
          {activeTab === 'stack' && <StackSection />}
          {activeTab === 'sobre-mi' && <AboutSection />}
        </div>
      </main>

      {/* Componente Footer */}
      <Footer />
      
    </div>
  );
};

export default Portfolio;