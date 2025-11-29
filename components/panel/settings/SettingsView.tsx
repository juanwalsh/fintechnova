
import React, { useState } from 'react';
import SettingsProfile from './SettingsProfile';
import SettingsPreferences from './SettingsPreferences';
import SettingsSecurity from './SettingsSecurity';
import TwoFactorModal from './TwoFactorModal';

interface SettingsViewProps {
  user: any;
  setUser: (u: any) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  addToast: (t: any, m: any) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ user, setUser, darkMode, setDarkMode, addToast }) => {
  const [show2FA, setShow2FA] = useState(false);
  const [is2FaEnabled, setIs2FaEnabled] = useState(false);

  const toggle2FA = () => {
    if (is2FaEnabled) {
      setIs2FaEnabled(false);
    } else {
      setShow2FA(true);
    }
  };

  const handleActivate2FA = () => {
    setShow2FA(false);
    setIs2FaEnabled(true);
    addToast('success', '2FA ativado com segurança!');
  };

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500 max-w-4xl pb-24 md:pb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-2">Configurações</h2>
        <p className="text-gray-500">Preferências da conta, chaves de API e segurança.</p>
      </div>

      <div className="space-y-8">
        <SettingsProfile user={user} setUser={setUser} addToast={addToast} />
        <SettingsPreferences darkMode={darkMode} setDarkMode={setDarkMode} />
        <SettingsSecurity is2FaEnabled={is2FaEnabled} onToggle2FA={toggle2FA} addToast={addToast} />
      </div>

      <TwoFactorModal 
        isOpen={show2FA} 
        onClose={() => setShow2FA(false)} 
        onActivate={handleActivate2FA}
      />
    </div>
  );
};

export default SettingsView;
    