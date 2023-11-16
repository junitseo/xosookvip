import { useEffect, useState } from "react";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { listNumber } from "../../app/data/listNumber"
import Meta from "app/components/Meta"
import { getFrequencyOfOccurrenceOfTwoNumbers } from "../../stores/statisticsOfNorthernLot";
import { DatePicker } from "antd";
import moment from "moment";
import Link from "next/link";

const FrequencyOfOccurrenceOfTwoNumbers = (props) => {
    const [data, setData] = useState(props.data);
    const [table, setTable] = useState({});

    const [numberOne, setNumberOne] = useState("00");
    const [numberTow, setNumberTow] = useState("01");
    const [dataNumber, setDataNumber] = useState(listNumber);
    const [isShow, setIsShow] = useState(false);

    const dateFormat = 'DD-MM-YYYY';
    const dateTimeStart = new Date().setDate(new Date().getDate() - 5);
    const [dateFrom, setDateFrom] = useState(new Date(dateTimeStart));
    const [dateTo, setDateTo] = useState(new Date());
    const [isDateFrom, setIsDateFrom] = useState(false);
    const [isDateTo, setIsDateTo] = useState(false);

    const handleDateFrom = (date, dateString) => {
        setDateFrom(dateString);
        setIsDateFrom(true);
    };

    const handleDateTo = (date, dateString) => {
        setDateTo(dateString);
        setIsDateTo(true);
    };

    const handleFrequencyOfOccurrenceOfTwoNumbers = async () => {
        const params = {
            number_one: numberOne,
            number_tow: numberTow,
            day_from: isDateFrom ? dateFrom : moment(dateFrom).format(dateFormat),
            day_to: isDateTo ? dateTo : moment(dateTo).format(dateFormat),
        }
        const data = await getFrequencyOfOccurrenceOfTwoNumbers(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data) {
                setTable(data);
            }
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Chu kỳ lô rơi của 2 cặp số" 
            description="Chu kỳ lô rơi của 2 cặp số" 
            keywords="Chu kỳ lô rơi của 2 cặp số,xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc"/>
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
                                            <td align="center" className={stylesCss["display-center-col"]}>
                                                <span className={stylesCss["item-select"]}>
                                                    <div className={stylesCss["choose"]}>
                                                        2 cặp số khảo sát:
                                                        <select value={numberOne} name="cap_so_1" className={stylesCss["form-control"]} onChange={(e) => setNumberOne(e.target.value)}>
                                                            {
                                                                dataNumber?.map((item, index) => {
                                                                    return (
                                                                        <option key={index} value={item}>{item}</option>
                                                                    );
                                                                })
                                                            }
                                                        </select>
                                                        <select value={numberTow} name="cap_so_2" className={stylesCss["form-control"]} onChange={(e) => setNumberTow(e.target.value)}>
                                                            {
                                                                dataNumber?.map((item, index) => {
                                                                    return (
                                                                        <option key={index} value={item}>{item}</option>
                                                                    );

                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </span>
                                                <div className={stylesCss["choose"]}>
                                                    <span className={stylesCss["item-select"]}>
                                                        &nbsp;Từ ngày(Ngày/Tháng/Năm)&nbsp;
                                                        <DatePicker defaultValue={moment(dateFrom, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateFrom(date, dateString)} />
                                                    </span>
                                                </div>
                                                <div className={stylesCss["choose"]}>
                                                    <span className={stylesCss["item-select"]}>
                                                        &nbsp;Đến ngày(Ngày/Tháng/Năm)&nbsp;
                                                        <DatePicker defaultValue={moment(dateTo, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateTo(date, dateString)} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <br />
                                                <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} onClick={() => handleFrequencyOfOccurrenceOfTwoNumbers()} />
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
                                        <b>{table?.pair_of_number}</b>
                                    </font> cùng về <font color="red">
                                        <b>{table?.times}</b>
                                    </font>
                                </div>
                                <div style={isShow ? { display: 'block' } : { display: 'none' }} className={stylesCss["content-date"]}>
                                    {
                                        table?.data_date ? 
                                            <Link className={stylesCss["data-item-href"]} href="#" target="_blank" rel="nofollow">{table?.data_date}</Link> 
                                        : 
                                            <></>
                                    }
                                </div>
                            </div>
                            <div className={stylesCss["qc-mgid"]}>
                                <div style={{ lineHeight: '30px' }}>
                                    <div>- 2 cặp số <font color="red"><b>{table?.content_one_item_one}</b></font> về cùng nhau từ ngày <font color="red"><b>{table?.content_one_item_tow}</b></font> đến ngày <font color="red"><b>{table?.content_one_item_three}</b></font> là: <font color="red"><b>{table?.content_one_item_four}</b></font></div>
                                    <div>
                                        - <font color="red">{table?.content_tow_item_one}</font> lại một trong 2 cặp số này là : <font color="red"><b>{table?.content_tow_item_tow}</b></font>
                                    </div>
                                    <div>
                                        - Ngày cuối cùng 2 cặp số <font color="red"><b>{table?.content_three_item_one}</b></font> về cùng nhau là ngày <font color="red"><b>{table?.content_three_item_tow}</b></font>
                                    </div>
                                    <div>
                                        - Chu kỳ cuối lô đã rơi(về) cặp <font color="red"><b>{table?.content_four_item_one}</b></font> vào ngày: <font color="red"><b>{table?.content_four_item_tow}</b></font> không còn cơ hội đầu tư cặp <font color="red"><b>{table?.content_four_item_three}</b></font> này.
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

export const getServerSideProps = async () => {
    const dateFormat = "DD/MM/YYYY";
    const number_one = "01";
    const number_tow = "02";
    const day_from = moment(new Date()).format(dateFormat);
    const day_to = moment(new Date().setDate(new Date().getDate() - 5)).format(dateFormat);

    const params = {
        number_one: number_one,
        number_tow: number_tow,
        day_from: day_from,
        day_to: day_to,
    }
    const [
        data
    ] = await Promise.all([
        getFrequencyOfOccurrenceOfTwoNumbers(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default FrequencyOfOccurrenceOfTwoNumbers;