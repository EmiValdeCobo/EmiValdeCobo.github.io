import { useState } from 'react';
import { Github, Linkedin, Mail, Code, Terminal, Layers, ExternalLink, Download, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('proyectos');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-[#3CB396] selection:text-black">
      
      {/* --- FONDO TÉCNICO --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3CB396 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* --- HEADER / HERO --- */}
        <header className="mb-24 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3CB396]/10 text-[#3CB396] text-sm font-medium mb-6 border border-[#3CB396]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CB396] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CB396]"></span>
            </span>
            Disponible para trabajar
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6">
            Josue Emiliano <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CB396] to-emerald-600">
              Valdes Jacobo
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Desarrollador Full Stack con pasión por la arquitectura de software y el desarrollo de videojuegos. 
            Creo soluciones digitales que combinan <span className="text-[#3CB396]">rendimiento</span> y <span className="text-[#3CB396]">diseño</span>.
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
             <a href="https://github.com/emivaldecobo" target="_blank" className="flex items-center gap-2 hover:text-[#3CB396] transition-colors">
               <Github size={18} /> GitHub
             </a>
             <a href="https://linkedin.com/in/tu-usuario" target="_blank" className="flex items-center gap-2 hover:text-[#3CB396] transition-colors">
               <Linkedin size={18} /> LinkedIn
             </a>
             <a href="mailto:tucorreo@ejemplo.com" className="flex items-center gap-2 hover:text-[#3CB396] transition-colors">
               <Mail size={18} /> tucorreo@ejemplo.com
             </a>
             <span className="flex items-center gap-2">
               <MapPin size={18} /> México (Remoto / Híbrido)
             </span>
          </div>
        </header>

        {/* --- NAVEGACIÓN INTERNA --- */}
        <div className="flex gap-8 border-b border-slate-800 mb-12 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('proyectos')}
            className={`pb-4 transition-colors ${activeTab === 'proyectos' ? 'text-[#3CB396] border-b-2 border-[#3CB396]' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Proyectos
          </button>
          <button 
            onClick={() => setActiveTab('stack')}
            className={`pb-4 transition-colors ${activeTab === 'stack' ? 'text-[#3CB396] border-b-2 border-[#3CB396]' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Stack Tecnológico
          </button>
          <button 
            onClick={() => setActiveTab('sobre-mi')}
            className={`pb-4 transition-colors ${activeTab === 'sobre-mi' ? 'text-[#3CB396] border-b-2 border-[#3CB396]' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Sobre mí
          </button>
        </div>

        {/* --- CONTENIDO DINÁMICO --- */}
        <div className="min-h-[400px]">
          
          {/* SECCIÓN PROYECTOS */}
          {activeTab === 'proyectos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CARD 1 */}
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-[#3CB396]/50 transition-all hover:shadow-[0_0_20px_rgba(60,179,150,0.1)]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-[#3CB396] group-hover:scale-110 transition-transform">
                    <Layers size={24} />
                  </div>
                  <a href="#" className="text-slate-500 hover:text-[#3CB396] transition-colors"><ExternalLink size={20}/></a>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Sistema Frontend Corporativo</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Plataforma web para gestión de recursos internos. Optimicé la carga de datos en un 40% usando React Query y patrones de renderizado.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">React</span>
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">TypeScript</span>
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">Tailwind</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-[#3CB396]/50 transition-all hover:shadow-[0_0_20px_rgba(60,179,150,0.1)]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-[#3CB396] group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                  </div>
                  <a href="#" className="text-slate-500 hover:text-[#3CB396] transition-colors"><Github size={20}/></a>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Motor de Juego C++</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Motor gráfico propio renderizado en consola. Implementación de físicas básicas, gestión de memoria manual y algoritmos de pathfinding.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">C++</span>
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">OpenGL</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-[#3CB396]/50 transition-all hover:shadow-[0_0_20px_rgba(60,179,150,0.1)]">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-[#3CB396] group-hover:scale-110 transition-transform">
                    <Code size={24} />
                  </div>
                  <div className="flex gap-2">
                     <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-400 px-2 py-1 rounded">En Desarrollo</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Life Manager App</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  App móvil multiplataforma para productividad personal. Sincronización en tiempo real y modo offline-first.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">React Native</span>
                  <span className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">Firebase</span>
                </div>
              </div>

            </div>
          )}

          {/* SECCIÓN STACK */}
          {activeTab === 'stack' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                  <Code size={18} className="text-[#3CB396]" /> Frontend
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3', 'Framer Motion'].map((tech) => (
                    <div key={tech} className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-sm text-slate-400 text-center hover:border-[#3CB396] hover:text-[#3CB396] transition-colors cursor-default">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
                  <Terminal size={18} className="text-[#3CB396]" /> Backend & Otros
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Node.js', 'Firebase', 'C++', 'Git / GitHub', 'SQL', 'Python'].map((tech) => (
                    <div key={tech} className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-sm text-slate-400 text-center hover:border-[#3CB396] hover:text-[#3CB396] transition-colors cursor-default">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN SOBRE MÍ */}
          {activeTab === 'sobre-mi' && (
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Más que código</h3>
              <div className="prose prose-invert prose-slate max-w-none text-slate-400">
                <p className="mb-4">
                  Empecé mi camino en la programación por la curiosidad de entender cómo funcionaban mis videojuegos favoritos. Esa curiosidad evolucionó hacia una carrera en ingeniería de software, donde hoy busco crear herramientas que la gente realmente disfrute usar.
                </p>
                <p>
                  Cuando no estoy picando código, probablemente me encuentres:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Experimentando con motores gráficos en C++.</li>
                  <li>Aprendiendo sobre arquitectura de sistemas escalables.</li>
                  <li>Buscando la configuración perfecta para mi terminal.</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <button className="flex items-center gap-2 bg-[#3CB396] text-slate-900 font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all">
                  <Download size={18} /> Descargar CV Completo
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* --- FOOTER SIMPLE --- */}
      <footer className="text-center py-8 text-slate-600 text-sm relative z-10">
        <p>© 2025 Josue Emiliano Valdes Jacobo. Construido con React & Tailwind.</p>
      </footer>
      
    </div>
  );
};

export default Portfolio;