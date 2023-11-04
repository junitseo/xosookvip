import React, { useMemo } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultSX.module.css'

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
           border={0}
           className="bkqmiennam"
         >
           <tbody>
             <tr>
               <td valign="top">
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
               </td>
               <td valign="top">
                 <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                   <tbody>
                     <tr>
                       {dataKq.map(item => (
                         <td valign="top">
                           <table
                             width="100%"
                             cellSpacing={0}
                             cellPadding={0}
                             className={stylesCss['rightcl']}
                           >
                             <tbody>
                               <tr>
                                 <td className={stylesCss['tinh']}>{item.provinceName}</td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai8']}>
                                   {item[9].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai7']}>
                                   {item[8].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai6']}>
                                   {item[7].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai5']}>
                                   {item[6].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai4']}>
                                   {item[5].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai3']}>
                                   {item[4].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai2']}>
                                   {item[3].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giai1']}>
                                   {item[2].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
                               <tr>
                                 <td className={stylesCss['giaidb']}>
                                   {item[1].map(i => (
                                     <div key={i.number}>{i.number}</div>
                                   ))}
                                 </td>
                               </tr>
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
        }
       
  </div>
    </div>
   
  
  )
}

export default BlockResultSX