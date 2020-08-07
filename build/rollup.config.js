import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import stylus from 'rollup-plugin-stylus-compiler';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import template from './html.template';


export default {
  input: '../src/app.js',
  output: {
    file: '../public/app.js',
    format: 'cjs'
  },
  plugins: [
    // Support for styles
    stylus(),
    postcss({ 
      extract: true
    }),

    // Load third-party modules in node_modules
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    // Coverts CommonJS modules to ES6, which stops them from breaking Rollup
    commonjs(),

    // Es6 transpiler
    babel({
      exclude: 'node_modules/**'
    }),

    // HTML generation
    html({
      template
    }),

    // Hot Reloading
    serve('../public'),
    livereload({
      watch: '../public'
    })
  ]
};
