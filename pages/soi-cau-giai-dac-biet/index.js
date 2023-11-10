import moment from "moment";
import { getLotterySlipPrediction } from "../../stores/northernlotteryprediction";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import { DatePicker } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dataDays } from "../../app/data/dataDay";

const LotterySlipPrediction = (props) => {
    const [data, setData] = useState(props.data);
    const [table, setTable] = useState([]);
    const [listHistoryOne, setListHistoryOne] = useState([]);
    const [listHistoryTow, setListHistoryTow] = useState([]);
    const [listHistoryThree, setListHistoryThree] = useState([]);

    const [dataDay, setDataDay] = useState(dataDays);

    const [days, setDays] = useState("1");
    const dateFormat = "DD/MM/YYYY"
    const [toDate, setToDate] = useState(new Date());
    const [isToDate, setIsToDate] = useState(false);
    const [type, setType] = useState("1");

    const handleToDate = (date, dateString) => {
        setToDate(dateString);
        setIsToDate(true);
    };

    const handleDay = (e) => {
        setDays(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleLotterySlipPrediction = async () => {
        const params = {
            top_day: isToDate ? toDate : moment(toDate).format(dateFormat),
            number: days,
            kieu_soi: type
        }
        const data = await getLotterySlipPrediction(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data.data_table) {
                setTable(data.data_table)
            }
            if (data.list_old_bridge_one) {
                setListHistoryOne(data.list_old_bridge_one)
            }
            if (data.list_old_bridge_tow) {
                setListHistoryTow(data.list_old_bridge_tow)
            }
            if (data.list_old_bridge_three) {
                setListHistoryThree(data.list_old_bridge_three)
            }
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Soi cầu giải đặc biệt" />
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
                                            Để xem rất đơn giản bạn chỉ cần chọn Biên ngày, Số ngày cầu chạy và kiểu soi rồi bấm nút Xem kết quả để xem. Khi bạn muốn xem các cầu trong quá khứ bạn có thể nhập Biên ngày là một ngày khác trước đó.<br></br>
                                            <b>Chú ý:</b>
                                            - Số ngày cầu chạy: khi xem một kiểu soi mới yêu cầu bạn chọn số ngày bằng 1 cho lần xem đầu. Các lần xem sau bạn có thể xem số ngày lớn hơn.<br></br>
                                            - Cầu chạm số: là cầu được tính khi 1 hay cả 2 số của 2 vị trí cầu xuất hiện trong 2 số cuối giải đặc biệt của ngày hôm sau.<br></br>
                                            - Cầu chạm tổng: là cầu được tính khi 1 hay cả 2 số của 2 vị trí bằng tổng của 2 số cuối giải đặc biệt ngày hôm sau.<br></br>
                                            - Cầu chạm bộ số: là cầu được tính khi bộ số của 2 số của 2 vị trí cầu là bộ số của giải đặc biệt ngày hôm sau.<br></br>
                                        </i>
                                    </div>
                                    <div align="center">
                                        <table cellPadding="5" cellSpacing="5">
                                            <tbody>
                                                <tr>
                                                    <td align="center">Biên ngày soi cầu (Ngày/Tháng/Năm):&nbsp;
                                                        <DatePicker defaultValue={moment(toDate, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleToDate(date, dateString)} />
                                                    </td>
                                                    <td align="center">Số ngày cầu chạy:&nbsp;
                                                        <select name="number" className={stylesCss["form-control"]} onChange={(e) => handleDay(e)}>
                                                            {
                                                                dataDay.map((item, index) => {
                                                                    if (index == 0) {
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
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" align="center">
                                                        Kiểu soi:&nbsp;
                                                        <input type="radio" name="kieu_soi" value="1" id="kieu_soi_1" checked={type == "1" ? "chected" : ""} onChange={(e) => handleType(e)} />
                                                        <label for="kieu_soi_1">&nbsp;Cầu chạm số&nbsp;</label>
                                                        <input type="radio" name="kieu_soi" value="2" id="kieu_soi_2" checked={type == "2" ? "chected" : ""} onChange={(e) => handleType(e)} />
                                                        <label for="kieu_soi_2">&nbsp;Cầu chạm tổng&nbsp;</label>
                                                        <input type="radio" name="kieu_soi" value="3" id="kieu_soi_3" checked={type == "3" ? "chected" : ""} onChange={(e) => handleType(e)} />
                                                        <label for="kieu_soi_3">&nbsp;Cầu chạm bộ số&nbsp;</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" align="center">
                                                        <br></br>
                                                        <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} onClick={() => handleLotterySlipPrediction()} />
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>Bạn đang xem toàn bộ cầu có số ngày cầu chạy là <b style={{ color: 'red' }}>{days}</b> ngày</b>
                                <div className={stylesCss["info-space"]}>
                                    <span className={stylesCss["sred"]}>Chú ý:</span> Để xem vị trí của một cầu bạn chỉ cần di chuột lên link của cầu là thấy..
                                </div>
                            </div>

                            <div className={stylesCss["container-triangular"]} align="center">
                                <table cellSpacing="0" cellPadding="5" className={stylesCss["table-bordered"]}>
                                    <tbody>
                                        {
                                            table?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        {
                                                            item?.map((val, indexVal) => {
                                                                if (indexVal == 0) {
                                                                    return (
                                                                        <td key={indexVal} className={stylesCss["table-bordered-full"]}>{val?.data_item}</td>
                                                                    )
                                                                } else {
                                                                    if (val?.data_item?.trim().length > 0) {
                                                                        return (
                                                                            <td key={indexVal} className={stylesCss["tc"]}>
                                                                                <Link className={stylesCss["data-item-href"]} href="#" target="_blank" rel="nofollow">{val?.data_item}</Link>
                                                                            </td>
                                                                        )
                                                                    } else {
                                                                        return (
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

                            <div className={stylesCss["title-bar-box"]}>
                                <b>{listHistoryOne[0]?.title}</b> - là những cầu có chiều dài cầu vượt số ngày cầu chạy bạn nhập vào
                            </div>
                            <div>
                                {
                                    listHistoryOne && listHistoryOne[0]?.data?.map((item, index) => {
                                        return (
                                            <div key={index} className={stylesCss["title-bar-box-content"]}>
                                                {
                                                    item?.location && item?.number ?
                                                        <>
                                                            [<Link className={stylesCss["data-item-href"]} href="#" target="_blank" rel="nofollow">{item?.location}</Link>] Cặp số: <b>{item?.number}</b>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className={stylesCss["clb"]}></div>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>{listHistoryTow[0]?.title}</b> - là những cầu có chiều dài cầu bằng số ngày cầu chạy bạn nhập vào
                            </div>
                            <div>
                                {
                                    listHistoryTow && listHistoryTow[0]?.data?.map((item, index) => {
                                        return (
                                            <div key={index} className={stylesCss["title-bar-box-content"]}>
                                                {
                                                    item?.location && item?.number ?
                                                        <>
                                                            [<Link className={stylesCss["data-item-href"]} href="#" target="_blank" rel="nofollow">{item?.location}</Link>] Cặp số: <b>{item?.number}</b>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className={stylesCss["clb"]}></div>
                            <div className={stylesCss["title-bar-box"]}>
                                <b>Tổng số các cầu xuất hiện theo các cặp số là:</b>
                            </div>
                            <div>
                                {
                                    listHistoryThree && listHistoryThree[0]?.data?.map((item, index)=> {
                                        return (
                                            <div key={index} className={stylesCss["title-bar-box-content"]}>
                                                Cặp số <b>{item?.number}</b> xuất hiện <font color="red">{item?.location}</font> lần
                                            </div>
                                        )
                                    })
                                }
                                <div class="clb"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const dataFormat = "DD/MM/YYYY"
    const toDate = moment(new Date()).format(dataFormat);
    const number = 1;
    const kieu_soi = 1;

    const params = {
        top_day: toDate,
        number: number,
        kieu_soi: kieu_soi
    }

    const [
        data
    ] = await Promise.all([
        getLotterySlipPrediction(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default LotterySlipPrediction;