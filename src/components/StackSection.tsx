import { Code, Terminal, type LucideIcon } from 'lucide-react';

interface StackCategoryProps {
    title: string;
    icon: LucideIcon;
    items: string[];
}

const StackCategory = ({ title, icon: Icon, items }: StackCategoryProps) => (
    <div>
        <h3 className="text-lg font-medium text-slate-200 mb-4 flex items-center gap-2">
            <Icon size={18} className="text-[#3CB396]" /> {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {items.map((tech) => (
                <div key={tech} className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-sm text-slate-400 text-center hover:border-[#3CB396] hover:text-[#3CB396] transition-colors cursor-default">
                    {tech}
                </div>
            ))}
        </div>
    </div>
);

const StackSection = () => {
    return (
        <div className="space-y-8">
            <StackCategory
                title="Frontend"
                icon={Code}
                items={['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3', 'Framer Motion']}
            />
            <StackCategory
                title="Backend & Otros"
                icon={Terminal}
                items={['Node.js', 'Firebase', 'C++', 'Git / GitHub', 'SQL', 'Python']}
            />
        </div>
    );
};

export default StackSection;