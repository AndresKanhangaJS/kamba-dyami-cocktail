export interface GalleryItem {
  id: string;
  caption: string;
  category: "cocktails" | "ambiente" | "eventos";
  image: string;
  tall?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    caption: "Luanda Sunset ao pôr do sol",
    category: "cocktails",
    image:
      "https://images.unsplash.com/photo-1586338211598-e2d64cf97e28?auto=format&fit=crop&w=1000&q=80",
    tall: true,
  },
  {
    id: "2",
    caption: "Preparação ao vivo numa festa",
    category: "ambiente",
    image:
      "https://images.unsplash.com/photo-1647776112336-72f4c30fafc1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    caption: "Kizomba Sour, espuma perfeita",
    category: "cocktails",
    image:
      "https://images.unsplash.com/photo-1713720441159-466472b29b54?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "4",
    caption: "Cocktails ao ar livre num casamento",
    category: "eventos",
    image:
      "https://images.unsplash.com/photo-1755091698138-f350cfb77239?auto=format&fit=crop&w=1000&q=80",
    tall: true,
  },
  {
    id: "5",
    caption: "Mwana Pow Remix, twist de limão",
    category: "cocktails",
    image:
      "https://images.unsplash.com/photo-1573624658129-3f7856192f19?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "6",
    caption: "Bastidores da preparação",
    category: "ambiente",
    image:
      "https://images.unsplash.com/photo-1529671434436-8fbb37410056?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "7",
    caption: "Ndengue, calor sem álcool",
    category: "cocktails",
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1000&q=80",
    tall: true,
  },
  {
    id: "8",
    caption: "Brinde numa festa de aniversário",
    category: "eventos",
    image:
      "https://images.unsplash.com/photo-1699730164892-d7c433524ff3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "9",
    caption: "Detalhe do balcão ao anoitecer",
    category: "ambiente",
    image:
      "https://images.unsplash.com/photo-1760463502141-2b5166df169e?auto=format&fit=crop&w=1000&q=80",
  },
];
