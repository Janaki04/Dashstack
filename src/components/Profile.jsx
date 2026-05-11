import React, { useState } from 'react';
import { Camera, Mail, Shield, User, Calendar } from 'lucide-react';

const Profile = () => {
  // Updated state for profile-specific details
  const [userData] = useState({
    name: "Moni Roy",
    email: "moni.roy@example.com",
    role: "Admin",
    memberSince: "January 2024",
    status: "Active",
    bio: "Passionate about creating hybrid dashboard experiences and managing scalable web applications."
  });

  return (
    <div className="space-y-8 py-4 font-sans max-w-6xl mx-auto">
      <h2 className="text-start text-3xl font-black text-[#202224]">Profile Details</h2>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
        
        {/* Profile Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-gray-50 pb-12">
          <div className="relative group">
            <img 
              src="https://i.pravatar.cc/150?u=moni" 
              alt="Profile" 
              className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 bg-[#4880FF] p-2 rounded-xl text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <Camera size={20} />
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h3 className="text-2xl font-black text-[#202224]">{userData.name}</h3>
              <span className="w-fit mx-auto md:mx-0 px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full uppercase tracking-wider">
                {userData.status}
              </span>
            </div>
            <p className="text-gray-400 font-medium mb-4">{userData.role} • Bright Web Dashboard</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold bg-[#F1F4F9] px-4 py-2 rounded-lg">
                <Calendar size={16} className="text-[#4880FF]" />
                Joined {userData.memberSince}
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Full Name (Read Only) */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-400 ml-1">
              <User size={14} /> Full Name
            </label>
            <div className="w-full px-6 py-4 bg-[#F1F4F9] rounded-xl text-sm font-bold text-[#202224] border border-transparent">
              {userData.name}
            </div>
          </div>

          {/* Email Address (Read Only) */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-400 ml-1">
              <Mail size={14} /> Email Address
            </label>
            <div className="w-full px-6 py-4 bg-[#F1F4F9] rounded-xl text-sm font-bold text-[#202224]">
              {userData.email}
            </div>
          </div>

          {/* User Role (Read Only) */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-400 ml-1">
              <Shield size={14} /> Account Role
            </label>
            <div className="w-full px-6 py-4 bg-[#F1F4F9] rounded-xl text-sm font-bold text-[#202224]">
              {userData.role}
            </div>
          </div>

          {/* Bio (Read Only) */}
          <div className="space-y-2 md:row-span-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">Bio / Description</label>
            <div className="w-full px-6 py-4 bg-[#F1F4F9] rounded-xl text-sm font-semibold text-gray-500 leading-relaxed min-h-[120px]">
              {userData.bio}
            </div>
          </div>

          {/* Status (Read Only) */}
          <div className="space-y-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">Platform Status</label>
            <div className="w-full px-6 py-4 bg-[#F1F4F9] rounded-xl text-sm font-bold text-[#202224]">
              Verified Account
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex justify-center md:justify-start gap-4">
        <button className="bg-white border border-gray-200 text-gray-500 px-12 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
                Edit Profile
          </button>
          <button className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-12 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-100">
         Update
          </button>
      
        </div>
      </div>
    </div>
  );
};

export default Profile;