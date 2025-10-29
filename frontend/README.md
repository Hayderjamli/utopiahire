# UtopiaHire Frontend (TypeScript)

A modern React + TypeScript frontend for the UtopiaHire AI-powered interview practice platform.

## Technology Stack

- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Axios** for API requests
- **React Icons** for UI icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
cd frontend
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── api.ts           # API client configuration
│   ├── AuthContext.tsx  # Authentication context
│   ├── ServiceContext.tsx # Service state management
│   ├── types.ts         # TypeScript type definitions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Features

- 🎨 Modern, professional UI with Tailwind CSS
- 🔐 Authentication with JWT tokens
- 🎤 AI-powered interview practice
- 📄 CV review and enhancement
- 💼 Job matching
- 📊 Dashboard and activity tracking
- 🎯 TypeScript for type safety
- ⚡ Fast development with Vite

## Color Scheme

The UI uses a professional blue and gray color palette:
- Primary: Sky blue (#0ea5e9)
- Secondary: Slate gray (#64748b)
- Neutrals: Gray shades for backgrounds and text

## API Integration

The frontend connects to a backend API at `http://localhost:8000/api` by default. Update this in `src/api.ts` if needed.
