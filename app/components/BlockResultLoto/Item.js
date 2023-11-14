import React, { useMemo } from 'react'
import stylesCss from '../../../styles/ComponentCSS/BlockResultLoto.module.css'

function ItemLoto({data}) {

  const mergedData = useMemo(() => {
    const d = [];
    for(let key = 0; key <= 9 ; key++) {
      const mergedItem = {
        resultHead: data.resultHead[key] || [],
        resultEnd: data.resultEnd[key] || []
      }
      d.push(mergedItem);
    }
    return d;
  },[data])
  return (
    <table className={stylesCss['wrapper-item']} width="100%" cellSpacing={0} cellPadding={2}>
      <tbody>
        <tr>
          <td colSpan={3} className={stylesCss['loto-title']}>
            <strong>{data.provinceName}</strong>
          </td>
        </tr>
        <tr>
          <td>Chục</td>
          <td className={stylesCss['loto-center']}>
            Số
          </td>
          <td>Đơn Vị</td>
        </tr>
        {mergedData.map((item, index) => (
          <tr key={item.loto}>
            <td>
            {item.resultEnd.map(i=> (
              <span>{i.loto.slice(0,1)} </span>
            ))}
            </td>
            <td  className={stylesCss['loto-center']}>
              <strong>{index}</strong>
            </td>
            <td>
            {item.resultHead.map(i=> (
              <span>{i.loto.slice(1,2)} </span>
            ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ItemLoto