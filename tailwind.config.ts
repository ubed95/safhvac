import type { Config } from 'tailwindcss';
import TailwindTypography from '@tailwindcss/typography';
import daisyUI from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '100%': { backgroundPosition: 'bottom right' }
        }
      },
      animation: {
        'fadeImage': 'fadeOut 10s linear infinite alternate'
      },
      transitionProperty: {
        'max-height': 'max-height',
        'max-width': 'max-width',
        'rows': 'grid-template-rows'
      },
      backgroundImage: {
        testimonials: `
        url('./assets/test-bg.webp'),
          linear-gradient(#0e1d41, #0e1d41)
        `,
      }
    },
  },
  plugins: [TailwindTypography, daisyUI],
  daisyui: {
    themes: ['acid','synthwave']
  }
} satisfies Config

