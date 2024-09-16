import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
            boxShadow: {
                'custom-shadow': '0px 0px 4px 0px #0000001F',
                'custom-shadow-large': '0px 0px 14px 0px #0033440F', // Added new shadow
            },
        },
    },
    plugins: [],
};

export default config;
