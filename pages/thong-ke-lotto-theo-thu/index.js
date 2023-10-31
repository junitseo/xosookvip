import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { listWeekdays } from "../../app/data/listWeekdays"
import { dataNorthernLotteryStatistics } from "../../app/data/dataNorthernLotteryStatistics"
import { useState } from "react";
import { Table } from "antd";
import Meta from "app/components/Meta"

const NorthernLotteryStatistics = () => {
    const [data, setData] = useState(dataNorthernLotteryStatistics);

    const columns = [
        {
            title: 'Cặp số',
            dataIndex: 'number',
        },
        {
            title: 'Tổng lần về',
            dataIndex: 'totalNumber',
        },
        {
            title: 'Ngày về cuối',
            dataIndex: 'date',
        },
        {
            title: 'Số ngày chưa về đúng ngày Thứ sáu',
            dataIndex: 'numberDate',
        },
    ];

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
                                                    <input className={stylesCss["form-control"]} type="text" name="day_from" value="27/09/2023" maxLength="10" />
                                                </td>
                                                <td align="left">
                                                    Đến ngày (Ngày/Tháng/Năm)&nbsp;
                                                    <input className={stylesCss["form-control"]} type="text" name="day_to" value="27/10/2023" maxLength="10" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    Tổng số lượt về &gt;=&nbsp;
                                                    <input className={stylesCss["form-control"]} type="text" name="number" value="2" maxLength="10" />
                                                </td>
                                                <td align="left">
                                                    Theo thứ&nbsp;
                                                    <select name="week_day" className={stylesCss["form-control"]}>
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
                                                    <input className={stylesCss["btn-btn-default"]} type="submit" name="sbtsubmit" value="Xem kết quả" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <table cellPadding="2" cellSpacing="2" width="100%">
                                    <tbody>
                                        <tr>
                                            <th className={stylesCss["title-bar-box"]}>Bảng thống kê tần suất xuất hiện các cặp số lotto theo <font color="blue">Thứ sáu</font>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <Table columns={columns} dataSource={data} pagination={{ pageSize: 13 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NorthernLotteryStatistics;