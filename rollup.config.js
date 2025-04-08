import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';

export default {
  input: 'sdk/index.ts',
  output: {
    file: 'public/sdk/partao-sdk.js',
    format: 'umd',
    name: 'PartaoSDK',
    sourcemap: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': JSON.stringify({}),
    }),
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
