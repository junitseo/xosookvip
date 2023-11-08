import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticsTomorrow.module.css'
import { Button } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getResultTomorrow } from 'api/kqxsApi'
import { dateFormat } from 'utils/format'
import { getDayOfWeek } from 'utils/getDayOfWeek'
import LoadingPage from "app/components/LoadingPage"

function StatisticsTomorrow({result}) {
  const [data, setData] = useState(result)
  const [date, setDate] = useState(dateFormat(result.current.dayPrize));
  const [loading, setLoading] = useState(false)
  const [dayOfWeekCurrent] = useState(() => {
    return getDayOfWeek(result.current.dayPrize);
  })

  const countData = useMemo(() => {
    const d = [];
    if(data.data) {
      data.data.forEach(item => {
        const n = item.tomorrow.loto;
        if(d[n]){
          d[n] += 1
        }else {
          d[n] = 1
        }
        
      })
    }
    return d;
  },[data.data])

  const datafilterDayofWeek = useMemo(() => {
    const d = [];
    if(data.data) {
      data.data.forEach(item => {
        if(dayOfWeekCurrent == getDayOfWeek(item.current.dayPrize)){
          d.push(item)
        }
      })
    }
    return d;
  },[data.data])
  const handleClick = async () => {
    setLoading(true)
    const d = await getResultTomorrow(moment(date, "DD/MM/YYYY").format("DD-MM-YYYY"));
    setData(d)
    setLoading(false)
  }
  
  return (
    <div className={stylesCss['wrapper']}>
      {loading && <LoadingPage />}
      <Meta title="Thống kê dự báo kết quả sổ xố ngày mai"/>
      <h2 className={stylesCss['title']}>Thống kê dự báo kết quả xổ số ngày mai</h2>
      <div className={stylesCss['choose-day']}>
        <span>Biên ngày (dd/mm/YYYY):</span>
        <input type="string" value={date} onChange={(e) => setDate(e.target.value)} />
        <Button onClick={handleClick}>Xem kết quả</Button>
      </div>
      <div className={stylesCss['title-1']}>
        1.Các kết quả đặc biệt đã về sau khi giải đặc biệt xuất hiện 2 số cuối là <span className={stylesCss['strong1']}>{data.current.loto}</span> ra ngày <span className={stylesCss['strong2']}>{
          data.current.dayPrize
        }</span>
      </div>
      {Object.keys(countData).map(i => (
        <>
          <span className={stylesCss['strong1']}>{i}</span>: {countData[i]} lần{' '}
        </>
      
      ))}

      <div className={stylesCss['title-1']}>Chi tiết các ngày:</div>
      <div className={stylesCss['list']}>
        {data.data.map(i => (
          <div className={stylesCss['block1']}>
          Ngày 
          <span className={stylesCss['strong2']}> {dateFormat(i.current.dayPrize)}</span> về 
          <span className={stylesCss['strong1']}> {i.current.number}</span> sau đó ngày 
          <span className={stylesCss['strong2']}> {dateFormat(i.tomorrow.dayPrize)}</span> về 
          <span className={stylesCss['strong1']}> {i.tomorrow.number}</span>
          </div>
        ))}
      </div>

      <div className={stylesCss['title-1']}>
        2. Xem các kết quả đặc biệt đã về đúng 
        <span className={stylesCss['strong2']}> {getDayOfWeek(moment(data.current.dayPrize, "DD-MM-YYYY").add(1, "days").format("DD-MM-YYYY"))}</span> sau khi ra 
        <span className={stylesCss['strong1']}> {data.current.loto}</span> vào 
        <span className={stylesCss['strong2']}> {dayOfWeekCurrent}</span> là:
      </div>
      {datafilterDayofWeek.map(i => (
        <div>
          Ngày <span className={stylesCss['strong2']}>{dateFormat(i.tomorrow.dayPrize)}</span> giải đặc biệt về 
          <span className={stylesCss['strong1']}> {i.tomorrow.number}</span> - 2 số cuối là 
          <span className={stylesCss['strong1']}> {i.tomorrow.loto}</span>  - đầu 
          <span className={stylesCss['strong1']}> {i.tomorrow.firstNumber}</span> - cuối 
          <span className={stylesCss['strong1']}> {i.tomorrow.lastNumber}</span> - tổng 
          <span className={stylesCss['strong1']}> {(Number(i.tomorrow.firstNumber) + Number(i.tomorrow.lastNumber)) % 10}</span>
        </div>
      ))}
 
      <div className={stylesCss['title-1']}>
        3. Xem các kết quả đặc biệt đã về đúng ngày <span className={stylesCss['strong2']}>{moment(data.current.dayPrize, "DD-MM-YYYY").add(1, 'days').format("DD-MM")}</span> trong các năm trước:
      </div>
      {data.dataYear.map(item => (
        <div>
          Ngày <span className={stylesCss['strong2']}>{dateFormat(item.dayPrize)}</span> giải đặc biệt về 
          <span className={stylesCss['strong1']}> {item.number}</span> - 2 số cuối là 
          <span className={stylesCss['strong1']}> {item.loto}</span>  - đầu 
          <span className={stylesCss['strong1']}> {item.firstNumber}</span> - cuối 
          <span className={stylesCss['strong1']}> {item.lastNumber}</span> - tổng 
          <span className={stylesCss['strong1']}> {(Number(item.firstNumber) + Number(item.lastNumber)) % 10}</span>
        </div>
      ))}

    </div>
  )
}

export default StatisticsTomorrow;

export const getServerSideProps = async () => {
  const data = await getResultTomorrow();
  return {
    props: { 
      result:data
    }
  }
}
