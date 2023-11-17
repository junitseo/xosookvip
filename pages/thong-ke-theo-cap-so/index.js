import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticFrequencyPairs.module.css'
import { Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getStatisticTwoNumber } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
import { dateFormat } from 'utils/format'


const handleFilter = (data, day = 10) => {
  const now = new Date();


  const startDate = new Date(now.getTime() - day * 24 * 60 * 60 * 1000);


  const endDate = now;

  const filteredData = data.filter(item => {
    const itemDate = new Date(item.dayPrizeDate);
    return itemDate >= startDate && itemDate <= endDate;
  });

  return filteredData;
}
function StatisticFrequencyPairs({result, startDate, endDate}) {
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)
  const [type, setType] = useState(0);
  const [number, setNumber] = useState("00")
  const [data, setData] = useState(() => result.filter((i) => i.prizeId == 1))
  const [dataOther, setDataOther] = useState(result)
  const [loading, setLoading] = useState(false)
  const [textSelect, setTextSelect] = useState("Tất cả các giải")
  const data10day = useMemo(() => {
    return handleFilter(data, 10)
  },[data])
  const data30day = useMemo(() => {
    return handleFilter(data, 30)
  },[data])
  const data120day = useMemo(() => {
    return handleFilter(data, 120)
  },[data])
  const data365day = useMemo(() => {
    return handleFilter(data, 356)
  },[data])

  const data10dayOther = useMemo(() => {
    return handleFilter(dataOther, 10)
  },[dataOther])
  const data30dayOther = useMemo(() => {
    return handleFilter(dataOther, 30)
  },[dataOther])
  const data120dayOther = useMemo(() => {
    return handleFilter(dataOther, 120)
  },[dataOther])
  const data365dayOther = useMemo(() => {
    return handleFilter(dataOther, 365)
  },[dataOther])

  const handleClick = async () => {
    setLoading(true)
    const d = await getStatisticTwoNumber(start, end, number);
    // console.log(d)
    if(type == 0 || !type){
      setDataOther(d)
    }else {
      const d2 = d.filter((i) => i.prizeId == type)
      setDataOther(d2)
    }
    setTextSelect(dataGiai.find(i => i.value == type).label)
    setData(d.filter((i) => i.prizeId == 1))
    setLoading(false)
  }
  

  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Thống kê 2 số cuối của kết quả xổ số  - Xổ số OKVIP"/>
    {loading && <LoadingPage />}
    <h2 className="title-heading">TThống kê 2 số cuối của kết quả xổ số</h2>
    <div className={stylesCss['choose']}>
        <span>Nhập 2 số cuối </span> 
        <input className="wrap-input" type="string" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Từ ngày </span>
        <DatePicker defaultValue={moment(start, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setStart(dateString)}  />
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày </span> 
        <DatePicker defaultValue={moment(end, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setEnd(dateString)}  />
      </div>
      <div className={stylesCss['choose']}>
        <Select defaultValue={type} options={dataGiai} onChange={v => setType(v)}>
        </Select>
        <Button onClick={handleClick}>Xem kết quả</Button>
      </div>
      <div className={stylesCss['wrap-table']}>
      <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colSpan="2">Đối với GIẢI ĐẶC BIỆT</td>
            </tr>
              <tr>
                <td>Ngày về gần nhất</td>
                <td>{dateFormat(data[data.length - 1].dayPrize)}</td>
              </tr>
              <tr>
                <td>Số lần về trong 10 ngày vừa qua</td>
                <td>{data10day.length}</td>
              </tr>
              <tr>
                <td>Số lần về trong 30 ngày vừa qua</td>
                <td>{data30day.length}</td>
              </tr>
              <tr>
                <td>Số lần về trong 120 ngày vừa qua</td>
                <td>{data120day.length}</td>
              </tr>
              <tr>
                <td>Số lần về trong 365 ngày vừa qua</td>
                <td>{data365day.length}</td>
              </tr>
              <tr>
                <td>Từ 29-10-2022 đến 29-10-2023</td>
                <td>{data.length}</td>
              </tr>
          </tbody>
        </table>
        <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colSpan="2">Đối với <strong>{textSelect}</strong> trong Bảng kết quả</td>
            </tr>
            <tr>
                <td>Ngày về gần nhất</td>
                <td>{dateFormat(dataOther[dataOther.length - 1].dayPrize)}</td>
              </tr>
              <tr>
                <td>Số lần về trong 10 ngày vừa qua</td>
                <td>{data10dayOther.length}</td>
              </tr>
              <tr>
                <td>Số lần về trong 30 ngày vừa qua</td>
                <td>{data30dayOther.length}</td>
              </tr>
              <tr>
                <td>Số lần về trong 120 ngày vừa qua</td>
                <td>{data120dayOther.length}</td>
              </tr>
              <tr>
                <td>Số lần về trong 365 ngày vừa qua</td>
                <td>{data365dayOther.length}</td>
              </tr>
              <tr>
                <td>Từ 29-10-2022 đến 29-10-2023</td>
                <td>{dataOther.length}</td>
              </tr>
          </tbody>
        </table>
      </div>
   
    </div>
  )
}

export default StatisticFrequencyPairs;
const dataGiai = [
  {
    value: 0,
    label: "Tất cả các giải"
  },
  {
    value: 1,
    label: "Giải đặc biệt",
  },
  {
    value: 2,
    label: "Giải nhất",
  },
  {
    value: 3,
    label: "Giải nhì"
  },
  {
    value: 4,
    label: "Giải ba"
  },
  {
    value: 5,
    label: "Giải bốn"
  },
  {
    value: 6,
    label: "Giải năm"
  },
  {
    value: 7,
    label: "Giải sáu"
  },
  {
    value: 8,
    label: "Giải bảy"
  },
]
export const getServerSideProps = async () => {
  const startDate = moment().subtract(365, 'days').format("DD-MM-YYYY");
  const endDate = moment().format("DD-MM-YYYY");
  const data = await getStatisticTwoNumber(startDate, endDate);

  return {
    props: { 
      result: data,
      startDate,
      endDate
    }
  }
}
