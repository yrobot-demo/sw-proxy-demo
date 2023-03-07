import { defineConfig } from "vite";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  root: "./",
  plugins: [resolve(), commonjs()],
});
