export default function(center, radius) {
  var n = 20;
  var angles = 2*Math.PI/n;
  let coordinates = [];

  for(let i = 0; i < n; i++){
    let x = center[0] + radius * Math.cos(i*angles);
    let y = center[1] + radius * Math.sin(i*angles);
    coordinates.push([x,y]);
  }

  // Form valid poly line by adding first to the end
  coordinates.push(coordinates[0]);

  return coordinates;
};