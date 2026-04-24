import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdNotificationsNone, MdLogout, MdMenu } from 'react-icons/md';

/**
 * Sous-composant Avatar pour le Header
 */
const UserAvatarSmall = () => (
  <div className="relative shrink-0 cursor-pointer">
    <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-100 overflow-hidden">
      {/* Remplacez par le chemin de votre image réelle */}
      <div className="w-full h-full bg-slate-400 flex items-center justify-center text-[10px] text-white font-bold">
        MB
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full"></div>
  </div>
);

const Header = ({ title, searchTerm, setSearchTerm, setIsSidebarOpen }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 shrink-0 shadow-sm z-30">
      
      {/* Partie Gauche : Menu Mobile + Titre */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
          title="Ouvrir le menu"
        >
          <MdMenu size={26} />
        </button>
        <h1 className="text-base sm:text-xl font-bold text-gray-800 truncate tracking-tight">
          {title}
        </h1>
      </div>

      {/* Partie Droite : Recherche + Notifications + Profil */}
      <div className="flex items-center gap-2 sm:gap-6">
        
        {/* Barre de Recherche (Cachée sur très petits mobiles ou adaptable) */}
        <div className="hidden sm:flex items-center border border-gray-200 rounded-full px-4 py-1.5 bg-gray-50 focus-within:border-[#ffca28] focus-within:bg-white transition-all duration-200 shadow-sm">
          <MdSearch className="text-gray-400 mr-2" size={20} />
          <input 
            type="text" 
            className="bg-transparent outline-none text-sm w-32 lg:w-48 text-gray-700 placeholder-gray-400" 
            placeholder="Rechercher..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>

        {/* Bloc Actions (Notifications, Profil, Logout) */}
        <div className="flex items-center gap-1 sm:gap-4">
          
          {/* Notifications */}
          <div className="relative p-2 cursor-pointer hover:bg-gray-50 rounded-full transition-colors group">
            <MdNotificationsNone size={24} className="text-gray-600 group-hover:text-gray-900" />
            <span className="absolute top-1.5 right-1.5 bg-[#ffca28] text-white text-[9px] w-4 h-4 rounded-sm flex items-center justify-center font-bold border border-white shadow-sm">
              3
            </span>
          </div>

          {/* Profil Avatar */}
          <UserAvatarSmall />

          {/* Déconnexion */}
          <Link 
            to="/login" 
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            title="Se déconnecter"
          >
            <MdLogout size={22} />
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;