import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#EEF2CE',
        secondary: '#8FA690',
        'mexi-black': '#101010',
      },
      textColor: {
        primary: '#01261C',
        secondary: '#EEF2CE',
      },
      spacing: {
        header: '80px',
        'logo-big': '160px',
      },
    },
  },
  plugins: [],
};
export default config;
