import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialWeek.module.css'
import moment from 'moment';
import { Button, Radio } from 'antd';

function Page() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));

  return (
    <div  className={stylesCss['wrapper']}>
      <h2 className={stylesCss['title']}>Thống kê kết quả đặc biệt theo tuần</h2>
      <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Thống kê theo</span>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Thông thường</Radio>
          <Radio value={2}>2 số cuối</Radio>
          <Radio value={3}>Đầu</Radio>
          <Radio value={4}>Đuôi</Radio>
        </Radio.Group>
      </div>
      <Button style={{marginBottom: 10}}>Xem kết quả</Button>
      <table
          cellPadding={5}
          cellSpacing={5}
          width="100%"
          background="#ffffff"
        >
          <tbody>
            <tr className={stylesCss['head']}>
              <th>Thứ 2</th>
              <th>Thứ 3</th>
              <th>Thứ 4</th>
              <th>Thứ 5</th>
              <th>Thứ 6</th>
              <th>Thứ 7</th>
              <th>Chủ nhật</th>
            </tr>
            {Array.from({length: 10}).map(i => (
                <tr>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td> <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td> <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td> <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td> <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td> <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>

    </div>
  )
}

export default Page