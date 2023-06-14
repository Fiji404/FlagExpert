/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: 'Open Sans, sans-serif',
            colors: {
                primaryDark: '#111',
                primaryDarkTransparent: '#111',
                lightAccent: '#747474'
            }
        }
    },
    plugins: []
};
