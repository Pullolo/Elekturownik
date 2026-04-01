/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
      },
      colors: {
        // Primary color
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        // Typography
        foreground: "hsl(var(--foreground))",
        "foreground-secondary": "hsl(var(--foreground-secondary))",
        "foreground-primary": "hsl(var(--foreground-primary))",
        // Backgrounds
        background: "hsl(var(--background))",
        "background-secondary": "hsl(var(--background-secondary))",
      },
    },
  },
  plugins: [],
};
