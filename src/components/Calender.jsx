import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const events = [
    { id: '1', title: 'Design Conference', start: '2019-10-03', color: '#E5E7EB', textColor: '#4880FF', borderLeft: '4px solid #4880FF' },
    { id: '2', title: 'Weekend Festival', start: '2019-10-16', color: '#FCE7F3', textColor: '#DB2777', borderLeft: '4px solid #DB2777' },
    { id: '3', title: 'Glastonbury Festival', start: '2019-10-20', end: '2019-10-23', color: '#FFEDD5', textColor: '#F97316', borderLeft: '4px solid #F97316' },
    { id: '4', title: 'Glastonbury Festival', start: '2019-10-25', color: '#E0E7FF', textColor: '#4F46E5', borderLeft: '4px solid #4F46E5' },
  ];

  const upcomingEvents = [
    { title: "Design Conference", time: "Today 07:19 AM", location: "56 Davion Mission Suite 157", color: "bg-gray-200" },
    { title: "Weekend Festival", time: "16 October 2019 at 5.00 PM", location: "853 Moore Flats Suite 158", color: "bg-orange-100" },
    { title: "Glastonbury Festival", time: "20-22 October 2019 at 8.00 PM", location: "646 Walter Road Apt. 571", color: "bg-red-100" },
    { title: "Ultra Europe 2019", time: "25 October 2019 at 10.00 PM", location: "506 Satterfield Tunnel Apt. 963", color: "bg-blue-900" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 font-sans">
      <aside className="w-full lg:w-80 space-y-6">
        <h2 className="text-2xl font-bold text-[#202224]">Calender</h2>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <button className="w-full bg-[#4880FF] hover:bg-[#3b6de0] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mb-8">
            <Plus size={20} /> Add New Event
          </button>

          <h3 className="font-bold text-lg mb-6">You are going to</h3>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded-full shrink-0 ${event.color} overflow-hidden border-2 border-white shadow-sm`}>
                  <div className="w-full h-full bg-gray-100" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#202224] group-hover:text-[#4880FF] transition-colors">{event.title}</h4>
                  <p className="text-[11px] text-[#4880FF] font-semibold">{event.time}</p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{event.location}</p>
                  <div className="flex -space-x-2 pt-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[8px] font-bold text-blue-500">15+</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-10 py-3 bg-[#F1F4F9] text-[#202224] text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors">
            See More
          </button>
        </div>
      </aside>

      <section className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden">
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate="2019-10-01"
            headerToolbar={{
              left: 'prevTitle today',
              center: 'title',
              right: 'customDay,customWeek,customMonth'
            }}
            customButtons={{
              prevTitle: { text: '', click: () => {} },
              customDay: { text: 'Day' },
              customWeek: { text: 'Week' },
              customMonth: { text: 'Month' }
            }}
            events={events}
            editable={true}
            selectable={true}
            dayMaxEvents={true}
            height="auto"
            contentHeight={800}
            dayCellClassNames={(arg) => !arg.isCurrent ? 'bg-diagonal-stripes' : ''}
          />
        </div>
      </section>

      <style>{`
        /* Header Styling */
        .fc-header-toolbar { display: flex !important; align-items: center !important; margin-bottom: 2rem !important; }
        .fc-toolbar-title { font-size: 1.5rem !important; font-weight: 800 !important; color: #202224 !important; }
        
        /* Navigation Buttons */
        .fc-button { background: white !important; border: 1px solid #E2E8F0 !important; color: #64748b !important; font-weight: 600 !important; text-transform: capitalize !important; padding: 8px 16px !important; transition: all 0.2s !important; }
        .fc-button-active { background: #4880FF !important; border-color: #4880FF !important; color: white !important; }
        .fc-button:hover:not(.fc-button-active) { background: #F8FAFC !important; }

        /* Grid Styling */
        .fc-theme-standard td, .fc-theme-standard th { border: 1px solid #F1F4F9 !important; }
        .fc-col-header-cell { padding: 12px 0 !important; background: #F8FAFC; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; color: #202224; }
        .fc-daygrid-day-number { font-weight: 600; color: #202224; padding: 10px !important; }

        /* Diagonal stripes for out-of-month days */
        .bg-diagonal-stripes {
          background-image: repeating-linear-gradient(45deg, #f8faff 0, #f8faff 1px, transparent 0, transparent 50%);
          background-size: 10px 10px;
          opacity: 0.5;
        }

        /* Event Styling */
        .fc-event { border-radius: 4px !important; padding: 2px 8px !important; font-size: 11px !important; font-weight: 700 !important; border: none !important; }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .fc-header-toolbar { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Calendar;