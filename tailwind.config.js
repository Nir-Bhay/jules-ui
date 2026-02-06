/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008B8B', // Teal Green
          light: '#20B2AA',   // Soft Teal for gradient
          dark: '#006666',    // Dark Teal for footer
          deep: '#004D4D',    // Deep Teal for footer
        },
        secondary: {
          DEFAULT: '#FF7F7F', // Soft Coral
          warm: '#FF6B6B',    // Warm Coral for gradient
        },
        accent: {
          DEFAULT: '#D4AF37', // Warm Gold
        },
        bg: {
          primary: '#FFFFFF', // Pure White
          secondary: '#FFF8F0', // Soft Cream
          tertiary: '#E8F5F5', // Light Mint
        },
        text: {
          primary: '#2C3E50', // Dark Charcoal
          secondary: '#6C757D', // Medium Gray
        },
        success: '#28A745',
        trust: '#4A90A4',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #008B8B 0%, #20B2AA 100%)',
        'cta-gradient': 'linear-gradient(to right, #FF7F7F, #FF6B6B)',
        'footer-gradient': 'linear-gradient(to right, #006666, #004D4D)',
        'card-hover': 'linear-gradient(to bottom, #FFFFFF, #E8F5F5)',
      },
      boxShadow: {
        'scroll': '0 4px 20px rgba(0,0,0,0.1)',
        'card': '0 10px 40px rgba(0,0,0,0.08)',
        'button': '0 4px 15px rgba(255,127,127,0.3)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px', // Adjusted to match spec approx
          '2xl': '1320px',
        },
      }
    },
  },
  plugins: [],
}
