import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; // Leaflet
import scss from 'rollup-plugin-scss'

export default {
    input: 'resources/js/app.js',
    output: {
        file: 'public/js/app.js',
        format: 'iife'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        scss({
            output: 'public/css',
            watch: 'src/scss'
        })
    ]
};

/*
mix.babel('resources/js/app.js', 'public/js')
   .sass('resources/sass/main.scss', 'public/css').options({
        processCssUrls: false,
    });

mix.copy('node_modules/rpg-encounter/assets', 'public/images/encounter');
*/