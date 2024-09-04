/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md',
  ],

  theme: {
    extend: {
      fontSize: {
        'hero-title': 'clamp(3rem, calc(7.51vw + 1.24rem), 8.75rem)',
        'hero-subtitle': 'clamp(1.38rem, calc(0.49vw + 1.26rem), 1.75rem)',
      },
      fontFamily: {
        manrope: ['Manrope Variable', 'sans-serif'],
      },
      colors: {
        'bright-yellow': '#E7FF50',
      },
      spacing: {
        "4": "clamp(0.25rem, calc(0vw + 0.25rem), 0.25rem)",
        "8": "clamp(0.5rem, calc(0vw + 0.5rem), 0.5rem)",
        "12": "clamp(0.63rem, calc(0.18vw + 0.58rem), 0.75rem)",
        "16": "clamp(0.75rem, calc(0.36vw + 0.67rem), 1rem)",
        "20": "clamp(1rem, calc(0.36vw + 0.92rem), 1.25rem)",
        "24": "clamp(1.25rem, calc(0.36vw + 1.17rem), 1.5rem)",
        "28": "clamp(1.5rem, calc(0.36vw + 1.42rem), 1.75rem)",
        "32": "clamp(1.25rem, calc(1.09vw + 1rem), 2rem)",
        "36": "clamp(1.5rem, calc(1.09vw + 1.25rem), 2.25rem)",
        "40": "clamp(1.25rem, calc(1.81vw + 0.83rem), 2.5rem)",
        "44": "clamp(1.5rem, calc(1.81vw + 1.08rem), 2.75rem)",
        "48": "clamp(1.75rem, calc(1.81vw + 1.33rem), 3rem)",
        "52": "clamp(2rem, calc(1.81vw + 1.58rem), 3.25rem)",
        "56": "clamp(2.25rem, calc(1.81vw + 1.83rem), 3.5rem)",
        "60": "clamp(2.38rem, calc(1.99vw + 1.91rem), 3.75rem)",
        "64": "clamp(2.75rem, calc(1.81vw + 2.33rem), 4rem)",
        "68": "clamp(3rem, calc(1.81vw + 2.58rem), 4.25rem)",
        "72": "clamp(3.25rem, calc(1.81vw + 2.83rem), 4.5rem)",
        "76": "clamp(3.5rem, calc(1.81vw + 3.08rem), 4.75rem)",
        "80": "clamp(3.75rem, calc(1.81vw + 3.33rem), 5rem)",
        "84": "clamp(4rem, calc(1.81vw + 3.58rem), 5.25rem)",
        "88": "clamp(4.5rem, calc(1.45vw + 4.16rem), 5.5rem)",
        "92": "clamp(4.75rem, calc(1.45vw + 4.41rem), 5.75rem)",
        "96": "clamp(5rem, calc(1.45vw + 4.66rem), 6rem)",
        "100": "clamp(5.25rem, calc(1.45vw + 4.91rem), 6.25rem)",
        "section": "clamp(3rem, calc(10.14vw + 0.62rem), 10rem)"
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
