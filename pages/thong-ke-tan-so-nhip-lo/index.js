import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { useEffect, useState } from "react";
import Meta from "app/components/Meta"
import { listWeekdays } from "../../app/data/listWeekdays";
import { getStatisticsOfBatchBeatFrequency } from "../../stores/statisticsOfNorthernLot";
import moment from "moment";
import { DatePicker } from "antd";

const StatisticsOfBatchBeatFrequency = (props) => {
    const [dataTable, setDataTable] = useState(props.data);
    const [table, setTable] = useState([]);

    const dateFormat = 'DD-MM-YYYY';
    const dateTimeStart = new Date().setDate(new Date().getDate() - 5);
    const [dateFrom, setDateFrom] = useState(new Date(dateTimeStart));
    const [dateTo, setDateTo] = useState(new Date());
    const [isDateFrom, setIsDateFrom] = useState(false);
    const [isDateTo, setIsDateTo] = useState(false);

    const [numberService, setNumberService] = useState("01")
    const [weekDay, setWeekDay] = useState(1);

    const handleDateFrom = (date, dateString) => {
        setDateFrom(dateString);
        setIsDateFrom(true);
    };

    const handleDateTo = (date, dateString) => {
        setDateTo(dateString);
        setIsDateTo(true);
    };

    const handleStatisticsOfBatchBeatFrequency = async () => {
        const params = {
            date_start: isDateFrom ? dateFrom : moment(dateFrom).format(dateFormat),
            date_end: isDateTo ? dateTo : moment(dateTo).format(dateFormat),
            number_server: numberService,
            day_of_week: weekDay,
        }
        const data = await getStatisticsOfBatchBeatFrequency(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (dataTable) => {
        if (dataTable) {
            if (dataTable.data_content) {
                setTable(dataTable.data_content)
            }
        }
    }

    useEffect(() => {
        loadDataTable(dataTable);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê tần số nhịp lô kết quả xổ số miền bắc - xo so mien bac - xsmb" 
            description="Thống kê Tần số nhịp kết quả xổ số kiến thiết miền bắc MIỄN PHÍ..." 
            keywords="thong ke tan so nhip lo,tần số nhịp lô,soi cau,soi cau mb,soi cau mien bac,soi cau lo,
            soi cau xsmb,soi cau lo de,soi cau xo so mien bac,soi cau xo so,soi cau xsmb,soi cau lo de mien bac,
            soi cau okvip,soi cau lo mien bac,soi cau lo hom nay,soi cau lo mien bac
            ,xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc"/>
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
                                                    <DatePicker defaultValue={moment(dateFrom, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateFrom(date, dateString)} />
                                                </td>
                                                <td align="left">
                                                    Đến ngày: Ngày/Tháng/Năm&nbsp;
                                                    <DatePicker defaultValue={moment(dateTo, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateTo(date, dateString)} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    Cặp số khảo sát:	
                                                    <input type="text" name="biendo" value={numberService} className={stylesCss["form-control"]} onChange={(e) => setNumberService(e.target.value)}/>
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
                                                    <input className={stylesCss["btn-btn-default"]} type="submit" name="sbtsubmit" value="Xem kết quả" onClick={()=> handleStatisticsOfBatchBeatFrequency()}/>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellpadding="5" cellSpacing="0" style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td>Thống kê tần số nhịp xuất hiện cho cặp số: <font color="red">{dataTable?.number_server}</font>
                                            <br></br> Tổng số lần xuất hiện của cặp số này vào Tất cả các thứ là: <font color="red">{dataTable?.times_data}</font> lần
                                            <br></br>
                                            <font color="blue">Đọc hướng dẫn ở cuối trang</font>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className={stylesCss["title-header"]} align="center">Ngày</th>
                                        <th className={stylesCss["title-header"]} align="center">Thứ</th>
                                        <th className={stylesCss["title-header"]} align="center">Về ở giải</th>
                                        <th className={stylesCss["title-header"]} align="center">Số nhịp xuất hiện</th>
                                    </tr>
                                    {
                                        table?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    {
                                                        item?.map((val, indexVal) => {
                                                            return (
                                                                <td className={stylesCss["data-item-td"]} key={indexVal} align="center">{val?.data_item}</td>
                                                            );
                                                        })
                                                    }
                                                </tr>
                                            );
                                        })
                                    }
                                    <tr>
                                        <td>
                                            <p><strong><font color="#FF0000">Chú giải:</font></strong>
                                            </p>
                                            <p>Cột<strong> Số nhịp xuất hiện: </strong>Cho ta biết khoảng cách giữa 2 ngày khi cặp số xuất hiện.
                                                <br></br> Với thông tin cả cột <strong>Số nhịp xuất hiện</strong> cho phép bạn có thể dự đoán được cặp số nào sắp ra trong thời gian tới. </p>
                                            <p>G00: Đặc biệt.
                                                <br></br> G11: Giải nhất.
                                                <br></br> G21: Giải nhì thứ nhất - G22: Giải nhì thứ hai.
                                                <br></br> G31: Giải ba thứ nhất - G32: Giải ba thứ hai - G33: Giải ba thứ ba.
                                                <br></br> G34: Giải ba thứ tư - G35: Giải ba thứ năm - G36: Giải ba thứ sáu.
                                                <br></br> G41: Giải tư thứ nhất - G42: Giải tư thứ hai - G43: Giải tư thứ ba - G44: Giải tư thứ tư.
                                                <br></br> G51: Giải năm thứ nhất - G52: Giải năm thứ hai - G53: Giải năm thứ ba.
                                                <br></br> G54: Giải năm thứ tư - G55: Giải năm thứ năm - G56: Giải năm thứ sáu.
                                                <br></br> G61: Giải sáu thứ nhất - G62: Giải sáu thứ hai - G63: Giải sáu thứ ba.
                                                <br></br> G71: Giải bảy thứ nhất - G72: Giải bảy thứ hai - G73: Giải bảy thứ ba - G74: Giải bảy thứ tư.</p>
                                        </td>
                                    </tr>
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
    const dateTo = moment(new Date()).format('DD-MM-YYYY');
    const dateFrom = moment(new Date().setDate(new Date().getDate() - 5)).format('DD-MM-YYYY');
    const number_server = "01";
    const day_of_week = "1";

    const params = {
        date_start: dateFrom,
        date_end: dateTo,
        number_server: number_server,
        day_of_week: day_of_week,
    }

    const [
        data
    ] = await Promise.all([
        getStatisticsOfBatchBeatFrequency(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}


export default StatisticsOfBatchBeatFrequency;