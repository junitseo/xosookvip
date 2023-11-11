import moment from "moment";
import { getLotteryStatistic } from "../../stores/statisticsOfNorthernLot";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import { DatePicker } from "antd";
import { useEffect, useState } from "react";

const LotteryStatistics = (props) => {
    const [data, setData] = useState(props.data);
    const [tableOne, setTableOne] = useState([]);
    const [tableTow, setTableTow] = useState([]);

    const dateFormat = 'DD-MM-YYYY';
    const dateTimeStart = new Date().setDate(new Date().getDate() - 5);
    const [dateFrom, setDateFrom] = useState(new Date(dateTimeStart));
    const [dateTo, setDateTo] = useState(new Date());
    const [isDateFrom, setIsDateFrom] = useState(false);
    const [isDateTo, setIsDateTo] = useState(false);

    const [amplitude, setAmplitude] = useState("10");

    const handleDateFrom = (date, dateString) => {
        setDateFrom(dateString);
        setIsDateFrom(true);
    };

    const handleDateTo = (date, dateString) => {
        setDateTo(dateString);
        setIsDateTo(true);
    };

    const handleLotteryStatistics = async () => {
        const params = {
            amplitude: amplitude,
            date_start: isDateFrom ? dateFrom : moment(dateFrom).format(dateFormat),
            date_end: isDateTo ? dateTo : moment(dateTo).format(dateFormat),
        }
        const data = await getLotteryStatistic(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data.data_table_one) {
                setTableOne(data.data_table_one);
            }
            if (data.data_table_tow) {
                setTableTow(data.data_table_tow);
            }
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê lô gan" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê những cặp số nào ra nhiều nhất sau các cặp số vừa mới ra</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline-check"]}>
                                    <table cellPadding="5" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="right">
                                                    Từ ngày: Ngày/Tháng/Năm&nbsp;
                                                    <br></br>
                                                    <DatePicker defaultValue={moment(dateFrom, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateFrom(date, dateString)} />
                                                </td>
                                                <td align="left">
                                                    Đến ngày: Ngày/Tháng/Năm&nbsp;
                                                    <br></br>
                                                    <DatePicker defaultValue={moment(dateTo, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateTo(date, dateString)} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" align="center">
                                                    nhập số ngày
                                                    <input type="text" name="biendo" value={amplitude} className={stylesCss["form-control"]} onChange={(e) => setAmplitude(e.target.value)}/>
                                                    <input type="submit" name="sbtFind" value="Xem kết quả" className={stylesCss["btn-btn-default"]} onClick={() => handleLotteryStatistics()}/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellPadding="5" cellSpacing="5">
                                <tbody>
                                    <tr>
                                        <td>
                                            Các cặp số đuôi chưa ra theo biên độ 10 ngày trở lên:
                                            {
                                                tableOne?.map((item, index) =>{
                                                    return(
                                                        <div key={index}>
                                                            Cặp số <font color="red"><b>{item?.number}</b></font> ra ngày: <font color="blue">{item?.date}</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>{item?.day}</b></font> ngày
                                                        </div>
                                                    )
                                                })
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding="2" cellSpacing="5" width="100%" border="1" className={stylesCss["table-content"]} >
                                <tbody>
                                {
                                        tableTow?.map((item, index) => {
                                            if(index % 2 != 0){
                                                return(
                                                    <tr key={index} className={stylesCss["table-content-item"]}>
                                                       {
                                                            item?.map((val, indexVal)=> {
                                                                if(indexVal == 0){
                                                                    return(
                                                                        <td key={indexVal} align="center" className={stylesCss["max-date"]}>{val?.data_item}</td>
                                                                    )
                                                                } else {
                                                                    return(
                                                                        <td key={indexVal} align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                                                            {val?.data_item}
                                                                        </td>
                                                                    )
                                                                }
                                                                
                                                            })
                                                       }
                                                    </tr>
                                                )
                                            } 
                                            else {
                                                return(
                                                    <tr key={index}>
                                                       {
                                                        item?.map((val, indexVal)=> {
                                                            return(
                                                                <th key={indexVal} align="center" className={stylesCss["table-item"]}>{val?.data_item}</th>
                                                            )
                                                        })
                                                       }
                                                    </tr>
                                                )
                                            }
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const dateFormat = "DD/MM/YYYY";
    const amplitude = "9";
    const date_start = moment(new Date()).format(dateFormat);
    const date_end = moment(new Date().setDate(new Date().getDate() - 5)).format(dateFormat);

    const params = {
        amplitude: amplitude,
        date_start: date_start,
        date_end: date_end,
    }
    const [
        data
    ] = await Promise.all([
        getLotteryStatistic(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default LotteryStatistics;