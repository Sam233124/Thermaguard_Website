# ThermaGuard Website

Een professionele website voor ThermaGuard skischoenen service.

## Technologieën

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel voor hosting

## Lokale Ontwikkeling

1. Clone de repository:
```bash
git clone [repository-url]
cd thermaguard-website
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in je browser.

## Deployment naar Vercel

1. Maak een account aan op [Vercel](https://vercel.com) als je die nog niet hebt.

2. Installeer de Vercel CLI:
```bash
npm install -g vercel
```

3. Login op Vercel via de CLI:
```bash
vercel login
```

4. Deploy de website:
```bash
vercel
```

5. Voor productie deployment:
```bash
vercel --prod
```

## Projectstructuur

- `/src/app/` - Next.js app router en pagina's
- `/public/` - Statische bestanden (afbeeldingen, etc.)
- `/src/components/` - React componenten
- `/src/styles/` - CSS en Tailwind configuratie

## Todo

1. Voeg echte content toe:
   - Vervang placeholder teksten
   - Voeg echte afbeeldingen toe
   - Update contactgegevens

2. Configureer SEO:
   - Update metadata in layout.tsx
   - Voeg relevante alt teksten toe aan afbeeldingen
   - Voeg een sitemap.xml toe

3. Voeg extra functionaliteiten toe:
   - Contact formulier
   - Afspraken systeem
   - Product catalogus

4. Performance optimalisatie:
   - Optimaliseer afbeeldingen
   - Implementeer lazy loading
   - Voeg caching toe

5. Analytics:
   - Voeg Google Analytics of Vercel Analytics toe
   - Implementeer event tracking 

## Contact

Voor vragen of suggesties, neem contact op met het development team. 