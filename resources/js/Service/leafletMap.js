import L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

export default async function(target, mapPath) {

  let img = await new Promise((resolve, reject) => {
          let img = document.createElement('img');
          img.src = mapPath;
          img.onload = () => resolve(img);
          img.onerror = reject;
  });
        
  // Create map
  const map = L.map(target, {
      crs: L.CRS.Simple,
      zoomSnap: 0.20,
  });

  // Config map size
  const width = Math.round(img.width/10);
  const height = Math.round(img.height/10);
  const bounds = [[0,0], [height,width]];
  const image = L.imageOverlay(mapPath, bounds).addTo(map);
  map.fitBounds(bounds);    

  // Config defualt map zoom.
  const zoom = map.getZoom();
  map.setZoom(zoom+.5);
  map.setMaxZoom(zoom+4);
  map.setMinZoom(zoom-.5);

  return map;
}