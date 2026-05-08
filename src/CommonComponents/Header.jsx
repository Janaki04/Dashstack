import React from 'react';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';

/**
 * @param {function} onMenuClick - Function to open the mobile sidebar
 */
const Header = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-50 shrink-0">
      
      {/* Left Section: Mobile Menu & Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Hamburger Button: Visible only on mobile (< 1024px) */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition-colors"
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>

        {/* Search Bar: Hidden on small mobile devices */}
        <div className="relative w-full max-w-[380px] hidden sm:block">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
            size={18} 
          />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-11 pr-4 py-2.5 bg-[#F5F6FA] border border-gray-100 rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Section: Notifications, Language, Profile */}
      <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
        
        {/* Notifications */}
        <div className="relative cursor-pointer group p-1.5 hover:bg-gray-50 rounded-full transition-colors">
          <Bell className="text-gray-400 group-hover:text-[#4880FF]" size={20} />
          <span className="absolute top-1 right-1 bg-[#F35421] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
            6
          </span>
        </div>
        
        {/* Language Selector: Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src="https://flagcdn.com/w40/gb.png" 
            alt="English" 
            className="w-6 h-4 object-cover rounded-sm shadow-sm" 
          />
          <span className="text-sm font-bold text-[#202224]">English</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="relative">
            <img 
              src="https://i.pravatar.cc/150?u=moni" 
              alt="Moni Roy" 
              className="w-9 h-9 rounded-full object-cover border border-gray-100 shadow-sm" 
            />
            {/* Online Status Indicator */}
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="hidden lg:block">
            <p className="text-sm font-black text-[#202224] leading-none mb-1">Moni Roy</p>
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider text-right lg:text-left">Admin</p>
          </div>

          <div className="hidden lg:flex p-1 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
            <ChevronDown size={12} className="text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;