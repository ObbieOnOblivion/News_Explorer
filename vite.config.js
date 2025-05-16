import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssImport from "postcss-import";
import postcssJitProps from "postcss-jit-props";
import postcssPresetEnv from "postcss-preset-env";
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
  ],
  server: {
    port: 3001,
    open: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        postcssJitProps({
          files: ["./src/styles/custom-props.css"],
        }),
        postcssPresetEnv({
          stage: 3,
          features: {
            "nesting-rules": true,
            "custom-media-queries": true,
            "logical-properties-and-values": true,
          },
        }),
      ],
    },
  },
  build: {
    cssCodeSplit: true,
    minify: "esbuild",
  },
});
