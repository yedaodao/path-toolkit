var posix = require('./lib/posix'),
    util = require('./lib/util');

module.exports = {
    join: posix.join,
    addHeadSlash: posix.addHeadSlash,
    deleteHeadSlash: posix.deleteHeadSlash,
    addTailSlash: posix.addTailSlash,
    deleteTailSlash: posix.deleteTailSlash,
    toHttpPath: util.toHttpPath
};