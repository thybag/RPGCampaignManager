import Component from 'lumpjs/src/component.js';
import L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

export default Component.define({
    el: document.querySelector('#map'),
    map: null,
    mapLookup: {},
    _editingPoi: null,
    initialize: function () {
        // Listen to state
        this.state.on('update:tab', async (tab) => {
        	// Load map locations
        	if (tab === 'content') {
        		return this.clearMap();
        	}

        	let data = await this.state.loadMap(tab);
        	let json = await data.json();

            this.createMap(json);
        });

        this.state.on('map:focus', (e) => {
            // Change map            
            if (e.map != this.state.data.tab){
                this.state.data.tab = e.map;
            }

            if (this.hasMarker(e.entity)) {
                this.highLightMarker(e.entity);
            }
        });

        this.state.on('map:poi', (entity) => {
            console.log("place marker mode");
            this._editingPoi = entity;
            this.map.pm.enableDraw('Marker');
        });

        this.state.on('entity:updated', (entity) => {
            this.addEntityToMap(entity);
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
    getMarker: function(e_id){
        return this.mapLookup[e_id];
    },
    removeMarker: function(e_id) 
    {
        this.mapLookup[e_id].remove();
        delete this.mapLookup[e_id];
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

        const mapPath = map.data.image.data.url;
    	// Load image
    	let img = await new Promise((resolve, reject) => {
    			let img = document.createElement('img');
    			img.src = mapPath;
		        img.onload = () => resolve(img);
		        img.onerror = reject;
		});
    	
        // Create map
	 	this.map = L.map('map', {
	        crs: L.CRS.Simple,
	        zoomSnap: 0.20,
	    });

        // Config map size
        const width = Math.round(img.width/10);
        const height = Math.round(img.height/10);
	    const bounds = [[0,0], [height,width]];
	    const image = L.imageOverlay(mapPath, bounds).addTo(this.map);
	    this.map.fitBounds(bounds);    
        // Config map zoom.
        const zoom = this.map.getZoom();
	   	this.map.setZoom(zoom+.5);
        this.map.setMaxZoom(zoom+4);
        this.map.setMinZoom(zoom-.5);

	    this.map.pm.addControls({
	      position: 'topleft',
          drawCircle: false,
          drawPolyline: false,
          drawCircleMarker: false
	    });

        map.data.entities.map((m) => {
            this.addEntityToMap(m);    
        });

	    this.map.on('pm:create', (item) => {
            if(this._editingPoi != null) {
                this.state.trigger('entity:update', {geo: item, entity: this._editingPoi});
            } else {
                this.state.trigger('entity:create', {geo: item, category: 'Location'});
            }

            this._editingPoi = null;
            this.map.pm.Draw.disable();
	    });
    },
    addEntityToMap: function(entity) {
        // Skip if no geo
        if (!entity.data.geo) return;
        // Skip if not on this map
        if (entity.data.map_id != this.state.data.tab) return;

        // Remove existing marker if we have one
        if (this.hasMarker(entity.id)) {
            this.removeMarker(entity.id);
        }

        // Draw new point
        L.geoJson(JSON.parse(entity.data.geo), {
            onEachFeature: (feature, layer) => {
                layer.on({
                    'click': (point) => { 
                        this.state.trigger('entity:show', {'entity': entity.id});
                    }
                });
                // Let us lookup "linked" marker easily
                this.mapLookup[entity.id] = layer;
            }
        }).addTo(this.map);
    }
});