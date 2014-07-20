var extend = require('extend');
var err = require('./error.js');
var throwit = function (type) {
    return function () {
        throw err(
            'Operation ' + type +
            ' is not implemented for this API!'
        );
    };
};
module.exports = function (opts) {
    return extend({
        get: throwit('GET'),
        post: throwit('POST'),
        put: throwit('PUT'),
        delete: throwit('DELETE')
    }, opts);
};
