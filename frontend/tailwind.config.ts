import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          red: "#ef4444",
        }
      },
      backgroundImage: {
        'allowee-gradient': 'linear-gradient(to right, #3b82f6, #8b5cf6, #ef4444)',
      }
    },
  },
  plugins: [],
} satisfies Config;
