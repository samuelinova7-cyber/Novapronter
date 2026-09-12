import { ServiceItem, DifferentialItem, SegmentSolution } from '../types';

export const COMPANY_INFO = {
  name: 'Nova Pronter Segurança Eletrônica',
  shortName: 'Nova Pronter',
  slogan: 'Segurança Eletrônica Inteligente e Monitoramento 24h para sua Empresa ou Residência.',
  subtitle: 'Tecnologia de ponta, proteção contínua e tranquilidade total para você, sua família e seus negócios.',
  phones: [
    { number: '(82) 98785-1181', raw: '5582987851181', label: 'Comercial & Orçamentos' },
    { number: '(82) 98785-1497', raw: '5582987851497', label: 'Central de Atendimento' },
  ],
  instagram: {
    handle: '@novapronterseg.eletronica',
    url: 'https://instagram.com/novapronterseg.eletronica',
  },
  location: {
    city: 'Maceió',
    state: 'AL',
    region: 'Maceió e Região Metropolitana',
    coverage: 'Atendimento rápido em Maceió, Ponta Verde, Jatiúca, Farol, Serraria, Antares, Tabuleiro, Benedito Bentes e Grande Maceió',
  },
  year: '2026',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cftv',
    iconName: 'Camera',
    title: 'CFTV & Câmeras de Segurança',
    subtitle: 'Vigilância em Alta Definição',
    description: 'Instalação e manutenção completa de sistemas de monitoramento por vídeo com tecnologia de ponta.',
    highlights: [
      'Instalação e manutenção preventiva e corretiva de sistemas de CFTV.',
      'Câmeras Wi-Fi, HD, Full HD e IP com visão noturna infravermelho e colorida.',
      'Acesso remoto seguro em tempo real via aplicativo no seu smartphone.',
    ],
    features: [
      'Detecção inteligente de movimento',
      'Gravação em nuvem ou DVR local',
      'Microfone e áudio bidirecional',
      'Visão noturna avançada'
    ],
    badge: 'Mais Procurado',
    popular: true
  },
  {
    id: 'portaria',
    iconName: 'Building2',
    title: 'Portaria Remota & Eletrônica',
    subtitle: 'Redução de Custos e Máximo Controle',
    description: 'Controle total e inteligente de acessos com central remota 24 horas, eliminando vulnerabilidades.',
    highlights: [
      'Controle total de quem entra e quem sai sem necessidade de porteiro físico presencial.',
      'Liberação de acesso ágil por aplicativo, senha personalizada, biometria facial/digital ou tag/controle.',
      'Economia de até 50% nos custos condominiais ou corporativos com máxima segurança.',
    ],
    features: [
      'Atendimento 24 horas pela central',
      'Chave virtual temporária para visitantes',
      'Relatório completo de acessos',
      'Interfonia IP com vídeo'
    ],
    badge: 'Alta Economia'
  },
  {
    id: 'automacao',
    iconName: 'DoorClosed',
    title: 'Automação de Acesso & Manutenção de Portões',
    subtitle: 'Agilidade e Conforto nas Entradas',
    description: 'Modernize as entradas do seu patrimônio com motores rápidos e fechaduras de alta segurança.',
    highlights: [
      'Automatize com segurança a entrada da sua empresa, residência ou condomínio.',
      'Manutenção rápida e segura para motores de portões eletrônicos deslizantes, basculantes e pivotantes.',
      'Instalação de fechaduras digitais, eletroímãs e travas eletromagnéticas reforçadas.',
    ],
    features: [
      'Abertura ultrarrápida (menos tempo exposto na rua)',
      'Controle anti-clonagem',
      'Bateria nobreak para falta de energia',
      'Fechaduras biométricas e por senha'
    ]
  },
  {
    id: 'alarmes',
    iconName: 'BellRing',
    title: 'Alarmes & Cercas Elétricas',
    subtitle: 'Barreira Perimetral e Detecção Imediata',
    description: 'Proteção perimetral ativa com sistemas de alarme integrados e cercas elétricas de alta voltagem.',
    highlights: [
      'Instalação e monitoramento 24/7 de sistemas de alarme inteligentes contra intrusão.',
      'Instalação, eletrificação e manutenção preventiva de cercas elétricas industriais e residenciais.',
      'Sensores de presença com compensação de temperatura e imunes a pequenos animais (Pet Immunity).',
    ],
    features: [
      'Sirenes de alta potência',
      'Comunicação via chip GSM / Wi-Fi',
      'Cerca concertina e elétrica conjugada',
      'Disparo imediato na central'
    ],
    badge: 'Proteção Perimetral'
  },
  {
    id: 'central',
    iconName: 'MonitorCheck',
    title: 'Central de Monitoramento 24h',
    subtitle: 'Vigilância Ativa Ininterrupta',
    description: 'Nossa equipe técnica e operacional acompanha seu patrimônio 24 horas por dia, 365 dias por ano.',
    highlights: [
      'Equipe de prontidão monitorando seu patrimônio em tempo real para ações rápidas antes do problema acontecer.',
      'Verificação por imagem de disparos e envio de viatura de apoio tático conforme plano contratado.',
      'Testes periódicos automáticos de comunicação para garantir que o sistema nunca fique inativo.',
    ],
    features: [
      'Tempo de resposta rápido',
      'Protocolos rígidos de segurança',
      'Relatórios e histórico de eventos',
      'Pronta resposta operacional'
    ],
    badge: 'Prontidão Total',
    popular: true
  },
  {
    id: 'limpeza',
    iconName: 'Sparkles',
    title: 'Serviços de Limpeza e Conservação',
    subtitle: 'Ambientes Impecáveis e Organizados',
    description: 'Equipe especializada para manter seu condomínio ou empresa conservado, higienizado e acolhedor.',
    highlights: [
      'Agentes de portaria e serviços especializados em conservação e manutenção para empresas e condomínios.',
      'Equipe uniformizada, treinada e supervisionada com rigorosos padrões de qualidade.',
      'Soluções integradas com a segurança eletrônica para uma gestão condominial ou predial sem dores de cabeça.',
    ],
    features: [
      'Supervisão técnica contínua',
      'Produtos e equipamentos profissionais',
      'Escalas flexíveis conforme demanda',
      'Equipe qualificada e avaliada'
    ]
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    iconName: 'ShieldCheck',
    title: 'Proteção 24h/7',
    description: 'Monitoramento ininterrupto do seu patrimônio com prontidão técnica todos os dias do ano.',
    benefit: 'Sua tranquilidade garantida a qualquer hora do dia ou da noite.'
  },
  {
    iconName: 'Zap',
    title: 'Atendimento & Manutenção Rápida',
    description: 'Equipe técnica ágil e de prontidão em Maceió e Região para suporte preventivo e emergencial.',
    benefit: 'Sem longas esperas quando seu sistema precisar de assistência.'
  },
  {
    iconName: 'Smartphone',
    title: 'Tecnologia na Palma da Mão',
    description: 'Acompanhe imagens, libere portas e receba alertas diretamente no seu smartphone em tempo real.',
    benefit: 'Controle absoluto onde quer que você esteja no mundo.'
  },
  {
    iconName: 'Settings2',
    title: 'Soluções Sob Medida',
    description: 'Projetos personalizados dimensionados exatamente para a necessidade do seu imóvel.',
    benefit: 'Você investe apenas no que realmente precisa, com máximo custo-benefício.'
  }
];

export const SEGMENTS_DATA: SegmentSolution[] = [
  {
    id: 'residencial',
    name: 'Residências & Casas',
    badge: 'Para Famílias',
    description: 'Proteção sob medida para proteger quem você ama e seu patrimônio, com câmeras no celular e cerca elétrica.',
    recommendedServices: ['Câmeras Wi-Fi com visão noturna', 'Cerca Elétrica e Concertina', 'Alarme com disparo no celular', 'Motor rápido de portão'],
    benefits: ['Monitoramento pelo celular', 'Notificações em tempo real', 'Tranquilidade para viagens e rotina']
  },
  {
    id: 'comercial',
    name: 'Empresas, Lojas & Galpões',
    badge: 'Para Negócios',
    description: 'Prevenção de furtos, controle de estoque e monitoramento de funcionários e clientes com CFTV de alta definição.',
    recommendedServices: ['CFTV IP de alta resolução', 'Controle de acesso por biometria', 'Monitoramento 24h na Central', 'Fechaduras digitais'],
    benefits: ['Auditoria de imagens gravadas', 'Redução drástica de sinistros', 'Acesso restrito a setores sensíveis']
  },
  {
    id: 'condominio',
    name: 'Condomínios Residenciais & Comerciais',
    badge: 'Para Síndicos e Moradores',
    description: 'Redução de até 50% na taxa de condomínio com portaria remota e segurança perimetral completa.',
    recommendedServices: ['Portaria Remota Inteligente', 'CFTV perimetral e áreas comuns', 'Automação de portões para veículos', 'Serviços de Conservação e Limpeza'],
    benefits: ['Fim de faltas e encargos trabalhistas', 'Histórico completo de entradas e saídas', 'Valorização imediata do condomínio']
  }
];

export const FAQ_DATA = [
  {
    question: 'Como funciona a visita técnica e o orçamento?',
    answer: 'Nossa equipe realiza uma avaliação detalhada do seu imóvel em Maceió ou Região Metropolitana para identificar os pontos vulneráveis e propor a solução ideal. O orçamento é 100% gratuito e sem compromisso!'
  },
  {
    question: 'Consigo ver as câmeras no meu celular de qualquer lugar?',
    answer: 'Sim! Configuramos o aplicativo nos smartphones da sua família ou equipe. Você visualiza imagens ao vivo, gravações anteriores e recebe notificações de movimento instantâneas com conexão segura.'
  },
  {
    question: 'O que acontece em caso de queda de energia ou internet?',
    answer: 'Nossos sistemas podem contar com nobreaks de alta capacidade e módulos de transmissão redundante (como chips de celular 4G/GSM), mantendo alarmes, gravações e monitoramento ativos mesmo em apagões.'
  },
  {
    question: 'Qual a área de atendimento da Nova Pronter?',
    answer: 'Atendemos toda a cidade de Maceió (Ponta Verde, Jatiúca, Pajuçara, Farol, Cruz das Almas, Serraria, Antares, Gruta, Tabuleiro, Benedito Bentes, etc.) e cidades da Região Metropolitana.'
  },
  {
    question: 'Como a portaria remota reduz custos do condomínio?',
    answer: 'A portaria remota substitui o custo recorrente da folha de pagamento de porteiros presenciais 24h por uma central altamente tecnológica, mantendo um padrão de segurança ainda mais rigoroso e reduzindo os custos em até 50%.'
  }
];

export function buildWhatsAppUrl(phoneRaw: string, message: string): string {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
}
