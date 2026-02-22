import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        quantum: {
          pink: "#D82B72",
          "pink-light": "#E84D8A",
          "pink-dark": "#B91D5E",
          "pink-glow": "rgba(216, 43, 114, 0.15)",
        },
        surface: {
          dark: "#0A0A12",
          card: "rgba(18, 18, 32, 0.7)",
          "card-hover": "rgba(24, 24, 42, 0.8)",
          border: "rgba(255, 255, 255, 0.06)",
          "border-hover": "rgba(255, 255, 255, 0.12)",
        },
        text: {
          primary: "#F0F0F5",
          secondary: "rgba(255, 255, 255, 0.6)",
          dim: "rgba(255, 255, 255, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(160deg, #0A0A12 0%, #120A1A 25%, #1A0E24 50%, #0D0A14 75%, #0A0A12 100%)",
        "gradient-pink":
          "linear-gradient(135deg, rgba(216, 43, 114, 0.15) 0%, rgba(216, 43, 114, 0.02) 100%)",
        "gradient-card":
          "linear-gradient(170deg, rgba(20, 20, 38, 0.8) 0%, rgba(12, 12, 24, 0.9) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
