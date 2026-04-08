import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="flex items-center space-x-6">
        {/* Barre de recherche */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Recherche" 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
          />
        </div>
        
        {/* Icônes de droite */}
        <div className="flex items-center space-x-4 text-gray-500">
          <div className="relative cursor-pointer">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </div>
          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 text-sm font-bold cursor-pointer">
            MB
          </div>
          <button className="text-gray-500 hover:text-red-500 transition-colors">
            <LogOut size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;