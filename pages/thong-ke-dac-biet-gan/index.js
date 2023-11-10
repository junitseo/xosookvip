import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialGan.module.css'
import { Button, Radio } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getSpecialStatisticsGan } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
import { dateFormat } from 'utils/format'

const handleDataTwoNum = (data) => {
  const numbers = Array.from({ length: 100 }, (_, index) => {
    return index.toString().padStart(2, '0');
  });
  const mappedData = numbers.map(number => {
      const filteredData = data.filter(item => item.loto == number);
      let maxDistance = 0;
      let maxDistancePair = [];
      
      for (let i = 0; i < filteredData.length - 1; i++) {
          const distance = moment(filteredData[i + 1].dayPrize, "DD-MM-YYYY").diff(moment(filteredData[i].dayPrize, "DD-MM-YYYY"), 'days')
          if (distance > maxDistance) {
              maxDistance = distance;
              maxDistancePair = [filteredData[i], filteredData[i + 1]];
          }
      }

      return { id: number, data: filteredData, maxDistance, maxDistancePair };
  });
  return mappedData;
}

const handleDataFirstNum = (data) => {
  const numbers = Array.from({ length: 10 }, (_, index) => {
    return index.toString();
  });
  const mappedData = numbers.map(number => {
      const filteredData = data.filter(item => item.firstNumber == number);
      let maxDistance = 0;
      let maxDistancePair = [];
      
      for (let i = 0; i < filteredData.length - 1; i++) {
          const distance = moment(filteredData[i + 1].dayPrize, "DD-MM-YYYY").diff(moment(filteredData[i].dayPrize, "DD-MM-YYYY"), 'days')
          if (distance > maxDistance) {
              maxDistance = distance;
              maxDistancePair = [filteredData[i], filteredData[i + 1]];
          }
      }

      return { id: number, data: filteredData, maxDistance, maxDistancePair };
  });
  return mappedData;
}

const handleDataLasttNum = (data) => {
  const numbers = Array.from({ length: 10 }, (_, index) => {
    return index.toString();
  });
  const mappedData = numbers.map(number => {
      const filteredData = data.filter(item => item.lastNumber == number);
      let maxDistance = 0;
      let maxDistancePair = [];
      
      for (let i = 0; i < filteredData.length - 1; i++) {
          const distance = moment(filteredData[i + 1].dayPrize, "DD-MM-YYYY").diff(moment(filteredData[i].dayPrize, "DD-MM-YYYY"), 'days')
          if (distance > maxDistance) {
              maxDistance = distance;
              maxDistancePair = [filteredData[i], filteredData[i + 1]];
          }
      }

      return { id: number, data: filteredData, maxDistance, maxDistancePair };
  });
  return mappedData;
}
function Page({data, d}) {
    const [date, setDate] = useState(dateFormat(d));
    const [dataMap, setDataMap] = useState(() => handleDataTwoNum(data));
    const [checked, setChecked] = useState(1);

    const handleClick = async () =>  {
      const day = moment(date, "DD/MM/YYYY").format("DD-MM-YYYY")
      const result = await getSpecialStatisticsGan(day, checked);
      if(checked == 2){
        setDataMap(handleDataFirstNum(result))
      }else if(checked == 3){
        setDataMap(handleDataLasttNum(result))
      }else {
        setDataMap(handleDataTwoNum(result))
      }
    }
  return (
    <div className={stylesCss['wrapper']}>
      <Meta title="Thống kê giải đặc biệt Gan"/>
      <h2 className={stylesCss['title']}>Thống kê đặc biệt Gan</h2>
      <div className={stylesCss['choose']}>
        <span>Biên ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Thống kê theo</span>
        <Radio.Group name="radiogroup" defaultValue={checked} onChange={(e) => setChecked(e.target.value)}>
          <Radio value={1}>2 số cuối</Radio>
          <Radio value={2}>Đầu</Radio>
          <Radio value={3}>Đuôi</Radio>
          {/* <Radio value={4}>Tổng</Radio>
          <Radio value={5}>Bộ số</Radio>
          <Radio value={6}>Dàn chia 3</Radio> */}
        </Radio.Group>
      </div>
      <Button onClick={handleClick} style={{marginBottom: 10}}>Xem kết quả</Button>
      <div style={{marginBottom: 10, fontSize: 11}} >(Dữ liệu được xử lý và thống kê trên giải đặc biệt của kết quả xổ số miền Bắc từ năm 2000 đến nay)</div>
      <table >
        <tr className={stylesCss['head']}>
          <th>Cặp số</th>
          <th>Tổng lần về</th>
          <th>Ngày về cuối</th>
          <th>Số ngày chưa về</th>
          <th>Số ngày gan cực đại</th>
        </tr>
        {dataMap.map(i => {
          const length = i.data.length
          const now = moment()
          return (
            <tr>
            <td className={stylesCss['text1']}>{i.id}</td>
            <td className={stylesCss['text2']}>{length}</td>
            <td className={stylesCss['text3']}>{length?i.data[length - 1].dayPrize: ""}</td>
            <td className={stylesCss['text1']}>{length?now.diff(moment(i.data[length - 1].dayPrize, "DD-MM-YYYY"), 'days'): 0}</td>
            <td > 
              {i.maxDistancePair.length > 0 &&
              <><span className={stylesCss['text2']}>{i.maxDistance}</span><span className={stylesCss['text4']}> {`(Từ ngày ${dateFormat(i.maxDistancePair[0].dayPrize)} đến ngày ${dateFormat(i.maxDistancePair[1].dayPrize)})`}</span></>
              }
            </td>
          </tr>
          )
        })}

      </table>
    </div>
  )
}

export default Page;

function generateNumbers() {
  let numbers = [];
  for (let i = 0; i <= 99; i++) {
      let formattedNumber = i.toString().padStart(2, '0');
      numbers.push(formattedNumber);
  }
  return numbers;
}

let dataNumber = generateNumbers();

export const getServerSideProps = async () => {
  const date = moment().format("DD-MM-YYYY");
  const data = await getSpecialStatisticsGan(date)

  return {
    props: { 
      data,
      d: date,
    }
  }
}