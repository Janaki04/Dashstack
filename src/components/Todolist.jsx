import React, { useState } from 'react';
import { Star, X, Trash2, Plus, Check } from 'lucide-react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting with CEO", completed: false, starred: false },
    { id: 2, text: "Pick up kids from school", completed: false, starred: true },
    { id: 3, text: "Shopping with Brother", completed: false, starred: false },
    { id: 4, text: "Review with HR", completed: true, starred: false },
    { id: 5, text: "Going to Dia's School", completed: false, starred: false },
    { id: 6, text: "Check design files", completed: false, starred: true },
    { id: 7, text: "Update File", completed: false, starred: false },
  ]);

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleStar = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, starred: !task.starred } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="space-y-8 py-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-[#202224]">To-Do List</h2>
        <button className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-100 flex items-center gap-2">
          Add New Task
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 group
              ${task.completed 
                ? 'bg-[#4880FF] border-[#4880FF] text-white' 
                : 'bg-white border-gray-100 text-[#202224] shadow-sm hover:shadow-md'}`}
          >
            <div className="flex items-center gap-6">
              <button 
                onClick={() => toggleComplete(task.id)}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                  ${task.completed 
                    ? 'bg-white/20 border-white text-white' 
                    : 'bg-gray-50 border-gray-200 text-transparent hover:border-[#4880FF]'}`}
              >
                <Check size={14} strokeWidth={4} className={task.completed ? 'block' : 'hidden'} />
              </button>

              <span className={`text-base font-semibold ${task.completed ? 'opacity-100' : 'opacity-90'}`}>
                {task.text}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {!task.completed && (
                <button 
                  onClick={() => toggleStar(task.id)}
                  className={`transition-colors ${task.starred ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}`}
                >
                  <Star size={22} fill={task.starred ? "currentColor" : "none"} />
                </button>
              )}

              <button 
                onClick={() => deleteTask(task.id)}
                className={`p-1.5 rounded-lg transition-all
                  ${task.completed 
                    ? 'bg-white/20 hover:bg-white/30 text-white' 
                    : 'text-gray-300 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100'}`}
              >
                {task.completed ? <Trash2 size={20} /> : <X size={20} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;