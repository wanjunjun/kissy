/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Jun 21 01:47
*/
KISSY.add("component/controller/common-process",function(e,f,i){var m=i.Defer,e=e.noop,h=f.extend({bindInternal:e,syncInternal:e,initializer:function(){this._createdDefer=new m;this._renderedDefer=new m},onCreated:function(c){return this._createdDefer.promise.then(c)},onRendered:function(c){return this._renderedDefer.promise.then(c)},render:function(){this.get("rendered")||(this.create(),this.fire("beforeRenderUI"),this.callMethodByHierarchy("renderUI","__renderUI"),this.callPluginsMethod("renderUI"),
this.fire("afterRenderUI"),this.fire("beforeBindUI"),h.superclass.bindInternal.call(this),this.callMethodByHierarchy("bindUI","__bindUI"),this.callPluginsMethod("bindUI"),this.fire("afterBindUI"),h.superclass.syncInternal.call(this),this.sync(),this.setInternal("rendered",!0));return this},sync:function(){this.fire("beforeSyncUI");this.callMethodByHierarchy("syncUI","__syncUI");this.callPluginsMethod("syncUI");this.fire("afterSyncUI")},plug:function(){var c;c=this.get("plugins");h.superclass.plug.apply(this,
arguments);c=c[c.length-1];this.get("rendered")?(c.pluginCreateDom&&c.pluginCreateDom(this),c.pluginRenderUI&&c.pluginRenderUI(this),c.pluginBindUI&&c.pluginBindUI(this),c.pluginSyncUI&&c.pluginSyncUI(this)):this.get("created")&&c.pluginCreateDom&&c.pluginCreateDom(this);return this}},{name:"CommonProcess",ATTRS:{rendered:{value:!1,setter:function(c){c&&this._renderedDefer.resolve(this)}},created:{value:!1,setter:function(c){c&&this._createdDefer.resolve(this)}}}});return h},{requires:["rich-base",
"promise"]});KISSY.add("component/controller/process",function(e,f){var i=f.extend({create:function(){this.get("created")||(this.fire("beforeCreateDom"),this.callMethodByHierarchy("createDom","__createDom"),this.callPluginsMethod("createDom"),this.fire("afterCreateDom"),this.setInternal("created",!0));return this},destroy:function(){this.get("created")&&i.superclass.destroy.apply(this,arguments)}},{name:"ControllerProcess"});return i},{requires:["./common-process"]});
KISSY.add("component/controller/render-process",function(e,f){return f.extend({create:function(){this.get("created")||(this.callMethodByHierarchy("beforeCreateDom","__beforeCreateDom",[this.renderData={},this.childrenElSelectors={}]),this.callMethodByHierarchy("createDom","__createDom"),this.callPluginsMethod("createDom"),this.setInternal("created",!0));return this},decorate:function(e){this.get("created")||(this.callMethodByHierarchy("decorateDom","__decorateDom",[e]),this.callPluginsMethod("createDom"),
this.setInternal("created",!0));return this}},{name:"RenderProcess"})},{requires:["./common-process"]});KISSY.add("component/controller/render-tpl",function(){return'<div id="{{id}}" class="{{getBaseCssClasses ""}} {{#each elCls}} {{.}} {{/each}} " {{#each elAttrs}} {{xkey}}="{{.}}" {{/each}} style=" {{#each elStyle}} {{xkey}}:{{.}}; {{/each}} ">'});
KISSY.add("component/controller/render",function(e,f,i,m,h){function c(d){"number"==typeof d&&(d+="px");return d}function n(d){d||(d=[""]);"string"==typeof d&&(d=d.split(/\s+/));return d}function l(d,g,a){for(var b="",e=0,c=a.length,g=d+g;e<c;e++)d=(d=a[e])?"-"+d:d,b+=" "+g+d;return b}function o(d){var g;d.target==this.controller&&(g=this[a+d.type.slice(5).slice(0,-6)],g.call(this,d.newVal,d))}var a="_onSet",b=e.trim,r=e.all,s=e.UA,t=e.Env.host.document;return f.extend({isRender:1,beforeCreateDom:function(d){var g=
this.controller,a,b,e,q=g.get("elAttrs"),f=g.get("elCls"),k;a=g.getAttrs();k=g.get("elStyle");var j=g.get("elCls");for(b in a)e=a[b],e.view&&(d[b]=g.get(b));a=d.width;b=d.height;e=d.visible;d=d.zIndex;a&&(k.width=c(a));b&&(k.height=c(b));d&&(k["z-index"]=d);e||j.push(this.getBaseCssClasses("hidden"));if(k=g.get("disabled"))f.push(this.getBaseCssClasses("disabled")),q["aria-disabled"]="true";g.get("highlighted")&&f.push(this.getBaseCssClasses("hover"));g.get("focusable")&&(q.hideFocus="true",q.tabindex=
k?"-1":"0")},createDom:function(){var d=this.controller,a;a=this.renderTpl(m+this.get("contentTpl")+"</div>");d.setInternal("el",d.el=this.el=r(a));this.fillChildrenElsBySelectors()},decorateDom:function(d){var a=this.constructor,b=this.controller,c,p,f;d.attr("id")||d.attr("id",b.get("id"));f=this.collectConstructorChains();for(c=f.length-1;0<=c;c--)if(a=f[c],p=a.HTML_PARSER){var a=d,h=b,k=void 0,j=void 0,j=void 0;for(k in p)j=p[k],e.isFunction(j)?(j=j.call(this,a),void 0!==j&&h.setInternal(k,j)):
"string"==typeof j?h.setInternal(k,a.one(j)):e.isArray(j)&&j[0]&&h.setInternal(k,a.all(j[0]))}b.setInternal("el",b.el=this.el=d)},renderUI:function(){var d=this.controller,a=this.el;if(!d.get("srcNode")){var b=d.get("render");(d=d.get("elBefore"))?a.insertBefore(d,void 0):b?a.appendTo(b,void 0):a.appendTo(t.body,void 0)}},bindUI:function(){var d=this.controller,g=d.getAttrs(),b,c;for(b in g){c=g[b];var f=e.ucfirst(b),h=this[a+f];if(c.view&&h)d.on("after"+f+"Change",o,this)}},syncUI:function(){},destructor:function(){this.el.remove()},
fillChildrenElsBySelectors:function(d){var a=this.el,b=this.controller,c,f,d=d||this.childrenElSelectors;for(c in d)f=d[c],"function"===typeof f?b.setInternal(c,f(a)):b.setInternal(c,a.all(e.substitute(f,this.renderData))),delete d[c]},renderTpl:function(d,a){var b=this,a=a||b.renderData;return(new i(d,{commands:{getBaseCssClasses:function(a,d){return b.getBaseCssClasses(d.params[0])}}})).render(a)},getComponentConstructorByNode:function(a,b){var c=b[0].className;return c?(c=c.replace(RegExp("\\b"+
a,"ig"),""),h.getConstructorByXClass(c)):null},getComponentCssClasses:function(){if(this.componentCssClasses)return this.componentCssClasses;for(var a=this.controller.constructor,b,c=[];a&&!a.prototype.hasOwnProperty("isController");)(b=a.xclass)&&c.push(b),a=a.superclass&&a.superclass.constructor;return this.componentCssClasses=c},getBaseCssClasses:function(a){for(var a=n(a),g=this.getComponentCssClasses(),c=0,e=this.get("controller"),f="",h=g.length,e=e.prefixCls;c<h;c++)f+=l(e,g[c],a);return b(f)},
getBaseCssClass:function(a){return b(l(this.controller.prefixCls,this.getComponentCssClasses()[0],n(a)))},getKeyEventTarget:function(){return this.el},_onSetWidth:function(a){this.el.width(a)},_onSetHeight:function(a){this.el.height(a)},_onSetContent:function(a){var b=this.el;b.html(a);9>s.ie&&!this.get("allowTextSelection")&&b.unselectable()},_onSetVisible:function(a){var b=this.el,c=this.getBaseCssClasses("hidden");a?b.removeClass(c):b.addClass(c)},_onSetHighlighted:function(a){var b=this.getBaseCssClasses("hover");
this.el[a?"addClass":"removeClass"](b)},_onSetDisabled:function(a){var b=this.controller,c=this.getBaseCssClasses("disabled");this.el[a?"addClass":"removeClass"](c).attr("aria-disabled",a);b.get("focusable")&&this.getKeyEventTarget().attr("tabindex",a?-1:0)},_onSetActive:function(a){var b=this.getBaseCssClasses("active");this.el[a?"addClass":"removeClass"](b).attr("aria-pressed",!!a)},_onSetFocused:function(a){var b=this.el,c=this.getBaseCssClasses("focused");b[a?"addClass":"removeClass"](c)},_onSetZIndex:function(a){this.el.css("z-index",
a)}},{extend:function g(a,b,c){var h={},i=f.extend.apply(this,arguments);e.isArray(a)&&(e.each(a.concat(i),function(a){a&&e.each(a.HTML_PARSER,function(a,b){h[b]=a})}),i.HTML_PARSER=h);i.extend=g;return i},ATTRS:{controller:{setter:function(a){this.controller=a}},contentTpl:{value:"{{{content}}}"}},HTML_PARSER:{id:function(a){return(a=a[0].id)?a:void 0},content:function(a){return a.html()},disabled:function(a){return a.hasClass(this.getBaseCssClass("disabled"))}},name:"render"})},{requires:["./render-process",
"xtemplate","./render-tpl","component/manager"]});
KISSY.add("component/controller",function(e,f,i,m,h,c){var n=e.Env.host.document.documentMode||e.UA.ie,l=f.Gesture,o=e.Features.isTouchEventSupported(),h=i.extend({isController:!0,initializer:function(){this.prefixCls=this.get("prefixCls")},createDom:function(){var a=this.get("xrender"),b=this.get("view"),c=this.get("srcNode"),e=this.get("id");b||this.set("view",b=new a({controller:this}));c?b.decorate(c):b.create();a=b.getKeyEventTarget();this.get("allowTextSelection")||a.unselectable();m.addComponent(e,
this)},renderUI:function(){this.view.render()},bindUI:function(){var a=this.view.getKeyEventTarget();if(this.get("focusable"))a.on("focus",this.handleFocus,this).on("blur",this.handleBlur,this).on("keydown",this.handleKeydown,this);if(this.get("handleMouseEvents")){a=this.el;if(!o)a.on("mouseenter",this.handleMouseEnter,this).on("mouseleave",this.handleMouseLeave,this).on("contextmenu",this.handleContextMenu,this);a.on(l.start,this.handleMouseDown,this).on(l.end,this.handleMouseUp,this).on(l.tap,
this.handleClick,this);if(l.cancel)a.on(l.cancel,this.handleMouseUp,this);if(n&&9>n)a.on("dblclick",this.handleDblClick,this)}},createComponent:function(a,b){return m.createComponent(a,b||this)},_onSetFocused:function(a){var b=this.view.getKeyEventTarget()[0];a?b.focus():b.ownerDocument.activeElement==b&&b.ownerDocument.body.focus()},_onSetX:function(a){this.el.offset({left:a})},_onSetY:function(a){this.el.offset({top:a})},_onSetVisible:function(a){this.fire(a?"show":"hide")},show:function(){this.render();
this.set("visible",!0);return this},hide:function(){this.set("visible",!1);return this},focus:function(){this.get("focusable")&&this.set("focused",!0)},blur:function(){this.get("focusable")&&this.set("focused",!1)},move:function(a,b){this.set({x:a,y:b})},handleDblClick:function(a){this.get("disabled")||this.handleDblClickInternal(a)},handleDblClickInternal:function(a){this.handleClickInternal(a)},handleMouseEnter:function(a){this.get("disabled")||this.handleMouseEnterInternal(a)},handleMouseEnterInternal:function(a){this.set("highlighted",
!!a)},handleMouseLeave:function(a){this.get("disabled")||this.handleMouseLeaveInternal(a)},handleMouseLeaveInternal:function(a){this.set("active",!1);this.set("highlighted",!a)},handleMouseDown:function(a){this.get("disabled")||this.handleMouseDownInternal(a)},handleMouseDownInternal:function(a){var b;if(1==a.which||o)this.get("activeable")&&this.set("active",!0),this.get("focusable")&&this.focus(),this.get("allowTextSelection")||(b=(b=a.target.nodeName)&&b.toLowerCase(),"input"!=b&&"textarea"!=b&&
a.preventDefault())},handleMouseUp:function(a){this.get("disabled")||this.handleMouseUpInternal(a)},handleMouseUpInternal:function(a){this.get("active")&&(1==a.which||o)&&this.set("active",!1)},handleContextMenu:function(a){this.get("disabled")||this.handleContextMenuInternal(a)},handleContextMenuInternal:function(){},handleFocus:function(){this.get("disabled")||this.handleFocusInternal()},handleFocusInternal:function(){this.focus();this.fire("focus")},handleBlur:function(){this.get("disabled")||
this.handleBlurInternal()},handleBlurInternal:function(){this.blur();this.fire("blur")},handleKeydown:function(a){return!this.get("disabled")&&this.handleKeyDownInternal(a)?(a.halt(),!0):c},handleKeyDownInternal:function(a){return a.keyCode==f.KeyCode.ENTER?this.handleClickInternal(a):c},handleClick:function(a){this.get("disabled")||this.handleClickInternal(a)},handleClickInternal:function(){},destructor:function(){m.removeComponent(this.get("id"));this.view.destroy()}},{name:"controller",ATTRS:{id:{view:1,
valueFn:function(){return e.guid("ks-component")}},content:{view:1,value:""},width:{view:1},height:{view:1},elCls:{view:1,value:[],setter:function(a){"string"==typeof a&&(a=a.split(/\s+/));return a||[]}},elStyle:{view:1,value:{}},elAttrs:{view:1,value:{}},elBefore:{},el:{},x:{},y:{},xy:{setter:function(a){var b=e.makeArray(a);b.length&&(b[0]&&this.set("x",b[0]),b[1]&&this.set("y",b[1]));return a},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:1},render:{},visible:{sync:0,value:!0,
view:1},srcNode:{setter:function(a){return f.all(a)}},handleMouseEvents:{value:!0},focusable:{value:!0,view:1},allowTextSelection:{value:!1},activeable:{value:!0},focused:{view:1},active:{view:1,value:!1},highlighted:{view:1,value:!1},prefixCls:{view:1,value:e.config("component/prefixCls")||"ks-"},prefixXClass:{},parent:{setter:function(a,b){(b=this.get("parent"))&&this.removeTarget(b);a&&this.addTarget(a)}},disabled:{view:1,value:!1},xrender:{value:h},view:{setter:function(a){this.view=a}}}});h.extend=
function b(c,f,h){var d=e.makeArray(arguments),g,l=d[d.length-1];if(g=l.xclass)l.name=g;d=i.extend.apply(this,d);g&&m.setConstructorByXClass(g,d);d.extend=b;return d};return h},{requires:["node","./controller/process","component/manager","./controller/render"]});