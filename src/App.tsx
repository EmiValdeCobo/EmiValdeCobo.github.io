import { Github, Linkedin, Mail, Code, Terminal, Layers } from 'lucide-react';

const Portfolio = () => {
  // Color de marca basado en tu preferencia anterior
  const brandColor = "text-[#3CB396]";
  const bgBrand = "bg-[#3CB396]";
  const borderBrand = "border-[#3CB396]";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-[#3CB396] selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className={`text-xl font-bold ${brandColor} font-mono`}>&lt;TuNombre /&gt;</span>
          <div className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
            <a href="#stack" className="hover:text-white transition">Habilidades</a>
            <a href="#contacto" className={`px-4 py-2 rounded-full border ${borderBrand} ${brandColor} hover:bg-[#3CB396] hover:text-slate-900 transition duration-300`}>
              Contáctame
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="flex flex-col items-center justify-center h-screen text-center px-4 relative overflow-hidden">
        {/* Decoración de fondo (Brillo sutil) */}
        <div className={`absolute w-96 h-96 ${bgBrand} rounded-full blur-[120px] opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 relative z-10">
          Construyendo el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CB396] to-emerald-400">Futuro Digital</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 relative z-10">
          Desarrollador Full Stack & Entusiasta del Game Dev. 
          <br/>Transformo café en código limpio y eficiente.
        </p>
        <div className="flex gap-4 relative z-10">
          <button className={`${bgBrand} text-slate-900 px-8 py-3 rounded-lg font-bold hover:brightness-110 transition shadow-[0_0_20px_rgba(60,179,150,0.3)]`}>
            Ver Portafolio
          </button>
          <button className="border border-slate-700 px-8 py-3 rounded-lg font-bold hover:border-slate-500 transition">
            Descargar CV
          </button>
        </div>
      </header>

      {/* --- PROYECTOS (Donde se vende tu experiencia) --- */}
      <section id="proyectos" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-[#3CB396] pl-4">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Proyecto 1: Sistema Web (Automaco style) */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-[#3CB396] transition group">
            <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-[#3CB396] group-hover:scale-110 transition">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Sistema Frontend Corporativo</h3>
            <p className="text-slate-400 text-sm mb-4">
              Arquitectura escalable con React, TypeScript y Tailwind v4. Optimización de componentes y gestión de estado global.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-slate-900 px-2 py-1 rounded text-[#3CB396]">React</span>
              <span className="text-xs bg-slate-900 px-2 py-1 rounded text-[#3CB396]">Vite</span>
            </div>
          </div>

          {/* Proyecto 2: Game Dev (Bomberman style) */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-[#3CB396] transition group">
            <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-[#3CB396] group-hover:scale-110 transition">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Motor de Juego C++</h3>
            <p className="text-slate-400 text-sm mb-4">
              Recreación de mecánicas clásicas tipo Bomberman. Lógica de movimiento, gestión de memoria y renderizado ASCII.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-slate-900 px-2 py-1 rounded text-[#3CB396]">C++</span>
              <span className="text-xs bg-slate-900 px-2 py-1 rounded text-[#3CB396]">Algoritmos</span>
            </div>
          </div>

          {/* Proyecto 3: App Personal (Tu plan actual) */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-[#3CB396] transition group">
            <div className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-[#3CB396] group-hover:scale-110 transition">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Life Manager App</h3>
            <p className="text-slate-400 text-sm mb-4">
              Aplicación móvil/web modular para gestión de finanzas, seguimiento de entretenimiento y tareas universitarias.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-slate-900 px-2 py-1 rounded text-[#3CB396]">React Native</span>
              <span className="text-xs bg-slate-900 px-2 py-1 rounded text-[#3CB396]">Firebase</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm">
        <p>© 2025 Diseñado con React & Tailwind.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Github className="hover:text-white cursor-pointer" />
          <Linkedin className="hover:text-white cursor-pointer" />
          <Mail className="hover:text-white cursor-pointer" />
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;