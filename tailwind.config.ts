import { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primaryDark: '#111',
                primaryLight: '#fff',
                accentDark: '#747474',
                accentLight: '#d9d9d9'
            },
            animation: {
                flip: 'flip 1s forwards'
            },
            keyframes: {
                originate: {
                    '100%': { opacity: '1' }
                },
                flip: {
                    '50%': { translate: '0 -10px', rotate: 'y 180deg', backgroundColor: '#233a21' },
                    '100%': { translate: '0 0px', rotate: 'y 0deg', backgroundColor: '#233a21' }
                }
            }
        }
    },
    plugins: []
} satisfies Config;
