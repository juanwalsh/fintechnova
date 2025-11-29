
import React from 'react';
import { Key, Copy } from 'lucide-react';
import Button from '../../Button';

interface SettingsSecurityProps {
  is2FaEnabled: boolean;
  onToggle2FA: () => void;
  addToast: (t: any, m: any) => void;
}

const SettingsSecurity: React.FC<SettingsSecurityProps> = ({ is2FaEnabled, onToggle2FA, addToast }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      addToast('success', 'Chave API copiada com sucesso!');
    }).catch(() => {
      addToast('error', 'Falha ao copiar. Selecione manualmente.');
    });
  };

  return (
    <section className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="font-bold text-lg text-secondary dark:text-white mb-6 flex items-center gap-2">
        <Key size={20} className="text-primary"/> API & Segurança
      </h3>
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Chave Pública</label>
          <div className="flex gap-2">
            <input type="text" readOnly value="pk_live_51MzQ29Xa...921sA" className="fintech-input flex-1 px-4 py-2 rounded-lg font-mono text-sm" />
            <Button variant="outline" size="sm" icon={<Copy size={16}/>} onClick={() => copyToClipboard('pk_live_51MzQ29Xa...921sA')}>Copiar</Button>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div>
             <p className="font-medium text-secondary dark:text-white">Autenticação de Dois Fatores (2FA)</p>
             <p className="text-xs text-gray-400">Proteja sua conta com 2FA.</p>
          </div>
          <button 
            onClick={onToggle2FA}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${is2FaEnabled ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}
          >
            {is2FaEnabled ? 'Desativar' : 'Ativar Agora'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsSecurity;
    