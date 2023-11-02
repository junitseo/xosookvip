import { useState } from "react";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import { statisticsOnSiblingPairs } from "../../app/data/statisticsOnSiblingPairs"
import Meta from "app/components/Meta"

const StatisticsOnSiblingPairs = () => {
    const [data, setData] = useState(statisticsOnSiblingPairs);
    const [itemShow, setItemShow] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const handleShowItem = (event) => {
        setItemShow(event);
        setIsShow(!isShow);
    }

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê cặp số anh em" />
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
                                            <td align="left">27 cặp số lotto về ngày&nbsp;
                                                <font color="red">28/10/2023 : 57, 58, 73, 72, 55, 56, 69, 98, 14, 08, 77, 89, 25, 37, 98, 77, 65, 77, 28, 59, 98, 63, 08, 97, 93, 74, 83</font>
                                                <br /> Dãy số lotto cần thống kê: (các cặp số cách nhau bởi dấu phẩy. VD: 16,17)
                                                <br />
                                                <input className={stylesCss["form-control"]} type="text" name="day_so" value="57,58,73,72" style={{ width: '90%' }} />
                                                <div class="form-group form-inline">
                                                    <br /> Biên ngày(Ngày/Tháng/Năm)&nbsp;
                                                    <input className={stylesCss["form-control"]} type="text" name="day_to" value="28/10/2023" style={{ width: '150px' }} maxLength="10" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                                <br /> Dữ liệu được xử lý trên KQXS MB từ 01/01/2005 đến nay
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div>
                                <div className={stylesCss["title-bar-box"]} style={{ fontWeight: 'bold' }}>Cặp số <font color="red">57,58,73,72</font> vừa mới ra (<font color="red">về cùng nhau</font>) thì lần quay sau đó có thể xuất hiện các cặp số sau: (<font color="red">TOP 20 cặp số về nhiều nhất</font>)</div>
                                <div>
                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className={stylesCss["container-item-box"]}>
                                                        <span className={stylesCss["pair-of-number"]}>Cặp số&nbsp;
                                                            <font color="red">{item.numberOne}&nbsp;</font>
                                                            về&nbsp;
                                                            <font color="red">{item.numberTow}&nbsp;</font>
                                                        </span>
                                                        <span className={stylesCss["pair-of-number-title"]} onClick={() => handleShowItem(item.id)}>&nbsp;lần (Bấm vào đây xem chi tiết các ngày về cặp số này)</span>
                                                    </div>
                                                    <div style={item.id === itemShow && isShow ? { display: 'block' } : { display: 'none' }} className={stylesCss["content-date"]} >
                                                        {
                                                            item.listDate && item.listDate?.map((val, indexVal) => {
                                                                return (
                                                                    <a key={indexVal} href="so-ket-qua.html?date_start=27-01-2014&amp;date_end=27-01-2014&amp;sbtFind=1&amp;week_0=1&amp;week_1=1&amp;week_2=1&amp;week_3=1&amp;week_4=1&amp;week_5=1&amp;week_6=1" target="_blank">{val} ,</a>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsOnSiblingPairs;