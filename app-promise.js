const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe:  'Address to get weather for',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://us1.locationiq.com/v1/search.php?key=9be1db9ad9f87c&q=${encodedAddress}&format=json`