import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@modules': path.resolve('src/modules/'),
      '@reducer': path.resolve('src/reducer/'),
      '@component': path.resolve('src/component/'),
      '@pages': path.resolve('src/pages/'),
      '@layout': path.resolve('src/layout/'),
      '@assets': path.resolve('src/assets/'),
      '@theme': path.resolve('src/theme'),
      '@App': path.resolve('src/App'),
      '@routes': path.resolve('src/routes'),
      '@contexts': path.resolve('src/contexts/'),
      '@constants': path.resolve('src/constants/'),
      '@validation': path.resolve('src/validation/'),
      '@generalTypes': path.resolve('src/generalTypes/'),
    },
  },
});
