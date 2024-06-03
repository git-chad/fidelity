import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri-black': '#121213',
      },
      fontSize: {
        giant: "17.942rem",
        h1: "11.089rem",
        h2: "6.854rem",
        h3: "4.236rem",
        h4: "2.618rem",
        h5: "1.618rem",
        p: "1rem",
        small: "14px",
      },
      screens: {
        "3xl": "1920px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss" as any],
};
export default config;
