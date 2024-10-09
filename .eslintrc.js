export default {
  extends: [
    'eslint:recommended', // 使用 ESLint 推薦的基礎規則
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
