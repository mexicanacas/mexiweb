# Los Mexicanacas Website - Astro

This is the website for Los Mexicanacas, a Latin fusion band from Norway. The site is built with Astro and integrates with Sanity CMS for content management.

## 🚀 Project Structure

```
/
├── public/           # Static assets (images, fonts, etc.)
├── src/
│   ├── components/   # Astro and React components
│   ├── layouts/      # Page layouts
│   ├── lib/          # Utility functions and Sanity client
│   ├── pages/        # File-based routing pages
│   └── styles/       # Global styles
├── sanity/           # Sanity CMS configuration
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-10-05
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Custom colors and spacing are defined in `tailwind.config.mjs`.

## 📦 Key Dependencies

- **Astro**: Static site generator
- **React**: For interactive components (PromoVideo)
- **Tailwind CSS**: Utility-first CSS framework
- **Sanity**: Headless CMS
- **react-youtube**: YouTube video embed component

## 🔧 Migration from Next.js

This project was migrated from Next.js to Astro. Key changes:

1. **File Structure**: Moved from `app/` directory to `src/` with pages in `src/pages/`
2. **Components**: Converted React components to Astro components (except client-side components like PromoVideo)
3. **Routing**: Changed from Next.js App Router to Astro's file-based routing
4. **Image Handling**: Changed from `next/image` to native HTML `<img>` tags
5. **Environment Variables**: Changed from `NEXT_PUBLIC_` prefix to `PUBLIC_` prefix
6. **Sanity Client**: Changed from `next-sanity` to `@sanity/client`

## 📄 License

All rights reserved - Los Mexicanacas
