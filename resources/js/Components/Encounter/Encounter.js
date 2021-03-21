import Component from 'lumpjs/src/component.js';
import QuickEncounter from 'rpg-quick-encounter/src/Encounter.js';

export default Component.define({
    initialize: function () {

        const url = new URLSearchParams(window.location.search);
        const map = url.get('map');

        const options = {
            'assetPath': this.state.get('url') + '/images/encounter/',
            'map': map,
            'players':[
                {id: 1, name: "test", spawned: false, x: 0, y: 0}
            ],
        };

        QuickEncounter.make({options, save: true});
    },
    render: function () 
    {

    }
});