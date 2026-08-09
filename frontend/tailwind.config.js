/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Libre Caslon Text"', 'serif'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.05', 
                    letterSpacing: '-0.025em', fontWeight: '800' }],
        'title':   ['42px', { lineHeight: '1.1',  
                    letterSpacing: '-0.02em',  fontWeight: '700' }],
        'heading': ['30px', { lineHeight: '1.2',  
                    letterSpacing: '-0.01em',  fontWeight: '700' }],
        'subhead': ['22px', { lineHeight: '1.3',  fontWeight: '600' }],
      },
      colors: {
        border:     'var(--color-border)',
        input:      'var(--color-border)',
        ring:       'var(--color-primary)',
        background: 'var(--color-background)',
        foreground: 'var(--text-primary)',
        primary: {
          DEFAULT:    'var(--color-primary)',
          hover:      'var(--color-primary-hover)',
          active:     'var(--color-primary-active)',
          soft:       'var(--color-primary-soft)',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT:    'var(--color-surface-raised)',
          foreground: 'var(--text-secondary)',
        },
        destructive: {
          DEFAULT:    'var(--color-danger)',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT:    'var(--color-surface)',
          foreground: 'var(--text-muted)',
        },
        accent: {
          DEFAULT:    'var(--color-primary-soft)',
          foreground: 'var(--color-primary)',
        },
        popover: {
          DEFAULT:    'var(--color-card)',
          foreground: 'var(--text-primary)',
        },
        card: {
          DEFAULT:    'var(--color-card)',
          foreground: 'var(--text-primary)',
        },
        surface: {
          DEFAULT:    'var(--color-surface)',
          dark:       'var(--color-surface-dark)',
          raised:     'var(--color-surface-raised)',
        },
        success: {
          DEFAULT:    'var(--color-success)',
          foreground: '#FFFFFF',
        },
        warning: {
          DEFAULT:    'var(--color-warning)',
          foreground: '#FFFFFF',
        },
        info: {
          DEFAULT:    'var(--color-info)',
          foreground: '#FFFFFF',
        },
        sidebar: {
          DEFAULT:              'rgb(var(--sidebar-background))',
          foreground:           'rgb(var(--sidebar-foreground))',
          primary:              'rgb(var(--sidebar-primary))',
          'primary-foreground': 'rgb(var(--sidebar-primary-foreground))',
          accent:               'rgb(var(--sidebar-accent))',
          'accent-foreground':  'rgb(var(--sidebar-accent-foreground))',
          border:               'rgb(var(--sidebar-border))',
          ring:                 'rgb(var(--sidebar-ring))',
        },
        'brand-navy': '#0B1B3D',
        'brand-coral': '#F06E5D', // Updated to Soft Coral as requested
        'brand-cream': '#FBF9F8', // Added off-white/cream for soft human feel
      },
      borderRadius: {
        lg:   'var(--radius-lg)',
        md:   'var(--radius-md)',
        sm:   'var(--radius-sm)',
        xl:   'var(--radius-xl)',
        '2xl':'var(--radius-2xl)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'fade-up':        'fade-up 0.4s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':        'fade-in 0.3s ease both',
        'marquee':        'marquee 80s linear infinite',
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}
