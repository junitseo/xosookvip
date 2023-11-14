import moment from "moment";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import { getPairLotteryPrediction } from "../../stores/northernlotteryprediction";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DatePicker } from "antd";

const PairLotteryPrediction = (props) => {

    const [data, setData] = useState(props.data);
    const [table, setTable] = useState([]);

    const [listHistoryOne, setListHistoryOne] = useState([]);
    const [listHistoryTow, setListHistoryTow] = useState([]);
    const [listHistoryThree, setListHistoryThree] = useState([]);

    const dateFormat = "DD/MM/YYYY"
    const [toDate, setToDate] = useState(new Date());
    const [number, setNumber] = useState(3);
    const [isToDate, setIsToDate] = useState(false);

    const handleToDate = (date, dateString) => {
        setToDate(dateString);
        setIsToDate(true);
    };

    const handlePairLotteryPrediction = async () => {
        const params = {
            top_day: isToDate ? toDate : moment(toDate).format(dateFormat),
            number: number,
        }
        const data = await getPairLotteryPrediction(params);
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
            <Meta title="Soi cầu lô cặp kết quả xổ số miền bắc hôm nay hoàn toàn miễn phí" 
            description="Soi cầu lô cặp kết quả xổ số miền bắc hôm nay miễn phí" 
            keywords="soi cau,soi cau mb,soi cau mien bac,soi cau lo,xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc"/>
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Soi cầu lô cặp kết quả xổ số miền bắc hôm nay Hoàn Toàn Miễn Phí - KQXS</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline"]}>
                                    <div align="center">
                                        <table cellPadding="5" cellSpacing="5">
                                            <tbody>
                                                <tr>
                                                    <td>Biên ngày soi cầu (Ngày/Tháng/Năm):&nbsp;
                                                    <DatePicker defaultValue={moment(toDate, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleToDate(date, dateString)} />
                                                    </td>
                                                    <td>Số ngày cầu chạy:&nbsp;
                                                        <input type="text" name="number" value={number} maxLength="2" className={stylesCss["form-control"]} onChange={(e)=> setNumber(e.target.value)}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" align="center">
                                                        <br></br>
                                                        <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} onClick={() => handlePairLotteryPrediction()}/>
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
                                <b>Bạn đang xem toàn bộ cầu có số ngày cầu chạy là <b style={{ color: 'red' }}>{number}</b> ngày:</b>
                                <div className={stylesCss["info-space"]}>
                                    <span className={stylesCss["sred"]}>Chú ý:</span> Để xem vị trí của một cầu bạn chỉ cần di chuột lên link của cầu là thấy.
                                </div>
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
                                                                if (indexVal == 0) {
                                                                    return (
                                                                        <td key={indexVal} className={stylesCss["triangular-title"]}>{val?.data_item}</td>
                                                                    )
                                                                } else {
                                                                    if (val?.data_item?.trim().length > 0) {
                                                                        return (
                                                                            <td key={indexVal}>
                                                                                <Link className={stylesCss["data-item-href"]} href="#">
                                                                                    {val?.data_item}
                                                                                </Link>
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
                                <div class="clb"></div>
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
                                <div class="clb"></div>
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
    const number = 3;

    const params = {
        top_day: toDate,
        number: number,
    }

    const [
        data
    ] = await Promise.all([
        getPairLotteryPrediction(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default PairLotteryPrediction;