import React, { useMemo, useState } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultSX2.module.css'

function BlockResultSX({title, data}) {

  const dataKq = useMemo(() => {
    if(!data || !data.listXSTT) return null;
    const d = data.listXSTT;
    const groupedData = {};
    d.forEach(item => {
      const { prizeId } = item;
      if (!groupedData[prizeId]) {
        groupedData[prizeId] = [];
      }
      groupedData[prizeId].push(item);
    });
    return groupedData;
  },[data?.listXSTT])
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['head']}>{title}</div>
      {dataKq && 
      <div className="content">
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
                      <td className={stylesCss['giai7']}> Giải bảy</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giai6']}> Giải sáu</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giai5']}> Giải năm</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giai4']}> Giải tư</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giai3']}> Giải ba</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giai2']}> Giải nhì</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giai1']}> Giải nhất</td>
                    </tr>
                    <tr>
                      <td className={stylesCss['giaidb']}>
                         Giải Đặc Biệt
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td valign="top">
                <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                  <tbody>
                    <tr>
                      <td width="33.333333333333336%" valign="top">
                        <table
                          width="100%"
                          cellSpacing={0}
                          cellPadding={0}
                          className={stylesCss['rightcl']}
                        >
                          <tbody>
                            <tr>
                              <td className={`${stylesCss['giai7']} grid-4`}>
                                {dataKq[8].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={`${stylesCss['giai6']} grid-3`}>
                                {dataKq[7].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={`${stylesCss['giai5']} grid-3`}>
                                {dataKq[6].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={`${stylesCss['giai4']} grid-2`}>
                                {dataKq[5].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={`${stylesCss['giai3']} grid-3`}>
                                {dataKq[4].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={`${stylesCss['giai2']} grid-2`}>
                                {dataKq[3].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={stylesCss['giai1']}>
                                {dataKq[2].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                            <tr>
                              <td className={stylesCss['giaidb']}>
                                {dataKq[1].map(i => (
                                   <div key={i.number}>{
                                        !i.number == "true"?<img src={"/loading.gif"} alt="" />: i.number
                                    }</div>
                                ))}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
      </div>
      }
    </div>
   
  
  )
}

export default BlockResultSX