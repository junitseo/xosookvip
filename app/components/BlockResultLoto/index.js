import React, { useState } from 'react'
import ItemLoto from './Item'
import stylesCss from '../../../styles/ComponentCSS/BlockResultLoto.module.css'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
function Loto({dataLoto=[], title}) {
  const [show, setShow] = useState(false)
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['head']}>{title} <span onClick={() => setShow(!show)}>{show?<AiOutlineCaretUp/>:<AiOutlineCaretDown />}</span></div>
      {
        show &&
        <div className={dataLoto.length >= 4?'grid-2': 'flex'} style={{gap: 5}}>
          {dataLoto.map((i, index) => (
            <ItemLoto key={index} data={i} />
          )) }
        </div>
      }
    </div>
  )
}

export default Loto