import stylesCss from "../../../styles/New.module.css";

const MenuRight = () => {
    return (
        <div className={stylesCss["aside"]}>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Thống kê Loto</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <a title="Loto Gan" href="/thong-ke-lo-gan.html">Loto Gan</a>
                        </li>
                        <li>
                            <a title="TK Đầu-Đuôi" href="/thong-ke-dau-duoi.html">TK Đầu-Đuôi</a>
                        </li>
                        <li>
                            <a title="Tần suất Loto" href="/thong-ke-tan-suat.html">Tần suất Loto</a>
                        </li>
                        <li>
                            <a title="Thống kê theo Tổng" href="/thong-ke-tong.html">Theo Tổng</a>
                        </li>
                        <li>
                            <a title="Thống kê từ 00 - 99" href="/thong-ke-00-99.html">Từ 00 - 99</a>
                        </li>
                        <li>
                            <a title="Thống kê giải Đặc biệt" href="/thong-ke-giai-dac-biet.html">Giải Đặc biệt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Xổ số Hôm qua</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <a title="Xổ số miền Bắc" href="/xo-so-mien-bac/xsmb-p1.html">XSMB</a>
                        </li>
                        <li>
                            <a title="Xổ số Cần Thơ" href="/xo-so-can-tho/xsct-p1.html">Cần Thơ</a>
                        </li>
                        <li>
                            <a title="Xổ số Đồng Nai" href="/xo-so-dong-nai/xsdn-p1.html">Đồng Nai</a>
                        </li>
                        <li>
                            <a title="Xổ số Sóc Trăng" href="/xo-so-soc-trang/xsst-p1.html">Sóc Trăng</a>
                        </li>
                        <li>
                            <a title="Xổ số Đà Nẵng" href="/xo-so-da-nang/xsdna-p1.html">Đà Nẵng</a>
                        </li>
                        <li>
                            <a title="Xổ số Khánh Hòa" href="/xo-so-khanh-hoa/xskh-p1.html">Khánh Hòa</a>
                        </li>
                        <li>
                            <a title="Xổ số Mega 6/45" href="/xo-so-tu-chon-mega-645.html">Mega 6/45</a>
                        </li>
                        <li>
                            <a title="Xổ số Điện toán 6x36" href="/xo-so-dien-toan-6x36.html">Điện toán 6x36</a>
                        </li>
                        <li>
                            <a title="Xổ số XS Thần tài" href="/xo-so-than-tai.html">XS Thần tài</a>
                        </li>
                        <li>
                            <a title="Xổ số Điện toán 123" href="/xo-so-dien-toan-123.html">Điện toán 123</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Tường thuật Trực tiếp</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <a title="Trực tiếp Xổ số miền Bắc" href="/tuong-thuat-mien-bac/xsmb-tructiep.html">Miền Bắc</a>
                        </li>
                        <li>
                            <a title="Trực tiếp Xổ số miền Trung" href="/tuong-thuat-mien-trung/xsmt-tructiep.html">Miền Trung</a>
                        </li>
                        <li>
                            <a title="Trực tiếp Xổ số miền Nam" href="/tuong-thuat-mien-nam/xsmn-tructiep.html">Miền Nam</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Thống kê vị trí</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <a href="/cau-mien-bac/cau-bach-thu.html">Thống kê duy nhất MB</a>
                        </li>
                        <li>
                            <a href="/cau-mien-bac/soi-cau-xo-so-mien-bac.html">Thống kê vị trí XSMB</a>
                        </li>
                        <li>
                            <a href="/cau-mien-bac/cau-lat-lien-tuc.html">Thống kê vị trí lật liên tục</a>
                        </li>
                        <li>
                            <a href="/cau-mien-bac/cau-ve-ca-cap.html">Thống kê vị trí về cả cặp</a>
                        </li>
                        <li>
                            <a href="/cau-mien-bac/cau-ve-nhieu-nhay.html">Thống kê vị trí về nhiều lần</a>
                        </li>
                        <li>
                            <a href="/cau-mien-nam.html">Thống kê vị trí Miền Nam</a>
                        </li>
                        <li>
                            <a href="/cau-mien-trung.html">Thống kê vị trí Miền Trung</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Thống kê XS Mega</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <a href="/thong-ke-01-45.html">Thống kê 01-45</a>
                        </li>
                        <li>
                            <a href="/thong-ke-nhieu-it.html">Thống kê nhiều ít</a>
                        </li>
                        <li>
                            <a href="/thong-ke-chan-le.html">Thống kê chẵn lẻ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuRight;