
var rgbToHsl = require('rgb-to-hsl');
var hexToRgb = require('hex-to-rgb');

module.exports = function (hex) {
	var hsl = rgbToHsl.apply(rgbToHsl, hexToRgb(hex));
	return [hsl[0], parseInt(hsl[1], 10), parseInt(hsl[2], 10)];
};
