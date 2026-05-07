// Header.jsx
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';

const Header = ({ onMenuClick }) => (
  <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
    <div className="flex items-center gap-4 flex-1">
      <button onClick={onMenuClick} className="lg:hidden p-2 hover:bg-gray-100 rounded">
        <Menu size={24} />
      </button>
      <div className="relative w-full max-w-md hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-100 outline-none"
        />
      </div>
    </div>

    <div className="flex items-center gap-3 md:gap-6">
      <div className="relative cursor-pointer p-1">
        <Bell className="text-gray-500" size={20} />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">6</span>
      </div>
      
      <div className="hidden sm:flex items-center gap-2 cursor-pointer">
        <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-6 h-4 object-cover rounded-sm" />
        <span className="text-sm font-semibold">English</span>
        <ChevronDown size={14} className="text-gray-400" />
      </div>

      <div className="flex items-center gap-3 pl-2 border-l border-gray-100">
        <img src="https://i.pravatar.cc/150?u=moni" alt="User" className="w-9 h-9 rounded-full object-cover" />
        <div className="hidden lg:block">
          <p className="text-sm font-bold leading-tight">Moni Roy</p>
          <p className="text-gray-500 text-[11px] font-medium">Admin</p>
        </div>
        <div className="p-1 border rounded-full hidden lg:block">
          <ChevronDown size={12} className="text-gray-400" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;