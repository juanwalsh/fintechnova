import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Preços', path: '/precos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-secondary">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-morphism shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Globe size={24} />
            </div>
            <span className="text-xl font-heading font-bold tracking-tight">Fintech<span className="text-primary">Nova</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
               <Button variant="ghost" className="font-semibold">Login</Button>
            </Link>
            <Link to="/login?mode=register">
              <Button variant="primary" className="py-2 px-5 text-sm">Criar Conta</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className="text-xl font-semibold border-b border-gray-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full justify-center">Login</Button>
              </Link>
              <Link to="/login" className="w-full">
                <Button variant="primary" className="w-full justify-center">Começar Agora</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Globe size={18} />
                </div>
                <span className="text-lg font-heading font-bold">FintechNova</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolucionando a infraestrutura financeira global com tecnologia de ponta e segurança inigualável.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4 text-highlight">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/solucoes" className="hover:text-white transition-colors">API de Pagamentos</Link></li>
                <li><Link to="/solucoes" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/precos" className="hover:text-white transition-colors">Preços</Link></li>
                <li><Link to="/solucoes" className="hover:text-white transition-colors">Documentação</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4 text-highlight">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/sobre" className="hover:text-white transition-colors">Carreiras</Link></li>
                <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4 text-highlight">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 FintechNova Inc. Todos os direitos reservados.
            </p>
            <div className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <Shield size={12} />
                Este é um site demonstrativo criado para fins de portfólio. Conteúdo e marca fictícios.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <Link to="/contato">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-2xl shadow-primary/40 z-40 hover:bg-blue-600 transition-colors"
        >
          <ArrowRight size={24} />
        </motion.button>
      </Link>
    </div>
  );
};

export default Layout;