function apiRequest(url,data,callback) {
	
	if(!data) {
		data = {};
	}
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function()
	{
		var data = JSON.parse(this.responseText);
		callback(data);
	};
	xhr.onerror = function()
	{
		alert("Connection error!");
		return false;
	};
	xhr.open("GET",url);
	xhr.send(data);
	
}

function getImagesForUser(username,callback) {
	
	var url = "https://api.myphotodiary.com/users/" + username + "/images.json?api_key=3bbe7fb938f8dfdc91cfbb17cc9a209a86e2d8b1&anonymous=1&limit=125";

	apiRequest(url,{},callback);
}

function getImagesToday(callback) {
	
	var url = "https://api.myphotodiary.com/users/malek/images.json?api_key=3bbe7fb938f8dfdc91cfbb17cc9a209a86e2d8b1&anonymous=1&limit=25";

	apiRequest(url,{},callback);
}

function getImagesCloseToLocation(geolat,geolong,callback) {
	
	var url = "https://api.myphotodiary.com/geotags.json?geolat=" + geolat + "&geolong=" + geolong + "&api_key=3bbe7fb938f8dfdc91cfbb17cc9a209a86e2d8b1&anonymous=1&limit=25";

	apiRequest(url,{},callback);
}

function getCurrentLocation() {
	//
	//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
	//
	// Titanium.Geolocation.ACCURACY_BEST
	// Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS
	// Titanium.Geolocation.ACCURACY_HUNDRED_METERS
	// Titanium.Geolocation.ACCURACY_KILOMETER
	// Titanium.Geolocation.ACCURACY_THREE_KILOMETERS
	//
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS;

	//
	//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
	//  THIS VALUE IS IN METERS
	//
	Titanium.Geolocation.distanceFilter = 10;
	
	// SET PURPOSE
	Titanium.Geolocation.purpose = "Get your location";
	
	//
	// GET CURRENT POSITION - THIS FIRES ONCE
	//
	var tmpLocation = false;
	
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (!e.success || e.error) {
			alert('error ' + JSON.stringify(e.error));
			return;
		}
		
		tmpLocation = e.coords;
	});
	
	return tmpLocation;
}

function l(data) {
	Ti.API.info(data);
}