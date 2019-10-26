!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((t===!1?"":"^")+"(?:"+e+")",n)}function a(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}function r(e,r){(e.next||e.push)&&t(r,e.next||e.push),this.regex=n(e.regex),this.token=a(e.token),this.data=e}function o(e,t){return function(n,a){if(a.pending){var r=a.pending.shift();return 0==a.pending.length&&(a.pending=null),n.pos+=r.text.length,r.token}if(a.local){if(a.local.end&&n.match(a.local.end)){var o=a.local.endToken||null;return a.local=a.localState=null,o}var i,o=a.local.mode.token(n,a.localState);return a.local.endScan&&(i=a.local.endScan.exec(n.current()))&&(n.pos=n.start+i.index),o}for(var s=e[a.state],d=0;d<s.length;d++){var c=s[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){c.data.next?a.state=c.data.next:c.data.push?((a.stack||(a.stack=[])).push(a.state),a.state=c.data.push):c.data.pop&&a.stack&&a.stack.length&&(a.state=a.stack.pop()),c.data.mode&&l(t,a,c.data.mode,c.token),c.data.indent&&a.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&a.indent.pop();var p=c.token;if(p&&p.apply&&(p=p(u)),u.length>2&&c.token&&"string"!=typeof c.token){a.pending=[];for(var f=2;f<u.length;f++)u[f]&&a.pending.push({text:u[f],token:c.token[f-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),p[0]}return p&&p.join?p[0]:p}}return n.next(),null}}function i(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var a in e)if(e.hasOwnProperty(a)){if(!t.hasOwnProperty(a)||!i(e[a],t[a]))return!1;n++}for(var a in t)t.hasOwnProperty(a)&&n--;return 0==n}function l(t,a,r,o){var l;if(r.persistent)for(var s=a.persistentStates;s&&!l;s=s.next)(r.spec?i(r.spec,s.spec):r.mode==s.mode)&&(l=s);var d=l?l.mode:r.mode||e.getMode(t,r.spec),c=l?l.state:e.startState(d);r.persistent&&!l&&(a.persistentStates={mode:d,spec:r.spec,state:c,next:a.persistentStates}),a.localState=c,a.local={mode:d,end:r.end&&n(r.end),endScan:r.end&&r.forceEnd!==!1&&n(r.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function s(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function d(t,n){return function(a,r,o){if(a.local&&a.local.mode.indent)return a.local.mode.indent(a.localState,r,o);if(null==a.indent||a.local||n.dontIndentStates&&s(a.state,n.dontIndentStates)>-1)return e.Pass;var i=a.indent.length-1,l=t[a.state];e:for(;;){for(var d=0;d<l.length;d++){var c=l[d];if(c.data.dedent&&c.data.dedentIfLineStart!==!1){var u=c.regex.exec(r);if(u&&u[0]){i--,(c.next||c.push)&&(l=t[c.next||c.push]),r=r.slice(u[0].length);continue e}}}break}return i<0?0:a.indent[i]}}e.defineSimpleMode=function(t,n){e.defineMode(t,function(t){return e.simpleMode(t,n)})},e.simpleMode=function(n,a){t(a,"start");var i={},l=a.meta||{},s=!1;for(var c in a)if(c!=l&&a.hasOwnProperty(c))for(var u=i[c]=[],p=a[c],f=0;f<p.length;f++){var h=p[f];u.push(new r(h,a)),(h.indent||h.dedent)&&(s=!0)}var g={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:s?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var a=t.persistentStates;a;a=a.next)n.persistentStates={mode:a.mode,spec:a.spec,state:a.state==t.localState?n.localState:e.copyState(a.mode,a.state),next:n.persistentStates};return n},token:o(i,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:d(i,l)};if(l)for(var S in l)l.hasOwnProperty(S)&&(g[S]=l[S]);return g}});