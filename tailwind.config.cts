// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xl: { min: "1380px" },
            lg: { min: "1024px" },
            md: { min: "768px" },
            sm: { min: "640px" },
        },
    },
    plugins: [],
};

export default config;
