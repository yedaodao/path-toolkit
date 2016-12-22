var posix = require('./lib/posix');

module.exports = {
    join: posix.join,
    toAbsolute: posix.toAbsolute,
    toRelative: posix.toRelative,
    addTailSlash: posix.addTailSlash,
    removeTailSlash: posix.removeTailSlash
};