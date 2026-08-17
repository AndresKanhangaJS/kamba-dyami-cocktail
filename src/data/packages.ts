export interface EventPackage {
  id: string;
  name: string;
  tagline: string;
  priceFrom: number;
  guests: string;
  duration: string;
  bartenders: string;
  drinkOptions: string;
  features: string[];
  highlight?: boolean;
}

export const eventPackages: EventPackage[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Para festas íntimas e reuniões pequenas.",
    priceFrom: 180000,
    guests: "Até 30 convidados",
    duration: "3 horas de serviço",
    bartenders: "1 bartender Kamba-Dyami",
    drinkOptions: "4 cocktails + 1 mocktail à escolha",
    features: [
      "Equipamento completo (shakers, copos, gelo, guarnições)",
      "Carta reduzida com cocktails de assinatura e clássicos",
      "1 opção sem álcool sempre disponível",
      "Montagem e desmontagem incluídas",
    ],
  },
  {
    id: "kamba",
    name: "Kamba",
    tagline: "O nosso pacote mais popular, para festas que enchem a casa.",
    priceFrom: 350000,
    guests: "Até 80 convidados",
    duration: "4 horas de serviço",
    bartenders: "2 bartenders Kamba-Dyami",
    drinkOptions: "6 cocktails + 2 mocktails à escolha",
    features: [
      "Tudo o que está incluído no Essencial",
      "Welcome drink de boas-vindas para os convidados",
      "Carta completa: assinaturas, clássicos e África Fusion",
      "Consultoria de menu à medida da ocasião",
      "Guarnições e copos temáticos Kamba-Dyami",
    ],
    highlight: true,
  },
  {
    id: "dyami-prime",
    name: "Dyami Prime",
    tagline: "Para casamentos, eventos corporativos e celebrações grandes.",
    priceFrom: 650000,
    guests: "80 a 150+ convidados",
    duration: "5 horas de serviço",
    bartenders: "3 ou mais bartenders Kamba-Dyami",
    drinkOptions: "Carta completa + 1 cocktail assinado só para o teu evento",
    features: [
      "Tudo o que está incluído no Kamba",
      "Cocktail exclusivo criado e nomeado para a ocasião",
      "Preparação ao vivo em frente aos convidados",
      "Coordenador de evento dedicado no dia",
      "Glassware premium e montagem personalizada",
    ],
  },
];

export const PACKAGE_ADD_ONS = [
  "Hora extra de serviço",
  "Bartender adicional",
  "Mocktail bar dedicado (100% sem álcool)",
  "Estação de espresso martini",
  "Menu totalmente personalizado com ingredientes à escolha",
];
