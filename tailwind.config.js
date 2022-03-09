module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: {
        bg: '#F4F4F4',
        hr: '#E0E0E0',
        link: '#D9D9D9',
        linkHover: '#CFCFCF',
      },
      blue: {
        '02': '#99F8FF',
        '04': '#0F36FB',
        '05': '#000843',
        '06': '#000630',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '13rem',
      },
    },
    extend: {
      fontFamily: {
        display: `"Oswald", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        body: `"Comfortaa", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      fontSize: {
        base: ['16px', '30px'],
        xl: ['20px', '37px'],
      },
      spacing: {
        22: '5.5rem',
      },
      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
