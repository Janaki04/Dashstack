import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import watch from "../assets/Bitmap.png"

const Products = () => {
  const productList = [
    { id: 1, name: "Apple Watch Series 4", price: 120.00, rating: 5, reviews: 131, image:watch  },
    { id: 2, name: "Apple Watch Series 4", price: 120.00, rating: 5, reviews: 131, image:watch  },
    { id: 3, name: "Apple Watch Series 4", price: 120.00, rating: 5, reviews: 131, image: watch },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-start text-3xl font-bold text-[#202224]">Products</h2>

      <div className="relative overflow-hidden rounded-3xl bg-[#4880FF] p-8 md:p-16 text-white min-h-[300px] flex flex-col justify-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[80%] rounded-full border-[40px] border-white"></div>
          <div className="absolute bottom-[-20%] right-[-5%] w-[50%] h-[90%] rounded-full border-[60px] border-white"></div>
        </div>

        <div className="relative z-10 max-w-lg">
          <p className="text-start text-sm font-medium opacity-90 mb-2">September 12-22</p>
          <h1 className="text-start text-4xl md:text-5xl font-black leading-tight mb-4">
            Enjoy free home delivery in this summer
          </h1>
          <p className="text-start text-sm opacity-80 mb-8">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>
          <button className="flex bg-[#FF8743] hover:bg-[#e67635] text-white px-8 py-3 rounded-xl font-bold transition-colors">
            Get Started
          </button>
        </div>

        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative bg-[#F9FAFB] rounded-2xl p-8 mb-4 flex justify-center items-center h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
        />
        
        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft size={16} className="text-gray-400" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-[#202224] text-lg">{product.name}</h3>
            <p className="text-start text-[#4880FF] font-bold">${product.price.toFixed(2)}</p>
          </div>
          <button className="p-2 bg-gray-50 rounded-full text-gray-300 hover:text-red-500 transition-colors">
            <Heart size={18} />
          </button>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < product.rating ? "#FFAD33" : "none"} stroke={i < product.rating ? "#FFAD33" : "#D1D5DB"} />
          ))}
          <span className="text-xs text-gray-400 font-medium ml-1">({product.reviews})</span>
        </div>

        <button className="w-full mt-4 py-2.5 bg-[#F1F4F9] text-[#202224] text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default Products;