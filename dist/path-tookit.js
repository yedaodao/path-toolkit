/*! comment demo */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){var n=r(2);e.exports={join:n.join,addHeadSlash:n.addHeadSlash,deleteHeadSlash:n.deleteHeadSlash,addTailSlash:n.addTailSlash,deleteTailSlash:n.deleteTailSlash}},function(e,t,r){var n=r(3),a=r(4),i=r(5),o=n.assertString;e.exports={join:function(){for(var e="",t=null,r=0,n=arguments.length;r<n;r++)t=arguments[r],o(t),t&&(e+=e?t:"/"+t);return a.normalize(e)},addHeadSlash:function(e){return i.isAbsolute(e)?e:"/"+e},addTailSlash:function(e){return i.existTailSlash(e)?e:e+"/"},deleteHeadSlash:function(e){return i.isAbsolute(e)?e.slice(1):e},deleteTailSlash:function(e){return i.existTailSlash(e)?e.slice(-1):e}}},function(e,t){e.exports={assertString:function(e){if("string"!=typeof e)throw new Error(e+" is not a string")},assertArray:function(e){if(!Array.isArray(e))throw new Error(e+" is not a array")}}},function(e,t,r){function n(e,t){var r=[],n=null;s(e);for(var a=0,i=e.length;a<i;a++)n=e[a],n&&"."!==n&&(".."===n?r.length&&".."!==r[r.length-1]?r.pop():t&&r.push(".."):r.push(n));return r}var a=r(3),i=r(5),o=a.assertString,s=a.assertArray;t.normalize=function(e){o(e);var t=i.isAbsolute(e),r=i.existTailSlash(e);return e=n(e.split("/"),!t).join("/"),e||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e}},function(e,t,r){var n=r(3),a=n.assertString;e.exports={isAbsolute:function(e){return a(e),!!e&&"/"===e[0]},existTailSlash:function(e){return a(e),e&&"/"===e[e.length-1]}}}])});