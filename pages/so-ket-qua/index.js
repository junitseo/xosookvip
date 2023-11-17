import React from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"

function ThreeRegionLottery() {
  return (
    <div className={stylesCss['wrapper']}>
      <Meta title="Sổ kết quả"/>
      <div style={{flex: 1}}>
        <h2 className="title-heading">KẾT QUẢ XỔ SỐ</h2>
        <BlockResultSX title="xsmn thứ 3, xsmn ngày 24/10/2023" />
        <BlockResultLoto />
        <div style={{marginTop: 20}}></div>
        <BlockResultSX title="xsmb thứ 3, xsmn ngày 24/10/2023" />
        <BlockResultLoto />
      </div>
    </div>
  )
}

export default ThreeRegionLottery
