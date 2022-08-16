module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
    require('prettier-plugin-tailwindcss'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#12BBD1',
          'primary-content': '#FFFFFF',
          'secondary': '#EEBD25',
          'secondary-content': '#FFFFFF',
          'accent': '#34D399',
          'accent-content': '#FFFFFF',
          'neutral': '#19242E',
          'neutral-content': '#FFFFFF',
          'base-100': '#F7F7F7',
          'info': '#71A3F4',
          'success': '#1AA253',
          'warning': '#F9D648',
          'error': '#EC2B34',
        },
      },
    ],
  },
}
