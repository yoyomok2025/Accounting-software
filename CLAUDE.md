# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

INE tracker is a personal finance web application built with Nuxt 3, Vue 3, and TypeScript. It helps users track income and expenses with data stored locally in IndexedDB for privacy.

## Key Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server with hot reload
```

### Building
```bash
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Architecture

### SPA Architecture
- **Nuxt 3** with SSR disabled (`ssr: false` in `nuxt.config.ts`)
- File-based routing in `pages/` directory
- Client-side only application with IndexedDB storage

### Directory Structure
- `pages/` - File-based routing pages
  - `index.vue` - Calendar view (home page, route: `/`)
  - `overview.vue` - Overview dashboard (route: `/overview`)
  - `analysis.vue` - Analysis page (route: `/analysis`)
- `components/` - Vue components
  - `Area/` - Feature-area components organized by page/functionality
    - `Analysis/` - Analysis page components
    - `Home/` - Home page components
    - `Overview/` - Dashboard components
    - `Record/` - Transaction record components
    - `Search/` - Search functionality
  - `Card/`, `Chart/`, `Form/`, `Header/`, `Input/`, `Menu/` - Reusable UI components
  - `The*.vue` - Generic components (Button, Calendar, Icon, PopUp, etc.)
- `composables/` - Vue composables (reusable logic)
- `layouts/` - Nuxt layout components
- `plugins/` - Nuxt plugins (client-side only)
- `stores/` - Pinia state management stores
- `assets/` - Static assets
  - `data/` - Static data files (categories, calendar config)
  - `scss/` - SCSS stylesheets
  - `types/` - TypeScript type definitions

### Key Architectural Patterns

#### Area-Based Organization
Components are organized by feature areas in `components/Area/`:
- **Area/Analysis** - Analysis page specific components
- **Area/Home** - Calendar view components
- **Area/Overview** - Dashboard components
- **Area/Record** - Transaction record components
- **Area/Search** - Search functionality

#### State Management
- **Pinia stores** in `stores/` directory:
  - `categoriesStore.ts` - Category state management
  - `commonStore.ts` - Common application state (scroll, search, etc.)
  - `recordStore.ts` - Transaction record state management
- Components interact with stores, not directly with database/composables

#### Database Layer
- IndexedDB wrapper at `composables/useIndexedDB.ts`
- All data persistence flows through this composable
- No direct database access in components - use the composable

#### Type System
- Centralized type definitions in `assets/types/index.ts`:
  - `EnumMenuName` - Menu button names
  - `EnumHeaderName` - Page header names
  - `EnumRouteName` - Route paths
- Additional types in `assets/types/` for records, categories, charts, etc.

### Technology Stack
- **Framework**: Nuxt 3 (Vue 3 Meta Framework)
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Pinia
- **Styling**: Tailwind CSS + SCSS
- **Charts**: ApexCharts (via vue3-apexcharts)
- **Date Handling**: dayjs
- **Database**: IndexedDB (via idb-keyval)

## Important Notes

### File Naming
- Composables directory is correctly named `composables/`

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/` points to project root)

### Version Management
- Version in `package.json` should be kept in sync

### Code Style
- ESLint + Prettier configured
- Use Vue 3 Composition API with `<script setup>` syntax
- Follow TypeScript strict typing practices

### Pages
The application has 3 main pages:
1. **Calendar** (`/`) - Main view with calendar and transaction cards
2. **Overview** (`/overview`) - Dashboard with financial summary
3. **Analysis** (`/analysis`) - Charts and spending analysis
