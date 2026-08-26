import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        mute: "#6F675E",
        paper: "#F6F2EC",
        sand: "#E8E0D4",
        forest: "#2C3F34",
        gold: "#B89664",
        cream: "#FBF8F3",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: {
        nav: "0.22em",
        brand: "0.42em",
      },
      boxShadow: {
        menu: "0 18px 50px rgba(26, 23, 20, 0.1)",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
