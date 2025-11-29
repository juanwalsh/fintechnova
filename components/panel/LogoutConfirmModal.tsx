
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutConfirmModal: React.FC<LogoutConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-darkSurface rounded-xl w-full max-w-sm overflow-hidden shadow-2xl p-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Deseja realmente sair?</h3>
              <p className="text-gray-500 mb-6">Você será desconectado da sua conta.</p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" onClick={onClose}>Cancelar</Button>
                <Button onClick={onConfirm}>Confirmar</Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LogoutConfirmModal;
    