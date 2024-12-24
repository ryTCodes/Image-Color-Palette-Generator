/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/*html"],
    theme: {
        extend: {
            colors: {
                lavender: {
                    mist: '#F5EFFF',
                    gray: '#E5D9F2',
                    light: '#CDC1FF',
                },
                dark: {
                    charcoal: '#121212',
                    grey: '#1E1E1E',
                    slate: '#2E2E2E',
                },
                offWhite: '#F5EFE7',
                beige: '#D8C4B6',
                purple: {
                    soft: '#A294F9',
                    medium: '#7D6ED5',
                    royal: '#6A4BBC',
                    ice: '#C4B4E5',
                    amethyst: '#8E7CC3',
                }
            },
        },
    },
    plugins: [],
}
