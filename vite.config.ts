// import react from "@vitejs/plugin-react";
// import {defineConfig} from "vite";

// import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), vitePluginInjectDataLocator()],
//   server: {
//     allowedHosts: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  base: 'https://lynkrookie.github.io/lasbertas.github.io/', // 👈 Ajusta este valor según la ruta en el servidor
  // plugins: [react(), vitePluginInjectDataLocator()],
});
