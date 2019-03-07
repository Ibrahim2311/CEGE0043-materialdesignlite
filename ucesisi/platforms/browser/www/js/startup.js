function trackAndCircle() {
	trackLocation()
	getEarthquakes()
};

function startup() {
	document.addEventListener('DOMContentLoaded', function() {
		trackAndCircle();
	}, false);
}