
import React, { useState, useEffect } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../../../data/mock';
import TransactionDetailsModal from './TransactionDetailsModal';

const TransactionsView: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedTx, setSelectedTx] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredTrx = MOCK_TRANSACTIONS.filter(t => {
    const matchesSearch = t.sender.toLowerCase().includes(debouncedSearch.toLowerCase()) || t.id.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesFilter = filter === 'all' || t.status === filter || t.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500 pb-24 md:pb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-2">Transações</h2>
        <p className="text-gray-500">Gerencie e audite todas as operações financeiras.</p>
      </div>

      <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por ID, nome..." 
              className="fintech-input w-full pl-10 pr-4 py-2 rounded-lg shadow-inner"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
             <select 
              className="fintech-input px-3 py-2 rounded-lg text-sm"
              value={filter}
              onChange={e => setFilter(e.target.value)}
             >
               <option value="all">Todos Status</option>
               <option value="completed">Concluídas</option>
               <option value="pending">Pendentes</option>
               <option value="failed">Falhas</option>
             </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 uppercase">
                <th className="px-6 py-4 font-semibold">ID</th>
                <th className="px-6 py-4 font-semibold">Data</th>
                <th className="px-6 py-4 font-semibold">Cliente</th>
                <th className="px-6 py-4 font-semibold">Valor</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
              {filteredTrx.map((tx) => (
                <tr key={tx.id} 
                    onClick={() => setSelectedTx(tx)}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 font-mono text-gray-500">{tx.id}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{tx.date.split(' ')[0]}</td>
                  <td className="px-6 py-4 font-medium text-secondary dark:text-white">{tx.sender}</td>
                  <td className="px-6 py-4 font-bold text-secondary dark:text-white">R$ {tx.value.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      tx.status === 'completed' ? 'bg-green-100 text-green-700' :
                      tx.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tx.status === 'completed' ? 'Concluída' : tx.status === 'pending' ? 'Pendente' : 'Falha'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ChevronRight size={18} className="text-gray-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <TransactionDetailsModal selectedTx={selectedTx} onClose={() => setSelectedTx(null)} />
    </div>
  );
};

export default TransactionsView;
