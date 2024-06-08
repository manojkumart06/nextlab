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
        'primary': '#64758B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '20px': ['20px', '28px'],
        '18px': ['18px', '22px'],
      },
      width: {
        '126px': '126px',
        '24px': '24px',
        '92px': '92px',
        '80px': '80px',
        '22px': '22px',
      },
      height: {
        '28px': '28px',
        '0px': '0px',
        '22px': '22px',
      },
      letterSpacing: {
        '-0.01em': '-0.01em',
      },
      inset: {
        '961px': '961px',
        '102px': '102px',
      },
      position: {
        'absolute': 'absolute',
      },
      borderWidth: {
        '1px': '1px',
      },
      rotate: {
        '90': '90deg',
      },
    },
  },
  plugins: [],
};
