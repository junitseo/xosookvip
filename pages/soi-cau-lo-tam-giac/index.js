import { useEffect, useState } from "react";
import { getTriangularLotteryPrediction } from "../../stores/northernlotteryprediction";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import moment from "moment";
import Link from "next/link";
import {dataPrizes} from "../../app/data/dataPrize";
import {dataDays} from "../../app/data/dataDay";
import { DatePicker } from "antd";

const TriangularLotteryPrediction = (props) => {
    const [data, setData] = useState(props.data);
    const [table, setTable] = useState([]);

    const [dataPrize, setDataPrize] = useState(dataPrizes);
    const [dataDay, setDataDay] = useState(dataDays);

    const dateFormat = "YYYY-MM-DD"
    const [toDate, setToDate] = useState(new Date());
    const [level, setLevel] = useState("00");
    const [type, setType] = useState("0");
    const [days, setDays] = useState("1");
    const [isToDate, setIsToDate] = useState(false);

    const handleToDate = (date, dateString) => {
        setToDate(dateString);
        setIsToDate(true);
    };

    const handleViewBet = (e) => {
        setLevel(e.target.value)
    }

    const handleDay = (e) => {
        setDays(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data.data_table) {
                setTable(data.data_table)
            }
        }
    }

    const handleTriangularLotteryPrediction = async () => {
        const params = {
            todate: isToDate ? toDate : moment(toDate).format(dateFormat),
            level: level,
            days: days,
            type: type,
        }
        const data = await getTriangularLotteryPrediction(params);
        if (data) {
            loadDataTable(data);
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Soi cầu lô tam giác" />
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
                                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                            <div className={stylesCss["choose"]}>
                                                Biên ngày&nbsp;
                                                <DatePicker defaultValue={moment(toDate, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleToDate(date, dateString)} />
                                            </div>
                                            <div className={stylesCss["choose"]}>
                                            &nbsp;Soi theo :&nbsp;
                                            <select name="level" className={stylesCss["form-control"]} onChange={(e) => handleViewBet(e)}>
                                                {
                                                    dataPrize.map((item, index) => {
                                                        if(index == 0) {
                                                            return (
                                                                <option key={index} selected="selected" value={item.value}>{item.name}</option>
                                                            )
                                                        } else {
                                                            return (
                                                                <option key={index} value={item.value}>{item.name}</option>
                                                            )
                                                        }
                                                    })
                                                }
                                            </select>
                                            </div>
                                           <div className={stylesCss["choose"]}>
                                            &nbsp;Số ngày cầu chạy&nbsp;
                                            <select name="days" className={stylesCss["form-control"]} onChange={(e) => handleDay(e)}>
                                                {
                                                    dataDay.map((item, index) => {
                                                        if(index == 0) {
                                                            return (
                                                                <option key={index} selected="selected" value={item.value}>{item.name}</option>
                                                            )
                                                        } else {
                                                            return (
                                                                <option key={index} value={item.value}>{item.name}</option>
                                                            )
                                                        }
                                                    })
                                                }
                                            </select>
                                           </div>
                                           
                                        </div>
                                        <div style={{ padding: '10px' }} >
                                            <input type="radio" name="type" id="type_0" value="0" checked={type == "0" ? "chected" : ""} onChange={(e) => handleType(e)}/>
                                            <label for="type_0" className={stylesCss["form-label"]}>&nbsp;Cầu cả cặp&nbsp;</label>
                                            <input type="radio" name="type" id="type_1" value="1" checked={type == "1" ? "chected" : ""} onChange={(e) => handleType(e)}/>
                                            <label for="type_1" className={stylesCss["form-label"]}>&nbsp;Bạch thủ ghép xuôi&nbsp;</label>
                                            <input type="radio" name="type" id="type_2" value="2" checked={type == "2" ? "chected" : ""} onChange={(e) => handleType(e)}/>
                                            <label for="type_2" className={stylesCss["form-label"]}>&nbsp;Bạch thủ ghép ngược&nbsp;</label>
                                        </div>
                                        <input type="submit" value="Xem kết quả" name="sbtTinh" className={stylesCss["btn-btn-default"]} onClick={() => handleTriangularLotteryPrediction()}/>
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
                                        {
                                            table?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        {
                                                            item?.map((val, indexVal) => {
                                                                if(indexVal == 0){
                                                                    return(
                                                                        <td key={indexVal} className={stylesCss["triangular-title"]}>{val?.data_item}</td>
                                                                    )
                                                                } else {
                                                                    if(val?.data_item?.trim().length > 0) {
                                                                        return (
                                                                            <td key={indexVal}>
                                                                                <Link className={stylesCss["data-item-href"]} href="#">
                                                                                    {val?.data_item}
                                                                                </Link>
                                                                            </td>
                                                                        )
                                                                    } else {
                                                                        return(
                                                                            <td key={indexVal}>
                                                                                &nbsp;&nbsp;
                                                                            </td>
                                                                        )
                                                                    }
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
    );
}

export const getServerSideProps = async () => {
    const dataFormat = "YYYY-MM-DD"
    const toDate = moment(new Date()).format(dataFormat);
    const level = "00";
    const days = "2";
    const type = "1";

    const params = {
        todate: toDate,
        level: level,
        days: days,
        type: type,
    }
    const [
        data
    ] = await Promise.all([
        getTriangularLotteryPrediction(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default TriangularLotteryPrediction;