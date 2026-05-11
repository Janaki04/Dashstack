import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Plus, Camera, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

const Calendar = () => {
  const [showForm, setShowForm] = useState(false);
  const fileInputRef = useRef(null);

  const [events, setEvents] = useState([
    { id: '1', title: 'Design Conference', start: '2019-10-03', color: '#E5E7EB', textColor: '#4880FF' },
    { id: '2', title: 'Weekend Festival', start: '2019-10-16', color: '#FCE7F3', textColor: '#DB2777' },
    { id: '3', title: 'Glastonbury Festival', start: '2019-10-20', end: '2019-10-23', color: '#FFEDD5', textColor: '#F97316' },
    { id: '4', title: 'Design Conference', start: '2019-10-03', color: '#E5E7EB', textColor: '#4880FF' },
    { id: '5', title: 'Weekend Festival', start: '2019-10-16', color: '#FCE7F3', textColor: '#DB2777' },
    { id: '6', title: 'Glastonbury Festival', start: '2019-10-20', end: '2019-10-23', color: '#FFEDD5', textColor: '#F97316' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    time: '',
    date: '',
    address: '',
    contact: '',
    image: null
  });

  const upcomingEvents = [
    { title: "Design Conference", time: "Today 07:19 AM", location: "56 Davion Mission Suite 157", color: "bg-gray-200" },
    { title: "Weekend Festival", time: "16 October 2019 at 5.00 PM", location: "853 Moore Flats Suite 158", color: "bg-orange-100" },
    { title: "Glastonbury Festival", time: "20-22 October 2019 at 8.00 PM", location: "646 Walter Road Apt. 571", color: "bg-red-100" },
    { title: "Design Conference", time: "Today 07:19 AM", location: "56 Davion Mission Suite 157", color: "bg-gray-200" },
    { title: "Weekend Festival", time: "16 October 2019 at 5.00 PM", location: "853 Moore Flats Suite 158", color: "bg-orange-100" },
    { title: "Glastonbury Festival", time: "20-22 October 2019 at 8.00 PM", location: "646 Walter Road Apt. 571", color: "bg-red-100" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData(prev => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    if (!formData.name || !formData.date || !formData.time) {
      toast.error("Event Name, Date, and Time are required!");
      return false;
    }
    if (formData.contact && !/^\d+$/.test(formData.contact)) {
      toast.error("Contact Number must contain only digits");
      return false;
    }
    return true;
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newEvent = {
      id: Date.now().toString(),
      title: formData.name,
      start: formData.date,
      color: '#E0E7FF',
      textColor: '#4880FF'
    };

    setEvents([...events, newEvent]);
    toast.success("Event Added Successfully!");
    setShowForm(false);
    setFormData({ name: '', time: '', date: '', address: '', contact: '', image: null });
  };

  // --- RENDERING THE ADD NEW EVENT FORM ---
  if (showForm) {
    return (
      <div className="space-y-6 font-sans">
        <div className="flex items-center gap-4">
          <button onClick={() => setShowForm(false)} className="p-2 hover:bg-white rounded-full transition-all">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-[#202224]">Add New Event</h2>
        </div>

        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 md:p-16">
          <form onSubmit={handleAddEvent} className="max-w-4xl mx-auto space-y-10">
            {/* Image Upload */}
            <div className="flex flex-col items-center gap-3">
              <div 
                onClick={() => fileInputRef.current.click()}
                className="w-24 h-24 bg-[#F1F4F9] rounded-full flex items-center justify-center cursor-pointer overflow-hidden border-2 border-dashed border-gray-200 hover:border-[#4880FF] transition-all"
              >
                {formData.image ? (
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Camera size={32} className="text-gray-400" />
                )}
              </div>
              <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
              <button type="button" onClick={() => fileInputRef.current.click()} className="text-[#4880FF] text-sm font-bold">
                Upload Cover Photo
              </button>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Event Name</label>
                <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter event name" className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Time</label>
                <input name="time" value={formData.time} onChange={handleInputChange} placeholder="12:34 BDT" className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Date</label>
                <input name="date" type="date" value={formData.date} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Address</label>
                <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2 md:col-span-1">
                <label className="flex text-sm font-bold text-[#202224]">Contact Number</label>
                <input name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Enter your Contact Number" className="w-full px-5 py-4 bg-[#F1F4F9] border-none rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-24 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-200">
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDERING THE MAIN CALENDAR VIEW ---
  return (
    <div className="flex flex-col lg:flex-row gap-8 font-sans">
      <aside className="w-full lg:w-80 space-y-6">
        <h2 className="text-2xl font-bold text-[#202224]">Calender</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <button 
            onClick={() => setShowForm(true)}
            className="w-full bg-[#4880FF] hover:bg-[#3b6de0] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mb-8"
          >
            <Plus size={20} /> Add New Event
          </button>
          <h3 className="font-bold text-lg mb-6">You are going to</h3>
          <div className="space-y-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded-full shrink-0 ${event.color} border-2 border-white shadow-sm`}></div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#202224] group-hover:text-[#4880FF] transition-colors">{event.title}</h4>
                  <p className="text-[11px] text-[#4880FF] font-semibold">{event.time}</p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2019-10-01"
          headerToolbar={{ left: 'prevTitle today', center: 'title', right: 'dayGridMonth,dayGridWeek,dayGridDay' }}
          events={events}
          height="auto"
        />
      </section>

      <style>{`
        .fc-toolbar-title { font-size: 1.5rem !important; font-weight: 800 !important; color: #202224 !important; }
        .fc-button { background: white !important; border: 1px solid #F1F4F9 !important; color: #64748b !important; font-weight: 600 !important; }
        .fc-button-active { background: #4880FF !important; color: white !important; border-color: #4880FF !important; }
        .fc-theme-standard td, .fc-theme-standard th { border: 1px solid #F1F4F9 !important; }
        .fc-event { border-radius: 4px !important; padding: 2px 8px !important; font-size: 11px !important; font-weight: 700 !important; border: none !important; border-left: 4px solid currentColor !important; }
      `}</style>
    </div>
  );
};

export default Calendar;