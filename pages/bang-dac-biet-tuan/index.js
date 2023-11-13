import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialWeek.module.css'
import moment from 'moment';
import { Button, DatePicker, Radio } from 'antd';
import Meta from "app/components/Meta"
import { getSpecialPrizeStatisticsDayOfWeek2 } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"


function Page({result, startDate, endDate}) {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const [data, setData] = useState(result);
  const [checked, setChecked] = useState(1);
  const [loading, setLoading] = useState()

  const dataMap = useMemo(() => {
    if(!data) return [];
    const dayFirst = startDate;
    const dayOfWeek = moment(dayFirst).isoWeekday();
 
    
    const arrNull = Array.from({length: dayOfWeek - 1}).fill(null);
    const dataNew = [...arrNull,...data]
    const d = []
    const length = Math.ceil(data.length / 7);
    for(let i = 0; i < length; i++) {
      d.push(dataNew.slice(i * 7, (i+ 1)* 7))
    }
    return d
  },[data, startDate])
  const handleClick = async () => {
    setLoading(true)
    const data = await getSpecialPrizeStatisticsDayOfWeek2(start, end);
    setData(data)
    setLoading(false)

  }
  
  const renderNumber = (data) => {
    if(!data) return "";
    if(checked == 1){
      return data.number;
    }else if(checked == 2){
      return data.loto;
    }else if(checked == 3){
      return data.firstNumber;
    }else if(checked == 4){
      return data.lastNumber;
    }
  }
  return (
    <div  className={stylesCss['wrapper']}>
    {loading && <LoadingPage />}
    <Meta title="Thống kê kết quả đặc biệt theo tuần"/>
      <h2 className={stylesCss['title']}>Thống kê kết quả đặc biệt theo tuần</h2>
      <div className={stylesCss['choose']}>
        <span>Từ ngày </span>
        <DatePicker defaultValue={moment(start, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setStart(dateString)}  />
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày </span> 
        <DatePicker defaultValue={moment(end, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setEnd(dateString)}  />
      </div>
      <div className={stylesCss['choose']}>
        <span>Thống kê theo</span>
        <Radio.Group name="radiogroup" defaultValue={checked} onChange={e => setChecked(e.target.value)}>
          <Radio value={1}>Thông thường</Radio>
          <Radio value={2}>2 số cuối</Radio>
          <Radio value={3}>Đầu</Radio>
          <Radio value={4}>Đuôi</Radio>
        </Radio.Group>
      </div>
      <Button onClick={handleClick} style={{marginBottom: 10}}>Xem kết quả</Button>
      {data.length > 0 ?
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
            {dataMap.map((item, idex) => (
              <tr key={idex}>
                {item.map(i => (
                  <td>
                  {renderNumber(i)}
                  <span className={stylesCss['day']}>
                    {i?.dayPrize}
                  </span>
                </td>
                ))}
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>  
      :<div>Chưa có dữ liệu</div>
      
    }        
    </div>
  )
}

export default Page


export const getServerSideProps = async () => {
  const startDate = moment().subtract(30, 'days').format("DD-MM-YYYY");
  const endDate = moment().format("DD-MM-YYYY");
  const result = await getSpecialPrizeStatisticsDayOfWeek2(startDate, endDate)

  return {
    props: { 
      result,
      startDate,
      endDate
    }
  }
}