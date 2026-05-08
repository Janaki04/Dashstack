import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingBag, Heart, Mail, ListOrdered, Package, 
  Tag, Calendar, CheckSquare, Contact, FileText, Component, 
  Users, Table as TableIcon, Settings, LogOut, Search, Bell, Menu, ChevronDown 
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';

const revenueData = [
  { name: '5k', sales: 30, profit: 40 },
  { name: '10k', sales: 40, profit: 70 },
  { name: '20k', sales: 35, profit: 30 },
  { name: '30k', sales: 45, profit: 50 },
  { name: '40k', sales: 80, profit: 40 },
  { name: '50k', sales: 40, profit: 60 },
  { name: '60k', sales: 90, profit: 20 },
];

const salesAnalyticsData = [
  { year: '2015', a: 20, b: 0 },
  { year: '2016', a: 70, b: 60 },
  { year: '2017', a: 45, b: 25 },
  { year: '2018', a: 65, b: 45 },
  { year: '2019', a: 100, b: 90 },
];

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-700">
      <main className="flex-1 flex flex-col min-w-0">
        <div className="p-4 lg:p-8 overflow-y-auto">
          <h2 className="text-start text-[#000] text-2xl font-bold mb-6">Dashboard</h2>
          <div className="bg-white p-6 rounded-2xl border mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Revenue</h3>
              <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2 outline-none">
                <option>October</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f87171" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c084fc" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#f87171" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                  <Area type="monotone" dataKey="profit" stroke="#c084fc" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-red-400"></div> Sales
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div> Profit
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border text-center">
              <h3 className="text-lg font-bold text-left mb-4">Customers</h3>
              <div className="relative flex justify-center py-4">
                 <div className="w-40 h-40 rounded-full border-[12px] border-blue-50 flex items-center justify-center relative">
                    <div className="absolute inset-0 border-[12px] border-blue-500 rounded-full border-t-transparent border-l-transparent -rotate-45"></div>
                    <div className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full -translate-y-1/2"></div>
                    <div className="absolute right-0 w-3 h-3 bg-blue-500 rounded-full translate-x-1/2"></div>
                 </div>
              </div>
              <div className="grid grid-cols-2 mt-6 border-t pt-4">
                <div>
                  <p className="text-2xl font-bold">34,249</p>
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> New Customers
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1420</p>
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-100"></span> Repeated
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border flex flex-col justify-between items-center text-center relative">
              <h3 className="text-lg font-bold w-full text-left">Featured Product</h3>
              <div className="flex-1 flex items-center justify-center w-full">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full border cursor-pointer">
                    <ChevronDown className="rotate-90" size={16} />
                 </div>
                 <div className="p-4">
                    <div className="w-32 h-32 bg-gray-50 rounded-full mb-4 flex items-center justify-center mx-auto">
                        <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400"/>
                    </div>
                    <p className="font-bold py-2">Beats Headphone 2019</p>
                    <p className="text-blue-600 font-bold">$89.00</p>
                 </div>
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full border cursor-pointer">
                    <ChevronDown className="-rotate-90" size={16} />
                 </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Sales Analytics</h3>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesAnalyticsData}>
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                    <Tooltip />
                    <Line type="monotone" dataKey="a" stroke="#3b82f6" strokeWidth={3} dot={{fill: '#3b82f6', r: 4}} />
                    <Line type="monotone" dataKey="b" stroke="#10b981" strokeWidth={3} dot={{fill: '#10b981', r: 4}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <a 
    href="#" 
    className={`flex items-center gap-4 px-4 py-2.5 rounded-lg transition-colors group
      ${active ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'}`}
  >
    <span className={`${active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default Dashboard;