import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FilterModal = ({ label, options, onApply, currentSelection = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelection, setTempSelection] = useState(currentSelection);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTempSelection(currentSelection);
  }, [isOpen, currentSelection]);

  const toggleOption = (option) => {
    setTempSelection((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleApply = () => {
    onApply(tempSelection);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={modalRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-4 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all min-w-[140px]"
      >
        {label}
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          
          <div className="absolute top-12 left-0 w-[400px] bg-white rounded-2xl border border-gray-100 shadow-2xl z-20 overflow-hidden">
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

              <div className="pt-5 border-t border-gray-50">
                <p className="text-xs text-gray-400 italic mb-6">
                  *You can choose multiple {label.toLowerCase()}
                </p>
                
                <div className="flex justify-center">
                  <button
                    onClick={handleApply}
                    className="bg-[#4880FF] hover:bg-[#3669e0] text-white font-bold py-3 px-12 rounded-xl text-sm transition-all shadow-lg shadow-blue-100 active:scale-95"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterModal;