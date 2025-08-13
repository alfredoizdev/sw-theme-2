# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "sw-theme-2", a Next.js 15 social media application called "Swing" for connecting with friends. The app features profile browsing, theme switching, and a modern responsive design built with React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **UI Components**: Radix UI primitives in `components/ui/` with custom styling
- **Sections**: Feature components in `components/sections/` for different app areas
- **Theme System**: Custom theme provider with dark/light/system modes
- **Mock Data**: Centralized fake data in `lib/fake-data.ts` for development

### Key Components
- **Layout** (`app/layout.tsx`): Root layout with ThemeProvider and font setup
- **Main Page** (`app/page.tsx`): Primary dashboard with header, sidebar, and content sections
- **Theme Provider** (`components/theme-provider.tsx`): Context-based theme management with localStorage persistence
- **Profile Tabs** (`components/sections/profiles-tabs.tsx`): Dual view system (View1: all sections, View2: tabbed interface)

### View System
The app has a unique dual-view architecture:
- **View1**: Shows all sections (Who's On, Who Viewed Me, Newest Matches) simultaneously
- **View2**: Shows sections in a tabbed interface
- Toggle buttons in the header allow switching between views

### Data Models
- **ProfileCard**: User profiles with id, name, age, orientation, distance, image, online status
- **HotDate**: Events/meetups with location, date, description, interested demographics

### Styling
- **Tailwind CSS v4** with custom configuration
- **CSS Variables**: Theme-aware color system
- **Responsive Design**: Mobile-first approach with lg: breakpoints for desktop sidebar
- **Geist Fonts**: Sans and mono variants from Google Fonts

### File Organization
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - Reusable UI primitives (buttons, cards, avatars, etc.)
- `components/sections/` - Feature-specific components
- `lib/` - Utilities and mock data
- `public/images/` - Static assets including logo variants for theme switching

## Development Notes

The project uses Next.js 15 with React 19, so ensure compatibility when adding new dependencies. The theme system expects both light and dark logo variants in `/public/images/`. Mock data structure is defined in `lib/fake-data.ts` and should be updated when modifying data models.