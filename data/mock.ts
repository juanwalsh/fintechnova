
export const MOCK_TRANSACTIONS = [
  { id: 'TRX-9821', date: '12/03/2024 14:30', type: 'PIX', value: 2500.00, status: 'completed', sender: 'João Silva' },
  { id: 'TRX-9822', date: '12/03/2024 13:15', type: 'Cartão Crédito', value: 120.50, status: 'completed', sender: 'Ana Costa' },
  { id: 'TRX-9823', date: '12/03/2024 11:45', type: 'Boleto', value: 4500.00, status: 'pending', sender: 'Tech Solutions Ltda' },
  { id: 'TRX-9824', date: '11/03/2024 18:20', type: 'Transferência', value: 12500.00, status: 'completed', sender: 'Global Imports' },
  { id: 'TRX-9825', date: '11/03/2024 10:05', type: 'PIX', value: 50.00, status: 'failed', sender: 'Pedro Santos' },
  { id: 'TRX-9826', date: '10/03/2024 16:40', type: 'Cartão Crédito', value: 890.90, status: 'completed', sender: 'Maria Oliveira' },
  { id: 'TRX-9827', date: '10/03/2024 09:12', type: 'PIX', value: 340.00, status: 'completed', sender: 'Lucas Pereira' },
  { id: 'TRX-9828', date: '09/03/2024 15:30', type: 'Boleto', value: 1200.00, status: 'pending', sender: 'Condomínio Bela Vista' },
  { id: 'TRX-9829', date: '09/03/2024 11:20', type: 'PIX', value: 15.00, status: 'completed', sender: 'Café da Esquina' },
  { id: 'TRX-9830', date: '08/03/2024 14:00', type: 'Transferência', value: 32000.00, status: 'completed', sender: 'Investimentos SA' },
  { id: 'TRX-9831', date: '08/03/2024 09:00', type: 'PIX', value: 150.00, status: 'completed', sender: 'Roberto Silva' },
  { id: 'TRX-9832', date: '07/03/2024 19:30', type: 'Cartão Crédito', value: 2400.00, status: 'failed', sender: 'E-commerce Shop' },
];

export const MOCK_CUSTOMERS = [
  { id: 1, name: 'Carlos Mendes', company: 'Mendes Tech', email: 'carlos@mendestech.com', lastActive: 'Hoje', status: 'active', volume: 'R$ 45.000', method: 'PIX', history: ['TRX-991', 'TRX-882'] },
  { id: 2, name: 'Fernanda Torres', company: 'Studio Design', email: 'fernanda@studio.com', lastActive: 'Ontem', status: 'active', volume: 'R$ 12.500', method: 'Cartão', history: ['TRX-123'] },
  { id: 3, name: 'Roberto Almeida', company: 'Construtora RA', email: 'roberto@ra.com.br', lastActive: '3 dias atrás', status: 'inactive', volume: 'R$ 150.000', method: 'Boleto', history: [] },
  { id: 4, name: 'Juliana Paes', company: 'E-commerce Beauty', email: 'ju@beauty.com', lastActive: 'Hoje', status: 'active', volume: 'R$ 89.900', method: 'API', history: ['TRX-777', 'TRX-778'] },
  { id: 5, name: 'Ricardo Salles', company: 'Consultoria RS', email: 'ricardo@rs.com', lastActive: '5 dias atrás', status: 'pending', volume: 'R$ 0', method: 'N/A', history: [] },
  { id: 6, name: 'Mariana Lima', company: 'StartEducation', email: 'mari@edu.com', lastActive: '2 horas atrás', status: 'active', volume: 'R$ 32.100', method: 'PIX', history: ['TRX-999'] },
  { id: 7, name: 'Paulo Kogos', company: 'Libertarian Inc', email: 'paulo@lib.com', lastActive: '1 hora atrás', status: 'active', volume: 'R$ 12.000', method: 'Cripto', history: ['TRX-111'] },
  { id: 8, name: 'Ana Souza', company: 'Bakery Ana', email: 'ana@bakery.com', lastActive: 'Hoje', status: 'active', volume: 'R$ 5.400', method: 'PIX', history: ['TRX-222'] },
];

export const DASH_DATA_7D = [
  { name: 'Seg', val: 4000 }, { name: 'Ter', val: 3000 }, { name: 'Qua', val: 5000 },
  { name: 'Qui', val: 2780 }, { name: 'Sex', val: 6890 }, { name: 'Sab', val: 8390 }, { name: 'Dom', val: 3490 },
];

export const DASH_DATA_30D = [
  { name: '01', val: 15400 }, { name: '05', val: 18300 }, { name: '10', val: 22500 },
  { name: '15', val: 19800 }, { name: '20', val: 24100 }, { name: '25', val: 21200 }, { name: '30', val: 28900 }
];

export const MOCK_NOTIFICATIONS = [
  { id: 1, text: "Backup realizado com sucesso", time: "Há 2 horas", read: false },
  { id: 2, text: "Tentativa de login bloqueada (IP 192.168.1.55)", time: "Há 5 horas", read: false },
  { id: 3, text: "Nova fatura disponível", time: "Há 1 dia", read: true },
  { id: 4, text: "Bem-vindo ao FintechNova!", time: "Há 2 dias", read: true },
  { id: 5, text: "Atualização de sistema agendada", time: "Há 3 dias", read: true },
  { id: 6, text: "Relatório mensal pronto", time: "Há 4 dias", read: true },
];
    