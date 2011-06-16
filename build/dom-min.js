/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dom/attr",function(l,a,v,s){function B(d,c){c=t[c]||c;var m=b[c];if(!d)return s;return m&&m.get?m.get(d,c):d[c]}v=document.documentElement;var A=!v.hasAttribute,x=v.textContent!==s?"textContent":"innerText",i=a._isElementNode,f=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,r=/^(?:button|input|object|select|textarea)$/i,w=/^a(?:rea)?$/i,h=/:|^on/,q=/\r/g,o={},g={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1},k={tabindex:{get:function(d){var c=d.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(d.nodeName)||w.test(d.nodeName)&&d.href?0:null}},style:{get:function(d){return d.style.cssText},set:function(d,c){d.style.cssText=c}}},t={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
p={get:function(d,c){return a.prop(d,c)?c.toLowerCase():null},set:function(d,c,m){if(c===false)a.removeAttr(d,m);else{c=t[m]||m;if(c in d)d[c]=true;d.setAttribute(m,m.toLowerCase())}return m}},b={},e={},n={option:{get:function(d){var c=d.attributes.value;return!c||c.specified?d.value:d.text}},select:{get:function(d){var c=d.selectedIndex,m=d.options;d=d.type==="select-one";if(c<0)return null;else if(d)return a.val(m[c]);c=[];d=0;for(var j=m.length;d<j;++d)m[d].selected&&c.push(a.val(m[d]));return c},
set:function(d,c){var m=l.makeArray(c);l.each(d.options,function(j){j.selected=l.inArray(a.val(j),m)});if(!m.length)d.selectedIndex=-1;return m}}};if(A){e={get:function(d,c){var m;return(m=d.getAttributeNode(c))&&m.nodeValue!==""?m.nodeValue:null},set:function(d,c,m){if(d=d.getAttributeNode(m))d.nodeValue=c}};o=t;k.tabIndex=k.tabindex;l.each(["href","src","width","height","colSpan","rowSpan"],function(d){k[d]={get:function(c){c=c.getAttribute(d,2);return c===s?null:c}}});n.button=k.value=e}l.each(["radio",
"checkbox"],function(d){n[d]={get:function(c){return c.getAttribute("value")===null?"on":c.value},set:function(c,m){if(l.isArray(m))return c.checked=l.inArray(a.val(c),m)}}});l.mix(a,{prop:function(d,c,m){if(l.isPlainObject(c))for(var j in c)a.prop(d,j,c[j]);else{d=a.query(d);c=t[c]||c;var u=b[c];if(m!==s)l.each(d,function(y){if(u&&u.set)u.set(y,m,c);else y[c]=m});else{d=d[0];if(!d)return null;d=B(d,c);return d===s?null:d}}},hasProp:function(d,c){var m=a.get(d);return B(m,c)!==s},removeProp:function(d,
c){c=t[c]||c;a.query(d).each(function(m){try{m[c]=s;delete m[c]}catch(j){}})},attr:function(d,c,m,j){if(l.isPlainObject(c)){j=m;for(var u in c)a.attr(d,u,c[u],j)}else if(c=l.trim(c)){c=c.toLowerCase();if(j&&g[c])return a[c](d,m);c=o[c]||c;var y;y=f.test(c)?p:h.test(c)?e:k[c];if(m===s){d=a.get(d);if(!i(d))return null;if(d.nodeName.toLowerCase()=="form")y=e;if(y&&y.get)return y.get(d,c);d=d.getAttribute(c);return d===s?null:d}else l.each(a.query(d),function(z){if(i(z))y&&y.set?y.set(z,m,c):z.setAttribute(c,
""+m)})}},removeAttr:function(d,c){c=c.toLowerCase();c=o[c]||c;l.each(a.query(d),function(m){if(i(m)){var j;m.removeAttribute(c);if(f.test(c)&&(j=t[c]||c)in m)m[j]=false}})},hasAttr:A?function(d,c){c=c.toLowerCase();var m=a.get(d).getAttributeNode(c);return!!(m&&m.specified)}:function(d,c){c=c.toLowerCase();return a.get(d).hasAttribute(c)},val:function(d,c){var m,j;if(c===s){var u=a.get(d);if(u){if((m=n[u.nodeName.toLowerCase()]||n[u.type])&&"get"in m&&(j=m.get(u,"value"))!==s)return j;j=u.value;
return typeof j==="string"?j.replace(q,""):j==null?"":j}return null}a.query(d).each(function(y){if(y.nodeType===1){var z=c;if(z==null)z="";else if(typeof z==="number")z+="";else if(l.isArray(z))z=l.map(z,function(C){return C==null?"":C+""});m=n[y.nodeName.toLowerCase()]||n[y.type];if(!m||!("set"in m)||m.set(y,z,"value")===s)y.value=z}})},text:function(d,c){if(c===s){var m=a.get(d);if(i(m))return m[x]||"";else if(a._nodeTypeIs(m,3))return m.nodeValue;return null}else l.each(a.query(d),function(j){if(i(j))j[x]=
c;else if(a._nodeTypeIs(j,3))j.nodeValue=c})}});return a},{requires:["./base","ua"]});KISSY.add("dom/base",function(l,a){function v(s,B){return s&&s.nodeType===B}return{_isElementNode:function(s){return v(s,1)},_getWin:function(s){return s&&"scrollTo"in s&&s.document?s:v(s,9)?s.defaultView||s.parentWindow:s==a?window:false},_nodeTypeIs:v,_isNodeList:function(s){return s&&!s.nodeType&&s.item&&!s.setTimeout}}});
KISSY.add("dom/class",function(l,a,v){function s(x,i,f,r){if(!(i=l.trim(i)))return r?false:v;x=a.query(x);var w=0,h=x.length,q=i.split(B);for(i=[];w<q.length;w++){var o=l.trim(q[w]);o&&i.push(o)}for(w=0;w<h;w++){q=x[w];if(a._isElementNode(q)){q=f(q,i,i.length);if(q!==v)return q}}if(r)return false;return v}var B=/[\.\s]\s*\.?/,A=/[\n\t]/g;l.mix(a,{hasClass:function(x,i){return s(x,i,function(f,r,w){if(f=f.className){f=(" "+f+" ").replace(A," ");for(var h=0,q=true;h<w;h++)if(f.indexOf(" "+r[h]+" ")<
0){q=false;break}if(q)return true}},true)},addClass:function(x,i){s(x,i,function(f,r,w){var h=f.className;if(h){var q=(" "+h+" ").replace(A," ");h=h;for(var o=0;o<w;o++)if(q.indexOf(" "+r[o]+" ")<0)h+=" "+r[o];f.className=l.trim(h)}else f.className=i},v)},removeClass:function(x,i){s(x,i,function(f,r,w){var h=f.className;if(h)if(w){h=(" "+h+" ").replace(A," ");for(var q=0,o;q<w;q++)for(o=" "+r[q]+" ";h.indexOf(o)>=0;)h=h.replace(o," ");f.className=l.trim(h)}else f.className=""},v)},replaceClass:function(x,
i,f){a.removeClass(x,i);a.addClass(x,f)},toggleClass:function(x,i,f){var r=l.isBoolean(f),w;s(x,i,function(h,q,o){for(var g=0,k;g<o;g++){k=q[g];w=r?!f:a.hasClass(h,k);a[w?"removeClass":"addClass"](h,k)}},v)}});return a},{requires:["dom/base"]});
KISSY.add("dom/create",function(l,a,v,s){function B(j,u){if(l.isPlainObject(u))if(h(j))a.attr(j,u,true);else j.nodeType==11&&l.each(j.childNodes,function(y){a.attr(y,u,true)});return j}function A(j,u){var y=null,z,C;if(j&&(j.push||j.item)&&j[0]){u=u||j[0].ownerDocument;y=u.createDocumentFragment();if(j.item)j=l.makeArray(j);z=0;for(C=j.length;z<C;z++)y.appendChild(j[z])}return y}function x(j,u,y,z){if(y){var C=l.guid("ks-tmp-"),F=RegExp(k);u+='<span id="'+C+'"></span>';l.available(C,function(){var E=
a.get("head"),D,I,G,H,K,J;for(F.lastIndex=0;D=F.exec(u);)if((G=(I=D[1])?I.match(p):false)&&G[2]){D=f.createElement("script");D.src=G[2];if((H=I.match(b))&&H[2])D.charset=H[2];D.async=true;E.appendChild(D)}else if((J=D[2])&&J.length>0)l.globalEval(J);(K=f.getElementById(C))&&a.remove(K);l.isFunction(z)&&z()});i(j,u)}else{i(j,u);l.isFunction(z)&&z()}}function i(j,u){u=(u+"").replace(k,"");try{j.innerHTML=u}catch(y){for(;j.firstChild;)j.removeChild(j.firstChild);u&&j.appendChild(a.create(u))}}var f=
document,r=v.ie,w=a._nodeTypeIs,h=a._isElementNode,q=f.createElement("div"),o=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,g=/<(\w+)/,k=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,t=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,p=/\ssrc=(['"])(.*?)\1/i,b=/\scharset=(['"])(.*?)\1/i;l.mix(a,{create:function(j,u,y){if(w(j,1)||w(j,3)){u=j;y=u.cloneNode(true);if(v.ie<8)y.innerHTML=u.innerHTML;return y}if(!(j=l.trim(j)))return null;var z=null;z=a._creators;var C,F="div",E;
if(C=t.exec(j))z=(y||f).createElement(C[1]);else{j=j.replace(o,"<$1></$2>");if((C=g.exec(j))&&(E=C[1])&&l.isFunction(z[E=E.toLowerCase()]))F=E;j=z[F](j,y).childNodes;z=j.length===1?j[0].parentNode.removeChild(j[0]):A(j,y||f)}return B(z,u)},_creators:{div:function(j,u){var y=u?u.createElement("div"):q;y.innerHTML="w<div>"+j+"</div>";return y.lastChild}},html:function(j,u,y,z){if(u===s){j=a.get(j);if(h(j))return j.innerHTML;return null}else l.each(a.query(j),function(C){h(C)&&x(C,u,y,z)})},remove:function(j){l.each(a.query(j),
function(u){u.parentNode&&u.parentNode.removeChild(u)})},_nl2frag:A});if(r||v.gecko||v.webkit){var e=a._creators,n=a.create,d=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,c={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},m;for(m in c)(function(j){e[m]=function(u,y){return n("<"+j+">"+u+"</"+j+">",null,y)}})(c[m]);if(r){e.script=function(j,u){var y=u?u.createElement("div"):q;y.innerHTML="-"+j;y.removeChild(y.firstChild);return y};if(r<8)e.tbody=function(j,
u){var y=n("<table>"+j+"</table>",null,u),z=y.children.tags("tbody")[0];y.children.length>1&&z&&!d.test(j)&&z.parentNode.removeChild(z);return y}}l.mix(e,{optgroup:e.option,th:e.td,thead:e.tbody,tfoot:e.tbody,caption:e.tbody,colgroup:e.tbody})}return a},{requires:["./base","ua"]});
KISSY.add("dom/data",function(l,a,v){var s=window,B="_ks_data_"+l.now(),A={},x={},i={};i.applet=1;i.object=1;i.embed=1;var f={hasData:function(h,q){if(h)if(q!==v){if(q in h)return true}else if(!l.isEmptyObject(h))return true;return false}},r={hasData:function(h,q){if(h==s)return r.hasData(x,q);return f.hasData(h[B],q)},data:function(h,q,o){if(h==s)return r.data(x,q,o);h=h[B]=h[B]||{};if(o!==v)h[q]=o;else return q!==v?h[q]===v?null:h[q]:h},removeData:function(h,q){if(h==s)return r.removeData(x,q);
var o=h[B];if(o)if(q!==v){delete o[q];l.isEmptyObject(o)&&r.removeData(h,v)}else delete h[B]}},w={hasData:function(h,q){var o=h[B];if(!o)return false;return f.hasData(A[o],q)},data:function(h,q,o){if(!i[h.nodeName.toLowerCase()]){var g=h[B];g||(g=h[B]=l.guid());h=A[g]=A[g]||{};if(o!==v)h[q]=o;else return q!==v?h[q]===v?null:h[q]:h}},removeData:function(h,q){var o=h[B];if(o){var g=A[o];if(g)if(q!==v){delete g[q];l.isEmptyObject(g)&&w.removeData(h,v)}else{delete A[o];try{delete h[B]}catch(k){}h.removeAttribute&&
h.removeAttribute(B)}}}};l.mix(a,{hasData:function(h,q){var o=false;a.query(h).each(function(g){o=g&&g.nodeType?o||w.hasData(g,q):o||r.hasData(g,q)});return o},data:function(h,q,o){if(l.isPlainObject(q))for(var g in q)a.data(h,g,q[g]);else if(o===v)return(h=a.get(h))&&h.nodeType?w.data(h,q,o):r.data(h,q,o);else a.query(h).each(function(k){k&&k.nodeType?w.data(k,q,o):r.data(k,q,o)})},removeData:function(h,q){a.query(h).each(function(o){o&&o.nodeType?w.removeData(o,q):r.removeData(o,q)})}});return a},
{requires:["./base"]});
KISSY.add("dom/insertion",function(l,a){function v(x,i,f){x=a.query(x);i=a.query(i);if(x=s(x)){var r;if(i.length>1)r=x.cloneNode(true);for(var w=0;w<i.length;w++){var h=i[w],q=w>0?r.cloneNode(true):x;f(q,h)}}}var s=a._nl2frag;l.mix(a,{insertBefore:function(x,i){v(x,i,function(f,r){r.parentNode&&r.parentNode.insertBefore(f,r)})},insertAfter:function(x,i){v(x,i,function(f,r){r.parentNode&&r.parentNode.insertBefore(f,r.nextSibling)})},appendTo:function(x,i){v(x,i,function(f,r){r.appendChild(f)})},prependTo:function(x,
i){v(x,i,function(f,r){r.insertBefore(f,r.firstChild)})}});var B={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},A;for(A in B)a[A]=a[B[A]];return a},{requires:["./create"]});
KISSY.add("dom/offset",function(l,a,v,s){function B(b){var e=0,n=0,d=f(b[q]);if(b[p]){b=b[p]();e=b[o];n=b[g];if(v.mobile!=="apple"){e+=a[k](d);n+=a[t](d)}}return{left:e,top:n}}var A=window,x=a._isElementNode,i=a._nodeTypeIs,f=a._getWin,r=document.compatMode==="CSS1Compat",w=Math.max,h=parseInt,q="ownerDocument",o="left",g="top",k="scrollLeft",t="scrollTop",p="getBoundingClientRect";l.mix(a,{offset:function(b,e){if(!(b=a.get(b))||!b[q])return null;if(e===s)return B(b);var n=b;if(a.css(n,"position")===
"static")n.style.position="relative";var d=B(n),c={},m,j;for(j in e){m=h(a.css(n,j),10)||0;c[j]=m+e[j]-d[j]}a.css(n,c)},scrollIntoView:function(b,e,n,d){if((b=a.get(b))&&b[q]){d=d===s?true:!!d;n=n===s?true:!!n;if(!e||(e=a.get(e))===A)b.scrollIntoView(n);else{if(i(e,9))e=f(e);var c=!!f(e),m=a.offset(b),j=c?{left:a.scrollLeft(e),top:a.scrollTop(e)}:a.offset(e),u={left:m[o]-j[o],top:m[g]-j[g]};m=c?a.viewportHeight(e):e.clientHeight;c=c?a.viewportWidth(e):e.clientWidth;j=a[k](e);var y=a[t](e),z=j+c,C=
y+m,F=b.offsetHeight;b=b.offsetWidth;var E=u.left+j-(h(a.css(e,"borderLeftWidth"))||0);u=u.top+y-(h(a.css(e,"borderTopWidth"))||0);var D=E+b,I=u+F,G,H;if(F>m||u<y||n)G=u;else if(I>C)G=I-m;if(d)if(b>c||E<j||n)H=E;else if(D>z)H=D-c;a[t](e,G);a[k](e,H)}}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});l.each(["Left","Top"],function(b,e){var n="scroll"+b;a[n]=function(d,c){if(l.isNumber(d))arguments.callee(A,d);else{d=a.get(d);var m=0,j=f(d);if(j){if(c!==s){m=b=="Left"?c:a.scrollLeft(j);var u=
b=="Top"?c:a.scrollTop(j);j.scrollTo(m,u)}m=j.document;m=j[e?"pageYOffset":"pageXOffset"]||m.documentElement[n]||m.body[n]}else if(x(d=a.get(d)))m=c!==s?d[n]=c:d[n];return c===s?m:s}}});l.each(["Width","Height"],function(b){a["doc"+b]=function(e){e=a.get(e);e=f(e).document;return w(e.documentElement["scroll"+b],e.body["scroll"+b],a["viewport"+b](e))};a["viewport"+b]=function(e){e=a.get(e);var n="inner"+b;e=f(e);var d=e.document;return n in e?e[n]:r?d.documentElement["client"+b]:d.body["client"+b]}});
return a},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(l,a,v){function s(g,k){var t,p,b=[],e;p=l.require("sizzle");k=B(k);if(l.isString(g))if(g.indexOf(",")!=-1){t=g.split(",");l.each(t,function(n){b.push.apply(b,l.makeArray(s(n,k)))})}else{g=l.trim(g);if(h.test(g)){if(p=A(g.slice(1),k))b=[p]}else if(t=q.exec(String(g))){p=t[1];e=t[2];t=t[3];if(k=p?A(p,k):k)if(t)if(!p||g.indexOf(w)!==-1)b=l.makeArray(o(t,e,k));else{if((p=A(p,k))&&a.hasClass(p,t))b=[p]}else if(e)b=x(e,k)}else if(p)b=p(g,k);else i(g)}else if(g&&(l.isArray(g)||
r(g)))b=g;else if(g)b=[g];if(r(b))b=l.makeArray(b);b.each=function(n,d){return l.each(b,n,d)};return b}function B(g){if(g===v)g=f;else if(l.isString(g)&&h.test(g))g=A(g.slice(1),f);else if(l.isArray(g)||r(g))g=g[0]||null;else if(g&&g.nodeType!==1&&g.nodeType!==9)g=null;return g}function A(g,k){if(!k)return null;if(k.nodeType!==9)k=k.ownerDocument;return k.getElementById(g)}function x(g,k){return k.getElementsByTagName(g)}function i(g){l.error("Unsupported selector: "+g)}var f=document,r=a._isNodeList,
w=" ",h=/^#[\w-]+$/,q=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var g=f.createElement("div");g.appendChild(f.createComment(""));if(g.getElementsByTagName("*").length>0)x=function(k,t){var p=l.makeArray(t.getElementsByTagName(k));if(k==="*"){for(var b=[],e=0,n=0,d;d=p[e++];)if(d.nodeType===1)b[n++]=d;p=b}return p}})();var o=f.getElementsByClassName?function(g,k,t){t=g=l.makeArray(t.getElementsByClassName(g));var p=0,b=0,e=g.length,n;if(k&&k!=="*"){t=[];for(k=k.toUpperCase();p<e;++p){n=
g[p];if(n.tagName===k)t[b++]=n}}return t}:f.querySelectorAll?function(g,k,t){return t.querySelectorAll((k?k:"")+"."+g)}:function(g,k,t){k=t.getElementsByTagName(k||"*");t=[];var p=0,b=0,e=k.length,n,d;for(g=w+g+w;p<e;++p){n=k[p];if((d=n.className)&&(w+d+w).indexOf(g)>-1)t[b++]=n}return t};l.mix(a,{query:s,get:function(g,k){return s(g,k)[0]||null},filter:function(g,k,t){var p=s(g,t),b=l.require("sizzle"),e,n,d,c=[];if(l.isString(k)&&(e=q.exec(k))&&!e[1]){n=e[2];d=e[3];k=function(m){return!(n&&m.tagName.toLowerCase()!==
n.toLowerCase()||d&&!a.hasClass(m,d))}}if(l.isFunction(k))c=l.filter(p,k);else if(k&&b)c=b._filter(g,k,t);else i(k);return c},test:function(g,k,t){g=s(g,t);return g.length&&a.filter(g,k,t).length===g.length}});return a},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(l,a,v,s,B){if(!v.ie)return a;s=document;var A=s.documentElement,x=a._CUSTOM_STYLES,i=/^-?\d+(?:px)?$/i,f=/^-?\d/,r=/^(?:width|height)$/;try{if(A.style.opacity==B&&A.filters)x.opacity={get:function(o){var g=100;try{g=o.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(k){try{g=o.filters("alpha").opacity}catch(t){if(o=((o.currentStyle||0).filter||"").match(/alpha\(opacity[=:]([^)]+)\)/))g=parseInt(l.trim(o[1]))}}return g/100+""},set:function(o,g){var k=o.style,
t=(o.currentStyle||0).filter||"";k.zoom=1;if(t)t=l.trim(t.replace(/alpha\(opacity[=:][^)]+\),?/ig,""));if(t&&g!=1)t+=", ";k.filter=t+(g!=1?"alpha(opacity="+g*100+")":"")}}}catch(w){}v=v.ie==8;var h={},q={get:function(o,g){var k=o.currentStyle[g]+"";if(k.indexOf("px")<0)k=h[k]?h[k]:0;return k}};h.thin=v?"1px":"2px";h.medium=v?"3px":"4px";h.thick=v?"5px":"6px";l.each(["","Top","Left","Right","Bottom"],function(o){x["border"+o+"Width"]=q});if(!(s.defaultView||{}).getComputedStyle&&A.currentStyle)a._getComputedStyle=
function(o,g){var k=o.style,t=o.currentStyle[g];if(r.test(g))t=a[g](o)+"px";else if(!i.test(t)&&f.test(t)){var p=k.left,b=o.runtimeStyle.left;o.runtimeStyle.left=o.currentStyle.left;k.left=g==="fontSize"?"1em":t||0;t=k.pixelLeft+"px";k.left=p;o.runtimeStyle.left=b}return t};return a},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(l,a,v,s){function B(p,b){var e=a.get(p);if(l.isWindow(e))return b==f?a.viewportWidth(e):a.viewportHeight(e);else if(e.nodeType==9)return b==f?a.docWidth(e):a.docHeight(e);var n=b===f?e.offsetWidth:e.offsetHeight;l.each(b===f?["Left","Right"]:["Top","Bottom"],function(d){n-=parseFloat(a._getComputedStyle(e,"padding"+d))||0;n-=parseFloat(a._getComputedStyle(e,"border"+d+"Width"))||0});return n}function A(p,b,e){var n=e;if(e===r&&h.test(b)){n=0;if(l.inArray(a.css(p,"position"),
["absolute","fixed"])){e=p[b==="left"?"offsetLeft":"offsetTop"];if(v.ie===8||v.opera)e-=w(a.css(p.offsetParent,"border-"+b+"-width"))||0;n=e-(w(a.css(p,"margin-"+b))||0)}}return n}var x=document,i=x.documentElement,f="width",r="auto",w=parseInt,h=/^(?:left|top)/,q=/^(?:width|height|top|left|right|bottom|margin|padding)/i,o=/-([a-z])/ig,g=function(p,b){return b.toUpperCase()},k={},t={};l.mix(a,{_CUSTOM_STYLES:k,_getComputedStyle:function(p,b){var e="",n=p.ownerDocument;if(p.style)e=n.defaultView.getComputedStyle(p,
null)[b];return e},css:function(p,b,e){if(l.isPlainObject(b))for(var n in b)a.css(p,n,b[n]);else{if(b.indexOf("-")>0)b=b.replace(o,g);n=b;b=k[b]||b;if(e===s){p=a.get(p);var d="";if(p&&p.style){d=b.get?b.get(p,n):p.style[b];if(d===""&&!b.get)d=A(p,b,a._getComputedStyle(p,b))}return d===s?"":d}else{if(e===null||e==="")e="";else if(!isNaN(new Number(e))&&q.test(b))e+="px";(b===f||b==="height")&&parseFloat(e)<0||l.each(a.query(p),function(c){if(c&&c.style){b.set?b.set(c,e):c.style[b]=e;if(e==="")c.style.cssText||
c.removeAttribute("style")}})}}},width:function(p,b){if(b===s)return B(p,f);else a.css(p,f,b)},height:function(p,b){if(b===s)return B(p,"height");else a.css(p,"height",b)},show:function(p){a.query(p).each(function(b){if(b){b.style.display=a.data(b,"display")||"";if(a.css(b,"display")==="none"){var e=b.tagName,n=t[e],d;if(!n){d=x.createElement(e);x.body.appendChild(d);n=a.css(d,"display");a.remove(d);t[e]=n}a.data(b,"display",n);b.style.display=n}}})},hide:function(p){a.query(p).each(function(b){if(b){var e=
b.style,n=e.display;if(n!=="none"){n&&a.data(b,"display",n);e.display="none"}}})},toggle:function(p){a.query(p).each(function(b){if(b)a.css(b,"display")==="none"?a.show(b):a.hide(b)})},addStyleSheet:function(p,b,e){if(l.isString(p)){e=b;b=p;p=window}p=a.get(p);p=a._getWin(p).document;var n;if(e&&(e=e.replace("#","")))n=a.get("#"+e,p);if(!n){n=a.create("<style>",{id:e},p);a.get("head",p).appendChild(n);if(n.styleSheet)n.styleSheet.cssText=b;else n.appendChild(p.createTextNode(b))}},unselectable:function(p){a.query(p).each(function(b){if(b)if(v.gecko)b.style.MozUserSelect=
"none";else if(v.webkit)b.style.KhtmlUserSelect="none";else if(v.ie||v.opera){var e=0,n=b.getElementsByTagName("*");for(b.setAttribute("unselectable","on");b=n[e++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable","on")}}})}});if(i.style.cssFloat!==s)k["float"]="cssFloat";else if(i.style.styleFloat!==s)k["float"]="styleFloat";return a},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(l,a,v){function s(i,f,r,w,h,q){if(!(i=a.get(i)))return null;if(f===0)return i;q||(i=i[r]);if(!i)return null;h=h&&a.get(h)||null;if(f===v)f=1;q=[];var o=l.isArray(f),g,k;if(l.isNumber(f)){g=0;k=f;f=function(){return++g===k}}do if(x(i)&&B(i,f)&&(!w||w(i))){q.push(i);if(!o)break}while(i!=h&&(i=i[r]));return o?q:q[0]||null}function B(i,f){if(!f)return true;if(l.isArray(f))for(var r=0;r<f.length;r++){if(a.test(i,f[r]))return true}else if(a.test(i,f))return true;return false}
function A(i,f,r){var w=[];var h=i=a.get(i);if(i&&r)h=i.parentNode;if(h){r=0;for(h=h.firstChild;h;h=h.nextSibling)if(x(h)&&h!==i&&(!f||a.test(h,f)))w[r++]=h}return w}var x=a._isElementNode;l.mix(a,{closest:function(i,f,r){return s(i,f,"parentNode",function(w){return w.nodeType!=11},r,true)},parent:function(i,f,r){return s(i,f,"parentNode",function(w){return w.nodeType!=11},r)},next:function(i,f){return s(i,f,"nextSibling",v)},prev:function(i,f){return s(i,f,"previousSibling",v)},siblings:function(i,
f){return A(i,f,true)},children:function(i,f){return A(i,f,v)},contains:document.documentElement.contains?function(i,f){i=a.get(i);f=a.get(f);if(i.nodeType==3)return false;var r;if(f.nodeType==3){f=f.parentNode;r=true}else if(f.nodeType==9)return false;else r=i!==f;return r&&(i.contains?i.contains(f):true)}:document.documentElement.compareDocumentPosition?function(i,f){i=a.get(i);f=a.get(f);return!!(i.compareDocumentPosition(f)&16)}:0,equals:function(i,f){i=a.query(i);f=a.query(f);if(i.length!=f.length)return false;
for(var r=i.length;r>=0;r--)if(i[r]!=f[r])return false;return true}});return a},{requires:["./base"]});KISSY.add("dom",function(l,a){return a},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});