import fs from "fs/promises";

//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          }
        }
      ]
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "@heymantle/polaris",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: ["react", "@shopify/polaris"],
    },
  },
});