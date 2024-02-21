import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        'h1': '36px',
        'h4':'20px',
        'th1': '58px',
        'tbase': '24px',
        'wh1': '48px',
        'wh2': '32px',
      },
      height: {
        '65': '65vh',
        '90': '90%',
      },
      width: {
        '197': '197px',
      },
      colors: {
        blue: '#1FCBFF',
        red: '#C41C4C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'collie': "url('/home/collie.png')",
        'bone': "url('/list/bonebg.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
            '100%': '100%',
      },
      backgroundPosition: {
        'bottom-right': 'calc(100%) 10px',
        'bottom-right-md': 'calc(100%) 160px',
        'bottom-right-lg': 'calc(100%) 10px',
      },
      borderRadius: {
        'xl': '100px',
        'button': '20px',
        '2xl': '300px',
        '3xl': '500px',
      },
      margin: {
        'neg2': '-2rem',
        'neg5': '-5rem',
      },
      truncate: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },
  plugins: [],
}
export default config
