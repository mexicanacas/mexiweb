/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#eef2ce',
        secondary: '#8fa690',
        'mexi-black': '#020d05',
      },
      textColor: {
        primary: '#01261c',
        secondary: '#eef2ce',
      },
      backgroundColor: {
        primary: '#eef2ce',
        secondary: '#8fa690',
        'mexi-black': '#020d05',
      },
      spacing: {
        header: '80px',
        'logo-big': '160px',
      },
    },
  },
  plugins: [],
};
