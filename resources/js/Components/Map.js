import Component from 'lumpjs/src/component.js';
import L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

export default Component.define({
    el: document.querySelector('#map'),
    map: null,
    initialize: function () {
        // Listen to state
        this.state.on('update:tab', async (tab) => {
        	// Load map locations
        	if (tab === 'content') {
        		return this.clearMap();
        	}

        	let data = await fetch("2/map/"+tab+"?include=entities");
        	let json = await data.json();

            this.createMap(json);
        });
    },
    clearMap: function()
    {
    	if(this.map) {
    		this.map.off();
  			this.map.remove();
  			this.map = null;
    	}
    },
    createMap: async function(map) {
    	if (this.map) {
    		this.clearMap();
    	}

    	// Load image
    	let img = await new Promise((resolve, reject) => {
    			let img = document.createElement('img');
    			img.src = map.data.path;
		        img.onload = () => resolve(img);
		        img.onerror = reject;
		});
    	
    	let width = Math.round(img.width/10);
    	let height = Math.round(img.height/10);

	 	this.map = L.map('map', {
	        crs: L.CRS.Simple,
	        zoomSnap: 0.20,
	        maxZoom: 4,
	        minZoom: 1
	    });

        // Config
	    var bounds = [[0,0], [height,width]];
	    var image = L.imageOverlay(map.data.path, bounds).addTo(this.map);
	    this.map.fitBounds(bounds);    
	   	this.map.setZoom(1.4);

	    this.map.pm.addControls({
	      position: 'topleft',
          drawCircle: false,
          drawPolyline: false,
          drawCircleMarker: false
	    });

        map.data.entities.map((m) => {
            L.geoJson(JSON.parse(m.data.geo), {
                onEachFeature: (f,l) => {
                    l.on({
                        'click': (x) => { 
                            console.log(m.id);
                            this.state.trigger('entity:show', {'entity': m.id});
                        }
                    });
                }
            }).addTo(this.map);

        });

	    this.map.on('pm:create', (item) => {
            this.state.trigger('entity:create', {geo: item, category: 'Location'});
	    });
    },
    render: async function ()
    {




    	// Has map changed?
    	// 
    	// 



        // Set selected state
    },
    addNewMap: function()
    {

    },
    viewMap: function(e)
    {

    },
    hi: function(){
    }
});