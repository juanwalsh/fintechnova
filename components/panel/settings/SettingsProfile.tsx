
import React, { useState, useRef } from 'react';
import { Users, Camera, Edit2 } from 'lucide-react';
import Button from '../../Button';

interface SettingsProfileProps {
  user: any;
  setUser: (u: any) => void;
  addToast: (t: any, m: any) => void;
}

const SettingsProfile: React.FC<SettingsProfileProps> = ({ user, setUser, addToast }) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: user.name, email: user.email });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, avatar: reader.result as string });
        addToast('success', 'Foto de perfil atualizada!');
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = () => {
    setUser({ ...user, name: profileForm.name, email: profileForm.email });
    setIsEditingProfile(false);
    addToast('success', 'Perfil atualizado com sucesso!');
  };

  return (
    <section className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="font-bold text-lg text-secondary dark:text-white mb-6 flex items-center gap-2">
        <Users size={20} className="text-primary"/> Dados da Conta
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-2xl overflow-hidden relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            {user.avatar ? <img src={user.avatar} className="w-full h-full object-cover"/> : "AD"}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={20} className="text-white"/>
            </div>
          </div>
          <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handlePhotoUpload}/>
          <div className="flex gap-2">
             <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>Alterar Foto</Button>
             <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50" onClick={() => setUser({...user, avatar: null})}>Remover</Button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Nome de Exibição</label>
          <input 
            type="text" 
            value={profileForm.name} 
            onChange={e => setProfileForm({...profileForm, name: e.target.value})}
            disabled={!isEditingProfile}
            className={`fintech-input w-full p-3 rounded-lg ${!isEditingProfile ? 'opacity-60 cursor-not-allowed bg-gray-100 dark:bg-gray-800 border-transparent' : ''}`} 
          />
        </div>
        <div className="space-y-2">
           <label className="text-xs font-bold text-gray-500 uppercase">E-mail</label>
           <input 
              type="email" 
              value={profileForm.email} 
              onChange={e => setProfileForm({...profileForm, email: e.target.value})}
              disabled={!isEditingProfile}
              className={`fintech-input w-full p-3 rounded-lg ${!isEditingProfile ? 'opacity-60 cursor-not-allowed bg-gray-100 dark:bg-gray-800 border-transparent' : ''}`} 
           />
        </div>
        <div className="md:col-span-2 flex gap-3">
           {!isEditingProfile ? (
              <Button variant="outline" onClick={() => setIsEditingProfile(true)} icon={<Edit2 size={16}/>}>Editar</Button>
           ) : (
              <>
                <Button variant="outline" onClick={() => {setIsEditingProfile(false); setProfileForm({name: user.name, email: user.email})}}>Cancelar</Button>
                <Button onClick={saveProfile}>Salvar Alterações</Button>
              </>
           )}
        </div>
      </div>
    </section>
  );
};

export default SettingsProfile;
    