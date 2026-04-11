# Dependencies

## Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI component library |
| react-dom | ^18.3.1 | React DOM renderer |
| react-router-dom | ^6.30.1 | Client-side routing |
| @tanstack/react-query | ^5.83.0 | Async state management |
| tailwind-merge | ^2.6.0 | Tailwind class merging utility |
| clsx | ^2.1.1 | Conditional class names |
| class-variance-authority | ^0.7.1 | Component variant management |
| lucide-react | ^0.462.0 | Icon library |
| sonner | ^1.7.4 | Toast notifications |
| framer-motion | ^12.38.0 | Animations |
| zod | ^3.25.76 | Schema validation |
| react-hook-form | ^7.61.1 | Form state management |
| @hookform/resolvers | ^3.10.0 | Form validation resolvers |
| recharts | ^2.15.4 | Charting library |
| date-fns | ^3.6.0 | Date utility functions |

### UI Primitives (Radix UI)

Headless, accessible UI components from [Radix UI](https://www.radix-ui.com/):

`accordion`, `alert-dialog`, `aspect-ratio`, `avatar`, `checkbox`, `collapsible`, `context-menu`, `dialog`, `dropdown-menu`, `hover-card`, `label`, `menubar`, `navigation-menu`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `slider`, `switch`, `tabs`, `toast`, `toggle`, `toggle-group`, `tooltip`

### Other UI Libraries

| Package | Purpose |
|---------|---------|
| cmdk | Command palette |
| embla-carousel-react | Carousel component |
| input-otp | OTP input field |
| next-themes | Theme switching |
| react-day-picker | Date picker |
| react-resizable-panels | Resizable panel layouts |
| vaul | Drawer component |

## Dev Dependencies

| Package | Purpose |
|---------|---------|
| vite | Build tool & dev server |
| typescript | Type checking |
| tailwindcss | Utility-first CSS |
| autoprefixer | CSS vendor prefixing |
| postcss | CSS processing |
| eslint | Code linting |
| vitest | Unit testing |
| @testing-library/react | React component testing |
| jsdom | DOM environment for tests |

## Cryptography

CIPHER uses **no external cryptography libraries**. All encryption is handled by the browser-native [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) (`crypto.subtle`), which is built into all modern browsers.
