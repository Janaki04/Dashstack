import React, { useState } from 'react';
import { Star, X, Trash2, Check, PlusCircle } from 'lucide-react';
import { toast } from 'react-toastify';

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

  // States for adding a new task
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

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
    toast.info("Task deleted");
  };

  const handleSaveTask = () => {
    if (!newTaskText.trim()) {
      toast.warn("Please enter a task name");
      return;
    }

    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      text: newTaskText,
      completed: false,
      starred: false
    };

    setTasks([newTask, ...tasks]); // Add new task to the top of the list
    setNewTaskText("");
    setIsAdding(false);
    toast.success("New task added!");
  };

  return (
    <div className="space-y-8 py-8 max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-[#202224]">To-Do List</h2>
        {!isAdding && (
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-100 flex items-center gap-2"
          >
            <PlusCircle size={18} />
            Add New Task
          </button>
        )}
      </div>

      {/* "Add New To-Do" Input Section (Visible only when isAdding is true) */}
      {isAdding && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#202224]">Add New To-Do</h3>
            <button 
              onClick={handleSaveTask}
              className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-8 py-2 rounded-lg font-bold text-sm transition-all"
            >
              Save
            </button>
          </div>
          
          <div className="relative">
            <input 
              type="text"
              autoFocus
              placeholder="Write Your task name here"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveTask()}
              className="w-full px-5 py-4 bg-[#F1F4F9] border border-gray-100 rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400"
            />
            <button 
              onClick={() => {setIsAdding(false); setNewTaskText("");}}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Tasks List */}
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 group
              ${task.completed 
                ? 'bg-[#4880FF] border-[#4880FF] text-white shadow-blue-100 shadow-lg' 
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
      
      {tasks.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 font-medium italic">No tasks yet. Start by adding one above!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;