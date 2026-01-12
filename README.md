# AII Developer Guidelines

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-blue)](https://pages.github.axa.com/aii/developer-guideline)

A comprehensive React-based documentation site for AII's .NET development standards, featuring Clean Architecture patterns, coding best practices, and interactive guidelines for new developers.

## 🌐 Live Site

**Production URL:** [https://pages.github.axa.com/aii/developer-guideline](https://pages.github.axa.com/aii/developer-guideline)

## 📋 Overview

This documentation site provides:

- **Clean Architecture Standards** - Essential patterns and practices for maintainable .NET applications
- **Coding Standard Guide** - Detailed coding conventions, naming standards, and best practices
- **Interactive Features** - Copy-to-clipboard code blocks, animated statistics, smooth scrolling
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Progressive Web App** - Installable on mobile devices for offline access

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/axa/aii-developer-guideline.git
cd developer-guideline
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

### Development
```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Build for production
```

### Deployment
```bash
npm run build      # Build the app
npm run deploy     # Deploy to GitHub Pages
```

## 🏗️ Project Structure

```
developer-guideline/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   ├── manifest.json      # PWA manifest
│   ├── favicon.ico        # Site favicon
│   └── axa_logo_solid_rgb.png  # AXA logo
├── src/
│   ├── components/        # Reusable React components
│   │   ├── AnimatedCounter.tsx    # Animated statistics
│   │   ├── AnimatedSection.tsx    # Scroll animations
│   │   ├── BackToTop.tsx         # Scroll-to-top button
│   │   ├── CodeBlock.tsx         # Code with copy functionality
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Layout.tsx            # Page layout wrapper
│   │   └── TableOfContents.tsx   # Dynamic TOC
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx           # Landing page
│   │   ├── CleanArchitecturePage.tsx  # Architecture guide
│   │   ├── CodingStandardPage.tsx     # Coding standards
│   │   └── DotNetDeveloperGuidelinePage.tsx  # Main guidelines
│   ├── styles/            # CSS stylesheets
│   │   └── style.css      # Main stylesheet
│   ├── App.tsx            # Main app component
│   └── index.tsx          # App entry point
└── package.json           # Dependencies and scripts
```

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **React Router DOM v7** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **React Intersection Observer** - Scroll-triggered animations
- **Tailwind CSS** - Utility-first CSS framework
- **Progressive Web App** - Installable web application

## 🎨 Key Features

### Interactive Elements
- **Animated Statistics** - Numbers count up when scrolled into view
- **Copy-to-Clipboard** - Code blocks with one-click copying
- **Smooth Scrolling** - Anchor links with smooth transitions
- **Mobile Menu** - Responsive navigation with slide-out menu
- **Table of Contents** - Auto-generated navigation for long pages

### Developer Experience
- **Clean Architecture** - Proper separation of concerns
- **TypeScript** - Full type safety and IntelliSense
- **Hot Reload** - Instant updates during development
- **ESLint** - Code quality and consistency
- **Responsive Design** - Works on all screen sizes

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The production build is available at:

**https://pages.github.axa.com/aii/developer-guideline**

### Manual Deployment

To deploy manually:

```bash
npm run build
npm run deploy
```

This will build the app and push it to the `gh-pages` branch for GitHub Pages hosting.

## 📚 Content Sections

1. **Home** - Overview and quick start guide
2. **Clean Architecture Standards** - SOLID principles, DDD patterns, dependency injection
3. **Coding Standard Guide** - Naming conventions, code formatting, best practices
4. **.NET Developer Guideline** - Complete development workflow and standards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## 📄 License

This project is proprietary to AII. All rights reserved.

## 📞 Support

For questions or support, please contact the AII development team.

Now do check on styling and overall UI/UX design on this application, based on best practice is there anything we can improve, do research on similiar guideline applciation or web, create comprehensive implementation plan and task after your finding