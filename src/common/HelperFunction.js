// Computes the Crow Road between two geographical coordinates
export function computeDistanceBetween(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = this.toRad(lat2 - lat1);
  var dLon = this.toRad(lon2 - lon1);
  var lat1 = this.toRad(lat1);
  var lat2 = this.toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c * 1000;
  return d;
}

// Converts numeric degrees to radians
export function toRad(Value) {
  return (Value * Math.PI) / 180;
}