/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-lato)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-merriweather)', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          green: '#3FB281',
          'green-light': '#43C78F',
          'bg-dark': '#140F35',
          'bg-mid': '#171047',
          'bg-light': '#30377F',
          'circle-dark': '#EDE0D0',
          'circle-mid': '#FFF2E3',
          'circle-light': '#FFFBF5',
        },
      },
    },
  },
  plugins: [],
}