/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
        hero: "url('./Rectangle 2.png')",
        yellowBook: "url('./Rectangle 35.png')",
        yellowQuestion: "url('./Rectangle 40.png')",
        galleryItemYellow: "url('./Rectangle 6.png')",
      },
    },
    colors: {
      siva1: "#4e4444",
      siva2: "#7b7171",
      siva4: "#D2D0D0",
      siva5: "#f4f3f3",
      bijela: "#ffffff",
      crna: "#251111",
      zuta: "#fecc00",
      crvena: "#fe0000",
    },
    fontFamily: {
      merriweather: "Merriweather",
    },
  },
  plugins: [],
};
