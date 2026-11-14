
function proposalHeader(title, description, id) {
 return `<header class="sectionHeader proposalHeading"><div><h2 id="${id}">${title}</h2><p>${description}</p></div></header>`;
}

function proposalTable(columns, rows, label) {
 return `<div class="proposalTable" role="region" aria-label="${esc(label)}" tabindex="0"><table><thead><tr>${columns.map(column=>`<th scope="col">${esc(column)}</th>`).join('')}</tr></thead><tbody>${rows.map(([first,...cells])=>`<tr><th scope="row">${esc(first)}</th>${cells.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

const keyMessageAlternatives = [
 {
  line:'Bay trọn ý mình, hành trình để Vietjet',
  meaning:'Hành khách tự do chọn trải nghiệm theo nhu cầu riêng. Vietjet chủ động chăm chút hành trình để đáp ứng lựa chọn đó.',
  wording:'Vần “mình – trình” tạo nhịp dễ nhớ. Hai vế làm rõ vai trò của hành khách và Vietjet.',
  mapping:'Các lựa chọn của Hybrid giúp hành khách bay theo ý mình. “Bay lại, thích ngay!” mời họ trải nghiệm sự linh hoạt ấy.'
 },
 {
  line:'Chiều từng khác biệt, trọn mọi hành trình',
  meaning:'Vietjet trân trọng nhu cầu và sở thích của từng hành khách, từ đó chăm chút trải nghiệm trên mỗi hành trình.',
  wording:'Cặp từ “từng – mọi” nối sự quan tâm đến từng cá nhân với cam kết phục vụ nhiều nhóm hành khách.',
  mapping:'Hybrid giúp Vietjet đáp ứng nhiều nhu cầu. “Bay lại, thích ngay!” gọi tên niềm vui khi hành khách tìm thấy trải nghiệm phù hợp.'
 },
 {
  line:'Bạn chọn ý mình, Vietjet trọn hành trình',
  meaning:'Hành khách chủ động chọn điều mình muốn. Vietjet đồng hành để trải nghiệm được trọn vẹn.',
  wording:'Cấu trúc “Bạn – Vietjet” và vần “mình – trình” làm rõ vai trò của mỗi bên trong việc tạo nên trải nghiệm.',
  mapping:'Hybrid mở ra lựa chọn phù hợp với nhu cầu và ngân sách. “Bay lại, thích ngay!” mời hành khách tự mình trải nghiệm sự linh hoạt đó.'
 }
];

function creativeImage(file, alt, width = 1920, height = 1080) {
 return `<img class="creativeImage" src="media/creative-direction/${file}.webp" alt="${esc(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async">`;
}

function creativeDirection() {
 return `<section class="section proposalPage" id="creative">
 ${proposalHeader('Creative Direction','Vietjet Hybrid mở rộng ý nghĩa của “Cơ hội bay cho mọi người”. Mỗi hành khách có thêm cách tận hưởng chuyến bay theo nhu cầu riêng và được chăm sóc bằng cả trái tim.','creative-title')}
 <div class="strategyGrid">
 <article class="panel strategy"><img class="strategyArt" src="media/overall/positioning.webp" alt="Hành khách và tiếp viên trong cabin" width="1200" height="675"><span class="kicker">Định vị</span><h3>Vietjet Hybrid · Hành trình bay khác biệt cho mọi người</h3><p>Mỗi lần bay, một cách kết hợp dịch vụ hợp với điều hành khách cần lúc ấy.</p><a href="#positioning">Xem diễn giải định vị →</a></article>
 <article class="panel strategy"><img class="strategyArt" src="media/overall/master-concept.webp" alt="Hành khách mỉm cười trong khoang bay" width="1200" height="675"><span class="kicker">Master Concept</span><h3>Bay lại, thích ngay!</h3><p>Khơi lại niềm yêu thích bay và mời hành khách khám phá Vietjet Hybrid.</p></article>
 <article class="panel strategy"><img class="strategyArt" src="media/overall/key-message.webp" alt="Máy bay giấy bên ô cửa" width="1200" height="675"><span class="kicker">Key Message</span><h3>Trọn vẹn mọi hành trình khác biệt</h3><p>Những điều quan trọng với mỗi người được chăm chút xuyên suốt hành trình.</p><a href="#key-message">Xem diễn giải thông điệp →</a></article>
 </div>
 <section class="proposalBlock"><span class="kicker">Strategic Foundation</span><h3>Từ cơ hội được bay đến cơ hội tìm thấy chuyến bay đúng ý</h3><p>Vietjet đã đưa việc bay đến gần hơn với nhiều người, giúp họ đi xa hơn, gặp nhau thường xuyên hơn và khám phá thêm điểm đến. Khi việc bay trở nên quen thuộc, hành khách cân nhắc thêm sự thuận tiện, thoải mái và mức độ phù hợp với nhu cầu của chuyến đi.</p>
 <div class="proposalPair foundationPair"><article class="panel">${creativeImage('foundation-01','Máy bay Vietjet trên biển mây dưới ánh trăng',960,540)}<h4>“Tôi có thể bay”</h4><p>Cơ hội tiếp cận chuyến bay giúp nhiều người lên đường và mở ra những điểm đến mới.</p></article><article class="panel proposalAccent">${creativeImage('foundation-02','Máy bay Vietjet bay giữa những tầng mây trong ánh nắng',960,540)}<h4>“Tôi tìm thấy chuyến bay đúng ý mình”</h4><p>Cơ hội tiếp cận nhiều trải nghiệm hơn giúp mỗi người chọn cách lên đường phù hợp và tìm thấy điều đáng tận hưởng ngay trên hành trình.</p></article></div>
 <p>Vietjet Hybrid mở rộng lý do để hành khách cân nhắc thương hiệu. Bên cạnh khả năng tiếp cận, hành khách có thể lựa chọn dựa trên nhiều ưu tiên khác nhau trong tổng thể trải nghiệm Hybrid.</p></section>
 <section class="proposalBlock"><span class="kicker">Consumer Understanding</span><h3>Một người có nhiều cách bay</h3><p>Chuyến công tác có thể cần khoảng riêng. Chuyến nghỉ cuối tuần cần gọn nhẹ. Khi đi cùng cha mẹ, sự thoải mái và chăm sóc trở nên quan trọng hơn. Trên hành trình dài, kết nối giúp hành khách chủ động hơn.</p>
 ${proposalTable(['Cấp độ khác biệt','Biểu hiện','Hàm ý cho Hybrid'],[
 ['Giữa các hành khách','Mỗi người có ưu tiên, sở thích và điều kiện riêng.','Mở nhiều lựa chọn trải nghiệm.'],
 ['Giữa các lần bay','Nhu cầu thay đổi theo mục đích và người đi cùng.','Linh hoạt theo từng chuyến đi.'],
 ['Trong cùng hành trình','Có lúc cần tập trung, lúc muốn nghỉ, lúc muốn kết nối.','Tăng khả năng chủ động tận hưởng.']
 ],'Ba cấp độ khác biệt')}</section>
 <section class="proposalBlock insightPanel"><span class="kicker">The Insight</span><blockquote>“Mỗi lần lên đường, tôi lại mong một điều khác nhau. Tôi muốn tìm được cách bay phù hợp với mình, và cảm thấy những điều quan trọng với mình cũng được hãng quan tâm. Khi hành trình có những điều đúng ý, tôi có thêm lý do để mong chờ và yêu thích việc bay.”</blockquote><p>Insight này bổ sung lớp cảm xúc cho “Bay nhiều hơn, nhưng tận hưởng ít hơn”. Khi chuyến bay hợp với mình hơn, hành khách có thể chủ động tận hưởng và tìm lại niềm yêu thích bay.</p>${creativeImage('insight','Bầu trời chạng vạng nhìn qua ô cửa máy bay')}</section>
 <section class="proposalBlock" id="positioning"><span class="kicker">Positioning</span><h3>Vietjet Hybrid · Hành trình bay khác biệt cho mọi người</h3>
 <div class="proposalTriple"><article class="panel"><h4>Hành trình bay</h4><p>Cảm nhận bắt đầu từ khi chọn chuyến, tiếp nối qua đón tiếp, cabin, ẩm thực, kết nối, chăm sóc và giá trị sau chuyến bay. Mỗi điểm chạm góp phần tạo nên cảm giác “chuyến đi này hợp với mình”.</p></article><article class="panel"><h4>Khác biệt</h4><p>Mỗi hành khách có một tổ hợp nhu cầu riêng. Cùng nền tảng Hybrid, người cần khoảng nghỉ, người cần chủ động làm việc, gia đình muốn gần nhau và khách quốc tế muốn khám phá đều có thể tìm được trải nghiệm phù hợp.</p></article><article class="panel"><h4>Cho mọi người</h4><p>Các hạng vé có quyền lợi riêng. Sự trân trọng hành khách xuyên suốt các lựa chọn. Wi-Fi vệ tinh miễn phí là điểm nhấn kết nối theo định hướng của chiến dịch và phạm vi triển khai Vietjet xác nhận.</p></article></div>
 <p class="brandCallout">Vietjet Hybrid làm mới cách hành khách tận hưởng mỗi lần bay cùng Vietjet bằng việc tối ưu những lựa chọn vốn làm nên một hành trình. Mỗi người có một mong muốn, mỗi chuyến đi có một ưu tiên. Từ hạng vé, chỗ ngồi đến ẩm thực, kết nối và chăm sóc, sự linh hoạt ấy mở ra hàng triệu cách kết hợp để mỗi hành khách có một chuyến bay trọn vẹn theo cách riêng.</p>
 </section>
 <section class="proposalBlock"><span class="kicker">Vietjet Hybrid</span><h3>Cùng một nền tảng, nhiều cách tạo nên chuyến bay đúng ý</h3><p>Tám trụ cột kết hợp năng lực vận hành, trải nghiệm và lựa chọn sản phẩm. Sự tận tâm giúp những giá trị ấy có ý nghĩa với từng người.</p>
 <div class="tags strategyTags">${pillars.map((p,i)=>`<span class="tag">${i+1} · ${esc(p)}</span>`).join('')}</div>
 ${proposalTable(['Nhu cầu hành trình','Những giá trị phối hợp','Trải nghiệm được cảm nhận'],[
 ['Đi gọn nhẹ, chủ động','Lựa chọn phù hợp, mạng bay, cabin, kết nối.','Có những gì cần thiết và tận hưởng được thời gian trên không.'],
 ['Công tác thuận tiện','Hạng vé và quyền lợi phù hợp, cabin, dịch vụ, kết nối.','Chủ động với công việc và khoảng nghỉ.'],
 ['Đi cùng cha mẹ','Lựa chọn trải nghiệm, cabin, món ăn, chăm sóc.','An tâm khi người thân được quan tâm và cùng tận hưởng chuyến đi.'],
 ['Bay dài, cần giữ liên lạc','Mạng bay, cabin, ẩm thực, Wi-Fi, dịch vụ.','Có thêm cách sử dụng thời gian trên tàu bay theo nhu cầu.'],
 ['Khám phá nơi mới','Mạng bay, lựa chọn, ẩm thực, kết nối, SkyJoy.','Niềm vui khám phá bắt đầu trên chuyến bay và tiếp tục sau đó.']
 ],'Các cách kết hợp trải nghiệm Hybrid')}</section>
 <section class="proposalBlock"><span class="kicker">Master Concept</span><h3>Bay lại, thích ngay!</h3><p class="conceptEnglish" lang="en">Enjoying flying, again!</p>
 ${creativeImage('master-concept','Hành khách áo đỏ mỉm cười trong cabin')}
 <div class="proposalPair"><article class="panel"><h4>Bay lại</h4><p>Lời mời trở lại với Vietjet dành cho những người đã rời xa hoặc chưa thấy hết giá trị Hybrid. Với người đã quen xem bay là di chuyển, đó là lời mời tìm lại điều đáng mong chờ trong chính chuyến bay.</p></article><article class="panel"><h4>Thích ngay</h4><p>Cảm xúc có thể xuất hiện ngay khi tìm thấy điều đúng ý. Đó có thể là một lựa chọn hợp dự định, một lời hướng dẫn tận tình hay khả năng giữ kết nối với người quan trọng.</p></article></div>
 <ol class="journeySteps">${[
 ['Tìm chuyến và tìm vé','Thấy lựa chọn phù hợp với dự định.'],
 ['Chuẩn bị','Hình dung điều đáng mong chờ.'],
 ['Bước vào cabin','Cảm nhận không gian hiện đại, tươi mới.'],
 ['Trên không','Thưởng thức, nghỉ ngơi, kết nối hoặc sẻ chia.'],
 ['Sau chuyến bay','Ghi nhớ trải nghiệm và cân nhắc lần bay tiếp theo.']
 ].map(([t,d])=>`<li><strong>${t}</strong><p>${d}</p></li>`).join('')}</ol>
 <div class="proposalPair"><article class="panel"><h4>“Bay lại, thích ngay!”</h4><p>Mời khám phá và tái khám phá trải nghiệm Hybrid.</p></article><article class="panel"><h4>“Bay, lại thích ngay!”</h4><p>Mỗi lần bay lại có thể mang đến một lý do yêu thích mới. Từ điều từng thích, hành khách tiếp tục lựa chọn và tìm thấy thêm điều đáng mong chờ.</p></article></div>
 </section>
 <section class="proposalBlock" id="key-message"><span class="kicker">Key Message chính</span><h3>Trọn vẹn mọi hành trình khác biệt</h3>
 ${creativeImage('key-message','Hai hành khách nghỉ ngơi cạnh nhau bên ô cửa máy bay')}
 <div class="proposalPair messageMeaning"><article class="panel"><h4>Trọn vẹn</h4><p>Là khi những điều bạn mong ở chuyến đi được chăm chút từ lúc lên đường đến khi hạ cánh. Một gia đình có thêm thời gian bên nhau. Một người đi xa có thể nhắn về nhà ngay giữa chuyến bay. Một người đi công tác có khoảng riêng để chuẩn bị, rồi thảnh thơi trước giờ gặp quan trọng.</p></article><article class="panel"><h4>Mọi hành trình khác biệt</h4><p>Mỗi người lên máy bay với một mong đợi riêng. Ngay cả với cùng một người, chuyến đi cùng ba mẹ, chuyến vui cùng bạn bè và chuyến công tác cũng cần những lựa chọn khác nhau. Vietjet Hybrid mở ra nhiều cách kết hợp hạng vé, không gian, ẩm thực, kết nối và dịch vụ để bạn chọn điều phù hợp với mình lúc ấy.</p></article></div>
 <p class="brandCallout">“Trọn vẹn mọi hành trình khác biệt” đưa định vị “Hành trình bay khác biệt cho mọi người” vào từng chuyến bay cùng Vietjet Hybrid. Bạn chọn cách bay phù hợp với điều mình mong đợi, Vietjet chăm chút để lựa chọn ấy trở thành một trải nghiệm đáng nhớ. Dù lên đường vì công việc, để khám phá hay để trở về bên gia đình, bạn đều có thể tìm thấy niềm vui ngay trên chuyến bay.</p>
 <section class="messageAlternatives" aria-labelledby="message-alternatives-title">
 <h4 id="message-alternatives-title">Ba phương án cân nhắc</h4>
 <div class="proposalTriple">${keyMessageAlternatives.map(({line,meaning,wording,mapping},i)=>`<article class="panel messageOption"><span class="kicker">Option ${no(i+1)}</span><h5>${esc(line)}</h5>
 <dl><dt>Ý nghĩa</dt><dd>${esc(meaning)}</dd><dt>Cách diễn đạt</dt><dd>${esc(wording)}</dd><dt>Liên hệ với Hybrid và Master Concept</dt><dd>${esc(mapping)}</dd></dl>
 </article>`).join('')}</div></section></section>
 <section class="proposalBlock"><span class="kicker">Creative Strategy</span><h3>Từ trải nghiệm đúng ý đến niềm yêu thích bay</h3>
 ${creativeImage('creative-strategy','Tiếp viên phục vụ đồ uống cho hành khách trong cabin')}
 <ol class="journeySteps strategySteps"><li>Nhu cầu riêng của hành khách</li><li>Tám trụ cột phối hợp</li><li>Trải nghiệm đúng ý, được chăm sóc tận tâm</li><li>Niềm yêu thích bay được khơi lại và bồi đắp</li></ol>
 ${proposalTable(['Luận cứ','Giá trị phối hợp','Ý nghĩa với hành khách'],[
 ['Kế thừa thương hiệu','Tiếp tục tinh thần “Cho mọi người”.','Nhận ra một Vietjet quen thuộc đang phát triển.'],
 ['Tạo khác biệt','Tám trụ cột đáp ứng nhiều nhu cầu.','Trải nghiệm khác biệt có cơ sở thực tế.'],
 ['Bằng chứng đổi mới','Wi-Fi vệ tinh miễn phí theo định hướng của chiến dịch.','Cảm nhận được bước nâng tầm qua kết nối trên không.'],
 ['Từ công năng đến cảm xúc','Điều đúng ý giúp chủ động tận hưởng.','Có lý do để “thích ngay”.'],
 ['Lý do để quay lại','Trải nghiệm mở thêm điều đáng mong chờ.','Lời mời “Bay lại” gắn với giá trị cụ thể.'],
 ['Giá trị con người','Dịch vụ từ trái tim nối lựa chọn với nhu cầu.','Cảm giác trọn vẹn đến từ sự quan tâm.'],
 ['Duy trì dài hạn','Nhu cầu và hệ thống trải nghiệm tiếp tục phát triển.','Mỗi lần bay có thể có một lý do yêu thích mới.']
 ],'Luận cứ sáng tạo')}</section>
 </section>`;
}

const pillarDetails = [
 ['Nền tảng vận hành, đào tạo và phục vụ vững chắc giúp hành khách an tâm và tin tưởng vào hành trình.',
  'Một phi công quốc tế, hai phi công Việt Nam. Bổ sung đại diện kỹ thuật, mặt đất hoặc đào tạo và tái sử dụng nhân sự ở trụ cột 5.',
  'Ba phi công tự tin tiến bước, đội vận hành chuẩn bị ở lớp sau. Có thể bổ sung cảnh phi công trao đổi thông tin và đội kỹ thuật, mặt đất phối hợp kiểm tra.',
  'Toàn cảnh đội ngũ, trung cảnh trao đổi nghiệp vụ, chân dung và cận cảnh thao tác. Tác phong vững vàng, sẵn sàng và phối hợp tự nhiên.'],
 ['Các hạng Eco, Deluxe, SkyBoss và Business giúp hành khách chọn trải nghiệm phù hợp với ưu tiên của chuyến đi.',
  'Gia đình ba người (Eco), cặp đôi lớn tuổi (Deluxe), nhóm bốn đến sáu bạn trẻ (SkyBoss), nữ doanh nhân (Business).',
  'Gia đình nhìn theo con chỉ ra cửa sổ. Cặp đôi cùng xem thông tin hành trình. Nhóm bạn trao đổi kế hoạch hoặc đón nhận dịch vụ. Nữ doanh nhân khép laptop và thả lỏng.',
  'Một ảnh hero cho mỗi nhóm, góc rộng thấy ghế, trung cảnh tương tác và chân dung tách lớp. Dùng đúng ghế và quyền lợi của mỗi hạng, phân biệt rõ SkyBoss và Business.'],
 ['Cabin hiện đại, tươi mới và thoải mái giúp hành khách bắt đầu tận hưởng ngay khi lên tàu.',
  'Bốn nhóm hành khách của trụ cột 2, cùng tiếp viên ở cửa tàu hoặc trong cabin.',
  'Các nhóm bước lên tàu và được đón chào. Hành khách ổn định chỗ ngồi rồi hướng mắt ra cửa sổ. Nữ doanh nhân hoặc cặp đôi lớn tuổi thể hiện sự thoải mái qua tư thế tự nhiên.',
  'Toàn cảnh hành khách lên tàu, trung cảnh đón chào, góc rộng và góc nghiêng thấy ghế. Nếu dùng phông xanh, chuẩn bị ghế, bậc và điểm tựa phù hợp, khớp ánh sáng và hướng nhìn với tư liệu thật.'],
 ['Một món nóng hợp ý trở thành điều đáng mong chờ ngay trên chuyến bay.',
  'Bốn nhóm hành khách, tiếp viên và hai khách quốc tế.',
  'Gia đình thưởng thức và nhìn phản ứng của con. Cặp đôi lớn tuổi trao nhau ánh nhìn hài lòng. Nhóm bạn chia sẻ cảm nhận, nữ doanh nhân dành thời gian ăn và khách quốc tế khám phá món Việt.',
  'Thể hiện lúc tiếp viên trao món, hành khách đón món và phản ứng khi nếm. Bổ sung cận cảnh món ăn. Dùng thực đơn, khẩu phần, dụng cụ và cách phục vụ đúng sản phẩm.'],
 ['Sự quan tâm của cả đội ngũ kết nối nhu cầu của từng người với trải nghiệm thực tế.',
  'Phi công, tiếp viên, nhân viên mặt đất, kỹ thuật, kho vận, hàng hóa và văn phòng theo phạm vi Vietjet thống nhất. Lãnh đạo tham gia khi có yêu cầu.',
  'Nhân viên mặt đất hướng dẫn gia đình hoặc cặp đôi lớn tuổi. Tiếp viên lắng nghe và hỗ trợ bằng hành động cụ thể. Đội hậu trường phối hợp, toàn đội hướng về phía trước với phong thái tự tin.',
  'Ảnh tập thể, nhóm theo bộ phận, chân dung và cận cử chỉ hỗ trợ. Ưu tiên câu chuyện thật hoặc thư khen Vietjet cung cấp.'],
 ['Mạng bay mở thêm cơ hội gặp gỡ, khám phá và thực hiện những dự định riêng.',
  'Nhóm bạn trẻ, nữ doanh nhân và cặp khách quốc tế. Gia đình hoặc cặp đôi lớn tuổi có thể tham gia phiên bản mở rộng.',
  'Nhóm bạn nhìn ra cửa sổ và bàn về nơi sắp đến. Nữ doanh nhân hướng mắt về chân trời. Khách quốc tế quan sát và trò chuyện. Có thêm phiên bản từng người di chuyển cùng hành lý.',
  'Góc nghiêng cạnh ô cửa, tương tác nhóm và toàn thân di chuyển. Điểm đến có thể ghép ở hậu cảnh hoặc qua ô cửa, dùng địa danh thuộc mạng bay Vietjet xác nhận.'],
 ['Wi-Fi vệ tinh miễn phí là điểm nhấn giúp hành khách chủ động sử dụng thời gian trên tàu và giữ những kết nối có ý nghĩa.',
  'Gia đình, cặp đôi lớn tuổi, nhóm bạn trẻ và nữ doanh nhân.',
  'Gia đình chia sẻ điều con vừa thấy. Cặp đôi cùng xem thông tin hành trình. Nhóm bạn trao đổi kế hoạch. Nữ doanh nhân khép laptop để chuyển sang nghỉ ngơi. Khi cần thấy thiết bị, chọn tình huống nhắn tin, giải trí hoặc làm việc theo khả năng dịch vụ được xác nhận.',
  'Trung cảnh trong cabin, góc qua vai, biểu cảm và cận tay với thiết bị. Chuẩn bị màn hình sạch cho hậu kỳ. Claim “Wi-Fi vệ tinh miễn phí” đi cùng copy hoặc graphic theo phạm vi Vietjet xác nhận.'],
 ['Giá trị sau chuyến bay giúp hành khách có thêm lý do mong chờ hành trình tiếp theo.',
  'Dùng lại bốn nhóm hành khách từ trụ cột 2.',
  'Gia đình xem quyền lợi và bàn chuyến đi kế tiếp. Cặp đôi lớn tuổi trao đổi lựa chọn trên điện thoại. Nhóm bạn chia sẻ ưu đãi và hẹn gặp. Nữ doanh nhân kiểm tra điểm hoặc quyền lợi thành viên.',
  'Cận thiết bị, góc qua vai, tương tác chia sẻ màn hình và biểu cảm. Dùng giao diện, cơ chế tích điểm, đổi quyền lợi hoặc ưu đãi đúng tài liệu SkyJoy do Vietjet cung cấp.']
];

function pillarsAndCharacters() {
 return `<section class="section proposalPage" id="pillars">
 ${proposalHeader('8 trụ cột của Vietjet Hybrid','Mỗi trụ cột góp một giá trị vào trải nghiệm, từ nền tảng vận hành đến những điều hành khách mong chờ sau chuyến bay.','pillars-title')}
 <div class="pillarCards">${pillarDetails.map(([value,cast,action,visual],i)=>`<article class="panel pillarCard">
 <img src="media/proposal/pillar-${i+1}.webp" alt="Hình minh họa ${esc(pillars[i])}" width="1280" height="720" loading="lazy" decoding="async">
 <div><span class="kicker">Trụ cột ${no(i+1)}</span><h3>${esc(pillars[i])}</h3><p>${esc(value)}</p>
 <dl><div><dt>Tuyến nhân vật</dt><dd>${esc(cast)}</dd></div><div><dt>Hành động và cảm xúc</dt><dd>${esc(action)}</dd></div><div><dt>Thể hiện hình ảnh</dt><dd>${esc(visual)}</dd></div></dl></div></article>`).join('')}</div>
 <section class="proposalBlock"><h3>Hệ thống nhân vật xuyên suốt</h3><p>Dùng chung các tuyến nhân vật cho KV trụ cột, Main KV và Manifesto Film. Tạo hình chỉn chu ở mọi hạng vé và thể hiện đúng quyền lợi, ghế, dịch vụ của từng sản phẩm.</p>
 ${proposalTable(['Tuyến nhân vật','Thành phần','Đặc điểm thể hiện'],[
 ['Gia đình trẻ','Bố, mẹ và một con nhỏ','Gần gũi, hiện đại, tận hưởng thời gian bên nhau.'],
 ['Cặp đôi lớn tuổi','Một nam, một nữ','Thanh lịch, chủ động, hào hứng khám phá.'],
 ['Nhóm bạn trẻ','Bốn nhân vật chính, có thể mở rộng đến sáu','Có gu, tự tin, năng động, tương tác tự nhiên.'],
 ['Nữ doanh nhân','Một nhân vật','Hiện đại, độc lập, cân bằng công việc và tận hưởng.'],
 ['Khách quốc tế','Một nam, một nữ','Cởi mở, giàu cảm hứng khám phá, có thể tương tác với các tuyến khác.'],
 ['Đội ngũ Vietjet','Phi công, tiếp viên, mặt đất, kỹ thuật, hàng hóa và các bộ phận liên quan','Chuyên nghiệp, tự tin, tận tâm. Ưu tiên nhân sự thật của hãng.']
 ],'Hệ thống nhân vật')}</section>
 </section>`;
}

const keyVisualOptions = [
 {
  title:'Bốn không gian trải nghiệm liên thông',
  demo:{file:'option-01-main.webp',width:2048,height:1152,alt:'Hành khách bước qua cửa tàu bay, giữa bốn khoảnh khắc trải nghiệm trong cabin Vietjet.'},
  intent:'Bốn trải nghiệm cùng tạo thành một hành trình đúng ý. Trong cùng một hãng bay, mỗi hành khách có thể tìm thấy không gian, món ăn, sự chăm sóc và kết nối phù hợp.',
  layout:['Bốn không gian gồm cabin hiện đại, ẩm thực nóng tươi, phục vụ tận tâm và kết nối điểm đến. Mỗi không gian có một tương tác chính của hành khách.',
   'Tàu bay Vietjet hội tụ ở trung tâm. Đường nét cabin, ô cửa hoặc dải chuyển động nối các không gian. Hành khách sử dụng thiết bị, với tín hiệu Wi-Fi tiết chế.',
   'Headline nằm ở khoảng trống trung tâm, kết nối bố cục và giữ khả năng đọc.'],
  treatment:'Phối cảnh đa chiều, kết hợp góc cao và góc thấp. Dùng góc rộng có kiểm soát để giữ dáng người và sản phẩm tự nhiên. Ánh sáng rõ, màu sắc có chọn lọc và giàu tính thời trang.',
  priority:[3,4,5,6]
 },
 {
  title:'Thế giới trải nghiệm mở rộng trên mây',
  demo:{file:'option-02-main-20261114.webp',width:2000,height:1125,alt:'Tàu bay Vietjet giữa biển mây, xung quanh là các cảnh phục vụ trong cabin và xe kéo hành lý.'},
  subVisualSize:{width:1200,height:675},
  subVisuals:[
   ['sub-01','Kết nối và giải trí'],
   ['sub-02','Dịch vụ từ trái tim'],
   ['sub-03','Tự chủ với Vietjet Group'],
   ['sub-04','Ẩm thực nóng tươi'],
   ['sub-05','Đa dạng lựa chọn'],
   ['sub-06','SkyJoy']
  ],
  intent:'Hình tượng hóa một thế giới mở rộng cùng Vietjet Hybrid. Hành khách có thêm cách lựa chọn, tận hưởng và giữ liên lạc khi kết nối những chân trời.',
  layout:['Tàu bay ở trung tâm hướng về bầu trời rộng mở. Tiếp viên đẩy xe phục vụ món nóng, hành khách thư giãn và sử dụng điện thoại hoặc tablet.',
   'Xe kéo hành lý di chuyển trên dải mây gợi đường băng, thể hiện lớp vận hành mặt đất.',
   'Công trình Việt Nam và biểu tượng châu Âu xuất hiện nhỏ ở hậu cảnh, gợi kết nối hai lục địa.'],
  treatment:'Không gian mở và phối cảnh phóng đại có chủ đích. Nhân vật, tàu bay, ghế và món ăn chân thực trong bố cục giàu tưởng tượng. Bầu trời sáng, mây có khối, điểm đỏ và vàng dẫn chuyển động.',
  priority:[1,2,4,6,7]
 },
 {
  title:'Khoảnh khắc đáng tận hưởng',
  intent:'Đưa người xem đến gần cảm giác được quan tâm qua một khoảnh khắc thư giãn, thưởng thức món nóng và tương tác tự nhiên với tiếp viên.',
  layout:['Một hành khách và một tiếp viên làm trọng tâm. Mở một phần cabin giữa biển mây, giữ đúng ghế, bàn và vật dụng Vietjet.',
   'Thiết bị cá nhân gợi khả năng kết nối trên không. Tàu bay và điểm đến nằm ở hậu cảnh để đặt khoảnh khắc vào hành trình.',
   'Bộ KV trụ cột có thể đổi nhân vật, hành động và sản phẩm trong cùng cấu trúc lấy con người làm trung tâm.'],
  treatment:'Góc ngang hoặc hơi thấp, khung có chiều sâu và khoảng thở. Golden hour trong trẻo, da người tự nhiên, mây mềm và sắc ấm. Tập trung ánh mắt, cử chỉ và chất liệu.',
  priority:[3,4,5,6]
 },
 {
  title:'Dấu phẩy giữa trời mây',
  intent:'Dấu phẩy trong “Bay lại, thích ngay!” đánh dấu nhịp chuyển sang trải nghiệm Vietjet Hybrid. “Bay lại, thích ngay!” mời những người từng bay quay trở lại. “Bay, lại thích ngay!” là lời hẹn để mỗi hành khách có thêm lý do chọn Vietjet cho chuyến sau.',
  demo:{file:'option-04-main.webp',width:3840,height:2160,alt:'Hành khách và phi hành đoàn bước trên sàn hình dấu phẩy nổi giữa biển mây, với tàu bay Vietjet phía trên.'},
  details:'Option 04 - Diễn giải ý tưởng.pdf',
  subVisuals:[
   ['service','Dịch vụ từ trái tim'],
   ['cuisine','Ẩm thực nóng tươi'],
   ['network','Mạng bay rộng khắp'],
   ['wifi-work','Kết nối và giải trí · Văn phòng trên mây'],
   ['wifi-home','Kết nối và giải trí · Gọi về nhà'],
   ['wifi-cloud','Kết nối và giải trí · Sóng mây']
  ],
  layout:['Trong Main KV, dấu phẩy trở thành sàn diễn giữa biển mây. Gia đình, cặp đôi lớn tuổi và nhóm khách trẻ bước cùng phi hành đoàn, với tàu bay Vietjet lướt song hành.',
   'Sáu Sub KV dùng chung sàn dấu phẩy để kể từng trải nghiệm, từ dịch vụ, món nóng và mạng bay đến ba cách thể hiện kết nối trên không.'],
  treatment:'Sàn màu kem viền đỏ Vietjet nổi trên biển mây hoàng hôn. Đầu tròn, nét lõm và đuôi vuốt nhọn giữ hình dáng dấu phẩy dễ nhận ra xuyên suốt bộ KV.',
  priority:[5,4,6,7]
 },
 {
  title:'Đôi cánh nâng tầm trải nghiệm',
  intent:'Vietjet Hybrid nâng đỡ những mong đợi khác nhau bằng cùng một nền tảng vận hành và sự tận tâm, thể hiện “Trọn vẹn mọi hành trình khác biệt”.',
  layout:['Tàu bay trực diện, hơi chếch từ dưới lên. Tám cụm trải nghiệm đặt dọc theo hai cánh, với cabin, món nóng, tiếp viên và Wi-Fi nổi bật.',
   'Vận hành, lựa chọn, mạng bay và SkyJoy bổ sung lớp nền. Các đường ánh sáng nối các cụm với thân tàu bay.',
   'Headline nằm phía trên thân tàu bay, giữ vùng nhận diện trung tâm rõ ràng.'],
  treatment:'Bố cục ngang cân bằng hai bên, kích thước cụm linh hoạt. Các lớp không gian trên đôi cánh kết hợp cảm giác hiện đại của tàu bay và sự ấm áp của con người. Đỏ và vàng nổi trên nền trời trong.',
  priority:[3,4,5,6],
  allPillars:true
 }
];

function keyVisualDemo(option, number) {
 if (!option.demo) {
  return `<figure class="kvDemo"><figcaption><strong>Key Visual Demo</strong><span>1920 × 1080 · 16:9</span></figcaption></figure>`;
 }
 const {file,width,height,alt}=option.demo;
 return `<figure class="kvDemo kvDemoImage"><img src="media/key-visual/${file}" alt="${esc(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async"><figcaption>Key Visual Demo · Option ${no(number)}</figcaption></figure>`;
}

function keyVisualGallery(option, number) {
 const titleId=`kv-${number}-sub-title`;
 const {width,height}=option.subVisualSize??{width:3840,height:2160};
 return `<section class="kvSubVisuals" aria-labelledby="${titleId}"><h4 id="${titleId}">Sub KV</h4><div class="kvSubGrid">${option.subVisuals.map(([file,label])=>{
  const src=`media/key-visual/option-${no(number)}-${file}.webp`;
  return `<figure><a href="${src}" target="_blank" rel="noopener" aria-label="${esc('Mở ảnh Sub KV · '+label)}"><img src="${src}" alt="" width="${width}" height="${height}" loading="lazy" decoding="async"></a><figcaption>${esc(label)}</figcaption></figure>`;
 }).join('')}</div></section>`;
}

function keyVisual() {
 return `<section class="section proposalPage" id="key-visual">
 ${proposalHeader('Key Visual','Năm hướng bố cục chuyển hóa Master Concept “Bay lại, thích ngay!” và Key Message “Trọn vẹn mọi hành trình khác biệt” thành những trải nghiệm nhìn thấy được.','kv-title')}
 <nav class="kvJump" aria-label="Phương án Key Visual">${keyVisualOptions.map((o,i)=>`<a href="#kv-${i+1}">Option ${no(i+1)}</a>`).join('')}</nav>
 ${keyVisualOptions.map((o,i)=>`<article class="proposalBlock kvOption" id="kv-${i+1}">
 <span class="kicker">KV Option ${no(i+1)}</span><h3>${esc(o.title)}</h3><span class="kicker">Creative Intent</span><p class="kvIntent">${esc(o.intent)}</p>
 ${o.details?`<a class="kvDetails" href="media/key-visual/${encodeURIComponent(o.details)}" target="_blank" rel="noopener">Diễn giải chi tiết <span aria-hidden="true">↗</span></a>`:''}
 ${keyVisualDemo(o,i+1)}
 ${o.subVisuals?keyVisualGallery(o,i+1):''}
 <div class="proposalPair"><section class="panel"><h4>Bố cục và hình ảnh</h4><ul>${o.layout.map(line=>`<li>${esc(line)}</li>`).join('')}</ul></section><section class="panel"><h4>Visual Treatment</h4><p>${esc(o.treatment)}</p><h4>Trụ cột ưu tiên</h4><div class="tags">${o.priority.map(n=>`<span class="tag">${n} · ${esc(pillars[n-1])}</span>`).join('')}</div><p class="kvNote">Wi-Fi vệ tinh là điểm nhấn kết nối xuyên suốt.${o.allPillars?' Các trụ cột còn lại cùng hiện diện trong bố cục.':''}</p></section></div>
 </article>`).join('')}</section>`;
}

function manifestoComparison() {
 const columns = ['Tiêu chí', ...options.map(option => `Option ${no(option.id)} · ${option.title}`)];
 const rows = [
  ['Điểm mạnh của cách kể',
   'Một cô gái qua ba chặng đời tạo mạch kể liền lạc. Chiếc máy bay giấy ba gấp nối chuyến đi đầu tiên với cuộc gọi hẹn cả nhà bay cùng ở cuối phim.',
   'Ba nhóm khách trên cùng chuyến bay được nối bằng chuyển cảnh từ mặt quầy sang bàn gập. Laptop, đồ chơi và bản đồ giúp người xem nhận ra từng tuyến.',
   'Cái siết tay nối hai lần bay và hai thế hệ. Từ cô bé từng cần ba trấn an đến người con gái giúp ba yên tâm, câu chuyện có một điểm rơi cảm xúc rõ.'],
  ['Phù hợp với đề bài tái định vị',
   'Cho thấy ngay cả một người cũng cần cách bay khác nhau theo từng chuyến: được chăm sóc cùng ba mẹ, tận hưởng cùng bạn bè, rồi chủ động làm việc trong chuyến công tác.',
   'Thể hiện trực diện tính linh hoạt của Hybrid. Ba tuyến Eco, SkyBoss và Business cho thấy sự phù hợp của từng lựa chọn với nhu cầu cụ thể.',
   'Đặt “Dịch vụ từ trái tim” ở trung tâm. Ghế liền nhau, khay món sẻ chia, kết nối trên không và sự hỗ trợ của tiếp viên cùng giúp người ba an tâm hơn.'],
  ['Hình ảnh và nhịp phim',
   'Chuyến đầu ấm áp, chặng bạn bè trẻ và nhanh hơn, chặng công tác chỉn chu và bình tĩnh. Cùng một đạo cụ giữ ba nhịp phim liền nhau.',
   'Dựng đan xen cho nhịp nhanh, hiện đại. Sự khác biệt giữa ba không gian ghế có thể đọc được ngay qua hoạt động của hành khách.',
   'Khung hình cabin cao cấp và cận cảnh bàn tay tạo độ tinh tế. Nhịp chuyển giữa hồi tưởng và hiện tại giữ phim trẻ, với khoảng lắng vừa đủ để cảm xúc tới.'],
  ['Khả năng rút gọn 30s và 15s',
   'Bản 30s giữ ba độ tuổi với một hành động chính ở mỗi chặng. Bản 15s có thể nối chuyến đầu với lúc trưởng thành bằng máy bay giấy.',
   'Bản 30s giữ một khoảnh khắc mỗi tuyến. Bản 15s có thể rút số điểm chạm để giữ mạch rõ.',
   'Bản 30s giữ hai thời điểm và hành động của tiếp viên. Bản 15s có thể nối hai cái siết tay, rồi kết ở khoảnh khắc ba tự tin bước tiếp.']
 ];
 return `<section class="section manifestoComparison" aria-labelledby="manifesto-comparison-title">
 <div class="sectionHeader"><div><h2 id="manifesto-comparison-title">So sánh các option Manifesto Film</h2></div></div>
 ${proposalTable(columns, rows, 'So sánh ba option Manifesto Film')}
 <article class="panel recommendation"><h3>Đề xuất ưu tiên · Option 03</h3><p>“Dù là lần đầu hay lần thứ mười lăm?” cho thấy chất lượng dịch vụ qua một thay đổi dễ cảm nhận: người ba từ ngại bay đến chủ động hỏi về chuyến tiếp theo. Những lựa chọn Hybrid góp phần tạo nên sự an tâm ấy, giúp lời mời “Bay lại, thích ngay!” đến tự nhiên từ câu chuyện gia đình.</p></article>
 </section>`;
}

const optionProduction = [
 {
  cast:'Một nhân vật nữ ở ba độ tuổi, ba mẹ, nhóm bạn đại học, nhân viên mặt đất và tiếp viên.',
  prepare:'Chọn diễn viên có nét tương đồng qua ba độ tuổi. Chuẩn bị máy bay giấy ở các mức độ sờn, ba bộ phục trang, hồ sơ dự án và màn hình điện thoại.',
  shoot:'Gom theo bối cảnh nhà ga và cấu hình cabin. Quay các động tác với máy bay giấy ở cả ba độ tuổi để dựng chuyển chặng.',
  finish:'Dựng mạch lớn lên qua động tác và ánh nhìn. Hoàn thiện màn hình kết nối, giữ nhịp trẻ ở chặng bạn bè và giữ đủ khoảng lặng cho lời hẹn cuối phim.'
 },
 {
  cast:'Một nữ doanh nhân, gia đình ba người, bốn bạn trẻ và đội ngũ Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ và tổ bay.',
  prepare:'Chốt ba cụm ghế Eco, SkyBoss và Business cùng đạo cụ riêng của từng tuyến. Căn cao độ mặt quầy và bàn gập để dựng nối.',
  shoot:'Quay theo ba nhóm hành khách tại quầy và gate, sau đó theo từng cấu hình ghế. Ghi thêm tương tác với món nóng, laptop và đồ chơi.',
  finish:'Dựng đan xen ba nhịp trải nghiệm, khớp hướng sáng và ô cửa. Hoàn thiện giao diện kết nối và SkyJoy theo tư liệu Vietjet.'
 },
 {
  cast:'Ba nhân vật gia đình và ba vai Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ. Cô con gái có tạo hình hồi tưởng và hiện tại.',
  prepare:'Khớp tạo hình và đạo cụ giữa hai thời điểm. Chốt hàng ghế, hành động của ba và cử chỉ hỗ trợ ở cửa tàu.',
  shoot:'Quay hai thời điểm tại cùng quầy. Gom cảnh gia đình trong cabin, cảnh đỡ tay ở cửa tàu và khoảnh khắc ba hỏi về chuyến bay kế tiếp ở sảnh đến.',
  finish:'Nối hai bàn tay trên quai vali và tinh chỉnh ánh sáng giữa hai thời điểm. Giữ tiếng động nhỏ và khoảng nghỉ trước câu hỏi cuối.'
 }
];

function productionPlan(o) {
 const plan=optionProduction[o.id-1];
 return `<section class="section proposalPage" id="production-plan">
 <div class="sectionHeader"><div><h2>Sản xuất</h2><p>Kế hoạch triển khai Manifesto Film · Option ${no(o.id)}</p></div><button class="action" id="print" type="button">In option này</button></div>
 <div class="proposalPair">
 <section class="panel"><h3>Hệ thống nhân vật</h3><p>${esc(plan.cast)}</p><ul>${o.roles.map(([role,description])=>`<li><strong>${esc(role)}</strong> · ${esc(description)}</li>`).join('')}</ul></section>
 <section class="panel"><h3>Bối cảnh và đạo cụ</h3><ul><li><strong>Nhà ga</strong> · ${esc(o.sets[0])}</li><li><strong>Cabin</strong> · ${esc(o.sets[1])}</li><li><strong>Sân đỗ và buồng lái</strong> · Kết hợp tư liệu Vietjet và cảnh bổ trợ theo phương án thực hiện.</li><li><strong>Đạo cụ</strong> · ${esc(o.sets[2])}</li></ul></section></div>
 <ol class="journeySteps productionSteps"><li><strong>Tiền kỳ</strong><p>${esc(plan.prepare)}</p></li><li><strong>Quay</strong><p>${esc(plan.shoot)}</p></li><li><strong>Hậu kỳ</strong><p>${esc(plan.finish)}</p></li></ol>
 <div class="panel"><h3>Định dạng dự kiến</h3><p>Master 60 giây, bản rút gọn 30 và 15 giây, phiên bản 16:9, 9:16 và 1:1. Lời dẫn và phụ đề Việt/Anh được hoàn thiện theo bản dựng đã duyệt.</p></div>
 </section>`;
}

const directorOptions = [
 {
  name:'Hoàng Đăng',
  portrait:'hoang-dang',
  portfolio:'https://vimeo.com/hdwng?fl=pp&fe=sh',
  platform:'YouTube',
  videos:['Bn72aqpuSqc','pLk2OoPdqRE','dlDldMypmyU','fyDAwGL77Xo']
 },
 {
  name:'Kha Bảo',
  portrait:'kha-bao',
  portfolio:'https://vimeo.com/tienkhabao?fl=pp&fe=sh',
  platform:'Vimeo',
  videos:['1243257796','1194333984','1109647452','1222003644']
 },
 {
  name:'William Bao Nguyen',
  portrait:'william-bao-nguyen',
  portfolio:'https://vimeo.com/user90468759?fl=pp&fe=sh',
  platform:'Vimeo',
  videos:['1059456058','1099390281','1219493922','1219575809']
 },
 {
  name:'Nhat Nguyen',
  portrait:'nhat-nguyen',
  portfolio:'https://vimeo.com/nhatnguyen182',
  platform:'Vimeo',
  videos:['1079805155','1068133008','1197377066','1185038957']
 }
];

function directorPortfolio({name,portrait,portfolio,platform,videos}, i) {
 return `<article class="panel directorCard" aria-labelledby="director-${i+1}">
 <div class="directorProfile">
 <img src="media/directors/${portrait}.webp" alt="Chân dung ${esc(name)}" width="560" height="560" loading="lazy" decoding="async">
 <span class="kicker">Đạo diễn ${no(i+1)}</span><h4 id="director-${i+1}">${esc(name)}</h4>
 <a class="kvDetails" href="${esc(portfolio)}" target="_blank" rel="noopener" aria-label="Portfolio · ${esc(name)}">Portfolio</a>
 </div>
 <div class="directorWorks">${videos.map((video,j)=>{
  const title=`${name} · Video ${no(j+1)}`;
  return `<figure>${videoRef(video,title,platform)}</figure>`;
 }).join('')}</div>
 </article>`;
}

function theTreatment() {
 return `<section class="section proposalPage" id="the-treatment">
 ${proposalHeader('The Treatment','Hai phương án thực hiện cùng theo mạch phim từ mặt đất lên bầu trời. Cử chỉ của nhân vật, chi tiết sản phẩm và nhịp kể dẫn dắt cảm giác trải nghiệm.','treatment-title')}
 <div class="treatments">
 <article class="panel"><span class="kicker">Phương án 01</span><h3>Dựng không gian sân bay Vietjet</h3><p>Dựng hai cụm chính trong studio. Một cụm tái hiện quầy check-in, gate và sảnh đến. Cụm còn lại dùng ghế, lối đi, vách, bàn và ô cửa cabin mô-đun.</p>
 <h4>Triển khai</h4><ul><li>Dùng tư liệu Vietjet để chốt tỷ lệ bối cảnh, biển chỉ dẫn, đồng phục, ghế và vật dụng.</li><li>Gom lịch theo cụm bối cảnh và hạng ghế. Kiểm tra lối xe phục vụ, hướng mở cửa và vị trí đạo cụ để khớp các cảnh nối.</li><li>Kết hợp cảnh quay với tư liệu sân đỗ, buồng lái và tàu bay đã duyệt.</li></ul>${videoRef(treatmentRefs[0],'Tham chiếu · Dựng không gian sân bay Vietjet')}</article>
 <article class="panel"><span class="kicker">Phương án 02</span><h3>Phông xanh và trời mây</h3><p>Dựng thật những điểm diễn viên tương tác như mép quầy, khung cửa, ghế, tay vịn, bàn và khay. Mở rộng vách, nhà ga và bầu trời trong hậu kỳ.</p>
 <h4>Triển khai</h4><ul><li>Dựng thử theo storyboard để chốt bố cục, ánh sáng và phần mở rộng bối cảnh. Thử trước chất liệu da, đồng phục, khay bóng và kính.</li><li>Ghi dữ liệu ống kính, vị trí máy và ánh sáng. Quay thêm hình nền sạch và tham chiếu màu, chừa vùng hình cho tỷ lệ dọc.</li><li>Duyệt phong cách trời mây và một cảnh mẫu. Hoàn thiện ghép bối cảnh, màn hình và tàu bay theo nhận diện đã duyệt.</li></ul>${videoRef(treatmentRefs[1],'Tham chiếu · Phông xanh và trời mây')}</article>
 </div>
 <article class="panel casePanel"><h3>Điều kiện triển khai</h3><p>Có thể ghi hình tại sân bay thật tùy lịch khai thác, khả năng tiếp cận tàu bay và giấy phép. Khi chốt phương án, chúng ta sẽ đối chiếu hạng ghế, cấu hình cabin, suất ăn, đường bay, giao diện SkyJoy và phạm vi thể hiện Wi-Fi với tài liệu Vietjet.</p></article>
 <section class="proposalBlock" aria-labelledby="directors-title"><h3 id="directors-title">Đề xuất đạo diễn</h3>
 <div class="directorList">${directorOptions.map(directorPortfolio).join('')}</div>
 </section>
 </section>`;
}
