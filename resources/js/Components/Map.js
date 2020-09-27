import Component from 'lumpjs/src/component.js';
import L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

export default Component.define({
    el: document.querySelector('#map'),
    map: null,
    mapLookup: {},
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
        /*
        this.state.on('entity:show', (e) => {
            if(this.hasMarker(e.entity)) {
                this.highLightMarker(e.entity);
            }
        });*/

        this.state.on('map:focus', (e) => {
            console.log("map:focus", e.entity);
            if (!e.map != 1){

            }

            if (this.hasMarker(e.entity)) {
                console.log("found marker");
                this.highLightMarker(e.entity);
            }
        });
    },
    clearMap: function()
    {
    	if(this.map) {
    		this.map.off();
  			this.map.remove();
            this.mapLookup = {};
  			this.map = null;
    	}
    },
    hasMarker: function(e_id){
        return (this.mapLookup[e_id]);
    },
    _offsetPoi: function(latlng){
        let offset = this.map.getSize().divideBy(4).x;
        let x = this.map.latLngToContainerPoint(latlng).x + offset;
        let y = this.map.latLngToContainerPoint(latlng).y;
        return this.map.containerPointToLatLng([x, y]);
    },
    highLightMarker: function(id)
    {
        let marker = this.mapLookup[id], l;
        if (marker.getLatLng) {
            //https://github.com/pointhi/leaflet-color-markers
            marker.setIcon(new L.Icon({
                 iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            }));

            l = marker.getLatLng();
        }else {
           l = marker.getLatLngs()[0][0];
        }
        this.map.panTo(this._offsetPoi(l));
       
    },
    createMap: async function(map) {
    	if (this.map) {
    		this.clearMap();
    	}

    	// Load image
    	let img = await new Promise((resolve, reject) => {
    			let img = document.createElement('img');
    			img.src = map.data.mapUrl;
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
	    var image = L.imageOverlay(map.data.mapUrl, bounds).addTo(this.map);
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
                onEachFeature: (f, l) => {
                    l.on({
                        'click': (x) => { 
                            console.log(m.id);
                            this.state.trigger('entity:show', {'entity': m.id});
                        }
                    });
                    // Let us lookup "linked" marker easily
                    this.mapLookup[m.id] = l;
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