import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdList, MdClose } from 'react-icons/md';

/**
 * Composant Logo spécifique à RED PRODUCT
 */
const RedProductLogo = ({ light = false }) => (
  <div className={`flex items-center gap-2 font-bold text-lg ${light ? 'text-white' : 'text-[#45484b]'}`}>
    <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center relative">
      <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#45484b]"></div>
    </div>
    RED PRODUCT
  </div>
);

/**
 * Composant Avatar pour le bas de la sidebar
 */
const UserAvatar = ({ showText = false, light = false }) => (
  <div className="flex items-center gap-3">
    <div className="relative shrink-0">
      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white/20 overflow-hidden">
        {/* Remplacez par votre import d'image ou src */}
        <div className="w-full h-full bg-slate-500 flex items-center justify-center text-xs text-white">MB</div>
      </div>
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#45484b] rounded-full"></div>
    </div>
    {showText && (
      <div className="text-[11px] leading-tight">
        <p className={`font-bold ${light ? 'text-white' : 'text-gray-800'}`}>Mouhamet Badiane</p>
        <p className="text-green-500 text-[10px]">en ligne</p>
      </div>
    )}
  </div>
);

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  // Configuration des liens de navigation
  const menuItems = [
    { 
      path: "/dashboard", 
      label: "Dashboard", 
      icon: <MdDashboard size={22} /> 
    },
    { 
      path: "/hotels", 
      label: "Liste des hôtels", 
      icon: <MdList size={22} /> 
    },
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-[#45484b] text-white flex flex-col 
      transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      
      {/* Header Sidebar: Logo & Bouton Fermer (Mobile) */}
      <div className="p-5 border-b border-white/5 flex justify-between items-center shrink-0">
        <RedProductLogo light />
        <button 
          className="lg:hidden text-gray-300 hover:text-white transition-colors" 
          onClick={() => setIsSidebarOpen(false)}
        >
          <MdClose size={24} />
        </button>
      </div>

      {/* Navigation Principale */}
      <nav className="mt-4 flex-1 overflow-y-auto">
        <p className="px-6 py-3 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-60">
          Principal
        </p>
        
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  group flex items-center gap-4 px-6 py-3.5 text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-white text-gray-800 shadow-lg' 
                    : 'text-gray-300 hover:bg-black/20 hover:text-white'
                  }
                `}
              >
                <span className={`
                  ${isActive ? 'text-gray-800' : 'group-hover:text-[#ffca28]'}
                `}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer Sidebar: Profil Utilisateur */}
      <div className="p-6 border-t border-white/5 bg-black/10">
        <UserAvatar showText={true} light={true} />
      </div>
    </aside>
  );
};

export default Sidebar;