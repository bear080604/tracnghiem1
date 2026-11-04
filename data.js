// ==========================================================================
// DỮ LIỆU ÔN THI: VÉ MÁY BAY & XUẤT NHẬP CẢNH
// Nguồn: data.txt - Đầy đủ 8 phần + Đáp án Đề 3
// ==========================================================================

// FLASHCARDS - THẺ GHI NHỚ
const CARDS = [
  // PHẦN I: ĐỌC VÉ MÁY BAY
  ["VN300 Y TU14JAN SGNNRT HK15 0010 0745", "VN300: Vietnam Airlines, chuyến 300\nY: phổ thông giá đầy đủ\nTU14JAN: Thứ Ba 14/1\nSGN→NRT: Tân Sơn Nhất → Narita\nHK15: 15 chỗ đã xác nhận\n00:10 đi (giờ VN), 07:45 đến (giờ Tokyo)\nBay 5h35, khách có mặt 21:10 tối 13/01"],
  
  ["SSR DOCS … P/VNM/số HC/VNM/15MAR58/M/20AUG32/TRAN/VAN BINH", "P: hộ chiếu · VNM: nước cấp · số HC · VNM: quốc tịch\n15/03/1958: ngày sinh · M: nam\n20/08/2032: hết hạn\nTRAN/VAN BINH: họ/tên\n⚠️ Phải khớp tuyệt đối từng ký tự với hộ chiếu"],
  
  ["3U8254 SJWCTU 2240 0110+1", "3U: Sichuan Airlines\nSJW Thạch Gia Trang → CTU Thành Đô\nĐi 22:40, đến 01:10 ngày hôm sau (+1)\n⚠️ HDV phải báo khách & điều hành giữ phòng nhận muộn"],
  
  ["TW122 SGN-ICN, Thu 14-Mar, bay 01:30. Có mặt khi nào?", "22:30 ngày 13/03 (tối hôm trước)\n✓ Bay quốc tế: trước 2–3 giờ (đoàn đông: 3 giờ)\n✓ Bay sau 0h → tập trung tối hôm trước"],
  
  ["EK393 SGN-DXB: 23:55 → 04:00 giờ Dubai (chậm hơn VN 3 giờ). Bay bao lâu?", "Đáp án: 7h05\nCách tính:\n• 04:00 + 3h = 07:00 giờ VN\n• 07:00 − 23:55 = 7h05\n✓ Đổi giờ đến về giờ VN, rồi trừ giờ đi"],
  
  ["Chênh lệch múi giờ so với VN", "Nhật, Hàn: +2h\nTrung Quốc, Singapore, Đài Loan: +1h\nThái Lan: 0h\nDubai: −3h"],
  
  ["Cách tính thời gian bay", "1. Đổi giờ đến về giờ VN (cộng/trừ múi giờ)\n2. Trừ giờ đi\n⚠️ Giờ trên vé = giờ địa phương"],
  
  ["Giờ có mặt chuyến quốc tế", "Trước 2–3 giờ (đoàn đông: 3 giờ)\n⚠️ Bay sau 0h → tập trung tối hôm trước\nVD: Bay 01:30 ngày 14/03 → Có mặt 22:30 ngày 13/03"],
  
  ["HK / RR / HL / UN", "HK: đã xác nhận (confirmed)\nRR: tái xác nhận (reconfirmed)\nHL: danh sách chờ (hold list)\nUN: hãng không có chỗ (unable)\n✓ Chỉ giao vé khi HK hoặc RR"],
  
  ["PNR là gì?", "Mã đặt chỗ, thường 6 ký tự (ví dụ NW4WSJ)\nDùng chung cho cả booking"],
  
  ["3 số đầu của số vé (13 số)", "Mã hãng phát hành vé\n784: China Southern\n738: Vietnam Airlines"],
  
  ["WCHR / WCHS / WCHC", "WCHR: đi bộ xa khó, tự lên xuống thang\nWCHS: không tự lên xuống thang\nWCHC: không tự di chuyển hoàn toàn"],
  
  ["Open-jaw là gì?", "Vào một thành phố, ra từ thành phố khác\nVD: vào PEK, về từ PVG\nvào KHH, về từ TPE"],
  
  ["+1 sau giờ đến", "Hạ cánh ngày hôm sau\nHDV phải báo rõ cho khách\nĐiều hành dặn khách sạn giữ phòng nhận muộn"],
  
  ["IATA và ICAO", "IATA: 3 chữ (SGN), dùng đặt vé\nICAO: 4 chữ (VVTS), dùng điều hành bay"],
  
  // PHẦN II: MÃ SÂN BAY
  ["SGN · HAN · DAD · CXR · PQC", "Tân Sơn Nhất (TP.HCM)\nNội Bài (Hà Nội)\nĐà Nẵng\nCam Ranh (Nha Trang)\nPhú Quốc"],
  
  ["PEK · PKX · PVG · SHA", "Bắc Kinh Thủ Đô\nBắc Kinh Đại Hưng\nThượng Hải Phố Đông (quốc tế)\nThượng Hải Hồng Kiều (nội địa)"],
  
  ["CTU · SJW · HGH · KMG · NKG · TEN", "Thành Đô\nThạch Gia Trang\nHàng Châu\nCôn Minh\nNam Kinh\nĐồng Nhân"],
  
  ["ICN · GMP · PUS · CJU", "Incheon (Seoul)\nGimpo (Seoul)\nBusan\nJeju"],
  
  ["NRT · HND · KIX", "Narita (Tokyo)\nHaneda (Tokyo)\nKansai (Osaka)"],
  
  ["KHH · TPE", "Cao Hùng\nĐào Viên (Đài Bắc)"],
  
  ["BKK · DMK · SIN · KUL", "Suvarnabhumi (Bangkok)\nDon Mueang (Bangkok)\nChangi (Singapore)\nKuala Lumpur"],
  
  ["DXB · HKG · MFM", "Dubai\nHồng Kông\nMa Cao"],
  
  // PHẦN III: HỘ CHIẾU
  ["Loại hộ chiếu P / D / S", "P: phổ thông (Personal/Passport)\nD: ngoại giao (Diplomatic)\nS: công vụ (Service)"],
  
  ["DOB · POB · DOI · DOE", "DOB: ngày sinh (Date of Birth)\nPOB: nơi sinh (Place of Birth)\nDOI: ngày cấp (Date of Issue)\nDOE: ngày hết hạn (Date of Expiry)"],
  
  ["MRZ là gì?", "Vùng đọc máy cuối trang hộ chiếu\n2 dòng, mỗi dòng 44 ký tự\nMáy quét tự động tại quầy check-in"],
  
  ["Hộ chiếu cần còn hạn bao lâu?", "Ít nhất 6 tháng\nCòn trang trống\nKhông rách, không ướt"],
  
  ["Visa khác hộ chiếu thế nào?", "Hộ chiếu: do nước mình cấp\nVisa: do nước đến cấp để cho nhập cảnh\n⚠️ Có hộ chiếu mới xin được visa"],
  
  // PHẦN IV: VISA
  ["Phân loại visa (4 tiêu chí)", "1. Mục đích: du lịch, công tác, du học, thăm thân\n2. Số lần: Single, Multiple\n3. Hình thức: dán, rời, đoàn, e-visa, VOA\n4. Đối tượng: cá nhân, đoàn, ngoại giao"],
  
  ["Visa đoàn Trung Quốc", "Cấp trên danh sách chung\nCả đoàn nhập xuất cảnh cùng nhau\nTuyệt đối không tách đoàn\nTrưởng đoàn giữ hộ chiếu suốt chuyến"],
  
  ["Port Visa Notification", "Thông báo visa đoàn nhận tại cửa khẩu\nHiệu lực 1 tháng\nPhải có dấu và số phê duyệt"],
  
  ["Indian e-Visa: Multiple, 365 days, ≤ 90 days", "Nhập nhiều lần\nHiệu lực 1 năm\nMỗi lần ở tối đa 90 ngày liên tục"],
  
  // PHẦN V: HÀNH LÝ
  ["Hành lý tiêu chuẩn", "7 kg xách tay + 1 kiện 20 kg ký gửi\nQuá cân phải trả phí quá cước"],
  
  ["Chất lỏng xách tay quốc tế", "Mỗi chai ≤ 100 ml\nĐựng chung túi trong suốt có khóa\nTổng tối đa 1 lít"],
  
  ["Pin sạc dự phòng", "Chỉ xách tay, cấm ký gửi\nTrên 100 Wh cần hãng đồng ý\nTrên 160 Wh bị cấm hoàn toàn"],
  
  ["Bay nội địa Trung Quốc, pin sạc", "Cần dấu 3C (CCC) rõ nét\nDấu CE châu Âu không thay thế được\nÁp dụng từ 28/6/2025"],
  
  ["Tiền mặt không phải khai báo", "≤ 5.000 USD và ≤ 15.000.000 đồng\nVượt thì khai báo, kèm giấy xác nhận ngân hàng\nhoặc tờ khai lần trước"],
  
  ["Hàng trên 300 USD (máy ảnh, laptop)", "Khai báo khi xuất cảnh\nĐể khi về chứng minh là đồ mang đi\nKhông bị tính thuế như hàng mua mới"],
  
  ["Hàng mua nước ngoài vượt mức miễn thuế (≈10 triệu)", "Khai báo, nộp thuế phần vượt\nGiữ hóa đơn\nĐi luồng đỏ, không đi luồng xanh"],
  
  ["Mất vali ký gửi - 5 bước", "1. Đến quầy Lost & Found ngay\n2. Lập PIR (Property Irregularity Report)\n3. Để lại địa chỉ khách sạn\n4. Hỗ trợ mua vật dụng, giữ hóa đơn\n5. Báo cáo công ty"],
  
  // PHẦN VI: LAND TOUR
  ["FOC · T/L · TWN · DBL", "FOC: miễn phí 1 suất (Free of Charge)\nT/L: trưởng đoàn (Tour Leader)\nTWN: 2 giường đơn (Twin)\nDBL: 1 giường đôi (Double)"],
  
  ["B / L / D · TPL · SGL", "B/L/D: Breakfast, Lunch, Dinner\nTPL: phòng 3 người (Triple)\nSGL: phòng 1 người (Single)"],
  
  // PHẦN VII & VIII: HẢI QUAN & HỌP ĐOÀN
  ["Khách bị lạc đoàn", "1. Đứng yên hoặc về điểm hẹn\n2. Gọi trưởng đoàn\n3. Đưa danh thiếp khách sạn cho cảnh sát\n4. Không đi theo người lạ"],
  
  ["HDV có được mang hộ tiền/hàng cho khách?", "Tuyệt đối KHÔNG\nVi phạm pháp luật\nMất quyền lợi bảo hiểm"],
  
  ["Khách mất hộ chiếu ở nước ngoài", "1. Báo cảnh sát địa phương lấy xác nhận\n2. Đến Đại sứ quán/Lãnh sự quán VN\n3. Xin cấp giấy thông hành"],
  
  ["Thứ tự viết tắt MO, TU, WE, TH, FR, SA, SU", "Monday (Hai), Tuesday (Ba), Wednesday (Tư)\nThursday (Năm), Friday (Sáu)\nSaturday (Bảy), Sunday (CN)"],
  
  ["Tháng viết tắt JAN...DEC", "JAN, FEB, MAR (1-3)\nAPR, MAY, JUN (4-6)\nJUL, AUG, SEP (7-9)\nOCT, NOV, DEC (10-12)"]
];

// TRẮC NGHIỆM
const QS = [
  // Đề 3 - Câu 1-7: Đọc vé
  ["HK trên vé nghĩa là gì?", ["Danh sách chờ", "Chỗ đã xác nhận", "Hãng không có chỗ", "Đã hủy"], 1],
  
  ["Mã nào là hãng không thể cung cấp chỗ?", ["HK", "RR", "HL", "UN"], 3],
  
  ["Chỉ giao vé cho đoàn khi trạng thái là:", ["HL hoặc UN", "HK hoặc RR", "HL hoặc RR", "Bất kỳ"], 1],
  
  ["Ba số đầu của số vé là:", ["Số chuyến bay", "Mã hãng phát hành vé", "Mã đặt chỗ", "Mã sân bay"], 1],
  
  ["Hạng đặt chỗ Y là:", ["Thương gia", "Phổ thông giá đầy đủ", "Hạng nhất", "Vé trẻ em"], 1],
  
  ["Dấu +1 sau giờ đến nghĩa là:", ["Trễ 1 giờ", "Đến ngày hôm sau", "Thêm 1 khách", "Nối chuyến"], 1],
  
  ["TW122 bay 01:30 ngày 14/03, có mặt lúc:", ["01:00 ngày 14/03", "22:30 ngày 13/03", "23:30 ngày 13/03", "00:30 ngày 14/03"], 1],
  
  // Câu 8-9: Mã sân bay
  ["Mã ICAO của sân bay gồm:", ["2 ký tự", "3 ký tự", "4 ký tự", "6 ký tự"], 2],
  
  ["Nha Trang bay đến sân bay nào?", ["NHA", "CXR", "DAD", "HUI"], 1],
  
  ["PVG là:", ["Hồng Kiều", "Phố Đông", "Đại Hưng", "Thủ Đô"], 1],
  
  ["Tokyo có 2 sân bay là:", ["NRT và KIX", "NRT và HND", "HND và KIX", "NRT và ICN"], 1],
  
  ["SGN là mã của sân bay:", ["Nội Bài", "Tân Sơn Nhất", "Đà Nẵng", "Cam Ranh"], 1],
  
  ["ICN là sân bay của:", ["Tokyo", "Seoul", "Bắc Kinh", "Bangkok"], 1],
  
  ["Thượng Hải có 2 sân bay:", ["PEK và PKX", "PVG và SHA", "NRT và HND", "ICN và GMP"], 1],
  
  // Câu 10: Phân loại visa
  ["Visa phân loại theo mấy tiêu chí?", ["2", "3", "4", "5"], 2],
  
  ["Visa đoàn Trung Quốc:", ["Dán từng hộ chiếu", "Cấp trên danh sách chung, cả đoàn đi cùng", "Khách tách đoàn tự do", "Chỉ cho người nước ngoài"], 1],
  
  // Hộ chiếu
  ["Hộ chiếu loại D là:", ["Phổ thông", "Công vụ", "Ngoại giao", "Tạm thời"], 2],
  
  ["DOE trên hộ chiếu là:", ["Ngày sinh", "Ngày cấp", "Ngày hết hạn", "Nơi sinh"], 2],
  
  ["MRZ gồm:", ["1 dòng 44 ký tự", "2 dòng, mỗi dòng 44 ký tự", "3 dòng 30 ký tự", "2 dòng 20 ký tự"], 1],
  
  ["Hộ chiếu cần còn hạn ít nhất:", ["3 tháng", "6 tháng", "12 tháng", "24 tháng"], 1],
  
  // Visa
  ["Visa do ai cấp?", ["Nước mình", "Nước đến", "Hãng hàng không", "Công ty du lịch"], 1],
  
  ["Port Visa Notification có hiệu lực:", ["1 tuần", "1 tháng", "6 tháng", "1 năm"], 1],
  
  ["Indian e-Visa 365 days có nghĩa:", ["Ở được 365 ngày liên tục", "Hiệu lực 1 năm", "Phải về sau 365 ngày", "Gia hạn được 1 năm"], 1],
  
  // Hành lý
  ["Tiêu chuẩn hành lý trong tài liệu:", ["5 + 15 kg", "7 + 20 kg", "10 + 23 kg", "7 + 30 kg"], 1],
  
  ["Chất lỏng xách tay quốc tế mỗi chai tối đa:", ["50 ml", "100 ml", "150 ml", "500 ml"], 1],
  
  ["Pin sạc dự phòng phải để ở:", ["Ký gửi", "Xách tay", "Cả hai đều được", "Gửi riêng ở quầy"], 1],
  
  ["Pin trên mức nào bị cấm hoàn toàn?", ["100 Wh", "160 Wh", "200 Wh", "300 Wh"], 1],
  
  ["Pin sạc bay nội địa Trung Quốc cần dấu:", ["CE", "3C (CCC)", "FCC", "UL"], 1],
  
  // Hải quan
  ["Tiền mặt không phải khai báo:", ["3.000 USD", "5.000 USD", "7.000 USD", "10.000 USD"], 1],
  
  ["Hàng trên bao nhiêu nên khai báo khi xuất cảnh?", ["100 USD", "300 USD", "1.000 USD", "5.000 USD"], 1],
  
  ["Hàng mua nước ngoài vượt mức miễn thuế thì đi:", ["Luồng xanh", "Luồng đỏ", "Luồng nào cũng được", "Cửa quá cảnh"], 1],
  
  ["Mất vali ký gửi, biên bản lập là:", ["PNR", "PIR", "SSR", "FOC"], 1],
  
  // Tính giờ
  ["EK393 SGN-DXB: 23:55 → 04:00 (Dubai −3h VN). Bay bao lâu?", ["6h05", "7h05", "8h05", "4h05"], 1],
  
  ["Chuyến bay 01:40 ngày 23/11, khách tập trung lúc:", ["01:00 ngày 23/11", "22:30 ngày 22/11", "22:40 ngày 22/11", "00:00 ngày 23/11"], 1],
  
  // SSR & Đặc biệt
  ["WCHC dành cho khách:", ["Đi bộ xa khó", "Không tự lên xuống thang", "Hoàn toàn không tự di chuyển", "Đi cùng trẻ nhỏ"], 2],
  
  ["WCHR là:", ["Không tự di chuyển", "Đi bộ xa khó, tự lên xuống thang", "Không tự lên xuống thang", "Cần oxy"], 1],
  
  // Land Tour
  ["FOC nghĩa là:", ["Flight Confirmed", "Free of Charge", "Final Check", "Full Course"], 1],
  
  ["21+1 T/L nghĩa là:", ["21 phòng + 1 trưởng đoàn", "21 khách + 1 trưởng đoàn", "21 ngày + 1 đêm", "21 USD + 1 tip"], 1],
  
  ["TWN là:", ["1 giường đôi", "2 giường đơn", "3 người", "Phòng đơn"], 1],
  
  // Họp đoàn & An toàn
  ["Khách lạc đoàn phải làm gì TRƯỚC TIÊN?", ["Gọi taxi về khách sạn", "Đứng yên hoặc về điểm hẹn", "Hỏi đường về sân bay", "Đi theo người địa phương"], 1],
  
  ["HDV có được mang hộ tiền cho khách qua hải quan?", ["Được nếu khách yêu cầu", "Tuyệt đối không", "Được nếu dưới 5.000 USD", "Được nếu có biên nhận"], 1],
  
  ["Khách mất hộ chiếu ở nước ngoài, liên hệ:", ["Công ty du lịch", "Hãng hàng không", "Đại sứ quán VN", "Cảnh sát sân bay"], 2],
  
  // Múi giờ
  ["Nhật Bản nhanh hơn VN:", ["+1h", "+2h", "+3h", "0h"], 1],
  
  ["Singapore nhanh hơn VN:", ["+1h", "+2h", "0h", "−1h"], 0],
  
  ["Thái Lan so với VN:", ["Nhanh hơn 1h", "Chậm hơn 1h", "Cùng giờ", "Nhanh hơn 2h"], 2],
  
  ["Dubai so với VN:", ["Nhanh hơn 3h", "Chậm hơn 3h", "Nhanh hơn 2h", "Chậm hơn 2h"], 1]
];

// TIMEZONE DATA CHO TÍNH GIỜ BAY
const TZ = [
  ["Tokyo (NRT)", 2],
  ["Seoul (ICN)", 2],
  ["Bắc Kinh (PEK)", 1],
  ["Singapore (SIN)", 1],
  ["Đài Bắc (TPE)", 1],
  ["Bangkok (BKK)", 0],
  ["Dubai (DXB)", -3]
];
