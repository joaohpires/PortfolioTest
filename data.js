// Edit your content here. Every text has an English (en) and Portuguese (pt) version.
const OWNER = "João Pires";
const EMAIL = "joaohugopires28@gmail.com";
const UI = {
  about: { en: "About", pt: "Sobre" }, works: { en: "works", pt: "trabalhos" }, work: { en: "Work", pt: "Trabalho" },
  hello: { en: "Hello", pt: "Olá" }, contact: { en: "Contact", pt: "Contacto" },
  aboutTitle: { en: "About & Contact", pt: "Sobre e Contacto" }, portfolio: { en: "Portfolio", pt: "Portefólio" },
  bio: {
    en: `I'm ${OWNER}, a multidisciplinary creative working across design, writing and photography. I care about clear ideas, strong contrast and work that doesn't shout more than it needs to.`,
    pt: `Sou o ${OWNER}, um criativo multidisciplinar que trabalha em design, escrita e fotografia. Valorizo ideias claras, contraste forte e trabalho que não grita mais do que precisa.`
  },
  available: { en: "Available for freelance projects, commissions and collaborations.", pt: "Disponível para projetos freelance, encomendas e colaborações." }
};
const AREAS = [
  {
    slug: "Multimedia Projects", name: { en: "Multimedia Projects", pt: "Projetos Multimédia" }, intro: { en: "Multimedia projects created in collaborations.", pt: "Projetos de multimédia realizados por mim em colaboração de grupo." }, items: [
      { title: "Unprompted", year: "2026", link:"https://youtube.com/@unprompted2026?si=Q8JBUQdrXJNk4MIm", image:"images/logos/unprompted.png", logo:true, text: { en: "A Live Action Limited Series about the dangers of unregulated AI.", pt: "Uma Mini Série sobre os perigos de IA." } },
      { title: "Unit 52", year: "2025", link:"https://youtu.be/q2A9z2_uxig", image:"images/logos/unit51.png", logo:true, text: { en: "3D Animated fictional advertisement.", pt: "Anúncio fictício animado em 3D." } },
      { title: "Pois é...", year: "2024", link:"https://youtu.be/Hy-W8n-MEWU", image:"images/logos/poise.png", logo:true, text: { en: "Short movie.", pt: "Curta Metragem." } }, ]
  },
  {
    slug: "photography", name: { en: "Photography", pt: "Fotografia" }, intro: { en: "Photography stills, shot on a personal digital camera.", pt: "Projetos de fotografia." }, items: [
      { title: "Abstract Brutalism", year: "2026", text: { en: "University of Aveiro.", pt: "Universidade de Aveiro." }, image: "images/abstract.jpg" },
      { title: "Lake Watercolor", year: "2026", text: { en: "Curia.", pt: "Termas, Curia." }, image: "images/watercolor.jpg" },
      { title: "Elevator", year: "2025", text: { en: "Subway, Lisbon.", pt: "Metro, Lisboa." }, image: "images/elevator_1.jpg" },
      { title: "The World", year: "2025", text: { en: "Architecture.", pt: "Estudos de arquitetura." }, image: "images/theworld_1.jpg" },
      { title: "Brutalism", year: "2026", text: { en: "Intricacies of concrete.", pt: "Complexidade do betão." }, image: "images/brutalism_1.jpg" },
      { title: "Bird and water", year: "2025", text: { en: "Aveiro.", pt: "Salinas, Aveiro." }, image: "images/bird_1.jpg" },
      { title: "The Mural", year: "2026", text: { en: "Subway, Lisbon.", pt: "Metro, Lisboa." }, image: "images/mural_1.jpg" },
      { title: "Turtles", year: "2024", text: { en: "Zoo, Lisbon.", pt: "Zoo, Lisboa." }, image: "images/turtles_1.jpg" },
      { title: "Its OK", year: "2025", text: { en: "A sign on the street.", pt: "Um sinal na rua." }, image: "images/itsok_1.jpg" }]
  },
  {
    slug: "writing", name: { en: "Writing", pt: "Escrita" }, intro: { en: "Scripts and written material by me.", pt: "Guiões e material de escrita criados por mim." }, items: [
      { title: "Job Wanted! (Unprompted)", year: "2026", link:"samples/jobwanted.pdf", text: { en: "Scripts for one of the episodes of Unprompted.", pt: "Guião de um dos episódios de Unprompted." } },
    ]
  },
  {
    slug: "design", name: { en: "Design", pt: "Design" }, intro: { en: "Design projects and experiments.", pt: "Projetos e experiências de Design." }, items: [
      { title: "Book Cover", year: "2024", text: { en: "Design for a concept book cover.", pt: "Design conceptual para uma capa de um livro." }, image: "images/design/bookcover.png" },
      { title: "Dark Star logo", year: "2024", text: { en: "Logo design for a fictional editorial company.", pt: "Design de um Logo para uma empresa editorial fictícia." }, scale: 0.5, image: "images/design/logobranco.png", gallery: ["images/design/logobranco.png", "images/design/logoeditorabranco_edited.png", "images/design/logoeditorabranco.png", "images/design/logonomebranco.png"], },
      { title: "MUPI The Singularity", year: "2024", text: { en: "Design for a concept MUPI.", pt: "Design conceptual para um MUPI." }, image: "images/design/MUPITheSingularity.png" },
      ]
  },
  {
    slug: "editing", name: { en: "Editing", pt: "Edição" }, intro: { en: "Editing projects.", pt: "Projetos de edição." }, items: [
      { title: "Unprompted Intro Animation", year: "2026", link:"https://youtu.be/V-WFLws_v1o", text: { en: "Self-published zine mixing photos and short texts.", pt: "Zine autopublicada que mistura fotos e textos curtos." } },
      { title: "The Singularity", year: "2024", link:"https://youtu.be/DbXpetJDThY", text: { en: "Ad for unreleased book, made for PAP.", pt: "Anúncio de um livro não lançado, feito em âmbito da Prova de Aptidão Profissional." } }]
  },
  {
    slug: "other", name: { en: "Other", pt: "Outros" }, intro: { en: "Side projects, experiments and collaborations.", pt: "Projetos paralelos, experiências e colaborações." }, items: [
      { title: "1", year: "2025", text: { en: "Self-published zine mixing photos and short texts.", pt: "Zine autopublicada que mistura fotos e textos curtos." } },
      ]
  }
];
