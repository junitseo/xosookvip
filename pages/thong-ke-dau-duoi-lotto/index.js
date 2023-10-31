import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";

const LottoStatistics = () => {
    return (
        <div className={stylesCss["page-wrapper"]}>
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê tần xuất các cặp số loto rơi theo từng giải !</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div align="center" className={stylesCss["form-group-form-inline"]}>
                                <table cellpadding="5" cellSpacing="0">
                                    <tbody><tr>
                                        <td>
                                            Biên độ ngày (Ngày/Tháng/Năm)&nbsp;
                                            &nbsp;<input type="text" className={stylesCss["form-control"]} name="date_end" value="29/10/2023" />
                                            &nbsp;<input type="submit" name="sbtFind" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellPadding="5" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td valign="top">
                                            <table cellPadding="5" cellSpacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td className={stylesCss["title-bar-box"]}>
                                                            <b>1. Thống kê đầu loto</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["container-bottom-name"]}>Thống kê trong 21 ngày gần đây</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className={stylesCss["table-bordered"]} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th align="center">Ngày\Đầu</th>
                                                        <th align="center">0</th>
                                                        <th align="center">1</th>
                                                        <th align="center">2</th>
                                                        <th align="center">3</th>
                                                        <th align="center">4</th>
                                                        <th align="center">5</th>
                                                        <th align="center">6</th>
                                                        <th align="center">7</th>
                                                        <th align="center">8</th>
                                                        <th align="center">9</th>
                                                    </tr>
                                                    <tr>
                                                        <td>28-10-2023</td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>27-10-2023</td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>26-10-2023</td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>25-10-2023</td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            7 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>24-10-2023</td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>23-10-2023</td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["border-bottom-width"]}>22-10-2023</td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>21-10-2023</td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20-10-2023</td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19-10-2023</td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>18-10-2023</td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>17-10-2023</td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16-10-2023</td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["border-bottom-width"]}>15-10-2023</td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>14-10-2023</td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            8 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>13-10-2023</td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            4 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12-10-2023</td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>11-10-2023</td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>10-10-2023</td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>09-10-2023</td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["border-bottom-width"]}>08-10-2023</td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item-color"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Tổng</th>
                                                        <th align="center">55 Lần</th>
                                                        <th align="center">61 Lần</th>
                                                        <th align="center">59 Lần</th>
                                                        <th align="center">52 Lần</th>
                                                        <th align="center">63 Lần</th>
                                                        <th align="center">60 Lần</th>
                                                        <th align="center">48 Lần</th>
                                                        <th align="center">75 Lần</th>
                                                        <th align="center">66 Lần</th>
                                                        <th align="center">55 Lần</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{height: '20px'}}></td>
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            <table cellpadding="5" cellspacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td class="title-bar-box">
                                                            <b>2. Thống kê đuôi loto</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["table-total-date"]}>Thống kê trong 21 ngày gần đây</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className={stylesCss["table-bordered"]} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th>Ngày\Đuôi</th>
                                                        <th>0</th>
                                                        <th>1</th>
                                                        <th>2</th>
                                                        <th>3</th>
                                                        <th>4</th>
                                                        <th>5</th>
                                                        <th>6</th>
                                                        <th>7</th>
                                                        <th>8</th>
                                                        <th>9</th>
                                                    </tr>
                                                    <tr>
                                                        <td>28-10-2023</td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            7 Lần
                                                        </td>
                                                        <td align="center" title="28-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>27-10-2023</td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="27-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>26-10-2023</td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="26-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>25-10-2023</td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="25-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>24-10-2023</td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="24-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>23-10-2023</td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="23-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["border-bottom-width"]}>22-10-2023</td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="22-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>21-10-2023</td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="21-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>20-10-2023</td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="20-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>19-10-2023</td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="19-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>18-10-2023</td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="18-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>17-10-2023</td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            8 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="17-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16-10-2023</td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="16-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["border-bottom-width"]}>15-10-2023</td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="15-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>14-10-2023</td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="14-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>13-10-2023</td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="13-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            5 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12-10-2023</td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            5 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="12-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>11-10-2023</td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="11-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>10-10-2023</td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="10-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>09-10-2023</td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            6 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            1 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="09-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={stylesCss["border-bottom-width"]}>08-10-2023</td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item-blue"]}>
                                                            4 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            2 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-content"]}>
                                                            0 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                        <td align="center" title="08-10-2023" valign="middle" className={stylesCss["table-bordered-item"]}>
                                                            3 Lần
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Tổng</th>
                                                        <th align="center">67 Lần</th>
                                                        <th align="center">46 Lần</th>
                                                        <th align="center">63 Lần</th>
                                                        <th align="center">63 Lần</th>
                                                        <th align="center">50 Lần</th>
                                                        <th align="center">58 Lần</th>
                                                        <th align="center">61 Lần</th>
                                                        <th align="center">54 Lần</th>
                                                        <th align="center">63 Lần</th>
                                                        <th align="center">69 Lần</th>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default LottoStatistics;