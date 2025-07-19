import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import { webcrypto } from 'crypto'

// ADD THIS to fix `crypto.hash`
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()]
    }
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify'
    }
  }
})
