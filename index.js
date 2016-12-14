var posix = require('./lib/posix'),
    util = require('./lib/util');

module.exports = {
    join: posix.join,
    toAbsolute: posix.toAbsolute,
    toRelative: posix.toRelative,
    addTailSlash: posix.addTailSlash,
    removeTailSlash: posix.removeTailSlash,
    toHttpPath: util.toHttpPath
};