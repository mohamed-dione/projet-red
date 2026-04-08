import React, { useState } from 'react';

// Importation des composants de pages
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Hotels from './pages/Hotels.jsx';

export default function App() {
  // Par défaut, on affiche le 'dashboard' pour vérifier que tout fonctionne.
  // Changez-le en 'login' une fois que vos tests sont finis.
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Fonction de rendu conditionnel
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login setPage={setCurrentPage} />;
      case 'register':
        return <Register setPage={setCurrentPage} />;
      case 'forgot-password':
        return <ForgotPassword setPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard setPage={setCurrentPage} />;
      case 'hotels':
        return <Hotels setPage={setCurrentPage} />;
      default:
        return (
          <div className="flex h-screen items-center justify-center bg-red-100 text-red-600">
            {/* Erreur : La page "{currentPage}" est introuvable. */}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  );
}