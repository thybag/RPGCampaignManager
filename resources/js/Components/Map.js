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

        	let data = await fetch("2/map/"+tab);
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
    	
    	console.log(img);
    	
    	let width = Math.round(img.width/10);
    	let height = Math.round(img.height/10);

    	console.log(width, height);

    	console.log("make");
	 	this.map = L.map('map', {
	        crs: L.CRS.Simple,
	        zoomSnap: 0.20,
	        maxZoom: 4,
	        minZoom: 1
	    });
	    var bounds = [[0,0], [height,width]];
	    var image = L.imageOverlay(map.data.path, bounds).addTo(this.map);
	    this.map.fitBounds(bounds);    
	   	this.map.setZoom(1.4);
	   	
	    this.map.pm.Draw.setPathOptions({custom:"prop"})

	    this.map.pm.addControls({
	      position: 'topleft',
	    });
	    /*
	    let data = await fetch("json.json");
	    let json = await data.json();

	    L.geoJson(json, {onEachFeature: function(f,l){
	        l.on({
	            'click': function(x){ 
	                updateLayer({
	                    "name": x.target.feature.properties.id
	                });
	        }});
	    }}).addTo(map);
	*/
	    this.map.on('pm:create', function(x){
	        x.layer.properties = {"test":"hi"};
	          //var person = prompt("Lofi!");
	          console.log(x);

	        console.log("save");
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