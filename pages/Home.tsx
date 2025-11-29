import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Shield, Zap, Globe, Layers, BarChart3, 
  Lock, CreditCard, Server, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { value: 400 }, { value: 300 }, { value: 550 }, { value: 450 }, 
  { value: 650 }, { value: 600 }, { value: 800 }
];

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-highlight/10 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-gradient-to-t from-primary/5 to-transparent blur-3xl" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Nova API v2.0 disponível
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-secondary">
                Tecnologia Financeira para <span className="gradient-text">Potencializar o Futuro</span> dos Seus Negócios.
              </h1>
              
              <p className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
                Soluções financeiras seguras, modernas e altamente escaláveis. Simplifique pagamentos, gerencie fluxos e escale sua operação com nossa infraestrutura global.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login?mode=register">
                  <Button size="lg" icon={<Zap size={18} />}>Criar Conta Grátis</Button>
                </Link>
                <Link to="/solucoes">
                  <Button variant="outline" size="lg">Ver Soluções</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 w-full relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-glass p-6">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="font-semibold text-secondary">Receita Total</h3>
                    <p className="text-sm text-gray-400">Últimos 7 dias</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-2xl text-primary">R$ 142.302,00</h3>
                    <span className="text-xs text-green-500 font-medium">+12.5% vs. anterior</span>
                  </div>
                </div>
                
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1F36', border: 'none', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#8AA2FF' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4C6FFF" 
                        strokeWidth={4} 
                        dot={{ r: 4, fill: '#4C6FFF', strokeWidth: 2, stroke: '#fff' }} 
                        activeDot={{ r: 6 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex items-center gap-3">
                    <div className="p-2 bg-green-100 text-green-600 rounded-lg"><ArrowRight className="rotate-[-45deg]" size={18}/></div>
                    <div>
                      <p className="text-xs text-gray-400">Entradas</p>
                      <p className="font-bold text-secondary">R$ 84k</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex items-center gap-3">
                    <div className="p-2 bg-red-100 text-red-500 rounded-lg"><ArrowRight className="rotate-45" size={18}/></div>
                    <div>
                      <p className="text-xs text-gray-400">Saídas</p>
                      <p className="font-bold text-secondary">R$ 32k</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-highlight/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-10 border-y border-gray-100 bg-white/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Confiado por empresas inovadoras
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['TrustPay', 'NovaBank Cloud', 'FinCore Systems', 'BlueGate Holdings'].map((brand, i) => (
               <span key={i} className="text-xl md:text-2xl font-heading font-bold text-secondary">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Tudo o que você precisa para crescer
            </h2>
            <p className="text-gray-500">
              Nossa plataforma modular se adapta ao seu modelo de negócio, seja você uma startup ou uma enterprise.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Zap size={24} />, title: 'Pagamentos Instantâneos', text: 'Processamento em tempo real com alta disponibilidade.' },
              { icon: <Globe size={24} />, title: 'Gateway Global', text: 'Aceite moedas de mais de 150 países sem fricção.' },
              { icon: <Layers size={24} />, title: 'API Integrada', text: 'Documentação clara e integração em minutos.' },
              { icon: <BarChart3 size={24} />, title: 'Gestão Inteligente', text: 'Controle total de recebíveis e fluxo de caixa.' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-xl transition-shadow duration-300 border border-gray-50 group"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Infraestrutura Financeira de <br/> <span className="text-highlight">Próxima Geração</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Construído para desenvolvedores, otimizado para negócios. Nossa arquitetura garante estabilidade e segurança nível bancário.
              </p>
              
              <ul className="space-y-4">
                {[
                  '99.997% uptime garantido em SLA',
                  'Auditoria e conciliação em tempo real',
                  'API RESTful + Webhooks robustos',
                  'Criptografia de ponta a ponta (AES-256)',
                  'Sistema antifraude com IA proprietária'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={20} className="text-highlight" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link to="/solucoes">
                  <Button variant="primary" className="bg-highlight hover:bg-white hover:text-secondary text-secondary font-bold">
                    Explorar Documentação
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-[#0f1221] rounded-xl p-6 font-mono text-sm border border-gray-700 shadow-2xl overflow-hidden relative">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400 mr-2">transaction</span> = <span className="text-purple-400 mx-2">await</span> fintech.createCharge({'{'}</div>
                  <div className="pl-4"><span className="text-red-400">amount</span>: <span className="text-orange-400">5000</span>,</div>
                  <div className="pl-4"><span className="text-red-400">currency</span>: <span className="text-green-400">'BRL'</span>,</div>
                  <div className="pl-4"><span className="text-red-400">customer</span>: {'{'}</div>
                  <div className="pl-8"><span className="text-red-400">email</span>: <span className="text-green-400">'user@example.com'</span></div>
                  <div className="pl-4">{'}'},</div>
                  <div className="pl-4"><span className="text-red-400">payment_method</span>: <span className="text-green-400">'pix'</span></div>
                  <div>{'}'});</div>
                  <br/>
                  <div><span className="text-gray-500">// Response: 200 OK</span></div>
                  <div>console.<span className="text-yellow-400">log</span>(transaction.<span className="text-red-400">status</span>); <span className="text-gray-500">// 'approved'</span></div>
                </div>
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Pronto para escalar sua operação?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Junte-se a milhares de empresas que confiam na FintechNova para processar seus pagamentos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/login?mode=register">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="!bg-white !text-secondary hover:!bg-secondary hover:!text-white border-2 border-white font-bold min-w-[200px] transition-colors duration-300"
                  >
                    Começar Agora
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white border-white hover:bg-white/10 min-w-[200px]"
                  >
                    Falar com Consultor
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;