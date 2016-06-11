'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  scripts: {
    src: './app/**/**/*.js',
    dest: './build/modules/'
  },

  images: {
    src: './app/images/**/*.{jpeg,jpg,png,gif}',
    dest: './build/images/'
  },

  styles: {
    src: ['./app/styles/**/*.scss', './app/**/**/*.scss', './app/modules/**/*.scss'],
    dest: './build/styles/'
  },

  sourceDir: './app/',

  buildDir: './build/',

  testFiles: './app/**/**/*.spec.{js,jsx}',

  assetExtensions: [
    'js',
    'css',
    'map',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]

};

export default config;
