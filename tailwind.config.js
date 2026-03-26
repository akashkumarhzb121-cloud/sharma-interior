/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        accent: ["'Playfair Display'", "serif"],
      },
      colors: {
        cream: { 50: "#fefdf8", 100: "#fdf9ec", 200: "#f9f0d0" },
        gold: { 300: "#d4af6e", 400: "#c49a4e", 500: "#b8862e" },
        sage: { 100: "#eef1ec", 200: "#d4ddd0", 400: "#8fa885" },
        charcoal: { 800: "#1a1a1a", 900: "#0f0f0f" },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'slide-in-left': 'slideInLeft 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
        'slide-in-down': 'slideInDown 0.6s ease forwards',
        'slide-in-up': 'slideInUp 0.8s ease forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'rotate-subtle': 'rotate-subtle 4s ease-in-out infinite',
        'blur-in': 'blur-in 0.6s ease forwards',
        'scale-up': 'scale-up 0.6s ease forwards',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'lift': 'lift 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scaleIn: {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196,154,78,0.3), 0 0 40px rgba(196,154,78,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(196,154,78,0.5), 0 0 60px rgba(196,154,78,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'rotate-subtle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'blur-in': {
          from: { backdropFilter: 'blur(0px)', opacity: '0' },
          to: { backdropFilter: 'blur(10px)', opacity: '1' },
        },
        'scale-up': {
          from: { transform: 'scale(0.9)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        lift: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0,0,0,0.08), 0 0 30px rgba(196,154,78,0.08)',
        'luxury-hover': '0 20px 60px rgba(0,0,0,0.12), 0 0 50px rgba(196,154,78,0.15)',
        'gold-glow': '0 0 20px rgba(196,154,78,0.3), 0 0 40px rgba(196,154,78,0.1)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        'luxury': '10px',
      },
    },
  },
  plugins: [],
};

