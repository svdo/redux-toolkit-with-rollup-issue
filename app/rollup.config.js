import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
    globals: { lib: 'lib' }
  },
  plugins: [
    resolve(), 
    commonjs(),
    json()
  ]
}
