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
    },
    toAbsolute: function (path) {
        assertString(path);
        return this.join('/', path);
    },
    addTailSlash: function (path) {
        assertString(path);
        path = format.normalize(path);
        return this.join(path, '/');
    },
    toRelative: function (path) {
        assertString(path);
        return this.join('./', path);
    },
    removeTailSlash: function (path) {
        assertString(path);
        path = format.normalize(path);
        return util.existTailSlash(path) && path.length > 1 ? path.slice(0, -1) : path;
    }
};



