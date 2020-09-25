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

Bus.request = async function(method, url, payload) {
    let data = await fetch(url, {
        method: method,
        body: JSON.stringify(payload),
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': this.data.csrf 
        }
    });
    return await data.json();
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

document.addEventListener('DOMContentLoaded', function(){
	Bus.data.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
	// Go!
	Bus.trigger('update:entity', Bus.data.entity);
});





