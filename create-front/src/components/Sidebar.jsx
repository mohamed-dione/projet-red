import React from 'react';
import { LayoutDashboard, Hotel } from 'lucide-react';

export default function Sidebar({ setPage, currentPage }) {
  return (
    <aside className="w-64 bg-[#2d3238] text-white flex flex-col justify-between shrink-0 h-screen">
      <div>
        {/* LOGO */}
        <div className="p-6 border-b border-gray-700">
          <span className="font-bold text-xl tracking-wide uppercase italic">Red Product</span>
        </div>
        
        {/* NAVIGATION */}
        <nav className="mt-6">
          <p className="px-6 py-2 text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Principal
          </p>
          
          {/* LIEN DASHBOARD */}
          <button 
            onClick={() => setPage('dashboard')} 
            // On s'assure qu'aucun titre n'est présent pour éviter le texte au hover
            className={`w-full flex items-center space-x-4 px-6 py-3 transition-all outline-none ${
              currentPage === 'dashboard' 
                ? 'bg-white text-gray-800 font-medium' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {/* aria-hidden empêche le navigateur de lire "dashboard" pour l'icône */}
            <LayoutDashboard size={20} aria-hidden="true" />
            <span className="text-sm">Dashboard</span>
          </button>

          {/* LIEN LISTE DES HÔTELS */}
          <button 
            onClick={() => setPage('hotels')} 
            className={`w-full flex items-center space-x-4 px-6 py-3 transition-all outline-none ${
              currentPage === 'hotels' 
                ? 'bg-white text-gray-800 font-medium' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <Hotel size={20} aria-hidden="true" />
            <span className="text-sm">Liste des hôtels</span>
          </button>
        </nav>
      </div>

      {/* PROFIL (BAS DE SIDEBAR) */}
      <div className="p-4 border-t border-gray-700 flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-[#f3d9b1] rounded-full flex items-center justify-center text-[#8a6d3b] font-bold text-sm">
            MB
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2d3238] rounded-full"></span>
        </div>
        <div className="text-xs">
          <p className="font-semibold text-gray-100">Mouhamet Badiane</p>
          <p className="text-gray-400 text-[10px]">en ligne</p>
        </div>
      </div>
    </aside>
  );
}