import test from 'ava';

import assert from '../lib/assert';
import util from '../lib/util';
import format from '../lib/format';
import posix from '../lib/posix';

test('assert.assertString()', async t=> {
    t.notThrows(()=> {
        assert.assertString('');
        assert.assertString('abc');
    });
    t.throws(()=> {
        assert.assertString();
        assert.assertString(null);
        assert.assertString(undefined);
        assert.assertString(0);
        assert.assertString({});
    })
});
test('assert.assertArray()', async t=> {
    t.notThrows(()=> {
        assert.assertArray([]);
        assert.assertArray([0, 1, 2]);
    });
    t.throws(()=> {
        assert.assertArray();
        assert.assertArray(null);
        assert.assertArray('abc');
    })
});
test('util.isAbsolute()', async t=> {
    t.throws(()=> {
        util.isAbsolute(null);
    });
    t.true(util.isAbsolute('/'));
    t.true(util.isAbsolute('//'));
    t.true(util.isAbsolute('/./'));
    t.true(util.isAbsolute('/abc/'));
    t.false(util.isAbsolute('./'));
    t.false(util.isAbsolute('abc'));
});
test('util.existTailSlash()', async t=> {
    t.throws(()=> {
        util.existTailSlash(null);
    });
    t.true(util.existTailSlash('/'));
    t.true(util.existTailSlash('//'));
    t.true(util.existTailSlash('/./'));
    t.true(util.existTailSlash('/abc/'));
    t.false(util.existTailSlash('./abc'));
    t.false(util.existTailSlash(''));
});
test('format.normalize()', async t=> {
    t.throws(()=> {
        format.normalize(null);
    });
    t.is(format.normalize(''), '.');
    t.is(format.normalize('..'), '..');
    t.is(format.normalize('/..'), '/');
    t.is(format.normalize('/../'), '/');
    t.is(format.normalize('a/b/../c'), 'a/c');
    t.is(format.normalize('/a/b/../c/'), '/a/c/');
    t.is(format.normalize('./a/b/../c'), 'a/c');
    t.is(format.normalize('a/b/../../c'), 'c');
    t.is(format.normalize('a/b/../../../c'), '../c');
    t.is(format.normalize('/a/b/../../../c'), '/c');
    t.is(format.normalize('/a/b/../../d/e/../c'), '/d/c');
    t.is(format.normalize('//a//b//c//'), '/a/b/c/');
    t.is(format.normalize('//a//..//c//'), '/c/');
    t.is(format.normalize('.//a//b//c'), 'a/b/c');
    t.is(format.normalize('..//a//b//c'), '../a/b/c');
    t.is(format.normalize('/..//a//b//c'), '/a/b/c');
    t.is(format.normalize('/./..//a//./b//c'), '/a/b/c');
});
test('posix.join()', async t=> {
    t.throws(()=> {
        posix.join(null);
        posix.join(undefined);
        posix.join(0, 1);
    });
    t.is(posix.join(''), '.');
    t.is(posix.join('', ''), '.');
    t.is(posix.join('/', 'a'), '/a');
    t.is(posix.join('./', 'a'), 'a');
    t.is(posix.join('/a', '/b', '/c'), '/a/b/c');
});