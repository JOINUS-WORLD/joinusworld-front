const { build } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  const dev = process.argv.includes("--dev");
  // 개발 모드가 아니라면 코드를 최소화(minify)
  const minify = !dev;

  // --watch 옵션이 있는지 확인하여 파일 변경을 지속적으로 관찰
  const watch = process.argv.includes("--watch");

  // 외부 의존성을 찾아내어 외부로 설정
  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    watch,
    external,
    ...config,
  };

  // ESM(ECMAScript 모듈) 및 CJS(CommonJS) 형식으로 빌드를 진행
  Promise.all([
    build({
      ...baseConfig,
      format: "esm",
    }),
    build({
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
    }),
  ]).catch(() => {
    console.error("Build failed");
    process.exit(1);
  });
};

// 빌드 실패 시 에러를 출력하고 프로세스를 종료
module.exports = run;
