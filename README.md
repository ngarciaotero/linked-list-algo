# Webpack Starter Template

This is a basic Webpack starter template for web development projects. It provides both development and production builds.

## Features

- Separate configurations for development and production
- HTML, CSS, and JavaScript processing
- Asset handling (images and fonts)
- Development server with live loading
- Production build optimization

## Getting Started

To use this template:

1. Click the "Use this template" button on Github, or clone this repository.
2. Navigate to the project directory:

```bash
cd webpack-starter-template
```

3. Install dependencies:

```bash
npm install
```

## Scripts

- `npm start`: Runs the development server
- `npm run build`: Creates a production build
- `npm run watch`: Watches for changes and rebuilds (without dev server)
- `npm run deploy`: Deploys to Github Pages (pushes dist folder to gh-pages branch)

## Configuration Files

- `webpack.common.js`: Common configuration shared between development and production
- `webpack.dev.js`: Development-specific configuration
- `webpack.prod.js`: Production-specific configuration

## Dependencies

This template uses Webpack 5 and includes loaders for HTML, CSS, and file assets. Check `package.json` for the full list of dependencies.
