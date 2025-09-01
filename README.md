# 💼 Yash Rajvanshi - Full Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Demo-Live-green)](https://devfolio-khaki.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-purple)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-cyan)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern, responsive, and accessible personal portfolio website built with React 19, Vite, and TailwindCSS. Features smooth animations, optimized performance, and professional design.

## ✨ Features

### 🎨 **Design & UX**
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 🚀 **Performance & Technical**
- **Fast Loading**: Optimized with Vite for lightning-fast development and builds
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Error Handling**: Error boundaries for graceful error management
- **Lazy Loading**: Images and components load efficiently
- **Performance Monitoring**: Built-in performance optimizations

### 📱 **Interactive Elements**
- **Smooth Scrolling**: Enhanced navigation experience
- **Scroll to Top**: Convenient navigation button
- **Contact Form**: EmailJS integration for seamless communication
- **Social Links**: Direct links to professional profiles
- **Project Showcase**: Detailed project presentations with live links

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React | 19.0.0 |
| **Build Tool** | Vite | 6.3.1 |
| **Styling** | TailwindCSS | 3.4.17 |
| **Animations** | Framer Motion | 12.9.2 |
| **Icons** | React Icons / Lucide | 5.5.0 / 0.503.0 |
| **Email Service** | EmailJS | 4.4.1 |
| **Deployment** | Vercel | - |
| **Linting** | ESLint | 9.22.0 |

## 🌐 Live Preview

👉 **[View Live Portfolio](https://devfolio-khaki.vercel.app/)**

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yash-rajvanshi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   cp env.example .env
   
   # Add your EmailJS credentials
   VITE_NEXT_PUBLIC_SERVICE_ID=your_service_id
   VITE_NEXT_PUBLIC_TEMPLATE_ID=your_template_id
   VITE_NEXT_PUBLIC_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   └── yashResume.pdf     # Resume file
├── src/
│   ├── assets/            # Images and media
│   │   ├── projects/      # Project screenshots
│   │   └── *.png          # Profile and logo images
│   ├── components/        # React components
│   │   ├── Con.jsx        # Contact form
│   │   ├── Contact.jsx    # Contact information
│   │   ├── ErrorBoundary.jsx # Error handling
│   │   ├── Experience.jsx # Work experience
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navbar.jsx     # Navigation
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── ScrollToTop.jsx # Scroll to top button
│   │   └── Technologies.jsx # Skills section
│   ├── constants/         # Data and configuration
│   │   └── index.js       # Content data
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/constants/index.js`:

```javascript
export const HERO_CONTENT = `Your personal description...`;
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Your Role",
    company: "Your Company",
    description: "Your experience description...",
    technologies: ["React", "Node.js", "MongoDB"]
  }
];
```

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font families in Tailwind config
- **Animations**: Customize Framer Motion animations in components

### Content

- **Projects**: Add/remove projects in `constants/index.js`
- **Skills**: Update technology icons in `Technologies.jsx`
- **Contact**: Modify contact information and form fields

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Push code to GitHub
   - Connect repository to Vercel

2. **Configure environment variables**
   - Add EmailJS credentials in Vercel dashboard

3. **Deploy**
   - Vercel will automatically deploy on push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy `dist` folder
- **GitHub Pages**: Configure GitHub Actions for automatic deployment
- **Firebase**: Use Firebase Hosting with `firebase deploy`

## ⚡ Performance

### Optimizations Implemented

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Lazy loading and proper sizing
- **Bundle Analysis**: Built-in with Vite
- **Caching**: Proper cache headers and service workers
- **Minification**: Automatic in production builds

### Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow ESLint rules
- Write meaningful commit messages
- Test on multiple devices
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Portfolio**: [https://devfolio-khaki.vercel.app/](https://devfolio-khaki.vercel.app/)
- **LinkedIn**: [Yash Rajvanshi](https://www.linkedin.com/in/yash-rajvanshi/)
- **GitHub**: [@yash-rajvanshi](https://github.com/yash-rajvanshi/)
- **Email**: [Contact via Portfolio](https://devfolio-khaki.vercel.app/)

---

⭐ **Star this repository if you found it helpful!**
