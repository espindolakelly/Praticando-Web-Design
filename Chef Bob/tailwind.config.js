/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff7eb",
          100: "#feeac8",
          200: "#fdd58b",
          300: "#fbbf50",
          400: "#fbaf23",
          500: "#f4930b",
          600: "#da7707",
          700: "#b2560a",
          800: "#8f470f",
          900: "#763d0f",
          950: "#452203",
        },

        green: {
          50: "#f1fef4",
          100: "#d6ffe5",
          200: "#b4fece",
          300: "#79fba9",
          400: "#3aee7c",
          500: "#10d558",
          600: "#07c54d",
          700: "#098b39",
          800: "#0d6e32",
          900: "#0d592b",
          950: "#003315",
        },

        white: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
      },

      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
};
