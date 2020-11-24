module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blackv2: {
          start: "#0E0E0E",
          end: "#252525",
          form: "#1E1E1E",
        },
        orangev2: {
          100: "#FC9F38",
          200: "#FF9A2B",
        },
      },
      transitionProperty: {
        scale: "transform, background-color",
      },
    },
  },
  variants: {},
  plugins: [],
};
