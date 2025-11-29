
import React, { useState, useEffect } from 'react';
import { LayoutDashboard, CreditCard, Users, Settings, LogOut } from 'lucide-react';
import SidebarNavigation from './SidebarNavigation';
import HeaderUserBar from './HeaderUserBar';
import DashboardHome from './dashboard/DashboardHome';
import TransactionsView from './transactions/TransactionsView';
import CustomersView from './clients/CustomersView';
import SettingsView from './settings/SettingsView';
import LogoutConfirmModal from './LogoutConfirmModal';

interface PanelProps {
  user: any;
  setUser: (u: any) => void;
  onLogout: () => void;
  addToast: (type: 'success' | 'error' | 'info', message: string) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const Panel: React.FC<PanelProps> = ({ user, setUser, onLogout, addToast, darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Apply dark mode class to body based on state passed from parent
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-darkBg font-sans overflow-hidden transition-colors ${darkMode ? 'dark' : ''}`}>
      <LogoutConfirmModal 
        isOpen={showLogoutConfirm} 
        onClose={() => setShowLogoutConfirm(false)} 
        onConfirm={() => {
          setShowLogoutConfirm(false);
          onLogout();
        }}
      />

      <SidebarNavigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogoutClick={() => setShowLogoutConfirm(true)} 
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <HeaderUserBar user={user} activeTab={activeTab} />

        <div className="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-darkBg">
          {activeTab === 'dashboard' && <DashboardHome darkMode={darkMode} setActiveTab={setActiveTab} />}
          {activeTab === 'transactions' && <TransactionsView />}
          {activeTab === 'customers' && <CustomersView addToast={addToast} />}
          {activeTab === 'settings' && (
            <SettingsView 
              user={user} 
              setUser={setUser} 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              addToast={addToast} 
            />
          )}
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-darkSurface border-t border-gray-200 dark:border-gray-800 pb-safe z-40 flex justify-around p-3 shadow-lg">
           {[
            { id: 'dashboard', icon: LayoutDashboard },
            { id: 'transactions', icon: CreditCard },
            { id: 'customers', icon: Users },
            { id: 'settings', icon: Settings },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-2 rounded-xl transition-colors ${activeTab === item.id ? 'text-primary bg-primary/10' : 'text-gray-400'}`}
            >
              <item.icon size={24}/>
            </button>
          ))}
           <button 
             onClick={() => setShowLogoutConfirm(true)}
             className="p-2 rounded-xl text-gray-400 hover:text-red-500 transition-colors"
           >
             <LogOut size={24} />
           </button>
        </div>
      </main>
    </div>
  );
};

export default Panel;
    