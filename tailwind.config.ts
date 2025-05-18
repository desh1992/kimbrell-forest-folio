
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
    fontFamily: {
      'serif': ['Playfair Display', 'serif'],
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
    },
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
        'forest': {
          900: '#254D32',
          800: '#375341',
          700: '#406447',
          600: '#618C5F'
        }, // forest green palette
        'beige': '#F7F6F2',
        'softwhite': '#F9FAF9',
        'muted': '#AABB9B',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
        primary: {
					DEFAULT: '#254D32',
					foreground: '#fff'
				},
        accent: {
          DEFAULT: '#b5baa7'
        }
			},
			borderRadius: {
				'xl': '1.25rem',
				lg: '1rem',
				md: '0.5rem',
				sm: '0.25rem',
        DEFAULT: '1rem'
			},
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(.29,.71,.43,.98) both'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
