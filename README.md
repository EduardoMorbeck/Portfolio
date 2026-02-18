# Portfolio

Portfólio pessoal desenvolvido com **Astro** e **Tailwind CSS**, com suporte a múltiplos idiomas e modo escuro.

## Funcionalidades

- **Single-page** com seções: Início, Sobre, Projetos e Contato
- **Internacionalização (i18n)** — Português, Inglês e Espanhol
- **Modo escuro** com toggle no header
- **Layout responsivo** com menu mobile
- **Animações** com ScrollReveal nas seções
- **Deploy automático** no GitHub Pages via GitHub Actions

## Tecnologias

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Font Awesome](https://fontawesome.com/) (ícones)
- [ScrollReveal](https://scrollrevealjs.org/) (animações)
- JavaScript vanilla (i18n e interações)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: v20 ou superior)
- npm

## Como rodar o projeto

### Instalação

```bash
# Clone o repositório
git clone https://github.com/EduardoMorbeck/Portfolio.git
cd Portfolio

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:4321](http://localhost:4321) no navegador.

### Build

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos estáticos.

### Preview da build

```bash
npm run preview
```

Simula o site em produção localmente.

## Estrutura do projeto

```
Portfolio/
├── public/
│   ├── img/              # Imagens e assets
│   ├── locales/          # Traduções (pt.json, en.json, es.json)
│   └── scripts/          # script.js, i18n.js
├── src/
│   ├── components/       # Header, Home, About, Portfolio, Footer
│   ├── pages/
│   │   └── index.astro   # Página principal
│   └── styles/           # CSS por seção (global, header, home, about, etc.)
├── .github/workflows/
│   └── deploy.yml        # CI/CD para GitHub Pages
├── astro.config.mjs
└── package.json
```

## Deploy (GitHub Pages)

O projeto está configurado para deploy automático no **GitHub Pages**:

- **Trigger:** push nas branches `main` ou `master`
- **Workflow:** `.github/workflows/deploy.yml`
- Após o push, o site é construído e publicado em `https://<seu-usuario>.github.io/Portfolio/`

Para ativar: em **Settings → Pages**, escolha **GitHub Actions** como fonte.|

## Link do Projeto hospedado na Vercel

https://eduardo-morbeck-portfolio.vercel.app/
