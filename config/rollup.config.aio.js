import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'esm', // UMD 格式
    name: 'MyLibrary', // 在瀏覽器中全局變量的名稱
  },
  plugins: [resolve()],
};
