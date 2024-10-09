import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.esm.js",
    format: "esm", // ES Module 格式
  },
  plugins: [resolve()],
};
