function copyCoords(evt){
    console.log(evt.mapPointx.toFixed(3) + ", " + evt.mapPoint.y.toFixed(3))
    var dest = new Proj4js.Proj('EPSG:4326');
    var src = new Proj4js.Proj("EPSG:32181");
    lat_lon = Proj4js.transform(src, dest, evt.mapPoint);
    console.log(lat_lon.x.toFixed(7) + ", " + lat_lon.y.toFixed(7));
    navigator.clipboard.writeText(lat_lon.y.toFixed(7) + ", " + lat_lon.x.toFixed(7));
}
Proj4js.defs["EPSG:32181"] = "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs";
map.on('mouse-down', copyCoords);
