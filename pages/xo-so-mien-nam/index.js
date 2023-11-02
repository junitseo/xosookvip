import React, { useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"


function SouthernLottery() {


  return (
    <>
      <Meta title="Xổ số miền nam"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN NAM</h2>
        <BlockResultSX title="xsmn thứ 3, xsmn ngày 24/10/2023" />
        <BlockResultLoto />
      </div>
      <SideBarRight />
    </div>
    </>
  
  )
}

export default SouthernLottery
