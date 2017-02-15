import angular from 'rollup-plugin-angular-aot';
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import {minify as minifyHtml} from 'html-minifier';

const cssmin = new CleanCSS();
const htmlminOpts = {
  caseSensitive: true,
  collapseWhitespace: true,
  removeComments: true,
};

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-library-starter.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ngx.library.starter',
  plugins: [
    angular({
      preprocessors: {
        template: template => minifyHtml(template, htmlminOpts),
        style: scss => {
          const css = sass.renderSync({data: scss}).css;
          return cssmin.minify(css).styles;
        }
      }
    })
  ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/operator/pluck': 'Rx.Observable.prototype',
    'rxjs/add/operator/first': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/merge': 'Rx.Observable',
    'rxjs/add/observable/throw': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
