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
    },
  },
  plugins: [],
};
