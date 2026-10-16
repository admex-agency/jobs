[README.md](https://github.com/user-attachments/files/33541077/README.md)

# Hanoi FIREBEAT World Festival — V23

Website tĩnh HTML/CSS/JavaScript, không cần npm hoặc build. Toàn bộ nội dung xuất bản nằm trong `dist/`. Ảnh, biểu tượng và font Be Vietnam Pro đã được đóng gói local; không cần tài khoản Sites, API key hay Google Fonts để chạy website.

## Deploy lên GitHub Pages

Giải nén gói source. Đưa **nội dung bên trong thư mục FIREBEAT-V23** lên root repository GitHub, bao gồm cả thư mục `.github`. Giữ `dist/` nguyên cấu trúc, không đổi tên riêng từng file asset. Nhánh mặc định của workflow là `main`; nếu repository dùng nhánh khác thì sửa `.github/workflows/deploy-pages.yml` tương ứng.

Trong Settings → Pages → Build and deployment, chọn **GitHub Actions**. Push lên `main`, hoặc vào Actions → Publish FIREBEAT to GitHub Pages → Run workflow. Workflow upload trực tiếp `dist/` và xuất bản, không chạy bundler. URL GitHub Pages do workflow trả về. Các đường dẫn asset, bài viết và chính sách đều tương đối, hỗ trợ cả subdirectory project Pages lẫn domain riêng.

## Gắn tên miền của admeX

Cần tên repository/organization GitHub và tên miền hoặc subdomain chính xác do admeX chọn. Gói này không tự chọn domain, tạo CNAME giả hoặc thay đổi DNS. Sau khi có domain: xác minh domain trong GitHub, nhập tại Settings → Pages → Custom domain rồi cấu hình DNS tương ứng ở nhà cung cấp domain. Với subdomain, CNAME của DNS trỏ tới hostname Pages `ACCOUNT.github.io`, không kèm tên repository. Với domain gốc, áp dụng bản ghi được GitHub hướng dẫn. Bật Enforce HTTPS sau khi chứng chỉ sẵn sàng.

Workflow GitHub Actions không cần file `dist/CNAME`; domain được lưu trong cấu hình Pages. Nếu chuyển sang publish từ branch, dùng file CNAME ở thư mục xuất bản theo hướng dẫn GitHub. Không đưa domain vào CNAME khi chưa xác nhận.

Tài liệu chính thức đã đối chiếu ngày16/10/2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Chỉnh nội dung

`dist/index.html`: cấu trúc trang, headings và các dialog. `dist/app.js`: combo, vùng vị, agenda, FAQ, quà tặng, gallery và trạng thái tương tác. `dist/content.json`: nội dung bài viết và chính sách, mở dưới dạng popup có URL riêng `?bai=...` hoặc `?chinh-sach=...`. `dist/celebration.js`: hiệu ứng confetti. `dist/fonts.css` và `dist/assets/fonts/`: font tự lưu trữ; phải giữ `OFL.txt` khi phân phối.

CSS theo thứ tự từ `style.css`, `v7.css` … `v23.css`; V23 xử lý responsive sau các nền tảng đã duyệt. Giữ thứ tự stylesheet khi chỉnh. Tài liệu `DESIGN.md` và `UI-GUIDANCE-V23.md` ghi quyết định thiết kế, trạng thái tính năng và QA. Không bao gồm repo Git, credential hoặc manifest hosting Sites trong ZIP bàn giao.

## Nội dung concept

Chưa có backend bán hàng/thanh toán. Combo/menu/giá, danh sách quán, quà tặng, agenda, thương hiệu và chính sách chưa xác nhận phải được cập nhật chính thức trước khi nhận giao dịch. Ảnh AI và phối cảnh concept không phải ảnh tư liệu của sự kiện đã diễn ra. Chính sách và liên kết social cần nội dung/URL chính thức. Website không có form thu dữ liệu hoặc service worker/cache riêng.

## Xem và kiểm tra local

Dùng một static HTTP server để phục vụ `dist/`; không mở bằng file:// vì bài viết được tải từ JSON. Các breakpoint cần kiểm tra:320/375/390/430,768/1024,1366/1440/1920px. Node có thể kiểm tra cú pháp bằng `node --check dist/app.js` và `node --check dist/celebration.js`. Không cần cài React hay React Bits Pro; hiệu ứng dùng code native của dự án.

Chạy smoke test tương tác bằng `node tools/interaction-check.cjs` và `node tools/reader-check.cjs`. Đây là mô phỏng hành vi, không thay thế kiểm tra browser hoặc điện thoại thật. Báo cáo kiểm tra trực tiếp nằm trong `QA-RESPONSIVE.md`.
