var posix = require('./lib/posix');

module.exports = {
    join: posix.join,
    addHeadSlash: posix.addHeadSlash,
    deleteHeadSlash: posix.deleteHeadSlash,
    addTailSlash: posix.addTailSlash,
    deleteTailSlash: posix.deleteTailSlash
};