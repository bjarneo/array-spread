array-spread
======

Why
------
Concat a matrix array into one flat array.

Installation
------
```
$ npm install --save array-spread
```

Usage
------
```javascript
var arraySpread = require('array-spread');

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arraySpread(matrix));

// Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Test
------
```
npm test
```

How does it work?
------
```javascript
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log([].concat.apply([], matrix));

// Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

ES6
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log([...matrix]);
// Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
