import React from 'react';
import logo from "../assets/Logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Heart, Mail, ListOrdered, Package, 
  Tag, Calendar, CheckSquare, Contact, FileText, Component, 
  Users, Table as TableIcon, Settings, LogOut, X 
} from 'lucide-react';
import { toast } from 'react-toastify';


const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout Sucessfully")
    localStorage.removeItem('isLoggedIn');
    setIsOpen(false); 
    navigate('/'); 
  };

  const menuGroups = [
    {
      title: null,
      items: [
        { icon: <LayoutDashboard size={20}/>, label: "Dashboard", path: "/dashboard" },
        { icon: <ShoppingBag size={20}/>, label: "Products", path: "/products" },
        { icon: <Heart size={20}/>, label: "Favorites", path: "/favorites" },
        { icon: <Mail size={20}/>, label: "Inbox", path: "/inbox" },
        { icon: <ListOrdered size={20}/>, label: "Order Lists", path: "/OrderLists" },
        { icon: <Package size={20}/>, label: "Product Stock", path: "/ProductStock" },
      ]
    },
    {
      title: "Pages",
      items: [
        { icon: <Tag size={20}/>, label: "Pricing", path: "/pricing" },
        { icon: <Calendar size={20}/>, label: "Calendar", path: "/calendar" },
        { icon: <CheckSquare size={20}/>, label: "To-Do", path: "/todo-list" },
        { icon: <Contact size={20}/>, label: "Contact", path: "/contact" },
        { icon: <FileText size={20}/>, label: "Invoice", path: "/invoice" },
        { icon: <Component size={20}/>, label: "UI Elements", path: "/ui-elements" },
        { icon: <Users size={20}/>, label: "Team", path: "/team" },
        { icon: <TableIcon size={20}/>, label: "Table", path: "/table" },
      ]
    }
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[60] lg:hidden backdrop-blur-sm transition-opacity" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-[70] w-64 bg-white border-r border-gray-100
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:relative lg:translate-x-0 flex flex-col h-screen
      `}>
        
        <div className="p-6 flex justify-between items-center shrink-0">
          <img src={logo} alt="DashStack Logo" className="h-8 w-auto" />
          <button 
            className="lg:hidden p-1 hover:bg-gray-100 rounded-md text-gray-400" 
            onClick={() => setIsOpen(false)}
          >
            <X size={20}/>
          </button>
        </div>
        
        <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar pb-4">
          {menuGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-6">
              {group.title && (
                <p className="px-4 mb-3 text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                  {group.title}
                </p>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link 
                      key={item.label} 
                      to={item.path}
                      onClick={() => setIsOpen(false)} // Closes mobile sidebar on link click
                      className={`
                        relative flex items-center gap-4 px-4 py-3 rounded-lg font-semibold transition-all duration-200 group
                        ${isActive 
                          ? 'bg-[#4880FF] text-white shadow-lg shadow-blue-100' 
                          : 'text-[#202224] hover:bg-blue-50 hover:text-[#4880FF]'}
                      `}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-white rounded-r-full" />
                      )}

                      <span className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#4880FF]'}`}>
                        {item.icon}
                      </span>
                      <span className="text-sm tracking-wide">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-100 space-y-1 shrink-0">
            <Link 
              to="/settings" 
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-semibold transition-all 
                ${location.pathname === '/settings' ? 'bg-[#4880FF] text-white shadow-lg' : 'text-[#202224] hover:bg-gray-50'}`}
            >
              <Settings size={20} className={location.pathname === '/settings' ? 'text-white' : 'text-gray-400'} />
              <span className="text-sm">Settings</span>
            </Link>
            
            <button 
              onClick={handleLogout} 
              className="w-full flex items-center gap-4 px-4 py-3 rounded-lg font-semibold text-[#202224] hover:bg-red-50 hover:text-red-500 transition-all group/logout"
            >
              <LogOut size={20} className="text-gray-400 group-hover/logout:text-red-500" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
      `}</style>
    </>
  );
};

export default Sidebar;