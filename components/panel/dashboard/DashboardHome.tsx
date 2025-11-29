
import React from 'react';
import DashboardMetrics from './DashboardMetrics';
import DashboardChart from './DashboardChart';
import { MOCK_TRANSACTIONS } from '../../../data/mock';

interface DashboardHomeProps {
  darkMode: boolean;
  setActiveTab: (tab: string) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ darkMode, setActiveTab }) => {
  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 animate-in fade-in duration-500 pb-24 md:pb-8">
      <DashboardMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DashboardChart darkMode={darkMode} />

        <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h4 className="font-bold text-secondary dark:text-white mb-4">Recentes</h4>
          <div className="space-y-4">
            {MOCK_TRANSACTIONS.slice(0, 5).map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-700 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    tx.type === 'PIX' ? 'bg-green-100 text-green-700' : 
                    tx.type === 'Boleto' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {tx.type[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary dark:text-white">{tx.sender}</p>
                    <p className="text-xs text-gray-400">{tx.type}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${tx.status === 'completed' ? 'text-green-600' : tx.status === 'failed' ? 'text-red-500' : 'text-yellow-600'}`}>
                  R$ {tx.value}
                </span>
              </div>
            ))}
          </div>
          <button onClick={() => setActiveTab('transactions')} className="w-full mt-4 text-sm text-primary font-semibold hover:underline">Ver todas</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
