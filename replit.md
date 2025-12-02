# Static HTML Website

## Overview
This is a simple static HTML website project imported from GitHub. The project consists of a basic HTML page with minimal styling.

## Project Structure
```
.
├── index.html          # Main HTML page
├── assets/
│   └── styles/
│       └── style.css   # CSS stylesheet (currently empty)
├── server.py           # Python HTTP server for development
└── .replit             # Replit configuration
```

## Setup and Running

### Development
The project uses a Python HTTP server to serve static files during development:
- Server runs on port 5000
- Bound to 0.0.0.0 to work with Replit's proxy
- Includes cache control headers to prevent caching issues

To start the development server:
```bash
python3 server.py
```

The workflow "Start application" is configured to automatically run this command.

### Deployment
The project is configured for static deployment:
- Deployment type: static
- Public directory: `.` (root directory)
- All HTML, CSS, and assets are served directly

## Recent Changes
- **December 2, 2025**: Initial Replit setup
  - Created Python HTTP server (server.py) for development
  - Configured workflow for port 5000 with webview output
  - Set up static deployment configuration
  - Added cache control headers to prevent iframe caching issues

## Technical Details
- **Language**: HTML/CSS
- **Server**: Python 3 (development only)
- **Port**: 5000 (development)
- **Deployment**: Static hosting (no build step required)
