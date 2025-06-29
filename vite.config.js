import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
  plugins: [react()],
})
