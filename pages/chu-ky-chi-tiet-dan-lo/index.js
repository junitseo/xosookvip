import { useEffect, useState } from "react";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import { getLotDetailCycles } from "../../stores/statisticsOfNorthernLot";
import moment from "moment";
import { DatePicker } from "antd";
import Link from "next/link";

const LotDetailCycle = (props) => {
    const [data, setData] = useState(props.data);
    const [table, setTable] = useState({});
    const [detailLotDetailCycle, setDetailLotDetailCycle] = useState([]);
    const [totalLotDetailCycle, setTotalLotDetailCycle] = useState([]);

    const [listNumber, setListNumber] = useState("02,47");
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

    const handleLotDetailCycle = async () => {
        const params = {
            list_number: listNumber,
            day_from: isDateFrom ? dateFrom : moment(dateFrom).format(dateFormat),
            day_to: isDateTo ? dateTo : moment(dateTo).format(dateFormat),
        }
        const data = await getLotDetailCycles(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data) {
                setTable(data);
            }
            if(data.detail_lotDetailCycle){
                setDetailLotDetailCycle(data.detail_lotDetailCycle);
            }
            if(data.total_lotDetailCycle){
                setTotalLotDetailCycle(data.total_lotDetailCycle);
            }
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);
    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê chu kỳ chi tiết dàn lô" 
            description="Thống kê chu kỳ chi tiết dàn lô" 
            keywords="Thống kê chu kỳ chi tiết dàn lô,xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc"/>
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
                                                <input type="text" name="day_so" value={listNumber} className={stylesCss["form-control"]} onChange={(e) => setListNumber(e.target.value)} />
                                                <div className={stylesCss["form-group-form-inline"]}>
                                                    <span className={stylesCss["item-select"]}>
                                                        Từ ngày (Ngày/Tháng/Năm)&nbsp;
                                                        <DatePicker defaultValue={moment(dateFrom, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateFrom(date, dateString)} />
                                                    </span>
                                                    <span className={stylesCss["item-select"]}>
                                                        &nbsp;Đến ngày (Ngày/Tháng/Năm)&nbsp;
                                                        <DatePicker defaultValue={moment(dateTo, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateTo(date, dateString)} />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} onClick={() => handleLotDetailCycle()}/>
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
                                        <b>{table?.list_number}</b>
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
                                    <div>
                                        - Dàn số: <font color="red"><b>{table?.content_one}</b></font>
                                    </div>
                                    <div>
                                        - Chu kỳ dài nhất xuất hiện dàn số là : <font color="red"><b>{table?.content_tow}</b></font>
                                    </div>
                                    <div>
                                        - Ngày mới nhất mà dãy số xuất hiện là: <font color="red"><b>{table?.content_three}</b></font>
                                    </div>
                                    <div>
                                        - Điểm gan đến nay là: <font color="red"><b>{table?.content_four}</b></font> ngày
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
                                    <div className={stylesCss["detail-title"]} >Chi tiết chu kỳ của dàn số: <font color="red"><b>{table?.list_number}</b></font>
                                    </div>
                                    <div style={{ padding: '15px' }}>
                                        &lt;- -
                                        {
                                            detailLotDetailCycle?.map((item, index) => {
                                                return (
                                                    <span key={index}>
                                                        <span title="">{item?.number}</span>
                                                        <span> - </span>
                                                    </span>
                                                );
                                            })
                                        }
                                        &lt;- -|
                                    </div>
                                    <div className={stylesCss["detail-total-title"]}>
                                        Tổng hợp lại chu kỳ của dàn số: <font color="red"><b>{table?.list_number}</b></font>
                                    </div>
                                    <div style={{ padding: '15px' }}>
                                        {
                                            totalLotDetailCycle?.map((item, index) => {
                                                return(
                                                    <div key={index}>
                                                        Chu kỳ
                                                        <font color="red"><b>{item?.number_one}</b></font>
                                                            ngày đã về lặp lại <font color="red"><b>{item?.number_tow}</b>
                                                        </font>
                                                        lần 
                                                    </div>
                                                )
                                            })
                                        }
                                      
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

export const getServerSideProps = async () => {
    const dateFormat = "DD/MM/YYYY";
    const list_number = "02,47";
    const day_from = moment(new Date()).format(dateFormat);
    const day_to = moment(new Date().setDate(new Date().getDate() - 5)).format(dateFormat);

    const params = {
        list_number: list_number,
        day_from: day_from,
        day_to: day_to,
    }
    const [
        data
    ] = await Promise.all([
        getLotDetailCycles(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default LotDetailCycle;