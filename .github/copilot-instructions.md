# Gandom Project - AI Agent Instructions

## Project Overview
Gandom is a React-based web application built with Vite and TailwindCSS. It appears to be a food service/restaurant platform with features for dishes, events, gym services, and delivery.

## Technology Stack
- React 19.1
- Vite 7.1
- TailwindCSS 3.4
- ESLint 9.36

## Project Structure
```
src/
  ├── assets/         # Images and fonts
  ├── components/     # Reusable React components
  ├── pages/         # Top-level page components
  └── data/          # Data files and configurations
```

## Key Development Patterns

### Component Structure
- Components are organized in feature folders under `src/components/`
- Each component folder contains an `index.jsx` as the main component file
- Example: `src/components/Header/index.jsx`

### Styling Conventions
- TailwindCSS is used for styling with direct class names
- Fixed dimensions use square bracket notation: `w-[1440px]`
- Responsive design uses Tailwind breakpoints (e.g., `md:flex`)
- Color scheme uses Tailwind's gray palette

### Navigation Structure
- Main navigation is in the Header component
- Uses anchor tags with hash links for SPA navigation
- Responsive navigation with mobile toggle (`hidden md:flex`)

### Asset Management
- Images are stored in categorized folders under `src/assets/`
- Logo assets are in `src/assets/Logo Gandom/`
- React-icons library is used for icons (e.g., `TiShoppingCart`)

## Development Workflow
1. Run development server: `npm run dev`
2. Build production: `npm run build`
3. Preview build: `npm run preview`
4. Lint code: `npm run lint`

## Common Patterns
- Component exports use default exports
- React imports are explicit (`import React from "react"`)
- Components use arrow function syntax
- Props destructuring in function parameters
- JSX comments use `{/* Comment */}` syntax

## Key Files for New Features
- Component templates: See `src/components/Header/index.jsx`
- Page layouts: Check `src/pages/`
- Styling reference: Review `tailwind.config.js`
- Build configuration: `vite.config.js`