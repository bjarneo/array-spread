'use strict';

module.exports = function(matrix) {
    if (Object.prototype.toString.call(matrix) !== '[object Array]') {
        return [];
    }

    return [].concat.apply([], matrix);
};
