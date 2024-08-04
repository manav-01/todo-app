/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./appPages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-bg": " linear-gradient(180deg, #FFFFFF 0%, #AFA3FF 100%)",
        "gradient-bgb":
          "linear-gradient(180deg, #b6a9fe 0%, #776ac6 100%), linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));",
        "bg-sub-btn":
          "linear-gradient(180deg, #4C38C2 0%, #2F2188 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))",
        "add-btn": "linear-gradient(180deg, #3A3A3A 0%, #202020 100%)",
      },
      colors: {
        "cl-title": "#2D2D2D",
        "btn-bd": "linear-gradient(360deg, #4B36CC 0%, #9C93D4 107.69%)",
        "input-bg-color": "#EBEBEB",
        "dashbord-main": "#797979",
        "dashbord-title": "#606060",
        "active-bg": "#F4F4F4",
        "active-bg2": "#F9F9F9",
        "sidebar-gb": "#FFFFFF",
        urgent: "#FF6B6B",
        medium: "#FFA235",
        low: "#0ECC5A",
        "input-title": "#CCCCCC",
        "input-label": "#666666",
      },
      spacing: {
        30: "30%",
      },
    },
  },
  plugins: [],
};
