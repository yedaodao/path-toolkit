var assert = require('./assert'),
    format = require('./format'),
    util = require('./util');

var assertString = assert.assertString;

module.exports = {
    join: function () {
        var path = '',
            seg = null;
        for (var i = 0, len = arguments.length; i < len; i++) {
            seg = arguments[i];
            assertString(seg);
            if (!seg) {
                continue;
            }
            path += path ? '/' + seg : seg;
        }
        return format.normalize(path);
    }
};



