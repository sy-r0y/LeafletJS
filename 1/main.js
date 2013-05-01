//main.js

var map;

function initmap(){
	map=new L.Map('map');  //Set up the map.

	var url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var Attribute='Map data © OpenStreetMap contributors';
	var osm=new L.TileLayer(
					url,
					{
						minZoom:8,
						maxZoom:12,
						atrribution:Attribute
					}	
		 		);

	map.setView(new L.LatLng(51.3,0.7),9);
	map.addLayer(osm);

} //initmap() ends.