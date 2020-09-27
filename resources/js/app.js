import Model from 'lumpjs/src/model.js';

import NavBar from './Components/NavBar.js';
import Panel from './Components/Panel.js';
import Map from './Components/Map.js';
import ContentNav from './Components/ContentNav.js';

// Boot global state
let Bus = new Model({
	tab: 'default', 
	entity: {'action': 'view', 'entity': 1}
});

Bus.request = async function(method, url, payload = '') {
    const options = {
        method: method,
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.data.csrf 
        }
    };
    if (method != 'GET'){
        options['body'] = JSON.stringify(payload)
    }

    return await fetch(url, options);
}

Bus.requestEntity = async function(id) {
    const url = `${Bus.get('url')}/campaign/${Bus.get('campaign_id')}/entity/${id}?include=blocks`;
    return Bus.request("GET", url);
}

// Setup "views"
const nav = NavBar.make({state: Bus});
const panel = Panel.make({state: Bus});
const map = Map.make({state: Bus});
const contentNav = ContentNav.make({state: Bus});
const History = window.history;

// Global events
Bus.on('update:tab', function(tab){
	console.log("tab set to "+ tab);
});

Bus.on('change', function(a, b, n, o){
    console.log(a, b, n, o);
    //console.log(a,b);
    //console.log(Bus.data);
});

document.addEventListener('DOMContentLoaded', function()
{
    console.log("ready");
    Bus.data.url = window._campaign.url; 
    Bus.data.campaign_id = window._campaign.id;    
	Bus.data.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    console.log("trigger show");
    Bus.trigger('entity:show', {entity: window._campaign.default_entity});
});





