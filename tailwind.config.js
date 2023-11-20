/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        screens: {
          xs: "375px",
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',
          '2xl': '1280px'
        }
      },
      colors: {
        primary: '#0a0f1d',
        secondary: "#f0bc2e",
        section_color: "#0a111e",
        text_color: "#9ca3af"
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        dancing: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}