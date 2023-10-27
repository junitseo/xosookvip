import React from 'react'
import ItemLoto from './Item'
import stylesCss from '../../../styles/ComponentCSS/BlockResultLoto.module.css'

function Loto() {
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['head']}>Bảng Loto xổ số Miền Nam -  24/10/2023</div>
      <div style={{display: 'flex', gap: 10}}>
        <ItemLoto />
        <ItemLoto />
      </div>

    </div>
  )
}

export default Loto