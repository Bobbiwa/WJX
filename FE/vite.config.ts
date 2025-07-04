import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 代理所有以 /api 开头的请求
      '/api': {
        target: 'http://localhost:3001/api', // 目标后端地址
        changeOrigin: true, // 修改请求头中的 Host
        rewrite: (path) => path.replace(/^\/api/, ''), // 可选：重写路径
        // 更多配置如 headers/cookies 支持
      }
    }
  }
})
