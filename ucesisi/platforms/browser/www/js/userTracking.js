function trackLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);        
    }

function showPosition(position) {
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
}