import StyleDictionary from "style-dictionary";

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["../tokens-dark.json"],
  platforms: {
    css: {
      buildPath: "dist/",
      files: [
        {
          destination: "theme-dark.css",
          format: "css/custom",
          filter: (token) => token.type === "color",
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
      if (token.type === "color") return token.value;
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

    // Process tokens
    // tokenName : ref, sys..
    Object.keys(dictionary.tokens).forEach((tokenName) => {
      const token = dictionary.tokens[tokenName];
      processNestedTokens(token, tokenName);
    });

    return `${fileHeader({ file })}:root .theme-dark { ${formattedCSS
      .split("\n")
      .join("\n  ")}\n}\n`;
  },
});

StyleDictionaryExtended.buildAllPlatforms();
