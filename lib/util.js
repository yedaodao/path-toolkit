import {assertString} from './assert';

module.exports = {
    isAbsolute(path) {
        assertString(path);
        return !!path && path[0] === '/';
    }
};
