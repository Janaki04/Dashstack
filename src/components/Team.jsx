import React, { useState } from 'react';
import { Plus, ArrowLeft, Camera } from 'lucide-react';
import { toast } from 'react-toastify';

const Team = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [members, setMembers] = useState([
    { name: "Jason Price", role: "Admin", email: "janick_parisian@yahoo.com", img: "https://i.pravatar.cc/150?u=jason" },
    { name: "Jukkoe Sisao", role: "CEO", email: "sibyl_kozey@gmail.com", img: "https://i.pravatar.cc/150?u=jukkoe" },
    { name: "Harriet King", role: "CTO", email: "nadia_block@hotmail.com", img: "https://i.pravatar.cc/150?u=harriet" },
    { name: "Lenora Benson", role: "Lead", email: "feil.wallace@kunde.us", img: "https://i.pravatar.cc/150?u=lenora" },
    { name: "Olivia Reese", role: "Strategist", email: "kemmer.hattie@cremin.us", img: "https://i.pravatar.cc/150?u=olivia" },
    { name: "Bertha Valdez", role: "CEO", email: "loraine.koelpin@tromp.io", img: "https://i.pravatar.cc/150?u=bertha" },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    img: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      toast.error("Please enter the member's name");
      return false;
    }
    if (!formData.role.trim()) {
      toast.error("Please assign a role");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newMember = {
      ...formData,
      img: formData.img || `https://i.pravatar.cc/150?u=${formData.name}`
    };

    setMembers([newMember, ...members]);
    toast.success(`${formData.name} added to the team!`);
    setShowAddForm(false);
    setFormData({ name: '', role: '', email: '', img: null });
  };

  if (showAddForm) {
    return (
      <div className="space-y-6 font-sans max-w-4xl mx-auto py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowAddForm(false)} 
            className="p-2 hover:bg-white rounded-full transition-all shadow-sm border border-gray-100"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <h2 className="text-3xl font-black text-[#202224]">Add New Member</h2>
        </div>

        <div className="bg-white rounded-[32px] border border-gray-50 shadow-sm p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Pic Upload */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-[#F1F4F9] border-4 border-white shadow-md overflow-hidden flex items-center justify-center">
                  {formData.img ? (
                    <img src={formData.img} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Camera size={40} className="text-gray-300" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-[#4880FF] p-2 rounded-full text-white cursor-pointer shadow-lg hover:scale-110 transition-transform">
                  <Plus size={20} />
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              </div>
              <p className="text-sm font-bold text-gray-400">Upload Profile Photo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Full Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Role</label>
                <input 
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g. CEO, Lead, etc."
                  className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="flex text-sm font-bold text-[#202224]">Email Address</label>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="member@company.com"
                  className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#4880FF] hover:bg-[#3b6de0] text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
            >
              Confirm and Add Member
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-4 font-sans">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-[#202224]">Team</h2>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-100 flex items-center gap-2"
        >
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