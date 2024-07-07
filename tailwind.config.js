/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'serif'],
        mono: ['Inter', 'monospace'],
      },
      colors: {
        general: {
          dark: '#131523',
          purpleHigh: '#333752',
          purpleMid: '#5A607F',
          purple: '#7E84A3',
          purpleLow: '#A1A7C4',
          cyanHigh: '#D7DBEC',
          cyanMid: '#E6E9F4',
          cyanLow: '#F5F6FA',
        },
        primary: {
          blueHigh: '#1E5EFF',
          blueMid: '#336DFF',
          blue: '#4F81FF',
          blueLow: '#608DFF',
        },
        secondary: {
          purpleHigh: '#1E5EFF',
          purpleMid: '#336DFF',
          purple: '#4F81FF',
          purpleLow: '#608DFF',
        },
        red: {
          redHigh: '#F0142F',
          redMid: '#F12B43',
          red: '#F34359',
          redLow: '#F45A68',
          redExtralow: '#F8919D',
        },
        green: {
          greenHigh: '#06A561',
          greenMid: '#1FD286',
          green: '#48E9A5',
          greenLight: '#74EFB9',
        },
        yellow: {
          yellowHigh: '#F99600',
          yellowMid: '#FFC700',
          yellow: '#FFD613',
          yellowLow: '#FFE45F',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-general-dark': {
          color: theme('colors.general.dark')
        },
        '.text-general-purpleHigh': {
          color: theme('colors.general.purpleHigh')
        },
        '.text-general-purpleMid': {
          color: theme('colors.general.purpleMid')
        },
        '.text-general-purple': {
          color: theme('colors.general.purple')
        },
        '.text-general-purpleLow': {
          color: theme('colors.general.purpleLow')
        },
        '.text-general-cyanHigh': {
          color: theme('colors.general.cyanHigh')
        },
        '.text-general-cyanMid': {
          color: theme('colors.general.cyanMid')
        },
        '.text-general-cyanLow': {
          color: theme('colors.general.cyanLow')
        },

        '.text-primary-blueHigh': {
          color: theme('colors.primary.blueHigh')
        },
        '.text-primary-blueMid': {
          color: theme('colors.primary.blueMid')
        },
        '.text-primary-blue': {
          color: theme('colors.primary.blue')
        },
        '.text-primary-blueLow': {
          color: theme('colors.primary.blueLow')
        },

        '.text-secondary-purpleHigh': {
          color: theme('colors.secondary.purpleHigh')
        },
        '.text-secondary-purpleMid': {
          color: theme('colors.secondary.purpleMid')
        },
        '.text-secondary-purple': {
          color: theme('colors.secondary.purple')
        },
        '.text-secondary-purpleLow': {
          color: theme('colors.secondary.purpleLow')
        },

        '.text-red-redHigh': {
          color: theme('colors.red.redHigh')
        },
        '.text-red-redMid': {
          color: theme('colors.red.redMid')
        },
        '.text-red-red': {
          color: theme('colors.red.red')
        },
        '.text-red-redLow': {
          color: theme('colors.red.redLow')
        },
        '.text-red-redExtralow': {
          color: theme('colors.red.redExtralow')
        },

        '.text-green-greenHigh': {
          color: theme('colors.green.greenHigh')
        },
        '.text-green-greenMid': {
          color: theme('colors.green.greenMid')
        },
        '.text-green-green': {
          color: theme('colors.green.green')
        },
        '.text-green-greenLight': {
          color: theme('colors.green.greenLight')
        },

        '.text-yellow-yellowHigh': {
          color: theme('colors.yellow.yellowHigh')
        },
        '.text-yellow-yellowMid': {
          color: theme('colors.yellow.yellowMid')
        },
        '.text-yellow-yellow': {
          color: theme('colors.yellow.yellow')
        },
        '.text-yellow-yellowLow': {
          color: theme('colors.yellow.yellowLow')
        },
      };

      addUtilities(newUtilities);
    }
  ],
}
