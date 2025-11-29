import React from 'react';
import { CreditCard, Database, Globe, Lock, RefreshCw, LayoutDashboard } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagamentos Online",
      desc: "Aceite cartões de crédito, débito e PIX com nossa integração transparente e segura. Checkout otimizado para conversão.",
      benefits: ["Alta taxa de aprovação", "Split de pagamentos", "Checkout personalizável"]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Gestão de Assinaturas",
      desc: "Automatize cobranças recorrentes para SaaS, clubes de assinatura e serviços. Lide com churn involuntário automaticamente.",
      benefits: ["Cobrança inteligente", "Planos flexíveis", "Gestão de inadimplência"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Financeira",
      desc: "Construa produtos financeiros do zero usando nossos blocos de construção. Emissão de boletos, transferências e mais.",
      benefits: ["Documentação completa", "Sandox ilimitado", "Webhooks em tempo real"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Onboarding & KYC",
      desc: "Valide a identidade dos seus usuários automaticamente e cumpra regulações sem fricção no cadastro.",
      benefits: ["OCR de documentos", "Background check", "Score de risco"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Integração Bancária",
      desc: "Conecte-se a múltiplos bancos através de uma única interface unificada. Open Finance na prática.",
      benefits: ["Conciliação automática", "Multi-banco", "Extratos unificados"]
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Conta Digital Empresas",
      desc: "Ofereça contas digitais para seus parceiros ou funcionários com nossa solução White Label.",
      benefits: ["Cartões virtuais", "TED/DOC/PIX", "Gestão de despesas"]
    }
  ];

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Soluções completas para cada etapa
          </h1>
          <p className="text-gray-500 text-lg">
            Nossa suíte de produtos foi desenhada para escalar junto com sua empresa, desde a primeira transação até o IPO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{sol.title}</h3>
              <p className="text-gray-500 mb-6 flex-grow">{sol.desc}</p>
              
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Principais Benefícios</h4>
                <ul className="space-y-2">
                  {sol.benefits.map((b, i) => (
                    <li key={i} className="flex items-center text-sm text-secondary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-highlight mr-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contato" className="mt-auto">
                <Button variant="outline" className="w-full">Saiba mais</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;