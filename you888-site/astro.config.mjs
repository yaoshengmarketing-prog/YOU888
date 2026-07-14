import { defineConfig } from 'astro/config';

// 正式網域：之後接上自訂網域就改這裡（例如 https://www.you888.com）
export default defineConfig({
  site: 'https://you888.netlify.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
