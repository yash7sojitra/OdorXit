/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        "section1-bg-dark": "url('/assets/Rectangle.png')",
        "section1-bg":
          "url('/assets/happy-dreamy-housewife-wearing-apron-drinking-tea-looking-out-window-her-kitchen-cooking-home-tea-break-concept.png')",
      },
      fontFamily: {
        DMSans: ["Manrope", "sans-serif"],
      },
      colors: {
        "app-green": "#1AA84F",
        "app-Black": "#383B3A",
        "app-grey": "#505854",
      },
      screens: {
        desktop: { min: "1200px" },
        laptop: { max: "1199.98px" },
        "l-tablet": { max: "992px" },
        tablet: { max: "768px" },
        mobile: { max: "600px" },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          desktop: "1200px",
          laptop: "993px",
          "l-tablet": "769px",
          tablet: "601px",
          mobile: "100%",
        },
      },
    },
  },
  plugins: [],
};
