
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate('/')}
      className="absolute top-6 left-6 md:top-8 md:left-8 p-3 rounded-full bg-white dark:bg-darkSurface text-secondary dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all z-50 flex items-center gap-2 group border border-gray-100 dark:border-gray-700"
    >
      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      <span className="hidden md:inline font-medium text-sm">Voltar</span>
    </button>
  );
};

export default BackButton;
    