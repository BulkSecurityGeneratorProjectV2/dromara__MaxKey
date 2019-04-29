(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jqdnr","./jqmodal"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var n=a.jgrid,y=a.fn.jqGrid,r=y.getGuiStyles,z=y.getGridRes;n.jqModal=n.jqModal||{};a.extend(!0,n.jqModal,{toTop:!0});a.extend(n,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true");a.o&&a.o.remove()},hideModal:function(d,b){b=a.extend({jqm:!0,gb:"",removemodal:!1},b||{});var c=
b.gb&&"string"===typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?a("#"+b.gb.substr(6))[0]:!1,k=a(d);if(b.onClose&&(c=c?b.onClose.call(c,d):b.onClose(d),"boolean"===typeof c&&!c))return;if(a.fn.jqm&&!0===b.jqm)k.attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{a(">.jqgrid-overlay",b.gb).first().hide()}catch(l){}k.hide().attr("aria-hidden","true")}b.removemodal&&k.remove()},findPos:function(a){var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;while(a)}return[b,c]},
createModal:function(d,b,c,k,l,h,e){var g=n.jqID,f=this.p,f=null!=f?f.jqModal||{}:{};c=a.extend(!0,{resizingRightBottomIcon:y.getIconRes.call(this,"form.resizableLtr")},n.jqModal||{},f,c);var f=document.createElement("div"),m="#"+g(d.themodal),v="rtl"===a(c.gbox).attr("dir")?!0:!1,w=d.resizeAlso?"#"+g(d.resizeAlso):!1;e=a.extend({},e||{});f.className=r.call(this,"dialog.window","ui-jqdialog");f.id=d.themodal;f.dir=v?"rtl":"ltr";var q=document.createElement("div");q.className=r.call(this,"dialog.document");
a(q).attr("role","document");var t=document.createElement("div");t.className=r.call(this,"dialog.subdocument");q.appendChild(t);f.appendChild(q);q=document.createElement("div");q.className=r.call(this,"dialog.header","ui-jqdialog-titlebar "+(v?"ui-jqdialog-titlebar-rtl":"ui-jqdialog-titlebar-ltr"));q.id=d.modalhead;a(q).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var A=r.call(this,"states.hover"),p=a("<a aria-label='Close' class='"+r.call(this,"dialog.closeButton","ui-jqdialog-titlebar-close")+
"'></a>").hover(function(){p.addClass(A)},function(){p.removeClass(A)}).append("<span class='"+y.getIconRes.call(this,"form.close")+"'></span>");a(q).append(p);v=document.createElement("div");a(v).addClass(r.call(this,"dialog.content","ui-jqdialog-content")).attr("id",d.modalcontent);a(v).append(b);t.appendChild(v);a(t).prepend(q);!0===h?a("body").append(f):"string"===typeof h?a(h).append(f):a(f).insertBefore(k);a(f).css(e);void 0===c.jqModal&&(c.jqModal=!0);b={};if(a.fn.jqm&&!0===c.jqModal)0===c.left&&
0===c.top&&c.overlay&&(h=[],h=n.findPos(l),c.left=h[0]+4,c.top=h[1]+4),b.top=c.top+"px",b.left=c.left;else if(0!==c.left||0!==c.top)b.left=c.left,b.top=c.top+"px";a("a.ui-jqdialog-titlebar-close",q).click(function(){var b=a(m).data("onClose")||c.onClose,d=a(m).data("gbox")||c.gbox;n.hideModal(m,{gb:d,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1});return!1});0!==c.width&&c.width||(c.width=300);0!==c.height&&c.height||(c.height=200);c.zIndex||((k=a(k).parents("*[role=dialog]").first().css("z-index"))?
(c.zIndex=parseInt(k,10)+2,c.toTop=!0):c.zIndex=950);b.left&&(b.left+="px");a(f).css(a.extend({width:isNaN(c.width)?"auto":c.width+"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex},b)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":d.modalhead,"aria-hidden":"true"});void 0===c.drag&&(c.drag=!0);void 0===c.resize&&(c.resize=!0);if(c.drag)if(a.fn.jqDrag)a(q).css("cursor","move"),a(f).jqDrag(q);else try{a(f).draggable({handle:a("#"+g(q.id))})}catch(u){}if(c.resize)if(a.fn.jqResize)a(v).append("<div class='jqResize ui-resizable-handle ui-resizable-se "+
c.resizingRightBottomIcon+"'></div>"),a(m).jqResize(".jqResize",w);else try{a(f).resizable({handles:"se, sw",alsoResize:w})}catch(u){}!0===c.closeOnEscape&&a(f).keydown(function(b){27===b.which&&(b=a(m).data("onClose")||c.onClose,n.hideModal(m,{gb:c.gbox,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""}))})},viewModal:function(d,b){b=a.extend(!0,{overlay:30,modal:!1,overlayClass:r.call(this,"overlay"),onShow:n.showModal,onHide:n.closeModal,gbox:"",
jqm:!0,jqM:!0},n.jqModal||{},b||{});if(a.fn.jqm&&!0===b.jqm)b.jqM?a(d).attr("aria-hidden","false").jqm(b).jqmShow():a(d).attr("aria-hidden","false").jqmShow();else{""!==b.gbox&&(a(">.jqgrid-overlay",b.gbox).first().show(),a(d).data("gbox",b.gbox));a(d).show().attr("aria-hidden","false");try{a(":input:visible",d)[0].focus()}catch(c){}}},info_dialog:function(d,b,c,k){var l=this,h=l.p,e=a.extend(!0,{width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1E3,jqModal:!0,modal:!1,
closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]},n.jqModal||{},null!=h?h.jqModal||{}:{},{caption:"<b>"+d+"</b>"},k||{}),g=e.jqModal;a.fn.jqm&&!g&&(g=!1);d="";var f=r.call(l,"states.hover");if(0<e.buttons.length)for(k=0;k<e.buttons.length;k++)void 0===e.buttons[k].id&&(e.buttons[k].id="info_button_"+k),d+=n.builderFmButon.call(l,e.buttons[k].id,e.buttons[k].text);b="<div id='info_id'>"+("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+
(isNaN(e.dataheight)?e.dataheight:e.dataheight+"px")+";"+("text-align:"+e.align+";")+"'>"+b+"</div>");if(c||""!==d)b+="<hr class='"+r.call(l,"dialog.hr")+"' style='margin:1px'/><div style='text-align:"+e.buttonalign+";padding:.8em 0 .5em 0;background-image:none;border-width: 1px 0 0 0;'>"+(c?n.builderFmButon.call(l,"closedialog",c):"")+d+"</div>";b+="</div>";try{"false"===a("#info_dialog").attr("aria-hidden")&&n.hideModal("#info_dialog",{jqm:g}),a("#info_dialog").remove()}catch(m){}n.createModal.call(l,
{themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",resizeAlso:"infocnt"},b,e,"","",!0);d&&a.each(e.buttons,function(b){a("#"+n.jqID(l.id),"#info_id").bind("click",function(){e.buttons[b].onClick.call(a("#info_dialog"));return!1})});a("#closedialog","#info_id").click(function(){n.hideModal("#info_dialog",{jqm:g,onClose:a("#info_dialog").data("onClose")||e.onClose,gb:a("#info_dialog").data("gbox")||e.gbox});return!1});a(".fm-button","#info_dialog").hover(function(){a(this).addClass(f)},
function(){a(this).removeClass(f)});a.isFunction(e.beforeOpen)&&e.beforeOpen();n.viewModal.call(l,"#info_dialog",{onHide:function(a){a.w.hide().remove();a.o&&a.o.remove()},modal:e.modal,jqm:g});a.isFunction(e.afterOpen)&&e.afterOpen();try{a("#info_dialog").focus()}catch(m){}},bindEv:function(d,b){a.isFunction(b.dataInit)&&b.dataInit.call(this,d,b);b.dataEvents&&a.each(b.dataEvents,function(){void 0!==this.data?a(d).bind(this.type,this.data,this.fn):a(d).bind(this.type,this.fn)})},createEl:function(d,
b,c,k,l){function h(b,c,d){var e="dataInit dataEvents dataUrl buildSelect sopt searchhidden defaultValue attr custom_element custom_value selectFilled rowId mode cm iCol".split(" ");void 0!==d&&a.isArray(d)&&a.merge(e,d);a.each(c,function(c,d){-1===a.inArray(c,e)&&a(b).attr(c,d)});c.hasOwnProperty("id")||a(b).attr("id",n.randId())}var e="",g=this,f=g.p,m=n.info_dialog,v=z.call(a(g),"errors.errcap"),w=z.call(a(g),"edit"),q=w.msg,w=w.bClose;if(null==b)return"";switch(d){case "textarea":e=document.createElement("textarea");
k?b.cols||a(e).css({width:"100%","box-sizing":"border-box"}):b.cols||(b.cols=19);b.rows||(b.rows=2);if("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))c="";e.value=c;h(e,b);a(e).attr({role:"textbox"});break;case "checkbox":e=document.createElement("input");e.type="checkbox";if(b.value){var t=b.value.split(":");c===t[0]&&(e.checked=!0,e.defaultChecked=!0);e.value=t[0];a(e).data("offval",t[1])}else t=String(c).toLowerCase(),0>t.search(/(false|f|0|no|n|off|undefined)/i)&&""!==t?(e.checked=
!0,e.defaultChecked=!0,e.value=c):e.value="on",a(e).data("offval","off");h(e,b,["value"]);a(e).attr({role:"checkbox","aria-checked":e.checked?"true":"false"});break;case "select":e=document.createElement("select");m=[];d=null;!0===b.multiple?(k=!0,e.multiple="multiple",a(e).attr("aria-multiselectable","true"),m=c.split(","),m=a.map(m,function(b){return a.trim(b)})):(k=!1,m[0]=a.trim(c));void 0===b.size&&(b.size=k?3:1);try{d=b.rowId}catch(x){}f&&f.idPrefix&&(d=n.stripPref(f.idPrefix,d));if(void 0!==
b.dataUrl){var r=b.postData||l.postData,t={elem:e,options:b,cm:b.cm,mode:b.mode,rowid:d,iCol:b.iCol,ovm:m};a.ajax(a.extend({url:a.isFunction(b.dataUrl)?b.dataUrl.call(g,d,c,String(b.name),t):b.dataUrl,type:"GET",dataType:"html",data:a.isFunction(r)?r.call(g,d,c,String(b.name)):r,context:t,success:function(b,c,d){var e=this.ovm,f=this.elem,k=this.cm,l=this.iCol,m=a.extend({},this.options),p=this.rowid,q=this.mode;b=a.isFunction(m.buildSelect)?m.buildSelect.call(g,b,d,k,l):b;"string"===typeof b&&(b=
a(a.trim(b)).html());b&&(a(f).append(b),h(f,m,r?["postData"]:void 0),setTimeout(function(){var b;a("option",f).each(function(c){0===c&&f.multiple&&(this.selected=!1);-1<a.inArray(a.trim(a(this).val()),e)&&(b=this.selected=!0)});b||a("option",f).each(function(){-1<a.inArray(a.trim(a(this).text()),e)&&(this.selected=!0)});a(f).change();n.fullBoolFeedback.call(g,m.selectFilled,"jqGridSelectFilled",{elem:f,options:m,cm:k,rowid:p,mode:q,cmName:null!=k?k.name:m.name,iCol:l})},0))}},l||{}))}else if(b.value){"function"===
typeof b.value&&(b.value=b.value());var p,u;l=[];f=void 0===b.separator?":":b.separator;q=void 0===b.delimiter?";":b.delimiter;v=function(b,a){if(0<a)return b};if("string"===typeof b.value)for(q=b.value.split(q),p=0;p<q.length;p++)u=q[p].split(f),2<u.length&&(u[1]=a.map(u,v).join(f)),l.push({value:u[0],innerHtml:u[1],selectValue:a.trim(u[0]),selectText:a.trim(u[1]),selected:!1});else if("object"===typeof b.value)for(p in f=b.value,f)f.hasOwnProperty(p)&&l.push({value:p,innerHtml:f[p],selectValue:a.trim(p),
selectText:a.trim(f[p]),selected:!1});for(p=0;p<l.length;p++)f=l[p],k||f.selectValue!==a.trim(c)||(t=f.selected=!0),k&&-1<a.inArray(f.selectValue,m)&&(t=f.selected=!0);if(!t)for(p=0;p<l.length;p++)f=l[p],k||f.selectText!==a.trim(c)||(f.selected=!0),k&&-1<a.inArray(f.selectText,m)&&(f.selected=!0);for(p=0;p<l.length;p++)f=l[p],c=document.createElement("option"),c.value=f.value,c.innerHTML=f.innerHtml,f.selected&&(c.selected=!0),e.appendChild(c);h(e,b,["value"]);n.fullBoolFeedback.call(g,b.selectFilled,
"jqGridSelectFilled",{elem:e,options:b,cm:b.cm,rowid:d,mode:b.mode,cmName:null!=b.cm?b.cm.name:b.name,iCol:b.iCol})}break;case "text":case "password":case "button":t="button"===d?"button":"textbox";e=document.createElement("input");e.type=d;h(e,b);e.value=c;"button"!==d&&(k?b.size||a(e).css({width:"100%","box-sizing":"border-box"}):b.size||(b.size=20));a(e).attr("role",t);break;case "image":case "file":e=document.createElement("input");e.type=d;h(e,b);break;case "custom":e=document.createElement("span");
try{if(a.isFunction(b.custom_element))if(u=b.custom_element.call(g,c,b),u instanceof jQuery||n.isHTMLElement(u)||"string"===typeof u)u=a(u).addClass("customelement").attr({id:b.id,name:b.name}),a(e).empty().append(u);else throw"editoptions.custom_element returns value of a wrong type";else throw"editoptions.custom_element is not a function";}catch(x){"e1"===x&&m.call(g,v,"function 'custom_element' "+q.nodefined,w),"e2"===x?m.call(g,v,"function 'custom_element' "+q.novalue,w):m.call(g,v,"string"===
typeof x?x:x.message,w)}}return e},checkDate:function(a,b){var c={},d;a=a.toLowerCase();d=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/";a=a.split(d);b=b.split(d);if(3!==b.length)return!1;var l=-1,h,e=d=-1,g;for(g=0;g<a.length;g++)h=isNaN(b[g])?0:parseInt(b[g],10),c[a[g]]=h,h=a[g],-1!==h.indexOf("y")&&(l=g),-1!==h.indexOf("m")&&(e=g),-1!==h.indexOf("d")&&(d=g);h="y"===a[l]||"yyyy"===a[l]?4:"yy"===a[l]?2:-1;var f;g=[0,31,29,31,30,31,30,31,31,30,31,30,31];if(-1===l)return!1;
f=c[a[l]].toString();2===h&&1===f.length&&(h=1);if(f.length!==h||0===c[a[l]]&&"00"!==b[l]||-1===e)return!1;f=c[a[e]].toString();if(1>f.length||1>c[a[e]]||12<c[a[e]]||-1===d)return!1;f=c[a[d]].toString();!(h=1>f.length||1>c[a[d]]||31<c[a[d]])&&(h=2===c[a[e]])&&(l=c[a[l]],h=c[a[d]]>(0!==l%4||0===l%100&&0!==l%400?28:29));return h||c[a[d]]>g[c[a[e]]]?!1:!0},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(a){var b=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!n.isEmpty(a))if(a=a.match(b)){if(a[3]){if(1>
a[1]||12<a[1])return!1}else if(23<a[1])return!1;if(59<a[2])return!1}else return!1;return!0},checkValues:function(d,b,c,k,l){var h,e,g=this.p;e=g.colModel;var f=n.isEmpty,m=z.call(a(this),"edit.msg"),v=z.call(a(this),"formatter.date.masks");if(void 0===c){"string"===typeof b&&(b=g.iColByName[b]);if(void 0===b||0>b)return[!0,"",""];k=e[b];c=k.editrules;null!=k.formoptions&&(h=k.formoptions.label)}else h=void 0===k?"_":k,k=e[b];if(c){h||(h=null!=g.colNames?g.colNames[b]:k.label);if(!0===c.required&&
f(d))return[!1,h+": "+m.required,""];g=!1===c.required?!1:!0;if(!0===c.number&&(!1!==g||!f(d))&&isNaN(d))return[!1,h+": "+m.number,""];if(void 0!==c.minValue&&!isNaN(c.minValue)&&parseFloat(d)<parseFloat(c.minValue))return[!1,h+": "+m.minValue+" "+c.minValue,""];if(void 0!==c.maxValue&&!isNaN(c.maxValue)&&parseFloat(d)>parseFloat(c.maxValue))return[!1,h+": "+m.maxValue+" "+c.maxValue,""];var r;if(!(!0!==c.email||!1===g&&f(d)||(r=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
r.test(d))))return[!1,h+": "+m.email,""];if(!(!0!==c.integer||!1===g&&f(d)||!isNaN(d)&&0===d%1&&-1===d.indexOf(".")))return[!1,h+": "+m.integer,""];if(!(!0!==c.date||!1===g&&f(d)||(k.formatoptions&&k.formatoptions.newformat?(e=k.formatoptions.newformat,v.hasOwnProperty(e)&&(e=v[e])):e=e[b].datefmt||"Y-m-d",n.checkDate(e,d))))return[!1,h+": "+m.date+" - "+e,""];if(!0===c.time&&!(!1===g&&f(d)||n.checkTime(d)))return[!1,h+": "+m.date+" - hh:mm (am/pm)",""];if(!(!0!==c.url||!1===g&&f(d)||(r=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,
r.test(d))))return[!1,h+": "+m.url,""];if(!0===c.custom){if(!1!==g||!f(d))return a.isFunction(c.custom_func)?(d=c.custom_func.call(this,d,h,b),a.isArray(d)?d:[!1,m.customarray,""]):[!1,m.customfcheck,""]}else if(a.isFunction(c.custom)&&(!1!==g||!f(d)))return d=c.custom.call(this,l),a.isArray(d)?d:[!1,m.customarray,""]}return[!0,"",""]}})});
//# sourceMappingURL=grid.common.map
