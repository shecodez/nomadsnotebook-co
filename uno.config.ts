import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["fx-2-ic", "flex gap-2 items-center"],
    ["fx-3-ic", "flex gap-3 items-center"],
  ],
  presets: [
    presetUno(), // required
    presetAttributify(), // required when using attributify mode
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(), // https://unocss.dev/presets/typography
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom fonts
        majorMono: "Major Mono Display",
        permanentMarker: "Permanent Marker",
      },
    }), // https://unocss.dev/presets/web-fonts
  ],
  theme: {
    colors: {
      primary: "#ff004f",
    },
  },
});
