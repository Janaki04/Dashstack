import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    siteName: "Bright Web",
    copyRight: "All rights Reserved@brightweb",
    seoTitle: "Bright web is a hybrid dashboard",
    seoDescription: "Bright web is a hybrid dashboard",
    seoKeywords: "CEO"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8 py-4 font-sans max-w-6xl mx-auto">
      <h2 className="text-start text-3xl font-black text-[#202224]">General Settings</h2>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-16 flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-12">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mb-3 cursor-pointer hover:bg-gray-200 transition-colors">
            <Camera size={28} />
          </div>
          <button className="text-[#4880FF] text-sm font-bold hover:underline">
            Upload Logo
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          
          <div className="space-y-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">Site Name</label>
            <input 
              type="text" 
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">Copy Right</label>
            <input 
              type="text" 
              name="copyRight"
              value={formData.copyRight}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">SEO Title</label>
            <input 
              type="text" 
              name="seoTitle"
              value={formData.seoTitle}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div className="space-y-2 row-span-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">SEO Description</label>
            <textarea 
              name="seoDescription"
              value={formData.seoDescription}
              onChange={handleChange}
              rows={6}
              className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="flex text-sm font-bold text-gray-400 ml-1">SEO Keywords</label>
            <input 
              type="text" 
              name="seoKeywords"
              value={formData.seoKeywords}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

        </div>

        <button className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-24 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-100">
          Save
        </button>
      </div>
    </div>
  );
};

export default GeneralSettings;