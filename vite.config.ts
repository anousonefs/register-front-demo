import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load the appropriate .env file based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      'process.env.VITE_BASE_URL': JSON.stringify(env.VITE_BASE_URL),
    },
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'src'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'ui': path.resolve(__dirname, 'src/ui'),
        'models': path.resolve(__dirname, 'src/models'),
        'components': path.resolve(__dirname, 'src/ui/components'),
        'containers': path.resolve(__dirname, 'src/ui/containers'),
        'services': path.resolve(__dirname, 'src/services'),
        'utils': path.resolve(__dirname, 'src/utils'),
        'style': path.resolve(__dirname, 'src/ui/style'),
      },
    },
  }
})