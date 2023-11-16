import { DatePicker } from "antd";
import { getHeadAndEndLotteryStatistic } from "../../stores/statisticsOfNorthernLot";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import { useEffect, useState } from "react";
import moment from "moment";

const LottoStatistics = (props) => {

    const [dataTable, setDataTable] = useState(props.data);
    const [dataHeaderTableFirst, setDataHeaderTableFirst] = useState([]);
    const [dataTableFirst, setDataTableFirst] = useState([]);
    const [dataTotalTableFirst, setDataTotalTableFirst] = useState([]);

    const [dataHeaderTableLast, setDataHeaderTableLast] = useState([]);
    const [dataTableLast, setDataTableLast] = useState([]);
    const [dataTotalTableLast, setDataTotalTableLast] = useState([]);

    const dateFormat = 'DD-MM-YYYY';
    const [dateTime, setDateTime] = useState(new Date());
    const [dateNow, setDateNow] = useState(moment(dateTime).format(dateFormat));

    const handleDateTime = (date, dateString) => {
        setDateNow(dateString);
    };

    const handleLoadData = async () => {
        const data = await getHeadAndEndLotteryStatistic(dateNow);
        if (data) {
            setDataTable(data);
            loadDataTableFirst(data);
            loadDataTableLast(data);
        }
    }

    const loadDataTableFirst = (dataTable) => {
        let headerTableFirst = [];
        let tableFirst = [];
        let totalTableFirst = [];

        if (dataTable) {
            dataTable.table_data_first?.forEach((item, index) => {
                if (index === 0) {
                    headerTableFirst.push(item);
                } else if (index === (dataTable.table_data_first.length - 1)) {
                    totalTableFirst.push(item)
                }
                else {
                    tableFirst.push(item);
                }
            });
        }
        setDataHeaderTableFirst(headerTableFirst);
        setDataTableFirst(tableFirst);
        setDataTotalTableFirst(totalTableFirst);
    }

    const loadDataTableLast = (dataTable) => {
        let headerTableLast = [];
        let tableLast = [];
        let totalTableLast = [];

        if (dataTable) {
            dataTable.table_data_last?.forEach((item, index) => {
                if (index === 0) {
                    headerTableLast.push(item);
                } else if (index === (dataTable.table_data_last.length - 1)) {
                    totalTableLast.push(item)
                }
                else {
                    tableLast.push(item);
                }
            });
        }
        setDataHeaderTableLast(headerTableLast);
        setDataTableLast(tableLast);
        setDataTotalTableLast(totalTableLast);
    }

    useEffect(() => {
        loadDataTableFirst(dataTable);
        loadDataTableLast(dataTable);
    }, []);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê đầu đuôi lotto" />
            <Meta title="thống kê kết quả xổ số đầu đuôi"
                description="thống kê kết quả xổ số đầu đuôi"
                keywords="thống kê kết quả xổ số đầu đuôi,xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê tần xuất các cặp số loto rơi theo từng giải !</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div align="center" className={stylesCss["form-group-form-inline"]}>
                                <table cellpadding="5" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Biên độ ngày (Ngày/Tháng/Năm)&nbsp;
                                                &nbsp;
                                                <DatePicker defaultValue={moment(dateTime, dateFormat)} format={dateFormat} className={stylesCss["form-control"]} onChange={(date, dateString) => handleDateTime(date, dateString)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" align="center">
                                                <input onClick={() => handleLoadData()} type="submit" name="sbtFind" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                                        {
                                                            dataHeaderTableFirst && dataHeaderTableFirst[0]?.map((item, index) => {
                                                                return (
                                                                    <th key={index} align="center">{item.header}</th>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                    {
                                                        dataTableFirst && dataTableFirst?.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    {
                                                                        item?.map((val, indexVal) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        indexVal === 0 ?
                                                                                            <td align="center" key={indexVal} style={{ color: '#333333' }}>
                                                                                                {val.data_item}
                                                                                            </td>
                                                                                            :
                                                                                            <>
                                                                                                {val.data_item.indexOf('0') > 0 ?
                                                                                                    <td align="center" key={indexVal} style={{ color: '#999999' }}>
                                                                                                        {val.data_item}
                                                                                                    </td>
                                                                                                    :
                                                                                                    <td align="center" key={indexVal} style={{ color: 'blue', background: '#CCCCCC' }}>
                                                                                                        {val.data_item}
                                                                                                    </td>
                                                                                                }
                                                                                            </>
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    <tr>
                                                        {
                                                            dataTotalTableFirst && dataTotalTableFirst[0]?.map((item, index) => {
                                                                return (
                                                                    <th align="center" key={index}>{item.header}</th>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ height: '20px' }}></td>
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
                                                        {
                                                            dataHeaderTableLast && dataHeaderTableLast[0]?.map((item, index) => {
                                                                return (
                                                                    <th key={index} align="center">{item.header}</th>
                                                                )
                                                            })
                                                        }

                                                    </tr>
                                                    {
                                                        dataTableLast && dataTableLast?.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    {
                                                                        item?.map((val, indexVal) => {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        indexVal === 0 ?
                                                                                            <td align="center" key={indexVal} style={{ color: '#333333' }}>
                                                                                                {val.data_item}
                                                                                            </td>
                                                                                            :
                                                                                            <>
                                                                                                {val.data_item.indexOf('0') > 0 ?
                                                                                                    <td align="center" key={indexVal} style={{ color: '#999999' }}>
                                                                                                        {val.data_item}
                                                                                                    </td>
                                                                                                    :
                                                                                                    <td align="center" key={indexVal} style={{ color: 'blue', background: '#CCCCCC' }}>
                                                                                                        {val.data_item}
                                                                                                    </td>
                                                                                                }
                                                                                            </>
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    <tr>
                                                        {
                                                            dataTotalTableLast && dataTotalTableLast[0]?.map((item, index) => {
                                                                return (
                                                                    <th align="center" key={index}>{item.header}</th>
                                                                )
                                                            })
                                                        }
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

export const getServerSideProps = async () => {
    const date = moment(new Date()).format('DD-MM-YYYY');
    const [
        data
    ] = await Promise.all([
        getHeadAndEndLotteryStatistic(date)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default LottoStatistics;