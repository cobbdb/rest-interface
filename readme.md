# rest-interface [![NPM version](https://badge.fury.io/js/rest-interface.svg)](http://badge.fury.io/js/rest-interface)

Quick and painless RESTful interface for node apps.

    $ npm install rest-interface

-------------
RESTful APIs define interactions based on resources, meaning your
code stays deliberate and literal. There are four basic operations
in a RESTful api:

- `GET`: Reading resource values.
- `POST`: Updating values (and possibly returning).
- `PUT`: Creating new resources.
- `DELETE`: Removing/destroying resources.

For example, a Circle class could be used in a RESTful
way like this:

    var rad = circle.get('radius');
    circle.post('color', 'red');

Or, a set of geometries describing a face:

    face.put('eyes', {
        color: 'blue',
        size: 7
    });

## Define only what you need
Rest-interface defaults all operations so you can keep boilerplate
to a minimum.

    // Circle.js
    var api = require('rest-interface');
    var opts = {
        color: 'black',
        radius: 5
    };
    module.exports = api({
        get: function (attr) {
            return opts[attr];
        },
        post: function (attr, val) {
            return opts[attr] = val;
        }
    });

## Fails with noise
Stay informed of code that is using unsupported API
operations.

    // Throws UnimplementedAPIActionError
    circle.put('somevalue');

---------
* See: http://github.com/cobbdb/rest-interface
* License: MIT
