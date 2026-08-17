import type { BlogPost } from "@/types/blog.types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mukua-o-ouro-do-baoba",
    title: "Mukua: o ouro do baobá nos nossos cocktails",
    excerpt:
      "Como este fruto ancestral angolano se tornou um dos ingredientes mais distintivos da carta Kamba-Dyami.",
    content: `O mukua, fruto do baobá, é colhido em várias regiões de Angola e traz um sabor terroso e levemente ácido que não se encontra em mais nenhum outro ingrediente. A árvore que o produz pode viver mais de mil anos, e há gerações que as famílias angolanas usam a sua polpa em bebidas tradicionais.

Quando começámos a desenhar a carta do Kamba-Dyami, queríamos ingredientes que contassem uma história angolana em cada gole. O mukua entrou naturalmente nessa conversa: o seu sabor único equilibra bem com gin e cítricos, e a textura da polpa dá um corpo diferente a qualquer cocktail.

No Mwana Pow Remix, por exemplo, a polpa de mukua entra onde normalmente estaria só limão, trazendo profundidade sem perder a frescura. É um pequeno gesto que faz uma grande diferença: em vez de reproduzir um clássico internacional, reinventamo-lo com o que a nossa terra tem para oferecer.

Levamos este ingrediente a cada evento onde montamos o nosso bar móvel, seja um casamento, uma festa de aniversário ou uma celebração corporativa. É a nossa forma de partilhar um pouco da cultura angolana com quem nos convida.`,
    cover_image:
      "https://images.unsplash.com/photo-1575801630974-453541a6ee9e?auto=format&fit=crop&w=1200&q=80",
    author: "Equipa Kamba-Dyami",
    published_at: "2026-03-02",
    tags: ["ingredientes", "cultura"],
  },
  {
    id: "2",
    slug: "a-arte-da-kizomba-sour",
    title: "A arte por trás do Kizomba Sour",
    excerpt:
      "Do mel da Humpata à espuma perfeita: os bastidores de um dos nossos cocktails de assinatura.",
    content: `Cada Kizomba Sour começa com mel puro da região da Humpata, uma escolha que fazemos com cuidado porque o mel local tem uma doçura mais profunda e complexa do que qualquer xarope comercial. É esse mel que substitui o açúcar tradicional do sour clássico.

A parte mais técnica é a espuma. Batemos a clara de ovo com o whisky, o limão e o mel numa técnica chamada "dry shake", sem gelo, para criar a textura cremosa que fica no topo do copo. Só depois disso é que juntamos o gelo e agitamos outra vez. É um passo extra que a maioria dos bares salta, mas que faz toda a diferença no resultado final.

Quando preparamos este cocktail num evento, gostamos de o fazer à vista dos convidados. Ver a espuma a formar-se é quase tão bom como bebê-la, e é sempre um dos momentos que mais gera conversa numa festa.

Se vais organizar um casamento, uma festa de empresa ou qualquer celebração e queres que o Kizomba Sour esteja na carta, é só nos dizeres. Adaptamos sempre a nossa carta ao teu evento.`,
    cover_image:
      "https://images.unsplash.com/photo-1713720441159-466472b29b54?auto=format&fit=crop&w=1200&q=80",
    author: "Equipa Kamba-Dyami",
    published_at: "2026-02-18",
    tags: ["receitas", "assinatura"],
  },
  {
    id: "3",
    slug: "como-funciona-um-evento-kamba-dyami",
    title: "Como funciona um evento com o Kamba-Dyami",
    excerpt:
      "Do primeiro contacto ao último copo servido: assim é que planeamos e montamos o nosso bar móvel no teu evento.",
    content: `Uma das perguntas que mais recebemos é: "vocês têm um bar onde podemos ir?" A resposta curta é não, e é assim de propósito. Preferimos ser nós a chegar até ti, onde quer que o teu evento aconteça, e montar tudo à tua medida.

Tudo começa com uma conversa. Perguntamos sobre a ocasião, o número de convidados, o local e o estilo que procuras. A partir daí desenhamos uma carta específica para esse evento, seja com os nossos cocktails de assinatura, clássicos internacionais ou uma mistura das duas coisas.

No dia, chegamos com horas de antecedência para montar o bar, preparar os ingredientes e testar tudo antes de os primeiros convidados chegarem. Trazemos o nosso próprio equipamento: copos, shakers, gelo e todos os ingredientes frescos, incluindo os toques angolanos que nos distinguem, como o mukua e o mel da Humpata.

Já servimos casamentos na praia, festas de aniversário em jardins privados e eventos corporativos em escritórios no centro de Luanda. Cada espaço traz um desafio diferente, e é exactamente isso que torna cada evento único.

Se estás a planear alguma coisa, mesmo que ainda não tenhas todos os detalhes fechados, fala connosco. Adoramos ajudar a desenhar a experiência certa desde o início.`,
    cover_image:
      "https://images.unsplash.com/photo-1755091698138-f350cfb77239?auto=format&fit=crop&w=1200&q=80",
    author: "Equipa Kamba-Dyami",
    published_at: "2026-04-10",
    tags: ["eventos", "bastidores"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
