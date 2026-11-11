const pillars=['Tự chủ với Vietjet Group','Đa dạng lựa chọn','Tàu bay hiện đại, cabin mới','Ẩm thực nóng tươi','Dịch vụ từ trái tim','Mạng bay rộng khắp','Kết nối và giải trí','SkyJoy'];
const names={counter:'Quầy check-in',book:'Cuốn sổ trên hành trình',phone:'Kết nối và nhắn tin',board:'Điểm đến',ticket:'Lựa chọn đã đặt',gate:'Cửa ra tàu',crew:'Bàn giao mặt đất',door:'Cánh cửa mở',seats:'Khoang hành khách',plane:'Tàu bay Vietjet',seat:'Khoảng nghỉ',meal:'Món nóng trên máy bay',window:'Nhìn qua ô cửa',family:'Khoảnh khắc cùng nhau',route:'Mạng bay',landing:'Đường băng',rewards:'SkyJoy',reunion:'Gặp lại',end:'Thông điệp kết phim',case:'Chiếc vali',watch:'Nhịp chờ',headset:'Giải trí trên không',attendant:'Lắng nghe và hỗ trợ',exit:'Sảnh đến',map:'Hẹn nơi đến',menu:'Chọn món'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const who=v=>v==='M'?'Nhân viên mặt đất':'Tiếp viên';
const no=v=>String(v).padStart(2,'0');
const bounds=o=>[[1,o.lastGroundFrame],[o.lastGroundFrame+1,o.lastAirFrame],[o.lastAirFrame+1,20]];
const phase=(f,o)=>bounds(o).findIndex(([start,end])=>f.n>=start&&f.n<=end)+1;
const phaseLabels=['Mặt đất','Cabin và trên không','Điểm đến và kết'];
let subtitleLanguage='vi';
const nav=document.getElementById('options'), board=document.getElementById('board');
const treatmentRefs = ['pnoe9DTgV5w', 'u7okYb2G-GM'];
const campaignRef = 'kij3n1iikKc';
const hero = document.querySelector('.hero');
const jumps = document.querySelector('.jump');
let active = 0;

const pages=[
 [0,'Creative Direction','creative',creativeDirection],
 [6,'8 Trụ cột & Nhân vật','pillars',pillarsAndCharacters],
 [7,'Manifesto Film Overall','manifesto',manifestoOverall],
 ...options.map(o=>[o.id,'Option '+no(o.id),'op'+o.id]),
 [5,'The Treatment','the-treatment',theTreatment],
 [8,'Key Visual','key-visual',keyVisual]
];

function currentHash(){
 const hash=location.hash.slice(1);
 if(hash==='overall') return [7,'manifesto'];
 if(hash==='production') return [5,'the-treatment'];
 if(/^kv-[1-5]$/.test(hash)) return [8,hash];
 const option=hash.match(/^op([1-4])(?:-(overview|storyboard|frames|treatment|production-plan|quote))?$/);
 if(option) return [Number(option[1]),option[2]==='quote'?'production-plan':option[2]];
 return [pages.find(page=>page[2]===hash)?.[0]??0];
}
function videoRef(id,title){
 return `<div class="videoRef"><div class="videoStage"><button class="videoPlay" type="button" data-video="${id}" data-title="${esc(title)}"><span aria-hidden="true">▶</span> Phát video tham khảo</button></div><a class="videoLink" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer" aria-label="${esc('Mở trên YouTube · '+title)}">Mở trên YouTube ↗</a></div>`;
}
function manifestoOverall(){
 return `<section id="manifesto" class="section proposalPage">
 ${proposalHeader('Manifesto Film Overall','Bốn cách kể cùng đưa người xem từ mặt đất lên bầu trời. Nhân viên mặt đất và tiếp viên dẫn chuyện để trải nghiệm Vietjet Hybrid hiện lên qua lựa chọn và khoảnh khắc được chăm sóc của hành khách.','manifesto-title')}
 <div class="proposalTriple"><article class="panel"><h3>Thông điệp</h3><p>“Bay lại, thích ngay!” khơi lại niềm thích bay. “Trọn vẹn mọi hành trình khác biệt” đi vào những điều mỗi hành khách muốn tận hưởng.</p></article><article class="panel"><h3>Mạch kể</h3><p>Hành trình bắt đầu ở nhà ga, đi qua không gian cabin và nối tiếp sau khi hạ cánh. Hai giọng kể đồng hành cùng các tuyến nhân vật xuyên suốt.</p></article><article class="panel"><h3>Định dạng phim</h3><p>Master 60 giây, phiên bản 30 và 15 giây. Kịch bản hình ảnh, lời dẫn và phụ đề được phát triển bằng tiếng Việt và tiếng Anh.</p></article></div>
 <div class="campaignMood panel"><div><span class="kicker">Reference chung / Tone &amp; mood</span><h3>Tinh thần và nhịp phim</h3><p>Cinematic, ấm và giàu chuyển động. Hai giọng Vietjet hướng về “bạn”. Hình chứng minh bằng sản phẩm thật và khoảnh khắc cụ thể. Lời kể mở ra ý nghĩa của khoảnh khắc đó. Option 01 đi từ quen thuộc đến bất ngờ, 02 giữ độ lắng, 03 đan xen ba cách tận hưởng, 04 mở dần từ dự định đến trải nghiệm.</p><p>Hai giọng VO của nhân viên mặt đất và tiếp viên nối liền hành trình. Các trải nghiệm Hybrid hiện lên qua hành động, không gian và chi tiết phục vụ.</p></div>${videoRef(campaignRef,'Tone & mood chung của chiến dịch')}</div>
 <section class="section visualDirection" aria-labelledby="visual-direction"><div class="sectionHeader"><div><span class="kicker">Định hướng hình ảnh</span><h2 id="visual-direction">Visual Direction</h2><p>Giữ tinh thần Vietjet trẻ trung, hiện đại và vui tươi. Ánh sáng, chất liệu và bố cục được tinh chỉnh để hình ảnh thêm sang trọng, cao cấp và mới mẻ, vẫn gần gũi với hành khách.</p></div></div>
 <div class="stillGrid">${Array.from({length:10},(_,i)=>`<figure class="stillTile"><img src="media/visual-direction/${no(i+1)}.webp" alt="Tham chiếu hình ảnh ${no(i+1)}" loading="lazy" decoding="async"><figcaption>${no(i+1)}</figcaption></figure>`).join('')}</div></section>
 <div class="sectionHeader optionHeading"><div><span class="kicker">Bốn cách kể</span><h2>Khám phá từng option</h2></div></div>
 <div class="overviewOptions">${options.map(o=>`<a class="panel overviewOption" href="#op${o.id}-overview"><span class="kicker">Option ${no(o.id)}</span><h3>${esc(o.title)}</h3><p><strong>${esc(o.direction)}</strong></p><p>${esc(o.sub)}</p><span class="optionLink">Xem storyboard và VO →</span></a>`).join('')}</div>
 </section>`;
}
function chapter(o,i){
 const [start,end]=bounds(o)[i];
 return `<article class="chapter"><div><span class="kicker">Chặng ${no(i+1)}</span><h3>${esc(o.beats[i])}</h3><small>Frame ${no(start)}–${no(end)}</small></div></article>`;
}
function frameImagePath(optionId,n){
 return `media/frames/${optionId}/F${no(n)}.webp`;
}
function storyboardOverall(o){
 return `<section class="section" id="storyboard" aria-labelledby="storyboard-title"><div class="sectionHeader"><div><span class="kicker">Storyboard</span><h2 id="storyboard-title">Storyboard Overall</h2><p>Xem mạch hình ảnh của option từ F01 đến F20.</p></div></div>
 <div class="stillGrid">${o.frames.map(f=>`<figure class="stillTile"><img src="${frameImagePath(o.id,f.n)}" alt="F${no(f.n)} · ${esc(names[f.visual])}" loading="lazy" decoding="async"><figcaption>F${no(f.n)}</figcaption></figure>`).join('')}</div></section>`;
}
function frame(f,optionId){
 const heading=names[f.visual];
 const english=subtitleLanguage==='en';
 const screen=english?f.textEn:f.text;
 const subtitle=english?f.voEn:f.vo;
 const caption=subtitleLanguage!=='off' && subtitle && subtitle!==screen;
 return `<article class="frame" id="frame-${f.n}"><figure class="framePreview"><img class="frameImage" src="${frameImagePath(optionId,f.n)}" alt="Hình minh họa F${no(f.n)} · ${esc(heading)}" loading="lazy" decoding="async">${screen||caption?`<figcaption class="frameCopy" lang="${english?'en':'vi'}">${screen?`<span class="screenText">${esc(screen)}</span>`:''}${caption?`<span class="caption">${esc(subtitle)}</span>`:''}</figcaption>`:''}</figure><div class="frameBody"><header class="frameTitle"><div class="frameMeta"><span>F${no(f.n)}</span></div><h3>${esc(heading)}</h3></header><p class="picture">${esc(f.scene)}</p><p class="translation" lang="en">${esc(f.en)}</p>${f.text?`<div class="supers"><span class="label">TEXT hiển thị / On-screen text</span><p>${esc(f.text)}</p><p class="translation" lang="en">${esc(f.textEn)}</p></div>`:''}${f.vo?`<div class="vo"><span class="label">VO / Phụ đề · ${who(f.who)}</span><p>${esc(f.vo)}</p><p class="translation" lang="en">${esc(f.voEn)}</p></div>`:`<p class="noVo">Nhạc và âm thanh / Music &amp; sound</p>`}${f.pillars.length?`<div class="tags">${f.pillars.map(p=>`<span class="tag">${p} · ${esc(pillars[p-1])}</span>`).join('')}</div>`:''}</div></article>`;
}
function frameRange({start,end}){
 return start===end?`F${no(start)}`:`F${no(start)}–F${no(end)}`;
}
function clusterFrames(frames,{start,end}){
 return frames.filter(f=>f.n>=start&&f.n<=end);
}
function script(o){
 const read=(key,lang)=>`<div lang="${lang}"><h3>${lang==='vi'?'Tiếng Việt':'English adaptation'}</h3>${o.clusters.map((cluster,i)=>{
   const lines=clusterFrames(o.frames,cluster).filter(f=>f.vo);
   return `<div class="scriptLine"><span class="label">Cụm ${no(i+1)} · ${frameRange(cluster)}</span><div>${lines.map((f,j)=>{
     const speaker=lang==='vi'?who(f.who):f.who==='M'?'Ground agent':'Cabin crew';
     const label=f.who!==lines[j-1]?.who?`<span class="label scriptSpeaker">${speaker}</span>`:'';
     return `${label}<p>${esc(f[key])}</p>`;
   }).join('')}</div></div>`;
 }).join('')}</div>`;
 return `<details class="script" open><summary>Nguyên văn VO / Full script</summary><div class="scriptGrid">${read('vo','vi')}${read('voEn','en')}</div><p class="fn">Bản Anh chuyển ngữ theo nhịp phim. Câu khóa tiếng Anh là đề xuất để duyệt.</p></details>`;
}
function optionTreatment(o){
 return `<section class="section" id="treatment"><div class="sectionHeader"><div><span class="kicker">Đạo diễn / Option ${no(o.id)}</span><h2>Treatment theo option</h2><p>Hình, nhịp dựng và âm thanh theo từng cách thực hiện.</p></div><a class="action" href="#the-treatment">Xem The Treatment →</a></div><div class="treatments"><article class="panel"><span class="kicker">Phương án 01</span><h3>Dựng không gian sân bay Vietjet</h3><p>${esc(o.direct[0])}</p></article><article class="panel"><span class="kicker">Phương án 02</span><h3>Phông xanh và trời mây</h3><p>${esc(o.direct[1])}</p></article></div></section>`;
}
function redraw(o){
 const p=Number(document.getElementById('pillar').value),s=Number(document.getElementById('phase').value);
 const filtered=o.frames.filter(f=>(!p||f.pillars.includes(p))&&(!s||phase(f,o)===s));
 document.getElementById('count').textContent=`${filtered.length}/${o.frames.length} frame · Khung hiển thị 16:9`;
 document.getElementById('grid').innerHTML=filtered.length?o.clusters.map((cluster,i)=>{
   const cards=clusterFrames(filtered,cluster);
   return cards.length?`<section class="frameCluster"><div class="clusterHeader"><span class="kicker">Cụm ${no(i+1)} · ${frameRange(cluster)}</span><h3>${esc(cluster.title)}</h3></div><div class="grid">${cards.map(f=>frame(f,o.id)).join('')}</div></section>`:'';
 }).join(''):'<p class="empty">Chưa có frame cho bộ lọc này. Chọn chặng khác hoặc xem toàn bộ.</p>';
}
function render(id,where){
 active=id;
 const o=options[id-1];
 nav.innerHTML=pages.map(([key,label])=>`<button type="button" class="opt" data-option="${key}" aria-pressed="${key===id}">${esc(label)}</button>`).join('');
 hero.hidden=id!==0;
 jumps.hidden=!o;
 if(!o){
   board.innerHTML=pages.find(page=>page[0]===id)[3]();
   if(where) scrollToSection(where);
   return;
 }
 board.innerHTML=`<section class="intro" id="overview"><div><div class="kicker">Option ${no(id)} / Storyboard tổng thể</div><div class="briefDirection">${esc(o.direction)}</div><h2>${esc(o.title)}</h2><p class="lead">${esc(o.sub)}</p></div><div class="timing"><strong>Master 60s · Storyboard</strong><p>20 frame · VO và phụ đề Việt/Anh. Nhịp dựng sẽ được xác định sau khi đọc thử VO và dựng animatic.</p></div></section>
 <section class="panel optionStory"><span class="kicker">Dẫn nhập</span><p>${esc(o.intro)}</p></section>
 <aside class="panel optionRationale"><h3>Vì sao option này đặc biệt?</h3><div class="rationaleGrid"><div><h4>Điểm tiếp cận</h4><p>${esc(o.angle)}</p></div><div><h4>Vì sao phù hợp với phim tái định vị Vietjet Hybrid</h4><p>${esc(o.fit)}</p></div></div></aside>
 <div class="chapterGrid">${o.beats.map((_,i)=>chapter(o,i)).join('')}</div>
 <section class="panel campaignMood optionRef"><div><span class="kicker">Reference / Option ${no(id)}</span><h3>Nhịp điệu, tone &amp; mood</h3><p>Video tham khảo cho cách kể và nhịp dựng của option này.</p></div>${videoRef(o.reference, 'Option '+no(id)+' · Nhịp điệu, tone & mood')}</section>
 ${script(o)}
 ${storyboardOverall(o)}
 <section class="section" id="frames"><div class="sectionHeader"><div><span class="kicker">Shot breakdown</span><h2>Frame by Frame</h2><p id="count" aria-live="polite"></p></div><div class="controls"><label class="sr-only" for="phase">Lọc theo chặng</label><select id="phase"><option value="0">Mọi chặng</option>${bounds(o).map(([start,end],i)=>`<option value="${i+1}">${phaseLabels[i]} · F${no(start)}–${no(end)}</option>`).join('')}</select><label class="sr-only" for="pillar">Lọc theo trụ cột</label><select id="pillar"><option value="0">Tất cả trụ cột</option>${pillars.map((p,i)=>`<option value="${i+1}">${i+1}. ${esc(p)}</option>`).join('')}</select><label class="sr-only" for="subtitles">Phụ đề xem trước</label><select id="subtitles"><option value="vi">Phụ đề Việt</option><option value="en">English subtitles</option><option value="off">Ẩn phụ đề</option></select></div></div><div id="grid"></div></section>
 ${optionTreatment(o)}
 ${productionPlan(o)}`;
 document.getElementById('subtitles').value=subtitleLanguage;
 document.getElementById('subtitles').addEventListener('change',e=>{
   subtitleLanguage=e.target.value;
   redraw(o);
 });
 for(const k of ['pillar','phase'])document.getElementById(k).addEventListener('change',()=>redraw(o));
 document.getElementById('print').addEventListener('click',async()=>{
   document.getElementById('pillar').value='0';document.getElementById('phase').value='0';redraw(o);
   document.querySelectorAll('#board details').forEach(d=>d.open=true);
   const images=[...document.querySelectorAll('#storyboard img,#grid .frameImage')];
   await Promise.allSettled(images.map(img=>{
     img.loading='eager';
     return img.decode();
   }));
   if(active===o.id) window.print();
 });
 redraw(o);
 if(where) scrollToSection(where);
}
function scrollToSection(where){
 requestAnimationFrame(()=>document.getElementById(where)?.scrollIntoView());
}
function navigate(id,section){
 const option=id>=1&&id<=4;
 const hash=option?'op'+id+'-'+(section||'overview'):pages.find(page=>page[0]===id)[2];
 history.pushState(null,'','#'+hash);
 if(id!==active) render(id,option?(section||'overview'):section);
 else if(option) scrollToSection(section||'overview');
 if(!option&&!section) window.scrollTo({top:0});
}
nav.addEventListener('click',e=>{
 const b=e.target.closest('[data-option]');
 if(!b) return;
 navigate(Number(b.dataset.option));
 nav.querySelector('[aria-pressed=true]').focus({preventScroll:true});
});
jumps.addEventListener('click',e=>{
 const a=e.target.closest('a');
 if(!a||!active) return;
 e.preventDefault();
 navigate(active,a.getAttribute('href').slice(1));
});
board.addEventListener('click',e=>{
 const productionLink=e.target.closest('a[href="#the-treatment"]');
 if(productionLink&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey){
   e.preventDefault();
   navigate(5);
   nav.querySelector('[aria-pressed=true]').focus({preventScroll:true});
   return;
 }
 const optionLink=e.target.closest('.overviewOption');
 if(optionLink&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey){
   e.preventDefault();
   navigate(Number(optionLink.hash[3]),'overview');
   return;
 }
 const play=e.target.closest('[data-video]');
 if(!play) return;
 const player=document.createElement('iframe');
 player.src='https://www.youtube-nocookie.com/embed/'+play.dataset.video+'?autoplay=1';
 player.title=play.dataset.title;
 player.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
 player.allowFullscreen=true;
 player.referrerPolicy='strict-origin-when-cross-origin';
 play.replaceWith(player);
 player.focus();
});
window.addEventListener('popstate',()=>{
 const [id,section]=currentHash();
 render(id,id>0&&id<5?(section||'overview'):section);
 if(!section&&(id===0||id>=5)) window.scrollTo({top:0});
});
const initial=currentHash();
render(...initial);
