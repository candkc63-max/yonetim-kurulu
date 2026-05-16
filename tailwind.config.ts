import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        primary: "hsl(var(--primary))"
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
