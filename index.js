var posix = require('./lib/posix'),
    format = require('./lib/format'),
    util = require('./lib/util');

module.exports = {
    join: posix.join,
    normalize: format.normalize,
    isAbsolute: util.isAbsolute,
    existTailSlash: util.existTailSlash
};