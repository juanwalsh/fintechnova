
import React from 'react';
import { CreditCard, RefreshCw, Users, Shield } from 'lucide-react';

const DashboardMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Saldo Atual", value: "R$ 1.240.300,00", icon: <CreditCard size={20}/>, change: "+12.5%", color: "bg-blue-50 text-primary" },
        { title: "Volume 24h", value: "R$ 145.200,00", icon: <RefreshCw size={20}/>, change: "+5.2%", color: "bg-green-50 text-green-600" },
        { title: "Novos Clientes", value: "128", icon: <Users size={20}/>, change: "Recorde", color: "bg-purple-50 text-purple-600" }
      ].map((card, i) => (
        <div key={i} className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-400 font-medium">{card.title}</p>
              <h3 className="text-2xl font-bold text-secondary dark:text-white mt-1">{card.value}</h3>
            </div>
            <div className={`p-2 rounded-lg ${card.color}`}>{card.icon}</div>
          </div>
          <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">{card.change} vs. anterior</span>
        </div>
      ))}

      <div className="bg-secondary text-white p-6 rounded-xl shadow-lg shadow-secondary/20 border border-gray-700 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-400 font-medium">Status do Sistema</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <h3 className="text-xl font-bold">Operacional</h3>
              </div>
            </div>
            <div className="p-2 bg-white/10 rounded-lg"><Shield size={20} /></div>
          </div>
          <span className="text-xs font-mono text-gray-300 bg-white/10 px-2 py-1 rounded">99.997% Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
    