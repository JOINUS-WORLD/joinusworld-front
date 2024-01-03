import StyleDictionary from "style-dictionary";

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["../tokens-light.json"],
  platforms: {
    css: {
      buildPath: "dist/",
      files: [
        {
          destination: "theme-light.css",
          format: "css/custom",
          filter: (token) => token.type !== "typography",
        },
        {
          destination: "theme-class.css",
          format: "class/custom",
          filter: (token) => token.type === "typography",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionaryExtended.registerFormat({
  name: "css/custom",
  formatter: function ({ dictionary, file }) {
    let formattedCSS = "";
    const processTokenValue = (token) => {
      if (token.type === "boxShadow") {
        const boxShadowValues = token.value
          .map(
            (shadow) =>
              `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
          )
          .join(", ");
        return boxShadowValues;
      } else return token.value;
    };

    // value 값 나올 때까지 재귀
    const processNestedTokens = (tokens, prefix = "") => {
      Object.keys(tokens).forEach((tokenName) => {
        const token = tokens[tokenName];
        if (!token.value) {
          processNestedTokens(token, `${prefix}-${tokenName}`);
        } else if (processTokenValue(token)) {
          formattedCSS += `\n--${prefix}-${tokenName}: ${processTokenValue(
            token,
          )};`;
        }
      });
    };

    Object.keys(dictionary.tokens).forEach((tokenName) => {
      const token = dictionary.tokens[tokenName];
      processNestedTokens(token, tokenName);
    });

    return `${fileHeader({ file })}:root { ${formattedCSS
      .split("\n")
      .join("\n  ")}\n}\n`;
  },
});

const convertPxToRemInString = (inputString, baseFontSize = 16) => {
  const regex = /(\d*\.?\d+)px/g;
  return inputString.replace(regex, (pxValue) => {
    const remValue = parseFloat(pxValue) / baseFontSize;
    return `${remValue}rem`;
  });
};

StyleDictionaryExtended.registerFormat({
  name: "class/custom",
  formatter: function ({ dictionary, file }) {
    let formattedCSS = "";
    const processTokenValue = (token) => {
      if (token.type === "typography") {
        return token.name;
      }
    };

    // value 값 나올 때까지 재귀
    const processNestedTokens = (tokens, prefix = "") => {
      Object.keys(tokens).forEach((tokenName) => {
        const token = tokens[tokenName];

        if (!token.value) {
          processNestedTokens(token, `${prefix}-${tokenName}`);
        } else if (processTokenValue(token)) {
          formattedCSS += `
        .${token.name} {
          font-family: ${token.value.fontFamily};
          font-weight: ${token.value.fontWeight};
          font-size: ${convertPxToRemInString(token.value.fontSize)};
          line-height: ${convertPxToRemInString(token.value.lineHeight)};
        }
        `;
        }
      });
    };

    Object.keys(dictionary.tokens).forEach((tokenName) => {
      const token = dictionary.tokens[tokenName];
      processNestedTokens(token, tokenName);
    });

    return `${fileHeader({ file })}   ${formattedCSS
      .split("\n")
      .join("\n  ")} \n`;
  },
});

StyleDictionaryExtended.buildAllPlatforms();
