
import React, { useState, useEffect } from 'react';
import ToastContainer, { ToastMessage } from '../components/Toast';
import BackButton from '../components/auth/BackButton';
import LoginForm from '../components/auth/LoginForm';
import Panel from '../components/panel/Panel';

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // User State
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@fintechnova.com',
    avatar: null as string | null
  });

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Toast Helper
  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleLogin = (displayName: string) => {
    setIsLoggedIn(true);
    setUser(prev => ({ ...prev, name: displayName }));
    addToast('success', `Bem-vindo à Fintech Nova, ${displayName}!`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <>
        <ToastContainer toasts={toasts} removeToast={removeToast} />
        <Panel 
          user={user} 
          setUser={setUser} 
          onLogout={handleLogout} 
          addToast={addToast}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-darkBg flex items-center justify-center p-4 relative transition-colors">
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <div className="absolute inset-0 bg-secondary/5 dark:bg-black/20 z-0"></div>
      
      <BackButton />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
    