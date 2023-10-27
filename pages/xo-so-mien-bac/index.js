import React from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
function NorthernLottery() {
  return (
    <div className={stylesCss['wrapper']}>
      <SideBarLeft />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN BẮC</h2>
        <BlockResultSX title="xsmb thứ 3, xsmb ngày 24/10/2023" />
        <BlockResultLoto />
      </div>
      <SideBarRight />
    </div>
  )
}

export default NorthernLottery
