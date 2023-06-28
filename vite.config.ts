import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";
import checker from "vite-plugin-checker";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      uni(),
      Unocss(),
      checker({ vueTsc: true }),
      viteMockServe({
        ignore: /^\_/,
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
  };
});
