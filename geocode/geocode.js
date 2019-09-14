const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
	url: `https://us1.locationiq.com/v1/search.php?key=9be1db9ad9f87c&q=${encodedAddress}&format=json`,
	json: true
}, (error, response, body) => {
	if (error){
		callback('Unable to connect to server');
	} else{
		callback(undefined, {
	address: body[0].display_name,
	latitude: body[0].lat,
	longitude: body[0].lon
});
}});
}

module.exports = {
	geocodeAddress
};