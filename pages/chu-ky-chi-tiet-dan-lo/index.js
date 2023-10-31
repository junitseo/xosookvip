import { useState } from "react";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { listNumber } from "../../app/data/listNumber"
import { list } from "postcss";
import Meta from "app/components/Meta"

const LotDetailCycle = () => {
    const [dataNumber, setDataNumber] = useState(listNumber);
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Chu kỳ chi tiết dàn lô" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê những cặp số nào ra nhiều nhất sau các cặp số vừa mới ra</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <table cellPadding="5" cellSpacing="5" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="left">
                                                Dãy số lotto cần thống kê: (các cặp số cách nhau bởi dấu phẩy. VD: 16,17)
                                                <br></br>
                                                <input type="text" name="day_so" value="02,47,60" className={stylesCss["form-control"]} />
                                                <div className={stylesCss["form-group-form-inline"]}>
                                                    Từ ngày (Ngày/Tháng/Năm)&nbsp;
                                                    <input type="text" className={stylesCss["form-control"]} name="day_from" value="01/01/2005" maxLength="10" />
                                                    Đến ngày (Ngày/Tháng/Năm)&nbsp;
                                                    <input type="text" className={stylesCss["form-control"]} name="day_to" value="28/10/2023" maxLength="10" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div>
                                <div className={stylesCss["title-bar-box-show"]} onClick={() => setIsShow(!isShow)}>Bấm vào đây xem chi tiết các ngày mà 2 cặp số
                                    <font color="red">
                                        <b>00,01</b>
                                    </font> cùng về <font color="red">
                                        <b>10 lần</b>
                                    </font>
                                </div>
                                <div style={isShow ? { display: 'block' } : { display: 'none' }} className={stylesCss["content-date"]}>
                                    <a href="so-ket-qua.html?date_start=31-10-2022&amp;date_end=31-10-2022&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">31-10-2022</a> ,
                                    <a href="so-ket-qua.html?date_start=15-01-2023&amp;date_end=15-01-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">15-01-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=19-04-2023&amp;date_end=19-04-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">19-04-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=01-05-2023&amp;date_end=01-05-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">01-05-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=12-05-2023&amp;date_end=12-05-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">12-05-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=15-05-2023&amp;date_end=15-05-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">15-05-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=26-07-2023&amp;date_end=26-07-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">26-07-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=10-08-2023&amp;date_end=10-08-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">10-08-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=15-08-2023&amp;date_end=15-08-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">15-08-2023</a> ,
                                    <a href="so-ket-qua.html?date_start=26-09-2023&amp;date_end=26-09-2023&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">26-09-2023</a> ,
                                </div>
                            </div>
                            <div className={stylesCss["qc-mgid"]}>
                                <div style={{ lineHeight: '30px' }}>
                                    <div>
                                        - Chu kỳ dài nhất xuất hiện dàn số là : <font color="red"><b>25</b> ngày (<b>30/03/2020</b> đến <b>24/04/2020</b>) tính cả ngày về</font>
                                    </div>
                                    <div>
                                        - Ngày mới nhất mà dãy số xuất hiện là: <font color="red"><b>27/10/2023</b></font>
                                    </div>
                                    <div>
                                        - Điểm gan đến nay là: <font color="red"><b>1</b></font> ngày
                                    </div>
                                </div>
                                <div style={{ lineHeight: '30px', padding: '15px' }}>
                                    <font color="red">
                                        <b>Chú ý:</b>
                                    </font>
                                    <br></br>
                                    Dàn số được tính là về khi trong dàn khảo sát có xuất hiện một cặp số khi mở thưởng, vậy để hiệu quả bạn chỉ nên khảo sát dàn có <font color="red">3</font> cặp số trở xuống (dàn nhiều cặp số hơn chỉ khảo sát với mục đích tham khảo thêm) . Để xem chi tiết khoảng cách chu kỳ bạn di chuột lên các con số trong bảng chi tiết.
                                </div>
                                <div className={stylesCss["detail"]}>
                                    <div className={stylesCss["detail-title"]} >Chi tiết chu kỳ của dàn số: <font color="red"><b>02,47,60</b></font>
                                    </div>
                                    <div style={{ padding: '15px' }}>
                                        &lt;- -
                                        {
                                            dataNumber?.map((item, index) => {
                                                return (
                                                    <>
                                                        <span title="Nhịp về từ ngày 25/10/2023 đến 27/10/2023 là 2">2</span>
                                                        <span> - </span>
                                                        <span title="Nhịp về từ ngày 21/10/2023 đến 23/10/2023 là 2">2</span>
                                                        <span> - </span>
                                                        <span title="Nhịp về từ ngày 20/10/2023 đến 21/10/2023 là 1">1</span>
                                                        <span> - </span>
                                                        <span title="Nhịp về từ ngày 16/10/2023 đến 17/10/2023 là 1">1</span>
                                                        <span> - </span>
                                                        <span title="Nhịp về từ ngày 16/10/2023 đến 17/10/2023 là 1">4</span>
                                                        <span> - </span>
                                                        <span title="Nhịp về từ ngày 16/10/2023 đến 17/10/2023 là 1">3</span>
                                                        <span> - </span>
                                                    </>
                                                );
                                            })
                                        }
                                        &lt;- -|
                                    </div>
                                    <div className={stylesCss["detail-total-title"]}>
                                        Tổng hợp lại chu kỳ của dàn số: <font color="red"><b>02,47,60</b></font>
                                    </div>
                                    <div style={{ padding: '15px' }}>
                                        Chu kỳ
                                        <font color="red"><b>1</b></font>
                                        ngày đã về lặp lại <font color="red"><b>2073</b></font>
                                        lần <br></br>Chu kỳ <font color="red"><b>2</b></font>
                                        ngày đã về lặp lại <font color="red"><b>971</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>3</b></font> ngày đã về lặp lại <font color="red"><b>401</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>4</b></font> ngày đã về lặp lại <font color="red"><b>185</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>5</b></font> ngày đã về lặp lại <font color="red"><b>70</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>6</b></font> ngày đã về lặp lại <font color="red"><b>40</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>7</b></font> ngày đã về lặp lại <font color="red"><b>25</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>8</b></font> ngày đã về lặp lại <font color="red"><b>9</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>9</b></font> ngày đã về lặp lại <font color="red"><b>2</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>10</b></font> ngày đã về lặp lại <font color="red"><b>2</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>13</b></font> ngày đã về lặp lại <font color="red"><b>1</b></font> lần
                                        <br></br> Chu kỳ <font color="red"><b>25</b></font> ngày đã về lặp lại <font color="red"><b>1</b></font> lần
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LotDetailCycle;