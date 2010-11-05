(function(b){if(!navigator.geolocation){b.support.geolocation="shim";var n=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},x=0;navigator.geolocation=function(){var p,m={getCurrentPosition:function(w,i,k){var a=function(){clearTimeout(c);if(!(p||!window.google||!google.loader||!google.loader.ClientLocation)){var e=google.loader.ClientLocation;p={coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,
accuracy:43E3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:b.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},e.address)}}if(p)w(b.extend(p,{timestamp:(new Date).getTime()}));else i&&i({code:2,message:"POSITION_UNAVAILABLE"})},c;if(!window.google||!google.loader){if(b.webshims.modules.geolocation.options.destroyWrite){document.write=n;document.writeln=n}b(document).one("google-loader",a);b.webshims.loader.loadScript("http://www.google.com/jsapi",false,
"google-loader");if(k&&k.timeout)c=setTimeout(function(){b(document).unbind("google-loader",a);i&&i({code:3,message:"TIMEOUT"})},k.timeout)}else setTimeout(a,1)},clearWatch:b.noop};m.watchPosition=function(w,i,k){m.getCurrentPosition(w,i,k);x++;return x};return m}()}})(jQuery);
jQuery.webshims.ready("es5",function(b,n,x){var p=n.validityMessages,m=b.support,w=false,i=document;if(m.validity===true)w=!x.noHTMLExtFixes;b.extend(b.expr.filters,{valid:function(k){return(b.attr(k,"validity")||{valid:true}).valid},invalid:function(k){return!b.expr.filters.valid(k)},willValidate:function(k){return b.attr(k,"willValidate")}});n.triggerInlineForm=function(){var k=function(a){if(typeof a!="string"||a.indexOf("-")!==-1||a.indexOf(".")!==-1||a.indexOf('"')!==-1)return"";return"var "+
a+' = this.form["'+a+'"];'};return function(a,c){var e=a["on"+c]||a.getAttribute("on"+c)||"",f;c=b.Event({type:c,target:a[0],currentTarget:a[0]});if(e&&typeof e=="string"&&a.form&&a.form.elements){var o="";f=0;for(var q=a.form.elements,r=q.length;f<r;f++){var t=q[f].name,d=q[f].id;if(t)o+=k(t);if(d&&d!==t)o+=k(d)}f=function(){eval(o+e)}.call(a,c)}b(a).trigger(c);return f}}();n.validityAlert=function(){var k=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",a={hideDelay:5E3,showFor:function(r,
t,d){r=b(r);var j=(r.data("inputUIReplace")||{visual:r}).visual;q();a.clear();this.getMessage(r,t);this.position(j);this.show();if(this.hideDelay)e=setTimeout(f,this.hideDelay);if(!d){r=b("input, select, textarea, .ui-slider-handle",j).filter(":visible:first");r[0]||(r=j);c.attr("for",n.getID(r));r.focus();b(i).bind("focusout.validityalert",f)}},getMessage:function(r,t){b("> span",c).text(t||r.attr("validationMessage"))},position:function(r){var t=r.offset();t.top+=r.outerHeight();c.css(t)},show:function(){c.css("display")===
"none"?c.fadeIn():c.fadeTo(400,1)},hide:function(){a.clear();c.fadeOut()},clear:function(){clearTimeout(e);b(i).unbind("focusout.validityalert");c.stop().removeAttr("for")},alert:b("<"+k+' class="validity-alert" role="alert"><span class="va-box" /></'+k+">").css({position:"absolute",display:"none"})},c=a.alert,e=false,f=b.proxy(a,"hide"),o=false,q=function(){if(!o){o=true;b(function(){c.appendTo("body")})}};return a}();p.en=p.en||p["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};p["en-US"]=p["en-US"]||p.en;p[""]=p[""]||p.en;p.de=p.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",
rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};(function(){var k,
a=[],c="value"in i.createElement("output")&&"list"in i.createElement("input"),e,f;if(w&&x.addEventListener){var o={timer:void 0,prevented:false};x.addEventListener("submit",function(r){!o.prevented&&r.target.checkValidity&&b.attr(r.target,"novalidate")==null&&b(r.target).checkValidity()},true);var q=function(r){if(b.attr(r.target,"formnovalidate")!=null){o.timer&&clearTimeout(o.timer);o.prevented=true;o.timer=setTimeout(function(){o.prevented=false},20)}};x.addEventListener("click",q,true);x.addEventListener("touchstart",
q,true);x.addEventListener("touchend",q,true)}b(i).bind("invalid",function(r){if(w&&b.attr(r.target,"validity").valid){r.stopImmediatePropagation();return false}if(!k){if((f=r.target.form)&&w){var t=b(f).bind("submit.preventInvalidSubmit",function(d){if(b.attr(f,"novalidate")==null){d.stopImmediatePropagation();return false}}).data("events").submit;t&&t.length>1&&t.unshift(t.pop())}k=b.Event("firstinvalid");b(r.target).trigger(k)}k&&k.isDefaultPrevented()&&r.preventDefault();if(m.validity!==true||
a.indexOf(r.target)==-1)a.push(r.target);else w&&r.stopImmediatePropagation();r.extraData="fix";clearTimeout(e);e=setTimeout(function(){var d={type:"lastinvalid",cancelable:false,invalidlist:b(a)};w&&!c&&i.activeElement&&k&&k.target!==i.activeElement&&!b.data(k.target,"maybePreventedinvalid")&&n.validityAlert.showFor(k.target);k=false;a=[];b(f).unbind("submit.preventInvalidSubmit");b(r.target).trigger(d,d)},9)})})();(function(){if(w){m.fieldsetValidation=m.fieldsetValidation||"shim";var k=function(a){var c=
(b.attr(a,"validity")||{valid:true}).valid;!c&&a.checkValidity()&&b(a).trigger("invalid");return c};n.addMethod("checkValidity",function(){if(this.elements||b.nodeName(this,"fieldset")){var a=true;b(this.elements||"input, textarea, select",this).each(function(){k(this)||(a=false)});return a}else if(this.checkValidity)return k(this)})}})();(function(){var k=m.validity===true&&n.overrideValidationMessages,a=true,c=true;if(m.validity===true){a=!!("required"in i.createElement("select")||x.noHTMLExtFixes);
c=!!(b('<input type="datetime-local" />')[0].type=="datetime-local"&&b('<input type="range" />')[0].type=="range")}var e=!a||!c||k,f=n.inputTypes,o={},q=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],r=b.attr,t=b.fn.val,d=k?{value:1,checked:1}:{value:1},j=k?["textarea"]:[],l={radio:1,checkbox:1},s=function(h,u){if(h.form){var g=(h.getAttribute&&h.getAttribute("type")||h.type||"").toLowerCase();if(!k)if(!(!a&&g=="select-one")&&
!f[g])return;k&&!u&&l[g]&&h.name?b(i.getElementsByName(h.name)).each(function(){b.attr(this,"validity")}):b.attr(h,"validity")}};if(!a||k){b.extend(d,{required:1,size:1,multiple:1,selectedIndex:1});j.push("select")}if(!c||k){b.extend(d,{min:1,max:1,step:1});j.push("input")}var y=p[""];b(i).bind("htmlExtLangChange",function(){n.activeLang(p,"validation-base",function(h){y=h})});n.createValidationMessage=function(h,u){var g=y[u];if(g&&typeof g!=="string")g=g[(h.getAttribute("type")||"").toLowerCase()]||
g.defaultMessage;g&&["value","min","max","title","maxlength","label"].forEach(function(v){if(g.indexOf("{%"+v)!==-1){var z=(v=="label"?b.trim(b("label[for="+h.id+"]",h.form).text()).replace(/\*$|:$/,""):b.attr(h,v))||"";g=g.replace("{%"+v+"}",z);if("value"==v)g=g.replace("{%valueLen}",z.length)}});return g||""};b.each(m.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(h,u){n.attr(u,{elementNames:["input","select","textarea"],getter:function(g){var v=
"";if(!b.attr(g,"willValidate"))return v;var z=b.attr(g,"validity")||{valid:1};if(z.valid)return v;if(z.customError||u==="validationMessage")if(v="validationMessage"in g?g.validationMessage:b.data(g,"customvalidationMessage"))return v;b.each(z,function(A,B){if(!(A=="valid"||!B))if(v=n.createValidationMessage(g,A))return false});return v||""}})});m.validationMessage=m.validationMessage||"shim";n.addMethod("setCustomValidity",function(h){h+="";if(this.setCustomValidity){this.setCustomValidity(h);if(e){b.data(this,
"hasCustomError",!!h);s(this)}}else b.data(this,"customvalidationMessage",""+h)});if(m.validity===true){n.addInputType=function(h,u){f[h]=u};n.addValidityRule=function(h,u){o[h]=u};n.addValidityRule("typeMismatch",function(h,u,g,v){if(u==="")return false;v=v.typeMismatch;if(!("type"in g))g.type=(h[0].getAttribute("type")||"").toLowerCase();if(f[g.type]&&f[g.type].mismatch)v=f[g.type].mismatch(u,h);return v})}if(!a){n.createBooleanAttrs("required",["select"]);n.addValidityRule("valueMissing",function(h,
u,g,v){if(g.nodeName=="select"&&!u&&h.attr("required")&&h[0].size<2){if(!g.type)g.type=h[0].type;if(g.type=="select-one"&&b("> option:first-child:not(:disabled)",h).attr("selected"))return true}return v.valueMissing})}if(e){n.attr("validity",{elementNames:j,getter:function(h){var u=h.validity;if(!u)return u;var g={};q.forEach(function(D){g[D]=u[D]});if(!b.attr(h,"willValidate"))return g;var v=b(h),z={type:(h.getAttribute&&h.getAttribute("type")||"").toLowerCase(),nodeName:(h.nodeName||"").toLowerCase()},
A=t.call(v),B=!!b.data(h,"hasCustomError"),C;g.customError=B;if(g.valid&&g.customError)g.valid=false;else if(!g.valid){var E=true;b.each(g,function(D,F){if(F)return E=false});if(E)g.valid=true}b.each(o,function(D,F){g[D]=F(v,A,z,g);if(g[D]&&(g.valid||!C&&k)){h.setCustomValidity(n.createValidationMessage(h,D));g.valid=false;C=true}});g.valid&&h.setCustomValidity("");return g}});b.fn.val=function(){var h=t.apply(this,arguments);this.each(function(){s(this)});return h};b.attr=function(h,u,g){var v=r.apply(this,
arguments);d[u]&&g!==void 0&&h.form&&s(h);return v};if(i.addEventListener){i.addEventListener("change",function(h){s(h.target)},true);c||i.addEventListener("input",function(h){s(h.target)},true)}n.addReady(function(h){h===i?b(j.join(",")).each(function(){s(this,true)}):b(j.join(","),h).each(function(){s(this,true)})})}})();n.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(b){if(!b.support.validity){var n=b.webshims;n.inputTypes=n.inputTypes||{};var x=n.inputTypes,p={radio:1,checkbox:1};n.addInputType=function(a,c){x[a]=c};var m={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},w={valueMissing:function(a,c,e){if(!a.attr("required"))return false;var f=false;if(!("type"in e))e.type=(a[0].getAttribute("type")||
a[0].type||"").toLowerCase();return f=e.nodeName=="select"?!c&&a[0].type=="select-one"&&a[0].size<2&&b("> option:first-child:not(:disabled)",a).attr("selected"):p[e.type]?!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(a,c,e){if(c===""||e.nodeName=="select")return false;a=a.attr("maxlength");e=false;var f=c.length;if(f&&a>=0&&c.replace&&(typeof a=="number"||a&&a==a*1))e=f>a;return e},typeMismatch:function(a,c,e){if(c===""||e.nodeName=="select")return false;
var f=false;if(!("type"in e))e.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(x[e.type]&&x[e.type].mismatch)f=x[e.type].mismatch(c,a);return f},patternMismatch:function(a,c,e){if(c===""||e.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(c)}};n.addValidityRule=function(a,c){w[a]=c};n.addMethod("checkValidity",function(){var a,c=function(e){var f,o=b.attr(e,"validity");if(o)b.data(e,"cachedValidity",o);else return true;if(!o.valid){f=
b.Event("invalid");var q=b(e).trigger(f);if(!a&&!f.isDefaultPrevented()){n.validityAlert.showFor(q);a=true}}b.data(e,"cachedValidity",false);return o.valid};return function(){a=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var e=true,f=this.elements||b("input, textarea, select",this),o=0,q=f.length;o<q;o++)c(f[o])||(e=false);return e}else return this.form?c(this):true}}());b.event.special.invalid={add:function(){b.data(this,"invalidEventShim")||b.event.special.invalid.setup.call(this)},
setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var a=b(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate")))if(!b(a.target).checkValidity()){!a.originalEvent&&window.console&&console.log&&
console.log("submit");a.stopImmediatePropagation();return false}}};n.attr("validity",{elementNames:["input","select","textarea"],getter:function(a){var c=b.data(a,"cachedValidity");if(c)return c;c=b.extend({},m);if(!b.attr(a,"willValidate"))return c;var e=b(a),f=e.val(),o={nodeName:a.nodeName.toLowerCase()};c.customError=!!b.data(a,"customvalidationMessage");if(c.customError)c.valid=false;b.each(w,function(q,r){if(r(e,f,o)){c[q]=true;c.valid=false}});return c}});n.createBooleanAttrs("required",["input",
"textarea","select"]);n.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(c){return!!(c.name&&c.form&&!c.disabled&&!c.readOnly&&!a[c.type]&&b.attr(c.form,"novalidate")==null)}}()});n.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!a.test(c)}}()});n.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});var i=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.data(a.form,"novalidate",false)},1)}},k={submit:1,button:1};b(document).bind("click",function(a){a.target&&a.target.form&&k[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&i.call(a.target)});n.addReady(function(a){a=b("form",a).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",i).end();if(!document.activeElement||!document.activeElement.form)b("input, select, textarea",
a).filter("[autofocus]:first").focus()});b.support.validity=b.support.validity||"shim";n.createReadyEvent("validity")}},true);
jQuery.webshims.ready("validation-base",function(b,n){if(!("value"in document.createElement("output"))){var x=document;(function(){var m={input:1,textarea:1},w={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},i=function(k){var a,c=k.attr("value"),e=function(o){if(k){var q=k.attr("value");if(q!==c){c=q;if(!o||o.type!="input")n.triggerInlineForm(k[0],"input")}}},f=function(){k.unbind("focusout",f).unbind("input",e);clearInterval(a);e();k=null};clearInterval(a);a=setInterval(e,b.browser.mozilla?
250:111);setTimeout(e,9);k.bind("focusout",f).bind("input",e)};b(x).bind("focusin",function(k){if(k.target&&k.target.type&&!k.target.readonly&&!k.target.readOnly&&!k.target.disabled&&m[(k.target.nodeName||"").toLowerCase()]&&!w[k.target.type])i(b(k.target))})})();var p=function(m){if(!m.getAttribute("aria-live")){m=b(m);var w=(m.text()||"").trim(),i=m.attr("id"),k=m.attr("for"),a=b('<input class="output-shim" type="hidden" name="'+(m.attr("name")||"")+'" value="'+w+'" style="display: none" />').insertAfter(m),
c=a[0].form||x,e=function(f){a[0].value=f;f=a[0].value;m.text(f);m[0].value=f};m[0].defaultValue=w;m[0].value=w;m.attr({"aria-live":"polite"});if(i){a.attr("id",i);m.attr("aria-labeldby",n.getID(b("label[for="+i+"]",c)))}if(k){i=n.getID(m);k.split(" ").forEach(function(f){(f=c.getElementById(f))&&f.setAttribute("aria-controls",i)})}m.data("outputShim",e);a.data("outputShim",e);return e}};n.attr("value",{elementNames:["output","input"],getter:true,setter:function(m,w,i){var k=b.data(m,"outputShim");
if(!k)if(b.nodeName(m,"output"))k=p(m);else return i();k(w)}});n.addReady(function(m){b("output",m).each(function(){p(this)})});n.createReadyEvent("output")}},true);
(function(b){var n,x=function(p,m,w){if(!n){n=true;var i=parseInt("NaN",10),k=document,a=m.inputTypes,c=function(d){return typeof d=="number"||d&&d==d*1},e=function(d){return p('<input type="'+d+'" />').attr("type")===d},f=function(d){return(d.getAttribute("type")||"").toLowerCase()},o=function(d,j){var l=p.attr(d,"step");if(l==="any")return l;j=j||f(d);if(!a[j]||!a[j].step)return l;l=a.number.asNumber(l);return(!isNaN(l)&&l>0?l:a[j].step)*a[j].stepScaleFactor},q=function(d,j,l){if(!(d+"AsNumber"in
l)){l[d+"AsNumber"]=a[l.type].asNumber(j.attr(d));if(isNaN(l[d+"AsNumber"])&&d+"Default"in a[l.type])l[d+"AsNumber"]=a[l.type][d+"Default"]}},r=function(d,j){d=""+d;j-=d.length;for(var l=0;l<j;l++)d="0"+d;return d};m.addValidityRule("stepMismatch",function(d,j,l){if(j==="")return false;if(!("type"in l))l.type=f(d[0]);if(l.type=="date")return false;var s=false;if(a[l.type]&&a[l.type].step){if(!("step"in l))l.step=o(d[0],l.type);if(l.step=="any")return false;if(!("valueAsNumber"in l))l.valueAsNumber=
a[l.type].asNumber(j);if(isNaN(l.valueAsNumber))return false;q("min",d,l);d=l.minAsNumber;if(isNaN(d))d=a[l.type].stepBase||0;s=Math.abs((l.valueAsNumber-d)%l.step);s=!(s<=1.0E-7||Math.abs(s-l.step)<=1.0E-7)}return s});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(d){m.addValidityRule(d.name,function(j,l,s){var y=false;if(l==="")return y;if(!("type"in s))s.type=f(j[0]);if(a[s.type]&&a[s.type].asNumber){if(!("valueAsNumber"in s))s.valueAsNumber=
a[s.type].asNumber(l);if(isNaN(s.valueAsNumber))return false;q(d.attr,j,s);if(isNaN(s[d.attr+"AsNumber"]))return y;y=s[d.attr+"AsNumber"]*d.factor<s.valueAsNumber*d.factor-1.0E-7}return y})});m.attr("valueAsNumber",{elementNames:["input"],getter:function(d){var j=f(d);return a[j]&&a[j].asNumber?a[j].asNumber(p.attr(d,"value")):i},setter:function(d,j,l){var s=f(d);if(a[s]&&a[s].numberToString)if(isNaN(j))p.attr(d,"value","");else{j=a[s].numberToString(j);if(j!==false)p.attr(d,"value",j);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else l()}});m.attr("valueAsDate",{elementNames:["input"],getter:function(d){var j=f(d);return a[j]&&a[j].asDate&&!a[j].noAsDate?a[j].asDate(p.attr(d,"value")):null},setter:function(d,j,l){var s=f(d);if(a[s]&&a[s].dateToString){if(!w.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(j===null)p.attr(d,"value","");else{j=a[s].dateToString(j);if(j!==false)p.attr(d,"value",j);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else l()}});var t={number:{mismatch:function(d){return!c(d)},
step:1,stepScaleFactor:1,asNumber:function(d){return c(d)?d*1:i},numberToString:function(d){return c(d)?d:false}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(d){if(!d||!d.split||!/\d$/.test(d))return true;var j=d.split(/\u002D/);if(j.length!==3)return true;var l=false;p.each(j,function(s,y){if(!(c(y)||y&&y=="0"+y*1)){l=true;return false}});if(l)return l;if(j[0].length!==4||j[1].length!=2||j[1]>12||j[2].length!=2||j[2]>33)l=true;return d!==this.dateToString(this.asDate(d,true))},step:1,
stepScaleFactor:864E5,asDate:function(d,j){if(!j&&this.mismatch(d))return null;return new Date(this.asNumber(d,true))},asNumber:function(d,j){var l=i;if(j||!this.mismatch(d)){d=d.split(/\u002D/);l=Date.UTC(d[0],d[1]-1,d[2])}return l},numberToString:function(d){return c(d)?this.dateToString(new Date(d*1)):false},dateToString:function(d){return d&&d.getFullYear?d.getUTCFullYear()+"-"+r(d.getUTCMonth()+1,2)+"-"+r(d.getUTCDate(),2):false}},time:{mismatch:function(d,j){if(!d||!d.split||!/\d$/.test(d))return true;
d=d.split(/\u003A/);if(d.length<2||d.length>3)return true;var l=false,s;if(d[2]){d[2]=d[2].split(/\u002E/);s=parseInt(d[2][1],10);d[2]=d[2][0]}p.each(d,function(y,h){if(!(c(h)||h&&h=="0"+h*1)||h.length!==2){l=true;return false}});if(l)return true;if(d[0]>23||d[0]<0||d[1]>59||d[1]<0)return true;if(d[2]&&(d[2]>59||d[2]<0))return true;if(s&&isNaN(s))return true;if(s)if(s<100)s*=100;else if(s<10)s*=10;return j===true?[d,s]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(d){d=new Date(this.asNumber(d));
return isNaN(d)?null:d},asNumber:function(d){var j=i;d=this.mismatch(d,true);if(d!==true){j=Date.UTC("1970",0,1,d[0][0],d[0][1],d[0][2]||0);if(d[1])j+=d[1]}return j},dateToString:function(d){if(d&&d.getUTCHours){var j=r(d.getUTCHours(),2)+":"+r(d.getUTCMinutes(),2),l=d.getSeconds();if(l!="0")j+=":"+r(l,2);l=d.getUTCMilliseconds();if(l!="0")j+="."+r(l,3);return j}else return false}},"datetime-local":{mismatch:function(d,j){if(!d||!d.split||(d+"special").split(/\u0054/).length!==2)return true;d=d.split(/\u0054/);
return a.date.mismatch(d[0])||a.time.mismatch(d[1],j)},noAsDate:true,asDate:function(d){d=new Date(this.asNumber(d));return isNaN(d)?null:d},asNumber:function(d){var j=i,l=this.mismatch(d,true);if(l!==true){d=d.split(/\u0054/)[0].split(/\u002D/);j=Date.UTC(d[0],d[1]-1,d[2],l[0][0],l[0][1],l[0][2]||0);if(l[1])j+=l[1]}return j},dateToString:function(d,j){return a.date.dateToString(d)+"T"+a.time.dateToString(d,j)}}};e("number")||m.addInputType("number",t.number);e("range")||m.addInputType("range",p.extend({},
t.number,t.range));e("date")||m.addInputType("date",t.date);e("time")||m.addInputType("time",p.extend({},t.date,t.time));e("datetime-local")||m.addInputType("datetime-local",p.extend({},t.date,t.time,t["datetime-local"]));(function(){var d=m.modules["number-date-type"].options,j=function(h,u,g){g=g||{};if(!("type"in g))g.type=f(h);if(!("step"in g))g.step=o(h,g.type);if(!("valueAsNumber"in g))g.valueAsNumber=a[g.type].asNumber(p.attr(h,"value"));var v=g.step=="any"?a[g.type].step*a[g.type].stepScaleFactor:
g.step;q("min",p(h),g);q("max",p(h),g);if(isNaN(g.valueAsNumber))g.valueAsNumber=a[g.type].stepBase||0;if(g.step!=="any")if((h=Math.round((g.valueAsNumber-(g.minAsnumber||0))%g.step*1E7)/1E7)&&Math.abs(h)!=g.step)g.valueAsNumber-=h;h=g.valueAsNumber+v*u;if(!isNaN(g.minAsNumber)&&h<g.minAsNumber)h=g.valueAsNumber*u<g.minAsNumber?g.minAsNumber:isNaN(g.maxAsNumber)?Number.MAX_VALUE:g.maxAsNumber;else if(!isNaN(g.maxAsNumber)&&h>g.maxAsNumber)h=g.valueAsNumber*u>g.maxAsNumber?g.maxAsNumber:isNaN(g.minAsNumber)?
Number.MIN_VALUE:g.minAsNumber;return Math.round(h*1E7)/1E7};m.modules["number-date-type"].getNextStep=j;var l=function(h,u,g){if(!(h.disabled||h.readOnly||p(g).hasClass("step-controls"))){p.attr(h,"value",a[u].numberToString(j(h,p(g).hasClass("step-up")?1:-1,{type:u})));p(h).unbind("blur.stepeventshim");m.triggerInlineForm(h,"input");if(k.activeElement){if(k.activeElement!==h)try{h.focus()}catch(v){}setTimeout(function(){if(k.activeElement!==h)try{h.focus()}catch(z){}p(h).one("blur.stepeventshim",
function(){p(h).trigger("change")})},0)}}};if(d.stepArrows){var s={elementNames:["input"],setter:function(h,u,g){g();if(u=p.data(h,"step-controls"))u[h.disabled||h.readonly?"addClass":"removeClass"]("disabled-step-control")}};m.attr("disabled",s);m.attr("readonly",s)}var y={38:1,40:-1};m.addReady(function(h){d.stepArrows&&p("input",h).each(function(){var u=f(this);if(!(!a[u]||!a[u].asNumber||!d.stepArrows||d.stepArrows!==true&&!d.stepArrows[u])){var g=this,v=p(this).css("direction")=="rtl"?{action:"insertBefore",
side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"Left"},z=p('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>')[v.action](this).bind("selectstart dragstart",function(){return false}).bind("mousedown mousepress",function(E){l(g,u,E.target);return false});p(this).addClass("has-step-controls").data("step-controls",z).attr({readonly:this.readOnly,disabled:this.disabled}).bind("keypress",function(E){if(!(this.disabled||
this.readOnly||!y[E.keyCode])){p.attr(this,"value",a[u].numberToString(j(this,y[E.keyCode],{type:u})));m.triggerInlineForm(this,"input");return false}});if(d.calculateWidth){var A=p(this),B={w:A.getwidth()};if(B.w){var C={mL:parseInt(z.css("margin"+v.otherSide),10)||0,w:z.getouterWidth()};B.mR=parseInt(A.css("margin"+v.side),10)||0;z.css("marginBottom",(parseInt(A.css("paddingBottom"),10)||0)/-2);B.mR&&A.css("margin"+v.side,0);if(C.mL<=C.w*-1){z.css("margin"+v.side,Math.floor(Math.abs(C.w+C.mL)+B.mR));
A.css("padding"+v.side,(parseInt(p(this).css("padding"+v.side),10)||0)+Math.abs(C.mL));A.css("width",Math.floor(B.w+C.mL))}else{z.css("margin"+v.side,B.mR);A.css("width",Math.floor(B.w-C.mL-C.w))}}}}})})})();m.attr("type",{elementNames:["input"],getter:function(d){var j=f(d);return m.inputTypes[j]?j:d.type||d.getAttribute("type")},setter:true});m.createReadyEvent("number-date-type")}};b.support.validity===true?b.webshims.ready("validation-base",x,true):b.webshims.ready("validity",x,true)})(jQuery);
jQuery.webshims.ready("number-date-type",function(b,n,x,p){b.support.inputUI="shim";var m=b.webshims.modules.inputUI.options,w,i=function(a){b("input",a).each(function(){var c=b.attr(this,"type");i[c]&&!b.data(this,"inputUIReplace")&&i[c](b(this))})};i.common=function(a,c,e){if(m.replaceNative)(function(){var q=[],r;a.bind("firstinvalid invalid",function(t){clearTimeout(r);q.push(t);r=setTimeout(function(){if(!b.data(t.target,"maybePreventedinvalid")&&(!q[0]||!q[0].isDefaultPrevented())&&(!q[1]||
!q[1].isDefaultPrevented())){var d=t.target,j=d.nodeName;if(d.id)j+="#"+d.id;if(d.name)j+="[name="+d.name+"]";if(d.className)j+="."+d.className.split(" ").join(".");throw j+" can not be focused. handle the invalid event.";}q=[]},30)})})();else b.support.validity===true&&a.bind("firstinvalid",function(q){clearTimeout(w);w=setTimeout(function(){!b.data(q.target,"maybePreventedinvalid")&&!q.isDefaultPrevented()&&n.validityAlert.showFor(q.target)},30)});var f=a.attr("id");f={css:{marginRight:a.css("marginRight"),
marginLeft:a.css("marginLeft")},outerWidth:a.getouterWidth(),label:f?b("label[for="+f+"]",a[0].form):b([])};var o=n.getID(f.label);c.addClass(a[0].className).data("html5element",a);a.after(c).data("inputUIReplace",{visual:c,methods:e}).hide();if(c.length==1&&!b("*",c)[0]){c.attr("aria-labeledby",o);f.label.bind("click",function(){c.focus();return false})}return f};i["datetime-local"]=function(a){if(b.fn.datepicker){var c=b('<span class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),
e=this.common(a,c,i["datetime-local"].attrs),f=b("input.input-datetime-local-date",c);b("input",c).data("html5element",b.data(c[0],"html5element"));f.attr("aria-labeledby",e.label.attr("id"));e.label.bind("click",function(){f.focus();return false});if(e.css){c.css(e.css);if(e.outerWidth){c.outerWidth(e.outerWidth);e=c.getwidth()-4;f.css({marginLeft:0,marginRight:2}).outerWidth(Math.floor(e*0.6));b("input.input-datetime-local-time",c).css({marginLeft:2,marginRight:0}).outerWidth(Math.floor(e*0.4))}}n.triggerDomUpdate(c);
b("input.input-datetime-local-date",c).datepicker(b.extend({},m.datepicker)).bind("change",function(){var o,q=b("input.input-datetime-local-time",c).attr("value");try{o=(o=b.datepicker.parseDate(f.datepicker("option","dateFormat"),f.attr("value")))?b.datepicker.formatDate("yy-mm-dd",o):f.attr("value")}catch(r){o=f.attr("value")}if(!b("input.input-datetime-local-time",c).attr("value")){q="00:00";b("input.input-datetime-local-time",c).attr("value",q)}i["datetime-local"].blockAttr=true;a.attr("value",
o+"T"+q);i["datetime-local"].blockAttr=false;a.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");b("input.input-datetime-local-time",c).bind("input change",function(){var o=a.attr("value").split("T");if(o.length<2||!o[0])o[0]=b.datepicker.formatDate("yy-mm-dd",new Date);o[1]=b.attr(this,"value");i["datetime-local"].blockAttr=true;try{f.attr("value",b.datepicker.formatDate(f.datepicker("option","dateFormat"),b.datepicker.parseDate("yy-mm-dd",o[0])))}catch(q){}a.attr("value",
o.join("T"));i["datetime-local"].blockAttr=false;a.trigger("change")});b.each(["disabled","min","max","value","step"],function(o,q){a.attr(q,function(r,t){return t||""})})}};i["datetime-local"].attrs={disabled:function(a,c,e){b("input.input-datetime-local-date",c).datepicker("option","disabled",!!e);b("input.input-datetime-local-time",c).attr("disabled",!!e)},step:function(a,c,e){b("input.input-datetime-local-time",c).attr("step",e)},min:function(a,c,e){e=e.split?e.split("T"):[];try{e=b.datepicker.parseDate("yy-mm-dd",
e[0])}catch(f){e=false}e&&b("input.input-datetime-local-date",c).datepicker("option","minDate",e)},max:function(a,c,e){e=e.split?e.split("T"):[];try{e=b.datepicker.parseDate("yy-mm-dd",e[0])}catch(f){e=false}e&&b("input.input-datetime-local-date",c).datepicker("option","maxDate",e)},value:function(a,c,e){if(!i["datetime-local"].blockAttr){var f;e=e.split?e.split("T"):[];try{f=b.datepicker.parseDate("yy-mm-dd",e[0])}catch(o){f=false}if(f){b("input.input-datetime-local-date",c).datepicker("setDate",
f);b("input.input-datetime-local-time",c).attr("value",e[1]||"00:00")}else{b("input.input-datetime-local-date",c).attr("value",e[0]||"");b("input.input-datetime-local-time",c).attr("value",e[1]||"")}}}};i.date=function(a){if(b.fn.datepicker){var c=b('<input type="text" class="input-date" />'),e=this.common(a,c,i.date.attrs);if(e.css){c.css(e.css);e.outerWidth&&c.outerWidth(e.outerWidth)}c.datepicker(b.extend({},m.datepicker)).bind("change",function(){i.date.blockAttr=true;var f;try{f=(f=b.datepicker.parseDate(c.datepicker("option",
"dateFormat"),c.attr("value")))?b.datepicker.formatDate("yy-mm-dd",f):c.attr("value")}catch(o){f=c.attr("value")}a.attr("value",f);i.date.blockAttr=false;a.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");b.each(["disabled","min","max","value"],function(f,o){a.attr(o,function(q,r){return r||""})})}};i.date.attrs={disabled:function(a,c,e){c.datepicker("option","disabled",!!e)},min:function(a,c,e){try{e=b.datepicker.parseDate("yy-mm-dd",e)}catch(f){e=false}e&&c.datepicker("option",
"minDate",e)},max:function(a,c,e){try{e=b.datepicker.parseDate("yy-mm-dd",e)}catch(f){e=false}e&&c.datepicker("option","maxDate",e)},value:function(a,c,e){if(!i.date.blockAttr){try{var f=b.datepicker.parseDate("yy-mm-dd",e)}catch(o){f=false}f?c.datepicker("setDate",f):c.attr("value",e)}}};i.range=function(a){if(b.fn.slider){var c=b('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),e=this.common(a,c,i.range.attrs),f=function(o,q){if(o.originalEvent){i.range.blockAttr=
true;a.attr("value",q.value);i.range.blockAttr=false;o.type=="slidechange"?a.trigger("change"):n.triggerInlineForm(a[0],"input")}};b("span",c).attr("aria-labeledby",e.label.attr("id"));e.label.bind("click",function(){b("span",c).focus();return false});if(e.css){c.css(e.css);e.outerWidth&&c.outerWidth(e.outerWidth)}c.slider(b.extend(m.slider,{change:f,slide:f}));b.each(["disabled","min","max","value","step"],function(o,q){a.attr(q,function(r,t){return t||""})})}};i.range.attrs={disabled:function(a,
c,e){e=!!e;c.slider("option","disabled",e);b("span",c).attr({"aria-disabled":e+"",tabindex:e?"-1":"0"})},min:function(a,c,e){e=e?e*1||0:0;c.slider("option","min",e);b("span",c).attr({"aria-valuemin":e})},max:function(a,c,e){e=e||e===0?e*1||100:100;c.slider("option","max",e);b("span",c).attr({"aria-valuemax":e})},value:function(a,c,e){e=b(a).attr("valueAsNumber");if(isNaN(e)){e=(c.slider("option","max")-c.slider("option","min"))/2;a.value=e}i.range.blockAttr||c.slider("option","value",e);b("span",
c).attr({"aria-valuenow":e,"aria-valuetext":e})},step:function(a,c,e){e=e&&b.trim(e)?e*1||1:1;c.slider("option","step",e)}};b.each(["disabled","min","max","value","step"],function(a,c){n.attr(c,{elementNames:["input"],setter:function(e,f,o){var q=b.data(e,"inputUIReplace");o();q&&q.methods[c]&&q.methods[c](e,q.visual,f)},getter:true})});var k=function(a){if(a){a=b.extend({},a,m.date);b("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",a).each(function(){var c=
b.data(this,"html5element");c&&b.each(["disabled","min","max","value"],function(e,f){c.attr(f,function(o,q){return q||""})})});b.datepicker.setDefaults(a)}};b(p).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){b.datepicker&&b(p).bind("htmlExtLangChange",function(){n.activeLang(b.datepicker.regional,"inputUI",k)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});n.addReady(function(a){b(p).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(b.datepicker||b.fn.slider)i(a);b.datepicker&&b.fn.slider&&b(p).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui");a===p&&n.createReadyEvent("inputUI")})})},true);
(function(b){if(!b.support.placeholder){b.support.placeholder="shim";var n=function(i,k,a,c,e){if(!c){c=b.data(i,"placeHolder");if(!c)return}if(e=="focus"||!e&&i===document.activeElement)c.box.removeClass("placeholder-visible");else{if(k===false)k=b.attr(i,"value");if(k)c.box.removeClass("placeholder-visible");else{if(a===false)a=b.attr(i,"placeholder");c.box[a&&!k?"addClass":"removeClass"]("placeholder-visible")}}},x=function(i){i=b(i);var k=i.attr("id"),a=!!(i.attr("title")||i.attr("aria-labeledby"));
if(!a&&k)a=!!b("label[for="+k+"]",i[0].form)[0];return b(a?'<span class="placeholder-text"></span>':'<label for="'+(k||b.webshims.getID(i))+'" class="placeholder-text"></label>')},p=function(){var i=/\n|\r|\f|\t/g,k={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(a){var c=b.data(a,"placeHolder");if(c)return c;c=b.data(a,"placeHolder",{text:x(a)});c.box=b(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(q){n(this,false,false,c,q.type)}).parent();c.text.insertAfter(a).bind("mousedown.placeholder",function(){n(this,false,false,c,"focus");a.focus();return false});b.each(["Left","Top"],function(q,r){var t=(parseInt(b.curCSS(a,"padding"+r),10)||0)+Math.max(parseInt(b.curCSS(a,"margin"+r),10)||0,0)+(parseInt(b.curCSS(a,"border"+r+"Width"),10)||0);c.text.css("padding"+r,t)});var e=b.curCSS(a,"lineHeight"),f={width:b(a).getwidth(),height:b(a).getheight()},o=b.curCSS(a,"float");c.text.css("lineHeight")!==
e&&c.text.css("lineHeight",e);f.width&&f.height&&c.text.css(f);o!=="none"&&c.box.addClass("placeholder-box-"+o);return c},update:function(a,c){if(k[b.attr(a,"type")]||b.nodeName(a,"textarea")){if(b.nodeName(a,"input"))c=c.replace(i,"");var e=p.create(a);a.setAttribute("placeholder",c);e.text.text(c);n(a,false,c,e)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(i,k){p.update(i,k)},getter:function(i){return i.getAttribute("placeholder")||""}});var m={elementNames:["input",
"textarea"],setter:function(i,k,a){var c=i.getAttribute("placeholder");c&&"value"in i&&n(i,k,c);a()},getter:true};b.webshims.attr("value",m);var w=b.fn.val;b.fn.val=function(i){i!==undefined&&this.each(function(){this.nodeType===1&&m.setter(this,i,b.noop)});return w.apply(this,arguments)};b.webshims.addReady(function(i){b("input[placeholder], textarea[placeholder]",i).attr("placeholder",function(k,a){return a})})}})(jQuery);
