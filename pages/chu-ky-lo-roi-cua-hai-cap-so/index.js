import { useState } from "react";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { listNumber } from "../../app/data/listNumber"
import Meta from "app/components/Meta"

const FrequencyOfOccurrenceOfTwoNumbers = () => {
    const [dataNumber, setDataNumber] = useState(listNumber);
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Chu kỳ lô rơi của hai cặp số" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê những cặp số nào ra nhiều nhất sau các cặp số vừa mới ra</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <table cellPadding="5" cellSpacing="5" width="100%" className={stylesCss["form-group-form-inline"]}>
                                    <tbody>
                                        <tr>
                                            <td align="center">
                                                <span className={stylesCss["item-select"]}>
                                                    2 cặp số khảo sát:&nbsp;
                                                    <select name="cap_so_1" className={stylesCss["form-control"]}>
                                                        {
                                                            dataNumber?.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item}>{item}</option>
                                                                );
                                                            })
                                                        }
                                                    </select>
                                                    &nbsp;
                                                    <select name="cap_so_2" className={stylesCss["form-control"]}>
                                                        {
                                                            dataNumber?.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item}>{item}</option>
                                                                );
                                                            })
                                                        }
                                                    </select>
                                                </span>
                                                <span className={stylesCss["item-select"]}>
                                                    &nbsp;Từ ngày(Ngày/Tháng/Năm)&nbsp;
                                                    <input type="text" className={stylesCss["form-control"]} name="day_from" value="28/10/2022" maxLength="10" />
                                                </span>
                                                <span className={stylesCss["item-select"]}>
                                                    &nbsp;Đến ngày(Ngày/Tháng/Năm)&nbsp;
                                                    <input type="text" className={stylesCss["form-control"]} name="day_to" value="28/10/2023" maxLength="10" />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <br />
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
                                    <div>- 2 cặp số <font color="red"><b>00,01</b></font> về cùng nhau từ ngày <font color="red"><b>28/10/2022</b></font> đến ngày <font color="red"><b>28/10/2023</b></font> là: <font color="red"><b>10 lần</b></font></div>
                                    <div>
                                        - <font color="red">Max cực đại lô rơi(về)</font> lại một trong 2 cặp số này là : <font color="red"><b>11</b> ngày (<b>30/12/2022</b> đến <b>10/01/2023</b>) tính cả ngày về</font>
                                    </div>
                                    <div>
                                        - Ngày cuối cùng 2 cặp số <font color="red"><b>00,01</b></font> về cùng nhau là ngày <font color="red"><b>26/09/2023</b></font>
                                    </div>
                                    <div>
                                        - Chu kỳ cuối lô đã rơi(về) cặp <font color="red"><b>00</b></font> vào ngày: <font color="red"><b>26/10/2023</b></font> không còn cơ hội đầu tư cặp <font color="red"><b>00,01</b></font> này.
                                    </div>
                                </div>
                                <div style={{ lineHeight: '30px', padding: '15px' }}>
                                    <font color="red">
                                        <b>Chú ý:</b>
                                    </font>
                                    Các cặp số bạn nên khảo sát là các cặp số về cùng nhau trong các lần quay trước đây,
                                    nhưng tính tới hiện tại chưa về lại cặp nào.
                                    Thống kê trong 180 ngày, 365 ngày,...
                                    càng lớn thì xác suất rơi của các cặp số khảo sát càng cao.
                                    Để dự đoán được tốt bạn hãy để ý đến
                                    <b>Max cực đại lô rơi(về)</b> và
                                    <b>Chu kỳ cuối lô chưa rơi(về)</b>, nếu
                                    <b>Chu kỳ cuối lô chưa rơi(về)</b> vượt
                                    <b>MAX</b> hoặc gần chạm
                                    <b>MAX</b> thì đáng được xem xét để đầu tư.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrequencyOfOccurrenceOfTwoNumbers;