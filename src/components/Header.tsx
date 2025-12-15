import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Header = () => {
    return (
        <header className="mb-24 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3CB396]/10 text-[#3CB396] text-sm font-medium mb-6 border border-[#3CB396]/20">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CB396] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CB396]"></span>
                </span>
                Disponible para trabajar
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6">
                Josué Emiliano <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CB396] to-emerald-600">
                    Valdés Jacobo
                </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
                Desarrollador Full Stack con pasión por la arquitectura de software y el desarrollo de videojuegos.
                Creo soluciones digitales que combinan <span className="text-[#3CB396]">rendimiento</span> y <span className="text-[#3CB396]">diseño</span>.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
                <a href="https://github.com/emivaldecobo" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#3CB396] transition-colors">
                    <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#3CB396] transition-colors">
                    <Linkedin size={18} /> LinkedIn
                </a>
                <a href="mailto:emiliano26valdes@gmail.com" className="flex items-center gap-2 hover:text-[#3CB396] transition-colors">
                    <Mail size={18} /> emiliano26valdes@gmail.com
                </a>
                <span className="flex items-center gap-2">
                    <MapPin size={18} /> El Salvador (Remoto / Híbrido)
                </span>
            </div>
        </header>
    );
};

export default Header;