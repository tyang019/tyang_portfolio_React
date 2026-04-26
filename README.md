# Tyang Portfolio (React + Vite)

A personal developer portfolio built with **React** and **Vite** to showcase projects, services, and contact links.

## Tech Stack

- React
- Vite
- React Router
- Font Awesome
- CSS

## Project Structure

```text
.
├── public/                 # Static assets (favicon, icons)
├── src/
│   ├── assets/             # Portfolio images
│   ├── components/         # UI sections and layout components
│   ├── styles/             # Global styles
│   ├── App.jsx             # Main page composition
│   └── main.jsx            # Application entry point
├── index.html              # Vite HTML entry
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite configuration
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` – Start local dev server.
- `npm run build` – Build production bundle.
- `npm run preview` – Preview production build locally.
- `npm run lint` – Run ESLint checks.

## Customization Notes

- Update social/profile links in `src/components/Footer.jsx`.
- Update navigation items in `src/components/Navigation.jsx`.
- Replace project screenshots in `src/assets/`.