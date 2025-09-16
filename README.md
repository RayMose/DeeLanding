# DeeLanding - DJ Website

A modern, responsive DJ website built with React, TypeScript, and Vite. This project showcases a professional DJ's portfolio with sections for mixes, events, about information, and contact details.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Navigation with smooth scrolling
  - Hero section with engaging visuals
  - Mix showcase section
  - Event listings
  - About section
  - Contact form
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 5.1.5
- **Styling**: 
  - Tailwind CSS (with custom animations)
  - Material-UI (MUI) 5.15.11
  - Emotion for styled components
- **Form Handling**: Formik with Yup validation
- **Animations**: Framer Motion 11.0.8
- **Media Player**: React Player 2.15.1
- **Fonts**: Roboto (via Fontsource)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RayMose/DeeLanding.git
   cd DeeLanding
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 📁 Project Structure

```
DeeLanding/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navigation/      # Navigation component
│   │   ├── Hero/           # Hero section component
│   │   ├── MixSection/     # Mix showcase component
│   │   ├── EventSection/   # Events display component
│   │   ├── About/          # About section component
│   │   ├── Contact/        # Contact form component
│   │   └── Footer/         # Footer component
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   └── theme.ts            # Material-UI theme configuration
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── eslint.config.js        # ESLint configuration
```

## 🎨 Customization

### Theme
The project uses a custom Material-UI theme defined in `src/theme.ts`. You can modify colors, typography, and other design tokens there.

### Styling
- **Tailwind CSS**: Used for utility-first styling and responsive design
- **Material-UI**: Provides pre-built components with consistent design
- **Custom CSS**: Additional styles in `src/index.css`

### Content
Update the content in each component file to match your DJ brand:
- Hero section: Update name, tagline, and background
- Mix section: Add your latest mixes and tracks
- Events: Update with your upcoming gigs and events
- About: Personalize with your DJ story and experience
- Contact: Update contact information and social links

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Any static hosting**: Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Built with ❤️ for the DJ community**
