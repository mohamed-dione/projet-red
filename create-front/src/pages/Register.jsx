import  { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    nom: 'Dione',
    email: 'mohameddione14@gmail.com',
    password: 'yupyup_1401',
    acceptTerms: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Veuillez accepter les termes et la politique.");
      return;
    }
    console.log("Données d'inscription :", formData);
    // Ici, tu ajouteras ton appel API vers ton backend
  };

  return (
    <div className="min-h-screen bg-[#333533] flex flex-col items-center justify-center p-4">
      
      {/* SECTION LOGO */}
      <div className="flex items-center mb-8 text-white text-2xl font-bold uppercase tracking-widest">
        <span className="bg-white text-[#333533] px-2 py-1 mr-2 rounded-sm text-xl font-black">
          ▲
        </span> 
        RED PRODUCT
      </div>

      {/* CARTE D'INSCRIPTION */}
      <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-md">
        <h2 className="text-gray-800 mb-8 text-lg font-medium">
          Inscrivez-vous en tant qu'Admin
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ Nom */}
          <div className="border-b border-gray-300">
            <input 
              name="nom"
              type="text" 
              placeholder="Nom"
              className="w-full py-2 outline-none text-gray-700 focus:border-[#333533] transition-colors"
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Email */}
          <div className="border-b border-gray-300">
            <input 
              name="email"
              type="email" 
              placeholder="E-mail"
              className="w-full py-2 outline-none text-gray-700 focus:border-[#333533] transition-colors"
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Mot de passe */}
          <div className="border-b border-gray-300">
            <input 
              name="password"
              type="password" 
              placeholder="Mot de passe"
              className="w-full py-2 outline-none text-gray-700 focus:border-[#333533] transition-colors"
              onChange={handleChange}
              required
            />
          </div>

          {/* Checkbox Termes & Conditions */}
          <div className="flex items-center pt-2">
            <input 
              name="acceptTerms"
              type="checkbox" 
              id="terms" 
              className="mr-3 h-4 w-4 accent-[#333533] cursor-pointer"
              onChange={handleChange}
            />
            <label htmlFor="terms" className="text-gray-600 text-sm cursor-pointer select-none">
              Accepter les termes et la politique
            </label>
          </div>

          {/* Bouton de validation */}
          <button 
            type="submit"
            className="w-full bg-[#46494c] text-white py-3 mt-4 rounded-sm hover:bg-black transition-all font-medium shadow-md active:scale-[0.98]"
          >
            <Link to="/login" className={`flex items-center gap-4 px-6 py-3 ('/login') ? 'bg-white text-white font-bold' : 'text-gray-400 justify-center hover:bg-gray-800'}`}>
               S'inscrire
            </Link>
          </button>
        </form>
      </div>

      {/* LIEN DE CONNEXION */}
      <div className="mt-6 text-center">
        <p className="text-white text-sm">
          Vous avez déjà un compte ? 
          <Link to="/login" className="text-[#fec801] ml-2 font-semibold hover:none">
            Se connecter
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Register;