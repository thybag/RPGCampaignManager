import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; // Leaflet
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';

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
        }),
        copy({
          targets: [
            { src: 'node_modules/rpg-encounter/assets', dest: 'public/images/encounter' },
          ]
        })
    ]
};