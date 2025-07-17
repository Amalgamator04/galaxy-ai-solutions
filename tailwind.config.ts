import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dim: 'hsl(var(--primary-dim))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				cosmic: {
					blue: 'hsl(var(--cosmic-blue))',
					purple: 'hsl(var(--cosmic-purple))',
					pink: 'hsl(var(--cosmic-pink))',
					teal: 'hsl(var(--cosmic-teal))',
					gold: 'hsl(var(--cosmic-gold))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				space: ['Space Grotesk', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			backgroundImage: {
				'cosmic-gradient': 'var(--gradient-cosmic)',
				'galaxy-gradient': 'var(--gradient-galaxy)',
				'aurora-gradient': 'var(--gradient-aurora)',
				'sunset-gradient': 'var(--gradient-sunset)',
				'night-gradient': 'var(--gradient-night)'
			},
			boxShadow: {
				'cosmic': 'var(--shadow-cosmic)',
				'glow': 'var(--shadow-glow)',
				'aurora': 'var(--shadow-aurora)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'cosmic-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'aurora-wave': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'25%': { backgroundPosition: '100% 0%' },
					'50%': { backgroundPosition: '0% 100%' },
					'75%': { backgroundPosition: '100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'meteor': {
					'0%': { transform: 'translateX(-100px) translateY(-100px) rotate(45deg)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateX(100vw) translateY(100vh) rotate(45deg)', opacity: '0' }
				},
				'day-night-cycle': {
					'0%': { transform: 'translateX(-100vw) rotate(-90deg)' },
					'25%': { transform: 'translateX(25vw) rotate(0deg)' },
					'50%': { transform: 'translateX(50vw) rotate(45deg)' },
					'75%': { transform: 'translateX(75vw) rotate(90deg)' },
					'100%': { transform: 'translateX(200vw) rotate(180deg)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cosmic-flow': 'cosmic-flow 6s ease-in-out infinite',
				'aurora-wave': 'aurora-wave 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite 2s',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'meteor': 'meteor 3s linear infinite',
				'day-night-cycle': 'day-night-cycle 60s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
