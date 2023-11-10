import { useEffect, useState } from "react";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { statisticsOnSiblingPairs } from "../../app/data/statisticsOnSiblingPairs"
import Meta from "app/components/Meta"
import { getStatisticsOnSiblingPairs } from "../../stores/statisticsOfNorthernLot";
import { DatePicker } from "antd";
import moment from "moment";
import Link from "next/link";

const StatisticsOnSiblingPairs = (props) => {
    const [data, setData] = useState(props.data);
    const [table, setTable] = useState([]);
    const [title, setTitle] = useState("");

    const [stringNumber, setStringNumber] = useState("57,58,73,72");
    const dateFormat = "YYYY-MM-DD"
    const [toDate, setToDate] = useState(new Date());
    const [isToDate, setIsToDate] = useState(false);
    const [indexShow, setIndexShow] = useState()
    const [itemShow, setItemShow] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const handleShowItem = (event) => {
        setIndexShow(event);
        setIsShow(true);
    }

    const handleToDate = (date, dateString) => {
        setToDate(dateString);
        setIsToDate(true);
    };

    const handleStatisticsOnSiblingPairs = async () => {
        const params = {
            date: isToDate ? toDate : moment(toDate).format(dateFormat),
            string_number: stringNumber,
        }
        const data = await getStatisticsOnSiblingPairs(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data.data) {
                setTable(data.data)
            }
            if(data.title_data){
                setTitle(data.title_data)
            }
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);
    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê cặp số anh em" />
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
                                            <td align="left">27 cặp số lotto về ngày&nbsp;
                                                <font color="red">{title}</font>
                                                <br /> Dãy số lotto cần thống kê: (các cặp số cách nhau bởi dấu phẩy. VD: 16,17)
                                                <br />
                                                <input className={stylesCss["form-control"]} type="text" name="day_so" value={stringNumber} style={{ width: '90%' }} onChange={(e) => setStringNumber(e.target.value)} />
                                                <div class="form-group form-inline">
                                                    <br /> Biên ngày(Ngày/Tháng/Năm)&nbsp;
                                                    <DatePicker defaultValue={moment(toDate, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleToDate(date, dateString)} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} onClick={() => handleStatisticsOnSiblingPairs()}/>
                                                <br /> Dữ liệu được xử lý trên KQXS MB từ 01/01/2005 đến nay
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div>
                                <div className={stylesCss["title-bar-box"]} style={{ fontWeight: 'bold' }}>Cặp số <font color="red">{stringNumber}</font> vừa mới ra (<font color="red">về cùng nhau</font>) thì lần quay sau đó có thể xuất hiện các cặp số sau: (<font color="red">TOP 20 cặp số về nhiều nhất</font>)</div>
                                <div>
                                    {
                                        table?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={stylesCss["container-item-box"]}>
                                                        <span className={stylesCss["pair-of-number"]}>Cặp số&nbsp;
                                                            <font color="red">{item.number_one}&nbsp;</font>
                                                            về&nbsp;
                                                            <font color="red">{item.number_tow}&nbsp;</font>
                                                        </span>
                                                        <span className={stylesCss["pair-of-number-title"]} onClick={() => handleShowItem(index)}>&nbsp;lần (Bấm vào đây xem chi tiết các ngày về cặp số này)</span>
                                                    </div>
                                                    <div style={index === indexShow && isShow ? { display: 'block' } : { display: 'none' }} className={stylesCss["content-date"]} >
                                                        {
                                                            
                                                            <Link href="#" className={stylesCss["data-item-href"]} target="_blank">{item.date}</Link>
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const dateFormat = "DD/MM/YYYY";
    const date = moment(new Date()).format(dateFormat);
    const string_number = "49,13,48,58";

    const params = {
        date: date,
        string_number: string_number
    }
    const [
        data
    ] = await Promise.all([
        getStatisticsOnSiblingPairs(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default StatisticsOnSiblingPairs;