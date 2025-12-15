import { Layers, Terminal, Code } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
                Icon={Layers}
                title="Sistema Frontend Corporativo"
                description="Plataforma web para gestión de recursos internos. Optimicé la carga de datos en un 40% usando React Query y patrones de renderizado."
                tags={['React', 'TypeScript', 'Tailwind']}
                link="#"
            />

            <ProjectCard
                Icon={Terminal}
                title="Motor de Juego C++"
                description="Motor gráfico propio renderizado en consola. Implementación de físicas básicas, gestión de memoria manual y algoritmos de pathfinding."
                tags={['C++', 'OpenGL']}
                link="#"
                isGithub={true}
            />

            <ProjectCard
                Icon={Code}
                title="Life Manager App"
                description="App móvil multiplataforma para productividad personal. Sincronización en tiempo real y modo offline-first."
                tags={['React Native', 'Firebase']}
                link="#"
                isWip={true}
            />
        </div>
    );
};

export default ProjectsSection;