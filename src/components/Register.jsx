import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.acceptTerms) {
      newErrors.terms = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Fill all the details");
      return;
    }

    try {
      localStorage.setItem('userAccount', JSON.stringify(formData));
      localStorage.setItem('isLoggedIn', 'true');
      
      toast.success('Account created successfully!');
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#4880FF] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full border-[60px] border-white"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full border-[40px] border-white"></div>
      </div>

      <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl p-8 md:p-12 z-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-black text-[#202224] mb-2">Create an Account</h1>
          <p className="text-sm text-gray-400 font-semibold">Create an account to continue</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="space-y-1">
            <label className="flex text-sm font-bold text-[#202224]">Email address</label>
            <input 
              type="email" 
              name="email"
              placeholder="esteban_schiller@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-[#F1F4F9] border ${errors.email ? 'border-red-400' : 'border-gray-100'} rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300`}
            />
            {errors.email && <p className="flex text-[10px] text-red-500 font-bold ml-1">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <label className="flex text-sm font-bold text-[#202224]">Username</label>
            <input 
              type="text" 
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-[#F1F4F9] border ${errors.username ? 'border-red-400' : 'border-gray-100'} rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300`}
            />
            {errors.username && <p className="flex text-[10px] text-red-500 font-bold ml-1">{errors.username}</p>}
          </div>

          <div className="space-y-1">
            <label className="flex text-sm font-bold text-[#202224]">Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-[#F1F4F9] border ${errors.password ? 'border-red-400' : 'border-gray-100'} rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300`}
            />
            {errors.password && <p className=" flex text-[10px] text-red-500 font-bold ml-1">{errors.password}</p>}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="acceptTerms"
                  id="terms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className={`peer h-5 w-5 cursor-pointer appearance-none rounded border-2 ${errors.terms ? 'border-red-400' : 'border-gray-200'} bg-[#F1F4F9] transition-all checked:bg-[#4880FF] checked:border-[#4880FF]`}
                />
                <Check className="absolute h-4 w-4 text-white left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
              </div>
              <label htmlFor="terms" className="text-sm font-semibold text-gray-500 cursor-pointer">
                I accept terms and conditions
              </label>
            </div>
            {errors.terms && <p className="flex text-[10px] text-red-500 font-bold ml-1">{errors.terms}</p>}
          </div>

          <button 
            type="submit"
            className="w-full bg-[#4880FF] hover:bg-[#3b6de0] text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-200 active:scale-95 mt-4"
          >
            Sign Up
          </button>

          <p className="text-center text-sm font-semibold text-gray-500">
            Already have an account? <Link to="/" className="text-[#4880FF] underline underline-offset-4 font-bold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;