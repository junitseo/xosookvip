import React, { useState } from 'react'
import stylesCss from '../../styles/SpecialStagingStatistics.module.css'
import { Button, Select } from 'antd';
import Meta from "app/components/Meta"
function generateLottoPairs(nums, type) {
  const numbers = nums.split(",").map(num => num);
  const pairs = [];

  if(type == 2){
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        pairs.push([numbers[i], numbers[j]]);
      }
    }
  }else if(type == 3) {
    for (let i = 0; i < numbers.length - 2; i++) {
      for (let j = i + 1; j < numbers.length - 1; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
          pairs.push([numbers[i], numbers[j], numbers[k]]);
        }
      }
    }
  }else {
    for (let i = 0; i < numbers.length - 3; i++) {
      for (let j = i + 1; j < numbers.length - 2; j++) {
        for (let k = j + 1; k < numbers.length - 1; k++) {
          for (let l = k + 1; l < numbers.length; l++) {
            pairs.push([numbers[i], numbers[j], numbers[k], numbers[l]]);
          }
        }
      }
    }
  }
  return pairs;
}
function SpecialStagingStatistics() {
  const [numbers, setNumbers] = useState("00,01,02,03,04,05,06,07,08,09")
  const [data, setData] = useState(() => {
    return generateLottoPairs("00,01,02,03,04,05,06,07,08,09")
  })
  const [type, setType] = useState(4);
  
  const handleClick = () => {
    setData(generateLottoPairs(numbers, type))
  }
  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Ghép chọn lô xiên 2,3,4 - Xổ số OKVIP"/>
    <h2 className="title-heading">Ghép chọn lô xiên 2,3,4</h2> 
    <div><strong>Chú ý:</strong></div>
    <div>1. Dãy số nhập vào phải là các cặp số khác nhau và cách nhau bởi dấu phẩy (,) - không có khoảng cách trắng giữa 2 cặp số. VD: 02,03,04,05,06,07,08,09</div>
    <div>2. Chương trình tạo các cặp xiên chỉ sử dụng cho 10 cặp số khác nhau. Nếu số cặp số tạo xiên vượt quá 10 thì chương trình tự động lấy 10 cặp số đầu tiên để tạo</div>
    <div>3. Là một công cụ sinh các cặp số xiên tự động rất mong giúp các bạn chọn được các cặp xiên đẹp trên dàn số mình dự đoán đưa vào</div>

    <div className={stylesCss['choose']} style={{marginTop: 10}}>
      <div>Nhập dàn số:</div>
      <input className="wrap-input" style={{width: "100%", maxWidth: "500px"}} type="string" value={numbers} onChange={e => setNumbers(e.target.value)}/>
      <Select defaultValue={type} options={dataSelect} onChange={v => setType(v)}>
      </Select>
      <Button onClick={handleClick}>Ghép</Button>
    </div>
    <div className={stylesCss['text1']}>Tổng cặp lô xiên <span className={stylesCss['text2']}>{data[0].length}</span> được tạo thành là: <span className={stylesCss['text2']}>{data.length}</span> cặp</div>
      <div style={{display: "flex", gap: 15, marginTop: 10}}>
          <div style={{width: "100%"}} className={`grid-${data[0].length}`}>
          {data.map((i, index) => (
            <div key={index}>
              {i.map(number => number.toString().padStart(2, "0")).join(",")}
            </div>
          ))}
          </div>
      </div>
    
   
    </div>
  )
}

export default SpecialStagingStatistics;

const dataSelect = [
  {
    value: 2,
    label: "Xiên 2"
  },
  {
    value: 3,
    label: "Xiên 3"
  },
  {
    value: 4,
    label: "Xiên 4"
  },
]

