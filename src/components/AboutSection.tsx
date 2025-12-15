import { Download } from 'lucide-react';

const AboutSection = () => {
    return (
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
    );
};

export default AboutSection;