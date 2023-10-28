import React, { useMemo, useState } from 'react'
import stylesCss from '../../styles/StatisticsSpecialPrize.module.css'
import { Button, Select } from 'antd';
const dataYear = Array.from({length: 30}, (_, i) => i + 1999).map(i => ({value: i, label: i}));
function StatisticsSpecialPrize() {
  const [year, setYear] = useState("2022");

  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['title']}>Thống kê Giải ĐB năm 2022 theo tháng</div>
      <div className={stylesCss['choose-day']}>
        <span>Từ năm:</span>
        <Select defaultValue={year} options={dataYear} onChange={v => setYear(v)}>
        </Select>
        <Button>Xem kết quả</Button>
      </div>
        <table
          width="100%"
          cellSpacing={0}
          cellPadding={0}
          border={0}
          className="bkqmiennam"
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
                          Ngày\Tháng
                        </a>
                      </td>
                    </tr>
                    {Array.from({length: 31}, (_, i) => i + 1).map(i => (
                      <tr>
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
                    {Array.from({length: 12}, (_, i) => i + 1).map(i => (
                      <td width="33.333333333333336%" valign="top">
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
                            {Array.from({length: 31}).map(i => (
                              <tr>
                                <td className={stylesCss['num']}>
                                  <div>13</div>
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

export default StatisticsSpecialPrize