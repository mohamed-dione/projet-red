import React from 'react';

export default function ForgotPassword({ setPage }) {
  return (
    <div className="min-h-screen bg-[#2d3238] flex flex-col items-center justify-center p-6" style={{ backgroundImage: 'radial-gradient(circle, #3a4149 10%, #2d3238 90%)' }}>
      <div className="text-white text-2xl font-bold mb-8 flex items-center space-x-2">
        <span className="tracking-wide">RED PRODUCT</span>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Mot de passe oublié?</h2>
        <p className="text-gray-500 mb-6 text-sm">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</p>
        <form onSubmit={(e) => { e.preventDefault(); setPage('login'); }} className="space-y-5">
          <div>
            <input type="email" placeholder="Votre e-mail" className="w-full border-b border-gray-200 py-2 focus:border-gray-500 outline-none text-sm" required />
          </div>
          <button type="submit" className="w-full bg-[#40454b] hover:bg-[#2d3238] text-white font-medium py-2.5 rounded transition duration-200 text-sm">
            Envoyer
          </button>
        </form>
      </div>
      <p className="mt-6 text-center text-sm text-white">
        <button onClick={() => setPage('login')} className="text-amber-400 hover:text-amber-300 transition-colors">Revenir à la connexion</button>
      </p>
    </div>
  );
}