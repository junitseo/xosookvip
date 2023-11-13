import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/SpecialStagingStatistics.module.css'
import { Button, Select } from 'antd';
import Meta from "app/components/Meta"

import moment from 'moment';
import { getStatisticList } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
import { dateFormat } from 'utils/format'

const handleGan = (data) => {
      let maxDistance = 0;
      let maxDistancePair = [];

      for (let i = 0; i < data.length - 1; i++) {
          const distance = moment(data[i + 1].dayPrize, "DD-MM-YYYY").diff(moment(data[i].dayPrize, "DD-MM-YYYY"), 'days')

          if (distance > maxDistance) {
              maxDistance = distance;
              maxDistancePair = [data[i], data[i + 1]];

          }
      }
      return {maxDistance, maxDistancePair };

}

function SpecialStagingStatistics({result, startDate, endDate }) {
  const [numbers, setNumbers] = useState("00,11,22,33,44,55,66,77,88,01")
  const [start, setStart] = useState(startDate)
  const [end, setEnd] = useState(endDate)
  const [data, setData] = useState(result)
  const [loading, setLoading] = useState(false)

  const dataMaxDistance = useMemo(() => {
    return handleGan(data)
  },[data])


  const handleClick = async () => {
    setLoading(true)
    const d = await getStatisticList(start, end, numbers);
    setData(d)
    setLoading(false)
  }
  

  return (
    <div className={stylesCss['wrapper']}>
    {loading && <LoadingPage />}
    <Meta title="Thống kê dàn đặc biệt"/>
    <h2 className={stylesCss['title']}>Thống kê dàn đặc biệt </h2> 
      <div>Dãy số đặc biệt cần thống kê: (các cặp số cách nhau bởi dấu phẩy. VD: 00,11,22,33,44,55,66,77,88,01)</div> 
      <div className={stylesCss['choose']}>
      <input style={{width: "100%", maxWidth: "500px"}} type="string" value={numbers} onChange={e => setNumbers(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={start} onChange={e => setStart(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={end} onChange={e => setEnd(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <Button onClick={handleClick}>Xem kết quả</Button>
      </div>
      <div>
        <span className={stylesCss['text1']}>Dãy số: </span>
        <span className={stylesCss['text2']}>{numbers.toString()}</span>
      </div>
      <div>
        <span className={stylesCss['text1']}>Ngưỡng cực đại xuất hiện dàn số là : </span>
        <span className={stylesCss['text2']}>{dataMaxDistance.maxDistance} ngày tính cả ngày về </span>
        {dataMaxDistance.maxDistancePair[0] &&<span className={stylesCss['text1']}>
        ({dateFormat(dataMaxDistance.maxDistancePair[0].dayPrize)} đến ngày {dateFormat(dataMaxDistance.maxDistancePair[1].dayPrize)})
        </span>}
  
      </div>
      <div>
        <span className={stylesCss['text1']}>Điểm gan đến nay là : </span>
        <span className={stylesCss['text2']}>{data.length?moment().diff(moment(data[data.length - 1].dayPrize, "DD-MM-YYYY"), 'days'): 0} ngày</span>
      </div>

      <div className={stylesCss['wrap-table']} style={{display: "flex", gap: 15, marginTop: 10}}>
      <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Dãy số xếp theo Tổng</td>
            </tr>
            {data1.map(i => (
              <tr>
                <td>{i}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
        <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Dãy số xếp theo đầu</td>
            </tr>
            {data2.map(i => (
              <tr>
                <td>{i}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
      <div className={stylesCss['wrap-table']} style={{display: "flex", gap: 15, marginTop: 10}}>
      <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Dãy số xếp theo đuôi</td>
            </tr>
            {data3.map(i => (
              <tr>
                <td>{i}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
        <table
        >
          <tbody>
            <tr>
              <td className={stylesCss['head']} colspan="2">Dãy số xếp theo đầu</td>
            </tr>
            {data4.map(i => (
              <tr>
                <td>{i}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
   
    </div>
  )
}

export default SpecialStagingStatistics;
export const getServerSideProps = async () => {
  const startDate = moment().subtract(365, 'days').format("DD-MM-YYYY");
  const endDate = moment().format("DD-MM-YYYY");const y = moment().format("YYYY")
  const data = await getStatisticList(startDate, endDate);

  return {
    props: { 
      result: data,
      startDate,
      endDate
    }
  }
}
const data1 = [
  '19,91,28,82,37,73,46,64,55,00,',
  '01,10,29,92,38,83,47,74,56,65,',
  '02,20,39,93,48,84,57,75,11,66,',
  '03,30,12,21,49,94,58,85,67,76,',
  '04,40,13,31,59,95,68,86,22,77,',
  '05,50,14,41,23,32,69,96,78,87,',
  '06,60,15,51,24,42,79,97,33,88,',
  '07,70,16,61,25,52,34,43,89,98,',
  '08,80,17,71,26,62,35,53,44,99,',
  '09,90,18,81,27,72,36,63,45,54,'
]

const data2 = [
  '19,91,28,82,37,73,46,64,55,00,',
  '10,11,12,13,14,15,16,17,18,19,',
  '20,21,22,23,24,25,26,27,28,29,',
  '30,31,32,33,34,35,36,37,38,39,',
  '40,41,42,43,44,45,46,47,48,49,',
  '50,51,52,53,54,55,56,57,58,59,',
  '60,61,62,63,64,65,66,67,68,69,',
  '70,71,72,73,74,75,76,77,78,79,',
  '80,81,82,83,84,85,86,87,88,89,',
  '90,91,92,93,94,95,96,97,98,99,',

]
const data3 = [
  "00,10,20,30,40,50,60,70,80,90",
  "01,11,21,31,41,51,61,71,81,91",
  "02,12,22,32,42,52,62,72,82,92",
  "03,13,23,33,43,53,63,73,83,93",
  "04,14,24,34,44,54,64,74,84,94",
  "05,15,25,35,45,55,65,75,85,95",
  "06,16,26,36,46,56,66,76,86,96",
  "07,17,27,37,47,57,67,77,87,97",
  "08,18,28,38,48,58,68,78,88,98",
  "09,19,29,39,49,59,69,79,89,99",
]

const data4 = [
  "00,55,05,50",
  "11,66,16,61",
  "22,77,27,72",
  "33,88,38,83",
  "44,99,49,94",
  "01,10,06,60,51,15,56,65",
  "02,20,07,70,25,52,57,75",
  "03,30,08,80,35,53,58,85",
  "04,40,09,90,45,54,59,95",
  "12,21,17,71,26,62,67,76",
  "13,31,18,81,36,63,68,86",
  "14,41,19,91,46,64,69,96",
  "23,32,28,82,73,37,78,87",
  "24,42,29,92,74,47,79,97",
  "34,43,39,93,84,48,89,98",
]