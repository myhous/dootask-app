// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(e,t){var r=t.map((function(e){return"[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(e,r)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}};!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([,,,,function(e,t,r){var o,n,i=[];i.push(r(5)),o=r(6);var s=r(7);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some((function(e){return"default"!==e&&"__esModule"!==e}))&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/WEIYI/wwwroot/dootask/resources/mobile/src/pages/web.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-6f14c300",n.style=n.style||{},i.forEach((function(e){for(var t in e)n.style[t]=e[t]})),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},function(e,t){e.exports={flex:{flex:1}}},function(e,t,r){"use strict";r.r(t);var o=app.requireModule("eeui"),n=app.requireModule("navigationBar");t.default={data:function(){return{url:null,browser:!1,titleFixed:!1,showProgress:!1}},mounted:function(){var e=this;o.setStatusBarStyle(!1),this.url=app.config.params.url,this.browser=!!app.config.params.browser,this.titleFixed=!!app.config.params.titleFixed,this.showProgress=!!app.config.params.showProgress,this.browser&&n.setRightItem({icon:"iOS"===WXEnvironment.platform?"ios-share-alt":"md-share-alt",iconSize:40},(function(t){e.url&&o.openWeb(e.url)})),this.$refs.web.setUrl(this.url)},methods:{onStateChanged:function(e){switch(e.status){case"title":this.titleFixed||n.setTitle({title:e.title});break;case"url":this.url=e.url;break;case"createTarget":this.$refs.web.setUrl(e.url)}}}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("web-view",{ref:"web",staticClass:["flex"],attrs:{progressbarVisibility:this.showProgress},on:{stateChanged:this.onStateChanged}})},staticRenderFns:[]},e.exports.render._withStripped=!0}]);