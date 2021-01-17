import Component from 'lumpjs/src/component.js';
import createMap from '../../Service/leafletMap.js';
import fogOfWar from '../../Service/fogOfWar.js'

export default Component.define({
    el: document.querySelector('#map'),
    map: null,
    initialize: function () {
        this.render();
    },
    events: {
        "select:player": "selectPlayer"
    },
    selectPlayer: function() {
        // focus on them or create them
        var testIcon2 = L.divIcon({
            className: 'character-icon',
            html: "<img src='https://placeimg.com/70/70/animals'><span>Hello world</span>",
            iconSize:     [70, 90],
            iconAnchor:   [35, 35],
        });

        L.marker(this.map.getCenter(), {icon: testIcon2, draggable: true}).addTo(this.map);

    },
    render: async function () 
    {
        // Grab image from URL
        const url = new URLSearchParams(window.location.search);
        const image = url.get('img');

        this.map = await createMap('map', image);
        const fog = fogOfWar(this.map );

        this.map .on('click', function(e){ 
            fog.clearFog(e.latlng); 
        });
        this.map .on('contextmenu', function(e){ 
            fog.addFog(e.latlng); 
        });
    }
});