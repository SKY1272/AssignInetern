import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// export default {
//   build: {
//     rollupOptions: {
//       external: ['@mui/material'],
//     },
//   },
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
