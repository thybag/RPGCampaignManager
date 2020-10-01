import App from './Models/App.js';

import NavBar from './Components/NavBar.js';
import Panel from './Components/Panel.js';
import Map from './Components/Map.js';
import ContentNav from './Components/ContentNav.js';

// Boot global state
const Bus = new App ({
    tab: 'default', 
    entity: {'action': 'view', 'entity': 1}
});

// Setup "views"
const nav = NavBar.make({state: Bus});
const panel = Panel.make({state: Bus});
const map = Map.make({state: Bus});
const contentNav = ContentNav.make({state: Bus});

// Global events
document.addEventListener('DOMContentLoaded', function()
{
	if(!window._campaign) return false;

    Bus.data.url = window._campaign.url; 
    Bus.data.campaign_id = window._campaign.id;    
	Bus.data.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    // Show default
    Bus.trigger('entity:show', {entity: window._campaign.default_entity});
});





