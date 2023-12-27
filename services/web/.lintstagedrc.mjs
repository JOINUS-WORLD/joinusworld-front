import baseConfig from "../../.lintstagedrc.mjs";

export default {
  ...baseConfig,
  "**/*.(tsx)": `yarn lint:css --fix`,
};
