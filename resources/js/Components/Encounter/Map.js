import Component from 'lumpjs/src/component.js';
import createMap from '../../Service/leafletMap.js';

export default Component.define({
    el: document.querySelector('#map'),
    initialize: function () {
        this.render();
    },
    events: {

    },
    render: async function () 
    {
        // Grab image from URL
        const url = new URLSearchParams(window.location.search);
        const image = url.get('img');

        await createMap('map', image);
    }

});