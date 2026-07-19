# delivery-admin

Restaurant admin panel (T-Еда) built with [Tramvai.js](https://tramvai.dev/) framework.

## Overview

This is a web application for restaurant administration that provides:
- **Dashboard** - View and manage customer orders
- **Menu Management** - Display restaurant menu with dishes
- **Favorites** - Track favorite dishes (in development)

## Install dependencies

```bash
npm install
```

## Usage

- `npm start` - Run development server
- `npm run build` - Production build
- `npm run preview` - Preview production build locally
- `npm run analyze` - Analyze bundle with Statoscope
- `npm run lint` - Run ESLint

## Project Structure

The project follows [feature-sliced methodology](https://feature-sliced.design/) guidelines.

```
src/
├── index.ts                    # Application entry point, tramvai modules configuration
├── postcss.js                  # PostCSS configuration
├── entities/                   # Business entities
│   ├── dish/                   # Dish entity
│   │   ├── model/              # Types and state
│   │   │   ├── types.ts        # Dish interface
│   │   │   └── store.ts        # Dish store
│   │   └── ui/                 # UI components
│   │       └── DishItem.tsx    # Dish table row component
│   ├── menu/                   # Menu entity
│   │   ├── api/                # API service
│   │   │   └── api.ts          # MenuApiService for fetching menu
│   │   └── model/              # State and queries
│   │       └── queries.ts      # getMenuQuery
│   └── order/                  # Order entity
│       ├── api/                # API service
│       │   └── api.ts          # OrderApiService for fetching orders
│       └── model/              # State and queries
│           ├── types.ts        # Order interface
│           ├── constants.ts    # Order status constants
│           └── queries.ts      # getOrdersQuery
├── routes/                     # Application pages
│   ├── index.tsx               # Dashboard page (orders list)
│   ├── menu/                   # Menu page
│   │   └── index.tsx
│   └── favorites/              # Favorites page (in development)
│       └── index.tsx
├── shared/                     # Reused modules
│   ├── api/                    # API utilities
│   │   └── base-api.ts         # Base API class with request method
│   ├── header/                 # Header component
│   │   ├── Header.tsx
│   │   └── index.ts
│   └── lib/                    # Shared utilities
│       └── tokens.ts           # Dependency injection tokens
└── widgets/                    # Composite UI components
    ├── layout/                 # Application layout
    │   └── ui/
    │       └── Layout.tsx        # Main layout with navigation
    └── menu/                   # Menu widget
        └── ui/
            └── MenuWidget.tsx    # Menu display component
```

## Features

### Dashboard
- Displays all customer orders in a table format
- Shows order ID, client name, creation date, total price, and status
- Color-coded status badges (Принят, Готовится, Доставляется, Выполнен, Отменён)

### Menu
- Displays restaurant menu with dishes
- Shows dish ID, title, price, image, and availability status
- Images are displayed with proper sizing constraints

## API

The application uses [MockAPI](https://mockapi.io/) as a mock backend:
- Base URL: `https://6a58e91b68601fc330e981b2.mockapi.io/api/v1/`
- Endpoints:
  - `/menu` - Get all dishes
  - `/orders` - Get all orders

## Important Tramvai Modules

- `@tramvai/module-server` - Processing client requests, working with papi
- `@tramvai/module-render` - Server-side HTML rendering and client-side hydration
- `@tramvai/module-router` - Router integration with file-system routing
- `@tramvai/module-react-query` - React Query integration for data fetching
- `@tramvai/module-seo` - SEO management
- `@tramvai/module-error-interceptor` - Error handling

## Development

The application is configured with:
- **SWC** for fast transpilation in production
- **PostCSS** with nested, custom properties, and custom media plugins
- **ESLint** with Tinkoff config for code quality
- **Husky** for pre-commit hooks
