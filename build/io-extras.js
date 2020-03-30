import{IoStorageFactory,IoThemeSingleton}from"./io-elements.js";import{IoElement,IoNode}from"./io.js";function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}let defaults=createCommonjsModule(function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}),defaults_1=defaults.defaults,defaults_2=defaults.getDefaults,defaults_3=defaults.changeDefaults;const escapeTest=/[&<>"']/,escapeReplace=/[&<>"']/g,escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g,escapeReplacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},getEscapeReplacement=e=>escapeReplacements[e];function escape(e,t){if(t){if(escapeTest.test(e))return e.replace(escapeReplace,getEscapeReplacement)}else if(escapeTestNoEncode.test(e))return e.replace(escapeReplaceNoEncode,getEscapeReplacement);return e}const unescapeTest=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function unescape(e){return e.replace(unescapeTest,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const caret=/(^|[^\[])\^/g;function edit(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(caret,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const nonWordAndColonTest=/[^\w:]/g,originIndependentUrl=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function cleanUrl(e,t,n){if(e){let e;try{e=decodeURIComponent(unescape(n)).replace(nonWordAndColonTest,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!originIndependentUrl.test(n)&&(n=resolveUrl(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const baseUrls={},justDomain=/^[^:]+:\/*[^/]*$/,protocol=/^([^:]+:)[\s\S]*$/,domain=/^([^:]+:\/*[^/]*)[\s\S]*$/;function resolveUrl(e,t){baseUrls[" "+e]||(justDomain.test(e)?baseUrls[" "+e]=e+"/":baseUrls[" "+e]=rtrim(e,"/",!0));const n=-1===(e=baseUrls[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(protocol,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(domain,"$1")+t:e+t}const noopTest={exec:function(){}};function merge(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function splitCells(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function rtrim(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}function findClosingBracket(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1}function checkSanitizeDeprecation(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}let helpers={escape:escape,unescape:unescape,edit:edit,cleanUrl:cleanUrl,resolveUrl:resolveUrl,noopTest:noopTest,merge:merge,splitCells:splitCells,rtrim:rtrim,findClosingBracket:findClosingBracket,checkSanitizeDeprecation:checkSanitizeDeprecation};const{noopTest:noopTest$1,edit:edit$1,merge:merge$1}=helpers,block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:noopTest$1,table:noopTest$1,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};block.def=edit$1(block.def).replace("label",block._label).replace("title",block._title).getRegex(),block.bullet=/(?:[*+-]|\d{1,9}\.)/,block.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,block.item=edit$1(block.item,"gm").replace(/bull/g,block.bullet).getRegex(),block.list=edit$1(block.list).replace(/bull/g,block.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+block.def.source+")").getRegex(),block._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",block._comment=/<!--(?!-?>)[\s\S]*?-->/,block.html=edit$1(block.html,"i").replace("comment",block._comment).replace("tag",block._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),block.paragraph=edit$1(block._paragraph).replace("hr",block.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",block._tag).getRegex(),block.blockquote=edit$1(block.blockquote).replace("paragraph",block.paragraph).getRegex(),block.normal=merge$1({},block),block.gfm=merge$1({},block.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),block.gfm.nptable=edit$1(block.gfm.nptable).replace("hr",block.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",block._tag).getRegex(),block.gfm.table=edit$1(block.gfm.table).replace("hr",block.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",block._tag).getRegex(),block.pedantic=merge$1({},block.normal,{html:edit$1("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",block._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:noopTest$1,paragraph:edit$1(block.normal._paragraph).replace("hr",block.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",block.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const inline={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:noopTest$1,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:noopTest$1,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};inline.em=edit$1(inline.em).replace(/punctuation/g,inline._punctuation).getRegex(),inline._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,inline._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,inline._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,inline.autolink=edit$1(inline.autolink).replace("scheme",inline._scheme).replace("email",inline._email).getRegex(),inline._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,inline.tag=edit$1(inline.tag).replace("comment",block._comment).replace("attribute",inline._attribute).getRegex(),inline._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,inline._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,inline._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,inline.link=edit$1(inline.link).replace("label",inline._label).replace("href",inline._href).replace("title",inline._title).getRegex(),inline.reflink=edit$1(inline.reflink).replace("label",inline._label).getRegex(),inline.normal=merge$1({},inline),inline.pedantic=merge$1({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:edit$1(/^!?\[(label)\]\((.*?)\)/).replace("label",inline._label).getRegex(),reflink:edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",inline._label).getRegex()}),inline.gfm=merge$1({},inline.normal,{escape:edit$1(inline.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),inline.gfm.url=edit$1(inline.gfm.url,"i").replace("email",inline.gfm._extended_email).getRegex(),inline.breaks=merge$1({},inline.gfm,{br:edit$1(inline.br).replace("{2,}","*").getRegex(),text:edit$1(inline.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});let rules={block:block,inline:inline};const{defaults:defaults$1}=defaults,{block:block$1}=rules,{rtrim:rtrim$1,splitCells:splitCells$1,escape:escape$1}=helpers;let Lexer_1=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||defaults$1,this.rules=block$1.normal,this.options.pedantic?this.rules=block$1.pedantic:this.options.gfm&&(this.rules=block$1.gfm)}static get rules(){return block$1}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,r,i,s,o,l,a,c,h,p,g,u,d,m,b,k;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(i[0].length),t&&"paragraph"===t.type?t.text+="\n"+i[0].trimRight():(i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?i:rtrim$1(i,"\n")}))}else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2]?i[2].trim():i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if((i=this.rules.nptable.exec(e))&&(l={type:"table",header:splitCells$1(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(i[0].length),g=0;g<l.align.length;g++)/^ *-+: *$/.test(l.align[g])?l.align[g]="right":/^ *:-+: *$/.test(l.align[g])?l.align[g]="center":/^ *:-+ *$/.test(l.align[g])?l.align[g]="left":l.align[g]=null;for(g=0;g<l.cells.length;g++)l.cells[g]=splitCells$1(l.cells[g],l.header.length);this.tokens.push(l)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),a={type:"list_start",ordered:m=(s=i[2]).length>1,start:m?+s:"",loose:!1},this.tokens.push(a),c=[],n=!1,d=(i=i[0].match(this.rules.item)).length,g=0;g<d;g++)p=(l=i[g]).length,~(l=l.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(p-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+p+"}","gm"),"")),g!==d-1&&(o=block$1.bullet.exec(i[g+1])[0],(s.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==s)&&(e=i.slice(g+1).join("\n")+e,g=d-1)),r=n||/\n\n(?!\s*$)/.test(l),g!==d-1&&(n="\n"===l.charAt(l.length-1),r||(r=n)),r&&(a.loose=!0),k=void 0,(b=/^\[[ xX]\] /.test(l))&&(k=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),h={type:"list_item_start",task:b,checked:k,loose:r},c.push(h),this.tokens.push(h),this.token(l,!1),this.tokens.push({type:"list_item_end"});if(a.loose)for(d=c.length,g=0;g<d;g++)c[g].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):escape$1(i[0]):i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),u=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[u]||(this.tokens.links[u]={href:i[2],title:i[3]});else if((i=this.rules.table.exec(e))&&(l={type:"table",header:splitCells$1(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(i[0].length),g=0;g<l.align.length;g++)/^ *-+: *$/.test(l.align[g])?l.align[g]="right":/^ *:-+: *$/.test(l.align[g])?l.align[g]="center":/^ *:-+ *$/.test(l.align[g])?l.align[g]="left":l.align[g]=null;for(g=0;g<l.cells.length;g++)l.cells[g]=splitCells$1(l.cells[g].replace(/^ *\| *| *\| *$/g,""),l.header.length);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2].charAt(0)?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}};const{defaults:defaults$2}=defaults,{cleanUrl:cleanUrl$1,escape:escape$2}=helpers;let Renderer_1=class{constructor(e){this.options=e||defaults$2}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+escape$2(r,!0)+'">'+(n?e:escape$2(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:escape$2(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=cleanUrl$1(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+escape$2(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"}image(e,t,n){if(null===(e=cleanUrl$1(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"}text(e){return e}},Slugger_1=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:defaults$3}=defaults,{inline:inline$1}=rules,{findClosingBracket:findClosingBracket$1,escape:escape$3}=helpers;let InlineLexer_1=class e{constructor(e,t){if(this.options=t||defaults$3,this.links=e,this.rules=inline$1.normal,this.options.renderer=this.options.renderer||new Renderer_1,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=inline$1.pedantic:this.options.gfm&&(this.options.breaks?this.rules=inline$1.breaks:this.rules=inline$1.gfm)}static get rules(){return inline$1}static output(t,n,r){return new e(n,r).output(t)}output(t){let n,r,i,s,o,l,a="";for(;t;)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),a+=escape$3(o[1]);else if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),a+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):escape$3(o[0]):o[0]);else if(o=this.rules.link.exec(t)){const r=findClosingBracket$1(o[2],"()");if(r>-1){const e=(0===o[0].indexOf("!")?5:4)+o[1].length+r;o[2]=o[2].substring(0,r),o[0]=o[0].substring(0,e).trim(),o[3]=""}t=t.substring(o[0].length),this.inLink=!0,i=o[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i))?(i=n[1],s=n[3]):s="":s=o[3]?o[3].slice(1,-1):"",i=i.trim().replace(/^<([\s\S]*)>$/,"$1"),a+=this.outputLink(o,{href:e.escapes(i),title:e.escapes(s)}),this.inLink=!1}else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),n=(o[2]||o[1]).replace(/\s+/g," "),!(n=this.links[n.toLowerCase()])||!n.href){a+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,a+=this.outputLink(o,n),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),a+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),a+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),a+=this.renderer.codespan(escape$3(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),a+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),a+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),i="@"===o[2]?"mailto:"+(r=escape$3(this.mangle(o[1]))):r=escape$3(o[1]),a+=this.renderer.link(i,null,r);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?a+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):escape$3(o[0]):o[0]):a+=this.renderer.text(escape$3(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])i="mailto:"+(r=escape$3(o[0]));else{do{l=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(l!==o[0]);r=escape$3(o[0]),i="www."===o[1]?"http://"+r:r}t=t.substring(o[0].length),a+=this.renderer.link(i,null,r)}return a}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,r=t.title?escape$3(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,escape$3(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,r="",i=0;for(;i<t;i++)n=e.charCodeAt(i),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}},TextRenderer_1=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}};const{defaults:defaults$4}=defaults,{merge:merge$2,unescape:unescape$1}=helpers;let Parser_1=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||defaults$4,this.options.renderer=this.options.renderer||new Renderer_1,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new Slugger_1}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new InlineLexer_1(e.links,this.options),this.inlineText=new InlineLexer_1(e.links,merge$2({},this.options,{renderer:new TextRenderer_1})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,unescape$1(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,r,i,s="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(s+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",i=0;i<n.length;i++)r+=this.renderer.tablecell(this.inline.output(n[i]),{header:!1,align:this.token.align[i]});e+=this.renderer.tablerow(r)}return this.renderer.table(s,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,r=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,r,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}};const{merge:merge$3,checkSanitizeDeprecation:checkSanitizeDeprecation$1,escape:escape$4}=helpers,{getDefaults:getDefaults,changeDefaults:changeDefaults,defaults:defaults$5}=defaults;function marked(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=merge$3({},marked.defaults,t||{}),checkSanitizeDeprecation$1(t);const r=t.highlight;let i,s,o=0;try{i=Lexer_1.lex(e,t)}catch(e){return n(e)}s=i.length;const l=function(e){if(e)return t.highlight=r,n(e);let s;try{s=Parser_1.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,s)};if(!r||r.length<3)return l();if(delete t.highlight,!s)return l();for(;o<i.length;o++)!function(e){"code"!==e.type?--s||l():r(e.text,e.lang,function(t,n){return t?l(t):null==n||n===e.text?--s||l():(e.text=n,e.escaped=!0,void(--s||l()))})}(i[o])}else try{return t=merge$3({},marked.defaults,t||{}),checkSanitizeDeprecation$1(t),Parser_1.parse(Lexer_1.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||marked.defaults).silent)return"<p>An error occurred:</p><pre>"+escape$4(e.message+"",!0)+"</pre>";throw e}}marked.options=marked.setOptions=function(e){return merge$3(marked.defaults,e),changeDefaults(marked.defaults),marked},marked.getDefaults=getDefaults,marked.defaults=defaults$5,marked.Parser=Parser_1,marked.parser=Parser_1.parse,marked.Renderer=Renderer_1,marked.TextRenderer=TextRenderer_1,marked.Lexer=Lexer_1,marked.lexer=Lexer_1.lex,marked.InlineLexer=InlineLexer_1,marked.inlineLexer=InlineLexer_1.output,marked.Slugger=Slugger_1,marked.parse=marked;let marked_1=marked;class IoMdView extends IoElement{static get Style(){return"\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t\talign-self: stretch;\n\t\t\tjustify-self: stretch;\n\t\t\tflex: 1 1 auto;\n\t\t\t--io-code-size: 15px;\n\t\t\tpadding: var(--io-spacing) calc(4 * var(--io-spacing));\n\t\t}\n\t\t:host > :first-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t:host > :last-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t\t:host p {\n\t\t\tline-height: 1.4em;\n\t\t}\n\t\t:host a {\n\t\t\ttext-decoration: underline;\n\t\t\tcolor: var(--io-color-link);\n\t\t}\n\t\t:host h1, :host h2, :host h3, :host h4 {\n\t\t\tmargin: 0;\n\t\t\tborder: var(--io-border);\n\t\t\tborder-width: 0 0 var(--io-border-width) 0;\n\t\t}\n\t\t:host h1 {\n\t\t\tpadding: 0.5em 0;\n\t\t}\n\t\t:host h2 {\n\t\t\tpadding: 0.4em 0;\n\t\t}\n\t\t:host h3 {\n\t\t\tpadding: 0.3em 0;\n\t\t}\n\t\t:host h4 {\n\t\t\tpadding: 0.2em 0;\n\t\t}\n\t\t:host code {\n\t\t\tfont-family: monospace, monospace;\n\t\t\t-webkit-font-smoothing: auto;\n\t\t\toverflow: auto;\n\t\t\tcolor: var(--io-color-link);\n\t\t\tfont-weight: bold;\n\t\t\tbackground: var(--io-background-color-light);\n\t\t}\n\t\t:host pre > code {\n\t\t\tcolor: inherit;\n\t\t\tbackground-color: var(--io-background-color-light);\n\t\t\tline-height: 1.6em;\n\t\t}\n\t\t:host code.language-html,\n\t\t:host code.language-javascript {\n\t\t\tpadding: 1em;\n\t\t\tdisplay: block;\n\t\t\tfont-size: var(--io-code-size);\n\t\t}\n\t\t:host blockquote {\n\t\t\tfont-size: 0.85em;\n\t\t\topacity: 0.5;\n\t\t\tmargin: 0;\n\t\t\tpadding: var(--io-spacing) 0;\n\t\t}\n\t\t:host table\t{\n\t\t\twidth: 100% !important;\n\t\t\tborder: 1px solid black;\n\t\t\tborder-collapse: collapse;\n\t\t\ttable-layout: fixed;\n\t\t}\n\t\t:host table td,\n\t\t:host table tr,\n\t\t:host table th {\n\t\t\tborder: 1px solid gray;\n\t\t\tpadding: 0.25em;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t:host .videocontainer {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 0;\n\t\t\t\tposition: relative;\n\t\t\t\tpadding-bottom: 56.25%;\n\t\t}\n\t\t:host .videocontainer > iframe {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t}\n\t\t@keyframes spinner {\n\t\t\tto {transform: rotate(360deg);}\n\t\t}\n\t\t:host .io-loading {\n\t\t\tbackground-image: repeating-linear-gradient(135deg, var(--io-background-color-light), var(--io-background-color) 3px, var(--io-background-color) 7px, var(--io-background-color-light) 10px) !important;\n\t\t\tbackground-repeat: repeat;\n\t\t\tposition: relative;\n\t\t}\n\t\t:host .io-loading:after {\n\t\t\tcontent: '';\n\t\t\tbox-sizing: border-box;\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\twidth: 40px;\n\t\t\theight: 40px;\n\t\t\tmargin-top: -20px;\n\t\t\tmargin-left: -20px;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: var(--io-border);\n\t\t\tborder-top-color: #000;\n\t\t\tanimation: spinner .6s linear infinite;\n\t\t}\n\t\t"}static get Properties(){return{path:{type:String,reflect:1},role:"document"}}onResized(){let e=this.getBoundingClientRect().width;e=Math.min((e-30)/35,15),this.style.setProperty("--io-code-size",e+"px")}parseMarkdown(e){marked_1&&(marked_1&&marked_1.setOptions({sanitize:!1,highlight:function(e){return window.hljs?window.hljs.highlightAuto(e).value:null}}),this.innerHTML=marked_1(e),this.classList.toggle("io-loading",!1),this.dispatchEvent("content-ready",{},!0))}pathChanged(){this.classList.toggle("io-loading",!0),fetch(this.path).then(e=>e.text()).then(e=>{this.parseMarkdown(e)})}}IoMdView.Register(),"serviceWorker"in navigator||console.warn("No Service Worker support!"),"PushManager"in window||console.warn("No Push API Support!");class IoServiceLoader extends IoNode{static get Properties(){return{path:"service.js",serviceWorker:void 0,permission:window.Notification?window.Notification.permission:"default",subscription:""}}constructor(e){super(e),this.requestNotification=this.requestNotification.bind(this),"serviceWorker"in navigator&&this.init()}async init(){const e=await navigator.serviceWorker.register(this.path);e.update(),navigator.serviceWorker.addEventListener("message",this.onServiceWorkerMessage),e.active?this.serviceWorker=e:e.addEventListener("activate",()=>{this.serviceWorker=e})}serviceWorkerChanged(){"granted"===this.permission&&this.subscribe()}subscribe(){navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({command:"subscribe"})}async requestNotification(){this.permission=await window.Notification.requestPermission(),"granted"===this.permission&&this.subscribe()}onServiceWorkerMessage(e){const t=JSON.parse(e.data);t.subscription&&(this.subscription=JSON.stringify(t.subscription))}}IoServiceLoader.Register();const suboptions=[],options=[{label:"Red",icon:"❤️",options:[{value:"Red1"},{value:"Red2"},{value:"Red3"}]},{label:"Green",icon:"💚",options:[{value:"Green1"},{value:"Green2"},{value:"Green3"}]},{label:"Blue",icon:"💙",options:[{value:"Blue1"},{value:"Blue2"},{value:"Blue3"}]},{label:"Numbers",options:[{label:"one",value:1},{label:"two",value:2},{label:"three",value:3},{label:"four",value:4},{label:"five",value:5}]},{label:"Suboptions",options:suboptions}];suboptions.push(...[{label:"Hearts",options:options},{label:"suboption one",options:options},{label:"suboption two",options:options},{label:"suboption three",options:options}]);const option={label:"Hearts",icon:"💕",hint:"colors",options:options},words=["lorem","ipsum","dolor","sit","amet","ac","libero","vitae","magna","tellus","nisl","wisi","lacinia","curae","mauris","fusce","interdum","vestibulum","nunc","velit"],hearts=["❤️","💚","💙","💜","🧡","💔","💖","🖤","💗","💘"],longOptions=[];for(let e=0;e<100;e++){const e=words[Math.floor(20*Math.random())],t=words[Math.floor(20*Math.random())],n=words[Math.floor(20*Math.random())],r=hearts[Math.floor(10*Math.random())]||"";longOptions.push({icon:r,label:e+" "+t,value:e+" "+t,hint:n})}IoStorageFactory({key:"demo:boolean",value:!0}),IoStorageFactory({key:"demo:string",value:"Hello io!"}),IoStorageFactory({key:"demo:leet",value:1337}),IoStorageFactory({key:"demo:number",value:0}),IoStorageFactory({key:"demo:theme",value:IoThemeSingleton.bind("theme")}),IoStorageFactory({key:"demo:menuoptions",value:options}),IoStorageFactory({key:"demo:longmenuoptions",value:longOptions}),IoStorageFactory({key:"demo:menuoption",value:option}),IoStorageFactory({key:"demo:rgba",value:{r:1,g:.5,b:0,a:1}}),IoStorageFactory({key:"demo:cmyk",value:{c:0,m:0,y:0,k:0}}),IoStorageFactory({key:"demo:object",value:{number:.5,string:"hello",boolean:!0,object:{prop1:1,prop2:2},array:[0,1,2,3,4,5,6,7,8,9,10,11,12],vector2:[1,1],vector3:[1,1,1],vector4:[1,1,1,1],matrix2:[1,1,1,1],matrix3:[1,1,1,1,1,1,1,1,1],matrix4:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}}),IoStorageFactory({key:"demo:vector2",value:[0,1]});class IoElementDemo extends IoElement{static get Style(){return"\n\t\t:host {\n\t\t\t@apply --io-panel;\n\t\t\tposition: relative;\n\t\t}\n\t\t:host > io-boolicon {\n\t\t\tz-index: 2;\n\t\t\tposition: absolute !important;\n\t\t\ttop: calc(calc(2 * var(--io-spacing)) + var(--io-border-width));\n\t\t\tright: calc(calc(2 * var(--io-spacing)) + var(--io-border-width));\n\t\t}\n\t\t:host > io-boolicon:not([value]):not(:hover) {\n\t\t\topacity: 0.5;\n\t\t}\n\t\t:host > io-properties {\n\t\t\talign-self: stretch;\n\t\t\tpadding: var(--io-spacing) 0;\n\t\t\tmargin: var(--io-border-width);\n\t\t\tmargin-right: var(--io-spacing);\n\t\t\tmargin-bottom: calc(2 * var(--io-spacing));\n\t\t}\n\t\t:host > io-properties > :nth-child(2) {\n\t\t\tmargin-right: calc(var(--io-item-height) + var(--io-spacing));\n\t\t}\n\t\t:host > .io-content {\n\t\t\tborder-radius: var(--io-border-radius);\n\t\t\tborder: var(--io-border);\n\t\t\tborder-color: var(--io-color-border-inset);\n\t\t\tpadding: var(--io-spacing);\n\t\t\tbox-shadow: var(--io-shadow-inset);\n\t\t\tcolor: var(--io-color);\n\t\t\tbackground-color: var(--io-background-color);\n\t\t\tbackground-image: none;\n\t\t}\n\t\t:host:not([expanded]) > .io-content {\n\t\t\tmargin-right: calc(var(--io-item-height) + calc(3 * var(--io-spacing)));\n\t\t}\n\t\t"}static get Properties(){return{element:{type:String,reflect:-1},properties:{type:Object,reflect:-1,observe:!0},width:{type:String,reflect:-1},height:{type:String,reflect:-1},config:{type:Object,reflect:-1},expanded:{type:Boolean,reflect:2}}}_onObjectMutation(e){super._onObjectMutation(e);for(let t=this.__observedProps.length;t--;){const n=this.__observedProps[t],r=this.__properties[n].value;if(!!this.filterObject(r,t=>t===e.detail.object)){const e=this.querySelectorAll("*");for(let t=0;t<e.length;t++)e[t].changed&&e[t].changed()}}}propertiesChanged(){for(let e in this.properties){const t=this.properties[e];"string"==typeof t&&t.startsWith("demo:")&&(this.properties[e]=IoStorageFactory({key:t}))}}changed(){const e=this.properties,t=[["io-boolicon",{value:this.bind("expanded"),true:"icons:tune",false:"icons:tune"}]];this.expanded&&t.push(["io-properties",{value:e,config:Object.assign({"type:number":["io-number",{step:1e-5}],"type:boolean":["io-switch"]},this.config)}]),t.push(["div",{class:"io-content"},[[this.element,Object.assign({id:"demo-element"},e)]]]),this.template(t),this.width&&(this.$["demo-element"].style.width=this.width),this.height&&(this.$["demo-element"].style.height=this.height),this.$["demo-element"].onResized&&this.$["demo-element"].onResized()}}IoElementDemo.Register();export{IoElementDemo,IoMdView,IoServiceLoader};