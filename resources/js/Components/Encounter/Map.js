import Component from 'lumpjs/src/component.js';
import createMap from '../../Service/leafletMap.js';
import fogOfWar from '../../Service/fogOfWar.js'

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

        const map = await createMap('map', image);
        const fog = fogOfWar(map);

        map.on('click', function(e){ 
            fog.clearFog(e.latlng); 
        });
        map.on('contextmenu', function(e){ 
            fog.addFog(e.latlng); 
        });
    }
});