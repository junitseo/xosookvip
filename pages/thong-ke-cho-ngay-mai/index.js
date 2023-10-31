import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticsTomorrow.module.css'
import { Button } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"

function StatisticsTomorrow() {
  const [startDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  console.log(startDate);
  return (
    <div className={stylesCss['wrapper']}>
      <Meta title="Thống kê dự báo kết quả sổ xố ngày mai"/>
      <h2 className={stylesCss['title']}>Thống kê dự báo kết quả xổ số ngày mai</h2>
      <div className={stylesCss['choose-day']}>
        <span>Biên ngày (dd/mm/YYYY):</span>
        <input type="string" value={startDate} />
        <Button>Xem kết quả</Button>
      </div>
      <div className={stylesCss['title-1']}>
        1.Các kết quả đặc biệt đã về sau khi giải đặc biệt xuất hiện 2 số cuối là <span className={stylesCss['strong1']}>88</span> ra ngày <span className={stylesCss['strong2']}>26/10/2023</span>
      </div>
      <span className={stylesCss['strong1']}>88</span>: 6 lần,{' '}
      <span className={stylesCss['strong1']}>04</span>: 2 lần,{' '}
      <span className={stylesCss['strong1']}>54</span>: 5 lần,{' '}
      <span className={stylesCss['strong1']}>24</span>: 3 lần,{' '}
      <span className={stylesCss['strong1']}>14</span>: 1 lần

      <div className={stylesCss['title-1']}>Chi tiết các ngày:</div>
      <div className={stylesCss['list']}>
        <div className={stylesCss['block1']}>
          Ngày 
          <span className={stylesCss['strong2']}> 18/02/2000</span> về 
          <span className={stylesCss['strong1']}> 35188</span> sau đó ngày 
          <span className={stylesCss['strong2']}> 19/02/2000</span> về 
          <span className={stylesCss['strong1']}> 54200</span>
        </div>
        <div className={stylesCss['block1']}>
          Ngày 
          <span className={stylesCss['strong2']}> 18/02/2000</span> về 
          <span className={stylesCss['strong1']}> 35188</span> sau đó ngày 
          <span className={stylesCss['strong2']}> 19/02/2000</span> về 
          <span className={stylesCss['strong1']}> 54200</span>
        </div>
        <div className={stylesCss['block1']}>
          Ngày 
          <span className={stylesCss['strong2']}> 18/02/2000</span> về 
          <span className={stylesCss['strong1']}> 35188</span> sau đó ngày 
          <span className={stylesCss['strong2']}> 19/02/2000</span> về 
          <span className={stylesCss['strong1']}> 54200</span>
        </div>
      </div>

      <div className={stylesCss['title-1']}>
        2. Xem các kết quả đặc biệt đã về đúng 
        <span className={stylesCss['strong2']}> Thứ 6</span> sau khi ra 
        <span className={stylesCss['strong1']}> 88</span> vào 
        <span className={stylesCss['strong2']}> Thứ 5</span> là:
      </div>
      <div>
        Ngày <span className={stylesCss['strong2']}>28/03/2003</span> giải đặc biệt về 
        <span className={stylesCss['strong1']}> 26384</span> - 2 số cuối là 
        <span className={stylesCss['strong1']}> 84</span>  - đầu 
        <span className={stylesCss['strong1']}> 8</span> - cuối 
        <span className={stylesCss['strong1']}> 4</span> - tổng 
        <span className={stylesCss['strong1']}> 2</span> - thuộc bộ số - dàn chia 3 
        <span className={stylesCss['strong1']}> dư</span>
      </div>
      <div className={stylesCss['title-1']}>
        3. Xem các kết quả đặc biệt đã về đúng ngày <span className={stylesCss['strong2']}>27/10</span> trong các năm trước:
      </div>
      <div>
        Ngày <span className={stylesCss['strong2']}>28/03/2003</span> giải đặc biệt về 
        <span className={stylesCss['strong1']}> 26384</span> - 2 số cuối là 
        <span className={stylesCss['strong1']}> 84</span>  - đầu 
        <span className={stylesCss['strong1']}> 8</span> - cuối 
        <span className={stylesCss['strong1']}> 4</span> - tổng 
        <span className={stylesCss['strong1']}> 2</span> - thuộc bộ số - dàn chia 3 
        <span className={stylesCss['strong1']}> dư</span>
      </div>
    </div>
  )
}

export default StatisticsTomorrow