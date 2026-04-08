import React, { useState } from 'react';
import { 
  LayoutDashboard, Hotel, Search, Bell, LogOut, Plus, MapPin 
} from 'lucide-react';

export default function Hotels({ setPage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const allHotels = [
    { id: 1, name: "Hôtel Terrou-Bi", location: "Dakar, Sénégal", price: "150.000 XOF par nuit", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80" },
    { id: 2, name: "King Fahd Palace", location: "Almadies, Dakar", price: "120.000 XOF par nuit", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
    { id: 3, name: "Radisson Blu", location: "Corniche Ouest", price: "140.000 XOF par nuit", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" },
    { id: 4, name: "Pullman Dakar", location: "Plateau, Dakar", price: "110.000 XOF par nuit", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80" },
    { id: 5, name: "Hôtel Lac Rose", location: "Lac Rose, Sénégal", price: "95.000 XOF par nuit", image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80" },
    { id: 6, name: "Hôtel Saly", location: "Mbour, Saly Portudal", price: "85.000 XOF par nuit", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" },
    { id: 7, name: "Palm Beach Resort & Spa", location: "Saly, Sénégal", price: "135.000 XOF par nuit", image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=600&q=80" },
    { id: 8, name: "Pullman Dakar Teranga", location: "Place de l'Indépendance", price: "125.000 XOF par nuit", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&q=80" },
  ];

  const filteredHotels = allHotels.filter((hotel) => {
    const search = searchTerm.toLowerCase().trim();
    if (!search) return true;
    const clean = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s./]/g, "");
    return clean(hotel.name).includes(clean(search)) || clean(hotel.location).includes(clean(search)) || clean(hotel.price).includes(clean(search));
  });

  const userAvatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop";

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 font-sans overflow-hidden">
      <aside className="hidden md:flex w-72 bg-[#2d3238] text-white flex-col justify-between shrink-0 h-full">
        <div>
          <div className="p-8 border-b border-gray-700 text-2xl font-bold uppercase italic tracking-tighter">Red Product</div>
          <nav className="mt-8">
            <p className="px-8 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Principal</p>
            <button onClick={() => setPage('dashboard')} className="w-full flex items-center space-x-5 px-8 py-4 text-gray-400 hover:bg-gray-700 transition-all outline-none">
              <LayoutDashboard size={24} />
              <span className="text-lg">Dashboard</span>
            </button>
            <button className="w-full flex items-center space-x-5 px-8 py-4 bg-white text-gray-800 font-bold shadow-md outline-none">
              <Hotel size={24} />
              <span className="text-lg">Liste des hôtels</span>
            </button>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-700 flex items-center space-x-4">
          <img src={userAvatar} alt="User" className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" />
          <div className="text-sm">
            <p className="font-bold uppercase">Mohamed Dione</p>
            <p className="text-green-500 text-xs italic">en ligne</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-10 py-5 flex items-center justify-between shrink-0 z-10 shadow-sm">
          <h1 className="text-3xl font-black text-gray-800 uppercase tracking-tight">Hôtels</h1>
          <div className="flex items-center space-x-8">
            <div className="relative hidden lg:block">
              <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
              <input 
                type="text" 
                placeholder="Recherche" 
                className="pl-14 pr-6 py-3 border border-gray-300 rounded-full text-lg w-96 outline-none focus:ring-2 focus:ring-orange-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-6 border-l pl-8">
              <div className="relative"><Bell size={28} className="text-gray-600" /><span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white font-bold">3</span></div>
              <img src={userAvatar} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
              <button onClick={() => setPage('login')} className="text-gray-400 hover:text-red-600 transition-colors"><LogOut size={28} /></button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-12 bg-[#f8f9fa]">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 italic">Hôtels <span className="font-black text-gray-900 not-italic">{filteredHotels.length}</span></h2>
            <button className="flex items-center space-x-4 bg-white border-2 border-gray-200 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-lg transition-all">
              <Plus size={24} /><span>Créer un nouvel hôtel</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative"><img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-8">
                  <p className="text-orange-600 text-xs font-black uppercase tracking-widest mb-3">{hotel.location}</p>
                  <h3 className="font-bold text-gray-800 text-2xl truncate mb-2">{hotel.name}</h3>
                  <p className="text-gray-900 font-black text-xl mb-6">{hotel.price}</p>
                  <div className="flex items-center text-gray-400 text-base pt-6 border-t border-gray-100"><MapPin size={18} className="mr-3" /><span className="font-bold uppercase tracking-tighter">SÉNÉGAL</span></div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}