import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-secondary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">Nossa História & Missão</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simplificar e modernizar a relação entre empresas e tecnologia financeira, eliminando a burocracia através da inovação.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { icon: <Target size={32} />, title: "Missão", desc: "Democratizar serviços financeiros de alta performance." },
             { icon: <Users size={32} />, title: "Transparência", desc: "Clareza em cada linha de código e centavo transacionado." },
             { icon: <ShieldCheck size={32} />, title: "Segurança", desc: "Proteção de dados é a nossa prioridade zero." },
             { icon: <Zap size={32} />, title: "Inovação", desc: "Sempre um passo à frente do mercado tradicional." },
           ].map((val, i) => (
             <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center">
               <div className="text-primary mb-4 flex justify-center">{val.icon}</div>
               <h3 className="font-bold text-xl mb-2">{val.title}</h3>
               <p className="text-gray-500 text-sm">{val.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Uma jornada de inovação constante</h2>
            <div className="space-y-8 border-l-2 border-primary/20 pl-8 ml-4">
              {[
                { year: '2019', title: 'Fundação', desc: 'Nascemos em um pequeno escritório com a visão de mudar o setor.' },
                { year: '2021', title: 'Série A', desc: 'Levantamos $15M para expandir nossa infraestrutura de pagamentos.' },
                { year: '2022', title: 'Expansão Latam', desc: 'Iniciamos operações no México, Colômbia e Chile.' },
                { year: 'Hoje', title: 'Líderes de Mercado', desc: 'Processamos bilhões anualmente para mais de 10k clientes.' },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <span className="text-primary font-bold text-sm block mb-1">{item.year}</span>
                  <h4 className="font-bold text-lg text-secondary">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Office Modern" className="rounded-2xl shadow-xl w-full h-64 object-cover translate-y-8" />
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data Analytics" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Team Work" className="rounded-2xl shadow-xl w-full h-64 object-cover translate-y-8" />
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Building Architecture" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;