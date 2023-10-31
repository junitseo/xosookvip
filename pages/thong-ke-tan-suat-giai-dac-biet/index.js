import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticFrequencyPrize.module.css'
import { Button, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"

function StatisticFrequencyPrize() {
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [type, setType] = useState("00")
  return (
    <div className={stylesCss['wrapper']}>
    <Meta title="Thống kê tần suất giải đặc biệt "/>
    <h2 className={stylesCss['title']}>Thống kê tần suất giải đặc biệt </h2>
      <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <Select defaultValue={type} options={data} onChange={v => setType(v)}>
        </Select>
        <Button>Xem kết quả</Button>
      </div>
      <table
          width="100%"
          cellSpacing={0}
          cellPadding={0}
          border={0}
          className=""
          style={{width: 100, margin: "0 auto"}}
        >
          <tbody>
            <tr>
              <td width={100} valign="top">
                <table
                  width="100%"
                  cellSpacing={0}
                  cellPadding={0}
                  border={0}
                  className={stylesCss['leftcl']}
                >
                    <tbody>
                    <tr>
                      <td className={stylesCss['day']}>
                        <a
                          className="date"
                        >
                          Ngày\Cặp số
                        </a>
                      </td>
                    </tr>
                    {Array.from({length: 31}).map(i => (
                      <tr>
                        <td className={stylesCss['day']}>29-10-2023</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
              </td>
              <td valign="top">
                <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                  <tbody>
                    <tr>
                    {dataGenerateNumbers.map(item => (
                      <td width="33.333333333333336%" valign="top">
                        <table
                          width="100%"
                          cellSpacing={0}
                          cellPadding={0}
                          className={stylesCss['rightcl']}
                        >
                          <tbody>
                            <tr>
                              <td className={stylesCss['number']}>{item}</td>
                            </tr>
                            {Array.from({length: 31}, (_, i) => i + Math.floor(Math.random() * 10)).map(i => (
                              i % 2 == 0 ?
                              <tr>
                                <td className={stylesCss['item']}>
                                  <div>-</div>
                                </td>
                              </tr>
                              :  
                              <tr>
                              <td className={stylesCss['item1']}>
                                <div>1</div>
                              </td>
                            </tr>
                            ))}

                          </tbody>
                          </table>
                        </td>
                        ))}
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default StatisticFrequencyPrize;
function generateNumbers() {
  let numbers = [];
  for (let i = 0; i <= 99; i++) {
      let formattedNumber = i.toString().padStart(2, '0');
      numbers.push(formattedNumber);
  }
  return numbers;
}

let dataGenerateNumbers = generateNumbers();
const data = [
  {
    value: "00",
    label: "Giải đặc biệt"
  },
  {
    value: "11",
    label: "Giải nhất"
  },
  {
    value: "21",
    label: "Giải nhì thứ 1"
  },
  {
    value: "22",
    label: "Giải nhì thứ 2"
  },
  {
    value: "31",
    label: "Giải ba thứ 1"
  },
  {
    value: "32",
    label: "Giải ba thứ 2"
  },
  {
    value: "33",
    label: "Giải ba thứ 3"
  },
  {
    value: "34",
    label: "Giải ba thứ 4"
  },
  {
    value: "35",
    label: "Giải ba thứ 5"
  },
  {
    value: "36",
    label: "Giải ba thứ 6"
  },
  {
    value: "41",
    label: "Giải bốn thứ 1"
  },
  {
    value: "42",
    label: "Giải bốn thứ 2"
  },
  {
    value: "43",
    label: "Giải bốn thứ 3"
  },
  {
    value: "44",
    label: "Giải bốn thứ 4"
  },
  {
    value: "51",
    label: "Giải năm thứ 1"
  },
  {
    value: "52",
    label: "Giải năm thứ 2"
  },
  {
    value: "53",
    label: "Giải năm thứ 3"
  },
  {
    value: "54",
    label: "Giải năm thứ 4"
  },
  {
    value: "55",
    label: "Giải năm thứ 5"
  },
  {
    value: "56",
    label: "Giải năm thứ 6"
  },
  {
    value: "61",
    label: "Giải sáu thứ 1"
  },
  {
    value: "62",
    label: "Giải sáu thứ 2"
  },
  {
    value: "63",
    label: "Giải sáu thứ 3"
  },
  {
    value: "71",
    label: "Giải bảy thứ 1"
  },
  {
    value: "72",
    label: "Giải bảy thứ 2"
  },
  {
    value: "73",
    label: "Giải bảy thứ 3"
  },
  {
    value: "74",
    label: "Giải bảy thứ 4"
  },
]