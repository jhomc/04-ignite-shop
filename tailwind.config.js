/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'white': '#FFF',

        'gray900': '#121214',
        'gray800': '#202024',
        'gray300': '#c4c4cc',
        'gray100': '#e1e1e6',

        'green500': '#00875f',
        'green300': '#00b37e',

        'greenGradient': '#1ea483',
        'blueGradient': '#7465d4',
        'blackGradient': 'rgba(0, 0, 0, 0.6)'
      },
      maxWidth: {
        'homeCalc': 'calc(100vw - ((100vw - 1180px) / 2))'
      },
      height: {
        'productCalc': 'calc(656px - 0.5rem)'
      },
      fontSize: {
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      }
    },

  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif']
  },
  plugins: [],
}
