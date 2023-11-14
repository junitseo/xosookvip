import { useEffect, useState } from "react";
import { getCheckBridgeHistory } from "../../stores/northernlotteryprediction";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import Link from "next/link";

const CheckBridgeHistory = (props) => {

    const [data, setData] = useState(props.data);
    const [table, setTable] = useState([]);
    const [listHistory, setListHistory] = useState([]);
    const [locationOne, setLocationOne] = useState("");
    const [locationTow, setLocationTow] = useState("");
    const [locationTotal, setLocationTotal] = useState("");


    const [indexOne, setIndexOne] = useState(0);
    const [indexTow, setIndexTow] = useState(0);

    const handleCheckBridgeHistory = async () => {
        const params = {
            index_i: indexOne,
            index_j: indexTow
        }
        const data = await getCheckBridgeHistory(params);
        if (data) {
            loadDataTable(data);
        }
    }

    const loadDataTable = (data) => {
        if (data) {
            if (data.data_list_number) {
                setTable(data.data_list_number)
            }
            if (data.list_hitory) {
                setListHistory(data.list_hitory)
            }
            setLocationOne(data?.location_one);
            setLocationTow(data?.location_tow);
            setLocationTotal(data?.location_total);
        }
    }

    useEffect(() => {
        loadDataTable(data);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Kiểm tra lịch sử cầu lô" 
            description="Kiểm tra lịch sử cầu lô" 
            keywords="Kiểm tra lịch sử cầu lô,xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc"/>
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Soi cầu giải đặc biệt</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline"]} align="center">
                                    <span className={stylesCss["item-select"]}>
                                        Vị trí 1:&nbsp;<input type="text" name="index_i" value={indexOne} className={stylesCss["form-control"]} maxLength="3" onChange={(e) => setIndexOne(e.target.value)} />
                                    </span>
                                    <span className={stylesCss["item-select"]}>
                                        &nbsp;Vị trí 2:&nbsp;<input type="text" name="index_j" value={indexTow} className={stylesCss["form-control"]} maxLength="3" onChange={(e) => setIndexTow(e.target.value)} />
                                    </span>

                                    &nbsp;<input type="submit" name="sbtsubmit" value="Thống kê lịch sử cầu" className={stylesCss["btn-btn-default"]} onClick={() => handleCheckBridgeHistory()} />
                                    <br></br>Dữ liệu được khảo sát từ 01/01/2005 đến ngày 30/10/2023
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <div className={stylesCss["botop"]}>
                                <div className={stylesCss["botop-title"]}>Thống kê lịch sử cầu chạy ở &gt;&gt; Vị trí 1:
                                    <font color="red" className={stylesCss["botop-title-text"]}>0</font>
                                    - Vị trí 2:
                                    <font color="red" className={stylesCss["botop-title-text"]}>0</font>
                                </div>
                                <div style={{ lineHeight: '20px' }}>
                                    {
                                        table?.map((item, index) => {
                                            return (
                                                <div>- Số cầu dài
                                                    <font color="red" className={stylesCss["botop-title-text"]}>{item?.date}</font>
                                                    ngày là:
                                                    <font color="red" className={stylesCss["botop-title-text"]}>{item?.number}</font>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div>Tổng số cầu được tạo nên từ một vị trí cầu trên là: <font color="red" className={stylesCss["botop-title-text"]}>{locationTotal}</font> cầu</div>
                                <div className={stylesCss["botop-title"]}>Dưới đây là chi tiết lịch sử cầu chạy ở  &gt;&gt; Vị trí 1: <font color="red" className={stylesCss["botop-title-text-16"]}>{locationOne}</font> - Vị trí 2: <font color="red" className={stylesCss["botop-title-text-16"]}>{locationTow}</font></div>
                                <div>
                                    {
                                        listHistory?.map((item, index) => {
                                            if (item.trim().length > 0) {
                                                return (
                                                    <span>
                                                        =================================================<br></br>
                                                        {item}
                                                        <Link className={stylesCss["data-item-href"]} href="#" target="_blank" rel="nofollow">Xem cầu</Link><br></br>
                                                    </span>
                                                )
                                            }
                                        })

                                    }
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
    const index_i = 1;
    const index_j = 1;

    const params = {
        index_i: index_i,
        index_j: index_j
    }

    const [
        data
    ] = await Promise.all([
        getCheckBridgeHistory(params)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default CheckBridgeHistory;