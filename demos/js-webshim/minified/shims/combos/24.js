(function(a){if(!Modernizr.genericDOM){var c=document,l,g,p=/<([\w:]+)/,h={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||h[(p.exec(a)||["",""])[1].toLowerCase()])return a;if(!g){l=c.body;if(!l)return a;g=c.createElement("div");g.style.display="none"}var u=g.cloneNode(!1);l.appendChild(u);u.innerHTML=a;l.removeChild(u);return u.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,c,l,g,p){var h=c.modules,q=/\s*,\s*/,u={},v={},s={},n={},b={},k=a.fn.val,w=function(f,d,e,m,b){return b?k.call(a(f)):k.call(a(f),e)};a.fn.val=function(f){var d=this[0];arguments.length&&null==f&&(f="");if(!arguments.length)return!d||1!==d.nodeType?k.call(this):a.prop(d,"value",f,"val",!0);if(a.isArray(f))return k.apply(this,arguments);var e=a.isFunction(f);return this.each(function(m){d=this;1===d.nodeType&&(e?(m=f.call(d,m,a.prop(d,"value",p,"val",
!0)),null==m&&(m=""),a.prop(d,"value",m,"val")):a.prop(d,"value",f,"val"))})};var j="_webshimsLib"+Math.round(1E3*Math.random()),t=function(f,d,e){f=f.jquery?f[0]:f;if(!f)return e||{};var m=a.data(f,j);e!==p&&(m||(m=a.data(f,j,{})),d&&(m[d]=e));return d?m&&m[d]:m};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(f){a.fn[f.name]=function(){return this.map(function(){var a=t(this,
"shadowData");return a&&a[f.prop]||this})}});["removeAttr","prop","attr"].forEach(function(f){u[f]=a[f];a[f]=function(d,e,m,i,k){var c="val"==i,r=!c?u[f]:w;if(!d||!v[e]||1!==d.nodeType||!c&&i&&"attr"==f&&a.attrFn[e])return r(d,e,m,i,k);var z=(d.nodeName||"").toLowerCase(),t=s[z],o="attr"==f&&(!1===m||null===m)?"removeAttr":f,h,j,g;t||(t=s["*"]);t&&(t=t[e]);t&&(h=t[o]);if(h){if("value"==e)j=h.isVal,h.isVal=c;if("removeAttr"===o)return h.value.call(d);if(m===p)return h.get?h.get.call(d):h.value;h.set&&
("attr"==f&&!0===m&&(m=e),g=h.set.call(d,m));if("value"==e)h.isVal=j}else g=r(d,e,m,i,k);if((m!==p||"removeAttr"===o)&&b[z]&&b[z][e]){var q;q="removeAttr"==o?!1:"prop"==o?!!m:!0;b[z][e].forEach(function(a){if(!a.only||(a.only="prop"==f)||"attr"==a.only&&"prop"!=f)a.call(d,m,q,c?"val":o,f)})}return g};n[f]=function(d,e,m){s[d]||(s[d]={});s[d][e]||(s[d][e]={});var b=s[d][e][f],i=function(a,d,b){return d&&d[a]?d[a]:b&&b[a]?b[a]:"prop"==f&&"value"==e?function(a){return m.isVal?w(this,e,a,!1,0===arguments.length):
u[f](this,e,a)}:"prop"==f&&"value"==a&&m.value.apply?function(a){var d=u[f](this,e);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return u[f](this,e,a)}};s[d][e][f]=m;if(m.value===p){if(!m.set)m.set=m.writeable?i("set",m,b):c.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+d;}:a.noop;if(!m.get)m.get=i("get",m,b)}["value","get","set"].forEach(function(a){m[a]&&(m["_sup"+a]=i(a,b))})}});var i=!a.browser.msie||8<parseInt(a.browser.version,10),o=function(){var a=c.getPrototypeOf(g.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(e,b,y){var k=g.createElement(e),h=c.getPrototypeOf(k);if(i&&h&&a!==h&&(!k[b]||!d.call(k,b))){var o=k[b];y._supvalue=function(){return o&&o.apply?o.apply(this,arguments):o};h[b]=y.value}else y._supvalue=function(){var a=t(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},r.extendValue(e,b,y.value);y.value._supvalue=y._supvalue}}(),r=function(){var f={};c.addReady(function(d,e){var b={},m=function(f){b[f]||(b[f]=a(d.getElementsByTagName(f)),
e[0]&&a.nodeName(e[0],f)&&(b[f]=b[f].add(e)))};a.each(f,function(a,f){m(a);!f||!f.forEach?c.warn("Error: with "+a+"-property. methods: "+f):f.forEach(function(f){b[a].each(f)})});b=null});var d,e=a([]),b=function(e,b){f[e]?f[e].push(b):f[e]=[b];a.isDOMReady&&(d||a(g.getElementsByTagName(e))).each(b)};return{createTmpCache:function(f){a.isDOMReady&&(d=d||a(g.getElementsByTagName(f)));return d||e},flushTmpCache:function(){d=null},content:function(f,d){b(f,function(){var f=a.attr(this,d);null!=f&&a.attr(this,
d,f)})},createElement:function(a,f){b(a,f)},extendValue:function(f,d,e){b(f,function(){a(this).each(function(){t(this,"propValue",{})[d]=this[d];this[d]=e})})}}}(),x=function(a,d){if(a.defaultValue===p)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(c,{getID:function(){var f=(new Date).getTime();return function(d){var d=a(d),e=d.attr("id");e||(f++,e="ID-"+f,d.attr("id",e));return e}}(),extendUNDEFProp:function(f,
d){a.each(d,function(a,d){a in f||(f[a]=d)})},createPropDefault:x,data:t,moveToFirstEvent:function(){var f=a._data?"_data":"data";return function(d,e,b){if((d=(a[f](d,"events")||{})[e])&&1<d.length)e=d.pop(),b||(b="bind"),"bind"==b&&d.delegateCount?d.splice(d.delegateCount,0,e):d.unshift(e)}}(),addShadowDom:function(f,d,e){e=e||{};f.jquery&&(f=f[0]);d.jquery&&(d=d[0]);if(!e.shadowFocusElement)e.shadowFocusElement=d;var b=a.data(f,j)||a.data(f,j,{}),i=a.data(d,j)||a.data(d,j,{});b.hasShadow=d;i.nativeElement=
f;i.shadowData=b.shadowData={nativeElement:f,shadowElement:d,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){t(this,"shadowData",i.shadowData)});if(e.data)b.shadowData.data=e.data,i.shadowData.data=e.data;e=null},propTypes:{standard:function(a){x(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,""+d)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){x(a);if(!a.prop)a.prop={set:function(d){d?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(f,d){"string"==typeof d&&(d=d.split(q));d.forEach(function(d){c.defineNodeNamesProperty(f,d,{prop:{set:function(f){a.attr(this,d,f)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(f,d,e){v[d]=!0;if(e.reflect)c.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(b){var i=e[b];i&&(i="prop"===b?a.extend({writeable:!0},i):a.extend({},
i,{writeable:!0}),n[b](f,d,i),"*"!=f&&c.cfg.extendNative&&"prop"==b&&i.value&&a.isFunction(i.value)&&o(f,d,i),e[b]=i)});e.initAttr&&r.content(f,d);return e},defineNodeNameProperties:function(a,d,e,b){for(var i in d)!b&&d[i].initAttr&&r.createTmpCache(a),e&&(d[i][e]?c.log("override: "+a+"["+i+"] for "+e):(d[i][e]={},["value","set","get"].forEach(function(a){a in d[i]&&(d[i][e][a]=d[i][a],delete d[i][a])}))),d[i]=c.defineNodeNameProperty(a,i,d[i]);b||r.flushTmpCache();return d},createElement:function(f,
d,e){var b;a.isFunction(d)&&(d={after:d});r.createTmpCache(f);d.before&&r.createElement(f,d.before);e&&(b=c.defineNodeNameProperties(f,e,!1,!0));d.after&&r.createElement(f,d.after);r.flushTmpCache();return b},onNodeNamesPropertyModify:function(f,d,e,i){"string"==typeof f&&(f=f.split(q));a.isFunction(e)&&(e={set:e});f.forEach(function(a){b[a]||(b[a]={});"string"==typeof d&&(d=d.split(q));e.initAttr&&r.createTmpCache(a);d.forEach(function(d){b[a][d]||(b[a][d]=[],v[d]=!0);if(e.set){if(i)e.set.only=i;
b[a][d].push(e.set)}e.initAttr&&r.content(a,d)});r.flushTmpCache()})},defineNodeNamesBooleanProperty:function(f,d,e){e||(e={});if(a.isFunction(e))e.set=e;c.defineNodeNamesProperty(f,d,{attr:{set:function(a){this.setAttribute(d,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?p:d}},removeAttr:{value:function(){this.removeAttribute(d);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,d,e){if(a.nodeName){if(e===
p)return e=(a.attributes[d]||{}).value,null==e?p:e;"boolean"==typeof e?e?a.setAttribute(d,d):a.removeAttribute(d):a.setAttribute(d,e)}},activeLang:function(){var f=[],d={},e,b,i=/:\/\/|^\.*\//,k=function(d,f,b){return f&&b&&-1!==a.inArray(f,b.availabeLangs||[])?(d.loading=!0,b=b.langSrc,i.test(b)||(b=c.cfg.basePath+b),c.loader.loadScript(b+f+".js",function(){d.langObj[f]?(d.loading=!1,r(d,!0)):a(function(){d.langObj[f]&&r(d,!0);d.loading=!1})}),!0):!1},o=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},
r=function(a,d){if(a.activeLang!=e&&a.activeLang!==b){var f=h[a.module].options;if(a.langObj[e]||b&&a.langObj[b])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[b],e),o(a.module);else if(!d&&!k(a,e,f)&&!k(a,b,f)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),o(a.module)}};return function(i){if("string"==typeof i&&i!==e)e=i,b=e.split("-")[0],e==b&&(b=!1),a.each(f,function(a,d){r(d)});else if("object"==typeof i)if(i.register)d[i.register]||(d[i.register]=[]),d[i.register].push(i),
i.callback();else{if(!i.activeLang)i.activeLang="";f.push(i);r(i)}return e}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){c[a]=function(a,f,b,i){"string"==typeof a&&(a=a.split(q));var k={};a.forEach(function(a){k[a]=c[d](a,f,b,i)});return k}});c.isReady("webshimLocalization",!0)});
(function(a,c){var l=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<l)&&(!a.browser.msie||12>l&&7<l)){var g={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(a,c){a.getAttribute("role")||a.setAttribute("role",c)};a.webshims.addReady(function(h,q){a.each(g,function(c,b){for(var k=a(c,h).add(q.filter(c)),w=0,j=k.length;w<j;w++)p(k[w],b)});if(h===c){var l=c.getElementsByTagName("header")[0],v=c.getElementsByTagName("footer"),s=v.length;
l&&!a(l).closest("section, article")[0]&&p(l,"banner");s&&(l=v[s-1],a(l).closest("section, article")[0]||p(l,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,c,l,g,p){c.propTypes.element=function(h){c.createPropDefault(h,"attr");if(!h.prop)h.prop={get:function(){var c=h.attr.get.call(this);c&&(c=a("#"+c)[0])&&h.propNodeName&&!a.nodeName(c,h.propNodeName)&&(c=null);return c||null},writeable:!1}};(function(){if(!Modernizr.input.list){var h=0,q={submit:1,button:1,reset:1,hidden:1,range:1,date:1},u=a.browser.msie&&7>parseInt(a.browser.version,10),v={},s=function(a){if(!a)return[];if(v[a])return v[a];var k;
try{k=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}v[a]=k||[];return k||[]},n={_create:function(b){if(!q[a.prop(b.input,"type")]){var k=b.datalist,c=a.data(b.input,"datalistWidget");if(k&&c&&c.datalist!==k)c.datalist=k,c.id=b.id,a(c.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(c,"_resetListCached")),c._resetListCached();else if(k){if(!(c&&c.datalist===k)){h++;var j=this;this.hideList=a.proxy(j,"hideList");this.timedHide=function(){clearTimeout(j.hideTimer);
j.hideTimer=setTimeout(j.hideList,9)};this.datalist=k;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(b){var i=a("li:not(.hidden-item)",j.shadowList),c="mousedown"==b.type||"click"==b.type;
j.markItem(i.index(b.currentTarget),c,i);"click"==b.type&&j.hideList();return"mousedown"!=b.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!j.triggeredByDatalist)j.changedValue=!1,j.showHideOptions()}).bind("keydown.datalistWidget",function(b){var i=b.keyCode;if(40==i&&!j.showList())return j.markItem(j.index+1,!0),!1;if(j.isListVisible){if(38==i)return j.markItem(j.index-1,!0),!1;
if(!b.shiftKey&&(33==i||36==i))return j.markItem(0,!0),!1;if(!b.shiftKey&&(34==i||35==i))return b=a("li:not(.hidden-item)",j.shadowList),j.markItem(b.length-1,!0,b),!1;if(13==i||27==i)return 13==i&&j.changeValue(a("li.active-item:not(.hidden-item)",j.shadowList)),j.hideList(),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&j.showList()}).bind("mousedown.datalistWidget",function(){(this==g.activeElement||a(this).is(":focus"))&&j.showList()}).bind("blur.datalistWidget",
this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&b.input.id&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){var c=a.prop(b.input,"value"),i=(b.input.name||b.input.id)+a.prop(b.input,"type");if(!j.storedOptions)j.storedOptions=s(i);if(c&&-1==j.storedOptions.indexOf(c)&&(j.storedOptions.push(c),c=j.storedOptions,i)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+
i,JSON.stringify(c))}catch(k){}}});a(l).bind("unload",function(){j.destroy()})}}else c&&c.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(g).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===p?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",
b)},_resetListCached:function(a){var k=this,w;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(l.QUnit||(w=a&&g.activeElement==k.input)?k.updateListOptions(w):c.ready("WINDOWLOAD",function(){k.updateTimer=setTimeout(function(){k.updateListOptions();k=null;h=1},200+100*h)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,
"fontFamily")});var c=[],h=[],j=[],g,i,o,r;for(i=a.prop(this.datalist,"options"),o=0,r=i.length;o<r;o++){g=i[o];if(g.disabled)return;g={value:a(g).val()||"",text:a.trim(a.attr(g,"label")||g.textContent||g.innerText||a.text([g])||""),className:g.className||"",style:a.attr(g,"style")||""};g.text?g.text!=g.value&&(g.className+=" different-label-value"):g.text=g.value;h[o]=g.value;j[o]=g}if(!this.storedOptions)this.storedOptions=s((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==
h.indexOf(a)&&j.push({value:a,text:a,className:"stored-suggest",style:""})});for(o=0,r=j.length;o<r;o++)i=j[o],c[o]='<li class="'+i.className+'" style="'+i.style+'" tabindex="-1" role="listitem"><span class="option-label">'+i.text+'</span> <span class="option-value">'+i.value+"</span></li>";this.arrayOptions=j;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+c.join("\n")+"</ul>");a.fn.bgIframe&&u&&this.shadowList.bgIframe();(b||this.isListVisible)&&
this.showHideOptions()},showHideOptions:function(b){var c=a.prop(this.input,"value").toLowerCase();if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var h=!1,g=a("li",this.shadowList);c?this.arrayOptions.forEach(function(b,i){if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.text.toLowerCase()+b.value.toLowerCase():b.text.toLowerCase();-1!==b.lowerText.indexOf(c)?(a(g[i]).removeClass("hidden-item"),h=!0):a(g[i]).addClass("hidden-item")}):
g.length&&(g.removeClass("hidden-item"),h=!0);this.hasViewableData=h;!b&&h&&this.showList();if(!h)this.lastUnfoundValue=c,this.hideList()}},setPos:function(){var b=c.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();
this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,c;b.setPos();u&&(b.shadowList.css("height","auto"),250<b.shadowList.height()&&b.shadowList.css("height",220));b.shadowList.addClass("datalist-visible");a(g).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(c){c.target===b.input||b.shadowList[0]===c.target||a.contains(b.shadowList[0],c.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},
9)):b.timedHide()});a(l).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+"orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(c);c=setTimeout(function(){b.setPos()},9)});clearTimeout(c);return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,h=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");b.index=
-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;c.triggerInlineForm&&c.triggerInlineForm(b.input,"input");if(b.input==g.activeElement||a(b.input).is(":focus"))a(b.input).one("blur",h);else h();b.triggeredByDatalist=!1}a(g).unbind(".datalist"+b.id);a(l).unbind(".datalist"+b.id);return!0},scrollIntoView:function(b){var c=a("> ul",this.shadowList),h=b.position();h.top-=(parseInt(c.css("paddingTop"),10)||0)+(parseInt(c.css("marginTop"),10)||0)+(parseInt(c.css("borderTopWidth"),10)||
0);0>h.top?this.shadowList.scrollTop(this.shadowList.scrollTop()+h.top-2):(h.top+=b.outerHeight(),b=this.shadowList.height(),h.top>b&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(h.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),c=a.prop(this.input,"value");if(b!=c)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,c,h){h=h||a("li:not(.hidden-item)",this.shadowList);if(h.length)0>b?b=h.length-1:b>=h.length&&
(b=0),h.removeClass("active-item"),this.shadowList.addClass("list-item-active"),h=h.filter(":eq("+b+")").addClass("active-item"),c&&(this.changeValue(h),this.scrollIntoView(h)),this.index=b}};(function(){c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&c.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return b}}});c.defineNodeNameProperties("input",
{selectedOption:{prop:{writeable:!1,get:function(){var b=a.prop(this,"list"),c=null,h;if(!b)return c;h=a.attr(this,"value");if(!h)return c;b=a.prop(b,"options");if(!b.length)return c;a.each(b,function(b,g){if(h==a.prop(g,"value"))return c=g,!1});return c}}},autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var c=a.data(this,"datalistWidget");c?(c._autocomplete=b,
"off"==b&&c.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}},list:{attr:{get:function(){var a=c.contentAttr(this,"list");return null==a?p:a},set:function(b){c.contentAttr(this,"list",b);c.objectCreate(n,p,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}});if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0;c.addReady(function(a,c){c.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
(function(a){var c=window.Modernizr,l=a.webshims;l.capturingEventPrevented=function(c){if(!c._isPolyfilled){var h=c.isDefaultPrevented,g=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return g.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};
c._isPolyfilled=!0}};if(c.formvalidation){var g=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');c.bugfreeformvalidation=c.requiredSelect=!!("required"in a("select",g)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var p=a("input",g).eq(0),h,q=function(q){var s=["form-extend","form-message","form-native-fix"];q&&(q.preventDefault(),q.stopImmediatePropagation());clearTimeout(h);setTimeout(function(){g&&
(g.remove(),g=p=null)},9);if(!c.bugfreeformvalidation||!c.requiredSelect)l.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),l.modules["form-extend"].test=a.noop;l.isReady("form-number-date-api")&&s.push("form-number-date-api");l.reTest(s);if(a.browser.opera||window.testGoodWithFix)l.loader.loadList(["dom-extend"]),l.ready("dom-extend",function(){var h=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var c=l.defineNodeNameProperty(b,"checkValidity",
{prop:{value:function(){l.fromSubmit||a(this).bind("invalid.checkvalidity",h);l.fromCheckValidity=!0;var b=c.prop._supvalue.apply(this,arguments);l.fromSubmit||a(this).unbind("invalid.checkvalidity",h);l.fromCheckValidity=!1;return b}}})});c.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&l.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&
c[0].options.length)b=c[0].options}return b}}})})};g.appendTo("head");if(window.opera||window.testGoodWithFix){l.bugs.validationMessage=!p.prop("validationMessage");if((c.inputtypes||{}).date){try{p.prop("valueAsNumber",0)}catch(u){}l.bugs.valueAsNumberSet="1970-01-01"!=p.prop("value")}p.prop("value","")}g.bind("submit",function(a){c.bugfreeformvalidation=!1;q(a)});h=setTimeout(function(){g&&g.triggerHandler("submit")},9);l.capturingEvents(["input"]);l.capturingEvents(["invalid"],!0);a("input, select",
g).bind("invalid",q).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else l.capturingEvents(["input"]),l.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,l,g,p,h){var q={radio:1},u={checkbox:1,radio:1},v=a([]),s=function(b){var b=a(b),c,h;c=v;if(q[b[0].type])h=b.prop("form"),c=(c=b[0].name)?h?a(h[c]):a(g.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):b,c=c.filter('[type="radio"]');return c},n=c.getContentValidationMessage=function(b,h){var g=b.getAttribute("x-moz-errormessage")||b.getAttribute("data-errormessage")||"";if(g&&-1!=g.indexOf("{")){try{g=jQuery.parseJSON(g)}catch(j){return g}"object"==
typeof g&&(h=h||a.prop(b,"validity")||{valid:1},h.valid||a.each(h,function(a,d){if(d&&"valid"!=a&&g[a])return g=g[a],!1}));c.data(b,"contentErrorMessage",g);if("object"==typeof g)g=g.defaultMessage}return g||""},b={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||
{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(c){if(!b[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!b[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=a.expr.filters[b+"-element"]});var k=a.event.customEvent||{},w=a.prop,j={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,h){var g=w.apply(this,arguments);if(b&&"form"in b&&j[c]&&h!==p&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==c&&h&&s(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return g};var t=function(b,c){var h;a.each(b,function(b,f){if(f)return h="customError"==b?a.prop(c,"validationMessage"):b,!1});return h};a(g).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var c=a(b.target).getNativeElement()[0],h=a.prop(c,"validity"),f=a(c).getShadowElement(),d,e,m,
g;h.valid?f.hasClass("form-ui-valid")||(d="form-ui-valid",e="form-ui-invalid",g="changedvaliditystate",m="changedvalid",u[c.type]&&c.checked&&s(c).not(c).removeClass(e).addClass(d).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(h=t(h,c),a.data(c,"webshimsinvalidcause")!=h&&(a.data(c,"webshimsinvalidcause",h),g="changedvaliditystate"),f.hasClass("form-ui-invalid")||(d="form-ui-invalid",e="form-ui-valid",u[c.type]&&!c.checked&&s(c).not(c).removeClass(e).addClass(d),m="changedinvalid"));
d&&(f.addClass(d).removeClass(e),setTimeout(function(){a(c).trigger(m)},0));g&&setTimeout(function(){a(c).trigger(g)},0);a.removeData(b.target,"webshimsswitchvalidityclass")},9))}});k.changedvaliditystate=!0;k.changedvalid=!0;k.changedinvalid=!0;k.refreshvalidityui=!0;c.triggerInlineForm=function(b,c){a(b).trigger(c)};c.modules["form-core"].getGroupElements=s;k=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==g.compatMode?a(g.body):a(g.documentElement)};k();c.ready("DOM",k);c.getRelOffset=
function(b,c){var b=a(b),h=a(c).offset(),g;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){g=b.offset()});h.top-=g.top;h.left-=g.left;return h};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",h,j=!1,k=!1,f,d={hideDelay:5E3,showFor:function(b,c,g,i){d._create();var b=a(b),q=a(b).getShadowElement(),n=d.getOffsetFromBody(q);d.clear();i?this.hide():(this.getMessage(b,c),this.position(q,n),h.css({fontSize:b.css("fontSize"),
fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(f,this.hideDelay)),a(l).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(k);k=setTimeout(function(){d.position(q)},9)}));g||this.setFocus(q,n)},getOffsetFromBody:function(a){return c.getRelOffset(h,a)},setFocus:function(d,m){var j=a(d).getShadowFocusElement(),k=c.scrollRoot.scrollTop(),q=(m||j.offset()).top-30,l;c.getID&&"label"==b&&h.attr("for",c.getID(j));k>q&&(c.scrollRoot.animate({scrollTop:q-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-q)),80)}),l=!0);try{j[0].focus()}catch(n){}l&&(c.scrollRoot.scrollTop(k),setTimeout(function(){c.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(g).bind("focusout.validityalert",f)},10)},getMessage:function(b,d){a("span.va-box",h).text(d||n(b[0])||b.prop("validationMessage"))},position:function(b,c){c=c?a.extend({},c):d.getOffsetFromBody(b);c.top+=b.outerHeight();h.css(c)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();
h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);a(g).unbind(".validityalert");a(l).unbind(".validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=d.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),
c.ready("DOM",function(){h.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&h.bgIframe()})}};f=a.proxy(d,"hide");return d}();(function(){var b,c=[],h;a(g).bind("invalid",function(j){if(!j.wrongWebkitInvalid){var f=a(j.target),d=f.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(j.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),
b.isInvalidUIPrevented=j.isDefaultPrevented,d=a.Event("firstinvalidsystem"),a(g).triggerHandler(d,{element:j.target,form:j.target.form,isInvalidUIPrevented:j.isDefaultPrevented}),f.trigger(b);b&&b.isDefaultPrevented()&&j.preventDefault();c.push(j.target);j.extraData="fix";clearTimeout(h);h=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(j.target).trigger(d,d)},9);d=f=null}})})();h.replaceValidationUI&&c.ready("DOM",function(){a(g).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||
(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
(function(a,c,l){var g=c.audio&&c.video,p=!1;if(g)a=document.createElement("video"),c.videoBuffered="buffered"in a,p="loop"in a,l.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),c.videoBuffered||(l.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:c.videoBuffered,d:["dom-support"]}),l.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,c,l,v,s){var n=c.mediaelement,b=c.cfg.mediaelement,
k=function(b,d){var b=a(b),e={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!e.src)return e;var g=b.attr("type");if(g)e.type=g,e.container=a.trim(g.split(";")[0]);else if(d||(d=b[0].nodeName.toLowerCase(),"source"==d&&(d=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),g=n.getTypeForSrc(e.src,d))e.type=g,e.container=g,c.warn("you should always provide a proper mime-type using the source element. "+e.src+" detected as: "+g),a.nodeName(b[0],"source")&&b.attr("type",
g);if(g=b.attr("media"))e.media=g;return e},w=swfobject.hasFlashPlayerVersion("9.0.115"),j=function(){c.ready("mediaelement-swf",function(){if(!n.createSWF)c.modules["mediaelement-swf"].test=a.noop,c.reTest(["mediaelement-swf"],g)})};n.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};n.mimeTypes.source=a.extend({},n.mimeTypes.audio,n.mimeTypes.video);n.getTypeForSrc=function(b,d){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";
var b=b.split("?")[0].split("."),b=b[b.length-1],c;a.each(n.mimeTypes[d],function(a,d){if(-1!==d.indexOf(b))return c=a,!1});return c};n.srces=function(b,d){b=a(b);if(d)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(d)||(d=[d]),d.forEach(function(a){var c=v.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var d=[],c=b[0].nodeName.toLowerCase(),
g=k(b,c);g.src?d.push(g):a("source",b).each(function(){g=k(this,c);g.src&&d.push(g)});return d}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==s&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));n.srces(this,b);a(this).mediaLoad()})};n.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
n.canSwfPlaySrces=function(b,c){var e="";w&&(b=a(b),c=c||n.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&-1!=n.swfMimeTypes.indexOf(b.container))return e=b,!1}));return e};var t={};n.canNativePlaySrces=function(b,c){var e="";if(g){var b=a(b),i=(b[0].nodeName||"").toLowerCase();if(!t[i])return e;c=c||n.srces(b);a.each(c,function(a,c){if(c.type&&t[i].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};n.setError=function(b,d){d||(d="can't play sources");a(b).pause().data("mediaerror",
d);c.warn("mediaelementError: "+d);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var i=function(){var a;return function(b,e,g){c.ready("mediaelement-swf",function(){n.createSWF?n.createSWF(b,e,g):a||(a=!0,j(),i(b,e,g))})}}(),o=function(a,b,c,g,h){c||!1!==c&&b&&"flash"==b.isActive?(c=n.canSwfPlaySrces(a,g))?i(a,c,b):h?n.setError(a,!1):o(a,b,!1,g,!0):(c=n.canNativePlaySrces(a,g))?b&&"flash"==b.isActive&&n.setActive(a,"html5",b):h?(n.setError(a,!1),b&&"flash"==b.isActive&&
n.setActive(a,"html5",b)):o(a,b,!0,g,!0)},r=/^(?:embed|object|datalist)$/i,x=function(f,d){var e=c.data(f,"mediaelementBase")||c.data(f,"mediaelementBase",{}),g=n.srces(f),i=f.parentNode;clearTimeout(e.loadTimer);a.data(f,"mediaerror",!1);if(g.length&&i&&!(1!=i.nodeType||r.test(i.nodeName||"")))d=d||c.data(f,"mediaelement"),o(f,d,b.preferFlash||s,g)};a(v).bind("ended",function(b){var d=c.data(b.target,"mediaelement");(!p||d&&"html5"!=d.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,
"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});p||c.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var d=c.defineNodeNameProperty(b,"load",{prop:{value:function(){var a=c.data(this,"mediaelement");x(this,a);g&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});t[b]=c.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(c){var d="";g&&t[b].prop._supvalue&&(d=t[b].prop._supvalue.call(this,
c),"no"==d&&(d=""));!d&&w&&(c=a.trim((c||"").split(";")[0]),-1!=n.swfMimeTypes.indexOf(c)&&(d="maybe"));return d}}})});c.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=c.data(a,"mediaelementBase")||c.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){x(a);a=null},9)}});g&&c.isReady("mediaelement-core",!0);c.addReady(function(b,d){a("video, audio",b).add(d.filter("video, audio")).each(function(){a.browser.msie&&8<c.browserVersion&&
a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():x(this);if(g){var b,d,f=this,i=function(){var b=a.prop(f,"buffered");if(b){for(var c="",d=0,e=b.length;d<e;d++)c+=b.end(d);return c}},j=function(){var b=i();b!=d&&(d=b,a(f).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(d=i());clearTimeout(b);b=setTimeout(j,999)}).bind("emptied stalled mediaerror abort suspend",
function(a){"emptied"==a.type&&(d=!1);clearTimeout(b)})}})});g&&w&&c.ready("WINDOWLOAD mediaelement",j)})})(jQuery,Modernizr,jQuery.webshims);