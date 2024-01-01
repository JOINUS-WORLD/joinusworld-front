import StyleDictionary from "style-dictionary";

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["../tokens-dark.json"],
  platforms: {
    css: {
      buildPath: "./src/variables/colors/",
      files: [
        {
          destination: "dark.ts",
          format: "myCustomFormat",
          filter: (token) => token.type === "color",
        },
      ],
    },
  },
});
const { minifyDictionary } = StyleDictionary.formatHelpers;

StyleDictionaryExtended.registerFormat({
  name: "myCustomFormat",
  formatter: function ({ dictionary }) {
    return `export const dark = ${JSON.stringify(
      minifyDictionary(dictionary.tokens),
    )}`;
  },
});
StyleDictionaryExtended.buildAllPlatforms();
