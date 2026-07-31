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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)",
        input: "var(--color-border)",
        ring: "var(--color-primary)",
        background: "var(--color-background)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          soft: "var(--color-primary-soft)",
          foreground: "var(--text-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--text-secondary)",
        },
        destructive: {
          DEFAULT: "var(--color-danger)",
          foreground: "var(--text-primary)",
        },
        muted: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--text-primary)",
        },
        popover: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--text-primary)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--text-primary)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          foreground: "var(--text-primary)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          foreground: "var(--text-primary)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          foreground: "var(--text-primary)",
        }
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
