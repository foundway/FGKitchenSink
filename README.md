# Foxglove Design System - Kitchen Sink

A comprehensive design system overview page for Foxglove that showcases all UI components, design tokens, and patterns in an organized, navigable format.

## Features

- **Complete Component Library**: Buttons, inputs, forms, cards, badges, tables, modals, tabs, and more
- **Dark/Light Mode**: Full theme support with smooth transitions
- **Typography System**: Complete heading hierarchy and text styles
- **Color Palette**: Visual color swatches with CSS variable references
- **Spacing Scale**: Visual representation of the spacing system
- **Layout Templates**: Dashboard and layout pattern examples
- **Responsive Design**: Mobile-friendly layout
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    ui/           # Reusable UI components (Button, Card, Input, etc.)
    layout/       # Layout components (Container, Grid, Sidebar, Tabs)
    theme/        # Theme provider and toggle
  pages/
    KitchenSink.tsx  # Main kitchen sink page
  styles/
    theme.css     # Theme variables (colors, spacing, typography)
    global.css    # Global styles
  App.tsx
  main.tsx
```

## Components

### UI Components

- **Button**: Multiple variants (primary, secondary, tertiary, ghost, danger) and sizes
- **Card**: Basic and elevated card styles
- **Input**: Text input with label and error states
- **Textarea**: Multiline text input
- **Select**: Dropdown select with options
- **Checkbox**: Checkbox input with label
- **Radio**: Radio button input
- **Badge**: Status badges with variants
- **Table**: Data table with hover effects
- **Modal**: Modal dialog with overlay

### Layout Components

- **Container**: Responsive container with max-width options
- **Grid**: Responsive grid system (1-12 columns)
- **Sidebar**: Sidebar navigation component
- **Tabs**: Tab navigation component

## Theme System

The theme system uses CSS custom properties for easy theming. Switch between light and dark modes using the theme toggle in the header.

### Color Tokens

- Primary, Secondary, Success, Warning, Danger, Info
- Background colors (primary, secondary, tertiary)
- Text colors (primary, secondary, tertiary)
- Border colors

### Spacing Scale

- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem
- 3xl: 4rem

## License

MIT
