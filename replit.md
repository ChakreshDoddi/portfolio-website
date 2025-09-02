# Replit.md

## Overview

This is a professional portfolio website for Chakresh Doddi, a Full Stack Java Developer. The application is built as a modern, responsive single-page application featuring a dark/light theme toggle and glassmorphism design elements. The portfolio showcases professional experience, skills, projects, certifications, education, and provides contact functionality. The site follows a crypto/fintech-inspired design with gradient animations, neon effects, and smooth scrolling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, modern UI components
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme System**: Custom theme provider supporting dark/light mode with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout for consistent type safety
- **API Design**: RESTful API endpoints with structured error handling and logging middleware
- **File Serving**: Static file serving for resume downloads and assets
- **Development**: Hot module replacement via Vite integration for seamless development experience

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Database**: PostgreSQL (configured via Neon serverless connection)
- **Session Storage**: In-memory storage for development with interface for future database integration
- **File Storage**: Local file system for resume and asset storage

### Authentication and Authorization
- **User Schema**: Basic user model with username/password fields
- **Validation**: Zod schema validation for type-safe data validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used in portfolio)

### UI/UX Design Patterns
- **Component System**: shadcn/ui components with Radix UI primitives for accessibility
- **Design Style**: Glassmorphism effects, gradient backgrounds, and neon hover animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoint system
- **Typography**: Custom font stack with Inter, architects daughter, and monospace fonts
- **Animation Strategy**: CSS-based animations with hover effects and smooth transitions

### Development Tools
- **Type Checking**: TypeScript configuration with strict mode enabled
- **Code Quality**: ESM modules throughout the application
- **Development Server**: Concurrent Express and Vite development servers
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation

## External Dependencies

### Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL connection for cloud database
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **drizzle-kit**: Database migration and schema management tools

### Frontend Libraries
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight React router for SPA navigation
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **class-variance-authority**: Utility for managing CSS class variants
- **clsx**: Conditional CSS class name utility
- **tailwind-merge**: Utility for merging Tailwind CSS classes

### Backend Dependencies
- **express**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **tsx**: TypeScript execution environment for Node.js

### Development and Build Tools
- **vite**: Frontend build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for backend compilation
- **@replit/vite-plugin-***: Replit-specific development enhancements

### UI Enhancement Libraries
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Touch-friendly carousel component
- **react-hook-form**: Form handling with validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form

### Styling and Design
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: CSS vendor prefixing
- **lucide-react**: Modern icon library with React components
- **react-icons**: Additional icon sets including brand icons