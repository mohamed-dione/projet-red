const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <MdDashboard size={22} /> },
    { path: "/hotels", label: "Liste des hôtels", icon: <MdList size={22} /> },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#45484b] text-white flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Logo & Close Button */}
      <div className="p-5 border-b border-white/5 flex justify-between items-center shrink-0">
        <RedProductLogo light />
        <button className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
          <MdClose size={24} />
        </button>
      </div>

      {/* Liens de Navigation */}
      <nav className="mt-4 flex-1">
        <p className="px-6 py-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest opacity-60">Principal</p>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`group flex items-center gap-4 px-6 py-3.5 text-sm font-medium transition-all ${
                location.pathname === item.path 
                  ? 'bg-white text-gray-800 shadow-lg' 
                  : 'text-gray-300 hover:bg-black/20 hover:text-white'
              }`}
            >
              <span className={location.pathname === item.path ? 'text-gray-800' : 'group-hover:text-[#ffca28]'}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer Profile */}
      <div className="p-6 border-t border-white/5 bg-black/10">
        <UserAvatar showText={true} light={true} />
      </div>
    </aside>
  );
};