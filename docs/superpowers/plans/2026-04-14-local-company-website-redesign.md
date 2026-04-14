# Local Company Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved local company website redesign as the third portfolio project, with a live-site CTA and a draggable before/after comparison for the Homepage and Services pages.

**Architecture:** Keep the existing bilingual project data inside `src/App.jsx`, extend it with a generic website CTA field (`websiteUrl`) and comparison media data (`comparisonSections`), and add one focused `ProjectComparison` component for the tabbed before/after slider. By request, this plan introduces no automated test files; verification is limited to production build success and manual UI checks.

**Tech Stack:** React 19, Vite 7, TailwindCSS 4, Lucide React

---

## File Map

- Modify: `src/App.jsx`
- Create: `src/components/project-comparison.jsx`
- Add: `public/projects/stampnow-home-old.png`
- Add: `public/projects/stampnow-home-new.png`
- Add: `public/projects/stampnow-services-old.png`
- Add: `public/projects/stampnow-services-new.png`

## Data Shape To Implement

Use this English project shape for the new redesign entry:

```js
{
  slug: "local-company-website-redesign",
  title: "Local Company Website Redesign",
  description:
    "Redesign of a local company website to modernize branding, update outdated information, improve responsiveness, and strengthen customer contact flows.",
  period: "2026",
  kind: "Business Website Redesign",
  cover: "/projects/stampnow-home-new.png",
  highlights: [
    "Modernized the visual presentation and content structure.",
    "Improved desktop and mobile responsiveness.",
    "Streamlined contact through budget form email delivery and WhatsApp integration.",
  ],
  details: {
    context:
      "The previous site had outdated visuals and information, weak mobile usability, confusing navigation, and an ineffective contact path.",
    execution:
      "The website was rebuilt with React, TypeScript, Vite, and Tailwind, with updated structure, improved responsiveness, and direct contact flows for budget requests and WhatsApp.",
    outcome:
      "The company now has a clearer and more modern website with better service presentation and a stronger lead/contact flow.",
  },
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design"],
  websiteUrl: "https://www.stampnow.com.br",
  comparisonSections: [
    {
      id: "homepage",
      label: "Homepage",
      oldSrc: "/projects/stampnow-home-old.png",
      oldAlt: "Stamp Now homepage before the redesign",
      newSrc: "/projects/stampnow-home-new.png",
      newAlt: "Stamp Now homepage after the redesign",
    },
    {
      id: "services",
      label: "Services",
      oldSrc: "/projects/stampnow-services-old.png",
      oldAlt: "Stamp Now services page before the redesign",
      newSrc: "/projects/stampnow-services-new.png",
      newAlt: "Stamp Now services page after the redesign",
    },
  ],
}
```

Use the same field names in the Portuguese array, with localized `title`, `description`, `kind`, `highlights`, `details`, and tab labels (`Página inicial`, `Serviços`).

## Task 1: Add The New Project Entry And Generic Website CTA

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add `Globe` to the Lucide import list**

Update the top import block in `src/App.jsx`:

```jsx
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
  Globe,
  Languages,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
```

- [ ] **Step 2: Add website CTA and comparison labels to both translation blocks**

Add these English project labels inside `translations.en.projects`:

```jsx
repoCta: "View Repository",
websiteCta: "Visit website",
openCta: "Open project",
backCta: "Back to projects",
detailTitle: "Project overview",
videoLabel: "Project demo video",
videoUnavailable: "Demo video unavailable. Showing project cover.",
carouselPreviousAria: "Show previous project image",
carouselNextAria: "Show next project image",
carouselGoToAria: "Show project image",
comparisonTablistAria: "Choose project comparison view",
comparisonSliderAria: "Reveal more or less of the old website",
comparisonOldLabel: "Old website",
comparisonNewLabel: "New website",
```

Add these Portuguese project labels inside `translations.pt.projects`:

```jsx
repoCta: "Ver Repositório",
websiteCta: "Ver site",
openCta: "Abrir projeto",
backCta: "Voltar para projetos",
detailTitle: "Visão geral do projeto",
videoLabel: "Vídeo de demonstração do projeto",
videoUnavailable: "Vídeo indisponível no momento. Exibindo capa do projeto.",
carouselPreviousAria: "Mostrar imagem anterior do projeto",
carouselNextAria: "Mostrar próxima imagem do projeto",
carouselGoToAria: "Mostrar imagem do projeto",
comparisonTablistAria: "Escolher visualização da comparação do projeto",
comparisonSliderAria: "Revelar mais ou menos do site antigo",
comparisonOldLabel: "Site antigo",
comparisonNewLabel: "Site novo",
```

- [ ] **Step 3: Insert the new English project as item 3**

Insert this object between `market-price-platform` and `sales-monitoring-dashboard`:

```jsx
{
  slug: "local-company-website-redesign",
  title: "Local Company Website Redesign",
  description:
    "Redesign of a local company website to modernize branding, update outdated information, improve responsiveness, and strengthen customer contact flows.",
  period: "2026",
  kind: "Business Website Redesign",
  cover: "/projects/stampnow-home-new.png",
  highlights: [
    "Modernized the visual presentation and content structure.",
    "Improved desktop and mobile responsiveness.",
    "Streamlined contact through budget form email delivery and WhatsApp integration.",
  ],
  details: {
    context:
      "The previous site had outdated visuals and information, weak mobile usability, confusing navigation, and an ineffective contact path.",
    execution:
      "The website was rebuilt with React, TypeScript, Vite, and Tailwind, with updated structure, improved responsiveness, and direct contact flows for budget requests and WhatsApp.",
    outcome:
      "The company now has a clearer and more modern website with better service presentation and a stronger lead/contact flow.",
  },
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design"],
  websiteUrl: "https://www.stampnow.com.br",
  comparisonSections: [
    {
      id: "homepage",
      label: "Homepage",
      oldSrc: "/projects/stampnow-home-old.png",
      oldAlt: "Stamp Now homepage before the redesign",
      newSrc: "/projects/stampnow-home-new.png",
      newAlt: "Stamp Now homepage after the redesign",
    },
    {
      id: "services",
      label: "Services",
      oldSrc: "/projects/stampnow-services-old.png",
      oldAlt: "Stamp Now services page before the redesign",
      newSrc: "/projects/stampnow-services-new.png",
      newAlt: "Stamp Now services page after the redesign",
    },
  ],
},
```

- [ ] **Step 4: Insert the new Portuguese project as item 3**

Insert this object at the same position in the Portuguese array:

```jsx
{
  slug: "local-company-website-redesign",
  title: "Redesign de Website para Empresa Local",
  description:
    "Redesign de um website empresarial local para modernizar a marca, atualizar informações desatualizadas, melhorar a responsividade e fortalecer os canais de contato com clientes.",
  period: "2026",
  kind: "Redesign de Website Empresarial",
  cover: "/projects/stampnow-home-new.png",
  highlights: [
    "Modernização da apresentação visual e da organização do conteúdo.",
    "Melhoria da experiência responsiva em desktop e mobile.",
    "Simplificação do contato com envio de orçamento por email e integração com WhatsApp.",
  ],
  details: {
    context:
      "O site anterior apresentava visual e informações desatualizadas, baixa usabilidade em dispositivos móveis, navegação confusa e um fluxo de contato pouco eficiente.",
    execution:
      "O website foi reconstruído com React, TypeScript, Vite e Tailwind, com reorganização da estrutura de páginas, melhoria de responsividade e implementação de fluxos diretos de contato para orçamento e WhatsApp.",
    outcome:
      "A empresa passou a ter um site mais claro e atual, com melhor apresentação dos serviços e um fluxo de contato mais direto para geração de leads.",
  },
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive Design"],
  websiteUrl: "https://www.stampnow.com.br",
  comparisonSections: [
    {
      id: "homepage",
      label: "Página inicial",
      oldSrc: "/projects/stampnow-home-old.png",
      oldAlt: "Página inicial da Stamp Now antes do redesign",
      newSrc: "/projects/stampnow-home-new.png",
      newAlt: "Página inicial da Stamp Now após o redesign",
    },
    {
      id: "services",
      label: "Serviços",
      oldSrc: "/projects/stampnow-services-old.png",
      oldAlt: "Página de serviços da Stamp Now antes do redesign",
      newSrc: "/projects/stampnow-services-new.png",
      newAlt: "Página de serviços da Stamp Now após o redesign",
    },
  ],
},
```

- [ ] **Step 5: Add a generic project-action helper below `getInitialProjectSlug()`**

Insert this helper:

```jsx
function getProjectAction(project, labels) {
  if (project?.websiteUrl) {
    return {
      href: project.websiteUrl,
      label: labels.websiteCta,
      Icon: Globe,
    };
  }

  if (project?.githubUrl) {
    return {
      href: project.githubUrl,
      label: labels.repoCta,
      Icon: Github,
    };
  }

  return null;
}
```

- [ ] **Step 6: Replace the repository-only CTA logic in `App()`**

Inside `App()`, add:

```jsx
const projectAction = useMemo(
  () => getProjectAction(selectedProject, t.projects),
  [selectedProject, t.projects]
);
const ActionIcon = projectAction?.Icon;
```

Replace both `selectedProject.githubUrl` button blocks with:

```jsx
{projectAction && ActionIcon && (
  <Button
    as="a"
    href={projectAction.href}
    variant="secondary"
    size="sm"
    target="_blank"
    rel="noreferrer"
    aria-label={`${projectAction.label}: ${selectedProject.title}`}
    className="w-full"
  >
    <ActionIcon size={16} aria-hidden="true" />
    {projectAction.label}
  </Button>
)}
```

- [ ] **Step 7: Verify the project order and CTA behavior manually**

Run: `npm run dev`
Expected: Vite prints a local URL such as `http://localhost:5173/`

Manual checks:

- The project list order is `01 Gym Assist Bot`, `02 Market Price Comparison and Purchasing Platform`, `03 Local Company Website Redesign`, `04 Sales Monitoring and Business Management Dashboard`
- Opening `#/projects/local-company-website-redesign` shows the new project detail page
- The CTA text reads `Visit website` in English
- Toggling to Portuguese changes the CTA text to `Ver site`
- The CTA opens `https://www.stampnow.com.br` in a new tab

- [ ] **Step 8: Commit the data and CTA work**

```bash
git add src/App.jsx
git commit -m "feat: add local company website project data"
```

## Task 2: Build The Before/After Comparison Component

**Files:**
- Create: `src/components/project-comparison.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/project-comparison.jsx`**

Use this component:

```jsx
import { useEffect, useMemo, useState } from "react";

function ComparisonImage({ section, labels, fallbackSrc, fallbackAlt }) {
  const [position, setPosition] = useState(50);
  const [oldFailed, setOldFailed] = useState(false);
  const [newFailed, setNewFailed] = useState(false);

  useEffect(() => {
    setPosition(50);
    setOldFailed(false);
    setNewFailed(false);
  }, [section.id]);

  if (newFailed) {
    if (!fallbackSrc) {
      return null;
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={fallbackSrc}
          alt={fallbackAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
        />
      </div>
    );
  }

  if (oldFailed) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={section.newSrc}
          alt={section.newAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
          onError={() => setNewFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={section.newSrc}
          alt={section.newAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
          onError={() => setNewFailed(true)}
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={section.oldSrc}
            alt={section.oldAlt}
            className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
            loading="lazy"
            onError={() => setOldFailed(true)}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90"
          style={{ left: `calc(${position}% - 1px)` }}
        />

        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#0F1115]/85 px-3 py-1 text-xs font-semibold text-[#FCA5A5]">
          {labels.old}
        </div>

        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#0F1115]/85 px-3 py-1 text-xs font-semibold text-[#86EFAC]">
          {labels.new}
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={labels.slider}
        className="w-full accent-[#34D399]"
      />
    </div>
  );
}

function ProjectComparison({ sections, labels, fallbackSrc, fallbackAlt }) {
  const firstSection = sections[0] ?? null;
  const [activeId, setActiveId] = useState(firstSection?.id ?? "");

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeId) ?? firstSection,
    [activeId, firstSection, sections]
  );

  if (!activeSection) {
    if (!fallbackSrc) {
      return null;
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={fallbackSrc}
          alt={fallbackAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label={labels.tablist}
        className="inline-flex rounded-full border border-[#2A2F38] bg-[#0F1115] p-1"
      >
        {sections.map((section) => {
          const isActive = section.id === activeSection.id;

          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(section.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#34D399] text-[#06291E]"
                  : "text-[#A1A1AA] hover:text-[#E5E7EB]"
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </div>

      <ComparisonImage
        section={activeSection}
        labels={labels}
        fallbackSrc={fallbackSrc}
        fallbackAlt={fallbackAlt}
      />
    </div>
  );
}

export { ProjectComparison };
```

- [ ] **Step 2: Import the component and derive the comparison flag in `src/App.jsx`**

Add the import:

```jsx
import { ProjectComparison } from "./components/project-comparison";
```

Inside `App()`, add:

```jsx
const hasProjectComparison = Boolean(selectedProject?.comparisonSections?.length);
```

- [ ] **Step 3: Route the non-video media area through the comparison component**

Replace the non-video branch in the standard project detail layout with:

```jsx
{hasProjectComparison ? (
  <ProjectComparison
    sections={selectedProject.comparisonSections}
    fallbackSrc={selectedProject.cover}
    fallbackAlt={selectedProject.title}
    labels={{
      tablist: t.projects.comparisonTablistAria,
      slider: t.projects.comparisonSliderAria,
      old: t.projects.comparisonOldLabel,
      new: t.projects.comparisonNewLabel,
    }}
  />
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
```

- [ ] **Step 4: Verify the comparison behavior manually**

Run: `npm run dev`
Expected: Vite prints a local URL such as `http://localhost:5173/`

Manual checks:

- The redesign detail page defaults to the `Homepage` tab
- Clicking `Services` swaps the comparison images
- Moving the slider reveals more or less of the old site
- If an old image is missing, the section falls back to the new image
- The comparison layout still reads cleanly at desktop and mobile widths

- [ ] **Step 5: Commit the comparison component integration**

```bash
git add src/App.jsx src/components/project-comparison.jsx
git commit -m "feat: add project comparison media"
```

## Task 3: Add The Screenshot Assets And Final Verification

**Files:**
- Add: `public/projects/stampnow-home-old.png`
- Add: `public/projects/stampnow-home-new.png`
- Add: `public/projects/stampnow-services-old.png`
- Add: `public/projects/stampnow-services-new.png`

- [ ] **Step 1: Copy the prepared desktop screenshots into `public/projects/`**

Required filenames:

```text
public/projects/stampnow-home-old.png
public/projects/stampnow-home-new.png
public/projects/stampnow-services-old.png
public/projects/stampnow-services-new.png
```

- [ ] **Step 2: Verify the files exist with the exact names**

Run: `ls public/projects/stampnow-*.png`
Expected:

```text
public/projects/stampnow-home-new.png
public/projects/stampnow-home-old.png
public/projects/stampnow-services-new.png
public/projects/stampnow-services-old.png
```

- [ ] **Step 3: Build the production bundle**

Run: `npm run build`
Expected: Vite completes successfully and writes the output into `dist/`

- [ ] **Step 4: Run the site locally and perform final manual QA**

Run: `npm run dev`
Expected: Vite prints a local URL such as `http://localhost:5173/`

Manual checks:

- Home page project order is `01 Gym Assist Bot`, `02 Market Price Comparison and Purchasing Platform`, `03 Local Company Website Redesign`, `04 Sales Monitoring and Business Management Dashboard`
- `#/projects/local-company-website-redesign` loads without visible runtime errors
- The detail page defaults to the `Homepage` comparison tab
- The `Services` tab switches correctly
- The slider remains usable after language switching
- The CTA opens `https://www.stampnow.com.br`
- The Portuguese translation reads naturally for title, description, highlights, and detail cards

- [ ] **Step 5: Commit the screenshot assets**

```bash
git add public/projects/stampnow-home-old.png public/projects/stampnow-home-new.png public/projects/stampnow-services-old.png public/projects/stampnow-services-new.png
git commit -m "assets: add stampnow comparison screenshots"
```
