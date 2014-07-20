describe('restful-api', function () {
    it('can be required', function () {
        expect(function () {
            var api = require('../api.js');
        }).not.toThrow();
    });
    it('can be empty', function () {
        var testapi, api = require('../api.js');
        expect(function () {
            testapi = api();
        }).not.toThrow();
        expect(testapi).toBeDefined();
    });
    it('defines four basic actions', function () {
        var api = require('../api.js');
        var testapi = api();
        expect(testapi.get).toBeDefined();
        expect(testapi.post).toBeDefined();
        expect(testapi.put).toBeDefined();
        expect(testapi.delete).toBeDefined();
    });
    it('can take action overrides', function () {
        var api = require('../api.js');
        var testapi = api({
            delete: function (data) {
                return 'abc' + data;
            }
        });
        expect(testapi.delete(123)).toEqual('abc123');
    });
    it('throws errors with misuse', function () {
        var testapi, api = require('../api.js');
        expect(function () {
            testapi = api();
            testapi.get();
        }).toThrow();
    });
});
