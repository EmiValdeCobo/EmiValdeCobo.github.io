interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
    const tabs = [
        { id: 'proyectos', label: 'Proyectos' },
        { id: 'stack', label: 'Stack Tecnológico' },
        { id: 'sobre-mi', label: 'Sobre mí' },
    ];

    return (
        <div className="flex gap-8 border-b border-slate-800 mb-12 text-sm font-medium overflow-x-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 transition-colors whitespace-nowrap ${activeTab === tab.id
                            ? 'text-[#3CB396] border-b-2 border-[#3CB396]'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Navbar;