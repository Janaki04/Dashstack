import React, { useState } from 'react';
import { Mail, Plus } from 'lucide-react';

const Contact = () => {
  const contacts = [
    { id: 1, name: "Jason Price", email: "kuhlman.jermey@yahoo.com", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop" },
    { id: 2, name: "Duane Dean", email: "rusty.botsford@wilfrid.io", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { id: 3, name: "Jonathan Barker", email: "cora_haley@quinn.biz", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
    { id: 4, name: "Rosie Glover", email: "lockman.marques@hotmail.com", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { id: 5, name: "Patrick Greer", email: "pearlie.eichmann@trevion.net", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
    { id: 6, name: "Darrell Ortega", email: "chaya.shields@ferry.info", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-3xl font-black text-[#202224]">Contact</h2>
        <button className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-100 flex items-center gap-2">
          Add New Contact
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <div 
            key={contact.id} 
            className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="h-64 w-full overflow-hidden">
              <img 
                src={contact.image} 
                alt={contact.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center space-y-1">
              <h3 className="text-lg font-bold text-[#202224] tracking-tight">
                {contact.name}
              </h3>
              <p className="text-sm text-gray-400 font-medium pb-4">
                {contact.email}
              </p>

              <button className="inline-flex items-center gap-2 px-8 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-[#4880FF] hover:border-[#4880FF] transition-all">
                <Mail size={16} />
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;