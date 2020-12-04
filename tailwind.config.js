module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      opacity: {
        45: ".45",
        95: ".95",
      },
      padding: {
        "5px": "5px",
      },
      width: {
        45: "45%",
        "30px": "30px",
        "35px": "35px",
        "45px": "45px",
        "50px": "50px",
      },
      height: {
        350: "350px",
        310: "310px",
      },
      scale: {
        82: ".82",
      },
      colors: {
        gray: {
          800: "#2D3748",
        },
        orange: {
          400: "#F6AD55",
          500: "#ED8936",
        },
        blackv2: {
          start: "#0E0E0E",
          end: "#252525",
          main: "#292929",
          form: "#1E1E1E",
        },
        orangev2: {
          100: "#FC9F38",
          200: "#FF9A2B",
          300: "#fcaa44",
        },
        grayv2: {
          main: "#C4C4C4",
        },
        beigev2: "#FFDA92",
      },
      transitionProperty: {
        scale: "transform, background-color",
      },
      borderRadius: {
        header: "500px 30px",
        lgHeader: "300px 15px",
      },
      boxShadow: {
        header: "0px 11px 45px 22px rgba(115, 4, 255, 0.21)",
        ring: "0px 0px 0px 4px rgba(217,217,217,0.3)",
        add: "1px 1px 19px 10px rgba(255,218,146,0.35)",
        service: "0px 0px 10px 10px rgba(255,218,146,0.3)",
        movie: "1px 1px 10px 10px rgba(255,218,146,0.7)",
      },
    },
  },
  variants: {},
  plugins: [],
};
