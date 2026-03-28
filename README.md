# Annual Dinner 2026 - Modern Event Website

A stunning, modern website for the Annual Dinner 2026 event featuring 5 interactive pages for attendees.

## 🌟 Features

### 📅 Event Schedule Page
- Performance program timeline
- Event schedule with time slots and durations
- Event details and dress code information

### 🎁 Lucky Draw Prize Page
- Display of all available prizes
- Prize categories and details
- Lucky draw rules and eligibility information

### 📸 Photo Gallery Page
- Interactive photo gallery with filtering by category
- Linktree integration for full photo sharing
- Social media sharing capabilities

### 🌐 Translation Page
- English-Chinese translation tool
- Common event phrases reference
- Live translator availability information

### 💺 Seating Plan Page
- Interactive table selection system
- Detailed guest list per table
- Special dietary notes and accommodations

## 🚀 Quick Start

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

### Build for Production
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## 🛠 Tech Stack

- **Framework**: Next.js 16.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page with hero section
│   ├── layout.tsx               # Root layout with navigation & footer
│   ├── globals.css              # Global styles
│   ├── event-schedule/page.tsx  # Event schedule page
│   ├── lucky-draw/page.tsx      # Lucky draw prizes page
│   ├── photos/page.tsx          # Photo gallery page
│   ├── translation/page.tsx     # Translation tool page
│   └── seating-plan/page.tsx    # Seating plan page
└── components/
    └── Navigation.tsx            # Main navigation component
```

## ✨ Highlights

- **Modern Design**: Gradient backgrounds, smooth transitions, and responsive layout
- **Fully Responsive**: Works on mobile, tablet, and desktop
- **Interactive Elements**: Table selection, category filtering, translation tool
- **Accessibility**: Semantic HTML, keyboard navigation support
- **Performance**: Optimized, lazy loading, static generation

## 🎨 Customization

### Update Event Name
Edit in:
- `src/components/Navigation.tsx`
- `src/app/layout.tsx` metadata
- `src/app/page.tsx`

### Customize Content
- **Schedule**: Modify schedule array in `/event-schedule/page.tsx`
- **Prizes**: Update prizes array in `/lucky-draw/page.tsx`
- **Phrases**: Edit phrases in `/translation/page.tsx`
- **Tables**: Adjust in `/seating-plan/page.tsx`

### Styling
- Colors use Tailwind CSS classes
- Primary: Blue (#2563EB), Secondary: Purple (#9333EA)
- Modify `tailwind.config.ts` for custom theme

## 📞 Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ for an unforgettable Annual Dinner 2026
