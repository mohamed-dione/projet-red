import React, { useState } from 'react';
import { 
  LayoutDashboard, Hotel, Search, Bell, LogOut, 
  Mail, FileText, MessageSquare, Users, Building 
} from 'lucide-react';

export default function Dashboard({ setPage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const allStats = [
    { Icon: FileText, count: "125", label: "Formulaires", color: "bg-purple-500" },
    { Icon: MessageSquare, count: "40", label: "Messages", color: "bg-teal-500" },
    { Icon: Users, count: "600", label: "Utilisateurs", color: "bg-amber-500" },
    { Icon: Mail, count: "25", label: "E-mails", color: "bg-red-500" },
    { Icon: Hotel, count: "40", label: "Hôtels", color: "bg-purple-600" },
    { Icon: Building, count: "02", label: "Entités", color: "bg-blue-600" },
  ];

  // 1. FONCTION DE FORMATAGE AUTOMATIQUE (Correction des accents et pluriels)
  const formatDisplayTerm = (text) => {
    if (!text) return "";
    
    let result = text.toLowerCase();

    // Gestion de HOTEL / HOTELS (avec ou sans accent dans la saisie)
    // On remplace d'abord le pluriel pour éviter de transformer "hotels" en "HÔTELs"
    result = result.replace(/h[oô]tels/gi, "HÔTELS"); 
    result = result.replace(/h[oô]tel\b/gi, "HÔTEL");

    // Autres mots du dictionnaire
    const dictionary = {
      "formulaire": "FORMULAIRE",
      "message": "MESSAGE",
      "utilisateur": "UTILISATEUR",
      "entite": "ENTITÉ",
      "entité": "ENTITÉ",
      "email": "E-MAIL"
    };

    Object.keys(dictionary).forEach(key => {
      const regex = new RegExp(key, "gi");
      result = result.replace(regex, dictionary[key]);
    });

    // On renvoie tout en Majuscules (pour les chiffres et mots inconnus)
    return result.toUpperCase();
  };

  // 2. MÉTHODE FILTER (Indépendante de l'accent pour que la recherche marche toujours)
  const filteredStats = allStats.filter((item) => {
    const search = searchTerm.toLowerCase().trim();
    if (!search) return true;

    // On normalise la recherche pour ignorer l'accent lors du filtrage technique
    const normalizedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedLabel = item.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return (
      normalizedLabel.includes(normalizedSearch) || 
      item.count.includes(search)
    );
  });

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-72 bg-[#2d3238] text-white flex-col justify-between shrink-0 h-full">
        <div>
          <div className="p-8 border-b border-gray-700">
            <span className="font-bold text-2xl tracking-tighter uppercase italic">Red Product</span>
          </div>
          <nav className="mt-8">
            <p className="px-8 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Principal</p>
            <button onClick={() => setPage('dashboard')} className="w-full flex items-center space-x-5 px-8 py-4 bg-white text-gray-800 font-bold shadow-md outline-none">
              <LayoutDashboard size={24} />
              <span className="text-lg">Dashboard</span>
            </button>
            <button onClick={() => setPage('hotels')} className="w-full flex items-center space-x-5 px-8 py-4 text-gray-400 hover:bg-gray-700 transition-all outline-none">
              <Hotel size={24} />
              <span className="text-lg">Liste des hôtels</span>
            </button>
          </nav>
        </div>
        {/* ... Pied de sidebar (Profil Mohamed Dione) ... */}
      </aside>

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* HEADER */}
        <header className="bg-white border-b border-gray-200 px-10 py-5 flex items-center justify-between shadow-sm shrink-0">
          <h1 className="text-3xl font-black text-gray-800 uppercase">Dashboard</h1>
          <div className="relative hidden lg:block">
            <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Rechercher hotel, formulaire, 40..." 
              className="pl-14 pr-6 py-3 border border-gray-300 rounded-full text-lg w-96 outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* ... Profil & Bell ... */}
        </header>

        <main className="flex-1 overflow-y-auto p-12 bg-[#f8f9fa]">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-800 italic">
              Bienvenue sur <span className="font-black text-gray-900 not-italic uppercase">RED Product</span>
            </h2>
            <p className="text-gray-500 text-xl mt-2 font-medium italic">
              {searchTerm ? (
                <>Résultats pour : "<span className="text-gray-900 font-bold">{formatDisplayTerm(searchTerm)}</span>"</>
              ) : (
                "Aperçu en temps réel de vos opérations."
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredStats.map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-200 flex items-center space-x-8 hover:shadow-2xl transition-all duration-500">
                <div className={`p-6 rounded-full text-white shadow-lg ${item.color}`}>
                  <item.Icon size={36} />
                </div>
                <div>
                  <p className="text-5xl font-black text-gray-800 leading-none">{item.count}</p>
                  <p className="text-gray-400 text-lg font-bold mt-3 uppercase tracking-widest">
                    {item.label.replace(/hotel/gi, "Hôtel")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Affichage si vide */}
          {filteredStats.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-2xl italic">Aucun résultat trouvé pour "{formatDisplayTerm(searchTerm)}".</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}