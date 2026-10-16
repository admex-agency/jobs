/* Native SVG glyphs prevent iOS emoji substitution, including dynamic labels. */
(()=>{'use strict';
const ns='http://www.w3.org/2000/svg';
const paths={
 '↗':'M5 19 19 5M5 5h14v14','↘':'M5 5 19 19M5 19h14V5',
 '↙':'M19 5 5 19M5 5v14h14','↖':'M19 19 5 5M5 19V5h14',
 '→':'M4 12h16M13 5l7 7-7 7','←':'M20 12H4M11 5l-7 7 7 7',
 '↓':'M12 4v16M5 13l7 7 7-7','↑':'M12 20V4M5 11l7-7 7 7',
 '↔':'M3 12h18M8 7l-5 5 5 5M16 7l5 5-5 5',
 '✳':'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6',
 '✦':'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6',
 '✷':'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6'};
function glyph(char){const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.setAttribute('class','fb-glyph'+(/[✳✦✷]/u.test(char)?' fb-glyph-spark':''));const path=document.createElementNS(ns,'path');path.setAttribute('d',paths[char]);svg.appendChild(path);return svg;}
function replaceText(node){if(node.nodeType!==3||!/[↗↘↙↖←→↑↓↔✳✦✷]/u.test(node.nodeValue)||node.parentElement?.closest('script,style,svg,textarea,input,code,pre,[contenteditable=true]'))return;const frag=document.createDocumentFragment();node.nodeValue.split(/([↗↘↙↖←→↑↓↔✳✦✷][\uFE0E\uFE0F]?)/u).forEach(part=>{if(!part)return;frag.appendChild(paths[part[0]]?glyph(part[0]):document.createTextNode(part));});node.replaceWith(frag);}
function upgrade(node){if(node.nodeType===3){replaceText(node);return;}if(node.nodeType!==1||node.closest('svg,script,style'))return;const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const texts=[];while(walker.nextNode())texts.push(walker.currentNode);texts.forEach(replaceText);}
upgrade(document.body);new MutationObserver(records=>{for(const record of records){if(record.type==='characterData')replaceText(record.target);else record.addedNodes.forEach(upgrade);}}).observe(document.body,{childList:true,subtree:true,characterData:true});
const rail=document.querySelector('#combo-grid');if(!rail)return;
const controls=document.createElement('div');controls.className='combo-browse';controls.setAttribute('aria-label','Duyệt combo');
const hint=document.createElement('span');hint.textContent='Vuốt để chọn bàn tiệc';controls.appendChild(hint);
function arrow(label,char){const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',label);b.setAttribute('aria-controls','combo-grid');b.appendChild(glyph(char));controls.appendChild(b);return b;}
const prev=arrow('Xem combo trước','←'),next=arrow('Xem combo tiếp theo','→');rail.before(controls);rail.tabIndex=0;rail.setAttribute('role','region');rail.setAttribute('aria-label','Các combo FIREBEAT, vuốt ngang hoặc dùng nút trước và tiếp theo');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function state(){const max=Math.max(0,rail.scrollWidth-rail.clientWidth);controls.hidden=max<2;prev.disabled=rail.scrollLeft<=2;next.disabled=rail.scrollLeft>=max-2;}
function move(direction){const card=[...rail.children].find(c=>!c.hidden);const step=card?card.getBoundingClientRect().width+18:rail.clientWidth*.88;rail.scrollBy({left:direction*step,behavior:reduced.matches?'auto':'smooth'});}
prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));rail.addEventListener('scroll',state,{passive:true});rail.addEventListener('keydown',e=>{if(e.target!==rail)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{rail.scrollTo({left:0,behavior:'auto'});requestAnimationFrame(state);}));
new MutationObserver(()=>requestAnimationFrame(state)).observe(rail,{attributes:true,attributeFilter:['hidden'],subtree:true,childList:true});
if('ResizeObserver'in window)new ResizeObserver(state).observe(rail);window.addEventListener('resize',state,{passive:true});state();
})();
