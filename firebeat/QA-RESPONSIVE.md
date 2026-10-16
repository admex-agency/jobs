# FIREBEAT V22 — responsive QA

Kiểm tra ngày16/10/2026 trên website đã xuất bản bằng Chromium, với các iframe có viewport CSS thực ở từng chiều rộng. Khung desktop lớn được thu nhỏ để quan sát, nhưng media query, font, DOM và phép đo bố cục vẫn dùng đúng chiều rộng mục tiêu. Đây không phải kiểm tra trên thiết bị iOS/Android vật lý hoặc chứng nhận mọi trình duyệt.

| Viewport CSS | Body đo được | Chiều rộng nội dung Agenda | Agenda | Tràn trang ngang | Heading H2 giữa trang có dòng cuối1 từ | Font |
|---:|---:|---:|---|---|---|---|
|320|308|273|Dọc|Không|Không|Đã tải|
|375|363|320|Dọc|Không|Không|Đã tải|
|390|378|335|Dọc|Không|Không|Đã tải|
|430|419|375|Dọc|Không|Không|Đã tải|
|768|759|571|Grid|Không|Không|Đã tải|
|1024|1017|779|Grid|Không|Không|Đã tải|
|1366|1362|720|Grid|Không|Không|Đã tải|
|1440|1436|720|Grid|Không|Không|Đã tải|
|1920|1920|720|Grid|Không|Không|Đã tải|

Đã xem trực tiếp các khung Agenda mobile390 và desktop1920; tab vùng vị mobile390/tablet768; combo mobile390/desktop1920; hero/map mobile320 và popup combo320. Body nhỏ hơn viewport ở một số khung do scrollbar. Các vùng lướt ngang có chủ đích được giới hạn bên trong component, không tính là tràn trang.

Phép kiểm heading dùng Range theo từng từ, nhóm theo vị trí dòng; không thấy heading H2 giữa trang có một từ đứng riêng ở dòng cuối tại chín kích thước. Hero/footer có thang chữ riêng và không thuộc phép kiểm này. CSS text-wrap balance kết hợp khối câu trong em và cỡ chữ thích nghi giữ nhịp xuống dòng khi đổi độ rộng.

Đã thao tác trực tiếp: đổi ngày Agenda (aria-selected/tabpanel cập nhật); chọn Hanoi Heritage (ảnh món đổi sang bún chả và nội dung đổi theo); lọc Nhóm bạn (hiện Biết Chơi); mở/đóng popup combo; FAQ chỉ có một câu mở; mở popup quà tặng; bài ghim mở reader tại chỗ. Không thấy ảnh có src thực bị lỗi sau khi tải; hai ảnh placeholder chưa có src trong dialog không phải tài nguyên hỏng. Một số log phát sinh từ extension điều khiển browser, không phải app.

Font:15 file WOFF2 từ Google Fonts upstream, năm weight400/500/600/700/800 và ba tập ký tự Vietnamese/Latin-ext/Latin; lưu kèm OFL. Đã kiểm chữ tiếng Việt trong các weight upstream bằng cmap và kiểm document.fonts.check cho chuỗi “Ă Đ ễ ừ ợ” trong browser: true. Không còn yêu cầu font tới Google Fonts khi hiển thị trang. Fallback Arial/Helvetica/sans-serif; không khẳng định đã chạy trên mọi OS hoặc Safari.

VM/source checks: gallery/party loop, modal reader routing, touch confetti burst34 và không bắn khi vuốt, chặn synthetic click trùng, reduced-motion, particle cap/lifetime, local assets, CSS braces, IDs và JS syntax đều qua. Đường touch được mô phỏng bằng event trong VM; chưa thử trên điện thoại vật lý. Confetti desktop/canvas giữ cơ chế đã kiểm ở V21.

Trang QA tạm đã được đưa ra khỏi dist sau khi kiểm tra. tools/responsive-check.html chỉ là công cụ dev: muốn dùng local, copy tạm vào dist khi chạy static server rồi xóa trước khi xuất bản. Bản cuối giữ nguyên CSS/JS/ảnh/font đã kiểm; chỉ bổ sung tài liệu, workflow và loại bỏ route QA tạm.


## V23 — map alignment correction (16/10/2026)

Chrome browser QA at 320,390,768,1366,1440,1920 CSS px: all toolbar and zone buttons measured 44×44px; no body horizontal overflow. Search, toolbar and zone rail center lines matched at 1366/1440/1920. Tablet768 intentionally wraps tools below search. Map maintained original ratio within stage after ResizeObserver settled; help text remained below image. Screenshot review at390 confirmed circular controls and unobscured map. Interaction smoke tests and reader routing passed. Physical phone/Safari not tested. Temporary QA route removed from production artifact.
