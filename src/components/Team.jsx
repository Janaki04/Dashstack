import React from 'react';
import { Plus } from 'lucide-react';

const Team = () => {
  const members = [
    { name: "Jason Price", role: "Admin", email: "janick_parisian@yahoo.com", img: "https://i.pravatar.cc/150?u=jason" },
    { name: "Jukkoe Sisao", role: "CEO", email: "sibyl_kozey@gmail.com", img: "https://i.pravatar.cc/150?u=jukkoe" },
    { name: "Harriet King", role: "CTO", email: "nadia_block@hotmail.com", img: "https://i.pravatar.cc/150?u=harriet" },
    { name: "Lenora Benson", role: "Lead", email: "feil.wallace@kunde.us", img: "https://i.pravatar.cc/150?u=lenora" },
    { name: "Olivia Reese", role: "Strategist", email: "kemmer.hattie@cremin.us", img: "https://i.pravatar.cc/150?u=olivia" },
    { name: "Bertha Valdez", role: "CEO", email: "loraine.koelpin@tromp.io", img: "https://i.pravatar.cc/150?u=bertha" },
    { name: "Harriett Payne", role: "Digital Marketer", email: "nannie_west@estrella.tv", img: "https://i.pravatar.cc/150?u=harriett" },
    { name: "George Bryant", role: "Social Media", email: "delmer.kling@gmail.com", img: "https://i.pravatar.cc/150?u=george" },
    { name: "Lily French", role: "Strategist", email: "lucienne.herman@hotmail.com", img: "https://i.pravatar.cc/150?u=lily" },
    { name: "Howard Adkins", role: "CEO", email: "wiegand.leonor@herman.us", img: "https://i.pravatar.cc/150?u=howard" },
    { name: "Earl Bowman", role: "Digital Marketer", email: "waino_altenwerth@nicolette.tv", img: "https://i.pravatar.cc/150?u=earl" },
    { name: "Patrick Padilla", role: "Social Media", email: "octavia.nienow@gleichner.net", img: "https://i.pravatar.cc/150?u=patrick" },
  ];

  return (
    <div className="space-y-8 py-4 font-sans">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-[#202224]">Team</h2>
        <button className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-100 flex items-center gap-2">
          <Plus size={18} /> Add New Member
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-[32px] p-8 text-center border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
               <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 10 Q 20 0 40 10 T 80 10 T 120 10" fill="none" stroke="black" strokeWidth="0.5" />
                <path d="M0 30 Q 30 20 60 30 T 120 30" fill="none" stroke="black" strokeWidth="0.5" />
                <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="black" strokeWidth="0.5" />
                <path d="M0 70 Q 35 60 70 70 T 140 70" fill="none" stroke="black" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-lg font-black text-[#202224]">{member.name}</h3>
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">{member.role}</p>
              <p className="text-xs font-semibold text-gray-400 truncate w-full px-2">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;