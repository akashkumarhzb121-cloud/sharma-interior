# Sharma Interior - Interior Design Portfolio

A modern, responsive web application showcasing interior design projects and services. Built with React, Vite, and Tailwind CSS. Deployed on Vercel.

![React](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-8.0-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎨 Features

- **Portfolio Gallery** - Showcase interior design projects with before/after images
- **Project Details** - Detailed project pages with client feedback and specifications
- **Services** - Display services offered (living rooms, kitchens, offices, etc.)
- **About Page** - Company information and team details
- **Contact Form** - Client inquiry submission
- **Special Offers** - Promotional content and deals
- **Authentication** - Secure login system
- **Dashboard** - Admin panel for managing projects and inquiries
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Fast Performance** - Built with Vite for optimized build times

---

## 📁 Project Structure

```
project-sharma-interior/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── OffersPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── AuthPage.jsx
│   │   └── DashboardPage.jsx
│   ├── data/               # Data and constants
│   │   └── index.js        # Projects and content data
│   ├── App.jsx             # Main App component with routing
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── .gitignore              # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/project-sharma-interior.git
   cd project-sharma-interior
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (if needed)
   ```bash
   cp .env.example .env.local
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

---

## 🛠 Technologies Used

### Core
- **React** (19.2.4) - UI library
- **React Router DOM** (7.13.2) - Client-side routing
- **Vite** (8.0.1) - Build tool and development server

### Styling
- **Tailwind CSS** (3.4.19) - Utility-first CSS framework
- **PostCSS** (8.5.8) - CSS processor
- **Autoprefixer** (10.4.27) - Vendor prefixes

### Icons
- **Lucide React** (1.6.0) - Icon library

### Development Tools
- **ESLint** (9.39.4) - Code linting
- **@vitejs/plugin-react** (6.0.1) - React plugin for Vite
- **TypeScript Types** - Type definitions for React

---

## 📋 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About company |
| `/services` | Services offered |
| `/projects` | Portfolio gallery |
| `/projects/:id` | Project detail page |
| `/offers` | Special offers |
| `/contact` | Contact form |
| `/auth` | Login/Authentication |
| `/dashboard` | Admin dashboard |

---

## 🌐 Deployment

### Vercel

The project is configured for Vercel deployment:

1. **Connect repository** to Vercel
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy:**
   ```bash
   vercel
   ```

### Environment Variables

For production, configure these in your Vercel project settings (if needed):
```
VITE_API_URL=your_api_url_here
```

---

## 📝 Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

---

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📦 Project Data

Project data is located in `src/data/index.js` and includes:
- Project showcase with images
- Client testimonials and ratings
- Budget and timeline information
- Location and area details
- Project categories and styles

To add new projects, update the `projects` array in the data file.

---

## 🔐 Security Notes

- Keep `.env.local` in `.gitignore` (already configured)
- Verify authentication implementation in production
- Validate all user inputs in forms
- Use HTTPS for all connections

---

## 📞 Contact & Support

For project inquiries or support, use the contact form on the website.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 About

**Sharma Interior** - Professional interior design services in Mumbai, Maharashtra.

---

**Last Updated:** March 25, 2026  
**Deployment:** Vercel  
**Status:** Active
