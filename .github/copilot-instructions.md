# Annual Dinner 2026 Event Website - Development Guide

## Project Overview
This is a modern event website for an annual dinner celebration. The site features 5 main pages with information about event schedules, lucky draw prizes, photo galleries, translation support, and seating arrangements.

## Project Stack
- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: npm

## Directory Structure
```
event-website/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── layout.tsx               # Root layout with navigation
│   │   ├── event-schedule/
│   │   │   └── page.tsx             # Event schedule & performance timeline
│   │   ├── lucky-draw/
│   │   │   └── page.tsx             # Lucky draw prizes display
│   │   ├── photos/
│   │   │   └── page.tsx             # Photo gallery page
│   │   ├── translation/
│   │   │   └── page.tsx             # Translation tool
│   │   ├── seating-plan/
│   │   │   └── page.tsx             # Seating arrangements
│   │   └── globals.css              # Global styles
│   └── components/
│       └── Navigation.tsx            # Navigation component
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Key Features

### 1. Event Schedule Page (`/event-schedule`)
- Displays performance program timeline
- Shows event timeline with durations
- Includes event details and dress code information

### 2. Lucky Draw Prize Page (`/lucky-draw`)
- Showcases all available prizes with categories
- Includes lucky draw rules and information
- Displays prize details and eligibility criteria

### 3. Photo Gallery Page (`/photos`)
- Photo gallery with category filtering
- Integration points for Linktree links
- Social media sharing hashtag support
- Placeholder image system

### 4. Translation Page (`/translation`)
- English-Chinese translation tool
- Common event phrases reference
- Live translator availability information
- Mobile-friendly translation interface

### 5. Seating Plan Page (`/seating-plan`)
- Interactive table selection
- Table details display
- Guest list per table
- Special dietary notes
- Organized by sections (A, B, C)

## Development Guidelines

### Component Structure
- All components use TypeScript for type safety
- Use Tailwind CSS utility classes for styling
- Client-only components marked with `'use client'` directive
- Responsive design using Tailwind's responsive prefixes

### Styling Conventions
- Primary color: Blue (#2563EB)
- Secondary color: Purple (#9333EA)
- Use gradient backgrounds for hero sections
- Implement hover effects with smooth transitions
- Mobile-first responsive design approach

### Data Management
- Static data currently hardcoded in components
- Ready for integration with backend APIs
- Consider adding data fetching for:
  - Real guest lists
  - Actual event schedule
  - Prize information
  - Photo uploads

### Future Enhancements
1. **Backend Integration**
   - API endpoints for guest data
   - Database for seating assignments
   - Photo upload system

2. **Real Translation**
   - Integrate Google Translate API or similar
   - Real-time translation support

3. **Authentication**
   - User login for personalized seating info
   - Admin dashboard for event management

4. **Advanced Features**
   - Event RSVPs
   - Dietary preference collection
   - QR code check-ins
   - Real-time notifications

## Running the Project

### Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Configuration Notes

### Tailwind CSS
- Configured in `tailwind.config.ts`
- Supports custom spacing, colors, and animations
- PostCSS configured in `postcss.config.mjs`

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` points to `src/`)
- Next.js type generation enabled

## Content Customization

To customize the event details:

1. **Event Name**: Update in Navigation.tsx and metadata
2. **Event Schedule**: Edit array in `/event-schedule/page.tsx`
3. **Prize Details**: Modify array in `/lucky-draw/page.tsx`
4. **Common Phrases**: Update in `/translation/page.tsx`
5. **Seating Tables**: Modify table generation in `/seating-plan/page.tsx`

## Accessibility Considerations
- Semantic HTML structure
- Color contrast compliance
- Keyboard navigation support
- Mobile accessibility tested
- ARIA labels where necessary

## Support & Contact
For questions or issues regarding this development guide, refer to the project documentation or contact the development team.
