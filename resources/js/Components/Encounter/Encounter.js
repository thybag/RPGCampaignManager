import Component from 'lumpjs/src/component.js';
import QuickEncounter from 'rpg-encounter/src/Encounter.js';
import EncounterStorage from 'rpg-encounter/src/services/localData.js';

export default Component.define({
    initialize: function () {

        const url = new URLSearchParams(window.location.search);
        const map = url.get('map');

        const options = {
            'assetPath': this.state.get('url') + '/images/encounter/',
            'map': map,
            'players': EncounterStorage.getPlayers()
        };

        QuickEncounter.make({options, save: true});
    },
    render: function () 
    {

    }
});