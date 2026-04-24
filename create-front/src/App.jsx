import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import {
  MdHotel, MdBusiness, MdSearch, MdNotificationsNone, 
  MdLogout, MdAdd, MdPeople,  MdMessage, 
  MdDashboard,  MdList, MdArrowBack, MdImage, MdMenu, MdClose 
} from 'react-icons/md';
import { FaEnvelopeOpen } from 'react-icons/fa'; // Import de Font Awesome

import { RiComputerFill } from "react-icons/ri";

import { BiSolidBookmark } from "react-icons/bi";

import mouhametImg from './assets/mouhamet.jpg';



// --- UTILITAIRE DE FILTRE ---
const advancedFilter = (value, search) => {
  if (!search) return true;
  const normalize = (str) => 
    str.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s.]/g, "");
  return normalize(value).includes(normalize(search));
};

// --- COMPOSANTS UI ---
const RedProductLogo = ({ light = false }) => (
  <div className={`flex items-center gap-2 font-bold text-xl ${light ? 'text-white' : 'text-[#45484b]'}`}>
    <div className="flex items-center justify-center">
      {/* L'icône Solid en blanc crée la forme remplie que tu veux */}
      <BiSolidBookmark className="text-white text-3xl drop-shadow-sm" />
    </div>
    <span className="tracking-tight uppercase">Red Product</span>
  </div>
);

const UserAvatar = ({ size = "10", showText = false, light = false }) => (
  <div className="flex items-center gap-3">
    <div className="relative shrink-0">
      <img src={mouhametImg} className={`w-${size} h-${size} rounded-full object-cover`} alt="User" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500   rounded-full"></div>
    </div>
    {showText && (
      <div className="text-[11px] leading-tight">
        <p className={`font-bold ${light ? '' : ''}`}>Mouhamet Badiane</p>
        <p className="text-green-500 ">en ligne</p>
      </div>
    )}
  </div>
);

// --- PAGES D'AUTHENTIFICATION ---

const LoginPage = () => (
  <div className="min-h-screen bg-[#45484b] flex flex-col items-center justify-center p-4">
    {/* Icône Blanche Géante en forme de marque-page */}
    <div className="mb-6 flex items-center gap-2">
       <BiSolidBookmark className="text-white text-5xl" />
       <h1 className="text-white text-2xl font-bold uppercase tracking-wider">Red Product</h1>
    </div>
    <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 sm:p-8">
      <h2 className="text-lg font-medium text-gray-700 mb-6">Connectez-vous en tant que Admin</h2>
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 ">E-mail</label>
          <input type="email" placeholder="Entrez votre e-mail" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#ffca28]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 ">Mot de passe</label>
          <input type="password" placeholder="Entrez votre mot de passe" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#ffca28]" />
        </div>
        <Link to="/dashboard" className="block w-full bg-[#45484b] text-white py-3 rounded font-bold mt-4 shadow-md text-center hover:bg-black transition-colors">Se connecter</Link>
      </div>
    </div>
    <div className="mt-6 text-center space-y-4">
      <Link to="/forgot-password" className="text-[#ffca28] text-sm font-bold hover:cursor-pointer">Mot de passe oublié ?</Link>
      <p className="text-sm text-white">
        Vous n'avez pas de compte ? <Link to="/register" className="text-[#ffca28] font-bold hover:cursor-pointer ml-1">S'inscrire</Link>
      </p>
    </div>
  </div>
);

const RegisterPage = () => (
  <div className="min-h-screen bg-[#45484b] flex flex-col items-center justify-center p-4">
    <div className="mb-8"><RedProductLogo light /></div>
    <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 sm:p-8">
      <h2 className="text-lg font-medium text-gray-700 mb-6">Inscrivez-vous en tant que Admin</h2>
      <div className="space-y-5">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 ">Nom d'utilisateur</label>
          <input type="text" placeholder="Nom complet" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#ffca28]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500">E-mail</label>
          <input type="email" placeholder="E-mail" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#ffca28]" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500">Mot de passe</label>
          <input type="password" placeholder="Mot de passe" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#ffca28]" />
        </div>
        <Link to="/login" className="block w-full bg-[#45484b] text-white py-3 rounded font-bold mt-4 shadow-md text-center hover:bg-black transition-colors">S'inscrire</Link>
      </div>
    </div>
    <div className="mt-6 text-center">
      <p className="text-sm text-white">
        Vous avez déjà un compte ? <Link to="/login" className="text-[#ffca28] font-bold hover:cursor-pointer ml-1">Se connecter</Link>
      </p>
    </div>
  </div>
);

const ForgotPasswordPage = () => (
  <div className="min-h-screen bg-[#45484b] flex flex-col items-center justify-center p-4">
    <div className="mb-8"><RedProductLogo light /></div>
    <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 sm:p-8">
      <h2 className="text-lg font-medium text-gray-700 mb-2">Mot de passe oublié ?</h2>
      <p className="text-xs text-gray-500 mb-6">Entrez votre adresse e-mail pour réinitialiser votre mot de passe.</p>
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500">E-mail</label>
          <input type="email" placeholder="Entrez votre e-mail" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#ffca28]" />
        </div>
        <Link to="/login" className="block w-full bg-[#45484b] text-white py-3 rounded font-bold shadow-md text-center hover:bg-black transition-colors">Envoyer</Link>
      </div>
    </div>
    <div className="mt-6 text-center">
      <p className="text-sm text-white">
        Reenir à la<Link to="/login" className="text-[#ffca28] font-bold hover:cursor-pointer ml-1">connexion</Link>
      </p>
    </div>
  </div>
);

// --- MODAL, LAYOUT, DASHBOARD & HOTELS ---

const CreateHotelModal = ({ isOpen, onClose, searchTerm }) => {
  if (!isOpen) return null;
  const formFields = [
    { label: "Nom de l'hôtel", placeholder: "CAP Marniane" },
    { label: "Adresse", placeholder: "Les îles du saloum, Mar Lodj" },
    { label: "E-mail", placeholder: "information@gmail.com" },
    { label: "Numéro de téléphone", placeholder: "+221 77 777 77 77" },
    { label: "Prix par nuit", placeholder: "25.000 XOF" },
    { label: "Devise", placeholder: "F XOF", isSelect: true },
  ];
  const filteredFields = formFields.filter(f => advancedFilter(f.label, searchTerm) || advancedFilter(f.placeholder, searchTerm));
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-slideUp max-h-[95vh] flex flex-col">
        <div className="flex items-center p-4 border-b border-gray-100 shrink-0">
          <button onClick={onClose} className="mr-4 text-gray-500 hover:text-black"><MdArrowBack size={22} /></button>
          <h2 className=" text-xs font-bold text-gray-700">Créer un nouveau hôtel</h2>
        </div>
        <div className="p-4 sm:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFields.map((field, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700">{field.label}</label>
                {field.isSelect ? (
                  <select className="border border-gray-300 rounded-lg p-2.5 text-sm bg-white outline-none">
                    <option>F XOF</option><option>Euro</option><option>Dollar</option>
                  </select>
                ) : (
                  <input type="text" placeholder={field.placeholder} className="border border-gray-300 rounded-lg p-2.5 text-sm outline-none focus:ring-1 focus:ring-yellow-400" />
                )}
              </div>
            ))}
            <div className="col-span-full border-2 border-dashed border-gray-200 rounded-xl h-32 flex flex-col items-center justify-center text-gray-400">
              <MdImage size={40} className="mb-2 opacity-20" /><span className="text-xs font-medium">Ajouter une photo</span>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-end bg-gray-50/50">
          <button onClick={onClose} className="w-full sm:w-auto bg-[#4d4d4d] text-white px-10 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-black transition-colors">Enregistrer</button>
        </div>
      </div>
    </div>
  );
};

const MainLayout = ({ children, title, searchTerm, setSearchTerm }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden">
      {/* Sidebar Responsive */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#45484b] text-white flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 border-b border-white/5 flex justify-between items-center shrink-0">
          <RedProductLogo light />
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}><MdClose size={24} /></button>
        </div>
        <nav className="mt-4 flex-1 overflow-y-auto">
          <p className="px-6 py-3 text-[10px] font-bold tracking-widest opacity-50">Principal</p>
          <Link onClick={() => setIsSidebarOpen(false)} to="/dashboard" className={`flex items-center gap-4 px-6 py-3 text-sm transition-colors ${location.pathname === '/dashboard' ? 'bg-white text-gray-800' : 'hover:bg-white/10'}`}>
            <MdDashboard size={20} /> Dashboard
          </Link>
          <Link onClick={() => setIsSidebarOpen(false)} to="/hotels" className={`flex items-center gap-4 px-6 py-3 text-sm transition-colors ${location.pathname === '/hotels' ? 'bg-white text-gray-800' : 'hover:bg-white/10'}`}>
            <RiComputerFill size={20} /> Liste des hôtels
          </Link>
        </nav>
        <div className="p-6 border-t border-white/5"><UserAvatar showText light /></div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 sm:px-8 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-600 focus:outline-none"><MdMenu size={28} /></button>
            <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">{title}</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-1.5 bg-gray-50">
              <MdSearch className="text-gray-400 mr-2" size={18} />
              <input type="text" className="bg-transparent outline-none text-sm w-32 lg:w-48" placeholder="Recherche" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="relative cursor-pointer">
              <MdNotificationsNone size={24} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-[#ffca28] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-md border-2 border-white">3</span>
            </div>
            <UserAvatar size="8" />
            <Link to="/login"><MdLogout size={22} className="text-gray-400 hover:text-red-500" /></Link>
          </div>
        </header>

        {/* C'est ici que le scroll se passe */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          {children}
        </main>
      </div>

      {/* Overlay pour fermer la sidebar sur mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

const HotelsPage = ({ searchTerm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hotels = [
    { name: "Hôtel Terrou-Bi", loc: "Boulevard Martin Luther King Dakar, 11500", price: "25.000 XOF", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
    { name: "King Fahd Palace", loc: "Rte des Almadies, Dakar", price: "20.000 XOF", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    { name: "Radisson Blu", loc: "Rte de la Corniche O, Dakar 16868", price: "22.000 XOF", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
    { name: "Pullman Dakar Teranga", loc: "Place de l'Independance, 10 Rue PL 29, Dakar", price: "30.000 XOF", img: "https://images.unsplash.com/photo-1561501900-3701fa6a0864" },
    { name: "Hôtel Lac Rose", loc: "Lac Rose, Dakar", price: "25.000 XOF", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
    { name: "Hôtel Saly", loc: "Mbour, Sénégal", price: "20.000 XOF", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2" },
    { name: "Palm Beach Resort & Saly", loc: "BP64, Saly 23000", price: "22.000 XOF", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9" },
    { name: "Pullman Dakar Teranga", loc: "Place de l'Independance, 10 Rue PL 29, Dakar", price: "30.000 XOF", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
  ];
  
  const filtered = hotels.filter(h => advancedFilter(h.name, searchTerm) || advancedFilter(h.price, searchTerm));

  return (
    <div className="animate-fadeIn">
      {/* HEADER : Empilé sur mobile (flex-col), en ligne sur desktop (sm:flex-row) */}
      <div className="-mx-4 sm:-mx-8 -mt-4 sm:-mt-8 mb-6 bg-white px-4 sm:px-8 py-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-light text-gray-800">
            Hôtels <span className="text-gray-300 ml-1 text-3xl block sm:inline">{filtered.length}</span>
          </h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-3 sm:py-2 rounded-xl text-xs font-bold shadow-sm active:scale-95 transition-all"
        >
          <MdAdd size={20} /> Créer un nouveau hôtel
        </button>
      </div>

      {/* GRILLE : 1 colonne sur mobile, 2 sur tablette, 4 sur desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((h, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src={`${h.img}?w=600&h=400&fit=crop`} className="h-48 w-full object-cover" alt="hotel" />
            <div className="p-5">
              <p className="text-[11px] text-[#a1604a] font-bold">{h.loc}</p>
              <h3 className="font-bold text-gray-800 text-base mt-1">{h.name}</h3>
              <p className="text-gray-500 text-sm mt-3">{h.price} par nuit</p>
            </div>
          </div>
        ))}
      </div>
      <CreateHotelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} searchTerm={searchTerm} />
    </div>
  );
};

const DashboardPage = ({ searchTerm }) => {
  const stats = [
    { label: "Formulaires", value: "125", icon: <FaEnvelopeOpen />, color: "bg-purple-400" },
    { label: "Messages", value: "40", icon: null, color: "bg-teal-400" },
    { label: "Utilisateurs", value: "600", icon: <MdPeople />, color: "bg-orange-400" },
    { label: "E-mails", value: "25", icon: <FaEnvelopeOpen />, color: "bg-red-500" },
    { label: "Hôtels", value: "40", icon: null, color: "bg-purple-600" },
    { label: "Entités", value: "02", icon: <MdPeople />, color: "bg-blue-600" },
  ];
  const filteredStats = stats.filter(s => 
    advancedFilter(s.label, searchTerm) || advancedFilter(s.value, searchTerm)
  );

  return (
    <div className="animate-fadeIn">
      {/* HEADER BIENVENUE RESPONSIVE */}
      <div className="-mx-4 sm:-mx-8 -mt-4 sm:-mt-8 mb-6 sm:mb-10 bg-white px-4 sm:px-8 py-6 border-b border-gray-200">
        <h2 className="text-xl sm:text-2xl font-light text-gray-800">Bienvenue sur RED Product</h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      {/* GRILLE RESPONSIVE : 1 colonne (mobile), 2 (tablette), 3 (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredStats.map((s, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 rounded-xl shadow-sm flex items-center gap-4 sm:gap-5 border border-gray-100">
            {/* ICON CIRCLE */}
            <div className={`${s.color} text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-sm shrink-0`}>
              {s.label === "Messages" || s.label === "Hôtels" ? "P" : s.icon}
            </div>

            {/* TEXT CONTENT */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-gray-700">{s.value}</span>
                  <span className="text-gray-400 text-sm sm:text-base font-normal truncate">{s.label}</span>
                </div>
                {/* LA PHRASE DEMANDÉE SUR CHAQUE ÉLÉMENT */}
                <p className="text-gray-400 text-sm sm:text-base truncate">Je ne sais pas quoi faire</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/hotels" element={<MainLayout title="Liste des hôtels" searchTerm={searchTerm} setSearchTerm={setSearchTerm}><HotelsPage searchTerm={searchTerm} /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout title="Dashboard" searchTerm={searchTerm} setSearchTerm={setSearchTerm}><DashboardPage searchTerm={searchTerm} /></MainLayout>} />
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <span className="text-gray-400 text-sm font-medium truncate">Je ne sais pas quoi faire</span> */}
      </Routes>
    </Router>
  );
}