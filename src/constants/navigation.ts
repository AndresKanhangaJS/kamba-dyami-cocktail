export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Carta", href: "/menu" },
  { label: "Nossa História", href: "/sobre" },
  { label: "Reservas", href: "/reservas" },
  { label: "Blog", href: "/blog" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

export const FOOTER_NAV: NavLink[] = [
  { label: "Carta de Cocktails", href: "/menu" },
  { label: "Reservas e Eventos", href: "/reservas" },
  { label: "Nossa História", href: "/sobre" },
  { label: "Contacto", href: "/contacto" },
];
