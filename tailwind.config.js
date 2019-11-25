module.exports = {
  prefix: '',
  important: true,
  separator: '-',
  theme: {
    screens: {
      all: {'raw': 'screen'},
      sm: {'max': '480px'},
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',

      black: '#000000',
      white: '#ffffff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
        // Luxury Estates
        'le-500': '#889cbe',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
        // Luxury Estates
        'le-900': '#07214b',
        'le-800': '#082e6b',
        'le-700': '#1f58b7',
        'le-100': '#2b79fa',
        'le-50': '#77aaff',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    spacing: {
      px: '1px',
      '0': 0,
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '35': '35px',
      '36': '36px',
      '40': '40px',
      '45': '45px',
      '48': '48px',
      '50': '50px',
      '65': '65px',
      '80': '80px',
      // Luxury Estates
      '160': '160px',
      '170': '170px',
      '180': '180px',
      '275': '275px',
      '370': '370px',
      '650': '650px',
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '2px',
      default: '4px',
      lg: '8px',
      full: '9999px',
      '10': '10px',
      '12': '12px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      raleway: [
        'Raleway',
        '-apple-system',
        '"Segoe UI"',
        'sans-serif',
      ],
      sans: [
        '-apple-system',
        '"Segoe UI"',
        'sans-serif',
      ],
      serif: [
        'Constantia',
        'Georgia',
        'serif'
      ],
      mono: [
        'Menlo',
        'Consolas',
        'monospace',
      ],
    },
    fontSize: {
      '0': 0,
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      base: '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '32': '32px',
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    gradients: {
      'black-transparent': ['#000', 'transparent'],
      'white-transparent': ['#fff', 'transparent'],
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': 0,
      auto: 'auto',
    },
    letterSpacing: {
      'tight': '-1px',
      'normal': '0',
      'wide': '1px',
    },
    lineHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
    }),
    linearGradients: theme => ({
      colors: theme('gradients'),
      directions: {
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
    }),
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1-2': '50%',
      '1-3': '33.33333%',
      '2-3': '66.66667%',
      '1-4': '25%',
      '3-4': '75%',
      '1-5': '20%',
      '2-5': '40%',
      '3-5': '60%',
      '4-5': '80%',
      '1-6': '16.66667%',
      '5-6': '83.33333%',
    }),
    maxHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: theme => ({
      ...theme('spacing'),
      '1-2': '50%',
      '1-3': '33.33333%',
      '2-3': '66.66667%',
      '1-4': '25%',
      '3-4': '75%',
      '1-5': '20%',
      '2-5': '40%',
      '3-5': '60%',
      '4-5': '80%',
      '1-6': '16.66667%',
      '5-6': '83.33333%',
      full: '100%',
    }),
    minHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    minWidth: theme => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vw',
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => theme('spacing'),
    radialGradients: theme => ({
      colors: theme('gradients'),
      positions: {
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      shapes: {
        default: 'ellipse',
      },
      sizes: {
        default: 'closest-side',
      },
    }),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1-2': '50%',
      '1-3': '33.33333%',
      '2-3': '66.66667%',
      '1-4': '25%',
      '3-4': '75%',
      '1-5': '20%',
      '2-5': '40%',
      '3-5': '60%',
      '4-5': '80%',
      '1-6': '16.66667%',
      '5-6': '83.33333%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    },
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: [],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover'],
    borderRadius: ['responsive', 'hover'],
    borderStyle: ['responsive', 'hover'],
    borderWidth: ['responsive', 'hover'],
    boxShadow: ['responsive', 'hover', 'group-hover'],
    cursor: ['hover'],
    display: ['responsive', 'group-hover'],
    fill: [],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    linearGradients: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive', 'hover'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'group-hover'],
    order: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    radialGradients: ['responsive'],
    resize: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'group-hover'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {
    accessibility: false,
    container: false,
  },
  plugins: [
    require('tailwindcss-gradients')(),
  ],
}
