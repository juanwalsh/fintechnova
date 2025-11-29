
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';
import Button from '../../Button';

interface TransactionDetailsModalProps {
  selectedTx: any;
  onClose: () => void;
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({ selectedTx, onClose }) => {
  return (
    <AnimatePresence>
      {selectedTx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-darkSurface rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-bold text-lg text-secondary dark:text-white">Detalhes da Transação</h3>
              <button onClick={onClose}><XCircle size={24} className="text-gray-400 hover:text-white"/></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-center py-4">
                <h2 className="text-3xl font-bold text-secondary dark:text-white">R$ {selectedTx.value.toFixed(2)}</h2>
                <p className="text-gray-500">{selectedTx.type}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                   <span className="text-gray-500">ID</span>
                   <span className="font-mono text-secondary dark:text-gray-300">{selectedTx.id}</span>
                </div>
                 <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                   <span className="text-gray-500">Data</span>
                   <span className="text-secondary dark:text-gray-300">{selectedTx.date}</span>
                </div>
                 <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                   <span className="text-gray-500">Pagador</span>
                   <span className="text-secondary dark:text-gray-300">{selectedTx.sender}</span>
                </div>
                 <div className="flex justify-between pb-2">
                   <span className="text-gray-500">Status</span>
                   <span className="uppercase font-bold text-secondary dark:text-white">{selectedTx.status}</span>
                </div>
              </div>
              <Button className="w-full mt-4" onClick={onClose}>Fechar</Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TransactionDetailsModal;
    