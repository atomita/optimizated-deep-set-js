import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/deep-set.ts',
  output: {
    file: 'dist/deep-set.js',
    format: 'umd',
    name: 'deepSet',
    sourceMap: true,
  },
  plugins: [typescript()],
}
