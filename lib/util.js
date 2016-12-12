var assert = require('./assert');

var assertString = assert.assertString;

module.exports = {
    isAbsolute: function (path) {
        assertString(path);
        return !!path && path[0] === '/';
    },
    existTailSlash: function (path) {
        assertString(path);
        return !!path && path[path.length - 1] === '/';
    },
    toHttpPath: function (path) {
        assertString(path);
        if (path === '.' || path === '..' || path === '/' || path === './') {
            return '';
        }
        return path;
    }
};
