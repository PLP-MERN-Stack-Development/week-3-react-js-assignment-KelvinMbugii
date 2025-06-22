import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production'
      ? '/week-3-react-js-assignment-KelvinMbugii/'
      : '/',
    plugins: [react(), tailwindcss()],
  };
});
