import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialPrize.module.css'
import { Button, Select } from 'antd';
import Meta from "app/components/Meta"
import { getSpecialPrizeStatistics } from 'api/kqxsApi'
import moment from 'moment';
import LoadingPage from "app/components/LoadingPage"

const dataYear = Array.from({length: 30}, (_, i) => i + 1999).map(i => ({value: i, label: i}));
function StatisticsSpecialPrize({result, y}) {
  const [year, setYear] = useState(y);
  const [loading, setLoading] = useState()
  const [data, setData] = useState(result);
  const dataMap = useMemo(() => {
    if(!data) return [];
    const d = []
    const length = Math.ceil(data.length / 31);
    for(let i = 0; i < length; i++) {
      d.push(data.slice(i * 31, (i+ 1)* 31))
    }
    return d;
  },[data])

  const handleClick = async () => {
    setLoading(true);
    const data = await getSpecialPrizeStatistics(year);
    setData(data)
    setLoading(false);
  }
  return (
    <div className={stylesCss['wrapper']}>
      {loading && <LoadingPage />}
      <Meta title="Thống kê 2 số cuối giải đặc biệt theo tháng"/>
      <div className={stylesCss['title']}>Thống kê 2 số cuối giải ĐB năm 2022 theo tháng</div>
      <div className={stylesCss['choose-day']}>
        <span>Từ năm:</span>
        <Select defaultValue={year} options={dataYear} onChange={v => setYear(v)}>
        </Select>
        <Button onClick={handleClick}>Xem kết quả</Button>
      </div>
      <div className="wrapper-table">
      {dataMap.length > 0 
      ?
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
                            Ngày\Tháng
                          </a>
                        </td>
                      </tr>
                      {Array.from({length: 31}, (_, i) => i + 1).map(i => (
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
                      {dataMap.map((item, index) => (
                        <td key={index} valign="top">
                          <table
                            width="100%"
                            cellSpacing={0}
                            cellPadding={0}
                            className={stylesCss['rightcl']}
                          >
                            <tbody>
                              <tr>
                                <td className={stylesCss['month']}>{index + 1}</td>
                              </tr>
                              {item.map((i, index) => (
                                <tr key={i?.number + index.toString()} >
                                  <td className={stylesCss['num']}>
                                    <div>{i?.number.trim().slice(0,2)}</div>
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
        :<div>Chưa có dữ liệu</div>
        }
      </div>
     
    </div>
  )
}

export default StatisticsSpecialPrize

export const getServerSideProps = async () => {
  const y = moment().format("YYYY")
  const data = await getSpecialPrizeStatistics(y);
  return {
    props: { 
      result: data,
      y
    }
  }
}
