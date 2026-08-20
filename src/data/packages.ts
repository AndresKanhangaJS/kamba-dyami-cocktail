export interface EventPackage {
  id: string;
  name: string;
  tagline: string;
  guests: string;
  duration: string;
  team: string;
  features: string[];
  highlight?: boolean;
}

export const eventPackages: EventPackage[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Para festas íntimas e reuniões privadas.",
    guests: "Até 30 convidados",
    duration: "3 horas de serviço",
    team: "Equipa Kamba-Dyami",
    features: [
      "Reunião de verificação antes do evento",
      "Bar completo montado no local, com equipamento, refrigeração e gelo",
      "Sumos naturais, xaropes artesanais, guarnições frescas e copos de shots",
      "Carta de assinaturas e clássicos, definida contigo",
      "Opções sem álcool disponíveis",
      "Montagem, serviço e desmontagem incluídos",
    ],
  },
  {
    id: "kamba",
    name: "Kamba",
    tagline: "O nosso pacote mais popular, para festas que enchem a casa.",
    guests: "Até 80 convidados",
    duration: "4 horas de serviço",
    team: "Equipa Kamba-Dyami",
    features: [
      "Tudo o que está incluído no Essencial",
      "Welcome drink servido à chegada dos convidados",
      "Carta completa: assinaturas, clássicos e África Fusion",
      "Brinde de copos/canecas personalizadas Kamba-Dyami",
      "Serviço volante de shots em bandeja pela sala",
    ],
    highlight: true,
  },
  {
    id: "dyami-prime",
    name: "Dyami Prime",
    tagline: "Para casamentos, eventos corporativos e grandes celebrações.",
    guests: "80 a 150+ convidados",
    duration: "5 horas de serviço",
    team: "Equipa Kamba-Dyami",
    features: [
      "Tudo o que está incluído no Kamba",
      "Cocktail exclusivo criado e nomeado para a ocasião",
      "Segundo ponto de bar para servir sem filas de espera",
    ],
  },
];

export const PACKAGE_ADD_ONS = [
  "Hora extra de serviço",
  "Reforço de equipa para eventos maiores",
  "Mocktail bar dedicado (100% sem álcool)",
  "Estação de espresso martini",
  "Menu totalmente personalizado com ingredientes à escolha",
  "Deslocação para eventos fora de Luanda",
];
