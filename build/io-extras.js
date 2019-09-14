import"./io-core.js";import{IoElement,IoNode}from"./io.js";!function(t){var e={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:d,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:d,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:d,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function n(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||k.defaults,this.rules=e.normal,this.options.pedantic?this.rules=e.pedantic:this.options.gfm&&(this.options.tables?this.rules=e.tables:this.rules=e.gfm)}e._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,e._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,e.def=p(e.def).replace("label",e._label).replace("title",e._title).getRegex(),e.bullet=/(?:[*+-]|\d+\.)/,e.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,e.item=p(e.item,"gm").replace(/bull/g,e.bullet).getRegex(),e.list=p(e.list).replace(/bull/g,e.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+e.def.source+")").getRegex(),e._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",e._comment=/<!--(?!-?>)[\s\S]*?-->/,e.html=p(e.html,"i").replace("comment",e._comment).replace("tag",e._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),e.paragraph=p(e.paragraph).replace("hr",e.hr).replace("heading",e.heading).replace("lheading",e.lheading).replace("tag",e._tag).getRegex(),e.blockquote=p(e.blockquote).replace("paragraph",e.paragraph).getRegex(),e.normal=f({},e),e.gfm=f({},e.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),e.gfm.paragraph=p(e.paragraph).replace("(?!","(?!"+e.gfm.fences.source.replace("\\1","\\2")+"|"+e.list.source.replace("\\1","\\3")+"|").getRegex(),e.tables=f({},e.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),e.pedantic=f({},e.normal,{html:p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",e._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),n.rules=e,n.lex=function(t,e){return new n(e).lex(t)},n.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},n.prototype.token=function(t,n){var r,i,s,o,l,a,h,p,c,u,g,d,f,k,x,y;for(t=t.replace(/^ +$/gm,"");t;)if((s=this.rules.newline.exec(t))&&(t=t.substring(s[0].length),1<s[0].length&&this.tokens.push({type:"space"})),s=this.rules.code.exec(t))t=t.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:m(s,"\n")});else if(s=this.rules.fences.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(n&&(s=this.rules.nptable.exec(t))&&(a={type:"table",header:b(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(t=t.substring(s[0].length),g=0;g<a.align.length;g++)/^ *-+: *$/.test(a.align[g])?a.align[g]="right":/^ *:-+: *$/.test(a.align[g])?a.align[g]="center":/^ *:-+ *$/.test(a.align[g])?a.align[g]="left":a.align[g]=null;for(g=0;g<a.cells.length;g++)a.cells[g]=b(a.cells[g],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,n),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(t)){for(t=t.substring(s[0].length),h={type:"list_start",ordered:k=1<(o=s[2]).length,start:k?+o:"",loose:!1},this.tokens.push(h),r=!(p=[]),f=(s=s[0].match(this.rules.item)).length,g=0;g<f;g++)u=(a=s[g]).length,~(a=a.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(u-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&g!==f-1&&(o===(l=e.bullet.exec(s[g+1])[0])||1<o.length&&1<l.length||(t=s.slice(g+1).join("\n")+t,g=f-1)),i=r||/\n\n(?!\s*$)/.test(a),g!==f-1&&(r="\n"===a.charAt(a.length-1),i||(i=r)),i&&(h.loose=!0),y=void 0,(x=/^\[[ xX]\] /.test(a))&&(y=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),c={type:"list_item_start",task:x,checked:y,loose:i},p.push(c),this.tokens.push(c),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(f=p.length,g=0;g<f;g++)p[g].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(t))t=t.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(n&&(s=this.rules.def.exec(t)))t=t.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),d=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[d]||(this.tokens.links[d]={href:s[2],title:s[3]});else if(n&&(s=this.rules.table.exec(t))&&(a={type:"table",header:b(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]}).header.length===a.align.length){for(t=t.substring(s[0].length),g=0;g<a.align.length;g++)/^ *-+: *$/.test(a.align[g])?a.align[g]="right":/^ *:-+: *$/.test(a.align[g])?a.align[g]="center":/^ *:-+ *$/.test(a.align[g])?a.align[g]="left":a.align[g]=null;for(g=0;g<a.cells.length;g++)a.cells[g]=b(a.cells[g].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(n&&(s=this.rules.paragraph.exec(t)))t=t.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(t))t=t.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var r={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:d,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:d,text:/^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function i(t,e){if(this.options=e||k.defaults,this.links=t,this.rules=r.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.options.breaks?this.rules=r.breaks:this.rules=r.gfm)}function s(t){this.options=t||k.defaults}function o(){}function l(t){this.tokens=[],this.token=null,this.options=t||k.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function a(t,e){if(e){if(a.escapeTest.test(t))return t.replace(a.escapeReplace,function(t){return a.replacements[t]})}else if(a.escapeTestNoEncode.test(t))return t.replace(a.escapeReplaceNoEncode,function(t){return a.replacements[t]});return t}function h(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(t,e){return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""})}function p(t,e){return t=t.source||t,e=e||"",{replace:function(e,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),t=t.replace(e,n),this},getRegex:function(){return new RegExp(t,e)}}}function c(t,e){return u[" "+t]||(/^[^:]+:\/*[^/]*$/.test(t)?u[" "+t]=t+"/":u[" "+t]=m(t,"/",!0)),t=u[" "+t],"//"===e.slice(0,2)?t.replace(/:[\s\S]*/,":")+e:"/"===e.charAt(0)?t.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+e:t+e}r._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=p(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,r.tag=p(r.tag).replace("comment",e._comment).replace("attribute",r._attribute).getRegex(),r._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,r._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,r._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,r.link=p(r.link).replace("label",r._label).replace("href",r._href).replace("title",r._title).getRegex(),r.reflink=p(r.reflink).replace("label",r._label).getRegex(),r.normal=f({},r),r.pedantic=f({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",r._label).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",r._label).getRegex()}),r.gfm=f({},r.normal,{escape:p(r.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:p(r.text).replace("]|","~]|").replace("|$","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()}),r.gfm.url=p(r.gfm.url).replace("email",r.gfm._extended_email).getRegex(),r.breaks=f({},r.gfm,{br:p(r.br).replace("{2,}","*").getRegex(),text:p(r.gfm.text).replace("{2,}","*").getRegex()}),i.rules=r,i.output=function(t,e,n){return new i(e,n).output(t)},i.prototype.output=function(t){for(var e,n,r,s,o,l,h="";t;)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),h+=o[1];else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),r="@"===o[2]?"mailto:"+(n=a(this.mangle(o[1]))):n=a(o[1]),h+=this.renderer.link(r,null,n);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),h+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):a(o[0]):o[0];else if(o=this.rules.link.exec(t))t=t.substring(o[0].length),this.inLink=!0,r=o[2],this.options.pedantic?(e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=e[1],s=e[3]):s="":s=o[3]?o[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),h+=this.outputLink(o,{href:i.escapes(r),title:i.escapes(s)}),this.inLink=!1;else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),e=(o[2]||o[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){h+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,h+=this.outputLink(o,e),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),h+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),h+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),h+=this.renderer.codespan(a(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),h+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),h+=this.renderer.del(this.output(o[1]));else if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?h+=this.renderer.text(o[0]):h+=this.renderer.text(a(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])r="mailto:"+(n=a(o[0]));else{for(;l=o[0],o[0]=this.rules._backpedal.exec(o[0])[0],l!==o[0];);n=a(o[0]),r="www."===o[1]?"http://"+n:n}t=t.substring(o[0].length),h+=this.renderer.link(r,null,n)}return h},i.escapes=function(t){return t?t.replace(i.rules._escapes,"$1"):t},i.prototype.outputLink=function(t,e){var n=e.href,r=e.title?a(e.title):null;return"!"!==t[0].charAt(0)?this.renderer.link(n,r,this.output(t[1])):this.renderer.image(n,r,a(t[1]))},i.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):t},i.prototype.mangle=function(t){if(!this.options.mangle)return t;for(var e,n="",r=t.length,i=0;i<r;i++)e=t.charCodeAt(i),.5<Math.random()&&(e="x"+e.toString(16)),n+="&#"+e+";";return n},s.prototype.code=function(t,e,n){if(this.options.highlight){var r=this.options.highlight(t,e);null!=r&&r!==t&&(n=!0,t=r)}return e?'<pre><code class="'+this.options.langPrefix+a(e,!0)+'">'+(n?t:a(t,!0))+"</code></pre>\n":"<pre><code>"+(n?t:a(t,!0))+"</code></pre>"},s.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},s.prototype.html=function(t){return t},s.prototype.heading=function(t,e,n){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+t+"</h"+e+">\n":"<h"+e+">"+t+"</h"+e+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(t,e,n){var r=e?"ol":"ul";return"<"+r+(e&&1!==n?' start="'+n+'"':"")+">\n"+t+"</"+r+">\n"},s.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},s.prototype.checkbox=function(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},s.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},s.prototype.table=function(t,e){return e&&(e="<tbody>"+e+"</tbody>"),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"},s.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},s.prototype.tablecell=function(t,e){var n=e.header?"th":"td";return(e.align?"<"+n+' align="'+e.align+'">':"<"+n+">")+t+"</"+n+">\n"},s.prototype.strong=function(t){return"<strong>"+t+"</strong>"},s.prototype.em=function(t){return"<em>"+t+"</em>"},s.prototype.codespan=function(t){return"<code>"+t+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(t){return"<del>"+t+"</del>"},s.prototype.link=function(t,e,n){if(this.options.sanitize){try{var r=decodeURIComponent(h(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!g.test(t)&&(t=c(this.options.baseUrl,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(t){return n}var i='<a href="'+a(t)+'"';return e&&(i+=' title="'+e+'"'),i+">"+n+"</a>"},s.prototype.image=function(t,e,n){this.options.baseUrl&&!g.test(t)&&(t=c(this.options.baseUrl,t));var r='<img src="'+t+'" alt="'+n+'"';return e&&(r+=' title="'+e+'"'),r+(this.options.xhtml?"/>":">")},s.prototype.text=function(t){return t},o.prototype.strong=o.prototype.em=o.prototype.codespan=o.prototype.del=o.prototype.text=function(t){return t},o.prototype.link=o.prototype.image=function(t,e,n){return""+n},o.prototype.br=function(){return""},l.parse=function(t,e){return new l(e).parse(t)},l.prototype.parse=function(t){this.inline=new i(t.links,this.options),this.inlineText=new i(t.links,f({},this.options,{renderer:new o})),this.tokens=t.reverse();for(var e="";this.next();)e+=this.tok();return e},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.output(t)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,h(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,e,n,r,i="",s="";for(n="",t=0;t<this.token.header.length;t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(n),t=0;t<this.token.cells.length;t++){for(e=this.token.cells[t],n="",r=0;r<e.length;r++)n+=this.renderer.tablecell(this.inline.output(e[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o,l);case"list_item_start":s="";var a=this.token.loose;for(this.token.task&&(s+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)s+=a||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(s);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},a.escapeTest=/[&<>"']/,a.escapeReplace=/[&<>"']/g,a.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,a.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var u={},g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function d(){}function f(t){for(var e,n,r=1;r<arguments.length;r++)for(n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function b(t,e){var n=t.replace(/\|/g,function(t,e,n){for(var r=!1,i=e;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function m(t,e,n){if(0===t.length)return"";for(var r=0;r<t.length;){var i=t.charAt(t.length-r-1);if(i!==e||n){if(i===e||!n)break;r++}else r++}return t.substr(0,t.length-r)}function k(t,e,r){if(null==t)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(r||"function"==typeof e){r||(r=e,e=null);var i,s,o=(e=f({},k.defaults,e||{})).highlight,h=0;try{i=n.lex(t,e)}catch(t){return r(t)}s=i.length;var p=function(t){if(t)return e.highlight=o,r(t);var n;try{n=l.parse(i,e)}catch(n){t=n}return e.highlight=o,t?r(t):r(null,n)};if(!o||o.length<3)return p();if(delete e.highlight,!s)return p();for(;h<i.length;h++)!function(t){"code"!==t.type?--s||p():o(t.text,t.lang,function(e,n){return e?p(e):null==n||n===t.text?--s||p():(t.text=n,t.escaped=!0,void(--s||p()))})}(i[h])}else try{return e&&(e=f({},k.defaults,e)),l.parse(n.lex(t,e),e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",(e||k.defaults).silent)return"<p>An error occurred:</p><pre>"+a(t.message+"",!0)+"</pre>";throw t}}d.exec=d,k.options=k.setOptions=function(t){return f(k.defaults,t),k},k.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new s,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},k.defaults=k.getDefaults(),k.Parser=l,k.parser=l.parse,k.Renderer=s,k.TextRenderer=o,k.Lexer=n,k.lexer=n.lex,k.InlineLexer=i,k.inlineLexer=i.output,k.parse=k,"undefined"!=typeof module&&"object"==typeof exports?module.exports=k:"function"==typeof define&&define.amd?define(function(){return k}):t.marked=k}("undefined"!=typeof window?window:global);class IoMdView extends IoElement{static get Style(){return"\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t\talign-self: stretch;\n\t\t\tjustify-self: stretch;\n\t\t\tflex: 1 1 auto;\n\t\t\t--io-code-size: 15px;\n\t\t\tpadding: var(--io-spacing) calc(4 * var(--io-spacing));\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t}\n\t\t:host > :first-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t:host > :last-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t:host p {\n\t\t\tline-height: 1.4em;\n\t\t}\n\t\t:host a {\n\t\t\ttext-decoration: underline;\n\t\t\tcolor: var(--io-color-link);\n\t\t}\n\t\t:host h1, :host h2, :host h3, :host h4 {\n\t\t\tmargin: 0;\n\t\t\tborder: var(--io-border);\n\t\t\tborder-width: 0 0 var(--io-border-width) 0;\n\t\t}\n\t\t:host h1 {\n\t\t\tpadding: 0.5em 0;\n\t\t}\n\t\t:host h2 {\n\t\t\tpadding: 0.4em 0;\n\t\t}\n\t\t:host h3 {\n\t\t\tpadding: 0.3em 0;\n\t\t}\n\t\t:host h4 {\n\t\t\tpadding: 0.2em 0;\n\t\t}\n\t\t:host code {\n\t\t\tfont-family: monospace, monospace;\n\t\t\t-webkit-font-smoothing: auto;\n\t\t\toverflow: auto;\n\t\t\tcolor: var(--io-color-link);\n\t\t\tfont-weight: bold;\n\t\t\tbackground: var(--io-background-color-light);\n\t\t}\n\t\t:host pre > code {\n\t\t\tcolor: inherit;\n\t\t\tbackground-color: var(--io-background-color-light);\n\t\t\tline-height: 1.6em;\n\t\t}\n\t\t:host code.language-html,\n\t\t:host code.language-javascript {\n\t\t\tpadding: 1em;\n\t\t\tdisplay: block;\n\t\t\tfont-size: var(--io-code-size);\n\t\t}\n\t\t:host blockquote {\n\t\t\tfont-size: 0.85em;\n\t\t\topacity: 0.5;\n\t\t\tmargin: 0;\n\t\t\tpadding: var(--io-spacing) 0;\n\t\t}\n\t\t:host table\t{\n\t\t\twidth: 100% !important;\n\t\t\tborder: 1px solid black;\n\t\t\tborder-collapse: collapse;\n\t\t\ttable-layout: fixed;\n\t\t}\n\t\t:host table td,\n\t\t:host table tr,\n\t\t:host table th {\n\t\t\tborder: 1px solid gray;\n\t\t\tpadding: 0.25em;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t:host .videocontainer {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 0;\n\t\t\t\tposition: relative;\n\t\t\t\tpadding-bottom: 56.25%;\n\t\t}\n\t\t:host .videocontainer > iframe {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t}\n\t\t@keyframes spinner {\n\t\t\tto {transform: rotate(360deg);}\n\t\t}\n\t\t:host .io-loading {\n\t\t\tbackground-image: repeating-linear-gradient(135deg, var(--io-background-color-light), var(--io-background-color) 3px, var(--io-background-color) 7px, var(--io-background-color-light) 10px) !important;\n\t\t\tbackground-repeat: repeat;\n\t\t\tposition: relative;\n\t\t}\n\t\t:host .io-loading:after {\n\t\t\tcontent: '';\n\t\t\tbox-sizing: border-box;\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\twidth: 40px;\n\t\t\theight: 40px;\n\t\t\tmargin-top: -20px;\n\t\t\tmargin-left: -20px;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: var(--io-border);\n\t\t\tborder-top-color: #000;\n\t\t\tanimation: spinner .6s linear infinite;\n\t\t}\n\t\t"}static get Properties(){return{path:{type:String,reflect:1},role:"document"}}onResized(){let t=this.getBoundingClientRect().width;t=Math.min((t-30)/35,15),this.style.setProperty("--io-code-size",t+"px")}parseMarkdown(t){window.marked&&(window.marked&&window.marked.setOptions({sanitize:!1,highlight:function(t){return window.hljs?window.hljs.highlightAuto(t).value:null}}),this.innerHTML=window.marked(t),this.classList.toggle("io-loading",!1),this.dispatchEvent("content-ready",{},!0))}pathChanged(){this.classList.toggle("io-loading",!0),fetch(this.path).then(t=>t.text()).then(t=>{this.parseMarkdown(t)})}}IoMdView.Register(),"serviceWorker"in navigator||console.warn("No Service Worker support!"),"PushManager"in window||console.warn("No Push API Support!");class IoServiceLoader extends IoNode{static get Properties(){return{path:"service.js",serviceWorker:void 0,permission:window.Notification?window.Notification.permission:"default",subscription:""}}constructor(t){super(t),this.requestNotification=this.requestNotification.bind(this),"serviceWorker"in navigator&&this.init()}async init(){const t=await navigator.serviceWorker.register(this.path);t.update(),navigator.serviceWorker.addEventListener("message",this.onServiceWorkerMessage),t.active?this.serviceWorker=t:t.addEventListener("activate",()=>{this.serviceWorker=t})}serviceWorkerChanged(){"granted"===this.permission&&this.subscribe()}subscribe(){navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({command:"subscribe"})}async requestNotification(){this.permission=await window.Notification.requestPermission(),"granted"===this.permission&&this.subscribe()}onServiceWorkerMessage(t){const e=JSON.parse(t.data);e.subscription&&(this.subscription=JSON.stringify(e.subscription))}}IoServiceLoader.Register();export{IoMdView,IoServiceLoader};