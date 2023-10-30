import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialGan.module.css'
import { Button, Radio } from 'antd';
import moment from 'moment';

function Page() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));

  return (
    <div className={stylesCss['wrapper']}>
      <h2 className={stylesCss['title']}>Thống kê đặc biệt Gan</h2>
      <div className={stylesCss['choose']}>
        <span>Biên ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Thống kê theo</span>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>2 số cuối</Radio>
          <Radio value={2}>Đầu</Radio>
          <Radio value={3}>Đuôi</Radio>
          <Radio value={4}>Tổng</Radio>
          <Radio value={5}>Bộ số</Radio>
          <Radio value={6}>Dàn chia 3</Radio>
        </Radio.Group>
      </div>
      <Button style={{marginBottom: 10}}>Xem kết quả</Button>
      <div style={{marginBottom: 10, fontSize: 11}} >(Dữ liệu được xử lý và thống kê trên giải đặc biệt của kết quả xổ số miền Bắc từ năm 2000 đến nay)</div>
      <table >
        <tr className={stylesCss['head']}>
          <th>Cặp số</th>
          <th>Tổng lần về</th>
          <th>Ngày về cuối</th>
          <th>Số ngày chưa về</th>
          <th>Số ngày gan cực đại</th>
        </tr>
        {data.map(i => (
          <tr>
            <td className={stylesCss['text1']}>{i}</td>
            <td className={stylesCss['text2']}>9</td>
            <td className={stylesCss['text3']}>05-06-2023</td>
            <td className={stylesCss['text1']}>145</td>
            <td > <span className={stylesCss['text2']}>379</span> <span className={stylesCss['text4']}> (Từ ngày 16/03/2017 đến ngày 30/03/2018)</span></td>
          </tr>
        ))}

      </table>
    </div>
  )
}

export default Page;

function generateNumbers() {
  let numbers = [];
  for (let i = 0; i <= 99; i++) {
      let formattedNumber = i.toString().padStart(2, '0');
      numbers.push(formattedNumber);
  }
  return numbers;
}

let data = generateNumbers();