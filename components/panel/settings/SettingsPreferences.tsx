
import React from 'react';
import { Settings, Moon, Sun } from 'lucide-react';

interface SettingsPreferencesProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const SettingsPreferences: React.FC<SettingsPreferencesProps> = ({ darkMode, setDarkMode }) => {
  return (
    <section className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
       <h3 className="font-bold text-lg text-secondary dark:text-white mb-6 flex items-center gap-2">
        <Settings size={20} className="text-primary"/> Preferências
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
           <div>
             <p className="font-medium text-secondary dark:text-white flex items-center gap-2">
               {darkMode ? <Moon size={16}/> : <Sun size={16}/>} Modo Escuro
             </p>
             <p className="text-xs text-gray-400">Alternar tema visual.</p>
           </div>
           <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full relative transition-colors ${darkMode ? 'bg-primary' : 'bg-gray-200'}`}
           >
             <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${darkMode ? 'left-6' : 'left-0.5'}`}></div>
           </button>
        </div>
        <div className="flex items-center justify-between py-3">
           <div>
             <p className="font-medium text-secondary dark:text-white">Idioma</p>
           </div>
           <select className="fintech-input px-3 py-1 rounded-lg text-sm w-32">
             <option>Português</option>
             <option>English</option>
             <option>Español</option>
           </select>
        </div>
      </div>
    </section>
  );
};

export default SettingsPreferences;
    