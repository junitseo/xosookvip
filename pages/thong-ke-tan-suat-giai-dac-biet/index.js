import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticFrequencyPrize.module.css'
import { Button, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getStatisticFrequency } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
function StatisticFrequencyPrize({result, startDate, endDate}) {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const [data, setData] = useState(result);
  const [loading, setLoading] = useState()
  const [type, setType] = useState("00")



  const handleClick = async () => {
    setLoading(true)
    const data = await getStatisticFrequency(start, end);
    setData(data)
    setLoading(false)
  }
  return (
    <div className={stylesCss['wrapper']}>
    {loading && <LoadingPage />}
    <Meta title="Thống kê tần suất giải đặc biệt "/>
    <h2 className={stylesCss['title']}>Thống kê tần suất giải đặc biệt </h2>
    <div className={stylesCss['choose']}>
        <span>Từ ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={start} onChange={e => setStart(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày : (Ngày/Tháng/Năm) </span> 
        <input type="string" value={end} onChange={e => setEnd(e.target.value)}/>
      </div>
      <div className={stylesCss['choose']}>
        {/* <Select defaultValue={type} options={dataGiai} onChange={v => setType(v)}>
        </Select> */}
        <Button onClick={handleClick}>Xem kết quả</Button>
      </div>
      <div className="wrapper-table">
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
                    {data.arrayDate.map(i => (
                      <tr key={i}>
                        <td className={stylesCss['day']}>{i}</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
              </td>
              <td valign="top">
                <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                  <tbody>
                    <tr>
                    {data.statistic.map((item, idx) => (
                      <td width="33.333333333333336%" valign="top">
                        <table
                          width="100%"
                          cellSpacing={0}
                          cellPadding={0}
                          className={stylesCss['rightcl']}
                        >
                          <tbody>
                            <tr>
                              <td className={stylesCss['number']}>{idx < 10?"0" + idx: idx}</td>
                            </tr>
                            {data.arrayDate.map(i => {
                              const l = item.filter(d => d.dayPrize == i).length;
                              if(l){
                                return (
                                  <tr>
                                    <td className={stylesCss['item1']}>
                                      <div>{l}</div>
                                    </td>
                                  </tr>
                                )
                              }
                              return (
                                <tr>
                                  <td className={stylesCss['item']}>
                                    <div>-</div>
                                  </td>
                                </tr>
                              )
                            })}

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
    </div>
  )
}

export default StatisticFrequencyPrize;
const dataGiai = [
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

export const getServerSideProps = async () => {
  const startDate = moment().subtract(30, 'days').format("DD-MM-YYYY");
  const endDate = moment().format("DD-MM-YYYY");
  const result = await getStatisticFrequency(startDate, endDate)

  return {
    props: { 
      result,
      startDate,
      endDate
    }
  }
}