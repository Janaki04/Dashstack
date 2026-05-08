import React from 'react';
import { Printer, Send } from 'lucide-react';

const Invoice = () => {
  const invoiceData = {
    from: { name: "Virginia Walker", address: "9694 Krajcik Locks Suite 635" },
    to: { name: "Austin Miller", address: "Brookview" },
    date: "12 Nov 2019",
    dueDate: "25 Dec 2019",
    items: [
      { id: 1, description: "Children Toy", quantity: 2, baseCost: 20, totalCost: 80 },
      { id: 2, description: "Makeup", quantity: 2, baseCost: 50, totalCost: 100 },
      { id: 3, description: "Asus Laptop", quantity: 5, baseCost: 100, totalCost: 500 },
      { id: 4, description: "Iphone X", quantity: 4, baseCost: 1000, totalCost: 4000 },
    ]
  };

  const grandTotal = invoiceData.items.reduce((sum, item) => sum + item.totalCost, 0);

  return (
    <div className="space-y-8 font-sans max-w-6xl mx-auto py-4">
      <h2 className="text-start text-3xl font-black text-[#202224]">Invoice</h2>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-16 min-h-[800px] flex flex-col">
        
        {/* Invoice Header Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-3">
            <p className="text-sm font-bold text-gray-400">Invoice From :</p>
            <div>
              <p className="text-base font-black text-[#202224]">{invoiceData.from.name}</p>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{invoiceData.from.address}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-gray-400">Invoice To :</p>
            <div>
              <p className="text-base font-black text-[#202224]">{invoiceData.to.name}</p>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{invoiceData.to.address}</p>
            </div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-sm font-bold text-[#202224]">
              <span className="text-gray-400 font-medium">Invoice Date :</span> {invoiceData.date}
            </p>
            <p className="text-sm font-bold text-[#202224]">
              <span className="text-gray-400 font-medium">Due Date :</span> {invoiceData.dueDate}
            </p>
          </div>
        </div>

        {/* Invoice Table */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F1F4F9] rounded-xl">
                <th className="p-4 first:rounded-l-xl font-bold text-xs text-[#202224] uppercase tracking-wider">Serial No.</th>
                <th className="p-4 font-bold text-xs text-[#202224] uppercase tracking-wider text-center">Description</th>
                <th className="p-4 font-bold text-xs text-[#202224] uppercase tracking-wider text-right">Quantity</th>
                <th className="p-4 font-bold text-xs text-[#202224] uppercase tracking-wider text-right">Base Cost</th>
                <th className="p-4 last:rounded-r-xl font-bold text-xs text-[#202224] uppercase tracking-wider text-right">Total Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {invoiceData.items.map((item) => (
                <tr key={item.id}>
                  <td className="p-6 text-sm font-bold text-[#202224]">{item.id}</td>
                  <td className="p-6 text-sm font-bold text-gray-500 text-center">{item.description}</td>
                  <td className="p-6 text-sm font-bold text-gray-500 text-right">{item.quantity}</td>
                  <td className="p-6 text-sm font-bold text-gray-500 text-right">${item.baseCost}</td>
                  <td className="p-6 text-sm font-bold text-gray-500 text-right">${item.totalCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total and Actions Section */}
        <div className="mt-12 space-y-12">
          <div className="flex justify-end pr-6">
            <p className="text-lg font-black text-[#202224]">
              Total &nbsp; = &nbsp; ${grandTotal}
            </p>
          </div>

          <div className="flex justify-end gap-4">
            <button className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-400 hover:bg-gray-100 transition-colors">
              <Printer size={22} />
            </button>
            <button className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-10 py-3 rounded-xl font-bold flex items-center gap-6 shadow-lg shadow-blue-100 transition-all">
              Send
              <Send size={18} className="rotate-[-20deg]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;