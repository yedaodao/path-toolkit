module.exports = {
    assertString: function (str) {
        if (typeof str !== 'string') {
            throw new Error(str + ' is not a string');
        }
    },
    assertArray: function (arr) {
        if (!Array.isArray(arr)) {
            throw new Error(arr + ' is not an array');
        }
    }
};
