/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "ui-sans-serif", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        accent: {
          green: "#22c55e",
          "green-dark": "#16a34a",
          "green-light": "#86efac",
          cyan: "#06b6d4",
          emerald: "#10b981",
        },
        ink: "#1e293b",
        "ink-muted": "#64748b",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        "glow-green": "0 0 20px rgba(34,197,94,0.3), 0 0 60px rgba(34,197,94,0.1)",
        "glow-emerald": "0 0 20px rgba(16,185,129,0.3), 0 0 60px rgba(16,185,129,0.1)",
      },
      backgroundImage: {
        "gradient-radial-light": "radial-gradient(circle at top, rgba(34,197,94,0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};
