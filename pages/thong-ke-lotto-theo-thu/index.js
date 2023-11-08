import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { listWeekdays } from "../../app/data/listWeekdays"
import { useEffect, useState } from "react";
import Meta from "app/components/Meta"
import { getNorthernLotteryStatistics } from "../../stores/statisticsOfNorthernLot";
import moment from "moment";
import { DatePicker } from "antd";

const NorthernLotteryStatistics = (props) => {
    const [dataTable, setDataTable] = useState(props.data);
    const [dataHeaderTable, setDataHeaderTable] = useState([]);
    const [table, setTable] = useState([]);

    const dateFormat = 'DD-MM-YYYY';
    const dateTimeStart = new Date().setDate(new Date().getDate() - 5);
    const [dateFrom, setDateFrom] = useState(new Date(dateTimeStart));
    const [dateTo, setDateTo] = useState(new Date());
    const [isDateFrom, setIsDateFrom] = useState(false);
    const [isDateTo, setIsDateTo] = useState(false);

    const [number, setNumber] = useState(2);
    const [weekDay, setWeekDay] = useState(1);
    const [week, setWeek] = useState("thứ hai");

    const handleDateFrom = (date, dateString) => {
        setDateFrom(dateString);
        setIsDateFrom(true);
    };

    const handleDateTo = (date, dateString) => {
        setDateTo(dateString);
        setIsDateTo(true);
    };

    const loadDataTable = (dataTable) => {
        if (dataTable) {
            if (dataTable.header) {
                setDataHeaderTable(dataTable.header);
            }
            if (dataTable.table_data) {
                setTable(dataTable.table_data)
            }
        }
    }

    const handleNorthernLotteryStatistics = async () => {
        const params = {
            day_from: isDateFrom ? dateFrom : moment(dateFrom).format(dateFormat),
            day_to: isDateTo ? dateTo : moment(dateTo).format(dateFormat),
            number: number,
            week_day: weekDay,
        }
        const data = await getNorthernLotteryStatistics(params);
        if (data) {
            const week  = listWeekdays.find(x => x.value == parseInt(weekDay, 10));
            setWeek(week.name);
            loadDataTable(data);
        }
    }

    useEffect(() => {
        loadDataTable(dataTable);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê lotto theo thứ" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê các cặp số lotto theo từng thứ trong tuần</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline"]}>
                                    <table cellPadding="5" cellSpacing="5" className={stylesCss["table"]}>
                                        <tbody>
                                            <tr>
                                                <td align="right">Từ ngày (Ngày/Tháng/Năm)&nbsp;
                                                    <DatePicker defaultValue={moment(dateFrom, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateFrom(date, dateString)} />
                                                </td>
                                                <td align="left">
                                                    Đến ngày (Ngày/Tháng/Năm)&nbsp;
                                                    <DatePicker defaultValue={moment(dateTo, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateTo(date, dateString)} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    Tổng số lượt về &gt;=&nbsp;
                                                    <input className={stylesCss["form-control"]} type="text" name="number" value={number} maxLength="10" onChange={(e) => setNumber(e.target.value)} />
                                                </td>
                                                <td align="left">
                                                    Theo thứ&nbsp;
                                                    <select value={weekDay} name="week_day" className={stylesCss["form-control"]} onChange={(e) => setWeekDay(e.target.value)}>
                                                        {
                                                            listWeekdays?.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.value}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" align="center">
                                                    <input className={stylesCss["btn-btn-default"]} type="submit" name="sbtsubmit" value="Xem kết quả" onClick={()=>handleNorthernLotteryStatistics()}/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <table cellPadding="2" cellSpacing="2" width="100%">
                                    <tbody>
                                        <tr>
                                            <th className={stylesCss["title-bar-box"]}>Bảng thống kê tần suất xuất hiện các cặp số lotto theo <font color="blue">{week}</font>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <table className={stylesCss["table-bordered"]}>
                                        <thead>
                                            <tr>
                                                {
                                                    dataHeaderTable?.map((item, index) => {
                                                        return (
                                                            <th key={index} align="center">{item.header}</th>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                table?.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            {
                                                                item?.map((val, indexVal) => {
                                                                    if (indexVal == 0) {
                                                                        return (
                                                                            <td key={indexVal} align="center" className={stylesCss["row-one"]}>{val.data_item}</td>
                                                                        )
                                                                    } else if (indexVal == 1) {
                                                                        return (
                                                                            <td key={indexVal} align="center" className={stylesCss["row-tow"]}>{val.data_item}</td>
                                                                        )
                                                                    } else if (indexVal == 2) {
                                                                        return (
                                                                            <td key={indexVal} align="center" className={stylesCss["row-three"]}>{val.data_item}</td>
                                                                        )
                                                                    } else if (indexVal == 3) {
                                                                        return (
                                                                            <td key={indexVal} align="center" className={stylesCss["row-four"]}>{val.data_item}</td>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
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
    const dateTo = moment(new Date()).format('DD-MM-YYYY');
    const dateFrom = moment(new Date().setDate(new Date().getDate() - 5)).format('DD-MM-YYYY');

    const params = {
        day_from: dateFrom,
        day_to: dateTo,
        number: "2",
        week_day: "2",
    }
    const [
        data
    ] = await Promise.all([
        getNorthernLotteryStatistics(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default NorthernLotteryStatistics;