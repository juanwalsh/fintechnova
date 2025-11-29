
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';
import Button from '../../Button';

interface TwoFactorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onActivate: () => void;
}

const TwoFactorModal: React.FC<TwoFactorModalProps> = ({ isOpen, onClose, onActivate }) => {
  const [twoFaStep, setTwoFaStep] = useState(0);

  const handleClose = () => {
    setTwoFaStep(0);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             className="bg-white dark:bg-darkSurface rounded-xl p-8 max-w-sm w-full text-center"
           >
             <Shield size={48} className="mx-auto text-primary mb-4"/>
             <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Configurar 2FA</h3>
             
             {twoFaStep === 0 && (
               <>
                 <p className="text-gray-500 mb-6 text-sm">Escaneie o QR Code abaixo com seu aplicativo autenticador.</p>
                 <div className="bg-white p-4 inline-block rounded-lg mb-4 border border-gray-200 shadow-sm">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FintechNova2FA" alt="QR Code 2FA" className="w-32 h-32" />
                 </div>
                 <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm font-mono text-secondary dark:text-gray-300 mb-6">
                   Código de Backup: <span className="font-bold tracking-widest">ABCD-1234-XYZ</span>
                 </div>
                 <Button className="w-full" onClick={() => setTwoFaStep(1)}>Continuar</Button>
               </>
             )}

             {twoFaStep === 1 && (
               <>
                <p className="text-gray-500 mb-6 text-sm">Digite o código de 6 dígitos que aparece no seu app.</p>
                <input type="text" placeholder="000 000" className="fintech-input w-full text-center text-2xl tracking-widest p-3 rounded-lg mb-6" maxLength={6} />
                <Button className="w-full" onClick={() => {
                  setTwoFaStep(0);
                  onActivate();
                }}>Verificar e Ativar</Button>
               </>
             )}
             
             <button onClick={handleClose} className="mt-4 text-sm text-gray-400 hover:text-white">Cancelar</button>
           </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TwoFactorModal;
    