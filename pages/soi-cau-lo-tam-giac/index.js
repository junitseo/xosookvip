import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";

const TriangularLotteryPrediction = () => {
    return (
        <div className={stylesCss["page-wrapper"]}>
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Soi cầu lô tô Tam giác - xổ số miền bắc - kqxs</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline"]}>
                                    <div align="center">
                                        <div>
                                            Biên ngày&nbsp;
                                            <input type="text" name="todate" value="2023-10-30" className={stylesCss["form-control"]} />
                                            &nbsp;Soi theo :&nbsp;
                                            <select name="level" className={stylesCss["form-control"]}>
                                                <option selected="selected" value="00">G00 - Giải đặc biệt</option>
                                                <option value="11">G11 - Giải nhất</option>
                                                <option value="21">G21 - Giải nhì thứ 1</option>
                                                <option value="22">G22 - Giải nhì thứ 2</option>
                                                <option value="31">G31 - Giải ba thứ 1</option>
                                                <option value="32">G32 - Giải ba thứ 2</option>
                                                <option value="33">G33 - Giải ba thứ 3</option>
                                                <option value="34">G34 - Giải ba thứ 4</option>
                                                <option value="35">G35 - Giải ba thứ 5</option>
                                                <option value="36">G36 - Giải ba thứ 6</option>
                                                <option value="41">G41 - Giải tư thứ 1</option>
                                                <option value="42">G42 - Giải tư thứ 2</option>
                                                <option value="43">G43 - Giải tư thứ 3</option>
                                                <option value="44">G44 - Giải tư thứ 4</option>
                                                <option value="51">G51 - Giải năm thứ 1</option>
                                                <option value="52">G52 - Giải năm thứ 2</option>
                                                <option value="53">G53 - Giải năm thứ 3</option>
                                                <option value="54">G54 - Giải năm thứ 4</option>
                                                <option value="55">G55 - Giải năm thứ 5</option>
                                                <option value="56">G56 - Giải năm thứ 6</option>
                                                <option value="61">G61 - Giải sáu thứ 1</option>
                                                <option value="62">G62 - Giải sáu thứ 2</option>
                                                <option value="63">G63 - Giải sáu thứ 3</option>
                                                <option value="71">G71 - Giải bẩy thứ 1</option>
                                                <option value="72">G72 - Giải bẩy thứ 2</option>
                                                <option value="73">G73 - Giải bẩy thứ 3</option>
                                                <option value="74">G74 - Giải bẩy thứ 4</option>
                                            </select>
                                            &nbsp;Số ngày cầu chạy&nbsp;
                                            <select name="days" className={stylesCss["form-control"]}>
                                                <option value="1" selected="selected">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div style={{ padding: '10px' }} >
                                            <input type="radio" name="type" id="type_0" value="0" checked="chected" />
                                            <label for="type_0" className={stylesCss["form-label"]}>&nbsp;Cầu cả cặp&nbsp;</label>
                                            <input type="radio" name="type" id="type_1" value="1" />
                                            <label for="type_1" className={stylesCss["form-label"]}>&nbsp;Bạch thủ ghép xuôi&nbsp;</label>
                                            <input type="radio" name="type" id="type_2" value="2" />
                                            <label for="type_2" className={stylesCss["form-label"]}>&nbsp;Bạch thủ ghép ngược&nbsp;</label>
                                        </div>
                                        <input type="submit" value="Xem kết quả" name="sbtTinh" className={stylesCss["btn-btn-default"]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>Bảng cầu rút gọn:</b>
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 13 - Vị trí 2: 14" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=13&amp;y=14">
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
                                                <a  target="_blank" title="Vị trí tạo cầu >> Vị trí 1: 6 - Vị trí 2: 10" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=6&amp;y=10">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 12 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=12&amp;y=13">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 8 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=8&amp;y=13">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 8 - Vị trí 2: 10" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=8&amp;y=10">
                                                    24
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 8 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=8&amp;y=11">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 6" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=6">
                                                    30
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 12" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=12">
                                                    31
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 8" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=8">
                                                    32
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 1" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=1">
                                                    34
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 2" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=2">
                                                    36
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 0 - Vị trí 2: 3" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=0&amp;y=3">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 1 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=1&amp;y=13">
                                                    40
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 4 - Vị trí 2: 14" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=4&amp;y=14">
                                                    41
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 4 - Vị trí 2: 8" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=4&amp;y=8">
                                                    42
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 1 - Vị trí 2: 10" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=1&amp;y=10">
                                                    44
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 7 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=7&amp;y=11">
                                                    46
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 1 - Vị trí 2: 5" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=1&amp;y=5">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=13">
                                                    60
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 14" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=14">
                                                    61
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 8" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=8">
                                                    62
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 7" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=7">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 5" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=5">
                                                    67
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 2 - Vị trí 2: 3" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=2&amp;y=3">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 5 - Vị trí 2: 6" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=5&amp;y=6">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 5 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=5&amp;y=11">
                                                    76
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 5 - Vị trí 2: 9" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=5&amp;y=9">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 3 - Vị trí 2: 13" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=3&amp;y=13">
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
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 3 - Vị trí 2: 4" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=3&amp;y=4">
                                                    84
                                                </a>
                                            </td>
                                            <td>
                                                &nbsp;&nbsp;
                                            </td>
                                            <td>
                                                <a target="_blank" className={stylesCss["data-item-href"]}title="Vị trí tạo cầu >> Vị trí 1: 3 - Vị trí 2: 11" href="soi-cau-lo-tam-giac.html?cmd=detail&amp;todate=2023-10-30&amp;level=00&amp;days=1&amp;type=0&amp;x=3&amp;y=11">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TriangularLotteryPrediction;