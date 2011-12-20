jQuery.webshims.register("form-extend",function(a,d,i,k,q,m){var g=i.Modernizr,i=g.inputtypes;if(g.formvalidation){var o=d.inputTypes,r={};d.addInputType=function(a,b){o[a]=b};d.addValidityRule=function(a,b){r[a]=b};d.addValidityRule("typeMismatch",function(a,b,c,d){if(""===b)return!1;d=d.typeMismatch;if(!("type"in c))c.type=(a[0].getAttribute("type")||"").toLowerCase();o[c.type]&&o[c.type].mismatch&&(d=o[c.type].mismatch(b,a));return d});var p=m.overrideMessages,s=!g.requiredSelect||!i.number||!i.time||
!i.range||p,c="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),m=p?["value","checked"]:["value"],f=p?["textarea"]:[],e=function(b,c){if(b){var d=(b.getAttribute&&b.getAttribute("type")||b.type||"").toLowerCase();if(p||!(g.requiredSelect||"select-one"!=d)||o[d])p&&!c&&"radio"==d&&b.name?a(k.getElementsByName(b.name)).each(function(){a.prop(this,"validity")}):a.prop(b,"validity")}},h={};["input","textarea","select"].forEach(function(b){var c=
d.defineNodeNameProperty(b,"setCustomValidity",{prop:{value:function(f){var f=f+"",j="input"==b?a(this).getNativeElement()[0]:this;c.prop._supvalue.call(j,f);d.bugs.validationMessage&&d.data(j,"customvalidationMessage",f);s&&(d.data(j,"hasCustomError",!!f),e(j))}}});h[b]=c.prop._supvalue});if(s||!g.input.valueAsNumber||p)m.push("min"),m.push("max"),m.push("step"),f.push("input");if(!g.requiredSelect||p)m.push("required"),f.push("select");if(s){var b;f.forEach(function(f){var e=d.defineNodeNameProperty(f,
"validity",{prop:{get:function(){if(!b){var j="input"==f?a(this).getNativeElement()[0]:this,n=e.prop._supget.call(j);if(!n)return n;var l={};c.forEach(function(a){l[a]=n[a]});if(!a.prop(j,"willValidate"))return l;b=!0;var g=a(j),i={type:(j.getAttribute&&j.getAttribute("type")||"").toLowerCase(),nodeName:(j.nodeName||"").toLowerCase()},k=g.val(),m=!!d.data(j,"hasCustomError"),s;b=!1;l.customError=m;if(l.valid&&l.customError)l.valid=!1;else if(!l.valid){var o=!0;a.each(l,function(a,b){if(b)return o=
!1});if(o)l.valid=!0}a.each(r,function(a,b){l[a]=b(g,k,i,l);if(l[a]&&(l.valid||!s))h[f].call(j,d.createValidationMessage(j,a)),l.valid=!1,s=!0});l.valid?(h[f].call(j,""),d.data(j,"hasCustomError",!1)):p&&!s&&!m&&a.each(l,function(a,b){if("valid"!==a&&b)return h[f].call(j,d.createValidationMessage(j,a)),!1});return l}},writeable:!1}})});m.forEach(function(a){d.onNodeNamesPropertyModify(f,a,function(){e(this)})});if(k.addEventListener){var n;k.addEventListener("change",function(a){clearTimeout(n);e(a.target)},
!0);k.addEventListener("input",function(a){clearTimeout(n);n=setTimeout(function(){e(a.target)},290)},!0)}var j=f.join(",");d.addReady(function(b,c){a(j,b).add(c.filter(j)).each(function(){a.prop(this,"validity")})});p&&d.ready("DOM form-message",function(){d.activeLang({register:"form-core",callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!d.data(this,"hasCustomError")){var b=this,c=a.prop(b,"validity")||{valid:!0},j;c.valid||(j=(b.nodeName||"").toLowerCase(),
a.each(c,function(a,c){if("valid"!==a&&c)return h[j].call(b,d.createValidationMessage(b,a)),!1}))}})}})})}}});jQuery.webshims.gcEval=function(a,d){with(d&&d.form||window)with(d||window)return function(a){eval(a)}.call(d||window,a)};
(function(a){var d=window.Modernizr,i=a.webshims;if(d.formvalidation){var k=a('<form action="#"><select /><input type="date" required name="a" /></form>'),q=a("input",k);d.validationmessage=!0;if(window.opera){k.appendTo("head");i.bugs.validationMessage=!q.prop("validationMessage");try{q.prop("valueAsNumber",0)}catch(m){}i.bugs.valueAsNumberSet="1970-01-01"!=q.prop("value");k.remove()}d.requiredSelect=!!("required"in a("select",k)[0]);if(!("bugfreeformvalidation"in d))d.bugfreeformvalidation=d.formvalidation&&
d.requiredSelect&&!i.bugs.valueAsNumberSet&&!i.bugs.validationMessage&&(!a.browser.webkit||-1!=navigator.userAgent.indexOf("hrome")&&534.19<i.browserVersion)&&!window.testGoodWithFix;if(!d.bugfreeformvalidation)i.addPolyfill("form-native-fix",{f:"forms",dependencies:["form-extend"]}),i.modules["form-extend"].test=a.noop;i.reTest(["form-extend","form-message","form-native-fix"]);i.isReady("form-number-date-api")&&i.reTest("form-number-date-api")}})(jQuery);
jQuery.webshims.register("form-core",function(a,d,i,k,q,m){var g={radio:1},o={checkbox:1,radio:1},r=a([]),p=function(b){var b=a(b),c=b[0].name;return g[b[0].type]&&c?a(b[0].form&&b[0].form[c]||k.getElementsByName(c)).not(b[0]):r},s=d.getContentValidationMessage=function(b,c){var j=b.getAttribute("x-moz-errormessage")||b.getAttribute("data-errormessage")||"";if(j&&-1!=j.indexOf("{")){try{j=jQuery.parseJSON(j)}catch(f){return j}"object"==typeof j&&(c=c||a.prop(b,"validity")||{valid:1},c.valid||a.each(c,
function(a,b){if(b&&"valid"!=a&&j[a])return j=j[a],!1}));d.data(b,"contentErrorMessage",j);if("object"==typeof j)j=j.defaultMessage}return j||""},c={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!c[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!c[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=
a.expr.filters[b+"-element"]});var f=a.prop,e={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,j){var d=f.apply(this,arguments);if(b&&"form"in b&&e[c]&&j!==q&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==c&&j&&p(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return d};var h=function(b,c){var j;a.each(b,function(b,d){if(d)return j="customError"==b?a.prop(c,"validationMessage"):
b,!1});return j};a(k).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var c=a(b.target).getNativeElement()[0],d=a.prop(c,"validity"),f=a(c).getShadowElement(),e,n,l,g;d.valid?f.hasClass("form-ui-valid")||(e="form-ui-valid",n="form-ui-invalid",g="changedvaliditystate",l="changedvalid",
o[c.type]&&c.checked&&p(c).removeClass(n).addClass(e).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(d=h(d,c),a.data(c,"webshimsinvalidcause")!=d&&(a.data(c,"webshimsinvalidcause",d),g="changedvaliditystate"),f.hasClass("form-ui-invalid")||(e="form-ui-invalid",n="form-ui-valid",o[c.type]&&!c.checked&&p(c).removeClass(n).addClass(e),l="changedinvalid"));e&&(f.addClass(e).removeClass(n),setTimeout(function(){a(c).trigger(l)},0));g&&setTimeout(function(){a(c).trigger(g)},0);a.removeData(b.target,
"webshimsswitchvalidityclass")},9))}});d.triggerInlineForm=function(b,c){b.jquery&&(b=b[0]);var f="on"+c,e=b[f]||b.getAttribute(f)||"",h,g,c=a.Event({type:c,target:b,currentTarget:b});e&&"string"==typeof e&&(g=d.gcEval(e,b),d.warn("we will drop inline event handler support, with next release. use event binding: $.bind instead"),b[f]&&(h=!0,b[f]=!1));!1===g&&(c.stopPropagation(),c.preventDefault());a(b).trigger(c);h&&(b[f]=e);return g};i=function(){d.scrollRoot=a.browser.webkit||"BackCompat"==k.compatMode?
a(k.body):a(k.documentElement)};i();d.ready("DOM",i);d.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",c={top:0,left:0},f={hideDelay:5E3,getBodyOffset:function(){c=e.offset()},showFor:function(b,c,d,g){f._create();var b=a(b),n=a(b).getShadowElement(),i=f.getOffsetFromBody(n);f.clear();g?this.hide():(this.getMessage(b,c),this.position(n,i),e.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(h=setTimeout(r,this.hideDelay)));
d||this.setFocus(n,i)},getOffsetFromBody:function(b){b=a(b).offset();a.swap(e[0],{visibility:"hidden",display:"inline-block",left:0,top:0},f.getBodyOffset);b.top-=c.top;b.left-=c.left;return b},setFocus:function(c,f){var h=a(c).getShadowFocusElement(),j=d.scrollRoot.scrollTop(),g=(f||h.offset()).top-30,n;d.getID&&"label"==b&&e.attr("for",d.getID(h));j>g&&(d.scrollRoot.animate({scrollTop:g-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-g)),80)}),n=!0);try{h[0].focus()}catch(i){}n&&(d.scrollRoot.scrollTop(j),
setTimeout(function(){d.scrollRoot.scrollTop(j)},0));setTimeout(function(){a(k).bind("focusout.validityalert",r)},10)},getMessage:function(b,c){a("span.va-box",e).text(c||s(b[0])||b.prop("validationMessage"))},position:function(b,c){c=c?a.extend({},c):f.getOffsetFromBody(b);c.top+=b.outerHeight();e.css(c)},show:function(){"none"===e.css("display")&&e.css({opacity:0}).show();e.addClass("va-visible").fadeTo(400,1)},hide:function(){e.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(g);
clearTimeout(h);a(k).unbind("focusout.validityalert");e.stop().removeAttr("for")},_create:function(){if(!e)e=f.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){e.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&e.bgIframe()})}},e,h=!1,g=!1,r=a.proxy(f,
"hide");return f}();(function(){var b,c=[],e;a(k).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var d=a(f.target),h=d.getShadowElement();h.hasClass("form-ui-invalid")||(h.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(k).triggerHandler(h,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),
d.trigger(b);b&&b.isDefaultPrevented()&&f.preventDefault();c.push(f.target);f.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(f.target).trigger(e,e)},9);h=d=null}})})();m.replaceValidationUI&&d.ready("DOM",function(){a(k).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,d,i,k,q,m){var g=d.validityMessages,i=m.overrideMessages||m.customMessages?["customValidationMessage"]:[];g.en=g.en||g["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){g.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){g.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){g.en.rangeOverflow[a]=
"Value must be at or before {%max}."});g["en-US"]=g["en-US"]||g.en;g[""]=g[""]||g["en-US"];g.de=g.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){g.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){g.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){g.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var o=
g[""];d.createValidationMessage=function(d,g){var i=o[g];i&&"string"!==typeof i&&(i=i[a.prop(d,"type")]||i[(d.nodeName||"").toLowerCase()]||i.defaultMessage);i&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==i.indexOf("{%"+c)){var f=("label"==c?a.trim(a('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):a.attr(d,c))||"";i=i.replace("{%"+c+"}",f);"value"==c&&(i=i.replace("{%valueLen}",f.length))}});return i||""};(d.bugs.validationMessage||!Modernizr.formvalidation)&&
i.push("validationMessage");d.activeLang({langObj:g,module:"form-core",callback:function(a){o=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var g=a("select",this);if(g[0]&&g[0].options&&g[0].options.length)d=g[0].options}return d}}});i.forEach(function(g){d.defineNodeNamesProperty(["fieldset","output","button"],
g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(i){var k=d.defineNodeNameProperty(i,g,{prop:{get:function(){var c=this,f="";if(!a.prop(c,"willValidate"))return f;var e=a.prop(c,"validity")||{valid:1};if(e.valid||(f=d.getContentValidationMessage(c,e)))return f;if(e.customError&&c.nodeName&&(f=Modernizr.validationmessage&&k.prop._supget?k.prop._supget.call(c):d.data(c,"customvalidationMessage")))return f;a.each(e,function(a,b){if("valid"!=a&&b&&(f=d.createValidationMessage(c,
a)))return!1});return f||""},writeable:!1}})})});d.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return d.inputTypes[a]?a:this.type}}})});
jQuery.webshims.register("form-datalist",function(a,d,i,k,q){d.propTypes.element=function(i){d.createPropDefault(i,"attr");if(!i.prop)i.prop={get:function(){var d=i.attr.get.call(this);d&&(d=a("#"+d)[0])&&i.propNodeName&&!a.nodeName(d,i.propNodeName)&&(d=null);return d||null},writeable:!1}};(function(){if(!Modernizr.input.list){var m=0,g={submit:1,button:1,reset:1,hidden:1,range:1,date:1},o=a.browser.msie&&7>parseInt(a.browser.version,10),r={},p=function(a){if(!a)return[];if(r[a])return r[a];var f;
d.ready("json-storage",function(){try{f=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(d){}r[a]=f||[]});return f||[]},s={_create:function(c){if(!g[a.prop(c.input,"type")]){var d=c.datalist,e=a.data(c.input,"datalistWidget");if(d&&e&&e.datalist!==d)e.datalist=d,e.id=c.id,e._resetListCached();else if(d){if(!(e&&e.datalist===d)){m++;var h=this;this.timedHide=function(){clearTimeout(h.hideTimer);h.hideTimer=setTimeout(a.proxy(h,"hideList"),9)};this.datalist=d;this.id=c.id;this.hasViewableData=
!0;this._autocomplete=a.attr(c.input,"autocomplete");a.data(c.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=c.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseover.datalistWidget mousedown.datalistWidget click.datalistWidget",function(b){var c=a("li:not(.hidden-item)",h.shadowList),d="mousedown"==b.type||"click"==b.type;h.markItem(c.index(b.target),d,c);"click"==b.type&&h.hideList();return"mousedown"!=b.type}).bind("focusout",
this.timedHide);c.input.setAttribute("autocomplete","off");a(c.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",a.proxy(this,"showHideOptions")).bind("keydown.datalistWidget",function(b){var c=b.keyCode;if(40==c&&!h.showList())return h.markItem(h.index+1,!0),!1;if(h.isListVisible){if(38==c)return h.markItem(h.index-1,!0),!1;if(!b.shiftKey&&(33==c||36==c))return h.markItem(0,!0),!1;if(!b.shiftKey&&(34==c||35==c))return b=a("li:not(.hidden-item)",h.shadowList),h.markItem(b.length-1,
!0,b),!1;if(13==c||27==c)return 13==c&&(b=a("li.active-item:not(.hidden-item)",h.shadowList),b[0]&&(a.prop(h.input,"value",b.attr("data-value")),a(h.input).triggerHandler("updateInput"))),h.hideList(),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&h.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();c.input.form&&
c.input.id&&a(c.input.form).bind("submit.datalistWidget"+c.input.id,function(){var b=a.prop(c.input,"value"),d=(c.input.name||c.input.id)+a.prop(c.input,"type");if(!h.storedOptions)h.storedOptions=p(d);if(b&&-1==h.storedOptions.indexOf(b)&&(h.storedOptions.push(b),b=h.storedOptions,d)){b=b||[];try{localStorage.setItem("storedDatalistOptions"+d,JSON.stringify(b))}catch(e){}}});a(i).bind("unload",function(){h.destroy()})}}else e&&e.destroy()}},destroy:function(){var c=a.attr(this.input,"autocomplete");
a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(k).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");c===q?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",c)},_resetListCached:function(a){var d=this,e;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";if(!this.updateTimer)2>m||i.QUnit||
(e=a&&k.activeElement==d.input)?d.updateListOptions(e):this.updateTimer=setTimeout(function(){d.updateListOptions();d=null},100*m)},updateListOptions:function(c){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});for(var d=[],e=[],h=[],b,g=a.prop(this.datalist,"options"),i=0,k=g.length;i<k;i++){b=g[i];if(b.disabled)return;b={value:a(b).val()||"",text:a.trim(a.attr(b,"label")||
b.textContent||b.innerText||a.text([b])||""),className:b.className||"",style:a.attr(b,"style")||""};if(!b.text)b.text=b.value;e[i]=b.value;h[i]=b}if(!this.storedOptions)this.storedOptions=p((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==e.indexOf(a)&&h.push({value:a,text:a,className:"stored-suggest",style:""})});h.forEach(function(a,b){var c=-1!=a.value.indexOf('"')?"'"+a.value+"'":'"'+a.value+'"';d[b]="<li data-value="+c+' class="'+a.className+
'" style="'+a.style+'" tabindex="-1" role="listitem">'+a.text+"</li>"});this.arrayOptions=h;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+d.join("\n")+"</ul>");a.fn.bgIframe&&o&&this.shadowList.bgIframe();(c||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(){var c=a.prop(this.input,"value").toLowerCase();if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=
c;var d=!1,e=a("li",this.shadowList);c?this.arrayOptions.forEach(function(h,b){if(!("lowerText"in h))h.lowerText=h.text.toLowerCase(),h.lowerValue=h.value.toLowerCase();-1!==h.lowerText.indexOf(c)||-1!==h.lowerValue.indexOf(c)?(a(e[b]).removeClass("hidden-item"),d=!0):a(e[b]).addClass("hidden-item")}):e.length&&(e.removeClass("hidden-item"),d=!0);(this.hasViewableData=d)?this.showList():(this.lastUnfoundValue=c,this.hideList())}},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&
this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return!1;var c=this,d=a(this.input).offset();d.top+=a(this.input).outerHeight();d.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);o&&(this.shadowList.css("height","auto"),250<this.shadowList.height()&&this.shadowList.css("height",220));this.shadowList.css(d).addClass("datalist-visible");this.isListVisible=!0;a(k).bind("mousedown.datalist"+
this.id+" focusin.datalist"+this.id,function(d){d.target===c.input||c.shadowList[0]===d.target||a.contains(c.shadowList[0],d.target)?(clearTimeout(c.hideTimer),setTimeout(function(){clearTimeout(c.hideTimer)},0)):c.timedHide()});return!0},hideList:function(){if(!this.isListVisible)return!1;this.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");this.index=-1;this.isListVisible=!1;a(this.input).removeAttr("aria-activedescendant");
a(k).unbind(".datalist"+this.id);return!0},scrollIntoView:function(c){var d=a("> ul",this.shadowList),e=c.position();e.top-=(parseInt(d.css("paddingTop"),10)||0)+(parseInt(d.css("marginTop"),10)||0)+(parseInt(d.css("borderTopWidth"),10)||0);0>e.top?this.shadowList.scrollTop(this.shadowList.scrollTop()+e.top-2):(e.top+=c.outerHeight(),c=this.shadowList.height(),e.top>c&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(e.top-c)+2))},markItem:function(c,d,e){e=e||a("li:not(.hidden-item)",this.shadowList);
if(e.length)0>c?c=e.length-1:c>=e.length&&(c=0),e.removeClass("active-item"),this.shadowList.addClass("list-item-active"),e=e.filter(":eq("+c+")").addClass("active-item"),d&&(a.prop(this.input,"value",e.attr("data-value")),a.attr(this.input,"aria-activedescendant",a.webshims.getID(e)),a(this.input).triggerHandler("updateInput"),this.scrollIntoView(e)),this.index=c}};(function(){d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=a("select",this);return c[0]?c[0].options:
[]}}});d.defineNodeNameProperties("input",{selectedOption:{prop:{writeable:!1,get:function(){var c=a.prop(this,"list"),d=null,e;if(!c)return d;e=a.attr(this,"value");if(!e)return d;c=a.prop(c,"options");if(!c.length)return d;a.each(c,function(c,b){if(e==a.prop(b,"value"))return d=b,!1});return d}}},autocomplete:{attr:{get:function(){var c=a.data(this,"datalistWidget");return c?c._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(c){var d=a.data(this,
"datalistWidget");d?(d._autocomplete=c,"off"==c&&d.hideList()):"autocomplete"in this?this.autocomplete=c:this.setAttribute("autocomplete",c)}}},list:{attr:{get:function(){var a=d.contentAttr(this,"list");return null==a?q:a},set:function(c){d.contentAttr(this,"list",c);d.objectCreate(s,q,{input:this,id:c,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}});d.addReady(function(c,d){d.filter("select, option").each(function(){var c=this.parentNode,d=a.nodeName(c,
"datalist");if(c&&!d)c=c.parentNode,d=a.nodeName(c,"datalist");c&&d&&a(c).triggerHandler("updateDatalist")})})})()}})()});