# DeFi Master Course Application

## Overview

This repository contains a comprehensive DeFi education platform built with Next.js 14, React, TypeScript, and Tailwind CSS. The application provides an interactive learning experience for users interested in decentralized finance, blockchain fundamentals, and related topics.

## Prerequisites

Before launching this project, ensure you have the following installed:

- Node.js (v18.17.0 or later)
- pnpm (v8.0.0 or later)
- Git

## Environment Setup

The project uses the following versions:
- Next.js 15.2.4
- React 19
- TypeScript 5
- TailwindCSS 3.4.17

## Quick Start

Follow these steps to launch the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/defi-course-app.git
   cd defi-course-app
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   # For Windows users (recommended):
   node_modules/.bin/next dev
   
   # Alternative methods:
   pnpx next dev
   # or
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The project follows a standard Next.js App Router structure:

```
defi-course-app/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Admin dashboard pages
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # User dashboard pages
│   ├── guides/             # Guide pages
│   ├── modules/            # Course modules pages
│   ├── quiz/               # Quiz pages
│   ├── globals.css         # Global CSS
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── admin/              # Admin components
│   ├── user/               # User components
│   ├── header.tsx          # Header component
│   ├── footer.tsx          # Footer component
│   └── ...                 # Other components
├── lib/                    # Utility functions and module content
│   ├── module-content/     # Module content
│   ├── modules/            # Module definitions
│   └── ...                 # Other utilities
├── data/                   # Static data
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
└── ...                     # Other configuration files
```

## Key Features

- **Interactive Learning Modules**: Comprehensive DeFi education content
- **User Dashboard**: Track progress and manage account
- **Admin Panel**: Manage courses, users, and content
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on all device sizes

## Configuration Details

### Tailwind CSS

The project uses a custom Tailwind configuration with a purple-based color scheme. The primary color is set to a purple hue (`267 83% 66%`). To ensure the exact same appearance, do not modify the `tailwind.config.ts` file.

### Font Configuration

The project uses the Inter font from Google Fonts. This is loaded in the `app/layout.tsx` file:

```typescript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] })
```

### Theme Configuration

The application uses a theme provider with dark mode as the default:

```typescript
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
```

## Troubleshooting

### Spacing Issues in Module Content

If you encounter spacing issues in the module content (text appearing without proper paragraph breaks), add the following to your `globals.css` file:

```css
@layer base {
  p {
    @apply mb-4;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply mt-6 mb-4;
  }
}
```

### Module Navigation Issues

If the module navigation doesn't work correctly, check that the module registry is properly configured in `lib/module-registry.ts`.

## Development Notes

- The application uses the Next.js App Router, so all routes are defined in the `app` directory.
- Server Components and Client Components are used appropriately throughout the application.
- The `'use client'` directive is used at the top of client components.

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Cursor AI-Specific Instructions

To ensure the project looks exactly the same in Cursor AI:

1. Use the "Open Folder" option in Cursor AI to open the project directory.
2. Ensure all dependencies are installed by running `pnpm install` in the terminal.
3. Start the development server with `pnpx next dev`.
4. If you encounter any styling issues, verify that the Tailwind configuration is correctly loaded.
5. For optimal performance in Cursor AI, consider using the integrated terminal for running commands.

## Environment Variables

This project doesn't require any environment variables for basic functionality. However, if you plan to extend it with authentication or API integrations, you may need to set up appropriate environment variables.

## Module Content Structure

The course content is organized in a modular structure:

- Each module is defined in `lib/modules/` directory
- Module content is stored in `lib/module-content/` directory
- The module registry in `lib/module-registry.ts` connects modules to their content

## Component Architecture

The application follows a component-based architecture:

- `module-template.tsx`: Renders different section types (theory, code, quiz, etc.)
- `module-navigation.tsx`: Handles navigation between module sections
- `module-content.tsx`: Displays the content of each module
- `module-simulation.tsx`: Provides interactive simulations for practical learning

## Fixing Common Issues

### 1. Spacing Issues in Content

If you notice spacing issues in the module content, modify the `components/module-template.tsx` file to add proper spacing between paragraphs:

```tsx
// In TheorySectionRenderer component
return (
  <div className="space-y-4">
    {content.map((paragraph, idx) => (
      <p key={idx} className="text-base leading-7">
        {paragraph}
      </p>
    ))}
  </div>
);
```

### 2. Navigation Issues

If module navigation doesn't work correctly, check:

1. The module slug in the URL matches the module ID in the registry
2. The module content is properly exported from its file
3. The module is correctly registered in `lib/module-registry.ts`

# DeFi Master Course: Module Structure Recommendations

This document outlines best practices and structural improvements for maintaining and scaling the module content system. **All recommendations are designed to avoid any changes to the current frontend look and user experience.**

## 📋 Module Structure Improvement Checklist

- [x] 1. Enforce consistent TypeScript interfaces for all modules
- [x] 2. Centralize and strictly type module registration
- [x] 3. Standardize quiz question structure (use `correctIndex` everywhere)
- [x] 4. Use consistent export patterns (`export default` for all modules)
- [x] 5. Add automated type checking and linting for modules
- [ ] 6. (Optional) Use subfolders for each module if the codebase grows
- [ ] 7. Add documentation and a template/example for new modules

---

## 1. Enforce Consistent TypeScript Interfaces
- All modules must implement the shared `ModuleContentInterface`.
- Export modules as:
  ```ts
  const MyModule: ModuleContentInterface = { ... }
  export default MyModule
  ```

## 2. Centralize and Strictly Type Module Registration
- Use a single `moduleContentMap` with a `Record<ModuleSlug, ModuleContentInterface>` type.
- Add new modules to this map for type safety and discoverability.

## 3. Standardize Quiz Question Structure
- All quiz questions must use the `correctIndex` property (not `correctAnswer`).
- Use a shared `QuizQuestion` interface.

## 4. Consistent Export Patterns
- Use `export default` for all module content files.
- Update imports to use default imports.

## 5. Automated Type Checking and Linting
- Run type checking:
  ```bash
  pnpm tsc --noEmit
  ```
- Run linting:
  ```bash
  pnpm lint
  ```
- Add to CI or as a pre-commit hook for best results.

## 6. (Optional) Directory Structure for Large Scale
- If the number of modules grows, use subfolders per module:
  ```
  lib/module-content/
    introduction-to-defi/
      index.tsx
      quiz.ts
      theory.tsx
    ...
  ```

## 7. Documentation and Module Template
- Add a `TEMPLATE.tsx` in `lib/module-content/` as a starting point for new modules.
- Add a `README.md` in `lib/module-content/` with instructions for creating new modules, required structure, and best practices.

---

**Next Steps:**
- [ ] Add a module template/example and documentation for contributors.