import { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.tsx', './index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primaryDark: '#111',
                primaryLight: '#fff',
                accentDark: '#747474',
                accentLight: '#d9d9d9'
            },
            keyframes: {
                originate: {
                    '100%': { opacity: '1' }
                }
            }
        }
    },
    plugins: []
} satisfies Config;
