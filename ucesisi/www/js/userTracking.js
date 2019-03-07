function trackLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);        
    }
}

var userMarker
function showPosition(position) {
    if (userMarker){
        mymap.removeLayer(userMarker);
        }
    userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
    mymap.flyTo([position.coords.latitude, position.coords.longitude], 18)
}