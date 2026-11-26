import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ITA1433-Ethical-Hacking/',
  plugins: [react()],
  assetsInclude: ['**/*.xlsx'],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
});
