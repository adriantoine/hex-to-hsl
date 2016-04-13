
# HEX to HSL

[![Build Status](https://travis-ci.org/adriantoine/hex-to-hsl.svg?branch=master)](https://travis-ci.org/adriantoine/hex-to-hsl)

Convert a HEX color string to an HSL value

### Install

```console
npm install hex-to-hsl --save
```

### Use

```js
var hexToHsl = require('hex-to-hsl');

console.log(hexToHsl('#0593FF')); // Prints [206, 100, 51]
console.log(hexToHsl('#00C176')); // Prints [157, 100, 38]
console.log(hexToHsl('#fff')); // Prints [0, 0, 100]
```
