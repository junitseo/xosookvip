import { Table } from "antd";
import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"
import { getStatisticsOfLotteryRhythmFrequency } from "../../stores/statisticsOfNorthernLot";
import { useEffect, useState } from "react";
import moment from "moment";

const StatisticsOfLotteryRhythmFrequency = (props) => {
    const [dataTable, setDataTable] = useState(props.data);
    const [dataHeaderTable, setDataHeaderTable] = useState([]);
    const [table, setTable] = useState([]);

    const loadDataTable = (dataTable) => {
        if (dataTable){
            if(dataTable.header){
                dataTable.header.map((item)=>{
                    return(
                        item.header = item.header.replaceAll("-", `<span> - </span>`)
                    )
                })
                setDataHeaderTable(dataTable.header);
            }
            if(dataTable.table_data){
                setTable(dataTable.table_data)
            }
        }
    }

    useEffect(()=>{
        loadDataTable(dataTable);
    },[]);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê tần suất lotto theo cặp" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê những cặp số nào ra nhiều nhất sau các cặp số vừa mới ra</h1>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellPadding="0" cellSpacing="0" className={stylesCss["table-report"]}>
                                <tbody>
                                    <tr>
                                        {
                                            dataHeaderTable?.map((item, index) =>{
                                                return(
                                                    <th key={index} className={stylesCss["table-th"]} dangerouslySetInnerHTML={{ __html: item?.header }}>
                                                    </th>
                                                )
                                            })
                                        }
                                    </tr>
                                    {
                                        table?.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    {
                                                        item?.map((val, indexVal)=>{
                                                            return(
                                                                indexVal == 0 ?
                                                                    <td className={stylesCss["content-number-item"]}>{val.data_item}</td>
                                                                :
                                                                    <td align="center" valign="middle" className={stylesCss["width-column"]}>
                                                                        <div className={ val.data_item.trim().length > 0 ? stylesCss["column-item"] : stylesCss["div-item"]}>{val.data_item}</div>
                                                                    </td>
                                                            )
                                                        })
                                                    }
                                                </tr> 
                                            )
                                        })
                                    }                                    
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
        getStatisticsOfLotteryRhythmFrequency(date)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default StatisticsOfLotteryRhythmFrequency;