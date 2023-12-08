# IM5 - Projektarbeit

Diese Arbeit entstand im Rahmen von 5 Modul Interaktive Medien an der FHGR

## Setup

Installation der NPM packages

```bash
# create a new project in the current directory
npm i

```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Ziel der Webseite

In meinem Lehrprojekt werde ich einen 3D Animationsfilm umsetzen.
Die Webseite koennte dazu dienen, die genauen Learnings sowie den Film selber zu promoten.

Da aber die Learnings sowie der Film noch nicht existieren,
ist alles mit Dummy Text / Bildern abgefuellt.

## Techstack

Ich habe auf folgende Technologien und Packages gesetzt

1. Sveltekit (JS Framework)
2. Tailwindcss (CSS)
3. Lottie-Player (Animationen)
4. Vimeo Player SDK (Einbindung von Vimeo)
5. Svelte-Inview (Intersection Observer vereinfacht)

Alles extrem basic. nur das 5. Package haette ich auch weglassen koennen.
Ein Intersection Observer eigentlich keine grosse Sache ist.

Im Editor laeuft noch Copilot

## Learnings

Am meisten gelernt habe ich im [Hero](src/lib/components/hero.svelte) bei der Animation der Augen.
Das war etwas neues und hat Spass gemacht.
Ansonsten ist es eine Basic Webseite.

## Quellen

Offizielle Dokumentation

- Sveltekit / Tailwind / Lottie / Vimeo
- Texte kommen von ChatGTP
- Animation von Lottie
- Bilder von unsplash
