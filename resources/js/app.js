import App from './Models/App.js';

import NavBar from './Components/NavBar.js';
import Panel from './Components/Panel.js';
import Map from './Components/Map.js';
import ContentNav from './Components/ContentNav.js';
import Preview from './Components/Element/Preview.js';

// Boot global state
const Bus = new App ({
    tab: 'default', 
    entity: {'action': 'view', 'entity': 1}
});

// Setup Global "views"
const nav = NavBar.make({state: Bus});

function bootCampaign()
{
	const panel = Panel.make({state: Bus});
	const map = Map.make({state: Bus});
	const contentNav = ContentNav.make({state: Bus});

    // Show default
    Bus.trigger('entity:show', {entity: window._campaign.default_entity});
    Bus.data.tab = window._campaign.default_map == '' ?  'content' : window._campaign.default_map;
}
function bootPreviews()
{
	document.querySelectorAll(".preview").forEach(function(el){
		Preview.make({state: Bus, el:el });
	});
}
// Global events
document.addEventListener('DOMContentLoaded', function()
{
	Bus.data.mode = window._campaign.mode;
	Bus.data.url = window._campaign.url;
	Bus.data.campaign_id = window._campaign.id;

	Bus.data.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

	if (Bus.data.mode == 'campaign') {
		return bootCampaign();
	} else {
		return bootPreviews();
	}
});





