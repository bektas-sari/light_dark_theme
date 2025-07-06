# 📰 Modern Responsive Blog Page (Light - Dark Theme Option)

A visually appealing, fully responsive blog landing page with light and dark theme support. 
Built using semantic HTML5, modern CSS, and vanilla JavaScript, this single-page project demonstrates good practices in UI/UX design, accessibility, and theming.

---

## 🌟 Features

* 📱 **Responsive Design** — Works seamlessly on desktops, tablets, and mobile devices.
* 🌗 **Light/Dark Theme Toggle** — Easily switch between light and dark modes with smooth transitions.
* 🔍 **Search UI** — A simple search input and button for interface demonstration.
* 📰 **Grid-Based Blog Layout** — Three featured articles presented with image, category, title, and description.
* ⭐ **Featured Sidebar** — Highlighted articles in a compact, scroll-friendly sidebar.
* 💾 **Theme Persistence** — Saves user theme preference in `localStorage`.

---

## 📁 File Structure

```
project-folder/
├── index.html       # HTML markup
├── style.css        # CSS styling with theme variables
├── script.js        # JavaScript for theme toggle and persistence
```

---

## 🚀 Getting Started

1. **Clone the repository or download the ZIP.**
2. Open `index.html` in your browser.

No build tools or installations are required — it's 100% static.

---

## 🌙 Theme Toggle Mechanism

The theme toggle button is fixed to the top-right corner of the viewport. When clicked, it:

* Adds or removes the `.dark-theme` class to the `<body>`
* Updates the button text and emoji (☀️ or 🌙)
* Stores the preference in `localStorage` so the theme persists on reload

### Example (from `script.js`):

```js
function toggleTheme() {
  const isDark = !document.body.classList.contains('dark-theme');
  setTheme(isDark);
}
```

---

## 🧪 Browser Compatibility

Tested on:

* Chrome (latest)
* Firefox
* Edge
* Safari (macOS/iOS)

---

## 👤 Developer

**Bektas Sari**
Email: [bektas.sari@gmail.com](mailto:bektas.sari@gmail.com)
GitHub: [https://github.com/bektas-sari](https://github.com/bektas-sari)
LinkedIn: [www.linkedin.com/in/bektas-sari](http://www.linkedin.com/in/bektas-sari)
ResearchGate: [https://www.researchgate.net/profile/Bektas-Sari-3](https://www.researchgate.net/profile/Bektas-Sari-3)
Academia: [https://independent.academia.edu/bektassari](https://independent.academia.edu/bektassari)

---

## 📄 License

This project is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT).
