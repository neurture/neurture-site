// postcss.config.js  – minimal, Hugo-friendly
const tailwindcss = require("@tailwindcss/postcss"); // Tailwind 4 CJS wrapper
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
