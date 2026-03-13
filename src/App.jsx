import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ChartBar,
  ChartLine,
  ChartPie,
  ChevronLeft,
  ChevronRight,
  Code,
  Download,
  Github,
  Languages,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import {
  SiClaude,
  SiDocker,
  SiDotnet,
  SiLangchain,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiYaml,
} from "react-icons/si";
import { TbBrandAws, TbBrandAzure, TbBrandCSharp } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { Button } from "./components/ui/button";
import { Card, CardDescription, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { SectionHeader } from "./components/ui/section-header";

const resumeFiles = {
  eu: {
    href: "/Felipe_Curriculum_ATS_MAR2026_EU.pdf",
    download: "Felipe_Curriculum_ATS_MAR2026_EU.pdf",
  },
  pt: {
    href: "/Felipe_Curriculum_ATS_MAR2026_PT.pdf",
    download: "Felipe_Curriculum_ATS_MAR2026_PT.pdf",
  },
};

const marketPlatformGallery = {
  en: [
    {
      src: "/projects/market-platform-screen-01.png",
      alt: "FastMarket access selection screen with Mercado and Administrador profiles.",
    },
    {
      src: "/projects/market-platform-screen-02.png",
      alt: "Administrative dashboard listing partner supermarkets, status, and management actions.",
    },
    {
      src: "/projects/market-platform-screen-03.png",
      alt: "Store dashboard showing revenue, active products, recent orders, and popular products.",
    },
    {
      src: "/projects/market-platform-screen-04.png",
      alt: "Orders management screen with status filters and fulfillment actions.",
    },
    {
      src: "/projects/market-platform-screen-05.png",
      alt: "Business dashboard with revenue metrics, low-stock items, and order status analysis.",
    },
  ],
  pt: [
    {
      src: "/projects/market-platform-screen-01.png",
      alt: "Tela de acesso do FastMarket com perfis de Mercado e Administrador.",
    },
    {
      src: "/projects/market-platform-screen-02.png",
      alt: "Painel administrativo com listagem de mercados parceiros, status e ações de gestão.",
    },
    {
      src: "/projects/market-platform-screen-03.png",
      alt: "Dashboard do mercado com receita, produtos ativos, pedidos recentes e produtos populares.",
    },
    {
      src: "/projects/market-platform-screen-04.png",
      alt: "Tela de pedidos com filtros por status e ações de atendimento.",
    },
    {
      src: "/projects/market-platform-screen-05.png",
      alt: "Dashboard analítico com métricas de receita, produtos com baixo estoque e análise de pedidos.",
    },
  ],
};

const salesDashboardGallery = {
  en: [
    {
      src: "/projects/power-bi-project01.jpeg",
      alt: "Sales dashboard overview with KPI cards and charts.",
    },
    {
      src: "/projects/power-bi-project02.jpeg",
      alt: "Business performance dashboard with detailed operational metrics.",
    },
  ],
  pt: [
    {
      src: "/projects/power-bi-project01.jpeg",
      alt: "Visão geral do dashboard de vendas com KPIs e gráficos.",
    },
    {
      src: "/projects/power-bi-project02.jpeg",
      alt: "Dashboard de performance do negócio com métricas operacionais detalhadas.",
    },
  ],
};

const translations = {
  en: {
    language: {
      switchAria: "Switch language between English and Portuguese",
      menuAria: "Toggle navigation",
      navAria: "Primary navigation",
    },
    skipToContent: "Skip to content",
    nav: [
      { label: "About Me", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Software Engineer Portfolio",
      title: "Hi, I'm Felipe!",
      description:
        "Recently graduated Software Engineer with hands-on experience in full-stack development, QA, and product delivery. Open to software engineering opportunities.",
      primaryCta: "Explore Projects",
      secondaryCta: "Contact Me",
      profileImageAlt: "Portrait placeholder for Felipe Mafissioni",
      profileRole: "Junior Full-Stack Developer Engineer",
      profileLanguages: ["🇧🇷 🇵🇹 Portuguese: Native", "🇬🇧 🇺🇸 English: Advanced"],
      linkedinCta: "LinkedIn",
      githubCta: "GitHub",
      resumeEuCta: "Download CV (EU)",
      resumeBrCta: "Download CV (BR)",
    },
    about: {
      eyebrow: "About Me",
      title: "Software Engineer with a product and quality mindset",
      subtitle:
        "I combine development and QA experience to deliver stable, user-focused applications with clear technical decisions and measurable outcomes.",
      paragraphs: [
        "I have practical experience in software development, maintenance, and testing across web applications and academic applied projects. My work includes feature development, bug fixing, requirement refinement, and performance monitoring.",
        "I am motivated by structured teams that value continuous learning, ownership, and delivery of business value through clean and scalable solutions.",
      ],
      sideTitle: "How I work",
      sideItems: [
        "I translate product requirements into clear technical tasks and implementation plans.",
        "I work closely with product, QA, and development teams to keep delivery aligned.",
        "I prioritize code quality, stability, and maintainability in day-to-day decisions.",
        "I adapt quickly to new domains, tools, and team workflows.",
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Applied projects",
      subtitle:
        "Projects focused on solving real user and business problems with modern technologies.",
      repoCta: "View Repository",
      openCta: "Open project",
      backCta: "Back to projects",
      detailTitle: "Project overview",
      videoLabel: "Project demo video",
      videoUnavailable: "Demo video unavailable. Showing project cover.",
      carouselPreviousAria: "Show previous project image",
      carouselNextAria: "Show next project image",
      carouselGoToAria: "Show project image",
      notFoundTitle: "Project not found",
      notFoundSubtitle: "The selected project is unavailable. Go back to the projects list.",
      detailLabels: {
        context: "Context",
        execution: "Execution",
        outcome: "Outcome",
      },
      items: [
        {
          slug: "gym-assist-bot",
          title: "Gym Assist Bot (Telegram + AI)",
          description:
            "Telegram assistant that logs workouts, reps, and weights, then returns performance feedback per session and weekly progress analysis.",
          period: "2026",
          kind: "Telegram Fitness Assistant",
          cover: "/projects/gym-assist-bot.svg",
          mediaLayout: "mobile",
          demoVideo: {
            src: "/projects/gym-assist-demo-video.mp4",
          },
          highlights: [
            "Stores workout templates and exercise order through Telegram commands.",
            "Registers weights and repetitions for each exercise and keeps progression history in PostgreSQL.",
            "Runs AI-assisted performance reviews at the end of each workout and each training week.",
          ],
          details: {
            context:
              "I built this project to solve a personal issue: tracking training progress quickly without switching between multiple apps and spreadsheets.",
            execution:
              "The bot was developed with Node.js and TypeScript, integrated with Telegram Bot API, backed by PostgreSQL, deployed on Railway, and connected to ChatGPT for analytics.",
            outcome:
              "The workflow became faster and more consistent, with clearer visibility of progression trends. The bot is available on Telegram as Gym Assist Bot (@GymAiMafissioniBot).",
          },
          tags: ["Node.js", "TypeScript", "Telegram Bot API", "PostgreSQL", "Railway", "ChatGPT API"],
          githubUrl: "https://github.com/FeMafissioni/gym-ai-assistant",
        },
        {
          slug: "market-price-platform",
          title: "Market Price Comparison and Purchasing Platform (Final Project)",
          description:
            "Web and mobile product for price comparison, shopping planning, pantry tracking, and order delivery.",
          period: "2024 - 2025",
          kind: "Web + Mobile Platform",
          cover: "/projects/market-platform.svg",
          gallery: marketPlatformGallery.en,
          highlights: [
            "Price comparison and smart list creation to improve purchase decisions.",
            "B2C and B2B flows backed by a single service architecture.",
            "Admin monitoring for stock, orders, and sales behavior.",
          ],
          details: {
            context:
              "The project started from a common pain point: users wasting time and money when comparing market prices manually. The goal was to centralize planning and purchasing in one experience.",
            execution:
              "I worked on both product and technical layers, connecting web and mobile interfaces to backend services for pricing, list management, pantry controls, and checkout flows.",
            outcome:
              "The result was a practical platform with B2C and B2B support, plus an administrative view that improved stock visibility and order tracking.",
          },
          tags: ["React", "React Native", "NestJS", "PostgreSQL", "AWS", "Stripe"],
          githubUrl:
            "https://github.com/search?q=user%3AFeMafissioni+market+price+comparison&type=repositories",
        },
        {
          slug: "sales-monitoring-dashboard",
          title: "Sales Monitoring and Business Management Dashboard",
          description:
            "Business dashboard for sales monitoring, KPI tracking, and operational decision support.",
          period: "2023",
          kind: "BI Analytics Dashboard",
          cover: "/projects/sales-bi.svg",
          gallery: salesDashboardGallery.en,
          highlights: [
            "Consolidated key revenue and performance indicators in a single view.",
            "Built drill-down views by period, product, and channel.",
            "Reduced manual reporting effort with automated visual summaries.",
          ],
          details: {
            context:
              "The objective was to replace fragmented reports with a centralized decision dashboard for commercial and management teams.",
            execution:
              "I modeled KPI views and navigation paths to make revenue trends, performance gaps, and operational signals easy to inspect.",
            outcome:
              "The dashboard improved reporting speed and gave stakeholders clearer visibility into sales performance and priority actions.",
          },
          tags: ["Power BI", "Business Intelligence", "KPI Tracking", "Data Visualization"],
          githubUrl:
            "https://github.com/search?q=user%3AFeMafissioni+power+bi+dashboard&type=repositories",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience",
      subtitle: "Professional timeline and formal education.",
      professionalTitle: "Professional experience",
      professionalItems: [
        {
          role: "Junior Developer",
          company: "Becomex Tecnologia",
          period: "Jun 2025 - Dec 2025 (~6 months)",
          summary:
            "Delivered product enhancements end-to-end, translating business needs into clear technical and functional requirements. Improved reliability through bug fixing and stability work, tracked product health and performance indicators, and collaborated with cross-functional teams to ship scalable changes with business impact.",
        },
        {
          role: "Software Development Intern",
          company: "Becomex Tecnologia",
          period: "Apr 2024 - May 2025 (~1.1 years)",
          summary:
            "Built and expanded web application features with React and C#, while supporting corrective and evolutionary maintenance focused on performance and quality. Helped investigate and resolve bugs throughout the delivery cycle and contributed to technical and functional requirement refinement with multidisciplinary teams.",
        },
      ],
      educationTitle: "Education & learning",
      educationDegree: {
        title: "Bachelor in Software Engineering",
        institution: "PUC Campinas",
        period: "2022 - 2025",
        summary:
          "Developed applied projects in web, mobile, data analysis, and machine learning.",
      },
      coursesTitle: "Courses",
      courseItems: [
        {
          title: "Docker and Kubernetes",
          institution: "Udemy",
          period: "2025",
        },
        {
          title: "Microsoft Power BI Professional Training",
          institution: "Udemy",
          period: "2023",
        },
        {
          title: "Azure Pipelines - CI/CD, Docker and Kubernetes in Azure DevOps",
          institution: "Azure DevOps",
          period: "Current",
        },
      ]
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical skills",
      subtitle:
        "Core technologies organized by specialization area.",
      groups: [
        {
          title: "Backend",
          items: [
            { label: ".NET", icon: "dotnet" },
            { label: "C#", icon: "csharp" },
            { label: "NestJS", icon: "nestjs" },
            { label: "NodeJs", icon: "nodejs" },
          ],
        },
        {
          title: "Frontend",
          items: [
            { label: "TypeScript", icon: "typescript" },
            { label: "TailwindCSS", icon: "tailwindcss" },
            { label: "ReactJs", icon: "reactjs" },
            { label: "NextJs", icon: "nextjs" },
          ],
        },
        {
          title: "Infra & DevOps",
          items: [
            { label: "Azure", icon: "azure" },
            { label: "AWS", icon: "aws" },
            { label: "Docker", icon: "docker" },
            { label: "Pipeline/YAML", icon: "pipelineYaml" },
            { label: "Postgres", icon: "postgres" },
            { label: "Oracle DB", icon: "oracleDb" },
          ],
        },
        {
          title: "AI",
          items: [
            { label: "Claude Code", icon: "claudeCode" },
            { label: "Codex", icon: "codex" },
            { label: "Langchain", icon: "langchain" },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's connect",
      subtitle:
        "Open to software engineering opportunities, collaboration, and technical discussions.",
      intro:
        "If your team is looking for a Software Engineer with practical full-stack and QA experience, I would be happy to discuss how I can contribute.",
    },
    footer: "Built with React, TailwindCSS, and reusable UI components.",
  },
  pt: {
    language: {
      switchAria: "Alternar idioma entre inglês e português",
      menuAria: "Alternar navegação",
      navAria: "Navegação principal",
    },
    skipToContent: "Ir para o conteúdo",
    nav: [
      { label: "Sobre Mim", href: "#about" },
      { label: "Experiência", href: "#experience" },
      { label: "Projetos", href: "#projects" },
      { label: "Habilidades", href: "#skills" },
      { label: "Contato", href: "#contact" },
    ],
    hero: {
      eyebrow: "Portfólio de Software Engineer",
      title: "Olá, eu sou o Felipe!",
      description:
        "Recém-graduado Software Engineer com experiência prática em desenvolvimento full-stack, QA e entrega de produto. Aberto a oportunidades em engenharia de software.",
      primaryCta: "Ver Projetos",
      secondaryCta: "Entrar em Contato",
      profileImageAlt: "Imagem de perfil temporária de Felipe Mafissioni",
      profileRole: "Junior Full-Stack Developer Engineer",
      profileLanguages: ["🇧🇷 🇵🇹 Português: Nativo", "🇬🇧 🇺🇸 Inglês: Avançado"],
      linkedinCta: "LinkedIn",
      githubCta: "GitHub",
      resumeEuCta: "Baixar CV (EU)",
      resumeBrCta: "Baixar CV (BR)",
    },
    about: {
      eyebrow: "Sobre Mim",
      title: "Software Engineer com mentalidade de produto e qualidade",
      subtitle:
        "Combino experiência em desenvolvimento e QA para entregar aplicações estáveis, focadas no usuário e com decisões técnicas claras.",
      paragraphs: [
        "Tenho experiência prática em desenvolvimento, manutenção e testes de software em aplicações web e projetos acadêmicos aplicados. Minha atuação inclui implementação de features, correção de bugs, refinamento de requisitos e monitoramento de performance.",
        "Sou motivado por times estruturados que valorizam aprendizado contínuo, protagonismo e entrega de valor para o negócio com soluções limpas e escaláveis.",
      ],
      sideTitle: "Como eu trabalho",
      sideItems: [
        "Converto requisitos de produto em tarefas técnicas claras e objetivas.",
        "Atuo próximo de produto, QA e desenvolvimento para manter as entregas alinhadas.",
        "Priorizo qualidade de código, estabilidade e manutenção contínua da aplicação.",
        "Me adapto rápido a novos domínios, ferramentas e rotinas de time.",
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos aplicados",
      subtitle:
        "Projetos focados em resolver problemas reais de usuários e negócio com tecnologias modernas.",
      repoCta: "Ver Repositório",
      openCta: "Abrir projeto",
      backCta: "Voltar para projetos",
      detailTitle: "Visão geral do projeto",
      videoLabel: "Vídeo de demonstração do projeto",
      videoUnavailable: "Vídeo indisponível no momento. Exibindo capa do projeto.",
      carouselPreviousAria: "Mostrar imagem anterior do projeto",
      carouselNextAria: "Mostrar próxima imagem do projeto",
      carouselGoToAria: "Mostrar imagem do projeto",
      notFoundTitle: "Projeto não encontrado",
      notFoundSubtitle:
        "O projeto selecionado não está disponível no momento. Volte para a lista de projetos.",
      detailLabels: {
        context: "Contexto",
        execution: "Execução",
        outcome: "Resultado",
      },
      items: [
        {
          slug: "gym-assist-bot",
          title: "Gym Assist Bot (Telegram + IA)",
          description:
            "Assistente no Telegram para registrar treinos, repetições e cargas, com devolutivas de desempenho por sessão e análise semanal de evolução.",
          period: "2026",
          kind: "Assistente de Treino no Telegram",
          cover: "/projects/gym-assist-bot.svg",
          mediaLayout: "mobile",
          demoVideo: {
            src: "/projects/gym-assist-demo-video.mp4",
          },
          highlights: [
            "Permite salvar estrutura de treinos e ordem de exercícios por comandos no Telegram.",
            "Registra pesos e repetições de cada exercício e mantém histórico de progressão no PostgreSQL.",
            "Entrega avaliações com IA ao final de cada treino e também um resumo semanal de performance.",
          ],
          details: {
            context:
              "Esse projeto nasceu para resolver um problema real do dia a dia: acompanhar evolução na academia com rapidez, sem depender de planilhas manuais.",
            execution:
              "Implementei o fluxo do bot com Node.js e TypeScript, integração com Telegram Bot API, persistência em PostgreSQL, deploy na Railway e camada de análise com ChatGPT.",
            outcome:
              "O acompanhamento de treino ficou mais consistente e orientado por dados, com feedback recorrente de performance. O bot está disponível como Gym Assist Bot (@GymAiMafissioniBot).",
          },
          tags: ["Node.js", "TypeScript", "Telegram Bot API", "PostgreSQL", "Railway", "ChatGPT API"],
          githubUrl: "https://github.com/FeMafissioni/gym-ai-assistant",
        },
        {
          slug: "market-price-platform",
          title: "Plataforma de Comparação de Preços e Compras (TCC)",
          description:
            "Produto web e mobile para comparação de preços, planejamento de compras, controle de despensa e pedidos com entrega.",
          period: "2024 - 2025",
          kind: "Plataforma Web + Mobile",
          cover: "/projects/market-platform.svg",
          gallery: marketPlatformGallery.pt,
          highlights: [
            "Comparação de preços e criação inteligente de listas para melhorar decisões de compra.",
            "Fluxos B2C e B2B suportados por uma arquitetura de serviços unificada.",
            "Visão administrativa de estoque, pedidos e comportamento de vendas.",
          ],
          details: {
            context:
              "O projeto nasceu da dor recorrente de comparar preços em diferentes mercados de forma manual, com baixa previsibilidade de custo e tempo.",
            execution:
              "Atuei na construção de fluxos web e mobile conectados ao backend para gestão de listas, controle de despensa, consulta de preços e jornada de compra.",
            outcome:
              "Foi entregue uma solução prática com operação B2C e B2B, além de visão administrativa para melhor acompanhamento de pedidos e estoque.",
          },
          tags: ["React", "React Native", "NestJS", "PostgreSQL", "AWS", "Stripe"],
          githubUrl:
            "https://github.com/search?q=user%3AFeMafissioni+market+price+comparison&type=repositories",
        },
        {
          slug: "sales-monitoring-dashboard",
          title: "Dashboard de Monitoramento de Vendas e Gestão",
          description:
            "Dashboard de negócio para monitoramento de vendas, acompanhamento de KPIs e apoio operacional à decisão.",
          period: "2023",
          kind: "Dashboard Analítico de BI",
          cover: "/projects/sales-bi.svg",
          gallery: salesDashboardGallery.pt,
          highlights: [
            "Consolidei indicadores-chave de receita e desempenho em uma visualização única.",
            "Criei análises detalhadas por período, produto e canal.",
            "Reduzi esforço manual de reporte com resumos visuais automatizados.",
          ],
          details: {
            context:
              "O cenário inicial tinha relatórios fragmentados, dificultando leitura rápida de desempenho e priorização de ações comerciais.",
            execution:
              "Organizei indicadores principais e trilhas de navegação analítica para leitura por período, canal e produto com foco em clareza operacional.",
            outcome:
              "O dashboard acelerou o acompanhamento de performance e melhorou a capacidade de decisão com base em dados consolidados.",
          },
          tags: ["Power BI", "Business Intelligence", "KPI Tracking", "Data Visualization"],
          githubUrl:
            "https://github.com/search?q=user%3AFeMafissioni+power+bi+dashboard&type=repositories",
        },
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Experiência",
      subtitle: "Linha do tempo profissional e formação acadêmica.",
      professionalTitle: "Experiência profissional",
      professionalItems: [
        {
          role: "Desenvolvedor Júnior",
          company: "Becomex Tecnologia",
          period: "Jun 2025 - Dez 2025 (~6 meses)",
          summary:
            "Entreguei melhorias de produto de ponta a ponta, transformando necessidades de negócio em requisitos técnicos e funcionais claros. Atuei na correção de bugs e no aumento da estabilidade da aplicação, acompanhei indicadores de saúde e performance e colaborei com times multidisciplinares para gerar impacto real no negócio.",
        },
        {
          role: "Estagiário de Desenvolvimento de Software",
          company: "Becomex Tecnologia",
          period: "Abr 2024 - Mai 2025 (~1,1 ano)",
          summary:
            "Implementei e evoluí funcionalidades em aplicações web com React e C#, atuando em manutenções corretivas e evolutivas com foco em desempenho e qualidade. Apoiei a identificação e resolução de bugs ao longo do ciclo de desenvolvimento e participei do refinamento de requisitos técnicos e funcionais em conjunto com equipes multidisciplinares.",
        },
      ],
      educationTitle: "Educação & aprendizado",
      educationDegree: {
        title: "Bacharel em Engenharia de Software",
        institution: "PUC Campinas",
        period: "2022 - 2025",
        summary:
          "Desenvolvimento de projetos aplicados em web, mobile, análise de dados e machine learning.",
      },
      coursesTitle: "Cursos",
      courseItems: [
        {
          title: "Curso de Docker e Kubernetes",
          institution: "Udemy",
          period: "2025",
        },
        {
          title: "Treinamento Profissional em Microsoft Power BI",
          institution: "Udemy",
          period: "2023",
        },
        {
          title: "Azure Pipelines - CI/CD, Docker e Kubernetes no Azure DevOps",
          institution: "Azure DevOps",
          period: "Em andamento",
        },
      ]
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Skills técnicas",
      subtitle:
        "Tecnologias e competências organizadas por área de especialização.",
      groups: [
        {
          title: "Backend",
          items: [
            { label: ".NET", icon: "dotnet" },
            { label: "C#", icon: "csharp" },
            { label: "NestJS", icon: "nestjs" },
            { label: "NodeJs", icon: "nodejs" },
          ],
        },
        {
          title: "Frontend",
          items: [
            { label: "TypeScript", icon: "typescript" },
            { label: "TailwindCSS", icon: "tailwindcss" },
            { label: "ReactJs", icon: "reactjs" },
            { label: "NextJs", icon: "nextjs" },
          ],
        },
        {
          title: "Infra & DevOps",
          items: [
            { label: "Azure", icon: "azure" },
            { label: "AWS", icon: "aws" },
            { label: "Docker", icon: "docker" },
            { label: "Pipeline/YAML", icon: "pipelineYaml" },
            { label: "Postgres", icon: "postgres" },
            { label: "Oracle DB", icon: "oracleDb" },
          ],
        },
        {
          title: "AI",
          items: [
            { label: "Claude Code", icon: "claudeCode" },
            { label: "Codex", icon: "codex" },
            { label: "Langchain", icon: "langchain" },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos nos conectar",
      subtitle:
        "Aberto a oportunidades em engenharia de software, colaboração e discussões técnicas.",
      intro:
        "Se seu time procura um Software Engineer com experiência prática em full-stack e QA, posso contribuir com foco em qualidade e entrega de valor.",
    },
    footer: "Construído com React, TailwindCSS e componentes de UI reutilizáveis.",
  },
};

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem("portfolio-language");
  if (saved === "en" || saved === "pt") {
    return saved;
  }

  return window.navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function getProjectSlugFromHash(hashValue) {
  if (!hashValue) {
    return "";
  }

  const normalizedHash = hashValue.startsWith("#") ? hashValue.slice(1) : hashValue;
  if (!normalizedHash.startsWith("/projects/")) {
    return "";
  }

  return decodeURIComponent(normalizedHash.replace("/projects/", "").split(/[?#]/)[0] || "");
}

function getInitialProjectSlug() {
  if (typeof window === "undefined") {
    return "";
  }

  return getProjectSlugFromHash(window.location.hash);
}

function ProjectCarousel({ items, fallbackSrc, fallbackAlt, labels }) {
  const [availableItems, setAvailableItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    if (!items?.length || typeof window === "undefined") {
      setAvailableItems([]);
      setActiveIndex(0);
      return undefined;
    }

    Promise.all(
      items.map(
        (item) =>
          new Promise((resolve) => {
            const image = new window.Image();
            image.onload = () => resolve(item);
            image.onerror = () => resolve(null);
            image.src = item.src;
          })
      )
    ).then((results) => {
      if (isCancelled) {
        return;
      }

      setAvailableItems(results.filter(Boolean));
      setActiveIndex(0);
    });

    return () => {
      isCancelled = true;
    };
  }, [items]);

  const carouselItems = availableItems.length
    ? availableItems
    : fallbackSrc
      ? [{ src: fallbackSrc, alt: fallbackAlt }]
      : [];

  const currentItem = carouselItems[activeIndex] ?? carouselItems[0];
  const hasMultipleItems = carouselItems.length > 1;

  if (!currentItem) {
    return null;
  }

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? carouselItems.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === carouselItems.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={currentItem.src}
          alt={currentItem.alt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
        />

        {hasMultipleItems && (
          <>
            <button
              type="button"
              aria-label={labels.previous}
              onClick={handlePrevious}
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-[#2A2F38] bg-[#0F1115]/90 text-[#E5E7EB] transition-colors hover:border-[#34D399] hover:text-[#34D399] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label={labels.next}
              onClick={handleNext}
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-[#2A2F38] bg-[#0F1115]/90 text-[#E5E7EB] transition-colors hover:border-[#34D399] hover:text-[#34D399] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasMultipleItems && (
        <div className="flex items-center justify-center gap-2">
          {carouselItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.src}
                type="button"
                aria-label={`${labels.goTo} ${index + 1}`}
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] ${
                  isActive ? "w-7 bg-[#34D399]" : "w-2.5 bg-[#2A2F38] hover:bg-[#4B5563]"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

const skillIconMap = {
  dotnet: SiDotnet,
  csharp: TbBrandCSharp,
  nestjs: SiNestjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  reactjs: SiReact,
  nextjs: SiNextdotjs,
  azure: TbBrandAzure,
  aws: TbBrandAws,
  docker: SiDocker,
  pipelineYaml: SiYaml,
  postgres: SiPostgresql,
  oracleDb: GrOracle,
  claudeCode: SiClaude,
  codex: SiOpenai,
  langchain: SiLangchain,
};

const skillIconColorMap = {
  dotnet: "#512BD4",
  csharp: "#239120",
  nestjs: "#E0234E",
  nodejs: "#339933",
  typescript: "#3178C6",
  tailwindcss: "#06B6D4",
  reactjs: "#61DAFB",
  nextjs: "#E5E7EB",
  azure: "#0078D4",
  aws: "#FF9900",
  docker: "#2496ED",
  pipelineYaml: "#CB171E",
  postgres: "#4169E1",
  oracleDb: "#F80000",
  claudeCode: "#D97757",
  codex: "#10A37F",
  langchain: "#1C3C3C",
};

const technologyIconMap = {
  "node.js": SiNodedotjs,
  typescript: SiTypescript,
  "telegram bot api": SiTelegram,
  postgresql: SiPostgresql,
  railway: SiRailway,
  "chatgpt api": SiOpenai,
  react: SiReact,
  "react native": SiReact,
  nestjs: SiNestjs,
  aws: TbBrandAws,
  stripe: SiStripe,
  "power bi": ChartBar,
  "business intelligence": ChartLine,
  "kpi tracking": Activity,
  "data visualization": ChartPie,
};

const technologyIconColorMap = {
  "node.js": "#339933",
  typescript: "#3178C6",
  "telegram bot api": "#26A5E4",
  postgresql: "#4169E1",
  railway: "#E5E7EB",
  "chatgpt api": "#10A37F",
  react: "#61DAFB",
  "react native": "#61DAFB",
  nestjs: "#E0234E",
  aws: "#FF9900",
  stripe: "#635BFF",
  "power bi": "#F2C811",
  "business intelligence": "#34D399",
  "kpi tracking": "#22D3EE",
  "data visualization": "#60A5FA",
};

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projectSlug, setProjectSlug] = useState(getInitialProjectSlug);
  const [videoLoadError, setVideoLoadError] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const t = translations[language];
  const isProjectDetailView = Boolean(projectSlug);
  const selectedProject = useMemo(
    () => t.projects.items.find((project) => project.slug === projectSlug),
    [projectSlug, t.projects.items]
  );
  const isMobileProjectMedia = selectedProject?.mediaLayout === "mobile";
  const projectGallery = selectedProject?.gallery ?? [];
  const skipTarget = isProjectDetailView ? "#project-detail" : "#about";

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const syncRoute = () => {
      setProjectSlug(getProjectSlugFromHash(window.location.hash));
    };

    syncRoute();
    window.addEventListener("hashchange", syncRoute);

    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    setVideoLoadError(false);
  }, [projectSlug]);

  useEffect(() => {
    if (isProjectDetailView) {
      setIsMenuOpen(false);
      setActiveSection("projects");
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isProjectDetailView]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "pt" : "en"));
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E5E7EB]">
      <a
        href={skipTarget}
        className="sr-only z-50 rounded-md border border-[#2A2F38] bg-[#171B22] px-3 py-2 font-semibold text-[#E5E7EB] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
      >
        {t.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-[#2A2F38] bg-[#0F1115]/95">
        <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between py-3">
          <a href="#home" className="inline-flex items-center">
            <img
              src="/logo-fms-header.png"
              alt="Felipe Mafissioni logo"
              className="h-10 w-auto sm:h-12"
              loading="eager"
            />
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.language.switchAria}
              className={`inline-flex h-10 items-center gap-2 rounded-md border border-[#2A2F38] bg-[#171B22] px-3 text-sm font-medium text-[#E5E7EB] transition-colors hover:border-[#34D399] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] ${
                !isProjectDetailView ? "md:hidden" : ""
              }`}
            >
              <Languages size={14} aria-hidden="true" className="text-[#A1A1AA]" />
              <span className={language === "en" ? "text-[#E5E7EB]" : "text-[#A1A1AA]"}>EN</span>
              <span className="text-[#4B5563]">/</span>
              <span className={language === "pt" ? "text-[#E5E7EB]" : "text-[#A1A1AA]"}>PT</span>
            </button>

            {!isProjectDetailView && (
              <Button
                variant="ghost"
                className="size-10 rounded-md p-0 md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="main-nav"
                aria-label={t.language.menuAria}
                onClick={() => setIsMenuOpen((previous) => !previous)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            )}
          </div>

          {!isProjectDetailView ? (
            <nav
              id="main-nav"
              className={`${isMenuOpen ? "flex" : "hidden"} absolute right-4 top-16 w-[min(260px,92vw)] flex-col gap-1 rounded-lg border border-[#2A2F38] bg-[#171B22] p-2 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}
              aria-label={t.language.navAria}
            >
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={t.language.switchAria}
                className="hidden h-10 items-center gap-2 rounded-md border border-[#2A2F38] bg-[#171B22] px-3 text-sm font-medium text-[#E5E7EB] transition-colors hover:border-[#34D399] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] md:inline-flex"
              >
                <Languages size={14} aria-hidden="true" className="text-[#A1A1AA]" />
                <span className={language === "en" ? "text-[#E5E7EB]" : "text-[#A1A1AA]"}>EN</span>
                <span className="text-[#4B5563]">/</span>
                <span className={language === "pt" ? "text-[#E5E7EB]" : "text-[#A1A1AA]"}>PT</span>
              </button>

              {t.nav.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? "bg-[#171B22] text-[#34D399]" : "text-[#E5E7EB] hover:bg-[#171B22]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          ) : (
            <Button as="a" href="#projects" variant="secondary" size="sm" className="hidden sm:inline-flex">
              <ArrowLeft size={14} aria-hidden="true" />
              {t.projects.backCta}
            </Button>
          )}
        </div>
      </header>

      <main id="home">
        {isProjectDetailView ? (
          <section id="project-detail" className="relative overflow-hidden border-b border-[#2A2F38] bg-[#11151B] py-14">
            <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#10B981]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-[#34D399]/10 blur-3xl" />

            <div
              className={`mx-auto w-[min(1120px,92%)] space-y-6 ${
                isMobileProjectMedia ? "lg:max-w-[980px]" : ""
              }`}
            >
              <Button as="a" href="#projects" variant="secondary" size="sm" className="w-fit">
                <ArrowLeft size={14} aria-hidden="true" />
                {t.projects.backCta}
              </Button>

              {selectedProject ? (
                <>
                  {selectedProject.demoVideo?.src && (
                    <p className="text-xs font-semibold tracking-[0.12em] text-[#34D399]">
                      {videoLoadError ? t.projects.videoUnavailable : t.projects.videoLabel}
                    </p>
                  )}

                  {isMobileProjectMedia ? (
                    <div className="space-y-7">
                      <div className="grid gap-3 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
                        <div className="mx-auto w-[min(280px,78vw)] rounded-[2rem] border border-[#2A2F38] bg-[#0C1017] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] lg:mx-0 lg:w-[290px]">
                          <div className="mb-2 flex justify-center">
                            <span className="h-1.5 w-20 rounded-full bg-[#2A2F38]" />
                          </div>

                          <div className="overflow-hidden rounded-[1.65rem] border border-[#2A2F38]">
                            {selectedProject.demoVideo?.src && !videoLoadError ? (
                              <video
                                controls
                                preload="auto"
                                playsInline
                                autoPlay
                                muted
                                loop
                                className="h-[540px] w-full bg-black object-contain"
                                onError={() => setVideoLoadError(true)}
                              >
                                <source
                                  src={selectedProject.demoVideo.src}
                                  type={selectedProject.demoVideo.src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
                                />
                              </video>
                            ) : (
                              <img
                                src={selectedProject.cover}
                                alt={selectedProject.title}
                                className="h-[540px] w-full bg-black object-contain"
                                loading="lazy"
                              />
                            )}
                          </div>
                        </div>

                        <aside className="w-full">
                          <Card className="space-y-6 rounded-2xl p-7">
                            <CardTitle className="text-2xl">{t.projects.detailTitle}</CardTitle>

                            <ul className="list-disc space-y-2.5 pl-5 text-base leading-relaxed text-[#A1A1AA]">
                              {selectedProject.highlights.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tags.map((tag) => {
                                const normalizedTag = tag.toLowerCase();
                                const Icon = technologyIconMap[normalizedTag] ?? Code;
                                const iconColor = technologyIconColorMap[normalizedTag] ?? "#34D399";

                                return (
                                  <Badge key={tag} className="gap-1.5">
                                    <Icon size={12} color={iconColor} aria-hidden="true" />
                                    {tag}
                                  </Badge>
                                );
                              })}
                            </div>

                            {selectedProject.githubUrl && (
                              <Button
                                as="a"
                                href={selectedProject.githubUrl}
                                variant="secondary"
                                size="sm"
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${t.projects.repoCta}: ${selectedProject.title}`}
                                className="w-full"
                              >
                                <Github size={16} aria-hidden="true" />
                                {t.projects.repoCta}
                              </Button>
                            )}
                          </Card>
                        </aside>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#6B7280]">
                          {selectedProject.kind} • {selectedProject.period}
                        </p>
                        <h1 className="max-w-[26ch] text-3xl leading-tight font-semibold text-[#E5E7EB] sm:text-4xl">
                          {selectedProject.title}
                        </h1>
                        <p className="max-w-[78ch] text-lg leading-relaxed text-[#A1A1AA]">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <Card className="space-y-2">
                          <p className="text-xs font-semibold tracking-[0.14em] text-[#34D399]">
                            {t.projects.detailLabels.context}
                          </p>
                          <CardDescription className="text-sm leading-relaxed">
                            {selectedProject.details?.context}
                          </CardDescription>
                        </Card>
                        <Card className="space-y-2">
                          <p className="text-xs font-semibold tracking-[0.14em] text-[#34D399]">
                            {t.projects.detailLabels.execution}
                          </p>
                          <CardDescription className="text-sm leading-relaxed">
                            {selectedProject.details?.execution}
                          </CardDescription>
                        </Card>
                        <Card className="space-y-2">
                          <p className="text-xs font-semibold tracking-[0.14em] text-[#34D399]">
                            {t.projects.detailLabels.outcome}
                          </p>
                          <CardDescription className="text-sm leading-relaxed">
                            {selectedProject.details?.outcome}
                          </CardDescription>
                        </Card>
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
                      <article className="space-y-6">
                        {selectedProject.demoVideo?.src && !videoLoadError ? (
                          <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
                            <video
                              controls
                              preload="auto"
                              playsInline
                              className="h-72 w-full object-cover sm:h-80"
                              onError={() => setVideoLoadError(true)}
                            >
                              <source
                                src={selectedProject.demoVideo.src}
                                type={selectedProject.demoVideo.src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
                              />
                            </video>
                          </div>
                        ) : (
                          <ProjectCarousel
                            items={projectGallery}
                            fallbackSrc={selectedProject.cover}
                            fallbackAlt={selectedProject.title}
                            labels={{
                              previous: t.projects.carouselPreviousAria,
                              next: t.projects.carouselNextAria,
                              goTo: t.projects.carouselGoToAria,
                            }}
                          />
                        )}

                        <div className="space-y-3">
                          <p className="text-xs font-semibold tracking-[0.2em] text-[#6B7280]">
                            {selectedProject.kind} • {selectedProject.period}
                          </p>
                          <h1 className="text-3xl leading-tight font-semibold text-[#E5E7EB] sm:text-4xl">
                            {selectedProject.title}
                          </h1>
                          <p className="max-w-[70ch] leading-relaxed text-[#A1A1AA]">{selectedProject.description}</p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                          <Card className="space-y-2">
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#34D399]">
                              {t.projects.detailLabels.context}
                            </p>
                            <CardDescription className="text-sm leading-relaxed">
                              {selectedProject.details?.context}
                            </CardDescription>
                          </Card>
                          <Card className="space-y-2">
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#34D399]">
                              {t.projects.detailLabels.execution}
                            </p>
                            <CardDescription className="text-sm leading-relaxed">
                              {selectedProject.details?.execution}
                            </CardDescription>
                          </Card>
                          <Card className="space-y-2">
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#34D399]">
                              {t.projects.detailLabels.outcome}
                            </p>
                            <CardDescription className="text-sm leading-relaxed">
                              {selectedProject.details?.outcome}
                            </CardDescription>
                          </Card>
                        </div>
                      </article>

                      <aside className="space-y-4">
                        <Card className="space-y-6 rounded-2xl p-7">
                          <CardTitle className="text-2xl">{t.projects.detailTitle}</CardTitle>

                          <ul className="list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-[#A1A1AA]">
                            {selectedProject.highlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => {
                              const normalizedTag = tag.toLowerCase();
                              const Icon = technologyIconMap[normalizedTag] ?? Code;
                              const iconColor = technologyIconColorMap[normalizedTag] ?? "#34D399";

                              return (
                                <Badge key={tag} className="gap-1.5">
                                  <Icon size={12} color={iconColor} aria-hidden="true" />
                                  {tag}
                                </Badge>
                              );
                            })}
                          </div>
                        </Card>
                      </aside>
                    </div>
                  )}
                </>
              ) : (
                <Card className="space-y-3">
                  <CardTitle>{t.projects.notFoundTitle}</CardTitle>
                  <CardDescription>{t.projects.notFoundSubtitle}</CardDescription>
                  <Button as="a" href="#projects" variant="secondary" size="sm" className="w-fit">
                    <ArrowLeft size={14} aria-hidden="true" />
                    {t.projects.backCta}
                  </Button>
                </Card>
              )}
            </div>
          </section>
        ) : (
          <>
            <section className="border-b border-[#2A2F38]">
              <div className="mx-auto grid w-[min(1120px,92%)] gap-8 py-14 md:grid-cols-[1.25fr_0.75fr]">
                <div className="space-y-5">
                  <h1 className="max-w-[20ch] text-3xl leading-tight font-semibold text-[#E5E7EB] sm:text-4xl">
                    {t.hero.title}
                  </h1>
                  <p className="max-w-[58ch] text-base leading-relaxed text-[#A1A1AA]">{t.hero.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button as="a" href="#projects" size="lg">
                      {t.hero.primaryCta}
                    </Button>
                    <Button as="a" href="#contact" variant="secondary" size="lg">
                      {t.hero.secondaryCta}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <img
                    src="/profile-photo.jpg"
                    alt={t.hero.profileImageAlt}
                    className="mx-auto h-56 w-56 rounded-full border border-[#2A2F38] object-cover object-[center_22%]"
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-[#E5E7EB]">{t.hero.profileRole}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.hero.profileLanguages.map((language) => (
                        <span
                          key={language}
                          className="inline-flex items-center rounded-full border border-[#34D399]/50 bg-[#11151B] px-3 py-1 text-xs font-semibold text-[#D1FAE5]"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <Button
                      as="a"
                      href="https://www.linkedin.com/in/felipemafissioni"
                      variant="secondary"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full justify-start"
                    >
                      <Linkedin size={16} aria-hidden="true" />
                      {t.hero.linkedinCta}
                    </Button>
                    <Button
                      as="a"
                      href="https://github.com/FeMafissioni"
                      variant="secondary"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full justify-start"
                    >
                      <Github size={16} aria-hidden="true" />
                      {t.hero.githubCta}
                    </Button>
                  </div>

                  <div className="grid gap-1 sm:grid-cols-2">
                    <Button
                      as="a"
                      href={resumeFiles.eu.href}
                      download={resumeFiles.eu.download}
                      className="w-full justify-start"
                    >
                      <Download size={16} aria-hidden="true" />
                      {t.hero.resumeEuCta}
                    </Button>
                    <Button
                      as="a"
                      href={resumeFiles.pt.href}
                      download={resumeFiles.pt.download}
                      className="w-full justify-start"
                    >
                      <Download size={16} aria-hidden="true" />
                      {t.hero.resumeBrCta}
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="mx-auto w-[min(1120px,92%)] py-14">
              <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardDescription className="space-y-4 leading-relaxed">
                    {t.about.paragraphs.map((paragraph) => (
                      <span key={paragraph} className="block">
                        {paragraph}
                      </span>
                    ))}
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>{t.about.sideTitle}</CardTitle>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[#A1A1AA]">
                    {t.about.sideItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </section>

            <section id="experience" className="mx-auto w-[min(1120px,92%)] py-14">
              <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} />

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#E5E7EB]">{t.experience.professionalTitle}</h3>
                  <ol className="space-y-4 border-l border-[#2A2F38] pl-4">
                    {t.experience.professionalItems.map((experience) => (
                      <li key={`${experience.company}-${experience.period}`} className="relative">
                        <span className="absolute -left-[1.33rem] top-0 h-2.5 w-2.5 rounded-full bg-[#34D399]" />
                        <Card className="space-y-2">
                          <CardTitle>
                            {experience.role} | {experience.company}
                          </CardTitle>
                          <p className="text-sm font-semibold text-[#34D399]">{experience.period}</p>
                          <CardDescription>{experience.summary}</CardDescription>
                        </Card>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#E5E7EB]">{t.experience.educationTitle}</h3>
                  <div className="space-y-4">
                    <Card className="space-y-2">
                      <CardTitle>{t.experience.educationDegree.title}</CardTitle>
                      <p className="text-sm font-medium text-[#D4D4D8]">{t.experience.educationDegree.institution}</p>
                      <p className="text-sm font-semibold text-[#34D399]">{t.experience.educationDegree.period}</p>
                      <CardDescription>{t.experience.educationDegree.summary}</CardDescription>
                    </Card>

                    <div className="rounded-lg border border-[#2A2F38] bg-[#171B22] px-4 py-3">
                      <p className="text-sm font-semibold text-[#E5E7EB]">{t.experience.coursesTitle}</p>
                      <ul className="mt-3 space-y-2">
                        {t.experience.courseItems.map((course) => (
                          <li
                            key={`${course.title}-${course.period}`}
                            className="flex items-start justify-between gap-3 border-b border-[#2A2F38] pb-2 last:border-0 last:pb-0"
                          >
                            <div>
                              <p className="text-sm font-medium text-[#D4D4D8]">{course.title}</p>
                              <p className="text-xs text-[#A1A1AA]">{course.institution}</p>
                            </div>
                            <p className="text-xs font-semibold text-[#34D399]">{course.period}</p>
                          </li>
                        ))}
                      </ul>

                      {t.experience.ongoingCourseItems?.length > 0 && (
                        <div className="mt-4 border-t border-[#2A2F38] pt-4">
                          <p className="text-sm font-semibold text-[#E5E7EB]">{t.experience.ongoingCoursesTitle}</p>
                          <ul className="mt-3 space-y-2">
                            {t.experience.ongoingCourseItems.map((course) => (
                              <li
                                key={`${course.title}-${course.period}`}
                                className="flex items-start justify-between gap-3 border-b border-[#2A2F38] pb-2 last:border-0 last:pb-0"
                              >
                                <div>
                                  <p className="text-sm font-medium text-[#D4D4D8]">{course.title}</p>
                                  <p className="text-xs text-[#A1A1AA]">{course.institution}</p>
                                </div>
                                <p className="text-xs font-semibold text-[#34D399]">{course.period}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="relative overflow-hidden border-y border-[#2A2F38] bg-[#13171D] py-16">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#34D399]/10 to-transparent" />
              <div className="mx-auto w-[min(1120px,92%)]">
                <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />
                <div className="mt-7 space-y-3">
                  {t.projects.items.map((project, index) => (
                    <a
                      key={project.slug}
                      href={`#/projects/${project.slug}`}
                      className="group relative block overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]/90 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#34D399] hover:shadow-[0_14px_38px_rgba(16,185,129,0.18)]"
                    >
                      <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#34D399] to-[#10B981] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
                        <p className="font-mono text-xs tracking-[0.3em] text-[#6B7280]">
                          {String(index + 1).padStart(2)}
                        </p>

                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                            <span>{project.kind}</span>
                            <span aria-hidden="true">•</span>
                            <span>{project.period}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-[#E5E7EB] transition-colors group-hover:text-[#34D399]">
                            {project.title}
                          </h3>
                          <p className="max-w-[70ch] text-sm leading-relaxed text-[#A1A1AA]">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tags.map((tag) => {
                              const normalizedTag = tag.toLowerCase();
                              const Icon = technologyIconMap[normalizedTag] ?? Code;
                              const iconColor = technologyIconColorMap[normalizedTag] ?? "#34D399";

                              return (
                                <Badge key={tag} className="gap-1.5">
                                  <Icon size={12} color={iconColor} aria-hidden="true" />
                                  {tag}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 md:justify-end">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#34D399]">
                            {t.projects.openCta}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section id="skills" className="border-y border-[#2A2F38] bg-[#13171D] py-14">
              <div className="mx-auto w-[min(1120px,92%)]">
                <SectionHeader title={t.skills.title} subtitle={t.skills.subtitle} />

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {t.skills.groups.map((group) => (
                    <Card key={group.title} className="space-y-4">
                      <CardTitle>{group.title}</CardTitle>
                      <ul className="space-y-2.5 text-[#A1A1AA]">
                        {group.items.map((skill) => {
                          const Icon = skillIconMap[skill.icon] ?? Code;
                          const iconColor = skillIconColorMap[skill.icon] ?? "#34D399";

                          return (
                            <li key={skill.label} className="flex items-start gap-2.5">
                              <span className="mt-0.5 rounded-md border border-[#2A2F38] bg-[#11151B] p-1.5">
                                <Icon size={14} color={iconColor} aria-hidden="true" />
                              </span>
                              <span className="text-sm leading-relaxed">{skill.label}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="mx-auto w-[min(1120px,92%)] py-14">
              <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

              <div className="max-w-[720px]">
                <Card className="space-y-4">
                  <CardDescription>{t.contact.intro}</CardDescription>

                  <div className="space-y-3 text-[#A1A1AA]">
                    <a className="flex items-center gap-2 hover:text-[#34D399]" href="mailto:fe.mafissioni@gmail.com">
                      <Mail size={18} aria-hidden="true" /> fe.mafissioni@gmail.com
                    </a>
                    <a
                      className="flex items-center gap-2 hover:text-[#34D399]"
                      href="https://www.linkedin.com/in/felipemafissioni"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin size={18} aria-hidden="true" /> linkedin.com/in/felipemafissioni
                    </a>
                    <a
                      className="flex items-center gap-2 hover:text-[#34D399]"
                      href="https://github.com/FeMafissioni"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} aria-hidden="true" /> github.com/FeMafissioni
                    </a>
                  </div>
                </Card>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-[#2A2F38] py-6">
        <p className="mx-auto w-[min(1120px,92%)] text-center text-sm text-[#A1A1AA]">
          © {currentYear} Felipe Mafissioni Silva. {t.footer}
        </p>
      </footer>
    </div>
  );
}

export default App;
