const mix = require( 'laravel-mix' );

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix
  .setPublicPath( './dist' )
  .browserSync( 'bedrock.test' );

mix
  .sass( 'resources/styles/app.scss', 'styles' );

mix
  .js( 'resources/scripts/app.js', 'scripts' )
  .autoload( { jquery: ['$', 'window.jQuery'] } );

mix
  .copyDirectory( 'resources/images', 'dist/images' )
  .copyDirectory( 'resources/fonts', 'dist/fonts' );

mix
  .sourceMaps()
  .version();
