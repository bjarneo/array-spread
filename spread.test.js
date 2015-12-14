'use strict';

var assert = require('assert');
var arraySpread = require('./spread');

describe('array spread', function() {
    it('it should return an flat array if you provide a matrix array', function() {
        var matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        assert.deepEqual(arraySpread(matrix), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('it should return an empty array if you provide whatever else than an array', function() {
        assert.deepEqual(arraySpread('string'), []);
        assert.deepEqual(arraySpread({}), []);
        assert.deepEqual(arraySpread(), []);
        assert.deepEqual(arraySpread(1337), []);
    });
});
