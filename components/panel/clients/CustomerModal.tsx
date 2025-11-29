
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';
import Button from '../../Button';

interface CustomerModalProps {
  selectedCustomer: any;
  onClose: () => void;
  onSave: () => void;
}

const CustomerModal: React.FC<CustomerModalProps> = ({ selectedCustomer, onClose, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: selectedCustomer?.name || '', company: selectedCustomer?.company || '' });

  const openEdit = () => {
    setEditForm({ name: selectedCustomer.name, company: selectedCustomer.company });
    setIsEditing(true);
  };

  const handleSave = () => {
    // In a real app, you would bubble up the changes
    selectedCustomer.name = editForm.name;
    selectedCustomer.company = editForm.company;
    setIsEditing(false);
    onSave();
  };

  return (
    <AnimatePresence>
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-darkSurface rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-bold text-lg text-secondary dark:text-white">
                {isEditing ? 'Editar Cliente' : 'Detalhes do Cliente'}
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-red-500">
                <XCircle size={24}/>
              </button>
            </div>

            <div className="p-8 space-y-6">
              {isEditing ? (
                <div className="space-y-4">
                   <div>
                     <label className="text-xs font-bold text-gray-500 uppercase">Nome</label>
                     <input 
                        value={editForm.name} 
                        onChange={e => setEditForm({...editForm, name: e.target.value})}
                        className="fintech-input w-full p-2 rounded-lg"
                     />
                   </div>
                   <div>
                     <label className="text-xs font-bold text-gray-500 uppercase">Empresa</label>
                     <input 
                        value={editForm.company} 
                        onChange={e => setEditForm({...editForm, company: e.target.value})}
                        className="fintech-input w-full p-2 rounded-lg"
                     />
                   </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl">
                        {selectedCustomer.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-secondary dark:text-white">{selectedCustomer.name}</h2>
                        <p className="text-gray-500">{selectedCustomer.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:-translate-y-1 transition-transform">
                      <p className="text-xs text-gray-400 uppercase font-bold mb-1">Empresa</p>
                      <p className="font-semibold text-secondary dark:text-white">{selectedCustomer.company}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:-translate-y-1 transition-transform">
                      <p className="text-xs text-gray-400 uppercase font-bold mb-1">Volume</p>
                      <p className="font-semibold text-green-500">{selectedCustomer.volume}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex justify-end gap-3 border-t border-gray-100 dark:border-gray-700">
              {isEditing ? (
                <>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>Cancelar</Button>
                  <Button size="sm" onClick={handleSave}>Salvar Alterações</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={onClose}>Fechar</Button>
                  <Button size="sm" onClick={openEdit}>Editar Cliente</Button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CustomerModal;
    