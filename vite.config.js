import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // Optimization settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Disable production source maps to keep build output small
    sourcemap: false,
    
    // Report compressed size
    reportCompressedSize: true,
    
    // Build target
    target: 'esnext',
    
    // Output directory
    outDir: 'dist',
    assetsDir: 'assets',
  },
  
  // Server configuration
  server: {
    port: 5173,
    open: true,
    cors: true,
  },
  
  // Preview configuration
  preview: {
    port: 4173,
  },
})
