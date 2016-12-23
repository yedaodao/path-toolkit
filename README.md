# path-toolkit

A toolkit for path can run in browsers and node runtime. But I think it is proper for javascript codes in browsers because of the module called [path](https://nodejs.org/dist/latest-v6.x/docs/api/path.html) in Node.js.

The lib aim to handle path in the same logic between browser and backend.

[![Build Status](https://travis-ci.org/yedaodao/path-toolkit.svg?branch=master)](https://travis-ci.org/yedaodao/path-toolkit)
[![Coverage Status](https://coveralls.io/repos/github/yedaodao/path-toolkit/badge.svg?branch=master)](https://coveralls.io/github/yedaodao/path-toolkit?branch=master)

## Get Started

```
npm install --save path-tookit
```

### Commonjs/CMD

```javascript
import pathTookit from 'path-tookit';

pathTookit.join('') // console .
pathTookit.join('/a', 'b', 'c') // console /a/b/c
pathTookit.join('/a', '..', 'c') // console /c
pathTookit.join('./', '/a', 'b') // console a/b

pathTookit.normalize('a/b/../c') // console a/c
pathTookit.normalize('//a//b//c//')  // console /a/b/c/

pathTookit.isAbsolute('/abc/') // console true
pathTookit.isAbsolute('./') // console false

pathTookit.existTailSlash('/a/b/c/') // console true
pathTookit.existTailSlash('/a/b/c') // console false
```

### Browser without AMD/CMD/UMD

```html
<script src="http://example.com/public/node_modules/path-tookit/dist/path-tookit.js"></script>
<script>
window.join('/a', 'b', 'c')
</script>		
```

## API

### join(path1,path2...)

Join path segments to a path string. Note that:

- Empty strings ‘’ will be converted to '.'
- The './' which strings start with will be removed like './a/b/c' to 'a/b/c'
- Strings start with '../' will be regard as relative path

### normalize(path)

Normalizes the path param. It can resolve '.' and '..' and remove extra slashes. The logic about resolving empty strings, './', '../' is same as **join()** method.

### isAbsolute(path)

Judge if the path param is a absolute path.

### existTailSlash(path)

Judge if there is a '/' at the end of the path param.

## Feedback  
If you have any questions or requirements, use [Issues](https://github.com/yedaodao/path-toolkit/issues).











