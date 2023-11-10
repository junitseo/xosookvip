import React, { useState } from 'react'
import stylesCss from '../../styles/SpecialCycleStatistics.module.css'
import { Button } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getSpecialStatisticsGan } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
import { dateFormat } from 'utils/format'

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
function SpecialCycleStatistics({data, d}) {
  const [date, setDate] = useState(d);
  const [dataMapFisrtNum, setDataMapFisrtNum] = useState(() => handleDataFirstNum(data));
  const [dataMapLastNum, setDataMapLastNum] = useState(() => handleDataLasttNum(data));


  return (
    <div className={stylesCss['wrapper']}>
        <Meta title="Tổng hợp chu kỳ của giải đặc biệt"/>
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
                cuối của giải đặc biệt tính đến ngày <b>{dateFormat(date)}</b>)
              </th>
              <th>Max đại</th>
            </tr>
            {dataMapFisrtNum.map(i => {
                const length = i.data.length
                const now = moment()
              return (
                <tr>
                  <td>Đầu <span className={stylesCss['text-1']}>{i.id}</span> Ra ngày <span className={stylesCss['text-2']}>{dateFormat(length?i.data[length - 1].dayPrize: "")}</span> Đến nay vẫn chưa ra là  <span className={stylesCss['text-1']}>{length?now.diff(moment(i.data[length - 1].dayPrize, "DD-MM-YYYY"), 'days'): 0}</span> ngày	</td>
                  <td><span className={stylesCss['text-1']}>{i.maxDistance}</span> ngày</td>
                </tr>
              )
            })}

          </tbody>
        </table>
        <table className="">
          <tbody>
            <tr>
              <th>
                2. Chu kỳ đầu (Thống kê chu kỳ gần nhất của các <b> số cuối </b> trong 2 số
                cuối của giải đặc biệt tính đến ngày <b>{dateFormat(date)}</b>)
              </th>
              <th>Max đại</th>
            </tr>
            {dataMapLastNum.map(i => {
                const length = i.data.length
                const now = moment()
              return (
                <tr>
                  <td>Đầu <span className={stylesCss['text-1']}>{i.id}</span> Ra ngày <span className={stylesCss['text-2']}>{dateFormat(length?i.data[length - 1].dayPrize: "")}</span> Đến nay vẫn chưa ra là  <span className={stylesCss['text-1']}>{length?now.diff(moment(i.data[length - 1].dayPrize, "DD-MM-YYYY"), 'days'): 0}</span> ngày	</td>
                  <td><span className={stylesCss['text-1']}>{i.maxDistance}</span> ngày</td>
                </tr>
              )
            })}

          </tbody>
        </table>
    </div>

  )
}

export default SpecialCycleStatistics

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