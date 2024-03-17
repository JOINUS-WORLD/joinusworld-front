import { UserConfigExport } from "vite";
import { defineConfig } from "vite";

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    assetsInclude: ["/sb-preview/runtime.js"],
  });
};

export default app;
