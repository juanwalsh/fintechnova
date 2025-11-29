
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderUserBarProps {
  user: { name: string; email: string; avatar: string | null };
  activeTab: string;
}

const HeaderUserBar: React.FC<HeaderUserBarProps> = ({ user, activeTab }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Backup realizado com sucesso", time: "Há 2 horas", read: false },
    { id: 2, text: "Tentativa de login bloqueada (IP 192.168.1.55)", time: "Há 5 horas", read: false },
    { id: 3, text: "Nova fatura disponível", time: "Há 1 dia", read: true },
    { id: 4, text: "Bem-vindo ao FintechNova!", time: "Há 2 dias", read: true },
    { id: 5, text: "Atualização de sistema agendada", time: "Há 3 dias", read: true },
    { id: 6, text: "Relatório mensal pronto", time: "Há 4 dias", read: true },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markNotificationsRead = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications && unreadCount > 0) {
      setTimeout(() => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
      }, 1000);
    }
  };

  return (
    <header className="h-16 bg-white dark:bg-darkSurface shadow-sm border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-10">
      <h2 className="text-lg md:text-xl font-bold text-secondary dark:text-white capitalize">
        {activeTab === 'dashboard' ? 'Visão Geral' : 
         activeTab === 'transactions' ? 'Transações' : 
         activeTab === 'customers' ? 'Gestão de Clientes' : 'Configurações'}
      </h2>
      <div className="flex items-center gap-4 md:gap-6">
        {/* Notifications */}
        <div className="relative cursor-pointer group">
          <button onClick={markNotificationsRead} className="relative">
            <Bell size={20} className="text-gray-400 group-hover:text-primary transition-colors"/>
            {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-darkSurface"></span>}
          </button>
          
          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="absolute right-0 top-10 w-80 bg-white dark:bg-darkSurface rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
              >
                <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 font-bold text-sm text-secondary dark:text-white">Notificações</div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className={`p-3 border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ${!n.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                       <p className="text-sm text-gray-700 dark:text-gray-300">{n.text}</p>
                       <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-secondary dark:text-white leading-none">{user.name}</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-200 overflow-hidden">
             {user.avatar ? <img src={user.avatar} className="w-full h-full object-cover"/> : "AD"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUserBar;
    