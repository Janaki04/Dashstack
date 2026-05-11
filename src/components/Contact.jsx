import React, { useState, useRef } from 'react';
import { Mail, Camera, ChevronDown, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import image1 from "../assets/Bitmap 2.png"
import image2 from "../assets/Image.png"
import image3 from "../assets/Image (1).png"

const Contact = () => {
  const fileInputRef = useRef(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [contacts, setContacts] = useState([
    { id: 1, name: "Jason Price", email: "kuhlman.jermey@yahoo.com", image:image1 },
    { id: 2, name: "Duane Dean", email: "rusty.botsford@wilfrid.io", image:image2 },
    { id: 3, name: "Jonathan Barker", email: "cora_haley@quinn.biz", image:image3 },
    { id: 4, name: "Jonathan Barker", email: "cora_haley@quinn.biz", image:image3 },
    { id: 5, name: "Duane Dean", email: "rusty.botsford@wilfrid.io", image:image2 },

  ]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'Male',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("First Name, Last Name, and Email are required!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleAddNow = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newContact = {
      id: Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      image: formData.image || "https://via.placeholder.com/400" 
    };

    setContacts([newContact, ...contacts]);
    toast.success("Contact added successfully!");
    setShowAddForm(false);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', phone: '', dob: '', gender: 'Male', image: null });
  };

  if (showAddForm) {
    return (
      <div className="space-y-6 font-sans max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <button onClick={() => setShowAddForm(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-3xl font-black text-[#202224]">Add New Contact</h2>
        </div>

        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 md:p-16">
          <form onSubmit={handleAddNow} className="max-w-4xl mx-auto space-y-12">
            
            {/* Photo Upload Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
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
                Upload Photo
              </button>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">First Name</label>
                <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" className="w-full px-5 py-4 bg-[#F1F4F9] border border-transparent rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Last Name</label>
                <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" className="w-full px-5 py-4 bg-[#F1F4F9] border border-transparent rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Your email</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="w-full px-5 py-4 bg-[#F1F4F9] border border-transparent rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Phone Number</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" className="w-full px-5 py-4 bg-[#F1F4F9] border border-transparent rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Date of Birth</label>
                <input name="dob" type="date" value={formData.dob} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#F1F4F9] border border-transparent rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-2">
                <label className="flex text-sm font-bold text-[#202224]">Gender</label>
                <div className="relative">
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#F1F4F9] border border-transparent rounded-xl text-sm font-semibold outline-none appearance-none cursor-pointer">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button type="submit" className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-20 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-200 active:scale-95">
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 font-sans">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-3xl font-black text-[#202224]">Contact</h2>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-[#4880FF] hover:bg-[#3b6de0] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-100 flex items-center gap-2"
        >
          Add New Contact
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="h-64 w-full overflow-hidden">
              <img src={contact.image} alt={contact.name} className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 text-center space-y-1">
              <h3 className="text-lg font-bold text-[#202224] tracking-tight">{contact.name}</h3>
              <p className="text-sm text-gray-400 font-medium pb-4">{contact.email}</p>
              <button onClick={()=>{toast.success("Message Sent Sucessfully")}} className="inline-flex items-center gap-2 px-8 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-[#4880FF] hover:border-[#4880FF] transition-all">
                <Mail size={16} /> Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;