const request = require('request');

var getweather = (lat, lng, callback) =>
request({
  url: `https://api.forecast.io/forecast/4db3f8cab4fa4e420f31241c8289185a/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
  	callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
  });
  } else {
  	callback('Unable to fetch weather.');
  }});

module.exports = {
	getweather
};