
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
  title:'Khoảnh khắc đáng tận hưởng',
  demo:{file:'option-03-main.webp',width:2000,height:1125,alt:'Phi hành đoàn Vietjet bước giữa khoang máy bay, hai bên là hành khách dùng bữa và làm việc.'},
  detailsUrl:'https://drive.google.com/file/d/1GmLeeRGFOHj2iE3_6JZjQ49CuhbWq47A/view?usp=sharing',
  subVisualPrefix:'option-03',
  subVisualSize:{width:1920,height:1080},
  subVisuals:[
   ['sub-01','Sân bay'],
   ['sub-02','Website'],
   ['sub-03','Mạng xã hội']
  ],
  intent:'Trên cùng một chuyến bay, niềm vui có nhiều hình dáng. Một gia đình có thêm thời gian bên nhau, một hành khách có khoảng riêng để làm việc, và phi hành đoàn Vietjet hiện diện ngay giữa những khoảnh khắc ấy. Hình ảnh cho thấy mỗi người có thể tận hưởng chuyến bay theo cách của mình và đều được chăm sóc.',
  layout:[ 'Lối đi đỏ dẫn mắt về phi công và hai tiếp viên ở trung tâm. Hai dãy ghế mở sang hai bên, với gia đình bên trái và hành khách dùng laptop bên phải.',
   'Khoảng trời xanh phía trên dành chỗ cho ‘Bay lại, thích ngay!’, tàu bay và biểu tượng Wi‑Fi. Thông điệp Vietjet Hybrid nằm ở chân trục giữa.',
   'Ba bản ứng dụng đưa cùng một hình ảnh vào bảng quảng cáo sân bay, trang chủ website và bài đăng mạng xã hội. Bản social tách thêm các khoảnh khắc trong cabin thành những ô ảnh nhỏ.' ],
  treatment:'Dùng phối cảnh đối xứng để giữ điểm nhìn ở phi hành đoàn, rồi để ánh mắt và cử chỉ của hành khách mở ra hai bên. Ánh sáng ấm trong cabin, nền trời xanh và thảm đỏ tạo chiều sâu. Biểu cảm tự nhiên giữ chất gần gũi ngay trong một bố cục giàu tính trình diễn.',
  priority:[3, 4, 5, 7]
 },
 {
  title:'Thế giới trải nghiệm mở rộng trên mây',
  demo:{file:'option-02-main-20261114.webp',width:2000,height:1125,alt:'Tàu bay Vietjet giữa biển mây, xung quanh là các cụm nhân vật minh họa, xe phục vụ món ăn và đoàn xe mặt đất.'},
  subVisualSize:{width:1200,height:675},
  subVisuals:[
   ['sub-01','Kết nối và giải trí'],
   ['sub-02','Dịch vụ từ trái tim'],
   ['sub-03','Tự chủ với Vietjet Group'],
   ['sub-04','Ẩm thực nóng tươi'],
   ['sub-05','Đa dạng lựa chọn'],
   ['sub-06','SkyJoy']
  ],
  intent:'Qua một tầng mây, cả thế giới Vietjet Hybrid mở ra. Tàu bay đưa mắt người xem đi từ những khoảnh khắc trong cabin đến đội xe vận hành phía dưới, gợi cảm giác có nhiều điều để khám phá ngay từ lúc lên đường.',
  layout:[ 'Tàu bay Vietjet băng chéo qua trung tâm. Các cụm ghế và nhân vật minh họa nổi quanh cánh và thân tàu. Xe phục vụ món nóng ở bên phải, đoàn xe mặt đất ở dưới.',
   'Mây trắng phân lớp giữa các cụm minh họa và vùng cảnh quan thấp phía xa. Cụm nhận diện và headline nằm ở góc trên bên trái.',
   'Sáu Sub KV giữ tàu bay, nền mây và headline làm hệ nhận diện chung. Mỗi bản phóng lớn một cụm minh họa tương ứng với kết nối, dịch vụ, vận hành, ẩm thực, lựa chọn hoặc SkyJoy.' ],
  treatment:'Kết hợp tàu bay và cảnh quan có chiều sâu với nhân vật minh họa nét gọn. Dải cam, vàng và hồng phủ bầu trời, mây làm mềm ranh giới giữa các cụm. Đỏ Vietjet trên thân tàu và xe phục vụ tạo điểm nhấn xuyên suốt Main KV và sáu Sub KV.',
  priority:[1, 2, 4, 5, 7, 8]
 },
 {
  title:'Bốn không gian trải nghiệm liên thông',
  demo:{file:'option-01-main.webp',width:2048,height:1152,alt:'Nữ hành khách áo đỏ kéo vali qua cửa tàu, xung quanh là bốn cảnh thư giãn, sử dụng thiết bị, dùng bữa và trò chuyện với tiếp viên.'},
  intent:'Bước qua cửa tàu là bước vào những điều đáng mong chờ. Một nữ hành khách xuất hiện trong bốn khoảnh khắc khác nhau, từ thư giãn và làm việc đến thưởng thức món ăn và trò chuyện cùng tiếp viên. Sự lặp lại của nhân vật giúp người xem hình dung mình cũng có thể chọn cách tận hưởng chuyến bay theo ý mình.',
  layout:[ 'Ở trung tâm, nữ hành khách áo đỏ kéo vali bước qua cửa tàu, phía sau là nền trời sáng. Headline đặt ngay trên khoảng mở này.',
   'Bốn ô cabin đặt quanh nhân vật chính. Bên trái là khoảnh khắc ngả lưng và sử dụng thiết bị. Bên phải là khay món ăn và cuộc trò chuyện với tiếp viên.',
   'Dải sáng vàng quấn qua các ô, nối các cảnh thành một chuyển động liên tục quanh cửa tàu.' ],
  treatment:'Tạo chiều sâu bằng góc nhìn thấp ở bước chân trung tâm và góc nhìn từ trên xuống trong bốn ô cabin. Áo đỏ, khoảng trời trắng sáng và dải vàng dẫn mắt theo vòng chuyển động. Giữ cùng tạo hình nhân vật xuyên suốt để bốn trải nghiệm đọc liền mạch.',
  priority:[3, 4, 5, 7]
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
 const prefix=option.subVisualPrefix??`option-${no(number)}`;
 return `<section class="kvSubVisuals" aria-labelledby="${titleId}"><h4 id="${titleId}">Sub KV</h4><div class="kvSubGrid">${option.subVisuals.map(([file,label])=>{
  const src=`media/key-visual/${prefix}-${file}.webp`;
  return `<figure><a href="${src}" target="_blank" rel="noopener" aria-label="${esc('Mở ảnh Sub KV · '+label)}"><img src="${src}" alt="" width="${width}" height="${height}" loading="lazy" decoding="async"></a><figcaption>${esc(label)}</figcaption></figure>`;
 }).join('')}</div></section>`;
}

function keyVisual() {
 return `<section class="section proposalPage" id="key-visual">
 ${proposalHeader('Key Visual','Ba hướng bố cục chuyển hóa Master Concept “Bay lại, thích ngay!” và Key Message “Trọn vẹn mọi hành trình khác biệt” thành những trải nghiệm nhìn thấy được.','kv-title')}
 <nav class="kvJump" aria-label="Phương án Key Visual">${keyVisualOptions.map((o,i)=>`<a href="#kv-${i+1}">Option ${no(i+1)}</a>`).join('')}</nav>
 ${keyVisualOptions.map((o,i)=>`<article class="proposalBlock kvOption" id="kv-${i+1}">
 <span class="kicker">KV Option ${no(i+1)}</span><h3>${esc(o.title)}</h3><span class="kicker">Creative Intent</span><p class="kvIntent">${esc(o.intent)}</p>
 ${o.detailsUrl||o.details?`<a class="kvDetails" href="${esc(o.detailsUrl||'media/key-visual/'+encodeURIComponent(o.details))}" target="_blank" rel="noopener">Diễn giải chi tiết <span aria-hidden="true">↗</span></a>`:''}
 ${keyVisualDemo(o,i+1)}
 ${o.subVisuals?keyVisualGallery(o,i+1):''}
 <div class="proposalPair"><section class="panel"><h4>Bố cục và hình ảnh</h4><ul>${o.layout.map(line=>`<li>${esc(line)}</li>`).join('')}</ul></section><section class="panel"><h4>Visual Treatment</h4><p>${esc(o.treatment)}</p><h4>Trụ cột ưu tiên</h4><div class="tags">${o.priority.map(n=>`<span class="tag">${n} · ${esc(pillars[n-1])}</span>`).join('')}</div></section></div>
 </article>`).join('')}
 <section class="proposalBlock" aria-labelledby="kv-comparison-title">
 <h3 id="kv-comparison-title">So sánh 3 phương án Key Visual</h3>
 ${proposalTable(['Tiêu chí','Option 01','Option 02','Option 03'],[
  ['Điểm nhìn','Phi hành đoàn giữa cabin, nhiều nhóm khách hai bên.','Tàu bay giữa biển mây, các cụm dịch vụ bao quanh.','Một hành khách bước qua cửa tàu, bốn ô trải nghiệm bao quanh.'],
  ['Cách kể Vietjet Hybrid','Nhiều nhu cầu cùng hiện diện trên một chuyến bay, với đội ngũ Vietjet ở trung tâm.','Giới thiệu độ rộng của hệ sinh thái Hybrid, từ vận hành đến lựa chọn và dịch vụ.','Cho thấy một hành khách có thể tận hưởng nhiều khoảnh khắc khác nhau.'],
  ['Khả năng ứng dụng','Có demo sân bay, website và social. Trục cabin và cụm nhân vật giữ nhận diện khi đổi định dạng.','Sáu Sub KV có cấu trúc chung và dành riêng một cụm minh họa cho từng trụ cột.','Bốn ô cho phép tách từng trải nghiệm. Khi thu nhỏ, cần giữ đủ điểm nhìn ở nhân vật trung tâm.']
 ],'So sánh ba phương án Key Visual')}
 <article class="panel recommendation"><h4>Đề xuất ưu tiên · Option 01</h4><p>Một khung hình cho thấy cả sự đa dạng của hành khách lẫn sự hiện diện của đội ngũ Vietjet. Gia đình, người đi công tác và phi hành đoàn cùng chia sẻ một cabin, mỗi người có một cách tận hưởng chuyến bay. Bố cục này chuyển tải rõ “Trọn vẹn mọi hành trình khác biệt” và đã có bản ứng dụng trên ba điểm chạm.</p></article>
 </section></section>`;
}

function manifestoComparison() {
 const columns = ['Tiêu chí', ...options.map(option => `Option ${no(option.id)} · ${option.title}`)];
 const rows = [
  ['Điểm mạnh của cách kể',
   'Một cậu bé qua ba chặng đời là sợi dây nối hình ảnh. Những hành khách được đan vào từng chặng để lời dẫn mở ra câu chuyện chung về những điều khiến mỗi người lên đường.',
   'Ba nhóm khách trên cùng chuyến bay được nối bằng chuyển cảnh từ mặt quầy sang bàn gập. Laptop, đồ chơi và bản đồ giúp người xem nhận ra từng tuyến.',
   'Cái siết tay nối hai thế hệ. Từ cậu bé được bố dắt đi đến người con 28 tuổi đưa bố mẹ đi bay lần đầu, câu chuyện cho thấy cách hai bố con chăm sóc nhau qua thời gian.'],
  ['Phù hợp với đề bài tái định vị',
   'Cùng một hãng bay, mỗi hành khách mang một mong đợi và tìm thấy một cách bay phù hợp. Đội ngũ Vietjet hiện diện từ mặt đất đến cabin, đưa tinh thần phục vụ bằng cả trái tim vào câu chuyện.',
   'Thể hiện trực diện tính linh hoạt của Hybrid. Ba tuyến Eco, SkyBoss và Business cho thấy sự phù hợp của từng lựa chọn với nhu cầu cụ thể.',
   'Đặt “Dịch vụ từ trái tim” ở trung tâm. Ghế liền nhau, khay món sẻ chia, kết nối trên không và sự hỗ trợ của tiếp viên cùng giúp người ba an tâm hơn.'],
  ['Hình ảnh và nhịp phim',
   'Dựng nối qua ô cửa, bước chân và ánh nhìn. Lời dẫn có nhịp riêng, để hình ảnh và câu chữ cùng gợi mở những ý nghĩa khác nhau của việc lên đường.',
   'Dựng đan xen cho nhịp nhanh, hiện đại. Sự khác biệt giữa ba không gian ghế có thể đọc được ngay qua hoạt động của hành khách.',
   'Khung hình cabin cao cấp và cận cảnh bàn tay tạo độ tinh tế. Nhịp chuyển giữa hồi tưởng và hiện tại giữ phim trẻ, với khoảng lắng vừa đủ để cảm xúc tới.'],
  ['Khả năng rút gọn 30s và 15s',
   'Bản 30s giữ ba chặng và một nhịp mở ra các hành khách. Bản 15s giữ câu mở, một nhịp dựng nhiều gương mặt và lời kết thương hiệu.',
   'Bản 30s giữ một khoảnh khắc mỗi tuyến. Bản 15s có thể rút số điểm chạm để giữ mạch rõ.',
   'Bản 30s giữ cú nối hai độ tuổi, một hành động chăm sóc trong cabin và câu hỏi về chuyến bay kế tiếp. Bản 15s có thể nối cái siết quai vali với cái nắm tay rồi kết bằng nụ cười của bố.']
 ];
 return `<section class="section manifestoComparison" aria-labelledby="manifesto-comparison-title">
 <div class="sectionHeader"><div><h2 id="manifesto-comparison-title">So sánh các option Manifesto Film</h2></div></div>
 ${proposalTable(columns, rows, 'So sánh ba option Manifesto Film')}
 <article class="panel recommendation"><h3>Đề xuất ưu tiên · Option 01</h3><p>“Bay lại, cùng Vietjet” mở rộng một mạch hình ảnh qua ba độ tuổi thành lời tuyên ngôn dành cho mọi hành khách. Mỗi người lên đường vì một điều khác nhau. Vietjet Hybrid mở ra nhiều cách bay và chăm chút từng hành trình để những điều ấy có cơ hội thành hiện thực.</p></article>
 </section>`;
}

const optionProduction = [
 {
  cast:'Một nhân vật nam ở ba độ tuổi, ba mẹ, nhóm bạn, đối tác quốc tế, các nhóm hành khách và đội ngũ Vietjet.',
  prepare:'Chọn diễn viên có nét tương đồng qua ba độ tuổi. Tổ chức các nhóm hành khách theo động cơ lên đường. Chuẩn bị phục trang, đạo cụ và cấu hình cabin cho mỗi chặng.',
  shoot:'Gom theo nhà ga, cabin và điểm đến. Quay cùng hướng chuyển động cho các cú nối qua cửa và giữ khoảng thở trong những cảnh chăm sóc.',
  finish:'Đọc thử hai giọng trên toàn mạch trước khi khóa hình. Giữ khoảng lặng giữa các cụm lời, nối âm thanh nhà ga và cabin, rồi mở nhạc khi phim chuyển sang những điểm đến.'
 },
 {
  cast:'Một nữ doanh nhân, gia đình ba người, bốn bạn trẻ và đội ngũ Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ và tổ bay.',
  prepare:'Chốt ba cụm ghế Eco, SkyBoss và Business cùng đạo cụ riêng của từng tuyến. Căn cao độ mặt quầy và bàn gập để dựng nối.',
  shoot:'Quay theo ba nhóm hành khách tại quầy và gate, sau đó theo từng cấu hình ghế. Ghi thêm tương tác với món nóng, laptop và đồ chơi.',
  finish:'Dựng đan xen ba nhịp trải nghiệm, khớp hướng sáng và ô cửa. Hoàn thiện giao diện kết nối và SkyJoy theo tư liệu Vietjet.'
 },
 {
  cast:'Gia đình gồm bố, mẹ và con trai. Con trai xuất hiện ở tuổi 10 và 28, bố có tạo hình trẻ hơn trong cảnh hồi tưởng. Đội ngũ Vietjet gồm nhân viên mặt đất, tiếp viên và phi công.',
  prepare:'Chuẩn bị hai kích cỡ của cùng một bộ trang phục cho con trai và giữ nguyên trang phục của bố ở hai thời điểm. Chốt hàng ghế, vali, món nóng và giao diện livestream.',
  shoot:'Quay cảnh lấy vali ở lề đường, cảnh dắt tay ở quầy check-in và cú nối hai độ tuổi trên lối đi cabin. Gom các cảnh cài đai, phục vụ, livestream và ánh mắt hai bố con theo bố trí hàng ghế.',
  finish:'Nối cái siết quai vali với cái nắm tay, rồi khớp bước chân trong cabin. Hoàn thiện giao diện livestream và giữ khoảng nghỉ trước câu hỏi cuối.'
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
