
module.exports = {
    haversineDistance:  function (lat1,lon1,lat2,lon2)
    {
        var Radius = 6371; // Radius of Earth in kms


        var phi1 = degrees_to_radians(lat1);              
        var phi2 = degrees_to_radians(lat2);
        var deltaPhi = degrees_to_radians(lat2-lat1);
        var deltaLambda = degrees_to_radians(lon2-lon1);

        /*
        phi denotes Latitude in Radians
        lambda denotes Longitude in Radians
            delta denotes  difference

        */
        var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
                Math.cos(phi1) * Math.cos(phi2) *
                Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var distance = Radius * c;

        return distance;
    }
}
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
