import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "O futuro dos pagamentos instantâneos na América Latina",
      category: "Tendências",
      date: "12 Mar 2024",
      excerpt: "Como o PIX e sistemas similares estão redefinindo a economia digital e o que esperar para os próximos 5 anos na região.",
      // Image: Concept of digital payments / growth / latam context (abstract map or tech)
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Open Finance: A Nova Era da Integração Financeira",
      category: "Regulação",
      date: "08 Mar 2024",
      excerpt: "Entenda como a portabilidade de dados e APIs abertas estão criando novos modelos de negócios e aumentando a competitividade.",
      // Image: Network connections / API integration / Abstract blue tech lines
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Segurança em APIs Financeiras: Melhores Práticas",
      category: "Tecnologia",
      date: "01 Mar 2024",
      excerpt: "Um guia técnico sobre OAuth2, mTLS e criptografia de dados para desenvolvedores fintech garantirem a proteção dos dados.",
      // Image: Digital security / lock / code
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl font-heading font-bold text-secondary mb-4">Blog & Insights</h1>
          <p className="text-gray-500 text-lg max-w-2xl">Novidades, tutoriais e análises profundas sobre o mercado financeiro e tecnológico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                 <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10" />
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">
                  <span className="text-primary">{post.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1"><Calendar size={12}/> {post.date}</div>
                </div>
                <h2 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors cursor-pointer leading-tight">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-secondary">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"><User size={14}/></div>
                    <span>FintechNova Team</span>
                  </div>
                  <Link to="#" className="text-primary p-2 rounded-full hover:bg-primary/5 transition-colors">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;