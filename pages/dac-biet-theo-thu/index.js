import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialByDayOfWeek.module.css'
import { Button, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"

function StatisticsSpecialByDayOfWeek() {
  const [select, setSelect] = useState(1)
  const [number, setNumber] = useState(1)
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Thống kê các cặp số đặc biệt theo từng thứ trong tuần"/>
    <h2 className={stylesCss['title']}>Thống kê các cặp số đặc biệt theo từng thứ trong tuần</h2> 
    <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
    </div>
    <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
    </div>
    <div className={stylesCss['choose']}>
        <span>{`Tổng số lượt về >=`}</span> 
        <input type="string" value={number} onChange={e => setNumber(e.target.value)}/>
    </div>
    <div className={stylesCss['choose']}>
      <span>Theo thứ</span> 
      <Select defaultValue={select} options={dataSelect} onChange={v => setSelect(v)}>
      </Select>
    </div>
    <Button style={{marginBottom: 15}}>Xem kết quả</Button>
    <div className={stylesCss['text1']}>
Bảng thống kê tần suất xuất hiện các cặp số lotto theo  <span className={stylesCss['text2']}>Chủ nhật</span> </div>
      <div style={{display: "flex", gap: 15, marginTop: 10}}>
      <table>
            <tbody>
              <tr className={stylesCss['head']}>
                <th>Cặp số</th>
                <th>Tổng lần về</th>
                <th>Ngày về cuối</th>
                <th>Số ngày chưa về đúng ngày Chủ nhật</th>
              </tr>
              {Array.from({length: 6}).map(i => (
              <tr>
                <td className={stylesCss['text3']}>89</td>
                <td className={stylesCss['text2']}>1</td>
                <td className={stylesCss['text4']}>01-10-2023</td>
                <td className={stylesCss['text3']}>4</td>
              </tr>
               ))}
            </tbody>
        </table>
      </div>
    
   
    </div>
  )
}

export default StatisticsSpecialByDayOfWeek;

const dataSelect = [
  {
    value: 0,
    label: "Tất cả các thứ"
  },
  {
    value: 1,
    label: "Chủ nhật"
  },
  {
    value: 2,
    label: "Thứ hai"
  },
  {
    value: 3,
    label: "Thứ ba"
  },
  {
    value: 4,
    label: "Thứ bốn"
  },
  {
    value: 5,
    label: "Thứ năm"
  },
  {
    value: 6,
    label: "Thứ sáu"
  },
  {
    value: 7,
    label: "Thứ bảy"
  },
]

