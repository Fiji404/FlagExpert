import { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primaryDark: '#111',
                primaryLight: '#fff',
                accentDark: '#747474'
            }
        }
    },
    plugins: []
} satisfies Config;
