import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? process.env.VITE_REACT_APP_BASE_URL_PRODUCTION : process.env.VITE_REACT_APP_BASE_URL_DEVELOPMENT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename,
});
