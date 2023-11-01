import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";

const PredictSpecialPrizes = () => {

    return (
        <div className={stylesCss["page-wrapper"]}>
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Soi cầu giải đặc biệt</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline"]}>
                                    <div className={stylesCss["description-bar-box"]}>
                                        <i>
                                        Soi cầu lô trượt sẽ dự đoán được các cặp số không xuất hiện trong lần quay kế tiếp. Để xem rất đơn giản bạn chỉ cần chọn Biên ngày, Số ngày cầu chạy và kiểu soi rồi bấm nút Xem kết quả để xem. Khi bạn muốn xem các cầu trong quá khứ bạn có thể nhập Biên ngày là một ngày khác trước đó.
                                            <br></br>
                                            <b>Chú ý:</b>
                                            - Số ngày cầu chạy: khi xem một kiểu soi mới yêu cầu bạn chọn số ngày bằng 1 cho lần xem đầu. Các lần xem sau bạn có thể xem số ngày lớn hơn.<br></br>
                                            - Cầu trượt cả cặp: là cầu được tính khi ghép cả 2 vị trí cầu theo chiều xuôi hoặc ngược. VD: 68, 86 là cầu trượt cả cặp, không xuất hiện trong 27 giải là cầu trượt đúng.<br></br>
                                            - Cầu trượt Bạch thủ ghép xuôi: là cầu được tính khi ghép 2 vị trí số màu xanh theo chiều từ trên xuống.<br></br>
                                            - Cầu trượt Bạch thủ ghép ngược: là cầu được tính khi ghép 2 vị trí số màu xanh theo chiều từ dưới lên.<br></br>
                                        </i>
                                    </div>
                                    <div align="center">
                                        <table cellPadding="5" cellSpacing="5">
                                            <tbody>
                                                <tr>
                                                    <td align="center">Biên ngày soi cầu (Ngày/Tháng/Năm):&nbsp;
                                                        <input type="text" className={stylesCss["form-control"]} name="top_day" value="30/10/2023" maxLength="10" />

                                                    </td>
                                                    <td align="center">Số ngày cầu chạy:&nbsp;
                                                        <select name="number" className={stylesCss["form-control"]}>
                                                            <option value="1" selected="selected">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" align="center">
                                                        Kiểu soi:&nbsp;
                                                        <input type="radio" name="kieu_soi" checked="checked" value="1" id="kieu_soi_1" />
                                                        <label for="kieu_soi_1">&nbsp;Cầu chạm số&nbsp;</label>
                                                        <input type="radio" name="kieu_soi" value="2" id="kieu_soi_2" />
                                                        <label for="kieu_soi_2">&nbsp;Cầu chạm tổng&nbsp;</label>
                                                        <input type="radio" name="kieu_soi" value="3" id="kieu_soi_3" />
                                                        <label for="kieu_soi_3">&nbsp;Cầu chạm bộ số&nbsp;</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" align="center">
                                                        <br></br>
                                                        <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>Bạn đang xem toàn bộ cầu có số ngày cầu chạy là <font color="#FF3300"><b>2</b></font> ngày</b>
                                <div className={stylesCss["info-space"]}>
                                    <span className={stylesCss["sred"]}>Chú ý:</span> Để xem vị trí của một cầu bạn chỉ cần di chuột lên link của cầu là thấy..
                                </div>
                            </div>

                            <div className={stylesCss["container-triangular"]} align="center">
                                <table className={stylesCss["table-bordered"]}>
                                    <tbody>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 0</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 6 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=6&amp;y=13">
                                                    00
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 13 - Vị trí 2: 14" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=13&amp;y=14">
                                                    01
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" title="Vị trí tạo cầu >> Vị trí 1: 6 - Vị trí 2: 10" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=6&amp;y=10">
                                                    04
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 1</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 12 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=12&amp;y=13">
                                                    10
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 2</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 8 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=8&amp;y=13">
                                                    20
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 8 - Vị trí 2: 10" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=8&amp;y=10">
                                                    24
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 8 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=8&amp;y=11">
                                                    26
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 3</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 6" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=6">
                                                    30
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 12" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=12">
                                                    31
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 8" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=8">
                                                    32
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 1" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=1">
                                                    34
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 2" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=2">
                                                    36
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 3" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=3">
                                                    38
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 4</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 1 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=1&amp;y=13">
                                                    40
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 4 - Vị trí 2: 14" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=4&amp;y=14">
                                                    41
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 4 - Vị trí 2: 8" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=4&amp;y=8">
                                                    42
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 1 - Vị trí 2: 10" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=1&amp;y=10">
                                                    44
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 7 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=7&amp;y=11">
                                                    46
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 1 - Vị trí 2: 5" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=1&amp;y=5">
                                                    47
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 5</td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 6</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=13">
                                                    60
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 14" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=14">
                                                    61
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 8" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=8">
                                                    62
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 7" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=7">
                                                    64
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 5" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=5">
                                                    67
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 3" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=3">
                                                    68
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 7</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 5 - Vị trí 2: 6" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=5&amp;y=6">
                                                    70
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 5 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=5&amp;y=11">
                                                    76
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 5 - Vị trí 2: 9" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=5&amp;y=9">
                                                    77
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 8</td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 3 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=3&amp;y=13">
                                                    80
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 3 - Vị trí 2: 4" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=3&amp;y=4">
                                                    84
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]} title="Vị trí tạo cầu >> Vị trí 1: 3 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=3&amp;y=11">
                                                    86
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={stylesCss["triangular-title"]}>Đầu 9</td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={stylesCss["title-bar-box"]}>
                                <b>Có 924 cầu cũ</b> - là những cầu có chiều dài cầu vượt số ngày cầu chạy bạn nhập vào
                            </div>
                            <div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=3&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 3">001</a>] Cặp số: <b>38</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=28&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 28">002</a>] Cặp số: <b>31</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 44">003</a>] Cặp số: <b>35</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 56">004</a>] Cặp số: <b>38</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=57&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 57">005</a>] Cặp số: <b>33</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=102&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 102">006</a>] Cặp số: <b>32</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=7&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 7">007</a>] Cặp số: <b>44</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=8&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 8">008</a>] Cặp số: <b>44</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 44">009</a>] Cặp số: <b>45</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 56">010</a>] Cặp số: <b>48</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=19&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 19">011</a>] Cặp số: <b>46</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=40&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 40">012</a>] Cặp số: <b>46</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 68">013</a>] Cặp số: <b>48</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=6&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 6, Vị trí 2: 65">014</a>] Cặp số: <b>75</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=9&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 9, Vị trí 2: 51">015</a>] Cặp số: <b>95</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=9&amp;j=102&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 9, Vị trí 2: 102">016</a>] Cặp số: <b>92</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=14&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 14">017</a>] Cặp số: <b>63</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 56">018</a>] Cặp số: <b>68</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=67&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 67">019</a>] Cặp số: <b>61</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 89">020</a>] Cặp số: <b>69</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 104">021</a>] Cặp số: <b>60</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=11&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 11, Vị trí 2: 51">022</a>] Cặp số: <b>85</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=11&amp;j=102&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 11, Vị trí 2: 102">023</a>] Cặp số: <b>82</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=12&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 12, Vị trí 2: 44">024</a>] Cặp số: <b>55</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=12&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 12, Vị trí 2: 56">025</a>] Cặp số: <b>58</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=14&amp;j=38&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 14, Vị trí 2: 38">026</a>] Cặp số: <b>37</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=14&amp;j=90&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 14, Vị trí 2: 90">027</a>] Cặp số: <b>34</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=20&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 20">028</a>] Cặp số: <b>82</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=54&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 54">029</a>] Cặp số: <b>81</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 74">030</a>] Cặp số: <b>86</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 76">031</a>] Cặp số: <b>85</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=97&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 97">032</a>] Cặp số: <b>80</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=17&amp;j=41&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 17, Vị trí 2: 41">033</a>] Cặp số: <b>55</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=17&amp;j=64&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 17, Vị trí 2: 64">034</a>] Cặp số: <b>57</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=20&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 20">035</a>] Cặp số: <b>62</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=42&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 42">036</a>] Cặp số: <b>69</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=54&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 54">037</a>] Cặp số: <b>61</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 74">038</a>] Cặp số: <b>66</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 81">039</a>] Cặp số: <b>67</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=20&amp;j=50&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 20, Vị trí 2: 50">040</a>] Cặp số: <b>27</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=20&amp;j=82&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 20, Vị trí 2: 82">041</a>] Cặp số: <b>24</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=27&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 27">042</a>] Cặp số: <b>25</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=41&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 41">043</a>] Cặp số: <b>25</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=57&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 57">044</a>] Cặp số: <b>23</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=94&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 94">045</a>] Cặp số: <b>22</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=24&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 24, Vị trí 2: 65">046</a>] Cặp số: <b>35</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=25&amp;j=67&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 25, Vị trí 2: 67">047</a>] Cặp số: <b>21</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 44">048</a>] Cặp số: <b>95</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=50&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 50">049</a>] Cặp số: <b>97</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=82&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 82">050</a>] Cặp số: <b>94</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=28&amp;j=80&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 28, Vị trí 2: 80">051</a>] Cặp số: <b>18</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=28&amp;j=93&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 28, Vị trí 2: 93">052</a>] Cặp số: <b>16</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=28&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 28, Vị trí 2: 104">053</a>] Cặp số: <b>10</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=30&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 30, Vị trí 2: 51">054</a>] Cặp số: <b>55</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=30&amp;j=102&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 30, Vị trí 2: 102">055</a>] Cặp số: <b>52</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=33&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 33, Vị trí 2: 68">056</a>] Cặp số: <b>08</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=34&amp;j=60&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 34, Vị trí 2: 60">057</a>] Cặp số: <b>31</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=34&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 34, Vị trí 2: 81">058</a>] Cặp số: <b>37</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=34&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 34, Vị trí 2: 104">059</a>] Cặp số: <b>30</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=35&amp;j=40&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 35, Vị trí 2: 40">060</a>] Cặp số: <b>06</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=35&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 35, Vị trí 2: 58">061</a>] Cặp số: <b>06</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=36&amp;j=39&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 36, Vị trí 2: 39">062</a>] Cặp số: <b>64</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=36&amp;j=69&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 36, Vị trí 2: 69">063</a>] Cặp số: <b>66</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=64&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 64">064</a>] Cặp số: <b>97</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=39&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 39, Vị trí 2: 44">065</a>] Cặp số: <b>45</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=39&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 39, Vị trí 2: 68">066</a>] Cặp số: <b>48</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=40&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 40, Vị trí 2: 56">067</a>] Cặp số: <b>68</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=40&amp;j=59&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 40, Vị trí 2: 59">068</a>] Cặp số: <b>63</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=40&amp;j=79&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 40, Vị trí 2: 79">069</a>] Cặp số: <b>64</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=40&amp;j=92&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 40, Vị trí 2: 92">070</a>] Cặp số: <b>61</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=40&amp;j=97&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 40, Vị trí 2: 97">071</a>] Cặp số: <b>60</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=41&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 41, Vị trí 2: 56">072</a>] Cặp số: <b>58</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=42&amp;j=98&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 42, Vị trí 2: 98">073</a>] Cặp số: <b>99</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=43&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 43, Vị trí 2: 76">074</a>] Cặp số: <b>45</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 56">075</a>] Cặp số: <b>58</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=69&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 69">076</a>] Cặp số: <b>56</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=83&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 83">077</a>] Cặp số: <b>52</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 86">078</a>] Cặp số: <b>54</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=87&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 87">079</a>] Cặp số: <b>58</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=90&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 90">080</a>] Cặp số: <b>54</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 96">081</a>] Cặp số: <b>56</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 104">082</a>] Cặp số: <b>50</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 53">083</a>] Cặp số: <b>63</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=59&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 59">084</a>] Cặp số: <b>63</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 68">085</a>] Cặp số: <b>68</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 86">086</a>] Cặp số: <b>64</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 89">087</a>] Cặp số: <b>69</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=48&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 48, Vị trí 2: 56">088</a>] Cặp số: <b>88</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=48&amp;j=59&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 48, Vị trí 2: 59">089</a>] Cặp số: <b>83</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=48&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 48, Vị trí 2: 86">090</a>] Cặp số: <b>84</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=49&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 49, Vị trí 2: 68">091</a>] Cặp số: <b>18</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=49&amp;j=94&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 49, Vị trí 2: 94">092</a>] Cặp số: <b>12</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 53">093</a>] Cặp số: <b>73</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=69&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 69">094</a>] Cặp số: <b>76</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 74">095</a>] Cặp số: <b>76</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 89">096</a>] Cặp số: <b>79</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=92&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 92">097</a>] Cặp số: <b>31</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 104">098</a>] Cặp số: <b>30</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 58">099</a>] Cặp số: <b>86</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=64&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 64">100</a>] Cặp số: <b>87</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=87&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 87">101</a>] Cặp số: <b>88</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=57&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 57, Vị trí 2: 61">102</a>] Cặp số: <b>38</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=70&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 70">103</a>] Cặp số: <b>69</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=71&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 71">104</a>] Cặp số: <b>67</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=79&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 79">105</a>] Cặp số: <b>64</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=61&amp;j=71&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 61, Vị trí 2: 71">106</a>] Cặp số: <b>87</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=65&amp;j=77&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 65, Vị trí 2: 77">107</a>] Cặp số: <b>53</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=68&amp;j=94&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 68, Vị trí 2: 94">108</a>] Cặp số: <b>82</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=69&amp;j=78&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 69, Vị trí 2: 78">109</a>] Cặp số: <b>69</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=71&amp;j=92&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 71, Vị trí 2: 92">110</a>] Cặp số: <b>71</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=71&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 71, Vị trí 2: 104">111</a>] Cặp số: <b>70</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=88&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 88">112</a>] Cặp số: <b>69</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=95&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 95">113</a>] Cặp số: <b>63</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=78&amp;j=79&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 78, Vị trí 2: 79">114</a>] Cặp số: <b>94</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=80&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 80, Vị trí 2: 86">115</a>] Cặp số: <b>84</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=81&amp;j=99&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 81, Vị trí 2: 99">116</a>] Cặp số: <b>73</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=82&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 82, Vị trí 2: 89">117</a>] Cặp số: <b>49</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=83&amp;j=101&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 83, Vị trí 2: 101">118</a>] Cặp số: <b>22</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=89&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 89, Vị trí 2: 104">119</a>] Cặp số: <b>90</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=102&amp;j=106&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 102, Vị trí 2: 106">120</a>] Cặp số: <b>23</b>
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=105&amp;j=106&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 105, Vị trí 2: 106">121</a>] Cặp số: <b>83</b>
                                </div>
                            </div>

                            <div className={stylesCss["clb"]}></div>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>Có 1507 cầu mới</b> - là những cầu có chiều dài cầu bằng số ngày cầu chạy bạn nhập vào
                            </div>
                            <div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=5&amp;j=33&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 5, Vị trí 2: 33">122</a>] Cặp số: <b>00</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=33&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 33, Vị trí 2: 53">123</a>] Cặp số: <b>03</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=33&amp;j=41&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 33, Vị trí 2: 41">124</a>] Cặp số: <b>05</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=47&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 47, Vị trí 2: 51">125</a>] Cặp số: <b>05</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=5&amp;j=19&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 5, Vị trí 2: 19">126</a>] Cặp số: <b>06</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=33&amp;j=69&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 33, Vị trí 2: 69">127</a>] Cặp số: <b>06</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=33&amp;j=64&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 33, Vị trí 2: 64">128</a>] Cặp số: <b>07</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=35&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 35, Vị trí 2: 68">129</a>] Cặp số: <b>08</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=55&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 55, Vị trí 2: 104">130</a>] Cặp số: <b>10</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=67&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 67, Vị trí 2: 104">131</a>] Cặp số: <b>10</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=28&amp;j=60&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 28, Vị trí 2: 60">132</a>] Cặp số: <b>11</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=54&amp;j=67&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 54, Vị trí 2: 67">133</a>] Cặp số: <b>11</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=55&amp;j=60&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 55, Vị trí 2: 60">134</a>] Cặp số: <b>11</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=54&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 54, Vị trí 2: 86">135</a>] Cặp số: <b>14</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=60&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 60, Vị trí 2: 86">136</a>] Cặp số: <b>14</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=49&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 49, Vị trí 2: 58">137</a>] Cặp số: <b>16</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=55&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 55, Vị trí 2: 58">138</a>] Cặp số: <b>16</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=55&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 55, Vị trí 2: 96">139</a>] Cặp số: <b>16</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=28&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 28, Vị trí 2: 81">140</a>] Cặp số: <b>17</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=60&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 60, Vị trí 2: 81">141</a>] Cặp số: <b>17</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=54&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 54, Vị trí 2: 56">142</a>] Cặp số: <b>18</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=55&amp;j=80&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 55, Vị trí 2: 80">143</a>] Cặp số: <b>18</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=20&amp;j=94&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 20, Vị trí 2: 94">144</a>] Cặp số: <b>22</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 53">145</a>] Cặp số: <b>23</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=82&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 82">146</a>] Cặp số: <b>24</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=20&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 20, Vị trí 2: 76">147</a>] Cặp số: <b>25</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=20&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 20, Vị trí 2: 58">148</a>] Cặp số: <b>26</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=40&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 40">149</a>] Cặp số: <b>26</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=100&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 100">150</a>] Cặp số: <b>26</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=25&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 25, Vị trí 2: 74">151</a>] Cặp số: <b>26</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=25&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 25, Vị trí 2: 81">152</a>] Cặp số: <b>27</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 68">153</a>] Cặp số: <b>28</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=20&amp;j=29&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 20, Vị trí 2: 29">154</a>] Cặp số: <b>29</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=22&amp;j=37&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 22, Vị trí 2: 37">155</a>] Cặp số: <b>29</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=72&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 72">156</a>] Cặp số: <b>30</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=24&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 24">157</a>] Cặp số: <b>33</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=14&amp;j=24&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 14, Vị trí 2: 24">158</a>] Cặp số: <b>33</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=14&amp;j=57&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 14, Vị trí 2: 57">159</a>] Cặp số: <b>33</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=90&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 90">160</a>] Cặp số: <b>34</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=14&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 14, Vị trí 2: 86">161</a>] Cặp số: <b>34</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=85&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 85">162</a>] Cặp số: <b>34</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 51">163</a>] Cặp số: <b>35</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=24&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 24, Vị trí 2: 44">164</a>] Cặp số: <b>35</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 76">165</a>] Cặp số: <b>35</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=103&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 103">166</a>] Cặp số: <b>35</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=57&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 57, Vị trí 2: 65">167</a>] Cặp số: <b>35</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=34&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 34, Vị trí 2: 58">168</a>] Cặp số: <b>36</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 58">169</a>] Cặp số: <b>36</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 96">170</a>] Cặp số: <b>36</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=75&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 75">171</a>] Cặp số: <b>37</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=0&amp;j=16&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 0, Vị trí 2: 16">172</a>] Cặp số: <b>38</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=24&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 24, Vị trí 2: 61">173</a>] Cặp số: <b>38</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=34&amp;j=80&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 34, Vị trí 2: 80">174</a>] Cặp số: <b>38</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=53&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 53, Vị trí 2: 61">175</a>] Cặp số: <b>38</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=33&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 33">176</a>] Cặp số: <b>40</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=47&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 47">177</a>] Cặp số: <b>40</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 104">178</a>] Cặp số: <b>40</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=39&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 39, Vị trí 2: 53">179</a>] Cặp số: <b>43</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=84&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 84">180</a>] Cặp số: <b>44</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 86">181</a>] Cặp số: <b>44</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=90&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 90">182</a>] Cặp số: <b>44</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=17&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 17">183</a>] Cặp số: <b>45</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=7&amp;j=41&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 7, Vị trí 2: 41">184</a>] Cặp số: <b>45</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=31&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 31, Vị trí 2: 51">185</a>] Cặp số: <b>45</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=4&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 4, Vị trí 2: 58">186</a>] Cặp số: <b>46</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=43&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 43, Vị trí 2: 58">187</a>] Cặp số: <b>46</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=86&amp;j=93&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 86, Vị trí 2: 93">188</a>] Cặp số: <b>46</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=7&amp;j=64&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 7, Vị trí 2: 64">189</a>] Cặp số: <b>47</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=39&amp;j=71&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 39, Vị trí 2: 71">190</a>] Cặp số: <b>47</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=31&amp;j=105&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 31, Vị trí 2: 105">191</a>] Cặp số: <b>48</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=1&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 1, Vị trí 2: 89">192</a>] Cặp số: <b>49</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=39&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 39, Vị trí 2: 89">193</a>] Cặp số: <b>49</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=85&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 85, Vị trí 2: 89">194</a>] Cặp số: <b>49</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=41&amp;j=73&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 41, Vị trí 2: 73">195</a>] Cặp số: <b>51</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=54&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 54">196</a>] Cặp số: <b>51</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=30&amp;j=83&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 30, Vị trí 2: 83">197</a>] Cặp số: <b>52</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=51&amp;j=66&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 51, Vị trí 2: 66">198</a>] Cặp số: <b>52</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 53">199</a>] Cặp số: <b>53</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=57&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 57">200</a>] Cặp số: <b>53</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=51&amp;j=106&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 51, Vị trí 2: 106">201</a>] Cặp số: <b>53</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=27&amp;j=43&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 27, Vị trí 2: 43">202</a>] Cặp số: <b>54</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=85&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 85">203</a>] Cặp số: <b>54</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=65&amp;j=82&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 65, Vị trí 2: 82">204</a>] Cặp số: <b>54</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=65&amp;j=90&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 65, Vị trí 2: 90">205</a>] Cặp số: <b>54</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=76&amp;j=79&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 76, Vị trí 2: 79">206</a>] Cặp số: <b>54</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 44">207</a>] Cặp số: <b>55</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=41&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 41, Vị trí 2: 44">208</a>] Cặp số: <b>55</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=103&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 103">209</a>] Cặp số: <b>55</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=21&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 21, Vị trí 2: 74">210</a>] Cặp số: <b>56</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=45&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 45">211</a>] Cặp số: <b>56</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=64&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 64">212</a>] Cặp số: <b>57</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=23&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 23">213</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 56">214</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 68">215</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=27&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 27, Vị trí 2: 68">216</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=48&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 48">217</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=44&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 44, Vị trí 2: 61">218</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=51&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 51, Vị trí 2: 56">219</a>] Cặp số: <b>58</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=37&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 37">220</a>] Cặp số: <b>59</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=18&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 18, Vị trí 2: 89">221</a>] Cặp số: <b>59</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=76&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 76, Vị trí 2: 89">222</a>] Cặp số: <b>59</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=33&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 33">223</a>] Cặp số: <b>60</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 104">224</a>] Cặp số: <b>60</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=62&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 62">225</a>] Cặp số: <b>61</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=40&amp;j=49&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 40, Vị trí 2: 49">226</a>] Cặp số: <b>61</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=15&amp;j=20&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 15, Vị trí 2: 20">227</a>] Cặp số: <b>62</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=77&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 77">228</a>] Cặp số: <b>63</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=43&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 43">229</a>] Cặp số: <b>64</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 86">230</a>] Cặp số: <b>64</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 44">231</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 76">232</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=15&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 15, Vị trí 2: 44">233</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 44">234</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 65">235</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=69&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 69, Vị trí 2: 76">236</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 76">237</a>] Cặp số: <b>65</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=36&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 36">238</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=45&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 45">239</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 58">240</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=15&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 15, Vị trí 2: 74">241</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=93&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 93">242</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 74">243</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=69&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 69">244</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 74">245</a>] Cặp số: <b>66</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=71&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 71">246</a>] Cặp số: <b>67</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 81">247</a>] Cặp số: <b>67</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=75&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 75">248</a>] Cặp số: <b>67</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=23&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 23">249</a>] Cặp số: <b>68</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=15&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 15, Vị trí 2: 56">250</a>] Cặp số: <b>68</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=48&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 48">251</a>] Cặp số: <b>68</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 56">252</a>] Cặp số: <b>68</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=80&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 80">253</a>] Cặp số: <b>68</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=45&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 45, Vị trí 2: 61">254</a>] Cặp số: <b>68</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=42&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 42">255</a>] Cặp số: <b>69</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=10&amp;j=78&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 10, Vị trí 2: 78">256</a>] Cặp số: <b>69</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=19&amp;j=70&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 19, Vị trí 2: 70">257</a>] Cặp số: <b>69</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=58&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 58, Vị trí 2: 89">258</a>] Cặp số: <b>69</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=69&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 69, Vị trí 2: 89">259</a>] Cặp số: <b>69</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=74&amp;j=78&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 74, Vị trí 2: 78">260</a>] Cặp số: <b>69</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=81&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 81, Vị trí 2: 104">261</a>] Cặp số: <b>70</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=6&amp;j=20&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 6, Vị trí 2: 20">262</a>] Cặp số: <b>72</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=64&amp;j=66&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 64, Vị trí 2: 66">263</a>] Cặp số: <b>72</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=71&amp;j=85&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 71, Vị trí 2: 85">264</a>] Cặp số: <b>74</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=81&amp;j=86&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 81, Vị trí 2: 86">265</a>] Cặp số: <b>74</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=38&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 38, Vị trí 2: 65">266</a>] Cặp số: <b>75</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 65">267</a>] Cặp số: <b>75</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=71&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 71, Vị trí 2: 76">268</a>] Cặp số: <b>75</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=6&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 6, Vị trí 2: 74">269</a>] Cặp số: <b>76</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=71&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 71, Vị trí 2: 96">270</a>] Cặp số: <b>76</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 56">271</a>] Cặp số: <b>78</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 61">272</a>] Cặp số: <b>78</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=50&amp;j=68&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 50, Vị trí 2: 68">273</a>] Cặp số: <b>78</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=38&amp;j=42&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 38, Vị trí 2: 42">274</a>] Cặp số: <b>79</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=64&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 64, Vị trí 2: 89">275</a>] Cặp số: <b>79</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=104&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 104">276</a>] Cặp số: <b>80</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=23&amp;j=54&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 23, Vị trí 2: 54">277</a>] Cặp số: <b>81</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=94&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 94">278</a>] Cặp số: <b>82</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=14&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 14">279</a>] Cặp số: <b>83</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=4&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 4">280</a>] Cặp số: <b>84</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=43&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 43">281</a>] Cặp số: <b>84</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=82&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 82">282</a>] Cặp số: <b>84</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=61&amp;j=82&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 61, Vị trí 2: 82">283</a>] Cặp số: <b>84</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=61&amp;j=90&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 61, Vị trí 2: 90">284</a>] Cặp số: <b>84</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=68&amp;j=79&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 68, Vị trí 2: 79">285</a>] Cặp số: <b>84</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 44">286</a>] Cặp số: <b>85</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 65">287</a>] Cặp số: <b>85</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 44">288</a>] Cặp số: <b>85</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 65">289</a>] Cặp số: <b>85</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=76&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 76">290</a>] Cặp số: <b>85</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=45&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 45">291</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=36&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 36">292</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=40&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 40">293</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=58&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 58">294</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=23&amp;j=45&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 23, Vị trí 2: 45">295</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=32&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 32, Vị trí 2: 96">296</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=68&amp;j=100&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 68, Vị trí 2: 100">297</a>] Cặp số: <b>86</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=32&amp;j=81&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 32, Vị trí 2: 81">298</a>] Cặp số: <b>87</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=3&amp;j=48&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 3, Vị trí 2: 48">299</a>] Cặp số: <b>88</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=11&amp;j=105&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 11, Vị trí 2: 105">300</a>] Cặp số: <b>88</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=48&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 48">301</a>] Cặp số: <b>88</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=16&amp;j=56&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 16, Vị trí 2: 56">302</a>] Cặp số: <b>88</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=23&amp;j=48&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 23, Vị trí 2: 48">303</a>] Cặp số: <b>88</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=56&amp;j=61&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 56, Vị trí 2: 61">304</a>] Cặp số: <b>88</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=61&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 61, Vị trí 2: 89">305</a>] Cặp số: <b>89</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=55&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 55">306</a>] Cặp số: <b>91</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=89&amp;j=94&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 89, Vị trí 2: 94">307</a>] Cặp số: <b>92</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=53&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 53">308</a>] Cặp số: <b>93</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=27&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 27">309</a>] Cặp số: <b>95</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=29&amp;j=65&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 29, Vị trí 2: 65">310</a>] Cặp số: <b>95</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=44&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 44">311</a>] Cặp số: <b>95</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=51&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 51">312</a>] Cặp số: <b>95</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=89&amp;j=103&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 89, Vị trí 2: 103">313</a>] Cặp số: <b>95</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=29&amp;j=74&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 29, Vị trí 2: 74">314</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=40&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 40">315</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=45&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 45">316</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=100&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 100">317</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=42&amp;j=69&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 42, Vị trí 2: 69">318</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=42&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 42, Vị trí 2: 96">319</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=89&amp;j=96&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 89, Vị trí 2: 96">320</a>] Cặp số: <b>96</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=71&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 71">321</a>] Cặp số: <b>97</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=32&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 32">322</a>] Cặp số: <b>98</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=37&amp;j=48&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 37, Vị trí 2: 48">323</a>] Cặp số: <b>98</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=42&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 42">324</a>] Cặp số: <b>99</b></div>
                                <div className={stylesCss["title-bar-box-content"]}>[<a className={stylesCss["data-item-href"]} href="chi-tiet-soi-cau-lo-cap.html?ex=1&amp;type=2&amp;code=mb&amp;ngay=30/10/2023&amp;i=26&amp;j=89&amp;number=3" target="_blank" rel="nofollow" title="Vị trí tạo cầu << Vị trí 1: 26, Vị trí 2: 89">325</a>] Cặp số: <b>99</b></div>
                            </div>

                            <div className={stylesCss["clb"]}></div>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>Tổng số các cầu xuất hiện theo các cặp số là:</b>
                            </div>
                            <div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>00</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>03</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>05</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>06</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>07</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>08</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>10</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>11</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>12</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>14</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>16</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>17</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>18</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>21</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>22</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>23</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>24</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>25</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>26</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>27</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>28</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>29</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>30</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>31</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>32</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>33</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>34</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>35</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>36</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>37</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>38</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>40</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>43</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>44</b> xuất hiện <font color="red">5</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>45</b> xuất hiện <font color="red">6</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>46</b> xuất hiện <font color="red">5</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>47</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>48</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>49</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>50</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>51</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>52</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>53</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>54</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>55</b> xuất hiện <font color="red">6</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>56</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>57</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>58</b> xuất hiện <font color="red">11</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>59</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>60</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>61</b> xuất hiện <font color="red">5</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>62</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>63</b> xuất hiện <font color="red">6</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>64</b> xuất hiện <font color="red">6</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>65</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>66</b> xuất hiện <font color="red">10</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>67</b> xuất hiện <font color="red">5</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>68</b> xuất hiện <font color="red">9</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>69</b> xuất hiện <font color="red">12</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>70</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>71</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>72</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>73</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>74</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>75</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>76</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>78</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>79</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>80</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>81</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>82</b> xuất hiện <font color="red">4</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>83</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>84</b> xuất hiện <font color="red">8</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>85</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>86</b> xuất hiện <font color="red">9</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>87</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>88</b> xuất hiện <font color="red">8</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>89</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>90</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>91</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>92</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>93</b> xuất hiện <font color="red">1</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>94</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>95</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>96</b> xuất hiện <font color="red">7</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>97</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>98</b> xuất hiện <font color="red">2</font> lần
                                </div>
                                <div className={stylesCss["title-bar-box-content"]}>
                                    Cặp số <b>99</b> xuất hiện <font color="red">3</font> lần
                                </div>
                                <div class="clb"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PredictSpecialPrizes;