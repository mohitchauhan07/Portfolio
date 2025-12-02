# About Us React App

## Overview
A simple React application with a single About Us page, built with Vite for fast development.

## Project Structure
```
.
├── index.html              # HTML entry point
├── package.json            # Node.js dependencies and scripts
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   └── pages/
│       ├── AboutUs.jsx     # About Us page component
│       └── AboutUs.css     # About Us page styles
└── replit.md               # Project documentation
```

## Setup and Running

### Development
The project uses Vite as the development server:
- Server runs on port 5000
- Bound to 0.0.0.0 for Replit compatibility
- Hot module replacement enabled

To start the development server:
```bash
npm run dev
```

### Build
To create a production build:
```bash
npm run build
```

## Recent Changes
- **December 2, 2025**: Created React application
  - Set up Vite with React plugin
  - Created About Us page with styled content
  - Configured for Replit environment (port 5000, allowed hosts)

## Technical Details
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Port**: 5000 (development)
- **Styling**: Component-scoped CSS files

### Deployment
Configured for static deployment:
- Build command: `npm run build`
- Output directory: `dist`
