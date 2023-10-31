import stylesCss from "../../styles/PerpetualCalendar.module.css";

const PerpetualCalendar = () => {
    return (
        <div>
            <form className={stylesCss["calendar-form"]}>
                <div className={stylesCss["perpetual-calendar"]}>
                    <div className={stylesCss["calendar-title"]}>
                        <h1 className={stylesCss["calendar-title-title"]}>Xem lịch vạn niên ngày 03 tháng 11 năm 2023</h1>
                    </div>
                    <div className={stylesCss["calendar-content"]}>
                        <div className={stylesCss["content-title"]}>Tháng 11 Năm 2023</div>
                        <div className={stylesCss["content-day"]}>
                            <span className={stylesCss["content-day-prev"]}></span>
                            <div className={stylesCss["content-day-now"]}>03</div>
                            <span className={stylesCss["content-day-next"]}></span>
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-info"]}>Quảng kết chúng duyên, chính là không làm tổn thương bất cứ người nào.</div>
                    <div className={stylesCss["calendar-day-of-week"]}>Thứ Sáu</div>
                    <div className={stylesCss["calendar-day-al"]}>
                        <ul>
                            <li>Ngày Ất Sửu</li>
                            <li className={stylesCss["calendar-number"]}>20</li>
                            <li>Tháng Nhâm Tuất</li>
                        </ul>
                        <ul>
                            <li>Giờ Bính Tý</li>
                            <li className={stylesCss["calendar-month"]}>Tháng 9</li>
                            <li>Năm Quý Mão</li>
                        </ul>
                    </div>
                    <div className={stylesCss["qc_mgid"]}>
                    </div>
                    <div className={stylesCss["calendar-day-tho"]}>
                        <div>*****</div>
                        Khuê tinh tạo tác đắc trinh tường,
                        <br />Gia hạ vinh hòa đại cát xương,
                        <br />Nhược thị táng mai âm tốt tử,
                        <br />Đương niên định chủ lưỡng tam tang.
                        <br />Khán khán vận kim, hình thương đáo,
                        <br />Trùng trùng quan sự, chủ ôn hoàng.
                        <br />Khai môn phóng thủy chiêu tai họa,
                        <br />Tam niên lưỡng thứ tổn nhi lang.
                        <br />
                        <div>--------------------------</div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Thông tin chung</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div className={stylesCss["calendar-lich-bold"]}>
                            Ngày dương: 02 tháng 11 năm 2023
                        </div>
                        <div className={stylesCss["calendar-lich-bold"]}>
                            Ngày âm: 19 tháng 9 năm 2023
                        </div>
                        <div className={stylesCss["calendar-lich-bold"]}>
                            Giờ Giáp Tý, Ngày Giáp T, Tháng Nhâm Tuất, Năm Quý Mão
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title-red"]}>
                        <h2>Kết quả xổ số Miền Bắc</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Đợi quay thưởng ...
                    </div>
                    <div className={stylesCss["calendar-day-row-title-red"]}>
                        <h2>KẾT QUẢ XỔ SỐ MIỀN TRUNG</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Đợi quay thưởng ...
                    </div>
                    <div className={stylesCss["calendar-day-row-title-red"]}>
                        <h2>KẾT QUẢ XỔ SỐ MIỀN NAM</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Đợi quay thưởng ...
                    </div>
                    <div className={stylesCss["qc_mgid"]}>
                        <div className={stylesCss["M786807ScriptRootC1275180"]}></div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Giờ hoàng đạo</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Tý (23-1)  ,  Mão (5-7)  ,  Thân (15-17)    ,  Sửu (1-3)  ,  Ngọ (11-13)  ,  Dậu (17-19)
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Mệnh</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Vàng trong biển (Kim)
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Tiết khí</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Sương giáng
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Trực</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Mãn (Nên cầu tài, cầu phúc, tế tự)
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Tuổi xung khắc</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        Mậu Ngọ, Nhâm Ngọ, Canh Dần, Canh Thân
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Hướng xuất hành</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div className={stylesCss["calendar-row-item"]}>Hỷ Thần: Đông Bắc</div>
                        <div className={stylesCss["calendar-row-item"]}>Tài Thần: Đông Nam</div>
                        <div className={stylesCss["calendar-row-item"]}>Hắc Thần: Đông Nam</div>
                        <div className={stylesCss["calendar-row-item"]}>Ngày này, hướng Đông Nam vừa là hướng tốt, vừa là hướng xấu nên tốt xấu trung hòa chỉ là bình thường!<br /></div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>Sao tốt</h2>
                    </div>
                    <div class="calendar-day-row-desc">
                        <span className={stylesCss["calendar-row-item"]}>Thiên phú: Tốt mọi việc, nhất là xây nhà, khai trương an tang
                            <br />Minh tinh trùng với Thiên lao Hắc đạo (xấu): Tốt mọi việc
                            <br />Dân nhật, Thời đức: Tốt mọi việc
                            <br />Lộc Khố Thiên phú: Tốt cho việc cầu tài lộc, khai trương, giao dịch
                            <br />Phổ hô: Tốt cho việc làm phúc, giá thú, xuất hành
                        </span>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>SAO XẤU</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div className={stylesCss["calendar-row-item"]}>
                            Âm thác: Kỵ xuất hành, giá thú, an tang<br />
                            Thổ ôn (Thiên cẩu): Kỵ xây dựng, đào ao, đào giếng, xấu về tế tự
                        </div>
                        <div className={stylesCss["calendar-row-item"]}>Thiên ngục thiên hoả: Xấu mọi việc, xấu về lợp nhà</div>
                        <div className={stylesCss["calendar-row-item"]}>Phi ma sát (tái sát): Kỵ giá thú, nhập trạch</div>
                        <div className={stylesCss["calendar-row-item"]}>Hoàng sa: Xấu về xuất hành</div>
                        <div className={stylesCss["calendar-row-item"]}>Ngũ quỷ: Kỵ xuất hành</div>
                        <div className={stylesCss["calendar-row-item"]}>Quả tú: Xấu về giá thú</div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>NHỊ THẬP BÁT TÚ</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div className={stylesCss["calendar-row-item"]}>
                            Sao: Khuê
                        </div>
                        <div className={stylesCss["calendar-row-item"]}>Ngũ hành: Mộc</div>
                        <div className={stylesCss["calendar-row-item"]}>Động vật: Lang (Sói)</div>
                        <div className={stylesCss["calendar-row-item"]}>KHUÊ MỘC LANG : Mã Vũ: xấu </div>
                        <div className={stylesCss["calendar-row-item"]}>(Bình Tú) Tướng tinh con chó sói, chủ trị ngày thứ 5.</div>
                        <div className={stylesCss["calendar-row-item"]}>Nên làm: Tạo dựng nhà phòng, nhập học, ra đi cầu công danh, cắt áo.</div>
                        <div className={stylesCss["calendar-row-item"]}>Kiêng cữ: Chôn cất, khai trương, trổ cửa dựng cửa, khai thông đường nước, đào ao móc giếng, thưa kiện, đóng giường lót giường.</div>
                        <div className={stylesCss["calendar-row-item"]}>Ngoại lệ: Sao Khuê là một trong Thất Sát Tinh, nếu đẻ con nhằm ngày này thì nên lấy tên Sao Khuê hay lấy tên Sao của năm tháng mà đặt cho trẻ dễ nuôi.</div>
                        <div className={stylesCss["calendar-row-item"]}>
                            Sao Khuê hãm địa tại ngày Thân: Văn khoa thất bại.
                            Tại ngày Ngọ là chỗ Tuyệt gặp Sanh, mưu sự đắc lợi, nhất là gặp ngày Canh Ngọ.
                        </div>
                        <div className={stylesCss["calendar-row-item"]}>
                            Tại ngày Thìn tốt vừa vừa.
                            Tại ngày Thân sao Khuê đăng viên: Tiến thân danh.
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-bottom"]}>
                        <div className={stylesCss["calendar-day-prev"]}>01-11-2023</div>
                        <div className={stylesCss["calendar-day-next"]}>03-11-2023</div>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default PerpetualCalendar;