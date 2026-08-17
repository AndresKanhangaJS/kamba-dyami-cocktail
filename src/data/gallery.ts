export interface GalleryItem {
  id: string;
  caption: string;
  category: "cocktails" | "ambiente" | "eventos";
  gradient: string;
  tall?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    caption: "Luanda Sunset ao pôr do sol",
    category: "cocktails",
    gradient: "linear-gradient(160deg, var(--color-coral-angola) 0%, var(--color-amber) 130%)",
    tall: true,
  },
  {
    id: "2",
    caption: "O bar em noite de kizomba",
    category: "ambiente",
    gradient: "linear-gradient(160deg, var(--color-purple-night) 0%, var(--color-obsidian) 130%)",
  },
  {
    id: "3",
    caption: "Kizomba Sour, espuma perfeita",
    category: "cocktails",
    gradient: "linear-gradient(160deg, var(--color-gold-kamba) 0%, var(--color-smoke) 130%)",
  },
  {
    id: "4",
    caption: "Celebração privada na Ilha",
    category: "eventos",
    gradient: "linear-gradient(160deg, var(--color-teal-ilha) 0%, var(--color-purple-night) 130%)",
    tall: true,
  },
  {
    id: "5",
    caption: "Mwana Pow Remix, twist de limão",
    category: "cocktails",
    gradient: "linear-gradient(160deg, var(--color-teal-ilha) 0%, var(--color-obsidian) 130%)",
  },
  {
    id: "6",
    caption: "Padrão de panos inspira a decoração",
    category: "ambiente",
    gradient: "linear-gradient(160deg, var(--color-red-angola) 0%, var(--color-gold-kamba) 130%)",
  },
  {
    id: "7",
    caption: "Ndengue, calor sem álcool",
    category: "cocktails",
    gradient: "linear-gradient(160deg, var(--color-coral-angola) 0%, var(--color-teal-ilha) 130%)",
    tall: true,
  },
  {
    id: "8",
    caption: "Aniversário no salão privado",
    category: "eventos",
    gradient: "linear-gradient(160deg, var(--color-purple-night) 0%, var(--color-coral-angola) 130%)",
  },
  {
    id: "9",
    caption: "Detalhe do balcão ao anoitecer",
    category: "ambiente",
    gradient: "linear-gradient(160deg, var(--color-smoke) 0%, var(--color-gold-kamba) 130%)",
  },
];
