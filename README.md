# Snippix - Code Screenshot Sharing Application

A powerful and elegant tool for creating beautiful code screenshots to share on social media platforms. Transform your code snippets into stunning visual presentations with customizable themes, fonts, and styling options.

🌐 **Live Demo**: [https://snippix.vercel.app/](https://snippix.vercel.app/)

---

## ✨ Features

### 🎨 Visual Customization
- **10+ Beautiful Themes**: Choose from elegant gradient backgrounds including Hyper, Oceanic, Candy, Sublime, Horizon, Coral, Peach, Flamingo, Gotham, and Ice
- **14+ Professional Fonts**: Popular monospace fonts including JetBrains Mono, Fira Code, Cascadia Code, Victor Mono, and more
- **Adjustable Font Size**: Customize text size for optimal readability
- **Dynamic Padding**: Control spacing around your code snippets
- **Dark/Light Mode**: Toggle between dark and light syntax highlighting
- **Background Toggle**: Show/hide gradient backgrounds for different aesthetics

### 🔧 Code Features
- **40+ Programming Languages**: Syntax highlighting for all major languages including Python, JavaScript, TypeScript, Java, C++, Rust, Go, PHP, and more
- **Auto Language Detection**: Intelligent language detection using Flourite
- **Live Code Editor**: Real-time editing with syntax highlighting
- **Random Code Snippets**: Pre-loaded examples in various languages
- **Custom Titles**: Add personalized titles to your code screenshots

### 📤 Export Options
- **PNG Export**: High-quality raster images
- **SVG Export**: Scalable vector graphics
- **Copy to Clipboard**: Quick sharing functionality
- **URL Sharing**: Share configurations via URL parameters
- **Resizable Canvas**: Drag to adjust screenshot width

### ⌨️ User Experience
- **Keyboard Shortcuts**: Efficient workflow with hotkey support
- **Responsive Design**: Works seamlessly on all device sizes
- **Persistent Settings**: Your preferences are saved locally
- **Toast Notifications**: Elegant feedback for user actions
- **Mac-style Window**: Beautiful window chrome with traffic light buttons

---

## 🛠️ Tech Stack

### Frontend Framework
- [**Next.js 16**](https://nextjs.org) – React framework with App Router and Turbopack (Updated for security - CVE-2025-55182)
- [**React 19**](https://react.dev) – Latest React with concurrent features
- [**TypeScript**](https://www.typescriptlang.org) – Type-safe development

### Styling & UI
- [**Tailwind CSS 4**](https://tailwindcss.com) – Utility-first CSS framework
- [**Radix UI**](https://www.radix-ui.com) – Headless UI components
  - `@radix-ui/react-dropdown-menu` – Dropdown menus
  - `@radix-ui/react-select` – Select components
  - `@radix-ui/react-slider` – Range sliders
  - `@radix-ui/react-switch` – Toggle switches
  - `@radix-ui/react-slot` – Composition utilities
  - `@radix-ui/react-icons` – Icon library
- [**ShadCN UI**](https://ui.shadcn.dev) – Pre-built components with Tailwind
- [**Class Variance Authority**](https://cva.style) – Component variant management
- [**Tailwind Merge**](https://github.com/dcastil/tailwind-merge) – Utility class merging
- [**Lucide React**](https://lucide.dev) – Beautiful icon library

### Code Editing & Highlighting
- [**React Simple Code Editor**](https://github.com/satya164/react-simple-code-editor) – Lightweight code editor
- [**Highlight.js**](https://highlightjs.org) – Syntax highlighting engine
- [**Flourite**](https://github.com/ryanmcgrath/flourite) – Programming language detection

### State Management & Utilities
- [**Zustand**](https://github.com/pmndrs/zustand) – Lightweight state management
- [**React Hot Toast**](https://react-hot-toast.com) – Toast notifications
- [**React Hotkeys Hook**](https://github.com/JohannesKlauss/react-hotkeys-hook) – Keyboard shortcuts
- [**CLSX**](https://github.com/lukeed/clsx) – Conditional class names

### Image Generation & Resizing
- [**HTML-to-Image**](https://github.com/bubkoo/html-to-image) – DOM to image conversion
- [**Re-Resizable**](https://github.com/bokuweb/re-resizable) – Resizable components
- [**React Resizable**](https://github.com/react-grid-layout/react-resizable) – Resizable containers

### Development Tools
- [**ESLint**](https://eslint.org) – Code linting with Next.js, Prettier, and Tailwind plugins
- [**Prettier**](https://prettier.io) – Code formatting
- [**PostCSS**](https://postcss.org) – CSS processing

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/snippix.git
   cd snippix
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install --legacy-peer-deps
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
snippix/
├── app/                    # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main application page
├── components/            # React components
│   ├── controls/          # Control panel components
│   │   ├── BackgroundSwitch.tsx
│   │   ├── DarkModeSwitch.tsx
│   │   ├── ExportOptions.tsx
│   │   ├── FontSelect.tsx
│   │   ├── FontSizeInput.tsx
│   │   ├── LanguageSelect.tsx
│   │   ├── PaddingSlider.tsx
│   │   └── ThemeSelect.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── slider.tsx
│   │   └── switch.tsx
│   ├── CodeEditor.tsx     # Main code editor component
│   └── WidthMeasurement.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── store/                 # State management
│   └── use-preferences-store.ts
├── public/                # Static assets
├── options.ts             # Configuration (themes, fonts, languages)
└── package.json
```

---

## 🎯 Key Features Explained

### Theme System
The application includes 10 beautiful gradient themes:
- **Hyper**: Fuchsia to orange gradient with Atom One Dark syntax
- **Oceanic**: Green to purple gradient with Material Darker syntax
- **Candy**: Pink to indigo gradient with Chalk syntax
- **Sublime**: Rose to indigo gradient with GitHub Dark syntax
- **Horizon**: Orange to yellow gradient with Monokai Sublime syntax
- **Coral**: Blue to emerald gradient with Tokyo Night Dark syntax
- **Peach**: Rose to orange gradient with Zenburn syntax
- **Flamingo**: Pink gradient with Panda syntax
- **Gotham**: Dark gradient with Black Metal syntax
- **Ice**: Light gradient with Ashes syntax

### Font Collection
14 carefully selected monospace fonts optimized for code display:
- JetBrains Mono, Fira Code, Cascadia Code
- Victor Mono, Source Code Pro, IBM Plex Mono
- Roboto Mono, Ubuntu Mono, Space Mono
- Courier Prime, Anonymous Pro, Oxygen Mono
- Red Hat Mono, Inconsolata

### Language Support
Syntax highlighting for 40+ programming languages including:
- **Web**: JavaScript, TypeScript, HTML, CSS, SCSS
- **Backend**: Python, Java, C#, PHP, Ruby, Go, Rust
- **Systems**: C, C++, Swift, Kotlin, Objective-C
- **Functional**: Haskell, Elixir, Erlang, Clojure, Lisp
- **Data**: SQL, JSON, YAML, TOML, XML
- **Others**: Bash, PowerShell, Dockerfile, GraphQL, Markdown

---

## 🔧 Configuration

### URL Parameters
Share configurations via URL parameters:
- `code`: Base64 encoded code snippet
- `language`: Programming language
- `theme`: Theme name
- `fontStyle`: Font family
- `fontSize`: Font size
- `padding`: Padding amount
- `darkMode`: Dark mode toggle
- `showBackground`: Background visibility

Example:
```
https://snippix.vercel.app/?theme=hyper&language=javascript&fontSize=18
```

### Local Storage
User preferences are automatically saved to browser localStorage under the key `user-preferences`.

---

## 🔒 Security

This project has been updated to address security vulnerabilities:

- **Next.js 16.1.4**: Updated from 15.3.1 to resolve CVE-2025-55182 security vulnerability
- **Dependencies**: All dependencies are regularly updated to their latest secure versions
- **Build Process**: Automated security checks during deployment

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Highlight.js](https://highlightjs.org) for syntax highlighting
- [Radix UI](https://www.radix-ui.com) for accessible components
- [Tailwind CSS](https://tailwindcss.com) for styling utilities
- [Vercel](https://vercel.com) for hosting and deployment

---

## 📧 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

**Made with ❤️ for the developer community**