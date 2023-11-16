import React, { useMemo, useState } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultSX.module.css'
import Image from 'next/image';
function BlockResultSXLoading({ title }) {
  const [dataKq] = useState([1, 2, 3]);
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['head']}>{title}</div>
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
              <td valign="top">
                <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                  <tbody>
                    <tr>
                      <td valign="top">
                        <table
                          width="100%"
                          cellSpacing={0}
                          cellPadding={0}
                          className={stylesCss['rightcl']}
                        >
                          <tbody>
                            <tr>
                              <td className={stylesCss['rank']}></td>
                              {dataKq.map((i, index) => (
                                <td key={index} className={stylesCss['tinh']}></td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai8']}> Giải tám</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "8"} className={stylesCss['giai8']}>
                                  {Array.from({ length: 1 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}

                            </tr>
                            <tr>
                              <th className={stylesCss['giai7']}> Giải bảy</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "7"} className={stylesCss['giai7']}>
                                  {Array.from({ length: 1 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai6']}> Giải sáu</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "6"} className={stylesCss['giai6']}>
                                  {Array.from({ length: 3 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai5']}> Giải năm</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "5"} className={stylesCss['giai5']}>
                                  {Array.from({ length: 1 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai4']}> Giải bốn</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "4"} className={stylesCss['giai4']}>
                                  {Array.from({ length: 7 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai3']}> Giải ba</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "3"} className={stylesCss['giai3']}>
                                  {Array.from({ length: 2 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}                                 </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai2']}>Giải hai</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "2"} className={stylesCss['giai2']}>
                                  {Array.from({ length: 1 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giai1']}> Giải nhất</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "1"} className={stylesCss['giai1']}>
                                  {Array.from({ length: 1 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th className={stylesCss['giaidb']}> Giải đặc biệt</th>
                              {dataKq.map((item, idx) => (
                                <td key={idx + "db"} className={stylesCss['giaidb']}>
                                  {Array.from({ length: 1 }).map((i, indx) => (
                                    <div key={indx}>{
                                      <Image
                                        src={"/loading.gif"}
                                        alt=""
                                        width={14}
                                        height={14}
                                      />
                                      // <img src={"/loading.gif"} alt="" />
                                    }</div>
                                  ))}
                                </td>
                              ))}
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
    </div>


  )
}

export default BlockResultSXLoading