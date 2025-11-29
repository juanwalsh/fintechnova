
import React from 'react';
import { Globe, LayoutDashboard, CreditCard, Users, Settings, LogOut } from 'lucide-react';

interface SidebarNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogoutClick: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeTab, setActiveTab, onLogoutClick }) => {
  return (
    <aside className="w-64 bg-secondary dark:bg-[#0B1120] text-white hidden md:flex flex-col flex-shrink-0 transition-all border-r border-gray-800">
      <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-800">
         <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20"><Globe size={18}/></div>
         <span className="font-bold text-lg tracking-tight">FintechNova</span>
      </div>
      
      <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
        {[
          { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
          { id: 'transactions', icon: CreditCard, label: 'Transações' },
          { id: 'customers', icon: Users, label: 'Clientes' },
          { id: 'settings', icon: Settings, label: 'Configurações' },
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${activeTab === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <item.icon size={20}/> <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-800">
         <button onClick={onLogoutClick} className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors text-sm w-full p-2 rounded-lg hover:bg-white/5">
           <LogOut size={18} /> Sair
         </button>
      </div>
    </aside>
  );
};

export default SidebarNavigation;
    