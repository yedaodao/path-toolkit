# path-toolkit

A toolkit for path can run in browsers and node runtime. But I think it is proper for javascript codes in browsers because of the module called [path](https://nodejs.org/dist/latest-v6.x/docs/api/path.html) in Node.js.

The lib aim to handle path in the same logic between browser and backend.

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

pathTookit.toAbsolute('') // console /
pathTookit.toAbsolute('abc/') // console /abc/
pathTookit.toAbsolute('a/../c') // console /c

pathTookit.addTailSlash('') // console ./
pathTookit.addTailSlash('/abc') // console /abc/
pathTookit.addTailSlash('a/../c') // console c/

pathTookit.toRelative('/') // console ./
pathTookit.toRelative('/abc/') // console abc/
pathTookit.toRelative('/a/../c') //console c

pathTookit.removeTailSlash('') // console .
pathTookit.removeTailSlash('../') // console ..
pathTookit.removeTailSlash('/a/../c/') // console /c

pathTookit.toHttpPath(pathTookit.toAbsolute('')) // ''
pathTookit.toHttpPath(pathTookit.removeTailSlash('..')) // ''

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

### toAbsolute(path)

Convert the path to absolute path. e.g., './a/b/../c' will be converted to '/a/c'. Note that: 	

- '' to '/'

### toRelative(path)

Convert the path to relative path. e.g., '/a/b/../c' will be converted to 'a/c'. Note that: 	

- '' to './'

### addTailSlash(path)

Add '/' to the end of the path and this method will not change the mean of the path. e.g., '/a/b/../c' will be converted to '/a/c/'. Note that: 

- '' to './'

### removeTailSlash(path)

Remove '/' in the end of the path and this method will not change the mean of the path. e.g., '/a/b/../c/' will be converted to '/a/c'. Note that: 

- '' to '.'

### toHttpPath(path)

Use this method after using the method above. It will convert the special path string to http path. Like following:

- '.' to ''
- '..' to ''
- '/' to ''
- './' to ''

## Feedback  
If you have any questions or requirements, use [Issues](https://github.com/yedaodao/path-toolkit/issues).











