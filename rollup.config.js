import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'sdk/index.ts',
  output: {
    file: 'public/sdk/partao-sdk.js',
    format: 'umd',
    name: 'PartaoSDK',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
          jsx: "react-jsx",
        },
        include: ["sdk/**/*", "src/**/*"],
      },
    }),
  ],
};
