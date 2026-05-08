import React, { useState } from 'react';
import { 
  Plus, Inbox as InboxIcon, Star, Send, FileText, 
  AlertCircle, Bookmark, Trash2, Search, Archive, 
  Info, ChevronLeft, ChevronRight 
} from 'lucide-react';

const Inbox = () => {
  const [emails, setEmails] = useState([
    { id: 1, sender: "Jullu Jalal", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM", label: "Primary", starred: false },
    { id: 2, sender: "Minerva Barnett", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM", label: "Work", starred: false },
    { id: 3, sender: "Peter Lewis", subject: "Vacation Home Rental Success", time: "7:52 PM", label: "Friends", starred: false },
    { id: 4, sender: "Anthony Briggs", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", label: "Social", starred: true },
    { id: 5, sender: "Clifford Morgan", subject: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM", label: "Social", starred: false },
    { id: 6, sender: "Cecilia Webster", subject: "Always Look On The Bright Side Of Life", time: "3:52 PM", label: "Friends", starred: false },
    { id: 7, sender: "Harvey Manning", subject: "Curling Irons Are As Individual As The Women Who Use Them", time: "2:30 PM", label: "Work", starred: true },
  ]);

  const toggleStar = (id) => {
    setEmails(emails.map(email => 
      email.id === id ? { ...email, starred: !email.starred } : email
    ));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 font-sans">
      <aside className="w-full lg:w-72 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <button className="w-full bg-[#4880FF] hover:bg-[#3b6de0] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mb-8">
            <Plus size={18} /> Compose
          </button>

          <nav className="space-y-1 mb-10">
            <h3 className="px-4 text-sm font-black text-[#202224] mb-4">My Email</h3>
            <NavItem icon={<InboxIcon size={18}/>} label="Inbox" count="1253" active />
            <NavItem icon={<Star size={18}/>} label="Starred" count="245" />
            <NavItem icon={<Send size={18}/>} label="Sent" count="24,532" />
            <NavItem icon={<FileText size={18}/>} label="Draft" count="09" />
            <NavItem icon={<AlertCircle size={18}/>} label="Spam" count="14" />
            <NavItem icon={<Bookmark size={18}/>} label="Important" count="18" />
            <NavItem icon={<Trash2 size={18}/>} label="Bin" count="9" />
          </nav>

          <div className="space-y-4">
            <h3 className="px-4 text-sm font-black text-[#202224]">Label</h3>
            <div className="space-y-2 px-4 text-sm font-bold text-gray-500">
              <LabelItem color="bg-emerald-400" label="Primary" />
              <LabelItem color="bg-blue-400" label="Social" />
              <LabelItem color="bg-orange-400" label="Work" />
              <LabelItem color="bg-purple-400" label="Friends" />
              <button className="flex items-center gap-3 pt-2 text-gray-400 hover:text-[#4880FF]">
                <Plus size={16} /> Create New Label
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search mail" 
              className="w-full pl-12 pr-4 py-3 bg-[#F1F4F9] border-none rounded-full text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          
          <div className="flex items-center border border-gray-100 rounded-xl overflow-hidden text-gray-400">
            <button className="p-3 hover:bg-gray-50 border-r border-gray-100"><Archive size={18} /></button>
            <button className="p-3 hover:bg-gray-50 border-r border-gray-100"><Info size={18} /></button>
            <button className="p-3 hover:bg-gray-50 text-red-400"><Trash2 size={18} /></button>
          </div>
        </div>

        <div className="divide-y divide-gray-50">
          {emails.map((email) => (
            <div key={email.id} className="flex items-center gap-4 p-5 hover:bg-gray-50/80 transition-colors cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#4880FF]" />
              <button onClick={() => toggleStar(email.id)} className={`transition-colors ${email.starred ? 'text-yellow-400' : 'text-gray-300'}`}>
                <Star size={18} fill={email.starred ? "currentColor" : "none"} />
              </button>
              
              <div className="flex-1 flex items-center gap-6 overflow-hidden">
                <span className="text-sm font-black text-[#202224] min-w-[120px]">{email.sender}</span>
                <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider min-w-[70px] text-center" style={getLabelStyle(email.label)}>
                  {email.label}
                </span>
                <span className="text-sm font-semibold text-gray-500 truncate">{email.subject}</span>
              </div>
              
              <span className="text-sm font-bold text-gray-400 whitespace-nowrap ml-4">{email.time}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};


const NavItem = ({ icon, label, count, active = false }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-[#4880FF15] text-[#4880FF]' : 'text-gray-500 hover:bg-gray-50'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm font-bold">{label}</span>
    </div>
    <span className={`text-[11px] font-black ${active ? 'text-[#4880FF]' : 'text-gray-400'}`}>{count}</span>
  </div>
);

const LabelItem = ({ color, label }) => (
  <div className="flex items-center gap-3">
    <div className={`w-3 h-3 rounded-md ${color} border-2 border-white shadow-sm`} />
    <span>{label}</span>
  </div>
);

const getLabelStyle = (label) => {
  const styles = {
    "Primary": { backgroundColor: "#E2F6E9", color: "#00B69B" },
    "Social": { backgroundColor: "#E5F2FF", color: "#2D9CDB" },
    "Work": { backgroundColor: "#FFF2E5", color: "#FFA755" },
    "Friends": { backgroundColor: "#EBE6FF", color: "#8833FF" },
  };
  return styles[label] || styles["Primary"];
};

export default Inbox;