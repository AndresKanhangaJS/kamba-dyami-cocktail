export const SITE_CONFIG = {
  name: "Kamba-Dyami Cocktail",
  tagline: "O Amigo do Peito",
  description: "Serviço de cocktails premium para eventos em Luanda.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  locale: "pt-AO",
  currency: "AOA",
  timezone: "Africa/Luanda",
} as const;
