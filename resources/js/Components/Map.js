import Component from 'lumpjs/src/component.js';
import L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import createMap from '../Service/leafletMap.js';

export default Component.define({
    el: document.querySelector('#map'),
    mapId: null,
    map: null,
    mapLookup: {},
    _editingPoi: null,
    initialize: function () {
        // Connect to state
        this.subscribeTo(this.state);
    },
    events: {
        'update:tab':       'showMap',
        'map:focus':        'focus',    // Focus on a poi
        'map:poi:create':   'create',   // Draw new Poi
        'map:poi:edit':     'edit',     // Enter edit mode on poi
        'map:poi:save':     'save',     // Save currently editing poi
        'entity:updated':   'redraw'    // Draw poi based on new data
    },
    focus: async  function(e) {
        await this.showMap(e.map);
        if (this.hasMarker(e.entity)) {
            setTimeout(() => { this.highLightMarker(e.entity); }, 200);
        }
    },
    create: function(entity) {
        // Set edit mode and allow draw
        this._editingPoi = entity;
        this.map.pm.enableDraw('Marker');
    },
    redraw: function(entity) {
        // redraw an enitity to map
        this.addEntityToMap(entity);
    },
    edit: async function(entity) {
        // Get correct map
        await this.showMap(entity.data.map_id);
        // Set edit mode
        const m = this.getMarker(entity.id);
        this._editingPoi = entity;

        // depending on type, init edit
        if (m._icon) {
            this.removeMarker(entity.id);
            this.map.pm.enableDraw('Marker');
        } else {
            m.pm.enable();
            m.once('pm:update', (item) => {
                this.state.trigger('entity:update', {geo: item, entity: this._editingPoi});
                this._editingPoi = null;
            });
        }
    },
    save: function(entity) {
        const m = this.getMarker(this._editingPoi.id);
        m.pm.disable();
    },
    showMap: async function(map) {
        if (map == this.mapId) {
            return;
        }

        // Update tabs if not already done
        this.mapId = map;
        this.state.data.tab = map;

        // Load map locations
        if (map === 'content') {
            return this.clearMap();
        }

        let data = await this.state.loadMap(map);
        let json = await data.json();
        this.mapId = json.id;
        await this.createMap(json);
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

        // Make the map
        this.map = await createMap('map', map.data.image.data.url);

        // Controls
        this.map.pm.addControls({
          position: 'topleft',
          drawCircle: false,
          drawPolyline: false,
          drawCircleMarker: false,
          editMode: false,
          dragMode: false,
          cutPolygon: false,
          removalMode: false
        });

        // Draw entities
        map.data.entities.map((m) => {
            this.addEntityToMap(m);    
        });

        // Listen for map initiaed creation
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
        if (entity.data.map_id != this.mapId) return;

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