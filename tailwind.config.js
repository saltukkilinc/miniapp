/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#F9FBFF',
        'primary': '#701ADF',
        'secondary': '#7BDFEE',
        'primary-text': '#343840',
        'secondary-text': '#8C909D',
        'disabled-text': '#8A8A8A',
        'disabled-button': '#D3D3D3',
        'border-primary': '#CCDAFB',
        'border-secondary': '#E6EAF6',
        'mercan-green': '#2ED6AD',
        'mercan-red': '#EB5757',
      },
    },
  },
  plugins: [],
};
