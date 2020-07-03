module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-bg)',
        grey: 'var(--color-grey)'
      },
      boxShadow: {
        primaryoutline: '0 0 0 3px rgba(41, 46, 102, 0.5)',
        secondaryoutline: '0 0 0 3px rgba(255, 255, 255, 0.5)'
      },
      fontSize: {
        xxs: '.65rem'
      },
      opacity: {
        '98': '.98'
      }
    }
  },
  variants: {
    outline: ['focus', 'focus-within'],
    borderColor: ['focus', 'focus-within']
  },
  plugins: []
}
