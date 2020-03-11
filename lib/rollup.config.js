import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from '@rollup/plugin-json'
import fs from 'fs'

const pkg = require('./package.json')

const libraryName = pkg.name
const camelCaseLibraryName = libraryName

export default {
  input: `src/${libraryName}.js`,
  output: [
    { file: pkg.main, name: camelCaseLibraryName, format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    json(),
    commonjs(),
    resolve(),
    sourceMaps()
  ]
}
