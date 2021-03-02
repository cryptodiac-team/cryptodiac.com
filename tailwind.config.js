module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
      ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
              }
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'button': '#F7C948',
            'card': '#E0E8F9',
            'sold-amount': '#EF4E4E',
            'sold': "#BED0F7",
            'tools-bar': '#4C63B6',
            'footer': '#98AEEB',
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        backgroundImage: theme => ({
            'crab': "url('/img/crab.png')",
        }),
        textColor: theme => ({
            ...theme('colors'),

            'button': '#FFFBEA',
            'sold-amount': '#FF9B9B',
            'normal': '#647ACB',
            'tools-bar': '#E0E8F9',
            'sub-footer': '#BED0F7',
            'title': '#98AEEB',
            'body': '#35469C',
            'description': '#7B93DB',
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        borderColor: theme => ({
            ...theme('colors'),
            'card': '#7B93DB',
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        fontSize: {
            'micro': '.25rem',
            'tiny': '.5rem',
            'xxs': '.65rem',
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        boxShadow: {
            '4x': '0px 4px 4px rgba(0, 0, 0, 0.25)',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}