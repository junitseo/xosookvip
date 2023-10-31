import React, { useState } from 'react'
import stylesCss from '../../styles/SpecialStagingStatistics.module.css'
import { Button, Select } from 'antd';
import Meta from "app/components/Meta"

function SpecialStagingStatistics() {
  const [select, setSelect] = useState(2)
  const [numbers, setNumbers] = useState("00,01,02,03,04,05,06,07,08,09")
  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Ghép chọn lô xiên 2,3,4"/>
    <h2 className={stylesCss['title']}>Ghép chọn lô xiên 2,3,4</h2> 
    <div><strong>Chú ý:</strong></div>
    <div>1. Dãy số nhập vào phải là các cặp số khác nhau và cách nhau bởi dấu phẩy (,) - không có khoảng cách trắng giữa 2 cặp số. VD: 02,03,04,05,06,07,08,09</div>
    <div>2. Chương trình tạo các cặp xiên chỉ sử dụng cho 10 cặp số khác nhau. Nếu số cặp số tạo xiên vượt quá 10 thì chương trình tự động lấy 10 cặp số đầu tiên để tạo</div>
    <div>3. Là một công cụ sinh các cặp số xiên tự động rất mong giúp các bạn chọn được các cặp xiên đẹp trên dàn số mình dự đoán đưa vào</div>

    <div className={stylesCss['choose']} style={{marginTop: 10}}>
      <div>Nhập dàn số:</div>
      <input style={{width: "100%", maxWidth: "500px"}} type="string" value={numbers} onChange={e => setNumbers(e.target.value)}/>
      <Select defaultValue={select} options={dataSelect} onChange={v => setSelect(v)}>
      </Select>
      <Button>Ghép</Button>
    </div>
    <div className={stylesCss['text1']}>Tổng cặp lô xiên <span className={stylesCss['text2']}>4</span> được tạo thành là: <span className={stylesCss['text2']}>210</span> cặp</div>
      <div style={{display: "flex", gap: 15, marginTop: 10}}>
      <table
        >
          {Array.from({length: 10}).map(i => (
            <tbody>
            <td>00,01,02,03</td>
            <td>00,01,02,03</td>
            <td>00,01,02,03</td>
            <td>00,01,02,03</td>
            </tbody>
          ))}
         
        </table>
      </div>
    
   
    </div>
  )
}

export default SpecialStagingStatistics;

const dataSelect = [
  {
    value: 0,
    label: "Xiên 2"
  },
  {
    value: 1,
    label: "Xiên 3"
  },
  {
    value: 2,
    label: "Xiên 4"
  },
]

