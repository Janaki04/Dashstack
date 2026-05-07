import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import watch from "../assets/Bitmap.png"

const Favorites = () => {
  const favoriteItems = [
    { id: 1, name: "Apple Watch Series 4", price: 120.00, rating: 5, reviews: 131, isFavorite: true, image:watch },
    { id: 2, name: "Air-Max-270", price: 60.00, rating: 4, reviews: 64, isFavorite: false, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Minimal Chair Tool", price: 24.59, rating: 5, reviews: 63, isFavorite: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Amazfit Vip", price: 78.35, rating: 4, reviews: 12, isFavorite: false, image:watch },
    { id: 5, name: "Gumbo Mouse", price: 32.43, rating: 3, reviews: 8, isFavorite: false, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Camera Tripod", price: 50.00, rating: 5, reviews: 45, isFavorite: false, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-[#202224]">Favorites</h2>
      
      {/* 3-Column Grid for Desktop, 1 for Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteItems.map((item) => (
          <FavoriteCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const FavoriteCard = ({ item }) => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
      {/* Image Preview Area */}
      <div className="relative bg-[#F9FAFB] rounded-2xl p-6 mb-4 flex justify-center items-center h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Navigation Arrows */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 border rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft size={16} className="text-gray-400" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 border rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Content Details */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-[#202224] text-lg">{item.name}</h3>
            <p className="text-[#4880FF] font-bold">${item.price.toFixed(2)}</p>
          </div>
          
          {/* Favorite Toggle Button */}
          <button className={`p-2 rounded-full transition-colors ${item.isFavorite ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}>
            <Heart size={20} fill={item.isFavorite ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < item.rating ? "#FFAD33" : "none"} 
              stroke={i < item.rating ? "#FFAD33" : "#D1D5DB"} 
            />
          ))}
          <span className="text-xs text-gray-400 font-medium ml-1">({item.reviews})</span>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 py-2.5 bg-[#F1F4F9] text-[#202224] text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors">
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default Favorites;