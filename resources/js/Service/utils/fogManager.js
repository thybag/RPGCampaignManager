import * as turf from '@turf/turf'

// Keep track of cut out sections
export default new function() {
  this.cutouts = null;

  this.addCutOut = function(poly) {
    if (!this.cutouts) {
      this.cutouts = [poly];
      return this.cutouts;
    }
    let cutoutPoly = turf.multiPolygon(this.cutouts);
    let newPoly = turf.polygon([poly]);
    let u = turf.union(cutoutPoly, newPoly);

    this.cutouts = u.geometry.coordinates;

    return this.cutouts;
  }

  this.removeCutOut = function(poly) {
    let cutoutPoly = turf.multiPolygon(this.cutouts);
    let newPoly = turf.polygon([poly]);

    let u = turf.difference(cutoutPoly, newPoly);

    this.cutouts = u.geometry.coordinates;
    return this.cutouts;
  }
}
