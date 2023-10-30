import React, { useState } from 'react'
import stylesCss from '../../styles/SpecialCycleStatistics.module.css'
import { Button } from 'antd';
import moment from 'moment';

function SpecialCycleStatistics() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));

  return (
    <div className={stylesCss['wrapper']}>
        <div className={stylesCss['title']}>Tổng hợp chu kỳ của giải đặc biệt</div>
        <div className={stylesCss['choose']}>
          <span>Biên ngày : (Ngày/Tháng/Năm) </span> 
          <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
          <Button>Xem kết quả</Button>
        </div>
        <table className="">
          <tbody>
            <tr>
              <th>
                1. Chu kỳ đầu (Thống kê chu kỳ gần nhất của các <b>số đầu</b> trong 2 số
                cuối của giải đặc biệt tính đến ngày <b>29/10/2023</b>)
              </th>
              <th>Max đại</th>
            </tr>
            {Array.from({length: 31}).map(i => (
                <tr>
                  <td>Đầu <span className={stylesCss['text-1']}>0</span> Ra ngày <span className={stylesCss['text-2']}>19/10/2023</span> Đến nay vẫn chưa ra là  <span className={stylesCss['text-1']}>10</span> ngày	</td>
                  <td><span className={stylesCss['text-1']}>43</span> ngày</td>
                </tr>
            ))}

          </tbody>
        </table>
    </div>

  )
}

export default SpecialCycleStatistics