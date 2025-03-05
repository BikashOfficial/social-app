import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  //extra added
  server: {
    port: 5173,
    historyApiFallback: true // Add this line
  },
  base: '/' // Add this line
})
