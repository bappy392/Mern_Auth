module.exports = {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    theme: {
        
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
};