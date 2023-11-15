import React, { useMemo, useState } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultSX2.module.css'
import Image from 'next/image';

function BlockResultSX({ title, data }) {

  const dataKq = useMemo(() => {
    if (!data || !data.listXSTT) return null;
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
  }, [data?.listXSTT])
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['head']}>{title}</div>
      {dataKq &&
        <div className="content">
          <table
            width="100%"
            cellSpacing={0}
            cellPadding={0}
            className={stylesCss['rightcl']}
          >
            <tbody>
              <tr>
                <th className={stylesCss['giai7']}> Giải bảy</th>
                <td className={`${stylesCss['giai7']} grid-4`}>
                  {dataKq[8].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giai6']}> Giải sáu</th>
                <td className={`${stylesCss['giai6']} grid-3`}>
                  {dataKq[7].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giai5']}> Giải năm</th>
                <td className={`${stylesCss['giai5']} grid-3`}>
                  {dataKq[6].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giai4']}> Giải tư</th>
                <td className={`${stylesCss['giai4']} grid-2`}>
                  {dataKq[5].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giai3']}> Giải ba</th>
                <td className={`${stylesCss['giai3']} grid-3`}>
                  {dataKq[4].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giai2']}> Giải nhì</th>
                <td className={`${stylesCss['giai2']} grid-2`}>
                  {dataKq[3].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giai1']}> Giải nhất</th>
                <td className={stylesCss['giai1']}>
                  {dataKq[2].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
                </td>
              </tr>
              <tr>
                <th className={stylesCss['giaidb']}>
                  Giải Đặc Biệt
                </th>
                <td className={stylesCss['giaidb']}>
                  {dataKq[1].map(i => (
                    <div key={i.number}>{
                      !i.number == "true" ?
                        <Image
                          src={"/loading.gif"}
                          alt=""
                          width={14}
                          height={14}
                        />
                        // <img src={"/loading.gif"} alt="" />
                        : i.number
                    }</div>
                  ))}
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