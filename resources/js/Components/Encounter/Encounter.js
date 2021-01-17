import Component from 'lumpjs/src/component.js';
import EncounterMap from './Map.js';
import Players from './Players.js';

export default Component.define({
    initialize: function () {
        const map = EncounterMap.make({state: this.state});
        const players = Players.make({state: this.state});

        players.on('select:player', function(player) {
            map.trigger('select:player', player);
        });
    },
    events: {

    },
    render: function () 
    {

    }
});