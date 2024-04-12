import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/`,
  plugins: [react()],
})

//export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       base: env.VITE_ASSET_URL,
//       plugins: [react()],
//     },
//   }
// })
