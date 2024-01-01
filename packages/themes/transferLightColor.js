import StyleDictionary from "style-dictionary";

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["../tokens-light.json"],
  platforms: {
    css: {
      buildPath: "./src/variables/colors/",
      files: [
        {
          destination: "light.ts",
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
    return `export const light = ${JSON.stringify(
      minifyDictionary(dictionary.tokens),
    )}`;
  },
});
StyleDictionaryExtended.buildAllPlatforms();
