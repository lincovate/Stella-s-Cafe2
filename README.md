# Stella's Café — React Vite Template

A modern restaurant landing page built with React, Vite, and React Router. This template includes a landing hero section, menu interactions, chef showcase, reservation form, and responsive navigation.

---

## 🚀 Project Overview

`Cafe_Demure` is a single-page React application designed as a café website template. It includes:

- Animated hero carousel
- Page routing with `react-router-dom`
- Interactive menu tabs and featured dish cards
- Chef showcase and brand storytelling
- Reservation form with client-side state handling
- Fully responsive layout using custom CSS and static assets
- Preloader experience and consistent header/footer layout

---

## 🧩 Built With

- React 19
- Vite
- React Router DOM
- ESLint
- Custom CSS styles

---

## 📁 Key Pages

- `/` — Home with hero, weekly specials, and featured menu items
- `/about` — About page with brand story and sponsor logos
- `/menu` — Menu page with rotating dish highlights and order interactions
- `/chefs` — Chef showcase with team profiles and cooking class section
- `/reservation` — Reservation page with booking form and contact details

---

## 🛠️ Setup & Installation

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal to view the site.

---

## 📦 Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the production assets
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint on the project files

---

## 📝 Notes

- The reservation form is currently front-end only and logs submission data to the console.
- Static image assets are served from `public/assets/images` and `public/assets/sponsors`.
- You can customize text, routes, and imagery by editing the files in `src/pages/`.

---

## 📌 Project Structure

- `src/App.jsx` — Main app component and route configuration
- `src/main.jsx` — React entry point
- `src/pages/` — Page components and styling
- `src/Preloader.jsx` — Loading screen component
- `src/styles.css` — Global application styles
- `public/` — Static assets and HTML template

---

## 💡 Customization

To adapt this template for a different café or restaurant:

1. Replace brand copy in `src/pages/` components
2. Swap image assets under `public/assets/images`
3. Edit the navigation menu in `src/pages/Navbar.jsx`
4. Update CSS styles in the page-specific stylesheet files

---

## License

MIT
