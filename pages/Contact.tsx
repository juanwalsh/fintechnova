import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const labelClasses = "block text-sm font-medium text-gray-600 mb-2";

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-heading font-bold text-secondary mb-6">Vamos conversar?</h1>
            <p className="text-gray-500 text-lg mb-10">
              Nossa equipe de especialistas está pronta para entender o seu modelo de negócio e propor a melhor arquitetura financeira.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">E-mail</h3>
                  <p className="text-gray-500">contato@fintechnova.com</p>
                  <p className="text-gray-500">suporte@fintechnova.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Telefone</h3>
                  <p className="text-gray-500">+55 (11) 3000-0000</p>
                  <p className="text-xs text-gray-400 mt-1">Seg-Sex, 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Escritório</h3>
                  <p className="text-gray-500">Av. Faria Lima, 1000 - Andar 25</p>
                  <p className="text-gray-500">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            {/* Functional Map */}
            <div className="mt-10 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870296766!2d-46.69904992496582!3d-23.59323498466658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a920b72741%3A0x868725832791722d!2sAv.%20Brig.%20Faria%20Lima%2C%201000%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005426-100!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Localização do Escritório"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card h-fit">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Mensagem enviada!</h3>
                <p className="text-gray-500">Nossa equipe entrará em contato em menos de 24 horas.</p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Enviar nova mensagem</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-secondary">Envie uma mensagem</h3>
                
                <div>
                  <label className={labelClasses}>Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    className="fintech-input w-full px-4 py-3 rounded-lg shadow-inner"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className={labelClasses}>E-mail Corporativo</label>
                  <input 
                    type="email" 
                    required
                    className="fintech-input w-full px-4 py-3 rounded-lg shadow-inner"
                    placeholder="voce@empresa.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Empresa</label>
                  <input 
                    type="text" 
                    className="fintech-input w-full px-4 py-3 rounded-lg shadow-inner"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Mensagem</label>
                  <textarea 
                    rows={4}
                    required
                    className="fintech-input w-full px-4 py-3 rounded-lg shadow-inner"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" className="w-full" isLoading={isSubmitting}>
                  Enviar Mensagem
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  Ao enviar, você concorda com nossa Política de Privacidade.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
