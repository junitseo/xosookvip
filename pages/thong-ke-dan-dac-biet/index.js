import React, { useState } from 'react'
import stylesCss from '../../styles/SpecialStagingStatistics.module.css'
import { Button, Select } from 'antd';
import Meta from "app/components/Meta"

import moment from 'moment';
function SpecialStagingStatistics() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [numbers, setNumbers] = useState("00, 11, 22, 33, 44, 55, 66, 77, 88, 01")
  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Thống kê dàn đặc biệt"/>
    <h2 className={stylesCss['title']}>Thống kê dàn đặc biệt </h2> 
      <div>Dãy số đặc biệt cần thống kê: (các cặp số cách nhau bởi dấu phẩy. VD: 00,11,22,33,44,55,66,77,88,01)</div> 
      <div className={stylesCss['choose']}>
      <input style={{width: "100%", maxWidth: "500px"}} type="string" value={numbers} onChange={e => setNumbers(e.target.value)}/>
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
        <Button>Xem kết quả</Button>
      </div>
      <div>
        <span className={stylesCss['text1']}>Dãy số: </span>
        <span className={stylesCss['text2']}>00, 11, 22, 33, 44, 55, 66, 77, 88, 01 </span>
      </div>
      <div>
        <span className={stylesCss['text1']}>Ngưỡng cực đại xuất hiện dàn số là : </span>
        <span className={stylesCss['text2']}>66 ngày tính cả ngày về </span>
        <span className={stylesCss['text1']}>(11/10/2016 đến ngày 16/12/2016)</span>
      </div>
      <div>
        <span className={stylesCss['text1']}>Điểm gan đến nay là : </span>
        <span className={stylesCss['text2']}>3 ngày</span>
      </div>

      <div style={{display: "flex", gap: 15, marginTop: 10}}>
      <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Dãy số xếp theo Tổng</td>
            </tr>
            {data.map(i => (
              <tr>
                <td>{i}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
        <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Dãy số xếp theo đầu</td>
            </tr>
            {data.map(i => (
              <tr>
                <td>{i}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    
   
    </div>
  )
}

export default SpecialStagingStatistics;

const data = [
  '19,91,28,82,37,73,46,64,55,00,',
  '01,10,29,92,38,83,47,74,56,65,',
  '02,20,39,93,48,84,57,75,11,66,',
  '03,30,12,21,49,94,58,85,67,76,',
  '04,40,13,31,59,95,68,86,22,77,',
  '05,50,14,41,23,32,69,96,78,87,',
  '06,60,15,51,24,42,79,97,33,88,',
  '07,70,16,61,25,52,34,43,89,98,',
  '08,80,17,71,26,62,35,53,44,99,',
  '09,90,18,81,27,72,36,63,45,54,'
]