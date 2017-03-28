//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function (mix) {
    mix.sass('./assets/sass/app.scss', './public/css/postcss/')
        .postcss('app.css', {
            plugins: [
                require('lost')
            ],
            output: './public/css/',
            srcDir: './public/css/postcss/'
        })
        .styles([
            './assets/sass/vendor/normalize.css',
            './assets/sass/vendor/waffle-grid.min.css',
            './assets/sass/vendor/font-awesome.min.css',
            './assets/sass/vendor/font-awesome-animation.css'
        ], './public/css/vendor.css');

    mix.browserSync({
        proxy: 'yi-frontend-starter-kit.valet/'
    });
});

