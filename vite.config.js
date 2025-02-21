import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['6f6c-2404-8000-1024-776e-883d-8efe-7d2a-a440.ngrok-free.app'],
  },
  plugins: [
    react(
      
    ),
    tailwindcss(
      {
        
      }
    ),
  ],
})
