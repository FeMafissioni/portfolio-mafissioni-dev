# Local Company Website Redesign Design

Date: 2026-04-14

## Goal

Add a new portfolio project as the third project entry. The new entry represents a completed redesign for a local company website and pushes the current BI project to fourth place.

The project should be presented as a redesign case study rather than a generic build. The detail view should emphasize the improvement from the old website to the new one through before/after desktop comparisons.

## User-Approved Direction

- Approach: comparison-led case study
- Project order: insert as third project
- Current BI project: shift to fourth
- Public title: `Local Company Website Redesign`
- Type label: `Business Website Redesign`
- Period: `2026`
- External link target: `https://www.stampnow.com.br`
- External CTA intent: live website, not repository

## Problem Statement

The previous company website had multiple issues that reduced clarity and credibility:

- outdated visual presentation
- outdated information
- poor mobile experience
- confusing navigation
- weak contact flow

The new portfolio entry should make it obvious that the work was not only visual. It improved structure, responsiveness, and lead/contact flow.

## Portfolio Positioning

This project should be framed as a business-facing redesign with measurable user-facing improvements:

- modern branding and presentation
- improved responsiveness across desktop and mobile behavior
- clearer structure and navigation
- stronger contact flow through direct email budget submission and WhatsApp integration

The stack should remain visible, but the primary story should focus on the business and usability improvements.

## Content Model

The new project entry should exist in both English and Portuguese project arrays and follow the existing project schema, with one media extension for the comparison experience.

### Standard fields

The project should include:

- `slug`
- `title`
- `description`
- `period`
- `kind`
- `cover`
- `tags`
- `highlights`
- `details.context`
- `details.execution`
- `details.outcome`

Explicit values for this project:

- English slug: `local-company-website-redesign`
- English title: `Local Company Website Redesign`
- Portuguese title: `Redesign de Website para Empresa Local`
- English kind: `Business Website Redesign`
- Portuguese kind: `Redesign de Website Empresarial`
- Period in both languages: `2026`
- Cover image after screenshots are prepared: `stampnow-home-new.png`
- Tags: `React`, `TypeScript`, `Vite`, `Tailwind CSS`, `Responsive Design`

### Media extension

This project should support a comparison-based media section instead of a normal image gallery.

The comparison section should contain two desktop screenshot pairs:

1. Homepage old vs new
2. Services old vs new

Each pair should be static image data, not live website embeds. This avoids breakage after the production domain is repointed to the new site.

## Detail Page Behavior

The detail page should use a comparison-led media area with the following behavior:

- default selected comparison: `Homepage`
- secondary comparison: `Services`
- comparison interaction: drag slider
- comparison scope: desktop only
- source media: static screenshots

The user should be able to drag a divider across the image to reveal more of the old or new version while preserving the same screenshot proportions.

Tabs or equivalent controls should switch between `Homepage` and `Services`.

## CTA Behavior

The current project detail behavior assumes a repository-focused external CTA. This new project needs a generic external-link model so it can point to the live website.

Required behavior:

- the new redesign project opens `https://www.stampnow.com.br`
- the English CTA text should be `Visit website`
- the Portuguese CTA text should be `Ver site`
- existing projects can keep repository-oriented behavior

## Recommended Copy Direction

### English

#### Description

Redesign of a local company website to modernize branding, update outdated information, improve responsiveness, and strengthen customer contact flows.

#### Highlights

- modernized the visual presentation and content structure
- improved desktop and mobile responsiveness
- streamlined contact through budget form email delivery and WhatsApp integration

#### Context

The previous site had outdated visuals and outdated information, weak mobile usability, confusing navigation, and an ineffective contact path.

#### Execution

The website was rebuilt with React, TypeScript, Vite, and Tailwind, with updated structure, improved responsiveness, and direct contact flows for budget requests and WhatsApp.

#### Outcome

The company now has a clearer and more modern website with better service presentation and a stronger lead/contact flow.

### Portuguese

#### Description

Redesign de um website empresarial local para modernizar a marca, atualizar informações desatualizadas, melhorar a responsividade e fortalecer os canais de contato com clientes.

#### Highlights

- modernização da apresentação visual e da organização do conteúdo
- melhoria da experiência responsiva em desktop e mobile
- simplificação do contato com envio de orçamento por email e integração com WhatsApp

#### Context

O site anterior apresentava visual e informações desatualizadas, baixa usabilidade em dispositivos móveis, navegação confusa e um fluxo de contato pouco eficiente.

#### Execution

O website foi reconstruído com React, TypeScript, Vite e Tailwind, com reorganização da estrutura de páginas, melhoria de responsividade e implementação de fluxos diretos de contato para orçamento e WhatsApp.

#### Outcome

A empresa passou a ter um site mais claro e atual, com melhor apresentação dos serviços e um fluxo de contato mais direto para geração de leads.

## Asset Requirements

Capture four desktop screenshots using consistent framing:

- homepage old
- homepage new
- services old
- services new

Asset requirements:

- same viewport width for each old/new pair
- same crop logic for each old/new pair
- prefer PNG or high-quality WebP
- avoid browser chrome if possible
- avoid unstable UI states such as popups, temporary banners, or overlays

Suggested naming:

- `stampnow-home-old.png`
- `stampnow-home-new.png`
- `stampnow-services-old.png`
- `stampnow-services-new.png`

## Fallback Behavior

If the comparison module is not ready yet, the project can temporarily use a standard cover image.

If one comparison image fails to load, the detail view should fall back to the new-site image rather than leaving the section broken.

## Out of Scope

The following are not part of this design phase:

- implementation of the comparison component
- creation of screenshot assets
- changes to the portfolio codebase
- repointing the production domain

## Implementation Notes

The portfolio currently stores project data directly in bilingual arrays. Inserting this project as the third item in both arrays will automatically change the list numbering and move the BI dashboard to fourth.

The existing data model and detail view are close to what is needed, but the external CTA behavior must be generalized to support a live-site link and the media area must support comparison-based content for this specific project.

A comparison-friendly project media structure should be planned explicitly rather than inferred from the current gallery shape. The implementation should avoid overloading repository-specific field names for a website CTA.
