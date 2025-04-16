# Module Content Contributor Guide

This guide provides instructions and a checklist for creating new course modules in the DeFi Master Course platform.

## Module Checklist
- [ ] Use the `TEMPLATE.tsx` as a starting point for new modules
- [ ] Export a default object that implements `ModuleContentInterface` from `@/lib/types`
- [ ] Include a `video` object with `url`, `title`, and `description`
- [ ] Implement a `renderTheory` function that returns a React element
- [ ] Implement a `renderQuiz` function that returns a React element
- [ ] Use `correctIndex` for quiz questions
- [ ] Use consistent section headers, list styles, and iconography as in other modules
- [ ] Add clear, concise, and accessible content

## Example Module Template
See `TEMPLATE.tsx` in this folder for a copy-paste starting point.

## Best Practices
- Use Tailwind utility classes for styling
- Use Lucide icons for visual enhancement
- Keep content modular and easy to scan
- Follow the design and content structure of existing modules for consistency
- Test your module in the app before submitting

## Adding a New Module
1. Copy `TEMPLATE.tsx` and rename it to your module's slug (e.g., `my-new-module.tsx`)
2. Fill in the video, theory, and quiz content
3. Export your module as default
4. Register your module in `lib/module-content.ts` and `lib/module-content/index.tsx` if needed
5. Run type checking and linting:
   ```bash
   pnpm tsc --noEmit
   pnpm lint
   ```
6. Test in the browser

---
For questions, see the main project README or contact the maintainers. 