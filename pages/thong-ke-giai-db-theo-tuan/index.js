import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialPrize.module.css'
import { Button, Select } from 'antd';
import Meta from "app/components/Meta"
import moment from 'moment';
import { getSpecialPrizeStatisticsDayOfWeek } from 'api/kqxsApi'
import LoadingPage from "app/components/LoadingPage"
const dataYear = Array.from({length: 30}, (_, i) => i + 1999).map(i => ({value: i, label: i}));
function StatisticsSpecialPrize({result, y}) {
  const [year, setYear] = useState(y);
  const [loading, setLoading] = useState()
  const [data, setData] = useState(result);
  const [textYear, setTextYear] = useState(y)

  const dataMap = useMemo(() => {
    if(!data) return [];
    const dayFirst = `01-01-${year}`;
    const dayOfWeek = moment(dayFirst).isoWeekday();
 
    
    const arrNull = Array.from({length: dayOfWeek - 1}).fill(null);
    const dataNew = [...arrNull,...data]
    const d = []
    const length = Math.ceil(data.length / 7);
    for(let i = 0; i < length; i++) {
      d.push(dataNew.slice(i * 7, (i+ 1)* 7))
    }
    return d
  },[data])

  const handleClick = async () => {
    setLoading(true);
    const data = await getSpecialPrizeStatisticsDayOfWeek(year);
    setData(data)
    setTextYear(year)
    setLoading(false);
  }
  return (
    <div className={stylesCss['wrapper']}>
      {loading && <LoadingPage />}
      <Meta title="Thống kê giải đặc biệt theo tuần - Xổ số OKVIP"/>
      <div className={stylesCss['title']}>Thống kê Giải ĐB năm {textYear} theo tuần</div>
      <div className={stylesCss['choose-day']}>
        <span>Từ năm:</span>
        <Select defaultValue={year} options={dataYear} onChange={v => setYear(v)}>
        </Select>
        <Button onClick={handleClick}>Xem kết quả</Button>
      </div>
      
      {dataMap.length > 0 ?
        <div className="wrapper-table">
          <table
            width="100%"
            cellSpacing={0}
            cellPadding={0}
            border={0}
            className="bkqmiennam"
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
                            Tuần\Thứ
                          </a>
                        </td>
                      </tr>
                      {Array.from({length: 53}, (_, i) => i + 1).map(i => (
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
                      {dataDayOfWeek.map((i, idx) => (
                        <td key={idx} valign="top">
                          <table
                            width="100%"
                            cellSpacing={0}
                            cellPadding={0}
                            className={stylesCss['rightcl']}
                          >
                            <tbody>
                              <tr>
                                <td className={stylesCss['month']}>{i}</td>
                              </tr>
                              {dataMap.map((item, index) => (
                                <tr key={item?.number +index.toString()}>
                                  <td className={stylesCss['num2']} style={{background: i == "CN"? "#cfee65": "transparent"}}>
                                    <div>{item[idx]?.number}</div>
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
        : <div>Chưa có dữ liệu</div>
      }
    </div>
  )
}

export default StatisticsSpecialPrize;

const dataDayOfWeek = ["T2","T3","T4","T5","T6","T7","CN"]

export const getServerSideProps = async () => {
  const y = moment().format("YYYY")
  const data = await getSpecialPrizeStatisticsDayOfWeek(y);

  return {
    props: { 
      result: data,
      y
    }
  }
}
