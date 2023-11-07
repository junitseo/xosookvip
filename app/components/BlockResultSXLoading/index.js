import React, { useMemo, useState } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultSX.module.css'
function BlockResultSXLoading({title}) {
  const [dataKq] = useState([1,2,3]);
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
              {/* <td className={stylesCss['col-rank']} valign="top">
                 <table
                   width="100%"
                   cellSpacing={0}
                   cellPadding={0}
                   border={0}
                   className={stylesCss['leftcl']}
                 >
                   <tbody>
                     <tr>
                       <td className={stylesCss['rank']}></td>
                     </tr>
                     <tr>
                       <td className={stylesCss['giai8']}> Giải tám</td>
                     </tr>
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
                         <a href="index.html"> Giải Đặc Biệt</a>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </td>  */}
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
                                {dataKq.map(item => (
                                 <td key={item} className={stylesCss['tinh']}></td>
                                ))}
                               </tr>
                               <tr>
                                <td className={stylesCss['giai8']}> Giải tám</td>
                                {dataKq.map(item => (
                                   <td key={item.provinceName + "8"} className={stylesCss['giai8']}>
                                      {Array.from({length: 1}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                 </td>
                                ))}
                                
                               </tr>
                               <tr>
                                <td className={stylesCss['giai7']}> Giải bảy</td>
                                  {dataKq.map(item => (
                                   <td key={item.provinceName + "7"} className={stylesCss['giai7']}>
                                      {Array.from({length: 1}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                 </td>
                                ))}
                               </tr>
                               <tr>
                                  <td className={stylesCss['giai6']}> Giải sáu</td>
                                    {dataKq.map(item => (
                                    <td key={item.provinceName + "6"} className={stylesCss['giai6']}>
                                      {Array.from({length: 3}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                 </td>
                                ))}
                               </tr>
                               <tr>
                                <td className={stylesCss['giai5']}> Giải năm</td>
                                    {dataKq.map(item => (
                                    <td key={item.provinceName + "5"} className={stylesCss['giai5']}>
                                      {Array.from({length: 1}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                 </td>
                                ))}
                               </tr>
                               <tr>
                                  <td className={stylesCss['giai4']}> Giải bốn</td>
                                    {dataKq.map(item => (
                                    <td key={item.provinceName + "4"} className={stylesCss['giai4']}>
                                      {Array.from({length: 7}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                  </td>
                                ))}
                               </tr>
                               <tr>
                                <td className={stylesCss['giai3']}> Giải ba</td>
                                  {dataKq.map(item => (
                                   <td key={item.provinceName + "3"} className={stylesCss['giai3']}>
                                      {Array.from({length: 2}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}                                 </td>
                                ))}
                               </tr>
                               <tr>
                                  <td className={stylesCss['giai2']}>Giải hai</td>
                                    {dataKq.map(item => (
                                      <td key={item.provinceName + "2"} className={stylesCss['giai2']}>
                                      {Array.from({length: 1}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                 </td>
                                ))}
                               </tr>
                               <tr>
                                  <td className={stylesCss['giai1']}> Giải nhất</td>
                                    {dataKq.map(item => (
                                      <td key={item.provinceName + "1"} className={stylesCss['giai1']}>
                                      {Array.from({length: 1}).map(i => (
                                        <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
                                      ))}
                                 </td>
                                ))}
                               </tr>
                               <tr>
                                <td className={stylesCss['giaidb']}> Giải đặc biệt</td>
                                {dataKq.map(item => (
                                   <td key={item.provinceName + "db"} className={stylesCss['giaidb']}>
                                   {Array.from({length: 1}).map(i => (
                                     <div key={i}>{<img src={"/loading.gif"} alt="" />}</div>
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