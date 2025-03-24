/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define which files Tailwind should scan for classes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      // Custom font families
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}