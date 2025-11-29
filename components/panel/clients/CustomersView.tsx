
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MOCK_CUSTOMERS } from '../../../data/mock';
import Button from '../../Button';
import CustomerModal from './CustomerModal';

interface CustomersViewProps {
  addToast: (type: 'success' | 'error' | 'info', message: string) => void;
}

const CustomersView: React.FC<CustomersViewProps> = ({ addToast }) => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const handleSave = () => {
    addToast('success', 'Cliente atualizado com sucesso!');
  };

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500 pb-24 md:pb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-2">Clientes</h2>
        <p className="text-gray-500">Base de usuários e parceiros cadastrados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CUSTOMERS.map(customer => (
          <motion.div 
            key={customer.id} 
            whileHover={{ translateY: -4 }}
            className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                {customer.name.charAt(0)}
              </div>
              <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                customer.status === 'active' ? 'bg-green-100 text-green-700' :
                customer.status === 'inactive' ? 'bg-gray-100 text-gray-500' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {customer.status}
              </span>
            </div>
            <h3 className="font-bold text-lg text-secondary dark:text-white">{customer.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{customer.company}</p>
            <Button variant="outline" size="sm" className="mt-auto w-full" onClick={() => setSelectedCustomer(customer)}>Ver Detalhes</Button>
          </motion.div>
        ))}
      </div>

      <CustomerModal 
        selectedCustomer={selectedCustomer} 
        onClose={() => setSelectedCustomer(null)}
        onSave={handleSave}
      />
    </div>
  );
};

export default CustomersView;
