# Angel Gonzalez - Personal Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS, and shadcn/ui components. This portfolio showcases professional experience, projects, achievements, and global experiences with a focus on data analysis, social impact, and international collaboration.

## 🌟 Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Bilingual Support**: English and Spanish language toggle
- **Modern UI**: Clean, minimalist design with shadcn/ui components
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Professional Sections**:
  - Home with professional introduction
  - Experience & Education timeline
  - Projects showcase with technology tags
  - Achievements & Awards with interactive cards
  - Travel & Volunteering experiences
  - Contact form with social links

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   └── textarea.jsx
│   ├── Navbar.jsx          # Navigation component
│   ├── Home.jsx            # Hero section
│   ├── Experience.jsx      # Experience & Education
│   ├── Projects.jsx        # Projects showcase
│   ├── Achievements.jsx    # Awards & Recognition
│   ├── Travel.jsx          # Travel & Volunteering
│   └── Contact.jsx         # Contact form
├── lib/
│   └── utils.js            # Utility functions
├── App.js                  # Main app component
├── index.js                # App entry point
└── index.css               # Global styles with Tailwind
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Home.jsx** - Update name, title, and bio
2. **Experience.jsx** - Modify work experience and education
3. **Projects.jsx** - Add your projects and technologies
4. **Achievements.jsx** - Update awards and recognitions
5. **Travel.jsx** - Add your travel and volunteering experiences
6. **Contact.jsx** - Update contact information

### Styling

The portfolio uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font families and sizes in the config
- **Animations**: Adjust Framer Motion animations in individual components

### Content Management

All content is managed through the `content` objects in each component, making it easy to update text in both English and Spanish.

## 🌐 Deployment

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add homepage to package.json**
   ```json
   "homepage": "https://yourusername.github.io/personal-portfolio"
   ```

3. **Add deploy scripts to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy!

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌍 Internationalization

The portfolio supports both English and Spanish with:

- Language toggle in the navigation
- Persistent language preference (localStorage)
- Complete content translation for all sections

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Angel Gonzalez - [LinkedIn](https://linkedin.com/in/angel-gonzalez) - angel.gonzalez@email.com

Project Link: [https://github.com/angel-gonzalez/personal-portfolio](https://github.com/angel-gonzalez/personal-portfolio)

---

⭐ Don't forget to give this project a star if you found it helpful!
