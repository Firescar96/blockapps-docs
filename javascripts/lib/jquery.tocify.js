/*! jQuery UI - v1.11.3 - 2015-02-12
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){/*!
   * jQuery UI Widget 1.11.3
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/jQuery.widget/
   */
var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,o,s;for(s=0;null!=(o=i[s]);s++)try{n=t._data(o,"events"),n&&n.remove&&t(o).triggerHandler("remove")}catch(r){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var o,s,r,a,l={},h=e.split(".")[0];return e=e.split(".")[1],o=h+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[h]=t[h]||{},s=t[h][e],r=t[h][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e)},t.extend(r,s,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(n,function(e,n){return t.isFunction(n)?void(l[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=o,e=n.apply(this,arguments),this._super=i,this._superApply=s,e}}()):void(l[e]=n)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||e:e},l,{constructor:r,namespace:h,widgetName:e,widgetFullName:o}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var n,o,s=i.call(arguments,1),r=0,a=s.length;a>r;r++)for(n in s[r])o=s[r][n],s[r].hasOwnProperty(n)&&void 0!==o&&(e[n]=t.isPlainObject(o)?t.isPlainObject(e[n])?t.widget.extend({},e[n],o):t.widget.extend({},o):o);return e},t.widget.bridge=function(e,n){var o=n.prototype.widgetFullName||e;t.fn[e]=function(s){var r="string"==typeof s,a=i.call(arguments,1),l=this;return r?this.each(function(){var i,n=t.data(this,o);return"instance"===s?(l=n,!1):n?t.isFunction(n[s])&&"_"!==s.charAt(0)?(i=n[s].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,o);e?(e.option(s||{}),e._init&&e._init()):t.data(this,o,new n(s,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,o,s,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},n=e.split("."),e=n.shift(),n.length){for(o=r[e]=t.widget.extend({},this.options[e]),s=0;s<n.length-1;s++)o[n[s]]=o[n[s]]||{},o=o[n[s]];if(e=n.pop(),1===arguments.length)return void 0===o[e]?null:o[e];o[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,n){var o,s=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=o=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,o=this.widget()),t.each(n,function(n,r){function a(){return e||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?s[r]:r).apply(s,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+s.eventNamespace,c=l[2];c?o.delegate(c,h,a):i.bind(h,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,s,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&t.effects&&t.effects.effect[a]?n[e](o):a!==e&&n[a]?n[a](o.duration,o.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}});t.widget}),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(t){"use strict";t(window.jQuery,window,document)}(function(t,e,i,n){"use strict";var o="tocify",s="tocify-focus",r="tocify-hover",a="tocify-hide",l="tocify-header",h="."+l,c="tocify-subheader",u="."+c,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;t.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=t(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var t in e)if(t&&-1!==t.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),t(e).load(function(){i._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var e,i,n=this,s=n.options.ignoreSelector;return e=t(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),e.length?(n.element.addClass(o),void e.each(function(e){t(this).is(s)||(i=t("<ul/>",{id:l+e,"class":l}).append(n._nestElements(t(this),e)),n.element.append(i),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===t(this).find(n.options.selectors).length?t(this).filter(n.options.selectors).each(function(){t(this).is(s)||n._appendSubheaders.call(this,n,i)}):t(this).find(n.options.selectors).each(function(){t(this).is(s)||n._appendSubheaders.call(this,n,i)})}))})):void n.element.addClass(a)},_setActiveElement:function(t){var i=this,n=e.location.hash.substring(1),o=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),o.addClass(i.focusClass),i.options.showAndHide&&o.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&t&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(e,i){var n,o,s;return n=t.grep(this.items,function(t){return t===e.text()}),this.items.push(n.length?e.text()+i:e.text()),s=this._generateHashValue(n,e,i),o=t("<li/>",{"class":d,"data-unique":s}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:s,"data-unique":s})),o},_generateHashValue:function(t,e,i){var n="",o=this.options.hashGenerator;if("pretty"===o){for(n=e.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof o?o(e.text(),e):e.text().replace(/\s/g,"");return t.length&&(n+=""+i),n},_appendSubheaders:function(e,i){var n=t(this).index(e.options.selectors),o=t(e.options.selectors).eq(n-1),s=+t(this).prop("tagName").charAt(1),r=+o.prop("tagName").charAt(1);r>s?e.element.find(u+"[data-tag="+s+"]").last().append(e._nestElements(t(this),n)):s===r?i.find(f).last().after(e._nestElements(t(this),n)):i.find(f).last().after(t("<ul/>",{"class":c,"data-tag":s})).next(u).append(e._nestElements(t(this),n))},_setEventHandlers:function(){var o=this;this.element.on("click.tocify","li",function(){if(o.options.history&&(e.location.hash=t(this).attr("data-unique")),o.element.find("."+o.focusClass).removeClass(o.focusClass),t(this).addClass(o.focusClass),o.options.showAndHide){var i=t('li[data-unique="'+t(this).attr("data-unique")+'"]');o._triggerShow(i)}o._scrollTo(t(this))}),this.element.find("li").on({"mouseenter.tocify":function(){t(this).addClass(o.hoverClass),t(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==o.options.theme&&t(this).removeClass(o.hoverClass)}}),t(e).on("resize",function(){o.calculateHeights()}),t(e).on("scroll.tocify",function(){t("html, body").promise().done(function(){var s,r,a,l,h=t(e).scrollTop(),c=t(e).height(),u=t(i).height(),d=t("body")[0].scrollHeight;if(o.options.extendPage&&(o.webkit&&h>=d-c-o.options.extendPageOffset||!o.webkit&&c+h>u-o.options.extendPageOffset)&&!t(g).length){if(r=t('div[data-unique="'+t(f).last().attr("data-unique")+'"]'),!r.length)return;a=r.offset().top,t(o.options.context).append(t("<div />",{"class":p,height:Math.abs(a-h)+"px","data-unique":p})),o.extendPageScroll&&(l=o.element.find("li.active"),o._scrollTo(t("div[data-unique="+l.attr("data-unique")+"]")))}setTimeout(function(){var r,a=null;0==o.cachedHeights.length&&o.calculateHeights();var l=t(e).scrollTop();if(o.cachedAnchors.each(function(t){return o.cachedHeights[t]-l<0?void(a=t):!1}),r=t(o.cachedAnchors[a]).attr("data-unique"),s=t('li[data-unique="'+r+'"]'),o.options.highlightOnScroll&&s.length&&!s.hasClass(o.focusClass)){o.element.find("."+o.focusClass).removeClass(o.focusClass),s.addClass(o.focusClass);var h=o.tocifyWrapper,c=t(s).closest(".tocify-header"),u=c.offset().top,d=h.offset().top,f=u-d;if(f>=t(e).height()){var p=f+h.scrollTop();h.scrollTop(p)}else 0>f&&h.scrollTop(0)}o.options.scrollHistory&&e.location.hash!=="#"+r&&r!==n&&(history.replaceState?history.replaceState({},"","#"+r):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+r,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),o.options.showAndHideOnScroll&&o.options.showAndHide&&o._triggerShow(s,!0)},0)})})},calculateHeights:function(){var e=this;e.cachedHeights=[],e.cachedAnchors=[];var i=t(e.options.context).find("div[data-unique]");i.each(function(i){var n=(t(this).next().length?t(this).next():t(this)).offset().top-e.options.highlightOffset;e.cachedHeights[i]=n}),e.cachedAnchors=i},show:function(e){var i=this;if(!e.is(":visible"))switch(e.find(u).length||e.parent().is(h)||e.parent().is(":visible")?e.children(u).length||e.parent().is(h)||(e=e.closest(u)):e=e.parents(u).add(e),i.options.showEffect){case"none":e.show();break;case"show":e.show(i.options.showEffectSpeed);break;case"slideDown":e.slideDown(i.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(i.options.showEffectSpeed);break;default:e.show()}return i.hide(t(u).not(e.parent().is(h)?e:e.closest(h).find(u).not(e.siblings()))),i},hide:function(t){var e=this;switch(e.options.hideEffect){case"none":t.hide();break;case"hide":t.hide(e.options.hideEffectSpeed);break;case"slideUp":t.slideUp(e.options.hideEffectSpeed);break;case"fadeOut":t.fadeOut(e.options.hideEffectSpeed);break;default:t.hide()}return e},_triggerShow:function(t,e){var i=this;return t.parent().is(h)||t.next().is(u)?i.show(t.next(u),e):t.parent().is(u)&&i.show(t.parent(),e),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(h+","+u).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=s,this.hoverClass=r),this},setOption:function(){t.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){t.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(e){var i=this,n=i.options.smoothScroll||0,o=i.options.scrollTo;return t("html, body").promise().done(function(){t("html, body").animate({scrollTop:t('div[data-unique="'+e.attr("data-unique")+'"]').next().offset().top-(t.isFunction(o)?o.call():o)+"px"},{duration:n})}),i}})});