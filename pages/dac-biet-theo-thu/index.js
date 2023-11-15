import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialByDayOfWeek.module.css'
import { Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getStatisticTwoNumberByDayOfWeek } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"

function countDays(startDate, endDate, dayOfWeek) {
  var count = 0;
  var currentDate = startDate;
  while (currentDate <= endDate) {
    if (currentDate.getDay() === dayOfWeek) {
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;
}

const handleDataTwoNum = (data, num = 1, prize) => {
  const result = []
  const numbers = Array.from({ length: 100 }, (_, index) => {
    return index.toString().padStart(2, '0');
  });
  numbers.forEach(number => {
      const filteredData = data.filter(item => item.loto == number);

      if(filteredData.length >= num){
        const lastday = filteredData[filteredData.length - 1].dayPrize
        let countDayOfWeek = 0;
        if(!prize || prize == "1,2,3,4,5,6,7"){
          countDayOfWeek = moment().diff(moment(lastday, "DD-MM-YYYY"), "days");
        }else {
         countDayOfWeek = countDays(new Date(moment(lastday, "DD-MM-YYYY").format("YYYY-MM-DD")),new Date(),  parseInt(prize))
        }
        result.push({ id: number, data: filteredData, countDayOfWeek, lastday })
      }
  });
  return result;
}

function StatisticsSpecialByDayOfWeek({result, startDate, endDate}) {
  const [select, setSelect] = useState("1,2,3,4,5,6,7")
  const [number, setNumber] = useState(1)
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)
  const [data, setData] = useState(() => handleDataTwoNum(result))
  const [labelSelect, setLabelSelect] = useState("Tất cả các thứ")
  const [loading, setLoading] = useState()

  const handleClick = async () =>  {
    setLoading(true);
    const result = await getStatisticTwoNumberByDayOfWeek(start, end, select);
    setLabelSelect(dataSelect.find(i => i.value == select).label)
    setData(handleDataTwoNum(result, number, select));
    setLoading(false);
  }
  
  return (
    <div className={stylesCss['wrapper']}>
    {loading && <LoadingPage />}
    <Meta title="Thống kê các cặp số đặc biệt theo từng thứ trong tuần - Xổ số OKVIP"/>
    <h2 className={stylesCss['title']}>Thống kê các cặp số đặc biệt theo từng thứ trong tuần</h2> 
    <div className={stylesCss['choose']}>
        <span>Từ ngày </span>
        <DatePicker defaultValue={moment(start, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setStart(dateString)}  />
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày </span> 
        <DatePicker defaultValue={moment(end, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setEnd(dateString)}  />
    </div>
    <div className={stylesCss['choose']}>
        <span>{`Tổng số lượt về >=`}</span> 
        <input className="wrap-input" type="string" value={number} onChange={e => setNumber(e.target.value)}/>
    </div>
    <div className={stylesCss['choose']}>
      <span>Theo thứ</span> 
      <Select defaultValue={select} options={dataSelect} onChange={v => setSelect(v)}>
      </Select>
    </div>
    <Button onClick={handleClick} style={{marginBottom: 15}}>Xem kết quả</Button>
    <div className={stylesCss['text1']}>
Bảng thống kê tần suất xuất hiện các cặp số lotto theo  <span className={stylesCss['text2']}>Chủ nhật</span> </div>
      <div style={{display: "flex", gap: 15, marginTop: 10}}>
      <table>
            <tbody>
              <tr className={stylesCss['head']}>
                <th>Cặp số</th>
                <th>Tổng lần về</th>
                <th>Ngày về cuối</th>
                <th>Số ngày chưa về đúng <strong>{labelSelect}</strong></th>
              </tr>
              {data.map(i => (
              <tr key={i.id}>
                <td className={stylesCss['text3']}>{i.id}</td>
                <td className={stylesCss['text2']}>{i.data.length}</td>
                <td className={stylesCss['text4']}>{i.lastday}</td>
                <td className={stylesCss['text3']}>{i.countDayOfWeek}</td>
              </tr>
               ))}
            </tbody>
        </table>
      </div>
    
   
    </div>
  )
}

export default StatisticsSpecialByDayOfWeek;

const dataSelect = [
  {
    value: "1,2,3,4,5,6,7",
    label: "Tất cả các thứ"
  },
  {
    value: "1",
    label: "Chủ nhật"
  },
  {
    value: "2",
    label: "Thứ hai"
  },
  {
    value: "3",
    label: "Thứ ba"
  },
  {
    value: "4",
    label: "Thứ bốn"
  },
  {
    value: "5",
    label: "Thứ năm"
  },
  {
    value: "6",
    label: "Thứ sáu"
  },
  {
    value: "7",
    label: "Thứ bảy"
  },
]

export const getServerSideProps = async () => {
  const startDate = moment().subtract(90, 'days').format("DD-MM-YYYY");
  const endDate = moment().format("DD-MM-YYYY");
  const data = await getStatisticTwoNumberByDayOfWeek(startDate, endDate);

  return {
    props: { 
      result: data,
      startDate,
      endDate
    }
  }
}
