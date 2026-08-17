# Kamba-Dyami Cocktail

Website da Kamba-Dyami Cocktail, uma empresa angolana de cocktails para eventos. Não é um bar fixo: a equipa viaja até casamentos, festas privadas e eventos corporativos em Luanda com uma carta de cocktails de autor e mocktails inspirados na cultura angolana.

*"Porque os melhores copos bebem-se com quem importa."*

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) para animações
- [Zustand](https://zustand-demo.pmnd.rs) para estado dos filtros da carta
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) para formulários

Nesta fase (Fase 1), os dados vivem em ficheiros estáticos TypeScript em `src/data/` — sem base de dados nem backend ainda.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Docker

```bash
docker compose -f docker-compose.dev.yml up
```

A app fica disponível em [http://localhost:3001](http://localhost:3001).

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run lint` — ESLint
