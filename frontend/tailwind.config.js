/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#0B5FFF',
          secondary: '#6c757d',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': 'var(--bg)',
          'base-200': 'var(--surface)',
          'base-300': 'var(--muted)',
          'base-content': 'var(--text)',
        },
      },
      {
        dark: {
          primary: '#60A5FA',
          secondary: '#6c757d',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': 'var(--bg)',
          'base-200': 'var(--surface)',
          'base-300': 'var(--muted)',
          'base-content': 'var(--text)',
        },
      },
      {
        'eye-care': {
          primary: '#926A3D',
          secondary: '#6c757d',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': 'var(--bg)',
          'base-200': 'var(--surface)',
          'base-300': 'var(--muted)',
          'base-content': 'var(--text)',
        },
      },
    ],
  },
};
