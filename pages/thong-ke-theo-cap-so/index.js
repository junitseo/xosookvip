import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticFrequencyPairs.module.css'
import { Button, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"

function StatisticFrequencyPairs() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [type, setType] = useState("00");
  const [number, setNumber] = useState("00")
  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Thống kê 2 số cuối của kết quả xổ số"/>

    <h2 className={stylesCss['title']}>TThống kê 2 số cuối của kết quả xổ số</h2>
    <div className={stylesCss['choose']}>
        <span>Nhập 2 số cuối </span> 
        <input type="string" value={number} onChange={e => setNumber(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <Select defaultValue={type} options={data} onChange={v => setType(v)}>
        </Select>
        <Button>Xem kết quả</Button>
      </div>
      <div className={stylesCss['wrap-table']}>
      <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Đối với GIẢI ĐẶC BIỆT</td>
            </tr>
            {data2.map(i => (
              <tr>
                <td>{i.name}</td>
                <td>1 lần</td>
              </tr>
            ))}
          
          </tbody>
        </table>
        <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Đối với <strong>Tất cả các giải</strong> trong Bảng kết quả</td>
            </tr>
            {data2.map(i => (
              <tr>
                <td>{i.name}</td>
                <td>1 lần</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
   
    </div>
  )
}

export default StatisticFrequencyPairs;
const data = [
  {
    value: "all",
    label: "Tất cả giải"
  },
  {
    value: "00",
    label: "Giải đặc biệt"
  },
  {
    value: "11",
    label: "Giải nhất"
  },
  {
    value: "21",
    label: "Giải nhì thứ 1"
  },
  {
    value: "22",
    label: "Giải nhì thứ 2"
  },
  {
    value: "31",
    label: "Giải ba thứ 1"
  },
  {
    value: "32",
    label: "Giải ba thứ 2"
  },
  {
    value: "33",
    label: "Giải ba thứ 3"
  },
  {
    value: "34",
    label: "Giải ba thứ 4"
  },
  {
    value: "35",
    label: "Giải ba thứ 5"
  },
  {
    value: "36",
    label: "Giải ba thứ 6"
  },
  {
    value: "41",
    label: "Giải bốn thứ 1"
  },
  {
    value: "42",
    label: "Giải bốn thứ 2"
  },
  {
    value: "43",
    label: "Giải bốn thứ 3"
  },
  {
    value: "44",
    label: "Giải bốn thứ 4"
  },
  {
    value: "51",
    label: "Giải năm thứ 1"
  },
  {
    value: "52",
    label: "Giải năm thứ 2"
  },
  {
    value: "53",
    label: "Giải năm thứ 3"
  },
  {
    value: "54",
    label: "Giải năm thứ 4"
  },
  {
    value: "55",
    label: "Giải năm thứ 5"
  },
  {
    value: "56",
    label: "Giải năm thứ 6"
  },
  {
    value: "61",
    label: "Giải sáu thứ 1"
  },
  {
    value: "62",
    label: "Giải sáu thứ 2"
  },
  {
    value: "63",
    label: "Giải sáu thứ 3"
  },
  {
    value: "71",
    label: "Giải bảy thứ 1"
  },
  {
    value: "72",
    label: "Giải bảy thứ 2"
  },
  {
    value: "73",
    label: "Giải bảy thứ 3"
  },
  {
    value: "74",
    label: "Giải bảy thứ 4"
  },
]
const data2 = [
  {
    name: "Ngày về gần nhất"
  },
  {
    name: 'Số lần về trong 10 ngày vừa qua'
  },
  {
    name: 'Số lần về trong 30 ngày vừa qua'
  },
  {
    name: 'Số lần về trong 120 ngày vừa qua'
  },
  {
    name: 'Số lần về trong 356 ngày vừa qua'
  },
  {
    name: 'Từ 29-10-2022 đến 29-10-2023'
  }
]