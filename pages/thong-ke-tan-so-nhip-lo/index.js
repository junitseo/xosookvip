import { Table } from "antd";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { dataStatisticsOfLotteryRhythmFrequency } from "../../app/data/dataStatisticsOfLotteryRhythmFrequency"
import { useState } from "react";
import Meta from "app/components/Meta"

const StatisticsOfLotteryRhythmFrequency = () => {
    const columns = [
        {
            title: 'Ngày',
            dataIndex: 'date',
        },
        {
            title: 'Thứ',
            dataIndex: 'weekdays',
        },
        {
            title: 'Về ở giải',
            dataIndex: 'price',
        },
        {
            title: 'Số nhịp xuất hiện',
            dataIndex: 'numberDate',
        },
    ];

    const [data, setData] = useState(dataStatisticsOfLotteryRhythmFrequency);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê tần số nhịp lô" />
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
                                                <td>Từ ngày: Ngày/Tháng/Năm
                                                    <br></br>
                                                    <input className={stylesCss["form-control"]} type="text" name="date_start" value="01/01/2020" />
                                                </td>
                                                <td>&nbsp;Đến ngày: Ngày/Tháng/Năm
                                                    <br></br>
                                                    <input type="text" className={stylesCss["form-control"]} name="date_end" value="28/10/2023" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" align="center">
                                                &nbsp;nhập số ngày&nbsp;
                                                    <input type="text" name="biendo" value="10" className={stylesCss["form-control"]} />&nbsp;
                                                    <input type="submit" name="sbtFind" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellpadding="5" cellSpacing="0" style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Thống kê tần số nhịp xuất hiện cho cặp số: <font color="red">00</font>
                                            <br></br> Tổng số lần xuất hiện của cặp số này vào Tất cả các thứ là: <font color="red">108</font> lần
                                            <br></br>
                                            <font color="blue">Đọc hướng dẫn ở cuối trang</font>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Table columns={columns} dataSource={data} pagination={{ pageSize: 13 }} />
                                        </td>
                                    </tr>
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

export default StatisticsOfLotteryRhythmFrequency;