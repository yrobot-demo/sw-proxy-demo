import ts from "rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/sw-proxy.ts",
  output: {
    dir: "public",
    format: "cjs",
    name: "[name].js",
  },
  plugins: [ts({}), resolve(), commonjs()],
};
