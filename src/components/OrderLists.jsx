import React, { useState, useMemo, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { 
  Filter, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  ChevronDown 
} from 'lucide-react';

const FilterModal = ({ label, options, onApply, currentSelection = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelection, setTempSelection] = useState(currentSelection);

  useEffect(() => {
    if (isOpen) setTempSelection(currentSelection);
  }, [isOpen, currentSelection]);

  const toggleOption = (option) => {
    setTempSelection((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-4 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all min-w-[140px]"
      >
        {label}
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-12 left-0 w-[400px] bg-white rounded-2xl border border-gray-100 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#202224] mb-5">Select {label}</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {options.map((opt) => {
                  const isActive = tempSelection.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleOption(opt)}
                      className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all
                        ${isActive 
                          ? 'bg-[#4880FF] border-[#4880FF] text-white shadow-md shadow-blue-100' 
                          : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <div className="pt-5 border-t border-gray-50 text-center">
                <p className="text-xs text-gray-400 italic mb-6 text-left">
                  *You can choose multiple {label.toLowerCase()}
                </p>
                <button
                  onClick={() => { onApply(tempSelection); setIsOpen(false); }}
                  className="bg-[#4880FF] hover:bg-[#3669e0] text-white font-bold py-3 px-12 rounded-xl text-sm transition-all shadow-lg shadow-blue-100 active:scale-95"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const OrderLists = () => {
  const initialOrders = [
    { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "04 Sep 2019", type: "Electric", status: "Completed" },
    { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "28 May 2019", type: "Book", status: "Processing" },
    { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "23 Nov 2019", type: "Medicine", status: "Rejected" },
    { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "05 Feb 2019", type: "Mobile", status: "Completed" },
    { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "29 Jul 2019", type: "Watch", status: "Processing" },
    { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "15 Aug 2019", type: "Medicine", status: "Completed" },
    { id: "00007", name: "Maggie Sullivan", address: "New Scottieberg", date: "21 Dec 2019", type: "Watch", status: "Processing" },
    { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
    { id: "00009", name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "09 Jan 2019", type: "Book", status: "In Transit" },
  ];

  const typeOptions = ['Electric', 'Book', 'Medicine', 'Watch', 'Mobile'];
  const statusOptions = ['Completed', 'Processing', 'Rejected', 'On Hold', 'In Transit'];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const filteredOrders = useMemo(() => {
    return initialOrders.filter(order => {
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(order.type);
      const matchStatus = selectedStatuses.length === 0 || selectedStatuses.includes(order.status);
      let matchDate = true;
      if (selectedDate) {
        matchDate = new Date(order.date).toDateString() === selectedDate.toDateString();
      }
      return matchType && matchStatus && matchDate;
    });
  }, [selectedDate, selectedTypes, selectedStatuses]);

  const resetFilters = () => {
    setSelectedDate(null);
    setSelectedTypes([]);
    setSelectedStatuses([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-start text-3xl font-bold text-[#202224]">Order Lists</h2>

      <div className="bg-white p-4 rounded-xl border border-gray-100 flex flex-wrap items-center gap-4 shadow-sm">
        <div className="p-2 border border-gray-100 rounded-lg text-gray-400"><Filter size={20} /></div>
        <div className="flex items-center gap-2 font-bold text-sm text-[#202224] pr-4 border-r border-gray-100">Filter By</div>

        <div className="flex flex-wrap items-center gap-3 flex-1">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 pointer-events-none">
              <CalendarIcon size={16} />
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              placeholderText="Date"
              className="pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 outline-none focus:ring-2 focus:ring-blue-100 w-36 cursor-pointer"
              dateFormat="dd MMM yyyy"
              isClearable
            />
          </div>

          <FilterModal 
            label="Order Type" 
            options={typeOptions} 
            currentSelection={selectedTypes} 
            onApply={setSelectedTypes} 
          />

          <FilterModal 
            label="Order Status" 
            options={statusOptions} 
            currentSelection={selectedStatuses} 
            onApply={setSelectedStatuses} 
          />

          <button onClick={resetFilters} className="flex items-center gap-2 text-red-500 text-sm font-bold hover:bg-red-50 px-3 py-2 rounded-lg transition-colors ml-auto">
            <RotateCcw size={16} /> Reset Filter
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-50 bg-white">
                <th className="p-5 font-bold text-sm text-[#202224]">ID</th>
                <th className="p-5 font-bold text-sm text-[#202224]">NAME</th>
                <th className="p-5 font-bold text-sm text-[#202224]">ADDRESS</th>
                <th className="p-5 font-bold text-sm text-[#202224]">DATE</th>
                <th className="p-5 font-bold text-sm text-[#202224]">TYPE</th>
                <th className="p-5 font-bold text-sm text-[#202224]">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 text-sm text-[#202224]">{order.id}</td>
                  <td className="p-5 text-sm font-bold text-[#202224]">{order.name}</td>
                  <td className="p-5 text-sm text-gray-500 min-w-[200px]">{order.address}</td>
                  <td className="p-5 text-sm text-gray-500 whitespace-nowrap">{order.date}</td>
                  <td className="p-5 text-sm text-gray-500">{order.type}</td>
                  <td className="p-5">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center py-2">
        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Showing 1-{filteredOrders.length} of {initialOrders.length}</p>
        <div className="flex items-center border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
          <button className="p-2 hover:bg-gray-50 border-r border-gray-200 text-gray-400"><ChevronLeft size={20}/></button>
          <button className="p-2 hover:bg-gray-50 text-gray-400"><ChevronRight size={20}/></button>
        </div>
      </div>

      <style>{`
        .react-datepicker { border: 1px solid #F1F4F9 !important; border-radius: 12px !important; font-family: inherit !important; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); }
        .react-datepicker__header { background-color: white !important; border-bottom: 1px solid #F1F4F9 !important; }
        .react-datepicker__day--selected { background-color: #4880FF !important; border-radius: 8px !important; }
      `}</style>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    "Completed": "bg-[#E2F6E9] text-[#00B69B]",
    "Processing": "bg-[#E5E5FF] text-[#5A607F]",
    "Rejected": "bg-[#FBE7E8] text-[#F35421]",
    "On Hold": "bg-[#FFF2E5] text-[#FFA755]",
    "In Transit": "bg-[#E5F2FF] text-[#2D9CDB]",
  };
  return (
    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block text-center min-w-[100px] ${styles[status]}`}>
      {status}
    </span>
  );
};

export default OrderLists;