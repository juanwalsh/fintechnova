import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 0",
      period: "/mês + taxas",
      desc: "Perfeito para startups e pequenos negócios validando o modelo.",
      features: [
        "Até R$ 50k em volume/mês",
        "Taxa de 3.9% + R$ 0,50",
        "Painel de gestão básico",
        "Suporte por E-mail",
        "API Standard",
        "1 Usuário"
      ]
    },
    {
      name: "Business",
      price: "R$ 299",
      period: "/mês + taxas",
      desc: "Para empresas em crescimento que precisam de mais recursos.",
      recommended: true,
      features: [
        "Até R$ 500k em volume/mês",
        "Taxa de 2.9% + R$ 0,30",
        "Painel avançado + Analytics",
        "Suporte Prioritário 24/7",
        "API Completa + Webhooks",
        "Até 10 Usuários",
        "Gestão de Assinaturas"
      ]
    },
    {
      name: "Enterprise",
      price: "Sob Consulta",
      period: "",
      desc: "Infraestrutura dedicada para grandes volumes e operações complexas.",
      features: [
        "Volume ilimitado",
        "Taxas negociadas",
        "Gerente de conta dedicado",
        "SLA de 99.99%",
        "Engenharia de soluções",
        "SSO & Auditoria",
        "Acesso antecipado a betas"
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Preços transparentes
          </h1>
          <p className="text-gray-500 text-lg">
            Sem taxas escondidas. Escolha o plano que melhor se adapta ao momento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 bg-white border transition-all duration-300 ${
                plan.recommended 
                  ? 'border-primary shadow-2xl scale-105 z-10' 
                  : 'border-gray-100 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-secondary mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
              </div>

              <Link to="/login?mode=register">
                <Button 
                    variant={plan.recommended ? 'primary' : 'outline'} 
                    className="w-full mb-8"
                >
                    {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                </Button>
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;