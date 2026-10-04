/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{astro,html,js,jsx,ts,tsx,vue}',
        './components/**/*.{astro,html,js,jsx,ts,tsx,vue}',
        './layouts/**/*.{astro,html,js,jsx,ts,tsx,vue}',
        './styles/**/*.{css}', // Pour scanner ton global.css
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
