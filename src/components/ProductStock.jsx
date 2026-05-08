import React, { useState, useMemo } from 'react';
import { Search, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductStock = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const initialStock = [
    { id: 1, name: "Apple Watch Series 4", category: "Digital Product", price: 690.00, piece: 63, colors: ["#000000", "#9CA3AF", "#FCA5A5"], image: "https://images.unsplash.com/photo-1546868871-70c122467d9b?w=100" },
    { id: 2, name: "Microsoft Headsquare", category: "Digital Product", price: 190.00, piece: 13, colors: ["#000000", "#FCA5A5", "#60A5FA", "#FDE047"], image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" },
    { id: 3, name: "Women's Dress", category: "Fashion", price: 640.00, piece: 635, colors: ["#701A75", "#93C5FD", "#1E1B4B", "#4338CA"], image: "https://images.unsplash.com/photo-1539008835279-43467f5b233b?w=100" },
    { id: 4, name: "Samsung A50", category: "Mobile", price: 400.00, piece: 67, colors: ["#312E81", "#000000", "#881337"], image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100" },
    { id: 5, name: "Camera", category: "Electronic", price: 420.00, piece: 52, colors: ["#312E81", "#000000", "#881337"], image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100" },
  ];

  const filteredStock = useMemo(() => {
    return initialStock.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-start text-3xl font-bold text-[#202224]">Product Stock</h2>
        
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search product name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-50">
                <th className="p-5 text-sm font-bold text-[#202224]">Image</th>
                <th className="p-5 text-sm font-bold text-[#202224]">Product Name</th>
                <th className="p-5 text-sm font-bold text-[#202224]">Category</th>
                <th className="p-5 text-sm font-bold text-[#202224]">Price</th>
                <th className="p-5 text-sm font-bold text-[#202224]">Piece</th>
                <th className="p-5 text-sm font-bold text-[#202224]">Available Color</th>
                <th className="p-5 text-sm font-bold text-[#202224] text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredStock.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="p-5 text-sm font-semibold text-[#202224]">{item.name}</td>
                  <td className="p-5 text-sm text-gray-500">{item.category}</td>
                  <td className="p-5 text-sm font-bold text-[#202224]">${item.price.toFixed(2)}</td>
                  <td className="p-5 text-sm text-gray-500 font-medium">{item.piece}</td>
                  <td className="p-5">
                    <div className="flex gap-2">
                      {item.colors.map((color, idx) => (
                        <div 
                          key={idx} 
                          className="w-4 h-4 rounded-full border border-gray-100" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center items-center gap-2">
                      <button className="p-2 bg-gray-50 text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-gray-100 rounded-lg transition-all">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 border border-gray-100 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center py-2">
        <p className="text-sm text-gray-400 font-medium">Showing 1-{filteredStock.length} of 78</p>
        <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button className="p-2 hover:bg-gray-50 border-r border-gray-200 text-gray-400"><ChevronLeft size={20} /></button>
          <button className="p-2 hover:bg-gray-50 text-gray-400"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductStock;