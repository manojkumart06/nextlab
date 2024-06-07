/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-gray': '#5A5A62',
        'custom-black': '#252424',
        'grey-85': '#CBD8E9',
        'primary': '#64758B', // Added custom primary color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '20px': ['20px', '28px'],
        '18px': ['18px', '22px'], // Added custom font size
      },
      width: {
        '126px': '126px',
        '24px': '24px',
        '92px': '92px', // Added custom width
        '80px': '80px', // Added custom width
        '22px': '22px', // Added custom width
      },
      height: {
        '28px': '28px',
        '0px': '0px',
        '22px': '22px', // Added custom height
      },
      letterSpacing: {
        '-0.01em': '-0.01em', // Added custom letter spacing
      },
      inset: {
        '961px': '961px',
        '102px': '102px', // Added custom inset
      },
      position: {
        'absolute': 'absolute', // Added custom position
      },
      borderWidth: {
        '1px': '1px', // Added custom border width
      },
      rotate: {
        '90': '90deg', // Added custom rotation
      }
    },
  },
  plugins: [],
};
