import Component from 'lumpjs/src/component.js';
import QuickEncounter from 'rpg-encounter/src/Encounter.js';
import EncounterStorage from 'rpg-encounter/src/services/localData.js';

export default Component.define({
    initialize: function () {

        const url = new URLSearchParams(window.location.search);
        const map = url.get('map');

        QuickEncounter.make({
            el: document.getElementById('encounter-zone'),
            options: {
                config: {
                    'assetPath': this.state.get('url') + '/images/encounter/',
                },
                data: {
                    'map': map,
                    'players': EncounterStorage.getPlayers()
                }
            }
        });

        document.querySelector('#encounter-zone #map').style.height = 'calc(100vh - 74px)'
    },
    render: function () 
    {

    }
});