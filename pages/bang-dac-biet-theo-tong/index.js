import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialWeek.module.css'
import moment from 'moment';
import { Button, Radio } from 'antd';
import Meta from "app/components/Meta"

function Page() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));

  return (
    <div  className={stylesCss['wrapper']}>
      <Meta title="Thống kê kết quả đặc biệt theo tổng"/>
      <h2 className={stylesCss['title']}>Thống kê kết quả đặc biệt theo tổng</h2>
      <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <Button style={{marginBottom: 10}}>Xem kết quả</Button>
      <div className="wrapper-table">
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
                  <strong style={{color: "red"}}>7</strong>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                  <strong style={{color: "red"}}>7</strong>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                  <strong style={{color: "red"}}>7</strong>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                  <strong style={{color: "red"}}>7</strong>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                  <strong style={{color: "red"}}>7</strong>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                  <strong style={{color: "red"}}>7</strong>
                </td>
                <td>
                  35252
                  <span className={stylesCss['day']}>
                    09-09-2023
                  </span>
                  <strong style={{color: "red"}}>7</strong>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>       
    </div>
  )
}

export default Page