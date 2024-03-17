export default {
  "**/*.(ts|tsx)": ["npx eslint --fix", "npx prettier --write"],
  "*.{json,md}": "prettier --write",
};
