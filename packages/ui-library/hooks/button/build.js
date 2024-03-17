import run from "@join-world/esbuild-config";

import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
