import StyleDictionary from "style-dictionary";

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["../tokens-light.json"],
  platforms: {
    js: {
      buildPath: "./src/variables/colors/",
      files: [
        {
          destination: "mode.ts",
          format: "myCustomFormat",
          filter: (token) => token.type === "color",
        },
      ],
    },
  },
});

const transformString = (str) => {
  return str.replace(/-([a-z])/g, (m, letter) => letter.toUpperCase());
};

StyleDictionaryExtended.registerFormat({
  name: "myCustomFormat",
  formatter: function ({ dictionary }) {
    const transformedTokens = {};

    const extractValue = (obj, prefix = "") => {
      if (obj.value !== undefined) {
        if (prefix.includes("palette")) {
          return `var(--ref${prefix})`;
        } else {
          return `var(--sys${prefix})`;
        }
      } else if (typeof obj === "object") {
        const values = {};
        Object.keys(obj).forEach((key) => {
          if (prefix === "ref") {
            values[transformString(key)] = extractValue(
              obj[key],
              `${prefix}-${obj.name}`,
            );
          } else {
            values[transformString(key)] = extractValue(
              obj[key],
              `${prefix}-${key}`,
            );
          }
        });
        return values;
      }
    };

    Object.keys(dictionary.tokens).forEach((category) => {
      const tokens = dictionary.tokens[category];
      transformedTokens[transformString(category)] = extractValue(tokens);
    });

    return Object.keys(transformedTokens)
      .map((category) => {
        return `export const ${category} = ${JSON.stringify(
          transformedTokens[category],
          null,
          2,
        )};\n`;
      })
      .join("\n");
  },
});

StyleDictionaryExtended.buildAllPlatforms();
