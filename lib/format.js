var assert = require('./assert'),
    util = require('./util');

var assertString = assert.assertString,
    assertArray = assert.assertArray;

exports.normalize = function (path) {
    assertString(path);
    var isAbsolute = util.isAbsolute(path),
        existTailSlash = path && path[path.length - 1] === '/';

    path = normalizeArray(path.split('/'), !isAbsolute).join('/');

    if (!path && !isAbsolute) {
        path = '.';
    }
    if (path && existTailSlash) {
        path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
};

function normalizeArray(parts, allowAboveRoot) {
    var res = [],
        p = null;
    assertArray(parts);

    for (var i = 0, len = parts.length; i < len; i++) {
        p = parts[i];

        if (!p || p === '.') {
            continue;
        }

        if (p === '..') {
            if (res.length && res[res.length - 1] !== '..') {
                res.pop();
            } else if (allowAboveRoot) {
                res.push('..');
            }
        } else {
            res.push(p);
        }
    }
    return res;
}
