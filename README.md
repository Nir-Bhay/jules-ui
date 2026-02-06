# Physiotherapy Health Clinic Website

## 🏥 Overview

This is a modern, responsive static website designed for a **Physiotherapy Health Clinic** in Bhopal, led by Dr. Akanksha Raj. The website showcases the clinic's services, expertise, and facilities, providing a seamless user experience for patients seeking antenatal, postnatal, and orthopedic physiotherapy care.

The site is built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**, featuring a clean, soothing design system using Teal Green and Soft Coral colors to reflect health and wellness.

## ✨ Key Features

*   **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
*   **Modern UI/UX:** Clean aesthetics with smooth scrolling, hover effects, and animations.
*   **Service Showcase:** Detailed sections for Antenatal Care, Postnatal Recovery, Orthopedic Care, and more.
*   **Appointment Booking:** Prominent Call-to-Action (CTA) buttons for booking appointments via phone or contact form.
*   **Testimonials:** Section to display patient reviews and trust indicators (Google Ratings).
*   **Gallery:** Visual tour of the clinic's facilities.
*   **Interactive Mobile Menu:** Easy-to-use navigation for mobile users.
*   **Location Integration:** Google Maps embed for easy clinic location finding.

## 🛠️ Technology Stack

*   **Core:** HTML5, CSS3, JavaScript (ES6+)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3.4)
*   **Icons:** [Font Awesome](https://fontawesome.com/) (v6.4)
*   **Fonts:** Google Fonts (Playfair Display, Montserrat, Open Sans, Lora)
*   **Build Tool:** NPM scripts for Tailwind CSS compilation.

## 📂 Project Structure

```
├── dist/
│   └── output.css      # Compiled CSS (Production ready)
├── src/
│   └── input.css       # Source CSS with Tailwind directives
├── about.html          # About Us page
├── contact.html        # Contact page
├── index.html          # Homepage
├── services.html       # Detailed Services page
├── script.js           # Main JavaScript file
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind configuration (colors, fonts, theme)
└── README.md           # Project documentation
```

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16 or higher recommended)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Nir-Bhay/jules-ui.git
    cd jules-ui
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Project

1.  **Start Tailwind CSS in Watch Mode:**
    To automatically recompile CSS as you make changes to HTML/JS files:
    ```bash
    npm run watch
    ```

2.  **Build for Production:**
    To generate the final optimized CSS file:
    ```bash
    npm run build
    ```

3.  **View the Website:**
    *   Simply open `index.html` in your web browser.
    *   OR use a live server extension (like Live Server in VS Code) for a better development experience.

## 🎨 Customization

The project uses a custom Tailwind configuration located in `tailwind.config.js`. You can easily modify the design system:

*   **Colors:** Edit the `theme.extend.colors` object to change `primary` (#008B8B), `secondary` (#FF7F7F), or other palette colors.
*   **Fonts:** Modify `theme.extend.fontFamily` to switch fonts.

Example `tailwind.config.js` snippet:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#008B8B' },
        secondary: { DEFAULT: '#FF7F7F' },
      }
    }
  }
}
```

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

**Physiotherapy Health Clinic**
*   **Location:** Katara Hills, Bhopal, MP
*   **Phone:** 087889 37598

---
*Built with ❤️ for better health.*
