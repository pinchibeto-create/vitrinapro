import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  nitro: isNetlify ? false : true,

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    plugins: isNetlify ? [netlify()] : [],
  },
});
