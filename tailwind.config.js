/** @type {import('tailwindcss').Config} */

const ICON_SIZE = 60;

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      // Modern slate color palette
      slate: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        850: '#152033',
        900: '#0F172A',
        950: '#020617',
      },
      // Primary brand color (Indigo)
      primary: {
        50: '#EEF2FF',
        100: '#E0E7FF',
        200: '#C7D2FE',
        300: '#A5B4FC',
        400: '#818CF8',
        500: '#6366F1',
        600: '#4F46E5',
        700: '#4338CA',
        800: '#3730A3',
        900: '#312E81',
      },
      // Secondary accent (Purple)
      accent: {
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95',
      },
      // Success (Emerald)
      success: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
      },
      // Danger (Red)
      danger: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
      // Legacy colors (kept for backward compatibility)
      black: {
        DEFAULT: '#000000',
        'base': '#1E293B',
        'dark': '#0F172A',
        'darker': '#020617',
        'darkest': '#020617',
      },
      yellow: '#FBBF24',
      red: '#EF4444',
      green: '#10B981',
    },
    extend: {
      spacing: {
        'header-height': '60px',
        'menu-height': '64px',
        'icon-size': `${ICON_SIZE}px`,
        'wrap-space': '16px',
      },
      width: {
        'popup': 'calc(100% - 32px)',
        'card-content': `calc(100% - ${ICON_SIZE}px)`,
      },
      maxWidth: {
        'container': '600px',
        'popup': '500px',
      },
      maxHeight: {
        'popup': 'calc(100% - 32px)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'input': '0px 0px 0px 0.15rem rgba(99, 102, 241, 0.5)',
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-surface': 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        'search-section': '3000',
        'rescord-section': '4000',
        'popup': '5500',
      },
    },
  },
};
