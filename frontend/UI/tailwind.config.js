/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Light */
        bgApp: "#F8FAFC",
        bgCard: "#FFFFFF",
        textPrimary: "#0F172A",

        textMuted: "#64748B",
        borderLight: "#E2E8F0",

        /* Dark */
        bgAppDark: "#020617",
        bgCardDark: "#0F172A",
        textPrimaryDark: "#E5E7EB",
        textMutedDark: "#94A3B8",
        borderDark: "#1E293B",

        /* Actions */
        primary: "rgb(42, 255, 102)",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};
