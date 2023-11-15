import React, { useMemo } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultSX.module.css'
import Image from 'next/image';

function BlockResultSX({title, data}) {

  const dataKq = useMemo(() => {
    if(!data) return null;
    return data.map(i => {
      const d = i.listXSTT;
      const groupedData = {provinceName: i.provinceName, code: i.listXSTT[0].code};
      d.forEach(item => {
        const { prizeId } = item;
        if (!groupedData[prizeId]) {
          groupedData[prizeId] = [];
        }
        groupedData[prizeId].push(item);
      });
      return groupedData;
    })
  },[data])
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['head']}>{title}</div>
      <div className="content">
        {dataKq &&      
          <table
            width="100%"
            cellSpacing={0}
            cellPadding={0}
            className={stylesCss['rightcl']}
          >
            <tbody>
              <tr>
              <th className={stylesCss['rank']}></th>
              {dataKq.map(item => (
                <th key={item.provinceName} className={stylesCss['tinh']}>{item.provinceName}</th>
              ))}
              </tr>
              <tr>
              <th className={stylesCss['giai8']}> Giải tám</th>
              {dataKq.map(item => (
                  <td key={item.provinceName + "8"} className={stylesCss['giai8']}>
                  {item[9]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              
              </tr>
              <tr>
              <th className={stylesCss['giai7']}> Giải bảy</th>
                {dataKq.map(item => (
                  <td key={item.provinceName + "7"} className={stylesCss['giai7']}>
                  {item[8]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
                <th className={stylesCss['giai6']}> Giải sáu</th>
                  {dataKq.map(item => (
                  <td key={item.provinceName + "6"} className={stylesCss['giai6']}>
                  {item[7]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
              <th className={stylesCss['giai5']}> Giải năm</th>
                  {dataKq.map(item => (
                  <td key={item.provinceName + "5"} className={stylesCss['giai5']}>
                  {item[6]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
                <th className={stylesCss['giai4']}> Giải bốn</th>
                  {dataKq.map(item => (
                  <td key={item.provinceName + "4"} className={stylesCss['giai4']}>
                  {item[5]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
              <th className={stylesCss['giai3']}> Giải ba</th>
                {dataKq.map(item => (
                  <td key={item.provinceName + "3"} className={stylesCss['giai3']}>
                  {item[4]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
                <th className={stylesCss['giai2']}>Giải hai</th>
                  {dataKq.map(item => (
                    <td key={item.provinceName + "2"} className={stylesCss['giai2']}>
                    {item[3]?.map(i => (
                      <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
                <th className={stylesCss['giai1']}> Giải nhất</th>
                  {dataKq.map(item => (
                    <td key={item.provinceName + "1"} className={stylesCss['giai1']}>
                    {item[2]?.map(i => (
                      <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
              <tr>
              <th className={stylesCss['giaidb']}> Giải đặc biệt</th>
              {dataKq.map(item => (
                  <td key={item.provinceName + "db"} className={stylesCss['giaidb']}>
                  {item[1]?.map(i => (
                    <div key={i.number}>{
                      !i.number?
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
              ))}
              </tr>
            </tbody>
          </table>

        }
       
  </div>
    </div>
   
  
  )
}

export default BlockResultSX