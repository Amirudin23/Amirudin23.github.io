# Vue.js + PrimeVue Project

A modern web application built with Vue.js and PrimeVue, showcasing component-based architecture with a rich set of UI components.

## 📋 Overview

This project demonstrates:
- **Vue.js 3**: Progressive JavaScript framework with Composition API
- **PrimeVue 4**: Enterprise-grade UI component library
- **Vite**: Next-generation frontend tooling
- **Vue Router**: Client-side routing
- **Pinia**: State management
- **TypeScript**: Type-safe JavaScript

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm (v11.0.0 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd vue-primevue-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.vue          # Navigation bar component
│   ├── Footer.vue          # Footer component
│   └── HelloWorld.vue      # Utility component
├── views/
│   ├── HomeView.vue        # Home page with demo components
│   └── AboutView.vue       # About page with documentation
├── router/
│   └── index.ts            # Vue Router configuration
├── stores/
│   └── counter.ts          # Pinia store example
├── assets/
│   ├── base.css            # Base styling
│   ├── logo.svg            # Vue logo
│   └── main.css            # Main stylesheet
├── App.vue                 # Root component
└── main.ts                 # Application entry point
```

## 🎨 Features

### Components Used
- **Button**: Interactive buttons with different variants
- **Card**: Content containers with headers and footers
- **DataTable**: Responsive data visualization with sorting/filtering capabilities
- **Navbar**: Sticky navigation with routing
- **Footer**: Application footer with links
- **Divider**: Visual separator component

### Styling
- Responsive design for mobile, tablet, and desktop
- Custom CSS with gradient backgrounds
- PrimeVue's built-in component styling
- CSS variables for theme consistency

### Routing
- Home page with interactive demo
- About page with project information
- Client-side navigation using Vue Router

## 📚 Documentation

### PrimeVue Documentation
- [Official Docs](https://primevue.org/)
- [Component Library](https://primevue.org/showcase/)
- [Themes](https://primevue.org/themes/)

### Vue.js Documentation
- [Vue 3 Guide](https://vuejs.org/)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

## 🛠️ Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run type-check       # Run TypeScript compiler
npm run test:unit        # Run unit tests
npm run test:e2e         # Run E2E tests
npm run lint             # Run linters
```

## 📦 Dependencies

### Production
- **vue** (^3.5.32): UI framework
- **vue-router** (^5.0.4): Routing library
- **pinia** (^3.0.4): State management
- **primevue** (^4.5.5): UI component library
- **primeicons** (^7.0.0): Icon library

### Development
- **vite** (^8.0.8): Build tool
- **typescript** (~6.0.0): Type safety
- **@vitejs/plugin-vue** (^6.0.6): Vue support in Vite
- **vitest** (^4.1.4): Unit testing
- **@playwright/test** (^1.59.1): E2E testing
- **eslint** (^10.2.1): Code linting

## 🎯 Next Steps

1. **Explore Components**: Browse the [PrimeVue showcase](https://primevue.org/showcase/) to discover more components
2. **Customize Styling**: Modify global styles in `src/assets/main.css`
3. **Add Routes**: Extend `src/router/index.ts` with new pages
4. **State Management**: Create Pinia stores in `src/stores/`
5. **Deploy**: Build and deploy to your preferred hosting platform

## 📝 Notes

- The project uses TypeScript with Vue 3 Composition API
- PrimeVue components are available globally and can be imported on-demand
- PrimeIcons are included and can be used via the `<i>` tag with class names like `pi pi-star`
- All components are responsive and tested on various screen sizes

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Support

For issues or questions:
1. Check the [PrimeVue documentation](https://primevue.org/)
2. Review the [Vue.js guide](https://vuejs.org/)
3. Check the [GitHub issues](https://github.com/Amirudin23/portfolio/issues)

---

Built with ❤️ using Vue.js and PrimeVue
