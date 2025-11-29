
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import Button from '../Button';

interface LoginFormProps {
  onLogin: (name: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [searchParams] = useSearchParams();
  const [isRegister, setIsRegister] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [registerName, setRegisterName] = useState('');

  useEffect(() => {
    if (searchParams.get('mode') === 'register') {
      setIsRegister(true);
    }
  }, [searchParams]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      const displayName = isRegister ? (registerName || 'Novo Usuário') : 'Admin User';
      onLogin(displayName);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center p-4 relative z-10 w-full max-w-md">
      <motion.div 
        initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
        className="bg-white dark:bg-darkSurface rounded-2xl shadow-2xl w-full overflow-hidden flex flex-col border border-white/50 dark:border-gray-700"
      >
        <div className="w-full p-8 md:p-12">
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
               <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform"><Globe size={20}/></div>
               <span className="font-heading font-bold text-2xl text-secondary dark:text-white">FintechNova</span>
            </Link>
            <h2 className="text-2xl font-bold text-secondary dark:text-white mb-2">{isRegister ? 'Crie sua conta' : 'Acesse o Painel'}</h2>
            <p className="text-gray-400 text-sm">
              {isRegister ? 'Junte-se a milhares de empresas inovadoras.' : 'Gerencie suas finanças com segurança.'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5">
            {isRegister && (
               <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  className="fintech-input w-full p-3 rounded-lg" 
                  placeholder="Ex: João Silva" 
                  required 
                  value={registerName}
                  onChange={e => setRegisterName(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">E-mail Corporativo</label>
              <input type="email" className="fintech-input w-full p-3 rounded-lg" placeholder="seu@email.com" required defaultValue={isRegister ? '' : "admin@nova.test"} />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Senha</label>
                {!isRegister && <a href="#" className="text-xs text-primary hover:underline font-medium">Esqueceu?</a>}
              </div>
              <input type="password" className="fintech-input w-full p-3 rounded-lg" placeholder="••••••••" required defaultValue={isRegister ? '' : "testing123"} />
            </div>

            <Button type="submit" className="w-full h-12 text-base shadow-xl shadow-primary/20 mt-2" isLoading={authLoading}>
              {isRegister ? 'Criar Conta Grátis' : 'Entrar no Sistema'}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center text-sm text-gray-500">
            {isRegister ? 'Já tem uma conta? ' : 'Ainda não é cliente? '}
            <button 
              onClick={() => setIsRegister(!isRegister)} 
              className="text-primary font-bold hover:underline"
            >
              {isRegister ? 'Fazer Login' : 'Criar Conta'}
            </button>
          </div>
        </div>
        
        {/* Decorative bottom bar */}
        <div className="h-2 w-full bg-gradient-to-r from-secondary via-primary to-highlight"></div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
    