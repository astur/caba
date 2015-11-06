# caba

Simple counter in console.

## Install

```bash
npm install caba
```

No dependences.

## Usage

```js
// Create counter:
var caba = require('caba')();
// //or//
// var caba = require('caba')('%s tasks done.', 0);

// Start counter
caba.start();
// //or//
// caba.start('%s tasks done.', 0);

// Increment counter
caba.step();
// //or//
// caba.step(5);

// Safe replacement to console.log
caba.log('TEST', 'TEST2');

// Stop counter
caba.stop(); // stop and clear
// //or//
// caba.finish(); // stop and save last string
// //or//
// caba.finish('Well done %s tasks!', 100); // stop with special string
```

## License

MIT