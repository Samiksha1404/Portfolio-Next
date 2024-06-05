// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',

//     // Or if using `src` directory:
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     container: {
//       padding: {
//         DEFAULT: '15px',
//       },
//     },
//     screens: {
//       sm: '640px',
//       md: '768px',
//       lg: '960px',
//       xl: '1200px',
//     },
//     extend: {
//       colors: {
//         primary: '#131424',
//         secondary: '#393A47',
//         accent: '#F13024',
//       },
//       backgroundImage: {
//         explosion: 'url("/bg-explosion.png")',
//         circles: 'url("/bg-circles.png")',
//         circleStar: 'url("/circle-star.svg")',
//         site: 'url("/site-bg.svg")',
//       },
//       animation: {
//         'spin-slow': 'spin 6s linear infinite',
//       },
//       fontFamily: {
//         poppins: [`var(--font-poppins)`, 'sans-serif'],
//         sora: [`var(--font-sora)`, 'sans-serif'],
//       },
//     },
//   },
//   container: {
//     padding: {
//       DEFAULT: '15px',
//     },
//   },
//   plugins: [require('tailwind-scrollbar')],
// };



const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
              
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar'),
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
