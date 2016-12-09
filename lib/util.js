import {assertString} from './assert';

module.exports = {
    isAbsolute(path) {
        assertString(path);
        return !!path && path[0] === '/';
    },
    existTailSlash(path) {
        assertString(path);
        return path && path[path.length - 1] === '/';
    }
};
