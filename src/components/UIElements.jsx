import React, { useState, useRef, useEffect } from 'react';
import { 
  BarChart, Bar, ResponsiveContainer, 
  PieChart, Pie, Cell, 
} from 'recharts';
import { Filter, ChevronDown } from 'lucide-react';

const barData = [
  { name: 'A', v: 80 }, { name: 'B', v: 40 }, { name: 'C', v: 30 }, 
  { name: 'D', v: 70 }, { name: 'E', v: 50 }, { name: 'F', v: 40 }, 
  { name: 'G', v: 35 }, { name: 'H', v: 55 }
];

const pieData = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 600 }];

const COLORS = ['#4880FF', '#F1F4F9'];
const PURPLE_COLORS = ['#A855F7', '#F1F4F9'];
const ORANGE_COLORS = ['#F97316', '#F1F4F9'];

const UIElements = () => {
  // 1. State for Filter
  const [filter, setFilter] = useState('All'); 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filterOptions = ['All', 'Bar Chart', 'Pie Chart', 'Donut Chart'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-8 font-sans pb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-start text-3xl font-black text-[#202224]">UI Elements</h2>
        
        {/* Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden h-12">
            <div className="p-3 border-r border-gray-100 text-gray-400">
              <Filter size={20} />
            </div>
            <div className="px-4 text-sm font-bold text-[#202224] border-r border-gray-100 flex items-center h-full">
              Filter By
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-3 text-sm font-semibold text-gray-500 flex items-center gap-6 hover:bg-gray-50 transition-colors w-40 justify-between"
            >
              {filter === 'All' ? 'Charts' : filter}
              <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm font-semibold transition-colors 
                    ${filter === option ? 'bg-[#4880FF] text-white' : 'text-gray-600 hover:bg-blue-50'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2. Conditional Rendering Logic */}
      <div className="space-y-8">
        {(filter === 'All' || filter === 'Bar Chart') && (
          <ChartCard title="Bar Chart">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-48">
              <SimpleBar color="#4880FF" />
              <SimpleBar color="#4ADE80" opacity={0.3} />
              <SimpleBar color="#F97316" multi />
              <SimpleBar color="#EC4899" opacity={0.5} />
            </div>
          </ChartCard>
        )}

        {(filter === 'All' || filter === 'Pie Chart') && (
          <ChartCard title="Pie Chart">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-48">
              <SimplePie colors={COLORS} />
              <SimplePie colors={PURPLE_COLORS} />
              <SimplePie colors={ORANGE_COLORS} />
              <SimplePie colors={['#3B82F6', '#F1F4F9']} />
            </div>
          </ChartCard>
        )}

        {(filter === 'All' || filter === 'Donut Chart') && (
          <ChartCard title="Donut Chart">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-48">
              <SimplePie colors={['#2DD4BF', '#F1F4F9']} donut />
              <SimplePie colors={['#4880FF', '#F1F4F9']} donut />
              <SimplePie colors={['#2DD4BF', '#FDE047']} donut />
              <SimplePie colors={['#2DD4BF', '#F97316']} donut />
            </div>
          </ChartCard>
        )}
      </div>
    </div>
  );
};


const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
    <h3 className="text-xl font-bold text-[#202224] mb-10">{title}</h3>
    {children}
  </div>
);

const SimpleBar = ({ color, opacity = 1, multi = false }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={barData}>
      <Bar 
        dataKey="v" 
        fill={color} 
        radius={[4, 4, 0, 0]} 
        fillOpacity={opacity}
        stroke={multi ? "#4880FF" : "none"}
      />
    </BarChart>
  </ResponsiveContainer>
);

const SimplePie = ({ colors, donut = false }) => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={pieData}
        innerRadius={donut ? "60%" : 0}
        outerRadius="100%"
        paddingAngle={0}
        dataKey="value"
        startAngle={90}
        endAngle={450}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="none" />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default UIElements;