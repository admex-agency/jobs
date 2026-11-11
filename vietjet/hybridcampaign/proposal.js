
function proposalHeader(title, description, id) {
 return `<header class="sectionHeader proposalHeading"><div><h2 id="${id}">${title}</h2><p>${description}</p></div></header>`;
}

function proposalTable(columns, rows, label) {
 return `<div class="proposalTable" role="region" aria-label="${esc(label)}" tabindex="0"><table><thead><tr>${columns.map(column=>`<th scope="col">${esc(column)}</th>`).join('')}</tr></thead><tbody>${rows.map(([first,...cells])=>`<tr><th scope="row">${esc(first)}</th>${cells.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function creativeDirection() {
 return `<section class="section proposalPage" id="creative">
 ${proposalHeader('Creative Direction','Vietjet Hybrid mở rộng ý nghĩa của “Cơ hội bay cho mọi người”. Mỗi hành khách có thêm cách tận hưởng chuyến bay theo nhu cầu riêng và được chăm sóc bằng cả trái tim.','creative-title')}
 <div class="strategyGrid">
 <article class="panel strategy"><img class="strategyArt" src="media/overall/positioning.webp" alt="Hành khách và tiếp viên trong cabin" width="1200" height="675"><span class="kicker">Định vị</span><h3>Vietjet Hybrid · Trải nghiệm bay khác biệt cho mọi người</h3><p>Xác lập giá trị trải nghiệm được nâng tầm, tiếp nối tinh thần rộng mở của Vietjet.</p></article>
 <article class="panel strategy"><img class="strategyArt" src="media/overall/master-concept.webp" alt="Hành khách mỉm cười trong khoang bay" width="1200" height="675"><span class="kicker">Master Concept</span><h3>Bay lại, thích ngay!</h3><p>Khơi lại niềm thích bay và mời hành khách khám phá Vietjet Hybrid.</p></article>
 <article class="panel strategy"><img class="strategyArt" src="media/overall/key-message.webp" alt="Máy bay giấy bên ô cửa" width="1200" height="675"><span class="kicker">Key Message</span><h3>Trọn vẹn mọi hành trình khác biệt</h3><p>Những điều quan trọng với mỗi người được chăm chút xuyên suốt hành trình.</p></article>
 </div>
 <section class="proposalBlock"><span class="kicker">Strategic Foundation</span><h3>Từ cơ hội được bay đến cơ hội tìm thấy chuyến bay đúng ý</h3><p>Vietjet đã đưa việc bay đến gần hơn với nhiều người, giúp họ đi xa hơn, gặp nhau thường xuyên hơn và khám phá thêm điểm đến. Khi việc bay trở nên quen thuộc, hành khách cân nhắc thêm sự thuận tiện, thoải mái và mức độ phù hợp với nhu cầu của chuyến đi.</p>
 <div class="proposalPair"><article class="panel"><h4>“Tôi có thể bay”</h4><p>Cơ hội tiếp cận chuyến bay giúp nhiều người lên đường và mở ra những điểm đến mới.</p></article><article class="panel proposalAccent"><h4>“Tôi tìm thấy chuyến bay đúng ý mình”</h4><p>Cơ hội tiếp cận nhiều trải nghiệm hơn giúp mỗi người chọn cách lên đường phù hợp và tìm thấy điều đáng tận hưởng ngay trên hành trình.</p></article></div>
 <p>Vietjet Hybrid mở rộng lý do để hành khách cân nhắc thương hiệu. Bên cạnh khả năng tiếp cận, hành khách có thể lựa chọn dựa trên nhiều ưu tiên khác nhau trong tổng thể trải nghiệm Hybrid.</p></section>
 <section class="proposalBlock"><span class="kicker">Consumer Understanding</span><h3>Một người có nhiều cách bay</h3><p>Chuyến công tác có thể cần khoảng riêng. Chuyến nghỉ cuối tuần cần gọn nhẹ. Khi đi cùng cha mẹ, sự thoải mái và chăm sóc trở nên quan trọng hơn. Trên hành trình dài, kết nối giúp hành khách chủ động hơn.</p>
 ${proposalTable(['Cấp độ khác biệt','Biểu hiện','Hàm ý cho Hybrid'],[
 ['Giữa các hành khách','Mỗi người có ưu tiên, sở thích và điều kiện riêng.','Mở nhiều lựa chọn trải nghiệm.'],
 ['Giữa các lần bay','Nhu cầu thay đổi theo mục đích và người đi cùng.','Linh hoạt theo từng chuyến đi.'],
 ['Trong cùng hành trình','Có lúc cần tập trung, lúc muốn nghỉ, lúc muốn kết nối.','Tăng khả năng chủ động tận hưởng.']
 ],'Ba cấp độ khác biệt')}</section>
 <section class="proposalBlock insightPanel"><span class="kicker">The Insight</span><blockquote>“Mỗi lần lên đường, tôi lại mong một điều khác nhau. Tôi muốn tìm được cách bay phù hợp với mình, và cảm thấy những điều quan trọng với mình cũng được hãng quan tâm. Khi hành trình có những điều đúng ý, tôi có thêm lý do để mong chờ và yêu thích việc bay.”</blockquote><p>Insight này bổ sung lớp cảm xúc cho “Bay nhiều hơn, nhưng tận hưởng ít hơn”. Khi chuyến bay hợp với mình hơn, hành khách có thể chủ động tận hưởng và tìm lại niềm thích bay.</p></section>
 <section class="proposalBlock"><span class="kicker">Positioning</span><h3>Vietjet Hybrid · Trải nghiệm bay khác biệt cho mọi người</h3>
 <div class="proposalTriple"><article class="panel"><h4>Trải nghiệm bay</h4><p>Cảm nhận bắt đầu từ khi chọn chuyến, tiếp nối qua đón tiếp, cabin, ẩm thực, kết nối, chăm sóc và giá trị sau chuyến bay. Mỗi điểm chạm góp phần tạo nên cảm giác “chuyến đi này hợp với mình”.</p></article><article class="panel"><h4>Khác biệt</h4><p>Mỗi hành khách có một tổ hợp nhu cầu riêng. Cùng nền tảng Hybrid, người cần khoảng nghỉ, người cần chủ động làm việc, gia đình muốn gần nhau và khách quốc tế muốn khám phá đều có thể tìm được trải nghiệm phù hợp.</p></article><article class="panel"><h4>Cho mọi người</h4><p>Các hạng vé có quyền lợi riêng. Sự trân trọng hành khách xuyên suốt các lựa chọn. Wi-Fi vệ tinh miễn phí là điểm nhấn kết nối theo định hướng của chiến dịch và phạm vi triển khai Vietjet xác nhận.</p></article></div>
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
 <section class="proposalBlock"><span class="kicker">Master Concept</span><h3>Bay lại, thích ngay!</h3><p class="conceptEnglish" lang="en">Enjoying flying, again</p>
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
 <section class="proposalBlock"><span class="kicker">Key Message</span><h3>Trọn vẹn mọi hành trình khác biệt</h3><div class="proposalPair"><article class="panel"><h4>Trọn vẹn</h4><p>Những điều quan trọng được chăm chút xuyên suốt. Với người công tác, đó có thể là sự chủ động. Với gia đình, đó là an tâm và thời gian bên nhau. Với người đi khám phá, đó là cảm hứng được nuôi dưỡng từ lúc lên đường.</p></article><article class="panel"><h4>Mọi hành trình khác biệt</h4><p>Hai người đi cùng chặng, ngồi cùng khoang vẫn có thể muốn nghỉ ngơi, giữ liên lạc, thưởng thức món ăn hoặc cần hỗ trợ cho người thân. Tám trụ cột phối hợp để đáp ứng từng tổ hợp nhu cầu.</p></article></div></section>
 <section class="proposalBlock"><span class="kicker">Creative Strategy</span><h3>Từ điều đúng ý đến niềm thích bay trở lại</h3>
 <ol class="journeySteps strategySteps"><li>Nhu cầu riêng của hành khách</li><li>Tám trụ cột phối hợp</li><li>Trải nghiệm đúng ý, được chăm sóc tận tâm</li><li>Niềm thích bay được khơi lại và bồi đắp</li></ol>
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
  'Toàn thân nhóm, nhóm trao đổi nghiệp vụ, chân dung và cận cảnh thao tác. Tác phong vững vàng, sẵn sàng và phối hợp tự nhiên.'],
 ['Các hạng Eco, Deluxe, SkyBoss và Business giúp hành khách chọn trải nghiệm phù hợp với ưu tiên của chuyến đi.',
  'Gia đình ba người (Eco), cặp đôi lớn tuổi (Deluxe), nhóm bốn đến sáu bạn trẻ (SkyBoss), nữ doanh nhân (Business).',
  'Gia đình nhìn theo con chỉ ra cửa sổ. Cặp đôi cùng xem thông tin hành trình. Nhóm bạn trao đổi kế hoạch hoặc đón nhận dịch vụ. Nữ doanh nhân khép laptop và thả lỏng.',
  'Một ảnh hero cho mỗi nhóm, góc rộng thấy ghế, trung cảnh tương tác và chân dung tách lớp. Dùng đúng ghế và quyền lợi của mỗi hạng, phân biệt rõ SkyBoss và Business.'],
 ['Cabin hiện đại, tươi mới và thoải mái giúp hành khách bắt đầu tận hưởng ngay khi lên tàu.',
  'Bốn nhóm hành khách của trụ cột 2, cùng tiếp viên ở cửa tàu hoặc trong cabin.',
  'Các nhóm bước lên tàu và được đón chào. Hành khách ổn định chỗ ngồi rồi hướng mắt ra cửa sổ. Nữ doanh nhân hoặc cặp đôi lớn tuổi thể hiện sự thoải mái qua tư thế tự nhiên.',
  'Toàn thân lên tàu, trung cảnh đón chào, góc rộng và góc nghiêng thấy ghế. Nếu dùng phông xanh, chuẩn bị ghế, bậc và điểm tựa phù hợp, khớp ánh sáng và hướng nhìn với tư liệu thật.'],
 ['Một món nóng hợp ý trở thành điều đáng mong chờ ngay trên chuyến bay.',
  'Bốn nhóm hành khách, tiếp viên và hai khách quốc tế.',
  'Gia đình thưởng thức và nhìn phản ứng của con. Cặp đôi lớn tuổi trao nhau ánh nhìn hài lòng. Nhóm bạn chia sẻ cảm nhận, nữ doanh nhân dành thời gian ăn và khách quốc tế khám phá món Việt.',
  'Trao và đón món, khoảnh khắc chuẩn bị thưởng thức, phản ứng sau khi nếm và cận món. Dùng thực đơn, khẩu phần, dụng cụ và cách phục vụ đúng sản phẩm.'],
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
 <img src="media/proposal/pillar-${i+1}.webp" alt="Hình minh họa ${esc(pillars[i])}" width="800" height="450" loading="lazy" decoding="async">
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
 <section class="proposalBlock"><span class="kicker">Main Key Visual</span><h3>Trọn vẹn mọi hành trình khác biệt</h3><p>Ưu tiên biểu cảm đọc được từ xa. Các cụm nhân vật độc lập giúp linh hoạt lựa chọn một cụm chính, một cụm bổ trợ hoặc phối nhiều cụm theo phân cấp thị giác.</p>
 ${proposalTable(['Cụm hình ảnh','Nhân vật và hành động','Giá trị đại diện'],[
 ['Tận hưởng cùng nhau','Gia đình nhìn ra cửa sổ và cùng bật cười.','Cabin, trải nghiệm gia đình, niềm thích bay.'],
 ['Được chăm sóc','Tiếp viên ân cần trao món nóng.','Ẩm thực, dịch vụ từ trái tim.'],
 ['Chủ động kết nối','Nữ doanh nhân dùng laptop hoặc cặp đôi lớn tuổi kết nối với người thân.','Wi-Fi và nhu cầu riêng.'],
 ['Hào hứng khám phá','Nhóm bạn và khách quốc tế hướng về phía trước.','Lựa chọn và mạng bay.'],
 ['Nền tảng tận tâm','Phi công và đội ngũ Vietjet cùng tiến bước.','Vận hành và năng lực tập thể.']
 ],'Nhân vật Main Key Visual')}</section>
 </section>`;
}

const keyVisualOptions = [
 {
  title:'Bốn không gian trải nghiệm liên thông',
  intent:'Bốn trải nghiệm cùng tạo thành một hành trình đúng ý. Trong cùng một hãng bay, mỗi hành khách có thể tìm thấy không gian, món ăn, sự chăm sóc và kết nối phù hợp.',
  layout:['Bốn không gian gồm cabin hiện đại, ẩm thực nóng tươi, phục vụ tận tâm và kết nối điểm đến. Mỗi không gian có một tương tác chính của hành khách.',
   'Tàu bay Vietjet hội tụ ở trung tâm. Đường nét cabin, ô cửa hoặc dải chuyển động nối các không gian. Hành khách sử dụng thiết bị, với tín hiệu Wi-Fi tiết chế.',
   'Headline nằm ở khoảng trống trung tâm, kết nối bố cục và giữ khả năng đọc.'],
  treatment:'Phối cảnh đa chiều, kết hợp góc cao và góc thấp. Dùng góc rộng có kiểm soát để giữ dáng người và sản phẩm tự nhiên. Ánh sáng rõ, màu sắc có chọn lọc và giàu tính thời trang.',
  priority:[3,4,5,6]
 },
 {
  title:'Thế giới trải nghiệm mở rộng trên mây',
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
  title:'Cánh cổng chuyển mình Hybrid',
  intent:'Hai vòng đồng tâm gợi cánh cổng mở sang trải nghiệm Hybrid. Tám trụ cột cùng tạo nền tảng cho bước chuyển mình của Vietjet.',
  layout:['Tàu bay xuyên vòng trung tâm về phía người xem và chếch lên. Vòng ngoài nối tám phân cảnh thành một dòng trải nghiệm có phân cấp.',
   'Cabin, ẩm thực và dịch vụ chiếm diện tích lớn hơn. Wi-Fi đặt ở điểm dễ nhận biết, có chỗ cho copy “Wi-Fi vệ tinh miễn phí”. Các trụ cột còn lại hiện qua chi tiết cô đọng.',
   'Headline nằm ngoài quỹ đạo chuyển động chính, giữ khoảng thở quanh tàu bay.'],
  treatment:'Bố cục tập trung, ánh sáng mở dần về phía trước. Dựng vòng ngoài thành không gian liền mạch có chiều sâu để tạo cảm giác trọn vẹn.',
  priority:[3,4,5,6],
  allPillars:true
 },
 {
  title:'Đôi cánh nâng tám trải nghiệm',
  intent:'Vietjet Hybrid nâng đỡ những mong đợi khác nhau bằng cùng một nền tảng vận hành và sự tận tâm, thể hiện “Trọn vẹn mọi hành trình khác biệt”.',
  layout:['Tàu bay trực diện, hơi chếch từ dưới lên. Tám cụm trải nghiệm đặt dọc theo hai cánh, với cabin, món nóng, tiếp viên và Wi-Fi nổi bật.',
   'Vận hành, lựa chọn, mạng bay và SkyJoy bổ sung lớp nền. Các đường ánh sáng nối các cụm với thân tàu bay.',
   'Headline nằm phía trên thân tàu bay, giữ vùng nhận diện trung tâm rõ ràng.'],
  treatment:'Bố cục ngang cân bằng hai bên, kích thước cụm linh hoạt. Các lớp không gian trên đôi cánh kết hợp cảm giác hiện đại của tàu bay và sự ấm áp của con người. Đỏ và vàng nổi trên nền trời trong.',
  priority:[3,4,5,6],
  allPillars:true
 }
];

function keyVisual() {
 return `<section class="section proposalPage" id="key-visual">
 ${proposalHeader('Key Visual','Năm hướng bố cục chuyển hóa Master Concept “Bay lại, thích ngay!” và Key Message “Trọn vẹn mọi hành trình khác biệt” thành những trải nghiệm nhìn thấy được.','kv-title')}
 <nav class="kvJump" aria-label="Phương án Key Visual">${keyVisualOptions.map((o,i)=>`<a href="#kv-${i+1}">Option ${no(i+1)}</a>`).join('')}</nav>
 ${keyVisualOptions.map((o,i)=>`<article class="proposalBlock kvOption" id="kv-${i+1}">
 <span class="kicker">KV Option ${no(i+1)}</span><h3>${esc(o.title)}</h3><span class="kicker">Creative Intent</span><p class="kvIntent">${esc(o.intent)}</p>
 <figure class="kvDemo"><figcaption><strong>Key Visual Demo</strong><span>1920 × 1080 · 16:9</span></figcaption></figure>
 <div class="proposalPair"><section class="panel"><h4>Bố cục và hình ảnh</h4><ul>${o.layout.map(line=>`<li>${esc(line)}</li>`).join('')}</ul></section><section class="panel"><h4>Visual Treatment</h4><p>${esc(o.treatment)}</p><h4>Trụ cột ưu tiên</h4><div class="tags">${o.priority.map(n=>`<span class="tag">${n} · ${esc(pillars[n-1])}</span>`).join('')}</div><p class="kvNote">Wi-Fi vệ tinh là điểm nhấn kết nối xuyên suốt.${o.allPillars?' Các trụ cột còn lại cùng hiện diện trong bố cục.':''}</p></section></div>
 </article>`).join('')}</section>`;
}

const optionProduction = [
 {
  cast:'Bốn bạn trẻ, gia đình ba người, hai khách quốc tế và ba vai Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ.',
  prepare:'Thống nhất tạo hình nhóm SkyBoss, suất ăn, thiết bị và giao diện. Chuẩn bị nhãn đỏ trên vali và bộ thẻ vẽ cho cậu bé.',
  shoot:'Gom cảnh nhóm bạn theo quầy, gate và hành lang đến. Trong cabin, quay lần lượt nhóm bạn, khách quốc tế và tình huống tiếp viên nhặt bút.',
  finish:'Nối hai lần xuất hiện nhãn đỏ, dựng tương tác cabin và xử lý màn hình điện thoại. Dùng nhịp nghỉ trước khoảnh khắc cậu bé cười.'
 },
 {
  cast:'Ba nhân vật gia đình và ba vai Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ. Cô con gái có tạo hình hồi tưởng và hiện tại.',
  prepare:'Khớp tạo hình và đạo cụ giữa hai thời điểm. Chốt hàng ghế, hành động của ba và cử chỉ hỗ trợ ở cửa tàu.',
  shoot:'Quay hai thời điểm tại cùng quầy. Gom cảnh gia đình trong cabin, cảnh đỡ tay ở cửa tàu và khoảnh khắc ba hỏi về chuyến bay kế tiếp ở sảnh đến.',
  finish:'Nối hai bàn tay trên quai vali và tinh chỉnh ánh sáng giữa hai thời điểm. Giữ tiếng động nhỏ và khoảng nghỉ trước câu hỏi cuối.'
 },
 {
  cast:'Một nữ doanh nhân, gia đình ba người, bốn bạn trẻ và đội ngũ Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ và tổ bay.',
  prepare:'Chốt ba cụm ghế Eco, SkyBoss và Business cùng đạo cụ riêng của từng tuyến. Căn cao độ mặt quầy và bàn gập để dựng nối.',
  shoot:'Quay theo ba nhóm hành khách tại quầy và gate, sau đó theo từng cấu hình ghế. Ghi thêm tương tác với món nóng, laptop và đồ chơi.',
  finish:'Dựng đan xen ba nhịp trải nghiệm, khớp hướng sáng và ô cửa. Hoàn thiện giao diện kết nối và SkyJoy theo tư liệu Vietjet.'
 },
 {
  cast:'Gia đình ba người, bốn bạn trẻ, một nữ doanh nhân và ba vai Vietjet gồm nhân viên mặt đất, tiếp viên, nhân viên sân đỗ.',
  prepare:'Chốt ngày trên lịch, ghi chú và thẻ lên tàu. Thống nhất ba nhóm ghế và chuẩn bị các giao diện điện thoại đồng bộ.',
  shoot:'Gom cảnh gia đình ở quầy, gate, cabin và sảnh đến. Quay riêng nhóm bạn thưởng thức món nóng và nữ doanh nhân nghỉ ở khoang Business.',
  finish:'Nối ngày trên lịch với ngày in trên thẻ. Hoàn thiện các màn hình lịch, tin nhắn, SkyJoy và hình tàu bay cuối phim.'
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
 </section>`;
}
