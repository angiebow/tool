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
        'slate-gray': '#708090',
        'toolbeng-blue' : '#0A3771',
        'toolbeng-red' : '#AD4043',
      },
      fontSize: {
        'aSize' : '14px',
        'kSize' : '16px',
        'sSize' : '18px',
        'mSize' : '20px',
        'nSize' : '24px',
        'rSize' : '32px',
        'lSize' : '64px',
        'xSize' : '48px',
        'hSize' : '56px',
      },
    },
  },
  plugins: [],
}
