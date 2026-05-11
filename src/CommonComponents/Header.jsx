import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Menu, ChevronDown, User, Settings, LogOut, X, MessageSquare, Info, Mail, Shield } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = ({ onMenuClick }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifBarOpen, setIsNotifBarOpen] = useState(false);
  const [notifications, setNotifications] = useState(6);

  const langRef = useRef(null);
  const profileRef = useRef(null);
  
  const navigate = useNavigate();
  const location = useLocation(); // Correctly initialize useLocation

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) setIsLangOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Standard logout procedure
    localStorage.removeItem('isLoggedIn');
    toast.success("Logged out successfully");
    setIsProfileOpen(false); // Close dropdown
    navigate('/'); 
  };

  return (
    <>
      <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 shrink-0">
        
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onMenuClick} className="lg:hidden p-2 hover:bg-gray-50 rounded-lg text-gray-500">
            <Menu size={22} />
          </button>
          <div className="relative w-full max-w-[380px] hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-11 pr-4 py-2.5 bg-[#F5F6FA] border border-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
          
          {/* Notifications */}
          <div 
            className="relative cursor-pointer group p-1.5 hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => setIsNotifBarOpen(true)}
          >
            <Bell className="text-gray-400 group-hover:text-[#4880FF]" size={20} />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 bg-[#F35421] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                {notifications}
              </span>
            )}
          </div>
          
          {/* Language */}
          <div className="relative" ref={langRef}>
            <div onClick={() => setIsLangOpen(!isLangOpen)} className="hidden md:flex items-center gap-2.5 cursor-pointer">
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 object-cover rounded-sm" />
              <span className="text-sm font-bold text-[#202224]">English</span>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </div>
            {isLangOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                   <img src="https://flagcdn.com/w40/fr.png" className="w-4 h-3" alt="FR" /> French
                </button>
              </div>
            )}
          </div>

          {/* Profile Popover Section */}
          <div className="relative" ref={profileRef}>
            <div 
              className="flex items-center gap-3 pl-4 border-l border-gray-100 cursor-pointer group" 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="relative">
                <img src="https://i.pravatar.cc/150?u=moni" alt="User" className="w-9 h-9 rounded-full border border-gray-100" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-black text-[#202224] group-hover:text-[#4880FF] transition-colors">Moni Roy</p>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-tighter">Admin</p>
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* ENHANCED PROFILE POP OVER */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* User Info Header */}
                <div className="bg-[#4880FF]/5 p-5 border-b border-gray-50">
                  <div className="flex items-center gap-4">
                    <img src="https://i.pravatar.cc/150?u=moni" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                    <div>
                      <h4 className="text-base font-black text-[#202224]">Moni Roy</h4>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Mail size={12} />
                        <span className="text-[11px] font-medium">moni@admin.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-2">
                  <Link 
                    to="/profile" 
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-[#4880FF] rounded-xl transition-colors"
                  >
                    <User size={18} /> My Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    onClick={() => setIsProfileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                      location.pathname === '/settings' ? 'bg-blue-50 text-[#4880FF]' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Settings size={18} /> Account Settings
                  </Link>
                </div>

                <div className="p-2 border-t border-gray-50 bg-gray-50/50">
                  <button 
                    onClick={handleLogout} // Fixed: Correct reference
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-black text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Notification Sidebar logic remains same */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isNotifBarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsNotifBarOpen(false)}
      />

      <aside className={`fixed right-0 top-0 h-full w-full max-w-[350px] bg-white shadow-2xl z-[70] transition-transform duration-300 ease-in-out transform ${isNotifBarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-black text-[#202224]">Notifications</h2>
              <p className="text-sm text-gray-500">You have {notifications} unread alerts</p>
            </div>
            <button onClick={() => setIsNotifBarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            <NotificationItem 
              icon={<MessageSquare size={18} className="text-blue-500" />}
              title="New Message"
              desc="Moni Roy sent you a message"
              time="2 min ago"
              isNew
            />
          </div>

          <button 
            onClick={() => {setNotifications(0); setIsNotifBarOpen(false);}}
            className="w-full py-3 mt-4 bg-blue-50 text-[#4880FF] font-bold rounded-xl hover:bg-blue-100"
          >
            Mark all as read
          </button>
        </div>
      </aside>
    </>
  );
};

const NotificationItem = ({ icon, title, desc, time, isNew }) => (
  <div className={`p-4 rounded-xl border border-gray-50 flex gap-4 transition-colors cursor-pointer hover:bg-gray-50 ${isNew ? 'bg-blue-50/30 border-blue-100' : ''}`}>
    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">{icon}</div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <span className="text-[10px] text-gray-400 font-medium">{time}</span>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Header;