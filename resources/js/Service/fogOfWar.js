import L from 'leaflet';
import circleToPolygon from './utils/circleToPolygon.js';
import fog from './utils/fogManager.js';

L.Fog = L.Rectangle.extend({
  options: {
    stroke: false,
    color: '#111',
    fillOpacity: 0.7,
    clickable: true,
  },
  initialize: function (bounds, options) {
    L.Polygon.prototype.initialize.call(this, [this._boundsToLatLngs(bounds)], options);       
  },
  clearFog: function (latLng, size = 36) {
    // Get area Poly
    const areaPoly = circleToPolygon([latLng.lat, latLng.lng], size);
    const cutouts = fog.addCutOut(areaPoly);
    
    return this.applyFog(cutouts);  
  },
  addFog: function (latLng, size = 36) {
    const areaPoly = circleToPolygon([latLng.lat, latLng.lng], size);
    const cutouts = fog.removeCutOut(areaPoly);

    return this.applyFog(cutouts);
  },
  applyFog: function(cutouts)
  {
    this._latlngs = [this._latlngs[0]];
    cutouts.map((value, index) => {
      this._latlngs[index+1] = this._convertLatLngs(value); 
    });
    return this.redraw();
  }
});

L.fog = function (bounds, options) {
  return new L.Fog(bounds, options);
};

export default async function(map) {
  // Create fog of war mask
  const fog = L.fog(map.getBounds()).addTo(map);

  fog.addEventListener("click", function(e) {
    fog.clearFog(e.latlng);
  });

  fog.addEventListener("contextmenu", function(e) {
    fog.addFog(e.latlng);
  });

  return map;
}