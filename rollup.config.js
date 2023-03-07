import ts from "rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/sw-proxy.ts",
  output: {
    dir: "public",
    format: "cjs",
    name: "[name].js",
  },
  plugins: [ts({}), resolve()],
};
