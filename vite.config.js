import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import webfontsPlugin from "vite-plugin-webfonts"

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      // svgr options: https://react-svgr.com/docs/options/
      svgr({ svgrOptions: { icon: true } }),
      webfontsPlugin({
        fonts: [
          {
            // The `font-family` value used for each variant.
            family: "Bodoni",
            // Variants may specify any CSS rule that is valid in a @font-face
            // block. For idiomatic JavaScript, camel case keys will be converted to
            // kebab case and `font-` will be prefixed to rules as-needed. For
            // example, `featureSettings` will become `font-feature-settings` in
            // emitted CSS.
            variants: [
              {
                weight: "normal",
								fontStyle: "normal",
                // Sources should be relative to config.root (typically where
                // index.html is). `src` may be a single string or an array of
                // strings. format() hints are inferred based on a file's extension.
                src: "src/assets/fonts/Bodoni/BodoniFLF.a5c77dca0bba1293ef0ff6154925a6.97a0034f1e21c26d011f5862d182e7b4.woff2",
              },
              {
                weight: "bold",
								fontStyle: "normal",
                src: "src/assets/fonts/BodoniFLFBold.371e8c3f9cfd1fa95dde1de19e.fa42f8930850e78f03eac892287a74f2.woff2",
              },
              {
                weight: "normal",
								fontStyle: "italic",
                src: "src/assets/fonts/BodoniFLFItalic.5ba444943c48a93ee216c47a.ec597eee98ac27e6969e3fee927756bd.woff2",
              },
              {
                weight: "bold",
								fontStyle: "italic",
                src: "src/assets/fonts/Bodoni/BodoniFLFBoldItalic.6d42132a5e16b9de5d17.778d3a84d2d308490167e7534148f1c5.woff2",
              },
            ],
          },
        ],
        // Optional. Outputs additional logging.
        verbose: true,
        // Optional. If false, the plugin will only inject a <style> tag rather
        // than CSS files.
        emitCss: false,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "./src/sass/_all.scss";
              @import "./src/sass/_colors.scss";
              @import "./src/sass/_flex.scss";
              @import "./src/sass/_fonts.scss";
            `,
        },
      },
    },
  };
});
