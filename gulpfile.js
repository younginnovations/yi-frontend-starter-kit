//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');
require('postcss-import');

elixir(function(mix) {
    //mix.sass('app.scss');
    mix.postcss('app.css', {
        plugins:[
            require('postcss-import'),
            require('cssnano')
        ]
    });
});

