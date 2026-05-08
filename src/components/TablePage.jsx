import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const TablePage = () => {
  const dataEntries = [
    { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
    { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
    { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
    { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
    { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
    { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
  ];

  const productEntries = [
    { id: 1, name: "Apple Watch Series 4", category: "Digital Product", price: 690.00, piece: 63, colors: ["#000000", "#9CA3AF", "#FCA5A5"], img: "https://images.unsplash.com/photo-1546868871-70c122467d9b?w=100" },
    { id: 2, name: "Microsoft Headsquare", category: "Digital Product", price: 190.00, piece: 13, colors: ["#000000", "#FCA5A5", "#60A5FA", "#FDE047"], img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" },
  ];

  return (
    <div className="space-y-12 py-4 font-sans">
      <h2 className="text-start text-3xl font-black text-[#202224]">Table</h2>

      {/* Standard Data Table */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="p-5 text-sm font-bold text-[#202224]">ID</th>
                <th className="p-5 text-sm font-bold text-[#202224]">NAME</th>
                <th className="p-5 text-sm font-bold text-[#202224]">ADDRESS</th>
                <th className="p-5 text-sm font-bold text-[#202224]">DATE</th>
                <th className="p-5 text-sm font-bold text-[#202224]">TYPE</th>
                <th className="p-5 text-sm font-bold text-[#202224]">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {dataEntries.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 text-sm text-[#202224]">{row.id}</td>
                  <td className="p-5 text-sm text-gray-500">{row.name}</td>
                  <td className="p-5 text-sm text-gray-500 min-w-[200px]">{row.address}</td>
                  <td className="p-5 text-sm text-gray-500 whitespace-nowrap">{row.date}</td>
                  <td className="p-5 text-sm text-gray-500">{row.type}</td>
                  <td className="p-5">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/30 border-b border-gray-50">
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
              {productEntries.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="p-5 text-sm font-bold text-[#202224]">{product.name}</td>
                  <td className="p-5 text-sm text-gray-500">{product.category}</td>
                  <td className="p-5 text-sm font-bold text-[#202224]">${product.price.toFixed(2)}</td>
                  <td className="p-5 text-sm text-gray-500 font-medium">{product.piece}</td>
                  <td className="p-5">
                    <div className="flex gap-2">
                      {product.colors.map((color, i) => (
                        <div key={i} className="w-4 h-4 rounded-full border border-gray-100" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center items-center gap-2">
                      <button className="p-2 border border-gray-100 rounded-lg text-gray-400 hover:text-[#4880FF] hover:bg-blue-50 transition-all"><Edit size={16} /></button>
                      <button className="p-2 border border-gray-100 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    "Completed": "bg-[#E2F6E9] text-[#00B69B]",
    "Processing": "bg-[#E5E5FF] text-[#5A607F]",
    "Rejected": "bg-[#FBE7E8] text-[#F35421]",
  };
  return (
    <span className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider inline-block text-center min-w-[100px] ${styles[status]}`}>
      {status}
    </span>
  );
};

export default TablePage;