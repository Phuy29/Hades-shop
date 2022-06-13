module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      fontSize: {
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown .2s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
