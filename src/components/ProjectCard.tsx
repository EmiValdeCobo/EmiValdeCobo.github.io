import { ExternalLink, Github, type LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  link?: string;       // Opcional
  isWip?: boolean;     // Opcional
  isGithub?: boolean;  // Opcional
}

const ProjectCard = ({ 
  Icon, 
  title, 
  description, 
  tags, 
  link, 
  isWip = false, 
  isGithub = false 
}: ProjectCardProps) => {
    return (
        <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-[#3CB396]/50 transition-all hover:shadow-[0_0_20px_rgba(60,179,150,0.1)] flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800 rounded-lg text-[#3CB396] group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                </div>

                {isWip ? (
                    <div className="flex gap-2">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-400 px-2 py-1 rounded">En Desarrollo</span>
                    </div>
                ) : (
                    // Validamos que link exista antes de usarlo
                    link && (
                        <a href={link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#3CB396] transition-colors">
                            {isGithub ? <Github size={20} /> : <ExternalLink size={20} />}
                        </a>
                    )
                )}
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#3CB396]/10 text-[#3CB396] text-xs rounded border border-[#3CB396]/20">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;