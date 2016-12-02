//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function(mix) {
    mix.sass('./assets/sass/app.scss')
        .postcss('app.css', {
            plugins:[
                require('lost'),
                require('rucksack-css')
            ],
            output  : 'public/css',
            srcDir  : 'public/css/',
            sourcemaps : false
        });
});

