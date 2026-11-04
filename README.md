# 🛫 Ôn tập Vé máy bay & Xuất nhập cảnh

Ứng dụng web ôn thi nghiệp vụ hàng không dành cho hướng dẫn viên du lịch quốc tế.

## ✨ Tính năng

- **🗂️ Thẻ nhớ (Flashcards)**: 47 thẻ kiến thức với hiệu ứng lật 3D, hỗ trợ vuốt trên mobile
- **📝 Trắc nghiệm**: 50 câu hỏi bám sát đề thi, chấm điểm tự động
- **⏱️ Tính giờ bay**: Luyện tập tính thời gian bay với múi giờ khác nhau
- **🔍 Tra cứu nhanh**: Tìm kiếm thông tin vé máy bay, mã sân bay, visa, hành lý

## 🎯 Nội dung

### 8 phần kiến thức chính:
1. Đọc vé máy bay (VN300, SSR DOCS, +1, HK/RR/HL/UN)
2. Mã sân bay (IATA & ICAO) - Việt Nam, Trung Quốc, Đông Á
3. Hộ chiếu & MRZ
4. Visa (4 tiêu chí phân loại, visa đoàn TQ, e-Visa)
5. Hành lý (tiêu chuẩn, pin sạc, chất lỏng)
6. Land Tour (FOC, TWN/DBL, B/L/D)
7. Hải quan xuất nhập cảnh
8. Họp đoàn & xử lý tình huống

## 🚀 Sử dụng

### Chạy trực tiếp:
Mở file `index.html` bằng trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge).

### Cấu trúc file:
```
├── index.html          # Giao diện chính
├── data.js            # Dữ liệu câu hỏi & flashcards (MỚI - dễ chỉnh sửa)
├── data.txt           # Tài liệu gốc (để tham khảo)
└── README.md          # File này
```

## 📱 Tương thích

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Tablet
- ✅ Dark/Light mode tự động
- ✅ Responsive design

## ⌨️ Phím tắt

**Thẻ nhớ:**
- `Space`: Lật thẻ
- `←`: Chưa thuộc
- `→`: Đã thuộc
- Hoặc vuốt trái/phải trên mobile

**Trắc nghiệm:**
- `1-4`: Chọn đáp án A-D
- `Enter`: Câu tiếp theo

## 🎨 Tính năng UI/UX

- Hiệu ứng lật thẻ 3D mượt mà
- Confetti animation khi hoàn thành
- Âm thanh phản hồi (có thể tắt)
- Progress tracking
- Touch gestures (vuốt trái/phải)
- Keyboard shortcuts

## 📝 Cập nhật dữ liệu

**Dễ dàng chỉnh sửa file `data.js`:**

```javascript
// Thêm flashcard mới
const CARDS = [
  ["Câu hỏi", "Câu trả lời với \n xuống dòng"],
  // ...
];

// Thêm câu trắc nghiệm mới
const QS = [
  ["Câu hỏi", ["Đáp án A", "B", "C", "D"], chỉ_số_đúng],
  // Chỉ số bắt đầu từ 0: A=0, B=1, C=2, D=3
];

// Thêm múi giờ cho bài tập tính giờ bay
const TZ = [
  ["Tên sân bay (Mã)", chênh_lệch_giờ],
  ["Tokyo (NRT)", 2],  // Nhanh hơn VN 2 giờ
];
```

## 📄 Nguồn tài liệu

Dữ liệu được tổng hợp từ tài liệu "Ôn tập Vé máy bay & Xuất nhập cảnh – Bản dễ hiểu (Đầy đủ 8 phần + Đáp án Đề 3)".

## 🛠️ Công nghệ

- HTML5 + CSS3 + Vanilla JavaScript
- Không cần framework hay thư viện ngoài
- Không cần build tools
- Chạy offline 100%
- Dữ liệu tách riêng file `data.js` để dễ bảo trì

## 🔄 Cập nhật mới

- ✅ **Tách dữ liệu ra file riêng** `data.js` - dễ chỉnh sửa và bảo trì
- ✅ Tăng số lượng flashcards lên **47 thẻ** (từ 26 thẻ)
- ✅ Tăng số lượng câu trắc nghiệm lên **50 câu** (từ 26 câu)
- ✅ Bổ sung đầy đủ 8 phần kiến thức từ tài liệu gốc
- ✅ Cập nhật múi giờ Bangkok (0h) vào bài tập tính giờ bay

---

Made with ❤️ for tour guides
