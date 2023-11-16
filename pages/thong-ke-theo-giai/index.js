import React, { useState } from 'react'
import stylesCss from '../../styles/StatisticFrequencyPrize.module.css'
import { Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import Meta from "app/components/Meta"
import { getStatisticFrequency } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
function StatisticFrequencyPrize({result, startDate, endDate}) {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const [data, setData] = useState(result);
  const [loading, setLoading] = useState()
  const [prizeId, setPrizeId] = useState(1);


  const handleClick = async () => {
    setLoading(true)
    const data = await getStatisticFrequency(start, end, prizeId);
    setData(data)
    setLoading(false)
  }
  return (
    <div className={stylesCss['wrapper']}>
    {loading && <LoadingPage />}
    <Meta title="Thống kê tần suất theo từng giải  - Xổ số OKVIP"/>
    <h2 className="title-heading">Thống kê tần suất theo từng giải</h2>
    <div className={stylesCss['choose']}>
        <span>Từ ngày </span>
        <DatePicker defaultValue={moment(start, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setStart(dateString)}  />
      </div>
      <div className={stylesCss['choose']}>
        <span>Đến ngày </span> 
        <DatePicker defaultValue={moment(end, "DD-MM-YYYY")} format={"DD-MM-YYYY"} onChange={(date, dateString) => setEnd(dateString)}  />
    </div>
      <div className={stylesCss['choose']}>
        <Select defaultValue={prizeId} options={dataGiai} onChange={v => setPrizeId(v)}>
        </Select>
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
                      <td key={idx} width="33.333333333333336%" valign="top">
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
                            {data.arrayDate.map((i, index) => {
                              const l = item.filter(d => d.dayPrize == i).length;
                              if(l){
                                return (
                                  <tr key={index}>
                                    <td className={stylesCss['item1']}>
                                      <div>{l}</div>
                                    </td>
                                  </tr>
                                )
                              }
                              return (
                                <tr key={index}>
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
    value: 1,
    label: "Giải đặc biệt",
  },
  {
    value: 2,
    label: "Giải nhất",
  },
  {
    value: 3,
    label: "Giải nhì"
  },
  {
    value: 4,
    label: "Giải ba"
  },
  {
    value: 5,
    label: "Giải bốn"
  },
  {
    value: 5,
    label: "Giải năm"
  },
  {
    value: 7,
    label: "Giải sáu"
  },
  {
    value: 8,
    label: "Giải bảy"
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