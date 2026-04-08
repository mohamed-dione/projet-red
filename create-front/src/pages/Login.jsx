import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/bg-auth.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})` 
      }}
    >
      <div className="flex items-center mb-8 text-white text-2xl font-bold uppercase tracking-widest">
        <span className="bg-white text-[#333533] px-2 py-1 mr-2 rounded-sm text-xl font-black">▲</span> 
        RED PRODUCT
      </div>

      <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-md">
        <h2 className="text-gray-800 mb-10 text-xl font-medium text-center">
          Connectez-vous en tant qu'Admin
        </h2>
        
        <form className="space-y-8">
          <div className="border-b border-gray-200">
            <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">E-mail</label>
            <input 
              name="email"
              type="email" 
              className="w-full py-2 bg-transparent outline-none text-gray-800 focus:border-[#333533] transition-colors"
              placeholder="admin@redproduct.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="border-b border-gray-200">
            <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Mot de passe</label>
            <input 
              name="password"
              type="password" 
              className="w-full py-2 bg-transparent outline-none text-gray-800 focus:border-[#333533] transition-colors"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#333533] text-white py-3 mt-4 rounded-sm hover:bg-black transition-all font-bold text-sm shadow-lg active:scale-[0.98]">
            <Link to="/dashboard" className={`flex items-center gap-4 px-6 py-3 justify-center   ? 'bg-white text-white font-bold' : 'text-white-400 hover:bg-gray-800'}`}>
                SE CONNECTER
            </Link>
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white text-sm">
          <Link 
              to="/forgot-password" 
              className="text-yellow-400 hover:text-xs font-semibold  hover:none"
            > 
              Mot de passe oublié ?
            </Link> <br /><br />
          Vous n'avez pas de compte ? 
          
        </p>
      </div>
    </div>
  );
};

export default Login;