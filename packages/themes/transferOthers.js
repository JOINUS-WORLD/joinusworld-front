import StyleDictionary from "style-dictionary";

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["../tokens-light.json"],
  platforms: {
    js: {
      buildPath: "./src/variables/",
      files: [
        {
          destination: "vars.ts",
          format: "myCustomFormat",
          filter: (token) => token.type !== "color",
        },
      ],
    },
  },
});

const transformString = (str) => {
  return str.replace(/-([a-z])/g, (m, letter) => letter.toUpperCase());
};

const convertPxToRemInString = (inputString, baseFontSize = 16) => {
  const regex = /(\d*\.?\d+)px/g;
  return inputString.replace(regex, (pxValue) => {
    const remValue = parseFloat(pxValue) / baseFontSize;
    return `${remValue}rem`;
  });
};

StyleDictionaryExtended.registerFormat({
  name: "myCustomFormat",
  formatter: function ({ dictionary }) {
    const transformedTokens = {};

    const extractValue = (obj) => {
      if (obj.value !== undefined && obj.type === "boxShadow") {
        const boxShadowValues = obj.value
          .map(
            (shadow) =>
              `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
          )
          .join(", ");
        return boxShadowValues;
      } else if (obj.value !== undefined) {
        if (obj.value.fontSize) {
          return {
            ...obj.value,
            fontSize: convertPxToRemInString(obj.value.fontSize),
          };
        }
        return obj.value;
      } else if (typeof obj === "object") {
        const values = {};
        Object.keys(obj).forEach((key) => {
          values[transformString(key)] = extractValue(obj[key]);
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
