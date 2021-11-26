import path from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    watch: {},
    outDir: "dist",
    rollupOptions: {
      input: path.join(__dirname, 'src/index.ts'),
      output: {
        // 指定输出文件格式
        entryFileNames: "[name].js",
        format: "cjs"
      },
    },
    // 禁用压缩
    minify: false
  }
})