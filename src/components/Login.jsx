import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
      if (email && password) {
        console.log("Login Successful!");
        localStorage.setItem('isLoggedIn', 'true');
            navigate("/dashboard")
      } else {
        setError("Invalid email or password.");
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
          <h1 className="text-2xl font-black text-[#202224] mb-2">Login to Account</h1>
          <p className="text-sm text-gray-400 font-semibold">Please enter your email and password to continue</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-2">
            <label className="flex text-sm font-bold text-[#202224]">Email address:</label>
            <input 
              type="email" 
              placeholder="esteban_schiller@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 bg-[#F1F4F9] border border-gray-100 rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[#202224]">Password</label>
              <button type="button" className="text-xs font-semibold text-gray-400 hover:text-[#4880FF]">Forget Password?</button>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-4 bg-[#F1F4F9] border border-gray-100 rounded-xl text-sm font-semibold text-[#202224] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-200 bg-[#F1F4F9] transition-all checked:bg-[#4880FF] checked:border-[#4880FF]"
              />
              <Check className="absolute h-4 w-4 text-white left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
            </div>
            <label htmlFor="remember" className="text-sm font-semibold text-gray-500 cursor-pointer">
              Remember Password
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2 rounded-lg">{error}</p>
          )}

          <button 
            type="submit"
            className="w-full bg-[#4880FF] hover:bg-[#3b6de0] text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            Sign In
          </button>

          <p className="text-center text-sm font-semibold text-gray-500">
            Don't have an account? <Link to="/register" className="text-[#4880FF] underline underline-offset-4 font-bold">Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;