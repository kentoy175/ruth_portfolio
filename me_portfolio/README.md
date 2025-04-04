# Personal Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- Clean, modern design with a dark theme
- Responsive layout that works on all devices
- Sections for showcasing your intro, about, and contact information
- Social media links
- Customizable content

## Getting Started

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Profile Image
- Replace the placeholder image at `public/images/profile.jpg` with your own photo.

### Personal Information
- Edit `src/App.jsx` to update your name, title, and other personal information.
- Modify the about text to highlight your skills and experience.

### Styling
- All styling is done through CSS. The main styles are in `src/App.css`.
- Colors and other variables are defined in the `:root` selector in both CSS files.

### Social Media Links
- Update the social media links in the footer section of `src/App.jsx`.

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, which you can deploy to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.).

## License

MIT License

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
